/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const st1 = [];
    const st2 = [];
    for(let i = 0; i < s.length; i++) {
        if(st1.length > 0 && s[i] == '#') {
            st1.pop();
        }
        else {
            if(s[i] != '#')
            st1.push(s[i]);
        }
    }
    for(let i = 0; i < t.length; i++) {
        if(st2.length > 0 && t[i] == '#') {
            st2.pop();
        }
        else {
            if(t[i] != '#')
            st2.push(t[i]);
        }
    }
    console.log(st1, st2);
    while(st1.length > 0 && st2.length > 0) {
        if(st1[st1.length - 1] != st2[st2.length - 1]) {
            return false;
        }
        st1.pop();
        st2.pop();
    }
    
    return (st1.length == 0) && (st2.length == 0);
    
};