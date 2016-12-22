/**
  * Build Tower by the following given argument:
  * number of floors (integer and always greater than 0).
  *
  * Tower block is represented as *
  *
  * Python: return a list;
  * JavaScript: returns an Array;
  * C#: returns a string[];
  * PHP: returns an array;
  * C++: returns a vector<string>;
  * Haskell: returns a [String];
  * Have fun!
**/

function towerBuilder(nFloors) {
  let tower = [];
  const firstFloorStarsCount = getStarsCount(nFloors - 1);
  for (let i = 0; i < nFloors; i++) {
    let starsCount = getStarsCount(i);
    let spaceCount = (firstFloorStarsCount - starsCount) / 2;
    let floor = ' '.repeat(spaceCount) + '*'.repeat(starsCount) + ' '.repeat(spaceCount);
    tower.push(floor);
  }
  return tower;
}

function getStarsCount(floor) {
  return 1 + 2 * floor;
}
