function reassignment (number) {
  return number >= 2 ? number + 7 : number;
};

function reassignmentInConditional (number) {
  return number + 7;
};

function reassignmentNestedInConditional (numberX, numberY) {
  if (numberX > 1000) {
    return numberX;
  } else if ((numberX += 7) >= 9) {
    return numberX;
  } else {
    return numberY;
  }
}

module.exports = {
  reassignment,
  reassignmentInConditional,
  reassignmentNestedInConditional
};
