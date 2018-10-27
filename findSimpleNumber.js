function findSimpleNumber(range) {
  const simpleNumbers = [];

  for (let number = 1; number <= range; number++) {
    if (number%2 !== 0 && number !== 2) {
      let divider = 3;

      while(divider <= range) {
        if (divider > number) {
          simpleNumbers.push(number);
          break;
        } else {
          if ((number%divider === 0) && divider !== number) {
            break;
          }
        }

        divider += 2;
      }
    } else if (number === 2) {
      simpleNumbers.push(number);
    }
  }

  return simpleNumbers;
}