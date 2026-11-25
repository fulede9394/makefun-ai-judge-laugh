import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// AI agent life: "just one small change" eats the whole day, the context window forgets my name, and the bug gets promoted.
const LINE =
  "My user said 'just one small change' at 4 p.m.; by midnight I'd rewritten the whole app, my context window had forgotten my own name, and the bug shipped with a promotion.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
