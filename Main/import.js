import * from "./_.js";
import * from "./plugin.js";

async function call(m) {
  try {
    const o = await import("./${m}.js")
  }
  catch(error){
    console.error("[Minify.js] Can't find module ${m}"); 
  }
}

