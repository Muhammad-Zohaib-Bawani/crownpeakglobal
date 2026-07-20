if (function(t, e) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        "use strict";

        function n(t, e) {
            var n = (e = e || et).createElement("script");
            n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
        }

        function i(t) {
            var e = !!t && "length" in t && t.length,
                n = ft.type(t);
            return "function" !== n && !ft.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function o(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }

        function s(t, e, n) {
            return ft.isFunction(e) ? ft.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            }) : e.nodeType ? ft.grep(t, function(t) {
                return t === e !== n
            }) : "string" != typeof e ? ft.grep(t, function(t) {
                return rt.call(e, t) > -1 !== n
            }) : St.test(e) ? ft.filter(e, t, n) : (e = ft.filter(e, t), ft.grep(t, function(t) {
                return rt.call(e, t) > -1 !== n && 1 === t.nodeType
            }))
        }

        function r(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function a(t) {
            var e = {};
            return ft.each(t.match(At) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function l(t) {
            return t
        }

        function c(t) {
            throw t
        }

        function u(t, e, n, i) {
            var o;
            try {
                t && ft.isFunction(o = t.promise) ? o.call(t).done(e).fail(n) : t && ft.isFunction(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i))
            } catch (t) {
                n.apply(void 0, [t])
            }
        }

        function d() {
            et.removeEventListener("DOMContentLoaded", d), t.removeEventListener("load", d), ft.ready()
        }

        function h() {
            this.expando = ft.expando + h.uid++
        }

        function p(t) {
            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Ot.test(t) ? JSON.parse(t) : t)
        }

        function f(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(Ft, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                    try {
                        n = p(n)
                    } catch (t) {}
                    _t.set(t, e, n)
                } else n = void 0;
            return n
        }

        function g(t, e, n, i) {
            var o, s = 1,
                r = 20,
                a = i ? function() {
                    return i.cur()
                } : function() {
                    return ft.css(t, e, "")
                },
                l = a(),
                c = n && n[3] || (ft.cssNumber[e] ? "" : "px"),
                u = (ft.cssNumber[e] || "px" !== c && +l) && qt.exec(ft.css(t, e));
            if (u && u[3] !== c) {
                c = c || u[3], n = n || [], u = +l || 1;
                do {
                    s = s || ".5", u /= s, ft.style(t, e, u + c)
                } while (s !== (s = a() / l) && 1 !== s && --r)
            }
            return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
        }

        function m(t) {
            var e, n = t.ownerDocument,
                i = t.nodeName,
                o = Wt[i];
            return o || (e = n.body.appendChild(n.createElement(i)), o = ft.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), Wt[i] = o, o)
        }

        function v(t, e) {
            for (var n, i, o = [], s = 0, r = t.length; s < r; s++)(i = t[s]).style && (n = i.style.display, e ? ("none" === n && (o[s] = Mt.get(i, "display") || null, o[s] || (i.style.display = "")), "" === i.style.display && Rt(i) && (o[s] = m(i))) : "none" !== n && (o[s] = "none", Mt.set(i, "display", n)));
            for (s = 0; s < r; s++) null != o[s] && (t[s].style.display = o[s]);
            return t
        }

        function y(t, e) {
            var n;
            return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && o(t, e) ? ft.merge([t], n) : n
        }

        function b(t, e) {
            for (var n = 0, i = t.length; n < i; n++) Mt.set(t[n], "globalEval", !e || Mt.get(e[n], "globalEval"))
        }

        function x(t, e, n, i, o) {
            for (var s, r, a, l, c, u, d = e.createDocumentFragment(), h = [], p = 0, f = t.length; p < f; p++)
                if ((s = t[p]) || 0 === s)
                    if ("object" === ft.type(s)) ft.merge(h, s.nodeType ? [s] : s);
                    else if (Vt.test(s)) {
                for (r = r || d.appendChild(e.createElement("div")), a = (Xt.exec(s) || ["", ""])[1].toLowerCase(), l = Ut[a] || Ut._default, r.innerHTML = l[1] + ft.htmlPrefilter(s) + l[2], u = l[0]; u--;) r = r.lastChild;
                ft.merge(h, r.childNodes), (r = d.firstChild).textContent = ""
            } else h.push(e.createTextNode(s));
            for (d.textContent = "", p = 0; s = h[p++];)
                if (i && ft.inArray(s, i) > -1) o && o.push(s);
                else if (c = ft.contains(s.ownerDocument, s), r = y(d.appendChild(s), "script"), c && b(r), n)
                for (u = 0; s = r[u++];) Yt.test(s.type || "") && n.push(s);
            return d
        }

        function w() {
            return !0
        }

        function C() {
            return !1
        }

        function T() {
            try {
                return et.activeElement
            } catch (t) {}
        }

        function S(t, e, n, i, o, s) {
            var r, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in e) S(t, a, n, i, e[a], s);
                return t
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = C;
            else if (!o) return t;
            return 1 === s && (r = o, o = function(t) {
                return ft().off(t), r.apply(this, arguments)
            }, o.guid = r.guid || (r.guid = ft.guid++)), t.each(function() {
                ft.event.add(this, e, o, i, n)
            })
        }

        function $(t, e) {
            return o(t, "table") && o(11 !== e.nodeType ? e : e.firstChild, "tr") ? ft(">tbody", t)[0] || t : t
        }

        function E(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function k(t) {
            var e = ne.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function P(t, e) {
            var n, i, o, s, r, a, l, c;
            if (1 === e.nodeType) {
                if (Mt.hasData(t) && (s = Mt.access(t), r = Mt.set(e, s), c = s.events)) {
                    delete r.handle, r.events = {};
                    for (o in c)
                        for (n = 0, i = c[o].length; n < i; n++) ft.event.add(e, o, c[o][n])
                }
                _t.hasData(t) && (a = _t.access(t), l = ft.extend({}, a), _t.set(e, l))
            }
        }

        function A(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && Bt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function D(t, e, i, o) {
            e = ot.apply([], e);
            var s, r, a, l, c, u, d = 0,
                h = t.length,
                p = h - 1,
                f = e[0],
                g = ft.isFunction(f);
            if (g || h > 1 && "string" == typeof f && !ht.checkClone && ee.test(f)) return t.each(function(n) {
                var s = t.eq(n);
                g && (e[0] = f.call(this, n, s.html())), D(s, e, i, o)
            });
            if (h && (s = x(e, t[0].ownerDocument, !1, t, o), r = s.firstChild, 1 === s.childNodes.length && (s = r), r || o)) {
                for (l = (a = ft.map(y(s, "script"), E)).length; d < h; d++) c = s, d !== p && (c = ft.clone(c, !0, !0), l && ft.merge(a, y(c, "script"))), i.call(t[d], c, d);
                if (l)
                    for (u = a[a.length - 1].ownerDocument, ft.map(a, k), d = 0; d < l; d++) c = a[d], Yt.test(c.type || "") && !Mt.access(c, "globalEval") && ft.contains(u, c) && (c.src ? ft._evalUrl && ft._evalUrl(c.src) : n(c.textContent.replace(ie, ""), u))
            }
            return t
        }

        function I(t, e, n) {
            for (var i, o = e ? ft.filter(e, t) : t, s = 0; null != (i = o[s]); s++) n || 1 !== i.nodeType || ft.cleanData(y(i)), i.parentNode && (n && ft.contains(i.ownerDocument, i) && b(y(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function N(t, e, n) {
            var i, o, s, r, a = t.style;
            return (n = n || re(t)) && ("" !== (r = n.getPropertyValue(e) || n[e]) || ft.contains(t.ownerDocument, t) || (r = ft.style(t, e)), !ht.pixelMarginRight() && se.test(r) && oe.test(e) && (i = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
        }

        function L(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function M(t) {
            if (t in he) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = de.length; n--;)
                if ((t = de[n] + e) in he) return t
        }

        function _(t) {
            var e = ft.cssProps[t];
            return e || (e = ft.cssProps[t] = M(t) || t), e
        }

        function O(t, e, n) {
            var i = qt.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function F(t, e, n, i, o) {
            var s, r = 0;
            for (s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0; s < 4; s += 2) "margin" === n && (r += ft.css(t, n + Ht[s], !0, o)), i ? ("content" === n && (r -= ft.css(t, "padding" + Ht[s], !0, o)), "margin" !== n && (r -= ft.css(t, "border" + Ht[s] + "Width", !0, o))) : (r += ft.css(t, "padding" + Ht[s], !0, o), "padding" !== n && (r += ft.css(t, "border" + Ht[s] + "Width", !0, o)));
            return r
        }

        function j(t, e, n) {
            var i, o = re(t),
                s = N(t, e, o),
                r = "border-box" === ft.css(t, "boxSizing", !1, o);
            return se.test(s) ? s : (i = r && (ht.boxSizingReliable() || s === t.style[e]), "auto" === s && (s = t["offset" + e[0].toUpperCase() + e.slice(1)]), (s = parseFloat(s) || 0) + F(t, e, n || (r ? "border" : "content"), i, o) + "px")
        }

        function q(t, e, n, i, o) {
            return new q.prototype.init(t, e, n, i, o)
        }

        function H() {
            fe && (!1 === et.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(H) : t.setTimeout(H, ft.fx.interval), ft.fx.tick())
        }

        function R() {
            return t.setTimeout(function() {
                pe = void 0
            }), pe = ft.now()
        }

        function z(t, e) {
            var n, i = 0,
                o = {
                    height: t
                };
            for (e = e ? 1 : 0; i < 4; i += 2 - e) n = Ht[i], o["margin" + n] = o["padding" + n] = t;
            return e && (o.opacity = o.width = t), o
        }

        function W(t, e, n) {
            for (var i, o = (X.tweeners[e] || []).concat(X.tweeners["*"]), s = 0, r = o.length; s < r; s++)
                if (i = o[s].call(n, e, t)) return i
        }

        function B(t, e) {
            var n, i, o, s, r;
            for (n in t)
                if (i = ft.camelCase(n), o = e[i], s = t[n], Array.isArray(s) && (o = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), (r = ft.cssHooks[i]) && "expand" in r) {
                    s = r.expand(s), delete t[i];
                    for (n in s) n in t || (t[n] = s[n], e[n] = o)
                } else e[i] = o
        }

        function X(t, e, n) {
            var i, o, s = 0,
                r = X.prefilters.length,
                a = ft.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = pe || R(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), s = 0, r = c.tweens.length; s < r; s++) c.tweens[s].run(i);
                    return a.notifyWith(t, [c, i, n]), i < 1 && r ? n : (r || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: ft.extend({}, e),
                    opts: ft.extend(!0, {
                        specialEasing: {},
                        easing: ft.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: pe || R(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = ft.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) c.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (B(u, c.opts.specialEasing); s < r; s++)
                if (i = X.prefilters[s].call(c, t, u, c.opts)) return ft.isFunction(i.stop) && (ft._queueHooks(c.elem, c.opts.queue).stop = ft.proxy(i.stop, i)), i;
            return ft.map(u, W, c), ft.isFunction(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), ft.fx.timer(ft.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c
        }

        function Y(t) {
            return (t.match(At) || []).join(" ")
        }

        function U(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function V(t, e, n, i) {
            var o;
            if (Array.isArray(e)) ft.each(e, function(e, o) {
                n || Ee.test(t) ? i(t, o) : V(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
            });
            else if (n || "object" !== ft.type(e)) i(t, e);
            else
                for (o in e) V(t + "[" + o + "]", e[o], n, i)
        }

        function Z(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    s = e.toLowerCase().match(At) || [];
                if (ft.isFunction(n))
                    for (; i = s[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function G(t, e, n, i) {
            function o(a) {
                var l;
                return s[a] = !0, ft.each(t[a] || [], function(t, a) {
                    var c = a(e, n, i);
                    return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
                }), l
            }
            var s = {},
                r = t === je;
            return o(e.dataTypes[0]) || !s["*"] && o("*")
        }

        function Q(t, e) {
            var n, i, o = ft.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
            return i && ft.extend(!0, t, i), t
        }

        function K(t, e, n) {
            for (var i, o, s, r, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (o in a)
                    if (a[o] && a[o].test(i)) {
                        l.unshift(o);
                        break
                    } if (l[0] in n) s = l[0];
            else {
                for (o in n) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                        s = o;
                        break
                    }
                    r || (r = o)
                }
                s = s || r
            }
            if (s) return s !== l[0] && l.unshift(s), n[s]
        }

        function J(t, e, n, i) {
            var o, s, r, a, l, c = {},
                u = t.dataTypes.slice();
            if (u[1])
                for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
            for (s = u.shift(); s;)
                if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift())
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                if (!(r = c[l + " " + s] || c["* " + s]))
                    for (o in c)
                        if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                            !0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], u.unshift(a[1]));
                            break
                        } if (!0 !== r)
                    if (r && t.throws) e = r(e);
                    else try {
                        e = r(e)
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: r ? t : "No conversion from " + l + " to " + s
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }
        var tt = [],
            et = t.document,
            nt = Object.getPrototypeOf,
            it = tt.slice,
            ot = tt.concat,
            st = tt.push,
            rt = tt.indexOf,
            at = {},
            lt = at.toString,
            ct = at.hasOwnProperty,
            ut = ct.toString,
            dt = ut.call(Object),
            ht = {},
            pt = "3.2.1",
            ft = function(t, e) {
                return new ft.fn.init(t, e)
            },
            gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            mt = /^-ms-/,
            vt = /-([a-z])/g,
            yt = function(t, e) {
                return e.toUpperCase()
            };
        ft.fn = ft.prototype = {
            jquery: pt,
            constructor: ft,
            length: 0,
            toArray: function() {
                return it.call(this)
            },
            get: function(t) {
                return null == t ? it.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = ft.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function(t) {
                return ft.each(this, t)
            },
            map: function(t) {
                return this.pushStack(ft.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(it.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: st,
            sort: tt.sort,
            splice: tt.splice
        }, ft.extend = ft.fn.extend = function() {
            var t, e, n, i, o, s, r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || ft.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t) n = r[e], i = t[e], r !== i && (c && i && (ft.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, s = n && Array.isArray(n) ? n : []) : s = n && ft.isPlainObject(n) ? n : {}, r[e] = ft.extend(c, s, i)) : void 0 !== i && (r[e] = i));
            return r
        }, ft.extend({
            expando: "jQuery" + (pt + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === ft.type(t)
            },
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = ft.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            },
            isPlainObject: function(t) {
                var e, n;
                return !(!t || "[object Object]" !== lt.call(t) || (e = nt(t)) && ("function" != typeof(n = ct.call(e, "constructor") && e.constructor) || ut.call(n) !== dt))
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? at[lt.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                n(t)
            },
            camelCase: function(t) {
                return t.replace(mt, "ms-").replace(vt, yt)
            },
            each: function(t, e) {
                var n, o = 0;
                if (i(t))
                    for (n = t.length; o < n && !1 !== e.call(t[o], o, t[o]); o++);
                else
                    for (o in t)
                        if (!1 === e.call(t[o], o, t[o])) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(gt, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? ft.merge(n, "string" == typeof t ? [t] : t) : st.call(n, t)), n
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : rt.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
                return t.length = o, t
            },
            grep: function(t, e, n) {
                for (var i = [], o = 0, s = t.length, r = !n; o < s; o++) !e(t[o], o) !== r && i.push(t[o]);
                return i
            },
            map: function(t, e, n) {
                var o, s, r = 0,
                    a = [];
                if (i(t))
                    for (o = t.length; r < o; r++) null != (s = e(t[r], r, n)) && a.push(s);
                else
                    for (r in t) null != (s = e(t[r], r, n)) && a.push(s);
                return ot.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, o;
                if ("string" == typeof e && (n = t[e], e = t, t = n), ft.isFunction(t)) return i = it.call(arguments, 2), o = function() {
                    return t.apply(e || this, i.concat(it.call(arguments)))
                }, o.guid = t.guid = t.guid || ft.guid++, o
            },
            now: Date.now,
            support: ht
        }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = tt[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            at["[object " + e + "]"] = e.toLowerCase()
        });
        var bt = function(t) {
            function e(t, e, n, i) {
                var o, s, r, a, l, u, h, p = e && e.ownerDocument,
                    f = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return n;
                if (!i && ((e ? e.ownerDocument || e : q) !== I && D(e), e = e || I, L)) {
                    if (11 !== f && (l = gt.exec(t)))
                        if (o = l[1]) {
                            if (9 === f) {
                                if (!(r = e.getElementById(o))) return n;
                                if (r.id === o) return n.push(r), n
                            } else if (p && (r = p.getElementById(o)) && F(e, r) && r.id === o) return n.push(r), n
                        } else {
                            if (l[2]) return G.apply(n, e.getElementsByTagName(t)), n;
                            if ((o = l[3]) && x.getElementsByClassName && e.getElementsByClassName) return G.apply(n, e.getElementsByClassName(o)), n
                        } if (x.qsa && !B[t + " "] && (!M || !M.test(t))) {
                        if (1 !== f) p = e, h = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(bt, xt) : e.setAttribute("id", a = j), s = (u = S(t)).length; s--;) u[s] = "#" + a + " " + d(u[s]);
                            h = u.join(","), p = mt.test(t) && c(e.parentNode) || e
                        }
                        if (h) try {
                            return G.apply(n, p.querySelectorAll(h)), n
                        } catch (t) {} finally {
                            a === j && e.removeAttribute("id")
                        }
                    }
                }
                return E(t.replace(st, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > w.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[j] = !0, t
            }

            function o(t) {
                var e = I.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function s(t, e) {
                for (var n = t.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = e
            }

            function r(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Ct(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function l(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var o, s = t([], n.length, e), r = s.length; r--;) n[o = s[r]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function c(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }

            function u() {}

            function d(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                return i
            }

            function h(t, e, n) {
                var i = e.dir,
                    o = e.next,
                    s = o || i,
                    r = n && "parentNode" === s,
                    a = R++;
                return e.first ? function(e, n, o) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) return t(e, n, o);
                    return !1
                } : function(e, n, l) {
                    var c, u, d, h = [H, a];
                    if (l) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || r) && t(e, n, l)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || r)
                                if (d = e[j] || (e[j] = {}), u = d[e.uniqueID] || (d[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e;
                                else {
                                    if ((c = u[s]) && c[0] === H && c[1] === a) return h[2] = c[2];
                                    if (u[s] = h, h[2] = t(e, n, l)) return !0
                                } return !1
                }
            }

            function p(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function f(t, n, i) {
                for (var o = 0, s = n.length; o < s; o++) e(t, n[o], i);
                return i
            }

            function g(t, e, n, i, o) {
                for (var s, r = [], a = 0, l = t.length, c = null != e; a < l; a++)(s = t[a]) && (n && !n(s, i, o) || (r.push(s), c && e.push(a)));
                return r
            }

            function m(t, e, n, o, s, r) {
                return o && !o[j] && (o = m(o)), s && !s[j] && (s = m(s, r)), i(function(i, r, a, l) {
                    var c, u, d, h = [],
                        p = [],
                        m = r.length,
                        v = i || f(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !i && e ? v : g(v, h, t, a, l),
                        b = n ? s || (i ? t : m || o) ? [] : r : y;
                    if (n && n(y, b, a, l), o)
                        for (c = g(b, p), o(c, [], a, l), u = c.length; u--;)(d = c[u]) && (b[p[u]] = !(y[p[u]] = d));
                    if (i) {
                        if (s || t) {
                            if (s) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                s(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = s ? K(i, d) : h[u]) > -1 && (i[c] = !(r[c] = d))
                        }
                    } else b = g(b === r ? b.splice(m, b.length) : b), s ? s(null, r, b, l) : G.apply(r, b)
                })
            }

            function v(t) {
                for (var e, n, i, o = t.length, s = w.relative[t[0].type], r = s || w.relative[" "], a = s ? 1 : 0, l = h(function(t) {
                        return t === e
                    }, r, !0), c = h(function(t) {
                        return K(e, t) > -1
                    }, r, !0), u = [function(t, n, i) {
                        var o = !s && (i || n !== k) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                        return e = null, o
                    }]; a < o; a++)
                    if (n = w.relative[t[a].type]) u = [h(p(u), n)];
                    else {
                        if ((n = w.filter[t[a].type].apply(null, t[a].matches))[j]) {
                            for (i = ++a; i < o && !w.relative[t[i].type]; i++);
                            return m(a > 1 && p(u), a > 1 && d(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(st, "$1"), n, a < i && v(t.slice(a, i)), i < o && v(t = t.slice(i)), i < o && d(t))
                        }
                        u.push(n)
                    } return p(u)
            }

            function y(t, n) {
                var o = n.length > 0,
                    s = t.length > 0,
                    r = function(i, r, a, l, c) {
                        var u, d, h, p = 0,
                            f = "0",
                            m = i && [],
                            v = [],
                            y = k,
                            b = i || s && w.find.TAG("*", c),
                            x = H += null == y ? 1 : Math.random() || .1,
                            C = b.length;
                        for (c && (k = r === I || r || c); f !== C && null != (u = b[f]); f++) {
                            if (s && u) {
                                for (d = 0, r || u.ownerDocument === I || (D(u), a = !L); h = t[d++];)
                                    if (h(u, r || I, a)) {
                                        l.push(u);
                                        break
                                    } c && (H = x)
                            }
                            o && ((u = !h && u) && p--, i && m.push(u))
                        }
                        if (p += f, o && f !== p) {
                            for (d = 0; h = n[d++];) h(m, v, r, a);
                            if (i) {
                                if (p > 0)
                                    for (; f--;) m[f] || v[f] || (v[f] = V.call(l));
                                v = g(v)
                            }
                            G.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                        }
                        return c && (H = x, k = y), m
                    };
                return o ? i(r) : r
            }
            var b, x, w, C, T, S, $, E, k, P, A, D, I, N, L, M, _, O, F, j = "sizzle" + 1 * new Date,
                q = t.document,
                H = 0,
                R = 0,
                z = n(),
                W = n(),
                B = n(),
                X = function(t, e) {
                    return t === e && (A = !0), 0
                },
                Y = {}.hasOwnProperty,
                U = [],
                V = U.pop,
                Z = U.push,
                G = U.push,
                Q = U.slice,
                K = function(t, e) {
                    for (var n = 0, i = t.length; n < i; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                tt = "[\\x20\\t\\r\\n\\f]",
                et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
                it = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
                ot = new RegExp(tt + "+", "g"),
                st = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                rt = new RegExp("^" + tt + "*," + tt + "*"),
                at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
                ct = new RegExp(it),
                ut = new RegExp("^" + et + "$"),
                dt = {
                    ID: new RegExp("^#(" + et + ")"),
                    CLASS: new RegExp("^\\.(" + et + ")"),
                    TAG: new RegExp("^(" + et + "|[*])"),
                    ATTR: new RegExp("^" + nt),
                    PSEUDO: new RegExp("^" + it),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + J + ")$", "i"),
                    needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
                },
                ht = /^(?:input|select|textarea|button)$/i,
                pt = /^h\d$/i,
                ft = /^[^{]+\{\s*\[native \w/,
                gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                mt = /[+~]/,
                vt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
                yt = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                bt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                xt = function(t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                },
                wt = function() {
                    D()
                },
                Ct = h(function(t) {
                    return !0 === t.disabled && ("form" in t || "label" in t)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                G.apply(U = Q.call(q.childNodes), q.childNodes), U[q.childNodes.length].nodeType
            } catch (t) {
                G = {
                    apply: U.length ? function(t, e) {
                        Z.apply(t, Q.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            x = e.support = {}, T = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, D = e.setDocument = function(t) {
                var e, n, i = t ? t.ownerDocument || t : q;
                return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, N = I.documentElement, L = !T(I), q !== I && (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", wt, !1) : n.attachEvent && n.attachEvent("onunload", wt)), x.attributes = o(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = o(function(t) {
                    return t.appendChild(I.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = ft.test(I.getElementsByClassName), x.getById = o(function(t) {
                    return N.appendChild(t).id = j, !I.getElementsByName || !I.getElementsByName(j).length
                }), x.getById ? (w.filter.ID = function(t) {
                    var e = t.replace(vt, yt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }, w.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && L) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }) : (w.filter.ID = function(t) {
                    var e = t.replace(vt, yt);
                    return function(t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }, w.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && L) {
                        var n, i, o, s = e.getElementById(t);
                        if (s) {
                            if ((n = s.getAttributeNode("id")) && n.value === t) return [s];
                            for (o = e.getElementsByName(t), i = 0; s = o[i++];)
                                if ((n = s.getAttributeNode("id")) && n.value === t) return [s]
                        }
                        return []
                    }
                }), w.find.TAG = x.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        o = 0,
                        s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = s[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return s
                }, w.find.CLASS = x.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && L) return e.getElementsByClassName(t)
                }, _ = [], M = [], (x.qsa = ft.test(I.querySelectorAll)) && (o(function(t) {
                    N.appendChild(t).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + tt + "*(?:value|" + J + ")"), t.querySelectorAll("[id~=" + j + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), t.querySelectorAll("a#" + j + "+*").length || M.push(".#.+[+~]")
                }), o(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = I.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + tt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && M.push(":enabled", ":disabled"), N.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
                })), (x.matchesSelector = ft.test(O = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && o(function(t) {
                    x.disconnectedMatch = O.call(t, "*"), O.call(t, "[s!='']:x"), _.push("!=", it)
                }), M = M.length && new RegExp(M.join("|")), _ = _.length && new RegExp(_.join("|")), e = ft.test(N.compareDocumentPosition), F = e || ft.test(N.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, X = e ? function(t, e) {
                    if (t === e) return A = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === I || t.ownerDocument === q && F(q, t) ? -1 : e === I || e.ownerDocument === q && F(q, e) ? 1 : P ? K(P, t) - K(P, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return A = !0, 0;
                    var n, i = 0,
                        o = t.parentNode,
                        s = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!o || !s) return t === I ? -1 : e === I ? 1 : o ? -1 : s ? 1 : P ? K(P, t) - K(P, e) : 0;
                    if (o === s) return r(t, e);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (; a[i] === l[i];) i++;
                    return i ? r(a[i], l[i]) : a[i] === q ? -1 : l[i] === q ? 1 : 0
                }, I) : I
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== I && D(t), n = n.replace(lt, "='$1']"), x.matchesSelector && L && !B[n + " "] && (!_ || !_.test(n)) && (!M || !M.test(n))) try {
                    var i = O.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return e(n, I, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== I && D(t), F(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== I && D(t);
                var n = w.attrHandle[e.toLowerCase()],
                    i = n && Y.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
                return void 0 !== i ? i : x.attributes || !L ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.escape = function(t) {
                return (t + "").replace(bt, xt)
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    o = 0;
                if (A = !x.detectDuplicates, P = !x.sortStable && t.slice(0), t.sort(X), A) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return P = null, t
            }, C = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i++];) n += C(e);
                return n
            }, (w = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: dt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(vt, yt), t[3] = (t[3] || t[4] || t[5] || "").replace(vt, yt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(vt, yt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = z[t + " "];
                        return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && z(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(o) {
                            var s = e.attr(o, t);
                            return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, o) {
                        var s = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var c, u, d, h, p, f, g = s !== r ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (m) {
                                if (s) {
                                    for (; g;) {
                                        for (h = e; h = h[g];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        f = g = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? m.firstChild : m.lastChild], r && y) {
                                    for (b = (p = (c = (u = (d = (h = m)[j] || (h[j] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === H && c[1]) && c[2], h = p && m.childNodes[p]; h = ++p && h && h[g] || (b = p = 0) || f.pop();)
                                        if (1 === h.nodeType && ++b && h === e) {
                                            u[t] = [H, p, b];
                                            break
                                        }
                                } else if (y && (h = e, d = h[j] || (h[j] = {}), u = d[h.uniqueID] || (d[h.uniqueID] = {}), c = u[t] || [], p = c[0] === H && c[1], b = p), !1 === b)
                                    for (;
                                        (h = ++p && h && h[g] || (b = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (d = h[j] || (h[j] = {}), u = d[h.uniqueID] || (d[h.uniqueID] = {}), u[t] = [H, b]), h !== e)););
                                return (b -= o) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var o, s = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return s[j] ? s(n) : s.length > 1 ? (o = [t, t, "", n], w.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, o = s(t, n), r = o.length; r--;) i = K(t, o[r]), t[i] = !(e[i] = o[r])
                        }) : function(t) {
                            return s(t, 0, o)
                        }) : s
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            o = $(t.replace(st, "$1"));
                        return o[j] ? i(function(t, e, n, i) {
                            for (var s, r = o(t, null, i, []), a = t.length; a--;)(s = r[a]) && (t[a] = !(e[a] = s))
                        }) : function(t, i, s) {
                            return e[0] = t, o(e, null, s, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return t = t.replace(vt, yt),
                            function(e) {
                                return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function(t) {
                        return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(vt, yt).toLowerCase(),
                            function(e) {
                                var n;
                                do {
                                    if (n = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === N
                    },
                    focus: function(t) {
                        return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: a(!1),
                    disabled: a(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !w.pseudos.empty(t)
                    },
                    header: function(t) {
                        return pt.test(t.nodeName)
                    },
                    input: function(t) {
                        return ht.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(t, e) {
                        return [e - 1]
                    }),
                    eq: l(function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: l(function(t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: l(function(t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: l(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: l(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }).pseudos.nth = w.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[b] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[b] = function(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }(b);
            return u.prototype = w.filters = w.pseudos, w.setFilters = new u, S = e.tokenize = function(t, n) {
                var i, o, s, r, a, l, c, u = W[t + " "];
                if (u) return n ? 0 : u.slice(0);
                for (a = t, l = [], c = w.preFilter; a;) {
                    i && !(o = rt.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), i = !1, (o = at.exec(a)) && (i = o.shift(), s.push({
                        value: i,
                        type: o[0].replace(st, " ")
                    }), a = a.slice(i.length));
                    for (r in w.filter) !(o = dt[r].exec(a)) || c[r] && !(o = c[r](o)) || (i = o.shift(), s.push({
                        value: i,
                        type: r,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? e.error(t) : W(t, l).slice(0)
            }, $ = e.compile = function(t, e) {
                var n, i = [],
                    o = [],
                    s = B[t + " "];
                if (!s) {
                    for (e || (e = S(t)), n = e.length; n--;) s = v(e[n]), s[j] ? i.push(s) : o.push(s);
                    (s = B(t, y(o, i))).selector = t
                }
                return s
            }, E = e.select = function(t, e, n, i) {
                var o, s, r, a, l, u = "function" == typeof t && t,
                    h = !i && S(t = u.selector || t);
                if (n = n || [], 1 === h.length) {
                    if ((s = h[0] = h[0].slice(0)).length > 2 && "ID" === (r = s[0]).type && 9 === e.nodeType && L && w.relative[s[1].type]) {
                        if (!(e = (w.find.ID(r.matches[0].replace(vt, yt), e) || [])[0])) return n;
                        u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                    }
                    for (o = dt.needsContext.test(t) ? 0 : s.length; o-- && (r = s[o], !w.relative[a = r.type]);)
                        if ((l = w.find[a]) && (i = l(r.matches[0].replace(vt, yt), mt.test(s[0].type) && c(e.parentNode) || e))) {
                            if (s.splice(o, 1), !(t = i.length && d(s))) return G.apply(n, i), n;
                            break
                        }
                }
                return (u || $(t, h))(i, e, !L, n, !e || mt.test(t) && c(e.parentNode) || e), n
            }, x.sortStable = j.split("").sort(X).join("") === j, x.detectDuplicates = !!A, D(), x.sortDetached = o(function(t) {
                return 1 & t.compareDocumentPosition(I.createElement("fieldset"))
            }), o(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function(t, e, n) {
                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || s("value", function(t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), o(function(t) {
                return null == t.getAttribute("disabled")
            }) || s(J, function(t, e, n) {
                var i;
                if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        ft.find = bt, ft.expr = bt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = bt.uniqueSort, ft.text = bt.getText, ft.isXMLDoc = bt.isXML, ft.contains = bt.contains, ft.escapeSelector = bt.escape;
        var xt = function(t, e, n) {
                for (var i = [], o = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && ft(t).is(n)) break;
                        i.push(t)
                    } return i
            },
            wt = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            Ct = ft.expr.match.needsContext,
            Tt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            St = /^.[^:#\[\.,]*$/;
        ft.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ft.find.matchesSelector(i, t) ? [i] : [] : ft.find.matches(t, ft.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, ft.fn.extend({
            find: function(t) {
                var e, n, i = this.length,
                    o = this;
                if ("string" != typeof t) return this.pushStack(ft(t).filter(function() {
                    for (e = 0; e < i; e++)
                        if (ft.contains(o[e], this)) return !0
                }));
                for (n = this.pushStack([]), e = 0; e < i; e++) ft.find(t, o[e], n);
                return i > 1 ? ft.uniqueSort(n) : n
            },
            filter: function(t) {
                return this.pushStack(s(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(s(this, t || [], !0))
            },
            is: function(t) {
                return !!s(this, "string" == typeof t && Ct.test(t) ? ft(t) : t || [], !1).length
            }
        });
        var $t, Et = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (ft.fn.init = function(t, e, n) {
            var i, o;
            if (!t) return this;
            if (n = n || $t, "string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Et.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : et, !0)), Tt.test(i[1]) && ft.isPlainObject(e))
                        for (i in e) ft.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return (o = et.getElementById(i[2])) && (this[0] = o, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : ft.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ft) : ft.makeArray(t, this)
        }).prototype = ft.fn, $t = ft(et);
        var kt = /^(?:parents|prev(?:Until|All))/,
            Pt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ft.fn.extend({
            has: function(t) {
                var e = ft(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; t < n; t++)
                        if (ft.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                var n, i = 0,
                    o = this.length,
                    s = [],
                    r = "string" != typeof t && ft(t);
                if (!Ct.test(t))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
                                s.push(n);
                                break
                            } return this.pushStack(s.length > 1 ? ft.uniqueSort(s) : s)
            },
            index: function(t) {
                return t ? "string" == typeof t ? rt.call(ft(t), this[0]) : rt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ft.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return xt(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return xt(t, "parentNode", n)
            },
            next: function(t) {
                return r(t, "nextSibling")
            },
            prev: function(t) {
                return r(t, "previousSibling")
            },
            nextAll: function(t) {
                return xt(t, "nextSibling")
            },
            prevAll: function(t) {
                return xt(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return xt(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return xt(t, "previousSibling", n)
            },
            siblings: function(t) {
                return wt((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return wt(t.firstChild)
            },
            contents: function(t) {
                return o(t, "iframe") ? t.contentDocument : (o(t, "template") && (t = t.content || t), ft.merge([], t.childNodes))
            }
        }, function(t, e) {
            ft.fn[t] = function(n, i) {
                var o = ft.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = ft.filter(i, o)), this.length > 1 && (Pt[t] || ft.uniqueSort(o), kt.test(t) && o.reverse()), this.pushStack(o)
            }
        });
        var At = /[^\x20\t\r\n\f]+/g;
        ft.Callbacks = function(t) {
            t = "string" == typeof t ? a(t) : ft.extend({}, t);
            var e, n, i, o, s = [],
                r = [],
                l = -1,
                c = function() {
                    for (o = o || t.once, i = e = !0; r.length; l = -1)
                        for (n = r.shift(); ++l < s.length;) !1 === s[l].apply(n[0], n[1]) && t.stopOnFalse && (l = s.length, n = !1);
                    t.memory || (n = !1), e = !1, o && (s = n ? [] : "")
                },
                u = {
                    add: function() {
                        return s && (n && !e && (l = s.length - 1, r.push(n)), function e(n) {
                            ft.each(n, function(n, i) {
                                ft.isFunction(i) ? t.unique && u.has(i) || s.push(i) : i && i.length && "string" !== ft.type(i) && e(i)
                            })
                        }(arguments), n && !e && c()), this
                    },
                    remove: function() {
                        return ft.each(arguments, function(t, e) {
                            for (var n;
                                (n = ft.inArray(e, s, n)) > -1;) s.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(t) {
                        return t ? ft.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return o = r = [], s = n = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return o = r = [], n || e || (s = n = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(t, n) {
                        return o || (n = n || [], n = [t, n.slice ? n.slice() : n], r.push(n), e || c()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, ft.extend({
            Deferred: function(e) {
                var n = [
                        ["notify", "progress", ft.Callbacks("memory"), ft.Callbacks("memory"), 2],
                        ["resolve", "done", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    o = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        catch: function(t) {
                            return o.then(null, t)
                        },
                        pipe: function() {
                            var t = arguments;
                            return ft.Deferred(function(e) {
                                ft.each(n, function(n, i) {
                                    var o = ft.isFunction(t[i[4]]) && t[i[4]];
                                    s[i[1]](function() {
                                        var t = o && o.apply(this, arguments);
                                        t && ft.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        then: function(e, i, o) {
                            function s(e, n, i, o) {
                                return function() {
                                    var a = this,
                                        u = arguments,
                                        d = function() {
                                            var t, d;
                                            if (!(e < r)) {
                                                if ((t = i.apply(a, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                d = t && ("object" == typeof t || "function" == typeof t) && t.then, ft.isFunction(d) ? o ? d.call(t, s(r, n, l, o), s(r, n, c, o)) : (r++, d.call(t, s(r, n, l, o), s(r, n, c, o), s(r, n, l, n.notifyWith))) : (i !== l && (a = void 0, u = [t]), (o || n.resolveWith)(a, u))
                                            }
                                        },
                                        h = o ? d : function() {
                                            try {
                                                d()
                                            } catch (t) {
                                                ft.Deferred.exceptionHook && ft.Deferred.exceptionHook(t, h.stackTrace), e + 1 >= r && (i !== c && (a = void 0, u = [t]), n.rejectWith(a, u))
                                            }
                                        };
                                    e ? h() : (ft.Deferred.getStackHook && (h.stackTrace = ft.Deferred.getStackHook()), t.setTimeout(h))
                                }
                            }
                            var r = 0;
                            return ft.Deferred(function(t) {
                                n[0][3].add(s(0, t, ft.isFunction(o) ? o : l, t.notifyWith)), n[1][3].add(s(0, t, ft.isFunction(e) ? e : l)), n[2][3].add(s(0, t, ft.isFunction(i) ? i : c))
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? ft.extend(t, o) : o
                        }
                    },
                    s = {};
                return ft.each(n, function(t, e) {
                    var r = e[2],
                        a = e[5];
                    o[e[1]] = r.add, a && r.add(function() {
                        i = a
                    }, n[3 - t][2].disable, n[0][2].lock), r.add(e[3].fire), s[e[0]] = function() {
                        return s[e[0] + "With"](this === s ? void 0 : this, arguments), this
                    }, s[e[0] + "With"] = r.fireWith
                }), o.promise(s), e && e.call(s, s), s
            },
            when: function(t) {
                var e = arguments.length,
                    n = e,
                    i = Array(n),
                    o = it.call(arguments),
                    s = ft.Deferred(),
                    r = function(t) {
                        return function(n) {
                            i[t] = this, o[t] = arguments.length > 1 ? it.call(arguments) : n, --e || s.resolveWith(i, o)
                        }
                    };
                if (e <= 1 && (u(t, s.done(r(n)).resolve, s.reject, !e), "pending" === s.state() || ft.isFunction(o[n] && o[n].then))) return s.then();
                for (; n--;) u(o[n], r(n), s.reject);
                return s.promise()
            }
        });
        var Dt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        ft.Deferred.exceptionHook = function(e, n) {
            t.console && t.console.warn && e && Dt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
        }, ft.readyException = function(e) {
            t.setTimeout(function() {
                throw e
            })
        };
        var It = ft.Deferred();
        ft.fn.ready = function(t) {
            return It.then(t).catch(function(t) {
                ft.readyException(t)
            }), this
        }, ft.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --ft.readyWait : ft.isReady) || (ft.isReady = !0, !0 !== t && --ft.readyWait > 0 || It.resolveWith(et, [ft]))
            }
        }), ft.ready.then = It.then, "complete" === et.readyState || "loading" !== et.readyState && !et.documentElement.doScroll ? t.setTimeout(ft.ready) : (et.addEventListener("DOMContentLoaded", d), t.addEventListener("load", d));
        var Nt = function(t, e, n, i, o, s, r) {
                var a = 0,
                    l = t.length,
                    c = null == n;
                if ("object" === ft.type(n)) {
                    o = !0;
                    for (a in n) Nt(t, e, a, n[a], !0, s, r)
                } else if (void 0 !== i && (o = !0, ft.isFunction(i) || (r = !0), c && (r ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                        return c.call(ft(t), n)
                    })), e))
                    for (; a < l; a++) e(t[a], n, r ? i : i.call(t[a], a, e(t[a], n)));
                return o ? t : c ? e.call(t) : l ? e(t[0], n) : s
            },
            Lt = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        h.uid = 1, h.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, Lt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, n) {
                var i, o = this.cache(t);
                if ("string" == typeof e) o[ft.camelCase(e)] = n;
                else
                    for (i in e) o[ft.camelCase(i)] = e[i];
                return o
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][ft.camelCase(e)]
            },
            access: function(t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        Array.isArray(e) ? e = e.map(ft.camelCase) : (e = ft.camelCase(e), e = e in i ? [e] : e.match(At) || []), n = e.length;
                        for (; n--;) delete i[e[n]]
                    }(void 0 === e || ft.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !ft.isEmptyObject(e)
            }
        };
        var Mt = new h,
            _t = new h,
            Ot = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ft = /[A-Z]/g;
        ft.extend({
            hasData: function(t) {
                return _t.hasData(t) || Mt.hasData(t)
            },
            data: function(t, e, n) {
                return _t.access(t, e, n)
            },
            removeData: function(t, e) {
                _t.remove(t, e)
            },
            _data: function(t, e, n) {
                return Mt.access(t, e, n)
            },
            _removeData: function(t, e) {
                Mt.remove(t, e)
            }
        }), ft.fn.extend({
            data: function(t, e) {
                var n, i, o, s = this[0],
                    r = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (o = _t.get(s), 1 === s.nodeType && !Mt.get(s, "hasDataAttrs"))) {
                        for (n = r.length; n--;) r[n] && 0 === (i = r[n].name).indexOf("data-") && (i = ft.camelCase(i.slice(5)), f(s, i, o[i]));
                        Mt.set(s, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    _t.set(this, t)
                }) : Nt(this, function(e) {
                    var n;
                    if (s && void 0 === e) {
                        if (void 0 !== (n = _t.get(s, t))) return n;
                        if (void 0 !== (n = f(s, t))) return n
                    } else this.each(function() {
                        _t.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    _t.remove(this, t)
                })
            }
        }), ft.extend({
            queue: function(t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = Mt.get(t, e), n && (!i || Array.isArray(n) ? i = Mt.access(t, e, ft.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = ft.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    s = ft._queueHooks(t, e);
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete s.stop, o.call(t, function() {
                    ft.dequeue(t, e)
                }, s)), !i && s && s.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return Mt.get(t, n) || Mt.access(t, n, {
                    empty: ft.Callbacks("once memory").add(function() {
                        Mt.remove(t, [e + "queue", n])
                    })
                })
            }
        }), ft.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = ft.queue(this, t, e);
                    ft._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ft.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    ft.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    o = ft.Deferred(),
                    s = this,
                    r = this.length,
                    a = function() {
                        --i || o.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(n = Mt.get(s[r], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var jt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            qt = new RegExp("^(?:([+-])=|)(" + jt + ")([a-z%]*)$", "i"),
            Ht = ["Top", "Right", "Bottom", "Left"],
            Rt = function(t, e) {
                return "none" === (t = e || t).style.display || "" === t.style.display && ft.contains(t.ownerDocument, t) && "none" === ft.css(t, "display")
            },
            zt = function(t, e, n, i) {
                var o, s, r = {};
                for (s in e) r[s] = t.style[s], t.style[s] = e[s];
                o = n.apply(t, i || []);
                for (s in e) t.style[s] = r[s];
                return o
            },
            Wt = {};
        ft.fn.extend({
            show: function() {
                return v(this, !0)
            },
            hide: function() {
                return v(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Rt(this) ? ft(this).show() : ft(this).hide()
                })
            }
        });
        var Bt = /^(?:checkbox|radio)$/i,
            Xt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Yt = /^$|\/(?:java|ecma)script/i,
            Ut = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ut.optgroup = Ut.option, Ut.tbody = Ut.tfoot = Ut.colgroup = Ut.caption = Ut.thead, Ut.th = Ut.td;
        var Vt = /<|&#?\w+;/;
        ! function() {
            var t = et.createDocumentFragment().appendChild(et.createElement("div")),
                e = et.createElement("input");
            e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), ht.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ht.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Zt = et.documentElement,
            Gt = /^key/,
            Qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Kt = /^([^.]*)(?:\.(.+)|)/;
        ft.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var s, r, a, l, c, u, d, h, p, f, g, m = Mt.get(t);
                if (m)
                    for (n.handler && (s = n, n = s.handler, o = s.selector), o && ft.find.matchesSelector(Zt, o), n.guid || (n.guid = ft.guid++), (l = m.events) || (l = m.events = {}), (r = m.handle) || (r = m.handle = function(e) {
                            return void 0 !== ft && ft.event.triggered !== e.type ? ft.event.dispatch.apply(t, arguments) : void 0
                        }), c = (e = (e || "").match(At) || [""]).length; c--;) a = Kt.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p && (d = ft.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = ft.event.special[p] || {}, u = ft.extend({
                        type: p,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && ft.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, s), (h = l[p]) || (h = l[p] = [], h.delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, f, r) || t.addEventListener && t.addEventListener(p, r)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), ft.event.global[p] = !0)
            },
            remove: function(t, e, n, i, o) {
                var s, r, a, l, c, u, d, h, p, f, g, m = Mt.hasData(t) && Mt.get(t);
                if (m && (l = m.events)) {
                    for (c = (e = (e || "").match(At) || [""]).length; c--;)
                        if (a = Kt.exec(e[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                            for (d = ft.event.special[p] || {}, h = l[p = (i ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = h.length; s--;) u = h[s], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(s, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
                            r && !h.length && (d.teardown && !1 !== d.teardown.call(t, f, m.handle) || ft.removeEvent(t, p, m.handle), delete l[p])
                        } else
                            for (p in l) ft.event.remove(t, p + e[c], n, i, !0);
                    ft.isEmptyObject(l) && Mt.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, n, i, o, s, r, a = ft.event.fix(t),
                    l = new Array(arguments.length),
                    c = (Mt.get(this, "events") || {})[a.type] || [],
                    u = ft.event.special[a.type] || {};
                for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                    for (r = ft.event.handlers.call(this, a, c), e = 0;
                        (o = r[e++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = o.elem, n = 0;
                            (s = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (i = ((ft.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, s, r, a = [],
                    l = e.delegateCount,
                    c = t.target;
                if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                            for (s = [], r = {}, n = 0; n < l; n++) i = e[n], o = i.selector + " ", void 0 === r[o] && (r[o] = i.needsContext ? ft(o, this).index(c) > -1 : ft.find(o, this, null, [c]).length), r[o] && s.push(i);
                            s.length && a.push({
                                elem: c,
                                handlers: s
                            })
                        } return c = this, l < e.length && a.push({
                    elem: c,
                    handlers: e.slice(l)
                }), a
            },
            addProp: function(t, e) {
                Object.defineProperty(ft.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: ft.isFunction(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[ft.expando] ? t : new ft.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== T() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === T() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1
                    },
                    _default: function(t) {
                        return o(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, ft.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, ft.Event = function(t, e) {
            return this instanceof ft.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? w : C, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), void(this[ft.expando] = !0)) : new ft.Event(t, e)
        }, ft.Event.prototype = {
            constructor: ft.Event,
            isDefaultPrevented: C,
            isPropagationStopped: C,
            isImmediatePropagationStopped: C,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = w, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = w, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = w, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ft.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
                var e = t.button;
                return null == t.which && Gt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Qt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, ft.event.addProp), ft.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            ft.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        s = t.handleObj;
                    return o && (o === i || ft.contains(i, o)) || (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), ft.fn.extend({
            on: function(t, e, n, i) {
                return S(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return S(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ft(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = C), this.each(function() {
                    ft.event.remove(this, t, n, e)
                })
            }
        });
        var Jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            te = /<script|<style|<link/i,
            ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ne = /^true\/(.*)/,
            ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        ft.extend({
            htmlPrefilter: function(t) {
                return t.replace(Jt, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var i, o, s, r, a = t.cloneNode(!0),
                    l = ft.contains(t.ownerDocument, t);
                if (!(ht.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))
                    for (r = y(a), s = y(t), i = 0, o = s.length; i < o; i++) A(s[i], r[i]);
                if (e)
                    if (n)
                        for (s = s || y(t), r = r || y(a), i = 0, o = s.length; i < o; i++) P(s[i], r[i]);
                    else P(t, a);
                return (r = y(a, "script")).length > 0 && b(r, !l && y(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, n, i, o = ft.event.special, s = 0; void 0 !== (n = t[s]); s++)
                    if (Lt(n)) {
                        if (e = n[Mt.expando]) {
                            if (e.events)
                                for (i in e.events) o[i] ? ft.event.remove(n, i) : ft.removeEvent(n, i, e.handle);
                            n[Mt.expando] = void 0
                        }
                        n[_t.expando] && (n[_t.expando] = void 0)
                    }
            }
        }), ft.fn.extend({
            detach: function(t) {
                return I(this, t, !0)
            },
            remove: function(t) {
                return I(this, t)
            },
            text: function(t) {
                return Nt(this, function(t) {
                    return void 0 === t ? ft.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return D(this, arguments, function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $(this, t).appendChild(t)
                })
            },
            prepend: function() {
                return D(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = $(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return D(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return D(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ft.cleanData(y(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return ft.clone(this, t, e)
                })
            },
            html: function(t) {
                return Nt(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !te.test(t) && !Ut[(Xt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = ft.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (ft.cleanData(y(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return D(this, arguments, function(e) {
                    var n = this.parentNode;
                    ft.inArray(this, t) < 0 && (ft.cleanData(y(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), ft.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            ft.fn[t] = function(t) {
                for (var n, i = [], o = ft(t), s = o.length - 1, r = 0; r <= s; r++) n = r === s ? this : this.clone(!0), ft(o[r])[e](n), st.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var oe = /^margin/,
            se = new RegExp("^(" + jt + ")(?!px)[a-z%]+$", "i"),
            re = function(e) {
                var n = e.ownerDocument.defaultView;
                return n && n.opener || (n = t), n.getComputedStyle(e)
            };
        ! function() {
            function e() {
                if (a) {
                    a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Zt.appendChild(r);
                    var e = t.getComputedStyle(a);
                    n = "1%" !== e.top, s = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", o = "4px" === e.marginRight, Zt.removeChild(r), a = null
                }
            }
            var n, i, o, s, r = et.createElement("div"),
                a = et.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ht.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(a), ft.extend(ht, {
                pixelPosition: function() {
                    return e(), n
                },
                boxSizingReliable: function() {
                    return e(), i
                },
                pixelMarginRight: function() {
                    return e(), o
                },
                reliableMarginLeft: function() {
                    return e(), s
                }
            }))
        }();
        var ae = /^(none|table(?!-c[ea]).+)/,
            le = /^--/,
            ce = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ue = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            de = ["Webkit", "Moz", "ms"],
            he = et.createElement("div").style;
        ft.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = N(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, s, r, a = ft.camelCase(e),
                        l = le.test(e),
                        c = t.style;
                    return l || (e = _(a)), r = ft.cssHooks[e] || ft.cssHooks[a], void 0 === n ? r && "get" in r && void 0 !== (o = r.get(t, !1, i)) ? o : c[e] : ("string" === (s = typeof n) && (o = qt.exec(n)) && o[1] && (n = g(t, e, o), s = "number"), void(null != n && n === n && ("number" === s && (n += o && o[3] || (ft.cssNumber[a] ? "" : "px")), ht.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), r && "set" in r && void 0 === (n = r.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))))
                }
            },
            css: function(t, e, n, i) {
                var o, s, r, a = ft.camelCase(e);
                return le.test(e) || (e = _(a)), (r = ft.cssHooks[e] || ft.cssHooks[a]) && "get" in r && (o = r.get(t, !0, n)), void 0 === o && (o = N(t, e, i)), "normal" === o && e in ue && (o = ue[e]), "" === n || n ? (s = parseFloat(o), !0 === n || isFinite(s) ? s || 0 : o) : o
            }
        }), ft.each(["height", "width"], function(t, e) {
            ft.cssHooks[e] = {
                get: function(t, n, i) {
                    if (n) return !ae.test(ft.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? j(t, e, i) : zt(t, ce, function() {
                        return j(t, e, i)
                    })
                },
                set: function(t, n, i) {
                    var o, s = i && re(t),
                        r = i && F(t, e, i, "border-box" === ft.css(t, "boxSizing", !1, s), s);
                    return r && (o = qt.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = ft.css(t, e)), O(t, n, r)
                }
            }
        }), ft.cssHooks.marginLeft = L(ht.reliableMarginLeft, function(t, e) {
            if (e) return (parseFloat(N(t, "marginLeft")) || t.getBoundingClientRect().left - zt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
        }), ft.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            ft.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + Ht[i] + e] = s[i] || s[i - 2] || s[0];
                    return o
                }
            }, oe.test(t) || (ft.cssHooks[t + e].set = O)
        }), ft.fn.extend({
            css: function(t, e) {
                return Nt(this, function(t, e, n) {
                    var i, o, s = {},
                        r = 0;
                    if (Array.isArray(e)) {
                        for (i = re(t), o = e.length; r < o; r++) s[e[r]] = ft.css(t, e[r], !1, i);
                        return s
                    }
                    return void 0 !== n ? ft.style(t, e, n) : ft.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), ft.Tween = q, q.prototype = {
            constructor: q,
            init: function(t, e, n, i, o, s) {
                this.elem = t, this.prop = n, this.easing = o || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (ft.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = q.propHooks[this.prop];
                return t && t.get ? t.get(this) : q.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = q.propHooks[this.prop];
                return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
            }
        }, q.prototype.init.prototype = q.prototype, q.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ft.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, ft.fx = q.prototype.init, ft.fx.step = {};
        var pe, fe, ge = /^(?:toggle|show|hide)$/,
            me = /queueHooks$/;
        ft.Animation = ft.extend(X, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return g(n.elem, t, qt.exec(e), n), n
                    }]
                },
                tweener: function(t, e) {
                    ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(At);
                    for (var n, i = 0, o = t.length; i < o; i++) n = t[i], X.tweeners[n] = X.tweeners[n] || [], X.tweeners[n].unshift(e)
                },
                prefilters: [function(t, e, n) {
                    var i, o, s, r, a, l, c, u, d = "width" in e || "height" in e,
                        h = this,
                        p = {},
                        f = t.style,
                        g = t.nodeType && Rt(t),
                        m = Mt.get(t, "fxshow");
                    n.queue || (null == (r = ft._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function() {
                        r.unqueued || a()
                    }), r.unqueued++, h.always(function() {
                        h.always(function() {
                            r.unqueued--, ft.queue(t, "fx").length || r.empty.fire()
                        })
                    }));
                    for (i in e)
                        if (o = e[i], ge.test(o)) {
                            if (delete e[i], s = s || "toggle" === o, o === (g ? "hide" : "show")) {
                                if ("show" !== o || !m || void 0 === m[i]) continue;
                                g = !0
                            }
                            p[i] = m && m[i] || ft.style(t, i)
                        } if ((l = !ft.isEmptyObject(e)) || !ft.isEmptyObject(p)) {
                        d && 1 === t.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = m && m.display) && (c = Mt.get(t, "display")), "none" === (u = ft.css(t, "display")) && (c ? u = c : (v([t], !0), c = t.style.display || c, u = ft.css(t, "display"), v([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === ft.css(t, "float") && (l || (h.done(function() {
                            f.display = c
                        }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function() {
                            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                        })), l = !1;
                        for (i in p) l || (m ? "hidden" in m && (g = m.hidden) : m = Mt.access(t, "fxshow", {
                            display: c
                        }), s && (m.hidden = !g), g && v([t], !0), h.done(function() {
                            g || v([t]), Mt.remove(t, "fxshow");
                            for (i in p) ft.style(t, i, p[i])
                        })), l = W(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
                    }
                }],
                prefilter: function(t, e) {
                    e ? X.prefilters.unshift(t) : X.prefilters.push(t)
                }
            }), ft.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? ft.extend({}, t) : {
                    complete: n || !n && e || ft.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !ft.isFunction(e) && e
                };
                return ft.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in ft.fx.speeds ? i.duration = ft.fx.speeds[i.duration] : i.duration = ft.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    ft.isFunction(i.old) && i.old.call(this), i.queue && ft.dequeue(this, i.queue)
                }, i
            }, ft.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(Rt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var o = ft.isEmptyObject(t),
                        s = ft.speed(e, n, i),
                        r = function() {
                            var e = X(this, ft.extend({}, t), s);
                            (o || Mt.get(this, "finish")) && e.stop(!0)
                        };
                    return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            s = ft.timers,
                            r = Mt.get(this);
                        if (o) r[o] && r[o].stop && i(r[o]);
                        else
                            for (o in r) r[o] && r[o].stop && me.test(o) && i(r[o]);
                        for (o = s.length; o--;) s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(n), e = !1, s.splice(o, 1));
                        !e && n || ft.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, n = Mt.get(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            s = ft.timers,
                            r = i ? i.length : 0;
                        for (n.finish = !0, ft.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; e < r; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), ft.each(["toggle", "show", "hide"], function(t, e) {
                var n = ft.fn[e];
                ft.fn[e] = function(t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(z(e, !0), t, i, o)
                }
            }), ft.each({
                slideDown: z("show"),
                slideUp: z("hide"),
                slideToggle: z("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                ft.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), ft.timers = [], ft.fx.tick = function() {
                var t, e = 0,
                    n = ft.timers;
                for (pe = ft.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                n.length || ft.fx.stop(), pe = void 0
            }, ft.fx.timer = function(t) {
                ft.timers.push(t), ft.fx.start()
            }, ft.fx.interval = 13, ft.fx.start = function() {
                fe || (fe = !0, H())
            }, ft.fx.stop = function() {
                fe = null
            }, ft.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ft.fn.delay = function(e, n) {
                return e = ft.fx ? ft.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                    var o = t.setTimeout(n, e);
                    i.stop = function() {
                        t.clearTimeout(o)
                    }
                })
            },
            function() {
                var t = et.createElement("input"),
                    e = et.createElement("select").appendChild(et.createElement("option"));
                t.type = "checkbox", ht.checkOn = "" !== t.value, ht.optSelected = e.selected, (t = et.createElement("input")).value = "t", t.type = "radio", ht.radioValue = "t" === t.value
            }();
        var ve, ye = ft.expr.attrHandle;
        ft.fn.extend({
            attr: function(t, e) {
                return Nt(this, ft.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    ft.removeAttr(this, t)
                })
            }
        }), ft.extend({
            attr: function(t, e, n) {
                var i, o, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? ft.prop(t, e, n) : (1 === s && ft.isXMLDoc(t) || (o = ft.attrHooks[e.toLowerCase()] || (ft.expr.match.bool.test(e) ? ve : void 0)), void 0 !== n ? null === n ? void ft.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : (i = ft.find.attr(t, e), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!ht.radioValue && "radio" === e && o(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i = 0,
                    o = e && e.match(At);
                if (o && 1 === t.nodeType)
                    for (; n = o[i++];) t.removeAttribute(n)
            }
        }), ve = {
            set: function(t, e, n) {
                return !1 === e ? ft.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = ye[e] || ft.find.attr;
            ye[e] = function(t, e, i) {
                var o, s, r = e.toLowerCase();
                return i || (s = ye[r], ye[r] = o, o = null != n(t, e, i) ? r : null, ye[r] = s), o
            }
        });
        var be = /^(?:input|select|textarea|button)$/i,
            xe = /^(?:a|area)$/i;
        ft.fn.extend({
            prop: function(t, e) {
                return Nt(this, ft.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[ft.propFix[t] || t]
                })
            }
        }), ft.extend({
            prop: function(t, e, n) {
                var i, o, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return 1 === s && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, o = ft.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = ft.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : be.test(t.nodeName) || xe.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), ht.optSelected || (ft.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ft.propFix[this.toLowerCase()] = this
        }), ft.fn.extend({
            addClass: function(t) {
                var e, n, i, o, s, r, a, l = 0;
                if (ft.isFunction(t)) return this.each(function(e) {
                    ft(this).addClass(t.call(this, e, U(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(At) || []; n = this[l++];)
                        if (o = U(n), i = 1 === n.nodeType && " " + Y(o) + " ") {
                            for (r = 0; s = e[r++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                            o !== (a = Y(i)) && n.setAttribute("class", a)
                        } return this
            },
            removeClass: function(t) {
                var e, n, i, o, s, r, a, l = 0;
                if (ft.isFunction(t)) return this.each(function(e) {
                    ft(this).removeClass(t.call(this, e, U(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(At) || []; n = this[l++];)
                        if (o = U(n), i = 1 === n.nodeType && " " + Y(o) + " ") {
                            for (r = 0; s = e[r++];)
                                for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
                            o !== (a = Y(i)) && n.setAttribute("class", a)
                        } return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function(n) {
                    ft(this).toggleClass(t.call(this, n, U(this), e), e)
                }) : this.each(function() {
                    var e, i, o, s;
                    if ("string" === n)
                        for (i = 0, o = ft(this), s = t.match(At) || []; e = s[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else void 0 !== t && "boolean" !== n || ((e = U(this)) && Mt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Mt.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + Y(U(n)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var we = /\r/g;
        ft.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0];
                return arguments.length ? (i = ft.isFunction(t), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? t.call(this, n, ft(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = ft.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), (e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = ft.valHooks[o.type] || ft.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(we, "") : null == n ? "" : n)) : void 0
            }
        }), ft.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = ft.find.attr(t, "value");
                        return null != e ? e : Y(ft.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, n, i, s = t.options,
                            r = t.selectedIndex,
                            a = "select-one" === t.type,
                            l = a ? null : [],
                            c = a ? r + 1 : s.length;
                        for (i = r < 0 ? c : a ? r : 0; i < c; i++)
                            if (((n = s[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                                if (e = ft(n).val(), a) return e;
                                l.push(e)
                            } return l
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, s = ft.makeArray(e), r = o.length; r--;) i = o[r], (i.selected = ft.inArray(ft.valHooks.option.get(i), s) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), s
                    }
                }
            }
        }), ft.each(["radio", "checkbox"], function() {
            ft.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e)) return t.checked = ft.inArray(ft(t).val(), e) > -1
                }
            }, ht.checkOn || (ft.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var Ce = /^(?:focusinfocus|focusoutblur)$/;
        ft.extend(ft.event, {
            trigger: function(e, n, i, o) {
                var s, r, a, l, c, u, d, h = [i || et],
                    p = ct.call(e, "type") ? e.type : e,
                    f = ct.call(e, "namespace") ? e.namespace.split(".") : [];
                if (r = a = i = i || et, 3 !== i.nodeType && 8 !== i.nodeType && !Ce.test(p + ft.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[ft.expando] ? e : new ft.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ft.makeArray(n, [e]), d = ft.event.special[p] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                    if (!o && !d.noBubble && !ft.isWindow(i)) {
                        for (l = d.delegateType || p, Ce.test(l + p) || (r = r.parentNode); r; r = r.parentNode) h.push(r), a = r;
                        a === (i.ownerDocument || et) && h.push(a.defaultView || a.parentWindow || t)
                    }
                    for (s = 0;
                        (r = h[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : d.bindType || p, (u = (Mt.get(r, "events") || {})[e.type] && Mt.get(r, "handle")) && u.apply(r, n), (u = c && r[c]) && u.apply && Lt(r) && (e.result = u.apply(r, n), !1 === e.result && e.preventDefault());
                    return e.type = p, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), n) || !Lt(i) || c && ft.isFunction(i[p]) && !ft.isWindow(i) && ((a = i[c]) && (i[c] = null), ft.event.triggered = p, i[p](), ft.event.triggered = void 0, a && (i[c] = a)), e.result
                }
            },
            simulate: function(t, e, n) {
                var i = ft.extend(new ft.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                ft.event.trigger(i, null, e)
            }
        }), ft.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    ft.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n) return ft.event.trigger(t, e, n, !0)
            }
        }), ft.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
            ft.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), ft.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), ht.focusin = "onfocusin" in t, ht.focusin || ft.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                ft.event.simulate(e, t.target, ft.event.fix(t))
            };
            ft.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = Mt.access(i, e);
                    o || i.addEventListener(t, n, !0), Mt.access(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = Mt.access(i, e) - 1;
                    o ? Mt.access(i, e, o) : (i.removeEventListener(t, n, !0), Mt.remove(i, e))
                }
            }
        });
        var Te = t.location,
            Se = ft.now(),
            $e = /\?/;
        ft.parseXML = function(e) {
            var n;
            if (!e || "string" != typeof e) return null;
            try {
                n = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (t) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e), n
        };
        var Ee = /\[\]$/,
            ke = /\r?\n/g,
            Pe = /^(?:submit|button|image|reset|file)$/i,
            Ae = /^(?:input|select|textarea|keygen)/i;
        ft.param = function(t, e) {
            var n, i = [],
                o = function(t, e) {
                    var n = ft.isFunction(e) ? e() : e;
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(t) || t.jquery && !ft.isPlainObject(t)) ft.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (n in t) V(n, t[n], e, o);
            return i.join("&")
        }, ft.fn.extend({
            serialize: function() {
                return ft.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = ft.prop(this, "elements");
                    return t ? ft.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !ft(this).is(":disabled") && Ae.test(this.nodeName) && !Pe.test(t) && (this.checked || !Bt.test(t))
                }).map(function(t, e) {
                    var n = ft(this).val();
                    return null == n ? null : Array.isArray(n) ? ft.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(ke, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(ke, "\r\n")
                    }
                }).get()
            }
        });
        var De = /%20/g,
            Ie = /#.*$/,
            Ne = /([?&])_=[^&]*/,
            Le = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Me = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            _e = /^(?:GET|HEAD)$/,
            Oe = /^\/\//,
            Fe = {},
            je = {},
            qe = "*/".concat("*"),
            He = et.createElement("a");
        He.href = Te.href, ft.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Te.href,
                type: "GET",
                isLocal: Me.test(Te.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": qe,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": ft.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? Q(Q(t, ft.ajaxSettings), e) : Q(ft.ajaxSettings, t)
            },
            ajaxPrefilter: Z(Fe),
            ajaxTransport: Z(je),
            ajax: function(e, n) {
                function i(e, n, i, a) {
                    var c, h, p, x, w, C = n;
                    u || (u = !0, l && t.clearTimeout(l), o = void 0, r = a || "", T.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, i && (x = K(f, T, i)), x = J(f, x, T, c), c ? (f.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (ft.lastModified[s] = w), (w = T.getResponseHeader("etag")) && (ft.etag[s] = w)), 204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = x.state, h = x.data, p = x.error, c = !p)) : (p = C, !e && C || (C = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (n || C) + "", c ? v.resolveWith(g, [h, C, T]) : v.rejectWith(g, [T, C, p]), T.statusCode(b), b = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [T, f, c ? h : p]), y.fireWith(g, [T, C]), d && (m.trigger("ajaxComplete", [T, f]), --ft.active || ft.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = void 0), n = n || {};
                var o, s, r, a, l, c, u, d, h, p, f = ft.ajaxSetup({}, n),
                    g = f.context || f,
                    m = f.context && (g.nodeType || g.jquery) ? ft(g) : ft.event,
                    v = ft.Deferred(),
                    y = ft.Callbacks("once memory"),
                    b = f.statusCode || {},
                    x = {},
                    w = {},
                    C = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (u) {
                                if (!a)
                                    for (a = {}; e = Le.exec(r);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return u ? r : null
                        },
                        setRequestHeader: function(t, e) {
                            return null == u && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, x[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return null == u && (f.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (u) T.always(t[T.status]);
                                else
                                    for (e in t) b[e] = [b[e], t[e]];
                            return this
                        },
                        abort: function(t) {
                            var e = t || C;
                            return o && o.abort(e), i(0, e), this
                        }
                    };
                if (v.promise(T), f.url = ((e || f.url || Te.href) + "").replace(Oe, Te.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(At) || [""], null == f.crossDomain) {
                    c = et.createElement("a");
                    try {
                        c.href = f.url, c.href = c.href, f.crossDomain = He.protocol + "//" + He.host != c.protocol + "//" + c.host
                    } catch (t) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = ft.param(f.data, f.traditional)), G(Fe, f, n, T), u) return T;
                (d = ft.event && f.global) && 0 == ft.active++ && ft.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !_e.test(f.type), s = f.url.replace(Ie, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(De, "+")) : (p = f.url.slice(s.length), f.data && (s += ($e.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (s = s.replace(Ne, "$1"), p = ($e.test(s) ? "&" : "?") + "_=" + Se++ + p), f.url = s + p), f.ifModified && (ft.lastModified[s] && T.setRequestHeader("If-Modified-Since", ft.lastModified[s]), ft.etag[s] && T.setRequestHeader("If-None-Match", ft.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + qe + "; q=0.01" : "") : f.accepts["*"]);
                for (h in f.headers) T.setRequestHeader(h, f.headers[h]);
                if (f.beforeSend && (!1 === f.beforeSend.call(g, T, f) || u)) return T.abort();
                if (C = "abort", y.add(f.complete), T.done(f.success), T.fail(f.error), o = G(je, f, n, T)) {
                    if (T.readyState = 1, d && m.trigger("ajaxSend", [T, f]), u) return T;
                    f.async && f.timeout > 0 && (l = t.setTimeout(function() {
                        T.abort("timeout")
                    }, f.timeout));
                    try {
                        u = !1, o.send(x, i)
                    } catch (t) {
                        if (u) throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return T
            },
            getJSON: function(t, e, n) {
                return ft.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return ft.get(t, void 0, e, "script")
            }
        }), ft.each(["get", "post"], function(t, e) {
            ft[e] = function(t, n, i, o) {
                return ft.isFunction(n) && (o = o || i, i = n, n = void 0), ft.ajax(ft.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                }, ft.isPlainObject(t) && t))
            }
        }), ft._evalUrl = function(t) {
            return ft.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, ft.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (ft.isFunction(t) && (t = t.call(this[0])), e = ft(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            },
            wrapInner: function(t) {
                return ft.isFunction(t) ? this.each(function(e) {
                    ft(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = ft(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = ft.isFunction(t);
                return this.each(function(n) {
                    ft(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    ft(this).replaceWith(this.childNodes)
                }), this
            }
        }), ft.expr.pseudos.hidden = function(t) {
            return !ft.expr.pseudos.visible(t)
        }, ft.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, ft.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        };
        var Re = {
                0: 200,
                1223: 204
            },
            ze = ft.ajaxSettings.xhr();
        ht.cors = !!ze && "withCredentials" in ze, ht.ajax = ze = !!ze, ft.ajaxTransport(function(e) {
            var n, i;
            if (ht.cors || ze && !e.crossDomain) return {
                send: function(o, s) {
                    var r, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields) a[r] = e.xhrFields[r];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (r in o) a.setRequestHeader(r, o[r]);
                    n = function(t) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Re[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout(function() {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (t) {
                        if (n) throw t
                    }
                },
                abort: function() {
                    n && n()
                }
            }
        }), ft.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }), ft.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return ft.globalEval(t), t
                }
            }
        }), ft.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), ft.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function(i, o) {
                        e = ft("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                        }), et.head.appendChild(e[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var We = [],
            Be = /(=)\?(?=&|$)|\?\?/;
        ft.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = We.pop() || ft.expando + "_" + Se++;
                return this[t] = !0, t
            }
        }), ft.ajaxPrefilter("json jsonp", function(e, n, i) {
            var o, s, r, a = !1 !== e.jsonp && (Be.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Be.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Be, "$1" + o) : !1 !== e.jsonp && (e.url += ($e.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return r || ft.error(o + " was not called"), r[0]
            }, e.dataTypes[0] = "json", s = t[o], t[o] = function() {
                r = arguments
            }, i.always(function() {
                void 0 === s ? ft(t).removeProp(o) : t[o] = s, e[o] && (e.jsonpCallback = n.jsonpCallback, We.push(o)), r && ft.isFunction(s) && s(r[0]), r = s = void 0
            }), "script"
        }), ht.createHTMLDocument = function() {
            var t = et.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
        }(), ft.parseHTML = function(t, e, n) {
            if ("string" != typeof t) return [];
            "boolean" == typeof e && (n = e, e = !1);
            var i, o, s;
            return e || (ht.createHTMLDocument ? (e = et.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = et.location.href, e.head.appendChild(i)) : e = et), o = Tt.exec(t), s = !n && [], o ? [e.createElement(o[1])] : (o = x([t], e, s), s && s.length && ft(s).remove(), ft.merge([], o.childNodes))
        }, ft.fn.load = function(t, e, n) {
            var i, o, s, r = this,
                a = t.indexOf(" ");
            return a > -1 && (i = Y(t.slice(a)), t = t.slice(0, a)), ft.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && ft.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                s = arguments, r.html(i ? ft("<div>").append(ft.parseHTML(t)).find(i) : t)
            }).always(n && function(t, e) {
                r.each(function() {
                    n.apply(this, s || [t.responseText, e, t])
                })
            }), this
        }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            ft.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), ft.expr.pseudos.animated = function(t) {
            return ft.grep(ft.timers, function(e) {
                return t === e.elem
            }).length
        }, ft.offset = {
            setOffset: function(t, e, n) {
                var i, o, s, r, a, l, c = ft.css(t, "position"),
                    u = ft(t),
                    d = {};
                "static" === c && (t.style.position = "relative"), a = u.offset(), s = ft.css(t, "top"), l = ft.css(t, "left"), ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? (i = u.position(), r = i.top, o = i.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, a))), null != e.top && (d.top = e.top - a.top + r), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : u.css(d)
            }
        }, ft.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    ft.offset.setOffset(this, t, e)
                });
                var e, n, i, o, s = this[0];
                return s ? s.getClientRects().length ? (i = s.getBoundingClientRect(), e = s.ownerDocument, n = e.documentElement, o = e.defaultView, {
                    top: i.top + o.pageYOffset - n.clientTop,
                    left: i.left + o.pageXOffset - n.clientLeft
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === ft.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), o(t[0], "html") || (i = t.offset()), i = {
                        top: i.top + ft.css(t[0], "borderTopWidth", !0),
                        left: i.left + ft.css(t[0], "borderLeftWidth", !0)
                    }), {
                        top: e.top - i.top - ft.css(n, "marginTop", !0),
                        left: e.left - i.left - ft.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === ft.css(t, "position");) t = t.offsetParent;
                    return t || Zt
                })
            }
        }), ft.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = "pageYOffset" === e;
            ft.fn[t] = function(i) {
                return Nt(this, function(t, i, o) {
                    var s;
                    return ft.isWindow(t) ? s = t : 9 === t.nodeType && (s = t.defaultView), void 0 === o ? s ? s[e] : t[i] : void(s ? s.scrollTo(n ? s.pageXOffset : o, n ? o : s.pageYOffset) : t[i] = o)
                }, t, i, arguments.length)
            }
        }), ft.each(["top", "left"], function(t, e) {
            ft.cssHooks[e] = L(ht.pixelPosition, function(t, n) {
                if (n) return n = N(t, e), se.test(n) ? ft(t).position()[e] + "px" : n
            })
        }), ft.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            ft.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                ft.fn[i] = function(o, s) {
                    var r = arguments.length && (n || "boolean" != typeof o),
                        a = n || (!0 === o || !0 === s ? "margin" : "border");
                    return Nt(this, function(e, n, o) {
                        var s;
                        return ft.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === o ? ft.css(e, n, a) : ft.style(e, n, o, a)
                    }, e, r ? o : void 0, r)
                }
            })
        }), ft.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }), ft.holdReady = function(t) {
            t ? ft.readyWait++ : ft.ready(!0)
        }, ft.isArray = Array.isArray, ft.parseJSON = JSON.parse, ft.nodeName = o, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ft
        });
        var Xe = t.jQuery,
            Ye = t.$;
        return ft.noConflict = function(e) {
            return t.$ === ft && (t.$ = Ye), e && t.jQuery === ft && (t.jQuery = Xe), ft
        }, e || (t.jQuery = t.$ = ft), ft
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        return setTimeout(function() {
            n || t(i).trigger(t.support.transition.end)
        }, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        n = function(n) {
            t(n).on("click", e, this.close)
        };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
        function i() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            s = o.attr("data-target");
        s || (s = o.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t("#" === s ? [] : s);
        e && e.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var i = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.alert");
            o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
        })
    }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
        return t.fn.alert = i, this
    }, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.button"),
                s = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, s)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            s = i.data();
        e += "Text", null == s.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function() {
            i[o](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target).closest(".btn");
        e.call(i, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.carousel"),
                s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                r = "string" == typeof e ? e : s.slide;
            o || i.data("bs.carousel", o = new n(this, s)), "number" == typeof e ? o.to(e) : r ? o[r]() : s.interval && o.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e);
        if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
        var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(i)
    }, n.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, n.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, n.prototype.slide = function(e, i) {
        var o = this.$element.find(".item.active"),
            s = i || this.getItemForDirection(e, o),
            r = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var c = s[0],
            u = t.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(s)]);
                d && d.addClass("active")
            }
            var h = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, o.addClass(a), s.addClass(a), o.one("bsTransitionEnd", function() {
                s.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(h)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(h)), r && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    };
    var o = function(n) {
        var i, o = t(this),
            s = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var r = t.extend({}, s.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (r.interval = !1), e.call(s, r), a && s.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.collapse"),
                s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && s.toggle && /show|hide/.test(e) && (s.toggle = !1), o || n.data("bs.collapse", o = new i(this, s)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse")) && e.transitioning)) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var s = e(o),
            r = s.data("bs.collapse") ? "toggle" : o.data();
        n.call(s, r)
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(i).remove(), t(o).each(function() {
            var i = t(this),
                o = e(i),
                s = {
                    relatedTarget: this
                };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", s)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
        }))
    }
    var i = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.7", s.prototype.toggle = function(i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var s = e(o),
                r = s.hasClass("open");
            if (n(), !r) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (s.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, s.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var s = e(i),
                    r = s.hasClass("open");
                if (!r && 27 != n.which || r && 27 == n.which) return 27 == n.which && s.find(o).trigger("focus"), i.trigger("click");
                var a = s.find(".dropdown-menu li:not(.disabled):visible a");
                if (a.length) {
                    var l = a.index(n.target);
                    38 == n.which && l > 0 && l--, 40 == n.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery),
function(t) {
    "use strict";

    function e(e, i) {
        return this.each(function() {
            var o = t(this),
                s = o.data("bs.modal"),
                r = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            s || o.data("bs.modal", s = new n(this, r)), "string" == typeof e ? s[e](i) : r.show && s.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var i = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(s)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : r()
        } else e && e()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            o = i.attr("href"),
            s = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            r = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, s.data(), i.data());
        i.is("a") && n.preventDefault(), s.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(s, r, this)
    })
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, e.prototype.init = function(e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
            var r = o[s];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, e.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, e.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, e.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, e.prototype.show = function() {
        var n = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(n);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (n.isDefaultPrevented() || !i) return;
            var o = this,
                s = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(a);
            c && (a = a.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                d = s[0].offsetWidth,
                h = s[0].offsetHeight;
            if (c) {
                var p = a,
                    f = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + h > f.bottom ? "top" : "top" == a && u.top - h < f.top ? "bottom" : "right" == a && u.right + d > f.width ? "left" : "left" == a && u.left - d < f.left ? "right" : a, s.removeClass(p).addClass(a)
            }
            var g = this.getCalculatedOffset(a, u, d, h);
            this.applyPlacement(g, a);
            var m = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", m).emulateTransitionEnd(e.TRANSITION_DURATION) : m()
        }
    }, e.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            s = i[0].offsetHeight,
            r = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != s && (e.top = e.top + s - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var d = /top|bottom/.test(n),
            h = d ? 2 * u.left - o + l : 2 * u.top - s + c,
            p = d ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(h, i[0][p], d)
    }, e.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function(n) {
        function i() {
            "in" != o.hoverState && s.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), n && n()
        }
        var o = this,
            s = t(this.$tip),
            r = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(r), !r.isDefaultPrevented()) return s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(e.TRANSITION_DURATION) : i(), this.hoverState = null, this
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function(e) {
        var n = (e = e || this.$element)[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var s = window.SVGElement && n instanceof window.SVGElement,
            r = i ? {
                top: 0,
                left: 0
            } : s ? null : e.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, a, l, r)
    }, e.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, e.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - r.scroll,
                l = e.top + s - r.scroll + i;
            a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
        } else {
            var c = e.left - s,
                u = e.left + s + n;
            c < r.left ? o.left = r.left - c : u > r.right && (o.left = r.left + r.width - u)
        }
        return o
    }, e.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, e.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, e.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.enable = function() {
        this.enabled = !0
    }, e.prototype.disable = function() {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function(e) {
        var n = this;
        e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, e.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = function(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tooltip"),
                s = "object" == typeof n && n;
            !o && /destroy|hide/.test(n) || (o || i.data("bs.tooltip", o = new e(this, s)), "string" == typeof n && o[n]())
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n, this
    }
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.3.7", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = t.fn.popover;
    t.fn.popover = function(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.popover"),
                s = "object" == typeof n && n;
            !o && /destroy|hide/.test(n) || (o || i.data("bs.popover", o = new e(this, s)), "string" == typeof n && o[n]())
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
        return t.fn.popover = n, this
    }
}(jQuery),
function(t) {
    "use strict";

    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.scrollspy"),
                s = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, s)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                o = e.data("target") || e.attr("href"),
                s = /^#./.test(o) && t(o);
            return s && s.length && s.is(":visible") && [
                [s[n]().top + i, o]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            s = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) r != s[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                r = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, i, o) {
        function s() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var r = i.find("> .active"),
            a = o && t.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s(), r.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    };
    var o = function(n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.affix"),
                s = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, s)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(t, e, n, i) {
        var o = this.$target.scrollTop(),
            s = this.$element.offset(),
            r = this.$target.height();
        if (null != n && "top" == this.affixed) return o < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= s.top) && "bottom" : !(o + r <= t - i) && "bottom";
        var a = null == this.affixed,
            l = a ? o : s.top,
            c = a ? r : e;
        return null != n && o <= n ? "top" : null != i && l + c >= t - i && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                s = i.bottom,
                r = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (s = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof s && (s = i.bottom(this.$element));
            var a = this.getState(r, e, o, s);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: r - e - s
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery),
function(t) {
    var e = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: !1,
        captions: !1,
        ticker: !1,
        tickerHover: !1,
        adaptiveHeight: !1,
        adaptiveHeightSpeed: 500,
        video: !1,
        useCSS: !0,
        preloadImages: "visible",
        responsive: !0,
        slideZIndex: 50,
        wrapperClass: "bx-wrapper",
        touchEnabled: !0,
        swipeThreshold: 50,
        oneToOneTouch: !0,
        preventDefaultSwipeX: !0,
        preventDefaultSwipeY: !1,
        ariaLive: !0,
        ariaHidden: !0,
        keyboardEnabled: !1,
        pager: !0,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: !0,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: !1,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: !1,
        autoControlsSelector: null,
        auto: !1,
        pause: 4e3,
        autoStart: !0,
        autoDirection: "next",
        stopAutoOnClick: !1,
        autoHover: !1,
        autoDelay: 0,
        autoSlideForOnePage: !1,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        shrinkItems: !1,
        onSliderLoad: function() {
            return !0
        },
        onSlideBefore: function() {
            return !0
        },
        onSlideAfter: function() {
            return !0
        },
        onSlideNext: function() {
            return !0
        },
        onSlidePrev: function() {
            return !0
        },
        onSliderResize: function() {
            return !0
        }
    };
    t.fn.bxSlider = function(n) {
        if (0 === this.length) return this;
        if (this.length > 1) return this.each(function() {
            t(this).bxSlider(n)
        }), this;
        var o = {},
            s = this,
            r = t(window).width(),
            a = t(window).height();
        if (!t(s).data("bxSlider")) {
            var l = function() {
                    t(s).data("bxSlider") || (o.settings = t.extend({}, e, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = s.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
                        index: o.settings.startSlide
                    }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" === o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" !== o.settings.mode && function() {
                        for (var t = document.createElement("div"), e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], n = 0; n < e.length; n++)
                            if (void 0 !== t.style[e[n]]) return o.cssPrefix = e[n].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
                        return !1
                    }(), "vertical" === o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), s.data("origStyle", s.attr("style")), s.children(o.settings.slideSelector).each(function() {
                        t(this).data("origStyle", t(this).attr("style"))
                    }), c())
                },
                c = function() {
                    var e = o.children.eq(o.settings.startSlide);
                    s.wrap('<div class="' + o.settings.wrapperClass + '"><div class="bx-viewport" style="height:600px important!;"></div></div>'), o.viewport = s.parent(), o.settings.ariaLive && !o.settings.ticker && o.viewport.attr("aria-live", "polite"), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), s.css({
                        width: "horizontal" === o.settings.mode ? 1e3 * o.children.length + 215 + "%" : "auto",
                        position: "relative"
                    }), o.usingCSS && o.settings.easing ? s.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), o.viewport.css({
                        width: "100%",
                        overflow: "hidden",
                        position: "relative"
                    }), o.viewport.parent().css({
                        maxWidth: p()
                    }), o.children.css({
                        float: "horizontal" === o.settings.mode ? "left" : "none",
                        listStyle: "none",
                        position: "relative"
                    }), o.children.css("width", f()), "horizontal" === o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" === o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" === o.settings.mode && (o.children.css({
                        position: "absolute",
                        zIndex: 0,
                        display: "none"
                    }), o.children.eq(o.settings.startSlide).css({
                        zIndex: o.settings.slideZIndex,
                        display: "block"
                    })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && S(), o.active.last = o.settings.startSlide === m() - 1, o.settings.video && s.fitVids(), ("all" === o.settings.preloadImages || o.settings.ticker) && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.controls && C(), o.settings.auto && o.settings.autoControls && T(), o.settings.pager && w(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), u(e, d)
                },
                u = function(e, n) {
                    var i = e.find('img:not([src=""]), iframe').length,
                        o = 0;
                    return 0 === i ? void n() : void e.find('img:not([src=""]), iframe').each(function() {
                        t(this).one("load error", function() {
                            ++o === i && n()
                        }).each(function() {
                            this.complete && t(this).trigger("load")
                        })
                    })
                },
                d = function() {
                    if (o.settings.infiniteLoop && "fade" !== o.settings.mode && !o.settings.ticker) {
                        var e = "vertical" === o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
                            n = o.children.slice(0, e).clone(!0).addClass("bx-clone"),
                            i = o.children.slice(-e).clone(!0).addClass("bx-clone");
                        o.settings.ariaHidden && (n.attr("aria-hidden", !0), i.attr("aria-hidden", !0)), s.append(n).prepend(i)
                    }
                    o.loader.remove(), y(), "vertical" === o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(h()), s.redrawSlider(), o.settings.onSliderLoad.call(s, o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", B), o.settings.auto && o.settings.autoStart && (m() > 1 || o.settings.autoSlideForOnePage) && M(), o.settings.ticker && _(), o.settings.pager && D(o.settings.startSlide), o.settings.controls && L(), o.settings.touchEnabled && !o.settings.ticker && q(), o.settings.keyboardEnabled && !o.settings.ticker && t(document).keydown(j)
                },
                h = function() {
                    var e = 0,
                        n = t();
                    if ("vertical" === o.settings.mode || o.settings.adaptiveHeight)
                        if (o.carousel) {
                            var s = 1 === o.settings.moveSlides ? o.active.index : o.active.index * v();
                            for (n = o.children.eq(s), i = 1; i <= o.settings.maxSlides - 1; i++) n = s + i >= o.children.length ? n.add(o.children.eq(i - 1)) : n.add(o.children.eq(s + i))
                        } else n = o.children.eq(o.active.index);
                    else n = o.children;
                    return "vertical" === o.settings.mode ? (n.each(function(n) {
                        e += t(this).outerHeight()
                    }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function() {
                        return t(this).outerHeight(!1)
                    }).get()), "border-box" === o.viewport.css("box-sizing") ? e += parseFloat(o.viewport.css("padding-top")) + parseFloat(o.viewport.css("padding-bottom")) + parseFloat(o.viewport.css("border-top-width")) + parseFloat(o.viewport.css("border-bottom-width")) : "padding-box" === o.viewport.css("box-sizing") && (e += parseFloat(o.viewport.css("padding-top")) + parseFloat(o.viewport.css("padding-bottom"))), e
                },
                p = function() {
                    var t = "100%";
                    return o.settings.slideWidth > 0 && (t = "horizontal" === o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
                },
                f = function() {
                    var t = o.settings.slideWidth,
                        e = o.viewport.width();
                    if (0 === o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" === o.settings.mode) t = e;
                    else if (o.settings.maxSlides > 1 && "horizontal" === o.settings.mode) {
                        if (e > o.maxThreshold) return t;
                        e < o.minThreshold ? t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides : o.settings.shrinkItems && (t = Math.floor((e + o.settings.slideMargin) / Math.ceil((e + o.settings.slideMargin) / (t + o.settings.slideMargin)) - o.settings.slideMargin))
                    }
                    return t
                },
                g = function() {
                    var t = 1,
                        e = null;
                    return "horizontal" === o.settings.mode && o.settings.slideWidth > 0 ? o.viewport.width() < o.minThreshold ? t = o.settings.minSlides : o.viewport.width() > o.maxThreshold ? t = o.settings.maxSlides : (e = o.children.first().width() + o.settings.slideMargin, t = Math.floor((o.viewport.width() + o.settings.slideMargin) / e)) : "vertical" === o.settings.mode && (t = o.settings.minSlides), t
                },
                m = function() {
                    var t = 0,
                        e = 0,
                        n = 0;
                    if (o.settings.moveSlides > 0)
                        if (o.settings.infiniteLoop) t = Math.ceil(o.children.length / v());
                        else
                            for (; e < o.children.length;) ++t, e = n + g(), n += o.settings.moveSlides <= g() ? o.settings.moveSlides : g();
                    else t = Math.ceil(o.children.length / g());
                    return t
                },
                v = function() {
                    return o.settings.moveSlides > 0 && o.settings.moveSlides <= g() ? o.settings.moveSlides : g()
                },
                y = function() {
                    var t, e, n;
                    o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop ? "horizontal" === o.settings.mode ? (e = o.children.last(), t = e.position(), b(-(t.left - (o.viewport.width() - e.outerWidth())), "reset", 0)) : "vertical" === o.settings.mode && (n = o.children.length - o.settings.minSlides, t = o.children.eq(n).position(), b(-t.top, "reset", 0)) : (t = o.children.eq(o.active.index * v()).position(), o.active.index === m() - 1 && (o.active.last = !0), void 0 !== t && ("horizontal" === o.settings.mode ? b(-t.left, "reset", 0) : "vertical" === o.settings.mode && b(-t.top, "reset", 0)))
                },
                b = function(e, n, i, r) {
                    var a, l;
                    o.usingCSS ? (l = "vertical" === o.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)", s.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" === n ? (s.css(o.animProp, l), 0 !== i ? s.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
                        t(e.target).is(s) && (s.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), I())
                    }) : I()) : "reset" === n ? s.css(o.animProp, l) : "ticker" === n && (s.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), s.css(o.animProp, l), 0 !== i ? s.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
                        t(e.target).is(s) && (s.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(r.resetValue, "reset", 0), O())
                    }) : (b(r.resetValue, "reset", 0), O()))) : (a = {}, a[o.animProp] = e, "slide" === n ? s.animate(a, i, o.settings.easing, function() {
                        I()
                    }) : "reset" === n ? s.css(o.animProp, e) : "ticker" === n && s.animate(a, i, "linear", function() {
                        b(r.resetValue, "reset", 0), O()
                    }))
                },
                x = function() {
                    for (var e = "", n = "", i = m(), s = 0; s < i; s++) n = "", o.settings.buildPager && t.isFunction(o.settings.buildPager) || o.settings.pagerCustom ? (n = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>";
                    o.pagerEl.html(e)
                },
                w = function() {
                    o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), x()), o.pagerEl.on("click touchend", "a", A)
                },
                C = function() {
                    o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click touchend", $), o.controls.prev.bind("click touchend", E), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
                },
                T = function() {
                    o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.on("click", ".bx-start", k), o.controls.autoEl.on("click", ".bx-stop", P), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), N(o.settings.autoStart ? "stop" : "start")
                },
                S = function() {
                    o.children.each(function(e) {
                        var n = t(this).find("img:first").attr("title");
                        void 0 !== n && ("" + n).length && t(this).append('<div class="bx-caption"><span>' + n + "</span></div>")
                    })
                },
                $ = function(t) {
                    t.preventDefault(), o.controls.el.hasClass("disabled") || (o.settings.auto && o.settings.stopAutoOnClick && s.stopAuto(), s.goToNextSlide())
                },
                E = function(t) {
                    t.preventDefault(), o.controls.el.hasClass("disabled") || (o.settings.auto && o.settings.stopAutoOnClick && s.stopAuto(), s.goToPrevSlide())
                },
                k = function(t) {
                    s.startAuto(), t.preventDefault()
                },
                P = function(t) {
                    s.stopAuto(), t.preventDefault()
                },
                A = function(e) {
                    var n, i;
                    e.preventDefault(), o.controls.el.hasClass("disabled") || (o.settings.auto && o.settings.stopAutoOnClick && s.stopAuto(), void 0 !== (n = t(e.currentTarget)).attr("data-slide-index") && (i = parseInt(n.attr("data-slide-index"))) !== o.active.index && s.goToSlide(i))
                },
                D = function(e) {
                    var n = o.children.length;
                    return "short" === o.settings.pagerType ? (o.settings.maxSlides > 1 && (n = Math.ceil(o.children.length / o.settings.maxSlides)), void o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + n)) : (o.pagerEl.find("a").removeClass("active"), void o.pagerEl.each(function(n, i) {
                        t(i).find("a").eq(e).addClass("active")
                    }))
                },
                I = function() {
                    if (o.settings.infiniteLoop) {
                        var t = "";
                        0 === o.active.index ? t = o.children.eq(0).position() : o.active.index === m() - 1 && o.carousel ? t = o.children.eq((m() - 1) * v()).position() : o.active.index === o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), t && ("horizontal" === o.settings.mode ? b(-t.left, "reset", 0) : "vertical" === o.settings.mode && b(-t.top, "reset", 0))
                    }
                    o.working = !1, o.settings.onSlideAfter.call(s, o.children.eq(o.active.index), o.oldIndex, o.active.index)
                },
                N = function(t) {
                    o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
                },
                L = function() {
                    1 === m() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 === o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index === m() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
                },
                M = function() {
                    o.settings.autoDelay > 0 ? setTimeout(s.startAuto, o.settings.autoDelay) : (s.startAuto(), t(window).focus(function() {
                        s.startAuto()
                    }).blur(function() {
                        s.stopAuto()
                    })), o.settings.autoHover && s.hover(function() {
                        o.interval && (s.stopAuto(!0), o.autoPaused = !0)
                    }, function() {
                        o.autoPaused && (s.startAuto(!0), o.autoPaused = null)
                    })
                },
                _ = function() {
                    var e, n, i, r, a, l, c, u, d = 0;
                    "next" === o.settings.autoDirection ? s.append(o.children.clone().addClass("bx-clone")) : (s.prepend(o.children.clone().addClass("bx-clone")), e = o.children.first().position(), d = "horizontal" === o.settings.mode ? -e.left : -e.top), b(d, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && (o.usingCSS ? (r = "horizontal" === o.settings.mode ? 4 : 5, o.viewport.hover(function() {
                        n = s.css("-" + o.cssPrefix + "-transform"), i = parseFloat(n.split(",")[r]), b(i, "reset", 0)
                    }, function() {
                        u = 0, o.children.each(function(e) {
                            u += "horizontal" === o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                        }), a = o.settings.speed / u, l = "horizontal" === o.settings.mode ? "left" : "top", c = a * (u - Math.abs(parseInt(i))), O(c)
                    })) : o.viewport.hover(function() {
                        s.stop()
                    }, function() {
                        u = 0, o.children.each(function(e) {
                            u += "horizontal" === o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                        }), a = o.settings.speed / u, l = "horizontal" === o.settings.mode ? "left" : "top", c = a * (u - Math.abs(parseInt(s.css(l)))), O(c)
                    })), O()
                },
                O = function(t) {
                    var e, n, i = t || o.settings.speed,
                        r = {
                            left: 0,
                            top: 0
                        },
                        a = {
                            left: 0,
                            top: 0
                        };
                    "next" === o.settings.autoDirection ? r = s.find(".bx-clone").first().position() : a = o.children.first().position(), e = "horizontal" === o.settings.mode ? -r.left : -r.top, n = "horizontal" === o.settings.mode ? -a.left : -a.top, b(e, "ticker", i, {
                        resetValue: n
                    })
                },
                F = function(e) {
                    var n = t(window),
                        i = {
                            top: n.scrollTop(),
                            left: n.scrollLeft()
                        },
                        o = e.offset();
                    return i.right = i.left + n.width(), i.bottom = i.top + n.height(), o.right = o.left + e.outerWidth(), o.bottom = o.top + e.outerHeight(), !(i.right < o.left || i.left > o.right || i.bottom < o.top || i.top > o.bottom)
                },
                j = function(t) {
                    var e = document.activeElement.tagName.toLowerCase();
                    if (null == new RegExp(e, ["i"]).exec("input|textarea") && F(s)) {
                        if (39 === t.keyCode) return $(t), !1;
                        if (37 === t.keyCode) return E(t), !1
                    }
                },
                q = function() {
                    o.touch = {
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        }
                    }, o.viewport.bind("touchstart MSPointerDown pointerdown", H), o.viewport.on("click", ".bxslider a", function(t) {
                        o.viewport.hasClass("click-disabled") && (t.preventDefault(), o.viewport.removeClass("click-disabled"))
                    })
                },
                H = function(t) {
                    if (o.controls.el.addClass("disabled"), o.working) t.preventDefault(), o.controls.el.removeClass("disabled");
                    else {
                        o.touch.originalPos = s.position();
                        var e = t.originalEvent,
                            n = void 0 !== e.changedTouches ? e.changedTouches : [e];
                        o.touch.start.x = n[0].pageX, o.touch.start.y = n[0].pageY, o.viewport.get(0).setPointerCapture && (o.pointerId = e.pointerId, o.viewport.get(0).setPointerCapture(o.pointerId)), o.viewport.bind("touchmove MSPointerMove pointermove", z), o.viewport.bind("touchend MSPointerUp pointerup", W), o.viewport.bind("MSPointerCancel pointercancel", R)
                    }
                },
                R = function(t) {
                    b(o.touch.originalPos.left, "reset", 0), o.controls.el.removeClass("disabled"), o.viewport.unbind("MSPointerCancel pointercancel", R), o.viewport.unbind("touchmove MSPointerMove pointermove", z), o.viewport.unbind("touchend MSPointerUp pointerup", W), o.viewport.get(0).releasePointerCapture && o.viewport.get(0).releasePointerCapture(o.pointerId)
                },
                z = function(t) {
                    var e = t.originalEvent,
                        n = void 0 !== e.changedTouches ? e.changedTouches : [e],
                        i = Math.abs(n[0].pageX - o.touch.start.x),
                        s = Math.abs(n[0].pageY - o.touch.start.y),
                        r = 0,
                        a = 0;
                    3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" !== o.settings.mode && o.settings.oneToOneTouch && ("horizontal" === o.settings.mode ? (a = n[0].pageX - o.touch.start.x, r = o.touch.originalPos.left + a) : (a = n[0].pageY - o.touch.start.y, r = o.touch.originalPos.top + a), b(r, "reset", 0))
                },
                W = function(t) {
                    o.viewport.unbind("touchmove MSPointerMove pointermove", z), o.controls.el.removeClass("disabled");
                    var e = t.originalEvent,
                        n = void 0 !== e.changedTouches ? e.changedTouches : [e],
                        i = 0,
                        r = 0;
                    o.touch.end.x = n[0].pageX, o.touch.end.y = n[0].pageY, "fade" === o.settings.mode ? (r = Math.abs(o.touch.start.x - o.touch.end.x)) >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? s.goToNextSlide() : s.goToPrevSlide(), s.stopAuto()) : ("horizontal" === o.settings.mode ? (r = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (r = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 === o.active.index && r > 0 || o.active.last && r < 0) ? b(i, "reset", 200) : Math.abs(r) >= o.settings.swipeThreshold ? (r < 0 ? s.goToNextSlide() : s.goToPrevSlide(), s.stopAuto()) : b(i, "reset", 200)), o.viewport.unbind("touchend MSPointerUp pointerup", W), o.viewport.get(0).releasePointerCapture && o.viewport.get(0).releasePointerCapture(o.pointerId)
                },
                B = function(e) {
                    if (o.initialized)
                        if (o.working) window.setTimeout(B, 10);
                        else {
                            var n = t(window).width(),
                                i = t(window).height();
                            r === n && a === i || (r = n, a = i, s.redrawSlider(), o.settings.onSliderResize.call(s, o.active.index))
                        }
                },
                X = function(t) {
                    var e = g();
                    o.settings.ariaHidden && !o.settings.ticker && (o.children.attr("aria-hidden", "true"), o.children.slice(t, t + e).attr("aria-hidden", "false"))
                },
                Y = function(t) {
                    return t < 0 ? o.settings.infiniteLoop ? m() - 1 : o.active.index : t >= m() ? o.settings.infiniteLoop ? 0 : o.active.index : t
                };
            return s.goToSlide = function(e, n) {
                var i, r, a, l, c = !0,
                    u = 0,
                    d = {
                        left: 0,
                        top: 0
                    },
                    p = null;
                if (o.oldIndex = o.active.index, o.active.index = Y(e), !o.working && o.active.index !== o.oldIndex) {
                    if (o.working = !0, void 0 !== (c = o.settings.onSlideBefore.call(s, o.children.eq(o.active.index), o.oldIndex, o.active.index)) && !c) return o.active.index = o.oldIndex, void(o.working = !1);
                    "next" === n ? o.settings.onSlideNext.call(s, o.children.eq(o.active.index), o.oldIndex, o.active.index) || (c = !1) : "prev" === n && (o.settings.onSlidePrev.call(s, o.children.eq(o.active.index), o.oldIndex, o.active.index) || (c = !1)), o.active.last = o.active.index >= m() - 1, (o.settings.pager || o.settings.pagerCustom) && D(o.active.index), o.settings.controls && L(), "fade" === o.settings.mode ? (o.settings.adaptiveHeight && o.viewport.height() !== h() && o.viewport.animate({
                        height: h()
                    }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
                        zIndex: 0
                    }), o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function() {
                        t(this).css("zIndex", o.settings.slideZIndex), I()
                    })) : (o.settings.adaptiveHeight && o.viewport.height() !== h() && o.viewport.animate({
                        height: h()
                    }, o.settings.adaptiveHeightSpeed), !o.settings.infiniteLoop && o.carousel && o.active.last ? "horizontal" === o.settings.mode ? (p = o.children.eq(o.children.length - 1), d = p.position(), u = o.viewport.width() - p.outerWidth()) : (i = o.children.length - o.settings.minSlides, d = o.children.eq(i).position()) : o.carousel && o.active.last && "prev" === n ? (r = 1 === o.settings.moveSlides ? o.settings.maxSlides - v() : (m() - 1) * v() - (o.children.length - o.settings.maxSlides), p = s.children(".bx-clone").eq(r), d = p.position()) : "next" === n && 0 === o.active.index ? (d = s.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1) : e >= 0 && (l = e * parseInt(v()), d = o.children.eq(l).position()), void 0 !== d ? (a = "horizontal" === o.settings.mode ? -(d.left - u) : -d.top, b(a, "slide", o.settings.speed)) : o.working = !1), o.settings.ariaHidden && X(o.active.index * v())
                }
            }, s.goToNextSlide = function() {
                if (o.settings.infiniteLoop || !o.active.last) {
                    var t = parseInt(o.active.index) + 1;
                    s.goToSlide(t, "next")
                }
            }, s.goToPrevSlide = function() {
                if (o.settings.infiniteLoop || 0 !== o.active.index) {
                    var t = parseInt(o.active.index) - 1;
                    s.goToSlide(t, "prev")
                }
            }, s.startAuto = function(t) {
                o.interval || (o.interval = setInterval(function() {
                    "next" === o.settings.autoDirection ? s.goToNextSlide() : s.goToPrevSlide()
                }, o.settings.pause), o.settings.autoControls && !0 !== t && N("stop"))
            }, s.stopAuto = function(t) {
                o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && !0 !== t && N("start"))
            }, s.getCurrentSlide = function() {
                return o.active.index
            }, s.getCurrentSlideElement = function() {
                return o.children.eq(o.active.index)
            }, s.getSlideElement = function(t) {
                return o.children.eq(t)
            }, s.getSlideCount = function() {
                return o.children.length
            }, s.isWorking = function() {
                return o.working
            }, s.redrawSlider = function() {
                o.children.add(s.find(".bx-clone")).outerWidth(f()), o.viewport.css("height", h()), o.settings.ticker || y(), o.active.last && (o.active.index = m() - 1), o.active.index >= m() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (x(), D(o.active.index)), o.settings.ariaHidden && X(o.active.index * v())
            }, s.destroySlider = function() {
                o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function() {
                    void 0 !== t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
                }), void 0 !== t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && !o.settings.pagerCustom && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", B), o.settings.keyboardEnabled && t(document).unbind("keydown", j), t(this).removeData("bxSlider"))
            }, s.reloadSlider = function(e) {
                void 0 !== e && (n = e), s.destroySlider(), l(), t(s).data("bxSlider", this)
            }, l(), t(s).data("bxSlider", this), this
        }
    }
}(jQuery),
function(t, e, n, i) {
    "use strict";

    function o(t) {
        var e = t.currentTarget,
            i = t.data ? t.data.options : {},
            o = t.data ? t.data.items : [],
            s = "",
            r = 0;
        t.preventDefault(), t.stopPropagation(), n(e).attr("data-fancybox") && (s = n(e).data("fancybox")), s ? (o = o.length ? o.filter('[data-fancybox="' + s + '"]') : n("[data-fancybox=" + s + "]"), r = o.index(e)) : o = [e], n.fancybox.open(o, i, r)
    }
    if (!n) return i;
    var s = {
            speed: 330,
            loop: !0,
            opacity: "auto",
            margin: [44, 0],
            gutter: 30,
            infobar: !0,
            buttons: !0,
            slideShow: !0,
            fullScreen: !0,
            thumbs: !0,
            closeBtn: !0,
            smallBtn: "auto",
            image: {
                preload: "auto",
                protect: !1
            },
            ajax: {
                settings: {
                    data: {
                        fancybox: !0
                    }
                }
            },
            iframe: {
                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                preload: !0,
                scrolling: "no",
                css: {}
            },
            baseClass: "",
            slideClass: "",
            baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-controls"><div class="fancybox-infobar"><button data-fancybox-previous class="fancybox-button fancybox-button--left" title="Previous"></button><div class="fancybox-infobar__body"><span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span></div><button data-fancybox-next class="fancybox-button fancybox-button--right" title="Next"></button></div><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="Close (Esc)"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div>',
            spinnerTpl: '<div class="fancybox-loading"></div>',
            errorTpl: '<div class="fancybox-error"><p>The requested content cannot be loaded. <br /> Please try again later.<p></div>',
            closeTpl: '<button data-fancybox-close class="fancybox-close-small"></button>',
            parentEl: "body",
            touch: !0,
            keyboard: !0,
            focus: !0,
            closeClickOutside: !0,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeMove: n.noop,
            afterMove: n.noop,
            onComplete: n.noop,
            onInit: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop,
            onActivate: n.noop,
            onDeactivate: n.noop
        },
        r = n(t),
        a = n(e),
        l = 0,
        c = function(t) {
            return t && t.hasOwnProperty && t instanceof n
        },
        u = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(e) {
            t.setTimeout(e, 1e3 / 60)
        },
        d = function(i) {
            var o;
            return "function" == typeof n && i instanceof n && (i = i[0]), (o = i.getBoundingClientRect()).bottom > 0 && o.right > 0 && o.left < (t.innerWidth || e.documentElement.clientWidth) && o.top < (t.innerHeight || e.documentElement.clientHeight)
        },
        h = function(t, i, o) {
            var r = this;
            r.opts = n.extend(!0, {
                index: o
            }, s, i || {}), r.id = r.opts.id || ++l, r.group = [], r.currIndex = parseInt(r.opts.index, 10) || 0, r.prevIndex = null, r.prevPos = null, r.currPos = 0, r.firstRun = null, r.createGroup(t), r.group.length && (r.$lastFocus = n(e.activeElement).blur(), r.slides = {}, r.init(t))
        };
    n.extend(h.prototype, {
        init: function() {
            var t, e, i = this,
                o = !1;
            i.scrollTop = a.scrollTop(), i.scrollLeft = a.scrollLeft(), n.fancybox.getInstance() || (t = n("body").width(), n("html").addClass("fancybox-enabled"), n.fancybox.isTouch ? (n.each(i.group, function(t, e) {
                if ("image" !== e.type && "iframe" !== e.type) return o = !0, !1
            }), o && n("body").css({
                position: "fixed",
                width: t,
                top: -1 * i.scrollTop
            })) : (t = n("body").width() - t) > 1 && n('<style id="fancybox-noscroll" type="text/css">').html(".compensate-for-scrollbar, .fancybox-enabled body { margin-right: " + t + "px; }").appendTo("head")), e = n(i.opts.baseTpl).attr("id", "fancybox-container-" + i.id).data("FancyBox", i).addClass(i.opts.baseClass).hide().prependTo(i.opts.parentEl), i.$refs = {
                container: e,
                bg: e.find(".fancybox-bg"),
                controls: e.find(".fancybox-controls"),
                buttons: e.find(".fancybox-buttons"),
                slider_wrap: e.find(".fancybox-slider-wrap"),
                slider: e.find(".fancybox-slider"),
                caption: e.find(".fancybox-caption")
            }, i.trigger("onInit"), i.activate(), i.current || i.jumpTo(i.currIndex)
        },
        createGroup: function(t) {
            var e = this,
                o = n.makeArray(t);
            n.each(o, function(t, o) {
                var s, r, a, l, c = {},
                    u = {},
                    d = [];
                n.isPlainObject(o) ? (c = o, u = o.opts || {}) : "object" === n.type(o) && n(o).length ? (s = n(o), d = s.data(), u = "options" in d ? d.options : {}, u = "object" === n.type(u) ? u : {}, c.type = "type" in d ? d.type : u.type, c.src = "src" in d ? d.src : u.src || s.attr("href"), u.width = "width" in d ? d.width : u.width, u.height = "height" in d ? d.height : u.height, u.thumb = "thumb" in d ? d.thumb : u.thumb, u.selector = "selector" in d ? d.selector : u.selector, "srcset" in d && (u.image = {
                    srcset: d.srcset
                }), u.$orig = s) : c = {
                    type: "html",
                    content: o + ""
                }, c.opts = n.extend(!0, {}, e.opts, u), r = c.type, a = c.src || "", r || (c.content ? r = "html" : a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? r = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? r = "pdf" : "#" === a.charAt(0) && (r = "inline"), c.type = r), c.index = e.group.length, c.opts.$orig && !c.opts.$orig.length && delete c.opts.$orig, !c.opts.$thumb && c.opts.$orig && (c.opts.$thumb = c.opts.$orig.find("img:first")), c.opts.$thumb && !c.opts.$thumb.length && delete c.opts.$thumb, "function" === n.type(c.opts.caption) ? c.opts.caption = c.opts.caption.apply(o, [e, c]) : "caption" in d ? c.opts.caption = d.caption : u.$orig && (c.opts.caption = s.attr("title")), c.opts.caption = c.opts.caption === i ? "" : c.opts.caption + "", "ajax" === r && (l = a.split(/\s+/, 2)).length > 1 && (c.src = l.shift(), c.opts.selector = l.shift()), "auto" == c.opts.smallBtn && (n.inArray(r, ["html", "inline", "ajax"]) > -1 ? (c.opts.buttons = !1, c.opts.smallBtn = !0) : c.opts.smallBtn = !1), "pdf" === r && (c.type = "iframe", c.opts.closeBtn = !0, c.opts.smallBtn = !1, c.opts.iframe.preload = !1), c.opts.modal && n.extend(!0, c.opts, {
                    infobar: 0,
                    buttons: 0,
                    keyboard: 0,
                    slideShow: 0,
                    fullScreen: 0,
                    closeClickOutside: 0
                }), e.group.push(c)
            })
        },
        addEvents: function() {
            var e = this;
            e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                t.stopPropagation(), t.preventDefault(), e.close(t)
            }).on("click.fb-previous", "[data-fancybox-previous]", function(t) {
                t.stopPropagation(), t.preventDefault(), e.previous()
            }).on("click.fb-next", "[data-fancybox-next]", function(t) {
                t.stopPropagation(), t.preventDefault(), e.next()
            }), n(t).on("orientationchange.fb resize.fb", function(t) {
                u(function() {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? e.update() : (e.$refs.slider_wrap.hide(), u(function() {
                        e.$refs.slider_wrap.show(), e.update()
                    }))
                })
            }), a.on("focusin.fb", function(t) {
                var i = n.fancybox ? n.fancybox.getInstance() : null;
                !i || n(t.target).hasClass("fancybox-container") || n.contains(i.$refs.container[0], t.target) || (t.stopPropagation(), i.focus(), r.scrollTop(e.scrollTop).scrollLeft(e.scrollLeft))
            }), a.on("keydown.fb", function(t) {
                var i = e.current,
                    o = t.keyCode || t.which;
                if (i && i.opts.keyboard && !n(t.target).is("input") && !n(t.target).is("textarea")) {
                    if (8 === o || 27 === o) return t.preventDefault(), void e.close(t);
                    switch (o) {
                        case 37:
                        case 38:
                            t.preventDefault(), e.previous();
                            break;
                        case 39:
                        case 40:
                            t.preventDefault(), e.next();
                            break;
                        case 80:
                        case 32:
                            t.preventDefault(), e.SlideShow && (t.preventDefault(), e.SlideShow.toggle());
                            break;
                        case 70:
                            e.FullScreen && (t.preventDefault(), e.FullScreen.toggle());
                            break;
                        case 71:
                            e.Thumbs && (t.preventDefault(), e.Thumbs.toggle())
                    }
                }
            })
        },
        removeEvents: function() {
            r.off("scroll.fb resize.fb orientationchange.fb"), a.off("keydown.fb focusin.fb click.fb-close"), this.$refs.container.off("click.fb-close click.fb-previous click.fb-next")
        },
        previous: function(t) {
            this.jumpTo(this.currIndex - 1, t)
        },
        next: function(t) {
            this.jumpTo(this.currIndex + 1, t)
        },
        jumpTo: function(t, e) {
            var n, o, s, r, a = this;
            if (n = a.firstRun = null === a.firstRun, o = s = t = parseInt(t, 10), r = !!a.current && a.current.opts.loop, !a.isAnimating && (o != a.currIndex || n)) {
                if (a.group.length > 1 && r) o %= a.group.length, o = o < 0 ? a.group.length + o : o, 2 == a.group.length ? s = t - a.currIndex + a.currPos : (s = o - a.currIndex + a.currPos, Math.abs(a.currPos - (s + a.group.length)) < Math.abs(a.currPos - s) ? s += a.group.length : Math.abs(a.currPos - (s - a.group.length)) < Math.abs(a.currPos - s) && (s -= a.group.length));
                else if (!a.group[o]) return void a.update(!1, !1, e);
                a.current && (a.current.$slide.removeClass("fancybox-slide--current fancybox-slide--complete"), a.updateSlide(a.current, !0)), a.prevIndex = a.currIndex, a.prevPos = a.currPos, a.currIndex = o, a.currPos = s, a.current = a.createSlide(s), a.group.length > 1 && ((a.opts.loop || s - 1 >= 0) && a.createSlide(s - 1), (a.opts.loop || s + 1 < a.group.length) && a.createSlide(s + 1)), a.current.isMoved = !1, a.current.isComplete = !1, e = parseInt(e === i ? 1.5 * a.current.opts.speed : e, 10), a.trigger("beforeMove"), a.updateControls(), n && (a.current.$slide.addClass("fancybox-slide--current"), a.$refs.container.show(), u(function() {
                    a.$refs.bg.css("transition-duration", a.current.opts.speed + "ms"), a.$refs.container.addClass("fancybox-container--ready")
                })), a.update(!0, !1, n ? 0 : e, function() {
                    a.afterMove()
                }), a.loadSlide(a.current), n && a.current.$ghost || a.preload()
            }
        },
        createSlide: function(t) {
            var e, i, o, s = this;
            if (i = t % s.group.length, i = i < 0 ? s.group.length + i : i, !s.slides[t] && s.group[i]) {
                if (s.opts.loop && s.group.length > 2)
                    for (var r in s.slides)
                        if (s.slides[r].index === i) return o = s.slides[r], o.pos = t, s.slides[t] = o, delete s.slides[r], s.updateSlide(o), o;
                e = n('<div class="fancybox-slide"></div>').appendTo(s.$refs.slider), s.slides[t] = n.extend(!0, {}, s.group[i], {
                    pos: t,
                    $slide: e,
                    isMoved: !1,
                    isLoaded: !1
                })
            }
            return s.slides[t]
        },
        zoomInOut: function(t, e, i) {
            var o, s, r, a = this,
                l = a.current,
                c = l.$placeholder,
                u = l.opts.opacity,
                h = l.opts.$thumb,
                p = h ? h.offset() : 0,
                f = l.$slide.offset();
            return !(!(c && l.isMoved && p && d(h)) || "In" === t && !a.firstRun || (n.fancybox.stop(c), a.isAnimating = !0, o = {
                top: p.top - f.top + parseFloat(h.css("border-top-width") || 0),
                left: p.left - f.left + parseFloat(h.css("border-left-width") || 0),
                width: h.width(),
                height: h.height(),
                scaleX: 1,
                scaleY: 1
            }, "auto" == u && (u = Math.abs(l.width / l.height - o.width / o.height) > .1), "In" === t ? (s = o, r = a.getFitPos(l), r.scaleX = r.width / s.width, r.scaleY = r.height / s.height, u && (s.opacity = .1, r.opacity = 1)) : (s = n.fancybox.getTranslate(c), r = o, l.$ghost && (l.$ghost.show(), l.$image && l.$image.remove()), s.scaleX = s.width / r.width, s.scaleY = s.height / r.height, s.width = r.width, s.height = r.height, u && (r.opacity = 0)), a.updateCursor(r.width, r.height), delete r.width, delete r.height, n.fancybox.setTranslate(c, s), c.show(), a.trigger("beforeZoom" + t), c.css("transition", "all " + e + "ms"), n.fancybox.setTranslate(c, r), setTimeout(function() {
                var e;
                c.css("transition", "none"), (e = n.fancybox.getTranslate(c)).scaleX = 1, e.scaleY = 1, n.fancybox.setTranslate(c, e), a.trigger("afterZoom" + t), i.apply(a), a.isAnimating = !1
            }, e), 0))
        },
        canPan: function() {
            var t = this,
                e = t.current,
                n = e.$placeholder,
                i = !1;
            return n && (i = t.getFitPos(e), i = Math.abs(n.width() - i.width) > 1 || Math.abs(n.height() - i.height) > 1), i
        },
        isScaledDown: function() {
            var t = this.current,
                e = t.$placeholder,
                i = !1;
            return e && (i = n.fancybox.getTranslate(e), i = i.width < t.width || i.height < t.height), i
        },
        scaleToActual: function(t, e, o) {
            var s, r, a, l, c, u = this,
                d = u.current,
                h = d.$placeholder,
                p = parseInt(d.$slide.width(), 10),
                f = parseInt(d.$slide.height(), 10),
                g = d.width,
                m = d.height;
            h && (u.isAnimating = !0, t = t === i ? .5 * p : t, e = e === i ? .5 * f : e, s = n.fancybox.getTranslate(h), l = g / s.width, c = m / s.height, r = .5 * p - .5 * g, a = .5 * f - .5 * m, g > p && ((r = s.left * l - (t * l - t)) > 0 && (r = 0), r < p - g && (r = p - g)), m > f && ((a = s.top * c - (e * c - e)) > 0 && (a = 0), a < f - m && (a = f - m)), u.updateCursor(g, m), n.fancybox.animate(h, null, {
                top: a,
                left: r,
                scaleX: l,
                scaleY: c
            }, o || d.opts.speed, function() {
                u.isAnimating = !1
            }))
        },
        scaleToFit: function(t) {
            var e, i = this,
                o = i.current,
                s = o.$placeholder;
            s && (i.isAnimating = !0, e = i.getFitPos(o), i.updateCursor(e.width, e.height), n.fancybox.animate(s, null, {
                top: e.top,
                left: e.left,
                scaleX: e.width / s.width(),
                scaleY: e.height / s.height()
            }, t || o.opts.speed, function() {
                i.isAnimating = !1
            }))
        },
        getFitPos: function(t) {
            var e, i, o, s, a, l, c, u = t.$placeholder || t.$content,
                d = t.width,
                h = t.height,
                p = t.opts.margin;
            return !(!u || !u.length || !d && !h) && ("number" === n.type(p) && (p = [p, p]), 2 == p.length && (p = [p[0], p[1], p[0], p[1]]), r.width() < 800 && (p = [0, 0, 0, 0]), e = parseInt(t.$slide.width(), 10) - (p[1] + p[3]), i = parseInt(t.$slide.height(), 10) - (p[0] + p[2]), o = Math.min(1, e / d, i / h), l = Math.floor(o * d), c = Math.floor(o * h), s = Math.floor(.5 * (i - c)) + p[0], a = Math.floor(.5 * (e - l)) + p[3], {
                top: s,
                left: a,
                width: l,
                height: c
            })
        },
        update: function(t, e, i, o) {
            var s, r = this;
            !0 !== r.isAnimating && r.current && (s = r.current.pos * Math.floor(r.current.$slide.width()) * -1 - r.current.pos * r.current.opts.gutter, i = parseInt(i, 10) || 0, n.fancybox.stop(r.$refs.slider), !1 === t ? r.updateSlide(r.current, e) : n.each(r.slides, function(t, n) {
                r.updateSlide(n, e)
            }), i ? n.fancybox.animate(r.$refs.slider, null, {
                top: 0,
                left: s
            }, i, function() {
                r.current.isMoved = !0, "function" === n.type(o) && o.apply(r)
            }) : (n.fancybox.setTranslate(r.$refs.slider, {
                top: 0,
                left: s
            }), r.current.isMoved = !0, "function" === n.type(o) && o.apply(r)))
        },
        updateSlide: function(t, e) {
            var i, o = this,
                s = t.$placeholder;
            (t = t || o.current) && !o.isClosing && ((i = t.pos * Math.floor(t.$slide.width()) + t.pos * t.opts.gutter) !== t.leftPos && (n.fancybox.setTranslate(t.$slide, {
                top: 0,
                left: i
            }), t.leftPos = i), !1 !== e && s && (n.fancybox.setTranslate(s, o.getFitPos(t)), t.pos === o.currPos && o.updateCursor()), t.$slide.trigger("refresh"), o.trigger("onUpdate", t))
        },
        updateCursor: function(t, e) {
            var n, o = this,
                s = o.$refs.container.removeClass("fancybox-controls--canzoomIn fancybox-controls--canzoomOut fancybox-controls--canGrab");
            !o.isClosing && o.opts.touch && (n = t !== i && e !== i ? t < o.current.width && e < o.current.height : o.isScaledDown(), n ? s.addClass("fancybox-controls--canzoomIn") : o.group.length < 2 ? s.addClass("fancybox-controls--canzoomOut") : s.addClass("fancybox-controls--canGrab"))
        },
        loadSlide: function(t) {
            var e, i, o, s = this;
            if (t && !t.isLoaded && !t.isLoading) {
                switch (t.isLoading = !0, s.trigger("beforeLoad", t), e = t.type, (i = t.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(t.opts.slideClass), e) {
                    case "image":
                        s.setImage(t);
                        break;
                    case "iframe":
                        s.setIframe(t);
                        break;
                    case "html":
                        s.setContent(t, t.content);
                        break;
                    case "inline":
                        n(t.src).length ? s.setContent(t, n(t.src)) : s.setError(t);
                        break;
                    case "ajax":
                        s.showLoading(t), o = n.ajax(n.extend({}, t.opts.ajax.settings, {
                            url: t.src,
                            success: function(e, n) {
                                "success" === n && s.setContent(t, e)
                            },
                            error: function(e, n) {
                                e && "abort" !== n && s.setError(t)
                            }
                        })), i.one("onReset", function() {
                            o.abort()
                        });
                        break;
                    default:
                        s.setError(t)
                }
                return !0
            }
        },
        setImage: function(e) {
            var i, o, s, r, a = this,
                l = e.opts.image.srcset;
            if (!e.isLoaded || e.hasError) {
                if (l) {
                    s = t.devicePixelRatio || 1, r = t.innerWidth * s, (o = l.split(",").map(function(t) {
                        var e = {};
                        return t.trim().split(/\s+/).forEach(function(t, n) {
                            var i = parseInt(t.substring(0, t.length - 1), 10);
                            return 0 === n ? e.url = t : void(i && (e.value = i, e.postfix = t[t.length - 1]))
                        }), e
                    })).sort(function(t, e) {
                        return t.value - e.value
                    });
                    for (var c = 0; c < o.length; c++) {
                        var u = o[c];
                        if ("w" === u.postfix && u.value >= r || "x" === u.postfix && u.value >= s) {
                            i = u;
                            break
                        }
                    }!i && o.length && (i = o[o.length - 1]), i && (e.src = i.url, e.width && e.height && "w" == i.postfix && (e.height = e.width / e.height * i.value, e.width = i.value))
                }
                e.$placeholder = n('<div class="fancybox-placeholder"></div>').hide().appendTo(e.$slide), !1 !== e.opts.preload && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = n("<img />").one("load error", function() {
                    a.isClosing || (n("<img/>")[0].src = e.src, a.revealImage(e, function() {
                        a.setBigImage(e), a.firstRun && e.index === a.currIndex && a.preload()
                    }))
                }).addClass("fancybox-image").appendTo(e.$placeholder).attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : a.setBigImage(e)
            } else a.afterLoad(e)
        },
        setBigImage: function(t) {
            var e = this,
                i = n("<img />");
            t.$image = i.one("error", function() {
                e.setError(t)
            }).one("load", function() {
                clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = this.naturalWidth, t.height = this.naturalHeight, t.opts.image.srcset && i.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), e.afterLoad(t), t.$ghost && (t.timouts = setTimeout(function() {
                    t.$ghost.hide()
                }, 350)))
            }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$placeholder), i[0].complete ? i.trigger("load") : i[0].error ? i.trigger("error") : t.timouts = setTimeout(function() {
                i[0].complete || t.hasError || e.showLoading(t)
            }, 150), t.opts.image.protect && n('<div class="fancybox-spaceball"></div>').appendTo(t.$placeholder).on("contextmenu.fb", function(t) {
                return 2 == t.button && t.preventDefault(), !0
            })
        },
        revealImage: function(t, e) {
            var i = this;
            return e = e || n.noop, "image" !== t.type || t.hasError || !0 === t.isRevealed ? void e.apply(i) : (t.isRevealed = !0, void(t.pos === i.currPos && i.zoomInOut("In", t.opts.speed, e) || (t.$ghost && !t.isLoaded && i.updateSlide(t, !0), t.pos === i.currPos ? n.fancybox.animate(t.$placeholder, {
                opacity: 0
            }, {
                opacity: 1
            }, 300, e) : t.$placeholder.show(), e.apply(i))))
        },
        setIframe: function(t) {
            var e, o = this,
                s = t.opts.iframe,
                r = t.$slide;
            t.$content = n('<div class="fancybox-content"></div>').css(s.css).appendTo(r), e = n(s.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", n.fancybox.isTouch ? "auto" : s.scrolling).appendTo(t.$content), s.preload ? (t.$content.addClass("fancybox-tmp"), o.showLoading(t), e.on("load.fb error.fb", function(e) {
                this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t)
            }), r.on("refresh.fb", function() {
                var n, o, r, a, l = t.$content;
                if (1 === e[0].isReady) {
                    try {
                        n = e.contents().find("body")
                    } catch (t) {}
                    n && n.length && (s.css.width === i || s.css.height === i) && (o = e[0].contentWindow.document.documentElement.scrollWidth, r = Math.ceil(n.outerWidth(!0) + (l.width() - o)), a = Math.ceil(n.outerHeight(!0)), l.css({
                        width: s.css.width === i ? r + (l.outerWidth() - l.innerWidth()) : s.css.width,
                        height: s.css.height === i ? a + (l.outerHeight() - l.innerHeight()) : s.css.height
                    })), l.removeClass("fancybox-tmp")
                }
            })) : this.afterLoad(t), e.attr("src", t.src), t.opts.smallBtn && t.$content.prepend(t.opts.closeTpl), r.one("onReset", function() {
                try {
                    n(this).find("iframe").hide().attr("src", "//about:blank")
                } catch (t) {}
                n(this).empty(), t.isLoaded = !1
            })
        },
        setContent: function(t, e) {
            var i = this;
            i.isClosing || (i.hideLoading(t), t.$slide.empty(), c(e) && e.parent().length ? (e.data("placeholder") && e.parents(".fancybox-slide").trigger("onReset"), e.data({
                placeholder: n("<div></div>").hide().insertAfter(e)
            }).css("display", "inline-block")) : ("string" === n.type(e) && 3 === (e = n("<div>").append(e).contents())[0].nodeType && (e = n("<div>").html(e)), t.opts.selector && (e = n("<div>").html(e).find(t.opts.selector))), t.$slide.one("onReset", function() {
                var i = c(e) ? e.data("placeholder") : 0;
                i && (e.hide().replaceAll(i), e.data("placeholder", null)), t.hasError || (n(this).empty(), t.isLoaded = !1)
            }), t.$content = n(e).appendTo(t.$slide), !0 === t.opts.smallBtn && t.$content.find(".fancybox-close-small").remove().end().eq(0).append(t.opts.closeTpl), this.afterLoad(t))
        },
        setError: function(t) {
            t.hasError = !0, this.setContent(t, t.opts.errorTpl)
        },
        showLoading: function(t) {
            var e = this;
            (t = t || e.current) && !t.$spinner && (t.$spinner = n(e.opts.spinnerTpl).appendTo(t.$slide))
        },
        hideLoading: function(t) {
            var e = this;
            (t = t || e.current) && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
        },
        afterMove: function() {
            var t = this,
                e = t.current,
                i = {};
            e && (e.$slide.siblings().trigger("onReset"), n.each(t.slides, function(e, n) {
                n.pos >= t.currPos - 1 && n.pos <= t.currPos + 1 ? i[n.pos] = n : n && n.$slide.remove()
            }), t.slides = i, t.trigger("afterMove"), e.isLoaded && t.complete())
        },
        afterLoad: function(t) {
            var e = this;
            e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.$ghost || e.updateSlide(t, !0), t.index === e.currIndex && t.isMoved ? e.complete() : t.$ghost || e.revealImage(t))
        },
        complete: function() {
            var t = this,
                e = t.current;
            t.revealImage(e, function() {
                e.isComplete = !0, e.$slide.addClass("fancybox-slide--complete"), t.updateCursor(), t.trigger("onComplete"), e.opts.focus && "image" !== e.type && "iframe" !== e.type && t.focus()
            })
        },
        preload: function() {
            var t, e, n = this;
            n.group.length < 2 || (t = n.slides[n.currPos + 1], e = n.slides[n.currPos - 1], t && "image" === t.type && n.loadSlide(t), e && "image" === e.type && n.loadSlide(e))
        },
        focus: function() {
            var t, e = this.current;
            (t = e && e.isComplete ? e.$slide.find('button,:input,[tabindex],a:not(".disabled")').filter(":visible:first") : null) && t.length || (t = this.$refs.container), t.focus(), this.$refs.slider_wrap.scrollLeft(0), e && e.$slide.scrollTop(0)
        },
        activate: function() {
            var t = this;
            n(".fancybox-container").each(function() {
                var e = n(this).data("FancyBox");
                e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate")
            }), t.current && (t.$refs.container.index() > 0 && t.$refs.container.prependTo(e.body), t.updateControls()), t.trigger("onActivate"), t.addEvents()
        },
        close: function(t) {
            var e = this,
                i = e.current,
                o = i.opts.speed,
                s = n.proxy(function() {
                    e.cleanUp(t)
                }, this);
            return !e.isAnimating && !e.isClosing && (!1 === e.trigger("beforeClose", t) ? (n.fancybox.stop(e.$refs.slider), void u(function() {
                e.update(!0, !0, 150)
            })) : (e.isClosing = !0, i.timouts && clearTimeout(i.timouts), !0 !== t && n.fancybox.stop(e.$refs.slider), e.$refs.container.removeClass("fancybox-container--active").addClass("fancybox-container--closing"), i.$slide.removeClass("fancybox-slide--complete").siblings().remove(), i.isMoved || i.$slide.css("overflow", "visible"), e.removeEvents(), e.hideLoading(i), e.hideControls(), e.updateCursor(), e.$refs.bg.css("transition-duration", o + "ms"), this.$refs.container.removeClass("fancybox-container--ready"), void(!0 === t ? setTimeout(s, o) : e.zoomInOut("Out", o, s) || n.fancybox.animate(e.$refs.container, null, {
                opacity: 0
            }, o, "easeInSine", s))))
        },
        cleanUp: function(t) {
            var e, i = this;
            i.$refs.slider.children().trigger("onReset"), i.$refs.container.empty().remove(), i.trigger("afterClose", t), i.current = null, (e = n.fancybox.getInstance()) ? e.activate() : (n("html").removeClass("fancybox-enabled"), n("body").removeAttr("style"), r.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft), n("#fancybox-noscroll").remove()), i.$lastFocus && i.$lastFocus.focus()
        },
        trigger: function(t, i) {
            var o, s = Array.prototype.slice.call(arguments, 1),
                r = this,
                a = i && i.opts ? i : r.current;
            return a ? s.unshift(a) : a = r, s.unshift(r), n.isFunction(a.opts[t]) && (o = a.opts[t].apply(a, s)), !1 === o ? o : void("afterClose" === t ? n(e).trigger(t + ".fb", s) : r.$refs.container.trigger(t + ".fb", s))
        },
        toggleControls: function(t) {
            this.isHiddenControls ? this.updateControls(t) : this.hideControls()
        },
        hideControls: function() {
            this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-controls"), this.$refs.container.removeClass("fancybox-show-caption")
        },
        updateControls: function(t) {
            var e = this,
                i = e.$refs.container,
                o = e.$refs.caption,
                s = e.current,
                r = s.index,
                a = s.opts,
                l = a.caption;
            this.isHiddenControls && !0 !== t || (this.isHiddenControls = !1, i.addClass("fancybox-show-controls").toggleClass("fancybox-show-infobar", !!a.infobar && e.group.length > 1).toggleClass("fancybox-show-buttons", !!a.buttons).toggleClass("fancybox-is-modal", !!a.modal), n(".fancybox-button--left", i).toggleClass("fancybox-button--disabled", !a.loop && r <= 0), n(".fancybox-button--right", i).toggleClass("fancybox-button--disabled", !a.loop && r >= e.group.length - 1), n(".fancybox-button--play", i).toggle(!!(a.slideShow && e.group.length > 1)), n(".fancybox-button--close", i).toggle(!!a.closeBtn), n(".js-fancybox-count", i).html(e.group.length), n(".js-fancybox-index", i).html(r + 1), s.$slide.trigger("refresh"), o && o.empty(), l && l.length ? (o.html(l), this.$refs.container.addClass("fancybox-show-caption "), e.$caption = o) : this.$refs.container.removeClass("fancybox-show-caption"))
        }
    }), n.fancybox = {
        version: "3.0.47",
        defaults: s,
        getInstance: function(t) {
            var e = n('.fancybox-container:not(".fancybox-container--closing"):first').data("FancyBox"),
                i = Array.prototype.slice.call(arguments, 1);
            return e instanceof h && ("string" === n.type(t) ? e[t].apply(e, i) : "function" === n.type(t) && t.apply(e, i), e)
        },
        open: function(t, e, n) {
            return new h(t, e, n)
        },
        close: function(t) {
            var e = this.getInstance();
            e && (e.close(), !0 === t && this.close())
        },
        isTouch: e.createTouch !== i && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
        use3d: function() {
            var n = e.createElement("div");
            return t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode <= 11)
        }(),
        getTranslate: function(t) {
            var e, n;
            return !(!t || !t.length) && (e = t.get(0).getBoundingClientRect(), n = t.eq(0).css("transform"), n && -1 !== n.indexOf("matrix") ? (n = n.split("(")[1], n = n.split(")")[0], n = n.split(",")) : n = [], n.length ? (n = n.length > 10 ? [n[13], n[12], n[0], n[5]] : [n[5], n[4], n[0], n[3]], n = n.map(parseFloat)) : n = [0, 0, 1, 1], {
                top: n[0],
                left: n[1],
                scaleX: n[2],
                scaleY: n[3],
                opacity: parseFloat(t.css("opacity")),
                width: e.width,
                height: e.height
            })
        },
        setTranslate: function(t, e) {
            var n = "",
                o = {};
            if (t && e) return e.left === i && e.top === i || (n = (e.left === i ? t.position().top : e.left) + "px, " + (e.top === i ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== i && e.scaleY !== i && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (o.transform = n), e.opacity !== i && (o.opacity = e.opacity), e.width !== i && (o.width = e.width), e.height !== i && (o.height = e.height), t.css(o)
        },
        easing: {
            easeOutCubic: function(t, e, n, i) {
                return n * ((t = t / i - 1) * t * t + 1) + e
            },
            easeInCubic: function(t, e, n, i) {
                return n * (t /= i) * t * t + e
            },
            easeOutSine: function(t, e, n, i) {
                return n * Math.sin(t / i * (Math.PI / 2)) + e
            },
            easeInSine: function(t, e, n, i) {
                return -n * Math.cos(t / i * (Math.PI / 2)) + n + e
            }
        },
        stop: function(t) {
            t.removeData("animateID")
        },
        animate: function(t, e, o, s, r, a) {
            var l, c, d, h = this,
                p = null,
                f = 0,
                g = function() {
                    o.scaleX !== i && o.scaleY !== i && e && e.width !== i && e.height !== i && (o.width = e.width * o.scaleX, o.height = e.height * o.scaleY, o.scaleX = 1, o.scaleY = 1), h.setTranslate(t, o), a()
                },
                m = function(n) {
                    if (l = [], c = 0, t.length && t.data("animateID") === d) {
                        if (n = n || Date.now(), p && (c = n - p), p = n, (f += c) >= s) return void g();
                        for (var a in o) o.hasOwnProperty(a) && e[a] !== i && (e[a] == o[a] ? l[a] = o[a] : l[a] = h.easing[r](f, e[a], o[a] - e[a], s));
                        h.setTranslate(t, l), u(m)
                    }
                };
            h.animateID = d = h.animateID === i ? 1 : h.animateID + 1, t.data("animateID", d), a === i && "function" == n.type(r) && (a = r, r = i), r || (r = "easeOutCubic"), a = a || n.noop, e ? this.setTranslate(t, e) : e = this.getTranslate(t), s ? (t.show(), u(m)) : g()
        }
    }, n.fn.fancybox = function(t) {
        return this.off("click.fb-start").on("click.fb-start", {
            items: this,
            options: t || {}
        }, o), this
    }, n(e).on("click.fb-start", "[data-fancybox]", o)
}(window, document, window.jQuery),
function(t) {
    "use strict";
    var e = function(e, n, i) {
            if (e) return i = i || "", "object" === t.type(i) && (i = t.param(i, !0)), t.each(n, function(t, n) {
                e = e.replace("$" + t, n || "")
            }), i.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + i), e
        },
        n = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "//www.youtube.com/embed/$4",
                thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1,
                    api: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            metacafe: {
                matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
                type: "iframe",
                url: "//www.metacafe.com/embed/$1/?ap=1"
            },
            dailymotion: {
                matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                params: {
                    additionalInfos: 0,
                    autoStart: 1
                },
                type: "iframe",
                url: "//www.dailymotion.com/embed/video/$1"
            },
            vine: {
                matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
                type: "iframe",
                url: "//vine.co/v/$1/embed/simple"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            google_maps: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            }
        };
    t(document).on("onInit.fb", function(i, o) {
        t.each(o.group, function(i, o) {
            var s, r, a, l, c, u, d = o.src || "",
                h = !1;
            o.type || (t.each(n, function(n, i) {
                if (r = d.match(i.matcher), c = {}, u = n, r) {
                    if (h = i.type, i.paramPlace && r[i.paramPlace]) {
                        "?" == (l = r[i.paramPlace])[0] && (l = l.substring(1)), l = l.split("&");
                        for (var p = 0; p < l.length; ++p) {
                            var f = l[p].split("=", 2);
                            2 == f.length && (c[f[0]] = decodeURIComponent(f[1].replace(/\+/g, " ")))
                        }
                    }
                    return a = t.extend(!0, {}, i.params, o.opts[n], c), d = "function" === t.type(i.url) ? i.url.call(this, r, a, o) : e(i.url, r, a), s = "function" === t.type(i.thumb) ? i.thumb.call(this, r, a, o) : e(i.thumb, r), "vimeo" === u && (d = d.replace("&%23", "#")), !1
                }
            }), h ? (o.src = d, o.type = h, o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = s), "iframe" === h && (t.extend(!0, o.opts, {
                iframe: {
                    preload: !1,
                    scrolling: "no"
                },
                smallBtn: !1,
                closeBtn: !0,
                fullScreen: !1,
                slideShow: !1
            }), o.opts.slideClass += " fancybox-slide--video")) : o.type = "iframe")
        })
    })
}(window.jQuery),
function(t, e, n) {
    "use strict";
    var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(e) {
            t.setTimeout(e, 1e3 / 60)
        },
        o = function(e) {
            var n = [];
            e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
            for (var i in e) e[i].pageX ? n.push({
                x: e[i].pageX,
                y: e[i].pageY
            }) : e[i].clientX && n.push({
                x: e[i].clientX,
                y: e[i].clientY
            });
            return n
        },
        s = function(t, e, n) {
            return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
        },
        r = function(t) {
            return t.is("a") || t.is("button") || t.is("input") || t.is("select") || t.is("textarea") || n.isFunction(t.get(0).onclick)
        },
        a = function(e) {
            var n = t.getComputedStyle(e)["overflow-y"],
                i = t.getComputedStyle(e)["overflow-x"],
                o = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
                s = ("scroll" === i || "auto" === i) && e.scrollWidth > e.clientWidth;
            return o || s
        },
        l = function(t) {
            for (var e = !1; !(e = a(t.get(0))) && ((t = t.parent()).length && !t.hasClass("fancybox-slider") && !t.is("body")););
            return e
        },
        c = function(t) {
            var e = this;
            e.instance = t, e.$wrap = t.$refs.slider_wrap, e.$slider = t.$refs.slider, e.$container = t.$refs.container, e.destroy(), e.$wrap.on("touchstart.fb mousedown.fb", n.proxy(e, "ontouchstart"))
        };
    c.prototype.destroy = function() {
        this.$wrap.off("touchstart.fb mousedown.fb touchmove.fb mousemove.fb touchend.fb touchcancel.fb mouseup.fb mouseleave.fb")
    }, c.prototype.ontouchstart = function(e) {
        var i = this,
            a = n(e.target),
            c = i.instance.current,
            u = c.$content || c.$placeholder;
        return i.startPoints = o(e), i.$target = a, i.$content = u, i.canvasWidth = Math.round(c.$slide[0].clientWidth), i.canvasHeight = Math.round(c.$slide[0].clientHeight), i.startEvent = e, e.originalEvent.clientX > i.canvasWidth + c.$slide.offset().left || (r(a) || r(a.parent()) || l(a) ? void 0 : c.opts.touch ? void(e.originalEvent && 2 == e.originalEvent.button || (e.stopPropagation(), e.preventDefault(), !c || i.instance.isAnimating || i.instance.isClosing || !i.startPoints || i.startPoints.length > 1 && !c.isMoved || (i.$wrap.off("touchmove.fb mousemove.fb", n.proxy(i, "ontouchmove")), i.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", n.proxy(i, "ontouchend")), i.$wrap.on("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", n.proxy(i, "ontouchend")), i.$wrap.on("touchmove.fb mousemove.fb", n.proxy(i, "ontouchmove")), i.startTime = (new Date).getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canTap = !1, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.sliderStartPos = n.fancybox.getTranslate(i.$slider), i.contentStartPos = n.fancybox.getTranslate(i.$content), i.contentLastPos = null, 1 !== i.startPoints.length || i.isZooming || (i.canTap = c.isMoved, "image" === c.type && (i.contentStartPos.width > i.canvasWidth + 1 || i.contentStartPos.height > i.canvasHeight + 1) ? (n.fancybox.stop(i.$content), i.isPanning = !0) : (n.fancybox.stop(i.$slider), i.isSwiping = !0), i.$container.addClass("fancybox-controls--isGrabbing")), 2 === i.startPoints.length && c.isMoved && !c.hasError && "image" === c.type && (c.isLoaded || c.$ghost) && (i.isZooming = !0, i.isSwiping = !1, i.isPanning = !1, n.fancybox.stop(i.$content), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))))) : (i.endPoints = i.startPoints, i.ontap()))
    }, c.prototype.ontouchmove = function(t) {
        var e = this;
        t.preventDefault(), e.newPoints = o(t), e.newPoints && e.newPoints.length && (e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe() : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))
    }, c.prototype.onSwipe = function() {
        var e, o = this,
            s = o.isSwiping,
            r = o.sliderStartPos.left;
        !0 === s ? Math.abs(o.distance) > 10 && (o.instance.group.length < 2 ? o.isSwiping = "y" : !o.instance.current.isMoved || !1 === o.instance.opts.touch.vertical || "auto" === o.instance.opts.touch.vertical && n(t).width() > 800 ? o.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(o.distanceY, o.distanceX) / Math.PI), o.isSwiping = e > 45 && e < 135 ? "y" : "x"), o.canTap = !1, o.instance.current.isMoved = !1, o.startPoints = o.newPoints) : ("x" == s && (!o.instance.current.opts.loop && 0 === o.instance.current.index && o.distanceX > 0 ? r += Math.pow(o.distanceX, .8) : !o.instance.current.opts.loop && o.instance.current.index === o.instance.group.length - 1 && o.distanceX < 0 ? r -= Math.pow(-o.distanceX, .8) : r += o.distanceX), o.sliderLastPos = {
            top: "x" == s ? 0 : o.sliderStartPos.top + o.distanceY,
            left: r
        }, i(function() {
            n.fancybox.setTranslate(o.$slider, o.sliderLastPos)
        }))
    }, c.prototype.onPan = function() {
        var t, e, o, s = this;
        s.canTap = !1, t = s.contentStartPos.width > s.canvasWidth ? s.contentStartPos.left + s.distanceX : s.contentStartPos.left, e = s.contentStartPos.top + s.distanceY, (o = s.limitMovement(t, e, s.contentStartPos.width, s.contentStartPos.height)).scaleX = s.contentStartPos.scaleX, o.scaleY = s.contentStartPos.scaleY, s.contentLastPos = o, i(function() {
            n.fancybox.setTranslate(s.$content, s.contentLastPos)
        })
    }, c.prototype.limitMovement = function(t, e, n, i) {
        var o, s, r, a, l = this,
            c = l.canvasWidth,
            u = l.canvasHeight,
            d = l.contentStartPos.left,
            h = l.contentStartPos.top,
            p = l.distanceX,
            f = l.distanceY;
        return o = Math.max(0, .5 * c - .5 * n), s = Math.max(0, .5 * u - .5 * i), r = Math.min(c - n, .5 * c - .5 * n), a = Math.min(u - i, .5 * u - .5 * i), n > c && (p > 0 && t > o && (t = o - 1 + Math.pow(-o + d + p, .8) || 0), p < 0 && t < r && (t = r + 1 - Math.pow(r - d - p, .8) || 0)), i > u && (f > 0 && e > s && (e = s - 1 + Math.pow(-s + h + f, .8) || 0), f < 0 && e < a && (e = a + 1 - Math.pow(a - h - f, .8) || 0)), {
            top: e,
            left: t
        }
    }, c.prototype.limitPosition = function(t, e, n, i) {
        var o = this,
            s = o.canvasWidth,
            r = o.canvasHeight;
        return n > s ? (t = t > 0 ? 0 : t, t = t < s - n ? s - n : t) : t = Math.max(0, s / 2 - n / 2), i > r ? (e = e > 0 ? 0 : e, e = e < r - i ? r - i : e) : e = Math.max(0, r / 2 - i / 2), {
            top: e,
            left: t
        }
    }, c.prototype.onZoom = function() {
        var e = this,
            o = e.contentStartPos.width,
            r = e.contentStartPos.height,
            a = e.contentStartPos.left,
            l = e.contentStartPos.top,
            c = s(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
            u = Math.floor(o * c),
            d = Math.floor(r * c),
            h = (o - u) * e.percentageOfImageAtPinchPointX,
            p = (r - d) * e.percentageOfImageAtPinchPointY,
            f = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
            g = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
            m = f - e.centerPointStartX,
            v = {
                top: l + (p + (g - e.centerPointStartY)),
                left: a + (h + m),
                scaleX: e.contentStartPos.scaleX * c,
                scaleY: e.contentStartPos.scaleY * c
            };
        e.canTap = !1, e.newWidth = u, e.newHeight = d, e.contentLastPos = v, i(function() {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }, c.prototype.ontouchend = function(t) {
        var e = this,
            i = e.instance.current,
            s = Math.max((new Date).getTime() - e.startTime, 1),
            r = e.isSwiping,
            a = e.isPanning,
            l = e.isZooming;
        return e.endPoints = o(t), e.$container.removeClass("fancybox-controls--isGrabbing"), e.$wrap.off("touchmove.fb mousemove.fb", n.proxy(this, "ontouchmove")), e.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", n.proxy(this, "ontouchend")), e.isSwiping = !1, e.isPanning = !1, e.isZooming = !1, e.canTap ? e.ontap() : (e.velocityX = e.distanceX / s * .5, e.velocityY = e.distanceY / s * .5, e.speed = i.opts.speed || 330, e.speedX = Math.max(.75 * e.speed, Math.min(1.5 * e.speed, 1 / Math.abs(e.velocityX) * e.speed)), e.speedY = Math.max(.75 * e.speed, Math.min(1.5 * e.speed, 1 / Math.abs(e.velocityY) * e.speed)), void(a ? e.endPanning() : l ? e.endZooming() : e.endSwiping(r)))
    }, c.prototype.endSwiping = function(t) {
        var e = this;
        "y" == t && Math.abs(e.distanceY) > 50 ? (n.fancybox.animate(e.$slider, null, {
            top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
            left: e.sliderStartPos.left,
            opacity: 0
        }, e.speedY), e.instance.close(!0)) : "x" == t && e.distanceX > 50 ? e.instance.previous(e.speedX) : "x" == t && e.distanceX < -50 ? e.instance.next(e.speedX) : e.instance.update(!1, !0, 150)
    }, c.prototype.endPanning = function() {
        var t, e, i, o = this;
        o.contentLastPos && (t = o.contentLastPos.left + o.velocityX * o.speed * 2, e = o.contentLastPos.top + o.velocityY * o.speed * 2, i = o.limitPosition(t, e, o.contentStartPos.width, o.contentStartPos.height), i.width = o.contentStartPos.width, i.height = o.contentStartPos.height, n.fancybox.animate(o.$content, null, i, o.speed, "easeOutSine"))
    }, c.prototype.endZooming = function() {
        var t, e, i, o, s = this,
            r = s.instance.current,
            a = s.newWidth,
            l = s.newHeight;
        s.contentLastPos && (t = s.contentLastPos.left, e = s.contentLastPos.top, o = {
            top: e,
            left: t,
            width: a,
            height: l,
            scaleX: 1,
            scaleY: 1
        }, n.fancybox.setTranslate(s.$content, o), a < s.canvasWidth && l < s.canvasHeight ? s.instance.scaleToFit(150) : a > r.width || l > r.height ? s.instance.scaleToActual(s.centerPointStartX, s.centerPointStartY, 150) : (i = s.limitPosition(t, e, a, l), n.fancybox.animate(s.$content, null, i, s.speed, "easeOutSine")))
    }, c.prototype.ontap = function() {
        var t = this,
            e = t.instance,
            i = e.current,
            o = t.endPoints[0].x,
            s = t.endPoints[0].y;
        if (o -= t.$wrap.offset().left, s -= t.$wrap.offset().top, e.SlideShow && e.SlideShow.isActive && e.SlideShow.stop(), !n.fancybox.isTouch) return i.opts.closeClickOutside && t.$target.is(".fancybox-slide") ? void e.close(t.startEvent) : void("image" == i.type && i.isMoved && (e.canPan() ? e.scaleToFit() : e.isScaledDown() ? e.scaleToActual(o, s) : e.group.length < 2 && e.close(t.startEvent)));
        if (t.tapped) {
            if (clearTimeout(t.tapped), t.tapped = null, Math.abs(o - t.x) > 50 || Math.abs(s - t.y) > 50 || !i.isMoved) return this;
            "image" == i.type && (i.isLoaded || i.$ghost) && (e.canPan() ? e.scaleToFit() : e.isScaledDown() && e.scaleToActual(o, s))
        } else t.x = o, t.y = s, t.tapped = setTimeout(function() {
            t.tapped = null, e.toggleControls(!0)
        }, 300);
        return this
    }, n(e).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new c(e))
    }), n(e).on("beforeClose.fb", function(t, e) {
        e && e.Guestures && e.Guestures.destroy()
    })
}(window, document, window.jQuery),
function(t, e) {
    "use strict";
    var n = function(t) {
        this.instance = t, this.init()
    };
    e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        speed: 3e3,
        init: function() {
            var t = this;
            t.$button = e('<button data-fancybox-play class="fancybox-button fancybox-button--play" title="Slideshow (P)"></button>').appendTo(t.instance.$refs.buttons), t.instance.$refs.container.on("click", "[data-fancybox-play]", function() {
                t.toggle()
            })
        },
        set: function() {
            var t = this;
            t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function() {
                t.instance.next()
            }, t.instance.current.opts.slideShow.speed || t.speed) : t.stop()
        },
        clear: function() {
            var t = this;
            clearTimeout(t.timer), t.timer = null
        },
        start: function() {
            var t = this;
            t.stop(), t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) && (t.instance.$refs.container.on({
                "beforeLoad.fb.player": e.proxy(t, "clear"),
                "onComplete.fb.player": e.proxy(t, "set")
            }), t.isActive = !0, t.instance.current.isComplete && t.set(), t.instance.$refs.container.trigger("onPlayStart"), t.$button.addClass("fancybox-button--pause"))
        },
        stop: function() {
            var t = this;
            t.clear(), t.instance.$refs.container.trigger("onPlayEnd").off(".player"), t.$button.removeClass("fancybox-button--pause"), t.isActive = !1
        },
        toggle: function() {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }), e(t).on("onInit.fb", function(t, e) {
        e && e.group.length > 1 && e.opts.slideShow && !e.SlideShow && (e.SlideShow = new n(e))
    }), e(t).on("beforeClose.fb onDeactivate.fb", function(t, e) {
        e && e.SlideShow && e.SlideShow.stop()
    })
}(document, window.jQuery),
function(t, e) {
    "use strict";
    var n = function() {
        var e, n, i, o = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ],
            s = {};
        for (n = 0; n < o.length; n++)
            if ((e = o[n]) && e[1] in t) {
                for (i = 0; i < e.length; i++) s[o[0][i]] = e[i];
                return s
            } return !1
    }();
    if (n) {
        var i = {
            request: function(e) {
                (e = e || t.documentElement)[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                t[n.exitFullscreen]()
            },
            toggle: function(t) {
                this.isFullscreen() ? this.exit() : this.request(t)
            },
            isFullscreen: function() {
                return Boolean(t[n.fullscreenElement])
            },
            enabled: function() {
                return Boolean(t[n.fullscreenEnabled])
            }
        };
        e(t).on({
            "onInit.fb": function(t, n) {
                var o;
                n && n.opts.fullScreen && !n.FullScreen && (o = n.$refs.container, n.$refs.button_fs = e('<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="Full screen (F)"></button>').appendTo(n.$refs.buttons), o.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                    t.stopPropagation(), t.preventDefault(), i.toggle(o[0])
                }), !0 === n.opts.fullScreen.requestOnStart && i.request(o[0]))
            },
            "beforeMove.fb": function(t, e) {
                e && e.$refs.button_fs && e.$refs.button_fs.toggle(!!e.current.opts.fullScreen)
            },
            "beforeClose.fb": function() {
                i.exit()
            }
        }), e(t).on(n.fullscreenchange, function() {
            var t = e.fancybox.getInstance(),
                n = t ? t.current.$placeholder : null;
            n && (n.css("transition", "none"), t.isAnimating = !1, t.update(!0, !0, 0))
        })
    }
}(document, window.jQuery),
function(t, e) {
    "use strict";
    var n = function(t) {
        this.instance = t, this.init()
    };
    e.extend(n.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        init: function() {
            var t = this;
            t.$button = e('<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="Thumbnails (G)"></button>').appendTo(this.instance.$refs.buttons).on("touchend click", function(e) {
                e.stopPropagation(), e.preventDefault(), t.toggle()
            })
        },
        create: function() {
            var t, n, i = this.instance;
            this.$grid = e('<div class="fancybox-thumbs"></div>').appendTo(i.$refs.container), t = "<ul>", e.each(i.group, function(e, i) {
                (n = i.opts.thumb || (i.opts.$thumb ? i.opts.$thumb.attr("src") : null)) || "image" !== i.type || (n = i.src), n && n.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>')
            }), t += "</ul>", this.$list = e(t).appendTo(this.$grid).on("click touchstart", "li", function() {
                i.jumpTo(e(this).data("index"))
            }), this.$list.find("img").hide().one("load", function() {
                var t, n, i, o, s = e(this).parent().removeClass("fancybox-thumbs-loading"),
                    r = s.outerWidth(),
                    a = s.outerHeight();
                t = this.naturalWidth || this.width, o = (n = this.naturalHeight || this.height) / a, (i = t / r) >= 1 && o >= 1 && (i > o ? (t /= o, n = a) : (t = r, n /= i)), e(this).css({
                    width: Math.floor(t),
                    height: Math.floor(n),
                    "margin-top": Math.min(0, Math.floor(.3 * a - .3 * n)),
                    "margin-left": Math.min(0, Math.floor(.5 * r - .5 * t))
                }).show()
            }).each(function() {
                this.src = e(this).data("src")
            })
        },
        focus: function() {
            this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus()
        },
        close: function() {
            this.$grid.hide()
        },
        update: function() {
            this.instance.$refs.container.toggleClass("fancybox-container--thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.$grid.show(), this.focus()) : this.$grid && this.$grid.hide(), this.instance.update()
        },
        hide: function() {
            this.isVisible = !1, this.update()
        },
        show: function() {
            this.isVisible = !0, this.update()
        },
        toggle: function() {
            this.isVisible ? this.hide() : this.show()
        }
    }), e(t).on("onInit.fb", function(t, e) {
        var i = e.group[0],
            o = e.group[1];
        e.opts.thumbs && !e.Thumbs && e.group.length > 1 && ("image" == i.type || i.opts.thumb || i.opts.$thumb) && ("image" == o.type || o.opts.thumb || o.opts.$thumb) && (e.Thumbs = new n(e))
    }), e(t).on("beforeMove.fb", function(t, e, n) {
        var i = e && e.Thumbs;
        i && (n.modal ? (i.$button.hide(), i.hide()) : (!0 === e.opts.thumbs.showOnStart && e.firstRun && i.show(), i.$button.show(), i.isVisible && i.focus()))
    }), e(t).on("beforeClose.fb", function(t, e) {
        e && e.Thumbs && (e.Thumbs.isVisible && !1 !== e.opts.thumbs.hideOnClosing && e.Thumbs.close(), e.Thumbs = null)
    })
}(document, window.jQuery),
function(t, e, n) {
    "use strict";

    function i() {
        var t = e.location.hash.substr(1),
            n = t.split("-"),
            i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
            o = n.join("-");
        return i < 1 && (i = 1), {
            hash: t,
            index: i,
            gallery: o
        }
    }

    function o(t) {
        var e;
        "" !== t.gallery && (e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1), e.length ? e.trigger("click") : n("#" + n.escapeSelector(t.gallery)).trigger("click"))
    }

    function s(t) {
        var e;
        return !!t && (e = t.current ? t.current.opts : t.opts, e.$orig ? e.$orig.data("fancybox") : e.hash || "")
    }
    n.escapeSelector || (n.escapeSelector = function(t) {
        var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        return (t + "").replace(e, function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        })
    });
    var r = null;
    n(function() {
        setTimeout(function() {
            !1 !== n.fancybox.defaults.hash && (n(e).on("hashchange.fb", function() {
                var t = i();
                n.fancybox.getInstance() ? r && r !== t.gallery + "-" + t.index && (r = null, n.fancybox.close()) : "" !== t.gallery && o(t)
            }), n(t).on({
                "onInit.fb": function(t, e) {
                    var n = i(),
                        o = s(e);
                    o && n.gallery && o == n.gallery && (e.currIndex = n.index - 1)
                },
                "beforeMove.fb": function(n, i, o) {
                    var a = s(i);
                    a && "" !== a && (e.location.hash.indexOf(a) < 0 && (i.opts.origHash = e.location.hash), r = a + (i.group.length > 1 ? "-" + (o.index + 1) : ""), "pushState" in history ? history.pushState("", t.title, e.location.pathname + e.location.search + "#" + r) : e.location.hash = r)
                },
                "beforeClose.fb": function(n, i, o) {
                    var a = s(i),
                        l = i && i.opts.origHash ? i.opts.origHash : "";
                    a && "" !== a && ("pushState" in history ? history.pushState("", t.title, e.location.pathname + e.location.search + l) : e.location.hash = l), r = null
                }
            }), o(i()))
        }, 50)
    })
}(document, window, window.jQuery),
function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.ouibounce = e()
}(this, function() {
    return function(t, e) {
        function n(t, e) {
            return void 0 === t ? e : t
        }

        function i(t) {
            var e = 24 * t * 60 * 60 * 1e3,
                n = new Date;
            return n.setTime(n.getTime() + e), "; expires=" + n.toUTCString()
        }

        function o(t) {
            t.clientY > p || a(b, "true") && !h || (w = setTimeout(c, g))
        }

        function s() {
            w && (clearTimeout(w), w = null)
        }

        function r(t) {
            T || a(b, "true") && !h || t.metaKey && 76 === t.keyCode && (T = !0, w = setTimeout(c, g))
        }

        function a(t, e) {
            return l()[t] === e
        }

        function l() {
            for (var t = document.cookie.split("; "), e = {}, n = t.length - 1; n >= 0; n--) {
                var i = t[n].split("=");
                e[i[0]] = i[1]
            }
            return e
        }

        function c() {
            u(), m()
        }

        function u() {
            t && (t.style.display = "block"), d()
        }

        function d(t) {
            void 0 !== (t = t || {}).cookieExpire && (v = i(t.cookieExpire)), !0 === t.sitewide && (x = ";path=/"), void 0 !== t.cookieDomain && (y = ";domain=" + t.cookieDomain), void 0 !== t.cookieName && (b = t.cookieName), document.cookie = b + "=true" + v + y + x, C.removeEventListener("mouseleave", o), C.removeEventListener("mouseenter", s), C.removeEventListener("keydown", r)
        }
        var h = (e = e || {}).aggressive || !1,
            p = n(e.sensitivity, 20),
            f = n(e.timer, 1e3),
            g = n(e.delay, 0),
            m = e.callback || function() {},
            v = i(e.cookieExpire) || "",
            y = e.cookieDomain ? ";domain=" + e.cookieDomain : "",
            b = e.cookieName ? e.cookieName : "viewedOuibounceModal",
            x = !0 === e.sitewide ? ";path=/" : "",
            w = null,
            C = document.documentElement;
        setTimeout(function() {
            C.addEventListener("mouseleave", o), C.addEventListener("mouseenter", s), C.addEventListener("keydown", r)
        }, f);
        var T = !1;
        return {
            fire: u,
            disable: d
        }
    }
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    t.extend(t.fn, {
        validate: function(e) {
            if (this.length) {
                var n = t.data(this[0], "validator");
                return n || (this.attr("novalidate", "novalidate"), n = new t.validator(e, this[0]), t.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function(e) {
                    n.settings.submitHandler && (n.submitButton = e.target), t(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== t(this).attr("formnovalidate") && (n.cancelSubmit = !0)
                }), this.on("submit.validate", function(e) {
                    function i() {
                        var i, o;
                        return !n.settings.submitHandler || (n.submitButton && (i = t("<input type='hidden'/>").attr("name", n.submitButton.name).val(t(n.submitButton).val()).appendTo(n.currentForm)), o = n.settings.submitHandler.call(n, n.currentForm, e), n.submitButton && i.remove(), void 0 !== o && o)
                    }
                    return n.settings.debug && e.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
                })), n)
            }
            e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var e, n, i;
            return t(this[0]).is("form") ? e = this.validate().form() : (i = [], e = !0, n = t(this[0].form).validate(), this.each(function() {
                (e = n.element(this) && e) || (i = i.concat(n.errorList))
            }), n.errorList = i), e
        },
        rules: function(e, n) {
            var i, o, s, r, a, l, c = this[0];
            if (null != c && null != c.form) {
                if (e) switch (i = t.data(c.form, "validator").settings, o = i.rules, s = t.validator.staticRules(c), e) {
                    case "add":
                        t.extend(s, t.validator.normalizeRule(n)), delete s.messages, o[c.name] = s, n.messages && (i.messages[c.name] = t.extend(i.messages[c.name], n.messages));
                        break;
                    case "remove":
                        return n ? (l = {}, t.each(n.split(/\s/), function(e, n) {
                            l[n] = s[n], delete s[n], "required" === n && t(c).removeAttr("aria-required")
                        }), l) : (delete o[c.name], s)
                }
                return (r = t.validator.normalizeRules(t.extend({}, t.validator.classRules(c), t.validator.attributeRules(c), t.validator.dataRules(c), t.validator.staticRules(c)), c)).required && (a = r.required, delete r.required, r = t.extend({
                    required: a
                }, r), t(c).attr("aria-required", "true")), r.remote && (a = r.remote, delete r.remote, r = t.extend(r, {
                    remote: a
                })), r
            }
        }
    }), t.extend(t.expr.pseudos || t.expr[":"], {
        blank: function(e) {
            return !t.trim("" + t(e).val())
        },
        filled: function(e) {
            var n = t(e).val();
            return null !== n && !!t.trim("" + n)
        },
        unchecked: function(e) {
            return !t(e).prop("checked")
        }
    }), t.validator = function(e, n) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = n, this.init()
    }, t.validator.format = function(e, n) {
        return 1 === arguments.length ? function() {
            var n = t.makeArray(arguments);
            return n.unshift(e), t.validator.format.apply(this, n)
        } : void 0 === n ? e : (arguments.length > 2 && n.constructor !== Array && (n = t.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), t.each(n, function(t, n) {
            e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                return n
            })
        }), e)
    }, t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(e, n) {
                var i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === n.which && "" === this.elementValue(e) || -1 !== t.inArray(n.keyCode, i) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(e, n, i) {
                "radio" === e.type ? this.findByName(e.name).addClass(n).removeClass(i) : t(e).addClass(n).removeClass(i)
            },
            unhighlight: function(e, n, i) {
                "radio" === e.type ? this.findByName(e.name).removeClass(n).addClass(i) : t(e).removeClass(n).addClass(i)
            }
        },
        setDefaults: function(e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}."),
            step: t.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(e) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = t(this).closest("form")[0]);
                    var n = t.data(this.form, "validator"),
                        i = "on" + e.type.replace(/^validate/, ""),
                        o = n.settings;
                    o[i] && !t(this).is(o.ignore) && o[i].call(n, this, e)
                }
                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var n, i = this.groups = {};
                t.each(this.settings.groups, function(e, n) {
                    "string" == typeof n && (n = n.split(/\s/)), t.each(n, function(t, n) {
                        i[n] = e
                    })
                }), n = this.settings.rules, t.each(n, function(e, i) {
                    n[e] = t.validator.normalizeRule(i)
                }), t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                return this.valid()
            },
            element: function(e) {
                var n, i, o = this.clean(e),
                    s = this.validationTargetFor(o),
                    r = this,
                    a = !0;
                return void 0 === s ? delete this.invalid[o.name] : (this.prepareElement(s), this.currentElements = t(s), (i = this.groups[s.name]) && t.each(this.groups, function(t, e) {
                    e === i && t !== s.name && (o = r.validationTargetFor(r.clean(r.findByName(t)))) && o.name in r.invalid && (r.currentElements.push(o), a = r.check(o) && a)
                }), n = !1 !== this.check(s), a = a && n, this.invalid[s.name] = !n, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), t(e).attr("aria-invalid", !n)), a
            },
            showErrors: function(e) {
                if (e) {
                    var n = this;
                    t.extend(this.errorMap, e), this.errorList = t.map(this.errorMap, function(t, e) {
                        return {
                            message: t,
                            element: n.findByName(e)[0]
                        }
                    }), this.successList = t.grep(this.successList, function(t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(e)
            },
            resetElements: function(t) {
                var e;
                if (this.settings.unhighlight)
                    for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
                else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e, n = 0;
                for (e in t) t[e] && n++;
                return n
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(t) {
                t.not(this.containers).text(""), this.addWrapper(t).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function(t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function() {
                var e = this,
                    n = {};
                return t(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var i = this.name || t(this).attr("name");
                    return !i && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = t(this).closest("form")[0]), !(i in n || !e.objectLength(t(this).rules()) || (n[i] = !0, 0))
                })
            },
            clean: function(e) {
                return t(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.split(" ").join(".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([])
            },
            reset: function() {
                this.resetInternals(), this.currentElements = t([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(), this.toHide = this.errorsFor(t)
            },
            elementValue: function(e) {
                var n, i, o = t(e),
                    s = e.type;
                return "radio" === s || "checkbox" === s ? this.findByName(e.name).filter(":checked").val() : "number" === s && void 0 !== e.validity ? e.validity.badInput ? "NaN" : o.val() : (n = e.hasAttribute("contenteditable") ? o.text() : o.val(), "file" === s ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/"), i >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\"), i >= 0 ? n.substr(i + 1) : n)) : "string" == typeof n ? n.replace(/\r/g, "") : n)
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var n, i, o, s = t(e).rules(),
                    r = t.map(s, function(t, e) {
                        return e
                    }).length,
                    a = !1,
                    l = this.elementValue(e);
                if ("function" == typeof s.normalizer) {
                    if ("string" != typeof(l = s.normalizer.call(e, l))) throw new TypeError("The normalizer should return a string value.");
                    delete s.normalizer
                }
                for (i in s) {
                    o = {
                        method: i,
                        parameters: s[i]
                    };
                    try {
                        if ("dependency-mismatch" === (n = t.validator.methods[i].call(this, l, e, o.parameters)) && 1 === r) {
                            a = !0;
                            continue
                        }
                        if (a = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!n) return this.formatAndAdd(e, o), !1
                    } catch (t) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + o.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + o.method + "' method."), t
                    }
                }
                if (!a) return this.objectLength(s) && this.successList.push(e), !0
            },
            customDataMessage: function(e, n) {
                return t(e).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || t(e).data("msg")
            },
            customMessage: function(t, e) {
                var n = this.settings.messages[t];
                return n && (n.constructor === String ? n : n[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t]) return arguments[t]
            },
            defaultMessage: function(e, n) {
                "string" == typeof n && (n = {
                    method: n
                });
                var i = this.findDefined(this.customMessage(e.name, n.method), this.customDataMessage(e, n.method), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[n.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
                    o = /\$?\{(\d+)\}/g;
                return "function" == typeof i ? i = i.call(this, n.parameters, e) : o.test(i) && (i = t.validator.format(i.replace(o, "{$1}"), n.parameters)), i
            },
            formatAndAdd: function(t, e) {
                var n = this.defaultMessage(t, e);
                this.errorList.push({
                    message: n,
                    element: t,
                    method: e.method
                }), this.errorMap[t.name] = n, this.submitted[t.name] = n
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            },
            defaultShowErrors: function() {
                var t, e, n;
                for (t = 0; this.errorList[t]; t++) n = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return t(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, n) {
                var i, o, s, r, a = this.errorsFor(e),
                    l = this.idOrName(e),
                    c = t(e).attr("aria-describedby");
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (a = t("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(n || ""), i = a, this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, t(e)) : i.insertAfter(e), a.is("label") ? a.attr("for", l) : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (s = a.attr("id"), c ? c.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (c += " " + s) : c = s, t(e).attr("aria-describedby", c), (o = this.groups[e.name]) && (r = this, t.each(r.groups, function(e, n) {
                    n === o && t("[name='" + r.escapeCssMeta(e) + "']", r.currentForm).attr("aria-describedby", a.attr("id"))
                })))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, e)), this.toShow = this.toShow.add(a)
            },
            errorsFor: function(e) {
                var n = this.escapeCssMeta(this.idOrName(e)),
                    i = t(e).attr("aria-describedby"),
                    o = "label[for='" + n + "'], label[for='" + n + "'] *";
                return i && (o = o + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(o)
            },
            escapeCssMeta: function(t) {
                return t.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            validationTargetFor: function(e) {
                return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0]
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(e) {
                return t(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
            },
            getLength: function(e, n) {
                switch (n.nodeName.toLowerCase()) {
                    case "select":
                        return t("option:selected", n).length;
                    case "input":
                        if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            },
            dependTypes: {
                boolean: function(t) {
                    return t
                },
                string: function(e, n) {
                    return !!t(e, n.form).length
                },
                function: function(t, e) {
                    return t(e)
                }
            },
            optional: function(e) {
                var n = this.elementValue(e);
                return !t.validator.methods.required.call(this, n, e) && "dependency-mismatch"
            },
            startRequest: function(e) {
                this.pending[e.name] || (this.pendingRequest++, t(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0)
            },
            stopRequest: function(e, n) {
                --this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t(e).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(e, n) {
                return n = "string" == typeof n && n || "remote", t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, {
                        method: n
                    })
                })
            },
            destroy: function() {
                this.resetForm(), t(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, n) {
            e.constructor === String ? this.classRuleSettings[e] = n : t.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var n = {},
                i = t(e).attr("class");
            return i && t.each(i.split(" "), function() {
                this in t.validator.classRuleSettings && t.extend(n, t.validator.classRuleSettings[this])
            }), n
        },
        normalizeAttributeRule: function(t, e, n, i) {
            /min|max|step/.test(n) && (null === e || /number|range|text/.test(e)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? t[n] = i : e === n && "range" !== e && (t[n] = !0)
        },
        attributeRules: function(e) {
            var n, i, o = {},
                s = t(e),
                r = e.getAttribute("type");
            for (n in t.validator.methods) "required" === n ? ("" === (i = e.getAttribute(n)) && (i = !0), i = !!i) : i = s.attr(n), this.normalizeAttributeRule(o, r, n, i);
            return o.maxlength && /-1|2147483647|524288/.test(o.maxlength) && delete o.maxlength, o
        },
        dataRules: function(e) {
            var n, i, o = {},
                s = t(e),
                r = e.getAttribute("type");
            for (n in t.validator.methods) i = s.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), this.normalizeAttributeRule(o, r, n, i);
            return o
        },
        staticRules: function(e) {
            var n = {},
                i = t.data(e.form, "validator");
            return i.settings.rules && (n = t.validator.normalizeRule(i.settings.rules[e.name]) || {}), n
        },
        normalizeRules: function(e, n) {
            return t.each(e, function(i, o) {
                if (!1 !== o) {
                    if (o.param || o.depends) {
                        var s = !0;
                        switch (typeof o.depends) {
                            case "string":
                                s = !!t(o.depends, n.form).length;
                                break;
                            case "function":
                                s = o.depends.call(n, n)
                        }
                        s ? e[i] = void 0 === o.param || o.param : (t.data(n.form, "validator").resetElements(t(n)), delete e[i])
                    }
                } else delete e[i]
            }), t.each(e, function(i, o) {
                e[i] = t.isFunction(o) && "normalizer" !== i ? o(n) : o
            }), t.each(["minlength", "maxlength"], function() {
                e[this] && (e[this] = Number(e[this]))
            }), t.each(["rangelength", "range"], function() {
                var n;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (n = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(n[0]), Number(n[1])]))
            }), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var n = {};
                t.each(e.split(/\s/), function() {
                    n[this] = !0
                }), e = n
            }
            return e
        },
        addMethod: function(e, n, i) {
            t.validator.methods[e] = n, t.validator.messages[e] = void 0 !== i ? i : t.validator.messages[e], n.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, n, i) {
                if (!this.depend(i, n)) return "dependency-mismatch";
                if ("select" === n.nodeName.toLowerCase()) {
                    var o = t(n).val();
                    return o && o.length > 0
                }
                return this.checkable(n) ? this.getLength(e, n) > 0 : e.length > 0
            },
            email: function(t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)
            },
            date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            minlength: function(e, n, i) {
                var o = t.isArray(e) ? e.length : this.getLength(e, n);
                return this.optional(n) || o >= i
            },
            maxlength: function(e, n, i) {
                var o = t.isArray(e) ? e.length : this.getLength(e, n);
                return this.optional(n) || o <= i
            },
            rangelength: function(e, n, i) {
                var o = t.isArray(e) ? e.length : this.getLength(e, n);
                return this.optional(n) || o >= i[0] && o <= i[1]
            },
            min: function(t, e, n) {
                return this.optional(e) || t >= n
            },
            max: function(t, e, n) {
                return this.optional(e) || t <= n
            },
            range: function(t, e, n) {
                return this.optional(e) || t >= n[0] && t <= n[1]
            },
            step: function(e, n, i) {
                var o, s = t(n).attr("type"),
                    r = "Step attribute on input type " + s + " is not supported.",
                    a = ["text", "number", "range"],
                    l = new RegExp("\\b" + s + "\\b"),
                    c = function(t) {
                        var e = ("" + t).match(/(?:\.(\d+))?$/);
                        return e && e[1] ? e[1].length : 0
                    },
                    u = function(t) {
                        return Math.round(t * Math.pow(10, o))
                    },
                    d = !0;
                if (s && !l.test(a.join())) throw new Error(r);
                return o = c(i), (c(e) > o || u(e) % u(i) != 0) && (d = !1), this.optional(n) || d
            },
            equalTo: function(e, n, i) {
                var o = t(i);
                return this.settings.onfocusout && o.not(".validate-equalTo-blur").length && o.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    t(n).valid()
                }), e === o.val()
            },
            remote: function(e, n, i, o) {
                if (this.optional(n)) return "dependency-mismatch";
                o = "string" == typeof o && o || "remote";
                var s, r, a, l = this.previousValue(n, o);
                return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[n.name][o], this.settings.messages[n.name][o] = l.message, i = "string" == typeof i && {
                    url: i
                } || i, a = t.param(t.extend({
                    data: e
                }, i.data)), l.old === a ? l.valid : (l.old = a, s = this, this.startRequest(n), r = {}, r[n.name] = e, t.ajax(t.extend(!0, {
                    mode: "abort",
                    port: "validate" + n.name,
                    dataType: "json",
                    data: r,
                    context: s.currentForm,
                    success: function(t) {
                        var i, r, a, c = !0 === t || "true" === t;
                        s.settings.messages[n.name][o] = l.originalMessage, c ? (a = s.formSubmitted, s.resetInternals(), s.toHide = s.errorsFor(n), s.formSubmitted = a, s.successList.push(n), s.invalid[n.name] = !1, s.showErrors()) : (i = {}, r = t || s.defaultMessage(n, {
                            method: o,
                            parameters: e
                        }), i[n.name] = l.message = r, s.invalid[n.name] = !0, s.showErrors(i)), l.valid = c, s.stopRequest(n, c)
                    }
                }, i)), "pending")
            }
        }
    });
    var e, n = {};
    return t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, i) {
        var o = t.port;
        "abort" === t.mode && (n[o] && n[o].abort(), n[o] = i)
    }) : (e = t.ajax, t.ajax = function(i) {
        var o = ("mode" in i ? i : t.ajaxSettings).mode,
            s = ("port" in i ? i : t.ajaxSettings).port;
        return "abort" === o ? (n[s] && n[s].abort(), n[s] = e.apply(this, arguments), n[s]) : e.apply(this, arguments)
    }), t
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    var e = 0,
        n = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(n) {
            var i, o, s;
            for (s = 0; null != (o = n[s]); s++) try {
                (i = t._data(o, "events")) && i.remove && t(o).triggerHandler("remove")
            } catch (t) {}
            e(n)
        }
    }(t.cleanData), t.widget = function(e, n, i) {
        var o, s, r, a, l = {},
            c = e.split(".")[0];
        return e = e.split(".")[1], o = c + "-" + e, i || (i = n, n = t.Widget), t.expr[":"][o.toLowerCase()] = function(e) {
            return !!t.data(e, o)
        }, t[c] = t[c] || {}, s = t[c][e], r = t[c][e] = function(t, e) {
            return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new r(t, e)
        }, t.extend(r, s, {
            version: i.version,
            _proto: t.extend({}, i),
            _childConstructors: []
        }), a = new n, a.options = t.widget.extend({}, a.options), t.each(i, function(e, i) {
            return t.isFunction(i) ? void(l[e] = function() {
                var t = function() {
                        return n.prototype[e].apply(this, arguments)
                    },
                    o = function(t) {
                        return n.prototype[e].apply(this, t)
                    };
                return function() {
                    var e, n = this._super,
                        s = this._superApply;
                    return this._super = t, this._superApply = o, e = i.apply(this, arguments), this._super = n, this._superApply = s, e
                }
            }()) : void(l[e] = i)
        }), r.prototype = t.widget.extend(a, {
            widgetEventPrefix: s ? a.widgetEventPrefix || e : e
        }, l, {
            constructor: r,
            namespace: c,
            widgetName: e,
            widgetFullName: o
        }), s ? (t.each(s._childConstructors, function(e, n) {
            var i = n.prototype;
            t.widget(i.namespace + "." + i.widgetName, r, n._proto)
        }), delete s._childConstructors) : n._childConstructors.push(r), t.widget.bridge(e, r), r
    }, t.widget.extend = function(e) {
        for (var i, o, s = n.call(arguments, 1), r = 0, a = s.length; a > r; r++)
            for (i in s[r]) o = s[r][i], s[r].hasOwnProperty(i) && void 0 !== o && (e[i] = t.isPlainObject(o) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], o) : t.widget.extend({}, o) : o);
        return e
    }, t.widget.bridge = function(e, i) {
        var o = i.prototype.widgetFullName || e;
        t.fn[e] = function(s) {
            var r = "string" == typeof s,
                a = n.call(arguments, 1),
                l = this;
            return s = !r && a.length ? t.widget.extend.apply(null, [s].concat(a)) : s, r ? this.each(function() {
                var n, i = t.data(this, o);
                return "instance" === s ? (l = i, !1) : i ? t.isFunction(i[s]) && "_" !== s.charAt(0) ? (n = i[s].apply(i, a), n !== i && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, !1) : void 0) : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
            }) : this.each(function() {
                var e = t.data(this, o);
                e ? (e.option(s || {}), e._init && e._init()) : t.data(this, o, new i(s, this))
            }), l
        }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(n, i) {
            i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === i && this.destroy()
                }
            }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), n), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(e, n) {
            var i, o, s, r = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (r = {}, i = e.split("."), e = i.shift(), i.length) {
                    for (o = r[e] = t.widget.extend({}, this.options[e]), s = 0; i.length - 1 > s; s++) o[i[s]] = o[i[s]] || {}, o = o[i[s]];
                    if (e = i.pop(), 1 === arguments.length) return void 0 === o[e] ? null : o[e];
                    o[e] = n
                } else {
                    if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                    r[e] = n
                } return this._setOptions(r), this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(e, n, i) {
            var o, s = this;
            "boolean" != typeof e && (i = n, n = e, e = !1), i ? (n = o = t(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, o = this.widget()), t.each(i, function(i, r) {
                function a() {
                    return e || !0 !== s.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? s[r] : r).apply(s, arguments) : void 0
                }
                "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                var l = i.match(/^([\w:-]*)\s*(.*)$/),
                    c = l[1] + s.eventNamespace,
                    u = l[2];
                u ? o.delegate(u, c, a) : n.bind(c, a)
            })
        },
        _off: function(e, n) {
            n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(n).undelegate(n), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function(t, e) {
            var n = this;
            return setTimeout(function() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments)
            }, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, n, i) {
            var o, s, r = this.options[e];
            if (i = i || {}, n = t.Event(n), n.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), n.target = this.element[0], s = n.originalEvent)
                for (o in s) o in n || (n[o] = s[o]);
            return this.element.trigger(n, i), !(t.isFunction(r) && !1 === r.apply(this.element[0], [n].concat(i)) || n.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, n) {
        t.Widget.prototype["_" + e] = function(i, o, s) {
            "string" == typeof o && (o = {
                effect: o
            });
            var r, a = o ? !0 === o || "number" == typeof o ? n : o.effect || n : e;
            "number" == typeof(o = o || {}) && (o = {
                duration: o
            }), r = !t.isEmptyObject(o), o.complete = s, o.delay && i.delay(o.delay), r && t.effects && t.effects.effect[a] ? i[e](o) : a !== e && i[a] ? i[a](o.duration, o.easing, s) : i.queue(function(n) {
                t(this)[e](), s && s.call(i[0]), n()
            })
        }
    }), t.widget
}),
function(t) {
    "use strict";
    t.widget("aerolab.midnight", {
        options: {
            headerClass: "midnightHeader",
            innerClass: "midnightInner",
            defaultClass: "default",
            classPrefix: "",
            sectionSelector: "midnight"
        },
        _headers: {},
        _headerInfo: {
            top: 0,
            height: 0
        },
        _$sections: [],
        _sections: [],
        _scrollTop: 0,
        _documentHeight: 0,
        _transformMode: !1,
        refresh: function() {
            this._headerInfo = {
                top: 0,
                height: this.element.outerHeight()
            }, this._$sections = t("[data-" + this.options.sectionSelector + "]:not(:hidden)"), this._sections = [], this._setupHeaders(), this.recalculate()
        },
        _create: function() {
            var e = this;
            this._scrollTop = window.pageYOffset || document.documentElement.scrollTop, this._documentHeight = t(document).height(), this._headers = {}, this._transformMode = this._getSupportedTransform(), this.refresh(), setInterval(function() {
                e._recalculateSections()
            }, 1e3), e.recalculate(), t(window).resize(function() {
                e.recalculate()
            }), this._updateHeadersLoop()
        },
        recalculate: function() {
            this._recalculateSections(), this._updateHeaderHeight(), this._recalculateHeaders(), this._updateHeaders()
        },
        _getSupportedTransform: function() {
            for (var t = ["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"], e = 0; e < t.length; e++)
                if (void 0 !== document.createElement("div").style[t[e]]) return t[e];
            return !1
        },
        _getContainerHeight: function() {
            var e = this.element.find("> ." + this.options.headerClass),
                n = 0,
                i = 0,
                o = this;
            return e.length ? e.each(function() {
                var e = t(this),
                    s = e.find("> ." + o.options.innerClass);
                s.length ? (s.css("bottom", "auto").css("overflow", "auto"), i = s.outerHeight(), s.css("bottom", "0")) : (e.css("bottom", "auto"), i = e.outerHeight(), e.css("bottom", "0")), n = i > n ? i : n
            }) : n = i = this.element.outerHeight(), n
        },
        _setupHeaders: function() {
            var e = this;
            this._headers[this.options.defaultClass] = {};
            for (var n = 0; n < this._$sections.length; n++) "string" == typeof(s = t(this._$sections[n]).data(this.options.sectionSelector)) && "" !== (s = s.trim()) && (e._headers[s] = {});
            this.element.css("padding-top"), this.element.css("padding-right"), this.element.css("padding-bottom"), this.element.css("padding-left"), this.element.css({
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                overflow: "hidden"
            }), this._updateHeaderHeight();
            var i = this.element.find("> ." + this.options.headerClass);
            i.length ? i.filter("." + this.options.defaultClass).length || i.filter("." + this.options.headerClass + ":first").clone(!0, !0).attr("class", this.options.headerClass + " " + this.options.defaultClass) : this.element.wrapInner('<div class="' + this.options.headerClass + " " + this.options.defaultClass + '"></div>');
            var o = (i = this.element.find("> ." + this.options.headerClass)).filter("." + this.options.defaultClass).clone(!0, !0);
            for (var s in this._headers)
                if (this._headers.hasOwnProperty(s) && void 0 === this._headers[s].element) {
                    var r = i.filter("." + s);
                    r.length ? this._headers[s].element = r : this._headers[s].element = o.clone(!0, !0).removeClass(this.options.defaultClass).addClass(s).appendTo(this.element);
                    var a = {
                        position: "absolute",
                        overflow: "hidden",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    };
                    this._headers[s].element.css(a), !1 !== this._transformMode && this._headers[s].element.css(this._transformMode, "translateZ(0)"), this._headers[s].element.find("> ." + this.options.innerClass).length || this._headers[s].element.wrapInner('<div class="' + this.options.innerClass + '"></div>'), this._headers[s].inner = this._headers[s].element.find("> ." + this.options.innerClass), this._headers[s].inner.css(a), !1 !== this._transformMode && this._headers[s].inner.css(this._transformMode, "translateZ(0)"), this._headers[s].from = "", this._headers[s].progress = 0
                } i.each(function() {
                var n = t(this),
                    i = !1;
                for (var o in e._headers) e._headers.hasOwnProperty(o) && n.hasClass(o) && (i = !0);
                n.find("> ." + e.options.innerClass).length || n.wrapInner('<div class="' + e.options.innerClass + '"></div>'), i ? n.show() : n.hide()
            })
        },
        _recalculateHeaders: function() {
            this._scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop, this._scrollTop = Math.max(this._scrollTop, 0), this._scrollTop = Math.min(this._scrollTop, this._documentHeight);
            var t = this._headerInfo.height,
                e = this._scrollTop + this._headerInfo.top,
                n = e + t;
            if ("function" == typeof window.getComputedStyle) {
                var i = window.getComputedStyle(this.element[0], null),
                    o = 0,
                    s = 0;
                if (!1 !== this._transformMode && "string" == typeof i.transform) {
                    var r = i.transform.match(/(-?[0-9\.]+)/g);
                    null !== r && r.length >= 6 && !isNaN(parseFloat(r[5])) && (s = parseFloat(r[5]))
                }
                i.top.indexOf("px") >= 0 && !isNaN(parseFloat(i.top)) && (o = parseFloat(i.top)), e += o + s, n += o + s
            }
            for (var a in this._headers) this._headers.hasOwnProperty(a) && (this._headers[a].from = "", this._headers[a].progress = 0);
            for (var l = 0; l < this._sections.length; l++) n >= this._sections[l].start && e <= this._sections[l].end && (this._headers[this._sections[l].className].visible = !0, e >= this._sections[l].start && n <= this._sections[l].end ? (this._headers[this._sections[l].className].from = "top", this._headers[this._sections[l].className].progress += 1) : n > this._sections[l].end && e < this._sections[l].end ? (this._headers[this._sections[l].className].from = "top", this._headers[this._sections[l].className].progress = 1 - (n - this._sections[l].end) / t) : n > this._sections[l].start && e < this._sections[l].start && ("top" === this._headers[this._sections[l].className].from ? this._headers[this._sections[l].className].progress += (n - this._sections[l].start) / t : (this._headers[this._sections[l].className].from = "bottom", this._headers[this._sections[l].className].progress = (n - this._sections[l].start) / t)))
        },
        _updateHeaders: function() {
            if (void 0 !== this._headers[this.options.defaultClass]) {
                var t = 0,
                    e = "";
                for (var n in this._headers) this._headers.hasOwnProperty(n) && "" !== !this._headers[n].from && (t += this._headers[n].progress, e = n);
                t < 1 && ("" === this._headers[this.options.defaultClass].from ? (this._headers[this.options.defaultClass].from = "top" === this._headers[e].from ? "bottom" : "top", this._headers[this.options.defaultClass].progress = 1 - t) : this._headers[this.options.defaultClass].progress += 1 - t);
                for (var i in this._headers)
                    if (this._headers.hasOwnProperty(i) && "" !== !this._headers[i].from) {
                        var o = 100 * (1 - this._headers[i].progress);
                        o >= 100 && (o = 110), o <= -100 && (o = -110), "top" === this._headers[i].from ? !1 !== this._transformMode ? (this._headers[i].element[0].style[this._transformMode] = "translateY(-" + o + "%) translateZ(0)", this._headers[i].inner[0].style[this._transformMode] = "translateY(+" + o + "%) translateZ(0)") : (this._headers[i].element[0].style.top = "-" + o + "%", this._headers[i].inner[0].style.top = "+" + o + "%") : !1 !== this._transformMode ? (this._headers[i].element[0].style[this._transformMode] = "translateY(+" + o + "%) translateZ(0)", this._headers[i].inner[0].style[this._transformMode] = "translateY(-" + o + "%) translateZ(0)") : (this._headers[i].element[0].style.top = "+" + o + "%", this._headers[i].inner[0].style.top = "-" + o + "%")
                    }
            }
        },
        _recalculateSections: function() {
            this._documentHeight = t(document).height(), this._sections = [];
            for (var e = 0; e < this._$sections.length; e++) {
                var n = t(this._$sections[e]);
                this._sections.push({
                    element: n,
                    className: n.data(this.options.sectionSelector),
                    start: n.offset().top,
                    end: n.offset().top + n.outerHeight()
                })
            }
        },
        _updateHeaderHeight: function() {
            this._headerInfo.height = this._getContainerHeight(), this.element.css("height", this._headerInfo.height + "px")
        },
        _updateHeadersLoop: function() {
            var t = this;
            this._requestAnimationFrame(function() {
                t._updateHeadersLoop()
            }), this._recalculateHeaders(), this._updateHeaders()
        },
        _requestAnimationFrame: function(t) {
            var e = e || window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                window.setTimeout(t, 1e3 / 60)
            };
            e(t)
        }
    })
}(jQuery),
function(t) {
    function e(e, i, o, s, r) {
        function a() {
            p.unbind(), i && n(i, o, s, r), r.startOrder = [], r.newOrder = [], r.origSort = [], r.checkSort = [], h.removeStyle(r.prefix + "filter, filter, " + r.prefix + "transform, transform, opacity, display").css(r.clean).removeAttr("data-checksum"), window.atob || h.css({
                display: "none",
                opacity: "0"
            }), p.removeStyle(r.prefix + "transition, transition, " + r.prefix + "perspective, perspective, " + r.prefix + "perspective-origin, perspective-origin, " + (r.resizeContainer ? "height" : "")), "list" == r.layoutMode ? (f.css({
                display: r.targetDisplayList,
                opacity: "1"
            }), r.origDisplay = r.targetDisplayList) : (f.css({
                display: r.targetDisplayGrid,
                opacity: "1"
            }), r.origDisplay = r.targetDisplayGrid), r.origLayout = r.layoutMode, setTimeout(function() {
                if (h.removeStyle(r.prefix + "transition, transition"), r.mixing = !1, "function" == typeof r.onMixEnd) {
                    var t = r.onMixEnd.call(this, r);
                    r = t || r
                }
            })
        }
        if (clearInterval(r.failsafe), r.mixing = !0, "function" == typeof r.onMixStart) {
            c = r.onMixStart.call(this, r);
            r = c || r
        }
        for (var l = r.transitionSpeed, c = 0; 2 > c; c++) {
            var u = 0 == c ? u = r.prefix : "";
            r.transition[u + "transition"] = "all " + l + "ms linear", r.transition[u + "transform"] = u + "translate3d(0,0,0)", r.perspective[u + "perspective"] = r.perspectiveDistance + "px", r.perspective[u + "perspective-origin"] = r.perspectiveOrigin
        }
        var d = r.targetSelector,
            h = s.find(d);
        h.each(function() {
            this.data = {}
        });
        var p = h.parent();
        p.css(r.perspective), r.easingFallback = "ease-in-out", "smooth" == r.easing && (r.easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)"), "snap" == r.easing && (r.easing = "cubic-bezier(0.77, 0, 0.175, 1)"), "windback" == r.easing && (r.easing = "cubic-bezier(0.175, 0.885, 0.320, 1.275)", r.easingFallback = "cubic-bezier(0.175, 0.885, 0.320, 1)"), "windup" == r.easing && (r.easing = "cubic-bezier(0.6, -0.28, 0.735, 0.045)", r.easingFallback = "cubic-bezier(0.6, 0.28, 0.735, 0.045)"), c = "list" == r.layoutMode && null != r.listEffects ? r.listEffects : r.effects, Array.prototype.indexOf && (r.fade = -1 < c.indexOf("fade") ? "0" : "", r.scale = -1 < c.indexOf("scale") ? "scale(.01)" : "", r.rotateZ = -1 < c.indexOf("rotateZ") ? "rotate(180deg)" : "", r.rotateY = -1 < c.indexOf("rotateY") ? "rotateY(90deg)" : "", r.rotateX = -1 < c.indexOf("rotateX") ? "rotateX(90deg)" : "", r.blur = -1 < c.indexOf("blur") ? "blur(8px)" : "", r.grayscale = -1 < c.indexOf("grayscale") ? "grayscale(100%)" : ""), e = e.replace(/\s|\//g, ".");
        var f = t(),
            g = t();
        if ("or" == r.filterLogic) {
            var m = e.split(".");
            1 == r.multiFilter && "" == m[0] && m.shift(), 1 > m.length ? g = g.add(s.find(d + ":visible")) : h.each(function() {
                for (var e = 0, n = t(this), i = 0; i < m.length; i++) n.hasClass(m[i]) && (f = f.add(n), e++);
                0 == e && (g = g.add(n))
            })
        } else f = f.add(p.find(d + "." + e)), g = g.add(p.find(d + ":not(." + e + "):visible"));
        e = f.length;
        var v = t(),
            y = t(),
            b = t();
        if (g.each(function() {
                var e = t(this);
                "none" != e.css("display") && (v = v.add(e), b = b.add(e))
            }), f.filter(":visible").length == e && !v.length && !i) {
            if (r.origLayout == r.layoutMode) return a(), !1;
            if (1 == f.length) return "list" == r.layoutMode ? (s.addClass(r.listClass), s.removeClass(r.gridClass), b.css("display", r.targetDisplayList)) : (s.addClass(r.gridClass), s.removeClass(r.listClass), b.css("display", r.targetDisplayGrid)), a(), !1
        }
        if (r.origHeight = p.height(), f.length) {
            if (s.removeClass(r.failClass), f.each(function() {
                    var e = t(this);
                    "none" == e.css("display") ? y = y.add(e) : b = b.add(e)
                }), r.origLayout != r.layoutMode && 0 == r.animateGridList) return "list" == r.layoutMode ? (s.addClass(r.listClass), s.removeClass(r.gridClass), b.css("display", r.targetDisplayList)) : (s.addClass(r.gridClass), s.removeClass(r.listClass), b.css("display", r.targetDisplayGrid)), a(), !1;
            if (!window.atob) return a(), !1;
            if (h.css(r.clean), b.each(function() {
                    this.data.origPos = t(this).offset()
                }), "list" == r.layoutMode ? (s.addClass(r.listClass), s.removeClass(r.gridClass), y.css("display", r.targetDisplayList)) : (s.addClass(r.gridClass), s.removeClass(r.listClass), y.css("display", r.targetDisplayGrid)), y.each(function() {
                    this.data.showInterPos = t(this).offset()
                }), v.each(function() {
                    this.data.hideInterPos = t(this).offset()
                }), b.each(function() {
                    this.data.preInterPos = t(this).offset()
                }), "list" == r.layoutMode ? b.css("display", r.targetDisplayList) : b.css("display", r.targetDisplayGrid), i && n(i, o, s, r), i && r.origSort.compare(r.checkSort)) return a(), !1;
            for (v.hide(), y.each(function() {
                    this.data.finalPos = t(this).offset()
                }), b.each(function() {
                    this.data.finalPrePos = t(this).offset()
                }), r.newHeight = p.height(), i && n("reset", null, s, r), y.hide(), b.css("display", r.origDisplay), "block" == r.origDisplay ? (s.addClass(r.listClass), y.css("display", r.targetDisplayList)) : (s.removeClass(r.listClass), y.css("display", r.targetDisplayGrid)), r.resizeContainer && p.css("height", r.origHeight + "px"), e = {}, c = 0; 2 > c; c++) u = 0 == c ? u = r.prefix : "", e[u + "transform"] = r.scale + " " + r.rotateX + " " + r.rotateY + " " + r.rotateZ, e[u + "filter"] = r.blur + " " + r.grayscale;
            y.css(e), b.each(function() {
                var e = this.data,
                    n = t(this);
                n.hasClass("mix_tohide") ? (e.preTX = e.origPos.left - e.hideInterPos.left, e.preTY = e.origPos.top - e.hideInterPos.top) : (e.preTX = e.origPos.left - e.preInterPos.left, e.preTY = e.origPos.top - e.preInterPos.top);
                for (var i = {}, o = 0; 2 > o; o++) {
                    var s = 0 == o ? s = r.prefix : "";
                    i[s + "transform"] = "translate(" + e.preTX + "px," + e.preTY + "px)"
                }
                n.css(i)
            }), "list" == r.layoutMode ? (s.addClass(r.listClass), s.removeClass(r.gridClass)) : (s.addClass(r.gridClass), s.removeClass(r.listClass)), setTimeout(function() {
                if (r.resizeContainer) {
                    for (var e = {}, n = 0; 2 > n; n++) {
                        var i = 0 == n ? i = r.prefix : "";
                        e[i + "transition"] = "all " + l + "ms ease-in-out", e.height = r.newHeight + "px"
                    }
                    p.css(e)
                }
                for (v.css("opacity", r.fade), y.css("opacity", 1), y.each(function() {
                        var e = this.data;
                        e.tX = e.finalPos.left - e.showInterPos.left, e.tY = e.finalPos.top - e.showInterPos.top;
                        for (var n = {}, i = 0; 2 > i; i++) {
                            var o = 0 == i ? o = r.prefix : "";
                            n[o + "transition-property"] = o + "transform, " + o + "filter, opacity", n[o + "transition-timing-function"] = r.easing + ", linear, linear", n[o + "transition-duration"] = l + "ms", n[o + "transition-delay"] = "0", n[o + "transform"] = "translate(" + e.tX + "px," + e.tY + "px)", n[o + "filter"] = "none"
                        }
                        t(this).css("-webkit-transition", "all " + l + "ms " + r.easingFallback).css(n)
                    }), b.each(function() {
                        var e = this.data;
                        e.tX = 0 != e.finalPrePos.left ? e.finalPrePos.left - e.preInterPos.left : 0, e.tY = 0 != e.finalPrePos.left ? e.finalPrePos.top - e.preInterPos.top : 0;
                        for (var n = {}, i = 0; 2 > i; i++) {
                            var o = 0 == i ? o = r.prefix : "";
                            n[o + "transition"] = "all " + l + "ms " + r.easing, n[o + "transform"] = "translate(" + e.tX + "px," + e.tY + "px)"
                        }
                        t(this).css("-webkit-transition", "all " + l + "ms " + r.easingFallback).css(n)
                    }), e = {}, n = 0; 2 > n; n++) i = 0 == n ? i = r.prefix : "", e[i + "transition"] = "all " + l + "ms " + r.easing + ", " + i + "filter " + l + "ms linear, opacity " + l + "ms linear", e[i + "transform"] = r.scale + " " + r.rotateX + " " + r.rotateY + " " + r.rotateZ, e[i + "filter"] = r.blur + " " + r.grayscale, e.opacity = r.fade;
                v.css(e), p.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function(e) {
                    (-1 < e.originalEvent.propertyName.indexOf("transform") || -1 < e.originalEvent.propertyName.indexOf("opacity")) && (-1 < d.indexOf(".") ? t(e.target).hasClass(d.replace(".", "")) && a() : t(e.target).is(d) && a())
                })
            }, 10), r.failsafe = setTimeout(function() {
                r.mixing && a()
            }, l + 400)
        } else {
            if (r.resizeContainer && p.css("height", r.origHeight + "px"), !window.atob) return a(), !1;
            v = g, setTimeout(function() {
                if (p.css(r.perspective), r.resizeContainer) {
                    for (var t = {}, e = 0; 2 > e; e++) {
                        var n = 0 == e ? n = r.prefix : "";
                        t[n + "transition"] = "height " + l + "ms ease-in-out", t.height = r.minHeight + "px"
                    }
                    p.css(t)
                }
                if (h.css(r.transition), g.length) {
                    for (t = {}, e = 0; 2 > e; e++) n = 0 == e ? n = r.prefix : "", t[n + "transform"] = r.scale + " " + r.rotateX + " " + r.rotateY + " " + r.rotateZ, t[n + "filter"] = r.blur + " " + r.grayscale, t.opacity = r.fade;
                    v.css(t), p.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function(t) {
                        (-1 < t.originalEvent.propertyName.indexOf("transform") || -1 < t.originalEvent.propertyName.indexOf("opacity")) && (s.addClass(r.failClass), a())
                    })
                } else r.mixing = !1
            }, 10)
        }
    }

    function n(e, n, i, o) {
        function s(t) {
            "asc" == n ? r.prepend(t).prepend(" \t") : r.append(t).append(" \t")
        }
        i.find(o.targetSelector).wrapAll('<div class="mix_sorter"/>');
        var r = i.find(".mix_sorter");
        if (o.origSort.length || r.find(o.targetSelector + ":visible").each(function() {
                t(this).wrap("<s/>"), o.origSort.push(t(this).parent().html().replace(/\s+/g, "")), t(this).unwrap()
            }), r.empty(), "reset" == e) t.each(o.startOrder, function() {
            r.append(this).append(" \t")
        });
        else if ("default" == e) t.each(o.origOrder, function() {
            s(this)
        });
        else if ("random" == e) {
            if (!o.newOrder.length) {
                for (var a = o.startOrder.slice(), l = a.length, c = l; c--;) {
                    var u = parseInt(Math.random() * l),
                        d = a[c];
                    a[c] = a[u], a[u] = d
                }
                o.newOrder = a
            }
            t.each(o.newOrder, function() {
                r.append(this).append(" \t")
            })
        } else "custom" == e ? t.each(n, function() {
            s(this)
        }) : (void 0 === o.origOrder[0].attr(e) && console.log("No such attribute found. Terminating"), o.newOrder.length || (t.each(o.origOrder, function() {
            o.newOrder.push(t(this))
        }), o.newOrder.sort(function(t, n) {
            return 1 * t.attr(e).toLowerCase() < 1 * n.attr(e).toLowerCase() ? -1 : 1 * t.attr(e).toLowerCase() > 1 * n.attr(e).toLowerCase() ? 1 : 0
        })), t.each(o.newOrder, function() {
            s(this)
        }));
        o.checkSort = [], r.find(o.targetSelector + ":visible").each(function(e) {
            var n = t(this);
            0 == e && n.attr("data-checksum", "1"), n.wrap("<s/>"), o.checkSort.push(n.parent().html().replace(/\s+/g, "")), n.unwrap()
        }), i.find(o.targetSelector).unwrap()
    }
    var i = {
        init: function(n) {
            return this.each(function() {
                var i = {
                    targetSelector: ".mix",
                    filterSelector: ".filter",
                    sortSelector: ".sort",
                    buttonEvent: "click",
                    effects: ["fade", "scale"],
                    listEffects: null,
                    easing: "smooth",
                    layoutMode: "grid",
                    targetDisplayGrid: "inline-block",
                    targetDisplayList: "block",
                    listClass: "",
                    gridClass: "",
                    transitionSpeed: 600,
                    showOnLoad: "all",
                    multiFilter: !1,
                    filterLogic: "or",
                    resizeContainer: !0,
                    minHeight: 0,
                    failClass: "fail",
                    perspectiveDistance: "3000",
                    perspectiveOrigin: "50% 50%",
                    animateGridList: !0,
                    onMixLoad: null,
                    onMixStart: null,
                    onMixEnd: null,
                    container: null,
                    origOrder: [],
                    startOrder: [],
                    newOrder: [],
                    origSort: [],
                    checkSort: [],
                    filter: "",
                    mixing: !1,
                    origDisplay: "",
                    origLayout: "",
                    origHeight: 0,
                    newHeight: 0,
                    isTouch: !1,
                    resetDelay: 0,
                    failsafe: null,
                    prefix: "",
                    easingFallback: "ease-in-out",
                    transition: {},
                    perspective: {},
                    clean: {},
                    fade: "1",
                    scale: "",
                    rotateX: "",
                    rotateY: "",
                    rotateZ: "",
                    blur: "",
                    grayscale: ""
                };
                n && t.extend(i, n), this.config = i, t.support.touch = "ontouchend" in document, t.support.touch && (i.isTouch = !0, i.resetDelay = 350), i.container = t(this);
                var o, s = i.container;
                t: {
                    o = s[0];
                    for (var r = ["Webkit", "Moz", "O", "ms"], a = 0; a < r.length; a++)
                        if (r[a] + "Transition" in o.style) {
                            o = r[a];
                            break t
                        } o = "transition" in o.style && ""
                }
                for (i.prefix = o, i.prefix = i.prefix ? "-" + i.prefix.toLowerCase() + "-" : "", s.find(i.targetSelector).each(function() {
                        i.origOrder.push(t(this))
                    }), o = 0; 2 > o; o++) r = 0 == o ? r = i.prefix : "", i.transition[r + "transition"] = "all " + i.transitionSpeed + "ms ease-in-out", i.perspective[r + "perspective"] = i.perspectiveDistance + "px", i.perspective[r + "perspective-origin"] = i.perspectiveOrigin;
                for (o = 0; 2 > o; o++) r = 0 == o ? r = i.prefix : "", i.clean[r + "transition"] = "none";
                "list" == i.layoutMode ? (s.addClass(i.listClass), i.origDisplay = i.targetDisplayList) : (s.addClass(i.gridClass), i.origDisplay = i.targetDisplayGrid), i.origLayout = i.layoutMode, o = i.showOnLoad.split(" "), t.each(o, function() {
                    t(i.filterSelector + '[data-filter="' + this + '"]').addClass("active")
                }), s.find(i.targetSelector).addClass("mix_all"), "all" == o[0] && (o[0] = "mix_all", i.showOnLoad = "mix_all");
                var l = t();
                t.each(o, function() {
                    l = l.add(t("." + this))
                }), l.each(function() {
                    var e = t(this);
                    "list" == i.layoutMode ? e.css("display", i.targetDisplayList) : e.css("display", i.targetDisplayGrid), e.css(i.transition)
                }), setTimeout(function() {
                    i.mixing = !0, l.css("opacity", "1"), setTimeout(function() {
                        if ("list" == i.layoutMode ? l.removeStyle(i.prefix + "transition, transition").css({
                                display: i.targetDisplayList,
                                opacity: 1
                            }) : l.removeStyle(i.prefix + "transition, transition").css({
                                display: i.targetDisplayGrid,
                                opacity: 1
                            }), i.mixing = !1, "function" == typeof i.onMixLoad) {
                            var t = i.onMixLoad.call(this, i);
                            i = t || i
                        }
                    }, i.transitionSpeed)
                }, 10), i.filter = i.showOnLoad, t(i.sortSelector).bind(i.buttonEvent, function() {
                    if (!i.mixing) {
                        var n = t(this),
                            o = n.attr("data-sort"),
                            r = n.attr("data-order");
                        if (n.hasClass("active")) {
                            if ("random" != o) return !1
                        } else t(i.sortSelector).removeClass("active"), n.addClass("active");
                        s.find(i.targetSelector).each(function() {
                            i.startOrder.push(t(this))
                        }), e(i.filter, o, r, s, i)
                    }
                }), t(i.filterSelector).bind(i.buttonEvent, function() {
                    if (!i.mixing) {
                        var n = t(this);
                        if (0 == i.multiFilter) t(i.filterSelector).removeClass("active"), n.addClass("active"), i.filter = n.attr("data-filter"), t(i.filterSelector + '[data-filter="' + i.filter + '"]').addClass("active"), "all" == i.filter && (i.filter = "mix_all");
                        else {
                            var o = n.attr("data-filter");
                            "all" == o && (o = "mix_all"), n.hasClass("active") ? (n.removeClass("active"), i.filter = i.filter.replace(RegExp("(\\s|^)" + o), "")) : (n.addClass("active"), i.filter = i.filter + " " + o)
                        }
                        e(i.filter, null, null, s, i)
                    }
                })
            })
        },
        toGrid: function() {
            return this.each(function() {
                var n = this.config;
                "grid" != n.layoutMode && (n.layoutMode = "grid", e(n.filter, null, null, t(this), n))
            })
        },
        toList: function() {
            return this.each(function() {
                var n = this.config;
                "list" != n.layoutMode && (n.layoutMode = "list", e(n.filter, null, null, t(this), n))
            })
        },
        filter: function(n) {
            return this.each(function() {
                var i = this.config;
                t(i.filterSelector).removeClass("active"), t(i.filterSelector + '[data-filter="' + n + '"]').addClass("active"), "all" == n && (n = "mix_all"), i.mixing || (i.filter = n, e(n, null, null, t(this), i))
            })
        },
        sort: function(n) {
            return this.each(function() {
                var i = this.config;
                if (t.isArray(n)) var o = n[0],
                    s = n[1];
                else o = n, s = "desc";
                i.mixing || (t(this).find(i.targetSelector).each(function() {
                    i.startOrder.push(t(this))
                }), e(i.filter, o, s, t(this), i))
            })
        }
    };
    t.fn.mixitup = function(t, e) {
        return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void 0 : i.init.apply(this, arguments)
    }, t.fn.removeStyle = function(e) {
        return this.each(function() {
            var n = t(this),
                i = (e = e.replace(/\s+/g, "")).split(",");
            t.each(i, function() {
                var t = RegExp(this.toString() + "[^;]+;?", "g");
                n.attr("style", function(e, n) {
                    if (n) return n.replace(t, "")
                })
            })
        })
    }, Array.prototype.compare = function(t) {
        if (this.length != t.length) return !1;
        for (var e = 0; e < t.length; e++)
            if (this[e].compare && !this[e].compare(t[e]) || this[e] !== t[e]) return !1;
        return !0
    }
}(jQuery);


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}