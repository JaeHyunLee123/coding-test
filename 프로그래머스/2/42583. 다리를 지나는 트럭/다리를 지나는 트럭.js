function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    
    const bridge = new Array(bridge_length).fill(0);
    
    const lastTruck = truck_weights[truck_weights.length - 1];
    
    while(truck_weights.length > 0){
        
        bridge.shift();
        const currentBridgeWeight = bridge.reduce((acc,curr) => acc + curr);
        
        if(currentBridgeWeight + truck_weights[0] > weight){         
            bridge.push(0);
        }else{
            bridge.push((truck_weights.shift()));
        }
        
        answer++;
    }
    
    
    return answer + bridge.lastIndexOf(lastTruck) + 1;
}