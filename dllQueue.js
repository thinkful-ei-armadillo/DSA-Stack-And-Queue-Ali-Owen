class _Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}
class DLLQueue {
  constructor() {
    this.last = null;
    this.first = null;
  }
  enqueue(data) {
    if (!this.first) {
      this.first = new _Node(data, null, null);
      this.last = this.first;
    } else if (this.last) {
      let newNode = new _Node(data, null, this.last);
      this.last.next = newNode;
      this.last = newNode;
    }
  }
  dequeue() {
    if (!this.first) {
      return null;
    } else {
      let removedNode = this.first;
      this.first = this.first.next;
      this.first.prev = null;
      return removedNode.data;
    }
  }
}
function peek(queue) {
  if (queue.first) {
    return queue.first;
  }
  return null;
}
function isEmpty(queue) {
  if (!queue.first) {
    return true;
  }
  return false;
}
function display(queue) {
  let current = queue.first;
  while (current) {
    console.log(current);
    current = current.next;
  }
}
// First one in queue is Kirk
function main() {
  let starTrekQ = new DLLQueue();
  starTrekQ.enqueue("Kirk");
  starTrekQ.enqueue("Spock");
  starTrekQ.enqueue("Uhura");
  starTrekQ.enqueue("Chekov");
  display(starTrekQ);
  //   starTrekQ.dequeue();
  //   starTrekQ.dequeue();
  //   console.log("Space before");
  //   display(starTrekQ);
}
main();
