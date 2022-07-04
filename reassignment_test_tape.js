const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

const test = require("tape");
const testDouble = require("testdouble");
const {
  reassignment,
  reassignmentInConditional,
  reassignmentNestedInConditional,
  reassignmentNestedInConditionalWithMemoizedOperation,
  reassignmentWithoutNestingInConditional,
  email,
  add,
  realAddition
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

// functional tests
test("verifies that when numberX is 1001 and numberY is 2 the function returns 1001", (assert) => {
  assert.strictEqual(reassignmentWithoutNestingInConditional(1001, 99), 1001);
  assert.end();
});
test("verifies that when numberX is 2 and numberY is 99 the function returns 9", (assert) => {
  assert.strictEqual(reassignmentWithoutNestingInConditional(2, 99), 9);
  assert.end();
});
test("verifies that when numberX is 1 and numberY is 99 the function returns 99", (assert) => {
  assert.strictEqual(reassignmentWithoutNestingInConditional(1, 99), 99);
  assert.end();
});

// functional tests
test("verifiers that the forEach function run on [3, 4, 2] yields [4, 5, 3]", (assert) => {
  const forEachArray = [];
  [3, 4, 2].forEach((element) => forEachArray.push(element + 1));
  assert.deepEqual(forEachArray, [4, 5, 3]);
  assert.end();
});
test("verifiers that the map function run on [3, 4, 2] yields [6, 8, 4]", (assert) => {
  assert.deepEqual([3, 4, 2].map((element) => element * 2), [6, 8, 4]);
  assert.end();
});
test("verifiers that the filter function run on [3, 4, 2] yields [4, 2]", (assert) => {
  assert.deepEqual([3, 4, 2].filter((element) => element % 2 === 0), [4, 2]);
  assert.end();
});
test("verifiers that the reduce function run on [3, 4, 2] yields 9", (assert) => {
  assert.strictEqual([3, 4, 2].reduce((element, accumulator) => element + accumulator), 9);
  assert.end();
});

// functional tests
test("verifiers that the email function run with nothing yields \"Hi\"", (assert) => {
  assert.strictEqual(email(), "Hi");
  assert.end();
});
test("verifiers that the email function run with \"Mike\" yields \"Hi Mike\"", (assert) => {
  assert.strictEqual(email("Mike"), "Hi Mike");
  assert.end();
});

// functional tests
test("verifiers that the function returns 5", (assert) => {
  function five () { return 5; };
  assert.strictEqual(five(), 5);
  assert.end();
});
test("verifiers that the function returns 5", (assert) => {
  assert.strictEqual((() => 5)(), 5);
  assert.end();
});
test("verifiers that the function returns 5", (assert) => {
  assert.strictEqual(((x) => x)(5), 5);
  assert.end();
});
test("verifiers that the function returns 8", (assert) => {
  assert.strictEqual(3 + 5, 8);
  assert.end();
});
test("verifiers that the function returns 8", (assert) => {
  assert.strictEqual((() => 3)() + (() => 5)(), 8);
  assert.end();
});
test("verifiers that the function returns 8", (assert) => {
  assert.strictEqual(((x) => x)(3) + ((y) => y)(5), 8);
  assert.end();
});
test("verifiers that the function returns 8", (assert) => {
  assert.strictEqual(((x, y) => x + y)(3, 5), 8);
  assert.end();
});

// functional tests
test("verifiers that the function add with 2 and 3 returns 5", (assert) => {
  assert.strictEqual(add(2, 3), 5);
  assert.end();
});
test("verifiers that the function setGlobalFromAddition with 2 and 3 returns 5", (assert) => {
  let x;
  function setGlobalFromAddition (addend1, addend2) {
    x = add(addend1, addend2);
  }
  setGlobalFromAddition(2, 3);
  assert.strictEqual(x, 5);
  assert.end();
});
test("verifies that calling realAddition with 2 and 3 and the test function is equivalent to loggin 5", (assert) => {
  testDouble.replace(console, "log");
  realAddition(2, 3, () => {
    testDouble.verify(console.log(5));
    assert.pass();
    testDouble.reset();
    assert.end();
  });
});
