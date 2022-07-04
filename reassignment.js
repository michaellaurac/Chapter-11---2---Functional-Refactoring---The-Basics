function reassignment (number) {
  return number >= 2 ? number + 7 : number;
};

function reassignmentInConditional (number) {
  if ((number += 7) >= 9) {
    return number;
  } else {
    return number;
  }
};

module.exports = { reassignment, reassignmentInConditional };
