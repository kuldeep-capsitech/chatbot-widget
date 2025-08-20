typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
let ne = !1, Wn = !1;
function Yn() {
  ne = !0;
}
Yn();
const Vn = 4, Gn = 1, Zn = 2, Xe = "[", tn = "[!", en = "]", xt = {}, j = Symbol(), nn = !1;
var rn = Array.isArray, Kn = Array.prototype.indexOf, Jn = Array.from, Zt = Object.keys, ct = Object.defineProperty, $t = Object.getOwnPropertyDescriptor, Qn = Object.getOwnPropertyDescriptors, Xn = Object.prototype, tr = Array.prototype, sn = Object.getPrototypeOf, Pe = Object.isExtensible;
function er(t) {
  return typeof t == "function";
}
const B = () => {
};
function nr(t) {
  return t();
}
function Kt(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function rr() {
  var t, e, n = new Promise((r, s) => {
    t = r, e = s;
  });
  return { promise: n, resolve: t, reject: e };
}
const L = 2, Ae = 4, re = 8, zt = 16, K = 32, nt = 64, ln = 128, P = 256, Jt = 512, z = 1024, I = 2048, rt = 4096, X = 8192, Ct = 16384, ie = 32768, se = 65536, Ie = 1 << 17, ir = 1 << 18, Te = 1 << 19, Se = 1 << 20, me = 1 << 21, Oe = 1 << 22, at = 1 << 23, Rt = Symbol("$state"), sr = Symbol("legacy props"), Fe = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), lr = 3, Qt = 8;
function or() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function ar() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function fr(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ur() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function cr(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function dr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function hr() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function vr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function pr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function _r() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function le(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let T = !1;
function bt(t) {
  T = t;
}
let $;
function dt(t) {
  if (t === null)
    throw le(), xt;
  return $ = t;
}
function Ne() {
  return dt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ it($)
  );
}
function M(t) {
  if (T) {
    if (/* @__PURE__ */ it($) !== null)
      throw le(), xt;
    $ = t;
  }
}
function mr(t = 1) {
  if (T) {
    for (var e = t, n = $; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ it(n);
    $ = n;
  }
}
function gr() {
  for (var t = 0, e = $; ; ) {
    if (e.nodeType === Qt) {
      var n = (
        /** @type {Comment} */
        e.data
      );
      if (n === en) {
        if (t === 0) return e;
        t -= 1;
      } else (n === Xe || n === tn) && (t += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ it(e)
    );
    e.remove(), e = r;
  }
}
function wr(t) {
  if (!t || t.nodeType !== Qt)
    throw le(), xt;
  return (
    /** @type {Comment} */
    t.data
  );
}
function on(t) {
  return t === this.v;
}
function an(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function fn(t) {
  return !an(t, this.v);
}
let k = null;
function Xt(t) {
  k = t;
}
function un(t, e = !1, n) {
  k = {
    p: k,
    c: null,
    e: null,
    s: t,
    x: null,
    l: ne && !e ? { s: null, u: null, $: [] } : null
  };
}
function cn(t) {
  var e = (
    /** @type {ComponentContext} */
    k
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      jn(r);
  }
  return k = e.p, /** @type {T} */
  {};
}
function qt() {
  return !ne || k !== null && k.l === null;
}
const yr = /* @__PURE__ */ new WeakMap();
function br(t) {
  var e = _;
  if (e === null)
    return g.f |= at, t;
  if ((e.f & ie) === 0) {
    if ((e.f & ln) === 0)
      throw !e.parent && t instanceof Error && dn(t), t;
    e.b.error(t);
  } else
    Re(t, e);
}
function Re(t, e) {
  for (; e !== null; ) {
    if ((e.f & ln) !== 0)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && dn(t), t;
}
function dn(t) {
  const e = yr.get(t);
  e && (ct(t, "message", {
    value: e.message
  }), ct(t, "stack", {
    value: e.stack
  }));
}
let Mt = [], ge = [];
function hn() {
  var t = Mt;
  Mt = [], Kt(t);
}
function xr() {
  var t = ge;
  ge = [], Kt(t);
}
function $r(t) {
  Mt.length === 0 && queueMicrotask(hn), Mt.push(t);
}
function Er() {
  Mt.length > 0 && hn(), ge.length > 0 && xr();
}
function jr() {
  for (var t = (
    /** @type {Effect} */
    _.b
  ); t !== null && !t.has_pending_snippet(); )
    t = t.parent;
  return t === null && or(), t;
}
// @__NO_SIDE_EFFECTS__
function Le(t) {
  var e = L | I, n = g !== null && (g.f & L) !== 0 ? (
    /** @type {Derived} */
    g
  ) : null;
  return _ === null || n !== null && (n.f & P) !== 0 ? e |= P : _.f |= Te, {
    ctx: k,
    deps: null,
    effects: null,
    equals: on,
    f: e,
    fn: t,
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
function kr(t, e) {
  let n = (
    /** @type {Effect | null} */
    _
  );
  n === null && ar();
  var r = (
    /** @type {Boundary} */
    n.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = De(
    /** @type {V} */
    j
  ), l = null, o = !g;
  return Ir(() => {
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
      l = null, h || u.activate(), d ? d !== Fe && (i.f |= at, ye(i, d)) : ((i.f & at) !== 0 && (i.f ^= at), ye(i, c)), o && (r.update_pending_count(-1), h || u.decrement()), _n();
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
function zr(t) {
  const e = /* @__PURE__ */ Le(t);
  return e.equals = fn, e;
}
function vn(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      tt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Cr(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & L) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Me(t) {
  var e, n = _;
  et(Cr(t));
  try {
    vn(t), e = Ln(t);
  } finally {
    et(n);
  }
  return e;
}
function pn(t) {
  var e = Me(t);
  if (t.equals(e) || (t.v = e, t.wv = Nn()), !At)
    if (jt !== null)
      jt.set(t, t.v);
    else {
      var n = (Q || (t.f & P) !== 0) && t.deps !== null ? rt : z;
      F(t, n);
    }
}
function Ar(t, e, n) {
  const r = qt() ? Le : zr;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var s = x, i = (
    /** @type {Effect} */
    _
  ), l = Tr(), o = jr();
  Promise.all(e.map((a) => /* @__PURE__ */ kr(a))).then((a) => {
    s?.activate(), l();
    try {
      n([...t.map(r), ...a]);
    } catch (f) {
      (i.f & Ct) === 0 && Re(f, i);
    }
    s?.deactivate(), _n();
  }).catch((a) => {
    o.error(a);
  });
}
function Tr() {
  var t = _, e = g, n = k;
  return function() {
    et(t), Y(e), Xt(n);
  };
}
function _n() {
  et(null), Y(null), Xt(null);
}
const St = /* @__PURE__ */ new Set();
let x = null, jt = null, Be = /* @__PURE__ */ new Set(), te = [];
function mn() {
  const t = (
    /** @type {() => void} */
    te.shift()
  );
  te.length > 0 && queueMicrotask(mn), t();
}
let ht = [], oe = null, we = !1, Yt = !1;
class vt {
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
    ht = [];
    var n = null;
    if (St.size > 1) {
      n = /* @__PURE__ */ new Map(), jt = /* @__PURE__ */ new Map();
      for (const [i, l] of this.current)
        n.set(i, { v: i.v, wv: i.wv }), i.v = l;
      for (const i of St)
        if (i !== this)
          for (const [l, o] of i.#e)
            n.has(l) || (n.set(l, { v: l.v, wv: l.wv }), l.v = o);
    }
    for (const i of e)
      this.#v(i);
    if (this.#i.length === 0 && this.#n === 0) {
      this.#h();
      var r = this.#s, s = this.#r;
      this.#s = [], this.#r = [], this.#o = [], x = null, He(r), He(s), x === null ? x = this : St.delete(this), this.#f?.resolve();
    } else
      this.#a(this.#s), this.#a(this.#r), this.#a(this.#o);
    if (n) {
      for (const [i, { v: l, wv: o }] of n)
        i.wv <= o && (i.v = l);
      jt = null;
    }
    for (const i of this.#i)
      Lt(i);
    for (const i of this.#l)
      Lt(i);
    this.#i = [], this.#l = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #v(e) {
    e.f ^= z;
    for (var n = e.first; n !== null; ) {
      var r = n.f, s = (r & (K | nt)) !== 0, i = s && (r & z) !== 0, l = i || (r & X) !== 0 || this.skipped_effects.has(n);
      if (!l && n.fn !== null) {
        if (s)
          n.f ^= z;
        else if ((r & z) === 0)
          if ((r & Ae) !== 0)
            this.#r.push(n);
          else if ((r & Oe) !== 0) {
            var o = n.b?.pending ? this.#l : this.#i;
            o.push(n);
          } else ue(n) && ((n.f & zt) !== 0 && this.#o.push(n), Lt(n));
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
      ((n.f & I) !== 0 ? this.#c : this.#d).push(n), F(n, z);
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
    for (const e of Be)
      if (Be.delete(e), e(), x !== null)
        break;
  }
  neuter() {
    this.#u = !0;
  }
  flush() {
    ht.length > 0 ? gn() : this.#h(), x === this && (this.#n === 0 && St.delete(this), this.deactivate());
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
        F(e, I), pt(e);
      for (const e of this.#d)
        F(e, rt), pt(e);
      this.#s = [], this.#r = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    this.#t.add(e);
  }
  settled() {
    return (this.#f ??= rr()).promise;
  }
  static ensure() {
    if (x === null) {
      const e = x = new vt();
      St.add(x), Yt || vt.enqueue(() => {
        x === e && e.flush();
      });
    }
    return x;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    te.length === 0 && queueMicrotask(mn), te.unshift(e);
  }
}
function Sr(t) {
  var e = Yt;
  Yt = !0;
  try {
    for (var n; ; ) {
      if (Er(), ht.length === 0 && (x?.flush(), ht.length === 0))
        return oe = null, /** @type {T} */
        n;
      gn();
    }
  } finally {
    Yt = e;
  }
}
function gn() {
  var t = Et;
  we = !0;
  try {
    var e = 0;
    for (Ye(!0); ht.length > 0; ) {
      var n = vt.ensure();
      if (e++ > 1e3) {
        var r, s;
        Or();
      }
      n.process(ht), ft.clear();
    }
  } finally {
    we = !1, Ye(t), oe = null;
  }
}
function Or() {
  try {
    dr();
  } catch (t) {
    Re(t, oe);
  }
}
function He(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (Ct | X)) === 0 && ue(r)) {
        var s = x ? x.current.size : 0;
        if (Lt(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? An(r) : r.fn = null), x !== null && x.current.size > s && (r.f & Se) !== 0)
          break;
      }
    }
    for (; n < e; )
      pt(t[n++]);
  }
}
function pt(t) {
  for (var e = oe = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (we && e === _ && (n & zt) !== 0)
      return;
    if ((n & (nt | K)) !== 0) {
      if ((n & z) === 0) return;
      e.f ^= z;
    }
  }
  ht.push(e);
}
const ft = /* @__PURE__ */ new Map();
function De(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: on,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function J(t, e) {
  const n = De(t);
  return Zr(n), n;
}
// @__NO_SIDE_EFFECTS__
function wn(t, e = !1, n = !0) {
  const r = De(t);
  return e || (r.equals = fn), ne && n && k !== null && k.l !== null && (k.l.s ??= []).push(r), r;
}
function V(t, e, n = !1) {
  g !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!U || (g.f & Ie) !== 0) && qt() && (g.f & (L | zt | Oe | Ie)) !== 0 && !Z?.includes(t) && _r();
  let r = n ? Nt(e) : e;
  return ye(t, r);
}
function ye(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    At ? ft.set(t, e) : ft.set(t, n), t.v = e;
    var r = vt.ensure();
    r.capture(t, n), (t.f & L) !== 0 && ((t.f & I) !== 0 && Me(
      /** @type {Derived} */
      t
    ), F(t, (t.f & P) === 0 ? z : rt)), t.wv = Nn(), yn(t, I), qt() && _ !== null && (_.f & z) !== 0 && (_.f & (K | nt)) === 0 && (q === null ? Kr([t]) : q.push(t));
  }
  return e;
}
function ve(t) {
  V(t, t.v + 1);
}
function yn(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = qt(), s = n.length, i = 0; i < s; i++) {
      var l = n[i], o = l.f;
      if (!(!r && l === _)) {
        var a = (o & I) === 0;
        a && F(l, e), (o & L) !== 0 ? yn(
          /** @type {Derived} */
          l,
          rt
        ) : a && pt(
          /** @type {Effect} */
          l
        );
      }
    }
}
function Nt(t) {
  if (typeof t != "object" || t === null || Rt in t)
    return t;
  const e = sn(t);
  if (e !== Xn && e !== tr)
    return t;
  var n = /* @__PURE__ */ new Map(), r = rn(t), s = /* @__PURE__ */ J(0), i = ut, l = (o) => {
    if (ut === i)
      return o();
    var a = g, f = ut;
    Y(null), Ge(i);
    var u = o();
    return Y(a), Ge(f), u;
  };
  return r && n.set("length", /* @__PURE__ */ J(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, a, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && vr();
        var u = n.get(a);
        return u === void 0 ? u = l(() => {
          var h = /* @__PURE__ */ J(f.value);
          return n.set(a, h), h;
        }) : V(u, f.value, !0), !0;
      },
      deleteProperty(o, a) {
        var f = n.get(a);
        if (f === void 0) {
          if (a in o) {
            const u = l(() => /* @__PURE__ */ J(j));
            n.set(a, u), ve(s);
          }
        } else
          V(f, j), ve(s);
        return !0;
      },
      get(o, a, f) {
        if (a === Rt)
          return t;
        var u = n.get(a), h = a in o;
        if (u === void 0 && (!h || $t(o, a)?.writable) && (u = l(() => {
          var c = Nt(h ? o[a] : j), d = /* @__PURE__ */ J(c);
          return d;
        }), n.set(a, u)), u !== void 0) {
          var v = W(u);
          return v === j ? void 0 : v;
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
      has(o, a) {
        if (a === Rt)
          return !0;
        var f = n.get(a), u = f !== void 0 && f.v !== j || Reflect.has(o, a);
        if (f !== void 0 || _ !== null && (!u || $t(o, a)?.writable)) {
          f === void 0 && (f = l(() => {
            var v = u ? Nt(o[a]) : j, c = /* @__PURE__ */ J(v);
            return c;
          }), n.set(a, f));
          var h = W(f);
          if (h === j)
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
            d !== void 0 ? V(d, j) : c in o && (d = l(() => /* @__PURE__ */ J(j)), n.set(c + "", d));
          }
        if (h === void 0)
          (!v || $t(o, a)?.writable) && (h = l(() => /* @__PURE__ */ J(void 0)), V(h, Nt(f)), n.set(a, h));
        else {
          v = h.v !== j;
          var p = l(() => Nt(f));
          V(h, p);
        }
        var w = Reflect.getOwnPropertyDescriptor(o, a);
        if (w?.set && w.set.call(u, f), !v) {
          if (r && typeof a == "string") {
            var S = (
              /** @type {Source<number>} */
              n.get("length")
            ), y = Number(a);
            Number.isInteger(y) && y >= S.v && V(S, y + 1);
          }
          ve(s);
        }
        return !0;
      },
      ownKeys(o) {
        W(s);
        var a = Reflect.ownKeys(o).filter((h) => {
          var v = n.get(h);
          return v === void 0 || v.v !== j;
        });
        for (var [f, u] of n)
          u.v !== j && !(f in o) && a.push(f);
        return a;
      },
      setPrototypeOf() {
        pr();
      }
    }
  );
}
var Ue, bn, xn, $n;
function be() {
  if (Ue === void 0) {
    Ue = window, bn = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    xn = $t(e, "firstChild").get, $n = $t(e, "nextSibling").get, Pe(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Pe(n) && (n.__t = void 0);
  }
}
function ae(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function kt(t) {
  return xn.call(t);
}
// @__NO_SIDE_EFFECTS__
function it(t) {
  return $n.call(t);
}
function D(t, e) {
  if (!T)
    return /* @__PURE__ */ kt(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ kt($)
  );
  return n === null && (n = $.appendChild(ae())), dt(n), n;
}
function Fr(t, e) {
  if (!T) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ kt(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ it(n) : n;
  }
  return $;
}
function N(t, e = 1, n = !1) {
  let r = T ? $ : t;
  for (var s; e--; )
    s = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ it(r);
  if (!T)
    return r;
  if (n && r?.nodeType !== lr) {
    var i = ae();
    return r === null ? s?.after(i) : r.before(i), dt(i), i;
  }
  return dt(r), /** @type {TemplateNode} */
  r;
}
function Nr(t) {
  t.textContent = "";
}
function Rr() {
  return !1;
}
function fe(t) {
  var e = g, n = _;
  Y(null), et(null);
  try {
    return t();
  } finally {
    Y(e), et(n);
  }
}
function En(t) {
  _ === null && g === null && cr(), g !== null && (g.f & P) !== 0 && _ === null && ur(), At && fr();
}
function Lr(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function H(t, e, n, r = !0) {
  var s = _;
  s !== null && (s.f & X) !== 0 && (t |= X);
  var i = {
    ctx: k,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | I,
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
      Lt(i), i.f |= ie;
    } catch (a) {
      throw tt(i), a;
    }
  else e !== null && pt(i);
  var l = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & Te) === 0;
  if (!l && r && (s !== null && Lr(i, s), g !== null && (g.f & L) !== 0 && (t & nt) === 0)) {
    var o = (
      /** @type {Derived} */
      g
    );
    (o.effects ??= []).push(i);
  }
  return i;
}
function Mr(t) {
  const e = H(re, null, !1);
  return F(e, z), e.teardown = t, e;
}
function We(t) {
  En();
  var e = (
    /** @type {Effect} */
    _.f
  ), n = !g && (e & K) !== 0 && (e & ie) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      k
    );
    (r.e ??= []).push(t);
  } else
    return jn(t);
}
function jn(t) {
  return H(Ae | Se, t, !1);
}
function Dr(t) {
  return En(), H(re | Se, t, !0);
}
function qr(t) {
  vt.ensure();
  const e = H(nt, t, !0);
  return () => {
    tt(e);
  };
}
function Pr(t) {
  vt.ensure();
  const e = H(nt, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Tn(e, () => {
      tt(e), r(void 0);
    }) : (tt(e), r(void 0));
  });
}
function kn(t) {
  return H(Ae, t, !1);
}
function Ir(t) {
  return H(Oe | Te, t, !0);
}
function Br(t, e = 0) {
  return H(re | e, t, !0);
}
function Hr(t, e = [], n = []) {
  Ar(e, n, (r) => {
    H(re, () => t(...r.map(W)), !0);
  });
}
function Ur(t, e = 0) {
  var n = H(zt | e, t, !0);
  return n;
}
function xe(t, e = !0) {
  return H(K, t, !0, e);
}
function zn(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = At, r = g;
    Ve(!0), Y(null);
    try {
      e.call(null);
    } finally {
      Ve(n), Y(r);
    }
  }
}
function Cn(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && fe(() => {
      s.abort(Fe);
    });
    var r = n.next;
    (n.f & nt) !== 0 ? n.parent = null : tt(n, e), n = r;
  }
}
function Wr(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & K) === 0 && tt(e), e = n;
  }
}
function tt(t, e = !0) {
  var n = !1;
  (e || (t.f & ir) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (Yr(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Cn(t, e && !n), ee(t, 0), F(t, Ct);
  var r = t.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  zn(t);
  var s = t.parent;
  s !== null && s.first !== null && An(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Yr(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ it(t)
    );
    t.remove(), t = n;
  }
}
function An(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Tn(t, e) {
  var n = [];
  Sn(t, n, !0), Vr(n, () => {
    tt(t), e && e();
  });
}
function Vr(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var s of t)
      s.out(r);
  } else
    e();
}
function Sn(t, e, n) {
  if ((t.f & X) === 0) {
    if (t.f ^= X, t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || n) && e.push(l);
    for (var r = t.first; r !== null; ) {
      var s = r.next, i = (r.f & se) !== 0 || (r.f & K) !== 0;
      Sn(r, e, i ? n : !1), r = s;
    }
  }
}
function Gr(t) {
  On(t, !0);
}
function On(t, e) {
  if ((t.f & X) !== 0) {
    t.f ^= X, (t.f & z) === 0 && (F(t, I), pt(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, s = (n.f & se) !== 0 || (n.f & K) !== 0;
      On(n, s ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const i of t.transitions)
        (i.is_global || e) && i.in();
  }
}
let Et = !1;
function Ye(t) {
  Et = t;
}
let At = !1;
function Ve(t) {
  At = t;
}
let g = null, U = !1;
function Y(t) {
  g = t;
}
let _ = null;
function et(t) {
  _ = t;
}
let Z = null;
function Zr(t) {
  g !== null && (Z === null ? Z = [t] : Z.push(t));
}
let A = null, R = 0, q = null;
function Kr(t) {
  q = t;
}
let Fn = 1, Dt = 0, ut = Dt;
function Ge(t) {
  ut = t;
}
let Q = !1;
function Nn() {
  return ++Fn;
}
function ue(t) {
  var e = t.f;
  if ((e & I) !== 0)
    return !0;
  if ((e & rt) !== 0) {
    var n = t.deps, r = (e & P) !== 0;
    if (n !== null) {
      var s, i, l = (e & Jt) !== 0, o = r && _ !== null && !Q, a = n.length;
      if ((l || o) && (_ === null || (_.f & Ct) === 0)) {
        var f = (
          /** @type {Derived} */
          t
        ), u = f.parent;
        for (s = 0; s < a; s++)
          i = n[s], (l || !i?.reactions?.includes(f)) && (i.reactions ??= []).push(f);
        l && (f.f ^= Jt), o && u !== null && (u.f & P) === 0 && (f.f ^= P);
      }
      for (s = 0; s < a; s++)
        if (i = n[s], ue(
          /** @type {Derived} */
          i
        ) && pn(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
    }
    (!r || _ !== null && !Q) && F(t, z);
  }
  return !1;
}
function Rn(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !Z?.includes(t))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & L) !== 0 ? Rn(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (n ? F(i, I) : (i.f & z) !== 0 && F(i, rt), pt(
        /** @type {Effect} */
        i
      ));
    }
}
function Ln(t) {
  var e = A, n = R, r = q, s = g, i = Q, l = Z, o = k, a = U, f = ut, u = t.f;
  A = /** @type {null | Value[]} */
  null, R = 0, q = null, Q = (u & P) !== 0 && (U || !Et || g === null), g = (u & (K | nt)) === 0 ? t : null, Z = null, Xt(t.ctx), U = !1, ut = ++Dt, t.ac !== null && (fe(() => {
    t.ac.abort(Fe);
  }), t.ac = null);
  try {
    t.f |= me;
    var h = (
      /** @type {Function} */
      t.fn
    ), v = h(), c = t.deps;
    if (A !== null) {
      var d;
      if (ee(t, R), c !== null && R > 0)
        for (c.length = R + A.length, d = 0; d < A.length; d++)
          c[R + d] = A[d];
      else
        t.deps = c = A;
      if (!Q || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (u & L) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (d = R; d < c.length; d++)
          (c[d].reactions ??= []).push(t);
    } else c !== null && R < c.length && (ee(t, R), c.length = R);
    if (qt() && q !== null && !U && c !== null && (t.f & (L | rt | I)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      q.length; d++)
        Rn(
          q[d],
          /** @type {Effect} */
          t
        );
    return s !== null && s !== t && (Dt++, q !== null && (r === null ? r = q : r.push(.../** @type {Source[]} */
    q))), (t.f & at) !== 0 && (t.f ^= at), v;
  } catch (p) {
    return br(p);
  } finally {
    t.f ^= me, A = e, R = n, q = r, g = s, Q = i, Z = l, Xt(o), U = a, ut = f;
  }
}
function Jr(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Kn.call(n, t);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = e.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  n === null && (e.f & L) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (A === null || !A.includes(e)) && (F(e, rt), (e.f & (P | Jt)) === 0 && (e.f ^= Jt), vn(
    /** @type {Derived} **/
    e
  ), ee(
    /** @type {Derived} **/
    e,
    0
  ));
}
function ee(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Jr(t, n[r]);
}
function Lt(t) {
  var e = t.f;
  if ((e & Ct) === 0) {
    F(t, z);
    var n = _, r = Et;
    _ = t, Et = !0;
    try {
      (e & zt) !== 0 ? Wr(t) : Cn(t), zn(t);
      var s = Ln(t);
      t.teardown = typeof s == "function" ? s : null, t.wv = Fn;
      var i;
      nn && Wn && (t.f & I) !== 0 && t.deps;
    } finally {
      Et = r, _ = n;
    }
  }
}
function W(t) {
  var e = t.f, n = (e & L) !== 0;
  if (g !== null && !U) {
    var r = _ !== null && (_.f & Ct) !== 0;
    if (!r && !Z?.includes(t)) {
      var s = g.deps;
      if ((g.f & me) !== 0)
        t.rv < Dt && (t.rv = Dt, A === null && s !== null && s[R] === t ? R++ : A === null ? A = [t] : (!Q || !A.includes(t)) && A.push(t));
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
    if (ft.has(t))
      return ft.get(t);
    if (n) {
      l = /** @type {Derived} */
      t;
      var a = l.v;
      return ((l.f & z) === 0 && l.reactions !== null || Mn(l)) && (a = Me(l)), ft.set(l, a), a;
    }
  } else if (n) {
    if (l = /** @type {Derived} */
    t, jt?.has(l))
      return jt.get(l);
    ue(l) && pn(l);
  }
  if ((t.f & at) !== 0)
    throw t.v;
  return t.v;
}
function Mn(t) {
  if (t.v === j) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (ft.has(e) || (e.f & L) !== 0 && Mn(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function qe(t) {
  var e = U;
  try {
    return U = !0, t();
  } finally {
    U = e;
  }
}
const Qr = -7169;
function F(t, e) {
  t.f = t.f & Qr | e;
}
function Xr(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Rt in t)
      $e(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Rt in n && $e(n);
      }
  }
}
function $e(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        $e(t[r], e);
      } catch {
      }
    const n = sn(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Qn(n);
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
const Dn = /* @__PURE__ */ new Set(), Ee = /* @__PURE__ */ new Set();
function ti(t) {
  for (var e = 0; e < t.length; e++)
    Dn.add(t[e]);
  for (var n of Ee)
    n(t);
}
let Ze = null;
function It(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, s = t.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || t.target
  );
  Ze = t;
  var l = 0, o = Ze === t && t.__root;
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
    ct(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var u = g, h = _;
    Y(null), et(null);
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
            if (rn(p)) {
              var [w, ...S] = p;
              w.apply(i, [t, ...S]);
            } else
              p.call(i, t);
        } catch (y) {
          v ? c.push(y) : v = y;
        }
        if (t.cancelBubble || d === e || d === null)
          break;
        i = d;
      }
      if (v) {
        for (let y of c)
          queueMicrotask(() => {
            throw y;
          });
        throw v;
      }
    } finally {
      t.__root = e, delete t.currentTarget, Y(u), et(h);
    }
  }
}
function ei(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Vt(t, e) {
  var n = (
    /** @type {Effect} */
    _
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Pt(t, e) {
  var n = (e & Gn) !== 0, r = (e & Zn) !== 0, s, i = !t.startsWith("<!>");
  return () => {
    if (T)
      return Vt($, null), $;
    s === void 0 && (s = ei(i ? t : "<!>" + t), n || (s = /** @type {Node} */
    /* @__PURE__ */ kt(s)));
    var l = (
      /** @type {TemplateNode} */
      r || bn ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ kt(l)
      ), a = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      Vt(o, a);
    } else
      Vt(l, l);
    return l;
  };
}
function yt(t, e) {
  if (T) {
    _.nodes_end = $, Ne();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const ni = ["touchstart", "touchmove"];
function ri(t) {
  return ni.includes(t);
}
let je = !0;
function ii(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function qn(t, e) {
  return Pn(t, e);
}
function si(t, e) {
  be(), e.intro = e.intro ?? !1;
  const n = e.target, r = T, s = $;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ kt(n)
    ); i && (i.nodeType !== Qt || /** @type {Comment} */
    i.data !== Xe); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ it(i);
    if (!i)
      throw xt;
    bt(!0), dt(
      /** @type {Comment} */
      i
    ), Ne();
    const l = Pn(t, { ...e, anchor: i });
    if ($ === null || $.nodeType !== Qt || /** @type {Comment} */
    $.data !== en)
      throw le(), xt;
    return bt(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== xt && console.warn("Failed to hydrate: ", l), e.recover === !1 && hr(), be(), Nr(n), bt(!1), qn(t, e);
  } finally {
    bt(r), dt(s);
  }
}
const mt = /* @__PURE__ */ new Map();
function Pn(t, { target: e, anchor: n, props: r = {}, events: s, context: i, intro: l = !0 }) {
  be();
  var o = /* @__PURE__ */ new Set(), a = (h) => {
    for (var v = 0; v < h.length; v++) {
      var c = h[v];
      if (!o.has(c)) {
        o.add(c);
        var d = ri(c);
        e.addEventListener(c, It, { passive: d });
        var p = mt.get(c);
        p === void 0 ? (document.addEventListener(c, It, { passive: d }), mt.set(c, 1)) : mt.set(c, p + 1);
      }
    }
  };
  a(Jn(Dn)), Ee.add(a);
  var f = void 0, u = Pr(() => {
    var h = n ?? e.appendChild(ae());
    return xe(() => {
      if (i) {
        un({});
        var v = (
          /** @type {ComponentContext} */
          k
        );
        v.c = i;
      }
      s && (r.$$events = s), T && Vt(
        /** @type {TemplateNode} */
        h,
        null
      ), je = l, f = t(h, r) || {}, je = !0, T && (_.nodes_end = $), i && cn();
    }), () => {
      for (var v of o) {
        e.removeEventListener(v, It);
        var c = (
          /** @type {number} */
          mt.get(v)
        );
        --c === 0 ? (document.removeEventListener(v, It), mt.delete(v)) : mt.set(v, c);
      }
      Ee.delete(a), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return ke.set(f, u), f;
}
let ke = /* @__PURE__ */ new WeakMap();
function li(t, e) {
  const n = ke.get(t);
  return n ? (ke.delete(t), n(e)) : Promise.resolve();
}
function Bt(t, e, n = !1) {
  T && Ne();
  var r = t, s = null, i = null, l = j, o = n ? se : 0, a = !1;
  const f = (c, d = !0) => {
    a = !0, v(d, c);
  };
  var u = null;
  function h() {
    u !== null && (u.lastChild.remove(), r.before(u), u = null);
    var c = l ? s : i, d = l ? i : s;
    c && Gr(c), d && Tn(d, () => {
      l ? i = null : s = null;
    });
  }
  const v = (c, d) => {
    if (l === (l = c)) return;
    let p = !1;
    if (T) {
      const _t = wr(r) === tn;
      !!l === _t && (r = gr(), dt(r), bt(!1), p = !0);
    }
    var w = Rr(), S = r;
    if (w && (u = document.createDocumentFragment(), u.append(S = ae())), l ? s ??= d && xe(() => d(S)) : i ??= d && xe(() => d(S)), w) {
      var y = (
        /** @type {Batch} */
        x
      ), st = l ? s : i, lt = l ? i : s;
      st && y.skipped_effects.delete(st), lt && y.skipped_effects.add(lt), y.add_callback(h);
    } else
      h();
    p && bt(!0);
  };
  Ur(() => {
    a = !1, e(f), a || v(null, null);
  }, o), T && (r = $);
}
function oi(t, e) {
  kn(() => {
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
const ai = () => performance.now(), G = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => ai(),
  tasks: /* @__PURE__ */ new Set()
};
function In() {
  const t = G.now();
  G.tasks.forEach((e) => {
    e.c(t) || (G.tasks.delete(e), e.f());
  }), G.tasks.size !== 0 && G.tick(In);
}
function fi(t) {
  let e;
  return G.tasks.size === 0 && G.tick(In), {
    promise: new Promise((n) => {
      G.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      G.tasks.delete(e);
    }
  };
}
function Ht(t, e) {
  fe(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function ui(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Ke(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [s, i] = r.split(":");
    if (!s || i === void 0) break;
    const l = ui(s.trim());
    e[l] = i.trim();
  }
  return e;
}
const ci = (t) => t;
function pe(t, e, n, r) {
  var s = (t & Vn) !== 0, i = "both", l, o = e.inert, a = e.style.overflow, f, u;
  function h() {
    return fe(() => l ??= n()(e, r?.() ?? /** @type {P} */
    {}, {
      direction: i
    }));
  }
  var v = {
    is_global: s,
    in() {
      e.inert = o, Ht(e, "introstart"), f = ze(e, h(), u, 1, () => {
        Ht(e, "introend"), f?.abort(), f = l = void 0, e.style.overflow = a;
      });
    },
    out(w) {
      e.inert = !0, Ht(e, "outrostart"), u = ze(e, h(), f, 0, () => {
        Ht(e, "outroend"), w?.();
      });
    },
    stop: () => {
      f?.abort(), u?.abort();
    }
  }, c = (
    /** @type {Effect} */
    _
  );
  if ((c.transitions ??= []).push(v), je) {
    var d = s;
    if (!d) {
      for (var p = (
        /** @type {Effect | null} */
        c.parent
      ); p && (p.f & se) !== 0; )
        for (; (p = p.parent) && (p.f & zt) === 0; )
          ;
      d = !p || (p.f & ie) !== 0;
    }
    d && kn(() => {
      qe(() => v.in());
    });
  }
}
function ze(t, e, n, r, s) {
  var i = r === 1;
  if (er(e)) {
    var l, o = !1;
    return $r(() => {
      if (!o) {
        var w = e({ direction: i ? "in" : "out" });
        l = ze(t, w, n, r, s);
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
      abort: B,
      deactivate: B,
      reset: B,
      t: () => r
    };
  const { delay: a = 0, css: f, tick: u, easing: h = ci } = e;
  var v = [];
  if (i && n === void 0 && (u && u(0, 1), f)) {
    var c = Ke(f(0, 1));
    v.push(c, c);
  }
  var d = () => 1 - r, p = t.animate(v, { duration: a, fill: "forwards" });
  return p.onfinish = () => {
    p.cancel();
    var w = n?.t() ?? 1 - r;
    n?.abort();
    var S = r - w, y = (
      /** @type {number} */
      e.duration * Math.abs(S)
    ), st = [];
    if (y > 0) {
      var lt = !1;
      if (f)
        for (var _t = Math.ceil(y / 16.666666666666668), m = 0; m <= _t; m += 1) {
          var b = w + S * h(m / _t), C = Ke(f(b, 1 - b));
          st.push(C), lt ||= C.overflow === "hidden";
        }
      lt && (t.style.overflow = "hidden"), d = () => {
        var E = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return w + S * h(E / y);
      }, u && fi(() => {
        if (p.playState !== "running") return !1;
        var E = d();
        return u(E, 1 - E), !0;
      });
    }
    p = t.animate(st, { duration: y, fill: "forwards" }), p.onfinish = () => {
      d = () => r, u?.(r, 1 - r), s();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = B);
    },
    deactivate: () => {
      s = B;
    },
    reset: () => {
      r === 0 && u?.(1, 0);
    },
    t: () => d()
  };
}
function di(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    k
  ), n = e.l.u;
  if (!n) return;
  let r = () => Xr(e.s);
  if (t) {
    let s = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const l = /* @__PURE__ */ Le(() => {
      let o = !1;
      const a = e.s;
      for (const f in a)
        a[f] !== i[f] && (i[f] = a[f], o = !0);
      return o && s++, s;
    });
    r = () => W(l);
  }
  n.b.length && Dr(() => {
    Je(e, r), Kt(n.b);
  }), We(() => {
    const s = qe(() => n.m.map(nr));
    return () => {
      for (const i of s)
        typeof i == "function" && i();
    };
  }), n.a.length && We(() => {
    Je(e, r), Kt(n.a);
  });
}
function Je(t, e) {
  if (t.l.s)
    for (const n of t.l.s) W(n);
  e();
}
function Bn(t, e, n) {
  if (t == null)
    return e(void 0), B;
  const r = qe(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const gt = [];
function ce(t, e = B) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function s(o) {
    if (an(t, o) && (t = o, n)) {
      const a = !gt.length;
      for (const f of r)
        f[1](), gt.push(f, t);
      if (a) {
        for (let f = 0; f < gt.length; f += 2)
          gt[f][0](gt[f + 1]);
        gt.length = 0;
      }
    }
  }
  function i(o) {
    s(o(
      /** @type {T} */
      t
    ));
  }
  function l(o, a = B) {
    const f = [o, a];
    return r.add(f), r.size === 1 && (n = e(s, i) || B), o(
      /** @type {T} */
      t
    ), () => {
      r.delete(f), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: i, subscribe: l };
}
function hi(t) {
  let e;
  return Bn(t, (n) => e = n)(), e;
}
let Ce = Symbol();
function Ut(t, e, n) {
  const r = n[e] ??= {
    store: null,
    source: /* @__PURE__ */ wn(void 0),
    unsubscribe: B
  };
  if (r.store !== t && !(Ce in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = B;
    else {
      var s = !0;
      r.unsubscribe = Bn(t, (i) => {
        s ? r.source.v = i : V(r.source, i);
      }), s = !1;
    }
  return t && Ce in n ? hi(t) : W(r.source);
}
function vi() {
  const t = {};
  function e() {
    Mr(() => {
      for (var n in t)
        t[n].unsubscribe();
      ct(t, Ce, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function pi(t) {
  return new _i(t);
}
class _i {
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
      var o = /* @__PURE__ */ wn(l, !1, !1);
      return n.set(i, o), o;
    };
    const s = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(i, l) {
          return W(n.get(l) ?? r(l, Reflect.get(i, l)));
        },
        has(i, l) {
          return l === sr ? !0 : (W(n.get(l) ?? r(l, Reflect.get(i, l))), Reflect.has(i, l));
        },
        set(i, l, o) {
          return V(n.get(l) ?? r(l, o), o), Reflect.set(i, l, o);
        }
      }
    );
    this.#t = (e.hydrate ? si : qn)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: s,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && Sr(), this.#e = s.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || ct(this, i, {
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
      li(this.#t);
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
let Hn;
typeof HTMLElement == "function" && (Hn = class extends HTMLElement {
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
          r !== "default" && (i.name = r), yt(s, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, n = mi(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = !0) : e[r] = t(r));
      for (const r of this.attributes) {
        const s = this.$$g_p(r.name);
        s in this.$$d || (this.$$d[s] = Gt(s, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = pi({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = qr(() => {
        Br(() => {
          this.$$r = !0;
          for (const r of Zt(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const s = Gt(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Gt(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
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
    return Zt(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function Gt(t, e, n, r) {
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
function mi(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function gi(t, e, n, r, s, i) {
  let l = class extends Hn {
    constructor() {
      super(t, n, s), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Zt(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return Zt(e).forEach((o) => {
    ct(l.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(a) {
        a = Gt(o, a, e), this.$$d[o] = a;
        var f = this.$$c;
        if (f) {
          var u = $t(f, o)?.get;
          u ? f[o] = a : f.$set({ [o]: a });
        }
      }
    });
  }), r.forEach((o) => {
    ct(l.prototype, o, {
      get() {
        return this.$$c?.[o];
      }
    });
  }), t.element = /** @type {any} */
  l, l;
}
function wi(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Qe(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function _e(t, { delay: e = 0, duration: n = 400, easing: r = wi, x: s = 0, y: i = 0, opacity: l = 0 } = {}) {
  const o = getComputedStyle(t), a = +o.opacity, f = o.transform === "none" ? "" : o.transform, u = a * (1 - l), [h, v] = Qe(s), [c, d] = Qe(i);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (p, w) => `
			transform: ${f} translate(${(1 - p) * h}${v}, ${(1 - p) * c}${d});
			opacity: ${a - u * w}`
  };
}
const wt = ce(!1), Wt = ce(!1), Ot = ce(!1), Ft = ce(!1);
var yi = (t, e) => t.key === "Enter" && e, bi = (t, e) => t.key === "Enter" && e, xi = (t, e) => t.key === "Enter" && e, $i = /* @__PURE__ */ Pt(`<div class="welcome-box svelte-1j0tmzl"><div class="welcome svelte-1j0tmzl"><h1 class="svelte-1j0tmzl">Welcome to our website!</h1> <p class="svelte-1j0tmzl">Nice to meet you! If you have any question about our services, feel free to contact us.</p></div> <div class="welcome-2 svelte-1j0tmzl"><div class="faq svelte-1j0tmzl" aria-details="faq option" role="button" tabindex="0">FAQ</div> <div class="talk svelte-1j0tmzl" aria-details="chat option" role="button" tabindex="0">Let's Talk</div></div></div>`), Ei = (t, e) => t.key === "Enter" && e, ji = /* @__PURE__ */ Pt(' <div class="faq-box svelte-1j0tmzl"><div class="faq-options svelte-1j0tmzl"><ul class="faq-options-li svelte-1j0tmzl"><li class="svelte-1j0tmzl">How do I apply?</li> <li class="svelte-1j0tmzl">What courses do you offer?</li> <li class="svelte-1j0tmzl">When do applications close?</li> <li class="svelte-1j0tmzl">Where is the campus located?</li> <li class="svelte-1j0tmzl">Talk to someone?</li> <div id="talk-btn" aria-details="chat option" role="button" tabindex="0" class="svelte-1j0tmzl">Can I talk to someone?</div></ul></div></div>', 1), ki = (t) => t.key === "Enter" && console.log("recorded"), zi = () => console.log("recorded"), Ci = /* @__PURE__ */ Pt(`<div class="chat-dialog svelte-1j0tmzl"><div class="chat-header svelte-1j0tmzl"><div class="svelte-1j0tmzl"><h1 class="svelte-1j0tmzl">ChatFlow</h1> <p>A live chat interface that allows for seamless, natural communication and connection.</p></div> <div class="cross svelte-1j0tmzl" role="button" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg></div></div> <div class="chat-body svelte-1j0tmzl"><p class="bot-msg svelte-1j0tmzl">Hi! How Can I help You?</p> <div class="chat-options svelte-1j0tmzl"><ul id="chat-options" class="svelte-1j0tmzl"><li class="svelte-1j0tmzl">How do I apply?</li> <li class="svelte-1j0tmzl">What courses do you offer?</li> <li class="svelte-1j0tmzl">When do applications close?</li> <li class="svelte-1j0tmzl">Where is the campus located?</li> <li class="svelte-1j0tmzl">Talk to someone?</li></ul></div> <div class="input svelte-1j0tmzl"><input type="text" placeholder="Let's share something" class="svelte-1j0tmzl"/> <button class="send svelte-1j0tmzl" tabindex="0"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1j0tmzl"><path d="M0.176834 0.118496C0.329527 -0.0108545 0.544637 -0.0367025 0.723627 0.0527924L13.7236 6.55279C13.893 6.63748 14 6.81061 14 7C14 7.18939 13.893 7.36252 13.7236 7.44721L0.723627 13.9472C0.544637 14.0367 0.329527 14.0109 0.176834 13.8815C0.0241407 13.7522 -0.0367196 13.5442 0.0221319 13.353L1.97688 7L0.0221319 0.647048C-0.0367196 0.455781 0.0241407 0.247847 0.176834 0.118496ZM2.8693 7.5L1.32155 12.5302L12.382 7L1.32155 1.46979L2.8693 6.5H8.50001C8.77615 6.5 9.00001 6.72386 9.00001 7C9.00001 7.27614 8.77615 7.5 8.50001 7.5H2.8693Z" fill="white"></path></svg></button></div></div></div>`), Ai = /* @__PURE__ */ Pt(`<div class="chat-dialog svelte-1j0tmzl"><div class="chat-header svelte-1j0tmzl"><div class="svelte-1j0tmzl"><h1 class="svelte-1j0tmzl">ChatFlow</h1> <p>A live chat interface that allows for seamless, natural communication and connection.</p></div> <div class="cross svelte-1j0tmzl" role="button" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg></div></div> <div class="chat-body svelte-1j0tmzl"><p class="bot-msg svelte-1j0tmzl">Thanks for joining us! Let's start by getting your name.</p> <ul class="user-msg svelte-1j0tmzl"><li class="svelte-1j0tmzl">John</li></ul> <div class="input svelte-1j0tmzl"><input type="text" placeholder="Let's share something" class="svelte-1j0tmzl"/> <button class="send svelte-1j0tmzl"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1j0tmzl"><path d="M0.176834 0.118496C0.329527 -0.0108545 0.544637 -0.0367025 0.723627 0.0527924L13.7236 6.55279C13.893 6.63748 14 6.81061 14 7C14 7.18939 13.893 7.36252 13.7236 7.44721L0.723627 13.9472C0.544637 14.0367 0.329527 14.0109 0.176834 13.8815C0.0241407 13.7522 -0.0367196 13.5442 0.0221319 13.353L1.97688 7L0.0221319 0.647048C-0.0367196 0.455781 0.0241407 0.247847 0.176834 0.118496ZM2.8693 7.5L1.32155 12.5302L12.382 7L1.32155 1.46979L2.8693 6.5H8.50001C8.77615 6.5 9.00001 6.72386 9.00001 7C9.00001 7.27614 8.77615 7.5 8.50001 7.5H2.8693Z" fill="white"></path></svg></button></div></div></div>`), Ti = /* @__PURE__ */ Pt('<div><div class="chat-icon svelte-1j0tmzl" aria-live="polite" aria-label="Chat" role="button" tabindex="0"><svg width="75" height="68" viewBox="0 0 75 68" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_8673_2670)"><ellipse cx="37.5002" cy="30" rx="25.1296" ry="21.6667" fill="white"></ellipse><path d="M37.5002 4C21.2078 4 8 15.6409 8 30.0002C8 37.3989 11.5062 44.0755 17.1343 48.81C17.0623 51.0675 16.2932 53.302 14.9482 55.0939C17.5558 54.9875 20.1101 53.9229 22.0741 52.1664C26.5625 54.598 31.8457 56.0004 37.5002 56.0004C53.7926 56.0004 67.0004 44.3595 67.0004 30.0002C67.0004 15.6409 53.7926 4 37.5002 4ZM55.8352 42.599C54.748 43.8262 53.1989 44.516 51.5813 44.516H23.4191C21.8015 44.516 20.2524 43.8262 19.1652 42.599C16.0867 39.1239 14.2522 34.7507 14.2522 29.9998C14.2522 25.249 16.0863 20.8761 19.1648 17.401C22.5117 13.622 27.3739 10.5 37.5 10.5C45.948 10.5 52.7599 13.9097 55.8733 17.4436C58.9292 20.9115 60.7482 25.2685 60.7482 29.9994C60.7482 34.7303 58.9137 39.1239 55.8352 42.599Z" fill="url(#paint0_linear_8673_2670)"></path><path d="M31.2311 29.1936C30.3741 30.545 29.1376 29.1936 26.5542 29.1936C23.9707 29.1936 22.7346 30.545 21.8776 29.1936C21.0482 27.8852 23.3365 24.6578 26.5542 24.6578C29.7718 24.6578 32.0602 27.8856 31.2311 29.1936Z" fill="#46359D"></path><path d="M53.1223 29.1936C52.2653 30.545 51.0287 29.1936 48.4453 29.1936C45.8618 29.1936 44.6257 30.545 43.7687 29.1936C42.9393 27.8852 45.2276 24.6578 48.4453 24.6578C51.6629 24.6578 53.9513 27.8856 53.1223 29.1936Z" fill="#46359D"></path><path d="M37.4996 35.3421C35.6966 35.3421 34.5071 33.8776 34.4573 33.8155C34.1879 33.4777 34.2365 32.9798 34.5662 32.7038C34.8959 32.4278 35.382 32.4776 35.6515 32.8153C35.6565 32.8213 36.4381 33.7621 37.4996 33.7621C38.5612 33.7621 39.3427 32.8213 39.3505 32.8118C39.62 32.474 40.1045 32.4258 40.4342 32.7018C40.7639 32.9779 40.8114 33.4773 40.5415 33.8151C40.4918 33.8776 39.3023 35.3417 37.4992 35.3417L37.4996 35.3421Z" fill="#46359D"></path></g><defs><filter id="filter0_d_8673_2670" x="0" y="0" width="75.0005" height="68.0004" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8673_2670"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8673_2670" result="shape"></feBlend></filter><linearGradient id="paint0_linear_8673_2670" x1="67.0004" y1="30.0002" x2="8" y2="30.0002" gradientUnits="userSpaceOnUse"><stop stop-color="#99A1E3"></stop><stop offset="0.129808" stop-color="#858EDC"></stop><stop offset="0.389423" stop-color="#635EBA"></stop><stop offset="1" stop-color="#43319A"></stop></linearGradient></defs></svg></div> <!> <!> <!> <!></div>');
const Si = {
  hash: "svelte-1j0tmzl",
  code: `\r
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');\r
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&display=swap');\r
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');\r
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&family=Questrial&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');:host {all:initial;position:fixed;bottom:1rem;right:1rem;z-index:9999;}.chat-icon.svelte-1j0tmzl {bottom:20px;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 8px rgba(0, 0, 0, 0.15);box-sizing:border-box;transition:all 0.3s ease-in-out;position:relative;}.chat-icon.svelte-1j0tmzl:hover {transform:scale(1.05);box-shadow:0 6px 12px rgba(0, 0, 0, 0.2);}.chat-dialog.svelte-1j0tmzl {position:absolute;bottom:90px;right:5%;width:400px;height:618px;background:white;border-radius:15px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.2);display:flex;flex-direction:column;overflow:hidden;}.welcome-box.svelte-1j0tmzl {position:fixed;right:1%;bottom:90px;display:flex;flex-direction:column;gap:10px;margin-bottom:10px;font-family:Figtree;font-weight:700;font-style:Bold;font-size:16px;line-height:24px;letter-spacing:0%;max-height:calc((248-60)px);}.welcome.svelte-1j0tmzl {box-sizing:border-box;max-width:290px;max-height:124px;background:#E9E9E9;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;border-radius:24px 24px 0 24px;display:flex;flex-direction:column;}.welcome.svelte-1j0tmzl h1:where(.svelte-1j0tmzl){font-size:16px;margin:0;padding:0;}.welcome.svelte-1j0tmzl p:where(.svelte-1j0tmzl){box-sizing:border-box;font-family:"Figtree";font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;padding:0;margin:0;}.welcome-2.svelte-1j0tmzl {height:44px;display:flex;gap:10px;}.faq.svelte-1j0tmzl,.talk.svelte-1j0tmzl{background:linear-gradient(270deg, #A7BEFE 0%, #43319A 100%);height:44px;width:140px;display:flex;justify-content:center;align-items:center;border-radius:20px;color:white;font-size:16px;cursor:pointer;transition:all 0.2s ease-in-out;}.faq.svelte-1j0tmzl:hover {transform:scale(1.02);}.talk.svelte-1j0tmzl:hover{transform:scale(1.02);}.chat-header.svelte-1j0tmzl {background:linear-gradient(270deg, #A7BEFE 0%, #6E6EC5 36.11%, #5347AA 64.88%, #43319A 100%);;\rpadding: 0.8rem;display:flex;justify-content:space-between;}.chat-header.svelte-1j0tmzl div:where(.svelte-1j0tmzl) h1:where(.svelte-1j0tmzl){font-family:'source sans 3', sans-serif;font-weight:700;font-style:Bold;font-size:30px;\r
    /* line-height: 100%; */letter-spacing:0%;}.chat-header.svelte-1j0tmzl div:where(.svelte-1j0tmzl){color:white;font-family:'Questrial', sans-serif;font-weight:300;font-size:12px;line-height:16px;letter-spacing:22%;display:inline;}.cross.svelte-1j0tmzl{cursor:pointer;padding-top:1px;font-size:15rem;}.chat-body.svelte-1j0tmzl {flex:1;position:relative;height:inherit;padding:0.5rem;padding-top:169px;padding-bottom:1.5rem;overflow-y:auto;}.chat-options.svelte-1j0tmzl{padding:0.5rem;}#chat-options.svelte-1j0tmzl{padding:0.5rem;outline:none;border-radius:10px;position:absolute;bottom:10%;right:0%;text-decoration:none;display:flex;flex-direction:column;gap:0.5rem;align-items:flex-end;}#chat-options.svelte-1j0tmzl li:where(.svelte-1j0tmzl){padding:0.3rem;border:1px solid #A3B9FA;color:#6D6CC4;border-radius:16px;list-style:none;padding-right:12px;padding-left:12px;width:130;height:32;gap:8px;font-family:Inter;font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;vertical-align:middle;transition:border ease-in-out;}#chat-options.svelte-1j0tmzl li:where(.svelte-1j0tmzl):hover{border:2px solid #A3B9FA;cursor:pointer;}.input.svelte-1j0tmzl{position:absolute;bottom:0;left:0;margin:12px;border:none;width:376px;height:48px;box-sizing:border-box;border:1px solid #f0f0f0f5;border-radius:12px;display:flex;align-items:center;padding-left:12px;padding-right:12px;}.input.svelte-1j0tmzl input:where(.svelte-1j0tmzl){flex:1;height:32px;border:none;outline:none;background:transparent;}.input.svelte-1j0tmzl:focus{outline:none;}.send.svelte-1j0tmzl{background-color:#5347AA;width:32px;height:32px;display:flex;justify-content:center;align-items:center;opacity:1;border-radius:12px;border-width:1px;color:white;cursor:pointer;}.send.svelte-1j0tmzl svg:where(.svelte-1j0tmzl){width:14px;height:14px;}.bot-msg.svelte-1j0tmzl{padding:12px;display:inline-block;max-width:290px;width:fit-content;border-top-right-radius:16px;border-bottom-right-radius:16px;border-bottom-left-radius:16px;padding-top:12px;text-align:left;background-color:#F4F4F4;font-family:'Outfit', sans-serif;font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;}.faq-box.svelte-1j0tmzl{width:290px;height:324px;display:flex;flex-direction:column;position:fixed;bottom:70px;right:1%;}.faq-options.svelte-1j0tmzl {padding:0.5rem;}.faq-options-li.svelte-1j0tmzl {padding:0.5rem;border-radius:10px;position:absolute;bottom:10%;right:0%;text-decoration:none;display:flex;flex-direction:column;gap:0.5rem;align-items:flex-end;}.faq-options-li.svelte-1j0tmzl li:where(.svelte-1j0tmzl) {cursor:pointer;background-color:#E9E9E9;padding:12px 24px 12px 24px;border-radius:24px;list-style:none;font-family:'Figtree', sans-serif;font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;text-align:right;display:flex;justify-content:center;align-items:center;}.faq-options-li.svelte-1j0tmzl li:where(.svelte-1j0tmzl):hover {transform:scale(1.03);cursor:pointer;}#talk-btn.svelte-1j0tmzl {cursor:pointer;background:linear-gradient(270deg, #A7BEFE 0%, #43319A 100%);border-radius:20px;width:290px;padding:12px 16px 12px 16px;color:white;font-family:DM Sans;font-weight:700;font-size:14px;line-height:20px;letter-spacing:0%;text-align:center;display:flex;justify-content:center;align-items:center;}.user-msg.svelte-1j0tmzl{display:flex;justify-content:flex-end;}.user-msg.svelte-1j0tmzl li:where(.svelte-1j0tmzl){display:inline-block;width:fit-content;padding:5px 12px 5px 12px;border:1px solid #43319A;border-top-left-radius:16px;border-bottom-right-radius:16px;border-bottom-left-radius:16px;list-style:none;}`
};
function Oi(t, e) {
  un(e, !1), oi(t, Si);
  const [n, r] = vi(), s = () => Ut(wt, "$open", n), i = () => Ut(Wt, "$openFaq", n), l = () => Ut(Ot, "$openChat", n), o = () => Ut(Ft, "$openAgent", n), a = () => {
    wt.update((m) => !m), Ot.set(!1), Wt.set(!1), Ft.set(!1);
  }, f = () => {
    s() && wt.update((m) => !m), Ot.update((m) => !m);
  }, u = () => {
    s() && wt.update((m) => !m), Ft.update((m) => !m);
  }, h = () => {
    s() && wt.update((m) => !m), Wt.update((m) => !m);
  };
  di();
  var v = Ti(), c = D(v);
  c.__click = a, c.__keydown = [yi, a];
  var d = N(c, 2);
  {
    var p = (m) => {
      var b = $i(), C = N(D(b), 2), E = D(C);
      E.__click = h, E.__keydown = [bi, h];
      var O = N(E, 2);
      O.__click = f, O.__keydown = [xi, f], M(C), M(b), pe(3, b, () => _e, () => ({ y: 20, duration: 300 })), yt(m, b);
    };
    Bt(d, (m) => {
      s() && m(p);
    });
  }
  var w = N(d, 2);
  {
    var S = (m) => {
      var b = ji(), C = Fr(b), E = N(C), O = D(E), ot = D(O), Tt = N(D(ot), 10);
      Tt.__click = u, Tt.__keydown = [Ei, u], M(ot), M(O), M(E), Hr((de) => ii(C, `${de ?? ""} `), [() => wt.set(!1)]), yt(m, b);
    };
    Bt(w, (m) => {
      i() && s() == !1 && m(S);
    });
  }
  var y = N(w, 2);
  {
    var st = (m) => {
      var b = Ci(), C = D(b), E = N(D(C), 2);
      E.__click = () => Ot.update((he) => !he), E.__keydown = (he) => he.key === "enter" && Ot.update((Un) => !Un), M(C);
      var O = N(C, 2), ot = N(D(O), 4), Tt = D(ot);
      Tt.__keydown = [ki];
      var de = N(Tt, 2);
      de.__click = [zi], M(ot), M(O), M(b), pe(3, b, () => _e, () => ({ x: 20, duration: 300 })), yt(m, b);
    };
    Bt(y, (m) => {
      l() && !s() && m(st);
    });
  }
  var lt = N(y, 2);
  {
    var _t = (m) => {
      var b = Ai(), C = D(b), E = N(D(C), 2);
      E.__click = () => {
        Ft.update((O) => !O), Wt.update((O) => !O);
      }, E.__keydown = (O) => O.key === "enter" && Ft.update((ot) => !ot), M(C), mr(2), M(b), pe(3, b, () => _e, () => ({ x: 20, duration: 300 })), yt(m, b);
    };
    Bt(lt, (m) => {
      o() && !s() && m(_t);
    });
  }
  M(v), yt(t, v), cn(), r();
}
ti(["click", "keydown"]);
customElements.define("chat-widget", gi(Oi, {}, [], [], !0));
export {
  Oi as default
};
