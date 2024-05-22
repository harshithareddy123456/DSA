//enqueue
//dequeue
//isEmpty
//size
//peek

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    this.queue.push(element);
  }
  dequeue() {
    return this.queue.shift();
  }
  peek() {
    if (this.isEmpty()) {
      return "no elements to peek";
    } else {
      return this.queue[0];
    }
  }
  isEmpty() {
    this.queue.length === 0;
  }
  size() {
    return this.queue.length;
  }
  printQueue() {
    let queuestr = "";
    for (let i = 0; i < this.queue.length; i++) {
      queuestr = queuestr + this.queue[i] + ", ";
    }
    return queuestr.trim();
  }
}

const queue = new Queue();
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.dequeue());
console.log(queue.printQueue());
console.log(queue.peek());
console.log(queue.size());
