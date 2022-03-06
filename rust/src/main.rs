/*
* Usage: main <path to csv file> <path to sequence file>
* e.g.: main ./data/data.csv ./data/2.txt
*/

use std::env;
use std::fs;
use std::process::exit;
use serde::Deserialize;

#[derive(Deserialize)]
struct Record {
  name: String,
  AGATC: u128,
  AATG: u128,
  TATC: u128,
}

fn main() {
  let args: Vec<String> = env::args().collect();

  if args.len() < 3 {
    println!("Usage: main <path to csv file> <path to sequence file>");
    exit(1);
  }


  let csv_path = args[1].clone();
	let seq_path = args[2].clone();
	
  let csv_data = fs::read_to_string(csv_path).expect("Failed to read csv file");
  let sequence = fs::read_to_string(seq_path).expect("Failed to read sequence file");

  let mut reader = csv::Reader::from_reader(csv_data.as_bytes());

  for record in reader.deserialize() {
    let record: Record = record.unwrap();
    let name = record.name;
    let AGATC = &*("AGATC".repeat(record.AGATC.try_into().unwrap()));
    let AATG = &*("AATG".repeat(record.AATG.try_into().unwrap()));
    let TATC = &*("TATC".repeat(record.TATC.try_into().unwrap()));
    let AGATCc = &*("AGATC".repeat((record.AGATC + 1).try_into().unwrap()));
    let AATGc = &*("AATG".repeat((record.AATG + 1).try_into().unwrap()));
    let TATCc = &*("TATC".repeat((record.TATC + 1).try_into().unwrap()));

    if ((sequence.contains(AGATC) && sequence.contains(AATG) && sequence.contains(TATC))
      && !sequence.contains(AGATCc) && !sequence.contains(AATGc) && !sequence.contains(TATCc)
    ) {
      println!("{}", name);
      exit(0)
    }
  }
  println!("No match");
}

