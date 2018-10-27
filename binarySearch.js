function binarySearch(array, value) {
  const arrayLength = array.length;

  if (arrayLength === 0) return false;
  if (arrayLength === 1) return array[0] === value;

  const middlePoint = Math.floor(array.length / 2);

  if (array[middlePoint] === value) {
    return true;
  } else if (array[middlePoint] > value) {
    let newArray = getPartMassive(array, middlePoint, 'left')
    return binarySearch(newArray, value)
  } else if (array[middlePoint] < value) {
    let newArray = getPartMassive(array, middlePoint, 'right')
    return binarySearch(newArray, value)
  }
}

function getPartMassive(array, index, direction) {
  if (direction === 'right') {
    return array.slice(index + 1);
  } else {
    return array.slice(0, index);
  }
}

