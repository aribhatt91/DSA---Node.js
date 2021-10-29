/*
https://www.hackerrank.com/challenges/bfsshortreach/problem
Consider an undirected graph where each edge weighs 6 units. Each of the nodes is labeled consecutively from 1 to n.

You will be given a number of queries. For each query, you will be given a list of edges describing an undirected graph. After you create a representation of the graph, you must determine and report the shortest distance to each of the other nodes from a given starting position using the breadth-first search algorithm (BFS). Return an array of distances from the start node in node number order. If a node is unreachable, return
for that node. 
 * Complete the 'bfs' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n number of nodes 
 *  2. INTEGER m number of edges
 *  3. 2D_INTEGER_ARRAY edges
 *  4. INTEGER s starting node 
 */
class Queue {
	constructor(){
		this._que = [];
		for (var i = 0; i < arguments.length; i++) {
			this._que.push(arguments[i]);
		}
	}
	enq(){
		for (var i = 0; i < arguments.length; i++) {
			this._que.push(arguments[i]);
		}
	}
	deq(){
		var len = this._que.length;
		return len <= 0 ? null : this._que.splice(0,1)[0];
	}
	isEmpty(){
		return this._que.length === 0;
	}
}
function bfs(n, m, edges, s) {
    // Write your code here
    let adjList = (new Array(n+1)).fill();
    let dist = (new Array(n+1)).fill(-1), 
    visited = (new Array(n+1)).fill(false);

    for (let i = 0; i < edges.length; i++) {
        let from = edges[i][0], to = edges[i][1];

        if(adjList[from].indexOf(to) === -1){
            adjList[from] = adjList[from].concat([to]);
        }
        if(adjList[to].indexOf(from) === -1){
            adjList[to] = adjList[to].concat([from]);
        }
    }
    dist[s] = 0;

    let q = new Queue();
    q.enq(s);

    while(!q.isEmpty()){
        let node = q.deq(), 
        d = dist[node];
        let adj = adjList[node];

        visited[node] = true;
        for (let i = 0; i < adj.length; i++) {
            if(!visited[adj[i]]){
                q.enq(adj[i]);
                dist[adj[i]] = d+6;
            }
        }
    }
    dist.splice(s,1);
    dist.splice(0,1);
    return dist;
}

const main = () => {
    console.log(bfs(4,2,[[1,2],[1,3]], 1));
};
main();