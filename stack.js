//push()
//pop()
//isEmpty()
//size()
//peek()

class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "stack is empty .cant perform any operations";
    }
    return this.stack.pop();
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return this.stack[this.size() - 1];
    } else {
      return "there are no elements present";
    }
  }
  size() {
    return this.stack.length;
  }
  printStack() {
    let arr = [];
    for (let i = 0; i < this.stack.length; i++) {
      arr.push(this.stack[i]);
    }
    return arr;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop());
console.log(stack.printStack());
