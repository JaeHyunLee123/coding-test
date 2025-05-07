function solution(n, w, num) {
    let answer = 0;
    
    const arr = [];
    
    let i = 1;
    while(i <= n){
        const temp = [];
        
        if(arr.length % 2 === 0){
            for(let j = 0; j < w; j++){                
                if(i > n){
                    temp.push(null);
                }else{
                   temp.push(i++); 
                }                
            }
        }else{
            for(let j = 0; j < w; j++){                
                if(i > n){
                    temp.unshift(null);
                }else{
                    temp.unshift(i++);
                }
                
            }
        }
        arr.unshift(temp);
    }
    
    const floor = arr.length - 1 - Math.floor((num - 1) / w);
    
    const index = arr[floor].indexOf(num);    
    
    for(let i = floor; i >= 0; i--){
        if(arr[i][index]) answer++;
    }
    
    return answer;
}