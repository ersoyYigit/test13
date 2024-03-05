import {
  IconCash,
  IconDialpad,
  IconEdit,
  IconPhoneCheck
} from "/build/_shared/chunk-E7BJENQJ.js";
import {
  useForm
} from "/build/_shared/chunk-JMS3LEPF.js";
import {
  Accordion,
  AccordionChevron,
  Box,
  Button,
  CloseButton,
  Grid,
  Group,
  Input,
  Popover,
  Stack,
  Stepper,
  Tabs,
  TextInput,
  Title,
  UnstyledButton,
  clamp,
  createVarsResolver,
  factory,
  getFontSize,
  getSize,
  getSpacing,
  rem,
  useDidUpdate,
  useInputProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
  useUncontrolled
} from "/build/_shared/chunk-REOWHZ4E.js";
import {
  useParams
} from "/build/_shared/chunk-IZVKESBX.js";
import {
  createHotContext
} from "/build/_shared/chunk-H7NTDJTR.js";
import "/build/_shared/chunk-K6PKGSTD.js";
import "/build/_shared/chunk-H5ZE7JVG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NRH5LTJ7.js";
import {
  require_react
} from "/build/_shared/chunk-O4OKU2LD.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/dayjs.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    }(exports, function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date())
          return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2)
          return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1)
            return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2))
          return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2)
              return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2))
              return /* @__PURE__ */ new Date();
            if (e2 instanceof Date)
              return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else
            l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c)
            return this.set(c, this.$M + r2);
          if ($2 === h)
            return this.set(h, this.$y + r2);
          if ($2 === a)
            return y2(1);
          if ($2 === o)
            return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid())
            return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, function(t3, r3) {
            return r3 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2)
            return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    });
  }
});

// node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/timezone.js
var require_timezone = __commonJS({
  "node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/timezone.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_timezone = e();
    }(exports, function() {
      "use strict";
      var t = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, e = {};
      return function(n, i, o) {
        var r, a = function(t2, n2, i2) {
          void 0 === i2 && (i2 = {});
          var o2 = new Date(t2), r2 = function(t3, n3) {
            void 0 === n3 && (n3 = {});
            var i3 = n3.timeZoneName || "short", o3 = t3 + "|" + i3, r3 = e[o3];
            return r3 || (r3 = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: t3, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: i3 }), e[o3] = r3), r3;
          }(n2, i2);
          return r2.formatToParts(o2);
        }, u = function(e2, n2) {
          for (var i2 = a(e2, n2), r2 = [], u2 = 0; u2 < i2.length; u2 += 1) {
            var f2 = i2[u2], s2 = f2.type, m = f2.value, c = t[s2];
            c >= 0 && (r2[c] = parseInt(m, 10));
          }
          var d = r2[3], l = 24 === d ? 0 : d, h = r2[0] + "-" + r2[1] + "-" + r2[2] + " " + l + ":" + r2[4] + ":" + r2[5] + ":000", v = +e2;
          return (o.utc(h).valueOf() - (v -= v % 1e3)) / 6e4;
        }, f = i.prototype;
        f.tz = function(t2, e2) {
          void 0 === t2 && (t2 = r);
          var n2 = this.utcOffset(), i2 = this.toDate(), a2 = i2.toLocaleString("en-US", { timeZone: t2 }), u2 = Math.round((i2 - new Date(a2)) / 1e3 / 60), f2 = o(a2, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(i2.getTimezoneOffset() / 15) - u2, true);
          if (e2) {
            var s2 = f2.utcOffset();
            f2 = f2.add(n2 - s2, "minute");
          }
          return f2.$x.$timezone = t2, f2;
        }, f.offsetName = function(t2) {
          var e2 = this.$x.$timezone || o.tz.guess(), n2 = a(this.valueOf(), e2, { timeZoneName: t2 }).find(function(t3) {
            return "timezonename" === t3.type.toLowerCase();
          });
          return n2 && n2.value;
        };
        var s = f.startOf;
        f.startOf = function(t2, e2) {
          if (!this.$x || !this.$x.$timezone)
            return s.call(this, t2, e2);
          var n2 = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
          return s.call(n2, t2, e2).tz(this.$x.$timezone, true);
        }, o.tz = function(t2, e2, n2) {
          var i2 = n2 && e2, a2 = n2 || e2 || r, f2 = u(+o(), a2);
          if ("string" != typeof t2)
            return o(t2).tz(a2);
          var s2 = function(t3, e3, n3) {
            var i3 = t3 - 60 * e3 * 1e3, o2 = u(i3, n3);
            if (e3 === o2)
              return [i3, e3];
            var r2 = u(i3 -= 60 * (o2 - e3) * 1e3, n3);
            return o2 === r2 ? [i3, o2] : [t3 - 60 * Math.min(o2, r2) * 1e3, Math.max(o2, r2)];
          }(o.utc(t2, i2).valueOf(), f2, a2), m = s2[0], c = s2[1], d = o(m).utcOffset(c);
          return d.$x.$timezone = a2, d;
        }, o.tz.guess = function() {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }, o.tz.setDefault = function(t2) {
          r = t2;
        };
      };
    });
  }
});

// node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/utc.js
var require_utc = __commonJS({
  "node_modules/.pnpm/dayjs@1.11.10/node_modules/dayjs/plugin/utc.js"(exports, module) {
    !function(t, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_utc = i();
    }(exports, function() {
      "use strict";
      var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
      return function(s, f, n) {
        var u = f.prototype;
        n.utc = function(t2) {
          var i2 = { date: t2, utc: true, args: arguments };
          return new f(i2);
        }, u.utc = function(i2) {
          var e2 = n(this.toDate(), { locale: this.$L, utc: true });
          return i2 ? e2.add(this.utcOffset(), t) : e2;
        }, u.local = function() {
          return n(this.toDate(), { locale: this.$L, utc: false });
        };
        var o = u.parse;
        u.parse = function(t2) {
          t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), o.call(this, t2);
        };
        var r = u.init;
        u.init = function() {
          if (this.$u) {
            var t2 = this.$d;
            this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
          } else
            r.call(this);
        };
        var a = u.utcOffset;
        u.utcOffset = function(s2, f2) {
          var n2 = this.$utils().u;
          if (n2(s2))
            return this.$u ? 0 : n2(this.$offset) ? a.call(this) : this.$offset;
          if ("string" == typeof s2 && (s2 = function(t2) {
            void 0 === t2 && (t2 = "");
            var s3 = t2.match(i);
            if (!s3)
              return null;
            var f3 = ("" + s3[0]).match(e) || ["-", 0, 0], n3 = f3[0], u3 = 60 * +f3[1] + +f3[2];
            return 0 === u3 ? 0 : "+" === n3 ? u3 : -u3;
          }(s2), null === s2))
            return this;
          var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2, o2 = this;
          if (f2)
            return o2.$offset = u2, o2.$u = 0 === s2, o2;
          if (0 !== s2) {
            var r2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
            (o2 = this.local().add(u2 + r2, t)).$offset = u2, o2.$x.$localOffset = r2;
          } else
            o2 = this.utc();
          return o2;
        };
        var h = u.format;
        u.format = function(t2) {
          var i2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return h.call(this, i2);
        }, u.valueOf = function() {
          var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * t2;
        }, u.isUTC = function() {
          return !!this.$u;
        }, u.toISOString = function() {
          return this.toDate().toISOString();
        }, u.toString = function() {
          return this.toDate().toUTCString();
        };
        var l = u.toDate;
        u.toDate = function(t2) {
          return "s" === t2 && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
        };
        var c = u.diff;
        u.diff = function(t2, i2, e2) {
          if (t2 && this.$u === t2.$u)
            return c.call(this, t2, i2, e2);
          var s2 = this.local(), f2 = n(t2).local();
          return c.call(s2, f2, i2, e2);
        };
      };
    });
  }
});

// app/routes/modules.fast-track.$gateId.tsx
var import_react21 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/utils/handle-control-key-down.mjs
"use client";
function getNextIndex({ direction, levelIndex, rowIndex, cellIndex, size }) {
  switch (direction) {
    case "up":
      if (levelIndex === 0 && rowIndex === 0) {
        return null;
      }
      if (rowIndex === 0) {
        return {
          levelIndex: levelIndex - 1,
          rowIndex: cellIndex <= size[levelIndex - 1][size[levelIndex - 1].length - 1] - 1 ? size[levelIndex - 1].length - 1 : size[levelIndex - 1].length - 2,
          cellIndex
        };
      }
      return {
        levelIndex,
        rowIndex: rowIndex - 1,
        cellIndex
      };
    case "down":
      if (rowIndex === size[levelIndex].length - 1) {
        return {
          levelIndex: levelIndex + 1,
          rowIndex: 0,
          cellIndex
        };
      }
      if (rowIndex === size[levelIndex].length - 2 && cellIndex >= size[levelIndex][size[levelIndex].length - 1]) {
        return {
          levelIndex: levelIndex + 1,
          rowIndex: 0,
          cellIndex
        };
      }
      return {
        levelIndex,
        rowIndex: rowIndex + 1,
        cellIndex
      };
    case "left":
      if (levelIndex === 0 && rowIndex === 0 && cellIndex === 0) {
        return null;
      }
      if (rowIndex === 0 && cellIndex === 0) {
        return {
          levelIndex: levelIndex - 1,
          rowIndex: size[levelIndex - 1].length - 1,
          cellIndex: size[levelIndex - 1][size[levelIndex - 1].length - 1] - 1
        };
      }
      if (cellIndex === 0) {
        return {
          levelIndex,
          rowIndex: rowIndex - 1,
          cellIndex: size[levelIndex][rowIndex - 1] - 1
        };
      }
      return {
        levelIndex,
        rowIndex,
        cellIndex: cellIndex - 1
      };
    case "right":
      if (rowIndex === size[levelIndex].length - 1 && cellIndex === size[levelIndex][rowIndex] - 1) {
        return {
          levelIndex: levelIndex + 1,
          rowIndex: 0,
          cellIndex: 0
        };
      }
      if (cellIndex === size[levelIndex][rowIndex] - 1) {
        return {
          levelIndex,
          rowIndex: rowIndex + 1,
          cellIndex: 0
        };
      }
      return {
        levelIndex,
        rowIndex,
        cellIndex: cellIndex + 1
      };
    default:
      return { levelIndex, rowIndex, cellIndex };
  }
}
function focusOnNextFocusableControl({
  controlsRef,
  direction,
  levelIndex,
  rowIndex,
  cellIndex,
  size
}) {
  const nextIndex = getNextIndex({ direction, size, rowIndex, cellIndex, levelIndex });
  if (!nextIndex) {
    return;
  }
  const controlToFocus = controlsRef.current?.[nextIndex.levelIndex]?.[nextIndex.rowIndex]?.[nextIndex.cellIndex];
  if (!controlToFocus) {
    return;
  }
  if (controlToFocus.disabled || controlToFocus.getAttribute("data-hidden") || controlToFocus.getAttribute("data-outside")) {
    focusOnNextFocusableControl({
      controlsRef,
      direction,
      levelIndex: nextIndex.levelIndex,
      cellIndex: nextIndex.cellIndex,
      rowIndex: nextIndex.rowIndex,
      size
    });
  } else {
    controlToFocus.focus();
  }
}
function getDirection(key) {
  switch (key) {
    case "ArrowDown":
      return "down";
    case "ArrowUp":
      return "up";
    case "ArrowRight":
      return "right";
    case "ArrowLeft":
      return "left";
    default:
      return null;
  }
}
function getControlsSize(controlsRef) {
  return controlsRef.current?.map((column) => column.map((row) => row.length));
}
function handleControlKeyDown({
  controlsRef,
  levelIndex,
  rowIndex,
  cellIndex,
  event
}) {
  const direction = getDirection(event.key);
  if (direction) {
    event.preventDefault();
    const size = getControlsSize(controlsRef);
    focusOnNextFocusableControl({
      controlsRef,
      direction,
      levelIndex,
      rowIndex,
      cellIndex,
      size
    });
  }
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/utils/assign-time/assign-time.mjs
"use client";
function assignTime(originalDate, resultDate) {
  if (!originalDate || !resultDate) {
    return resultDate;
  }
  const hours = originalDate.getHours();
  const minutes = originalDate.getMinutes();
  const seconds = originalDate.getSeconds();
  const ms = originalDate.getMilliseconds();
  const result = new Date(resultDate);
  result.setHours(hours);
  result.setMinutes(minutes);
  result.setSeconds(seconds);
  result.setMilliseconds(ms);
  return result;
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/utils/shift-timezone.mjs
var import_dayjs2 = __toESM(require_dayjs_min(), 1);

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/utils/get-timezone-offset.mjs
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_timezone = __toESM(require_timezone(), 1);
var import_utc = __toESM(require_utc(), 1);
"use client";
import_dayjs.default.extend(import_utc.default);
import_dayjs.default.extend(import_timezone.default);
function getTimezoneOffset(date, timezone) {
  if (timezone) {
    return (0, import_dayjs.default)(date).tz(timezone).utcOffset() + date.getTimezoneOffset();
  }
  return 0;
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/utils/shift-timezone.mjs
"use client";
var updateTimezone = (date, timezone, direction) => {
  if (!date) {
    return null;
  }
  if (!timezone) {
    return date;
  }
  let offset = getTimezoneOffset(date, timezone);
  if (direction === "remove") {
    offset *= -1;
  }
  return (0, import_dayjs2.default)(date).add(offset, "minutes").toDate();
};
function shiftTimezone(direction, date, timezone, disabled) {
  if (disabled || !date) {
    return date;
  }
  if (Array.isArray(date)) {
    return date.map((d) => updateTimezone(d, timezone, direction));
  }
  return updateTimezone(date, timezone, direction);
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/DatesProvider/DatesProvider.mjs
var import_react = __toESM(require_react(), 1);
"use client";
var DATES_PROVIDER_DEFAULT_SETTINGS = {
  locale: "en",
  timezone: null,
  firstDayOfWeek: 1,
  weekendDays: [0, 6],
  labelSeparator: "\u2013",
  consistentWeeks: false
};
var DatesProviderContext = (0, import_react.createContext)(DATES_PROVIDER_DEFAULT_SETTINGS);

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/DatesProvider/use-dates-context.mjs
var import_react2 = __toESM(require_react(), 1);
"use client";
function useDatesContext() {
  const ctx = (0, import_react2.useContext)(DatesProviderContext);
  const getLocale = (0, import_react2.useCallback)((input) => input || ctx.locale, [ctx.locale]);
  const getTimezone = (0, import_react2.useCallback)(
    (input) => input || ctx.timezone || void 0,
    [ctx.timezone]
  );
  const getFirstDayOfWeek = (0, import_react2.useCallback)(
    (input) => typeof input === "number" ? input : ctx.firstDayOfWeek,
    [ctx.firstDayOfWeek]
  );
  const getWeekendDays = (0, import_react2.useCallback)(
    (input) => Array.isArray(input) ? input : ctx.weekendDays,
    [ctx.weekendDays]
  );
  const getLabelSeparator = (0, import_react2.useCallback)(
    (input) => typeof input === "string" ? input : ctx.labelSeparator,
    [ctx.labelSeparator]
  );
  return {
    ...ctx,
    getLocale,
    getTimezone,
    getFirstDayOfWeek,
    getWeekendDays,
    getLabelSeparator
  };
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/HiddenDatesInput/HiddenDatesInput.mjs
var import_react3 = __toESM(require_react(), 1);
"use client";
function formatValue(value, type) {
  if (type === "range" && Array.isArray(value)) {
    const [startDate, endDate] = value;
    if (!startDate) {
      return "";
    }
    if (!endDate) {
      return `${startDate.toISOString()} \u2013`;
    }
    return `${startDate.toISOString()} \u2013 ${endDate.toISOString()}`;
  }
  if (type === "multiple" && Array.isArray(value)) {
    return value.map((date) => date?.toISOString()).filter(Boolean).join(", ");
  }
  if (!Array.isArray(value) && value) {
    return value.toISOString();
  }
  return "";
}
function HiddenDatesInput({ value, type, name, form }) {
  return /* @__PURE__ */ import_react3.default.createElement("input", { type: "hidden", value: formatValue(value, type), name, form });
}
HiddenDatesInput.displayName = "@mantine/dates/HiddenDatesInput";

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/Day/Day.mjs
var import_dayjs3 = __toESM(require_dayjs_min(), 1);
var import_react4 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/Day/Day.module.css.mjs
"use client";
var classes = { "day": "m-396ce5cb" };

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/Day/Day.mjs
"use client";
var defaultProps = {};
var varsResolver = createVarsResolver((_, { size }) => ({
  day: {
    "--day-size": getSize(size, "day-size")
  }
}));
var Day = factory((_props, ref) => {
  const props = useProps("Day", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    date,
    disabled,
    __staticSelector,
    weekend,
    outside,
    selected,
    renderDay,
    inRange,
    firstInRange,
    lastInRange,
    hidden,
    static: isStatic,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "Day",
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: "day"
  });
  const ctx = useDatesContext();
  return /* @__PURE__ */ import_react4.default.createElement(
    UnstyledButton,
    {
      ...getStyles("day", { style: hidden ? { display: "none" } : void 0 }),
      component: isStatic ? "div" : "button",
      ref,
      disabled,
      "data-today": (0, import_dayjs3.default)(date).isSame(shiftTimezone("add", /* @__PURE__ */ new Date(), ctx.getTimezone()), "day") || void 0,
      "data-hidden": hidden || void 0,
      "data-disabled": disabled || void 0,
      "data-weekend": !disabled && !outside && weekend || void 0,
      "data-outside": !disabled && outside || void 0,
      "data-selected": !disabled && selected || void 0,
      "data-in-range": inRange && !disabled || void 0,
      "data-first-in-range": firstInRange && !disabled || void 0,
      "data-last-in-range": lastInRange && !disabled || void 0,
      "data-static": isStatic || void 0,
      unstyled,
      ...others
    },
    renderDay?.(date) || date.getDate()
  );
});
Day.classes = classes;
Day.displayName = "@mantine/dates/Day";

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/WeekdaysRow/WeekdaysRow.mjs
var import_react5 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/WeekdaysRow/get-weekdays-names/get-weekdays-names.mjs
var import_dayjs4 = __toESM(require_dayjs_min(), 1);
"use client";
function getWeekdayNames({
  locale,
  format = "dd",
  firstDayOfWeek = 1
}) {
  const baseDate = (0, import_dayjs4.default)().day(firstDayOfWeek);
  const labels = [];
  for (let i = 0; i < 7; i += 1) {
    if (typeof format === "string") {
      labels.push((0, import_dayjs4.default)(baseDate).add(i, "days").locale(locale).format(format));
    } else {
      labels.push(format((0, import_dayjs4.default)(baseDate).add(i, "days").toDate()));
    }
  }
  return labels;
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/WeekdaysRow/WeekdaysRow.module.css.mjs
"use client";
var classes2 = { "weekday": "m-18a3eca" };

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/WeekdaysRow/WeekdaysRow.mjs
"use client";
var defaultProps2 = {};
var varsResolver2 = createVarsResolver((_, { size }) => ({
  weekdaysRow: {
    "--wr-fz": getFontSize(size),
    "--wr-spacing": getSpacing(size)
  }
}));
var WeekdaysRow = factory((_props, ref) => {
  const props = useProps("WeekdaysRow", defaultProps2, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    cellComponent: CellComponent = "th",
    __staticSelector,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "WeekdaysRow",
    classes: classes2,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2,
    rootSelector: "weekdaysRow"
  });
  const ctx = useDatesContext();
  const weekdays = getWeekdayNames({
    locale: ctx.getLocale(locale),
    format: weekdayFormat,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek)
  }).map((weekday, index) => /* @__PURE__ */ import_react5.default.createElement(CellComponent, { key: index, ...getStyles("weekday") }, weekday));
  return /* @__PURE__ */ import_react5.default.createElement(Box, { component: "tr", ref, ...getStyles("weekdaysRow"), ...others }, weekdays);
});
WeekdaysRow.classes = classes2;
WeekdaysRow.displayName = "@mantine/dates/WeekdaysRow";

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/Month/get-end-of-week/get-end-of-week.mjs
"use client";
function getEndOfWeek(date, firstDayOfWeek = 1) {
  const value = new Date(date);
  const lastDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
  while (value.getDay() !== lastDayOfWeek) {
    value.setDate(value.getDate() + 1);
  }
  return value;
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/Month/get-start-of-week/get-start-of-week.mjs
"use client";
function getStartOfWeek(date, firstDayOfWeek = 1) {
  const value = new Date(date);
  while (value.getDay() !== firstDayOfWeek) {
    value.setDate(value.getDate() - 1);
  }
  return value;
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/Month/get-month-days/get-month-days.mjs
var import_dayjs5 = __toESM(require_dayjs_min(), 1);
"use client";
function getMonthDays({
  month,
  firstDayOfWeek = 1,
  timezone = void 0,
  consistentWeeks
}) {
  const currentMonth = month.getMonth();
  const startOfMonth = shiftTimezone(
    "add",
    new Date(month.getFullYear(), currentMonth, 1),
    timezone
  );
  const endOfMonth = shiftTimezone(
    "add",
    new Date(month.getFullYear(), month.getMonth() + 1, 0),
    timezone
  );
  const endDate = getEndOfWeek(endOfMonth, firstDayOfWeek);
  const date = getStartOfWeek(startOfMonth, firstDayOfWeek);
  const weeks = [];
  while (date <= endDate) {
    const days = [];
    for (let i = 0; i < 7; i += 1) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    weeks.push(days);
  }
  if (consistentWeeks && weeks.length < 6) {
    const lastWeek = weeks[weeks.length - 1];
    const lastDay = lastWeek[lastWeek.length - 1];
    const nextDay = new Date(lastDay);
    nextDay.setDate(nextDay.getDate() + 1);
    while (weeks.length < 6) {
      const days = [];
      for (let i = 0; i < 7; i += 1) {
        days.push(new Date(nextDay));
        nextDay.setDate(nextDay.getDate() + 1);
      }
      weeks.push(days);
    }
  }
  return weeks;
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/Month/is-same-month/is-same-month.mjs
"use client";
function isSameMonth(date, comparison) {
  return date.getFullYear() === comparison.getFullYear() && date.getMonth() === comparison.getMonth();
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/Month/Month.mjs
var import_dayjs9 = __toESM(require_dayjs_min(), 1);
var import_react6 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/Month/get-date-in-tab-order/get-date-in-tab-order.mjs
var import_dayjs8 = __toESM(require_dayjs_min(), 1);

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/Month/is-after-min-date/is-after-min-date.mjs
var import_dayjs6 = __toESM(require_dayjs_min(), 1);
"use client";
function isAfterMinDate(date, minDate) {
  return minDate instanceof Date ? (0, import_dayjs6.default)(date).isAfter((0, import_dayjs6.default)(minDate).subtract(1, "day"), "day") : true;
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/Month/is-before-max-date/is-before-max-date.mjs
var import_dayjs7 = __toESM(require_dayjs_min(), 1);
"use client";
function isBeforeMaxDate(date, maxDate) {
  return maxDate instanceof Date ? (0, import_dayjs7.default)(date).isBefore((0, import_dayjs7.default)(maxDate).add(1, "day"), "day") : true;
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/Month/get-date-in-tab-order/get-date-in-tab-order.mjs
"use client";
function getDateInTabOrder(dates, minDate, maxDate, getDateControlProps, excludeDate, hideOutsideDates, month) {
  const enabledDates = dates.flat().filter(
    (date) => isBeforeMaxDate(date, maxDate) && isAfterMinDate(date, minDate) && !excludeDate?.(date) && !getDateControlProps?.(date)?.disabled && (!hideOutsideDates || isSameMonth(date, month))
  );
  const selectedDate = enabledDates.find((date) => getDateControlProps?.(date)?.selected);
  if (selectedDate) {
    return selectedDate;
  }
  const currentDate = enabledDates.find((date) => (0, import_dayjs8.default)().isSame(date, "date"));
  if (currentDate) {
    return currentDate;
  }
  return enabledDates[0];
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/Month/Month.module.css.mjs
"use client";
var classes3 = { "month": "m-cc9820d3", "monthCell": "m-8f457cd5" };

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/Month/Month.mjs
"use client";
var defaultProps3 = {
  withCellSpacing: true
};
var Month = factory((_props, ref) => {
  const props = useProps("Month", defaultProps3, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    month,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    static: isStatic,
    __getDayRef,
    __onDayKeyDown,
    __onDayClick,
    __onDayMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing,
    size,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "Month",
    classes: classes3,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: "month"
  });
  const ctx = useDatesContext();
  const dates = getMonthDays({
    month,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
    timezone: ctx.timezone || void 0,
    consistentWeeks: ctx.consistentWeeks
  });
  const dateInTabOrder = getDateInTabOrder(
    dates,
    minDate,
    maxDate,
    getDayProps,
    excludeDate,
    hideOutsideDates,
    month
  );
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const rows = dates.map((row, rowIndex) => {
    const cells = row.map((date, cellIndex) => {
      const outside = !isSameMonth(date, month);
      const ariaLabel = getDayAriaLabel?.(date) || (0, import_dayjs9.default)(date).locale(locale || ctx.locale).format("D MMMM YYYY");
      const dayProps = getDayProps?.(date);
      const isDateInTabOrder = (0, import_dayjs9.default)(date).isSame(dateInTabOrder, "date");
      return /* @__PURE__ */ import_react6.default.createElement(
        "td",
        {
          key: date.toString(),
          ...getStyles("monthCell"),
          "data-with-spacing": withCellSpacing || void 0
        },
        /* @__PURE__ */ import_react6.default.createElement(
          Day,
          {
            __staticSelector: __staticSelector || "Month",
            classNames: resolvedClassNames,
            styles: resolvedStyles,
            unstyled,
            "data-mantine-stop-propagation": __stopPropagation || void 0,
            renderDay,
            date,
            size,
            weekend: ctx.getWeekendDays(weekendDays).includes(date.getDay()),
            outside,
            hidden: hideOutsideDates ? outside : false,
            "aria-label": ariaLabel,
            static: isStatic,
            disabled: excludeDate?.(date) || !isBeforeMaxDate(date, maxDate) || !isAfterMinDate(date, minDate),
            ref: (node) => __getDayRef?.(rowIndex, cellIndex, node),
            ...dayProps,
            onKeyDown: (event) => {
              dayProps?.onKeyDown?.(event);
              __onDayKeyDown?.(event, { rowIndex, cellIndex, date });
            },
            onMouseEnter: (event) => {
              dayProps?.onMouseEnter?.(event);
              __onDayMouseEnter?.(event, date);
            },
            onClick: (event) => {
              dayProps?.onClick?.(event);
              __onDayClick?.(event, date);
            },
            onMouseDown: (event) => {
              dayProps?.onMouseDown?.(event);
              __preventFocus && event.preventDefault();
            },
            tabIndex: __preventFocus || !isDateInTabOrder ? -1 : 0
          }
        )
      );
    });
    return /* @__PURE__ */ import_react6.default.createElement("tr", { key: rowIndex, ...getStyles("monthRow") }, cells);
  });
  return /* @__PURE__ */ import_react6.default.createElement(Box, { component: "table", ...getStyles("month"), size, ref, ...others }, !hideWeekdays && /* @__PURE__ */ import_react6.default.createElement("thead", { ...getStyles("monthThead") }, /* @__PURE__ */ import_react6.default.createElement(
    WeekdaysRow,
    {
      __staticSelector: __staticSelector || "Month",
      locale,
      firstDayOfWeek,
      weekdayFormat,
      size,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      unstyled
    }
  )), /* @__PURE__ */ import_react6.default.createElement("tbody", { ...getStyles("monthTbody") }, rows));
});
Month.classes = classes3;
Month.displayName = "@mantine/dates/Month";

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/PickerControl/PickerControl.mjs
var import_react7 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/PickerControl/PickerControl.module.css.mjs
"use client";
var classes4 = { "pickerControl": "m-dc6a3c71" };

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/PickerControl/PickerControl.mjs
"use client";
var defaultProps4 = {};
var varsResolver3 = createVarsResolver((_, { size }) => ({
  pickerControl: {
    "--dpc-fz": getFontSize(size),
    "--dpc-size": getSize(size, "dpc-size")
  }
}));
var PickerControl = factory((_props, ref) => {
  const props = useProps("PickerControl", defaultProps4, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    firstInRange,
    lastInRange,
    inRange,
    __staticSelector,
    selected,
    disabled,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "PickerControl",
    classes: classes4,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver3,
    rootSelector: "pickerControl"
  });
  return /* @__PURE__ */ import_react7.default.createElement(
    UnstyledButton,
    {
      ...getStyles("pickerControl"),
      ref,
      unstyled,
      "data-picker-control": true,
      "data-selected": selected && !disabled || void 0,
      "data-disabled": disabled || void 0,
      "data-in-range": inRange && !disabled && !selected || void 0,
      "data-first-in-range": firstInRange && !disabled || void 0,
      "data-last-in-range": lastInRange && !disabled || void 0,
      disabled,
      ...others
    }
  );
});
PickerControl.classes = classes4;
PickerControl.displayName = "@mantine/dates/PickerControl";

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/YearsList/YearsList.mjs
var import_dayjs12 = __toESM(require_dayjs_min(), 1);
var import_react8 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/YearsList/get-year-in-tab-order/get-year-in-tab-order.mjs
var import_dayjs11 = __toESM(require_dayjs_min(), 1);

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/YearsList/is-year-disabled/is-year-disabled.mjs
var import_dayjs10 = __toESM(require_dayjs_min(), 1);
"use client";
function isYearDisabled(year, minDate, maxDate) {
  if (!minDate && !maxDate) {
    return false;
  }
  if (minDate && (0, import_dayjs10.default)(year).isBefore(minDate, "year")) {
    return true;
  }
  if (maxDate && (0, import_dayjs10.default)(year).isAfter(maxDate, "year")) {
    return true;
  }
  return false;
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/YearsList/get-year-in-tab-order/get-year-in-tab-order.mjs
"use client";
function getYearInTabOrder(years, minDate, maxDate, getYearControlProps) {
  const enabledYears = years.flat().filter(
    (year) => !isYearDisabled(year, minDate, maxDate) && !getYearControlProps?.(year)?.disabled
  );
  const selectedYear = enabledYears.find((year) => getYearControlProps?.(year)?.selected);
  if (selectedYear) {
    return selectedYear;
  }
  const currentYear = enabledYears.find((year) => (0, import_dayjs11.default)().isSame(year, "year"));
  if (currentYear) {
    return currentYear;
  }
  return enabledYears[0];
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/YearsList/get-years-data/get-years-data.mjs
"use client";
function getYearsData(decade) {
  const year = decade.getFullYear();
  const rounded = year - year % 10;
  let currentYearIndex = 0;
  const results = [[], [], [], []];
  for (let i = 0; i < 4; i += 1) {
    const max = i === 3 ? 1 : 3;
    for (let j = 0; j < max; j += 1) {
      results[i].push(new Date(rounded + currentYearIndex, 0));
      currentYearIndex += 1;
    }
  }
  return results;
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/YearsList/YearsList.module.css.mjs
"use client";
var classes5 = { "yearsList": "m-9206547b", "yearsListCell": "m-c5a19c7d" };

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/YearsList/YearsList.mjs
"use client";
var defaultProps5 = {
  yearsListFormat: "YYYY",
  withCellSpacing: true
};
var YearsList = factory((_props, ref) => {
  const props = useProps("YearsList", defaultProps5, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    decade,
    yearsListFormat,
    locale,
    minDate,
    maxDate,
    getYearControlProps,
    __staticSelector,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing,
    size,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "YearsList",
    classes: classes5,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: "yearsList"
  });
  const ctx = useDatesContext();
  const years = getYearsData(decade);
  const yearInTabOrder = getYearInTabOrder(years, minDate, maxDate, getYearControlProps);
  const rows = years.map((yearsRow, rowIndex) => {
    const cells = yearsRow.map((year, cellIndex) => {
      const controlProps = getYearControlProps?.(year);
      const isYearInTabOrder = (0, import_dayjs12.default)(year).isSame(yearInTabOrder, "year");
      return /* @__PURE__ */ import_react8.default.createElement(
        "td",
        {
          key: cellIndex,
          ...getStyles("yearsListCell"),
          "data-with-spacing": withCellSpacing || void 0
        },
        /* @__PURE__ */ import_react8.default.createElement(
          PickerControl,
          {
            ...getStyles("yearsListControl"),
            size,
            unstyled,
            "data-mantine-stop-propagation": __stopPropagation || void 0,
            disabled: isYearDisabled(year, minDate, maxDate),
            ref: (node) => __getControlRef?.(rowIndex, cellIndex, node),
            ...controlProps,
            onKeyDown: (event) => {
              controlProps?.onKeyDown?.(event);
              __onControlKeyDown?.(event, { rowIndex, cellIndex, date: year });
            },
            onClick: (event) => {
              controlProps?.onClick?.(event);
              __onControlClick?.(event, year);
            },
            onMouseEnter: (event) => {
              controlProps?.onMouseEnter?.(event);
              __onControlMouseEnter?.(event, year);
            },
            onMouseDown: (event) => {
              controlProps?.onMouseDown?.(event);
              __preventFocus && event.preventDefault();
            },
            tabIndex: __preventFocus || !isYearInTabOrder ? -1 : 0
          },
          (0, import_dayjs12.default)(year).locale(ctx.getLocale(locale)).format(yearsListFormat)
        )
      );
    });
    return /* @__PURE__ */ import_react8.default.createElement("tr", { key: rowIndex, ...getStyles("yearsListRow") }, cells);
  });
  return /* @__PURE__ */ import_react8.default.createElement(Box, { component: "table", ref, size, ...getStyles("yearsList"), ...others }, /* @__PURE__ */ import_react8.default.createElement("tbody", null, rows));
});
YearsList.classes = classes5;
YearsList.displayName = "@mantine/dates/YearsList";

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/MonthsList/MonthsList.mjs
var import_dayjs16 = __toESM(require_dayjs_min(), 1);
var import_react9 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/MonthsList/get-month-in-tab-order/get-month-in-tab-order.mjs
var import_dayjs14 = __toESM(require_dayjs_min(), 1);

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/MonthsList/is-month-disabled/is-month-disabled.mjs
var import_dayjs13 = __toESM(require_dayjs_min(), 1);
"use client";
function isMonthDisabled(month, minDate, maxDate) {
  if (!minDate && !maxDate) {
    return false;
  }
  if (minDate && (0, import_dayjs13.default)(month).isBefore(minDate, "month")) {
    return true;
  }
  if (maxDate && (0, import_dayjs13.default)(month).isAfter(maxDate, "month")) {
    return true;
  }
  return false;
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/MonthsList/get-month-in-tab-order/get-month-in-tab-order.mjs
"use client";
function getMonthInTabOrder(months, minDate, maxDate, getMonthControlProps) {
  const enabledMonths = months.flat().filter(
    (month) => !isMonthDisabled(month, minDate, maxDate) && !getMonthControlProps?.(month)?.disabled
  );
  const selectedMonth = enabledMonths.find((month) => getMonthControlProps?.(month)?.selected);
  if (selectedMonth) {
    return selectedMonth;
  }
  const currentMonth = enabledMonths.find((month) => (0, import_dayjs14.default)().isSame(month, "month"));
  if (currentMonth) {
    return currentMonth;
  }
  return enabledMonths[0];
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/MonthsList/get-months-data/get-months-data.mjs
var import_dayjs15 = __toESM(require_dayjs_min(), 1);
"use client";
function getMonthsData(year) {
  const startOfYear = (0, import_dayjs15.default)(year).startOf("year").toDate();
  const results = [[], [], [], []];
  let currentMonthIndex = 0;
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      results[i].push((0, import_dayjs15.default)(startOfYear).add(currentMonthIndex, "months").toDate());
      currentMonthIndex += 1;
    }
  }
  return results;
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/MonthsList/MonthsList.module.css.mjs
"use client";
var classes6 = { "monthsList": "m-2a6c32d", "monthsListCell": "m-fe27622f" };

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/MonthsList/MonthsList.mjs
"use client";
var defaultProps6 = {
  monthsListFormat: "MMM",
  withCellSpacing: true
};
var MonthsList = factory((_props, ref) => {
  const props = useProps("MonthsList", defaultProps6, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    year,
    monthsListFormat,
    locale,
    minDate,
    maxDate,
    getMonthControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing,
    size,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "MonthsList",
    classes: classes6,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: "monthsList"
  });
  const ctx = useDatesContext();
  const months = getMonthsData(year);
  const monthInTabOrder = getMonthInTabOrder(months, minDate, maxDate, getMonthControlProps);
  const rows = months.map((monthsRow, rowIndex) => {
    const cells = monthsRow.map((month, cellIndex) => {
      const controlProps = getMonthControlProps?.(month);
      const isMonthInTabOrder = (0, import_dayjs16.default)(month).isSame(monthInTabOrder, "month");
      return /* @__PURE__ */ import_react9.default.createElement(
        "td",
        {
          key: cellIndex,
          ...getStyles("monthsListCell"),
          "data-with-spacing": withCellSpacing || void 0
        },
        /* @__PURE__ */ import_react9.default.createElement(
          PickerControl,
          {
            ...getStyles("monthsListControl"),
            size,
            unstyled,
            __staticSelector: __staticSelector || "MonthsList",
            "data-mantine-stop-propagation": __stopPropagation || void 0,
            disabled: isMonthDisabled(month, minDate, maxDate),
            ref: (node) => __getControlRef?.(rowIndex, cellIndex, node),
            ...controlProps,
            onKeyDown: (event) => {
              controlProps?.onKeyDown?.(event);
              __onControlKeyDown?.(event, { rowIndex, cellIndex, date: month });
            },
            onClick: (event) => {
              controlProps?.onClick?.(event);
              __onControlClick?.(event, month);
            },
            onMouseEnter: (event) => {
              controlProps?.onMouseEnter?.(event);
              __onControlMouseEnter?.(event, month);
            },
            onMouseDown: (event) => {
              controlProps?.onMouseDown?.(event);
              __preventFocus && event.preventDefault();
            },
            tabIndex: __preventFocus || !isMonthInTabOrder ? -1 : 0
          },
          (0, import_dayjs16.default)(month).locale(ctx.getLocale(locale)).format(monthsListFormat)
        )
      );
    });
    return /* @__PURE__ */ import_react9.default.createElement("tr", { key: rowIndex, ...getStyles("monthsListRow") }, cells);
  });
  return /* @__PURE__ */ import_react9.default.createElement(Box, { component: "table", ref, size, ...getStyles("monthsList"), ...others }, /* @__PURE__ */ import_react9.default.createElement("tbody", null, rows));
});
MonthsList.classes = classes6;
MonthsList.displayName = "@mantine/dates/MonthsList";

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/CalendarHeader/CalendarHeader.mjs
var import_react10 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/CalendarHeader/CalendarHeader.module.css.mjs
"use client";
var classes7 = { "calendarHeader": "m-730a79ed", "calendarHeaderLevel": "m-f6645d97", "calendarHeaderControl": "m-2351eeb0", "calendarHeaderControlIcon": "m-367dc749" };

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/CalendarHeader/CalendarHeader.mjs
"use client";
var defaultProps7 = {
  nextDisabled: false,
  previousDisabled: false,
  hasNextLevel: true,
  withNext: true,
  withPrevious: true
};
var varsResolver4 = createVarsResolver((_, { size }) => ({
  calendarHeader: {
    "--dch-control-size": getSize(size, "dch-control-size"),
    "--dch-fz": getFontSize(size)
  }
}));
var CalendarHeader = factory((_props, ref) => {
  const props = useProps("CalendarHeader", defaultProps7, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    label,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    __staticSelector,
    __preventFocus,
    __stopPropagation,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "CalendarHeader",
    classes: classes7,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver4,
    rootSelector: "calendarHeader"
  });
  const preventFocus = __preventFocus ? (event) => event.preventDefault() : void 0;
  return /* @__PURE__ */ import_react10.default.createElement(Box, { ...getStyles("calendarHeader"), ref, ...others }, withPrevious && /* @__PURE__ */ import_react10.default.createElement(
    UnstyledButton,
    {
      ...getStyles("calendarHeaderControl"),
      "data-direction": "previous",
      "aria-label": previousLabel,
      onClick: onPrevious,
      unstyled,
      onMouseDown: preventFocus,
      disabled: previousDisabled,
      "data-disabled": previousDisabled || void 0,
      tabIndex: __preventFocus || previousDisabled ? -1 : 0,
      "data-mantine-stop-propagation": __stopPropagation || void 0
    },
    previousIcon || /* @__PURE__ */ import_react10.default.createElement(
      AccordionChevron,
      {
        ...getStyles("calendarHeaderControlIcon"),
        "data-direction": "previous",
        size: "45%"
      }
    )
  ), /* @__PURE__ */ import_react10.default.createElement(
    UnstyledButton,
    {
      component: hasNextLevel ? "button" : "div",
      ...getStyles("calendarHeaderLevel"),
      onClick: hasNextLevel ? onLevelClick : void 0,
      unstyled,
      onMouseDown: hasNextLevel ? preventFocus : void 0,
      disabled: !hasNextLevel,
      "data-static": !hasNextLevel || void 0,
      "aria-label": levelControlAriaLabel,
      tabIndex: __preventFocus || !hasNextLevel ? -1 : 0,
      "data-mantine-stop-propagation": __stopPropagation || void 0
    },
    label
  ), withNext && /* @__PURE__ */ import_react10.default.createElement(
    UnstyledButton,
    {
      ...getStyles("calendarHeaderControl"),
      "data-direction": "next",
      "aria-label": nextLabel,
      onClick: onNext,
      unstyled,
      onMouseDown: preventFocus,
      disabled: nextDisabled,
      "data-disabled": nextDisabled || void 0,
      tabIndex: __preventFocus || nextDisabled ? -1 : 0,
      "data-mantine-stop-propagation": __stopPropagation || void 0
    },
    nextIcon || /* @__PURE__ */ import_react10.default.createElement(
      AccordionChevron,
      {
        ...getStyles("calendarHeaderControlIcon"),
        "data-direction": "next",
        size: "45%"
      }
    )
  ));
});
CalendarHeader.classes = classes7;
CalendarHeader.displayName = "@mantine/dates/CalendarHeader";

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/DecadeLevel/DecadeLevel.mjs
var import_dayjs17 = __toESM(require_dayjs_min(), 1);
var import_react11 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/DecadeLevel/get-decade-range/get-decade-range.mjs
"use client";
function getDecadeRange(decade) {
  const years = getYearsData(decade);
  return [years[0][0], years[3][0]];
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/DecadeLevel/DecadeLevel.mjs
"use client";
var defaultProps8 = {
  decadeLabelFormat: "YYYY"
};
var DecadeLevel = factory((_props, ref) => {
  const props = useProps("DecadeLevel", defaultProps8, _props);
  const {
    // YearsList settings
    decade,
    locale,
    minDate,
    maxDate,
    yearsListFormat,
    getYearControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
    // CalendarHeader settings
    __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    nextDisabled,
    previousDisabled,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    // Other props
    decadeLabelFormat,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    size,
    ...others
  } = props;
  const ctx = useDatesContext();
  const [startOfDecade, endOfDecade] = getDecadeRange(decade);
  const stylesApiProps = {
    __staticSelector: __staticSelector || "DecadeLevel",
    classNames,
    styles,
    unstyled,
    size
  };
  const _nextDisabled = typeof nextDisabled === "boolean" ? nextDisabled : maxDate ? !(0, import_dayjs17.default)(endOfDecade).endOf("year").isBefore(maxDate) : false;
  const _previousDisabled = typeof previousDisabled === "boolean" ? previousDisabled : minDate ? !(0, import_dayjs17.default)(startOfDecade).startOf("year").isAfter(minDate) : false;
  const formatDecade = (date, format) => (0, import_dayjs17.default)(date).locale(locale || ctx.locale).format(format);
  return /* @__PURE__ */ import_react11.default.createElement(Box, { "data-decade-level": true, size, ref, ...others }, /* @__PURE__ */ import_react11.default.createElement(
    CalendarHeader,
    {
      label: typeof decadeLabelFormat === "function" ? decadeLabelFormat(startOfDecade, endOfDecade) : `${formatDecade(startOfDecade, decadeLabelFormat)} \u2013 ${formatDecade(
        endOfDecade,
        decadeLabelFormat
      )}`,
      __preventFocus,
      __stopPropagation,
      nextIcon,
      previousIcon,
      nextLabel,
      previousLabel,
      onNext,
      onPrevious,
      nextDisabled: _nextDisabled,
      previousDisabled: _previousDisabled,
      hasNextLevel: false,
      levelControlAriaLabel,
      withNext,
      withPrevious,
      ...stylesApiProps
    }
  ), /* @__PURE__ */ import_react11.default.createElement(
    YearsList,
    {
      decade,
      locale,
      minDate,
      maxDate,
      yearsListFormat,
      getYearControlProps,
      __getControlRef,
      __onControlKeyDown,
      __onControlClick,
      __onControlMouseEnter,
      __preventFocus,
      __stopPropagation,
      withCellSpacing,
      ...stylesApiProps
    }
  ));
});
DecadeLevel.classes = { ...YearsList.classes, ...CalendarHeader.classes };
DecadeLevel.displayName = "@mantine/dates/DecadeLevel";

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/YearLevel/YearLevel.mjs
var import_dayjs18 = __toESM(require_dayjs_min(), 1);
var import_react12 = __toESM(require_react(), 1);
"use client";
var defaultProps9 = {
  yearLabelFormat: "YYYY"
};
var YearLevel = factory((_props, ref) => {
  const props = useProps("YearLevel", defaultProps9, _props);
  const {
    // MonthsList settings
    year,
    locale,
    minDate,
    maxDate,
    monthsListFormat,
    getMonthControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
    // CalendarHeader settings
    __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    // Other props
    yearLabelFormat,
    __staticSelector,
    __stopPropagation,
    size,
    classNames,
    styles,
    unstyled,
    ...others
  } = props;
  const ctx = useDatesContext();
  const stylesApiProps = {
    __staticSelector: __staticSelector || "YearLevel",
    classNames,
    styles,
    unstyled,
    size
  };
  const _nextDisabled = typeof nextDisabled === "boolean" ? nextDisabled : maxDate ? !(0, import_dayjs18.default)(year).endOf("year").isBefore(maxDate) : false;
  const _previousDisabled = typeof previousDisabled === "boolean" ? previousDisabled : minDate ? !(0, import_dayjs18.default)(year).startOf("year").isAfter(minDate) : false;
  return /* @__PURE__ */ import_react12.default.createElement(Box, { "data-year-level": true, size, ref, ...others }, /* @__PURE__ */ import_react12.default.createElement(
    CalendarHeader,
    {
      label: typeof yearLabelFormat === "function" ? yearLabelFormat(year) : (0, import_dayjs18.default)(year).locale(locale || ctx.locale).format(yearLabelFormat),
      __preventFocus,
      __stopPropagation,
      nextIcon,
      previousIcon,
      nextLabel,
      previousLabel,
      onNext,
      onPrevious,
      onLevelClick,
      nextDisabled: _nextDisabled,
      previousDisabled: _previousDisabled,
      hasNextLevel,
      levelControlAriaLabel,
      withNext,
      withPrevious,
      ...stylesApiProps
    }
  ), /* @__PURE__ */ import_react12.default.createElement(
    MonthsList,
    {
      year,
      locale,
      minDate,
      maxDate,
      monthsListFormat,
      getMonthControlProps,
      __getControlRef,
      __onControlKeyDown,
      __onControlClick,
      __onControlMouseEnter,
      __preventFocus,
      __stopPropagation,
      withCellSpacing,
      ...stylesApiProps
    }
  ));
});
YearLevel.classes = { ...CalendarHeader.classes, ...MonthsList.classes };
YearLevel.displayName = "@mantine/dates/YearLevel";

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/MonthLevel/MonthLevel.mjs
var import_dayjs19 = __toESM(require_dayjs_min(), 1);
var import_react13 = __toESM(require_react(), 1);
"use client";
var defaultProps10 = {
  monthLabelFormat: "MMMM YYYY"
};
var MonthLevel = factory((_props, ref) => {
  const props = useProps("MonthLevel", defaultProps10, _props);
  const {
    // Month settings
    month,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    __getDayRef,
    __onDayKeyDown,
    __onDayClick,
    __onDayMouseEnter,
    withCellSpacing,
    // CalendarHeader settings
    __preventFocus,
    __stopPropagation,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    // Other props
    monthLabelFormat,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    size,
    static: isStatic,
    ...others
  } = props;
  const ctx = useDatesContext();
  const stylesApiProps = {
    __staticSelector: __staticSelector || "MonthLevel",
    classNames,
    styles,
    unstyled,
    size
  };
  const _nextDisabled = typeof nextDisabled === "boolean" ? nextDisabled : maxDate ? !(0, import_dayjs19.default)(month).endOf("month").isBefore(maxDate) : false;
  const _previousDisabled = typeof previousDisabled === "boolean" ? previousDisabled : minDate ? !(0, import_dayjs19.default)(month).startOf("month").isAfter(minDate) : false;
  return /* @__PURE__ */ import_react13.default.createElement(Box, { "data-month-level": true, size, ref, ...others }, /* @__PURE__ */ import_react13.default.createElement(
    CalendarHeader,
    {
      label: typeof monthLabelFormat === "function" ? monthLabelFormat(month) : (0, import_dayjs19.default)(month).locale(locale || ctx.locale).format(monthLabelFormat),
      __preventFocus,
      __stopPropagation,
      nextIcon,
      previousIcon,
      nextLabel,
      previousLabel,
      onNext,
      onPrevious,
      onLevelClick,
      nextDisabled: _nextDisabled,
      previousDisabled: _previousDisabled,
      hasNextLevel,
      levelControlAriaLabel,
      withNext,
      withPrevious,
      ...stylesApiProps
    }
  ), /* @__PURE__ */ import_react13.default.createElement(
    Month,
    {
      month,
      locale,
      firstDayOfWeek,
      weekdayFormat,
      weekendDays,
      getDayProps,
      excludeDate,
      minDate,
      maxDate,
      renderDay,
      hideOutsideDates,
      hideWeekdays,
      getDayAriaLabel,
      __getDayRef,
      __onDayKeyDown,
      __onDayClick,
      __onDayMouseEnter,
      __preventFocus,
      __stopPropagation,
      static: isStatic,
      withCellSpacing,
      ...stylesApiProps
    }
  ));
});
MonthLevel.classes = { ...Month.classes, ...CalendarHeader.classes };
MonthLevel.displayName = "@mantine/dates/MonthLevel";

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/LevelsGroup/LevelsGroup.mjs
var import_react14 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/LevelsGroup/LevelsGroup.module.css.mjs
"use client";
var classes8 = { "levelsGroup": "m-30b26e33" };

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/LevelsGroup/LevelsGroup.mjs
"use client";
var defaultProps11 = {};
var LevelsGroup = factory((_props, ref) => {
  const props = useProps("LevelsGroup", defaultProps11, _props);
  const { classNames, className, style, styles, unstyled, vars, __staticSelector, ...others } = props;
  const getStyles = useStyles({
    name: __staticSelector || "LevelsGroup",
    classes: classes8,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: "levelsGroup"
  });
  return /* @__PURE__ */ import_react14.default.createElement(Box, { ref, ...getStyles("levelsGroup"), ...others });
});
LevelsGroup.classes = classes8;
LevelsGroup.displayName = "@mantine/dates/LevelsGroup";

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/DecadeLevelGroup/DecadeLevelGroup.mjs
var import_dayjs20 = __toESM(require_dayjs_min(), 1);
var import_react15 = __toESM(require_react(), 1);
"use client";
var defaultProps12 = {
  numberOfColumns: 1
};
var DecadeLevelGroup = factory((_props, ref) => {
  const props = useProps("DecadeLevelGroup", defaultProps12, _props);
  const {
    // DecadeLevel settings
    decade,
    locale,
    minDate,
    maxDate,
    yearsListFormat,
    getYearControlProps,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
    // CalendarHeader settings
    __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    nextDisabled,
    previousDisabled,
    // Other settings
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    numberOfColumns,
    levelControlAriaLabel,
    decadeLabelFormat,
    size,
    vars,
    ...others
  } = props;
  const controlsRef = (0, import_react15.useRef)([]);
  const decades = Array(numberOfColumns).fill(0).map((_, decadeIndex) => {
    const currentDecade = (0, import_dayjs20.default)(decade).add(decadeIndex * 10, "years").toDate();
    return /* @__PURE__ */ import_react15.default.createElement(
      DecadeLevel,
      {
        key: decadeIndex,
        size,
        yearsListFormat,
        decade: currentDecade,
        withNext: decadeIndex === numberOfColumns - 1,
        withPrevious: decadeIndex === 0,
        decadeLabelFormat,
        __onControlClick,
        __onControlMouseEnter,
        __onControlKeyDown: (event, payload) => handleControlKeyDown({
          levelIndex: decadeIndex,
          rowIndex: payload.rowIndex,
          cellIndex: payload.cellIndex,
          event,
          controlsRef
        }),
        __getControlRef: (rowIndex, cellIndex, node) => {
          if (!Array.isArray(controlsRef.current[decadeIndex])) {
            controlsRef.current[decadeIndex] = [];
          }
          if (!Array.isArray(controlsRef.current[decadeIndex][rowIndex])) {
            controlsRef.current[decadeIndex][rowIndex] = [];
          }
          controlsRef.current[decadeIndex][rowIndex][cellIndex] = node;
        },
        levelControlAriaLabel: typeof levelControlAriaLabel === "function" ? levelControlAriaLabel(currentDecade) : levelControlAriaLabel,
        locale,
        minDate,
        maxDate,
        __preventFocus,
        __stopPropagation,
        nextIcon,
        previousIcon,
        nextLabel,
        previousLabel,
        onNext,
        onPrevious,
        nextDisabled,
        previousDisabled,
        getYearControlProps,
        __staticSelector: __staticSelector || "DecadeLevelGroup",
        classNames,
        styles,
        unstyled,
        withCellSpacing
      }
    );
  });
  return /* @__PURE__ */ import_react15.default.createElement(
    LevelsGroup,
    {
      classNames,
      styles,
      __staticSelector: __staticSelector || "DecadeLevelGroup",
      ref,
      size,
      unstyled,
      ...others
    },
    decades
  );
});
DecadeLevelGroup.classes = { ...LevelsGroup.classes, ...DecadeLevel.classes };
DecadeLevelGroup.displayName = "@mantine/dates/DecadeLevelGroup";

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/YearLevelGroup/YearLevelGroup.mjs
var import_dayjs21 = __toESM(require_dayjs_min(), 1);
var import_react16 = __toESM(require_react(), 1);
"use client";
var defaultProps13 = {
  numberOfColumns: 1
};
var YearLevelGroup = factory((_props, ref) => {
  const props = useProps("YearLevelGroup", defaultProps13, _props);
  const {
    // YearLevel settings
    year,
    locale,
    minDate,
    maxDate,
    monthsListFormat,
    getMonthControlProps,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
    // CalendarHeader settings
    __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    // Other settings
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    numberOfColumns,
    levelControlAriaLabel,
    yearLabelFormat,
    size,
    vars,
    ...others
  } = props;
  const controlsRef = (0, import_react16.useRef)([]);
  const years = Array(numberOfColumns).fill(0).map((_, yearIndex) => {
    const currentYear = (0, import_dayjs21.default)(year).add(yearIndex, "years").toDate();
    return /* @__PURE__ */ import_react16.default.createElement(
      YearLevel,
      {
        key: yearIndex,
        size,
        monthsListFormat,
        year: currentYear,
        withNext: yearIndex === numberOfColumns - 1,
        withPrevious: yearIndex === 0,
        yearLabelFormat,
        __stopPropagation,
        __onControlClick,
        __onControlMouseEnter,
        __onControlKeyDown: (event, payload) => handleControlKeyDown({
          levelIndex: yearIndex,
          rowIndex: payload.rowIndex,
          cellIndex: payload.cellIndex,
          event,
          controlsRef
        }),
        __getControlRef: (rowIndex, cellIndex, node) => {
          if (!Array.isArray(controlsRef.current[yearIndex])) {
            controlsRef.current[yearIndex] = [];
          }
          if (!Array.isArray(controlsRef.current[yearIndex][rowIndex])) {
            controlsRef.current[yearIndex][rowIndex] = [];
          }
          controlsRef.current[yearIndex][rowIndex][cellIndex] = node;
        },
        levelControlAriaLabel: typeof levelControlAriaLabel === "function" ? levelControlAriaLabel(currentYear) : levelControlAriaLabel,
        locale,
        minDate,
        maxDate,
        __preventFocus,
        nextIcon,
        previousIcon,
        nextLabel,
        previousLabel,
        onNext,
        onPrevious,
        onLevelClick,
        nextDisabled,
        previousDisabled,
        hasNextLevel,
        getMonthControlProps,
        classNames,
        styles,
        unstyled,
        __staticSelector: __staticSelector || "YearLevelGroup",
        withCellSpacing
      }
    );
  });
  return /* @__PURE__ */ import_react16.default.createElement(
    LevelsGroup,
    {
      classNames,
      styles,
      __staticSelector: __staticSelector || "YearLevelGroup",
      ref,
      size,
      unstyled,
      ...others
    },
    years
  );
});
YearLevelGroup.classes = { ...YearLevel.classes, ...LevelsGroup.classes };
YearLevelGroup.displayName = "@mantine/dates/YearLevelGroup";

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/MonthLevelGroup/MonthLevelGroup.mjs
var import_dayjs22 = __toESM(require_dayjs_min(), 1);
var import_react17 = __toESM(require_react(), 1);
"use client";
var defaultProps14 = {
  numberOfColumns: 1
};
var MonthLevelGroup = factory((_props, ref) => {
  const props = useProps("MonthLevelGroup", defaultProps14, _props);
  const {
    // Month settings
    month,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    __onDayClick,
    __onDayMouseEnter,
    withCellSpacing,
    // CalendarHeader settings
    __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    // Other settings
    classNames,
    styles,
    unstyled,
    numberOfColumns,
    levelControlAriaLabel,
    monthLabelFormat,
    __staticSelector,
    __stopPropagation,
    size,
    static: isStatic,
    vars,
    ...others
  } = props;
  const daysRefs = (0, import_react17.useRef)([]);
  const months = Array(numberOfColumns).fill(0).map((_, monthIndex) => {
    const currentMonth = (0, import_dayjs22.default)(month).add(monthIndex, "months").toDate();
    return /* @__PURE__ */ import_react17.default.createElement(
      MonthLevel,
      {
        key: monthIndex,
        month: currentMonth,
        withNext: monthIndex === numberOfColumns - 1,
        withPrevious: monthIndex === 0,
        monthLabelFormat,
        __stopPropagation,
        __onDayClick,
        __onDayMouseEnter,
        __onDayKeyDown: (event, payload) => handleControlKeyDown({
          levelIndex: monthIndex,
          rowIndex: payload.rowIndex,
          cellIndex: payload.cellIndex,
          event,
          controlsRef: daysRefs
        }),
        __getDayRef: (rowIndex, cellIndex, node) => {
          if (!Array.isArray(daysRefs.current[monthIndex])) {
            daysRefs.current[monthIndex] = [];
          }
          if (!Array.isArray(daysRefs.current[monthIndex][rowIndex])) {
            daysRefs.current[monthIndex][rowIndex] = [];
          }
          daysRefs.current[monthIndex][rowIndex][cellIndex] = node;
        },
        levelControlAriaLabel: typeof levelControlAriaLabel === "function" ? levelControlAriaLabel(currentMonth) : levelControlAriaLabel,
        locale,
        firstDayOfWeek,
        weekdayFormat,
        weekendDays,
        getDayProps,
        excludeDate,
        minDate,
        maxDate,
        renderDay,
        hideOutsideDates,
        hideWeekdays,
        getDayAriaLabel,
        __preventFocus,
        nextIcon,
        previousIcon,
        nextLabel,
        previousLabel,
        onNext,
        onPrevious,
        onLevelClick,
        nextDisabled,
        previousDisabled,
        hasNextLevel,
        classNames,
        styles,
        unstyled,
        __staticSelector: __staticSelector || "MonthLevelGroup",
        size,
        static: isStatic,
        withCellSpacing
      }
    );
  });
  return /* @__PURE__ */ import_react17.default.createElement(
    LevelsGroup,
    {
      classNames,
      styles,
      __staticSelector: __staticSelector || "MonthLevelGroup",
      ref,
      size,
      ...others
    },
    months
  );
});
MonthLevelGroup.classes = { ...LevelsGroup.classes, ...MonthLevel.classes };
MonthLevelGroup.displayName = "@mantine/dates/MonthLevelGroup";

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/Calendar/Calendar.mjs
var import_dayjs24 = __toESM(require_dayjs_min(), 1);
var import_react19 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/hooks/use-uncontrolled-dates/use-uncontrolled-dates.mjs
var import_react18 = __toESM(require_react(), 1);
var import_dayjs23 = __toESM(require_dayjs_min(), 1);
"use client";
var getEmptyValue = (type) => type === "range" ? [null, null] : type === "multiple" ? [] : null;
function useUncontrolledDates({
  type,
  value,
  defaultValue,
  onChange,
  applyTimezone = true
}) {
  const storedType = (0, import_react18.useRef)(type);
  const ctx = useDatesContext();
  const [_value, _setValue, controlled] = useUncontrolled({
    value: shiftTimezone("add", value, ctx.getTimezone(), !applyTimezone),
    defaultValue: shiftTimezone("add", defaultValue, ctx.getTimezone(), !applyTimezone),
    finalValue: getEmptyValue(type),
    onChange: (newDate) => {
      onChange?.(shiftTimezone("remove", newDate, ctx.getTimezone(), !applyTimezone));
    }
  });
  let _finalValue = _value;
  if (storedType.current !== type) {
    storedType.current = type;
    if (value === void 0) {
      _finalValue = defaultValue !== void 0 ? defaultValue : getEmptyValue(type);
      _setValue(_finalValue);
    } else if (true) {
      switch (type) {
        case "default":
          if (value !== null && typeof value !== "string") {
            console.error(
              "[@mantine/dates/use-uncontrolled-dates] Value must be type of `null` or `string`"
            );
          }
          break;
        case "multiple":
          if (!(value instanceof Array)) {
            console.error(
              "[@mantine/dates/use-uncontrolled-dates] Value must be type of `string[]`"
            );
          }
          break;
        case "range":
          if (!(value instanceof Array) || value.length !== 2) {
            console.error(
              "[@mantine/dates/use-uncontrolled-dates] Value must be type of `[string, string]`"
            );
          }
          break;
      }
    }
  }
  return [_finalValue, _setValue, controlled];
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/Calendar/clamp-level/clamp-level.mjs
"use client";
function levelToNumber(level, fallback) {
  if (!level) {
    return fallback || 0;
  }
  return level === "month" ? 0 : level === "year" ? 1 : 2;
}
function levelNumberToLevel(levelNumber) {
  return levelNumber === 0 ? "month" : levelNumber === 1 ? "year" : "decade";
}
function clampLevel(level, minLevel, maxLevel) {
  return levelNumberToLevel(
    clamp(
      levelToNumber(level, 0),
      levelToNumber(minLevel, 0),
      levelToNumber(maxLevel, 2)
    )
  );
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/Calendar/Calendar.mjs
"use client";
var defaultProps15 = {
  maxLevel: "decade",
  minLevel: "month",
  __updateDateOnYearSelect: true,
  __updateDateOnMonthSelect: true
};
var Calendar = factory((_props, ref) => {
  const props = useProps("Calendar", defaultProps15, _props);
  const {
    vars,
    // CalendarLevel props
    maxLevel,
    minLevel,
    defaultLevel,
    level,
    onLevelChange,
    date,
    defaultDate,
    onDateChange,
    numberOfColumns,
    columnsToScroll,
    ariaLabels,
    onYearSelect,
    onMonthSelect,
    onYearMouseEnter,
    onMonthMouseEnter,
    __updateDateOnYearSelect,
    __updateDateOnMonthSelect,
    // MonthLevelGroup props
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    monthLabelFormat,
    nextIcon,
    previousIcon,
    __onDayClick,
    __onDayMouseEnter,
    withCellSpacing,
    // YearLevelGroup props
    monthsListFormat,
    getMonthControlProps,
    yearLabelFormat,
    // DecadeLevelGroup props
    yearsListFormat,
    getYearControlProps,
    decadeLabelFormat,
    // Other props
    classNames,
    styles,
    unstyled,
    minDate,
    maxDate,
    locale,
    __staticSelector,
    size,
    __preventFocus,
    __stopPropagation,
    onNextDecade,
    onPreviousDecade,
    onNextYear,
    onPreviousYear,
    onNextMonth,
    onPreviousMonth,
    static: isStatic,
    __timezoneApplied,
    ...others
  } = props;
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const [_level, setLevel] = useUncontrolled({
    value: level ? clampLevel(level, minLevel, maxLevel) : void 0,
    defaultValue: defaultLevel ? clampLevel(defaultLevel, minLevel, maxLevel) : void 0,
    finalValue: clampLevel(void 0, minLevel, maxLevel),
    onChange: onLevelChange
  });
  const [_date, setDate] = useUncontrolledDates({
    type: "default",
    value: date,
    defaultValue: defaultDate,
    onChange: onDateChange,
    applyTimezone: !__timezoneApplied
  });
  const stylesApiProps = {
    __staticSelector: __staticSelector || "Calendar",
    styles: resolvedStyles,
    classNames: resolvedClassNames,
    unstyled,
    size
  };
  const ctx = useDatesContext();
  const _columnsToScroll = columnsToScroll || numberOfColumns || 1;
  const currentDate = _date || shiftTimezone("add", /* @__PURE__ */ new Date(), ctx.getTimezone());
  const handleNextMonth = () => {
    const nextDate = (0, import_dayjs24.default)(currentDate).add(_columnsToScroll, "month").toDate();
    onNextMonth?.(nextDate);
    setDate(nextDate);
  };
  const handlePreviousMonth = () => {
    const nextDate = (0, import_dayjs24.default)(currentDate).subtract(_columnsToScroll, "month").toDate();
    onPreviousMonth?.(nextDate);
    setDate(nextDate);
  };
  const handleNextYear = () => {
    const nextDate = (0, import_dayjs24.default)(currentDate).add(_columnsToScroll, "year").toDate();
    onNextYear?.(nextDate);
    setDate(nextDate);
  };
  const handlePreviousYear = () => {
    const nextDate = (0, import_dayjs24.default)(currentDate).subtract(_columnsToScroll, "year").toDate();
    onPreviousYear?.(nextDate);
    setDate(nextDate);
  };
  const handleNextDecade = () => {
    const nextDate = (0, import_dayjs24.default)(currentDate).add(10 * _columnsToScroll, "year").toDate();
    onNextDecade?.(nextDate);
    setDate(nextDate);
  };
  const handlePreviousDecade = () => {
    const nextDate = (0, import_dayjs24.default)(currentDate).subtract(10 * _columnsToScroll, "year").toDate();
    onPreviousDecade?.(nextDate);
    setDate(nextDate);
  };
  return /* @__PURE__ */ import_react19.default.createElement(Box, { ref, size, "data-calendar": true, ...others }, _level === "month" && /* @__PURE__ */ import_react19.default.createElement(
    MonthLevelGroup,
    {
      month: currentDate,
      minDate,
      maxDate,
      firstDayOfWeek,
      weekdayFormat,
      weekendDays,
      getDayProps,
      excludeDate,
      renderDay,
      hideOutsideDates,
      hideWeekdays,
      getDayAriaLabel,
      onNext: handleNextMonth,
      onPrevious: handlePreviousMonth,
      hasNextLevel: maxLevel !== "month",
      onLevelClick: () => setLevel("year"),
      numberOfColumns,
      locale,
      levelControlAriaLabel: ariaLabels?.monthLevelControl,
      nextLabel: ariaLabels?.nextMonth,
      nextIcon,
      previousLabel: ariaLabels?.previousMonth,
      previousIcon,
      monthLabelFormat,
      __onDayClick,
      __onDayMouseEnter,
      __preventFocus,
      __stopPropagation,
      static: isStatic,
      withCellSpacing,
      ...stylesApiProps
    }
  ), _level === "year" && /* @__PURE__ */ import_react19.default.createElement(
    YearLevelGroup,
    {
      year: currentDate,
      numberOfColumns,
      minDate,
      maxDate,
      monthsListFormat,
      getMonthControlProps,
      locale,
      onNext: handleNextYear,
      onPrevious: handlePreviousYear,
      hasNextLevel: maxLevel !== "month" && maxLevel !== "year",
      onLevelClick: () => setLevel("decade"),
      levelControlAriaLabel: ariaLabels?.yearLevelControl,
      nextLabel: ariaLabels?.nextYear,
      nextIcon,
      previousLabel: ariaLabels?.previousYear,
      previousIcon,
      yearLabelFormat,
      __onControlMouseEnter: onMonthMouseEnter,
      __onControlClick: (_event, payload) => {
        __updateDateOnMonthSelect && setDate(payload);
        setLevel(clampLevel("month", minLevel, maxLevel));
        onMonthSelect?.(payload);
      },
      __preventFocus,
      __stopPropagation,
      withCellSpacing,
      ...stylesApiProps
    }
  ), _level === "decade" && /* @__PURE__ */ import_react19.default.createElement(
    DecadeLevelGroup,
    {
      decade: currentDate,
      minDate,
      maxDate,
      yearsListFormat,
      getYearControlProps,
      locale,
      onNext: handleNextDecade,
      onPrevious: handlePreviousDecade,
      numberOfColumns,
      nextLabel: ariaLabels?.nextDecade,
      nextIcon,
      previousLabel: ariaLabels?.previousDecade,
      previousIcon,
      decadeLabelFormat,
      __onControlMouseEnter: onYearMouseEnter,
      __onControlClick: (_event, payload) => {
        __updateDateOnYearSelect && setDate(payload);
        setLevel(clampLevel("year", minLevel, maxLevel));
        onYearSelect?.(payload);
      },
      __preventFocus,
      __stopPropagation,
      withCellSpacing,
      ...stylesApiProps
    }
  ));
});
Calendar.classes = {
  ...DecadeLevelGroup.classes,
  ...YearLevelGroup.classes,
  ...MonthLevelGroup.classes
};
Calendar.displayName = "@mantine/dates/Calendar";

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/Calendar/pick-calendar-levels-props/pick-calendar-levels-props.mjs
"use client";
function pickCalendarProps(props) {
  const {
    maxLevel,
    minLevel,
    defaultLevel,
    level,
    onLevelChange,
    nextIcon,
    previousIcon,
    date,
    defaultDate,
    onDateChange,
    numberOfColumns,
    columnsToScroll,
    ariaLabels,
    onYearSelect,
    onMonthSelect,
    onYearMouseEnter,
    onMonthMouseEnter,
    onNextMonth,
    onPreviousMonth,
    onNextYear,
    onPreviousYear,
    onNextDecade,
    onPreviousDecade,
    withCellSpacing,
    __updateDateOnYearSelect,
    __updateDateOnMonthSelect,
    // MonthLevelGroup props
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    monthLabelFormat,
    // YearLevelGroup props
    monthsListFormat,
    getMonthControlProps,
    yearLabelFormat,
    // DecadeLevelGroup props
    yearsListFormat,
    getYearControlProps,
    decadeLabelFormat,
    // External picker props
    allowSingleDateInRange,
    allowDeselect,
    // Other props
    minDate,
    maxDate,
    locale,
    ...others
  } = props;
  return {
    calendarProps: {
      maxLevel,
      minLevel,
      defaultLevel,
      level,
      onLevelChange,
      nextIcon,
      previousIcon,
      date,
      defaultDate,
      onDateChange,
      numberOfColumns,
      columnsToScroll,
      ariaLabels,
      onYearSelect,
      onMonthSelect,
      onYearMouseEnter,
      onMonthMouseEnter,
      onNextMonth,
      onPreviousMonth,
      onNextYear,
      onPreviousYear,
      onNextDecade,
      onPreviousDecade,
      withCellSpacing,
      __updateDateOnYearSelect,
      __updateDateOnMonthSelect,
      // MonthLevelGroup props
      firstDayOfWeek,
      weekdayFormat,
      weekendDays,
      getDayProps,
      excludeDate,
      renderDay,
      hideOutsideDates,
      hideWeekdays,
      getDayAriaLabel,
      monthLabelFormat,
      // YearLevelGroup props
      monthsListFormat,
      getMonthControlProps,
      yearLabelFormat,
      // DecadeLevelGroup props
      yearsListFormat,
      getYearControlProps,
      decadeLabelFormat,
      // External picker props
      allowSingleDateInRange,
      allowDeselect,
      // Other props
      minDate,
      maxDate,
      locale
    },
    others
  };
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/DateInput/DateInput.mjs
var import_dayjs27 = __toESM(require_dayjs_min(), 1);
var import_react20 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/DateInput/date-string-parser/date-string-parser.mjs
var import_dayjs25 = __toESM(require_dayjs_min(), 1);
"use client";
function dateStringParser(dateString, timezone) {
  if (dateString === null) {
    return null;
  }
  const date = shiftTimezone("add", new Date(dateString), timezone);
  if (Number.isNaN(date.getTime()) || !dateString) {
    return null;
  }
  return date;
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/DateInput/is-date-valid/is-date-valid.mjs
var import_dayjs26 = __toESM(require_dayjs_min(), 1);
"use client";
function isDateValid({ date, maxDate, minDate }) {
  if (date == null) {
    return false;
  }
  if (Number.isNaN(date.getTime())) {
    return false;
  }
  if (maxDate && (0, import_dayjs26.default)(date).isAfter(maxDate, "date")) {
    return false;
  }
  if (minDate && (0, import_dayjs26.default)(date).isBefore(minDate, "date")) {
    return false;
  }
  return true;
}

// node_modules/.pnpm/@mantine+dates@7.5.2_@mantine+core@7.5.1_@mantine+hooks@7.5.1_dayjs@1.11.10_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/dates/esm/components/DateInput/DateInput.mjs
"use client";
var defaultProps16 = {
  valueFormat: "MMMM D, YYYY",
  fixOnBlur: true,
  preserveTime: true
};
var DateInput = factory((_props, ref) => {
  const props = useInputProps("DateInput", defaultProps16, _props);
  const {
    inputProps,
    wrapperProps,
    value,
    defaultValue,
    onChange,
    clearable,
    clearButtonProps,
    popoverProps,
    getDayProps,
    locale,
    valueFormat,
    dateParser,
    minDate,
    maxDate,
    fixOnBlur,
    onFocus,
    onBlur,
    onClick,
    readOnly,
    name,
    form,
    rightSection,
    unstyled,
    classNames,
    styles,
    allowDeselect,
    preserveTime,
    date,
    defaultDate,
    onDateChange,
    ...rest
  } = props;
  const [dropdownOpened, setDropdownOpened] = (0, import_react20.useState)(false);
  const { calendarProps, others } = pickCalendarProps(rest);
  const ctx = useDatesContext();
  const defaultDateParser = (val) => {
    const parsedDate = (0, import_dayjs27.default)(val, valueFormat, ctx.getLocale(locale)).toDate();
    return Number.isNaN(parsedDate.getTime()) ? dateStringParser(val, ctx.getTimezone()) : parsedDate;
  };
  const _dateParser = dateParser || defaultDateParser;
  const _allowDeselect = allowDeselect !== void 0 ? allowDeselect : clearable;
  const formatValue2 = (val) => val ? (0, import_dayjs27.default)(val).locale(ctx.getLocale(locale)).format(valueFormat) : "";
  const [_value, setValue, controlled] = useUncontrolledDates({
    type: "default",
    value,
    defaultValue,
    onChange
  });
  const [_date, setDate] = useUncontrolledDates({
    type: "default",
    value: date,
    defaultValue: defaultValue || defaultDate,
    onChange: onDateChange
  });
  (0, import_react20.useEffect)(() => {
    if (controlled) {
      setDate(value);
    }
  }, [controlled, value]);
  const [inputValue, setInputValue] = (0, import_react20.useState)(formatValue2(_value));
  (0, import_react20.useEffect)(() => {
    setInputValue(formatValue2(_value));
  }, [ctx.getLocale(locale)]);
  const handleInputChange = (event) => {
    const val = event.currentTarget.value;
    setInputValue(val);
    setDropdownOpened(true);
    if (val.trim() === "" && clearable) {
      setValue(null);
    } else {
      const dateValue = _dateParser(val);
      if (isDateValid({ date: dateValue, minDate, maxDate })) {
        setValue(dateValue);
        setDate(dateValue);
      }
    }
  };
  const handleInputBlur = (event) => {
    onBlur?.(event);
    setDropdownOpened(false);
    fixOnBlur && setInputValue(formatValue2(_value));
  };
  const handleInputFocus = (event) => {
    onFocus?.(event);
    setDropdownOpened(true);
  };
  const handleInputClick = (event) => {
    onClick?.(event);
    setDropdownOpened(true);
  };
  const _getDayProps = (day) => ({
    ...getDayProps?.(day),
    selected: (0, import_dayjs27.default)(_value).isSame(day, "day"),
    onClick: () => {
      const valueWithTime = preserveTime ? assignTime(_value, day) : day;
      const val = clearable && _allowDeselect ? (0, import_dayjs27.default)(_value).isSame(day, "day") ? null : valueWithTime : valueWithTime;
      setValue(val);
      !controlled && setInputValue(formatValue2(val));
      setDropdownOpened(false);
    }
  });
  const _rightSection = rightSection || (clearable && _value && !readOnly ? /* @__PURE__ */ import_react20.default.createElement(
    CloseButton,
    {
      variant: "transparent",
      onMouseDown: (event) => event.preventDefault(),
      tabIndex: -1,
      onClick: () => {
        setValue(null);
        !controlled && setInputValue("");
        setDropdownOpened(false);
      },
      unstyled,
      size: inputProps.size || "sm",
      ...clearButtonProps
    }
  ) : null);
  useDidUpdate(() => {
    value !== void 0 && !dropdownOpened && setInputValue(formatValue2(value));
  }, [value]);
  return /* @__PURE__ */ import_react20.default.createElement(import_react20.default.Fragment, null, /* @__PURE__ */ import_react20.default.createElement(Input.Wrapper, { ...wrapperProps, __staticSelector: "DateInput" }, /* @__PURE__ */ import_react20.default.createElement(
    Popover,
    {
      opened: dropdownOpened,
      trapFocus: false,
      position: "bottom-start",
      disabled: readOnly,
      withRoles: false,
      unstyled,
      ...popoverProps
    },
    /* @__PURE__ */ import_react20.default.createElement(Popover.Target, null, /* @__PURE__ */ import_react20.default.createElement(
      Input,
      {
        "data-dates-input": true,
        "data-read-only": readOnly || void 0,
        autoComplete: "off",
        ref,
        value: inputValue,
        onChange: handleInputChange,
        onBlur: handleInputBlur,
        onFocus: handleInputFocus,
        onClick: handleInputClick,
        readOnly,
        rightSection: _rightSection,
        ...inputProps,
        ...others,
        __staticSelector: "DateInput"
      }
    )),
    /* @__PURE__ */ import_react20.default.createElement(Popover.Dropdown, { onMouseDown: (event) => event.preventDefault(), "data-dates-dropdown": true }, /* @__PURE__ */ import_react20.default.createElement(
      Calendar,
      {
        __staticSelector: "DateInput",
        __timezoneApplied: true,
        ...calendarProps,
        classNames,
        styles,
        unstyled,
        __preventFocus: true,
        minDate,
        maxDate,
        locale,
        getDayProps: _getDayProps,
        size: inputProps.size,
        date: _date,
        onDateChange: setDate
      }
    ))
  )), /* @__PURE__ */ import_react20.default.createElement(HiddenDatesInput, { name, form, value: _value, type: "default" }));
});
DateInput.classes = { ...Input.classes, ...Calendar.classes };
DateInput.displayName = "@mantine/dates/DateInput";

// app/styles/fast-track.module.css
var fast_track_module_default = { "title": "fast-track-module__title__mLI2D", "main": "fast-track-module__main__-LLUD" };

// app/routes/modules.fast-track.$gateId.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\modules.fast-track.$gateId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\modules.fast-track.$gateId.tsx"
  );
}
var CodeVerification = () => {
  _s();
  const form = useForm();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: form.onSubmit(console.log), autoComplete: "off", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { p: "md", gutter: "md", align: "flex-start", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid.Col, { span: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "code", label: "Kod", placeholder: "Kod", required: true, ...form.getInputProps("code") }, void 0, false, {
      fileName: "app/routes/modules.fast-track.$gateId.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/modules.fast-track.$gateId.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid.Col, { span: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Accordion, { variant: "separated", flex: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Accordion.Item, { value: "manual-entry", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Accordion.Control, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconEdit, {}, void 0, false, {
        fileName: "app/routes/modules.fast-track.$gateId.tsx",
        lineNumber: 43,
        columnNumber: 40
      }, this), children: "Manual Giri\u015F" }, void 0, false, {
        fileName: "app/routes/modules.fast-track.$gateId.tsx",
        lineNumber: 43,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Accordion.Panel, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "customer-name", label: "Ad Soyad", placeholder: "Ad Soyad", ...form.getInputProps("customer-name") }, void 0, false, {
          fileName: "app/routes/modules.fast-track.$gateId.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateInput, { name: "date", label: "Tarih", placeholder: "Tarih", ...form.getInputProps("date") }, void 0, false, {
          fileName: "app/routes/modules.fast-track.$gateId.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "iata-code", label: "Havayolu IATA Kodu", placeholder: "Havayolu IATA Kodu", ...form.getInputProps("iata-code") }, void 0, false, {
          fileName: "app/routes/modules.fast-track.$gateId.tsx",
          lineNumber: 51,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "flight-number", label: "U\xE7u\u015F Numaras\u0131", placeholder: "U\xE7u\u015F Numaras\u0131", ...form.getInputProps("flight-number") }, void 0, false, {
          fileName: "app/routes/modules.fast-track.$gateId.tsx",
          lineNumber: 53,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "seat-number", label: "Koltuk No", placeholder: "Koltuk No", ...form.getInputProps("seat-number") }, void 0, false, {
          fileName: "app/routes/modules.fast-track.$gateId.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { disabled: true, name: "to-airport-iata", label: "To Airport IATA", placeholder: "To Airport IATA" }, void 0, false, {
          fileName: "app/routes/modules.fast-track.$gateId.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { disabled: true, name: "from-airport-iata", label: "From Airport IATA", placeholder: "From Airport IATA" }, void 0, false, {
          fileName: "app/routes/modules.fast-track.$gateId.tsx",
          lineNumber: 59,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "class-code", label: "Clas Code", placeholder: "Clas Code", ...form.getInputProps("class-code") }, void 0, false, {
          fileName: "app/routes/modules.fast-track.$gateId.tsx",
          lineNumber: 61,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/modules.fast-track.$gateId.tsx",
        lineNumber: 46,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/modules.fast-track.$gateId.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/modules.fast-track.$gateId.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/modules.fast-track.$gateId.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/modules.fast-track.$gateId.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/modules.fast-track.$gateId.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_s(CodeVerification, "woqMTX6igxsX6/9vX4dQZlxR7yY=", false, function() {
  return [useForm];
});
_c = CodeVerification;
var PhoneVerification = () => {
  _s2();
  const form = useForm();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: form.onSubmit(console.log), autoComplete: "off", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { p: "md", gutter: "md", align: "flex-start", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid.Col, { span: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, { name: "code", label: "Kod", placeholder: "Kod", required: true, ...form.getInputProps("code") }, void 0, false, {
      fileName: "app/routes/modules.fast-track.$gateId.tsx",
      lineNumber: 80,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/modules.fast-track.$gateId.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid.Col, { span: 8 }, void 0, false, {
      fileName: "app/routes/modules.fast-track.$gateId.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/modules.fast-track.$gateId.tsx",
    lineNumber: 78,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/modules.fast-track.$gateId.tsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
};
_s2(PhoneVerification, "woqMTX6igxsX6/9vX4dQZlxR7yY=", false, function() {
  return [useForm];
});
_c2 = PhoneVerification;
var CustomerVerification = () => {
  _s3();
  const [activeTab, setActiveTab] = (0, import_react21.useState)("code");
  const iconStyle = {
    width: rem(12),
    height: rem(12)
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, { value: activeTab, onChange: setActiveTab, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.List, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, { value: "code", leftSection: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconDialpad, { style: iconStyle }, void 0, false, {
        fileName: "app/routes/modules.fast-track.$gateId.tsx",
        lineNumber: 102,
        columnNumber: 45
      }, this), children: "Kod ile" }, void 0, false, {
        fileName: "app/routes/modules.fast-track.$gateId.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, { value: "phone", leftSection: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconPhoneCheck, { style: iconStyle }, void 0, false, {
        fileName: "app/routes/modules.fast-track.$gateId.tsx",
        lineNumber: 105,
        columnNumber: 46
      }, this), children: "Telefon ile" }, void 0, false, {
        fileName: "app/routes/modules.fast-track.$gateId.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Tab, { value: "cash", leftSection: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconCash, { style: iconStyle }, void 0, false, {
        fileName: "app/routes/modules.fast-track.$gateId.tsx",
        lineNumber: 108,
        columnNumber: 45
      }, this), children: "Nakit \xF6deme ile" }, void 0, false, {
        fileName: "app/routes/modules.fast-track.$gateId.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/modules.fast-track.$gateId.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Panel, { value: "code", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeVerification, {}, void 0, false, {
      fileName: "app/routes/modules.fast-track.$gateId.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/modules.fast-track.$gateId.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Panel, { value: "phone", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhoneVerification, {}, void 0, false, {
      fileName: "app/routes/modules.fast-track.$gateId.tsx",
      lineNumber: 118,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/modules.fast-track.$gateId.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs.Panel, { value: "cash", children: "With Cash" }, void 0, false, {
      fileName: "app/routes/modules.fast-track.$gateId.tsx",
      lineNumber: 121,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/modules.fast-track.$gateId.tsx",
    lineNumber: 100,
    columnNumber: 10
  }, this);
};
_s3(CustomerVerification, "BtuZbQN0SDPcDZL89nDNcZzC40E=");
_c3 = CustomerVerification;
function FastTrackPage() {
  _s4();
  const {
    gateId
  } = useParams();
  const [active, setActive] = (0, import_react21.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { justify: "center", className: fast_track_module_default.title, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { order: 3, children: `H\u0131zl\u0131 Ge\xE7i\u015F > Gidi\u015F Kap\u0131s\u0131 - ${gateId}` }, void 0, false, {
      fileName: "app/routes/modules.fast-track.$gateId.tsx",
      lineNumber: 134,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/modules.fast-track.$gateId.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { className: fast_track_module_default.main, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stepper, { active, onStepClick: setActive, allowNextStepsSelect: false, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stepper.Step, { label: "M\xFC\u015Fteri Bilgilerini Do\u011Frula", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomerVerification, {}, void 0, false, {
          fileName: "app/routes/modules.fast-track.$gateId.tsx",
          lineNumber: 140,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/modules.fast-track.$gateId.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stepper.Step, { label: "M\xFC\u015Fteri Bilgileri", children: "Step 2 content: Verify email" }, void 0, false, {
          fileName: "app/routes/modules.fast-track.$gateId.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stepper.Step, { label: "Bini\u015F Kart\u0131 ve misafir bilgileri", children: "Step 3 content: Get full access" }, void 0, false, {
          fileName: "app/routes/modules.fast-track.$gateId.tsx",
          lineNumber: 145,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stepper.Completed, { children: "Completed, click back button to get to previous step" }, void 0, false, {
          fileName: "app/routes/modules.fast-track.$gateId.tsx",
          lineNumber: 148,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/modules.fast-track.$gateId.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { children: "Devam Et" }, void 0, false, {
        fileName: "app/routes/modules.fast-track.$gateId.tsx",
        lineNumber: 154,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/modules.fast-track.$gateId.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/modules.fast-track.$gateId.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/modules.fast-track.$gateId.tsx",
    lineNumber: 132,
    columnNumber: 10
  }, this);
}
_s4(FastTrackPage, "Ec0TSh9x7yELdngSjc3UqQvXrak=", false, function() {
  return [useParams];
});
_c4 = FastTrackPage;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "CodeVerification");
$RefreshReg$(_c2, "PhoneVerification");
$RefreshReg$(_c3, "CustomerVerification");
$RefreshReg$(_c4, "FastTrackPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  FastTrackPage as default
};
//# sourceMappingURL=/build/routes/modules.fast-track.$gateId-APGKSPVH.js.map
