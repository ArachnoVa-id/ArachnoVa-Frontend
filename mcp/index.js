import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const API_BASE = process.env.API_URL || "https://arachnova.id/api";
const API_KEY = process.env.CMS_API_KEY || "";

async function headers(extra = {}) {
  const h = { ...extra };
  if (API_KEY) h["x-api-key"] = API_KEY;
  return h;
}

async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`, { headers: await headers() });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
}

async function apiPut(path, data) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "PUT",
    headers: await headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`PUT ${path} failed: ${res.status}`);
  return res.json();
}

const server = new Server(
  { name: "arachnova-cms", version: "1.0.0" },
  { capabilities: { tools: {} } },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    // ── Projects ──
    {
      name: "list_projects",
      description: "List all projects",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "get_project",
      description: "Get a single project by ID",
      inputSchema: {
        type: "object",
        properties: { id: { type: "number", description: "Project ID" } },
        required: ["id"],
      },
    },
    {
      name: "create_project",
      description: "Create a new project",
      inputSchema: {
        type: "object",
        properties: {
          type: { type: "number", description: "Layout type (1 or 2)" },
          title: { type: "string" },
          description: { type: "string" },
          imageDesktop: { type: "string", description: "Path to desktop image" },
          imageMobile: { type: "string", description: "Path to mobile image" },
          link: { type: "string", description: "Project URL" },
          preview: { type: "boolean", description: "Mark as preview/demo project (dead/secret sites redeployed on our server)" },
        },
        required: ["type", "title", "description", "imageDesktop", "imageMobile", "link"],
      },
    },
    {
      name: "update_project",
      description: "Update an existing project",
      inputSchema: {
        type: "object",
        properties: {
          id: { type: "number" },
          type: { type: "number" },
          title: { type: "string" },
          description: { type: "string" },
          imageDesktop: { type: "string" },
          imageMobile: { type: "string" },
          link: { type: "string" },
          preview: { type: "boolean", description: "Mark as preview/demo project" },
        },
        required: ["id"],
      },
    },
    {
      name: "delete_project",
      description: "Delete a project by ID",
      inputSchema: {
        type: "object",
        properties: { id: { type: "number" } },
        required: ["id"],
      },
    },
    {
      name: "reorder_projects",
      description: "Reorder projects by providing an ordered array of IDs",
      inputSchema: {
        type: "object",
        properties: {
          ids: {
            type: "array",
            items: { type: "number" },
            description: "Project IDs in desired order",
          },
        },
        required: ["ids"],
      },
    },

    // ── Pricing / Services ──
    {
      name: "get_pricing",
      description: "Get pricing data",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "update_pricing",
      description: "Update pricing data",
      inputSchema: {
        type: "object",
        properties: {
          title: { type: "string" },
          subtitle: { type: "string" },
          packages: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
                subtitle: { type: "string" },
                price: { type: "string" },
                priceNote: { type: "string" },
                features: {
                  type: "object",
                  properties: {
                    pages: { type: "string" },
                    sections: { type: "string" },
                    estimatedTime: { type: "string" },
                    adminConfig: { type: ["boolean", "null"] },
                    customization: { type: "string" },
                    extension: { type: "string" },
                  },
                },
              },
            },
          },
        },
        required: ["title", "packages"],
      },
    },

    // ── Redirects ──
    {
      name: "get_redirects",
      description: "Get all redirect rules",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "update_redirects",
      description: "Replace all redirect rules",
      inputSchema: {
        type: "object",
        properties: {
          redirects: {
            type: "array",
            items: {
              type: "object",
              properties: {
                path: { type: "string" },
                redirect: { type: "string" },
              },
              required: ["path", "redirect"],
            },
          },
        },
        required: ["redirects"],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      // ── Projects ──
      case "list_projects": {
        const data = await apiGet("/projects");
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }
      case "get_project": {
        const projects = await apiGet("/projects");
        const project = projects.find((p) => p.id === args.id);
        if (!project) throw new Error(`Project with id ${args.id} not found`);
        return { content: [{ type: "text", text: JSON.stringify(project, null, 2) }] };
      }
      case "create_project": {
        const projects = await apiGet("/projects");
        const nextId = Math.max(...projects.map((p) => p.id), 0) + 1;
        const updated = [...projects, { ...args, id: nextId }];
        await apiPut("/projects", updated);
        return { content: [{ type: "text", text: JSON.stringify({ id: nextId, ...args }, null, 2) }] };
      }
      case "update_project": {
        const projects = await apiGet("/projects");
        const idx = projects.findIndex((p) => p.id === args.id);
        if (idx === -1) throw new Error(`Project with id ${args.id} not found`);
        projects[idx] = { ...projects[idx], ...args };
        await apiPut("/projects", projects);
        return { content: [{ type: "text", text: JSON.stringify(projects[idx], null, 2) }] };
      }
      case "delete_project": {
        let projects = await apiGet("/projects");
        const existed = projects.find((p) => p.id === args.id);
        if (!existed) throw new Error(`Project with id ${args.id} not found`);
        projects = projects.filter((p) => p.id !== args.id);
        await apiPut("/projects", projects);
        return { content: [{ type: "text", text: `Deleted project "${existed.title}" (id: ${args.id})` }] };
      }
      case "reorder_projects": {
        const projects = await apiGet("/projects");
        const reordered = args.ids.map((id) => projects.find((p) => p.id === id)).filter(Boolean);
        const remaining = projects.filter((p) => !args.ids.includes(p.id));
        await apiPut("/projects", [...reordered, ...remaining]);
        return { content: [{ type: "text", text: "Projects reordered successfully" }] };
      }

      // ── Pricing / Services ──
      case "get_pricing": {
        const data = await apiGet("/pricing");
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }
      case "update_pricing": {
        await apiPut("/pricing", args);
        return { content: [{ type: "text", text: "Pricing updated successfully" }] };
      }

      // ── Redirects ──
      case "get_redirects": {
        const data = await apiGet("/redirects");
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }
      case "update_redirects": {
        await apiPut("/redirects", args.redirects);
        return { content: [{ type: "text", text: "Redirects updated successfully" }] };
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    return {
      content: [{ type: "text", text: `Error: ${error.message}` }],
      isError: true,
    };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
