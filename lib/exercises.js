// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function grouped_anagrams(strings) {

  var dic_anagrams = {};

  for (let i = 0; i < strings.length; i++) {
    var wordkey = strings[i].split('').sort().join('');
    if (wordkey in dic_anagrams) {
      dic_anagrams[wordkey].push(strings[i])
    }
    else {
      dic_anagrams[wordkey] = [strings[i]]
    }
  }

  const output = []
  for (const [key, value] of Object.entries(dic_anagrams)) {
    output.push(value)
  }
  return output;
}



// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function top_k_frequent_elements(list, k) {
  if (list.length < 1) {
    return []
  }
  var highest_freq = 0
  var hash_ele = {}
  for (let i = 0; i < list.length; i++) {
    hash_ele[list[i]] = (hash_ele[list[i]] || 0) + 1;
    if (hash_ele[list[i]] > highest_freq) {
      highest_freq = hash_ele[list[i]]
    }
  }
  var counting_hash = {}
  for (const [key, value] of Object.entries(hash_ele)) {
    if (value in counting_hash) {
      counting_hash[value].push(key)
    }
    else {
      counting_hash[value] = [key]
    }
  }

  output = []
  while (output.length < k) {
    if (highest_freq in counting_hash) {
      for (let i = 0; i < counting_hash[highest_freq].length; i++) {
        if (output.length === k) {
          continue
        }
        var number = counting_hash[highest_freq][i]
        output.push(parseInt(number));
      }
    }
    highest_freq -= 1
  }
  return output
}



// This method will return true if the table is still
//   a valid sudoku table.
//   Each element can either be a ".", or a digit 1-9
//   The same digit cannot appear twice or more in the same 
//   row, column or 3x3 subgrid
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function valid_sudoku(table) {
  let rows = [[], [], [], [], [], [], [], [], []];
  let columns = [[], [], [], [], [], [], [], [], []];
  let boxes = [[], [], [], [], [], [], [], [], []];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {

      let cell = table[i][j];

      if(cell !== ".") {
        if (rows[i].includes(cell)) {
          return false
        } else rows[i].push(cell);

        if (columns[j].includes(cell)) {
          return false;
        } else columns[j].push(cell);

        let boxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3);

        if (boxes[boxIndex].includes(cell)) {
          return false;
        } else boxes[boxIndex].push(cell);

      }
    }
  }
  return true
}


module.exports = {
  grouped_anagrams,
  top_k_frequent_elements,
  valid_sudoku
};
