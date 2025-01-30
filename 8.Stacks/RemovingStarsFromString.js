/**
 * @param {string} s
 * @return {string}
 */
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
var removeStars = function(s) {
    let st = new Stack();
    let i = 0;
    while(i < s.length) {
        if(s[i] != '*') {
            st.push(s[i]);
        } else if(s[i] == '*' && !st.isEmpty()) {
            st.pop();
        }
        i++;
    }
    let result = "";
    while(!st.isEmpty()) {
        let ch = st.top();
        st.pop();
        result = ch + result;
    }
    return result; 

};