function switchSort(array) {
  let cashValue;
  let isSorted;
  let minIndex;

  for (let i = 0; i < array.length; i++) {
    minIndex = i;

    for (let k = i; k < array.length; k++) {
      if (array[i] > array[k]) {
        minIndex = k;
      }
    }

    cashValue = array[i];
    array[i] = array[minIndex];
    array[minIndex] = cashValue;
  }
  return array;
}