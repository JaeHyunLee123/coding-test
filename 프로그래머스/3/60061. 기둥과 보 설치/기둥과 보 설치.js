function isValid(pillarBlueprint, crossbeamBlueprint, n) {
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (pillarBlueprint[y][x]) {
        const valid =
          y === 0 ||
          pillarBlueprint[y - 1][x] ||
          crossbeamBlueprint[y][x] ||
          (x > 0 && crossbeamBlueprint[y][x - 1]);

        if (!valid) return false;
      }

      if (crossbeamBlueprint[y][x]) {
        const valid =
          (pillarBlueprint[y - 1]?.[x] || pillarBlueprint[y - 1]?.[x + 1]) ||
          (crossbeamBlueprint[y][x - 1] && crossbeamBlueprint[y][x + 1]);

        if (!valid) return false;
      }
    }
  }
  return true;
}


function solution(n, build_frame) { 
    n = n + 1;
    
    //설계도    
    const pillarBlueprint = Array.from({length: n}, () => Array(n).fill(false));
    const crossbeamBlueprint = Array.from({length: n}, () => Array(n).fill(false));
    
    for(let i = 0; i < build_frame.length; i++){
        const [x,y,a,b] = build_frame[i];
        
        const isPillar = a === 0;
        const isCreate = b === 1;
        
        
        if(isPillar && isCreate){
            pillarBlueprint[y][x] = true;
            
            if(!isValid(pillarBlueprint,crossbeamBlueprint,n)){
                pillarBlueprint[y][x] = false;
            }
        
        }else if(isPillar && !isCreate){
            pillarBlueprint[y][x] = false;
            
            if(!isValid(pillarBlueprint,crossbeamBlueprint,n)){
                pillarBlueprint[y][x] = true;
            }

            
        }else if(!isPillar && isCreate){
            crossbeamBlueprint[y][x] = true;
            
            if(!isValid(pillarBlueprint,crossbeamBlueprint,n)){
                crossbeamBlueprint[y][x] = false;
            }
            
        }else{
           crossbeamBlueprint[y][x] = false;
            
            if(!isValid(pillarBlueprint,crossbeamBlueprint,n)){
                crossbeamBlueprint[y][x] = true;
            }
        }
    }
    
    const answer = []
    
    for(let x = 0; x < n; x++){
        for(let y = 0; y < n; y++){
            if(pillarBlueprint[y][x]){
                answer.push([x,y,0])
            }
            
            if(crossbeamBlueprint[y][x]){
                answer.push([x,y,1])
            }
        }
    }
    
    
    
    return answer;
}