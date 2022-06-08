const { Stack, reverse } = require("./index.js");
describe("Stack Class", () => {
  it.skip("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(1);
    console.log(stack.peek);
    expect(stack.peek()).toEqual(1);
  });
  it("#pop should remove the top item of the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop;
    expect(stack.peek()).toEqual(1);
  });
  // add more tests here...
  describe("#reverse", () => {
    it("should reverse an array", () => {
      expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    });
  });
});
