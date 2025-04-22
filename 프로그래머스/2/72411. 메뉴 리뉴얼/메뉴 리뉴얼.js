const getAllCombination = (str, num) => {
    if (str.length < num || num <= 0) {
        return [];
    }

    const result = [];

    const dfs = (start, path) => {
        if (path.length === num) {
            result.push(path);
            return;
        }

        for (let i = start; i < str.length; i++) {
            dfs(i + 1, path + str[i]);
        }
    };
    
    str = str.split('').sort().join('');

    dfs(0, "");
    return result;
};

//str1이 str2에 포함되는지
const includes = (str1, str2) => {
    
    if(str1.length > str2.length) return false;
    
    let i = 0;
    let j = 0;
    
    let match = 0;
    
    const temp1 = str1.split('').sort().join('');
    const temp2 = str2.split('').sort().join('');
    
    while(i < temp1.length && j < temp2.length){
        if(temp1.at(i) === temp2.at(j)){
            match++;
            i++;
            j++;
        }else{
            j++;
        }
    }
    
    return match === str1.length;
}

function solution(orders, course) {
    const answer = [];
    
    
    //예를 들어 2개 조합을 생각해야 할 때
    //첫 번째 손님부터 가능한 2개씩의 조합을 전부 시험
    
    
    course.forEach((count) =>{
        //시험해 본 조합 저장용
        const memo = [];
        
        //특정 조합이 나온 횟수 저장용
        const map = new Map()
        
        for(let i = 0; i < orders.length; i++){
            //가능한 모든 문자열 조합 배열 생성
            const combinations = getAllCombination(orders[i], count);
            
            for(let j = 0; j < combinations.length; j++){
                //이미 시험해본 조합이면 건너뛰기
                if(memo.includes(combinations[j])) continue;
                 
                //조합을 시험 할 때마다 memo 배열에 저장해 중복 시험 방지 
                memo.push(combinations[j]);
                
                for(let k = 0; k < orders.length; k++){
                    if(!includes(combinations[j], orders[k])) continue;
                    
                    //확인하고 있는 조합이 있다면 map에 개수 + 1
                    if(map.has(combinations[j])){
                        const temp = map.get(combinations[j]);
                        
                        map.set(combinations[j], temp + 1);
                    }else{
                        map.set(combinations[j], 1)
                    }
                }
            }    
        }
        
        //해당 조합 개수에 따른 검사가 끝났다면 주문이 가장 많은 것만 남기기
        let max = 2;
        map.forEach((val) => {
            max = Math.max(val, max);
        })
        
        map.forEach((val, key) => {
            if(val === max) answer.push(key);
        })
    })
    
    return answer.sort();
}