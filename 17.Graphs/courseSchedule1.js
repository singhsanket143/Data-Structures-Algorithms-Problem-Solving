/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

function topoSort(g, n, indegree) {
    
    let qu = [];
    let vis = new Set();
    for(let i = 0; i < n; i++) {
        if(indegree[i] == 0) {
            qu.push(i); // add all those nodes as start whose indegree is 0
            vis.add(i);
        }
    }
    let count = 0;
    while(!(qu.length == 0)) {
        let curr = qu.shift();
        count++;
        for(const neighbour of g[curr]) {
            if(!vis.has(neighbour)) {
                indegree[neighbour]--;
                if(indegree[neighbour] == 0) { // if all the dependency of neihbour is gone
                    qu.push(neighbour);
                    vis.add(neighbour);
                }
            }
        }
    }
    
    return count == n;
    
}

var canFinish = function(numCourses, prerequisites) {
    
    // create the graph
    let g = new Array(numCourses);
    for(let i = 0; i < numCourses; i++) g[i] = new Array();
    
    let indegree = new Array(numCourses).fill(0);
    
    for(let i = 0; i < prerequisites.length; i++) {
        const curr = prerequisites[i];
        const a = curr[0];
        const b = curr[1];
        g[b].push(a); // a is dependent on b : b ---> a
        indegree[a]++; // because now there is an incoming edge edge on a
    }
    
    
    return topoSort(g, numCourses, indegree);
    
};