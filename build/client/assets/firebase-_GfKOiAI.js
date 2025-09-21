import {
  r as wr,
  L as Ba,
  _ as qa,
  C as $a,
  a as za,
  F as Ga,
  b as Dt,
  g as Ka,
  c as Qa,
  d as Wa,
  i as Yi,
  p as Ha,
  u as Xa,
  e as Ya,
  f as Ja,
  h as $e,
  j as Za,
  k as tu,
  S as eu,
  l as nu,
  m as ru,
  s as su,
  n as iu,
  o as ou,
  q as au,
  t as uu,
} from './index.esm-BE3Wjq2f.js';
var lu = 'firebase',
  hu = '12.3.0';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ wr(lu, hu, 'app');
var li =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof globalThis < 'u'
        ? globalThis
        : typeof self < 'u'
          ? self
          : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var Lr;
(function () {
  var s;
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ function t(y, f) {
    function p() {}
    ((p.prototype = f.prototype),
      (y.F = f.prototype),
      (y.prototype = new p()),
      (y.prototype.constructor = y),
      (y.D = function (E, _, v) {
        for (
          var m = Array(arguments.length - 2), pt = 2;
          pt < arguments.length;
          pt++
        )
          m[pt - 2] = arguments[pt];
        return f.prototype[_].apply(E, m);
      }));
  }
  function e() {
    this.blockSize = -1;
  }
  function r() {
    ((this.blockSize = -1),
      (this.blockSize = 64),
      (this.g = Array(4)),
      (this.C = Array(this.blockSize)),
      (this.o = this.h = 0),
      this.u());
  }
  (t(r, e),
    (r.prototype.u = function () {
      ((this.g[0] = 1732584193),
        (this.g[1] = 4023233417),
        (this.g[2] = 2562383102),
        (this.g[3] = 271733878),
        (this.o = this.h = 0));
    }));
  function i(y, f, p) {
    p || (p = 0);
    const E = Array(16);
    if (typeof f == 'string')
      for (var _ = 0; _ < 16; ++_)
        E[_] =
          f.charCodeAt(p++) |
          (f.charCodeAt(p++) << 8) |
          (f.charCodeAt(p++) << 16) |
          (f.charCodeAt(p++) << 24);
    else
      for (_ = 0; _ < 16; ++_)
        E[_] = f[p++] | (f[p++] << 8) | (f[p++] << 16) | (f[p++] << 24);
    ((f = y.g[0]), (p = y.g[1]), (_ = y.g[2]));
    let v = y.g[3],
      m;
    ((m = (f + (v ^ (p & (_ ^ v))) + E[0] + 3614090360) & 4294967295),
      (f = p + (((m << 7) & 4294967295) | (m >>> 25))),
      (m = (v + (_ ^ (f & (p ^ _))) + E[1] + 3905402710) & 4294967295),
      (v = f + (((m << 12) & 4294967295) | (m >>> 20))),
      (m = (_ + (p ^ (v & (f ^ p))) + E[2] + 606105819) & 4294967295),
      (_ = v + (((m << 17) & 4294967295) | (m >>> 15))),
      (m = (p + (f ^ (_ & (v ^ f))) + E[3] + 3250441966) & 4294967295),
      (p = _ + (((m << 22) & 4294967295) | (m >>> 10))),
      (m = (f + (v ^ (p & (_ ^ v))) + E[4] + 4118548399) & 4294967295),
      (f = p + (((m << 7) & 4294967295) | (m >>> 25))),
      (m = (v + (_ ^ (f & (p ^ _))) + E[5] + 1200080426) & 4294967295),
      (v = f + (((m << 12) & 4294967295) | (m >>> 20))),
      (m = (_ + (p ^ (v & (f ^ p))) + E[6] + 2821735955) & 4294967295),
      (_ = v + (((m << 17) & 4294967295) | (m >>> 15))),
      (m = (p + (f ^ (_ & (v ^ f))) + E[7] + 4249261313) & 4294967295),
      (p = _ + (((m << 22) & 4294967295) | (m >>> 10))),
      (m = (f + (v ^ (p & (_ ^ v))) + E[8] + 1770035416) & 4294967295),
      (f = p + (((m << 7) & 4294967295) | (m >>> 25))),
      (m = (v + (_ ^ (f & (p ^ _))) + E[9] + 2336552879) & 4294967295),
      (v = f + (((m << 12) & 4294967295) | (m >>> 20))),
      (m = (_ + (p ^ (v & (f ^ p))) + E[10] + 4294925233) & 4294967295),
      (_ = v + (((m << 17) & 4294967295) | (m >>> 15))),
      (m = (p + (f ^ (_ & (v ^ f))) + E[11] + 2304563134) & 4294967295),
      (p = _ + (((m << 22) & 4294967295) | (m >>> 10))),
      (m = (f + (v ^ (p & (_ ^ v))) + E[12] + 1804603682) & 4294967295),
      (f = p + (((m << 7) & 4294967295) | (m >>> 25))),
      (m = (v + (_ ^ (f & (p ^ _))) + E[13] + 4254626195) & 4294967295),
      (v = f + (((m << 12) & 4294967295) | (m >>> 20))),
      (m = (_ + (p ^ (v & (f ^ p))) + E[14] + 2792965006) & 4294967295),
      (_ = v + (((m << 17) & 4294967295) | (m >>> 15))),
      (m = (p + (f ^ (_ & (v ^ f))) + E[15] + 1236535329) & 4294967295),
      (p = _ + (((m << 22) & 4294967295) | (m >>> 10))),
      (m = (f + (_ ^ (v & (p ^ _))) + E[1] + 4129170786) & 4294967295),
      (f = p + (((m << 5) & 4294967295) | (m >>> 27))),
      (m = (v + (p ^ (_ & (f ^ p))) + E[6] + 3225465664) & 4294967295),
      (v = f + (((m << 9) & 4294967295) | (m >>> 23))),
      (m = (_ + (f ^ (p & (v ^ f))) + E[11] + 643717713) & 4294967295),
      (_ = v + (((m << 14) & 4294967295) | (m >>> 18))),
      (m = (p + (v ^ (f & (_ ^ v))) + E[0] + 3921069994) & 4294967295),
      (p = _ + (((m << 20) & 4294967295) | (m >>> 12))),
      (m = (f + (_ ^ (v & (p ^ _))) + E[5] + 3593408605) & 4294967295),
      (f = p + (((m << 5) & 4294967295) | (m >>> 27))),
      (m = (v + (p ^ (_ & (f ^ p))) + E[10] + 38016083) & 4294967295),
      (v = f + (((m << 9) & 4294967295) | (m >>> 23))),
      (m = (_ + (f ^ (p & (v ^ f))) + E[15] + 3634488961) & 4294967295),
      (_ = v + (((m << 14) & 4294967295) | (m >>> 18))),
      (m = (p + (v ^ (f & (_ ^ v))) + E[4] + 3889429448) & 4294967295),
      (p = _ + (((m << 20) & 4294967295) | (m >>> 12))),
      (m = (f + (_ ^ (v & (p ^ _))) + E[9] + 568446438) & 4294967295),
      (f = p + (((m << 5) & 4294967295) | (m >>> 27))),
      (m = (v + (p ^ (_ & (f ^ p))) + E[14] + 3275163606) & 4294967295),
      (v = f + (((m << 9) & 4294967295) | (m >>> 23))),
      (m = (_ + (f ^ (p & (v ^ f))) + E[3] + 4107603335) & 4294967295),
      (_ = v + (((m << 14) & 4294967295) | (m >>> 18))),
      (m = (p + (v ^ (f & (_ ^ v))) + E[8] + 1163531501) & 4294967295),
      (p = _ + (((m << 20) & 4294967295) | (m >>> 12))),
      (m = (f + (_ ^ (v & (p ^ _))) + E[13] + 2850285829) & 4294967295),
      (f = p + (((m << 5) & 4294967295) | (m >>> 27))),
      (m = (v + (p ^ (_ & (f ^ p))) + E[2] + 4243563512) & 4294967295),
      (v = f + (((m << 9) & 4294967295) | (m >>> 23))),
      (m = (_ + (f ^ (p & (v ^ f))) + E[7] + 1735328473) & 4294967295),
      (_ = v + (((m << 14) & 4294967295) | (m >>> 18))),
      (m = (p + (v ^ (f & (_ ^ v))) + E[12] + 2368359562) & 4294967295),
      (p = _ + (((m << 20) & 4294967295) | (m >>> 12))),
      (m = (f + (p ^ _ ^ v) + E[5] + 4294588738) & 4294967295),
      (f = p + (((m << 4) & 4294967295) | (m >>> 28))),
      (m = (v + (f ^ p ^ _) + E[8] + 2272392833) & 4294967295),
      (v = f + (((m << 11) & 4294967295) | (m >>> 21))),
      (m = (_ + (v ^ f ^ p) + E[11] + 1839030562) & 4294967295),
      (_ = v + (((m << 16) & 4294967295) | (m >>> 16))),
      (m = (p + (_ ^ v ^ f) + E[14] + 4259657740) & 4294967295),
      (p = _ + (((m << 23) & 4294967295) | (m >>> 9))),
      (m = (f + (p ^ _ ^ v) + E[1] + 2763975236) & 4294967295),
      (f = p + (((m << 4) & 4294967295) | (m >>> 28))),
      (m = (v + (f ^ p ^ _) + E[4] + 1272893353) & 4294967295),
      (v = f + (((m << 11) & 4294967295) | (m >>> 21))),
      (m = (_ + (v ^ f ^ p) + E[7] + 4139469664) & 4294967295),
      (_ = v + (((m << 16) & 4294967295) | (m >>> 16))),
      (m = (p + (_ ^ v ^ f) + E[10] + 3200236656) & 4294967295),
      (p = _ + (((m << 23) & 4294967295) | (m >>> 9))),
      (m = (f + (p ^ _ ^ v) + E[13] + 681279174) & 4294967295),
      (f = p + (((m << 4) & 4294967295) | (m >>> 28))),
      (m = (v + (f ^ p ^ _) + E[0] + 3936430074) & 4294967295),
      (v = f + (((m << 11) & 4294967295) | (m >>> 21))),
      (m = (_ + (v ^ f ^ p) + E[3] + 3572445317) & 4294967295),
      (_ = v + (((m << 16) & 4294967295) | (m >>> 16))),
      (m = (p + (_ ^ v ^ f) + E[6] + 76029189) & 4294967295),
      (p = _ + (((m << 23) & 4294967295) | (m >>> 9))),
      (m = (f + (p ^ _ ^ v) + E[9] + 3654602809) & 4294967295),
      (f = p + (((m << 4) & 4294967295) | (m >>> 28))),
      (m = (v + (f ^ p ^ _) + E[12] + 3873151461) & 4294967295),
      (v = f + (((m << 11) & 4294967295) | (m >>> 21))),
      (m = (_ + (v ^ f ^ p) + E[15] + 530742520) & 4294967295),
      (_ = v + (((m << 16) & 4294967295) | (m >>> 16))),
      (m = (p + (_ ^ v ^ f) + E[2] + 3299628645) & 4294967295),
      (p = _ + (((m << 23) & 4294967295) | (m >>> 9))),
      (m = (f + (_ ^ (p | ~v)) + E[0] + 4096336452) & 4294967295),
      (f = p + (((m << 6) & 4294967295) | (m >>> 26))),
      (m = (v + (p ^ (f | ~_)) + E[7] + 1126891415) & 4294967295),
      (v = f + (((m << 10) & 4294967295) | (m >>> 22))),
      (m = (_ + (f ^ (v | ~p)) + E[14] + 2878612391) & 4294967295),
      (_ = v + (((m << 15) & 4294967295) | (m >>> 17))),
      (m = (p + (v ^ (_ | ~f)) + E[5] + 4237533241) & 4294967295),
      (p = _ + (((m << 21) & 4294967295) | (m >>> 11))),
      (m = (f + (_ ^ (p | ~v)) + E[12] + 1700485571) & 4294967295),
      (f = p + (((m << 6) & 4294967295) | (m >>> 26))),
      (m = (v + (p ^ (f | ~_)) + E[3] + 2399980690) & 4294967295),
      (v = f + (((m << 10) & 4294967295) | (m >>> 22))),
      (m = (_ + (f ^ (v | ~p)) + E[10] + 4293915773) & 4294967295),
      (_ = v + (((m << 15) & 4294967295) | (m >>> 17))),
      (m = (p + (v ^ (_ | ~f)) + E[1] + 2240044497) & 4294967295),
      (p = _ + (((m << 21) & 4294967295) | (m >>> 11))),
      (m = (f + (_ ^ (p | ~v)) + E[8] + 1873313359) & 4294967295),
      (f = p + (((m << 6) & 4294967295) | (m >>> 26))),
      (m = (v + (p ^ (f | ~_)) + E[15] + 4264355552) & 4294967295),
      (v = f + (((m << 10) & 4294967295) | (m >>> 22))),
      (m = (_ + (f ^ (v | ~p)) + E[6] + 2734768916) & 4294967295),
      (_ = v + (((m << 15) & 4294967295) | (m >>> 17))),
      (m = (p + (v ^ (_ | ~f)) + E[13] + 1309151649) & 4294967295),
      (p = _ + (((m << 21) & 4294967295) | (m >>> 11))),
      (m = (f + (_ ^ (p | ~v)) + E[4] + 4149444226) & 4294967295),
      (f = p + (((m << 6) & 4294967295) | (m >>> 26))),
      (m = (v + (p ^ (f | ~_)) + E[11] + 3174756917) & 4294967295),
      (v = f + (((m << 10) & 4294967295) | (m >>> 22))),
      (m = (_ + (f ^ (v | ~p)) + E[2] + 718787259) & 4294967295),
      (_ = v + (((m << 15) & 4294967295) | (m >>> 17))),
      (m = (p + (v ^ (_ | ~f)) + E[9] + 3951481745) & 4294967295),
      (y.g[0] = (y.g[0] + f) & 4294967295),
      (y.g[1] =
        (y.g[1] + (_ + (((m << 21) & 4294967295) | (m >>> 11)))) & 4294967295),
      (y.g[2] = (y.g[2] + _) & 4294967295),
      (y.g[3] = (y.g[3] + v) & 4294967295));
  }
  ((r.prototype.v = function (y, f) {
    f === void 0 && (f = y.length);
    const p = f - this.blockSize,
      E = this.C;
    let _ = this.h,
      v = 0;
    for (; v < f; ) {
      if (_ == 0) for (; v <= p; ) (i(this, y, v), (v += this.blockSize));
      if (typeof y == 'string') {
        for (; v < f; )
          if (((E[_++] = y.charCodeAt(v++)), _ == this.blockSize)) {
            (i(this, E), (_ = 0));
            break;
          }
      } else
        for (; v < f; )
          if (((E[_++] = y[v++]), _ == this.blockSize)) {
            (i(this, E), (_ = 0));
            break;
          }
    }
    ((this.h = _), (this.o += f));
  }),
    (r.prototype.A = function () {
      var y = Array(
        (this.h < 56 ? this.blockSize : this.blockSize * 2) - this.h
      );
      y[0] = 128;
      for (var f = 1; f < y.length - 8; ++f) y[f] = 0;
      f = this.o * 8;
      for (var p = y.length - 8; p < y.length; ++p)
        ((y[p] = f & 255), (f /= 256));
      for (this.v(y), y = Array(16), f = 0, p = 0; p < 4; ++p)
        for (let E = 0; E < 32; E += 8) y[f++] = (this.g[p] >>> E) & 255;
      return y;
    }));
  function a(y, f) {
    var p = c;
    return Object.prototype.hasOwnProperty.call(p, y) ? p[y] : (p[y] = f(y));
  }
  function l(y, f) {
    this.h = f;
    const p = [];
    let E = !0;
    for (let _ = y.length - 1; _ >= 0; _--) {
      const v = y[_] | 0;
      (E && v == f) || ((p[_] = v), (E = !1));
    }
    this.g = p;
  }
  var c = {};
  function d(y) {
    return -128 <= y && y < 128
      ? a(y, function (f) {
          return new l([f | 0], f < 0 ? -1 : 0);
        })
      : new l([y | 0], y < 0 ? -1 : 0);
  }
  function g(y) {
    if (isNaN(y) || !isFinite(y)) return w;
    if (y < 0) return N(g(-y));
    const f = [];
    let p = 1;
    for (let E = 0; y >= p; E++) ((f[E] = (y / p) | 0), (p *= 4294967296));
    return new l(f, 0);
  }
  function I(y, f) {
    if (y.length == 0) throw Error('number format error: empty string');
    if (((f = f || 10), f < 2 || 36 < f))
      throw Error('radix out of range: ' + f);
    if (y.charAt(0) == '-') return N(I(y.substring(1), f));
    if (y.indexOf('-') >= 0)
      throw Error('number format error: interior "-" character');
    const p = g(Math.pow(f, 8));
    let E = w;
    for (let v = 0; v < y.length; v += 8) {
      var _ = Math.min(8, y.length - v);
      const m = parseInt(y.substring(v, v + _), f);
      _ < 8
        ? ((_ = g(Math.pow(f, _))), (E = E.j(_).add(g(m))))
        : ((E = E.j(p)), (E = E.add(g(m))));
    }
    return E;
  }
  var w = d(0),
    S = d(1),
    b = d(16777216);
  ((s = l.prototype),
    (s.m = function () {
      if (L(this)) return -N(this).m();
      let y = 0,
        f = 1;
      for (let p = 0; p < this.g.length; p++) {
        const E = this.i(p);
        ((y += (E >= 0 ? E : 4294967296 + E) * f), (f *= 4294967296));
      }
      return y;
    }),
    (s.toString = function (y) {
      if (((y = y || 10), y < 2 || 36 < y))
        throw Error('radix out of range: ' + y);
      if (O(this)) return '0';
      if (L(this)) return '-' + N(this).toString(y);
      const f = g(Math.pow(y, 6));
      var p = this;
      let E = '';
      for (;;) {
        const _ = Tt(p, f).g;
        p = K(p, _.j(f));
        let v = ((p.g.length > 0 ? p.g[0] : p.h) >>> 0).toString(y);
        if (((p = _), O(p))) return v + E;
        for (; v.length < 6; ) v = '0' + v;
        E = v + E;
      }
    }),
    (s.i = function (y) {
      return y < 0 ? 0 : y < this.g.length ? this.g[y] : this.h;
    }));
  function O(y) {
    if (y.h != 0) return !1;
    for (let f = 0; f < y.g.length; f++) if (y.g[f] != 0) return !1;
    return !0;
  }
  function L(y) {
    return y.h == -1;
  }
  s.l = function (y) {
    return ((y = K(this, y)), L(y) ? -1 : O(y) ? 0 : 1);
  };
  function N(y) {
    const f = y.g.length,
      p = [];
    for (let E = 0; E < f; E++) p[E] = ~y.g[E];
    return new l(p, ~y.h).add(S);
  }
  ((s.abs = function () {
    return L(this) ? N(this) : this;
  }),
    (s.add = function (y) {
      const f = Math.max(this.g.length, y.g.length),
        p = [];
      let E = 0;
      for (let _ = 0; _ <= f; _++) {
        let v = E + (this.i(_) & 65535) + (y.i(_) & 65535),
          m = (v >>> 16) + (this.i(_) >>> 16) + (y.i(_) >>> 16);
        ((E = m >>> 16), (v &= 65535), (m &= 65535), (p[_] = (m << 16) | v));
      }
      return new l(p, p[p.length - 1] & -2147483648 ? -1 : 0);
    }));
  function K(y, f) {
    return y.add(N(f));
  }
  s.j = function (y) {
    if (O(this) || O(y)) return w;
    if (L(this)) return L(y) ? N(this).j(N(y)) : N(N(this).j(y));
    if (L(y)) return N(this.j(N(y)));
    if (this.l(b) < 0 && y.l(b) < 0) return g(this.m() * y.m());
    const f = this.g.length + y.g.length,
      p = [];
    for (var E = 0; E < 2 * f; E++) p[E] = 0;
    for (E = 0; E < this.g.length; E++)
      for (let _ = 0; _ < y.g.length; _++) {
        const v = this.i(E) >>> 16,
          m = this.i(E) & 65535,
          pt = y.i(_) >>> 16,
          Gt = y.i(_) & 65535;
        ((p[2 * E + 2 * _] += m * Gt),
          H(p, 2 * E + 2 * _),
          (p[2 * E + 2 * _ + 1] += v * Gt),
          H(p, 2 * E + 2 * _ + 1),
          (p[2 * E + 2 * _ + 1] += m * pt),
          H(p, 2 * E + 2 * _ + 1),
          (p[2 * E + 2 * _ + 2] += v * pt),
          H(p, 2 * E + 2 * _ + 2));
      }
    for (y = 0; y < f; y++) p[y] = (p[2 * y + 1] << 16) | p[2 * y];
    for (y = f; y < 2 * f; y++) p[y] = 0;
    return new l(p, 0);
  };
  function H(y, f) {
    for (; (y[f] & 65535) != y[f]; )
      ((y[f + 1] += y[f] >>> 16), (y[f] &= 65535), f++);
  }
  function X(y, f) {
    ((this.g = y), (this.h = f));
  }
  function Tt(y, f) {
    if (O(f)) throw Error('division by zero');
    if (O(y)) return new X(w, w);
    if (L(y)) return ((f = Tt(N(y), f)), new X(N(f.g), N(f.h)));
    if (L(f)) return ((f = Tt(y, N(f))), new X(N(f.g), f.h));
    if (y.g.length > 30) {
      if (L(y) || L(f))
        throw Error('slowDivide_ only works with positive integers.');
      for (var p = S, E = f; E.l(y) <= 0; ) ((p = Et(p)), (E = Et(E)));
      var _ = ft(p, 1),
        v = ft(E, 1);
      for (E = ft(E, 2), p = ft(p, 2); !O(E); ) {
        var m = v.add(E);
        (m.l(y) <= 0 && ((_ = _.add(p)), (v = m)),
          (E = ft(E, 1)),
          (p = ft(p, 1)));
      }
      return ((f = K(y, _.j(f))), new X(_, f));
    }
    for (_ = w; y.l(f) >= 0; ) {
      for (
        p = Math.max(1, Math.floor(y.m() / f.m())),
          E = Math.ceil(Math.log(p) / Math.LN2),
          E = E <= 48 ? 1 : Math.pow(2, E - 48),
          v = g(p),
          m = v.j(f);
        L(m) || m.l(y) > 0;

      )
        ((p -= E), (v = g(p)), (m = v.j(f)));
      (O(v) && (v = S), (_ = _.add(v)), (y = K(y, m)));
    }
    return new X(_, y);
  }
  ((s.B = function (y) {
    return Tt(this, y).h;
  }),
    (s.and = function (y) {
      const f = Math.max(this.g.length, y.g.length),
        p = [];
      for (let E = 0; E < f; E++) p[E] = this.i(E) & y.i(E);
      return new l(p, this.h & y.h);
    }),
    (s.or = function (y) {
      const f = Math.max(this.g.length, y.g.length),
        p = [];
      for (let E = 0; E < f; E++) p[E] = this.i(E) | y.i(E);
      return new l(p, this.h | y.h);
    }),
    (s.xor = function (y) {
      const f = Math.max(this.g.length, y.g.length),
        p = [];
      for (let E = 0; E < f; E++) p[E] = this.i(E) ^ y.i(E);
      return new l(p, this.h ^ y.h);
    }));
  function Et(y) {
    const f = y.g.length + 1,
      p = [];
    for (let E = 0; E < f; E++) p[E] = (y.i(E) << 1) | (y.i(E - 1) >>> 31);
    return new l(p, y.h);
  }
  function ft(y, f) {
    const p = f >> 5;
    f %= 32;
    const E = y.g.length - p,
      _ = [];
    for (let v = 0; v < E; v++)
      _[v] =
        f > 0 ? (y.i(v + p) >>> f) | (y.i(v + p + 1) << (32 - f)) : y.i(v + p);
    return new l(_, y.h);
  }
  ((r.prototype.digest = r.prototype.A),
    (r.prototype.reset = r.prototype.u),
    (r.prototype.update = r.prototype.v),
    (l.prototype.add = l.prototype.add),
    (l.prototype.multiply = l.prototype.j),
    (l.prototype.modulo = l.prototype.B),
    (l.prototype.compare = l.prototype.l),
    (l.prototype.toNumber = l.prototype.m),
    (l.prototype.toString = l.prototype.toString),
    (l.prototype.getBits = l.prototype.i),
    (l.fromNumber = g),
    (l.fromString = I),
    (Lr = l));
}).apply(
  typeof li < 'u'
    ? li
    : typeof self < 'u'
      ? self
      : typeof window < 'u'
        ? window
        : {}
);
var yn =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof globalThis < 'u'
        ? globalThis
        : typeof self < 'u'
          ? self
          : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var Ji, Le, Zi, wn, Rr, to, eo, no;
(function () {
  var s,
    t = Object.defineProperty;
  function e(n) {
    n = [
      typeof globalThis == 'object' && globalThis,
      n,
      typeof window == 'object' && window,
      typeof self == 'object' && self,
      typeof yn == 'object' && yn,
    ];
    for (var o = 0; o < n.length; ++o) {
      var u = n[o];
      if (u && u.Math == Math) return u;
    }
    throw Error('Cannot find global object');
  }
  var r = e(this);
  function i(n, o) {
    if (o)
      t: {
        var u = r;
        n = n.split('.');
        for (var h = 0; h < n.length - 1; h++) {
          var T = n[h];
          if (!(T in u)) break t;
          u = u[T];
        }
        ((n = n[n.length - 1]),
          (h = u[n]),
          (o = o(h)),
          o != h &&
            o != null &&
            t(u, n, { configurable: !0, writable: !0, value: o }));
      }
  }
  (i('Symbol.dispose', function (n) {
    return n || Symbol('Symbol.dispose');
  }),
    i('Array.prototype.values', function (n) {
      return (
        n ||
        function () {
          return this[Symbol.iterator]();
        }
      );
    }),
    i('Object.entries', function (n) {
      return (
        n ||
        function (o) {
          var u = [],
            h;
          for (h in o)
            Object.prototype.hasOwnProperty.call(o, h) && u.push([h, o[h]]);
          return u;
        }
      );
    }));
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ var a = a || {},
    l = this || self;
  function c(n) {
    var o = typeof n;
    return (o == 'object' && n != null) || o == 'function';
  }
  function d(n, o, u) {
    return n.call.apply(n.bind, arguments);
  }
  function g(n, o, u) {
    return ((g = d), g.apply(null, arguments));
  }
  function I(n, o) {
    var u = Array.prototype.slice.call(arguments, 1);
    return function () {
      var h = u.slice();
      return (h.push.apply(h, arguments), n.apply(this, h));
    };
  }
  function w(n, o) {
    function u() {}
    ((u.prototype = o.prototype),
      (n.Z = o.prototype),
      (n.prototype = new u()),
      (n.prototype.constructor = n),
      (n.Ob = function (h, T, A) {
        for (
          var V = Array(arguments.length - 2), x = 2;
          x < arguments.length;
          x++
        )
          V[x - 2] = arguments[x];
        return o.prototype[T].apply(h, V);
      }));
  }
  var S =
    typeof AsyncContext < 'u' && typeof AsyncContext.Snapshot == 'function'
      ? (n) => n && AsyncContext.Snapshot.wrap(n)
      : (n) => n;
  function b(n) {
    const o = n.length;
    if (o > 0) {
      const u = Array(o);
      for (let h = 0; h < o; h++) u[h] = n[h];
      return u;
    }
    return [];
  }
  function O(n, o) {
    for (let h = 1; h < arguments.length; h++) {
      const T = arguments[h];
      var u = typeof T;
      if (
        ((u =
          u != 'object' ? u : T ? (Array.isArray(T) ? 'array' : u) : 'null'),
        u == 'array' || (u == 'object' && typeof T.length == 'number'))
      ) {
        u = n.length || 0;
        const A = T.length || 0;
        n.length = u + A;
        for (let V = 0; V < A; V++) n[u + V] = T[V];
      } else n.push(T);
    }
  }
  class L {
    constructor(o, u) {
      ((this.i = o), (this.j = u), (this.h = 0), (this.g = null));
    }
    get() {
      let o;
      return (
        this.h > 0
          ? (this.h--, (o = this.g), (this.g = o.next), (o.next = null))
          : (o = this.i()),
        o
      );
    }
  }
  function N(n) {
    l.setTimeout(() => {
      throw n;
    }, 0);
  }
  function K() {
    var n = y;
    let o = null;
    return (
      n.g &&
        ((o = n.g), (n.g = n.g.next), n.g || (n.h = null), (o.next = null)),
      o
    );
  }
  class H {
    constructor() {
      this.h = this.g = null;
    }
    add(o, u) {
      const h = X.get();
      (h.set(o, u), this.h ? (this.h.next = h) : (this.g = h), (this.h = h));
    }
  }
  var X = new L(
    () => new Tt(),
    (n) => n.reset()
  );
  class Tt {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(o, u) {
      ((this.h = o), (this.g = u), (this.next = null));
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let Et,
    ft = !1,
    y = new H(),
    f = () => {
      const n = Promise.resolve(void 0);
      Et = () => {
        n.then(p);
      };
    };
  function p() {
    for (var n; (n = K()); ) {
      try {
        n.h.call(n.g);
      } catch (u) {
        N(u);
      }
      var o = X;
      (o.j(n), o.h < 100 && (o.h++, (n.next = o.g), (o.g = n)));
    }
    ft = !1;
  }
  function E() {
    ((this.u = this.u), (this.C = this.C));
  }
  ((E.prototype.u = !1),
    (E.prototype.dispose = function () {
      this.u || ((this.u = !0), this.N());
    }),
    (E.prototype[Symbol.dispose] = function () {
      this.dispose();
    }),
    (E.prototype.N = function () {
      if (this.C) for (; this.C.length; ) this.C.shift()();
    }));
  function _(n, o) {
    ((this.type = n), (this.g = this.target = o), (this.defaultPrevented = !1));
  }
  _.prototype.h = function () {
    this.defaultPrevented = !0;
  };
  var v = (function () {
    if (!l.addEventListener || !Object.defineProperty) return !1;
    var n = !1,
      o = Object.defineProperty({}, 'passive', {
        get: function () {
          n = !0;
        },
      });
    try {
      const u = () => {};
      (l.addEventListener('test', u, o), l.removeEventListener('test', u, o));
    } catch {}
    return n;
  })();
  function m(n) {
    return /^[\s\xa0]*$/.test(n);
  }
  function pt(n, o) {
    (_.call(this, n ? n.type : ''),
      (this.relatedTarget = this.g = this.target = null),
      (this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
          0),
      (this.key = ''),
      (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
      (this.state = null),
      (this.pointerId = 0),
      (this.pointerType = ''),
      (this.i = null),
      n && this.init(n, o));
  }
  (w(pt, _),
    (pt.prototype.init = function (n, o) {
      const u = (this.type = n.type),
        h =
          n.changedTouches && n.changedTouches.length
            ? n.changedTouches[0]
            : null;
      ((this.target = n.target || n.srcElement),
        (this.g = o),
        (o = n.relatedTarget),
        o ||
          (u == 'mouseover'
            ? (o = n.fromElement)
            : u == 'mouseout' && (o = n.toElement)),
        (this.relatedTarget = o),
        h
          ? ((this.clientX = h.clientX !== void 0 ? h.clientX : h.pageX),
            (this.clientY = h.clientY !== void 0 ? h.clientY : h.pageY),
            (this.screenX = h.screenX || 0),
            (this.screenY = h.screenY || 0))
          : ((this.clientX = n.clientX !== void 0 ? n.clientX : n.pageX),
            (this.clientY = n.clientY !== void 0 ? n.clientY : n.pageY),
            (this.screenX = n.screenX || 0),
            (this.screenY = n.screenY || 0)),
        (this.button = n.button),
        (this.key = n.key || ''),
        (this.ctrlKey = n.ctrlKey),
        (this.altKey = n.altKey),
        (this.shiftKey = n.shiftKey),
        (this.metaKey = n.metaKey),
        (this.pointerId = n.pointerId || 0),
        (this.pointerType = n.pointerType),
        (this.state = n.state),
        (this.i = n),
        n.defaultPrevented && pt.Z.h.call(this));
    }),
    (pt.prototype.h = function () {
      pt.Z.h.call(this);
      const n = this.i;
      n.preventDefault ? n.preventDefault() : (n.returnValue = !1);
    }));
  var Gt = 'closure_listenable_' + ((Math.random() * 1e6) | 0),
    la = 0;
  function ha(n, o, u, h, T) {
    ((this.listener = n),
      (this.proxy = null),
      (this.src = o),
      (this.type = u),
      (this.capture = !!h),
      (this.ha = T),
      (this.key = ++la),
      (this.da = this.fa = !1));
  }
  function nn(n) {
    ((n.da = !0),
      (n.listener = null),
      (n.proxy = null),
      (n.src = null),
      (n.ha = null));
  }
  function rn(n, o, u) {
    for (const h in n) o.call(u, n[h], h, n);
  }
  function ca(n, o) {
    for (const u in n) o.call(void 0, n[u], u, n);
  }
  function us(n) {
    const o = {};
    for (const u in n) o[u] = n[u];
    return o;
  }
  const ls =
    'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
      ' '
    );
  function hs(n, o) {
    let u, h;
    for (let T = 1; T < arguments.length; T++) {
      h = arguments[T];
      for (u in h) n[u] = h[u];
      for (let A = 0; A < ls.length; A++)
        ((u = ls[A]),
          Object.prototype.hasOwnProperty.call(h, u) && (n[u] = h[u]));
    }
  }
  function sn(n) {
    ((this.src = n), (this.g = {}), (this.h = 0));
  }
  sn.prototype.add = function (n, o, u, h, T) {
    const A = n.toString();
    ((n = this.g[A]), n || ((n = this.g[A] = []), this.h++));
    const V = Yn(n, o, h, T);
    return (
      V > -1
        ? ((o = n[V]), u || (o.fa = !1))
        : ((o = new ha(o, this.src, A, !!h, T)), (o.fa = u), n.push(o)),
      o
    );
  };
  function Xn(n, o) {
    const u = o.type;
    if (u in n.g) {
      var h = n.g[u],
        T = Array.prototype.indexOf.call(h, o, void 0),
        A;
      ((A = T >= 0) && Array.prototype.splice.call(h, T, 1),
        A && (nn(o), n.g[u].length == 0 && (delete n.g[u], n.h--)));
    }
  }
  function Yn(n, o, u, h) {
    for (let T = 0; T < n.length; ++T) {
      const A = n[T];
      if (!A.da && A.listener == o && A.capture == !!u && A.ha == h) return T;
    }
    return -1;
  }
  var Jn = 'closure_lm_' + ((Math.random() * 1e6) | 0),
    Zn = {};
  function cs(n, o, u, h, T) {
    if (Array.isArray(o)) {
      for (let A = 0; A < o.length; A++) cs(n, o[A], u, h, T);
      return null;
    }
    return (
      (u = ms(u)),
      n && n[Gt] ? n.J(o, u, c(h) ? !!h.capture : !1, T) : fa(n, o, u, !1, h, T)
    );
  }
  function fa(n, o, u, h, T, A) {
    if (!o) throw Error('Invalid event type');
    const V = c(T) ? !!T.capture : !!T;
    let x = er(n);
    if ((x || (n[Jn] = x = new sn(n)), (u = x.add(o, u, h, V, A)), u.proxy))
      return u;
    if (
      ((h = da()),
      (u.proxy = h),
      (h.src = n),
      (h.listener = u),
      n.addEventListener)
    )
      (v || (T = V),
        T === void 0 && (T = !1),
        n.addEventListener(o.toString(), h, T));
    else if (n.attachEvent) n.attachEvent(ds(o.toString()), h);
    else if (n.addListener && n.removeListener) n.addListener(h);
    else throw Error('addEventListener and attachEvent are unavailable.');
    return u;
  }
  function da() {
    function n(u) {
      return o.call(n.src, n.listener, u);
    }
    const o = ma;
    return n;
  }
  function fs(n, o, u, h, T) {
    if (Array.isArray(o))
      for (var A = 0; A < o.length; A++) fs(n, o[A], u, h, T);
    else
      ((h = c(h) ? !!h.capture : !!h),
        (u = ms(u)),
        n && n[Gt]
          ? ((n = n.i),
            (A = String(o).toString()),
            A in n.g &&
              ((o = n.g[A]),
              (u = Yn(o, u, h, T)),
              u > -1 &&
                (nn(o[u]),
                Array.prototype.splice.call(o, u, 1),
                o.length == 0 && (delete n.g[A], n.h--))))
          : n &&
            (n = er(n)) &&
            ((o = n.g[o.toString()]),
            (n = -1),
            o && (n = Yn(o, u, h, T)),
            (u = n > -1 ? o[n] : null) && tr(u)));
  }
  function tr(n) {
    if (typeof n != 'number' && n && !n.da) {
      var o = n.src;
      if (o && o[Gt]) Xn(o.i, n);
      else {
        var u = n.type,
          h = n.proxy;
        (o.removeEventListener
          ? o.removeEventListener(u, h, n.capture)
          : o.detachEvent
            ? o.detachEvent(ds(u), h)
            : o.addListener && o.removeListener && o.removeListener(h),
          (u = er(o))
            ? (Xn(u, n), u.h == 0 && ((u.src = null), (o[Jn] = null)))
            : nn(n));
      }
    }
  }
  function ds(n) {
    return n in Zn ? Zn[n] : (Zn[n] = 'on' + n);
  }
  function ma(n, o) {
    if (n.da) n = !0;
    else {
      o = new pt(o, this);
      const u = n.listener,
        h = n.ha || n.src;
      (n.fa && tr(n), (n = u.call(h, o)));
    }
    return n;
  }
  function er(n) {
    return ((n = n[Jn]), n instanceof sn ? n : null);
  }
  var nr = '__closure_events_fn_' + ((Math.random() * 1e9) >>> 0);
  function ms(n) {
    return typeof n == 'function'
      ? n
      : (n[nr] ||
          (n[nr] = function (o) {
            return n.handleEvent(o);
          }),
        n[nr]);
  }
  function at() {
    (E.call(this), (this.i = new sn(this)), (this.M = this), (this.G = null));
  }
  (w(at, E),
    (at.prototype[Gt] = !0),
    (at.prototype.removeEventListener = function (n, o, u, h) {
      fs(this, n, o, u, h);
    }));
  function dt(n, o) {
    var u,
      h = n.G;
    if (h) for (u = []; h; h = h.G) u.push(h);
    if (((n = n.M), (h = o.type || o), typeof o == 'string')) o = new _(o, n);
    else if (o instanceof _) o.target = o.target || n;
    else {
      var T = o;
      ((o = new _(h, n)), hs(o, T));
    }
    T = !0;
    let A, V;
    if (u)
      for (V = u.length - 1; V >= 0; V--)
        ((A = o.g = u[V]), (T = on(A, h, !0, o) && T));
    if (
      ((A = o.g = n), (T = on(A, h, !0, o) && T), (T = on(A, h, !1, o) && T), u)
    )
      for (V = 0; V < u.length; V++)
        ((A = o.g = u[V]), (T = on(A, h, !1, o) && T));
  }
  ((at.prototype.N = function () {
    if ((at.Z.N.call(this), this.i)) {
      var n = this.i;
      for (const o in n.g) {
        const u = n.g[o];
        for (let h = 0; h < u.length; h++) nn(u[h]);
        (delete n.g[o], n.h--);
      }
    }
    this.G = null;
  }),
    (at.prototype.J = function (n, o, u, h) {
      return this.i.add(String(n), o, !1, u, h);
    }),
    (at.prototype.K = function (n, o, u, h) {
      return this.i.add(String(n), o, !0, u, h);
    }));
  function on(n, o, u, h) {
    if (((o = n.i.g[String(o)]), !o)) return !0;
    o = o.concat();
    let T = !0;
    for (let A = 0; A < o.length; ++A) {
      const V = o[A];
      if (V && !V.da && V.capture == u) {
        const x = V.listener,
          Z = V.ha || V.src;
        (V.fa && Xn(n.i, V), (T = x.call(Z, h) !== !1 && T));
      }
    }
    return T && !h.defaultPrevented;
  }
  function pa(n, o) {
    if (typeof n != 'function')
      if (n && typeof n.handleEvent == 'function') n = g(n.handleEvent, n);
      else throw Error('Invalid listener argument');
    return Number(o) > 2147483647 ? -1 : l.setTimeout(n, o || 0);
  }
  function ps(n) {
    n.g = pa(() => {
      ((n.g = null), n.i && ((n.i = !1), ps(n)));
    }, n.l);
    const o = n.h;
    ((n.h = null), n.m.apply(null, o));
  }
  class ga extends E {
    constructor(o, u) {
      (super(),
        (this.m = o),
        (this.l = u),
        (this.h = null),
        (this.i = !1),
        (this.g = null));
    }
    j(o) {
      ((this.h = arguments), this.g ? (this.i = !0) : ps(this));
    }
    N() {
      (super.N(),
        this.g &&
          (l.clearTimeout(this.g),
          (this.g = null),
          (this.i = !1),
          (this.h = null)));
    }
  }
  function Te(n) {
    (E.call(this), (this.h = n), (this.g = {}));
  }
  w(Te, E);
  var gs = [];
  function _s(n) {
    (rn(
      n.g,
      function (o, u) {
        this.g.hasOwnProperty(u) && tr(o);
      },
      n
    ),
      (n.g = {}));
  }
  ((Te.prototype.N = function () {
    (Te.Z.N.call(this), _s(this));
  }),
    (Te.prototype.handleEvent = function () {
      throw Error('EventHandler.handleEvent not implemented');
    }));
  var rr = l.JSON.stringify,
    _a = l.JSON.parse,
    ya = class {
      stringify(n) {
        return l.JSON.stringify(n, void 0);
      }
      parse(n) {
        return l.JSON.parse(n, void 0);
      }
    };
  function ys() {}
  function Es() {}
  var ve = { OPEN: 'a', hb: 'b', ERROR: 'c', tb: 'd' };
  function sr() {
    _.call(this, 'd');
  }
  w(sr, _);
  function ir() {
    _.call(this, 'c');
  }
  w(ir, _);
  var Kt = {},
    Ts = null;
  function an() {
    return (Ts = Ts || new at());
  }
  Kt.Ia = 'serverreachability';
  function vs(n) {
    _.call(this, Kt.Ia, n);
  }
  w(vs, _);
  function Ae(n) {
    const o = an();
    dt(o, new vs(o));
  }
  Kt.STAT_EVENT = 'statevent';
  function As(n, o) {
    (_.call(this, Kt.STAT_EVENT, n), (this.stat = o));
  }
  w(As, _);
  function mt(n) {
    const o = an();
    dt(o, new As(o, n));
  }
  Kt.Ja = 'timingevent';
  function Is(n, o) {
    (_.call(this, Kt.Ja, n), (this.size = o));
  }
  w(Is, _);
  function Ie(n, o) {
    if (typeof n != 'function')
      throw Error('Fn must not be null and must be a function');
    return l.setTimeout(function () {
      n();
    }, o);
  }
  function we() {
    this.g = !0;
  }
  we.prototype.ua = function () {
    this.g = !1;
  };
  function Ea(n, o, u, h, T, A) {
    n.info(function () {
      if (n.g)
        if (A) {
          var V = '',
            x = A.split('&');
          for (let j = 0; j < x.length; j++) {
            var Z = x[j].split('=');
            if (Z.length > 1) {
              const tt = Z[0];
              Z = Z[1];
              const Pt = tt.split('_');
              V =
                Pt.length >= 2 && Pt[1] == 'type'
                  ? V + (tt + '=' + Z + '&')
                  : V + (tt + '=redacted&');
            }
          }
        } else V = null;
      else V = A;
      return (
        'XMLHTTP REQ (' +
        h +
        ') [attempt ' +
        T +
        ']: ' +
        o +
        `
` +
        u +
        `
` +
        V
      );
    });
  }
  function Ta(n, o, u, h, T, A, V) {
    n.info(function () {
      return (
        'XMLHTTP RESP (' +
        h +
        ') [ attempt ' +
        T +
        ']: ' +
        o +
        `
` +
        u +
        `
` +
        A +
        ' ' +
        V
      );
    });
  }
  function oe(n, o, u, h) {
    n.info(function () {
      return 'XMLHTTP TEXT (' + o + '): ' + Aa(n, u) + (h ? ' ' + h : '');
    });
  }
  function va(n, o) {
    n.info(function () {
      return 'TIMEOUT: ' + o;
    });
  }
  we.prototype.info = function () {};
  function Aa(n, o) {
    if (!n.g) return o;
    if (!o) return null;
    try {
      const A = JSON.parse(o);
      if (A) {
        for (n = 0; n < A.length; n++)
          if (Array.isArray(A[n])) {
            var u = A[n];
            if (!(u.length < 2)) {
              var h = u[1];
              if (Array.isArray(h) && !(h.length < 1)) {
                var T = h[0];
                if (T != 'noop' && T != 'stop' && T != 'close')
                  for (let V = 1; V < h.length; V++) h[V] = '';
              }
            }
          }
      }
      return rr(A);
    } catch {
      return o;
    }
  }
  var un = {
      NO_ERROR: 0,
      cb: 1,
      qb: 2,
      pb: 3,
      kb: 4,
      ob: 5,
      rb: 6,
      Ga: 7,
      TIMEOUT: 8,
      ub: 9,
    },
    ws = {
      ib: 'complete',
      Fb: 'success',
      ERROR: 'error',
      Ga: 'abort',
      xb: 'ready',
      yb: 'readystatechange',
      TIMEOUT: 'timeout',
      sb: 'incrementaldata',
      wb: 'progress',
      lb: 'downloadprogress',
      Nb: 'uploadprogress',
    },
    Rs;
  function or() {}
  (w(or, ys),
    (or.prototype.g = function () {
      return new XMLHttpRequest();
    }),
    (Rs = new or()));
  function Re(n) {
    return encodeURIComponent(String(n));
  }
  function Ia(n) {
    var o = 1;
    n = n.split(':');
    const u = [];
    for (; o > 0 && n.length; ) (u.push(n.shift()), o--);
    return (n.length && u.push(n.join(':')), u);
  }
  function Ot(n, o, u, h) {
    ((this.j = n),
      (this.i = o),
      (this.l = u),
      (this.S = h || 1),
      (this.V = new Te(this)),
      (this.H = 45e3),
      (this.J = null),
      (this.o = !1),
      (this.u = this.B = this.A = this.M = this.F = this.T = this.D = null),
      (this.G = []),
      (this.g = null),
      (this.C = 0),
      (this.m = this.v = null),
      (this.X = -1),
      (this.K = !1),
      (this.P = 0),
      (this.O = null),
      (this.W = this.L = this.U = this.R = !1),
      (this.h = new Ps()));
  }
  function Ps() {
    ((this.i = null), (this.g = ''), (this.h = !1));
  }
  var Vs = {},
    ar = {};
  function ur(n, o, u) {
    ((n.M = 1), (n.A = hn(Rt(o))), (n.u = u), (n.R = !0), Ss(n, null));
  }
  function Ss(n, o) {
    ((n.F = Date.now()), ln(n), (n.B = Rt(n.A)));
    var u = n.B,
      h = n.S;
    (Array.isArray(h) || (h = [String(h)]),
      Bs(u.i, 't', h),
      (n.C = 0),
      (u = n.j.L),
      (n.h = new Ps()),
      (n.g = ii(n.j, u ? o : null, !n.u)),
      n.P > 0 && (n.O = new ga(g(n.Y, n, n.g), n.P)),
      (o = n.V),
      (u = n.g),
      (h = n.ba));
    var T = 'readystatechange';
    Array.isArray(T) || (T && (gs[0] = T.toString()), (T = gs));
    for (let A = 0; A < T.length; A++) {
      const V = cs(u, T[A], h || o.handleEvent, !1, o.h || o);
      if (!V) break;
      o.g[V.key] = V;
    }
    ((o = n.J ? us(n.J) : {}),
      n.u
        ? (n.v || (n.v = 'POST'),
          (o['Content-Type'] = 'application/x-www-form-urlencoded'),
          n.g.ea(n.B, n.v, n.u, o))
        : ((n.v = 'GET'), n.g.ea(n.B, n.v, null, o)),
      Ae(),
      Ea(n.i, n.v, n.B, n.l, n.S, n.u));
  }
  ((Ot.prototype.ba = function (n) {
    n = n.target;
    const o = this.O;
    o && Lt(n) == 3 ? o.j() : this.Y(n);
  }),
    (Ot.prototype.Y = function (n) {
      try {
        if (n == this.g)
          t: {
            const x = Lt(this.g),
              Z = this.g.ya(),
              j = this.g.ca();
            if (
              !(x < 3) &&
              (x != 3 || (this.g && (this.h.h || this.g.la() || Ws(this.g))))
            ) {
              (this.K || x != 4 || Z == 7 || (Z == 8 || j <= 0 ? Ae(3) : Ae(2)),
                lr(this));
              var o = this.g.ca();
              this.X = o;
              var u = wa(this);
              if (
                ((this.o = o == 200),
                Ta(this.i, this.v, this.B, this.l, this.S, x, o),
                this.o)
              ) {
                if (this.U && !this.L) {
                  e: {
                    if (this.g) {
                      var h,
                        T = this.g;
                      if (
                        (h = T.g
                          ? T.g.getResponseHeader('X-HTTP-Initial-Response')
                          : null) &&
                        !m(h)
                      ) {
                        var A = h;
                        break e;
                      }
                    }
                    A = null;
                  }
                  if ((n = A))
                    (oe(
                      this.i,
                      this.l,
                      n,
                      'Initial handshake response via X-HTTP-Initial-Response'
                    ),
                      (this.L = !0),
                      hr(this, n));
                  else {
                    ((this.o = !1), (this.m = 3), mt(12), Qt(this), Pe(this));
                    break t;
                  }
                }
                if (this.R) {
                  n = !0;
                  let tt;
                  for (; !this.K && this.C < u.length; )
                    if (((tt = Ra(this, u)), tt == ar)) {
                      (x == 4 && ((this.m = 4), mt(14), (n = !1)),
                        oe(this.i, this.l, null, '[Incomplete Response]'));
                      break;
                    } else if (tt == Vs) {
                      ((this.m = 4),
                        mt(15),
                        oe(this.i, this.l, u, '[Invalid Chunk]'),
                        (n = !1));
                      break;
                    } else (oe(this.i, this.l, tt, null), hr(this, tt));
                  if (
                    (Cs(this) &&
                      this.C != 0 &&
                      ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                    x != 4 ||
                      u.length != 0 ||
                      this.h.h ||
                      ((this.m = 1), mt(16), (n = !1)),
                    (this.o = this.o && n),
                    !n)
                  )
                    (oe(this.i, this.l, u, '[Invalid Chunked Response]'),
                      Qt(this),
                      Pe(this));
                  else if (u.length > 0 && !this.W) {
                    this.W = !0;
                    var V = this.j;
                    V.g == this &&
                      V.aa &&
                      !V.P &&
                      (V.j.info(
                        'Great, no buffering proxy detected. Bytes received: ' +
                          u.length
                      ),
                      yr(V),
                      (V.P = !0),
                      mt(11));
                  }
                } else (oe(this.i, this.l, u, null), hr(this, u));
                (x == 4 && Qt(this),
                  this.o &&
                    !this.K &&
                    (x == 4 ? ei(this.j, this) : ((this.o = !1), ln(this))));
              } else
                (Ua(this.g),
                  o == 400 && u.indexOf('Unknown SID') > 0
                    ? ((this.m = 3), mt(12))
                    : ((this.m = 0), mt(13)),
                  Qt(this),
                  Pe(this));
            }
          }
      } catch {
      } finally {
      }
    }));
  function wa(n) {
    if (!Cs(n)) return n.g.la();
    const o = Ws(n.g);
    if (o === '') return '';
    let u = '';
    const h = o.length,
      T = Lt(n.g) == 4;
    if (!n.h.i) {
      if (typeof TextDecoder > 'u') return (Qt(n), Pe(n), '');
      n.h.i = new l.TextDecoder();
    }
    for (let A = 0; A < h; A++)
      ((n.h.h = !0), (u += n.h.i.decode(o[A], { stream: !(T && A == h - 1) })));
    return ((o.length = 0), (n.h.g += u), (n.C = 0), n.h.g);
  }
  function Cs(n) {
    return n.g ? n.v == 'GET' && n.M != 2 && n.j.Aa : !1;
  }
  function Ra(n, o) {
    var u = n.C,
      h = o.indexOf(
        `
`,
        u
      );
    return h == -1
      ? ar
      : ((u = Number(o.substring(u, h))),
        isNaN(u)
          ? Vs
          : ((h += 1),
            h + u > o.length
              ? ar
              : ((o = o.slice(h, h + u)), (n.C = h + u), o)));
  }
  Ot.prototype.cancel = function () {
    ((this.K = !0), Qt(this));
  };
  function ln(n) {
    ((n.T = Date.now() + n.H), Ds(n, n.H));
  }
  function Ds(n, o) {
    if (n.D != null) throw Error('WatchDog timer not null');
    n.D = Ie(g(n.aa, n), o);
  }
  function lr(n) {
    n.D && (l.clearTimeout(n.D), (n.D = null));
  }
  Ot.prototype.aa = function () {
    this.D = null;
    const n = Date.now();
    n - this.T >= 0
      ? (va(this.i, this.B),
        this.M != 2 && (Ae(), mt(17)),
        Qt(this),
        (this.m = 2),
        Pe(this))
      : Ds(this, this.T - n);
  };
  function Pe(n) {
    n.j.I == 0 || n.K || ei(n.j, n);
  }
  function Qt(n) {
    lr(n);
    var o = n.O;
    (o && typeof o.dispose == 'function' && o.dispose(),
      (n.O = null),
      _s(n.V),
      n.g && ((o = n.g), (n.g = null), o.abort(), o.dispose()));
  }
  function hr(n, o) {
    try {
      var u = n.j;
      if (u.I != 0 && (u.g == n || cr(u.h, n))) {
        if (!n.L && cr(u.h, n) && u.I == 3) {
          try {
            var h = u.Ba.g.parse(o);
          } catch {
            h = null;
          }
          if (Array.isArray(h) && h.length == 3) {
            var T = h;
            if (T[0] == 0) {
              t: if (!u.v) {
                if (u.g)
                  if (u.g.F + 3e3 < n.F) (pn(u), dn(u));
                  else break t;
                (_r(u), mt(18));
              }
            } else
              ((u.xa = T[1]),
                0 < u.xa - u.K &&
                  T[2] < 37500 &&
                  u.F &&
                  u.A == 0 &&
                  !u.C &&
                  (u.C = Ie(g(u.Va, u), 6e3)));
            ks(u.h) <= 1 && u.ta && (u.ta = void 0);
          } else Ht(u, 11);
        } else if (((n.L || u.g == n) && pn(u), !m(o)))
          for (T = u.Ba.g.parse(o), o = 0; o < T.length; o++) {
            let j = T[o];
            const tt = j[0];
            if (!(tt <= u.K))
              if (((u.K = tt), (j = j[1]), u.I == 2))
                if (j[0] == 'c') {
                  ((u.M = j[1]), (u.ba = j[2]));
                  const Pt = j[3];
                  Pt != null && ((u.ka = Pt), u.j.info('VER=' + u.ka));
                  const Xt = j[4];
                  Xt != null && ((u.za = Xt), u.j.info('SVER=' + u.za));
                  const Ft = j[5];
                  (Ft != null &&
                    typeof Ft == 'number' &&
                    Ft > 0 &&
                    ((h = 1.5 * Ft),
                    (u.O = h),
                    u.j.info('backChannelRequestTimeoutMs_=' + h)),
                    (h = u));
                  const Ut = n.g;
                  if (Ut) {
                    const _n = Ut.g
                      ? Ut.g.getResponseHeader('X-Client-Wire-Protocol')
                      : null;
                    if (_n) {
                      var A = h.h;
                      A.g ||
                        (_n.indexOf('spdy') == -1 &&
                          _n.indexOf('quic') == -1 &&
                          _n.indexOf('h2') == -1) ||
                        ((A.j = A.l),
                        (A.g = new Set()),
                        A.h && (fr(A, A.h), (A.h = null)));
                    }
                    if (h.G) {
                      const Er = Ut.g
                        ? Ut.g.getResponseHeader('X-HTTP-Session-Id')
                        : null;
                      Er && ((h.wa = Er), q(h.J, h.G, Er));
                    }
                  }
                  ((u.I = 3),
                    u.l && u.l.ra(),
                    u.aa &&
                      ((u.T = Date.now() - n.F),
                      u.j.info('Handshake RTT: ' + u.T + 'ms')),
                    (h = u));
                  var V = n;
                  if (((h.na = si(h, h.L ? h.ba : null, h.W)), V.L)) {
                    Os(h.h, V);
                    var x = V,
                      Z = h.O;
                    (Z && (x.H = Z), x.D && (lr(x), ln(x)), (h.g = V));
                  } else Zs(h);
                  u.i.length > 0 && mn(u);
                } else (j[0] != 'stop' && j[0] != 'close') || Ht(u, 7);
              else
                u.I == 3 &&
                  (j[0] == 'stop' || j[0] == 'close'
                    ? j[0] == 'stop'
                      ? Ht(u, 7)
                      : gr(u)
                    : j[0] != 'noop' && u.l && u.l.qa(j),
                  (u.A = 0));
          }
      }
      Ae(4);
    } catch {}
  }
  var Pa = class {
    constructor(n, o) {
      ((this.g = n), (this.map = o));
    }
  };
  function bs(n) {
    ((this.l = n || 10),
      l.PerformanceNavigationTiming
        ? ((n = l.performance.getEntriesByType('navigation')),
          (n =
            n.length > 0 &&
            (n[0].nextHopProtocol == 'hq' || n[0].nextHopProtocol == 'h2')))
        : (n = !!(
            l.chrome &&
            l.chrome.loadTimes &&
            l.chrome.loadTimes() &&
            l.chrome.loadTimes().wasFetchedViaSpdy
          )),
      (this.j = n ? this.l : 1),
      (this.g = null),
      this.j > 1 && (this.g = new Set()),
      (this.h = null),
      (this.i = []));
  }
  function Ns(n) {
    return n.h ? !0 : n.g ? n.g.size >= n.j : !1;
  }
  function ks(n) {
    return n.h ? 1 : n.g ? n.g.size : 0;
  }
  function cr(n, o) {
    return n.h ? n.h == o : n.g ? n.g.has(o) : !1;
  }
  function fr(n, o) {
    n.g ? n.g.add(o) : (n.h = o);
  }
  function Os(n, o) {
    n.h && n.h == o ? (n.h = null) : n.g && n.g.has(o) && n.g.delete(o);
  }
  bs.prototype.cancel = function () {
    if (((this.i = xs(this)), this.h)) (this.h.cancel(), (this.h = null));
    else if (this.g && this.g.size !== 0) {
      for (const n of this.g.values()) n.cancel();
      this.g.clear();
    }
  };
  function xs(n) {
    if (n.h != null) return n.i.concat(n.h.G);
    if (n.g != null && n.g.size !== 0) {
      let o = n.i;
      for (const u of n.g.values()) o = o.concat(u.G);
      return o;
    }
    return b(n.i);
  }
  var Ms = RegExp(
    '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
  );
  function Va(n, o) {
    if (n) {
      n = n.split('&');
      for (let u = 0; u < n.length; u++) {
        const h = n[u].indexOf('=');
        let T,
          A = null;
        (h >= 0
          ? ((T = n[u].substring(0, h)), (A = n[u].substring(h + 1)))
          : (T = n[u]),
          o(T, A ? decodeURIComponent(A.replace(/\+/g, ' ')) : ''));
      }
    }
  }
  function xt(n) {
    ((this.g = this.o = this.j = ''),
      (this.u = null),
      (this.m = this.h = ''),
      (this.l = !1));
    let o;
    n instanceof xt
      ? ((this.l = n.l),
        Ve(this, n.j),
        (this.o = n.o),
        (this.g = n.g),
        Se(this, n.u),
        (this.h = n.h),
        dr(this, qs(n.i)),
        (this.m = n.m))
      : n && (o = String(n).match(Ms))
        ? ((this.l = !1),
          Ve(this, o[1] || '', !0),
          (this.o = Ce(o[2] || '')),
          (this.g = Ce(o[3] || '', !0)),
          Se(this, o[4]),
          (this.h = Ce(o[5] || '', !0)),
          dr(this, o[6] || '', !0),
          (this.m = Ce(o[7] || '')))
        : ((this.l = !1), (this.i = new be(null, this.l)));
  }
  ((xt.prototype.toString = function () {
    const n = [];
    var o = this.j;
    o && n.push(De(o, Ls, !0), ':');
    var u = this.g;
    return (
      (u || o == 'file') &&
        (n.push('//'),
        (o = this.o) && n.push(De(o, Ls, !0), '@'),
        n.push(Re(u).replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
        (u = this.u),
        u != null && n.push(':', String(u))),
      (u = this.h) &&
        (this.g && u.charAt(0) != '/' && n.push('/'),
        n.push(De(u, u.charAt(0) == '/' ? Da : Ca, !0))),
      (u = this.i.toString()) && n.push('?', u),
      (u = this.m) && n.push('#', De(u, Na)),
      n.join('')
    );
  }),
    (xt.prototype.resolve = function (n) {
      const o = Rt(this);
      let u = !!n.j;
      (u ? Ve(o, n.j) : (u = !!n.o),
        u ? (o.o = n.o) : (u = !!n.g),
        u ? (o.g = n.g) : (u = n.u != null));
      var h = n.h;
      if (u) Se(o, n.u);
      else if ((u = !!n.h)) {
        if (h.charAt(0) != '/')
          if (this.g && !this.h) h = '/' + h;
          else {
            var T = o.h.lastIndexOf('/');
            T != -1 && (h = o.h.slice(0, T + 1) + h);
          }
        if (((T = h), T == '..' || T == '.')) h = '';
        else if (T.indexOf('./') != -1 || T.indexOf('/.') != -1) {
          ((h = T.lastIndexOf('/', 0) == 0), (T = T.split('/')));
          const A = [];
          for (let V = 0; V < T.length; ) {
            const x = T[V++];
            x == '.'
              ? h && V == T.length && A.push('')
              : x == '..'
                ? ((A.length > 1 || (A.length == 1 && A[0] != '')) && A.pop(),
                  h && V == T.length && A.push(''))
                : (A.push(x), (h = !0));
          }
          h = A.join('/');
        } else h = T;
      }
      return (
        u ? (o.h = h) : (u = n.i.toString() !== ''),
        u ? dr(o, qs(n.i)) : (u = !!n.m),
        u && (o.m = n.m),
        o
      );
    }));
  function Rt(n) {
    return new xt(n);
  }
  function Ve(n, o, u) {
    ((n.j = u ? Ce(o, !0) : o), n.j && (n.j = n.j.replace(/:$/, '')));
  }
  function Se(n, o) {
    if (o) {
      if (((o = Number(o)), isNaN(o) || o < 0))
        throw Error('Bad port number ' + o);
      n.u = o;
    } else n.u = null;
  }
  function dr(n, o, u) {
    o instanceof be
      ? ((n.i = o), ka(n.i, n.l))
      : (u || (o = De(o, ba)), (n.i = new be(o, n.l)));
  }
  function q(n, o, u) {
    n.i.set(o, u);
  }
  function hn(n) {
    return (
      q(
        n,
        'zx',
        Math.floor(Math.random() * 2147483648).toString(36) +
          Math.abs(
            Math.floor(Math.random() * 2147483648) ^ Date.now()
          ).toString(36)
      ),
      n
    );
  }
  function Ce(n, o) {
    return n
      ? o
        ? decodeURI(n.replace(/%25/g, '%2525'))
        : decodeURIComponent(n)
      : '';
  }
  function De(n, o, u) {
    return typeof n == 'string'
      ? ((n = encodeURI(n).replace(o, Sa)),
        u && (n = n.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
        n)
      : null;
  }
  function Sa(n) {
    return (
      (n = n.charCodeAt(0)),
      '%' + ((n >> 4) & 15).toString(16) + (n & 15).toString(16)
    );
  }
  var Ls = /[#\/\?@]/g,
    Ca = /[#\?:]/g,
    Da = /[#\?]/g,
    ba = /[#\?@]/g,
    Na = /#/g;
  function be(n, o) {
    ((this.h = this.g = null), (this.i = n || null), (this.j = !!o));
  }
  function Wt(n) {
    n.g ||
      ((n.g = new Map()),
      (n.h = 0),
      n.i &&
        Va(n.i, function (o, u) {
          n.add(decodeURIComponent(o.replace(/\+/g, ' ')), u);
        }));
  }
  ((s = be.prototype),
    (s.add = function (n, o) {
      (Wt(this), (this.i = null), (n = ae(this, n)));
      let u = this.g.get(n);
      return (u || this.g.set(n, (u = [])), u.push(o), (this.h += 1), this);
    }));
  function Fs(n, o) {
    (Wt(n),
      (o = ae(n, o)),
      n.g.has(o) && ((n.i = null), (n.h -= n.g.get(o).length), n.g.delete(o)));
  }
  function Us(n, o) {
    return (Wt(n), (o = ae(n, o)), n.g.has(o));
  }
  s.forEach = function (n, o) {
    (Wt(this),
      this.g.forEach(function (u, h) {
        u.forEach(function (T) {
          n.call(o, T, h, this);
        }, this);
      }, this));
  };
  function js(n, o) {
    Wt(n);
    let u = [];
    if (typeof o == 'string') Us(n, o) && (u = u.concat(n.g.get(ae(n, o))));
    else
      for (n = Array.from(n.g.values()), o = 0; o < n.length; o++)
        u = u.concat(n[o]);
    return u;
  }
  ((s.set = function (n, o) {
    return (
      Wt(this),
      (this.i = null),
      (n = ae(this, n)),
      Us(this, n) && (this.h -= this.g.get(n).length),
      this.g.set(n, [o]),
      (this.h += 1),
      this
    );
  }),
    (s.get = function (n, o) {
      return n ? ((n = js(this, n)), n.length > 0 ? String(n[0]) : o) : o;
    }));
  function Bs(n, o, u) {
    (Fs(n, o),
      u.length > 0 &&
        ((n.i = null), n.g.set(ae(n, o), b(u)), (n.h += u.length)));
  }
  s.toString = function () {
    if (this.i) return this.i;
    if (!this.g) return '';
    const n = [],
      o = Array.from(this.g.keys());
    for (let h = 0; h < o.length; h++) {
      var u = o[h];
      const T = Re(u);
      u = js(this, u);
      for (let A = 0; A < u.length; A++) {
        let V = T;
        (u[A] !== '' && (V += '=' + Re(u[A])), n.push(V));
      }
    }
    return (this.i = n.join('&'));
  };
  function qs(n) {
    const o = new be();
    return ((o.i = n.i), n.g && ((o.g = new Map(n.g)), (o.h = n.h)), o);
  }
  function ae(n, o) {
    return ((o = String(o)), n.j && (o = o.toLowerCase()), o);
  }
  function ka(n, o) {
    (o &&
      !n.j &&
      (Wt(n),
      (n.i = null),
      n.g.forEach(function (u, h) {
        const T = h.toLowerCase();
        h != T && (Fs(this, h), Bs(this, T, u));
      }, n)),
      (n.j = o));
  }
  function Oa(n, o) {
    const u = new we();
    if (l.Image) {
      const h = new Image();
      ((h.onload = I(Mt, u, 'TestLoadImage: loaded', !0, o, h)),
        (h.onerror = I(Mt, u, 'TestLoadImage: error', !1, o, h)),
        (h.onabort = I(Mt, u, 'TestLoadImage: abort', !1, o, h)),
        (h.ontimeout = I(Mt, u, 'TestLoadImage: timeout', !1, o, h)),
        l.setTimeout(function () {
          h.ontimeout && h.ontimeout();
        }, 1e4),
        (h.src = n));
    } else o(!1);
  }
  function xa(n, o) {
    const u = new we(),
      h = new AbortController(),
      T = setTimeout(() => {
        (h.abort(), Mt(u, 'TestPingServer: timeout', !1, o));
      }, 1e4);
    fetch(n, { signal: h.signal })
      .then((A) => {
        (clearTimeout(T),
          A.ok
            ? Mt(u, 'TestPingServer: ok', !0, o)
            : Mt(u, 'TestPingServer: server error', !1, o));
      })
      .catch(() => {
        (clearTimeout(T), Mt(u, 'TestPingServer: error', !1, o));
      });
  }
  function Mt(n, o, u, h, T) {
    try {
      (T &&
        ((T.onload = null),
        (T.onerror = null),
        (T.onabort = null),
        (T.ontimeout = null)),
        h(u));
    } catch {}
  }
  function Ma() {
    this.g = new ya();
  }
  function mr(n) {
    ((this.i = n.Sb || null), (this.h = n.ab || !1));
  }
  (w(mr, ys),
    (mr.prototype.g = function () {
      return new cn(this.i, this.h);
    }));
  function cn(n, o) {
    (at.call(this),
      (this.H = n),
      (this.o = o),
      (this.m = void 0),
      (this.status = this.readyState = 0),
      (this.responseType =
        this.responseText =
        this.response =
        this.statusText =
          ''),
      (this.onreadystatechange = null),
      (this.A = new Headers()),
      (this.h = null),
      (this.F = 'GET'),
      (this.D = ''),
      (this.g = !1),
      (this.B = this.j = this.l = null),
      (this.v = new AbortController()));
  }
  (w(cn, at),
    (s = cn.prototype),
    (s.open = function (n, o) {
      if (this.readyState != 0)
        throw (this.abort(), Error('Error reopening a connection'));
      ((this.F = n), (this.D = o), (this.readyState = 1), ke(this));
    }),
    (s.send = function (n) {
      if (this.readyState != 1)
        throw (this.abort(), Error('need to call open() first. '));
      if (this.v.signal.aborted)
        throw (this.abort(), Error('Request was aborted.'));
      this.g = !0;
      const o = {
        headers: this.A,
        method: this.F,
        credentials: this.m,
        cache: void 0,
        signal: this.v.signal,
      };
      (n && (o.body = n),
        (this.H || l)
          .fetch(new Request(this.D, o))
          .then(this.Pa.bind(this), this.ga.bind(this)));
    }),
    (s.abort = function () {
      ((this.response = this.responseText = ''),
        (this.A = new Headers()),
        (this.status = 0),
        this.v.abort(),
        this.j && this.j.cancel('Request was aborted.').catch(() => {}),
        this.readyState >= 1 &&
          this.g &&
          this.readyState != 4 &&
          ((this.g = !1), Ne(this)),
        (this.readyState = 0));
    }),
    (s.Pa = function (n) {
      if (
        this.g &&
        ((this.l = n),
        this.h ||
          ((this.status = this.l.status),
          (this.statusText = this.l.statusText),
          (this.h = n.headers),
          (this.readyState = 2),
          ke(this)),
        this.g && ((this.readyState = 3), ke(this), this.g))
      )
        if (this.responseType === 'arraybuffer')
          n.arrayBuffer().then(this.Na.bind(this), this.ga.bind(this));
        else if (typeof l.ReadableStream < 'u' && 'body' in n) {
          if (((this.j = n.body.getReader()), this.o)) {
            if (this.responseType)
              throw Error(
                'responseType must be empty for "streamBinaryChunks" mode responses.'
              );
            this.response = [];
          } else
            ((this.response = this.responseText = ''),
              (this.B = new TextDecoder()));
          $s(this);
        } else n.text().then(this.Oa.bind(this), this.ga.bind(this));
    }));
  function $s(n) {
    n.j.read().then(n.Ma.bind(n)).catch(n.ga.bind(n));
  }
  ((s.Ma = function (n) {
    if (this.g) {
      if (this.o && n.value) this.response.push(n.value);
      else if (!this.o) {
        var o = n.value ? n.value : new Uint8Array(0);
        (o = this.B.decode(o, { stream: !n.done })) &&
          (this.response = this.responseText += o);
      }
      (n.done ? Ne(this) : ke(this), this.readyState == 3 && $s(this));
    }
  }),
    (s.Oa = function (n) {
      this.g && ((this.response = this.responseText = n), Ne(this));
    }),
    (s.Na = function (n) {
      this.g && ((this.response = n), Ne(this));
    }),
    (s.ga = function () {
      this.g && Ne(this);
    }));
  function Ne(n) {
    ((n.readyState = 4), (n.l = null), (n.j = null), (n.B = null), ke(n));
  }
  ((s.setRequestHeader = function (n, o) {
    this.A.append(n, o);
  }),
    (s.getResponseHeader = function (n) {
      return (this.h && this.h.get(n.toLowerCase())) || '';
    }),
    (s.getAllResponseHeaders = function () {
      if (!this.h) return '';
      const n = [],
        o = this.h.entries();
      for (var u = o.next(); !u.done; )
        ((u = u.value), n.push(u[0] + ': ' + u[1]), (u = o.next()));
      return n.join(`\r
`);
    }));
  function ke(n) {
    n.onreadystatechange && n.onreadystatechange.call(n);
  }
  Object.defineProperty(cn.prototype, 'withCredentials', {
    get: function () {
      return this.m === 'include';
    },
    set: function (n) {
      this.m = n ? 'include' : 'same-origin';
    },
  });
  function zs(n) {
    let o = '';
    return (
      rn(n, function (u, h) {
        ((o += h),
          (o += ':'),
          (o += u),
          (o += `\r
`));
      }),
      o
    );
  }
  function pr(n, o, u) {
    t: {
      for (h in u) {
        var h = !1;
        break t;
      }
      h = !0;
    }
    h || ((u = zs(u)), typeof n == 'string' ? u != null && Re(u) : q(n, o, u));
  }
  function Q(n) {
    (at.call(this),
      (this.headers = new Map()),
      (this.L = n || null),
      (this.h = !1),
      (this.g = null),
      (this.D = ''),
      (this.o = 0),
      (this.l = ''),
      (this.j = this.B = this.v = this.A = !1),
      (this.m = null),
      (this.F = ''),
      (this.H = !1));
  }
  w(Q, at);
  var La = /^https?$/i,
    Fa = ['POST', 'PUT'];
  ((s = Q.prototype),
    (s.Fa = function (n) {
      this.H = n;
    }),
    (s.ea = function (n, o, u, h) {
      if (this.g)
        throw Error(
          '[goog.net.XhrIo] Object is active with another request=' +
            this.D +
            '; newUri=' +
            n
        );
      ((o = o ? o.toUpperCase() : 'GET'),
        (this.D = n),
        (this.l = ''),
        (this.o = 0),
        (this.A = !1),
        (this.h = !0),
        (this.g = this.L ? this.L.g() : Rs.g()),
        (this.g.onreadystatechange = S(g(this.Ca, this))));
      try {
        ((this.B = !0), this.g.open(o, String(n), !0), (this.B = !1));
      } catch (A) {
        Gs(this, A);
        return;
      }
      if (((n = u || ''), (u = new Map(this.headers)), h))
        if (Object.getPrototypeOf(h) === Object.prototype)
          for (var T in h) u.set(T, h[T]);
        else if (typeof h.keys == 'function' && typeof h.get == 'function')
          for (const A of h.keys()) u.set(A, h.get(A));
        else throw Error('Unknown input type for opt_headers: ' + String(h));
      ((h = Array.from(u.keys()).find(
        (A) => A.toLowerCase() == 'content-type'
      )),
        (T = l.FormData && n instanceof l.FormData),
        !(Array.prototype.indexOf.call(Fa, o, void 0) >= 0) ||
          h ||
          T ||
          u.set(
            'Content-Type',
            'application/x-www-form-urlencoded;charset=utf-8'
          ));
      for (const [A, V] of u) this.g.setRequestHeader(A, V);
      (this.F && (this.g.responseType = this.F),
        'withCredentials' in this.g &&
          this.g.withCredentials !== this.H &&
          (this.g.withCredentials = this.H));
      try {
        (this.m && (clearTimeout(this.m), (this.m = null)),
          (this.v = !0),
          this.g.send(n),
          (this.v = !1));
      } catch (A) {
        Gs(this, A);
      }
    }));
  function Gs(n, o) {
    ((n.h = !1),
      n.g && ((n.j = !0), n.g.abort(), (n.j = !1)),
      (n.l = o),
      (n.o = 5),
      Ks(n),
      fn(n));
  }
  function Ks(n) {
    n.A || ((n.A = !0), dt(n, 'complete'), dt(n, 'error'));
  }
  ((s.abort = function (n) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.j = !0),
      this.g.abort(),
      (this.j = !1),
      (this.o = n || 7),
      dt(this, 'complete'),
      dt(this, 'abort'),
      fn(this));
  }),
    (s.N = function () {
      (this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        fn(this, !0)),
        Q.Z.N.call(this));
    }),
    (s.Ca = function () {
      this.u || (this.B || this.v || this.j ? Qs(this) : this.Xa());
    }),
    (s.Xa = function () {
      Qs(this);
    }));
  function Qs(n) {
    if (n.h && typeof a < 'u') {
      if (n.v && Lt(n) == 4) setTimeout(n.Ca.bind(n), 0);
      else if ((dt(n, 'readystatechange'), Lt(n) == 4)) {
        n.h = !1;
        try {
          const A = n.ca();
          t: switch (A) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var o = !0;
              break t;
            default:
              o = !1;
          }
          var u;
          if (!(u = o)) {
            var h;
            if ((h = A === 0)) {
              let V = String(n.D).match(Ms)[1] || null;
              (!V &&
                l.self &&
                l.self.location &&
                (V = l.self.location.protocol.slice(0, -1)),
                (h = !La.test(V ? V.toLowerCase() : '')));
            }
            u = h;
          }
          if (u) (dt(n, 'complete'), dt(n, 'success'));
          else {
            n.o = 6;
            try {
              var T = Lt(n) > 2 ? n.g.statusText : '';
            } catch {
              T = '';
            }
            ((n.l = T + ' [' + n.ca() + ']'), Ks(n));
          }
        } finally {
          fn(n);
        }
      }
    }
  }
  function fn(n, o) {
    if (n.g) {
      n.m && (clearTimeout(n.m), (n.m = null));
      const u = n.g;
      ((n.g = null), o || dt(n, 'ready'));
      try {
        u.onreadystatechange = null;
      } catch {}
    }
  }
  s.isActive = function () {
    return !!this.g;
  };
  function Lt(n) {
    return n.g ? n.g.readyState : 0;
  }
  ((s.ca = function () {
    try {
      return Lt(this) > 2 ? this.g.status : -1;
    } catch {
      return -1;
    }
  }),
    (s.la = function () {
      try {
        return this.g ? this.g.responseText : '';
      } catch {
        return '';
      }
    }),
    (s.La = function (n) {
      if (this.g) {
        var o = this.g.responseText;
        return (n && o.indexOf(n) == 0 && (o = o.substring(n.length)), _a(o));
      }
    }));
  function Ws(n) {
    try {
      if (!n.g) return null;
      if ('response' in n.g) return n.g.response;
      switch (n.F) {
        case '':
        case 'text':
          return n.g.responseText;
        case 'arraybuffer':
          if ('mozResponseArrayBuffer' in n.g)
            return n.g.mozResponseArrayBuffer;
      }
      return null;
    } catch {
      return null;
    }
  }
  function Ua(n) {
    const o = {};
    n = ((n.g && Lt(n) >= 2 && n.g.getAllResponseHeaders()) || '').split(`\r
`);
    for (let h = 0; h < n.length; h++) {
      if (m(n[h])) continue;
      var u = Ia(n[h]);
      const T = u[0];
      if (((u = u[1]), typeof u != 'string')) continue;
      u = u.trim();
      const A = o[T] || [];
      ((o[T] = A), A.push(u));
    }
    ca(o, function (h) {
      return h.join(', ');
    });
  }
  ((s.ya = function () {
    return this.o;
  }),
    (s.Ha = function () {
      return typeof this.l == 'string' ? this.l : String(this.l);
    }));
  function Oe(n, o, u) {
    return (u && u.internalChannelParams && u.internalChannelParams[n]) || o;
  }
  function Hs(n) {
    ((this.za = 0),
      (this.i = []),
      (this.j = new we()),
      (this.ba =
        this.na =
        this.J =
        this.W =
        this.g =
        this.wa =
        this.G =
        this.H =
        this.u =
        this.U =
        this.o =
          null),
      (this.Ya = this.V = 0),
      (this.Sa = Oe('failFast', !1, n)),
      (this.F = this.C = this.v = this.m = this.l = null),
      (this.X = !0),
      (this.xa = this.K = -1),
      (this.Y = this.A = this.D = 0),
      (this.Qa = Oe('baseRetryDelayMs', 5e3, n)),
      (this.Za = Oe('retryDelaySeedMs', 1e4, n)),
      (this.Ta = Oe('forwardChannelMaxRetries', 2, n)),
      (this.va = Oe('forwardChannelRequestTimeoutMs', 2e4, n)),
      (this.ma = (n && n.xmlHttpFactory) || void 0),
      (this.Ua = (n && n.Rb) || void 0),
      (this.Aa = (n && n.useFetchStreams) || !1),
      (this.O = void 0),
      (this.L = (n && n.supportsCrossDomainXhr) || !1),
      (this.M = ''),
      (this.h = new bs(n && n.concurrentRequestLimit)),
      (this.Ba = new Ma()),
      (this.S = (n && n.fastHandshake) || !1),
      (this.R = (n && n.encodeInitMessageHeaders) || !1),
      this.S && this.R && (this.R = !1),
      (this.Ra = (n && n.Pb) || !1),
      n && n.ua && this.j.ua(),
      n && n.forceLongPolling && (this.X = !1),
      (this.aa = (!this.S && this.X && n && n.detectBufferingProxy) || !1),
      (this.ia = void 0),
      n &&
        n.longPollingTimeout &&
        n.longPollingTimeout > 0 &&
        (this.ia = n.longPollingTimeout),
      (this.ta = void 0),
      (this.T = 0),
      (this.P = !1),
      (this.ja = this.B = null));
  }
  ((s = Hs.prototype),
    (s.ka = 8),
    (s.I = 1),
    (s.connect = function (n, o, u, h) {
      (mt(0),
        (this.W = n),
        (this.H = o || {}),
        u && h !== void 0 && ((this.H.OSID = u), (this.H.OAID = h)),
        (this.F = this.X),
        (this.J = si(this, null, this.W)),
        mn(this));
    }));
  function gr(n) {
    if ((Xs(n), n.I == 3)) {
      var o = n.V++,
        u = Rt(n.J);
      if (
        (q(u, 'SID', n.M),
        q(u, 'RID', o),
        q(u, 'TYPE', 'terminate'),
        xe(n, u),
        (o = new Ot(n, n.j, o)),
        (o.M = 2),
        (o.A = hn(Rt(u))),
        (u = !1),
        l.navigator && l.navigator.sendBeacon)
      )
        try {
          u = l.navigator.sendBeacon(o.A.toString(), '');
        } catch {}
      (!u && l.Image && ((new Image().src = o.A), (u = !0)),
        u || ((o.g = ii(o.j, null)), o.g.ea(o.A)),
        (o.F = Date.now()),
        ln(o));
    }
    ri(n);
  }
  function dn(n) {
    n.g && (yr(n), n.g.cancel(), (n.g = null));
  }
  function Xs(n) {
    (dn(n),
      n.v && (l.clearTimeout(n.v), (n.v = null)),
      pn(n),
      n.h.cancel(),
      n.m && (typeof n.m == 'number' && l.clearTimeout(n.m), (n.m = null)));
  }
  function mn(n) {
    if (!Ns(n.h) && !n.m) {
      n.m = !0;
      var o = n.Ea;
      (Et || f(), ft || (Et(), (ft = !0)), y.add(o, n), (n.D = 0));
    }
  }
  function ja(n, o) {
    return ks(n.h) >= n.h.j - (n.m ? 1 : 0)
      ? !1
      : n.m
        ? ((n.i = o.G.concat(n.i)), !0)
        : n.I == 1 || n.I == 2 || n.D >= (n.Sa ? 0 : n.Ta)
          ? !1
          : ((n.m = Ie(g(n.Ea, n, o), ni(n, n.D))), n.D++, !0);
  }
  s.Ea = function (n) {
    if (this.m)
      if (((this.m = null), this.I == 1)) {
        if (!n) {
          ((this.V = Math.floor(Math.random() * 1e5)), (n = this.V++));
          const T = new Ot(this, this.j, n);
          let A = this.o;
          if (
            (this.U && (A ? ((A = us(A)), hs(A, this.U)) : (A = this.U)),
            this.u !== null || this.R || ((T.J = A), (A = null)),
            this.S)
          )
            t: {
              for (var o = 0, u = 0; u < this.i.length; u++) {
                e: {
                  var h = this.i[u];
                  if (
                    '__data__' in h.map &&
                    ((h = h.map.__data__), typeof h == 'string')
                  ) {
                    h = h.length;
                    break e;
                  }
                  h = void 0;
                }
                if (h === void 0) break;
                if (((o += h), o > 4096)) {
                  o = u;
                  break t;
                }
                if (o === 4096 || u === this.i.length - 1) {
                  o = u + 1;
                  break t;
                }
              }
              o = 1e3;
            }
          else o = 1e3;
          ((o = Js(this, T, o)),
            (u = Rt(this.J)),
            q(u, 'RID', n),
            q(u, 'CVER', 22),
            this.G && q(u, 'X-HTTP-Session-Id', this.G),
            xe(this, u),
            A &&
              (this.R
                ? (o = 'headers=' + Re(zs(A)) + '&' + o)
                : this.u && pr(u, this.u, A)),
            fr(this.h, T),
            this.Ra && q(u, 'TYPE', 'init'),
            this.S
              ? (q(u, '$req', o),
                q(u, 'SID', 'null'),
                (T.U = !0),
                ur(T, u, null))
              : ur(T, u, o),
            (this.I = 2));
        }
      } else
        this.I == 3 &&
          (n ? Ys(this, n) : this.i.length == 0 || Ns(this.h) || Ys(this));
  };
  function Ys(n, o) {
    var u;
    o ? (u = o.l) : (u = n.V++);
    const h = Rt(n.J);
    (q(h, 'SID', n.M),
      q(h, 'RID', u),
      q(h, 'AID', n.K),
      xe(n, h),
      n.u && n.o && pr(h, n.u, n.o),
      (u = new Ot(n, n.j, u, n.D + 1)),
      n.u === null && (u.J = n.o),
      o && (n.i = o.G.concat(n.i)),
      (o = Js(n, u, 1e3)),
      (u.H = Math.round(n.va * 0.5) + Math.round(n.va * 0.5 * Math.random())),
      fr(n.h, u),
      ur(u, h, o));
  }
  function xe(n, o) {
    (n.H &&
      rn(n.H, function (u, h) {
        q(o, h, u);
      }),
      n.l &&
        rn({}, function (u, h) {
          q(o, h, u);
        }));
  }
  function Js(n, o, u) {
    u = Math.min(n.i.length, u);
    const h = n.l ? g(n.l.Ka, n.l, n) : null;
    t: {
      var T = n.i;
      let x = -1;
      for (;;) {
        const Z = ['count=' + u];
        x == -1
          ? u > 0
            ? ((x = T[0].g), Z.push('ofs=' + x))
            : (x = 0)
          : Z.push('ofs=' + x);
        let j = !0;
        for (let tt = 0; tt < u; tt++) {
          var A = T[tt].g;
          const Pt = T[tt].map;
          if (((A -= x), A < 0)) ((x = Math.max(0, T[tt].g - 100)), (j = !1));
          else
            try {
              A = 'req' + A + '_' || '';
              try {
                var V = Pt instanceof Map ? Pt : Object.entries(Pt);
                for (const [Xt, Ft] of V) {
                  let Ut = Ft;
                  (c(Ft) && (Ut = rr(Ft)),
                    Z.push(A + Xt + '=' + encodeURIComponent(Ut)));
                }
              } catch (Xt) {
                throw (Z.push(A + 'type=' + encodeURIComponent('_badmap')), Xt);
              }
            } catch {
              h && h(Pt);
            }
        }
        if (j) {
          V = Z.join('&');
          break t;
        }
      }
      V = void 0;
    }
    return ((n = n.i.splice(0, u)), (o.G = n), V);
  }
  function Zs(n) {
    if (!n.g && !n.v) {
      n.Y = 1;
      var o = n.Da;
      (Et || f(), ft || (Et(), (ft = !0)), y.add(o, n), (n.A = 0));
    }
  }
  function _r(n) {
    return n.g || n.v || n.A >= 3
      ? !1
      : (n.Y++, (n.v = Ie(g(n.Da, n), ni(n, n.A))), n.A++, !0);
  }
  ((s.Da = function () {
    if (
      ((this.v = null),
      ti(this),
      this.aa && !(this.P || this.g == null || this.T <= 0))
    ) {
      var n = 4 * this.T;
      (this.j.info('BP detection timer enabled: ' + n),
        (this.B = Ie(g(this.Wa, this), n)));
    }
  }),
    (s.Wa = function () {
      this.B &&
        ((this.B = null),
        this.j.info('BP detection timeout reached.'),
        this.j.info('Buffering proxy detected and switch to long-polling!'),
        (this.F = !1),
        (this.P = !0),
        mt(10),
        dn(this),
        ti(this));
    }));
  function yr(n) {
    n.B != null && (l.clearTimeout(n.B), (n.B = null));
  }
  function ti(n) {
    ((n.g = new Ot(n, n.j, 'rpc', n.Y)),
      n.u === null && (n.g.J = n.o),
      (n.g.P = 0));
    var o = Rt(n.na);
    (q(o, 'RID', 'rpc'),
      q(o, 'SID', n.M),
      q(o, 'AID', n.K),
      q(o, 'CI', n.F ? '0' : '1'),
      !n.F && n.ia && q(o, 'TO', n.ia),
      q(o, 'TYPE', 'xmlhttp'),
      xe(n, o),
      n.u && n.o && pr(o, n.u, n.o),
      n.O && (n.g.H = n.O));
    var u = n.g;
    ((n = n.ba),
      (u.M = 1),
      (u.A = hn(Rt(o))),
      (u.u = null),
      (u.R = !0),
      Ss(u, n));
  }
  s.Va = function () {
    this.C != null && ((this.C = null), dn(this), _r(this), mt(19));
  };
  function pn(n) {
    n.C != null && (l.clearTimeout(n.C), (n.C = null));
  }
  function ei(n, o) {
    var u = null;
    if (n.g == o) {
      (pn(n), yr(n), (n.g = null));
      var h = 2;
    } else if (cr(n.h, o)) ((u = o.G), Os(n.h, o), (h = 1));
    else return;
    if (n.I != 0) {
      if (o.o)
        if (h == 1) {
          ((u = o.u ? o.u.length : 0), (o = Date.now() - o.F));
          var T = n.D;
          ((h = an()), dt(h, new Is(h, u)), mn(n));
        } else Zs(n);
      else if (
        ((T = o.m),
        T == 3 ||
          (T == 0 && o.X > 0) ||
          !((h == 1 && ja(n, o)) || (h == 2 && _r(n))))
      )
        switch ((u && u.length > 0 && ((o = n.h), (o.i = o.i.concat(u))), T)) {
          case 1:
            Ht(n, 5);
            break;
          case 4:
            Ht(n, 10);
            break;
          case 3:
            Ht(n, 6);
            break;
          default:
            Ht(n, 2);
        }
    }
  }
  function ni(n, o) {
    let u = n.Qa + Math.floor(Math.random() * n.Za);
    return (n.isActive() || (u *= 2), u * o);
  }
  function Ht(n, o) {
    if ((n.j.info('Error code ' + o), o == 2)) {
      var u = g(n.bb, n),
        h = n.Ua;
      const T = !h;
      ((h = new xt(h || '//www.google.com/images/cleardot.gif')),
        (l.location && l.location.protocol == 'http') || Ve(h, 'https'),
        hn(h),
        T ? Oa(h.toString(), u) : xa(h.toString(), u));
    } else mt(2);
    ((n.I = 0), n.l && n.l.pa(o), ri(n), Xs(n));
  }
  s.bb = function (n) {
    n
      ? (this.j.info('Successfully pinged google.com'), mt(2))
      : (this.j.info('Failed to ping google.com'), mt(1));
  };
  function ri(n) {
    if (((n.I = 0), (n.ja = []), n.l)) {
      const o = xs(n.h);
      ((o.length != 0 || n.i.length != 0) &&
        (O(n.ja, o),
        O(n.ja, n.i),
        (n.h.i.length = 0),
        b(n.i),
        (n.i.length = 0)),
        n.l.oa());
    }
  }
  function si(n, o, u) {
    var h = u instanceof xt ? Rt(u) : new xt(u);
    if (h.g != '') (o && (h.g = o + '.' + h.g), Se(h, h.u));
    else {
      var T = l.location;
      ((h = T.protocol),
        (o = o ? o + '.' + T.hostname : T.hostname),
        (T = +T.port));
      const A = new xt(null);
      (h && Ve(A, h), o && (A.g = o), T && Se(A, T), u && (A.h = u), (h = A));
    }
    return (
      (u = n.G),
      (o = n.wa),
      u && o && q(h, u, o),
      q(h, 'VER', n.ka),
      xe(n, h),
      h
    );
  }
  function ii(n, o, u) {
    if (o && !n.L)
      throw Error("Can't create secondary domain capable XhrIo object.");
    return (
      (o = n.Aa && !n.ma ? new Q(new mr({ ab: u })) : new Q(n.ma)),
      o.Fa(n.L),
      o
    );
  }
  s.isActive = function () {
    return !!this.l && this.l.isActive(this);
  };
  function oi() {}
  ((s = oi.prototype),
    (s.ra = function () {}),
    (s.qa = function () {}),
    (s.pa = function () {}),
    (s.oa = function () {}),
    (s.isActive = function () {
      return !0;
    }),
    (s.Ka = function () {}));
  function gn() {}
  gn.prototype.g = function (n, o) {
    return new yt(n, o);
  };
  function yt(n, o) {
    (at.call(this),
      (this.g = new Hs(o)),
      (this.l = n),
      (this.h = (o && o.messageUrlParams) || null),
      (n = (o && o.messageHeaders) || null),
      o &&
        o.clientProtocolHeaderRequired &&
        (n
          ? (n['X-Client-Protocol'] = 'webchannel')
          : (n = { 'X-Client-Protocol': 'webchannel' })),
      (this.g.o = n),
      (n = (o && o.initMessageHeaders) || null),
      o &&
        o.messageContentType &&
        (n
          ? (n['X-WebChannel-Content-Type'] = o.messageContentType)
          : (n = { 'X-WebChannel-Content-Type': o.messageContentType })),
      o &&
        o.sa &&
        (n
          ? (n['X-WebChannel-Client-Profile'] = o.sa)
          : (n = { 'X-WebChannel-Client-Profile': o.sa })),
      (this.g.U = n),
      (n = o && o.Qb) && !m(n) && (this.g.u = n),
      (this.A = (o && o.supportsCrossDomainXhr) || !1),
      (this.v = (o && o.sendRawJson) || !1),
      (o = o && o.httpSessionIdParam) &&
        !m(o) &&
        ((this.g.G = o),
        (n = this.h),
        n !== null && o in n && ((n = this.h), o in n && delete n[o])),
      (this.j = new ue(this)));
  }
  (w(yt, at),
    (yt.prototype.m = function () {
      ((this.g.l = this.j),
        this.A && (this.g.L = !0),
        this.g.connect(this.l, this.h || void 0));
    }),
    (yt.prototype.close = function () {
      gr(this.g);
    }),
    (yt.prototype.o = function (n) {
      var o = this.g;
      if (typeof n == 'string') {
        var u = {};
        ((u.__data__ = n), (n = u));
      } else this.v && ((u = {}), (u.__data__ = rr(n)), (n = u));
      (o.i.push(new Pa(o.Ya++, n)), o.I == 3 && mn(o));
    }),
    (yt.prototype.N = function () {
      ((this.g.l = null),
        delete this.j,
        gr(this.g),
        delete this.g,
        yt.Z.N.call(this));
    }));
  function ai(n) {
    (sr.call(this),
      n.__headers__ &&
        ((this.headers = n.__headers__),
        (this.statusCode = n.__status__),
        delete n.__headers__,
        delete n.__status__));
    var o = n.__sm__;
    if (o) {
      t: {
        for (const u in o) {
          n = u;
          break t;
        }
        n = void 0;
      }
      ((this.i = n) &&
        ((n = this.i), (o = o !== null && n in o ? o[n] : void 0)),
        (this.data = o));
    } else this.data = n;
  }
  w(ai, sr);
  function ui() {
    (ir.call(this), (this.status = 1));
  }
  w(ui, ir);
  function ue(n) {
    this.g = n;
  }
  (w(ue, oi),
    (ue.prototype.ra = function () {
      dt(this.g, 'a');
    }),
    (ue.prototype.qa = function (n) {
      dt(this.g, new ai(n));
    }),
    (ue.prototype.pa = function (n) {
      dt(this.g, new ui());
    }),
    (ue.prototype.oa = function () {
      dt(this.g, 'b');
    }),
    (gn.prototype.createWebChannel = gn.prototype.g),
    (yt.prototype.send = yt.prototype.o),
    (yt.prototype.open = yt.prototype.m),
    (yt.prototype.close = yt.prototype.close),
    (no = function () {
      return new gn();
    }),
    (eo = function () {
      return an();
    }),
    (to = Kt),
    (Rr = {
      jb: 0,
      mb: 1,
      nb: 2,
      Hb: 3,
      Mb: 4,
      Jb: 5,
      Kb: 6,
      Ib: 7,
      Gb: 8,
      Lb: 9,
      PROXY: 10,
      NOPROXY: 11,
      Eb: 12,
      Ab: 13,
      Bb: 14,
      zb: 15,
      Cb: 16,
      Db: 17,
      fb: 18,
      eb: 19,
      gb: 20,
    }),
    (un.NO_ERROR = 0),
    (un.TIMEOUT = 8),
    (un.HTTP_ERROR = 6),
    (wn = un),
    (ws.COMPLETE = 'complete'),
    (Zi = ws),
    (Es.EventType = ve),
    (ve.OPEN = 'a'),
    (ve.CLOSE = 'b'),
    (ve.ERROR = 'c'),
    (ve.MESSAGE = 'd'),
    (at.prototype.listen = at.prototype.J),
    (Le = Es),
    (Q.prototype.listenOnce = Q.prototype.K),
    (Q.prototype.getLastError = Q.prototype.Ha),
    (Q.prototype.getLastErrorCode = Q.prototype.ya),
    (Q.prototype.getStatus = Q.prototype.ca),
    (Q.prototype.getResponseJson = Q.prototype.La),
    (Q.prototype.getResponseText = Q.prototype.la),
    (Q.prototype.send = Q.prototype.ea),
    (Q.prototype.setWithCredentials = Q.prototype.Fa),
    (Ji = Q));
}).apply(
  typeof yn < 'u'
    ? yn
    : typeof self < 'u'
      ? self
      : typeof window < 'u'
        ? window
        : {}
);
const hi = '@firebase/firestore',
  ci = '4.9.2';
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lt {
  constructor(t) {
    this.uid = t;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? 'uid:' + this.uid : 'anonymous-user';
  }
  isEqual(t) {
    return t.uid === this.uid;
  }
}
((lt.UNAUTHENTICATED = new lt(null)),
  (lt.GOOGLE_CREDENTIALS = new lt('google-credentials-uid')),
  (lt.FIRST_PARTY = new lt('first-party-uid')),
  (lt.MOCK_USER = new lt('mock-user')));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ye = '12.3.0';
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const te = new Ba('@firebase/firestore');
function le() {
  return te.logLevel;
}
function C(s, ...t) {
  if (te.logLevel <= Dt.DEBUG) {
    const e = t.map(Fr);
    te.debug(`Firestore (${ye}): ${s}`, ...e);
  }
}
function ee(s, ...t) {
  if (te.logLevel <= Dt.ERROR) {
    const e = t.map(Fr);
    te.error(`Firestore (${ye}): ${s}`, ...e);
  }
}
function Bn(s, ...t) {
  if (te.logLevel <= Dt.WARN) {
    const e = t.map(Fr);
    te.warn(`Firestore (${ye}): ${s}`, ...e);
  }
}
function Fr(s) {
  if (typeof s == 'string') return s;
  try {
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ return (function (e) {
      return JSON.stringify(e);
    })(s);
  } catch {
    return s;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function M(s, t, e) {
  let r = 'Unexpected state';
  (typeof t == 'string' ? (r = t) : (e = t), ro(s, r, e));
}
function ro(s, t, e) {
  let r = `FIRESTORE (${ye}) INTERNAL ASSERTION FAILED: ${t} (ID: ${s.toString(16)})`;
  if (e !== void 0)
    try {
      r += ' CONTEXT: ' + JSON.stringify(e);
    } catch {
      r += ' CONTEXT: ' + e;
    }
  throw (ee(r), new Error(r));
}
function W(s, t, e, r) {
  let i = 'Unexpected state';
  (typeof e == 'string' ? (i = e) : (r = e), s || ro(t, i, r));
}
function B(s, t) {
  return s;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const P = {
  OK: 'ok',
  CANCELLED: 'cancelled',
  UNKNOWN: 'unknown',
  INVALID_ARGUMENT: 'invalid-argument',
  DEADLINE_EXCEEDED: 'deadline-exceeded',
  NOT_FOUND: 'not-found',
  ALREADY_EXISTS: 'already-exists',
  PERMISSION_DENIED: 'permission-denied',
  UNAUTHENTICATED: 'unauthenticated',
  RESOURCE_EXHAUSTED: 'resource-exhausted',
  FAILED_PRECONDITION: 'failed-precondition',
  ABORTED: 'aborted',
  OUT_OF_RANGE: 'out-of-range',
  UNIMPLEMENTED: 'unimplemented',
  INTERNAL: 'internal',
  UNAVAILABLE: 'unavailable',
  DATA_LOSS: 'data-loss',
};
class D extends Ga {
  constructor(t, e) {
    (super(t, e),
      (this.code = t),
      (this.message = e),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Jt {
  constructor() {
    this.promise = new Promise((t, e) => {
      ((this.resolve = t), (this.reject = e));
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class so {
  constructor(t, e) {
    ((this.user = e),
      (this.type = 'OAuth'),
      (this.headers = new Map()),
      this.headers.set('Authorization', `Bearer ${t}`));
  }
}
class cu {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(t, e) {
    t.enqueueRetryable(() => e(lt.UNAUTHENTICATED));
  }
  shutdown() {}
}
class fu {
  constructor(t) {
    ((this.token = t), (this.changeListener = null));
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(t, e) {
    ((this.changeListener = e), t.enqueueRetryable(() => e(this.token.user)));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class du {
  constructor(t) {
    ((this.t = t),
      (this.currentUser = lt.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null));
  }
  start(t, e) {
    W(this.o === void 0, 42304);
    let r = this.i;
    const i = (d) => (this.i !== r ? ((r = this.i), e(d)) : Promise.resolve());
    let a = new Jt();
    this.o = () => {
      (this.i++,
        (this.currentUser = this.u()),
        a.resolve(),
        (a = new Jt()),
        t.enqueueRetryable(() => i(this.currentUser)));
    };
    const l = () => {
        const d = a;
        t.enqueueRetryable(async () => {
          (await d.promise, await i(this.currentUser));
        });
      },
      c = (d) => {
        (C('FirebaseAuthCredentialsProvider', 'Auth detected'),
          (this.auth = d),
          this.o && (this.auth.addAuthTokenListener(this.o), l()));
      };
    (this.t.onInit((d) => c(d)),
      setTimeout(() => {
        if (!this.auth) {
          const d = this.t.getImmediate({ optional: !0 });
          d
            ? c(d)
            : (C('FirebaseAuthCredentialsProvider', 'Auth not yet detected'),
              a.resolve(),
              (a = new Jt()));
        }
      }, 0),
      l());
  }
  getToken() {
    const t = this.i,
      e = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(e)
            .then((r) =>
              this.i !== t
                ? (C(
                    'FirebaseAuthCredentialsProvider',
                    'getToken aborted due to token change.'
                  ),
                  this.getToken())
                : r
                  ? (W(typeof r.accessToken == 'string', 31837, { l: r }),
                    new so(r.accessToken, this.currentUser))
                  : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    (this.auth && this.o && this.auth.removeAuthTokenListener(this.o),
      (this.o = void 0));
  }
  u() {
    const t = this.auth && this.auth.getUid();
    return (W(t === null || typeof t == 'string', 2055, { h: t }), new lt(t));
  }
}
class mu {
  constructor(t, e, r) {
    ((this.P = t),
      (this.T = e),
      (this.I = r),
      (this.type = 'FirstParty'),
      (this.user = lt.FIRST_PARTY),
      (this.A = new Map()));
  }
  R() {
    return this.I ? this.I() : null;
  }
  get headers() {
    this.A.set('X-Goog-AuthUser', this.P);
    const t = this.R();
    return (
      t && this.A.set('Authorization', t),
      this.T && this.A.set('X-Goog-Iam-Authorization-Token', this.T),
      this.A
    );
  }
}
class pu {
  constructor(t, e, r) {
    ((this.P = t), (this.T = e), (this.I = r));
  }
  getToken() {
    return Promise.resolve(new mu(this.P, this.T, this.I));
  }
  start(t, e) {
    t.enqueueRetryable(() => e(lt.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class fi {
  constructor(t) {
    ((this.value = t),
      (this.type = 'AppCheck'),
      (this.headers = new Map()),
      t && t.length > 0 && this.headers.set('x-firebase-appcheck', this.value));
  }
}
class gu {
  constructor(t, e) {
    ((this.V = e),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.m = null),
      (this.p = null),
      za(t) && t.settings.appCheckToken && (this.p = t.settings.appCheckToken));
  }
  start(t, e) {
    W(this.o === void 0, 3512);
    const r = (a) => {
      a.error != null &&
        C(
          'FirebaseAppCheckTokenProvider',
          `Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`
        );
      const l = a.token !== this.m;
      return (
        (this.m = a.token),
        C(
          'FirebaseAppCheckTokenProvider',
          `Received ${l ? 'new' : 'existing'} token.`
        ),
        l ? e(a.token) : Promise.resolve()
      );
    };
    this.o = (a) => {
      t.enqueueRetryable(() => r(a));
    };
    const i = (a) => {
      (C('FirebaseAppCheckTokenProvider', 'AppCheck detected'),
        (this.appCheck = a),
        this.o && this.appCheck.addTokenListener(this.o));
    };
    (this.V.onInit((a) => i(a)),
      setTimeout(() => {
        if (!this.appCheck) {
          const a = this.V.getImmediate({ optional: !0 });
          a
            ? i(a)
            : C('FirebaseAppCheckTokenProvider', 'AppCheck not yet detected');
        }
      }, 0));
  }
  getToken() {
    if (this.p) return Promise.resolve(new fi(this.p));
    const t = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(t)
            .then((e) =>
              e
                ? (W(typeof e.token == 'string', 44558, { tokenResult: e }),
                  (this.m = e.token),
                  new fi(e.token))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    (this.appCheck && this.o && this.appCheck.removeTokenListener(this.o),
      (this.o = void 0));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _u(s) {
  const t = typeof self < 'u' && (self.crypto || self.msCrypto),
    e = new Uint8Array(s);
  if (t && typeof t.getRandomValues == 'function') t.getRandomValues(e);
  else for (let r = 0; r < s; r++) e[r] = Math.floor(256 * Math.random());
  return e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ur {
  static newId() {
    const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      e = 62 * Math.floor(4.129032258064516);
    let r = '';
    for (; r.length < 20; ) {
      const i = _u(40);
      for (let a = 0; a < i.length; ++a)
        r.length < 20 && i[a] < e && (r += t.charAt(i[a] % 62));
    }
    return r;
  }
}
function U(s, t) {
  return s < t ? -1 : s > t ? 1 : 0;
}
function Pr(s, t) {
  const e = Math.min(s.length, t.length);
  for (let r = 0; r < e; r++) {
    const i = s.charAt(r),
      a = t.charAt(r);
    if (i !== a) return Tr(i) === Tr(a) ? U(i, a) : Tr(i) ? 1 : -1;
  }
  return U(s.length, t.length);
}
const yu = 55296,
  Eu = 57343;
function Tr(s) {
  const t = s.charCodeAt(0);
  return t >= yu && t <= Eu;
}
function de(s, t, e) {
  return s.length === t.length && s.every((r, i) => e(r, t[i]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const di = '__name__';
class Vt {
  constructor(t, e, r) {
    (e === void 0
      ? (e = 0)
      : e > t.length && M(637, { offset: e, range: t.length }),
      r === void 0
        ? (r = t.length - e)
        : r > t.length - e && M(1746, { length: r, range: t.length - e }),
      (this.segments = t),
      (this.offset = e),
      (this.len = r));
  }
  get length() {
    return this.len;
  }
  isEqual(t) {
    return Vt.comparator(this, t) === 0;
  }
  child(t) {
    const e = this.segments.slice(this.offset, this.limit());
    return (
      t instanceof Vt
        ? t.forEach((r) => {
            e.push(r);
          })
        : e.push(t),
      this.construct(e)
    );
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(t) {
    return (
      (t = t === void 0 ? 1 : t),
      this.construct(this.segments, this.offset + t, this.length - t)
    );
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(t) {
    return this.segments[this.offset + t];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(t) {
    if (t.length < this.length) return !1;
    for (let e = 0; e < this.length; e++)
      if (this.get(e) !== t.get(e)) return !1;
    return !0;
  }
  isImmediateParentOf(t) {
    if (this.length + 1 !== t.length) return !1;
    for (let e = 0; e < this.length; e++)
      if (this.get(e) !== t.get(e)) return !1;
    return !0;
  }
  forEach(t) {
    for (let e = this.offset, r = this.limit(); e < r; e++) t(this.segments[e]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(t, e) {
    const r = Math.min(t.length, e.length);
    for (let i = 0; i < r; i++) {
      const a = Vt.compareSegments(t.get(i), e.get(i));
      if (a !== 0) return a;
    }
    return U(t.length, e.length);
  }
  static compareSegments(t, e) {
    const r = Vt.isNumericId(t),
      i = Vt.isNumericId(e);
    return r && !i
      ? -1
      : !r && i
        ? 1
        : r && i
          ? Vt.extractNumericId(t).compare(Vt.extractNumericId(e))
          : Pr(t, e);
  }
  static isNumericId(t) {
    return t.startsWith('__id') && t.endsWith('__');
  }
  static extractNumericId(t) {
    return Lr.fromString(t.substring(4, t.length - 2));
  }
}
class G extends Vt {
  construct(t, e, r) {
    return new G(t, e, r);
  }
  canonicalString() {
    return this.toArray().join('/');
  }
  toString() {
    return this.canonicalString();
  }
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join('/');
  }
  static fromString(...t) {
    const e = [];
    for (const r of t) {
      if (r.indexOf('//') >= 0)
        throw new D(
          P.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`
        );
      e.push(...r.split('/').filter((i) => i.length > 0));
    }
    return new G(e);
  }
  static emptyPath() {
    return new G([]);
  }
}
const Tu = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class it extends Vt {
  construct(t, e, r) {
    return new it(t, e, r);
  }
  static isValidIdentifier(t) {
    return Tu.test(t);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (t) => (
          (t = t.replace(/\\/g, '\\\\').replace(/`/g, '\\`')),
          it.isValidIdentifier(t) || (t = '`' + t + '`'),
          t
        )
      )
      .join('.');
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === di;
  }
  static keyField() {
    return new it([di]);
  }
  static fromServerFormat(t) {
    const e = [];
    let r = '',
      i = 0;
    const a = () => {
      if (r.length === 0)
        throw new D(
          P.INVALID_ARGUMENT,
          `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
        );
      (e.push(r), (r = ''));
    };
    let l = !1;
    for (; i < t.length; ) {
      const c = t[i];
      if (c === '\\') {
        if (i + 1 === t.length)
          throw new D(
            P.INVALID_ARGUMENT,
            'Path has trailing escape character: ' + t
          );
        const d = t[i + 1];
        if (d !== '\\' && d !== '.' && d !== '`')
          throw new D(
            P.INVALID_ARGUMENT,
            'Path has invalid escape sequence: ' + t
          );
        ((r += d), (i += 2));
      } else
        c === '`'
          ? ((l = !l), i++)
          : c !== '.' || l
            ? ((r += c), i++)
            : (a(), i++);
    }
    if ((a(), l))
      throw new D(P.INVALID_ARGUMENT, 'Unterminated ` in path: ' + t);
    return new it(e);
  }
  static emptyPath() {
    return new it([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class k {
  constructor(t) {
    this.path = t;
  }
  static fromPath(t) {
    return new k(G.fromString(t));
  }
  static fromName(t) {
    return new k(G.fromString(t).popFirst(5));
  }
  static empty() {
    return new k(G.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(t) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(t) {
    return t !== null && G.comparator(this.path, t.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(t, e) {
    return G.comparator(t.path, e.path);
  }
  static isDocumentKey(t) {
    return t.length % 2 == 0;
  }
  static fromSegments(t) {
    return new k(new G(t.slice()));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function io(s, t, e) {
  if (!e)
    throw new D(
      P.INVALID_ARGUMENT,
      `Function ${s}() cannot be called with an empty ${t}.`
    );
}
function vu(s, t, e, r) {
  if (t === !0 && r === !0)
    throw new D(P.INVALID_ARGUMENT, `${s} and ${e} cannot be used together.`);
}
function mi(s) {
  if (!k.isDocumentKey(s))
    throw new D(
      P.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`
    );
}
function pi(s) {
  if (k.isDocumentKey(s))
    throw new D(
      P.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`
    );
}
function oo(s) {
  return (
    typeof s == 'object' &&
    s !== null &&
    (Object.getPrototypeOf(s) === Object.prototype ||
      Object.getPrototypeOf(s) === null)
  );
}
function jr(s) {
  if (s === void 0) return 'undefined';
  if (s === null) return 'null';
  if (typeof s == 'string')
    return (
      s.length > 20 && (s = `${s.substring(0, 20)}...`),
      JSON.stringify(s)
    );
  if (typeof s == 'number' || typeof s == 'boolean') return '' + s;
  if (typeof s == 'object') {
    if (s instanceof Array) return 'an array';
    {
      const t = (function (r) {
        return r.constructor ? r.constructor.name : null;
      })(s);
      return t ? `a custom ${t} object` : 'an object';
    }
  }
  return typeof s == 'function' ? 'a function' : M(12329, { type: typeof s });
}
function ao(s, t) {
  if (('_delegate' in s && (s = s._delegate), !(s instanceof t))) {
    if (t.name === s.constructor.name)
      throw new D(
        P.INVALID_ARGUMENT,
        'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
      );
    {
      const e = jr(s);
      throw new D(
        P.INVALID_ARGUMENT,
        `Expected type '${t.name}', but it was: ${e}`
      );
    }
  }
  return s;
}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function J(s, t) {
  const e = { typeString: s };
  return (t && (e.value = t), e);
}
function He(s, t) {
  if (!oo(s)) throw new D(P.INVALID_ARGUMENT, 'JSON must be an object');
  let e;
  for (const r in t)
    if (t[r]) {
      const i = t[r].typeString,
        a = 'value' in t[r] ? { value: t[r].value } : void 0;
      if (!(r in s)) {
        e = `JSON missing required field: '${r}'`;
        break;
      }
      const l = s[r];
      if (i && typeof l !== i) {
        e = `JSON field '${r}' must be a ${i}.`;
        break;
      }
      if (a !== void 0 && l !== a.value) {
        e = `Expected '${r}' field to equal '${a.value}'`;
        break;
      }
    }
  if (e) throw new D(P.INVALID_ARGUMENT, e);
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gi = -62135596800,
  _i = 1e6;
class z {
  static now() {
    return z.fromMillis(Date.now());
  }
  static fromDate(t) {
    return z.fromMillis(t.getTime());
  }
  static fromMillis(t) {
    const e = Math.floor(t / 1e3),
      r = Math.floor((t - 1e3 * e) * _i);
    return new z(e, r);
  }
  constructor(t, e) {
    if (((this.seconds = t), (this.nanoseconds = e), e < 0))
      throw new D(
        P.INVALID_ARGUMENT,
        'Timestamp nanoseconds out of range: ' + e
      );
    if (e >= 1e9)
      throw new D(
        P.INVALID_ARGUMENT,
        'Timestamp nanoseconds out of range: ' + e
      );
    if (t < gi)
      throw new D(P.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + t);
    if (t >= 253402300800)
      throw new D(P.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + t);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / _i;
  }
  _compareTo(t) {
    return this.seconds === t.seconds
      ? U(this.nanoseconds, t.nanoseconds)
      : U(this.seconds, t.seconds);
  }
  isEqual(t) {
    return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
  }
  toString() {
    return (
      'Timestamp(seconds=' +
      this.seconds +
      ', nanoseconds=' +
      this.nanoseconds +
      ')'
    );
  }
  toJSON() {
    return {
      type: z._jsonSchemaVersion,
      seconds: this.seconds,
      nanoseconds: this.nanoseconds,
    };
  }
  static fromJSON(t) {
    if (He(t, z._jsonSchema)) return new z(t.seconds, t.nanoseconds);
  }
  valueOf() {
    const t = this.seconds - gi;
    return (
      String(t).padStart(12, '0') +
      '.' +
      String(this.nanoseconds).padStart(9, '0')
    );
  }
}
((z._jsonSchemaVersion = 'firestore/timestamp/1.0'),
  (z._jsonSchema = {
    type: J('string', z._jsonSchemaVersion),
    seconds: J('number'),
    nanoseconds: J('number'),
  }));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $ {
  static fromTimestamp(t) {
    return new $(t);
  }
  static min() {
    return new $(new z(0, 0));
  }
  static max() {
    return new $(new z(253402300799, 999999999));
  }
  constructor(t) {
    this.timestamp = t;
  }
  compareTo(t) {
    return this.timestamp._compareTo(t.timestamp);
  }
  isEqual(t) {
    return this.timestamp.isEqual(t.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return 'SnapshotVersion(' + this.timestamp.toString() + ')';
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ze = -1;
function Au(s, t) {
  const e = s.toTimestamp().seconds,
    r = s.toTimestamp().nanoseconds + 1,
    i = $.fromTimestamp(r === 1e9 ? new z(e + 1, 0) : new z(e, r));
  return new Bt(i, k.empty(), t);
}
function Iu(s) {
  return new Bt(s.readTime, s.key, ze);
}
class Bt {
  constructor(t, e, r) {
    ((this.readTime = t), (this.documentKey = e), (this.largestBatchId = r));
  }
  static min() {
    return new Bt($.min(), k.empty(), ze);
  }
  static max() {
    return new Bt($.max(), k.empty(), ze);
  }
}
function wu(s, t) {
  let e = s.readTime.compareTo(t.readTime);
  return e !== 0
    ? e
    : ((e = k.comparator(s.documentKey, t.documentKey)),
      e !== 0 ? e : U(s.largestBatchId, t.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ru =
  'The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.';
class Pu {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(t) {
    this.onCommittedListeners.push(t);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((t) => t());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Br(s) {
  if (s.code !== P.FAILED_PRECONDITION || s.message !== Ru) throw s;
  C('LocalStore', 'Unexpectedly lost primary lease');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class R {
  constructor(t) {
    ((this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      t(
        (e) => {
          ((this.isDone = !0),
            (this.result = e),
            this.nextCallback && this.nextCallback(e));
        },
        (e) => {
          ((this.isDone = !0),
            (this.error = e),
            this.catchCallback && this.catchCallback(e));
        }
      ));
  }
  catch(t) {
    return this.next(void 0, t);
  }
  next(t, e) {
    return (
      this.callbackAttached && M(59440),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(e, this.error)
          : this.wrapSuccess(t, this.result)
        : new R((r, i) => {
            ((this.nextCallback = (a) => {
              this.wrapSuccess(t, a).next(r, i);
            }),
              (this.catchCallback = (a) => {
                this.wrapFailure(e, a).next(r, i);
              }));
          })
    );
  }
  toPromise() {
    return new Promise((t, e) => {
      this.next(t, e);
    });
  }
  wrapUserFunction(t) {
    try {
      const e = t();
      return e instanceof R ? e : R.resolve(e);
    } catch (e) {
      return R.reject(e);
    }
  }
  wrapSuccess(t, e) {
    return t ? this.wrapUserFunction(() => t(e)) : R.resolve(e);
  }
  wrapFailure(t, e) {
    return t ? this.wrapUserFunction(() => t(e)) : R.reject(e);
  }
  static resolve(t) {
    return new R((e, r) => {
      e(t);
    });
  }
  static reject(t) {
    return new R((e, r) => {
      r(t);
    });
  }
  static waitFor(t) {
    return new R((e, r) => {
      let i = 0,
        a = 0,
        l = !1;
      (t.forEach((c) => {
        (++i,
          c.next(
            () => {
              (++a, l && a === i && e());
            },
            (d) => r(d)
          ));
      }),
        (l = !0),
        a === i && e());
    });
  }
  static or(t) {
    let e = R.resolve(!1);
    for (const r of t) e = e.next((i) => (i ? R.resolve(i) : r()));
    return e;
  }
  static forEach(t, e) {
    const r = [];
    return (
      t.forEach((i, a) => {
        r.push(e.call(this, i, a));
      }),
      this.waitFor(r)
    );
  }
  static mapArray(t, e) {
    return new R((r, i) => {
      const a = t.length,
        l = new Array(a);
      let c = 0;
      for (let d = 0; d < a; d++) {
        const g = d;
        e(t[g]).next(
          (I) => {
            ((l[g] = I), ++c, c === a && r(l));
          },
          (I) => i(I)
        );
      }
    });
  }
  static doWhile(t, e) {
    return new R((r, i) => {
      const a = () => {
        t() === !0
          ? e().next(() => {
              a();
            }, i)
          : r();
      };
      a();
    });
  }
}
function Vu(s) {
  const t = s.match(/Android ([\d.]+)/i),
    e = t ? t[1].split('.').slice(0, 2).join('.') : '-1';
  return Number(e);
}
function Xe(s) {
  return s.name === 'IndexedDbTransactionError';
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qr {
  constructor(t, e) {
    ((this.previousValue = t),
      e &&
        ((e.sequenceNumberHandler = (r) => this.ae(r)),
        (this.ue = (r) => e.writeSequenceNumber(r))));
  }
  ae(t) {
    return (
      (this.previousValue = Math.max(t, this.previousValue)),
      this.previousValue
    );
  }
  next() {
    const t = ++this.previousValue;
    return (this.ue && this.ue(t), t);
  }
}
qr.ce = -1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $r = -1;
function zr(s) {
  return s == null;
}
function Dn(s) {
  return s === 0 && 1 / s == -1 / 0;
}
function Su(s) {
  return (
    typeof s == 'number' &&
    Number.isInteger(s) &&
    !Dn(s) &&
    s <= Number.MAX_SAFE_INTEGER &&
    s >= Number.MIN_SAFE_INTEGER
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const uo = '';
function Cu(s) {
  let t = '';
  for (let e = 0; e < s.length; e++)
    (t.length > 0 && (t = yi(t)), (t = Du(s.get(e), t)));
  return yi(t);
}
function Du(s, t) {
  let e = t;
  const r = s.length;
  for (let i = 0; i < r; i++) {
    const a = s.charAt(i);
    switch (a) {
      case '\0':
        e += '';
        break;
      case uo:
        e += '';
        break;
      default:
        e += a;
    }
  }
  return e;
}
function yi(s) {
  return s + uo + '';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ei(s) {
  let t = 0;
  for (const e in s) Object.prototype.hasOwnProperty.call(s, e) && t++;
  return t;
}
function Ee(s, t) {
  for (const e in s) Object.prototype.hasOwnProperty.call(s, e) && t(e, s[e]);
}
function lo(s) {
  for (const t in s) if (Object.prototype.hasOwnProperty.call(s, t)) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _t {
  constructor(t, e) {
    ((this.comparator = t), (this.root = e || rt.EMPTY));
  }
  insert(t, e) {
    return new _t(
      this.comparator,
      this.root
        .insert(t, e, this.comparator)
        .copy(null, null, rt.BLACK, null, null)
    );
  }
  remove(t) {
    return new _t(
      this.comparator,
      this.root
        .remove(t, this.comparator)
        .copy(null, null, rt.BLACK, null, null)
    );
  }
  get(t) {
    let e = this.root;
    for (; !e.isEmpty(); ) {
      const r = this.comparator(t, e.key);
      if (r === 0) return e.value;
      r < 0 ? (e = e.left) : r > 0 && (e = e.right);
    }
    return null;
  }
  indexOf(t) {
    let e = 0,
      r = this.root;
    for (; !r.isEmpty(); ) {
      const i = this.comparator(t, r.key);
      if (i === 0) return e + r.left.size;
      i < 0 ? (r = r.left) : ((e += r.left.size + 1), (r = r.right));
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(t) {
    return this.root.inorderTraversal(t);
  }
  forEach(t) {
    this.inorderTraversal((e, r) => (t(e, r), !1));
  }
  toString() {
    const t = [];
    return (
      this.inorderTraversal((e, r) => (t.push(`${e}:${r}`), !1)),
      `{${t.join(', ')}}`
    );
  }
  reverseTraversal(t) {
    return this.root.reverseTraversal(t);
  }
  getIterator() {
    return new En(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(t) {
    return new En(this.root, t, this.comparator, !1);
  }
  getReverseIterator() {
    return new En(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(t) {
    return new En(this.root, t, this.comparator, !0);
  }
}
class En {
  constructor(t, e, r, i) {
    ((this.isReverse = i), (this.nodeStack = []));
    let a = 1;
    for (; !t.isEmpty(); )
      if (((a = e ? r(t.key, e) : 1), e && i && (a *= -1), a < 0))
        t = this.isReverse ? t.left : t.right;
      else {
        if (a === 0) {
          this.nodeStack.push(t);
          break;
        }
        (this.nodeStack.push(t), (t = this.isReverse ? t.right : t.left));
      }
  }
  getNext() {
    let t = this.nodeStack.pop();
    const e = { key: t.key, value: t.value };
    if (this.isReverse)
      for (t = t.left; !t.isEmpty(); ) (this.nodeStack.push(t), (t = t.right));
    else
      for (t = t.right; !t.isEmpty(); ) (this.nodeStack.push(t), (t = t.left));
    return e;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) return null;
    const t = this.nodeStack[this.nodeStack.length - 1];
    return { key: t.key, value: t.value };
  }
}
class rt {
  constructor(t, e, r, i, a) {
    ((this.key = t),
      (this.value = e),
      (this.color = r ?? rt.RED),
      (this.left = i ?? rt.EMPTY),
      (this.right = a ?? rt.EMPTY),
      (this.size = this.left.size + 1 + this.right.size));
  }
  copy(t, e, r, i, a) {
    return new rt(
      t ?? this.key,
      e ?? this.value,
      r ?? this.color,
      i ?? this.left,
      a ?? this.right
    );
  }
  isEmpty() {
    return !1;
  }
  inorderTraversal(t) {
    return (
      this.left.inorderTraversal(t) ||
      t(this.key, this.value) ||
      this.right.inorderTraversal(t)
    );
  }
  reverseTraversal(t) {
    return (
      this.right.reverseTraversal(t) ||
      t(this.key, this.value) ||
      this.left.reverseTraversal(t)
    );
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(t, e, r) {
    let i = this;
    const a = r(t, i.key);
    return (
      (i =
        a < 0
          ? i.copy(null, null, null, i.left.insert(t, e, r), null)
          : a === 0
            ? i.copy(null, e, null, null, null)
            : i.copy(null, null, null, null, i.right.insert(t, e, r))),
      i.fixUp()
    );
  }
  removeMin() {
    if (this.left.isEmpty()) return rt.EMPTY;
    let t = this;
    return (
      t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()),
      (t = t.copy(null, null, null, t.left.removeMin(), null)),
      t.fixUp()
    );
  }
  remove(t, e) {
    let r,
      i = this;
    if (e(t, i.key) < 0)
      (i.left.isEmpty() ||
        i.left.isRed() ||
        i.left.left.isRed() ||
        (i = i.moveRedLeft()),
        (i = i.copy(null, null, null, i.left.remove(t, e), null)));
    else {
      if (
        (i.left.isRed() && (i = i.rotateRight()),
        i.right.isEmpty() ||
          i.right.isRed() ||
          i.right.left.isRed() ||
          (i = i.moveRedRight()),
        e(t, i.key) === 0)
      ) {
        if (i.right.isEmpty()) return rt.EMPTY;
        ((r = i.right.min()),
          (i = i.copy(r.key, r.value, null, null, i.right.removeMin())));
      }
      i = i.copy(null, null, null, null, i.right.remove(t, e));
    }
    return i.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let t = this;
    return (
      t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()),
      t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()),
      t.left.isRed() && t.right.isRed() && (t = t.colorFlip()),
      t
    );
  }
  moveRedLeft() {
    let t = this.colorFlip();
    return (
      t.right.left.isRed() &&
        ((t = t.copy(null, null, null, null, t.right.rotateRight())),
        (t = t.rotateLeft()),
        (t = t.colorFlip())),
      t
    );
  }
  moveRedRight() {
    let t = this.colorFlip();
    return (
      t.left.left.isRed() && ((t = t.rotateRight()), (t = t.colorFlip())),
      t
    );
  }
  rotateLeft() {
    const t = this.copy(null, null, rt.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, t, null);
  }
  rotateRight() {
    const t = this.copy(null, null, rt.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, t);
  }
  colorFlip() {
    const t = this.left.copy(null, null, !this.left.color, null, null),
      e = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t, e);
  }
  checkMaxDepth() {
    const t = this.check();
    return Math.pow(2, t) <= this.size + 1;
  }
  check() {
    if (this.isRed() && this.left.isRed())
      throw M(43730, { key: this.key, value: this.value });
    if (this.right.isRed())
      throw M(14113, { key: this.key, value: this.value });
    const t = this.left.check();
    if (t !== this.right.check()) throw M(27949);
    return t + (this.isRed() ? 0 : 1);
  }
}
((rt.EMPTY = null), (rt.RED = !0), (rt.BLACK = !1));
rt.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw M(57766);
  }
  get value() {
    throw M(16141);
  }
  get color() {
    throw M(16727);
  }
  get left() {
    throw M(29726);
  }
  get right() {
    throw M(36894);
  }
  copy(t, e, r, i, a) {
    return this;
  }
  insert(t, e, r) {
    return new rt(t, e);
  }
  remove(t, e) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(t) {
    return !1;
  }
  reverseTraversal(t) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ot {
  constructor(t) {
    ((this.comparator = t), (this.data = new _t(this.comparator)));
  }
  has(t) {
    return this.data.get(t) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(t) {
    return this.data.indexOf(t);
  }
  forEach(t) {
    this.data.inorderTraversal((e, r) => (t(e), !1));
  }
  forEachInRange(t, e) {
    const r = this.data.getIteratorFrom(t[0]);
    for (; r.hasNext(); ) {
      const i = r.getNext();
      if (this.comparator(i.key, t[1]) >= 0) return;
      e(i.key);
    }
  }
  forEachWhile(t, e) {
    let r;
    for (
      r = e !== void 0 ? this.data.getIteratorFrom(e) : this.data.getIterator();
      r.hasNext();

    )
      if (!t(r.getNext().key)) return;
  }
  firstAfterOrEqual(t) {
    const e = this.data.getIteratorFrom(t);
    return e.hasNext() ? e.getNext().key : null;
  }
  getIterator() {
    return new Ti(this.data.getIterator());
  }
  getIteratorFrom(t) {
    return new Ti(this.data.getIteratorFrom(t));
  }
  add(t) {
    return this.copy(this.data.remove(t).insert(t, !0));
  }
  delete(t) {
    return this.has(t) ? this.copy(this.data.remove(t)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(t) {
    let e = this;
    return (
      e.size < t.size && ((e = t), (t = this)),
      t.forEach((r) => {
        e = e.add(r);
      }),
      e
    );
  }
  isEqual(t) {
    if (!(t instanceof ot) || this.size !== t.size) return !1;
    const e = this.data.getIterator(),
      r = t.data.getIterator();
    for (; e.hasNext(); ) {
      const i = e.getNext().key,
        a = r.getNext().key;
      if (this.comparator(i, a) !== 0) return !1;
    }
    return !0;
  }
  toArray() {
    const t = [];
    return (
      this.forEach((e) => {
        t.push(e);
      }),
      t
    );
  }
  toString() {
    const t = [];
    return (this.forEach((e) => t.push(e)), 'SortedSet(' + t.toString() + ')');
  }
  copy(t) {
    const e = new ot(this.comparator);
    return ((e.data = t), e);
  }
}
class Ti {
  constructor(t) {
    this.iter = t;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wt {
  constructor(t) {
    ((this.fields = t), t.sort(it.comparator));
  }
  static empty() {
    return new wt([]);
  }
  unionWith(t) {
    let e = new ot(it.comparator);
    for (const r of this.fields) e = e.add(r);
    for (const r of t) e = e.add(r);
    return new wt(e.toArray());
  }
  covers(t) {
    for (const e of this.fields) if (e.isPrefixOf(t)) return !0;
    return !1;
  }
  isEqual(t) {
    return de(this.fields, t.fields, (e, r) => e.isEqual(r));
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bu extends Error {
  constructor() {
    (super(...arguments), (this.name = 'Base64DecodeError'));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class St {
  constructor(t) {
    this.binaryString = t;
  }
  static fromBase64String(t) {
    const e = (function (i) {
      try {
        return atob(i);
      } catch (a) {
        throw typeof DOMException < 'u' && a instanceof DOMException
          ? new bu('Invalid base64 string: ' + a)
          : a;
      }
    })(t);
    return new St(e);
  }
  static fromUint8Array(t) {
    const e = (function (i) {
      let a = '';
      for (let l = 0; l < i.length; ++l) a += String.fromCharCode(i[l]);
      return a;
    })(t);
    return new St(e);
  }
  [Symbol.iterator]() {
    let t = 0;
    return {
      next: () =>
        t < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(t++), done: !1 }
          : { value: void 0, done: !0 },
    };
  }
  toBase64() {
    return (function (e) {
      return btoa(e);
    })(this.binaryString);
  }
  toUint8Array() {
    return (function (e) {
      const r = new Uint8Array(e.length);
      for (let i = 0; i < e.length; i++) r[i] = e.charCodeAt(i);
      return r;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(t) {
    return U(this.binaryString, t.binaryString);
  }
  isEqual(t) {
    return this.binaryString === t.binaryString;
  }
}
St.EMPTY_BYTE_STRING = new St('');
const Nu = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function ne(s) {
  if ((W(!!s, 39018), typeof s == 'string')) {
    let t = 0;
    const e = Nu.exec(s);
    if ((W(!!e, 46558, { timestamp: s }), e[1])) {
      let i = e[1];
      ((i = (i + '000000000').substr(0, 9)), (t = Number(i)));
    }
    const r = new Date(s);
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: t };
  }
  return { seconds: st(s.seconds), nanos: st(s.nanos) };
}
function st(s) {
  return typeof s == 'number' ? s : typeof s == 'string' ? Number(s) : 0;
}
function me(s) {
  return typeof s == 'string' ? St.fromBase64String(s) : St.fromUint8Array(s);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ho = 'server_timestamp',
  co = '__type__',
  fo = '__previous_value__',
  mo = '__local_write_time__';
function Gr(s) {
  return (s?.mapValue?.fields || {})[co]?.stringValue === ho;
}
function Kr(s) {
  const t = s.mapValue.fields[fo];
  return Gr(t) ? Kr(t) : t;
}
function bn(s) {
  const t = ne(s.mapValue.fields[mo].timestampValue);
  return new z(t.seconds, t.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ku {
  constructor(t, e, r, i, a, l, c, d, g, I) {
    ((this.databaseId = t),
      (this.appId = e),
      (this.persistenceKey = r),
      (this.host = i),
      (this.ssl = a),
      (this.forceLongPolling = l),
      (this.autoDetectLongPolling = c),
      (this.longPollingOptions = d),
      (this.useFetchStreams = g),
      (this.isUsingEmulator = I));
  }
}
const Nn = '(default)';
class kn {
  constructor(t, e) {
    ((this.projectId = t), (this.database = e || Nn));
  }
  static empty() {
    return new kn('', '');
  }
  get isDefaultDatabase() {
    return this.database === Nn;
  }
  isEqual(t) {
    return (
      t instanceof kn &&
      t.projectId === this.projectId &&
      t.database === this.database
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const po = '__type__',
  Ou = '__max__',
  Tn = { mapValue: {} },
  go = '__vector__',
  Vr = 'value';
function re(s) {
  return 'nullValue' in s
    ? 0
    : 'booleanValue' in s
      ? 1
      : 'integerValue' in s || 'doubleValue' in s
        ? 2
        : 'timestampValue' in s
          ? 3
          : 'stringValue' in s
            ? 5
            : 'bytesValue' in s
              ? 6
              : 'referenceValue' in s
                ? 7
                : 'geoPointValue' in s
                  ? 8
                  : 'arrayValue' in s
                    ? 9
                    : 'mapValue' in s
                      ? Gr(s)
                        ? 4
                        : Mu(s)
                          ? 9007199254740991
                          : xu(s)
                            ? 10
                            : 11
                      : M(28295, { value: s });
}
function Ct(s, t) {
  if (s === t) return !0;
  const e = re(s);
  if (e !== re(t)) return !1;
  switch (e) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return s.booleanValue === t.booleanValue;
    case 4:
      return bn(s).isEqual(bn(t));
    case 3:
      return (function (i, a) {
        if (
          typeof i.timestampValue == 'string' &&
          typeof a.timestampValue == 'string' &&
          i.timestampValue.length === a.timestampValue.length
        )
          return i.timestampValue === a.timestampValue;
        const l = ne(i.timestampValue),
          c = ne(a.timestampValue);
        return l.seconds === c.seconds && l.nanos === c.nanos;
      })(s, t);
    case 5:
      return s.stringValue === t.stringValue;
    case 6:
      return (function (i, a) {
        return me(i.bytesValue).isEqual(me(a.bytesValue));
      })(s, t);
    case 7:
      return s.referenceValue === t.referenceValue;
    case 8:
      return (function (i, a) {
        return (
          st(i.geoPointValue.latitude) === st(a.geoPointValue.latitude) &&
          st(i.geoPointValue.longitude) === st(a.geoPointValue.longitude)
        );
      })(s, t);
    case 2:
      return (function (i, a) {
        if ('integerValue' in i && 'integerValue' in a)
          return st(i.integerValue) === st(a.integerValue);
        if ('doubleValue' in i && 'doubleValue' in a) {
          const l = st(i.doubleValue),
            c = st(a.doubleValue);
          return l === c ? Dn(l) === Dn(c) : isNaN(l) && isNaN(c);
        }
        return !1;
      })(s, t);
    case 9:
      return de(s.arrayValue.values || [], t.arrayValue.values || [], Ct);
    case 10:
    case 11:
      return (function (i, a) {
        const l = i.mapValue.fields || {},
          c = a.mapValue.fields || {};
        if (Ei(l) !== Ei(c)) return !1;
        for (const d in l)
          if (l.hasOwnProperty(d) && (c[d] === void 0 || !Ct(l[d], c[d])))
            return !1;
        return !0;
      })(s, t);
    default:
      return M(52216, { left: s });
  }
}
function Ge(s, t) {
  return (s.values || []).find((e) => Ct(e, t)) !== void 0;
}
function pe(s, t) {
  if (s === t) return 0;
  const e = re(s),
    r = re(t);
  if (e !== r) return U(e, r);
  switch (e) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return U(s.booleanValue, t.booleanValue);
    case 2:
      return (function (a, l) {
        const c = st(a.integerValue || a.doubleValue),
          d = st(l.integerValue || l.doubleValue);
        return c < d
          ? -1
          : c > d
            ? 1
            : c === d
              ? 0
              : isNaN(c)
                ? isNaN(d)
                  ? 0
                  : -1
                : 1;
      })(s, t);
    case 3:
      return vi(s.timestampValue, t.timestampValue);
    case 4:
      return vi(bn(s), bn(t));
    case 5:
      return Pr(s.stringValue, t.stringValue);
    case 6:
      return (function (a, l) {
        const c = me(a),
          d = me(l);
        return c.compareTo(d);
      })(s.bytesValue, t.bytesValue);
    case 7:
      return (function (a, l) {
        const c = a.split('/'),
          d = l.split('/');
        for (let g = 0; g < c.length && g < d.length; g++) {
          const I = U(c[g], d[g]);
          if (I !== 0) return I;
        }
        return U(c.length, d.length);
      })(s.referenceValue, t.referenceValue);
    case 8:
      return (function (a, l) {
        const c = U(st(a.latitude), st(l.latitude));
        return c !== 0 ? c : U(st(a.longitude), st(l.longitude));
      })(s.geoPointValue, t.geoPointValue);
    case 9:
      return Ai(s.arrayValue, t.arrayValue);
    case 10:
      return (function (a, l) {
        const c = a.fields || {},
          d = l.fields || {},
          g = c[Vr]?.arrayValue,
          I = d[Vr]?.arrayValue,
          w = U(g?.values?.length || 0, I?.values?.length || 0);
        return w !== 0 ? w : Ai(g, I);
      })(s.mapValue, t.mapValue);
    case 11:
      return (function (a, l) {
        if (a === Tn.mapValue && l === Tn.mapValue) return 0;
        if (a === Tn.mapValue) return 1;
        if (l === Tn.mapValue) return -1;
        const c = a.fields || {},
          d = Object.keys(c),
          g = l.fields || {},
          I = Object.keys(g);
        (d.sort(), I.sort());
        for (let w = 0; w < d.length && w < I.length; ++w) {
          const S = Pr(d[w], I[w]);
          if (S !== 0) return S;
          const b = pe(c[d[w]], g[I[w]]);
          if (b !== 0) return b;
        }
        return U(d.length, I.length);
      })(s.mapValue, t.mapValue);
    default:
      throw M(23264, { he: e });
  }
}
function vi(s, t) {
  if (typeof s == 'string' && typeof t == 'string' && s.length === t.length)
    return U(s, t);
  const e = ne(s),
    r = ne(t),
    i = U(e.seconds, r.seconds);
  return i !== 0 ? i : U(e.nanos, r.nanos);
}
function Ai(s, t) {
  const e = s.values || [],
    r = t.values || [];
  for (let i = 0; i < e.length && i < r.length; ++i) {
    const a = pe(e[i], r[i]);
    if (a) return a;
  }
  return U(e.length, r.length);
}
function ge(s) {
  return Sr(s);
}
function Sr(s) {
  return 'nullValue' in s
    ? 'null'
    : 'booleanValue' in s
      ? '' + s.booleanValue
      : 'integerValue' in s
        ? '' + s.integerValue
        : 'doubleValue' in s
          ? '' + s.doubleValue
          : 'timestampValue' in s
            ? (function (e) {
                const r = ne(e);
                return `time(${r.seconds},${r.nanos})`;
              })(s.timestampValue)
            : 'stringValue' in s
              ? s.stringValue
              : 'bytesValue' in s
                ? (function (e) {
                    return me(e).toBase64();
                  })(s.bytesValue)
                : 'referenceValue' in s
                  ? (function (e) {
                      return k.fromName(e).toString();
                    })(s.referenceValue)
                  : 'geoPointValue' in s
                    ? (function (e) {
                        return `geo(${e.latitude},${e.longitude})`;
                      })(s.geoPointValue)
                    : 'arrayValue' in s
                      ? (function (e) {
                          let r = '[',
                            i = !0;
                          for (const a of e.values || [])
                            (i ? (i = !1) : (r += ','), (r += Sr(a)));
                          return r + ']';
                        })(s.arrayValue)
                      : 'mapValue' in s
                        ? (function (e) {
                            const r = Object.keys(e.fields || {}).sort();
                            let i = '{',
                              a = !0;
                            for (const l of r)
                              (a ? (a = !1) : (i += ','),
                                (i += `${l}:${Sr(e.fields[l])}`));
                            return i + '}';
                          })(s.mapValue)
                        : M(61005, { value: s });
}
function Rn(s) {
  switch (re(s)) {
    case 0:
    case 1:
      return 4;
    case 2:
      return 8;
    case 3:
    case 8:
      return 16;
    case 4:
      const t = Kr(s);
      return t ? 16 + Rn(t) : 16;
    case 5:
      return 2 * s.stringValue.length;
    case 6:
      return me(s.bytesValue).approximateByteSize();
    case 7:
      return s.referenceValue.length;
    case 9:
      return (function (r) {
        return (r.values || []).reduce((i, a) => i + Rn(a), 0);
      })(s.arrayValue);
    case 10:
    case 11:
      return (function (r) {
        let i = 0;
        return (
          Ee(r.fields, (a, l) => {
            i += a.length + Rn(l);
          }),
          i
        );
      })(s.mapValue);
    default:
      throw M(13486, { value: s });
  }
}
function Cr(s) {
  return !!s && 'integerValue' in s;
}
function Qr(s) {
  return !!s && 'arrayValue' in s;
}
function Pn(s) {
  return !!s && 'mapValue' in s;
}
function xu(s) {
  return (s?.mapValue?.fields || {})[po]?.stringValue === go;
}
function Fe(s) {
  if (s.geoPointValue) return { geoPointValue: { ...s.geoPointValue } };
  if (s.timestampValue && typeof s.timestampValue == 'object')
    return { timestampValue: { ...s.timestampValue } };
  if (s.mapValue) {
    const t = { mapValue: { fields: {} } };
    return (Ee(s.mapValue.fields, (e, r) => (t.mapValue.fields[e] = Fe(r))), t);
  }
  if (s.arrayValue) {
    const t = { arrayValue: { values: [] } };
    for (let e = 0; e < (s.arrayValue.values || []).length; ++e)
      t.arrayValue.values[e] = Fe(s.arrayValue.values[e]);
    return t;
  }
  return { ...s };
}
function Mu(s) {
  return (((s.mapValue || {}).fields || {}).__type__ || {}).stringValue === Ou;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class At {
  constructor(t) {
    this.value = t;
  }
  static empty() {
    return new At({ mapValue: {} });
  }
  field(t) {
    if (t.isEmpty()) return this.value;
    {
      let e = this.value;
      for (let r = 0; r < t.length - 1; ++r)
        if (((e = (e.mapValue.fields || {})[t.get(r)]), !Pn(e))) return null;
      return ((e = (e.mapValue.fields || {})[t.lastSegment()]), e || null);
    }
  }
  set(t, e) {
    this.getFieldsMap(t.popLast())[t.lastSegment()] = Fe(e);
  }
  setAll(t) {
    let e = it.emptyPath(),
      r = {},
      i = [];
    t.forEach((l, c) => {
      if (!e.isImmediateParentOf(c)) {
        const d = this.getFieldsMap(e);
        (this.applyChanges(d, r, i), (r = {}), (i = []), (e = c.popLast()));
      }
      l ? (r[c.lastSegment()] = Fe(l)) : i.push(c.lastSegment());
    });
    const a = this.getFieldsMap(e);
    this.applyChanges(a, r, i);
  }
  delete(t) {
    const e = this.field(t.popLast());
    Pn(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()];
  }
  isEqual(t) {
    return Ct(this.value, t.value);
  }
  getFieldsMap(t) {
    let e = this.value;
    e.mapValue.fields || (e.mapValue = { fields: {} });
    for (let r = 0; r < t.length; ++r) {
      let i = e.mapValue.fields[t.get(r)];
      ((Pn(i) && i.mapValue.fields) ||
        ((i = { mapValue: { fields: {} } }), (e.mapValue.fields[t.get(r)] = i)),
        (e = i));
    }
    return e.mapValue.fields;
  }
  applyChanges(t, e, r) {
    Ee(e, (i, a) => (t[i] = a));
    for (const i of r) delete t[i];
  }
  clone() {
    return new At(Fe(this.value));
  }
}
function _o(s) {
  const t = [];
  return (
    Ee(s.fields, (e, r) => {
      const i = new it([e]);
      if (Pn(r)) {
        const a = _o(r.mapValue).fields;
        if (a.length === 0) t.push(i);
        else for (const l of a) t.push(i.child(l));
      } else t.push(i);
    }),
    new wt(t)
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vt {
  constructor(t, e, r, i, a, l, c) {
    ((this.key = t),
      (this.documentType = e),
      (this.version = r),
      (this.readTime = i),
      (this.createTime = a),
      (this.data = l),
      (this.documentState = c));
  }
  static newInvalidDocument(t) {
    return new vt(t, 0, $.min(), $.min(), $.min(), At.empty(), 0);
  }
  static newFoundDocument(t, e, r, i) {
    return new vt(t, 1, e, $.min(), r, i, 0);
  }
  static newNoDocument(t, e) {
    return new vt(t, 2, e, $.min(), $.min(), At.empty(), 0);
  }
  static newUnknownDocument(t, e) {
    return new vt(t, 3, e, $.min(), $.min(), At.empty(), 2);
  }
  convertToFoundDocument(t, e) {
    return (
      !this.createTime.isEqual($.min()) ||
        (this.documentType !== 2 && this.documentType !== 0) ||
        (this.createTime = t),
      (this.version = t),
      (this.documentType = 1),
      (this.data = e),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(t) {
    return (
      (this.version = t),
      (this.documentType = 2),
      (this.data = At.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(t) {
    return (
      (this.version = t),
      (this.documentType = 3),
      (this.data = At.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return ((this.documentState = 2), this);
  }
  setHasLocalMutations() {
    return ((this.documentState = 1), (this.version = $.min()), this);
  }
  setReadTime(t) {
    return ((this.readTime = t), this);
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(t) {
    return (
      t instanceof vt &&
      this.key.isEqual(t.key) &&
      this.version.isEqual(t.version) &&
      this.documentType === t.documentType &&
      this.documentState === t.documentState &&
      this.data.isEqual(t.data)
    );
  }
  mutableCopy() {
    return new vt(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class On {
  constructor(t, e) {
    ((this.position = t), (this.inclusive = e));
  }
}
function Ii(s, t, e) {
  let r = 0;
  for (let i = 0; i < s.position.length; i++) {
    const a = t[i],
      l = s.position[i];
    if (
      (a.field.isKeyField()
        ? (r = k.comparator(k.fromName(l.referenceValue), e.key))
        : (r = pe(l, e.data.field(a.field))),
      a.dir === 'desc' && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function wi(s, t) {
  if (s === null) return t === null;
  if (
    t === null ||
    s.inclusive !== t.inclusive ||
    s.position.length !== t.position.length
  )
    return !1;
  for (let e = 0; e < s.position.length; e++)
    if (!Ct(s.position[e], t.position[e])) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xn {
  constructor(t, e = 'asc') {
    ((this.field = t), (this.dir = e));
  }
}
function Lu(s, t) {
  return s.dir === t.dir && s.field.isEqual(t.field);
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yo {}
class nt extends yo {
  constructor(t, e, r) {
    (super(), (this.field = t), (this.op = e), (this.value = r));
  }
  static create(t, e, r) {
    return t.isKeyField()
      ? e === 'in' || e === 'not-in'
        ? this.createKeyFieldInFilter(t, e, r)
        : new Uu(t, e, r)
      : e === 'array-contains'
        ? new qu(t, r)
        : e === 'in'
          ? new $u(t, r)
          : e === 'not-in'
            ? new zu(t, r)
            : e === 'array-contains-any'
              ? new Gu(t, r)
              : new nt(t, e, r);
  }
  static createKeyFieldInFilter(t, e, r) {
    return e === 'in' ? new ju(t, r) : new Bu(t, r);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return this.op === '!='
      ? e !== null &&
          e.nullValue === void 0 &&
          this.matchesComparison(pe(e, this.value))
      : e !== null &&
          re(this.value) === re(e) &&
          this.matchesComparison(pe(e, this.value));
  }
  matchesComparison(t) {
    switch (this.op) {
      case '<':
        return t < 0;
      case '<=':
        return t <= 0;
      case '==':
        return t === 0;
      case '!=':
        return t !== 0;
      case '>':
        return t > 0;
      case '>=':
        return t >= 0;
      default:
        return M(47266, { operator: this.op });
    }
  }
  isInequality() {
    return ['<', '<=', '>', '>=', '!=', 'not-in'].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
}
class qt extends yo {
  constructor(t, e) {
    (super(), (this.filters = t), (this.op = e), (this.Pe = null));
  }
  static create(t, e) {
    return new qt(t, e);
  }
  matches(t) {
    return Eo(this)
      ? this.filters.find((e) => !e.matches(t)) === void 0
      : this.filters.find((e) => e.matches(t)) !== void 0;
  }
  getFlattenedFilters() {
    return (
      this.Pe !== null ||
        (this.Pe = this.filters.reduce(
          (t, e) => t.concat(e.getFlattenedFilters()),
          []
        )),
      this.Pe
    );
  }
  getFilters() {
    return Object.assign([], this.filters);
  }
}
function Eo(s) {
  return s.op === 'and';
}
function To(s) {
  return Fu(s) && Eo(s);
}
function Fu(s) {
  for (const t of s.filters) if (t instanceof qt) return !1;
  return !0;
}
function Dr(s) {
  if (s instanceof nt)
    return s.field.canonicalString() + s.op.toString() + ge(s.value);
  if (To(s)) return s.filters.map((t) => Dr(t)).join(',');
  {
    const t = s.filters.map((e) => Dr(e)).join(',');
    return `${s.op}(${t})`;
  }
}
function vo(s, t) {
  return s instanceof nt
    ? (function (r, i) {
        return (
          i instanceof nt &&
          r.op === i.op &&
          r.field.isEqual(i.field) &&
          Ct(r.value, i.value)
        );
      })(s, t)
    : s instanceof qt
      ? (function (r, i) {
          return i instanceof qt &&
            r.op === i.op &&
            r.filters.length === i.filters.length
            ? r.filters.reduce((a, l, c) => a && vo(l, i.filters[c]), !0)
            : !1;
        })(s, t)
      : void M(19439);
}
function Ao(s) {
  return s instanceof nt
    ? (function (e) {
        return `${e.field.canonicalString()} ${e.op} ${ge(e.value)}`;
      })(s)
    : s instanceof qt
      ? (function (e) {
          return (
            e.op.toString() + ' {' + e.getFilters().map(Ao).join(' ,') + '}'
          );
        })(s)
      : 'Filter';
}
class Uu extends nt {
  constructor(t, e, r) {
    (super(t, e, r), (this.key = k.fromName(r.referenceValue)));
  }
  matches(t) {
    const e = k.comparator(t.key, this.key);
    return this.matchesComparison(e);
  }
}
class ju extends nt {
  constructor(t, e) {
    (super(t, 'in', e), (this.keys = Io('in', e)));
  }
  matches(t) {
    return this.keys.some((e) => e.isEqual(t.key));
  }
}
class Bu extends nt {
  constructor(t, e) {
    (super(t, 'not-in', e), (this.keys = Io('not-in', e)));
  }
  matches(t) {
    return !this.keys.some((e) => e.isEqual(t.key));
  }
}
function Io(s, t) {
  return (t.arrayValue?.values || []).map((e) => k.fromName(e.referenceValue));
}
class qu extends nt {
  constructor(t, e) {
    super(t, 'array-contains', e);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return Qr(e) && Ge(e.arrayValue, this.value);
  }
}
class $u extends nt {
  constructor(t, e) {
    super(t, 'in', e);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return e !== null && Ge(this.value.arrayValue, e);
  }
}
class zu extends nt {
  constructor(t, e) {
    super(t, 'not-in', e);
  }
  matches(t) {
    if (Ge(this.value.arrayValue, { nullValue: 'NULL_VALUE' })) return !1;
    const e = t.data.field(this.field);
    return (
      e !== null && e.nullValue === void 0 && !Ge(this.value.arrayValue, e)
    );
  }
}
class Gu extends nt {
  constructor(t, e) {
    super(t, 'array-contains-any', e);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return (
      !(!Qr(e) || !e.arrayValue.values) &&
      e.arrayValue.values.some((r) => Ge(this.value.arrayValue, r))
    );
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ku {
  constructor(t, e = null, r = [], i = [], a = null, l = null, c = null) {
    ((this.path = t),
      (this.collectionGroup = e),
      (this.orderBy = r),
      (this.filters = i),
      (this.limit = a),
      (this.startAt = l),
      (this.endAt = c),
      (this.Te = null));
  }
}
function Ri(s, t = null, e = [], r = [], i = null, a = null, l = null) {
  return new Ku(s, t, e, r, i, a, l);
}
function Wr(s) {
  const t = B(s);
  if (t.Te === null) {
    let e = t.path.canonicalString();
    (t.collectionGroup !== null && (e += '|cg:' + t.collectionGroup),
      (e += '|f:'),
      (e += t.filters.map((r) => Dr(r)).join(',')),
      (e += '|ob:'),
      (e += t.orderBy
        .map((r) =>
          (function (a) {
            return a.field.canonicalString() + a.dir;
          })(r)
        )
        .join(',')),
      zr(t.limit) || ((e += '|l:'), (e += t.limit)),
      t.startAt &&
        ((e += '|lb:'),
        (e += t.startAt.inclusive ? 'b:' : 'a:'),
        (e += t.startAt.position.map((r) => ge(r)).join(','))),
      t.endAt &&
        ((e += '|ub:'),
        (e += t.endAt.inclusive ? 'a:' : 'b:'),
        (e += t.endAt.position.map((r) => ge(r)).join(','))),
      (t.Te = e));
  }
  return t.Te;
}
function Hr(s, t) {
  if (s.limit !== t.limit || s.orderBy.length !== t.orderBy.length) return !1;
  for (let e = 0; e < s.orderBy.length; e++)
    if (!Lu(s.orderBy[e], t.orderBy[e])) return !1;
  if (s.filters.length !== t.filters.length) return !1;
  for (let e = 0; e < s.filters.length; e++)
    if (!vo(s.filters[e], t.filters[e])) return !1;
  return (
    s.collectionGroup === t.collectionGroup &&
    !!s.path.isEqual(t.path) &&
    !!wi(s.startAt, t.startAt) &&
    wi(s.endAt, t.endAt)
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qn {
  constructor(
    t,
    e = null,
    r = [],
    i = [],
    a = null,
    l = 'F',
    c = null,
    d = null
  ) {
    ((this.path = t),
      (this.collectionGroup = e),
      (this.explicitOrderBy = r),
      (this.filters = i),
      (this.limit = a),
      (this.limitType = l),
      (this.startAt = c),
      (this.endAt = d),
      (this.Ie = null),
      (this.Ee = null),
      (this.de = null),
      this.startAt,
      this.endAt);
  }
}
function Qu(s, t, e, r, i, a, l, c) {
  return new qn(s, t, e, r, i, a, l, c);
}
function Wu(s) {
  return new qn(s);
}
function Pi(s) {
  return (
    s.filters.length === 0 &&
    s.limit === null &&
    s.startAt == null &&
    s.endAt == null &&
    (s.explicitOrderBy.length === 0 ||
      (s.explicitOrderBy.length === 1 &&
        s.explicitOrderBy[0].field.isKeyField()))
  );
}
function Hu(s) {
  return s.collectionGroup !== null;
}
function Ue(s) {
  const t = B(s);
  if (t.Ie === null) {
    t.Ie = [];
    const e = new Set();
    for (const a of t.explicitOrderBy)
      (t.Ie.push(a), e.add(a.field.canonicalString()));
    const r =
      t.explicitOrderBy.length > 0
        ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir
        : 'asc';
    ((function (l) {
      let c = new ot(it.comparator);
      return (
        l.filters.forEach((d) => {
          d.getFlattenedFilters().forEach((g) => {
            g.isInequality() && (c = c.add(g.field));
          });
        }),
        c
      );
    })(t).forEach((a) => {
      e.has(a.canonicalString()) || a.isKeyField() || t.Ie.push(new xn(a, r));
    }),
      e.has(it.keyField().canonicalString()) ||
        t.Ie.push(new xn(it.keyField(), r)));
  }
  return t.Ie;
}
function Zt(s) {
  const t = B(s);
  return (t.Ee || (t.Ee = Xu(t, Ue(s))), t.Ee);
}
function Xu(s, t) {
  if (s.limitType === 'F')
    return Ri(
      s.path,
      s.collectionGroup,
      t,
      s.filters,
      s.limit,
      s.startAt,
      s.endAt
    );
  {
    t = t.map((i) => {
      const a = i.dir === 'desc' ? 'asc' : 'desc';
      return new xn(i.field, a);
    });
    const e = s.endAt ? new On(s.endAt.position, s.endAt.inclusive) : null,
      r = s.startAt ? new On(s.startAt.position, s.startAt.inclusive) : null;
    return Ri(s.path, s.collectionGroup, t, s.filters, s.limit, e, r);
  }
}
function br(s, t, e) {
  return new qn(
    s.path,
    s.collectionGroup,
    s.explicitOrderBy.slice(),
    s.filters.slice(),
    t,
    e,
    s.startAt,
    s.endAt
  );
}
function wo(s, t) {
  return Hr(Zt(s), Zt(t)) && s.limitType === t.limitType;
}
function Ro(s) {
  return `${Wr(Zt(s))}|lt:${s.limitType}`;
}
function Me(s) {
  return `Query(target=${(function (e) {
    let r = e.path.canonicalString();
    return (
      e.collectionGroup !== null &&
        (r += ' collectionGroup=' + e.collectionGroup),
      e.filters.length > 0 &&
        (r += `, filters: [${e.filters.map((i) => Ao(i)).join(', ')}]`),
      zr(e.limit) || (r += ', limit: ' + e.limit),
      e.orderBy.length > 0 &&
        (r += `, orderBy: [${e.orderBy
          .map((i) =>
            (function (l) {
              return `${l.field.canonicalString()} (${l.dir})`;
            })(i)
          )
          .join(', ')}]`),
      e.startAt &&
        ((r += ', startAt: '),
        (r += e.startAt.inclusive ? 'b:' : 'a:'),
        (r += e.startAt.position.map((i) => ge(i)).join(','))),
      e.endAt &&
        ((r += ', endAt: '),
        (r += e.endAt.inclusive ? 'a:' : 'b:'),
        (r += e.endAt.position.map((i) => ge(i)).join(','))),
      `Target(${r})`
    );
  })(Zt(s))}; limitType=${s.limitType})`;
}
function Xr(s, t) {
  return (
    t.isFoundDocument() &&
    (function (r, i) {
      const a = i.key.path;
      return r.collectionGroup !== null
        ? i.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(a)
        : k.isDocumentKey(r.path)
          ? r.path.isEqual(a)
          : r.path.isImmediateParentOf(a);
    })(s, t) &&
    (function (r, i) {
      for (const a of Ue(r))
        if (!a.field.isKeyField() && i.data.field(a.field) === null) return !1;
      return !0;
    })(s, t) &&
    (function (r, i) {
      for (const a of r.filters) if (!a.matches(i)) return !1;
      return !0;
    })(s, t) &&
    (function (r, i) {
      return !(
        (r.startAt &&
          !(function (l, c, d) {
            const g = Ii(l, c, d);
            return l.inclusive ? g <= 0 : g < 0;
          })(r.startAt, Ue(r), i)) ||
        (r.endAt &&
          !(function (l, c, d) {
            const g = Ii(l, c, d);
            return l.inclusive ? g >= 0 : g > 0;
          })(r.endAt, Ue(r), i))
      );
    })(s, t)
  );
}
function Yu(s) {
  return (t, e) => {
    let r = !1;
    for (const i of Ue(s)) {
      const a = Ju(i, t, e);
      if (a !== 0) return a;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function Ju(s, t, e) {
  const r = s.field.isKeyField()
    ? k.comparator(t.key, e.key)
    : (function (a, l, c) {
        const d = l.data.field(a),
          g = c.data.field(a);
        return d !== null && g !== null ? pe(d, g) : M(42886);
      })(s.field, t, e);
  switch (s.dir) {
    case 'asc':
      return r;
    case 'desc':
      return -1 * r;
    default:
      return M(19790, { direction: s.dir });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class se {
  constructor(t, e) {
    ((this.mapKeyFn = t),
      (this.equalsFn = e),
      (this.inner = {}),
      (this.innerSize = 0));
  }
  get(t) {
    const e = this.mapKeyFn(t),
      r = this.inner[e];
    if (r !== void 0) {
      for (const [i, a] of r) if (this.equalsFn(i, t)) return a;
    }
  }
  has(t) {
    return this.get(t) !== void 0;
  }
  set(t, e) {
    const r = this.mapKeyFn(t),
      i = this.inner[r];
    if (i === void 0)
      return ((this.inner[r] = [[t, e]]), void this.innerSize++);
    for (let a = 0; a < i.length; a++)
      if (this.equalsFn(i[a][0], t)) return void (i[a] = [t, e]);
    (i.push([t, e]), this.innerSize++);
  }
  delete(t) {
    const e = this.mapKeyFn(t),
      r = this.inner[e];
    if (r === void 0) return !1;
    for (let i = 0; i < r.length; i++)
      if (this.equalsFn(r[i][0], t))
        return (
          r.length === 1 ? delete this.inner[e] : r.splice(i, 1),
          this.innerSize--,
          !0
        );
    return !1;
  }
  forEach(t) {
    Ee(this.inner, (e, r) => {
      for (const [i, a] of r) t(i, a);
    });
  }
  isEmpty() {
    return lo(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Zu = new _t(k.comparator);
function Mn() {
  return Zu;
}
const Po = new _t(k.comparator);
function vn(...s) {
  let t = Po;
  for (const e of s) t = t.insert(e.key, e);
  return t;
}
function Vo(s) {
  let t = Po;
  return (s.forEach((e, r) => (t = t.insert(e, r.overlayedDocument))), t);
}
function Yt() {
  return je();
}
function So() {
  return je();
}
function je() {
  return new se(
    (s) => s.toString(),
    (s, t) => s.isEqual(t)
  );
}
const tl = new _t(k.comparator),
  el = new ot(k.comparator);
function ht(...s) {
  let t = el;
  for (const e of s) t = t.add(e);
  return t;
}
const nl = new ot(U);
function rl() {
  return nl;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Yr(s, t) {
  if (s.useProto3Json) {
    if (isNaN(t)) return { doubleValue: 'NaN' };
    if (t === 1 / 0) return { doubleValue: 'Infinity' };
    if (t === -1 / 0) return { doubleValue: '-Infinity' };
  }
  return { doubleValue: Dn(t) ? '-0' : t };
}
function Co(s) {
  return { integerValue: '' + s };
}
function sl(s, t) {
  return Su(t) ? Co(t) : Yr(s, t);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $n {
  constructor() {
    this._ = void 0;
  }
}
function il(s, t, e) {
  return s instanceof Ke
    ? (function (i, a) {
        const l = {
          fields: {
            [co]: { stringValue: ho },
            [mo]: {
              timestampValue: { seconds: i.seconds, nanos: i.nanoseconds },
            },
          },
        };
        return (
          a && Gr(a) && (a = Kr(a)),
          a && (l.fields[fo] = a),
          { mapValue: l }
        );
      })(e, t)
    : s instanceof Qe
      ? bo(s, t)
      : s instanceof We
        ? No(s, t)
        : (function (i, a) {
            const l = Do(i, a),
              c = Vi(l) + Vi(i.Ae);
            return Cr(l) && Cr(i.Ae) ? Co(c) : Yr(i.serializer, c);
          })(s, t);
}
function ol(s, t, e) {
  return s instanceof Qe ? bo(s, t) : s instanceof We ? No(s, t) : e;
}
function Do(s, t) {
  return s instanceof Ln
    ? (function (r) {
        return (
          Cr(r) ||
          (function (a) {
            return !!a && 'doubleValue' in a;
          })(r)
        );
      })(t)
      ? t
      : { integerValue: 0 }
    : null;
}
class Ke extends $n {}
class Qe extends $n {
  constructor(t) {
    (super(), (this.elements = t));
  }
}
function bo(s, t) {
  const e = ko(t);
  for (const r of s.elements) e.some((i) => Ct(i, r)) || e.push(r);
  return { arrayValue: { values: e } };
}
class We extends $n {
  constructor(t) {
    (super(), (this.elements = t));
  }
}
function No(s, t) {
  let e = ko(t);
  for (const r of s.elements) e = e.filter((i) => !Ct(i, r));
  return { arrayValue: { values: e } };
}
class Ln extends $n {
  constructor(t, e) {
    (super(), (this.serializer = t), (this.Ae = e));
  }
}
function Vi(s) {
  return st(s.integerValue || s.doubleValue);
}
function ko(s) {
  return Qr(s) && s.arrayValue.values ? s.arrayValue.values.slice() : [];
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class al {
  constructor(t, e) {
    ((this.field = t), (this.transform = e));
  }
}
function ul(s, t) {
  return (
    s.field.isEqual(t.field) &&
    (function (r, i) {
      return (r instanceof Qe && i instanceof Qe) ||
        (r instanceof We && i instanceof We)
        ? de(r.elements, i.elements, Ct)
        : r instanceof Ln && i instanceof Ln
          ? Ct(r.Ae, i.Ae)
          : r instanceof Ke && i instanceof Ke;
    })(s.transform, t.transform)
  );
}
class ll {
  constructor(t, e) {
    ((this.version = t), (this.transformResults = e));
  }
}
class bt {
  constructor(t, e) {
    ((this.updateTime = t), (this.exists = e));
  }
  static none() {
    return new bt();
  }
  static exists(t) {
    return new bt(void 0, t);
  }
  static updateTime(t) {
    return new bt(t);
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(t) {
    return (
      this.exists === t.exists &&
      (this.updateTime
        ? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
        : !t.updateTime)
    );
  }
}
function Vn(s, t) {
  return s.updateTime !== void 0
    ? t.isFoundDocument() && t.version.isEqual(s.updateTime)
    : s.exists === void 0 || s.exists === t.isFoundDocument();
}
class zn {}
function Oo(s, t) {
  if (!s.hasLocalMutations || (t && t.fields.length === 0)) return null;
  if (t === null)
    return s.isNoDocument()
      ? new Mo(s.key, bt.none())
      : new Ye(s.key, s.data, bt.none());
  {
    const e = s.data,
      r = At.empty();
    let i = new ot(it.comparator);
    for (let a of t.fields)
      if (!i.has(a)) {
        let l = e.field(a);
        (l === null && a.length > 1 && ((a = a.popLast()), (l = e.field(a))),
          l === null ? r.delete(a) : r.set(a, l),
          (i = i.add(a)));
      }
    return new ie(s.key, r, new wt(i.toArray()), bt.none());
  }
}
function hl(s, t, e) {
  s instanceof Ye
    ? (function (i, a, l) {
        const c = i.value.clone(),
          d = Ci(i.fieldTransforms, a, l.transformResults);
        (c.setAll(d),
          a.convertToFoundDocument(l.version, c).setHasCommittedMutations());
      })(s, t, e)
    : s instanceof ie
      ? (function (i, a, l) {
          if (!Vn(i.precondition, a))
            return void a.convertToUnknownDocument(l.version);
          const c = Ci(i.fieldTransforms, a, l.transformResults),
            d = a.data;
          (d.setAll(xo(i)),
            d.setAll(c),
            a.convertToFoundDocument(l.version, d).setHasCommittedMutations());
        })(s, t, e)
      : (function (i, a, l) {
          a.convertToNoDocument(l.version).setHasCommittedMutations();
        })(0, t, e);
}
function Be(s, t, e, r) {
  return s instanceof Ye
    ? (function (a, l, c, d) {
        if (!Vn(a.precondition, l)) return c;
        const g = a.value.clone(),
          I = Di(a.fieldTransforms, d, l);
        return (
          g.setAll(I),
          l.convertToFoundDocument(l.version, g).setHasLocalMutations(),
          null
        );
      })(s, t, e, r)
    : s instanceof ie
      ? (function (a, l, c, d) {
          if (!Vn(a.precondition, l)) return c;
          const g = Di(a.fieldTransforms, d, l),
            I = l.data;
          return (
            I.setAll(xo(a)),
            I.setAll(g),
            l.convertToFoundDocument(l.version, I).setHasLocalMutations(),
            c === null
              ? null
              : c
                  .unionWith(a.fieldMask.fields)
                  .unionWith(a.fieldTransforms.map((w) => w.field))
          );
        })(s, t, e, r)
      : (function (a, l, c) {
          return Vn(a.precondition, l)
            ? (l.convertToNoDocument(l.version).setHasLocalMutations(), null)
            : c;
        })(s, t, e);
}
function cl(s, t) {
  let e = null;
  for (const r of s.fieldTransforms) {
    const i = t.data.field(r.field),
      a = Do(r.transform, i || null);
    a != null && (e === null && (e = At.empty()), e.set(r.field, a));
  }
  return e || null;
}
function Si(s, t) {
  return (
    s.type === t.type &&
    !!s.key.isEqual(t.key) &&
    !!s.precondition.isEqual(t.precondition) &&
    !!(function (r, i) {
      return (
        (r === void 0 && i === void 0) ||
        (!(!r || !i) && de(r, i, (a, l) => ul(a, l)))
      );
    })(s.fieldTransforms, t.fieldTransforms) &&
    (s.type === 0
      ? s.value.isEqual(t.value)
      : s.type !== 1 ||
        (s.data.isEqual(t.data) && s.fieldMask.isEqual(t.fieldMask)))
  );
}
class Ye extends zn {
  constructor(t, e, r, i = []) {
    (super(),
      (this.key = t),
      (this.value = e),
      (this.precondition = r),
      (this.fieldTransforms = i),
      (this.type = 0));
  }
  getFieldMask() {
    return null;
  }
}
class ie extends zn {
  constructor(t, e, r, i, a = []) {
    (super(),
      (this.key = t),
      (this.data = e),
      (this.fieldMask = r),
      (this.precondition = i),
      (this.fieldTransforms = a),
      (this.type = 1));
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function xo(s) {
  const t = new Map();
  return (
    s.fieldMask.fields.forEach((e) => {
      if (!e.isEmpty()) {
        const r = s.data.field(e);
        t.set(e, r);
      }
    }),
    t
  );
}
function Ci(s, t, e) {
  const r = new Map();
  W(s.length === e.length, 32656, { Re: e.length, Ve: s.length });
  for (let i = 0; i < e.length; i++) {
    const a = s[i],
      l = a.transform,
      c = t.data.field(a.field);
    r.set(a.field, ol(l, c, e[i]));
  }
  return r;
}
function Di(s, t, e) {
  const r = new Map();
  for (const i of s) {
    const a = i.transform,
      l = e.data.field(i.field);
    r.set(i.field, il(a, l, t));
  }
  return r;
}
class Mo extends zn {
  constructor(t, e) {
    (super(),
      (this.key = t),
      (this.precondition = e),
      (this.type = 2),
      (this.fieldTransforms = []));
  }
  getFieldMask() {
    return null;
  }
}
class fl extends zn {
  constructor(t, e) {
    (super(),
      (this.key = t),
      (this.precondition = e),
      (this.type = 3),
      (this.fieldTransforms = []));
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dl {
  constructor(t, e, r, i) {
    ((this.batchId = t),
      (this.localWriteTime = e),
      (this.baseMutations = r),
      (this.mutations = i));
  }
  applyToRemoteDocument(t, e) {
    const r = e.mutationResults;
    for (let i = 0; i < this.mutations.length; i++) {
      const a = this.mutations[i];
      a.key.isEqual(t.key) && hl(a, t, r[i]);
    }
  }
  applyToLocalView(t, e) {
    for (const r of this.baseMutations)
      r.key.isEqual(t.key) && (e = Be(r, t, e, this.localWriteTime));
    for (const r of this.mutations)
      r.key.isEqual(t.key) && (e = Be(r, t, e, this.localWriteTime));
    return e;
  }
  applyToLocalDocumentSet(t, e) {
    const r = So();
    return (
      this.mutations.forEach((i) => {
        const a = t.get(i.key),
          l = a.overlayedDocument;
        let c = this.applyToLocalView(l, a.mutatedFields);
        c = e.has(i.key) ? null : c;
        const d = Oo(l, c);
        (d !== null && r.set(i.key, d),
          l.isValidDocument() || l.convertToNoDocument($.min()));
      }),
      r
    );
  }
  keys() {
    return this.mutations.reduce((t, e) => t.add(e.key), ht());
  }
  isEqual(t) {
    return (
      this.batchId === t.batchId &&
      de(this.mutations, t.mutations, (e, r) => Si(e, r)) &&
      de(this.baseMutations, t.baseMutations, (e, r) => Si(e, r))
    );
  }
}
class Jr {
  constructor(t, e, r, i) {
    ((this.batch = t),
      (this.commitVersion = e),
      (this.mutationResults = r),
      (this.docVersions = i));
  }
  static from(t, e, r) {
    W(t.mutations.length === r.length, 58842, {
      me: t.mutations.length,
      fe: r.length,
    });
    let i = (function () {
      return tl;
    })();
    const a = t.mutations;
    for (let l = 0; l < a.length; l++) i = i.insert(a[l].key, r[l].version);
    return new Jr(t, e, r, i);
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ml {
  constructor(t, e) {
    ((this.largestBatchId = t), (this.mutation = e));
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(t) {
    return t !== null && this.mutation === t.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Y, F;
function pl(s) {
  switch (s) {
    case P.OK:
      return M(64938);
    case P.CANCELLED:
    case P.UNKNOWN:
    case P.DEADLINE_EXCEEDED:
    case P.RESOURCE_EXHAUSTED:
    case P.INTERNAL:
    case P.UNAVAILABLE:
    case P.UNAUTHENTICATED:
      return !1;
    case P.INVALID_ARGUMENT:
    case P.NOT_FOUND:
    case P.ALREADY_EXISTS:
    case P.PERMISSION_DENIED:
    case P.FAILED_PRECONDITION:
    case P.ABORTED:
    case P.OUT_OF_RANGE:
    case P.UNIMPLEMENTED:
    case P.DATA_LOSS:
      return !0;
    default:
      return M(15467, { code: s });
  }
}
function gl(s) {
  if (s === void 0) return (ee('GRPC error has no .code'), P.UNKNOWN);
  switch (s) {
    case Y.OK:
      return P.OK;
    case Y.CANCELLED:
      return P.CANCELLED;
    case Y.UNKNOWN:
      return P.UNKNOWN;
    case Y.DEADLINE_EXCEEDED:
      return P.DEADLINE_EXCEEDED;
    case Y.RESOURCE_EXHAUSTED:
      return P.RESOURCE_EXHAUSTED;
    case Y.INTERNAL:
      return P.INTERNAL;
    case Y.UNAVAILABLE:
      return P.UNAVAILABLE;
    case Y.UNAUTHENTICATED:
      return P.UNAUTHENTICATED;
    case Y.INVALID_ARGUMENT:
      return P.INVALID_ARGUMENT;
    case Y.NOT_FOUND:
      return P.NOT_FOUND;
    case Y.ALREADY_EXISTS:
      return P.ALREADY_EXISTS;
    case Y.PERMISSION_DENIED:
      return P.PERMISSION_DENIED;
    case Y.FAILED_PRECONDITION:
      return P.FAILED_PRECONDITION;
    case Y.ABORTED:
      return P.ABORTED;
    case Y.OUT_OF_RANGE:
      return P.OUT_OF_RANGE;
    case Y.UNIMPLEMENTED:
      return P.UNIMPLEMENTED;
    case Y.DATA_LOSS:
      return P.DATA_LOSS;
    default:
      return M(39323, { code: s });
  }
}
(((F = Y || (Y = {}))[(F.OK = 0)] = 'OK'),
  (F[(F.CANCELLED = 1)] = 'CANCELLED'),
  (F[(F.UNKNOWN = 2)] = 'UNKNOWN'),
  (F[(F.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
  (F[(F.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
  (F[(F.NOT_FOUND = 5)] = 'NOT_FOUND'),
  (F[(F.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
  (F[(F.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
  (F[(F.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
  (F[(F.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
  (F[(F.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
  (F[(F.ABORTED = 10)] = 'ABORTED'),
  (F[(F.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
  (F[(F.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
  (F[(F.INTERNAL = 13)] = 'INTERNAL'),
  (F[(F.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
  (F[(F.DATA_LOSS = 15)] = 'DATA_LOSS'));
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ new Lr([4294967295, 4294967295], 0);
class _l {
  constructor(t, e) {
    ((this.databaseId = t), (this.useProto3Json = e));
  }
}
function Nr(s, t) {
  return s.useProto3Json
    ? `${new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, '').replace('Z', '')}.${('000000000' + t.nanoseconds).slice(-9)}Z`
    : { seconds: '' + t.seconds, nanos: t.nanoseconds };
}
function yl(s, t) {
  return s.useProto3Json ? t.toBase64() : t.toUint8Array();
}
function El(s, t) {
  return Nr(s, t.toTimestamp());
}
function ce(s) {
  return (
    W(!!s, 49232),
    $.fromTimestamp(
      (function (e) {
        const r = ne(e);
        return new z(r.seconds, r.nanos);
      })(s)
    )
  );
}
function Lo(s, t) {
  return kr(s, t).canonicalString();
}
function kr(s, t) {
  const e = (function (i) {
    return new G(['projects', i.projectId, 'databases', i.database]);
  })(s).child('documents');
  return t === void 0 ? e : e.child(t);
}
function Tl(s) {
  const t = G.fromString(s);
  return (W(Sl(t), 10190, { key: t.toString() }), t);
}
function Or(s, t) {
  return Lo(s.databaseId, t.path);
}
function vl(s) {
  const t = Tl(s);
  return t.length === 4 ? G.emptyPath() : Il(t);
}
function Al(s) {
  return new G([
    'projects',
    s.databaseId.projectId,
    'databases',
    s.databaseId.database,
  ]).canonicalString();
}
function Il(s) {
  return (
    W(s.length > 4 && s.get(4) === 'documents', 29091, { key: s.toString() }),
    s.popFirst(5)
  );
}
function bi(s, t, e) {
  return { name: Or(s, t), fields: e.value.mapValue.fields };
}
function wl(s, t) {
  let e;
  if (t instanceof Ye) e = { update: bi(s, t.key, t.value) };
  else if (t instanceof Mo) e = { delete: Or(s, t.key) };
  else if (t instanceof ie)
    e = { update: bi(s, t.key, t.data), updateMask: Vl(t.fieldMask) };
  else {
    if (!(t instanceof fl)) return M(16599, { Vt: t.type });
    e = { verify: Or(s, t.key) };
  }
  return (
    t.fieldTransforms.length > 0 &&
      (e.updateTransforms = t.fieldTransforms.map((r) =>
        (function (a, l) {
          const c = l.transform;
          if (c instanceof Ke)
            return {
              fieldPath: l.field.canonicalString(),
              setToServerValue: 'REQUEST_TIME',
            };
          if (c instanceof Qe)
            return {
              fieldPath: l.field.canonicalString(),
              appendMissingElements: { values: c.elements },
            };
          if (c instanceof We)
            return {
              fieldPath: l.field.canonicalString(),
              removeAllFromArray: { values: c.elements },
            };
          if (c instanceof Ln)
            return { fieldPath: l.field.canonicalString(), increment: c.Ae };
          throw M(20930, { transform: l.transform });
        })(0, r)
      )),
    t.precondition.isNone ||
      (e.currentDocument = (function (i, a) {
        return a.updateTime !== void 0
          ? { updateTime: El(i, a.updateTime) }
          : a.exists !== void 0
            ? { exists: a.exists }
            : M(27497);
      })(s, t.precondition)),
    e
  );
}
function Rl(s, t) {
  return s && s.length > 0
    ? (W(t !== void 0, 14353),
      s.map((e) =>
        (function (i, a) {
          let l = i.updateTime ? ce(i.updateTime) : ce(a);
          return (
            l.isEqual($.min()) && (l = ce(a)),
            new ll(l, i.transformResults || [])
          );
        })(e, t)
      ))
    : [];
}
function Pl(s) {
  let t = vl(s.parent);
  const e = s.structuredQuery,
    r = e.from ? e.from.length : 0;
  let i = null;
  if (r > 0) {
    W(r === 1, 65062);
    const I = e.from[0];
    I.allDescendants ? (i = I.collectionId) : (t = t.child(I.collectionId));
  }
  let a = [];
  e.where &&
    (a = (function (w) {
      const S = Fo(w);
      return S instanceof qt && To(S) ? S.getFilters() : [S];
    })(e.where));
  let l = [];
  e.orderBy &&
    (l = (function (w) {
      return w.map((S) =>
        (function (O) {
          return new xn(
            he(O.field),
            (function (N) {
              switch (N) {
                case 'ASCENDING':
                  return 'asc';
                case 'DESCENDING':
                  return 'desc';
                default:
                  return;
              }
            })(O.direction)
          );
        })(S)
      );
    })(e.orderBy));
  let c = null;
  e.limit &&
    (c = (function (w) {
      let S;
      return ((S = typeof w == 'object' ? w.value : w), zr(S) ? null : S);
    })(e.limit));
  let d = null;
  e.startAt &&
    (d = (function (w) {
      const S = !!w.before,
        b = w.values || [];
      return new On(b, S);
    })(e.startAt));
  let g = null;
  return (
    e.endAt &&
      (g = (function (w) {
        const S = !w.before,
          b = w.values || [];
        return new On(b, S);
      })(e.endAt)),
    Qu(t, i, l, a, c, 'F', d, g)
  );
}
function Fo(s) {
  return s.unaryFilter !== void 0
    ? (function (e) {
        switch (e.unaryFilter.op) {
          case 'IS_NAN':
            const r = he(e.unaryFilter.field);
            return nt.create(r, '==', { doubleValue: NaN });
          case 'IS_NULL':
            const i = he(e.unaryFilter.field);
            return nt.create(i, '==', { nullValue: 'NULL_VALUE' });
          case 'IS_NOT_NAN':
            const a = he(e.unaryFilter.field);
            return nt.create(a, '!=', { doubleValue: NaN });
          case 'IS_NOT_NULL':
            const l = he(e.unaryFilter.field);
            return nt.create(l, '!=', { nullValue: 'NULL_VALUE' });
          case 'OPERATOR_UNSPECIFIED':
            return M(61313);
          default:
            return M(60726);
        }
      })(s)
    : s.fieldFilter !== void 0
      ? (function (e) {
          return nt.create(
            he(e.fieldFilter.field),
            (function (i) {
              switch (i) {
                case 'EQUAL':
                  return '==';
                case 'NOT_EQUAL':
                  return '!=';
                case 'GREATER_THAN':
                  return '>';
                case 'GREATER_THAN_OR_EQUAL':
                  return '>=';
                case 'LESS_THAN':
                  return '<';
                case 'LESS_THAN_OR_EQUAL':
                  return '<=';
                case 'ARRAY_CONTAINS':
                  return 'array-contains';
                case 'IN':
                  return 'in';
                case 'NOT_IN':
                  return 'not-in';
                case 'ARRAY_CONTAINS_ANY':
                  return 'array-contains-any';
                case 'OPERATOR_UNSPECIFIED':
                  return M(58110);
                default:
                  return M(50506);
              }
            })(e.fieldFilter.op),
            e.fieldFilter.value
          );
        })(s)
      : s.compositeFilter !== void 0
        ? (function (e) {
            return qt.create(
              e.compositeFilter.filters.map((r) => Fo(r)),
              (function (i) {
                switch (i) {
                  case 'AND':
                    return 'and';
                  case 'OR':
                    return 'or';
                  default:
                    return M(1026);
                }
              })(e.compositeFilter.op)
            );
          })(s)
        : M(30097, { filter: s });
}
function he(s) {
  return it.fromServerFormat(s.fieldPath);
}
function Vl(s) {
  const t = [];
  return (
    s.fields.forEach((e) => t.push(e.canonicalString())),
    { fieldPaths: t }
  );
}
function Sl(s) {
  return s.length >= 4 && s.get(0) === 'projects' && s.get(2) === 'databases';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Cl {
  constructor(t) {
    this.yt = t;
  }
}
function Dl(s) {
  const t = Pl({ parent: s.parent, structuredQuery: s.structuredQuery });
  return s.limitType === 'LAST' ? br(t, t.limit, 'L') : t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bl {
  constructor() {
    this.Cn = new Nl();
  }
  addToCollectionParentIndex(t, e) {
    return (this.Cn.add(e), R.resolve());
  }
  getCollectionParents(t, e) {
    return R.resolve(this.Cn.getEntries(e));
  }
  addFieldIndex(t, e) {
    return R.resolve();
  }
  deleteFieldIndex(t, e) {
    return R.resolve();
  }
  deleteAllFieldIndexes(t) {
    return R.resolve();
  }
  createTargetIndexes(t, e) {
    return R.resolve();
  }
  getDocumentsMatchingTarget(t, e) {
    return R.resolve(null);
  }
  getIndexType(t, e) {
    return R.resolve(0);
  }
  getFieldIndexes(t, e) {
    return R.resolve([]);
  }
  getNextCollectionGroupToUpdate(t) {
    return R.resolve(null);
  }
  getMinOffset(t, e) {
    return R.resolve(Bt.min());
  }
  getMinOffsetFromCollectionGroup(t, e) {
    return R.resolve(Bt.min());
  }
  updateCollectionGroup(t, e, r) {
    return R.resolve();
  }
  updateIndexEntries(t, e) {
    return R.resolve();
  }
}
class Nl {
  constructor() {
    this.index = {};
  }
  add(t) {
    const e = t.lastSegment(),
      r = t.popLast(),
      i = this.index[e] || new ot(G.comparator),
      a = !i.has(r);
    return ((this.index[e] = i.add(r)), a);
  }
  has(t) {
    const e = t.lastSegment(),
      r = t.popLast(),
      i = this.index[e];
    return i && i.has(r);
  }
  getEntries(t) {
    return (this.index[t] || new ot(G.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ni = {
    didRun: !1,
    sequenceNumbersCollected: 0,
    targetsRemoved: 0,
    documentsRemoved: 0,
  },
  Uo = 41943040;
class gt {
  static withCacheSize(t) {
    return new gt(
      t,
      gt.DEFAULT_COLLECTION_PERCENTILE,
      gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
    );
  }
  constructor(t, e, r) {
    ((this.cacheSizeCollectionThreshold = t),
      (this.percentileToCollect = e),
      (this.maximumSequenceNumbersToCollect = r));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ ((gt.DEFAULT_COLLECTION_PERCENTILE = 10),
  (gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3),
  (gt.DEFAULT = new gt(
    Uo,
    gt.DEFAULT_COLLECTION_PERCENTILE,
    gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
  )),
  (gt.DISABLED = new gt(-1, 0, 0)));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _e {
  constructor(t) {
    this.ar = t;
  }
  next() {
    return ((this.ar += 2), this.ar);
  }
  static ur() {
    return new _e(0);
  }
  static cr() {
    return new _e(-1);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ki = 'LruGarbageCollector',
  kl = 1048576;
function Oi([s, t], [e, r]) {
  const i = U(s, e);
  return i === 0 ? U(t, r) : i;
}
class Ol {
  constructor(t) {
    ((this.Ir = t), (this.buffer = new ot(Oi)), (this.Er = 0));
  }
  dr() {
    return ++this.Er;
  }
  Ar(t) {
    const e = [t, this.dr()];
    if (this.buffer.size < this.Ir) this.buffer = this.buffer.add(e);
    else {
      const r = this.buffer.last();
      Oi(e, r) < 0 && (this.buffer = this.buffer.delete(r).add(e));
    }
  }
  get maxValue() {
    return this.buffer.last()[0];
  }
}
class xl {
  constructor(t, e, r) {
    ((this.garbageCollector = t),
      (this.asyncQueue = e),
      (this.localStore = r),
      (this.Rr = null));
  }
  start() {
    this.garbageCollector.params.cacheSizeCollectionThreshold !== -1 &&
      this.Vr(6e4);
  }
  stop() {
    this.Rr && (this.Rr.cancel(), (this.Rr = null));
  }
  get started() {
    return this.Rr !== null;
  }
  Vr(t) {
    (C(ki, `Garbage collection scheduled in ${t}ms`),
      (this.Rr = this.asyncQueue.enqueueAfterDelay(
        'lru_garbage_collection',
        t,
        async () => {
          this.Rr = null;
          try {
            await this.localStore.collectGarbage(this.garbageCollector);
          } catch (e) {
            Xe(e)
              ? C(ki, 'Ignoring IndexedDB error during garbage collection: ', e)
              : await Br(e);
          }
          await this.Vr(3e5);
        }
      )));
  }
}
class Ml {
  constructor(t, e) {
    ((this.mr = t), (this.params = e));
  }
  calculateTargetCount(t, e) {
    return this.mr.gr(t).next((r) => Math.floor((e / 100) * r));
  }
  nthSequenceNumber(t, e) {
    if (e === 0) return R.resolve(qr.ce);
    const r = new Ol(e);
    return this.mr
      .forEachTarget(t, (i) => r.Ar(i.sequenceNumber))
      .next(() => this.mr.pr(t, (i) => r.Ar(i)))
      .next(() => r.maxValue);
  }
  removeTargets(t, e, r) {
    return this.mr.removeTargets(t, e, r);
  }
  removeOrphanedDocuments(t, e) {
    return this.mr.removeOrphanedDocuments(t, e);
  }
  collect(t, e) {
    return this.params.cacheSizeCollectionThreshold === -1
      ? (C('LruGarbageCollector', 'Garbage collection skipped; disabled'),
        R.resolve(Ni))
      : this.getCacheSize(t).next((r) =>
          r < this.params.cacheSizeCollectionThreshold
            ? (C(
                'LruGarbageCollector',
                `Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`
              ),
              Ni)
            : this.yr(t, e)
        );
  }
  getCacheSize(t) {
    return this.mr.getCacheSize(t);
  }
  yr(t, e) {
    let r, i, a, l, c, d, g;
    const I = Date.now();
    return this.calculateTargetCount(t, this.params.percentileToCollect)
      .next(
        (w) => (
          w > this.params.maximumSequenceNumbersToCollect
            ? (C(
                'LruGarbageCollector',
                `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`
              ),
              (i = this.params.maximumSequenceNumbersToCollect))
            : (i = w),
          (l = Date.now()),
          this.nthSequenceNumber(t, i)
        )
      )
      .next((w) => ((r = w), (c = Date.now()), this.removeTargets(t, r, e)))
      .next(
        (w) => ((a = w), (d = Date.now()), this.removeOrphanedDocuments(t, r))
      )
      .next(
        (w) => (
          (g = Date.now()),
          le() <= Dt.DEBUG &&
            C(
              'LruGarbageCollector',
              `LRU Garbage Collection
	Counted targets in ${l - I}ms
	Determined least recently used ${i} in ` +
                (c - l) +
                `ms
	Removed ${a} targets in ` +
                (d - c) +
                `ms
	Removed ${w} documents in ` +
                (g - d) +
                `ms
Total Duration: ${g - I}ms`
            ),
          R.resolve({
            didRun: !0,
            sequenceNumbersCollected: i,
            targetsRemoved: a,
            documentsRemoved: w,
          })
        )
      );
  }
}
function Ll(s, t) {
  return new Ml(s, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fl {
  constructor() {
    ((this.changes = new se(
      (t) => t.toString(),
      (t, e) => t.isEqual(e)
    )),
      (this.changesApplied = !1));
  }
  addEntry(t) {
    (this.assertNotApplied(), this.changes.set(t.key, t));
  }
  removeEntry(t, e) {
    (this.assertNotApplied(),
      this.changes.set(t, vt.newInvalidDocument(t).setReadTime(e)));
  }
  getEntry(t, e) {
    this.assertNotApplied();
    const r = this.changes.get(e);
    return r !== void 0 ? R.resolve(r) : this.getFromCache(t, e);
  }
  getEntries(t, e) {
    return this.getAllFromCache(t, e);
  }
  apply(t) {
    return (
      this.assertNotApplied(),
      (this.changesApplied = !0),
      this.applyChanges(t)
    );
  }
  assertNotApplied() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ul {
  constructor(t, e) {
    ((this.overlayedDocument = t), (this.mutatedFields = e));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jl {
  constructor(t, e, r, i) {
    ((this.remoteDocumentCache = t),
      (this.mutationQueue = e),
      (this.documentOverlayCache = r),
      (this.indexManager = i));
  }
  getDocument(t, e) {
    let r = null;
    return this.documentOverlayCache
      .getOverlay(t, e)
      .next((i) => ((r = i), this.remoteDocumentCache.getEntry(t, e)))
      .next((i) => (r !== null && Be(r.mutation, i, wt.empty(), z.now()), i));
  }
  getDocuments(t, e) {
    return this.remoteDocumentCache
      .getEntries(t, e)
      .next((r) => this.getLocalViewOfDocuments(t, r, ht()).next(() => r));
  }
  getLocalViewOfDocuments(t, e, r = ht()) {
    const i = Yt();
    return this.populateOverlays(t, i, e).next(() =>
      this.computeViews(t, e, i, r).next((a) => {
        let l = vn();
        return (
          a.forEach((c, d) => {
            l = l.insert(c, d.overlayedDocument);
          }),
          l
        );
      })
    );
  }
  getOverlayedDocuments(t, e) {
    const r = Yt();
    return this.populateOverlays(t, r, e).next(() =>
      this.computeViews(t, e, r, ht())
    );
  }
  populateOverlays(t, e, r) {
    const i = [];
    return (
      r.forEach((a) => {
        e.has(a) || i.push(a);
      }),
      this.documentOverlayCache.getOverlays(t, i).next((a) => {
        a.forEach((l, c) => {
          e.set(l, c);
        });
      })
    );
  }
  computeViews(t, e, r, i) {
    let a = Mn();
    const l = je(),
      c = (function () {
        return je();
      })();
    return (
      e.forEach((d, g) => {
        const I = r.get(g.key);
        i.has(g.key) && (I === void 0 || I.mutation instanceof ie)
          ? (a = a.insert(g.key, g))
          : I !== void 0
            ? (l.set(g.key, I.mutation.getFieldMask()),
              Be(I.mutation, g, I.mutation.getFieldMask(), z.now()))
            : l.set(g.key, wt.empty());
      }),
      this.recalculateAndSaveOverlays(t, a).next(
        (d) => (
          d.forEach((g, I) => l.set(g, I)),
          e.forEach((g, I) => c.set(g, new Ul(I, l.get(g) ?? null))),
          c
        )
      )
    );
  }
  recalculateAndSaveOverlays(t, e) {
    const r = je();
    let i = new _t((l, c) => l - c),
      a = ht();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(t, e)
      .next((l) => {
        for (const c of l)
          c.keys().forEach((d) => {
            const g = e.get(d);
            if (g === null) return;
            let I = r.get(d) || wt.empty();
            ((I = c.applyToLocalView(g, I)), r.set(d, I));
            const w = (i.get(c.batchId) || ht()).add(d);
            i = i.insert(c.batchId, w);
          });
      })
      .next(() => {
        const l = [],
          c = i.getReverseIterator();
        for (; c.hasNext(); ) {
          const d = c.getNext(),
            g = d.key,
            I = d.value,
            w = So();
          (I.forEach((S) => {
            if (!a.has(S)) {
              const b = Oo(e.get(S), r.get(S));
              (b !== null && w.set(S, b), (a = a.add(S)));
            }
          }),
            l.push(this.documentOverlayCache.saveOverlays(t, g, w)));
        }
        return R.waitFor(l);
      })
      .next(() => r);
  }
  recalculateAndSaveOverlaysForDocumentKeys(t, e) {
    return this.remoteDocumentCache
      .getEntries(t, e)
      .next((r) => this.recalculateAndSaveOverlays(t, r));
  }
  getDocumentsMatchingQuery(t, e, r, i) {
    return (function (l) {
      return (
        k.isDocumentKey(l.path) &&
        l.collectionGroup === null &&
        l.filters.length === 0
      );
    })(e)
      ? this.getDocumentsMatchingDocumentQuery(t, e.path)
      : Hu(e)
        ? this.getDocumentsMatchingCollectionGroupQuery(t, e, r, i)
        : this.getDocumentsMatchingCollectionQuery(t, e, r, i);
  }
  getNextDocuments(t, e, r, i) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(t, e, r, i)
      .next((a) => {
        const l =
          i - a.size > 0
            ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                t,
                e,
                r.largestBatchId,
                i - a.size
              )
            : R.resolve(Yt());
        let c = ze,
          d = a;
        return l.next((g) =>
          R.forEach(
            g,
            (I, w) => (
              c < w.largestBatchId && (c = w.largestBatchId),
              a.get(I)
                ? R.resolve()
                : this.remoteDocumentCache.getEntry(t, I).next((S) => {
                    d = d.insert(I, S);
                  })
            )
          )
            .next(() => this.populateOverlays(t, g, a))
            .next(() => this.computeViews(t, d, g, ht()))
            .next((I) => ({ batchId: c, changes: Vo(I) }))
        );
      });
  }
  getDocumentsMatchingDocumentQuery(t, e) {
    return this.getDocument(t, new k(e)).next((r) => {
      let i = vn();
      return (r.isFoundDocument() && (i = i.insert(r.key, r)), i);
    });
  }
  getDocumentsMatchingCollectionGroupQuery(t, e, r, i) {
    const a = e.collectionGroup;
    let l = vn();
    return this.indexManager.getCollectionParents(t, a).next((c) =>
      R.forEach(c, (d) => {
        const g = (function (w, S) {
          return new qn(
            S,
            null,
            w.explicitOrderBy.slice(),
            w.filters.slice(),
            w.limit,
            w.limitType,
            w.startAt,
            w.endAt
          );
        })(e, d.child(a));
        return this.getDocumentsMatchingCollectionQuery(t, g, r, i).next(
          (I) => {
            I.forEach((w, S) => {
              l = l.insert(w, S);
            });
          }
        );
      }).next(() => l)
    );
  }
  getDocumentsMatchingCollectionQuery(t, e, r, i) {
    let a;
    return this.documentOverlayCache
      .getOverlaysForCollection(t, e.path, r.largestBatchId)
      .next(
        (l) => (
          (a = l),
          this.remoteDocumentCache.getDocumentsMatchingQuery(t, e, r, a, i)
        )
      )
      .next((l) => {
        a.forEach((d, g) => {
          const I = g.getKey();
          l.get(I) === null && (l = l.insert(I, vt.newInvalidDocument(I)));
        });
        let c = vn();
        return (
          l.forEach((d, g) => {
            const I = a.get(d);
            (I !== void 0 && Be(I.mutation, g, wt.empty(), z.now()),
              Xr(e, g) && (c = c.insert(d, g)));
          }),
          c
        );
      });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bl {
  constructor(t) {
    ((this.serializer = t), (this.Lr = new Map()), (this.kr = new Map()));
  }
  getBundleMetadata(t, e) {
    return R.resolve(this.Lr.get(e));
  }
  saveBundleMetadata(t, e) {
    return (
      this.Lr.set(
        e.id,
        (function (i) {
          return { id: i.id, version: i.version, createTime: ce(i.createTime) };
        })(e)
      ),
      R.resolve()
    );
  }
  getNamedQuery(t, e) {
    return R.resolve(this.kr.get(e));
  }
  saveNamedQuery(t, e) {
    return (
      this.kr.set(
        e.name,
        (function (i) {
          return {
            name: i.name,
            query: Dl(i.bundledQuery),
            readTime: ce(i.readTime),
          };
        })(e)
      ),
      R.resolve()
    );
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ql {
  constructor() {
    ((this.overlays = new _t(k.comparator)), (this.qr = new Map()));
  }
  getOverlay(t, e) {
    return R.resolve(this.overlays.get(e));
  }
  getOverlays(t, e) {
    const r = Yt();
    return R.forEach(e, (i) =>
      this.getOverlay(t, i).next((a) => {
        a !== null && r.set(i, a);
      })
    ).next(() => r);
  }
  saveOverlays(t, e, r) {
    return (
      r.forEach((i, a) => {
        this.St(t, e, a);
      }),
      R.resolve()
    );
  }
  removeOverlaysForBatchId(t, e, r) {
    const i = this.qr.get(r);
    return (
      i !== void 0 &&
        (i.forEach((a) => (this.overlays = this.overlays.remove(a))),
        this.qr.delete(r)),
      R.resolve()
    );
  }
  getOverlaysForCollection(t, e, r) {
    const i = Yt(),
      a = e.length + 1,
      l = new k(e.child('')),
      c = this.overlays.getIteratorFrom(l);
    for (; c.hasNext(); ) {
      const d = c.getNext().value,
        g = d.getKey();
      if (!e.isPrefixOf(g.path)) break;
      g.path.length === a && d.largestBatchId > r && i.set(d.getKey(), d);
    }
    return R.resolve(i);
  }
  getOverlaysForCollectionGroup(t, e, r, i) {
    let a = new _t((g, I) => g - I);
    const l = this.overlays.getIterator();
    for (; l.hasNext(); ) {
      const g = l.getNext().value;
      if (g.getKey().getCollectionGroup() === e && g.largestBatchId > r) {
        let I = a.get(g.largestBatchId);
        (I === null && ((I = Yt()), (a = a.insert(g.largestBatchId, I))),
          I.set(g.getKey(), g));
      }
    }
    const c = Yt(),
      d = a.getIterator();
    for (
      ;
      d.hasNext() &&
      (d.getNext().value.forEach((g, I) => c.set(g, I)), !(c.size() >= i));

    );
    return R.resolve(c);
  }
  St(t, e, r) {
    const i = this.overlays.get(r.key);
    if (i !== null) {
      const l = this.qr.get(i.largestBatchId).delete(r.key);
      this.qr.set(i.largestBatchId, l);
    }
    this.overlays = this.overlays.insert(r.key, new ml(e, r));
    let a = this.qr.get(e);
    (a === void 0 && ((a = ht()), this.qr.set(e, a)),
      this.qr.set(e, a.add(r.key)));
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $l {
  constructor() {
    this.sessionToken = St.EMPTY_BYTE_STRING;
  }
  getSessionToken(t) {
    return R.resolve(this.sessionToken);
  }
  setSessionToken(t, e) {
    return ((this.sessionToken = e), R.resolve());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zr {
  constructor() {
    ((this.Qr = new ot(et.$r)), (this.Ur = new ot(et.Kr)));
  }
  isEmpty() {
    return this.Qr.isEmpty();
  }
  addReference(t, e) {
    const r = new et(t, e);
    ((this.Qr = this.Qr.add(r)), (this.Ur = this.Ur.add(r)));
  }
  Wr(t, e) {
    t.forEach((r) => this.addReference(r, e));
  }
  removeReference(t, e) {
    this.Gr(new et(t, e));
  }
  zr(t, e) {
    t.forEach((r) => this.removeReference(r, e));
  }
  jr(t) {
    const e = new k(new G([])),
      r = new et(e, t),
      i = new et(e, t + 1),
      a = [];
    return (
      this.Ur.forEachInRange([r, i], (l) => {
        (this.Gr(l), a.push(l.key));
      }),
      a
    );
  }
  Jr() {
    this.Qr.forEach((t) => this.Gr(t));
  }
  Gr(t) {
    ((this.Qr = this.Qr.delete(t)), (this.Ur = this.Ur.delete(t)));
  }
  Hr(t) {
    const e = new k(new G([])),
      r = new et(e, t),
      i = new et(e, t + 1);
    let a = ht();
    return (
      this.Ur.forEachInRange([r, i], (l) => {
        a = a.add(l.key);
      }),
      a
    );
  }
  containsKey(t) {
    const e = new et(t, 0),
      r = this.Qr.firstAfterOrEqual(e);
    return r !== null && t.isEqual(r.key);
  }
}
class et {
  constructor(t, e) {
    ((this.key = t), (this.Yr = e));
  }
  static $r(t, e) {
    return k.comparator(t.key, e.key) || U(t.Yr, e.Yr);
  }
  static Kr(t, e) {
    return U(t.Yr, e.Yr) || k.comparator(t.key, e.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zl {
  constructor(t, e) {
    ((this.indexManager = t),
      (this.referenceDelegate = e),
      (this.mutationQueue = []),
      (this.tr = 1),
      (this.Zr = new ot(et.$r)));
  }
  checkEmpty(t) {
    return R.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(t, e, r, i) {
    const a = this.tr;
    (this.tr++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1]);
    const l = new dl(a, e, r, i);
    this.mutationQueue.push(l);
    for (const c of i)
      ((this.Zr = this.Zr.add(new et(c.key, a))),
        this.indexManager.addToCollectionParentIndex(t, c.key.path.popLast()));
    return R.resolve(l);
  }
  lookupMutationBatch(t, e) {
    return R.resolve(this.Xr(e));
  }
  getNextMutationBatchAfterBatchId(t, e) {
    const r = e + 1,
      i = this.ei(r),
      a = i < 0 ? 0 : i;
    return R.resolve(
      this.mutationQueue.length > a ? this.mutationQueue[a] : null
    );
  }
  getHighestUnacknowledgedBatchId() {
    return R.resolve(this.mutationQueue.length === 0 ? $r : this.tr - 1);
  }
  getAllMutationBatches(t) {
    return R.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(t, e) {
    const r = new et(e, 0),
      i = new et(e, Number.POSITIVE_INFINITY),
      a = [];
    return (
      this.Zr.forEachInRange([r, i], (l) => {
        const c = this.Xr(l.Yr);
        a.push(c);
      }),
      R.resolve(a)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(t, e) {
    let r = new ot(U);
    return (
      e.forEach((i) => {
        const a = new et(i, 0),
          l = new et(i, Number.POSITIVE_INFINITY);
        this.Zr.forEachInRange([a, l], (c) => {
          r = r.add(c.Yr);
        });
      }),
      R.resolve(this.ti(r))
    );
  }
  getAllMutationBatchesAffectingQuery(t, e) {
    const r = e.path,
      i = r.length + 1;
    let a = r;
    k.isDocumentKey(a) || (a = a.child(''));
    const l = new et(new k(a), 0);
    let c = new ot(U);
    return (
      this.Zr.forEachWhile((d) => {
        const g = d.key.path;
        return !!r.isPrefixOf(g) && (g.length === i && (c = c.add(d.Yr)), !0);
      }, l),
      R.resolve(this.ti(c))
    );
  }
  ti(t) {
    const e = [];
    return (
      t.forEach((r) => {
        const i = this.Xr(r);
        i !== null && e.push(i);
      }),
      e
    );
  }
  removeMutationBatch(t, e) {
    (W(this.ni(e.batchId, 'removed') === 0, 55003), this.mutationQueue.shift());
    let r = this.Zr;
    return R.forEach(e.mutations, (i) => {
      const a = new et(i.key, e.batchId);
      return (
        (r = r.delete(a)),
        this.referenceDelegate.markPotentiallyOrphaned(t, i.key)
      );
    }).next(() => {
      this.Zr = r;
    });
  }
  ir(t) {}
  containsKey(t, e) {
    const r = new et(e, 0),
      i = this.Zr.firstAfterOrEqual(r);
    return R.resolve(e.isEqual(i && i.key));
  }
  performConsistencyCheck(t) {
    return (this.mutationQueue.length, R.resolve());
  }
  ni(t, e) {
    return this.ei(t);
  }
  ei(t) {
    return this.mutationQueue.length === 0
      ? 0
      : t - this.mutationQueue[0].batchId;
  }
  Xr(t) {
    const e = this.ei(t);
    return e < 0 || e >= this.mutationQueue.length
      ? null
      : this.mutationQueue[e];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gl {
  constructor(t) {
    ((this.ri = t),
      (this.docs = (function () {
        return new _t(k.comparator);
      })()),
      (this.size = 0));
  }
  setIndexManager(t) {
    this.indexManager = t;
  }
  addEntry(t, e) {
    const r = e.key,
      i = this.docs.get(r),
      a = i ? i.size : 0,
      l = this.ri(e);
    return (
      (this.docs = this.docs.insert(r, { document: e.mutableCopy(), size: l })),
      (this.size += l - a),
      this.indexManager.addToCollectionParentIndex(t, r.path.popLast())
    );
  }
  removeEntry(t) {
    const e = this.docs.get(t);
    e && ((this.docs = this.docs.remove(t)), (this.size -= e.size));
  }
  getEntry(t, e) {
    const r = this.docs.get(e);
    return R.resolve(r ? r.document.mutableCopy() : vt.newInvalidDocument(e));
  }
  getEntries(t, e) {
    let r = Mn();
    return (
      e.forEach((i) => {
        const a = this.docs.get(i);
        r = r.insert(
          i,
          a ? a.document.mutableCopy() : vt.newInvalidDocument(i)
        );
      }),
      R.resolve(r)
    );
  }
  getDocumentsMatchingQuery(t, e, r, i) {
    let a = Mn();
    const l = e.path,
      c = new k(l.child('__id-9223372036854775808__')),
      d = this.docs.getIteratorFrom(c);
    for (; d.hasNext(); ) {
      const {
        key: g,
        value: { document: I },
      } = d.getNext();
      if (!l.isPrefixOf(g.path)) break;
      g.path.length > l.length + 1 ||
        wu(Iu(I), r) <= 0 ||
        ((i.has(I.key) || Xr(e, I)) && (a = a.insert(I.key, I.mutableCopy())));
    }
    return R.resolve(a);
  }
  getAllFromCollectionGroup(t, e, r, i) {
    M(9500);
  }
  ii(t, e) {
    return R.forEach(this.docs, (r) => e(r));
  }
  newChangeBuffer(t) {
    return new Kl(this);
  }
  getSize(t) {
    return R.resolve(this.size);
  }
}
class Kl extends Fl {
  constructor(t) {
    (super(), (this.Nr = t));
  }
  applyChanges(t) {
    const e = [];
    return (
      this.changes.forEach((r, i) => {
        i.isValidDocument()
          ? e.push(this.Nr.addEntry(t, i))
          : this.Nr.removeEntry(r);
      }),
      R.waitFor(e)
    );
  }
  getFromCache(t, e) {
    return this.Nr.getEntry(t, e);
  }
  getAllFromCache(t, e) {
    return this.Nr.getEntries(t, e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ql {
  constructor(t) {
    ((this.persistence = t),
      (this.si = new se((e) => Wr(e), Hr)),
      (this.lastRemoteSnapshotVersion = $.min()),
      (this.highestTargetId = 0),
      (this.oi = 0),
      (this._i = new Zr()),
      (this.targetCount = 0),
      (this.ai = _e.ur()));
  }
  forEachTarget(t, e) {
    return (this.si.forEach((r, i) => e(i)), R.resolve());
  }
  getLastRemoteSnapshotVersion(t) {
    return R.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(t) {
    return R.resolve(this.oi);
  }
  allocateTargetId(t) {
    return (
      (this.highestTargetId = this.ai.next()),
      R.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(t, e, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      e > this.oi && (this.oi = e),
      R.resolve()
    );
  }
  Pr(t) {
    this.si.set(t.target, t);
    const e = t.targetId;
    (e > this.highestTargetId &&
      ((this.ai = new _e(e)), (this.highestTargetId = e)),
      t.sequenceNumber > this.oi && (this.oi = t.sequenceNumber));
  }
  addTargetData(t, e) {
    return (this.Pr(e), (this.targetCount += 1), R.resolve());
  }
  updateTargetData(t, e) {
    return (this.Pr(e), R.resolve());
  }
  removeTargetData(t, e) {
    return (
      this.si.delete(e.target),
      this._i.jr(e.targetId),
      (this.targetCount -= 1),
      R.resolve()
    );
  }
  removeTargets(t, e, r) {
    let i = 0;
    const a = [];
    return (
      this.si.forEach((l, c) => {
        c.sequenceNumber <= e &&
          r.get(c.targetId) === null &&
          (this.si.delete(l),
          a.push(this.removeMatchingKeysForTargetId(t, c.targetId)),
          i++);
      }),
      R.waitFor(a).next(() => i)
    );
  }
  getTargetCount(t) {
    return R.resolve(this.targetCount);
  }
  getTargetData(t, e) {
    const r = this.si.get(e) || null;
    return R.resolve(r);
  }
  addMatchingKeys(t, e, r) {
    return (this._i.Wr(e, r), R.resolve());
  }
  removeMatchingKeys(t, e, r) {
    this._i.zr(e, r);
    const i = this.persistence.referenceDelegate,
      a = [];
    return (
      i &&
        e.forEach((l) => {
          a.push(i.markPotentiallyOrphaned(t, l));
        }),
      R.waitFor(a)
    );
  }
  removeMatchingKeysForTargetId(t, e) {
    return (this._i.jr(e), R.resolve());
  }
  getMatchingKeysForTargetId(t, e) {
    const r = this._i.Hr(e);
    return R.resolve(r);
  }
  containsKey(t, e) {
    return R.resolve(this._i.containsKey(e));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jo {
  constructor(t, e) {
    ((this.ui = {}),
      (this.overlays = {}),
      (this.ci = new qr(0)),
      (this.li = !1),
      (this.li = !0),
      (this.hi = new $l()),
      (this.referenceDelegate = t(this)),
      (this.Pi = new Ql(this)),
      (this.indexManager = new bl()),
      (this.remoteDocumentCache = (function (i) {
        return new Gl(i);
      })((r) => this.referenceDelegate.Ti(r))),
      (this.serializer = new Cl(e)),
      (this.Ii = new Bl(this.serializer)));
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return ((this.li = !1), Promise.resolve());
  }
  get started() {
    return this.li;
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(t) {
    return this.indexManager;
  }
  getDocumentOverlayCache(t) {
    let e = this.overlays[t.toKey()];
    return (e || ((e = new ql()), (this.overlays[t.toKey()] = e)), e);
  }
  getMutationQueue(t, e) {
    let r = this.ui[t.toKey()];
    return (
      r || ((r = new zl(e, this.referenceDelegate)), (this.ui[t.toKey()] = r)),
      r
    );
  }
  getGlobalsCache() {
    return this.hi;
  }
  getTargetCache() {
    return this.Pi;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Ii;
  }
  runTransaction(t, e, r) {
    C('MemoryPersistence', 'Starting transaction:', t);
    const i = new Wl(this.ci.next());
    return (
      this.referenceDelegate.Ei(),
      r(i)
        .next((a) => this.referenceDelegate.di(i).next(() => a))
        .toPromise()
        .then((a) => (i.raiseOnCommittedEvent(), a))
    );
  }
  Ai(t, e) {
    return R.or(Object.values(this.ui).map((r) => () => r.containsKey(t, e)));
  }
}
class Wl extends Pu {
  constructor(t) {
    (super(), (this.currentSequenceNumber = t));
  }
}
class ts {
  constructor(t) {
    ((this.persistence = t), (this.Ri = new Zr()), (this.Vi = null));
  }
  static mi(t) {
    return new ts(t);
  }
  get fi() {
    if (this.Vi) return this.Vi;
    throw M(60996);
  }
  addReference(t, e, r) {
    return (
      this.Ri.addReference(r, e),
      this.fi.delete(r.toString()),
      R.resolve()
    );
  }
  removeReference(t, e, r) {
    return (
      this.Ri.removeReference(r, e),
      this.fi.add(r.toString()),
      R.resolve()
    );
  }
  markPotentiallyOrphaned(t, e) {
    return (this.fi.add(e.toString()), R.resolve());
  }
  removeTarget(t, e) {
    this.Ri.jr(e.targetId).forEach((i) => this.fi.add(i.toString()));
    const r = this.persistence.getTargetCache();
    return r
      .getMatchingKeysForTargetId(t, e.targetId)
      .next((i) => {
        i.forEach((a) => this.fi.add(a.toString()));
      })
      .next(() => r.removeTargetData(t, e));
  }
  Ei() {
    this.Vi = new Set();
  }
  di(t) {
    const e = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return R.forEach(this.fi, (r) => {
      const i = k.fromPath(r);
      return this.gi(t, i).next((a) => {
        a || e.removeEntry(i, $.min());
      });
    }).next(() => ((this.Vi = null), e.apply(t)));
  }
  updateLimboDocument(t, e) {
    return this.gi(t, e).next((r) => {
      r ? this.fi.delete(e.toString()) : this.fi.add(e.toString());
    });
  }
  Ti(t) {
    return 0;
  }
  gi(t, e) {
    return R.or([
      () => R.resolve(this.Ri.containsKey(e)),
      () => this.persistence.getTargetCache().containsKey(t, e),
      () => this.persistence.Ai(t, e),
    ]);
  }
}
class Fn {
  constructor(t, e) {
    ((this.persistence = t),
      (this.pi = new se(
        (r) => Cu(r.path),
        (r, i) => r.isEqual(i)
      )),
      (this.garbageCollector = Ll(this, e)));
  }
  static mi(t, e) {
    return new Fn(t, e);
  }
  Ei() {}
  di(t) {
    return R.resolve();
  }
  forEachTarget(t, e) {
    return this.persistence.getTargetCache().forEachTarget(t, e);
  }
  gr(t) {
    const e = this.wr(t);
    return this.persistence
      .getTargetCache()
      .getTargetCount(t)
      .next((r) => e.next((i) => r + i));
  }
  wr(t) {
    let e = 0;
    return this.pr(t, (r) => {
      e++;
    }).next(() => e);
  }
  pr(t, e) {
    return R.forEach(this.pi, (r, i) =>
      this.br(t, r, i).next((a) => (a ? R.resolve() : e(i)))
    );
  }
  removeTargets(t, e, r) {
    return this.persistence.getTargetCache().removeTargets(t, e, r);
  }
  removeOrphanedDocuments(t, e) {
    let r = 0;
    const i = this.persistence.getRemoteDocumentCache(),
      a = i.newChangeBuffer();
    return i
      .ii(t, (l) =>
        this.br(t, l, e).next((c) => {
          c || (r++, a.removeEntry(l, $.min()));
        })
      )
      .next(() => a.apply(t))
      .next(() => r);
  }
  markPotentiallyOrphaned(t, e) {
    return (this.pi.set(e, t.currentSequenceNumber), R.resolve());
  }
  removeTarget(t, e) {
    const r = e.withSequenceNumber(t.currentSequenceNumber);
    return this.persistence.getTargetCache().updateTargetData(t, r);
  }
  addReference(t, e, r) {
    return (this.pi.set(r, t.currentSequenceNumber), R.resolve());
  }
  removeReference(t, e, r) {
    return (this.pi.set(r, t.currentSequenceNumber), R.resolve());
  }
  updateLimboDocument(t, e) {
    return (this.pi.set(e, t.currentSequenceNumber), R.resolve());
  }
  Ti(t) {
    let e = t.key.toString().length;
    return (t.isFoundDocument() && (e += Rn(t.data.value)), e);
  }
  br(t, e, r) {
    return R.or([
      () => this.persistence.Ai(t, e),
      () => this.persistence.getTargetCache().containsKey(t, e),
      () => {
        const i = this.pi.get(e);
        return R.resolve(i !== void 0 && i > r);
      },
    ]);
  }
  getCacheSize(t) {
    return this.persistence.getRemoteDocumentCache().getSize(t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class es {
  constructor(t, e, r, i) {
    ((this.targetId = t), (this.fromCache = e), (this.Es = r), (this.ds = i));
  }
  static As(t, e) {
    let r = ht(),
      i = ht();
    for (const a of e.docChanges)
      switch (a.type) {
        case 0:
          r = r.add(a.doc.key);
          break;
        case 1:
          i = i.add(a.doc.key);
      }
    return new es(t, e.fromCache, r, i);
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hl {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(t) {
    this._documentReadCount += t;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xl {
  constructor() {
    ((this.Rs = !1),
      (this.Vs = !1),
      (this.fs = 100),
      (this.gs = (function () {
        return Za() ? 8 : Vu(tu()) > 0 ? 6 : 4;
      })()));
  }
  initialize(t, e) {
    ((this.ps = t), (this.indexManager = e), (this.Rs = !0));
  }
  getDocumentsMatchingQuery(t, e, r, i) {
    const a = { result: null };
    return this.ys(t, e)
      .next((l) => {
        a.result = l;
      })
      .next(() => {
        if (!a.result)
          return this.ws(t, e, i, r).next((l) => {
            a.result = l;
          });
      })
      .next(() => {
        if (a.result) return;
        const l = new Hl();
        return this.Ss(t, e, l).next((c) => {
          if (((a.result = c), this.Vs)) return this.bs(t, e, l, c.size);
        });
      })
      .next(() => a.result);
  }
  bs(t, e, r, i) {
    return r.documentReadCount < this.fs
      ? (le() <= Dt.DEBUG &&
          C(
            'QueryEngine',
            'SDK will not create cache indexes for query:',
            Me(e),
            'since it only creates cache indexes for collection contains',
            'more than or equal to',
            this.fs,
            'documents'
          ),
        R.resolve())
      : (le() <= Dt.DEBUG &&
          C(
            'QueryEngine',
            'Query:',
            Me(e),
            'scans',
            r.documentReadCount,
            'local documents and returns',
            i,
            'documents as results.'
          ),
        r.documentReadCount > this.gs * i
          ? (le() <= Dt.DEBUG &&
              C(
                'QueryEngine',
                'The SDK decides to create cache indexes for query:',
                Me(e),
                'as using cache indexes may help improve performance.'
              ),
            this.indexManager.createTargetIndexes(t, Zt(e)))
          : R.resolve());
  }
  ys(t, e) {
    if (Pi(e)) return R.resolve(null);
    let r = Zt(e);
    return this.indexManager.getIndexType(t, r).next((i) =>
      i === 0
        ? null
        : (e.limit !== null && i === 1 && ((e = br(e, null, 'F')), (r = Zt(e))),
          this.indexManager.getDocumentsMatchingTarget(t, r).next((a) => {
            const l = ht(...a);
            return this.ps.getDocuments(t, l).next((c) =>
              this.indexManager.getMinOffset(t, r).next((d) => {
                const g = this.Ds(e, c);
                return this.Cs(e, g, l, d.readTime)
                  ? this.ys(t, br(e, null, 'F'))
                  : this.vs(t, g, e, d);
              })
            );
          }))
    );
  }
  ws(t, e, r, i) {
    return Pi(e) || i.isEqual($.min())
      ? R.resolve(null)
      : this.ps.getDocuments(t, r).next((a) => {
          const l = this.Ds(e, a);
          return this.Cs(e, l, r, i)
            ? R.resolve(null)
            : (le() <= Dt.DEBUG &&
                C(
                  'QueryEngine',
                  'Re-using previous result from %s to execute query: %s',
                  i.toString(),
                  Me(e)
                ),
              this.vs(t, l, e, Au(i, ze)).next((c) => c));
        });
  }
  Ds(t, e) {
    let r = new ot(Yu(t));
    return (
      e.forEach((i, a) => {
        Xr(t, a) && (r = r.add(a));
      }),
      r
    );
  }
  Cs(t, e, r, i) {
    if (t.limit === null) return !1;
    if (r.size !== e.size) return !0;
    const a = t.limitType === 'F' ? e.last() : e.first();
    return !!a && (a.hasPendingWrites || a.version.compareTo(i) > 0);
  }
  Ss(t, e, r) {
    return (
      le() <= Dt.DEBUG &&
        C('QueryEngine', 'Using full collection scan to execute query:', Me(e)),
      this.ps.getDocumentsMatchingQuery(t, e, Bt.min(), r)
    );
  }
  vs(t, e, r, i) {
    return this.ps.getDocumentsMatchingQuery(t, r, i).next(
      (a) => (
        e.forEach((l) => {
          a = a.insert(l.key, l);
        }),
        a
      )
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Yl = 'LocalStore';
class Jl {
  constructor(t, e, r, i) {
    ((this.persistence = t),
      (this.Fs = e),
      (this.serializer = i),
      (this.Ms = new _t(U)),
      (this.xs = new se((a) => Wr(a), Hr)),
      (this.Os = new Map()),
      (this.Ns = t.getRemoteDocumentCache()),
      (this.Pi = t.getTargetCache()),
      (this.Ii = t.getBundleCache()),
      this.Bs(r));
  }
  Bs(t) {
    ((this.documentOverlayCache = this.persistence.getDocumentOverlayCache(t)),
      (this.indexManager = this.persistence.getIndexManager(t)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        t,
        this.indexManager
      )),
      (this.localDocuments = new jl(
        this.Ns,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager
      )),
      this.Ns.setIndexManager(this.indexManager),
      this.Fs.initialize(this.localDocuments, this.indexManager));
  }
  collectGarbage(t) {
    return this.persistence.runTransaction(
      'Collect garbage',
      'readwrite-primary',
      (e) => t.collect(e, this.Ms)
    );
  }
}
function Zl(s, t, e, r) {
  return new Jl(s, t, e, r);
}
async function Bo(s, t) {
  const e = B(s);
  return await e.persistence.runTransaction(
    'Handle user change',
    'readonly',
    (r) => {
      let i;
      return e.mutationQueue
        .getAllMutationBatches(r)
        .next(
          (a) => ((i = a), e.Bs(t), e.mutationQueue.getAllMutationBatches(r))
        )
        .next((a) => {
          const l = [],
            c = [];
          let d = ht();
          for (const g of i) {
            l.push(g.batchId);
            for (const I of g.mutations) d = d.add(I.key);
          }
          for (const g of a) {
            c.push(g.batchId);
            for (const I of g.mutations) d = d.add(I.key);
          }
          return e.localDocuments
            .getDocuments(r, d)
            .next((g) => ({ Ls: g, removedBatchIds: l, addedBatchIds: c }));
        });
    }
  );
}
function th(s, t) {
  const e = B(s);
  return e.persistence.runTransaction(
    'Acknowledge batch',
    'readwrite-primary',
    (r) => {
      const i = t.batch.keys(),
        a = e.Ns.newChangeBuffer({ trackRemovals: !0 });
      return (function (c, d, g, I) {
        const w = g.batch,
          S = w.keys();
        let b = R.resolve();
        return (
          S.forEach((O) => {
            b = b
              .next(() => I.getEntry(d, O))
              .next((L) => {
                const N = g.docVersions.get(O);
                (W(N !== null, 48541),
                  L.version.compareTo(N) < 0 &&
                    (w.applyToRemoteDocument(L, g),
                    L.isValidDocument() &&
                      (L.setReadTime(g.commitVersion), I.addEntry(L))));
              });
          }),
          b.next(() => c.mutationQueue.removeMutationBatch(d, w))
        );
      })(e, r, t, a)
        .next(() => a.apply(r))
        .next(() => e.mutationQueue.performConsistencyCheck(r))
        .next(() =>
          e.documentOverlayCache.removeOverlaysForBatchId(r, i, t.batch.batchId)
        )
        .next(() =>
          e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
            r,
            (function (c) {
              let d = ht();
              for (let g = 0; g < c.mutationResults.length; ++g)
                c.mutationResults[g].transformResults.length > 0 &&
                  (d = d.add(c.batch.mutations[g].key));
              return d;
            })(t)
          )
        )
        .next(() => e.localDocuments.getDocuments(r, i));
    }
  );
}
function eh(s) {
  const t = B(s);
  return t.persistence.runTransaction(
    'Get last remote snapshot version',
    'readonly',
    (e) => t.Pi.getLastRemoteSnapshotVersion(e)
  );
}
function nh(s, t) {
  const e = B(s);
  return e.persistence.runTransaction(
    'Get next mutation batch',
    'readonly',
    (r) => (
      t === void 0 && (t = $r),
      e.mutationQueue.getNextMutationBatchAfterBatchId(r, t)
    )
  );
}
class xi {
  constructor() {
    this.activeTargetIds = rl();
  }
  zs(t) {
    this.activeTargetIds = this.activeTargetIds.add(t);
  }
  js(t) {
    this.activeTargetIds = this.activeTargetIds.delete(t);
  }
  Gs() {
    const t = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    };
    return JSON.stringify(t);
  }
}
class rh {
  constructor() {
    ((this.Mo = new xi()),
      (this.xo = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null));
  }
  addPendingMutation(t) {}
  updateMutationState(t, e, r) {}
  addLocalQueryTarget(t, e = !0) {
    return (e && this.Mo.zs(t), this.xo[t] || 'not-current');
  }
  updateQueryState(t, e, r) {
    this.xo[t] = e;
  }
  removeLocalQueryTarget(t) {
    this.Mo.js(t);
  }
  isLocalQueryTarget(t) {
    return this.Mo.activeTargetIds.has(t);
  }
  clearQueryState(t) {
    delete this.xo[t];
  }
  getAllActiveQueryTargets() {
    return this.Mo.activeTargetIds;
  }
  isActiveQueryTarget(t) {
    return this.Mo.activeTargetIds.has(t);
  }
  start() {
    return ((this.Mo = new xi()), Promise.resolve());
  }
  handleUserChange(t, e, r) {}
  setOnlineState(t) {}
  shutdown() {}
  writeSequenceNumber(t) {}
  notifyBundleLoaded(t) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sh {
  Oo(t) {}
  shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Mi = 'ConnectivityMonitor';
class Li {
  constructor() {
    ((this.No = () => this.Bo()),
      (this.Lo = () => this.ko()),
      (this.qo = []),
      this.Qo());
  }
  Oo(t) {
    this.qo.push(t);
  }
  shutdown() {
    (window.removeEventListener('online', this.No),
      window.removeEventListener('offline', this.Lo));
  }
  Qo() {
    (window.addEventListener('online', this.No),
      window.addEventListener('offline', this.Lo));
  }
  Bo() {
    C(Mi, 'Network connectivity changed: AVAILABLE');
    for (const t of this.qo) t(0);
  }
  ko() {
    C(Mi, 'Network connectivity changed: UNAVAILABLE');
    for (const t of this.qo) t(1);
  }
  static v() {
    return (
      typeof window < 'u' &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    );
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let An = null;
function xr() {
  return (
    An === null
      ? (An = (function () {
          return 268435456 + Math.round(2147483648 * Math.random());
        })())
      : An++,
    '0x' + An.toString(16)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vr = 'RestConnection',
  ih = {
    BatchGetDocuments: 'batchGet',
    Commit: 'commit',
    RunQuery: 'runQuery',
    RunAggregationQuery: 'runAggregationQuery',
  };
class oh {
  get $o() {
    return !1;
  }
  constructor(t) {
    ((this.databaseInfo = t), (this.databaseId = t.databaseId));
    const e = t.ssl ? 'https' : 'http',
      r = encodeURIComponent(this.databaseId.projectId),
      i = encodeURIComponent(this.databaseId.database);
    ((this.Uo = e + '://' + t.host),
      (this.Ko = `projects/${r}/databases/${i}`),
      (this.Wo =
        this.databaseId.database === Nn
          ? `project_id=${r}`
          : `project_id=${r}&database_id=${i}`));
  }
  Go(t, e, r, i, a) {
    const l = xr(),
      c = this.zo(t, e.toUriEncodedString());
    C(vr, `Sending RPC '${t}' ${l}:`, c, r);
    const d = {
      'google-cloud-resource-prefix': this.Ko,
      'x-goog-request-params': this.Wo,
    };
    this.jo(d, i, a);
    const { host: g } = new URL(c),
      I = Yi(g);
    return this.Jo(t, c, d, r, I).then(
      (w) => (C(vr, `Received RPC '${t}' ${l}: `, w), w),
      (w) => {
        throw (
          Bn(
            vr,
            `RPC '${t}' ${l} failed with error: `,
            w,
            'url: ',
            c,
            'request:',
            r
          ),
          w
        );
      }
    );
  }
  Ho(t, e, r, i, a, l) {
    return this.Go(t, e, r, i, a);
  }
  jo(t, e, r) {
    ((t['X-Goog-Api-Client'] = (function () {
      return 'gl-js/ fire/' + ye;
    })()),
      (t['Content-Type'] = 'text/plain'),
      this.databaseInfo.appId &&
        (t['X-Firebase-GMPID'] = this.databaseInfo.appId),
      e && e.headers.forEach((i, a) => (t[a] = i)),
      r && r.headers.forEach((i, a) => (t[a] = i)));
  }
  zo(t, e) {
    const r = ih[t];
    return `${this.Uo}/v1/${e}:${r}`;
  }
  terminate() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ah {
  constructor(t) {
    ((this.Yo = t.Yo), (this.Zo = t.Zo));
  }
  Xo(t) {
    this.e_ = t;
  }
  t_(t) {
    this.n_ = t;
  }
  r_(t) {
    this.i_ = t;
  }
  onMessage(t) {
    this.s_ = t;
  }
  close() {
    this.Zo();
  }
  send(t) {
    this.Yo(t);
  }
  o_() {
    this.e_();
  }
  __() {
    this.n_();
  }
  a_(t) {
    this.i_(t);
  }
  u_(t) {
    this.s_(t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ut = 'WebChannelConnection';
class uh extends oh {
  constructor(t) {
    (super(t),
      (this.c_ = []),
      (this.forceLongPolling = t.forceLongPolling),
      (this.autoDetectLongPolling = t.autoDetectLongPolling),
      (this.useFetchStreams = t.useFetchStreams),
      (this.longPollingOptions = t.longPollingOptions));
  }
  Jo(t, e, r, i, a) {
    const l = xr();
    return new Promise((c, d) => {
      const g = new Ji();
      (g.setWithCredentials(!0),
        g.listenOnce(Zi.COMPLETE, () => {
          try {
            switch (g.getLastErrorCode()) {
              case wn.NO_ERROR:
                const w = g.getResponseJson();
                (C(ut, `XHR for RPC '${t}' ${l} received:`, JSON.stringify(w)),
                  c(w));
                break;
              case wn.TIMEOUT:
                (C(ut, `RPC '${t}' ${l} timed out`),
                  d(new D(P.DEADLINE_EXCEEDED, 'Request time out')));
                break;
              case wn.HTTP_ERROR:
                const S = g.getStatus();
                if (
                  (C(
                    ut,
                    `RPC '${t}' ${l} failed with status:`,
                    S,
                    'response text:',
                    g.getResponseText()
                  ),
                  S > 0)
                ) {
                  let b = g.getResponseJson();
                  Array.isArray(b) && (b = b[0]);
                  const O = b?.error;
                  if (O && O.status && O.message) {
                    const L = (function (K) {
                      const H = K.toLowerCase().replace(/_/g, '-');
                      return Object.values(P).indexOf(H) >= 0 ? H : P.UNKNOWN;
                    })(O.status);
                    d(new D(L, O.message));
                  } else
                    d(
                      new D(
                        P.UNKNOWN,
                        'Server responded with status ' + g.getStatus()
                      )
                    );
                } else d(new D(P.UNAVAILABLE, 'Connection failed.'));
                break;
              default:
                M(9055, {
                  l_: t,
                  streamId: l,
                  h_: g.getLastErrorCode(),
                  P_: g.getLastError(),
                });
            }
          } finally {
            C(ut, `RPC '${t}' ${l} completed.`);
          }
        }));
      const I = JSON.stringify(i);
      (C(ut, `RPC '${t}' ${l} sending request:`, i),
        g.send(e, 'POST', I, r, 15));
    });
  }
  T_(t, e, r) {
    const i = xr(),
      a = [this.Uo, '/', 'google.firestore.v1.Firestore', '/', t, '/channel'],
      l = no(),
      c = eo(),
      d = {
        httpSessionIdParam: 'gsessionid',
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      },
      g = this.longPollingOptions.timeoutSeconds;
    (g !== void 0 && (d.longPollingTimeout = Math.round(1e3 * g)),
      this.useFetchStreams && (d.useFetchStreams = !0),
      this.jo(d.initMessageHeaders, e, r),
      (d.encodeInitMessageHeaders = !0));
    const I = a.join('');
    C(ut, `Creating RPC '${t}' stream ${i}: ${I}`, d);
    const w = l.createWebChannel(I, d);
    this.I_(w);
    let S = !1,
      b = !1;
    const O = new ah({
        Yo: (N) => {
          b
            ? C(ut, `Not sending because RPC '${t}' stream ${i} is closed:`, N)
            : (S ||
                (C(ut, `Opening RPC '${t}' stream ${i} transport.`),
                w.open(),
                (S = !0)),
              C(ut, `RPC '${t}' stream ${i} sending:`, N),
              w.send(N));
        },
        Zo: () => w.close(),
      }),
      L = (N, K, H) => {
        N.listen(K, (X) => {
          try {
            H(X);
          } catch (Tt) {
            setTimeout(() => {
              throw Tt;
            }, 0);
          }
        });
      };
    return (
      L(w, Le.EventType.OPEN, () => {
        b || (C(ut, `RPC '${t}' stream ${i} transport opened.`), O.o_());
      }),
      L(w, Le.EventType.CLOSE, () => {
        b ||
          ((b = !0),
          C(ut, `RPC '${t}' stream ${i} transport closed`),
          O.a_(),
          this.E_(w));
      }),
      L(w, Le.EventType.ERROR, (N) => {
        b ||
          ((b = !0),
          Bn(
            ut,
            `RPC '${t}' stream ${i} transport errored. Name:`,
            N.name,
            'Message:',
            N.message
          ),
          O.a_(new D(P.UNAVAILABLE, 'The operation could not be completed')));
      }),
      L(w, Le.EventType.MESSAGE, (N) => {
        if (!b) {
          const K = N.data[0];
          W(!!K, 16349);
          const H = K,
            X = H?.error || H[0]?.error;
          if (X) {
            C(ut, `RPC '${t}' stream ${i} received error:`, X);
            const Tt = X.status;
            let Et = (function (f) {
                const p = Y[f];
                if (p !== void 0) return gl(p);
              })(Tt),
              ft = X.message;
            (Et === void 0 &&
              ((Et = P.INTERNAL),
              (ft =
                'Unknown error status: ' + Tt + ' with message ' + X.message)),
              (b = !0),
              O.a_(new D(Et, ft)),
              w.close());
          } else (C(ut, `RPC '${t}' stream ${i} received:`, K), O.u_(K));
        }
      }),
      L(c, to.STAT_EVENT, (N) => {
        N.stat === Rr.PROXY
          ? C(ut, `RPC '${t}' stream ${i} detected buffering proxy`)
          : N.stat === Rr.NOPROXY &&
            C(ut, `RPC '${t}' stream ${i} detected no buffering proxy`);
      }),
      setTimeout(() => {
        O.__();
      }, 0),
      O
    );
  }
  terminate() {
    (this.c_.forEach((t) => t.close()), (this.c_ = []));
  }
  I_(t) {
    this.c_.push(t);
  }
  E_(t) {
    this.c_ = this.c_.filter((e) => e === t);
  }
}
function Ar() {
  return typeof document < 'u' ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Gn(s) {
  return new _l(s, !0);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qo {
  constructor(t, e, r = 1e3, i = 1.5, a = 6e4) {
    ((this.Mi = t),
      (this.timerId = e),
      (this.d_ = r),
      (this.A_ = i),
      (this.R_ = a),
      (this.V_ = 0),
      (this.m_ = null),
      (this.f_ = Date.now()),
      this.reset());
  }
  reset() {
    this.V_ = 0;
  }
  g_() {
    this.V_ = this.R_;
  }
  p_(t) {
    this.cancel();
    const e = Math.floor(this.V_ + this.y_()),
      r = Math.max(0, Date.now() - this.f_),
      i = Math.max(0, e - r);
    (i > 0 &&
      C(
        'ExponentialBackoff',
        `Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`
      ),
      (this.m_ = this.Mi.enqueueAfterDelay(
        this.timerId,
        i,
        () => ((this.f_ = Date.now()), t())
      )),
      (this.V_ *= this.A_),
      this.V_ < this.d_ && (this.V_ = this.d_),
      this.V_ > this.R_ && (this.V_ = this.R_));
  }
  w_() {
    this.m_ !== null && (this.m_.skipDelay(), (this.m_ = null));
  }
  cancel() {
    this.m_ !== null && (this.m_.cancel(), (this.m_ = null));
  }
  y_() {
    return (Math.random() - 0.5) * this.V_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Fi = 'PersistentStream';
class lh {
  constructor(t, e, r, i, a, l, c, d) {
    ((this.Mi = t),
      (this.S_ = r),
      (this.b_ = i),
      (this.connection = a),
      (this.authCredentialsProvider = l),
      (this.appCheckCredentialsProvider = c),
      (this.listener = d),
      (this.state = 0),
      (this.D_ = 0),
      (this.C_ = null),
      (this.v_ = null),
      (this.stream = null),
      (this.F_ = 0),
      (this.M_ = new qo(t, e)));
  }
  x_() {
    return this.state === 1 || this.state === 5 || this.O_();
  }
  O_() {
    return this.state === 2 || this.state === 3;
  }
  start() {
    ((this.F_ = 0), this.state !== 4 ? this.auth() : this.N_());
  }
  async stop() {
    this.x_() && (await this.close(0));
  }
  B_() {
    ((this.state = 0), this.M_.reset());
  }
  L_() {
    this.O_() &&
      this.C_ === null &&
      (this.C_ = this.Mi.enqueueAfterDelay(this.S_, 6e4, () => this.k_()));
  }
  q_(t) {
    (this.Q_(), this.stream.send(t));
  }
  async k_() {
    if (this.O_()) return this.close(0);
  }
  Q_() {
    this.C_ && (this.C_.cancel(), (this.C_ = null));
  }
  U_() {
    this.v_ && (this.v_.cancel(), (this.v_ = null));
  }
  async close(t, e) {
    (this.Q_(),
      this.U_(),
      this.M_.cancel(),
      this.D_++,
      t !== 4
        ? this.M_.reset()
        : e && e.code === P.RESOURCE_EXHAUSTED
          ? (ee(e.toString()),
            ee(
              'Using maximum backoff delay to prevent overloading the backend.'
            ),
            this.M_.g_())
          : e &&
            e.code === P.UNAUTHENTICATED &&
            this.state !== 3 &&
            (this.authCredentialsProvider.invalidateToken(),
            this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null &&
        (this.K_(), this.stream.close(), (this.stream = null)),
      (this.state = t),
      await this.listener.r_(e));
  }
  K_() {}
  auth() {
    this.state = 1;
    const t = this.W_(this.D_),
      e = this.D_;
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken(),
    ]).then(
      ([r, i]) => {
        this.D_ === e && this.G_(r, i);
      },
      (r) => {
        t(() => {
          const i = new D(
            P.UNKNOWN,
            'Fetching auth token failed: ' + r.message
          );
          return this.z_(i);
        });
      }
    );
  }
  G_(t, e) {
    const r = this.W_(this.D_);
    ((this.stream = this.j_(t, e)),
      this.stream.Xo(() => {
        r(() => this.listener.Xo());
      }),
      this.stream.t_(() => {
        r(
          () => (
            (this.state = 2),
            (this.v_ = this.Mi.enqueueAfterDelay(
              this.b_,
              1e4,
              () => (this.O_() && (this.state = 3), Promise.resolve())
            )),
            this.listener.t_()
          )
        );
      }),
      this.stream.r_((i) => {
        r(() => this.z_(i));
      }),
      this.stream.onMessage((i) => {
        r(() => (++this.F_ == 1 ? this.J_(i) : this.onNext(i)));
      }));
  }
  N_() {
    ((this.state = 5),
      this.M_.p_(async () => {
        ((this.state = 0), this.start());
      }));
  }
  z_(t) {
    return (
      C(Fi, `close with error: ${t}`),
      (this.stream = null),
      this.close(4, t)
    );
  }
  W_(t) {
    return (e) => {
      this.Mi.enqueueAndForget(() =>
        this.D_ === t
          ? e()
          : (C(Fi, 'stream callback skipped by getCloseGuardedDispatcher.'),
            Promise.resolve())
      );
    };
  }
}
class hh extends lh {
  constructor(t, e, r, i, a, l) {
    (super(
      t,
      'write_stream_connection_backoff',
      'write_stream_idle',
      'health_check_timeout',
      e,
      r,
      i,
      l
    ),
      (this.serializer = a));
  }
  get X_() {
    return this.F_ > 0;
  }
  start() {
    ((this.lastStreamToken = void 0), super.start());
  }
  K_() {
    this.X_ && this.ea([]);
  }
  j_(t, e) {
    return this.connection.T_('Write', t, e);
  }
  J_(t) {
    return (
      W(!!t.streamToken, 31322),
      (this.lastStreamToken = t.streamToken),
      W(!t.writeResults || t.writeResults.length === 0, 55816),
      this.listener.ta()
    );
  }
  onNext(t) {
    (W(!!t.streamToken, 12678),
      (this.lastStreamToken = t.streamToken),
      this.M_.reset());
    const e = Rl(t.writeResults, t.commitTime),
      r = ce(t.commitTime);
    return this.listener.na(r, e);
  }
  ra() {
    const t = {};
    ((t.database = Al(this.serializer)), this.q_(t));
  }
  ea(t) {
    const e = {
      streamToken: this.lastStreamToken,
      writes: t.map((r) => wl(this.serializer, r)),
    };
    this.q_(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ch {}
class fh extends ch {
  constructor(t, e, r, i) {
    (super(),
      (this.authCredentials = t),
      (this.appCheckCredentials = e),
      (this.connection = r),
      (this.serializer = i),
      (this.ia = !1));
  }
  sa() {
    if (this.ia)
      throw new D(
        P.FAILED_PRECONDITION,
        'The client has already been terminated.'
      );
  }
  Go(t, e, r, i) {
    return (
      this.sa(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([a, l]) => this.connection.Go(t, kr(e, r), i, a, l))
        .catch((a) => {
          throw a.name === 'FirebaseError'
            ? (a.code === P.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              a)
            : new D(P.UNKNOWN, a.toString());
        })
    );
  }
  Ho(t, e, r, i, a) {
    return (
      this.sa(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([l, c]) => this.connection.Ho(t, kr(e, r), i, l, c, a))
        .catch((l) => {
          throw l.name === 'FirebaseError'
            ? (l.code === P.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              l)
            : new D(P.UNKNOWN, l.toString());
        })
    );
  }
  terminate() {
    ((this.ia = !0), this.connection.terminate());
  }
}
class dh {
  constructor(t, e) {
    ((this.asyncQueue = t),
      (this.onlineStateHandler = e),
      (this.state = 'Unknown'),
      (this.oa = 0),
      (this._a = null),
      (this.aa = !0));
  }
  ua() {
    this.oa === 0 &&
      (this.ca('Unknown'),
      (this._a = this.asyncQueue.enqueueAfterDelay(
        'online_state_timeout',
        1e4,
        () => (
          (this._a = null),
          this.la("Backend didn't respond within 10 seconds."),
          this.ca('Offline'),
          Promise.resolve()
        )
      )));
  }
  ha(t) {
    this.state === 'Online'
      ? this.ca('Unknown')
      : (this.oa++,
        this.oa >= 1 &&
          (this.Pa(),
          this.la(
            `Connection failed 1 times. Most recent error: ${t.toString()}`
          ),
          this.ca('Offline')));
  }
  set(t) {
    (this.Pa(), (this.oa = 0), t === 'Online' && (this.aa = !1), this.ca(t));
  }
  ca(t) {
    t !== this.state && ((this.state = t), this.onlineStateHandler(t));
  }
  la(t) {
    const e = `Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.aa ? (ee(e), (this.aa = !1)) : C('OnlineStateTracker', e);
  }
  Pa() {
    this._a !== null && (this._a.cancel(), (this._a = null));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Je = 'RemoteStore';
class mh {
  constructor(t, e, r, i, a) {
    ((this.localStore = t),
      (this.datastore = e),
      (this.asyncQueue = r),
      (this.remoteSyncer = {}),
      (this.Ta = []),
      (this.Ia = new Map()),
      (this.Ea = new Set()),
      (this.da = []),
      (this.Aa = a),
      this.Aa.Oo((l) => {
        r.enqueueAndForget(async () => {
          tn(this) &&
            (C(Je, 'Restarting streams for network reachability change.'),
            await (async function (d) {
              const g = B(d);
              (g.Ea.add(4),
                await Ze(g),
                g.Ra.set('Unknown'),
                g.Ea.delete(4),
                await Kn(g));
            })(this));
        });
      }),
      (this.Ra = new dh(r, i)));
  }
}
async function Kn(s) {
  if (tn(s)) for (const t of s.da) await t(!0);
}
async function Ze(s) {
  for (const t of s.da) await t(!1);
}
function tn(s) {
  return B(s).Ea.size === 0;
}
async function $o(s, t, e) {
  if (!Xe(t)) throw t;
  (s.Ea.add(1),
    await Ze(s),
    s.Ra.set('Offline'),
    e || (e = () => eh(s.localStore)),
    s.asyncQueue.enqueueRetryable(async () => {
      (C(Je, 'Retrying IndexedDB access'),
        await e(),
        s.Ea.delete(1),
        await Kn(s));
    }));
}
function zo(s, t) {
  return t().catch((e) => $o(s, e, t));
}
async function Qn(s) {
  const t = B(s),
    e = $t(t);
  let r = t.Ta.length > 0 ? t.Ta[t.Ta.length - 1].batchId : $r;
  for (; ph(t); )
    try {
      const i = await nh(t.localStore, r);
      if (i === null) {
        t.Ta.length === 0 && e.L_();
        break;
      }
      ((r = i.batchId), gh(t, i));
    } catch (i) {
      await $o(t, i);
    }
  Go(t) && Ko(t);
}
function ph(s) {
  return tn(s) && s.Ta.length < 10;
}
function gh(s, t) {
  s.Ta.push(t);
  const e = $t(s);
  e.O_() && e.X_ && e.ea(t.mutations);
}
function Go(s) {
  return tn(s) && !$t(s).x_() && s.Ta.length > 0;
}
function Ko(s) {
  $t(s).start();
}
async function _h(s) {
  $t(s).ra();
}
async function yh(s) {
  const t = $t(s);
  for (const e of s.Ta) t.ea(e.mutations);
}
async function Eh(s, t, e) {
  const r = s.Ta.shift(),
    i = Jr.from(r, t, e);
  (await zo(s, () => s.remoteSyncer.applySuccessfulWrite(i)), await Qn(s));
}
async function Th(s, t) {
  (t &&
    $t(s).X_ &&
    (await (async function (r, i) {
      if (
        (function (l) {
          return pl(l) && l !== P.ABORTED;
        })(i.code)
      ) {
        const a = r.Ta.shift();
        ($t(r).B_(),
          await zo(r, () => r.remoteSyncer.rejectFailedWrite(a.batchId, i)),
          await Qn(r));
      }
    })(s, t)),
    Go(s) && Ko(s));
}
async function Ui(s, t) {
  const e = B(s);
  (e.asyncQueue.verifyOperationInProgress(),
    C(Je, 'RemoteStore received new credentials'));
  const r = tn(e);
  (e.Ea.add(3),
    await Ze(e),
    r && e.Ra.set('Unknown'),
    await e.remoteSyncer.handleCredentialChange(t),
    e.Ea.delete(3),
    await Kn(e));
}
async function vh(s, t) {
  const e = B(s);
  t
    ? (e.Ea.delete(2), await Kn(e))
    : t || (e.Ea.add(2), await Ze(e), e.Ra.set('Unknown'));
}
function $t(s) {
  return (
    s.fa ||
      ((s.fa = (function (e, r, i) {
        const a = B(e);
        return (
          a.sa(),
          new hh(
            r,
            a.connection,
            a.authCredentials,
            a.appCheckCredentials,
            a.serializer,
            i
          )
        );
      })(s.datastore, s.asyncQueue, {
        Xo: () => Promise.resolve(),
        t_: _h.bind(null, s),
        r_: Th.bind(null, s),
        ta: yh.bind(null, s),
        na: Eh.bind(null, s),
      })),
      s.da.push(async (t) => {
        t
          ? (s.fa.B_(), await Qn(s))
          : (await s.fa.stop(),
            s.Ta.length > 0 &&
              (C(
                Je,
                `Stopping write stream with ${s.Ta.length} pending writes`
              ),
              (s.Ta = [])));
      })),
    s.fa
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ns {
  constructor(t, e, r, i, a) {
    ((this.asyncQueue = t),
      (this.timerId = e),
      (this.targetTimeMs = r),
      (this.op = i),
      (this.removalCallback = a),
      (this.deferred = new Jt()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((l) => {}));
  }
  get promise() {
    return this.deferred.promise;
  }
  static createAndSchedule(t, e, r, i, a) {
    const l = Date.now() + r,
      c = new ns(t, e, l, i, a);
    return (c.start(r), c);
  }
  start(t) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(t) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new D(P.CANCELLED, 'Operation cancelled' + (t ? ': ' + t : ''))
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((t) => this.deferred.resolve(t)))
        : Promise.resolve()
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
}
function Qo(s, t) {
  if ((ee('AsyncQueue', `${t}: ${s}`), Xe(s)))
    return new D(P.UNAVAILABLE, `${t}: ${s}`);
  throw s;
}
class Ah {
  constructor() {
    ((this.queries = ji()),
      (this.onlineState = 'Unknown'),
      (this.Ca = new Set()));
  }
  terminate() {
    (function (e, r) {
      const i = B(e),
        a = i.queries;
      ((i.queries = ji()),
        a.forEach((l, c) => {
          for (const d of c.Sa) d.onError(r);
        }));
    })(this, new D(P.ABORTED, 'Firestore shutting down'));
  }
}
function ji() {
  return new se((s) => Ro(s), wo);
}
function Ih(s) {
  s.Ca.forEach((t) => {
    t.next();
  });
}
var Bi, qi;
(((qi = Bi || (Bi = {})).Ma = 'default'), (qi.Cache = 'cache'));
const wh = 'SyncEngine';
class Rh {
  constructor(t, e, r, i, a, l) {
    ((this.localStore = t),
      (this.remoteStore = e),
      (this.eventManager = r),
      (this.sharedClientState = i),
      (this.currentUser = a),
      (this.maxConcurrentLimboResolutions = l),
      (this.Pu = {}),
      (this.Tu = new se((c) => Ro(c), wo)),
      (this.Iu = new Map()),
      (this.Eu = new Set()),
      (this.du = new _t(k.comparator)),
      (this.Au = new Map()),
      (this.Ru = new Zr()),
      (this.Vu = {}),
      (this.mu = new Map()),
      (this.fu = _e.cr()),
      (this.onlineState = 'Unknown'),
      (this.gu = void 0));
  }
  get isPrimaryClient() {
    return this.gu === !0;
  }
}
async function Ph(s, t, e) {
  const r = Dh(s);
  try {
    const i = await (function (l, c) {
      const d = B(l),
        g = z.now(),
        I = c.reduce((b, O) => b.add(O.key), ht());
      let w, S;
      return d.persistence
        .runTransaction('Locally write mutations', 'readwrite', (b) => {
          let O = Mn(),
            L = ht();
          return d.Ns.getEntries(b, I)
            .next((N) => {
              ((O = N),
                O.forEach((K, H) => {
                  H.isValidDocument() || (L = L.add(K));
                }));
            })
            .next(() => d.localDocuments.getOverlayedDocuments(b, O))
            .next((N) => {
              w = N;
              const K = [];
              for (const H of c) {
                const X = cl(H, w.get(H.key).overlayedDocument);
                X != null &&
                  K.push(new ie(H.key, X, _o(X.value.mapValue), bt.exists(!0)));
              }
              return d.mutationQueue.addMutationBatch(b, g, K, c);
            })
            .next((N) => {
              S = N;
              const K = N.applyToLocalDocumentSet(w, L);
              return d.documentOverlayCache.saveOverlays(b, N.batchId, K);
            });
        })
        .then(() => ({ batchId: S.batchId, changes: Vo(w) }));
    })(r.localStore, t);
    (r.sharedClientState.addPendingMutation(i.batchId),
      (function (l, c, d) {
        let g = l.Vu[l.currentUser.toKey()];
        (g || (g = new _t(U)),
          (g = g.insert(c, d)),
          (l.Vu[l.currentUser.toKey()] = g));
      })(r, i.batchId, e),
      await Wn(r, i.changes),
      await Qn(r.remoteStore));
  } catch (i) {
    const a = Qo(i, 'Failed to persist write');
    e.reject(a);
  }
}
function $i(s, t, e) {
  const r = B(s);
  if ((r.isPrimaryClient && e === 0) || (!r.isPrimaryClient && e === 1)) {
    const i = [];
    (r.Tu.forEach((a, l) => {
      const c = l.view.va(t);
      c.snapshot && i.push(c.snapshot);
    }),
      (function (l, c) {
        const d = B(l);
        d.onlineState = c;
        let g = !1;
        (d.queries.forEach((I, w) => {
          for (const S of w.Sa) S.va(c) && (g = !0);
        }),
          g && Ih(d));
      })(r.eventManager, t),
      i.length && r.Pu.H_(i),
      (r.onlineState = t),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(t));
  }
}
async function Vh(s, t) {
  const e = B(s),
    r = t.batch.batchId;
  try {
    const i = await th(e.localStore, t);
    (Ho(e, r, null),
      Wo(e, r),
      e.sharedClientState.updateMutationState(r, 'acknowledged'),
      await Wn(e, i));
  } catch (i) {
    await Br(i);
  }
}
async function Sh(s, t, e) {
  const r = B(s);
  try {
    const i = await (function (l, c) {
      const d = B(l);
      return d.persistence.runTransaction(
        'Reject batch',
        'readwrite-primary',
        (g) => {
          let I;
          return d.mutationQueue
            .lookupMutationBatch(g, c)
            .next(
              (w) => (
                W(w !== null, 37113),
                (I = w.keys()),
                d.mutationQueue.removeMutationBatch(g, w)
              )
            )
            .next(() => d.mutationQueue.performConsistencyCheck(g))
            .next(() =>
              d.documentOverlayCache.removeOverlaysForBatchId(g, I, c)
            )
            .next(() =>
              d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g, I)
            )
            .next(() => d.localDocuments.getDocuments(g, I));
        }
      );
    })(r.localStore, t);
    (Ho(r, t, e),
      Wo(r, t),
      r.sharedClientState.updateMutationState(t, 'rejected', e),
      await Wn(r, i));
  } catch (i) {
    await Br(i);
  }
}
function Wo(s, t) {
  ((s.mu.get(t) || []).forEach((e) => {
    e.resolve();
  }),
    s.mu.delete(t));
}
function Ho(s, t, e) {
  const r = B(s);
  let i = r.Vu[r.currentUser.toKey()];
  if (i) {
    const a = i.get(t);
    (a && (e ? a.reject(e) : a.resolve(), (i = i.remove(t))),
      (r.Vu[r.currentUser.toKey()] = i));
  }
}
async function Wn(s, t, e) {
  const r = B(s),
    i = [],
    a = [],
    l = [];
  r.Tu.isEmpty() ||
    (r.Tu.forEach((c, d) => {
      l.push(
        r.pu(d, t, e).then((g) => {
          if ((g || e) && r.isPrimaryClient) {
            const I = g
              ? !g.fromCache
              : e?.targetChanges.get(d.targetId)?.current;
            r.sharedClientState.updateQueryState(
              d.targetId,
              I ? 'current' : 'not-current'
            );
          }
          if (g) {
            i.push(g);
            const I = es.As(d.targetId, g);
            a.push(I);
          }
        })
      );
    }),
    await Promise.all(l),
    r.Pu.H_(i),
    await (async function (d, g) {
      const I = B(d);
      try {
        await I.persistence.runTransaction(
          'notifyLocalViewChanges',
          'readwrite',
          (w) =>
            R.forEach(g, (S) =>
              R.forEach(S.Es, (b) =>
                I.persistence.referenceDelegate.addReference(w, S.targetId, b)
              ).next(() =>
                R.forEach(S.ds, (b) =>
                  I.persistence.referenceDelegate.removeReference(
                    w,
                    S.targetId,
                    b
                  )
                )
              )
            )
        );
      } catch (w) {
        if (!Xe(w)) throw w;
        C(Yl, 'Failed to update sequence numbers: ' + w);
      }
      for (const w of g) {
        const S = w.targetId;
        if (!w.fromCache) {
          const b = I.Ms.get(S),
            O = b.snapshotVersion,
            L = b.withLastLimboFreeSnapshotVersion(O);
          I.Ms = I.Ms.insert(S, L);
        }
      }
    })(r.localStore, a));
}
async function Ch(s, t) {
  const e = B(s);
  if (!e.currentUser.isEqual(t)) {
    C(wh, 'User change. New user:', t.toKey());
    const r = await Bo(e.localStore, t);
    ((e.currentUser = t),
      (function (a, l) {
        (a.mu.forEach((c) => {
          c.forEach((d) => {
            d.reject(new D(P.CANCELLED, l));
          });
        }),
          a.mu.clear());
      })(e, "'waitForPendingWrites' promise is rejected due to a user change."),
      e.sharedClientState.handleUserChange(
        t,
        r.removedBatchIds,
        r.addedBatchIds
      ),
      await Wn(e, r.Ls));
  }
}
function Dh(s) {
  const t = B(s);
  return (
    (t.remoteStore.remoteSyncer.applySuccessfulWrite = Vh.bind(null, t)),
    (t.remoteStore.remoteSyncer.rejectFailedWrite = Sh.bind(null, t)),
    t
  );
}
class Un {
  constructor() {
    ((this.kind = 'memory'), (this.synchronizeTabs = !1));
  }
  async initialize(t) {
    ((this.serializer = Gn(t.databaseInfo.databaseId)),
      (this.sharedClientState = this.Du(t)),
      (this.persistence = this.Cu(t)),
      await this.persistence.start(),
      (this.localStore = this.vu(t)),
      (this.gcScheduler = this.Fu(t, this.localStore)),
      (this.indexBackfillerScheduler = this.Mu(t, this.localStore)));
  }
  Fu(t, e) {
    return null;
  }
  Mu(t, e) {
    return null;
  }
  vu(t) {
    return Zl(this.persistence, new Xl(), t.initialUser, this.serializer);
  }
  Cu(t) {
    return new jo(ts.mi, this.serializer);
  }
  Du(t) {
    return new rh();
  }
  async terminate() {
    (this.gcScheduler?.stop(),
      this.indexBackfillerScheduler?.stop(),
      this.sharedClientState.shutdown(),
      await this.persistence.shutdown());
  }
}
Un.provider = { build: () => new Un() };
class bh extends Un {
  constructor(t) {
    (super(), (this.cacheSizeBytes = t));
  }
  Fu(t, e) {
    W(this.persistence.referenceDelegate instanceof Fn, 46915);
    const r = this.persistence.referenceDelegate.garbageCollector;
    return new xl(r, t.asyncQueue, e);
  }
  Cu(t) {
    const e =
      this.cacheSizeBytes !== void 0
        ? gt.withCacheSize(this.cacheSizeBytes)
        : gt.DEFAULT;
    return new jo((r) => Fn.mi(r, e), this.serializer);
  }
}
class Mr {
  async initialize(t, e) {
    this.localStore ||
      ((this.localStore = t.localStore),
      (this.sharedClientState = t.sharedClientState),
      (this.datastore = this.createDatastore(e)),
      (this.remoteStore = this.createRemoteStore(e)),
      (this.eventManager = this.createEventManager(e)),
      (this.syncEngine = this.createSyncEngine(e, !t.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) =>
        $i(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = Ch.bind(
        null,
        this.syncEngine
      )),
      await vh(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(t) {
    return (function () {
      return new Ah();
    })();
  }
  createDatastore(t) {
    const e = Gn(t.databaseInfo.databaseId),
      r = (function (a) {
        return new uh(a);
      })(t.databaseInfo);
    return (function (a, l, c, d) {
      return new fh(a, l, c, d);
    })(t.authCredentials, t.appCheckCredentials, r, e);
  }
  createRemoteStore(t) {
    return (function (r, i, a, l, c) {
      return new mh(r, i, a, l, c);
    })(
      this.localStore,
      this.datastore,
      t.asyncQueue,
      (e) => $i(this.syncEngine, e, 0),
      (function () {
        return Li.v() ? new Li() : new sh();
      })()
    );
  }
  createSyncEngine(t, e) {
    return (function (i, a, l, c, d, g, I) {
      const w = new Rh(i, a, l, c, d, g);
      return (I && (w.gu = !0), w);
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      t.initialUser,
      t.maxConcurrentLimboResolutions,
      e
    );
  }
  async terminate() {
    (await (async function (e) {
      const r = B(e);
      (C(Je, 'RemoteStore shutting down.'),
        r.Ea.add(5),
        await Ze(r),
        r.Aa.shutdown(),
        r.Ra.set('Unknown'));
    })(this.remoteStore),
      this.datastore?.terminate(),
      this.eventManager?.terminate());
  }
}
Mr.provider = { build: () => new Mr() };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const zt = 'FirestoreClient';
class Nh {
  constructor(t, e, r, i, a) {
    ((this.authCredentials = t),
      (this.appCheckCredentials = e),
      (this.asyncQueue = r),
      (this.databaseInfo = i),
      (this.user = lt.UNAUTHENTICATED),
      (this.clientId = Ur.newId()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      (this._uninitializedComponentsProvider = a),
      this.authCredentials.start(r, async (l) => {
        (C(zt, 'Received user=', l.uid),
          await this.authCredentialListener(l),
          (this.user = l));
      }),
      this.appCheckCredentials.start(
        r,
        (l) => (
          C(zt, 'Received new app check token=', l),
          this.appCheckCredentialListener(l, this.user)
        )
      ));
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(t) {
    this.authCredentialListener = t;
  }
  setAppCheckTokenChangeListener(t) {
    this.appCheckCredentialListener = t;
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const t = new Jt();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          (this._onlineComponents && (await this._onlineComponents.terminate()),
            this._offlineComponents &&
              (await this._offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            t.resolve());
        } catch (e) {
          const r = Qo(e, 'Failed to shutdown persistence');
          t.reject(r);
        }
      }),
      t.promise
    );
  }
}
async function Ir(s, t) {
  (s.asyncQueue.verifyOperationInProgress(),
    C(zt, 'Initializing OfflineComponentProvider'));
  const e = s.configuration;
  await t.initialize(e);
  let r = e.initialUser;
  (s.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await Bo(t.localStore, i), (r = i));
  }),
    t.persistence.setDatabaseDeletedListener(() => s.terminate()),
    (s._offlineComponents = t));
}
async function zi(s, t) {
  s.asyncQueue.verifyOperationInProgress();
  const e = await kh(s);
  (C(zt, 'Initializing OnlineComponentProvider'),
    await t.initialize(e, s.configuration),
    s.setCredentialChangeListener((r) => Ui(t.remoteStore, r)),
    s.setAppCheckTokenChangeListener((r, i) => Ui(t.remoteStore, i)),
    (s._onlineComponents = t));
}
async function kh(s) {
  if (!s._offlineComponents)
    if (s._uninitializedComponentsProvider) {
      C(zt, 'Using user provided OfflineComponentProvider');
      try {
        await Ir(s, s._uninitializedComponentsProvider._offline);
      } catch (t) {
        const e = t;
        if (
          !(function (i) {
            return i.name === 'FirebaseError'
              ? i.code === P.FAILED_PRECONDITION || i.code === P.UNIMPLEMENTED
              : !(typeof DOMException < 'u' && i instanceof DOMException) ||
                  i.code === 22 ||
                  i.code === 20 ||
                  i.code === 11;
          })(e)
        )
          throw e;
        (Bn(
          'Error using user provided cache. Falling back to memory cache: ' + e
        ),
          await Ir(s, new Un()));
      }
    } else
      (C(zt, 'Using default OfflineComponentProvider'),
        await Ir(s, new bh(void 0)));
  return s._offlineComponents;
}
async function Oh(s) {
  return (
    s._onlineComponents ||
      (s._uninitializedComponentsProvider
        ? (C(zt, 'Using user provided OnlineComponentProvider'),
          await zi(s, s._uninitializedComponentsProvider._online))
        : (C(zt, 'Using default OnlineComponentProvider'),
          await zi(s, new Mr()))),
    s._onlineComponents
  );
}
function xh(s) {
  return Oh(s).then((t) => t.syncEngine);
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Xo(s) {
  const t = {};
  return (
    s.timeoutSeconds !== void 0 && (t.timeoutSeconds = s.timeoutSeconds),
    t
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Gi = new Map();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Yo = 'firestore.googleapis.com',
  Ki = !0;
class Qi {
  constructor(t) {
    if (t.host === void 0) {
      if (t.ssl !== void 0)
        throw new D(
          P.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set"
        );
      ((this.host = Yo), (this.ssl = Ki));
    } else ((this.host = t.host), (this.ssl = t.ssl ?? Ki));
    if (
      ((this.isUsingEmulator = t.emulatorOptions !== void 0),
      (this.credentials = t.credentials),
      (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
      (this.localCache = t.localCache),
      t.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = Uo;
    else {
      if (t.cacheSizeBytes !== -1 && t.cacheSizeBytes < kl)
        throw new D(
          P.INVALID_ARGUMENT,
          'cacheSizeBytes must be at least 1048576'
        );
      this.cacheSizeBytes = t.cacheSizeBytes;
    }
    (vu(
      'experimentalForceLongPolling',
      t.experimentalForceLongPolling,
      'experimentalAutoDetectLongPolling',
      t.experimentalAutoDetectLongPolling
    ),
      (this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : t.experimentalAutoDetectLongPolling === void 0
          ? (this.experimentalAutoDetectLongPolling = !0)
          : (this.experimentalAutoDetectLongPolling =
              !!t.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = Xo(
        t.experimentalLongPollingOptions ?? {}
      )),
      (function (r) {
        if (r.timeoutSeconds !== void 0) {
          if (isNaN(r.timeoutSeconds))
            throw new D(
              P.INVALID_ARGUMENT,
              `invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`
            );
          if (r.timeoutSeconds < 5)
            throw new D(
              P.INVALID_ARGUMENT,
              `invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`
            );
          if (r.timeoutSeconds > 30)
            throw new D(
              P.INVALID_ARGUMENT,
              `invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`
            );
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!t.useFetchStreams));
  }
  isEqual(t) {
    return (
      this.host === t.host &&
      this.ssl === t.ssl &&
      this.credentials === t.credentials &&
      this.cacheSizeBytes === t.cacheSizeBytes &&
      this.experimentalForceLongPolling === t.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        t.experimentalAutoDetectLongPolling &&
      (function (r, i) {
        return r.timeoutSeconds === i.timeoutSeconds;
      })(
        this.experimentalLongPollingOptions,
        t.experimentalLongPollingOptions
      ) &&
      this.ignoreUndefinedProperties === t.ignoreUndefinedProperties &&
      this.useFetchStreams === t.useFetchStreams
    );
  }
}
class Hn {
  constructor(t, e, r, i) {
    ((this._authCredentials = t),
      (this._appCheckCredentials = e),
      (this._databaseId = r),
      (this._app = i),
      (this.type = 'firestore-lite'),
      (this._persistenceKey = '(lite)'),
      (this._settings = new Qi({})),
      (this._settingsFrozen = !1),
      (this._emulatorOptions = {}),
      (this._terminateTask = 'notTerminated'));
  }
  get app() {
    if (!this._app)
      throw new D(
        P.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available"
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== 'notTerminated';
  }
  _setSettings(t) {
    if (this._settingsFrozen)
      throw new D(
        P.FAILED_PRECONDITION,
        'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
      );
    ((this._settings = new Qi(t)),
      (this._emulatorOptions = t.emulatorOptions || {}),
      t.credentials !== void 0 &&
        (this._authCredentials = (function (r) {
          if (!r) return new cu();
          switch (r.type) {
            case 'firstParty':
              return new pu(
                r.sessionIndex || '0',
                r.iamToken || null,
                r.authTokenFactory || null
              );
            case 'provider':
              return r.client;
            default:
              throw new D(
                P.INVALID_ARGUMENT,
                'makeAuthCredentialsProvider failed due to invalid credential type'
              );
          }
        })(t.credentials)));
  }
  _getSettings() {
    return this._settings;
  }
  _getEmulatorOptions() {
    return this._emulatorOptions;
  }
  _freezeSettings() {
    return ((this._settingsFrozen = !0), this._settings);
  }
  _delete() {
    return (
      this._terminateTask === 'notTerminated' &&
        (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  async _restart() {
    this._terminateTask === 'notTerminated'
      ? await this._terminate()
      : (this._terminateTask = 'notTerminated');
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function (e) {
        const r = Gi.get(e);
        r &&
          (C('ComponentProvider', 'Removing Datastore'),
          Gi.delete(e),
          r.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function Mh(s, t, e, r = {}) {
  s = ao(s, Hn);
  const i = Yi(t),
    a = s._getSettings(),
    l = { ...a, emulatorOptions: s._getEmulatorOptions() },
    c = `${t}:${e}`;
  (i && (Ha(`https://${c}`), Xa('Firestore', !0)),
    a.host !== Yo &&
      a.host !== c &&
      Bn(
        'Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.'
      ));
  const d = { ...a, host: c, ssl: i, emulatorOptions: r };
  if (!Ya(d, l) && (s._setSettings(d), r.mockUserToken)) {
    let g, I;
    if (typeof r.mockUserToken == 'string')
      ((g = r.mockUserToken), (I = lt.MOCK_USER));
    else {
      g = Ja(r.mockUserToken, s._app?.options.projectId);
      const w = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!w)
        throw new D(
          P.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        );
      I = new lt(w);
    }
    s._authCredentials = new fu(new so(g, I));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rs {
  constructor(t, e, r) {
    ((this.converter = e),
      (this._query = r),
      (this.type = 'query'),
      (this.firestore = t));
  }
  withConverter(t) {
    return new rs(this.firestore, t, this._query);
  }
}
class ct {
  constructor(t, e, r) {
    ((this.converter = e),
      (this._key = r),
      (this.type = 'document'),
      (this.firestore = t));
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new jt(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(t) {
    return new ct(this.firestore, t, this._key);
  }
  toJSON() {
    return { type: ct._jsonSchemaVersion, referencePath: this._key.toString() };
  }
  static fromJSON(t, e, r) {
    if (He(e, ct._jsonSchema))
      return new ct(t, r || null, new k(G.fromString(e.referencePath)));
  }
}
((ct._jsonSchemaVersion = 'firestore/documentReference/1.0'),
  (ct._jsonSchema = {
    type: J('string', ct._jsonSchemaVersion),
    referencePath: J('string'),
  }));
class jt extends rs {
  constructor(t, e, r) {
    (super(t, e, Wu(r)), (this._path = r), (this.type = 'collection'));
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const t = this._path.popLast();
    return t.isEmpty() ? null : new ct(this.firestore, null, new k(t));
  }
  withConverter(t) {
    return new jt(this.firestore, t, this._path);
  }
}
function Lh(s, t, ...e) {
  if (((s = $e(s)), io('collection', 'path', t), s instanceof Hn)) {
    const r = G.fromString(t, ...e);
    return (pi(r), new jt(s, null, r));
  }
  {
    if (!(s instanceof ct || s instanceof jt))
      throw new D(
        P.INVALID_ARGUMENT,
        'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
      );
    const r = s._path.child(G.fromString(t, ...e));
    return (pi(r), new jt(s.firestore, null, r));
  }
}
function Fh(s, t, ...e) {
  if (
    ((s = $e(s)),
    arguments.length === 1 && (t = Ur.newId()),
    io('doc', 'path', t),
    s instanceof Hn)
  ) {
    const r = G.fromString(t, ...e);
    return (mi(r), new ct(s, null, new k(r)));
  }
  {
    if (!(s instanceof ct || s instanceof jt))
      throw new D(
        P.INVALID_ARGUMENT,
        'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
      );
    const r = s._path.child(G.fromString(t, ...e));
    return (
      mi(r),
      new ct(s.firestore, s instanceof jt ? s.converter : null, new k(r))
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Wi = 'AsyncQueue';
class Hi {
  constructor(t = Promise.resolve()) {
    ((this.Xu = []),
      (this.ec = !1),
      (this.tc = []),
      (this.nc = null),
      (this.rc = !1),
      (this.sc = !1),
      (this.oc = []),
      (this.M_ = new qo(this, 'async_queue_retry')),
      (this._c = () => {
        const r = Ar();
        (r && C(Wi, 'Visibility state changed to ' + r.visibilityState),
          this.M_.w_());
      }),
      (this.ac = t));
    const e = Ar();
    e &&
      typeof e.addEventListener == 'function' &&
      e.addEventListener('visibilitychange', this._c);
  }
  get isShuttingDown() {
    return this.ec;
  }
  enqueueAndForget(t) {
    this.enqueue(t);
  }
  enqueueAndForgetEvenWhileRestricted(t) {
    (this.uc(), this.cc(t));
  }
  enterRestrictedMode(t) {
    if (!this.ec) {
      ((this.ec = !0), (this.sc = t || !1));
      const e = Ar();
      e &&
        typeof e.removeEventListener == 'function' &&
        e.removeEventListener('visibilitychange', this._c);
    }
  }
  enqueue(t) {
    if ((this.uc(), this.ec)) return new Promise(() => {});
    const e = new Jt();
    return this.cc(() =>
      this.ec && this.sc
        ? Promise.resolve()
        : (t().then(e.resolve, e.reject), e.promise)
    ).then(() => e.promise);
  }
  enqueueRetryable(t) {
    this.enqueueAndForget(() => (this.Xu.push(t), this.lc()));
  }
  async lc() {
    if (this.Xu.length !== 0) {
      try {
        (await this.Xu[0](), this.Xu.shift(), this.M_.reset());
      } catch (t) {
        if (!Xe(t)) throw t;
        C(Wi, 'Operation failed with retryable error: ' + t);
      }
      this.Xu.length > 0 && this.M_.p_(() => this.lc());
    }
  }
  cc(t) {
    const e = this.ac.then(
      () => (
        (this.rc = !0),
        t()
          .catch((r) => {
            throw (
              (this.nc = r),
              (this.rc = !1),
              ee('INTERNAL UNHANDLED ERROR: ', Xi(r)),
              r
            );
          })
          .then((r) => ((this.rc = !1), r))
      )
    );
    return ((this.ac = e), e);
  }
  enqueueAfterDelay(t, e, r) {
    (this.uc(), this.oc.indexOf(t) > -1 && (e = 0));
    const i = ns.createAndSchedule(this, t, e, r, (a) => this.hc(a));
    return (this.tc.push(i), i);
  }
  uc() {
    this.nc && M(47125, { Pc: Xi(this.nc) });
  }
  verifyOperationInProgress() {}
  async Tc() {
    let t;
    do ((t = this.ac), await t);
    while (t !== this.ac);
  }
  Ic(t) {
    for (const e of this.tc) if (e.timerId === t) return !0;
    return !1;
  }
  Ec(t) {
    return this.Tc().then(() => {
      this.tc.sort((e, r) => e.targetTimeMs - r.targetTimeMs);
      for (const e of this.tc)
        if ((e.skipDelay(), t !== 'all' && e.timerId === t)) break;
      return this.Tc();
    });
  }
  dc(t) {
    this.oc.push(t);
  }
  hc(t) {
    const e = this.tc.indexOf(t);
    this.tc.splice(e, 1);
  }
}
function Xi(s) {
  let t = s.message || '';
  return (
    s.stack &&
      (t = s.stack.includes(s.message)
        ? s.stack
        : s.message +
          `
` +
          s.stack),
    t
  );
}
class Jo extends Hn {
  constructor(t, e, r, i) {
    (super(t, e, r, i),
      (this.type = 'firestore'),
      (this._queue = new Hi()),
      (this._persistenceKey = i?.name || '[DEFAULT]'));
  }
  async _terminate() {
    if (this._firestoreClient) {
      const t = this._firestoreClient.terminate();
      ((this._queue = new Hi(t)), (this._firestoreClient = void 0), await t);
    }
  }
}
function Uh(s, t) {
  const e = typeof s == 'object' ? s : Ka(),
    r = typeof s == 'string' ? s : Nn,
    i = Qa(e, 'firestore').getImmediate({ identifier: r });
  if (!i._initialized) {
    const a = Wa('firestore');
    a && Mh(i, ...a);
  }
  return i;
}
function jh(s) {
  if (s._terminated)
    throw new D(
      P.FAILED_PRECONDITION,
      'The client has already been terminated.'
    );
  return (s._firestoreClient || Bh(s), s._firestoreClient);
}
function Bh(s) {
  const t = s._freezeSettings(),
    e = (function (i, a, l, c) {
      return new ku(
        i,
        a,
        l,
        c.host,
        c.ssl,
        c.experimentalForceLongPolling,
        c.experimentalAutoDetectLongPolling,
        Xo(c.experimentalLongPollingOptions),
        c.useFetchStreams,
        c.isUsingEmulator
      );
    })(s._databaseId, s._app?.options.appId || '', s._persistenceKey, t);
  (s._componentsProvider ||
    (t.localCache?._offlineComponentProvider &&
      t.localCache?._onlineComponentProvider &&
      (s._componentsProvider = {
        _offline: t.localCache._offlineComponentProvider,
        _online: t.localCache._onlineComponentProvider,
      })),
    (s._firestoreClient = new Nh(
      s._authCredentials,
      s._appCheckCredentials,
      s._queue,
      e,
      s._componentsProvider &&
        (function (i) {
          const a = i?._online.build();
          return { _offline: i?._offline.build(a), _online: a };
        })(s._componentsProvider)
    )));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class It {
  constructor(t) {
    this._byteString = t;
  }
  static fromBase64String(t) {
    try {
      return new It(St.fromBase64String(t));
    } catch (e) {
      throw new D(
        P.INVALID_ARGUMENT,
        'Failed to construct data from Base64 string: ' + e
      );
    }
  }
  static fromUint8Array(t) {
    return new It(St.fromUint8Array(t));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return 'Bytes(base64: ' + this.toBase64() + ')';
  }
  isEqual(t) {
    return this._byteString.isEqual(t._byteString);
  }
  toJSON() {
    return { type: It._jsonSchemaVersion, bytes: this.toBase64() };
  }
  static fromJSON(t) {
    if (He(t, It._jsonSchema)) return It.fromBase64String(t.bytes);
  }
}
((It._jsonSchemaVersion = 'firestore/bytes/1.0'),
  (It._jsonSchema = {
    type: J('string', It._jsonSchemaVersion),
    bytes: J('string'),
  }));
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ss {
  constructor(...t) {
    for (let e = 0; e < t.length; ++e)
      if (t[e].length === 0)
        throw new D(
          P.INVALID_ARGUMENT,
          'Invalid field name at argument $(i + 1). Field names must not be empty.'
        );
    this._internalPath = new it(t);
  }
  isEqual(t) {
    return this._internalPath.isEqual(t._internalPath);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class is {
  constructor(t) {
    this._methodName = t;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Nt {
  constructor(t, e) {
    if (!isFinite(t) || t < -90 || t > 90)
      throw new D(
        P.INVALID_ARGUMENT,
        'Latitude must be a number between -90 and 90, but was: ' + t
      );
    if (!isFinite(e) || e < -180 || e > 180)
      throw new D(
        P.INVALID_ARGUMENT,
        'Longitude must be a number between -180 and 180, but was: ' + e
      );
    ((this._lat = t), (this._long = e));
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(t) {
    return this._lat === t._lat && this._long === t._long;
  }
  _compareTo(t) {
    return U(this._lat, t._lat) || U(this._long, t._long);
  }
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long,
      type: Nt._jsonSchemaVersion,
    };
  }
  static fromJSON(t) {
    if (He(t, Nt._jsonSchema)) return new Nt(t.latitude, t.longitude);
  }
}
((Nt._jsonSchemaVersion = 'firestore/geoPoint/1.0'),
  (Nt._jsonSchema = {
    type: J('string', Nt._jsonSchemaVersion),
    latitude: J('number'),
    longitude: J('number'),
  }));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kt {
  constructor(t) {
    this._values = (t || []).map((e) => e);
  }
  toArray() {
    return this._values.map((t) => t);
  }
  isEqual(t) {
    return (function (r, i) {
      if (r.length !== i.length) return !1;
      for (let a = 0; a < r.length; ++a) if (r[a] !== i[a]) return !1;
      return !0;
    })(this._values, t._values);
  }
  toJSON() {
    return { type: kt._jsonSchemaVersion, vectorValues: this._values };
  }
  static fromJSON(t) {
    if (He(t, kt._jsonSchema)) {
      if (
        Array.isArray(t.vectorValues) &&
        t.vectorValues.every((e) => typeof e == 'number')
      )
        return new kt(t.vectorValues);
      throw new D(
        P.INVALID_ARGUMENT,
        "Expected 'vectorValues' field to be a number array"
      );
    }
  }
}
((kt._jsonSchemaVersion = 'firestore/vectorValue/1.0'),
  (kt._jsonSchema = {
    type: J('string', kt._jsonSchemaVersion),
    vectorValues: J('object'),
  }));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qh = /^__.*__$/;
class $h {
  constructor(t, e, r) {
    ((this.data = t), (this.fieldMask = e), (this.fieldTransforms = r));
  }
  toMutation(t, e) {
    return this.fieldMask !== null
      ? new ie(t, this.data, this.fieldMask, e, this.fieldTransforms)
      : new Ye(t, this.data, e, this.fieldTransforms);
  }
}
function Zo(s) {
  switch (s) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw M(40011, { Ac: s });
  }
}
class os {
  constructor(t, e, r, i, a, l) {
    ((this.settings = t),
      (this.databaseId = e),
      (this.serializer = r),
      (this.ignoreUndefinedProperties = i),
      a === void 0 && this.Rc(),
      (this.fieldTransforms = a || []),
      (this.fieldMask = l || []));
  }
  get path() {
    return this.settings.path;
  }
  get Ac() {
    return this.settings.Ac;
  }
  Vc(t) {
    return new os(
      { ...this.settings, ...t },
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties,
      this.fieldTransforms,
      this.fieldMask
    );
  }
  mc(t) {
    const e = this.path?.child(t),
      r = this.Vc({ path: e, fc: !1 });
    return (r.gc(t), r);
  }
  yc(t) {
    const e = this.path?.child(t),
      r = this.Vc({ path: e, fc: !1 });
    return (r.Rc(), r);
  }
  wc(t) {
    return this.Vc({ path: void 0, fc: !0 });
  }
  Sc(t) {
    return jn(
      t,
      this.settings.methodName,
      this.settings.bc || !1,
      this.path,
      this.settings.Dc
    );
  }
  contains(t) {
    return (
      this.fieldMask.find((e) => t.isPrefixOf(e)) !== void 0 ||
      this.fieldTransforms.find((e) => t.isPrefixOf(e.field)) !== void 0
    );
  }
  Rc() {
    if (this.path)
      for (let t = 0; t < this.path.length; t++) this.gc(this.path.get(t));
  }
  gc(t) {
    if (t.length === 0) throw this.Sc('Document fields must not be empty');
    if (Zo(this.Ac) && qh.test(t))
      throw this.Sc('Document fields cannot begin and end with "__"');
  }
}
class zh {
  constructor(t, e, r) {
    ((this.databaseId = t),
      (this.ignoreUndefinedProperties = e),
      (this.serializer = r || Gn(t)));
  }
  Cc(t, e, r, i = !1) {
    return new os(
      { Ac: t, methodName: e, Dc: r, path: it.emptyPath(), fc: !1, bc: i },
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties
    );
  }
}
function Gh(s) {
  const t = s._freezeSettings(),
    e = Gn(s._databaseId);
  return new zh(s._databaseId, !!t.ignoreUndefinedProperties, e);
}
function Kh(s, t, e, r, i, a = {}) {
  const l = s.Cc(a.merge || a.mergeFields ? 2 : 0, t, e, i);
  ra('Data must be an object, but it was:', l, r);
  const c = ea(r, l);
  let d, g;
  if (a.merge) ((d = new wt(l.fieldMask)), (g = l.fieldTransforms));
  else if (a.mergeFields) {
    const I = [];
    for (const w of a.mergeFields) {
      const S = Qh(t, w, e);
      if (!l.contains(S))
        throw new D(
          P.INVALID_ARGUMENT,
          `Field '${S}' is specified in your field mask but missing from your input data.`
        );
      Hh(I, S) || I.push(S);
    }
    ((d = new wt(I)), (g = l.fieldTransforms.filter((w) => d.covers(w.field))));
  } else ((d = null), (g = l.fieldTransforms));
  return new $h(new At(c), d, g);
}
class as extends is {
  _toFieldTransform(t) {
    return new al(t.path, new Ke());
  }
  isEqual(t) {
    return t instanceof as;
  }
}
function ta(s, t) {
  if (na((s = $e(s)))) return (ra('Unsupported field value:', t, s), ea(s, t));
  if (s instanceof is)
    return (
      (function (r, i) {
        if (!Zo(i.Ac))
          throw i.Sc(
            `${r._methodName}() can only be used with update() and set()`
          );
        if (!i.path)
          throw i.Sc(
            `${r._methodName}() is not currently supported inside arrays`
          );
        const a = r._toFieldTransform(i);
        a && i.fieldTransforms.push(a);
      })(s, t),
      null
    );
  if (s === void 0 && t.ignoreUndefinedProperties) return null;
  if ((t.path && t.fieldMask.push(t.path), s instanceof Array)) {
    if (t.settings.fc && t.Ac !== 4)
      throw t.Sc('Nested arrays are not supported');
    return (function (r, i) {
      const a = [];
      let l = 0;
      for (const c of r) {
        let d = ta(c, i.wc(l));
        (d == null && (d = { nullValue: 'NULL_VALUE' }), a.push(d), l++);
      }
      return { arrayValue: { values: a } };
    })(s, t);
  }
  return (function (r, i) {
    if ((r = $e(r)) === null) return { nullValue: 'NULL_VALUE' };
    if (typeof r == 'number') return sl(i.serializer, r);
    if (typeof r == 'boolean') return { booleanValue: r };
    if (typeof r == 'string') return { stringValue: r };
    if (r instanceof Date) {
      const a = z.fromDate(r);
      return { timestampValue: Nr(i.serializer, a) };
    }
    if (r instanceof z) {
      const a = new z(r.seconds, 1e3 * Math.floor(r.nanoseconds / 1e3));
      return { timestampValue: Nr(i.serializer, a) };
    }
    if (r instanceof Nt)
      return {
        geoPointValue: { latitude: r.latitude, longitude: r.longitude },
      };
    if (r instanceof It) return { bytesValue: yl(i.serializer, r._byteString) };
    if (r instanceof ct) {
      const a = i.databaseId,
        l = r.firestore._databaseId;
      if (!l.isEqual(a))
        throw i.Sc(
          `Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`
        );
      return {
        referenceValue: Lo(
          r.firestore._databaseId || i.databaseId,
          r._key.path
        ),
      };
    }
    if (r instanceof kt)
      return (function (l, c) {
        return {
          mapValue: {
            fields: {
              [po]: { stringValue: go },
              [Vr]: {
                arrayValue: {
                  values: l.toArray().map((g) => {
                    if (typeof g != 'number')
                      throw c.Sc(
                        'VectorValues must only contain numeric values.'
                      );
                    return Yr(c.serializer, g);
                  }),
                },
              },
            },
          },
        };
      })(r, i);
    throw i.Sc(`Unsupported field value: ${jr(r)}`);
  })(s, t);
}
function ea(s, t) {
  const e = {};
  return (
    lo(s)
      ? t.path && t.path.length > 0 && t.fieldMask.push(t.path)
      : Ee(s, (r, i) => {
          const a = ta(i, t.mc(r));
          a != null && (e[r] = a);
        }),
    { mapValue: { fields: e } }
  );
}
function na(s) {
  return !(
    typeof s != 'object' ||
    s === null ||
    s instanceof Array ||
    s instanceof Date ||
    s instanceof z ||
    s instanceof Nt ||
    s instanceof It ||
    s instanceof ct ||
    s instanceof is ||
    s instanceof kt
  );
}
function ra(s, t, e) {
  if (!na(e) || !oo(e)) {
    const r = jr(e);
    throw r === 'an object' ? t.Sc(s + ' a custom object') : t.Sc(s + ' ' + r);
  }
}
function Qh(s, t, e) {
  if ((t = $e(t)) instanceof ss) return t._internalPath;
  if (typeof t == 'string') return sa(s, t);
  throw jn('Field path arguments must be of type string or ', s, !1, void 0, e);
}
const Wh = new RegExp('[~\\*/\\[\\]]');
function sa(s, t, e) {
  if (t.search(Wh) >= 0)
    throw jn(
      `Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,
      s,
      !1,
      void 0,
      e
    );
  try {
    return new ss(...t.split('.'))._internalPath;
  } catch {
    throw jn(
      `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      s,
      !1,
      void 0,
      e
    );
  }
}
function jn(s, t, e, r, i) {
  const a = r && !r.isEmpty(),
    l = i !== void 0;
  let c = `Function ${t}() called with invalid data`;
  (e && (c += ' (via `toFirestore()`)'), (c += '. '));
  let d = '';
  return (
    (a || l) &&
      ((d += ' (found'),
      a && (d += ` in field ${r}`),
      l && (d += ` in document ${i}`),
      (d += ')')),
    new D(P.INVALID_ARGUMENT, c + s + d)
  );
}
function Hh(s, t) {
  return s.some((e) => e.isEqual(t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ia {
  constructor(t, e, r, i, a) {
    ((this._firestore = t),
      (this._userDataWriter = e),
      (this._key = r),
      (this._document = i),
      (this._converter = a));
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new ct(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const t = new Xh(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null
        );
        return this._converter.fromFirestore(t);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(t) {
    if (this._document) {
      const e = this._document.data.field(oa('DocumentSnapshot.get', t));
      if (e !== null) return this._userDataWriter.convertValue(e);
    }
  }
}
class Xh extends ia {
  data() {
    return super.data();
  }
}
function oa(s, t) {
  return typeof t == 'string'
    ? sa(s, t)
    : t instanceof ss
      ? t._internalPath
      : t._delegate._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Yh(s, t, e) {
  let r;
  return ((r = s ? s.toFirestore(t) : t), r);
}
class In {
  constructor(t, e) {
    ((this.hasPendingWrites = t), (this.fromCache = e));
  }
  isEqual(t) {
    return (
      this.hasPendingWrites === t.hasPendingWrites &&
      this.fromCache === t.fromCache
    );
  }
}
class fe extends ia {
  constructor(t, e, r, i, a, l) {
    (super(t, e, r, i, l),
      (this._firestore = t),
      (this._firestoreImpl = t),
      (this.metadata = a));
  }
  exists() {
    return super.exists();
  }
  data(t = {}) {
    if (this._document) {
      if (this._converter) {
        const e = new Sn(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null
        );
        return this._converter.fromFirestore(e, t);
      }
      return this._userDataWriter.convertValue(
        this._document.data.value,
        t.serverTimestamps
      );
    }
  }
  get(t, e = {}) {
    if (this._document) {
      const r = this._document.data.field(oa('DocumentSnapshot.get', t));
      if (r !== null)
        return this._userDataWriter.convertValue(r, e.serverTimestamps);
    }
  }
  toJSON() {
    if (this.metadata.hasPendingWrites)
      throw new D(
        P.FAILED_PRECONDITION,
        'DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().'
      );
    const t = this._document,
      e = {};
    return (
      (e.type = fe._jsonSchemaVersion),
      (e.bundle = ''),
      (e.bundleSource = 'DocumentSnapshot'),
      (e.bundleName = this._key.toString()),
      !t || !t.isValidDocument() || !t.isFoundDocument()
        ? e
        : (this._userDataWriter.convertObjectMap(
            t.data.value.mapValue.fields,
            'previous'
          ),
          (e.bundle = (this._firestore, this.ref.path, 'NOT SUPPORTED')),
          e)
    );
  }
}
((fe._jsonSchemaVersion = 'firestore/documentSnapshot/1.0'),
  (fe._jsonSchema = {
    type: J('string', fe._jsonSchemaVersion),
    bundleSource: J('string', 'DocumentSnapshot'),
    bundleName: J('string'),
    bundle: J('string'),
  }));
class Sn extends fe {
  data(t = {}) {
    return super.data(t);
  }
}
class qe {
  constructor(t, e, r, i) {
    ((this._firestore = t),
      (this._userDataWriter = e),
      (this._snapshot = i),
      (this.metadata = new In(i.hasPendingWrites, i.fromCache)),
      (this.query = r));
  }
  get docs() {
    const t = [];
    return (this.forEach((e) => t.push(e)), t);
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return this.size === 0;
  }
  forEach(t, e) {
    this._snapshot.docs.forEach((r) => {
      t.call(
        e,
        new Sn(
          this._firestore,
          this._userDataWriter,
          r.key,
          r,
          new In(
            this._snapshot.mutatedKeys.has(r.key),
            this._snapshot.fromCache
          ),
          this.query.converter
        )
      );
    });
  }
  docChanges(t = {}) {
    const e = !!t.includeMetadataChanges;
    if (e && this._snapshot.excludesMetadataChanges)
      throw new D(
        P.INVALID_ARGUMENT,
        'To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().'
      );
    return (
      (this._cachedChanges &&
        this._cachedChangesIncludeMetadataChanges === e) ||
        ((this._cachedChanges = (function (i, a) {
          if (i._snapshot.oldDocs.isEmpty()) {
            let l = 0;
            return i._snapshot.docChanges.map((c) => {
              const d = new Sn(
                i._firestore,
                i._userDataWriter,
                c.doc.key,
                c.doc,
                new In(
                  i._snapshot.mutatedKeys.has(c.doc.key),
                  i._snapshot.fromCache
                ),
                i.query.converter
              );
              return (
                c.doc,
                { type: 'added', doc: d, oldIndex: -1, newIndex: l++ }
              );
            });
          }
          {
            let l = i._snapshot.oldDocs;
            return i._snapshot.docChanges
              .filter((c) => a || c.type !== 3)
              .map((c) => {
                const d = new Sn(
                  i._firestore,
                  i._userDataWriter,
                  c.doc.key,
                  c.doc,
                  new In(
                    i._snapshot.mutatedKeys.has(c.doc.key),
                    i._snapshot.fromCache
                  ),
                  i.query.converter
                );
                let g = -1,
                  I = -1;
                return (
                  c.type !== 0 &&
                    ((g = l.indexOf(c.doc.key)), (l = l.delete(c.doc.key))),
                  c.type !== 1 &&
                    ((l = l.add(c.doc)), (I = l.indexOf(c.doc.key))),
                  { type: Jh(c.type), doc: d, oldIndex: g, newIndex: I }
                );
              });
          }
        })(this, e)),
        (this._cachedChangesIncludeMetadataChanges = e)),
      this._cachedChanges
    );
  }
  toJSON() {
    if (this.metadata.hasPendingWrites)
      throw new D(
        P.FAILED_PRECONDITION,
        'QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().'
      );
    const t = {};
    ((t.type = qe._jsonSchemaVersion),
      (t.bundleSource = 'QuerySnapshot'),
      (t.bundleName = Ur.newId()),
      this._firestore._databaseId.database,
      this._firestore._databaseId.projectId);
    const e = [],
      r = [],
      i = [];
    return (
      this.docs.forEach((a) => {
        a._document !== null &&
          (e.push(a._document),
          r.push(
            this._userDataWriter.convertObjectMap(
              a._document.data.value.mapValue.fields,
              'previous'
            )
          ),
          i.push(a.ref.path));
      }),
      (t.bundle =
        (this._firestore, this.query._query, t.bundleName, 'NOT SUPPORTED')),
      t
    );
  }
}
function Jh(s) {
  switch (s) {
    case 0:
      return 'added';
    case 2:
    case 3:
      return 'modified';
    case 1:
      return 'removed';
    default:
      return M(61501, { type: s });
  }
}
((qe._jsonSchemaVersion = 'firestore/querySnapshot/1.0'),
  (qe._jsonSchema = {
    type: J('string', qe._jsonSchemaVersion),
    bundleSource: J('string', 'QuerySnapshot'),
    bundleName: J('string'),
    bundle: J('string'),
  }));
function Zh(s, t) {
  const e = ao(s.firestore, Jo),
    r = Fh(s),
    i = Yh(s.converter, t);
  return tc(e, [
    Kh(
      Gh(s.firestore),
      'addDoc',
      r._key,
      i,
      s.converter !== null,
      {}
    ).toMutation(r._key, bt.exists(!1)),
  ]).then(() => r);
}
function tc(s, t) {
  return (function (r, i) {
    const a = new Jt();
    return (
      r.asyncQueue.enqueueAndForget(async () => Ph(await xh(r), i, a)),
      a.promise
    );
  })(jh(s), t);
}
function ac() {
  return new as('serverTimestamp');
}
(function (t, e = !0) {
  ((function (i) {
    ye = i;
  })(eu),
    qa(
      new $a(
        'firestore',
        (r, { instanceIdentifier: i, options: a }) => {
          const l = r.getProvider('app').getImmediate(),
            c = new Jo(
              new du(r.getProvider('auth-internal')),
              new gu(l, r.getProvider('app-check-internal')),
              (function (g, I) {
                if (
                  !Object.prototype.hasOwnProperty.apply(g.options, [
                    'projectId',
                  ])
                )
                  throw new D(
                    P.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new kn(g.options.projectId, I);
              })(l, i),
              l
            );
          return ((a = { useFetchStreams: e, ...a }), c._setSettings(a), c);
        },
        'PUBLIC'
      ).setMultipleInstances(!0)
    ),
    wr(hi, ci, t),
    wr(hi, ci, 'esm2020'));
})();
const ec = {
    apiKey: 'AIzaSyAFMdW1Th1OKcBvFuxokKb8GAzHtyxU6Wk',
    authDomain: 'rest-client-app-5769b.firebaseapp.com',
    projectId: 'rest-client-app-5769b',
    storageBucket: 'rest-client-app-5769b.firebasestorage.app',
    messagingSenderId: '871751415386',
    appId: '1:871751415386:web:5e24636a4e7fbf9a640a63',
    measurementId: 'G-H091NY0HYV',
  },
  aa = nu(ec),
  en = ru(aa),
  ua = Uh(aa);
function nc(s) {
  let t = !1;
  return au(en, (r) => {
    (async () => {
      if (t) return;
      const i = window.location.pathname;
      if (!r) {
        ((t = !0), Cn(), i !== '/' && s('/'));
        return;
      }
      try {
        const a = await r.getIdTokenResult();
        new Date(a.expirationTime).getTime() <= Date.now() &&
          ((t = !0), Cn(), i !== '/' && s('/'));
      } catch (a) {
        (console.error(a), (t = !0), Cn(), i !== '/' && s('/'));
      }
    })();
  });
}
const rc = async (s, t) => {
    const r = (await su(en, s, t)).user,
      i = await r.getIdToken();
    return { user: r, token: i };
  },
  sc = async (s, t, e) => {
    const i = (await iu(en, t, e)).user;
    await ou(i, { displayName: s });
    const a = await i.getIdToken();
    return (
      await Zh(Lh(ua, 'users'), {
        uid: i.uid,
        name: s,
        authProvider: 'local',
        email: t,
      }),
      { user: i, token: a }
    );
  },
  Cn = async () => {
    try {
      await uu(en);
    } catch (s) {
      console.error('Logout failed:', s);
    }
  },
  uc = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        auth: en,
        db: ua,
        initAuthWatcher: nc,
        logInWithEmailAndPassword: rc,
        logout: Cn,
        registerWithEmailAndPassword: sc,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
export {
  Zh as a,
  Lh as c,
  ua as d,
  uc as f,
  nc as i,
  rc as l,
  sc as r,
  ac as s,
};
