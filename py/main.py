import csv
import os

txtNum = input('Enter txt file number to read:')
sequence = open(f"../data/{txtNum}.txt", 'r').read()

with open('../data/data.csv') as csv_file:
	csv_reader = csv.reader(csv_file, delimiter=',')

	for row in csv_reader:
		if row != ['name', 'AGATC', 'AATG', 'TATC']:
			name = row[0]
			AGATCseq = 'AGATC' * int(row[1])
			AATGseq = 'AATG' * int(row[2])
			TATCseq = 'TATC' * int(row[3])
			if AATGseq in sequence and AATGseq in sequence and TATCseq in sequence:
				print(name)
				os._exit(1)
			else:
				continue
			
	print('No match')