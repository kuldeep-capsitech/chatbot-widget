typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
let Ze = !1, Wn = !1;
function Hn() {
  Ze = !0;
}
Hn();
const Un = 4, Yn = 1, Vn = 2, Qt = "[", Xt = "[!", Zt = "]", ye = {}, j = Symbol(), en = !1;
var tn = Array.isArray, Gn = Array.prototype.indexOf, Kn = Array.from, Ye = Object.keys, ue = Object.defineProperty, xe = Object.getOwnPropertyDescriptor, Jn = Object.getOwnPropertyDescriptors, Qn = Object.prototype, Xn = Array.prototype, nn = Object.getPrototypeOf, It = Object.isExtensible;
function Zn(e) {
  return typeof e == "function";
}
const I = () => {
};
function er(e) {
  return e();
}
function Ve(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function tr() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
const N = 2, kt = 4, et = 8, ke = 16, G = 32, ne = 64, rn = 128, q = 256, Ge = 512, k = 1024, D = 2048, re = 4096, Z = 8192, Ae = 16384, tt = 32768, nt = 65536, Mt = 1 << 17, nr = 1 << 18, At = 1 << 19, Tt = 1 << 20, vt = 1 << 21, St = 1 << 22, le = 1 << 23, Fe = Symbol("$state"), rr = Symbol("legacy props"), Ot = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ir = 3, Ke = 8;
function sr() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function or() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function lr(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ar() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function fr(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ur() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function cr() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function dr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function hr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function vr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function rt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let T = !1;
function be(e) {
  T = e;
}
let x;
function ce(e) {
  if (e === null)
    throw rt(), ye;
  return x = e;
}
function Ct() {
  return ce(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ie(x)
  );
}
function K(e) {
  if (T) {
    if (/* @__PURE__ */ ie(x) !== null)
      throw rt(), ye;
    x = e;
  }
}
function pr(e = 1) {
  if (T) {
    for (var t = e, n = x; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ ie(n);
    x = n;
  }
}
function _r() {
  for (var e = 0, t = x; ; ) {
    if (t.nodeType === Ke) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Zt) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Qt || n === Xt) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ie(t)
    );
    t.remove(), t = r;
  }
}
function wr(e) {
  if (!e || e.nodeType !== Ke)
    throw rt(), ye;
  return (
    /** @type {Comment} */
    e.data
  );
}
function sn(e) {
  return e === this.v;
}
function on(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ln(e) {
  return !on(e, this.v);
}
let E = null;
function Je(e) {
  E = e;
}
function an(e, t = !1, n) {
  E = {
    p: E,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Ze && !t ? { s: null, u: null, $: [] } : null
  };
}
function fn(e) {
  var t = (
    /** @type {ComponentContext} */
    E
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      $n(r);
  }
  return E = t.p, /** @type {T} */
  {};
}
function De() {
  return !Ze || E !== null && E.l === null;
}
const gr = /* @__PURE__ */ new WeakMap();
function mr(e) {
  var t = _;
  if (t === null)
    return g.f |= le, e;
  if ((t.f & tt) === 0) {
    if ((t.f & rn) === 0)
      throw !t.parent && e instanceof Error && un(e), e;
    t.b.error(e);
  } else
    Ft(e, t);
}
function Ft(e, t) {
  for (; t !== null; ) {
    if ((t.f & rn) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && un(e), e;
}
function un(e) {
  const t = gr.get(e);
  t && (ue(e, "message", {
    value: t.message
  }), ue(e, "stack", {
    value: t.stack
  }));
}
let Re = [], pt = [];
function cn() {
  var e = Re;
  Re = [], Ve(e);
}
function br() {
  var e = pt;
  pt = [], Ve(e);
}
function yr(e) {
  Re.length === 0 && queueMicrotask(cn), Re.push(e);
}
function xr() {
  Re.length > 0 && cn(), pt.length > 0 && br();
}
function $r() {
  for (var e = (
    /** @type {Effect} */
    _.b
  ); e !== null && !e.has_pending_snippet(); )
    e = e.parent;
  return e === null && sr(), e;
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
  var t = N | D, n = g !== null && (g.f & N) !== 0 ? (
    /** @type {Derived} */
    g
  ) : null;
  return _ === null || n !== null && (n.f & q) !== 0 ? t |= q : _.f |= At, {
    ctx: E,
    deps: null,
    effects: null,
    equals: sn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      j
    ),
    wv: 0,
    parent: n ?? _,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function jr(e, t) {
  let n = (
    /** @type {Effect | null} */
    _
  );
  n === null && or();
  var r = (
    /** @type {Boundary} */
    n.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = qt(
    /** @type {V} */
    j
  ), o = null, l = !g;
  return Mr(() => {
    try {
      var a = e();
    } catch (c) {
      a = Promise.reject(c);
    }
    var f = () => a;
    s = o?.then(f, f) ?? Promise.resolve(a), o = s;
    var u = (
      /** @type {Batch} */
      y
    ), h = r.pending;
    l && (r.update_pending_count(1), h || u.increment());
    const v = (c, d = void 0) => {
      o = null, h || u.activate(), d ? d !== Ot && (i.f |= le, wt(i, d)) : ((i.f & le) !== 0 && (i.f ^= le), wt(i, c)), l && (r.update_pending_count(-1), h || u.decrement()), vn();
    };
    if (s.then(v, (c) => v(null, c || "unknown")), u)
      return () => {
        queueMicrotask(() => u.neuter());
      };
  }), new Promise((a) => {
    function f(u) {
      function h() {
        u === s ? a(i) : f(s);
      }
      u.then(h, h);
    }
    f(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Er(e) {
  const t = /* @__PURE__ */ Nt(e);
  return t.equals = ln, t;
}
function dn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ee(
        /** @type {Effect} */
        t[n]
      );
  }
}
function kr(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & N) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Rt(e) {
  var t, n = _;
  te(kr(e));
  try {
    dn(e), t = Rn(e);
  } finally {
    te(n);
  }
  return t;
}
function hn(e) {
  var t = Rt(e);
  if (e.equals(t) || (e.v = t, e.wv = Fn()), !Te)
    if (je !== null)
      je.set(e, e.v);
    else {
      var n = (X || (e.f & q) !== 0) && e.deps !== null ? re : k;
      C(e, n);
    }
}
function Ar(e, t, n) {
  const r = De() ? Nt : Er;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var s = y, i = (
    /** @type {Effect} */
    _
  ), o = Tr(), l = $r();
  Promise.all(t.map((a) => /* @__PURE__ */ jr(a))).then((a) => {
    s?.activate(), o();
    try {
      n([...e.map(r), ...a]);
    } catch (f) {
      (i.f & Ae) === 0 && Ft(f, i);
    }
    s?.deactivate(), vn();
  }).catch((a) => {
    l.error(a);
  });
}
function Tr() {
  var e = _, t = g, n = E;
  return function() {
    te(e), B(t), Je(n);
  };
}
function vn() {
  te(null), B(null), Je(null);
}
const Se = /* @__PURE__ */ new Set();
let y = null, je = null, Lt = /* @__PURE__ */ new Set(), Qe = [];
function pn() {
  const e = (
    /** @type {() => void} */
    Qe.shift()
  );
  Qe.length > 0 && queueMicrotask(pn), e();
}
let de = [], it = null, _t = !1, We = !1;
class he {
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  #t = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #n = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #f = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #u = !1;
  /**
   * Async effects (created inside `async_derived`) encountered during processing.
   * These run after the rest of the batch has updated, since they should
   * always have the latest values
   * @type {Effect[]}
   */
  #i = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #o = [];
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #s = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #r = [];
  /**
   * Block effects, which may need to re-run on subsequent flushes
   * in order to update internal sources (e.g. each block items)
   * @type {Effect[]}
   */
  #l = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #c = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #d = [];
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    de = [];
    var n = null;
    if (Se.size > 1) {
      n = /* @__PURE__ */ new Map(), je = /* @__PURE__ */ new Map();
      for (const [i, o] of this.current)
        n.set(i, { v: i.v, wv: i.wv }), i.v = o;
      for (const i of Se)
        if (i !== this)
          for (const [o, l] of i.#t)
            n.has(o) || (n.set(o, { v: o.v, wv: o.wv }), o.v = l);
    }
    for (const i of t)
      this.#v(i);
    if (this.#i.length === 0 && this.#n === 0) {
      this.#h();
      var r = this.#s, s = this.#r;
      this.#s = [], this.#r = [], this.#l = [], y = null, zt(r), zt(s), y === null ? y = this : Se.delete(this), this.#f?.resolve();
    } else
      this.#a(this.#s), this.#a(this.#r), this.#a(this.#l);
    if (n) {
      for (const [i, { v: o, wv: l }] of n)
        i.wv <= l && (i.v = o);
      je = null;
    }
    for (const i of this.#i)
      Ne(i);
    for (const i of this.#o)
      Ne(i);
    this.#i = [], this.#o = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #v(t) {
    t.f ^= k;
    for (var n = t.first; n !== null; ) {
      var r = n.f, s = (r & (G | ne)) !== 0, i = s && (r & k) !== 0, o = i || (r & Z) !== 0 || this.skipped_effects.has(n);
      if (!o && n.fn !== null) {
        if (s)
          n.f ^= k;
        else if ((r & k) === 0)
          if ((r & kt) !== 0)
            this.#r.push(n);
          else if ((r & St) !== 0) {
            var l = n.b?.pending ? this.#o : this.#i;
            l.push(n);
          } else lt(n) && ((n.f & ke) !== 0 && this.#l.push(n), Ne(n));
        var a = n.first;
        if (a !== null) {
          n = a;
          continue;
        }
      }
      var f = n.parent;
      for (n = n.next; n === null && f !== null; )
        n = f.next, f = f.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #a(t) {
    for (const n of t)
      ((n.f & D) !== 0 ? this.#c : this.#d).push(n), C(n, k);
    t.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    this.#t.has(t) || this.#t.set(t, n), this.current.set(t, t.v);
  }
  activate() {
    y = this;
  }
  deactivate() {
    y = null;
    for (const t of Lt)
      if (Lt.delete(t), t(), y !== null)
        break;
  }
  neuter() {
    this.#u = !0;
  }
  flush() {
    de.length > 0 ? _n() : this.#h(), y === this && (this.#n === 0 && Se.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #h() {
    if (!this.#u)
      for (const t of this.#e)
        t();
    this.#e.clear();
  }
  increment() {
    this.#n += 1;
  }
  decrement() {
    if (this.#n -= 1, this.#n === 0) {
      for (const t of this.#c)
        C(t, D), ve(t);
      for (const t of this.#d)
        C(t, re), ve(t);
      this.#s = [], this.#r = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#f ??= tr()).promise;
  }
  static ensure() {
    if (y === null) {
      const t = y = new he();
      Se.add(y), We || he.enqueue(() => {
        y === t && t.flush();
      });
    }
    return y;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Qe.length === 0 && queueMicrotask(pn), Qe.unshift(t);
  }
}
function Sr(e) {
  var t = We;
  We = !0;
  try {
    for (var n; ; ) {
      if (xr(), de.length === 0 && (y?.flush(), de.length === 0))
        return it = null, /** @type {T} */
        n;
      _n();
    }
  } finally {
    We = t;
  }
}
function _n() {
  var e = $e;
  _t = !0;
  try {
    var t = 0;
    for (Ht(!0); de.length > 0; ) {
      var n = he.ensure();
      if (t++ > 1e3) {
        var r, s;
        Or();
      }
      n.process(de), ae.clear();
    }
  } finally {
    _t = !1, Ht(e), it = null;
  }
}
function Or() {
  try {
    ur();
  } catch (e) {
    Ft(e, it);
  }
}
function zt(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Ae | Z)) === 0 && lt(r)) {
        var s = y ? y.current.size : 0;
        if (Ne(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? An(r) : r.fn = null), y !== null && y.current.size > s && (r.f & Tt) !== 0)
          break;
      }
    }
    for (; n < t; )
      ve(e[n++]);
  }
}
function ve(e) {
  for (var t = it = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (_t && t === _ && (n & ke) !== 0)
      return;
    if ((n & (ne | G)) !== 0) {
      if ((n & k) === 0) return;
      t.f ^= k;
    }
  }
  de.push(t);
}
const ae = /* @__PURE__ */ new Map();
function qt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: sn,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function J(e, t) {
  const n = qt(e);
  return Vr(n), n;
}
// @__NO_SIDE_EFFECTS__
function wn(e, t = !1, n = !0) {
  const r = qt(e);
  return t || (r.equals = ln), Ze && n && E !== null && E.l !== null && (E.l.s ??= []).push(r), r;
}
function U(e, t, n = !1) {
  g !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!L || (g.f & Mt) !== 0) && De() && (g.f & (N | ke | St | Mt)) !== 0 && !V?.includes(e) && vr();
  let r = n ? Ce(t) : t;
  return wt(e, r);
}
function wt(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Te ? ae.set(e, t) : ae.set(e, n), e.v = t;
    var r = he.ensure();
    r.capture(e, n), (e.f & N) !== 0 && ((e.f & D) !== 0 && Rt(
      /** @type {Derived} */
      e
    ), C(e, (e.f & q) === 0 ? k : re)), e.wv = Fn(), gn(e, D), De() && _ !== null && (_.f & k) !== 0 && (_.f & (G | ne)) === 0 && (R === null ? Gr([e]) : R.push(e));
  }
  return t;
}
function ft(e) {
  U(e, e.v + 1);
}
function gn(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = De(), s = n.length, i = 0; i < s; i++) {
      var o = n[i], l = o.f;
      if (!(!r && o === _)) {
        var a = (l & D) === 0;
        a && C(o, t), (l & N) !== 0 ? gn(
          /** @type {Derived} */
          o,
          re
        ) : a && ve(
          /** @type {Effect} */
          o
        );
      }
    }
}
function Ce(e) {
  if (typeof e != "object" || e === null || Fe in e)
    return e;
  const t = nn(e);
  if (t !== Qn && t !== Xn)
    return e;
  var n = /* @__PURE__ */ new Map(), r = tn(e), s = /* @__PURE__ */ J(0), i = fe, o = (l) => {
    if (fe === i)
      return l();
    var a = g, f = fe;
    B(null), Yt(i);
    var u = l();
    return B(a), Yt(f), u;
  };
  return r && n.set("length", /* @__PURE__ */ J(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, a, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && dr();
        var u = n.get(a);
        return u === void 0 ? u = o(() => {
          var h = /* @__PURE__ */ J(f.value);
          return n.set(a, h), h;
        }) : U(u, f.value, !0), !0;
      },
      deleteProperty(l, a) {
        var f = n.get(a);
        if (f === void 0) {
          if (a in l) {
            const u = o(() => /* @__PURE__ */ J(j));
            n.set(a, u), ft(s);
          }
        } else
          U(f, j), ft(s);
        return !0;
      },
      get(l, a, f) {
        if (a === Fe)
          return e;
        var u = n.get(a), h = a in l;
        if (u === void 0 && (!h || xe(l, a)?.writable) && (u = o(() => {
          var c = Ce(h ? l[a] : j), d = /* @__PURE__ */ J(c);
          return d;
        }), n.set(a, u)), u !== void 0) {
          var v = z(u);
          return v === j ? void 0 : v;
        }
        return Reflect.get(l, a, f);
      },
      getOwnPropertyDescriptor(l, a) {
        var f = Reflect.getOwnPropertyDescriptor(l, a);
        if (f && "value" in f) {
          var u = n.get(a);
          u && (f.value = z(u));
        } else if (f === void 0) {
          var h = n.get(a), v = h?.v;
          if (h !== void 0 && v !== j)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return f;
      },
      has(l, a) {
        if (a === Fe)
          return !0;
        var f = n.get(a), u = f !== void 0 && f.v !== j || Reflect.has(l, a);
        if (f !== void 0 || _ !== null && (!u || xe(l, a)?.writable)) {
          f === void 0 && (f = o(() => {
            var v = u ? Ce(l[a]) : j, c = /* @__PURE__ */ J(v);
            return c;
          }), n.set(a, f));
          var h = z(f);
          if (h === j)
            return !1;
        }
        return u;
      },
      set(l, a, f, u) {
        var h = n.get(a), v = a in l;
        if (r && a === "length")
          for (var c = f; c < /** @type {Source<number>} */
          h.v; c += 1) {
            var d = n.get(c + "");
            d !== void 0 ? U(d, j) : c in l && (d = o(() => /* @__PURE__ */ J(j)), n.set(c + "", d));
          }
        if (h === void 0)
          (!v || xe(l, a)?.writable) && (h = o(() => /* @__PURE__ */ J(void 0)), U(h, Ce(f)), n.set(a, h));
        else {
          v = h.v !== j;
          var p = o(() => Ce(f));
          U(h, p);
        }
        var m = Reflect.getOwnPropertyDescriptor(l, a);
        if (m?.set && m.set.call(u, f), !v) {
          if (r && typeof a == "string") {
            var S = (
              /** @type {Source<number>} */
              n.get("length")
            ), b = Number(a);
            Number.isInteger(b) && b >= S.v && U(S, b + 1);
          }
          ft(s);
        }
        return !0;
      },
      ownKeys(l) {
        z(s);
        var a = Reflect.ownKeys(l).filter((h) => {
          var v = n.get(h);
          return v === void 0 || v.v !== j;
        });
        for (var [f, u] of n)
          u.v !== j && !(f in l) && a.push(f);
        return a;
      },
      setPrototypeOf() {
        hr();
      }
    }
  );
}
var Bt, mn, bn, yn;
function gt() {
  if (Bt === void 0) {
    Bt = window, mn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    bn = xe(t, "firstChild").get, yn = xe(t, "nextSibling").get, It(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), It(n) && (n.__t = void 0);
  }
}
function st(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ee(e) {
  return bn.call(e);
}
// @__NO_SIDE_EFFECTS__
function ie(e) {
  return yn.call(e);
}
function Q(e, t) {
  if (!T)
    return /* @__PURE__ */ Ee(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ee(x)
  );
  return n === null && (n = x.appendChild(st())), ce(n), n;
}
function Cr(e, t) {
  if (!T) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ee(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ie(n) : n;
  }
  return x;
}
function H(e, t = 1, n = !1) {
  let r = T ? x : e;
  for (var s; t--; )
    s = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ ie(r);
  if (!T)
    return r;
  if (n && r?.nodeType !== ir) {
    var i = st();
    return r === null ? s?.after(i) : r.before(i), ce(i), i;
  }
  return ce(r), /** @type {TemplateNode} */
  r;
}
function Fr(e) {
  e.textContent = "";
}
function Nr() {
  return !1;
}
function ot(e) {
  var t = g, n = _;
  B(null), te(null);
  try {
    return e();
  } finally {
    B(t), te(n);
  }
}
function xn(e) {
  _ === null && g === null && fr(), g !== null && (g.f & q) !== 0 && _ === null && ar(), Te && lr();
}
function Rr(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function M(e, t, n, r = !0) {
  var s = _;
  s !== null && (s.f & Z) !== 0 && (e |= Z);
  var i = {
    ctx: E,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | D,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: s,
    b: s && s.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Ne(i), i.f |= tt;
    } catch (a) {
      throw ee(i), a;
    }
  else t !== null && ve(i);
  var o = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & At) === 0;
  if (!o && r && (s !== null && Rr(i, s), g !== null && (g.f & N) !== 0 && (e & ne) === 0)) {
    var l = (
      /** @type {Derived} */
      g
    );
    (l.effects ??= []).push(i);
  }
  return i;
}
function qr(e) {
  const t = M(et, null, !1);
  return C(t, k), t.teardown = e, t;
}
function Wt(e) {
  xn();
  var t = (
    /** @type {Effect} */
    _.f
  ), n = !g && (t & G) !== 0 && (t & tt) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      E
    );
    (r.e ??= []).push(e);
  } else
    return $n(e);
}
function $n(e) {
  return M(kt | Tt, e, !1);
}
function Dr(e) {
  return xn(), M(et | Tt, e, !0);
}
function Pr(e) {
  he.ensure();
  const t = M(ne, e, !0);
  return () => {
    ee(t);
  };
}
function Ir(e) {
  he.ensure();
  const t = M(ne, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Tn(t, () => {
      ee(t), r(void 0);
    }) : (ee(t), r(void 0));
  });
}
function jn(e) {
  return M(kt, e, !1);
}
function Mr(e) {
  return M(St | At, e, !0);
}
function Lr(e, t = 0) {
  return M(et | t, e, !0);
}
function zr(e, t = [], n = []) {
  Ar(t, n, (r) => {
    M(et, () => e(...r.map(z)), !0);
  });
}
function Br(e, t = 0) {
  var n = M(ke | t, e, !0);
  return n;
}
function mt(e, t = !0) {
  return M(G, e, !0, t);
}
function En(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Te, r = g;
    Ut(!0), B(null);
    try {
      t.call(null);
    } finally {
      Ut(n), B(r);
    }
  }
}
function kn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && ot(() => {
      s.abort(Ot);
    });
    var r = n.next;
    (n.f & ne) !== 0 ? n.parent = null : ee(n, t), n = r;
  }
}
function Wr(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & G) === 0 && ee(t), t = n;
  }
}
function ee(e, t = !0) {
  var n = !1;
  (t || (e.f & nr) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Hr(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), kn(e, t && !n), Xe(e, 0), C(e, Ae);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  En(e);
  var s = e.parent;
  s !== null && s.first !== null && An(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Hr(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ie(e)
    );
    e.remove(), e = n;
  }
}
function An(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Tn(e, t) {
  var n = [];
  Sn(e, n, !0), Ur(n, () => {
    ee(e), t && t();
  });
}
function Ur(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var s of e)
      s.out(r);
  } else
    t();
}
function Sn(e, t, n) {
  if ((e.f & Z) === 0) {
    if (e.f ^= Z, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || n) && t.push(o);
    for (var r = e.first; r !== null; ) {
      var s = r.next, i = (r.f & nt) !== 0 || (r.f & G) !== 0;
      Sn(r, t, i ? n : !1), r = s;
    }
  }
}
function Yr(e) {
  On(e, !0);
}
function On(e, t) {
  if ((e.f & Z) !== 0) {
    e.f ^= Z, (e.f & k) === 0 && (C(e, D), ve(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & nt) !== 0 || (n.f & G) !== 0;
      On(n, s ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let $e = !1;
function Ht(e) {
  $e = e;
}
let Te = !1;
function Ut(e) {
  Te = e;
}
let g = null, L = !1;
function B(e) {
  g = e;
}
let _ = null;
function te(e) {
  _ = e;
}
let V = null;
function Vr(e) {
  g !== null && (V === null ? V = [e] : V.push(e));
}
let A = null, F = 0, R = null;
function Gr(e) {
  R = e;
}
let Cn = 1, qe = 0, fe = qe;
function Yt(e) {
  fe = e;
}
let X = !1;
function Fn() {
  return ++Cn;
}
function lt(e) {
  var t = e.f;
  if ((t & D) !== 0)
    return !0;
  if ((t & re) !== 0) {
    var n = e.deps, r = (t & q) !== 0;
    if (n !== null) {
      var s, i, o = (t & Ge) !== 0, l = r && _ !== null && !X, a = n.length;
      if ((o || l) && (_ === null || (_.f & Ae) === 0)) {
        var f = (
          /** @type {Derived} */
          e
        ), u = f.parent;
        for (s = 0; s < a; s++)
          i = n[s], (o || !i?.reactions?.includes(f)) && (i.reactions ??= []).push(f);
        o && (f.f ^= Ge), l && u !== null && (u.f & q) === 0 && (f.f ^= q);
      }
      for (s = 0; s < a; s++)
        if (i = n[s], lt(
          /** @type {Derived} */
          i
        ) && hn(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || _ !== null && !X) && C(e, k);
  }
  return !1;
}
function Nn(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !V?.includes(e))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & N) !== 0 ? Nn(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? C(i, D) : (i.f & k) !== 0 && C(i, re), ve(
        /** @type {Effect} */
        i
      ));
    }
}
function Rn(e) {
  var t = A, n = F, r = R, s = g, i = X, o = V, l = E, a = L, f = fe, u = e.f;
  A = /** @type {null | Value[]} */
  null, F = 0, R = null, X = (u & q) !== 0 && (L || !$e || g === null), g = (u & (G | ne)) === 0 ? e : null, V = null, Je(e.ctx), L = !1, fe = ++qe, e.ac !== null && (ot(() => {
    e.ac.abort(Ot);
  }), e.ac = null);
  try {
    e.f |= vt;
    var h = (
      /** @type {Function} */
      e.fn
    ), v = h(), c = e.deps;
    if (A !== null) {
      var d;
      if (Xe(e, F), c !== null && F > 0)
        for (c.length = F + A.length, d = 0; d < A.length; d++)
          c[F + d] = A[d];
      else
        e.deps = c = A;
      if (!X || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (u & N) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (d = F; d < c.length; d++)
          (c[d].reactions ??= []).push(e);
    } else c !== null && F < c.length && (Xe(e, F), c.length = F);
    if (De() && R !== null && !L && c !== null && (e.f & (N | re | D)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      R.length; d++)
        Nn(
          R[d],
          /** @type {Effect} */
          e
        );
    return s !== null && s !== e && (qe++, R !== null && (r === null ? r = R : r.push(.../** @type {Source[]} */
    R))), (e.f & le) !== 0 && (e.f ^= le), v;
  } catch (p) {
    return mr(p);
  } finally {
    e.f ^= vt, A = t, F = n, R = r, g = s, X = i, V = o, Je(l), L = a, fe = f;
  }
}
function Kr(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Gn.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  n === null && (t.f & N) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (A === null || !A.includes(t)) && (C(t, re), (t.f & (q | Ge)) === 0 && (t.f ^= Ge), dn(
    /** @type {Derived} **/
    t
  ), Xe(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Xe(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Kr(e, n[r]);
}
function Ne(e) {
  var t = e.f;
  if ((t & Ae) === 0) {
    C(e, k);
    var n = _, r = $e;
    _ = e, $e = !0;
    try {
      (t & ke) !== 0 ? Wr(e) : kn(e), En(e);
      var s = Rn(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Cn;
      var i;
      en && Wn && (e.f & D) !== 0 && e.deps;
    } finally {
      $e = r, _ = n;
    }
  }
}
function z(e) {
  var t = e.f, n = (t & N) !== 0;
  if (g !== null && !L) {
    var r = _ !== null && (_.f & Ae) !== 0;
    if (!r && !V?.includes(e)) {
      var s = g.deps;
      if ((g.f & vt) !== 0)
        e.rv < qe && (e.rv = qe, A === null && s !== null && s[F] === e ? F++ : A === null ? A = [e] : (!X || !A.includes(e)) && A.push(e));
      else {
        (g.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [g] : i.includes(g) || i.push(g);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), l = o.parent;
    l !== null && (l.f & q) === 0 && (o.f ^= q);
  }
  if (Te) {
    if (ae.has(e))
      return ae.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var a = o.v;
      return ((o.f & k) === 0 && o.reactions !== null || qn(o)) && (a = Rt(o)), ae.set(o, a), a;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    e, je?.has(o))
      return je.get(o);
    lt(o) && hn(o);
  }
  if ((e.f & le) !== 0)
    throw e.v;
  return e.v;
}
function qn(e) {
  if (e.v === j) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ae.has(t) || (t.f & N) !== 0 && qn(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Dt(e) {
  var t = L;
  try {
    return L = !0, e();
  } finally {
    L = t;
  }
}
const Jr = -7169;
function C(e, t) {
  e.f = e.f & Jr | t;
}
function Qr(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Fe in e)
      bt(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Fe in n && bt(n);
      }
  }
}
function bt(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        bt(e[r], t);
      } catch {
      }
    const n = nn(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Jn(n);
      for (let s in r) {
        const i = r[s].get;
        if (i)
          try {
            i.call(e);
          } catch {
          }
      }
    }
  }
}
const Dn = /* @__PURE__ */ new Set(), yt = /* @__PURE__ */ new Set();
function Xr(e) {
  for (var t = 0; t < e.length; t++)
    Dn.add(e[t]);
  for (var n of yt)
    n(e);
}
let Vt = null;
function Me(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  Vt = e;
  var o = 0, l = Vt === e && e.__root;
  if (l) {
    var a = s.indexOf(l);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var f = s.indexOf(t);
    if (f === -1)
      return;
    a <= f && (o = a);
  }
  if (i = /** @type {Element} */
  s[o] || e.target, i !== t) {
    ue(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var u = g, h = _;
    B(null), te(null);
    try {
      for (var v, c = []; i !== null; ) {
        var d = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var p = i["__" + r];
          if (p != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (tn(p)) {
              var [m, ...S] = p;
              m.apply(i, [e, ...S]);
            } else
              p.call(i, e);
        } catch (b) {
          v ? c.push(b) : v = b;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        i = d;
      }
      if (v) {
        for (let b of c)
          queueMicrotask(() => {
            throw b;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, B(u), te(h);
    }
  }
}
function Zr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function He(e, t) {
  var n = (
    /** @type {Effect} */
    _
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Pe(e, t) {
  var n = (t & Yn) !== 0, r = (t & Vn) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    if (T)
      return He(x, null), x;
    s === void 0 && (s = Zr(i ? e : "<!>" + e), n || (s = /** @type {Node} */
    /* @__PURE__ */ Ee(s)));
    var o = (
      /** @type {TemplateNode} */
      r || mn ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ee(o)
      ), a = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      He(l, a);
    } else
      He(o, o);
    return o;
  };
}
function me(e, t) {
  if (T) {
    _.nodes_end = x, Ct();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const ei = ["touchstart", "touchmove"];
function ti(e) {
  return ei.includes(e);
}
let xt = !0;
function ni(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Pn(e, t) {
  return In(e, t);
}
function ri(e, t) {
  gt(), t.intro = t.intro ?? !1;
  const n = t.target, r = T, s = x;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ee(n)
    ); i && (i.nodeType !== Ke || /** @type {Comment} */
    i.data !== Qt); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ ie(i);
    if (!i)
      throw ye;
    be(!0), ce(
      /** @type {Comment} */
      i
    ), Ct();
    const o = In(e, { ...t, anchor: i });
    if (x === null || x.nodeType !== Ke || /** @type {Comment} */
    x.data !== Zt)
      throw rt(), ye;
    return be(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== ye && console.warn("Failed to hydrate: ", o), t.recover === !1 && cr(), gt(), Fr(n), be(!1), Pn(e, t);
  } finally {
    be(r), ce(s);
  }
}
const _e = /* @__PURE__ */ new Map();
function In(e, { target: t, anchor: n, props: r = {}, events: s, context: i, intro: o = !0 }) {
  gt();
  var l = /* @__PURE__ */ new Set(), a = (h) => {
    for (var v = 0; v < h.length; v++) {
      var c = h[v];
      if (!l.has(c)) {
        l.add(c);
        var d = ti(c);
        t.addEventListener(c, Me, { passive: d });
        var p = _e.get(c);
        p === void 0 ? (document.addEventListener(c, Me, { passive: d }), _e.set(c, 1)) : _e.set(c, p + 1);
      }
    }
  };
  a(Kn(Dn)), yt.add(a);
  var f = void 0, u = Ir(() => {
    var h = n ?? t.appendChild(st());
    return mt(() => {
      if (i) {
        an({});
        var v = (
          /** @type {ComponentContext} */
          E
        );
        v.c = i;
      }
      s && (r.$$events = s), T && He(
        /** @type {TemplateNode} */
        h,
        null
      ), xt = o, f = e(h, r) || {}, xt = !0, T && (_.nodes_end = x), i && fn();
    }), () => {
      for (var v of l) {
        t.removeEventListener(v, Me);
        var c = (
          /** @type {number} */
          _e.get(v)
        );
        --c === 0 ? (document.removeEventListener(v, Me), _e.delete(v)) : _e.set(v, c);
      }
      yt.delete(a), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return $t.set(f, u), f;
}
let $t = /* @__PURE__ */ new WeakMap();
function ii(e, t) {
  const n = $t.get(e);
  return n ? ($t.delete(e), n(t)) : Promise.resolve();
}
function Le(e, t, n = !1) {
  T && Ct();
  var r = e, s = null, i = null, o = j, l = n ? nt : 0, a = !1;
  const f = (c, d = !0) => {
    a = !0, v(d, c);
  };
  var u = null;
  function h() {
    u !== null && (u.lastChild.remove(), r.before(u), u = null);
    var c = o ? s : i, d = o ? i : s;
    c && Yr(c), d && Tn(d, () => {
      o ? i = null : s = null;
    });
  }
  const v = (c, d) => {
    if (o === (o = c)) return;
    let p = !1;
    if (T) {
      const pe = wr(r) === Xt;
      !!o === pe && (r = _r(), ce(r), be(!1), p = !0);
    }
    var m = Nr(), S = r;
    if (m && (u = document.createDocumentFragment(), u.append(S = st())), o ? s ??= d && mt(() => d(S)) : i ??= d && mt(() => d(S)), m) {
      var b = (
        /** @type {Batch} */
        y
      ), se = o ? s : i, oe = o ? i : s;
      se && b.skipped_effects.delete(se), oe && b.skipped_effects.add(oe), b.add_callback(h);
    } else
      h();
    p && be(!0);
  };
  Br(() => {
    a = !1, t(f), a || v(null, null);
  }, l), T && (r = x);
}
function si(e, t) {
  jn(() => {
    var n = e.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + t.hash)) {
      const s = document.createElement("style");
      s.id = t.hash, s.textContent = t.code, r.appendChild(s);
    }
  });
}
const oi = () => performance.now(), Y = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => oi(),
  tasks: /* @__PURE__ */ new Set()
};
function Mn() {
  const e = Y.now();
  Y.tasks.forEach((t) => {
    t.c(e) || (Y.tasks.delete(t), t.f());
  }), Y.tasks.size !== 0 && Y.tick(Mn);
}
function li(e) {
  let t;
  return Y.tasks.size === 0 && Y.tick(Mn), {
    promise: new Promise((n) => {
      Y.tasks.add(t = { c: e, f: n });
    }),
    abort() {
      Y.tasks.delete(t);
    }
  };
}
function ze(e, t) {
  ot(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function ai(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Gt(e) {
  const t = {}, n = e.split(";");
  for (const r of n) {
    const [s, i] = r.split(":");
    if (!s || i === void 0) break;
    const o = ai(s.trim());
    t[o] = i.trim();
  }
  return t;
}
const fi = (e) => e;
function ut(e, t, n, r) {
  var s = (e & Un) !== 0, i = "both", o, l = t.inert, a = t.style.overflow, f, u;
  function h() {
    return ot(() => o ??= n()(t, r?.() ?? /** @type {P} */
    {}, {
      direction: i
    }));
  }
  var v = {
    is_global: s,
    in() {
      t.inert = l, ze(t, "introstart"), f = jt(t, h(), u, 1, () => {
        ze(t, "introend"), f?.abort(), f = o = void 0, t.style.overflow = a;
      });
    },
    out(m) {
      t.inert = !0, ze(t, "outrostart"), u = jt(t, h(), f, 0, () => {
        ze(t, "outroend"), m?.();
      });
    },
    stop: () => {
      f?.abort(), u?.abort();
    }
  }, c = (
    /** @type {Effect} */
    _
  );
  if ((c.transitions ??= []).push(v), xt) {
    var d = s;
    if (!d) {
      for (var p = (
        /** @type {Effect | null} */
        c.parent
      ); p && (p.f & nt) !== 0; )
        for (; (p = p.parent) && (p.f & ke) === 0; )
          ;
      d = !p || (p.f & tt) !== 0;
    }
    d && jn(() => {
      Dt(() => v.in());
    });
  }
}
function jt(e, t, n, r, s) {
  var i = r === 1;
  if (Zn(t)) {
    var o, l = !1;
    return yr(() => {
      if (!l) {
        var m = t({ direction: i ? "in" : "out" });
        o = jt(e, m, n, r, s);
      }
    }), {
      abort: () => {
        l = !0, o?.abort();
      },
      deactivate: () => o.deactivate(),
      reset: () => o.reset(),
      t: () => o.t()
    };
  }
  if (n?.deactivate(), !t?.duration)
    return s(), {
      abort: I,
      deactivate: I,
      reset: I,
      t: () => r
    };
  const { delay: a = 0, css: f, tick: u, easing: h = fi } = t;
  var v = [];
  if (i && n === void 0 && (u && u(0, 1), f)) {
    var c = Gt(f(0, 1));
    v.push(c, c);
  }
  var d = () => 1 - r, p = e.animate(v, { duration: a, fill: "forwards" });
  return p.onfinish = () => {
    p.cancel();
    var m = n?.t() ?? 1 - r;
    n?.abort();
    var S = r - m, b = (
      /** @type {number} */
      t.duration * Math.abs(S)
    ), se = [];
    if (b > 0) {
      var oe = !1;
      if (f)
        for (var pe = Math.ceil(b / 16.666666666666668), w = 0; w <= pe; w += 1) {
          var $ = m + S * h(w / pe), P = Gt(f($, 1 - $));
          se.push(P), oe ||= P.overflow === "hidden";
        }
      oe && (e.style.overflow = "hidden"), d = () => {
        var O = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return m + S * h(O / b);
      }, u && li(() => {
        if (p.playState !== "running") return !1;
        var O = d();
        return u(O, 1 - O), !0;
      });
    }
    p = e.animate(se, { duration: b, fill: "forwards" }), p.onfinish = () => {
      d = () => r, u?.(r, 1 - r), s();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = I);
    },
    deactivate: () => {
      s = I;
    },
    reset: () => {
      r === 0 && u?.(1, 0);
    },
    t: () => d()
  };
}
function ui(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    E
  ), n = t.l.u;
  if (!n) return;
  let r = () => Qr(t.s);
  if (e) {
    let s = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ Nt(() => {
      let l = !1;
      const a = t.s;
      for (const f in a)
        a[f] !== i[f] && (i[f] = a[f], l = !0);
      return l && s++, s;
    });
    r = () => z(o);
  }
  n.b.length && Dr(() => {
    Kt(t, r), Ve(n.b);
  }), Wt(() => {
    const s = Dt(() => n.m.map(er));
    return () => {
      for (const i of s)
        typeof i == "function" && i();
    };
  }), n.a.length && Wt(() => {
    Kt(t, r), Ve(n.a);
  });
}
function Kt(e, t) {
  if (e.l.s)
    for (const n of e.l.s) z(n);
  t();
}
function Ln(e, t, n) {
  if (e == null)
    return t(void 0), I;
  const r = Dt(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const we = [];
function at(e, t = I) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function s(l) {
    if (on(e, l) && (e = l, n)) {
      const a = !we.length;
      for (const f of r)
        f[1](), we.push(f, e);
      if (a) {
        for (let f = 0; f < we.length; f += 2)
          we[f][0](we[f + 1]);
        we.length = 0;
      }
    }
  }
  function i(l) {
    s(l(
      /** @type {T} */
      e
    ));
  }
  function o(l, a = I) {
    const f = [l, a];
    return r.add(f), r.size === 1 && (n = t(s, i) || I), l(
      /** @type {T} */
      e
    ), () => {
      r.delete(f), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: i, subscribe: o };
}
function ci(e) {
  let t;
  return Ln(e, (n) => t = n)(), t;
}
let Et = Symbol();
function Be(e, t, n) {
  const r = n[t] ??= {
    store: null,
    source: /* @__PURE__ */ wn(void 0),
    unsubscribe: I
  };
  if (r.store !== e && !(Et in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = I;
    else {
      var s = !0;
      r.unsubscribe = Ln(e, (i) => {
        s ? r.source.v = i : U(r.source, i);
      }), s = !1;
    }
  return e && Et in n ? ci(e) : z(r.source);
}
function di() {
  const e = {};
  function t() {
    qr(() => {
      for (var n in e)
        e[n].unsubscribe();
      ue(e, Et, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function hi(e) {
  return new vi(e);
}
class vi {
  /** @type {any} */
  #t;
  /** @type {Record<string, any>} */
  #e;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var n = /* @__PURE__ */ new Map(), r = (i, o) => {
      var l = /* @__PURE__ */ wn(o, !1, !1);
      return n.set(i, l), l;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, o) {
          return z(n.get(o) ?? r(o, Reflect.get(i, o)));
        },
        has(i, o) {
          return o === rr ? !0 : (z(n.get(o) ?? r(o, Reflect.get(i, o))), Reflect.has(i, o));
        },
        set(i, o, l) {
          return U(n.get(o) ?? r(o, l), l), Reflect.set(i, o, l);
        }
      }
    );
    this.#e = (t.hydrate ? ri : Pn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && Sr(), this.#t = s.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || ue(this, i, {
        get() {
          return this.#e[i];
        },
        /** @param {any} value */
        set(o) {
          this.#e[i] = o;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(s, i);
    }, this.#e.$destroy = () => {
      ii(this.#e);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#e.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    this.#t[t] = this.#t[t] || [];
    const r = (...s) => n.call(this, ...s);
    return this.#t[t].push(r), () => {
      this.#t[t] = this.#t[t].filter(
        /** @param {any} fn */
        (s) => s !== r
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let zn;
typeof HTMLElement == "function" && (zn = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, n) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const r = this.$$c.$on(e, t);
      this.$$l_u.set(t, r);
    }
    super.addEventListener(e, t, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, n) {
    if (super.removeEventListener(e, t, n), this.$$c) {
      const r = this.$$l_u.get(t);
      r && (r(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(r) {
        return (s) => {
          const i = document.createElement("slot");
          r !== "default" && (i.name = r), me(s, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = pi(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const s = this.$$g_p(r.name);
        s in this.$$d || (this.$$d[s] = Ue(s, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = hi({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Pr(() => {
        Lr(() => {
          this.$$r = !0;
          for (const r of Ye(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const s = Ue(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, s);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const s of this.$$l[r]) {
          const i = this.$$c.$on(r, s);
          this.$$l_u.set(s, i);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, t, n) {
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ue(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return Ye(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Ue(e, t, n, r) {
  const s = n[e]?.type;
  if (t = s === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function pi(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function _i(e, t, n, r, s, i) {
  let o = class extends zn {
    constructor() {
      super(e, n, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ye(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return Ye(t).forEach((l) => {
    ue(o.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(a) {
        a = Ue(l, a, t), this.$$d[l] = a;
        var f = this.$$c;
        if (f) {
          var u = xe(f, l)?.get;
          u ? f[l] = a : f.$set({ [l]: a });
        }
      }
    });
  }), r.forEach((l) => {
    ue(o.prototype, l, {
      get() {
        return this.$$c?.[l];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
function wi(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Jt(e) {
  const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return t ? [parseFloat(t[1]), t[2] || "px"] : [
    /** @type {number} */
    e,
    "px"
  ];
}
function ct(e, { delay: t = 0, duration: n = 400, easing: r = wi, x: s = 0, y: i = 0, opacity: o = 0 } = {}) {
  const l = getComputedStyle(e), a = +l.opacity, f = l.transform === "none" ? "" : l.transform, u = a * (1 - o), [h, v] = Jt(s), [c, d] = Jt(i);
  return {
    delay: t,
    duration: n,
    easing: r,
    css: (p, m) => `
			transform: ${f} translate(${(1 - p) * h}${v}, ${(1 - p) * c}${d});
			opacity: ${a - u * m}`
  };
}
const ge = at(!1), dt = at(!1), Oe = at(!1), ht = at(!1);
var gi = (e, t) => e.key === "Enter" && t, mi = (e, t) => e.key === "Enter" && t, bi = (e, t) => e.key === "Enter" && t, yi = /* @__PURE__ */ Pe(`<div class="welcome-box svelte-nj61wh"><div class="welcome svelte-nj61wh"><h1 class="svelte-nj61wh">Welcome to our website!</h1> <p class="svelte-nj61wh">Nice to meet you! If you have any question about our services, feel free to contact us.</p></div> <div class="welcome-2 svelte-nj61wh"><div class="faq svelte-nj61wh" aria-details="faq option" role="button" tabindex="0">FAQ</div> <div class="talk svelte-nj61wh" aria-details="chat option" role="button" tabindex="0">Let's Talk</div></div></div>`), xi = (e, t) => e.key === "Enter" && t, $i = /* @__PURE__ */ Pe(' <div class="faq-box svelte-nj61wh"><div class="faq-options svelte-nj61wh"><ul class="faq-options-li svelte-nj61wh"><li class="svelte-nj61wh">How do I apply?</li> <li class="svelte-nj61wh">What courses do you offer?</li> <li class="svelte-nj61wh">When do applications close?</li> <li class="svelte-nj61wh">Where is the campus located?</li> <li class="svelte-nj61wh">Talk to someone?</li> <div id="talk-btn" aria-details="chat option" role="button" tabindex="0" class="svelte-nj61wh">Can I talk to someone?</div></ul></div></div>', 1), ji = /* @__PURE__ */ Pe(`<div class="chat-dialog svelte-nj61wh"><div class="chat-header svelte-nj61wh"><div class="svelte-nj61wh"><h1 class="svelte-nj61wh">ChatFlow</h1> <p>A live chat interface that allows for seamless, natural communication and connection.</p></div> <div class="cross svelte-nj61wh" role="button" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg></div></div> <div class="chat-body svelte-nj61wh"><p class="bot-msg svelte-nj61wh">Hi! How Can I help You?</p> <div class="chat-options svelte-nj61wh"><ul id="chat-options" class="svelte-nj61wh"><li class="svelte-nj61wh">How do I apply?</li> <li class="svelte-nj61wh">What courses do you offer?</li> <li class="svelte-nj61wh">When do applications close?</li> <li class="svelte-nj61wh">Where is the campus located?</li> <li class="svelte-nj61wh">Talk to someone?</li></ul></div> <div class="input svelte-nj61wh"><input type="text" placeholder="Let's share something" class="svelte-nj61wh"/> <button class="send svelte-nj61wh"><img src="/src/assets/Shape.svg" alt="" class="svelte-nj61wh"/></button></div></div></div>`), Ei = /* @__PURE__ */ Pe(`<div class="chat-dialog svelte-nj61wh"><div class="chat-header svelte-nj61wh"><div class="svelte-nj61wh"><h1 class="svelte-nj61wh">ChatFlow</h1> <p>A live chat interface that allows for seamless, natural communication and connection.</p></div></div> <div class="chat-body svelte-nj61wh"><p class="bot-msg svelte-nj61wh">Thanks for joining us! Let's start by getting your name.</p> <ul class="user-msg svelte-nj61wh"><li class="svelte-nj61wh">John</li></ul> <div class="input svelte-nj61wh"><input type="text" placeholder="Let's share something" class="svelte-nj61wh"/> <button class="send svelte-nj61wh"><img src="/src/assets/Shape.svg" alt="" class="svelte-nj61wh"/></button></div></div></div>`), ki = /* @__PURE__ */ Pe('<div><div class="chat-icon svelte-nj61wh" aria-live="polite" aria-label="Chat" role="button" tabindex="0"></div> <!> <!> <!> <!></div>');
const Ai = {
  hash: "svelte-nj61wh",
  code: `\r
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');\r
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&display=swap');\r
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');\r
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&family=Questrial&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');:host {all:initial; /* Reset styles */position:fixed;bottom:1rem;right:1rem;z-index:9999;}.chat-icon.svelte-nj61wh {\r
    /* position: absolute; */bottom:20px;background-image:url("/src/assets/Objects.svg");background-repeat:no-repeat;background-size:contain;\r
    /* background-size: 120%; */background-position-x:100%;background-position-y:100%;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 8px rgba(0, 0, 0, 0.15);box-sizing:border-box;transition:all 0.3s ease-in-out;position:relative;}.chat-icon.svelte-nj61wh:hover {transform:scale(1.05);box-shadow:0 6px 12px rgba(0, 0, 0, 0.2);}.chat-dialog.svelte-nj61wh {position:absolute;bottom:90px;right:5%;width:400px;height:618px;background:white;border-radius:15px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.2);display:flex;flex-direction:column;overflow:hidden;}.welcome-box.svelte-nj61wh {position:fixed;right:1%;bottom:90px;display:flex;flex-direction:column;gap:10px;margin-bottom:10px;font-family:Figtree;font-weight:700;font-style:Bold;font-size:16px;line-height:24px;letter-spacing:0%;max-height:calc((248-60)px);}.welcome.svelte-nj61wh {box-sizing:border-box;max-width:290px;max-height:124px;background:#E9E9E9;\r
    /* just for visibility */padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;border-radius:24px 24px 0 24px;display:flex;flex-direction:column;}.welcome.svelte-nj61wh h1:where(.svelte-nj61wh){font-size:16px;margin:0;padding:0;}.welcome.svelte-nj61wh p:where(.svelte-nj61wh){box-sizing:border-box;font-family:"Figtree";font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;padding:0;margin:0;}.welcome-2.svelte-nj61wh {\r
    /* width: 290px; */height:44px;display:flex;\r
    /* justify-content: space-between; */gap:10px;}.faq.svelte-nj61wh,.talk.svelte-nj61wh{background:linear-gradient(270deg, #A7BEFE 0%, #43319A 100%);height:44px;width:140px;display:flex;justify-content:center;align-items:center;border-radius:20px;color:white;font-size:16px;cursor:pointer;transition:all 0.2s ease-in-out;}.faq.svelte-nj61wh:hover {transform:scale(1.02);}.talk.svelte-nj61wh:hover{transform:scale(1.02);}.chat-header.svelte-nj61wh {background:linear-gradient(270deg, #A7BEFE 0%, #6E6EC5 36.11%, #5347AA 64.88%, #43319A 100%);;\rpadding: 0.8rem;display:flex;justify-content:space-between;}.chat-header.svelte-nj61wh div:where(.svelte-nj61wh) h1:where(.svelte-nj61wh){font-family:'source sans 3', sans-serif;font-weight:700;font-style:Bold;font-size:30px;\r
    /* line-height: 100%; */letter-spacing:0%;}.chat-header.svelte-nj61wh div:where(.svelte-nj61wh){color:white;font-family:'Questrial', sans-serif;font-weight:300;font-size:12px;line-height:16px;letter-spacing:22%;display:inline;}.cross.svelte-nj61wh{cursor:pointer;padding-top:1px;\r
    /* margin-right: 5px; */\r
    /* width: 15px; */font-size:15rem;}.chat-body.svelte-nj61wh {flex:1;position:relative;height:inherit;padding:0.5rem;padding-top:169px;padding-bottom:1.5rem;overflow-y:auto;}.chat-options.svelte-nj61wh{padding:0.5rem;}#chat-options.svelte-nj61wh{padding:0.5rem;outline:none;border-radius:10px;position:absolute;bottom:10%;right:0%;text-decoration:none;display:flex;flex-direction:column;gap:0.5rem;align-items:flex-end;}#chat-options.svelte-nj61wh li:where(.svelte-nj61wh){padding:0.3rem;border:1px solid #A3B9FA;color:#6D6CC4;border-radius:16px;list-style:none;padding-right:12px;padding-left:12px;width:130;height:32;gap:8px;font-family:Inter;font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;vertical-align:middle;transition:border ease-in-out;}#chat-options.svelte-nj61wh li:where(.svelte-nj61wh):hover{\r
    /* background: #f0f0f0; */\r
    /* transform: scale(1.03); */border:2px solid #A3B9FA;cursor:pointer;}.input.svelte-nj61wh{position:absolute;bottom:0;left:0;\r
    /* padding: 1rem; */\r
    /* border: 1px solid #ccc; */margin:12px;border:none;width:376px;height:48px;box-sizing:border-box;border:1px solid #f0f0f0f5;border-radius:12px;display:flex;align-items:center;padding-left:12px;padding-right:12px;}.input.svelte-nj61wh input:where(.svelte-nj61wh){flex:1;height:32px;border:none;outline:none;background:transparent;}.input.svelte-nj61wh:focus{outline:none;\r
    /* border: 2px solid #46b3e5; */}.send.svelte-nj61wh{background-color:#5347AA;width:32px;height:32px;display:flex;justify-content:center;align-items:center;opacity:1;border-radius:12px;border-width:1px;color:white;cursor:pointer;}.send.svelte-nj61wh img:where(.svelte-nj61wh){width:14px;height:14px;}.bot-msg.svelte-nj61wh{\r
    /* width: 165px; */\r
    /* height: 32px; */padding:12px;display:inline-block;max-width:290px;width:fit-content;border-top-right-radius:16px;border-bottom-right-radius:16px;border-bottom-left-radius:16px;padding-top:12px;\r
    /* padding-bottom: 12px; */text-align:left;background-color:#F4F4F4;font-family:'Outfit', sans-serif;font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;}.faq-box.svelte-nj61wh{width:290px;height:324px;display:flex;flex-direction:column;position:fixed;bottom:70px;right:1%;}.faq-options.svelte-nj61wh {padding:0.5rem;}.faq-options-li.svelte-nj61wh {padding:0.5rem;border-radius:10px;position:absolute;bottom:10%;right:0%;text-decoration:none;display:flex;flex-direction:column;gap:0.5rem;align-items:flex-end;}.faq-options-li.svelte-nj61wh li:where(.svelte-nj61wh) {cursor:pointer;background-color:#E9E9E9;padding:12px 24px 12px 24px;border-radius:24px;list-style:none;font-family:'Figtree', sans-serif;font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;text-align:right;display:flex;justify-content:center;align-items:center;}.faq-options-li.svelte-nj61wh li:where(.svelte-nj61wh):hover {\r
      /* background: #f0f0f0; */transform:scale(1.03);\r
      /* border: 2px solid #A3B9FA; */cursor:pointer;}#talk-btn.svelte-nj61wh {cursor:pointer;background:linear-gradient(270deg, #A7BEFE 0%, #43319A 100%);border-radius:20px;width:290px;padding:12px 16px 12px 16px;color:white;font-family:DM Sans;font-weight:700;font-size:14px;line-height:20px;letter-spacing:0%;text-align:center;display:flex;justify-content:center;align-items:center;}.user-msg.svelte-nj61wh{display:flex;justify-content:flex-end;}.user-msg.svelte-nj61wh li:where(.svelte-nj61wh){display:inline-block;width:fit-content;padding:5px 12px 5px 12px;border:1px solid #43319A;border-top-left-radius:16px;border-bottom-right-radius:16px;border-bottom-left-radius:16px;list-style:none;\r
        /* padding:12px; */\r
        /* padding-left: 12px; */}`
};
function Ti(e, t) {
  an(t, !1), si(e, Ai);
  const [n, r] = di(), s = () => Be(ge, "$open", n), i = () => Be(dt, "$openFaq", n), o = () => Be(Oe, "$openChat", n), l = () => Be(ht, "$openAgent", n), a = () => {
    ge.update((w) => !w), Oe.set(!1), dt.set(!1), ht.set(!1);
  }, f = () => {
    s() && ge.update((w) => !w), Oe.update((w) => !w);
  }, u = () => {
    s() && ge.update((w) => !w), ht.update((w) => !w);
  }, h = () => {
    s() && ge.update((w) => !w), dt.update((w) => !w);
  };
  ui();
  var v = ki(), c = Q(v);
  c.__click = a, c.__keydown = [gi, a];
  var d = H(c, 2);
  {
    var p = (w) => {
      var $ = yi(), P = H(Q($), 2), O = Q(P);
      O.__click = h, O.__keydown = [mi, h];
      var W = H(O, 2);
      W.__click = f, W.__keydown = [bi, f], K(P), K($), ut(3, $, () => ct, () => ({ y: 20, duration: 300 })), me(w, $);
    };
    Le(d, (w) => {
      s() && w(p);
    });
  }
  var m = H(d, 2);
  {
    var S = (w) => {
      var $ = $i(), P = Cr($), O = H(P), W = Q(O), Ie = Q(W), Pt = H(Q(Ie), 10);
      Pt.__click = u, Pt.__keydown = [xi, u], K(Ie), K(W), K(O), zr((Bn) => ni(P, `${Bn ?? ""} `), [() => ge.set(!1)]), me(w, $);
    };
    Le(m, (w) => {
      i() && s() == !1 && w(S);
    });
  }
  var b = H(m, 2);
  {
    var se = (w) => {
      var $ = ji(), P = Q($), O = H(Q(P), 2);
      O.__click = () => Oe.update((W) => !W), O.__keydown = (W) => W.key === "enter" && Oe.update((Ie) => !Ie), K(P), pr(2), K($), ut(3, $, () => ct, () => ({ x: 20, duration: 300 })), me(w, $);
    };
    Le(b, (w) => {
      o() && !s() && w(se);
    });
  }
  var oe = H(b, 2);
  {
    var pe = (w) => {
      var $ = Ei();
      ut(3, $, () => ct, () => ({ x: 20, duration: 300 })), me(w, $);
    };
    Le(oe, (w) => {
      l() && !s() && w(pe);
    });
  }
  K(v), me(e, v), fn(), r();
}
Xr(["click", "keydown"]);
customElements.define("chat-widget", _i(Ti, {}, [], [], !0));
export {
  Ti as default
};
