import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

type Elf = {
  tempCalorieList: number[];
  total: number;
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).split(/\r?\n/);

  const elfList: Elf[] = [];
  let tempCalorieList: number[] = [];
  let calorieTotalMax: number | undefined;

  for (const line of input) {
    const currentCalorieValue = parseInt(line);
    // on blank lines, stop processing an elf and save
    if (line === "") {
      const total = tempCalorieList.reduce((prev, current) => prev + current);
      // For part 1, keep track of who has the most
      if (!calorieTotalMax || total > calorieTotalMax) {
        calorieTotalMax = total;
      }
      // Create an elf based on the data
      const newElf: Elf = {
        tempCalorieList,
        total,
      };
      elfList.push(newElf);
      tempCalorieList = [];
      continue;
    }
    // else, keep process elf lines
    tempCalorieList.push(currentCalorieValue);
  }
  // console.log(elfList, calorieTotalMax);
  return calorieTotalMax;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput).split(/\r?\n/);

  const elfList: Elf[] = [];
  let tempCalorieList: number[] = [];
  const calorieTotalList: number[] = [];

  for (const line of input) {
    const currentCalorieValue = parseInt(line);
    // on blank lines, stop processing an elf and save
    if (line === "") {
      const total = tempCalorieList.reduce((prev, current) => prev + current);
      // Create an elf based on the data
      const newElf: Elf = {
        tempCalorieList,
        total,
      };
      calorieTotalList.push(total);
      elfList.push(newElf);
      tempCalorieList = [];
      continue;
    }
    // else, keep process elf lines
    tempCalorieList.push(currentCalorieValue);
  }
  // descending sort calorie totals
  calorieTotalList.sort((a, b) => b - a);

  // answer is top 3 summed.
  return calorieTotalList[0] + calorieTotalList[1] + calorieTotalList[2];
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
