function solution(n, arr1, arr2) {
    var answer = [];
    
    //1. 10진수 -> 2진수 변환
    const toBinary = (num, curr) => {
        if(num <= 1){
            return (String(num) + curr).padStart(n, "0");
        }
        
        const divided = Math.floor(num / 2);
        const remain = num % 2;
        
        return toBinary(divided, String(remain) + curr)
    }
    
    //2. or 연산
    for(let i = 0; i < n; i++){
        const binary1 = toBinary(arr1[i], "")
        const binary2 = toBinary(arr2[i], "")
        
        let temp = ""
        
        for(let j = 0 ; j < n; j++){
            const char1 = binary1.at(j)
            const char2 = binary2.at(j)
            
            if(char1 === "1" || char2 === "1"){
                temp += "#"
            }else{
                temp += " "
            }
        }
        
        answer.push(temp)
    }
    
    
    return answer;
}