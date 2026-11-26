import { createMcpHandler } from "agents/mcp/server";
import { createServer } from "./server";

const mcpHandler = createMcpHandler(createServer, {
  route: "/mcp",
  allowedOriginHostnames: "*",
  allowedHostnames: [
    "soumya-paul-mcp.soumyapaul.workers.dev",
    "localhost",
    "127.0.0.1",
  ],
});

function landingPage(mcpUrl: string): Response {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Soumya Paul · MCP</title>
<style>
body{margin:0;font:17px/1.5 Georgia,serif;background:#17150f;color:#ece6d8;padding:48px 24px}
main{max-width:42rem;margin:0 auto}
a{color:#91acf4}
code,pre{font:14px/1.5 ui-monospace,monospace}
pre{padding:1rem;border:1px solid #5c5343;overflow:auto}
.muted{color:#b8b09f}
</style>
</head>
<body>
<main>
  <p class="muted">Soumya Paul · read-only CV MCP</p>
  <h1>Ask your agent about my CV</h1>
  <p>Streamable HTTP endpoint (no key):</p>
  <pre><code>${mcpUrl}</code></pre>
  <p>Human site: <a href="https://bensppaul2021.github.io/">bensppaul2021.github.io</a></p>
</main>
</body>
</html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
}

export default {
  async fetch(request: Request, env: unknown, ctx: ExecutionContext) {
    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "") {
      const mcpUrl = `${url.origin}/mcp`;
      return landingPage(mcpUrl);
    }

    if (url.pathname === "/mcp" || url.pathname.startsWith("/mcp/")) {
      return mcpHandler(request, env, ctx);
    }

    return new Response("Not found", { status: 404 });
  },
};
