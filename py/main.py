"""
Usage:
python main.py <path to data.csv file> <path to sequence file>
"""

import csv
import sys
import os

sequence = open(sys.argv[2], 'r').read()


with open(sys.argv[1]) as csv_file:
	csv_reader = csv.reader(csv_file, delimiter=',')

	for row in csv_reader:
		if row != ['name', 'AGATC', 'AATG', 'TATC']:
			name = row[0]
			AGATCseq = 'AGATC' * int(row[1])
			AATGseq = 'AATG' * int(row[2])
			TATCseq = 'TATC' * int(row[3])
			if (AGATCseq in sequence and AATGseq in sequence and TATCseq in sequence):
				print(name)
				os._exit(1)
			else:
				continue
			
	print('No match')