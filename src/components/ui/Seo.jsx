import { Helmet } from "react-helmet-async";
import { SEO_ROUTES, SITE_URL, SITE_NAME, OG_IMAGE, NOT_FOUND } from "@/lib/seoRoutes";

// Title, description, canonical and Open Graph/Twitter tags for a public page.
// `path` is a key of SEO_ROUTES; `notFound` renders the noindex 404 variant.
export default function Seo({ path, notFound = false }) {
  const meta = notFound ? NOT_FOUND : SEO_ROUTES[path] || SEO_ROUTES["/"];
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {notFound ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      {!notFound && <meta property="og:url" content={url} />}
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  );
}
