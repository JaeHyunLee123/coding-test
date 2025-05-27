function solution(t, p) {
    var answer = 0;
    
    const standard = Number(p);
    const length = p.length;
    
    for(let i = 0; i + length - 1 < t.length; i++){
        const temp = Number(t.slice(i, i + length))
        
        if(temp <= standard){
            answer++
        }
    }
    
    return answer;
}