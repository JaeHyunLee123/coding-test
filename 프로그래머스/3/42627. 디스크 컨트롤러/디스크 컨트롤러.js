class Node{
    constructor({spendingTime, requestTime, index}){
        this.spendingTime = spendingTime;
        this.requestTime = requestTime;
        this.index = index;
    }
    
    //우선순위
    //1. 작업의 소요 시간이 짧은 것
    //2. 작업의 요청 시각이 빠른 것
    //3. 작업의 번호가 작은것
    isSmallerThen(target){
        if(this.spendingTime !== target.spendingTime){
            if(this.spendingTime < target.spendingTime){
                return true;
            }else{
                return false;
            }
        }else if(this.requestTime !== target.requestTime){
            if(this.requestTime < target.requestTime){
                return true;
            }else{
                return false;
            }
        }else{
            if(this.index < target.index){
                return true;
            }else{
                return false;
            }
        }
    }
}

class MinHeap{
    constructor(){
        this.heap = [];
    }
    
    size(){
        return this.heap.length;
    }
    
    swap(i, j){
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp; 
    }
    
    heapifyUp(index){
        const parent = Math.floor((index - 1) / 2);
        
        if(index > 0 && this.heap[index].isSmallerThen(this.heap[parent])){
            this.swap(index, parent);
            this.heapifyUp(parent);
        }
    }
    
    heapifyDown(index){
        let smallest = index;
        const left = index * 2 + 1;
        const right = index * 2 + 2;
        
        if(left < this.size() && this.heap[left].isSmallerThen(this.heap[smallest])){
            smallest = left;
        }
        
        if(right < this.size() && this.heap[right].isSmallerThen(this.heap[smallest])){
            smallest = right;
        }
        
        if(index !== smallest){
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }
    
    insert(node){
        this.heap.push(node);
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
        return this.heap[0]
    }    
}

function solution(jobs) {
    let currTime = 0;
    let totalTime = 0
    let i = 0;
    let completed = 0;
    
    const pq = new MinHeap();
    
    jobs.sort((a,b) => a[0] - b[0]);
    
    while(completed < jobs.length){
        while(i < jobs.length && jobs[i][0] <= currTime){
            const job = jobs[i];
            
            const node = new Node({spendingTime: job[1], requestTime: job[0], index: i})
            pq.insert(node)
            
            i++;
        }
        
       if (pq.size() > 0) {
            const job = pq.popRoot();
            currTime += job.spendingTime;
            totalTime += (currTime - job.requestTime);
            completed++;
        } else {
            // 실행 가능한 작업이 없다면 시간만 흐르게 함
            currTime = jobs[i][0];
        }
    }
    
    
    return Math.floor(totalTime / jobs.length)
}