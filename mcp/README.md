# Soumya Paul · CV MCP

Read-only [Model Context Protocol](https://modelcontextprotocol.io) server for Soumya Paul’s public CV. Agents can call tools to answer questions with source links — no API key.

**Live endpoint:** https://soumya-paul-mcp.soumyapaul.workers.dev/mcp

## Tools

| Tool | Purpose |
|------|---------|
| `overview` | Start here — profile, strongest evidence, contacts |
| `get_profile` | Full public CV as Markdown |
| `find_evidence_for_role` | Match a job description to published experience |
| `search_content` | Keyword search across roles, projects, awards |
| `read_content` | Read one source by id |
| `list_sources` | List all content ids |

## Connect

**Claude Code**
```bash
claude mcp add --transport http soumya-paul https://soumya-paul-mcp.soumyapaul.workers.dev/mcp
```

**Cursor** (`mcp.json`)
```json
{"mcpServers":{"soumya-paul":{"url":"https://soumya-paul-mcp.soumyapaul.workers.dev/mcp"}}}
```

## Develop

```bash
cd mcp
npm install
npm run dev      # http://127.0.0.1:8787/mcp
npm run deploy   # Cloudflare Workers
```

Edit CV facts in `src/data.ts`, then redeploy.
