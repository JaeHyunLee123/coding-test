function solution(a) {    
    if(a.length < 3){
        return 1;
    }
    
    //조건이 있을 것 같아
    
    //[n(0), n(1) ... n(k-1), n(k), n(k+1) ... n(n-1)]
    // -> 여기서 n(k)를 남기는 방법은?
    // -> n(0) - n(k-1)과 n(k+1) - n(n-1) 두 구간에서 터트린 결과가 둘 다 n(k)보다 커야한다
    // -> 위 과정에서 작은거 터트리기를 사용하지 않았으면 둘 중의 하나는 작아도 된다
    // -> 근데 두 구간에서 남는 건 그 구간에서 결국 제일 작은 숫자
    // -> 작은거 터트리기 사용하면 두번째로 작은 숫자
    
    //이게 결과적으로 두 구간에서 제일 작은 수 둘 중의 하나만 n(k)보다 크면 된다.
    
    //그럼 제일 작은 수를 저장해두는 dp를 만들자 -> 공간복잡도 터짐
    //dp[i][j] -> a[i] ~ a[j]중에서 가장 작은 수
//     const dp = Array.from({length: a.length}, () => Array(a.length).fill("-"));
    
//     a.forEach((num,i) => {
//         dp[i][i] = num;
//     })
    
//     for(let j = 1; j < a.length; j++){
//         for(let i = 0 ; i + j < a.length; i++){
//             dp[i][i+j] = Math.min(dp[i][i+j-1], dp[i+1][i+j])
//         }
//     }
    
    
    
    //이거 최소값을 저장하는 dp를 이중배열필요가 없어
    //dp[i] => i~끝까지 중에 최소값 저장해두는 dp
    
    const dp = new Array(a.length);
    dp[dp.length - 1] = a[a.length - 1];
    
    for(let i = dp.length - 2; i > 0; i--){
        dp[i] = Math.min(a[i], dp[i+1]);
    }
    
    //반복문을 돌리면서 왼쪽 최소값과 오른쪽 최솟값 갱신 
    let leftSmallest = a[0];
    
    //양 끝에 있는 숫자는 항상 가능해서 제외하고 반복문 돌리기
    let answer = 2; 
    for(let i = 1; i < a.length - 1; i++){      
        const target = a[i];
        const rightSmallest = dp[i+1]
        
        if(leftSmallest > target || rightSmallest > target){
            answer++;
        }
        
        leftSmallest = Math.min(target,leftSmallest);        
    } 
    return answer;
}