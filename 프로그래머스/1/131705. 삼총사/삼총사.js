function solution(number) {
    var answer = 0;
    
    
    const helper = (acc, numbers,count) => {
        if(count === 3){
            if(acc === 0){
                answer++;
            }
            
            return;
        }
        
        for(let i = 0; i < numbers.length; i++){
            helper(acc + numbers[i], [...numbers.slice(i+1)], count + 1)
        }
    }
    
    helper(0,number,0)
    
    return answer;
}