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

// Runner code
let parent = [0, 1, 2, 3, 4, 5];
let size = [1, 1, 1, 1, 1, 1];

UNION(0, 1, parent, size);
UNION(2, 3, parent, size);
UNION(4, 5, parent, size);

console.log(parent); // Output: [1, 1, 3, 3, 5, 5]
console.log(size); // Output: [1, 2, 1, 2, 1, 2]