const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };

  
const {a, b} = obj.numbers;

  let arr = [1, 2];

  [arr[0], arr[1]] = [arr[1], arr[0]];


const raceResults = ['Tom', 'Margaret', 'Allison', 'David', 'Pierre'];
const [first, second, third, ...rest] = raceResults;
  
  const finish = ()=>{
  return {first, second, third, rest};
  }