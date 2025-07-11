class MinHeap{
    constructor(){
        this.heap = [];
    }
    
    size(){
        return this.heap.length;
    }
    
    swap(i,j){
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
    
    heapifyUp(index){
        const parent = Math.floor((index - 1) / 2);
        
        if(index > 0 && this.heap[index] < this.heap[parent]){
            this.swap(index, parent);
            this.heapifyUp(parent);
        }
    }
    
    heapifyDown(index){
        let min = index;
        const left = index * 2 + 1;
        const right = index * 2 + 2;
        
        if(left < this.size() && this.heap[left] < this.heap[min]){
            min = left;
        }
        
        if(right < this.size() && this.heap[right] < this.heap[min]){
            min = right;
        }
        
        if(min !== index){
            this.swap(index, min);
            this.heapifyDown(min);
        }
    }
    
    insert(val){
        this.heap.push(val);
        
        this.heapifyUp(this.size() - 1);
    }
    
    popRoot(){
        if(this.size() === 0) return;
                
        const root = this.heap[0];
        const temp = this.heap.pop();
        
        if(this.size() > 0){
            this.heap[0] = temp;
            this.heapifyDown(0);
        }
        
        return root;
    }
    
    getRoot(){
        return this.heap[0];
    }
}

function solution(scoville, K) {
    const pq = new MinHeap();
    
    scoville.forEach((val) => {
        pq.insert(val);
    })
    
    let count = 0;
    
    while(pq.size() > 1){
        if(pq.getRoot() >= K){
            break;
        }
        
        const first = pq.popRoot();
        const second = pq.popRoot();
        
        const temp = first + second * 2;
        
        pq.insert(temp);
        
        count++;
    }
    
    if(pq.getRoot() >= K){
        return count;
    }else{
        return -1;
    }
}