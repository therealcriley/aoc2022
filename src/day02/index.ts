import run from "aocrunner";

const moveListValueMap = { rock: 1, paper: 2, scissors: 3 } as const;
const elfMap = { rock: "A", paper: "B", scissors: "C" } as const;
const playerMap = { rock: "X", paper: "Y", scissors: "Z" } as const;
type MoveList = keyof typeof moveListValueMap;
type PlayerMove = MoveList;
type ElfMove = MoveList;
type Round = [ElfMove, PlayerMove];

const parseInput = (rawInput: string) => {
  const parsedInput = rawInput.split(/\r?\n/).map((line): Round => {
    const lineArray = line.split("");
    let elfMove: ElfMove | undefined;
    let playerMove: PlayerMove | undefined;

    if (lineArray[0] === elfMap.rock) elfMove = "rock";
    else if (lineArray[0] === elfMap.paper) elfMove = "paper";
    else if (lineArray[0] === elfMap.scissors) elfMove = "scissors";

    if (lineArray[2] === playerMap.rock) playerMove = "rock";
    else if (lineArray[2] === playerMap.paper) playerMove = "paper";
    else if (lineArray[2] === playerMap.scissors) playerMove = "scissors";

    if (!elfMove || !playerMove) throw new Error("Invalid input");

    return [elfMove, playerMove];
  });

  return parsedInput;
};

const rpsDecider = (elfMove: ElfMove, playerMove: PlayerMove): number => {
  const score = { loss: 0, draw: 1, win: 2 } as const;

  if (playerMove === elfMove) return score.draw;
  if (playerMove === "scissors" && elfMove === "paper") return score.win;
  if (playerMove === "scissors" && elfMove === "rock") return score.loss;
  if (playerMove === "rock" && elfMove === "scissors") return score.win;
  if (playerMove === "rock" && elfMove === "paper") return score.loss;
  if (playerMove === "paper" && elfMove === "rock") return score.win;
  if (playerMove === "paper" && elfMove === "scissors") return score.loss;

  throw new Error("Invalid RPS");
};

const part1 = (rawInput: string) => {
  const rounds = parseInput(rawInput);

  const score = rounds.reduce((acc, [elfMove, playerMove]) => {
    const playerMoveValue = moveListValueMap[playerMove];
    const roundScore = rpsDecider(elfMove, playerMove);
    return acc + playerMoveValue + roundScore;
  }, 0);

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
