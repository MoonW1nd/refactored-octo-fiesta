function switchSort(array) {
  let cashValue;
  let minIndex;
  let minValue;

  for (let i = 0; i < array.length; i++) {
    minIndex = i;
    minValue = array[i];

    for (let k = i; k < array.length; k++) {
      if (minValue > array[k]) {
        minIndex = k;
        minValue = array[k];
      }
    }

    cashValue = array[i];
    array[i] = array[minIndex];
    array[minIndex] = cashValue;
  }

  return array;
}