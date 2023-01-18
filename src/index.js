
module.exports = function towelSort (matrix) {
  let ans = [];


  if (matrix!=undefined) {

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            ans.push(matrix[i].reverse());
        } else {
            ans.push(matrix[i]);
        }
    }

        return ans.flat(); }
        else {
          return []
        }


}
