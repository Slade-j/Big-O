function badTwoSum(arr, targetSum) {
  for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) return true;
    }
  }

  return false;
}

//console.log(badTwoSum([0, 1, 5, 7], 6));  // [0,1,5]

function okayTwoSum1(arr, targetSum) {
  arr.sort();

  let lessThan = arr.filter(num => num <= targetSum);
  let diffArr = lessThan.map(num => targetSum - num).sort();

  const merged = [];


  while (lessThan.length && diffArr.length) {

    if (lessThan[0] < diffArr[0]) {
      merged.push(lessThan.shift());
    } else {
      merged.push(diffArr.shift());
    }
  }

  if (lessThan.length) {
    merged.concat(lessThan);
  } else {
    merged.concat(diffArr);
  }

  for (let i = 0; i < merged.length; i++) {
    if (merged[i + 1] === merged[i]) {
      return true
    }
  }

  return false;

}

console.log(okayTwoSum1([0, 1, 5, 7, 6], 13));



function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}


function twoSum(arr, targetSum) {
  // Code goes here ...
}


function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}
