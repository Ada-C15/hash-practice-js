// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: ?
// Space Complexity: ?
function grouped_anagrams(strings) {
  let anagrams = [];
  let stringData = {};

  for (let i = 0; i < strings.length; i++) {
    let word = strings[i];
    stringData[word] = {};
    for (let j = 0; j < strings[i].length; j++) {
      let letter = word[j];
      if (stringData[word][letter]) {
        stringData[word][letter]++;
      } else {
        stringData[word][letter] = 1;
      }
    }
    for (let i = 0; i < strings.length; i++) {}
  }
  console.log(strings, anagrams, stringData);
  return anagrams;
}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: ?
// Space Complexity: ?
function top_k_frequent_elements(list, k) {
  hash = {};
  //build dict
  for (let i = 0; i < list.length; i++) {
    if (hash[list[i]]) {
      hash[list[i]]++;
    } else {
      hash[list[i]] = 1;
    }
  }
  let valuesNeeded = Object.keys(hash).sort(function (a, b) {
    return hash[b] - hash[a];
  }).slice(0, k).map((num) => Number(num));

  return valuesNeeded
}

// This method will return true if the table is still
//   a valid sudoku table.
//   Each element can either be a ".", or a digit 1-9
//   The same digit cannot appear twice or more in the same
//   row, column or 3x3 subgrid
// Time Complexity: ?
// Space Complexity: ?
function valid_sudoku(table) {
  throw new Error("Method hasn't been implemented yet!");
}

module.exports = {
  grouped_anagrams,
  top_k_frequent_elements,
  valid_sudoku,
};
