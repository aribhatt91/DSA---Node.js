/* 
https://www.geeksforgeeks.org/find-the-platform-at-which-the-given-train-arrives/

Approach: The given problem can be solved by using the priority queue. Follow the steps below to solve this problem:

Sort the given array arr[] of N trains according to the arrival time of the trains.
Initialize a priority queue, say PQ of pairs {PlatformNumber, time} that implements the min-heap according to the least departure time. Insert the {platform number, time} i.e., {1, 0} in the priority queue.
Initialize a HashMap, say M that stores the platform number on which any train arrives.
Traverse the given array arr[] and perform the following steps:
Pop the top platform of the PQ and store them in free_platform[].
If the arrival time of the current train is at least the departure time of the popped platform, then update the departure time of the popped platform as the (sum of the arrival and the stoppage time + 1) and insert the current status of the platform in PQ and the current platform number of the current train in the HashMap M.
Otherwise, add the new platform entry to the PQ and the current platform number of the current train in the HashMap M.
After completing the above steps, print the platform number associated with the train number F in the HashMap M.

*/
class Train {
    constructor(id, arrival_time, duration){
        this.id = id;
        this.arrival_time = arrival_time;
        this.duration = duration;
    }
}

const main = (trains) => {
    const arr = [];
    trains.forEach(item => {
        arr.push(new Train(item[0], item[1], item[2]));
    });

    arr.sort((a,b) => a.arrival_time === b.arrival_time ? Number(a.id) - Number(b.id) : a.arrival_time - b.arrival_time);

}