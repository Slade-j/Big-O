function firstAnagram(str1, str2) {
  let strArr = str2.split('');

  for (let i = 0; i < str1.length; i++) {
    if (strArr.indexOf(str1[i]) === -1) return false;
    let idx = strArr.indexOf(str1[i]);
    strArr.splice(idx, 1);
  }

  return Boolean(!strArr.length);
}

console.log(firstAnagram("elvis", "lives"));



function secondAnagram(str1, str2) {
  // Code goes here ....
}


function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
