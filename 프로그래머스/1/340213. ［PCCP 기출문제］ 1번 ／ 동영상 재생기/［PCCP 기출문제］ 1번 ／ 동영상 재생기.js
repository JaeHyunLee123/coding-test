const toSeconds = (str) => {
  const [m, s] = str.split(":").map(Number);
  return m * 60 + s;
};

const toTimeString = (sec) => {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};


function solution(video_len, pos, op_start, op_end, commands) {

    //처리하기 좋게 초 단위로 모두 변환
    const videoLen = toSeconds(video_len)
    let current = toSeconds(pos)
    const openingStart = toSeconds(op_start)
    const openingEnd = toSeconds(op_end)
    
    
    if(openingStart <= current && current <= openingEnd){
      current = openingEnd;  
    }
    
    
    commands.forEach(command => {
        if(command === "next"){
            current += 10;
        }else{
            current -= 10;
        }
        
        if(current < 0){
            current = 0;
        }
        
        if(current > videoLen){
            current = videoLen;
        }
        
        if(openingStart <= current && current <= openingEnd){
            current = openingEnd;  
        }
    })
     
    return toTimeString(current);
}