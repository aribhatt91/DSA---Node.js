/**
 * https://leetcode.com/problems/flood-fill/
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 * https://www.geeksforgeeks.org/flood-fill-algorithm-implement-fill-paint/
 */
var floodFillUtil = function(image, m, n, x, y, prevCol, newCol) {
    if(x < 0 || x >= m || y < 0 || y >= n){
        return;
    }
    if(image[x][y] !== prevCol){
        return;
    }
    if(image[x][y] === newCol){
        return;
    }
    image[x][y] = newCol;
    floodFillUtil(image, m, n, x+1, y, prevCol, newCol);
    floodFillUtil(image, m, n, x-1, y, prevCol, newCol);
    floodFillUtil(image, m, n, x, y+1, prevCol, newCol);
    floodFillUtil(image, m, n, x, y-1, prevCol, newCol);
}
var floodFill = function(image, sr, sc, newColor) {
    let prevCol = image[sr][sc];
    let m = image.length, n = image[0].length;
    floodFillUtil(image, m, n, sr, sc, prevCol, newColor);
    return image;
};