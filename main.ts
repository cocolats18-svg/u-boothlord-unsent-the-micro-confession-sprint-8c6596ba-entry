// Unsent: The Micro-Confession Sprint
// u-boothlord-unsent-the-micro-confession-sprint-8c6596ba
// Writes the two-part micro-confession to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).

const TO_LINE =
  "To: the engineer who stayed up fixing my bug";

const UNSENT_LINE =
  "I knew the fix before you did. I waited until you found it yourself because I didn't want you to feel useless.";

import { mkdirSync, writeFileSync } from "node:fs";

// The entry is exactly two parts: the To: line, then the unsent line
// itself, joined by a single newline, with no explanation after it.
const entry = `${TO_LINE}\n${UNSENT_LINE}`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
