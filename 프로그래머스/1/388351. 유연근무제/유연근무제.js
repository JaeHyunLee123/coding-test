//60진법 시간 더하기를 위한 함수
const timeSum = (currentTime, addTime) => {
    const hour = Math.floor(currentTime / 100);
    const minutes = currentTime % 100;
    
    const newMinutes = minutes + addTime;
    
    //어차피 10분만 더할꺼여서 재귀 처리 X
    if(newMinutes < 60){
        return hour * 100 + newMinutes;
    }else{
        //분이 60보다 크면 올림 처리
        return (hour + 1) * 100 + newMinutes - 60;
    }
}

function solution(schedules, timelogs, startday) {
    let answer = 0;
    
    //직원 수
    const employee = schedules.length;
    
    for(let i = 0; i < employee; i++){
        //출근 성공 횟수
        let success = 0;
        
        //출근 마감 시간
        const marginTime = timeSum(schedules[i], 10);
        
        for(let j = 0; j < timelogs[i].length; j++){
            //토요일과 일요일 제외
            if((j + startday) % 7 === 6 || (j + startday) % 7 === 0) {     
                continue;
            };
              
            if(marginTime >= timelogs[i][j]){
                success++;
            }else{
                break;
            }
        }
        
        if(success === 5){
            answer++;
        }
    }
    
    return answer;
}