class Graph {
    constructor(noOfvertices) {
        this.v = noOfvertices;
        this.adjMat = new Array(this.v);
        for(let i = 0; i < this.v; i++) {
            this.adjMat[i] = new Array(this.v).fill(0);
        }
    }

    addEdge(v1, v2, biDir = true) {
        this.adjMat[v1][v2] = 1;
        if(biDir) {
            this.adjMat[v2][v1] = 1;
        }
    }

    
    display() {
        console.log(this.adjMat);
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

