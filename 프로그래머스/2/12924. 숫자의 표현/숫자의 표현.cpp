#include <string>
#include <vector>


using namespace std;

int solution(int n) {
    int answer = 1;
    
    int half = n / 2 + 2;
    
    
    for(int i = 1; i <= half; i++){
        
        int sum = i;
        for(int j = i+1; j <= half; j++){
            sum += j;
            
            if(sum == n){
                
                answer++;
                break;
            }
            
            if(sum > n){
                
                break;
            }
        }
    }
    
    return answer;
}