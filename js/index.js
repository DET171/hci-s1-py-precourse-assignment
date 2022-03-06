/** Usage: node index.js <path to csv file> <path to sequence file>
* e.g. node index.js ./data/data.csv ./data/2.txt
*/

const csv = require('csv');
const fs = require('fs');
const { join } = require('path');

if (!process.argv[2]) {
  console.error('Please provide a sequence file number');
  process.exit(1);
}

const seqNum = +process.argv[2];
let sequence;

try {
  sequence = fs.readFileSync(join(__dirname, `../data/${seqNum}.txt`), 'utf8');
}
catch (err) {
  console.error(err.message);
}

console.log(sequence);
