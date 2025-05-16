function solution(matrix_sizes) {
    const n = matrix_sizes.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(Infinity));

    // i번째 행렬부터 i번째 행렬까지 곱하는 비용은 0
    for (let i = 0; i < n; i++) {
        dp[i][i] = 0;
    }

    // 체인 길이: 2부터 n까지
    for (let length = 2; length <= n; length++) {
        for (let i = 0; i <= n - length; i++) {
            const j = i + length - 1;
            for (let k = i; k < j; k++) {
                const cost =
                    dp[i][k] +
                    dp[k + 1][j] +
                    matrix_sizes[i][0] * matrix_sizes[k][1] * matrix_sizes[j][1];
                dp[i][j] = Math.min(dp[i][j], cost);
            }
        }
    }

    return dp[0][n - 1];
}