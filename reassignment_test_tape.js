const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

const test = require("tape");
const {
  reassignment,
  reassignmentInConditional,
  reassignmentNestedInConditional,
  reassignmentNestedInConditionalWithMemoizedOperation,
  lookupTable
} = require("./reassignment.js");

// setup test
test("verifies the test file name", (assert) => {
  assert.strictEqual(fileName(), "reassignment_test_tape.js");
  assert.end();
});

// functional tests
test("verifies that when number is 2 the function returns 9", (assert) => {
  assert.strictEqual(reassignment(2), 9);
  assert.end();
});
test("verifies that when number is 1 the function returns 1", (assert) => {
  assert.strictEqual(reassignment(1), 1);
  assert.end();
});

// functional tests
test("verifies that when number is 2 the function returns 9", (assert) => {
  assert.strictEqual(reassignmentInConditional(2), 9);
  assert.end();
});
test("verifies that when number is 1 the function returns 1", (assert) => {
  assert.strictEqual(reassignmentInConditional(1), 8);
  assert.end();
});

// functional tests
test("verifies that when numberX is 1001 and numberY is 2 the function returns 1001", (assert) => {
  assert.strictEqual(reassignmentNestedInConditional(1001, 99), 1001);
  assert.end();
});
test("verifies that when numberX is 2 and numberY is 99 the function returns 9", (assert) => {
  assert.strictEqual(reassignmentNestedInConditional(2, 99), 9);
  assert.end();
});
test("verifies that when numberX is 2 and numberY is 99 the function returns 99", (assert) => {
  assert.strictEqual(reassignmentNestedInConditional(1, 99), 99);
  assert.end();
});

// functional tests
test("verifies that when numberX is 1001 and numberY is 2 the function returns 1001", (assert) => {
  assert.strictEqual(reassignmentNestedInConditionalWithMemoizedOperation(1001, 99), 1001);
  assert.end();
});
test("verifies that when numberX is 2 and numberY is 99 the function returns 9", (assert) => {
  assert.strictEqual(reassignmentNestedInConditionalWithMemoizedOperation(2, 99), 9);
  assert.end();
});
test("verifies that when numberX is 1 and numberY is 99 the function returns 99", (assert) => {
  assert.strictEqual(reassignmentNestedInConditionalWithMemoizedOperation(1, 99), 99);
  assert.end();
});
