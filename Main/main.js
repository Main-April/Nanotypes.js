// Main File:
// Author : Main-April
// Last update : 26/09/2025
console.log("Loading Nanotypes.js main module...");
// Interacting DOM functions : 

function select(s) {
    let i = document.getElementById(s);
    let c = document.getElementsByClassName(s)
    if (i) return i;
    if (c && c.length > 0) return c;
    return document.querySelector(s)
}

function css(e, s, v = undefined) {
    if (type(e) === "string") e = select(e);
    if (!e) return e.style[s];
    e.style[s] = v;
}

// Global JS functions

function repeat(n, c) {
    if (type(n) != "number") n = n.length
    for (let i = 0; i < n; i++) {
        c(i);
    }
}

function type(e, t) {
    e = Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
    if (!t) return e;
    return e === t.toLowerCase();
}
console.warn("Nanotypes.js main module loaded.");
