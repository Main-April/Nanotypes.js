class $ {
  constructor(e) {
    this.e = e;
    this.link = {};
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
      element.onclick = callback;
    });
    return this;
  }

  toggle(el) {
    if (!el) {
      this.exe((element) => {
        const currentDisplay = getComputedStyle(element).display;
        element.style.display = currentDisplay === "none" ? "block" : "none";
      });
    } else {
      _(el).exe((element) => {
        const currentDisplay = getComputedStyle(element).display;
        element.style.display = currentDisplay === "none" ? "block" : "none";
      });
    }
    return this;
  }


}

function _(e) {
  if(typeof e = = ‘string’){
    e = Array.from(document.querySelectorAll(e));}
  else {
    e =Array.from(e);
      }
  return new $(e);
  }
