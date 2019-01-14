function insertionSort(array) {
  for (let i = 1; i < array.length; i ++) {
    const value = array[i];
    let index = i;
    
    while(index > 0 && array[index - 1] > value) {
      array[index] = array[index-1];
      index -= 1;
    }

    array[index] = value;
  }
  return array;
}
