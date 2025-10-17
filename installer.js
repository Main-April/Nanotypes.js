const files = [
    "object.js",
    "main.js",
    "array.js",
    "string.js",
];

function install(file) {
    if (file) return importFile(file);
    console.log("Installing Nanotypes.js ...");
    console.log("File to load : " + files.length);
    let i;
    let n = 0;
    for (i in files) {
        importFile(files[i]);
        console.log("Loading file " + (Number(i) + 1) + " / " + files.length + " : " + files[i]);
        n++;
    }
    return n / i === files.length;
}

function importFile(file) {
    fetch("https://raw.githubusercontent.com/Main-April/Nanotypes.js/refs/heads/main/Main/" + file)
        .then(response => response.text())
        .then(data => {
            const blob = new Blob([data], { type: 'text/javascript' });
            const url = URL.createObjectURL(blob);
            const script = document.createElement("script");
            script.src = url;
            document.head.appendChild(script);
            console.warn("[Nanotypes.js].Installer.js : " + file + " loaded with success !");
        });
}

install();
DOMregister();


