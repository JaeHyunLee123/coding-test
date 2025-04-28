class Node {
    constructor(name, referral, sell){
        this.name = name;
        //루트는 null로 설정
        this.referral = referral;
        //판매액
        this.sell = sell;
    }
}

function solution(enroll, referral, seller, amount) {   
    //1. 트리 만들기
    const treeMap = new Map()
    
    
    //2. 모든 노드 생성 후 맵에 등록
    enroll.forEach((name) => {
        treeMap.set(name, new Node(name, null, 0));
    })
    
    //3. 노드의 referral 연결
    enroll.forEach((name, i) => {
        const parentName = referral[i];
        
        if(parentName !== "-"){
            const currentNode = treeMap.get(name);
            const parentNode = treeMap.get(parentName);
            currentNode.referral = parentNode;
        }      
    })
    
    //4. 칫솔 판매 후 수익금 분배
    seller.forEach((name, i) => {
        let current = treeMap.get(name);
        let profit = amount[i] * 100;

        while (current !== null) {
            const give = Math.floor(profit * 0.1);
            const keep = profit - give;
                      
            current.sell += keep;
            
            if (give < 1) break;

            current = current.referral;
            profit = give;
            
        }
    })
    
    
    const answer = [];
    
    enroll.forEach(name => {
        answer.push(treeMap.get(name).sell);
    });
    
    return answer;
}