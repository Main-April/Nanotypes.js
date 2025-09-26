// Array plugin : 
// Author : Main-April
// Last update : 26/09/2025
console.log("Loading Nanotypes.js String module...");

// String module :

String.prototype.each = function(c) {
    for (let i = 0; i < this.length; i++) {
        c(i);
    }
};

String.prototype.reverse = function() {
    return this.split(" ").reverse().join(" ");
}

String.prototype.occurenceOf = function(s) {
    let n = 0;
    this.each((i) => { if (this[i] === s) n++; });
    return n;
}

String.prototype.compareTo = function(s) {
    s = String(s).substring(0, this.length);
    let n = 0;
    this.each((i) => { if (this[i] === s[i]) n++; });
    return n / this.length;
}


Object.defineProperty(String.prototype, "isEmpty", {
    get() {
        return this.trim().length === 0;
    }
});

// Boolean module :

Boolean.prototype.assign = function(...t) {
    if (typeof(t) === "string") globalThis[t] = this.valueOf();
    else a = t;
    for (let i = 0; i < a.length; i++) {
        globalThis[a[i]] = this.valueOf();
    }
}
