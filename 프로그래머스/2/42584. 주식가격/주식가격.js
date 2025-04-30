function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    
    const stack = [];
    
    
    for (let i = 0; i < prices.length; i++) {
        // 가격이 떨어진 시점이 오면, 스택에서 가격이 더 높은 항목을 꺼낸다.
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            const top = stack.pop();
            answer[top] = i - top;
        }
        stack.push(i); // 인덱스를 스택에 저장
    }

    // 아직 스택에 남은 인덱스는 끝까지 가격이 떨어지지 않은 경우
    while (stack.length > 0) {
        const top = stack.pop();
        answer[top] = prices.length - 1 - top;
    }
    
    return answer;
}