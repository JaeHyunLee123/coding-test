function solution(n, costs) {
    //1.간선 정렬
   costs.sort((a,b) => a[2] - b[2]);
    
    //2. 유니온-파인드 자료구조 초기화(초기엔 자기 자신을 부모)
   const parents = Array.from({length:n}, (_,i) => i);
    
    //2-1. 부모를 찾는 함수
    const find = (x) =>{
        if(parents[x] !== x) parents[x] = find(parents[x]);
        
        return parents[x]
    }
    
    //2-2. 두 집합을 하나로 합치는 함수
    const union = (x,y) => {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX === rootY) return false;  // 이미 같은 집합
        parents[rootY] = rootX;
        return true;
    }
    
    //3.Minimun spannin tree 구성
    let answer = 0;
    costs.forEach(([a,b,cost]) => {
        if(union(a,b)){
            answer += cost;
        }
    })
    
    return answer;
}