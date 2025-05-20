const isAccessable = (storage, coordinate) => {
    
    const [x,y] = coordinate;
    
    //좌표가 경계면 참
    if(x === 0 || x === storage[0].length - 1 || y === 0 || y === storage.length - 1){
        return true;
    }
    
    const dx = [0,0,-1,1];
    const dy = [-1,1,0,0];
    
    const isVisiteds = Array.from({length:storage.length}, () => Array(storage[0].length).fill(false))
    
    isVisiteds[y][x] = true;
    
    const queue = [[x,y]];
    
    while(queue.length > 0){
        
        const [tempX,tempY] = queue.pop();
        
        for(let i = 0; i < 4; i++){
            const nx = tempX + dx[i];
            const ny = tempY + dy[i];
                        
            if(storage[ny][nx] === null){             
                if(nx === 0 || nx === storage[0].length - 1 || ny === 0 || ny === storage.length - 1){
                    return true;
                }else{
                    if(!isVisiteds[ny][nx]){
                        queue.push([nx,ny])
                        isVisiteds[ny][nx] = true
                    }
                }
            }
        }
    }
    
    return false;
}

function solution(storage, requests) {
    let answer = storage.length * storage[0].length;
    
    const storageArr = []
    
    for(let i = 0; i < storage.length; i++){
        storageArr.push(storage[i].split(""))
    }
    
    const deletedMap = new Map();
    
    
    requests.forEach((request) => {
        if(!deletedMap.has(request[0])){
            if(request.length === 2){
                //크레인일 때
                for(let i = 0; i < storageArr.length; i++){
                    for(let j = 0; j < storageArr[0].length; j++){
                        if(storageArr[i][j] === request[0]){
                            storageArr[i][j] = null;
                            answer--;
                        }
                    }
                }           
                deletedMap.set(request[0], 1);
            }else{
                //지게차일 때
                //현재 상태 deepcopy
                const storageCopy = JSON.parse(JSON.stringify(storageArr));
                
                for(let i = 0; i < storageArr.length; i++){
                    for(let j = 0; j < storageArr[0].length; j++){
                        if(storageArr[i][j] === request[0] && isAccessable(storageCopy,[j,i])){
                            storageArr[i][j] = null;
                            answer--
                        }
                    }
                } 
            }
        }
        
        
    })
    
    
    return answer;
}