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
  const outcomeScore = { loss: 0, draw: 3, win: 6 } as const;
  const moveScore = { rock: 1, paper: 2, scissors: 3 } as const;

  if (playerMove === elfMove) return outcomeScore.draw + moveScore[playerMove];
  if (playerMove === "scissors" && elfMove === "paper")
    return outcomeScore.win + moveScore[playerMove];
  if (playerMove === "scissors" && elfMove === "rock")
    return outcomeScore.loss + moveScore[playerMove];
  if (playerMove === "rock" && elfMove === "scissors")
    return outcomeScore.win + moveScore[playerMove];
  if (playerMove === "rock" && elfMove === "paper")
    return outcomeScore.loss + moveScore[playerMove];
  if (playerMove === "paper" && elfMove === "rock")
    return outcomeScore.win + moveScore[playerMove];
  if (playerMove === "paper" && elfMove === "scissors")
    return outcomeScore.loss + moveScore[playerMove];

  throw new Error("Invalid RPS");
};

// fix: rps is just the score, not the score * move.
// We need to multiply the result by the playerMove score value too
const part1 = (rawInput: string) => {
  const rounds = parseInput(rawInput);

  const score = rounds.reduce((acc, [elfMove, playerMove]) => {
    const roundScore = rpsDecider(elfMove, playerMove);
    // console.log(`round: ${elfMove} vs ${playerMove} = ${roundScore}`);
    return acc + roundScore;
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
