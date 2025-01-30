/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
// O(V+E)
function dfs(src, dest, g, visited) {
    if(src == dest) return true;
    visited.add(src); // add the source node to visited as we have visited it and now will go neighbours
    let ans = false;
    for(const neighbour of g[src]) {
        if(!visited.has(neighbour)) {
            // if we have not already visited the neighbour go
            ans = ans || dfs(neighbour, dest, g, visited);
        }
    }
    return ans;
}

var validPath = function(n, edges, source, destination) {
    // created the graph
    const g = new Array(n);

    for(let i = 0; i < n; i++) {
        g[i] = [];
    }

    // populated the graph
    for(let i = 0; i < edges.length; i++) {
        let u = edges[i][0];
        let v = edges[i][1];
        g[u].push(v);
        g[v].push(u);
    }
    return dfs(source, destination, g, new Set());


};