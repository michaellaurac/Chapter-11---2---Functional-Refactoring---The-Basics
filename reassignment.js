function reassignment (number) {
  return number >= 2 ? number + 7 : number;
};

function reassignmentInConditional (number) {
  return number + 7;
};

module.exports = { reassignment, reassignmentInConditional };
