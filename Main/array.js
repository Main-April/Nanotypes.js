// Array module : 
// Author : Main-April
// Last update : 02/10/2025

class NArray extends Array {
    constructor(e){
        super(e);
        this.iterable = true;
    }
    get max(){
        let m = this[0];
        this.each((i) => { if (this[i] > m) m = this[i]; });
        return m;
    }
    get min(){
        let m = this[0];
        this.each((i) => { if (this[i] < m) m = this[i]; });
        return m;
    }
    get average(){
        let n = 0;
        this.each((i) => { n += this[i]; });
        return n / this.length;
    }
    append(...t){
        this.push(t);
    }
    each(c){
        for (let i = 0; i < this.length; i++) {
        c(this[i],i);
        }
    }
    sum(){
        let n=0;
        this.each((i)=>{n+=this[i]})
        return n;
    }
    shuffle(){
        this.each((i)=>{
            const r = Math.floor(Math.random()*(i+1))
            [this[i],this[r]] = [this[r],this[i]];
        });
        return this;
    }
    random(n){
        if(!n || n===1) return this[Math.floor(Math.random*this.length)];
        let a = new NArray();
        a.each(()=>{a.push(this[Math.floor(Math.random()*this.length)])})
        return a;
    }
    index(e){
        let r = 0;
        this.each((i)=>{
            if (e===this[i]) r = i;
            return r;
        })
        return false
    }
}

function range(sa, so, e = 1) {
    let a = new NArray();
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
    return new NArray(...e);
}
