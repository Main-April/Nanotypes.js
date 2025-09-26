// Array module : 
// Author : Main-April
// Last update : 24/09/2025
console.log("Loading Nanotypes.js Array module...");

Array.prototype.each = function(c) {
    for (let i = 0; i < this.length; i++) {
        c(i);
    }
};

Array.prototype.sum = function() {
    let n = 0;
    this.each((i) => {
        n += this[i];
    });
    return n;
}

Array.prototype.shuffle = function() {
    for (let i = this.length - 1; i > 0; i--) {
        const r = Math.floor(Math.random() * (i + 1));
        [this[i], this[r]] = [this[r], this[i]];
    }
    return this;
};

Array.prototype.random = function(n) {
    if (!n || n === 1) return this[Math.floor(Math.random() * this.length)];
    let a = new String();
    for (let i = 0; i < n; i++) {
        a += this[Math.floor(Math.random() * this.length)];
    }
    return a;
}

Array.prototype.index = function(n) {
    let r = 0;
    this.each((i) => {
        if (n === this[i]) r = i;
    })
    return r != 0 ? r : false;
}

Object.defineProperty(Array.prototype, "max", {
    get() {
        let m = this[0];
        this.each((i) => { if (this[i] > m) m = this[i]; });
        return m;
    }
});

Object.defineProperty(Array.prototype, "min", {
    get() {
        let m = this[0];
        this.each((i) => { if (this[i] < m) m = this[i]; });
        return m;
    }
});

Object.defineProperty(Array.prototype, "average", {
    get() {
        let n = 0;
        this.each((i) => { n += this[i]; });
        return n / this.length;
    }
});

function range(sa, so, e = 1) {
    let a = new Array();
    for (let i = sa; i < so; i++) {
        a.push(i * e)
    }
    return a;
}

function enumerate(a) {
    let o = new Object();
    a.each((i) => {
        o[i] = a[i];
    });
    return o;
}

function array(...e) {
    return new Array(...e);
}