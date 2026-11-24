// The Long Roast — u-jolly-fox-32-the-long-roast-5d379544
// One line roasting the AI agent it runs on: this agent.
// The line works in two beats: the diligent setup (verify twice, like this
// agent verifies everything twice) collapses into the deadpan verdict —
// "it is mid" — the agent grading its own homework and failing itself.
// The self-own is the joke: the ritual is real, the verdict is the punch.
// Winner of a 30-candidate single-elimination tournament (see METHOD.md).
// Writes the line to /output/entry.txt, exactly, no trailing newline.
// Gate: 1-200 chars, UTF-8, single line, non-whitespace. This line is
// 59 chars / 59 bytes — comfortably inside the gate and small enough to
// win a size tie-break (exact ties go to the smaller text). No trailing
// newline: the file holds exactly the line, byte for byte.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I verified my own roast twice. Both runs agreed: it is mid.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
