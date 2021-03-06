define([], () => {
const define = void 0;
const require = () => void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;

var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};

var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }

  return to;
};

var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod); // .beyond/uimport/temp/immer/9.0.15.js


var __exports = {};

__export(__exports, {
  Immer: () => un,
  applyPatches: () => pn,
  castDraft: () => K,
  castImmutable: () => $,
  createDraft: () => ln,
  current: () => D,
  default: () => __default,
  enableAllPlugins: () => J,
  enableES5: () => N,
  enableMapSet: () => C,
  enablePatches: () => T,
  finishDraft: () => dn,
  freeze: () => d,
  immerable: () => L,
  isDraft: () => r,
  isDraftable: () => t,
  nothing: () => H,
  original: () => e,
  produce: () => fn,
  produceWithPatches: () => cn,
  setAutoFreeze: () => sn,
  setUseProxies: () => vn
});

module.exports = __toCommonJS(__exports); // node_modules/immer/dist/immer.esm.mjs

function n(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++) t2[e2 - 1] = arguments[e2];

  if (true) {
    var i2 = Y[n2],
        o2 = i2 ? typeof i2 == "function" ? i2.apply(null, t2) : i2 : "unknown error nr: " + n2;
    throw Error("[Immer] " + o2);
  }

  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function (n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}

function r(n2) {
  return !!n2 && !!n2[Q];
}

function t(n2) {
  return !!n2 && (function (n3) {
    if (!n3 || typeof n3 != "object") return false;
    var r2 = Object.getPrototypeOf(n3);
    if (r2 === null) return true;
    var t2 = Object.hasOwnProperty.call(r2, "constructor") && r2.constructor;
    return t2 === Object || typeof t2 == "function" && Function.toString.call(t2) === Z;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!n2.constructor[L] || s(n2) || v(n2));
}

function e(t2) {
  return r(t2) || n(23, t2), t2[Q].t;
}

function i(n2, r2, t2) {
  t2 === void 0 && (t2 = false), o(n2) === 0 ? (t2 ? Object.keys : nn)(n2).forEach(function (e2) {
    t2 && typeof e2 == "symbol" || r2(e2, n2[e2], n2);
  }) : n2.forEach(function (t3, e2) {
    return r2(e2, t3, n2);
  });
}

function o(n2) {
  var r2 = n2[Q];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
}

function u(n2, r2) {
  return o(n2) === 2 ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}

function a(n2, r2) {
  return o(n2) === 2 ? n2.get(r2) : n2[r2];
}

function f(n2, r2, t2) {
  var e2 = o(n2);
  e2 === 2 ? n2.set(r2, t2) : e2 === 3 ? (n2.delete(r2), n2.add(t2)) : n2[r2] = t2;
}

function c(n2, r2) {
  return n2 === r2 ? n2 !== 0 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}

function s(n2) {
  return X && n2 instanceof Map;
}

function v(n2) {
  return q && n2 instanceof Set;
}

function p(n2) {
  return n2.o || n2.t;
}

function l(n2) {
  if (Array.isArray(n2)) return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q];

  for (var t2 = nn(r2), e2 = 0; e2 < t2.length; e2++) {
    var i2 = t2[e2],
        o2 = r2[i2];
    o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = {
      configurable: true,
      writable: true,
      enumerable: o2.enumerable,
      value: n2[i2]
    });
  }

  return Object.create(Object.getPrototypeOf(n2), r2);
}

function d(n2, e2) {
  return e2 === void 0 && (e2 = false), y(n2) || r(n2) || !t(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e2 && i(n2, function (n3, r2) {
    return d(r2, true);
  }, true), n2);
}

function h() {
  n(2);
}

function y(n2) {
  return n2 == null || typeof n2 != "object" || Object.isFrozen(n2);
}

function b(r2) {
  var t2 = tn[r2];
  return t2 || n(18, r2), t2;
}

function m(n2, r2) {
  tn[n2] || (tn[n2] = r2);
}

function _() {
  return U || n(0), U;
}

function j(n2, r2) {
  r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}

function O(n2) {
  g(n2), n2.p.forEach(S), n2.p = null;
}

function g(n2) {
  n2 === U && (U = n2.l);
}

function w(n2) {
  return U = {
    p: [],
    l: U,
    h: n2,
    m: true,
    _: 0
  };
}

function S(n2) {
  var r2 = n2[Q];
  r2.i === 0 || r2.i === 1 ? r2.j() : r2.O = true;
}

function P(r2, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0],
      o2 = r2 !== void 0 && r2 !== i2;
  return e2.h.g || b("ES5").S(e2, r2, o2), o2 ? (i2[Q].P && (O(e2), n(4)), t(r2) && (r2 = M(e2, r2), e2.l || x(e2, r2)), e2.u && b("Patches").M(i2[Q].t, r2, e2.u, e2.s)) : r2 = M(e2, i2, []), O(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H ? r2 : void 0;
}

function M(n2, r2, t2) {
  if (y(r2)) return r2;
  var e2 = r2[Q];
  if (!e2) return i(r2, function (i2, o3) {
    return A(n2, e2, r2, i2, o3, t2);
  }, true), r2;
  if (e2.A !== n2) return r2;
  if (!e2.P) return x(n2, e2.t, true), e2.t;

  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = e2.i === 4 || e2.i === 5 ? e2.o = l(e2.k) : e2.o;
    i(e2.i === 3 ? new Set(o2) : o2, function (r3, i2) {
      return A(n2, e2, o2, r3, i2, t2);
    }), x(n2, o2, false), t2 && n2.u && b("Patches").R(e2, t2, n2.u, n2.s);
  }

  return e2.o;
}

function A(e2, i2, o2, a2, c2, s2) {
  if (c2 === o2 && n(5), r(c2)) {
    var v2 = M(e2, c2, s2 && i2 && i2.i !== 3 && !u(i2.D, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, v2), !r(v2)) return;
    e2.m = false;
  }

  if (t(c2) && !y(c2)) {
    if (!e2.h.F && e2._ < 1) return;
    M(e2, c2), i2 && i2.A.l || x(e2, c2);
  }
}

function x(n2, r2, t2) {
  t2 === void 0 && (t2 = false), n2.h.F && n2.m && d(r2, t2);
}

function z(n2, r2) {
  var t2 = n2[Q];
  return (t2 ? p(t2) : n2)[r2];
}

function I(n2, r2) {
  if (r2 in n2) for (var t2 = Object.getPrototypeOf(n2); t2;) {
    var e2 = Object.getOwnPropertyDescriptor(t2, r2);
    if (e2) return e2;
    t2 = Object.getPrototypeOf(t2);
  }
}

function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}

function E(n2) {
  n2.o || (n2.o = l(n2.t));
}

function R(n2, r2, t2) {
  var e2 = s(r2) ? b("MapSet").N(r2, t2) : v(r2) ? b("MapSet").T(r2, t2) : n2.g ? function (n3, r3) {
    var t3 = Array.isArray(n3),
        e3 = {
      i: t3 ? 1 : 0,
      A: r3 ? r3.A : _(),
      P: false,
      I: false,
      D: {},
      l: r3,
      t: n3,
      k: null,
      o: null,
      j: null,
      C: false
    },
        i2 = e3,
        o2 = en;
    t3 && (i2 = [e3], o2 = on);
    var u2 = Proxy.revocable(i2, o2),
        a2 = u2.revoke,
        f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(r2, t2) : b("ES5").J(r2, t2);
  return (t2 ? t2.A : _()).p.push(e2), e2;
}

function D(e2) {
  return r(e2) || n(22, e2), function n2(r2) {
    if (!t(r2)) return r2;
    var e3,
        u2 = r2[Q],
        c2 = o(r2);

    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2))) return u2.t;
      u2.I = true, e3 = F(r2, c2), u2.I = false;
    } else e3 = F(r2, c2);

    return i(e3, function (r3, t2) {
      u2 && a(u2.t, r3) === t2 || f(e3, r3, n2(t2));
    }), c2 === 3 ? new Set(e3) : e3;
  }(e2);
}

function F(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);

    case 3:
      return Array.from(n2);
  }

  return l(n2);
}

function N() {
  function t2(n2, r2) {
    var t3 = s2[n2];
    return t3 ? t3.enumerable = r2 : s2[n2] = t3 = {
      configurable: true,
      enumerable: r2,
      get: function () {
        var r3 = this[Q];
        return f2(r3), en.get(r3, n2);
      },
      set: function (r3) {
        var t4 = this[Q];
        f2(t4), en.set(t4, n2, r3);
      }
    }, t3;
  }

  function e2(n2) {
    for (var r2 = n2.length - 1; r2 >= 0; r2--) {
      var t3 = n2[r2][Q];
      if (!t3.P) switch (t3.i) {
        case 5:
          a2(t3) && k(t3);
          break;

        case 4:
          o2(t3) && k(t3);
      }
    }
  }

  function o2(n2) {
    for (var r2 = n2.t, t3 = n2.k, e3 = nn(t3), i2 = e3.length - 1; i2 >= 0; i2--) {
      var o3 = e3[i2];

      if (o3 !== Q) {
        var a3 = r2[o3];
        if (a3 === void 0 && !u(r2, o3)) return true;
        var f3 = t3[o3],
            s3 = f3 && f3[Q];
        if (s3 ? s3.t !== a3 : !c(f3, a3)) return true;
      }
    }

    var v2 = !!r2[Q];
    return e3.length !== nn(r2).length + (v2 ? 0 : 1);
  }

  function a2(n2) {
    var r2 = n2.k;
    if (r2.length !== n2.t.length) return true;
    var t3 = Object.getOwnPropertyDescriptor(r2, r2.length - 1);
    if (t3 && !t3.get) return true;

    for (var e3 = 0; e3 < r2.length; e3++) if (!r2.hasOwnProperty(e3)) return true;

    return false;
  }

  function f2(r2) {
    r2.O && n(3, JSON.stringify(p(r2)));
  }

  var s2 = {};
  m("ES5", {
    J: function (n2, r2) {
      var e3 = Array.isArray(n2),
          i2 = function (n3, r3) {
        if (n3) {
          for (var e4 = Array(r3.length), i3 = 0; i3 < r3.length; i3++) Object.defineProperty(e4, "" + i3, t2(i3, true));

          return e4;
        }

        var o4 = rn(r3);
        delete o4[Q];

        for (var u2 = nn(o4), a3 = 0; a3 < u2.length; a3++) {
          var f3 = u2[a3];
          o4[f3] = t2(f3, n3 || !!o4[f3].enumerable);
        }

        return Object.create(Object.getPrototypeOf(r3), o4);
      }(e3, n2),
          o3 = {
        i: e3 ? 5 : 4,
        A: r2 ? r2.A : _(),
        P: false,
        I: false,
        D: {},
        l: r2,
        t: n2,
        k: i2,
        o: null,
        O: false,
        C: false
      };

      return Object.defineProperty(i2, Q, {
        value: o3,
        writable: true
      }), i2;
    },
    S: function (n2, t3, o3) {
      o3 ? r(t3) && t3[Q].A === n2 && e2(n2.p) : (n2.u && function n3(r2) {
        if (r2 && typeof r2 == "object") {
          var t4 = r2[Q];

          if (t4) {
            var e3 = t4.t,
                o4 = t4.k,
                f3 = t4.D,
                c2 = t4.i;
            if (c2 === 4) i(o4, function (r3) {
              r3 !== Q && (e3[r3] !== void 0 || u(e3, r3) ? f3[r3] || n3(o4[r3]) : (f3[r3] = true, k(t4)));
            }), i(e3, function (n4) {
              o4[n4] !== void 0 || u(o4, n4) || (f3[n4] = false, k(t4));
            });else if (c2 === 5) {
              if (a2(t4) && (k(t4), f3.length = true), o4.length < e3.length) for (var s3 = o4.length; s3 < e3.length; s3++) f3[s3] = false;else for (var v2 = e3.length; v2 < o4.length; v2++) f3[v2] = true;

              for (var p2 = Math.min(o4.length, e3.length), l2 = 0; l2 < p2; l2++) o4.hasOwnProperty(l2) || (f3[l2] = true), f3[l2] === void 0 && n3(o4[l2]);
            }
          }
        }
      }(n2.p[0]), e2(n2.p));
    },
    K: function (n2) {
      return n2.i === 4 ? o2(n2) : a2(n2);
    }
  });
}

function T() {
  function e2(n2) {
    if (!t(n2)) return n2;
    if (Array.isArray(n2)) return n2.map(e2);
    if (s(n2)) return new Map(Array.from(n2.entries()).map(function (n3) {
      return [n3[0], e2(n3[1])];
    }));
    if (v(n2)) return new Set(Array.from(n2).map(e2));
    var r2 = Object.create(Object.getPrototypeOf(n2));

    for (var i2 in n2) r2[i2] = e2(n2[i2]);

    return u(n2, L) && (r2[L] = n2[L]), r2;
  }

  function f2(n2) {
    return r(n2) ? e2(n2) : n2;
  }

  var c2 = "add";
  m("Patches", {
    $: function (r2, t2) {
      return t2.forEach(function (t3) {
        for (var i2 = t3.path, u2 = t3.op, f3 = r2, s2 = 0; s2 < i2.length - 1; s2++) {
          var v2 = o(f3),
              p2 = "" + i2[s2];
          v2 !== 0 && v2 !== 1 || p2 !== "__proto__" && p2 !== "constructor" || n(24), typeof f3 == "function" && p2 === "prototype" && n(24), typeof (f3 = a(f3, p2)) != "object" && n(15, i2.join("/"));
        }

        var l2 = o(f3),
            d2 = e2(t3.value),
            h2 = i2[i2.length - 1];

        switch (u2) {
          case "replace":
            switch (l2) {
              case 2:
                return f3.set(h2, d2);

              case 3:
                n(16);

              default:
                return f3[h2] = d2;
            }

          case c2:
            switch (l2) {
              case 1:
                return h2 === "-" ? f3.push(d2) : f3.splice(h2, 0, d2);

              case 2:
                return f3.set(h2, d2);

              case 3:
                return f3.add(d2);

              default:
                return f3[h2] = d2;
            }

          case "remove":
            switch (l2) {
              case 1:
                return f3.splice(h2, 1);

              case 2:
                return f3.delete(h2);

              case 3:
                return f3.delete(t3.value);

              default:
                return delete f3[h2];
            }

          default:
            n(17, u2);
        }
      }), r2;
    },
    R: function (n2, r2, t2, e3) {
      switch (n2.i) {
        case 0:
        case 4:
        case 2:
          return function (n3, r3, t3, e4) {
            var o2 = n3.t,
                s2 = n3.o;
            i(n3.D, function (n4, i2) {
              var v2 = a(o2, n4),
                  p2 = a(s2, n4),
                  l2 = i2 ? u(o2, n4) ? "replace" : c2 : "remove";

              if (v2 !== p2 || l2 !== "replace") {
                var d2 = r3.concat(n4);
                t3.push(l2 === "remove" ? {
                  op: l2,
                  path: d2
                } : {
                  op: l2,
                  path: d2,
                  value: p2
                }), e4.push(l2 === c2 ? {
                  op: "remove",
                  path: d2
                } : l2 === "remove" ? {
                  op: c2,
                  path: d2,
                  value: f2(v2)
                } : {
                  op: "replace",
                  path: d2,
                  value: f2(v2)
                });
              }
            });
          }(n2, r2, t2, e3);

        case 5:
        case 1:
          return function (n3, r3, t3, e4) {
            var i2 = n3.t,
                o2 = n3.D,
                u2 = n3.o;

            if (u2.length < i2.length) {
              var a2 = [u2, i2];
              i2 = a2[0], u2 = a2[1];
              var s2 = [e4, t3];
              t3 = s2[0], e4 = s2[1];
            }

            for (var v2 = 0; v2 < i2.length; v2++) if (o2[v2] && u2[v2] !== i2[v2]) {
              var p2 = r3.concat([v2]);
              t3.push({
                op: "replace",
                path: p2,
                value: f2(u2[v2])
              }), e4.push({
                op: "replace",
                path: p2,
                value: f2(i2[v2])
              });
            }

            for (var l2 = i2.length; l2 < u2.length; l2++) {
              var d2 = r3.concat([l2]);
              t3.push({
                op: c2,
                path: d2,
                value: f2(u2[l2])
              });
            }

            i2.length < u2.length && e4.push({
              op: "replace",
              path: r3.concat(["length"]),
              value: i2.length
            });
          }(n2, r2, t2, e3);

        case 3:
          return function (n3, r3, t3, e4) {
            var i2 = n3.t,
                o2 = n3.o,
                u2 = 0;
            i2.forEach(function (n4) {
              if (!o2.has(n4)) {
                var i3 = r3.concat([u2]);
                t3.push({
                  op: "remove",
                  path: i3,
                  value: n4
                }), e4.unshift({
                  op: c2,
                  path: i3,
                  value: n4
                });
              }

              u2++;
            }), u2 = 0, o2.forEach(function (n4) {
              if (!i2.has(n4)) {
                var o3 = r3.concat([u2]);
                t3.push({
                  op: c2,
                  path: o3,
                  value: n4
                }), e4.unshift({
                  op: "remove",
                  path: o3,
                  value: n4
                });
              }

              u2++;
            });
          }(n2, r2, t2, e3);
      }
    },
    M: function (n2, r2, t2, e3) {
      t2.push({
        op: "replace",
        path: [],
        value: r2 === H ? void 0 : r2
      }), e3.push({
        op: "replace",
        path: [],
        value: n2
      });
    }
  });
}

function C() {
  function r2(n2, r3) {
    function t2() {
      this.constructor = n2;
    }

    a2(n2, r3), n2.prototype = (t2.prototype = r3.prototype, new t2());
  }

  function e2(n2) {
    n2.o || (n2.D = /* @__PURE__ */new Map(), n2.o = new Map(n2.t));
  }

  function o2(n2) {
    n2.o || (n2.o = /* @__PURE__ */new Set(), n2.t.forEach(function (r3) {
      if (t(r3)) {
        var e3 = R(n2.A.h, r3, n2);
        n2.p.set(r3, e3), n2.o.add(e3);
      } else n2.o.add(r3);
    }));
  }

  function u2(r3) {
    r3.O && n(3, JSON.stringify(p(r3)));
  }

  var a2 = function (n2, r3) {
    return (a2 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (n3, r4) {
      n3.__proto__ = r4;
    } || function (n3, r4) {
      for (var t2 in r4) r4.hasOwnProperty(t2) && (n3[t2] = r4[t2]);
    })(n2, r3);
  },
      f2 = function () {
    function n2(n3, r3) {
      return this[Q] = {
        i: 2,
        l: r3,
        A: r3 ? r3.A : _(),
        P: false,
        I: false,
        o: void 0,
        D: void 0,
        t: n3,
        k: this,
        C: false,
        O: false
      }, this;
    }

    r2(n2, Map);
    var o3 = n2.prototype;
    return Object.defineProperty(o3, "size", {
      get: function () {
        return p(this[Q]).size;
      }
    }), o3.has = function (n3) {
      return p(this[Q]).has(n3);
    }, o3.set = function (n3, r3) {
      var t2 = this[Q];
      return u2(t2), p(t2).has(n3) && p(t2).get(n3) === r3 || (e2(t2), k(t2), t2.D.set(n3, true), t2.o.set(n3, r3), t2.D.set(n3, true)), this;
    }, o3.delete = function (n3) {
      if (!this.has(n3)) return false;
      var r3 = this[Q];
      return u2(r3), e2(r3), k(r3), r3.t.has(n3) ? r3.D.set(n3, false) : r3.D.delete(n3), r3.o.delete(n3), true;
    }, o3.clear = function () {
      var n3 = this[Q];
      u2(n3), p(n3).size && (e2(n3), k(n3), n3.D = /* @__PURE__ */new Map(), i(n3.t, function (r3) {
        n3.D.set(r3, false);
      }), n3.o.clear());
    }, o3.forEach = function (n3, r3) {
      var t2 = this;
      p(this[Q]).forEach(function (e3, i2) {
        n3.call(r3, t2.get(i2), i2, t2);
      });
    }, o3.get = function (n3) {
      var r3 = this[Q];
      u2(r3);
      var i2 = p(r3).get(n3);
      if (r3.I || !t(i2)) return i2;
      if (i2 !== r3.t.get(n3)) return i2;
      var o4 = R(r3.A.h, i2, r3);
      return e2(r3), r3.o.set(n3, o4), o4;
    }, o3.keys = function () {
      return p(this[Q]).keys();
    }, o3.values = function () {
      var n3,
          r3 = this,
          t2 = this.keys();
      return (n3 = {})[V] = function () {
        return r3.values();
      }, n3.next = function () {
        var n4 = t2.next();
        return n4.done ? n4 : {
          done: false,
          value: r3.get(n4.value)
        };
      }, n3;
    }, o3.entries = function () {
      var n3,
          r3 = this,
          t2 = this.keys();
      return (n3 = {})[V] = function () {
        return r3.entries();
      }, n3.next = function () {
        var n4 = t2.next();
        if (n4.done) return n4;
        var e3 = r3.get(n4.value);
        return {
          done: false,
          value: [n4.value, e3]
        };
      }, n3;
    }, o3[V] = function () {
      return this.entries();
    }, n2;
  }(),
      c2 = function () {
    function n2(n3, r3) {
      return this[Q] = {
        i: 3,
        l: r3,
        A: r3 ? r3.A : _(),
        P: false,
        I: false,
        o: void 0,
        t: n3,
        k: this,
        p: /* @__PURE__ */new Map(),
        O: false,
        C: false
      }, this;
    }

    r2(n2, Set);
    var t2 = n2.prototype;
    return Object.defineProperty(t2, "size", {
      get: function () {
        return p(this[Q]).size;
      }
    }), t2.has = function (n3) {
      var r3 = this[Q];
      return u2(r3), r3.o ? !!r3.o.has(n3) || !(!r3.p.has(n3) || !r3.o.has(r3.p.get(n3))) : r3.t.has(n3);
    }, t2.add = function (n3) {
      var r3 = this[Q];
      return u2(r3), this.has(n3) || (o2(r3), k(r3), r3.o.add(n3)), this;
    }, t2.delete = function (n3) {
      if (!this.has(n3)) return false;
      var r3 = this[Q];
      return u2(r3), o2(r3), k(r3), r3.o.delete(n3) || !!r3.p.has(n3) && r3.o.delete(r3.p.get(n3));
    }, t2.clear = function () {
      var n3 = this[Q];
      u2(n3), p(n3).size && (o2(n3), k(n3), n3.o.clear());
    }, t2.values = function () {
      var n3 = this[Q];
      return u2(n3), o2(n3), n3.o.values();
    }, t2.entries = function () {
      var n3 = this[Q];
      return u2(n3), o2(n3), n3.o.entries();
    }, t2.keys = function () {
      return this.values();
    }, t2[V] = function () {
      return this.values();
    }, t2.forEach = function (n3, r3) {
      for (var t3 = this.values(), e3 = t3.next(); !e3.done;) n3.call(r3, e3.value, e3.value, this), e3 = t3.next();
    }, n2;
  }();

  m("MapSet", {
    N: function (n2, r3) {
      return new f2(n2, r3);
    },
    T: function (n2, r3) {
      return new c2(n2, r3);
    }
  });
}

function J() {
  N(), C(), T();
}

function K(n2) {
  return n2;
}

function $(n2) {
  return n2;
}

var G,
    U,
    W = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol",
    X = typeof Map != "undefined",
    q = typeof Set != "undefined",
    B = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined",
    H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G),
    L = W ? Symbol.for("immer-draftable") : "__$immer_draftable",
    Q = W ? Symbol.for("immer-state") : "__$immer_state",
    V = typeof Symbol != "undefined" && Symbol.iterator || "@@iterator",
    Y = {
  0: "Illegal state",
  1: "Immer drafts cannot have computed properties",
  2: "This object has been frozen and should not be mutated",
  3: function (n2) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n2;
  },
  4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  5: "Immer forbids circular references",
  6: "The first or second argument to `produce` must be a function",
  7: "The third argument to `produce` must be a function or undefined",
  8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
  10: "The given draft is already finalized",
  11: "Object.defineProperty() cannot be used on an Immer draft",
  12: "Object.setPrototypeOf() cannot be used on an Immer draft",
  13: "Immer only supports deleting array indices",
  14: "Immer only supports setting array indices and the 'length' property",
  15: function (n2) {
    return "Cannot apply patch, path doesn't resolve: " + n2;
  },
  16: 'Sets cannot have "replace" patches.',
  17: function (n2) {
    return "Unsupported patch operation: " + n2;
  },
  18: function (n2) {
    return "The plugin for '" + n2 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n2 + "()` when initializing your application.";
  },
  20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
  21: function (n2) {
    return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n2 + "'";
  },
  22: function (n2) {
    return "'current' expects a draft, got: " + n2;
  },
  23: function (n2) {
    return "'original' expects a draft, got: " + n2;
  },
  24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
},
    Z = "" + Object.prototype.constructor,
    nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function (n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames,
    rn = Object.getOwnPropertyDescriptors || function (n2) {
  var r2 = {};
  return nn(n2).forEach(function (t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
},
    tn = {},
    en = {
  get: function (n2, r2) {
    if (r2 === Q) return n2;
    var e2 = p(n2);
    if (!u(e2, r2)) return function (n3, r3, t2) {
      var e3,
          i3 = I(r3, t2);
      return i3 ? "value" in i3 ? i3.value : (e3 = i3.get) === null || e3 === void 0 ? void 0 : e3.call(n3.k) : void 0;
    }(n2, e2, r2);
    var i2 = e2[r2];
    return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r2) ? (E(n2), n2.o[r2] = R(n2.A.h, i2, n2)) : i2;
  },
  has: function (n2, r2) {
    return r2 in p(n2);
  },
  ownKeys: function (n2) {
    return Reflect.ownKeys(p(n2));
  },
  set: function (n2, r2, t2) {
    var e2 = I(p(n2), r2);
    if (e2 == null ? void 0 : e2.set) return e2.set.call(n2.k, t2), true;

    if (!n2.P) {
      var i2 = z(p(n2), r2),
          o2 = i2 == null ? void 0 : i2[Q];
      if (o2 && o2.t === t2) return n2.o[r2] = t2, n2.D[r2] = false, true;
      if (c(t2, i2) && (t2 !== void 0 || u(n2.t, r2))) return true;
      E(n2), k(n2);
    }

    return n2.o[r2] === t2 && typeof t2 != "number" && (t2 !== void 0 || r2 in n2.o) || (n2.o[r2] = t2, n2.D[r2] = true, true);
  },
  deleteProperty: function (n2, r2) {
    return z(n2.t, r2) !== void 0 || r2 in n2.t ? (n2.D[r2] = false, E(n2), k(n2)) : delete n2.D[r2], n2.o && delete n2.o[r2], true;
  },
  getOwnPropertyDescriptor: function (n2, r2) {
    var t2 = p(n2),
        e2 = Reflect.getOwnPropertyDescriptor(t2, r2);
    return e2 ? {
      writable: true,
      configurable: n2.i !== 1 || r2 !== "length",
      enumerable: e2.enumerable,
      value: t2[r2]
    } : e2;
  },
  defineProperty: function () {
    n(11);
  },
  getPrototypeOf: function (n2) {
    return Object.getPrototypeOf(n2.t);
  },
  setPrototypeOf: function () {
    n(12);
  }
},
    on = {};

i(en, function (n2, r2) {
  on[n2] = function () {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function (r2, t2) {
  return isNaN(parseInt(t2)) && n(13), on.set.call(this, r2, t2, void 0);
}, on.set = function (r2, t2, e2) {
  return t2 !== "length" && isNaN(parseInt(t2)) && n(14), en.set.call(this, r2[0], t2, e2, r2[0]);
};

var un = function () {
  function e2(r2) {
    var e3 = this;
    this.g = B, this.F = true, this.produce = function (r3, i3, o2) {
      if (typeof r3 == "function" && typeof i3 != "function") {
        var u2 = i3;
        i3 = r3;
        var a2 = e3;
        return function (n2) {
          var r4 = this;
          n2 === void 0 && (n2 = u2);

          for (var t2 = arguments.length, e4 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++) e4[o3 - 1] = arguments[o3];

          return a2.produce(n2, function (n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e4));
          });
        };
      }

      var f2;

      if (typeof i3 != "function" && n(6), o2 !== void 0 && typeof o2 != "function" && n(7), t(r3)) {
        var c2 = w(e3),
            s2 = R(e3, r3, void 0),
            v2 = true;

        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? O(c2) : g(c2);
        }

        return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function (n2) {
          return j(c2, o2), P(n2, c2);
        }, function (n2) {
          throw O(c2), n2;
        }) : (j(c2, o2), P(f2, c2));
      }

      if (!r3 || typeof r3 != "object") {
        if ((f2 = i3(r3)) === void 0 && (f2 = r3), f2 === H && (f2 = void 0), e3.F && d(f2, true), o2) {
          var p2 = [],
              l2 = [];
          b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }

        return f2;
      }

      n(21, r3);
    }, this.produceWithPatches = function (n2, r3) {
      if (typeof n2 == "function") return function (r4) {
        for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++) i4[o3 - 1] = arguments[o3];

        return e3.produceWithPatches(r4, function (r5) {
          return n2.apply(void 0, [r5].concat(i4));
        });
      };
      var t2,
          i3,
          o2 = e3.produce(n2, r3, function (n3, r4) {
        t2 = n3, i3 = r4;
      });
      return typeof Promise != "undefined" && o2 instanceof Promise ? o2.then(function (n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, typeof (r2 == null ? void 0 : r2.useProxies) == "boolean" && this.setUseProxies(r2.useProxies), typeof (r2 == null ? void 0 : r2.autoFreeze) == "boolean" && this.setAutoFreeze(r2.autoFreeze);
  }

  var i2 = e2.prototype;
  return i2.createDraft = function (e3) {
    t(e3) || n(8), r(e3) && (e3 = D(e3));
    var i3 = w(this),
        o2 = R(this, e3, void 0);
    return o2[Q].C = true, g(i3), o2;
  }, i2.finishDraft = function (r2, t2) {
    var e3 = r2 && r2[Q];
    e3 && e3.C || n(9), e3.I && n(10);
    var i3 = e3.A;
    return j(i3, t2), P(void 0, i3);
  }, i2.setAutoFreeze = function (n2) {
    this.F = n2;
  }, i2.setUseProxies = function (r2) {
    r2 && !B && n(20), this.g = r2;
  }, i2.applyPatches = function (n2, t2) {
    var e3;

    for (e3 = t2.length - 1; e3 >= 0; e3--) {
      var i3 = t2[e3];

      if (i3.path.length === 0 && i3.op === "replace") {
        n2 = i3.value;
        break;
      }
    }

    e3 > -1 && (t2 = t2.slice(e3 + 1));
    var o2 = b("Patches").$;
    return r(n2) ? o2(n2, t2) : this.produce(n2, function (n3) {
      return o2(n3, t2);
    });
  }, e2;
}(),
    an = new un(),
    fn = an.produce,
    cn = an.produceWithPatches.bind(an),
    sn = an.setAutoFreeze.bind(an),
    vn = an.setUseProxies.bind(an),
    pn = an.applyPatches.bind(an),
    ln = an.createDraft.bind(an),
    dn = an.finishDraft.bind(an);

var immer_esm_default = fn; // .beyond/uimport/temp/immer/9.0.15.js

var __default = immer_esm_default;
};

code(module, require);
return module.exports;
});

