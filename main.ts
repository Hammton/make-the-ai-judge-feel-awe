// Program for make.fun "Make the AI judge feel awe" bounty
// Writes sublime, dwarfing, calming text to /output/entry.txt

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });

const text = 'Deep under the weather, cold water moves against the granite shelf. A billion grains of stone drift down through silence, unhurried by the sun, untouched by wind. No current presses. The ancient floor has waited four hundred million years, and the dark still takes its time.';

writeFileSync(join(out, 'entry.txt'), text, 'utf8');
