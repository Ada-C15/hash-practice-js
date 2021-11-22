// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: o(n)
// Space Complexity: o(n)
function grouped_anagrams(strings) {
  let anagrams = [];
  let stringData = {};

  for (let i = 0; i < strings.length; i++) {
    let word = strings[i];
    let wordSorted = word.split("").sort().join("")
    // sort: merge sort on firefox, O(n log n) 
    // sort: merge/insertion hybrid Timsort on chrome O(n) https://v8.dev/blog/array-sort
      if (stringData[wordSorted]) {
        stringData[wordSorted].push(word)
      } else {
        stringData[wordSorted] = [word]
      }
  }
  anagrams= Object.values(stringData)

  return anagrams;
}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: O(n)
// Space Complexity: O(n)
function top_k_frequent_elements(list, k) {
  hash = {};
  // build obj
  for (let i = 0; i < list.length; i++) {
    if (hash[list[i]]) {
      hash[list[i]]++;
    } else {
      hash[list[i]] = 1;
    }
  }
  // sort and slice
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
  let sudokuData = {
    rows: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null
    },
    cols:{},
    squares:{
      "00": null,
      "03": null,
      "06": null,
      "30": null,
      "33": null,
      "36": null,
      "60": null,
      "63": null,
      "66": null,
  }
  }
  return Object.values(sudokuData)
}

module.exports = {
  grouped_anagrams,
  top_k_frequent_elements,
  valid_sudoku,
};
