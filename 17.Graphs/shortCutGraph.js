let v = 7;
const g = new Array(v);
for(let i = 0 ; i < v; i++) g[i] = [];
function addEdge(v1, v2, biDir = true) {
    g[v1].push(v2);
    if(biDir) {
        g[v2].push(v1)
    }
}
addEdge(0, 1);
addEdge(0, 6);
addEdge(6, 5);
addEdge(1, 5);
addEdge(1, 2);
addEdge(2, 4);
addEdge(2, 3);
addEdge(4, 3);

console.log(g);

