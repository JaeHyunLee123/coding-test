const isPrime = (num) => {    
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  const numberArr = numbers.split("");
  const prime = new Set();

  const dfs = (prevStr, restNums) => {
    if (restNums.length < 1) return;

    for (let i = 0; i < restNums.length; i++) {
      const newStr = prevStr + restNums[i];
      const num = Number(newStr);

      if (isPrime(num)) prime.add(num);

      dfs(newStr, [...restNums.slice(0, i), ...restNums.slice(i + 1)]);
    }
  }

  dfs("", numberArr);
  return prime.size;
}