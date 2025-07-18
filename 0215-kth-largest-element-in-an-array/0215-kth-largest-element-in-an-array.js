// class Maxheap{
//     constructor(){
//         this.heap = []
//     }

//     size(){
//         return this.heap.length;
//     }

//     heapifyUp(index){
//         const parent = Math.floor((index - 1) / 2);

//         if(index > 0 && this.heap[index] > this.heap[parent]){
//             const temp = this.heap[index];
//             this.heap[index] = this.heap[parent];
//             this.heap[parent] = temp;

//             this.heapifyUp(parent)
//         }
//     }

//     heapifyDown(index){
//         let max = index;
//         const left = index * 2 + 1;
//         const right = index * 2 + 2;

//         if(left < this.size() && this.heap[max] < this.heap[left]){
//             max = left;
//         }

//         if(right < this.size() && this.heap[max] < this.heap[right]){
//             max = right;
//         }

//         if(index !== max){
//             const temp = this.heap[index];
//             this.heap[index] = this.heap[max];
//             this.heap[max] = temp;

//             this.heapifyDown(max);
//         }
//     }

//     push(num){
//         this.heap.push(num);

//         this.heapifyUp(this.size() - 1);
//     }

//     pop(){
//         const root = this.heap[0];

//         const temp = this.heap.pop();

//         this.heap[0] = temp;

//         this.heapifyDown(0);

//         return root;
//     }
// }

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // const pq = new Maxheap();

    // nums.forEach(num => {
    //     pq.push(num);
    // })

    // let answer = 0;

    // for(let i = 0; i < k; i++){
    //     answer = pq.pop()
    // }

    // return answer

    nums.sort((a,b) => b - a);

    return nums[k-1]
};