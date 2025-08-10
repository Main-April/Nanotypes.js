// Underscore.js version 0.05

export class $ {
  constructor(e) {
    this.e = e;
  }

  exe(callback) {
    this.e.forEach(e => {
      callback(e);
    });
  }

  css(attr, value) {
    if (!value) {
      if (typeof attr === "object") {
        this.exe((element) => {
          Object.entries(attr).forEach(([item, value]) => {
            element.style[item] = value;
          })
        })
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
    this.exe(element => {
      element.setAttribute(attr, value);
    });
    return this;
  }

  click(callback) {
    this.exe(element => {
      element.addEventListener("click",callback);
    });
    return this;
  }

  toggle(s) {
    if (!s) {
      this.exe((element) => {
        element.style.display = getComputedStyle(element).display == "none" ? "block" : "none";
      });
    } 
    else {
      this.exe((element) => {
        element.style.display = getComputedStyle(element).display == "none" ? s : "none";
      });
    }
    return this;
  }
 replace(e){
  if(!e){
   this.exe((element) => {
    element.remove();
   });
  }
  this.exe((element)=>{
   element.parentNode.replaceChild(element,e);
  });
  return this;
}
    
}

// Setup fonction _
export function _ (_e_) {
  return new $(new _$_.select(_e_));
}
// Setup JS DOM Environment
export class _$_ {
    constructor(e){
    this.e = e;
    }

    select(s) {
    if (document.getElementById(s)) return document.getElementById(s);
    if (document.getElementsByClassName(s).length > 0) return Array.from(document.getElementsByClassName(s));
    return Array.from(document.querySelectorAll(s));
    }
    repeat(n, c) {
    for (let i = 0; i < n; i++) {
      c();
        }
    }
}

// Setup global utilisation
window._ = _;
window._$_ = _$_;
window.$ = $;
