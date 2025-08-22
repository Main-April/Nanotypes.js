// Author : Main-April
// Last update : 16/08/2025

Array.prototype.for = function (c) {
  for (let i = 0; i < this.length; i++) {
    c(i);
  }
};

Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i+1));
    [this[i], this[r]] = [this[r], this[i]];
  }
  return this;
};

Array.prototype.random = function (n) {
  if (!n || n === 1) return this[Math.floor(Math.random()*this.length)];
  let a = "";
   for (let i = 0; i < n; i++) {
    a += this[Math.floor(Math.random()*this.length)];
  }
  return a;
}

Array.prototype.index = function (n) {
  let r = 0;
  this.for((i) => {
    if(n===this[i]) r = i;
  })
  return r != 0 ? r : false;
}

Object.defineProperty(Array.prototype, "max", {
  get() {
  let m = this[0];
  this.for((i) => {
    if(typeof this[i] !== "number") throw new TypeError("[Nanofy.js] Array.max cannot give value of ${typeof this[i]} types, only numbers")
    if (this[i] > m) m = this[i];
  });
  return m;
  }
});

Object.defineProperty(Array.prototype, "min", {
  get() {
  let m = this[0];
  this.for((i) => {
    if(typeof this[i] !== "number") throw new TypeError("[Nanotypes.js] Array.min cannot give value of ${typeof this[i]} types, only numbers")
    if (this[i] < m) m = this[i];
  });
  return m;
  }
});

Object.defineProperty(Array.prototype, "average", {
  get() {
  let n = 0;
  this.for((i) => {
    if(typeof this[i] !== "number") throw new TypeError("[Nanotypes.js] Array.average cannot give average of ${typeof this[i]} types, only numbers")
    n += this[i];
  });
  return n/this.length;
  }
});

function range(s,e) {
  let a = [];
  for (i=s;i<=e;i++) {
    a.push(i);
  }
  return a;
}

function sum(a) {
  let n = 0;
  a.for((v) => {
    if (typeof a[v] !== "number") {
      throw new TypeError(`[Nanotypes.js] The function sum cannot add ${typeof a[v]} type`);
    }
    n += a[v];
  });
  return n;
}

console.warn("[Nanotypes.js] Array.js initialised with success !")
