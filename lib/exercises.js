// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: o(n)
// Space Complexity: o(n)
function grouped_anagrams(strings) {
  const hashMap = {};

  for(string of strings) {
    const sorted = string
    .split('')
    .sort()
    .join('')

    hashMap[sorted] ? hashMap[sorted].push(string) : hashMap[sorted] = [string];
  }

  return Object.values(hashMap);
}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: o(n)
// Space Complexity: o(n)
function top_k_frequent_elements(list, k) {
  let hash = {}
  kArr = []
  highest = 0

  list.forEach(element => {
    hash[element] ? hash[element] += 1 : hash[element] = 1;

  })

  for (value in hash) {
    if (hash[value] > highest) {
      highest = parseInt(value)
      kArr.push(highest)
    }
  }
  return kArr;
}


// This method will return true if the table is still
//   a valid sudoku table.
//   Each element can either be a ".", or a digit 1-9
//   The same digit cannot appear twice or more in the same 
//   row, column or 3x3 subgrid
// Time Complexity: o(n^2)
// Space Complexity: o(n^3)
function valid_sudoku(table) {
  const row = {}
  const column = {}
  const section = {}
  for (let i=0; i<9; i++) {
    for (let j=0; j<9; j++) {
      const value = table[i][j];
      if(!value !== '.') {
        const box = Math.floor(i/3)*3+Math.floor(j/3);
        if(row[`${i} - ${value}`] || column[`${j} - ${value}`] || section[`${box} - ${value}`]) {
          return false;
        }
        row[`${i} - ${value}`] = true;
        column[`${i} - ${value}`] = true;
        section[`${i} - ${value}`] = true;      
      }
    }
  }
}

module.exports = {
  grouped_anagrams,
  top_k_frequent_elements,
  valid_sudoku
};
