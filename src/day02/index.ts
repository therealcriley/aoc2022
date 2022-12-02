import run from "aocrunner";

const moveList = { rock: 1, paper: 2, scissors: 3 } as const;

type MoveLineType = [elfMove: string, playerMove: string];

const parseInput = (rawInput: string) => {
  const parsedInput = rawInput.split(/\r?\n/).map((line) => {
    const lineArray = line.split("");
    const elfMove = lineArray[0];
    const playerMove = lineArray[2];
    return line;
  });

  return parsedInput;
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

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
