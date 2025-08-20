typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
let nt = !1, Un = !1;
function Yn() {
  nt = !0;
}
Yn();
const Vn = 4, Gn = 1, Kn = 2, Zt = "[", en = "[!", tn = "]", xe = {}, E = Symbol(), nn = !1;
var rn = Array.isArray, Jn = Array.prototype.indexOf, Qn = Array.from, Ke = Object.keys, ce = Object.defineProperty, $e = Object.getOwnPropertyDescriptor, Xn = Object.getOwnPropertyDescriptors, Zn = Object.prototype, er = Array.prototype, sn = Object.getPrototypeOf, Lt = Object.isExtensible;
function tr(e) {
  return typeof e == "function";
}
const B = () => {
};
function nr(e) {
  return e();
}
function Je(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function rr() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
const D = 2, Ot = 4, rt = 8, Te = 16, J = 32, ne = 64, on = 128, L = 256, Qe = 512, T = 1024, z = 2048, re = 4096, Z = 8192, Se = 16384, it = 32768, st = 65536, zt = 1 << 17, ir = 1 << 18, Ct = 1 << 19, Ft = 1 << 20, gt = 1 << 21, Nt = 1 << 22, ae = 1 << 23, je = Symbol("$state"), sr = Symbol("legacy props"), Rt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), or = 3, Xe = 8;
function lr() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function ar() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ur(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function fr() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function cr(e) {
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
function ot(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let C = !1;
function ye(e) {
  C = e;
}
let $;
function de(e) {
  if (e === null)
    throw ot(), xe;
  return $ = e;
}
function qt() {
  return de(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ie($)
  );
}
function P(e) {
  if (C) {
    if (/* @__PURE__ */ ie($) !== null)
      throw ot(), xe;
    $ = e;
  }
}
function gr(e = 1) {
  if (C) {
    for (var t = e, n = $; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ ie(n);
    $ = n;
  }
}
function wr() {
  for (var e = 0, t = $; ; ) {
    if (t.nodeType === Xe) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === tn) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Zt || n === en) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ie(t)
    );
    t.remove(), t = r;
  }
}
function br(e) {
  if (!e || e.nodeType !== Xe)
    throw ot(), xe;
  return (
    /** @type {Comment} */
    e.data
  );
}
function ln(e) {
  return e === this.v;
}
function an(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function un(e) {
  return !an(e, this.v);
}
let A = null;
function Ze(e) {
  A = e;
}
function fn(e, t = !1, n) {
  A = {
    p: A,
    c: null,
    e: null,
    s: e,
    x: null,
    l: nt && !t ? { s: null, u: null, $: [] } : null
  };
}
function cn(e) {
  var t = (
    /** @type {ComponentContext} */
    A
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      En(r);
  }
  return A = t.p, /** @type {T} */
  {};
}
function Me() {
  return !nt || A !== null && A.l === null;
}
const mr = /* @__PURE__ */ new WeakMap();
function yr(e) {
  var t = _;
  if (t === null)
    return w.f |= ae, e;
  if ((t.f & it) === 0) {
    if ((t.f & on) === 0)
      throw !t.parent && e instanceof Error && dn(e), e;
    t.b.error(e);
  } else
    jt(e, t);
}
function jt(e, t) {
  for (; t !== null; ) {
    if ((t.f & on) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && dn(e), e;
}
function dn(e) {
  const t = mr.get(e);
  t && (ce(e, "message", {
    value: t.message
  }), ce(e, "stack", {
    value: t.stack
  }));
}
let Pe = [], wt = [];
function hn() {
  var e = Pe;
  Pe = [], Je(e);
}
function xr() {
  var e = wt;
  wt = [], Je(e);
}
function $r(e) {
  Pe.length === 0 && queueMicrotask(hn), Pe.push(e);
}
function kr() {
  Pe.length > 0 && hn(), wt.length > 0 && xr();
}
function Er() {
  for (var e = (
    /** @type {Effect} */
    _.b
  ); e !== null && !e.has_pending_snippet(); )
    e = e.parent;
  return e === null && lr(), e;
}
// @__NO_SIDE_EFFECTS__
function Dt(e) {
  var t = D | z, n = w !== null && (w.f & D) !== 0 ? (
    /** @type {Derived} */
    w
  ) : null;
  return _ === null || n !== null && (n.f & L) !== 0 ? t |= L : _.f |= Ct, {
    ctx: A,
    deps: null,
    effects: null,
    equals: ln,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      E
    ),
    wv: 0,
    parent: n ?? _,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ar(e, t) {
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
  ), i = It(
    /** @type {V} */
    E
  ), o = null, l = !w;
  return zr(() => {
    try {
      var a = e();
    } catch (c) {
      a = Promise.reject(c);
    }
    var u = () => a;
    s = o?.then(u, u) ?? Promise.resolve(a), o = s;
    var f = (
      /** @type {Batch} */
      x
    ), h = r.pending;
    l && (r.update_pending_count(1), h || f.increment());
    const v = (c, d = void 0) => {
      o = null, h || f.activate(), d ? d !== Rt && (i.f |= ae, mt(i, d)) : ((i.f & ae) !== 0 && (i.f ^= ae), mt(i, c)), l && (r.update_pending_count(-1), h || f.decrement()), _n();
    };
    if (s.then(v, (c) => v(null, c || "unknown")), f)
      return () => {
        queueMicrotask(() => f.neuter());
      };
  }), new Promise((a) => {
    function u(f) {
      function h() {
        f === s ? a(i) : u(s);
      }
      f.then(h, h);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Tr(e) {
  const t = /* @__PURE__ */ Dt(e);
  return t.equals = un, t;
}
function vn(e) {
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
function Sr(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & D) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Pt(e) {
  var t, n = _;
  te(Sr(e));
  try {
    vn(e), t = Dn(e);
  } finally {
    te(n);
  }
  return t;
}
function pn(e) {
  var t = Pt(e);
  if (e.equals(t) || (e.v = t, e.wv = qn()), !Oe)
    if (Ee !== null)
      Ee.set(e, e.v);
    else {
      var n = (X || (e.f & L) !== 0) && e.deps !== null ? re : T;
      R(e, n);
    }
}
function Or(e, t, n) {
  const r = Me() ? Dt : Tr;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var s = x, i = (
    /** @type {Effect} */
    _
  ), o = Cr(), l = Er();
  Promise.all(t.map((a) => /* @__PURE__ */ Ar(a))).then((a) => {
    s?.activate(), o();
    try {
      n([...e.map(r), ...a]);
    } catch (u) {
      (i.f & Se) === 0 && jt(u, i);
    }
    s?.deactivate(), _n();
  }).catch((a) => {
    l.error(a);
  });
}
function Cr() {
  var e = _, t = w, n = A;
  return function() {
    te(e), Y(t), Ze(n);
  };
}
function _n() {
  te(null), Y(null), Ze(null);
}
const Fe = /* @__PURE__ */ new Set();
let x = null, Ee = null, Bt = /* @__PURE__ */ new Set(), et = [];
function gn() {
  const e = (
    /** @type {() => void} */
    et.shift()
  );
  et.length > 0 && queueMicrotask(gn), e();
}
let he = [], lt = null, bt = !1, Ye = !1;
class ve {
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
  #u = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #f = !1;
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
    he = [];
    var n = null;
    if (Fe.size > 1) {
      n = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map();
      for (const [i, o] of this.current)
        n.set(i, { v: i.v, wv: i.wv }), i.v = o;
      for (const i of Fe)
        if (i !== this)
          for (const [o, l] of i.#t)
            n.has(o) || (n.set(o, { v: o.v, wv: o.wv }), o.v = l);
    }
    for (const i of t)
      this.#v(i);
    if (this.#i.length === 0 && this.#n === 0) {
      this.#h();
      var r = this.#s, s = this.#r;
      this.#s = [], this.#r = [], this.#l = [], x = null, Wt(r), Wt(s), x === null ? x = this : Fe.delete(this), this.#u?.resolve();
    } else
      this.#a(this.#s), this.#a(this.#r), this.#a(this.#l);
    if (n) {
      for (const [i, { v: o, wv: l }] of n)
        i.wv <= l && (i.v = o);
      Ee = null;
    }
    for (const i of this.#i)
      De(i);
    for (const i of this.#o)
      De(i);
    this.#i = [], this.#o = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #v(t) {
    t.f ^= T;
    for (var n = t.first; n !== null; ) {
      var r = n.f, s = (r & (J | ne)) !== 0, i = s && (r & T) !== 0, o = i || (r & Z) !== 0 || this.skipped_effects.has(n);
      if (!o && n.fn !== null) {
        if (s)
          n.f ^= T;
        else if ((r & T) === 0)
          if ((r & Ot) !== 0)
            this.#r.push(n);
          else if ((r & Nt) !== 0) {
            var l = n.b?.pending ? this.#o : this.#i;
            l.push(n);
          } else ft(n) && ((n.f & Te) !== 0 && this.#l.push(n), De(n));
        var a = n.first;
        if (a !== null) {
          n = a;
          continue;
        }
      }
      var u = n.parent;
      for (n = n.next; n === null && u !== null; )
        n = u.next, u = u.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #a(t) {
    for (const n of t)
      ((n.f & z) !== 0 ? this.#c : this.#d).push(n), R(n, T);
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
    x = this;
  }
  deactivate() {
    x = null;
    for (const t of Bt)
      if (Bt.delete(t), t(), x !== null)
        break;
  }
  neuter() {
    this.#f = !0;
  }
  flush() {
    he.length > 0 ? wn() : this.#h(), x === this && (this.#n === 0 && Fe.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #h() {
    if (!this.#f)
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
        R(t, z), pe(t);
      for (const t of this.#d)
        R(t, re), pe(t);
      this.#s = [], this.#r = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#u ??= rr()).promise;
  }
  static ensure() {
    if (x === null) {
      const t = x = new ve();
      Fe.add(x), Ye || ve.enqueue(() => {
        x === t && t.flush();
      });
    }
    return x;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    et.length === 0 && queueMicrotask(gn), et.unshift(t);
  }
}
function Fr(e) {
  var t = Ye;
  Ye = !0;
  try {
    for (var n; ; ) {
      if (kr(), he.length === 0 && (x?.flush(), he.length === 0))
        return lt = null, /** @type {T} */
        n;
      wn();
    }
  } finally {
    Ye = t;
  }
}
function wn() {
  var e = ke;
  bt = !0;
  try {
    var t = 0;
    for (Yt(!0); he.length > 0; ) {
      var n = ve.ensure();
      if (t++ > 1e3) {
        var r, s;
        Nr();
      }
      n.process(he), ue.clear();
    }
  } finally {
    bt = !1, Yt(e), lt = null;
  }
}
function Nr() {
  try {
    dr();
  } catch (e) {
    jt(e, lt);
  }
}
function Wt(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Se | Z)) === 0 && ft(r)) {
        var s = x ? x.current.size : 0;
        if (De(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? On(r) : r.fn = null), x !== null && x.current.size > s && (r.f & Ft) !== 0)
          break;
      }
    }
    for (; n < t; )
      pe(e[n++]);
  }
}
function pe(e) {
  for (var t = lt = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (bt && t === _ && (n & Te) !== 0)
      return;
    if ((n & (ne | J)) !== 0) {
      if ((n & T) === 0) return;
      t.f ^= T;
    }
  }
  he.push(t);
}
const ue = /* @__PURE__ */ new Map();
function It(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ln,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Q(e, t) {
  const n = It(e);
  return Kr(n), n;
}
// @__NO_SIDE_EFFECTS__
function bn(e, t = !1, n = !0) {
  const r = It(e);
  return t || (r.equals = un), nt && n && A !== null && A.l !== null && (A.l.s ??= []).push(r), r;
}
function V(e, t, n = !1) {
  w !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!H || (w.f & zt) !== 0) && Me() && (w.f & (D | Te | Nt | zt)) !== 0 && !K?.includes(e) && _r();
  let r = n ? qe(t) : t;
  return mt(e, r);
}
function mt(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Oe ? ue.set(e, t) : ue.set(e, n), e.v = t;
    var r = ve.ensure();
    r.capture(e, n), (e.f & D) !== 0 && ((e.f & z) !== 0 && Pt(
      /** @type {Derived} */
      e
    ), R(e, (e.f & L) === 0 ? T : re)), e.wv = qn(), mn(e, z), Me() && _ !== null && (_.f & T) !== 0 && (_.f & (J | ne)) === 0 && (M === null ? Jr([e]) : M.push(e));
  }
  return t;
}
function vt(e) {
  V(e, e.v + 1);
}
function mn(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Me(), s = n.length, i = 0; i < s; i++) {
      var o = n[i], l = o.f;
      if (!(!r && o === _)) {
        var a = (l & z) === 0;
        a && R(o, t), (l & D) !== 0 ? mn(
          /** @type {Derived} */
          o,
          re
        ) : a && pe(
          /** @type {Effect} */
          o
        );
      }
    }
}
function qe(e) {
  if (typeof e != "object" || e === null || je in e)
    return e;
  const t = sn(e);
  if (t !== Zn && t !== er)
    return e;
  var n = /* @__PURE__ */ new Map(), r = rn(e), s = /* @__PURE__ */ Q(0), i = fe, o = (l) => {
    if (fe === i)
      return l();
    var a = w, u = fe;
    Y(null), Gt(i);
    var f = l();
    return Y(a), Gt(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ Q(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, a, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && vr();
        var f = n.get(a);
        return f === void 0 ? f = o(() => {
          var h = /* @__PURE__ */ Q(u.value);
          return n.set(a, h), h;
        }) : V(f, u.value, !0), !0;
      },
      deleteProperty(l, a) {
        var u = n.get(a);
        if (u === void 0) {
          if (a in l) {
            const f = o(() => /* @__PURE__ */ Q(E));
            n.set(a, f), vt(s);
          }
        } else
          V(u, E), vt(s);
        return !0;
      },
      get(l, a, u) {
        if (a === je)
          return e;
        var f = n.get(a), h = a in l;
        if (f === void 0 && (!h || $e(l, a)?.writable) && (f = o(() => {
          var c = qe(h ? l[a] : E), d = /* @__PURE__ */ Q(c);
          return d;
        }), n.set(a, f)), f !== void 0) {
          var v = U(f);
          return v === E ? void 0 : v;
        }
        return Reflect.get(l, a, u);
      },
      getOwnPropertyDescriptor(l, a) {
        var u = Reflect.getOwnPropertyDescriptor(l, a);
        if (u && "value" in u) {
          var f = n.get(a);
          f && (u.value = U(f));
        } else if (u === void 0) {
          var h = n.get(a), v = h?.v;
          if (h !== void 0 && v !== E)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(l, a) {
        if (a === je)
          return !0;
        var u = n.get(a), f = u !== void 0 && u.v !== E || Reflect.has(l, a);
        if (u !== void 0 || _ !== null && (!f || $e(l, a)?.writable)) {
          u === void 0 && (u = o(() => {
            var v = f ? qe(l[a]) : E, c = /* @__PURE__ */ Q(v);
            return c;
          }), n.set(a, u));
          var h = U(u);
          if (h === E)
            return !1;
        }
        return f;
      },
      set(l, a, u, f) {
        var h = n.get(a), v = a in l;
        if (r && a === "length")
          for (var c = u; c < /** @type {Source<number>} */
          h.v; c += 1) {
            var d = n.get(c + "");
            d !== void 0 ? V(d, E) : c in l && (d = o(() => /* @__PURE__ */ Q(E)), n.set(c + "", d));
          }
        if (h === void 0)
          (!v || $e(l, a)?.writable) && (h = o(() => /* @__PURE__ */ Q(void 0)), V(h, qe(u)), n.set(a, h));
        else {
          v = h.v !== E;
          var p = o(() => qe(u));
          V(h, p);
        }
        var b = Reflect.getOwnPropertyDescriptor(l, a);
        if (b?.set && b.set.call(f, u), !v) {
          if (r && typeof a == "string") {
            var F = (
              /** @type {Source<number>} */
              n.get("length")
            ), m = Number(a);
            Number.isInteger(m) && m >= F.v && V(F, m + 1);
          }
          vt(s);
        }
        return !0;
      },
      ownKeys(l) {
        U(s);
        var a = Reflect.ownKeys(l).filter((h) => {
          var v = n.get(h);
          return v === void 0 || v.v !== E;
        });
        for (var [u, f] of n)
          f.v !== E && !(u in l) && a.push(u);
        return a;
      },
      setPrototypeOf() {
        pr();
      }
    }
  );
}
var Ht, yn, xn, $n;
function yt() {
  if (Ht === void 0) {
    Ht = window, yn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    xn = $e(t, "firstChild").get, $n = $e(t, "nextSibling").get, Lt(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Lt(n) && (n.__t = void 0);
  }
}
function at(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ae(e) {
  return xn.call(e);
}
// @__NO_SIDE_EFFECTS__
function ie(e) {
  return $n.call(e);
}
function I(e, t) {
  if (!C)
    return /* @__PURE__ */ Ae(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ae($)
  );
  return n === null && (n = $.appendChild(at())), de(n), n;
}
function Rr(e, t) {
  if (!C) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ae(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ie(n) : n;
  }
  return $;
}
function q(e, t = 1, n = !1) {
  let r = C ? $ : e;
  for (var s; t--; )
    s = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ ie(r);
  if (!C)
    return r;
  if (n && r?.nodeType !== or) {
    var i = at();
    return r === null ? s?.after(i) : r.before(i), de(i), i;
  }
  return de(r), /** @type {TemplateNode} */
  r;
}
function qr(e) {
  e.textContent = "";
}
function jr() {
  return !1;
}
function ut(e) {
  var t = w, n = _;
  Y(null), te(null);
  try {
    return e();
  } finally {
    Y(t), te(n);
  }
}
function kn(e) {
  _ === null && w === null && cr(), w !== null && (w.f & L) !== 0 && _ === null && fr(), Oe && ur();
}
function Dr(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function W(e, t, n, r = !0) {
  var s = _;
  s !== null && (s.f & Z) !== 0 && (e |= Z);
  var i = {
    ctx: A,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | z,
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
      De(i), i.f |= it;
    } catch (a) {
      throw ee(i), a;
    }
  else t !== null && pe(i);
  var o = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & Ct) === 0;
  if (!o && r && (s !== null && Dr(i, s), w !== null && (w.f & D) !== 0 && (e & ne) === 0)) {
    var l = (
      /** @type {Derived} */
      w
    );
    (l.effects ??= []).push(i);
  }
  return i;
}
function Pr(e) {
  const t = W(rt, null, !1);
  return R(t, T), t.teardown = e, t;
}
function Ut(e) {
  kn();
  var t = (
    /** @type {Effect} */
    _.f
  ), n = !w && (t & J) !== 0 && (t & it) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      A
    );
    (r.e ??= []).push(e);
  } else
    return En(e);
}
function En(e) {
  return W(Ot | Ft, e, !1);
}
function Ir(e) {
  return kn(), W(rt | Ft, e, !0);
}
function Mr(e) {
  ve.ensure();
  const t = W(ne, e, !0);
  return () => {
    ee(t);
  };
}
function Lr(e) {
  ve.ensure();
  const t = W(ne, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Cn(t, () => {
      ee(t), r(void 0);
    }) : (ee(t), r(void 0));
  });
}
function An(e) {
  return W(Ot, e, !1);
}
function zr(e) {
  return W(Nt | Ct, e, !0);
}
function Br(e, t = 0) {
  return W(rt | t, e, !0);
}
function Wr(e, t = [], n = []) {
  Or(t, n, (r) => {
    W(rt, () => e(...r.map(U)), !0);
  });
}
function Hr(e, t = 0) {
  var n = W(Te | t, e, !0);
  return n;
}
function xt(e, t = !0) {
  return W(J, e, !0, t);
}
function Tn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Oe, r = w;
    Vt(!0), Y(null);
    try {
      t.call(null);
    } finally {
      Vt(n), Y(r);
    }
  }
}
function Sn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && ut(() => {
      s.abort(Rt);
    });
    var r = n.next;
    (n.f & ne) !== 0 ? n.parent = null : ee(n, t), n = r;
  }
}
function Ur(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & J) === 0 && ee(t), t = n;
  }
}
function ee(e, t = !0) {
  var n = !1;
  (t || (e.f & ir) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Yr(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Sn(e, t && !n), tt(e, 0), R(e, Se);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Tn(e);
  var s = e.parent;
  s !== null && s.first !== null && On(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Yr(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ie(e)
    );
    e.remove(), e = n;
  }
}
function On(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Cn(e, t) {
  var n = [];
  Fn(e, n, !0), Vr(n, () => {
    ee(e), t && t();
  });
}
function Vr(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var s of e)
      s.out(r);
  } else
    t();
}
function Fn(e, t, n) {
  if ((e.f & Z) === 0) {
    if (e.f ^= Z, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || n) && t.push(o);
    for (var r = e.first; r !== null; ) {
      var s = r.next, i = (r.f & st) !== 0 || (r.f & J) !== 0;
      Fn(r, t, i ? n : !1), r = s;
    }
  }
}
function Gr(e) {
  Nn(e, !0);
}
function Nn(e, t) {
  if ((e.f & Z) !== 0) {
    e.f ^= Z, (e.f & T) === 0 && (R(e, z), pe(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & st) !== 0 || (n.f & J) !== 0;
      Nn(n, s ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let ke = !1;
function Yt(e) {
  ke = e;
}
let Oe = !1;
function Vt(e) {
  Oe = e;
}
let w = null, H = !1;
function Y(e) {
  w = e;
}
let _ = null;
function te(e) {
  _ = e;
}
let K = null;
function Kr(e) {
  w !== null && (K === null ? K = [e] : K.push(e));
}
let O = null, j = 0, M = null;
function Jr(e) {
  M = e;
}
let Rn = 1, Ie = 0, fe = Ie;
function Gt(e) {
  fe = e;
}
let X = !1;
function qn() {
  return ++Rn;
}
function ft(e) {
  var t = e.f;
  if ((t & z) !== 0)
    return !0;
  if ((t & re) !== 0) {
    var n = e.deps, r = (t & L) !== 0;
    if (n !== null) {
      var s, i, o = (t & Qe) !== 0, l = r && _ !== null && !X, a = n.length;
      if ((o || l) && (_ === null || (_.f & Se) === 0)) {
        var u = (
          /** @type {Derived} */
          e
        ), f = u.parent;
        for (s = 0; s < a; s++)
          i = n[s], (o || !i?.reactions?.includes(u)) && (i.reactions ??= []).push(u);
        o && (u.f ^= Qe), l && f !== null && (f.f & L) === 0 && (u.f ^= L);
      }
      for (s = 0; s < a; s++)
        if (i = n[s], ft(
          /** @type {Derived} */
          i
        ) && pn(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || _ !== null && !X) && R(e, T);
  }
  return !1;
}
function jn(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !K?.includes(e))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & D) !== 0 ? jn(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? R(i, z) : (i.f & T) !== 0 && R(i, re), pe(
        /** @type {Effect} */
        i
      ));
    }
}
function Dn(e) {
  var t = O, n = j, r = M, s = w, i = X, o = K, l = A, a = H, u = fe, f = e.f;
  O = /** @type {null | Value[]} */
  null, j = 0, M = null, X = (f & L) !== 0 && (H || !ke || w === null), w = (f & (J | ne)) === 0 ? e : null, K = null, Ze(e.ctx), H = !1, fe = ++Ie, e.ac !== null && (ut(() => {
    e.ac.abort(Rt);
  }), e.ac = null);
  try {
    e.f |= gt;
    var h = (
      /** @type {Function} */
      e.fn
    ), v = h(), c = e.deps;
    if (O !== null) {
      var d;
      if (tt(e, j), c !== null && j > 0)
        for (c.length = j + O.length, d = 0; d < O.length; d++)
          c[j + d] = O[d];
      else
        e.deps = c = O;
      if (!X || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (f & D) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (d = j; d < c.length; d++)
          (c[d].reactions ??= []).push(e);
    } else c !== null && j < c.length && (tt(e, j), c.length = j);
    if (Me() && M !== null && !H && c !== null && (e.f & (D | re | z)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      M.length; d++)
        jn(
          M[d],
          /** @type {Effect} */
          e
        );
    return s !== null && s !== e && (Ie++, M !== null && (r === null ? r = M : r.push(.../** @type {Source[]} */
    M))), (e.f & ae) !== 0 && (e.f ^= ae), v;
  } catch (p) {
    return yr(p);
  } finally {
    e.f ^= gt, O = t, j = n, M = r, w = s, X = i, K = o, Ze(l), H = a, fe = u;
  }
}
function Qr(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Jn.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  n === null && (t.f & D) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (O === null || !O.includes(t)) && (R(t, re), (t.f & (L | Qe)) === 0 && (t.f ^= Qe), vn(
    /** @type {Derived} **/
    t
  ), tt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function tt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Qr(e, n[r]);
}
function De(e) {
  var t = e.f;
  if ((t & Se) === 0) {
    R(e, T);
    var n = _, r = ke;
    _ = e, ke = !0;
    try {
      (t & Te) !== 0 ? Ur(e) : Sn(e), Tn(e);
      var s = Dn(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Rn;
      var i;
      nn && Un && (e.f & z) !== 0 && e.deps;
    } finally {
      ke = r, _ = n;
    }
  }
}
function U(e) {
  var t = e.f, n = (t & D) !== 0;
  if (w !== null && !H) {
    var r = _ !== null && (_.f & Se) !== 0;
    if (!r && !K?.includes(e)) {
      var s = w.deps;
      if ((w.f & gt) !== 0)
        e.rv < Ie && (e.rv = Ie, O === null && s !== null && s[j] === e ? j++ : O === null ? O = [e] : (!X || !O.includes(e)) && O.push(e));
      else {
        (w.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [w] : i.includes(w) || i.push(w);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), l = o.parent;
    l !== null && (l.f & L) === 0 && (o.f ^= L);
  }
  if (Oe) {
    if (ue.has(e))
      return ue.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var a = o.v;
      return ((o.f & T) === 0 && o.reactions !== null || Pn(o)) && (a = Pt(o)), ue.set(o, a), a;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    e, Ee?.has(o))
      return Ee.get(o);
    ft(o) && pn(o);
  }
  if ((e.f & ae) !== 0)
    throw e.v;
  return e.v;
}
function Pn(e) {
  if (e.v === E) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ue.has(t) || (t.f & D) !== 0 && Pn(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Mt(e) {
  var t = H;
  try {
    return H = !0, e();
  } finally {
    H = t;
  }
}
const Xr = -7169;
function R(e, t) {
  e.f = e.f & Xr | t;
}
function Zr(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (je in e)
      $t(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && je in n && $t(n);
      }
  }
}
function $t(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        $t(e[r], t);
      } catch {
      }
    const n = sn(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Xn(n);
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
const In = /* @__PURE__ */ new Set(), kt = /* @__PURE__ */ new Set();
function ei(e) {
  for (var t = 0; t < e.length; t++)
    In.add(e[t]);
  for (var n of kt)
    n(e);
}
let Kt = null;
function ze(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  Kt = e;
  var o = 0, l = Kt === e && e.__root;
  if (l) {
    var a = s.indexOf(l);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    a <= u && (o = a);
  }
  if (i = /** @type {Element} */
  s[o] || e.target, i !== t) {
    ce(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var f = w, h = _;
    Y(null), te(null);
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
            if (rn(p)) {
              var [b, ...F] = p;
              b.apply(i, [e, ...F]);
            } else
              p.call(i, e);
        } catch (m) {
          v ? c.push(m) : v = m;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        i = d;
      }
      if (v) {
        for (let m of c)
          queueMicrotask(() => {
            throw m;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Y(f), te(h);
    }
  }
}
function ti(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Ve(e, t) {
  var n = (
    /** @type {Effect} */
    _
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Le(e, t) {
  var n = (t & Gn) !== 0, r = (t & Kn) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    if (C)
      return Ve($, null), $;
    s === void 0 && (s = ti(i ? e : "<!>" + e), n || (s = /** @type {Node} */
    /* @__PURE__ */ Ae(s)));
    var o = (
      /** @type {TemplateNode} */
      r || yn ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ae(o)
      ), a = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Ve(l, a);
    } else
      Ve(o, o);
    return o;
  };
}
function me(e, t) {
  if (C) {
    _.nodes_end = $, qt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const ni = ["touchstart", "touchmove"];
function ri(e) {
  return ni.includes(e);
}
let Et = !0;
function ii(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Mn(e, t) {
  return Ln(e, t);
}
function si(e, t) {
  yt(), t.intro = t.intro ?? !1;
  const n = t.target, r = C, s = $;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ae(n)
    ); i && (i.nodeType !== Xe || /** @type {Comment} */
    i.data !== Zt); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ ie(i);
    if (!i)
      throw xe;
    ye(!0), de(
      /** @type {Comment} */
      i
    ), qt();
    const o = Ln(e, { ...t, anchor: i });
    if ($ === null || $.nodeType !== Xe || /** @type {Comment} */
    $.data !== tn)
      throw ot(), xe;
    return ye(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== xe && console.warn("Failed to hydrate: ", o), t.recover === !1 && hr(), yt(), qr(n), ye(!1), Mn(e, t);
  } finally {
    ye(r), de(s);
  }
}
const ge = /* @__PURE__ */ new Map();
function Ln(e, { target: t, anchor: n, props: r = {}, events: s, context: i, intro: o = !0 }) {
  yt();
  var l = /* @__PURE__ */ new Set(), a = (h) => {
    for (var v = 0; v < h.length; v++) {
      var c = h[v];
      if (!l.has(c)) {
        l.add(c);
        var d = ri(c);
        t.addEventListener(c, ze, { passive: d });
        var p = ge.get(c);
        p === void 0 ? (document.addEventListener(c, ze, { passive: d }), ge.set(c, 1)) : ge.set(c, p + 1);
      }
    }
  };
  a(Qn(In)), kt.add(a);
  var u = void 0, f = Lr(() => {
    var h = n ?? t.appendChild(at());
    return xt(() => {
      if (i) {
        fn({});
        var v = (
          /** @type {ComponentContext} */
          A
        );
        v.c = i;
      }
      s && (r.$$events = s), C && Ve(
        /** @type {TemplateNode} */
        h,
        null
      ), Et = o, u = e(h, r) || {}, Et = !0, C && (_.nodes_end = $), i && cn();
    }), () => {
      for (var v of l) {
        t.removeEventListener(v, ze);
        var c = (
          /** @type {number} */
          ge.get(v)
        );
        --c === 0 ? (document.removeEventListener(v, ze), ge.delete(v)) : ge.set(v, c);
      }
      kt.delete(a), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return At.set(u, f), u;
}
let At = /* @__PURE__ */ new WeakMap();
function oi(e, t) {
  const n = At.get(e);
  return n ? (At.delete(e), n(t)) : Promise.resolve();
}
function Be(e, t, n = !1) {
  C && qt();
  var r = e, s = null, i = null, o = E, l = n ? st : 0, a = !1;
  const u = (c, d = !0) => {
    a = !0, v(d, c);
  };
  var f = null;
  function h() {
    f !== null && (f.lastChild.remove(), r.before(f), f = null);
    var c = o ? s : i, d = o ? i : s;
    c && Gr(c), d && Cn(d, () => {
      o ? i = null : s = null;
    });
  }
  const v = (c, d) => {
    if (o === (o = c)) return;
    let p = !1;
    if (C) {
      const _e = br(r) === en;
      !!o === _e && (r = wr(), de(r), ye(!1), p = !0);
    }
    var b = jr(), F = r;
    if (b && (f = document.createDocumentFragment(), f.append(F = at())), o ? s ??= d && xt(() => d(F)) : i ??= d && xt(() => d(F)), b) {
      var m = (
        /** @type {Batch} */
        x
      ), se = o ? s : i, oe = o ? i : s;
      se && m.skipped_effects.delete(se), oe && m.skipped_effects.add(oe), m.add_callback(h);
    } else
      h();
    p && ye(!0);
  };
  Hr(() => {
    a = !1, t(u), a || v(null, null);
  }, l), C && (r = $);
}
function li(e, t) {
  An(() => {
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
const ai = () => performance.now(), G = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => ai(),
  tasks: /* @__PURE__ */ new Set()
};
function zn() {
  const e = G.now();
  G.tasks.forEach((t) => {
    t.c(e) || (G.tasks.delete(t), t.f());
  }), G.tasks.size !== 0 && G.tick(zn);
}
function ui(e) {
  let t;
  return G.tasks.size === 0 && G.tick(zn), {
    promise: new Promise((n) => {
      G.tasks.add(t = { c: e, f: n });
    }),
    abort() {
      G.tasks.delete(t);
    }
  };
}
function We(e, t) {
  ut(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function fi(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Jt(e) {
  const t = {}, n = e.split(";");
  for (const r of n) {
    const [s, i] = r.split(":");
    if (!s || i === void 0) break;
    const o = fi(s.trim());
    t[o] = i.trim();
  }
  return t;
}
const ci = (e) => e;
function pt(e, t, n, r) {
  var s = (e & Vn) !== 0, i = "both", o, l = t.inert, a = t.style.overflow, u, f;
  function h() {
    return ut(() => o ??= n()(t, r?.() ?? /** @type {P} */
    {}, {
      direction: i
    }));
  }
  var v = {
    is_global: s,
    in() {
      t.inert = l, We(t, "introstart"), u = Tt(t, h(), f, 1, () => {
        We(t, "introend"), u?.abort(), u = o = void 0, t.style.overflow = a;
      });
    },
    out(b) {
      t.inert = !0, We(t, "outrostart"), f = Tt(t, h(), u, 0, () => {
        We(t, "outroend"), b?.();
      });
    },
    stop: () => {
      u?.abort(), f?.abort();
    }
  }, c = (
    /** @type {Effect} */
    _
  );
  if ((c.transitions ??= []).push(v), Et) {
    var d = s;
    if (!d) {
      for (var p = (
        /** @type {Effect | null} */
        c.parent
      ); p && (p.f & st) !== 0; )
        for (; (p = p.parent) && (p.f & Te) === 0; )
          ;
      d = !p || (p.f & it) !== 0;
    }
    d && An(() => {
      Mt(() => v.in());
    });
  }
}
function Tt(e, t, n, r, s) {
  var i = r === 1;
  if (tr(t)) {
    var o, l = !1;
    return $r(() => {
      if (!l) {
        var b = t({ direction: i ? "in" : "out" });
        o = Tt(e, b, n, r, s);
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
      abort: B,
      deactivate: B,
      reset: B,
      t: () => r
    };
  const { delay: a = 0, css: u, tick: f, easing: h = ci } = t;
  var v = [];
  if (i && n === void 0 && (f && f(0, 1), u)) {
    var c = Jt(u(0, 1));
    v.push(c, c);
  }
  var d = () => 1 - r, p = e.animate(v, { duration: a, fill: "forwards" });
  return p.onfinish = () => {
    p.cancel();
    var b = n?.t() ?? 1 - r;
    n?.abort();
    var F = r - b, m = (
      /** @type {number} */
      t.duration * Math.abs(F)
    ), se = [];
    if (m > 0) {
      var oe = !1;
      if (u)
        for (var _e = Math.ceil(m / 16.666666666666668), g = 0; g <= _e; g += 1) {
          var y = b + F * h(g / _e), S = Jt(u(y, 1 - y));
          se.push(S), oe ||= S.overflow === "hidden";
        }
      oe && (e.style.overflow = "hidden"), d = () => {
        var k = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return b + F * h(k / m);
      }, f && ui(() => {
        if (p.playState !== "running") return !1;
        var k = d();
        return f(k, 1 - k), !0;
      });
    }
    p = e.animate(se, { duration: m, fill: "forwards" }), p.onfinish = () => {
      d = () => r, f?.(r, 1 - r), s();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = B);
    },
    deactivate: () => {
      s = B;
    },
    reset: () => {
      r === 0 && f?.(1, 0);
    },
    t: () => d()
  };
}
function di(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    A
  ), n = t.l.u;
  if (!n) return;
  let r = () => Zr(t.s);
  if (e) {
    let s = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ Dt(() => {
      let l = !1;
      const a = t.s;
      for (const u in a)
        a[u] !== i[u] && (i[u] = a[u], l = !0);
      return l && s++, s;
    });
    r = () => U(o);
  }
  n.b.length && Ir(() => {
    Qt(t, r), Je(n.b);
  }), Ut(() => {
    const s = Mt(() => n.m.map(nr));
    return () => {
      for (const i of s)
        typeof i == "function" && i();
    };
  }), n.a.length && Ut(() => {
    Qt(t, r), Je(n.a);
  });
}
function Qt(e, t) {
  if (e.l.s)
    for (const n of e.l.s) U(n);
  t();
}
function Bn(e, t, n) {
  if (e == null)
    return t(void 0), B;
  const r = Mt(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const we = [];
function ct(e, t = B) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function s(l) {
    if (an(e, l) && (e = l, n)) {
      const a = !we.length;
      for (const u of r)
        u[1](), we.push(u, e);
      if (a) {
        for (let u = 0; u < we.length; u += 2)
          we[u][0](we[u + 1]);
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
  function o(l, a = B) {
    const u = [l, a];
    return r.add(u), r.size === 1 && (n = t(s, i) || B), l(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: i, subscribe: o };
}
function hi(e) {
  let t;
  return Bn(e, (n) => t = n)(), t;
}
let St = Symbol();
function He(e, t, n) {
  const r = n[t] ??= {
    store: null,
    source: /* @__PURE__ */ bn(void 0),
    unsubscribe: B
  };
  if (r.store !== e && !(St in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = B;
    else {
      var s = !0;
      r.unsubscribe = Bn(e, (i) => {
        s ? r.source.v = i : V(r.source, i);
      }), s = !1;
    }
  return e && St in n ? hi(e) : U(r.source);
}
function vi() {
  const e = {};
  function t() {
    Pr(() => {
      for (var n in e)
        e[n].unsubscribe();
      ce(e, St, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function pi(e) {
  return new _i(e);
}
class _i {
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
      var l = /* @__PURE__ */ bn(o, !1, !1);
      return n.set(i, l), l;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, o) {
          return U(n.get(o) ?? r(o, Reflect.get(i, o)));
        },
        has(i, o) {
          return o === sr ? !0 : (U(n.get(o) ?? r(o, Reflect.get(i, o))), Reflect.has(i, o));
        },
        set(i, o, l) {
          return V(n.get(o) ?? r(o, l), l), Reflect.set(i, o, l);
        }
      }
    );
    this.#e = (t.hydrate ? si : Mn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && Fr(), this.#t = s.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || ce(this, i, {
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
      oi(this.#e);
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
let Wn;
typeof HTMLElement == "function" && (Wn = class extends HTMLElement {
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
      const t = {}, n = gi(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const s = this.$$g_p(r.name);
        s in this.$$d || (this.$$d[s] = Ge(s, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = pi({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Mr(() => {
        Br(() => {
          this.$$r = !0;
          for (const r of Ke(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const s = Ge(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ge(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return Ke(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Ge(e, t, n, r) {
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
function gi(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function wi(e, t, n, r, s, i) {
  let o = class extends Wn {
    constructor() {
      super(e, n, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ke(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return Ke(t).forEach((l) => {
    ce(o.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(a) {
        a = Ge(l, a, t), this.$$d[l] = a;
        var u = this.$$c;
        if (u) {
          var f = $e(u, l)?.get;
          f ? u[l] = a : u.$set({ [l]: a });
        }
      }
    });
  }), r.forEach((l) => {
    ce(o.prototype, l, {
      get() {
        return this.$$c?.[l];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
function bi(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Xt(e) {
  const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return t ? [parseFloat(t[1]), t[2] || "px"] : [
    /** @type {number} */
    e,
    "px"
  ];
}
function _t(e, { delay: t = 0, duration: n = 400, easing: r = bi, x: s = 0, y: i = 0, opacity: o = 0 } = {}) {
  const l = getComputedStyle(e), a = +l.opacity, u = l.transform === "none" ? "" : l.transform, f = a * (1 - o), [h, v] = Xt(s), [c, d] = Xt(i);
  return {
    delay: t,
    duration: n,
    easing: r,
    css: (p, b) => `
			transform: ${u} translate(${(1 - p) * h}${v}, ${(1 - p) * c}${d});
			opacity: ${a - f * b}`
  };
}
const be = ct(!1), Ue = ct(!1), Ne = ct(!1), Re = ct(!1);
var mi = (e, t) => e.key === "Enter" && t, yi = (e, t) => e.key === "Enter" && t, xi = (e, t) => e.key === "Enter" && t, $i = /* @__PURE__ */ Le(`<div class="welcome-box svelte-uwlg0o"><div class="welcome svelte-uwlg0o"><h1 class="svelte-uwlg0o">Welcome to our website!</h1> <p class="svelte-uwlg0o">Nice to meet you! If you have any question about our services, feel free to contact us.</p></div> <div class="welcome-2 svelte-uwlg0o"><div class="faq svelte-uwlg0o" aria-details="faq option" role="button" tabindex="0">FAQ</div> <div class="talk svelte-uwlg0o" aria-details="chat option" role="button" tabindex="0">Let's Talk</div></div></div>`), ki = (e, t) => e.key === "Enter" && t, Ei = /* @__PURE__ */ Le(' <div class="faq-box svelte-uwlg0o"><div class="faq-options svelte-uwlg0o"><ul class="faq-options-li svelte-uwlg0o"><li class="svelte-uwlg0o">How do I apply?</li> <li class="svelte-uwlg0o">What courses do you offer?</li> <li class="svelte-uwlg0o">When do applications close?</li> <li class="svelte-uwlg0o">Where is the campus located?</li> <li class="svelte-uwlg0o">Talk to someone?</li> <div id="talk-btn" aria-details="chat option" role="button" tabindex="0" class="svelte-uwlg0o">Can I talk to someone?</div></ul></div></div>', 1), Ai = (e) => e.key === "Enter" && console.log("recorded"), Ti = () => console.log("recorded"), Si = /* @__PURE__ */ Le(`<div class="chat-dialog svelte-uwlg0o"><div class="chat-header svelte-uwlg0o"><div class="svelte-uwlg0o"><h1 class="svelte-uwlg0o">ChatFlow</h1> <p>A live chat interface that allows for seamless, natural communication and connection.</p></div> <div class="cross svelte-uwlg0o" role="button" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg></div></div> <div class="chat-body svelte-uwlg0o"><p class="bot-msg svelte-uwlg0o">Hi! How Can I help You?</p> <div class="chat-options svelte-uwlg0o"><ul id="chat-options" class="svelte-uwlg0o"><li class="svelte-uwlg0o">How do I apply?</li> <li class="svelte-uwlg0o">What courses do you offer?</li> <li class="svelte-uwlg0o">When do applications close?</li> <li class="svelte-uwlg0o">Where is the campus located?</li> <li class="svelte-uwlg0o">Talk to someone?</li></ul></div> <div class="input svelte-uwlg0o"><input type="text" placeholder="Let's share something" class="svelte-uwlg0o"/> <button class="send svelte-uwlg0o" tabindex="0"><img src="/src/assets/Shape.svg" alt="" class="svelte-uwlg0o"/></button></div></div></div>`), Oi = /* @__PURE__ */ Le(`<div class="chat-dialog svelte-uwlg0o"><div class="chat-header svelte-uwlg0o"><div class="svelte-uwlg0o"><h1 class="svelte-uwlg0o">ChatFlow</h1> <p>A live chat interface that allows for seamless, natural communication and connection.</p></div> <div class="cross svelte-uwlg0o" role="button" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg></div></div> <div class="chat-body svelte-uwlg0o"><p class="bot-msg svelte-uwlg0o">Thanks for joining us! Let's start by getting your name.</p> <ul class="user-msg svelte-uwlg0o"><li class="svelte-uwlg0o">John</li></ul> <div class="input svelte-uwlg0o"><input type="text" placeholder="Let's share something" class="svelte-uwlg0o"/> <button class="send svelte-uwlg0o"><img src="/Shape.svg" alt="" class="svelte-uwlg0o"/></button></div></div></div>`), Ci = /* @__PURE__ */ Le('<div><div class="chat-icon svelte-uwlg0o" aria-live="polite" aria-label="Chat" role="button" tabindex="0"></div> <!> <!> <!> <!></div>');
const Fi = {
  hash: "svelte-uwlg0o",
  code: `\r
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');\r
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&display=swap');\r
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');\r
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&family=Questrial&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');:host {all:initial; /* Reset styles */position:fixed;bottom:1rem;right:1rem;z-index:9999;}.chat-icon.svelte-uwlg0o {\r
    /* position: absolute; */bottom:20px;background-image:url("/Objects.svg");background-repeat:no-repeat;background-size:contain;\r
    /* background-size: 120%; */background-position-x:100%;background-position-y:100%;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 8px rgba(0, 0, 0, 0.15);box-sizing:border-box;transition:all 0.3s ease-in-out;position:relative;}.chat-icon.svelte-uwlg0o:hover {transform:scale(1.05);box-shadow:0 6px 12px rgba(0, 0, 0, 0.2);}.chat-dialog.svelte-uwlg0o {position:absolute;bottom:90px;right:5%;width:400px;height:618px;background:white;border-radius:15px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.2);display:flex;flex-direction:column;overflow:hidden;}.welcome-box.svelte-uwlg0o {position:fixed;right:1%;bottom:90px;display:flex;flex-direction:column;gap:10px;margin-bottom:10px;font-family:Figtree;font-weight:700;font-style:Bold;font-size:16px;line-height:24px;letter-spacing:0%;max-height:calc((248-60)px);}.welcome.svelte-uwlg0o {box-sizing:border-box;max-width:290px;max-height:124px;background:#E9E9E9;\r
    /* just for visibility */padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;border-radius:24px 24px 0 24px;display:flex;flex-direction:column;}.welcome.svelte-uwlg0o h1:where(.svelte-uwlg0o){font-size:16px;margin:0;padding:0;}.welcome.svelte-uwlg0o p:where(.svelte-uwlg0o){box-sizing:border-box;font-family:"Figtree";font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;padding:0;margin:0;}.welcome-2.svelte-uwlg0o {\r
    /* width: 290px; */height:44px;display:flex;\r
    /* justify-content: space-between; */gap:10px;}.faq.svelte-uwlg0o,.talk.svelte-uwlg0o{background:linear-gradient(270deg, #A7BEFE 0%, #43319A 100%);height:44px;width:140px;display:flex;justify-content:center;align-items:center;border-radius:20px;color:white;font-size:16px;cursor:pointer;transition:all 0.2s ease-in-out;}.faq.svelte-uwlg0o:hover {transform:scale(1.02);}.talk.svelte-uwlg0o:hover{transform:scale(1.02);}.chat-header.svelte-uwlg0o {background:linear-gradient(270deg, #A7BEFE 0%, #6E6EC5 36.11%, #5347AA 64.88%, #43319A 100%);;\rpadding: 0.8rem;display:flex;justify-content:space-between;}.chat-header.svelte-uwlg0o div:where(.svelte-uwlg0o) h1:where(.svelte-uwlg0o){font-family:'source sans 3', sans-serif;font-weight:700;font-style:Bold;font-size:30px;\r
    /* line-height: 100%; */letter-spacing:0%;}.chat-header.svelte-uwlg0o div:where(.svelte-uwlg0o){color:white;font-family:'Questrial', sans-serif;font-weight:300;font-size:12px;line-height:16px;letter-spacing:22%;display:inline;}.cross.svelte-uwlg0o{cursor:pointer;padding-top:1px;\r
    /* margin-right: 5px; */\r
    /* width: 15px; */font-size:15rem;}.chat-body.svelte-uwlg0o {flex:1;position:relative;height:inherit;padding:0.5rem;padding-top:169px;padding-bottom:1.5rem;overflow-y:auto;}.chat-options.svelte-uwlg0o{padding:0.5rem;}#chat-options.svelte-uwlg0o{padding:0.5rem;outline:none;border-radius:10px;position:absolute;bottom:10%;right:0%;text-decoration:none;display:flex;flex-direction:column;gap:0.5rem;align-items:flex-end;}#chat-options.svelte-uwlg0o li:where(.svelte-uwlg0o){padding:0.3rem;border:1px solid #A3B9FA;color:#6D6CC4;border-radius:16px;list-style:none;padding-right:12px;padding-left:12px;width:130;height:32;gap:8px;font-family:Inter;font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;vertical-align:middle;transition:border ease-in-out;}#chat-options.svelte-uwlg0o li:where(.svelte-uwlg0o):hover{\r
    /* background: #f0f0f0; */\r
    /* transform: scale(1.03); */border:2px solid #A3B9FA;cursor:pointer;}.input.svelte-uwlg0o{position:absolute;bottom:0;left:0;\r
    /* padding: 1rem; */\r
    /* border: 1px solid #ccc; */margin:12px;border:none;width:376px;height:48px;box-sizing:border-box;border:1px solid #f0f0f0f5;border-radius:12px;display:flex;align-items:center;padding-left:12px;padding-right:12px;}.input.svelte-uwlg0o input:where(.svelte-uwlg0o){flex:1;height:32px;border:none;outline:none;background:transparent;}.input.svelte-uwlg0o:focus{outline:none;\r
    /* border: 2px solid #46b3e5; */}.send.svelte-uwlg0o{background-color:#5347AA;width:32px;height:32px;display:flex;justify-content:center;align-items:center;opacity:1;border-radius:12px;border-width:1px;color:white;cursor:pointer;}.send.svelte-uwlg0o img:where(.svelte-uwlg0o){width:14px;height:14px;}.bot-msg.svelte-uwlg0o{\r
    /* width: 165px; */\r
    /* height: 32px; */padding:12px;display:inline-block;max-width:290px;width:fit-content;border-top-right-radius:16px;border-bottom-right-radius:16px;border-bottom-left-radius:16px;padding-top:12px;\r
    /* padding-bottom: 12px; */text-align:left;background-color:#F4F4F4;font-family:'Outfit', sans-serif;font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;}.faq-box.svelte-uwlg0o{width:290px;height:324px;display:flex;flex-direction:column;position:fixed;bottom:70px;right:1%;}.faq-options.svelte-uwlg0o {padding:0.5rem;}.faq-options-li.svelte-uwlg0o {padding:0.5rem;border-radius:10px;position:absolute;bottom:10%;right:0%;text-decoration:none;display:flex;flex-direction:column;gap:0.5rem;align-items:flex-end;}.faq-options-li.svelte-uwlg0o li:where(.svelte-uwlg0o) {cursor:pointer;background-color:#E9E9E9;padding:12px 24px 12px 24px;border-radius:24px;list-style:none;font-family:'Figtree', sans-serif;font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;text-align:right;display:flex;justify-content:center;align-items:center;}.faq-options-li.svelte-uwlg0o li:where(.svelte-uwlg0o):hover {\r
      /* background: #f0f0f0; */transform:scale(1.03);\r
      /* border: 2px solid #A3B9FA; */cursor:pointer;}#talk-btn.svelte-uwlg0o {cursor:pointer;background:linear-gradient(270deg, #A7BEFE 0%, #43319A 100%);border-radius:20px;width:290px;padding:12px 16px 12px 16px;color:white;font-family:DM Sans;font-weight:700;font-size:14px;line-height:20px;letter-spacing:0%;text-align:center;display:flex;justify-content:center;align-items:center;}.user-msg.svelte-uwlg0o{display:flex;justify-content:flex-end;}.user-msg.svelte-uwlg0o li:where(.svelte-uwlg0o){display:inline-block;width:fit-content;padding:5px 12px 5px 12px;border:1px solid #43319A;border-top-left-radius:16px;border-bottom-right-radius:16px;border-bottom-left-radius:16px;list-style:none;\r
        /* padding:12px; */\r
        /* padding-left: 12px; */}`
};
function Ni(e, t) {
  fn(t, !1), li(e, Fi);
  const [n, r] = vi(), s = () => He(be, "$open", n), i = () => He(Ue, "$openFaq", n), o = () => He(Ne, "$openChat", n), l = () => He(Re, "$openAgent", n), a = () => {
    be.update((g) => !g), Ne.set(!1), Ue.set(!1), Re.set(!1);
  }, u = () => {
    s() && be.update((g) => !g), Ne.update((g) => !g);
  }, f = () => {
    s() && be.update((g) => !g), Re.update((g) => !g);
  }, h = () => {
    s() && be.update((g) => !g), Ue.update((g) => !g);
  };
  di();
  var v = Ci(), c = I(v);
  c.__click = a, c.__keydown = [mi, a];
  var d = q(c, 2);
  {
    var p = (g) => {
      var y = $i(), S = q(I(y), 2), k = I(S);
      k.__click = h, k.__keydown = [yi, h];
      var N = q(k, 2);
      N.__click = u, N.__keydown = [xi, u], P(S), P(y), pt(3, y, () => _t, () => ({ y: 20, duration: 300 })), me(g, y);
    };
    Be(d, (g) => {
      s() && g(p);
    });
  }
  var b = q(d, 2);
  {
    var F = (g) => {
      var y = Ei(), S = Rr(y), k = q(S), N = I(k), le = I(N), Ce = q(I(le), 10);
      Ce.__click = f, Ce.__keydown = [ki, f], P(le), P(N), P(k), Wr((dt) => ii(S, `${dt ?? ""} `), [() => be.set(!1)]), me(g, y);
    };
    Be(b, (g) => {
      i() && s() == !1 && g(F);
    });
  }
  var m = q(b, 2);
  {
    var se = (g) => {
      var y = Si(), S = I(y), k = q(I(S), 2);
      k.__click = () => Ne.update((ht) => !ht), k.__keydown = (ht) => ht.key === "enter" && Ne.update((Hn) => !Hn), P(S);
      var N = q(S, 2), le = q(I(N), 4), Ce = I(le);
      Ce.__keydown = [Ai];
      var dt = q(Ce, 2);
      dt.__click = [Ti], P(le), P(N), P(y), pt(3, y, () => _t, () => ({ x: 20, duration: 300 })), me(g, y);
    };
    Be(m, (g) => {
      o() && !s() && g(se);
    });
  }
  var oe = q(m, 2);
  {
    var _e = (g) => {
      var y = Oi(), S = I(y), k = q(I(S), 2);
      k.__click = () => {
        Re.update((N) => !N), Ue.update((N) => !N);
      }, k.__keydown = (N) => N.key === "enter" && Re.update((le) => !le), P(S), gr(2), P(y), pt(3, y, () => _t, () => ({ x: 20, duration: 300 })), me(g, y);
    };
    Be(oe, (g) => {
      l() && !s() && g(_e);
    });
  }
  P(v), me(e, v), cn(), r();
}
ei(["click", "keydown"]);
customElements.define("chat-widget", wi(Ni, {}, [], [], !0));
export {
  Ni as default
};
