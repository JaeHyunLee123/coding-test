function solution(money) {
    
    
    const firstIncludeDP = Array(money.length + 1).fill(0);
    const lastIncludeDP = Array(money.length  +1).fill(0);
    
    firstIncludeDP[0] = 0;
    lastIncludeDP[0] = 0;
    
    for(let i = 1; i < money.length; i++){
        firstIncludeDP[i] = money[i-1];
        lastIncludeDP[i] = money[i];
    }
    
    for(let i = 1; i < firstIncludeDP.length; i++){
        firstIncludeDP[i] = Math.max(firstIncludeDP[i - 1], firstIncludeDP[i] + (i - 2 >= 0 ? firstIncludeDP[i-2] : 0));
        lastIncludeDP[i] = Math.max(lastIncludeDP[i - 1], lastIncludeDP[i] + (i - 2 >= 0 ? lastIncludeDP[i-2] : 0));
    }

    
    return Math.max(firstIncludeDP[firstIncludeDP.length - 1],lastIncludeDP[lastIncludeDP.length - 1]);
}