function solution(lines) {
    var answer = 0;
    
    //일단 자료를 가공하자
    //시간:분:초 -> 모두 초로 e.g. 03:06:03.03 -> 3 * 3600 + 6 * 60 + 3.03
    
    //[시작시간, 끝나는 시간]으로 기록
    const times = []
    
    lines.forEach((line) => {
        const [,endTime, spendTime] = line.split(" ");
        
        const [hour,minute,second] = endTime.split(":");
        
        const converted = Number(hour) * 3600 + Number(minute) * 60 + Number(second);
        
        const temp = [converted - Number(spendTime.slice(0,-1)) + 0.001, converted];
    
        times.push(temp);
    })
    
    console.log(times)
    
    //times를 제일 앞에 것 부터 순회
    //응답 완료 시간에서 1초 더하기
    //앞로 순회하면서 위의 값이 시작시간과 끝시간 사이면 +1
    
    for(let i = 0; i < times.length; i++){
        const standard = times[i][1] + 1;
        let count = 1;
        
        for(let j = i + 1; j < times.length; j++){
            const [startTime,] = times[j];
            
            if(startTime < standard){
                count++;
            }
        }
        
        answer = Math.max(answer,count);
    }
    
    
    
    return answer;
}