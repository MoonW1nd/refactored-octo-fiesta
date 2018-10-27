function bubbleSort(array) {
  let cashValue;

  for (let firstElementIndex = 0; firstElementIndex < array.length; firstElementIndex++) {
    let isSorted = true;
    for (let secondElementIndex = firstElementIndex - 1; secondElementIndex < array.length; secondElementIndex++) {
      if (array[firstElementIndex] < array[secondElementIndex]) {
        cashValue = array[firstElementIndex];
        array[firstElementIndex] = array[secondElementIndex];
        array[secondElementIndex] = cashValue;
        isSorted = false;
      }
    }
    if (isSorted) break;
  }

  return array;
}