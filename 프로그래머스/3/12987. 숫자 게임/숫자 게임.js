
function solution(A, B) {
    let answer = 0;
    
    //A,B 오름차순으로 정렬
    A.sort((a,b) => a - b);
    B.sort((a,b) => a - b);
    
    //투 포인터 전략을 사용해 B가 이길 때마다 승점 +1
    let i = 0;
    let j = 0;
    
    while(i < A.length && j < B.length){
        if(A[i] < B[j]){
            i++;
            j++;
            answer++;
        }else{
            j++;
        }
    }
    
    return answer;
}