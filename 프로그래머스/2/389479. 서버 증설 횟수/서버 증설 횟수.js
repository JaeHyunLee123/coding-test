function solution(players, m, k) {
    let answer = 0;
    
    //서버 하나가 증설되면 k를 푸쉬
    //1시간이 지나면 모든 수에서 -1, 0이면 제거
    //length => 서버 수
    let servers = [];
    
    
    players.forEach((playerCount,i) => {
        servers = servers.map((server) => server - 1);
        servers = servers.filter((server) => server > 0);
        
        
        
        while(servers.length * m <= playerCount - m){
            servers.push(k)
            answer++;
        }
        
    })
    
    return answer;
}