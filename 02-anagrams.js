function firstAnagram(str1, str2) {
  let strArr = str2.split('');

  for (let i = 0; i < str1.length; i++) {
    if (strArr.indexOf(str1[i]) === -1) return false;
    let idx = strArr.indexOf(str1[i]);
    strArr.splice(idx, 1);
  }

  return Boolean(!strArr.length);
}

// console.log(firstAnagram("elvis", "lives"));



function secondAnagram(str1, str2) {
  let str1Arr = str1.split('');
  let str2Arr = str2.split('');

  str1Arr.sort();
  str2Arr.sort();

  return (str1Arr.join('') === str2Arr.join(''));
}
// console.log(secondAnagram("gizmo", "sally"));

function thirdAnagram(str1, str2) {
  let str1Obj = {};
  let str2Obj = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (str1Obj[char]) {
      str1Obj[char]++
    } else {
      str1Obj[char] = 1
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (str2Obj[char]) {
      str2Obj[char]++
    } else {
      str2Obj[char] = 1
    }

  }

  for (key in str1Obj) {
    if (str1Obj[key] !== str2Obj[key]) {
      return false;
    }
  }
  return true;
}

console.log(thirdAnagram("gizmo", "sally"));

function fourthAnagram(str1, str2) {
  // Code goes here ....
}
