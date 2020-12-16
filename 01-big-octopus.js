function quadraticBiggestFish(fishes) {
  let longestFish = null;
  for (let fish1 of fishes) {
    for(let i = 0; i < fishes.length; i++) {
      let fish2 = fishes[i];
      if (fish1 <= fish2) {
        longestFish = fish2
      } else {
        longestFish = fish1
      }
    }

  }
  return longestFish
}
const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
// console.log(quadraticBiggestFish(fishies));

function nlognBiggestFish(fishes) {
  fishes.sort((str1, str2) => str2.length - str1.length);

  return fishes[0];
}
// console.log(nlognBiggestFish(fishies));

function linearBiggestFish(fishes) {
  return fishes.reduce((accm, element) => {
    if (accm.length > element.length){
      return accm;
    } else {
      return element;
    }
  })
}

//console.log(linearBiggestFish(fishies));

tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  for (let i = 0; i < tilesArray.length; i++) {
    if (tilesArray[i] === direction) return i;
  }
}

//console.log(slowDance("right", tilesArray));


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  return tilesObj[direction];
}

console.log(fastDance("right", tilesObj));
