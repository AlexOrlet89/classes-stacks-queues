class Stack {
    #stack = [];

    constructor(initialStack) {
        if (initialStack) this.#stack = initialStack;
    }

    addToTop(item) {
    this.#stack.push(item);
    }
    get takeFromTop() {
    return this.#stack.pop();
    }
    get peekAtTop() {
    return this.#stack.peek();
    }


}

class Queue {}

module.exports = { Stack, Queue };
