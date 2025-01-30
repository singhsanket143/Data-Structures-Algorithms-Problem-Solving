/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

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

function bfs(src, dest, g, visited) {
    if(src == dest) return true;
    const qu = [];
    qu.push(src);
    visited.add(src);
    while(!(qu.length == 0)) {
        const el = qu.shift();
        for(const neighbour of g[el]) {
            if(neighbour == dest) return true;
            if(!visited.has(neighbour)) {
                visited.add(neighbour);
                qu.push(neighbour);
            }
        }
    }
    
    return false;
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
    return bfs(source, destination, g, new Set());


};