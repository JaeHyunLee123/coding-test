function solution(n, times) {
    let answer = 0;
    
    let left = 1;//소요가능한 최소 시간
    let right = Math.max(...times) * n //소요가능한 최대 시간
        
    while(left <= right){
        const mid = Math.floor((left + right)/2);
        
        //입국심사를 완료한 사람들
        let totalPeople = 0;
        
        for(let i = 0; i < times.length; i++){
            //mid시간동안 해당 입국 심사관은 몇명을 통과시킬 수 있는지
            totalPeople += Math.floor(mid / times[i]);
            if(totalPeople > n) break;
        }
        
        //모든 참가자를 통과시킨경우
        if(n === totalPeople){
            if(right - left <= 1) return mid;
            
            right = mid - 1;
        }
        
        if(n <= totalPeople){
            right = mid - 1;
            answer = mid;
        }else{
            left = mid + 1
        }
        
    }
    
    
    
    
    
    return answer;
}