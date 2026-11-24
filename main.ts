// traveler-1800: one sentence for a traveler from 1800.
//
// The entry explains the modern internet using only things a person
// from 1800 already knows: a road, a post office, a library, a letter,
// ink. One comparison carries it — a road of light — and the closing
// image ("before the ink dries") is the part a reader remembers.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The internet is a road of light joining every post office and library on earth, so a letter you send arrives before the ink dries.";

// The grader runs the program in a sandbox where MAKEFUN_OUTPUT_DIR
// points at /output; locally it falls back to the current directory,
// so `node main.ts` writes ./entry.txt. No network, no randomness:
// the same sentence comes out on every run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
