import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

type Elf = {
  calorieList: number[];
  total: number;
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).split(/\r?\n/);

  const elfList: Elf[] = [];
  let calorieList: number[] = [];
  let calorieTotalMax: number | undefined;

  for (const line of input) {
    const currentCalorieValue = parseInt(line);
    // on blank lines, stop processing an elf and save
    if (line === "") {
      const total = calorieList.reduce((prev, current) => prev + current);
      // For part 1, keep track of who has the most
      if (!calorieTotalMax || total > calorieTotalMax) {
        calorieTotalMax = total;
      }
      // Create an elf based on the data
      const newElf: Elf = {
        calorieList,
        total,
      };
      elfList.push(newElf);
      calorieList = [];
      continue;
    }
    // else, keep process elf lines
    calorieList.push(currentCalorieValue);
  }
  console.log(elfList, calorieTotalMax);
  return calorieTotalMax;
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
