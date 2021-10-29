/* 
Adjacency List method 
{
    node: Set(adjacent_nodes)
}
*/
class Graph {
    constructor(adjList={}){
        this.adjList = adjList || {};
    }
    addNode(node){
        this.adjList[node] = new Set();
    }
    removeNode(node){
        if(this.adjList[node]){
            delete this.adjList[node];
            /* Iterate and remove all instances of the node */
            let keys = Object.keys(this.adjList);
            for (let i = 0; i < keys.length; i++) {
                if(this.adjList[keys[i]].has(node)){
                    //remove
                    this.adjList[keys[i]].delete(node)
                }   
            }
        }
        
    }
    addEdge(from, to){
        if(this.addNode[from]){
            this.addNode[from].add(to);
        }
    }
    removeEdge(from, to){
        if(this.addNode[from]){
            this.addNode[from].delete(to);
        }
    }
    getAdjacentNodes(node) {
        return this.adjList[node];
    }
    print(){
        let keys = Object.keys(this.adjList);
        keys.forEach(item => {
            console.log(item, ' --- > ', Array.from(this.adjList[item]));
        });
    }
}   

export default Graph;

/* 
Topological sorting on directed acyclic graph
It doesnt produce unique results
*/
const topologicalSort = (node, visited, stack, adjList) => {
    if(visited.has(node)){
        stack.push(node);
    }else {
        visited.add(node);
    }
    adjList[node].forEach(item => {
        if(!visited.has(item)) {
            topologicalSort(item, visited, stack, adjList);
        }
    });
}

const hasCycle = (node, adjList, visiting, visited) => {
    if(visited.has(node)){
        return;
    }
    adjList[node].forEach(neighbour => {
        if(visiting.has(neighbour)) {
            return true;
        }
        hasCycle()
    })
}