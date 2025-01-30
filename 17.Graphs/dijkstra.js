class Heap {
    constructor(cmp) {
        this.arr = [];
        this.cmp = cmp;
    }

    upheapify(idx) {
        // idx represents the index to start upheapify from
        while(idx > 0) {
            // till the time idx doesnt reach the root
            let pi = Math.floor((idx-1)/2);
            if(this.cmp(this.arr[pi] , this.arr[idx])) {
                // parent is smaller than current element

                // swap the parent and child
                let temp = this.arr[pi];
                this.arr[pi] = this.arr[idx];
                this.arr[idx] = temp;


                idx = pi;
            } else {
                // everything is good, we have a heap
                break;
            }
        }
    }

    insert(data) {
        // 1. Insert this data in your array
        this.arr.push(data);

        // 2. upheapify
        this.upheapify(this.arr.length - 1);
    }

    downheapify(idx) {
        while(idx < this.arr.length) {
            // 1. Calculate the lc and rc index
            let lc = 2*idx + 1; // possible lc index
            let rc = 2*idx + 2; // possible rc index
            let maxEl = idx; // assume root is the max
            if(lc < this.arr.length && this.cmp(this.arr[maxEl] , this.arr[lc])) {
                // left child exist and is greater also
                maxEl = lc;
            }

            if(rc < this.arr.length && this.cmp(this.arr[maxEl] , this.arr[rc])) {
                // right child exist && is greater also
                maxEl = rc;
            }

            // after the above comparison we klnow the biggest element
            if(idx == maxEl) {
                // root is still the biggest element, dont go further
                break;
            } else {
                // swap the element of root and maxEl
                let temp = this.arr[idx];
                this.arr[idx] = this.arr[maxEl];
                this.arr[maxEl] = temp;

                idx = maxEl;
            }
        }
 


    }

    remove() {
        if(this.arr.length == 0) return;
        // remove the highest priority element

        // 1. swap the root with last element

        let temp = this.arr[0];
        this.arr[0] = this.arr[this.arr.length - 1];
        this.arr[this.arr.length - 1] = temp;

        // 2. Remove the last element
        this.arr.pop();

        // 3. downheapify
        this.downheapify(0);

    }

    display() {
        console.log(this.arr)
    }

    isEmpty() {
        return this.arr.length == 0;
    }

    get() {
        return this.arr[0]; // return the root
    }
}


function dijkstra(n, graph, source) {
    let hp = new Heap((a, b) => { // min heap
        // [node, distance from source]
        return a[1] > b[1] // a< b for max heap, a > b for min heap
    });

    let visited = new Set();
    let via = {};
    let distances = {};
    for(let i = 0; i < n; i++) {
        via[i] = undefined;
        distances[i] = Infinity;
    }

    via[source] = -1;
    distances[source] = 0;

    hp.insert([source, 0]);

    while(!hp.isEmpty()) {
        let topmost = hp.get(); // get the root node
        hp.remove(); // we remove the root node

        const [node, distance] = topmost; // destructuring the node and distance(distance from source to currnode)

        if(visited.has(node)) continue; // if we have already visited this node, then ignore it becuase it is a stale entry

        visited.add(node); // mark the node as visited

        // travel all the neighbours of the current node
        for(const neighbour of graph[node]) {
            const [neighbourNode, neighbourDistance] = neighbour; // destructuring the neighbour node and distance
            if(visited.has(neighbourNode)) continue; // if we have already visited this neighbour, then ignore it
            if(via[neighbourNode] === undefined || distances[neighbourNode] > distance + neighbourDistance) {
                // previous found distance was greater than the current distance
                via[neighbourNode] = node; // update the via array
                distances[neighbourNode] = distance + neighbourDistance; // update the distance array
                hp.insert([neighbourNode, distance + neighbourDistance]); // insert this neighbour in the heap
            }
        }
    }

    return [distances, via];


}

let n = 5;

let graph = [
    [[1, 4], [2, 8]],
    [[0, 4], [2, 2], [3, 5]],
    [[0, 8], [1, 2], [3, 5]],
    [[1, 5], [2, 5], [4, 6]],
    [[3, 6]]
];

const response = dijkstra(n, graph, 0);
console.log("Distances are", response[0]);
console.log("Via array is", response[1]);

/**
 * 
 * [
 *  [[1, wt],[2, wt],3]
 *  [0,2,3]
 *  [3,4]
 * ]
 */