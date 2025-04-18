const howManySameElements = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    
    let answer = 0;
    
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] > arr2[j]){
            j++;
        }else if(arr1[i] < arr2[j]){
            i++;
        }else{
            answer++;
            i++;
            j++;
        }
    }
    return answer;
}

function solution(n, q, ans) {
    var answer = 0;
    
    
    //n은 최대값
    //비밀번호는 오름차순 5자리 정수
    
    //가장 나이브한 방법은 모든 경우의 수를 보면 돼
    //시간 복잡도는 C(n,5) (최대 30! / 5! * 25!)
    
    
  for (let i = 1; i <= n - 4; i++) {
    for (let j = i + 1; j <= n - 3; j++) {
      for (let k = j + 1; k <= n - 2; k++) {
        for (let l = k + 1; l <= n - 1; l++) {
          for (let m = l + 1; m <= n; m++) {
            
              const currArr = [i,j,k,l,m];
              
              let temp = 0;
              
              for(let index = 0; index < q.length; index++){
                  const sameCount = howManySameElements(currArr, q[index]);
              
                  if(sameCount === ans[index]){
                      temp++
                  }else{
                      break;
                  }
              }
              
              if(temp === q.length){
                  answer++;
              }
          }
        }
      }
    }
  }
    
    
    return answer;
}