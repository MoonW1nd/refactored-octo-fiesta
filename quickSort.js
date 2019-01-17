function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  const pivot = Math.floor(Math.random() * Math.floor(array.length - 1));
  const moreArray = [];
  const lessArray = [];

  array.forEach((value, i) => {
    if (i !== pivot) {
      if (value >= array[pivot]) {
        moreArray.push(value);
      } else {
        lessArray.push(value);
      }
    }
  });

  return quickSort(lessArray).concat(array[pivot], quickSort(moreArray));
}
