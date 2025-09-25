// Main File:
// Author : Main-April
// Last update : 25/09/2025

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

function isin(e, s) {
    if (type(s) === "object" || type(s) === "array") {
        if (s.index(e) != -1) return true
    }
    if (type(s) === "string") {
        if (s.includes(e)) return true
    }
    return false;
}

function type(e, t) {
    e = Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
    if (!t) return e;
    return e === t.toLowerCase();
}

function max(a) {
    let m;
    if (type(a) === "array") {
        m = a[0];
        a.each((i) => { if (a[i] > m) m = a[i]; });
    }
    if (type(a) === "object") {
        m = Object.values(a)[0];
        Object.values(a).forEach((i) => { if (i > m) m = i; });
    }
    return m;
}

function min(a) {
    let m;
    if (type(a) === "array") {
        m = a[0];
        a.each((i) => { if (a[i] < m) m = a[i]; });
    }
    if (type(a) === "object") {
        m = Object.values(a)[0];
        Object.values(a).forEach((i) => { if (i < m) m = i; });
    }
    return m;
}
