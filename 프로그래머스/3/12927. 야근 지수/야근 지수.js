const insertSort = (arr) => {
    let i = arr.length - 1;
    
    while(arr[i - 1] > arr[i]){
        const temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
        
        i--;
    }
}

function solution(n, works) {
    var answer = 0;
    
    works.sort((a,b) => a - b);
    
    for(let i = 0; i < n; i++){
        works[works.length - 1]--;
        insertSort(works);
    }
    
    return works.reduce((acc, curr)=>{
        if(curr < 1){
            return acc+0;
        }else{
            return acc + Math.pow(curr,2)
        }
    },0);
}