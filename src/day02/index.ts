import run from "aocrunner";

const moveListValueMap = { rock: 1, paper: 2, scissors: 3 } as const;
const elfMap = { rock: "A", paper: "B", scissors: "C" } as const;
const playerMap = { rock: "X", paper: "Y", scissors: "Z" } as const;
const outcomeMap = { lose: "X", draw: "Y", win: "Z" } as const;

type MoveList = keyof typeof moveListValueMap;
type PlayerMove = MoveList;
type ElfMove = MoveList;

const outcomeList = ["win", "draw", "lose"] as const;
type OutcomeList = typeof outcomeList[number];
type ExpectedOutcome = OutcomeList;

type Round1 = [ElfMove, PlayerMove];
type Round2 = [ElfMove, ExpectedOutcome, PlayerMove];

const outcomeScore = { loss: 0, draw: 3, win: 6 } as const;
const moveScore = { rock: 1, paper: 2, scissors: 3 } as const;

const rpsDeciderScorer = (elfMove: ElfMove, playerMove: PlayerMove): number => {
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

const part1 = (rawInput: string) => {
  const rounds = rawInput.split(/\r?\n/).map((line): Round1 => {
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

  const score = rounds.reduce(
    (acc, [elfMove, playerMove]) => acc + rpsDeciderScorer(elfMove, playerMove),
    0,
  );

  return score;
};

const rpsDecider = (elfMove: ElfMove, outcome: OutcomeList): PlayerMove => {
  if (outcome === "draw") return elfMove;
  if (outcome === "win") {
    if (elfMove === "rock") return "paper";
    if (elfMove === "paper") return "scissors";
    if (elfMove === "scissors") return "rock";
  }
  if (outcome === "lose") {
    if (elfMove === "rock") return "scissors";
    if (elfMove === "paper") return "rock";
    if (elfMove === "scissors") return "paper";
  }
  throw new Error("Invalid RPS");
};

const part2 = (rawInput: string) => {
  const rounds = rawInput.split(/\r?\n/).map((line): Round2 => {
    const lineArray = line.split("");
    let elfMove: ElfMove | undefined;
    let expectedOutcome: ExpectedOutcome | undefined;

    if (lineArray[0] === elfMap.rock) elfMove = "rock";
    else if (lineArray[0] === elfMap.paper) elfMove = "paper";
    else if (lineArray[0] === elfMap.scissors) elfMove = "scissors";

    if (lineArray[2] === outcomeMap.draw) expectedOutcome = "draw";
    else if (lineArray[2] === outcomeMap.lose) expectedOutcome = "lose";
    else if (lineArray[2] === outcomeMap.win) expectedOutcome = "win";

    if (!elfMove || !expectedOutcome) throw new Error("Invalid input");

    const playerMove = rpsDecider(elfMove, expectedOutcome);

    return [elfMove, expectedOutcome, playerMove];
  });

  const score = rounds.reduce(
    (acc, [elfMove, , playerMove]) =>
      acc + rpsDeciderScorer(elfMove, playerMove),
    0,
  );

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
