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

let starTrek = new Stack();
starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");

const peek = stack => {
  if (stack.top) {
    return stack.top;
  }
  return null;
};

const isEmpty = stack => {
  return !stack.top;
};

const display = stack => {
  let curr = stack.top;

  while (curr !== null) {
    console.log(curr);
    curr = curr.next;
  }
};

// remove mccoy from the stack (have to also remove scotty)
starTrek.pop();
starTrek.pop();

// problem 3 Palindromes
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let palStack = new Stack();

  for (i in s) {
    palStack.push(s.charAt(i));
  }

  let sReverse = "";

  for (i = 0; i < s.length; i++) {
    sReverse += palStack.pop().data;
  }

  return sReverse === s ? true : false;
}
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));

const delimiterCheck = str => {
  let stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "(" || str.charAt(i) === ")") {
      stack.push(str.charAt(i));
    }
  }

  let curr = stack.top;
  let closeParen = 0;
  let openParen = 0;

  while (curr !== null) {
    let poppedItem = stack.pop().data;
    if (poppedItem === "(") {
      openParen++;
    }
    if (poppedItem === ")") {
      closeParen++;
    }
    curr = curr.next;
  }

  let counter = 0;
  // '(('
  // openParen = 1, closeParen =0

  // (()))

  // innermost unmatched closure vs outermost
  // return what item should be deleted, not where it should be added

  if (closeParen > openParen) {
    while (closeParen !== counter) {
      for (i in str) {
        if (str.charAt(i) === ")") {
          counter++;
        }
        if (counter === closeParen) {
          return `Unmatched Close Delimiter at ${i}`;
        }
      }
    }
  } else if (openParen > closeParen) {
    while (closeParen !== counter) {
      for (i in str) {
        if (str.charAt(i) === "(") {
          counter++;
        }
        if (counter === openParen) {
          return `Unmatched Open Delimiter at ${i}`;
        }
      }
    }
  } else {
    return `All delimiters are matched in | ${str} |`;
  }
};

// let arith = "(1+2)()()()()()()()*6+10";

// console.log(delimiterCheck(arith));

const sortStack = function(inputStack) {
  let tempStack = new Stack();

  while (inputStack.top) {
    let temp = inputStack.pop();
    while (tempStack.top && peek(tempStack).data < temp) {
      inputStack.push(tempStack.pop());
    }
    tempStack.push(temp);
  }
  while (tempStack.top) {
    inputStack.push(tempStack.pop());
  }
  return inputStack;
};

function main() {
  let numbers = new Stack();
  numbers.push("6");
  numbers.push("7");
  numbers.push("0");
  numbers.push("7");
  numbers.push("8");
  numbers.push("1"); // StackTop-> Bottom: 1, 8, 0, 7, 6
  console.log("Before Sort");
  display(numbers);
  console.log("After Sort");
  display(sortStack(numbers)); // Expected: StackTop -> 8, 7, 6, 1, 0
}

main();
