function hashFunction (key) {
    let ans = 0; // This variable will be the final hashed value
    let p = 101; // prime number to keep
    let pow = 1; // intially power is p^0
    let C = 32;
    for(let i = 0; i < key.length; i++) {
        // go to each character of given
        let asciiValue = ascii(key, i);
        // ans = ((ans%this.currSize) + ((asciiValue%this.currSize)*(pow%this.currSize))%this.currSize) % this.currSize;

        ans = ( (ans%C)+ ((asciiValue%C)*(pow%C))%C ) % C;
        // for next iteration we will incremement the power
        pow = ((pow%C) * p%C)%C;
    }
    return ans;
}

function ascii(key, index) {
    return key.charCodeAt(index);
}

console.log(hashFunction("banana"));