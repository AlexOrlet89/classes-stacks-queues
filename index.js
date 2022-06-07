class Stack {
  #list = [];

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

module.exports = { Stack, Queue };
