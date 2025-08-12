// Author : Main-April
// Last update : 12/08/2025
//========================
// ARRAY OBJECT FUNCTIONS
//========================================================
// Equivalent of Array.forEach but we can use the i value.
//========================================================
Array.prototype.each = function (c) {
  for (let i = 0; i < this.length; i++) {
    c(i);
  }
};
//==================
// Shuffle the Array
//==================
Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i+1));
    [this[i], this[r]] = [this[r], this[i]];
  }
  return this;
};
//================================================
// Get a random or list of multiple random values.
//================================================
Array.prototype.random = function (n) {
  if (!n || n === 1) return this[Math.floor(Math.random()*this.length)];
  let a = "";
   for (let i = 0; i < n; i++) {
    a += this[Math.floor(Math.random()*this.length)];
  }
  return a;
}
//==========================================
// Get the position of a value in the array.
//==========================================
Array.prototype.index = function (n) {
  let r = 0;
  this.each((i) => {
    if(n===this[i]) r = i;
  })
  return r != 0 ? r : false;
}
//========================================
// OBJECT PROPERTIES :
//========================================
// Return the max number value of an array.
//========================================
Object.defineProperty(Array.prototype, "max", {
  get() {
  let m = this[0];
  this.each((i) => {
    if(typeof this[i] !== "number") throw new TypeError("[Nanofy.js] Array.max cannot give value of ${typeof this[i]} types, only numbers")
    if (this[i] > m) m = this[i];
  });
  return m;
  }
});
//=========================================
// Return the min number value of an array.
//=========================================
Object.defineProperty(Array.prototype, "min", {
  get() {
  let m = this[0];
  this.each((i) => {
    if(typeof this[i] !== "number") throw new TypeError("[Nanofy.js] Array.min cannot give value of ${typeof this[i]} types, only numbers")
    if (this[i] < m) m = this[i];
  });
  return m;
  }
});
//=============================================
// Return the average number value of an array.
//=============================================
Object.defineProperty(Array.prototype, "average", {
  get() {
  let n = 0;
  this.each((i) => {
    if(typeof this[i] !== "number") throw new TypeError("[Nanofy.js] Array.average cannot give average of ${typeof this[i]} types, only numbers")
    n += this[i];
  });
  return n/this.length;
  }
});
//===================================
// GLOBAL FUNCTION relative to array.
//======================================
// Generate an array between two numbers
//=====================================
function range(s,e) {
  let a = [];
  for (i=s;i<=e;i++) {
    a.push(i);
  }
  return a;
}

function sum(a) {
  let n = 0;
  a.each((v) => {
    if (typeof a[v] !== "number") {
      throw new TypeError(`[Nanofy.js] The function sum cannot add ${typeof a[v]} type`);
    }
    n += a[v];
  });
  return n;
}


