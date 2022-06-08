class Stack {
  #list = [1,2,3];

  constructor(initialStack) {
    if (initialStack) this.#list = initialStack;
  }

  push(item) {
    return this.#list.push(item);
  }
  get pop() {
    return this.#list.pop();
  }
  peek() {
    const peeked = this.#list[this.#list.length - 1];
    return peeked;
  }
  get readableList() {
    return this.#list.toString();
  }
}

class Queue {
  #list = [];

  constructor(initialQueue) {
    if (initialQueue) this.#list = initialQueue;
  }

  enqueue(item) {
    return this.#list.push(item);
  }
  get dequeue() {
    return this.#list.shift();
  }
  hasNext() {
    return this.#list[0] === item;
  }
}

function reverse(array) {
  const stack = new Stack()
  for (let item of array){
    stack.push(item)
  }
  console.log(stack)
  return stack;
}

module.exports = { Stack, Queue, reverse };
