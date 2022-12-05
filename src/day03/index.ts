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
  return;
};

const itemPriorityScore = (item: string) => {
  if (item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90) {
    return item.charCodeAt(0) - 38;
  }
  if (item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122) {
    return item.charCodeAt(0) - 96;
  }
  throw new Error("Invalid item codes");
};

const part1 = (rawInput: string) => {
  const bagList = rawInput.split(/\r?\n/).map((line) => {
    const left = line.slice(0, line.length / 2);
    const right = line.slice(line.length / 2, line.length);
    return [left, right];
  });

  const score = bagList.reduce((acc, [left, right]) => {
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

// the Elves are divided into groups of three. Every Elf carries a badge that identifies their group.
// For efficiency, within each group of three Elves, the badge is the only item type carried by all three Elves.
const part2 = (rawInput: string) => {
  const groupInventoryList = groupByN(3, rawInput.split(/\r?\n/));
  const score = groupInventoryList.reduce((acc, group) => {
    // using group member 0, search members 1 and 2 for the match/badge
    const searchGroup = group[0].split("");
    for (const item of searchGroup) {
      if (group[1].includes(item) && group[2].includes(item)) {
        return acc + itemPriorityScore(item);
      }
    }
    throw new Error("No match found");
  }, 0);
  return score;
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

// Dirty stolen code from stack overflow (and modified)

let groupByN = (num: number, data: string[]) => {
  let result = [];
  for (let i = 0; i < data.length; i += num)
    result.push(data.slice(i, i + num));
  return result;
};
