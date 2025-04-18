function solution(info, edges) {
    let answer = 0;
    
    const isVisiteds = Array(info.length).fill(false);
    isVisiteds[0] = true;
    
    const DFS = (sheepNum, wolfNum) => {
        if(sheepNum <= wolfNum) return;
        
        answer = Math.max(sheepNum, answer);
        
        edges.forEach((edge) => {
            const [parent, child] = edge;
            
            if(isVisiteds[parent] && !isVisiteds[child]){
                isVisiteds[child] = true;
                
                if(info[child] === 0){
                    DFS(sheepNum + 1, wolfNum);
                }else{
                    DFS(sheepNum, wolfNum + 1);
                }
                
                isVisiteds[child] = false;
            }
        })
    }
    
    DFS(1,0);
    
    return answer;
}