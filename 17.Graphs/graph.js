class Graph {
    constructor(noOfVertices) {
        this.v = noOfVertices;
        this.adjList = new Array(this.v);
        for(let i = 0; i < this.v; i++) {
            this.adjList[i] = [];
        }
    }

    addEdge(v1, v2, biDir = true) {
        this.adjList[v1].push(v2);
        if(biDir) {
            this.adjList[v2].push(v1)
        }
    }

    display() {
        console.log(this.adjList);
    }
}

const g = new Graph(7);
g.addEdge(0, 1);
g.addEdge(0, 6);
g.addEdge(6, 5);
g.addEdge(1, 5);
g.addEdge(1, 2);
g.addEdge(2, 4);
g.addEdge(2, 3);
g.addEdge(4, 3);

g.display();

