/**
 * Finds the shortest reach in an undirected graph using Breadth-First Search (BFS).
 * 
 * @param {number} n - The number of nodes in the graph.
 * @param {number[][]} edges - The edges of the graph, where each edge is represented as a pair of nodes [u, v].
 * @param {number} start - The starting node for the BFS traversal.
 * @returns {number[]} - An array of shortest distances from the start node to all other nodes. 
 *                       The distance to the start node itself is excluded from the result.
 *                       If a node is unreachable, its distance is represented as -1.
 * 
 * @example
 * ```typescript
 * const n = 4;
 * const edges = [[0, 1], [0, 2], [1, 2], [1, 3]];
 * const start = 0;
 * const result = shortestReach(n, edges, start);
 * console.log(result); // Output: [6, 6, 12]
 * ```
 * 
 * @remarks
 * - The graph is represented as an adjacency list using a Map.
 * - The BFS traversal uses a queue to explore nodes level by level.
 * - The distance between directly connected nodes is assumed to be 6 units.
 * - The function modifies the distances array to store the shortest distance from the start node to each node.
 * - The distance to the start node itself is excluded from the final result by using `distances.splice(start, 1)`.
 */
function shortestReach(n: number, edges: number[][], start: number): number[] {
    const graph = new Map(); 
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    for (let edge of edges) {
        graph.get(edge[0]).push(edge[1]);
        graph.get(edge[1]).push(edge[0]);
    }
    const queue = [start];
    const visited = new Set();
    visited.add(start);
    const distances = new Array(n).fill(-1);
    distances[start] = 0;
    while (queue.length) {
        const node = queue.shift();
        for (let neighbor of graph.get(node)) {
            if (!visited.has(neighbor) && node) {
                visited.add(neighbor);
                queue.push(neighbor);
                distances[neighbor] = distances[node] + 6;
            }
        }
    }
    distances.splice(start, 1);
    return distances;
}