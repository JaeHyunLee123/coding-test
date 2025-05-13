function solution(arr)
{
    const answer = [];

    const stack = [];
    
    arr.forEach((num) => {
        if(stack[stack.length -1 ] !== num){
            answer.push(num);
            stack.push(num);
        }
    })
    
    return answer;
}