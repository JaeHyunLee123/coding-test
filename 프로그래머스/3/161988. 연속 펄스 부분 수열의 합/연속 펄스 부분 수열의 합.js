//카데인 알고리즘
const maxSubArray = (nums) => {
    let maxSum = nums[0];
    let currentSum = nums[0];
    let startCandidate = 0
    
    for(let i = 1; i < nums.length; i++){
        if(currentSum < 0){
            currentSum = nums[i];
            startCandidate = i;
        }else{
            currentSum += nums[i]
        }
        
        if(currentSum > maxSum){
            maxSum = currentSum
        }
    }
    
    return maxSum;
}

function solution(sequence) {
    let answer = -100001;
    
    const positivePulse = sequence.map((num, i) => {
        if(i % 2 === 0){
            return num
        }else{
            return num * (-1);
        }
    })
    
    const negativePulse = sequence.map((num, i) => {
        if(i % 2 === 1){
            return num
        }else{
            return num * (-1);
        }
    })
    
    const positiveMax = maxSubArray(positivePulse);
    const negativeMax = maxSubArray(negativePulse);

    
    return Math.max(positiveMax, negativeMax);
}