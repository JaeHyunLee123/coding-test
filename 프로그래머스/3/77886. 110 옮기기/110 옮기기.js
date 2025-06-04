function solution(s) {
    const answer = [];

    //문자열 하나를 입력받아
    //문제에 나온 규칙처럼 사전 순으로 제일 앞에 오게 만드는 함수
    const helper = (str) => {
        //1이 몇 개 있는지 카운트
        let one = 0;
        //110이 몇 개 있는지 카운트
        let ooz = 0;
        
        let result = "";
        
        for(let i = 0; i < str.length; i++){
            const char = str[i];
            
            if(char === "1"){
                one++;
            }
            
            if(char === "0"){
                if(one < 2){
                    if(one > 0) {
                        result += "10"
                    }
                    else{
                        result += "0";
                    }
                    
                    one = 0
                }else{
                    ooz++;
                    one -= 2;
                }
            }
        }
        
        for(let i = 0; i < ooz; i++){
            result += "110";
        }
        
        for(let i = 0; i < one; i++){
            result += "1"
        }
        
        return result;
    }
    
    s.forEach((x) => {
        answer.push(helper(x))
    })
    
    return answer;
}