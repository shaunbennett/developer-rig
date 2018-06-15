// extension-coordinator v7.7.0
!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e["extension-coordinator"] = {
  })
}(this, function(e) {
  "use strict"; try {
    new MouseEvent("test")
  } catch (e) {
    window.MouseEvent = function(e, t) {
      var n = document.createEvent("MouseEvent"), i = Object.assign({
        bubbles: !1, cancelable: !1, clientX: 0, clientY: 0, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1, button: 0, relatedTarget: null
      }, t || {
      }); return n.initMouseEvent(e, i.bubbles, i.cancelable, window, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.button, i.relatedTarget), n
    }, window.MouseEvent.prototype = Event.prototype
  } var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {
  }; function n(e, t) {
    return e(t = {
      exports: {
      }
    }, t.exports), t.exports
  } n(function(e) {
    !function(t) {
      var n = setTimeout; function i() {
      } function o(e) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new"); if ("function" != typeof e) throw new TypeError("not a function"); this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(e, this)
      } function s(e, t) {
        for (; 3 === e._state;)e = e._value; 0 !== e._state ? (e._handled = !0, o._immediateFn(function() {
          var n = 1 === e._state ? t.onFulfilled : t.onRejected; if (null !== n) {
            var i; try {
              i = n(e._value)
            } catch (e) {
              return void a(t.promise, e)
            } r(t.promise, i)
          } else (1 === e._state ? r : a)(t.promise, e._value)
        })) : e._deferreds.push(t)
      } function r(e, t) {
        try {
          if (t === e) throw new TypeError("A promise cannot be resolved with itself."); if (t && ("object" == typeof t || "function" == typeof t)) {
            var n = t.then; if (t instanceof o) return e._state = 3, e._value = t, void c(e); if ("function" == typeof n) return void u((i = n, s = t, function() {
              i.apply(s, arguments)
            }), e)
          } e._state = 1, e._value = t, c(e)
        } catch (t) {
          a(e, t)
        } var i, s
      } function a(e, t) {
        e._state = 2, e._value = t, c(e)
      } function c(e) {
        2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
          e._handled || o._unhandledRejectionFn(e._value)
        }); for (var t = 0, n = e._deferreds.length; t < n; t++)s(e, e._deferreds[t]); e._deferreds = null
      } function u(e, t) {
        var n = !1; try {
          e(function(e) {
            n || (n = !0, r(t, e))
          }, function(e) {
            n || (n = !0, a(t, e))
          })
        } catch (e) {
          if (n) return; n = !0, a(t, e)
        }
      } o.prototype.catch = function(e) {
        return this.then(null, e)
      }, o.prototype.then = function(e, t) {
        var n = new this.constructor(i); return s(this, new function(e, t, n) {
          this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
        }(e, t, n)), n
      }, o.all = function(e) {
        var t = Array.prototype.slice.call(e); return new o(function(e, n) {
          if (0 === t.length) return e([]); var i = t.length; function o(s, r) {
            try {
              if (r && ("object" == typeof r || "function" == typeof r)) {
                var a = r.then; if ("function" == typeof a) return void a.call(r, function(e) {
                  o(s, e)
                }, n)
              } t[s] = r, 0 == --i && e(t)
            } catch (e) {
              n(e)
            }
          } for (var s = 0; s < t.length; s++)o(s, t[s])
        })
      }, o.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === o ? e : new o(function(t) {
          t(e)
        })
      }, o.reject = function(e) {
        return new o(function(t, n) {
          n(e)
        })
      }, o.race = function(e) {
        return new o(function(t, n) {
          for (var i = 0, o = e.length; i < o; i++)e[i].then(t, n)
        })
      }, o._immediateFn = "function" == typeof setImmediate && function(e) {
        setImmediate(e)
      } || function(e) {
        n(e, 0)
      }, o._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
      }, o._setImmediateFn = function(e) {
        o._immediateFn = e
      }, o._setUnhandledRejectionFn = function(e) {
        o._unhandledRejectionFn = e
      }, e.exports ? e.exports = o : t.Promise || (t.Promise = o)
    }(t)
  }); !function(e) {
    if (!e.fetch) {
      var t = {
        searchParams: "URLSearchParams" in e, iterable: "Symbol" in e && "iterator" in Symbol, blob: "FileReader" in e && "Blob" in e && function() {
          try {
            return new Blob, !0
          } catch (e) {
            return !1
          }
        }(), formData: "FormData" in e, arrayBuffer: "ArrayBuffer" in e
      }; if (t.arrayBuffer) var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], i = function(e) {
        return e && DataView.prototype.isPrototypeOf(e)
      }, o = ArrayBuffer.isView || function(e) {
        return e && n.indexOf(Object.prototype.toString.call(e)) > -1
      }; l.prototype.append = function(e, t) {
        e = a(e), t = c(t); var n = this.map[e]; this.map[e] = n ? n + "," + t : t
      }, l.prototype.delete = function(e) {
        delete this.map[a(e)]
      }, l.prototype.get = function(e) {
        return e = a(e), this.has(e) ? this.map[e] : null
      }, l.prototype.has = function(e) {
        return this.map.hasOwnProperty(a(e))
      }, l.prototype.set = function(e, t) {
        this.map[a(e)] = c(t)
      }, l.prototype.forEach = function(e, t) {
        for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
      }, l.prototype.keys = function() {
        var e = []; return this.forEach(function(t, n) {
          e.push(n)
        }), u(e)
      }, l.prototype.values = function() {
        var e = []; return this.forEach(function(t) {
          e.push(t)
        }), u(e)
      }, l.prototype.entries = function() {
        var e = []; return this.forEach(function(t, n) {
          e.push([n, t])
        }), u(e)
      }, t.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries); var s = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"]; g.prototype.clone = function() {
        return new g(this, {
          body: this._bodyInit
        })
      }, _.call(g.prototype), _.call(b.prototype), b.prototype.clone = function() {
        return new b(this._bodyInit, {
          status: this.status, statusText: this.statusText, headers: new l(this.headers), url: this.url
        })
      }, b.error = function() {
        var e = new b(null, {
          status: 0, statusText: ""
        }); return e.type = "error", e
      }; var r = [301, 302, 303, 307, 308]; b.redirect = function(e, t) {
        if (-1 === r.indexOf(t)) throw new RangeError("Invalid status code"); return new b(null, {
          status: t, headers: {
            location: e
          }
        })
      }, e.Headers = l, e.Request = g, e.Response = b, e.fetch = function(e, n) {
        return new Promise(function(i, o) {
          var s = new g(e, n), r = new XMLHttpRequest; r.onload = function() {
            var e, t, n = {
              status: r.status, statusText: r.statusText, headers: (e = r.getAllResponseHeaders() || "", t = new l, e.split(/\r?\n/).forEach(function(e) {
                var n = e.split(":"), i = n.shift().trim(); if (i) {
                  var o = n.join(":").trim(); t.append(i, o)
                }
              }), t)
            }; n.url = "responseURL" in r ? r.responseURL : n.headers.get("X-Request-URL"); var o = "response" in r ? r.response : r.responseText; i(new b(o, n))
          }, r.onerror = function() {
            o(new TypeError("Network request failed"))
          }, r.ontimeout = function() {
            o(new TypeError("Network request failed"))
          }, r.open(s.method, s.url, !0), "include" === s.credentials && (r.withCredentials = !0), "responseType" in r && t.blob && (r.responseType = "blob"), s.headers.forEach(function(e, t) {
            r.setRequestHeader(t, e)
          }), r.send(void 0 === s._bodyInit ? null : s._bodyInit)
        })
      }, e.fetch.polyfill = !0
    } function a(e) {
      if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name"); return e.toLowerCase()
    } function c(e) {
      return "string" != typeof e && (e = String(e)), e
    } function u(e) {
      var n = {
        next: function() {
          var t = e.shift(); return {
            done: void 0 === t, value: t
          }
        }
      }; return t.iterable && (n[Symbol.iterator] = function() {
        return n
      }), n
    } function l(e) {
      this.map = {
      }, e instanceof l ? e.forEach(function(e, t) {
        this.append(t, e)
      }, this) : Array.isArray(e) ? e.forEach(function(e) {
        this.append(e[0], e[1])
      }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
        this.append(t, e[t])
      }, this)
    } function h(e) {
      if (e.bodyUsed) return Promise.reject(new TypeError("Already read")); e.bodyUsed = !0
    } function d(e) {
      return new Promise(function(t, n) {
        e.onload = function() {
          t(e.result)
        }, e.onerror = function() {
          n(e.error)
        }
      })
    } function p(e) {
      var t = new FileReader, n = d(t); return t.readAsArrayBuffer(e), n
    } function f(e) {
      if (e.slice) return e.slice(0); var t = new Uint8Array(e.byteLength); return t.set(new Uint8Array(e)), t.buffer
    } function _() {
      return this.bodyUsed = !1, this._initBody = function(e) {
        if (this._bodyInit = e, e) if ("string" == typeof e) this._bodyText = e; else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e; else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e; else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString(); else if (t.arrayBuffer && t.blob && i(e)) this._bodyArrayBuffer = f(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]); else {
          if (!t.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !o(e)) throw new Error("unsupported BodyInit type"); this._bodyArrayBuffer = f(e)
        } else this._bodyText = ""; this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
      }, t.blob && (this.blob = function() {
        var e = h(this); if (e) return e; if (this._bodyBlob) return Promise.resolve(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer])); if (this._bodyFormData) throw new Error("could not read FormData body as blob"); return Promise.resolve(new Blob([this._bodyText]))
      }, this.arrayBuffer = function() {
        return this._bodyArrayBuffer ? h(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(p)
      }), this.text = function() {
        var e, t, n, i = h(this); if (i) return i; if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = d(t), t.readAsText(e), n; if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
          for (var t = new Uint8Array(e), n = new Array(t.length), i = 0; i < t.length; i++)n[i] = String.fromCharCode(t[i]); return n.join("")
        }(this._bodyArrayBuffer)); if (this._bodyFormData) throw new Error("could not read FormData body as text"); return Promise.resolve(this._bodyText)
      }, t.formData && (this.formData = function() {
        return this.text().then(y)
      }), this.json = function() {
        return this.text().then(JSON.parse)
      }, this
    } function g(e, t) {
      var n, i, o = (t = t || {
      }).body; if (e instanceof g) {
        if (e.bodyUsed) throw new TypeError("Already read"); this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new l(e.headers)), this.method = e.method, this.mode = e.mode, o || null == e._bodyInit || (o = e._bodyInit, e.bodyUsed = !0)
      } else this.url = String(e); if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new l(t.headers)), this.method = (n = t.method || this.method || "GET", i = n.toUpperCase(), s.indexOf(i) > -1 ? i : n), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests"); this._initBody(o)
    } function y(e) {
      var t = new FormData; return e.trim().split("&").forEach(function(e) {
        if (e) {
          var n = e.split("="), i = n.shift().replace(/\+/g, " "), o = n.join("=").replace(/\+/g, " "); t.append(decodeURIComponent(i), decodeURIComponent(o))
        }
      }), t
    } function b(e, t) {
      t || (t = {
      }), this.type = "default", this.status = "status" in t ? t.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new l(t.headers), this.url = t.url || "", this._initBody(e)
    }
  }("undefined" != typeof self ? self : void 0); var i = n(function(e, t) {
    !function(t) {
      var n = Array.isArray ? Array.isArray : function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      }, i = 10; function o() {
        this._events = {
        }, this._conf && s.call(this, this._conf)
      } function s(e) {
        e ? (this._conf = e, e.delimiter && (this.delimiter = e.delimiter), this._maxListeners = e.maxListeners !== t ? e.maxListeners : i, e.wildcard && (this.wildcard = e.wildcard), e.newListener && (this.newListener = e.newListener), e.verboseMemoryLeak && (this.verboseMemoryLeak = e.verboseMemoryLeak), this.wildcard && (this.listenerTree = {
        })) : this._maxListeners = i
      } function r(e, t) {
        var n = "(node) warning: possible EventEmitter memory leak detected. " + e + " listeners added. Use emitter.setMaxListeners() to increase limit."; if (this.verboseMemoryLeak && (n += " Event name: " + t + "."), "undefined" != typeof process && process.emitWarning) {
          var i = new Error(n); i.name = "MaxListenersExceededWarning", i.emitter = this, i.count = e, process.emitWarning(i)
        } else console.error(n), console.trace && console.trace()
      } function a(e) {
        this._events = {
        }, this.newListener = !1, this.verboseMemoryLeak = !1, s.call(this, e)
      } function c(e, t, n, i) {
        if (!n) return []; var o, s, r, a, u, l, h, d = [], p = t.length, f = t[i], _ = t[i + 1]; if (i === p && n._listeners) {
          if ("function" == typeof n._listeners) return e && e.push(n._listeners), [n]; for (o = 0, s = n._listeners.length; o < s; o++)e && e.push(n._listeners[o]); return [n]
        } if ("*" === f || "**" === f || n[f]) {
          if ("*" === f) {
            for (r in n) "_listeners" !== r && n.hasOwnProperty(r) && (d = d.concat(c(e, t, n[r], i + 1))); return d
          } if ("**" === f) {
            (h = i + 1 === p || i + 2 === p && "*" === _) && n._listeners && (d = d.concat(c(e, t, n, p))); for (r in n) "_listeners" !== r && n.hasOwnProperty(r) && ("*" === r || "**" === r ? (n[r]._listeners && !h && (d = d.concat(c(e, t, n[r], p))), d = d.concat(c(e, t, n[r], i))) : d = r === _ ? d.concat(c(e, t, n[r], i + 2)) : d.concat(c(e, t, n[r], i))); return d
          } d = d.concat(c(e, t, n[f], i + 1))
        } if ((a = n["*"]) && c(e, t, a, i + 1), u = n["**"]) if (i < p) {
          u._listeners && c(e, t, u, p); for (r in u) "_listeners" !== r && u.hasOwnProperty(r) && (r === _ ? c(e, t, u[r], i + 2) : r === f ? c(e, t, u[r], i + 1) : ((l = {
          })[r] = u[r], c(e, t, {
            "**": l
          }, i + 1)))
        } else u._listeners ? c(e, t, u, p) : u["*"] && u["*"]._listeners && c(e, t, u["*"], p); return d
      } a.EventEmitter2 = a, a.prototype.delimiter = ".", a.prototype.setMaxListeners = function(e) {
        e !== t && (this._maxListeners = e, this._conf || (this._conf = {
        }), this._conf.maxListeners = e)
      }, a.prototype.event = "", a.prototype.once = function(e, t) {
        return this._once(e, t, !1)
      }, a.prototype.prependOnceListener = function(e, t) {
        return this._once(e, t, !0)
      }, a.prototype._once = function(e, t, n) {
        return this._many(e, 1, t, n), this
      }, a.prototype.many = function(e, t, n) {
        return this._many(e, t, n, !1)
      }, a.prototype.prependMany = function(e, t, n) {
        return this._many(e, t, n, !0)
      }, a.prototype._many = function(e, t, n, i) {
        var o = this; if ("function" != typeof n) throw new Error("many only accepts instances of Function"); function s() {
          return 0 == --t && o.off(e, s), n.apply(this, arguments)
        } return s._origin = n, this._on(e, s, i), o
      }, a.prototype.emit = function() {
        this._events || o.call(this); var e = arguments[0]; if ("newListener" === e && !this.newListener && !this._events.newListener) return !1; var t, n, i, s, r, a = arguments.length; if (this._all && this._all.length) {
          if (r = this._all.slice(), a > 3) for (t = new Array(a), s = 0; s < a; s++)t[s] = arguments[s]; for (i = 0, n = r.length; i < n; i++)switch (this.event = e, a) {
            case 1: r[i].call(this, e); break; case 2: r[i].call(this, e, arguments[1]); break; case 3: r[i].call(this, e, arguments[1], arguments[2]); break; default: r[i].apply(this, t)
          }
        } if (this.wildcard) {
          r = []; var u = "string" == typeof e ? e.split(this.delimiter) : e.slice(); c.call(this, r, u, this.listenerTree, 0)
        } else {
          if ("function" == typeof (r = this._events[e])) {
            switch (this.event = e, a) {
              case 1: r.call(this); break; case 2: r.call(this, arguments[1]); break; case 3: r.call(this, arguments[1], arguments[2]); break; default: for (t = new Array(a - 1), s = 1; s < a; s++)t[s - 1] = arguments[s]; r.apply(this, t)
            }return !0
          } r && (r = r.slice())
        } if (r && r.length) {
          if (a > 3) for (t = new Array(a - 1), s = 1; s < a; s++)t[s - 1] = arguments[s]; for (i = 0, n = r.length; i < n; i++)switch (this.event = e, a) {
            case 1: r[i].call(this); break; case 2: r[i].call(this, arguments[1]); break; case 3: r[i].call(this, arguments[1], arguments[2]); break; default: r[i].apply(this, t)
          }return !0
        } if (!this._all && "error" === e) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event."); return !!this._all
      }, a.prototype.emitAsync = function() {
        this._events || o.call(this); var e = arguments[0]; if ("newListener" === e && !this.newListener && !this._events.newListener) return Promise.resolve([!1]); var t, n, i, s, r, a = [], u = arguments.length; if (this._all) {
          if (u > 3) for (t = new Array(u), s = 1; s < u; s++)t[s] = arguments[s]; for (i = 0, n = this._all.length; i < n; i++)switch (this.event = e, u) {
            case 1: a.push(this._all[i].call(this, e)); break; case 2: a.push(this._all[i].call(this, e, arguments[1])); break; case 3: a.push(this._all[i].call(this, e, arguments[1], arguments[2])); break; default: a.push(this._all[i].apply(this, t))
          }
        } if (this.wildcard) {
          r = []; var l = "string" == typeof e ? e.split(this.delimiter) : e.slice(); c.call(this, r, l, this.listenerTree, 0)
        } else r = this._events[e]; if ("function" == typeof r) switch (this.event = e, u) {
          case 1: a.push(r.call(this)); break; case 2: a.push(r.call(this, arguments[1])); break; case 3: a.push(r.call(this, arguments[1], arguments[2])); break; default: for (t = new Array(u - 1), s = 1; s < u; s++)t[s - 1] = arguments[s]; a.push(r.apply(this, t))
        } else if (r && r.length) {
          if (r = r.slice(), u > 3) for (t = new Array(u - 1), s = 1; s < u; s++)t[s - 1] = arguments[s]; for (i = 0, n = r.length; i < n; i++)switch (this.event = e, u) {
            case 1: a.push(r[i].call(this)); break; case 2: a.push(r[i].call(this, arguments[1])); break; case 3: a.push(r[i].call(this, arguments[1], arguments[2])); break; default: a.push(r[i].apply(this, t))
          }
        } else if (!this._all && "error" === e) return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event."); return Promise.all(a)
      }, a.prototype.on = function(e, t) {
        return this._on(e, t, !1)
      }, a.prototype.prependListener = function(e, t) {
        return this._on(e, t, !0)
      }, a.prototype.onAny = function(e) {
        return this._onAny(e, !1)
      }, a.prototype.prependAny = function(e) {
        return this._onAny(e, !0)
      }, a.prototype.addListener = a.prototype.on, a.prototype._onAny = function(e, t) {
        if ("function" != typeof e) throw new Error("onAny only accepts instances of Function"); return this._all || (this._all = []), t ? this._all.unshift(e) : this._all.push(e), this
      }, a.prototype._on = function(e, n, i) {
        if ("function" == typeof e) return this._onAny(e, n), this; if ("function" != typeof n) throw new Error("on only accepts instances of Function"); return this._events || o.call(this), this.emit("newListener", e, n), this.wildcard ? (function(e, n) {
          for (var i = 0, o = (e = "string" == typeof e ? e.split(this.delimiter) : e.slice()).length; i + 1 < o; i++)if ("**" === e[i] && "**" === e[i + 1]) return; for (var s = this.listenerTree, a = e.shift(); a !== t;) {
            if (s[a] || (s[a] = {
            }), s = s[a], 0 === e.length) return s._listeners ? ("function" == typeof s._listeners && (s._listeners = [s._listeners]), s._listeners.push(n), !s._listeners.warned && this._maxListeners > 0 && s._listeners.length > this._maxListeners && (s._listeners.warned = !0, r.call(this, s._listeners.length, a))) : s._listeners = n, !0; a = e.shift()
          } return !0
        }.call(this, e, n), this) : (this._events[e] ? ("function" == typeof this._events[e] && (this._events[e] = [this._events[e]]), i ? this._events[e].unshift(n) : this._events[e].push(n), !this._events[e].warned && this._maxListeners > 0 && this._events[e].length > this._maxListeners && (this._events[e].warned = !0, r.call(this, this._events[e].length, e))) : this._events[e] = n, this)
      }, a.prototype.off = function(e, i) {
        if ("function" != typeof i) throw new Error("removeListener only takes instances of Function"); var o, s = []; if (this.wildcard) {
          var r = "string" == typeof e ? e.split(this.delimiter) : e.slice(); s = c.call(this, null, r, this.listenerTree, 0)
        } else {
          if (!this._events[e]) return this; o = this._events[e], s.push({
            _listeners: o
          })
        } for (var a = 0; a < s.length; a++) {
          var u = s[a]; if (o = u._listeners, n(o)) {
            for (var l = -1, h = 0, d = o.length; h < d; h++)if (o[h] === i || o[h].listener && o[h].listener === i || o[h]._origin && o[h]._origin === i) {
              l = h; break
            } if (l < 0) continue; return this.wildcard ? u._listeners.splice(l, 1) : this._events[e].splice(l, 1), 0 === o.length && (this.wildcard ? delete u._listeners : delete this._events[e]), this.emit("removeListener", e, i), this
          } (o === i || o.listener && o.listener === i || o._origin && o._origin === i) && (this.wildcard ? delete u._listeners : delete this._events[e], this.emit("removeListener", e, i))
        } return function e(n) {
          if (n !== t) {
            var i = Object.keys(n); for (var o in i) {
              var s = i[o], r = n[s]; r instanceof Function || "object" != typeof r || null === r || (Object.keys(r).length > 0 && e(n[s]), 0 === Object.keys(r).length && delete n[s])
            }
          }
        }(this.listenerTree), this
      }, a.prototype.offAny = function(e) {
        var t, n = 0, i = 0; if (e && this._all && this._all.length > 0) {
          for (n = 0, i = (t = this._all).length; n < i; n++)if (e === t[n]) return t.splice(n, 1), this.emit("removeListenerAny", e), this
        } else {
          for (n = 0, i = (t = this._all).length; n < i; n++)this.emit("removeListenerAny", t[n]); this._all = []
        } return this
      }, a.prototype.removeListener = a.prototype.off, a.prototype.removeAllListeners = function(e) {
        if (0 === arguments.length) return !this._events || o.call(this), this; if (this.wildcard) for (var t = "string" == typeof e ? e.split(this.delimiter) : e.slice(), n = c.call(this, null, t, this.listenerTree, 0), i = 0; i < n.length; i++) {
          n[i]._listeners = null
        } else this._events && (this._events[e] = null); return this
      }, a.prototype.listeners = function(e) {
        if (this.wildcard) {
          var t = [], i = "string" == typeof e ? e.split(this.delimiter) : e.slice(); return c.call(this, t, i, this.listenerTree, 0), t
        } return this._events || o.call(this), this._events[e] || (this._events[e] = []), n(this._events[e]) || (this._events[e] = [this._events[e]]), this._events[e]
      }, a.prototype.eventNames = function() {
        return Object.keys(this._events)
      }, a.prototype.listenerCount = function(e) {
        return this.listeners(e).length
      }, a.prototype.listenersAny = function() {
        return this._all ? this._all : []
      }, "function" == typeof t && t.amd ? t(function() {
        return a
      }) : e.exports = a
    }()
  }).EventEmitter2, o = function(e) {
    var t = document.createElement("a"); return t.href = e, {
      host: t.host
    }
  }; var s = function(e) {
    return e ? e.split(".").pop() || "" : ""
  }, r = {
    getWindowInnerHeight: function() {
      return window.innerHeight
    }, getElementBoundingClientRect: function(e) {
      return e.getBoundingClientRect()
    }
  }, a = function(e, t) {
    var n = !1; return function() {
      for (var i = [], o = 0; o < arguments.length; o++)i[o] = arguments[o]; n || (n = !0, setTimeout(function() {
        n = !1
      }, t), e.apply(null, i))
    }
  }, c = .9, u = function() {
    function e(e) {
      this.token = e; var t = Date.now(), n = t, i = 1e3 * this.payload.exp + M.clockSkew; this.refreshAt = t + (i - n) * c
    } return Object.defineProperty(e.prototype, "payload", {
      get: function() {
        var e = this.token.split(".")[1]; return JSON.parse(atob(e))
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "expiresIn", {
      get: function() {
        return 1e3 * this.payload.exp - Date.now()
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "isLinked", {
      get: function() {
        return void 0 !== this.payload.user_id
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "isNearExpiration", {
      get: function() {
        return this.expiresIn <= 6e4
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "refreshAfter", {
      get: function() {
        return this.refreshAt - Date.now()
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "shouldRefresh", {
      get: function() {
        return this.refreshAfter <= 0
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "isUserLoggedIn", {
      get: function() {
        return "U" === this.payload.opaque_user_id.charAt(0)
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "isBroadcaster", {
      get: function() {
        return "broadcaster" === this.payload.role
      }, enumerable: !0, configurable: !0
    }), e
  }(), l = Object.assign || function(e) {
    for (var t, n = 1, i = arguments.length; n < i; n++) {
      t = arguments[n]; for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
    } return e
  }, h = new (function() {
    function e() {
      var e = this; this.apiUrl = "https://api.twitch.tv", this.clientId = "b31o4btkqth5bzbvr9ub2ovr79umhh", this.defaultHeaders = {
        "Content-Type": "application/json", "Client-ID": this.clientId
      }, this.setApiOptions = function(t) {
        e.apiUrl = t.apiUrl ? t.apiUrl : e.apiUrl, e.authToken = t.authToken ? t.authToken : void 0
      }
    } return e.prototype.authRequest = function(e) {
      return this.authToken && e.headers.append("Authorization", "OAuth " + this.authToken), this.doRequest(e)
    }, e.prototype.doRequest = function(e) {
      return fetch(e).then(this.checkError).then(function(e) {
        return e.json()
      })
    }, e.prototype.newRequest = function(e, t) {
      t.headers = new Headers(l({
      }, this.defaultHeaders, t.headers)); var n = t.apiUrl ? t.apiUrl : this.apiUrl; return new Request("" + n + e, t)
    }, e.prototype.checkError = function(e) {
      if (e.status >= 200 && e.status < 300) return e; var t = new Error(e.statusText); throw t.response = e, t
    }, e
  }()); var d = function(e, t, n) {
    var i, o = e instanceof Error ? e : new Error(e); if ("object" == typeof t ? n = t : null != t && (o.code = t), n) for (i in n) o[i] = n[i]; return o
  }; function p(e, t) {
    "boolean" == typeof t && (t = {
      forever: t
    }), this._timeouts = e, this._options = t || {
    }, this._fn = null, this._errors = [], this._attempts = 1, this._operationTimeout = null, this._operationTimeoutCb = null, this._timeout = null, this._options.forever && (this._cachedTimeouts = this._timeouts.slice(0))
  } var f = p; p.prototype.stop = function() {
    this._timeout && clearTimeout(this._timeout), this._timeouts = [], this._cachedTimeouts = null
  }, p.prototype.retry = function(e) {
    if (this._timeout && clearTimeout(this._timeout), !e) return !1; this._errors.push(e); var t = this._timeouts.shift(); if (void 0 === t) {
      if (!this._cachedTimeouts) return !1; this._errors.splice(this._errors.length - 1, this._errors.length), this._timeouts = this._cachedTimeouts.slice(0), t = this._timeouts.shift()
    } var n = this, i = setTimeout(function() {
      n._attempts++ , n._operationTimeoutCb && (n._timeout = setTimeout(function() {
        n._operationTimeoutCb(n._attempts)
      }, n._operationTimeout), this._options.unref && n._timeout.unref()), n._fn(n._attempts)
    }, t); return this._options.unref && i.unref(), !0
  }, p.prototype.attempt = function(e, t) {
    this._fn = e, t && (t.timeout && (this._operationTimeout = t.timeout), t.cb && (this._operationTimeoutCb = t.cb)); var n = this; this._operationTimeoutCb && (this._timeout = setTimeout(function() {
      n._operationTimeoutCb()
    }, n._operationTimeout)), this._fn(this._attempts)
  }, p.prototype.try = function(e) {
    console.log("Using RetryOperation.try() is deprecated"), this.attempt(e)
  }, p.prototype.start = function(e) {
    console.log("Using RetryOperation.start() is deprecated"), this.attempt(e)
  }, p.prototype.start = p.prototype.try, p.prototype.errors = function() {
    return this._errors
  }, p.prototype.attempts = function() {
    return this._attempts
  }, p.prototype.mainError = function() {
    if (0 === this._errors.length) return null; for (var e = {
    }, t = null, n = 0, i = 0; i < this._errors.length; i++) {
      var o = this._errors[i], s = o.message, r = (e[s] || 0) + 1; e[s] = r, r >= n && (t = o, n = r)
    } return t
  }; var _ = n(function(e, t) {
    t.operation = function(e) {
      var n = t.timeouts(e); return new f(n, {
        forever: e && e.forever, unref: e && e.unref
      })
    }, t.timeouts = function(e) {
      if (e instanceof Array) return [].concat(e); var t = {
        retries: 10, factor: 2, minTimeout: 1e3, maxTimeout: 1 / 0, randomize: !1
      }; for (var n in e) t[n] = e[n]; if (t.minTimeout > t.maxTimeout) throw new Error("minTimeout is greater than maxTimeout"); for (var i = [], o = 0; o < t.retries; o++)i.push(this.createTimeout(o, t)); return e && e.forever && !i.length && i.push(this.createTimeout(o, t)), i.sort(function(e, t) {
        return e - t
      }), i
    }, t.createTimeout = function(e, t) {
      var n = t.randomize ? Math.random() + 1 : 1, i = Math.round(n * t.minTimeout * Math.pow(t.factor, e)); return i = Math.min(i, t.maxTimeout)
    }, t.wrap = function(e, n, i) {
      if (n instanceof Array && (i = n, n = null), !i) {
        i = []; for (var o in e) "function" == typeof e[o] && i.push(o)
      } for (var s = 0; s < i.length; s++) {
        var r = i[s], a = e[r]; e[r] = function() {
          var i = t.operation(n), o = Array.prototype.slice.call(arguments), s = o.pop(); o.push(function(e) {
            i.retry(e) || (e && (arguments[0] = i.mainError()), s.apply(this, arguments))
          }), i.attempt(function() {
            a.apply(e, o)
          })
        }, e[r].options = n
      }
    }
  }), g = Object.prototype.hasOwnProperty; function y(e) {
    return e && "EPROMISERETRY" === e.code && g.call(e, "retried")
  } var b = function(e, t) {
    var n, i; return "object" == typeof e && "function" == typeof t && (n = t, t = e, e = n), i = _.operation(t), new Promise(function(t, n) {
      i.attempt(function(o) {
        Promise.resolve().then(function() {
          return e(function(e) {
            throw y(e) && (e = e.retried), d("Retrying", "EPROMISERETRY", {
              retried: e
            })
          }, o)
        }).then(t, function(e) {
          y(e) && (e = e.retried, i.retry(e || new Error)) || n(e)
        })
      })
    })
  }; function v() {
    return Object.create(null)
  } var m = function() {
    function e() {
      this.dict = v()
    } return e.prototype.append = function(e, t) {
      var n, i, o; n = this.dict, o = t, (i = e) in n ? n[i].push("" + o) : n[i] = ["" + o]
    }, e.prototype.toString = function() {
      var e = [], t = this.dict; for (var n in t) for (var i = x(n), o = 0, s = t[n]; o < s.length; o++)e.push(i + "=" + x(s[o])); return e.join("&")
    }, e
  }(); var w = {
    "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0"
  }; function x(e) {
    return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g, function(e) {
      return w[e]
    })
  } var k, E, T, P, S, C, O = function(e) {
    return b(function(t) {
      return h.authRequest(e).catch(function(e) {
        if (e.response && e.response.status) {
          if (!(e.response.status >= 500 || 429 === e.response.status)) throw e; t()
        } else t()
      })
    }, {
        factor: 2, minTimeout: 1e3, randomize: !0, retries: 16
      })
  }, I = function(e) {
    var t = h.newRequest("/v5/channels/" + e + "/extensions", {
      method: "GET"
    }); return O(t)
  }, A = function(e, t, n) {
    var i = h.newRequest("/v5/extensions/" + e + "/auth/link_user", {
      body: JSON.stringify({
        show_user: n, token: t
      }), method: "POST"
    }); return O(i)
  }, R = function(e, t) {
    var n = t.payload.channel_id, i = h.newRequest("/v5/extensions/" + e + "/auth/refresh/" + n, {
      body: JSON.stringify({
        token: t.token
      }), method: "POST"
    }); return O(i)
  }, M = new (function() {
    function e() {
      var e = this; this.clockSkew = 0, this.tokens = {
      }, this.timers = {
      }, this.tokenEmitter = new i, this.clearTokenManager = function() {
        e.clockSkew = 0, e.tokenEmitter.removeAllListeners(); for (var t in e.tokens) e.tokens[t] && (delete e.tokens[t], e.timers[t] && (clearTimeout(e.timers[t]), delete e.timers[t]))
      }, this.getToken = function(t) {
        return e.tokens[t]
      }, this.registerToken = function(t, n) {
        var i = new u(n), o = e.tokens[t] || i; e.tokens[t] = new u(n), e.tokenEmitter.emit(t, i, o), e.updateRefreshTimer(t)
      }, this.updateRefreshTimer = function(t) {
        var n = e.getToken(t), i = e.tokenEmitter.listeners(t).length > 0, o = void 0 !== e.timers[t]; i && !o ? e.timers[t] = setTimeout(function() {
          delete e.timers[t], e.refreshToken(t)
        }, n.refreshAfter) : !i && o && (clearTimeout(e.timers[t]), delete e.timers[t])
      }, this.refreshToken = function(t) {
        var n = e.getToken(t); R(t, n).catch(function() {
          return e.getTokenFromExtensions(t, n)
        }).then(function(n) {
          var i = n.token; i && e.registerToken(t, i)
        })
      }, this.getTokenFromExtensions = function(e, t) {
        return I(t.payload.channel_id).then(function(t) {
          return {
            token: t.tokens.reduce(function(t, n) {
              var i = n.extension_id, o = n.token; return i === e ? o : t
            }, "")
          }
        })
      }
    } return e.prototype.setClockSkew = function(e) {
      var t = new Date(e).getTime(); this.clockSkew = Date.now() - t
    }, e.prototype.subscribe = function(e, t) {
      this.tokenEmitter.on(e, t), this.getToken(e) && this.updateRefreshTimer(e)
    }, e.prototype.unsubscribe = function(e, t) {
      this.tokenEmitter.off(e, t), this.getToken(e) && this.updateRefreshTimer(e)
    }, e
  }()); (k = e.ExtensionActivationStatus || (e.ExtensionActivationStatus = {
  })).Active = "active", k.Inactive = "inactive", (E = e.ExtensionAnchor || (e.ExtensionAnchor = {
  })).Hidden = "hidden", E.Panel = "panel", E.Overlay = "video_overlay", E.Component = "component", (T = e.ExtensionMode || (e.ExtensionMode = {
  })).Config = "config", T.Dashboard = "dashboard", T.Viewer = "viewer", (P = e.ExtensionPlatform || (e.ExtensionPlatform = {
  })).Mobile = "mobile", P.Web = "web", (S = e.ExtensionState || (e.ExtensionState = {
  })).Testing = "Testing", S.HostedTest = "Assets Uploaded", S.Approved = "Approved", S.Released = "Released", S.ReadyForReview = "Ready For Review", S.InReview = "In Review", S.PendingAction = "Pending Action", S.Uploading = "Uploading", (C = e.ExternalExtensionState || (e.ExternalExtensionState = {
  })).Testing = "testing", C.HostedTest = "hosted_test", C.Approved = "approved", C.Released = "released", C.ReadyForReview = "ready_for_review", C.InReview = "in_review", C.PendingAction = "pending_action", C.Uploading = "uploading"; var U, L = ((j = {
  })[e.ExtensionState.Testing] = e.ExternalExtensionState.Testing, j[e.ExtensionState.HostedTest] = e.ExternalExtensionState.HostedTest, j[e.ExtensionState.Approved] = e.ExternalExtensionState.Approved, j[e.ExtensionState.Released] = e.ExternalExtensionState.Released, j[e.ExtensionState.ReadyForReview] = e.ExternalExtensionState.ReadyForReview, j[e.ExtensionState.InReview] = e.ExternalExtensionState.InReview, j[e.ExtensionState.PendingAction] = e.ExternalExtensionState.PendingAction, j[e.ExtensionState.Uploading] = e.ExternalExtensionState.Uploading, j); (U = e.ExtensionAction || (e.ExtensionAction = {
  })).TwitchExtAuth = "twitch-ext-auth", U.TwitchExtBootstrap = "twitch-ext-bootstrap", U.TwitchExtContext = "twitch-ext-context", U.TwitchExtError = "twitch-ext-error", U.TwitchExtLoaded = "twitch-ext-loaded", U.TwitchExtNetworkTiming = "twitch-ext-network-timing", U.TwitchExtReload = "twitch-ext-reload", U.TwitchExtUserAction = "twitch-ext-user-action", U.TwitchExtConfirmationRequest = "twitch-ext-confirmation-request", U.TwitchExtBeginPurchase = "twitch-ext-begin-purchase", U.TwitchExtReloadEntitlements = "twitch-ext-reload-entitlements", U.TwitchExtProductPrices = "twitch-ext-product-prices", U.TwitchExtVisibilityChanged = "twitch-ext-visibility-changed", U.TwitchExtBitsProducts = "twitch-ext-bits-products", U.TwitchExtUseBits = "twitch-ext-use-bits", U.TwitchExtBitsTransactionComplete = "twitch-ext-bits-transaction-complete", U.TwitchExtBitsOnHover = "twitch-ext-bits-on-hover", U.TwitchExtPubSubReceived = "twitch-ext-pubsub-received", U.TwitchExtPositionChanged = "twitch-ext-position-changed"; var j, B, q, F = 1024; (B = e.SupervisorAction || (e.SupervisorAction = {
  })).SupervisorReady = "supervisor-ready", B.SupervisorInit = "supervisor-init", (q = e.FunctionAction || (e.FunctionAction = {
  })).LoginRequest = "twitch-ext-login-request", q.FollowAction = "twitch-ext-follow-action", q.FollowComplete = "twitch-ext-follow-complete", q.FollowStatusRequest = "twitch-ext-follow-status", q.FollowStatusResponse = "twitch-ext-follow-status-response", q.IdShareRequest = "twitch-ext-id-share-request", q.UseBitsPromptRequired = "twitch-ext-use-bits-prompt-required", q.UseBitsComplete = "twitch-ext-use-bits-complete"; var N, D; (N = e.ExtensionFrameEvents || (e.ExtensionFrameEvents = {
  })).ExtensionFrameLoaded = "extensionFrameLoaded", N.IdentityLinked = "identityLinked", N.RequestModal = "requestModal", N.ShowBitsBalance = "showBitsBalance", N.ShowUseBitsSuccess = "showUseBitsSuccess", N.UseBitsError = "useBitsError", (D = e.PlaybackMode || (e.PlaybackMode = {
  })).Video = "video", D.Audio = "audio", D.Remote = "remote", D.ChatOnly = "chat-only"; var V, W = [e.SupervisorAction.SupervisorReady, e.ExtensionAction.TwitchExtLoaded, e.ExtensionAction.TwitchExtUserAction, e.ExtensionAction.TwitchExtNetworkTiming, e.ExtensionAction.TwitchExtBeginPurchase, e.ExtensionAction.TwitchExtBitsOnHover, e.ExtensionAction.TwitchExtUseBits, e.ExtensionAction.TwitchExtPubSubReceived, e.FunctionAction.FollowAction, e.FunctionAction.FollowStatusRequest, e.FunctionAction.IdShareRequest]; (V = e.ExtensionViewType || (e.ExtensionViewType = {
  })).Component = "component", V.Config = "config", V.Hidden = "hidden", V.LiveConfig = "liveConfig", V.Mobile = "mobile", V.Panel = "panel", V.VideoOverlay = "videoOverlay"; var H = function() {
    function t(e) {
      this.extension = e
    } return Object.defineProperty(t.prototype, "clientId", {
      get: function() {
        return this.extension.clientId
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "bitsEnabled", {
      get: function() {
        return this.extension.bitsEnabled
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "description", {
      get: function() {
        return this.extension.description
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "id", {
      get: function() {
        return this.extension.id
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "name", {
      get: function() {
        return this.extension.name
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "requestIdentityLink", {
      get: function() {
        return this.extension.requestIdentityLink
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "sku", {
      get: function() {
        return this.extension.sku
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "summary", {
      get: function() {
        return this.extension.summary
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "token", {
      get: function() {
        return this.extension.token
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "version", {
      get: function() {
        return this.extension.version
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "views", {
      get: function() {
        return this.extension.views
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "vendorCode", {
      get: function() {
        return this.extension.vendorCode
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "state", {
      get: function() {
        return this.extension.state
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "whitelistedConfigUrls", {
      get: function() {
        return this.extension.whitelistedConfigUrls
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "whitelistedPanelUrls", {
      get: function() {
        return this.extension.whitelistedPanelUrls
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "asObject", {
      get: function() {
        return this.extension
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "panelHeight", {
      get: function() {
        return this.extension.views.panel && this.extension.views.panel.height
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "isMonetized", {
      get: function() {
        return !(!this.extension.sku || !this.extension.vendorCode)
      }, enumerable: !0, configurable: !0
    }), t.prototype.getViewerUrlForContext = function(t, n, i) {
      var o = ""; switch (t) {
        case e.ExtensionPlatform.Web: o = this.getViewerUrlForWeb(n, i); break; case e.ExtensionPlatform.Mobile: o = this.getViewerUrlForMobile(n)
      }return o || ""
    }, t.prototype.getViewerUrlForWeb = function(t, n) {
      var i = this.extension.views; switch (t) {
        case e.ExtensionMode.Config: return i.config && i.config.viewerUrl; case e.ExtensionMode.Dashboard: return i.liveConfig && i.liveConfig.viewerUrl; case e.ExtensionMode.Viewer: return this.getViewerUrlForAnchor(n)
      }
    }, t.prototype.getViewerUrlForMobile = function(e) {
      return this.extension.views.mobile && this.extension.views.mobile.viewerUrl
    }, t.prototype.getViewerUrlForAnchor = function(t) {
      var n = this.extension.views; switch (t) {
        case e.ExtensionAnchor.Component: return n.component.viewerUrl; case e.ExtensionAnchor.Hidden: return n.hidden.viewerUrl; case e.ExtensionAnchor.Overlay: return n.videoOverlay.viewerUrl; case e.ExtensionAnchor.Panel: return n.panel.viewerUrl
      }
    }, t
  }(), z = new (function() {
    function e() {
      this.SUPERVISOR_LOCATION = {
        production: "https://localhost.rig.twitch.tv:3000", staging: "https://supervisor.ext-assets.internal.justin.tv"
      }, this.env = "production"
    } return Object.defineProperty(e.prototype, "environment", {
      get: function() {
        return this.env
      }, set: function(e) {
        this.env = e
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "supervisorOrigin", {
      get: function() {
        return this.SUPERVISOR_LOCATION[this.env] || this.SUPERVISOR_LOCATION.production
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "supervisorURL", {
      get: function() {
        return "https://localhost.rig.twitch.tv:3000/supervisor.html"
      }, enumerable: !0, configurable: !0
    }), e
  }()), G = function(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }, J = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), K = function(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e, enumerable: !1, writable: !0, configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }, X = function(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t
  }, Y = function() {
    function e() {
      G(this, e)
    } return J(e, [{
      key: "on", value: function(e, t, n) {
        return this._events = this._events || {
        }, this._events[e] = this._events[e] || [], this._events[e].push(t, n), this
      }
    }, {
      key: "off", value: function(e, t) {
        if (this._events) for (var n = this._events[e] || [], i = this._events[e] = [], o = 0; o < n.length; o += 2)n[o] !== t && (i.push(n[o]), i.push(n[o + 1])); return this
      }
    }, {
      key: "_trigger", value: function(e) {
        if (this._events) for (var t = this._events[e] || [], n = 1; n < t.length; n += 2)t[n - 1].apply(t[n], Array.prototype.slice.call(arguments, 1)); return this
      }
    }, {
      key: "count", value: function(e) {
        return this._events ? (this._events[e] || []).length / 2 : 0
      }
    }]), e
  }(), Q = {
  }; Q.randomInt = function(e) {
    return Math.floor(Math.random() * e)
  }, Q.time = {
    seconds: function(e) {
      return 1e3 * e
    }, now: function() {
      return (new Date).getTime()
    }
  }, Q.urlParams = function() {
    for (var e = {
    }, t = window.location.search.substr(1).split("&"), n = 0; n < t.length; ++n) {
      var i = t[n].split("="); e[decodeURIComponent(i[0])] = i.length > 1 ? decodeURIComponent(i[1]) : ""
    } return e
  }(), Q.generateString = function(e) {
    for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; i < e; i++)t += n.charAt(Q.randomInt(n.length)); return t
  }, Q.inIframe = function() {
    try {
      return window.self !== window.top
    } catch (e) {
      return !0
    }
  }; var Z = function() {
  }, ee = Z, te = {
  }, ne = {
    DEBUG: 1, INFO: 2, WARNING: 3, ERROR: 4, CRITICAL: 5
  }, ie = ne.WARNING, oe = function() {
    function e(t) {
      G(this, e), this._opts = t
    } return J(e, [{
      key: "debug", value: function(e) {
        ie <= ne.DEBUG && this._log("DEBUG: " + e)
      }
    }, {
      key: "info", value: function(e) {
        ie <= ne.INFO && this._log("INFO: " + e)
      }
    }, {
      key: "warning", value: function(e) {
        ie <= ne.WARNING && this._log("WARNING: " + e)
      }
    }, {
      key: "error", value: function(e) {
        ie <= ne.ERROR && this._log("ERROR: " + e)
      }
    }, {
      key: "critical", value: function(e) {
        ie <= ne.CRITICAL && this._log("CRITICAL: " + e)
      }
    }, {
      key: "_log", value: function(e) {
        var t = this._opts.prefix + e; this._opts.logFunc ? this._opts.logFunc(t) : ee(t)
      }
    }]), e
  }(), se = function(e) {
    ee = "function" == typeof e ? e : Z
  }, re = (function() {
    var e = (Q.urlParams.pubsub_log_level || "").toUpperCase(); if (e) {
      var t = ne[e]; if (t) return ie = t, function() {
      }
    }
  }(), function(e) {
    return te[e] || (te[e] = new oe({
      prefix: "pubsub.js [" + e + "] "
    })), te[e]
  }), ae = (new oe({
    prefix: "", logFunc: Z
  }), window.console); ae && ae.log && (ae.log.apply ? se(function() {
    ae.log.apply(ae, arguments)
  }) : se(function() {
    for (var e = [], t = 0; t < arguments.length; ++t)e.push(arguments[t]); ae.log(e.join(" "))
  })); var ce = function() {
    function e() {
      G(this, e), this._map = {
      }, this._size = 0
    } return J(e, [{
      key: "set", value: function(e, t) {
        this._map.hasOwnProperty(e) || (this._size += 1), this._map[e] = t
      }
    }, {
      key: "get", value: function(e) {
        return this._map[e]
      }
    }, {
      key: "has", value: function(e) {
        return this._map.hasOwnProperty(e)
      }
    }, {
      key: "remove", value: function(e) {
        this._map.hasOwnProperty(e) && (this._size -= 1), delete this._map[e]
      }
    }, {
      key: "size", value: function() {
        return this._size
      }
    }, {
      key: "map", value: function() {
        return this._map
      }
    }, {
      key: "values", value: function() {
        var e = []; for (var t in this._map) this._map.hasOwnProperty(t) && e.push(this._map[t]); return e
      }
    }]), e
  }(), ue = "pubsub", le = re("IframeClient"), he = function(e) {
    function t(e) {
      G(this, t); var n = X(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return n._parentUrl = e.parentUrl, n._pendingResponses = new ce, n._listens = new Y, window.addEventListener("message", n.receiveMessage.bind(n), !1), n
    } return K(t, Y), J(t, [{
      key: "connect", value: function() {
        window.parent.postMessage({
          twitch_protocol: ue, type: "connect"
        }, this._parentUrl)
      }
    }, {
      key: "verify", value: function() {
        window.parent.postMessage({
          twitch_protocol: ue, type: "verify"
        }, this._parentUrl), this._verifyTimeout = setTimeout(this._unverified.bind(this), 1e3)
      }
    }, {
      key: "Listen", value: function(e) {
        le.debug("listening on " + e.topic); var t = this._generateNonce(), n = {
          twitch_protocol: ue, type: "LISTEN", nonce: t, data: {
            topics: [e.topic], auth_token: e.auth
          }
        }; this._send(t, n, e)
      }
    }, {
      key: "Unlisten", value: function(e) {
        if (le.debug("unlistening on " + e.topic + "(" + this._listens.count(e.topic) + " listeners)"), this._listens.count(e.topic) > 1) return e.message && this._listens.off(e.topic, e.message), e.success && e.success(), void le.debug("now have " + this._listens.count(e.topic) + " listeners"); var t = this._generateNonce(), n = {
          twitch_protocol: ue, type: "UNLISTEN", nonce: t, data: {
            topics: [e.topic]
          }
        }; this._send(t, n, e)
      }
    }, {
      key: "_send", value: function(e, t, n) {
        this._pendingResponses.set(e, {
          timeout: setTimeout(this._onResponseTimeout.bind(this), 3e4, e), topic: n.topic, auth: n.auth, message: t, callbacks: {
            success: n.success, failure: n.failure, message: n.message
          }
        }), window.parent.postMessage(t, this._parentUrl)
      }
    }, {
      key: "receiveMessage", value: function(e) {
        if (e.data.twitch_protocol == ue) switch (le.debug("Received message: " + JSON.stringify(e.data)), e.data.type) {
          case "connected": this._trigger("connected"); break; case "disconnected": this._trigger("disconnected"); break; case "success": this.handleResponse(!0, e.data); break; case "failure": this.handleResponse(!1, e.data); break; case "message": this.handleMessage(e.data.topic, e.data.message); break; case "verify": this._verified()
        }
      }
    }, {
      key: "handleResponse", value: function(e, t) {
        if (this._pendingResponses.has(t.nonce)) {
          var n = this._pendingResponses.get(t.nonce); le.debug("ResponseInfo: " + JSON.stringify(n)), clearTimeout(n.timeout), this._pendingResponses.remove(t.nonce), e ? (n.callbacks.message && ("LISTEN" === n.message.type ? this._listens.on(n.topic, n.callbacks.message, this) : "UNLISTEN" === n.message.type && this._listens.off(n.topic, n.callbacks.message, this)), n.callbacks.success && n.callbacks.success()) : n.callbacks.failure && n.callbacks.failure(t.error)
        }
      }
    }, {
      key: "handleMessage", value: function(e, t) {
        le.debug("received '" + t + "' on topic " + e), this._listens._trigger(e, t)
      }
    }, {
      key: "_onResponseTimeout", value: function(e) {
        le.debug("response timed out: " + e)
      }
    }, {
      key: "_verified", value: function() {
        le.debug("Verified"), clearTimeout(this._verifyTimeout), this._trigger("verified")
      }
    }, {
      key: "_unverified", value: function() {
        window.removeEventListener("message", this.receiveMessage.bind(this), !1), this._trigger("unverified")
      }
    }, {
      key: "_generateNonce", value: function() {
        return Q.generateString(30)
      }
    }]), t
  }(), de = "pubsub", pe = 1e4, fe = re("IframeHost"), _e = function() {
    function e(t) {
      G(this, e), this._driver = t, this._sources = [], this._listeners = [], this._driver.on("connected", this.handleConnected, this), this._driver.on("disconnected", this.handleDisconnected, this), window.addEventListener("message", this.receiveMessage.bind(this), !1), this._orphanedListenerCheckTimer = setInterval(this._checkOrphanedListeners.bind(this), pe)
    } return J(e, [{
      key: "destroy", value: function() {
        clearInterval(this._orphanedListenerCheckTimer)
      }
    }, {
      key: "receiveMessage", value: function(e) {
        if (e.data.twitch_protocol == de && e.source) switch (fe.debug("Received message: " + JSON.stringify(e.data)), e.data.type) {
          case "LISTEN": this.handleListen(e.source, e.data.nonce, e.data.data); break; case "UNLISTEN": this.handleUnlisten(e.source, e.data.nonce, e.data.data); break; case "connect": this._sources.push(e.source), this._driver.connect(); break; case "verify": e.source.postMessage({
            twitch_protocol: de, type: "verify"
          }, "*")
        }
      }
    }, {
      key: "_pushListener", value: function(e, t) {
        for (var n = 0; n < this._listeners.length; n++)if (this._listeners[n].source === e && this._listeners[n].topic === t) return null; var i = {
          source: e, topic: t, message: function(n) {
            e.postMessage({
              twitch_protocol: de, type: "message", topic: t, message: n
            }, "*")
          }
        }; return this._listeners.push(i), i
      }
    }, {
      key: "_popListener", value: function(e, t) {
        for (var n = 0; n < this._listeners.length; n++)if (this._listeners[n].source === e && this._listeners[n].topic === t) return this._listeners.splice(n, 1)[0]; return null
      }
    }, {
      key: "_checkOrphanedListeners", value: function() {
        for (var e = 0; e < this._listeners.length; e++)this._listeners[e].source.closed && this._cleanUpOrphanedListener(this._listeners.splice(e--, 1)[0])
      }
    }, {
      key: "_cleanUpOrphanedListener", value: function(e) {
        fe.debug("Cleaning up orphaned listener for topic: " + e.topic), this._driver.Unlisten({
          topic: e.topic, success: function() {
            fe.debug("Success when cleaning up orphaned listener for topic: " + e.topic)
          }, failure: function(t) {
            fe.debug("Error when cleaning up orphaned listener for topic: " + e.topic + " Error: " + t)
          }, message: e.message
        })
      }
    }, {
      key: "handleListen", value: function(e, t, n) {
        var i = this._pushListener(e, n.topics[0]); i ? this._driver.Listen({
          topic: i.topic, auth: n.auth_token, success: function() {
            e.postMessage({
              twitch_protocol: de, type: "success", nonce: t
            }, "*")
          }, failure: function(n) {
            e.postMessage({
              twitch_protocol: de, type: "failure", nonce: t, error: n
            }, "*")
          }, message: i.message
        }) : e.postMessage({
          twitch_protocol: de, type: "success", nonce: t
        }, "*")
      }
    }, {
      key: "handleUnlisten", value: function(e, t, n) {
        var i = this._popListener(e, n.topics[0]); i ? this._driver.Unlisten({
          topic: i.topic, auth: n.auth_token, success: function() {
            e.postMessage({
              twitch_protocol: de, type: "success", nonce: t
            }, "*")
          }, failure: function(n) {
            e.postMessage({
              twitch_protocol: de, type: "failure", nonce: t, error: n
            }, "*")
          }, message: i.message
        }) : fe.debug("Failed to unlisten, could not find listener for topic " + n.topics[0])
      }
    }, {
      key: "handleConnected", value: function() {
        for (var e = 0; e < this._sources.length; e++)this._sources[e].postMessage({
          twitch_protocol: de, type: "connected"
        }, "*")
      }
    }, {
      key: "handleDisconnected", value: function() {
        for (var e = 0; e < this._sources.length; e++)this._sources[e].postMessage({
          twitch_protocol: de, type: "disconnected"
        }, "*")
      }
    }]), e
  }(), ge = re("PubsubSocket"), ye = function(e) {
    function t(e) {
      G(this, t); var n = X(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return n._opts = e, n._addr = e.addr, n._stats = e.stats, n._connectionAttempts = 0, n._sentPing = n._receivedPong = !1, n._id = "[" + Q.generateString(10) + "] ", window.addEventListener("beforeunload", n._beforeUnload.bind(n)), n
    } return K(t, Y), J(t, [{
      key: "connect", value: function() {
        ge.debug(this._id + "connecting to " + this._addr), this._connecting = !0, this._socketConnectTime = Q.time.now(); try {
          this._socket = new WebSocket(this._addr), this._socket.onmessage = this._onMessage.bind(this), this._socket.onerror = this._onError.bind(this), this._socket.onclose = this._onClose.bind(this), this._socket.onopen = this._onOpen.bind(this)
        } catch (e) {
          this._stats.logCounter("socket.error.security_err", 1, 1), this._trigger("connection_failure")
        }
      }
    }, {
      key: "close", value: function() {
        ge.debug(this._id + "closing"), this._closing = !0, this._clearTimeouts(), this._socket.close()
      }
    }, {
      key: "send", value: function(e) {
        ge.debug(this._id + "sending " + JSON.stringify(e)), this._isReady() ? this._socket.send(JSON.stringify(e)) : this._trigger("error", "not_ready")
      }
    }, {
      key: "_isReady", value: function() {
        return ge.debug(this._id + "_isReady called"), !!this._socket && this._socket.readyState === WebSocket.OPEN
      }
    }, {
      key: "_onMessage", value: function(e) {
        ge.debug(this._id + "received message: " + e.data); try {
          var t = JSON.parse(e.data); switch (t.type) {
            case "RESPONSE": this._trigger("response", t); break; case "MESSAGE": this._trigger("message", t); break; case "PONG": this._receivedPong = !0; break; case "RECONNECT": this._trigger("reconnect")
          }
        } catch (e) {
          this._stats.logLine("onMessage JSON Parse error: " + e)
        }
      }
    }, {
      key: "_onError", value: function(e) {
        ge.debug(this._id + "error: " + JSON.stringify(e))
      }
    }, {
      key: "_onClose", value: function(e) {
        if (ge.debug(this._id + "onClose triggered with code " + e.code + "(closing = " + this._closing + ", connecting = " + this._connecting + ")"), this._clearTimeouts(), this._connecting) {
          var t = Math.pow(2, this._connectionAttempts); t > 120 && (t = 120), ge.debug(this._id + "reconnecting in " + t + " seconds"), this._connectionAttempts += 1, this._nextConnectionAttempt = setTimeout(this.connect.bind(this), 1e3 * t)
        } else if (this._closing) this._closed = !0, this._trigger("connection_failure"); else {
          if (this._windowUnloading) return; ge.debug(this._id + "unexpected close"), this._stats.logCounter("socket.error.unexpected_closed", 1, 1), this._stats.logCounter("socket.error.close." + e.code, 1, 1); var n = "pubsub-js-client unexpected_close. code: " + e.code + ", reason: " + e.reason + ", wasClean: " + e.wasClean; this._stats.logLine(n), this._closed = !0, this._trigger("connection_failure")
        }
      }
    }, {
      key: "_onOpen", value: function(e) {
        ge.debug(this._id + " socket opened"), this._connectionAttempts = 0, this._connecting = !1, this._socketConnectTime && this._stats.logTimer("socket.connect", Q.time.now() - this._socketConnectTime, .1), this._stats.logCounter("socket.connection_retries." + this._connectionAttempts, 1, .1), this._ping(), this._pingInterval = window.setInterval(this._ping.bind(this), 24e4), this._trigger("open")
      }
    }, {
      key: "_ping", value: function() {
        ge.debug(this._id + "sending PING"); try {
          this._socket.send(JSON.stringify({
            type: "PING"
          })), this._sentPing = !0, this._pongTimeout && clearTimeout(this._pongTimeout), this._pongTimeout = setTimeout(this._pongTimedOut.bind(this), 3e4)
        } catch (e) {
          this._stats.logCounter("socket.error.ping_send_error", 1, 1), this._stats.logLine("ping error: closed: " + this._closed + ", error: " + e), this.close()
        }
      }
    }, {
      key: "_pongTimedOut", value: function() {
        this._sentPing && !this._receivedPong && (ge.debug(this._id + "Pong timed out!"), this._stats.logCounter("socket.error.pong_timed_out", 1, 1), this.close())
      }
    }, {
      key: "_clearTimeouts", value: function() {
        this._sentPing = this._receivedPong = !1, clearTimeout(this._pongTimeout), clearInterval(this._pingInterval), clearTimeout(this._nextConnectionAttempt)
      }
    }, {
      key: "_beforeUnload", value: function() {
        this._windowUnloading = !0
      }
    }]), t
  }(), be = re("WebsocketClient"), ve = "wss://pubsub-edge.twitch.tv:443/v1", me = "wss://pubsub-edge-darklaunch.twitch.tv:443/v1", we = "ws://localhost:6900/v1", xe = function(e) {
    function t(e) {
      G(this, t); var n = X(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); switch (n._opts = e, n._env = e.env, n._stats = e.stats, n._env) {
        case "production": n._addr = ve; break; case "darklaunch": n._addr = me; break; case "development": n._addr = we; break; default: n._addr = ve
      }return window.WebSocket ? (n._queuedRequests = [], n._pendingResponses = new ce, n._pendingReplayResponses = new ce, n._listens = new Y, n._replays = new ce, n._replaysSize = 0, n._firstConnectTime = n._firstListenTime = 0, n._connectCalled = n._reconnecting = !1, n._primarySocket = new ye({
        stats: n._stats, addr: n._addr
      }), n._bindPrimary(n._primarySocket), n) : X(n)
    } return K(t, Y), J(t, [{
      key: "verify", value: function() {
        this._trigger("verified")
      }
    }, {
      key: "connect", value: function() {
        window.WebSocket && (this._connectCalled ? this._primarySocket._isReady() && this._trigger("connected") : (this._connectCalled = !0, this._primarySocket.connect()))
      }
    }, {
      key: "_bindPrimary", value: function(e) {
        e.on("open", this._onPrimaryOpen, this), e.on("response", this._onResponse, this), e.on("message", this._onMessage, this), e.on("reconnect", this._onReconnect, this), e.on("connection_failure", this._onConnectionFailure, this)
      }
    }, {
      key: "_unbindPrimary", value: function(e) {
        e.off("open", this._onPrimaryOpen, this), e.off("response", this._onResponse, this), e.off("message", this._onMessage, this), e.off("reconnect", this._onReconnect, this), e.off("connection_failure", this._onConnectionFailure, this)
      }
    }, {
      key: "_onPrimaryOpen", value: function() {
        be.debug("primary open: " + this._primarySocket._id), 0 === this._firstConnectTime && (this._firstConnectTime = Q.time.now(), this._firstListenTimeout = setTimeout(this._neverListened.bind(this), 45e3)), this._connected = !0, this._trigger("connected"), this._flushQueuedRequests()
      }
    }, {
      key: "_onResponse", value: function(e) {
        if (be.debug("primary response: " + JSON.stringify(e)), this._pendingResponses.has(e.nonce)) {
          var t = this._pendingResponses.get(e.nonce); be.debug("responseInfo: " + JSON.stringify(t)), clearTimeout(t.timeout), this._pendingResponses.remove(e.nonce), "" === e.error ? ("LISTEN" === t.message.type ? (0 === this._firstListenTime && (clearTimeout(this._firstListenTimeout), this._firstListenTime = Q.time.now(), this._stats.logTimer("time_to_first_listen", this._firstListenTime - this._firstConnectTime, .1)), this._replays.set(e.nonce, {
            nonce: e.nonce, message: t.callbacks.message, topic: t.topic, auth: t.auth
          }), t.callbacks.message && this._listens.on(t.topic, t.callbacks.message, this)) : "UNLISTEN" === t.message.type && (this._replays.remove(e.nonce), t.callbacks.message && this._listens.off(t.topic, t.callbacks.message, this)), t.callbacks.success && t.callbacks.success()) : t.callbacks.failure && t.callbacks.failure(e.error)
        }
      }
    }, {
      key: "_onResponseTimeout", value: function(e) {
        if (this._pendingResponses.has(e)) {
          var t = this._pendingResponses.get(e); this._pendingResponses.remove(e), t.callbacks.failure && t.callbacks.failure("response timeout")
        }
      }
    }, {
      key: "_onMessage", value: function(e) {
        be.debug("primary message: " + JSON.stringify(e)), this._listens._trigger(e.data.topic, e.data.message)
      }
    }, {
      key: "_onConnectionFailure", value: function() {
        be.debug("connection failure"), this._trigger("disconnected"), this._notifyWhenOpen = !0, this._onReconnect()
      }
    }, {
      key: "_onReconnect", value: function() {
        be.debug("reconnecting..."), this._reconnecting = !0, this._backupSocket = new ye({
          stats: this._stats, addr: this._addr
        }), this._bindBackup(this._backupSocket), setTimeout(this._backupSocket.connect.bind(this._backupSocket), this._jitteredReconnectDelay())
      }
    }, {
      key: "_bindBackup", value: function(e) {
        e.on("open", this._onBackupOpen, this), e.on("response", this._onBackupResponse, this)
      }
    }, {
      key: "_unbindBackup", value: function(e) {
        e.off("open", this._onBackupOpen, this), e.off("response", this._onBackupResponse, this)
      }
    }, {
      key: "_onBackupOpen", value: function() {
        be.debug("Backup socket opened"), this._replays.size() > 0 ? this._replayBackup() : (this._swapSockets(), this._notifyWhenOpen && (be.debug("triggering connected"), this._notifyWhenOpen = !1, this._trigger("connected")))
      }
    }, {
      key: "_replayBackup", value: function() {
        for (var e = this._replays.values(), t = 0; t < e.length; t++) {
          var n = {
            type: "LISTEN", nonce: this._generateNonce(), data: {
              topics: [e[t].topic], auth_token: e[t].auth
            }
          }; this._pendingReplayResponses.set(n.nonce, !0), this._backupSocket.send(n)
        }
      }
    }, {
      key: "_onBackupResponse", value: function(e) {
        this._pendingReplayResponses.has(e.nonce) && "" === e.error && (this._pendingReplayResponses.remove(e.nonce), 0 === this._pendingReplayResponses.size() && (this._swapSockets(), this._notifyWhenOpen && (be.debug("triggering connected"), this._notifyWhenOpen = !1, this._trigger("connected"))))
      }
    }, {
      key: "_swapSockets", value: function() {
        be.debug("swapping primary " + this._primarySocket._id + " and backup " + this._backupSocket._id), this._unbindPrimary(this._primarySocket), this._unbindBackup(this._backupSocket), this._bindPrimary(this._backupSocket), this._primarySocket.close(), this._primarySocket = this._backupSocket, this._reconnecting = !1, this._flushQueuedRequests()
      }
    }, {
      key: "Listen", value: function(e) {
        if (window.WebSocket) {
          be.debug("listening on " + e.topic); var t = this._generateNonce(), n = {
            type: "LISTEN", nonce: t, data: {
              topics: [e.topic], auth_token: e.auth
            }
          }; this._queuedSend(t, n, e)
        }
      }
    }, {
      key: "Unlisten", value: function(e) {
        if (window.WebSocket) {
          if (be.debug("unlistening on " + e.topic + "(" + this._listens.count(e.topic) + " listeners)"), this._listens.count(e.topic) > 1) {
            this._listens.off(e.topic, e.message); for (var t in this._replays.map()) if (this._replays.get(t).message === e.message) {
              this._replays.remove(t); break
            } return e.success && e.success(), void be.debug("now have " + this._listens.count(e.topic) + " listeners")
          } var n = this._generateNonce(), i = {
            type: "UNLISTEN", nonce: n, data: {
              topics: [e.topic]
            }
          }; this._queuedSend(n, i, e)
        }
      }
    }, {
      key: "_queuedSend", value: function(e, t, n) {
        this._reconnecting || !1 === this._primarySocket._isReady() ? (be.debug("queuing"), this._queuedRequests.push({
          nonce: e, msg: t, opts: n
        })) : (be.debug("sending immediately"), this._send(e, t, n))
      }
    }, {
      key: "_flushQueuedRequests", value: function() {
        for (be.debug("flushing " + this._queuedRequests.length + " listen/unlistens"); this._queuedRequests.length > 0;) {
          var e = this._queuedRequests.shift(); this._send(e.nonce, e.msg, e.opts)
        }
      }
    }, {
      key: "_send", value: function(e, t, n) {
        this._pendingResponses.set(e, {
          timeout: setTimeout(this._onResponseTimeout.bind(this), 3e4, e), topic: n.topic, auth: n.auth, message: t, callbacks: {
            success: n.success, failure: n.failure, message: n.message
          }
        }), this._primarySocket.send(t)
      }
    }, {
      key: "_neverListened", value: function() {
        this._stats.logCounter("first_listen_timeout", 1)
      }
    }, {
      key: "_generateNonce", value: function() {
        return Q.generateString(30)
      }
    }, {
      key: "_jitteredReconnectDelay", value: function() {
        return Q.randomInt(2e3)
      }
    }]), t
  }(), ke = 500, Ee = 20, Te = "__Twitch__statsInstances_1", Pe = {
    production: {
      addr: "https://client-event-reporter.twitch.tv"
    }, darklaunch: {
      addr: "https://client-event-reporter-darklaunch.twitch.tv"
    }
  }; Pe.staging = Pe.darklaunch, Pe.development = Pe.darklaunch, Pe.test = Pe.darklaunch; var Se = function() {
    function e(t) {
      if (G(this, e), !t) throw new Error("config is required"); this._addr = t.addr, this._resetCombinedStats(), this._recordDelay = ke, this._maxPendingStats = Ee
    } return J(e, [{
      key: "logCounter", value: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1; this._combinedStats.counters.push({
          key: e, count: t, sample_rate: n
        }), this._record()
      }
    }, {
      key: "logTimer", value: function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1; this._combinedStats.timers.push({
          key: e, milliseconds: t, sample_rate: n
        }), this._record()
      }
    }, {
      key: "logLine", value: function(e) {
        this._combinedStats.log_lines.push({
          log_line: e
        }), this._record()
      }
    }, {
      key: "logGauge", value: function(e) {
        this._combinedStats.gauges.push({
          key: e
        }), this._record()
      }
    }, {
      key: "_resetCombinedStats", value: function() {
        this._combinedStats = {
          timers: [], counters: [], log_lines: [], gauges: []
        }
      }
    }, {
      key: "_record", value: function() {
        var e = this; this._numPendingStats() > this._maxPendingStats ? (this._flushTimeout && (clearTimeout(this._flushTimeout), this._flushTimeout = null), this._flush()) : this._flushTimeout || (this._flushTimeout = setTimeout(function() {
          e._flushTimeout = null, e._flush()
        }, this._recordDelay))
      }
    }, {
      key: "_flush", value: function() {
        var e = this._combinedStats; this._resetCombinedStats(); var t = this._addr + "/v1/stats", n = this._createCorsRequest("POST", t); n ? (n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.setRequestHeader("Content-Type", "application/json"), n.send(JSON.stringify(e))) : console.log("WARNING: Cannot send stats because CORS is unsupported")
      }
    }, {
      key: "_numPendingStats", value: function() {
        var e = this._combinedStats; return e.timers.length + e.counters.length + e.log_lines.length + e.gauges.length
      }
    }, {
      key: "_createCorsRequest", value: function(e, t) {
        var n = new XMLHttpRequest; return "withCredentials" in n ? n.open(e, t, !0) : "undefined" != typeof XDomainRequest ? (n = new XDomainRequest).open(e, t) : n = null, n
      }
    }]), e
  }(), Ce = function() {
    function e(t, n) {
      if (G(this, e), !t) throw new Error("Missing backend"); if (!n) throw new Error("Missing prefix"); this._backend = t, this._prefix = n
    } return J(e, [{
      key: "logCounter", value: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1; this._backend.logCounter(this._prefix + "." + e, t, n)
      }
    }, {
      key: "logTimer", value: function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1; this._backend.logTimer(this._prefix + "." + e, t, n)
      }
    }, {
      key: "logLine", value: function(e) {
        this._backend.logLine(e)
      }
    }, {
      key: "logGauge", value: function(e) {
        this._backend.logGauge(e)
      }
    }, {
      key: "setPrefix", value: function(e) {
        if (!e) throw new Error("Missing prefix"); this._prefix = e
      }
    }]), e
  }(); var Oe = {
    getInstance: function(e, t) {
      var n = Pe[e]; if (!n) throw new Error("Invalid environment - got " + e); if (!t) throw new Error("Invalid prefix - got " + t); window[Te] = window[Te] || {
      }; var i = window[Te]; i[e] || (i[e] = new Se(n)); var o = i[e]; return new Ce(o, t)
    }
  }, Ie = "https://pubster.twitch.tv/publish", Ae = "https://pubster-darklaunch.twitch.tv/publish", Re = "pubsubtest.unique.", Me = "pubsubtest.shared." + Q.randomInt(10), Ue = re("PubsubTest"), Le = function() {
    function e(t) {
      if (G(this, e), window.$) {
        switch (Ue.debug("PubsubTest enabled"), this._env = t.env, this._driver = t.driver, this._stats = t.stats, this._env) {
          case "production": this._addr = Ie; break; case "darklaunch": this._addr = Ae; break; default: this._env = "production", this._addr = Ie
        }this._statKeys = {
          uniqueSuccess: "test.unique.success", uniqueFailure: "test.unique.failure", sharedSuccess: "test.shared.success", sharedFailure: "test.shared.failure"
        }, this._uniqueKey = Re + Q.generateString(20), this._sharedKey = Me, this._listeningUnique = this._listeningShared = !1, this.sendListens()
      } else Ue.debug("PubsubTest could not be enabled. JQuery is undefined.")
    } return J(e, [{
      key: "sendListens", value: function() {
        this._driver.Listen({
          topic: this._uniqueKey, auth: "", success: this._gotUniqueOk.bind(this), failure: this._gotUniqueFail.bind(this), message: this._gotUniqueMessage.bind(this)
        }), this._driver.Listen({
          topic: this._sharedKey, auth: "", success: this._gotSharedOk.bind(this), failure: this._gotSharedFail.bind(this), message: this._gotSharedMessage.bind(this)
        })
      }
    }, {
      key: "_gotUniqueOk", value: function() {
        this._listeningUnique = !0, this._listeningShared && this.startTesting()
      }
    }, {
      key: "_gotUniqueFail", value: function(e) {
      }
    }, {
      key: "_gotSharedOk", value: function() {
        this._listeningShared = !0, this._listeningUnique && this.startTesting()
      }
    }, {
      key: "_gotSharedFail", value: function(e) {
      }
    }, {
      key: "startTesting", value: function() {
        Ue.debug("startTesting"), this._driver.on("connected", this.resumeTesting, this), this._driver.on("disconnected", this.stopTesting, this), this.checkAndSend(), this._publishInterval = window.setInterval(this.checkAndSend.bind(this), 6e4)
      }
    }, {
      key: "resumeTesting", value: function() {
        Ue.debug("resumeTesting"), this.checkAndSend(), this._publishInterval = window.setInterval(this.checkAndSend.bind(this), 6e4)
      }
    }, {
      key: "stopTesting", value: function() {
        Ue.debug("stopTesting"), clearInterval(this._publishInterval), this._receivedUniqueMessage = this._sentUniqueMessage = !1, this._receivedSharedMessage = this._sentSharedMessage = !1
      }
    }, {
      key: "checkAndSend", value: function() {
        Ue.debug("checkAndSend: unique: sent = " + this._sentUniqueMessage + ", received = " + this._receivedUniqueMessage), !this._receivedUniqueMessage && this._sentUniqueMessage && (Ue.debug("unique failure"), this._stats.logCounter(this._statKeys.uniqueFailure, 1, 1)), !this._receivedSharedMessage && this._sentSharedMessage && (Ue.debug("shared failure"), this._stats.logCounter(this._statKeys.sharedFailure, 1, 1)), this._receivedUniqueMessage = this._sentUniqueMessage = !1, this._receivedSharedMessage = this._sentSharedMessage = !1, this._expectedMessage = Q.generateString(30), $.ajax({
          type: "POST", url: this._addr, contentType: "application/json", timeout: 3e4, data: JSON.stringify({
            topics: [this._uniqueKey], data: this._expectedMessage
          }), success: function() {
            Ue.debug("unique message sent"), this._sentUniqueMessage = !0
          }.bind(this)
        }), this._sentUniqueMessageTime = Q.time.now(), Math.random() < 1e-4 && ($.ajax({
          type: "POST", url: this._addr, contentType: "application/json", timeout: 3e4, data: JSON.stringify({
            topics: [this._sharedKey], data: this._expectedMessage
          }), success: function() {
            Ue.debug("shared message sent"), this._sentSharedMessage = !0
          }.bind(this)
        }), this._sentSharedMessageTime = Q.time.now())
      }
    }, {
      key: "_gotUniqueMessage", value: function(e) {
        if (Ue.debug("received unique message: " + e), e === this._expectedMessage) {
          var t = Q.time.now() - this._sentUniqueMessageTime; this._receivedUniqueMessage = !0, this._stats.logTimer(this._statKeys.uniqueSuccess, t, .1), this._stats.logCounter(this._statKeys.uniqueSuccess, 1, .1)
        }
      }
    }, {
      key: "_gotSharedMessage", value: function(e) {
        if (e === this._expectedMessage) {
          var t = Q.time.now() - this._sentSharedMessageTime; this._receivedSharedMessage = !0, this._stats.logTimer(this._statKeys.sharedSuccess, t, .1), this._stats.logCounter(this._statKeys.sharedSuccess, 1, .1)
        }
      }
    }]), e
  }(), je = re("PubsubDriver"), Be = 3e4, qe = /^https?:\/\/([\w-]+\.)*twitch\.(tv|tech)(:\d+)?\/.*$/, Fe = 1, Ne = function(e) {
    function t(e) {
      G(this, t); var n = X(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return n._env = Q.urlParams.pubsub_environment || e, n._clientReady = !1, n._hasDisconnected = !1, n._queuedRequests = [], n._stats = Oe.getInstance(n._env, "pubsub-js-client"), n._numDisconnects = 0, Q.inIframe() && qe.test(document.referrer) ? (je.debug("Driver is in an iframe"), n._client = new he({
        parentUrl: document.referrer
      }), n._clientType = "iframe-verified") : (je.debug("Driver is not in an iframe"), n._client = new xe({
        env: n._env, stats: n._stats
      }), n._iframeHost = new _e(n._client), n._clientType = "ws"), n._stats.setPrefix("pubsub-js-client." + n._clientType), "true" === Q.urlParams.force_pubsub_tester ? Fe = 1 : "false" === Q.urlParams.force_pubsub_tester && (Fe = 0), Math.random() < Fe && window.setTimeout(n.runTest.bind(n), Be), n._client.on("unverified", n._clientUnverified, n), n._client.on("verified", n._clientVerified, n), n._client.verify(), n
    } return K(t, Y), J(t, [{
      key: "runTest", value: function() {
        this._tester = new Le({
          env: this._env, driver: this, stats: this._stats
        })
      }
    }, {
      key: "connect", value: function() {
      }
    }, {
      key: "Listen", value: function(e) {
        this._clientReady ? this._client.Listen(e) : this._queuedRequests.push({
          type: "LISTEN", opts: e
        })
      }
    }, {
      key: "Unlisten", value: function(e) {
        this._clientReady ? this._client.Unlisten(e) : this._queuedRequests.push({
          type: "UNLISTEN", opts: e
        })
      }
    }, {
      key: "_flushQueuedRequests", value: function() {
        for (je.debug("Flushing " + this._queuedRequests.length + " queued requests"); this._queuedRequests.length > 0;) {
          var e = this._queuedRequests.shift(); switch (e.type) {
            case "LISTEN": this._client.Listen(e.opts); break; case "UNLISTEN": this._client.Unlisten(e.opts)
          }
        }
      }
    }, {
      key: "_clientConnected", value: function() {
        je.debug("Client connected"), this._client.on("disconnected", this._clientDisconnected, this), this._stats.logCounter("connected", 1), this._trigger("connected"), this._hasDisconnected && this._trigger("reconnected"), this._clientReady = !0, this._flushQueuedRequests()
      }
    }, {
      key: "_clientDisconnected", value: function() {
        je.debug("Client disconnected"), this._trigger("disconnected"), this._clientReady = !1, this._numDisconnects += 1, this._hasDisconnected = !0
      }
    }, {
      key: "_clientVerified", value: function() {
        je.debug("Client verified (type = " + this._clientType + ")"), this._stats.setPrefix("pubsub-js-client." + this._clientType), this._client.on("connected", this._clientConnected, this), this._client.connect(), window.setInterval(this._sendClientTypeGauge.bind(this), 6e4)
      }
    }, {
      key: "_clientUnverified", value: function() {
        je.debug("Unverified IframeClient"), this._client.off("verified", this._clientVerified, this), this._client.off("unverified", this._clientUnverified, this), this._client = new xe({
          env: this._env, stats: this._stats
        }), this._clientType = "iframe-unverified", this._client.on("unverified", this._clientUnverified, this), this._client.on("verified", this._clientVerified, this), this._client.verify()
      }
    }, {
      key: "_sendClientTypeGauge", value: function() {
        this._stats.logGauge("pubsub-js-client." + this._clientType)
      }
    }]), t
  }(); window.__Twitch__pubsubInstances = window.__Twitch__pubsubInstances || {
    production: null, staging: null, darklaunch: null
  }; var De, Ve, We, He = {
    getInstance: function(e) {
      if ("production" !== e && "staging" !== e && "darklaunch" !== e) throw "Invalid Pubsub instance environment"; return null === window.__Twitch__pubsubInstances[e] && (window.__Twitch__pubsubInstances[e] = new Ne(e)), window.__Twitch__pubsubInstances[e]
    }
  }, ze = function() {
    function e() {
      this.driver = He.getInstance("production")
    } return e.prototype.setEnvironment = function(e) {
      this.driver = He.getInstance(e)
    }, e.prototype.subscribe = function(e) {
      var t = this, n = e.topic, i = e.success, o = e.failure, s = e.message, r = e.token, a = this.createSubscribeCallback(s); return this.driver.Listen({
        topic: n, success: i, failure: o, message: a, auth: r
      }), function() {
        return t.unsubscribe(n, a)
      }
    }, e.prototype.unsubscribe = function(e, t) {
      this.driver.Unlisten({
        topic: e, success: function() {
        }, failure: function(e) {
        }, message: t
      })
    }, e.prototype.createSubscribeCallback = function(e) {
      return function(t) {
        var n; try {
          n = JSON.parse(t)
        } catch (e) {
          return
        } e(n)
      }
    }, e
  }(), Ge = (De = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, t) {
    e.__proto__ = t
  } || function(e, t) {
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
  }, function(e, t) {
    function n() {
      this.constructor = e
    } De(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  }), Je = "playercontext", Ke = "contextupdate", Xe = new (function(e) {
    function t(t) {
      var n = e.call(this) || this; return n.currentControlHandlers = {
        onShouldFetchExtensions: function() {
        }, onDestroyExtension: function() {
        }
      }, n.currentExtensionUnsubscribes = v(), n.hasPurchaseCompletedSubscriptionList = v(), n.hasBitsTransactionCompletedSubscriptionList = v(), n.onPlayerContextUpdate = function() {
        n.emit(Je)
      }, n.onTwilightContextUpdate = function(e) {
        n.emit(Ke, e)
      }, n.onExtensionControlMessage = function(e) {
        switch (e.status) {
          case "activate": if (e.maxDelayMS > 0) {
            var t = Math.random() * e.maxDelayMS; setTimeout(function() {
              n.currentControlHandlers.onShouldFetchExtensions()
            }, t)
          } else n.currentControlHandlers.onShouldFetchExtensions(); break; case "deactivate": case "uninstall": n.currentControlHandlers.onDestroyExtension(e.extensionId)
        }
      }, n.onExtensionMassControlMessage = function(e) {
        switch (e.status) {
          case "mass_deactivate": n.currentControlHandlers.onDestroyExtension(e.extensionId)
        }
      }, n.onBroadcastSettingsUpdateMessage = function(e) {
        var t = e.channel_id, i = e.game, o = e.old_game; n.currentChannelId && t === n.currentChannelId || !n.broadcastSettingsUnsubscribe ? i !== o && n.emit(Ke, {
          game: i
        }) : n.broadcastSettingsUnsubscribe()
      }, n.pubsub = t || new ze, n
    } return Ge(t, e), t.prototype.getInstalledExtensions = function(e) {
      var t = this; return I(e).then(function(e) {
        return t.registerExtensionInstallations(e)
      })
    }, t.prototype.registerExtensionInstallations = function(e) {
      var t = this; return M.setClockSkew(e.issued_at), e.tokens.forEach(function(n) {
        var i = e.installed_extensions.reduce(function(e, t) {
          var i = t.extension, o = t.installation_status; return e || (i.id === n.extension_id ? "active" === o.activation_state : e)
        }, !1), o = new u(n.token).isBroadcaster; (i || o) && (M.registerToken(n.extension_id, n.token), t.subscribeToMassExtensionControl(n.extension_id))
      }), e
    }, t.prototype.setEnvironmentOptions = function(e) {
      e.env && (this.pubsub.setEnvironment(this.getPubsubEnvironment(e.env)), z.environment = e.env), h.setApiOptions({
        apiUrl: e.apiUrl, authToken: e.authToken
      })
    }, t.prototype.subscribeToExtensionControl = function(e, t) {
      this.currentChannelId && e !== this.currentChannelId && this.unsubscribeFromExtensionControl(this.currentChannelId), this.currentChannelId = e, this.currentControlHandlers = t, this.currentChannelUnsubscribe = this.pubsub.subscribe({
        topic: "extension-control." + e, success: this.onSubscribeSuccess, failure: this.onSubscribeFailure, message: this.onExtensionControlMessage
      }), this.broadcastSettingsUnsubscribe = this.pubsub.subscribe({
        topic: "broadcast-settings-update." + e, success: this.onSubscribeSuccess, failure: this.onSubscribeFailure, message: this.onBroadcastSettingsUpdateMessage
      })
    }, t.prototype.unsubscribeFromExtensionControl = function(e) {
      if (this.currentChannelId && e === this.currentChannelId) {
        this.currentChannelUnsubscribe && this.currentChannelUnsubscribe(), this.broadcastSettingsUnsubscribe && this.broadcastSettingsUnsubscribe(); for (var t = 0, n = Object.keys(this.currentExtensionUnsubscribes); t < n.length; t++) {
          var i = n[t]; this.currentExtensionUnsubscribes[i]()
        }
      }
    }, t.prototype.registerPlayer = function(e) {
      this.player = e, this.player.addEventListener("pause", this.onPlayerContextUpdate), this.player.addEventListener("play", this.onPlayerContextUpdate), this.player.addEventListener("statsupdate", this.onPlayerContextUpdate)
    }, t.prototype.unregisterPlayer = function() {
      this.player && (this.player.removeEventListener("pause", this.onPlayerContextUpdate), this.player.removeEventListener("play", this.onPlayerContextUpdate), this.player.removeEventListener("statsupdate", this.onPlayerContextUpdate), this.player = void 0)
    }, t.prototype.setPlayerWindow = function(e) {
      this.playerWindow = e
    }, t.prototype.postContext = function(e) {
      this.playerWindow && this.playerWindow.postMessage({
        event: Ke, context: e
      }, "*"), this.emit(Ke, e)
    }, t.prototype.listenForContext = function() {
      var e = this; window.addEventListener("message", function(t) {
        var n = t.data; if (t.origin === window.location.origin && n.event && n.event === Ke) {
          var i = n.context; e.onTwilightContextUpdate(i)
        }
      }, !1)
    }, t.prototype.onPurchaseCompleted = function(e, t) {
      var n = this, i = "purchase-completed." + e; if (this.on(i, t), !this.hasPurchaseCompletedSubscriptionList[e]) {
        var o = h.authToken; this.hasPurchaseCompletedSubscriptionList[e] = !0, this.pubsub.subscribe({
          token: o, topic: "user-extensionpurchase-events." + e, success: function() {
          }, failure: function() {
          }, message: function(e) {
            n.emit(i, e)
          }
        })
      }
    }, t.prototype.onBitsTransactionCompleted = function(e, t, n, i) {
      var o = this, s = "bits-transaction-completed." + e + "-" + t; this.on(s, i), this.hasBitsTransactionCompletedSubscriptionList[s] || (this.hasBitsTransactionCompletedSubscriptionList[s] = !0, this.pubsub.subscribe({
        token: h.authToken, topic: "bits-ext-v1-transaction." + e + "-" + t, success: function() {
        }, failure: function() {
        }, message: function(e) {
          o.emit(s, e)
        }
      }), null !== n && this.pubsub.subscribe({
        token: h.authToken, topic: "bits-ext-v1-user-transaction." + n + "." + e + "-" + t, success: function() {
        }, failure: function() {
        }, message: function(e) {
          o.emit(s, e)
        }
      }))
    }, t.prototype.onSubscribeFailure = function(e) {
    }, t.prototype.onSubscribeSuccess = function() {
    }, t.prototype.getPubsubEnvironment = function(e) {
      return "staging" === e ? "darklaunch" : "test" === e ? "production" : e
    }, t.prototype.subscribeToMassExtensionControl = function(e) {
      this.currentExtensionUnsubscribes[e] || (this.currentExtensionUnsubscribes[e] = this.pubsub.subscribe({
        topic: "extension-control." + e, success: this.onSubscribeSuccess, failure: this.onSubscribeFailure, message: this.onExtensionMassControlMessage
      }))
    }, t
  }(i)); (We = Ve || (Ve = {
  })).Light = "light", We.Dark = "dark"; var Ye = {
    0: Ve.Light, 1: Ve.Dark
  }, $e = {
    "": Ve.Light, "theme--dark": Ve.Dark
  }; var Qe, Ze, et, tt, nt, it = (Qe = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, t) {
    e.__proto__ = t
  } || function(e, t) {
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
  }, function(e, t) {
    function n() {
      this.constructor = e
    } Qe(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  }), ot = Object.assign || function(e) {
    for (var t, n = 1, i = arguments.length; n < i; n++) {
      t = arguments[n]; for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
    } return e
  }, st = "en", rt = function(t) {
    function n(n, i) {
      void 0 === i && (i = st); var o = t.call(this) || this; return o.extensionMode = n, o.language = i, o.context = {
      }, o.isContextInitialized = !1, o.destroy = function() {
        Xe.off(Je, o.updateLocalContext), Xe.off(Ke, o.updateLocalContext)
      }, o.initializeContext = function() {
        o.isContextInitialized = !0, o.emit("context", o.context, Object.keys(o.context))
      }, o.getPlayerContext = function() {
        var e = Xe.player; if (!e) return {
        }; var t = e.getPlaybackStats(); return {
          bitrate: t.playbackRate, bufferSize: t.bufferSize, displayResolution: t.displayResolution, hlsLatencyBroadcaster: t.hlsLatencyBroadcaster, isFullScreen: e.getFullscreen(), isPaused: e.isPaused(), isTheatreMode: e.getTheatre(), videoResolution: t.videoResolution
        }
      }, o.getBaseContext = function() {
        return {
          mode: o.extensionMode, language: o.language
        }
      }, o.updateLocalContext = function(e) {
        void 0 === e && (e = {
        }); var t = ot({
        }, o.context, e, o.getPlayerContext(), o.getBaseContext()); void 0 !== t.theme && (t.theme = o.translateTheme(t.theme)), o.diffAndEmitContext(t)
      }, o.diffAndEmitContext = function(e) {
        var t = o.context; if (o.context = e, o.isContextInitialized) {
          var n = Object.keys(e).reduce(function(n, i) {
            return t[i] !== e[i] && n.push(i), n
          }, []); n.length > 0 && o.emit("context", e, n)
        }
      }, o.translateTheme = function(e) {
        return "number" == typeof e ? Ye[e] || Ve.Light : e
      }, Xe.on(Je, o.updateLocalContext), Xe.on(Ke, o.updateLocalContext), o.context = o.getBaseContext(), o.context.theme = function() {
        var e = window.localStorage.getItem("twilight.theme"); if (e) return Ye[e]; if (e = window.localStorage.getItem("storage:theme")) {
          var t = JSON.parse(e); if (t.activeTheme) return $e[t.activeTheme] || Ve.Light
        } return Ve.Light
      }(), n === e.ExtensionMode.Viewer && (o.context.game = "", o.context.playbackMode = e.PlaybackMode.Video), o
    } return it(n, t), n
  }(i), at = Object.assign || function(e) {
    for (var t, n = 1, i = arguments.length; n < i; n++) {
      t = arguments[n]; for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
    } return e
  }; (et = Ze || (Ze = {
  })).Cancelled = "cancelled", et.LoggedOut = "logged_out_user", et.InvalidId = "invalid_id", et.AlreadyFollowed = "already_followed", (nt = tt || (tt = {
  })).Cancelled = "cancelled", nt.LoggedOut = "logged_out_user", nt.InvalidID = "invalid_id", nt.UserIneligible = "user_ineligible", nt.InsufficientBalance = "insufficient_balance", nt.UnableToGetEligibility = "unable_to_get_eligibility", nt.UnableToLinkUser = "unable_to_link_user", nt.UseBitsFailure = "use_bits_failure"; var ct = function() {
    function e(e) {
      this.dobbin = e.dobbin; var t = o(e.iframe.ownerDocument.referrer); this.trackingProperties = at({
      }, e.requiredProps, {
          url: e.iframe.ownerDocument.location.href, host: e.iframe.ownerDocument.location.host, domain: e.iframe.ownerDocument.domain, user_agent: e.iframe.ownerDocument.defaultView.navigator.userAgent, referrer_url: e.iframe.ownerDocument.referrer, referrer_host: t.host, extension_id: e.extension.clientId, extension_version: e.extension.version, extension_anchor: e.anchor, extension_mode: e.extensionMode
        })
    } return e.prototype.trackEvent = function(e, t) {
      var n = at({
      }, t, this.trackingProperties); this.dobbin.trackEvent(e, n, ["spade"])
    }, e
  }(); function ut(e, t) {
    return "USD" === t ? "$" + e : e + " " + t
  } var lt, ht, dt, pt = (lt = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, t) {
    e.__proto__ = t
  } || function(e, t) {
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
  }, function(e, t) {
    function n() {
      this.constructor = e
    } lt(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  }); (dt = ht || (ht = {
  })).CurrentUser = "current_user", dt.Other = "other"; var ft, _t = function(t) {
    function n(n) {
      var i = t.call(this) || this; return i.iframe = n, i.destroy = function() {
        i.iframe.ownerDocument.defaultView.removeEventListener("message", i.handleMessage)
      }, i.sendContext = function(t, n) {
        i.sendMessage({
          action: e.ExtensionAction.TwitchExtContext, context: t, updatedFields: n
        })
      }, i.sendExtensionAuth = function(t) {
        i.sendMessage({
          action: e.ExtensionAction.TwitchExtAuth, auth: t
        })
      }, i.sendExtensionBootstrap = function(t) {
        i.sendMessage({
          action: e.ExtensionAction.TwitchExtBootstrap, auth: t
        })
      }, i.sendSupervisorInit = function(t) {
        i.sendMessage({
          action: e.SupervisorAction.SupervisorInit, options: t
        })
      }, i.sendFunctionReply = function(e) {
        i.sendMessage(e)
      }, i.sendExtensionReloadEntitlementsMessage = function() {
        i.sendMessage({
          action: e.ExtensionAction.TwitchExtReloadEntitlements
        })
      }, i.sendVisibilityChanged = function(t, n) {
        i.sendMessage({
          action: e.ExtensionAction.TwitchExtVisibilityChanged, isVisible: t, context: n
        })
      }, i.sendPositionChange = function(t) {
        i.sendMessage({
          action: e.ExtensionAction.TwitchExtPositionChanged, position: t
        })
      }, i.sendBitsProductsMessage = function(t) {
        i.sendMessage({
          action: e.ExtensionAction.TwitchExtBitsProducts, products: t
        })
      }, i.sendBitsTransactionCompleteMessage = function(e) {
        i.sendMessage(e)
      }, i.handleMessage = function(e) {
        var t = e.source, n = e.data; if (t === i.iframe.contentWindow) try {
          i.handleExtensionAction(n)
        } catch (e) {
          console.error("Caught Error in Message Handler: " + e.stack)
        }
      }, i.handleExtensionAction = function(e) {
        -1 !== W.indexOf(e.action) && i.emit(e.action, e)
      }, i.sendMessage = function(e) {
        i.iframe && i.iframe.contentWindow && i.iframe.contentWindow.postMessage(e, z.supervisorOrigin)
      }, i.iframe.ownerDocument.defaultView.addEventListener("message", i.handleMessage), i
    } return pt(n, t), n.prototype.sendExtensionReloadMessage = function() {
      this.sendMessage({
        action: e.ExtensionAction.TwitchExtReload
      })
    }, n.prototype.sendExtensionProductPricesMessage = function(t) {
      var n = t.products.reduce(function(e, t) {
        var n = t.sku, i = t.price; return e[n] = {
          displayPrice: ut(i.price, i.currency_unit)
        }, e
      }, {
        }); this.sendMessage({
          action: e.ExtensionAction.TwitchExtProductPrices, prices: n
        })
    }, n
  }(i), gt = function() {
    return function(t, n, i) {
      var o = this; this.coordinator = t, this.loginId = n, this.emitConfirmationRequest = i, this.functionActionMap = v(), this.functionModalMap = v(), this.registerFunctionModal = function(t, n) {
        n.onOpen(function(i) {
          var s = {
            action: o.loginId ? t : e.FunctionAction.LoginRequest, resultCallback: n.resultCallback, defaultResult: n.defaultResult
          }; i && (s.options = i), o.requestConfirmation(s)
        }), n.onModalResult && n.onModalResult(function(e) {
          o.sendFunctionReply(e)
        }), o.functionModalMap[t] = n, o.functionActionMap[t] = o.functionActionHandler(t), o.coordinator.on(t, o.functionActionMap[t])
      }, this.unregisterFunctionModal = function(e) {
        o.coordinator.off(e, o.functionActionMap[e]), delete o.functionActionMap[e], delete o.functionModalMap[e]
      }, this.functionActionHandler = function(e) {
        return function(t) {
          var n = o.functionModalMap[e]; n && n.open(t)
        }
      }, this.requestConfirmation = function(e) {
        o.emitConfirmationRequest(e)
      }, this.sendFunctionReply = function(e) {
        o.coordinator.sendFunctionReply(e)
      }
    }
  }(), yt = function() {
    function e() {
    } return e.prototype.makePurchase = function(e, t, n) {
      return Promise.resolve().then(function() {
        window.open(e.action_details.destination_url + "&br_id=" + x("" + t) + "&locale=" + n, "Twitch", "width=1024,height=600,scrollbars=yes")
      })
    }, e
  }(), bt = Object.create, vt = Object.getPrototypeOf, mt = {
  }, wt = function() {
    var e = Object.setPrototypeOf, t = arguments[0] || bt; return "function" == typeof e && vt(e(t(null), mt)) === mt
  }, xt = function() {
  }, kt = function(e) {
    return void 0 !== e && null !== e
  }, Et = {
    function: !0, object: !0
  }, Tt = function(e) {
    return kt(e) && Et[typeof e] || !1
  }, Pt = function(e) {
    if (!kt(e)) throw new TypeError("Cannot use null or undefined"); return e
  }, St = Object.create; wt() || (ft = Ht); ft && (1 !== ft.level || (Ct = {
  }, Ot = {
  }, It = {
    configurable: !1, enumerable: !1, writable: !0, value: void 0
  }, Object.getOwnPropertyNames(Object.prototype).forEach(function(e) {
    Ot[e] = "__proto__" !== e ? It : {
      configurable: !0, enumerable: !1, writable: !0, value: void 0
    }
  }), Object.defineProperties(Ct, Ot), Object.defineProperty(ft, "nullPolyfill", {
    configurable: !1, enumerable: !1, writable: !1, value: Ct
  }))); var Ct, Ot, It, At, Rt = Object.prototype.isPrototypeOf, Mt = Object.defineProperty, Ut = {
    configurable: !0, enumerable: !1, writable: !0, value: void 0
  }; At = function(e, t) {
    if (Pt(e), null === t || Tt(t)) return e; throw new TypeError("Prototype must be null or an object")
  }; var Lt, jt, Bt, qt, Ft, Nt, Dt, Vt, Wt, Ht = (Lt = function() {
    var e, t = Object.create(null), n = {
    }, i = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"); if (i) {
      try {
        (e = i.set).call(t, n)
      } catch (e) {
      } if (Object.getPrototypeOf(t) === n) return {
        set: e, level: 2
      }
    } return t.__proto__ = n, Object.getPrototypeOf(t) === n ? {
      level: 2
    } : ((t = {
    }).__proto__ = n, Object.getPrototypeOf(t) === n && {
      level: 1
    })
  }()) ? (2 === Lt.level ? Lt.set ? (Bt = Lt.set, jt = function(e, t) {
    return Bt.call(At(e, t), t), e
  }) : jt = function(e, t) {
    return At(e, t).__proto__ = t, e
  } : jt = function e(t, n) {
    var i; return At(t, n), (i = Rt.call(e.nullPolyfill, t)) && delete e.nullPolyfill.__proto__, null === n && (n = e.nullPolyfill), t.__proto__ = n, i && Mt(e.nullPolyfill, "__proto__", Ut), t
  }, Object.defineProperty(jt, "level", {
    configurable: !1, enumerable: !1, writable: !1, value: Lt.level
  })) : null, zt = wt() ? Object.setPrototypeOf : Ht, Gt = function(e) {
    if (!Tt(e)) throw new TypeError(e + " is not an Object"); return e
  }, Jt = Object.create(null), Kt = Math.random, Xt = Object.keys, Yt = function() {
    try {
      return Object.keys("primitive"), !0
    } catch (e) {
      return !1
    }
  }() ? Object.keys : function(e) {
    return Xt(kt(e) ? Object(e) : e)
  }, $t = Math.max, Qt = "function" == typeof (Ft = Object.assign) && (Ft(qt = {
    foo: "raz"
  }, {
      bar: "dwa"
    }, {
      trzy: "trzy"
    }), qt.foo + qt.bar + qt.trzy === "razdwatrzy") ? Object.assign : function(e, t) {
      var n, i, o, s = $t(arguments.length, 2); for (e = Object(Pt(e)), o = function(i) {
        try {
          e[i] = t[i]
        } catch (e) {
          n || (n = e)
        }
      }, i = 1; i < s; ++i)t = arguments[i], Yt(t).forEach(o); if (void 0 !== n) throw n; return e
    }, Zt = Array.prototype.forEach, en = Object.create, tn = function(e) {
      var t = en(null); return Zt.call(arguments, function(e) {
        kt(e) && function(e, t) {
          var n; for (n in e) t[n] = e[n]
        }(Object(e), t)
      }), t
    }, nn = function(e) {
      return "function" == typeof e
    }, on = "razdwatrzy", sn = String.prototype.indexOf, rn = "function" == typeof on.contains && !0 === on.contains("dwa") && !1 === on.contains("foo") ? String.prototype.contains : function(e) {
      return sn.call(this, e, arguments[1]) > -1
    }, an = n(function(e) {
      (e.exports = function(e, t) {
        var n, i, o, s, r; return arguments.length < 2 || "string" != typeof e ? (s = t, t = e, e = null) : s = arguments[2], null == e ? (n = o = !0, i = !1) : (n = rn.call(e, "c"), i = rn.call(e, "e"), o = rn.call(e, "w")), r = {
          value: t, configurable: n, enumerable: i, writable: o
        }, s ? Qt(tn(s), r) : r
      }).gs = function(e, t, n) {
        var i, o, s, r; return "string" != typeof e ? (s = n, n = t, t = e, e = null) : s = arguments[3], null == t ? t = void 0 : nn(t) ? null == n ? n = void 0 : nn(n) || (s = n, n = void 0) : (s = t, t = n = void 0), null == e ? (i = !0, o = !1) : (i = rn.call(e, "c"), o = rn.call(e, "e")), r = {
          get: t, set: n, configurable: i, enumerable: o
        }, s ? Qt(tn(s), r) : r
      }
    }), cn = Object.prototype.toString, un = cn.call(function() {
      return arguments
    }()), ln = function(e) {
      return cn.call(e) === un
    }, hn = Object.prototype.toString, dn = hn.call(""), pn = function(e) {
      return "string" == typeof e || e && "object" == typeof e && (e instanceof String || hn.call(e) === dn) || !1
    }, fn = function(e) {
      if ("function" != typeof e) throw new TypeError(e + " is not a function"); return e
    }, _n = {
      object: !0, symbol: !0
    }, gn = function(e) {
      if (!(t = e) || !("symbol" == typeof t || t.constructor && "Symbol" === t.constructor.name && "Symbol" === t[t.constructor.toStringTag])) throw new TypeError(e + " is not a symbol"); var t; return e
    }, yn = Object.create, bn = Object.defineProperties, vn = Object.defineProperty, mn = Object.prototype, wn = yn(null); if ("function" == typeof Symbol) {
      Nt = Symbol; try {
        String(Nt()), Wt = !0
      } catch (e) {
      }
    } var xn, kn = (xn = yn(null), function(e) {
      for (var t, n, i = 0; xn[e + (i || "")];)++i; return xn[e += i || ""] = !0, vn(mn, t = "@@" + e, an.gs(null, function(e) {
        n || (n = !0, vn(this, t, an(e)), n = !1)
      })), t
    }); Vt = function(e) {
      if (this instanceof Vt) throw new TypeError("Symbol is not a constructor"); return Dt(e)
    }; var En = Dt = function e(t) {
      var n; if (this instanceof e) throw new TypeError("Symbol is not a constructor"); return Wt ? Nt(t) : (n = yn(Vt.prototype), t = void 0 === t ? "" : String(t), bn(n, {
        __description__: an("", t), __name__: an("", kn(t))
      }))
    }; bn(Dt, {
      for: an(function(e) {
        return wn[e] ? wn[e] : wn[e] = Dt(String(e))
      }), keyFor: an(function(e) {
        var t; gn(e); for (t in wn) if (wn[t] === e) return t
      }), hasInstance: an("", Nt && Nt.hasInstance || Dt("hasInstance")), isConcatSpreadable: an("", Nt && Nt.isConcatSpreadable || Dt("isConcatSpreadable")), iterator: an("", Nt && Nt.iterator || Dt("iterator")), match: an("", Nt && Nt.match || Dt("match")), replace: an("", Nt && Nt.replace || Dt("replace")), search: an("", Nt && Nt.search || Dt("search")), species: an("", Nt && Nt.species || Dt("species")), split: an("", Nt && Nt.split || Dt("split")), toPrimitive: an("", Nt && Nt.toPrimitive || Dt("toPrimitive")), toStringTag: an("", Nt && Nt.toStringTag || Dt("toStringTag")), unscopables: an("", Nt && Nt.unscopables || Dt("unscopables"))
    }), bn(Vt.prototype, {
      constructor: an(Dt), toString: an("", function() {
        return this.__name__
      })
    }), bn(Dt.prototype, {
      toString: an(function() {
        return "Symbol (" + gn(this).__description__ + ")"
      }), valueOf: an(function() {
        return gn(this)
      })
    }), vn(Dt.prototype, Dt.toPrimitive, an("", function() {
      var e = gn(this); return "symbol" == typeof e ? e : e.toString()
    })), vn(Dt.prototype, Dt.toStringTag, an("c", "Symbol")), vn(Vt.prototype, Dt.toStringTag, an("c", Dt.prototype[Dt.toStringTag])), vn(Vt.prototype, Dt.toPrimitive, an("c", Dt.prototype[Dt.toPrimitive])); var Tn, Pn, Sn, Cn, On, In, An, Rn = function() {
      var e; if ("function" != typeof Symbol) return !1; e = Symbol("test symbol"); try {
        String(e)
      } catch (e) {
        return !1
      } return !!_n[typeof Symbol.iterator] && !!_n[typeof Symbol.toPrimitive] && !!_n[typeof Symbol.toStringTag]
    }() ? Symbol : En, Mn = Object.prototype.toString, Un = Mn.call(xt), Ln = "function" == typeof (Tn = Math.sign) && 1 === Tn(10) && -1 === Tn(-20) ? Math.sign : function(e) {
      return e = Number(e), isNaN(e) || 0 === e ? e : e > 0 ? 1 : -1
    }, jn = Math.abs, Bn = Math.floor, qn = Math.max, Fn = function(e) {
      return qn(0, (t = e, isNaN(t) ? 0 : 0 !== (t = Number(t)) && isFinite(t) ? Ln(t) * Bn(jn(t)) : t)); var t
    }, Nn = Rn.iterator, Dn = Array.isArray, Vn = Function.prototype.call, Wn = {
      configurable: !0, enumerable: !0, writable: !0, value: null
    }, Hn = Object.defineProperty, zn = "function" == typeof (Cn = Array.from) && (Sn = Cn(Pn = ["raz", "dwa"]), Boolean(Sn && Sn !== Pn && "dwa" === Sn[1])) ? Array.from : function(e) {
      var t, n, i, o, s, r, a, c, u, l, h, d = arguments[1], p = arguments[2]; if (e = Object(Pt(e)), kt(d) && fn(d), this && this !== Array && "function" == typeof (h = this) && Mn.call(h) === Un) t = this; else {
        if (!d) {
          if (ln(e)) return 1 !== (s = e.length) ? Array.apply(null, e) : ((o = new Array(1))[0] = e[0], o); if (Dn(e)) {
            for (o = new Array(s = e.length), n = 0; n < s; ++n)o[n] = e[n]; return o
          }
        } o = []
      } if (!Dn(e)) if (void 0 !== (u = e[Nn])) {
        for (a = fn(u).call(e), t && (o = new t), c = a.next(), n = 0; !c.done;)l = d ? Vn.call(d, p, c.value, n) : c.value, t ? (Wn.value = l, Hn(o, n, Wn)) : o[n] = l, c = a.next(), ++n; s = n
      } else if (pn(e)) {
        for (s = e.length, t && (o = new t), n = 0, i = 0; n < s; ++n)l = e[n], n + 1 < s && (r = l.charCodeAt(0)) >= 55296 && r <= 56319 && (l += e[++n]), l = d ? Vn.call(d, p, l, i) : l, t ? (Wn.value = l, Hn(o, i, Wn)) : o[i] = l, ++i; s = i
      } if (void 0 === s) for (s = Fn(e.length), t && (o = new t(s)), n = 0; n < s; ++n)l = d ? Vn.call(d, p, e[n], n) : e[n], t ? (Wn.value = l, Hn(o, n, Wn)) : o[n] = l; return t && (Wn.value = null, o.length = s), o
    }, Gn = Function.prototype.bind, Jn = Function.prototype.call, Kn = Object.keys, Xn = Object.prototype.propertyIsEnumerable, Yn = (On = "forEach", function(e, t) {
      var n, i = arguments[2], o = arguments[3]; return e = Object(Pt(e)), fn(t), n = Kn(e), o && n.sort("function" == typeof o ? Gn.call(o, e) : void 0), "function" != typeof On && (On = n[On]), Jn.call(On, n, function(n, o) {
        return Xn.call(e, n) ? Jn.call(t, i, e[n], n, e, o) : In
      })
    }), $n = Function.prototype.call, Qn = fn, Zn = Function.prototype.bind, ei = Object.defineProperty, ti = Object.prototype.hasOwnProperty; An = function(e, t, n) {
      var i, o = Pt(t) && Qn(t.value); return delete (i = function(e) {
        var t = Object(Pt(e)), n = arguments[1], i = Object(arguments[2]); if (t !== e && !n) return t; var o = {
        }; return n ? zn(n, function(t) {
          (i.ensure || t in e) && (o[t] = e[t])
        }) : Qt(o, e), o
      }(t)).writable, delete i.value, i.get = function() {
        return !n.overwriteDefinition && ti.call(this, e) ? o : (t.value = Zn.call(o, n.resolveContext ? n.resolveContext(this) : this), ei(this, e, t), this[e])
      }, i
    }; var ni, ii = Object.defineProperty, oi = Object.defineProperties, si = ni = function(e, t) {
      if (!(this instanceof ni)) return new ni(e, t); oi(this, {
        __list__: an("w", Pt(e)), __context__: an("w", t), __nextIndex__: an("w", 0)
      }), t && (fn(t.on), t.on("_add", this._onAdd), t.on("_delete", this._onDelete), t.on("_clear", this._onClear))
    }; oi(ni.prototype, Qt({
      constructor: an(ni), _next: an(function() {
        var e; if (this.__list__) return this.__redo__ && void 0 !== (e = this.__redo__.shift()) ? e : this.__nextIndex__ < this.__list__.length ? this.__nextIndex__++ : void this._unBind()
      }), next: an(function() {
        return this._createResult(this._next())
      }), _createResult: an(function(e) {
        return void 0 === e ? {
          done: !0, value: void 0
        } : {
            done: !1, value: this._resolve(e)
          }
      }), _resolve: an(function(e) {
        return this.__list__[e]
      }), _unBind: an(function() {
        this.__list__ = null, delete this.__redo__, this.__context__ && (this.__context__.off("_add", this._onAdd), this.__context__.off("_delete", this._onDelete), this.__context__.off("_clear", this._onClear), this.__context__ = null)
      }), toString: an(function() {
        return "[object Iterator]"
      })
    }, function(e) {
      var t = tn(arguments[1]); return null != t.resolveContext && fn(t.resolveContext), function(e, t) {
        var n = {
        }, i = arguments[2]; return fn(t), Yn(e, function(e, o, s, r) {
          n[o] = $n.call(t, i, e, o, s, r)
        }), n
      }(e, function(e, n) {
        return An(n, e, t)
      })
    }({
      _onAdd: an(function(e) {
        e >= this.__nextIndex__ || (++this.__nextIndex__, this.__redo__ ? (this.__redo__.forEach(function(t, n) {
          t >= e && (this.__redo__[n] = ++t)
        }, this), this.__redo__.push(e)) : ii(this, "__redo__", an("c", [e])))
      }), _onDelete: an(function(e) {
        var t; e >= this.__nextIndex__ || (--this.__nextIndex__, this.__redo__ && (-1 !== (t = this.__redo__.indexOf(e)) && this.__redo__.splice(t, 1), this.__redo__.forEach(function(t, n) {
          t > e && (this.__redo__[n] = --t)
        }, this)))
      }), _onClear: an(function() {
        this.__redo__ && function() {
          return Pt(this).length = 0, this
        }.call(this.__redo__), this.__nextIndex__ = 0
      })
    }))), ii(ni.prototype, Rn.iterator, an(function() {
      return this
    })), ii(ni.prototype, Rn.toStringTag, an("", "Iterator")); var ri, ai = n(function(e) {
      var t, n = Object.defineProperty; t = e.exports = function(e, i) {
        if (!(this instanceof t)) return new t(e, i); si.call(this, e), i = i ? rn.call(i, "key+value") ? "key+value" : rn.call(i, "key") ? "key" : "value" : "value", n(this, "__kind__", an("", i))
      }, zt && zt(t, si), t.prototype = Object.create(si.prototype, {
        constructor: an(t), _resolve: an(function(e) {
          return "value" === this.__kind__ ? this.__list__[e] : "key+value" === this.__kind__ ? [e, this.__list__[e]] : e
        }), toString: an(function() {
          return "[object Array Iterator]"
        })
      })
    }), ci = n(function(e) {
      var t, n = Object.defineProperty; t = e.exports = function(e) {
        if (!(this instanceof t)) return new t(e); e = String(e), si.call(this, e), n(this, "__length__", an("", e.length))
      }, zt && zt(t, si), t.prototype = Object.create(si.prototype, {
        constructor: an(t), _next: an(function() {
          if (this.__list__) return this.__nextIndex__ < this.__length__ ? this.__nextIndex__++ : void this._unBind()
        }), _resolve: an(function(e) {
          var t, n = this.__list__[e]; return this.__nextIndex__ === this.__length__ ? n : (t = n.charCodeAt(0)) >= 55296 && t <= 56319 ? n + this.__list__[this.__nextIndex__++] : n
        }), toString: an(function() {
          return "[object String Iterator]"
        })
      })
    }), ui = Rn.iterator, li = Array.isArray, hi = function(e) {
      if (null == (t = e) || !(li(t) || pn(t) || ln(t) || "function" == typeof t[ui])) throw new TypeError(e + " is not iterable"); var t; return e
    }, di = Rn.iterator, pi = function(e) {
      return "function" == typeof hi(e)[di] ? e[di]() : ln(e) ? new ai(e) : pn(e) ? new ci(e) : new ai(e)
    }, fi = Array.isArray, _i = Function.prototype.call, gi = Array.prototype.some, yi = "function" == typeof WeakMap && "[object WeakMap]" === Object.prototype.toString.call(new WeakMap), bi = Rn.toStringTag, vi = Array.isArray, mi = Object.defineProperty, wi = Object.prototype.hasOwnProperty, xi = Object.getPrototypeOf, ki = ri = function() {
      var e, t = arguments[0]; if (!(this instanceof ri)) throw new TypeError("Constructor requires 'new'"); return e = yi && zt && WeakMap !== ri ? zt(new WeakMap, xi(this)) : this, null != t && (vi(t) || (t = pi(t))), mi(e, "__weakMapData__", an("c", "$weakMap$" + function() {
        var e; do {
          e = Kt().toString(36).slice(2)
        } while (Jt[e]); return e
      }())), t ? (function(e, t) {
        var n, i, o, s, r, a, c, u, l = arguments[2]; if (fi(e) || ln(e) ? n = "array" : pn(e) ? n = "string" : e = pi(e), fn(t), o = function() {
          s = !0
        }, "array" !== n) if ("string" !== n) for (i = e.next(); !i.done;) {
          if (_i.call(t, l, i.value, o), s) return; i = e.next()
        } else for (a = e.length, r = 0; r < a && (c = e[r], r + 1 < a && (u = c.charCodeAt(0)) >= 55296 && u <= 56319 && (c += e[++r]), _i.call(t, l, c, o), !s); ++r); else gi.call(e, function(e) {
          if (_i.call(t, l, e, o), s) return !0
        })
      }(t, function(t) {
        Pt(t), e.set(t[0], t[1])
      }), e) : e
    }; yi && (zt && zt(ri, WeakMap), ri.prototype = Object.create(WeakMap.prototype, {
      constructor: an(ri)
    })), Object.defineProperties(ri.prototype, {
      delete: an(function(e) {
        return !!wi.call(Gt(e), this.__weakMapData__) && (delete e[this.__weakMapData__], !0)
      }), get: an(function(e) {
        if (wi.call(Gt(e), this.__weakMapData__)) return e[this.__weakMapData__]
      }), has: an(function(e) {
        return wi.call(Gt(e), this.__weakMapData__)
      }), set: an(function(e, t) {
        return mi(Gt(e), this.__weakMapData__, an("c", t)), this
      }), toString: an(function() {
        return "[object WeakMap]"
      })
    }), mi(ri.prototype, bi, an("c", "WeakMap")); var Ei = new (function() {
      var e, t; if ("function" != typeof WeakMap) return !1; try {
        e = new WeakMap([[t = {
        }, "one"], [{
        }, "two"], [{
        }, "three"]])
      } catch (e) {
        return !1
      } return "[object WeakMap]" === String(e) && "function" == typeof e.set && e.set({
      }, 1) === e && "function" == typeof e.delete && "function" == typeof e.has && "one" === e.get(t)
    }() ? WeakMap : ki); function Ti(e) {
      if (Ei.has(e)) return Ei.get(e); var t = e(); return Ei.set(e, t), t
    } var Pi, Si, Ci = function(e) {
      var t = h.newRequest("/api/channels/" + e, {
        method: "GET"
      }); return h.authRequest(t).then(function(e) {
        return e ? e._id : 0
      }).catch(function() {
        return 0
      })
    }, Oi = function(e, t, n) {
      return Ci(t).then(function(i) {
        if (0 === i) return {
          channel: null, channelId: 0, isFollowing: !1
        }; var o = h.newRequest("/v5/users/" + e + "/follows/channels/" + i, {
          method: "PUT", body: JSON.stringify({
            notifications: n
          })
        }); return h.authRequest(o).then(function() {
          return {
            channel: t, channelId: i, isFollowing: !0
          }
        }).catch(function() {
          return {
            channel: t, channelId: i, isFollowing: !1
          }
        })
      })
    }, Ii = function() {
      function t(t, n) {
        var i = this; this.loginId = t, this.tracker = n, this.close = function() {
          i.replyCallback({
            action: e.FunctionAction.FollowComplete, channel: i.channel, didFollow: !1
          }), i.tracker.trackEvent("extension_follow_fail", {
            target_channel: i.channel, target_channel_id: i.channelId, fail_reason: i.failReason
          })
        }, this.onModalResult = function(e) {
          i.replyCallback = e
        }, this.onOpen = function(e) {
          i.openCallback = function(t) {
            i.tracker.trackEvent("extension_follow_init", {
              target_channel: t.channel, target_channel_id: t.channelId
            }), e(t)
          }
        }, this.resultCallback = function(e) {
          e.didFollow ? (i.tracker.trackEvent("extension_follow_confirm", {
            target_channel: i.channel, target_channel_id: i.channelId
          }), i.follow(i.loginId, i.channel, e.notifications)) : i.close()
        }, this.follow = function(t, n, o) {
          Oi(t, n, o).then(function(t) {
            var n = t.channel, o = t.channelId, s = t.isFollowing, r = {
              action: e.FunctionAction.FollowComplete, channel: n, didFollow: s
            }; i.tracker.trackEvent("extension_follow", {
              target_channel: n, target_channel_id: o
            }), i.replyCallback(r)
          })
        }
      } return Object.defineProperty(t.prototype, "defaultResult", {
        get: function() {
          return {
            didFollow: !1, notifications: !1
          }
        }, enumerable: !0, configurable: !0
      }), t.prototype.open = function(e) {
        var t, n, i = this; if (this.channel = e.payload.channel, !this.loginId) return this.channelId = 0, this.openCallback && this.openCallback({
          channel: this.channel, channelId: 0, isFollowing: !1, isLoggedIn: !1
        }), void (this.failReason = Ze.LoggedOut); (t = this.loginId, n = this.channel, Ci(n).then(function(e) {
          if (0 === e) return {
            channel: null, channelId: 0, isFollowing: !1
          }; var i = h.newRequest("/v5/users/" + t + "/follows/channels/" + e, {
            method: "GET"
          }); return h.authRequest(i).then(function() {
            return {
              channel: n, channelId: e, isFollowing: !0
            }
          }).catch(function() {
            return {
              channel: n, channelId: e, isFollowing: !1
            }
          })
        })).then(function(e) {
          var t = e.channel, n = e.channelId, o = e.isFollowing; i.channelId = n, i.openCallback && i.openCallback({
            channel: t, channelId: n, isFollowing: o, isLoggedIn: !0
          }), i.failReason = null === t ? Ze.InvalidId : o ? Ze.AlreadyFollowed : Ze.Cancelled
        })
      }, t
    }(), Ai = function() {
      function e() {
        var e = this; this.close = function() {
        }, this.onOpen = function(t) {
          e.openCallback = t
        }, this.onModalResult = function(e) {
        }, this.resultCallback = function(e) {
        }
      } return Object.defineProperty(e.prototype, "defaultResult", {
        get: function() {
          return null
        }, enumerable: !0, configurable: !0
      }), e.prototype.open = function() {
        this.openCallback()
      }, e
    }(), Ri = function(e, t, n) {
      var i = h.newRequest("/v5/bits/extensions/is-eligible/" + e, {
        body: JSON.stringify({
          channel_id: t, extension_client_id: n
        }), method: "POST"
      }); return h.authRequest(i)
    }, Mi = function(e) {
      var t = h.newRequest("/v5/bits/extensions/use-bits/" + e, {
        method: "POST"
      }); return h.authRequest(t)
    }; (Si = Pi || (Pi = {
    })).UseBitsLinkUserFailure = "extension_use_bits_link_user_fail", Si.UseBitsFailure = "extension_use_bits_fail", Si.UseBitsInitialization = "extension_use_bits_init", Si.UseBitsConfirmation = "extension_use_bits_confirm", Si.UseBitsSuccess = "extension_use_bits_success"; var Ui, Li = function() {
      function t(t, n, i) {
        var o = this; this.loginId = t, this.tracker = n, this.pubsub = i, this.close = function(t) {
          void 0 === t && (t = !1), o.replyCallback({
            action: e.FunctionAction.UseBitsComplete, didConfirm: t, didUseBits: !1
          }), o.track(Pi.UseBitsFailure)
        }, this.onModalResult = function(e) {
          o.replyCallback = function(t) {
            o.onUseBitsPromptCompleted && o.onUseBitsPromptCompleted(t), o.loginId && o.offBitsBalanceUpdate(o.loginId), e(t)
          }
        }, this.onOpen = function(e) {
          o.openCallback = function(t) {
            o.track(Pi.UseBitsInitialization), e(t)
          }
        }, this.resultCallback = function(e) {
          e.didConfirm ? (o.track(Pi.UseBitsConfirmation), o.useBitsInExtension(o.transactionId, e.didConfirm)) : (o.failReason = tt.Cancelled, o.close())
        }, this.unsubscribeCallback = function() {
        }, this.useBitsInExtension = function(t, n) {
          A(o.extensionId, o.token, !0).then(function() {
            return Mi(t).then(function(t) {
              t.transaction_id; var i = {
                action: e.FunctionAction.UseBitsComplete, didConfirm: n, didUseBits: !0
              }; o.track(Pi.UseBitsSuccess), o.replyCallback(i)
            }).catch(function(e) {
              o.handleUseBitsError(e, tt.UseBitsFailure, Pi.UseBitsFailure)
            })
          }).catch(function(e) {
            o.handleUseBitsError(e, tt.UnableToLinkUser, Pi.UseBitsLinkUserFailure)
          })
        }, this.handleUseBitsError = function(e, t, n) {
          o.failReason = t, o.openCallback ? (o.track(n), o.openCallback({
            error: e
          })) : o.close(!0)
        }, this.track = function(e, t) {
          void 0 === t && (t = {
          }); var n = {
            target_channel_id: o.channelId, user_id: o.loginId, client_id: o.clientId, fail_reason: o.failReason, extension_name: o.extensionName, extension_item_label: o.extensionItemLabel, sku: o.sku, transaction_id: o.transactionId, bits_balance: o.bitsBalance, extension_id: o.extensionId, bits_required: o.bitsRequired
          }; t = Object.assign(n, t), o.tracker.trackEvent(e, t)
        }
      } return Object.defineProperty(t.prototype, "defaultResult", {
        get: function() {
          return {
            didConfirm: !1, didUseBits: !1
          }
        }, enumerable: !0, configurable: !0
      }), t.prototype.open = function(e) {
        if (void 0 === e.payload) {
          var t = e.error || new Error("Payload and Error were both undefined"); return this.openCallback && this.openCallback({
            error: t
          }), void (this.failReason = tt.UserIneligible)
        } var n = e.payload, i = n.channelId, o = n.bitsRequired, s = n.sku, r = n.clientId, a = n.extensionItemLabel, c = n.extensionName, u = n.transactionId, l = n.bitsBalance, h = n.extensionId, d = n.token, p = n.onUseBitsPromptCompleted; this.channelId = i, this.clientId = r, this.transactionId = u, this.extensionName = c, this.extensionItemLabel = a, this.sku = s, this.bitsBalance = l, this.bitsRequired = o, this.extensionId = h, this.token = d, this.onUseBitsPromptCompleted = p, this.loginId ? (this.openCallback && (this.onBitsBalanceUpdate(this.loginId), this.openCallback({
          payload: {
            channelId: i, clientId: r, userId: this.loginId, isLoggedIn: !!this.loginId, sku: s, bitsRequired: o, transactionId: u, extensionItemLabel: a, extensionName: c, bitsBalance: l, track: this.track
          }
        })), this.channelId || (this.failReason = tt.InvalidID)) : this.failReason = tt.LoggedOut
      }, t.prototype.onBitsBalanceUpdate = function(e) {
        var t = this, n = h.authToken; this.unsubscribeCallback = this.pubsub.subscribe({
          token: n, topic: "user-bits-updates-v1." + e, success: function() {
          }, failure: function() {
          }, message: function(e) {
            t.bitsBalance = e.data.balance, t.openCallback({
              payload: {
                channelId: t.channelId, clientId: t.clientId, userId: t.loginId, isLoggedIn: !!t.loginId, sku: t.sku, bitsRequired: t.bitsRequired, transactionId: t.transactionId, extensionItemLabel: t.extensionItemLabel, extensionName: t.extensionName, bitsBalance: t.bitsBalance, track: t.track
              }
            })
          }
        })
      }, t.prototype.offBitsBalanceUpdate = function(e) {
        this.unsubscribeCallback && this.unsubscribeCallback()
      }, t
    }(), ji = (Ui = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(e, t) {
      e.__proto__ = t
    } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
    }, function(e, t) {
      function n() {
        this.constructor = e
      } Ui(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }), Bi = Object.assign || function(e) {
      for (var t, n = 1, i = arguments.length; n < i; n++) {
        t = arguments[n]; for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
      } return e
    }, qi = ["allow-forms", "allow-scripts", "allow-same-origin"], Fi = 700, Ni = 300, Di = function(t) {
      function n(n) {
        var i = t.call(this) || this; return i.useBitsInProgress = !1, i.handleUserAction = {
          click: function(e) {
            var t = e.payload, n = this.iframe.getBoundingClientRect(), i = n.width, o = n.height; this.tracker.trackEvent("extension_click", {
              px_mouse_coord_x: t.clientX, px_mouse_coord_y: t.clientY, pct_mouse_coord_x: t.clientX / i * 100, pct_mouse_coord_y: t.clientY / o * 100
            })
          }, dblclick: function(e) {
            this.throttleDblClick(this.iframe, e)
          }, mousemove: function(e) {
            var t = e.payload, n = this.iframe.getBoundingClientRect(), i = n.left, o = n.top; this.iframe.dispatchEvent(new MouseEvent("mousemove", {
              bubbles: !0, clientX: t.clientX, clientY: t.clientY, screenX: i + t.clientX, screenY: o + t.clientY
            }))
          }, focusin: function(t) {
            t.payload; if (this.params.anchor === e.ExtensionAnchor.Overlay) {
              for (var n = this.iframe; n && !n.hasAttribute("tabindex");)n = n.parentElement; n && n.focus()
            }
          }
        }, i.hasSentViewEvent = !1, i.hasBootstrapped = !1, i.hasLoaded = !1, i.throttleDblClick = a(function(e, t) {
          var n = t.payload, i = e.getBoundingClientRect(), o = i.left, s = i.top; e.dispatchEvent(new MouseEvent("dblclick", {
            bubbles: !0, clientX: n.clientX, clientY: n.clientY, screenX: o + n.clientX, screenY: s + n.clientY
          }))
        }, 1e3), i.isVisible = !0, i.destroy = function() {
          i.unsetupListeners(), i.contextManager.destroy(), i.coordinator.destroy(), i.iframe.remove()
        }, i.linkIdentity = function() {
          var e = i.extension.clientId, t = M.getToken(e); t.isLinked || A(e, t.token, !0).then(function(t) {
            var n = t.token; M.registerToken(e, n), i.tracker.trackEvent("extension_ui_interaction_client", {
              extension_interaction: "grant"
            })
          })
        }, i.unlinkIdentity = function() {
          var e = i.extension.clientId, t = M.getToken(e); t.isLinked && A(e, t.token, !1).then(function(t) {
            var n = t.token; M.registerToken(e, n), i.tracker.trackEvent("extension_ui_interaction_client", {
              extension_interaction: "revoke"
            })
          })
        }, i.visibilityChanged = function() {
          if (!i.hasSentViewEvent && i.params.anchor === e.ExtensionAnchor.Panel && i.params.mode === e.ExtensionMode.Viewer) {
            var t = r.getElementBoundingClientRect(i.iframe), n = t.bottom - t.top, o = r.getWindowInnerHeight(); 100 * (Math.min(Math.max(o - t.top, 0), n) / n) >= 75 && (i.tracker.trackEvent("extension_view", {
              pct_view_visible: 75, px_view_visible: Math.floor(75 * n / 100)
            }), i.hasSentViewEvent = !0)
          }
        }, i.setVisible = function(e) {
          if (i.hasLoaded && i.isVisible !== e) {
            i.isVisible = e; var t = e ? i.contextManager.context : null; i.coordinator.sendVisibilityChanged(e, t)
          }
        }, i.setPosition = function(e) {
          i.coordinator.sendPositionChange(e)
        }, i.buildTracker = function() {
          var e = i.params; return e.extensionTracker || new ct({
            anchor: e.anchor, dobbin: e.dobbin, extension: i.extension, extensionMode: e.mode, iframe: i.iframe, requiredProps: {
              login: e.trackingProperties.login, login_id: e.loginId, channel: e.trackingProperties.channel, channel_id: e.channelId, device_id: e.trackingProperties.device_id, platform: e.trackingProperties.platform, player_type: e.trackingProperties.player_type, locale: i.locale
            }
          })
        }, i.buildContextManager = function() {
          var e = i.params; return e.contextManager || new rt(e.mode)
        }, i.buildCoordinator = function() {
          return i.params.extensionCoordinator || new _t(i.iframe)
        }, i.buildFunctionManager = function() {
          return i.params.functionManager || new gt(i.coordinator, i.params.loginId, i.emitConfirmationRequest)
        }, i.buildPurchaseService = function() {
          return i.params.purchaseService || new yt
        }, i.getExtensionHeight = function() {
          var t = i.params.mode, n = i.extension.panelHeight; return t === e.ExtensionMode.Config ? Fi : n ? Number(n) : Ni
        }, i.getDefaultAnchorAttributes = function() {
          var t = {
          }; return i.params.mode === e.ExtensionMode.Viewer && i.extensionOptions.platform !== e.ExtensionPlatform.Mobile && (t.scrolling = "no"), t
        }, i.getAnchorAttributes = function() {
          var t = {
          }; switch (i.params.anchor) {
            case e.ExtensionAnchor.Panel: if (i.extensionOptions.platform === e.ExtensionPlatform.Mobile) {
              t.style = "height: 100%;"; break
            } var n = i.getExtensionHeight(); t.style = "height: " + n + "px;"; break; case e.ExtensionAnchor.Overlay: case e.ExtensionAnchor.Component: case e.ExtensionAnchor.Hidden: return i.getDefaultAnchorAttributes()
          }return t
        }, i.applyAnchorAttributes = function(e, t) {
          var n = i.getAnchorAttributes().style; n && e.setAttribute("style", n)
        }, i.createSupervisorIFrame = function(t, n, o) {
          var s = i.params.mode, r = document.createElement("iframe"); switch (r.setAttribute("class", t), r.setAttribute("sandbox", qi.join(" ")), r.setAttribute("frameBorder", "0"), r.setAttribute("scrolling", "no"), r.setAttribute("src", z.supervisorURL), s) {
            case e.ExtensionMode.Viewer: i.applyAnchorAttributes(r, n), i.applyViewerSandboxAttrs(r); break; case e.ExtensionMode.Dashboard: var a = i.extension.panelHeight || Ni; r.setAttribute("style", "height: " + a + "px;"), i.applyConfigSandboxAttrs(r); break; case e.ExtensionMode.Config: r.setAttribute("style", "width: 100%; height: " + Fi + "px;"), i.applyConfigSandboxAttrs(r)
          }return r.style.display = "none", r
        }, i.initSupervisedExtension = function() {
          var t = i.params, n = t.anchor, o = t.mode, s = i.extensionOptions.platform, r = i.extension.getViewerUrlForContext(s, o, n), a = ""; switch (o) {
            case e.ExtensionMode.Viewer: a = i.createViewerSandboxAttrs(); break; case e.ExtensionMode.Dashboard: case e.ExtensionMode.Config: a = i.getConfigWhitelist()
          }var c = i.getAnchorAttributes(); c.sandbox = a || qi.join(" "); var u = {
            extensionURL: function(e, t) {
              var n = document.createElement("a"); n.href = e; var i = n.search.slice(1), o = i.split("&").filter(function(e) {
                return e.length > 0
              }), s = o.length > 0 ? e.slice(0, e.length - i.length - 1) : e, r = Object.keys(t).reduce(function(e, n) {
                var i = t[n]; return i && e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i.toString())), e
              }, o); return r.length > 0 ? s + "?" + r.join("&") : e
            }(r, i.extensionOptions), hostOrigin: window.location.origin, iframeAttrs: c
          }; i.coordinator.sendSupervisorInit(u)
        }, i.getExtensionAuth = function() {
          var e = M.getToken(i.extension.clientId); return {
            channelId: e.payload.channel_id, clientId: i.extension.clientId, token: e.token, userId: e.payload.opaque_user_id
          }
        }, i.onMouseEnter = function(e) {
          i.tracker.trackEvent("extension_mouseenter", {
          })
        }, i.handleToken = function(e, t) {
          i.hasLoaded && !e.isNearExpiration && (i.hasBootstrapped ? e.isLinked !== t.isLinked ? i.reloadExtension() : i.sendAuthUpdate(e) : i.sendBootstrap(e))
        }, i.onExtensionLoaded = function(t) {
          i.hasLoaded = !0, i.contextManager.initializeContext(), i.tracker.trackEvent("extension_helper_load_success", {
          }), i.iframe.style.removeProperty("display"); var n = M.getToken(i.extension.clientId); i.handleToken(n, n), i.emit(e.ExtensionFrameEvents.ExtensionFrameLoaded, i.extension.asObject), i.sendExtensionProductPrices(), i.sendExtensionBitsProductPrices()
        }, i.onExtensionUserAction = function(e) {
          i.handleUserAction[e.payload.type].call(i, e)
        }, i.onExtensionPubSubRecived = function(e) {
          var t = e.payload, n = e.payload.sequenceNumber; if (i.lastSequenceNumber) {
            i.lastSequenceTime !== t.sequenceStart && (i.lastSequenceNumber = 0); for (var o = i.lastSequenceNumber + 1; o < n; o++)t.sequenceNumber = o, i.tracker.trackEvent("extension_pubsub_missed", t)
          } i.lastSequenceNumber = n, i.lastSequenceTime = t.sequenceStart, t.sequenceNumber = n, i.tracker.trackEvent("extension_pubsub_received", t)
        }, i.onExtensionNetworkTraffic = function(e) {
          i.tracker.trackEvent("extension_network_request", {
            request_duration: e.payload.duration, request_end_time: e.payload.endTime, request_file_type: s(e.payload.url), request_start_time: e.payload.startTime, request_url: e.payload.url
          })
        }, i.emitConfirmationRequest = function(t) {
          i.emit(e.ExtensionFrameEvents.RequestModal, t)
        }, i.sendAuthUpdate = function(e) {
          i.sendIdentityLinkUpdate(e), i.coordinator.sendExtensionAuth(i.getExtensionAuth())
        }, i.sendBootstrap = function(e) {
          i.hasBootstrapped = !0, i.sendIdentityLinkUpdate(e), i.coordinator.sendExtensionBootstrap(i.getExtensionAuth())
        }, i.sendIdentityLinkUpdate = function(t) {
          var n = t.isUserLoggedIn && i.canRequestIdLink; i.emit(e.ExtensionFrameEvents.IdentityLinked, t.isLinked, n)
        }, i.beginPurchase = function(e) {
          var t = e.payload.sku, n = i.extension.vendorCode; i.extensionProducts.then(function(e) {
            var o = e.products.find(function(e) {
              return e.sku === t
            }); if (!o) throw new Error("An extension product with the SKU " + t + " could not be found."); var s = {
              asin: o.asin, developer_name: o.developer_name, item_name: o.title, item_description: o.description, item_description_short: o.short_description, item_price: o.price.price, item_price_currency: o.price.currency_unit, vendor_code: n, sku: o.sku
            }; i.tracker.trackEvent("extension_start_buy", s), i.onBeginPurchase && i.onBeginPurchase(i.formatExtensionProductForDisplay(o), function() {
              return i.tracker.trackEvent("extension_confirm_buy", s), Promise.resolve().then(function() {
                i.linkIdentity()
              }).then(function() {
                i.purchaseService.makePurchase(o, i.params.channelId, i.locale)
              })
            })
          })
        }, i.useBits = function(t) {
          if (!i.useBitsInProgress) {
            i.useBitsInProgress = !0; var n = M.getToken(i.extension.clientId), o = Ri(t.sku, n.payload.channel_id, i.extension.clientId), s = i.extensionBitsProducts, r = {
              action: e.FunctionAction.UseBitsPromptRequired
            }; Promise.all([o, s]).then(function(e) {
              var o = e[0], s = e[1], a = o.bits_required, c = o.transaction_id, u = o.prompt_required, l = o.bits_balance, h = s.products; if (!i.useBitsPromptRequired(u, l, a)) throw new Error("Use Bits always requires a prompt for now"); var d = h.find(function(e) {
                return e.sku === t.sku
              }), p = d ? d.displayName : ""; r.payload = {
                channelId: n.payload.channel_id, clientId: i.extension.clientId, sku: t.sku, bitsRequired: a, transactionId: c, extensionItemLabel: p, extensionName: i.extension.name, bitsBalance: l, extensionId: i.extension.id, token: n.token, onUseBitsPromptCompleted: i.onUseBitsPromptCompleted
              }, i.openBitsConfirmationModal(r)
            }).catch(function(e) {
              r.error = e, i.openBitsConfirmationModal(r)
            })
          }
        }, i.openBitsConfirmationModal = function(t) {
          i.coordinator.emit(e.FunctionAction.UseBitsPromptRequired, t)
        }, i.useBitsPromptRequired = function(e, t, n) {
          return void 0 === e && (e = !1), e || t < n
        }, i.onUseBitsPromptCompleted = function(e) {
          i.useBitsInProgress = !1, e.didConfirm && e.didUseBits && i.showUseBitsSuccess()
        }, i.onContextUpdate = function(e, t) {
          i.isVisible && i.coordinator.sendContext(e, t)
        }, i.setupListeners = function() {
          i.eventListeners = [{
            target: i.iframe, event: "mouseenter", callback: i.onMouseEnter.bind(i)
          }], i.eventListeners.forEach(function(e) {
            e.target.addEventListener(e.event, e.callback)
          }), i.contextManager.on("context", i.onContextUpdate), i.coordinator.on(e.SupervisorAction.SupervisorReady, i.initSupervisedExtension), i.coordinator.on(e.ExtensionAction.TwitchExtLoaded, i.onExtensionLoaded), i.coordinator.on(e.ExtensionAction.TwitchExtNetworkTiming, i.onExtensionNetworkTraffic), i.coordinator.on(e.ExtensionAction.TwitchExtUserAction, i.onExtensionUserAction), i.onBeginPurchase && i.coordinator.on(e.ExtensionAction.TwitchExtBeginPurchase, i.beginPurchase), i.coordinator.on(e.ExtensionAction.TwitchExtBitsOnHover, i.showBitsBalance), i.coordinator.on(e.ExtensionAction.TwitchExtUseBits, i.useBits), i.coordinator.on(e.ExtensionAction.TwitchExtPubSubReceived, i.onExtensionPubSubRecived), M.subscribe(i.extension.clientId, i.handleToken); var t = M.getToken(i.extension.clientId); t && !t.isNearExpiration && i.handleToken(t, t)
        }, i.reloadExtension = function() {
          i.hasLoaded = !1, i.hasBootstrapped = !1, i.coordinator.sendExtensionReloadMessage()
        }, i.unsetupListeners = function() {
          i.eventListeners.forEach(function(e) {
            e.target.removeEventListener(e.event, e.callback)
          }), i.contextManager.off("context", i.coordinator.sendContext), i.coordinator.off(e.ExtensionAction.TwitchExtLoaded, i.onExtensionLoaded), i.coordinator.off(e.ExtensionAction.TwitchExtNetworkTiming, i.onExtensionNetworkTraffic), i.coordinator.off(e.ExtensionAction.TwitchExtUserAction, i.onExtensionUserAction), i.unregisterFunctionModals(), M.unsubscribe(i.extension.clientId, i.handleToken)
        }, i.registerFunctionModals = function() {
          i.functionManager.registerFunctionModal(e.FunctionAction.FollowAction, new Ii(i.params.loginId, i.tracker)), i.canRequestIdLink && i.functionManager.registerFunctionModal(e.FunctionAction.IdShareRequest, new Ai), i.extension.bitsEnabled && i.functionManager.registerFunctionModal(e.FunctionAction.UseBitsPromptRequired, new Li(String(i.params.loginId), i.tracker, new ze))
        }, i.unregisterFunctionModals = function() {
          i.functionManager.unregisterFunctionModal(e.FunctionAction.FollowAction), i.extension.bitsEnabled && i.functionManager.unregisterFunctionModal(e.FunctionAction.UseBitsPromptRequired)
        }, i.handlePurchaseCompleted = function(e) {
          var t = e.msg.sku; i.extensionProducts.then(function(e) {
            e.products.find(function(e) {
              return e.sku === t
            }) && i.coordinator.sendExtensionReloadEntitlementsMessage()
          })
        }, i.showBitsBalance = function() {
          i.emit(e.ExtensionFrameEvents.ShowBitsBalance)
        }, i.showUseBitsSuccess = function() {
          i.emit(e.ExtensionFrameEvents.ShowUseBitsSuccess)
        }, i.handleBitsTransactionCompleted = function(t) {
          var n = ht.Other; String(i.params.loginId) === t.user_id && (n = ht.CurrentUser); var o = {
            sku: t.sku, displayName: t.sku, cost: {
              amount: "", type: ""
            }
          }; i.extensionBitsProducts.then(function(s) {
            var r = s.products.find(function(e) {
              return e.sku === t.sku
            }); i.coordinator.sendBitsTransactionCompleteMessage({
              action: e.ExtensionAction.TwitchExtBitsTransactionComplete, product: r || o, transactionId: t.transaction_id, userId: t.user_id, displayName: t.display_name, transactionReceipt: t.transactionReceipt, initiator: n
            })
          }).catch(function() {
            i.coordinator.sendBitsTransactionCompleteMessage({
              action: e.ExtensionAction.TwitchExtBitsTransactionComplete, product: o, transactionId: t.transaction_id, userId: t.user_id, displayName: t.display_name, transactionReceipt: t.transactionReceipt, initiator: n
            })
          })
        }, i.extension = new H(n.extension), i.params = Bi({
          platform: e.ExtensionPlatform.Web
        }, n, {
            mode: n.platform === e.ExtensionPlatform.Mobile ? e.ExtensionMode.Viewer : n.mode
          }), i.iframe = i.createSupervisorIFrame(n.iframeClassName, n.anchor, i.extensionOptions), void 0 !== n.onBeginPurchase && (i.onBeginPurchase = n.onBeginPurchase), i.setupListeners(), i.extension.token && !M.getToken(i.extension.clientId) && M.registerToken(i.extension.clientId, i.extension.token), i.registerFunctionModals(), i.tracker.trackEvent("extension_render", {
          }), n.parentElement.appendChild(i.iframe), i.visibilityChanged(), i.params.loginId && Xe.onPurchaseCompleted(i.params.loginId, i.handlePurchaseCompleted), Xe.onBitsTransactionCompleted(i.params.channelId, i.params.extension.clientId, i.params.loginId, i.handleBitsTransactionCompleted), i
      } return ji(n, t), Object.defineProperty(n.prototype, "tracker", {
        get: function() {
          return Ti(this.buildTracker)
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(n.prototype, "contextManager", {
        get: function() {
          return Ti(this.buildContextManager)
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(n.prototype, "coordinator", {
        get: function() {
          return Ti(this.buildCoordinator)
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(n.prototype, "extensionOptions", {
        get: function() {
          return {
            anchor: this.params.anchor, language: this.language, mode: this.params.mode, state: L[this.extension.state], platform: this.params.platform
          }
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(n.prototype, "functionManager", {
        get: function() {
          return Ti(this.buildFunctionManager)
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(n.prototype, "language", {
        get: function() {
          return this.params.language || "en"
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(n.prototype, "locale", {
        get: function() {
          return this.params.locale || "en-US"
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(n.prototype, "purchaseService", {
        get: function() {
          return Ti(this.buildPurchaseService)
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(n.prototype, "canRequestIdLink", {
        get: function() {
          var e = M.getToken(this.extension.clientId); return !e.isBroadcaster && (e.isLinked || this.extension.requestIdentityLink)
        }, enumerable: !0, configurable: !0
      }), n.prototype.createViewerSandboxAttrs = function() {
        var t, n = this.params, i = n.anchor, o = n.mode, s = this.extension.whitelistedPanelUrls, r = (t = this.params.channelId, [137512364, 188863650, 188864445, 190160460, 192718746, 138600360, 138601808].indexOf(t) > -1), a = i === e.ExtensionAnchor.Panel && s.length && o === e.ExtensionMode.Viewer; return r || a ? qi.concat(["allow-popups", "allow-popups-to-escape-sandbox"]).join(" ") : qi.join(" ")
      }, n.prototype.getConfigWhitelist = function() {
        return this.extension.whitelistedConfigUrls.length ? qi.concat(["allow-popups", "allow-popups-to-escape-sandbox"]).join(" ") : qi.join(" ")
      }, n.prototype.applyViewerSandboxAttrs = function(e) {
        e.setAttribute("sandbox", this.createViewerSandboxAttrs())
      }, n.prototype.applyConfigSandboxAttrs = function(e) {
        e.setAttribute("sandbox", this.getConfigWhitelist())
      }, Object.defineProperty(n.prototype, "extensionProducts", {
        get: function() {
          var e = this.extensionProductsCache; if (void 0 === e) {
            var t = this.extension, n = t.sku, i = t.vendorCode; this.extension.isMonetized ? (this.extensionProductsCache = function(e, t, n) {
              var i = new m; i.append("vendor_code", e), i.append("sku", t), i.append("language", n); var o = "/v5/extensions/products?" + i, s = h.newRequest(o, {
                method: "GET"
              }); return O(s)
            }(i, n, this.language), e = this.extensionProductsCache) : e = Promise.resolve({
              products: []
            })
          } return e
        }, enumerable: !0, configurable: !0
      }), Object.defineProperty(n.prototype, "extensionBitsProducts", {
        get: function() {
          var e, t, n = this.extensionBitsProductsCache; if (void 0 === n) {
            var i = this.extension.clientId; this.extensionBitsProductsCache = (e = "twitch.ext." + i, t = h.newRequest("/v5/bits/extensions/" + e + "/products", {
              method: "GET"
            }), h.authRequest(t)), n = this.extensionBitsProductsCache
          } return n
        }, enumerable: !0, configurable: !0
      }), n.prototype.formatExtensionProductForDisplay = function(e) {
        return {
          description: e.description, developerName: e.developer_name, displayPrice: ut(e.price.price, e.price.currency_unit), extensionName: this.extension.name, shortDescription: e.short_description, sku: e.sku, title: e.title
        }
      }, n.prototype.sendExtensionProductPrices = function() {
        var e = this; this.extensionProducts.then(function(t) {
          e.extension.isMonetized && e.coordinator.sendExtensionProductPricesMessage(t)
        })
      }, n.prototype.sendExtensionBitsProductPrices = function() {
        var e = this; this.extension.bitsEnabled ? this.extensionBitsProducts.then(function(t) {
          var n = t.products.map(function(e) {
            return {
              cost: e.cost, displayName: e.displayName, sku: e.sku
            }
          }); e.coordinator.sendBitsProductsMessage(n)
        }) : this.coordinator.sendBitsProductsMessage([])
      }, n
    }(i); var Vi = function() {
      function e() {
      } return e.ExtensionFrame = Di, e.ExtensionService = Xe, e
    }(); e.extensionService = Xe, e.ExtensionCoordinator = Vi, e.ExtensionFrame = Di, e.Extension = H, e.ExtensionEventActions = W, e.ExtensionStateMap = L, e.DefaultZoomPixelWidth = F, e.DEFAULT_PANEL_HEIGHT = 300, e.getComponentPositionFromView = function(e, t, n) {
      return {
        x: n.x * e / 1e4, y: n.y * t / 1e4
      }
    }, e.getComponentSizeFromView = function(e, t, n) {
      var i = n.aspectWidth / 1e4, o = n.aspectHeight / 1e4, s = n.zoomPixels || F, r = e * i, a = t * o; return {
        width: Math.floor(r), height: Math.floor(a), zoomScale: r / s
      }
    }, Object.defineProperty(e, "__esModule", {
      value: !0
    })
});
