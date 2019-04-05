class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
class Queue {
  constructor() {
    this.last = null;
    this.first = null;
  }
  enqueue(data) {
    if (!this.first) {
      this.first = new _Node(data, null);
      this.last = this.first;
    } else if (this.last) {
      let newNode = new _Node(data, null);
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
function main() {
  let starTrekQ = new Queue();
  starTrekQ.enqueue("Kirk");
  starTrekQ.enqueue("Spock");
  starTrekQ.enqueue("Uhura");
  starTrekQ.enqueue("Chekov");

  starTrekQ.dequeue();
  starTrekQ.dequeue();
  console.log("Space before");
  display(starTrekQ);
}
//main();
