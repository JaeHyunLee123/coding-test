function solution(info, n, m) {
    let answer = Infinity;
    
    const memo = new Set();
    
    const dfs = (i, aClues, bClues) => {
        if(i === info.length){
            if(aClues < n && bClues < m){
                if(aClues < answer){
                    answer = aClues;
                }   
            }
            return;
        }
        
        const key = `${i}-${aClues}-${bClues}`
        
        if(memo.has(key)){
            return;
        }
        
        memo.add(key)
        
        if(aClues + info[i][0] < n){
            dfs(i+1, aClues + info[i][0], bClues);
        }
        
        if(bClues + info[i][1] < m){
            dfs(i+1, aClues, bClues + info[i][1]);
        }  
    }
    
    dfs(0,0,0);
    
    return answer === Infinity ? -1 : answer
}