!function(e) {
  function t(i) {
    if (n[i]) return n[i].exports; var o = n[i] = {
      i: i, l: !1, exports: {
      }
    }; return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
  } var n = {
  }; t.m = e, t.c = n, t.d = function(e, n, i) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1, enumerable: !0, get: i
    })
  }, t.n = function(e) {
    var n = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    }; return t.d(n, "a", n), n
  }, t.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, t.p = "", t(t.s = 51)
}([function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ExtensionEventActions = void 0; var i = n(31); Object.keys(i).forEach(function(e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
      enumerable: !0, get: function() {
        return i[e]
      }
    })
  }); var o = n(64); Object.keys(o).forEach(function(e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
      enumerable: !0, get: function() {
        return o[e]
      }
    })
  }); var s = n(19); Object.keys(s).forEach(function(e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
      enumerable: !0, get: function() {
        return s[e]
      }
    })
  }); var r = n(65); Object.keys(r).forEach(function(e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
      enumerable: !0, get: function() {
        return r[e]
      }
    })
  }); var a = n(66); Object.keys(a).forEach(function(e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
      enumerable: !0, get: function() {
        return a[e]
      }
    })
  }); var c = n(67); Object.keys(c).forEach(function(e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
      enumerable: !0, get: function() {
        return c[e]
      }
    })
  }); t.ExtensionEventActions = [o.SupervisorAction.SupervisorReady, i.ExtensionAction.TwitchExtLoaded, i.ExtensionAction.TwitchExtLongtask, i.ExtensionAction.TwitchExtUserAction, i.ExtensionAction.TwitchExtNetworkTiming, i.ExtensionAction.TwitchExtBeginPurchase, i.ExtensionAction.TwitchExtBitsOnHover, i.ExtensionAction.TwitchExtUseBits, i.ExtensionAction.TwitchExtPubSubReceived, s.FunctionAction.FollowAction, s.FunctionAction.FollowStatusRequest, s.FunctionAction.IdShareRequest]
}, function(e, t, n) {
  "use strict"; var i = n(8); e.exports = function(e) {
    if (!i(e)) throw new TypeError("Cannot use null or undefined"); return e
  }
}, function(e, t, n) {
  "use strict"; e.exports = n(105)() ? Symbol : n(106)
}, function(e, t, n) {
  "use strict"; e.exports = function(e) {
    if ("function" != typeof e) throw new TypeError(e + " is not a function"); return e
  }
}, function(e, t, n) {
  "use strict"; function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }); var o = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), s = n(5), r = function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }(s), a = function() {
  }, c = a, u = {
  }, l = {
    DEBUG: 1, INFO: 2, WARNING: 3, ERROR: 4, CRITICAL: 5
  }, f = l.WARNING, h = function() {
    function e(t) {
      i(this, e), this._opts = t
    } return o(e, [{
      key: "debug", value: function(e) {
        f <= l.DEBUG && this._log("DEBUG: " + e)
      }
    }, {
      key: "info", value: function(e) {
        f <= l.INFO && this._log("INFO: " + e)
      }
    }, {
      key: "warning", value: function(e) {
        f <= l.WARNING && this._log("WARNING: " + e)
      }
    }, {
      key: "error", value: function(e) {
        f <= l.ERROR && this._log("ERROR: " + e)
      }
    }, {
      key: "critical", value: function(e) {
        f <= l.CRITICAL && this._log("CRITICAL: " + e)
      }
    }, {
      key: "_log", value: function(e) {
        var t = this._opts.prefix + e; this._opts.logFunc ? this._opts.logFunc(t) : c(t)
      }
    }]), e
  }(), d = {
    setLogger: function(e) {
      c = "function" == typeof e ? e : a
    }, setLevel: function() {
      var e = (r.default.urlParams.pubsub_log_level || "").toUpperCase(); if (e) {
        var t = l[e]; if (t) return f = t, function() {
        }
      } return function(e) {
        f = e ? l[e.toUpperCase()] || l.WARNING : l.WARNING
      }
    }(), _getLogger: function(e) {
      return u[e] || (u[e] = new h({
        prefix: "pubsub.js [" + e + "] "
      })), u[e]
    }, _noopLogger: new h({
      prefix: "", logFunc: a
    })
  }, p = window.console; p && p.log && (p.log.apply ? d.setLogger(function() {
    p.log.apply(p, arguments)
  }) : d.setLogger(function() {
    for (var e = [], t = 0; t < arguments.length; ++t)e.push(arguments[t]); p.log(e.join(" "))
  })), t.default = d
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }); var i = {
  }; i.randomInt = function(e) {
    return Math.floor(Math.random() * e)
  }, i.time = {
    seconds: function(e) {
      return 1e3 * e
    }, now: function() {
      return (new Date).getTime()
    }
  }, i.urlParams = function() {
    for (var e = {
    }, t = window.location.search.substr(1), n = t.split("&"), i = 0; i < n.length; ++i) {
      var o = n[i].split("="); e[decodeURIComponent(o[0])] = o.length > 1 ? decodeURIComponent(o[1]) : ""
    } return e
  }(), i.generateString = function(e) {
    for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", o = 0; o < e; o++)t += n.charAt(i.randomInt(n.length)); return t
  }, i.inIframe = function() {
    try {
      return window.self !== window.top
    } catch (e) {
      return !0
    }
  }, t.default = i
}, function(e, t, n) {
  "use strict"; function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }); var o = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), s = n(7), r = function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }(s), a = function() {
  }, c = a, u = {
  }, l = {
    DEBUG: 1, INFO: 2, WARNING: 3, ERROR: 4, CRITICAL: 5
  }, f = l.WARNING, h = function() {
    function e(t) {
      i(this, e), this._opts = t
    } return o(e, [{
      key: "debug", value: function(e) {
        f <= l.DEBUG && this._log("DEBUG: " + e)
      }
    }, {
      key: "info", value: function(e) {
        f <= l.INFO && this._log("INFO: " + e)
      }
    }, {
      key: "warning", value: function(e) {
        f <= l.WARNING && this._log("WARNING: " + e)
      }
    }, {
      key: "error", value: function(e) {
        f <= l.ERROR && this._log("ERROR: " + e)
      }
    }, {
      key: "critical", value: function(e) {
        f <= l.CRITICAL && this._log("CRITICAL: " + e)
      }
    }, {
      key: "_log", value: function(e) {
        var t = this._opts.prefix + e; this._opts.logFunc ? this._opts.logFunc(t) : c(t)
      }
    }]), e
  }(), d = {
    setLogger: function(e) {
      c = "function" == typeof e ? e : a
    }, setLevel: function() {
      var e = (r.default.urlParams.pubsub_log_level || "").toUpperCase(); if (e) {
        var t = l[e]; if (t) return f = t, function() {
        }
      } return function(e) {
        f = e ? l[e.toUpperCase()] || l.WARNING : l.WARNING
      }
    }(), _getLogger: function(e) {
      return u[e] || (u[e] = new h({
        prefix: "pubsub.js [" + e + "] "
      })), u[e]
    }, _noopLogger: new h({
      prefix: "", logFunc: a
    })
  }, p = window.console; p && p.log && (p.log.apply ? d.setLogger(function() {
    p.log.apply(p, arguments)
  }) : d.setLogger(function() {
    for (var e = [], t = 0; t < arguments.length; ++t)e.push(arguments[t]); p.log(e.join(" "))
  })), t.default = d
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }); var i = {
  }; i.randomInt = function(e) {
    return Math.floor(Math.random() * e)
  }, i.time = {
    seconds: function(e) {
      return 1e3 * e
    }, now: function() {
      return (new Date).getTime()
    }
  }, i.urlParams = function() {
    for (var e = {
    }, t = window.location.search.substr(1), n = t.split("&"), i = 0; i < n.length; ++i) {
      var o = n[i].split("="); e[decodeURIComponent(o[0])] = o.length > 1 ? decodeURIComponent(o[1]) : ""
    } return e
  }(), i.generateString = function(e) {
    for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", o = 0; o < e; o++)t += n.charAt(i.randomInt(n.length)); return t
  }, i.inIframe = function() {
    try {
      return window.self !== window.top
    } catch (e) {
      return !0
    }
  }, t.default = i
}, function(e, t, n) {
  "use strict"; var i = n(44)(); e.exports = function(e) {
    return e !== i && null !== e
  }
}, function(e, t, n) {
  "use strict"; (function(i) {
    var o, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }; !function(r) {
      function a() {
        this._events = {
        }, this._conf && c.call(this, this._conf)
      } function c(e) {
        e ? (this._conf = e, e.delimiter && (this.delimiter = e.delimiter), this._maxListeners = e.maxListeners !== r ? e.maxListeners : p, e.wildcard && (this.wildcard = e.wildcard), e.newListener && (this.newListener = e.newListener), e.verboseMemoryLeak && (this.verboseMemoryLeak = e.verboseMemoryLeak), this.wildcard && (this.listenerTree = {
        })) : this._maxListeners = p
      } function u(e, t) {
        var n = "(node) warning: possible EventEmitter memory leak detected. " + e + " listeners added. Use emitter.setMaxListeners() to increase limit."; if (this.verboseMemoryLeak && (n += " Event name: " + t + "."), void 0 !== i && i.emitWarning) {
          var o = new Error(n); o.name = "MaxListenersExceededWarning", o.emitter = this, o.count = e, i.emitWarning(o)
        } else console.error(n), console.trace && console.trace()
      } function l(e) {
        this._events = {
        }, this.newListener = !1, this.verboseMemoryLeak = !1, c.call(this, e)
      } function f(e, t, n, i) {
        if (!n) return []; var o, s, r, a, c, u, l, h = [], d = t.length, p = t[i], _ = t[i + 1]; if (i === d && n._listeners) {
          if ("function" == typeof n._listeners) return e && e.push(n._listeners), [n]; for (o = 0, s = n._listeners.length; o < s; o++)e && e.push(n._listeners[o]); return [n]
        } if ("*" === p || "**" === p || n[p]) {
          if ("*" === p) {
            for (r in n) "_listeners" !== r && n.hasOwnProperty(r) && (h = h.concat(f(e, t, n[r], i + 1))); return h
          } if ("**" === p) {
            l = i + 1 === d || i + 2 === d && "*" === _, l && n._listeners && (h = h.concat(f(e, t, n, d))); for (r in n) "_listeners" !== r && n.hasOwnProperty(r) && ("*" === r || "**" === r ? (n[r]._listeners && !l && (h = h.concat(f(e, t, n[r], d))), h = h.concat(f(e, t, n[r], i))) : h = r === _ ? h.concat(f(e, t, n[r], i + 2)) : h.concat(f(e, t, n[r], i))); return h
          } h = h.concat(f(e, t, n[p], i + 1))
        } if (a = n["*"], a && f(e, t, a, i + 1), c = n["**"]) if (i < d) {
          c._listeners && f(e, t, c, d); for (r in c) "_listeners" !== r && c.hasOwnProperty(r) && (r === _ ? f(e, t, c[r], i + 2) : r === p ? f(e, t, c[r], i + 1) : (u = {
          }, u[r] = c[r], f(e, t, {
            "**": u
          }, i + 1)))
        } else c._listeners ? f(e, t, c, d) : c["*"] && c["*"]._listeners && f(e, t, c["*"], d); return h
      } function h(e, t) {
        e = "string" == typeof e ? e.split(this.delimiter) : e.slice(); for (var n = 0, i = e.length; n + 1 < i; n++)if ("**" === e[n] && "**" === e[n + 1]) return; for (var o = this.listenerTree, s = e.shift(); s !== r;) {
          if (o[s] || (o[s] = {
          }), o = o[s], 0 === e.length) return o._listeners ? ("function" == typeof o._listeners && (o._listeners = [o._listeners]), o._listeners.push(t), !o._listeners.warned && this._maxListeners > 0 && o._listeners.length > this._maxListeners && (o._listeners.warned = !0, u.call(this, o._listeners.length, s))) : o._listeners = t, !0; s = e.shift()
        } return !0
      } var d = Array.isArray ? Array.isArray : function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      }, p = 10; l.EventEmitter2 = l, l.prototype.delimiter = ".", l.prototype.setMaxListeners = function(e) {
        e !== r && (this._maxListeners = e, this._conf || (this._conf = {
        }), this._conf.maxListeners = e)
      }, l.prototype.event = "", l.prototype.once = function(e, t) {
        return this._once(e, t, !1)
      }, l.prototype.prependOnceListener = function(e, t) {
        return this._once(e, t, !0)
      }, l.prototype._once = function(e, t, n) {
        return this._many(e, 1, t, n), this
      }, l.prototype.many = function(e, t, n) {
        return this._many(e, t, n, !1)
      }, l.prototype.prependMany = function(e, t, n) {
        return this._many(e, t, n, !0)
      }, l.prototype._many = function(e, t, n, i) {
        function o() {
          return 0 == --t && s.off(e, o), n.apply(this, arguments)
        } var s = this; if ("function" != typeof n) throw new Error("many only accepts instances of Function"); return o._origin = n, this._on(e, o, i), s
      }, l.prototype.emit = function() {
        this._events || a.call(this); var e = arguments[0]; if ("newListener" === e && !this.newListener && !this._events.newListener) return !1; var t, n, i, o, s, r = arguments.length; if (this._all && this._all.length) {
          if (s = this._all.slice(), r > 3) for (t = new Array(r), o = 0; o < r; o++)t[o] = arguments[o]; for (i = 0, n = s.length; i < n; i++)switch (this.event = e, r) {
            case 1: s[i].call(this, e); break;
            case 2: s[i].call(this, e, arguments[1]); break;
            case 3: s[i].call(this, e, arguments[1], arguments[2]); break;
            default: s[i].apply(this, t)
          }
        } if (this.wildcard) {
          s = []; var c = "string" == typeof e ? e.split(this.delimiter) : e.slice(); f.call(this, s, c, this.listenerTree, 0)
        } else {
          if ("function" == typeof (s = this._events[e])) {
            switch (this.event = e, r) {
              case 1: s.call(this); break;
              case 2: s.call(this, arguments[1]); break;
              case 3: s.call(this, arguments[1], arguments[2]); break;
              default: for (t = new Array(r - 1), o = 1; o < r; o++)t[o - 1] = arguments[o]; s.apply(this, t)
            }return !0
          } s && (s = s.slice())
        } if (s && s.length) {
          if (r > 3) for (t = new Array(r - 1), o = 1; o < r; o++)t[o - 1] = arguments[o]; for (i = 0, n = s.length; i < n; i++)switch (this.event = e, r) {
            case 1: s[i].call(this); break;
            case 2: s[i].call(this, arguments[1]); break;
            case 3: s[i].call(this, arguments[1], arguments[2]); break;
            default: s[i].apply(this, t)
          }return !0
        } if (!this._all && "error" === e) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event."); return !!this._all
      }, l.prototype.emitAsync = function() {
        this._events || a.call(this); var e = arguments[0]; if ("newListener" === e && !this.newListener && !this._events.newListener) return Promise.resolve([!1]); var t, n, i, o, s, r = [], c = arguments.length; if (this._all) {
          if (c > 3) for (t = new Array(c), o = 1; o < c; o++)t[o] = arguments[o]; for (i = 0, n = this._all.length; i < n; i++)switch (this.event = e, c) {
            case 1: r.push(this._all[i].call(this, e)); break;
            case 2: r.push(this._all[i].call(this, e, arguments[1])); break;
            case 3: r.push(this._all[i].call(this, e, arguments[1], arguments[2])); break;
            default: r.push(this._all[i].apply(this, t))
          }
        } if (this.wildcard) {
          s = []; var u = "string" == typeof e ? e.split(this.delimiter) : e.slice(); f.call(this, s, u, this.listenerTree, 0)
        } else s = this._events[e]; if ("function" == typeof s) switch (this.event = e, c) {
          case 1: r.push(s.call(this)); break;
          case 2: r.push(s.call(this, arguments[1])); break;
          case 3: r.push(s.call(this, arguments[1], arguments[2])); break;
          default: for (t = new Array(c - 1), o = 1; o < c; o++)t[o - 1] = arguments[o]; r.push(s.apply(this, t))
        } else if (s && s.length) {
          if (s = s.slice(), c > 3) for (t = new Array(c - 1), o = 1; o < c; o++)t[o - 1] = arguments[o]; for (i = 0, n = s.length; i < n; i++)switch (this.event = e, c) {
            case 1: r.push(s[i].call(this)); break;
            case 2: r.push(s[i].call(this, arguments[1])); break;
            case 3: r.push(s[i].call(this, arguments[1], arguments[2])); break;
            default: r.push(s[i].apply(this, t))
          }
        } else if (!this._all && "error" === e) return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event."); return Promise.all(r)
      }, l.prototype.on = function(e, t) {
        return this._on(e, t, !1)
      }, l.prototype.prependListener = function(e, t) {
        return this._on(e, t, !0)
      }, l.prototype.onAny = function(e) {
        return this._onAny(e, !1)
      }, l.prototype.prependAny = function(e) {
        return this._onAny(e, !0)
      }, l.prototype.addListener = l.prototype.on, l.prototype._onAny = function(e, t) {
        if ("function" != typeof e) throw new Error("onAny only accepts instances of Function"); return this._all || (this._all = []), t ? this._all.unshift(e) : this._all.push(e), this
      }, l.prototype._on = function(e, t, n) {
        if ("function" == typeof e) return this._onAny(e, t), this; if ("function" != typeof t) throw new Error("on only accepts instances of Function"); return this._events || a.call(this), this.emit("newListener", e, t), this.wildcard ? (h.call(this, e, t), this) : (this._events[e] ? ("function" == typeof this._events[e] && (this._events[e] = [this._events[e]]), n ? this._events[e].unshift(t) : this._events[e].push(t), !this._events[e].warned && this._maxListeners > 0 && this._events[e].length > this._maxListeners && (this._events[e].warned = !0, u.call(this, this._events[e].length, e))) : this._events[e] = t, this)
      }, l.prototype.off = function(e, t) {
        function n(e) {
          if (e !== r) {
            var t = Object.keys(e); for (var i in t) {
              var o = t[i], a = e[o]; a instanceof Function || "object" !== (void 0 === a ? "undefined" : s(a)) || null === a || (Object.keys(a).length > 0 && n(e[o]), 0 === Object.keys(a).length && delete e[o])
            }
          }
        } if ("function" != typeof t) throw new Error("removeListener only takes instances of Function"); var i, o = []; if (this.wildcard) {
          var a = "string" == typeof e ? e.split(this.delimiter) : e.slice(); o = f.call(this, null, a, this.listenerTree, 0)
        } else {
          if (!this._events[e]) return this; i = this._events[e], o.push({
            _listeners: i
          })
        } for (var c = 0; c < o.length; c++) {
          var u = o[c]; if (i = u._listeners, d(i)) {
            for (var l = -1, h = 0, p = i.length; h < p; h++)if (i[h] === t || i[h].listener && i[h].listener === t || i[h]._origin && i[h]._origin === t) {
              l = h; break
            } if (l < 0) continue; return this.wildcard ? u._listeners.splice(l, 1) : this._events[e].splice(l, 1), 0 === i.length && (this.wildcard ? delete u._listeners : delete this._events[e]), this.emit("removeListener", e, t), this
          } (i === t || i.listener && i.listener === t || i._origin && i._origin === t) && (this.wildcard ? delete u._listeners : delete this._events[e], this.emit("removeListener", e, t))
        } return n(this.listenerTree), this
      }, l.prototype.offAny = function(e) {
        var t, n = 0, i = 0; if (e && this._all && this._all.length > 0) {
          for (t = this._all, n = 0, i = t.length; n < i; n++)if (e === t[n]) return t.splice(n, 1), this.emit("removeListenerAny", e), this
        } else {
          for (t = this._all, n = 0, i = t.length; n < i; n++)this.emit("removeListenerAny", t[n]); this._all = []
        } return this
      }, l.prototype.removeListener = l.prototype.off, l.prototype.removeAllListeners = function(e) {
        if (0 === arguments.length) return !this._events || a.call(this), this; if (this.wildcard) for (var t = "string" == typeof e ? e.split(this.delimiter) : e.slice(), n = f.call(this, null, t, this.listenerTree, 0), i = 0; i < n.length; i++) {
          var o = n[i]; o._listeners = null
        } else this._events && (this._events[e] = null); return this
      }, l.prototype.listeners = function(e) {
        if (this.wildcard) {
          var t = [], n = "string" == typeof e ? e.split(this.delimiter) : e.slice(); return f.call(this, t, n, this.listenerTree, 0), t
        } return this._events || a.call(this), this._events[e] || (this._events[e] = []), d(this._events[e]) || (this._events[e] = [this._events[e]]), this._events[e]
      }, l.prototype.eventNames = function() {
        return Object.keys(this._events)
      }, l.prototype.listenerCount = function(e) {
        return this.listeners(e).length
      }, l.prototype.listenersAny = function() {
        return this._all ? this._all : []
      }, (o = function() {
        return l
      }.call(t, n, t, e)) !== r && (e.exports = o)
    }()
  }).call(t, n(18))
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }); var i = Object.assign || function(e) {
    for (var t, n = 1, i = arguments.length; n < i; n++) {
      t = arguments[n]; for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
    } return e
  }, o = function() {
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
      t.headers = new Headers(i({
      }, this.defaultHeaders, t.headers)); var n = t.apiUrl ? t.apiUrl : this.apiUrl, o = "" + n + e; return new Request(o, t)
    }, e.prototype.checkError = function(e) {
      if (e.status >= 200 && e.status < 300) return e; var t = new Error(e.statusText); throw t.response = e, t
    }, e
  }(); t.Api = o; t.api = new o
}, function(e, t, n) {
  "use strict"; var i, o = n(26), s = n(45), r = n(101), a = n(46); i = e.exports = function(e, t) {
    var n, i, r, c, u; return arguments.length < 2 || "string" != typeof e ? (c = t, t = e, e = null) : c = arguments[2], null == e ? (n = r = !0, i = !1) : (n = a.call(e, "c"), i = a.call(e, "e"), r = a.call(e, "w")), u = {
      value: t, configurable: n, enumerable: i, writable: r
    }, c ? o(s(c), u) : u
  }, i.gs = function(e, t, n) {
    var i, c, u, l; return "string" != typeof e ? (u = n, n = t, t = e, e = null) : u = arguments[3], null == t ? t = void 0 : r(t) ? null == n ? n = void 0 : r(n) || (u = n, n = void 0) : (u = t, t = n = void 0), null == e ? (i = !0, c = !1) : (i = a.call(e, "c"), c = a.call(e, "e")), l = {
      get: t, set: n, configurable: i, enumerable: c
    }, u ? o(s(u), l) : l
  }
}, function(e, t, n) {
  "use strict"; function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }); var o = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), s = function() {
    function e() {
      i(this, e)
    } return o(e, [{
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
        if (this._events) {
          return (this._events[e] || []).length / 2
        } return 0
      }
    }]), e
  }(); t.default = s
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.tokenManager = t.TokenManager = void 0; var i = n(9), o = n(34), s = n(14), r = function() {
    function e() {
      var e = this; this.clockSkew = 0, this.tokens = {
      }, this.timers = {
      }, this.tokenEmitter = new i.EventEmitter2, this.clearTokenManager = function() {
        e.clockSkew = 0, e.tokenEmitter.removeAllListeners(); for (var t in e.tokens) e.tokens[t] && (delete e.tokens[t], e.timers[t] && (clearTimeout(e.timers[t]), delete e.timers[t]))
      }, this.getToken = function(t) {
        return e.tokens[t]
      }, this.registerToken = function(t, n) {
        var i = new o.Token(n), s = e.tokens[t] || i; e.tokens[t] = new o.Token(n), e.tokenEmitter.emit(t, i, s), e.updateRefreshTimer(t)
      }, this.updateRefreshTimer = function(t) {
        var n = e.getToken(t), i = e.tokenEmitter.listeners(t).length > 0, o = void 0 !== e.timers[t]; i && !o ? e.timers[t] = setTimeout(function() {
          delete e.timers[t], e.refreshToken(t)
        }, n.refreshAfter) : !i && o && (clearTimeout(e.timers[t]), delete e.timers[t])
      }, this.refreshToken = function(t) {
        var n = e.getToken(t); (0, s.refreshToken)(t, n).catch(function() {
          return e.getTokenFromExtensions(t, n)
        }).then(function(n) {
          var i = n.token; i && e.registerToken(t, i)
        })
      }, this.getTokenFromExtensions = function(e, t) {
        return (0, s.getExtensionsForChannel)(t.payload.channel_id).then(function(t) {
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
  }(); t.TokenManager = r; t.tokenManager = new r
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.refreshToken = t.linkUser = t.getExtensionProducts = t.getExtensionsForChannel = t.retryAuthRequest = void 0; var i = n(10), o = n(73), s = function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }(o), r = n(35), a = t.retryAuthRequest = function(e) {
    var t = {
      factor: 2, minTimeout: 1e3, randomize: !0, retries: 16
    }, n = function(t) {
      return i.api.authRequest(e).catch(function(e) {
        if (e.response && e.response.status) {
          if (!(e.response.status >= 500 || 429 === e.response.status)) throw e; t()
        } else t()
      })
    }; return (0, s.default)(n, t)
  }; t.getExtensionsForChannel = function(e) {
    var t = i.api.newRequest("/v5/channels/" + e + "/extensions", {
      method: "GET"
    }); return a(t)
  }, t.getExtensionProducts = function(e, t, n) {
    var o = new r.URLSearchParams; o.append("vendor_code", e), o.append("sku", t), o.append("language", n); var s = "/v5/extensions/products?" + o, c = i.api.newRequest(s, {
      method: "GET"
    }); return a(c)
  }, t.linkUser = function(e, t, n) {
    var o = i.api.newRequest("/v5/extensions/" + e + "/auth/link_user", {
      body: JSON.stringify({
        show_user: n, token: t
      }), method: "POST"
    }); return a(o)
  }, t.refreshToken = function(e, t) {
    var n = t.payload.channel_id, o = i.api.newRequest("/v5/extensions/" + e + "/auth/refresh/" + n, {
      body: JSON.stringify({
        token: t.token
      }), method: "POST"
    }); return a(o)
  }
}, function(e, t, n) {
  "use strict"; function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }); var o = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), s = function() {
    function e() {
      i(this, e)
    } return o(e, [{
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
        if (this._events) {
          return (this._events[e] || []).length / 2
        } return 0
      }
    }]), e
  }(); t.default = s
}, function(e, t, n) {
  "use strict"; var i = Object.prototype.toString, o = i.call(function() {
    return arguments
  }()); e.exports = function(e) {
    return i.call(e) === o
  }
}, function(e, t, n) {
  "use strict"; var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  }, o = Object.prototype.toString, s = o.call(""); e.exports = function(e) {
    return "string" == typeof e || e && "object" === (void 0 === e ? "undefined" : i(e)) && (e instanceof String || o.call(e) === s) || !1
  }
}, function(e, t, n) {
  "use strict"; function i() {
    throw new Error("setTimeout has not been defined")
  } function o() {
    throw new Error("clearTimeout has not been defined")
  } function s(e) {
    if (f === setTimeout) return setTimeout(e, 0); if ((f === i || !f) && setTimeout) return f = setTimeout, setTimeout(e, 0); try {
      return f(e, 0)
    } catch (t) {
      try {
        return f.call(null, e, 0)
      } catch (t) {
        return f.call(this, e, 0)
      }
    }
  } function r(e) {
    if (h === clearTimeout) return clearTimeout(e); if ((h === o || !h) && clearTimeout) return h = clearTimeout, clearTimeout(e); try {
      return h(e)
    } catch (t) {
      try {
        return h.call(null, e)
      } catch (t) {
        return h.call(this, e)
      }
    }
  } function a() {
    g && p && (g = !1, p.length ? _ = p.concat(_) : y = -1, _.length && c())
  } function c() {
    if (!g) {
      var e = s(a); g = !0; for (var t = _.length; t;) {
        for (p = _, _ = []; ++y < t;)p && p[y].run(); y = -1, t = _.length
      } p = null, g = !1, r(e)
    }
  } function u(e, t) {
    this.fun = e, this.array = t
  } function l() {
  } var f, h, d = e.exports = {
  }; !function() {
    try {
      f = "function" == typeof setTimeout ? setTimeout : i
    } catch (e) {
      f = i
    } try {
      h = "function" == typeof clearTimeout ? clearTimeout : o
    } catch (e) {
      h = o
    }
  }(); var p, _ = [], g = !1, y = -1; d.nextTick = function(e) {
    var t = new Array(arguments.length - 1); if (arguments.length > 1) for (var n = 1; n < arguments.length; n++)t[n - 1] = arguments[n]; _.push(new u(e, t)), 1 !== _.length || g || s(c)
  }, u.prototype.run = function() {
    this.fun.apply(null, this.array)
  }, d.title = "browser", d.browser = !0, d.env = {
  }, d.argv = [], d.version = "", d.versions = {
  }, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function(e) {
    return []
  }, d.binding = function(e) {
    throw new Error("process.binding is not supported")
  }, d.cwd = function() {
    return "/"
  }, d.chdir = function(e) {
    throw new Error("process.chdir is not supported")
  }, d.umask = function() {
    return 0
  }
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }); var i = t.FunctionAction = void 0; !function(e) {
    e.LoginRequest = "twitch-ext-login-request", e.FollowAction = "twitch-ext-follow-action", e.FollowComplete = "twitch-ext-follow-complete", e.FollowStatusRequest = "twitch-ext-follow-status", e.FollowStatusResponse = "twitch-ext-follow-status-response", e.IdShareRequest = "twitch-ext-id-share-request", e.UseBitsPromptRequired = "twitch-ext-use-bits-prompt-required", e.UseBitsComplete = "twitch-ext-use-bits-complete"
  }(i || (t.FunctionAction = i = {
  }))
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ExtensionCoordinator = t.extensionService = t.ExtensionFrame = void 0; var i = n(70); Object.defineProperty(t, "ExtensionFrame", {
    enumerable: !0, get: function() {
      return i.ExtensionFrame
    }
  }); var o = n(36); Object.keys(o).forEach(function(e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
      enumerable: !0, get: function() {
        return o[e]
      }
    })
  }); var s = n(0); Object.keys(s).forEach(function(e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
      enumerable: !0, get: function() {
        return s[e]
      }
    })
  }); var r = n(134); Object.keys(r).forEach(function(e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
      enumerable: !0, get: function() {
        return r[e]
      }
    })
  }), n(135), n(136), n(139); var a = n(22); t.extensionService = a.extensionService; var c = function() {
    function e() {
    } return e.ExtensionFrame = i.ExtensionFrame, e.ExtensionService = a.extensionService, e
  }(); t.ExtensionCoordinator = c
}, function(e, t, n) {
  "use strict"; function i() {
    return Object.create(null)
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.dict = i
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.extensionService = t.ExtensionService = t.BITS_TRANSACTION_SINGLE_USER_PREFIX = t.BITS_TRANSACTION_PREFIX = t.EVENT_CONTEXT_UPDATE = t.EVENT_PLAYER_CONTEXT_UPDATE = void 0; var i = n(10), o = n(21), s = n(23), r = n(37), a = n(13), c = n(34), u = n(14), l = n(9), f = function() {
    var e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(e, t) {
      e.__proto__ = t
    } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
    }; return function(t, n) {
      function i() {
        this.constructor = t
      } e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
    }
  }(), h = t.EVENT_PLAYER_CONTEXT_UPDATE = "playercontext", d = t.EVENT_CONTEXT_UPDATE = "contextupdate", p = t.BITS_TRANSACTION_PREFIX = "bits-ext-v1-transaction", _ = t.BITS_TRANSACTION_SINGLE_USER_PREFIX = "bits-ext-v1-user-transaction", g = function(e) {
    function t(t) {
      var n = e.call(this) || this; return n.currentControlHandlers = {
        onShouldFetchExtensions: function() {
        }, onDestroyExtension: function() {
        }
      }, n.currentExtensionUnsubscribes = (0, o.dict)(), n.hasPurchaseCompletedSubscriptionList = (0, o.dict)(), n.hasBitsTransactionCompletedSubscriptionList = (0, o.dict)(), n.onPlayerContextUpdate = function() {
        n.emit(h)
      }, n.onTwilightContextUpdate = function(e) {
        n.emit(d, e)
      }, n.onExtensionControlMessage = function(e) {
        switch (e.status) {
          case "activate": if (e.maxDelayMS > 0) {
            var t = Math.random() * e.maxDelayMS; setTimeout(function() {
              n.currentControlHandlers.onShouldFetchExtensions()
            }, t)
          } else n.currentControlHandlers.onShouldFetchExtensions(); break;
          case "deactivate": case "uninstall": n.currentControlHandlers.onDestroyExtension(e.extensionId)
        }
      }, n.onExtensionMassControlMessage = function(e) {
        switch (e.status) {
          case "mass_deactivate": n.currentControlHandlers.onDestroyExtension(e.extensionId)
        }
      }, n.onBroadcastSettingsUpdateMessage = function(e) {
        var t = e.channel_id, i = e.game, o = e.old_game; n.currentChannelId && t === n.currentChannelId || !n.broadcastSettingsUnsubscribe ? i !== o && n.emit(d, {
          game: i
        }) : n.broadcastSettingsUnsubscribe()
      }, n.pubsub = t || new r.Pubsub, n
    } return f(t, e), t.prototype.getInstalledExtensions = function(e) {
      var t = this; return (0, u.getExtensionsForChannel)(e).then(function(e) {
        return t.registerExtensionInstallations(e)
      })
    }, t.prototype.registerExtensionInstallations = function(e) {
      var t = this; return a.tokenManager.setClockSkew(e.issued_at), e.tokens.forEach(function(n) {
        var i = e.installed_extensions, o = i.reduce(function(e, t) {
          var i = t.extension, o = t.installation_status; return e || (i.id === n.extension_id ? "active" === o.activation_state : e)
        }, !1), s = new c.Token(n.token).isBroadcaster; (o || s) && (a.tokenManager.registerToken(n.extension_id, n.token), t.subscribeToMassExtensionControl(n.extension_id))
      }), e
    }, t.prototype.setEnvironmentOptions = function(e) {
      e.env && (this.pubsub.setEnvironment(this.getPubsubEnvironment(e.env)), s.supervisor.environment = e.env), i.api.setApiOptions({
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
        event: d, context: e
      }, "*"), this.emit(d, e)
    }, t.prototype.listenForContext = function() {
      var e = this; window.addEventListener("message", function(t) {
        var n = t.data; if (t.origin === window.location.origin && n.event && n.event === d) {
          var i = n.context; e.onTwilightContextUpdate(i)
        }
      }, !1)
    }, t.prototype.onPurchaseCompleted = function(e, t) {
      var n = this, o = "purchase-completed." + e; if (this.on(o, t), !this.hasPurchaseCompletedSubscriptionList[e]) {
        var s = i.api.authToken; this.hasPurchaseCompletedSubscriptionList[e] = !0, this.pubsub.subscribe({
          token: s, topic: "user-extensionpurchase-events." + e, success: function() {
          }, failure: function() {
          }, message: function(e) {
            n.emit(o, e)
          }
        })
      }
    }, t.prototype.onBitsTransactionCompleted = function(e, t, n, o) {
      var s = this, r = "bits-transaction-completed." + e + "-" + t; this.on(r, o), this.hasBitsTransactionCompletedSubscriptionList[r] || (this.hasBitsTransactionCompletedSubscriptionList[r] = !0, this.pubsub.subscribe({
        token: i.api.authToken, topic: p + "." + e + "-" + t, success: function() {
        }, failure: function() {
        }, message: function(e) {
          s.emit(r, e)
        }
      }), null !== n && this.pubsub.subscribe({
        token: i.api.authToken, topic: _ + "." + n + "." + e + "-" + t, success: function() {
        }, failure: function() {
        }, message: function(e) {
          s.emit(r, e)
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
  }(l.EventEmitter2); t.ExtensionService = g; t.extensionService = new g
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }); var i = function() {
    function e() {
      this.SUPERVISOR_LOCATION = {
        production: "https://supervisor.ext-twitch.tv", staging: "https://supervisor.ext-assets.internal.justin.tv"
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
        return this.supervisorOrigin + "/supervisor/v1/index.html"
      }, enumerable: !0, configurable: !0
    }), e
  }(); t.Supervisor = i; t.supervisor = new i
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ExtensionTracker = t.ExtensionUseBitsFailReason = t.ExtensionFollowFailReason = void 0; var i = n(33), o = Object.assign || function(e) {
    for (var t, n = 1, i = arguments.length; n < i; n++) {
      t = arguments[n]; for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
    } return e
  }, s = t.ExtensionFollowFailReason = void 0; !function(e) {
    e.Cancelled = "cancelled", e.LoggedOut = "logged_out_user", e.InvalidId = "invalid_id", e.AlreadyFollowed = "already_followed"
  }(s || (t.ExtensionFollowFailReason = s = {
  })); var r = t.ExtensionUseBitsFailReason = void 0; !function(e) {
    e.Cancelled = "cancelled", e.LoggedOut = "logged_out_user", e.InvalidID = "invalid_id", e.UserIneligible = "user_ineligible", e.InsufficientBalance = "insufficient_balance", e.UnableToGetEligibility = "unable_to_get_eligibility", e.UnableToLinkUser = "unable_to_link_user", e.UseBitsFailure = "use_bits_failure"
  }(r || (t.ExtensionUseBitsFailReason = r = {
  })); var a = function() {
    function e(e) {
      this.dobbin = e.dobbin; var t = (0, i.parseUrl)(e.iframe.ownerDocument.referrer); this.trackingProperties = o({
      }, e.requiredProps, {
          url: e.iframe.ownerDocument.location.href, host: e.iframe.ownerDocument.location.host, domain: e.iframe.ownerDocument.domain, user_agent: e.iframe.ownerDocument.defaultView.navigator.userAgent, referrer_url: e.iframe.ownerDocument.referrer, referrer_host: t.host, extension_id: e.extension.clientId, extension_version: e.extension.version, extension_anchor: e.anchor, extension_mode: e.extensionMode
        })
    } return e.prototype.trackEvent = function(e, t) {
      var n = o({
      }, t, this.trackingProperties); this.dobbin.trackEvent(e, n, ["spade"])
    }, e
  }(); t.ExtensionTracker = a
}, function(e, t, n) {
  "use strict"; e.exports = n(41)() ? Object.setPrototypeOf : n(42)
}, function(e, t, n) {
  "use strict"; e.exports = n(96)() ? Object.assign : n(97)
}, function(e, t, n) {
  "use strict"; (function(i, o) {
    var s, r, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */
    !function(i, o) {
      "object" === a(t) && void 0 !== e ? e.exports = o() : (s = o, void 0 !== (r = "function" == typeof s ? s.call(t, n, t, e) : s) && (e.exports = r))
    }(0, function() {
      function e(e) {
        var t = void 0 === e ? "undefined" : a(e); return null !== e && ("object" === t || "function" === t)
      } function t(e) {
        return "function" == typeof e
      } function s(e) {
        G = e
      } function r(e) {
        J = e
      } function c() {
        return void 0 !== z ? function() {
          z(l)
        } : u()
      } function u() {
        var e = setTimeout; return function() {
          return e(l, 1)
        }
      } function l() {
        for (var e = 0; e < H; e += 2) {
          (0, Z[e])(Z[e + 1]), Z[e] = void 0, Z[e + 1] = void 0
        } H = 0
      } function f(e, t) {
        var n = arguments, i = this, o = new this.constructor(d); void 0 === o[te] && I(o); var s = i._state; return s ? function() {
          var e = n[s - 1]; J(function() {
            return C(s, o, e, i._result)
          })
        }() : T(i, o, e, t), o
      } function h(e) {
        var t = this; if (e && "object" === (void 0 === e ? "undefined" : a(e)) && e.constructor === t) return e; var n = new t(d); return w(n, e), n
      } function d() {
      } function p() {
        return new TypeError("You cannot resolve a promise with itself")
      } function _() {
        return new TypeError("A promises callback cannot return that same promise.")
      } function g(e) {
        try {
          return e.then
        } catch (e) {
          return se.error = e, se
        }
      } function y(e, t, n, i) {
        try {
          e.call(t, n, i)
        } catch (e) {
          return e
        }
      } function b(e, t, n) {
        J(function(e) {
          var i = !1, o = y(n, t, function(n) {
            i || (i = !0, t !== n ? w(e, n) : x(e, n))
          }, function(t) {
            i || (i = !0, E(e, t))
          }, "Settle: " + (e._label || " unknown promise")); !i && o && (i = !0, E(e, o))
        }, e)
      } function v(e, t) {
        t._state === ie ? x(e, t._result) : t._state === oe ? E(e, t._result) : T(t, void 0, function(t) {
          return w(e, t)
        }, function(t) {
          return E(e, t)
        })
      } function m(e, n, i) {
        n.constructor === e.constructor && i === f && n.constructor.resolve === h ? v(e, n) : i === se ? (E(e, se.error), se.error = null) : void 0 === i ? x(e, n) : t(i) ? b(e, n, i) : x(e, n)
      } function w(t, n) {
        t === n ? E(t, p()) : e(n) ? m(t, n, g(n)) : x(t, n)
      } function k(e) {
        e._onerror && e._onerror(e._result), P(e)
      } function x(e, t) {
        e._state === ne && (e._result = t, e._state = ie, 0 !== e._subscribers.length && J(P, e))
      } function E(e, t) {
        e._state === ne && (e._state = oe, e._result = t, J(k, e))
      } function T(e, t, n, i) {
        var o = e._subscribers, s = o.length; e._onerror = null, o[s] = t, o[s + ie] = n, o[s + oe] = i, 0 === s && e._state && J(P, e)
      } function P(e) {
        var t = e._subscribers, n = e._state; if (0 !== t.length) {
          for (var i = void 0, o = void 0, s = e._result, r = 0; r < t.length; r += 3)i = t[r], o = t[r + n], i ? C(n, i, o, s) : o(s); e._subscribers.length = 0
        }
      } function S() {
        this.error = null
      } function O(e, t) {
        try {
          return e(t)
        } catch (e) {
          return re.error = e, re
        }
      } function C(e, n, i, o) {
        var s = t(i), r = void 0, a = void 0, c = void 0, u = void 0; if (s) {
          if (r = O(i, o), r === re ? (u = !0, a = r.error, r.error = null) : c = !0, n === r) return void E(n, _())
        } else r = o, c = !0; n._state !== ne || (s && c ? w(n, r) : u ? E(n, a) : e === ie ? x(n, r) : e === oe && E(n, r))
      } function M(e, t) {
        try {
          t(function(t) {
            w(e, t)
          }, function(t) {
            E(e, t)
          })
        } catch (t) {
          E(e, t)
        }
      } function R() {
        return ae++
      } function I(e) {
        e[te] = ae++ , e._state = void 0, e._result = void 0, e._subscribers = []
      } function A(e, t) {
        this._instanceConstructor = e, this.promise = new e(d), this.promise[te] || I(this.promise), W(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? x(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && x(this.promise, this._result))) : E(this.promise, j())
      } function j() {
        return new Error("Array Methods must be provided an Array")
      } function L(e) {
        return new A(this, e).promise
      } function U(e) {
        var t = this; return new t(W(e) ? function(n, i) {
          for (var o = e.length, s = 0; s < o; s++)t.resolve(e[s]).then(n, i)
        } : function(e, t) {
          return t(new TypeError("You must pass an array to race."))
        })
      } function B(e) {
        var t = this, n = new t(d); return E(n, e), n
      } function F() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
      } function q() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
      } function N(e) {
        this[te] = R(), this._result = this._state = void 0, this._subscribers = [], d !== e && ("function" != typeof e && F(), this instanceof N ? M(this, e) : q())
      } function D() {
        var e = void 0; if (void 0 !== o) e = o; else if ("undefined" != typeof self) e = self; else try {
          e = Function("return this")()
        } catch (e) {
          throw new Error("polyfill failed because global object is unavailable in this environment")
        } var t = e.Promise; if (t) {
          var n = null; try {
            n = Object.prototype.toString.call(t.resolve())
          } catch (e) {
          } if ("[object Promise]" === n && !t.cast) return
        } e.Promise = N
      } var V = void 0; V = Array.isArray ? Array.isArray : function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      }; var W = V, H = 0, z = void 0, G = void 0, J = function(e, t) {
        Z[H] = e, Z[H + 1] = t, 2 === (H += 2) && (G ? G(l) : ee())
      }, K = "undefined" != typeof window ? window : void 0, X = K || {
      }, Y = X.MutationObserver || X.WebKitMutationObserver, Q = "undefined" == typeof self && void 0 !== i && "[object process]" === {
      }.toString.call(i), $ = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, Z = new Array(1e3), ee = void 0; ee = Q ? function() {
        return function() {
          return i.nextTick(l)
        }
      }() : Y ? function() {
        var e = 0, t = new Y(l), n = document.createTextNode(""); return t.observe(n, {
          characterData: !0
        }), function() {
          n.data = e = ++e % 2
        }
      }() : $ ? function() {
        var e = new MessageChannel; return e.port1.onmessage = l, function() {
          return e.port2.postMessage(0)
        }
      }() : void 0 === K ? function() {
        try {
          var e = n(52); return z = e.runOnLoop || e.runOnContext, c()
        } catch (e) {
          return u()
        }
      }() : u(); var te = Math.random().toString(36).substring(16), ne = void 0, ie = 1, oe = 2, se = new S, re = new S, ae = 0; return A.prototype._enumerate = function(e) {
        for (var t = 0; this._state === ne && t < e.length; t++)this._eachEntry(e[t], t)
      }, A.prototype._eachEntry = function(e, t) {
        var n = this._instanceConstructor, i = n.resolve; if (i === h) {
          var o = g(e); if (o === f && e._state !== ne) this._settledAt(e._state, t, e._result); else if ("function" != typeof o) this._remaining-- , this._result[t] = e; else if (n === N) {
            var s = new n(d); m(s, e, o), this._willSettleAt(s, t)
          } else this._willSettleAt(new n(function(t) {
            return t(e)
          }), t)
        } else this._willSettleAt(i(e), t)
      }, A.prototype._settledAt = function(e, t, n) {
        var i = this.promise; i._state === ne && (this._remaining-- , e === oe ? E(i, n) : this._result[t] = n), 0 === this._remaining && x(i, this._result)
      }, A.prototype._willSettleAt = function(e, t) {
        var n = this; T(e, void 0, function(e) {
          return n._settledAt(ie, t, e)
        }, function(e) {
          return n._settledAt(oe, t, e)
        })
      }, N.all = L, N.race = U, N.resolve = h, N.reject = B, N._setScheduler = s, N._setAsap = r, N._asap = J, N.prototype = {
        constructor: N, then: f, catch: function(e) {
          return this.then(null, e)
        }
      }, N.polyfill = D, N.Promise = N, N
    })
  }).call(t, n(18), n(28))
}, function(e, t, n) {
  "use strict"; var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  }; i = function() {
    return this
  }(); try {
    i = i || Function("return this")() || (0, eval)("this")
  } catch (e) {
    "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (i = window)
  } e.exports = i
}, function(e, t, n) {
  "use strict"; function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }); var o = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), s = function() {
    function e() {
      i(this, e), this._map = {
      }, this._size = 0
    } return o(e, [{
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
  }(); t.default = s
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Stats = void 0; var i = n(59), o = function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }(i); t.Stats = o.default, t.default = {
    Stats: o.default
  }
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }); var i = t.ExtensionActivationStatus = void 0; !function(e) {
    e.Active = "active", e.Inactive = "inactive"
  }(i || (t.ExtensionActivationStatus = i = {
  })); var o = t.ExtensionAnchor = void 0; !function(e) {
    e.Hidden = "hidden", e.Panel = "panel", e.Overlay = "video_overlay", e.Component = "component"
  }(o || (t.ExtensionAnchor = o = {
  })); var s = t.ExtensionMode = void 0; !function(e) {
    e.Config = "config", e.Dashboard = "dashboard", e.Viewer = "viewer"
  }(s || (t.ExtensionMode = s = {
  })); var r = t.ExtensionPlatform = void 0; !function(e) {
    e.Mobile = "mobile", e.Web = "web"
  }(r || (t.ExtensionPlatform = r = {
  })); var a = t.ExtensionState = void 0; !function(e) {
    e.Testing = "Testing", e.HostedTest = "Assets Uploaded", e.Approved = "Approved", e.Released = "Released", e.ReadyForReview = "Ready For Review", e.InReview = "In Review", e.PendingAction = "Pending Action", e.Uploading = "Uploading"
  }(a || (t.ExtensionState = a = {
  })); var c = t.ExternalExtensionState = void 0; !function(e) {
    e.Testing = "testing", e.HostedTest = "hosted_test", e.Approved = "approved", e.Released = "released", e.ReadyForReview = "ready_for_review", e.InReview = "in_review", e.PendingAction = "pending_action", e.Uploading = "uploading"
  }(c || (t.ExternalExtensionState = c = {
  })); var u = (t.ExtensionStateMap = (l = {
  }, l[a.Testing] = c.Testing, l[a.HostedTest] = c.HostedTest, l[a.Approved] = c.Approved, l[a.Released] = c.Released, l[a.ReadyForReview] = c.ReadyForReview, l[a.InReview] = c.InReview, l[a.PendingAction] = c.PendingAction, l[a.Uploading] = c.Uploading, l), t.ExtensionAction = void 0); !function(e) {
    e.TwitchExtAuth = "twitch-ext-auth", e.TwitchExtBootstrap = "twitch-ext-bootstrap", e.TwitchExtContext = "twitch-ext-context", e.TwitchExtError = "twitch-ext-error", e.TwitchExtLoaded = "twitch-ext-loaded", e.TwitchExtLongtask = "twitch-ext-longtask", e.TwitchExtNetworkTiming = "twitch-ext-network-timing", e.TwitchExtReload = "twitch-ext-reload", e.TwitchExtUserAction = "twitch-ext-user-action", e.TwitchExtConfirmationRequest = "twitch-ext-confirmation-request", e.TwitchExtBeginPurchase = "twitch-ext-begin-purchase", e.TwitchExtReloadEntitlements = "twitch-ext-reload-entitlements", e.TwitchExtProductPrices = "twitch-ext-product-prices", e.TwitchExtVisibilityChanged = "twitch-ext-visibility-changed", e.TwitchExtBitsProducts = "twitch-ext-bits-products", e.TwitchExtUseBits = "twitch-ext-use-bits", e.TwitchExtBitsTransactionComplete = "twitch-ext-bits-transaction-complete", e.TwitchExtBitsOnHover = "twitch-ext-bits-on-hover", e.TwitchExtPubSubReceived = "twitch-ext-pubsub-received", e.TwitchExtPositionChanged = "twitch-ext-position-changed"
  }(u || (t.ExtensionAction = u = {
  })); var l; t.DefaultZoomPixelWidth = 1024
}, function(e, t, n) {
  "use strict"; n.d(t, "a", function() {
    return o
  }); var i; !function(e) {
    e.Log = "twitch-ext-rig-log"
  }(i || (i = {
  })); var o = function() {
    function e() {
    } return e.prototype.log = function(e) {
      for (var t = [], n = 1; n < arguments.length; n++)t[n - 1] = arguments[n]; window.parent.postMessage({
        action: i.Log, messages: [e].concat(t)
      }, "*")
    }, e
  }()
}, function(e, t, n) {
  "use strict"; function i(e, t) {
    var n = document.createElement("a"); n.href = e; var i = n.search.slice(1), o = i.split("&").filter(function(e) {
      return e.length > 0
    }), s = o.length > 0 ? e.slice(0, e.length - i.length - 1) : e, r = Object.keys(t), a = r.reduce(function(e, n) {
      var i = t[n]; return i && e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i.toString())), e
    }, o); return a.length > 0 ? s + "?" + a.join("&") : e
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.appendQueryParams = i; t.parseUrl = function(e) {
    var t = document.createElement("a"); return t.href = e, {
      host: t.host
    }
  }, t.getFileType = function(e) {
    return e ? e.split(".").pop() || "" : ""
  }
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Token = void 0; var i = n(13), o = .9, s = function() {
    function e(e) {
      this.token = e; var t = Date.now(), n = t, s = 1e3 * this.payload.exp + i.tokenManager.clockSkew; this.refreshAt = t + (s - n) * o
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
  }(); t.Token = s
}, function(e, t, n) {
  "use strict"; function i(e, t, n) {
    t in e ? e[t].push("" + n) : e[t] = ["" + n]
  } function o(e) {
    return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g, function(e) {
      return a[e]
    })
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.URLSearchParams = void 0, t.encode = o; var s = n(21), r = function() {
    function e() {
      this.dict = (0, s.dict)()
    } return e.prototype.append = function(e, t) {
      i(this.dict, e, t)
    }, e.prototype.toString = function() {
      var e = [], t = this.dict; for (var n in t) for (var i = o(n), s = 0, r = t[n]; s < r.length; s++)e.push(i + "=" + o(r[s])); return e.join("&")
    }, e
  }(); t.URLSearchParams = r; var a = {
    "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0"
  }
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }); var i = n(78); Object.keys(i).forEach(function(e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
      enumerable: !0, get: function() {
        return i[e]
      }
    })
  })
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Pubsub = void 0; var i = n(80), o = function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }(i), s = function() {
    function e() {
      this.driver = o.default.getInstance("production")
    } return e.prototype.setEnvironment = function(e) {
      this.driver = o.default.getInstance(e)
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
  }(); t.Pubsub = s
}, function(e, t, n) {
  "use strict"; function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }); var o = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), s = function() {
    function e() {
      i(this, e), this._map = {
      }, this._size = 0
    } return o(e, [{
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
  }(); t.default = s
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ExtensionCoordinator = t.Initiator = void 0; var i = n(0), o = n(9), s = n(23), r = n(40), a = function() {
    var e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(e, t) {
      e.__proto__ = t
    } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
    }; return function(t, n) {
      function i() {
        this.constructor = t
      } e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
    }
  }(), c = t.Initiator = void 0; !function(e) {
    e.CurrentUser = "current_user", e.Other = "other"
  }(c || (t.Initiator = c = {
  })); var u = function(e) {
    function t(t) {
      var n = e.call(this) || this; return n.iframe = t, n.destroy = function() {
        n.iframe.ownerDocument.defaultView.removeEventListener("message", n.handleMessage)
      }, n.sendContext = function(e, t) {
        n.sendMessage({
          action: i.ExtensionAction.TwitchExtContext, context: e, updatedFields: t
        })
      }, n.sendExtensionAuth = function(e) {
        n.sendMessage({
          action: i.ExtensionAction.TwitchExtAuth, auth: e
        })
      }, n.sendExtensionBootstrap = function(e) {
        n.sendMessage({
          action: i.ExtensionAction.TwitchExtBootstrap, auth: e, features: i.FEATURE_CONFIG
        })
      }, n.sendSupervisorInit = function(e) {
        n.sendMessage({
          action: i.SupervisorAction.SupervisorInit, options: e
        })
      }, n.sendFunctionReply = function(e) {
        n.sendMessage(e)
      }, n.sendExtensionReloadEntitlementsMessage = function() {
        n.sendMessage({
          action: i.ExtensionAction.TwitchExtReloadEntitlements
        })
      }, n.sendVisibilityChanged = function(e, t) {
        n.sendMessage({
          action: i.ExtensionAction.TwitchExtVisibilityChanged, isVisible: e, context: t
        })
      }, n.sendPositionChange = function(e) {
        n.sendMessage({
          action: i.ExtensionAction.TwitchExtPositionChanged, position: e
        })
      }, n.sendBitsProductsMessage = function(e) {
        n.sendMessage({
          action: i.ExtensionAction.TwitchExtBitsProducts, products: e
        })
      }, n.sendBitsTransactionCompleteMessage = function(e) {
        n.sendMessage(e)
      }, n.handleMessage = function(e) {
        var t = e.source, i = e.data; if (t === n.iframe.contentWindow) try {
          n.handleExtensionAction(i)
        } catch (e) {
          console.error("Caught Error in Message Handler: " + e.stack)
        }
      }, n.handleExtensionAction = function(e) {
        -1 !== i.ExtensionEventActions.indexOf(e.action) && n.emit(e.action, e)
      }, n.sendMessage = function(e) {
        n.iframe && n.iframe.contentWindow && n.iframe.contentWindow.postMessage(e, s.supervisor.supervisorOrigin)
      }, n.iframe.ownerDocument.defaultView.addEventListener("message", n.handleMessage), n
    } return a(t, e), t.prototype.sendExtensionReloadMessage = function() {
      this.sendMessage({
        action: i.ExtensionAction.TwitchExtReload
      })
    }, t.prototype.sendExtensionProductPricesMessage = function(e) {
      var t = e.products.reduce(function(e, t) {
        var n = t.sku, i = t.price; return e[n] = {
          displayPrice: (0, r.formatPrice)(i.price, i.currency_unit)
        }, e
      }, {
        }); this.sendMessage({
          action: i.ExtensionAction.TwitchExtProductPrices, prices: t
        })
    }, t
  }(o.EventEmitter2); t.ExtensionCoordinator = u
}, function(e, t, n) {
  "use strict"; function i(e, t) {
    return "USD" === t ? "$" + e : e + " " + t
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.formatPrice = i
}, function(e, t, n) {
  "use strict"; var i = Object.create, o = Object.getPrototypeOf, s = {
  }; e.exports = function() {
    var e = Object.setPrototypeOf, t = arguments[0] || i; return "function" == typeof e && o(e(t(null), s)) === s
  }
}, function(e, t, n) {
  "use strict"; var i, o = n(43), s = n(1), r = Object.prototype.isPrototypeOf, a = Object.defineProperty, c = {
    configurable: !0, enumerable: !1, writable: !0, value: void 0
  }; i = function(e, t) {
    if (s(e), null === t || o(t)) return e; throw new TypeError("Prototype must be null or an object")
  }, e.exports = function(e) {
    var t, n; return e ? (2 === e.level ? e.set ? (n = e.set, t = function(e, t) {
      return n.call(i(e, t), t), e
    }) : t = function(e, t) {
      return i(e, t).__proto__ = t, e
    } : t = function e(t, n) {
      var o; return i(t, n), o = r.call(e.nullPolyfill, t), o && delete e.nullPolyfill.__proto__, null === n && (n = e.nullPolyfill), t.__proto__ = n, o && a(e.nullPolyfill, "__proto__", c), t
    }, Object.defineProperty(t, "level", {
      configurable: !1, enumerable: !1, writable: !1, value: e.level
    })) : null
  }(function() {
    var e, t = Object.create(null), n = {
    }, i = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"); if (i) {
      try {
        e = i.set, e.call(t, n)
      } catch (e) {
      } if (Object.getPrototypeOf(t) === n) return {
        set: e, level: 2
      }
    } return t.__proto__ = n, Object.getPrototypeOf(t) === n ? {
      level: 2
    } : (t = {
    }, t.__proto__ = n, Object.getPrototypeOf(t) === n && {
      level: 1
    })
  }()), n(93)
}, function(e, t, n) {
  "use strict"; var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  }, o = n(8), s = {
    function: !0, object: !0
  }; e.exports = function(e) {
    return o(e) && s[void 0 === e ? "undefined" : i(e)] || !1
  }
}, function(e, t, n) {
  "use strict"; e.exports = function() {
  }
}, function(e, t, n) {
  "use strict"; var i = n(8), o = Array.prototype.forEach, s = Object.create, r = function(e, t) {
    var n; for (n in e) t[n] = e[n]
  }; e.exports = function(e) {
    var t = s(null); return o.call(arguments, function(e) {
      i(e) && r(Object(e), t)
    }), t
  }
}, function(e, t, n) {
  "use strict"; e.exports = n(102)() ? String.prototype.contains : n(103)
}, function(e, t, n) {
  "use strict"; var i = n(16), o = n(17), s = n(104), r = n(124), a = n(125), c = n(2).iterator; e.exports = function(e) {
    return "function" == typeof a(e)[c] ? e[c]() : i(e) ? new s(e) : o(e) ? new r(e) : new s(e)
  }
}, function(e, t, n) {
  "use strict"; var i, o = n(109), s = n(26), r = n(3), a = n(1), c = n(11), u = n(110), l = n(2), f = Object.defineProperty, h = Object.defineProperties; e.exports = i = function(e, t) {
    if (!(this instanceof i)) throw new TypeError("Constructor requires 'new'"); h(this, {
      __list__: c("w", a(e)), __context__: c("w", t), __nextIndex__: c("w", 0)
    }), t && (r(t.on), t.on("_add", this._onAdd), t.on("_delete", this._onDelete), t.on("_clear", this._onClear))
  }, delete i.prototype.constructor, h(i.prototype, s({
    _next: c(function() {
      var e; if (this.__list__) return this.__redo__ && void 0 !== (e = this.__redo__.shift()) ? e : this.__nextIndex__ < this.__list__.length ? this.__nextIndex__++ : void this._unBind()
    }), next: c(function() {
      return this._createResult(this._next())
    }), _createResult: c(function(e) {
      return void 0 === e ? {
        done: !0, value: void 0
      } : {
          done: !1, value: this._resolve(e)
        }
    }), _resolve: c(function(e) {
      return this.__list__[e]
    }), _unBind: c(function() {
      this.__list__ = null, delete this.__redo__, this.__context__ && (this.__context__.off("_add", this._onAdd), this.__context__.off("_delete", this._onDelete), this.__context__.off("_clear", this._onClear), this.__context__ = null)
    }), toString: c(function() {
      return "[object " + (this[l.toStringTag] || "Object") + "]"
    })
  }, u({
    _onAdd: c(function(e) {
      if (!(e >= this.__nextIndex__)) {
        if (++this.__nextIndex__, !this.__redo__) return void f(this, "__redo__", c("c", [e])); this.__redo__.forEach(function(t, n) {
          t >= e && (this.__redo__[n] = ++t)
        }, this), this.__redo__.push(e)
      }
    }), _onDelete: c(function(e) {
      var t; e >= this.__nextIndex__ || (--this.__nextIndex__, this.__redo__ && (t = this.__redo__.indexOf(e), -1 !== t && this.__redo__.splice(t, 1), this.__redo__.forEach(function(t, n) {
        t > e && (this.__redo__[n] = --t)
      }, this)))
    }), _onClear: c(function() {
      this.__redo__ && o.call(this.__redo__), this.__nextIndex__ = 0
    })
  }))), f(i.prototype, l.iterator, c(function() {
    return this
  }))
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.useBits = t.isEligible = t.getProducts = t.BITS_DOMAIN_PREFIX = void 0; var i = n(10), o = t.BITS_DOMAIN_PREFIX = "twitch.ext"; t.getProducts = function(e) {
    var t = o + "." + e, n = i.api.newRequest("/v5/bits/extensions/" + t + "/products", {
      method: "GET"
    }); return i.api.authRequest(n)
  }, t.isEligible = function(e, t, n) {
    var o = i.api.newRequest("/v5/bits/extensions/is-eligible/" + e, {
      body: JSON.stringify({
        channel_id: t, extension_client_id: n
      }), method: "POST"
    }); return i.api.authRequest(o)
  }, t.useBits = function(e) {
    var t = i.api.newRequest("/v5/bits/extensions/use-bits/" + e, {
      method: "POST"
    }); return i.api.authRequest(t)
  }
}, function(e, t, n) {
  "use strict"; function i(e, t) {
    t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&"); var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"), i = n.exec(t); return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
  } t.b = i, n.d(t, "c", function() {
    return s
  }), n.d(t, "a", function() {
    return r
  }); var o = ["assert", "clear", "count", "debug", "dir", "dirxml", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], s = function() {
    var e; window.console ? e = Object.keys(window.console).filter(function(e) {
      return "function" == typeof window.console[e]
    }) : (window.console = {
    }, e = o), e.forEach(function(e) {
      window.console[e] = function() {
        return 0
      }
    })
  }, r = function(e) {
    [e.documentElement, e.body].forEach(function(e) {
      e.style.setProperty("width", "100%", "important"), e.style.setProperty("height", "100%", "important")
    }), e.body.setAttribute("tabindex", "-1")
  }
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), n.d(t, "ExtensionHelper", function() {
    return y
  }); var i = n(27), o = (n.n(i), n(53)), s = n(68), r = n(69), a = n(50), c = n(140), u = n(32), l = n(20), f = (n.n(l), new o.a), h = new s.a, d = new r.a(f), p = {
    anchor: Object(a.b)("anchor"), mode: Object(a.b)("mode"), state: Object(a.b)("state")
  }, _ = Object(a.b)("platform"); _ && (p.platform = _); var g = new c.a(p, f.onControllerMessage.bind(f), h.onControllerMessage.bind(f), d.onControllerMessage.bind(f), window, document); g.bindEvents(), p.state === l.ExternalExtensionState.Released && Object(a.c)(), document.body && g.forceVideoOverlayFullSize(); var y = {
    version: "1.13.0", environment: f.settings.environment, onAuthorized: f.onAuthorized, onError: f.onError, onContext: f.onContext, onVisibilityChanged: f.onVisibilityChanged, onPositionChanged: f.onPositionChanged, onPositionChange: f.onPositionChanged, send: f.send, listen: f.listen, unlisten: f.unlisten, actions: h.publicAPI, purchases: {
      beginPurchase: f.beginPurchase, onReloadEntitlements: f.onReloadEntitlements, getPrices: f.getPrices
    }, bits: d.publicAPI, rig: new u.a
  }; window.Twitch = window.Twitch || {
    ext: y
  }, window.Twitch.ext = y
}, function(e, t) {
}, function(e, t, n) {
  "use strict"; n.d(t, "a", function() {
    return d
  }); var i = n(54), o = n.n(i), s = n(61), r = n(62), a = (n.n(r), n(27)), c = (n.n(a), n(0)), u = (n.n(c), n(32)); Object(a.polyfill)(); var l, f = window.performance, h = window.location.href; Object(r.isSniffingAllowed)(f) && (l = new r.NetworkSniffer(f, h), l.start()); var d = function() {
    function e() {
      var e = this; this.onAuthorized = function(t) {
        e.authCallback = t, e.authData && e.authCallback(e.authData)
      }, this.onError = function(t) {
        e.errCallback = t
      }, this.onContext = function(t) {
        e.contextCallback = t, e.context && e.contextCallback(e.context, e.contextChangedFields)
      }, this.onPositionChanged = function(t) {
        e.positionCallback = t
      }, this.onVisibilityChanged = function(t) {
        e.visibilityCallback = t, e.isVisible || e.visibilityCallback(!1, null)
      }, this.send = function(t, n, i) {
        var o = {
          target: t, contentType: n, message: i
        }; if (!e.authData) return void e.sendQueue.push(o); e.sendToPubsub(o)
      }, this.listen = function(t, n) {
        var i = e.listenHandlersByTarget[t]; i ? -1 === i.indexOf(n) && i.push(n) : (e.listenHandlersByTarget[t] = [n], e.authData && e.bindPubsub(t))
      }, this.unlisten = function(t, n) {
        var i = e.listenHandlersByTarget[t]; if (i) {
          var o = i.indexOf(n); if (-1 !== o) {
            if (1 === i.length) return delete e.listenHandlersByTarget[t], void (e.authData && e.unbindPubsub(t)); i.splice(o, 1)
          }
        }
      }, this.beginPurchase = function(t) {
        e.sendPostMessage({
          action: c.ExtensionAction.TwitchExtBeginPurchase, payload: {
            sku: t
          }
        })
      }, this.onReloadEntitlements = function(t) {
        e.onReloadEntitlementsCallback = t
      }, this.getPrices = function() {
        return e.prices
      }, this.onNetworkResourceTiming = function(t) {
        "resource" === t.entryType && e.sendPostMessage({
          action: c.ExtensionAction.TwitchExtNetworkTiming, payload: {
            duration: t.duration, endTime: t.responseEnd, startTime: t.startTime, url: t.name
          }
        })
      }, this.listenHandlersByTarget = {
      }, this.sendQueue = [], this.authCallback = null, this.authData = null, this.errCallback = null, this.contextCallback = null, this.context = null, this.contextChangedFields = null, this.onReloadEntitlementsCallback = function() {
      }, this.settings = new s.a, this.isVisible = !0, this.visibilityCallback = null, this.setupListeners(), this.setupProducts(), this.rig = new u.a
    } return e.prototype.getAuthData = function() {
      return this.authData
    }, e.prototype.destroy = function() {
      this.unsetupListeners()
    }, e.prototype.onControllerMessage = function(e) {
      var t = this, n = e.data; if (e.source === window.parent) switch (n.action) {
        case c.ExtensionAction.TwitchExtBootstrap: n = n, this.features = n.features, this.onAuthReceived(n.auth), Object.keys(this.listenHandlersByTarget).forEach(function(e) {
          return t.bindPubsub(e)
        }), this.sendQueue.forEach(function(e) {
          return t.sendToPubsub(e)
        }), this.sendQueue = []; break;
        case c.ExtensionAction.TwitchExtContext: n = n, this.context = n.context, this.contextChangedFields = n.updatedFields, this.contextCallback && this.contextCallback(this.context, this.contextChangedFields); break;
        case c.ExtensionAction.TwitchExtReload: window.location.reload(); break;
        case c.ExtensionAction.TwitchExtAuth: n = n, this.onAuthReceived(n.auth); break;
        case c.ExtensionAction.TwitchExtError: n = n, this.notifyOnError(null, n.message); break;
        case c.ExtensionAction.TwitchExtReloadEntitlements: this.onReloadEntitlementsCallback(); break;
        case c.ExtensionAction.TwitchExtProductPrices: n = n, this.setPrices(n.prices); break;
        case c.ExtensionAction.TwitchExtVisibilityChanged: n = n, this.isVisible = n.isVisible, this.visibilityCallback && this.visibilityCallback(n.isVisible, n.context); break;
        case c.ExtensionAction.TwitchExtPositionChanged: n = n, this.positionCallback && this.positionCallback(n.position)
      }
    }, e.prototype.setupProducts = function() {
      var e = this; this.prices = new a.Promise(function(t) {
        e.setPrices = t
      })
    }, e.prototype.setupListeners = function() {
      void 0 !== l && l.addResourceListener(this.onNetworkResourceTiming)
    }, e.prototype.unsetupListeners = function() {
      void 0 !== l && l.removeResourceListener(this.onNetworkResourceTiming)
    }, e.prototype.sendPostMessage = function(e) {
      window.parent.postMessage(e, "*")
    }, e.prototype.onAuthReceived = function(e) {
      this.authData = e, this.authCallback && this.authCallback(this.authData)
    }, e.prototype.notifyOnError = function(e, t) {
      if (this.errCallback) return t instanceof Error ? void this.errCallback(t) : void this.errCallback(new Error(t || e))
    }, e.prototype.isExtensionTarget = function(e) {
      return -1 === e.indexOf(".")
    }, e.prototype.convertToTopic = function(e) {
      if (this.isExtensionTarget(e)) {
        var t = this.authData.channelId; return "global" === e && (t = "all"), "channel-ext-v1." + t + "-" + this.authData.clientId + "-" + e
      } return e
    }, e.prototype.bindPubsub = function(e) {
      var t = this, n = o.a.getInstance(this.settings.pubsubEnvironment); n._stats._backend = {
        logCounter: function() {
        }, logGauge: function() {
        }, logLine: function() {
        }, logTimer: function() {
        }, setPrefix: function() {
        }
      }, n.Listen({
        auth: this.authData.token, topic: this.convertToTopic(e), failure: function(n) {
          delete t.listenHandlersByTarget[e], t.notifyOnError("bindPubsub(target) failed", n)
        }, success: function() {
        }, message: function(n) {
          var i = t.listenHandlersByTarget[e]; if (i) {
            if (!t.isExtensionTarget(e)) return void i.forEach(function(t) {
              t(e, "application/plain", n)
            }); var o; try {
              o = JSON.parse(n)
            } catch (e) {
              return void t.notifyOnError("ill-formed JSON response received", e)
            } i.forEach(function(t) {
              o.content.forEach(function(n) {
                t(e, o.content_type, n)
              })
            }), o.sequence && t.sendPostMessage({
              action: c.ExtensionAction.TwitchExtPubSubReceived, payload: {
                target: e, topic: t.convertToTopic(e), sequenceNumber: o.sequence.number, sequenceStart: o.sequence.start
              }
            })
          }
        }
      })
    }, e.prototype.wrapHandlers = function(e, t) {
      return {
        onLoad: function(n) {
          var i = n.target; if (i.status >= 200 && i.status < 400) {
            var o = {
            }; if (204 !== i.status) try {
              o = JSON.parse(i.responseText)
            } catch (e) {
              return void t(i.statusText, e)
            } e(o, i.status, i.statusText)
          } else t(i.statusText, null)
        }, onErr: function(e) {
          t(null, e.message || "Network error")
        }
      }
    }, e.prototype.unbindPubsub = function(e) {
      var t = this; o.a.getInstance(this.settings.pubsubEnvironment).Unlisten({
        topic: this.convertToTopic(e), failure: function(n) {
          delete t.listenHandlersByTarget[e], t.notifyOnError("unbindPubsub(target) failed", n)
        }, success: function() {
        }, message: function() {
        }
      })
    }, e.prototype.sendToPubsub = function(e) {
      var t = this, n = e.message, i = e.contentType; n instanceof Object && (n = JSON.stringify(n), i = "application/json"); var o = this.wrapHandlers(function(e, n, i) {
        200 !== n && 204 !== n && t.notifyOnError("sendToPubsub(signal) failed: " + i, null)
      }, function(e, n) {
        t.notifyOnError("sendToPubsub(signal) failed: " + e, n)
      }), s = o.onLoad, r = o.onErr; try {
        this.settings.send(this.authData, e.target, n, i, s, r)
      } catch (e) {
        this.notifyOnError(null, e)
      }
    }, e
  }()
}, function(e, t, n) {
  "use strict"; function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  } function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  } function s(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t
  } function r(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e, enumerable: !1, writable: !0, configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  } function a(e) {
    if ("production" !== e && "staging" !== e && "darklaunch" !== e) throw "Invalid Pubsub instance environment"; return null === window.__Twitch__pubsubInstances[e] && (window.__Twitch__pubsubInstances[e] = new O(e)), window.__Twitch__pubsubInstances[e]
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }); var c = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), u = n(12), l = i(u), f = n(4), h = i(f), d = n(5), p = i(d), _ = n(55), g = i(_), y = n(56), b = i(y), v = n(57), m = i(v), w = n(30), k = n(60), x = i(k), E = h.default._getLogger("PubsubDriver"), T = 3e4, P = /^https?:\/\/([\w-]+\.)*twitch\.tv(:\d+)?\/.*$/, S = 1, O = function(e) {
    function t(e) {
      o(this, t); var n = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return n._env = p.default.urlParams.pubsub_environment || e, n._clientReady = !1, n._hasDisconnected = !1, n._queuedRequests = [], n._stats = w.Stats.getInstance(n._env, "pubsub-js-client"), n._numDisconnects = 0, p.default.inIframe() && P.test(document.referrer) ? (E.debug("Driver is in an iframe"), n._client = new g.default({
        parentUrl: document.referrer
      }), n._clientType = "iframe-verified") : (E.debug("Driver is not in an iframe"), n._client = new m.default({
        env: n._env, stats: n._stats
      }), n._iframeHost = new b.default(n._client), n._clientType = "ws"), n._stats.setPrefix("pubsub-js-client." + n._clientType), "true" === p.default.urlParams.force_pubsub_tester ? S = 1 : "false" === p.default.urlParams.force_pubsub_tester && (S = 0), Math.random() < S && window.setTimeout(n.runTest.bind(n), T), n._client.on("unverified", n._clientUnverified, n), n._client.on("verified", n._clientVerified, n), n._client.verify(), n
    } return r(t, e), c(t, [{
      key: "runTest", value: function() {
        this._tester = new x.default({
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
        for (E.debug("Flushing " + this._queuedRequests.length + " queued requests"); this._queuedRequests.length > 0;) {
          var e = this._queuedRequests.shift(); switch (e.type) {
            case "LISTEN": this._client.Listen(e.opts); break;
            case "UNLISTEN": this._client.Unlisten(e.opts)
          }
        }
      }
    }, {
      key: "_clientConnected", value: function() {
        E.debug("Client connected"), this._client.on("disconnected", this._clientDisconnected, this), this._stats.logCounter("connected", 1), this._trigger("connected"), this._hasDisconnected && this._trigger("reconnected"), this._clientReady = !0, this._flushQueuedRequests()
      }
    }, {
      key: "_clientDisconnected", value: function() {
        E.debug("Client disconnected"), this._trigger("disconnected"), this._clientReady = !1, this._numDisconnects += 1, this._hasDisconnected = !0
      }
    }, {
      key: "_clientVerified", value: function() {
        E.debug("Client verified (type = " + this._clientType + ")"), this._stats.setPrefix("pubsub-js-client." + this._clientType), this._client.on("connected", this._clientConnected, this), this._client.connect(), window.setInterval(this._sendClientTypeGauge.bind(this), 6e4)
      }
    }, {
      key: "_clientUnverified", value: function() {
        E.debug("Unverified IframeClient"), this._client.off("verified", this._clientVerified, this), this._client.off("unverified", this._clientUnverified, this), this._client = new m.default({
          env: this._env, stats: this._stats
        }), this._clientType = "iframe-unverified", this._client.on("unverified", this._clientUnverified, this), this._client.on("verified", this._clientVerified, this), this._client.verify()
      }
    }, {
      key: "_sendClientTypeGauge", value: function() {
        this._stats.logGauge("pubsub-js-client." + this._clientType)
      }
    }]), t
  }(l.default); window.__Twitch__pubsubInstances = window.__Twitch__pubsubInstances || {
    production: null, staging: null, darklaunch: null
  }, t.default = {
    getInstance: a
  }
}, function(e, t, n) {
  "use strict"; function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  } function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  } function s(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t
  } function r(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e, enumerable: !1, writable: !0, configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }); var a = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), c = n(12), u = i(c), l = n(4), f = i(l), h = n(5), d = i(h), p = n(29), _ = i(p), g = f.default._getLogger("IframeClient"), y = function(e) {
    function t(e) {
      o(this, t); var n = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return n._parentUrl = e.parentUrl, n._pendingResponses = new _.default, n._listens = new u.default, window.addEventListener("message", n.receiveMessage.bind(n), !1), n
    } return r(t, e), a(t, [{
      key: "connect", value: function() {
        window.parent.postMessage({
          twitch_protocol: "pubsub", type: "connect"
        }, this._parentUrl)
      }
    }, {
      key: "verify", value: function() {
        window.parent.postMessage({
          twitch_protocol: "pubsub", type: "verify"
        }, this._parentUrl), this._verifyTimeout = setTimeout(this._unverified.bind(this), 1e3)
      }
    }, {
      key: "Listen", value: function(e) {
        g.debug("listening on " + e.topic); var t = this._generateNonce(), n = {
          twitch_protocol: "pubsub", type: "LISTEN", nonce: t, data: {
            topics: [e.topic], auth_token: e.auth
          }
        }; this._send(t, n, e)
      }
    }, {
      key: "Unlisten", value: function(e) {
        if (g.debug("unlistening on " + e.topic + "(" + this._listens.count(e.topic) + " listeners)"), this._listens.count(e.topic) > 1) return e.message && this._listens.off(e.topic, e.message), e.success && e.success(), void g.debug("now have " + this._listens.count(e.topic) + " listeners"); var t = this._generateNonce(), n = {
          twitch_protocol: "pubsub", type: "UNLISTEN", nonce: t, data: {
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
        if ("pubsub" == e.data.twitch_protocol) switch (g.debug("Received message: " + JSON.stringify(e.data)), e.data.type) {
          case "connected": this._trigger("connected"); break;
          case "disconnected": this._trigger("disconnected"); break;
          case "success": this.handleResponse(!0, e.data); break;
          case "failure": this.handleResponse(!1, e.data); break;
          case "message": this.handleMessage(e.data.topic, e.data.message); break;
          case "verify": this._verified()
        }
      }
    }, {
      key: "handleResponse", value: function(e, t) {
        if (this._pendingResponses.has(t.nonce)) {
          var n = this._pendingResponses.get(t.nonce); g.debug("ResponseInfo: " + JSON.stringify(n)), clearTimeout(n.timeout), this._pendingResponses.remove(t.nonce), e ? (n.callbacks.message && ("LISTEN" === n.message.type ? this._listens.on(n.topic, n.callbacks.message, this) : "UNLISTEN" === n.message.type && this._listens.off(n.topic, n.callbacks.message, this)), n.callbacks.success && n.callbacks.success()) : n.callbacks.failure && n.callbacks.failure(t.error)
        }
      }
    }, {
      key: "handleMessage", value: function(e, t) {
        g.debug("received '" + t + "' on topic " + e), this._listens._trigger(e, t)
      }
    }, {
      key: "_onResponseTimeout", value: function(e) {
        g.debug("response timed out: " + e)
      }
    }, {
      key: "_verified", value: function() {
        g.debug("Verified"), clearTimeout(this._verifyTimeout), this._trigger("verified")
      }
    }, {
      key: "_unverified", value: function() {
        window.removeEventListener("message", this.receiveMessage.bind(this), !1), this._trigger("unverified")
      }
    }, {
      key: "_generateNonce", value: function() {
        return d.default.generateString(30)
      }
    }]), t
  }(u.default); t.default = y
}, function(e, t, n) {
  "use strict"; function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }); var o = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), s = n(4), r = function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }(s), a = r.default._getLogger("IframeHost"), c = function() {
    function e(t) {
      i(this, e), this._driver = t, this._sources = [], this._driver.on("connected", this.handleConnected, this), this._driver.on("disconnected", this.handleDisconnected, this), window.addEventListener("message", this.receiveMessage.bind(this), !1)
    } return o(e, [{
      key: "receiveMessage", value: function(e) {
        if ("pubsub" == e.data.twitch_protocol) switch (a.debug("Received message: " + JSON.stringify(e.data)), e.data.type) {
          case "LISTEN": this.handleListen(e.source, e.data.nonce, e.data.data); break;
          case "UNLISTEN": this.handleUnlisten(e.source, e.data.nonce, e.data.data); break;
          case "connect": this._sources.push(e.source), this._driver.connect(); break;
          case "verify": e.source.postMessage({
            twitch_protocol: "pubsub", type: "verify"
          }, "*")
        }
      }
    }, {
      key: "handleListen", value: function(e, t, n) {
        var i = function() {
          e.postMessage({
            twitch_protocol: "pubsub", type: "success", nonce: t
          }, "*")
        }, o = function(n) {
          e.postMessage({
            twitch_protocol: "pubsub", type: "failure", nonce: t, error: n
          }, "*")
        }, s = function(t) {
          e.postMessage({
            twitch_protocol: "pubsub", type: "message", topic: n.topics[0], message: t
          }, "*")
        }; this._driver.Listen({
          topic: n.topics[0], auth: n.auth_token, success: i, failure: o, message: s
        })
      }
    }, {
      key: "handleUnlisten", value: function(e, t, n) {
        var i = function() {
          e.postMessage({
            twitch_protocol: "pubsub", type: "success", nonce: t
          }, "*")
        }, o = function(n) {
          e.postMessage({
            twitch_protocol: "pubsub", type: "failure", nonce: t, error: n
          }, "*")
        }, s = function(t) {
          e.postMessage({
            twitch_protocol: "pubsub", type: "message", topic: n.topics[0], message: t
          }, "*")
        }; this._driver.Unlisten({
          topic: n.topics[0], auth: n.auth_token, success: i, failure: o, message: s
        })
      }
    }, {
      key: "handleConnected", value: function() {
        for (var e = 0; e < this._sources.length; e++)this._sources[e].postMessage({
          twitch_protocol: "pubsub", type: "connected"
        }, "*")
      }
    }, {
      key: "handleDisconnected", value: function() {
        for (var e = 0; e < this._sources.length; e++)this._sources[e].postMessage({
          twitch_protocol: "pubsub", type: "disconnected"
        }, "*")
      }
    }]), e
  }(); t.default = c
}, function(e, t, n) {
  "use strict"; function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  } function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  } function s(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t
  } function r(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e, enumerable: !1, writable: !0, configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }); var a = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), c = n(12), u = i(c), l = n(4), f = i(l), h = n(5), d = i(h), p = n(58), _ = i(p), g = n(29), y = i(g), b = f.default._getLogger("WebsocketClient"), v = "wss://localhost.rig.twitch.tv:3003/v1", m = "wss://pubsub-edge-darklaunch.twitch.tv:443/v1", w = "ws://localhost:6900/v1", k = function(e) {
    function t(e) {
      o(this, t); var n = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); switch (n._opts = e, n._env = e.env, n._stats = e.stats, n._env) {
        case "production": n._addr = v; break;
        case "darklaunch": n._addr = m; break;
        case "development": n._addr = w; break;
        default: n._addr = v
      }return window.WebSocket ? (n._queuedRequests = [], n._pendingResponses = new y.default, n._pendingReplayResponses = new y.default, n._listens = new u.default, n._replays = new y.default, n._replaysSize = 0, n._firstConnectTime = n._firstListenTime = 0, n._connectCalled = n._reconnecting = !1, n._primarySocket = new _.default({
        stats: n._stats, addr: n._addr
      }), n._bindPrimary(n._primarySocket), n) : s(n)
    } return r(t, e), a(t, [{
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
        b.debug("primary open: " + this._primarySocket._id), 0 === this._firstConnectTime && (this._firstConnectTime = d.default.time.now(), this._firstListenTimeout = setTimeout(this._neverListened.bind(this), 45e3)), this._connected = !0, this._trigger("connected"), this._flushQueuedRequests()
      }
    }, {
      key: "_onResponse", value: function(e) {
        if (b.debug("primary response: " + JSON.stringify(e)), this._pendingResponses.has(e.nonce)) {
          var t = this._pendingResponses.get(e.nonce); b.debug("responseInfo: " + JSON.stringify(t)), clearTimeout(t.timeout), this._pendingResponses.remove(e.nonce), "" === e.error ? ("LISTEN" === t.message.type ? (0 === this._firstListenTime && (clearTimeout(this._firstListenTimeout), this._firstListenTime = d.default.time.now(), this._stats.logTimer("time_to_first_listen", this._firstListenTime - this._firstConnectTime, .1)), this._replays.set(e.nonce, {
            nonce: e.nonce, message: t.callbacks.message, topic: t.topic, auth: t.auth
          }), t.callbacks.message && this._listens.on(t.topic, t.callbacks.message, this)) : "UNLISTEN" === t.message.type && (this._replays.remove(e.nonce), t.callbacks.message && this._listens.off(t.topic, t.callbacks.message, this)), t.callbacks.success && t.callbacks.success()) : t.callbacks.failure && t.callbacks.failure(e.error)
        }
      }
    }, {
      key: "_onResponseTimeout", value: function(e) {
        if (this._pendingResponses.has(e)) {
          var t = this._pendingResponses.get(e); this._pendingResponses.remove(e), t.opts.failure && t.opts.failure("response timeout")
        }
      }
    }, {
      key: "_onMessage", value: function(e) {
        b.debug("primary message: " + JSON.stringify(e)), this._listens._trigger(e.data.topic, e.data.message)
      }
    }, {
      key: "_onConnectionFailure", value: function() {
        b.debug("connection failure"), this._trigger("disconnected"), this._notifyWhenOpen = !0, this._onReconnect()
      }
    }, {
      key: "_onReconnect", value: function() {
        b.debug("reconnecting..."), this._reconnecting = !0, this._backupSocket = new _.default({
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
        b.debug("Backup socket opened"), this._replays.size() > 0 ? this._replayBackup() : (this._swapSockets(), this._notifyWhenOpen && (b.debug("triggering connected"), this._notifyWhenOpen = !1, this._trigger("connected")))
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
        this._pendingReplayResponses.has(e.nonce) && "" === e.error && (this._pendingReplayResponses.remove(e.nonce), 0 === this._pendingReplayResponses.size() && (this._swapSockets(), this._notifyWhenOpen && (b.debug("triggering connected"), this._notifyWhenOpen = !1, this._trigger("connected"))))
      }
    }, {
      key: "_swapSockets", value: function() {
        b.debug("swapping primary " + this._primarySocket._id + " and backup " + this._backupSocket._id), this._unbindPrimary(this._primarySocket), this._unbindBackup(this._backupSocket), this._bindPrimary(this._backupSocket), this._primarySocket.close(), this._primarySocket = this._backupSocket, this._reconnecting = !1, this._flushQueuedRequests()
      }
    }, {
      key: "Listen", value: function(e) {
        if (window.WebSocket) {
          b.debug("listening on " + e.topic); var t = this._generateNonce(), n = {
            type: "LISTEN", nonce: t, data: {
              topics: [e.topic], auth_token: e.auth
            }
          }; this._queuedSend(t, n, e)
        }
      }
    }, {
      key: "Unlisten", value: function(e) {
        if (window.WebSocket) {
          if (b.debug("unlistening on " + e.topic + "(" + this._listens.count(e.topic) + " listeners)"), this._listens.count(e.topic) > 1) {
            this._listens.off(e.topic, e.message); for (var t in this._replays.map()) if (this._replays.get(t).message === e.message) {
              this._replays.remove(t); break
            } return e.success && e.success(), void b.debug("now have " + this._listens.count(e.topic) + " listeners")
          } var n = this._generateNonce(), i = {
            type: "UNLISTEN", nonce: n, data: {
              topics: [e.topic]
            }
          }; this._queuedSend(n, i, e)
        }
      }
    }, {
      key: "_queuedSend", value: function(e, t, n) {
        this._reconnecting || !1 === this._primarySocket._isReady() ? (b.debug("queuing"), this._queuedRequests.push({
          nonce: e, msg: t, opts: n
        })) : (b.debug("sending immediately"), this._send(e, t, n))
      }
    }, {
      key: "_flushQueuedRequests", value: function() {
        for (b.debug("flushing " + this._queuedRequests.length + " listen/unlistens"); this._queuedRequests.length > 0;) {
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
        return d.default.generateString(30)
      }
    }, {
      key: "_jitteredReconnectDelay", value: function() {
        return d.default.randomInt(2e3)
      }
    }]), t
  }(u.default); t.default = k
}, function(e, t, n) {
  "use strict"; function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  } function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  } function s(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t
  } function r(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e, enumerable: !1, writable: !0, configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }); var a = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), c = n(12), u = i(c), l = n(4), f = i(l), h = n(5), d = i(h), p = f.default._getLogger("PubsubSocket"), _ = function(e) {
    function t(e) {
      o(this, t); var n = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return n._opts = e, n._addr = e.addr, n._stats = e.stats, n._connectionAttempts = 0, n._sentPing = n._receivedPong = !1, n._id = "[" + d.default.generateString(10) + "] ", window.addEventListener("beforeunload", n._beforeUnload.bind(n)), n
    } return r(t, e), a(t, [{
      key: "connect", value: function() {
        p.debug(this._id + "connecting to " + this._addr), this._connecting = !0, this._socketConnectTime = d.default.time.now(); try {
          this._socket = new WebSocket(this._addr), this._socket.onmessage = this._onMessage.bind(this), this._socket.onerror = this._onError.bind(this), this._socket.onclose = this._onClose.bind(this), this._socket.onopen = this._onOpen.bind(this)
        } catch (e) {
          this._stats.logCounter("socket.error.security_err", 1, 1), this._trigger("connection_failure")
        }
      }
    }, {
      key: "close", value: function() {
        p.debug(this._id + "closing"), this._closing = !0, this._clearTimeouts(), this._socket.close()
      }
    }, {
      key: "send", value: function(e) {
        p.debug(this._id + "sending " + JSON.stringify(e)), this._isReady() ? this._socket.send(JSON.stringify(e)) : this._trigger("error", "not_ready")
      }
    }, {
      key: "_isReady", value: function() {
        return p.debug(this._id + "_isReady called"), !!this._socket && this._socket.readyState === WebSocket.OPEN
      }
    }, {
      key: "_onMessage", value: function(e) {
        p.debug(this._id + "received message: " + e.data); try {
          var t = JSON.parse(e.data); switch (t.type) {
            case "RESPONSE": this._trigger("response", t); break;
            case "MESSAGE": this._trigger("message", t); break;
            case "PONG": this._receivedPong = !0; break;
            case "RECONNECT": this._trigger("reconnect")
          }
        } catch (e) {
          this._stats.logLine("onMessage JSON Parse error: " + e)
        }
      }
    }, {
      key: "_onError", value: function(e) {
        p.debug(this._id + "error: " + JSON.stringify(e))
      }
    }, {
      key: "_onClose", value: function(e) {
        if (p.debug(this._id + "onClose triggered with code " + e.code + "(closing = " + this._closing + ", connecting = " + this._connecting + ")"), this._clearTimeouts(), this._connecting) {
          var t = Math.pow(2, this._connectionAttempts); t > 120 && (t = 120), p.debug(this._id + "reconnecting in " + t + " seconds"), this._connectionAttempts += 1, this._nextConnectionAttempt = setTimeout(this.connect.bind(this), 1e3 * t)
        } else if (this._closing) this._closed = !0, this._trigger("connection_failure"); else {
          if (this._windowUnloading) return; p.debug(this._id + "unexpected close"), this._stats.logCounter("socket.error.unexpected_closed", 1, 1), this._stats.logCounter("socket.error.close." + e.code, 1, 1); var n = "pubsub-js-client unexpected_close. code: " + e.code + ", reason: " + e.reason + ", wasClean: " + e.wasClean; this._stats.logLine(n), this._closed = !0, this._trigger("connection_failure")
        }
      }
    }, {
      key: "_onOpen", value: function(e) {
        p.debug(this._id + " socket opened"), this._connectionAttempts = 0, this._connecting = !1, this._socketConnectTime && this._stats.logTimer("socket.connect", d.default.time.now() - this._socketConnectTime, .1), this._stats.logCounter("socket.connection_retries." + this._connectionAttempts, 1, .1), this._ping(), this._pingInterval = window.setInterval(this._ping.bind(this), 24e4), this._trigger("open")
      }
    }, {
      key: "_ping", value: function() {
        p.debug(this._id + "sending PING"); try {
          this._socket.send(JSON.stringify({
            type: "PING"
          })), this._sentPing = !0, this._pongTimeout && clearTimeout(this._pongTimeout), this._pongTimeout = setTimeout(this._pongTimedOut.bind(this), 3e4)
        } catch (e) {
          this._stats.logCounter("socket.error.ping_send_error", 1, 1), this._stats.logLine("ping error: closed: " + this._closed + ", error: " + e), this.close()
        }
      }
    }, {
      key: "_pongTimedOut", value: function() {
        this._sentPing && !this._receivedPong && (p.debug(this._id + "Pong timed out!"), this._stats.logCounter("socket.error.pong_timed_out", 1, 1), this.close())
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
  }(u.default); t.default = _
}, function(e, t, n) {
  "use strict"; function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  } function o(e, t) {
    var n = u[e]; if (!n) throw new Error("Invalid environment - got " + e); if (!t) throw new Error("Invalid prefix - got " + t); window[c] = window[c] || {
    }; var i = window[c]; i[e] || (i[e] = new l(n)); var o = i[e]; return new f(o, t)
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }); var s = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), r = 500, a = 20, c = "__Twitch__statsInstances_1", u = {
    production: {
      addr: "https://client-event-reporter.twitch.tv"
    }, darklaunch: {
      addr: "https://client-event-reporter-darklaunch.twitch.tv"
    }
  }; u.staging = u.darklaunch, u.development = u.darklaunch, u.test = u.darklaunch; var l = function() {
    function e(t) {
      if (i(this, e), !t) throw new Error("config is required"); this._addr = t.addr, this._resetCombinedStats(), this._recordDelay = r, this._maxPendingStats = a
    } return s(e, [{
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
        var e = this._combinedStats; this._resetCombinedStats(); var t = this._addr + "/v1/stats", n = this._createCorsRequest("POST", t); if (!n) return void console.log("WARNING: Cannot send stats because CORS is unsupported"); n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.setRequestHeader("Content-Type", "application/json"), n.send(JSON.stringify(e))
      }
    }, {
      key: "_numPendingStats", value: function() {
        var e = this._combinedStats; return e.timers.length + e.counters.length + e.log_lines.length + e.gauges.length
      }
    }, {
      key: "_createCorsRequest", value: function(e, t) {
        var n = new XMLHttpRequest; return "withCredentials" in n ? n.open(e, t, !0) : "undefined" != typeof XDomainRequest ? (n = new XDomainRequest, n.open(e, t)) : n = null, n
      }
    }]), e
  }(), f = function() {
    function e(t, n) {
      if (i(this, e), !t) throw new Error("Missing backend"); if (!n) throw new Error("Missing prefix"); this._backend = t, this._prefix = n
    } return s(e, [{
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
  }(); t.StatsBackend = l, t.PrefixedStats = f, t.default = {
    getInstance: o
  }
}, function(e, t, n) {
  "use strict"; function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  } function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }); var s = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), r = n(5), a = i(r), c = n(4), u = i(c), l = "https://pubster.twitch.tv/publish", f = "https://pubster-darklaunch.twitch.tv/publish", h = "pubsubtest.unique.", d = "pubsubtest.shared." + a.default.randomInt(10), p = u.default._getLogger("PubsubTest"), _ = function() {
    function e(t) {
      if (o(this, e), !window.$) return void p.debug("PubsubTest could not be enabled. JQuery is undefined."); switch (p.debug("PubsubTest enabled"), this._env = t.env, this._driver = t.driver, this._stats = t.stats, this._env) {
        case "production": this._addr = l; break;
        case "darklaunch": this._addr = f; break;
        default: this._env = "production", this._addr = l
      }this._statKeys = {
        uniqueSuccess: "test.unique.success", uniqueFailure: "test.unique.failure", sharedSuccess: "test.shared.success", sharedFailure: "test.shared.failure"
      }, this._uniqueKey = h + a.default.generateString(20), this._sharedKey = d, this._listeningUnique = this._listeningShared = !1, this.sendListens()
    } return s(e, [{
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
        p.debug("startTesting"), this._driver.on("connected", this.resumeTesting, this), this._driver.on("disconnected", this.stopTesting, this), this.checkAndSend(), this._publishInterval = window.setInterval(this.checkAndSend.bind(this), 6e4)
      }
    }, {
      key: "resumeTesting", value: function() {
        p.debug("resumeTesting"), this.checkAndSend(), this._publishInterval = window.setInterval(this.checkAndSend.bind(this), 6e4)
      }
    }, {
      key: "stopTesting", value: function() {
        p.debug("stopTesting"), clearInterval(this._publishInterval), this._receivedUniqueMessage = this._sentUniqueMessage = !1, this._receivedSharedMessage = this._sentSharedMessage = !1
      }
    }, {
      key: "checkAndSend", value: function() {
        p.debug("checkAndSend: unique: sent = " + this._sentUniqueMessage + ", received = " + this._receivedUniqueMessage), !this._receivedUniqueMessage && this._sentUniqueMessage && (p.debug("unique failure"), this._stats.logCounter(this._statKeys.uniqueFailure, 1, 1)), !this._receivedSharedMessage && this._sentSharedMessage && (p.debug("shared failure"), this._stats.logCounter(this._statKeys.sharedFailure, 1, 1)), this._receivedUniqueMessage = this._sentUniqueMessage = !1, this._receivedSharedMessage = this._sentSharedMessage = !1, this._expectedMessage = a.default.generateString(30), $.ajax({
          type: "POST", url: this._addr, contentType: "application/json", timeout: 3e4, data: JSON.stringify({
            topics: [this._uniqueKey], data: this._expectedMessage
          }), success: function() {
            p.debug("unique message sent"), this._sentUniqueMessage = !0
          }.bind(this)
        }), this._sentUniqueMessageTime = a.default.time.now(), Math.random() < 1e-4 && ($.ajax({
          type: "POST", url: this._addr, contentType: "application/json", timeout: 3e4, data: JSON.stringify({
            topics: [this._sharedKey], data: this._expectedMessage
          }), success: function() {
            p.debug("shared message sent"), this._sentSharedMessage = !0
          }.bind(this)
        }), this._sentSharedMessageTime = a.default.time.now())
      }
    }, {
      key: "_gotUniqueMessage", value: function(e) {
        if (p.debug("received unique message: " + e), e === this._expectedMessage) {
          var t = a.default.time.now() - this._sentUniqueMessageTime; this._receivedUniqueMessage = !0, this._stats.logTimer(this._statKeys.uniqueSuccess, t, .1), this._stats.logCounter(this._statKeys.uniqueSuccess, 1, .1)
        }
      }
    }, {
      key: "_gotSharedMessage", value: function(e) {
        if (e === this._expectedMessage) {
          var t = a.default.time.now() - this._sentSharedMessageTime; this._receivedSharedMessage = !0, this._stats.logTimer(this._statKeys.sharedSuccess, t, .1), this._stats.logCounter(this._statKeys.sharedSuccess, 1, .1)
        }
      }
    }]), e
  }(); t.default = _
}, function(e, t, n) {
  "use strict"; var i = function() {
    function e() {
      this.environment = "production", this.pubsubEnvironment = "production"
    } return e.prototype.send = function(e, t, n, i, o, s) {
      var r = new XMLHttpRequest; r.open("POST", "https://api.twitch.tv/v5/extensions/message/" + e.channelId, !0), r.setRequestHeader("Client-ID", e.clientId), r.setRequestHeader("Content-Type", "application/json"), r.addEventListener("load", o), r.addEventListener("error", s), r.send(JSON.stringify({
        auth: e.token, targets: [t], message: n, content_type: i
      }))
    }, e
  }(); t.a = i
}, function(e, t, n) {
  "use strict"; (function(e) {
    var n, i, o, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }; !function(r, a) {
      "object" === s(t) && "object" === s(e) ? e.exports = a() : (i = [], n = a, void 0 !== (o = "function" == typeof n ? n.apply(t, i) : n) && (e.exports = o))
    }(0, function() {
      return function(e) {
        function t(i) {
          if (n[i]) return n[i].exports; var o = n[i] = {
            i: i, l: !1, exports: {
            }
          }; return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        } var n = {
        }; return t.m = e, t.c = n, t.i = function(e) {
          return e
        }, t.d = function(e, n, i) {
          t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1, enumerable: !0, get: i
          })
        }, t.n = function(e) {
          var n = e && e.__esModule ? function() {
            return e.default
          } : function() {
            return e
          }; return t.d(n, "a", n), n
        }, t.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/assets/", t(t.s = 1)
      }([, function(e, t, n) {
        function i(e) {
          return !!(e && e.timing && e.getEntriesByType && e.setResourceTimingBufferSize && e.clearResourceTimings)
        } Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.isSniffingAllowed = i, n.d(t, "NetworkSniffer", function() {
          return o
        }); var o = function() {
          function e(e, t) {
            this.performance = e, this.frameURL = t, this.resourceEntriesIndex = 0, this.resourceListeners = [], this.startCalled = !1, console.assert(i(e), "performance object does not support sniffing")
          } return e.prototype.start = function() {
            return !this.startCalled && (this.startCalled = !0, this.setResourceBufferSize(), setInterval(this.processNewResourceTimings.bind(this), 1e3), !0)
          }, e.prototype.getFrameTiming = function() {
            return this.performance.timing
          }, e.prototype.getAvailableResourceTimings = function() {
            return this.performance.getEntriesByType("resource")
          }, e.prototype.addResourceListener = function(e) {
            this.resourceListeners.push(e)
          }, e.prototype.removeResourceListener = function(e) {
            this.resourceListeners = this.resourceListeners.filter(function(t) {
              return t !== e
            })
          }, e.prototype.setResourceBufferSize = function() {
            this.performance.setResourceTimingBufferSize(1e3)
          }, e.prototype.clearResourceBuffer = function() {
            this.resourceEntriesIndex = 0, this.performance.clearResourceTimings(), this.setResourceBufferSize()
          }, e.prototype.isResourceBufferAlmostFull = function() {
            return this.performance.getEntriesByType("resource").length >= 750
          }, e.prototype.processNewResourceTimings = function() {
            var e = this; this.performance.getEntriesByType("resource").slice(this.resourceEntriesIndex).forEach(function(t) {
              e.resourceEntriesIndex++ , e.fireResourceListeners(t)
            }), this.isResourceBufferAlmostFull() && this.clearResourceBuffer()
          }, e.prototype.fireResourceListeners = function(e) {
            this.resourceListeners.forEach(function(t) {
              t(e)
            })
          }, e
        }()
      }])
    })
  }).call(t, n(63)(e))
}, function(e, t, n) {
  "use strict"; e.exports = function(e) {
    return e.webpackPolyfill || (e.deprecate = function() {
    }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
      enumerable: !0, get: function() {
        return e.l
      }
    }), Object.defineProperty(e, "id", {
      enumerable: !0, get: function() {
        return e.i
      }
    }), e.webpackPolyfill = 1), e
  }
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }); var i = t.SupervisorAction = void 0; !function(e) {
    e.SupervisorReady = "supervisor-ready", e.SupervisorInit = "supervisor-init"
  }(i || (t.SupervisorAction = i = {
  }))
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }); var i = (t.DEFAULT_PANEL_HEIGHT = 300, t.ExtensionFrameEvents = void 0); !function(e) {
    e.ExtensionFrameLoaded = "extensionFrameLoaded", e.IdentityLinked = "identityLinked", e.RequestModal = "requestModal", e.ShowBitsBalance = "showBitsBalance", e.ShowUseBitsSuccess = "showUseBitsSuccess", e.UseBitsError = "useBitsError"
  }(i || (t.ExtensionFrameEvents = i = {
  }))
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }); var i = t.PlaybackMode = void 0; !function(e) {
    e.Video = "video", e.Audio = "audio", e.Remote = "remote", e.ChatOnly = "chat-only"
  }(i || (t.PlaybackMode = i = {
  }))
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }); t.FEATURE_CONFIG = {
    bits: !0
  }
}, function(e, t, n) {
  "use strict"; n.d(t, "a", function() {
    return s
  }); var i = n(0), o = (n.n(i), {
  }), s = function() {
    function e() {
      this.followChannel = function(e) {
        window.parent.postMessage({
          action: i.FunctionAction.FollowAction, payload: {
            channel: e
          }
        }, "*")
      }, this.requestIdShare = function() {
        window.parent.postMessage({
          action: i.FunctionAction.IdShareRequest
        }, "*")
      }, this.onFollow = function(e) {
        o[i.FunctionAction.FollowComplete] = e
      }, this.onControllerMessage = function(e) {
        var t = e.data; if (e.source === window.parent && o[t.action]) switch (t.action) {
          case i.FunctionAction.FollowComplete: o[i.FunctionAction.FollowComplete](t.didFollow, t.channel); break;
          default: o[t.action]()
        }
      }
    } return Object.defineProperty(e.prototype, "publicAPI", {
      get: function() {
        return {
          followChannel: this.followChannel, onFollow: this.onFollow, requestIdShare: this.requestIdShare
        }
      }, enumerable: !0, configurable: !0
    }), e
  }()
}, function(e, t, n) {
  "use strict"; n.d(t, "a", function() {
    return r
  }); var i = n(20), o = (n.n(i), n(39)), s = (n.n(o), new Error("Bits transactions are not supported in the current context.")), r = function() {
    function e(e) {
      var t = this; this.useLoopback = !1, this.onControllerMessage = function(e) {
        var n = e.data; if (e.source === window.parent) switch (n.action) {
          case i.ExtensionAction.TwitchExtBitsTransactionComplete: t.onTransactionCompleteCallback && t.onTransactionCompleteCallback({
            product: n.product, transactionId: n.transactionId, userId: n.userId, displayName: n.displayName, initiator: n.initiator, transactionReceipt: n.transactionReceipt
          }); break;
          case i.ExtensionAction.TwitchExtBitsProducts: t.setProducts(n.products); break;
          case i.FunctionAction.UseBitsComplete: (!n.didConfirm || !n.didUseBits) && t.onTransactionCancelledCallback && t.onTransactionCancelledCallback()
        }
      }, this.showBitsBalance = function() {
        window.parent.postMessage({
          action: i.ExtensionAction.TwitchExtBitsOnHover
        }, "*")
      }, this.useBits = function(e) {
        t.useLoopback ? t.loopbackUseBits(e) : window.parent.postMessage({
          action: i.ExtensionAction.TwitchExtUseBits, sku: e
        }, "*")
      }, this.onTransactionComplete = function(e) {
        t.onTransactionCompleteCallback = e
      }, this.onTransactionCancelled = function(e) {
        t.onTransactionCancelledCallback = e
      }, this.getProducts = function() {
        return t.twitchExt.features && t.twitchExt.features.bits ? t.bitsProducts : Promise.reject(s)
      }, this.setUseLoopback = function(e) {
        t.useLoopback = e
      }, this.loopbackUseBits = function(e) {
        var n = t.twitchExt && t.twitchExt.getAuthData() ? t.twitchExt.getAuthData().userId : "0", i = n + "." + (new Date).valueOf(), s = {
          transactionId: i, product: {
            sku: e, displayName: "test SKU", cost: {
              amount: "1", type: "bits"
            }
          }, userId: n, displayName: "bits user", initiator: o.Initiator.CurrentUser
        }; window.setTimeout(function() {
          t.onTransactionCompleteCallback && t.onTransactionCompleteCallback(s)
        }, 1e3)
      }, this.twitchExt = e, this.setupBitsProducts()
    } return Object.defineProperty(e.prototype, "publicAPI", {
      get: function() {
        return {
          getProducts: this.getProducts, useBits: this.useBits, onTransactionComplete: this.onTransactionComplete, onTransactionCancelled: this.onTransactionCancelled, showBitsBalance: this.showBitsBalance, setUseLoopback: this.setUseLoopback
        }
      }, enumerable: !0, configurable: !0
    }), e.prototype.setupBitsProducts = function() {
      var e = this; this.bitsProducts = new Promise(function(t) {
        e.setProducts = t
      })
    }, e
  }()
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ExtensionFrame = void 0; var i = n(9), o = n(33), s = n(71), r = n(72), a = n(13), c = n(0), u = n(14), l = n(36), f = n(79), h = n(24), d = n(39), p = n(87), _ = n(23), g = n(88), y = n(40), b = n(89), v = n(129), m = n(131), w = n(132), k = n(22), x = n(49), E = n(37), T = function() {
    var e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(e, t) {
      e.__proto__ = t
    } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
    }; return function(t, n) {
      function i() {
        this.constructor = t
      } e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
    }
  }(), P = Object.assign || function(e) {
    for (var t, n = 1, i = arguments.length; n < i; n++) {
      t = arguments[n]; for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
    } return e
  }, S = ["allow-forms", "allow-scripts", "allow-same-origin"], O = 700, C = 300, M = function(e) {
    return [137512364, 188863650, 188864445, 190160460, 192718746, 138600360, 138601808, 119631962].indexOf(e) > -1
  }, R = function(e) {
    function t(t) {
      var n = e.call(this) || this; return n.useBitsInProgress = !1, n.handleUserAction = {
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
        }, focusin: function(e) {
          e.payload; if (this.params.anchor === c.ExtensionAnchor.Overlay) {
            for (var t = this.iframe; t && !t.hasAttribute("tabindex");)t = t.parentElement; t && t.focus()
          }
        }
      }, n.hasSentViewEvent = !1, n.hasBootstrapped = !1, n.hasLoaded = !1, n.throttleDblClick = (0, r.throttle)(function(e, t) {
        var n = t.payload, i = e.getBoundingClientRect(), o = i.left, s = i.top; e.dispatchEvent(new MouseEvent("dblclick", {
          bubbles: !0, clientX: n.clientX, clientY: n.clientY, screenX: o + n.clientX, screenY: s + n.clientY
        }))
      }, 1e3), n.isVisible = !0, n.destroy = function() {
        n.unsetupListeners(), n.contextManager.destroy(), n.coordinator.destroy(), n.iframe.remove()
      }, n.linkIdentity = function() {
        var e = n.extension.clientId, t = a.tokenManager.getToken(e); t.isLinked || (0, u.linkUser)(e, t.token, !0).then(function(t) {
          var i = t.token; a.tokenManager.registerToken(e, i), n.tracker.trackEvent("extension_ui_interaction_client", {
            extension_interaction: "grant"
          })
        })
      }, n.unlinkIdentity = function() {
        var e = n.extension.clientId, t = a.tokenManager.getToken(e); t.isLinked && (0, u.linkUser)(e, t.token, !1).then(function(t) {
          var i = t.token; a.tokenManager.registerToken(e, i), n.tracker.trackEvent("extension_ui_interaction_client", {
            extension_interaction: "revoke"
          })
        })
      }, n.visibilityChanged = function() {
        if (!n.hasSentViewEvent && n.params.anchor === c.ExtensionAnchor.Panel && n.params.mode === c.ExtensionMode.Viewer) {
          var e = s.domUtils.getElementBoundingClientRect(n.iframe), t = e.bottom - e.top, i = s.domUtils.getWindowInnerHeight(); 100 * (Math.min(Math.max(i - e.top, 0), t) / t) >= 75 && (n.tracker.trackEvent("extension_view", {
            pct_view_visible: 75, px_view_visible: Math.floor(75 * t / 100)
          }), n.hasSentViewEvent = !0)
        }
      }, n.setVisible = function(e) {
        if (n.hasLoaded && n.isVisible !== e) {
          n.isVisible = e; var t = e ? n.contextManager.context : null; n.coordinator.sendVisibilityChanged(e, t)
        }
      }, n.setPosition = function(e) {
        n.coordinator.sendPositionChange(e)
      }, n.buildTracker = function() {
        var e = n.params; return e.extensionTracker || new h.ExtensionTracker({
          anchor: e.anchor, dobbin: e.dobbin, extension: n.extension, extensionMode: e.mode, iframe: n.iframe, requiredProps: {
            login: e.trackingProperties.login, login_id: e.loginId, channel: e.trackingProperties.channel, channel_id: e.channelId, device_id: e.trackingProperties.device_id, platform: e.trackingProperties.platform, player_type: e.trackingProperties.player_type, locale: n.locale
          }
        })
      }, n.buildContextManager = function() {
        var e = n.params; return e.contextManager || new f.ContextManager(e.mode)
      }, n.buildCoordinator = function() {
        return n.params.extensionCoordinator || new d.ExtensionCoordinator(n.iframe)
      }, n.buildFunctionManager = function() {
        return n.params.functionManager || new p.FunctionManager(n.coordinator, n.params.loginId, n.emitConfirmationRequest)
      }, n.buildPurchaseService = function() {
        return n.params.purchaseService || new g.PurchaseService
      }, n.getExtensionHeight = function() {
        var e = n.params.mode, t = n.extension.panelHeight; return e === c.ExtensionMode.Config ? O : t ? Number(t) : C
      }, n.getDefaultAnchorAttributes = function() {
        var e = {
        }; return n.params.mode === c.ExtensionMode.Viewer && n.extensionOptions.platform !== c.ExtensionPlatform.Mobile && (e.scrolling = "no"), e
      }, n.getAnchorAttributes = function() {
        var e = {
        }; switch (n.params.anchor) {
          case c.ExtensionAnchor.Panel: if (n.extensionOptions.platform === c.ExtensionPlatform.Mobile) {
            e.style = "height: 100%;"; break
          } var t = n.getExtensionHeight(); e.style = "height: " + t + "px;"; break;
          case c.ExtensionAnchor.Overlay: case c.ExtensionAnchor.Component: case c.ExtensionAnchor.Hidden: return n.getDefaultAnchorAttributes()
        }return e
      }, n.applyAnchorAttributes = function(e, t) {
        var i = n.getAnchorAttributes().style; i && e.setAttribute("style", i)
      }, n.createSupervisorIFrame = function(e, t, i) {
        var o = n.params.mode, s = document.createElement("iframe"); switch (s.setAttribute("class", e), s.setAttribute("sandbox", S.join(" ")), s.setAttribute("frameBorder", "0"), s.setAttribute("scrolling", "no"), s.setAttribute("src", _.supervisor.supervisorURL), o) {
          case c.ExtensionMode.Viewer: n.applyAnchorAttributes(s, t), n.applyViewerSandboxAttrs(s); break;
          case c.ExtensionMode.Dashboard: var r = n.extension.panelHeight || C; s.setAttribute("style", "height: " + r + "px;"), n.applyConfigSandboxAttrs(s); break;
          case c.ExtensionMode.Config: s.setAttribute("style", "width: 100%; height: " + O + "px;"), n.applyConfigSandboxAttrs(s)
        }return s.style.display = "none", s
      }, n.initSupervisedExtension = function() {
        var e = n.params, t = e.anchor, i = e.mode, s = n.extensionOptions.platform, r = n.extension.getViewerUrlForContext(s, i, t), a = ""; switch (i) {
          case c.ExtensionMode.Viewer: a = n.createViewerSandboxAttrs(); break;
          case c.ExtensionMode.Dashboard: case c.ExtensionMode.Config: a = n.getConfigWhitelist()
        }var u = n.getAnchorAttributes(); u.sandbox = a || S.join(" "); var l = {
          extensionURL: (0, o.appendQueryParams)(r, n.extensionOptions), hostOrigin: window.location.origin, iframeAttrs: u
        }; n.coordinator.sendSupervisorInit(l)
      }, n.getExtensionAuth = function() {
        var e = a.tokenManager.getToken(n.extension.clientId); return {
          channelId: e.payload.channel_id, clientId: n.extension.clientId, token: e.token, userId: e.payload.opaque_user_id
        }
      }, n.onLongtask = function(e) {
        n.tracker.trackEvent("extension_longtask", {
          longtask_duration: e.payload.longtask_duration
        })
      }, n.onMouseEnter = function(e) {
        n.tracker.trackEvent("extension_mouseenter", {
        })
      }, n.handleToken = function(e, t) {
        n.hasLoaded && !e.isNearExpiration && (n.hasBootstrapped ? n.shouldReloadExtension(e, t) ? n.reloadExtension() : n.sendAuthUpdate(e) : n.sendBootstrap(e))
      }, n.shouldReloadExtension = function(e, t) {
        var i = e.isLinked !== t.isLinked; return i && !e.isLinked || i && !n.extension.bitsEnabled
      }, n.onExtensionLoaded = function(e) {
        n.hasLoaded = !0, n.contextManager.initializeContext(), n.tracker.trackEvent("extension_helper_load_success", {
        }), n.iframe.style.removeProperty("display"); var t = a.tokenManager.getToken(n.extension.clientId); n.handleToken(t, t), n.emit(c.ExtensionFrameEvents.ExtensionFrameLoaded, n.extension.asObject), n.sendExtensionProductPrices(), n.sendExtensionBitsProductPrices()
      }, n.onExtensionUserAction = function(e) {
        n.handleUserAction[e.payload.type].call(n, e)
      }, n.onExtensionPubSubRecived = function(e) {
        var t = e.payload, i = e.payload.sequenceNumber; if (n.lastSequenceNumber) {
          n.lastSequenceTime !== t.sequenceStart && (n.lastSequenceNumber = 0); for (var o = n.lastSequenceNumber + 1; o < i; o++)t.sequenceNumber = o, n.tracker.trackEvent("extension_pubsub_missed", t)
        } n.lastSequenceNumber = i, n.lastSequenceTime = t.sequenceStart, t.sequenceNumber = i, n.tracker.trackEvent("extension_pubsub_received", t)
      }, n.onExtensionNetworkTraffic = function(e) {
        n.tracker.trackEvent("extension_network_request", {
          request_duration: e.payload.duration, request_end_time: e.payload.endTime, request_file_type: (0, o.getFileType)(e.payload.url), request_start_time: e.payload.startTime, request_url: e.payload.url
        })
      }, n.emitConfirmationRequest = function(e) {
        n.emit(c.ExtensionFrameEvents.RequestModal, e)
      }, n.sendAuthUpdate = function(e) {
        n.sendIdentityLinkUpdate(e), n.coordinator.sendExtensionAuth(n.getExtensionAuth())
      }, n.sendBootstrap = function(e) {
        n.hasBootstrapped = !0, n.sendIdentityLinkUpdate(e), n.coordinator.sendExtensionBootstrap(n.getExtensionAuth())
      }, n.sendIdentityLinkUpdate = function(e) {
        var t = e.isUserLoggedIn && n.canRequestIdLink; n.emit(c.ExtensionFrameEvents.IdentityLinked, e.isLinked, t)
      }, n.beginPurchase = function(e) {
        var t = e.payload.sku, i = n.extension.vendorCode; n.extensionProducts.then(function(e) {
          var o = e.products.find(function(e) {
            return e.sku === t
          }); if (!o) throw new Error("An extension product with the SKU " + t + " could not be found."); var s = {
            asin: o.asin, developer_name: o.developer_name, item_name: o.title, item_description: o.description, item_description_short: o.short_description, item_price: o.price.price, item_price_currency: o.price.currency_unit, vendor_code: i, sku: o.sku
          }; n.tracker.trackEvent("extension_start_buy", s), n.onBeginPurchase && n.onBeginPurchase(n.formatExtensionProductForDisplay(o), function() {
            return n.tracker.trackEvent("extension_confirm_buy", s), Promise.resolve().then(function() {
              n.linkIdentity()
            }).then(function() {
              n.purchaseService.makePurchase(o, n.params.channelId, n.locale)
            })
          })
        })
      }, n.useBits = function(e) {
        if (!n.useBitsInProgress) {
          n.useBitsInProgress = !0; var t = a.tokenManager.getToken(n.extension.clientId), i = (0, x.isEligible)(e.sku, t.payload.channel_id, n.extension.clientId), o = n.extensionBitsProducts, s = {
            action: c.FunctionAction.UseBitsPromptRequired
          }; Promise.all([i, o]).then(function(i) {
            var o = i[0], r = i[1], a = o.bits_required, c = o.transaction_id, u = o.prompt_required, l = o.bits_balance, f = r.products; if (!n.useBitsPromptRequired(u, l, a)) throw new Error("Use Bits always requires a prompt for now"); var h = f.find(function(t) {
              return t.sku === e.sku
            }), d = h ? h.displayName : ""; s.payload = {
              channelId: t.payload.channel_id, clientId: n.extension.clientId, sku: e.sku, bitsRequired: a, transactionId: c, extensionItemLabel: d, extensionName: n.extension.name, bitsBalance: l, extensionId: n.extension.id, token: t.token, onUseBitsPromptCompleted: n.onUseBitsPromptCompleted
            }, n.openBitsConfirmationModal(s)
          }).catch(function(e) {
            s.error = e, n.openBitsConfirmationModal(s)
          })
        }
      }, n.openBitsConfirmationModal = function(e) {
        n.coordinator.emit(c.FunctionAction.UseBitsPromptRequired, e)
      }, n.useBitsPromptRequired = function(e, t, n) {
        return void 0 === e && (e = !1), e || t < n
      }, n.onUseBitsPromptCompleted = function(e) {
        n.useBitsInProgress = !1, e.didConfirm && e.didUseBits && n.showUseBitsSuccess()
      }, n.onContextUpdate = function(e, t) {
        n.isVisible && n.coordinator.sendContext(e, t)
      }, n.setupListeners = function() {
        n.eventListeners = [{
          target: n.iframe, event: "mouseenter", callback: n.onMouseEnter.bind(n)
        }], n.eventListeners.forEach(function(e) {
          e.target.addEventListener(e.event, e.callback)
        }), n.contextManager.on("context", n.onContextUpdate), n.coordinator.on(c.SupervisorAction.SupervisorReady, n.initSupervisedExtension), n.coordinator.on(c.ExtensionAction.TwitchExtLoaded, n.onExtensionLoaded), n.coordinator.on(c.ExtensionAction.TwitchExtNetworkTiming, n.onExtensionNetworkTraffic), n.coordinator.on(c.ExtensionAction.TwitchExtUserAction, n.onExtensionUserAction), n.onBeginPurchase && n.coordinator.on(c.ExtensionAction.TwitchExtBeginPurchase, n.beginPurchase), n.coordinator.on(c.ExtensionAction.TwitchExtBitsOnHover, n.showBitsBalance), n.coordinator.on(c.ExtensionAction.TwitchExtUseBits, n.useBits), n.coordinator.on(c.ExtensionAction.TwitchExtPubSubReceived, n.onExtensionPubSubRecived), n.coordinator.on(c.ExtensionAction.TwitchExtLongtask, n.onLongtask), a.tokenManager.subscribe(n.extension.clientId, n.handleToken); var e = a.tokenManager.getToken(n.extension.clientId); e && !e.isNearExpiration && n.handleToken(e, e)
      }, n.reloadExtension = function() {
        n.hasLoaded = !1, n.hasBootstrapped = !1, n.coordinator.sendExtensionReloadMessage()
      }, n.unsetupListeners = function() {
        n.eventListeners.forEach(function(e) {
          e.target.removeEventListener(e.event, e.callback)
        }), n.contextManager.off("context", n.coordinator.sendContext), n.coordinator.off(c.ExtensionAction.TwitchExtLoaded, n.onExtensionLoaded), n.coordinator.off(c.ExtensionAction.TwitchExtNetworkTiming, n.onExtensionNetworkTraffic), n.coordinator.off(c.ExtensionAction.TwitchExtUserAction, n.onExtensionUserAction), n.coordinator.off(c.ExtensionAction.TwitchExtLongtask, n.onLongtask), n.unregisterFunctionModals(), a.tokenManager.unsubscribe(n.extension.clientId, n.handleToken)
      }, n.registerFunctionModals = function() {
        n.functionManager.registerFunctionModal(c.FunctionAction.FollowAction, new v.FollowModal(n.params.loginId, n.tracker)), n.canRequestIdLink && n.functionManager.registerFunctionModal(c.FunctionAction.IdShareRequest, new m.SimpleRequestModal), n.extension.bitsEnabled && n.functionManager.registerFunctionModal(c.FunctionAction.UseBitsPromptRequired, new w.BitsConfirmationModal(String(n.params.loginId), n.tracker, new E.Pubsub))
      }, n.unregisterFunctionModals = function() {
        n.functionManager.unregisterFunctionModal(c.FunctionAction.FollowAction), n.extension.bitsEnabled && n.functionManager.unregisterFunctionModal(c.FunctionAction.UseBitsPromptRequired)
      }, n.handlePurchaseCompleted = function(e) {
        var t = e.msg.sku; n.extensionProducts.then(function(e) {
          e.products.find(function(e) {
            return e.sku === t
          }) && n.coordinator.sendExtensionReloadEntitlementsMessage()
        })
      }, n.showBitsBalance = function() {
        n.emit(c.ExtensionFrameEvents.ShowBitsBalance)
      }, n.showUseBitsSuccess = function() {
        n.emit(c.ExtensionFrameEvents.ShowUseBitsSuccess)
      }, n.handleBitsTransactionCompleted = function(e) {
        var t = d.Initiator.Other; String(n.params.loginId) === e.user_id && (t = d.Initiator.CurrentUser); var i = {
          sku: e.sku, displayName: e.sku, cost: {
            amount: "", type: ""
          }
        }; n.extensionBitsProducts.then(function(o) {
          var s = o.products.find(function(t) {
            return t.sku === e.sku
          }); n.coordinator.sendBitsTransactionCompleteMessage({
            action: c.ExtensionAction.TwitchExtBitsTransactionComplete, product: s || i, transactionId: e.transaction_id, userId: e.user_id, displayName: e.display_name, transactionReceipt: e.transactionReceipt, initiator: t
          })
        }).catch(function() {
          n.coordinator.sendBitsTransactionCompleteMessage({
            action: c.ExtensionAction.TwitchExtBitsTransactionComplete, product: i, transactionId: e.transaction_id, userId: e.user_id, displayName: e.display_name, transactionReceipt: e.transactionReceipt, initiator: t
          })
        })
      }, n.extension = new l.Extension(t.extension), n.params = P({
        platform: c.ExtensionPlatform.Web
      }, t, {
          mode: t.platform === c.ExtensionPlatform.Mobile ? c.ExtensionMode.Viewer : t.mode
        }), n.iframe = n.createSupervisorIFrame(t.iframeClassName, t.anchor, n.extensionOptions), void 0 !== t.onBeginPurchase && (n.onBeginPurchase = t.onBeginPurchase), n.setupListeners(), n.extension.token && !a.tokenManager.getToken(n.extension.clientId) && a.tokenManager.registerToken(n.extension.clientId, n.extension.token), n.registerFunctionModals(), n.tracker.trackEvent("extension_render", {
        }), t.parentElement.appendChild(n.iframe), n.visibilityChanged(), n.params.loginId && k.extensionService.onPurchaseCompleted(n.params.loginId, n.handlePurchaseCompleted), k.extensionService.onBitsTransactionCompleted(n.params.channelId, n.params.extension.clientId, n.params.loginId, n.handleBitsTransactionCompleted), n
    } return T(t, e), Object.defineProperty(t.prototype, "tracker", {
      get: function() {
        return (0, b.memoize)(this.buildTracker)
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "contextManager", {
      get: function() {
        return (0, b.memoize)(this.buildContextManager)
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "coordinator", {
      get: function() {
        return (0, b.memoize)(this.buildCoordinator)
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "extensionOptions", {
      get: function() {
        return {
          anchor: this.params.anchor, language: this.language, mode: this.params.mode, state: c.ExtensionStateMap[this.extension.state], platform: this.params.platform
        }
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "functionManager", {
      get: function() {
        return (0, b.memoize)(this.buildFunctionManager)
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "language", {
      get: function() {
        return this.params.language || "en"
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "locale", {
      get: function() {
        return this.params.locale || "en-US"
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "purchaseService", {
      get: function() {
        return (0, b.memoize)(this.buildPurchaseService)
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "canRequestIdLink", {
      get: function() {
        var e = a.tokenManager.getToken(this.extension.clientId); return !e.isBroadcaster && (e.isLinked || this.extension.requestIdentityLink)
      }, enumerable: !0, configurable: !0
    }), t.prototype.createViewerSandboxAttrs = function() {
      var e = this.params, t = e.anchor, n = e.mode, i = this.extension.whitelistedPanelUrls, o = M(this.params.channelId), s = t === c.ExtensionAnchor.Panel && i.length && n === c.ExtensionMode.Viewer; return o || s ? S.concat(["allow-popups", "allow-popups-to-escape-sandbox"]).join(" ") : S.join(" ")
    }, t.prototype.getConfigWhitelist = function() {
      return this.extension.whitelistedConfigUrls.length ? S.concat(["allow-popups", "allow-popups-to-escape-sandbox"]).join(" ") : S.join(" ")
    }, t.prototype.applyViewerSandboxAttrs = function(e) {
      e.setAttribute("sandbox", this.createViewerSandboxAttrs())
    }, t.prototype.applyConfigSandboxAttrs = function(e) {
      e.setAttribute("sandbox", this.getConfigWhitelist())
    }, Object.defineProperty(t.prototype, "extensionProducts", {
      get: function() {
        var e = this.extensionProductsCache; if (void 0 === e) {
          var t = this.extension, n = t.sku, i = t.vendorCode; this.extension.isMonetized ? (this.extensionProductsCache = (0, u.getExtensionProducts)(i, n, this.language), e = this.extensionProductsCache) : e = Promise.resolve({
            products: []
          })
        } return e
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "extensionBitsProducts", {
      get: function() {
        var e = this.extensionBitsProductsCache; if (void 0 === e) {
          var t = this.extension.clientId; this.extensionBitsProductsCache = (0, x.getProducts)(t), e = this.extensionBitsProductsCache
        } return e
      }, enumerable: !0, configurable: !0
    }), t.prototype.formatExtensionProductForDisplay = function(e) {
      return {
        description: e.description, developerName: e.developer_name, displayPrice: (0, y.formatPrice)(e.price.price, e.price.currency_unit), extensionName: this.extension.name, shortDescription: e.short_description, sku: e.sku, title: e.title
      }
    }, t.prototype.sendExtensionProductPrices = function() {
      var e = this; this.extensionProducts.then(function(t) {
        e.extension.isMonetized && e.coordinator.sendExtensionProductPricesMessage(t)
      })
    }, t.prototype.sendExtensionBitsProductPrices = function() {
      var e = this; if (!this.extension.bitsEnabled) return void this.coordinator.sendBitsProductsMessage([]); this.extensionBitsProducts.then(function(t) {
        var n = t.products.filter(function(t) {
          return e.extension.state !== c.ExtensionState.Released || !0 !== t.inDevelopment
        }).map(function(t) {
          var n = {
            cost: t.cost, displayName: t.displayName, sku: t.sku
          }; return e.extension.state !== c.ExtensionState.Released && (n.inDevelopment = t.inDevelopment), n
        }); e.coordinator.sendBitsProductsMessage(n)
      })
    }, t
  }(i.EventEmitter2); t.ExtensionFrame = R
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }); var i = t.getWindowInnerHeight = function() {
    return window.innerHeight
  }, o = t.getElementBoundingClientRect = function(e) {
    return e.getBoundingClientRect()
  }; t.domUtils = {
    getWindowInnerHeight: i, getElementBoundingClientRect: o
  }
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }); t.throttle = function(e, t) {
    var n = !1; return function() {
      for (var i = [], o = 0; o < arguments.length; o++)i[o] = arguments[o]; n || (n = !0, setTimeout(function() {
        n = !1
      }, t), e.apply(null, i))
    }
  }
}, function(e, t, n) {
  "use strict"; function i(e) {
    return e && "EPROMISERETRY" === e.code && c.call(e, "retried")
  } function o(e, t) {
    var n, o; return "object" === (void 0 === e ? "undefined" : s(e)) && "function" == typeof t && (n = t, t = e, e = n), o = a.operation(t), new Promise(function(t, n) {
      o.attempt(function(s) {
        Promise.resolve().then(function() {
          return e(function(e) {
            throw i(e) && (e = e.retried), r("Retrying", "EPROMISERETRY", {
              retried: e
            })
          }, s)
        }).then(t, function(e) {
          i(e) && (e = e.retried, o.retry(e || new Error)) || n(e)
        })
      })
    })
  } var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  }, r = n(74), a = n(75), c = Object.prototype.hasOwnProperty; e.exports = o
}, function(e, t, n) {
  "use strict"; function i(e, t, n) {
    var i, s = e instanceof Error ? e : new Error(e); if ("object" === (void 0 === t ? "undefined" : o(t)) ? n = t : null != t && (s.code = t), n) for (i in n) s[i] = n[i]; return s
  } var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  }; e.exports = i
}, function(e, t, n) {
  "use strict"; e.exports = n(76)
}, function(e, t, n) {
  "use strict"; var i = n(77); t.operation = function(e) {
    var n = t.timeouts(e); return new i(n, {
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
}, function(e, t, n) {
  "use strict"; function i(e, t) {
    "boolean" == typeof t && (t = {
      forever: t
    }), this._timeouts = e, this._options = t || {
    }, this._fn = null, this._errors = [], this._attempts = 1, this._operationTimeout = null, this._operationTimeoutCb = null, this._timeout = null, this._options.forever && (this._cachedTimeouts = this._timeouts.slice(0))
  } e.exports = i, i.prototype.stop = function() {
    this._timeout && clearTimeout(this._timeout), this._timeouts = [], this._cachedTimeouts = null
  }, i.prototype.retry = function(e) {
    if (this._timeout && clearTimeout(this._timeout), !e) return !1; this._errors.push(e); var t = this._timeouts.shift(); if (void 0 === t) {
      if (!this._cachedTimeouts) return !1; this._errors.splice(this._errors.length - 1, this._errors.length), this._timeouts = this._cachedTimeouts.slice(0), t = this._timeouts.shift()
    } var n = this, i = setTimeout(function() {
      n._attempts++ , n._operationTimeoutCb && (n._timeout = setTimeout(function() {
        n._operationTimeoutCb(n._attempts)
      }, n._operationTimeout), this._options.unref && n._timeout.unref()), n._fn(n._attempts)
    }, t); return this._options.unref && i.unref(), !0
  }, i.prototype.attempt = function(e, t) {
    this._fn = e, t && (t.timeout && (this._operationTimeout = t.timeout), t.cb && (this._operationTimeoutCb = t.cb)); var n = this; this._operationTimeoutCb && (this._timeout = setTimeout(function() {
      n._operationTimeoutCb()
    }, n._operationTimeout)), this._fn(this._attempts)
  }, i.prototype.try = function(e) {
    console.log("Using RetryOperation.try() is deprecated"), this.attempt(e)
  }, i.prototype.start = function(e) {
    console.log("Using RetryOperation.start() is deprecated"), this.attempt(e)
  }, i.prototype.start = i.prototype.try, i.prototype.errors = function() {
    return this._errors
  }, i.prototype.attempts = function() {
    return this._attempts
  }, i.prototype.mainError = function() {
    if (0 === this._errors.length) return null; for (var e = {
    }, t = null, n = 0, i = 0; i < this._errors.length; i++) {
      var o = this._errors[i], s = o.message, r = (e[s] || 0) + 1; e[s] = r, r >= n && (t = o, n = r)
    } return t
  }
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Extension = t.ExtensionViewType = void 0; var i = n(0), o = t.ExtensionViewType = void 0; !function(e) {
    e.Component = "component", e.Config = "config", e.Hidden = "hidden", e.LiveConfig = "liveConfig", e.Mobile = "mobile", e.Panel = "panel", e.VideoOverlay = "videoOverlay"
  }(o || (t.ExtensionViewType = o = {
  })); var s = function() {
    function e(e) {
      this.extension = e
    } return Object.defineProperty(e.prototype, "clientId", {
      get: function() {
        return this.extension.clientId
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "bitsEnabled", {
      get: function() {
        return this.extension.bitsEnabled
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "description", {
      get: function() {
        return this.extension.description
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "id", {
      get: function() {
        return this.extension.id
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "name", {
      get: function() {
        return this.extension.name
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "requestIdentityLink", {
      get: function() {
        return this.extension.requestIdentityLink
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "sku", {
      get: function() {
        return this.extension.sku
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "summary", {
      get: function() {
        return this.extension.summary
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "token", {
      get: function() {
        return this.extension.token
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "version", {
      get: function() {
        return this.extension.version
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "views", {
      get: function() {
        return this.extension.views
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "vendorCode", {
      get: function() {
        return this.extension.vendorCode
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "state", {
      get: function() {
        return this.extension.state
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "whitelistedConfigUrls", {
      get: function() {
        return this.extension.whitelistedConfigUrls
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "whitelistedPanelUrls", {
      get: function() {
        return this.extension.whitelistedPanelUrls
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "asObject", {
      get: function() {
        return this.extension
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "panelHeight", {
      get: function() {
        return this.extension.views.panel && this.extension.views.panel.height
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "isMonetized", {
      get: function() {
        return !(!this.extension.sku || !this.extension.vendorCode)
      }, enumerable: !0, configurable: !0
    }), e.prototype.getViewerUrlForContext = function(e, t, n) {
      var o = ""; switch (e) {
        case i.ExtensionPlatform.Web: o = this.getViewerUrlForWeb(t, n); break;
        case i.ExtensionPlatform.Mobile: o = this.getViewerUrlForMobile(t)
      }return o || ""
    }, e.prototype.getViewerUrlForWeb = function(e, t) {
      var n = this.extension.views; switch (e) {
        case i.ExtensionMode.Config: return n.config && n.config.viewerUrl; case i.ExtensionMode.Dashboard: return n.liveConfig && n.liveConfig.viewerUrl; case i.ExtensionMode.Viewer: return this.getViewerUrlForAnchor(t)
      }
    }, e.prototype.getViewerUrlForMobile = function(e) {
      return this.extension.views.mobile && this.extension.views.mobile.viewerUrl
    }, e.prototype.getViewerUrlForAnchor = function(e) {
      var t = this.extension.views; switch (e) {
        case i.ExtensionAnchor.Component: return t.component.viewerUrl; case i.ExtensionAnchor.Hidden: return t.hidden.viewerUrl; case i.ExtensionAnchor.Overlay: return t.videoOverlay.viewerUrl; case i.ExtensionAnchor.Panel: return t.panel.viewerUrl
      }
    }, e
  }(); t.Extension = s
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ContextManager = t.DEFAULT_LANGUAGE = void 0; var i = n(9), o = n(20), s = n(22), r = n(86), a = n(0), c = function() {
    var e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(e, t) {
      e.__proto__ = t
    } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
    }; return function(t, n) {
      function i() {
        this.constructor = t
      } e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
    }
  }(), u = Object.assign || function(e) {
    for (var t, n = 1, i = arguments.length; n < i; n++) {
      t = arguments[n]; for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
    } return e
  }, l = t.DEFAULT_LANGUAGE = "en", f = function(e) {
    function t(t, n) {
      void 0 === n && (n = l); var i = e.call(this) || this; return i.extensionMode = t, i.language = n, i.context = {
      }, i.isContextInitialized = !1, i.destroy = function() {
        o.extensionService.off(s.EVENT_PLAYER_CONTEXT_UPDATE, i.updateLocalContext), o.extensionService.off(s.EVENT_CONTEXT_UPDATE, i.updateLocalContext)
      }, i.initializeContext = function() {
        i.isContextInitialized = !0, i.emit("context", i.context, Object.keys(i.context))
      }, i.getPlayerContext = function() {
        var e = o.extensionService.player; if (!e) return {
        }; var t = e.getPlaybackStats(); return {
          bitrate: t.playbackRate, bufferSize: t.bufferSize, displayResolution: t.displayResolution, hlsLatencyBroadcaster: t.hlsLatencyBroadcaster, isFullScreen: e.getFullscreen(), isPaused: e.isPaused(), isTheatreMode: e.getTheatre(), videoResolution: t.videoResolution
        }
      }, i.getBaseContext = function() {
        return {
          mode: i.extensionMode, language: i.language
        }
      }, i.updateLocalContext = function(e) {
        void 0 === e && (e = {
        }); var t = u({
        }, i.context, e, i.getPlayerContext(), i.getBaseContext()); void 0 !== t.theme && (t.theme = i.translateTheme(t.theme)), i.diffAndEmitContext(t)
      }, i.diffAndEmitContext = function(e) {
        var t = i.context; if (i.context = e, i.isContextInitialized) {
          var n = Object.keys(e), o = n.reduce(function(n, i) {
            return t[i] !== e[i] && n.push(i), n
          }, []); o.length > 0 && i.emit("context", e, o)
        }
      }, i.translateTheme = function(e) {
        return "number" == typeof e ? r.TWILIGHT_THEME_MAP[e] || r.Theme.Light : e
      }, o.extensionService.on(s.EVENT_PLAYER_CONTEXT_UPDATE, i.updateLocalContext), o.extensionService.on(s.EVENT_CONTEXT_UPDATE, i.updateLocalContext), i.context = i.getBaseContext(), i.context.theme = (0, r.getTheme)(), t === a.ExtensionMode.Viewer && (i.context.game = "", i.context.playbackMode = a.PlaybackMode.Video), i
    } return c(t, e), t
  }(i.EventEmitter2); t.ContextManager = f
}, function(e, t, n) {
  "use strict"; function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  } function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  } function s(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t
  } function r(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e, enumerable: !1, writable: !0, configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  } function a(e) {
    if ("production" !== e && "staging" !== e && "darklaunch" !== e) throw "Invalid Pubsub instance environment"; return null === window.__Twitch__pubsubInstances[e] && (window.__Twitch__pubsubInstances[e] = new O(e)), window.__Twitch__pubsubInstances[e]
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }); var c = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), u = n(15), l = i(u), f = n(6), h = i(f), d = n(7), p = i(d), _ = n(81), g = i(_), y = n(82), b = i(y), v = n(83), m = i(v), w = n(30), k = n(85), x = i(k), E = h.default._getLogger("PubsubDriver"), T = 3e4, P = /^https?:\/\/([\w-]+\.)*twitch\.(tv|tech)(:\d+)?\/.*$/, S = 1, O = function(e) {
    function t(e) {
      o(this, t); var n = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return n._env = p.default.urlParams.pubsub_environment || e, n._clientReady = !1, n._hasDisconnected = !1, n._queuedRequests = [], n._stats = w.Stats.getInstance(n._env, "pubsub-js-client"), n._numDisconnects = 0, p.default.inIframe() && P.test(document.referrer) ? (E.debug("Driver is in an iframe"), n._client = new g.default({
        parentUrl: document.referrer
      }), n._clientType = "iframe-verified") : (E.debug("Driver is not in an iframe"), n._client = new m.default({
        env: n._env, stats: n._stats
      }), n._iframeHost = new b.default(n._client), n._clientType = "ws"), n._stats.setPrefix("pubsub-js-client." + n._clientType), "true" === p.default.urlParams.force_pubsub_tester ? S = 1 : "false" === p.default.urlParams.force_pubsub_tester && (S = 0), Math.random() < S && window.setTimeout(n.runTest.bind(n), T), n._client.on("unverified", n._clientUnverified, n), n._client.on("verified", n._clientVerified, n), n._client.verify(), n
    } return r(t, e), c(t, [{
      key: "runTest", value: function() {
        this._tester = new x.default({
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
        for (E.debug("Flushing " + this._queuedRequests.length + " queued requests"); this._queuedRequests.length > 0;) {
          var e = this._queuedRequests.shift(); switch (e.type) {
            case "LISTEN": this._client.Listen(e.opts); break;
            case "UNLISTEN": this._client.Unlisten(e.opts)
          }
        }
      }
    }, {
      key: "_clientConnected", value: function() {
        E.debug("Client connected"), this._client.on("disconnected", this._clientDisconnected, this), this._stats.logCounter("connected", 1), this._trigger("connected"), this._hasDisconnected && this._trigger("reconnected"), this._clientReady = !0, this._flushQueuedRequests()
      }
    }, {
      key: "_clientDisconnected", value: function() {
        E.debug("Client disconnected"), this._trigger("disconnected"), this._clientReady = !1, this._numDisconnects += 1, this._hasDisconnected = !0
      }
    }, {
      key: "_clientVerified", value: function() {
        E.debug("Client verified (type = " + this._clientType + ")"), this._stats.setPrefix("pubsub-js-client." + this._clientType), this._client.on("connected", this._clientConnected, this), this._client.connect(), window.setInterval(this._sendClientTypeGauge.bind(this), 6e4)
      }
    }, {
      key: "_clientUnverified", value: function() {
        E.debug("Unverified IframeClient"), this._client.off("verified", this._clientVerified, this), this._client.off("unverified", this._clientUnverified, this), this._client = new m.default({
          env: this._env, stats: this._stats
        }), this._clientType = "iframe-unverified", this._client.on("unverified", this._clientUnverified, this), this._client.on("verified", this._clientVerified, this), this._client.verify()
      }
    }, {
      key: "_sendClientTypeGauge", value: function() {
        this._stats.logGauge("pubsub-js-client." + this._clientType)
      }
    }]), t
  }(l.default); window.__Twitch__pubsubInstances = window.__Twitch__pubsubInstances || {
    production: null, staging: null, darklaunch: null
  }, t.default = {
    getInstance: a
  }
}, function(e, t, n) {
  "use strict"; function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  } function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  } function s(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t
  } function r(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e, enumerable: !1, writable: !0, configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }); var a = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), c = n(15), u = i(c), l = n(6), f = i(l), h = n(7), d = i(h), p = n(38), _ = i(p), g = f.default._getLogger("IframeClient"), y = function(e) {
    function t(e) {
      o(this, t); var n = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return n._parentUrl = e.parentUrl, n._pendingResponses = new _.default, n._listens = new u.default, window.addEventListener("message", n.receiveMessage.bind(n), !1), n
    } return r(t, e), a(t, [{
      key: "connect", value: function() {
        window.parent.postMessage({
          twitch_protocol: "pubsub", type: "connect"
        }, this._parentUrl)
      }
    }, {
      key: "verify", value: function() {
        window.parent.postMessage({
          twitch_protocol: "pubsub", type: "verify"
        }, this._parentUrl), this._verifyTimeout = setTimeout(this._unverified.bind(this), 1e3)
      }
    }, {
      key: "Listen", value: function(e) {
        g.debug("listening on " + e.topic); var t = this._generateNonce(), n = {
          twitch_protocol: "pubsub", type: "LISTEN", nonce: t, data: {
            topics: [e.topic], auth_token: e.auth
          }
        }; this._send(t, n, e)
      }
    }, {
      key: "Unlisten", value: function(e) {
        if (g.debug("unlistening on " + e.topic + "(" + this._listens.count(e.topic) + " listeners)"), this._listens.count(e.topic) > 1) return e.message && this._listens.off(e.topic, e.message), e.success && e.success(), void g.debug("now have " + this._listens.count(e.topic) + " listeners"); var t = this._generateNonce(), n = {
          twitch_protocol: "pubsub", type: "UNLISTEN", nonce: t, data: {
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
        if ("pubsub" == e.data.twitch_protocol) switch (g.debug("Received message: " + JSON.stringify(e.data)), e.data.type) {
          case "connected": this._trigger("connected"); break;
          case "disconnected": this._trigger("disconnected"); break;
          case "success": this.handleResponse(!0, e.data); break;
          case "failure": this.handleResponse(!1, e.data); break;
          case "message": this.handleMessage(e.data.topic, e.data.message); break;
          case "verify": this._verified()
        }
      }
    }, {
      key: "handleResponse", value: function(e, t) {
        if (this._pendingResponses.has(t.nonce)) {
          var n = this._pendingResponses.get(t.nonce); g.debug("ResponseInfo: " + JSON.stringify(n)), clearTimeout(n.timeout), this._pendingResponses.remove(t.nonce), e ? (n.callbacks.message && ("LISTEN" === n.message.type ? this._listens.on(n.topic, n.callbacks.message, this) : "UNLISTEN" === n.message.type && this._listens.off(n.topic, n.callbacks.message, this)), n.callbacks.success && n.callbacks.success()) : n.callbacks.failure && n.callbacks.failure(t.error)
        }
      }
    }, {
      key: "handleMessage", value: function(e, t) {
        g.debug("received '" + t + "' on topic " + e), this._listens._trigger(e, t)
      }
    }, {
      key: "_onResponseTimeout", value: function(e) {
        g.debug("response timed out: " + e)
      }
    }, {
      key: "_verified", value: function() {
        g.debug("Verified"), clearTimeout(this._verifyTimeout), this._trigger("verified")
      }
    }, {
      key: "_unverified", value: function() {
        window.removeEventListener("message", this.receiveMessage.bind(this), !1), this._trigger("unverified")
      }
    }, {
      key: "_generateNonce", value: function() {
        return d.default.generateString(30)
      }
    }]), t
  }(u.default); t.default = y
}, function(e, t, n) {
  "use strict"; function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }); var o = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), s = n(6), r = function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }(s), a = 1e4, c = r.default._getLogger("IframeHost"), u = function() {
    function e(t) {
      i(this, e), this._driver = t, this._sources = [], this._listeners = [], this._driver.on("connected", this.handleConnected, this), this._driver.on("disconnected", this.handleDisconnected, this), window.addEventListener("message", this.receiveMessage.bind(this), !1), this._orphanedListenerCheckTimer = setInterval(this._checkOrphanedListeners.bind(this), a)
    } return o(e, [{
      key: "destroy", value: function() {
        clearInterval(this._orphanedListenerCheckTimer)
      }
    }, {
      key: "receiveMessage", value: function(e) {
        if ("pubsub" == e.data.twitch_protocol && e.source) switch (c.debug("Received message: " + JSON.stringify(e.data)), e.data.type) {
          case "LISTEN": this.handleListen(e.source, e.data.nonce, e.data.data); break;
          case "UNLISTEN": this.handleUnlisten(e.source, e.data.nonce, e.data.data); break;
          case "connect": this._sources.push(e.source), this._driver.connect(); break;
          case "verify": e.source.postMessage({
            twitch_protocol: "pubsub", type: "verify"
          }, "*")
        }
      }
    }, {
      key: "_pushListener", value: function(e, t) {
        for (var n = 0; n < this._listeners.length; n++)if (this._listeners[n].source === e && this._listeners[n].topic === t) return null; var i = {
          source: e, topic: t, message: function(n) {
            e.postMessage({
              twitch_protocol: "pubsub", type: "message", topic: t, message: n
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
        c.debug("Cleaning up orphaned listener for topic: " + e.topic), this._driver.Unlisten({
          topic: e.topic, success: function() {
            c.debug("Success when cleaning up orphaned listener for topic: " + e.topic)
          }, failure: function(t) {
            c.debug("Error when cleaning up orphaned listener for topic: " + e.topic + " Error: " + t)
          }, message: e.message
        })
      }
    }, {
      key: "handleListen", value: function(e, t, n) {
        var i = this._pushListener(e, n.topics[0]); if (!i) return void e.postMessage({
          twitch_protocol: "pubsub", type: "success", nonce: t
        }, "*"); this._driver.Listen({
          topic: i.topic, auth: n.auth_token, success: function() {
            e.postMessage({
              twitch_protocol: "pubsub", type: "success", nonce: t
            }, "*")
          }, failure: function(n) {
            e.postMessage({
              twitch_protocol: "pubsub", type: "failure", nonce: t, error: n
            }, "*")
          }, message: i.message
        })
      }
    }, {
      key: "handleUnlisten", value: function(e, t, n) {
        var i = this._popListener(e, n.topics[0]); if (!i) return void c.debug("Failed to unlisten, could not find listener for topic " + n.topics[0]); this._driver.Unlisten({
          topic: i.topic, auth: n.auth_token, success: function() {
            e.postMessage({
              twitch_protocol: "pubsub", type: "success", nonce: t
            }, "*")
          }, failure: function(n) {
            e.postMessage({
              twitch_protocol: "pubsub", type: "failure", nonce: t, error: n
            }, "*")
          }, message: i.message
        })
      }
    }, {
      key: "handleConnected", value: function() {
        for (var e = 0; e < this._sources.length; e++)this._sources[e].postMessage({
          twitch_protocol: "pubsub", type: "connected"
        }, "*")
      }
    }, {
      key: "handleDisconnected", value: function() {
        for (var e = 0; e < this._sources.length; e++)this._sources[e].postMessage({
          twitch_protocol: "pubsub", type: "disconnected"
        }, "*")
      }
    }]), e
  }(); t.default = u
}, function(e, t, n) {
  "use strict"; function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  } function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  } function s(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t
  } function r(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e, enumerable: !1, writable: !0, configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }); var a = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), c = n(15), u = i(c), l = n(6), f = i(l), h = n(7), d = i(h), p = n(84), _ = i(p), g = n(38), y = i(g), b = f.default._getLogger("WebsocketClient"), v = "wss://localhost.rig.twitch.tv:3003/v1", m = "wss://pubsub-edge-darklaunch.twitch.tv:443/v1", w = "ws://localhost:6900/v1", k = function(e) {
    function t(e) {
      o(this, t); var n = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); switch (n._opts = e, n._env = e.env, n._stats = e.stats, n._env) {
        case "production": n._addr = v; break;
        case "darklaunch": n._addr = m; break;
        case "development": n._addr = w; break;
        default: n._addr = v
      }return window.WebSocket ? (n._queuedRequests = [], n._pendingResponses = new y.default, n._pendingReplayResponses = new y.default, n._listens = new u.default, n._replays = new y.default, n._replaysSize = 0, n._firstConnectTime = n._firstListenTime = 0, n._connectCalled = n._reconnecting = !1, n._primarySocket = new _.default({
        stats: n._stats, addr: n._addr
      }), n._bindPrimary(n._primarySocket), n) : s(n)
    } return r(t, e), a(t, [{
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
        b.debug("primary open: " + this._primarySocket._id), 0 === this._firstConnectTime && (this._firstConnectTime = d.default.time.now(), this._firstListenTimeout = setTimeout(this._neverListened.bind(this), 45e3)), this._connected = !0, this._trigger("connected"), this._flushQueuedRequests()
      }
    }, {
      key: "_onResponse", value: function(e) {
        if (b.debug("primary response: " + JSON.stringify(e)), this._pendingResponses.has(e.nonce)) {
          var t = this._pendingResponses.get(e.nonce); b.debug("responseInfo: " + JSON.stringify(t)), clearTimeout(t.timeout), this._pendingResponses.remove(e.nonce), "" === e.error ? ("LISTEN" === t.message.type ? (0 === this._firstListenTime && (clearTimeout(this._firstListenTimeout), this._firstListenTime = d.default.time.now(), this._stats.logTimer("time_to_first_listen", this._firstListenTime - this._firstConnectTime, .1)), this._replays.set(e.nonce, {
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
        b.debug("primary message: " + JSON.stringify(e)), this._listens._trigger(e.data.topic, e.data.message)
      }
    }, {
      key: "_onConnectionFailure", value: function() {
        b.debug("connection failure"), this._trigger("disconnected"), this._notifyWhenOpen = !0, this._onReconnect()
      }
    }, {
      key: "_onReconnect", value: function() {
        b.debug("reconnecting..."), this._reconnecting = !0, this._backupSocket = new _.default({
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
        b.debug("Backup socket opened"), this._replays.size() > 0 ? this._replayBackup() : (this._swapSockets(), this._notifyWhenOpen && (b.debug("triggering connected"), this._notifyWhenOpen = !1, this._trigger("connected")))
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
        this._pendingReplayResponses.has(e.nonce) && "" === e.error && (this._pendingReplayResponses.remove(e.nonce), 0 === this._pendingReplayResponses.size() && (this._swapSockets(), this._notifyWhenOpen && (b.debug("triggering connected"), this._notifyWhenOpen = !1, this._trigger("connected"))))
      }
    }, {
      key: "_swapSockets", value: function() {
        b.debug("swapping primary " + this._primarySocket._id + " and backup " + this._backupSocket._id), this._unbindPrimary(this._primarySocket), this._unbindBackup(this._backupSocket), this._bindPrimary(this._backupSocket), this._primarySocket.close(), this._primarySocket = this._backupSocket, this._reconnecting = !1, this._flushQueuedRequests()
      }
    }, {
      key: "Listen", value: function(e) {
        if (window.WebSocket) {
          b.debug("listening on " + e.topic); var t = this._generateNonce(), n = {
            type: "LISTEN", nonce: t, data: {
              topics: [e.topic], auth_token: e.auth
            }
          }; this._queuedSend(t, n, e)
        }
      }
    }, {
      key: "Unlisten", value: function(e) {
        if (window.WebSocket) {
          if (b.debug("unlistening on " + e.topic + "(" + this._listens.count(e.topic) + " listeners)"), this._listens.count(e.topic) > 1) {
            this._listens.off(e.topic, e.message); for (var t in this._replays.map()) if (this._replays.get(t).message === e.message) {
              this._replays.remove(t); break
            } return e.success && e.success(), void b.debug("now have " + this._listens.count(e.topic) + " listeners")
          } var n = this._generateNonce(), i = {
            type: "UNLISTEN", nonce: n, data: {
              topics: [e.topic]
            }
          }; this._queuedSend(n, i, e)
        }
      }
    }, {
      key: "_queuedSend", value: function(e, t, n) {
        this._reconnecting || !1 === this._primarySocket._isReady() ? (b.debug("queuing"), this._queuedRequests.push({
          nonce: e, msg: t, opts: n
        })) : (b.debug("sending immediately"), this._send(e, t, n))
      }
    }, {
      key: "_flushQueuedRequests", value: function() {
        for (b.debug("flushing " + this._queuedRequests.length + " listen/unlistens"); this._queuedRequests.length > 0;) {
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
        return d.default.generateString(30)
      }
    }, {
      key: "_jitteredReconnectDelay", value: function() {
        return d.default.randomInt(2e3)
      }
    }]), t
  }(u.default); t.default = k
}, function(e, t, n) {
  "use strict"; function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  } function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  } function s(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t
  } function r(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e, enumerable: !1, writable: !0, configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }); var a = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), c = n(15), u = i(c), l = n(6), f = i(l), h = n(7), d = i(h), p = f.default._getLogger("PubsubSocket"), _ = function(e) {
    function t(e) {
      o(this, t); var n = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return n._opts = e, n._addr = e.addr, n._stats = e.stats, n._connectionAttempts = 0, n._sentPing = n._receivedPong = !1, n._id = "[" + d.default.generateString(10) + "] ", window.addEventListener("beforeunload", n._beforeUnload.bind(n)), n
    } return r(t, e), a(t, [{
      key: "connect", value: function() {
        p.debug(this._id + "connecting to " + this._addr), this._connecting = !0, this._socketConnectTime = d.default.time.now(); try {
          this._socket = new WebSocket(this._addr), this._socket.onmessage = this._onMessage.bind(this), this._socket.onerror = this._onError.bind(this), this._socket.onclose = this._onClose.bind(this), this._socket.onopen = this._onOpen.bind(this)
        } catch (e) {
          this._stats.logCounter("socket.error.security_err", 1, 1), this._trigger("connection_failure")
        }
      }
    }, {
      key: "close", value: function() {
        p.debug(this._id + "closing"), this._closing = !0, this._clearTimeouts(), this._socket.close()
      }
    }, {
      key: "send", value: function(e) {
        p.debug(this._id + "sending " + JSON.stringify(e)), this._isReady() ? this._socket.send(JSON.stringify(e)) : this._trigger("error", "not_ready")
      }
    }, {
      key: "_isReady", value: function() {
        return p.debug(this._id + "_isReady called"), !!this._socket && this._socket.readyState === WebSocket.OPEN
      }
    }, {
      key: "_onMessage", value: function(e) {
        p.debug(this._id + "received message: " + e.data); try {
          var t = JSON.parse(e.data); switch (t.type) {
            case "RESPONSE": this._trigger("response", t); break;
            case "MESSAGE": this._trigger("message", t); break;
            case "PONG": this._receivedPong = !0; break;
            case "RECONNECT": this._trigger("reconnect")
          }
        } catch (e) {
          this._stats.logLine("onMessage JSON Parse error: " + e)
        }
      }
    }, {
      key: "_onError", value: function(e) {
        p.debug(this._id + "error: " + JSON.stringify(e))
      }
    }, {
      key: "_onClose", value: function(e) {
        if (p.debug(this._id + "onClose triggered with code " + e.code + "(closing = " + this._closing + ", connecting = " + this._connecting + ")"), this._clearTimeouts(), this._connecting) {
          var t = Math.pow(2, this._connectionAttempts); t > 120 && (t = 120), p.debug(this._id + "reconnecting in " + t + " seconds"), this._connectionAttempts += 1, this._nextConnectionAttempt = setTimeout(this.connect.bind(this), 1e3 * t)
        } else if (this._closing) this._closed = !0, this._trigger("connection_failure"); else {
          if (this._windowUnloading) return; p.debug(this._id + "unexpected close"), this._stats.logCounter("socket.error.unexpected_closed", 1, 1), this._stats.logCounter("socket.error.close." + e.code, 1, 1); var n = "pubsub-js-client unexpected_close. code: " + e.code + ", reason: " + e.reason + ", wasClean: " + e.wasClean; this._stats.logLine(n), this._closed = !0, this._trigger("connection_failure")
        }
      }
    }, {
      key: "_onOpen", value: function(e) {
        p.debug(this._id + " socket opened"), this._connectionAttempts = 0, this._connecting = !1, this._socketConnectTime && this._stats.logTimer("socket.connect", d.default.time.now() - this._socketConnectTime, .1), this._stats.logCounter("socket.connection_retries." + this._connectionAttempts, 1, .1), this._ping(), this._pingInterval = window.setInterval(this._ping.bind(this), 24e4), this._trigger("open")
      }
    }, {
      key: "_ping", value: function() {
        p.debug(this._id + "sending PING"); try {
          this._socket.send(JSON.stringify({
            type: "PING"
          })), this._sentPing = !0, this._pongTimeout && clearTimeout(this._pongTimeout), this._pongTimeout = setTimeout(this._pongTimedOut.bind(this), 3e4)
        } catch (e) {
          this._stats.logCounter("socket.error.ping_send_error", 1, 1), this._stats.logLine("ping error: closed: " + this._closed + ", error: " + e), this.close()
        }
      }
    }, {
      key: "_pongTimedOut", value: function() {
        this._sentPing && !this._receivedPong && (p.debug(this._id + "Pong timed out!"), this._stats.logCounter("socket.error.pong_timed_out", 1, 1), this.close())
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
  }(u.default); t.default = _
}, function(e, t, n) {
  "use strict"; function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  } function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }); var s = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    } return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), r = n(7), a = i(r), c = n(6), u = i(c), l = "https://pubster.twitch.tv/publish", f = "https://pubster-darklaunch.twitch.tv/publish", h = "pubsubtest.unique.", d = "pubsubtest.shared." + a.default.randomInt(10), p = u.default._getLogger("PubsubTest"), _ = function() {
    function e(t) {
      if (o(this, e), !window.$) return void p.debug("PubsubTest could not be enabled. JQuery is undefined."); switch (p.debug("PubsubTest enabled"), this._env = t.env, this._driver = t.driver, this._stats = t.stats, this._env) {
        case "production": this._addr = l; break;
        case "darklaunch": this._addr = f; break;
        default: this._env = "production", this._addr = l
      }this._statKeys = {
        uniqueSuccess: "test.unique.success", uniqueFailure: "test.unique.failure", sharedSuccess: "test.shared.success", sharedFailure: "test.shared.failure"
      }, this._uniqueKey = h + a.default.generateString(20), this._sharedKey = d, this._listeningUnique = this._listeningShared = !1, this.sendListens()
    } return s(e, [{
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
        p.debug("startTesting"), this._driver.on("connected", this.resumeTesting, this), this._driver.on("disconnected", this.stopTesting, this), this.checkAndSend(), this._publishInterval = window.setInterval(this.checkAndSend.bind(this), 6e4)
      }
    }, {
      key: "resumeTesting", value: function() {
        p.debug("resumeTesting"), this.checkAndSend(), this._publishInterval = window.setInterval(this.checkAndSend.bind(this), 6e4)
      }
    }, {
      key: "stopTesting", value: function() {
        p.debug("stopTesting"), clearInterval(this._publishInterval), this._receivedUniqueMessage = this._sentUniqueMessage = !1, this._receivedSharedMessage = this._sentSharedMessage = !1
      }
    }, {
      key: "checkAndSend", value: function() {
        p.debug("checkAndSend: unique: sent = " + this._sentUniqueMessage + ", received = " + this._receivedUniqueMessage), !this._receivedUniqueMessage && this._sentUniqueMessage && (p.debug("unique failure"), this._stats.logCounter(this._statKeys.uniqueFailure, 1, 1)), !this._receivedSharedMessage && this._sentSharedMessage && (p.debug("shared failure"), this._stats.logCounter(this._statKeys.sharedFailure, 1, 1)), this._receivedUniqueMessage = this._sentUniqueMessage = !1, this._receivedSharedMessage = this._sentSharedMessage = !1, this._expectedMessage = a.default.generateString(30), $.ajax({
          type: "POST", url: this._addr, contentType: "application/json", timeout: 3e4, data: JSON.stringify({
            topics: [this._uniqueKey], data: this._expectedMessage
          }), success: function() {
            p.debug("unique message sent"), this._sentUniqueMessage = !0
          }.bind(this)
        }), this._sentUniqueMessageTime = a.default.time.now(), Math.random() < 1e-4 && ($.ajax({
          type: "POST", url: this._addr, contentType: "application/json", timeout: 3e4, data: JSON.stringify({
            topics: [this._sharedKey], data: this._expectedMessage
          }), success: function() {
            p.debug("shared message sent"), this._sentSharedMessage = !0
          }.bind(this)
        }), this._sentSharedMessageTime = a.default.time.now())
      }
    }, {
      key: "_gotUniqueMessage", value: function(e) {
        if (p.debug("received unique message: " + e), e === this._expectedMessage) {
          var t = a.default.time.now() - this._sentUniqueMessageTime; this._receivedUniqueMessage = !0, this._stats.logTimer(this._statKeys.uniqueSuccess, t, .1), this._stats.logCounter(this._statKeys.uniqueSuccess, 1, .1)
        }
      }
    }, {
      key: "_gotSharedMessage", value: function(e) {
        if (e === this._expectedMessage) {
          var t = a.default.time.now() - this._sentSharedMessageTime; this._receivedSharedMessage = !0, this._stats.logTimer(this._statKeys.sharedSuccess, t, .1), this._stats.logCounter(this._statKeys.sharedSuccess, 1, .1)
        }
      }
    }]), e
  }(); t.default = _
}, function(e, t, n) {
  "use strict"; function i() {
    var e = window.localStorage.getItem("twilight.theme"); if (e) return s[e]; if (e = window.localStorage.getItem("storage:theme")) {
      var t = JSON.parse(e); if (t.activeTheme) return r[t.activeTheme] || o.Light
    } return o.Light
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getTheme = i; var o = t.Theme = void 0; !function(e) {
    e.Light = "light", e.Dark = "dark"
  }(o || (t.Theme = o = {
  })); var s = t.TWILIGHT_THEME_MAP = {
    0: o.Light, 1: o.Dark
  }, r = {
    "": o.Light, "theme--dark": o.Dark
  }
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.FunctionManager = void 0; var i = n(0), o = n(21), s = function() {
    function e(e, t, n) {
      var s = this; this.coordinator = e, this.loginId = t, this.emitConfirmationRequest = n, this.functionActionMap = (0, o.dict)(), this.functionModalMap = (0, o.dict)(), this.registerFunctionModal = function(e, t) {
        t.onOpen(function(n) {
          var o = s.loginId ? e : i.FunctionAction.LoginRequest, r = {
            action: o, resultCallback: t.resultCallback, defaultResult: t.defaultResult
          }; n && (r.options = n), s.requestConfirmation(r)
        }), t.onModalResult && t.onModalResult(function(e) {
          s.sendFunctionReply(e)
        }), s.functionModalMap[e] = t, s.functionActionMap[e] = s.functionActionHandler(e), s.coordinator.on(e, s.functionActionMap[e])
      }, this.unregisterFunctionModal = function(e) {
        s.coordinator.off(e, s.functionActionMap[e]), delete s.functionActionMap[e], delete s.functionModalMap[e]
      }, this.functionActionHandler = function(e) {
        return function(t) {
          var n = s.functionModalMap[e]; n && n.open(t)
        }
      }, this.requestConfirmation = function(e) {
        s.emitConfirmationRequest(e)
      }, this.sendFunctionReply = function(e) {
        s.coordinator.sendFunctionReply(e)
      }
    } return e
  }(); t.FunctionManager = s
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.PurchaseService = void 0; var i = n(35), o = function() {
    function e() {
    } return e.prototype.makePurchase = function(e, t, n) {
      return Promise.resolve().then(function() {
        window.open(e.action_details.destination_url + "&br_id=" + (0, i.encode)("" + t) + "&locale=" + n, "Twitch", "width=1024,height=600,scrollbars=yes")
      })
    }, e
  }(); t.PurchaseService = o
}, function(e, t, n) {
  "use strict"; function i(e) {
    if (r.has(e)) return r.get(e); var t = e(); return r.set(e, t), t
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.memoize = i; var o = n(90), s = function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }(o), r = new s.default
}, function(e, t, n) {
  "use strict"; e.exports = n(91)() ? WeakMap : n(92)
}, function(e, t, n) {
  "use strict"; e.exports = function() {
    var e, t; if ("function" != typeof WeakMap) return !1; try {
      e = new WeakMap([[t = {
      }, "one"], [{
      }, "two"], [{
      }, "three"]])
    } catch (e) {
      return !1
    } return "[object WeakMap]" === String(e) && ("function" == typeof e.set && (e.set({
    }, 1) === e && ("function" == typeof e.delete && ("function" == typeof e.has && "one" === e.get(t)))))
  }
}, function(e, t, n) {
  "use strict"; var i, o = n(25), s = n(94), r = n(1), a = n(95), c = n(11), u = n(47), l = n(127), f = n(2).toStringTag, h = n(128), d = Array.isArray, p = Object.defineProperty, _ = Object.prototype.hasOwnProperty, g = Object.getPrototypeOf; e.exports = i = function() {
    var e, t = arguments[0]; if (!(this instanceof i)) throw new TypeError("Constructor requires 'new'"); return e = h && o && WeakMap !== i ? o(new WeakMap, g(this)) : this, null != t && (d(t) || (t = u(t))), p(e, "__weakMapData__", c("c", "$weakMap$" + a())), t ? (l(t, function(t) {
      r(t), e.set(t[0], t[1])
    }), e) : e
  }, h && (o && o(i, WeakMap), i.prototype = Object.create(WeakMap.prototype, {
    constructor: c(i)
  })), Object.defineProperties(i.prototype, {
    delete: c(function(e) {
      return !!_.call(s(e), this.__weakMapData__) && (delete e[this.__weakMapData__], !0)
    }), get: c(function(e) {
      if (_.call(s(e), this.__weakMapData__)) return e[this.__weakMapData__]
    }), has: c(function(e) {
      return _.call(s(e), this.__weakMapData__)
    }), set: c(function(e, t) {
      return p(s(e), this.__weakMapData__, c("c", t)), this
    }), toString: c(function() {
      return "[object WeakMap]"
    })
  }), p(i.prototype, f, c("c", "WeakMap"))
}, function(e, t, n) {
  "use strict"; var i, o = Object.create; n(41)() || (i = n(42)), e.exports = function() {
    var e, t, n; return i ? 1 !== i.level ? o : (e = {
    }, t = {
    }, n = {
      configurable: !1, enumerable: !1, writable: !0, value: void 0
    }, Object.getOwnPropertyNames(Object.prototype).forEach(function(e) {
      if ("__proto__" === e) return void (t[e] = {
        configurable: !0, enumerable: !1, writable: !0, value: void 0
      }); t[e] = n
    }), Object.defineProperties(e, t), Object.defineProperty(i, "nullPolyfill", {
      configurable: !1, enumerable: !1, writable: !1, value: e
    }), function(t, n) {
      return o(null === t ? e : t, n)
    }) : o
  }()
}, function(e, t, n) {
  "use strict"; var i = n(43); e.exports = function(e) {
    if (!i(e)) throw new TypeError(e + " is not an Object"); return e
  }
}, function(e, t, n) {
  "use strict"; var i = Object.create(null), o = Math.random; e.exports = function() {
    var e; do {
      e = o().toString(36).slice(2)
    } while (i[e]); return e
  }
}, function(e, t, n) {
  "use strict"; e.exports = function() {
    var e, t = Object.assign; return "function" == typeof t && (e = {
      foo: "raz"
    }, t(e, {
      bar: "dwa"
    }, {
        trzy: "trzy"
      }), e.foo + e.bar + e.trzy === "razdwatrzy")
  }
}, function(e, t, n) {
  "use strict"; var i = n(98), o = n(1), s = Math.max; e.exports = function(e, t) {
    var n, r, a, c = s(arguments.length, 2); for (e = Object(o(e)), a = function(i) {
      try {
        e[i] = t[i]
      } catch (e) {
        n || (n = e)
      }
    }, r = 1; r < c; ++r)t = arguments[r], i(t).forEach(a); if (void 0 !== n) throw n; return e
  }
}, function(e, t, n) {
  "use strict"; e.exports = n(99)() ? Object.keys : n(100)
}, function(e, t, n) {
  "use strict"; e.exports = function() {
    try {
      return Object.keys("primitive"), !0
    } catch (e) {
      return !1
    }
  }
}, function(e, t, n) {
  "use strict"; var i = n(8), o = Object.keys; e.exports = function(e) {
    return o(i(e) ? Object(e) : e)
  }
}, function(e, t, n) {
  "use strict"; e.exports = function(e) {
    return "function" == typeof e
  }
}, function(e, t, n) {
  "use strict"; var i = "razdwatrzy"; e.exports = function() {
    return "function" == typeof i.contains && (!0 === i.contains("dwa") && !1 === i.contains("foo"))
  }
}, function(e, t, n) {
  "use strict"; var i = String.prototype.indexOf; e.exports = function(e) {
    return i.call(this, e, arguments[1]) > -1
  }
}, function(e, t, n) {
  "use strict"; var i, o = n(25), s = n(46), r = n(11), a = n(2), c = n(48), u = Object.defineProperty; i = e.exports = function(e, t) {
    if (!(this instanceof i)) throw new TypeError("Constructor requires 'new'"); c.call(this, e), t = t ? s.call(t, "key+value") ? "key+value" : s.call(t, "key") ? "key" : "value" : "value", u(this, "__kind__", r("", t))
  }, o && o(i, c), delete i.prototype.constructor, i.prototype = Object.create(c.prototype, {
    _resolve: r(function(e) {
      return "value" === this.__kind__ ? this.__list__[e] : "key+value" === this.__kind__ ? [e, this.__list__[e]] : e
    })
  }), u(i.prototype, a.toStringTag, r("c", "Array Iterator"))
}, function(e, t, n) {
  "use strict"; var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  }, o = {
    object: !0, symbol: !0
  }; e.exports = function() {
    var e; if ("function" != typeof Symbol) return !1; e = Symbol("test symbol"); try {
      String(e)
    } catch (e) {
      return !1
    } return !!o[i(Symbol.iterator)] && (!!o[i(Symbol.toPrimitive)] && !!o[i(Symbol.toStringTag)])
  }
}, function(e, t, n) {
  "use strict"; var i, o, s, r, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  }, c = n(11), u = n(107), l = Object.create, f = Object.defineProperties, h = Object.defineProperty, d = Object.prototype, p = l(null); if ("function" == typeof Symbol) {
    i = Symbol; try {
      String(i()), r = !0
    } catch (e) {
    }
  } var _ = function() {
    var e = l(null); return function(t) {
      for (var n, i, o = 0; e[t + (o || "")];)++o; return t += o || "", e[t] = !0, n = "@@" + t, h(d, n, c.gs(null, function(e) {
        i || (i = !0, h(this, n, c(e)), i = !1)
      })), n
    }
  }(); s = function(e) {
    if (this instanceof s) throw new TypeError("Symbol is not a constructor"); return o(e)
  }, e.exports = o = function e(t) {
    var n; if (this instanceof e) throw new TypeError("Symbol is not a constructor"); return r ? i(t) : (n = l(s.prototype), t = void 0 === t ? "" : String(t), f(n, {
      __description__: c("", t), __name__: c("", _(t))
    }))
  }, f(o, {
    for: c(function(e) {
      return p[e] ? p[e] : p[e] = o(String(e))
    }), keyFor: c(function(e) {
      var t; u(e); for (t in p) if (p[t] === e) return t
    }), hasInstance: c("", i && i.hasInstance || o("hasInstance")), isConcatSpreadable: c("", i && i.isConcatSpreadable || o("isConcatSpreadable")), iterator: c("", i && i.iterator || o("iterator")), match: c("", i && i.match || o("match")), replace: c("", i && i.replace || o("replace")), search: c("", i && i.search || o("search")), species: c("", i && i.species || o("species")), split: c("", i && i.split || o("split")), toPrimitive: c("", i && i.toPrimitive || o("toPrimitive")), toStringTag: c("", i && i.toStringTag || o("toStringTag")), unscopables: c("", i && i.unscopables || o("unscopables"))
  }), f(s.prototype, {
    constructor: c(o), toString: c("", function() {
      return this.__name__
    })
  }), f(o.prototype, {
    toString: c(function() {
      return "Symbol (" + u(this).__description__ + ")"
    }), valueOf: c(function() {
      return u(this)
    })
  }), h(o.prototype, o.toPrimitive, c("", function() {
    var e = u(this); return "symbol" === (void 0 === e ? "undefined" : a(e)) ? e : e.toString()
  })), h(o.prototype, o.toStringTag, c("c", "Symbol")), h(s.prototype, o.toStringTag, c("c", o.prototype[o.toStringTag])), h(s.prototype, o.toPrimitive, c("c", o.prototype[o.toPrimitive]))
}, function(e, t, n) {
  "use strict"; var i = n(108); e.exports = function(e) {
    if (!i(e)) throw new TypeError(e + " is not a symbol"); return e
  }
}, function(e, t, n) {
  "use strict"; var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  }; e.exports = function(e) {
    return !!e && ("symbol" === (void 0 === e ? "undefined" : i(e)) || !!e.constructor && ("Symbol" === e.constructor.name && "Symbol" === e[e.constructor.toStringTag]))
  }
}, function(e, t, n) {
  "use strict"; var i = n(1); e.exports = function() {
    return i(this).length = 0, this
  }
}, function(e, t, n) {
  "use strict"; var i, o = n(111), s = n(45), r = n(3), a = n(121), c = n(3), u = n(1), l = Function.prototype.bind, f = Object.defineProperty, h = Object.prototype.hasOwnProperty; i = function(e, t, n) {
    var i, s = u(t) && c(t.value); return i = o(t), delete i.writable, delete i.value, i.get = function() {
      return !n.overwriteDefinition && h.call(this, e) ? s : (t.value = l.call(s, n.resolveContext ? n.resolveContext(this) : this), f(this, e, t), this[e])
    }, i
  }, e.exports = function(e) {
    var t = s(arguments[1]); return null != t.resolveContext && r(t.resolveContext), a(e, function(e, n) {
      return i(n, e, t)
    })
  }
}, function(e, t, n) {
  "use strict"; var i = n(112), o = n(26), s = n(1); e.exports = function(e) {
    var t = Object(s(e)), n = arguments[1], r = Object(arguments[2]); if (t !== e && !n) return t; var a = {
    }; return n ? i(n, function(t) {
      (r.ensure || t in e) && (a[t] = e[t])
    }) : o(a, e), a
  }
}, function(e, t, n) {
  "use strict"; e.exports = n(113)() ? Array.from : n(114)
}, function(e, t, n) {
  "use strict"; e.exports = function() {
    var e, t, n = Array.from; return "function" == typeof n && (e = ["raz", "dwa"], t = n(e), Boolean(t && t !== e && "dwa" === t[1]))
  }
}, function(e, t, n) {
  "use strict"; var i = n(2).iterator, o = n(16), s = n(115), r = n(116), a = n(3), c = n(1), u = n(8), l = n(17), f = Array.isArray, h = Function.prototype.call, d = {
    configurable: !0, enumerable: !0, writable: !0, value: null
  }, p = Object.defineProperty; e.exports = function(e) {
    var t, n, _, g, y, b, v, m, w, k, x = arguments[1], E = arguments[2]; if (e = Object(c(e)), u(x) && a(x), this && this !== Array && s(this)) t = this; else {
      if (!x) {
        if (o(e)) return 1 !== (y = e.length) ? Array.apply(null, e) : (g = new Array(1), g[0] = e[0], g); if (f(e)) {
          for (g = new Array(y = e.length), n = 0; n < y; ++n)g[n] = e[n]; return g
        }
      } g = []
    } if (!f(e)) if (void 0 !== (w = e[i])) {
      for (v = a(w).call(e), t && (g = new t), m = v.next(), n = 0; !m.done;)k = x ? h.call(x, E, m.value, n) : m.value, t ? (d.value = k, p(g, n, d)) : g[n] = k, m = v.next(), ++n; y = n
    } else if (l(e)) {
      for (y = e.length, t && (g = new t), n = 0, _ = 0; n < y; ++n)k = e[n], n + 1 < y && (b = k.charCodeAt(0)) >= 55296 && b <= 56319 && (k += e[++n]), k = x ? h.call(x, E, k, _) : k, t ? (d.value = k, p(g, _, d)) : g[_] = k, ++_; y = _
    } if (void 0 === y) for (y = r(e.length), t && (g = new t(y)), n = 0; n < y; ++n)k = x ? h.call(x, E, e[n], n) : e[n], t ? (d.value = k, p(g, n, d)) : g[n] = k; return t && (d.value = null, g.length = y), g
  }
}, function(e, t, n) {
  "use strict"; var i = Object.prototype.toString, o = i.call(n(44)); e.exports = function(e) {
    return "function" == typeof e && i.call(e) === o
  }
}, function(e, t, n) {
  "use strict"; var i = n(117), o = Math.max; e.exports = function(e) {
    return o(0, i(e))
  }
}, function(e, t, n) {
  "use strict"; var i = n(118), o = Math.abs, s = Math.floor; e.exports = function(e) {
    return isNaN(e) ? 0 : (e = Number(e), 0 !== e && isFinite(e) ? i(e) * s(o(e)) : e)
  }
}, function(e, t, n) {
  "use strict"; e.exports = n(119)() ? Math.sign : n(120)
}, function(e, t, n) {
  "use strict"; e.exports = function() {
    var e = Math.sign; return "function" == typeof e && (1 === e(10) && -1 === e(-20))
  }
}, function(e, t, n) {
  "use strict"; e.exports = function(e) {
    return e = Number(e), isNaN(e) || 0 === e ? e : e > 0 ? 1 : -1
  }
}, function(e, t, n) {
  "use strict"; var i = n(3), o = n(122), s = Function.prototype.call; e.exports = function(e, t) {
    var n = {
    }, r = arguments[2]; return i(t), o(e, function(e, i, o, a) {
      n[i] = s.call(t, r, e, i, o, a)
    }), n
  }
}, function(e, t, n) {
  "use strict"; e.exports = n(123)("forEach")
}, function(e, t, n) {
  "use strict"; var i = n(3), o = n(1), s = Function.prototype.bind, r = Function.prototype.call, a = Object.keys, c = Object.prototype.propertyIsEnumerable; e.exports = function(e, t) {
    return function(n, u) {
      var l, f = arguments[2], h = arguments[3]; return n = Object(o(n)), i(u), l = a(n), h && l.sort("function" == typeof h ? s.call(h, n) : void 0), "function" != typeof e && (e = l[e]), r.call(e, l, function(e, i) {
        return c.call(n, e) ? r.call(u, f, n[e], e, n, i) : t
      })
    }
  }
}, function(e, t, n) {
  "use strict"; var i, o = n(25), s = n(11), r = n(2), a = n(48), c = Object.defineProperty; i = e.exports = function(e) {
    if (!(this instanceof i)) throw new TypeError("Constructor requires 'new'"); e = String(e), a.call(this, e), c(this, "__length__", s("", e.length))
  }, o && o(i, a), delete i.prototype.constructor, i.prototype = Object.create(a.prototype, {
    _next: s(function() {
      if (this.__list__) return this.__nextIndex__ < this.__length__ ? this.__nextIndex__++ : void this._unBind()
    }), _resolve: s(function(e) {
      var t, n = this.__list__[e]; return this.__nextIndex__ === this.__length__ ? n : (t = n.charCodeAt(0), t >= 55296 && t <= 56319 ? n + this.__list__[this.__nextIndex__++] : n)
    })
  }), c(i.prototype, r.toStringTag, s("c", "String Iterator"))
}, function(e, t, n) {
  "use strict"; var i = n(126); e.exports = function(e) {
    if (!i(e)) throw new TypeError(e + " is not iterable"); return e
  }
}, function(e, t, n) {
  "use strict"; var i = n(16), o = n(8), s = n(17), r = n(2).iterator, a = Array.isArray; e.exports = function(e) {
    return !!o(e) && (!!a(e) || (!!s(e) || (!!i(e) || "function" == typeof e[r])))
  }
}, function(e, t, n) {
  "use strict"; var i = n(16), o = n(3), s = n(17), r = n(47), a = Array.isArray, c = Function.prototype.call, u = Array.prototype.some; e.exports = function(e, t) {
    var n, l, f, h, d, p, _, g, y = arguments[2]; if (a(e) || i(e) ? n = "array" : s(e) ? n = "string" : e = r(e), o(t), f = function() {
      h = !0
    }, "array" === n) return void u.call(e, function(e) {
      return c.call(t, y, e, f), h
    }); if ("string" !== n) for (l = e.next(); !l.done;) {
      if (c.call(t, y, l.value, f), h) return; l = e.next()
    } else for (p = e.length, d = 0; d < p && (_ = e[d], d + 1 < p && (g = _.charCodeAt(0)) >= 55296 && g <= 56319 && (_ += e[++d]), c.call(t, y, _, f), !h); ++d);
  }
}, function(e, t, n) {
  "use strict"; e.exports = function() {
    return "function" == typeof WeakMap && "[object WeakMap]" === Object.prototype.toString.call(new WeakMap)
  }()
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.FollowModal = void 0; var i = n(130), o = n(19), s = n(24), r = function() {
    function e(e, t) {
      var n = this; this.loginId = e, this.tracker = t, this.close = function() {
        n.replyCallback({
          action: o.FunctionAction.FollowComplete, channel: n.channel, didFollow: !1
        }), n.tracker.trackEvent("extension_follow_fail", {
          target_channel: n.channel, target_channel_id: n.channelId, fail_reason: n.failReason
        })
      }, this.onModalResult = function(e) {
        n.replyCallback = e
      }, this.onOpen = function(e) {
        n.openCallback = function(t) {
          n.tracker.trackEvent("extension_follow_init", {
            target_channel: t.channel, target_channel_id: t.channelId
          }), e(t)
        }
      }, this.resultCallback = function(e) {
        e.didFollow ? (n.tracker.trackEvent("extension_follow_confirm", {
          target_channel: n.channel, target_channel_id: n.channelId
        }), n.follow(n.loginId, n.channel, e.notifications)) : n.close()
      }, this.follow = function(e, t, s) {
        (0, i.followChannel)(e, t, s).then(function(e) {
          var t = e.channel, i = e.channelId, s = e.isFollowing, r = {
            action: o.FunctionAction.FollowComplete, channel: t, didFollow: s
          }; n.tracker.trackEvent("extension_follow", {
            target_channel: t, target_channel_id: i
          }), n.replyCallback(r)
        })
      }
    } return Object.defineProperty(e.prototype, "defaultResult", {
      get: function() {
        return {
          didFollow: !1, notifications: !1
        }
      }, enumerable: !0, configurable: !0
    }), e.prototype.open = function(e) {
      var t = this; if (this.channel = e.payload.channel, !this.loginId) return this.channelId = 0, this.openCallback && this.openCallback({
        channel: this.channel, channelId: 0, isFollowing: !1, isLoggedIn: !1
      }), void (this.failReason = s.ExtensionFollowFailReason.LoggedOut); (0, i.getFollowStatus)(this.loginId, this.channel).then(function(e) {
        var n = e.channel, i = e.channelId, o = e.isFollowing; t.channelId = i, t.openCallback && t.openCallback({
          channel: n, channelId: i, isFollowing: o, isLoggedIn: !0
        }), t.failReason = null === n ? s.ExtensionFollowFailReason.InvalidId : o ? s.ExtensionFollowFailReason.AlreadyFollowed : s.ExtensionFollowFailReason.Cancelled
      })
    }, e
  }(); t.FollowModal = r
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.followChannel = t.getFollowStatus = void 0; var i = n(10), o = function(e) {
    var t = i.api.newRequest("/api/channels/" + e, {
      method: "GET"
    }); return i.api.authRequest(t).then(function(e) {
      return e ? e._id : 0
    }).catch(function() {
      return 0
    })
  }; t.getFollowStatus = function(e, t) {
    return o(t).then(function(n) {
      if (0 === n) return {
        channel: null, channelId: 0, isFollowing: !1
      }; var o = i.api.newRequest("/v5/users/" + e + "/follows/channels/" + n, {
        method: "GET"
      }); return i.api.authRequest(o).then(function() {
        return {
          channel: t, channelId: n, isFollowing: !0
        }
      }).catch(function() {
        return {
          channel: t, channelId: n, isFollowing: !1
        }
      })
    })
  }, t.followChannel = function(e, t, n) {
    return o(t).then(function(o) {
      if (0 === o) return {
        channel: null, channelId: 0, isFollowing: !1
      }; var s = i.api.newRequest("/v5/users/" + e + "/follows/channels/" + o, {
        method: "PUT", body: JSON.stringify({
          notifications: n
        })
      }); return i.api.authRequest(s).then(function() {
        return {
          channel: t, channelId: o, isFollowing: !0
        }
      }).catch(function() {
        return {
          channel: t, channelId: o, isFollowing: !1
        }
      })
    })
  }
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }); var i = function() {
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
  }(); t.SimpleRequestModal = i
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.BitsConfirmationModal = void 0; var i = n(49), o = n(10), s = n(19), r = n(24), a = n(133), c = n(14), u = n(13), l = function() {
    function e(e, t, n) {
      var o = this; this.loginId = e, this.tracker = t, this.pubsub = n, this.close = function(e) {
        void 0 === e && (e = !1), o.replyCallback({
          action: s.FunctionAction.UseBitsComplete, didConfirm: e, didUseBits: !1
        }), o.track(a.BitsModalDataScience.UseBitsFailure)
      }, this.onModalResult = function(e) {
        o.replyCallback = function(t) {
          o.onUseBitsPromptCompleted && o.onUseBitsPromptCompleted(t), o.loginId && o.offBitsBalanceUpdate(o.loginId), e(t)
        }
      }, this.onOpen = function(e) {
        o.openCallback = function(t) {
          o.track(a.BitsModalDataScience.UseBitsInitialization), e(t)
        }
      }, this.resultCallback = function(e) {
        return e.didConfirm ? (o.track(a.BitsModalDataScience.UseBitsConfirmation), o.useBitsInExtension(o.transactionId, e.didConfirm)) : (o.failReason = r.ExtensionUseBitsFailReason.Cancelled, Promise.resolve(o.close()))
      }, this.unsubscribeCallback = function() {
      }, this.useBitsInExtension = function(e, t) {
        return (0, c.linkUser)(o.extensionId, o.token, !0).then(function(n) {
          var c = n.token; return u.tokenManager.registerToken(o.extensionId, c), (0, i.useBits)(e).then(function(e) {
            var n = e.bits_balance, i = {
              action: s.FunctionAction.UseBitsComplete, didConfirm: t, didUseBits: !0
            }; return o.track(a.BitsModalDataScience.UseBitsSuccess), o.replyCallback(i), n
          }).catch(function(e) {
            o.handleUseBitsError(e, r.ExtensionUseBitsFailReason.UseBitsFailure, a.BitsModalDataScience.UseBitsFailure)
          })
        }).catch(function(e) {
          o.handleUseBitsError(e, r.ExtensionUseBitsFailReason.UnableToLinkUser, a.BitsModalDataScience.UseBitsLinkUserFailure)
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
    } return Object.defineProperty(e.prototype, "defaultResult", {
      get: function() {
        return {
          didConfirm: !1, didUseBits: !1
        }
      }, enumerable: !0, configurable: !0
    }), e.prototype.open = function(e) {
      if (void 0 === e.payload) {
        var t = e.error || new Error("Payload and Error were both undefined"); return this.openCallback && this.openCallback({
          error: t
        }), void (this.failReason = r.ExtensionUseBitsFailReason.UserIneligible)
      } var n = e.payload, i = n.channelId, o = n.bitsRequired, s = n.sku, a = n.clientId, c = n.extensionItemLabel, u = n.extensionName, l = n.transactionId, f = n.bitsBalance, h = n.extensionId, d = n.token, p = n.onUseBitsPromptCompleted; if (this.channelId = i, this.clientId = a, this.transactionId = l, this.extensionName = u, this.extensionItemLabel = c, this.sku = s, this.bitsBalance = f, this.bitsRequired = o, this.extensionId = h, this.token = d, this.onUseBitsPromptCompleted = p, !this.loginId) return void (this.failReason = r.ExtensionUseBitsFailReason.LoggedOut); this.openCallback && (this.onBitsBalanceUpdate(this.loginId), this.openCallback({
        payload: {
          channelId: i, clientId: a, userId: this.loginId, isLoggedIn: !!this.loginId, sku: s, bitsRequired: o, transactionId: l, extensionItemLabel: c, extensionName: u, bitsBalance: f, track: this.track
        }
      })), this.channelId || (this.failReason = r.ExtensionUseBitsFailReason.InvalidID)
    }, e.prototype.onBitsBalanceUpdate = function(e) {
      var t = this, n = o.api.authToken; this.unsubscribeCallback = this.pubsub.subscribe({
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
    }, e.prototype.offBitsBalanceUpdate = function(e) {
      this.unsubscribeCallback && this.unsubscribeCallback()
    }, e
  }(); t.BitsConfirmationModal = l
}, function(e, t, n) {
  "use strict"; Object.defineProperty(t, "__esModule", {
    value: !0
  }); var i = t.BitsModalDataScience = void 0; !function(e) {
    e.UseBitsLinkUserFailure = "extension_use_bits_link_user_fail", e.UseBitsFailure = "extension_use_bits_fail", e.UseBitsInitialization = "extension_use_bits_init", e.UseBitsConfirmation = "extension_use_bits_confirm", e.UseBitsSuccess = "extension_use_bits_success"
  }(i || (t.BitsModalDataScience = i = {
  }))
}, function(e, t, n) {
  "use strict"; function i(e, t, n) {
    return {
      x: n.x * e / 1e4, y: n.y * t / 1e4
    }
  } function o(e, t, n) {
    var i = n.aspectWidth / 1e4, o = n.aspectHeight / 1e4, r = n.zoomPixels || s.DefaultZoomPixelWidth, a = e * i, c = t * o; return {
      width: Math.floor(a), height: Math.floor(c), zoomScale: a / r
    }
  } Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getComponentPositionFromView = i, t.getComponentSizeFromView = o; var s = n(31)
}, function(e, t, n) {
  "use strict"; try {
    new MouseEvent("test")
  } catch (e) {
    window.MouseEvent = function(e, t) {
      var n = document.createEvent("MouseEvent"), i = Object.assign({
        bubbles: !1, cancelable: !1, clientX: 0, clientY: 0, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1, button: 0, relatedTarget: null
      }, t || {
      }); return n.initMouseEvent(e, i.bubbles, i.cancelable, window, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.button, i.relatedTarget), n
    }, window.MouseEvent.prototype = Event.prototype
  }
}, function(e, t, n) {
  "use strict"; (function(t) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }; !function(i) {
      function o() {
      } function s(e, t) {
        return function() {
          e.apply(t, arguments)
        }
      } function r(e) {
        if (!(this instanceof r)) throw new TypeError("Promises must be constructed via new"); if ("function" != typeof e) throw new TypeError("not a function"); this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], h(e, this)
      } function a(e, t) {
        for (; 3 === e._state;)e = e._value; if (0 === e._state) return void e._deferreds.push(t); e._handled = !0, r._immediateFn(function() {
          var n = 1 === e._state ? t.onFulfilled : t.onRejected; if (null === n) return void (1 === e._state ? c : u)(t.promise, e._value); var i; try {
            i = n(e._value)
          } catch (e) {
            return void u(t.promise, e)
          } c(t.promise, i)
        })
      } function c(e, t) {
        try {
          if (t === e) throw new TypeError("A promise cannot be resolved with itself."); if (t && ("object" === (void 0 === t ? "undefined" : n(t)) || "function" == typeof t)) {
            var i = t.then; if (t instanceof r) return e._state = 3, e._value = t, void l(e); if ("function" == typeof i) return void h(s(i, t), e)
          } e._state = 1, e._value = t, l(e)
        } catch (t) {
          u(e, t)
        }
      } function u(e, t) {
        e._state = 2, e._value = t, l(e)
      } function l(e) {
        2 === e._state && 0 === e._deferreds.length && r._immediateFn(function() {
          e._handled || r._unhandledRejectionFn(e._value)
        }); for (var t = 0, n = e._deferreds.length; t < n; t++)a(e, e._deferreds[t]); e._deferreds = null
      } function f(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
      } function h(e, t) {
        var n = !1; try {
          e(function(e) {
            n || (n = !0, c(t, e))
          }, function(e) {
            n || (n = !0, u(t, e))
          })
        } catch (e) {
          if (n) return; n = !0, u(t, e)
        }
      } var d = setTimeout; r.prototype.catch = function(e) {
        return this.then(null, e)
      }, r.prototype.then = function(e, t) {
        var n = new this.constructor(o); return a(this, new f(e, t, n)), n
      }, r.all = function(e) {
        return new r(function(t, i) {
          function o(e, a) {
            try {
              if (a && ("object" === (void 0 === a ? "undefined" : n(a)) || "function" == typeof a)) {
                var c = a.then; if ("function" == typeof c) return void c.call(a, function(t) {
                  o(e, t)
                }, i)
              } s[e] = a, 0 == --r && t(s)
            } catch (e) {
              i(e)
            }
          } if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array"); var s = Array.prototype.slice.call(e); if (0 === s.length) return t([]); for (var r = s.length, a = 0; a < s.length; a++)o(a, s[a])
        })
      }, r.resolve = function(e) {
        return e && "object" === (void 0 === e ? "undefined" : n(e)) && e.constructor === r ? e : new r(function(t) {
          t(e)
        })
      }, r.reject = function(e) {
        return new r(function(t, n) {
          n(e)
        })
      }, r.race = function(e) {
        return new r(function(t, n) {
          for (var i = 0, o = e.length; i < o; i++)e[i].then(t, n)
        })
      }, r._immediateFn = "function" == typeof t && function(e) {
        t(e)
      } || function(e) {
        d(e, 0)
      }, r._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
      }, r._setImmediateFn = function(e) {
        r._immediateFn = e
      }, r._setUnhandledRejectionFn = function(e) {
        r._unhandledRejectionFn = e
      }, void 0 !== e && e.exports ? e.exports = r : i.Promise || (i.Promise = r)
    }(void 0)
  }).call(t, n(137).setImmediate)
}, function(e, t, n) {
  "use strict"; function i(e, t) {
    this._id = e, this._clearFn = t
  } var o = Function.prototype.apply; t.setTimeout = function() {
    return new i(o.call(setTimeout, window, arguments), clearTimeout)
  }, t.setInterval = function() {
    return new i(o.call(setInterval, window, arguments), clearInterval)
  }, t.clearTimeout = t.clearInterval = function(e) {
    e && e.close()
  }, i.prototype.unref = i.prototype.ref = function() {
  }, i.prototype.close = function() {
    this._clearFn.call(window, this._id)
  }, t.enroll = function(e, t) {
    clearTimeout(e._idleTimeoutId), e._idleTimeout = t
  }, t.unenroll = function(e) {
    clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
  }, t._unrefActive = t.active = function(e) {
    clearTimeout(e._idleTimeoutId); var t = e._idleTimeout; t >= 0 && (e._idleTimeoutId = setTimeout(function() {
      e._onTimeout && e._onTimeout()
    }, t))
  }, n(138), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate
}, function(e, t, n) {
  "use strict"; (function(e, t) {
    !function(e, n) {
      function i(e) {
        "function" != typeof e && (e = new Function("" + e)); for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)t[n] = arguments[n + 1]; var i = {
          callback: e, args: t
        }; return u[c] = i, a(c), c++
      } function o(e) {
        delete u[e]
      } function s(e) {
        var t = e.callback, i = e.args; switch (i.length) {
          case 0: t(); break;
          case 1: t(i[0]); break;
          case 2: t(i[0], i[1]); break;
          case 3: t(i[0], i[1], i[2]); break;
          default: t.apply(n, i)
        }
      } function r(e) {
        if (l) setTimeout(r, 0, e); else {
          var t = u[e]; if (t) {
            l = !0; try {
              s(t)
            } finally {
              o(e), l = !1
            }
          }
        }
      } if (!e.setImmediate) {
        var a, c = 1, u = {
        }, l = !1, f = e.document, h = Object.getPrototypeOf && Object.getPrototypeOf(e); h = h && h.setTimeout ? h : e, "[object process]" === {
        }.toString.call(e.process) ? function() {
          a = function(e) {
            t.nextTick(function() {
              r(e)
            })
          }
        }() : function() {
          if (e.postMessage && !e.importScripts) {
            var t = !0, n = e.onmessage; return e.onmessage = function() {
              t = !1
            }, e.postMessage("", "*"), e.onmessage = n, t
          }
        }() ? function() {
          var t = "setImmediate$" + Math.random() + "$", n = function(n) {
            n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && r(+n.data.slice(t.length))
          }; e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), a = function(n) {
            e.postMessage(t + n, "*")
          }
        }() : e.MessageChannel ? function() {
          var e = new MessageChannel; e.port1.onmessage = function(e) {
            r(e.data)
          }, a = function(t) {
            e.port2.postMessage(t)
          }
        }() : f && "onreadystatechange" in f.createElement("script") ? function() {
          var e = f.documentElement; a = function(t) {
            var n = f.createElement("script"); n.onreadystatechange = function() {
              r(t), n.onreadystatechange = null, e.removeChild(n), n = null
            }, e.appendChild(n)
          }
        }() : function() {
          a = function(e) {
            setTimeout(r, 0, e)
          }
        }(), h.setImmediate = i, h.clearImmediate = o
      }
    }("undefined" == typeof self ? void 0 === e ? void 0 : e : self)
  }).call(t, n(28), n(18))
}, function(e, t, n) {
  "use strict"; !function(e) {
    function t(e) {
      if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name"); return e.toLowerCase()
    } function n(e) {
      return "string" != typeof e && (e = String(e)), e
    } function i(e) {
      var t = {
        next: function() {
          var t = e.shift(); return {
            done: void 0 === t, value: t
          }
        }
      }; return y.iterable && (t[Symbol.iterator] = function() {
        return t
      }), t
    } function o(e) {
      this.map = {
      }, e instanceof o ? e.forEach(function(e, t) {
        this.append(t, e)
      }, this) : Array.isArray(e) ? e.forEach(function(e) {
        this.append(e[0], e[1])
      }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
        this.append(t, e[t])
      }, this)
    } function s(e) {
      if (e.bodyUsed) return Promise.reject(new TypeError("Already read")); e.bodyUsed = !0
    } function r(e) {
      return new Promise(function(t, n) {
        e.onload = function() {
          t(e.result)
        }, e.onerror = function() {
          n(e.error)
        }
      })
    } function a(e) {
      var t = new FileReader, n = r(t); return t.readAsArrayBuffer(e), n
    } function c(e) {
      var t = new FileReader, n = r(t); return t.readAsText(e), n
    } function u(e) {
      for (var t = new Uint8Array(e), n = new Array(t.length), i = 0; i < t.length; i++)n[i] = String.fromCharCode(t[i]); return n.join("")
    } function l(e) {
      if (e.slice) return e.slice(0); var t = new Uint8Array(e.byteLength); return t.set(new Uint8Array(e)), t.buffer
    } function f() {
      return this.bodyUsed = !1, this._initBody = function(e) {
        if (this._bodyInit = e, e) if ("string" == typeof e) this._bodyText = e; else if (y.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e; else if (y.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e; else if (y.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString(); else if (y.arrayBuffer && y.blob && v(e)) this._bodyArrayBuffer = l(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]); else {
          if (!y.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !m(e)) throw new Error("unsupported BodyInit type"); this._bodyArrayBuffer = l(e)
        } else this._bodyText = ""; this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : y.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
      }, y.blob && (this.blob = function() {
        var e = s(this); if (e) return e; if (this._bodyBlob) return Promise.resolve(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer])); if (this._bodyFormData) throw new Error("could not read FormData body as blob"); return Promise.resolve(new Blob([this._bodyText]))
      }, this.arrayBuffer = function() {
        return this._bodyArrayBuffer ? s(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(a)
      }), this.text = function() {
        var e = s(this); if (e) return e; if (this._bodyBlob) return c(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(u(this._bodyArrayBuffer)); if (this._bodyFormData) throw new Error("could not read FormData body as text"); return Promise.resolve(this._bodyText)
      }, y.formData && (this.formData = function() {
        return this.text().then(p)
      }), this.json = function() {
        return this.text().then(JSON.parse)
      }, this
    } function h(e) {
      var t = e.toUpperCase(); return w.indexOf(t) > -1 ? t : e
    } function d(e, t) {
      t = t || {
      }; var n = t.body; if (e instanceof d) {
        if (e.bodyUsed) throw new TypeError("Already read"); this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new o(e.headers)), this.method = e.method, this.mode = e.mode, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
      } else this.url = String(e); if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new o(t.headers)), this.method = h(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests"); this._initBody(n)
    } function p(e) {
      var t = new FormData; return e.trim().split("&").forEach(function(e) {
        if (e) {
          var n = e.split("="), i = n.shift().replace(/\+/g, " "), o = n.join("=").replace(/\+/g, " "); t.append(decodeURIComponent(i), decodeURIComponent(o))
        }
      }), t
    } function _(e) {
      var t = new o; return e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
        var n = e.split(":"), i = n.shift().trim(); if (i) {
          var o = n.join(":").trim(); t.append(i, o)
        }
      }), t
    } function g(e, t) {
      t || (t = {
      }), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new o(t.headers), this.url = t.url || "", this._initBody(e)
    } if (!e.fetch) {
      var y = {
        searchParams: "URLSearchParams" in e, iterable: "Symbol" in e && "iterator" in Symbol, blob: "FileReader" in e && "Blob" in e && function() {
          try {
            return new Blob, !0
          } catch (e) {
            return !1
          }
        }(), formData: "FormData" in e, arrayBuffer: "ArrayBuffer" in e
      }; if (y.arrayBuffer) var b = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], v = function(e) {
        return e && DataView.prototype.isPrototypeOf(e)
      }, m = ArrayBuffer.isView || function(e) {
        return e && b.indexOf(Object.prototype.toString.call(e)) > -1
      }; o.prototype.append = function(e, i) {
        e = t(e), i = n(i); var o = this.map[e]; this.map[e] = o ? o + "," + i : i
      }, o.prototype.delete = function(e) {
        delete this.map[t(e)]
      }, o.prototype.get = function(e) {
        return e = t(e), this.has(e) ? this.map[e] : null
      }, o.prototype.has = function(e) {
        return this.map.hasOwnProperty(t(e))
      }, o.prototype.set = function(e, i) {
        this.map[t(e)] = n(i)
      }, o.prototype.forEach = function(e, t) {
        for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
      }, o.prototype.keys = function() {
        var e = []; return this.forEach(function(t, n) {
          e.push(n)
        }), i(e)
      }, o.prototype.values = function() {
        var e = []; return this.forEach(function(t) {
          e.push(t)
        }), i(e)
      }, o.prototype.entries = function() {
        var e = []; return this.forEach(function(t, n) {
          e.push([n, t])
        }), i(e)
      }, y.iterable && (o.prototype[Symbol.iterator] = o.prototype.entries); var w = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"]; d.prototype.clone = function() {
        return new d(this, {
          body: this._bodyInit
        })
      }, f.call(d.prototype), f.call(g.prototype), g.prototype.clone = function() {
        return new g(this._bodyInit, {
          status: this.status, statusText: this.statusText, headers: new o(this.headers), url: this.url
        })
      }, g.error = function() {
        var e = new g(null, {
          status: 0, statusText: ""
        }); return e.type = "error", e
      }; var k = [301, 302, 303, 307, 308]; g.redirect = function(e, t) {
        if (-1 === k.indexOf(t)) throw new RangeError("Invalid status code"); return new g(null, {
          status: t, headers: {
            location: e
          }
        })
      }, e.Headers = o, e.Request = d, e.Response = g, e.fetch = function(e, t) {
        return new Promise(function(n, i) {
          var o = new d(e, t), s = new XMLHttpRequest; s.onload = function() {
            var e = {
              status: s.status, statusText: s.statusText, headers: _(s.getAllResponseHeaders() || "")
            }; e.url = "responseURL" in s ? s.responseURL : e.headers.get("X-Request-URL"); var t = "response" in s ? s.response : s.responseText; n(new g(t, e))
          }, s.onerror = function() {
            i(new TypeError("Network request failed"))
          }, s.ontimeout = function() {
            i(new TypeError("Network request failed"))
          }, s.open(o.method, o.url, !0), "include" === o.credentials ? s.withCredentials = !0 : "omit" === o.credentials && (s.withCredentials = !1), "responseType" in s && y.blob && (s.responseType = "blob"), o.headers.forEach(function(e, t) {
            s.setRequestHeader(t, e)
          }), s.send(void 0 === o._bodyInit ? null : o._bodyInit)
        })
      }, e.fetch.polyfill = !0
    }
  }("undefined" != typeof self ? self : void 0)
}, function(e, t, n) {
  "use strict"; n.d(t, "a", function() {
    return r
  }); var i = n(50), o = n(0), s = (n.n(o), ["click", "mousemove"]), r = function() {
    function e(e, t, n, i, s, r) {
      var a = this; this.onDOMContentLoaded = function() {
        a.window.addEventListener("message", a.onControllerMessage, !1), a.window.addEventListener("message", a.onActionsMessage, !1), a.window.addEventListener("message", a.onBitsMessage, !1), a.parentWindow.postMessage({
          action: o.ExtensionAction.TwitchExtLoaded
        }, "*"), a.forceVideoOverlayFullSize()
      }, this.bindLongtaskHandler = function() {
        window.PerformanceObserver && window.PerformanceLongTaskTiming && (a.performanceObserver = new window.PerformanceObserver(function(e) {
          e.getEntries().forEach(a.trackLongtask)
        }), a.performanceObserver.observe({
          entryTypes: ["longtask"]
        }))
      }, this.unbindLongtaskHandler = function() {
        a.performanceObserver && (a.performanceObserver.disconnect(), a.performanceObserver = void 0)
      }, this.trackLongtask = function(e) {
        a.shouldTrackLongtask(e) && a.parentWindow.postMessage({
          action: o.ExtensionAction.TwitchExtLongtask, payload: {
            longtask_duration: e.duration
          }
        }, "*")
      }, this.onMouseAction = function(e) {
        a.parentWindow.postMessage({
          action: o.ExtensionAction.TwitchExtUserAction, payload: {
            type: e.type, clientX: e.clientX, clientY: e.clientY
          }
        }, "*"), a.forceVideoOverlayFullSize()
      }, this.onFocus = function(e) {
        switch (e.target.tagName.toLowerCase()) {
          case "input": case "select": case "textarea": case "button": return; default: a.parentWindow.postMessage({
            action: o.ExtensionAction.TwitchExtUserAction, payload: {
              type: e.type
            }
          }, "*")
        }
      }, this.window = s || window, this.parentWindow = this.window.parent, this.documentObject = r || document, this.params = e, this.onControllerMessage = t, this.onActionsMessage = n, this.onBitsMessage = i, this.isViewerVideoOverlay = "video_overlay" === this.params.anchor && this.params.mode === o.ExtensionMode.Viewer
    } return e.prototype.forceVideoOverlayFullSize = function() {
      this.isViewerVideoOverlay && Object(i.a)(this.documentObject)
    }, e.prototype.bindEvents = function() {
      var e = this; this.documentObject.addEventListener("DOMContentLoaded", this.onDOMContentLoaded), s.forEach(function(t) {
        e.documentObject.addEventListener(t, e.onMouseAction, !0)
      }), this.documentObject.addEventListener("focusin", this.onFocus, !0), this.bindLongtaskHandler()
    }, e.prototype.unbindEvents = function() {
      var e = this; this.documentObject.removeEventListener("DOMContentLoaded", this.onDOMContentLoaded), s.forEach(function(t) {
        e.documentObject.removeEventListener(t, e.onMouseAction, !0)
      }), this.documentObject.removeEventListener("focusin", this.onFocus, !0), this.unbindLongtaskHandler()
    }, e.prototype.shouldTrackLongtask = function(e) {
      var t = .1 > Math.random(), n = "self" === e.name; return t && n
    }, e
  }()
}]);
