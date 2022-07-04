function reassignment (number) {
  return number >= 2 ? number + 7 : number;
};

function reassignmentInConditional (number) {
  if ((number + 7) >= 9) {
    return number + 7;
  } else {
    return number + 7;
  }
};

module.exports = { reassignment, reassignmentInConditional };
