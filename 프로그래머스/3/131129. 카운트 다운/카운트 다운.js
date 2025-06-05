function solution(target) {   
    //1부터 20까지의 숫자가 있고
    //각각 싱글, 더블, 트리플이 있다
    //번외로 정중앙은 불이라 불리며 50점이다.
    
    //가장 적은 시도로 타겟 점수를 달성하면 이긴다
    //같은 시도 횟수면 싱글과 불의 합이 많으면 이긴다
    
    
    
    const dp = new Array(target + 1).fill([Infinity,0]);
    

    
    //dp 설정
    for(let i = 1; i < dp.length; i++){       
        //dp base 값
        if(1 <= i && i <= 20){
            //1점부터 20점은 싱글로 맞추는 것이 최적
            dp[i] = [1,1];
            continue;
        }
        
        if(i === 50){
            //50점은 불로 하면 최적
            dp[i] = [1,1];
            continue;
        }
        
        if(i <= 60 && i % 3 === 0){
            //21점 ~ 60점이면서 3의 배수면 트리플로 맞추는 것이 최적
            dp[i] = [1,0];
            continue;
        }
        
        if (i <= 40 && i % 2 === 0){
            //21점 ~ 40점이면서 2의 배수면 더블로 맞추는 것이 최적
            dp[i] = [1,0];
            continue;
        }
        
        
        //base 케이스가 아닌 경우
        //dp[i] = dp[x] + dp[i - x]가 최적값이 되게 하는 x 찾기
        
        for(let j = 1; j <= 20; j++){
            //1부터 20의 숫자에서 싱글, 더블, 트리플을 맞춘 경우 탐색
            for(let k = 1; k <= 3 && j * k < i; k++){
                const x = j * k;
                
                const acc = dp[x];
                const add = dp[i-x];
                
                const temp = [acc[0] + add[0], acc[1] + add[1]];
                
                if(temp[0] < dp[i][0]){
                    dp[i] = [...temp]
                }
                
                if(temp[0] === dp[i][0] && temp[1] > dp[i][1]){
                    dp[i] = [...temp]
                }
            }
        }
        
        //50을 맞춘 경우
        if(i > 50){
                const acc = dp[50];
                const add = dp[i-50];
                
                const temp = [acc[0] + add[0], acc[1] + add[1]];
                
                if(temp[0] < dp[i][0]){
                    dp[i] = [...temp]
                }
                
                if(temp[0] === dp[i][0] && temp[1] > dp[i][1]){
                    dp[i] = [...temp]
                }
        }
        
    }
    
      
    return dp[dp.length - 1];
}