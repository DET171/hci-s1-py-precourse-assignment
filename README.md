# HCI S1 EC3 Python Pre-course exemption assignment
The formatting and images are a bit broken. Cope.

The question is below:

**Background**

You have no job and no life. Unfortunately you weren&#39;t able to buy a life from anywhere, but you managed to secure a loan from the bank to pay for a fake degree from [some foreign university](https://www.straitstimes.com/singapore/mom-probes-15-for-fake-educational-qualifications#:~:text=The%20Indian%20university%20in%20Himachal,team%20in%20India%20had%20found.).

Congratulations! You now have a Bachelor&#39;s degree in forensic science!

Before you even began looking for a job, you received an email that will completely change your life. You couldn&#39;t believe your eyes. It&#39;s not crazy, but the Navy wants you to join them as a Junior Forensic Scientist. The food there is surprisingly good, so you accept the offer.

On your first day of work, your superior, Senior Forensic Scientist Ho Chi Minh gave you the following instructions for your very first assignment:

Implement a Python 3 program that identifies a person based on their DNA.

&quot;But I know nothing about DNA - I mean, I know nothing about programming!&quot; you protested.

&quot;It may take three years, it may take five, it may take ten, but you must do it somehow, or you will lose your job.&quot; Ho Chi Minh did not mince his words.

Desperate, you bought a forensic science textbook using some complimentary Popular vouchers that came with the fake degree. The next day at work, you flipped open a random page on the textbook and started reading:

| DNA, the carrier of genetic information in living things, has been used in criminal justice for decades. But how, exactly, does DNA profiling work? Given a sequence of DNA, how can forensic investigators identify to whom it belongs?Well, DNA is really just a sequence of billions of molecules called nucleotides. Each nucleotide of DNA contains one of four different bases: adenine (A), cytosine (C), guanine (G), or thymine (T). Some portions of this sequence (i.e. genome) are very similar across almost all humans, but other portions of the sequence have a higher genetic diversity and thus vary more across the population.One place where DNA tends to have high genetic diversity is in Short Tandem Repeats (STRs). An STR is a short sequence of DNA bases that tends to repeat consecutively numerous times at specific locations inside of a person&#39;s DNA. The number of times any particular STR repeats varies a lot among individuals. In the DNA samples below, for example, Alice has the STR AGAT repeated four times in her DNA, while Bob has the same STR repeated five times. ![](RackMultipart20220305-4-zbw4o5_html_f4e576304ed9fb99.png)Using multiple STRs, rather than just one, can improve the accuracy of DNA profiling. CODIS, The FBI&#39;s [DNA database](https://www.fbi.gov/services/laboratory/biometric-analysis/codis/codis-and-ndis-fact-sheet), uses 20 different STRs as part of its DNA profiling process.What might such a DNA database look like? Well, in its simplet form, you could imsagine formatting a DNA database as a CSV (comma-separated values) file, wherein each row corresponds to an individual, and each column corresponds to a particular STR.name,AGAT,AATG,TATCAlice,28,42,14Bob,17,22,19Charlie,36,18,25 ![Shape 2](RackMultipart20220305-4-zbw4o5_html_29589196bcf68570.gif)The data in the above file would suggest that Alice has the sequence AGAT repeated 28 times consecutively somewhere in her DNA, the sequence AATG repeated 42 times, and TATC repeated 14 times. Bob, meanwhile, has those same three STRs repeated 17 times, 22 times, and 19 times, respectively. And Charlie has those same three STRs repeated 36, 18, and 25 times, respectively.So given a sequence of DNA, how might you identify to whom it belongs? Well, imagine that you looked through the DNA sequence for the longest consecutive sequence of repeated AGATs and found that the longest sequence was 17 repeats long. If you then found that the longest sequence of AATG is 22 repeats long, and the longest sequence of TATC is 19 repeats long, that would provide pretty good evidence that the DNA was Bob&#39;s. Of course, it&#39;s also possible that once you take the counts for each of the STRs, it doesn&#39;t match anyone in your DNA database, in which case you have no match. |
| --- |

&quot;WHAT ARE YOU DOING? GET BACK TO WORK!&quot; Ho Chi Minh barked. &quot;Woof woof woof,&quot; you retorted, closing the textbook.

**Task Specification**

In a file called dna.py, implement a program using Python 3 that identifies to whom a sequence of DNA belongs. The program should not accept any console input. Instead, your program should open a CSV file data.csv and a text file sequence.txt and read their contents into memory.

The CSV file will resemble the one you saw in your forensic science textbook. In other words, you may assume that the first row of the CSV file will be the column names. The first column will be the word name and the remaining columns will be the STR sequences themselves.

For each of the STRs (from the first line of the CSV file), your program should compute the longest run of consecutive repeats of the STR in the DNA sequence to identify.

If the STR counts match exactly with any of the individuals in the CSV file, your program should print out the name of the matching individual. You may assume that the STR counts will not match more than one individual. If the STR counts do not match exactly with any of the individuals in the CSV file, your program should print &quot;No match&quot;.

**Example**

data.csv:

name,AGATC,AATG,TATC

Alice,2,8,3

Bob,4,1,5

Charlie,3,2,5

 ![Shape 2](RackMultipart20220305-4-zbw4o5_html_29589196bcf68570.gif)

sequence.txt:

AAGGTAAGTTTAGAATATAAAAGGTGAGTTAAATAGAATAGGTTAAAATTAAAGGAGATCAGATCAGATCAGATCTATCTATCTATCTATCTATCAGAAAAGAGTAAATAGTTAAAGAGTAAGATATTGAATTAATGGAAAATATTGTTGGGGAAAGGAGGGATAGAAGG

 ![Shape 2](RackMultipart20220305-4-zbw4o5_html_5a1b9cfe24c59f44.gif)

Output to console:

Bob

 ![Shape 2](RackMultipart20220305-4-zbw4o5_html_32374f295acc7c33.gif)

**Testing**

A zip file with the data.csv as shown in the **Example** section and some sample DNA sequences (labelled numerically from 1.txt to 4.txt) has been provided [here](https://drive.google.com/file/d/1VVDYlU__gFp7_u6HxU-NPsCE3qySJASl/view?usp=sharing).

Run your program with data.csv and 1.txt. Your program should output Bob.

Run your program with data.csv and 2.txt. Your program should output No match.

Run your program with data.csv and 3.txt. Your program should output No match.

Run your program with data.csv and 4.txt. Your program should output Alice.

**Hints**

You may find Python&#39;s [csv](https://docs.python.org/3/library/csv.html) module helpful for reading CSV files into memory. You may want to take advantage of either [csv.reader](https://docs.python.org/3/library/csv.html#csv.reader) or [csv.DictReader](https://docs.python.org/3/library/csv.html#csv.DictReader).

The [open](https://docs.python.org/3.3/tutorial/inputoutput.html#reading-and-writing-files) and [read](https://docs.python.org/3.3/tutorial/inputoutput.html#methods-of-file-objects) functions may prove useful for reading text files into memory.

Consider what data structures might be helpful for keeping tracking of information in your program. A [list](https://docs.python.org/3/tutorial/introduction.html#lists) or a [dict](https://docs.python.org/3/tutorial/datastructures.html#dictionaries) may prove useful.

**Extra Hints**

This assignment was adapted from Harvard&#39;s CS50 course. You may watch this walkthrough video [here](https://www.youtube.com/watch?v=j84b_EgntcQ&amp;feature=emb_logo&amp;ab_channel=CS50), but do note that some parts may not be relevant to this assignment (e.g. command line arguments).