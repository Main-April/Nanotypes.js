// Array plugin : 
// Author : Main-April
// Last update : 24/09/2025

// String module :
class NString extends String{
    constructor(e){
        super(e);
        this.iterable = true;
    }
    get reverse(){
        return this.split("").reverse().join(" ")
    }
    get isEmpty(){
        return this.trim()/length === 0;
    }
    each(c){
        for(let i=0;i<this.length;i++){
            c(i);
        }
    }
    occurenceOf(s){
        let n = 0;
        this.each((i)=>{ if (this[i]===s) n++;})
        return n;
    }
}

// Boolean module :
class NBoolean extends Boolean {
    constructor(e){
        super(e);
        this.iterable = false;
    }
    assign(...t){
        if (typeof(t) === "string") globalThis[t] = this.valueOf();
        else if (a.iterable) a=t;
        for (let i = 0; i < a.length; i++) {
            globalThis[a[i]] = this.valueOf();
        }
    }
    and(b){
        return this.valueOf() && b;
    }
    or(b){
        return this.valueOf() || b;
    }
    xor(b){
        return this.valueOf() != b;
    }
}

function all(...c) {
    let n = 0;
    for (let i = 0; i < c.length; i++) {
        if (c[i]) n++;
    }
    return n / c.length == 1;
}

function when(c, f) {
    setInterval(() => {
        if (c()) f();
    }, 0);
}

function not(c) {
    return !c;
}
