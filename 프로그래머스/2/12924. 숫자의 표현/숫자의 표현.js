
function solution(n) {
    
     let count = 1;
    let start = 1, end = 1;
    let sum = 1;
    
    while (start <= n / 2) {
        if (sum < n) {
            end++;
            sum += end;
        } else if (sum > n) {
            sum -= start;
            start++;
        } else {
            count++;
            sum -= start;
            start++;
        }
    }
    
    return count;
}

