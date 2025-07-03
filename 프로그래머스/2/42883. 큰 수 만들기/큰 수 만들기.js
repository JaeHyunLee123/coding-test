function solution(number, k) {
    var answer = '';
    
    const stack = [];
    
    for(let i = 0; i < number.length; i++){
        const char = number.at(i)
        
        while(stack.length > 0 && stack[stack.length - 1] < char && k > 0){
            stack.pop();
            k--;
        }
        
        stack.push(char);
    }
    
    
    
    
    return stack.slice(0,number.length - k).join("");
}