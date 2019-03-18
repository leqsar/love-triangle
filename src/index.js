/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var a;
  var b;
  var sum = 0;
  for (var i = 0; i < preferences.length; i++) {
      a=preferences[i];
      b=preferences[a-1];
      if (preferences[b-1]==i+1) {
        sum++;
      }
  }
  return Math.floor(sum/3);
};
