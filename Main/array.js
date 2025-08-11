// Setup environment and fct like python.
// Add a shuffle fct
Array.prototype.shuffle = function (e) {
  let r;
  for (let i = this.length - 1; i > 0; i--) {
    if(!e) r = Math.floor(Math.random() * this.length);
    else r = Math.floor(Math.random(e) * this.length);
    [this[i], this[r]] = [this[r], this[i]];
  }
};

Array.prototype.max = function () {
  let m = this[0];
  this.each((i) => {
    if (this[i] > m) m = this[i];
    if(typeof this[i] != "number") throw new TypeError("[Minify.js] Array.max cannot execute other of number")
  });
  return m;
};

Array.prototype.min = function () {
  let m = this[0];
  this.each( () => {
    if (this[i] < m) m = this[i];
    if(typeof this[i] != "number") throw new TypeError("[Minify.js] Array.min cannot execute other of number")
  });
  return m;
};

Array.prototype.each = function (c) {
  for (let i = 1; i < this.length; i++) {
    c(i);
  }
};

Array.prototype.random = function (n) {
  if (!n) return this[Math.floor(Math.random()*this.length)];
  let a = [];
  this.each(() => {
    a.push(this[Math.floor(Math.random()*this.length)]);
  });
  return a;
}

Array.prototype.median = function () {
  let n = 0;
  this.each((i) => {
    n += this[i]
  });
  return n/this.length;
}
