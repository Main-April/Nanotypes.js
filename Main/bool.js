// Create a globalValue
Boolean.prototype.link = function (n) {
  globalThis[n] = this.valueOf();
  return this;
}
// Example of utilisation :
/*
true.link("yes");
if(yes) {
  console.log(true);
}
*/
Object.defineProperty(Boolean.prototype, "toggle", {
    set(){
        this.valueOf() = !this.valueOf();
    }
});
