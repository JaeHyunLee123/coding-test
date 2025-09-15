const changeNumberSystem = (n, k, acc = "") => {
    if(n < k){
        return String(n) + acc;
    }
    
    const divide = Math.floor(n / k);
    const remain = n % k;
    
    return changeNumberSystem(divide,k, String(remain) + acc);
}

const isPrime = (n) => {
    if(n === 0) return false;
    if(n === 1) return false;
    
    for(let i = 2; i * i <= n; i++){
        if(n % i === 0) return false;
    }
    
    return true;
}

function solution(n, k) {
    let answer = 0;
    
    const newNum = changeNumberSystem(n,k)
    
    let temp = "";
    
    for(let i = 0; i < newNum.length; i++){
        const char = newNum.at(i);
        
        if(char === "0"){
            const num = Number(temp);
            temp = ""
            if(isPrime(num)) answer++;
        }else{
            temp += char;
        }
    }
    
    const num = Number(temp);
    if(isPrime(num)) answer++;
    
    return answer;
}