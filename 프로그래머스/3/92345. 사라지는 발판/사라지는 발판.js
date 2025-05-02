function solution(board, aloc, bloc) {
    const dirs = [
        [0, 1],  // 오른쪽
        [1, 0],  // 아래
        [0, -1], // 왼쪽
        [-1, 0]  // 위
    ];

    const dfs = (aLoc, bLoc, isAturn, board) => {
        const [y, x] = isAturn ? aLoc : bLoc;

        // 현재 위치에 발판이 없다면 패배
        if (board[y][x] === 0) {
            return { moved: 0, win: !isAturn ? "A" : "B" };
        }

        // 이동 가능한 방향이 없으면 패배
        let hasMove = false;
        for (const [dy, dx] of dirs) {
            const ny = y + dy, nx = x + dx;
            if (0 <= ny && ny < board.length && 0 <= nx && nx < board[0].length && board[ny][nx]) {
                hasMove = true;
                break;
            }
        }
        if (!hasMove) {
            return { moved: 0, win: !isAturn ? "A" : "B" };
        }

        let winMoves = [];
        let loseMoves = [];

        for (const [dy, dx] of dirs) {
            const ny = y + dy, nx = x + dx;
            if (0 <= ny && ny < board.length && 0 <= nx && nx < board[0].length && board[ny][nx]) {
                const newBoard = board.map(row => [...row]); // 깊은 복사
                newBoard[y][x] = 0;

                const nextA = isAturn ? [ny, nx] : aLoc;
                const nextB = isAturn ? bLoc : [ny, nx];

                const result = dfs(nextA, nextB, !isAturn, newBoard);

                if (result.win === (isAturn ? "A" : "B")) {
                    winMoves.push(result.moved + 1);
                } else {
                    loseMoves.push(result.moved + 1);
                }
            }
        }

        if (winMoves.length > 0) {
            return { moved: Math.min(...winMoves), win: isAturn ? "A" : "B" };
        } else {
            return { moved: Math.max(...loseMoves), win: !isAturn ? "A" : "B" };
        }
    };

    const result = dfs(aloc, bloc, true, board);
    return result.moved;
}