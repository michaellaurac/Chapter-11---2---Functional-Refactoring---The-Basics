const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

const test = require("tape");
const Class = require("./class.js");

// setup test
test("verifies the test file name", (assert) => {
  assert.strictEqual(fileName(), "class_test_tape.js");
  assert.end();
});

// functional tests
console.log(Class);
