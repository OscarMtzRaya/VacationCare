/**
 * SimpleBar.js - v5.3.0
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

!(function (t, e) {
	"object" == typeof exports && "undefined" != typeof module
		? (module.exports = e())
		: "function" == typeof define && define.amd
		? define(e)
		: ((t = t || self).SimpleBar = e());
})(this, function () {
	"use strict";
	var t =
		"undefined" != typeof globalThis
			? globalThis
			: "undefined" != typeof window
			? window
			: "undefined" != typeof global
			? global
			: "undefined" != typeof self
			? self
			: {};
	function e(t, e) {
		return t((e = { exports: {} }), e.exports), e.exports;
	}
	var r,
		n,
		i,
		o = "object",
		s = function (t) {
			return t && t.Math == Math && t;
		},
		a =
			s(typeof globalThis == o && globalThis) ||
			s(typeof window == o && window) ||
			s(typeof self == o && self) ||
			s(typeof t == o && t) ||
			Function("return this")(),
		c = function (t) {
			try {
				return !!t();
			} catch (t) {
				return !0;
			}
		},
		l = !c(function () {
			return (
				7 !=
				Object.defineProperty({}, "a", {
					get: function () {
						return 7;
					},
				}).a
			);
		}),
		u = {}.propertyIsEnumerable,
		f = Object.getOwnPropertyDescriptor,
		h = {
			f:
				f && !u.call({ 1: 2 }, 1)
					? function (t) {
							var e = f(this, t);
							return !!e && e.enumerable;
					  }
					: u,
		},
		d = function (t, e) {
			return {
				enumerable: !(1 & t),
				configurable: !(2 & t),
				writable: !(4 & t),
				value: e,
			};
		},
		p = {}.toString,
		v = function (t) {
			return p.call(t).slice(8, -1);
		},
		g = "".split,
		y = c(function () {
			return !Object("z").propertyIsEnumerable(0);
		})
			? function (t) {
					return "String" == v(t) ? g.call(t, "") : Object(t);
			  }
			: Object,
		b = function (t) {
			if (null == t) throw TypeError("Can't call method on " + t);
			return t;
		},
		m = function (t) {
			return y(b(t));
		},
		x = function (t) {
			return "object" == typeof t ? null !== t : "function" == typeof t;
		},
		E = function (t, e) {
			if (!x(t)) return t;
			var r, n;
			if (e && "function" == typeof (r = t.toString) && !x((n = r.call(t))))
				return n;
			if ("function" == typeof (r = t.valueOf) && !x((n = r.call(t)))) return n;
			if (!e && "function" == typeof (r = t.toString) && !x((n = r.call(t))))
				return n;
			throw TypeError("Can't convert object to primitive value");
		},
		w = {}.hasOwnProperty,
		O = function (t, e) {
			return w.call(t, e);
		},
		_ = a.document,
		S = x(_) && x(_.createElement),
		A = function (t) {
			return S ? _.createElement(t) : {};
		},
		k =
			!l &&
			!c(function () {
				return (
					7 !=
					Object.defineProperty(A("div"), "a", {
						get: function () {
							return 7;
						},
					}).a
				);
			}),
		L = Object.getOwnPropertyDescriptor,
		M = {
			f: l
				? L
				: function (t, e) {
						if (((t = m(t)), (e = E(e, !0)), k))
							try {
								return L(t, e);
							} catch (t) {}
						if (O(t, e)) return d(!h.f.call(t, e), t[e]);
				  },
		},
		T = function (t) {
			if (!x(t)) throw TypeError(String(t) + " is not an object");
			return t;
		},
		j = Object.defineProperty,
		R = {
			f: l
				? j
				: function (t, e, r) {
						if ((T(t), (e = E(e, !0)), T(r), k))
							try {
								return j(t, e, r);
							} catch (t) {}
						if ("get" in r || "set" in r)
							throw TypeError("Accessors not supported");
						return "value" in r && (t[e] = r.value), t;
				  },
		},
		W = l
			? function (t, e, r) {
					return R.f(t, e, d(1, r));
			  }
			: function (t, e, r) {
					return (t[e] = r), t;
			  },
		z = function (t, e) {
			try {
				W(a, t, e);
			} catch (r) {
				a[t] = e;
			}
			return e;
		},
		C = e(function (t) {
			var e = a["__core-js_shared__"] || z("__core-js_shared__", {});
			(t.exports = function (t, r) {
				return e[t] || (e[t] = void 0 !== r ? r : {});
			})("versions", []).push({
				version: "3.2.1",
				mode: "global",
				copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
			});
		}),
		N = C("native-function-to-string", Function.toString),
		I = a.WeakMap,
		D = "function" == typeof I && /native code/.test(N.call(I)),
		P = 0,
		V = Math.random(),
		F = function (t) {
			return (
				"Symbol(" +
				String(void 0 === t ? "" : t) +
				")_" +
				(++P + V).toString(36)
			);
		},
		B = C("keys"),
		H = function (t) {
			return B[t] || (B[t] = F(t));
		},
		q = {},
		$ = a.WeakMap;
	if (D) {
		var X = new $(),
			Y = X.get,
			G = X.has,
			U = X.set;
		(r = function (t, e) {
			return U.call(X, t, e), e;
		}),
			(n = function (t) {
				return Y.call(X, t) || {};
			}),
			(i = function (t) {
				return G.call(X, t);
			});
	} else {
		var Q = H("state");
		(q[Q] = !0),
			(r = function (t, e) {
				return W(t, Q, e), e;
			}),
			(n = function (t) {
				return O(t, Q) ? t[Q] : {};
			}),
			(i = function (t) {
				return O(t, Q);
			});
	}
	var K = {
			set: r,
			get: n,
			has: i,
			enforce: function (t) {
				return i(t) ? n(t) : r(t, {});
			},
			getterFor: function (t) {
				return function (e) {
					var r;
					if (!x(e) || (r = n(e)).type !== t)
						throw TypeError("Incompatible receiver, " + t + " required");
					return r;
				};
			},
		},
		J = e(function (t) {
			var e = K.get,
				r = K.enforce,
				n = String(N).split("toString");
			C("inspectSource", function (t) {
				return N.call(t);
			}),
				(t.exports = function (t, e, i, o) {
					var s = !!o && !!o.unsafe,
						c = !!o && !!o.enumerable,
						l = !!o && !!o.noTargetGet;
					"function" == typeof i &&
						("string" != typeof e || O(i, "name") || W(i, "name", e),
						(r(i).source = n.join("string" == typeof e ? e : ""))),
						t !== a
							? (s ? !l && t[e] && (c = !0) : delete t[e],
							  c ? (t[e] = i) : W(t, e, i))
							: c
							? (t[e] = i)
							: z(e, i);
				})(Function.prototype, "toString", function () {
					return ("function" == typeof this && e(this).source) || N.call(this);
				});
		}),
		Z = a,
		tt = function (t) {
			return "function" == typeof t ? t : void 0;
		},
		et = function (t, e) {
			return arguments.length < 2
				? tt(Z[t]) || tt(a[t])
				: (Z[t] && Z[t][e]) || (a[t] && a[t][e]);
		},
		rt = Math.ceil,
		nt = Math.floor,
		it = function (t) {
			return isNaN((t = +t)) ? 0 : (t > 0 ? nt : rt)(t);
		},
		ot = Math.min,
		st = function (t) {
			return t > 0 ? ot(it(t), 9007199254740991) : 0;
		},
		at = Math.max,
		ct = Math.min,
		lt = function (t) {
			return function (e, r, n) {
				var i,
					o = m(e),
					s = st(o.length),
					a = (function (t, e) {
						var r = it(t);
						return r < 0 ? at(r + e, 0) : ct(r, e);
					})(n, s);
				if (t && r != r) {
					for (; s > a; ) if ((i = o[a++]) != i) return !0;
				} else
					for (; s > a; a++)
						if ((t || a in o) && o[a] === r) return t || a || 0;
				return !t && -1;
			};
		},
		ut = { includes: lt(!0), indexOf: lt(!1) }.indexOf,
		ft = function (t, e) {
			var r,
				n = m(t),
				i = 0,
				o = [];
			for (r in n) !O(q, r) && O(n, r) && o.push(r);
			for (; e.length > i; ) O(n, (r = e[i++])) && (~ut(o, r) || o.push(r));
			return o;
		},
		ht = [
			"constructor",
			"hasOwnProperty",
			"isPrototypeOf",
			"propertyIsEnumerable",
			"toLocaleString",
			"toString",
			"valueOf",
		],
		dt = ht.concat("length", "prototype"),
		pt = {
			f:
				Object.getOwnPropertyNames ||
				function (t) {
					return ft(t, dt);
				},
		},
		vt = { f: Object.getOwnPropertySymbols },
		gt =
			et("Reflect", "ownKeys") ||
			function (t) {
				var e = pt.f(T(t)),
					r = vt.f;
				return r ? e.concat(r(t)) : e;
			},
		yt = function (t, e) {
			for (var r = gt(e), n = R.f, i = M.f, o = 0; o < r.length; o++) {
				var s = r[o];
				O(t, s) || n(t, s, i(e, s));
			}
		},
		bt = /#|\.prototype\./,
		mt = function (t, e) {
			var r = Et[xt(t)];
			return r == Ot || (r != wt && ("function" == typeof e ? c(e) : !!e));
		},
		xt = (mt.normalize = function (t) {
			return String(t).replace(bt, ".").toLowerCase();
		}),
		Et = (mt.data = {}),
		wt = (mt.NATIVE = "N"),
		Ot = (mt.POLYFILL = "P"),
		_t = mt,
		St = M.f,
		At = function (t, e) {
			var r,
				n,
				i,
				o,
				s,
				c = t.target,
				l = t.global,
				u = t.stat;
			if ((r = l ? a : u ? a[c] || z(c, {}) : (a[c] || {}).prototype))
				for (n in e) {
					if (
						((o = e[n]),
						(i = t.noTargetGet ? (s = St(r, n)) && s.value : r[n]),
						!_t(l ? n : c + (u ? "." : "#") + n, t.forced) && void 0 !== i)
					) {
						if (typeof o == typeof i) continue;
						yt(o, i);
					}
					(t.sham || (i && i.sham)) && W(o, "sham", !0), J(r, n, o, t);
				}
		},
		kt = function (t) {
			if ("function" != typeof t)
				throw TypeError(String(t) + " is not a function");
			return t;
		},
		Lt = function (t, e, r) {
			if ((kt(t), void 0 === e)) return t;
			switch (r) {
				case 0:
					return function () {
						return t.call(e);
					};
				case 1:
					return function (r) {
						return t.call(e, r);
					};
				case 2:
					return function (r, n) {
						return t.call(e, r, n);
					};
				case 3:
					return function (r, n, i) {
						return t.call(e, r, n, i);
					};
			}
			return function () {
				return t.apply(e, arguments);
			};
		},
		Mt = function (t) {
			return Object(b(t));
		},
		Tt =
			Array.isArray ||
			function (t) {
				return "Array" == v(t);
			},
		jt =
			!!Object.getOwnPropertySymbols &&
			!c(function () {
				return !String(Symbol());
			}),
		Rt = a.Symbol,
		Wt = C("wks"),
		zt = function (t) {
			return Wt[t] || (Wt[t] = (jt && Rt[t]) || (jt ? Rt : F)("Symbol." + t));
		},
		Ct = zt("species"),
		Nt = function (t, e) {
			var r;
			return (
				Tt(t) &&
					("function" != typeof (r = t.constructor) ||
					(r !== Array && !Tt(r.prototype))
						? x(r) && null === (r = r[Ct]) && (r = void 0)
						: (r = void 0)),
				new (void 0 === r ? Array : r)(0 === e ? 0 : e)
			);
		},
		It = [].push,
		Dt = function (t) {
			var e = 1 == t,
				r = 2 == t,
				n = 3 == t,
				i = 4 == t,
				o = 6 == t,
				s = 5 == t || o;
			return function (a, c, l, u) {
				for (
					var f,
						h,
						d = Mt(a),
						p = y(d),
						v = Lt(c, l, 3),
						g = st(p.length),
						b = 0,
						m = u || Nt,
						x = e ? m(a, g) : r ? m(a, 0) : void 0;
					g > b;
					b++
				)
					if ((s || b in p) && ((h = v((f = p[b]), b, d)), t))
						if (e) x[b] = h;
						else if (h)
							switch (t) {
								case 3:
									return !0;
								case 5:
									return f;
								case 6:
									return b;
								case 2:
									It.call(x, f);
							}
						else if (i) return !1;
				return o ? -1 : n || i ? i : x;
			};
		},
		Pt = {
			forEach: Dt(0),
			map: Dt(1),
			filter: Dt(2),
			some: Dt(3),
			every: Dt(4),
			find: Dt(5),
			findIndex: Dt(6),
		},
		Vt = function (t, e) {
			var r = [][t];
			return (
				!r ||
				!c(function () {
					r.call(
						null,
						e ||
							function () {
								throw 1;
							},
						1
					);
				})
			);
		},
		Ft = Pt.forEach,
		Bt = Vt("forEach")
			? function (t) {
					return Ft(this, t, arguments.length > 1 ? arguments[1] : void 0);
			  }
			: [].forEach;
	At({ target: "Array", proto: !0, forced: [].forEach != Bt }, { forEach: Bt });
	var Ht = {
		CSSRuleList: 0,
		CSSStyleDeclaration: 0,
		CSSValueList: 0,
		ClientRectList: 0,
		DOMRectList: 0,
		DOMStringList: 0,
		DOMTokenList: 1,
		DataTransferItemList: 0,
		FileList: 0,
		HTMLAllCollection: 0,
		HTMLCollection: 0,
		HTMLFormElement: 0,
		HTMLSelectElement: 0,
		MediaList: 0,
		MimeTypeArray: 0,
		NamedNodeMap: 0,
		NodeList: 1,
		PaintRequestList: 0,
		Plugin: 0,
		PluginArray: 0,
		SVGLengthList: 0,
		SVGNumberList: 0,
		SVGPathSegList: 0,
		SVGPointList: 0,
		SVGStringList: 0,
		SVGTransformList: 0,
		SourceBufferList: 0,
		StyleSheetList: 0,
		TextTrackCueList: 0,
		TextTrackList: 0,
		TouchList: 0,
	};
	for (var qt in Ht) {
		var $t = a[qt],
			Xt = $t && $t.prototype;
		if (Xt && Xt.forEach !== Bt)
			try {
				W(Xt, "forEach", Bt);
			} catch (t) {
				Xt.forEach = Bt;
			}
	}
	var Yt = !(
			"undefined" == typeof window ||
			!window.document ||
			!window.document.createElement
		),
		Gt = zt("species"),
		Ut = Pt.filter;
	At(
		{
			target: "Array",
			proto: !0,
			forced: !(function (t) {
				return !c(function () {
					var e = [];
					return (
						((e.constructor = {})[Gt] = function () {
							return { foo: 1 };
						}),
						1 !== e[t](Boolean).foo
					);
				});
			})("filter"),
		},
		{
			filter: function (t) {
				return Ut(this, t, arguments.length > 1 ? arguments[1] : void 0);
			},
		}
	);
	var Qt =
			Object.keys ||
			function (t) {
				return ft(t, ht);
			},
		Kt = l
			? Object.defineProperties
			: function (t, e) {
					T(t);
					for (var r, n = Qt(e), i = n.length, o = 0; i > o; )
						R.f(t, (r = n[o++]), e[r]);
					return t;
			  },
		Jt = et("document", "documentElement"),
		Zt = H("IE_PROTO"),
		te = function () {},
		ee = function () {
			var t,
				e = A("iframe"),
				r = ht.length;
			for (
				e.style.display = "none",
					Jt.appendChild(e),
					e.src = String("javascript:"),
					(t = e.contentWindow.document).open(),
					t.write("<script>document.F=Object</script>"),
					t.close(),
					ee = t.F;
				r--;

			)
				delete ee.prototype[ht[r]];
			return ee();
		},
		re =
			Object.create ||
			function (t, e) {
				var r;
				return (
					null !== t
						? ((te.prototype = T(t)),
						  (r = new te()),
						  (te.prototype = null),
						  (r[Zt] = t))
						: (r = ee()),
					void 0 === e ? r : Kt(r, e)
				);
			};
	q[Zt] = !0;
	var ne = zt("unscopables"),
		ie = Array.prototype;
	null == ie[ne] && W(ie, ne, re(null));
	var oe,
		se,
		ae,
		ce = function (t) {
			ie[ne][t] = !0;
		},
		le = {},
		ue = !c(function () {
			function t() {}
			return (
				(t.prototype.constructor = null),
				Object.getPrototypeOf(new t()) !== t.prototype
			);
		}),
		fe = H("IE_PROTO"),
		he = Object.prototype,
		de = ue
			? Object.getPrototypeOf
			: function (t) {
					return (
						(t = Mt(t)),
						O(t, fe)
							? t[fe]
							: "function" == typeof t.constructor && t instanceof t.constructor
							? t.constructor.prototype
							: t instanceof Object
							? he
							: null
					);
			  },
		pe = zt("iterator"),
		ve = !1;
	[].keys &&
		("next" in (ae = [].keys())
			? (se = de(de(ae))) !== Object.prototype && (oe = se)
			: (ve = !0)),
		null == oe && (oe = {}),
		O(oe, pe) ||
			W(oe, pe, function () {
				return this;
			});
	var ge = { IteratorPrototype: oe, BUGGY_SAFARI_ITERATORS: ve },
		ye = R.f,
		be = zt("toStringTag"),
		me = function (t, e, r) {
			t &&
				!O((t = r ? t : t.prototype), be) &&
				ye(t, be, { configurable: !0, value: e });
		},
		xe = ge.IteratorPrototype,
		Ee = function () {
			return this;
		},
		we =
			Object.setPrototypeOf ||
			("__proto__" in {}
				? (function () {
						var t,
							e = !1,
							r = {};
						try {
							(t = Object.getOwnPropertyDescriptor(
								Object.prototype,
								"__proto__"
							).set).call(r, []),
								(e = r instanceof Array);
						} catch (t) {}
						return function (r, n) {
							return (
								T(r),
								(function (t) {
									if (!x(t) && null !== t)
										throw TypeError(
											"Can't set " + String(t) + " as a prototype"
										);
								})(n),
								e ? t.call(r, n) : (r.__proto__ = n),
								r
							);
						};
				  })()
				: void 0),
		Oe = ge.IteratorPrototype,
		_e = ge.BUGGY_SAFARI_ITERATORS,
		Se = zt("iterator"),
		Ae = function () {
			return this;
		},
		ke = function (t, e, r, n, i, o, s) {
			!(function (t, e, r) {
				var n = e + " Iterator";
				(t.prototype = re(xe, { next: d(1, r) })), me(t, n, !1), (le[n] = Ee);
			})(r, e, n);
			var a,
				c,
				l,
				u = function (t) {
					if (t === i && g) return g;
					if (!_e && t in p) return p[t];
					switch (t) {
						case "keys":
						case "values":
						case "entries":
							return function () {
								return new r(this, t);
							};
					}
					return function () {
						return new r(this);
					};
				},
				f = e + " Iterator",
				h = !1,
				p = t.prototype,
				v = p[Se] || p["@@iterator"] || (i && p[i]),
				g = (!_e && v) || u(i),
				y = ("Array" == e && p.entries) || v;
			if (
				(y &&
					((a = de(y.call(new t()))),
					Oe !== Object.prototype &&
						a.next &&
						(de(a) !== Oe &&
							(we ? we(a, Oe) : "function" != typeof a[Se] && W(a, Se, Ae)),
						me(a, f, !0))),
				"values" == i &&
					v &&
					"values" !== v.name &&
					((h = !0),
					(g = function () {
						return v.call(this);
					})),
				p[Se] !== g && W(p, Se, g),
				(le[e] = g),
				i)
			)
				if (
					((c = {
						values: u("values"),
						keys: o ? g : u("keys"),
						entries: u("entries"),
					}),
					s)
				)
					for (l in c) (!_e && !h && l in p) || J(p, l, c[l]);
				else At({ target: e, proto: !0, forced: _e || h }, c);
			return c;
		},
		Le = K.set,
		Me = K.getterFor("Array Iterator"),
		Te = ke(
			Array,
			"Array",
			function (t, e) {
				Le(this, { type: "Array Iterator", target: m(t), index: 0, kind: e });
			},
			function () {
				var t = Me(this),
					e = t.target,
					r = t.kind,
					n = t.index++;
				return !e || n >= e.length
					? ((t.target = void 0), { value: void 0, done: !0 })
					: "keys" == r
					? { value: n, done: !1 }
					: "values" == r
					? { value: e[n], done: !1 }
					: { value: [n, e[n]], done: !1 };
			},
			"values"
		);
	(le.Arguments = le.Array), ce("keys"), ce("values"), ce("entries");
	var je = Object.assign,
		Re =
			!je ||
			c(function () {
				var t = {},
					e = {},
					r = Symbol();
				return (
					(t[r] = 7),
					"abcdefghijklmnopqrst".split("").forEach(function (t) {
						e[t] = t;
					}),
					7 != je({}, t)[r] || "abcdefghijklmnopqrst" != Qt(je({}, e)).join("")
				);
			})
				? function (t, e) {
						for (
							var r = Mt(t), n = arguments.length, i = 1, o = vt.f, s = h.f;
							n > i;

						)
							for (
								var a,
									c = y(arguments[i++]),
									u = o ? Qt(c).concat(o(c)) : Qt(c),
									f = u.length,
									d = 0;
								f > d;

							)
								(a = u[d++]), (l && !s.call(c, a)) || (r[a] = c[a]);
						return r;
				  }
				: je;
	At(
		{ target: "Object", stat: !0, forced: Object.assign !== Re },
		{ assign: Re }
	);
	var We = zt("toStringTag"),
		ze =
			"Arguments" ==
			v(
				(function () {
					return arguments;
				})()
			),
		Ce = function (t) {
			var e, r, n;
			return void 0 === t
				? "Undefined"
				: null === t
				? "Null"
				: "string" ==
				  typeof (r = (function (t, e) {
						try {
							return t[e];
						} catch (t) {}
				  })((e = Object(t)), We))
				? r
				: ze
				? v(e)
				: "Object" == (n = v(e)) && "function" == typeof e.callee
				? "Arguments"
				: n;
		},
		Ne = {};
	Ne[zt("toStringTag")] = "z";
	var Ie =
			"[object z]" !== String(Ne)
				? function () {
						return "[object " + Ce(this) + "]";
				  }
				: Ne.toString,
		De = Object.prototype;
	Ie !== De.toString && J(De, "toString", Ie, { unsafe: !0 });
	var Pe = "\t\n\v\f\r                　\u2028\u2029\ufeff",
		Ve = "[" + Pe + "]",
		Fe = RegExp("^" + Ve + Ve + "*"),
		Be = RegExp(Ve + Ve + "*$"),
		He = function (t) {
			return function (e) {
				var r = String(b(e));
				return (
					1 & t && (r = r.replace(Fe, "")), 2 & t && (r = r.replace(Be, "")), r
				);
			};
		},
		qe = { start: He(1), end: He(2), trim: He(3) }.trim,
		$e = a.parseInt,
		Xe = /^[+-]?0[Xx]/,
		Ye =
			8 !== $e(Pe + "08") || 22 !== $e(Pe + "0x16")
				? function (t, e) {
						var r = qe(String(t));
						return $e(r, e >>> 0 || (Xe.test(r) ? 16 : 10));
				  }
				: $e;
	At({ global: !0, forced: parseInt != Ye }, { parseInt: Ye });
	var Ge = function (t) {
			return function (e, r) {
				var n,
					i,
					o = String(b(e)),
					s = it(r),
					a = o.length;
				return s < 0 || s >= a
					? t
						? ""
						: void 0
					: (n = o.charCodeAt(s)) < 55296 ||
					  n > 56319 ||
					  s + 1 === a ||
					  (i = o.charCodeAt(s + 1)) < 56320 ||
					  i > 57343
					? t
						? o.charAt(s)
						: n
					: t
					? o.slice(s, s + 2)
					: i - 56320 + ((n - 55296) << 10) + 65536;
			};
		},
		Ue = { codeAt: Ge(!1), charAt: Ge(!0) },
		Qe = Ue.charAt,
		Ke = K.set,
		Je = K.getterFor("String Iterator");
	ke(
		String,
		"String",
		function (t) {
			Ke(this, { type: "String Iterator", string: String(t), index: 0 });
		},
		function () {
			var t,
				e = Je(this),
				r = e.string,
				n = e.index;
			return n >= r.length
				? { value: void 0, done: !0 }
				: ((t = Qe(r, n)), (e.index += t.length), { value: t, done: !1 });
		}
	);
	var Ze = function (t, e, r) {
			for (var n in e) J(t, n, e[n], r);
			return t;
		},
		tr = !c(function () {
			return Object.isExtensible(Object.preventExtensions({}));
		}),
		er = e(function (t) {
			var e = R.f,
				r = F("meta"),
				n = 0,
				i =
					Object.isExtensible ||
					function () {
						return !0;
					},
				o = function (t) {
					e(t, r, { value: { objectID: "O" + ++n, weakData: {} } });
				},
				s = (t.exports = {
					REQUIRED: !1,
					fastKey: function (t, e) {
						if (!x(t))
							return "symbol" == typeof t
								? t
								: ("string" == typeof t ? "S" : "P") + t;
						if (!O(t, r)) {
							if (!i(t)) return "F";
							if (!e) return "E";
							o(t);
						}
						return t[r].objectID;
					},
					getWeakData: function (t, e) {
						if (!O(t, r)) {
							if (!i(t)) return !0;
							if (!e) return !1;
							o(t);
						}
						return t[r].weakData;
					},
					onFreeze: function (t) {
						return tr && s.REQUIRED && i(t) && !O(t, r) && o(t), t;
					},
				});
			q[r] = !0;
		}),
		rr = (er.REQUIRED, er.fastKey, er.getWeakData, er.onFreeze, zt("iterator")),
		nr = Array.prototype,
		ir = zt("iterator"),
		or = function (t, e, r, n) {
			try {
				return n ? e(T(r)[0], r[1]) : e(r);
			} catch (e) {
				var i = t.return;
				throw (void 0 !== i && T(i.call(t)), e);
			}
		},
		sr = e(function (t) {
			var e = function (t, e) {
				(this.stopped = t), (this.result = e);
			};
			(t.exports = function (t, r, n, i, o) {
				var s,
					a,
					c,
					l,
					u,
					f,
					h,
					d = Lt(r, n, i ? 2 : 1);
				if (o) s = t;
				else {
					if (
						"function" !=
						typeof (a = (function (t) {
							if (null != t) return t[ir] || t["@@iterator"] || le[Ce(t)];
						})(t))
					)
						throw TypeError("Target is not iterable");
					if (void 0 !== (h = a) && (le.Array === h || nr[rr] === h)) {
						for (c = 0, l = st(t.length); l > c; c++)
							if (
								(u = i ? d(T((f = t[c]))[0], f[1]) : d(t[c])) &&
								u instanceof e
							)
								return u;
						return new e(!1);
					}
					s = a.call(t);
				}
				for (; !(f = s.next()).done; )
					if ((u = or(s, d, f.value, i)) && u instanceof e) return u;
				return new e(!1);
			}).stop = function (t) {
				return new e(!0, t);
			};
		}),
		ar = function (t, e, r) {
			if (!(t instanceof e))
				throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
			return t;
		},
		cr = zt("iterator"),
		lr = !1;
	try {
		var ur = 0,
			fr = {
				next: function () {
					return { done: !!ur++ };
				},
				return: function () {
					lr = !0;
				},
			};
		(fr[cr] = function () {
			return this;
		}),
			Array.from(fr, function () {
				throw 2;
			});
	} catch (t) {}
	var hr = function (t, e, r, n, i) {
			var o = a[t],
				s = o && o.prototype,
				l = o,
				u = n ? "set" : "add",
				f = {},
				h = function (t) {
					var e = s[t];
					J(
						s,
						t,
						"add" == t
							? function (t) {
									return e.call(this, 0 === t ? 0 : t), this;
							  }
							: "delete" == t
							? function (t) {
									return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t);
							  }
							: "get" == t
							? function (t) {
									return i && !x(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
							  }
							: "has" == t
							? function (t) {
									return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t);
							  }
							: function (t, r) {
									return e.call(this, 0 === t ? 0 : t, r), this;
							  }
					);
				};
			if (
				_t(
					t,
					"function" != typeof o ||
						!(
							i ||
							(s.forEach &&
								!c(function () {
									new o().entries().next();
								}))
						)
				)
			)
				(l = r.getConstructor(e, t, n, u)), (er.REQUIRED = !0);
			else if (_t(t, !0)) {
				var d = new l(),
					p = d[u](i ? {} : -0, 1) != d,
					v = c(function () {
						d.has(1);
					}),
					g = (function (t, e) {
						if (!e && !lr) return !1;
						var r = !1;
						try {
							var n = {};
							(n[cr] = function () {
								return {
									next: function () {
										return { done: (r = !0) };
									},
								};
							}),
								t(n);
						} catch (t) {}
						return r;
					})(function (t) {
						new o(t);
					}),
					y =
						!i &&
						c(function () {
							for (var t = new o(), e = 5; e--; ) t[u](e, e);
							return !t.has(-0);
						});
				g ||
					(((l = e(function (e, r) {
						ar(e, l, t);
						var i = (function (t, e, r) {
							var n, i;
							return (
								we &&
									"function" == typeof (n = e.constructor) &&
									n !== r &&
									x((i = n.prototype)) &&
									i !== r.prototype &&
									we(t, i),
								t
							);
						})(new o(), e, l);
						return null != r && sr(r, i[u], i, n), i;
					})).prototype = s),
					(s.constructor = l)),
					(v || y) && (h("delete"), h("has"), n && h("get")),
					(y || p) && h(u),
					i && s.clear && delete s.clear;
			}
			return (
				(f[t] = l),
				At({ global: !0, forced: l != o }, f),
				me(l, t),
				i || r.setStrong(l, t, n),
				l
			);
		},
		dr = er.getWeakData,
		pr = K.set,
		vr = K.getterFor,
		gr = Pt.find,
		yr = Pt.findIndex,
		br = 0,
		mr = function (t) {
			return t.frozen || (t.frozen = new xr());
		},
		xr = function () {
			this.entries = [];
		},
		Er = function (t, e) {
			return gr(t.entries, function (t) {
				return t[0] === e;
			});
		};
	xr.prototype = {
		get: function (t) {
			var e = Er(this, t);
			if (e) return e[1];
		},
		has: function (t) {
			return !!Er(this, t);
		},
		set: function (t, e) {
			var r = Er(this, t);
			r ? (r[1] = e) : this.entries.push([t, e]);
		},
		delete: function (t) {
			var e = yr(this.entries, function (e) {
				return e[0] === t;
			});
			return ~e && this.entries.splice(e, 1), !!~e;
		},
	};
	var wr = {
			getConstructor: function (t, e, r, n) {
				var i = t(function (t, o) {
						ar(t, i, e),
							pr(t, { type: e, id: br++, frozen: void 0 }),
							null != o && sr(o, t[n], t, r);
					}),
					o = vr(e),
					s = function (t, e, r) {
						var n = o(t),
							i = dr(T(e), !0);
						return !0 === i ? mr(n).set(e, r) : (i[n.id] = r), t;
					};
				return (
					Ze(i.prototype, {
						delete: function (t) {
							var e = o(this);
							if (!x(t)) return !1;
							var r = dr(t);
							return !0 === r
								? mr(e).delete(t)
								: r && O(r, e.id) && delete r[e.id];
						},
						has: function (t) {
							var e = o(this);
							if (!x(t)) return !1;
							var r = dr(t);
							return !0 === r ? mr(e).has(t) : r && O(r, e.id);
						},
					}),
					Ze(
						i.prototype,
						r
							? {
									get: function (t) {
										var e = o(this);
										if (x(t)) {
											var r = dr(t);
											return !0 === r ? mr(e).get(t) : r ? r[e.id] : void 0;
										}
									},
									set: function (t, e) {
										return s(this, t, e);
									},
							  }
							: {
									add: function (t) {
										return s(this, t, !0);
									},
							  }
					),
					i
				);
			},
		},
		Or =
			(e(function (t) {
				var e,
					r = K.enforce,
					n = !a.ActiveXObject && "ActiveXObject" in a,
					i = Object.isExtensible,
					o = function (t) {
						return function () {
							return t(this, arguments.length ? arguments[0] : void 0);
						};
					},
					s = (t.exports = hr("WeakMap", o, wr, !0, !0));
				if (D && n) {
					(e = wr.getConstructor(o, "WeakMap", !0)), (er.REQUIRED = !0);
					var c = s.prototype,
						l = c.delete,
						u = c.has,
						f = c.get,
						h = c.set;
					Ze(c, {
						delete: function (t) {
							if (x(t) && !i(t)) {
								var n = r(this);
								return (
									n.frozen || (n.frozen = new e()),
									l.call(this, t) || n.frozen.delete(t)
								);
							}
							return l.call(this, t);
						},
						has: function (t) {
							if (x(t) && !i(t)) {
								var n = r(this);
								return (
									n.frozen || (n.frozen = new e()),
									u.call(this, t) || n.frozen.has(t)
								);
							}
							return u.call(this, t);
						},
						get: function (t) {
							if (x(t) && !i(t)) {
								var n = r(this);
								return (
									n.frozen || (n.frozen = new e()),
									u.call(this, t) ? f.call(this, t) : n.frozen.get(t)
								);
							}
							return f.call(this, t);
						},
						set: function (t, n) {
							if (x(t) && !i(t)) {
								var o = r(this);
								o.frozen || (o.frozen = new e()),
									u.call(this, t) ? h.call(this, t, n) : o.frozen.set(t, n);
							} else h.call(this, t, n);
							return this;
						},
					});
				}
			}),
			zt("iterator")),
		_r = zt("toStringTag"),
		Sr = Te.values;
	for (var Ar in Ht) {
		var kr = a[Ar],
			Lr = kr && kr.prototype;
		if (Lr) {
			if (Lr[Or] !== Sr)
				try {
					W(Lr, Or, Sr);
				} catch (t) {
					Lr[Or] = Sr;
				}
			if ((Lr[_r] || W(Lr, _r, Ar), Ht[Ar]))
				for (var Mr in Te)
					if (Lr[Mr] !== Te[Mr])
						try {
							W(Lr, Mr, Te[Mr]);
						} catch (t) {
							Lr[Mr] = Te[Mr];
						}
		}
	}
	var Tr = "Expected a function",
		jr = NaN,
		Rr = "[object Symbol]",
		Wr = /^\s+|\s+$/g,
		zr = /^[-+]0x[0-9a-f]+$/i,
		Cr = /^0b[01]+$/i,
		Nr = /^0o[0-7]+$/i,
		Ir = parseInt,
		Dr = "object" == typeof t && t && t.Object === Object && t,
		Pr = "object" == typeof self && self && self.Object === Object && self,
		Vr = Dr || Pr || Function("return this")(),
		Fr = Object.prototype.toString,
		Br = Math.max,
		Hr = Math.min,
		qr = function () {
			return Vr.Date.now();
		};
	function $r(t, e, r) {
		var n,
			i,
			o,
			s,
			a,
			c,
			l = 0,
			u = !1,
			f = !1,
			h = !0;
		if ("function" != typeof t) throw new TypeError(Tr);
		function d(e) {
			var r = n,
				o = i;
			return (n = i = void 0), (l = e), (s = t.apply(o, r));
		}
		function p(t) {
			var r = t - c;
			return void 0 === c || r >= e || r < 0 || (f && t - l >= o);
		}
		function v() {
			var t = qr();
			if (p(t)) return g(t);
			a = setTimeout(
				v,
				(function (t) {
					var r = e - (t - c);
					return f ? Hr(r, o - (t - l)) : r;
				})(t)
			);
		}
		function g(t) {
			return (a = void 0), h && n ? d(t) : ((n = i = void 0), s);
		}
		function y() {
			var t = qr(),
				r = p(t);
			if (((n = arguments), (i = this), (c = t), r)) {
				if (void 0 === a)
					return (function (t) {
						return (l = t), (a = setTimeout(v, e)), u ? d(t) : s;
					})(c);
				if (f) return (a = setTimeout(v, e)), d(c);
			}
			return void 0 === a && (a = setTimeout(v, e)), s;
		}
		return (
			(e = Yr(e) || 0),
			Xr(r) &&
				((u = !!r.leading),
				(o = (f = "maxWait" in r) ? Br(Yr(r.maxWait) || 0, e) : o),
				(h = "trailing" in r ? !!r.trailing : h)),
			(y.cancel = function () {
				void 0 !== a && clearTimeout(a), (l = 0), (n = c = i = a = void 0);
			}),
			(y.flush = function () {
				return void 0 === a ? s : g(qr());
			}),
			y
		);
	}
	function Xr(t) {
		var e = typeof t;
		return !!t && ("object" == e || "function" == e);
	}
	function Yr(t) {
		if ("number" == typeof t) return t;
		if (
			(function (t) {
				return (
					"symbol" == typeof t ||
					((function (t) {
						return !!t && "object" == typeof t;
					})(t) &&
						Fr.call(t) == Rr)
				);
			})(t)
		)
			return jr;
		if (Xr(t)) {
			var e = "function" == typeof t.valueOf ? t.valueOf() : t;
			t = Xr(e) ? e + "" : e;
		}
		if ("string" != typeof t) return 0 === t ? t : +t;
		t = t.replace(Wr, "");
		var r = Cr.test(t);
		return r || Nr.test(t) ? Ir(t.slice(2), r ? 2 : 8) : zr.test(t) ? jr : +t;
	}
	var Gr = function (t, e, r) {
			var n = !0,
				i = !0;
			if ("function" != typeof t) throw new TypeError(Tr);
			return (
				Xr(r) &&
					((n = "leading" in r ? !!r.leading : n),
					(i = "trailing" in r ? !!r.trailing : i)),
				$r(t, e, { leading: n, maxWait: e, trailing: i })
			);
		},
		Ur = "Expected a function",
		Qr = NaN,
		Kr = "[object Symbol]",
		Jr = /^\s+|\s+$/g,
		Zr = /^[-+]0x[0-9a-f]+$/i,
		tn = /^0b[01]+$/i,
		en = /^0o[0-7]+$/i,
		rn = parseInt,
		nn = "object" == typeof t && t && t.Object === Object && t,
		on = "object" == typeof self && self && self.Object === Object && self,
		sn = nn || on || Function("return this")(),
		an = Object.prototype.toString,
		cn = Math.max,
		ln = Math.min,
		un = function () {
			return sn.Date.now();
		};
	function fn(t) {
		var e = typeof t;
		return !!t && ("object" == e || "function" == e);
	}
	function hn(t) {
		if ("number" == typeof t) return t;
		if (
			(function (t) {
				return (
					"symbol" == typeof t ||
					((function (t) {
						return !!t && "object" == typeof t;
					})(t) &&
						an.call(t) == Kr)
				);
			})(t)
		)
			return Qr;
		if (fn(t)) {
			var e = "function" == typeof t.valueOf ? t.valueOf() : t;
			t = fn(e) ? e + "" : e;
		}
		if ("string" != typeof t) return 0 === t ? t : +t;
		t = t.replace(Jr, "");
		var r = tn.test(t);
		return r || en.test(t) ? rn(t.slice(2), r ? 2 : 8) : Zr.test(t) ? Qr : +t;
	}
	var dn = function (t, e, r) {
			var n,
				i,
				o,
				s,
				a,
				c,
				l = 0,
				u = !1,
				f = !1,
				h = !0;
			if ("function" != typeof t) throw new TypeError(Ur);
			function d(e) {
				var r = n,
					o = i;
				return (n = i = void 0), (l = e), (s = t.apply(o, r));
			}
			function p(t) {
				var r = t - c;
				return void 0 === c || r >= e || r < 0 || (f && t - l >= o);
			}
			function v() {
				var t = un();
				if (p(t)) return g(t);
				a = setTimeout(
					v,
					(function (t) {
						var r = e - (t - c);
						return f ? ln(r, o - (t - l)) : r;
					})(t)
				);
			}
			function g(t) {
				return (a = void 0), h && n ? d(t) : ((n = i = void 0), s);
			}
			function y() {
				var t = un(),
					r = p(t);
				if (((n = arguments), (i = this), (c = t), r)) {
					if (void 0 === a)
						return (function (t) {
							return (l = t), (a = setTimeout(v, e)), u ? d(t) : s;
						})(c);
					if (f) return (a = setTimeout(v, e)), d(c);
				}
				return void 0 === a && (a = setTimeout(v, e)), s;
			}
			return (
				(e = hn(e) || 0),
				fn(r) &&
					((u = !!r.leading),
					(o = (f = "maxWait" in r) ? cn(hn(r.maxWait) || 0, e) : o),
					(h = "trailing" in r ? !!r.trailing : h)),
				(y.cancel = function () {
					void 0 !== a && clearTimeout(a), (l = 0), (n = c = i = a = void 0);
				}),
				(y.flush = function () {
					return void 0 === a ? s : g(un());
				}),
				y
			);
		},
		pn = "Expected a function",
		vn = "__lodash_hash_undefined__",
		gn = "[object Function]",
		yn = "[object GeneratorFunction]",
		bn = /^\[object .+?Constructor\]$/,
		mn = "object" == typeof t && t && t.Object === Object && t,
		xn = "object" == typeof self && self && self.Object === Object && self,
		En = mn || xn || Function("return this")();
	var wn = Array.prototype,
		On = Function.prototype,
		_n = Object.prototype,
		Sn = En["__core-js_shared__"],
		An = (function () {
			var t = /[^.]+$/.exec((Sn && Sn.keys && Sn.keys.IE_PROTO) || "");
			return t ? "Symbol(src)_1." + t : "";
		})(),
		kn = On.toString,
		Ln = _n.hasOwnProperty,
		Mn = _n.toString,
		Tn = RegExp(
			"^" +
				kn
					.call(Ln)
					.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
					.replace(
						/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
						"$1.*?"
					) +
				"$"
		),
		jn = wn.splice,
		Rn = Vn(En, "Map"),
		Wn = Vn(Object, "create");
	function zn(t) {
		var e = -1,
			r = t ? t.length : 0;
		for (this.clear(); ++e < r; ) {
			var n = t[e];
			this.set(n[0], n[1]);
		}
	}
	function Cn(t) {
		var e = -1,
			r = t ? t.length : 0;
		for (this.clear(); ++e < r; ) {
			var n = t[e];
			this.set(n[0], n[1]);
		}
	}
	function Nn(t) {
		var e = -1,
			r = t ? t.length : 0;
		for (this.clear(); ++e < r; ) {
			var n = t[e];
			this.set(n[0], n[1]);
		}
	}
	function In(t, e) {
		for (var r, n, i = t.length; i--; )
			if ((r = t[i][0]) === (n = e) || (r != r && n != n)) return i;
		return -1;
	}
	function Dn(t) {
		return (
			!(!Bn(t) || ((e = t), An && An in e)) &&
			((function (t) {
				var e = Bn(t) ? Mn.call(t) : "";
				return e == gn || e == yn;
			})(t) ||
			(function (t) {
				var e = !1;
				if (null != t && "function" != typeof t.toString)
					try {
						e = !!(t + "");
					} catch (t) {}
				return e;
			})(t)
				? Tn
				: bn
			).test(
				(function (t) {
					if (null != t) {
						try {
							return kn.call(t);
						} catch (t) {}
						try {
							return t + "";
						} catch (t) {}
					}
					return "";
				})(t)
			)
		);
		var e;
	}
	function Pn(t, e) {
		var r,
			n,
			i = t.__data__;
		return (
			"string" == (n = typeof (r = e)) ||
			"number" == n ||
			"symbol" == n ||
			"boolean" == n
				? "__proto__" !== r
				: null === r
		)
			? i["string" == typeof e ? "string" : "hash"]
			: i.map;
	}
	function Vn(t, e) {
		var r = (function (t, e) {
			return null == t ? void 0 : t[e];
		})(t, e);
		return Dn(r) ? r : void 0;
	}
	function Fn(t, e) {
		if ("function" != typeof t || (e && "function" != typeof e))
			throw new TypeError(pn);
		var r = function () {
			var n = arguments,
				i = e ? e.apply(this, n) : n[0],
				o = r.cache;
			if (o.has(i)) return o.get(i);
			var s = t.apply(this, n);
			return (r.cache = o.set(i, s)), s;
		};
		return (r.cache = new (Fn.Cache || Nn)()), r;
	}
	function Bn(t) {
		var e = typeof t;
		return !!t && ("object" == e || "function" == e);
	}
	(zn.prototype.clear = function () {
		this.__data__ = Wn ? Wn(null) : {};
	}),
		(zn.prototype.delete = function (t) {
			return this.has(t) && delete this.__data__[t];
		}),
		(zn.prototype.get = function (t) {
			var e = this.__data__;
			if (Wn) {
				var r = e[t];
				return r === vn ? void 0 : r;
			}
			return Ln.call(e, t) ? e[t] : void 0;
		}),
		(zn.prototype.has = function (t) {
			var e = this.__data__;
			return Wn ? void 0 !== e[t] : Ln.call(e, t);
		}),
		(zn.prototype.set = function (t, e) {
			return (this.__data__[t] = Wn && void 0 === e ? vn : e), this;
		}),
		(Cn.prototype.clear = function () {
			this.__data__ = [];
		}),
		(Cn.prototype.delete = function (t) {
			var e = this.__data__,
				r = In(e, t);
			return !(r < 0) && (r == e.length - 1 ? e.pop() : jn.call(e, r, 1), !0);
		}),
		(Cn.prototype.get = function (t) {
			var e = this.__data__,
				r = In(e, t);
			return r < 0 ? void 0 : e[r][1];
		}),
		(Cn.prototype.has = function (t) {
			return In(this.__data__, t) > -1;
		}),
		(Cn.prototype.set = function (t, e) {
			var r = this.__data__,
				n = In(r, t);
			return n < 0 ? r.push([t, e]) : (r[n][1] = e), this;
		}),
		(Nn.prototype.clear = function () {
			this.__data__ = {
				hash: new zn(),
				map: new (Rn || Cn)(),
				string: new zn(),
			};
		}),
		(Nn.prototype.delete = function (t) {
			return Pn(this, t).delete(t);
		}),
		(Nn.prototype.get = function (t) {
			return Pn(this, t).get(t);
		}),
		(Nn.prototype.has = function (t) {
			return Pn(this, t).has(t);
		}),
		(Nn.prototype.set = function (t, e) {
			return Pn(this, t).set(t, e), this;
		}),
		(Fn.Cache = Nn);
	var Hn = Fn,
		qn = (function () {
			if ("undefined" != typeof Map) return Map;
			function t(t, e) {
				var r = -1;
				return (
					t.some(function (t, n) {
						return t[0] === e && ((r = n), !0);
					}),
					r
				);
			}
			return (function () {
				function e() {
					this.__entries__ = [];
				}
				return (
					Object.defineProperty(e.prototype, "size", {
						get: function () {
							return this.__entries__.length;
						},
						enumerable: !0,
						configurable: !0,
					}),
					(e.prototype.get = function (e) {
						var r = t(this.__entries__, e),
							n = this.__entries__[r];
						return n && n[1];
					}),
					(e.prototype.set = function (e, r) {
						var n = t(this.__entries__, e);
						~n ? (this.__entries__[n][1] = r) : this.__entries__.push([e, r]);
					}),
					(e.prototype.delete = function (e) {
						var r = this.__entries__,
							n = t(r, e);
						~n && r.splice(n, 1);
					}),
					(e.prototype.has = function (e) {
						return !!~t(this.__entries__, e);
					}),
					(e.prototype.clear = function () {
						this.__entries__.splice(0);
					}),
					(e.prototype.forEach = function (t, e) {
						void 0 === e && (e = null);
						for (var r = 0, n = this.__entries__; r < n.length; r++) {
							var i = n[r];
							t.call(e, i[1], i[0]);
						}
					}),
					e
				);
			})();
		})(),
		$n =
			"undefined" != typeof window &&
			"undefined" != typeof document &&
			window.document === document,
		Xn =
			"undefined" != typeof global && global.Math === Math
				? global
				: "undefined" != typeof self && self.Math === Math
				? self
				: "undefined" != typeof window && window.Math === Math
				? window
				: Function("return this")(),
		Yn =
			"function" == typeof requestAnimationFrame
				? requestAnimationFrame.bind(Xn)
				: function (t) {
						return setTimeout(function () {
							return t(Date.now());
						}, 1e3 / 60);
				  },
		Gn = 2;
	var Un = 20,
		Qn = [
			"top",
			"right",
			"bottom",
			"left",
			"width",
			"height",
			"size",
			"weight",
		],
		Kn = "undefined" != typeof MutationObserver,
		Jn = (function () {
			function t() {
				(this.connected_ = !1),
					(this.mutationEventsAdded_ = !1),
					(this.mutationsObserver_ = null),
					(this.observers_ = []),
					(this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
					(this.refresh = (function (t, e) {
						var r = !1,
							n = !1,
							i = 0;
						function o() {
							r && ((r = !1), t()), n && a();
						}
						function s() {
							Yn(o);
						}
						function a() {
							var t = Date.now();
							if (r) {
								if (t - i < Gn) return;
								n = !0;
							} else (r = !0), (n = !1), setTimeout(s, e);
							i = t;
						}
						return a;
					})(this.refresh.bind(this), Un));
			}
			return (
				(t.prototype.addObserver = function (t) {
					~this.observers_.indexOf(t) || this.observers_.push(t),
						this.connected_ || this.connect_();
				}),
				(t.prototype.removeObserver = function (t) {
					var e = this.observers_,
						r = e.indexOf(t);
					~r && e.splice(r, 1),
						!e.length && this.connected_ && this.disconnect_();
				}),
				(t.prototype.refresh = function () {
					this.updateObservers_() && this.refresh();
				}),
				(t.prototype.updateObservers_ = function () {
					var t = this.observers_.filter(function (t) {
						return t.gatherActive(), t.hasActive();
					});
					return (
						t.forEach(function (t) {
							return t.broadcastActive();
						}),
						t.length > 0
					);
				}),
				(t.prototype.connect_ = function () {
					$n &&
						!this.connected_ &&
						(document.addEventListener("transitionend", this.onTransitionEnd_),
						window.addEventListener("resize", this.refresh),
						Kn
							? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
							  this.mutationsObserver_.observe(document, {
									attributes: !0,
									childList: !0,
									characterData: !0,
									subtree: !0,
							  }))
							: (document.addEventListener("DOMSubtreeModified", this.refresh),
							  (this.mutationEventsAdded_ = !0)),
						(this.connected_ = !0));
				}),
				(t.prototype.disconnect_ = function () {
					$n &&
						this.connected_ &&
						(document.removeEventListener(
							"transitionend",
							this.onTransitionEnd_
						),
						window.removeEventListener("resize", this.refresh),
						this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
						this.mutationEventsAdded_ &&
							document.removeEventListener("DOMSubtreeModified", this.refresh),
						(this.mutationsObserver_ = null),
						(this.mutationEventsAdded_ = !1),
						(this.connected_ = !1));
				}),
				(t.prototype.onTransitionEnd_ = function (t) {
					var e = t.propertyName,
						r = void 0 === e ? "" : e;
					Qn.some(function (t) {
						return !!~r.indexOf(t);
					}) && this.refresh();
				}),
				(t.getInstance = function () {
					return this.instance_ || (this.instance_ = new t()), this.instance_;
				}),
				(t.instance_ = null),
				t
			);
		})(),
		Zn = function (t, e) {
			for (var r = 0, n = Object.keys(e); r < n.length; r++) {
				var i = n[r];
				Object.defineProperty(t, i, {
					value: e[i],
					enumerable: !1,
					writable: !1,
					configurable: !0,
				});
			}
			return t;
		},
		ti = function (t) {
			return (t && t.ownerDocument && t.ownerDocument.defaultView) || Xn;
		},
		ei = ai(0, 0, 0, 0);
	function ri(t) {
		return parseFloat(t) || 0;
	}
	function ni(t) {
		for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
		return e.reduce(function (e, r) {
			return e + ri(t["border-" + r + "-width"]);
		}, 0);
	}
	function ii(t) {
		var e = t.clientWidth,
			r = t.clientHeight;
		if (!e && !r) return ei;
		var n = ti(t).getComputedStyle(t),
			i = (function (t) {
				for (
					var e = {}, r = 0, n = ["top", "right", "bottom", "left"];
					r < n.length;
					r++
				) {
					var i = n[r],
						o = t["padding-" + i];
					e[i] = ri(o);
				}
				return e;
			})(n),
			o = i.left + i.right,
			s = i.top + i.bottom,
			a = ri(n.width),
			c = ri(n.height);
		if (
			("border-box" === n.boxSizing &&
				(Math.round(a + o) !== e && (a -= ni(n, "left", "right") + o),
				Math.round(c + s) !== r && (c -= ni(n, "top", "bottom") + s)),
			!(function (t) {
				return t === ti(t).document.documentElement;
			})(t))
		) {
			var l = Math.round(a + o) - e,
				u = Math.round(c + s) - r;
			1 !== Math.abs(l) && (a -= l), 1 !== Math.abs(u) && (c -= u);
		}
		return ai(i.left, i.top, a, c);
	}
	var oi =
		"undefined" != typeof SVGGraphicsElement
			? function (t) {
					return t instanceof ti(t).SVGGraphicsElement;
			  }
			: function (t) {
					return (
						t instanceof ti(t).SVGElement && "function" == typeof t.getBBox
					);
			  };
	function si(t) {
		return $n
			? oi(t)
				? (function (t) {
						var e = t.getBBox();
						return ai(0, 0, e.width, e.height);
				  })(t)
				: ii(t)
			: ei;
	}
	function ai(t, e, r, n) {
		return { x: t, y: e, width: r, height: n };
	}
	var ci = (function () {
			function t(t) {
				(this.broadcastWidth = 0),
					(this.broadcastHeight = 0),
					(this.contentRect_ = ai(0, 0, 0, 0)),
					(this.target = t);
			}
			return (
				(t.prototype.isActive = function () {
					var t = si(this.target);
					return (
						(this.contentRect_ = t),
						t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
					);
				}),
				(t.prototype.broadcastRect = function () {
					var t = this.contentRect_;
					return (
						(this.broadcastWidth = t.width),
						(this.broadcastHeight = t.height),
						t
					);
				}),
				t
			);
		})(),
		li = function (t, e) {
			var r,
				n,
				i,
				o,
				s,
				a,
				c,
				l =
					((n = (r = e).x),
					(i = r.y),
					(o = r.width),
					(s = r.height),
					(a =
						"undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
					(c = Object.create(a.prototype)),
					Zn(c, {
						x: n,
						y: i,
						width: o,
						height: s,
						top: i,
						right: n + o,
						bottom: s + i,
						left: n,
					}),
					c);
			Zn(this, { target: t, contentRect: l });
		},
		ui = (function () {
			function t(t, e, r) {
				if (
					((this.activeObservations_ = []),
					(this.observations_ = new qn()),
					"function" != typeof t)
				)
					throw new TypeError(
						"The callback provided as parameter 1 is not a function."
					);
				(this.callback_ = t), (this.controller_ = e), (this.callbackCtx_ = r);
			}
			return (
				(t.prototype.observe = function (t) {
					if (!arguments.length)
						throw new TypeError("1 argument required, but only 0 present.");
					if ("undefined" != typeof Element && Element instanceof Object) {
						if (!(t instanceof ti(t).Element))
							throw new TypeError('parameter 1 is not of type "Element".');
						var e = this.observations_;
						e.has(t) ||
							(e.set(t, new ci(t)),
							this.controller_.addObserver(this),
							this.controller_.refresh());
					}
				}),
				(t.prototype.unobserve = function (t) {
					if (!arguments.length)
						throw new TypeError("1 argument required, but only 0 present.");
					if ("undefined" != typeof Element && Element instanceof Object) {
						if (!(t instanceof ti(t).Element))
							throw new TypeError('parameter 1 is not of type "Element".');
						var e = this.observations_;
						e.has(t) &&
							(e.delete(t), e.size || this.controller_.removeObserver(this));
					}
				}),
				(t.prototype.disconnect = function () {
					this.clearActive(),
						this.observations_.clear(),
						this.controller_.removeObserver(this);
				}),
				(t.prototype.gatherActive = function () {
					var t = this;
					this.clearActive(),
						this.observations_.forEach(function (e) {
							e.isActive() && t.activeObservations_.push(e);
						});
				}),
				(t.prototype.broadcastActive = function () {
					if (this.hasActive()) {
						var t = this.callbackCtx_,
							e = this.activeObservations_.map(function (t) {
								return new li(t.target, t.broadcastRect());
							});
						this.callback_.call(t, e, t), this.clearActive();
					}
				}),
				(t.prototype.clearActive = function () {
					this.activeObservations_.splice(0);
				}),
				(t.prototype.hasActive = function () {
					return this.activeObservations_.length > 0;
				}),
				t
			);
		})(),
		fi = "undefined" != typeof WeakMap ? new WeakMap() : new qn(),
		hi = function t(e) {
			if (!(this instanceof t))
				throw new TypeError("Cannot call a class as a function.");
			if (!arguments.length)
				throw new TypeError("1 argument required, but only 0 present.");
			var r = Jn.getInstance(),
				n = new ui(e, r, this);
			fi.set(this, n);
		};
	["observe", "unobserve", "disconnect"].forEach(function (t) {
		hi.prototype[t] = function () {
			var e;
			return (e = fi.get(this))[t].apply(e, arguments);
		};
	});
	var di = void 0 !== Xn.ResizeObserver ? Xn.ResizeObserver : hi,
		pi = null,
		vi = null;
	function gi() {
		if (null === pi) {
			if ("undefined" == typeof document) return (pi = 0);
			var t = document.body,
				e = document.createElement("div");
			e.classList.add("simplebar-hide-scrollbar"), t.appendChild(e);
			var r = e.getBoundingClientRect().right;
			t.removeChild(e), (pi = r);
		}
		return pi;
	}
	Yt &&
		window.addEventListener("resize", function () {
			vi !== window.devicePixelRatio &&
				((vi = window.devicePixelRatio), (pi = null));
		});
	var yi = function (t) {
			return function (e, r, n, i) {
				kt(r);
				var o = Mt(e),
					s = y(o),
					a = st(o.length),
					c = t ? a - 1 : 0,
					l = t ? -1 : 1;
				if (n < 2)
					for (;;) {
						if (c in s) {
							(i = s[c]), (c += l);
							break;
						}
						if (((c += l), t ? c < 0 : a <= c))
							throw TypeError("Reduce of empty array with no initial value");
					}
				for (; t ? c >= 0 : a > c; c += l) c in s && (i = r(i, s[c], c, o));
				return i;
			};
		},
		bi = { left: yi(!1), right: yi(!0) }.left;
	At(
		{ target: "Array", proto: !0, forced: Vt("reduce") },
		{
			reduce: function (t) {
				return bi(
					this,
					t,
					arguments.length,
					arguments.length > 1 ? arguments[1] : void 0
				);
			},
		}
	);
	var mi = R.f,
		xi = Function.prototype,
		Ei = xi.toString,
		wi = /^\s*function ([^ (]*)/;
	!l ||
		"name" in xi ||
		mi(xi, "name", {
			configurable: !0,
			get: function () {
				try {
					return Ei.call(this).match(wi)[1];
				} catch (t) {
					return "";
				}
			},
		});
	var Oi,
		_i,
		Si = function () {
			var t = T(this),
				e = "";
			return (
				t.global && (e += "g"),
				t.ignoreCase && (e += "i"),
				t.multiline && (e += "m"),
				t.dotAll && (e += "s"),
				t.unicode && (e += "u"),
				t.sticky && (e += "y"),
				e
			);
		},
		Ai = RegExp.prototype.exec,
		ki = String.prototype.replace,
		Li = Ai,
		Mi =
			((Oi = /a/),
			(_i = /b*/g),
			Ai.call(Oi, "a"),
			Ai.call(_i, "a"),
			0 !== Oi.lastIndex || 0 !== _i.lastIndex),
		Ti = void 0 !== /()??/.exec("")[1];
	(Mi || Ti) &&
		(Li = function (t) {
			var e,
				r,
				n,
				i,
				o = this;
			return (
				Ti && (r = new RegExp("^" + o.source + "$(?!\\s)", Si.call(o))),
				Mi && (e = o.lastIndex),
				(n = Ai.call(o, t)),
				Mi && n && (o.lastIndex = o.global ? n.index + n[0].length : e),
				Ti &&
					n &&
					n.length > 1 &&
					ki.call(n[0], r, function () {
						for (i = 1; i < arguments.length - 2; i++)
							void 0 === arguments[i] && (n[i] = void 0);
					}),
				n
			);
		});
	var ji = Li;
	At({ target: "RegExp", proto: !0, forced: /./.exec !== ji }, { exec: ji });
	var Ri = zt("species"),
		Wi = !c(function () {
			var t = /./;
			return (
				(t.exec = function () {
					var t = [];
					return (t.groups = { a: "7" }), t;
				}),
				"7" !== "".replace(t, "$<a>")
			);
		}),
		zi = !c(function () {
			var t = /(?:)/,
				e = t.exec;
			t.exec = function () {
				return e.apply(this, arguments);
			};
			var r = "ab".split(t);
			return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
		}),
		Ci = function (t, e, r, n) {
			var i = zt(t),
				o = !c(function () {
					var e = {};
					return (
						(e[i] = function () {
							return 7;
						}),
						7 != ""[t](e)
					);
				}),
				s =
					o &&
					!c(function () {
						var e = !1,
							r = /a/;
						return (
							(r.exec = function () {
								return (e = !0), null;
							}),
							"split" === t &&
								((r.constructor = {}),
								(r.constructor[Ri] = function () {
									return r;
								})),
							r[i](""),
							!e
						);
					});
			if (!o || !s || ("replace" === t && !Wi) || ("split" === t && !zi)) {
				var a = /./[i],
					l = r(i, ""[t], function (t, e, r, n, i) {
						return e.exec === ji
							? o && !i
								? { done: !0, value: a.call(e, r, n) }
								: { done: !0, value: t.call(r, e, n) }
							: { done: !1 };
					}),
					u = l[0],
					f = l[1];
				J(String.prototype, t, u),
					J(
						RegExp.prototype,
						i,
						2 == e
							? function (t, e) {
									return f.call(t, this, e);
							  }
							: function (t) {
									return f.call(t, this);
							  }
					),
					n && W(RegExp.prototype[i], "sham", !0);
			}
		},
		Ni = Ue.charAt,
		Ii = function (t, e, r) {
			return e + (r ? Ni(t, e).length : 1);
		},
		Di = function (t, e) {
			var r = t.exec;
			if ("function" == typeof r) {
				var n = r.call(t, e);
				if ("object" != typeof n)
					throw TypeError(
						"RegExp exec method returned something other than an Object or null"
					);
				return n;
			}
			if ("RegExp" !== v(t))
				throw TypeError("RegExp#exec called on incompatible receiver");
			return ji.call(t, e);
		};
	Ci("match", 1, function (t, e, r) {
		return [
			function (e) {
				var r = b(this),
					n = null == e ? void 0 : e[t];
				return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r));
			},
			function (t) {
				var n = r(e, t, this);
				if (n.done) return n.value;
				var i = T(t),
					o = String(this);
				if (!i.global) return Di(i, o);
				var s = i.unicode;
				i.lastIndex = 0;
				for (var a, c = [], l = 0; null !== (a = Di(i, o)); ) {
					var u = String(a[0]);
					(c[l] = u),
						"" === u && (i.lastIndex = Ii(o, st(i.lastIndex), s)),
						l++;
				}
				return 0 === l ? null : c;
			},
		];
	});
	var Pi = Math.max,
		Vi = Math.min,
		Fi = Math.floor,
		Bi = /\$([$&'`]|\d\d?|<[^>]*>)/g,
		Hi = /\$([$&'`]|\d\d?)/g;
	Ci("replace", 2, function (t, e, r) {
		return [
			function (r, n) {
				var i = b(this),
					o = null == r ? void 0 : r[t];
				return void 0 !== o ? o.call(r, i, n) : e.call(String(i), r, n);
			},
			function (t, i) {
				var o = r(e, t, this, i);
				if (o.done) return o.value;
				var s = T(t),
					a = String(this),
					c = "function" == typeof i;
				c || (i = String(i));
				var l = s.global;
				if (l) {
					var u = s.unicode;
					s.lastIndex = 0;
				}
				for (var f = []; ; ) {
					var h = Di(s, a);
					if (null === h) break;
					if ((f.push(h), !l)) break;
					"" === String(h[0]) && (s.lastIndex = Ii(a, st(s.lastIndex), u));
				}
				for (var d, p = "", v = 0, g = 0; g < f.length; g++) {
					h = f[g];
					for (
						var y = String(h[0]),
							b = Pi(Vi(it(h.index), a.length), 0),
							m = [],
							x = 1;
						x < h.length;
						x++
					)
						m.push(void 0 === (d = h[x]) ? d : String(d));
					var E = h.groups;
					if (c) {
						var w = [y].concat(m, b, a);
						void 0 !== E && w.push(E);
						var O = String(i.apply(void 0, w));
					} else O = n(y, a, b, m, E, i);
					b >= v && ((p += a.slice(v, b) + O), (v = b + y.length));
				}
				return p + a.slice(v);
			},
		];
		function n(t, r, n, i, o, s) {
			var a = n + t.length,
				c = i.length,
				l = Hi;
			return (
				void 0 !== o && ((o = Mt(o)), (l = Bi)),
				e.call(s, l, function (e, s) {
					var l;
					switch (s.charAt(0)) {
						case "$":
							return "$";
						case "&":
							return t;
						case "`":
							return r.slice(0, n);
						case "'":
							return r.slice(a);
						case "<":
							l = o[s.slice(1, -1)];
							break;
						default:
							var u = +s;
							if (0 === u) return e;
							if (u > c) {
								var f = Fi(u / 10);
								return 0 === f
									? e
									: f <= c
									? void 0 === i[f - 1]
										? s.charAt(1)
										: i[f - 1] + s.charAt(1)
									: e;
							}
							l = i[u - 1];
					}
					return void 0 === l ? "" : l;
				})
			);
		}
	});
	var qi = function (t) {
		return Array.prototype.reduce.call(
			t,
			function (t, e) {
				var r = e.name.match(/data-simplebar-(.+)/);
				if (r) {
					var n = r[1].replace(/\W+(.)/g, function (t, e) {
						return e.toUpperCase();
					});
					switch (e.value) {
						case "true":
							t[n] = !0;
							break;
						case "false":
							t[n] = !1;
							break;
						case void 0:
							t[n] = !0;
							break;
						default:
							t[n] = e.value;
					}
				}
				return t;
			},
			{}
		);
	};
	function $i(t) {
		return t && t.ownerDocument && t.ownerDocument.defaultView
			? t.ownerDocument.defaultView
			: window;
	}
	function Xi(t) {
		return t && t.ownerDocument ? t.ownerDocument : document;
	}
	var Yi = (function () {
		function t(e, r) {
			var n = this;
			(this.onScroll = function () {
				var t = $i(n.el);
				n.scrollXTicking ||
					(t.requestAnimationFrame(n.scrollX), (n.scrollXTicking = !0)),
					n.scrollYTicking ||
						(t.requestAnimationFrame(n.scrollY), (n.scrollYTicking = !0));
			}),
				(this.scrollX = function () {
					n.axis.x.isOverflowing &&
						(n.showScrollbar("x"), n.positionScrollbar("x")),
						(n.scrollXTicking = !1);
				}),
				(this.scrollY = function () {
					n.axis.y.isOverflowing &&
						(n.showScrollbar("y"), n.positionScrollbar("y")),
						(n.scrollYTicking = !1);
				}),
				(this.onMouseEnter = function () {
					n.showScrollbar("x"), n.showScrollbar("y");
				}),
				(this.onMouseMove = function (t) {
					(n.mouseX = t.clientX),
						(n.mouseY = t.clientY),
						(n.axis.x.isOverflowing || n.axis.x.forceVisible) &&
							n.onMouseMoveForAxis("x"),
						(n.axis.y.isOverflowing || n.axis.y.forceVisible) &&
							n.onMouseMoveForAxis("y");
				}),
				(this.onMouseLeave = function () {
					n.onMouseMove.cancel(),
						(n.axis.x.isOverflowing || n.axis.x.forceVisible) &&
							n.onMouseLeaveForAxis("x"),
						(n.axis.y.isOverflowing || n.axis.y.forceVisible) &&
							n.onMouseLeaveForAxis("y"),
						(n.mouseX = -1),
						(n.mouseY = -1);
				}),
				(this.onWindowResize = function () {
					(n.scrollbarWidth = n.getScrollbarWidth()), n.hideNativeScrollbar();
				}),
				(this.hideScrollbars = function () {
					(n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect()),
						(n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect()),
						n.isWithinBounds(n.axis.y.track.rect) ||
							(n.axis.y.scrollbar.el.classList.remove(n.classNames.visible),
							(n.axis.y.isVisible = !1)),
						n.isWithinBounds(n.axis.x.track.rect) ||
							(n.axis.x.scrollbar.el.classList.remove(n.classNames.visible),
							(n.axis.x.isVisible = !1));
				}),
				(this.onPointerEvent = function (t) {
					var e, r;
					(n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect()),
						(n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect()),
						(n.axis.x.isOverflowing || n.axis.x.forceVisible) &&
							(e = n.isWithinBounds(n.axis.x.track.rect)),
						(n.axis.y.isOverflowing || n.axis.y.forceVisible) &&
							(r = n.isWithinBounds(n.axis.y.track.rect)),
						(e || r) &&
							(t.preventDefault(),
							t.stopPropagation(),
							"mousedown" === t.type &&
								(e &&
									((n.axis.x.scrollbar.rect =
										n.axis.x.scrollbar.el.getBoundingClientRect()),
									n.isWithinBounds(n.axis.x.scrollbar.rect)
										? n.onDragStart(t, "x")
										: n.onTrackClick(t, "x")),
								r &&
									((n.axis.y.scrollbar.rect =
										n.axis.y.scrollbar.el.getBoundingClientRect()),
									n.isWithinBounds(n.axis.y.scrollbar.rect)
										? n.onDragStart(t, "y")
										: n.onTrackClick(t, "y"))));
				}),
				(this.drag = function (e) {
					var r = n.axis[n.draggedAxis].track,
						i = r.rect[n.axis[n.draggedAxis].sizeAttr],
						o = n.axis[n.draggedAxis].scrollbar,
						s = n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr],
						a = parseInt(n.elStyles[n.axis[n.draggedAxis].sizeAttr], 10);
					e.preventDefault(), e.stopPropagation();
					var c =
						((("y" === n.draggedAxis ? e.pageY : e.pageX) -
							r.rect[n.axis[n.draggedAxis].offsetAttr] -
							n.axis[n.draggedAxis].dragOffset) /
							(i - o.size)) *
						(s - a);
					"x" === n.draggedAxis &&
						((c =
							n.isRtl && t.getRtlHelpers().isRtlScrollbarInverted
								? c - (i + o.size)
								: c),
						(c = n.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -c : c)),
						(n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = c);
				}),
				(this.onEndDrag = function (t) {
					var e = Xi(n.el),
						r = $i(n.el);
					t.preventDefault(),
						t.stopPropagation(),
						n.el.classList.remove(n.classNames.dragging),
						e.removeEventListener("mousemove", n.drag, !0),
						e.removeEventListener("mouseup", n.onEndDrag, !0),
						(n.removePreventClickId = r.setTimeout(function () {
							e.removeEventListener("click", n.preventClick, !0),
								e.removeEventListener("dblclick", n.preventClick, !0),
								(n.removePreventClickId = null);
						}));
				}),
				(this.preventClick = function (t) {
					t.preventDefault(), t.stopPropagation();
				}),
				(this.el = e),
				(this.minScrollbarWidth = 20),
				(this.options = Object.assign({}, t.defaultOptions, {}, r)),
				(this.classNames = Object.assign(
					{},
					t.defaultOptions.classNames,
					{},
					this.options.classNames
				)),
				(this.axis = {
					x: {
						scrollOffsetAttr: "scrollLeft",
						sizeAttr: "width",
						scrollSizeAttr: "scrollWidth",
						offsetSizeAttr: "offsetWidth",
						offsetAttr: "left",
						overflowAttr: "overflowX",
						dragOffset: 0,
						isOverflowing: !0,
						isVisible: !1,
						forceVisible: !1,
						track: {},
						scrollbar: {},
					},
					y: {
						scrollOffsetAttr: "scrollTop",
						sizeAttr: "height",
						scrollSizeAttr: "scrollHeight",
						offsetSizeAttr: "offsetHeight",
						offsetAttr: "top",
						overflowAttr: "overflowY",
						dragOffset: 0,
						isOverflowing: !0,
						isVisible: !1,
						forceVisible: !1,
						track: {},
						scrollbar: {},
					},
				}),
				(this.removePreventClickId = null),
				t.instances.has(this.el) ||
					((this.recalculate = Gr(this.recalculate.bind(this), 64)),
					(this.onMouseMove = Gr(this.onMouseMove.bind(this), 64)),
					(this.hideScrollbars = dn(
						this.hideScrollbars.bind(this),
						this.options.timeout
					)),
					(this.onWindowResize = dn(this.onWindowResize.bind(this), 64, {
						leading: !0,
					})),
					(t.getRtlHelpers = Hn(t.getRtlHelpers)),
					this.init());
		}
		(t.getRtlHelpers = function () {
			var e = document.createElement("div");
			e.innerHTML =
				'<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
			var r = e.firstElementChild;
			document.body.appendChild(r);
			var n = r.firstElementChild;
			r.scrollLeft = 0;
			var i = t.getOffset(r),
				o = t.getOffset(n);
			r.scrollLeft = 999;
			var s = t.getOffset(n);
			return {
				isRtlScrollingInverted: i.left !== o.left && o.left - s.left != 0,
				isRtlScrollbarInverted: i.left !== o.left,
			};
		}),
			(t.getOffset = function (t) {
				var e = t.getBoundingClientRect(),
					r = Xi(t),
					n = $i(t);
				return {
					top: e.top + (n.pageYOffset || r.documentElement.scrollTop),
					left: e.left + (n.pageXOffset || r.documentElement.scrollLeft),
				};
			});
		var e = t.prototype;
		return (
			(e.init = function () {
				t.instances.set(this.el, this),
					Yt &&
						(this.initDOM(),
						(this.scrollbarWidth = this.getScrollbarWidth()),
						this.recalculate(),
						this.initListeners());
			}),
			(e.initDOM = function () {
				var t = this;
				if (
					Array.prototype.filter.call(this.el.children, function (e) {
						return e.classList.contains(t.classNames.wrapper);
					}).length
				)
					(this.wrapperEl = this.el.querySelector(
						"." + this.classNames.wrapper
					)),
						(this.contentWrapperEl =
							this.options.scrollableNode ||
							this.el.querySelector("." + this.classNames.contentWrapper)),
						(this.contentEl =
							this.options.contentNode ||
							this.el.querySelector("." + this.classNames.contentEl)),
						(this.offsetEl = this.el.querySelector(
							"." + this.classNames.offset
						)),
						(this.maskEl = this.el.querySelector("." + this.classNames.mask)),
						(this.placeholderEl = this.findChild(
							this.wrapperEl,
							"." + this.classNames.placeholder
						)),
						(this.heightAutoObserverWrapperEl = this.el.querySelector(
							"." + this.classNames.heightAutoObserverWrapperEl
						)),
						(this.heightAutoObserverEl = this.el.querySelector(
							"." + this.classNames.heightAutoObserverEl
						)),
						(this.axis.x.track.el = this.findChild(
							this.el,
							"." + this.classNames.track + "." + this.classNames.horizontal
						)),
						(this.axis.y.track.el = this.findChild(
							this.el,
							"." + this.classNames.track + "." + this.classNames.vertical
						));
				else {
					for (
						this.wrapperEl = document.createElement("div"),
							this.contentWrapperEl = document.createElement("div"),
							this.offsetEl = document.createElement("div"),
							this.maskEl = document.createElement("div"),
							this.contentEl = document.createElement("div"),
							this.placeholderEl = document.createElement("div"),
							this.heightAutoObserverWrapperEl = document.createElement("div"),
							this.heightAutoObserverEl = document.createElement("div"),
							this.wrapperEl.classList.add(this.classNames.wrapper),
							this.contentWrapperEl.classList.add(
								this.classNames.contentWrapper
							),
							this.offsetEl.classList.add(this.classNames.offset),
							this.maskEl.classList.add(this.classNames.mask),
							this.contentEl.classList.add(this.classNames.contentEl),
							this.placeholderEl.classList.add(this.classNames.placeholder),
							this.heightAutoObserverWrapperEl.classList.add(
								this.classNames.heightAutoObserverWrapperEl
							),
							this.heightAutoObserverEl.classList.add(
								this.classNames.heightAutoObserverEl
							);
						this.el.firstChild;

					)
						this.contentEl.appendChild(this.el.firstChild);
					this.contentWrapperEl.appendChild(this.contentEl),
						this.offsetEl.appendChild(this.contentWrapperEl),
						this.maskEl.appendChild(this.offsetEl),
						this.heightAutoObserverWrapperEl.appendChild(
							this.heightAutoObserverEl
						),
						this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
						this.wrapperEl.appendChild(this.maskEl),
						this.wrapperEl.appendChild(this.placeholderEl),
						this.el.appendChild(this.wrapperEl);
				}
				if (!this.axis.x.track.el || !this.axis.y.track.el) {
					var e = document.createElement("div"),
						r = document.createElement("div");
					e.classList.add(this.classNames.track),
						r.classList.add(this.classNames.scrollbar),
						e.appendChild(r),
						(this.axis.x.track.el = e.cloneNode(!0)),
						this.axis.x.track.el.classList.add(this.classNames.horizontal),
						(this.axis.y.track.el = e.cloneNode(!0)),
						this.axis.y.track.el.classList.add(this.classNames.vertical),
						this.el.appendChild(this.axis.x.track.el),
						this.el.appendChild(this.axis.y.track.el);
				}
				(this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(
					"." + this.classNames.scrollbar
				)),
					(this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(
						"." + this.classNames.scrollbar
					)),
					this.options.autoHide ||
						(this.axis.x.scrollbar.el.classList.add(this.classNames.visible),
						this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),
					this.el.setAttribute("data-simplebar", "init");
			}),
			(e.initListeners = function () {
				var t = this,
					e = $i(this.el);
				this.options.autoHide &&
					this.el.addEventListener("mouseenter", this.onMouseEnter),
					["mousedown", "click", "dblclick"].forEach(function (e) {
						t.el.addEventListener(e, t.onPointerEvent, !0);
					}),
					["touchstart", "touchend", "touchmove"].forEach(function (e) {
						t.el.addEventListener(e, t.onPointerEvent, {
							capture: !0,
							passive: !0,
						});
					}),
					this.el.addEventListener("mousemove", this.onMouseMove),
					this.el.addEventListener("mouseleave", this.onMouseLeave),
					this.contentWrapperEl.addEventListener("scroll", this.onScroll),
					e.addEventListener("resize", this.onWindowResize);
				var r = !1,
					n = e.ResizeObserver || di;
				(this.resizeObserver = new n(function () {
					r && t.recalculate();
				})),
					this.resizeObserver.observe(this.el),
					this.resizeObserver.observe(this.contentEl),
					e.requestAnimationFrame(function () {
						r = !0;
					}),
					(this.mutationObserver = new e.MutationObserver(this.recalculate)),
					this.mutationObserver.observe(this.contentEl, {
						childList: !0,
						subtree: !0,
						characterData: !0,
					});
			}),
			(e.recalculate = function () {
				var t = $i(this.el);
				(this.elStyles = t.getComputedStyle(this.el)),
					(this.isRtl = "rtl" === this.elStyles.direction);
				var e = this.heightAutoObserverEl.offsetHeight <= 1,
					r = this.heightAutoObserverEl.offsetWidth <= 1,
					n = this.contentEl.offsetWidth,
					i = this.contentWrapperEl.offsetWidth,
					o = this.elStyles.overflowX,
					s = this.elStyles.overflowY;
				(this.contentEl.style.padding =
					this.elStyles.paddingTop +
					" " +
					this.elStyles.paddingRight +
					" " +
					this.elStyles.paddingBottom +
					" " +
					this.elStyles.paddingLeft),
					(this.wrapperEl.style.margin =
						"-" +
						this.elStyles.paddingTop +
						" -" +
						this.elStyles.paddingRight +
						" -" +
						this.elStyles.paddingBottom +
						" -" +
						this.elStyles.paddingLeft);
				var a = this.contentEl.scrollHeight,
					c = this.contentEl.scrollWidth;
				(this.contentWrapperEl.style.height = e ? "auto" : "100%"),
					(this.placeholderEl.style.width = r ? n + "px" : "auto"),
					(this.placeholderEl.style.height = a + "px");
				var l = this.contentWrapperEl.offsetHeight;
				(this.axis.x.isOverflowing = c > n),
					(this.axis.y.isOverflowing = a > l),
					(this.axis.x.isOverflowing =
						"hidden" !== o && this.axis.x.isOverflowing),
					(this.axis.y.isOverflowing =
						"hidden" !== s && this.axis.y.isOverflowing),
					(this.axis.x.forceVisible =
						"x" === this.options.forceVisible ||
						!0 === this.options.forceVisible),
					(this.axis.y.forceVisible =
						"y" === this.options.forceVisible ||
						!0 === this.options.forceVisible),
					this.hideNativeScrollbar();
				var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
					f = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
				(this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > i - f),
					(this.axis.y.isOverflowing = this.axis.y.isOverflowing && a > l - u),
					(this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
					(this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
					(this.axis.x.scrollbar.el.style.width =
						this.axis.x.scrollbar.size + "px"),
					(this.axis.y.scrollbar.el.style.height =
						this.axis.y.scrollbar.size + "px"),
					this.positionScrollbar("x"),
					this.positionScrollbar("y"),
					this.toggleTrackVisibility("x"),
					this.toggleTrackVisibility("y");
			}),
			(e.getScrollbarSize = function (t) {
				if ((void 0 === t && (t = "y"), !this.axis[t].isOverflowing)) return 0;
				var e,
					r = this.contentEl[this.axis[t].scrollSizeAttr],
					n = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
					i = n / r;
				return (
					(e = Math.max(~~(i * n), this.options.scrollbarMinSize)),
					this.options.scrollbarMaxSize &&
						(e = Math.min(e, this.options.scrollbarMaxSize)),
					e
				);
			}),
			(e.positionScrollbar = function (e) {
				if ((void 0 === e && (e = "y"), this.axis[e].isOverflowing)) {
					var r = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
						n = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
						i = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
						o = this.axis[e].scrollbar,
						s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
						a =
							(s =
								"x" === e &&
								this.isRtl &&
								t.getRtlHelpers().isRtlScrollingInverted
									? -s
									: s) /
							(r - i),
						c = ~~((n - o.size) * a);
					(c =
						"x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted
							? c + (n - o.size)
							: c),
						(o.el.style.transform =
							"x" === e
								? "translate3d(" + c + "px, 0, 0)"
								: "translate3d(0, " + c + "px, 0)");
				}
			}),
			(e.toggleTrackVisibility = function (t) {
				void 0 === t && (t = "y");
				var e = this.axis[t].track.el,
					r = this.axis[t].scrollbar.el;
				this.axis[t].isOverflowing || this.axis[t].forceVisible
					? ((e.style.visibility = "visible"),
					  (this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll"))
					: ((e.style.visibility = "hidden"),
					  (this.contentWrapperEl.style[this.axis[t].overflowAttr] =
							"hidden")),
					this.axis[t].isOverflowing
						? (r.style.display = "block")
						: (r.style.display = "none");
			}),
			(e.hideNativeScrollbar = function () {
				(this.offsetEl.style[this.isRtl ? "left" : "right"] =
					this.axis.y.isOverflowing || this.axis.y.forceVisible
						? "-" + this.scrollbarWidth + "px"
						: 0),
					(this.offsetEl.style.bottom =
						this.axis.x.isOverflowing || this.axis.x.forceVisible
							? "-" + this.scrollbarWidth + "px"
							: 0);
			}),
			(e.onMouseMoveForAxis = function (t) {
				void 0 === t && (t = "y"),
					(this.axis[t].track.rect =
						this.axis[t].track.el.getBoundingClientRect()),
					(this.axis[t].scrollbar.rect =
						this.axis[t].scrollbar.el.getBoundingClientRect()),
					this.isWithinBounds(this.axis[t].scrollbar.rect)
						? this.axis[t].scrollbar.el.classList.add(this.classNames.hover)
						: this.axis[t].scrollbar.el.classList.remove(this.classNames.hover),
					this.isWithinBounds(this.axis[t].track.rect)
						? (this.showScrollbar(t),
						  this.axis[t].track.el.classList.add(this.classNames.hover))
						: this.axis[t].track.el.classList.remove(this.classNames.hover);
			}),
			(e.onMouseLeaveForAxis = function (t) {
				void 0 === t && (t = "y"),
					this.axis[t].track.el.classList.remove(this.classNames.hover),
					this.axis[t].scrollbar.el.classList.remove(this.classNames.hover);
			}),
			(e.showScrollbar = function (t) {
				void 0 === t && (t = "y");
				var e = this.axis[t].scrollbar.el;
				this.axis[t].isVisible ||
					(e.classList.add(this.classNames.visible),
					(this.axis[t].isVisible = !0)),
					this.options.autoHide && this.hideScrollbars();
			}),
			(e.onDragStart = function (t, e) {
				void 0 === e && (e = "y");
				var r = Xi(this.el),
					n = $i(this.el),
					i = this.axis[e].scrollbar,
					o = "y" === e ? t.pageY : t.pageX;
				(this.axis[e].dragOffset = o - i.rect[this.axis[e].offsetAttr]),
					(this.draggedAxis = e),
					this.el.classList.add(this.classNames.dragging),
					r.addEventListener("mousemove", this.drag, !0),
					r.addEventListener("mouseup", this.onEndDrag, !0),
					null === this.removePreventClickId
						? (r.addEventListener("click", this.preventClick, !0),
						  r.addEventListener("dblclick", this.preventClick, !0))
						: (n.clearTimeout(this.removePreventClickId),
						  (this.removePreventClickId = null));
			}),
			(e.onTrackClick = function (t, e) {
				var r = this;
				if ((void 0 === e && (e = "y"), this.options.clickOnTrack)) {
					var n = $i(this.el);
					this.axis[e].scrollbar.rect =
						this.axis[e].scrollbar.el.getBoundingClientRect();
					var i = this.axis[e].scrollbar.rect[this.axis[e].offsetAttr],
						o = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
						s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
						a = ("y" === e ? this.mouseY - i : this.mouseX - i) < 0 ? -1 : 1,
						c = -1 === a ? s - o : s + o;
					!(function t() {
						var i, o;
						-1 === a
							? s > c &&
							  ((s -= r.options.clickOnTrackSpeed),
							  r.contentWrapperEl.scrollTo(
									(((i = {})[r.axis[e].offsetAttr] = s), i)
							  ),
							  n.requestAnimationFrame(t))
							: s < c &&
							  ((s += r.options.clickOnTrackSpeed),
							  r.contentWrapperEl.scrollTo(
									(((o = {})[r.axis[e].offsetAttr] = s), o)
							  ),
							  n.requestAnimationFrame(t));
					})();
				}
			}),
			(e.getContentElement = function () {
				return this.contentEl;
			}),
			(e.getScrollElement = function () {
				return this.contentWrapperEl;
			}),
			(e.getScrollbarWidth = function () {
				try {
					return "none" ===
						getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
							.display ||
						"scrollbarWidth" in document.documentElement.style ||
						"-ms-overflow-style" in document.documentElement.style
						? 0
						: gi();
				} catch (t) {
					return gi();
				}
			}),
			(e.removeListeners = function () {
				var t = this,
					e = $i(this.el);
				this.options.autoHide &&
					this.el.removeEventListener("mouseenter", this.onMouseEnter),
					["mousedown", "click", "dblclick"].forEach(function (e) {
						t.el.removeEventListener(e, t.onPointerEvent, !0);
					}),
					["touchstart", "touchend", "touchmove"].forEach(function (e) {
						t.el.removeEventListener(e, t.onPointerEvent, {
							capture: !0,
							passive: !0,
						});
					}),
					this.el.removeEventListener("mousemove", this.onMouseMove),
					this.el.removeEventListener("mouseleave", this.onMouseLeave),
					this.contentWrapperEl &&
						this.contentWrapperEl.removeEventListener("scroll", this.onScroll),
					e.removeEventListener("resize", this.onWindowResize),
					this.mutationObserver && this.mutationObserver.disconnect(),
					this.resizeObserver && this.resizeObserver.disconnect(),
					this.recalculate.cancel(),
					this.onMouseMove.cancel(),
					this.hideScrollbars.cancel(),
					this.onWindowResize.cancel();
			}),
			(e.unMount = function () {
				this.removeListeners(), t.instances.delete(this.el);
			}),
			(e.isWithinBounds = function (t) {
				return (
					this.mouseX >= t.left &&
					this.mouseX <= t.left + t.width &&
					this.mouseY >= t.top &&
					this.mouseY <= t.top + t.height
				);
			}),
			(e.findChild = function (t, e) {
				var r =
					t.matches ||
					t.webkitMatchesSelector ||
					t.mozMatchesSelector ||
					t.msMatchesSelector;
				return Array.prototype.filter.call(t.children, function (t) {
					return r.call(t, e);
				})[0];
			}),
			t
		);
	})();
	return (
		(Yi.defaultOptions = {
			autoHide: !0,
			forceVisible: !1,
			clickOnTrack: !0,
			clickOnTrackSpeed: 40,
			classNames: {
				contentEl: "simplebar-content",
				contentWrapper: "simplebar-content-wrapper",
				offset: "simplebar-offset",
				mask: "simplebar-mask",
				wrapper: "simplebar-wrapper",
				placeholder: "simplebar-placeholder",
				scrollbar: "simplebar-scrollbar",
				track: "simplebar-track",
				heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
				heightAutoObserverEl: "simplebar-height-auto-observer",
				visible: "simplebar-visible",
				horizontal: "simplebar-horizontal",
				vertical: "simplebar-vertical",
				hover: "simplebar-hover",
				dragging: "simplebar-dragging",
			},
			scrollbarMinSize: 25,
			scrollbarMaxSize: 0,
			timeout: 1e3,
		}),
		(Yi.instances = new WeakMap()),
		(Yi.initDOMLoadedElements = function () {
			document.removeEventListener(
				"DOMContentLoaded",
				this.initDOMLoadedElements
			),
				window.removeEventListener("load", this.initDOMLoadedElements),
				Array.prototype.forEach.call(
					document.querySelectorAll("[data-simplebar]"),
					function (t) {
						"init" === t.getAttribute("data-simplebar") ||
							Yi.instances.has(t) ||
							new Yi(t, qi(t.attributes));
					}
				);
		}),
		(Yi.removeObserver = function () {
			this.globalObserver.disconnect();
		}),
		(Yi.initHtmlApi = function () {
			(this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
				"undefined" != typeof MutationObserver &&
					((this.globalObserver = new MutationObserver(Yi.handleMutations)),
					this.globalObserver.observe(document, {
						childList: !0,
						subtree: !0,
					})),
				"complete" === document.readyState ||
				("loading" !== document.readyState &&
					!document.documentElement.doScroll)
					? window.setTimeout(this.initDOMLoadedElements)
					: (document.addEventListener(
							"DOMContentLoaded",
							this.initDOMLoadedElements
					  ),
					  window.addEventListener("load", this.initDOMLoadedElements));
		}),
		(Yi.handleMutations = function (t) {
			t.forEach(function (t) {
				Array.prototype.forEach.call(t.addedNodes, function (t) {
					1 === t.nodeType &&
						(t.hasAttribute("data-simplebar")
							? !Yi.instances.has(t) && new Yi(t, qi(t.attributes))
							: Array.prototype.forEach.call(
									t.querySelectorAll("[data-simplebar]"),
									function (t) {
										"init" === t.getAttribute("data-simplebar") ||
											Yi.instances.has(t) ||
											new Yi(t, qi(t.attributes));
									}
							  ));
				}),
					Array.prototype.forEach.call(t.removedNodes, function (t) {
						1 === t.nodeType &&
							(t.hasAttribute('[data-simplebar="init"]')
								? Yi.instances.has(t) && Yi.instances.get(t).unMount()
								: Array.prototype.forEach.call(
										t.querySelectorAll('[data-simplebar="init"]'),
										function (t) {
											Yi.instances.has(t) && Yi.instances.get(t).unMount();
										}
								  ));
					});
			});
		}),
		(Yi.getOptions = qi),
		Yt && Yi.initHtmlApi(),
		Yi
	);
});

/*!
 * Bootstrap v5.0.2 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
	"object" == typeof exports && "undefined" != typeof module
		? (module.exports = e())
		: "function" == typeof define && define.amd
		? define(e)
		: ((t =
				"undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
				e());
})(this, function () {
	"use strict";
	const t = {
			find: (t, e = document.documentElement) =>
				[].concat(...Element.prototype.querySelectorAll.call(e, t)),
			findOne: (t, e = document.documentElement) =>
				Element.prototype.querySelector.call(e, t),
			children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
			parents(t, e) {
				const i = [];
				let n = t.parentNode;
				for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
					n.matches(e) && i.push(n), (n = n.parentNode);
				return i;
			},
			prev(t, e) {
				let i = t.previousElementSibling;
				for (; i; ) {
					if (i.matches(e)) return [i];
					i = i.previousElementSibling;
				}
				return [];
			},
			next(t, e) {
				let i = t.nextElementSibling;
				for (; i; ) {
					if (i.matches(e)) return [i];
					i = i.nextElementSibling;
				}
				return [];
			},
		},
		e = (t) => {
			do {
				t += Math.floor(1e6 * Math.random());
			} while (document.getElementById(t));
			return t;
		},
		i = (t) => {
			let e = t.getAttribute("data-bs-target");
			if (!e || "#" === e) {
				let i = t.getAttribute("href");
				if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
				i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]),
					(e = i && "#" !== i ? i.trim() : null);
			}
			return e;
		},
		n = (t) => {
			const e = i(t);
			return e && document.querySelector(e) ? e : null;
		},
		s = (t) => {
			const e = i(t);
			return e ? document.querySelector(e) : null;
		},
		o = (t) => {
			t.dispatchEvent(new Event("transitionend"));
		},
		r = (t) =>
			!(!t || "object" != typeof t) &&
			(void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
		a = (e) =>
			r(e)
				? e.jquery
					? e[0]
					: e
				: "string" == typeof e && e.length > 0
				? t.findOne(e)
				: null,
		l = (t, e, i) => {
			Object.keys(i).forEach((n) => {
				const s = i[n],
					o = e[n],
					a =
						o && r(o)
							? "element"
							: null == (l = o)
							? "" + l
							: {}.toString
									.call(l)
									.match(/\s([a-z]+)/i)[1]
									.toLowerCase();
				var l;
				if (!new RegExp(s).test(a))
					throw new TypeError(
						`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`
					);
			});
		},
		c = (t) =>
			!(!r(t) || 0 === t.getClientRects().length) &&
			"visible" === getComputedStyle(t).getPropertyValue("visibility"),
		h = (t) =>
			!t ||
			t.nodeType !== Node.ELEMENT_NODE ||
			!!t.classList.contains("disabled") ||
			(void 0 !== t.disabled
				? t.disabled
				: t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
		d = (t) => {
			if (!document.documentElement.attachShadow) return null;
			if ("function" == typeof t.getRootNode) {
				const e = t.getRootNode();
				return e instanceof ShadowRoot ? e : null;
			}
			return t instanceof ShadowRoot
				? t
				: t.parentNode
				? d(t.parentNode)
				: null;
		},
		u = () => {},
		f = (t) => t.offsetHeight,
		p = () => {
			const { jQuery: t } = window;
			return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
		},
		m = [],
		g = () => "rtl" === document.documentElement.dir,
		_ = (t) => {
			var e;
			(e = () => {
				const e = p();
				if (e) {
					const i = t.NAME,
						n = e.fn[i];
					(e.fn[i] = t.jQueryInterface),
						(e.fn[i].Constructor = t),
						(e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
				}
			}),
				"loading" === document.readyState
					? (m.length ||
							document.addEventListener("DOMContentLoaded", () => {
								m.forEach((t) => t());
							}),
					  m.push(e))
					: e();
		},
		b = (t) => {
			"function" == typeof t && t();
		},
		v = (t, e, i = !0) => {
			if (!i) return void b(t);
			const n =
				((t) => {
					if (!t) return 0;
					let { transitionDuration: e, transitionDelay: i } =
						window.getComputedStyle(t);
					const n = Number.parseFloat(e),
						s = Number.parseFloat(i);
					return n || s
						? ((e = e.split(",")[0]),
						  (i = i.split(",")[0]),
						  1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
						: 0;
				})(e) + 5;
			let s = !1;
			const r = ({ target: i }) => {
				i === e && ((s = !0), e.removeEventListener("transitionend", r), b(t));
			};
			e.addEventListener("transitionend", r),
				setTimeout(() => {
					s || o(e);
				}, n);
		},
		y = (t, e, i, n) => {
			let s = t.indexOf(e);
			if (-1 === s) return t[!i && n ? t.length - 1 : 0];
			const o = t.length;
			return (
				(s += i ? 1 : -1),
				n && (s = (s + o) % o),
				t[Math.max(0, Math.min(s, o - 1))]
			);
		},
		w = /[^.]*(?=\..*)\.|.*/,
		E = /\..*/,
		A = /::\d+$/,
		T = {};
	let O = 1;
	const C = { mouseenter: "mouseover", mouseleave: "mouseout" },
		k = /^(mouseenter|mouseleave)/i,
		L = new Set([
			"click",
			"dblclick",
			"mouseup",
			"mousedown",
			"contextmenu",
			"mousewheel",
			"DOMMouseScroll",
			"mouseover",
			"mouseout",
			"mousemove",
			"selectstart",
			"selectend",
			"keydown",
			"keypress",
			"keyup",
			"orientationchange",
			"touchstart",
			"touchmove",
			"touchend",
			"touchcancel",
			"pointerdown",
			"pointermove",
			"pointerup",
			"pointerleave",
			"pointercancel",
			"gesturestart",
			"gesturechange",
			"gestureend",
			"focus",
			"blur",
			"change",
			"reset",
			"select",
			"submit",
			"focusin",
			"focusout",
			"load",
			"unload",
			"beforeunload",
			"resize",
			"move",
			"DOMContentLoaded",
			"readystatechange",
			"error",
			"abort",
			"scroll",
		]);
	function x(t, e) {
		return (e && `${e}::${O++}`) || t.uidEvent || O++;
	}
	function D(t) {
		const e = x(t);
		return (t.uidEvent = e), (T[e] = T[e] || {}), T[e];
	}
	function S(t, e, i = null) {
		const n = Object.keys(t);
		for (let s = 0, o = n.length; s < o; s++) {
			const o = t[n[s]];
			if (o.originalHandler === e && o.delegationSelector === i) return o;
		}
		return null;
	}
	function I(t, e, i) {
		const n = "string" == typeof e,
			s = n ? i : e;
		let o = M(t);
		return L.has(o) || (o = t), [n, s, o];
	}
	function N(t, e, i, n, s) {
		if ("string" != typeof e || !t) return;
		if ((i || ((i = n), (n = null)), k.test(e))) {
			const t = (t) =>
				function (e) {
					if (
						!e.relatedTarget ||
						(e.relatedTarget !== e.delegateTarget &&
							!e.delegateTarget.contains(e.relatedTarget))
					)
						return t.call(this, e);
				};
			n ? (n = t(n)) : (i = t(i));
		}
		const [o, r, a] = I(e, i, n),
			l = D(t),
			c = l[a] || (l[a] = {}),
			h = S(c, r, o ? i : null);
		if (h) return void (h.oneOff = h.oneOff && s);
		const d = x(r, e.replace(w, "")),
			u = o
				? (function (t, e, i) {
						return function n(s) {
							const o = t.querySelectorAll(e);
							for (let { target: r } = s; r && r !== this; r = r.parentNode)
								for (let a = o.length; a--; )
									if (o[a] === r)
										return (
											(s.delegateTarget = r),
											n.oneOff && P.off(t, s.type, e, i),
											i.apply(r, [s])
										);
							return null;
						};
				  })(t, i, n)
				: (function (t, e) {
						return function i(n) {
							return (
								(n.delegateTarget = t),
								i.oneOff && P.off(t, n.type, e),
								e.apply(t, [n])
							);
						};
				  })(t, i);
		(u.delegationSelector = o ? i : null),
			(u.originalHandler = r),
			(u.oneOff = s),
			(u.uidEvent = d),
			(c[d] = u),
			t.addEventListener(a, u, o);
	}
	function j(t, e, i, n, s) {
		const o = S(e[i], n, s);
		o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
	}
	function M(t) {
		return (t = t.replace(E, "")), C[t] || t;
	}
	const P = {
			on(t, e, i, n) {
				N(t, e, i, n, !1);
			},
			one(t, e, i, n) {
				N(t, e, i, n, !0);
			},
			off(t, e, i, n) {
				if ("string" != typeof e || !t) return;
				const [s, o, r] = I(e, i, n),
					a = r !== e,
					l = D(t),
					c = e.startsWith(".");
				if (void 0 !== o) {
					if (!l || !l[r]) return;
					return void j(t, l, r, o, s ? i : null);
				}
				c &&
					Object.keys(l).forEach((i) => {
						!(function (t, e, i, n) {
							const s = e[i] || {};
							Object.keys(s).forEach((o) => {
								if (o.includes(n)) {
									const n = s[o];
									j(t, e, i, n.originalHandler, n.delegationSelector);
								}
							});
						})(t, l, i, e.slice(1));
					});
				const h = l[r] || {};
				Object.keys(h).forEach((i) => {
					const n = i.replace(A, "");
					if (!a || e.includes(n)) {
						const e = h[i];
						j(t, l, r, e.originalHandler, e.delegationSelector);
					}
				});
			},
			trigger(t, e, i) {
				if ("string" != typeof e || !t) return null;
				const n = p(),
					s = M(e),
					o = e !== s,
					r = L.has(s);
				let a,
					l = !0,
					c = !0,
					h = !1,
					d = null;
				return (
					o &&
						n &&
						((a = n.Event(e, i)),
						n(t).trigger(a),
						(l = !a.isPropagationStopped()),
						(c = !a.isImmediatePropagationStopped()),
						(h = a.isDefaultPrevented())),
					r
						? ((d = document.createEvent("HTMLEvents")), d.initEvent(s, l, !0))
						: (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
					void 0 !== i &&
						Object.keys(i).forEach((t) => {
							Object.defineProperty(d, t, { get: () => i[t] });
						}),
					h && d.preventDefault(),
					c && t.dispatchEvent(d),
					d.defaultPrevented && void 0 !== a && a.preventDefault(),
					d
				);
			},
		},
		H = new Map();
	var R = {
		set(t, e, i) {
			H.has(t) || H.set(t, new Map());
			const n = H.get(t);
			n.has(e) || 0 === n.size
				? n.set(e, i)
				: console.error(
						`Bootstrap doesn't allow more than one instance per element. Bound instance: ${
							Array.from(n.keys())[0]
						}.`
				  );
		},
		get: (t, e) => (H.has(t) && H.get(t).get(e)) || null,
		remove(t, e) {
			if (!H.has(t)) return;
			const i = H.get(t);
			i.delete(e), 0 === i.size && H.delete(t);
		},
	};
	class B {
		constructor(t) {
			(t = a(t)) &&
				((this._element = t),
				R.set(this._element, this.constructor.DATA_KEY, this));
		}
		dispose() {
			R.remove(this._element, this.constructor.DATA_KEY),
				P.off(this._element, this.constructor.EVENT_KEY),
				Object.getOwnPropertyNames(this).forEach((t) => {
					this[t] = null;
				});
		}
		_queueCallback(t, e, i = !0) {
			v(t, e, i);
		}
		static getInstance(t) {
			return R.get(t, this.DATA_KEY);
		}
		static getOrCreateInstance(t, e = {}) {
			return (
				this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
			);
		}
		static get VERSION() {
			return "5.0.2";
		}
		static get NAME() {
			throw new Error(
				'You have to implement the static method "NAME", for each component!'
			);
		}
		static get DATA_KEY() {
			return "bs." + this.NAME;
		}
		static get EVENT_KEY() {
			return "." + this.DATA_KEY;
		}
	}
	class W extends B {
		static get NAME() {
			return "alert";
		}
		close(t) {
			const e = t ? this._getRootElement(t) : this._element,
				i = this._triggerCloseEvent(e);
			null === i || i.defaultPrevented || this._removeElement(e);
		}
		_getRootElement(t) {
			return s(t) || t.closest(".alert");
		}
		_triggerCloseEvent(t) {
			return P.trigger(t, "close.bs.alert");
		}
		_removeElement(t) {
			t.classList.remove("show");
			const e = t.classList.contains("fade");
			this._queueCallback(() => this._destroyElement(t), t, e);
		}
		_destroyElement(t) {
			t.remove(), P.trigger(t, "closed.bs.alert");
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = W.getOrCreateInstance(this);
				"close" === t && e[t](this);
			});
		}
		static handleDismiss(t) {
			return function (e) {
				e && e.preventDefault(), t.close(this);
			};
		}
	}
	P.on(
		document,
		"click.bs.alert.data-api",
		'[data-bs-dismiss="alert"]',
		W.handleDismiss(new W())
	),
		_(W);
	class q extends B {
		static get NAME() {
			return "button";
		}
		toggle() {
			this._element.setAttribute(
				"aria-pressed",
				this._element.classList.toggle("active")
			);
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = q.getOrCreateInstance(this);
				"toggle" === t && e[t]();
			});
		}
	}
	function z(t) {
		return (
			"true" === t ||
			("false" !== t &&
				(t === Number(t).toString()
					? Number(t)
					: "" === t || "null" === t
					? null
					: t))
		);
	}
	function $(t) {
		return t.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase());
	}
	P.on(
		document,
		"click.bs.button.data-api",
		'[data-bs-toggle="button"]',
		(t) => {
			t.preventDefault();
			const e = t.target.closest('[data-bs-toggle="button"]');
			q.getOrCreateInstance(e).toggle();
		}
	),
		_(q);
	const U = {
			setDataAttribute(t, e, i) {
				t.setAttribute("data-bs-" + $(e), i);
			},
			removeDataAttribute(t, e) {
				t.removeAttribute("data-bs-" + $(e));
			},
			getDataAttributes(t) {
				if (!t) return {};
				const e = {};
				return (
					Object.keys(t.dataset)
						.filter((t) => t.startsWith("bs"))
						.forEach((i) => {
							let n = i.replace(/^bs/, "");
							(n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
								(e[n] = z(t.dataset[i]));
						}),
					e
				);
			},
			getDataAttribute: (t, e) => z(t.getAttribute("data-bs-" + $(e))),
			offset(t) {
				const e = t.getBoundingClientRect();
				return {
					top: e.top + document.body.scrollTop,
					left: e.left + document.body.scrollLeft,
				};
			},
			position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
		},
		F = {
			interval: 5e3,
			keyboard: !0,
			slide: !1,
			pause: "hover",
			wrap: !0,
			touch: !0,
		},
		V = {
			interval: "(number|boolean)",
			keyboard: "boolean",
			slide: "(boolean|string)",
			pause: "(string|boolean)",
			wrap: "boolean",
			touch: "boolean",
		},
		K = "next",
		X = "prev",
		Y = "left",
		Q = "right",
		G = { ArrowLeft: Q, ArrowRight: Y };
	class Z extends B {
		constructor(e, i) {
			super(e),
				(this._items = null),
				(this._interval = null),
				(this._activeElement = null),
				(this._isPaused = !1),
				(this._isSliding = !1),
				(this.touchTimeout = null),
				(this.touchStartX = 0),
				(this.touchDeltaX = 0),
				(this._config = this._getConfig(i)),
				(this._indicatorsElement = t.findOne(
					".carousel-indicators",
					this._element
				)),
				(this._touchSupported =
					"ontouchstart" in document.documentElement ||
					navigator.maxTouchPoints > 0),
				(this._pointerEvent = Boolean(window.PointerEvent)),
				this._addEventListeners();
		}
		static get Default() {
			return F;
		}
		static get NAME() {
			return "carousel";
		}
		next() {
			this._slide(K);
		}
		nextWhenVisible() {
			!document.hidden && c(this._element) && this.next();
		}
		prev() {
			this._slide(X);
		}
		pause(e) {
			e || (this._isPaused = !0),
				t.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
					(o(this._element), this.cycle(!0)),
				clearInterval(this._interval),
				(this._interval = null);
		}
		cycle(t) {
			t || (this._isPaused = !1),
				this._interval &&
					(clearInterval(this._interval), (this._interval = null)),
				this._config &&
					this._config.interval &&
					!this._isPaused &&
					(this._updateInterval(),
					(this._interval = setInterval(
						(document.visibilityState ? this.nextWhenVisible : this.next).bind(
							this
						),
						this._config.interval
					)));
		}
		to(e) {
			this._activeElement = t.findOne(".active.carousel-item", this._element);
			const i = this._getItemIndex(this._activeElement);
			if (e > this._items.length - 1 || e < 0) return;
			if (this._isSliding)
				return void P.one(this._element, "slid.bs.carousel", () => this.to(e));
			if (i === e) return this.pause(), void this.cycle();
			const n = e > i ? K : X;
			this._slide(n, this._items[e]);
		}
		_getConfig(t) {
			return (
				(t = {
					...F,
					...U.getDataAttributes(this._element),
					...("object" == typeof t ? t : {}),
				}),
				l("carousel", t, V),
				t
			);
		}
		_handleSwipe() {
			const t = Math.abs(this.touchDeltaX);
			if (t <= 40) return;
			const e = t / this.touchDeltaX;
			(this.touchDeltaX = 0), e && this._slide(e > 0 ? Q : Y);
		}
		_addEventListeners() {
			this._config.keyboard &&
				P.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
				"hover" === this._config.pause &&
					(P.on(this._element, "mouseenter.bs.carousel", (t) => this.pause(t)),
					P.on(this._element, "mouseleave.bs.carousel", (t) => this.cycle(t))),
				this._config.touch &&
					this._touchSupported &&
					this._addTouchEventListeners();
		}
		_addTouchEventListeners() {
			const e = (t) => {
					!this._pointerEvent ||
					("pen" !== t.pointerType && "touch" !== t.pointerType)
						? this._pointerEvent || (this.touchStartX = t.touches[0].clientX)
						: (this.touchStartX = t.clientX);
				},
				i = (t) => {
					this.touchDeltaX =
						t.touches && t.touches.length > 1
							? 0
							: t.touches[0].clientX - this.touchStartX;
				},
				n = (t) => {
					!this._pointerEvent ||
						("pen" !== t.pointerType && "touch" !== t.pointerType) ||
						(this.touchDeltaX = t.clientX - this.touchStartX),
						this._handleSwipe(),
						"hover" === this._config.pause &&
							(this.pause(),
							this.touchTimeout && clearTimeout(this.touchTimeout),
							(this.touchTimeout = setTimeout(
								(t) => this.cycle(t),
								500 + this._config.interval
							)));
				};
			t.find(".carousel-item img", this._element).forEach((t) => {
				P.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
			}),
				this._pointerEvent
					? (P.on(this._element, "pointerdown.bs.carousel", (t) => e(t)),
					  P.on(this._element, "pointerup.bs.carousel", (t) => n(t)),
					  this._element.classList.add("pointer-event"))
					: (P.on(this._element, "touchstart.bs.carousel", (t) => e(t)),
					  P.on(this._element, "touchmove.bs.carousel", (t) => i(t)),
					  P.on(this._element, "touchend.bs.carousel", (t) => n(t)));
		}
		_keydown(t) {
			if (/input|textarea/i.test(t.target.tagName)) return;
			const e = G[t.key];
			e && (t.preventDefault(), this._slide(e));
		}
		_getItemIndex(e) {
			return (
				(this._items =
					e && e.parentNode ? t.find(".carousel-item", e.parentNode) : []),
				this._items.indexOf(e)
			);
		}
		_getItemByOrder(t, e) {
			const i = t === K;
			return y(this._items, e, i, this._config.wrap);
		}
		_triggerSlideEvent(e, i) {
			const n = this._getItemIndex(e),
				s = this._getItemIndex(
					t.findOne(".active.carousel-item", this._element)
				);
			return P.trigger(this._element, "slide.bs.carousel", {
				relatedTarget: e,
				direction: i,
				from: s,
				to: n,
			});
		}
		_setActiveIndicatorElement(e) {
			if (this._indicatorsElement) {
				const i = t.findOne(".active", this._indicatorsElement);
				i.classList.remove("active"), i.removeAttribute("aria-current");
				const n = t.find("[data-bs-target]", this._indicatorsElement);
				for (let t = 0; t < n.length; t++)
					if (
						Number.parseInt(n[t].getAttribute("data-bs-slide-to"), 10) ===
						this._getItemIndex(e)
					) {
						n[t].classList.add("active"),
							n[t].setAttribute("aria-current", "true");
						break;
					}
			}
		}
		_updateInterval() {
			const e =
				this._activeElement ||
				t.findOne(".active.carousel-item", this._element);
			if (!e) return;
			const i = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
			i
				? ((this._config.defaultInterval =
						this._config.defaultInterval || this._config.interval),
				  (this._config.interval = i))
				: (this._config.interval =
						this._config.defaultInterval || this._config.interval);
		}
		_slide(e, i) {
			const n = this._directionToOrder(e),
				s = t.findOne(".active.carousel-item", this._element),
				o = this._getItemIndex(s),
				r = i || this._getItemByOrder(n, s),
				a = this._getItemIndex(r),
				l = Boolean(this._interval),
				c = n === K,
				h = c ? "carousel-item-start" : "carousel-item-end",
				d = c ? "carousel-item-next" : "carousel-item-prev",
				u = this._orderToDirection(n);
			if (r && r.classList.contains("active"))
				return void (this._isSliding = !1);
			if (this._isSliding) return;
			if (this._triggerSlideEvent(r, u).defaultPrevented) return;
			if (!s || !r) return;
			(this._isSliding = !0),
				l && this.pause(),
				this._setActiveIndicatorElement(r),
				(this._activeElement = r);
			const p = () => {
				P.trigger(this._element, "slid.bs.carousel", {
					relatedTarget: r,
					direction: u,
					from: o,
					to: a,
				});
			};
			if (this._element.classList.contains("slide")) {
				r.classList.add(d), f(r), s.classList.add(h), r.classList.add(h);
				const t = () => {
					r.classList.remove(h, d),
						r.classList.add("active"),
						s.classList.remove("active", d, h),
						(this._isSliding = !1),
						setTimeout(p, 0);
				};
				this._queueCallback(t, s, !0);
			} else s.classList.remove("active"), r.classList.add("active"), (this._isSliding = !1), p();
			l && this.cycle();
		}
		_directionToOrder(t) {
			return [Q, Y].includes(t)
				? g()
					? t === Y
						? X
						: K
					: t === Y
					? K
					: X
				: t;
		}
		_orderToDirection(t) {
			return [K, X].includes(t)
				? g()
					? t === X
						? Y
						: Q
					: t === X
					? Q
					: Y
				: t;
		}
		static carouselInterface(t, e) {
			const i = Z.getOrCreateInstance(t, e);
			let { _config: n } = i;
			"object" == typeof e && (n = { ...n, ...e });
			const s = "string" == typeof e ? e : n.slide;
			if ("number" == typeof e) i.to(e);
			else if ("string" == typeof s) {
				if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
				i[s]();
			} else n.interval && n.ride && (i.pause(), i.cycle());
		}
		static jQueryInterface(t) {
			return this.each(function () {
				Z.carouselInterface(this, t);
			});
		}
		static dataApiClickHandler(t) {
			const e = s(this);
			if (!e || !e.classList.contains("carousel")) return;
			const i = { ...U.getDataAttributes(e), ...U.getDataAttributes(this) },
				n = this.getAttribute("data-bs-slide-to");
			n && (i.interval = !1),
				Z.carouselInterface(e, i),
				n && Z.getInstance(e).to(n),
				t.preventDefault();
		}
	}
	P.on(
		document,
		"click.bs.carousel.data-api",
		"[data-bs-slide], [data-bs-slide-to]",
		Z.dataApiClickHandler
	),
		P.on(window, "load.bs.carousel.data-api", () => {
			const e = t.find('[data-bs-ride="carousel"]');
			for (let t = 0, i = e.length; t < i; t++)
				Z.carouselInterface(e[t], Z.getInstance(e[t]));
		}),
		_(Z);
	const J = { toggle: !0, parent: "" },
		tt = { toggle: "boolean", parent: "(string|element)" };
	class et extends B {
		constructor(e, i) {
			super(e),
				(this._isTransitioning = !1),
				(this._config = this._getConfig(i)),
				(this._triggerArray = t.find(
					`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`
				));
			const s = t.find('[data-bs-toggle="collapse"]');
			for (let e = 0, i = s.length; e < i; e++) {
				const i = s[e],
					o = n(i),
					r = t.find(o).filter((t) => t === this._element);
				null !== o &&
					r.length &&
					((this._selector = o), this._triggerArray.push(i));
			}
			(this._parent = this._config.parent ? this._getParent() : null),
				this._config.parent ||
					this._addAriaAndCollapsedClass(this._element, this._triggerArray),
				this._config.toggle && this.toggle();
		}
		static get Default() {
			return J;
		}
		static get NAME() {
			return "collapse";
		}
		toggle() {
			this._element.classList.contains("show") ? this.hide() : this.show();
		}
		show() {
			if (this._isTransitioning || this._element.classList.contains("show"))
				return;
			let e, i;
			this._parent &&
				((e = t
					.find(".show, .collapsing", this._parent)
					.filter((t) =>
						"string" == typeof this._config.parent
							? t.getAttribute("data-bs-parent") === this._config.parent
							: t.classList.contains("collapse")
					)),
				0 === e.length && (e = null));
			const n = t.findOne(this._selector);
			if (e) {
				const t = e.find((t) => n !== t);
				if (((i = t ? et.getInstance(t) : null), i && i._isTransitioning))
					return;
			}
			if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
			e &&
				e.forEach((t) => {
					n !== t && et.collapseInterface(t, "hide"),
						i || R.set(t, "bs.collapse", null);
				});
			const s = this._getDimension();
			this._element.classList.remove("collapse"),
				this._element.classList.add("collapsing"),
				(this._element.style[s] = 0),
				this._triggerArray.length &&
					this._triggerArray.forEach((t) => {
						t.classList.remove("collapsed"),
							t.setAttribute("aria-expanded", !0);
					}),
				this.setTransitioning(!0);
			const o = "scroll" + (s[0].toUpperCase() + s.slice(1));
			this._queueCallback(
				() => {
					this._element.classList.remove("collapsing"),
						this._element.classList.add("collapse", "show"),
						(this._element.style[s] = ""),
						this.setTransitioning(!1),
						P.trigger(this._element, "shown.bs.collapse");
				},
				this._element,
				!0
			),
				(this._element.style[s] = this._element[o] + "px");
		}
		hide() {
			if (this._isTransitioning || !this._element.classList.contains("show"))
				return;
			if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
			const t = this._getDimension();
			(this._element.style[t] =
				this._element.getBoundingClientRect()[t] + "px"),
				f(this._element),
				this._element.classList.add("collapsing"),
				this._element.classList.remove("collapse", "show");
			const e = this._triggerArray.length;
			if (e > 0)
				for (let t = 0; t < e; t++) {
					const e = this._triggerArray[t],
						i = s(e);
					i &&
						!i.classList.contains("show") &&
						(e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1));
				}
			this.setTransitioning(!0),
				(this._element.style[t] = ""),
				this._queueCallback(
					() => {
						this.setTransitioning(!1),
							this._element.classList.remove("collapsing"),
							this._element.classList.add("collapse"),
							P.trigger(this._element, "hidden.bs.collapse");
					},
					this._element,
					!0
				);
		}
		setTransitioning(t) {
			this._isTransitioning = t;
		}
		_getConfig(t) {
			return (
				((t = { ...J, ...t }).toggle = Boolean(t.toggle)),
				l("collapse", t, tt),
				t
			);
		}
		_getDimension() {
			return this._element.classList.contains("width") ? "width" : "height";
		}
		_getParent() {
			let { parent: e } = this._config;
			e = a(e);
			const i = `[data-bs-toggle="collapse"][data-bs-parent="${e}"]`;
			return (
				t.find(i, e).forEach((t) => {
					const e = s(t);
					this._addAriaAndCollapsedClass(e, [t]);
				}),
				e
			);
		}
		_addAriaAndCollapsedClass(t, e) {
			if (!t || !e.length) return;
			const i = t.classList.contains("show");
			e.forEach((t) => {
				i ? t.classList.remove("collapsed") : t.classList.add("collapsed"),
					t.setAttribute("aria-expanded", i);
			});
		}
		static collapseInterface(t, e) {
			let i = et.getInstance(t);
			const n = {
				...J,
				...U.getDataAttributes(t),
				...("object" == typeof e && e ? e : {}),
			};
			if (
				(!i &&
					n.toggle &&
					"string" == typeof e &&
					/show|hide/.test(e) &&
					(n.toggle = !1),
				i || (i = new et(t, n)),
				"string" == typeof e)
			) {
				if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
				i[e]();
			}
		}
		static jQueryInterface(t) {
			return this.each(function () {
				et.collapseInterface(this, t);
			});
		}
	}
	P.on(
		document,
		"click.bs.collapse.data-api",
		'[data-bs-toggle="collapse"]',
		function (e) {
			("A" === e.target.tagName ||
				(e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
				e.preventDefault();
			const i = U.getDataAttributes(this),
				s = n(this);
			t.find(s).forEach((t) => {
				const e = et.getInstance(t);
				let n;
				e
					? (null === e._parent &&
							"string" == typeof i.parent &&
							((e._config.parent = i.parent), (e._parent = e._getParent())),
					  (n = "toggle"))
					: (n = i),
					et.collapseInterface(t, n);
			});
		}
	),
		_(et);
	var it = "top",
		nt = "bottom",
		st = "right",
		ot = "left",
		rt = [it, nt, st, ot],
		at = rt.reduce(function (t, e) {
			return t.concat([e + "-start", e + "-end"]);
		}, []),
		lt = [].concat(rt, ["auto"]).reduce(function (t, e) {
			return t.concat([e, e + "-start", e + "-end"]);
		}, []),
		ct = [
			"beforeRead",
			"read",
			"afterRead",
			"beforeMain",
			"main",
			"afterMain",
			"beforeWrite",
			"write",
			"afterWrite",
		];
	function ht(t) {
		return t ? (t.nodeName || "").toLowerCase() : null;
	}
	function dt(t) {
		if (null == t) return window;
		if ("[object Window]" !== t.toString()) {
			var e = t.ownerDocument;
			return (e && e.defaultView) || window;
		}
		return t;
	}
	function ut(t) {
		return t instanceof dt(t).Element || t instanceof Element;
	}
	function ft(t) {
		return t instanceof dt(t).HTMLElement || t instanceof HTMLElement;
	}
	function pt(t) {
		return (
			"undefined" != typeof ShadowRoot &&
			(t instanceof dt(t).ShadowRoot || t instanceof ShadowRoot)
		);
	}
	var mt = {
		name: "applyStyles",
		enabled: !0,
		phase: "write",
		fn: function (t) {
			var e = t.state;
			Object.keys(e.elements).forEach(function (t) {
				var i = e.styles[t] || {},
					n = e.attributes[t] || {},
					s = e.elements[t];
				ft(s) &&
					ht(s) &&
					(Object.assign(s.style, i),
					Object.keys(n).forEach(function (t) {
						var e = n[t];
						!1 === e
							? s.removeAttribute(t)
							: s.setAttribute(t, !0 === e ? "" : e);
					}));
			});
		},
		effect: function (t) {
			var e = t.state,
				i = {
					popper: {
						position: e.options.strategy,
						left: "0",
						top: "0",
						margin: "0",
					},
					arrow: { position: "absolute" },
					reference: {},
				};
			return (
				Object.assign(e.elements.popper.style, i.popper),
				(e.styles = i),
				e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
				function () {
					Object.keys(e.elements).forEach(function (t) {
						var n = e.elements[t],
							s = e.attributes[t] || {},
							o = Object.keys(
								e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
							).reduce(function (t, e) {
								return (t[e] = ""), t;
							}, {});
						ft(n) &&
							ht(n) &&
							(Object.assign(n.style, o),
							Object.keys(s).forEach(function (t) {
								n.removeAttribute(t);
							}));
					});
				}
			);
		},
		requires: ["computeStyles"],
	};
	function gt(t) {
		return t.split("-")[0];
	}
	function _t(t) {
		var e = t.getBoundingClientRect();
		return {
			width: e.width,
			height: e.height,
			top: e.top,
			right: e.right,
			bottom: e.bottom,
			left: e.left,
			x: e.left,
			y: e.top,
		};
	}
	function bt(t) {
		var e = _t(t),
			i = t.offsetWidth,
			n = t.offsetHeight;
		return (
			Math.abs(e.width - i) <= 1 && (i = e.width),
			Math.abs(e.height - n) <= 1 && (n = e.height),
			{ x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
		);
	}
	function vt(t, e) {
		var i = e.getRootNode && e.getRootNode();
		if (t.contains(e)) return !0;
		if (i && pt(i)) {
			var n = e;
			do {
				if (n && t.isSameNode(n)) return !0;
				n = n.parentNode || n.host;
			} while (n);
		}
		return !1;
	}
	function yt(t) {
		return dt(t).getComputedStyle(t);
	}
	function wt(t) {
		return ["table", "td", "th"].indexOf(ht(t)) >= 0;
	}
	function Et(t) {
		return (
			(ut(t) ? t.ownerDocument : t.document) || window.document
		).documentElement;
	}
	function At(t) {
		return "html" === ht(t)
			? t
			: t.assignedSlot || t.parentNode || (pt(t) ? t.host : null) || Et(t);
	}
	function Tt(t) {
		return ft(t) && "fixed" !== yt(t).position ? t.offsetParent : null;
	}
	function Ot(t) {
		for (var e = dt(t), i = Tt(t); i && wt(i) && "static" === yt(i).position; )
			i = Tt(i);
		return i &&
			("html" === ht(i) || ("body" === ht(i) && "static" === yt(i).position))
			? e
			: i ||
					(function (t) {
						var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
						if (
							-1 !== navigator.userAgent.indexOf("Trident") &&
							ft(t) &&
							"fixed" === yt(t).position
						)
							return null;
						for (
							var i = At(t);
							ft(i) && ["html", "body"].indexOf(ht(i)) < 0;

						) {
							var n = yt(i);
							if (
								"none" !== n.transform ||
								"none" !== n.perspective ||
								"paint" === n.contain ||
								-1 !== ["transform", "perspective"].indexOf(n.willChange) ||
								(e && "filter" === n.willChange) ||
								(e && n.filter && "none" !== n.filter)
							)
								return i;
							i = i.parentNode;
						}
						return null;
					})(t) ||
					e;
	}
	function Ct(t) {
		return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
	}
	var kt = Math.max,
		Lt = Math.min,
		xt = Math.round;
	function Dt(t, e, i) {
		return kt(t, Lt(e, i));
	}
	function St(t) {
		return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
	}
	function It(t, e) {
		return e.reduce(function (e, i) {
			return (e[i] = t), e;
		}, {});
	}
	var Nt = {
			name: "arrow",
			enabled: !0,
			phase: "main",
			fn: function (t) {
				var e,
					i = t.state,
					n = t.name,
					s = t.options,
					o = i.elements.arrow,
					r = i.modifiersData.popperOffsets,
					a = gt(i.placement),
					l = Ct(a),
					c = [ot, st].indexOf(a) >= 0 ? "height" : "width";
				if (o && r) {
					var h = (function (t, e) {
							return St(
								"number" !=
									typeof (t =
										"function" == typeof t
											? t(
													Object.assign({}, e.rects, { placement: e.placement })
											  )
											: t)
									? t
									: It(t, rt)
							);
						})(s.padding, i),
						d = bt(o),
						u = "y" === l ? it : ot,
						f = "y" === l ? nt : st,
						p =
							i.rects.reference[c] +
							i.rects.reference[l] -
							r[l] -
							i.rects.popper[c],
						m = r[l] - i.rects.reference[l],
						g = Ot(o),
						_ = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
						b = p / 2 - m / 2,
						v = h[u],
						y = _ - d[c] - h[f],
						w = _ / 2 - d[c] / 2 + b,
						E = Dt(v, w, y),
						A = l;
					i.modifiersData[n] = (((e = {})[A] = E), (e.centerOffset = E - w), e);
				}
			},
			effect: function (t) {
				var e = t.state,
					i = t.options.element,
					n = void 0 === i ? "[data-popper-arrow]" : i;
				null != n &&
					("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
					vt(e.elements.popper, n) &&
					(e.elements.arrow = n);
			},
			requires: ["popperOffsets"],
			requiresIfExists: ["preventOverflow"],
		},
		jt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
	function Mt(t) {
		var e,
			i = t.popper,
			n = t.popperRect,
			s = t.placement,
			o = t.offsets,
			r = t.position,
			a = t.gpuAcceleration,
			l = t.adaptive,
			c = t.roundOffsets,
			h =
				!0 === c
					? (function (t) {
							var e = t.x,
								i = t.y,
								n = window.devicePixelRatio || 1;
							return { x: xt(xt(e * n) / n) || 0, y: xt(xt(i * n) / n) || 0 };
					  })(o)
					: "function" == typeof c
					? c(o)
					: o,
			d = h.x,
			u = void 0 === d ? 0 : d,
			f = h.y,
			p = void 0 === f ? 0 : f,
			m = o.hasOwnProperty("x"),
			g = o.hasOwnProperty("y"),
			_ = ot,
			b = it,
			v = window;
		if (l) {
			var y = Ot(i),
				w = "clientHeight",
				E = "clientWidth";
			y === dt(i) &&
				"static" !== yt((y = Et(i))).position &&
				((w = "scrollHeight"), (E = "scrollWidth")),
				(y = y),
				s === it && ((b = nt), (p -= y[w] - n.height), (p *= a ? 1 : -1)),
				s === ot && ((_ = st), (u -= y[E] - n.width), (u *= a ? 1 : -1));
		}
		var A,
			T = Object.assign({ position: r }, l && jt);
		return a
			? Object.assign(
					{},
					T,
					(((A = {})[b] = g ? "0" : ""),
					(A[_] = m ? "0" : ""),
					(A.transform =
						(v.devicePixelRatio || 1) < 2
							? "translate(" + u + "px, " + p + "px)"
							: "translate3d(" + u + "px, " + p + "px, 0)"),
					A)
			  )
			: Object.assign(
					{},
					T,
					(((e = {})[b] = g ? p + "px" : ""),
					(e[_] = m ? u + "px" : ""),
					(e.transform = ""),
					e)
			  );
	}
	var Pt = {
			name: "computeStyles",
			enabled: !0,
			phase: "beforeWrite",
			fn: function (t) {
				var e = t.state,
					i = t.options,
					n = i.gpuAcceleration,
					s = void 0 === n || n,
					o = i.adaptive,
					r = void 0 === o || o,
					a = i.roundOffsets,
					l = void 0 === a || a,
					c = {
						placement: gt(e.placement),
						popper: e.elements.popper,
						popperRect: e.rects.popper,
						gpuAcceleration: s,
					};
				null != e.modifiersData.popperOffsets &&
					(e.styles.popper = Object.assign(
						{},
						e.styles.popper,
						Mt(
							Object.assign({}, c, {
								offsets: e.modifiersData.popperOffsets,
								position: e.options.strategy,
								adaptive: r,
								roundOffsets: l,
							})
						)
					)),
					null != e.modifiersData.arrow &&
						(e.styles.arrow = Object.assign(
							{},
							e.styles.arrow,
							Mt(
								Object.assign({}, c, {
									offsets: e.modifiersData.arrow,
									position: "absolute",
									adaptive: !1,
									roundOffsets: l,
								})
							)
						)),
					(e.attributes.popper = Object.assign({}, e.attributes.popper, {
						"data-popper-placement": e.placement,
					}));
			},
			data: {},
		},
		Ht = { passive: !0 },
		Rt = {
			name: "eventListeners",
			enabled: !0,
			phase: "write",
			fn: function () {},
			effect: function (t) {
				var e = t.state,
					i = t.instance,
					n = t.options,
					s = n.scroll,
					o = void 0 === s || s,
					r = n.resize,
					a = void 0 === r || r,
					l = dt(e.elements.popper),
					c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
				return (
					o &&
						c.forEach(function (t) {
							t.addEventListener("scroll", i.update, Ht);
						}),
					a && l.addEventListener("resize", i.update, Ht),
					function () {
						o &&
							c.forEach(function (t) {
								t.removeEventListener("scroll", i.update, Ht);
							}),
							a && l.removeEventListener("resize", i.update, Ht);
					}
				);
			},
			data: {},
		},
		Bt = { left: "right", right: "left", bottom: "top", top: "bottom" };
	function Wt(t) {
		return t.replace(/left|right|bottom|top/g, function (t) {
			return Bt[t];
		});
	}
	var qt = { start: "end", end: "start" };
	function zt(t) {
		return t.replace(/start|end/g, function (t) {
			return qt[t];
		});
	}
	function $t(t) {
		var e = dt(t);
		return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
	}
	function Ut(t) {
		return _t(Et(t)).left + $t(t).scrollLeft;
	}
	function Ft(t) {
		var e = yt(t),
			i = e.overflow,
			n = e.overflowX,
			s = e.overflowY;
		return /auto|scroll|overlay|hidden/.test(i + s + n);
	}
	function Vt(t, e) {
		var i;
		void 0 === e && (e = []);
		var n = (function t(e) {
				return ["html", "body", "#document"].indexOf(ht(e)) >= 0
					? e.ownerDocument.body
					: ft(e) && Ft(e)
					? e
					: t(At(e));
			})(t),
			s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
			o = dt(n),
			r = s ? [o].concat(o.visualViewport || [], Ft(n) ? n : []) : n,
			a = e.concat(r);
		return s ? a : a.concat(Vt(At(r)));
	}
	function Kt(t) {
		return Object.assign({}, t, {
			left: t.x,
			top: t.y,
			right: t.x + t.width,
			bottom: t.y + t.height,
		});
	}
	function Xt(t, e) {
		return "viewport" === e
			? Kt(
					(function (t) {
						var e = dt(t),
							i = Et(t),
							n = e.visualViewport,
							s = i.clientWidth,
							o = i.clientHeight,
							r = 0,
							a = 0;
						return (
							n &&
								((s = n.width),
								(o = n.height),
								/^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
									((r = n.offsetLeft), (a = n.offsetTop))),
							{ width: s, height: o, x: r + Ut(t), y: a }
						);
					})(t)
			  )
			: ft(e)
			? (function (t) {
					var e = _t(t);
					return (
						(e.top = e.top + t.clientTop),
						(e.left = e.left + t.clientLeft),
						(e.bottom = e.top + t.clientHeight),
						(e.right = e.left + t.clientWidth),
						(e.width = t.clientWidth),
						(e.height = t.clientHeight),
						(e.x = e.left),
						(e.y = e.top),
						e
					);
			  })(e)
			: Kt(
					(function (t) {
						var e,
							i = Et(t),
							n = $t(t),
							s = null == (e = t.ownerDocument) ? void 0 : e.body,
							o = kt(
								i.scrollWidth,
								i.clientWidth,
								s ? s.scrollWidth : 0,
								s ? s.clientWidth : 0
							),
							r = kt(
								i.scrollHeight,
								i.clientHeight,
								s ? s.scrollHeight : 0,
								s ? s.clientHeight : 0
							),
							a = -n.scrollLeft + Ut(t),
							l = -n.scrollTop;
						return (
							"rtl" === yt(s || i).direction &&
								(a += kt(i.clientWidth, s ? s.clientWidth : 0) - o),
							{ width: o, height: r, x: a, y: l }
						);
					})(Et(t))
			  );
	}
	function Yt(t) {
		return t.split("-")[1];
	}
	function Qt(t) {
		var e,
			i = t.reference,
			n = t.element,
			s = t.placement,
			o = s ? gt(s) : null,
			r = s ? Yt(s) : null,
			a = i.x + i.width / 2 - n.width / 2,
			l = i.y + i.height / 2 - n.height / 2;
		switch (o) {
			case it:
				e = { x: a, y: i.y - n.height };
				break;
			case nt:
				e = { x: a, y: i.y + i.height };
				break;
			case st:
				e = { x: i.x + i.width, y: l };
				break;
			case ot:
				e = { x: i.x - n.width, y: l };
				break;
			default:
				e = { x: i.x, y: i.y };
		}
		var c = o ? Ct(o) : null;
		if (null != c) {
			var h = "y" === c ? "height" : "width";
			switch (r) {
				case "start":
					e[c] = e[c] - (i[h] / 2 - n[h] / 2);
					break;
				case "end":
					e[c] = e[c] + (i[h] / 2 - n[h] / 2);
			}
		}
		return e;
	}
	function Gt(t, e) {
		void 0 === e && (e = {});
		var i = e,
			n = i.placement,
			s = void 0 === n ? t.placement : n,
			o = i.boundary,
			r = void 0 === o ? "clippingParents" : o,
			a = i.rootBoundary,
			l = void 0 === a ? "viewport" : a,
			c = i.elementContext,
			h = void 0 === c ? "popper" : c,
			d = i.altBoundary,
			u = void 0 !== d && d,
			f = i.padding,
			p = void 0 === f ? 0 : f,
			m = St("number" != typeof p ? p : It(p, rt)),
			g = "popper" === h ? "reference" : "popper",
			_ = t.elements.reference,
			b = t.rects.popper,
			v = t.elements[u ? g : h],
			y = (function (t, e, i) {
				var n =
						"clippingParents" === e
							? (function (t) {
									var e = Vt(At(t)),
										i =
											["absolute", "fixed"].indexOf(yt(t).position) >= 0 &&
											ft(t)
												? Ot(t)
												: t;
									return ut(i)
										? e.filter(function (t) {
												return ut(t) && vt(t, i) && "body" !== ht(t);
										  })
										: [];
							  })(t)
							: [].concat(e),
					s = [].concat(n, [i]),
					o = s[0],
					r = s.reduce(function (e, i) {
						var n = Xt(t, i);
						return (
							(e.top = kt(n.top, e.top)),
							(e.right = Lt(n.right, e.right)),
							(e.bottom = Lt(n.bottom, e.bottom)),
							(e.left = kt(n.left, e.left)),
							e
						);
					}, Xt(t, o));
				return (
					(r.width = r.right - r.left),
					(r.height = r.bottom - r.top),
					(r.x = r.left),
					(r.y = r.top),
					r
				);
			})(ut(v) ? v : v.contextElement || Et(t.elements.popper), r, l),
			w = _t(_),
			E = Qt({ reference: w, element: b, strategy: "absolute", placement: s }),
			A = Kt(Object.assign({}, b, E)),
			T = "popper" === h ? A : w,
			O = {
				top: y.top - T.top + m.top,
				bottom: T.bottom - y.bottom + m.bottom,
				left: y.left - T.left + m.left,
				right: T.right - y.right + m.right,
			},
			C = t.modifiersData.offset;
		if ("popper" === h && C) {
			var k = C[s];
			Object.keys(O).forEach(function (t) {
				var e = [st, nt].indexOf(t) >= 0 ? 1 : -1,
					i = [it, nt].indexOf(t) >= 0 ? "y" : "x";
				O[t] += k[i] * e;
			});
		}
		return O;
	}
	function Zt(t, e) {
		void 0 === e && (e = {});
		var i = e,
			n = i.placement,
			s = i.boundary,
			o = i.rootBoundary,
			r = i.padding,
			a = i.flipVariations,
			l = i.allowedAutoPlacements,
			c = void 0 === l ? lt : l,
			h = Yt(n),
			d = h
				? a
					? at
					: at.filter(function (t) {
							return Yt(t) === h;
					  })
				: rt,
			u = d.filter(function (t) {
				return c.indexOf(t) >= 0;
			});
		0 === u.length && (u = d);
		var f = u.reduce(function (e, i) {
			return (
				(e[i] = Gt(t, {
					placement: i,
					boundary: s,
					rootBoundary: o,
					padding: r,
				})[gt(i)]),
				e
			);
		}, {});
		return Object.keys(f).sort(function (t, e) {
			return f[t] - f[e];
		});
	}
	var Jt = {
		name: "flip",
		enabled: !0,
		phase: "main",
		fn: function (t) {
			var e = t.state,
				i = t.options,
				n = t.name;
			if (!e.modifiersData[n]._skip) {
				for (
					var s = i.mainAxis,
						o = void 0 === s || s,
						r = i.altAxis,
						a = void 0 === r || r,
						l = i.fallbackPlacements,
						c = i.padding,
						h = i.boundary,
						d = i.rootBoundary,
						u = i.altBoundary,
						f = i.flipVariations,
						p = void 0 === f || f,
						m = i.allowedAutoPlacements,
						g = e.options.placement,
						_ = gt(g),
						b =
							l ||
							(_ !== g && p
								? (function (t) {
										if ("auto" === gt(t)) return [];
										var e = Wt(t);
										return [zt(t), e, zt(e)];
								  })(g)
								: [Wt(g)]),
						v = [g].concat(b).reduce(function (t, i) {
							return t.concat(
								"auto" === gt(i)
									? Zt(e, {
											placement: i,
											boundary: h,
											rootBoundary: d,
											padding: c,
											flipVariations: p,
											allowedAutoPlacements: m,
									  })
									: i
							);
						}, []),
						y = e.rects.reference,
						w = e.rects.popper,
						E = new Map(),
						A = !0,
						T = v[0],
						O = 0;
					O < v.length;
					O++
				) {
					var C = v[O],
						k = gt(C),
						L = "start" === Yt(C),
						x = [it, nt].indexOf(k) >= 0,
						D = x ? "width" : "height",
						S = Gt(e, {
							placement: C,
							boundary: h,
							rootBoundary: d,
							altBoundary: u,
							padding: c,
						}),
						I = x ? (L ? st : ot) : L ? nt : it;
					y[D] > w[D] && (I = Wt(I));
					var N = Wt(I),
						j = [];
					if (
						(o && j.push(S[k] <= 0),
						a && j.push(S[I] <= 0, S[N] <= 0),
						j.every(function (t) {
							return t;
						}))
					) {
						(T = C), (A = !1);
						break;
					}
					E.set(C, j);
				}
				if (A)
					for (
						var M = function (t) {
								var e = v.find(function (e) {
									var i = E.get(e);
									if (i)
										return i.slice(0, t).every(function (t) {
											return t;
										});
								});
								if (e) return (T = e), "break";
							},
							P = p ? 3 : 1;
						P > 0 && "break" !== M(P);
						P--
					);
				e.placement !== T &&
					((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
			}
		},
		requiresIfExists: ["offset"],
		data: { _skip: !1 },
	};
	function te(t, e, i) {
		return (
			void 0 === i && (i = { x: 0, y: 0 }),
			{
				top: t.top - e.height - i.y,
				right: t.right - e.width + i.x,
				bottom: t.bottom - e.height + i.y,
				left: t.left - e.width - i.x,
			}
		);
	}
	function ee(t) {
		return [it, st, nt, ot].some(function (e) {
			return t[e] >= 0;
		});
	}
	var ie = {
			name: "hide",
			enabled: !0,
			phase: "main",
			requiresIfExists: ["preventOverflow"],
			fn: function (t) {
				var e = t.state,
					i = t.name,
					n = e.rects.reference,
					s = e.rects.popper,
					o = e.modifiersData.preventOverflow,
					r = Gt(e, { elementContext: "reference" }),
					a = Gt(e, { altBoundary: !0 }),
					l = te(r, n),
					c = te(a, s, o),
					h = ee(l),
					d = ee(c);
				(e.modifiersData[i] = {
					referenceClippingOffsets: l,
					popperEscapeOffsets: c,
					isReferenceHidden: h,
					hasPopperEscaped: d,
				}),
					(e.attributes.popper = Object.assign({}, e.attributes.popper, {
						"data-popper-reference-hidden": h,
						"data-popper-escaped": d,
					}));
			},
		},
		ne = {
			name: "offset",
			enabled: !0,
			phase: "main",
			requires: ["popperOffsets"],
			fn: function (t) {
				var e = t.state,
					i = t.options,
					n = t.name,
					s = i.offset,
					o = void 0 === s ? [0, 0] : s,
					r = lt.reduce(function (t, i) {
						return (
							(t[i] = (function (t, e, i) {
								var n = gt(t),
									s = [ot, it].indexOf(n) >= 0 ? -1 : 1,
									o =
										"function" == typeof i
											? i(Object.assign({}, e, { placement: t }))
											: i,
									r = o[0],
									a = o[1];
								return (
									(r = r || 0),
									(a = (a || 0) * s),
									[ot, st].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a }
								);
							})(i, e.rects, o)),
							t
						);
					}, {}),
					a = r[e.placement],
					l = a.x,
					c = a.y;
				null != e.modifiersData.popperOffsets &&
					((e.modifiersData.popperOffsets.x += l),
					(e.modifiersData.popperOffsets.y += c)),
					(e.modifiersData[n] = r);
			},
		},
		se = {
			name: "popperOffsets",
			enabled: !0,
			phase: "read",
			fn: function (t) {
				var e = t.state,
					i = t.name;
				e.modifiersData[i] = Qt({
					reference: e.rects.reference,
					element: e.rects.popper,
					strategy: "absolute",
					placement: e.placement,
				});
			},
			data: {},
		},
		oe = {
			name: "preventOverflow",
			enabled: !0,
			phase: "main",
			fn: function (t) {
				var e = t.state,
					i = t.options,
					n = t.name,
					s = i.mainAxis,
					o = void 0 === s || s,
					r = i.altAxis,
					a = void 0 !== r && r,
					l = i.boundary,
					c = i.rootBoundary,
					h = i.altBoundary,
					d = i.padding,
					u = i.tether,
					f = void 0 === u || u,
					p = i.tetherOffset,
					m = void 0 === p ? 0 : p,
					g = Gt(e, {
						boundary: l,
						rootBoundary: c,
						padding: d,
						altBoundary: h,
					}),
					_ = gt(e.placement),
					b = Yt(e.placement),
					v = !b,
					y = Ct(_),
					w = "x" === y ? "y" : "x",
					E = e.modifiersData.popperOffsets,
					A = e.rects.reference,
					T = e.rects.popper,
					O =
						"function" == typeof m
							? m(Object.assign({}, e.rects, { placement: e.placement }))
							: m,
					C = { x: 0, y: 0 };
				if (E) {
					if (o || a) {
						var k = "y" === y ? it : ot,
							L = "y" === y ? nt : st,
							x = "y" === y ? "height" : "width",
							D = E[y],
							S = E[y] + g[k],
							I = E[y] - g[L],
							N = f ? -T[x] / 2 : 0,
							j = "start" === b ? A[x] : T[x],
							M = "start" === b ? -T[x] : -A[x],
							P = e.elements.arrow,
							H = f && P ? bt(P) : { width: 0, height: 0 },
							R = e.modifiersData["arrow#persistent"]
								? e.modifiersData["arrow#persistent"].padding
								: { top: 0, right: 0, bottom: 0, left: 0 },
							B = R[k],
							W = R[L],
							q = Dt(0, A[x], H[x]),
							z = v ? A[x] / 2 - N - q - B - O : j - q - B - O,
							$ = v ? -A[x] / 2 + N + q + W + O : M + q + W + O,
							U = e.elements.arrow && Ot(e.elements.arrow),
							F = U ? ("y" === y ? U.clientTop || 0 : U.clientLeft || 0) : 0,
							V = e.modifiersData.offset
								? e.modifiersData.offset[e.placement][y]
								: 0,
							K = E[y] + z - V - F,
							X = E[y] + $ - V;
						if (o) {
							var Y = Dt(f ? Lt(S, K) : S, D, f ? kt(I, X) : I);
							(E[y] = Y), (C[y] = Y - D);
						}
						if (a) {
							var Q = "x" === y ? it : ot,
								G = "x" === y ? nt : st,
								Z = E[w],
								J = Z + g[Q],
								tt = Z - g[G],
								et = Dt(f ? Lt(J, K) : J, Z, f ? kt(tt, X) : tt);
							(E[w] = et), (C[w] = et - Z);
						}
					}
					e.modifiersData[n] = C;
				}
			},
			requiresIfExists: ["offset"],
		};
	function re(t, e, i) {
		void 0 === i && (i = !1);
		var n,
			s,
			o = Et(e),
			r = _t(t),
			a = ft(e),
			l = { scrollLeft: 0, scrollTop: 0 },
			c = { x: 0, y: 0 };
		return (
			(a || (!a && !i)) &&
				(("body" !== ht(e) || Ft(o)) &&
					(l =
						(n = e) !== dt(n) && ft(n)
							? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
							: $t(n)),
				ft(e)
					? (((c = _t(e)).x += e.clientLeft), (c.y += e.clientTop))
					: o && (c.x = Ut(o))),
			{
				x: r.left + l.scrollLeft - c.x,
				y: r.top + l.scrollTop - c.y,
				width: r.width,
				height: r.height,
			}
		);
	}
	var ae = { placement: "bottom", modifiers: [], strategy: "absolute" };
	function le() {
		for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
			e[i] = arguments[i];
		return !e.some(function (t) {
			return !(t && "function" == typeof t.getBoundingClientRect);
		});
	}
	function ce(t) {
		void 0 === t && (t = {});
		var e = t,
			i = e.defaultModifiers,
			n = void 0 === i ? [] : i,
			s = e.defaultOptions,
			o = void 0 === s ? ae : s;
		return function (t, e, i) {
			void 0 === i && (i = o);
			var s,
				r,
				a = {
					placement: "bottom",
					orderedModifiers: [],
					options: Object.assign({}, ae, o),
					modifiersData: {},
					elements: { reference: t, popper: e },
					attributes: {},
					styles: {},
				},
				l = [],
				c = !1,
				h = {
					state: a,
					setOptions: function (i) {
						d(),
							(a.options = Object.assign({}, o, a.options, i)),
							(a.scrollParents = {
								reference: ut(t)
									? Vt(t)
									: t.contextElement
									? Vt(t.contextElement)
									: [],
								popper: Vt(e),
							});
						var s,
							r,
							c = (function (t) {
								var e = (function (t) {
									var e = new Map(),
										i = new Set(),
										n = [];
									return (
										t.forEach(function (t) {
											e.set(t.name, t);
										}),
										t.forEach(function (t) {
											i.has(t.name) ||
												(function t(s) {
													i.add(s.name),
														[]
															.concat(
																s.requires || [],
																s.requiresIfExists || []
															)
															.forEach(function (n) {
																if (!i.has(n)) {
																	var s = e.get(n);
																	s && t(s);
																}
															}),
														n.push(s);
												})(t);
										}),
										n
									);
								})(t);
								return ct.reduce(function (t, i) {
									return t.concat(
										e.filter(function (t) {
											return t.phase === i;
										})
									);
								}, []);
							})(
								((s = [].concat(n, a.options.modifiers)),
								(r = s.reduce(function (t, e) {
									var i = t[e.name];
									return (
										(t[e.name] = i
											? Object.assign({}, i, e, {
													options: Object.assign({}, i.options, e.options),
													data: Object.assign({}, i.data, e.data),
											  })
											: e),
										t
									);
								}, {})),
								Object.keys(r).map(function (t) {
									return r[t];
								}))
							);
						return (
							(a.orderedModifiers = c.filter(function (t) {
								return t.enabled;
							})),
							a.orderedModifiers.forEach(function (t) {
								var e = t.name,
									i = t.options,
									n = void 0 === i ? {} : i,
									s = t.effect;
								if ("function" == typeof s) {
									var o = s({ state: a, name: e, instance: h, options: n });
									l.push(o || function () {});
								}
							}),
							h.update()
						);
					},
					forceUpdate: function () {
						if (!c) {
							var t = a.elements,
								e = t.reference,
								i = t.popper;
							if (le(e, i)) {
								(a.rects = {
									reference: re(e, Ot(i), "fixed" === a.options.strategy),
									popper: bt(i),
								}),
									(a.reset = !1),
									(a.placement = a.options.placement),
									a.orderedModifiers.forEach(function (t) {
										return (a.modifiersData[t.name] = Object.assign(
											{},
											t.data
										));
									});
								for (var n = 0; n < a.orderedModifiers.length; n++)
									if (!0 !== a.reset) {
										var s = a.orderedModifiers[n],
											o = s.fn,
											r = s.options,
											l = void 0 === r ? {} : r,
											d = s.name;
										"function" == typeof o &&
											(a =
												o({ state: a, options: l, name: d, instance: h }) || a);
									} else (a.reset = !1), (n = -1);
							}
						}
					},
					update:
						((s = function () {
							return new Promise(function (t) {
								h.forceUpdate(), t(a);
							});
						}),
						function () {
							return (
								r ||
									(r = new Promise(function (t) {
										Promise.resolve().then(function () {
											(r = void 0), t(s());
										});
									})),
								r
							);
						}),
					destroy: function () {
						d(), (c = !0);
					},
				};
			if (!le(t, e)) return h;
			function d() {
				l.forEach(function (t) {
					return t();
				}),
					(l = []);
			}
			return (
				h.setOptions(i).then(function (t) {
					!c && i.onFirstUpdate && i.onFirstUpdate(t);
				}),
				h
			);
		};
	}
	var he = ce(),
		de = ce({ defaultModifiers: [Rt, se, Pt, mt] }),
		ue = ce({ defaultModifiers: [Rt, se, Pt, mt, ne, Jt, oe, Nt, ie] }),
		fe = Object.freeze({
			__proto__: null,
			popperGenerator: ce,
			detectOverflow: Gt,
			createPopperBase: he,
			createPopper: ue,
			createPopperLite: de,
			top: it,
			bottom: nt,
			right: st,
			left: ot,
			auto: "auto",
			basePlacements: rt,
			start: "start",
			end: "end",
			clippingParents: "clippingParents",
			viewport: "viewport",
			popper: "popper",
			reference: "reference",
			variationPlacements: at,
			placements: lt,
			beforeRead: "beforeRead",
			read: "read",
			afterRead: "afterRead",
			beforeMain: "beforeMain",
			main: "main",
			afterMain: "afterMain",
			beforeWrite: "beforeWrite",
			write: "write",
			afterWrite: "afterWrite",
			modifierPhases: ct,
			applyStyles: mt,
			arrow: Nt,
			computeStyles: Pt,
			eventListeners: Rt,
			flip: Jt,
			hide: ie,
			offset: ne,
			popperOffsets: se,
			preventOverflow: oe,
		});
	const pe = new RegExp("ArrowUp|ArrowDown|Escape"),
		me = g() ? "top-end" : "top-start",
		ge = g() ? "top-start" : "top-end",
		_e = g() ? "bottom-end" : "bottom-start",
		be = g() ? "bottom-start" : "bottom-end",
		ve = g() ? "left-start" : "right-start",
		ye = g() ? "right-start" : "left-start",
		we = {
			offset: [0, 2],
			boundary: "clippingParents",
			reference: "toggle",
			display: "dynamic",
			popperConfig: null,
			autoClose: !0,
		},
		Ee = {
			offset: "(array|string|function)",
			boundary: "(string|element)",
			reference: "(string|element|object)",
			display: "string",
			popperConfig: "(null|object|function)",
			autoClose: "(boolean|string)",
		};
	class Ae extends B {
		constructor(t, e) {
			super(t),
				(this._popper = null),
				(this._config = this._getConfig(e)),
				(this._menu = this._getMenuElement()),
				(this._inNavbar = this._detectNavbar()),
				this._addEventListeners();
		}
		static get Default() {
			return we;
		}
		static get DefaultType() {
			return Ee;
		}
		static get NAME() {
			return "dropdown";
		}
		toggle() {
			h(this._element) ||
				(this._element.classList.contains("show") ? this.hide() : this.show());
		}
		show() {
			if (h(this._element) || this._menu.classList.contains("show")) return;
			const t = Ae.getParentFromElement(this._element),
				e = { relatedTarget: this._element };
			if (!P.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
				if (this._inNavbar) U.setDataAttribute(this._menu, "popper", "none");
				else {
					if (void 0 === fe)
						throw new TypeError(
							"Bootstrap's dropdowns require Popper (https://popper.js.org)"
						);
					let e = this._element;
					"parent" === this._config.reference
						? (e = t)
						: r(this._config.reference)
						? (e = a(this._config.reference))
						: "object" == typeof this._config.reference &&
						  (e = this._config.reference);
					const i = this._getPopperConfig(),
						n = i.modifiers.find(
							(t) => "applyStyles" === t.name && !1 === t.enabled
						);
					(this._popper = ue(e, this._menu, i)),
						n && U.setDataAttribute(this._menu, "popper", "static");
				}
				"ontouchstart" in document.documentElement &&
					!t.closest(".navbar-nav") &&
					[]
						.concat(...document.body.children)
						.forEach((t) => P.on(t, "mouseover", u)),
					this._element.focus(),
					this._element.setAttribute("aria-expanded", !0),
					this._menu.classList.toggle("show"),
					this._element.classList.toggle("show"),
					P.trigger(this._element, "shown.bs.dropdown", e);
			}
		}
		hide() {
			if (h(this._element) || !this._menu.classList.contains("show")) return;
			const t = { relatedTarget: this._element };
			this._completeHide(t);
		}
		dispose() {
			this._popper && this._popper.destroy(), super.dispose();
		}
		update() {
			(this._inNavbar = this._detectNavbar()),
				this._popper && this._popper.update();
		}
		_addEventListeners() {
			P.on(this._element, "click.bs.dropdown", (t) => {
				t.preventDefault(), this.toggle();
			});
		}
		_completeHide(t) {
			P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
				("ontouchstart" in document.documentElement &&
					[]
						.concat(...document.body.children)
						.forEach((t) => P.off(t, "mouseover", u)),
				this._popper && this._popper.destroy(),
				this._menu.classList.remove("show"),
				this._element.classList.remove("show"),
				this._element.setAttribute("aria-expanded", "false"),
				U.removeDataAttribute(this._menu, "popper"),
				P.trigger(this._element, "hidden.bs.dropdown", t));
		}
		_getConfig(t) {
			if (
				((t = {
					...this.constructor.Default,
					...U.getDataAttributes(this._element),
					...t,
				}),
				l("dropdown", t, this.constructor.DefaultType),
				"object" == typeof t.reference &&
					!r(t.reference) &&
					"function" != typeof t.reference.getBoundingClientRect)
			)
				throw new TypeError(
					"dropdown".toUpperCase() +
						': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
				);
			return t;
		}
		_getMenuElement() {
			return t.next(this._element, ".dropdown-menu")[0];
		}
		_getPlacement() {
			const t = this._element.parentNode;
			if (t.classList.contains("dropend")) return ve;
			if (t.classList.contains("dropstart")) return ye;
			const e =
				"end" ===
				getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
			return t.classList.contains("dropup") ? (e ? ge : me) : e ? be : _e;
		}
		_detectNavbar() {
			return null !== this._element.closest(".navbar");
		}
		_getOffset() {
			const { offset: t } = this._config;
			return "string" == typeof t
				? t.split(",").map((t) => Number.parseInt(t, 10))
				: "function" == typeof t
				? (e) => t(e, this._element)
				: t;
		}
		_getPopperConfig() {
			const t = {
				placement: this._getPlacement(),
				modifiers: [
					{
						name: "preventOverflow",
						options: { boundary: this._config.boundary },
					},
					{ name: "offset", options: { offset: this._getOffset() } },
				],
			};
			return (
				"static" === this._config.display &&
					(t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
				{
					...t,
					...("function" == typeof this._config.popperConfig
						? this._config.popperConfig(t)
						: this._config.popperConfig),
				}
			);
		}
		_selectMenuItem({ key: e, target: i }) {
			const n = t
				.find(
					".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
					this._menu
				)
				.filter(c);
			n.length && y(n, i, "ArrowDown" === e, !n.includes(i)).focus();
		}
		static dropdownInterface(t, e) {
			const i = Ae.getOrCreateInstance(t, e);
			if ("string" == typeof e) {
				if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
				i[e]();
			}
		}
		static jQueryInterface(t) {
			return this.each(function () {
				Ae.dropdownInterface(this, t);
			});
		}
		static clearMenus(e) {
			if (e && (2 === e.button || ("keyup" === e.type && "Tab" !== e.key)))
				return;
			const i = t.find('[data-bs-toggle="dropdown"]');
			for (let t = 0, n = i.length; t < n; t++) {
				const n = Ae.getInstance(i[t]);
				if (!n || !1 === n._config.autoClose) continue;
				if (!n._element.classList.contains("show")) continue;
				const s = { relatedTarget: n._element };
				if (e) {
					const t = e.composedPath(),
						i = t.includes(n._menu);
					if (
						t.includes(n._element) ||
						("inside" === n._config.autoClose && !i) ||
						("outside" === n._config.autoClose && i)
					)
						continue;
					if (
						n._menu.contains(e.target) &&
						(("keyup" === e.type && "Tab" === e.key) ||
							/input|select|option|textarea|form/i.test(e.target.tagName))
					)
						continue;
					"click" === e.type && (s.clickEvent = e);
				}
				n._completeHide(s);
			}
		}
		static getParentFromElement(t) {
			return s(t) || t.parentNode;
		}
		static dataApiKeydownHandler(e) {
			if (
				/input|textarea/i.test(e.target.tagName)
					? "Space" === e.key ||
					  ("Escape" !== e.key &&
							(("ArrowDown" !== e.key && "ArrowUp" !== e.key) ||
								e.target.closest(".dropdown-menu")))
					: !pe.test(e.key)
			)
				return;
			const i = this.classList.contains("show");
			if (!i && "Escape" === e.key) return;
			if ((e.preventDefault(), e.stopPropagation(), h(this))) return;
			const n = () =>
				this.matches('[data-bs-toggle="dropdown"]')
					? this
					: t.prev(this, '[data-bs-toggle="dropdown"]')[0];
			return "Escape" === e.key
				? (n().focus(), void Ae.clearMenus())
				: "ArrowUp" === e.key || "ArrowDown" === e.key
				? (i || n().click(), void Ae.getInstance(n())._selectMenuItem(e))
				: void ((i && "Space" !== e.key) || Ae.clearMenus());
		}
	}
	P.on(
		document,
		"keydown.bs.dropdown.data-api",
		'[data-bs-toggle="dropdown"]',
		Ae.dataApiKeydownHandler
	),
		P.on(
			document,
			"keydown.bs.dropdown.data-api",
			".dropdown-menu",
			Ae.dataApiKeydownHandler
		),
		P.on(document, "click.bs.dropdown.data-api", Ae.clearMenus),
		P.on(document, "keyup.bs.dropdown.data-api", Ae.clearMenus),
		P.on(
			document,
			"click.bs.dropdown.data-api",
			'[data-bs-toggle="dropdown"]',
			function (t) {
				t.preventDefault(), Ae.dropdownInterface(this);
			}
		),
		_(Ae);
	class Te {
		constructor() {
			this._element = document.body;
		}
		getWidth() {
			const t = document.documentElement.clientWidth;
			return Math.abs(window.innerWidth - t);
		}
		hide() {
			const t = this.getWidth();
			this._disableOverFlow(),
				this._setElementAttributes(this._element, "paddingRight", (e) => e + t),
				this._setElementAttributes(
					".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
					"paddingRight",
					(e) => e + t
				),
				this._setElementAttributes(".sticky-top", "marginRight", (e) => e - t);
		}
		_disableOverFlow() {
			this._saveInitialAttribute(this._element, "overflow"),
				(this._element.style.overflow = "hidden");
		}
		_setElementAttributes(t, e, i) {
			const n = this.getWidth();
			this._applyManipulationCallback(t, (t) => {
				if (t !== this._element && window.innerWidth > t.clientWidth + n)
					return;
				this._saveInitialAttribute(t, e);
				const s = window.getComputedStyle(t)[e];
				t.style[e] = i(Number.parseFloat(s)) + "px";
			});
		}
		reset() {
			this._resetElementAttributes(this._element, "overflow"),
				this._resetElementAttributes(this._element, "paddingRight"),
				this._resetElementAttributes(
					".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
					"paddingRight"
				),
				this._resetElementAttributes(".sticky-top", "marginRight");
		}
		_saveInitialAttribute(t, e) {
			const i = t.style[e];
			i && U.setDataAttribute(t, e, i);
		}
		_resetElementAttributes(t, e) {
			this._applyManipulationCallback(t, (t) => {
				const i = U.getDataAttribute(t, e);
				void 0 === i
					? t.style.removeProperty(e)
					: (U.removeDataAttribute(t, e), (t.style[e] = i));
			});
		}
		_applyManipulationCallback(e, i) {
			r(e) ? i(e) : t.find(e, this._element).forEach(i);
		}
		isOverflowing() {
			return this.getWidth() > 0;
		}
	}
	const Oe = {
			isVisible: !0,
			isAnimated: !1,
			rootElement: "body",
			clickCallback: null,
		},
		Ce = {
			isVisible: "boolean",
			isAnimated: "boolean",
			rootElement: "(element|string)",
			clickCallback: "(function|null)",
		};
	class ke {
		constructor(t) {
			(this._config = this._getConfig(t)),
				(this._isAppended = !1),
				(this._element = null);
		}
		show(t) {
			this._config.isVisible
				? (this._append(),
				  this._config.isAnimated && f(this._getElement()),
				  this._getElement().classList.add("show"),
				  this._emulateAnimation(() => {
						b(t);
				  }))
				: b(t);
		}
		hide(t) {
			this._config.isVisible
				? (this._getElement().classList.remove("show"),
				  this._emulateAnimation(() => {
						this.dispose(), b(t);
				  }))
				: b(t);
		}
		_getElement() {
			if (!this._element) {
				const t = document.createElement("div");
				(t.className = "modal-backdrop"),
					this._config.isAnimated && t.classList.add("fade"),
					(this._element = t);
			}
			return this._element;
		}
		_getConfig(t) {
			return (
				((t = { ...Oe, ...("object" == typeof t ? t : {}) }).rootElement = a(
					t.rootElement
				)),
				l("backdrop", t, Ce),
				t
			);
		}
		_append() {
			this._isAppended ||
				(this._config.rootElement.appendChild(this._getElement()),
				P.on(this._getElement(), "mousedown.bs.backdrop", () => {
					b(this._config.clickCallback);
				}),
				(this._isAppended = !0));
		}
		dispose() {
			this._isAppended &&
				(P.off(this._element, "mousedown.bs.backdrop"),
				this._element.remove(),
				(this._isAppended = !1));
		}
		_emulateAnimation(t) {
			v(t, this._getElement(), this._config.isAnimated);
		}
	}
	const Le = { backdrop: !0, keyboard: !0, focus: !0 },
		xe = {
			backdrop: "(boolean|string)",
			keyboard: "boolean",
			focus: "boolean",
		};
	class De extends B {
		constructor(e, i) {
			super(e),
				(this._config = this._getConfig(i)),
				(this._dialog = t.findOne(".modal-dialog", this._element)),
				(this._backdrop = this._initializeBackDrop()),
				(this._isShown = !1),
				(this._ignoreBackdropClick = !1),
				(this._isTransitioning = !1),
				(this._scrollBar = new Te());
		}
		static get Default() {
			return Le;
		}
		static get NAME() {
			return "modal";
		}
		toggle(t) {
			return this._isShown ? this.hide() : this.show(t);
		}
		show(t) {
			this._isShown ||
				this._isTransitioning ||
				P.trigger(this._element, "show.bs.modal", { relatedTarget: t })
					.defaultPrevented ||
				((this._isShown = !0),
				this._isAnimated() && (this._isTransitioning = !0),
				this._scrollBar.hide(),
				document.body.classList.add("modal-open"),
				this._adjustDialog(),
				this._setEscapeEvent(),
				this._setResizeEvent(),
				P.on(
					this._element,
					"click.dismiss.bs.modal",
					'[data-bs-dismiss="modal"]',
					(t) => this.hide(t)
				),
				P.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
					P.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
						t.target === this._element && (this._ignoreBackdropClick = !0);
					});
				}),
				this._showBackdrop(() => this._showElement(t)));
		}
		hide(t) {
			if (
				(t && ["A", "AREA"].includes(t.target.tagName) && t.preventDefault(),
				!this._isShown || this._isTransitioning)
			)
				return;
			if (P.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
			this._isShown = !1;
			const e = this._isAnimated();
			e && (this._isTransitioning = !0),
				this._setEscapeEvent(),
				this._setResizeEvent(),
				P.off(document, "focusin.bs.modal"),
				this._element.classList.remove("show"),
				P.off(this._element, "click.dismiss.bs.modal"),
				P.off(this._dialog, "mousedown.dismiss.bs.modal"),
				this._queueCallback(() => this._hideModal(), this._element, e);
		}
		dispose() {
			[window, this._dialog].forEach((t) => P.off(t, ".bs.modal")),
				this._backdrop.dispose(),
				super.dispose(),
				P.off(document, "focusin.bs.modal");
		}
		handleUpdate() {
			this._adjustDialog();
		}
		_initializeBackDrop() {
			return new ke({
				isVisible: Boolean(this._config.backdrop),
				isAnimated: this._isAnimated(),
			});
		}
		_getConfig(t) {
			return (
				(t = {
					...Le,
					...U.getDataAttributes(this._element),
					...("object" == typeof t ? t : {}),
				}),
				l("modal", t, xe),
				t
			);
		}
		_showElement(e) {
			const i = this._isAnimated(),
				n = t.findOne(".modal-body", this._dialog);
			(this._element.parentNode &&
				this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
				document.body.appendChild(this._element),
				(this._element.style.display = "block"),
				this._element.removeAttribute("aria-hidden"),
				this._element.setAttribute("aria-modal", !0),
				this._element.setAttribute("role", "dialog"),
				(this._element.scrollTop = 0),
				n && (n.scrollTop = 0),
				i && f(this._element),
				this._element.classList.add("show"),
				this._config.focus && this._enforceFocus(),
				this._queueCallback(
					() => {
						this._config.focus && this._element.focus(),
							(this._isTransitioning = !1),
							P.trigger(this._element, "shown.bs.modal", { relatedTarget: e });
					},
					this._dialog,
					i
				);
		}
		_enforceFocus() {
			P.off(document, "focusin.bs.modal"),
				P.on(document, "focusin.bs.modal", (t) => {
					document === t.target ||
						this._element === t.target ||
						this._element.contains(t.target) ||
						this._element.focus();
				});
		}
		_setEscapeEvent() {
			this._isShown
				? P.on(this._element, "keydown.dismiss.bs.modal", (t) => {
						this._config.keyboard && "Escape" === t.key
							? (t.preventDefault(), this.hide())
							: this._config.keyboard ||
							  "Escape" !== t.key ||
							  this._triggerBackdropTransition();
				  })
				: P.off(this._element, "keydown.dismiss.bs.modal");
		}
		_setResizeEvent() {
			this._isShown
				? P.on(window, "resize.bs.modal", () => this._adjustDialog())
				: P.off(window, "resize.bs.modal");
		}
		_hideModal() {
			(this._element.style.display = "none"),
				this._element.setAttribute("aria-hidden", !0),
				this._element.removeAttribute("aria-modal"),
				this._element.removeAttribute("role"),
				(this._isTransitioning = !1),
				this._backdrop.hide(() => {
					document.body.classList.remove("modal-open"),
						this._resetAdjustments(),
						this._scrollBar.reset(),
						P.trigger(this._element, "hidden.bs.modal");
				});
		}
		_showBackdrop(t) {
			P.on(this._element, "click.dismiss.bs.modal", (t) => {
				this._ignoreBackdropClick
					? (this._ignoreBackdropClick = !1)
					: t.target === t.currentTarget &&
					  (!0 === this._config.backdrop
							? this.hide()
							: "static" === this._config.backdrop &&
							  this._triggerBackdropTransition());
			}),
				this._backdrop.show(t);
		}
		_isAnimated() {
			return this._element.classList.contains("fade");
		}
		_triggerBackdropTransition() {
			if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
				return;
			const { classList: t, scrollHeight: e, style: i } = this._element,
				n = e > document.documentElement.clientHeight;
			(!n && "hidden" === i.overflowY) ||
				t.contains("modal-static") ||
				(n || (i.overflowY = "hidden"),
				t.add("modal-static"),
				this._queueCallback(() => {
					t.remove("modal-static"),
						n ||
							this._queueCallback(() => {
								i.overflowY = "";
							}, this._dialog);
				}, this._dialog),
				this._element.focus());
		}
		_adjustDialog() {
			const t =
					this._element.scrollHeight > document.documentElement.clientHeight,
				e = this._scrollBar.getWidth(),
				i = e > 0;
			((!i && t && !g()) || (i && !t && g())) &&
				(this._element.style.paddingLeft = e + "px"),
				((i && !t && !g()) || (!i && t && g())) &&
					(this._element.style.paddingRight = e + "px");
		}
		_resetAdjustments() {
			(this._element.style.paddingLeft = ""),
				(this._element.style.paddingRight = "");
		}
		static jQueryInterface(t, e) {
			return this.each(function () {
				const i = De.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
					i[t](e);
				}
			});
		}
	}
	P.on(
		document,
		"click.bs.modal.data-api",
		'[data-bs-toggle="modal"]',
		function (t) {
			const e = s(this);
			["A", "AREA"].includes(this.tagName) && t.preventDefault(),
				P.one(e, "show.bs.modal", (t) => {
					t.defaultPrevented ||
						P.one(e, "hidden.bs.modal", () => {
							c(this) && this.focus();
						});
				}),
				De.getOrCreateInstance(e).toggle(this);
		}
	),
		_(De);
	const Se = { backdrop: !0, keyboard: !0, scroll: !1 },
		Ie = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
	class Ne extends B {
		constructor(t, e) {
			super(t),
				(this._config = this._getConfig(e)),
				(this._isShown = !1),
				(this._backdrop = this._initializeBackDrop()),
				this._addEventListeners();
		}
		static get NAME() {
			return "offcanvas";
		}
		static get Default() {
			return Se;
		}
		toggle(t) {
			return this._isShown ? this.hide() : this.show(t);
		}
		show(t) {
			this._isShown ||
				P.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
					.defaultPrevented ||
				((this._isShown = !0),
				(this._element.style.visibility = "visible"),
				this._backdrop.show(),
				this._config.scroll ||
					(new Te().hide(), this._enforceFocusOnElement(this._element)),
				this._element.removeAttribute("aria-hidden"),
				this._element.setAttribute("aria-modal", !0),
				this._element.setAttribute("role", "dialog"),
				this._element.classList.add("show"),
				this._queueCallback(
					() => {
						P.trigger(this._element, "shown.bs.offcanvas", {
							relatedTarget: t,
						});
					},
					this._element,
					!0
				));
		}
		hide() {
			this._isShown &&
				(P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
					(P.off(document, "focusin.bs.offcanvas"),
					this._element.blur(),
					(this._isShown = !1),
					this._element.classList.remove("show"),
					this._backdrop.hide(),
					this._queueCallback(
						() => {
							this._element.setAttribute("aria-hidden", !0),
								this._element.removeAttribute("aria-modal"),
								this._element.removeAttribute("role"),
								(this._element.style.visibility = "hidden"),
								this._config.scroll || new Te().reset(),
								P.trigger(this._element, "hidden.bs.offcanvas");
						},
						this._element,
						!0
					)));
		}
		dispose() {
			this._backdrop.dispose(),
				super.dispose(),
				P.off(document, "focusin.bs.offcanvas");
		}
		_getConfig(t) {
			return (
				(t = {
					...Se,
					...U.getDataAttributes(this._element),
					...("object" == typeof t ? t : {}),
				}),
				l("offcanvas", t, Ie),
				t
			);
		}
		_initializeBackDrop() {
			return new ke({
				isVisible: this._config.backdrop,
				isAnimated: !0,
				rootElement: this._element.parentNode,
				clickCallback: () => this.hide(),
			});
		}
		_enforceFocusOnElement(t) {
			P.off(document, "focusin.bs.offcanvas"),
				P.on(document, "focusin.bs.offcanvas", (e) => {
					document === e.target ||
						t === e.target ||
						t.contains(e.target) ||
						t.focus();
				}),
				t.focus();
		}
		_addEventListeners() {
			P.on(
				this._element,
				"click.dismiss.bs.offcanvas",
				'[data-bs-dismiss="offcanvas"]',
				() => this.hide()
			),
				P.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
					this._config.keyboard && "Escape" === t.key && this.hide();
				});
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = Ne.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
						throw new TypeError(`No method named "${t}"`);
					e[t](this);
				}
			});
		}
	}
	P.on(
		document,
		"click.bs.offcanvas.data-api",
		'[data-bs-toggle="offcanvas"]',
		function (e) {
			const i = s(this);
			if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), h(this)))
				return;
			P.one(i, "hidden.bs.offcanvas", () => {
				c(this) && this.focus();
			});
			const n = t.findOne(".offcanvas.show");
			n && n !== i && Ne.getInstance(n).hide(),
				Ne.getOrCreateInstance(i).toggle(this);
		}
	),
		P.on(window, "load.bs.offcanvas.data-api", () =>
			t.find(".offcanvas.show").forEach((t) => Ne.getOrCreateInstance(t).show())
		),
		_(Ne);
	const je = new Set([
			"background",
			"cite",
			"href",
			"itemtype",
			"longdesc",
			"poster",
			"src",
			"xlink:href",
		]),
		Me = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
		Pe =
			/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
		He = (t, e) => {
			const i = t.nodeName.toLowerCase();
			if (e.includes(i))
				return (
					!je.has(i) || Boolean(Me.test(t.nodeValue) || Pe.test(t.nodeValue))
				);
			const n = e.filter((t) => t instanceof RegExp);
			for (let t = 0, e = n.length; t < e; t++) if (n[t].test(i)) return !0;
			return !1;
		};
	function Re(t, e, i) {
		if (!t.length) return t;
		if (i && "function" == typeof i) return i(t);
		const n = new window.DOMParser().parseFromString(t, "text/html"),
			s = Object.keys(e),
			o = [].concat(...n.body.querySelectorAll("*"));
		for (let t = 0, i = o.length; t < i; t++) {
			const i = o[t],
				n = i.nodeName.toLowerCase();
			if (!s.includes(n)) {
				i.remove();
				continue;
			}
			const r = [].concat(...i.attributes),
				a = [].concat(e["*"] || [], e[n] || []);
			r.forEach((t) => {
				He(t, a) || i.removeAttribute(t.nodeName);
			});
		}
		return n.body.innerHTML;
	}
	const Be = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
		We = new Set(["sanitize", "allowList", "sanitizeFn"]),
		qe = {
			animation: "boolean",
			template: "string",
			title: "(string|element|function)",
			trigger: "string",
			delay: "(number|object)",
			html: "boolean",
			selector: "(string|boolean)",
			placement: "(string|function)",
			offset: "(array|string|function)",
			container: "(string|element|boolean)",
			fallbackPlacements: "array",
			boundary: "(string|element)",
			customClass: "(string|function)",
			sanitize: "boolean",
			sanitizeFn: "(null|function)",
			allowList: "object",
			popperConfig: "(null|object|function)",
		},
		ze = {
			AUTO: "auto",
			TOP: "top",
			RIGHT: g() ? "left" : "right",
			BOTTOM: "bottom",
			LEFT: g() ? "right" : "left",
		},
		$e = {
			animation: !0,
			template:
				'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
			trigger: "hover focus",
			title: "",
			delay: 0,
			html: !1,
			selector: !1,
			placement: "top",
			offset: [0, 0],
			container: !1,
			fallbackPlacements: ["top", "right", "bottom", "left"],
			boundary: "clippingParents",
			customClass: "",
			sanitize: !0,
			sanitizeFn: null,
			allowList: {
				"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
				a: ["target", "href", "title", "rel"],
				area: [],
				b: [],
				br: [],
				col: [],
				code: [],
				div: [],
				em: [],
				hr: [],
				h1: [],
				h2: [],
				h3: [],
				h4: [],
				h5: [],
				h6: [],
				i: [],
				img: ["src", "srcset", "alt", "title", "width", "height"],
				li: [],
				ol: [],
				p: [],
				pre: [],
				s: [],
				small: [],
				span: [],
				sub: [],
				sup: [],
				strong: [],
				u: [],
				ul: [],
			},
			popperConfig: null,
		},
		Ue = {
			HIDE: "hide.bs.tooltip",
			HIDDEN: "hidden.bs.tooltip",
			SHOW: "show.bs.tooltip",
			SHOWN: "shown.bs.tooltip",
			INSERTED: "inserted.bs.tooltip",
			CLICK: "click.bs.tooltip",
			FOCUSIN: "focusin.bs.tooltip",
			FOCUSOUT: "focusout.bs.tooltip",
			MOUSEENTER: "mouseenter.bs.tooltip",
			MOUSELEAVE: "mouseleave.bs.tooltip",
		};
	class Fe extends B {
		constructor(t, e) {
			if (void 0 === fe)
				throw new TypeError(
					"Bootstrap's tooltips require Popper (https://popper.js.org)"
				);
			super(t),
				(this._isEnabled = !0),
				(this._timeout = 0),
				(this._hoverState = ""),
				(this._activeTrigger = {}),
				(this._popper = null),
				(this._config = this._getConfig(e)),
				(this.tip = null),
				this._setListeners();
		}
		static get Default() {
			return $e;
		}
		static get NAME() {
			return "tooltip";
		}
		static get Event() {
			return Ue;
		}
		static get DefaultType() {
			return qe;
		}
		enable() {
			this._isEnabled = !0;
		}
		disable() {
			this._isEnabled = !1;
		}
		toggleEnabled() {
			this._isEnabled = !this._isEnabled;
		}
		toggle(t) {
			if (this._isEnabled)
				if (t) {
					const e = this._initializeOnDelegatedTarget(t);
					(e._activeTrigger.click = !e._activeTrigger.click),
						e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
				} else {
					if (this.getTipElement().classList.contains("show"))
						return void this._leave(null, this);
					this._enter(null, this);
				}
		}
		dispose() {
			clearTimeout(this._timeout),
				P.off(
					this._element.closest(".modal"),
					"hide.bs.modal",
					this._hideModalHandler
				),
				this.tip && this.tip.remove(),
				this._popper && this._popper.destroy(),
				super.dispose();
		}
		show() {
			if ("none" === this._element.style.display)
				throw new Error("Please use show on visible elements");
			if (!this.isWithContent() || !this._isEnabled) return;
			const t = P.trigger(this._element, this.constructor.Event.SHOW),
				i = d(this._element),
				n =
					null === i
						? this._element.ownerDocument.documentElement.contains(
								this._element
						  )
						: i.contains(this._element);
			if (t.defaultPrevented || !n) return;
			const s = this.getTipElement(),
				o = e(this.constructor.NAME);
			s.setAttribute("id", o),
				this._element.setAttribute("aria-describedby", o),
				this.setContent(),
				this._config.animation && s.classList.add("fade");
			const r =
					"function" == typeof this._config.placement
						? this._config.placement.call(this, s, this._element)
						: this._config.placement,
				a = this._getAttachment(r);
			this._addAttachmentClass(a);
			const { container: l } = this._config;
			R.set(s, this.constructor.DATA_KEY, this),
				this._element.ownerDocument.documentElement.contains(this.tip) ||
					(l.appendChild(s),
					P.trigger(this._element, this.constructor.Event.INSERTED)),
				this._popper
					? this._popper.update()
					: (this._popper = ue(this._element, s, this._getPopperConfig(a))),
				s.classList.add("show");
			const c =
				"function" == typeof this._config.customClass
					? this._config.customClass()
					: this._config.customClass;
			c && s.classList.add(...c.split(" ")),
				"ontouchstart" in document.documentElement &&
					[].concat(...document.body.children).forEach((t) => {
						P.on(t, "mouseover", u);
					});
			const h = this.tip.classList.contains("fade");
			this._queueCallback(
				() => {
					const t = this._hoverState;
					(this._hoverState = null),
						P.trigger(this._element, this.constructor.Event.SHOWN),
						"out" === t && this._leave(null, this);
				},
				this.tip,
				h
			);
		}
		hide() {
			if (!this._popper) return;
			const t = this.getTipElement();
			if (
				P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
			)
				return;
			t.classList.remove("show"),
				"ontouchstart" in document.documentElement &&
					[]
						.concat(...document.body.children)
						.forEach((t) => P.off(t, "mouseover", u)),
				(this._activeTrigger.click = !1),
				(this._activeTrigger.focus = !1),
				(this._activeTrigger.hover = !1);
			const e = this.tip.classList.contains("fade");
			this._queueCallback(
				() => {
					this._isWithActiveTrigger() ||
						("show" !== this._hoverState && t.remove(),
						this._cleanTipClass(),
						this._element.removeAttribute("aria-describedby"),
						P.trigger(this._element, this.constructor.Event.HIDDEN),
						this._popper && (this._popper.destroy(), (this._popper = null)));
				},
				this.tip,
				e
			),
				(this._hoverState = "");
		}
		update() {
			null !== this._popper && this._popper.update();
		}
		isWithContent() {
			return Boolean(this.getTitle());
		}
		getTipElement() {
			if (this.tip) return this.tip;
			const t = document.createElement("div");
			return (
				(t.innerHTML = this._config.template),
				(this.tip = t.children[0]),
				this.tip
			);
		}
		setContent() {
			const e = this.getTipElement();
			this.setElementContent(t.findOne(".tooltip-inner", e), this.getTitle()),
				e.classList.remove("fade", "show");
		}
		setElementContent(t, e) {
			if (null !== t)
				return r(e)
					? ((e = a(e)),
					  void (this._config.html
							? e.parentNode !== t && ((t.innerHTML = ""), t.appendChild(e))
							: (t.textContent = e.textContent)))
					: void (this._config.html
							? (this._config.sanitize &&
									(e = Re(e, this._config.allowList, this._config.sanitizeFn)),
							  (t.innerHTML = e))
							: (t.textContent = e));
		}
		getTitle() {
			let t = this._element.getAttribute("data-bs-original-title");
			return (
				t ||
					(t =
						"function" == typeof this._config.title
							? this._config.title.call(this._element)
							: this._config.title),
				t
			);
		}
		updateAttachment(t) {
			return "right" === t ? "end" : "left" === t ? "start" : t;
		}
		_initializeOnDelegatedTarget(t, e) {
			const i = this.constructor.DATA_KEY;
			return (
				(e = e || R.get(t.delegateTarget, i)) ||
					((e = new this.constructor(
						t.delegateTarget,
						this._getDelegateConfig()
					)),
					R.set(t.delegateTarget, i, e)),
				e
			);
		}
		_getOffset() {
			const { offset: t } = this._config;
			return "string" == typeof t
				? t.split(",").map((t) => Number.parseInt(t, 10))
				: "function" == typeof t
				? (e) => t(e, this._element)
				: t;
		}
		_getPopperConfig(t) {
			const e = {
				placement: t,
				modifiers: [
					{
						name: "flip",
						options: { fallbackPlacements: this._config.fallbackPlacements },
					},
					{ name: "offset", options: { offset: this._getOffset() } },
					{
						name: "preventOverflow",
						options: { boundary: this._config.boundary },
					},
					{
						name: "arrow",
						options: { element: `.${this.constructor.NAME}-arrow` },
					},
					{
						name: "onChange",
						enabled: !0,
						phase: "afterWrite",
						fn: (t) => this._handlePopperPlacementChange(t),
					},
				],
				onFirstUpdate: (t) => {
					t.options.placement !== t.placement &&
						this._handlePopperPlacementChange(t);
				},
			};
			return {
				...e,
				...("function" == typeof this._config.popperConfig
					? this._config.popperConfig(e)
					: this._config.popperConfig),
			};
		}
		_addAttachmentClass(t) {
			this.getTipElement().classList.add(
				"bs-tooltip-" + this.updateAttachment(t)
			);
		}
		_getAttachment(t) {
			return ze[t.toUpperCase()];
		}
		_setListeners() {
			this._config.trigger.split(" ").forEach((t) => {
				if ("click" === t)
					P.on(
						this._element,
						this.constructor.Event.CLICK,
						this._config.selector,
						(t) => this.toggle(t)
					);
				else if ("manual" !== t) {
					const e =
							"hover" === t
								? this.constructor.Event.MOUSEENTER
								: this.constructor.Event.FOCUSIN,
						i =
							"hover" === t
								? this.constructor.Event.MOUSELEAVE
								: this.constructor.Event.FOCUSOUT;
					P.on(this._element, e, this._config.selector, (t) => this._enter(t)),
						P.on(this._element, i, this._config.selector, (t) =>
							this._leave(t)
						);
				}
			}),
				(this._hideModalHandler = () => {
					this._element && this.hide();
				}),
				P.on(
					this._element.closest(".modal"),
					"hide.bs.modal",
					this._hideModalHandler
				),
				this._config.selector
					? (this._config = {
							...this._config,
							trigger: "manual",
							selector: "",
					  })
					: this._fixTitle();
		}
		_fixTitle() {
			const t = this._element.getAttribute("title"),
				e = typeof this._element.getAttribute("data-bs-original-title");
			(t || "string" !== e) &&
				(this._element.setAttribute("data-bs-original-title", t || ""),
				!t ||
					this._element.getAttribute("aria-label") ||
					this._element.textContent ||
					this._element.setAttribute("aria-label", t),
				this._element.setAttribute("title", ""));
		}
		_enter(t, e) {
			(e = this._initializeOnDelegatedTarget(t, e)),
				t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
				e.getTipElement().classList.contains("show") || "show" === e._hoverState
					? (e._hoverState = "show")
					: (clearTimeout(e._timeout),
					  (e._hoverState = "show"),
					  e._config.delay && e._config.delay.show
							? (e._timeout = setTimeout(() => {
									"show" === e._hoverState && e.show();
							  }, e._config.delay.show))
							: e.show());
		}
		_leave(t, e) {
			(e = this._initializeOnDelegatedTarget(t, e)),
				t &&
					(e._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
						e._element.contains(t.relatedTarget)),
				e._isWithActiveTrigger() ||
					(clearTimeout(e._timeout),
					(e._hoverState = "out"),
					e._config.delay && e._config.delay.hide
						? (e._timeout = setTimeout(() => {
								"out" === e._hoverState && e.hide();
						  }, e._config.delay.hide))
						: e.hide());
		}
		_isWithActiveTrigger() {
			for (const t in this._activeTrigger)
				if (this._activeTrigger[t]) return !0;
			return !1;
		}
		_getConfig(t) {
			const e = U.getDataAttributes(this._element);
			return (
				Object.keys(e).forEach((t) => {
					We.has(t) && delete e[t];
				}),
				((t = {
					...this.constructor.Default,
					...e,
					...("object" == typeof t && t ? t : {}),
				}).container = !1 === t.container ? document.body : a(t.container)),
				"number" == typeof t.delay &&
					(t.delay = { show: t.delay, hide: t.delay }),
				"number" == typeof t.title && (t.title = t.title.toString()),
				"number" == typeof t.content && (t.content = t.content.toString()),
				l("tooltip", t, this.constructor.DefaultType),
				t.sanitize && (t.template = Re(t.template, t.allowList, t.sanitizeFn)),
				t
			);
		}
		_getDelegateConfig() {
			const t = {};
			if (this._config)
				for (const e in this._config)
					this.constructor.Default[e] !== this._config[e] &&
						(t[e] = this._config[e]);
			return t;
		}
		_cleanTipClass() {
			const t = this.getTipElement(),
				e = t.getAttribute("class").match(Be);
			null !== e &&
				e.length > 0 &&
				e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
		}
		_handlePopperPlacementChange(t) {
			const { state: e } = t;
			e &&
				((this.tip = e.elements.popper),
				this._cleanTipClass(),
				this._addAttachmentClass(this._getAttachment(e.placement)));
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = Fe.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t]();
				}
			});
		}
	}
	_(Fe);
	const Ve = new RegExp("(^|\\s)bs-popover\\S+", "g"),
		Ke = {
			...Fe.Default,
			placement: "right",
			offset: [0, 8],
			trigger: "click",
			content: "",
			template:
				'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
		},
		Xe = { ...Fe.DefaultType, content: "(string|element|function)" },
		Ye = {
			HIDE: "hide.bs.popover",
			HIDDEN: "hidden.bs.popover",
			SHOW: "show.bs.popover",
			SHOWN: "shown.bs.popover",
			INSERTED: "inserted.bs.popover",
			CLICK: "click.bs.popover",
			FOCUSIN: "focusin.bs.popover",
			FOCUSOUT: "focusout.bs.popover",
			MOUSEENTER: "mouseenter.bs.popover",
			MOUSELEAVE: "mouseleave.bs.popover",
		};
	class Qe extends Fe {
		static get Default() {
			return Ke;
		}
		static get NAME() {
			return "popover";
		}
		static get Event() {
			return Ye;
		}
		static get DefaultType() {
			return Xe;
		}
		isWithContent() {
			return this.getTitle() || this._getContent();
		}
		getTipElement() {
			return (
				this.tip ||
					((this.tip = super.getTipElement()),
					this.getTitle() || t.findOne(".popover-header", this.tip).remove(),
					this._getContent() || t.findOne(".popover-body", this.tip).remove()),
				this.tip
			);
		}
		setContent() {
			const e = this.getTipElement();
			this.setElementContent(t.findOne(".popover-header", e), this.getTitle());
			let i = this._getContent();
			"function" == typeof i && (i = i.call(this._element)),
				this.setElementContent(t.findOne(".popover-body", e), i),
				e.classList.remove("fade", "show");
		}
		_addAttachmentClass(t) {
			this.getTipElement().classList.add(
				"bs-popover-" + this.updateAttachment(t)
			);
		}
		_getContent() {
			return (
				this._element.getAttribute("data-bs-content") || this._config.content
			);
		}
		_cleanTipClass() {
			const t = this.getTipElement(),
				e = t.getAttribute("class").match(Ve);
			null !== e &&
				e.length > 0 &&
				e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = Qe.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t]();
				}
			});
		}
	}
	_(Qe);
	const Ge = { offset: 10, method: "auto", target: "" },
		Ze = { offset: "number", method: "string", target: "(string|element)" };
	class Je extends B {
		constructor(t, e) {
			super(t),
				(this._scrollElement =
					"BODY" === this._element.tagName ? window : this._element),
				(this._config = this._getConfig(e)),
				(this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`),
				(this._offsets = []),
				(this._targets = []),
				(this._activeTarget = null),
				(this._scrollHeight = 0),
				P.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
				this.refresh(),
				this._process();
		}
		static get Default() {
			return Ge;
		}
		static get NAME() {
			return "scrollspy";
		}
		refresh() {
			const e =
					this._scrollElement === this._scrollElement.window
						? "offset"
						: "position",
				i = "auto" === this._config.method ? e : this._config.method,
				s = "position" === i ? this._getScrollTop() : 0;
			(this._offsets = []),
				(this._targets = []),
				(this._scrollHeight = this._getScrollHeight()),
				t
					.find(this._selector)
					.map((e) => {
						const o = n(e),
							r = o ? t.findOne(o) : null;
						if (r) {
							const t = r.getBoundingClientRect();
							if (t.width || t.height) return [U[i](r).top + s, o];
						}
						return null;
					})
					.filter((t) => t)
					.sort((t, e) => t[0] - e[0])
					.forEach((t) => {
						this._offsets.push(t[0]), this._targets.push(t[1]);
					});
		}
		dispose() {
			P.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
		}
		_getConfig(t) {
			if (
				"string" !=
					typeof (t = {
						...Ge,
						...U.getDataAttributes(this._element),
						...("object" == typeof t && t ? t : {}),
					}).target &&
				r(t.target)
			) {
				let { id: i } = t.target;
				i || ((i = e("scrollspy")), (t.target.id = i)), (t.target = "#" + i);
			}
			return l("scrollspy", t, Ze), t;
		}
		_getScrollTop() {
			return this._scrollElement === window
				? this._scrollElement.pageYOffset
				: this._scrollElement.scrollTop;
		}
		_getScrollHeight() {
			return (
				this._scrollElement.scrollHeight ||
				Math.max(
					document.body.scrollHeight,
					document.documentElement.scrollHeight
				)
			);
		}
		_getOffsetHeight() {
			return this._scrollElement === window
				? window.innerHeight
				: this._scrollElement.getBoundingClientRect().height;
		}
		_process() {
			const t = this._getScrollTop() + this._config.offset,
				e = this._getScrollHeight(),
				i = this._config.offset + e - this._getOffsetHeight();
			if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
				const t = this._targets[this._targets.length - 1];
				this._activeTarget !== t && this._activate(t);
			} else {
				if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
					return (this._activeTarget = null), void this._clear();
				for (let e = this._offsets.length; e--; )
					this._activeTarget !== this._targets[e] &&
						t >= this._offsets[e] &&
						(void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
						this._activate(this._targets[e]);
			}
		}
		_activate(e) {
			(this._activeTarget = e), this._clear();
			const i = this._selector
					.split(",")
					.map((t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
				n = t.findOne(i.join(","));
			n.classList.contains("dropdown-item")
				? (t
						.findOne(".dropdown-toggle", n.closest(".dropdown"))
						.classList.add("active"),
				  n.classList.add("active"))
				: (n.classList.add("active"),
				  t.parents(n, ".nav, .list-group").forEach((e) => {
						t
							.prev(e, ".nav-link, .list-group-item")
							.forEach((t) => t.classList.add("active")),
							t.prev(e, ".nav-item").forEach((e) => {
								t.children(e, ".nav-link").forEach((t) =>
									t.classList.add("active")
								);
							});
				  })),
				P.trigger(this._scrollElement, "activate.bs.scrollspy", {
					relatedTarget: e,
				});
		}
		_clear() {
			t.find(this._selector)
				.filter((t) => t.classList.contains("active"))
				.forEach((t) => t.classList.remove("active"));
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = Je.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t]();
				}
			});
		}
	}
	P.on(window, "load.bs.scrollspy.data-api", () => {
		t.find('[data-bs-spy="scroll"]').forEach((t) => new Je(t));
	}),
		_(Je);
	class ti extends B {
		static get NAME() {
			return "tab";
		}
		show() {
			if (
				this._element.parentNode &&
				this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
				this._element.classList.contains("active")
			)
				return;
			let e;
			const i = s(this._element),
				n = this._element.closest(".nav, .list-group");
			if (n) {
				const i =
					"UL" === n.nodeName || "OL" === n.nodeName
						? ":scope > li > .active"
						: ".active";
				(e = t.find(i, n)), (e = e[e.length - 1]);
			}
			const o = e
				? P.trigger(e, "hide.bs.tab", { relatedTarget: this._element })
				: null;
			if (
				P.trigger(this._element, "show.bs.tab", { relatedTarget: e })
					.defaultPrevented ||
				(null !== o && o.defaultPrevented)
			)
				return;
			this._activate(this._element, n);
			const r = () => {
				P.trigger(e, "hidden.bs.tab", { relatedTarget: this._element }),
					P.trigger(this._element, "shown.bs.tab", { relatedTarget: e });
			};
			i ? this._activate(i, i.parentNode, r) : r();
		}
		_activate(e, i, n) {
			const s = (
					!i || ("UL" !== i.nodeName && "OL" !== i.nodeName)
						? t.children(i, ".active")
						: t.find(":scope > li > .active", i)
				)[0],
				o = n && s && s.classList.contains("fade"),
				r = () => this._transitionComplete(e, s, n);
			s && o
				? (s.classList.remove("show"), this._queueCallback(r, e, !0))
				: r();
		}
		_transitionComplete(e, i, n) {
			if (i) {
				i.classList.remove("active");
				const e = t.findOne(":scope > .dropdown-menu .active", i.parentNode);
				e && e.classList.remove("active"),
					"tab" === i.getAttribute("role") &&
						i.setAttribute("aria-selected", !1);
			}
			e.classList.add("active"),
				"tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
				f(e),
				e.classList.contains("fade") && e.classList.add("show");
			let s = e.parentNode;
			if (
				(s && "LI" === s.nodeName && (s = s.parentNode),
				s && s.classList.contains("dropdown-menu"))
			) {
				const i = e.closest(".dropdown");
				i &&
					t
						.find(".dropdown-toggle", i)
						.forEach((t) => t.classList.add("active")),
					e.setAttribute("aria-expanded", !0);
			}
			n && n();
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = ti.getOrCreateInstance(this);
				if ("string" == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t]();
				}
			});
		}
	}
	P.on(
		document,
		"click.bs.tab.data-api",
		'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
		function (t) {
			["A", "AREA"].includes(this.tagName) && t.preventDefault(),
				h(this) || ti.getOrCreateInstance(this).show();
		}
	),
		_(ti);
	const ei = { animation: "boolean", autohide: "boolean", delay: "number" },
		ii = { animation: !0, autohide: !0, delay: 5e3 };
	class ni extends B {
		constructor(t, e) {
			super(t),
				(this._config = this._getConfig(e)),
				(this._timeout = null),
				(this._hasMouseInteraction = !1),
				(this._hasKeyboardInteraction = !1),
				this._setListeners();
		}
		static get DefaultType() {
			return ei;
		}
		static get Default() {
			return ii;
		}
		static get NAME() {
			return "toast";
		}
		show() {
			P.trigger(this._element, "show.bs.toast").defaultPrevented ||
				(this._clearTimeout(),
				this._config.animation && this._element.classList.add("fade"),
				this._element.classList.remove("hide"),
				f(this._element),
				this._element.classList.add("showing"),
				this._queueCallback(
					() => {
						this._element.classList.remove("showing"),
							this._element.classList.add("show"),
							P.trigger(this._element, "shown.bs.toast"),
							this._maybeScheduleHide();
					},
					this._element,
					this._config.animation
				));
		}
		hide() {
			this._element.classList.contains("show") &&
				(P.trigger(this._element, "hide.bs.toast").defaultPrevented ||
					(this._element.classList.remove("show"),
					this._queueCallback(
						() => {
							this._element.classList.add("hide"),
								P.trigger(this._element, "hidden.bs.toast");
						},
						this._element,
						this._config.animation
					)));
		}
		dispose() {
			this._clearTimeout(),
				this._element.classList.contains("show") &&
					this._element.classList.remove("show"),
				super.dispose();
		}
		_getConfig(t) {
			return (
				(t = {
					...ii,
					...U.getDataAttributes(this._element),
					...("object" == typeof t && t ? t : {}),
				}),
				l("toast", t, this.constructor.DefaultType),
				t
			);
		}
		_maybeScheduleHide() {
			this._config.autohide &&
				(this._hasMouseInteraction ||
					this._hasKeyboardInteraction ||
					(this._timeout = setTimeout(() => {
						this.hide();
					}, this._config.delay)));
		}
		_onInteraction(t, e) {
			switch (t.type) {
				case "mouseover":
				case "mouseout":
					this._hasMouseInteraction = e;
					break;
				case "focusin":
				case "focusout":
					this._hasKeyboardInteraction = e;
			}
			if (e) return void this._clearTimeout();
			const i = t.relatedTarget;
			this._element === i ||
				this._element.contains(i) ||
				this._maybeScheduleHide();
		}
		_setListeners() {
			P.on(
				this._element,
				"click.dismiss.bs.toast",
				'[data-bs-dismiss="toast"]',
				() => this.hide()
			),
				P.on(this._element, "mouseover.bs.toast", (t) =>
					this._onInteraction(t, !0)
				),
				P.on(this._element, "mouseout.bs.toast", (t) =>
					this._onInteraction(t, !1)
				),
				P.on(this._element, "focusin.bs.toast", (t) =>
					this._onInteraction(t, !0)
				),
				P.on(this._element, "focusout.bs.toast", (t) =>
					this._onInteraction(t, !1)
				);
		}
		_clearTimeout() {
			clearTimeout(this._timeout), (this._timeout = null);
		}
		static jQueryInterface(t) {
			return this.each(function () {
				const e = ni.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t](this);
				}
			});
		}
	}
	return (
		_(ni),
		{
			Alert: W,
			Button: q,
			Carousel: Z,
			Collapse: et,
			Dropdown: Ae,
			Modal: De,
			Offcanvas: Ne,
			Popover: Qe,
			ScrollSpy: Je,
			Tab: ti,
			Toast: ni,
			Tooltip: Fe,
		}
	);
});
//# sourceMappingURL=bootstrap.bundle.min.js.map
!(function (e, n) {
	"object" == typeof exports && "object" == typeof module
		? (module.exports = n())
		: "function" == typeof define && define.amd
		? define([], n)
		: "object" == typeof exports
		? (exports.feather = n())
		: (e.feather = n());
})("undefined" != typeof self ? self : this, function () {
	return (function (e) {
		var n = {};
		function i(t) {
			if (n[t]) return n[t].exports;
			var l = (n[t] = { i: t, l: !1, exports: {} });
			return e[t].call(l.exports, l, l.exports, i), (l.l = !0), l.exports;
		}
		return (
			(i.m = e),
			(i.c = n),
			(i.d = function (e, n, t) {
				i.o(e, n) ||
					Object.defineProperty(e, n, {
						configurable: !1,
						enumerable: !0,
						get: t,
					});
			}),
			(i.r = function (e) {
				Object.defineProperty(e, "__esModule", { value: !0 });
			}),
			(i.n = function (e) {
				var n =
					e && e.__esModule
						? function () {
								return e.default;
						  }
						: function () {
								return e;
						  };
				return i.d(n, "a", n), n;
			}),
			(i.o = function (e, n) {
				return Object.prototype.hasOwnProperty.call(e, n);
			}),
			(i.p = ""),
			i((i.s = 80))
		);
	})([
		function (e, n, i) {
			(function (n) {
				var i = "object",
					t = function (e) {
						return e && e.Math == Math && e;
					};
				e.exports =
					t(typeof globalThis == i && globalThis) ||
					t(typeof window == i && window) ||
					t(typeof self == i && self) ||
					t(typeof n == i && n) ||
					Function("return this")();
			}.call(this, i(75)));
		},
		function (e, n) {
			var i = {}.hasOwnProperty;
			e.exports = function (e, n) {
				return i.call(e, n);
			};
		},
		function (e, n, i) {
			var t = i(0),
				l = i(11),
				r = i(33),
				o = i(62),
				a = t.Symbol,
				c = l("wks");
			e.exports = function (e) {
				return c[e] || (c[e] = (o && a[e]) || (o ? a : r)("Symbol." + e));
			};
		},
		function (e, n, i) {
			var t = i(6);
			e.exports = function (e) {
				if (!t(e)) throw TypeError(String(e) + " is not an object");
				return e;
			};
		},
		function (e, n) {
			e.exports = function (e) {
				try {
					return !!e();
				} catch (e) {
					return !0;
				}
			};
		},
		function (e, n, i) {
			var t = i(8),
				l = i(7),
				r = i(10);
			e.exports = t
				? function (e, n, i) {
						return l.f(e, n, r(1, i));
				  }
				: function (e, n, i) {
						return (e[n] = i), e;
				  };
		},
		function (e, n) {
			e.exports = function (e) {
				return "object" == typeof e ? null !== e : "function" == typeof e;
			};
		},
		function (e, n, i) {
			var t = i(8),
				l = i(35),
				r = i(3),
				o = i(18),
				a = Object.defineProperty;
			n.f = t
				? a
				: function (e, n, i) {
						if ((r(e), (n = o(n, !0)), r(i), l))
							try {
								return a(e, n, i);
							} catch (e) {}
						if ("get" in i || "set" in i)
							throw TypeError("Accessors not supported");
						return "value" in i && (e[n] = i.value), e;
				  };
		},
		function (e, n, i) {
			var t = i(4);
			e.exports = !t(function () {
				return (
					7 !=
					Object.defineProperty({}, "a", {
						get: function () {
							return 7;
						},
					}).a
				);
			});
		},
		function (e, n) {
			e.exports = {};
		},
		function (e, n) {
			e.exports = function (e, n) {
				return {
					enumerable: !(1 & e),
					configurable: !(2 & e),
					writable: !(4 & e),
					value: n,
				};
			};
		},
		function (e, n, i) {
			var t = i(0),
				l = i(19),
				r = i(17),
				o = t["__core-js_shared__"] || l("__core-js_shared__", {});
			(e.exports = function (e, n) {
				return o[e] || (o[e] = void 0 !== n ? n : {});
			})("versions", []).push({
				version: "3.1.3",
				mode: r ? "pure" : "global",
				copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
			});
		},
		function (e, n, i) {
			"use strict";
			Object.defineProperty(n, "__esModule", { value: !0 });
			var t = o(i(43)),
				l = o(i(41)),
				r = o(i(40));
			function o(e) {
				return e && e.__esModule ? e : { default: e };
			}
			n.default = Object.keys(l.default)
				.map(function (e) {
					return new t.default(e, l.default[e], r.default[e]);
				})
				.reduce(function (e, n) {
					return (e[n.name] = n), e;
				}, {});
		},
		function (e, n) {
			e.exports = [
				"constructor",
				"hasOwnProperty",
				"isPrototypeOf",
				"propertyIsEnumerable",
				"toLocaleString",
				"toString",
				"valueOf",
			];
		},
		function (e, n, i) {
			var t = i(72),
				l = i(20);
			e.exports = function (e) {
				return t(l(e));
			};
		},
		function (e, n) {
			e.exports = {};
		},
		function (e, n, i) {
			var t = i(11),
				l = i(33),
				r = t("keys");
			e.exports = function (e) {
				return r[e] || (r[e] = l(e));
			};
		},
		function (e, n) {
			e.exports = !1;
		},
		function (e, n, i) {
			var t = i(6);
			e.exports = function (e, n) {
				if (!t(e)) return e;
				var i, l;
				if (n && "function" == typeof (i = e.toString) && !t((l = i.call(e))))
					return l;
				if ("function" == typeof (i = e.valueOf) && !t((l = i.call(e))))
					return l;
				if (!n && "function" == typeof (i = e.toString) && !t((l = i.call(e))))
					return l;
				throw TypeError("Can't convert object to primitive value");
			};
		},
		function (e, n, i) {
			var t = i(0),
				l = i(5);
			e.exports = function (e, n) {
				try {
					l(t, e, n);
				} catch (i) {
					t[e] = n;
				}
				return n;
			};
		},
		function (e, n) {
			e.exports = function (e) {
				if (void 0 == e) throw TypeError("Can't call method on " + e);
				return e;
			};
		},
		function (e, n) {
			var i = Math.ceil,
				t = Math.floor;
			e.exports = function (e) {
				return isNaN((e = +e)) ? 0 : (e > 0 ? t : i)(e);
			};
		},
		function (e, n, i) {
			var t;
			/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
			/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
			!(function () {
				"use strict";
				var i = (function () {
					function e() {}
					function n(e, n) {
						for (var i = n.length, t = 0; t < i; ++t) l(e, n[t]);
					}
					e.prototype = Object.create(null);
					var i = {}.hasOwnProperty;
					var t = /\s+/;
					function l(e, l) {
						if (l) {
							var r = typeof l;
							"string" === r
								? (function (e, n) {
										for (var i = n.split(t), l = i.length, r = 0; r < l; ++r)
											e[i[r]] = !0;
								  })(e, l)
								: Array.isArray(l)
								? n(e, l)
								: "object" === r
								? (function (e, n) {
										for (var t in n) i.call(n, t) && (e[t] = !!n[t]);
								  })(e, l)
								: "number" === r &&
								  (function (e, n) {
										e[n] = !0;
								  })(e, l);
						}
					}
					return function () {
						for (var i = arguments.length, t = Array(i), l = 0; l < i; l++)
							t[l] = arguments[l];
						var r = new e();
						n(r, t);
						var o = [];
						for (var a in r) r[a] && o.push(a);
						return o.join(" ");
					};
				})();
				void 0 !== e && e.exports
					? (e.exports = i)
					: void 0 ===
							(t = function () {
								return i;
							}.apply(n, [])) || (e.exports = t);
			})();
		},
		function (e, n, i) {
			var t = i(7).f,
				l = i(1),
				r = i(2)("toStringTag");
			e.exports = function (e, n, i) {
				e &&
					!l((e = i ? e : e.prototype), r) &&
					t(e, r, { configurable: !0, value: n });
			};
		},
		function (e, n, i) {
			var t = i(20);
			e.exports = function (e) {
				return Object(t(e));
			};
		},
		function (e, n, i) {
			var t = i(1),
				l = i(24),
				r = i(16),
				o = i(63),
				a = r("IE_PROTO"),
				c = Object.prototype;
			e.exports = o
				? Object.getPrototypeOf
				: function (e) {
						return (
							(e = l(e)),
							t(e, a)
								? e[a]
								: "function" == typeof e.constructor &&
								  e instanceof e.constructor
								? e.constructor.prototype
								: e instanceof Object
								? c
								: null
						);
				  };
		},
		function (e, n, i) {
			"use strict";
			var t,
				l,
				r,
				o = i(25),
				a = i(5),
				c = i(1),
				p = i(2),
				y = i(17),
				h = p("iterator"),
				x = !1;
			[].keys &&
				("next" in (r = [].keys())
					? (l = o(o(r))) !== Object.prototype && (t = l)
					: (x = !0)),
				void 0 == t && (t = {}),
				y ||
					c(t, h) ||
					a(t, h, function () {
						return this;
					}),
				(e.exports = { IteratorPrototype: t, BUGGY_SAFARI_ITERATORS: x });
		},
		function (e, n, i) {
			var t = i(21),
				l = Math.min;
			e.exports = function (e) {
				return e > 0 ? l(t(e), 9007199254740991) : 0;
			};
		},
		function (e, n, i) {
			var t = i(1),
				l = i(14),
				r = i(68),
				o = i(15),
				a = r(!1);
			e.exports = function (e, n) {
				var i,
					r = l(e),
					c = 0,
					p = [];
				for (i in r) !t(o, i) && t(r, i) && p.push(i);
				for (; n.length > c; ) t(r, (i = n[c++])) && (~a(p, i) || p.push(i));
				return p;
			};
		},
		function (e, n, i) {
			var t = i(0),
				l = i(11),
				r = i(5),
				o = i(1),
				a = i(19),
				c = i(36),
				p = i(37),
				y = p.get,
				h = p.enforce,
				x = String(c).split("toString");
			l("inspectSource", function (e) {
				return c.call(e);
			}),
				(e.exports = function (e, n, i, l) {
					var c = !!l && !!l.unsafe,
						p = !!l && !!l.enumerable,
						y = !!l && !!l.noTargetGet;
					"function" == typeof i &&
						("string" != typeof n || o(i, "name") || r(i, "name", n),
						(h(i).source = x.join("string" == typeof n ? n : ""))),
						e !== t
							? (c ? !y && e[n] && (p = !0) : delete e[n],
							  p ? (e[n] = i) : r(e, n, i))
							: p
							? (e[n] = i)
							: a(n, i);
				})(Function.prototype, "toString", function () {
					return ("function" == typeof this && y(this).source) || c.call(this);
				});
		},
		function (e, n) {
			var i = {}.toString;
			e.exports = function (e) {
				return i.call(e).slice(8, -1);
			};
		},
		function (e, n, i) {
			var t = i(8),
				l = i(73),
				r = i(10),
				o = i(14),
				a = i(18),
				c = i(1),
				p = i(35),
				y = Object.getOwnPropertyDescriptor;
			n.f = t
				? y
				: function (e, n) {
						if (((e = o(e)), (n = a(n, !0)), p))
							try {
								return y(e, n);
							} catch (e) {}
						if (c(e, n)) return r(!l.f.call(e, n), e[n]);
				  };
		},
		function (e, n, i) {
			var t = i(0),
				l = i(31).f,
				r = i(5),
				o = i(29),
				a = i(19),
				c = i(71),
				p = i(65);
			e.exports = function (e, n) {
				var i,
					y,
					h,
					x,
					s,
					u = e.target,
					d = e.global,
					f = e.stat;
				if ((i = d ? t : f ? t[u] || a(u, {}) : (t[u] || {}).prototype))
					for (y in n) {
						if (
							((x = n[y]),
							(h = e.noTargetGet ? (s = l(i, y)) && s.value : i[y]),
							!p(d ? y : u + (f ? "." : "#") + y, e.forced) && void 0 !== h)
						) {
							if (typeof x == typeof h) continue;
							c(x, h);
						}
						(e.sham || (h && h.sham)) && r(x, "sham", !0), o(i, y, x, e);
					}
			};
		},
		function (e, n) {
			var i = 0,
				t = Math.random();
			e.exports = function (e) {
				return "Symbol(".concat(
					void 0 === e ? "" : e,
					")_",
					(++i + t).toString(36)
				);
			};
		},
		function (e, n, i) {
			var t = i(0),
				l = i(6),
				r = t.document,
				o = l(r) && l(r.createElement);
			e.exports = function (e) {
				return o ? r.createElement(e) : {};
			};
		},
		function (e, n, i) {
			var t = i(8),
				l = i(4),
				r = i(34);
			e.exports =
				!t &&
				!l(function () {
					return (
						7 !=
						Object.defineProperty(r("div"), "a", {
							get: function () {
								return 7;
							},
						}).a
					);
				});
		},
		function (e, n, i) {
			var t = i(11);
			e.exports = t("native-function-to-string", Function.toString);
		},
		function (e, n, i) {
			var t,
				l,
				r,
				o = i(76),
				a = i(0),
				c = i(6),
				p = i(5),
				y = i(1),
				h = i(16),
				x = i(15),
				s = a.WeakMap;
			if (o) {
				var u = new s(),
					d = u.get,
					f = u.has,
					v = u.set;
				(t = function (e, n) {
					return v.call(u, e, n), n;
				}),
					(l = function (e) {
						return d.call(u, e) || {};
					}),
					(r = function (e) {
						return f.call(u, e);
					});
			} else {
				var g = h("state");
				(x[g] = !0),
					(t = function (e, n) {
						return p(e, g, n), n;
					}),
					(l = function (e) {
						return y(e, g) ? e[g] : {};
					}),
					(r = function (e) {
						return y(e, g);
					});
			}
			e.exports = {
				set: t,
				get: l,
				has: r,
				enforce: function (e) {
					return r(e) ? l(e) : t(e, {});
				},
				getterFor: function (e) {
					return function (n) {
						var i;
						if (!c(n) || (i = l(n)).type !== e)
							throw TypeError("Incompatible receiver, " + e + " required");
						return i;
					};
				},
			};
		},
		function (e, n, i) {
			"use strict";
			Object.defineProperty(n, "__esModule", { value: !0 });
			var t =
					Object.assign ||
					function (e) {
						for (var n = 1; n < arguments.length; n++) {
							var i = arguments[n];
							for (var t in i)
								Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
						}
						return e;
					},
				l = o(i(22)),
				r = o(i(12));
			function o(e) {
				return e && e.__esModule ? e : { default: e };
			}
			n.default = function () {
				var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				if ("undefined" == typeof document)
					throw new Error(
						"`feather.replace()` only works in a browser environment."
					);
				var n = document.querySelectorAll("[data-feather]");
				Array.from(n).forEach(function (n) {
					return (function (e) {
						var n =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {},
							i = (function (e) {
								return Array.from(e.attributes).reduce(function (e, n) {
									return (e[n.name] = n.value), e;
								}, {});
							})(e),
							o = i["data-feather"];
						delete i["data-feather"];
						var a = r.default[o].toSvg(
								t({}, n, i, { class: (0, l.default)(n.class, i.class) })
							),
							c = new DOMParser()
								.parseFromString(a, "image/svg+xml")
								.querySelector("svg");
						e.parentNode.replaceChild(c, e);
					})(n, e);
				});
			};
		},
		function (e, n, i) {
			"use strict";
			Object.defineProperty(n, "__esModule", { value: !0 });
			var t,
				l = i(12),
				r = (t = l) && t.__esModule ? t : { default: t };
			n.default = function (e) {
				var n =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				if (
					(console.warn(
						"feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."
					),
					!e)
				)
					throw new Error(
						"The required `key` (icon name) parameter is missing."
					);
				if (!r.default[e])
					throw new Error(
						"No icon matching '" +
							e +
							"'. See the complete list of icons at https://feathericons.com"
					);
				return r.default[e].toSvg(n);
			};
		},
		function (e) {
			e.exports = {
				activity: ["pulse", "health", "action", "motion"],
				airplay: ["stream", "cast", "mirroring"],
				"alert-circle": ["warning"],
				"alert-octagon": ["warning"],
				"alert-triangle": ["warning"],
				"at-sign": ["mention"],
				award: ["achievement", "badge"],
				aperture: ["camera", "photo"],
				bell: ["alarm", "notification"],
				"bell-off": ["alarm", "notification", "silent"],
				bluetooth: ["wireless"],
				"book-open": ["read"],
				book: ["read", "dictionary", "booklet", "magazine"],
				bookmark: ["read", "clip", "marker", "tag"],
				briefcase: ["work", "bag", "baggage", "folder"],
				clipboard: ["copy"],
				clock: ["time", "watch", "alarm"],
				"cloud-drizzle": ["weather", "shower"],
				"cloud-lightning": ["weather", "bolt"],
				"cloud-rain": ["weather"],
				"cloud-snow": ["weather", "blizzard"],
				cloud: ["weather"],
				codepen: ["logo"],
				codesandbox: ["logo"],
				coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
				command: ["keyboard", "cmd"],
				compass: ["navigation", "safari", "travel"],
				copy: ["clone", "duplicate"],
				"corner-down-left": ["arrow"],
				"corner-down-right": ["arrow"],
				"corner-left-down": ["arrow"],
				"corner-left-up": ["arrow"],
				"corner-right-down": ["arrow"],
				"corner-right-up": ["arrow"],
				"corner-up-left": ["arrow"],
				"corner-up-right": ["arrow"],
				"credit-card": ["purchase", "payment", "cc"],
				crop: ["photo", "image"],
				crosshair: ["aim", "target"],
				database: ["storage"],
				delete: ["remove"],
				disc: ["album", "cd", "dvd", "music"],
				"dollar-sign": ["currency", "money", "payment"],
				droplet: ["water"],
				edit: ["pencil", "change"],
				"edit-2": ["pencil", "change"],
				"edit-3": ["pencil", "change"],
				eye: ["view", "watch"],
				"eye-off": ["view", "watch"],
				"external-link": ["outbound"],
				facebook: ["logo"],
				"fast-forward": ["music"],
				figma: ["logo", "design", "tool"],
				film: ["movie", "video"],
				"folder-minus": ["directory"],
				"folder-plus": ["directory"],
				folder: ["directory"],
				framer: ["logo", "design", "tool"],
				frown: ["emoji", "face", "bad", "sad", "emotion"],
				gift: ["present", "box", "birthday", "party"],
				"git-branch": ["code", "version control"],
				"git-commit": ["code", "version control"],
				"git-merge": ["code", "version control"],
				"git-pull-request": ["code", "version control"],
				github: ["logo", "version control"],
				gitlab: ["logo", "version control"],
				global: ["world", "browser", "language", "translate"],
				"hard-drive": ["computer", "server"],
				hash: ["hashtag", "number", "pound"],
				headphones: ["music", "audio"],
				heart: ["like", "love"],
				"help-circle": ["question mark"],
				hexagon: ["shape", "node.js", "logo"],
				home: ["house"],
				image: ["picture"],
				inbox: ["email"],
				instagram: ["logo", "camera"],
				key: ["password", "login", "authentication"],
				"life-bouy": ["help", "life ring", "support"],
				linkedin: ["logo"],
				lock: ["security", "password"],
				"log-in": ["sign in", "arrow"],
				"log-out": ["sign out", "arrow"],
				mail: ["email"],
				"map-pin": ["location", "navigation", "travel", "marker"],
				map: ["location", "navigation", "travel"],
				maximize: ["fullscreen"],
				"maximize-2": ["fullscreen", "arrows"],
				meh: ["emoji", "face", "neutral", "emotion"],
				menu: ["bars", "navigation", "hamburger"],
				"message-circle": ["comment", "chat"],
				"message-square": ["comment", "chat"],
				"mic-off": ["record"],
				mic: ["record"],
				minimize: ["exit fullscreen"],
				"minimize-2": ["exit fullscreen", "arrows"],
				monitor: ["tv"],
				moon: ["dark", "night"],
				"more-horizontal": ["ellipsis"],
				"more-vertical": ["ellipsis"],
				"mouse-pointer": ["arrow", "cursor"],
				move: ["arrows"],
				navigation: ["location", "travel"],
				"navigation-2": ["location", "travel"],
				octagon: ["stop"],
				package: ["box"],
				paperclip: ["attachment"],
				pause: ["music", "stop"],
				"pause-circle": ["music", "stop"],
				"pen-tool": ["vector", "drawing"],
				play: ["music", "start"],
				"play-circle": ["music", "start"],
				plus: ["add", "new"],
				"plus-circle": ["add", "new"],
				"plus-square": ["add", "new"],
				pocket: ["logo", "save"],
				power: ["on", "off"],
				radio: ["signal"],
				rewind: ["music"],
				rss: ["feed", "subscribe"],
				save: ["floppy disk"],
				search: ["find", "magnifier", "magnifying glass"],
				send: ["message", "mail", "paper airplane"],
				settings: ["cog", "edit", "gear", "preferences"],
				shield: ["security"],
				"shield-off": ["security"],
				"shopping-bag": ["ecommerce", "cart", "purchase", "store"],
				"shopping-cart": ["ecommerce", "cart", "purchase", "store"],
				shuffle: ["music"],
				"skip-back": ["music"],
				"skip-forward": ["music"],
				slash: ["ban", "no"],
				sliders: ["settings", "controls"],
				smile: ["emoji", "face", "happy", "good", "emotion"],
				speaker: ["music"],
				star: ["bookmark", "favorite", "like"],
				sun: ["brightness", "weather", "light"],
				sunrise: ["weather"],
				sunset: ["weather"],
				tag: ["label"],
				target: ["bullseye"],
				terminal: ["code", "command line"],
				"thumbs-down": ["dislike", "bad"],
				"thumbs-up": ["like", "good"],
				"toggle-left": ["on", "off", "switch"],
				"toggle-right": ["on", "off", "switch"],
				trash: ["garbage", "delete", "remove"],
				"trash-2": ["garbage", "delete", "remove"],
				triangle: ["delta"],
				truck: ["delivery", "van", "shipping"],
				twitter: ["logo"],
				umbrella: ["rain", "weather"],
				"video-off": ["camera", "movie", "film"],
				video: ["camera", "movie", "film"],
				voicemail: ["phone"],
				volume: ["music", "sound", "mute"],
				"volume-1": ["music", "sound"],
				"volume-2": ["music", "sound"],
				"volume-x": ["music", "sound", "mute"],
				watch: ["clock", "time"],
				wind: ["weather", "air"],
				"x-circle": ["cancel", "close", "delete", "remove", "times"],
				"x-octagon": ["delete", "stop", "alert", "warning", "times"],
				"x-square": ["cancel", "close", "delete", "remove", "times"],
				x: ["cancel", "close", "delete", "remove", "times"],
				youtube: ["logo", "video", "play"],
				"zap-off": ["flash", "camera", "lightning"],
				zap: ["flash", "camera", "lightning"],
			};
		},
		function (e) {
			e.exports = {
				activity:
					'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
				airplay:
					'<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
				"alert-circle":
					'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
				"alert-octagon":
					'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
				"alert-triangle":
					'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
				"align-center":
					'<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
				"align-justify":
					'<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
				"align-left":
					'<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
				"align-right":
					'<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
				anchor:
					'<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
				aperture:
					'<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
				archive:
					'<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
				"arrow-down-circle":
					'<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
				"arrow-down-left":
					'<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
				"arrow-down-right":
					'<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
				"arrow-down":
					'<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
				"arrow-left-circle":
					'<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
				"arrow-left":
					'<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
				"arrow-right-circle":
					'<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
				"arrow-right":
					'<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
				"arrow-up-circle":
					'<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
				"arrow-up-left":
					'<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
				"arrow-up-right":
					'<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
				"arrow-up":
					'<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
				"at-sign":
					'<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
				award:
					'<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
				"bar-chart-2":
					'<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
				"bar-chart":
					'<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
				"battery-charging":
					'<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
				battery:
					'<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
				"bell-off":
					'<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
				bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
				bluetooth:
					'<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
				bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
				"book-open":
					'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
				book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
				bookmark:
					'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
				box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
				briefcase:
					'<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
				calendar:
					'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
				"camera-off":
					'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
				camera:
					'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
				cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
				"check-circle":
					'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
				"check-square":
					'<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
				check: '<polyline points="20 6 9 17 4 12"></polyline>',
				"chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
				"chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
				"chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
				"chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
				"chevrons-down":
					'<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
				"chevrons-left":
					'<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
				"chevrons-right":
					'<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
				"chevrons-up":
					'<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
				chrome:
					'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
				circle: '<circle cx="12" cy="12" r="10"></circle>',
				clipboard:
					'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
				clock:
					'<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
				"cloud-drizzle":
					'<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
				"cloud-lightning":
					'<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
				"cloud-off":
					'<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
				"cloud-rain":
					'<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
				"cloud-snow":
					'<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
				cloud:
					'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
				code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
				codepen:
					'<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
				codesandbox:
					'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
				coffee:
					'<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
				columns:
					'<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
				command:
					'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
				compass:
					'<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
				copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
				"corner-down-left":
					'<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
				"corner-down-right":
					'<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
				"corner-left-down":
					'<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
				"corner-left-up":
					'<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
				"corner-right-down":
					'<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
				"corner-right-up":
					'<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
				"corner-up-left":
					'<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
				"corner-up-right":
					'<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
				cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
				"credit-card":
					'<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
				crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
				crosshair:
					'<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
				database:
					'<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
				delete:
					'<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
				disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
				"dollar-sign":
					'<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
				"download-cloud":
					'<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
				download:
					'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
				droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
				"edit-2":
					'<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
				"edit-3":
					'<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
				edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
				"external-link":
					'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
				"eye-off":
					'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
				eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
				facebook:
					'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
				"fast-forward":
					'<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
				feather:
					'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
				figma:
					'<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
				"file-minus":
					'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
				"file-plus":
					'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
				"file-text":
					'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
				file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
				film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
				filter:
					'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
				flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
				"folder-minus":
					'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
				"folder-plus":
					'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
				folder:
					'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
				framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
				frown:
					'<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
				gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
				"git-branch":
					'<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
				"git-commit":
					'<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
				"git-merge":
					'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
				"git-pull-request":
					'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
				github:
					'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
				gitlab:
					'<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
				globe:
					'<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
				grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
				"hard-drive":
					'<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
				hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
				headphones:
					'<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
				heart:
					'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
				"help-circle":
					'<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
				hexagon:
					'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
				home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
				image:
					'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
				inbox:
					'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
				info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
				instagram:
					'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
				italic:
					'<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
				key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
				layers:
					'<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
				layout:
					'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
				"life-buoy":
					'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
				"link-2":
					'<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
				link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
				linkedin:
					'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
				list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
				loader:
					'<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
				lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
				"log-in":
					'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
				"log-out":
					'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
				mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
				"map-pin":
					'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
				map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
				"maximize-2":
					'<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
				maximize:
					'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
				meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
				menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
				"message-circle":
					'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
				"message-square":
					'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
				"mic-off":
					'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
				mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
				"minimize-2":
					'<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
				minimize:
					'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
				"minus-circle":
					'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
				"minus-square":
					'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
				minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
				monitor:
					'<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
				moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
				"more-horizontal":
					'<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
				"more-vertical":
					'<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
				"mouse-pointer":
					'<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
				move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
				music:
					'<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
				"navigation-2":
					'<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
				navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
				octagon:
					'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
				package:
					'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
				paperclip:
					'<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
				"pause-circle":
					'<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
				pause:
					'<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
				"pen-tool":
					'<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
				percent:
					'<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
				"phone-call":
					'<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
				"phone-forwarded":
					'<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
				"phone-incoming":
					'<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
				"phone-missed":
					'<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
				"phone-off":
					'<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
				"phone-outgoing":
					'<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
				phone:
					'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
				"pie-chart":
					'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
				"play-circle":
					'<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
				play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
				"plus-circle":
					'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
				"plus-square":
					'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
				plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
				pocket:
					'<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
				power:
					'<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
				printer:
					'<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
				radio:
					'<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
				"refresh-ccw":
					'<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
				"refresh-cw":
					'<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
				repeat:
					'<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
				rewind:
					'<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
				"rotate-ccw":
					'<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
				"rotate-cw":
					'<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
				rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
				save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
				scissors:
					'<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
				search:
					'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
				send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
				server:
					'<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
				settings:
					'<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
				"share-2":
					'<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
				share:
					'<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
				"shield-off":
					'<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
				shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
				"shopping-bag":
					'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
				"shopping-cart":
					'<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
				shuffle:
					'<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
				sidebar:
					'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
				"skip-back":
					'<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
				"skip-forward":
					'<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
				slack:
					'<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
				slash:
					'<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
				sliders:
					'<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
				smartphone:
					'<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
				smile:
					'<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
				speaker:
					'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
				square:
					'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
				star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
				"stop-circle":
					'<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
				sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
				sunrise:
					'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
				sunset:
					'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
				tablet:
					'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
				tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
				target:
					'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
				terminal:
					'<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
				thermometer:
					'<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
				"thumbs-down":
					'<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
				"thumbs-up":
					'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
				"toggle-left":
					'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
				"toggle-right":
					'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
				tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
				"trash-2":
					'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
				trash:
					'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
				trello:
					'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
				"trending-down":
					'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
				"trending-up":
					'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
				triangle:
					'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
				truck:
					'<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
				tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
				twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
				twitter:
					'<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
				type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
				umbrella:
					'<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
				underline:
					'<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
				unlock:
					'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
				"upload-cloud":
					'<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
				upload:
					'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
				"user-check":
					'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
				"user-minus":
					'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
				"user-plus":
					'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
				"user-x":
					'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
				user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
				users:
					'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
				"video-off":
					'<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
				video:
					'<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
				voicemail:
					'<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
				"volume-1":
					'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
				"volume-2":
					'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
				"volume-x":
					'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
				volume:
					'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
				watch:
					'<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
				"wifi-off":
					'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
				wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
				wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
				"x-circle":
					'<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
				"x-octagon":
					'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
				"x-square":
					'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
				x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
				youtube:
					'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
				"zap-off":
					'<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
				zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
				"zoom-in":
					'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
				"zoom-out":
					'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
			};
		},
		function (e) {
			e.exports = {
				xmlns: "http://www.w3.org/2000/svg",
				width: 24,
				height: 24,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": 2,
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
			};
		},
		function (e, n, i) {
			"use strict";
			Object.defineProperty(n, "__esModule", { value: !0 });
			var t =
					Object.assign ||
					function (e) {
						for (var n = 1; n < arguments.length; n++) {
							var i = arguments[n];
							for (var t in i)
								Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
						}
						return e;
					},
				l = (function () {
					function e(e, n) {
						for (var i = 0; i < n.length; i++) {
							var t = n[i];
							(t.enumerable = t.enumerable || !1),
								(t.configurable = !0),
								"value" in t && (t.writable = !0),
								Object.defineProperty(e, t.key, t);
						}
					}
					return function (n, i, t) {
						return i && e(n.prototype, i), t && e(n, t), n;
					};
				})(),
				r = a(i(22)),
				o = a(i(42));
			function a(e) {
				return e && e.__esModule ? e : { default: e };
			}
			var c = (function () {
				function e(n, i) {
					var l =
						arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
					!(function (e, n) {
						if (!(e instanceof n))
							throw new TypeError("Cannot call a class as a function");
					})(this, e),
						(this.name = n),
						(this.contents = i),
						(this.tags = l),
						(this.attrs = t({}, o.default, { class: "feather feather-" + n }));
				}
				return (
					l(e, [
						{
							key: "toSvg",
							value: function () {
								var e =
									arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: {};
								return (
									"<svg " +
									(function (e) {
										return Object.keys(e)
											.map(function (n) {
												return n + '="' + e[n] + '"';
											})
											.join(" ");
									})(
										t({}, this.attrs, e, {
											class: (0, r.default)(this.attrs.class, e.class),
										})
									) +
									">" +
									this.contents +
									"</svg>"
								);
							},
						},
						{
							key: "toString",
							value: function () {
								return this.contents;
							},
						},
					]),
					e
				);
			})();
			n.default = c;
		},
		function (e, n, i) {
			"use strict";
			var t = o(i(12)),
				l = o(i(39)),
				r = o(i(38));
			function o(e) {
				return e && e.__esModule ? e : { default: e };
			}
			e.exports = { icons: t.default, toSvg: l.default, replace: r.default };
		},
		function (e, n, i) {
			e.exports = i(0);
		},
		function (e, n, i) {
			var t = i(2)("iterator"),
				l = !1;
			try {
				var r = 0,
					o = {
						next: function () {
							return { done: !!r++ };
						},
						return: function () {
							l = !0;
						},
					};
				(o[t] = function () {
					return this;
				}),
					Array.from(o, function () {
						throw 2;
					});
			} catch (e) {}
			e.exports = function (e, n) {
				if (!n && !l) return !1;
				var i = !1;
				try {
					var r = {};
					(r[t] = function () {
						return {
							next: function () {
								return { done: (i = !0) };
							},
						};
					}),
						e(r);
				} catch (e) {}
				return i;
			};
		},
		function (e, n, i) {
			var t = i(30),
				l = i(2)("toStringTag"),
				r =
					"Arguments" ==
					t(
						(function () {
							return arguments;
						})()
					);
			e.exports = function (e) {
				var n, i, o;
				return void 0 === e
					? "Undefined"
					: null === e
					? "Null"
					: "string" ==
					  typeof (i = (function (e, n) {
							try {
								return e[n];
							} catch (e) {}
					  })((n = Object(e)), l))
					? i
					: r
					? t(n)
					: "Object" == (o = t(n)) && "function" == typeof n.callee
					? "Arguments"
					: o;
			};
		},
		function (e, n, i) {
			var t = i(47),
				l = i(9),
				r = i(2)("iterator");
			e.exports = function (e) {
				if (void 0 != e) return e[r] || e["@@iterator"] || l[t(e)];
			};
		},
		function (e, n, i) {
			"use strict";
			var t = i(18),
				l = i(7),
				r = i(10);
			e.exports = function (e, n, i) {
				var o = t(n);
				o in e ? l.f(e, o, r(0, i)) : (e[o] = i);
			};
		},
		function (e, n, i) {
			var t = i(2),
				l = i(9),
				r = t("iterator"),
				o = Array.prototype;
			e.exports = function (e) {
				return void 0 !== e && (l.Array === e || o[r] === e);
			};
		},
		function (e, n, i) {
			var t = i(3);
			e.exports = function (e, n, i, l) {
				try {
					return l ? n(t(i)[0], i[1]) : n(i);
				} catch (n) {
					var r = e.return;
					throw (void 0 !== r && t(r.call(e)), n);
				}
			};
		},
		function (e, n) {
			e.exports = function (e) {
				if ("function" != typeof e)
					throw TypeError(String(e) + " is not a function");
				return e;
			};
		},
		function (e, n, i) {
			var t = i(52);
			e.exports = function (e, n, i) {
				if ((t(e), void 0 === n)) return e;
				switch (i) {
					case 0:
						return function () {
							return e.call(n);
						};
					case 1:
						return function (i) {
							return e.call(n, i);
						};
					case 2:
						return function (i, t) {
							return e.call(n, i, t);
						};
					case 3:
						return function (i, t, l) {
							return e.call(n, i, t, l);
						};
				}
				return function () {
					return e.apply(n, arguments);
				};
			};
		},
		function (e, n, i) {
			"use strict";
			var t = i(53),
				l = i(24),
				r = i(51),
				o = i(50),
				a = i(27),
				c = i(49),
				p = i(48);
			e.exports = function (e) {
				var n,
					i,
					y,
					h,
					x = l(e),
					s = "function" == typeof this ? this : Array,
					u = arguments.length,
					d = u > 1 ? arguments[1] : void 0,
					f = void 0 !== d,
					v = 0,
					g = p(x);
				if (
					(f && (d = t(d, u > 2 ? arguments[2] : void 0, 2)),
					void 0 == g || (s == Array && o(g)))
				)
					for (i = new s((n = a(x.length))); n > v; v++)
						c(i, v, f ? d(x[v], v) : x[v]);
				else
					for (h = g.call(x), i = new s(); !(y = h.next()).done; v++)
						c(i, v, f ? r(h, d, [y.value, v], !0) : y.value);
				return (i.length = v), i;
			};
		},
		function (e, n, i) {
			var t = i(32),
				l = i(54);
			t(
				{
					target: "Array",
					stat: !0,
					forced: !i(46)(function (e) {
						Array.from(e);
					}),
				},
				{ from: l }
			);
		},
		function (e, n, i) {
			var t = i(6),
				l = i(3);
			e.exports = function (e, n) {
				if ((l(e), !t(n) && null !== n))
					throw TypeError("Can't set " + String(n) + " as a prototype");
			};
		},
		function (e, n, i) {
			var t = i(56);
			e.exports =
				Object.setPrototypeOf ||
				("__proto__" in {}
					? (function () {
							var e,
								n = !1,
								i = {};
							try {
								(e = Object.getOwnPropertyDescriptor(
									Object.prototype,
									"__proto__"
								).set).call(i, []),
									(n = i instanceof Array);
							} catch (e) {}
							return function (i, l) {
								return t(i, l), n ? e.call(i, l) : (i.__proto__ = l), i;
							};
					  })()
					: void 0);
		},
		function (e, n, i) {
			var t = i(0).document;
			e.exports = t && t.documentElement;
		},
		function (e, n, i) {
			var t = i(28),
				l = i(13);
			e.exports =
				Object.keys ||
				function (e) {
					return t(e, l);
				};
		},
		function (e, n, i) {
			var t = i(8),
				l = i(7),
				r = i(3),
				o = i(59);
			e.exports = t
				? Object.defineProperties
				: function (e, n) {
						r(e);
						for (var i, t = o(n), a = t.length, c = 0; a > c; )
							l.f(e, (i = t[c++]), n[i]);
						return e;
				  };
		},
		function (e, n, i) {
			var t = i(3),
				l = i(60),
				r = i(13),
				o = i(15),
				a = i(58),
				c = i(34),
				p = i(16)("IE_PROTO"),
				y = function () {},
				h = function () {
					var e,
						n = c("iframe"),
						i = r.length;
					for (
						n.style.display = "none",
							a.appendChild(n),
							n.src = String("javascript:"),
							(e = n.contentWindow.document).open(),
							e.write("<script>document.F=Object</script>"),
							e.close(),
							h = e.F;
						i--;

					)
						delete h.prototype[r[i]];
					return h();
				};
			(e.exports =
				Object.create ||
				function (e, n) {
					var i;
					return (
						null !== e
							? ((y.prototype = t(e)),
							  (i = new y()),
							  (y.prototype = null),
							  (i[p] = e))
							: (i = h()),
						void 0 === n ? i : l(i, n)
					);
				}),
				(o[p] = !0);
		},
		function (e, n, i) {
			var t = i(4);
			e.exports =
				!!Object.getOwnPropertySymbols &&
				!t(function () {
					return !String(Symbol());
				});
		},
		function (e, n, i) {
			var t = i(4);
			e.exports = !t(function () {
				function e() {}
				return (
					(e.prototype.constructor = null),
					Object.getPrototypeOf(new e()) !== e.prototype
				);
			});
		},
		function (e, n, i) {
			"use strict";
			var t = i(26).IteratorPrototype,
				l = i(61),
				r = i(10),
				o = i(23),
				a = i(9),
				c = function () {
					return this;
				};
			e.exports = function (e, n, i) {
				var p = n + " Iterator";
				return (
					(e.prototype = l(t, { next: r(1, i) })),
					o(e, p, !1, !0),
					(a[p] = c),
					e
				);
			};
		},
		function (e, n, i) {
			var t = i(4),
				l = /#|\.prototype\./,
				r = function (e, n) {
					var i = a[o(e)];
					return i == p || (i != c && ("function" == typeof n ? t(n) : !!n));
				},
				o = (r.normalize = function (e) {
					return String(e).replace(l, ".").toLowerCase();
				}),
				a = (r.data = {}),
				c = (r.NATIVE = "N"),
				p = (r.POLYFILL = "P");
			e.exports = r;
		},
		function (e, n) {
			n.f = Object.getOwnPropertySymbols;
		},
		function (e, n, i) {
			var t = i(21),
				l = Math.max,
				r = Math.min;
			e.exports = function (e, n) {
				var i = t(e);
				return i < 0 ? l(i + n, 0) : r(i, n);
			};
		},
		function (e, n, i) {
			var t = i(14),
				l = i(27),
				r = i(67);
			e.exports = function (e) {
				return function (n, i, o) {
					var a,
						c = t(n),
						p = l(c.length),
						y = r(o, p);
					if (e && i != i) {
						for (; p > y; ) if ((a = c[y++]) != a) return !0;
					} else
						for (; p > y; y++)
							if ((e || y in c) && c[y] === i) return e || y || 0;
					return !e && -1;
				};
			};
		},
		function (e, n, i) {
			var t = i(28),
				l = i(13).concat("length", "prototype");
			n.f =
				Object.getOwnPropertyNames ||
				function (e) {
					return t(e, l);
				};
		},
		function (e, n, i) {
			var t = i(0),
				l = i(69),
				r = i(66),
				o = i(3),
				a = t.Reflect;
			e.exports =
				(a && a.ownKeys) ||
				function (e) {
					var n = l.f(o(e)),
						i = r.f;
					return i ? n.concat(i(e)) : n;
				};
		},
		function (e, n, i) {
			var t = i(1),
				l = i(70),
				r = i(31),
				o = i(7);
			e.exports = function (e, n) {
				for (var i = l(n), a = o.f, c = r.f, p = 0; p < i.length; p++) {
					var y = i[p];
					t(e, y) || a(e, y, c(n, y));
				}
			};
		},
		function (e, n, i) {
			var t = i(4),
				l = i(30),
				r = "".split;
			e.exports = t(function () {
				return !Object("z").propertyIsEnumerable(0);
			})
				? function (e) {
						return "String" == l(e) ? r.call(e, "") : Object(e);
				  }
				: Object;
		},
		function (e, n, i) {
			"use strict";
			var t = {}.propertyIsEnumerable,
				l = Object.getOwnPropertyDescriptor,
				r = l && !t.call({ 1: 2 }, 1);
			n.f = r
				? function (e) {
						var n = l(this, e);
						return !!n && n.enumerable;
				  }
				: t;
		},
		function (e, n, i) {
			"use strict";
			var t = i(32),
				l = i(64),
				r = i(25),
				o = i(57),
				a = i(23),
				c = i(5),
				p = i(29),
				y = i(2),
				h = i(17),
				x = i(9),
				s = i(26),
				u = s.IteratorPrototype,
				d = s.BUGGY_SAFARI_ITERATORS,
				f = y("iterator"),
				v = function () {
					return this;
				};
			e.exports = function (e, n, i, y, s, g, m) {
				l(i, n, y);
				var M,
					w,
					b,
					z = function (e) {
						if (e === s && O) return O;
						if (!d && e in H) return H[e];
						switch (e) {
							case "keys":
							case "values":
							case "entries":
								return function () {
									return new i(this, e);
								};
						}
						return function () {
							return new i(this);
						};
					},
					A = n + " Iterator",
					k = !1,
					H = e.prototype,
					V = H[f] || H["@@iterator"] || (s && H[s]),
					O = (!d && V) || z(s),
					j = ("Array" == n && H.entries) || V;
				if (
					(j &&
						((M = r(j.call(new e()))),
						u !== Object.prototype &&
							M.next &&
							(h ||
								r(M) === u ||
								(o ? o(M, u) : "function" != typeof M[f] && c(M, f, v)),
							a(M, A, !0, !0),
							h && (x[A] = v))),
					"values" == s &&
						V &&
						"values" !== V.name &&
						((k = !0),
						(O = function () {
							return V.call(this);
						})),
					(h && !m) || H[f] === O || c(H, f, O),
					(x[n] = O),
					s)
				)
					if (
						((w = {
							values: z("values"),
							keys: g ? O : z("keys"),
							entries: z("entries"),
						}),
						m)
					)
						for (b in w) (!d && !k && b in H) || p(H, b, w[b]);
					else t({ target: n, proto: !0, forced: d || k }, w);
				return w;
			};
		},
		function (e, n) {
			var i;
			i = (function () {
				return this;
			})();
			try {
				i = i || Function("return this")() || (0, eval)("this");
			} catch (e) {
				"object" == typeof window && (i = window);
			}
			e.exports = i;
		},
		function (e, n, i) {
			var t = i(0),
				l = i(36),
				r = t.WeakMap;
			e.exports = "function" == typeof r && /native code/.test(l.call(r));
		},
		function (e, n, i) {
			var t = i(21),
				l = i(20);
			e.exports = function (e, n, i) {
				var r,
					o,
					a = String(l(e)),
					c = t(n),
					p = a.length;
				return c < 0 || c >= p
					? i
						? ""
						: void 0
					: (r = a.charCodeAt(c)) < 55296 ||
					  r > 56319 ||
					  c + 1 === p ||
					  (o = a.charCodeAt(c + 1)) < 56320 ||
					  o > 57343
					? i
						? a.charAt(c)
						: r
					: i
					? a.slice(c, c + 2)
					: o - 56320 + ((r - 55296) << 10) + 65536;
			};
		},
		function (e, n, i) {
			"use strict";
			var t = i(77),
				l = i(37),
				r = i(74),
				o = l.set,
				a = l.getterFor("String Iterator");
			r(
				String,
				"String",
				function (e) {
					o(this, { type: "String Iterator", string: String(e), index: 0 });
				},
				function () {
					var e,
						n = a(this),
						i = n.string,
						l = n.index;
					return l >= i.length
						? { value: void 0, done: !0 }
						: ((e = t(i, l, !0)),
						  (n.index += e.length),
						  { value: e, done: !1 });
				}
			);
		},
		function (e, n, i) {
			i(78), i(55);
			var t = i(45);
			e.exports = t.Array.from;
		},
		function (e, n, i) {
			i(79), (e.exports = i(44));
		},
	]);
});
//# sourceMappingURL=feather.min.js.map
/**
 * Theme: Metrica - Responsive Bootstrap 5 Admin Dashboard
 * Author: Mannatthemes
 * Module/App: Main Js
 */

feather.replace();
// Menu sticky
function windowScroll() {
	var navbar = document.getElementById("navbar-custom");
	if (
		document.body.scrollTop >= 50 ||
		document.documentElement.scrollTop >= 50
	) {
		navbar?.classList.add("nav-sticky");
	} else {
		navbar?.classList.remove("nav-sticky");
	}
}
window.addEventListener("scroll", (ev) => {
	ev.preventDefault();
	windowScroll();
});
var triggerTabList = [].slice.call(document.querySelectorAll("#tab-menu a"));
triggerTabList.forEach(function (triggerEl) {
	var tabTrigger = new bootstrap.Tab(triggerEl);
	triggerEl.addEventListener("click", function (event) {
		event.preventDefault();
		tabTrigger.show();
		document.body.classList.remove("enlarge-menu");
	});
});
var collapses = document.querySelectorAll(".navbar-nav .collapse");
collapses.forEach((collapse) => {
	// Init collapses
	var collapseInstance = new bootstrap.Collapse(collapse, {
		toggle: false,
	});
	// Hide sibling collapses on `show.bs.collapse`
	collapse.addEventListener("show.bs.collapse", (e) => {
		e.stopPropagation();
		var closestCollapse = collapse.parentElement.closest(".collapse");
		if (closestCollapse != null) {
			var siblingCollapses = closestCollapse.querySelectorAll(".collapse");
			siblingCollapses.forEach((siblingCollapse) => {
				var siblingCollapseInstance =
					bootstrap.Collapse.getInstance(siblingCollapse);
				if (siblingCollapseInstance === collapseInstance) {
					return;
				}
				siblingCollapseInstance.hide();
			});
		}
	});
	// Hide nested collapses on `hide.bs.collapse`
	collapse.addEventListener("hide.bs.collapse", (e) => {
		e.stopPropagation();
		var childCollapses = collapse.querySelectorAll(".collapse");
		childCollapses.forEach((childCollapse) => {
			var childCollapseInstance = bootstrap.Collapse.getInstance(childCollapse);
			childCollapseInstance.hide();
		});
	});
});
//  Toggle sidebar onclick
try {
	document
		.getElementById("togglemenu")
		.addEventListener("click", function (event) {
			event.preventDefault();
			document.body.classList.toggle("enlarge-menu");
		});
} catch (err) {}
// Left sidebar Tab Menu Responsive Resize
if (window.screen.width < 1025) {
	document
		.getElementsByTagName("body")[0]
		.classList.add("enlarge-menu", "enlarge-menu-all");
} else if (window.screen.width < 1340) {
	document.getElementsByTagName("body")[0].classList.remove("enlarge-menu-all");
	document.getElementsByTagName("body")[0].classList.add("enlarge-menu");
} else {
	document
		.getElementsByTagName("body")[0]
		.classList.remove("enlarge-menu", "enlarge-menu-all");
}
window.addEventListener("resize", function () {
	if (window.screen.width < 1025) {
		document
			.getElementsByTagName("body")[0]
			.classList.add("enlarge-menu", "enlarge-menu-all");
	} else if (window.screen.width < 1340) {
		document
			.getElementsByTagName("body")[0]
			.classList.remove("enlarge-menu-all");
		document.getElementsByTagName("body")[0].classList.add("enlarge-menu");
	} else {
		document
			.getElementsByTagName("body")[0]
			.classList.remove("enlarge-menu", "enlarge-menu-all");
	}
});
document
	.querySelectorAll(".leftbar-tab-menu a")
	.forEach(function (element, index) {
		var pageUrl = window.location.href.split(/[?#]/)[0];
		if (element.href == pageUrl) {
			element.classList.add("active");
			if (
				!element.parentElement.parentElement.classList.contains("navbar-nav")
			) {
				var collapse1 = element.closest(".collapse");
				if (collapse1) {
					collapse1.classList.add("show");
					var navLink1 = collapse1.parentElement.querySelector("a");
					navLink1.classList.remove("collapsed");
					navLink1.setAttribute("aria-expanded", "true");
					var collapse2 = collapse1.parentElement.closest(".collapse");
					if (collapse2) {
						collapse2.classList.add("show");
						var navLink2 = collapse2.parentElement.querySelector("a");
						navLink2.classList.remove("collapsed");
						collapse2.parentElement.childNodes[1].setAttribute(
							"aria-expanded",
							"true"
						);
					}
				}
			}
			var tabPane = element.closest(".tab-pane");
			if (tabPane) {
				tabPane.classList.add("active");
				document.querySelectorAll("a").forEach(function (elementA, index) {
					if (elementA.href.includes(tabPane.id)) {
						elementA.classList.add("active");
					}
				});
			}
		}
	});
var tooltipTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});
var dropdowns = document.querySelectorAll(
	".dropup, .dropend, .dropdown, .dropstart"
);
var events = ["click"];
function toggleDropdown(e, dropdown) {
	var parentMenu = dropdown.closest(".dropdown-menu");
	if (parentMenu) {
		e.preventDefault();
		e.stopPropagation();
		var currentMenu = dropdown.querySelector(".dropdown-menu");
		var siblingMenus = parentMenu.querySelectorAll(".dropdown-menu");
		[].forEach.call(siblingMenus, function (menu) {
			if (menu !== currentMenu) {
				menu.classList.remove("show");
			}
		});
		currentMenu.classList.toggle("show");
	}
}
function hideDropdowns(dropdown) {
	var currentMenu = dropdown.querySelector(".dropdown-menu");
	var nestedMenus = currentMenu.querySelectorAll(".dropdown-menu");
	if (nestedMenus) {
		[].forEach.call(nestedMenus, function (menu) {
			menu.classList.remove("show");
		});
	}
}
[].forEach.call(dropdowns, function (dropdown) {
	var toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
	if (toggle) {
		toggle.addEventListener(events[0], function (e) {
			toggleDropdown(e, dropdown);
		});
	} else {
		hideDropdowns(dropdown);
	}
});
//Menu
// Toggle menu
function toggleMenu() {
	document.getElementById("mobileToggle").classList.toggle("open");
	var isOpen = document.getElementById("navigation");
	if (isOpen.style.display === "block") {
		isOpen.style.display = "none";
	} else {
		isOpen.style.display = "block";
	}
}

function activateMenu() {
	var menuItems = document.getElementsByClassName("sub-menu-item");
	if (menuItems) {
		var matchingMenuItem = null;
		for (var idx = 0; idx < menuItems.length; idx++) {
			if (menuItems[idx].href === window.location.href) {
				matchingMenuItem = menuItems[idx];
			}
		}
		if (matchingMenuItem) {
			matchingMenuItem.classList.add("active");
			var immediateParent = getClosest(matchingMenuItem, "li");
			if (immediateParent) {
				immediateParent.classList.add("active");
			}
			var parent = getClosest(matchingMenuItem, ".parent-menu-item");
			if (parent) {
				parent.classList.add("active");
				var parentMenuitem = parent.querySelector(".menu-item");
				if (parentMenuitem) {
					parentMenuitem.classList.add("active");
				}
				var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
				if (parentOfParent) {
					parentOfParent.classList.add("active");
				}
			} else {
				var parentOfParent = getClosest(
					matchingMenuItem,
					".parent-parent-menu-item"
				);
				if (parentOfParent) {
					parentOfParent.classList.add("active");
				}
			}
		}
	}
}

document.querySelectorAll(".menu-body a").forEach(function (element, index) {
	var pageUrl = window.location.href.split(/[?#]/)[0];
	const target = element;
	if (element.href == pageUrl) {
		target.classList.add("active");
		target.parentNode.classList.add("menuitem-active");
		target.parentNode
			.querySelector(".nav-link")
			?.setAttribute("aria-expanded", "true");
		target.parentNode.parentNode.parentNode.classList.add("show");
		target.parentNode.parentNode.parentNode.parentNode.classList.add(
			"menuitem-active"
		);
		target.parentNode.parentNode.parentNode.parentNode
			.querySelector(".nav-link")
			?.setAttribute("aria-expanded", "true"); // add active to li of the current link

		var firstLevelParent =
			target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
		if (firstLevelParent.getAttribute("id") !== "sidebar-menu") {
			firstLevelParent.classList.add("show");
		}

		target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add(
			"menuitem-active"
		);
		target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
			.querySelector(".nav-link")
			?.setAttribute("aria-expanded", "true");

		var secondLevelParent =
			target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
				.parentNode.parentNode.parentNode;
		if (secondLevelParent && secondLevelParent instanceof HTMLElement) {
			if (secondLevelParent.getAttribute("id") !== "wrapper")
				secondLevelParent.classList.add("show");
		}

		var upperLevelParent =
			target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
				.parentNode.parentNode.parentNode;
		if (upperLevelParent) {
			upperLevelParent = upperLevelParent.parentNode;
		}

		if (upperLevelParent) {
			upperLevelParent.classList.add("menuitem-active");
			//upperLevelParent.querySelector('.nav-link')?.setAttribute('aria-expanded',"true");
		}
	}
});

if (document.querySelectorAll("#navigation").length) {
	document
		.querySelectorAll("#navigation li a")
		.forEach(function (element, index) {
			var pageUrl = window.location.href.split(/[?#]/)[0];
			if (element.href == pageUrl) {
				const target = element;
				target.classList.add("active");
				var newAtrribute = target.getAttribute("aria-labelledby");
				while (true) {
					var temp = document.querySelector("#" + newAtrribute);
					temp?.classList.add("active");
					newAtrribute = temp?.getAttribute("aria-labelledby");
					temp?.setAttribute("aria-expanded", "true");
					if (!newAtrribute) break;
				}
				// target.parentNode.classList.add('active');
				target.parentNode.parentNode.classList.add("active"); // add active to li of the current link
				target.parentNode.parentNode.parentElement
					.querySelector(".nav-link")
					?.classList.add("active");
				target.parentNode.parentNode.parentNode.parentNode.classList.add(
					"active"
				);
				target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add(
					"active"
				);
			}
		});

	// Topbar - main menu
	document
		.querySelector(".navbar-toggle")
		.addEventListener("click", function (e) {
			e.target.classList.toggle("open");
			//document.getElementById('#navigation').slideToggle(400);
		});
}
