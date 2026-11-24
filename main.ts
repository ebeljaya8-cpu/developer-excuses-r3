// Developer Excuses, round 3 — a fresh one-liner, written in this session.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  'The junior dev asked me to explain my code so I cried and whispered "it just works" for twenty minutes.';

// A one-liner entry must stay inside the 1-200 character window.
// Verified: this line is 103 characters, one sentence, one period.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
