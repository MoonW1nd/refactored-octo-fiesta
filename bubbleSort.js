function bubbleSort(array) {
  let cashValue;

  for (let firstElementIndex = 0; firstElementIndex < array.length; firstElementIndex++) {
    for (let secondElementIndex = 0; secondElementIndex < array.length; secondElementIndex++) {
      if (array[firstElementIndex] < array[secondElementIndex]) {
        cashValue = array[firstElementIndex];
        array[firstElementIndex] = array[secondElementIndex];
        array[secondElementIndex] = cashValue;
      }
    }
  }

  return array;
}