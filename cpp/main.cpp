// NOTE: Build with C++2b
#include <bits/stdc++.h>
#include "debugging.hpp"
#include "rapidcsv.h"
#define ll long long

using namespace std;

string repeat(int n, string val) {
    ostringstream os;
    for(int i = 0; i < n; i++)
        os << val;
    return os.str();
}

int main(int argc, char* argv[]) {
  string sequence;
  rapidcsv::Document doc(argv[1]);

  ifstream sequenceFile(argv[2]);
  getline(sequenceFile, sequence);

  auto names = doc.GetColumn<string>("name");
  auto AGATCcount = doc.GetColumn<int>("AGATC");
  auto AATGcount = doc.GetColumn<int>("AATG");  
  auto TATCcount = doc.GetColumn<int>("TATC");

  for (ll int i = 0; i < names.size(); i++) {
    string name = names[i];
    string AGATC = repeat(AGATCcount[i], "AGATC");
    string AATG = repeat(AATGcount[i], "AATG");
    string TATC = repeat(TATCcount[i], "TATC");
    string AGATCc = repeat(AGATCcount[i] + 1, "AGATC");
    string AATGc = repeat(AATGcount[i] + 1, "AATG");
    string TATCc = repeat(TATCcount[i] + 1, "TATC");

    if ((sequence.contains(AGATC) && sequence.contains(AATG) && sequence.contains(TATC))
      && !sequence.contains(AGATCc) && !sequence.contains(AATGc) && !sequence.contains(TATCc)) {
      cout << name << endl;
      return 0;
    }
  }
  cout << "No match" << endl;
}