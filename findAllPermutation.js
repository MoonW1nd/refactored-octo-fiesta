function findAllPermutation(array) {
  if (array.length > 1) {
    const firstElement = array[0];
    const permutationsArray = permutation(array.slice(1));
    const resultPermutations = [];
    const elementLength = permutationsArray[0].length;
    for (let i = 0; i < permutationsArray.length; i++) {
      for (let j = 0; j <= elementLength; j++) {
        resultPermutations.push(permutationsArray[i].slice(0, j)
          .concat(
            firstElement,
            permutationsArray[i].slice(j),
          ));
      }
    }
    return resultPermutations;
  }
  return [array];
}
