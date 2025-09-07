function solution(s) {
    let answer = "";
    
    const numberMap = new Map([
        ["zero","0"],
        ["one","1"],
	    ["two","2"],
	    ["three","3"],
	    ["four","4"],
        ["five","5"],
	    ["six","6"],
	    ["seven","7"],
	    ["eight","8"],
	    ["nine","9"]
    ]);
    
    let temp = "";
    
    for(let i = 0; i < s.length; i++){
        if(numberMap.has(temp)){
            answer = answer + numberMap.get(temp);
            temp = "";      
        }
        
        const char = s.at(i);
        
        if(isNaN(Number(char))){
            temp = temp + char
        }else{
            answer = answer + char;
        }
    }
    
    if(numberMap.has(temp)){
        answer = answer + numberMap.get(temp);
        temp = "";      
    }
    
    
    return Number(answer);
}