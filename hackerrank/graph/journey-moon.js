/* 
https://www.hackerrank.com/challenges/journey-to-the-moon/problem
*/
function dfs(node, adjList, visited, c) {
    if(!visited[node]){
        c.count = c.count + 1;
        visited[node] = true;
        //console.log(node, visited, c.count);
        let adj = adjList[node];
        for (let i = 0; i < adj.length; i++) {
            if(!visited[adj[i]]){
                dfs(adj[i], adjList, visited, c);
            }
        }
    }
    
}
function journeyToMoon(n, astronaut) {
    // Write your code here
    var map = {}, 
    countries = [], 
    count = 0, visited = {};

    for (let i = 0; i < n; i++) {
        map[i] = []; 
        visited[i] = false;
    }
    for (let i = 0; i < astronaut.length; i++) {
        map[astronaut[i][0]].push(astronaut[i][1]);
        map[astronaut[i][1]].push(astronaut[i][0]);
    }
    
    for(let i in map){
        if(!visited[i]){
            let c = {'count': 0};
            //console.log('starting ', i);
            dfs(i, map, visited, c);
            //console.log('finished', i, 'count ', c.count);
            countries.push(c.count);
        }
    }
    //console.log(map, countries);
    count = 0;
    for (let i = 0; i < countries.length; i++) {
        for (let j = i+1; j < countries.length; j++) {
            count += countries[i] * countries[j];
        }
    }

    //console.log(countries, count);
    return count;
}

journeyToMoon(7, [[0,1],[2,3],[0,4]]);