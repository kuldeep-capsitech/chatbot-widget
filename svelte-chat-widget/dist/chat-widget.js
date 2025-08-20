typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
let le = !1, Gn = !1;
function Zn() {
  le = !0;
}
Zn();
const Kn = 4, Jn = 1, Qn = 2, nn = "[", rn = "[!", sn = "]", xt = {}, E = Symbol(), ln = !1;
var on = Array.isArray, Xn = Array.prototype.indexOf, tr = Array.from, Xt = Object.keys, dt = Object.defineProperty, $t = Object.getOwnPropertyDescriptor, er = Object.getOwnPropertyDescriptors, nr = Object.prototype, rr = Array.prototype, an = Object.getPrototypeOf, He = Object.isExtensible;
function ir(t) {
  return typeof t == "function";
}
const I = () => {
};
function sr(t) {
  return t();
}
function te(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function lr() {
  var t, e, n = new Promise((r, s) => {
    t = r, e = s;
  });
  return { promise: n, resolve: t, reject: e };
}
const N = 2, Oe = 4, oe = 8, zt = 16, K = 32, rt = 64, fn = 128, P = 256, ee = 512, k = 1024, B = 2048, it = 4096, tt = 8192, Ct = 16384, ae = 32768, fe = 65536, Ue = 1 << 17, or = 1 << 18, Fe = 1 << 19, Ne = 1 << 20, ye = 1 << 21, Re = 1 << 22, ft = 1 << 23, Pt = Symbol("$state"), ar = Symbol("legacy props"), Le = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), fr = 3, ne = 8;
function ur() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function cr() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function dr(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function hr() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function vr(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function pr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function _r() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function mr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function gr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function wr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ue(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let C = !1;
function bt(t) {
  C = t;
}
let $;
function ht(t) {
  if (t === null)
    throw ue(), xt;
  return $ = t;
}
function Me() {
  return ht(
    /** @type {TemplateNode} */
    /* @__PURE__ */ st($)
  );
}
function M(t) {
  if (C) {
    if (/* @__PURE__ */ st($) !== null)
      throw ue(), xt;
    $ = t;
  }
}
function yr(t = 1) {
  if (C) {
    for (var e = t, n = $; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ st(n);
    $ = n;
  }
}
function br() {
  for (var t = 0, e = $; ; ) {
    if (e.nodeType === ne) {
      var n = (
        /** @type {Comment} */
        e.data
      );
      if (n === sn) {
        if (t === 0) return e;
        t -= 1;
      } else (n === nn || n === rn) && (t += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ st(e)
    );
    e.remove(), e = r;
  }
}
function xr(t) {
  if (!t || t.nodeType !== ne)
    throw ue(), xt;
  return (
    /** @type {Comment} */
    t.data
  );
}
function un(t) {
  return t === this.v;
}
function cn(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function dn(t) {
  return !cn(t, this.v);
}
let j = null;
function re(t) {
  j = t;
}
function hn(t, e = !1, n) {
  j = {
    p: j,
    c: null,
    e: null,
    s: t,
    x: null,
    l: le && !e ? { s: null, u: null, $: [] } : null
  };
}
function vn(t) {
  var e = (
    /** @type {ComponentContext} */
    j
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Cn(r);
  }
  return j = e.p, /** @type {T} */
  {};
}
function Ut() {
  return !le || j !== null && j.l === null;
}
const $r = /* @__PURE__ */ new WeakMap();
function Er(t) {
  var e = m;
  if (e === null)
    return g.f |= ft, t;
  if ((e.f & ae) === 0) {
    if ((e.f & fn) === 0)
      throw !e.parent && t instanceof Error && pn(t), t;
    e.b.error(t);
  } else
    De(t, e);
}
function De(t, e) {
  for (; e !== null; ) {
    if ((e.f & fn) !== 0)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && pn(t), t;
}
function pn(t) {
  const e = $r.get(t);
  e && (dt(t, "message", {
    value: e.message
  }), dt(t, "stack", {
    value: e.stack
  }));
}
let It = [], be = [];
function _n() {
  var t = It;
  It = [], te(t);
}
function jr() {
  var t = be;
  be = [], te(t);
}
function kr(t) {
  It.length === 0 && queueMicrotask(_n), It.push(t);
}
function zr() {
  It.length > 0 && _n(), be.length > 0 && jr();
}
function Cr() {
  for (var t = (
    /** @type {Effect} */
    m.b
  ); t !== null && !t.has_pending_snippet(); )
    t = t.parent;
  return t === null && ur(), t;
}
// @__NO_SIDE_EFFECTS__
function qe(t) {
  var e = N | B, n = g !== null && (g.f & N) !== 0 ? (
    /** @type {Derived} */
    g
  ) : null;
  return m === null || n !== null && (n.f & P) !== 0 ? e |= P : m.f |= Fe, {
    ctx: j,
    deps: null,
    effects: null,
    equals: un,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      E
    ),
    wv: 0,
    parent: n ?? m,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ar(t, e) {
  let n = (
    /** @type {Effect | null} */
    m
  );
  n === null && cr();
  var r = (
    /** @type {Boundary} */
    n.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Be(
    /** @type {V} */
    E
  ), l = null, o = !g;
  return Ur(() => {
    try {
      var a = t();
    } catch (c) {
      a = Promise.reject(c);
    }
    var f = () => a;
    s = l?.then(f, f) ?? Promise.resolve(a), l = s;
    var u = (
      /** @type {Batch} */
      x
    ), h = r.pending;
    o && (r.update_pending_count(1), h || u.increment());
    const v = (c, d = void 0) => {
      l = null, h || u.activate(), d ? d !== Le && (i.f |= ft, $e(i, d)) : ((i.f & ft) !== 0 && (i.f ^= ft), $e(i, c)), o && (r.update_pending_count(-1), h || u.decrement()), wn();
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
function Tr(t) {
  const e = /* @__PURE__ */ qe(t);
  return e.equals = dn, e;
}
function mn(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      et(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Sr(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & N) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Pe(t) {
  var e, n = m;
  nt(Sr(t));
  try {
    mn(t), e = qn(t);
  } finally {
    nt(n);
  }
  return e;
}
function gn(t) {
  var e = Pe(t);
  if (t.equals(e) || (t.v = e, t.wv = Mn()), !At)
    if (jt !== null)
      jt.set(t, t.v);
    else {
      var n = (X || (t.f & P) !== 0) && t.deps !== null ? it : k;
      S(t, n);
    }
}
function Or(t, e, n) {
  const r = Ut() ? qe : Tr;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var s = x, i = (
    /** @type {Effect} */
    m
  ), l = Fr(), o = Cr();
  Promise.all(e.map((a) => /* @__PURE__ */ Ar(a))).then((a) => {
    s?.activate(), l();
    try {
      n([...t.map(r), ...a]);
    } catch (f) {
      (i.f & Ct) === 0 && De(f, i);
    }
    s?.deactivate(), wn();
  }).catch((a) => {
    o.error(a);
  });
}
function Fr() {
  var t = m, e = g, n = j;
  return function() {
    nt(t), Y(e), re(n);
  };
}
function wn() {
  nt(null), Y(null), re(null);
}
const Ft = /* @__PURE__ */ new Set();
let x = null, jt = null, We = /* @__PURE__ */ new Set(), ie = [];
function yn() {
  const t = (
    /** @type {() => void} */
    ie.shift()
  );
  ie.length > 0 && queueMicrotask(yn), t();
}
let vt = [], ce = null, xe = !1, Kt = !1;
class pt {
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
  #e = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #t = /* @__PURE__ */ new Set();
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
  #l = [];
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
  #o = [];
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
  process(e) {
    vt = [];
    var n = null;
    if (Ft.size > 1) {
      n = /* @__PURE__ */ new Map(), jt = /* @__PURE__ */ new Map();
      for (const [i, l] of this.current)
        n.set(i, { v: i.v, wv: i.wv }), i.v = l;
      for (const i of Ft)
        if (i !== this)
          for (const [l, o] of i.#e)
            n.has(l) || (n.set(l, { v: l.v, wv: l.wv }), l.v = o);
    }
    for (const i of e)
      this.#v(i);
    if (this.#i.length === 0 && this.#n === 0) {
      this.#h();
      var r = this.#s, s = this.#r;
      this.#s = [], this.#r = [], this.#o = [], x = null, Ye(r), Ye(s), x === null ? x = this : Ft.delete(this), this.#f?.resolve();
    } else
      this.#a(this.#s), this.#a(this.#r), this.#a(this.#o);
    if (n) {
      for (const [i, { v: l, wv: o }] of n)
        i.wv <= o && (i.v = l);
      jt = null;
    }
    for (const i of this.#i)
      Bt(i);
    for (const i of this.#l)
      Bt(i);
    this.#i = [], this.#l = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #v(e) {
    e.f ^= k;
    for (var n = e.first; n !== null; ) {
      var r = n.f, s = (r & (K | rt)) !== 0, i = s && (r & k) !== 0, l = i || (r & tt) !== 0 || this.skipped_effects.has(n);
      if (!l && n.fn !== null) {
        if (s)
          n.f ^= k;
        else if ((r & k) === 0)
          if ((r & Oe) !== 0)
            this.#r.push(n);
          else if ((r & Re) !== 0) {
            var o = n.b?.pending ? this.#l : this.#i;
            o.push(n);
          } else ve(n) && ((n.f & zt) !== 0 && this.#o.push(n), Bt(n));
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
  #a(e) {
    for (const n of e)
      ((n.f & B) !== 0 ? this.#c : this.#d).push(n), S(n, k);
    e.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    this.#e.has(e) || this.#e.set(e, n), this.current.set(e, e.v);
  }
  activate() {
    x = this;
  }
  deactivate() {
    x = null;
    for (const e of We)
      if (We.delete(e), e(), x !== null)
        break;
  }
  neuter() {
    this.#u = !0;
  }
  flush() {
    vt.length > 0 ? bn() : this.#h(), x === this && (this.#n === 0 && Ft.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #h() {
    if (!this.#u)
      for (const e of this.#t)
        e();
    this.#t.clear();
  }
  increment() {
    this.#n += 1;
  }
  decrement() {
    if (this.#n -= 1, this.#n === 0) {
      for (const e of this.#c)
        S(e, B), _t(e);
      for (const e of this.#d)
        S(e, it), _t(e);
      this.#s = [], this.#r = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    this.#t.add(e);
  }
  settled() {
    return (this.#f ??= lr()).promise;
  }
  static ensure() {
    if (x === null) {
      const e = x = new pt();
      Ft.add(x), Kt || pt.enqueue(() => {
        x === e && e.flush();
      });
    }
    return x;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    ie.length === 0 && queueMicrotask(yn), ie.unshift(e);
  }
}
function Nr(t) {
  var e = Kt;
  Kt = !0;
  try {
    for (var n; ; ) {
      if (zr(), vt.length === 0 && (x?.flush(), vt.length === 0))
        return ce = null, /** @type {T} */
        n;
      bn();
    }
  } finally {
    Kt = e;
  }
}
function bn() {
  var t = Et;
  xe = !0;
  try {
    var e = 0;
    for (Ze(!0); vt.length > 0; ) {
      var n = pt.ensure();
      if (e++ > 1e3) {
        var r, s;
        Rr();
      }
      n.process(vt), ut.clear();
    }
  } finally {
    xe = !1, Ze(t), ce = null;
  }
}
function Rr() {
  try {
    pr();
  } catch (t) {
    De(t, ce);
  }
}
function Ye(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (Ct | tt)) === 0 && ve(r)) {
        var s = x ? x.current.size : 0;
        if (Bt(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? On(r) : r.fn = null), x !== null && x.current.size > s && (r.f & Ne) !== 0)
          break;
      }
    }
    for (; n < e; )
      _t(t[n++]);
  }
}
function _t(t) {
  for (var e = ce = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (xe && e === m && (n & zt) !== 0)
      return;
    if ((n & (rt | K)) !== 0) {
      if ((n & k) === 0) return;
      e.f ^= k;
    }
  }
  vt.push(e);
}
const ut = /* @__PURE__ */ new Map();
function Be(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: un,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Q(t, e) {
  const n = Be(t);
  return Qr(n), n;
}
// @__NO_SIDE_EFFECTS__
function xn(t, e = !1, n = !0) {
  const r = Be(t);
  return e || (r.equals = dn), le && n && j !== null && j.l !== null && (j.l.s ??= []).push(r), r;
}
function V(t, e, n = !1) {
  g !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!U || (g.f & Ue) !== 0) && Ut() && (g.f & (N | zt | Re | Ue)) !== 0 && !Z?.includes(t) && wr();
  let r = n ? qt(e) : e;
  return $e(t, r);
}
function $e(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    At ? ut.set(t, e) : ut.set(t, n), t.v = e;
    var r = pt.ensure();
    r.capture(t, n), (t.f & N) !== 0 && ((t.f & B) !== 0 && Pe(
      /** @type {Derived} */
      t
    ), S(t, (t.f & P) === 0 ? k : it)), t.wv = Mn(), $n(t, B), Ut() && m !== null && (m.f & k) !== 0 && (m.f & (K | rt)) === 0 && (q === null ? Xr([t]) : q.push(t));
  }
  return e;
}
function me(t) {
  V(t, t.v + 1);
}
function $n(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Ut(), s = n.length, i = 0; i < s; i++) {
      var l = n[i], o = l.f;
      if (!(!r && l === m)) {
        var a = (o & B) === 0;
        a && S(l, e), (o & N) !== 0 ? $n(
          /** @type {Derived} */
          l,
          it
        ) : a && _t(
          /** @type {Effect} */
          l
        );
      }
    }
}
function qt(t) {
  if (typeof t != "object" || t === null || Pt in t)
    return t;
  const e = an(t);
  if (e !== nr && e !== rr)
    return t;
  var n = /* @__PURE__ */ new Map(), r = on(t), s = /* @__PURE__ */ Q(0), i = ct, l = (o) => {
    if (ct === i)
      return o();
    var a = g, f = ct;
    Y(null), Je(i);
    var u = o();
    return Y(a), Je(f), u;
  };
  return r && n.set("length", /* @__PURE__ */ Q(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, a, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && mr();
        var u = n.get(a);
        return u === void 0 ? u = l(() => {
          var h = /* @__PURE__ */ Q(f.value);
          return n.set(a, h), h;
        }) : V(u, f.value, !0), !0;
      },
      deleteProperty(o, a) {
        var f = n.get(a);
        if (f === void 0) {
          if (a in o) {
            const u = l(() => /* @__PURE__ */ Q(E));
            n.set(a, u), me(s);
          }
        } else
          V(f, E), me(s);
        return !0;
      },
      get(o, a, f) {
        if (a === Pt)
          return t;
        var u = n.get(a), h = a in o;
        if (u === void 0 && (!h || $t(o, a)?.writable) && (u = l(() => {
          var c = qt(h ? o[a] : E), d = /* @__PURE__ */ Q(c);
          return d;
        }), n.set(a, u)), u !== void 0) {
          var v = W(u);
          return v === E ? void 0 : v;
        }
        return Reflect.get(o, a, f);
      },
      getOwnPropertyDescriptor(o, a) {
        var f = Reflect.getOwnPropertyDescriptor(o, a);
        if (f && "value" in f) {
          var u = n.get(a);
          u && (f.value = W(u));
        } else if (f === void 0) {
          var h = n.get(a), v = h?.v;
          if (h !== void 0 && v !== E)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return f;
      },
      has(o, a) {
        if (a === Pt)
          return !0;
        var f = n.get(a), u = f !== void 0 && f.v !== E || Reflect.has(o, a);
        if (f !== void 0 || m !== null && (!u || $t(o, a)?.writable)) {
          f === void 0 && (f = l(() => {
            var v = u ? qt(o[a]) : E, c = /* @__PURE__ */ Q(v);
            return c;
          }), n.set(a, f));
          var h = W(f);
          if (h === E)
            return !1;
        }
        return u;
      },
      set(o, a, f, u) {
        var h = n.get(a), v = a in o;
        if (r && a === "length")
          for (var c = f; c < /** @type {Source<number>} */
          h.v; c += 1) {
            var d = n.get(c + "");
            d !== void 0 ? V(d, E) : c in o && (d = l(() => /* @__PURE__ */ Q(E)), n.set(c + "", d));
          }
        if (h === void 0)
          (!v || $t(o, a)?.writable) && (h = l(() => /* @__PURE__ */ Q(void 0)), V(h, qt(f)), n.set(a, h));
        else {
          v = h.v !== E;
          var p = l(() => qt(f));
          V(h, p);
        }
        var y = Reflect.getOwnPropertyDescriptor(o, a);
        if (y?.set && y.set.call(u, f), !v) {
          if (r && typeof a == "string") {
            var A = (
              /** @type {Source<number>} */
              n.get("length")
            ), b = Number(a);
            Number.isInteger(b) && b >= A.v && V(A, b + 1);
          }
          me(s);
        }
        return !0;
      },
      ownKeys(o) {
        W(s);
        var a = Reflect.ownKeys(o).filter((h) => {
          var v = n.get(h);
          return v === void 0 || v.v !== E;
        });
        for (var [f, u] of n)
          u.v !== E && !(f in o) && a.push(f);
        return a;
      },
      setPrototypeOf() {
        gr();
      }
    }
  );
}
var Ve, En, jn, kn;
function Ee() {
  if (Ve === void 0) {
    Ve = window, En = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    jn = $t(e, "firstChild").get, kn = $t(e, "nextSibling").get, He(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), He(n) && (n.__t = void 0);
  }
}
function de(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function kt(t) {
  return jn.call(t);
}
// @__NO_SIDE_EFFECTS__
function st(t) {
  return kn.call(t);
}
function D(t, e) {
  if (!C)
    return /* @__PURE__ */ kt(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ kt($)
  );
  return n === null && (n = $.appendChild(de())), ht(n), n;
}
function Lr(t, e) {
  if (!C) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ kt(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ st(n) : n;
  }
  return $;
}
function O(t, e = 1, n = !1) {
  let r = C ? $ : t;
  for (var s; e--; )
    s = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ st(r);
  if (!C)
    return r;
  if (n && r?.nodeType !== fr) {
    var i = de();
    return r === null ? s?.after(i) : r.before(i), ht(i), i;
  }
  return ht(r), /** @type {TemplateNode} */
  r;
}
function Mr(t) {
  t.textContent = "";
}
function Dr() {
  return !1;
}
function he(t) {
  var e = g, n = m;
  Y(null), nt(null);
  try {
    return t();
  } finally {
    Y(e), nt(n);
  }
}
function zn(t) {
  m === null && g === null && vr(), g !== null && (g.f & P) !== 0 && m === null && hr(), At && dr();
}
function qr(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function H(t, e, n, r = !0) {
  var s = m;
  s !== null && (s.f & tt) !== 0 && (t |= tt);
  var i = {
    ctx: j,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | B,
    first: null,
    fn: e,
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
      Bt(i), i.f |= ae;
    } catch (a) {
      throw et(i), a;
    }
  else e !== null && _t(i);
  var l = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & Fe) === 0;
  if (!l && r && (s !== null && qr(i, s), g !== null && (g.f & N) !== 0 && (t & rt) === 0)) {
    var o = (
      /** @type {Derived} */
      g
    );
    (o.effects ??= []).push(i);
  }
  return i;
}
function Pr(t) {
  const e = H(oe, null, !1);
  return S(e, k), e.teardown = t, e;
}
function Ge(t) {
  zn();
  var e = (
    /** @type {Effect} */
    m.f
  ), n = !g && (e & K) !== 0 && (e & ae) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      j
    );
    (r.e ??= []).push(t);
  } else
    return Cn(t);
}
function Cn(t) {
  return H(Oe | Ne, t, !1);
}
function Br(t) {
  return zn(), H(oe | Ne, t, !0);
}
function Ir(t) {
  pt.ensure();
  const e = H(rt, t, !0);
  return () => {
    et(e);
  };
}
function Hr(t) {
  pt.ensure();
  const e = H(rt, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Fn(e, () => {
      et(e), r(void 0);
    }) : (et(e), r(void 0));
  });
}
function An(t) {
  return H(Oe, t, !1);
}
function Ur(t) {
  return H(Re | Fe, t, !0);
}
function Wr(t, e = 0) {
  return H(oe | e, t, !0);
}
function Yr(t, e = [], n = []) {
  Or(e, n, (r) => {
    H(oe, () => t(...r.map(W)), !0);
  });
}
function Vr(t, e = 0) {
  var n = H(zt | e, t, !0);
  return n;
}
function je(t, e = !0) {
  return H(K, t, !0, e);
}
function Tn(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = At, r = g;
    Ke(!0), Y(null);
    try {
      e.call(null);
    } finally {
      Ke(n), Y(r);
    }
  }
}
function Sn(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && he(() => {
      s.abort(Le);
    });
    var r = n.next;
    (n.f & rt) !== 0 ? n.parent = null : et(n, e), n = r;
  }
}
function Gr(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & K) === 0 && et(e), e = n;
  }
}
function et(t, e = !0) {
  var n = !1;
  (e || (t.f & or) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (Zr(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Sn(t, e && !n), se(t, 0), S(t, Ct);
  var r = t.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Tn(t);
  var s = t.parent;
  s !== null && s.first !== null && On(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Zr(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ st(t)
    );
    t.remove(), t = n;
  }
}
function On(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Fn(t, e) {
  var n = [];
  Nn(t, n, !0), Kr(n, () => {
    et(t), e && e();
  });
}
function Kr(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var s of t)
      s.out(r);
  } else
    e();
}
function Nn(t, e, n) {
  if ((t.f & tt) === 0) {
    if (t.f ^= tt, t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || n) && e.push(l);
    for (var r = t.first; r !== null; ) {
      var s = r.next, i = (r.f & fe) !== 0 || (r.f & K) !== 0;
      Nn(r, e, i ? n : !1), r = s;
    }
  }
}
function Jr(t) {
  Rn(t, !0);
}
function Rn(t, e) {
  if ((t.f & tt) !== 0) {
    t.f ^= tt, (t.f & k) === 0 && (S(t, B), _t(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, s = (n.f & fe) !== 0 || (n.f & K) !== 0;
      Rn(n, s ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const i of t.transitions)
        (i.is_global || e) && i.in();
  }
}
let Et = !1;
function Ze(t) {
  Et = t;
}
let At = !1;
function Ke(t) {
  At = t;
}
let g = null, U = !1;
function Y(t) {
  g = t;
}
let m = null;
function nt(t) {
  m = t;
}
let Z = null;
function Qr(t) {
  g !== null && (Z === null ? Z = [t] : Z.push(t));
}
let z = null, F = 0, q = null;
function Xr(t) {
  q = t;
}
let Ln = 1, Ht = 0, ct = Ht;
function Je(t) {
  ct = t;
}
let X = !1;
function Mn() {
  return ++Ln;
}
function ve(t) {
  var e = t.f;
  if ((e & B) !== 0)
    return !0;
  if ((e & it) !== 0) {
    var n = t.deps, r = (e & P) !== 0;
    if (n !== null) {
      var s, i, l = (e & ee) !== 0, o = r && m !== null && !X, a = n.length;
      if ((l || o) && (m === null || (m.f & Ct) === 0)) {
        var f = (
          /** @type {Derived} */
          t
        ), u = f.parent;
        for (s = 0; s < a; s++)
          i = n[s], (l || !i?.reactions?.includes(f)) && (i.reactions ??= []).push(f);
        l && (f.f ^= ee), o && u !== null && (u.f & P) === 0 && (f.f ^= P);
      }
      for (s = 0; s < a; s++)
        if (i = n[s], ve(
          /** @type {Derived} */
          i
        ) && gn(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
    }
    (!r || m !== null && !X) && S(t, k);
  }
  return !1;
}
function Dn(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !Z?.includes(t))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & N) !== 0 ? Dn(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (n ? S(i, B) : (i.f & k) !== 0 && S(i, it), _t(
        /** @type {Effect} */
        i
      ));
    }
}
function qn(t) {
  var e = z, n = F, r = q, s = g, i = X, l = Z, o = j, a = U, f = ct, u = t.f;
  z = /** @type {null | Value[]} */
  null, F = 0, q = null, X = (u & P) !== 0 && (U || !Et || g === null), g = (u & (K | rt)) === 0 ? t : null, Z = null, re(t.ctx), U = !1, ct = ++Ht, t.ac !== null && (he(() => {
    t.ac.abort(Le);
  }), t.ac = null);
  try {
    t.f |= ye;
    var h = (
      /** @type {Function} */
      t.fn
    ), v = h(), c = t.deps;
    if (z !== null) {
      var d;
      if (se(t, F), c !== null && F > 0)
        for (c.length = F + z.length, d = 0; d < z.length; d++)
          c[F + d] = z[d];
      else
        t.deps = c = z;
      if (!X || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (u & N) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (d = F; d < c.length; d++)
          (c[d].reactions ??= []).push(t);
    } else c !== null && F < c.length && (se(t, F), c.length = F);
    if (Ut() && q !== null && !U && c !== null && (t.f & (N | it | B)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      q.length; d++)
        Dn(
          q[d],
          /** @type {Effect} */
          t
        );
    return s !== null && s !== t && (Ht++, q !== null && (r === null ? r = q : r.push(.../** @type {Source[]} */
    q))), (t.f & ft) !== 0 && (t.f ^= ft), v;
  } catch (p) {
    return Er(p);
  } finally {
    t.f ^= ye, z = e, F = n, q = r, g = s, X = i, Z = l, re(o), U = a, ct = f;
  }
}
function ti(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Xn.call(n, t);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = e.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  n === null && (e.f & N) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (z === null || !z.includes(e)) && (S(e, it), (e.f & (P | ee)) === 0 && (e.f ^= ee), mn(
    /** @type {Derived} **/
    e
  ), se(
    /** @type {Derived} **/
    e,
    0
  ));
}
function se(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      ti(t, n[r]);
}
function Bt(t) {
  var e = t.f;
  if ((e & Ct) === 0) {
    S(t, k);
    var n = m, r = Et;
    m = t, Et = !0;
    try {
      (e & zt) !== 0 ? Gr(t) : Sn(t), Tn(t);
      var s = qn(t);
      t.teardown = typeof s == "function" ? s : null, t.wv = Ln;
      var i;
      ln && Gn && (t.f & B) !== 0 && t.deps;
    } finally {
      Et = r, m = n;
    }
  }
}
function W(t) {
  var e = t.f, n = (e & N) !== 0;
  if (g !== null && !U) {
    var r = m !== null && (m.f & Ct) !== 0;
    if (!r && !Z?.includes(t)) {
      var s = g.deps;
      if ((g.f & ye) !== 0)
        t.rv < Ht && (t.rv = Ht, z === null && s !== null && s[F] === t ? F++ : z === null ? z = [t] : (!X || !z.includes(t)) && z.push(t));
      else {
        (g.deps ??= []).push(t);
        var i = t.reactions;
        i === null ? t.reactions = [g] : i.includes(g) || i.push(g);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var l = (
      /** @type {Derived} */
      t
    ), o = l.parent;
    o !== null && (o.f & P) === 0 && (l.f ^= P);
  }
  if (At) {
    if (ut.has(t))
      return ut.get(t);
    if (n) {
      l = /** @type {Derived} */
      t;
      var a = l.v;
      return ((l.f & k) === 0 && l.reactions !== null || Pn(l)) && (a = Pe(l)), ut.set(l, a), a;
    }
  } else if (n) {
    if (l = /** @type {Derived} */
    t, jt?.has(l))
      return jt.get(l);
    ve(l) && gn(l);
  }
  if ((t.f & ft) !== 0)
    throw t.v;
  return t.v;
}
function Pn(t) {
  if (t.v === E) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (ut.has(e) || (e.f & N) !== 0 && Pn(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Ie(t) {
  var e = U;
  try {
    return U = !0, t();
  } finally {
    U = e;
  }
}
const ei = -7169;
function S(t, e) {
  t.f = t.f & ei | e;
}
function ni(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Pt in t)
      ke(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Pt in n && ke(n);
      }
  }
}
function ke(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        ke(t[r], e);
      } catch {
      }
    const n = an(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = er(n);
      for (let s in r) {
        const i = r[s].get;
        if (i)
          try {
            i.call(t);
          } catch {
          }
      }
    }
  }
}
const Bn = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Set();
function ri(t) {
  for (var e = 0; e < t.length; e++)
    Bn.add(t[e]);
  for (var n of ze)
    n(t);
}
let Qe = null;
function Vt(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, s = t.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || t.target
  );
  Qe = t;
  var l = 0, o = Qe === t && t.__root;
  if (o) {
    var a = s.indexOf(o);
    if (a !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var f = s.indexOf(e);
    if (f === -1)
      return;
    a <= f && (l = a);
  }
  if (i = /** @type {Element} */
  s[l] || t.target, i !== e) {
    dt(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var u = g, h = m;
    Y(null), nt(null);
    try {
      for (var v, c = []; i !== null; ) {
        var d = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var p = i["__" + r];
          if (p != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === i))
            if (on(p)) {
              var [y, ...A] = p;
              y.apply(i, [t, ...A]);
            } else
              p.call(i, t);
        } catch (b) {
          v ? c.push(b) : v = b;
        }
        if (t.cancelBubble || d === e || d === null)
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
      t.__root = e, delete t.currentTarget, Y(u), nt(h);
    }
  }
}
function ii(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Jt(t, e) {
  var n = (
    /** @type {Effect} */
    m
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Tt(t, e) {
  var n = (e & Jn) !== 0, r = (e & Qn) !== 0, s, i = !t.startsWith("<!>");
  return () => {
    if (C)
      return Jt($, null), $;
    s === void 0 && (s = ii(i ? t : "<!>" + t), n || (s = /** @type {Node} */
    /* @__PURE__ */ kt(s)));
    var l = (
      /** @type {TemplateNode} */
      r || En ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ kt(l)
      ), a = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      Jt(o, a);
    } else
      Jt(l, l);
    return l;
  };
}
function at(t, e) {
  if (C) {
    m.nodes_end = $, Me();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const si = ["touchstart", "touchmove"];
function li(t) {
  return si.includes(t);
}
let Ce = !0;
function oi(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function In(t, e) {
  return Hn(t, e);
}
function ai(t, e) {
  Ee(), e.intro = e.intro ?? !1;
  const n = e.target, r = C, s = $;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ kt(n)
    ); i && (i.nodeType !== ne || /** @type {Comment} */
    i.data !== nn); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ st(i);
    if (!i)
      throw xt;
    bt(!0), ht(
      /** @type {Comment} */
      i
    ), Me();
    const l = Hn(t, { ...e, anchor: i });
    if ($ === null || $.nodeType !== ne || /** @type {Comment} */
    $.data !== sn)
      throw ue(), xt;
    return bt(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== xt && console.warn("Failed to hydrate: ", l), e.recover === !1 && _r(), Ee(), Mr(n), bt(!1), In(t, e);
  } finally {
    bt(r), ht(s);
  }
}
const gt = /* @__PURE__ */ new Map();
function Hn(t, { target: e, anchor: n, props: r = {}, events: s, context: i, intro: l = !0 }) {
  Ee();
  var o = /* @__PURE__ */ new Set(), a = (h) => {
    for (var v = 0; v < h.length; v++) {
      var c = h[v];
      if (!o.has(c)) {
        o.add(c);
        var d = li(c);
        e.addEventListener(c, Vt, { passive: d });
        var p = gt.get(c);
        p === void 0 ? (document.addEventListener(c, Vt, { passive: d }), gt.set(c, 1)) : gt.set(c, p + 1);
      }
    }
  };
  a(tr(Bn)), ze.add(a);
  var f = void 0, u = Hr(() => {
    var h = n ?? e.appendChild(de());
    return je(() => {
      if (i) {
        hn({});
        var v = (
          /** @type {ComponentContext} */
          j
        );
        v.c = i;
      }
      s && (r.$$events = s), C && Jt(
        /** @type {TemplateNode} */
        h,
        null
      ), Ce = l, f = t(h, r) || {}, Ce = !0, C && (m.nodes_end = $), i && vn();
    }), () => {
      for (var v of o) {
        e.removeEventListener(v, Vt);
        var c = (
          /** @type {number} */
          gt.get(v)
        );
        --c === 0 ? (document.removeEventListener(v, Vt), gt.delete(v)) : gt.set(v, c);
      }
      ze.delete(a), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return Ae.set(f, u), f;
}
let Ae = /* @__PURE__ */ new WeakMap();
function fi(t, e) {
  const n = Ae.get(t);
  return n ? (Ae.delete(t), n(e)) : Promise.resolve();
}
function Nt(t, e, n = !1) {
  C && Me();
  var r = t, s = null, i = null, l = E, o = n ? fe : 0, a = !1;
  const f = (c, d = !0) => {
    a = !0, v(d, c);
  };
  var u = null;
  function h() {
    u !== null && (u.lastChild.remove(), r.before(u), u = null);
    var c = l ? s : i, d = l ? i : s;
    c && Jr(c), d && Fn(d, () => {
      l ? i = null : s = null;
    });
  }
  const v = (c, d) => {
    if (l === (l = c)) return;
    let p = !1;
    if (C) {
      const mt = xr(r) === rn;
      !!l === mt && (r = br(), ht(r), bt(!1), p = !0);
    }
    var y = Dr(), A = r;
    if (y && (u = document.createDocumentFragment(), u.append(A = de())), l ? s ??= d && je(() => d(A)) : i ??= d && je(() => d(A)), y) {
      var b = (
        /** @type {Batch} */
        x
      ), lt = l ? s : i, J = l ? i : s;
      lt && b.skipped_effects.delete(lt), J && b.skipped_effects.add(J), b.add_callback(h);
    } else
      h();
    p && bt(!0);
  };
  Vr(() => {
    a = !1, e(f), a || v(null, null);
  }, o), C && (r = $);
}
function ui(t, e) {
  An(() => {
    var n = t.getRootNode(), r = (
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
    if (!r.querySelector("#" + e.hash)) {
      const s = document.createElement("style");
      s.id = e.hash, s.textContent = e.code, r.appendChild(s);
    }
  });
}
const ci = () => performance.now(), G = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => ci(),
  tasks: /* @__PURE__ */ new Set()
};
function Un() {
  const t = G.now();
  G.tasks.forEach((e) => {
    e.c(t) || (G.tasks.delete(e), e.f());
  }), G.tasks.size !== 0 && G.tick(Un);
}
function di(t) {
  let e;
  return G.tasks.size === 0 && G.tick(Un), {
    promise: new Promise((n) => {
      G.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      G.tasks.delete(e);
    }
  };
}
function Gt(t, e) {
  he(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function hi(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Xe(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [s, i] = r.split(":");
    if (!s || i === void 0) break;
    const l = hi(s.trim());
    e[l] = i.trim();
  }
  return e;
}
const vi = (t) => t;
function ge(t, e, n, r) {
  var s = (t & Kn) !== 0, i = "both", l, o = e.inert, a = e.style.overflow, f, u;
  function h() {
    return he(() => l ??= n()(e, r?.() ?? /** @type {P} */
    {}, {
      direction: i
    }));
  }
  var v = {
    is_global: s,
    in() {
      e.inert = o, Gt(e, "introstart"), f = Te(e, h(), u, 1, () => {
        Gt(e, "introend"), f?.abort(), f = l = void 0, e.style.overflow = a;
      });
    },
    out(y) {
      e.inert = !0, Gt(e, "outrostart"), u = Te(e, h(), f, 0, () => {
        Gt(e, "outroend"), y?.();
      });
    },
    stop: () => {
      f?.abort(), u?.abort();
    }
  }, c = (
    /** @type {Effect} */
    m
  );
  if ((c.transitions ??= []).push(v), Ce) {
    var d = s;
    if (!d) {
      for (var p = (
        /** @type {Effect | null} */
        c.parent
      ); p && (p.f & fe) !== 0; )
        for (; (p = p.parent) && (p.f & zt) === 0; )
          ;
      d = !p || (p.f & ae) !== 0;
    }
    d && An(() => {
      Ie(() => v.in());
    });
  }
}
function Te(t, e, n, r, s) {
  var i = r === 1;
  if (ir(e)) {
    var l, o = !1;
    return kr(() => {
      if (!o) {
        var y = e({ direction: i ? "in" : "out" });
        l = Te(t, y, n, r, s);
      }
    }), {
      abort: () => {
        o = !0, l?.abort();
      },
      deactivate: () => l.deactivate(),
      reset: () => l.reset(),
      t: () => l.t()
    };
  }
  if (n?.deactivate(), !e?.duration)
    return s(), {
      abort: I,
      deactivate: I,
      reset: I,
      t: () => r
    };
  const { delay: a = 0, css: f, tick: u, easing: h = vi } = e;
  var v = [];
  if (i && n === void 0 && (u && u(0, 1), f)) {
    var c = Xe(f(0, 1));
    v.push(c, c);
  }
  var d = () => 1 - r, p = t.animate(v, { duration: a, fill: "forwards" });
  return p.onfinish = () => {
    p.cancel();
    var y = n?.t() ?? 1 - r;
    n?.abort();
    var A = r - y, b = (
      /** @type {number} */
      e.duration * Math.abs(A)
    ), lt = [];
    if (b > 0) {
      var J = !1;
      if (f)
        for (var mt = Math.ceil(b / 16.666666666666668), St = 0; St <= mt; St += 1) {
          var Yt = y + A * h(St / mt), _ = Xe(f(Yt, 1 - Yt));
          lt.push(_), J ||= _.overflow === "hidden";
        }
      J && (t.style.overflow = "hidden"), d = () => {
        var w = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return y + A * h(w / b);
      }, u && di(() => {
        if (p.playState !== "running") return !1;
        var w = d();
        return u(w, 1 - w), !0;
      });
    }
    p = t.animate(lt, { duration: b, fill: "forwards" }), p.onfinish = () => {
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
function pi(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    j
  ), n = e.l.u;
  if (!n) return;
  let r = () => ni(e.s);
  if (t) {
    let s = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const l = /* @__PURE__ */ qe(() => {
      let o = !1;
      const a = e.s;
      for (const f in a)
        a[f] !== i[f] && (i[f] = a[f], o = !0);
      return o && s++, s;
    });
    r = () => W(l);
  }
  n.b.length && Br(() => {
    tn(e, r), te(n.b);
  }), Ge(() => {
    const s = Ie(() => n.m.map(sr));
    return () => {
      for (const i of s)
        typeof i == "function" && i();
    };
  }), n.a.length && Ge(() => {
    tn(e, r), te(n.a);
  });
}
function tn(t, e) {
  if (t.l.s)
    for (const n of t.l.s) W(n);
  e();
}
function Wn(t, e, n) {
  if (t == null)
    return e(void 0), I;
  const r = Ie(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const wt = [];
function Wt(t, e = I) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function s(o) {
    if (cn(t, o) && (t = o, n)) {
      const a = !wt.length;
      for (const f of r)
        f[1](), wt.push(f, t);
      if (a) {
        for (let f = 0; f < wt.length; f += 2)
          wt[f][0](wt[f + 1]);
        wt.length = 0;
      }
    }
  }
  function i(o) {
    s(o(
      /** @type {T} */
      t
    ));
  }
  function l(o, a = I) {
    const f = [o, a];
    return r.add(f), r.size === 1 && (n = e(s, i) || I), o(
      /** @type {T} */
      t
    ), () => {
      r.delete(f), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: i, subscribe: l };
}
function _i(t) {
  let e;
  return Wn(t, (n) => e = n)(), e;
}
let Se = Symbol();
function Rt(t, e, n) {
  const r = n[e] ??= {
    store: null,
    source: /* @__PURE__ */ xn(void 0),
    unsubscribe: I
  };
  if (r.store !== t && !(Se in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = I;
    else {
      var s = !0;
      r.unsubscribe = Wn(t, (i) => {
        s ? r.source.v = i : V(r.source, i);
      }), s = !1;
    }
  return t && Se in n ? _i(t) : W(r.source);
}
function mi() {
  const t = {};
  function e() {
    Pr(() => {
      for (var n in t)
        t[n].unsubscribe();
      dt(t, Se, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function gi(t) {
  return new wi(t);
}
class wi {
  /** @type {any} */
  #e;
  /** @type {Record<string, any>} */
  #t;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    var n = /* @__PURE__ */ new Map(), r = (i, l) => {
      var o = /* @__PURE__ */ xn(l, !1, !1);
      return n.set(i, o), o;
    };
    const s = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(i, l) {
          return W(n.get(l) ?? r(l, Reflect.get(i, l)));
        },
        has(i, l) {
          return l === ar ? !0 : (W(n.get(l) ?? r(l, Reflect.get(i, l))), Reflect.has(i, l));
        },
        set(i, l, o) {
          return V(n.get(l) ?? r(l, o), o), Reflect.set(i, l, o);
        }
      }
    );
    this.#t = (e.hydrate ? ai : In)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: s,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && Nr(), this.#e = s.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || dt(this, i, {
        get() {
          return this.#t[i];
        },
        /** @param {any} value */
        set(l) {
          this.#t[i] = l;
        },
        enumerable: !0
      });
    this.#t.$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(s, i);
    }, this.#t.$destroy = () => {
      fi(this.#t);
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    this.#t.$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    this.#e[e] = this.#e[e] || [];
    const r = (...s) => n.call(this, ...s);
    return this.#e[e].push(r), () => {
      this.#e[e] = this.#e[e].filter(
        /** @param {any} fn */
        (s) => s !== r
      );
    };
  }
  $destroy() {
    this.#t.$destroy();
  }
}
let Yn;
typeof HTMLElement == "function" && (Yn = class extends HTMLElement {
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
  constructor(t, e, n) {
    super(), this.$$ctor = t, this.$$s = e, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, e, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(e), this.$$c) {
      const r = this.$$c.$on(t, e);
      this.$$l_u.set(e, r);
    }
    super.addEventListener(t, e, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, e, n) {
    if (super.removeEventListener(t, e, n), this.$$c) {
      const r = this.$$l_u.get(e);
      r && (r(), this.$$l_u.delete(e));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return (s) => {
          const i = document.createElement("slot");
          r !== "default" && (i.name = r), at(s, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, n = yi(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = !0) : e[r] = t(r));
      for (const r of this.attributes) {
        const s = this.$$g_p(r.name);
        s in this.$$d || (this.$$d[s] = Qt(s, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = gi({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = Ir(() => {
        Wr(() => {
          this.$$r = !0;
          for (const r of Xt(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const s = Qt(
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
  attributeChangedCallback(t, e, n) {
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Qt(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return Xt(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function Qt(t, e, n, r) {
  const s = n[t]?.type;
  if (e = s === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !n[t])
    return e;
  if (r === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      // conversion already handled above
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function yi(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function bi(t, e, n, r, s, i) {
  let l = class extends Yn {
    constructor() {
      super(t, n, s), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Xt(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return Xt(e).forEach((o) => {
    dt(l.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(a) {
        a = Qt(o, a, e), this.$$d[o] = a;
        var f = this.$$c;
        if (f) {
          var u = $t(f, o)?.get;
          u ? f[o] = a : f.$set({ [o]: a });
        }
      }
    });
  }), r.forEach((o) => {
    dt(l.prototype, o, {
      get() {
        return this.$$c?.[o];
      }
    });
  }), t.element = /** @type {any} */
  l, l;
}
function xi(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function en(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function we(t, { delay: e = 0, duration: n = 400, easing: r = xi, x: s = 0, y: i = 0, opacity: l = 0 } = {}) {
  const o = getComputedStyle(t), a = +o.opacity, f = o.transform === "none" ? "" : o.transform, u = a * (1 - l), [h, v] = en(s), [c, d] = en(i);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (p, y) => `
			transform: ${f} translate(${(1 - p) * h}${v}, ${(1 - p) * c}${d});
			opacity: ${a - u * y}`
  };
}
const Lt = Wt(!0), yt = Wt(!1), Zt = Wt(!1), Mt = Wt(!1), Dt = Wt(!1);
var $i = (t, e) => t.key === "Enter" && e, Ei = /* @__PURE__ */ Tt('<div class="chat-icon svelte-1j0tmzl" aria-live="polite" aria-label="Chat" role="button" tabindex="0"><svg width="75" height="68" viewBox="0 0 75 68" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_8673_2670)"><ellipse cx="37.5002" cy="30" rx="25.1296" ry="21.6667" fill="white"></ellipse><path d="M37.5002 4C21.2078 4 8 15.6409 8 30.0002C8 37.3989 11.5062 44.0755 17.1343 48.81C17.0623 51.0675 16.2932 53.302 14.9482 55.0939C17.5558 54.9875 20.1101 53.9229 22.0741 52.1664C26.5625 54.598 31.8457 56.0004 37.5002 56.0004C53.7926 56.0004 67.0004 44.3595 67.0004 30.0002C67.0004 15.6409 53.7926 4 37.5002 4ZM55.8352 42.599C54.748 43.8262 53.1989 44.516 51.5813 44.516H23.4191C21.8015 44.516 20.2524 43.8262 19.1652 42.599C16.0867 39.1239 14.2522 34.7507 14.2522 29.9998C14.2522 25.249 16.0863 20.8761 19.1648 17.401C22.5117 13.622 27.3739 10.5 37.5 10.5C45.948 10.5 52.7599 13.9097 55.8733 17.4436C58.9292 20.9115 60.7482 25.2685 60.7482 29.9994C60.7482 34.7303 58.9137 39.1239 55.8352 42.599Z" fill="url(#paint0_linear_8673_2670)"></path><path d="M31.2311 29.1936C30.3741 30.545 29.1376 29.1936 26.5542 29.1936C23.9707 29.1936 22.7346 30.545 21.8776 29.1936C21.0482 27.8852 23.3365 24.6578 26.5542 24.6578C29.7718 24.6578 32.0602 27.8856 31.2311 29.1936Z" fill="#46359D"></path><path d="M53.1223 29.1936C52.2653 30.545 51.0287 29.1936 48.4453 29.1936C45.8618 29.1936 44.6257 30.545 43.7687 29.1936C42.9393 27.8852 45.2276 24.6578 48.4453 24.6578C51.6629 24.6578 53.9513 27.8856 53.1223 29.1936Z" fill="#46359D"></path><path d="M37.4996 35.3421C35.6966 35.3421 34.5071 33.8776 34.4573 33.8155C34.1879 33.4777 34.2365 32.9798 34.5662 32.7038C34.8959 32.4278 35.382 32.4776 35.6515 32.8153C35.6565 32.8213 36.4381 33.7621 37.4996 33.7621C38.5612 33.7621 39.3427 32.8213 39.3505 32.8118C39.62 32.474 40.1045 32.4258 40.4342 32.7018C40.7639 32.9779 40.8114 33.4773 40.5415 33.8151C40.4918 33.8776 39.3023 35.3417 37.4992 35.3417L37.4996 35.3421Z" fill="#46359D"></path></g><defs><filter id="filter0_d_8673_2670" x="0" y="0" width="75.0005" height="68.0004" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8673_2670"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8673_2670" result="shape"></feBlend></filter><linearGradient id="paint0_linear_8673_2670" x1="67.0004" y1="30.0002" x2="8" y2="30.0002" gradientUnits="userSpaceOnUse"><stop stop-color="#99A1E3"></stop><stop offset="0.129808" stop-color="#858EDC"></stop><stop offset="0.389423" stop-color="#635EBA"></stop><stop offset="1" stop-color="#43319A"></stop></linearGradient></defs></svg></div>'), ji = (t, e) => t.key === "Enter" && e, ki = (t, e) => t.key === "Enter" && e, zi = /* @__PURE__ */ Tt(`<div class="welcome-box svelte-1j0tmzl"><div class="welcome svelte-1j0tmzl"><h1 class="svelte-1j0tmzl">Welcome to our website!</h1> <p class="svelte-1j0tmzl">Nice to meet you! If you have any question about our services, feel free to contact us.</p></div> <div class="welcome-2 svelte-1j0tmzl"><div class="faq svelte-1j0tmzl" aria-details="faq option" role="button" tabindex="0">FAQ</div> <div class="talk svelte-1j0tmzl" aria-details="chat option" role="button" tabindex="0">Let's Talk</div></div></div>`), Ci = (t, e) => t.key === "Enter" && e, Ai = /* @__PURE__ */ Tt(' <div class="faq-box svelte-1j0tmzl"><div class="faq-options svelte-1j0tmzl"><ul class="faq-options-li svelte-1j0tmzl"><li class="svelte-1j0tmzl">How do I apply?</li> <li class="svelte-1j0tmzl">What courses do you offer?</li> <li class="svelte-1j0tmzl">When do applications close?</li> <li class="svelte-1j0tmzl">Where is the campus located?</li> <li class="svelte-1j0tmzl">Talk to someone?</li> <div id="talk-btn" aria-details="chat option" role="button" tabindex="0" class="svelte-1j0tmzl">Can I talk to someone?</div></ul></div></div>', 1), Ti = (t) => t.key === "Enter" && console.log("recorded"), Si = () => console.log("recorded"), Oi = /* @__PURE__ */ Tt(`<div class="chat-dialog svelte-1j0tmzl"><div class="chat-header svelte-1j0tmzl"><div class="svelte-1j0tmzl"><h1 class="svelte-1j0tmzl">ChatFlow</h1> <p>A live chat interface that allows for seamless, natural communication and connection.</p></div> <div class="cross svelte-1j0tmzl" role="button" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg></div></div> <div class="chat-body svelte-1j0tmzl"><p class="bot-msg svelte-1j0tmzl">Hi! How Can I help You?</p> <div class="chat-options svelte-1j0tmzl"><ul id="chat-options" class="svelte-1j0tmzl"><li class="svelte-1j0tmzl">How do I apply?</li> <li class="svelte-1j0tmzl">What courses do you offer?</li> <li class="svelte-1j0tmzl">When do applications close?</li> <li class="svelte-1j0tmzl">Where is the campus located?</li> <li class="svelte-1j0tmzl">Talk to someone?</li></ul></div> <div class="input svelte-1j0tmzl"><input type="text" placeholder="Let's share something" class="svelte-1j0tmzl"/> <button class="send svelte-1j0tmzl" tabindex="0"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1j0tmzl"><path d="M0.176834 0.118496C0.329527 -0.0108545 0.544637 -0.0367025 0.723627 0.0527924L13.7236 6.55279C13.893 6.63748 14 6.81061 14 7C14 7.18939 13.893 7.36252 13.7236 7.44721L0.723627 13.9472C0.544637 14.0367 0.329527 14.0109 0.176834 13.8815C0.0241407 13.7522 -0.0367196 13.5442 0.0221319 13.353L1.97688 7L0.0221319 0.647048C-0.0367196 0.455781 0.0241407 0.247847 0.176834 0.118496ZM2.8693 7.5L1.32155 12.5302L12.382 7L1.32155 1.46979L2.8693 6.5H8.50001C8.77615 6.5 9.00001 6.72386 9.00001 7C9.00001 7.27614 8.77615 7.5 8.50001 7.5H2.8693Z" fill="white"></path></svg></button></div></div></div>`), Fi = /* @__PURE__ */ Tt(`<div class="chat-dialog svelte-1j0tmzl"><div class="chat-header svelte-1j0tmzl"><div class="svelte-1j0tmzl"><h1 class="svelte-1j0tmzl">ChatFlow</h1> <p>A live chat interface that allows for seamless, natural communication and connection.</p></div> <div class="cross svelte-1j0tmzl" role="button" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg></div></div> <div class="chat-body svelte-1j0tmzl"><p class="bot-msg svelte-1j0tmzl">Thanks for joining us! Let's start by getting your name.</p> <ul class="user-msg svelte-1j0tmzl"><li class="svelte-1j0tmzl">John</li></ul> <div class="input svelte-1j0tmzl"><input type="text" placeholder="Let's share something" class="svelte-1j0tmzl"/> <button class="send svelte-1j0tmzl"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1j0tmzl"><path d="M0.176834 0.118496C0.329527 -0.0108545 0.544637 -0.0367025 0.723627 0.0527924L13.7236 6.55279C13.893 6.63748 14 6.81061 14 7C14 7.18939 13.893 7.36252 13.7236 7.44721L0.723627 13.9472C0.544637 14.0367 0.329527 14.0109 0.176834 13.8815C0.0241407 13.7522 -0.0367196 13.5442 0.0221319 13.353L1.97688 7L0.0221319 0.647048C-0.0367196 0.455781 0.0241407 0.247847 0.176834 0.118496ZM2.8693 7.5L1.32155 12.5302L12.382 7L1.32155 1.46979L2.8693 6.5H8.50001C8.77615 6.5 9.00001 6.72386 9.00001 7C9.00001 7.27614 8.77615 7.5 8.50001 7.5H2.8693Z" fill="white"></path></svg></button></div></div></div>`), Ni = /* @__PURE__ */ Tt("<div><!> <!> <!> <!> <!></div>");
const Ri = {
  hash: "svelte-1j0tmzl",
  code: `\r
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');\r
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&display=swap');\r
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');\r
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&family=Questrial&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');:host {all:initial;position:fixed;bottom:1rem;right:1rem;z-index:9999;}.chat-icon.svelte-1j0tmzl {bottom:20px;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 8px rgba(0, 0, 0, 0.15);box-sizing:border-box;transition:all 0.3s ease-in-out;position:relative;}.chat-icon.svelte-1j0tmzl:hover {transform:scale(1.05);box-shadow:0 6px 12px rgba(0, 0, 0, 0.2);}.chat-dialog.svelte-1j0tmzl {position:absolute;bottom:90px;right:5%;width:400px;height:618px;background:white;border-radius:15px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.2);display:flex;flex-direction:column;overflow:hidden;}.welcome-box.svelte-1j0tmzl {position:fixed;right:1%;bottom:90px;display:flex;flex-direction:column;gap:10px;margin-bottom:10px;font-family:Figtree;font-weight:700;font-style:Bold;font-size:16px;line-height:24px;letter-spacing:0%;max-height:calc((248-60)px);}.welcome.svelte-1j0tmzl {box-sizing:border-box;max-width:290px;max-height:124px;background:#E9E9E9;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;border-radius:24px 24px 0 24px;display:flex;flex-direction:column;}.welcome.svelte-1j0tmzl h1:where(.svelte-1j0tmzl){font-size:16px;margin:0;padding:0;}.welcome.svelte-1j0tmzl p:where(.svelte-1j0tmzl){box-sizing:border-box;font-family:"Figtree";font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;padding:0;margin:0;}.welcome-2.svelte-1j0tmzl {height:44px;display:flex;gap:10px;}.faq.svelte-1j0tmzl,.talk.svelte-1j0tmzl{background:linear-gradient(270deg, #A7BEFE 0%, #43319A 100%);height:44px;width:140px;display:flex;justify-content:center;align-items:center;border-radius:20px;color:white;font-size:16px;cursor:pointer;transition:all 0.2s ease-in-out;}.faq.svelte-1j0tmzl:hover {transform:scale(1.02);}.talk.svelte-1j0tmzl:hover{transform:scale(1.02);}.chat-header.svelte-1j0tmzl {background:linear-gradient(270deg, #A7BEFE 0%, #6E6EC5 36.11%, #5347AA 64.88%, #43319A 100%);;\rpadding: 0.8rem;display:flex;justify-content:space-between;}.chat-header.svelte-1j0tmzl div:where(.svelte-1j0tmzl) h1:where(.svelte-1j0tmzl){font-family:'source sans 3', sans-serif;font-weight:700;font-style:Bold;font-size:30px;\r
    /* line-height: 100%; */letter-spacing:0%;}.chat-header.svelte-1j0tmzl div:where(.svelte-1j0tmzl){color:white;font-family:'Questrial', sans-serif;font-weight:300;font-size:12px;line-height:16px;letter-spacing:22%;display:inline;}.cross.svelte-1j0tmzl{cursor:pointer;padding-top:1px;font-size:15rem;}.chat-body.svelte-1j0tmzl {flex:1;position:relative;height:inherit;padding:0.5rem;padding-top:169px;padding-bottom:1.5rem;overflow-y:auto;}.chat-options.svelte-1j0tmzl{padding:0.5rem;}#chat-options.svelte-1j0tmzl{padding:0.5rem;outline:none;border-radius:10px;position:absolute;bottom:10%;right:0%;text-decoration:none;display:flex;flex-direction:column;gap:0.5rem;align-items:flex-end;}#chat-options.svelte-1j0tmzl li:where(.svelte-1j0tmzl){padding:0.3rem;border:1px solid #A3B9FA;color:#6D6CC4;border-radius:16px;list-style:none;padding-right:12px;padding-left:12px;width:130;height:32;gap:8px;font-family:Inter;font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;vertical-align:middle;transition:border ease-in-out;}#chat-options.svelte-1j0tmzl li:where(.svelte-1j0tmzl):hover{border:2px solid #A3B9FA;cursor:pointer;}.input.svelte-1j0tmzl{position:absolute;bottom:0;left:0;margin:12px;border:none;width:376px;height:48px;box-sizing:border-box;border:1px solid #f0f0f0f5;border-radius:12px;display:flex;align-items:center;padding-left:12px;padding-right:12px;}.input.svelte-1j0tmzl input:where(.svelte-1j0tmzl){flex:1;height:32px;border:none;outline:none;background:transparent;}.input.svelte-1j0tmzl:focus{outline:none;}.send.svelte-1j0tmzl{background-color:#5347AA;width:32px;height:32px;display:flex;justify-content:center;align-items:center;opacity:1;border-radius:12px;border-width:1px;color:white;cursor:pointer;}.send.svelte-1j0tmzl svg:where(.svelte-1j0tmzl){width:14px;height:14px;}.bot-msg.svelte-1j0tmzl{padding:12px;display:inline-block;max-width:290px;width:fit-content;border-top-right-radius:16px;border-bottom-right-radius:16px;border-bottom-left-radius:16px;padding-top:12px;text-align:left;background-color:#F4F4F4;font-family:'Outfit', sans-serif;font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;}.faq-box.svelte-1j0tmzl{width:290px;height:324px;display:flex;flex-direction:column;position:fixed;bottom:70px;right:1%;}.faq-options.svelte-1j0tmzl {padding:0.5rem;}.faq-options-li.svelte-1j0tmzl {padding:0.5rem;border-radius:10px;position:absolute;bottom:10%;right:0%;text-decoration:none;display:flex;flex-direction:column;gap:0.5rem;align-items:flex-end;}.faq-options-li.svelte-1j0tmzl li:where(.svelte-1j0tmzl) {cursor:pointer;background-color:#E9E9E9;padding:12px 24px 12px 24px;border-radius:24px;list-style:none;font-family:'Figtree', sans-serif;font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;text-align:right;display:flex;justify-content:center;align-items:center;}.faq-options-li.svelte-1j0tmzl li:where(.svelte-1j0tmzl):hover {transform:scale(1.03);cursor:pointer;}#talk-btn.svelte-1j0tmzl {cursor:pointer;background:linear-gradient(270deg, #A7BEFE 0%, #43319A 100%);border-radius:20px;width:290px;padding:12px 16px 12px 16px;color:white;font-family:DM Sans;font-weight:700;font-size:14px;line-height:20px;letter-spacing:0%;text-align:center;display:flex;justify-content:center;align-items:center;}.user-msg.svelte-1j0tmzl{display:flex;justify-content:flex-end;}.user-msg.svelte-1j0tmzl li:where(.svelte-1j0tmzl){display:inline-block;width:fit-content;padding:5px 12px 5px 12px;border:1px solid #43319A;border-top-left-radius:16px;border-bottom-right-radius:16px;border-bottom-left-radius:16px;list-style:none;}`
};
function Li(t, e) {
  hn(e, !1), ui(t, Ri);
  const [n, r] = mi(), s = () => Rt(yt, "$open", n), i = () => Rt(Lt, "$showBot", n), l = () => Rt(Zt, "$openFaq", n), o = () => Rt(Mt, "$openChat", n), a = () => Rt(Dt, "$openAgent", n), f = () => {
    yt.update((_) => !_), Mt.set(!1), Zt.set(!1), Dt.set(!1);
  }, u = () => {
    s() && yt.update((_) => !_), Mt.update((_) => !_), Lt.set(!1);
  }, h = () => {
    s() && yt.update((_) => !_), Dt.update((_) => !_), Lt.set(!1);
  }, v = () => {
    s() && yt.update((_) => !_), Zt.update((_) => !_);
  };
  pi();
  var c = Ni(), d = D(c);
  {
    var p = (_) => {
      var w = Ei();
      w.__click = f, w.__keydown = [$i, f], at(_, w);
    };
    Nt(d, (_) => {
      i() && _(p);
    });
  }
  var y = O(d, 2);
  {
    var A = (_) => {
      var w = zi(), R = O(D(w), 2), L = D(R);
      L.__click = v, L.__keydown = [ji, v];
      var T = O(L, 2);
      T.__click = u, T.__keydown = [ki, u], M(R), M(w), ge(3, w, () => we, () => ({ y: 20, duration: 300 })), at(_, w);
    };
    Nt(y, (_) => {
      s() && _(A);
    });
  }
  var b = O(y, 2);
  {
    var lt = (_) => {
      var w = Ai(), R = Lr(w), L = O(R), T = D(L), ot = D(T), Ot = O(D(ot), 10);
      Ot.__click = h, Ot.__keydown = [Ci, h], M(ot), M(T), M(L), Yr((pe) => oi(R, `${pe ?? ""} `), [() => yt.set(!1)]), at(_, w);
    };
    Nt(b, (_) => {
      l() && s() == !1 && _(lt);
    });
  }
  var J = O(b, 2);
  {
    var mt = (_) => {
      var w = Oi(), R = D(w), L = O(D(R), 2);
      L.__click = () => {
        Mt.update((_e) => !_e), Lt.set(!0);
      }, L.__keydown = (_e) => _e.key === "enter" && Mt.update((Vn) => !Vn), M(R);
      var T = O(R, 2), ot = O(D(T), 4), Ot = D(ot);
      Ot.__keydown = [Ti];
      var pe = O(Ot, 2);
      pe.__click = [Si], M(ot), M(T), M(w), ge(3, w, () => we, () => ({ x: 20, duration: 300 })), at(_, w);
    };
    Nt(J, (_) => {
      o() && !s() && _(mt);
    });
  }
  var St = O(J, 2);
  {
    var Yt = (_) => {
      var w = Fi(), R = D(w), L = O(D(R), 2);
      L.__click = () => {
        Dt.update((T) => !T), Zt.update((T) => !T), Lt.set(!0);
      }, L.__keydown = (T) => T.key === "enter" && Dt.update((ot) => !ot), M(R), yr(2), M(w), ge(3, w, () => we, () => ({ x: 20, duration: 300 })), at(_, w);
    };
    Nt(St, (_) => {
      a() && !s() && _(Yt);
    });
  }
  M(c), at(t, c), vn(), r();
}
ri(["click", "keydown"]);
customElements.define("chat-widget", bi(Li, {}, [], [], !0));
export {
  Li as default
};
