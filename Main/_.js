// Nanofy.js version 0.10
export class $ {
  constructor(e) {
    this.e = Array.isArray(e) ? e : [e];
  }

  exe(callback) {
    this.e.forEach((e) => {
      callback(e);
    });
  }

  css(attr, value) {
    if (!value) {
      if (typeof attr === "object") {
        this.exe((element) => {
          Object.entries(attr).forEach(([item, value]) => {
            element.style[item] = value;
          });
        });
        return this;
      }
      return this.e[0] ? getComputedStyle(this.e[0])[attr] : undefined;
    }
    this.exe((e) => {
      e.style[attr] = value;
    });
    return this;
  }

  html(attr, value) {
    if (value === undefined) {
      return this.e[0] ? this.e[0][attr] : undefined;
    }
    this.exe((e) => {
      e[attr] = value;
    });
    return this;
  }

  addEvent(event, callback) {
    this.exe((e) => {
      e.addEventListener(event, callback);
    });
    return this;
  }

  remEvent(event, callback) {
    this.exe((e) => {
      e.removeEventListener(event, callback);
    });
    return this;
  }

  attr(attr, value) {
    if (!value) {
      return this.e[0] ? this.e[0].getAttribute(attr) : undefined;
    }
    this.exe((element) => {
      element.setAttribute(attr, value);
    });
    return this;
  }

  click(callback) {
    this.exe((element) => {
      element.addEventListener("click", callback);
    });
    return this;
  }

  toggle(s) {
    if (!s) {
      this.exe((element) => {
        element.style.display =
          getComputedStyle(element).display == "none" ? "block" : "none";
      });
    } else {
      this.exe((element) => {
        element.style.display =
          getComputedStyle(element).display == "none" ? s : "none";
      });
    }
    return this;
  }

  replace(e) {
    if (!e) {
      this.exe((element) => {
        element.remove();
      });
    } else {
      this.exe((element) => {
        element.parentNode.replaceChild(e, element);
      });
    }
    return this;
  }

  await wait(t) {
    return new Promise(resolve => setTimeout(resolve, t));
  }

  hover(i, o) {
  return this.exe(element => {
    element.addEvent("mouseenter", i);
    element.addEvent("mouseleave", o);
    });
  }

}

// Setup JS DOM Environment
export class DOM {
  constructor() {}

  select(s) {
  let i = document.getElementById(s);
  let c = document.getElementsByClassName(s);
  let t = document.querySelectorAll(s);

  if (i || c.length > 0 || t.length > 0) {
    let r = i || c.length > 0 ? Array.from(c) : Array.from(t);
    if (r) return Array.from(i || c.length > 0 ? Array.from(c) : Array.from(t));
  }

  throw new Error("[Nanofy.js] The element doesn't exist.");
}
  
  repeat(n, c) {
    for (let i = 0; i < n; i++) {
      c(i);
    }
  }
  
}

// Setup fonction _ (CORRIGÉE)
export function _(s) {
  return new $(new DOM().select(s));
}
// Setup global utilisation
if (typeof window !== "undefined") {
  window._ = _;
  window.DOM = DOM;
  window.$ = $;
}
