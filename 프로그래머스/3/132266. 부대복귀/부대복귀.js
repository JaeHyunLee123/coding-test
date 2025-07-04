function solution(n, roads, sources, destination) {
    const graph = Array.from({ length: n + 1 }, () => []);
    
    // 인접 리스트 생성
    for (const [a, b] of roads) {
        graph[a].push(b);
        graph[b].push(a);
    }

    // 목적지에서 모든 노드까지 최단거리 구함 (BFS)
    const distances = Array(n + 1).fill(-1);
    const queue = [destination];
    distances[destination] = 0;

    while (queue.length > 0) {
        const current = queue.shift();

        for (const neighbor of graph[current]) {
            if (distances[neighbor] === -1) {
                distances[neighbor] = distances[current] + 1;
                queue.push(neighbor);
            }
        }
    }

    // 각 source에 대해 거리 구함
    return sources.map(source => distances[source]);
}
