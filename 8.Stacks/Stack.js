class Stack {
    // private properties
    #arr;

    constructor() {
        this.#arr = [];
    }

    push(element) {
        this.#arr.push(element);
    }

    pop() {
        this.#arr.pop();
    }

    top() {
        return this.#arr[this.#arr.length - 1]; // element present at the last index is the top most element
    }

    isEmpty() {
        return this.#arr.length == 0;
    }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.top()); 
s.pop(); // removes 30
console.log(s.top());
s.pop();
console.log(s.top());