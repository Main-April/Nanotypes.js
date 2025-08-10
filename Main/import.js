async function call(m) {
  try {
    const o = await import("./${m}.js")
  }
  catch(error){
    console.error("[Minify.js] Can't find module ${m}"); 
  }
}

async function loadProject() {
    const b = 'https://github.com/Main-April/Nanofy.js';
    const f = ['plugin.js', '_.js'];
    
    for (const file of files) {
        await loadScript(baseUrl + file);
    }
}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}
loadProject();
