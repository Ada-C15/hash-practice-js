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

  if (list.length === 0) return [];

  list.forEach(element => {
    hash[element] ? hash[element] += 1 : hash[element] = 1;
  })

  for (let i=0; i<=list.length; i++) {
    if (hash[i] >= k) {
      kArr.push(i);
    }
  }

  if (kArr.length === 0) return list;
  if (kArr.length === list.length) return [list[0]];
  
  return kArr;
}

// This method will return true if the table is still
//   a valid sudoku table.
//   Each element can either be a ".", or a digit 1-9
//   The same digit cannot appear twice or more in the same 
//   row, column or 3x3 subgrid
// Time Complexity: o(1)
// Space Complexity: o(n)
// the time is dependent on the the rate of growth which in this case is const
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
