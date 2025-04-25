//a가 빠르거나 같으면 true, b가 빠르면 false return
const isFaster = (a,b) => {
  const [aHour, aMinutes] = a.split(":");
  const [bHour, bMinutes] = b.split(":"); 
    
  if(aHour === bHour){
      return Number(aMinutes) <= Number(bMinutes);
  }else{
      return Number(aHour) < Number(bHour);
  }
}

function solution(n, t, m, timetable) {
    let answer = '';
    
    //셔틀이 도착하는 시간 저장
    const shuttleArrives = [];
    for(let i = 0; i < n; i++){
        let minutes = i * t;
        
        const hour = 9 + Math.floor(minutes / 60);
        minutes = minutes % 60;
        
        shuttleArrives.push(`${String(hour).padStart(2,"0")}:${String(minutes).padStart(2,'0')}`);        
    }
    
    //크루 도착 시간을 시간 순으로 정렬
    timetable.sort()

    shuttleArrives.forEach((shuttleTime, i) => {
        //마지막 셔틀인지 확인
        const isLast = n - 1 === i;
               
        if(isLast){
        //마지막 셔틀이면 타야한다.
        
            //마지막 셔틀에 타는 가장 늦는 사람과 탑승 사람 수를 구한다
            let latest = "23:59";
            let onBoard = 0;
            for(let j = 0; j < m && j < timetable.length; j++){
                if(isFaster(timetable[j], shuttleTime)){
                    onBoard++;
                    latest = timetable[j];
                }
            }
            
        
            if(onBoard < m){
            //도착시간 전 혹은 같은 시간에 오는 사람 수가 정원보다 적으면 셔틀 도착 시간에 도착
                answer = shuttleTime;
            }else{
            //아니면 기존 탈 수 있는 사람 중 가장 늦는 사람 보다 1분 전 도착
                const [latestHour, latestMinutes] = latest.split(":");
                
                if(latestMinutes === "00"){
                    const hour =  Number(latestHour) - 1;
                    answer = `${String(hour).padStart(2,'0')}:59`
                }else{
                    const minutes = Number(latestMinutes) - 1;
                    answer = `${latestHour}:${String(minutes).padStart(2,'0')}`
                }
            }
             
        }else{//마지막 셔틀이 아니면 손님들 태우고 간다.
            let j = 0;
            while(j < m && j < timetable.length && isFaster(timetable[j],shuttleTime)){
                j++;
            }
            timetable.splice(0,j);
        }
    })
    
    return answer;
}