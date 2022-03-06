/** Usage: node index.js <path to csv file> <path to sequence file>
* e.g. node index.js ./data/data.csv ./data/2.txt
*/

import * as csv from 'csv-parse/sync';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url)); // ESM doesn't have __dirname

// Implementation starts below

if (process.argv.length < 4) {
  console.error('Please provide a sequence file number and a data.csv path');
  process.exit(1);
}

let sequence, rawCSV;

try {
  sequence = readFileSync(resolve(__dirname, process.argv[3]), 'utf8');
  rawCSV = '' + readFileSync(resolve(__dirname, process.argv[2]), 'utf8');
}
catch (err) {
  console.error(err.message);
  process.exit(1);
}

csv.parse(rawCSV, {
  from_line: 2,
}).forEach((data) => {
  const name = data[0];
  const AGATC = 'AGATC'.repeat(+data[1]);
  const AATG = 'AATG'.repeat(+data[2]);
  const TATC = 'TATC'.repeat(+data[3]);
  const AGATCc = 'AGATC'.repeat(1 + data[1]);
  const AATGc = 'AATG'.repeat(1 + data[2]);
  const TATCc = 'TATC'.repeat(1 + data[3]);
  if ((sequence.includes(AGATC) && sequence.includes(AATG) && sequence.includes(TATC) && (1)) {
    console.log(name);
    process.exit(0);
  }
})

console.log('No match');


