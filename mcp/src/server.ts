import { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import {
  CONTENT,
  OVERVIEW,
  PROFILE_MD,
  SITE,
  findById,
  formatItem,
  searchContent,
} from "./data";

function text(body: string) {
  return { content: [{ type: "text" as const, text: body }] };
}

export function createServer() {
  const server = new McpServer({
    name: "soumya-paul",
    version: "1.0.0",
    title: "Soumya Paul — Senior LLM Expert",
    websiteUrl: SITE.website,
    description:
      "Soumya Paul’s public CV and career evidence, read-only. Start with overview. For a vacancy use find_evidence_for_role. Cite source links; do not invent qualifications.",
  });

  server.registerTool(
    "overview",
    {
      title: "Meet Soumya Paul",
      description:
        "Get a concise professional profile, strongest evidence, contacts, and how to explore his CV via this MCP. Start here.",
      inputSchema: z.object({}),
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async () => text(OVERVIEW),
  );

  server.registerTool(
    "get_profile",
    {
      title: "CV and professional strengths",
      description:
        "Read Soumya’s public CV: roles, education, skills, awards and contacts, with source links. Same approved facts as the human-readable CV.",
      inputSchema: z.object({}),
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async () => text(PROFILE_MD),
  );

  server.registerTool(
    "find_evidence_for_role",
    {
      title: "Find experience relevant to a role",
      description:
        "Match a role, hiring brief or full job description against Soumya’s published work. Returns the most relevant experience first, with contribution, excerpts and source links. Keyword retrieval only: no invented qualifications and no suitability score.",
      inputSchema: z.object({
        role: z
          .string()
          .min(1)
          .max(6000)
          .describe("Role title, required skills, or the full text of a vacancy."),
        limit: z.number().int().min(1).max(12).default(6).optional(),
      }),
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async ({ role, limit }) => {
      const hits = searchContent(role, limit ?? 6);
      if (!hits.length) {
        return text(
          `No direct published evidence matched that brief.\n\nSay what is not covered and suggest asking him directly:\n- ${SITE.email}\n- ${SITE.linkedin}\n\nFull CV: ${SITE.peopleUrl}`,
        );
      }
      const body = [
        `# Evidence for role`,
        ``,
        `Matched against published CV material only. No suitability score.`,
        ``,
        ...hits.map(
          (h, i) =>
            `## ${i + 1}. ${h.title} (score ${h.score})\n${h.when ? `_${h.when}${h.org ? ` · ${h.org}` : ""}_\n` : ""}\n**Contribution:** ${h.contribution}\n\n${h.body}\n\nSource: ${h.url}\nid: ${h.id}`,
        ),
        ``,
        `Next: call read_content with an id above, or get_profile for the full CV.`,
      ].join("\n");
      return text(body);
    },
  );

  server.registerTool(
    "search_content",
    {
      title: "Search CV and projects",
      description:
        "Search Soumya’s published roles, projects, awards, skills and education. Returns matching excerpts with source links and ids for read_content.",
      inputSchema: z.object({
        query: z.string().min(1).max(1200),
        kind: z
          .enum(["profile", "role", "award", "project", "education", "skill", "other"])
          .optional(),
        limit: z.number().int().min(1).max(12).default(6).optional(),
      }),
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async ({ query, kind, limit }) => {
      const hits = searchContent(query, limit ?? 6, kind);
      if (!hits.length) {
        return text(`No matches for “${query}”. Try broader terms, or call get_profile / overview.`);
      }
      return text(
        hits
          .map(
            (h) =>
              `## ${h.title} (${h.kind}, score ${h.score})\n${h.contribution}\n\n${h.body.slice(0, 500)}${h.body.length > 500 ? "…" : ""}\n\nSource: ${h.url}\nid: ${h.id}`,
          )
          .join("\n\n---\n\n"),
      );
    },
  );

  server.registerTool(
    "read_content",
    {
      title: "Read a complete source",
      description:
        "Read one published CV entry as Markdown with contribution and source link. Use ids from search_content, find_evidence_for_role, or overview.",
      inputSchema: z.object({
        id: z
          .string()
          .min(1)
          .max(160)
          .describe("Exact item id, e.g. role-embraceable, project-msr, project-e1, awards."),
      }),
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async ({ id }) => {
      const item = findById(id);
      if (!item) {
        const known = CONTENT.map((c) => c.id).join(", ");
        return text(`Unknown id “${id}”. Known ids: ${known}`);
      }
      return text(formatItem(item));
    },
  );

  server.registerTool(
    "list_sources",
    {
      title: "List published source ids",
      description: "List all published content ids, titles and kinds available through this MCP.",
      inputSchema: z.object({}),
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async () =>
      text(
        CONTENT.map((c) => `- \`${c.id}\` · ${c.kind} · ${c.title}${c.when ? ` (${c.when})` : ""}`).join(
          "\n",
        ),
      ),
  );

  return server;
}
