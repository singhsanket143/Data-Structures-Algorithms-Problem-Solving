function UNION(x, y, parent, size) {
    // O(log*n)
    let xRoot = FIND(x, parent);
    let yRoot = FIND(y, parent);

    if (xRoot === yRoot) return; // x and y are already in the same set

    if (size[xRoot] < size[yRoot]) {
        // x is smaller than y
        parent[xRoot] = yRoot;
        size[yRoot] += size[xRoot];
    } else {
        // y is smaller than x
        parent[yRoot] = xRoot;
        size[xRoot] += size[yRoot];
    }
}

function FIND(x, parent) {
    // O(log*n)
    if (parent[x] !== x) {
        // if x is not the parent of itself
        parent[x] = FIND(parent[x], parent); // Step of path compression
    }
    return parent[x]; // return the parent of x
}

function kruskals(edgeList, noOfVertices) {
    // O(ElogE)
    edgeList.sort((e1, e2) => e1[2] - e2[2]); // Sort the edges by weight

    let spanningTreeSum = 0;

    let parent = new Array(noOfVertices).fill(0);
    parent = parent.map((element, index) => index); // Initialize parent array with each vertex as its own parent
    let size = new Array(noOfVertices).fill(1); // Initialize size array with 1

    for (let edge of edgeList) {
        let [u, v, weight] = edge;

        if (FIND(u, parent) !== FIND(v, parent)) {
            // If u and v are not in the same set
            // it means adding this edge will not form a cycle
            UNION(u, v, parent, size);
            // picking the edge
            spanningTreeSum += weight;
        }
        
    }

    return spanningTreeSum;

}

// Runner code
let edgeList = [
    [0, 1, 10],
    [0, 2, 6],
    [0, 3, 5],
    [1, 3, 15],
    [2, 3, 4]
];
let noOfVertices = 4;
console.log(kruskals(edgeList, noOfVertices)); // Output: 19 (10 + 6 + 4