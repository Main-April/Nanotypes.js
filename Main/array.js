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
  let m = this[0];
  for (let i = 1; i < this.length; i++) {
    if (this[i] > m) m = this[i];
    if(typeof this[i] != "number") throw new TypeError("[Minify.js] Array.max cannot execute other of number")
  }
  return m;
};

Array.prototype.min = function () {
  let m = this[0];
  for (let i = 1; i < this.length; i++) {
    if (this[i] < m) m = this[i];
    if(typeof this[i] != "number") throw new TypeError("[Minify.js] Array.min cannot execute other of number")
  }
  return m;
  };





