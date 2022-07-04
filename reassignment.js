function reassignment (number) {
  return number >= 2 ? number + 7 : number;
};

function reassignmentInConditional (number) {
  return number + 7;
};

function reassignmentNestedInConditional (numberX, numberY) {
  if (numberX > 1000) {
    return numberX;
  } else {
    const newX = numberX + 7;
    if (newX >= 9) {
      return newX;
    } else {
      return numberY;
    }
  }
}

const lookupTable = {};
function memoizedAddSeven (number) {
  if (number in lookupTable) {
    return lookupTable[number];
  } else {
    const reduceValue = number + 7;
    lookupTable[number] = reduceValue;
    console.log(lookupTable);
    return reduceValue;
  }
}

function reassignmentNestedInConditionalWithMemoizedOperation (numberX, numberY) {
  if (numberX > 1000) {
    return numberX;
  } else if (memoizedAddSeven(numberX) >= 9) {
    return memoizedAddSeven(numberX);
  } else {
    return numberY;
  }
}

module.exports = {
  reassignment,
  reassignmentInConditional,
  reassignmentNestedInConditional,
  reassignmentNestedInConditionalWithMemoizedOperation
};
