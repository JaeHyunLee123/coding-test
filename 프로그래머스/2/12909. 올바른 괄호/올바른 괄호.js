function solution(s){

    const stack = [];
    
    for(let i = 0; i < s.length; i++){
        if(s.at(i) === "("){
            stack.push(1);
        }else{
            if(stack.length > 0){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    
    return stack.length === 0;
}