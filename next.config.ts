import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Disabled: the project root already has its own CLAUDE.md (Core/CLAUDE.md)
     and full doc set (Website-Audit.md, -Strategy.md, -Design.md) — Next's
     auto-generated root AGENTS.md/CLAUDE.md would collide with those. */
  agentRules: false,
};

export default nextConfig;
