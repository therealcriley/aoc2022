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
const priorityMap = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 } as const;
//   - Lowercase item types a through z have priorities 1 through 26.
//   - Uppercase item types A through Z have priorities 27 through 52.
const parseInput = (rawInput: string) => {
  return rawInput.split(/\r?\n/).map((line) => {
    const left = line.slice(0, line.length / 2);
    const right = line.slice(line.length / 2, line.length);
    return [left, right];
  });
};

const itemPriorityScore = (item: string) => {
  if (item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90) {
    return item.charCodeAt(0) - 64;
  }
  if (item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122) {
    return item.charCodeAt(0) - 96;
  }
  throw new Error("Invalid item codes");
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const score = input.reduce((acc, [left, right]) => {
    let match = "";
    for (const item of left) {
      if (right.includes(item)) {
        match = item;
        break;
      }
    }
    return acc + itemPriorityScore(match);
  }, 0);
  // Find the item type that appears in both compartments of each rucksack.
  // What is the sum of the priorities of those item types?
  return score;
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
