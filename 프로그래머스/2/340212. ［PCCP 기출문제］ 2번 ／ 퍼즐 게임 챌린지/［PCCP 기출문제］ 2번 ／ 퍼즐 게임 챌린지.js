function solution(diffs, times, limit) {
    var answer = Infinity;
    
    let min = 1;
    let max = diffs.reduce((acc, curr) => Math.max(acc, curr), 0);
    
    while(min <= max){    
        //mid ==> level
        const mid = Math.floor((min + max) / 2);
        
        let totalTime = times[0];
        
        for(let i = 1; i < diffs.length; i++){
            const timeCurr = times[i];
            const timePrev = times[i-1];
            const diff = diffs[i];
            
            if(diff > mid){
                const repetition = diff - mid;
                
                const tryingTime = repetition * (timeCurr + timePrev) + timeCurr;
                
                totalTime += tryingTime;
                
            }else{
                totalTime += timeCurr;
            }
        }
        
        const isPossible = limit >= totalTime;
        
        if(isPossible){
            max = mid - 1;
        }else{          
            min = mid + 1
        }
    }
    
    return min;
}