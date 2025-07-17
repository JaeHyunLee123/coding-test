/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const visited = Array.from({length: grid.length}, () => Array(grid[0].length).fill(false));

    let count = 0;

    const dfs = (curr) => {
        const [y,x] = curr;

        visited[y][x] = true;
        
        const isUpAvailable = y > 0 && !visited[y-1][x] && grid[y-1][x] === "1";
        const isDownAvailable = y < grid.length - 1 && !visited[y+1][x] && grid[y+1][x] === "1";
        const isLeftAvailable = x > 0 && !visited[y][x-1] && grid[y][x-1] === "1";
        const isRightAvailable = x < grid[0].length - 1 && !visited[y][x + 1] && grid[y][x+1] === "1";


        if(isUpAvailable){
            dfs([y-1,x])
        }

        if(isDownAvailable){
            dfs([y+1,x])
        }

        if(isLeftAvailable){
            dfs([y,x-1])
        }

        if(isRightAvailable){
           dfs([y,x+1])
        }
    }

    for(let y = 0; y < grid.length; y++){
        for(let x = 0; x < grid[0].length; x++){
            if(grid[y][x] === "1" && !visited[y][x]){
                count++;
                dfs([y,x])
                //console.log(count)
                //console.log(visited)
            }
        }
    }

    return count;
};