
var FreqStack = function() {
    this.freqMap = {};
    this.maxFreq = 0;
    this.elementMap = {};
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    if(!this.freqMap[val]) {
        // value is not present in the map
        this.freqMap[val] = 1;
    } else {
         // value is present in the map
        this.freqMap[val]+=1;
    }
    
    this.maxFreq = Math.max(this.maxFreq, this.freqMap[val]);
    // add the entry in element map
    const frequency = this.freqMap[val];
    if(!this.elementMap[frequency]) {
        this.elementMap[frequency] = [val];
    } else {
        this.elementMap[frequency].push(val);
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    const arr = this.elementMap[this.maxFreq]
    const result = arr[arr.length - 1];
    this.elementMap[this.maxFreq].pop();
    this.freqMap[result]--;
    if(this.elementMap[this.maxFreq].length == 0) {
        delete this.elementMap[this.maxFreq];
        
        this.maxFreq -= 1;
    }
    return result;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */