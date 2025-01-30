/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
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
    
    get() {
        return this.arr[0]; // return the root
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
}

class Point {
    constructor(xi, yi) {
        this.x = xi;
        this.y = yi;
        this.dist = Math.sqrt(xi*xi + yi*yi) // store the euclidean distance from the origin
    }
}

var kClosest = function(points, k) {
    const hp = new Heap((pointA, pointB) => {
        return pointA.dist > pointB.dist; //min heap
    });
    for(let i = 0; i < points.length; i++) {
        // Iterate on all the given points
        const p = new Point(points[i][0], points[i][1]); // for the current x,y create a point object
        hp.insert(p); // insert the point in heap
    }
    let result = []; // result array
    while(k > 0) {
        k--;
        let val = [hp.get().x, hp.get().y]; // get the x and y coordinate fromroot of heap
        result.push(val); // store the point in answer array
        hp.remove();//  remove the root, so that 2nd closes element can come on root
    }
    return result;
};