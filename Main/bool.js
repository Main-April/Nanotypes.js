
Boolean.prototype.link = function (n) {
  globalThis[n] = this.valueOf();
  return this;
}

Boolean.prototype.when = function (c) {
  if(this.valueOf()){
    c();
  }
  return this;
}

Object.defineProperty(Boolean.prototype, "toggle", {
    set(){
        this.valueOf() = !this.valueOf();
    }
});
