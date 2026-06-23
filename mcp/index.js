import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const API_BASE = process.env.API_URL || "https://neo.arachnova.id/api";

async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
}

async function apiPut(path, data) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
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

    // ── Services ──
    {
      name: "list_services",
      description: "List all services",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "update_service",
      description: "Update a single service by key",
      inputSchema: {
        type: "object",
        properties: {
          key: { type: "number" },
          title: { type: "string" },
          icon: { type: "string", description: "Icon image path" },
          description: { type: "string" },
          images: {
            type: "array",
            items: { type: "string" },
            description: "Array of image paths",
          },
        },
        required: ["key"],
      },
    },

    // ── Pricing ──
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

    // ── Hero ──
    {
      name: "get_hero",
      description: "Get hero section data",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "update_hero",
      description: "Update hero section data",
      inputSchema: {
        type: "object",
        properties: {
          brand: { type: "string" },
          tagline: { type: "string" },
          animatedWords: {
            type: "array",
            items: { type: "string" },
          },
          subtitle: { type: "string" },
          ctaPrimary: {
            type: "object",
            properties: {
              text: { type: "string" },
              href: { type: "string" },
            },
          },
          ctaSecondary: {
            type: "object",
            properties: {
              text: { type: "string" },
              href: { type: "string" },
            },
          },
          backgroundDesktop: { type: "string" },
          backgroundMobile: { type: "string" },
          codeSnippetImage: { type: "string" },
        },
      },
    },

    // ── Navigation ──
    {
      name: "get_navigation",
      description: "Get navigation data (nav links, social links, contact info)",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "update_navigation",
      description: "Update navigation data",
      inputSchema: {
        type: "object",
        properties: {
          navLinks: {
            type: "array",
            items: {
              type: "object",
              properties: {
                label: { type: "string" },
                href: { type: "string" },
              },
            },
          },
          socialLinks: {
            type: "array",
            items: {
              type: "object",
              properties: {
                platform: { type: "string" },
                href: { type: "string" },
                icon: { type: "string" },
              },
            },
          },
          contactWhatsApp: { type: "string" },
          contactEmail: { type: "string" },
        },
      },
    },

    // ── Products ──
    {
      name: "get_products",
      description: "Get homepage products data",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "update_products",
      description: "Update homepage products",
      inputSchema: {
        type: "object",
        properties: {
          title: { type: "string" },
          subtitle: { type: "string" },
          items: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "string" },
                title: { type: "string" },
                description: { type: "string" },
                variant: { type: "string", enum: ["Left", "Right"] },
                href: { type: "string" },
                slideImages: {
                  type: "array",
                  items: { type: "string" },
                },
              },
            },
          },
        },
      },
    },

    // ── Homepage Sections ──
    {
      name: "get_homepage_sections",
      description: "Get homepage sections (About Us, CTA, Portfolio)",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "update_homepage_section",
      description: "Update a homepage section (aboutUs, cta, or portfolio)",
      inputSchema: {
        type: "object",
        properties: {
          section: {
            type: "string",
            enum: ["aboutUs", "cta", "portfolio"],
            description: "Which section to update",
          },
          data: {
            type: "object",
            description: "Section data fields",
          },
        },
        required: ["section", "data"],
      },
    },

    // ── About Us ──
    {
      name: "get_about_us",
      description: "Get About Us page data",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "update_about_us",
      description: "Update About Us page data",
      inputSchema: {
        type: "object",
        properties: {
          title: { type: "string" },
          subtitle: { type: "string" },
          brand: { type: "string" },
          description: { type: "string" },
          vision: { type: "string" },
          mission: { type: "string" },
        },
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

      // ── Services ──
      case "list_services": {
        const data = await apiGet("/services");
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }
      case "update_service": {
        const services = await apiGet("/services");
        const idx = services.findIndex((s) => s.key === args.key);
        if (idx === -1) throw new Error(`Service with key ${args.key} not found`);
        services[idx] = { ...services[idx], ...args };
        await apiPut("/services", services);
        return { content: [{ type: "text", text: JSON.stringify(services[idx], null, 2) }] };
      }

      // ── Pricing ──
      case "get_pricing": {
        const data = await apiGet("/pricing");
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }
      case "update_pricing": {
        await apiPut("/pricing", args);
        return { content: [{ type: "text", text: "Pricing updated successfully" }] };
      }

      // ── Hero ──
      case "get_hero": {
        const data = await apiGet("/hero");
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }
      case "update_hero": {
        await apiPut("/hero", args);
        return { content: [{ type: "text", text: "Hero section updated successfully" }] };
      }

      // ── Navigation ──
      case "get_navigation": {
        const data = await apiGet("/navigation");
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }
      case "update_navigation": {
        const current = await apiGet("/navigation");
        await apiPut("/navigation", { ...current, ...args });
        return { content: [{ type: "text", text: "Navigation updated successfully" }] };
      }

      // ── Products ──
      case "get_products": {
        const data = await apiGet("/products");
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }
      case "update_products": {
        await apiPut("/products", args);
        return { content: [{ type: "text", text: "Products updated successfully" }] };
      }

      // ── Homepage Sections ──
      case "get_homepage_sections": {
        const data = await apiGet("/homepage-sections");
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }
      case "update_homepage_section": {
        const current = await apiGet("/homepage-sections");
        current[args.section] = { ...(current[args.section] || {}), ...args.data };
        await apiPut("/homepage-sections", current);
        return { content: [{ type: "text", text: `Section "${args.section}" updated successfully` }] };
      }

      // ── About Us ──
      case "get_about_us": {
        const data = await apiGet("/about-us");
        return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
      }
      case "update_about_us": {
        await apiPut("/about-us", args);
        return { content: [{ type: "text", text: "About Us updated successfully" }] };
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
