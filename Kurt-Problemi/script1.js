const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let size;
let numbers;

rl.on('line', (input) => {
  if (typeof size === 'undefined') {
    size = parseInt(input);
  } else {
    
    numbers = input;
    rl.close();
  }
});

rl.on('close', () => {
  console.log(findHighestFrequencyNumber(size, numbers));
});

function findHighestFrequencyNumber(size, numbers) {
  
  let frequencyArray = new Array(5).fill(0);
  
  
  for(let i = 0; i<size; i++){
    frequencyArray[numbers[i]]++
  }



  let maxFrequency = 0;
  let result = Infinity;

  for (const num in frequencyArray) {
    const frequency = frequencyArray[num];
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      result = parseInt(num);
    } else if (frequency === maxFrequency && parseInt(num) < result) {
      result = parseInt(num);
    }
  }

  return result;
}