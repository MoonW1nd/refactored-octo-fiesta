function revertSinglyLinkedList(list) {
  let currentNode = list.next;
  let nextValue = currentNode.next;
  let previousValue = list;
  list.next = null;

  while (nextValue !== null) {
    nextValue = currentNode.next;
    currentNode.next = previousValue;
    previousValue = currentNode;

    if (nextValue !== null) {
      currentNode = nextValue;
    }
  }

  return currentNode;
}
