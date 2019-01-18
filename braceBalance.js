function braceBalance(string) {
  const stack = [];
  let result = true;
  const openBraces = ['(', '[', '{'];
  const closeBraces = ['}', ')', ']'];
  const values = string.split('')
    .filter(symbol => openBraces.includes(symbol) || closeBraces.includes(symbol));

  for (let i = 0; i < values.length; i++) {
    if (openBraces.includes(values[i])) {
      stack.push(values[i]);
    } else if (isCorrectClose(stack, values[i])) {
      stack.pop();
    } else {
      result = false;
      break;
    }
  }

  return result;
}

function isCorrectClose(stack, braceSymbol) {
  const lastIndex = stack.length - 1;
  let result = true;

  switch (braceSymbol) {
    case ')':
      if (stack[lastIndex] !== '(') {
        result = false;
      }
      break;

    case ']':
      if (stack[lastIndex] !== '[') {
        result = false;
      }
      break;

    case '}':
      if (stack[lastIndex] !== '{') {
        result = false;
      }
      break;

    default:
      throw Error('Not correct symbol in stack');
  }

  return result;
}
