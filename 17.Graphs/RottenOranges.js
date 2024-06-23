/**
 * @param {number[][]} grid
 * @return {number}
 */

let neighbours = [[-1, 0], [0, -1], [1, 0], [0, 1]]; 
//.               i-1, j.  i, j-1.   i+1, j  i, j+1

function bfs(grid) {
    let qu = []; // intialised a queue
    let m = grid.length; // rows
    let n = grid[0].length; // cols
    for(let i = 0; i < m; i++) { 
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 2 ) // if the current orange is rotten
                qu.push([ [i, j], 0 ]) // add coordinate of orange to queue with t = 0, add all sources
        }
    }
    
    let result = 0;
    
    while(!(qu.length == 0)) {
        let curr = qu.shift();
        let coords = curr[0]; // coordinates of the current rotten orange
        let tm = curr[1]; // time at which current orange was rotten
        for(let ni = 0; ni < 4; ni++) {
            let nx = coords[0] + neighbours[ni][0];
            let ny = coords[1] + neighbours[ni][1];
            if(nx < 0 || ny < 0 || nx >= m || ny >= n) continue; // outside the grid
            if(grid[nx][ny] == 1) {
                //console.log(nx, ny, grid[nx][ny])
                qu.push([[nx, ny], tm+1]);
                result = Math.max(result, tm+1);
                grid[nx][ny] = 2; // mark as rotten 
            }
        }
    }
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] == 1) return -1;
        }
    }
    return result;
}

var orangesRotting = function(grid) {
    return bfs(grid);
};