/**
 * https://practice.geeksforgeeks.org/problems/topological-sort/1#
 * https://www.geeksforgeeks.org/topological-sorting/
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
*/
class Solution 
{
    //Function to return list containing vertices in Topological order.
    topoSortUtil(v, adj, visited, stk)
    {
        // code here
        if(typeof v === 'undefined'){return;}
        visited[v] = true;
        for(let i=0;i<adj[v]; i++){
            if(!visited[i]){
                this.topoSortUtil(visited[i], adj, visited, stk);
            }
        }
        stk.push(v);
    }
    topoSort(V, adj)
    {
        // code here
        let stk = [], visited = {};
        //console.log(V, adj);
        for(let i=V-1;i>=0; i--){
            visited[i] = false;
        }
        for(let i=0;i<V; i++){
            if(!visited[i]){
                this.topoSortUtil(i, adj, visited, stk);
                //stk.push(i);
            }
        }
        stk.reverse();
        console.log(stk);
        return stk;
        //return [1,2,3,0]
    }
}