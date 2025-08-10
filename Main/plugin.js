// Setup environment and fct like python.
// Add a shuffle fct
Array.prototype.shuffle = function () {
  let r;
  for (let i = this.length - 1; i > 0; i--) {
    r = Math.floor(Math.random() * this.length);
    [this[i], this[r]] = [this[r], this[i]];
  }
};

async function call(m) {
  try {
    const o = await import("./${m}.js")
  }
  catch(error){
    console.error("[Minify.js] Can't find module ${m}"); 
  }
}


