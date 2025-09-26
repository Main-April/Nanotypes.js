// Math plugin : 
// Author : Main-April
// Last update : 25/09/2025
console.log("Loading Nanotypes.js Math module...");

Number.prototype.around = function(p = 0) {
    return Math.round(this * Math.pow(10, p)) / Math.pow(10, p);
};



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