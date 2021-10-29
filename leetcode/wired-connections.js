/**
 * https://leetcode.com/problems/number-of-operations-to-make-network-connected/submissions/
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

 var dfs = function(node, adjList, visited) {
    visited[node] = true;
    let adj = adjList[node] || [];
    
    for(let i=0; i<adj.length; i++){
        if(!visited[adj[i]]){
            dfs(adj[i], adjList, visited);
        }
    }
}
var makeConnected = function(n, connections) {
    let count = 0;
    let visited = (new Array(n)).fill(false);
    if(connections.length < n-1){
        return -1;
    }
    let map = {};
    for(let i=0; i<connections.length; i++){
        if(!map[connections[i][0]]){
            map[connections[i][0]] = [connections[i][1]];
        }else {
            map[connections[i][0]].push(connections[i][1]);
        }
        if(!map[connections[i][1]]){
            map[connections[i][1]] = [connections[i][0]];
        }else {
            map[connections[i][1]].push(connections[i][0]);
        }
    }
    
    for(let i=0; i<n; i++){
        if(!visited[i]){
            dfs(i, map, visited);
            count++;
        }
    }
    return count - 1;
};