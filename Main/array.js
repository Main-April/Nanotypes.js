// Setup environment and fct like python.
// Add a shuffle fct
Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i+1));
    [this[i], this[r]] = [this[r], this[i]];
  }
  return this;
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
  for (let i = 0; i < this.length; i++) {
    c(i);
  }
};

Array.prototype.random = function (n) {
  if (!n || n === 1) return this[Math.floor(Math.random()*this.length)];
  let a = "";
   for (let i = 0; i < n; i++) {
    a += this[Math.floor(Math.random()*this.length)];
  }
  return a;
}

Array.prototype.average = function () {
  let n = 0;
  this.each( (i) => {n += this[i] });
  return n/this.length;
}

Array.protoype.index = function (n) {
  let r = 0;
  this.each((i) => {
    if(n===this[i]) r = i;
  })
  return r != 0 ? r : false;
}

