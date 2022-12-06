import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split(/\r?\n/);

// 21-82,22-81
// 46-47,21-47
// 7-88,27-89
// 37-38,33-42
// 5-99,51-99

// [[21,82],[22,81]]
// [elfOneAssignment, elfTwoAssignment]
type Start = number;
type Stop = number;
// type Assignment = [Start, Stop];
type Assignment = { start: number; stop: number };
type AssignmentPair = [Assignment, Assignment];

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const assignmentPairs = input.map((line) => {
    const [elfOneAssignment, elfTwoAssignment] = line
      .split(",")
      .map((assignment) => {
        const [start, stop] = assignment.split("-").map((num) => parseInt(num));
        return { start, stop } as Assignment;
      });
    return [elfOneAssignment, elfTwoAssignment] as AssignmentPair;
  });

  let neithers = 0;
  let fullyContained = 0; // 1 elf fully contains the other

  for (const assignmentPair of assignmentPairs) {
    const [elfOneAssignment, elfTwoAssignment] = assignmentPair;
    if (
      elfOneAssignment.start <= elfTwoAssignment.start &&
      elfOneAssignment.stop >= elfTwoAssignment.stop
    ) {
      fullyContained++;
    } else if (
      elfTwoAssignment.start <= elfOneAssignment.start &&
      elfTwoAssignment.stop >= elfOneAssignment.stop
    ) {
      fullyContained++;
    } else {
      neithers++;
    }
  }
  console.log("neithers", neithers);
  return fullyContained;
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
