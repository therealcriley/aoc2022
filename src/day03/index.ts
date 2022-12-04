import run from "aocrunner";

// Sack = 2 compartments

// Every item type is identified by a single lowercase or uppercase letter
//  (that is, a and A refer to different types of items).

//

// The list of items for each rucksack is given as characters all on a single line.
// A given rucksack always has the same number of items in each of its two compartments,
// so the first half of the characters represent items in the first compartment,
// while the second half of the characters represent items in the second compartment.

// Split input in half (2 compartments)
// Priority:
//   - Lowercase item types a through z have priorities 1 through 26.
//   - Uppercase item types A through Z have priorities 27 through 52.
const parseInput = (rawInput: string) => {
  return rawInput.split(/\r?\n/).map(() => {});
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  // Find the item type that appears in both compartments of each rucksack.
  // What is the sum of the priorities of those item types?
  return;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
