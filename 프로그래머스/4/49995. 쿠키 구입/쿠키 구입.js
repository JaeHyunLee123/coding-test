function solution(cookies) {
    let answer = 0;
    
    let max = Math.floor(cookies.reduce((acc,curr) => acc + curr, 0) / 2)
    
    for(let m = 0; m < cookies.length; m++){
        let leftIndex = m;
        let rightIndex = m+1;
        
        let leftValue = cookies[leftIndex];
        let rightValue = cookies[rightIndex];
        
        while(0 <= leftIndex && rightIndex < cookies.length){
            if(leftValue === rightValue){
                answer = Math.max(answer, leftValue);
                
                leftIndex--;
                rightIndex++;
                
                leftValue += cookies[leftIndex];
                rightValue += cookies[rightIndex];
            }else if(leftValue > rightValue){
                rightIndex++;
                rightValue += cookies[rightIndex];
            }else{
                leftIndex--;
                leftValue += cookies[leftIndex];
            }
     
            if(answer === max) return max;
        }
        
        if(leftValue === rightValue){
            answer = Math.max(answer, leftValue);
            if(answer === max) return max;
        }
    }
    
    return answer;
}