function solution(stones, k) {
    let answer = 0;
    
    let min = 0;
    let max = stones.reduce((acc, curr) => Math.max(acc,curr), 0);
    
    
    while(min < max){
        const mid = Math.floor((min + max) / 2);
        
        let count = 0;
        let maxCount = 0;
        
        for(let i = 0; i < stones.length; i++){
            const stone = stones[i]
            const temp = stone - mid;
            
            if(temp <= 0){
                count++;
            }else{
                maxCount = Math.max(count, maxCount);
                count = 0;
            }
            
            if(maxCount >= k){
                break;
            }
        }

        
        maxCount = Math.max(count, maxCount);
        
        if(maxCount < k){
            min = mid + 1;
                     
        }else{
            max = mid;  
        }

    }
    
    
    return min;
}