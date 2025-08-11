// Setup environment and fct like python.
// Add a shuffle fct
Array.prototype.shuffle = function () {
  let r;
  for (let i = this.length - 1; i > 0; i--) {
    r = Math.floor(Math.random() * this.length);
    [this[i], this[r]] = [this[r], this[i]];
  }
};
Array.prototype.max = function () {
  let m = 0;
  for(let i = this.length-1; i>0; i--) {
    if (this[i] > m) {
      m = this[i];
    }
  }
  return m;
};
Array.prototype.min = function () {
  let m = Array.max();
  for(let i = this.length-1; i>0; i--) {
    if (this[i] < m) {
      m = this[i];
    }
  }
  return m;
};





