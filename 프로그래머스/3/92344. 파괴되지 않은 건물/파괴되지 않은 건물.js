function solution(board, skill) {
    
    //누적합 보드 생성
    const accumulateBoard = Array.from({length: board.length + 1}, () => Array(board[0].length + 1).fill(0))
    
    //누적함 기록
    skill.forEach(([type, r1, c1, r2, c2, degree]) => {
        if(type === 1){
            accumulateBoard[r1][c1] -= degree;
            accumulateBoard[r1][c2+1] += degree;
            accumulateBoard[r2+1][c1] += degree;
            accumulateBoard[r2+1][c2+1] -= degree;           
        }else{
           accumulateBoard[r1][c1] += degree;
            accumulateBoard[r1][c2+1] -= degree;
            accumulateBoard[r2+1][c1] -= degree;
            accumulateBoard[r2+1][c2+1] += degree;       
        }
    })
    
    //행 방향 누적합 계산
    for(let i = 1; i < accumulateBoard.length; i++){
        for(let j = 0; j < accumulateBoard[0].length; j++){
            accumulateBoard[i][j] += accumulateBoard[i-1][j]
        }
    }
    
    //열 방향 누적합 계산
    for(let j = 1; j < accumulateBoard[0].length; j++){
        for(let i = 0 ; i < accumulateBoard.length; i++){
            accumulateBoard[i][j] += accumulateBoard[i][j-1]
        }
    }
    
    //정답 세기
    let answer = 0;
    
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] + accumulateBoard[i][j] > 0) answer++;
        }
    }
    
    return answer;
}