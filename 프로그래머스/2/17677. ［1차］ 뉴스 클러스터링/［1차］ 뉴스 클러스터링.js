const isAlphabet = (char) => {
    return ('a' <= char && char <= 'z') || ("A" <= char && char <="Z");
}

const getIntersectionSize = (small, big) => {
    if(small.length > big.length){
        throw new Error();
    }
    //이미 확인한 것을 기록해서 중복 검사 방지
    const memo = []
    
    //중복되는 원소 수 기록
    const map = new Map();
    
    //교집합은 둘 다 포함되어야 하기 때문에 하나만 해도 된다
    for(const e of small){
        if(memo.includes(e)) continue;
        
        memo.push(e);
        
        //small에 있는 원소의 개수 기록
        let temp1 = 0;
        //big에 있는 원소의 개수 기록
        let temp2 = 0;
        
        small.forEach((el) => {
            if(el === e) temp1++;
        })
        
        big.forEach((el) => {
            if(el === e) temp2++;
        })
        
        //두 수 중에서 최소 값 map에 저장
        map.set(e, Math.min(temp1, temp2));
    }
    
    let result = 0;
    map.forEach((val) => {
        result += val;
    })
    
    return result;
}

const getUnionSize = (small, big) => {
    if(small.length > big.length){
        throw new Error()
    }
    
    //이미 확인한 것을 기록해서 중복 검사 방지
    const memo = []
    
    //중복되는 원소 수 기록
    const map = new Map();
    
    for(const e of small){
        if(memo.includes(e)) continue;
        
        memo.push(e);
        
        //small에 있는 원소의 개수 기록
        let temp1 = 0;
        //big에 있는 원소의 개수 기록
        let temp2 = 0;
        
        small.forEach((el) => {
            if(el === e) temp1++;
        })
        
        big.forEach((el) => {
            if(el === e) temp2++;
        })
        
        //두 수 중에서 최대 값 map에 저장
        map.set(e, Math.max(temp1, temp2));
    }
    
    for(const e of big){
        if(memo.includes(e)) continue;
        
        memo.push(e);
        
        //small에 있는 원소의 개수 기록
        let temp1 = 0;
        //big에 있는 원소의 개수 기록
        let temp2 = 0;
        
        small.forEach((el) => {
            if(el === e) temp1++;
        })
        
        big.forEach((el) => {
            if(el === e) temp2++;
        })
        
        //두 수 중에서 최대 값 map에 저장
        map.set(e, Math.max(temp1, temp2));
    }
    
    let result = 0;
    map.forEach((val) => {
        result += val;
    })
    
    
    return result
}

function solution(str1, str2) {
    if(str1.length === 0 && str2.length === 0) return 65536;

    
    //1. 들어온 문자열을 두 글자씩 끊어서 다중집합으로 만든다
    //1-1. 소문자와 대문자는 같은 취급
    //1-2. 다중집합의 원소에 특수문자가 있으면 제거
    
    let set1 = [];
    let set2 = [];
    
    for(let i = 0; i < str1.length - 1; i++){
        if(isAlphabet(str1[i]) && isAlphabet(str1[i+1])){
           const temp = (str1[i] + str1[i+1]).toUpperCase();
        
           set1.push(temp); 
        }
    }
    
    for(let i = 0; i < str2.length - 1; i++){
        if(isAlphabet(str2[i]) && isAlphabet(str2[i+1])){
           const temp = (str2[i] + str2[i+1]).toUpperCase();
        
           set2.push(temp); 
        }     
    }
    
    if(set1.length === 0 && set2.length === 0) return 65536;
    
    //2. 두 개의 다중집합의 교집합의 원소의 개수를 구한다.
    //3. 두 개의 다중집합의 합집합의 원소의 개수를 구한다.
    let interSectionSize = 0;
    let unionSize = 0
    if(set1.length < set2.length){
        interSectionSize = getIntersectionSize(set1, set2)
        unionSize = getUnionSize(set1, set2)
    }else{
        interSectionSize = getIntersectionSize(set2, set1)
        unionSize = getUnionSize(set2, set1)
    }
    
    //4. 2와 3의 값을 나눈다.
    console.log(interSectionSize)
    console.log(unionSize)
    
    const answer = interSectionSize / unionSize;
    
    console.log(answer)
    
    return Math.floor(answer * 65536);
}