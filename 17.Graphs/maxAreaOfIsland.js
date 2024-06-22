/**
 * @param {number[][]} grid
 * @return {number}
 */

let neighbours = [[-1, 0], [0, -1], [1, 0], [0, 1]];

function bfs(i, j, grid) {
    let qu = [];
    qu.push([i, j]); // push the starting point
    // mark this src cell visited
    grid[i][j] = -1;
    let res = 1; // every cc is of size atleast 1
    while(!(qu.length == 0)) {
        let curr = qu.shift(); // qu.pop //[i, j]
        for(let n = 0; n < 4; n++) {
            let newNeighbourX = curr[0] + neighbours[n][0]; // n=0 i-1, n=1 i, n=2 i+1, n=3 i
            let newNeighbourY = curr[1] + neighbours[n][1]; // n=0 j, n-1 j-1, n=2 j, n=3 j+1
            if(newNeighbourX < 0 || newNeighbourY < 0 || newNeighbourX >= grid.length || newNeighbourY >= grid[0].length) {
                // we are out side the grid
                continue;
            }
            if(grid[newNeighbourX][newNeighbourY] === 1) {
                // its a unvisited piece of land
                grid[newNeighbourX][newNeighbourY] = -1;
                qu.push([newNeighbourX, newNeighbourY]);
                res++;
            }
        }
    }
    
    return res;
}

var maxAreaOfIsland = function(grid) {
    let cc = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 1) {
                cc = Math.max(cc, bfs(i, j, grid));
            }
        }
    }
    return cc;
};