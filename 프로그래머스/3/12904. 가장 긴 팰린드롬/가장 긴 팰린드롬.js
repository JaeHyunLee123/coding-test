const isPalindrome = (str) => {
    let i = 0;
    let j = str.length - 1;
    
    while(i < j){
        if(str.at(i) !== str.at(j)){
            return false;
        }else{
            i++;
            j--;
        }
    }
    
    return true;
}

function solution(s)
{
    let len = s.length;
    
    for(; len > 0; len--){
        let i = 0;
        let j = len;
        
        while(j < s.length + 1){
            if(isPalindrome(s.slice(i,j))){
                return len;
            }else{
                i++;
                j++;
            }
        }
    }


    return len;
}