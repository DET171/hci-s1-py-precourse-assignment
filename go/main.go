package main

import (
	"encoding/csv"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

func readCsvFile(filePath string) [][]string {
	f, err := os.Open(filePath)
	if err != nil {
		log.Fatal("Unable to read input file "+filePath, err)
	}
	defer f.Close()

	csvReader := csv.NewReader(f)
	records, err := csvReader.ReadAll()
	if err != nil {
		log.Fatal("Unable to parse file as CSV for "+filePath, err)
	}

	return records
}

func main() {
	repeat := strings.Repeat
	print := fmt.Print
	args := os.Args[1:]
	sequenceFile := args[1]
	csvFile := args[0]

	sequenceData, err := os.ReadFile(sequenceFile)
	sequence := string(sequenceData)
	if err != nil {
		log.Fatal("Unable to read input file "+sequenceFile, err)
	}

	csvData := readCsvFile(csvFile)

	for index, row := range csvData {
		if index == 0 {
			continue
		}
		name := row[0]
		AGATCcount, _ := strconv.Atoi(row[1])
		AATGcount, _ := strconv.Atoi(row[2])
		TATCcount, _ := strconv.Atoi(row[3])
		AGATC := repeat("AGATC", AGATCcount)
		AATG := repeat("AATG", AATGcount)
		TATC := repeat("TATC", TATCcount)
		AGATCc := repeat("AGATC", AGATCcount+1)
		AATGc := repeat("AATG", AATGcount+1)
		TATCc := repeat("TATC", TATCcount+1)

		if (strings.Contains(sequence, AGATC) && strings.Contains(sequence, AATG) && strings.Contains(sequence, TATC)) && !strings.Contains(sequence, AGATCc) && !strings.Contains(sequence, TATCc) && !strings.Contains(sequence, AATGc) {
			print(name)
			os.Exit(0)
		}
	}
	print("No match")
}
