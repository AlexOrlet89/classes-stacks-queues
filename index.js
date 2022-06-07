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

class Queue {}

module.exports = { Stack, Queue };
