import * from "https://raw.githubusercontent.com/Main-April/Nanofy.js/refs/heads/main/Main/_.js";
import * from "https://raw.githubusercontent.com/Main-April/Nanofy.js/refs/heads/main/Main/plugin.js";

async function call(m) {
  try {
    const o = await import("./${m}.js")
  }
  catch(error){
    console.error("[Minify.js] Can't find module ${m}"); 
  }
}

