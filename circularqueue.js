//front()
//rear()
//enqueue()
//dequeue()
//size()
//isEmpty()

class Circularqueue {
  constructor(size) {
    this.queue = [];
    this.size = size;
  }
  enqueue(element) {
    if (this.queue.length === this.size) {
      return "circular queue is already full";
    }
    this.queue.push(element);
    return true;
  }
  dequeue() {
    if (this.queue.length === 0) {
      return "queue is empty";
    }
    return this.queue.shift();
  }
  front() {
    if (this.queue.length === 0) {
      return "no elements in queue";
    } else {
      return this.queue[0];
    }
  }
  rear() {
    if (this.queue.length === 0) {
      return "no elements in queue";
    }
    return this.queue[this.queue.length - 1];
  }
  size() {
    return this.queue.length;
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  circularqueuelist() {
    let queuestr = "";
    for (let i = 0; i < this.queue.length; i++) {
      queuestr += this.queue[i] + " ";
    }
    return queuestr;
  }
}

const circular = new Circularqueue(5);
circular.enqueue(2);
circular.enqueue(3);
circular.enqueue(4);
console.log(circular.circularqueuelist());
circular.dequeue();
console.log(circular.circularqueuelist());
circular.enqueue(5);
console.log(circular.circularqueuelist());
console.log(circular.front());
console.log(circular.rear());
circular.enqueue(7);
circular.enqueue(8);
circular.enqueue(9);
circular.enqueue(10);
console.log(circular.circularqueuelist());

//please do implementations of stack using queue and queue using stacks
