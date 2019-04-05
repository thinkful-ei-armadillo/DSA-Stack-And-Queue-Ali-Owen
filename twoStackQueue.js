class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  pop() {
    if (!this.top) {
      return new Error("nothing in stack");
    } else {
      let popNode = this.top;
      this.top = this.top.next;
      return popNode.data;
    }
  }
  push(data) {
    if (!this.top) {
      this.top = new _Node(data, null);
      return this.top;
    }
    let newNode = new _Node(data, this.top);
    this.top = newNode;
  }
}

function fillOtherStack(s1, s2) {
  let current = s1.first;
  while (current) {
    s2.push(s1.pop());
    current = current.next;
  }
  return s2;
}

function stackEnqueue(s1, data) {
  s1.push(data);
}
function stackDequeue(s1, s2) {
  fillOtherStack(s1, s2);
  let removedNode = s2.pop();
  fillOtherStack(s2, s1);
  return removedNode;
}

function main() {
  let firstStack = new _Stack();
  let secondStack = new _Stack();
  firstStack.push("Kirk");
  firstStack.push("Spock");
  firstStack.push("Uhura");
  firstStack.push("Chekov");
  fillOtherStack(firstStack, secondStack);
}
