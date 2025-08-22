String.prototype.for = function (c) {
  for (let i = 0; i < this.length; i++) {
    c(this[i],i);      
  }
};

String.prototype.occurence = function (o) {
  return this.split(o).length--;
}
