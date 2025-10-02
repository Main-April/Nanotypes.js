// Object.js File:
// Author : Main-April
// Last update : 29/09/2025
class NObject extends Object{
    constructor(e){
        super(e);
        this.iterable = true;
        this.keys = [];
        this.values = [];
        this.init()
    }
    init(){
        this.forEach((key,value)=>{
            this.keys.append(key);
            this.values.append(value);
        })
    }
    each(i){
        for(let i = 0;i<this.length;i++){c(i);}
    }
}

function iterate(a,c){
    if(a.iterable) if(type(a)=="array"||type(a)=="string") for(i=0;i<a.length;i++){c(a[i])} 
    else a.forEach((i)=>{c(i)});
    else throw new TypeError("[Nanotypes.js]:object Iterable type is require in iterate function")
}
