const max = (nums) => Math.max(...nums);

function solution(priorities, location) {
    const len = priorities.length;
    const queue = priorities.map((_, i) => i); // index 큐

    let deleted = 0;

    while (priorities.length > 0) {
        const maxPriority = max(priorities);
        const priority = priorities.shift();
        const num = queue.shift();

        if (priority === maxPriority) {
            deleted++;
            if (num === location) break;
        } else {
            priorities.push(priority);
            queue.push(num);
        }
    }

    return deleted;
}
