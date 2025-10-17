// Main File:
// Author : Main-April
// Last update : 26/09/2025

// Interacting DOM functions : 

// A quick selection of an element
function select(s) {
    let i = document.getElementById(s);
    let c = document.getElementsByClassName(s)
    if (i) return i;
    if (c && c.length > 0) return c;
    return document.querySelector(s)
}

// Record all under-element of an element and declare a var with her
function selectAll(s){
    let e = select(s).querySelectorAll("*");
    let i = 0;
    e.forEach((el)=>{
        i++;
        let en = el.id||el.name||el.type||el.classList[0]||`element${i}`
        try{
            globalThis[en]=el;
        }
        catch(err){
            globalThis["N"+en]=el;
        }
    })
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
