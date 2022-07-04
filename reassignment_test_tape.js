const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

const test = require("tape");
const { reassignment } = require("./reassignment.js");

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
