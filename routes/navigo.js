!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("Navigo", [], t)
    : "object" == typeof exports
    ? (exports.Navigo = t())
    : (e.Navigo = t());
})(this, function () {
  return (function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = (n[o] = { exports: {}, id: o, loaded: !1 });
      return e[o].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
    }
    var n = {};
    return (t.m = e), (t.c = n), (t.p = ""), t(0);
  })([
    function (e, t) {
      "use strict";
      function n(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
        return Array.from(e);
      }
      function o() {
        return !(
          "undefined" == typeof window ||
          !window.history ||
          !window.history.pushState
        );
      }
      function i(e, t, n) {
        (this.root = null),
          (this._routes = []),
          (this._useHash = t),
          (this._hash = "undefined" == typeof n ? "#" : n),
          (this._paused = !1),
          (this._destroyed = !1),
          (this._lastRouteResolved = null),
          (this._notFoundHandler = null),
          (this._defaultHandler = null),
          (this._usePushState = !t && o()),
          (this._onLocationChange = this._onLocationChange.bind(this)),
          (this._genericHooks = null),
          (this._historyAPIUpdateMethod = "pushState"),
          e
            ? (this.root = t
                ? e.replace(/\/$/, "/" + this._hash)
                : e.replace(/\/$/, ""))
            : t &&
              (this.root = this._cLoc()
                .split(this._hash)[0]
                .replace(/\/$/, "/" + this._hash)),
          this._listen(),
          this.updatePageLinks();
      }
      function s(e) {
        return e instanceof RegExp
          ? e
          : e.replace(/\/+$/, "").replace(/^\/+/, "^/");
      }
      function r(e, t) {
        return 0 === t.length
          ? null
          : e
          ? e.slice(1, e.length).reduce(function (e, n, o) {
              return (
                null === e && (e = {}), (e[t[o]] = decodeURIComponent(n)), e
              );
            }, null)
          : null;
      }
      function a(e) {
        var t,
          n = [];
        return (
          (t =
            e instanceof RegExp
              ? e
              : new RegExp(
                  e
                    .replace(i.PARAMETER_REGEXP, function (e, t, o) {
                      return n.push(o), i.REPLACE_VARIABLE_REGEXP;
                    })
                    .replace(i.WILDCARD_REGEXP, i.REPLACE_WILDCARD) +
                    i.FOLLOWED_BY_SLASH_REGEXP,
                  i.MATCH_REGEXP_FLAGS
                )),
          { regexp: t, paramNames: n }
        );
      }
      function u(e) {
        return e.replace(/\/$/, "").split("/").length;
      }
      function h(e, t) {
        return u(t) - u(e);
      }
      function l(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return t
          .map(function (t) {
            var n = a(s(t.route)),
              o = n.regexp,
              i = n.paramNames,
              u = e.replace(/^\/+/, "/").match(o),
              h = r(u, i);
            return !!u && { match: u, route: t, params: h };
          })
          .filter(function (e) {
            return e;
          });
      }
      function d(e, t) {
        return l(e, t)[0] || !1;
      }
      function c(e, t) {
        var n = t.map(function (t) {
            return "" === t.route || "*" === t.route
              ? e
              : e.split(new RegExp(t.route + "($|/)"))[0];
          }),
          o = s(e);
        return n.length > 1
          ? n.reduce(function (e, t) {
              return e.length > t.length && (e = t), e;
            }, n[0])
          : 1 === n.length
          ? n[0]
          : o;
      }
      function f() {
        return !!("undefined" != typeof window && "onhashchange" in window);
      }
      function _(e) {
        return e
          .split(/\?(.*)?$/)
          .slice(1)
          .join("");
      }
      function p(e, t, n) {
        var i,
          s = e,
          r = function (e) {
            return e.split(/\?(.*)?$/)[0];
          };
        return (
          "undefined" == typeof n && (n = "#"),
          o() && !t
            ? (s = r(e).split(n)[0])
            : ((i = e.split(n)), (s = r(i.length > 1 ? i[1] : i[0]))),
          s
        );
      }
      function v(e, t, n) {
        return t && "object" === ("undefined" == typeof t ? "undefined" : g(t))
          ? void (t.before
              ? t.before(function () {
                  var o =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  o && (e(), t.after && t.after(n));
                }, n)
              : t.after && (e(), t.after && t.after(n)))
          : void e();
      }
      function R(e, t, n) {
        if (o() && !t) return !1;
        if (!e.match(n)) return !1;
        var i = e.split(n);
        return i.length < 2 || "" === i[1];
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var g =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      (i.prototype = {
        helpers: { match: d, root: c, clean: s, getOnlyURL: p },
        navigate: function (e, t) {
          var n;
          return (
            (e = e || ""),
            this._usePushState
              ? ((n =
                  (t ? "" : this._getRoot() + "/") + e.replace(/^\/+/, "/")),
                (n = n.replace(/([^:])(\/{2,})/g, "$1/")),
                history[this._historyAPIUpdateMethod]({}, "", n),
                this.resolve())
              : "undefined" != typeof window &&
                ((e = e.replace(new RegExp("^" + this._hash), "")),
                (window.location.href =
                  window.location.href
                    .replace(/#$/, "")
                    .replace(new RegExp(this._hash + ".*$"), "") +
                  this._hash +
                  e)),
            this
          );
        },
        on: function () {
          for (
            var e = this, t = arguments.length, n = Array(t), o = 0;
            o < t;
            o++
          )
            n[o] = arguments[o];
          if ("function" == typeof n[0])
            this._defaultHandler = { handler: n[0], hooks: n[1] };
          else if (n.length >= 2)
            if ("/" === n[0]) {
              var i = n[1];
              "object" === g(n[1]) && (i = n[1].uses),
                (this._defaultHandler = { handler: i, hooks: n[2] });
            } else this._add(n[0], n[1], n[2]);
          else if ("object" === g(n[0])) {
            var s = Object.keys(n[0]).sort(h);
            s.forEach(function (t) {
              e.on(t, n[0][t]);
            });
          }
          return this;
        },
        off: function (e) {
          return (
            null !== this._defaultHandler && e === this._defaultHandler.handler
              ? (this._defaultHandler = null)
              : null !== this._notFoundHandler &&
                e === this._notFoundHandler.handler &&
                (this._notFoundHandler = null),
            (this._routes = this._routes.reduce(function (t, n) {
              return n.handler !== e && t.push(n), t;
            }, [])),
            this
          );
        },
        notFound: function (e, t) {
          return (this._notFoundHandler = { handler: e, hooks: t }), this;
        },
        resolve: function (e) {
          var t,
            o,
            i = this,
            s = (e || this._cLoc()).replace(this._getRoot(), "");
          this._useHash && (s = s.replace(new RegExp("^/" + this._hash), "/"));
          var r = _(e || this._cLoc()),
            a = p(s, this._useHash, this._hash);
          return (
            !this._paused &&
            (this._lastRouteResolved &&
            a === this._lastRouteResolved.url &&
            r === this._lastRouteResolved.query
              ? (this._lastRouteResolved.hooks &&
                  this._lastRouteResolved.hooks.already &&
                  this._lastRouteResolved.hooks.already(
                    this._lastRouteResolved.params
                  ),
                !1)
              : (o = d(a, this._routes))
              ? (this._callLeave(),
                (this._lastRouteResolved = {
                  url: a,
                  query: r,
                  hooks: o.route.hooks,
                  params: o.params,
                  name: o.route.name,
                }),
                (t = o.route.handler),
                v(
                  function () {
                    v(
                      function () {
                        o.route.route instanceof RegExp
                          ? t.apply(void 0, n(o.match.slice(1, o.match.length)))
                          : t(o.params, r);
                      },
                      o.route.hooks,
                      o.params,
                      i._genericHooks
                    );
                  },
                  this._genericHooks,
                  o.params
                ),
                o)
              : this._defaultHandler &&
                ("" === a ||
                  "/" === a ||
                  a === this._hash ||
                  R(a, this._useHash, this._hash))
              ? (v(function () {
                  v(function () {
                    i._callLeave(),
                      (i._lastRouteResolved = {
                        url: a,
                        query: r,
                        hooks: i._defaultHandler.hooks,
                      }),
                      i._defaultHandler.handler(r);
                  }, i._defaultHandler.hooks);
                }, this._genericHooks),
                !0)
              : (this._notFoundHandler &&
                  v(function () {
                    v(function () {
                      i._callLeave(),
                        (i._lastRouteResolved = {
                          url: a,
                          query: r,
                          hooks: i._notFoundHandler.hooks,
                        }),
                        i._notFoundHandler.handler(r);
                    }, i._notFoundHandler.hooks);
                  }, this._genericHooks),
                !1))
          );
        },
        destroy: function () {
          (this._routes = []),
            (this._destroyed = !0),
            clearTimeout(this._listeningInterval),
            "undefined" != typeof window &&
              (window.removeEventListener("popstate", this._onLocationChange),
              window.removeEventListener("hashchange", this._onLocationChange));
        },
        updatePageLinks: function () {
          var e = this;
          "undefined" != typeof document &&
            this._findLinks().forEach(function (t) {
              t.hasListenerAttached ||
                (t.addEventListener("click", function (n) {
                  var o = e.getLinkPath(t);
                  e._destroyed ||
                    (n.preventDefault(),
                    e.navigate(o.replace(/\/+$/, "").replace(/^\/+/, "/")));
                }),
                (t.hasListenerAttached = !0));
            });
        },
        generate: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = this._routes.reduce(function (n, o) {
              var i;
              if (o.name === e) {
                n = o.route;
                for (i in t) n = n.toString().replace(":" + i, t[i]);
              }
              return n;
            }, "");
          return this._useHash ? this._hash + n : n;
        },
        link: function (e) {
          return this._getRoot() + e;
        },
        pause: function () {
          var e =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          (this._paused = e),
            e
              ? (this._historyAPIUpdateMethod = "replaceState")
              : (this._historyAPIUpdateMethod = "pushState");
        },
        resume: function () {
          this.pause(!1);
        },
        historyAPIUpdateMethod: function (e) {
          return "undefined" == typeof e
            ? this._historyAPIUpdateMethod
            : ((this._historyAPIUpdateMethod = e), e);
        },
        disableIfAPINotAvailable: function () {
          o() || this.destroy();
        },
        lastRouteResolved: function () {
          return this._lastRouteResolved;
        },
        getLinkPath: function (e) {
          return e.getAttribute("href");
        },
        hooks: function (e) {
          this._genericHooks = e;
        },
        _add: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
          return (
            "string" == typeof e && (e = encodeURI(e)),
            "object" === ("undefined" == typeof t ? "undefined" : g(t))
              ? this._routes.push({
                  route: e,
                  handler: t.uses,
                  name: t.as,
                  hooks: n || t.hooks,
                })
              : this._routes.push({ route: e, handler: t, hooks: n }),
            this._add
          );
        },
        _getRoot: function () {
          return null !== this.root
            ? this.root
            : ((this.root = c(this._cLoc().split("?")[0], this._routes)),
              this.root);
        },
        _listen: function () {
          var e = this;
          if (this._usePushState)
            window.addEventListener("popstate", this._onLocationChange);
          else if (f())
            window.addEventListener("hashchange", this._onLocationChange);
          else {
            var t = this._cLoc(),
              n = void 0,
              o = void 0;
            (o = function () {
              (n = e._cLoc()),
                t !== n && ((t = n), e.resolve()),
                (e._listeningInterval = setTimeout(o, 200));
            }),
              o();
          }
        },
        _cLoc: function () {
          return "undefined" != typeof window
            ? "undefined" != typeof window.__NAVIGO_WINDOW_LOCATION_MOCK__
              ? window.__NAVIGO_WINDOW_LOCATION_MOCK__
              : s(window.location.href)
            : "";
        },
        _findLinks: function () {
          return [].slice.call(document.querySelectorAll("[data-navigo]"));
        },
        _onLocationChange: function () {
          this.resolve();
        },
        _callLeave: function () {
          this._lastRouteResolved &&
            this._lastRouteResolved.hooks &&
            this._lastRouteResolved.hooks.leave &&
            this._lastRouteResolved.hooks.leave(this._lastRouteResolved.params);
        },
      }),
        (i.PARAMETER_REGEXP = /([:*])(\w+)/g),
        (i.WILDCARD_REGEXP = /\*/g),
        (i.REPLACE_VARIABLE_REGEXP = "([^/]+)"),
        (i.REPLACE_WILDCARD = "(?:.*)"),
        (i.FOLLOWED_BY_SLASH_REGEXP = "(?:/$|$)"),
        (i.MATCH_REGEXP_FLAGS = ""),
        (t["default"] = i),
        (e.exports = t["default"]);
    },
  ]);
});
//# sourceMappingURL=navigo.min.js.map
