

function solution(board) {
    
    //뭔가 최적 경로를 구하는 방법을 고민했는데
    //제한 사항보니 전체 경우의 수가 많지 않아 넓이우선탐색 적용
    
    const len = board.length;
    
    //상하좌우
    const directions = [[-1,0], [1,0], [0,-1], [0,1]]
    
    //visited[y][x][dir]: 해당 좌표에 특정 방향으로 도착했을 때의 최소비용
    const visited = Array.from({length: len}, () => (
        Array.from({length:len}, () => Array(4).fill(Infinity))
    ));
    
    const queue = []
    
    //시작할 때 아래 & 오른쪽으로 시작
    for (let d of [1, 3]) {
        const [dy, dx] = directions[d];
        const ny = dy;
        const nx = dx;
        if (board[ny] && board[ny][nx] === 0) {
            visited[ny][nx][d] = 100;
            queue.push([ny, nx, d, 100]);
        }
    }
    
    while (queue.length > 0){
        const [y,x,dir,cost] = queue.shift();
        
        for(let nd = 0; nd < directions.length; nd++){
            const [dy, dx] = directions[nd];
            const ny = y + dy;
            const nx = x + dx;
            
            //보드 벗어나는 곳 패스
            if (ny < 0 || ny >= len || nx < 0 || nx >= len) continue;
            //벽은 패스
            if (board[ny][nx] === 1) continue;
            
            const isCorner = dir !== nd;
            const newCost = cost + (isCorner ? 600 : 100);

            if (visited[ny][nx][nd] > newCost) {
                visited[ny][nx][nd] = newCost;
                queue.push([ny, nx, nd, newCost]);
            }
        }
    }
    
    return Math.min(...visited[len - 1][len - 1]);;
}