/*
https://www.hackerrank.com/challenges/torque-and-development/problem
 * Complete the 'roadsAndLibraries' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER c_lib
 *  3. INTEGER c_road
 *  4. 2D_INTEGER_ARRAY cities
 */
function dfs(node, adjList, visited, vertices){
    if(!visited[node]){
        visited[node] = true;
        vertices.count += 1;
        let adj = adjList[node];
        for (let i = 0; i < adj.length; i++) {
            if(!visited[adj[i]]){
                dfs(adj[i], adjList, visited, vertices);
            }
        }
    }
}
function roadsAndLibraries(n, c_lib, c_road, cities) {
    // Write your code here
    var visited = {}, components = [], adjList = [];

    for (let i = 0; i < n; i++) {
        visited[i] = false;
        adjList[i] = [];
    }

    for (let i = 0; i < cities.length; i++) {
        adjList[cities[i][0]-1].push(cities[i][1]-1);
        adjList[cities[i][1]-1].push(cities[i][0]-1);
    }

    for (let i = 0; i < n; i++) {
        if(!visited[i]){
            var c = {count: 0};
            dfs(i, adjList, visited, c);
            components.push(c.count);
        }
    }

    //console.log(components);
    var c1 = 0, c2 = 0;
    for (let i = 0; i < components.length; i++) {
         c1 += ((components[i]-1)*c_road + c_lib);
         c2 += components[i]*c_lib;
    }
    return c1 < c2 ? c1 : c2;
}