import { importShared } from './__federation_fn_import-BKb1h4mk.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CsM3lTE3.js';

var rp = Object.defineProperty;
var op = (t7, e, n) => e in t7 ? rp(t7, e, { enumerable: true, configurable: true, writable: true, value: n }) : t7[e] = n;
var te = (t7, e, n) => op(t7, typeof e != "symbol" ? e + "" : e, n);
const k = await importShared('react');

const H = await importShared('react');
const {forwardRef:ue,useState:ye,useRef:Yt,useEffect:Ze,createContext:Ye,useContext:De,createElement:Mt,Fragment:Wd,useMemo:wi,Children:Kn,cloneElement:Vo,isValidElement:ip,PureComponent:sp,useImperativeHandle:Vd,useLayoutEffect:Vs,useCallback:nl,useId:Dn} = H;

const ap = await importShared('react-dom');

const {createPortal:lp} = await importShared('react-dom');

const cp = "button-module__mth-btn-default__cda3k", dp = "button-module__mth-btn-border__-pdSm", up = "button-module__mth-btn__LkrNk", fp = "button-module__mth-btn-full__7QycJ", fo = {
  "mth-btn-default": "button-module__mth-btn-default__cda3k",
  mthBtnDefault: cp,
  "mth-btn-border": "button-module__mth-btn-border__-pdSm",
  mthBtnBorder: dp,
  "mth-btn": "button-module__mth-btn__LkrNk",
  mthBtn: up,
  "mth-btn-full": "button-module__mth-btn-full__7QycJ",
  mthBtnFull: fp
}, s_ = ({
  txtBtn: t7,
  typeButton: e,
  full: n,
  onClick: r,
  disabled: o,
  type: i,
  leftIcon: s,
  rightIcon: a,
  iconSize: l = 20
}) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${n ? fo["mth-btn-full"] : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "button",
  {
    type: i,
    className: `${fo["mth-btn"]} ${fo[`mth-btn-${e}`]} ${n ? fo["mth-btn-full"] : ""} flex items-center justify-center gap-2`,
    onClick: r,
    disabled: o,
    children: [
      s && /* @__PURE__ */ jsxRuntimeExports.jsx(s, { size: l }),
      t7,
      a && /* @__PURE__ */ jsxRuntimeExports.jsx(a, { size: l })
    ]
  }
) }), hp = "checkbox-module__checkmark__pC-qY", Yo = {
  "checkbox-container": "checkbox-module__checkbox-container__jLidj",
  checkmark: hp
}, a_ = ({
  label: t7,
  value: e,
  checked: n,
  onChange: r
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: Yo["checkbox-container"], children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type: "checkbox",
      value: e,
      checked: n,
      onChange: r
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: Yo.checkmark }),
  t7 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: t7 })
] }), Tn = ({
  src: t7,
  alt: e,
  width: n,
  height: r,
  classIm: o
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "img",
  {
    className: o,
    src: t7,
    alt: e,
    width: n,
    height: r
  }
), gp = ue(
  ({
    placeholder: t7,
    label: e,
    error: n,
    type: r,
    classInclude: o,
    maxLength: i,
    onChange: s,
    ...a
  }, l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
    e && /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: " mb-1 block font-semibold", children: e }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: l,
        type: r,
        placeholder: t7,
        className: `w-full border p-2 ${o || ""}`,
        maxLength: i,
        onChange: s,
        ...a
      }
    ),
    n && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-500", children: n })
  ] })
);
gp.displayName = "InputForm";
var Yd = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, rl = H.createContext && /* @__PURE__ */ H.createContext(Yd), pp = ["attr", "size", "title"];
function mp(t7, e) {
  if (t7 == null) return {};
  var n = bp(t7, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t7);
    for (o = 0; o < i.length; o++)
      r = i[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t7, r) && (n[r] = t7[r]);
  }
  return n;
}
function bp(t7, e) {
  if (t7 == null) return {};
  var n = {}, r = Object.keys(t7), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(e.indexOf(o) >= 0) && (n[o] = t7[o]);
  return n;
}
function Uo() {
  return Uo = Object.assign ? Object.assign.bind() : function(t7) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t7[r] = n[r]);
    }
    return t7;
  }, Uo.apply(this, arguments);
}
function ol(t7, e) {
  var n = Object.keys(t7);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t7);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t7, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ko(t7) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ol(Object(n), true).forEach(function(r) {
      yp(t7, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t7, Object.getOwnPropertyDescriptors(n)) : ol(Object(n)).forEach(function(r) {
      Object.defineProperty(t7, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t7;
}
function yp(t7, e, n) {
  return e = vp(e), e in t7 ? Object.defineProperty(t7, e, { value: n, enumerable: true, configurable: true, writable: true }) : t7[e] = n, t7;
}
function vp(t7) {
  var e = xp(t7, "string");
  return typeof e == "symbol" ? e : String(e);
}
function xp(t7, e) {
  if (typeof t7 != "object" || t7 === null) return t7;
  var n = t7[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t7, e);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t7);
}
function Ud(t7) {
  return t7 && t7.map((e, n) => /* @__PURE__ */ H.createElement(e.tag, Ko({
    key: n
  }, e.attr), Ud(e.child)));
}
function me(t7) {
  return (e) => /* @__PURE__ */ H.createElement(wp, Uo({
    attr: Ko({}, t7.attr)
  }, e), Ud(t7.child));
}
function wp(t7) {
  var e = (n) => {
    var {
      attr: r,
      size: o,
      title: i
    } = t7, s = mp(t7, pp), a = o || n.size || "1em", l;
    return n.className && (l = n.className), t7.className && (l = (l ? l + " " : "") + t7.className), /* @__PURE__ */ H.createElement("svg", Uo({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, s, {
      className: l,
      style: Ko(Ko({
        color: t7.color || n.color
      }, n.style), t7.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ H.createElement("title", null, i), t7.children);
  };
  return rl !== void 0 ? /* @__PURE__ */ H.createElement(rl.Consumer, null, (n) => e(n)) : e(Yd);
}
function kp(t7) {
  return me({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" }, child: [] }] })(t7);
}
function Cp(t7) {
  return me({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" }, child: [] }] })(t7);
}
function _p(t7) {
  return me({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z" }, child: [] }] })(t7);
}
function Sp(t7) {
  return me({ attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z" }, child: [] }] })(t7);
}
function Ep(t7) {
  return me({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" }, child: [] }] })(t7);
}
const Np = {
  "mth-password": "passwordInput-module__mth-password__R6DoN"
}, il = ({
  placeholder: t7,
  onChange: e,
  value: n,
  ...r
}) => {
  const [o, i] = ye(false), s = () => {
    i(!o);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: o ? "text" : "password",
        value: n,
        className: "w-full border p-2 pr-10",
        onChange: e,
        placeholder: t7,
        ...r
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: s,
        className: Np["mth-password"],
        children: o ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sp, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Ep, {})
      }
    )
  ] }) });
}, sl = {
  "progress-check": "progressBar-module__progress-check__TVlHq",
  "progress-no-check": "progressBar-module__progress-no-check__YeVq1"
}, Rp = ({
  start: t7,
  end: e,
  current: n
}) => {
  const r = (n - t7) / (e - t7) * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-4 w-full overflow-hidden rounded-full bg-gray-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `absolute left-0 top-0 h-full rounded-full ${r < 50 ? sl["progress-no-check"] : sl["progress-check"]}`,
        style: { width: `${Math.min(r, 100)}%` }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "z-10 text-sm font-medium text-gray-900", children: [
      n.toFixed(2),
      "%"
    ] }) })
  ] });
}, Mp = ue(
  ({ options: t7, label: e, error: n, value: r, onChange: o, ...i }, s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
    e && /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1 block font-semibold", children: e }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "select",
      {
        ref: s,
        className: "w-full rounded border p-2",
        value: r,
        onChange: o,
        ...i,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { disabled: true, value: "", children: "Seleccione una opción" }),
          t7 == null ? void 0 : t7.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a.value, children: a.label }, a.value))
        ]
      }
    ),
    n && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-500", children: n })
  ] })
);
Mp.displayName = "SelectForm";
const Pp = {
  conversiones: "https://ftp.mathilde-ads.com/151-a05ae956a2c7caeb6f6d8952cac41a24.svg",
  click: "https://ftp.mathilde-ads.com/151-81ace0b5242dabee10930b76df01d43b.svg",
  impresiones: "https://ftp.mathilde-ads.com/151-b50587f350bafb8f19a9308325b45467.svg",
  porcentaje: "https://ftp.mathilde-ads.com/151-846076c2407128d25fffa4f35342d415.svg",
  vistas: "https://ftp.mathilde-ads.com/151-2b68ef020e57a0986c576b16607d85dd.svg"
}, l_ = ({
  logo: t7,
  number: e,
  title: n,
  start: r,
  end: o,
  current: i
}) => {
  const s = (a) => new Intl.NumberFormat("es-ES", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0
  }).format(a);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col border bg-white px-3.5 py-7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Tn,
      {
        src: Pp[t7] || "",
        alt: "Icon",
        width: 30,
        height: 30
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "my-3 font-bold", children: n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-3xl", children: s(e) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Rp, { start: r, end: o, current: i }) })
  ] });
};
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function Qr(t7) {
  return t7 + 0.5 | 0;
}
const on = (t7, e, n) => Math.max(Math.min(t7, n), e);
function Cr(t7) {
  return on(Qr(t7 * 2.55), 0, 255);
}
function an(t7) {
  return on(Qr(t7 * 255), 0, 255);
}
function Wt(t7) {
  return on(Qr(t7 / 2.55) / 100, 0, 1);
}
function al(t7) {
  return on(Qr(t7 * 100), 0, 100);
}
const ft = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, xs = [..."0123456789ABCDEF"], Ap = (t7) => xs[t7 & 15], Dp = (t7) => xs[(t7 & 240) >> 4] + xs[t7 & 15], ho = (t7) => (t7 & 240) >> 4 === (t7 & 15), Ip = (t7) => ho(t7.r) && ho(t7.g) && ho(t7.b) && ho(t7.a);
function Lp(t7) {
  var e = t7.length, n;
  return t7[0] === "#" && (e === 4 || e === 5 ? n = {
    r: 255 & ft[t7[1]] * 17,
    g: 255 & ft[t7[2]] * 17,
    b: 255 & ft[t7[3]] * 17,
    a: e === 5 ? ft[t7[4]] * 17 : 255
  } : (e === 7 || e === 9) && (n = {
    r: ft[t7[1]] << 4 | ft[t7[2]],
    g: ft[t7[3]] << 4 | ft[t7[4]],
    b: ft[t7[5]] << 4 | ft[t7[6]],
    a: e === 9 ? ft[t7[7]] << 4 | ft[t7[8]] : 255
  })), n;
}
const Fp = (t7, e) => t7 < 255 ? e(t7) : "";
function zp(t7) {
  var e = Ip(t7) ? Ap : Dp;
  return t7 ? "#" + e(t7.r) + e(t7.g) + e(t7.b) + Fp(t7.a, e) : void 0;
}
const Bp = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Kd(t7, e, n) {
  const r = e * Math.min(n, 1 - n), o = (i, s = (i + t7 / 30) % 12) => n - r * Math.max(Math.min(s - 3, 9 - s, 1), -1);
  return [o(0), o(8), o(4)];
}
function $p(t7, e, n) {
  const r = (o, i = (o + t7 / 60) % 6) => n - n * e * Math.max(Math.min(i, 4 - i, 1), 0);
  return [r(5), r(3), r(1)];
}
function jp(t7, e, n) {
  const r = Kd(t7, 1, 0.5);
  let o;
  for (e + n > 1 && (o = 1 / (e + n), e *= o, n *= o), o = 0; o < 3; o++)
    r[o] *= 1 - e - n, r[o] += e;
  return r;
}
function Hp(t7, e, n, r, o) {
  return t7 === o ? (e - n) / r + (e < n ? 6 : 0) : e === o ? (n - t7) / r + 2 : (t7 - e) / r + 4;
}
function Ys(t7) {
  const n = t7.r / 255, r = t7.g / 255, o = t7.b / 255, i = Math.max(n, r, o), s = Math.min(n, r, o), a = (i + s) / 2;
  let l, c, d;
  return i !== s && (d = i - s, c = a > 0.5 ? d / (2 - i - s) : d / (i + s), l = Hp(n, r, o, d, i), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function Us(t7, e, n, r) {
  return (Array.isArray(e) ? t7(e[0], e[1], e[2]) : t7(e, n, r)).map(an);
}
function Ks(t7, e, n) {
  return Us(Kd, t7, e, n);
}
function Wp(t7, e, n) {
  return Us(jp, t7, e, n);
}
function Vp(t7, e, n) {
  return Us($p, t7, e, n);
}
function qd(t7) {
  return (t7 % 360 + 360) % 360;
}
function Yp(t7) {
  const e = Bp.exec(t7);
  let n = 255, r;
  if (!e)
    return;
  e[5] !== r && (n = e[6] ? Cr(+e[5]) : an(+e[5]));
  const o = qd(+e[2]), i = +e[3] / 100, s = +e[4] / 100;
  return e[1] === "hwb" ? r = Wp(o, i, s) : e[1] === "hsv" ? r = Vp(o, i, s) : r = Ks(o, i, s), {
    r: r[0],
    g: r[1],
    b: r[2],
    a: n
  };
}
function Up(t7, e) {
  var n = Ys(t7);
  n[0] = qd(n[0] + e), n = Ks(n), t7.r = n[0], t7.g = n[1], t7.b = n[2];
}
function Kp(t7) {
  if (!t7)
    return;
  const e = Ys(t7), n = e[0], r = al(e[1]), o = al(e[2]);
  return t7.a < 255 ? `hsla(${n}, ${r}%, ${o}%, ${Wt(t7.a)})` : `hsl(${n}, ${r}%, ${o}%)`;
}
const ll = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, cl = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function qp() {
  const t7 = {}, e = Object.keys(cl), n = Object.keys(ll);
  let r, o, i, s, a;
  for (r = 0; r < e.length; r++) {
    for (s = a = e[r], o = 0; o < n.length; o++)
      i = n[o], a = a.replace(i, ll[i]);
    i = parseInt(cl[s], 16), t7[a] = [i >> 16 & 255, i >> 8 & 255, i & 255];
  }
  return t7;
}
let go;
function Gp(t7) {
  go || (go = qp(), go.transparent = [0, 0, 0, 0]);
  const e = go[t7.toLowerCase()];
  return e && {
    r: e[0],
    g: e[1],
    b: e[2],
    a: e.length === 4 ? e[3] : 255
  };
}
const Xp = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Jp(t7) {
  const e = Xp.exec(t7);
  let n = 255, r, o, i;
  if (e) {
    if (e[7] !== r) {
      const s = +e[7];
      n = e[8] ? Cr(s) : on(s * 255, 0, 255);
    }
    return r = +e[1], o = +e[3], i = +e[5], r = 255 & (e[2] ? Cr(r) : on(r, 0, 255)), o = 255 & (e[4] ? Cr(o) : on(o, 0, 255)), i = 255 & (e[6] ? Cr(i) : on(i, 0, 255)), {
      r,
      g: o,
      b: i,
      a: n
    };
  }
}
function Zp(t7) {
  return t7 && (t7.a < 255 ? `rgba(${t7.r}, ${t7.g}, ${t7.b}, ${Wt(t7.a)})` : `rgb(${t7.r}, ${t7.g}, ${t7.b})`);
}
const qi = (t7) => t7 <= 31308e-7 ? t7 * 12.92 : Math.pow(t7, 1 / 2.4) * 1.055 - 0.055, Fn = (t7) => t7 <= 0.04045 ? t7 / 12.92 : Math.pow((t7 + 0.055) / 1.055, 2.4);
function Qp(t7, e, n) {
  const r = Fn(Wt(t7.r)), o = Fn(Wt(t7.g)), i = Fn(Wt(t7.b));
  return {
    r: an(qi(r + n * (Fn(Wt(e.r)) - r))),
    g: an(qi(o + n * (Fn(Wt(e.g)) - o))),
    b: an(qi(i + n * (Fn(Wt(e.b)) - i))),
    a: t7.a + n * (e.a - t7.a)
  };
}
function po(t7, e, n) {
  if (t7) {
    let r = Ys(t7);
    r[e] = Math.max(0, Math.min(r[e] + r[e] * n, e === 0 ? 360 : 1)), r = Ks(r), t7.r = r[0], t7.g = r[1], t7.b = r[2];
  }
}
function Gd(t7, e) {
  return t7 && Object.assign(e || {}, t7);
}
function dl(t7) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(t7) ? t7.length >= 3 && (e = { r: t7[0], g: t7[1], b: t7[2], a: 255 }, t7.length > 3 && (e.a = an(t7[3]))) : (e = Gd(t7, { r: 0, g: 0, b: 0, a: 1 }), e.a = an(e.a)), e;
}
function e0(t7) {
  return t7.charAt(0) === "r" ? Jp(t7) : Yp(t7);
}
class Br {
  constructor(e) {
    if (e instanceof Br)
      return e;
    const n = typeof e;
    let r;
    n === "object" ? r = dl(e) : n === "string" && (r = Lp(e) || Gp(e) || e0(e)), this._rgb = r, this._valid = !!r;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var e = Gd(this._rgb);
    return e && (e.a = Wt(e.a)), e;
  }
  set rgb(e) {
    this._rgb = dl(e);
  }
  rgbString() {
    return this._valid ? Zp(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? zp(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Kp(this._rgb) : void 0;
  }
  mix(e, n) {
    if (e) {
      const r = this.rgb, o = e.rgb;
      let i;
      const s = n === i ? 0.5 : n, a = 2 * s - 1, l = r.a - o.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      i = 1 - c, r.r = 255 & c * r.r + i * o.r + 0.5, r.g = 255 & c * r.g + i * o.g + 0.5, r.b = 255 & c * r.b + i * o.b + 0.5, r.a = s * r.a + (1 - s) * o.a, this.rgb = r;
    }
    return this;
  }
  interpolate(e, n) {
    return e && (this._rgb = Qp(this._rgb, e._rgb, n)), this;
  }
  clone() {
    return new Br(this.rgb);
  }
  alpha(e) {
    return this._rgb.a = an(e), this;
  }
  clearer(e) {
    const n = this._rgb;
    return n.a *= 1 - e, this;
  }
  greyscale() {
    const e = this._rgb, n = Qr(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
    return e.r = e.g = e.b = n, this;
  }
  opaquer(e) {
    const n = this._rgb;
    return n.a *= 1 + e, this;
  }
  negate() {
    const e = this._rgb;
    return e.r = 255 - e.r, e.g = 255 - e.g, e.b = 255 - e.b, this;
  }
  lighten(e) {
    return po(this._rgb, 2, e), this;
  }
  darken(e) {
    return po(this._rgb, 2, -e), this;
  }
  saturate(e) {
    return po(this._rgb, 1, e), this;
  }
  desaturate(e) {
    return po(this._rgb, 1, -e), this;
  }
  rotate(e) {
    return Up(this._rgb, e), this;
  }
}
/*!
 * Chart.js v4.4.8
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function zt() {
}
const t0 = /* @__PURE__ */ (() => {
  let t7 = 0;
  return () => t7++;
})();
function qe(t7) {
  return t7 == null;
}
function He(t7) {
  if (Array.isArray && Array.isArray(t7))
    return true;
  const e = Object.prototype.toString.call(t7);
  return e.slice(0, 7) === "[object" && e.slice(-6) === "Array]";
}
function ie(t7) {
  return t7 !== null && Object.prototype.toString.call(t7) === "[object Object]";
}
function Ut(t7) {
  return (typeof t7 == "number" || t7 instanceof Number) && isFinite(+t7);
}
function St(t7, e) {
  return Ut(t7) ? t7 : e;
}
function ge(t7, e) {
  return typeof t7 > "u" ? e : t7;
}
const n0 = (t7, e) => typeof t7 == "string" && t7.endsWith("%") ? parseFloat(t7) / 100 : +t7 / e, Xd = (t7, e) => typeof t7 == "string" && t7.endsWith("%") ? parseFloat(t7) / 100 * e : +t7;
function xe(t7, e, n) {
  if (t7 && typeof t7.call == "function")
    return t7.apply(n, e);
}
function he(t7, e, n, r) {
  let o, i, s;
  if (He(t7))
    for (i = t7.length, o = 0; o < i; o++)
      e.call(n, t7[o], o);
  else if (ie(t7))
    for (s = Object.keys(t7), i = s.length, o = 0; o < i; o++)
      e.call(n, t7[s[o]], s[o]);
}
function qo(t7, e) {
  let n, r, o, i;
  if (!t7 || !e || t7.length !== e.length)
    return false;
  for (n = 0, r = t7.length; n < r; ++n)
    if (o = t7[n], i = e[n], o.datasetIndex !== i.datasetIndex || o.index !== i.index)
      return false;
  return true;
}
function Go(t7) {
  if (He(t7))
    return t7.map(Go);
  if (ie(t7)) {
    const e = /* @__PURE__ */ Object.create(null), n = Object.keys(t7), r = n.length;
    let o = 0;
    for (; o < r; ++o)
      e[n[o]] = Go(t7[n[o]]);
    return e;
  }
  return t7;
}
function Jd(t7) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(t7) === -1;
}
function r0(t7, e, n, r) {
  if (!Jd(t7))
    return;
  const o = e[t7], i = n[t7];
  ie(o) && ie(i) ? $r(o, i, r) : e[t7] = Go(i);
}
function $r(t7, e, n) {
  const r = He(e) ? e : [
    e
  ], o = r.length;
  if (!ie(t7))
    return t7;
  n = n || {};
  const i = n.merger || r0;
  let s;
  for (let a = 0; a < o; ++a) {
    if (s = r[a], !ie(s))
      continue;
    const l = Object.keys(s);
    for (let c = 0, d = l.length; c < d; ++c)
      i(l[c], t7, s, n);
  }
  return t7;
}
function Nr(t7, e) {
  return $r(t7, e, {
    merger: o0
  });
}
function o0(t7, e, n) {
  if (!Jd(t7))
    return;
  const r = e[t7], o = n[t7];
  ie(r) && ie(o) ? Nr(r, o) : Object.prototype.hasOwnProperty.call(e, t7) || (e[t7] = Go(o));
}
const ul = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (t7) => t7,
  // default resolvers
  x: (t7) => t7.x,
  y: (t7) => t7.y
};
function i0(t7) {
  const e = t7.split("."), n = [];
  let r = "";
  for (const o of e)
    r += o, r.endsWith("\\") ? r = r.slice(0, -1) + "." : (n.push(r), r = "");
  return n;
}
function s0(t7) {
  const e = i0(t7);
  return (n) => {
    for (const r of e) {
      if (r === "")
        break;
      n = n && n[r];
    }
    return n;
  };
}
function jr(t7, e) {
  return (ul[e] || (ul[e] = s0(e)))(t7);
}
function qs(t7) {
  return t7.charAt(0).toUpperCase() + t7.slice(1);
}
const Xo = (t7) => typeof t7 < "u", cn = (t7) => typeof t7 == "function", fl = (t7, e) => {
  if (t7.size !== e.size)
    return false;
  for (const n of t7)
    if (!e.has(n))
      return false;
  return true;
};
function a0(t7) {
  return t7.type === "mouseup" || t7.type === "click" || t7.type === "contextmenu";
}
const Fe = Math.PI, Ne = 2 * Fe, Jo = Number.POSITIVE_INFINITY, l0 = Fe / 180, Ae = Fe / 2, hn = Fe / 4, hl = Fe * 2 / 3, gl = Math.sign;
function c0(t7) {
  const e = [], n = Math.sqrt(t7);
  let r;
  for (r = 1; r < n; r++)
    t7 % r === 0 && (e.push(r), e.push(t7 / r));
  return n === (n | 0) && e.push(n), e.sort((o, i) => o - i).pop(), e;
}
function d0(t7) {
  return typeof t7 == "symbol" || typeof t7 == "object" && t7 !== null && !(Symbol.toPrimitive in t7 || "toString" in t7 || "valueOf" in t7);
}
function Zo(t7) {
  return !d0(t7) && !isNaN(parseFloat(t7)) && isFinite(t7);
}
function wn(t7) {
  return t7 * (Fe / 180);
}
function u0(t7) {
  return t7 * (180 / Fe);
}
function Zd(t7, e) {
  const n = e.x - t7.x, r = e.y - t7.y, o = Math.sqrt(n * n + r * r);
  let i = Math.atan2(r, n);
  return i < -0.5 * Fe && (i += Ne), {
    angle: i,
    distance: o
  };
}
function f0(t7, e) {
  return Math.sqrt(Math.pow(e.x - t7.x, 2) + Math.pow(e.y - t7.y, 2));
}
function gn(t7) {
  return (t7 % Ne + Ne) % Ne;
}
function Qo(t7, e, n, r) {
  const o = gn(t7), i = gn(e), s = gn(n), a = gn(i - o), l = gn(s - o), c = gn(o - i), d = gn(o - s);
  return o === i || o === s || r && i === s || a > l && c < d;
}
function ht(t7, e, n) {
  return Math.max(e, Math.min(n, t7));
}
function h0(t7) {
  return ht(t7, -32768, 32767);
}
function _r(t7, e, n, r = 1e-6) {
  return t7 >= Math.min(e, n) - r && t7 <= Math.max(e, n) + r;
}
function Gs(t7, e, n) {
  n = n || ((s) => t7[s] < e);
  let r = t7.length - 1, o = 0, i;
  for (; r - o > 1; )
    i = o + r >> 1, n(i) ? o = i : r = i;
  return {
    lo: o,
    hi: r
  };
}
const ws = (t7, e, n, r) => Gs(t7, n, r ? (o) => {
  const i = t7[o][e];
  return i < n || i === n && t7[o + 1][e] === n;
} : (o) => t7[o][e] < n), g0 = (t7, e, n) => Gs(t7, n, (r) => t7[r][e] >= n);
function p0(t7, e, n) {
  let r = 0, o = t7.length;
  for (; r < o && t7[r] < e; )
    r++;
  for (; o > r && t7[o - 1] > n; )
    o--;
  return r > 0 || o < t7.length ? t7.slice(r, o) : t7;
}
const Qd = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function m0(t7, e) {
  if (t7._chartjs) {
    t7._chartjs.listeners.push(e);
    return;
  }
  Object.defineProperty(t7, "_chartjs", {
    configurable: true,
    enumerable: false,
    value: {
      listeners: [
        e
      ]
    }
  }), Qd.forEach((n) => {
    const r = "_onData" + qs(n), o = t7[n];
    Object.defineProperty(t7, n, {
      configurable: true,
      enumerable: false,
      value(...i) {
        const s = o.apply(this, i);
        return t7._chartjs.listeners.forEach((a) => {
          typeof a[r] == "function" && a[r](...i);
        }), s;
      }
    });
  });
}
function pl(t7, e) {
  const n = t7._chartjs;
  if (!n)
    return;
  const r = n.listeners, o = r.indexOf(e);
  o !== -1 && r.splice(o, 1), !(r.length > 0) && (Qd.forEach((i) => {
    delete t7[i];
  }), delete t7._chartjs);
}
function b0(t7) {
  const e = new Set(t7);
  return e.size === t7.length ? t7 : Array.from(e);
}
const eu = function() {
  return typeof window > "u" ? function(t7) {
    return t7();
  } : window.requestAnimationFrame;
}();
function tu(t7, e) {
  let n = [], r = false;
  return function(...o) {
    n = o, r || (r = true, eu.call(window, () => {
      r = false, t7.apply(e, n);
    }));
  };
}
function y0(t7, e) {
  let n;
  return function(...r) {
    return e ? (clearTimeout(n), n = setTimeout(t7, e, r)) : t7.apply(this, r), e;
  };
}
const nu = (t7) => t7 === "start" ? "left" : t7 === "end" ? "right" : "center", at = (t7, e, n) => t7 === "start" ? e : t7 === "end" ? n : (e + n) / 2, v0 = (t7, e, n, r) => t7 === (r ? "left" : "right") ? n : t7 === "center" ? (e + n) / 2 : e, mo = (t7) => t7 === 0 || t7 === 1, ml = (t7, e, n) => -(Math.pow(2, 10 * (t7 -= 1)) * Math.sin((t7 - e) * Ne / n)), bl = (t7, e, n) => Math.pow(2, -10 * t7) * Math.sin((t7 - e) * Ne / n) + 1, Rr = {
  linear: (t7) => t7,
  easeInQuad: (t7) => t7 * t7,
  easeOutQuad: (t7) => -t7 * (t7 - 2),
  easeInOutQuad: (t7) => (t7 /= 0.5) < 1 ? 0.5 * t7 * t7 : -0.5 * (--t7 * (t7 - 2) - 1),
  easeInCubic: (t7) => t7 * t7 * t7,
  easeOutCubic: (t7) => (t7 -= 1) * t7 * t7 + 1,
  easeInOutCubic: (t7) => (t7 /= 0.5) < 1 ? 0.5 * t7 * t7 * t7 : 0.5 * ((t7 -= 2) * t7 * t7 + 2),
  easeInQuart: (t7) => t7 * t7 * t7 * t7,
  easeOutQuart: (t7) => -((t7 -= 1) * t7 * t7 * t7 - 1),
  easeInOutQuart: (t7) => (t7 /= 0.5) < 1 ? 0.5 * t7 * t7 * t7 * t7 : -0.5 * ((t7 -= 2) * t7 * t7 * t7 - 2),
  easeInQuint: (t7) => t7 * t7 * t7 * t7 * t7,
  easeOutQuint: (t7) => (t7 -= 1) * t7 * t7 * t7 * t7 + 1,
  easeInOutQuint: (t7) => (t7 /= 0.5) < 1 ? 0.5 * t7 * t7 * t7 * t7 * t7 : 0.5 * ((t7 -= 2) * t7 * t7 * t7 * t7 + 2),
  easeInSine: (t7) => -Math.cos(t7 * Ae) + 1,
  easeOutSine: (t7) => Math.sin(t7 * Ae),
  easeInOutSine: (t7) => -0.5 * (Math.cos(Fe * t7) - 1),
  easeInExpo: (t7) => t7 === 0 ? 0 : Math.pow(2, 10 * (t7 - 1)),
  easeOutExpo: (t7) => t7 === 1 ? 1 : -Math.pow(2, -10 * t7) + 1,
  easeInOutExpo: (t7) => mo(t7) ? t7 : t7 < 0.5 ? 0.5 * Math.pow(2, 10 * (t7 * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t7 * 2 - 1)) + 2),
  easeInCirc: (t7) => t7 >= 1 ? t7 : -(Math.sqrt(1 - t7 * t7) - 1),
  easeOutCirc: (t7) => Math.sqrt(1 - (t7 -= 1) * t7),
  easeInOutCirc: (t7) => (t7 /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t7 * t7) - 1) : 0.5 * (Math.sqrt(1 - (t7 -= 2) * t7) + 1),
  easeInElastic: (t7) => mo(t7) ? t7 : ml(t7, 0.075, 0.3),
  easeOutElastic: (t7) => mo(t7) ? t7 : bl(t7, 0.075, 0.3),
  easeInOutElastic(t7) {
    return mo(t7) ? t7 : t7 < 0.5 ? 0.5 * ml(t7 * 2, 0.1125, 0.45) : 0.5 + 0.5 * bl(t7 * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(t7) {
    return t7 * t7 * ((1.70158 + 1) * t7 - 1.70158);
  },
  easeOutBack(t7) {
    return (t7 -= 1) * t7 * ((1.70158 + 1) * t7 + 1.70158) + 1;
  },
  easeInOutBack(t7) {
    let e = 1.70158;
    return (t7 /= 0.5) < 1 ? 0.5 * (t7 * t7 * (((e *= 1.525) + 1) * t7 - e)) : 0.5 * ((t7 -= 2) * t7 * (((e *= 1.525) + 1) * t7 + e) + 2);
  },
  easeInBounce: (t7) => 1 - Rr.easeOutBounce(1 - t7),
  easeOutBounce(t7) {
    return t7 < 1 / 2.75 ? 7.5625 * t7 * t7 : t7 < 2 / 2.75 ? 7.5625 * (t7 -= 1.5 / 2.75) * t7 + 0.75 : t7 < 2.5 / 2.75 ? 7.5625 * (t7 -= 2.25 / 2.75) * t7 + 0.9375 : 7.5625 * (t7 -= 2.625 / 2.75) * t7 + 0.984375;
  },
  easeInOutBounce: (t7) => t7 < 0.5 ? Rr.easeInBounce(t7 * 2) * 0.5 : Rr.easeOutBounce(t7 * 2 - 1) * 0.5 + 0.5
};
function ru(t7) {
  if (t7 && typeof t7 == "object") {
    const e = t7.toString();
    return e === "[object CanvasPattern]" || e === "[object CanvasGradient]";
  }
  return false;
}
function yl(t7) {
  return ru(t7) ? t7 : new Br(t7);
}
function Gi(t7) {
  return ru(t7) ? t7 : new Br(t7).saturate(0.5).darken(0.1).hexString();
}
const x0 = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], w0 = [
  "color",
  "borderColor",
  "backgroundColor"
];
function k0(t7) {
  t7.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), t7.describe("animation", {
    _fallback: false,
    _indexable: false,
    _scriptable: (e) => e !== "onProgress" && e !== "onComplete" && e !== "fn"
  }), t7.set("animations", {
    colors: {
      type: "color",
      properties: w0
    },
    numbers: {
      type: "number",
      properties: x0
    }
  }), t7.describe("animations", {
    _fallback: "animation"
  }), t7.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (e) => e | 0
        }
      }
    }
  });
}
function C0(t7) {
  t7.set("layout", {
    autoPadding: true,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const vl = /* @__PURE__ */ new Map();
function _0(t7, e) {
  e = e || {};
  const n = t7 + JSON.stringify(e);
  let r = vl.get(n);
  return r || (r = new Intl.NumberFormat(t7, e), vl.set(n, r)), r;
}
function S0(t7, e, n) {
  return _0(e, n).format(t7);
}
const E0 = {
  values(t7) {
    return He(t7) ? t7 : "" + t7;
  }
};
var O0 = {
  formatters: E0
};
function T0(t7) {
  t7.set("scale", {
    display: true,
    offset: false,
    reverse: false,
    beginAtZero: false,
    bounds: "ticks",
    clip: true,
    grace: 0,
    grid: {
      display: true,
      lineWidth: 1,
      drawOnChartArea: true,
      drawTicks: true,
      tickLength: 8,
      tickWidth: (e, n) => n.lineWidth,
      tickColor: (e, n) => n.color,
      offset: false
    },
    border: {
      display: true,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: false,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: false,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: true,
      autoSkip: true,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: O0.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: false,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), t7.route("scale.ticks", "color", "", "color"), t7.route("scale.grid", "color", "", "borderColor"), t7.route("scale.border", "color", "", "borderColor"), t7.route("scale.title", "color", "", "color"), t7.describe("scale", {
    _fallback: false,
    _scriptable: (e) => !e.startsWith("before") && !e.startsWith("after") && e !== "callback" && e !== "parser",
    _indexable: (e) => e !== "borderDash" && e !== "tickBorderDash" && e !== "dash"
  }), t7.describe("scales", {
    _fallback: "scale"
  }), t7.describe("scale.ticks", {
    _scriptable: (e) => e !== "backdropPadding" && e !== "callback",
    _indexable: (e) => e !== "backdropPadding"
  });
}
const Nn = /* @__PURE__ */ Object.create(null), ks = /* @__PURE__ */ Object.create(null);
function Mr(t7, e) {
  if (!e)
    return t7;
  const n = e.split(".");
  for (let r = 0, o = n.length; r < o; ++r) {
    const i = n[r];
    t7 = t7[i] || (t7[i] = /* @__PURE__ */ Object.create(null));
  }
  return t7;
}
function Xi(t7, e, n) {
  return typeof e == "string" ? $r(Mr(t7, e), n) : $r(Mr(t7, ""), e);
}
class N0 {
  constructor(e, n) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (r) => r.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (r, o) => Gi(o.backgroundColor), this.hoverBorderColor = (r, o) => Gi(o.borderColor), this.hoverColor = (r, o) => Gi(o.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: true,
      includeInvisible: false
    }, this.maintainAspectRatio = true, this.onHover = null, this.onClick = null, this.parsing = true, this.plugins = {}, this.responsive = true, this.scale = void 0, this.scales = {}, this.showLine = true, this.drawActiveElementsOnTop = true, this.describe(e), this.apply(n);
  }
  set(e, n) {
    return Xi(this, e, n);
  }
  get(e) {
    return Mr(this, e);
  }
  describe(e, n) {
    return Xi(ks, e, n);
  }
  override(e, n) {
    return Xi(Nn, e, n);
  }
  route(e, n, r, o) {
    const i = Mr(this, e), s = Mr(this, r), a = "_" + n;
    Object.defineProperties(i, {
      [a]: {
        value: i[n],
        writable: true
      },
      [n]: {
        enumerable: true,
        get() {
          const l = this[a], c = s[o];
          return ie(l) ? Object.assign({}, c, l) : ge(l, c);
        },
        set(l) {
          this[a] = l;
        }
      }
    });
  }
  apply(e) {
    e.forEach((n) => n(this));
  }
}
var _e = /* @__PURE__ */ new N0({
  _scriptable: (t7) => !t7.startsWith("on"),
  _indexable: (t7) => t7 !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: false,
    _indexable: false
  }
}, [
  k0,
  C0,
  T0
]);
function R0(t7) {
  return !t7 || qe(t7.size) || qe(t7.family) ? null : (t7.style ? t7.style + " " : "") + (t7.weight ? t7.weight + " " : "") + t7.size + "px " + t7.family;
}
function xl(t7, e, n, r, o) {
  let i = e[o];
  return i || (i = e[o] = t7.measureText(o).width, n.push(o)), i > r && (r = i), r;
}
function pn(t7, e, n) {
  const r = t7.currentDevicePixelRatio, o = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((e - o) * r) / r + o;
}
function wl(t7, e) {
  !e && !t7 || (e = e || t7.getContext("2d"), e.save(), e.resetTransform(), e.clearRect(0, 0, t7.width, t7.height), e.restore());
}
function kl(t7, e, n, r) {
  ou(t7, e, n, r, null);
}
function ou(t7, e, n, r, o) {
  let i, s, a, l, c, d, u, f;
  const h = e.pointStyle, g = e.rotation, p = e.radius;
  let m = (g || 0) * l0;
  if (h && typeof h == "object" && (i = h.toString(), i === "[object HTMLImageElement]" || i === "[object HTMLCanvasElement]")) {
    t7.save(), t7.translate(n, r), t7.rotate(m), t7.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height), t7.restore();
    return;
  }
  if (!(isNaN(p) || p <= 0)) {
    switch (t7.beginPath(), h) {
      default:
        o ? t7.ellipse(n, r, o / 2, p, 0, 0, Ne) : t7.arc(n, r, p, 0, Ne), t7.closePath();
        break;
      case "triangle":
        d = o ? o / 2 : p, t7.moveTo(n + Math.sin(m) * d, r - Math.cos(m) * p), m += hl, t7.lineTo(n + Math.sin(m) * d, r - Math.cos(m) * p), m += hl, t7.lineTo(n + Math.sin(m) * d, r - Math.cos(m) * p), t7.closePath();
        break;
      case "rectRounded":
        c = p * 0.516, l = p - c, s = Math.cos(m + hn) * l, u = Math.cos(m + hn) * (o ? o / 2 - c : l), a = Math.sin(m + hn) * l, f = Math.sin(m + hn) * (o ? o / 2 - c : l), t7.arc(n - u, r - a, c, m - Fe, m - Ae), t7.arc(n + f, r - s, c, m - Ae, m), t7.arc(n + u, r + a, c, m, m + Ae), t7.arc(n - f, r + s, c, m + Ae, m + Fe), t7.closePath();
        break;
      case "rect":
        if (!g) {
          l = Math.SQRT1_2 * p, d = o ? o / 2 : l, t7.rect(n - d, r - l, 2 * d, 2 * l);
          break;
        }
        m += hn;
      case "rectRot":
        u = Math.cos(m) * (o ? o / 2 : p), s = Math.cos(m) * p, a = Math.sin(m) * p, f = Math.sin(m) * (o ? o / 2 : p), t7.moveTo(n - u, r - a), t7.lineTo(n + f, r - s), t7.lineTo(n + u, r + a), t7.lineTo(n - f, r + s), t7.closePath();
        break;
      case "crossRot":
        m += hn;
      case "cross":
        u = Math.cos(m) * (o ? o / 2 : p), s = Math.cos(m) * p, a = Math.sin(m) * p, f = Math.sin(m) * (o ? o / 2 : p), t7.moveTo(n - u, r - a), t7.lineTo(n + u, r + a), t7.moveTo(n + f, r - s), t7.lineTo(n - f, r + s);
        break;
      case "star":
        u = Math.cos(m) * (o ? o / 2 : p), s = Math.cos(m) * p, a = Math.sin(m) * p, f = Math.sin(m) * (o ? o / 2 : p), t7.moveTo(n - u, r - a), t7.lineTo(n + u, r + a), t7.moveTo(n + f, r - s), t7.lineTo(n - f, r + s), m += hn, u = Math.cos(m) * (o ? o / 2 : p), s = Math.cos(m) * p, a = Math.sin(m) * p, f = Math.sin(m) * (o ? o / 2 : p), t7.moveTo(n - u, r - a), t7.lineTo(n + u, r + a), t7.moveTo(n + f, r - s), t7.lineTo(n - f, r + s);
        break;
      case "line":
        s = o ? o / 2 : Math.cos(m) * p, a = Math.sin(m) * p, t7.moveTo(n - s, r - a), t7.lineTo(n + s, r + a);
        break;
      case "dash":
        t7.moveTo(n, r), t7.lineTo(n + Math.cos(m) * (o ? o / 2 : p), r + Math.sin(m) * p);
        break;
      case false:
        t7.closePath();
        break;
    }
    t7.fill(), e.borderWidth > 0 && t7.stroke();
  }
}
function iu(t7, e, n) {
  return n = n || 0.5, !e || t7 && t7.x > e.left - n && t7.x < e.right + n && t7.y > e.top - n && t7.y < e.bottom + n;
}
function Xs(t7, e) {
  t7.save(), t7.beginPath(), t7.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t7.clip();
}
function Js(t7) {
  t7.restore();
}
function M0(t7, e) {
  e.translation && t7.translate(e.translation[0], e.translation[1]), qe(e.rotation) || t7.rotate(e.rotation), e.color && (t7.fillStyle = e.color), e.textAlign && (t7.textAlign = e.textAlign), e.textBaseline && (t7.textBaseline = e.textBaseline);
}
function P0(t7, e, n, r, o) {
  if (o.strikethrough || o.underline) {
    const i = t7.measureText(r), s = e - i.actualBoundingBoxLeft, a = e + i.actualBoundingBoxRight, l = n - i.actualBoundingBoxAscent, c = n + i.actualBoundingBoxDescent, d = o.strikethrough ? (l + c) / 2 : c;
    t7.strokeStyle = t7.fillStyle, t7.beginPath(), t7.lineWidth = o.decorationWidth || 2, t7.moveTo(s, d), t7.lineTo(a, d), t7.stroke();
  }
}
function A0(t7, e) {
  const n = t7.fillStyle;
  t7.fillStyle = e.color, t7.fillRect(e.left, e.top, e.width, e.height), t7.fillStyle = n;
}
function ei(t7, e, n, r, o, i = {}) {
  const s = He(e) ? e : [
    e
  ], a = i.strokeWidth > 0 && i.strokeColor !== "";
  let l, c;
  for (t7.save(), t7.font = o.string, M0(t7, i), l = 0; l < s.length; ++l)
    c = s[l], i.backdrop && A0(t7, i.backdrop), a && (i.strokeColor && (t7.strokeStyle = i.strokeColor), qe(i.strokeWidth) || (t7.lineWidth = i.strokeWidth), t7.strokeText(c, n, r, i.maxWidth)), t7.fillText(c, n, r, i.maxWidth), P0(t7, n, r, c, i), r += Number(o.lineHeight);
  t7.restore();
}
function Cs(t7, e) {
  const { x: n, y: r, w: o, h: i, radius: s } = e;
  t7.arc(n + s.topLeft, r + s.topLeft, s.topLeft, 1.5 * Fe, Fe, true), t7.lineTo(n, r + i - s.bottomLeft), t7.arc(n + s.bottomLeft, r + i - s.bottomLeft, s.bottomLeft, Fe, Ae, true), t7.lineTo(n + o - s.bottomRight, r + i), t7.arc(n + o - s.bottomRight, r + i - s.bottomRight, s.bottomRight, Ae, 0, true), t7.lineTo(n + o, r + s.topRight), t7.arc(n + o - s.topRight, r + s.topRight, s.topRight, 0, -Ae, true), t7.lineTo(n + s.topLeft, r);
}
const D0 = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, I0 = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function L0(t7, e) {
  const n = ("" + t7).match(D0);
  if (!n || n[1] === "normal")
    return e * 1.2;
  switch (t7 = +n[2], n[3]) {
    case "px":
      return t7;
    case "%":
      t7 /= 100;
      break;
  }
  return e * t7;
}
const F0 = (t7) => +t7 || 0;
function Zs(t7, e) {
  const n = {}, r = ie(e), o = r ? Object.keys(e) : e, i = ie(t7) ? r ? (s) => ge(t7[s], t7[e[s]]) : (s) => t7[s] : () => t7;
  for (const s of o)
    n[s] = F0(i(s));
  return n;
}
function z0(t7) {
  return Zs(t7, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function Pr(t7) {
  return Zs(t7, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function kt(t7) {
  const e = z0(t7);
  return e.width = e.left + e.right, e.height = e.top + e.bottom, e;
}
function et(t7, e) {
  t7 = t7 || {}, e = e || _e.font;
  let n = ge(t7.size, e.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let r = ge(t7.style, e.style);
  r && !("" + r).match(I0) && (console.warn('Invalid font style specified: "' + r + '"'), r = void 0);
  const o = {
    family: ge(t7.family, e.family),
    lineHeight: L0(ge(t7.lineHeight, e.lineHeight), n),
    size: n,
    style: r,
    weight: ge(t7.weight, e.weight),
    string: ""
  };
  return o.string = R0(o), o;
}
function bo(t7, e, n, r) {
  let o, i, s;
  for (o = 0, i = t7.length; o < i; ++o)
    if (s = t7[o], s !== void 0 && s !== void 0)
      return s;
}
function B0(t7, e, n) {
  const { min: r, max: o } = t7, i = Xd(e, (o - r) / 2), s = (a, l) => n && a === 0 ? 0 : a + l;
  return {
    min: s(r, -Math.abs(i)),
    max: s(o, i)
  };
}
function ir(t7, e) {
  return Object.assign(Object.create(t7), e);
}
function Qs(t7, e = [
  ""
], n, r, o = () => t7[0]) {
  const i = n || t7;
  typeof r > "u" && (r = cu("_fallback", t7));
  const s = {
    [Symbol.toStringTag]: "Object",
    _cacheable: true,
    _scopes: t7,
    _rootScopes: i,
    _fallback: r,
    _getTarget: o,
    override: (a) => Qs([
      a,
      ...t7
    ], e, i, r)
  };
  return new Proxy(s, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete t7[0][l], true;
    },
    /**
    * A trap for getting property values.
    */
    get(a, l) {
      return au(a, l, () => K0(l, e, t7, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(t7[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(a, l) {
      return _l(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return _l(a);
    },
    /**
    * A trap for setting property values.
    */
    set(a, l, c) {
      const d = a._storage || (a._storage = o());
      return a[l] = d[l] = c, delete a._keys, true;
    }
  });
}
function Xn(t7, e, n, r) {
  const o = {
    _cacheable: false,
    _proxy: t7,
    _context: e,
    _subProxy: n,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: su(t7, r),
    setContext: (i) => Xn(t7, i, n, r),
    override: (i) => Xn(t7.override(i), e, n, r)
  };
  return new Proxy(o, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(i, s) {
      return delete i[s], delete t7[s], true;
    },
    /**
    * A trap for getting property values.
    */
    get(i, s, a) {
      return au(i, s, () => j0(i, s, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(i, s) {
      return i._descriptors.allKeys ? Reflect.has(t7, s) ? {
        enumerable: true,
        configurable: true
      } : void 0 : Reflect.getOwnPropertyDescriptor(t7, s);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(t7);
    },
    /**
    * A trap for the in operator.
    */
    has(i, s) {
      return Reflect.has(t7, s);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(t7);
    },
    /**
    * A trap for setting property values.
    */
    set(i, s, a) {
      return t7[s] = a, delete i[s], true;
    }
  });
}
function su(t7, e = {
  scriptable: true,
  indexable: true
}) {
  const { _scriptable: n = e.scriptable, _indexable: r = e.indexable, _allKeys: o = e.allKeys } = t7;
  return {
    allKeys: o,
    scriptable: n,
    indexable: r,
    isScriptable: cn(n) ? n : () => n,
    isIndexable: cn(r) ? r : () => r
  };
}
const $0 = (t7, e) => t7 ? t7 + qs(e) : e, ea = (t7, e) => ie(e) && t7 !== "adapters" && (Object.getPrototypeOf(e) === null || e.constructor === Object);
function au(t7, e, n) {
  if (Object.prototype.hasOwnProperty.call(t7, e) || e === "constructor")
    return t7[e];
  const r = n();
  return t7[e] = r, r;
}
function j0(t7, e, n) {
  const { _proxy: r, _context: o, _subProxy: i, _descriptors: s } = t7;
  let a = r[e];
  return cn(a) && s.isScriptable(e) && (a = H0(e, a, t7, n)), He(a) && a.length && (a = W0(e, a, t7, s.isIndexable)), ea(e, a) && (a = Xn(a, o, i && i[e], s)), a;
}
function H0(t7, e, n, r) {
  const { _proxy: o, _context: i, _subProxy: s, _stack: a } = n;
  if (a.has(t7))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + t7);
  a.add(t7);
  let l = e(i, s || r);
  return a.delete(t7), ea(t7, l) && (l = ta(o._scopes, o, t7, l)), l;
}
function W0(t7, e, n, r) {
  const { _proxy: o, _context: i, _subProxy: s, _descriptors: a } = n;
  if (typeof i.index < "u" && r(t7))
    return e[i.index % e.length];
  if (ie(e[0])) {
    const l = e, c = o._scopes.filter((d) => d !== l);
    e = [];
    for (const d of l) {
      const u = ta(c, o, t7, d);
      e.push(Xn(u, i, s && s[t7], a));
    }
  }
  return e;
}
function lu(t7, e, n) {
  return cn(t7) ? t7(e, n) : t7;
}
const V0 = (t7, e) => t7 === true ? e : typeof t7 == "string" ? jr(e, t7) : void 0;
function Y0(t7, e, n, r, o) {
  for (const i of e) {
    const s = V0(n, i);
    if (s) {
      t7.add(s);
      const a = lu(s._fallback, n, o);
      if (typeof a < "u" && a !== n && a !== r)
        return a;
    } else if (s === false && typeof r < "u" && n !== r)
      return null;
  }
  return false;
}
function ta(t7, e, n, r) {
  const o = e._rootScopes, i = lu(e._fallback, n, r), s = [
    ...t7,
    ...o
  ], a = /* @__PURE__ */ new Set();
  a.add(r);
  let l = Cl(a, s, n, i || n, r);
  return l === null || typeof i < "u" && i !== n && (l = Cl(a, s, i, l, r), l === null) ? false : Qs(Array.from(a), [
    ""
  ], o, i, () => U0(e, n, r));
}
function Cl(t7, e, n, r, o) {
  for (; n; )
    n = Y0(t7, e, n, r, o);
  return n;
}
function U0(t7, e, n) {
  const r = t7._getTarget();
  e in r || (r[e] = {});
  const o = r[e];
  return He(o) && ie(n) ? n : o || {};
}
function K0(t7, e, n, r) {
  let o;
  for (const i of e)
    if (o = cu($0(i, t7), n), typeof o < "u")
      return ea(t7, o) ? ta(n, r, t7, o) : o;
}
function cu(t7, e) {
  for (const n of e) {
    if (!n)
      continue;
    const r = n[t7];
    if (typeof r < "u")
      return r;
  }
}
function _l(t7) {
  let e = t7._keys;
  return e || (e = t7._keys = q0(t7._scopes)), e;
}
function q0(t7) {
  const e = /* @__PURE__ */ new Set();
  for (const n of t7)
    for (const r of Object.keys(n).filter((o) => !o.startsWith("_")))
      e.add(r);
  return Array.from(e);
}
function na() {
  return typeof window < "u" && typeof document < "u";
}
function ra(t7) {
  let e = t7.parentNode;
  return e && e.toString() === "[object ShadowRoot]" && (e = e.host), e;
}
function ti(t7, e, n) {
  let r;
  return typeof t7 == "string" ? (r = parseInt(t7, 10), t7.indexOf("%") !== -1 && (r = r / 100 * e.parentNode[n])) : r = t7, r;
}
const ki = (t7) => t7.ownerDocument.defaultView.getComputedStyle(t7, null);
function G0(t7, e) {
  return ki(t7).getPropertyValue(e);
}
const X0 = [
  "top",
  "right",
  "bottom",
  "left"
];
function Cn(t7, e, n) {
  const r = {};
  n = n ? "-" + n : "";
  for (let o = 0; o < 4; o++) {
    const i = X0[o];
    r[i] = parseFloat(t7[e + "-" + i + n]) || 0;
  }
  return r.width = r.left + r.right, r.height = r.top + r.bottom, r;
}
const J0 = (t7, e, n) => (t7 > 0 || e > 0) && (!n || !n.shadowRoot);
function Z0(t7, e) {
  const n = t7.touches, r = n && n.length ? n[0] : t7, { offsetX: o, offsetY: i } = r;
  let s = false, a, l;
  if (J0(o, i, t7.target))
    a = o, l = i;
  else {
    const c = e.getBoundingClientRect();
    a = r.clientX - c.left, l = r.clientY - c.top, s = true;
  }
  return {
    x: a,
    y: l,
    box: s
  };
}
function yn(t7, e) {
  if ("native" in t7)
    return t7;
  const { canvas: n, currentDevicePixelRatio: r } = e, o = ki(n), i = o.boxSizing === "border-box", s = Cn(o, "padding"), a = Cn(o, "border", "width"), { x: l, y: c, box: d } = Z0(t7, n), u = s.left + (d && a.left), f = s.top + (d && a.top);
  let { width: h, height: g } = e;
  return i && (h -= s.width + a.width, g -= s.height + a.height), {
    x: Math.round((l - u) / h * n.width / r),
    y: Math.round((c - f) / g * n.height / r)
  };
}
function Q0(t7, e, n) {
  let r, o;
  if (e === void 0 || n === void 0) {
    const i = t7 && ra(t7);
    if (!i)
      e = t7.clientWidth, n = t7.clientHeight;
    else {
      const s = i.getBoundingClientRect(), a = ki(i), l = Cn(a, "border", "width"), c = Cn(a, "padding");
      e = s.width - c.width - l.width, n = s.height - c.height - l.height, r = ti(a.maxWidth, i, "clientWidth"), o = ti(a.maxHeight, i, "clientHeight");
    }
  }
  return {
    width: e,
    height: n,
    maxWidth: r || Jo,
    maxHeight: o || Jo
  };
}
const yo = (t7) => Math.round(t7 * 10) / 10;
function em(t7, e, n, r) {
  const o = ki(t7), i = Cn(o, "margin"), s = ti(o.maxWidth, t7, "clientWidth") || Jo, a = ti(o.maxHeight, t7, "clientHeight") || Jo, l = Q0(t7, e, n);
  let { width: c, height: d } = l;
  if (o.boxSizing === "content-box") {
    const f = Cn(o, "border", "width"), h = Cn(o, "padding");
    c -= h.width + f.width, d -= h.height + f.height;
  }
  return c = Math.max(0, c - i.width), d = Math.max(0, r ? c / r : d - i.height), c = yo(Math.min(c, s, l.maxWidth)), d = yo(Math.min(d, a, l.maxHeight)), c && !d && (d = yo(c / 2)), (e !== void 0 || n !== void 0) && r && l.height && d > l.height && (d = l.height, c = yo(Math.floor(d * r))), {
    width: c,
    height: d
  };
}
function Sl(t7, e, n) {
  const r = e || 1, o = Math.floor(t7.height * r), i = Math.floor(t7.width * r);
  t7.height = Math.floor(t7.height), t7.width = Math.floor(t7.width);
  const s = t7.canvas;
  return s.style && (n || !s.style.height && !s.style.width) && (s.style.height = `${t7.height}px`, s.style.width = `${t7.width}px`), t7.currentDevicePixelRatio !== r || s.height !== o || s.width !== i ? (t7.currentDevicePixelRatio = r, s.height = o, s.width = i, t7.ctx.setTransform(r, 0, 0, r, 0, 0), true) : false;
}
const tm = function() {
  let t7 = false;
  try {
    const e = {
      get passive() {
        return t7 = true, false;
      }
    };
    na() && (window.addEventListener("test", null, e), window.removeEventListener("test", null, e));
  } catch {
  }
  return t7;
}();
function El(t7, e) {
  const n = G0(t7, e), r = n && n.match(/^(\d+)(\.\d+)?px$/);
  return r ? +r[1] : void 0;
}
const nm = function(t7, e) {
  return {
    x(n) {
      return t7 + t7 + e - n;
    },
    setWidth(n) {
      e = n;
    },
    textAlign(n) {
      return n === "center" ? n : n === "right" ? "left" : "right";
    },
    xPlus(n, r) {
      return n - r;
    },
    leftForLtr(n, r) {
      return n - r;
    }
  };
}, rm = function() {
  return {
    x(t7) {
      return t7;
    },
    setWidth(t7) {
    },
    textAlign(t7) {
      return t7;
    },
    xPlus(t7, e) {
      return t7 + e;
    },
    leftForLtr(t7, e) {
      return t7;
    }
  };
};
function qn(t7, e, n) {
  return t7 ? nm(e, n) : rm();
}
function du(t7, e) {
  let n, r;
  (e === "ltr" || e === "rtl") && (n = t7.canvas.style, r = [
    n.getPropertyValue("direction"),
    n.getPropertyPriority("direction")
  ], n.setProperty("direction", e, "important"), t7.prevTextDirection = r);
}
function uu(t7, e) {
  e !== void 0 && (delete t7.prevTextDirection, t7.canvas.style.setProperty("direction", e[0], e[1]));
}
/*!
 * Chart.js v4.4.8
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
class om {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = false, this._lastDate = void 0;
  }
  _notify(e, n, r, o) {
    const i = n.listeners[o], s = n.duration;
    i.forEach((a) => a({
      chart: e,
      initial: n.initial,
      numSteps: s,
      currentStep: Math.min(r - n.start, s)
    }));
  }
  _refresh() {
    this._request || (this._running = true, this._request = eu.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(e = Date.now()) {
    let n = 0;
    this._charts.forEach((r, o) => {
      if (!r.running || !r.items.length)
        return;
      const i = r.items;
      let s = i.length - 1, a = false, l;
      for (; s >= 0; --s)
        l = i[s], l._active ? (l._total > r.duration && (r.duration = l._total), l.tick(e), a = true) : (i[s] = i[i.length - 1], i.pop());
      a && (o.draw(), this._notify(o, r, e, "progress")), i.length || (r.running = false, this._notify(o, r, e, "complete"), r.initial = false), n += i.length;
    }), this._lastDate = e, n === 0 && (this._running = false);
  }
  _getAnims(e) {
    const n = this._charts;
    let r = n.get(e);
    return r || (r = {
      running: false,
      initial: true,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, n.set(e, r)), r;
  }
  listen(e, n, r) {
    this._getAnims(e).listeners[n].push(r);
  }
  add(e, n) {
    !n || !n.length || this._getAnims(e).items.push(...n);
  }
  has(e) {
    return this._getAnims(e).items.length > 0;
  }
  start(e) {
    const n = this._charts.get(e);
    n && (n.running = true, n.start = Date.now(), n.duration = n.items.reduce((r, o) => Math.max(r, o._duration), 0), this._refresh());
  }
  running(e) {
    if (!this._running)
      return false;
    const n = this._charts.get(e);
    return !(!n || !n.running || !n.items.length);
  }
  stop(e) {
    const n = this._charts.get(e);
    if (!n || !n.items.length)
      return;
    const r = n.items;
    let o = r.length - 1;
    for (; o >= 0; --o)
      r[o].cancel();
    n.items = [], this._notify(e, n, Date.now(), "complete");
  }
  remove(e) {
    return this._charts.delete(e);
  }
}
var $t = /* @__PURE__ */ new om();
const Ol = "transparent", im = {
  boolean(t7, e, n) {
    return n > 0.5 ? e : t7;
  },
  color(t7, e, n) {
    const r = yl(t7 || Ol), o = r.valid && yl(e || Ol);
    return o && o.valid ? o.mix(r, n).hexString() : e;
  },
  number(t7, e, n) {
    return t7 + (e - t7) * n;
  }
};
class sm {
  constructor(e, n, r, o) {
    const i = n[r];
    o = bo([
      e.to,
      o,
      i,
      e.from
    ]);
    const s = bo([
      e.from,
      i,
      o
    ]);
    this._active = true, this._fn = e.fn || im[e.type || typeof s], this._easing = Rr[e.easing] || Rr.linear, this._start = Math.floor(Date.now() + (e.delay || 0)), this._duration = this._total = Math.floor(e.duration), this._loop = !!e.loop, this._target = n, this._prop = r, this._from = s, this._to = o, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(e, n, r) {
    if (this._active) {
      this._notify(false);
      const o = this._target[this._prop], i = r - this._start, s = this._duration - i;
      this._start = r, this._duration = Math.floor(Math.max(s, e.duration)), this._total += i, this._loop = !!e.loop, this._to = bo([
        e.to,
        n,
        o,
        e.from
      ]), this._from = bo([
        e.from,
        o,
        n
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = false, this._notify(false));
  }
  tick(e) {
    const n = e - this._start, r = this._duration, o = this._prop, i = this._from, s = this._loop, a = this._to;
    let l;
    if (this._active = i !== a && (s || n < r), !this._active) {
      this._target[o] = a, this._notify(true);
      return;
    }
    if (n < 0) {
      this._target[o] = i;
      return;
    }
    l = n / r % 2, l = s && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[o] = this._fn(i, a, l);
  }
  wait() {
    const e = this._promises || (this._promises = []);
    return new Promise((n, r) => {
      e.push({
        res: n,
        rej: r
      });
    });
  }
  _notify(e) {
    const n = e ? "res" : "rej", r = this._promises || [];
    for (let o = 0; o < r.length; o++)
      r[o][n]();
  }
}
class fu {
  constructor(e, n) {
    this._chart = e, this._properties = /* @__PURE__ */ new Map(), this.configure(n);
  }
  configure(e) {
    if (!ie(e))
      return;
    const n = Object.keys(_e.animation), r = this._properties;
    Object.getOwnPropertyNames(e).forEach((o) => {
      const i = e[o];
      if (!ie(i))
        return;
      const s = {};
      for (const a of n)
        s[a] = i[a];
      (He(i.properties) && i.properties || [
        o
      ]).forEach((a) => {
        (a === o || !r.has(a)) && r.set(a, s);
      });
    });
  }
  _animateOptions(e, n) {
    const r = n.options, o = lm(e, r);
    if (!o)
      return [];
    const i = this._createAnimations(o, r);
    return r.$shared && am(e.options.$animations, r).then(() => {
      e.options = r;
    }, () => {
    }), i;
  }
  _createAnimations(e, n) {
    const r = this._properties, o = [], i = e.$animations || (e.$animations = {}), s = Object.keys(n), a = Date.now();
    let l;
    for (l = s.length - 1; l >= 0; --l) {
      const c = s[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        o.push(...this._animateOptions(e, n));
        continue;
      }
      const d = n[c];
      let u = i[c];
      const f = r.get(c);
      if (u)
        if (f && u.active()) {
          u.update(f, d, a);
          continue;
        } else
          u.cancel();
      if (!f || !f.duration) {
        e[c] = d;
        continue;
      }
      i[c] = u = new sm(f, e, c, d), o.push(u);
    }
    return o;
  }
  update(e, n) {
    if (this._properties.size === 0) {
      Object.assign(e, n);
      return;
    }
    const r = this._createAnimations(e, n);
    if (r.length)
      return $t.add(this._chart, r), true;
  }
}
function am(t7, e) {
  const n = [], r = Object.keys(e);
  for (let o = 0; o < r.length; o++) {
    const i = t7[r[o]];
    i && i.active() && n.push(i.wait());
  }
  return Promise.all(n);
}
function lm(t7, e) {
  if (!e)
    return;
  let n = t7.options;
  if (!n) {
    t7.options = e;
    return;
  }
  return n.$shared && (t7.options = n = Object.assign({}, n, {
    $shared: false,
    $animations: {}
  })), n;
}
function Tl(t7, e) {
  const n = t7 && t7.options || {}, r = n.reverse, o = n.min === void 0 ? e : 0, i = n.max === void 0 ? e : 0;
  return {
    start: r ? i : o,
    end: r ? o : i
  };
}
function cm(t7, e, n) {
  if (n === false)
    return false;
  const r = Tl(t7, n), o = Tl(e, n);
  return {
    top: o.end,
    right: r.end,
    bottom: o.start,
    left: r.start
  };
}
function dm(t7) {
  let e, n, r, o;
  return ie(t7) ? (e = t7.top, n = t7.right, r = t7.bottom, o = t7.left) : e = n = r = o = t7, {
    top: e,
    right: n,
    bottom: r,
    left: o,
    disabled: t7 === false
  };
}
function hu(t7, e) {
  const n = [], r = t7._getSortedDatasetMetas(e);
  let o, i;
  for (o = 0, i = r.length; o < i; ++o)
    n.push(r[o].index);
  return n;
}
function Nl(t7, e, n, r = {}) {
  const o = t7.keys, i = r.mode === "single";
  let s, a, l, c;
  if (e === null)
    return;
  let d = false;
  for (s = 0, a = o.length; s < a; ++s) {
    if (l = +o[s], l === n) {
      if (d = true, r.all)
        continue;
      break;
    }
    c = t7.values[l], Ut(c) && (i || e === 0 || gl(e) === gl(c)) && (e += c);
  }
  return !d && !r.all ? 0 : e;
}
function um(t7, e) {
  const { iScale: n, vScale: r } = e, o = n.axis === "x" ? "x" : "y", i = r.axis === "x" ? "x" : "y", s = Object.keys(t7), a = new Array(s.length);
  let l, c, d;
  for (l = 0, c = s.length; l < c; ++l)
    d = s[l], a[l] = {
      [o]: d,
      [i]: t7[d]
    };
  return a;
}
function Ji(t7, e) {
  const n = t7 && t7.options.stacked;
  return n || n === void 0 && e.stack !== void 0;
}
function fm(t7, e, n) {
  return `${t7.id}.${e.id}.${n.stack || n.type}`;
}
function hm(t7) {
  const { min: e, max: n, minDefined: r, maxDefined: o } = t7.getUserBounds();
  return {
    min: r ? e : Number.NEGATIVE_INFINITY,
    max: o ? n : Number.POSITIVE_INFINITY
  };
}
function gm(t7, e, n) {
  const r = t7[e] || (t7[e] = {});
  return r[n] || (r[n] = {});
}
function Rl(t7, e, n, r) {
  for (const o of e.getMatchingVisibleMetas(r).reverse()) {
    const i = t7[o.index];
    if (n && i > 0 || !n && i < 0)
      return o.index;
  }
  return null;
}
function Ml(t7, e) {
  const { chart: n, _cachedMeta: r } = t7, o = n._stacks || (n._stacks = {}), { iScale: i, vScale: s, index: a } = r, l = i.axis, c = s.axis, d = fm(i, s, r), u = e.length;
  let f;
  for (let h = 0; h < u; ++h) {
    const g = e[h], { [l]: p, [c]: m } = g, v = g._stacks || (g._stacks = {});
    f = v[c] = gm(o, d, p), f[a] = m, f._top = Rl(f, s, true, r.type), f._bottom = Rl(f, s, false, r.type);
    const y = f._visualValues || (f._visualValues = {});
    y[a] = m;
  }
}
function Zi(t7, e) {
  const n = t7.scales;
  return Object.keys(n).filter((r) => n[r].axis === e).shift();
}
function pm(t7, e) {
  return ir(t7, {
    active: false,
    dataset: void 0,
    datasetIndex: e,
    index: e,
    mode: "default",
    type: "dataset"
  });
}
function mm(t7, e, n) {
  return ir(t7, {
    active: false,
    dataIndex: e,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: e,
    mode: "default",
    type: "data"
  });
}
function fr(t7, e) {
  const n = t7.controller.index, r = t7.vScale && t7.vScale.axis;
  if (r) {
    e = e || t7._parsed;
    for (const o of e) {
      const i = o._stacks;
      if (!i || i[r] === void 0 || i[r][n] === void 0)
        return;
      delete i[r][n], i[r]._visualValues !== void 0 && i[r]._visualValues[n] !== void 0 && delete i[r]._visualValues[n];
    }
  }
}
const Qi = (t7) => t7 === "reset" || t7 === "none", Pl = (t7, e) => e ? t7 : Object.assign({}, t7), bm = (t7, e, n) => t7 && !e.hidden && e._stacked && {
  keys: hu(n, true),
  values: null
};
class Ar {
  constructor(e, n) {
    this.chart = e, this._ctx = e.ctx, this.index = n, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = false, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = false, this.supportsDecimation = false, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const e = this._cachedMeta;
    this.configure(), this.linkScales(), e._stacked = Ji(e.vScale, e), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(e) {
    this.index !== e && fr(this._cachedMeta), this.index = e;
  }
  linkScales() {
    const e = this.chart, n = this._cachedMeta, r = this.getDataset(), o = (u, f, h, g) => u === "x" ? f : u === "r" ? g : h, i = n.xAxisID = ge(r.xAxisID, Zi(e, "x")), s = n.yAxisID = ge(r.yAxisID, Zi(e, "y")), a = n.rAxisID = ge(r.rAxisID, Zi(e, "r")), l = n.indexAxis, c = n.iAxisID = o(l, i, s, a), d = n.vAxisID = o(l, s, i, a);
    n.xScale = this.getScaleForId(i), n.yScale = this.getScaleForId(s), n.rScale = this.getScaleForId(a), n.iScale = this.getScaleForId(c), n.vScale = this.getScaleForId(d);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(e) {
    return this.chart.scales[e];
  }
  _getOtherScale(e) {
    const n = this._cachedMeta;
    return e === n.iScale ? n.vScale : n.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const e = this._cachedMeta;
    this._data && pl(this._data, this), e._stacked && fr(e);
  }
  _dataCheck() {
    const e = this.getDataset(), n = e.data || (e.data = []), r = this._data;
    if (ie(n)) {
      const o = this._cachedMeta;
      this._data = um(n, o);
    } else if (r !== n) {
      if (r) {
        pl(r, this);
        const o = this._cachedMeta;
        fr(o), o._parsed = [];
      }
      n && Object.isExtensible(n) && m0(n, this), this._syncList = [], this._data = n;
    }
  }
  addElements() {
    const e = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (e.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(e) {
    const n = this._cachedMeta, r = this.getDataset();
    let o = false;
    this._dataCheck();
    const i = n._stacked;
    n._stacked = Ji(n.vScale, n), n.stack !== r.stack && (o = true, fr(n), n.stack = r.stack), this._resyncElements(e), (o || i !== n._stacked) && (Ml(this, n._parsed), n._stacked = Ji(n.vScale, n));
  }
  configure() {
    const e = this.chart.config, n = e.datasetScopeKeys(this._type), r = e.getOptionScopes(this.getDataset(), n, true);
    this.options = e.createResolver(r, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(e, n) {
    const { _cachedMeta: r, _data: o } = this, { iScale: i, _stacked: s } = r, a = i.axis;
    let l = e === 0 && n === o.length ? true : r._sorted, c = e > 0 && r._parsed[e - 1], d, u, f;
    if (this._parsing === false)
      r._parsed = o, r._sorted = true, f = o;
    else {
      He(o[e]) ? f = this.parseArrayData(r, o, e, n) : ie(o[e]) ? f = this.parseObjectData(r, o, e, n) : f = this.parsePrimitiveData(r, o, e, n);
      const h = () => u[a] === null || c && u[a] < c[a];
      for (d = 0; d < n; ++d)
        r._parsed[d + e] = u = f[d], l && (h() && (l = false), c = u);
      r._sorted = l;
    }
    s && Ml(this, f);
  }
  parsePrimitiveData(e, n, r, o) {
    const { iScale: i, vScale: s } = e, a = i.axis, l = s.axis, c = i.getLabels(), d = i === s, u = new Array(o);
    let f, h, g;
    for (f = 0, h = o; f < h; ++f)
      g = f + r, u[f] = {
        [a]: d || i.parse(c[g], g),
        [l]: s.parse(n[g], g)
      };
    return u;
  }
  parseArrayData(e, n, r, o) {
    const { xScale: i, yScale: s } = e, a = new Array(o);
    let l, c, d, u;
    for (l = 0, c = o; l < c; ++l)
      d = l + r, u = n[d], a[l] = {
        x: i.parse(u[0], d),
        y: s.parse(u[1], d)
      };
    return a;
  }
  parseObjectData(e, n, r, o) {
    const { xScale: i, yScale: s } = e, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(o);
    let d, u, f, h;
    for (d = 0, u = o; d < u; ++d)
      f = d + r, h = n[f], c[d] = {
        x: i.parse(jr(h, a), f),
        y: s.parse(jr(h, l), f)
      };
    return c;
  }
  getParsed(e) {
    return this._cachedMeta._parsed[e];
  }
  getDataElement(e) {
    return this._cachedMeta.data[e];
  }
  applyStack(e, n, r) {
    const o = this.chart, i = this._cachedMeta, s = n[e.axis], a = {
      keys: hu(o, true),
      values: n._stacks[e.axis]._visualValues
    };
    return Nl(a, s, i.index, {
      mode: r
    });
  }
  updateRangeFromParsed(e, n, r, o) {
    const i = r[n.axis];
    let s = i === null ? NaN : i;
    const a = o && r._stacks[n.axis];
    o && a && (o.values = a, s = Nl(o, i, this._cachedMeta.index)), e.min = Math.min(e.min, s), e.max = Math.max(e.max, s);
  }
  getMinMax(e, n) {
    const r = this._cachedMeta, o = r._parsed, i = r._sorted && e === r.iScale, s = o.length, a = this._getOtherScale(e), l = bm(n, r, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: d, max: u } = hm(a);
    let f, h;
    function g() {
      h = o[f];
      const p = h[a.axis];
      return !Ut(h[e.axis]) || d > p || u < p;
    }
    for (f = 0; f < s && !(!g() && (this.updateRangeFromParsed(c, e, h, l), i)); ++f)
      ;
    if (i) {
      for (f = s - 1; f >= 0; --f)
        if (!g()) {
          this.updateRangeFromParsed(c, e, h, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(e) {
    const n = this._cachedMeta._parsed, r = [];
    let o, i, s;
    for (o = 0, i = n.length; o < i; ++o)
      s = n[o][e.axis], Ut(s) && r.push(s);
    return r;
  }
  getMaxOverflow() {
    return false;
  }
  getLabelAndValue(e) {
    const n = this._cachedMeta, r = n.iScale, o = n.vScale, i = this.getParsed(e);
    return {
      label: r ? "" + r.getLabelForValue(i[r.axis]) : "",
      value: o ? "" + o.getLabelForValue(i[o.axis]) : ""
    };
  }
  _update(e) {
    const n = this._cachedMeta;
    this.update(e || "default"), n._clip = dm(ge(this.options.clip, cm(n.xScale, n.yScale, this.getMaxOverflow())));
  }
  update(e) {
  }
  draw() {
    const e = this._ctx, n = this.chart, r = this._cachedMeta, o = r.data || [], i = n.chartArea, s = [], a = this._drawStart || 0, l = this._drawCount || o.length - a, c = this.options.drawActiveElementsOnTop;
    let d;
    for (r.dataset && r.dataset.draw(e, i, a, l), d = a; d < a + l; ++d) {
      const u = o[d];
      u.hidden || (u.active && c ? s.push(u) : u.draw(e, i));
    }
    for (d = 0; d < s.length; ++d)
      s[d].draw(e, i);
  }
  getStyle(e, n) {
    const r = n ? "active" : "default";
    return e === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(r) : this.resolveDataElementOptions(e || 0, r);
  }
  getContext(e, n, r) {
    const o = this.getDataset();
    let i;
    if (e >= 0 && e < this._cachedMeta.data.length) {
      const s = this._cachedMeta.data[e];
      i = s.$context || (s.$context = mm(this.getContext(), e, s)), i.parsed = this.getParsed(e), i.raw = o.data[e], i.index = i.dataIndex = e;
    } else
      i = this.$context || (this.$context = pm(this.chart.getContext(), this.index)), i.dataset = o, i.index = i.datasetIndex = this.index;
    return i.active = !!n, i.mode = r, i;
  }
  resolveDatasetElementOptions(e) {
    return this._resolveElementOptions(this.datasetElementType.id, e);
  }
  resolveDataElementOptions(e, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, e);
  }
  _resolveElementOptions(e, n = "default", r) {
    const o = n === "active", i = this._cachedDataOpts, s = e + "-" + n, a = i[s], l = this.enableOptionSharing && Xo(r);
    if (a)
      return Pl(a, l);
    const c = this.chart.config, d = c.datasetElementScopeKeys(this._type, e), u = o ? [
      `${e}Hover`,
      "hover",
      e,
      ""
    ] : [
      e,
      ""
    ], f = c.getOptionScopes(this.getDataset(), d), h = Object.keys(_e.elements[e]), g = () => this.getContext(r, o, n), p = c.resolveNamedOptions(f, h, g, u);
    return p.$shared && (p.$shared = l, i[s] = Object.freeze(Pl(p, l))), p;
  }
  _resolveAnimations(e, n, r) {
    const o = this.chart, i = this._cachedDataOpts, s = `animation-${n}`, a = i[s];
    if (a)
      return a;
    let l;
    if (o.options.animation !== false) {
      const d = this.chart.config, u = d.datasetAnimationScopeKeys(this._type, n), f = d.getOptionScopes(this.getDataset(), u);
      l = d.createResolver(f, this.getContext(e, r, n));
    }
    const c = new fu(o, l && l.animations);
    return l && l._cacheable && (i[s] = Object.freeze(c)), c;
  }
  getSharedOptions(e) {
    if (e.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, e));
  }
  includeOptions(e, n) {
    return !n || Qi(e) || this.chart._animationsDisabled;
  }
  _getSharedOptions(e, n) {
    const r = this.resolveDataElementOptions(e, n), o = this._sharedOptions, i = this.getSharedOptions(r), s = this.includeOptions(n, i) || i !== o;
    return this.updateSharedOptions(i, n, r), {
      sharedOptions: i,
      includeOptions: s
    };
  }
  updateElement(e, n, r, o) {
    Qi(o) ? Object.assign(e, r) : this._resolveAnimations(n, o).update(e, r);
  }
  updateSharedOptions(e, n, r) {
    e && !Qi(n) && this._resolveAnimations(void 0, n).update(e, r);
  }
  _setStyle(e, n, r, o) {
    e.active = o;
    const i = this.getStyle(n, o);
    this._resolveAnimations(n, r, o).update(e, {
      options: !o && this.getSharedOptions(i) || i
    });
  }
  removeHoverStyle(e, n, r) {
    this._setStyle(e, r, "active", false);
  }
  setHoverStyle(e, n, r) {
    this._setStyle(e, r, "active", true);
  }
  _removeDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, "active", false);
  }
  _setDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, "active", true);
  }
  _resyncElements(e) {
    const n = this._data, r = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList)
      this[a](l, c);
    this._syncList = [];
    const o = r.length, i = n.length, s = Math.min(i, o);
    s && this.parse(0, s), i > o ? this._insertElements(o, i - o, e) : i < o && this._removeElements(i, o - i);
  }
  _insertElements(e, n, r = true) {
    const o = this._cachedMeta, i = o.data, s = e + n;
    let a;
    const l = (c) => {
      for (c.length += n, a = c.length - 1; a >= s; a--)
        c[a] = c[a - n];
    };
    for (l(i), a = e; a < s; ++a)
      i[a] = new this.dataElementType();
    this._parsing && l(o._parsed), this.parse(e, n), r && this.updateElements(i, e, n, "reset");
  }
  updateElements(e, n, r, o) {
  }
  _removeElements(e, n) {
    const r = this._cachedMeta;
    if (this._parsing) {
      const o = r._parsed.splice(e, n);
      r._stacked && fr(r, o);
    }
    r.data.splice(e, n);
  }
  _sync(e) {
    if (this._parsing)
      this._syncList.push(e);
    else {
      const [n, r, o] = e;
      this[n](r, o);
    }
    this.chart._dataChanges.push([
      this.index,
      ...e
    ]);
  }
  _onDataPush() {
    const e = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - e,
      e
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(e, n) {
    n && this._sync([
      "_removeElements",
      e,
      n
    ]);
    const r = arguments.length - 2;
    r && this._sync([
      "_insertElements",
      e,
      r
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
te(Ar, "defaults", {}), te(Ar, "datasetElementType", null), te(Ar, "dataElementType", null);
function ym(t7, e, n) {
  let r = 1, o = 1, i = 0, s = 0;
  if (e < Ne) {
    const a = t7, l = a + e, c = Math.cos(a), d = Math.sin(a), u = Math.cos(l), f = Math.sin(l), h = (C, x, w) => Qo(C, a, l, true) ? 1 : Math.max(x, x * n, w, w * n), g = (C, x, w) => Qo(C, a, l, true) ? -1 : Math.min(x, x * n, w, w * n), p = h(0, c, u), m = h(Ae, d, f), v = g(Fe, c, u), y = g(Fe + Ae, d, f);
    r = (p - v) / 2, o = (m - y) / 2, i = -(p + v) / 2, s = -(m + y) / 2;
  }
  return {
    ratioX: r,
    ratioY: o,
    offsetX: i,
    offsetY: s
  };
}
class Sr extends Ar {
  constructor(e, n) {
    super(e, n), this.enableOptionSharing = true, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(e, n) {
    const r = this.getDataset().data, o = this._cachedMeta;
    if (this._parsing === false)
      o._parsed = r;
    else {
      let i = (l) => +r[l];
      if (ie(r[e])) {
        const { key: l = "value" } = this._parsing;
        i = (c) => +jr(r[c], l);
      }
      let s, a;
      for (s = e, a = e + n; s < a; ++s)
        o._parsed[s] = i(s);
    }
  }
  _getRotation() {
    return wn(this.options.rotation - 90);
  }
  _getCircumference() {
    return wn(this.options.circumference);
  }
  _getRotationExtents() {
    let e = Ne, n = -Ne;
    for (let r = 0; r < this.chart.data.datasets.length; ++r)
      if (this.chart.isDatasetVisible(r) && this.chart.getDatasetMeta(r).type === this._type) {
        const o = this.chart.getDatasetMeta(r).controller, i = o._getRotation(), s = o._getCircumference();
        e = Math.min(e, i), n = Math.max(n, i + s);
      }
    return {
      rotation: e,
      circumference: n - e
    };
  }
  update(e) {
    const n = this.chart, { chartArea: r } = n, o = this._cachedMeta, i = o.data, s = this.getMaxBorderWidth() + this.getMaxOffset(i) + this.options.spacing, a = Math.max((Math.min(r.width, r.height) - s) / 2, 0), l = Math.min(n0(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: d, rotation: u } = this._getRotationExtents(), { ratioX: f, ratioY: h, offsetX: g, offsetY: p } = ym(u, d, l), m = (r.width - s) / f, v = (r.height - s) / h, y = Math.max(Math.min(m, v) / 2, 0), C = Xd(this.options.radius, y), x = Math.max(C * l, 0), w = (C - x) / this._getVisibleDatasetWeightTotal();
    this.offsetX = g * C, this.offsetY = p * C, o.total = this.calculateTotal(), this.outerRadius = C - w * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - w * c, 0), this.updateElements(i, 0, i.length, e);
  }
  _circumference(e, n) {
    const r = this.options, o = this._cachedMeta, i = this._getCircumference();
    return n && r.animation.animateRotate || !this.chart.getDataVisibility(e) || o._parsed[e] === null || o.data[e].hidden ? 0 : this.calculateCircumference(o._parsed[e] * i / Ne);
  }
  updateElements(e, n, r, o) {
    const i = o === "reset", s = this.chart, a = s.chartArea, c = s.options.animation, d = (a.left + a.right) / 2, u = (a.top + a.bottom) / 2, f = i && c.animateScale, h = f ? 0 : this.innerRadius, g = f ? 0 : this.outerRadius, { sharedOptions: p, includeOptions: m } = this._getSharedOptions(n, o);
    let v = this._getRotation(), y;
    for (y = 0; y < n; ++y)
      v += this._circumference(y, i);
    for (y = n; y < n + r; ++y) {
      const C = this._circumference(y, i), x = e[y], w = {
        x: d + this.offsetX,
        y: u + this.offsetY,
        startAngle: v,
        endAngle: v + C,
        circumference: C,
        outerRadius: g,
        innerRadius: h
      };
      m && (w.options = p || this.resolveDataElementOptions(y, x.active ? "active" : o)), v += C, this.updateElement(x, y, w, o);
    }
  }
  calculateTotal() {
    const e = this._cachedMeta, n = e.data;
    let r = 0, o;
    for (o = 0; o < n.length; o++) {
      const i = e._parsed[o];
      i !== null && !isNaN(i) && this.chart.getDataVisibility(o) && !n[o].hidden && (r += Math.abs(i));
    }
    return r;
  }
  calculateCircumference(e) {
    const n = this._cachedMeta.total;
    return n > 0 && !isNaN(e) ? Ne * (Math.abs(e) / n) : 0;
  }
  getLabelAndValue(e) {
    const n = this._cachedMeta, r = this.chart, o = r.data.labels || [], i = S0(n._parsed[e], r.options.locale);
    return {
      label: o[e] || "",
      value: i
    };
  }
  getMaxBorderWidth(e) {
    let n = 0;
    const r = this.chart;
    let o, i, s, a, l;
    if (!e) {
      for (o = 0, i = r.data.datasets.length; o < i; ++o)
        if (r.isDatasetVisible(o)) {
          s = r.getDatasetMeta(o), e = s.data, a = s.controller;
          break;
        }
    }
    if (!e)
      return 0;
    for (o = 0, i = e.length; o < i; ++o)
      l = a.resolveDataElementOptions(o), l.borderAlign !== "inner" && (n = Math.max(n, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return n;
  }
  getMaxOffset(e) {
    let n = 0;
    for (let r = 0, o = e.length; r < o; ++r) {
      const i = this.resolveDataElementOptions(r);
      n = Math.max(n, i.offset || 0, i.hoverOffset || 0);
    }
    return n;
  }
  _getRingWeightOffset(e) {
    let n = 0;
    for (let r = 0; r < e; ++r)
      this.chart.isDatasetVisible(r) && (n += this._getRingWeight(r));
    return n;
  }
  _getRingWeight(e) {
    return Math.max(ge(this.chart.data.datasets[e].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
te(Sr, "id", "doughnut"), te(Sr, "defaults", {
  datasetElementType: false,
  dataElementType: "arc",
  animation: {
    animateRotate: true,
    animateScale: false
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "circumference",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "startAngle",
        "x",
        "y",
        "offset",
        "borderWidth",
        "spacing"
      ]
    }
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r"
}), te(Sr, "descriptors", {
  _scriptable: (e) => e !== "spacing",
  _indexable: (e) => e !== "spacing" && !e.startsWith("borderDash") && !e.startsWith("hoverBorderDash")
}), te(Sr, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(e) {
          const n = e.data;
          if (n.labels.length && n.datasets.length) {
            const { labels: { pointStyle: r, color: o } } = e.legend.options;
            return n.labels.map((i, s) => {
              const l = e.getDatasetMeta(0).controller.getStyle(s);
              return {
                text: i,
                fillStyle: l.backgroundColor,
                strokeStyle: l.borderColor,
                fontColor: o,
                lineWidth: l.borderWidth,
                pointStyle: r,
                hidden: !e.getDataVisibility(s),
                index: s
              };
            });
          }
          return [];
        }
      },
      onClick(e, n, r) {
        r.chart.toggleDataVisibility(n.index), r.chart.update();
      }
    }
  }
});
function mn() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class oa {
  constructor(e) {
    te(this, "options");
    this.options = e || {};
  }
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(e) {
    Object.assign(oa.prototype, e);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return mn();
  }
  parse() {
    return mn();
  }
  format() {
    return mn();
  }
  add() {
    return mn();
  }
  diff() {
    return mn();
  }
  startOf() {
    return mn();
  }
  endOf() {
    return mn();
  }
}
var vm = {
  _date: oa
};
function xm(t7, e, n, r) {
  const { controller: o, data: i, _sorted: s } = t7, a = o._cachedMeta.iScale, l = t7.dataset && t7.dataset.options ? t7.dataset.options.spanGaps : null;
  if (a && e === a.axis && e !== "r" && s && i.length) {
    const c = a._reversePixels ? g0 : ws;
    if (r) {
      if (o._sharedOptions) {
        const d = i[0], u = typeof d.getRange == "function" && d.getRange(e);
        if (u) {
          const f = c(i, e, n - u), h = c(i, e, n + u);
          return {
            lo: f.lo,
            hi: h.hi
          };
        }
      }
    } else {
      const d = c(i, e, n);
      if (l) {
        const { vScale: u } = o._cachedMeta, { _parsed: f } = t7, h = f.slice(0, d.lo + 1).reverse().findIndex((p) => !qe(p[u.axis]));
        d.lo -= Math.max(0, h);
        const g = f.slice(d.hi).findIndex((p) => !qe(p[u.axis]));
        d.hi += Math.max(0, g);
      }
      return d;
    }
  }
  return {
    lo: 0,
    hi: i.length - 1
  };
}
function Ci(t7, e, n, r, o) {
  const i = t7.getSortedVisibleDatasetMetas(), s = n[e];
  for (let a = 0, l = i.length; a < l; ++a) {
    const { index: c, data: d } = i[a], { lo: u, hi: f } = xm(i[a], e, s, o);
    for (let h = u; h <= f; ++h) {
      const g = d[h];
      g.skip || r(g, c, h);
    }
  }
}
function wm(t7) {
  const e = t7.indexOf("x") !== -1, n = t7.indexOf("y") !== -1;
  return function(r, o) {
    const i = e ? Math.abs(r.x - o.x) : 0, s = n ? Math.abs(r.y - o.y) : 0;
    return Math.sqrt(Math.pow(i, 2) + Math.pow(s, 2));
  };
}
function es(t7, e, n, r, o) {
  const i = [];
  return !o && !t7.isPointInArea(e) || Ci(t7, n, e, function(a, l, c) {
    !o && !iu(a, t7.chartArea, 0) || a.inRange(e.x, e.y, r) && i.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, true), i;
}
function km(t7, e, n, r) {
  let o = [];
  function i(s, a, l) {
    const { startAngle: c, endAngle: d } = s.getProps([
      "startAngle",
      "endAngle"
    ], r), { angle: u } = Zd(s, {
      x: e.x,
      y: e.y
    });
    Qo(u, c, d) && o.push({
      element: s,
      datasetIndex: a,
      index: l
    });
  }
  return Ci(t7, n, e, i), o;
}
function Cm(t7, e, n, r, o, i) {
  let s = [];
  const a = wm(n);
  let l = Number.POSITIVE_INFINITY;
  function c(d, u, f) {
    const h = d.inRange(e.x, e.y, o);
    if (r && !h)
      return;
    const g = d.getCenterPoint(o);
    if (!(!!i || t7.isPointInArea(g)) && !h)
      return;
    const m = a(e, g);
    m < l ? (s = [
      {
        element: d,
        datasetIndex: u,
        index: f
      }
    ], l = m) : m === l && s.push({
      element: d,
      datasetIndex: u,
      index: f
    });
  }
  return Ci(t7, n, e, c), s;
}
function ts(t7, e, n, r, o, i) {
  return !i && !t7.isPointInArea(e) ? [] : n === "r" && !r ? km(t7, e, n, o) : Cm(t7, e, n, r, o, i);
}
function Al(t7, e, n, r, o) {
  const i = [], s = n === "x" ? "inXRange" : "inYRange";
  let a = false;
  return Ci(t7, n, e, (l, c, d) => {
    l[s] && l[s](e[n], o) && (i.push({
      element: l,
      datasetIndex: c,
      index: d
    }), a = a || l.inRange(e.x, e.y, o));
  }), r && !a ? [] : i;
}
var _m = {
  modes: {
    index(t7, e, n, r) {
      const o = yn(e, t7), i = n.axis || "x", s = n.includeInvisible || false, a = n.intersect ? es(t7, o, i, r, s) : ts(t7, o, i, false, r, s), l = [];
      return a.length ? (t7.getSortedVisibleDatasetMetas().forEach((c) => {
        const d = a[0].index, u = c.data[d];
        u && !u.skip && l.push({
          element: u,
          datasetIndex: c.index,
          index: d
        });
      }), l) : [];
    },
    dataset(t7, e, n, r) {
      const o = yn(e, t7), i = n.axis || "xy", s = n.includeInvisible || false;
      let a = n.intersect ? es(t7, o, i, r, s) : ts(t7, o, i, false, r, s);
      if (a.length > 0) {
        const l = a[0].datasetIndex, c = t7.getDatasetMeta(l).data;
        a = [];
        for (let d = 0; d < c.length; ++d)
          a.push({
            element: c[d],
            datasetIndex: l,
            index: d
          });
      }
      return a;
    },
    point(t7, e, n, r) {
      const o = yn(e, t7), i = n.axis || "xy", s = n.includeInvisible || false;
      return es(t7, o, i, r, s);
    },
    nearest(t7, e, n, r) {
      const o = yn(e, t7), i = n.axis || "xy", s = n.includeInvisible || false;
      return ts(t7, o, i, n.intersect, r, s);
    },
    x(t7, e, n, r) {
      const o = yn(e, t7);
      return Al(t7, o, "x", n.intersect, r);
    },
    y(t7, e, n, r) {
      const o = yn(e, t7);
      return Al(t7, o, "y", n.intersect, r);
    }
  }
};
const gu = [
  "left",
  "top",
  "right",
  "bottom"
];
function hr(t7, e) {
  return t7.filter((n) => n.pos === e);
}
function Dl(t7, e) {
  return t7.filter((n) => gu.indexOf(n.pos) === -1 && n.box.axis === e);
}
function gr(t7, e) {
  return t7.sort((n, r) => {
    const o = e ? r : n, i = e ? n : r;
    return o.weight === i.weight ? o.index - i.index : o.weight - i.weight;
  });
}
function Sm(t7) {
  const e = [];
  let n, r, o, i, s, a;
  for (n = 0, r = (t7 || []).length; n < r; ++n)
    o = t7[n], { position: i, options: { stack: s, stackWeight: a = 1 } } = o, e.push({
      index: n,
      box: o,
      pos: i,
      horizontal: o.isHorizontal(),
      weight: o.weight,
      stack: s && i + s,
      stackWeight: a
    });
  return e;
}
function Em(t7) {
  const e = {};
  for (const n of t7) {
    const { stack: r, pos: o, stackWeight: i } = n;
    if (!r || !gu.includes(o))
      continue;
    const s = e[r] || (e[r] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    s.count++, s.weight += i;
  }
  return e;
}
function Om(t7, e) {
  const n = Em(t7), { vBoxMaxWidth: r, hBoxMaxHeight: o } = e;
  let i, s, a;
  for (i = 0, s = t7.length; i < s; ++i) {
    a = t7[i];
    const { fullSize: l } = a.box, c = n[a.stack], d = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = d ? d * r : l && e.availableWidth, a.height = o) : (a.width = r, a.height = d ? d * o : l && e.availableHeight);
  }
  return n;
}
function Tm(t7) {
  const e = Sm(t7), n = gr(e.filter((c) => c.box.fullSize), true), r = gr(hr(e, "left"), true), o = gr(hr(e, "right")), i = gr(hr(e, "top"), true), s = gr(hr(e, "bottom")), a = Dl(e, "x"), l = Dl(e, "y");
  return {
    fullSize: n,
    leftAndTop: r.concat(i),
    rightAndBottom: o.concat(l).concat(s).concat(a),
    chartArea: hr(e, "chartArea"),
    vertical: r.concat(o).concat(l),
    horizontal: i.concat(s).concat(a)
  };
}
function Il(t7, e, n, r) {
  return Math.max(t7[n], e[n]) + Math.max(t7[r], e[r]);
}
function pu(t7, e) {
  t7.top = Math.max(t7.top, e.top), t7.left = Math.max(t7.left, e.left), t7.bottom = Math.max(t7.bottom, e.bottom), t7.right = Math.max(t7.right, e.right);
}
function Nm(t7, e, n, r) {
  const { pos: o, box: i } = n, s = t7.maxPadding;
  if (!ie(o)) {
    n.size && (t7[o] -= n.size);
    const u = r[n.stack] || {
      size: 0,
      count: 1
    };
    u.size = Math.max(u.size, n.horizontal ? i.height : i.width), n.size = u.size / u.count, t7[o] += n.size;
  }
  i.getPadding && pu(s, i.getPadding());
  const a = Math.max(0, e.outerWidth - Il(s, t7, "left", "right")), l = Math.max(0, e.outerHeight - Il(s, t7, "top", "bottom")), c = a !== t7.w, d = l !== t7.h;
  return t7.w = a, t7.h = l, n.horizontal ? {
    same: c,
    other: d
  } : {
    same: d,
    other: c
  };
}
function Rm(t7) {
  const e = t7.maxPadding;
  function n(r) {
    const o = Math.max(e[r] - t7[r], 0);
    return t7[r] += o, o;
  }
  t7.y += n("top"), t7.x += n("left"), n("right"), n("bottom");
}
function Mm(t7, e) {
  const n = e.maxPadding;
  function r(o) {
    const i = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return o.forEach((s) => {
      i[s] = Math.max(e[s], n[s]);
    }), i;
  }
  return r(t7 ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function Er(t7, e, n, r) {
  const o = [];
  let i, s, a, l, c, d;
  for (i = 0, s = t7.length, c = 0; i < s; ++i) {
    a = t7[i], l = a.box, l.update(a.width || e.w, a.height || e.h, Mm(a.horizontal, e));
    const { same: u, other: f } = Nm(e, n, a, r);
    c |= u && o.length, d = d || f, l.fullSize || o.push(a);
  }
  return c && Er(o, e, n, r) || d;
}
function vo(t7, e, n, r, o) {
  t7.top = n, t7.left = e, t7.right = e + r, t7.bottom = n + o, t7.width = r, t7.height = o;
}
function Ll(t7, e, n, r) {
  const o = n.padding;
  let { x: i, y: s } = e;
  for (const a of t7) {
    const l = a.box, c = r[a.stack] || {
      placed: 0,
      weight: 1
    }, d = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const u = e.w * d, f = c.size || l.height;
      Xo(c.start) && (s = c.start), l.fullSize ? vo(l, o.left, s, n.outerWidth - o.right - o.left, f) : vo(l, e.left + c.placed, s, u, f), c.start = s, c.placed += u, s = l.bottom;
    } else {
      const u = e.h * d, f = c.size || l.width;
      Xo(c.start) && (i = c.start), l.fullSize ? vo(l, i, o.top, f, n.outerHeight - o.bottom - o.top) : vo(l, i, e.top + c.placed, f, u), c.start = i, c.placed += u, i = l.right;
    }
  }
  e.x = i, e.y = s;
}
var sn = {
  addBox(t7, e) {
    t7.boxes || (t7.boxes = []), e.fullSize = e.fullSize || false, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() {
      return [
        {
          z: 0,
          draw(n) {
            e.draw(n);
          }
        }
      ];
    }, t7.boxes.push(e);
  },
  removeBox(t7, e) {
    const n = t7.boxes ? t7.boxes.indexOf(e) : -1;
    n !== -1 && t7.boxes.splice(n, 1);
  },
  configure(t7, e, n) {
    e.fullSize = n.fullSize, e.position = n.position, e.weight = n.weight;
  },
  update(t7, e, n, r) {
    if (!t7)
      return;
    const o = kt(t7.options.layout.padding), i = Math.max(e - o.width, 0), s = Math.max(n - o.height, 0), a = Tm(t7.boxes), l = a.vertical, c = a.horizontal;
    he(t7.boxes, (p) => {
      typeof p.beforeLayout == "function" && p.beforeLayout();
    });
    const d = l.reduce((p, m) => m.box.options && m.box.options.display === false ? p : p + 1, 0) || 1, u = Object.freeze({
      outerWidth: e,
      outerHeight: n,
      padding: o,
      availableWidth: i,
      availableHeight: s,
      vBoxMaxWidth: i / 2 / d,
      hBoxMaxHeight: s / 2
    }), f = Object.assign({}, o);
    pu(f, kt(r));
    const h = Object.assign({
      maxPadding: f,
      w: i,
      h: s,
      x: o.left,
      y: o.top
    }, o), g = Om(l.concat(c), u);
    Er(a.fullSize, h, u, g), Er(l, h, u, g), Er(c, h, u, g) && Er(l, h, u, g), Rm(h), Ll(a.leftAndTop, h, u, g), h.x += h.w, h.y += h.h, Ll(a.rightAndBottom, h, u, g), t7.chartArea = {
      left: h.left,
      top: h.top,
      right: h.left + h.w,
      bottom: h.top + h.h,
      height: h.h,
      width: h.w
    }, he(a.chartArea, (p) => {
      const m = p.box;
      Object.assign(m, t7.chartArea), m.update(h.w, h.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class mu {
  acquireContext(e, n) {
  }
  releaseContext(e) {
    return false;
  }
  addEventListener(e, n, r) {
  }
  removeEventListener(e, n, r) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(e, n, r, o) {
    return n = Math.max(0, n || e.width), r = r || e.height, {
      width: n,
      height: Math.max(0, o ? Math.floor(n / o) : r)
    };
  }
  isAttached(e) {
    return true;
  }
  updateConfig(e) {
  }
}
class Pm extends mu {
  acquireContext(e) {
    return e && e.getContext && e.getContext("2d") || null;
  }
  updateConfig(e) {
    e.options.animation = false;
  }
}
const Do = "$chartjs", Am = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Fl = (t7) => t7 === null || t7 === "";
function Dm(t7, e) {
  const n = t7.style, r = t7.getAttribute("height"), o = t7.getAttribute("width");
  if (t7[Do] = {
    initial: {
      height: r,
      width: o,
      style: {
        display: n.display,
        height: n.height,
        width: n.width
      }
    }
  }, n.display = n.display || "block", n.boxSizing = n.boxSizing || "border-box", Fl(o)) {
    const i = El(t7, "width");
    i !== void 0 && (t7.width = i);
  }
  if (Fl(r))
    if (t7.style.height === "")
      t7.height = t7.width / (e || 2);
    else {
      const i = El(t7, "height");
      i !== void 0 && (t7.height = i);
    }
  return t7;
}
const bu = tm ? {
  passive: true
} : false;
function Im(t7, e, n) {
  t7 && t7.addEventListener(e, n, bu);
}
function Lm(t7, e, n) {
  t7 && t7.canvas && t7.canvas.removeEventListener(e, n, bu);
}
function Fm(t7, e) {
  const n = Am[t7.type] || t7.type, { x: r, y: o } = yn(t7, e);
  return {
    type: n,
    chart: e,
    native: t7,
    x: r !== void 0 ? r : null,
    y: o !== void 0 ? o : null
  };
}
function ni(t7, e) {
  for (const n of t7)
    if (n === e || n.contains(e))
      return true;
}
function zm(t7, e, n) {
  const r = t7.canvas, o = new MutationObserver((i) => {
    let s = false;
    for (const a of i)
      s = s || ni(a.addedNodes, r), s = s && !ni(a.removedNodes, r);
    s && n();
  });
  return o.observe(document, {
    childList: true,
    subtree: true
  }), o;
}
function Bm(t7, e, n) {
  const r = t7.canvas, o = new MutationObserver((i) => {
    let s = false;
    for (const a of i)
      s = s || ni(a.removedNodes, r), s = s && !ni(a.addedNodes, r);
    s && n();
  });
  return o.observe(document, {
    childList: true,
    subtree: true
  }), o;
}
const Hr = /* @__PURE__ */ new Map();
let zl = 0;
function yu() {
  const t7 = window.devicePixelRatio;
  t7 !== zl && (zl = t7, Hr.forEach((e, n) => {
    n.currentDevicePixelRatio !== t7 && e();
  }));
}
function $m(t7, e) {
  Hr.size || window.addEventListener("resize", yu), Hr.set(t7, e);
}
function jm(t7) {
  Hr.delete(t7), Hr.size || window.removeEventListener("resize", yu);
}
function Hm(t7, e, n) {
  const r = t7.canvas, o = r && ra(r);
  if (!o)
    return;
  const i = tu((a, l) => {
    const c = o.clientWidth;
    n(a, l), c < o.clientWidth && n();
  }, window), s = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, d = l.contentRect.height;
    c === 0 && d === 0 || i(c, d);
  });
  return s.observe(o), $m(t7, i), s;
}
function ns(t7, e, n) {
  n && n.disconnect(), e === "resize" && jm(t7);
}
function Wm(t7, e, n) {
  const r = t7.canvas, o = tu((i) => {
    t7.ctx !== null && n(Fm(i, t7));
  }, t7);
  return Im(r, e, o), o;
}
class Vm extends mu {
  acquireContext(e, n) {
    const r = e && e.getContext && e.getContext("2d");
    return r && r.canvas === e ? (Dm(e, n), r) : null;
  }
  releaseContext(e) {
    const n = e.canvas;
    if (!n[Do])
      return false;
    const r = n[Do].initial;
    [
      "height",
      "width"
    ].forEach((i) => {
      const s = r[i];
      qe(s) ? n.removeAttribute(i) : n.setAttribute(i, s);
    });
    const o = r.style || {};
    return Object.keys(o).forEach((i) => {
      n.style[i] = o[i];
    }), n.width = n.width, delete n[Do], true;
  }
  addEventListener(e, n, r) {
    this.removeEventListener(e, n);
    const o = e.$proxies || (e.$proxies = {}), s = {
      attach: zm,
      detach: Bm,
      resize: Hm
    }[n] || Wm;
    o[n] = s(e, n, r);
  }
  removeEventListener(e, n) {
    const r = e.$proxies || (e.$proxies = {}), o = r[n];
    if (!o)
      return;
    (({
      attach: ns,
      detach: ns,
      resize: ns
    })[n] || Lm)(e, n, o), r[n] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(e, n, r, o) {
    return em(e, n, r, o);
  }
  isAttached(e) {
    const n = e && ra(e);
    return !!(n && n.isConnected);
  }
}
function Ym(t7) {
  return !na() || typeof OffscreenCanvas < "u" && t7 instanceof OffscreenCanvas ? Pm : Vm;
}
var Ao;
let eo = (Ao = class {
  constructor() {
    te(this, "x");
    te(this, "y");
    te(this, "active", false);
    te(this, "options");
    te(this, "$animations");
  }
  tooltipPosition(e) {
    const { x: n, y: r } = this.getProps([
      "x",
      "y"
    ], e);
    return {
      x: n,
      y: r
    };
  }
  hasValue() {
    return Zo(this.x) && Zo(this.y);
  }
  getProps(e, n) {
    const r = this.$animations;
    if (!n || !r)
      return this;
    const o = {};
    return e.forEach((i) => {
      o[i] = r[i] && r[i].active() ? r[i]._to : this[i];
    }), o;
  }
}, te(Ao, "defaults", {}), te(Ao, "defaultRoutes"), Ao);
function Um(t7, e) {
  const n = t7.options.ticks, r = Km(t7), o = Math.min(n.maxTicksLimit || r, r), i = n.major.enabled ? Gm(e) : [], s = i.length, a = i[0], l = i[s - 1], c = [];
  if (s > o)
    return Xm(e, c, i, s / o), c;
  const d = qm(i, e, o);
  if (s > 0) {
    let u, f;
    const h = s > 1 ? Math.round((l - a) / (s - 1)) : null;
    for (xo(e, c, d, qe(h) ? 0 : a - h, a), u = 0, f = s - 1; u < f; u++)
      xo(e, c, d, i[u], i[u + 1]);
    return xo(e, c, d, l, qe(h) ? e.length : l + h), c;
  }
  return xo(e, c, d), c;
}
function Km(t7) {
  const e = t7.options.offset, n = t7._tickSize(), r = t7._length / n + (e ? 0 : 1), o = t7._maxLength / n;
  return Math.floor(Math.min(r, o));
}
function qm(t7, e, n) {
  const r = Jm(t7), o = e.length / n;
  if (!r)
    return Math.max(o, 1);
  const i = c0(r);
  for (let s = 0, a = i.length - 1; s < a; s++) {
    const l = i[s];
    if (l > o)
      return l;
  }
  return Math.max(o, 1);
}
function Gm(t7) {
  const e = [];
  let n, r;
  for (n = 0, r = t7.length; n < r; n++)
    t7[n].major && e.push(n);
  return e;
}
function Xm(t7, e, n, r) {
  let o = 0, i = n[0], s;
  for (r = Math.ceil(r), s = 0; s < t7.length; s++)
    s === i && (e.push(t7[s]), o++, i = n[o * r]);
}
function xo(t7, e, n, r, o) {
  const i = ge(r, 0), s = Math.min(ge(o, t7.length), t7.length);
  let a = 0, l, c, d;
  for (n = Math.ceil(n), o && (l = o - r, n = l / Math.floor(l / n)), d = i; d < 0; )
    a++, d = Math.round(i + a * n);
  for (c = Math.max(i, 0); c < s; c++)
    c === d && (e.push(t7[c]), a++, d = Math.round(i + a * n));
}
function Jm(t7) {
  const e = t7.length;
  let n, r;
  if (e < 2)
    return false;
  for (r = t7[0], n = 1; n < e; ++n)
    if (t7[n] - t7[n - 1] !== r)
      return false;
  return r;
}
const Zm = (t7) => t7 === "left" ? "right" : t7 === "right" ? "left" : t7, Bl = (t7, e, n) => e === "top" || e === "left" ? t7[e] + n : t7[e] - n, $l = (t7, e) => Math.min(e || t7, t7);
function jl(t7, e) {
  const n = [], r = t7.length / e, o = t7.length;
  let i = 0;
  for (; i < o; i += r)
    n.push(t7[Math.floor(i)]);
  return n;
}
function Qm(t7, e, n) {
  const r = t7.ticks.length, o = Math.min(e, r - 1), i = t7._startPixel, s = t7._endPixel, a = 1e-6;
  let l = t7.getPixelForTick(o), c;
  if (!(n && (r === 1 ? c = Math.max(l - i, s - l) : e === 0 ? c = (t7.getPixelForTick(1) - l) / 2 : c = (l - t7.getPixelForTick(o - 1)) / 2, l += o < e ? c : -c, l < i - a || l > s + a)))
    return l;
}
function eb(t7, e) {
  he(t7, (n) => {
    const r = n.gc, o = r.length / 2;
    let i;
    if (o > e) {
      for (i = 0; i < o; ++i)
        delete n.data[r[i]];
      r.splice(0, o);
    }
  });
}
function pr(t7) {
  return t7.drawTicks ? t7.tickLength : 0;
}
function Hl(t7, e) {
  if (!t7.display)
    return 0;
  const n = et(t7.font, e), r = kt(t7.padding);
  return (He(t7.text) ? t7.text.length : 1) * n.lineHeight + r.height;
}
function tb(t7, e) {
  return ir(t7, {
    scale: e,
    type: "scale"
  });
}
function nb(t7, e, n) {
  return ir(t7, {
    tick: n,
    index: e,
    type: "tick"
  });
}
function rb(t7, e, n) {
  let r = nu(t7);
  return (n && e !== "right" || !n && e === "right") && (r = Zm(r)), r;
}
function ob(t7, e, n, r) {
  const { top: o, left: i, bottom: s, right: a, chart: l } = t7, { chartArea: c, scales: d } = l;
  let u = 0, f, h, g;
  const p = s - o, m = a - i;
  if (t7.isHorizontal()) {
    if (h = at(r, i, a), ie(n)) {
      const v = Object.keys(n)[0], y = n[v];
      g = d[v].getPixelForValue(y) + p - e;
    } else n === "center" ? g = (c.bottom + c.top) / 2 + p - e : g = Bl(t7, n, e);
    f = a - i;
  } else {
    if (ie(n)) {
      const v = Object.keys(n)[0], y = n[v];
      h = d[v].getPixelForValue(y) - m + e;
    } else n === "center" ? h = (c.left + c.right) / 2 - m + e : h = Bl(t7, n, e);
    g = at(r, s, o), u = n === "left" ? -Ae : Ae;
  }
  return {
    titleX: h,
    titleY: g,
    maxWidth: f,
    rotation: u
  };
}
class _i extends eo {
  constructor(e) {
    super(), this.id = e.id, this.type = e.type, this.options = void 0, this.ctx = e.ctx, this.chart = e.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = false, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = false, this.$context = void 0;
  }
  init(e) {
    this.options = e.setContext(this.getContext()), this.axis = e.axis, this._userMin = this.parse(e.min), this._userMax = this.parse(e.max), this._suggestedMin = this.parse(e.suggestedMin), this._suggestedMax = this.parse(e.suggestedMax);
  }
  parse(e, n) {
    return e;
  }
  getUserBounds() {
    let { _userMin: e, _userMax: n, _suggestedMin: r, _suggestedMax: o } = this;
    return e = St(e, Number.POSITIVE_INFINITY), n = St(n, Number.NEGATIVE_INFINITY), r = St(r, Number.POSITIVE_INFINITY), o = St(o, Number.NEGATIVE_INFINITY), {
      min: St(e, r),
      max: St(n, o),
      minDefined: Ut(e),
      maxDefined: Ut(n)
    };
  }
  getMinMax(e) {
    let { min: n, max: r, minDefined: o, maxDefined: i } = this.getUserBounds(), s;
    if (o && i)
      return {
        min: n,
        max: r
      };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      s = a[l].controller.getMinMax(this, e), o || (n = Math.min(n, s.min)), i || (r = Math.max(r, s.max));
    return n = i && n > r ? r : n, r = o && n > r ? n : r, {
      min: St(n, St(r, n)),
      max: St(r, St(n, r))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const e = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels || [];
  }
  getLabelItems(e = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(e));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = false;
  }
  beforeUpdate() {
    xe(this.options.beforeUpdate, [
      this
    ]);
  }
  update(e, n, r) {
    const { beginAtZero: o, grace: i, ticks: s } = this.options, a = s.sampleSize;
    this.beforeUpdate(), this.maxWidth = e, this.maxHeight = n, this._margins = r = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, r), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + r.left + r.right : this.height + r.top + r.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = B0(this, i, o), this._dataLimitsCached = true), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? jl(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), s.display && (s.autoSkip || s.source === "auto") && (this.ticks = Um(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let e = this.options.reverse, n, r;
    this.isHorizontal() ? (n = this.left, r = this.right) : (n = this.top, r = this.bottom, e = !e), this._startPixel = n, this._endPixel = r, this._reversePixels = e, this._length = r - n, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    xe(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    xe(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    xe(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(e) {
    this.chart.notifyPlugins(e, this.getContext()), xe(this.options[e], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    xe(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(e) {
    const n = this.options.ticks;
    let r, o, i;
    for (r = 0, o = e.length; r < o; r++)
      i = e[r], i.label = xe(n.callback, [
        i.value,
        r,
        e
      ], this);
  }
  afterTickToLabelConversion() {
    xe(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    xe(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const e = this.options, n = e.ticks, r = $l(this.ticks.length, e.ticks.maxTicksLimit), o = n.minRotation || 0, i = n.maxRotation;
    let s = o, a, l, c;
    if (!this._isVisible() || !n.display || o >= i || r <= 1 || !this.isHorizontal()) {
      this.labelRotation = o;
      return;
    }
    const d = this._getLabelSizes(), u = d.widest.width, f = d.highest.height, h = ht(this.chart.width - u, 0, this.maxWidth);
    a = e.offset ? this.maxWidth / r : h / (r - 1), u + 6 > a && (a = h / (r - (e.offset ? 0.5 : 1)), l = this.maxHeight - pr(e.grid) - n.padding - Hl(e.title, this.chart.options.font), c = Math.sqrt(u * u + f * f), s = u0(Math.min(Math.asin(ht((d.highest.height + 6) / a, -1, 1)), Math.asin(ht(l / c, -1, 1)) - Math.asin(ht(f / c, -1, 1)))), s = Math.max(o, Math.min(i, s))), this.labelRotation = s;
  }
  afterCalculateLabelRotation() {
    xe(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    xe(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const e = {
      width: 0,
      height: 0
    }, { chart: n, options: { ticks: r, title: o, grid: i } } = this, s = this._isVisible(), a = this.isHorizontal();
    if (s) {
      const l = Hl(o, n.options.font);
      if (a ? (e.width = this.maxWidth, e.height = pr(i) + l) : (e.height = this.maxHeight, e.width = pr(i) + l), r.display && this.ticks.length) {
        const { first: c, last: d, widest: u, highest: f } = this._getLabelSizes(), h = r.padding * 2, g = wn(this.labelRotation), p = Math.cos(g), m = Math.sin(g);
        if (a) {
          const v = r.mirror ? 0 : m * u.width + p * f.height;
          e.height = Math.min(this.maxHeight, e.height + v + h);
        } else {
          const v = r.mirror ? 0 : p * u.width + m * f.height;
          e.width = Math.min(this.maxWidth, e.width + v + h);
        }
        this._calculatePadding(c, d, m, p);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = n.width - this._margins.left - this._margins.right, this.height = e.height) : (this.width = e.width, this.height = this._length = n.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(e, n, r, o) {
    const { ticks: { align: i, padding: s }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const d = this.getPixelForTick(0) - this.left, u = this.right - this.getPixelForTick(this.ticks.length - 1);
      let f = 0, h = 0;
      l ? c ? (f = o * e.width, h = r * n.height) : (f = r * e.height, h = o * n.width) : i === "start" ? h = n.width : i === "end" ? f = e.width : i !== "inner" && (f = e.width / 2, h = n.width / 2), this.paddingLeft = Math.max((f - d + s) * this.width / (this.width - d), 0), this.paddingRight = Math.max((h - u + s) * this.width / (this.width - u), 0);
    } else {
      let d = n.height / 2, u = e.height / 2;
      i === "start" ? (d = 0, u = e.height) : i === "end" && (d = n.height, u = 0), this.paddingTop = d + s, this.paddingBottom = u + s;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    xe(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: e, position: n } = this.options;
    return n === "top" || n === "bottom" || e === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(e) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(e);
    let n, r;
    for (n = 0, r = e.length; n < r; n++)
      qe(e[n].label) && (e.splice(n, 1), r--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let e = this._labelSizes;
    if (!e) {
      const n = this.options.ticks.sampleSize;
      let r = this.ticks;
      n < r.length && (r = jl(r, n)), this._labelSizes = e = this._computeLabelSizes(r, r.length, this.options.ticks.maxTicksLimit);
    }
    return e;
  }
  _computeLabelSizes(e, n, r) {
    const { ctx: o, _longestTextCache: i } = this, s = [], a = [], l = Math.floor(n / $l(n, r));
    let c = 0, d = 0, u, f, h, g, p, m, v, y, C, x, w;
    for (u = 0; u < n; u += l) {
      if (g = e[u].label, p = this._resolveTickFontOptions(u), o.font = m = p.string, v = i[m] = i[m] || {
        data: {},
        gc: []
      }, y = p.lineHeight, C = x = 0, !qe(g) && !He(g))
        C = xl(o, v.data, v.gc, C, g), x = y;
      else if (He(g))
        for (f = 0, h = g.length; f < h; ++f)
          w = g[f], !qe(w) && !He(w) && (C = xl(o, v.data, v.gc, C, w), x += y);
      s.push(C), a.push(x), c = Math.max(C, c), d = Math.max(x, d);
    }
    eb(i, n);
    const _ = s.indexOf(c), O = a.indexOf(d), N = (T) => ({
      width: s[T] || 0,
      height: a[T] || 0
    });
    return {
      first: N(0),
      last: N(n - 1),
      widest: N(_),
      highest: N(O),
      widths: s,
      heights: a
    };
  }
  getLabelForValue(e) {
    return e;
  }
  getPixelForValue(e, n) {
    return NaN;
  }
  getValueForPixel(e) {
  }
  getPixelForTick(e) {
    const n = this.ticks;
    return e < 0 || e > n.length - 1 ? null : this.getPixelForValue(n[e].value);
  }
  getPixelForDecimal(e) {
    this._reversePixels && (e = 1 - e);
    const n = this._startPixel + e * this._length;
    return h0(this._alignToPixels ? pn(this.chart, n, 0) : n);
  }
  getDecimalForPixel(e) {
    const n = (e - this._startPixel) / this._length;
    return this._reversePixels ? 1 - n : n;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: e, max: n } = this;
    return e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0;
  }
  getContext(e) {
    const n = this.ticks || [];
    if (e >= 0 && e < n.length) {
      const r = n[e];
      return r.$context || (r.$context = nb(this.getContext(), e, r));
    }
    return this.$context || (this.$context = tb(this.chart.getContext(), this));
  }
  _tickSize() {
    const e = this.options.ticks, n = wn(this.labelRotation), r = Math.abs(Math.cos(n)), o = Math.abs(Math.sin(n)), i = this._getLabelSizes(), s = e.autoSkipPadding || 0, a = i ? i.widest.width + s : 0, l = i ? i.highest.height + s : 0;
    return this.isHorizontal() ? l * r > a * o ? a / r : l / o : l * o < a * r ? l / r : a / o;
  }
  _isVisible() {
    const e = this.options.display;
    return e !== "auto" ? !!e : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(e) {
    const n = this.axis, r = this.chart, o = this.options, { grid: i, position: s, border: a } = o, l = i.offset, c = this.isHorizontal(), u = this.ticks.length + (l ? 1 : 0), f = pr(i), h = [], g = a.setContext(this.getContext()), p = g.display ? g.width : 0, m = p / 2, v = function(D) {
      return pn(r, D, p);
    };
    let y, C, x, w, _, O, N, T, S, A, M, P;
    if (s === "top")
      y = v(this.bottom), O = this.bottom - f, T = y - m, A = v(e.top) + m, P = e.bottom;
    else if (s === "bottom")
      y = v(this.top), A = e.top, P = v(e.bottom) - m, O = y + m, T = this.top + f;
    else if (s === "left")
      y = v(this.right), _ = this.right - f, N = y - m, S = v(e.left) + m, M = e.right;
    else if (s === "right")
      y = v(this.left), S = e.left, M = v(e.right) - m, _ = y + m, N = this.left + f;
    else if (n === "x") {
      if (s === "center")
        y = v((e.top + e.bottom) / 2 + 0.5);
      else if (ie(s)) {
        const D = Object.keys(s)[0], L = s[D];
        y = v(this.chart.scales[D].getPixelForValue(L));
      }
      A = e.top, P = e.bottom, O = y + m, T = O + f;
    } else if (n === "y") {
      if (s === "center")
        y = v((e.left + e.right) / 2);
      else if (ie(s)) {
        const D = Object.keys(s)[0], L = s[D];
        y = v(this.chart.scales[D].getPixelForValue(L));
      }
      _ = y - m, N = _ - f, S = e.left, M = e.right;
    }
    const E = ge(o.ticks.maxTicksLimit, u), R = Math.max(1, Math.ceil(u / E));
    for (C = 0; C < u; C += R) {
      const D = this.getContext(C), L = i.setContext(D), F = a.setContext(D), $ = L.lineWidth, B = L.color, W = F.dash || [], V = F.dashOffset, U = L.tickWidth, K = L.tickColor, q = L.tickBorderDash || [], X = L.tickBorderDashOffset;
      x = Qm(this, C, l), x !== void 0 && (w = pn(r, x, $), c ? _ = N = S = M = w : O = T = A = P = w, h.push({
        tx1: _,
        ty1: O,
        tx2: N,
        ty2: T,
        x1: S,
        y1: A,
        x2: M,
        y2: P,
        width: $,
        color: B,
        borderDash: W,
        borderDashOffset: V,
        tickWidth: U,
        tickColor: K,
        tickBorderDash: q,
        tickBorderDashOffset: X
      }));
    }
    return this._ticksLength = u, this._borderValue = y, h;
  }
  _computeLabelItems(e) {
    const n = this.axis, r = this.options, { position: o, ticks: i } = r, s = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: d, mirror: u } = i, f = pr(r.grid), h = f + d, g = u ? -d : h, p = -wn(this.labelRotation), m = [];
    let v, y, C, x, w, _, O, N, T, S, A, M, P = "middle";
    if (o === "top")
      _ = this.bottom - g, O = this._getXAxisLabelAlignment();
    else if (o === "bottom")
      _ = this.top + g, O = this._getXAxisLabelAlignment();
    else if (o === "left") {
      const R = this._getYAxisLabelAlignment(f);
      O = R.textAlign, w = R.x;
    } else if (o === "right") {
      const R = this._getYAxisLabelAlignment(f);
      O = R.textAlign, w = R.x;
    } else if (n === "x") {
      if (o === "center")
        _ = (e.top + e.bottom) / 2 + h;
      else if (ie(o)) {
        const R = Object.keys(o)[0], D = o[R];
        _ = this.chart.scales[R].getPixelForValue(D) + h;
      }
      O = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (o === "center")
        w = (e.left + e.right) / 2 - h;
      else if (ie(o)) {
        const R = Object.keys(o)[0], D = o[R];
        w = this.chart.scales[R].getPixelForValue(D);
      }
      O = this._getYAxisLabelAlignment(f).textAlign;
    }
    n === "y" && (l === "start" ? P = "top" : l === "end" && (P = "bottom"));
    const E = this._getLabelSizes();
    for (v = 0, y = a.length; v < y; ++v) {
      C = a[v], x = C.label;
      const R = i.setContext(this.getContext(v));
      N = this.getPixelForTick(v) + i.labelOffset, T = this._resolveTickFontOptions(v), S = T.lineHeight, A = He(x) ? x.length : 1;
      const D = A / 2, L = R.color, F = R.textStrokeColor, $ = R.textStrokeWidth;
      let B = O;
      s ? (w = N, O === "inner" && (v === y - 1 ? B = this.options.reverse ? "left" : "right" : v === 0 ? B = this.options.reverse ? "right" : "left" : B = "center"), o === "top" ? c === "near" || p !== 0 ? M = -A * S + S / 2 : c === "center" ? M = -E.highest.height / 2 - D * S + S : M = -E.highest.height + S / 2 : c === "near" || p !== 0 ? M = S / 2 : c === "center" ? M = E.highest.height / 2 - D * S : M = E.highest.height - A * S, u && (M *= -1), p !== 0 && !R.showLabelBackdrop && (w += S / 2 * Math.sin(p))) : (_ = N, M = (1 - A) * S / 2);
      let W;
      if (R.showLabelBackdrop) {
        const V = kt(R.backdropPadding), U = E.heights[v], K = E.widths[v];
        let q = M - V.top, X = 0 - V.left;
        switch (P) {
          case "middle":
            q -= U / 2;
            break;
          case "bottom":
            q -= U;
            break;
        }
        switch (O) {
          case "center":
            X -= K / 2;
            break;
          case "right":
            X -= K;
            break;
          case "inner":
            v === y - 1 ? X -= K : v > 0 && (X -= K / 2);
            break;
        }
        W = {
          left: X,
          top: q,
          width: K + V.width,
          height: U + V.height,
          color: R.backdropColor
        };
      }
      m.push({
        label: x,
        font: T,
        textOffset: M,
        options: {
          rotation: p,
          color: L,
          strokeColor: F,
          strokeWidth: $,
          textAlign: B,
          textBaseline: P,
          translation: [
            w,
            _
          ],
          backdrop: W
        }
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: e, ticks: n } = this.options;
    if (-wn(this.labelRotation))
      return e === "top" ? "left" : "right";
    let o = "center";
    return n.align === "start" ? o = "left" : n.align === "end" ? o = "right" : n.align === "inner" && (o = "inner"), o;
  }
  _getYAxisLabelAlignment(e) {
    const { position: n, ticks: { crossAlign: r, mirror: o, padding: i } } = this.options, s = this._getLabelSizes(), a = e + i, l = s.widest.width;
    let c, d;
    return n === "left" ? o ? (d = this.right + i, r === "near" ? c = "left" : r === "center" ? (c = "center", d += l / 2) : (c = "right", d += l)) : (d = this.right - a, r === "near" ? c = "right" : r === "center" ? (c = "center", d -= l / 2) : (c = "left", d = this.left)) : n === "right" ? o ? (d = this.left + i, r === "near" ? c = "right" : r === "center" ? (c = "center", d -= l / 2) : (c = "left", d -= l)) : (d = this.left + a, r === "near" ? c = "left" : r === "center" ? (c = "center", d += l / 2) : (c = "right", d = this.right)) : c = "right", {
      textAlign: c,
      x: d
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const e = this.chart, n = this.options.position;
    if (n === "left" || n === "right")
      return {
        top: 0,
        left: this.left,
        bottom: e.height,
        right: this.right
      };
    if (n === "top" || n === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: e.width
      };
  }
  drawBackground() {
    const { ctx: e, options: { backgroundColor: n }, left: r, top: o, width: i, height: s } = this;
    n && (e.save(), e.fillStyle = n, e.fillRect(r, o, i, s), e.restore());
  }
  getLineWidthForValue(e) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display)
      return 0;
    const o = this.ticks.findIndex((i) => i.value === e);
    return o >= 0 ? n.setContext(this.getContext(o)).lineWidth : 0;
  }
  drawGrid(e) {
    const n = this.options.grid, r = this.ctx, o = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(e));
    let i, s;
    const a = (l, c, d) => {
      !d.width || !d.color || (r.save(), r.lineWidth = d.width, r.strokeStyle = d.color, r.setLineDash(d.borderDash || []), r.lineDashOffset = d.borderDashOffset, r.beginPath(), r.moveTo(l.x, l.y), r.lineTo(c.x, c.y), r.stroke(), r.restore());
    };
    if (n.display)
      for (i = 0, s = o.length; i < s; ++i) {
        const l = o[i];
        n.drawOnChartArea && a({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), n.drawTicks && a({
          x: l.tx1,
          y: l.ty1
        }, {
          x: l.tx2,
          y: l.ty2
        }, {
          color: l.tickColor,
          width: l.tickWidth,
          borderDash: l.tickBorderDash,
          borderDashOffset: l.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: e, ctx: n, options: { border: r, grid: o } } = this, i = r.setContext(this.getContext()), s = r.display ? i.width : 0;
    if (!s)
      return;
    const a = o.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, d, u, f;
    this.isHorizontal() ? (c = pn(e, this.left, s) - s / 2, d = pn(e, this.right, a) + a / 2, u = f = l) : (u = pn(e, this.top, s) - s / 2, f = pn(e, this.bottom, a) + a / 2, c = d = l), n.save(), n.lineWidth = i.width, n.strokeStyle = i.color, n.beginPath(), n.moveTo(c, u), n.lineTo(d, f), n.stroke(), n.restore();
  }
  drawLabels(e) {
    if (!this.options.ticks.display)
      return;
    const r = this.ctx, o = this._computeLabelArea();
    o && Xs(r, o);
    const i = this.getLabelItems(e);
    for (const s of i) {
      const a = s.options, l = s.font, c = s.label, d = s.textOffset;
      ei(r, c, 0, d, l, a);
    }
    o && Js(r);
  }
  drawTitle() {
    const { ctx: e, options: { position: n, title: r, reverse: o } } = this;
    if (!r.display)
      return;
    const i = et(r.font), s = kt(r.padding), a = r.align;
    let l = i.lineHeight / 2;
    n === "bottom" || n === "center" || ie(n) ? (l += s.bottom, He(r.text) && (l += i.lineHeight * (r.text.length - 1))) : l += s.top;
    const { titleX: c, titleY: d, maxWidth: u, rotation: f } = ob(this, l, n, a);
    ei(e, r.text, 0, 0, i, {
      color: r.color,
      maxWidth: u,
      rotation: f,
      textAlign: rb(a, n, o),
      textBaseline: "middle",
      translation: [
        c,
        d
      ]
    });
  }
  draw(e) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(e), this.drawBorder(), this.drawTitle(), this.drawLabels(e));
  }
  _layers() {
    const e = this.options, n = e.ticks && e.ticks.z || 0, r = ge(e.grid && e.grid.z, -1), o = ge(e.border && e.border.z, 0);
    return !this._isVisible() || this.draw !== _i.prototype.draw ? [
      {
        z: n,
        draw: (i) => {
          this.draw(i);
        }
      }
    ] : [
      {
        z: r,
        draw: (i) => {
          this.drawBackground(), this.drawGrid(i), this.drawTitle();
        }
      },
      {
        z: o,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: n,
        draw: (i) => {
          this.drawLabels(i);
        }
      }
    ];
  }
  getMatchingVisibleMetas(e) {
    const n = this.chart.getSortedVisibleDatasetMetas(), r = this.axis + "AxisID", o = [];
    let i, s;
    for (i = 0, s = n.length; i < s; ++i) {
      const a = n[i];
      a[r] === this.id && (!e || a.type === e) && o.push(a);
    }
    return o;
  }
  _resolveTickFontOptions(e) {
    const n = this.options.ticks.setContext(this.getContext(e));
    return et(n.font);
  }
  _maxDigits() {
    const e = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / e;
  }
}
class wo {
  constructor(e, n, r) {
    this.type = e, this.scope = n, this.override = r, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(e) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, e.prototype);
  }
  register(e) {
    const n = Object.getPrototypeOf(e);
    let r;
    ab(n) && (r = this.register(n));
    const o = this.items, i = e.id, s = this.scope + "." + i;
    if (!i)
      throw new Error("class does not have id: " + e);
    return i in o || (o[i] = e, ib(e, s, r), this.override && _e.override(e.id, e.overrides)), s;
  }
  get(e) {
    return this.items[e];
  }
  unregister(e) {
    const n = this.items, r = e.id, o = this.scope;
    r in n && delete n[r], o && r in _e[o] && (delete _e[o][r], this.override && delete Nn[r]);
  }
}
function ib(t7, e, n) {
  const r = $r(/* @__PURE__ */ Object.create(null), [
    n ? _e.get(n) : {},
    _e.get(e),
    t7.defaults
  ]);
  _e.set(e, r), t7.defaultRoutes && sb(e, t7.defaultRoutes), t7.descriptors && _e.describe(e, t7.descriptors);
}
function sb(t7, e) {
  Object.keys(e).forEach((n) => {
    const r = n.split("."), o = r.pop(), i = [
      t7
    ].concat(r).join("."), s = e[n].split("."), a = s.pop(), l = s.join(".");
    _e.route(i, o, l, a);
  });
}
function ab(t7) {
  return "id" in t7 && "defaults" in t7;
}
class lb {
  constructor() {
    this.controllers = new wo(Ar, "datasets", true), this.elements = new wo(eo, "elements"), this.plugins = new wo(Object, "plugins"), this.scales = new wo(_i, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...e) {
    this._each("register", e);
  }
  remove(...e) {
    this._each("unregister", e);
  }
  addControllers(...e) {
    this._each("register", e, this.controllers);
  }
  addElements(...e) {
    this._each("register", e, this.elements);
  }
  addPlugins(...e) {
    this._each("register", e, this.plugins);
  }
  addScales(...e) {
    this._each("register", e, this.scales);
  }
  getController(e) {
    return this._get(e, this.controllers, "controller");
  }
  getElement(e) {
    return this._get(e, this.elements, "element");
  }
  getPlugin(e) {
    return this._get(e, this.plugins, "plugin");
  }
  getScale(e) {
    return this._get(e, this.scales, "scale");
  }
  removeControllers(...e) {
    this._each("unregister", e, this.controllers);
  }
  removeElements(...e) {
    this._each("unregister", e, this.elements);
  }
  removePlugins(...e) {
    this._each("unregister", e, this.plugins);
  }
  removeScales(...e) {
    this._each("unregister", e, this.scales);
  }
  _each(e, n, r) {
    [
      ...n
    ].forEach((o) => {
      const i = r || this._getRegistryForType(o);
      r || i.isForType(o) || i === this.plugins && o.id ? this._exec(e, i, o) : he(o, (s) => {
        const a = r || this._getRegistryForType(s);
        this._exec(e, a, s);
      });
    });
  }
  _exec(e, n, r) {
    const o = qs(e);
    xe(r["before" + o], [], r), n[e](r), xe(r["after" + o], [], r);
  }
  _getRegistryForType(e) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const r = this._typedRegistries[n];
      if (r.isForType(e))
        return r;
    }
    return this.plugins;
  }
  _get(e, n, r) {
    const o = n.get(e);
    if (o === void 0)
      throw new Error('"' + e + '" is not a registered ' + r + ".");
    return o;
  }
}
var Ot = /* @__PURE__ */ new lb();
class cb {
  constructor() {
    this._init = [];
  }
  notify(e, n, r, o) {
    n === "beforeInit" && (this._init = this._createDescriptors(e, true), this._notify(this._init, e, "install"));
    const i = o ? this._descriptors(e).filter(o) : this._descriptors(e), s = this._notify(i, e, n, r);
    return n === "afterDestroy" && (this._notify(i, e, "stop"), this._notify(this._init, e, "uninstall")), s;
  }
  _notify(e, n, r, o) {
    o = o || {};
    for (const i of e) {
      const s = i.plugin, a = s[r], l = [
        n,
        o,
        i.options
      ];
      if (xe(a, l, s) === false && o.cancelable)
        return false;
    }
    return true;
  }
  invalidate() {
    qe(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(e) {
    if (this._cache)
      return this._cache;
    const n = this._cache = this._createDescriptors(e);
    return this._notifyStateChanges(e), n;
  }
  _createDescriptors(e, n) {
    const r = e && e.config, o = ge(r.options && r.options.plugins, {}), i = db(r);
    return o === false && !n ? [] : fb(e, i, o, n);
  }
  _notifyStateChanges(e) {
    const n = this._oldCache || [], r = this._cache, o = (i, s) => i.filter((a) => !s.some((l) => a.plugin.id === l.plugin.id));
    this._notify(o(n, r), e, "stop"), this._notify(o(r, n), e, "start");
  }
}
function db(t7) {
  const e = {}, n = [], r = Object.keys(Ot.plugins.items);
  for (let i = 0; i < r.length; i++)
    n.push(Ot.getPlugin(r[i]));
  const o = t7.plugins || [];
  for (let i = 0; i < o.length; i++) {
    const s = o[i];
    n.indexOf(s) === -1 && (n.push(s), e[s.id] = true);
  }
  return {
    plugins: n,
    localIds: e
  };
}
function ub(t7, e) {
  return !e && t7 === false ? null : t7 === true ? {} : t7;
}
function fb(t7, { plugins: e, localIds: n }, r, o) {
  const i = [], s = t7.getContext();
  for (const a of e) {
    const l = a.id, c = ub(r[l], o);
    c !== null && i.push({
      plugin: a,
      options: hb(t7.config, {
        plugin: a,
        local: n[l]
      }, c, s)
    });
  }
  return i;
}
function hb(t7, { plugin: e, local: n }, r, o) {
  const i = t7.pluginScopeKeys(e), s = t7.getOptionScopes(r, i);
  return n && e.defaults && s.push(e.defaults), t7.createResolver(s, o, [
    ""
  ], {
    scriptable: false,
    indexable: false,
    allKeys: true
  });
}
function _s(t7, e) {
  const n = _e.datasets[t7] || {};
  return ((e.datasets || {})[t7] || {}).indexAxis || e.indexAxis || n.indexAxis || "x";
}
function gb(t7, e) {
  let n = t7;
  return t7 === "_index_" ? n = e : t7 === "_value_" && (n = e === "x" ? "y" : "x"), n;
}
function pb(t7, e) {
  return t7 === e ? "_index_" : "_value_";
}
function Wl(t7) {
  if (t7 === "x" || t7 === "y" || t7 === "r")
    return t7;
}
function mb(t7) {
  if (t7 === "top" || t7 === "bottom")
    return "x";
  if (t7 === "left" || t7 === "right")
    return "y";
}
function Ss(t7, ...e) {
  if (Wl(t7))
    return t7;
  for (const n of e) {
    const r = n.axis || mb(n.position) || t7.length > 1 && Wl(t7[0].toLowerCase());
    if (r)
      return r;
  }
  throw new Error(`Cannot determine type of '${t7}' axis. Please provide 'axis' or 'position' option.`);
}
function Vl(t7, e, n) {
  if (n[e + "AxisID"] === t7)
    return {
      axis: e
    };
}
function bb(t7, e) {
  if (e.data && e.data.datasets) {
    const n = e.data.datasets.filter((r) => r.xAxisID === t7 || r.yAxisID === t7);
    if (n.length)
      return Vl(t7, "x", n[0]) || Vl(t7, "y", n[0]);
  }
  return {};
}
function yb(t7, e) {
  const n = Nn[t7.type] || {
    scales: {}
  }, r = e.scales || {}, o = _s(t7.type, e), i = /* @__PURE__ */ Object.create(null);
  return Object.keys(r).forEach((s) => {
    const a = r[s];
    if (!ie(a))
      return console.error(`Invalid scale configuration for scale: ${s}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${s}`);
    const l = Ss(s, a, bb(s, t7), _e.scales[a.type]), c = pb(l, o), d = n.scales || {};
    i[s] = Nr(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      d[l],
      d[c]
    ]);
  }), t7.data.datasets.forEach((s) => {
    const a = s.type || t7.type, l = s.indexAxis || _s(a, e), d = (Nn[a] || {}).scales || {};
    Object.keys(d).forEach((u) => {
      const f = gb(u, l), h = s[f + "AxisID"] || f;
      i[h] = i[h] || /* @__PURE__ */ Object.create(null), Nr(i[h], [
        {
          axis: f
        },
        r[h],
        d[u]
      ]);
    });
  }), Object.keys(i).forEach((s) => {
    const a = i[s];
    Nr(a, [
      _e.scales[a.type],
      _e.scale
    ]);
  }), i;
}
function vu(t7) {
  const e = t7.options || (t7.options = {});
  e.plugins = ge(e.plugins, {}), e.scales = yb(t7, e);
}
function xu(t7) {
  return t7 = t7 || {}, t7.datasets = t7.datasets || [], t7.labels = t7.labels || [], t7;
}
function vb(t7) {
  return t7 = t7 || {}, t7.data = xu(t7.data), vu(t7), t7;
}
const Yl = /* @__PURE__ */ new Map(), wu = /* @__PURE__ */ new Set();
function ko(t7, e) {
  let n = Yl.get(t7);
  return n || (n = e(), Yl.set(t7, n), wu.add(n)), n;
}
const mr = (t7, e, n) => {
  const r = jr(e, n);
  r !== void 0 && t7.add(r);
};
class xb {
  constructor(e) {
    this._config = vb(e), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(e) {
    this._config.type = e;
  }
  get data() {
    return this._config.data;
  }
  set data(e) {
    this._config.data = xu(e);
  }
  get options() {
    return this._config.options;
  }
  set options(e) {
    this._config.options = e;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const e = this._config;
    this.clearCache(), vu(e);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(e) {
    return ko(e, () => [
      [
        `datasets.${e}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(e, n) {
    return ko(`${e}.transition.${n}`, () => [
      [
        `datasets.${e}.transitions.${n}`,
        `transitions.${n}`
      ],
      [
        `datasets.${e}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(e, n) {
    return ko(`${e}-${n}`, () => [
      [
        `datasets.${e}.elements.${n}`,
        `datasets.${e}`,
        `elements.${n}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(e) {
    const n = e.id, r = this.type;
    return ko(`${r}-plugin-${n}`, () => [
      [
        `plugins.${n}`,
        ...e.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(e, n) {
    const r = this._scopeCache;
    let o = r.get(e);
    return (!o || n) && (o = /* @__PURE__ */ new Map(), r.set(e, o)), o;
  }
  getOptionScopes(e, n, r) {
    const { options: o, type: i } = this, s = this._cachedScopes(e, r), a = s.get(n);
    if (a)
      return a;
    const l = /* @__PURE__ */ new Set();
    n.forEach((d) => {
      e && (l.add(e), d.forEach((u) => mr(l, e, u))), d.forEach((u) => mr(l, o, u)), d.forEach((u) => mr(l, Nn[i] || {}, u)), d.forEach((u) => mr(l, _e, u)), d.forEach((u) => mr(l, ks, u));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), wu.has(n) && s.set(n, c), c;
  }
  chartOptionScopes() {
    const { options: e, type: n } = this;
    return [
      e,
      Nn[n] || {},
      _e.datasets[n] || {},
      {
        type: n
      },
      _e,
      ks
    ];
  }
  resolveNamedOptions(e, n, r, o = [
    ""
  ]) {
    const i = {
      $shared: true
    }, { resolver: s, subPrefixes: a } = Ul(this._resolverCache, e, o);
    let l = s;
    if (kb(s, n)) {
      i.$shared = false, r = cn(r) ? r() : r;
      const c = this.createResolver(e, r, a);
      l = Xn(s, r, c);
    }
    for (const c of n)
      i[c] = l[c];
    return i;
  }
  createResolver(e, n, r = [
    ""
  ], o) {
    const { resolver: i } = Ul(this._resolverCache, e, r);
    return ie(n) ? Xn(i, n, void 0, o) : i;
  }
}
function Ul(t7, e, n) {
  let r = t7.get(e);
  r || (r = /* @__PURE__ */ new Map(), t7.set(e, r));
  const o = n.join();
  let i = r.get(o);
  return i || (i = {
    resolver: Qs(e, n),
    subPrefixes: n.filter((a) => !a.toLowerCase().includes("hover"))
  }, r.set(o, i)), i;
}
const wb = (t7) => ie(t7) && Object.getOwnPropertyNames(t7).some((e) => cn(t7[e]));
function kb(t7, e) {
  const { isScriptable: n, isIndexable: r } = su(t7);
  for (const o of e) {
    const i = n(o), s = r(o), a = (s || i) && t7[o];
    if (i && (cn(a) || wb(a)) || s && He(a))
      return true;
  }
  return false;
}
var Cb = "4.4.8";
const _b = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Kl(t7, e) {
  return t7 === "top" || t7 === "bottom" || _b.indexOf(t7) === -1 && e === "x";
}
function ql(t7, e) {
  return function(n, r) {
    return n[t7] === r[t7] ? n[e] - r[e] : n[t7] - r[t7];
  };
}
function Gl(t7) {
  const e = t7.chart, n = e.options.animation;
  e.notifyPlugins("afterRender"), xe(n && n.onComplete, [
    t7
  ], e);
}
function Sb(t7) {
  const e = t7.chart, n = e.options.animation;
  xe(n && n.onProgress, [
    t7
  ], e);
}
function ku(t7) {
  return na() && typeof t7 == "string" ? t7 = document.getElementById(t7) : t7 && t7.length && (t7 = t7[0]), t7 && t7.canvas && (t7 = t7.canvas), t7;
}
const Io = {}, Xl = (t7) => {
  const e = ku(t7);
  return Object.values(Io).filter((n) => n.canvas === e).pop();
};
function Eb(t7, e, n) {
  const r = Object.keys(t7);
  for (const o of r) {
    const i = +o;
    if (i >= e) {
      const s = t7[o];
      delete t7[o], (n > 0 || i > e) && (t7[i + n] = s);
    }
  }
}
function Ob(t7, e, n, r) {
  return !n || t7.type === "mouseout" ? null : r ? e : t7;
}
function Co(t7, e, n) {
  return t7.options.clip ? t7[n] : e[n];
}
function Tb(t7, e) {
  const { xScale: n, yScale: r } = t7;
  return n && r ? {
    left: Co(n, e, "left"),
    right: Co(n, e, "right"),
    top: Co(r, e, "top"),
    bottom: Co(r, e, "bottom")
  } : e;
}
var nn;
let Si = (nn = class {
  static register(...e) {
    Ot.add(...e), Jl();
  }
  static unregister(...e) {
    Ot.remove(...e), Jl();
  }
  constructor(e, n) {
    const r = this.config = new xb(n), o = ku(e), i = Xl(o);
    if (i)
      throw new Error("Canvas is already in use. Chart with ID '" + i.id + "' must be destroyed before the canvas with ID '" + i.canvas.id + "' can be reused.");
    const s = r.createResolver(r.chartOptionScopes(), this.getContext());
    this.platform = new (r.platform || Ym(o))(), this.platform.updateConfig(r);
    const a = this.platform.acquireContext(o, s.aspectRatio), l = a && a.canvas, c = l && l.height, d = l && l.width;
    if (this.id = t0(), this.ctx = a, this.canvas = l, this.width = d, this.height = c, this._options = s, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new cb(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = false, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = y0((u) => this.update(u), s.resizeDelay || 0), this._dataChanges = [], Io[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    $t.listen(this, "complete", Gl), $t.listen(this, "progress", Sb), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: e, maintainAspectRatio: n }, width: r, height: o, _aspectRatio: i } = this;
    return qe(e) ? n && i ? i : o ? r / o : null : e;
  }
  get data() {
    return this.config.data;
  }
  set data(e) {
    this.config.data = e;
  }
  get options() {
    return this._options;
  }
  set options(e) {
    this.config.options = e;
  }
  get registry() {
    return Ot;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Sl(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return wl(this.canvas, this.ctx), this;
  }
  stop() {
    return $t.stop(this), this;
  }
  resize(e, n) {
    $t.running(this) ? this._resizeBeforeDraw = {
      width: e,
      height: n
    } : this._resize(e, n);
  }
  _resize(e, n) {
    const r = this.options, o = this.canvas, i = r.maintainAspectRatio && this.aspectRatio, s = this.platform.getMaximumSize(o, e, n, i), a = r.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = s.width, this.height = s.height, this._aspectRatio = this.aspectRatio, Sl(this, a, true) && (this.notifyPlugins("resize", {
      size: s
    }), xe(r.onResize, [
      this,
      s
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const n = this.options.scales || {};
    he(n, (r, o) => {
      r.id = o;
    });
  }
  buildOrUpdateScales() {
    const e = this.options, n = e.scales, r = this.scales, o = Object.keys(r).reduce((s, a) => (s[a] = false, s), {});
    let i = [];
    n && (i = i.concat(Object.keys(n).map((s) => {
      const a = n[s], l = Ss(s, a), c = l === "r", d = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : d ? "bottom" : "left",
        dtype: c ? "radialLinear" : d ? "category" : "linear"
      };
    }))), he(i, (s) => {
      const a = s.options, l = a.id, c = Ss(l, a), d = ge(a.type, s.dtype);
      (a.position === void 0 || Kl(a.position, c) !== Kl(s.dposition)) && (a.position = s.dposition), o[l] = true;
      let u = null;
      if (l in r && r[l].type === d)
        u = r[l];
      else {
        const f = Ot.getScale(d);
        u = new f({
          id: l,
          type: d,
          ctx: this.ctx,
          chart: this
        }), r[u.id] = u;
      }
      u.init(a, e);
    }), he(o, (s, a) => {
      s || delete r[a];
    }), he(r, (s) => {
      sn.configure(this, s, s.options), sn.addBox(this, s);
    });
  }
  _updateMetasets() {
    const e = this._metasets, n = this.data.datasets.length, r = e.length;
    if (e.sort((o, i) => o.index - i.index), r > n) {
      for (let o = n; o < r; ++o)
        this._destroyDatasetMeta(o);
      e.splice(n, r - n);
    }
    this._sortedMetasets = e.slice(0).sort(ql("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: e, data: { datasets: n } } = this;
    e.length > n.length && delete this._stacks, e.forEach((r, o) => {
      n.filter((i) => i === r._dataset).length === 0 && this._destroyDatasetMeta(o);
    });
  }
  buildOrUpdateControllers() {
    const e = [], n = this.data.datasets;
    let r, o;
    for (this._removeUnreferencedMetasets(), r = 0, o = n.length; r < o; r++) {
      const i = n[r];
      let s = this.getDatasetMeta(r);
      const a = i.type || this.config.type;
      if (s.type && s.type !== a && (this._destroyDatasetMeta(r), s = this.getDatasetMeta(r)), s.type = a, s.indexAxis = i.indexAxis || _s(a, this.options), s.order = i.order || 0, s.index = r, s.label = "" + i.label, s.visible = this.isDatasetVisible(r), s.controller)
        s.controller.updateIndex(r), s.controller.linkScales();
      else {
        const l = Ot.getController(a), { datasetElementType: c, dataElementType: d } = _e.datasets[a];
        Object.assign(l, {
          dataElementType: Ot.getElement(d),
          datasetElementType: c && Ot.getElement(c)
        }), s.controller = new l(this, r), e.push(s.controller);
      }
    }
    return this._updateMetasets(), e;
  }
  _resetElements() {
    he(this.data.datasets, (e, n) => {
      this.getDatasetMeta(n).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(e) {
    const n = this.config;
    n.update();
    const r = this._options = n.createResolver(n.chartOptionScopes(), this.getContext()), o = this._animationsDisabled = !r.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: e,
      cancelable: true
    }) === false)
      return;
    const i = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let s = 0;
    for (let c = 0, d = this.data.datasets.length; c < d; c++) {
      const { controller: u } = this.getDatasetMeta(c), f = !o && i.indexOf(u) === -1;
      u.buildOrUpdateElements(f), s = Math.max(+u.getMaxOverflow(), s);
    }
    s = this._minPadding = r.layout.autoPadding ? s : 0, this._updateLayout(s), o || he(i, (c) => {
      c.reset();
    }), this._updateDatasets(e), this.notifyPlugins("afterUpdate", {
      mode: e
    }), this._layers.sort(ql("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, true) : a.length && this._updateHoverStyles(a, a, true), this.render();
  }
  _updateScales() {
    he(this.scales, (e) => {
      sn.removeBox(this, e);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const e = this.options, n = new Set(Object.keys(this._listeners)), r = new Set(e.events);
    (!fl(n, r) || !!this._responsiveListeners !== e.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: e } = this, n = this._getUniformDataChanges() || [];
    for (const { method: r, start: o, count: i } of n) {
      const s = r === "_removeElements" ? -i : i;
      Eb(e, o, s);
    }
  }
  _getUniformDataChanges() {
    const e = this._dataChanges;
    if (!e || !e.length)
      return;
    this._dataChanges = [];
    const n = this.data.datasets.length, r = (i) => new Set(e.filter((s) => s[0] === i).map((s, a) => a + "," + s.splice(1).join(","))), o = r(0);
    for (let i = 1; i < n; i++)
      if (!fl(o, r(i)))
        return;
    return Array.from(o).map((i) => i.split(",")).map((i) => ({
      method: i[1],
      start: +i[2],
      count: +i[3]
    }));
  }
  _updateLayout(e) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: true
    }) === false)
      return;
    sn.update(this, this.width, this.height, e);
    const n = this.chartArea, r = n.width <= 0 || n.height <= 0;
    this._layers = [], he(this.boxes, (o) => {
      r && o.position === "chartArea" || (o.configure && o.configure(), this._layers.push(...o._layers()));
    }, this), this._layers.forEach((o, i) => {
      o._idx = i;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(e) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: e,
      cancelable: true
    }) !== false) {
      for (let n = 0, r = this.data.datasets.length; n < r; ++n)
        this.getDatasetMeta(n).controller.configure();
      for (let n = 0, r = this.data.datasets.length; n < r; ++n)
        this._updateDataset(n, cn(e) ? e({
          datasetIndex: n
        }) : e);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: e
      });
    }
  }
  _updateDataset(e, n) {
    const r = this.getDatasetMeta(e), o = {
      meta: r,
      index: e,
      mode: n,
      cancelable: true
    };
    this.notifyPlugins("beforeDatasetUpdate", o) !== false && (r.controller._update(n), o.cancelable = false, this.notifyPlugins("afterDatasetUpdate", o));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: true
    }) !== false && ($t.has(this) ? this.attached && !$t.running(this) && $t.start(this) : (this.draw(), Gl({
      chart: this
    })));
  }
  draw() {
    let e;
    if (this._resizeBeforeDraw) {
      const { width: r, height: o } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(r, o);
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: true
    }) === false)
      return;
    const n = this._layers;
    for (e = 0; e < n.length && n[e].z <= 0; ++e)
      n[e].draw(this.chartArea);
    for (this._drawDatasets(); e < n.length; ++e)
      n[e].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(e) {
    const n = this._sortedMetasets, r = [];
    let o, i;
    for (o = 0, i = n.length; o < i; ++o) {
      const s = n[o];
      (!e || s.visible) && r.push(s);
    }
    return r;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(true);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: true
    }) === false)
      return;
    const e = this.getSortedVisibleDatasetMetas();
    for (let n = e.length - 1; n >= 0; --n)
      this._drawDataset(e[n]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(e) {
    const n = this.ctx, r = e._clip, o = !r.disabled, i = Tb(e, this.chartArea), s = {
      meta: e,
      index: e.index,
      cancelable: true
    };
    this.notifyPlugins("beforeDatasetDraw", s) !== false && (o && Xs(n, {
      left: r.left === false ? 0 : i.left - r.left,
      right: r.right === false ? this.width : i.right + r.right,
      top: r.top === false ? 0 : i.top - r.top,
      bottom: r.bottom === false ? this.height : i.bottom + r.bottom
    }), e.controller.draw(), o && Js(n), s.cancelable = false, this.notifyPlugins("afterDatasetDraw", s));
  }
  isPointInArea(e) {
    return iu(e, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(e, n, r, o) {
    const i = _m.modes[n];
    return typeof i == "function" ? i(this, e, r, o) : [];
  }
  getDatasetMeta(e) {
    const n = this.data.datasets[e], r = this._metasets;
    let o = r.filter((i) => i && i._dataset === n).pop();
    return o || (o = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: n && n.order || 0,
      index: e,
      _dataset: n,
      _parsed: [],
      _sorted: false
    }, r.push(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = ir(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(e) {
    const n = this.data.datasets[e];
    if (!n)
      return false;
    const r = this.getDatasetMeta(e);
    return typeof r.hidden == "boolean" ? !r.hidden : !n.hidden;
  }
  setDatasetVisibility(e, n) {
    const r = this.getDatasetMeta(e);
    r.hidden = !n;
  }
  toggleDataVisibility(e) {
    this._hiddenIndices[e] = !this._hiddenIndices[e];
  }
  getDataVisibility(e) {
    return !this._hiddenIndices[e];
  }
  _updateVisibility(e, n, r) {
    const o = r ? "show" : "hide", i = this.getDatasetMeta(e), s = i.controller._resolveAnimations(void 0, o);
    Xo(n) ? (i.data[n].hidden = !r, this.update()) : (this.setDatasetVisibility(e, r), s.update(i, {
      visible: r
    }), this.update((a) => a.datasetIndex === e ? o : void 0));
  }
  hide(e, n) {
    this._updateVisibility(e, n, false);
  }
  show(e, n) {
    this._updateVisibility(e, n, true);
  }
  _destroyDatasetMeta(e) {
    const n = this._metasets[e];
    n && n.controller && n.controller._destroy(), delete this._metasets[e];
  }
  _stop() {
    let e, n;
    for (this.stop(), $t.remove(this), e = 0, n = this.data.datasets.length; e < n; ++e)
      this._destroyDatasetMeta(e);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: e, ctx: n } = this;
    this._stop(), this.config.clearCache(), e && (this.unbindEvents(), wl(e, n), this.platform.releaseContext(n), this.canvas = null, this.ctx = null), delete Io[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...e) {
    return this.canvas.toDataURL(...e);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = true;
  }
  bindUserEvents() {
    const e = this._listeners, n = this.platform, r = (i, s) => {
      n.addEventListener(this, i, s), e[i] = s;
    }, o = (i, s, a) => {
      i.offsetX = s, i.offsetY = a, this._eventHandler(i);
    };
    he(this.options.events, (i) => r(i, o));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const e = this._responsiveListeners, n = this.platform, r = (l, c) => {
      n.addEventListener(this, l, c), e[l] = c;
    }, o = (l, c) => {
      e[l] && (n.removeEventListener(this, l, c), delete e[l]);
    }, i = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let s;
    const a = () => {
      o("attach", a), this.attached = true, this.resize(), r("resize", i), r("detach", s);
    };
    s = () => {
      this.attached = false, o("resize", i), this._stop(), this._resize(0, 0), r("attach", a);
    }, n.isAttached(this.canvas) ? a() : s();
  }
  unbindEvents() {
    he(this._listeners, (e, n) => {
      this.platform.removeEventListener(this, n, e);
    }), this._listeners = {}, he(this._responsiveListeners, (e, n) => {
      this.platform.removeEventListener(this, n, e);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(e, n, r) {
    const o = r ? "set" : "remove";
    let i, s, a, l;
    for (n === "dataset" && (i = this.getDatasetMeta(e[0].datasetIndex), i.controller["_" + o + "DatasetHoverStyle"]()), a = 0, l = e.length; a < l; ++a) {
      s = e[a];
      const c = s && this.getDatasetMeta(s.datasetIndex).controller;
      c && c[o + "HoverStyle"](s.element, s.datasetIndex, s.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e) {
    const n = this._active || [], r = e.map(({ datasetIndex: i, index: s }) => {
      const a = this.getDatasetMeta(i);
      if (!a)
        throw new Error("No dataset found at index " + i);
      return {
        datasetIndex: i,
        element: a.data[s],
        index: s
      };
    });
    !qo(r, n) && (this._active = r, this._lastEvent = null, this._updateHoverStyles(r, n));
  }
  notifyPlugins(e, n, r) {
    return this._plugins.notify(this, e, n, r);
  }
  isPluginEnabled(e) {
    return this._plugins._cache.filter((n) => n.plugin.id === e).length === 1;
  }
  _updateHoverStyles(e, n, r) {
    const o = this.options.hover, i = (l, c) => l.filter((d) => !c.some((u) => d.datasetIndex === u.datasetIndex && d.index === u.index)), s = i(n, e), a = r ? e : i(e, n);
    s.length && this.updateHoverStyle(s, o.mode, false), a.length && o.mode && this.updateHoverStyle(a, o.mode, true);
  }
  _eventHandler(e, n) {
    const r = {
      event: e,
      replay: n,
      cancelable: true,
      inChartArea: this.isPointInArea(e)
    }, o = (s) => (s.options.events || this.options.events).includes(e.native.type);
    if (this.notifyPlugins("beforeEvent", r, o) === false)
      return;
    const i = this._handleEvent(e, n, r.inChartArea);
    return r.cancelable = false, this.notifyPlugins("afterEvent", r, o), (i || r.changed) && this.render(), this;
  }
  _handleEvent(e, n, r) {
    const { _active: o = [], options: i } = this, s = n, a = this._getActiveElements(e, o, r, s), l = a0(e), c = Ob(e, this._lastEvent, r, l);
    r && (this._lastEvent = null, xe(i.onHover, [
      e,
      a,
      this
    ], this), l && xe(i.onClick, [
      e,
      a,
      this
    ], this));
    const d = !qo(a, o);
    return (d || n) && (this._active = a, this._updateHoverStyles(a, o, n)), this._lastEvent = c, d;
  }
  _getActiveElements(e, n, r, o) {
    if (e.type === "mouseout")
      return [];
    if (!r)
      return n;
    const i = this.options.hover;
    return this.getElementsAtEventForMode(e, i.mode, i, o);
  }
}, te(nn, "defaults", _e), te(nn, "instances", Io), te(nn, "overrides", Nn), te(nn, "registry", Ot), te(nn, "version", Cb), te(nn, "getChart", Xl), nn);
function Jl() {
  return he(Si.instances, (t7) => t7._plugins.invalidate());
}
function Nb(t7, e, n) {
  const { startAngle: r, pixelMargin: o, x: i, y: s, outerRadius: a, innerRadius: l } = e;
  let c = o / a;
  t7.beginPath(), t7.arc(i, s, a, r - c, n + c), l > o ? (c = o / l, t7.arc(i, s, l, n + c, r - c, true)) : t7.arc(i, s, o, n + Ae, r - Ae), t7.closePath(), t7.clip();
}
function Rb(t7) {
  return Zs(t7, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function Mb(t7, e, n, r) {
  const o = Rb(t7.options.borderRadius), i = (n - e) / 2, s = Math.min(i, r * e / 2), a = (l) => {
    const c = (n - Math.min(i, l)) * r / 2;
    return ht(l, 0, Math.min(i, c));
  };
  return {
    outerStart: a(o.outerStart),
    outerEnd: a(o.outerEnd),
    innerStart: ht(o.innerStart, 0, s),
    innerEnd: ht(o.innerEnd, 0, s)
  };
}
function zn(t7, e, n, r) {
  return {
    x: n + t7 * Math.cos(e),
    y: r + t7 * Math.sin(e)
  };
}
function ri(t7, e, n, r, o, i) {
  const { x: s, y: a, startAngle: l, pixelMargin: c, innerRadius: d } = e, u = Math.max(e.outerRadius + r + n - c, 0), f = d > 0 ? d + r + n + c : 0;
  let h = 0;
  const g = o - l;
  if (r) {
    const R = d > 0 ? d - r : 0, D = u > 0 ? u - r : 0, L = (R + D) / 2, F = L !== 0 ? g * L / (L + r) : g;
    h = (g - F) / 2;
  }
  const p = Math.max(1e-3, g * u - n / Fe) / u, m = (g - p) / 2, v = l + m + h, y = o - m - h, { outerStart: C, outerEnd: x, innerStart: w, innerEnd: _ } = Mb(e, f, u, y - v), O = u - C, N = u - x, T = v + C / O, S = y - x / N, A = f + w, M = f + _, P = v + w / A, E = y - _ / M;
  if (t7.beginPath(), i) {
    const R = (T + S) / 2;
    if (t7.arc(s, a, u, T, R), t7.arc(s, a, u, R, S), x > 0) {
      const $ = zn(N, S, s, a);
      t7.arc($.x, $.y, x, S, y + Ae);
    }
    const D = zn(M, y, s, a);
    if (t7.lineTo(D.x, D.y), _ > 0) {
      const $ = zn(M, E, s, a);
      t7.arc($.x, $.y, _, y + Ae, E + Math.PI);
    }
    const L = (y - _ / f + (v + w / f)) / 2;
    if (t7.arc(s, a, f, y - _ / f, L, true), t7.arc(s, a, f, L, v + w / f, true), w > 0) {
      const $ = zn(A, P, s, a);
      t7.arc($.x, $.y, w, P + Math.PI, v - Ae);
    }
    const F = zn(O, v, s, a);
    if (t7.lineTo(F.x, F.y), C > 0) {
      const $ = zn(O, T, s, a);
      t7.arc($.x, $.y, C, v - Ae, T);
    }
  } else {
    t7.moveTo(s, a);
    const R = Math.cos(T) * u + s, D = Math.sin(T) * u + a;
    t7.lineTo(R, D);
    const L = Math.cos(S) * u + s, F = Math.sin(S) * u + a;
    t7.lineTo(L, F);
  }
  t7.closePath();
}
function Pb(t7, e, n, r, o) {
  const { fullCircles: i, startAngle: s, circumference: a } = e;
  let l = e.endAngle;
  if (i) {
    ri(t7, e, n, r, l, o);
    for (let c = 0; c < i; ++c)
      t7.fill();
    isNaN(a) || (l = s + (a % Ne || Ne));
  }
  return ri(t7, e, n, r, l, o), t7.fill(), l;
}
function Ab(t7, e, n, r, o) {
  const { fullCircles: i, startAngle: s, circumference: a, options: l } = e, { borderWidth: c, borderJoinStyle: d, borderDash: u, borderDashOffset: f } = l, h = l.borderAlign === "inner";
  if (!c)
    return;
  t7.setLineDash(u || []), t7.lineDashOffset = f, h ? (t7.lineWidth = c * 2, t7.lineJoin = d || "round") : (t7.lineWidth = c, t7.lineJoin = d || "bevel");
  let g = e.endAngle;
  if (i) {
    ri(t7, e, n, r, g, o);
    for (let p = 0; p < i; ++p)
      t7.stroke();
    isNaN(a) || (g = s + (a % Ne || Ne));
  }
  h && Nb(t7, e, g), i || (ri(t7, e, n, r, g, o), t7.stroke());
}
class Or extends eo {
  constructor(n) {
    super();
    te(this, "circumference");
    te(this, "endAngle");
    te(this, "fullCircles");
    te(this, "innerRadius");
    te(this, "outerRadius");
    te(this, "pixelMargin");
    te(this, "startAngle");
    this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, n && Object.assign(this, n);
  }
  inRange(n, r, o) {
    const i = this.getProps([
      "x",
      "y"
    ], o), { angle: s, distance: a } = Zd(i, {
      x: n,
      y: r
    }), { startAngle: l, endAngle: c, innerRadius: d, outerRadius: u, circumference: f } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], o), h = (this.options.spacing + this.options.borderWidth) / 2, g = ge(f, c - l), p = Qo(s, l, c) && l !== c, m = g >= Ne || p, v = _r(a, d + h, u + h);
    return m && v;
  }
  getCenterPoint(n) {
    const { x: r, y: o, startAngle: i, endAngle: s, innerRadius: a, outerRadius: l } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], n), { offset: c, spacing: d } = this.options, u = (i + s) / 2, f = (a + l + d + c) / 2;
    return {
      x: r + Math.cos(u) * f,
      y: o + Math.sin(u) * f
    };
  }
  tooltipPosition(n) {
    return this.getCenterPoint(n);
  }
  draw(n) {
    const { options: r, circumference: o } = this, i = (r.offset || 0) / 4, s = (r.spacing || 0) / 2, a = r.circular;
    if (this.pixelMargin = r.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = o > Ne ? Math.floor(o / Ne) : 0, o === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    n.save();
    const l = (this.startAngle + this.endAngle) / 2;
    n.translate(Math.cos(l) * i, Math.sin(l) * i);
    const c = 1 - Math.sin(Math.min(Fe, o || 0)), d = i * c;
    n.fillStyle = r.backgroundColor, n.strokeStyle = r.borderColor, Pb(n, this, d, s, a), Ab(n, this, d, s, a), n.restore();
  }
}
te(Or, "id", "arc"), te(Or, "defaults", {
  borderAlign: "center",
  borderColor: "#fff",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: true
}), te(Or, "defaultRoutes", {
  backgroundColor: "backgroundColor"
}), te(Or, "descriptors", {
  _scriptable: true,
  _indexable: (n) => n !== "borderDash"
});
const Zl = (t7, e) => {
  let { boxHeight: n = e, boxWidth: r = e } = t7;
  return t7.usePointStyle && (n = Math.min(n, e), r = t7.pointStyleWidth || Math.min(r, e)), {
    boxWidth: r,
    boxHeight: n,
    itemHeight: Math.max(e, n)
  };
}, Db = (t7, e) => t7 !== null && e !== null && t7.datasetIndex === e.datasetIndex && t7.index === e.index;
class Ql extends eo {
  constructor(e) {
    super(), this._added = false, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = false, this.chart = e.chart, this.options = e.options, this.ctx = e.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(e, n, r) {
    this.maxWidth = e, this.maxHeight = n, this._margins = r, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const e = this.options.labels || {};
    let n = xe(e.generateLabels, [
      this.chart
    ], this) || [];
    e.filter && (n = n.filter((r) => e.filter(r, this.chart.data))), e.sort && (n = n.sort((r, o) => e.sort(r, o, this.chart.data))), this.options.reverse && n.reverse(), this.legendItems = n;
  }
  fit() {
    const { options: e, ctx: n } = this;
    if (!e.display) {
      this.width = this.height = 0;
      return;
    }
    const r = e.labels, o = et(r.font), i = o.size, s = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = Zl(r, i);
    let c, d;
    n.font = o.string, this.isHorizontal() ? (c = this.maxWidth, d = this._fitRows(s, i, a, l) + 10) : (d = this.maxHeight, c = this._fitCols(s, o, a, l) + 10), this.width = Math.min(c, e.maxWidth || this.maxWidth), this.height = Math.min(d, e.maxHeight || this.maxHeight);
  }
  _fitRows(e, n, r, o) {
    const { ctx: i, maxWidth: s, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], d = o + a;
    let u = e;
    i.textAlign = "left", i.textBaseline = "middle";
    let f = -1, h = -d;
    return this.legendItems.forEach((g, p) => {
      const m = r + n / 2 + i.measureText(g.text).width;
      (p === 0 || c[c.length - 1] + m + 2 * a > s) && (u += d, c[c.length - (p > 0 ? 0 : 1)] = 0, h += d, f++), l[p] = {
        left: 0,
        top: h,
        row: f,
        width: m,
        height: o
      }, c[c.length - 1] += m + a;
    }), u;
  }
  _fitCols(e, n, r, o) {
    const { ctx: i, maxHeight: s, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], d = s - e;
    let u = a, f = 0, h = 0, g = 0, p = 0;
    return this.legendItems.forEach((m, v) => {
      const { itemWidth: y, itemHeight: C } = Ib(r, n, i, m, o);
      v > 0 && h + C + 2 * a > d && (u += f + a, c.push({
        width: f,
        height: h
      }), g += f + a, p++, f = h = 0), l[v] = {
        left: g,
        top: h,
        col: p,
        width: y,
        height: C
      }, f = Math.max(f, y), h += C + a;
    }), u += f, c.push({
      width: f,
      height: h
    }), u;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const e = this._computeTitleHeight(), { legendHitBoxes: n, options: { align: r, labels: { padding: o }, rtl: i } } = this, s = qn(i, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = at(r, this.left + o, this.right - this.lineWidths[a]);
      for (const c of n)
        a !== c.row && (a = c.row, l = at(r, this.left + o, this.right - this.lineWidths[a])), c.top += this.top + e + o, c.left = s.leftForLtr(s.x(l), c.width), l += c.width + o;
    } else {
      let a = 0, l = at(r, this.top + e + o, this.bottom - this.columnSizes[a].height);
      for (const c of n)
        c.col !== a && (a = c.col, l = at(r, this.top + e + o, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + o, c.left = s.leftForLtr(s.x(c.left), c.width), l += c.height + o;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const e = this.ctx;
      Xs(e, this), this._draw(), Js(e);
    }
  }
  _draw() {
    const { options: e, columnSizes: n, lineWidths: r, ctx: o } = this, { align: i, labels: s } = e, a = _e.color, l = qn(e.rtl, this.left, this.width), c = et(s.font), { padding: d } = s, u = c.size, f = u / 2;
    let h;
    this.drawTitle(), o.textAlign = l.textAlign("left"), o.textBaseline = "middle", o.lineWidth = 0.5, o.font = c.string;
    const { boxWidth: g, boxHeight: p, itemHeight: m } = Zl(s, u), v = function(_, O, N) {
      if (isNaN(g) || g <= 0 || isNaN(p) || p < 0)
        return;
      o.save();
      const T = ge(N.lineWidth, 1);
      if (o.fillStyle = ge(N.fillStyle, a), o.lineCap = ge(N.lineCap, "butt"), o.lineDashOffset = ge(N.lineDashOffset, 0), o.lineJoin = ge(N.lineJoin, "miter"), o.lineWidth = T, o.strokeStyle = ge(N.strokeStyle, a), o.setLineDash(ge(N.lineDash, [])), s.usePointStyle) {
        const S = {
          radius: p * Math.SQRT2 / 2,
          pointStyle: N.pointStyle,
          rotation: N.rotation,
          borderWidth: T
        }, A = l.xPlus(_, g / 2), M = O + f;
        ou(o, S, A, M, s.pointStyleWidth && g);
      } else {
        const S = O + Math.max((u - p) / 2, 0), A = l.leftForLtr(_, g), M = Pr(N.borderRadius);
        o.beginPath(), Object.values(M).some((P) => P !== 0) ? Cs(o, {
          x: A,
          y: S,
          w: g,
          h: p,
          radius: M
        }) : o.rect(A, S, g, p), o.fill(), T !== 0 && o.stroke();
      }
      o.restore();
    }, y = function(_, O, N) {
      ei(o, N.text, _, O + m / 2, c, {
        strikethrough: N.hidden,
        textAlign: l.textAlign(N.textAlign)
      });
    }, C = this.isHorizontal(), x = this._computeTitleHeight();
    C ? h = {
      x: at(i, this.left + d, this.right - r[0]),
      y: this.top + d + x,
      line: 0
    } : h = {
      x: this.left + d,
      y: at(i, this.top + x + d, this.bottom - n[0].height),
      line: 0
    }, du(this.ctx, e.textDirection);
    const w = m + d;
    this.legendItems.forEach((_, O) => {
      o.strokeStyle = _.fontColor, o.fillStyle = _.fontColor;
      const N = o.measureText(_.text).width, T = l.textAlign(_.textAlign || (_.textAlign = s.textAlign)), S = g + f + N;
      let A = h.x, M = h.y;
      l.setWidth(this.width), C ? O > 0 && A + S + d > this.right && (M = h.y += w, h.line++, A = h.x = at(i, this.left + d, this.right - r[h.line])) : O > 0 && M + w > this.bottom && (A = h.x = A + n[h.line].width + d, h.line++, M = h.y = at(i, this.top + x + d, this.bottom - n[h.line].height));
      const P = l.x(A);
      if (v(P, M, _), A = v0(T, A + g + f, C ? A + S : this.right, e.rtl), y(l.x(A), M, _), C)
        h.x += S + d;
      else if (typeof _.text != "string") {
        const E = c.lineHeight;
        h.y += Cu(_, E) + d;
      } else
        h.y += w;
    }), uu(this.ctx, e.textDirection);
  }
  drawTitle() {
    const e = this.options, n = e.title, r = et(n.font), o = kt(n.padding);
    if (!n.display)
      return;
    const i = qn(e.rtl, this.left, this.width), s = this.ctx, a = n.position, l = r.size / 2, c = o.top + l;
    let d, u = this.left, f = this.width;
    if (this.isHorizontal())
      f = Math.max(...this.lineWidths), d = this.top + c, u = at(e.align, u, this.right - f);
    else {
      const g = this.columnSizes.reduce((p, m) => Math.max(p, m.height), 0);
      d = c + at(e.align, this.top, this.bottom - g - e.labels.padding - this._computeTitleHeight());
    }
    const h = at(a, u, u + f);
    s.textAlign = i.textAlign(nu(a)), s.textBaseline = "middle", s.strokeStyle = n.color, s.fillStyle = n.color, s.font = r.string, ei(s, n.text, h, d, r);
  }
  _computeTitleHeight() {
    const e = this.options.title, n = et(e.font), r = kt(e.padding);
    return e.display ? n.lineHeight + r.height : 0;
  }
  _getLegendItemAt(e, n) {
    let r, o, i;
    if (_r(e, this.left, this.right) && _r(n, this.top, this.bottom)) {
      for (i = this.legendHitBoxes, r = 0; r < i.length; ++r)
        if (o = i[r], _r(e, o.left, o.left + o.width) && _r(n, o.top, o.top + o.height))
          return this.legendItems[r];
    }
    return null;
  }
  handleEvent(e) {
    const n = this.options;
    if (!zb(e.type, n))
      return;
    const r = this._getLegendItemAt(e.x, e.y);
    if (e.type === "mousemove" || e.type === "mouseout") {
      const o = this._hoveredItem, i = Db(o, r);
      o && !i && xe(n.onLeave, [
        e,
        o,
        this
      ], this), this._hoveredItem = r, r && !i && xe(n.onHover, [
        e,
        r,
        this
      ], this);
    } else r && xe(n.onClick, [
      e,
      r,
      this
    ], this);
  }
}
function Ib(t7, e, n, r, o) {
  const i = Lb(r, t7, e, n), s = Fb(o, r, e.lineHeight);
  return {
    itemWidth: i,
    itemHeight: s
  };
}
function Lb(t7, e, n, r) {
  let o = t7.text;
  return o && typeof o != "string" && (o = o.reduce((i, s) => i.length > s.length ? i : s)), e + n.size / 2 + r.measureText(o).width;
}
function Fb(t7, e, n) {
  let r = t7;
  return typeof e.text != "string" && (r = Cu(e, n)), r;
}
function Cu(t7, e) {
  const n = t7.text ? t7.text.length : 0;
  return e * n;
}
function zb(t7, e) {
  return !!((t7 === "mousemove" || t7 === "mouseout") && (e.onHover || e.onLeave) || e.onClick && (t7 === "click" || t7 === "mouseup"));
}
var Bb = {
  id: "legend",
  _element: Ql,
  start(t7, e, n) {
    const r = t7.legend = new Ql({
      ctx: t7.ctx,
      options: n,
      chart: t7
    });
    sn.configure(t7, r, n), sn.addBox(t7, r);
  },
  stop(t7) {
    sn.removeBox(t7, t7.legend), delete t7.legend;
  },
  beforeUpdate(t7, e, n) {
    const r = t7.legend;
    sn.configure(t7, r, n), r.options = n;
  },
  afterUpdate(t7) {
    const e = t7.legend;
    e.buildLabels(), e.adjustHitBoxes();
  },
  afterEvent(t7, e) {
    e.replay || t7.legend.handleEvent(e.event);
  },
  defaults: {
    display: true,
    position: "top",
    align: "center",
    fullSize: true,
    reverse: false,
    weight: 1e3,
    onClick(t7, e, n) {
      const r = e.datasetIndex, o = n.chart;
      o.isDatasetVisible(r) ? (o.hide(r), e.hidden = true) : (o.show(r), e.hidden = false);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (t7) => t7.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(t7) {
        const e = t7.data.datasets, { labels: { usePointStyle: n, pointStyle: r, textAlign: o, color: i, useBorderRadius: s, borderRadius: a } } = t7.legend.options;
        return t7._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(n ? 0 : void 0), d = kt(c.borderWidth);
          return {
            text: e[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: i,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (d.width + d.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: r || c.pointStyle,
            rotation: c.rotation,
            textAlign: o || c.textAlign,
            borderRadius: s && (a || c.borderRadius),
            datasetIndex: l.index
          };
        }, this);
      }
    },
    title: {
      color: (t7) => t7.chart.options.color,
      display: false,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (t7) => !t7.startsWith("on"),
    labels: {
      _scriptable: (t7) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(t7)
    }
  }
};
const Tr = {
  average(t7) {
    if (!t7.length)
      return false;
    let e, n, r = /* @__PURE__ */ new Set(), o = 0, i = 0;
    for (e = 0, n = t7.length; e < n; ++e) {
      const a = t7[e].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        r.add(l.x), o += l.y, ++i;
      }
    }
    return i === 0 || r.size === 0 ? false : {
      x: [
        ...r
      ].reduce((a, l) => a + l) / r.size,
      y: o / i
    };
  },
  nearest(t7, e) {
    if (!t7.length)
      return false;
    let n = e.x, r = e.y, o = Number.POSITIVE_INFINITY, i, s, a;
    for (i = 0, s = t7.length; i < s; ++i) {
      const l = t7[i].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), d = f0(e, c);
        d < o && (o = d, a = l);
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      n = l.x, r = l.y;
    }
    return {
      x: n,
      y: r
    };
  }
};
function Et(t7, e) {
  return e && (He(e) ? Array.prototype.push.apply(t7, e) : t7.push(e)), t7;
}
function jt(t7) {
  return (typeof t7 == "string" || t7 instanceof String) && t7.indexOf(`
`) > -1 ? t7.split(`
`) : t7;
}
function $b(t7, e) {
  const { element: n, datasetIndex: r, index: o } = e, i = t7.getDatasetMeta(r).controller, { label: s, value: a } = i.getLabelAndValue(o);
  return {
    chart: t7,
    label: s,
    parsed: i.getParsed(o),
    raw: t7.data.datasets[r].data[o],
    formattedValue: a,
    dataset: i.getDataset(),
    dataIndex: o,
    datasetIndex: r,
    element: n
  };
}
function ec(t7, e) {
  const n = t7.chart.ctx, { body: r, footer: o, title: i } = t7, { boxWidth: s, boxHeight: a } = e, l = et(e.bodyFont), c = et(e.titleFont), d = et(e.footerFont), u = i.length, f = o.length, h = r.length, g = kt(e.padding);
  let p = g.height, m = 0, v = r.reduce((x, w) => x + w.before.length + w.lines.length + w.after.length, 0);
  if (v += t7.beforeBody.length + t7.afterBody.length, u && (p += u * c.lineHeight + (u - 1) * e.titleSpacing + e.titleMarginBottom), v) {
    const x = e.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    p += h * x + (v - h) * l.lineHeight + (v - 1) * e.bodySpacing;
  }
  f && (p += e.footerMarginTop + f * d.lineHeight + (f - 1) * e.footerSpacing);
  let y = 0;
  const C = function(x) {
    m = Math.max(m, n.measureText(x).width + y);
  };
  return n.save(), n.font = c.string, he(t7.title, C), n.font = l.string, he(t7.beforeBody.concat(t7.afterBody), C), y = e.displayColors ? s + 2 + e.boxPadding : 0, he(r, (x) => {
    he(x.before, C), he(x.lines, C), he(x.after, C);
  }), y = 0, n.font = d.string, he(t7.footer, C), n.restore(), m += g.width, {
    width: m,
    height: p
  };
}
function jb(t7, e) {
  const { y: n, height: r } = e;
  return n < r / 2 ? "top" : n > t7.height - r / 2 ? "bottom" : "center";
}
function Hb(t7, e, n, r) {
  const { x: o, width: i } = r, s = n.caretSize + n.caretPadding;
  if (t7 === "left" && o + i + s > e.width || t7 === "right" && o - i - s < 0)
    return true;
}
function Wb(t7, e, n, r) {
  const { x: o, width: i } = n, { width: s, chartArea: { left: a, right: l } } = t7;
  let c = "center";
  return r === "center" ? c = o <= (a + l) / 2 ? "left" : "right" : o <= i / 2 ? c = "left" : o >= s - i / 2 && (c = "right"), Hb(c, t7, e, n) && (c = "center"), c;
}
function tc(t7, e, n) {
  const r = n.yAlign || e.yAlign || jb(t7, n);
  return {
    xAlign: n.xAlign || e.xAlign || Wb(t7, e, n, r),
    yAlign: r
  };
}
function Vb(t7, e) {
  let { x: n, width: r } = t7;
  return e === "right" ? n -= r : e === "center" && (n -= r / 2), n;
}
function Yb(t7, e, n) {
  let { y: r, height: o } = t7;
  return e === "top" ? r += n : e === "bottom" ? r -= o + n : r -= o / 2, r;
}
function nc(t7, e, n, r) {
  const { caretSize: o, caretPadding: i, cornerRadius: s } = t7, { xAlign: a, yAlign: l } = n, c = o + i, { topLeft: d, topRight: u, bottomLeft: f, bottomRight: h } = Pr(s);
  let g = Vb(e, a);
  const p = Yb(e, l, c);
  return l === "center" ? a === "left" ? g += c : a === "right" && (g -= c) : a === "left" ? g -= Math.max(d, f) + o : a === "right" && (g += Math.max(u, h) + o), {
    x: ht(g, 0, r.width - e.width),
    y: ht(p, 0, r.height - e.height)
  };
}
function _o(t7, e, n) {
  const r = kt(n.padding);
  return e === "center" ? t7.x + t7.width / 2 : e === "right" ? t7.x + t7.width - r.right : t7.x + r.left;
}
function rc(t7) {
  return Et([], jt(t7));
}
function Ub(t7, e, n) {
  return ir(t7, {
    tooltip: e,
    tooltipItems: n,
    type: "tooltip"
  });
}
function oc(t7, e) {
  const n = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
  return n ? t7.override(n) : t7;
}
const _u = {
  beforeTitle: zt,
  title(t7) {
    if (t7.length > 0) {
      const e = t7[0], n = e.chart.data.labels, r = n ? n.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return e.dataset.label || "";
      if (e.label)
        return e.label;
      if (r > 0 && e.dataIndex < r)
        return n[e.dataIndex];
    }
    return "";
  },
  afterTitle: zt,
  beforeBody: zt,
  beforeLabel: zt,
  label(t7) {
    if (this && this.options && this.options.mode === "dataset")
      return t7.label + ": " + t7.formattedValue || t7.formattedValue;
    let e = t7.dataset.label || "";
    e && (e += ": ");
    const n = t7.formattedValue;
    return qe(n) || (e += n), e;
  },
  labelColor(t7) {
    const n = t7.chart.getDatasetMeta(t7.datasetIndex).controller.getStyle(t7.dataIndex);
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(t7) {
    const n = t7.chart.getDatasetMeta(t7.datasetIndex).controller.getStyle(t7.dataIndex);
    return {
      pointStyle: n.pointStyle,
      rotation: n.rotation
    };
  },
  afterLabel: zt,
  afterBody: zt,
  beforeFooter: zt,
  footer: zt,
  afterFooter: zt
};
function Je(t7, e, n, r) {
  const o = t7[e].call(n, r);
  return typeof o > "u" ? _u[e].call(n, r) : o;
}
var vs;
let ic = (vs = class extends eo {
  constructor(e) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = e.chart, this.options = e.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(e) {
    this.options = e, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const e = this._cachedAnimations;
    if (e)
      return e;
    const n = this.chart, r = this.options.setContext(this.getContext()), o = r.enabled && n.options.animation && r.animations, i = new fu(this.chart, o);
    return o._cacheable && (this._cachedAnimations = Object.freeze(i)), i;
  }
  getContext() {
    return this.$context || (this.$context = Ub(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(e, n) {
    const { callbacks: r } = n, o = Je(r, "beforeTitle", this, e), i = Je(r, "title", this, e), s = Je(r, "afterTitle", this, e);
    let a = [];
    return a = Et(a, jt(o)), a = Et(a, jt(i)), a = Et(a, jt(s)), a;
  }
  getBeforeBody(e, n) {
    return rc(Je(n.callbacks, "beforeBody", this, e));
  }
  getBody(e, n) {
    const { callbacks: r } = n, o = [];
    return he(e, (i) => {
      const s = {
        before: [],
        lines: [],
        after: []
      }, a = oc(r, i);
      Et(s.before, jt(Je(a, "beforeLabel", this, i))), Et(s.lines, Je(a, "label", this, i)), Et(s.after, jt(Je(a, "afterLabel", this, i))), o.push(s);
    }), o;
  }
  getAfterBody(e, n) {
    return rc(Je(n.callbacks, "afterBody", this, e));
  }
  getFooter(e, n) {
    const { callbacks: r } = n, o = Je(r, "beforeFooter", this, e), i = Je(r, "footer", this, e), s = Je(r, "afterFooter", this, e);
    let a = [];
    return a = Et(a, jt(o)), a = Et(a, jt(i)), a = Et(a, jt(s)), a;
  }
  _createItems(e) {
    const n = this._active, r = this.chart.data, o = [], i = [], s = [];
    let a = [], l, c;
    for (l = 0, c = n.length; l < c; ++l)
      a.push($b(this.chart, n[l]));
    return e.filter && (a = a.filter((d, u, f) => e.filter(d, u, f, r))), e.itemSort && (a = a.sort((d, u) => e.itemSort(d, u, r))), he(a, (d) => {
      const u = oc(e.callbacks, d);
      o.push(Je(u, "labelColor", this, d)), i.push(Je(u, "labelPointStyle", this, d)), s.push(Je(u, "labelTextColor", this, d));
    }), this.labelColors = o, this.labelPointStyles = i, this.labelTextColors = s, this.dataPoints = a, a;
  }
  update(e, n) {
    const r = this.options.setContext(this.getContext()), o = this._active;
    let i, s = [];
    if (!o.length)
      this.opacity !== 0 && (i = {
        opacity: 0
      });
    else {
      const a = Tr[r.position].call(this, o, this._eventPosition);
      s = this._createItems(r), this.title = this.getTitle(s, r), this.beforeBody = this.getBeforeBody(s, r), this.body = this.getBody(s, r), this.afterBody = this.getAfterBody(s, r), this.footer = this.getFooter(s, r);
      const l = this._size = ec(this, r), c = Object.assign({}, a, l), d = tc(this.chart, r, c), u = nc(r, c, d, this.chart);
      this.xAlign = d.xAlign, this.yAlign = d.yAlign, i = {
        opacity: 1,
        x: u.x,
        y: u.y,
        width: l.width,
        height: l.height,
        caretX: a.x,
        caretY: a.y
      };
    }
    this._tooltipItems = s, this.$context = void 0, i && this._resolveAnimations().update(this, i), e && r.external && r.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: n
    });
  }
  drawCaret(e, n, r, o) {
    const i = this.getCaretPosition(e, r, o);
    n.lineTo(i.x1, i.y1), n.lineTo(i.x2, i.y2), n.lineTo(i.x3, i.y3);
  }
  getCaretPosition(e, n, r) {
    const { xAlign: o, yAlign: i } = this, { caretSize: s, cornerRadius: a } = r, { topLeft: l, topRight: c, bottomLeft: d, bottomRight: u } = Pr(a), { x: f, y: h } = e, { width: g, height: p } = n;
    let m, v, y, C, x, w;
    return i === "center" ? (x = h + p / 2, o === "left" ? (m = f, v = m - s, C = x + s, w = x - s) : (m = f + g, v = m + s, C = x - s, w = x + s), y = m) : (o === "left" ? v = f + Math.max(l, d) + s : o === "right" ? v = f + g - Math.max(c, u) - s : v = this.caretX, i === "top" ? (C = h, x = C - s, m = v - s, y = v + s) : (C = h + p, x = C + s, m = v + s, y = v - s), w = C), {
      x1: m,
      x2: v,
      x3: y,
      y1: C,
      y2: x,
      y3: w
    };
  }
  drawTitle(e, n, r) {
    const o = this.title, i = o.length;
    let s, a, l;
    if (i) {
      const c = qn(r.rtl, this.x, this.width);
      for (e.x = _o(this, r.titleAlign, r), n.textAlign = c.textAlign(r.titleAlign), n.textBaseline = "middle", s = et(r.titleFont), a = r.titleSpacing, n.fillStyle = r.titleColor, n.font = s.string, l = 0; l < i; ++l)
        n.fillText(o[l], c.x(e.x), e.y + s.lineHeight / 2), e.y += s.lineHeight + a, l + 1 === i && (e.y += r.titleMarginBottom - a);
    }
  }
  _drawColorBox(e, n, r, o, i) {
    const s = this.labelColors[r], a = this.labelPointStyles[r], { boxHeight: l, boxWidth: c } = i, d = et(i.bodyFont), u = _o(this, "left", i), f = o.x(u), h = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0, g = n.y + h;
    if (i.usePointStyle) {
      const p = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, m = o.leftForLtr(f, c) + c / 2, v = g + l / 2;
      e.strokeStyle = i.multiKeyBackground, e.fillStyle = i.multiKeyBackground, kl(e, p, m, v), e.strokeStyle = s.borderColor, e.fillStyle = s.backgroundColor, kl(e, p, m, v);
    } else {
      e.lineWidth = ie(s.borderWidth) ? Math.max(...Object.values(s.borderWidth)) : s.borderWidth || 1, e.strokeStyle = s.borderColor, e.setLineDash(s.borderDash || []), e.lineDashOffset = s.borderDashOffset || 0;
      const p = o.leftForLtr(f, c), m = o.leftForLtr(o.xPlus(f, 1), c - 2), v = Pr(s.borderRadius);
      Object.values(v).some((y) => y !== 0) ? (e.beginPath(), e.fillStyle = i.multiKeyBackground, Cs(e, {
        x: p,
        y: g,
        w: c,
        h: l,
        radius: v
      }), e.fill(), e.stroke(), e.fillStyle = s.backgroundColor, e.beginPath(), Cs(e, {
        x: m,
        y: g + 1,
        w: c - 2,
        h: l - 2,
        radius: v
      }), e.fill()) : (e.fillStyle = i.multiKeyBackground, e.fillRect(p, g, c, l), e.strokeRect(p, g, c, l), e.fillStyle = s.backgroundColor, e.fillRect(m, g + 1, c - 2, l - 2));
    }
    e.fillStyle = this.labelTextColors[r];
  }
  drawBody(e, n, r) {
    const { body: o } = this, { bodySpacing: i, bodyAlign: s, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: d } = r, u = et(r.bodyFont);
    let f = u.lineHeight, h = 0;
    const g = qn(r.rtl, this.x, this.width), p = function(N) {
      n.fillText(N, g.x(e.x + h), e.y + f / 2), e.y += f + i;
    }, m = g.textAlign(s);
    let v, y, C, x, w, _, O;
    for (n.textAlign = s, n.textBaseline = "middle", n.font = u.string, e.x = _o(this, m, r), n.fillStyle = r.bodyColor, he(this.beforeBody, p), h = a && m !== "right" ? s === "center" ? c / 2 + d : c + 2 + d : 0, x = 0, _ = o.length; x < _; ++x) {
      for (v = o[x], y = this.labelTextColors[x], n.fillStyle = y, he(v.before, p), C = v.lines, a && C.length && (this._drawColorBox(n, e, x, g, r), f = Math.max(u.lineHeight, l)), w = 0, O = C.length; w < O; ++w)
        p(C[w]), f = u.lineHeight;
      he(v.after, p);
    }
    h = 0, f = u.lineHeight, he(this.afterBody, p), e.y -= i;
  }
  drawFooter(e, n, r) {
    const o = this.footer, i = o.length;
    let s, a;
    if (i) {
      const l = qn(r.rtl, this.x, this.width);
      for (e.x = _o(this, r.footerAlign, r), e.y += r.footerMarginTop, n.textAlign = l.textAlign(r.footerAlign), n.textBaseline = "middle", s = et(r.footerFont), n.fillStyle = r.footerColor, n.font = s.string, a = 0; a < i; ++a)
        n.fillText(o[a], l.x(e.x), e.y + s.lineHeight / 2), e.y += s.lineHeight + r.footerSpacing;
    }
  }
  drawBackground(e, n, r, o) {
    const { xAlign: i, yAlign: s } = this, { x: a, y: l } = e, { width: c, height: d } = r, { topLeft: u, topRight: f, bottomLeft: h, bottomRight: g } = Pr(o.cornerRadius);
    n.fillStyle = o.backgroundColor, n.strokeStyle = o.borderColor, n.lineWidth = o.borderWidth, n.beginPath(), n.moveTo(a + u, l), s === "top" && this.drawCaret(e, n, r, o), n.lineTo(a + c - f, l), n.quadraticCurveTo(a + c, l, a + c, l + f), s === "center" && i === "right" && this.drawCaret(e, n, r, o), n.lineTo(a + c, l + d - g), n.quadraticCurveTo(a + c, l + d, a + c - g, l + d), s === "bottom" && this.drawCaret(e, n, r, o), n.lineTo(a + h, l + d), n.quadraticCurveTo(a, l + d, a, l + d - h), s === "center" && i === "left" && this.drawCaret(e, n, r, o), n.lineTo(a, l + u), n.quadraticCurveTo(a, l, a + u, l), n.closePath(), n.fill(), o.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(e) {
    const n = this.chart, r = this.$animations, o = r && r.x, i = r && r.y;
    if (o || i) {
      const s = Tr[e.position].call(this, this._active, this._eventPosition);
      if (!s)
        return;
      const a = this._size = ec(this, e), l = Object.assign({}, s, this._size), c = tc(n, e, l), d = nc(e, l, c, n);
      (o._to !== d.x || i._to !== d.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = s.x, this.caretY = s.y, this._resolveAnimations().update(this, d));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(e) {
    const n = this.options.setContext(this.getContext());
    let r = this.opacity;
    if (!r)
      return;
    this._updateAnimationTarget(n);
    const o = {
      width: this.width,
      height: this.height
    }, i = {
      x: this.x,
      y: this.y
    };
    r = Math.abs(r) < 1e-3 ? 0 : r;
    const s = kt(n.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    n.enabled && a && (e.save(), e.globalAlpha = r, this.drawBackground(i, e, o, n), du(e, n.textDirection), i.y += s.top, this.drawTitle(i, e, n), this.drawBody(i, e, n), this.drawFooter(i, e, n), uu(e, n.textDirection), e.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e, n) {
    const r = this._active, o = e.map(({ datasetIndex: a, index: l }) => {
      const c = this.chart.getDatasetMeta(a);
      if (!c)
        throw new Error("Cannot find a dataset at index " + a);
      return {
        datasetIndex: a,
        element: c.data[l],
        index: l
      };
    }), i = !qo(r, o), s = this._positionChanged(o, n);
    (i || s) && (this._active = o, this._eventPosition = n, this._ignoreReplayEvents = true, this.update(true));
  }
  handleEvent(e, n, r = true) {
    if (n && this._ignoreReplayEvents)
      return false;
    this._ignoreReplayEvents = false;
    const o = this.options, i = this._active || [], s = this._getActiveElements(e, i, n, r), a = this._positionChanged(s, e), l = n || !qo(s, i) || a;
    return l && (this._active = s, (o.enabled || o.external) && (this._eventPosition = {
      x: e.x,
      y: e.y
    }, this.update(true, n))), l;
  }
  _getActiveElements(e, n, r, o) {
    const i = this.options;
    if (e.type === "mouseout")
      return [];
    if (!o)
      return n.filter((a) => this.chart.data.datasets[a.datasetIndex] && this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index) !== void 0);
    const s = this.chart.getElementsAtEventForMode(e, i.mode, i, r);
    return i.reverse && s.reverse(), s;
  }
  _positionChanged(e, n) {
    const { caretX: r, caretY: o, options: i } = this, s = Tr[i.position].call(this, e, n);
    return s !== false && (r !== s.x || o !== s.y);
  }
}, te(vs, "positioners", Tr), vs);
var Kb = {
  id: "tooltip",
  _element: ic,
  positioners: Tr,
  afterInit(t7, e, n) {
    n && (t7.tooltip = new ic({
      chart: t7,
      options: n
    }));
  },
  beforeUpdate(t7, e, n) {
    t7.tooltip && t7.tooltip.initialize(n);
  },
  reset(t7, e, n) {
    t7.tooltip && t7.tooltip.initialize(n);
  },
  afterDraw(t7) {
    const e = t7.tooltip;
    if (e && e._willRender()) {
      const n = {
        tooltip: e
      };
      if (t7.notifyPlugins("beforeTooltipDraw", {
        ...n,
        cancelable: true
      }) === false)
        return;
      e.draw(t7.ctx), t7.notifyPlugins("afterTooltipDraw", n);
    }
  },
  afterEvent(t7, e) {
    if (t7.tooltip) {
      const n = e.replay;
      t7.tooltip.handleEvent(e.event, n, e.inChartArea) && (e.changed = true);
    }
  },
  defaults: {
    enabled: true,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (t7, e) => e.bodyFont.size,
    boxWidth: (t7, e) => e.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: true,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: _u
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (t7) => t7 !== "filter" && t7 !== "itemSort" && t7 !== "external",
    _indexable: false,
    callbacks: {
      _scriptable: false,
      _indexable: false
    },
    animation: {
      _fallback: false
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
};
const Ei = {
  millisecond: {
    common: true,
    size: 1,
    steps: 1e3
  },
  second: {
    common: true,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: true,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: true,
    size: 36e5,
    steps: 24
  },
  day: {
    common: true,
    size: 864e5,
    steps: 30
  },
  week: {
    common: false,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: true,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: false,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: true,
    size: 3154e7
  }
}, Qe = /* @__PURE__ */ Object.keys(Ei);
function sc(t7, e) {
  return t7 - e;
}
function ac(t7, e) {
  if (qe(e))
    return null;
  const n = t7._adapter, { parser: r, round: o, isoWeekday: i } = t7._parseOpts;
  let s = e;
  return typeof r == "function" && (s = r(s)), Ut(s) || (s = typeof r == "string" ? n.parse(s, r) : n.parse(s)), s === null ? null : (o && (s = o === "week" && (Zo(i) || i === true) ? n.startOf(s, "isoWeek", i) : n.startOf(s, o)), +s);
}
function lc(t7, e, n, r) {
  const o = Qe.length;
  for (let i = Qe.indexOf(t7); i < o - 1; ++i) {
    const s = Ei[Qe[i]], a = s.steps ? s.steps : Number.MAX_SAFE_INTEGER;
    if (s.common && Math.ceil((n - e) / (a * s.size)) <= r)
      return Qe[i];
  }
  return Qe[o - 1];
}
function qb(t7, e, n, r, o) {
  for (let i = Qe.length - 1; i >= Qe.indexOf(n); i--) {
    const s = Qe[i];
    if (Ei[s].common && t7._adapter.diff(o, r, s) >= e - 1)
      return s;
  }
  return Qe[n ? Qe.indexOf(n) : 0];
}
function Gb(t7) {
  for (let e = Qe.indexOf(t7) + 1, n = Qe.length; e < n; ++e)
    if (Ei[Qe[e]].common)
      return Qe[e];
}
function cc(t7, e, n) {
  if (!n)
    t7[e] = true;
  else if (n.length) {
    const { lo: r, hi: o } = Gs(n, e), i = n[r] >= e ? n[r] : n[o];
    t7[i] = true;
  }
}
function Xb(t7, e, n, r) {
  const o = t7._adapter, i = +o.startOf(e[0].value, r), s = e[e.length - 1].value;
  let a, l;
  for (a = i; a <= s; a = +o.add(a, 1, r))
    l = n[a], l >= 0 && (e[l].major = true);
  return e;
}
function dc(t7, e, n) {
  const r = [], o = {}, i = e.length;
  let s, a;
  for (s = 0; s < i; ++s)
    a = e[s], o[a] = s, r.push({
      value: a,
      major: false
    });
  return i === 0 || !n ? r : Xb(t7, r, o, n);
}
class oi extends _i {
  constructor(e) {
    super(e), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = false, this._parseOpts = void 0;
  }
  init(e, n = {}) {
    const r = e.time || (e.time = {}), o = this._adapter = new vm._date(e.adapters.date);
    o.init(n), Nr(r.displayFormats, o.formats()), this._parseOpts = {
      parser: r.parser,
      round: r.round,
      isoWeekday: r.isoWeekday
    }, super.init(e), this._normalized = n.normalized;
  }
  parse(e, n) {
    return e === void 0 ? null : ac(this, e);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const e = this.options, n = this._adapter, r = e.time.unit || "day";
    let { min: o, max: i, minDefined: s, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !s && !isNaN(c.min) && (o = Math.min(o, c.min)), !a && !isNaN(c.max) && (i = Math.max(i, c.max));
    }
    (!s || !a) && (l(this._getLabelBounds()), (e.bounds !== "ticks" || e.ticks.source !== "labels") && l(this.getMinMax(false))), o = Ut(o) && !isNaN(o) ? o : +n.startOf(Date.now(), r), i = Ut(i) && !isNaN(i) ? i : +n.endOf(Date.now(), r) + 1, this.min = Math.min(o, i - 1), this.max = Math.max(o + 1, i);
  }
  _getLabelBounds() {
    const e = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY, r = Number.NEGATIVE_INFINITY;
    return e.length && (n = e[0], r = e[e.length - 1]), {
      min: n,
      max: r
    };
  }
  buildTicks() {
    const e = this.options, n = e.time, r = e.ticks, o = r.source === "labels" ? this.getLabelTimestamps() : this._generate();
    e.bounds === "ticks" && o.length && (this.min = this._userMin || o[0], this.max = this._userMax || o[o.length - 1]);
    const i = this.min, s = this.max, a = p0(o, i, s);
    return this._unit = n.unit || (r.autoSkip ? lc(n.minUnit, this.min, this.max, this._getLabelCapacity(i)) : qb(this, a.length, n.minUnit, this.min, this.max)), this._majorUnit = !r.major.enabled || this._unit === "year" ? void 0 : Gb(this._unit), this.initOffsets(o), e.reverse && a.reverse(), dc(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((e) => +e.value));
  }
  initOffsets(e = []) {
    let n = 0, r = 0, o, i;
    this.options.offset && e.length && (o = this.getDecimalForValue(e[0]), e.length === 1 ? n = 1 - o : n = (this.getDecimalForValue(e[1]) - o) / 2, i = this.getDecimalForValue(e[e.length - 1]), e.length === 1 ? r = i : r = (i - this.getDecimalForValue(e[e.length - 2])) / 2);
    const s = e.length < 3 ? 0.5 : 0.25;
    n = ht(n, 0, s), r = ht(r, 0, s), this._offsets = {
      start: n,
      end: r,
      factor: 1 / (n + 1 + r)
    };
  }
  _generate() {
    const e = this._adapter, n = this.min, r = this.max, o = this.options, i = o.time, s = i.unit || lc(i.minUnit, n, r, this._getLabelCapacity(n)), a = ge(o.ticks.stepSize, 1), l = s === "week" ? i.isoWeekday : false, c = Zo(l) || l === true, d = {};
    let u = n, f, h;
    if (c && (u = +e.startOf(u, "isoWeek", l)), u = +e.startOf(u, c ? "day" : s), e.diff(r, n, s) > 1e5 * a)
      throw new Error(n + " and " + r + " are too far apart with stepSize of " + a + " " + s);
    const g = o.ticks.source === "data" && this.getDataTimestamps();
    for (f = u, h = 0; f < r; f = +e.add(f, a, s), h++)
      cc(d, f, g);
    return (f === r || o.bounds === "ticks" || h === 1) && cc(d, f, g), Object.keys(d).sort(sc).map((p) => +p);
  }
  getLabelForValue(e) {
    const n = this._adapter, r = this.options.time;
    return r.tooltipFormat ? n.format(e, r.tooltipFormat) : n.format(e, r.displayFormats.datetime);
  }
  format(e, n) {
    const o = this.options.time.displayFormats, i = this._unit, s = n || o[i];
    return this._adapter.format(e, s);
  }
  _tickFormatFunction(e, n, r, o) {
    const i = this.options, s = i.ticks.callback;
    if (s)
      return xe(s, [
        e,
        n,
        r
      ], this);
    const a = i.time.displayFormats, l = this._unit, c = this._majorUnit, d = l && a[l], u = c && a[c], f = r[n], h = c && u && f && f.major;
    return this._adapter.format(e, o || (h ? u : d));
  }
  generateTickLabels(e) {
    let n, r, o;
    for (n = 0, r = e.length; n < r; ++n)
      o = e[n], o.label = this._tickFormatFunction(o.value, n, e);
  }
  getDecimalForValue(e) {
    return e === null ? NaN : (e - this.min) / (this.max - this.min);
  }
  getPixelForValue(e) {
    const n = this._offsets, r = this.getDecimalForValue(e);
    return this.getPixelForDecimal((n.start + r) * n.factor);
  }
  getValueForPixel(e) {
    const n = this._offsets, r = this.getDecimalForPixel(e) / n.factor - n.end;
    return this.min + r * (this.max - this.min);
  }
  _getLabelSize(e) {
    const n = this.options.ticks, r = this.ctx.measureText(e).width, o = wn(this.isHorizontal() ? n.maxRotation : n.minRotation), i = Math.cos(o), s = Math.sin(o), a = this._resolveTickFontOptions(0).size;
    return {
      w: r * i + a * s,
      h: r * s + a * i
    };
  }
  _getLabelCapacity(e) {
    const n = this.options.time, r = n.displayFormats, o = r[n.unit] || r.millisecond, i = this._tickFormatFunction(e, 0, dc(this, [
      e
    ], this._majorUnit), o), s = this._getLabelSize(i), a = Math.floor(this.isHorizontal() ? this.width / s.w : this.height / s.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let e = this._cache.data || [], n, r;
    if (e.length)
      return e;
    const o = this.getMatchingVisibleMetas();
    if (this._normalized && o.length)
      return this._cache.data = o[0].controller.getAllParsedValues(this);
    for (n = 0, r = o.length; n < r; ++n)
      e = e.concat(o[n].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(e);
  }
  getLabelTimestamps() {
    const e = this._cache.labels || [];
    let n, r;
    if (e.length)
      return e;
    const o = this.getLabels();
    for (n = 0, r = o.length; n < r; ++n)
      e.push(ac(this, o[n]));
    return this._cache.labels = this._normalized ? e : this.normalize(e);
  }
  normalize(e) {
    return b0(e.sort(sc));
  }
}
te(oi, "id", "time"), te(oi, "defaults", {
  bounds: "data",
  adapters: {},
  time: {
    parser: false,
    unit: false,
    round: false,
    isoWeekday: false,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    callback: false,
    major: {
      enabled: false
    }
  }
});
function So(t7, e, n) {
  let r = 0, o = t7.length - 1, i, s, a, l;
  n ? (e >= t7[r].pos && e <= t7[o].pos && ({ lo: r, hi: o } = ws(t7, "pos", e)), { pos: i, time: a } = t7[r], { pos: s, time: l } = t7[o]) : (e >= t7[r].time && e <= t7[o].time && ({ lo: r, hi: o } = ws(t7, "time", e)), { time: i, pos: a } = t7[r], { time: s, pos: l } = t7[o]);
  const c = s - i;
  return c ? a + (l - a) * (e - i) / c : a;
}
class uc extends oi {
  constructor(e) {
    super(e), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const e = this._getTimestampsForTable(), n = this._table = this.buildLookupTable(e);
    this._minPos = So(n, this.min), this._tableRange = So(n, this.max) - this._minPos, super.initOffsets(e);
  }
  buildLookupTable(e) {
    const { min: n, max: r } = this, o = [], i = [];
    let s, a, l, c, d;
    for (s = 0, a = e.length; s < a; ++s)
      c = e[s], c >= n && c <= r && o.push(c);
    if (o.length < 2)
      return [
        {
          time: n,
          pos: 0
        },
        {
          time: r,
          pos: 1
        }
      ];
    for (s = 0, a = o.length; s < a; ++s)
      d = o[s + 1], l = o[s - 1], c = o[s], Math.round((d + l) / 2) !== c && i.push({
        time: c,
        pos: s / (a - 1)
      });
    return i;
  }
  _generate() {
    const e = this.min, n = this.max;
    let r = super.getDataTimestamps();
    return (!r.includes(e) || !r.length) && r.splice(0, 0, e), (!r.includes(n) || r.length === 1) && r.push(n), r.sort((o, i) => o - i);
  }
  _getTimestampsForTable() {
    let e = this._cache.all || [];
    if (e.length)
      return e;
    const n = this.getDataTimestamps(), r = this.getLabelTimestamps();
    return n.length && r.length ? e = this.normalize(n.concat(r)) : e = n.length ? n : r, e = this._cache.all = e, e;
  }
  getDecimalForValue(e) {
    return (So(this._table, e) - this._minPos) / this._tableRange;
  }
  getValueForPixel(e) {
    const n = this._offsets, r = this.getDecimalForPixel(e) / n.factor - n.end;
    return So(this._table, r * this._tableRange + this._minPos, true);
  }
}
te(uc, "id", "timeseries"), te(uc, "defaults", oi.defaults);
const Su = "label";
function fc(t7, e) {
  typeof t7 == "function" ? t7(e) : t7 && (t7.current = e);
}
function Jb(t7, e) {
  const n = t7.options;
  n && e && Object.assign(n, e);
}
function Eu(t7, e) {
  t7.labels = e;
}
function Ou(t7, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Su;
  const r = [];
  t7.datasets = e.map((o) => {
    const i = t7.datasets.find((s) => s[n] === o[n]);
    return !i || !o.data || r.includes(i) ? {
      ...o
    } : (r.push(i), Object.assign(i, o), i);
  });
}
function Zb(t7) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Su;
  const n = {
    labels: [],
    datasets: []
  };
  return Eu(n, t7.labels), Ou(n, t7.datasets, e), n;
}
function Qb(t7, e) {
  const { height: n = 150, width: r = 300, redraw: o = false, datasetIdKey: i, type: s, data: a, options: l, plugins: c = [], fallbackContent: d, updateMode: u, ...f } = t7, h = Yt(null), g = Yt(null), p = () => {
    h.current && (g.current = new Si(h.current, {
      type: s,
      data: Zb(a, i),
      options: l && {
        ...l
      },
      plugins: c
    }), fc(e, g.current));
  }, m = () => {
    fc(e, null), g.current && (g.current.destroy(), g.current = null);
  };
  return Ze(() => {
    !o && g.current && l && Jb(g.current, l);
  }, [
    o,
    l
  ]), Ze(() => {
    !o && g.current && Eu(g.current.config.data, a.labels);
  }, [
    o,
    a.labels
  ]), Ze(() => {
    !o && g.current && a.datasets && Ou(g.current.config.data, a.datasets, i);
  }, [
    o,
    a.datasets
  ]), Ze(() => {
    g.current && (o ? (m(), setTimeout(p)) : g.current.update(u));
  }, [
    o,
    l,
    a.labels,
    a.datasets,
    u
  ]), Ze(() => {
    g.current && (m(), setTimeout(p));
  }, [
    s
  ]), Ze(() => (p(), () => m()), []), /* @__PURE__ */ H.createElement("canvas", {
    ref: h,
    role: "img",
    height: n,
    width: r,
    ...f
  }, d);
}
const ey = /* @__PURE__ */ ue(Qb);
function ty(t7, e) {
  return Si.register(e), /* @__PURE__ */ ue((n, r) => /* @__PURE__ */ H.createElement(ey, {
    ...n,
    ref: r,
    type: t7
  }));
}
const ny = /* @__PURE__ */ ty("doughnut", Sr);
Si.register(Or, Kb, Bb);
const f_ = () => {
  const t7 = {
    labels: ["Planeado", "Ejecutado"],
    datasets: [
      {
        label: "Presupuesto",
        data: [14.7, 11.6],
        backgroundColor: ["#EBE1FF", "#9873e8"],
        borderColor: ["#EBE1F9", "#9873e1"],
        borderWidth: 1,
        circumference: 180,
        rotation: -90
      }
    ]
  }, e = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "PRESUPUESTO"
      },
      legend: {
        position: "right"
      },
      tooltip: {
        enabled: true
      },
      doughnutLabel: {
        labels: [
          {
            text: "Total",
            font: {
              size: "16",
              weight: "bold"
            }
          },
          {
            text: `${t7.datasets[0].data.reduce((r, o) => r + o, 0).toFixed(1)}`,
            font: {
              size: "20"
            }
          }
        ]
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-full min-h-[200px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ny, { data: t7, options: e, plugins: [{
    id: "textCenter",
    beforeDraw(r) {
      const {
        ctx: o,
        chartArea: { top: i, width: s, height: a }
      } = r, l = "Total", c = t7.datasets[0].data.reduce((u, f) => u + f, 0).toFixed(1), d = i + a * 0.75;
      o.save(), o.font = "16px Arial", o.fillStyle = "black", o.textAlign = "center", o.fillText(l, s / 2, d - 15), o.font = "bold 20px Arial", o.fillText(c, s / 2, d + 15), o.restore();
    }
  }] }) });
}, ry = "modal-module__overlay__cc2Es", oy = "modal-module__modal__WAkuU", iy = "modal-module__closeButton__1lo1j", rs = {
  overlay: ry,
  modal: oy,
  closeButton: iy
};
function sy(t7) {
  return me({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z" }, child: [] }] })(t7);
}
const br = ue(
  ({ isOpen: t7, onClose: e, children: n, width: r = "auto" }, o) => t7 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: rs.overlay, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: o, className: rs.modal, style: { width: r }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: e, className: rs.closeButton, children: /* @__PURE__ */ jsxRuntimeExports.jsx(sy, {}) }),
    n
  ] }) }) : null
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var lt = function() {
  return lt = Object.assign || function(e) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, lt.apply(this, arguments);
};
function Rn(t7, e) {
  var n = {};
  for (var r in t7) Object.prototype.hasOwnProperty.call(t7, r) && e.indexOf(r) < 0 && (n[r] = t7[r]);
  if (t7 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(t7); o < r.length; o++)
      e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t7, r[o]) && (n[r[o]] = t7[r[o]]);
  return n;
}
function Ge(t7, e) {
  return Object.defineProperty ? Object.defineProperty(t7, "raw", { value: e }) : t7.raw = e, t7;
}
function Es() {
  return Es = Object.assign ? Object.assign.bind() : function(t7) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t7[r] = n[r]);
    }
    return t7;
  }, Es.apply(this, arguments);
}
function Oi(t7) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return e[n] === void 0 && (e[n] = t7(n)), e[n];
  };
}
var ly = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, cy = /* @__PURE__ */ Oi(
  function(t7) {
    return ly.test(t7) || t7.charCodeAt(0) === 111 && t7.charCodeAt(1) === 110 && t7.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function dy(t7) {
  if (t7.sheet)
    return t7.sheet;
  for (var e = 0; e < document.styleSheets.length; e++)
    if (document.styleSheets[e].ownerNode === t7)
      return document.styleSheets[e];
}
function uy(t7) {
  var e = document.createElement("style");
  return e.setAttribute("data-emotion", t7.key), t7.nonce !== void 0 && e.setAttribute("nonce", t7.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
}
var fy = /* @__PURE__ */ function() {
  function t7(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? true : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var e = t7.prototype;
  return e.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, e.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(uy(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = dy(o);
      try {
        s.insertRule(r, s.cssRules.length);
      } catch (a) {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, e.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, t7;
}(), Ue = "-ms-", ii = "-moz-", ae = "-webkit-", ia = "comm", sa = "rule", aa = "decl", hy = "@import", Tu = "@keyframes", gy = Math.abs, Ti = String.fromCharCode, py = Object.assign;
function my(t7, e) {
  return je(t7, 0) ^ 45 ? (((e << 2 ^ je(t7, 0)) << 2 ^ je(t7, 1)) << 2 ^ je(t7, 2)) << 2 ^ je(t7, 3) : 0;
}
function Nu(t7) {
  return t7.trim();
}
function by(t7, e) {
  return (t7 = e.exec(t7)) ? t7[0] : t7;
}
function de(t7, e, n) {
  return t7.replace(e, n);
}
function Os(t7, e) {
  return t7.indexOf(e);
}
function je(t7, e) {
  return t7.charCodeAt(e) | 0;
}
function Wr(t7, e, n) {
  return t7.slice(e, n);
}
function Tt(t7) {
  return t7.length;
}
function la(t7) {
  return t7.length;
}
function Eo(t7, e) {
  return e.push(t7), t7;
}
function yy(t7, e) {
  return t7.map(e).join("");
}
var Ni = 1, Jn = 1, Ru = 0, ot = 0, Te = 0, sr = "";
function Ri(t7, e, n, r, o, i, s) {
  return { value: t7, root: e, parent: n, type: r, props: o, children: i, line: Ni, column: Jn, length: s, return: "" };
}
function yr(t7, e) {
  return py(Ri("", null, null, "", null, null, 0), t7, { length: -t7.length }, e);
}
function vy() {
  return Te;
}
function xy() {
  return Te = ot > 0 ? je(sr, --ot) : 0, Jn--, Te === 10 && (Jn = 1, Ni--), Te;
}
function ct() {
  return Te = ot < Ru ? je(sr, ot++) : 0, Jn++, Te === 10 && (Jn = 1, Ni++), Te;
}
function Pt() {
  return je(sr, ot);
}
function Lo() {
  return ot;
}
function to(t7, e) {
  return Wr(sr, t7, e);
}
function Vr(t7) {
  switch (t7) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Mu(t7) {
  return Ni = Jn = 1, Ru = Tt(sr = t7), ot = 0, [];
}
function Pu(t7) {
  return sr = "", t7;
}
function Fo(t7) {
  return Nu(to(ot - 1, Ts(t7 === 91 ? t7 + 2 : t7 === 40 ? t7 + 1 : t7)));
}
function wy(t7) {
  for (; (Te = Pt()) && Te < 33; )
    ct();
  return Vr(t7) > 2 || Vr(Te) > 3 ? "" : " ";
}
function ky(t7, e) {
  for (; --e && ct() && !(Te < 48 || Te > 102 || Te > 57 && Te < 65 || Te > 70 && Te < 97); )
    ;
  return to(t7, Lo() + (e < 6 && Pt() == 32 && ct() == 32));
}
function Ts(t7) {
  for (; ct(); )
    switch (Te) {
      case t7:
        return ot;
      case 34:
      case 39:
        t7 !== 34 && t7 !== 39 && Ts(Te);
        break;
      case 40:
        t7 === 41 && Ts(t7);
        break;
      case 92:
        ct();
        break;
    }
  return ot;
}
function Cy(t7, e) {
  for (; ct() && t7 + Te !== 57; )
    if (t7 + Te === 84 && Pt() === 47)
      break;
  return "/*" + to(e, ot - 1) + "*" + Ti(t7 === 47 ? t7 : ct());
}
function _y(t7) {
  for (; !Vr(Pt()); )
    ct();
  return to(t7, ot);
}
function hc(t7) {
  return Pu(zo("", null, null, null, [""], t7 = Mu(t7), 0, [0], t7));
}
function zo(t7, e, n, r, o, i, s, a, l) {
  for (var c = 0, d = 0, u = s, f = 0, h = 0, g = 0, p = 1, m = 1, v = 1, y = 0, C = "", x = o, w = i, _ = r, O = C; m; )
    switch (g = y, y = ct()) {
      case 40:
        if (g != 108 && je(O, u - 1) == 58) {
          Os(O += de(Fo(y), "&", "&\f"), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += Fo(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += wy(g);
        break;
      case 92:
        O += ky(Lo() - 1, 7);
        continue;
      case 47:
        switch (Pt()) {
          case 42:
          case 47:
            Eo(Sy(Cy(ct(), Lo()), e, n), l);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * p:
        a[c++] = Tt(O) * v;
      case 125 * p:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            m = 0;
          case 59 + d:
            h > 0 && Tt(O) - u && Eo(h > 32 ? pc(O + ";", r, n, u - 1) : pc(de(O, " ", "") + ";", r, n, u - 2), l);
            break;
          case 59:
            O += ";";
          default:
            if (Eo(_ = gc(O, e, n, c, d, o, a, C, x = [], w = [], u), i), y === 123)
              if (d === 0)
                zo(O, e, _, _, x, i, u, a, w);
              else
                switch (f === 99 && je(O, 3) === 110 ? 100 : f) {
                  case 100:
                  case 109:
                  case 115:
                    zo(t7, _, _, r && Eo(gc(t7, _, _, 0, 0, o, a, C, o, x = [], u), w), o, w, u, a, r ? x : w);
                    break;
                  default:
                    zo(O, _, _, _, [""], w, 0, a, w);
                }
        }
        c = d = h = 0, p = v = 1, C = O = "", u = s;
        break;
      case 58:
        u = 1 + Tt(O), h = g;
      default:
        if (p < 1) {
          if (y == 123)
            --p;
          else if (y == 125 && p++ == 0 && xy() == 125)
            continue;
        }
        switch (O += Ti(y), y * p) {
          case 38:
            v = d > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            a[c++] = (Tt(O) - 1) * v, v = 1;
            break;
          case 64:
            Pt() === 45 && (O += Fo(ct())), f = Pt(), d = u = Tt(C = O += _y(Lo())), y++;
            break;
          case 45:
            g === 45 && Tt(O) == 2 && (p = 0);
        }
    }
  return i;
}
function gc(t7, e, n, r, o, i, s, a, l, c, d) {
  for (var u = o - 1, f = o === 0 ? i : [""], h = la(f), g = 0, p = 0, m = 0; g < r; ++g)
    for (var v = 0, y = Wr(t7, u + 1, u = gy(p = s[g])), C = t7; v < h; ++v)
      (C = Nu(p > 0 ? f[v] + " " + y : de(y, /&\f/g, f[v]))) && (l[m++] = C);
  return Ri(t7, e, n, o === 0 ? sa : a, l, c, d);
}
function Sy(t7, e, n) {
  return Ri(t7, e, n, ia, Ti(vy()), Wr(t7, 2, -2), 0);
}
function pc(t7, e, n, r) {
  return Ri(t7, e, n, aa, Wr(t7, 0, r), Wr(t7, r + 1, -1), r);
}
function _n(t7, e) {
  for (var n = "", r = la(t7), o = 0; o < r; o++)
    n += e(t7[o], o, t7, e) || "";
  return n;
}
function mc(t7, e, n, r) {
  switch (t7.type) {
    case hy:
    case aa:
      return t7.return = t7.return || t7.value;
    case ia:
      return "";
    case Tu:
      return t7.return = t7.value + "{" + _n(t7.children, r) + "}";
    case sa:
      t7.value = t7.props.join(",");
  }
  return Tt(n = _n(t7.children, r)) ? t7.return = t7.value + "{" + n + "}" : "";
}
function bc(t7) {
  var e = la(t7);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < e; a++)
      s += t7[a](n, r, o, i) || "";
    return s;
  };
}
function Ey(t7) {
  return function(e) {
    e.root || (e = e.return) && t7(e);
  };
}
var Oy = function(e) {
  var n = /* @__PURE__ */ new WeakMap();
  return function(r) {
    if (n.has(r))
      return n.get(r);
    var o = e(r);
    return n.set(r, o), o;
  };
}, Ty = function(e, n, r) {
  for (var o = 0, i = 0; o = i, i = Pt(), o === 38 && i === 12 && (n[r] = 1), !Vr(i); )
    ct();
  return to(e, ot);
}, Ny = function(e, n) {
  var r = -1, o = 44;
  do
    switch (Vr(o)) {
      case 0:
        o === 38 && Pt() === 12 && (n[r] = 1), e[r] += Ty(ot - 1, n, r);
        break;
      case 2:
        e[r] += Fo(o);
        break;
      case 4:
        if (o === 44) {
          e[++r] = Pt() === 58 ? "&\f" : "", n[r] = e[r].length;
          break;
        }
      default:
        e[r] += Ti(o);
    }
  while (o = ct());
  return e;
}, Ry = function(e, n) {
  return Pu(Ny(Mu(e), n));
}, yc = /* @__PURE__ */ new WeakMap(), My = function(e) {
  if (!(e.type !== "rule" || !e.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  e.length < 1)) {
    for (var n = e.value, r = e.parent, o = e.column === r.column && e.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(e.props.length === 1 && n.charCodeAt(0) !== 58 && !yc.get(r)) && !o) {
      yc.set(e, true);
      for (var i = [], s = Ry(n, i), a = r.props, l = 0, c = 0; l < s.length; l++)
        for (var d = 0; d < a.length; d++, c++)
          e.props[c] = i[l] ? s[l].replace(/&\f/g, a[d]) : a[d] + " " + s[l];
    }
  }
}, Py = function(e) {
  if (e.type === "decl") {
    var n = e.value;
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
};
function Du(t7, e) {
  switch (my(t7, e)) {
    case 5103:
      return ae + "print-" + t7 + t7;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ae + t7 + t7;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ae + t7 + ii + t7 + Ue + t7 + t7;
    case 6828:
    case 4268:
      return ae + t7 + Ue + t7 + t7;
    case 6165:
      return ae + t7 + Ue + "flex-" + t7 + t7;
    case 5187:
      return ae + t7 + de(t7, /(\w+).+(:[^]+)/, ae + "box-$1$2" + Ue + "flex-$1$2") + t7;
    case 5443:
      return ae + t7 + Ue + "flex-item-" + de(t7, /flex-|-self/, "") + t7;
    case 4675:
      return ae + t7 + Ue + "flex-line-pack" + de(t7, /align-content|flex-|-self/, "") + t7;
    case 5548:
      return ae + t7 + Ue + de(t7, "shrink", "negative") + t7;
    case 5292:
      return ae + t7 + Ue + de(t7, "basis", "preferred-size") + t7;
    case 6060:
      return ae + "box-" + de(t7, "-grow", "") + ae + t7 + Ue + de(t7, "grow", "positive") + t7;
    case 4554:
      return ae + de(t7, /([^-])(transform)/g, "$1" + ae + "$2") + t7;
    case 6187:
      return de(de(de(t7, /(zoom-|grab)/, ae + "$1"), /(image-set)/, ae + "$1"), t7, "") + t7;
    case 5495:
    case 3959:
      return de(t7, /(image-set\([^]*)/, ae + "$1$`$1");
    case 4968:
      return de(de(t7, /(.+:)(flex-)?(.*)/, ae + "box-pack:$3" + Ue + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ae + t7 + t7;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return de(t7, /(.+)-inline(.+)/, ae + "$1$2") + t7;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Tt(t7) - 1 - e > 6) switch (je(t7, e + 1)) {
        case 109:
          if (je(t7, e + 4) !== 45) break;
        case 102:
          return de(t7, /(.+:)(.+)-([^]+)/, "$1" + ae + "$2-$3$1" + ii + (je(t7, e + 3) == 108 ? "$3" : "$2-$3")) + t7;
        case 115:
          return ~Os(t7, "stretch") ? Du(de(t7, "stretch", "fill-available"), e) + t7 : t7;
      }
      break;
    case 4949:
      if (je(t7, e + 1) !== 115) break;
    case 6444:
      switch (je(t7, Tt(t7) - 3 - (~Os(t7, "!important") && 10))) {
        case 107:
          return de(t7, ":", ":" + ae) + t7;
        case 101:
          return de(t7, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ae + (je(t7, 14) === 45 ? "inline-" : "") + "box$3$1" + ae + "$2$3$1" + Ue + "$2box$3") + t7;
      }
      break;
    case 5936:
      switch (je(t7, e + 11)) {
        case 114:
          return ae + t7 + Ue + de(t7, /[svh]\w+-[tblr]{2}/, "tb") + t7;
        case 108:
          return ae + t7 + Ue + de(t7, /[svh]\w+-[tblr]{2}/, "tb-rl") + t7;
        case 45:
          return ae + t7 + Ue + de(t7, /[svh]\w+-[tblr]{2}/, "lr") + t7;
      }
      return ae + t7 + Ue + t7 + t7;
  }
  return t7;
}
var zy = function(e, n, r, o) {
  if (e.length > -1 && !e.return) switch (e.type) {
    case aa:
      e.return = Du(e.value, e.length);
      break;
    case Tu:
      return _n([yr(e, {
        value: de(e.value, "@", "@" + ae)
      })], o);
    case sa:
      if (e.length) return yy(e.props, function(i) {
        switch (by(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return _n([yr(e, {
              props: [de(i, /:(read-\w+)/, ":" + ii + "$1")]
            })], o);
          case "::placeholder":
            return _n([yr(e, {
              props: [de(i, /:(plac\w+)/, ":" + ae + "input-$1")]
            }), yr(e, {
              props: [de(i, /:(plac\w+)/, ":" + ii + "$1")]
            }), yr(e, {
              props: [de(i, /:(plac\w+)/, Ue + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Bo = typeof document < "u", By = Bo ? void 0 : Oy(function() {
  return Oi(function() {
    var t7 = {};
    return function(e) {
      return t7[e];
    };
  });
}), $y = [zy], Iu = function(e) {
  var n = e.key;
  if (Bo && n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(x) {
      var w = x.getAttribute("data-emotion");
      w.indexOf(" ") !== -1 && (document.head.appendChild(x), x.setAttribute("data-s", ""));
    });
  }
  var o = e.stylisPlugins || $y;
  var i = {}, s, a = [];
  Bo && (s = e.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(x) {
      for (var w = x.getAttribute("data-emotion").split(" "), _ = 1; _ < w.length; _++)
        i[w[_]] = true;
      a.push(x);
    }
  ));
  var l, c = [My, Py];
  if (Bo) {
    var d, u = [mc, Ey(function(x) {
      d.insert(x);
    })], f = bc(c.concat(o, u)), h = function(w) {
      return _n(hc(w), f);
    };
    l = function(w, _, O, N) {
      d = O, h(w ? w + "{" + _.styles + "}" : _.styles), N && (C.inserted[_.name] = true);
    };
  } else {
    var g = [mc], p = bc(c.concat(o, g)), m = function(w) {
      return _n(hc(w), p);
    }, v = By(o)(n), y = function(w, _) {
      var O = _.name;
      return v[O] === void 0 && (v[O] = m(w ? w + "{" + _.styles + "}" : _.styles)), v[O];
    };
    l = function(w, _, O, N) {
      var T = _.name, S = y(w, _);
      if (C.compat === void 0)
        return N && (C.inserted[T] = true), // using === development instead of !== production
        // because if people do ssr in tests, the source maps showing up would be annoying
        S;
      if (N)
        C.inserted[T] = S;
      else
        return S;
    };
  }
  var C = {
    key: n,
    sheet: new fy({
      key: n,
      container: s,
      nonce: e.nonce,
      speedy: e.speedy,
      prepend: e.prepend,
      insertionPoint: e.insertionPoint
    }),
    nonce: e.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return C.sheet.hydrate(a), C;
};
var Qy = typeof document < "u", Sc = function(e) {
  return e();
}, ev = k.useInsertionEffect ? k.useInsertionEffect : false, $u = Qy && ev || Sc, ju = typeof document < "u", Ur = /* @__PURE__ */ Ye(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Iu({
    key: "css"
  }) : null
);
Ur.Provider;
var da = function(e) {
  return /* @__PURE__ */ ue(function(n, r) {
    var o = De(Ur);
    return e(n, o, r);
  });
};
ju || (da = function(e) {
  return function(n) {
    var r = De(Ur);
    return r === null ? (r = Iu({
      key: "css"
    }), /* @__PURE__ */ Mt(Ur.Provider, {
      value: r
    }, e(n, r))) : e(n, r);
  };
});
var ua = /* @__PURE__ */ Ye({});
var Rs = typeof document < "u";
function ov(t7, e, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    t7[o] !== void 0 ? e.push(t7[o] + ";") : r += o + " ";
  }), r;
}
var Hu = function(e, n, r) {
  var o = e.key + "-" + n.name;
  (r === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Rs === false && e.compat !== void 0) && e.registered[o] === void 0 && (e.registered[o] = n.styles);
}, iv = function(e, n, r) {
  Hu(e, n, r);
  var o = e.key + "-" + n.name;
  if (e.inserted[n.name] === void 0) {
    var i = "", s = n;
    do {
      var a = e.insert(n === s ? "." + o : "", s, e.sheet, true);
      !Rs && a !== void 0 && (i += a), s = s.next;
    } while (s !== void 0);
    if (!Rs && i.length !== 0)
      return i;
  }
};
function sv(t7) {
  for (var e = 0, n, r = 0, o = t7.length; o >= 4; ++r, o -= 4)
    n = t7.charCodeAt(r) & 255 | (t7.charCodeAt(++r) & 255) << 8 | (t7.charCodeAt(++r) & 255) << 16 | (t7.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, e = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      e ^= (t7.charCodeAt(r + 2) & 255) << 16;
    case 2:
      e ^= (t7.charCodeAt(r + 1) & 255) << 8;
    case 1:
      e ^= t7.charCodeAt(r) & 255, e = /* Math.imul(h, m): */
      (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = /* Math.imul(h, m): */
  (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
var av = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, cv = /[A-Z]|^ms/g, Wu = /_EMO_([^_]+?)_([^]*?)_EMO_/g, fa = function(e) {
  return e.charCodeAt(1) === 45;
}, Nc = function(e) {
  return e != null && typeof e != "boolean";
}, is = /* @__PURE__ */ Oi(function(t7) {
  return fa(t7) ? t7 : t7.replace(cv, "-$&").toLowerCase();
}), ai = function(e, n) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Wu, function(r, o, i) {
          return xt = {
            name: o,
            styles: i,
            next: xt
          }, o;
        });
  }
  return av[e] !== 1 && !fa(e) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Kr(t7, e, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0) {
    return n;
  }
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return xt = {
          name: n.name,
          styles: n.styles,
          next: xt
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            xt = {
              name: r.name,
              styles: r.styles,
              next: xt
            }, r = r.next;
        var o = n.styles + ";";
        return o;
      }
      return pv(t7, e, n);
    }
    case "function": {
      if (t7 !== void 0) {
        var i = xt, s = n(t7);
        return xt = i, Kr(t7, e, s);
      }
      break;
    }
  }
  if (e == null)
    return n;
  var c = e[n];
  return c !== void 0 ? c : n;
}
function pv(t7, e, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Kr(t7, e, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object")
        e != null && e[s] !== void 0 ? r += i + "{" + e[s] + "}" : Nc(s) && (r += is(i) + ":" + ai(i, s) + ";");
      else {
        if (Array.isArray(s) && typeof s[0] == "string" && (e == null || e[s[0]] === void 0))
          for (var a = 0; a < s.length; a++)
            Nc(s[a]) && (r += is(i) + ":" + ai(i, s[a]) + ";");
        else {
          var l = Kr(t7, e, s);
          switch (i) {
            case "animation":
            case "animationName": {
              r += is(i) + ":" + l + ";";
              break;
            }
            default:
              r += i + "{" + l + "}";
          }
        }
      }
    }
  return r;
}
var Mc = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var xt, mv = function(e, n, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = true, i = "";
  xt = void 0;
  var s = e[0];
  s == null || s.raw === void 0 ? (o = false, i += Kr(r, n, s)) : (i += s[0]);
  for (var a = 1; a < e.length; a++)
    i += Kr(r, n, e[a]), o && (i += s[a]);
  Mc.lastIndex = 0;
  for (var c = "", d; (d = Mc.exec(i)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    d[1];
  var u = sv(i) + c;
  return {
    name: u,
    styles: i,
    next: xt
  };
}, bv = cy, yv = function(e) {
  return e !== "theme";
}, Pc = function(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96 ? bv : yv;
}, Ac = function(e, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = e.__emotion_forwardProp && i ? function(s) {
      return e.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = e.__emotion_forwardProp), o;
}, vv = typeof document < "u", xv = function(e) {
  var n = e.cache, r = e.serialized, o = e.isStringTag;
  Hu(n, r, o);
  var i = $u(function() {
    return iv(n, r, o);
  });
  if (!vv && i !== void 0) {
    for (var s, a = r.name, l = r.next; l !== void 0; )
      a += " " + l.name, l = l.next;
    return /* @__PURE__ */ Mt("style", (s = {}, s["data-emotion"] = n.key + " " + a, s.dangerouslySetInnerHTML = {
      __html: i
    }, s.nonce = n.sheet.nonce, s));
  }
  return null;
}, wv = function t(e, n) {
  var r = e.__emotion_real === e, o = r && e.__emotion_base || e, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = Ac(e, n, r), l = a || Pc(o), c = !l("as");
  return function() {
    var d = arguments, u = r && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
    if (i !== void 0 && u.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      u.push.apply(u, d);
    else {
      u.push(d[0][0]);
      for (var f = d.length, h = 1; h < f; h++)
        u.push(d[h], d[0][h]);
    }
    var g = da(function(p, m, v) {
      var y = c && p.as || o, C = "", x = [], w = p;
      if (p.theme == null) {
        w = {};
        for (var _ in p)
          w[_] = p[_];
        w.theme = De(ua);
      }
      typeof p.className == "string" ? C = ov(m.registered, x, p.className) : p.className != null && (C = p.className + " ");
      var O = mv(u.concat(x), m.registered, w);
      C += m.key + "-" + O.name, s !== void 0 && (C += " " + s);
      var N = c && a === void 0 ? Pc(y) : l, T = {};
      for (var S in p)
        c && S === "as" || // $FlowFixMe
        N(S) && (T[S] = p[S]);
      return T.className = C, T.ref = v, /* @__PURE__ */ Mt(Wd, null, /* @__PURE__ */ Mt(xv, {
        cache: m,
        serialized: O,
        isStringTag: typeof y == "string"
      }), /* @__PURE__ */ Mt(y, T));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = e.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = u, g.__emotion_forwardProp = a, Object.defineProperty(g, "toString", {
      value: function() {
        return "." + s;
      }
    }), g.withComponent = function(p, m) {
      return t(p, Es({}, n, m, {
        shouldForwardProp: Ac(g, m, true)
      })).apply(void 0, u);
    }, g;
  };
}, kv = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], ze = wv.bind();
kv.forEach(function(t7) {
  ze[t7] = ze(t7);
});
var Uu = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t7) {
  (function() {
    var e = {}.hasOwnProperty;
    function n() {
      for (var r = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (i) {
          var s = typeof i;
          if (s === "string" || s === "number")
            r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var a = n.apply(null, i);
              a && r.push(a);
            }
          } else if (s === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              r.push(i.toString());
              continue;
            }
            for (var l in i)
              e.call(i, l) && i[l] && r.push(l);
          }
        }
      }
      return r.join(" ");
    }
    t7.exports ? (n.default = n, t7.exports = n) : window.classNames = n;
  })();
})(Uu);
var Pe = Uu.exports, Cv = H.createContext(void 0), _v = function() {
  var t7 = H.useContext(Cv);
  return t7;
}, Sv = function(t7) {
  var e = H.useState(!!t7 && typeof window < "u" && window.matchMedia(t7).matches), n = e[0], r = e[1];
  return H.useEffect(function() {
    if (t7) {
      var o = window.matchMedia(t7), i = function() {
        o.matches !== n && r(o.matches);
      };
      return i(), o.addEventListener("change", i), function() {
        return o.removeEventListener("change", i);
      };
    }
  }, [n, t7]), n;
}, ke = {
  root: "ps-sidebar-root",
  container: "ps-sidebar-container",
  image: "ps-sidebar-image",
  backdrop: "ps-sidebar-backdrop",
  collapsed: "ps-collapsed",
  toggled: "ps-toggled",
  rtl: "ps-rtl",
  broken: "ps-broken"
}, le = {
  root: "ps-menu-root",
  menuItemRoot: "ps-menuitem-root",
  subMenuRoot: "ps-submenu-root",
  button: "ps-menu-button",
  prefix: "ps-menu-prefix",
  suffix: "ps-menu-suffix",
  label: "ps-menu-label",
  icon: "ps-menu-icon",
  subMenuContent: "ps-submenu-content",
  SubMenuExpandIcon: "ps-submenu-expand-icon",
  disabled: "ps-disabled",
  active: "ps-active",
  open: "ps-open"
}, Ev = ze.div(Ic || (Ic = Ge([`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  background-color: rgb(0, 0, 0, 0.3);
`], [`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  background-color: rgb(0, 0, 0, 0.3);
`]))), Ic, Ov = {
  xs: "480px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1600px",
  always: "always",
  all: "all"
}, Tv = ze.aside(Lc || (Lc = Ge([`
  position: relative;
  border-right-width: 1px;
  border-right-style: solid;
  border-color: #efefef;

  transition: `, `;

  width: `, `;
  min-width: `, `;

  &.`, ` {
    width: `, `;
    min-width: `, `;
  }

  &.`, ` {
    direction: rtl;
    border-right-width: none;
    border-left-width: 1px;
    border-right-style: none;
    border-left-style: solid;
  }

  &.`, ` {
    position: fixed;
    height: 100%;
    top: 0px;
    z-index: 100;

    `, `

    &.`, ` {
      `, `
    }

    &.`, ` {
      `, `
    }

    &.`, ` {
      right: -`, `;

      &.`, ` {
        right: -`, `;
      }

      &.`, ` {
        right: 0;
      }
    }
  }

  `, `
`], [`
  position: relative;
  border-right-width: 1px;
  border-right-style: solid;
  border-color: #efefef;

  transition: `, `;

  width: `, `;
  min-width: `, `;

  &.`, ` {
    width: `, `;
    min-width: `, `;
  }

  &.`, ` {
    direction: rtl;
    border-right-width: none;
    border-left-width: 1px;
    border-right-style: none;
    border-left-style: solid;
  }

  &.`, ` {
    position: fixed;
    height: 100%;
    top: 0px;
    z-index: 100;

    `, `

    &.`, ` {
      `, `
    }

    &.`, ` {
      `, `
    }

    &.`, ` {
      right: -`, `;

      &.`, ` {
        right: -`, `;
      }

      &.`, ` {
        right: 0;
      }
    }
  }

  `, `
`])), function(t7) {
  var e = t7.transitionDuration;
  return "width, left, right, ".concat(e, "ms");
}, function(t7) {
  var e = t7.width;
  return e;
}, function(t7) {
  var e = t7.width;
  return e;
}, ke.collapsed, function(t7) {
  var e = t7.collapsedWidth;
  return e;
}, function(t7) {
  var e = t7.collapsedWidth;
  return e;
}, ke.rtl, ke.broken, function(t7) {
  var e = t7.rtl, n = t7.width;
  return e ? "" : "left: -".concat(n, ";");
}, ke.collapsed, function(t7) {
  var e = t7.rtl, n = t7.collapsedWidth;
  return e ? "" : "left: -".concat(n, "; ");
}, ke.toggled, function(t7) {
  var e = t7.rtl;
  return e ? "" : "left: 0;";
}, ke.rtl, function(t7) {
  var e = t7.width;
  return e;
}, ke.collapsed, function(t7) {
  var e = t7.collapsedWidth;
  return e;
}, ke.toggled, function(t7) {
  var e = t7.rootStyles;
  return e;
}), Nv = ze.div(Fc || (Fc = Ge([`
  position: relative;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 3;

  `, `
`], [`
  position: relative;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 3;

  `, `
`])), function(t7) {
  var e = t7.backgroundColor;
  return e ? "background-color:".concat(e, ";") : "";
}), Rv = ze.img(zc || (zc = Ge([`
  &.`, ` {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }
`], [`
  &.`, ` {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }
`])), ke.image), Mi = H.createContext({
  collapsed: false,
  toggled: false,
  rtl: false,
  transitionDuration: 300
}); H.forwardRef(function(t7, e) {
  var n, r = t7.collapsed, o = t7.toggled, i = t7.onBackdropClick, s = t7.onBreakPoint, a = t7.width, l = a === void 0 ? "250px" : a, c = t7.collapsedWidth, d = c === void 0 ? "80px" : c, u = t7.defaultCollapsed, f = t7.className, h = t7.children, g = t7.breakPoint, p = t7.customBreakPoint, m = t7.backgroundColor, v = m === void 0 ? "rgb(249, 249, 249, 0.7)" : m, y = t7.transitionDuration, C = y === void 0 ? 300 : y, x = t7.image, w = t7.rtl, _ = t7.rootStyles, O = Rn(t7, ["collapsed", "toggled", "onBackdropClick", "onBreakPoint", "width", "collapsedWidth", "defaultCollapsed", "className", "children", "breakPoint", "customBreakPoint", "backgroundColor", "transitionDuration", "image", "rtl", "rootStyles"]), N = function() {
    if (p)
      return "(max-width: ".concat(p, ")");
    if (g)
      return ["xs", "sm", "md", "lg", "xl", "xxl"].includes(g) ? "(max-width: ".concat(Ov[g], ")") : g === "always" || g === "all" ? (g === "always" && console.warn('The "always" breakPoint is deprecated and will be removed in future release. Please use the "all" breakPoint instead.'), "screen") : "(max-width: ".concat(g, ")");
  }, T = H.useRef();
  T.current = function(F) {
    s == null || s(F);
  };
  var S = Sv(N()), A = H.useState(false), M = A[0], P = A[1], E = _v(), R = r ?? (!M && u ? true : E == null ? void 0 : E.collapsed), D = o ?? (E == null ? void 0 : E.toggled), L = function() {
    i == null || i(), E == null || E.updateSidebarState({ toggled: false });
  };
  return H.useEffect(function() {
    var F;
    (F = T.current) === null || F === void 0 || F.call(T, S);
  }, [S]), H.useEffect(function() {
    E == null || E.updateSidebarState({ broken: S, rtl: w, transitionDuration: C });
  }, [S, E == null ? void 0 : E.updateSidebarState, w, C]), H.useEffect(function() {
    M || (E == null || E.updateSidebarState({
      collapsed: u
    }), P(true));
  }, [u, M, E == null ? void 0 : E.updateSidebarState]), H.createElement(
    Mi.Provider,
    { value: { collapsed: R, toggled: D, rtl: w, transitionDuration: C } },
    H.createElement(
      Tv,
      lt({ ref: e, "data-testid": "".concat(ke.root, "-test-id"), rtl: w, rootStyles: _, width: l, collapsedWidth: d, transitionDuration: C, className: Pe(ke.root, (n = {}, n[ke.collapsed] = R, n[ke.toggled] = D, n[ke.broken] = S, n[ke.rtl] = w, n), f) }, O),
      H.createElement(Nv, { "data-testid": "".concat(ke.container, "-test-id"), className: ke.container, backgroundColor: v }, h),
      x && H.createElement(Rv, { "data-testid": "".concat(ke.image, "-test-id"), src: x, alt: "sidebar background", className: ke.image }),
      S && D && H.createElement(Ev, { "data-testid": "".concat(ke.backdrop, "-test-id"), role: "button", tabIndex: 0, "aria-label": "backdrop", onClick: L, onKeyPress: L, className: ke.backdrop })
    )
  );
}); var Lc, Fc, zc, Ku = ze.ul(Bc || (Bc = Ge([`
  list-style-type: none;
  padding: 0;
  margin: 0;
`], [`
  list-style-type: none;
  padding: 0;
  margin: 0;
`]))), Bc, Pv = ze.nav($c || ($c = Ge([`
  &.`, ` {
    `, `
  }
`], [`
  &.`, ` {
    `, `
  }
`])), le.root, function(t7) {
  var e = t7.rootStyles;
  return e;
}), qu = H.createContext(void 0), li = H.createContext(0), Av = function(t7, e) {
  var n = t7.children, r = t7.className, o = t7.transitionDuration, i = o === void 0 ? 300 : o, s = t7.closeOnClick, a = s === void 0 ? false : s, l = t7.rootStyles, c = t7.menuItemStyles, d = t7.renderExpandIcon, u = Rn(t7, ["children", "className", "transitionDuration", "closeOnClick", "rootStyles", "menuItemStyles", "renderExpandIcon"]), f = H.useMemo(function() {
    return { transitionDuration: i, closeOnClick: a, menuItemStyles: c, renderExpandIcon: d };
  }, [i, a, c, d]);
  return H.createElement(
    qu.Provider,
    { value: f },
    H.createElement(
      li.Provider,
      { value: 0 },
      H.createElement(
        Pv,
        lt({ ref: e, className: Pe(le.root, r), rootStyles: l }, u),
        H.createElement(Ku, null, n)
      )
    )
  );
}; H.forwardRef(Av); var $c, ha = function() {
  var t7 = H.useContext(qu);
  if (t7 === void 0)
    throw new Error("Menu Component is required!");
  return t7;
}, Iv = ze.div(jc || (jc = Ge([`
  height: 0px;
  overflow: hidden;
  z-index: 999;
  transition: height `, `ms;
  box-sizing: border-box;
  background-color: white;

  `, `

  `, `

  `, `;

  `, `;
`], [`
  height: 0px;
  overflow: hidden;
  z-index: 999;
  transition: height `, `ms;
  box-sizing: border-box;
  background-color: white;

  `, `

  `, `

  `, `;

  `, `;
`])), function(t7) {
  var e = t7.transitionDuration;
  return e;
}, function(t7) {
  var e = t7.firstLevel, n = t7.collapsed;
  return e && n && `
     background-color: white;
     box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
     `;
}, function(t7) {
  var e = t7.defaultOpen;
  return e && "height: auto;display: block;";
}, function(t7) {
  var e = t7.collapsed, n = t7.firstLevel, r = t7.openWhenCollapsed;
  return e && n ? `
      position: fixed;
      padding-left: 0px;
      width: 200px;
      border-radius: 4px;
      height: auto!important;
      display: block!important;     
      transition: none!important;     
      visibility: `.concat(r ? "visible" : "hidden", `;
     `) : `
      position: static!important;
      transform: none!important;
      `;
}, function(t7) {
  var e = t7.rootStyles;
  return e;
}), Lv = function(t7, e) {
  var n = t7.children, r = t7.open, o = t7.openWhenCollapsed, i = t7.firstLevel, s = t7.collapsed, a = t7.defaultOpen, l = Rn(t7, ["children", "open", "openWhenCollapsed", "firstLevel", "collapsed", "defaultOpen"]), c = ha().transitionDuration, d = H.useState(a)[0];
  return H.createElement(
    Iv,
    lt({ "data-testid": "".concat(le.subMenuContent, "-test-id"), ref: e, firstLevel: i, collapsed: s, open: r, openWhenCollapsed: o, transitionDuration: c, defaultOpen: d }, l),
    H.createElement(Ku, null, n)
  );
}, Fv = H.forwardRef(Lv), jc, Gu = ze.span(Hc || (Hc = Ge([`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  `, `;
`], [`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  `, `;
`])), function(t7) {
  var e = t7.rootStyles;
  return e;
}), Hc, Xu = ze.span(Wc || (Wc = Ge([`
  width: 35px;
  min-width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  display: inline-block;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  `, `

  `, `;
`], [`
  width: 35px;
  min-width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  display: inline-block;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  `, `

  `, `;
`])), function(t7) {
  var e = t7.rtl;
  return e ? "margin-left: 10px;" : "margin-right: 10px;";
}, function(t7) {
  var e = t7.rootStyles;
  return e;
}), Wc, Ju = ze.span(Vc || (Vc = Ge([`
  `, `
  opacity: `, `;
  transition: opacity `, `ms;

  `, `;
`], [`
  `, `
  opacity: `, `;
  transition: opacity `, `ms;

  `, `;
`])), function(t7) {
  var e = t7.rtl;
  return e ? "margin-left: 5px;" : "margin-right: 5px;";
}, function(t7) {
  var e = t7.firstLevel, n = t7.collapsed;
  return e && n ? "0" : "1";
}, function(t7) {
  var e = t7.transitionDuration;
  return e;
}, function(t7) {
  var e = t7.rootStyles;
  return e;
}), Vc, Zu = ze.span(Yc || (Yc = Ge([`
  margin-right: 5px;
  margin-left: 5px;
  opacity: `, `;
  transition: opacity `, `ms;

  `, `;
`], [`
  margin-right: 5px;
  margin-left: 5px;
  opacity: `, `;
  transition: opacity `, `ms;

  `, `;
`])), function(t7) {
  var e = t7.firstLevel, n = t7.collapsed;
  return e && n ? "0" : "1";
}, function(t7) {
  var e = t7.transitionDuration;
  return e;
}, function(t7) {
  var e = t7.rootStyles;
  return e;
}), Yc, zv = ze.span(Uc || (Uc = Ge([`
  `, `

  `, `;
`], [`
  `, `

  `, `;
`])), function(t7) {
  var e = t7.collapsed, n = t7.level, r = t7.rtl;
  return e && n === 0 && `
    position: absolute;
    `.concat(r ? "left: 10px;" : "right: 10px;", `
    top: 50%;
    transform: translateY(-50%);
    
    `);
}, function(t7) {
  var e = t7.rootStyles;
  return e;
}), Bv = ze.span(Kc || (Kc = Ge([`
  display: inline-block;
  transition: transform 0.3s;
  `, `

  width: 5px;
  height: 5px;
  transform: rotate(`, `);
`], [`
  display: inline-block;
  transition: transform 0.3s;
  `, `

  width: 5px;
  height: 5px;
  transform: rotate(`, `);
`])), function(t7) {
  var e = t7.rtl;
  return e ? `
          border-left: 2px solid currentcolor;
          border-top: 2px solid currentcolor;
        ` : ` border-right: 2px solid currentcolor;
          border-bottom: 2px solid currentcolor;
        `;
}, function(t7) {
  var e = t7.open, n = t7.rtl;
  return e ? n ? "-135deg" : "45deg" : "-45deg";
}), $v = ze.span(qc || (qc = Ge([`
  width: 5px;
  height: 5px;
  background-color: currentcolor;
  border-radius: 50%;
  display: inline-block;
`], [`
  width: 5px;
  height: 5px;
  background-color: currentcolor;
  border-radius: 50%;
  display: inline-block;
`]))), Uc, Kc, qc, tt = "top", gt = "bottom", pt = "right", nt = "left", Pi = "auto", no = [tt, gt, pt, nt], Zn = "start", qr = "end", jv = "clippingParents", Qu = "viewport", vr = "popper", Hv = "reference", Gc = /* @__PURE__ */ no.reduce(function(t7, e) {
  return t7.concat([e + "-" + Zn, e + "-" + qr]);
}, []), ef = /* @__PURE__ */ [].concat(no, [Pi]).reduce(function(t7, e) {
  return t7.concat([e, e + "-" + Zn, e + "-" + qr]);
}, []), Wv = "beforeRead", Vv = "read", Yv = "afterRead", Uv = "beforeMain", Kv = "main", qv = "afterMain", Gv = "beforeWrite", Xv = "write", Jv = "afterWrite", Ms = [Wv, Vv, Yv, Uv, Kv, qv, Gv, Xv, Jv];
function Lt(t7) {
  return t7 ? (t7.nodeName || "").toLowerCase() : null;
}
function bt(t7) {
  if (t7 == null)
    return window;
  if (t7.toString() !== "[object Window]") {
    var e = t7.ownerDocument;
    return e && e.defaultView || window;
  }
  return t7;
}
function Mn(t7) {
  var e = bt(t7).Element;
  return t7 instanceof e || t7 instanceof Element;
}
function dt(t7) {
  var e = bt(t7).HTMLElement;
  return t7 instanceof e || t7 instanceof HTMLElement;
}
function ga(t7) {
  if (typeof ShadowRoot > "u")
    return false;
  var e = bt(t7).ShadowRoot;
  return t7 instanceof e || t7 instanceof ShadowRoot;
}
function Zv(t7) {
  var e = t7.state;
  Object.keys(e.elements).forEach(function(n) {
    var r = e.styles[n] || {}, o = e.attributes[n] || {}, i = e.elements[n];
    !dt(i) || !Lt(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var a = o[s];
      a === false ? i.removeAttribute(s) : i.setAttribute(s, a === true ? "" : a);
    }));
  });
}
function Qv(t7) {
  var e = t7.state, n = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var o = e.elements[r], i = e.attributes[r] || {}, s = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), a = s.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !dt(o) || !Lt(o) || (Object.assign(o.style, a), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var ex = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: Zv,
  effect: Qv,
  requires: ["computeStyles"]
};
function wt(t7) {
  return t7.split("-")[0];
}
var Sn = Math.max, ci = Math.min, Qn = Math.round;
function Ps() {
  var t7 = navigator.userAgentData;
  return t7 != null && t7.brands ? t7.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function tf() {
  return !/^((?!chrome|android).)*safari/i.test(Ps());
}
function er(t7, e, n) {
  e === void 0 && (e = false), n === void 0 && (n = false);
  var r = t7.getBoundingClientRect(), o = 1, i = 1;
  e && dt(t7) && (o = t7.offsetWidth > 0 && Qn(r.width) / t7.offsetWidth || 1, i = t7.offsetHeight > 0 && Qn(r.height) / t7.offsetHeight || 1);
  var s = Mn(t7) ? bt(t7) : window, a = s.visualViewport, l = !tf() && n, c = (r.left + (l && a ? a.offsetLeft : 0)) / o, d = (r.top + (l && a ? a.offsetTop : 0)) / i, u = r.width / o, f = r.height / i;
  return {
    width: u,
    height: f,
    top: d,
    right: c + u,
    bottom: d + f,
    left: c,
    x: c,
    y: d
  };
}
function pa(t7) {
  var e = er(t7), n = t7.offsetWidth, r = t7.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: t7.offsetLeft,
    y: t7.offsetTop,
    width: n,
    height: r
  };
}
function nf(t7, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t7.contains(e))
    return true;
  if (n && ga(n)) {
    var r = e;
    do {
      if (r && t7.isSameNode(r))
        return true;
      r = r.parentNode || r.host;
    } while (r);
  }
  return false;
}
function Ct(t7) {
  return bt(t7).getComputedStyle(t7);
}
function tx(t7) {
  return ["table", "td", "th"].indexOf(Lt(t7)) >= 0;
}
function fn(t7) {
  return ((Mn(t7) ? t7.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t7.document
  )) || window.document).documentElement;
}
function Ai(t7) {
  return Lt(t7) === "html" ? t7 : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t7.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t7.parentNode || // DOM Element detected
    (ga(t7) ? t7.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    fn(t7)
  );
}
function Xc(t7) {
  return !dt(t7) || // https://github.com/popperjs/popper-core/issues/837
  Ct(t7).position === "fixed" ? null : t7.offsetParent;
}
function nx(t7) {
  var e = /firefox/i.test(Ps()), n = /Trident/i.test(Ps());
  if (n && dt(t7)) {
    var r = Ct(t7);
    if (r.position === "fixed")
      return null;
  }
  var o = Ai(t7);
  for (ga(o) && (o = o.host); dt(o) && ["html", "body"].indexOf(Lt(o)) < 0; ) {
    var i = Ct(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function ro(t7) {
  for (var e = bt(t7), n = Xc(t7); n && tx(n) && Ct(n).position === "static"; )
    n = Xc(n);
  return n && (Lt(n) === "html" || Lt(n) === "body" && Ct(n).position === "static") ? e : n || nx(t7) || e;
}
function ma(t7) {
  return ["top", "bottom"].indexOf(t7) >= 0 ? "x" : "y";
}
function Dr(t7, e, n) {
  return Sn(t7, ci(e, n));
}
function rx(t7, e, n) {
  var r = Dr(t7, e, n);
  return r > n ? n : r;
}
function rf() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function of(t7) {
  return Object.assign({}, rf(), t7);
}
function sf(t7, e) {
  return e.reduce(function(n, r) {
    return n[r] = t7, n;
  }, {});
}
var ox = function(e, n) {
  return e = typeof e == "function" ? e(Object.assign({}, n.rects, {
    placement: n.placement
  })) : e, of(typeof e != "number" ? e : sf(e, no));
};
function ix(t7) {
  var e, n = t7.state, r = t7.name, o = t7.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, a = wt(n.placement), l = ma(a), c = [nt, pt].indexOf(a) >= 0, d = c ? "height" : "width";
  if (!(!i || !s)) {
    var u = ox(o.padding, n), f = pa(i), h = l === "y" ? tt : nt, g = l === "y" ? gt : pt, p = n.rects.reference[d] + n.rects.reference[l] - s[l] - n.rects.popper[d], m = s[l] - n.rects.reference[l], v = ro(i), y = v ? l === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, C = p / 2 - m / 2, x = u[h], w = y - f[d] - u[g], _ = y / 2 - f[d] / 2 + C, O = Dr(x, _, w), N = l;
    n.modifiersData[r] = (e = {}, e[N] = O, e.centerOffset = O - _, e);
  }
}
function sx(t7) {
  var e = t7.state, n = t7.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  if (o != null && !(typeof o == "string" && (o = e.elements.popper.querySelector(o), !o))) {
    if (!nf(e.elements.popper, o)) {
      return;
    }
    e.elements.arrow = o;
  }
}
var ax = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: ix,
  effect: sx,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function tr(t7) {
  return t7.split("-")[1];
}
var lx = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function cx(t7) {
  var e = t7.x, n = t7.y, r = window, o = r.devicePixelRatio || 1;
  return {
    x: Qn(e * o) / o || 0,
    y: Qn(n * o) / o || 0
  };
}
function Jc(t7) {
  var e, n = t7.popper, r = t7.popperRect, o = t7.placement, i = t7.variation, s = t7.offsets, a = t7.position, l = t7.gpuAcceleration, c = t7.adaptive, d = t7.roundOffsets, u = t7.isFixed, f = s.x, h = f === void 0 ? 0 : f, g = s.y, p = g === void 0 ? 0 : g, m = typeof d == "function" ? d({
    x: h,
    y: p
  }) : {
    x: h,
    y: p
  };
  h = m.x, p = m.y;
  var v = s.hasOwnProperty("x"), y = s.hasOwnProperty("y"), C = nt, x = tt, w = window;
  if (c) {
    var _ = ro(n), O = "clientHeight", N = "clientWidth";
    if (_ === bt(n) && (_ = fn(n), Ct(_).position !== "static" && a === "absolute" && (O = "scrollHeight", N = "scrollWidth")), _ = _, o === tt || (o === nt || o === pt) && i === qr) {
      x = gt;
      var T = u && _ === w && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        _[O]
      );
      p -= T - r.height, p *= l ? 1 : -1;
    }
    if (o === nt || (o === tt || o === gt) && i === qr) {
      C = pt;
      var S = u && _ === w && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        _[N]
      );
      h -= S - r.width, h *= l ? 1 : -1;
    }
  }
  var A = Object.assign({
    position: a
  }, c && lx), M = d === true ? cx({
    x: h,
    y: p
  }) : {
    x: h,
    y: p
  };
  if (h = M.x, p = M.y, l) {
    var P;
    return Object.assign({}, A, (P = {}, P[x] = y ? "0" : "", P[C] = v ? "0" : "", P.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + p + "px)" : "translate3d(" + h + "px, " + p + "px, 0)", P));
  }
  return Object.assign({}, A, (e = {}, e[x] = y ? p + "px" : "", e[C] = v ? h + "px" : "", e.transform = "", e));
}
function dx(t7) {
  var e = t7.state, n = t7.options, r = n.gpuAcceleration, o = r === void 0 ? true : r, i = n.adaptive, s = i === void 0 ? true : i, a = n.roundOffsets, l = a === void 0 ? true : a;
  var d = {
    placement: wt(e.placement),
    variation: tr(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: o,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Jc(Object.assign({}, d, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Jc(Object.assign({}, d, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: l
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
var ux = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: dx,
  data: {}
}, Oo = {
  passive: true
};
function fx(t7) {
  var e = t7.state, n = t7.instance, r = t7.options, o = r.scroll, i = o === void 0 ? true : o, s = r.resize, a = s === void 0 ? true : s, l = bt(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return i && c.forEach(function(d) {
    d.addEventListener("scroll", n.update, Oo);
  }), a && l.addEventListener("resize", n.update, Oo), function() {
    i && c.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Oo);
    }), a && l.removeEventListener("resize", n.update, Oo);
  };
}
var hx = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: fx,
  data: {}
}, gx = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function $o(t7) {
  return t7.replace(/left|right|bottom|top/g, function(e) {
    return gx[e];
  });
}
var px = {
  start: "end",
  end: "start"
};
function Zc(t7) {
  return t7.replace(/start|end/g, function(e) {
    return px[e];
  });
}
function ba(t7) {
  var e = bt(t7), n = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function ya(t7) {
  return er(fn(t7)).left + ba(t7).scrollLeft;
}
function mx(t7, e) {
  var n = bt(t7), r = fn(t7), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    var c = tf();
    (c || !c && e === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a + ya(t7),
    y: l
  };
}
function bx(t7) {
  var e, n = fn(t7), r = ba(t7), o = (e = t7.ownerDocument) == null ? void 0 : e.body, i = Sn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Sn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -r.scrollLeft + ya(t7), l = -r.scrollTop;
  return Ct(o || n).direction === "rtl" && (a += Sn(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function va(t7) {
  var e = Ct(t7), n = e.overflow, r = e.overflowX, o = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function af(t7) {
  return ["html", "body", "#document"].indexOf(Lt(t7)) >= 0 ? t7.ownerDocument.body : dt(t7) && va(t7) ? t7 : af(Ai(t7));
}
function Ir(t7, e) {
  var n;
  e === void 0 && (e = []);
  var r = af(t7), o = r === ((n = t7.ownerDocument) == null ? void 0 : n.body), i = bt(r), s = o ? [i].concat(i.visualViewport || [], va(r) ? r : []) : r, a = e.concat(s);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Ir(Ai(s)))
  );
}
function As(t7) {
  return Object.assign({}, t7, {
    left: t7.x,
    top: t7.y,
    right: t7.x + t7.width,
    bottom: t7.y + t7.height
  });
}
function yx(t7, e) {
  var n = er(t7, false, e === "fixed");
  return n.top = n.top + t7.clientTop, n.left = n.left + t7.clientLeft, n.bottom = n.top + t7.clientHeight, n.right = n.left + t7.clientWidth, n.width = t7.clientWidth, n.height = t7.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Qc(t7, e, n) {
  return e === Qu ? As(mx(t7, n)) : Mn(e) ? yx(e, n) : As(bx(fn(t7)));
}
function vx(t7) {
  var e = Ir(Ai(t7)), n = ["absolute", "fixed"].indexOf(Ct(t7).position) >= 0, r = n && dt(t7) ? ro(t7) : t7;
  return Mn(r) ? e.filter(function(o) {
    return Mn(o) && nf(o, r) && Lt(o) !== "body";
  }) : [];
}
function xx(t7, e, n, r) {
  var o = e === "clippingParents" ? vx(t7) : [].concat(e), i = [].concat(o, [n]), s = i[0], a = i.reduce(function(l, c) {
    var d = Qc(t7, c, r);
    return l.top = Sn(d.top, l.top), l.right = ci(d.right, l.right), l.bottom = ci(d.bottom, l.bottom), l.left = Sn(d.left, l.left), l;
  }, Qc(t7, s, r));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function lf(t7) {
  var e = t7.reference, n = t7.element, r = t7.placement, o = r ? wt(r) : null, i = r ? tr(r) : null, s = e.x + e.width / 2 - n.width / 2, a = e.y + e.height / 2 - n.height / 2, l;
  switch (o) {
    case tt:
      l = {
        x: s,
        y: e.y - n.height
      };
      break;
    case gt:
      l = {
        x: s,
        y: e.y + e.height
      };
      break;
    case pt:
      l = {
        x: e.x + e.width,
        y: a
      };
      break;
    case nt:
      l = {
        x: e.x - n.width,
        y: a
      };
      break;
    default:
      l = {
        x: e.x,
        y: e.y
      };
  }
  var c = o ? ma(o) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (i) {
      case Zn:
        l[c] = l[c] - (e[d] / 2 - n[d] / 2);
        break;
      case qr:
        l[c] = l[c] + (e[d] / 2 - n[d] / 2);
        break;
    }
  }
  return l;
}
function Gr(t7, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, o = r === void 0 ? t7.placement : r, i = n.strategy, s = i === void 0 ? t7.strategy : i, a = n.boundary, l = a === void 0 ? jv : a, c = n.rootBoundary, d = c === void 0 ? Qu : c, u = n.elementContext, f = u === void 0 ? vr : u, h = n.altBoundary, g = h === void 0 ? false : h, p = n.padding, m = p === void 0 ? 0 : p, v = of(typeof m != "number" ? m : sf(m, no)), y = f === vr ? Hv : vr, C = t7.rects.popper, x = t7.elements[g ? y : f], w = xx(Mn(x) ? x : x.contextElement || fn(t7.elements.popper), l, d, s), _ = er(t7.elements.reference), O = lf({
    reference: _,
    element: C,
    placement: o
  }), N = As(Object.assign({}, C, O)), T = f === vr ? N : _, S = {
    top: w.top - T.top + v.top,
    bottom: T.bottom - w.bottom + v.bottom,
    left: w.left - T.left + v.left,
    right: T.right - w.right + v.right
  }, A = t7.modifiersData.offset;
  if (f === vr && A) {
    var M = A[o];
    Object.keys(S).forEach(function(P) {
      var E = [pt, gt].indexOf(P) >= 0 ? 1 : -1, R = [tt, gt].indexOf(P) >= 0 ? "y" : "x";
      S[P] += M[R] * E;
    });
  }
  return S;
}
function wx(t7, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? ef : l, d = tr(r), u = d ? a ? Gc : Gc.filter(function(g) {
    return tr(g) === d;
  }) : no, f = u.filter(function(g) {
    return c.indexOf(g) >= 0;
  });
  f.length === 0 && (f = u, false);
  var h = f.reduce(function(g, p) {
    return g[p] = Gr(t7, {
      placement: p,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[wt(p)], g;
  }, {});
  return Object.keys(h).sort(function(g, p) {
    return h[g] - h[p];
  });
}
function kx(t7) {
  if (wt(t7) === Pi)
    return [];
  var e = $o(t7);
  return [Zc(t7), e, Zc(e)];
}
function Cx(t7) {
  var e = t7.state, n = t7.options, r = t7.name;
  if (!e.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? true : o, s = n.altAxis, a = s === void 0 ? true : s, l = n.fallbackPlacements, c = n.padding, d = n.boundary, u = n.rootBoundary, f = n.altBoundary, h = n.flipVariations, g = h === void 0 ? true : h, p = n.allowedAutoPlacements, m = e.options.placement, v = wt(m), y = v === m, C = l || (y || !g ? [$o(m)] : kx(m)), x = [m].concat(C).reduce(function(K, q) {
      return K.concat(wt(q) === Pi ? wx(e, {
        placement: q,
        boundary: d,
        rootBoundary: u,
        padding: c,
        flipVariations: g,
        allowedAutoPlacements: p
      }) : q);
    }, []), w = e.rects.reference, _ = e.rects.popper, O = /* @__PURE__ */ new Map(), N = true, T = x[0], S = 0; S < x.length; S++) {
      var A = x[S], M = wt(A), P = tr(A) === Zn, E = [tt, gt].indexOf(M) >= 0, R = E ? "width" : "height", D = Gr(e, {
        placement: A,
        boundary: d,
        rootBoundary: u,
        altBoundary: f,
        padding: c
      }), L = E ? P ? pt : nt : P ? gt : tt;
      w[R] > _[R] && (L = $o(L));
      var F = $o(L), $ = [];
      if (i && $.push(D[M] <= 0), a && $.push(D[L] <= 0, D[F] <= 0), $.every(function(K) {
        return K;
      })) {
        T = A, N = false;
        break;
      }
      O.set(A, $);
    }
    if (N)
      for (var B = g ? 3 : 1, W = function(q) {
        var X = x.find(function(ce) {
          var J = O.get(ce);
          if (J)
            return J.slice(0, q).every(function(re) {
              return re;
            });
        });
        if (X)
          return T = X, "break";
      }, V = B; V > 0; V--) {
        var U = W(V);
        if (U === "break") break;
      }
    e.placement !== T && (e.modifiersData[r]._skip = true, e.placement = T, e.reset = true);
  }
}
var _x = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: Cx,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function ed(t7, e, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: t7.top - e.height - n.y,
    right: t7.right - e.width + n.x,
    bottom: t7.bottom - e.height + n.y,
    left: t7.left - e.width - n.x
  };
}
function td(t7) {
  return [tt, pt, gt, nt].some(function(e) {
    return t7[e] >= 0;
  });
}
function Sx(t7) {
  var e = t7.state, n = t7.name, r = e.rects.reference, o = e.rects.popper, i = e.modifiersData.preventOverflow, s = Gr(e, {
    elementContext: "reference"
  }), a = Gr(e, {
    altBoundary: true
  }), l = ed(s, r), c = ed(a, o, i), d = td(l), u = td(c);
  e.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: u
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": u
  });
}
var Ex = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Sx
};
function Ox(t7, e, n) {
  var r = wt(t7), o = [nt, tt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, e, {
    placement: t7
  })) : n, s = i[0], a = i[1];
  return s = s || 0, a = (a || 0) * o, [nt, pt].indexOf(r) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function Tx(t7) {
  var e = t7.state, n = t7.options, r = t7.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = ef.reduce(function(d, u) {
    return d[u] = Ox(u, e.rects, i), d;
  }, {}), a = s[e.placement], l = a.x, c = a.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[r] = s;
}
var Nx = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Tx
};
function Rx(t7) {
  var e = t7.state, n = t7.name;
  e.modifiersData[n] = lf({
    reference: e.rects.reference,
    element: e.rects.popper,
    placement: e.placement
  });
}
var Mx = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: Rx,
  data: {}
};
function Px(t7) {
  return t7 === "x" ? "y" : "x";
}
function Ax(t7) {
  var e = t7.state, n = t7.options, r = t7.name, o = n.mainAxis, i = o === void 0 ? true : o, s = n.altAxis, a = s === void 0 ? false : s, l = n.boundary, c = n.rootBoundary, d = n.altBoundary, u = n.padding, f = n.tether, h = f === void 0 ? true : f, g = n.tetherOffset, p = g === void 0 ? 0 : g, m = Gr(e, {
    boundary: l,
    rootBoundary: c,
    padding: u,
    altBoundary: d
  }), v = wt(e.placement), y = tr(e.placement), C = !y, x = ma(v), w = Px(x), _ = e.modifiersData.popperOffsets, O = e.rects.reference, N = e.rects.popper, T = typeof p == "function" ? p(Object.assign({}, e.rects, {
    placement: e.placement
  })) : p, S = typeof T == "number" ? {
    mainAxis: T,
    altAxis: T
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, T), A = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, M = {
    x: 0,
    y: 0
  };
  if (_) {
    if (i) {
      var P, E = x === "y" ? tt : nt, R = x === "y" ? gt : pt, D = x === "y" ? "height" : "width", L = _[x], F = L + m[E], $ = L - m[R], B = h ? -N[D] / 2 : 0, W = y === Zn ? O[D] : N[D], V = y === Zn ? -N[D] : -O[D], U = e.elements.arrow, K = h && U ? pa(U) : {
        width: 0,
        height: 0
      }, q = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : rf(), X = q[E], ce = q[R], J = Dr(0, O[D], K[D]), re = C ? O[D] / 2 - B - J - X - S.mainAxis : W - J - X - S.mainAxis, Ie = C ? -O[D] / 2 + B + J + ce + S.mainAxis : V + J + ce + S.mainAxis, Be = e.elements.arrow && ro(e.elements.arrow), Q = Be ? x === "y" ? Be.clientTop || 0 : Be.clientLeft || 0 : 0, Se = (P = A == null ? void 0 : A[x]) != null ? P : 0, se = L + re - Se - Q, ne = L + Ie - Se, fe = Dr(h ? ci(F, se) : F, L, h ? Sn($, ne) : $);
      _[x] = fe, M[x] = fe - L;
    }
    if (a) {
      var ee, Y = x === "x" ? tt : nt, Ee = x === "x" ? gt : pt, oe = _[w], Ce = w === "y" ? "height" : "width", Le = oe + m[Y], Re = oe - m[Ee], ut = [tt, nt].indexOf(v) !== -1, yt = (ee = A == null ? void 0 : A[w]) != null ? ee : 0, it = ut ? Le : oe - O[Ce] - N[Ce] - yt + S.altAxis, Zt = ut ? oe + O[Ce] + N[Ce] - yt - S.altAxis : Re, st = h && ut ? rx(it, oe, Zt) : Dr(h ? it : Le, oe, h ? Zt : Re);
      _[w] = st, M[w] = st - oe;
    }
    e.modifiersData[r] = M;
  }
}
var Dx = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: Ax,
  requiresIfExists: ["offset"]
};
function Ix(t7) {
  return {
    scrollLeft: t7.scrollLeft,
    scrollTop: t7.scrollTop
  };
}
function Lx(t7) {
  return t7 === bt(t7) || !dt(t7) ? ba(t7) : Ix(t7);
}
function Fx(t7) {
  var e = t7.getBoundingClientRect(), n = Qn(e.width) / t7.offsetWidth || 1, r = Qn(e.height) / t7.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function zx(t7, e, n) {
  n === void 0 && (n = false);
  var r = dt(e), o = dt(e) && Fx(e), i = fn(e), s = er(t7, o, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Lt(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  va(i)) && (a = Lx(e)), dt(e) ? (l = er(e, true), l.x += e.clientLeft, l.y += e.clientTop) : i && (l.x = ya(i))), {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Bx(t7) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  t7.forEach(function(i) {
    e.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(a) {
      if (!n.has(a)) {
        var l = e.get(a);
        l && o(l);
      }
    }), r.push(i);
  }
  return t7.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
function $x(t7) {
  var e = Bx(t7);
  return Ms.reduce(function(n, r) {
    return n.concat(e.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function jx(t7) {
  var e;
  return function() {
    return e || (e = new Promise(function(n) {
      Promise.resolve().then(function() {
        e = void 0, n(t7());
      });
    })), e;
  };
}
function Yx(t7) {
  var e = t7.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}
var od = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function id() {
  for (var t7 = arguments.length, e = new Array(t7), n = 0; n < t7; n++)
    e[n] = arguments[n];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Kx(t7) {
  t7 === void 0 && (t7 = {});
  var e = t7, n = e.defaultModifiers, r = n === void 0 ? [] : n, o = e.defaultOptions, i = o === void 0 ? od : o;
  return function(a, l, c) {
    c === void 0 && (c = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, od, i),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, u = [], f = false, h = {
      state: d,
      setOptions: function(v) {
        var y = typeof v == "function" ? v(d.options) : v;
        p(), d.options = Object.assign({}, i, d.options, y), d.scrollParents = {
          reference: Mn(a) ? Ir(a) : a.contextElement ? Ir(a.contextElement) : [],
          popper: Ir(l)
        };
        var C = $x(Yx([].concat(r, d.options.modifiers)));
        if (d.orderedModifiers = C.filter(function(A) {
          return A.enabled;
        }), false) ;
        return g(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var v = d.elements, y = v.reference, C = v.popper;
          if (!id(y, C)) {
            return;
          }
          d.rects = {
            reference: zx(y, ro(C), d.options.strategy === "fixed"),
            popper: pa(C)
          }, d.reset = false, d.placement = d.options.placement, d.orderedModifiers.forEach(function(A) {
            return d.modifiersData[A.name] = Object.assign({}, A.data);
          });
          for (var x = 0, w = 0; w < d.orderedModifiers.length; w++) {
            if (d.reset === true) {
              d.reset = false, w = -1;
              continue;
            }
            var _ = d.orderedModifiers[w], O = _.fn, N = _.options, T = N === void 0 ? {} : N, S = _.name;
            typeof O == "function" && (d = O({
              state: d,
              options: T,
              name: S,
              instance: h
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: jx(function() {
        return new Promise(function(m) {
          h.forceUpdate(), m(d);
        });
      }),
      destroy: function() {
        p(), f = true;
      }
    };
    if (!id(a, l))
      return h;
    h.setOptions(c).then(function(m) {
      !f && c.onFirstUpdate && c.onFirstUpdate(m);
    });
    function g() {
      d.orderedModifiers.forEach(function(m) {
        var v = m.name, y = m.options, C = y === void 0 ? {} : y, x = m.effect;
        if (typeof x == "function") {
          var w = x({
            state: d,
            name: v,
            instance: h,
            options: C
          }), _ = function() {
          };
          u.push(w || _);
        }
      });
    }
    function p() {
      u.forEach(function(m) {
        return m();
      }), u = [];
    }
    return h;
  };
}
var qx = [hx, Mx, ux, ex, Nx, _x, Dx, ax, Ex], Gx = /* @__PURE__ */ Kx({
  defaultModifiers: qx
}), Xx = function(t7) {
  var e = t7.level, n = t7.buttonRef, r = t7.contentRef, o = H.useContext(Mi), i = o.collapsed, s = o.toggled, a = o.transitionDuration, l = H.useRef();
  return H.useEffect(function() {
    return e === 0 && i && r.current && n.current && (l.current = Gx(n.current, r.current, {
      placement: "right",
      strategy: "fixed",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 5]
          }
        }
      ]
    })), function() {
      var c;
      return (c = l.current) === null || c === void 0 ? void 0 : c.destroy();
    };
  }, [e, i, r, n]), H.useEffect(function() {
    if (r.current && n.current) {
      var c = new ResizeObserver(function() {
        var d;
        (d = l.current) === null || d === void 0 || d.update();
      });
      c.observe(r.current), c.observe(n.current);
    }
    setTimeout(function() {
      var d;
      (d = l.current) === null || d === void 0 || d.update();
    }, a);
  }, [a, s, r, n]), { popperInstance: l.current };
}, cf = function(t7) {
  var e = t7.rtl, n = t7.level, r = t7.collapsed, o = t7.disabled, i = t7.active;
  return `
    display: flex;
    align-items: center;
    height: 50px;
    text-decoration: none;
    color: inherit;
    box-sizing: border-box;
    cursor: pointer;

    `.concat(e ? `padding-left: 20px;
           padding-right: `.concat(n === 0 ? 20 : (r ? n : n + 1) * 20, `px;
            `) : `padding-right: 20px;
           padding-left: `.concat(n === 0 ? 20 : (r ? n : n + 1) * 20, `px;
           `), `

    &:hover {
      background-color: #f3f3f3;
    }

    `).concat(o && ` 
      pointer-events: none;
      cursor: default;
      color:#adadad;
        `, `

    `).concat(i && "background-color: #e2eef9;", `
  
  `);
}, Jx = function(t7, e) {
  var n = t7.className, r = t7.component, o = t7.children, i = Rn(t7, ["className", "component", "children"]);
  if (r) {
    if (typeof r == "string")
      return H.createElement(r, lt(lt({ className: Pe(n) }, i), { ref: e }), o);
    var s = r.props, a = s.className, l = Rn(s, ["className"]);
    return H.cloneElement(r, lt(lt(lt({ className: Pe(n, a) }, i), l), { ref: e }), o);
  } else
    return H.createElement("a", lt({ ref: e, className: Pe(n) }, i), o);
}, df = H.forwardRef(Jx), Zx = ze.li(sd || (sd = Ge([`
  position: relative;
  width: 100%;

  `, `;

  `, `;

  > .`, ` {
    `, `;

    `, `;
  }
`], [`
  position: relative;
  width: 100%;

  `, `;

  `, `;

  > .`, ` {
    `, `;

    `, `;
  }
`])), function(t7) {
  var e = t7.menuItemStyles;
  return e;
}, function(t7) {
  var e = t7.rootStyles;
  return e;
}, le.button, function(t7) {
  var e = t7.level, n = t7.disabled, r = t7.active, o = t7.collapsed, i = t7.rtl;
  return cf({
    level: e,
    disabled: n,
    active: r,
    collapsed: o,
    rtl: i
  });
}, function(t7) {
  var e = t7.buttonStyles;
  return e;
}), Qx = function(t7, e) {
  var n, r = t7.children, o = t7.className, i = t7.label, s = t7.icon, a = t7.title, l = t7.prefix, c = t7.suffix, d = t7.open, u = t7.defaultOpen, f = t7.active, h = f === void 0 ? false : f, g = t7.disabled, p = g === void 0 ? false : g, m = t7.rootStyles, v = t7.component, y = t7.onOpenChange, C = t7.onClick, x = t7.onKeyUp, w = Rn(t7, ["children", "className", "label", "icon", "title", "prefix", "suffix", "open", "defaultOpen", "active", "disabled", "rootStyles", "component", "onOpenChange", "onClick", "onKeyUp"]), _ = H.useContext(li), O = H.useContext(Mi), N = O.collapsed, T = O.rtl, S = O.transitionDuration, A = ha(), M = A.renderExpandIcon, P = A.closeOnClick, E = A.menuItemStyles, R = A.transitionDuration, D = H.useState(!!u), L = D[0], F = D[1], $ = H.useState(false), B = $[0], W = $[1], V = H.useState(false), U = V[0], K = V[1], q = H.useRef(null), X = H.useRef(null), ce = H.useRef(), J = Xx({
    level: _,
    buttonRef: q,
    contentRef: X
  }).popperInstance, re = H.useCallback(function() {
    var fe, ee = X.current;
    if (ee) {
      var Y = (fe = ee == null ? void 0 : ee.querySelector(".".concat(le.subMenuContent, " > ul"))) === null || fe === void 0 ? void 0 : fe.clientHeight;
      ee.style.overflow = "hidden", ee.style.height = "".concat(Y, "px"), ce.current = setTimeout(function() {
        ee.style.overflow = "auto", ee.style.height = "auto";
      }, R);
    }
  }, [R]), Ie = function() {
    var fe, ee = X.current;
    if (ee) {
      var Y = (fe = ee == null ? void 0 : ee.querySelector(".".concat(le.subMenuContent, " > ul"))) === null || fe === void 0 ? void 0 : fe.clientHeight;
      ee.style.overflow = "hidden", ee.style.height = "".concat(Y, "px"), ee.offsetHeight, ee.style.height = "0px";
    }
  }, Be = function() {
    _ === 0 && N || (typeof d > "u" ? (clearTimeout(Number(ce.current)), L ? Ie() : re(), y == null || y(!L), F(!L)) : y == null || y(!d));
  };
  H.useEffect(function() {
    !(_ === 0 && N) && typeof d < "u" && U && (clearTimeout(Number(ce.current)), d ? re() : Ie());
  }, [N, re, i, _, y, d]);
  var Q = function(fe) {
    C == null || C(fe), Be();
  }, Se = function(fe) {
    x == null || x(fe), fe.key === "Enter" && Be();
  }, se = function(fe) {
    if (E) {
      var ee = { level: _, disabled: p, active: h, isSubmenu: true, open: d ?? L }, Y = E.root, Ee = E.button, oe = E.label, Ce = E.icon, Le = E.prefix, Re = E.suffix, ut = E.subMenuContent, yt = E.SubMenuExpandIcon;
      switch (fe) {
        case "root":
          return typeof Y == "function" ? Y(ee) : Y;
        case "button":
          return typeof Ee == "function" ? Ee(ee) : Ee;
        case "label":
          return typeof oe == "function" ? oe(ee) : oe;
        case "icon":
          return typeof Ce == "function" ? Ce(ee) : Ce;
        case "prefix":
          return typeof Le == "function" ? Le(ee) : Le;
        case "suffix":
          return typeof Re == "function" ? Re(ee) : Re;
        case "SubMenuExpandIcon":
          return typeof yt == "function" ? yt(ee) : yt;
        case "subMenuContent":
          return typeof ut == "function" ? ut(ee) : ut;
        default:
          return;
      }
    }
  };
  H.useEffect(function() {
    setTimeout(function() {
      return J == null ? void 0 : J.update();
    }, S), N && _ === 0 && W(false);
  }, [N, _, T, S, J]), H.useEffect(function() {
    var fe = function(oe) {
      var Ce, Le, Re;
      !B && (!((Ce = q.current) === null || Ce === void 0) && Ce.contains(oe)) ? W(true) : (P && !(!((Le = oe.closest(".".concat(le.menuItemRoot))) === null || Le === void 0) && Le.classList.contains(le.subMenuRoot)) || !(!((Re = X.current) === null || Re === void 0) && Re.contains(oe)) && B) && W(false);
    }, ee = function(oe) {
      fe(oe.target);
    }, Y = function(oe) {
      oe.key === "Enter" ? fe(oe.target) : oe.key === "Escape" && W(false);
    }, Ee = function() {
      document.removeEventListener("click", ee), document.removeEventListener("keyup", Y);
    };
    return Ee(), N && _ === 0 && (document.addEventListener("click", ee, false), document.addEventListener("keyup", Y, false)), function() {
      Ee();
    };
  }, [N, _, P, B]), H.useEffect(function() {
    K(true);
  }, []);
  var ne = (n = {}, n[le.active] = h, n[le.disabled] = p, n[le.open] = d ?? L, n);
  return H.createElement(
    Zx,
    { ref: e, className: Pe(le.menuItemRoot, le.subMenuRoot, ne, o), menuItemStyles: se("root"), level: _, collapsed: N, rtl: T, disabled: p, active: h, buttonStyles: se("button"), rootStyles: m },
    H.createElement(
      df,
      lt({ "data-testid": "".concat(le.button, "-test-id"), ref: q, title: a, className: Pe(le.button, ne), onClick: Q, onKeyUp: Se, component: v, tabIndex: 0 }, w),
      s && H.createElement(Xu, { rtl: T, className: Pe(le.icon, ne), rootStyles: se("icon") }, s),
      l && H.createElement(Ju, { collapsed: N, transitionDuration: S, firstLevel: _ === 0, className: Pe(le.prefix, ne), rtl: T, rootStyles: se("prefix") }, l),
      H.createElement(Gu, { className: Pe(le.label, ne), rootStyles: se("label") }, i),
      c && H.createElement(Zu, { collapsed: N, transitionDuration: S, firstLevel: _ === 0, className: Pe(le.suffix, ne), rootStyles: se("suffix") }, c),
      H.createElement(zv, { rtl: T, className: Pe(le.SubMenuExpandIcon, ne), collapsed: N, level: _, rootStyles: se("SubMenuExpandIcon") }, M ? M({
        level: _,
        disabled: p,
        active: h,
        open: d ?? L
      }) : N && _ === 0 ? H.createElement($v, null) : H.createElement(Bv, { rtl: T, open: d ?? L }))
    ),
    H.createElement(
      Fv,
      { ref: X, openWhenCollapsed: B, open: d ?? L, firstLevel: _ === 0, collapsed: N, defaultOpen: d && !U || u, className: Pe(le.subMenuContent, ne), rootStyles: se("subMenuContent") },
      H.createElement(li.Provider, { value: _ + 1 }, r)
    )
  );
};
H.forwardRef(Qx);
var sd, ew = ze.li(ad || (ad = Ge([`
  width: 100%;
  position: relative;

  `, `;

  `, `;

  > .`, ` {
    `, `;

    `, `;
  }
`], [`
  width: 100%;
  position: relative;

  `, `;

  `, `;

  > .`, ` {
    `, `;

    `, `;
  }
`])), function(t7) {
  var e = t7.menuItemStyles;
  return e;
}, function(t7) {
  var e = t7.rootStyles;
  return e;
}, le.button, function(t7) {
  var e = t7.level, n = t7.disabled, r = t7.active, o = t7.collapsed, i = t7.rtl;
  return cf({
    level: e,
    disabled: n,
    active: r,
    collapsed: o,
    rtl: i
  });
}, function(t7) {
  var e = t7.buttonStyles;
  return e;
}), tw = function(t7, e) {
  var n, r = t7.children, o = t7.icon, i = t7.className, s = t7.prefix, a = t7.suffix, l = t7.active, c = l === void 0 ? false : l, d = t7.disabled, u = d === void 0 ? false : d, f = t7.component, h = t7.rootStyles, g = Rn(t7, ["children", "icon", "className", "prefix", "suffix", "active", "disabled", "component", "rootStyles"]), p = H.useContext(li), m = H.useContext(Mi), v = m.collapsed, y = m.rtl, C = m.transitionDuration, x = ha().menuItemStyles, w = function(O) {
    if (x) {
      var N = { level: p, disabled: u, active: c, isSubmenu: false }, T = x.root, S = x.button, A = x.label, M = x.icon, P = x.prefix, E = x.suffix;
      switch (O) {
        case "root":
          return typeof T == "function" ? T(N) : T;
        case "button":
          return typeof S == "function" ? S(N) : S;
        case "label":
          return typeof A == "function" ? A(N) : A;
        case "icon":
          return typeof M == "function" ? M(N) : M;
        case "prefix":
          return typeof P == "function" ? P(N) : P;
        case "suffix":
          return typeof E == "function" ? E(N) : E;
        default:
          return;
      }
    }
  }, _ = (n = {}, n[le.active] = c, n[le.disabled] = u, n);
  return H.createElement(
    ew,
    { ref: e, className: Pe(le.menuItemRoot, _, i), menuItemStyles: w("root"), level: p, collapsed: v, rtl: y, disabled: u, active: c, buttonStyles: w("button"), rootStyles: h },
    H.createElement(
      df,
      lt({ className: Pe(le.button, _), "data-testid": "".concat(le.button, "-test-id"), component: f, tabIndex: 0 }, g),
      o && H.createElement(Xu, { rtl: y, className: Pe(le.icon, _), rootStyles: w("icon") }, o),
      s && H.createElement(Ju, { collapsed: v, transitionDuration: C, firstLevel: p === 0, className: Pe(le.prefix, _), rtl: y, rootStyles: w("prefix") }, s),
      H.createElement(Gu, { className: Pe(le.label, _), rootStyles: w("label") }, r),
      a && H.createElement(Zu, { collapsed: v, transitionDuration: C, firstLevel: p === 0, className: Pe(le.suffix, _), rootStyles: w("suffix") }, a)
    )
  );
}; H.forwardRef(tw); var ad;
const nw = "card-module__cardFormat__LNrgl", rw = {
  cardFormat: nw
}, Ds = ue(
  (t7, e) => {
    const { image: n, icon: r, title: o, description: i } = t7;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${rw.cardFormat} border px-3.5 py-7`, ref: e, children: [
      (n == null ? void 0 : n.type) === "image" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Tn,
        {
          classIm: "mx-auto",
          src: `../../../../public/assets/images/${n.name}.svg`,
          alt: n.name,
          width: 74,
          height: 74
        }
      ) : r ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(r, { size: 74 }) }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "my-3 font-bold", children: o }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: i })
    ] });
  }
);
Ds.displayName = "CardFormat";
function uf(t7) {
  return t7 && t7.__esModule && Object.prototype.hasOwnProperty.call(t7, "default") ? t7.default : t7;
}
var xa = {};
Object.defineProperty(xa, "__esModule", { value: true });
xa.parse = gw;
xa.serialize = pw;
const lw = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, cw = /^[\u0021-\u003A\u003C-\u007E]*$/, dw = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, uw = /^[\u0020-\u003A\u003D-\u007E]*$/, fw = Object.prototype.toString, hw = /* @__PURE__ */ (() => {
  const t7 = function() {
  };
  return t7.prototype = /* @__PURE__ */ Object.create(null), t7;
})();
function gw(t7, e) {
  const n = new hw(), r = t7.length;
  if (r < 2)
    return n;
  const o = (e == null ? void 0 : e.decode) || mw;
  let i = 0;
  do {
    const s = t7.indexOf("=", i);
    if (s === -1)
      break;
    const a = t7.indexOf(";", i), l = a === -1 ? r : a;
    if (s > l) {
      i = t7.lastIndexOf(";", s - 1) + 1;
      continue;
    }
    const c = ld(t7, i, s), d = cd(t7, s, c), u = t7.slice(c, d);
    if (n[u] === void 0) {
      let f = ld(t7, s + 1, l), h = cd(t7, l, f);
      const g = o(t7.slice(f, h));
      n[u] = g;
    }
    i = l + 1;
  } while (i < r);
  return n;
}
function ld(t7, e, n) {
  do {
    const r = t7.charCodeAt(e);
    if (r !== 32 && r !== 9)
      return e;
  } while (++e < n);
  return n;
}
function cd(t7, e, n) {
  for (; e > n; ) {
    const r = t7.charCodeAt(--e);
    if (r !== 32 && r !== 9)
      return e + 1;
  }
  return n;
}
function pw(t7, e, n) {
  const r = (n == null ? void 0 : n.encode) || encodeURIComponent;
  if (!lw.test(t7))
    throw new TypeError(`argument name is invalid: ${t7}`);
  const o = r(e);
  if (!cw.test(o))
    throw new TypeError(`argument val is invalid: ${e}`);
  let i = t7 + "=" + o;
  if (!n)
    return i;
  if (n.maxAge !== void 0) {
    if (!Number.isInteger(n.maxAge))
      throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
    i += "; Max-Age=" + n.maxAge;
  }
  if (n.domain) {
    if (!dw.test(n.domain))
      throw new TypeError(`option domain is invalid: ${n.domain}`);
    i += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!uw.test(n.path))
      throw new TypeError(`option path is invalid: ${n.path}`);
    i += "; Path=" + n.path;
  }
  if (n.expires) {
    if (!bw(n.expires) || !Number.isFinite(n.expires.valueOf()))
      throw new TypeError(`option expires is invalid: ${n.expires}`);
    i += "; Expires=" + n.expires.toUTCString();
  }
  if (n.httpOnly && (i += "; HttpOnly"), n.secure && (i += "; Secure"), n.partitioned && (i += "; Partitioned"), n.priority)
    switch (typeof n.priority == "string" ? n.priority.toLowerCase() : void 0) {
      case "low":
        i += "; Priority=Low";
        break;
      case "medium":
        i += "; Priority=Medium";
        break;
      case "high":
        i += "; Priority=High";
        break;
      default:
        throw new TypeError(`option priority is invalid: ${n.priority}`);
    }
  if (n.sameSite)
    switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
      case true:
      case "strict":
        i += "; SameSite=Strict";
        break;
      case "lax":
        i += "; SameSite=Lax";
        break;
      case "none":
        i += "; SameSite=None";
        break;
      default:
        throw new TypeError(`option sameSite is invalid: ${n.sameSite}`);
    }
  return i;
}
function mw(t7) {
  if (t7.indexOf("%") === -1)
    return t7;
  try {
    return decodeURIComponent(t7);
  } catch {
    return t7;
  }
}
function bw(t7) {
  return fw.call(t7) === "[object Date]";
}
/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function We(t7, e) {
  if (t7 === false || t7 === null || typeof t7 > "u")
    throw new Error(e);
}
function Kt(t7, e) {
  if (!t7) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {
    }
  }
}
function Is({
  pathname: t7 = "/",
  search: e = "",
  hash: n = ""
}) {
  return e && e !== "?" && (t7 += e.charAt(0) === "?" ? e : "?" + e), n && n !== "#" && (t7 += n.charAt(0) === "#" ? n : "#" + n), t7;
}
function wa(t7) {
  let e = {};
  if (t7) {
    let n = t7.indexOf("#");
    n >= 0 && (e.hash = t7.substring(n), t7 = t7.substring(0, n));
    let r = t7.indexOf("?");
    r >= 0 && (e.search = t7.substring(r), t7 = t7.substring(0, r)), t7 && (e.pathname = t7);
  }
  return e;
}
function ff(t7, e, n = "/") {
  return yw(t7, e, n, false);
}
function yw(t7, e, n, r) {
  let o = typeof e == "string" ? wa(e) : e, i = dn(o.pathname || "/", n);
  if (i == null)
    return null;
  let s = hf(t7);
  vw(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let c = Rw(i);
    a = Tw(
      s[l],
      c,
      r
    );
  }
  return a;
}
function hf(t7, e = [], n = [], r = "") {
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === true,
      childrenIndex: s,
      route: i
    };
    l.relativePath.startsWith("/") && (We(
      l.relativePath.startsWith(r),
      `Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), l.relativePath = l.relativePath.slice(r.length));
    let c = Vt([r, l.relativePath]), d = n.concat(l);
    i.children && i.children.length > 0 && (We(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      i.index !== true,
      `Index routes must not have child routes. Please remove all child routes from route path "${c}".`
    ), hf(i.children, e, d, c)), !(i.path == null && !i.index) && e.push({
      path: c,
      score: Ew(c, i.index),
      routesMeta: d
    });
  };
  return t7.forEach((i, s) => {
    var a;
    if (i.path === "" || !((a = i.path) != null && a.includes("?")))
      o(i, s);
    else
      for (let l of gf(i.path))
        o(i, s, l);
  }), e;
}
function gf(t7) {
  let e = t7.split("/");
  if (e.length === 0) return [];
  let [n, ...r] = e, o = n.endsWith("?"), i = n.replace(/\?$/, "");
  if (r.length === 0)
    return o ? [i, ""] : [i];
  let s = gf(r.join("/")), a = [];
  return a.push(
    ...s.map(
      (l) => l === "" ? i : [i, l].join("/")
    )
  ), o && a.push(...s), a.map(
    (l) => t7.startsWith("/") && l === "" ? "/" : l
  );
}
function vw(t7) {
  t7.sort(
    (e, n) => e.score !== n.score ? n.score - e.score : Ow(
      e.routesMeta.map((r) => r.childrenIndex),
      n.routesMeta.map((r) => r.childrenIndex)
    )
  );
}
var xw = /^:[\w-]+$/, ww = 3, kw = 2, Cw = 1, _w = 10, Sw = -2, dd = (t7) => t7 === "*";
function Ew(t7, e) {
  let n = t7.split("/"), r = n.length;
  return n.some(dd) && (r += Sw), e && (r += kw), n.filter((o) => !dd(o)).reduce(
    (o, i) => o + (xw.test(i) ? ww : i === "" ? Cw : _w),
    r
  );
}
function Ow(t7, e) {
  return t7.length === e.length && t7.slice(0, -1).every((r, o) => r === e[o]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    t7[t7.length - 1] - e[e.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Tw(t7, e, n = false) {
  let { routesMeta: r } = t7, o = {}, i = "/", s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a], c = a === r.length - 1, d = i === "/" ? e : e.slice(i.length) || "/", u = di(
      { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
      d
    ), f = l.route;
    if (!u && c && n && !r[r.length - 1].route.index && (u = di(
      {
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: false
      },
      d
    )), !u)
      return null;
    Object.assign(o, u.params), s.push({
      // TODO: Can this as be avoided?
      params: o,
      pathname: Vt([i, u.pathname]),
      pathnameBase: Dw(
        Vt([i, u.pathnameBase])
      ),
      route: f
    }), u.pathnameBase !== "/" && (i = Vt([i, u.pathnameBase]));
  }
  return s;
}
function di(t7, e) {
  typeof t7 == "string" && (t7 = { path: t7, caseSensitive: false, end: true });
  let [n, r] = Nw(
    t7.path,
    t7.caseSensitive,
    t7.end
  ), o = e.match(n);
  if (!o) return null;
  let i = o[0], s = i.replace(/(.)\/+$/, "$1"), a = o.slice(1);
  return {
    params: r.reduce(
      (c, { paramName: d, isOptional: u }, f) => {
        if (d === "*") {
          let g = a[f] || "";
          s = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
        }
        const h = a[f];
        return u && !h ? c[d] = void 0 : c[d] = (h || "").replace(/%2F/g, "/"), c;
      },
      {}
    ),
    pathname: i,
    pathnameBase: s,
    pattern: t7
  };
}
function Nw(t7, e = false, n = true) {
  Kt(
    t7 === "*" || !t7.endsWith("*") || t7.endsWith("/*"),
    `Route path "${t7}" will be treated as if it were "${t7.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t7.replace(/\*$/, "/*")}".`
  );
  let r = [], o = "^" + t7.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (s, a, l) => (r.push({ paramName: a, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return t7.endsWith("*") ? (r.push({ paramName: "*" }), o += t7 === "*" || t7 === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : t7 !== "" && t7 !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, e ? void 0 : "i"), r];
}
function Rw(t7) {
  try {
    return t7.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
  } catch (e) {
    return Kt(
      false,
      `The URL path "${t7}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`
    ), t7;
  }
}
function dn(t7, e) {
  if (e === "/") return t7;
  if (!t7.toLowerCase().startsWith(e.toLowerCase()))
    return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length, r = t7.charAt(n);
  return r && r !== "/" ? null : t7.slice(n) || "/";
}
function Mw(t7, e = "/") {
  let {
    pathname: n,
    search: r = "",
    hash: o = ""
  } = typeof t7 == "string" ? wa(t7) : t7;
  return {
    pathname: n ? n.startsWith("/") ? n : Pw(n, e) : e,
    search: Iw(r),
    hash: Lw(o)
  };
}
function Pw(t7, e) {
  let n = e.replace(/\/+$/, "").split("/");
  return t7.split("/").forEach((o) => {
    o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
  }), n.length > 1 ? n.join("/") : "/";
}
function ss(t7, e, n, r) {
  return `Cannot include a '${t7}' character in a manually specified \`to.${e}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Aw(t7) {
  return t7.filter(
    (e, n) => n === 0 || e.route.path && e.route.path.length > 0
  );
}
function pf(t7) {
  let e = Aw(t7);
  return e.map(
    (n, r) => r === e.length - 1 ? n.pathname : n.pathnameBase
  );
}
function mf(t7, e, n, r = false) {
  let o;
  typeof t7 == "string" ? o = wa(t7) : (o = { ...t7 }, We(
    !o.pathname || !o.pathname.includes("?"),
    ss("?", "pathname", "search", o)
  ), We(
    !o.pathname || !o.pathname.includes("#"),
    ss("#", "pathname", "hash", o)
  ), We(
    !o.search || !o.search.includes("#"),
    ss("#", "search", "hash", o)
  ));
  let i = t7 === "" || o.pathname === "", s = i ? "/" : o.pathname, a;
  if (s == null)
    a = n;
  else {
    let u = e.length - 1;
    if (!r && s.startsWith("..")) {
      let f = s.split("/");
      for (; f[0] === ".."; )
        f.shift(), u -= 1;
      o.pathname = f.join("/");
    }
    a = u >= 0 ? e[u] : "/";
  }
  let l = Mw(o, a), c = s && s !== "/" && s.endsWith("/"), d = (i || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (c || d) && (l.pathname += "/"), l;
}
var Vt = (t7) => t7.join("/").replace(/\/\/+/g, "/"), Dw = (t7) => t7.replace(/\/+$/, "").replace(/^\/*/, "/"), Iw = (t7) => !t7 || t7 === "?" ? "" : t7.startsWith("?") ? t7 : "?" + t7, Lw = (t7) => !t7 || t7 === "#" ? "" : t7.startsWith("#") ? t7 : "#" + t7;
function Fw(t7) {
  return t7 != null && typeof t7.status == "number" && typeof t7.statusText == "string" && typeof t7.internal == "boolean" && "data" in t7;
}
var bf = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  bf
);
var zw = [
  "GET",
  ...bf
];
new Set(zw);
var ar = k.createContext(null);
ar.displayName = "DataRouter";
var Di = k.createContext(null);
Di.displayName = "DataRouterState";
var yf = k.createContext({
  isTransitioning: false
});
yf.displayName = "ViewTransition";
var Bw = k.createContext(
  /* @__PURE__ */ new Map()
);
Bw.displayName = "Fetchers";
var $w = k.createContext(null);
$w.displayName = "Await";
var Xt = k.createContext(
  null
);
Xt.displayName = "Navigation";
var ka = k.createContext(
  null
);
ka.displayName = "Location";
var Jt = k.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
Jt.displayName = "Route";
var Ca = k.createContext(null);
Ca.displayName = "RouteError";
function jw(t7, { relative: e } = {}) {
  We(
    Ii(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: n, navigator: r } = k.useContext(Xt), { hash: o, pathname: i, search: s } = oo(t7, { relative: e }), a = i;
  return n !== "/" && (a = i === "/" ? n : Vt([n, i])), r.createHref({ pathname: a, search: s, hash: o });
}
function Ii() {
  return k.useContext(ka) != null;
}
function In() {
  return We(
    Ii(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), k.useContext(ka).location;
}
var vf = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function xf(t7) {
  k.useContext(Xt).static || k.useLayoutEffect(t7);
}
function Hw() {
  let { isDataRoute: t7 } = k.useContext(Jt);
  return t7 ? t1() : Ww();
}
function Ww() {
  We(
    Ii(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let t7 = k.useContext(ar), { basename: e, navigator: n } = k.useContext(Xt), { matches: r } = k.useContext(Jt), { pathname: o } = In(), i = JSON.stringify(pf(r)), s = k.useRef(false);
  return xf(() => {
    s.current = true;
  }), k.useCallback(
    (l, c = {}) => {
      if (Kt(s.current, vf), !s.current) return;
      if (typeof l == "number") {
        n.go(l);
        return;
      }
      let d = mf(
        l,
        JSON.parse(i),
        o,
        c.relative === "path"
      );
      t7 == null && e !== "/" && (d.pathname = d.pathname === "/" ? e : Vt([e, d.pathname])), (c.replace ? n.replace : n.push)(
        d,
        c.state,
        c
      );
    },
    [
      e,
      n,
      i,
      o,
      t7
    ]
  );
}
k.createContext(null);
function oo(t7, { relative: e } = {}) {
  let { matches: n } = k.useContext(Jt), { pathname: r } = In(), o = JSON.stringify(pf(n));
  return k.useMemo(
    () => mf(
      t7,
      JSON.parse(o),
      r,
      e === "path"
    ),
    [t7, o, r, e]
  );
}
function Vw(t7, e, n, r) {
  We(
    Ii(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: o, static: i } = k.useContext(Xt), { matches: s } = k.useContext(Jt), a = s[s.length - 1], l = a ? a.params : {}, c = a ? a.pathname : "/", d = a ? a.pathnameBase : "/", u = a && a.route;
  {
    let y = u && u.path || "";
    wf(
      c,
      !u || y.endsWith("*") || y.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y === "/" ? "*" : `${y}/*`}">.`
    );
  }
  let f = In(), h;
  h = f;
  let g = h.pathname || "/", p = g;
  if (d !== "/") {
    let y = d.replace(/^\//, "").split("/");
    p = "/" + g.replace(/^\//, "").split("/").slice(y.length).join("/");
  }
  let m = !i && n && n.matches && n.matches.length > 0 ? n.matches : ff(t7, { pathname: p });
  return Kt(
    u || m != null,
    `No routes matched location "${h.pathname}${h.search}${h.hash}" `
  ), Kt(
    m == null || m[m.length - 1].route.element !== void 0 || m[m.length - 1].route.Component !== void 0 || m[m.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), Gw(
    m && m.map(
      (y) => Object.assign({}, y, {
        params: Object.assign({}, l, y.params),
        pathname: Vt([
          d,
          // Re-encode pathnames that were decoded inside matchRoutes
          o.encodeLocation ? o.encodeLocation(y.pathname).pathname : y.pathname
        ]),
        pathnameBase: y.pathnameBase === "/" ? d : Vt([
          d,
          // Re-encode pathnames that were decoded inside matchRoutes
          o.encodeLocation ? o.encodeLocation(y.pathnameBase).pathname : y.pathnameBase
        ])
      })
    ),
    s,
    n,
    r
  );
}
function Yw() {
  let t7 = e1(), e = Fw(t7) ? `${t7.status} ${t7.statusText}` : t7 instanceof Error ? t7.message : JSON.stringify(t7), n = t7 instanceof Error ? t7.stack : null, r = "rgba(200,200,200, 0.5)", o = { padding: "0.5rem", backgroundColor: r }, i = { padding: "2px 4px", backgroundColor: r }, s = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    t7
  ), s = /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ k.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ k.createElement("code", { style: i }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ k.createElement("code", { style: i }, "errorElement"), " prop on your route.")), /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ k.createElement("h3", { style: { fontStyle: "italic" } }, e), n ? /* @__PURE__ */ k.createElement("pre", { style: o }, n) : null, s);
}
var Uw = /* @__PURE__ */ k.createElement(Yw, null), Kw = class extends k.Component {
  constructor(t7) {
    super(t7), this.state = {
      location: t7.location,
      revalidation: t7.revalidation,
      error: t7.error
    };
  }
  static getDerivedStateFromError(t7) {
    return { error: t7 };
  }
  static getDerivedStateFromProps(t7, e) {
    return e.location !== t7.location || e.revalidation !== "idle" && t7.revalidation === "idle" ? {
      error: t7.error,
      location: t7.location,
      revalidation: t7.revalidation
    } : {
      error: t7.error !== void 0 ? t7.error : e.error,
      location: e.location,
      revalidation: t7.revalidation || e.revalidation
    };
  }
  componentDidCatch(t7, e) {
    console.error(
      "React Router caught the following error during render",
      t7,
      e
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ k.createElement(Jt.Provider, { value: this.props.routeContext }, /* @__PURE__ */ k.createElement(
      Ca.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function qw({ routeContext: t7, match: e, children: n }) {
  let r = k.useContext(ar);
  return r && r.static && r.staticContext && (e.route.errorElement || e.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = e.route.id), /* @__PURE__ */ k.createElement(Jt.Provider, { value: t7 }, n);
}
function Gw(t7, e = [], n = null, r = null) {
  if (t7 == null) {
    if (!n)
      return null;
    if (n.errors)
      t7 = n.matches;
    else if (e.length === 0 && !n.initialized && n.matches.length > 0)
      t7 = n.matches;
    else
      return null;
  }
  let o = t7, i = n == null ? void 0 : n.errors;
  if (i != null) {
    let l = o.findIndex(
      (c) => c.route.id && (i == null ? void 0 : i[c.route.id]) !== void 0
    );
    We(
      l >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        i
      ).join(",")}`
    ), o = o.slice(
      0,
      Math.min(o.length, l + 1)
    );
  }
  let s = false, a = -1;
  if (n)
    for (let l = 0; l < o.length; l++) {
      let c = o[l];
      if ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (a = l), c.route.id) {
        let { loaderData: d, errors: u } = n, f = c.route.loader && !d.hasOwnProperty(c.route.id) && (!u || u[c.route.id] === void 0);
        if (c.route.lazy || f) {
          s = true, a >= 0 ? o = o.slice(0, a + 1) : o = [o[0]];
          break;
        }
      }
    }
  return o.reduceRight((l, c, d) => {
    let u, f = false, h = null, g = null;
    n && (u = i && c.route.id ? i[c.route.id] : void 0, h = c.route.errorElement || Uw, s && (a < 0 && d === 0 ? (wf(
      "route-fallback",
      false,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), f = true, g = null) : a === d && (f = true, g = c.route.hydrateFallbackElement || null)));
    let p = e.concat(o.slice(0, d + 1)), m = () => {
      let v;
      return u ? v = h : f ? v = g : c.route.Component ? v = /* @__PURE__ */ k.createElement(c.route.Component, null) : c.route.element ? v = c.route.element : v = l, /* @__PURE__ */ k.createElement(
        qw,
        {
          match: c,
          routeContext: {
            outlet: l,
            matches: p,
            isDataRoute: n != null
          },
          children: v
        }
      );
    };
    return n && (c.route.ErrorBoundary || c.route.errorElement || d === 0) ? /* @__PURE__ */ k.createElement(
      Kw,
      {
        location: n.location,
        revalidation: n.revalidation,
        component: h,
        error: u,
        children: m(),
        routeContext: { outlet: null, matches: p, isDataRoute: true }
      }
    ) : m();
  }, null);
}
function _a(t7) {
  return `${t7} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Xw(t7) {
  let e = k.useContext(ar);
  return We(e, _a(t7)), e;
}
function Jw(t7) {
  let e = k.useContext(Di);
  return We(e, _a(t7)), e;
}
function Zw(t7) {
  let e = k.useContext(Jt);
  return We(e, _a(t7)), e;
}
function Sa(t7) {
  let e = Zw(t7), n = e.matches[e.matches.length - 1];
  return We(
    n.route.id,
    `${t7} can only be used on routes that contain a unique "id"`
  ), n.route.id;
}
function Qw() {
  return Sa(
    "useRouteId"
    /* UseRouteId */
  );
}
function e1() {
  var r;
  let t7 = k.useContext(Ca), e = Jw(
    "useRouteError"
    /* UseRouteError */
  ), n = Sa(
    "useRouteError"
    /* UseRouteError */
  );
  return t7 !== void 0 ? t7 : (r = e.errors) == null ? void 0 : r[n];
}
function t1() {
  let { router: t7 } = Xw(
    "useNavigate"
    /* UseNavigateStable */
  ), e = Sa(
    "useNavigate"
    /* UseNavigateStable */
  ), n = k.useRef(false);
  return xf(() => {
    n.current = true;
  }), k.useCallback(
    async (o, i = {}) => {
      Kt(n.current, vf), n.current && (typeof o == "number" ? t7.navigate(o) : await t7.navigate(o, { fromRouteId: e, ...i }));
    },
    [t7, e]
  );
}
var ud = {};
function wf(t7, e, n) {
  !e && !ud[t7] && (ud[t7] = true, Kt(false, n));
}
k.memo(n1);
function n1({
  routes: t7,
  future: e,
  state: n
}) {
  return Vw(t7, void 0, n, e);
}
var jo = "get", Ho = "application/x-www-form-urlencoded";
function Li(t7) {
  return t7 != null && typeof t7.tagName == "string";
}
function r1(t7) {
  return Li(t7) && t7.tagName.toLowerCase() === "button";
}
function o1(t7) {
  return Li(t7) && t7.tagName.toLowerCase() === "form";
}
function i1(t7) {
  return Li(t7) && t7.tagName.toLowerCase() === "input";
}
function s1(t7) {
  return !!(t7.metaKey || t7.altKey || t7.ctrlKey || t7.shiftKey);
}
function a1(t7, e) {
  return t7.button === 0 && // Ignore everything but left clicks
  (!e || e === "_self") && // Let browser handle "target=_blank" etc.
  !s1(t7);
}
var To = null;
function l1() {
  if (To === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), To = false;
    } catch {
      To = true;
    }
  return To;
}
var c1 = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function as(t7) {
  return t7 != null && !c1.has(t7) ? (Kt(
    false,
    `"${t7}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ho}"`
  ), null) : t7;
}
function d1(t7, e) {
  let n, r, o, i, s;
  if (o1(t7)) {
    let a = t7.getAttribute("action");
    r = a ? dn(a, e) : null, n = t7.getAttribute("method") || jo, o = as(t7.getAttribute("enctype")) || Ho, i = new FormData(t7);
  } else if (r1(t7) || i1(t7) && (t7.type === "submit" || t7.type === "image")) {
    let a = t7.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = t7.getAttribute("formaction") || a.getAttribute("action");
    if (r = l ? dn(l, e) : null, n = t7.getAttribute("formmethod") || a.getAttribute("method") || jo, o = as(t7.getAttribute("formenctype")) || as(a.getAttribute("enctype")) || Ho, i = new FormData(a, t7), !l1()) {
      let { name: c, type: d, value: u } = t7;
      if (d === "image") {
        let f = c ? `${c}.` : "";
        i.append(`${f}x`, "0"), i.append(`${f}y`, "0");
      } else c && i.append(c, u);
    }
  } else {
    if (Li(t7))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    n = jo, r = null, o = Ho, s = t7;
  }
  return i && o === "text/plain" && (s = i, i = void 0), { action: r, method: n.toLowerCase(), encType: o, formData: i, body: s };
}
function Ea(t7, e) {
  if (t7 === false || t7 === null || typeof t7 > "u")
    throw new Error(e);
}
async function u1(t7, e) {
  if (t7.id in e)
    return e[t7.id];
  try {
    let n = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      t7.module
    );
    return e[t7.id] = n, n;
  } catch (n) {
    return console.error(
      `Error loading route module \`${t7.module}\`, reloading page...`
    ), console.error(n), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function f1(t7) {
  return t7 == null ? false : t7.href == null ? t7.rel === "preload" && typeof t7.imageSrcSet == "string" && typeof t7.imageSizes == "string" : typeof t7.rel == "string" && typeof t7.href == "string";
}
async function h1(t7, e, n) {
  let r = await Promise.all(
    t7.map(async (o) => {
      let i = e.routes[o.route.id];
      if (i) {
        let s = await u1(i, n);
        return s.links ? s.links() : [];
      }
      return [];
    })
  );
  return b1(
    r.flat(1).filter(f1).filter((o) => o.rel === "stylesheet" || o.rel === "preload").map(
      (o) => o.rel === "stylesheet" ? { ...o, rel: "prefetch", as: "style" } : { ...o, rel: "prefetch" }
    )
  );
}
function fd(t7, e, n, r, o, i) {
  let s = (l, c) => n[c] ? l.route.id !== n[c].route.id : true, a = (l, c) => {
    var d;
    return (
      // param change, /users/123 -> /users/456
      n[c].pathname !== l.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((d = n[c].route.path) == null ? void 0 : d.endsWith("*")) && n[c].params["*"] !== l.params["*"]
    );
  };
  return i === "assets" ? e.filter(
    (l, c) => s(l, c) || a(l, c)
  ) : i === "data" ? e.filter((l, c) => {
    var u;
    let d = r.routes[l.route.id];
    if (!d || !d.hasLoader)
      return false;
    if (s(l, c) || a(l, c))
      return true;
    if (l.route.shouldRevalidate) {
      let f = l.route.shouldRevalidate({
        currentUrl: new URL(
          o.pathname + o.search + o.hash,
          window.origin
        ),
        currentParams: ((u = n[0]) == null ? void 0 : u.params) || {},
        nextUrl: new URL(t7, window.origin),
        nextParams: l.params,
        defaultShouldRevalidate: true
      });
      if (typeof f == "boolean")
        return f;
    }
    return true;
  }) : [];
}
function g1(t7, e, { includeHydrateFallback: n } = {}) {
  return p1(
    t7.map((r) => {
      let o = e.routes[r.route.id];
      if (!o) return [];
      let i = [o.module];
      return o.clientActionModule && (i = i.concat(o.clientActionModule)), o.clientLoaderModule && (i = i.concat(o.clientLoaderModule)), n && o.hydrateFallbackModule && (i = i.concat(o.hydrateFallbackModule)), o.imports && (i = i.concat(o.imports)), i;
    }).flat(1)
  );
}
function p1(t7) {
  return [...new Set(t7)];
}
function m1(t7) {
  let e = {}, n = Object.keys(t7).sort();
  for (let r of n)
    e[r] = t7[r];
  return e;
}
function b1(t7, e) {
  let n = /* @__PURE__ */ new Set();
  return new Set(e), t7.reduce((r, o) => {
    let i = JSON.stringify(m1(o));
    return n.has(i) || (n.add(i), r.push({ key: i, link: o })), r;
  }, []);
}
function y1(t7, e) {
  let n = typeof t7 == "string" ? new URL(
    t7,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : t7;
  return n.pathname === "/" ? n.pathname = "_root.data" : e && dn(n.pathname, e) === "/" ? n.pathname = `${e.replace(/\/$/, "")}/_root.data` : n.pathname = `${n.pathname.replace(/\/$/, "")}.data`, n;
}
function kf() {
  let t7 = k.useContext(ar);
  return Ea(
    t7,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), t7;
}
function v1() {
  let t7 = k.useContext(Di);
  return Ea(
    t7,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), t7;
}
var Oa = k.createContext(void 0);
Oa.displayName = "FrameworkContext";
function Cf() {
  let t7 = k.useContext(Oa);
  return Ea(
    t7,
    "You must render this element inside a <HydratedRouter> element"
  ), t7;
}
function x1(t7, e) {
  let n = k.useContext(Oa), [r, o] = k.useState(false), [i, s] = k.useState(false), { onFocus: a, onBlur: l, onMouseEnter: c, onMouseLeave: d, onTouchStart: u } = e, f = k.useRef(null);
  k.useEffect(() => {
    if (t7 === "render" && s(true), t7 === "viewport") {
      let p = (v) => {
        v.forEach((y) => {
          s(y.isIntersecting);
        });
      }, m = new IntersectionObserver(p, { threshold: 0.5 });
      return f.current && m.observe(f.current), () => {
        m.disconnect();
      };
    }
  }, [t7]), k.useEffect(() => {
    if (r) {
      let p = setTimeout(() => {
        s(true);
      }, 100);
      return () => {
        clearTimeout(p);
      };
    }
  }, [r]);
  let h = () => {
    o(true);
  }, g = () => {
    o(false), s(false);
  };
  return n ? t7 !== "intent" ? [i, f, {}] : [
    i,
    f,
    {
      onFocus: xr(a, h),
      onBlur: xr(l, g),
      onMouseEnter: xr(c, h),
      onMouseLeave: xr(d, g),
      onTouchStart: xr(u, h)
    }
  ] : [false, f, {}];
}
function xr(t7, e) {
  return (n) => {
    t7 && t7(n), n.defaultPrevented || e(n);
  };
}
function w1({
  page: t7,
  ...e
}) {
  let { router: n } = kf(), r = k.useMemo(
    () => ff(n.routes, t7, n.basename),
    [n.routes, t7, n.basename]
  );
  return r ? /* @__PURE__ */ k.createElement(C1, { page: t7, matches: r, ...e }) : null;
}
function k1(t7) {
  let { manifest: e, routeModules: n } = Cf(), [r, o] = k.useState([]);
  return k.useEffect(() => {
    let i = false;
    return h1(t7, e, n).then(
      (s) => {
        i || o(s);
      }
    ), () => {
      i = true;
    };
  }, [t7, e, n]), r;
}
function C1({
  page: t7,
  matches: e,
  ...n
}) {
  let r = In(), { manifest: o, routeModules: i } = Cf(), { basename: s } = kf(), { loaderData: a, matches: l } = v1(), c = k.useMemo(
    () => fd(
      t7,
      e,
      l,
      o,
      r,
      "data"
    ),
    [t7, e, l, o, r]
  ), d = k.useMemo(
    () => fd(
      t7,
      e,
      l,
      o,
      r,
      "assets"
    ),
    [t7, e, l, o, r]
  ), u = k.useMemo(() => {
    if (t7 === r.pathname + r.search + r.hash)
      return [];
    let g = /* @__PURE__ */ new Set(), p = false;
    if (e.forEach((v) => {
      var C;
      let y = o.routes[v.route.id];
      !y || !y.hasLoader || (!c.some((x) => x.route.id === v.route.id) && v.route.id in a && ((C = i[v.route.id]) != null && C.shouldRevalidate) || y.hasClientLoader ? p = true : g.add(v.route.id));
    }), g.size === 0)
      return [];
    let m = y1(t7, s);
    return p && g.size > 0 && m.searchParams.set(
      "_routes",
      e.filter((v) => g.has(v.route.id)).map((v) => v.route.id).join(",")
    ), [m.pathname + m.search];
  }, [
    s,
    a,
    r,
    o,
    c,
    e,
    t7,
    i
  ]), f = k.useMemo(
    () => g1(d, o),
    [d, o]
  ), h = k1(d);
  return /* @__PURE__ */ k.createElement(k.Fragment, null, u.map((g) => /* @__PURE__ */ k.createElement("link", { key: g, rel: "prefetch", as: "fetch", href: g, ...n })), f.map((g) => /* @__PURE__ */ k.createElement("link", { key: g, rel: "modulepreload", href: g, ...n })), h.map(({ key: g, link: p }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ k.createElement("link", { key: g, ...p })
  )));
}
function _1(...t7) {
  return (e) => {
    t7.forEach((n) => {
      typeof n == "function" ? n(e) : n != null && (n.current = e);
    });
  };
}
var _f = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  _f && (window.__reactRouterVersion = "7.4.0");
} catch {
}
var Sf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Hn = k.forwardRef(
  function({
    onClick: e,
    discover: n = "render",
    prefetch: r = "none",
    relative: o,
    reloadDocument: i,
    replace: s,
    state: a,
    target: l,
    to: c,
    preventScrollReset: d,
    viewTransition: u,
    ...f
  }, h) {
    let { basename: g } = k.useContext(Xt), p = typeof c == "string" && Sf.test(c), m, v = false;
    if (typeof c == "string" && p && (m = c, _f))
      try {
        let T = new URL(window.location.href), S = c.startsWith("//") ? new URL(T.protocol + c) : new URL(c), A = dn(S.pathname, g);
        S.origin === T.origin && A != null ? c = A + S.search + S.hash : v = true;
      } catch {
        Kt(
          false,
          `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let y = jw(c, { relative: o }), [C, x, w] = x1(
      r,
      f
    ), _ = T1(c, {
      replace: s,
      state: a,
      target: l,
      preventScrollReset: d,
      relative: o,
      viewTransition: u
    });
    function O(T) {
      e && e(T), T.defaultPrevented || _(T);
    }
    let N = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ k.createElement(
        "a",
        {
          ...f,
          ...w,
          href: m || y,
          onClick: v || i ? e : O,
          ref: _1(h, x),
          target: l,
          "data-discover": !p && n === "render" ? "true" : void 0
        }
      )
    );
    return C && !p ? /* @__PURE__ */ k.createElement(k.Fragment, null, N, /* @__PURE__ */ k.createElement(w1, { page: y })) : N;
  }
);
Hn.displayName = "Link";
var S1 = k.forwardRef(
  function({
    "aria-current": e = "page",
    caseSensitive: n = false,
    className: r = "",
    end: o = false,
    style: i,
    to: s,
    viewTransition: a,
    children: l,
    ...c
  }, d) {
    let u = oo(s, { relative: c.relative }), f = In(), h = k.useContext(Di), { navigator: g, basename: p } = k.useContext(Xt), m = h != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    A1(u) && a === true, v = g.encodeLocation ? g.encodeLocation(u).pathname : u.pathname, y = f.pathname, C = h && h.navigation && h.navigation.location ? h.navigation.location.pathname : null;
    n || (y = y.toLowerCase(), C = C ? C.toLowerCase() : null, v = v.toLowerCase()), C && p && (C = dn(C, p) || C);
    const x = v !== "/" && v.endsWith("/") ? v.length - 1 : v.length;
    let w = y === v || !o && y.startsWith(v) && y.charAt(x) === "/", _ = C != null && (C === v || !o && C.startsWith(v) && C.charAt(v.length) === "/"), O = {
      isActive: w,
      isPending: _,
      isTransitioning: m
    }, N = w ? e : void 0, T;
    typeof r == "function" ? T = r(O) : T = [
      r,
      w ? "active" : null,
      _ ? "pending" : null,
      m ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let S = typeof i == "function" ? i(O) : i;
    return /* @__PURE__ */ k.createElement(
      Hn,
      {
        ...c,
        "aria-current": N,
        className: T,
        ref: d,
        style: S,
        to: s,
        viewTransition: a
      },
      typeof l == "function" ? l(O) : l
    );
  }
);
S1.displayName = "NavLink";
var E1 = k.forwardRef(
  ({
    discover: t7 = "render",
    fetcherKey: e,
    navigate: n,
    reloadDocument: r,
    replace: o,
    state: i,
    method: s = jo,
    action: a,
    onSubmit: l,
    relative: c,
    preventScrollReset: d,
    viewTransition: u,
    ...f
  }, h) => {
    let g = M1(), p = P1(a, { relative: c }), m = s.toLowerCase() === "get" ? "get" : "post", v = typeof a == "string" && Sf.test(a), y = (C) => {
      if (l && l(C), C.defaultPrevented) return;
      C.preventDefault();
      let x = C.nativeEvent.submitter, w = (x == null ? void 0 : x.getAttribute("formmethod")) || s;
      g(x || C.currentTarget, {
        fetcherKey: e,
        method: w,
        navigate: n,
        replace: o,
        state: i,
        relative: c,
        preventScrollReset: d,
        viewTransition: u
      });
    };
    return /* @__PURE__ */ k.createElement(
      "form",
      {
        ref: h,
        method: m,
        action: p,
        onSubmit: r ? l : y,
        ...f,
        "data-discover": !v && t7 === "render" ? "true" : void 0
      }
    );
  }
);
E1.displayName = "Form";
function O1(t7) {
  return `${t7} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ef(t7) {
  let e = k.useContext(ar);
  return We(e, O1(t7)), e;
}
function T1(t7, {
  target: e,
  replace: n,
  state: r,
  preventScrollReset: o,
  relative: i,
  viewTransition: s
} = {}) {
  let a = Hw(), l = In(), c = oo(t7, { relative: i });
  return k.useCallback(
    (d) => {
      if (a1(d, e)) {
        d.preventDefault();
        let u = n !== void 0 ? n : Is(l) === Is(c);
        a(t7, {
          replace: u,
          state: r,
          preventScrollReset: o,
          relative: i,
          viewTransition: s
        });
      }
    },
    [
      l,
      a,
      c,
      n,
      r,
      e,
      t7,
      o,
      i,
      s
    ]
  );
}
var N1 = 0, R1 = () => `__${String(++N1)}__`;
function M1() {
  let { router: t7 } = Ef(
    "useSubmit"
    /* UseSubmit */
  ), { basename: e } = k.useContext(Xt), n = Qw();
  return k.useCallback(
    async (r, o = {}) => {
      let { action: i, method: s, encType: a, formData: l, body: c } = d1(
        r,
        e
      );
      if (o.navigate === false) {
        let d = o.fetcherKey || R1();
        await t7.fetch(d, n, o.action || i, {
          preventScrollReset: o.preventScrollReset,
          formData: l,
          body: c,
          formMethod: o.method || s,
          formEncType: o.encType || a,
          flushSync: o.flushSync
        });
      } else
        await t7.navigate(o.action || i, {
          preventScrollReset: o.preventScrollReset,
          formData: l,
          body: c,
          formMethod: o.method || s,
          formEncType: o.encType || a,
          replace: o.replace,
          state: o.state,
          fromRouteId: n,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition
        });
    },
    [t7, e, n]
  );
}
function P1(t7, { relative: e } = {}) {
  let { basename: n } = k.useContext(Xt), r = k.useContext(Jt);
  We(r, "useFormAction must be used inside a RouteContext");
  let [o] = r.matches.slice(-1), i = { ...oo(t7 || ".", { relative: e }) }, s = In();
  if (t7 == null) {
    i.search = s.search;
    let a = new URLSearchParams(i.search), l = a.getAll("index");
    if (l.some((d) => d === "")) {
      a.delete("index"), l.filter((u) => u).forEach((u) => a.append("index", u));
      let d = a.toString();
      i.search = d ? `?${d}` : "";
    }
  }
  return (!t7 || t7 === ".") && o.route.index && (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (i.pathname = i.pathname === "/" ? n : Vt([n, i.pathname])), Is(i);
}
function A1(t7, e = {}) {
  let n = k.useContext(yf);
  We(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = Ef(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), o = oo(t7, { relative: e.relative });
  if (!n.isTransitioning)
    return false;
  let i = dn(n.currentLocation.pathname, r) || n.currentLocation.pathname, s = dn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return di(o.pathname, s) != null || di(o.pathname, i) != null;
}
new TextEncoder();
function D1(t7) {
  return me({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z", clipRule: "evenodd" }, child: [] }] })(t7);
}
function I1(t7) {
  return me({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z", clipRule: "evenodd" }, child: [] }] })(t7);
}
function L1(t7) {
  return me({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z", clipRule: "evenodd" }, child: [] }] })(t7);
}
function Of(t7) {
  return me({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" }, child: [] }] })(t7);
}
function Tf(t7) {
  return me({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z", clipRule: "evenodd" }, child: [] }] })(t7);
}
function Nf(t7) {
  return me({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", clipRule: "evenodd" }, child: [] }] })(t7);
}
function F1(t7) {
  return me({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z", clipRule: "evenodd" }, child: [] }] })(t7);
}
function z1(t7) {
  return me({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, child: [] }] })(t7);
}
function B1(t7) {
  return me({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }, child: [] }] })(t7);
}
function Rf(t7) {
  return me({ attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }, child: [] }] })(t7);
}
function $1(t7) {
  return me({ attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 19l-7-7 7-7" }, child: [] }] })(t7);
}
function Mf(t7) {
  return me({ attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5l7 7-7 7" }, child: [] }] })(t7);
}
function j1(t7) {
  return me({ attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 15l7-7 7 7" }, child: [] }] })(t7);
}
function H1(t7) {
  return me({ attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }, child: [] }] })(t7);
}
const Ta = "-";
function W1(t7) {
  const e = Y1(t7), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = t7;
  function o(s) {
    const a = s.split(Ta);
    return a[0] === "" && a.length !== 1 && a.shift(), Pf(a, e) || V1(s);
  }
  function i(s, a) {
    const l = n[s] || [];
    return a && r[s] ? [...l, ...r[s]] : l;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: i
  };
}
function Pf(t7, e) {
  var s;
  if (t7.length === 0)
    return e.classGroupId;
  const n = t7[0], r = e.nextPart.get(n), o = r ? Pf(t7.slice(1), r) : void 0;
  if (o)
    return o;
  if (e.validators.length === 0)
    return;
  const i = t7.join(Ta);
  return (s = e.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : s.classGroupId;
}
const hd = /^\[(.+)\]$/;
function V1(t7) {
  if (hd.test(t7)) {
    const e = hd.exec(t7)[1], n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Y1(t7) {
  const {
    theme: e,
    prefix: n
  } = t7, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return K1(Object.entries(t7.classGroups), n).forEach(([i, s]) => {
    Ls(s, r, i, e);
  }), r;
}
function Ls(t7, e, n, r) {
  t7.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? e : gd(e, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (U1(o)) {
        Ls(o(r), e, n, r);
        return;
      }
      e.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      Ls(s, gd(e, i), n, r);
    });
  });
}
function gd(t7, e) {
  let n = t7;
  return e.split(Ta).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function U1(t7) {
  return t7.isThemeGetter;
}
function K1(t7, e) {
  return e ? t7.map(([n, r]) => {
    const o = r.map((i) => typeof i == "string" ? e + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [e + s, a])) : i);
    return [n, o];
  }) : t7;
}
function q1(t7) {
  if (t7 < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(i, s) {
    n.set(i, s), e++, e > t7 && (e = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get(i) {
      let s = n.get(i);
      if (s !== void 0)
        return s;
      if ((s = r.get(i)) !== void 0)
        return o(i, s), s;
    },
    set(i, s) {
      n.has(i) ? n.set(i, s) : o(i, s);
    }
  };
}
const Af = "!";
function G1(t7) {
  const e = t7.separator, n = e.length === 1, r = e[0], o = e.length;
  return function(s) {
    const a = [];
    let l = 0, c = 0, d;
    for (let p = 0; p < s.length; p++) {
      let m = s[p];
      if (l === 0) {
        if (m === r && (n || s.slice(p, p + o) === e)) {
          a.push(s.slice(c, p)), c = p + o;
          continue;
        }
        if (m === "/") {
          d = p;
          continue;
        }
      }
      m === "[" ? l++ : m === "]" && l--;
    }
    const u = a.length === 0 ? s : s.substring(c), f = u.startsWith(Af), h = f ? u.substring(1) : u, g = d && d > c ? d - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: g
    };
  };
}
function X1(t7) {
  if (t7.length <= 1)
    return t7;
  const e = [];
  let n = [];
  return t7.forEach((r) => {
    r[0] === "[" ? (e.push(...n.sort(), r), n = []) : n.push(r);
  }), e.push(...n.sort()), e;
}
function J1(t7) {
  return {
    cache: q1(t7.cacheSize),
    splitModifiers: G1(t7),
    ...W1(t7)
  };
}
const Z1 = /\s+/;
function Q1(t7, e) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = e, i = /* @__PURE__ */ new Set();
  return t7.trim().split(Z1).map((s) => {
    const {
      modifiers: a,
      hasImportantModifier: l,
      baseClassName: c,
      maybePostfixModifierPosition: d
    } = n(s);
    let u = r(d ? c.substring(0, d) : c), f = !!d;
    if (!u) {
      if (!d)
        return {
          isTailwindClass: false,
          originalClassName: s
        };
      if (u = r(c), !u)
        return {
          isTailwindClass: false,
          originalClassName: s
        };
      f = false;
    }
    const h = X1(a).join(":");
    return {
      isTailwindClass: true,
      modifierId: l ? h + Af : h,
      classGroupId: u,
      originalClassName: s,
      hasPostfixModifier: f
    };
  }).reverse().filter((s) => {
    if (!s.isTailwindClass)
      return true;
    const {
      modifierId: a,
      classGroupId: l,
      hasPostfixModifier: c
    } = s, d = a + l;
    return i.has(d) ? false : (i.add(d), o(l, c).forEach((u) => i.add(a + u)), true);
  }).reverse().map((s) => s.originalClassName).join(" ");
}
function ek() {
  let t7 = 0, e, n, r = "";
  for (; t7 < arguments.length; )
    (e = arguments[t7++]) && (n = Df(e)) && (r && (r += " "), r += n);
  return r;
}
function Df(t7) {
  if (typeof t7 == "string")
    return t7;
  let e, n = "";
  for (let r = 0; r < t7.length; r++)
    t7[r] && (e = Df(t7[r])) && (n && (n += " "), n += e);
  return n;
}
function tk(t7, ...e) {
  let n, r, o, i = s;
  function s(l) {
    const c = e.reduce((d, u) => u(d), t7());
    return n = J1(c), r = n.cache.get, o = n.cache.set, i = a, a(l);
  }
  function a(l) {
    const c = r(l);
    if (c)
      return c;
    const d = Q1(l, n);
    return o(l, d), d;
  }
  return function() {
    return i(ek.apply(null, arguments));
  };
}
function ve(t7) {
  const e = (n) => n[t7] || [];
  return e.isThemeGetter = true, e;
}
const If = /^\[(?:([a-z-]+):)?(.+)\]$/i, nk = /^\d+\/\d+$/, rk = /* @__PURE__ */ new Set(["px", "full", "screen"]), ok = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ik = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, sk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ak = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, lk = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Bt(t7) {
  return kn(t7) || rk.has(t7) || nk.test(t7);
}
function en(t7) {
  return lr(t7, "length", mk);
}
function kn(t7) {
  return !!t7 && !Number.isNaN(Number(t7));
}
function No(t7) {
  return lr(t7, "number", kn);
}
function wr(t7) {
  return !!t7 && Number.isInteger(Number(t7));
}
function ck(t7) {
  return t7.endsWith("%") && kn(t7.slice(0, -1));
}
function Z(t7) {
  return If.test(t7);
}
function tn(t7) {
  return ok.test(t7);
}
const dk = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function uk(t7) {
  return lr(t7, dk, Lf);
}
function fk(t7) {
  return lr(t7, "position", Lf);
}
const hk = /* @__PURE__ */ new Set(["image", "url"]);
function gk(t7) {
  return lr(t7, hk, yk);
}
function pk(t7) {
  return lr(t7, "", bk);
}
function kr() {
  return true;
}
function lr(t7, e, n) {
  const r = If.exec(t7);
  return r ? r[1] ? typeof e == "string" ? r[1] === e : e.has(r[1]) : n(r[2]) : false;
}
function mk(t7) {
  return ik.test(t7) && !sk.test(t7);
}
function Lf() {
  return false;
}
function bk(t7) {
  return ak.test(t7);
}
function yk(t7) {
  return lk.test(t7);
}
function vk() {
  const t7 = ve("colors"), e = ve("spacing"), n = ve("blur"), r = ve("brightness"), o = ve("borderColor"), i = ve("borderRadius"), s = ve("borderSpacing"), a = ve("borderWidth"), l = ve("contrast"), c = ve("grayscale"), d = ve("hueRotate"), u = ve("invert"), f = ve("gap"), h = ve("gradientColorStops"), g = ve("gradientColorStopPositions"), p = ve("inset"), m = ve("margin"), v = ve("opacity"), y = ve("padding"), C = ve("saturate"), x = ve("scale"), w = ve("sepia"), _ = ve("skew"), O = ve("space"), N = ve("translate"), T = () => ["auto", "contain", "none"], S = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", Z, e], M = () => [Z, e], P = () => ["", Bt, en], E = () => ["auto", kn, Z], R = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], D = () => ["solid", "dashed", "dotted", "double", "none"], L = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], $ = () => ["", "0", Z], B = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [kn, No], V = () => [kn, Z];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [kr],
      spacing: [Bt, en],
      blur: ["none", "", tn, Z],
      brightness: W(),
      borderColor: [t7],
      borderRadius: ["none", "", "full", tn, Z],
      borderSpacing: M(),
      borderWidth: P(),
      contrast: W(),
      grayscale: $(),
      hueRotate: V(),
      invert: $(),
      gap: M(),
      gradientColorStops: [t7],
      gradientColorStopPositions: [ck, en],
      inset: A(),
      margin: A(),
      opacity: W(),
      padding: M(),
      saturate: W(),
      scale: W(),
      sepia: $(),
      skew: V(),
      space: M(),
      translate: M()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Z]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [tn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": B()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": B()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...R(), Z]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [p]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [p]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [p]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [p]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [p]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [p]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [p]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [p]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [p]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", wr, Z]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: A()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", Z]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: $()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: $()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", wr, Z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [kr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", wr, Z]
        }, Z]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": E()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": E()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [kr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [wr, Z]
        }, Z]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": E()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": E()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", Z]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Z]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...F()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...F(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...F(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [m]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [m]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [m]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [m]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [m]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [m]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [m]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [m]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [m]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [O]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [O]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Z, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Z, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Z, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [tn]
        }, tn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Z, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Z, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Z, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Z, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", tn, en]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", No]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [kr]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Z]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", kn, No]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Bt, Z]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Z]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Z]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [t7]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [v]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [t7]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [v]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...D(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Bt, en]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Bt, Z]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t7]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: M()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Z]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", Z]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [v]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...R(), fk]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", uk]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, gk]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t7]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [g]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [v]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...D(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [v]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: D()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...D()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Bt, Z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Bt, en]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t7]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: P()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [t7]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [v]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Bt, en]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t7]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", tn, pk]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [kr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [v]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": L()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": L()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", tn, Z]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [u]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [w]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [u]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [v]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [w]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Z]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: V()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Z]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: V()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Z]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [x]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [x]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [x]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [wr, Z]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [N]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [N]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [_]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [_]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Z]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t7]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Z]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t7]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": M()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": M()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": M()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": M()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": M()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": M()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": M()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": M()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": M()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": M()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": M()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": M()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": M()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": M()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": M()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": M()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": M()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": M()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Z]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t7, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Bt, en, No]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t7, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const I = /* @__PURE__ */ tk(vk);
function vn(t7) {
  return t7 !== null && typeof t7 == "object" && t7.constructor === Object;
}
function Xr(t7) {
  if (!vn(t7))
    return t7;
  const e = {};
  for (const n in t7)
    e[n] = Xr(t7[n]);
  return e;
}
function j(t7, e) {
  if (vn(e) && Object.keys(e).length === 0)
    return Xr({ ...t7, ...e });
  const n = { ...t7, ...e };
  if (vn(e) && vn(t7))
    for (const r in e)
      vn(e[r]) && r in t7 && vn(t7[r]) ? n[r] = j(t7[r], e[r]) : n[r] = vn(e[r]) ? Xr(e[r]) : e[r];
  return n;
}
const xk = {
  root: {
    base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
    flush: {
      off: "rounded-lg border",
      on: "border-b"
    }
  },
  content: {
    base: "p-5 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900"
  },
  title: {
    arrow: {
      base: "h-6 w-6 shrink-0",
      open: {
        off: "",
        on: "rotate-180"
      }
    },
    base: "flex w-full items-center justify-between p-5 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg dark:text-gray-400",
    flush: {
      off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
      on: "bg-transparent dark:bg-transparent"
    },
    heading: "",
    open: {
      off: "",
      on: "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
    }
  }
}, wk = {
  base: "flex flex-col gap-2 p-4 text-sm",
  borderAccent: "border-t-4",
  closeButton: {
    base: "-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
    icon: "h-5 w-5",
    color: {
      info: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
      failure: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      success: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      warning: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
      red: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      green: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      yellow: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
      blue: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
      cyan: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      pink: "bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",
      lime: "bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",
      dark: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300",
      indigo: "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",
      purple: "bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",
      teal: "bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",
      light: "bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
    }
  },
  color: {
    info: "border-cyan-500 bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-cyan-800",
    gray: "border-gray-500 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
    failure: "border-red-500 bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",
    success: "border-green-500 bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800",
    warning: "border-yellow-500 bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800",
    red: "border-red-500 bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",
    green: "border-green-500 bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800",
    yellow: "border-yellow-500 bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800",
    blue: "border-blue-500 bg-blue-100 text-blue-700 dark:bg-blue-200 dark:text-blue-800",
    cyan: "border-cyan-500 bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-cyan-800",
    pink: "border-pink-500 bg-pink-100 text-pink-700 dark:bg-pink-200 dark:text-pink-800",
    lime: "border-lime-500 bg-lime-100 text-lime-700 dark:bg-lime-200 dark:text-lime-800",
    dark: "border-gray-600 bg-gray-800 text-gray-200 dark:bg-gray-900 dark:text-gray-300",
    indigo: "border-indigo-500 bg-indigo-100 text-indigo-700 dark:bg-indigo-200 dark:text-indigo-800",
    purple: "border-purple-500 bg-purple-100 text-purple-700 dark:bg-purple-200 dark:text-purple-800",
    teal: "border-teal-500 bg-teal-100 text-teal-700 dark:bg-teal-200 dark:text-teal-800",
    light: "border-gray-400 bg-gray-50 text-gray-600 dark:bg-gray-500 dark:text-gray-200"
  },
  icon: "mr-3 inline h-5 w-5 flex-shrink-0",
  rounded: "rounded-lg",
  wrapper: "flex items-center"
}, kk = {
  root: {
    base: "flex items-center justify-center space-x-4 rounded",
    bordered: "p-1 ring-2",
    rounded: "rounded-full",
    color: {
      dark: "ring-gray-800 dark:ring-gray-800",
      failure: "ring-red-500 dark:ring-red-700",
      gray: "ring-gray-500 dark:ring-gray-400",
      info: "ring-cyan-400 dark:ring-cyan-800",
      light: "ring-gray-300 dark:ring-gray-500",
      purple: "ring-purple-500 dark:ring-purple-600",
      success: "ring-green-500 dark:ring-green-500",
      warning: "ring-yellow-300 dark:ring-yellow-500",
      pink: "ring-pink-500 dark:ring-pink-500"
    },
    img: {
      base: "rounded",
      off: "relative overflow-hidden bg-gray-100 dark:bg-gray-600",
      on: "",
      placeholder: "absolute -bottom-1 h-auto w-auto text-gray-400"
    },
    size: {
      xs: "h-6 w-6",
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-20 w-20",
      xl: "h-36 w-36"
    },
    stacked: "ring-2 ring-gray-300 dark:ring-gray-500",
    statusPosition: {
      "bottom-left": "-bottom-1 -left-1",
      "bottom-center": "-bottom-1",
      "bottom-right": "-bottom-1 -right-1",
      "top-left": "-left-1 -top-1",
      "top-center": "-top-1",
      "top-right": "-right-1 -top-1",
      "center-right": "-right-1",
      center: "",
      "center-left": "-left-1"
    },
    status: {
      away: "bg-yellow-400",
      base: "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",
      busy: "bg-red-400",
      offline: "bg-gray-400",
      online: "bg-green-400"
    },
    initials: {
      text: "font-medium text-gray-600 dark:text-gray-300",
      base: "relative inline-flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-600"
    }
  },
  group: {
    base: "flex -space-x-4"
  },
  groupCounter: {
    base: "relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-xs font-medium text-white ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500"
  }
}, Ck = {
  root: {
    base: "flex h-fit items-center gap-1 font-semibold",
    color: {
      info: "bg-cyan-100 text-cyan-800 group-hover:bg-cyan-200 dark:bg-cyan-200 dark:text-cyan-800 dark:group-hover:bg-cyan-300",
      gray: "bg-gray-100 text-gray-800 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600",
      failure: "bg-red-100 text-red-800 group-hover:bg-red-200 dark:bg-red-200 dark:text-red-900 dark:group-hover:bg-red-300",
      success: "bg-green-100 text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300",
      warning: "bg-yellow-100 text-yellow-800 group-hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-900 dark:group-hover:bg-yellow-300",
      indigo: "bg-indigo-100 text-indigo-800 group-hover:bg-indigo-200 dark:bg-indigo-200 dark:text-indigo-900 dark:group-hover:bg-indigo-300",
      purple: "bg-purple-100 text-purple-800 group-hover:bg-purple-200 dark:bg-purple-200 dark:text-purple-900 dark:group-hover:bg-purple-300",
      pink: "bg-pink-100 text-pink-800 group-hover:bg-pink-200 dark:bg-pink-200 dark:text-pink-900 dark:group-hover:bg-pink-300",
      blue: "bg-blue-100 text-blue-800 group-hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-900 dark:group-hover:bg-blue-300",
      cyan: "bg-cyan-100 text-cyan-800 group-hover:bg-cyan-200 dark:bg-cyan-200 dark:text-cyan-900 dark:group-hover:bg-cyan-300",
      dark: "bg-gray-600 text-gray-100 group-hover:bg-gray-500 dark:bg-gray-900 dark:text-gray-200 dark:group-hover:bg-gray-700",
      light: "bg-gray-200 text-gray-800 group-hover:bg-gray-300 dark:bg-gray-400 dark:text-gray-900 dark:group-hover:bg-gray-500",
      green: "bg-green-100 text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300",
      lime: "bg-lime-100 text-lime-800 group-hover:bg-lime-200 dark:bg-lime-200 dark:text-lime-900 dark:group-hover:bg-lime-300",
      red: "bg-red-100 text-red-800 group-hover:bg-red-200 dark:bg-red-200 dark:text-red-900 dark:group-hover:bg-red-300",
      teal: "bg-teal-100 text-teal-800 group-hover:bg-teal-200 dark:bg-teal-200 dark:text-teal-900 dark:group-hover:bg-teal-300",
      yellow: "bg-yellow-100 text-yellow-800 group-hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-900 dark:group-hover:bg-yellow-300"
    },
    href: "group",
    size: {
      xs: "p-1 text-xs",
      sm: "p-1.5 text-sm"
    }
  },
  icon: {
    off: "rounded px-2 py-0.5",
    on: "rounded-full p-1.5",
    size: {
      xs: "h-3 w-3",
      sm: "h-3.5 w-3.5"
    }
  }
}, _k = {
  root: {
    base: "text-xl font-semibold italic text-gray-900 dark:text-white"
  }
}, Sk = {
  root: {
    base: "",
    list: "flex items-center"
  },
  item: {
    base: "group flex items-center",
    chevron: "mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2",
    href: {
      off: "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
      on: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    },
    icon: "mr-2 h-4 w-4"
  }
}, Ek = {
  base: "group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none",
  fullSized: "w-full",
  color: {
    dark: "border border-transparent bg-gray-800 text-white focus:ring-4 focus:ring-gray-300 enabled:hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-gray-800 dark:enabled:hover:bg-gray-700",
    failure: "border border-transparent bg-red-700 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-800 dark:bg-red-600 dark:focus:ring-red-900 dark:enabled:hover:bg-red-700",
    gray: ":ring-cyan-700 border border-gray-200 bg-white text-gray-900 focus:text-cyan-700 focus:ring-4 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 dark:border-gray-600 dark:bg-transparent dark:text-gray-400 dark:enabled:hover:bg-gray-700 dark:enabled:hover:text-white",
    info: "border border-transparent bg-cyan-700 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:focus:ring-cyan-800 dark:enabled:hover:bg-cyan-700",
    light: "border border-gray-300 bg-white text-gray-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:border-gray-700 dark:enabled:hover:bg-gray-700",
    purple: "border border-transparent bg-purple-700 text-white focus:ring-4 focus:ring-purple-300 enabled:hover:bg-purple-800 dark:bg-purple-600 dark:focus:ring-purple-900 dark:enabled:hover:bg-purple-700",
    success: "border border-transparent bg-green-700 text-white focus:ring-4 focus:ring-green-300 enabled:hover:bg-green-800 dark:bg-green-600 dark:focus:ring-green-800 dark:enabled:hover:bg-green-700",
    warning: "border border-transparent bg-yellow-400 text-white focus:ring-4 focus:ring-yellow-300 enabled:hover:bg-yellow-500 dark:focus:ring-yellow-900",
    blue: "border border-transparent bg-blue-700 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    cyan: "border border-cyan-300 bg-white text-cyan-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-100 dark:border-cyan-600 dark:bg-cyan-600 dark:text-white dark:focus:ring-cyan-700 dark:enabled:hover:border-cyan-700 dark:enabled:hover:bg-cyan-700",
    green: "border border-green-300 bg-white text-green-900 focus:ring-4 focus:ring-green-300 enabled:hover:bg-green-100 dark:border-green-600 dark:bg-green-600 dark:text-white dark:focus:ring-green-700 dark:enabled:hover:border-green-700 dark:enabled:hover:bg-green-700",
    indigo: "border border-indigo-300 bg-white text-indigo-900 focus:ring-4 focus:ring-indigo-300 enabled:hover:bg-indigo-100 dark:border-indigo-600 dark:bg-indigo-600 dark:text-white dark:focus:ring-indigo-700 dark:enabled:hover:border-indigo-700 dark:enabled:hover:bg-indigo-700",
    lime: "border border-lime-300 bg-white text-lime-900 focus:ring-4 focus:ring-lime-300 enabled:hover:bg-lime-100 dark:border-lime-600 dark:bg-lime-600 dark:text-white dark:focus:ring-lime-700 dark:enabled:hover:border-lime-700 dark:enabled:hover:bg-lime-700",
    pink: "border border-pink-300 bg-white text-pink-900 focus:ring-4 focus:ring-pink-300 enabled:hover:bg-pink-100 dark:border-pink-600 dark:bg-pink-600 dark:text-white dark:focus:ring-pink-700 dark:enabled:hover:border-pink-700 dark:enabled:hover:bg-pink-700",
    red: "border border-red-300 bg-white text-red-900 focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-100 dark:border-red-600 dark:bg-red-600 dark:text-white dark:focus:ring-red-700 dark:enabled:hover:border-red-700 dark:enabled:hover:bg-red-700",
    teal: "border border-teal-300 bg-white text-teal-900 focus:ring-4 focus:ring-teal-300 enabled:hover:bg-teal-100 dark:border-teal-600 dark:bg-teal-600 dark:text-white dark:focus:ring-teal-700 dark:enabled:hover:border-teal-700 dark:enabled:hover:bg-teal-700",
    yellow: "border border-yellow-300 bg-white text-yellow-900 focus:ring-4 focus:ring-yellow-300 enabled:hover:bg-yellow-100 dark:border-yellow-600 dark:bg-yellow-600 dark:text-white dark:focus:ring-yellow-700 dark:enabled:hover:border-yellow-700 dark:enabled:hover:bg-yellow-700"
  },
  disabled: "cursor-not-allowed opacity-50",
  isProcessing: "cursor-wait",
  spinnerSlot: "absolute top-0 flex h-full items-center",
  spinnerLeftPosition: {
    xs: "left-2",
    sm: "left-3",
    md: "left-4",
    lg: "left-5",
    xl: "left-6"
  },
  gradient: {
    cyan: "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-br dark:focus:ring-cyan-800",
    failure: "bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-gradient-to-br dark:focus:ring-red-800",
    info: "bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-br dark:focus:ring-cyan-800 ",
    lime: "bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 text-gray-900 focus:ring-4 focus:ring-lime-300 enabled:hover:bg-gradient-to-br dark:focus:ring-lime-800",
    pink: "bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white focus:ring-4 focus:ring-pink-300 enabled:hover:bg-gradient-to-br dark:focus:ring-pink-800",
    purple: "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white focus:ring-4 focus:ring-purple-300 enabled:hover:bg-gradient-to-br dark:focus:ring-purple-800",
    success: "bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white focus:ring-4 focus:ring-green-300 enabled:hover:bg-gradient-to-br dark:focus:ring-green-800",
    teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white focus:ring-4 focus:ring-teal-300 enabled:hover:bg-gradient-to-br dark:focus:ring-teal-800"
  },
  gradientDuoTone: {
    cyanToBlue: "bg-gradient-to-r from-cyan-500 to-cyan-500 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800",
    greenToBlue: "bg-gradient-to-br from-green-400 to-cyan-600 text-white focus:ring-4 focus:ring-green-200 enabled:hover:bg-gradient-to-bl dark:focus:ring-green-800",
    pinkToOrange: "bg-gradient-to-br from-pink-500 to-orange-400 text-white focus:ring-4 focus:ring-pink-200 enabled:hover:bg-gradient-to-bl dark:focus:ring-pink-800",
    purpleToBlue: "bg-gradient-to-br from-purple-600 to-cyan-500 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800",
    purpleToPink: "bg-gradient-to-r from-purple-500 to-pink-500 text-white focus:ring-4 focus:ring-purple-200 enabled:hover:bg-gradient-to-l dark:focus:ring-purple-800",
    redToYellow: "bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-gray-900 focus:ring-4 focus:ring-red-100 enabled:hover:bg-gradient-to-bl dark:focus:ring-red-400",
    tealToLime: "bg-gradient-to-r from-teal-200 to-lime-200 text-gray-900 focus:ring-4 focus:ring-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 dark:focus:ring-teal-700"
  },
  inner: {
    base: "flex items-stretch transition-all duration-200",
    position: {
      none: "",
      start: "rounded-r-none",
      middle: "rounded-none",
      end: "rounded-l-none"
    },
    outline: "border border-transparent",
    isProcessingPadding: {
      xs: "pl-8",
      sm: "pl-10",
      md: "pl-12",
      lg: "pl-16",
      xl: "pl-20"
    }
  },
  label: "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",
  outline: {
    color: {
      gray: "border border-gray-900 dark:border-white",
      default: "border-0",
      light: ""
    },
    off: "",
    on: "flex w-full justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white",
    pill: {
      off: "rounded-md",
      on: "rounded-full"
    }
  },
  pill: {
    off: "rounded-lg",
    on: "rounded-full"
  },
  size: {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
    xl: "px-6 py-3 text-base"
  }
}, Ok = {
  base: "inline-flex",
  position: {
    none: "",
    start: "rounded-r-none focus:ring-2",
    middle: "rounded-none border-l-0 pl-0 focus:ring-2",
    end: "rounded-l-none border-l-0 pl-0 focus:ring-2"
  }
}, Tk = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-center gap-4 p-6",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row"
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700"
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg",
      on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    }
  }
}, Nk = {
  root: {
    base: "relative h-full w-full",
    leftControl: "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl: "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none"
  },
  indicators: {
    active: {
      off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-white dark:bg-gray-800"
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
  },
  item: {
    base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: {
      off: "w-full flex-shrink-0 transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transform cursor-grab snap-center"
    }
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x"
  }
}, Rk = {
  root: {
    base: "h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700",
    color: {
      default: "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-gray-800 dark:focus:ring-cyan-600",
      dark: "text-gray-800 focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800",
      failure: "text-red-900 focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900",
      gray: "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",
      info: "text-cyan-800 focus:ring-cyan-800 dark:ring-offset-gray-800 dark:focus:ring-cyan-800",
      light: "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",
      purple: "text-purple-600 focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600",
      success: "text-green-800 focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800",
      warning: "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400",
      blue: "text-blue-700 focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700",
      cyan: "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600",
      green: "text-green-600 focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600",
      indigo: "text-indigo-700 focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700",
      lime: "text-lime-700 focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700",
      pink: "text-pink-600 focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600",
      red: "text-red-600 focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600",
      teal: "text-teal-600 focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600",
      yellow: "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400"
    }
  }
}, Mk = {
  root: {
    base: "rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    icon: "h-5 w-5"
  }
}, Pk = {
  root: {
    base: "relative"
  },
  popup: {
    root: {
      base: "absolute top-10 z-50 block pt-2",
      inline: "relative top-0 z-auto",
      inner: "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700"
    },
    header: {
      base: "",
      title: "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
      selectors: {
        base: "mb-2 flex justify-between",
        button: {
          base: "rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
          prev: "",
          next: "",
          view: ""
        }
      }
    },
    view: {
      base: "p-1"
    },
    footer: {
      base: "mt-2 flex space-x-2",
      button: {
        base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
        today: "bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700",
        clear: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
      }
    }
  },
  views: {
    days: {
      header: {
        base: "mb-1 grid grid-cols-7",
        title: "h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400"
      },
      items: {
        base: "grid w-64 grid-cols-7",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500"
        }
      }
    },
    months: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500"
        }
      }
    },
    years: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500"
        }
      }
    },
    decades: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500"
        }
      }
    }
  }
}, Ak = {
  arrowIcon: "ml-2 h-4 w-4",
  content: "py-1 focus:outline-none",
  floating: {
    animation: "transition-opacity",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-gray-900 dark:bg-gray-700",
        light: "bg-white",
        auto: "bg-white dark:bg-gray-700"
      },
      placement: "-4px"
    },
    base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
    content: "py-1 text-sm text-gray-700 dark:text-gray-200",
    divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
    header: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
    hidden: "invisible opacity-0",
    item: {
      container: "",
      base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
      icon: "mr-2 h-4 w-4"
    },
    style: {
      dark: "bg-gray-900 text-white dark:bg-gray-700",
      light: "border border-gray-200 bg-white text-gray-900",
      auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
    },
    target: "w-fit"
  },
  inlineWrapper: "flex items-center"
}, Dk = {
  root: {
    base: "flex"
  },
  field: {
    base: "relative w-full",
    input: {
      base: "block w-full overflow-hidden rounded-lg border disabled:cursor-not-allowed disabled:opacity-50",
      sizes: {
        sm: "sm:text-xs",
        md: "text-sm",
        lg: "sm:text-base"
      },
      colors: {
        gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
      }
    }
  }
}, Ik = {
  input: {
    default: {
      filled: {
        sm: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500",
        md: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500"
      },
      outlined: {
        sm: "peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
        md: "peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
      },
      standard: {
        sm: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
        md: "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
      }
    },
    success: {
      filled: {
        sm: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-green-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:bg-gray-700 dark:text-white dark:focus:border-green-500",
        md: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-green-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:bg-gray-700 dark:text-white dark:focus:border-green-500"
      },
      outlined: {
        sm: "peer block w-full appearance-none rounded-lg border border-green-600 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500",
        md: "peer block w-full appearance-none rounded-lg border border-green-600 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500"
      },
      standard: {
        sm: "peer block w-full appearance-none border-0 border-b-2 border-green-600 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500",
        md: "peer block w-full appearance-none border-0 border-b-2 border-green-600 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500"
      }
    },
    error: {
      filled: {
        sm: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-red-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:bg-gray-700 dark:text-white dark:focus:border-red-500",
        md: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-red-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:bg-gray-700 dark:text-white dark:focus:border-red-500"
      },
      outlined: {
        sm: "peer block w-full appearance-none rounded-lg border border-red-600 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500",
        md: "peer block w-full appearance-none rounded-lg border border-red-600 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500"
      },
      standard: {
        sm: "peer block w-full appearance-none border-0 border-b-2 border-red-600 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500",
        md: "peer block w-full appearance-none border-0 border-b-2 border-red-600 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500"
      }
    }
  },
  label: {
    default: {
      filled: {
        sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-xs text-gray-500 transition-transform  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",
        md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
      },
      outlined: {
        sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-xs text-gray-500 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500",
        md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
      },
      standard: {
        sm: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-xs text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",
        md: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
      }
    },
    success: {
      filled: {
        sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500",
        md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500"
      },
      outlined: {
        sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500",
        md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500"
      },
      standard: {
        sm: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-xs text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-green-500",
        md: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-green-500"
      }
    },
    error: {
      filled: {
        sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500",
        md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500"
      },
      outlined: {
        sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500",
        md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500"
      },
      standard: {
        sm: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-red-500",
        md: "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-red-500"
      }
    }
  },
  helperText: {
    default: "mt-2 text-xs text-gray-600 dark:text-gray-400",
    success: "mt-2 text-xs text-green-600 dark:text-green-400",
    error: "mt-2 text-xs text-red-600 dark:text-red-400"
  }
}, Lk = {
  root: {
    base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
    container: "w-full p-6",
    bgDark: "bg-gray-800"
  },
  groupLink: {
    base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
    link: {
      base: "me-4 last:mr-0 md:mr-6",
      href: "hover:underline"
    },
    col: "flex-col space-y-4"
  },
  icon: {
    base: "text-gray-500 dark:hover:text-white",
    size: "h-5 w-5"
  },
  title: {
    base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
  },
  divider: {
    base: "my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8"
  },
  copyright: {
    base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
    href: "ml-1 hover:underline",
    span: "ml-1"
  },
  brand: {
    base: "mb-4 flex items-center sm:mb-0",
    img: "mr-3 h-8",
    span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
  }
}, Fk = {
  root: {
    base: "mt-2 text-sm",
    colors: {
      gray: "text-gray-500 dark:text-gray-400",
      info: "text-cyan-700 dark:text-cyan-800",
      success: "text-green-600 dark:text-green-500",
      failure: "text-red-600 dark:text-red-500",
      warning: "text-yellow-500 dark:text-yellow-600"
    }
  }
}, zk = {
  root: {
    base: "rounded-lg border border-gray-200 bg-gray-100 px-2 py-1.5 text-xs font-semibold text-gray-800 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100",
    icon: "inline-block"
  }
}, Bk = {
  root: {
    base: "text-sm font-medium",
    disabled: "opacity-50",
    colors: {
      default: "text-gray-900 dark:text-white",
      info: "text-cyan-500 dark:text-cyan-600",
      failure: "text-red-700 dark:text-red-500",
      warning: "text-yellow-500 dark:text-yellow-600",
      success: "text-green-700 dark:text-green-500"
    }
  }
}, $k = {
  root: {
    base: "list-inside space-y-1 text-gray-500 dark:text-gray-400",
    ordered: {
      off: "list-disc",
      on: "list-decimal"
    },
    horizontal: "flex list-none flex-wrap items-center justify-center space-x-4 space-y-0",
    unstyled: "list-none",
    nested: "mt-2 ps-5"
  },
  item: {
    withIcon: {
      off: "",
      on: "flex items-center"
    },
    icon: "me-2 h-3.5 w-3.5 flex-shrink-0"
  }
}, jk = {
  root: {
    base: "list-none rounded-lg border border-gray-200 bg-white text-left text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
  },
  item: {
    base: "[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0",
    link: {
      base: "flex w-full items-center border-b border-gray-200 px-4 py-2 dark:border-gray-600",
      active: {
        off: "hover:bg-gray-100 hover:text-cyan-700 focus:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
        on: "bg-cyan-700 text-white dark:bg-gray-800"
      },
      disabled: {
        off: "",
        on: "cursor-not-allowed bg-gray-100 text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:text-gray-900"
      },
      href: {
        off: "",
        on: ""
      },
      icon: "mr-2 h-4 w-4 fill-current"
    }
  }
}, Hk = {
  root: {
    base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
    show: {
      on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
      off: "hidden"
    },
    sizes: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl"
    },
    positions: {
      "top-left": "items-start justify-start",
      "top-center": "items-start justify-center",
      "top-right": "items-start justify-end",
      "center-left": "items-center justify-start",
      center: "items-center justify-center",
      "center-right": "items-center justify-end",
      "bottom-right": "items-end justify-end",
      "bottom-center": "items-end justify-center",
      "bottom-left": "items-end justify-start"
    }
  },
  content: {
    base: "relative h-full w-full p-4 md:h-auto",
    inner: "relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700"
  },
  body: {
    base: "flex-1 overflow-auto p-6",
    popup: "pt-0"
  },
  header: {
    base: "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
    popup: "border-b-0 p-2",
    title: "text-xl font-medium text-gray-900 dark:text-white",
    close: {
      base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
      icon: "h-5 w-5"
    }
  },
  footer: {
    base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
    popup: "border-t"
  }
}, Wk = {
  root: {
    base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
    rounded: {
      on: "rounded",
      off: ""
    },
    bordered: {
      on: "border",
      off: ""
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container"
      }
    }
  },
  brand: {
    base: "flex items-center"
  },
  collapse: {
    base: "w-full md:block md:w-auto",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    hidden: {
      on: "hidden",
      off: ""
    }
  },
  link: {
    base: "block py-2 pl-3 pr-4 md:p-0",
    active: {
      on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
      off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: ""
    }
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
    icon: "h-6 w-6 shrink-0"
  }
}, Vk = {
  base: "",
  layout: {
    table: {
      base: "text-sm text-gray-700 dark:text-gray-400",
      span: "font-semibold text-gray-900 dark:text-white"
    }
  },
  pages: {
    base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
    showIcon: "inline-flex",
    previous: {
      base: "ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-5 w-5"
    },
    next: {
      base: "rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-5 w-5"
    },
    selector: {
      base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      active: "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
      disabled: "cursor-not-allowed opacity-50"
    }
  }
}, Yk = {
  base: "absolute z-20 inline-block w-max max-w-[100vw] bg-white outline-none border border-gray-200 rounded-lg shadow-sm dark:border-gray-600 dark:bg-gray-800",
  content: "z-10 overflow-hidden rounded-[7px]",
  arrow: {
    base: "absolute h-2 w-2 z-0 rotate-45 mix-blend-lighten bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:mix-blend-color",
    placement: "-4px"
  }
}, Uk = {
  base: "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
  label: "mb-1 flex justify-between font-medium dark:text-white",
  bar: "space-x-2 rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100",
  color: {
    dark: "bg-gray-600 dark:bg-gray-300",
    blue: "bg-blue-600",
    red: "bg-red-600 dark:bg-red-500",
    green: "bg-green-600 dark:bg-green-500",
    yellow: "bg-yellow-400",
    indigo: "bg-indigo-600 dark:bg-indigo-500",
    purple: "bg-purple-600 dark:bg-purple-500",
    cyan: "bg-cyan-600",
    gray: "bg-gray-500",
    lime: "bg-lime-600",
    pink: "bg-pink-500",
    teal: "bg-teal-600"
  },
  size: {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
    xl: "h-6"
  }
}, Kk = {
  root: {
    base: "h-4 w-4 border border-gray-300 text-cyan-600 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600"
  }
}, qk = {
  root: {
    base: "flex"
  },
  field: {
    base: "relative w-full",
    input: {
      base: "w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700",
      sizes: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3"
      }
    }
  }
}, Gk = {
  root: {
    base: "flex items-center"
  },
  star: {
    empty: "text-gray-300 dark:text-gray-500",
    filled: "text-yellow-400",
    sizes: {
      sm: "h-5 w-5",
      md: "h-7 w-7",
      lg: "h-10 w-10"
    }
  }
}, Xk = {
  base: "flex items-center",
  label: "text-sm font-medium text-cyan-600 dark:text-cyan-500",
  progress: {
    base: "mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700",
    fill: "h-5 rounded bg-yellow-400",
    label: "text-sm font-medium text-cyan-600 dark:text-cyan-500"
  }
}, Jk = {
  base: "flex",
  addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
  field: {
    base: "relative w-full",
    icon: {
      base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    select: {
      base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      withIcon: {
        on: "pl-10",
        off: ""
      },
      withAddon: {
        on: "rounded-r-lg",
        off: "rounded-lg"
      },
      withShadow: {
        on: "shadow-sm dark:shadow-sm-light",
        off: ""
      },
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "p-2.5 text-sm",
        lg: "p-4 sm:text-base"
      },
      colors: {
        gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
      }
    }
  }
}, Zk = {
  root: {
    base: "h-full",
    collapsed: {
      on: "w-16",
      off: "w-64"
    },
    inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 px-3 py-4 dark:bg-gray-800"
  },
  collapse: {
    button: "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    icon: {
      base: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      open: {
        off: "",
        on: "text-gray-900"
      }
    },
    label: {
      base: "ml-3 flex-1 whitespace-nowrap text-left",
      icon: {
        base: "h-6 w-6 transition delay-0 ease-in-out",
        open: {
          on: "rotate-180",
          off: ""
        }
      }
    },
    list: "space-y-2 py-2"
  },
  cta: {
    base: "mt-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-700",
    color: {
      blue: "bg-cyan-50 dark:bg-cyan-900",
      dark: "bg-dark-50 dark:bg-dark-900",
      failure: "bg-red-50 dark:bg-red-900",
      gray: "bg-alternative-50 dark:bg-alternative-900",
      green: "bg-green-50 dark:bg-green-900",
      light: "bg-light-50 dark:bg-light-900",
      red: "bg-red-50 dark:bg-red-900",
      purple: "bg-purple-50 dark:bg-purple-900",
      success: "bg-green-50 dark:bg-green-900",
      yellow: "bg-yellow-50 dark:bg-yellow-900",
      warning: "bg-yellow-50 dark:bg-yellow-900"
    }
  },
  item: {
    base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    active: "bg-gray-100 dark:bg-gray-700",
    collapsed: {
      insideCollapse: "group w-full pl-8 transition duration-75",
      noIcon: "font-bold"
    },
    content: {
      base: "flex-1 whitespace-nowrap px-3"
    },
    icon: {
      base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      active: "text-gray-700 dark:text-gray-100"
    },
    label: "",
    listItem: ""
  },
  items: {
    base: ""
  },
  itemGroup: {
    base: "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
  },
  logo: {
    base: "mb-5 flex items-center pl-2.5",
    collapsed: {
      on: "hidden",
      off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    },
    img: "mr-3 h-6 sm:h-7"
  }
}, Qk = {
  base: "inline animate-spin text-gray-200",
  color: {
    failure: "fill-red-600",
    gray: "fill-gray-600",
    info: "fill-cyan-600",
    pink: "fill-pink-600",
    purple: "fill-purple-600",
    success: "fill-green-500",
    warning: "fill-yellow-400"
  },
  light: {
    off: {
      base: "dark:text-gray-600",
      color: {
        failure: "",
        gray: "dark:fill-gray-300",
        info: "",
        pink: "",
        purple: "",
        success: "",
        warning: ""
      }
    },
    on: {
      base: "",
      color: {
        failure: "",
        gray: "",
        info: "",
        pink: "",
        purple: "",
        success: "",
        warning: ""
      }
    }
  },
  size: {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-10 w-10"
  }
}, e2 = {
  root: {
    base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
    shadow: "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
    wrapper: "relative"
  },
  body: {
    base: "group/body",
    cell: {
      base: "px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg"
    }
  },
  head: {
    base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
    cell: {
      base: "bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700"
    }
  },
  row: {
    base: "group/row",
    hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
    striped: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
  }
}, t2 = {
  base: "flex flex-col gap-2",
  tablist: {
    base: "flex text-center",
    styles: {
      default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
      underline: "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",
      pills: "flex-wrap space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",
      fullWidth: "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400"
    },
    tabitem: {
      base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-4 focus:ring-cyan-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
      styles: {
        default: {
          base: "rounded-t-lg",
          active: {
            on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
            off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300"
          }
        },
        underline: {
          base: "rounded-t-lg",
          active: {
            on: "active rounded-t-lg border-b-2 border-cyan-600 text-cyan-600 dark:border-cyan-500 dark:text-cyan-500",
            off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
          }
        },
        pills: {
          base: "",
          active: {
            on: "rounded-lg bg-cyan-600 text-white",
            off: "rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
          }
        },
        fullWidth: {
          base: "ml-0 flex w-full rounded-none first:ml-0",
          active: {
            on: "active rounded-none bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white",
            off: "rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          }
        }
      },
      icon: "mr-2 h-5 w-5"
    }
  },
  tabitemcontainer: {
    base: "",
    styles: {
      default: "",
      underline: "",
      pills: "",
      fullWidth: ""
    }
  },
  tabpanel: "py-3"
}, n2 = {
  base: "block w-full rounded-lg border text-sm disabled:cursor-not-allowed disabled:opacity-50",
  colors: {
    gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
    info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
    failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
    warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
    success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
  },
  withShadow: {
    on: "shadow-sm dark:shadow-sm-light",
    off: ""
  }
}, r2 = {
  base: "flex",
  addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
  field: {
    base: "relative w-full",
    icon: {
      base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    rightIcon: {
      base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    input: {
      base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "p-2.5 text-sm",
        lg: "p-4 sm:text-base"
      },
      colors: {
        gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
      },
      withRightIcon: {
        on: "pr-10",
        off: ""
      },
      withIcon: {
        on: "pl-10",
        off: ""
      },
      withAddon: {
        on: "rounded-r-lg",
        off: "rounded-lg"
      },
      withShadow: {
        on: "shadow-sm dark:shadow-sm-light",
        off: ""
      }
    }
  }
}, o2 = {
  root: {
    direction: {
      horizontal: "sm:flex",
      vertical: "relative border-l border-gray-200 dark:border-gray-700"
    }
  },
  item: {
    root: {
      horizontal: "relative mb-6 sm:mb-0",
      vertical: "mb-10 ml-6"
    },
    content: {
      root: {
        base: "mt-3 sm:pr-8"
      },
      body: {
        base: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
      },
      time: {
        base: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
      },
      title: {
        base: "text-lg font-semibold text-gray-900 dark:text-white"
      }
    },
    point: {
      horizontal: "flex items-center",
      line: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
      marker: {
        base: {
          horizontal: "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
          vertical: "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
        },
        icon: {
          base: "h-3 w-3 text-cyan-600 dark:text-cyan-300",
          wrapper: "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900"
        }
      },
      vertical: ""
    }
  }
}, i2 = {
  root: {
    base: "flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",
    closed: "opacity-0 ease-out"
  },
  toggle: {
    base: "-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
    icon: "h-5 w-5 shrink-0"
  }
}, s2 = {
  root: {
    base: "group relative flex items-center rounded-lg focus:outline-none",
    active: {
      on: "cursor-pointer",
      off: "cursor-not-allowed opacity-50"
    },
    label: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
  },
  toggle: {
    base: "rounded-full border group-focus:ring-4 group-focus:ring-cyan-500/25",
    checked: {
      on: "after:translate-x-full after:border-white",
      off: "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
      color: {
        blue: "border-cyan-700 bg-cyan-700",
        dark: "bg-dark-700 border-dark-900",
        failure: "border-red-900 bg-red-700",
        gray: "border-gray-600 bg-gray-500",
        green: "border-green-700 bg-green-600",
        light: "bg-light-700 border-light-900",
        red: "border-red-900 bg-red-700",
        purple: "border-purple-900 bg-purple-700",
        success: "border-green-500 bg-green-500",
        yellow: "border-yellow-400 bg-yellow-400",
        warning: "border-yellow-600 bg-yellow-600",
        cyan: "border-cyan-500 bg-cyan-500",
        lime: "border-lime-400 bg-lime-400",
        indigo: "border-indigo-400 bg-indigo-400",
        teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4",
        info: "border-cyan-600 bg-cyan-600",
        pink: "border-pink-600 bg-pink-600"
      }
    },
    sizes: {
      sm: "h-5 w-9 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4",
      md: "h-6 w-11 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5",
      lg: "h-7 w-14 after:absolute after:left-[4px] after:top-0.5 after:h-6 after:w-6"
    }
  }
}, a2 = {
  target: "w-fit",
  animation: "transition-opacity",
  arrow: {
    base: "absolute z-10 h-2 w-2 rotate-45",
    style: {
      dark: "bg-gray-900 dark:bg-gray-700",
      light: "bg-white",
      auto: "bg-white dark:bg-gray-700"
    },
    placement: "-4px"
  },
  base: "absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium shadow-sm",
  hidden: "invisible opacity-0",
  style: {
    dark: "bg-gray-900 text-white dark:bg-gray-700",
    light: "border border-gray-200 bg-white text-gray-900",
    auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
  },
  content: "relative z-20"
}, l2 = {
  accordion: xk,
  alert: wk,
  avatar: kk,
  badge: Ck,
  blockquote: _k,
  breadcrumb: Sk,
  button: Ek,
  buttonGroup: Ok,
  card: Tk,
  carousel: Nk,
  checkbox: Rk,
  datepicker: Pk,
  darkThemeToggle: Mk,
  dropdown: Ak,
  fileInput: Dk,
  floatingLabel: Ik,
  footer: Lk,
  helperText: Fk,
  kbd: zk,
  label: Bk,
  listGroup: jk,
  list: $k,
  modal: Hk,
  navbar: Wk,
  pagination: Vk,
  popover: Yk,
  progress: Uk,
  radio: Kk,
  rangeSlider: qk,
  rating: Gk,
  ratingAdvanced: Xk,
  select: Jk,
  textInput: r2,
  textarea: n2,
  toggleSwitch: s2,
  sidebar: Zk,
  spinner: Qk,
  table: e2,
  tabs: t2,
  timeline: o2,
  toast: i2,
  tooltip: a2
}, c2 = {
  theme: Xr(l2)
};
function G() {
  return Xr(c2.theme);
}
const Ff = Ye(void 0);
function zf() {
  const t7 = De(Ff);
  if (!t7)
    throw new Error("useAccordionContext should be used within the AccordionPanelContext provider!");
  return t7;
}
const Bf = ({
  children: t7,
  className: e,
  theme: n = {},
  ...r
}) => {
  const { isOpen: o } = zf(), i = j(G().accordion.content, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: I(i.base, e),
      "data-testid": "flowbite-accordion-content",
      hidden: !o,
      ...r,
      children: t7
    }
  );
}, $f = ({ children: t7, ...e }) => {
  const { alwaysOpen: n } = e, [r, o] = ye(e.isOpen), i = n ? {
    ...e,
    isOpen: r,
    setOpen: () => o(!r)
  } : e;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ff.Provider, { value: i, children: t7 });
}, jf = ({
  as: t7 = "h2",
  children: e,
  className: n,
  theme: r = {},
  ...o
}) => {
  const { arrowIcon: i, flush: s, isOpen: a, setOpen: l } = zf(), c = () => typeof l < "u" && l(), d = j(G().accordion.title, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      className: I(d.base, d.flush[s ? "on" : "off"], d.open[a ? "on" : "off"], n),
      onClick: c,
      type: "button",
      ...o,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(t7, { className: d.heading, "data-testid": "flowbite-accordion-heading", children: e }),
        i && /* @__PURE__ */ jsxRuntimeExports.jsx(
          i,
          {
            "aria-hidden": true,
            className: I(d.arrow.base, d.arrow.open[a ? "on" : "off"]),
            "data-testid": "flowbite-accordion-arrow"
          }
        )
      ]
    }
  );
}, Hf = ({
  alwaysOpen: t7 = false,
  arrowIcon: e = Of,
  children: n,
  flush: r = false,
  collapseAll: o = false,
  className: i,
  theme: s = {},
  ...a
}) => {
  const [l, c] = ye(o ? -1 : 0), d = wi(
    () => Kn.map(
      n,
      (f, h) => Vo(f, {
        alwaysOpen: t7,
        arrowIcon: e,
        flush: r,
        isOpen: l === h,
        setOpen: () => c(l === h ? -1 : h)
      })
    ),
    [t7, e, n, r, l]
  ), u = j(G().accordion.root, s);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: I(u.base, u.flush[r ? "on" : "off"], i),
      "data-testid": "flowbite-accordion",
      ...a,
      children: d
    }
  );
};
Hf.displayName = "Accordion";
$f.displayName = "Accordion.Panel";
jf.displayName = "Accordion.Title";
Bf.displayName = "Accordion.Content";
Object.assign(Hf, {
  Panel: $f,
  Title: jf,
  Content: Bf
});
const Wf = ({ children: t7, className: e, theme: n = {}, ...r }) => {
  const o = j(G().avatar.group, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "avatar-group-element", className: I(o.base, e), ...r, children: t7 });
};
Wf.displayName = "Avatar.Group";
const Vf = ({
  className: t7,
  href: e,
  theme: n = {},
  total: r,
  ...o
}) => {
  const i = j(G().avatar.groupCounter, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: e, className: I(i.base, t7), ...o, children: [
    "+",
    r
  ] });
};
Vf.displayName = "Avatar.GroupCounter";
const Yf = ({
  alt: t7 = "",
  bordered: e = false,
  children: n,
  className: r,
  color: o = "light",
  img: i,
  placeholderInitials: s = "",
  rounded: a = false,
  size: l = "md",
  stacked: c = false,
  status: d,
  statusPosition: u = "top-left",
  theme: f = {},
  ...h
}) => {
  const g = j(G().avatar, f), p = I(
    g.root.img.base,
    e && g.root.bordered,
    e && g.root.color[o],
    a && g.root.rounded,
    c && g.root.stacked,
    g.root.img.on,
    g.root.size[l]
  ), m = {
    className: I(p, g.root.img.on),
    "data-testid": "flowbite-avatar-img"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: I(g.root.base, r), "data-testid": "flowbite-avatar", ...h, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      i ? typeof i == "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: t7, src: i, ...m }) : i({ alt: t7, ...m }) : s ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: I(
            g.root.img.off,
            g.root.initials.base,
            c && g.root.stacked,
            e && g.root.bordered,
            e && g.root.color[o],
            g.root.size[l],
            a && g.root.rounded
          ),
          "data-testid": "flowbite-avatar-initials-placeholder",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: I(g.root.initials.text), "data-testid": "flowbite-avatar-initials-placeholder-text", children: s })
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: I(p, g.root.img.off), "data-testid": "flowbite-avatar-img", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          className: g.root.img.placeholder,
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z", clipRule: "evenodd" })
        }
      ) }),
      d && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          "data-testid": "flowbite-avatar-status",
          className: I(
            g.root.status.base,
            g.root.status[d],
            g.root.statusPosition[u]
          )
        }
      )
    ] }),
    n && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: n })
  ] });
};
Yf.displayName = "Avatar";
Object.assign(Yf, {
  Group: Wf,
  Counter: Vf
});
const Uf = ({
  children: t7,
  color: e = "info",
  href: n,
  icon: r,
  size: o = "xs",
  className: i,
  theme: s = {},
  ...a
}) => {
  const l = j(G().badge, s), c = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: I(
        l.root.base,
        l.root.color[e],
        l.root.size[o],
        l.icon[r ? "on" : "off"],
        i
      ),
      "data-testid": "flowbite-badge",
      ...a,
      children: [
        r && /* @__PURE__ */ jsxRuntimeExports.jsx(r, { "aria-hidden": true, className: l.icon.size[o], "data-testid": "flowbite-badge-icon" }),
        t7 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t7 })
      ]
    }
  );
  return n ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: l.root.href, href: n, children: /* @__PURE__ */ jsxRuntimeExports.jsx(c, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(c, {});
};
Uf.displayName = "Badge";
const Kf = ({
  className: t7,
  color: e = "info",
  light: n,
  size: r = "md",
  theme: o = {},
  ...i
}) => {
  const s = j(G().spinner, o);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { role: "status", ...i, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      fill: "none",
      viewBox: "0 0 100 101",
      className: I(
        s.base,
        s.color[e],
        s.light[n ? "on" : "off"].base,
        s.light[n ? "on" : "off"].color[e],
        s.size[r],
        t7
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: "currentFill"
          }
        )
      ]
    }
  ) });
};
Kf.displayName = "Spinner";
const Na = ue(
  ({ children: t7, as: e, href: n, type: r = "button", ...o }, i) => Mt(e || (n ? "a" : "button"), { ref: i, href: n, type: r, ...o }, t7)
);
Na.displayName = "ButtonBaseComponent";
const qf = (t7, e, n) => Kn.map(t7, (r, o) => ip(r) ? r.props.children ? Vo(r, {
  ...r.props,
  children: qf(r.props.children, e, n),
  positionInGroup: pd(o, Kn.count(t7))
}) : Vo(r, {
  outline: e,
  pill: n,
  positionInGroup: pd(o, Kn.count(t7))
}) : r), pd = (t7, e) => t7 === 0 ? "start" : t7 === e - 1 ? "end" : "middle", Gf = ({
  children: t7,
  className: e,
  outline: n,
  pill: r,
  theme: o = {},
  ...i
}) => {
  const s = wi(() => qf(t7, n, r), [t7, n, r]), a = j(G().buttonGroup, o);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: I(a.base, e), role: "group", ...i, children: s });
};
Gf.displayName = "Button.Group";
const Xf = ue(
  ({
    children: t7,
    className: e,
    color: n = "info",
    disabled: r,
    fullSized: o,
    isProcessing: i = false,
    processingLabel: s = "Loading...",
    processingSpinner: a,
    gradientDuoTone: l,
    gradientMonochrome: c,
    label: d,
    outline: u = false,
    pill: f = false,
    positionInGroup: h = "none",
    size: g = "md",
    theme: p = {},
    ...m
  }, v) => {
    const { buttonGroup: y, button: C } = G(), x = j(C, p), w = m;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Na,
      {
        ref: v,
        disabled: r,
        className: I(
          x.base,
          r && x.disabled,
          !l && !c && x.color[n],
          l && !c && x.gradientDuoTone[l],
          !l && c && x.gradient[c],
          u && (x.outline.color[n] ?? x.outline.color.default),
          x.pill[f ? "on" : "off"],
          o && x.fullSized,
          y.position[h],
          e
        ),
        ...w,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: I(
              x.inner.base,
              x.outline[u ? "on" : "off"],
              x.outline.pill[u && f ? "on" : "off"],
              x.size[g],
              u && !x.outline.color[n] && x.inner.outline,
              i && x.isProcessing,
              i && x.inner.isProcessingPadding[g],
              x.inner.position[h]
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              i && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: I(x.spinnerSlot, x.spinnerLeftPosition[g]), children: a || /* @__PURE__ */ jsxRuntimeExports.jsx(Kf, { size: g }) }),
              typeof t7 < "u" ? t7 : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-testid": "flowbite-button-label", className: I(x.label), children: i ? s : d })
            ] })
          }
        )
      }
    );
  }
);
Xf.displayName = "Button";
const Jf = Object.assign(Xf, {
  Group: Gf
}), Zf = ({ children: t7, ...e }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Jf, { onClick: (r) => {
  const i = r.target.closest('[role="banner"]');
  i == null || i.remove();
}, ...e, children: t7 });
Zf.displayName = "Banner.CollapseButton";
const Qf = ({ children: t7, ...e }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "flowbite-banner", role: "banner", tabIndex: -1, ...e, children: t7 });
Qf.displayName = "Banner";
Object.assign(Qf, {
  CollapseButton: Zf
});
const eh = ue(
  ({ children: t7, className: e, href: n, icon: r, theme: o = {}, ...i }, s) => {
    const a = typeof n < "u", l = a ? "a" : "span", c = j(G().breadcrumb.item, o);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: I(c.base, e), ...i, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mf, { "aria-hidden": true, className: c.chevron, "data-testid": "flowbite-breadcrumb-separator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        l,
        {
          ref: s,
          className: c.href[a ? "on" : "off"],
          "data-testid": "flowbite-breadcrumb-item",
          href: n,
          children: [
            r && /* @__PURE__ */ jsxRuntimeExports.jsx(r, { "aria-hidden": true, className: c.icon }),
            t7
          ]
        }
      )
    ] });
  }
);
eh.displayName = "Breadcrumb.Item";
const th = ({
  children: t7,
  className: e,
  theme: n = {},
  ...r
}) => {
  const o = j(G().breadcrumb.root, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", className: I(o.base, e), ...r, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: o.list, children: t7 }) });
};
th.displayName = "Breadcrumb";
Object.assign(th, {
  Item: eh
});
var nh = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t7) {
  (function() {
    var e = {}.hasOwnProperty;
    function n() {
      for (var i = "", s = 0; s < arguments.length; s++) {
        var a = arguments[s];
        a && (i = o(i, r(a)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return n.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var s = "";
      for (var a in i)
        e.call(i, a) && i[a] && (s = o(s, a));
      return s;
    }
    function o(i, s) {
      return s ? i ? i + " " + s : i + s : i;
    }
    t7.exports ? (n.default = n, t7.exports = n) : window.classNames = n;
  })();
})(nh);
var d2 = nh.exports;
const u2 = /* @__PURE__ */ uf(d2);
var Ra = { exports: {} };
function rh(t7, e = 100, n = {}) {
  if (typeof t7 != "function")
    throw new TypeError(`Expected the first parameter to be a function, got \`${typeof t7}\`.`);
  if (e < 0)
    throw new RangeError("`wait` must not be negative.");
  const { immediate: r } = typeof n == "boolean" ? { immediate: n } : n;
  let o, i, s, a, l;
  function c() {
    const u = Date.now() - a;
    if (u < e && u >= 0)
      s = setTimeout(c, e - u);
    else if (s = void 0, !r) {
      const f = o, h = i;
      o = void 0, i = void 0, l = t7.apply(f, h);
    }
  }
  const d = function(...u) {
    if (o && this !== o)
      throw new Error("Debounced method called with different contexts.");
    o = this, i = u, a = Date.now();
    const f = r && !s;
    if (s || (s = setTimeout(c, e)), f) {
      const h = o, g = i;
      o = void 0, i = void 0, l = t7.apply(h, g);
    }
    return l;
  };
  return d.clear = () => {
    s && (clearTimeout(s), s = void 0);
  }, d.flush = () => {
    if (!s)
      return;
    const u = o, f = i;
    o = void 0, i = void 0, l = t7.apply(u, f), clearTimeout(s), s = void 0;
  }, d;
}
Ra.exports.debounce = rh;
Ra.exports = rh;
var f2 = Ra.exports;
const h2 = /* @__PURE__ */ uf(f2);
var g2 = Object.defineProperty, p2 = (t7, e, n) => e in t7 ? g2(t7, e, { enumerable: true, configurable: true, writable: true, value: n }) : t7[e] = n, Me = (t7, e, n) => (p2(t7, typeof e != "symbol" ? e + "" : e, n), n);
const m2 = 300, b2 = 0;
class y2 extends sp {
  constructor(e) {
    super(e), Me(this, "container"), Me(this, "scrolling"), Me(this, "started"), Me(this, "pressed"), Me(this, "isMobile", false), Me(this, "internal"), Me(this, "scrollLeft"), Me(this, "scrollTop"), Me(this, "clientX"), Me(this, "clientY"), Me(this, "onEndScroll", () => {
      this.scrolling = false, !this.pressed && this.started && this.processEnd();
    }), Me(this, "onScroll", () => {
      const n = this.container.current;
      (n.scrollLeft !== this.scrollLeft || n.scrollTop !== this.scrollTop) && (this.scrolling = true, this.processScroll(), this.onEndScroll());
    }), Me(this, "onTouchStart", (n) => {
      const { nativeMobileScroll: r } = this.props;
      if (this.isDraggable(n.target))
        if (this.internal = true, r && this.scrolling)
          this.pressed = true;
        else {
          const o = n.touches[0];
          this.processClick(o.clientX, o.clientY), !r && this.props.stopPropagation && n.stopPropagation();
        }
    }), Me(this, "onTouchEnd", () => {
      const { nativeMobileScroll: n } = this.props;
      this.pressed && (this.started && (!this.scrolling || !n) ? this.processEnd() : this.pressed = false, this.forceUpdate());
    }), Me(this, "onTouchMove", (n) => {
      const { nativeMobileScroll: r } = this.props;
      if (this.pressed && (!r || !this.isMobile)) {
        const o = n.touches[0];
        o && this.processMove(o.clientX, o.clientY), n.preventDefault(), this.props.stopPropagation && n.stopPropagation();
      }
    }), Me(this, "onMouseDown", (n) => {
      var r, o;
      this.isDraggable(n.target) && this.isScrollable() && (this.internal = true, ((o = (r = this.props) == null ? void 0 : r.buttons) == null ? void 0 : o.indexOf(n.button)) !== -1 && (this.processClick(n.clientX, n.clientY), n.preventDefault(), this.props.stopPropagation && n.stopPropagation()));
    }), Me(this, "onMouseMove", (n) => {
      this.pressed && (this.processMove(n.clientX, n.clientY), n.preventDefault(), this.props.stopPropagation && n.stopPropagation());
    }), Me(this, "onMouseUp", (n) => {
      this.pressed && (this.started ? this.processEnd() : (this.internal = false, this.pressed = false, this.forceUpdate(), this.props.onClick && this.props.onClick(n)), n.preventDefault(), this.props.stopPropagation && n.stopPropagation());
    }), this.container = H.createRef(), this.onEndScroll = h2(this.onEndScroll, m2), this.scrolling = false, this.started = false, this.pressed = false, this.internal = false, this.getRef = this.getRef.bind(this);
  }
  componentDidMount() {
    const { nativeMobileScroll: e } = this.props, n = this.container.current;
    window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onTouchMove, { passive: false }), window.addEventListener("touchend", this.onTouchEnd), n.addEventListener("touchstart", this.onTouchStart, {
      passive: false
    }), n.addEventListener("mousedown", this.onMouseDown, {
      passive: false
    }), e && (this.isMobile = this.isMobileDevice(), this.isMobile && this.forceUpdate());
  }
  componentWillUnmount() {
    window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
  }
  getElement() {
    return this.container.current;
  }
  isMobileDevice() {
    return typeof window.orientation < "u" || navigator.userAgent.indexOf("IEMobile") !== -1;
  }
  isDraggable(e) {
    const n = this.props.ignoreElements;
    if (n) {
      const r = e.closest(n);
      return r === null || r.contains(this.getElement());
    } else
      return true;
  }
  isScrollable() {
    const e = this.container.current;
    return e && (e.scrollWidth > e.clientWidth || e.scrollHeight > e.clientHeight);
  }
  processClick(e, n) {
    const r = this.container.current;
    this.scrollLeft = r == null ? void 0 : r.scrollLeft, this.scrollTop = r == null ? void 0 : r.scrollTop, this.clientX = e, this.clientY = n, this.pressed = true;
  }
  processStart(e = true) {
    const { onStartScroll: n } = this.props;
    this.started = true, e && document.body.classList.add("cursor-grab"), n && n({
      external: !this.internal
    }), this.forceUpdate();
  }
  // Process native scroll (scrollbar, mobile scroll)
  processScroll() {
    if (this.started) {
      const { onScroll: e } = this.props;
      e && e({
        external: !this.internal
      });
    } else
      this.processStart(false);
  }
  // Process non-native scroll
  processMove(e, n) {
    const { horizontal: r, vertical: o, activationDistance: i, onScroll: s } = this.props, a = this.container.current;
    this.started ? (r && (a.scrollLeft -= e - this.clientX), o && (a.scrollTop -= n - this.clientY), s && s({ external: !this.internal }), this.clientX = e, this.clientY = n, this.scrollLeft = a.scrollLeft, this.scrollTop = a.scrollTop) : (r && Math.abs(e - this.clientX) > i || o && Math.abs(n - this.clientY) > i) && (this.clientX = e, this.clientY = n, this.processStart());
  }
  processEnd() {
    const { onEndScroll: e } = this.props;
    this.container.current && e && e({
      external: !this.internal
    }), this.pressed = false, this.started = false, this.scrolling = false, this.internal = false, document.body.classList.remove("cursor-grab"), this.forceUpdate();
  }
  getRef(e) {
    [this.container, this.props.innerRef].forEach((n) => {
      n && (typeof n == "function" ? n(e) : n.current = e);
    });
  }
  render() {
    const { children: e, draggingClassName: n, className: r, style: o, hideScrollbars: i } = this.props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: u2(r, this.pressed && n, {
          "!scroll-auto [&>*]:pointer-events-none [&>*]:cursor-grab": this.pressed,
          "overflow-auto": this.isMobile,
          "overflow-hidden !overflow-x-hidden [overflow:-moz-scrollbars-none] [scrollbar-width:none]": i,
          "[&::-webkit-scrollbar]:[-webkit-appearance:none !important] [&::-webkit-scrollbar]:!hidden [&::-webkit-scrollbar]:!h-0 [&::-webkit-scrollbar]:!w-0 [&::-webkit-scrollbar]:!bg-transparent": i
        }),
        style: o,
        ref: this.getRef,
        onScroll: this.onScroll,
        children: e
      }
    );
  }
}
Me(y2, "defaultProps", {
  nativeMobileScroll: true,
  hideScrollbars: true,
  activationDistance: 10,
  vertical: true,
  horizontal: true,
  stopPropagation: false,
  style: {},
  buttons: [b2]
});
const v2 = ue(
  ({ className: t7, color: e = "default", theme: n = {}, ...r }, o) => {
    const i = j(G().checkbox, n);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: o,
        type: "checkbox",
        className: I(i.root.base, i.root.color[e], t7),
        ...r
      }
    );
  }
);
v2.displayName = "Checkbox";
const io = ({
  children: t7,
  className: e,
  color: n = "default",
  theme: r = {},
  value: o,
  ...i
}) => {
  const s = j(G().helperText, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: I(s.root.base, s.root.colors[n], e), ...i, children: o ?? t7 ?? "" });
};
io.displayName = "HelperText";
const Ma = ue(
  ({
    addon: t7,
    className: e,
    color: n = "gray",
    helperText: r,
    icon: o,
    rightIcon: i,
    shadow: s,
    sizing: a = "md",
    theme: l = {},
    type: c = "text",
    ...d
  }, u) => {
    const f = j(G().textInput, l);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: I(f.base, e), children: [
        t7 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: f.addon, children: t7 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: f.field.base, children: [
          o && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: f.field.icon.base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(o, { className: f.field.icon.svg }) }),
          i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "right-icon", className: f.field.rightIcon.base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(i, { className: f.field.rightIcon.svg }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: I(
                f.field.input.base,
                f.field.input.colors[n],
                f.field.input.sizes[a],
                f.field.input.withIcon[o ? "on" : "off"],
                f.field.input.withRightIcon[i ? "on" : "off"],
                f.field.input.withAddon[t7 ? "on" : "off"],
                f.field.input.withShadow[s ? "on" : "off"]
              ),
              type: c,
              ...d,
              ref: u
            }
          )
        ] })
      ] }),
      r && /* @__PURE__ */ jsxRuntimeExports.jsx(io, { color: n, children: r })
    ] });
  }
);
Ma.displayName = "TextInput";
const oh = Ye(void 0);
function Fi() {
  const t7 = De(oh);
  if (!t7)
    throw new Error("useDatePickerContext should be used within the DatePickerContext provider!");
  return t7;
}
var we = /* @__PURE__ */ ((t7) => (t7[t7.Days = 0] = "Days", t7[t7.Months = 1] = "Months", t7[t7.Years = 2] = "Years", t7[t7.Decades = 3] = "Decades", t7))(we || {}), ih = /* @__PURE__ */ ((t7) => (t7[t7.Sunday = 0] = "Sunday", t7[t7.Monday = 1] = "Monday", t7[t7.Tuesday = 2] = "Tuesday", t7[t7.Wednesday = 3] = "Wednesday", t7[t7.Thursday = 4] = "Thursday", t7[t7.Friday = 5] = "Friday", t7[t7.Saturday = 6] = "Saturday", t7))(ih || {});
const so = (t7, e, n) => {
  const r = new Date(t7.getFullYear(), t7.getMonth(), t7.getDate()).getTime();
  if (e && n) {
    const o = new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime(), i = new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime();
    return r >= o && r <= i;
  }
  if (e) {
    const o = new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime();
    return r >= o;
  }
  if (n) {
    const o = new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime();
    return r <= o;
  }
  return true;
}, zi = (t7, e) => (t7 = new Date(t7.getFullYear(), t7.getMonth(), t7.getDate()), e = new Date(e.getFullYear(), e.getMonth(), e.getDate()), t7.getTime() === e.getTime()), x2 = (t7, e, n) => (so(t7, e, n) || (e && t7 < e ? t7 = e : n && t7 > n && (t7 = n)), t7), w2 = (t7, e) => {
  const n = new Date(t7.getFullYear(), t7.getMonth(), 1);
  let o = n.getDay() - e;
  return o < 0 && (o += 7), Pa(n, -o);
}, k2 = (t7, e) => {
  const n = [], r = /* @__PURE__ */ new Date(0);
  r.setDate(r.getDate() - r.getDay() + e);
  const o = new Intl.DateTimeFormat(t7, { weekday: "short" });
  for (let i = 0; i < 7; i++)
    n.push(o.format(Pa(r, i)));
  return n;
}, Pa = (t7, e) => {
  const n = new Date(t7);
  return n.setDate(n.getDate() + e), n;
}, C2 = (t7, e) => {
  const n = new Date(t7);
  return n.setMonth(n.getMonth() + e), n;
}, Wn = (t7, e) => {
  const n = new Date(t7);
  return n.setFullYear(n.getFullYear() + e), n;
}, Lr = (t7, e, n) => {
  let r = {
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  return n && (r = n), new Intl.DateTimeFormat(t7, r).format(e);
}, Vn = (t7, e) => {
  const n = t7.getFullYear();
  return Math.floor(n / e) * e;
}, _2 = (t7, e) => {
  const n = t7.getFullYear(), r = e + 9;
  return n >= e && n <= r;
}, S2 = ({ theme: t7 = {} }) => {
  const {
    theme: e,
    weekStart: n,
    minDate: r,
    maxDate: o,
    viewDate: i,
    selectedDate: s,
    changeSelectedDate: a,
    language: l
  } = Fi(), c = j(e.views.days, t7), d = k2(l, n), u = w2(i, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: c.header.base, children: d.map((f, h) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: c.header.title, children: f }, h)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: c.items.base, children: [...Array(42)].map((f, h) => {
      const g = Pa(u, h), p = Lr(l, g, { day: "numeric" }), m = zi(s, g), v = !so(g, r, o);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          disabled: v,
          type: "button",
          className: I(
            c.items.item.base,
            m && c.items.item.selected,
            v && c.items.item.disabled
          ),
          onClick: () => {
            v || a(g, true);
          },
          children: p
        },
        h
      );
    }) })
  ] });
}, E2 = ({ theme: t7 = {} }) => {
  const { theme: e, selectedDate: n, viewDate: r, setViewDate: o, setView: i } = Fi(), s = j(e.views.decades, t7);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s.items.base, children: [...Array(12)].map((a, l) => {
    const d = Vn(r, 100) - 10 + l * 10, u = new Date(d, 0, 1), f = Wn(u, 9), h = _2(r, d), g = !so(r, u, f);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        disabled: g,
        type: "button",
        className: I(
          s.items.item.base,
          h && s.items.item.selected,
          g && s.items.item.disabled
        ),
        onClick: () => {
          g || (o(Wn(r, d - n.getFullYear())), i(we.Years));
        },
        children: d
      },
      l
    );
  }) });
}, O2 = ({ theme: t7 = {} }) => {
  const {
    theme: e,
    minDate: n,
    maxDate: r,
    selectedDate: o,
    viewDate: i,
    language: s,
    setViewDate: a,
    setView: l
  } = Fi(), c = j(e.views.months, t7);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: c.items.base, children: [...Array(12)].map((d, u) => {
    const f = new Date(i.getTime());
    f.setMonth(u);
    const h = Lr(s, f, { month: "short" }), g = zi(o, f), p = !so(f, n, r);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        disabled: p,
        type: "button",
        className: I(
          c.items.item.base,
          g && c.items.item.selected,
          p && c.items.item.disabled
        ),
        onClick: () => {
          p || (a(f), l(we.Days));
        },
        children: h
      },
      u
    );
  }) });
}, T2 = ({ theme: t7 = {} }) => {
  const { theme: e, selectedDate: n, minDate: r, maxDate: o, viewDate: i, setViewDate: s, setView: a } = Fi(), l = j(e.views.years, t7);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: l.items.base, children: [...Array(12)].map((c, d) => {
    const f = Vn(i, 10) - 1 + d * 1, h = new Date(i.getTime());
    h.setFullYear(f);
    const g = zi(n, h), p = !so(h, r, o);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        disabled: p,
        type: "button",
        className: I(
          l.items.item.base,
          g && l.items.item.selected,
          p && l.items.item.disabled
        ),
        onClick: () => {
          p || (s(h), a(we.Months));
        },
        children: f
      },
      d
    );
  }) });
}, N2 = ({
  title: t7,
  open: e,
  inline: n = false,
  autoHide: r = true,
  // Hide when selected the day
  showClearButton: o = true,
  labelClearButton: i = "Clear",
  showTodayButton: s = true,
  labelTodayButton: a = "Today",
  defaultDate: l = /* @__PURE__ */ new Date(),
  minDate: c,
  maxDate: d,
  language: u = "en",
  weekStart: f = ih.Sunday,
  className: h,
  theme: g = {},
  onSelectedDateChanged: p,
  ...m
}, v) => {
  const y = j(G().datepicker, g);
  l = x2(l, c, d);
  const [C, x] = ye(e), [w, _] = ye(we.Days), [O, N] = ye(l), [T, S] = ye(l), A = Yt(null), M = Yt(null), P = ($, B) => {
    N($), p && p($), r && w === we.Days && B == true && !n && x(false);
  }, E = () => {
    P(l, true), l && S(l);
  };
  Vd(v, () => ({
    focus() {
      var $;
      ($ = A.current) == null || $.focus();
    },
    clear() {
      E();
    }
  }));
  const R = ($) => {
    switch ($) {
      case we.Decades:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(E2, { theme: y.views.decades });
      case we.Years:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(T2, { theme: y.views.years });
      case we.Months:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(O2, { theme: y.views.months });
      case we.Days:
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(S2, { theme: y.views.days });
    }
  }, D = () => {
    switch (w) {
      case we.Days:
        return we.Months;
      case we.Months:
        return we.Years;
      case we.Years:
        return we.Decades;
    }
    return w;
  }, L = () => {
    switch (w) {
      case we.Decades:
        return `${Vn(T, 100)} - ${Vn(T, 100) + 90}`;
      case we.Years:
        return `${Vn(T, 10)} - ${Vn(T, 10) + 9}`;
      case we.Months:
        return Lr(u, T, { year: "numeric" });
      case we.Days:
      default:
        return Lr(u, T, { month: "long", year: "numeric" });
    }
  }, F = ($, B, W) => {
    switch ($) {
      case we.Days:
        return new Date(C2(B, W));
      case we.Months:
        return new Date(Wn(B, W));
      case we.Years:
        return new Date(Wn(B, W * 10));
      case we.Decades:
        return new Date(Wn(B, W * 100));
      default:
        return new Date(Wn(B, W * 10));
    }
  };
  return Ze(() => {
    const $ = (B) => {
      var U, K;
      const W = (U = M == null ? void 0 : M.current) == null ? void 0 : U.contains(B.target), V = (K = A == null ? void 0 : A.current) == null ? void 0 : K.contains(B.target);
      !W && !V && x(false);
    };
    return document.addEventListener("mousedown", $), () => {
      document.removeEventListener("mousedown", $);
    };
  }, [A, M, x]), /* @__PURE__ */ jsxRuntimeExports.jsx(
    oh.Provider,
    {
      value: {
        theme: y,
        language: u,
        minDate: c,
        maxDate: d,
        weekStart: f,
        isOpen: C,
        setIsOpen: x,
        view: w,
        setView: _,
        viewDate: T,
        setViewDate: S,
        selectedDate: O,
        setSelectedDate: N,
        changeSelectedDate: P
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: I(y.root.base, h), children: [
        !n && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ma,
          {
            theme: y.root.input,
            icon: L1,
            ref: A,
            onFocus: () => {
              zi(T, O) || S(O), x(true);
            },
            value: O && Lr(u, O),
            readOnly: true,
            ...m
          }
        ),
        (C || n) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: M, className: I(y.popup.root.base, n && y.popup.root.inline), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: y.popup.root.inner, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: y.popup.header.base, children: [
            t7 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: y.popup.header.title, children: t7 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: y.popup.header.selectors.base, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: I(
                    y.popup.header.selectors.button.base,
                    y.popup.header.selectors.button.prev
                  ),
                  onClick: () => S(F(w, T, -1)),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(D1, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: I(
                    y.popup.header.selectors.button.base,
                    y.popup.header.selectors.button.view
                  ),
                  onClick: () => _(D()),
                  children: L()
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: I(
                    y.popup.header.selectors.button.base,
                    y.popup.header.selectors.button.next
                  ),
                  onClick: () => S(F(w, T, 1)),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(I1, {})
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: y.popup.view.base, children: R(w) }),
          (o || s) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: y.popup.footer.base, children: [
            s && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: I(y.popup.footer.button.base, y.popup.footer.button.today),
                onClick: () => {
                  const $ = /* @__PURE__ */ new Date();
                  P($, true), S($);
                },
                children: a
              }
            ),
            o && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: I(y.popup.footer.button.base, y.popup.footer.button.clear),
                onClick: () => {
                  P(l, true), l && S(l);
                },
                children: i
              }
            )
          ] })
        ] }) })
      ] })
    }
  );
}, R2 = ue(N2);
R2.displayName = "Datepicker";
function Bi() {
  return typeof window < "u";
}
function Ln(t7) {
  return sh(t7) ? (t7.nodeName || "").toLowerCase() : "#document";
}
function rt(t7) {
  var e;
  return (t7 == null || (e = t7.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Ft(t7) {
  var e;
  return (e = (sh(t7) ? t7.ownerDocument : t7.document) || window.document) == null ? void 0 : e.documentElement;
}
function sh(t7) {
  return Bi() ? t7 instanceof Node || t7 instanceof rt(t7).Node : false;
}
function pe(t7) {
  return Bi() ? t7 instanceof Element || t7 instanceof rt(t7).Element : false;
}
function Ve(t7) {
  return Bi() ? t7 instanceof HTMLElement || t7 instanceof rt(t7).HTMLElement : false;
}
function Fs(t7) {
  return !Bi() || typeof ShadowRoot > "u" ? false : t7 instanceof ShadowRoot || t7 instanceof rt(t7).ShadowRoot;
}
function ao(t7) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = mt(t7);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(o);
}
function M2(t7) {
  return ["table", "td", "th"].includes(Ln(t7));
}
function $i(t7) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t7.matches(e);
    } catch {
      return false;
    }
  });
}
function Aa(t7) {
  const e = Da(), n = pe(t7) ? mt(t7) : t7;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : false) || (n.containerType ? n.containerType !== "normal" : false) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !e && (n.filter ? n.filter !== "none" : false) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function P2(t7) {
  let e = qt(t7);
  for (; Ve(e) && !un(e); ) {
    if (Aa(e))
      return e;
    if ($i(e))
      return null;
    e = qt(e);
  }
  return null;
}
function Da() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function un(t7) {
  return ["html", "body", "#document"].includes(Ln(t7));
}
function mt(t7) {
  return rt(t7).getComputedStyle(t7);
}
function ji(t7) {
  return pe(t7) ? {
    scrollLeft: t7.scrollLeft,
    scrollTop: t7.scrollTop
  } : {
    scrollLeft: t7.scrollX,
    scrollTop: t7.scrollY
  };
}
function qt(t7) {
  if (Ln(t7) === "html")
    return t7;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t7.assignedSlot || // DOM Element detected.
    t7.parentNode || // ShadowRoot detected.
    Fs(t7) && t7.host || // Fallback.
    Ft(t7)
  );
  return Fs(e) ? e.host : e;
}
function ah(t7) {
  const e = qt(t7);
  return un(e) ? t7.ownerDocument ? t7.ownerDocument.body : t7.body : Ve(e) && ao(e) ? e : ah(e);
}
function ln(t7, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = true);
  const o = ah(t7), i = o === ((r = t7.ownerDocument) == null ? void 0 : r.body), s = rt(o);
  if (i) {
    const a = zs(s);
    return e.concat(s, s.visualViewport || [], ao(o) ? o : [], a && n ? ln(a) : []);
  }
  return e.concat(o, ln(o, [], n));
}
function zs(t7) {
  return t7.parent && Object.getPrototypeOf(t7.parent) ? t7.frameElement : null;
}
function Nt(t7) {
  let e = t7.activeElement;
  for (; ((n = e) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
    var n;
    e = e.shadowRoot.activeElement;
  }
  return e;
}
function Oe(t7, e) {
  if (!t7 || !e)
    return false;
  const n = e.getRootNode == null ? void 0 : e.getRootNode();
  if (t7.contains(e))
    return true;
  if (n && Fs(n)) {
    let r = e;
    for (; r; ) {
      if (t7 === r)
        return true;
      r = r.parentNode || r.host;
    }
  }
  return false;
}
function Ia() {
  const t7 = navigator.userAgentData;
  return t7 != null && t7.platform ? t7.platform : navigator.platform;
}
function lh() {
  const t7 = navigator.userAgentData;
  return t7 && Array.isArray(t7.brands) ? t7.brands.map((e) => {
    let {
      brand: n,
      version: r
    } = e;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function ch(t7) {
  return t7.mozInputSource === 0 && t7.isTrusted ? true : Bs() && t7.pointerType ? t7.type === "click" && t7.buttons === 1 : t7.detail === 0 && !t7.pointerType;
}
function La(t7) {
  return A2() ? false : !Bs() && t7.width === 0 && t7.height === 0 || Bs() && t7.width === 1 && t7.height === 1 && t7.pressure === 0 && t7.detail === 0 && t7.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  t7.width < 1 && t7.height < 1 && t7.pressure === 0 && t7.detail === 0 && t7.pointerType === "touch";
}
function Fa() {
  return /apple/i.test(navigator.vendor);
}
function Bs() {
  const t7 = /android/i;
  return t7.test(Ia()) || t7.test(lh());
}
function dh() {
  return Ia().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function A2() {
  return lh().includes("jsdom/");
}
function ui(t7, e) {
  const n = ["mouse", "pen"];
  return e || n.push("", void 0), n.includes(t7);
}
function D2(t7) {
  return "nativeEvent" in t7;
}
function I2(t7) {
  return t7.matches("html,body");
}
function Xe(t7) {
  return (t7 == null ? void 0 : t7.ownerDocument) || document;
}
function ls(t7, e) {
  if (e == null)
    return false;
  if ("composedPath" in t7)
    return t7.composedPath().includes(e);
  const n = t7;
  return n.target != null && e.contains(n.target);
}
function rn(t7) {
  return "composedPath" in t7 ? t7.composedPath()[0] : t7.target;
}
const L2 = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function za(t7) {
  return Ve(t7) && t7.matches(L2);
}
function $e(t7) {
  t7.preventDefault(), t7.stopPropagation();
}
function uh(t7) {
  return t7 ? t7.getAttribute("role") === "combobox" && za(t7) : false;
}
const F2 = ["top", "right", "bottom", "left"], md = ["start", "end"], bd = /* @__PURE__ */ F2.reduce((t7, e) => t7.concat(e, e + "-" + md[0], e + "-" + md[1]), []), nr = Math.min, En = Math.max, fi = Math.round, Yn = Math.floor, At = (t7) => ({
  x: t7,
  y: t7
}), z2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, B2 = {
  start: "end",
  end: "start"
};
function $s(t7, e, n) {
  return En(t7, nr(e, n));
}
function cr(t7, e) {
  return typeof t7 == "function" ? t7(e) : t7;
}
function Gt(t7) {
  return t7.split("-")[0];
}
function Dt(t7) {
  return t7.split("-")[1];
}
function fh(t7) {
  return t7 === "x" ? "y" : "x";
}
function Ba(t7) {
  return t7 === "y" ? "height" : "width";
}
function Hi(t7) {
  return ["top", "bottom"].includes(Gt(t7)) ? "y" : "x";
}
function $a(t7) {
  return fh(Hi(t7));
}
function hh(t7, e, n) {
  n === void 0 && (n = false);
  const r = Dt(t7), o = $a(t7), i = Ba(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = gi(s)), [s, gi(s)];
}
function $2(t7) {
  const e = gi(t7);
  return [hi(t7), e, hi(e)];
}
function hi(t7) {
  return t7.replace(/start|end/g, (e) => B2[e]);
}
function j2(t7, e, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (t7) {
    case "top":
    case "bottom":
      return n ? e ? o : r : e ? r : o;
    case "left":
    case "right":
      return e ? i : s;
    default:
      return [];
  }
}
function H2(t7, e, n, r) {
  const o = Dt(t7);
  let i = j2(Gt(t7), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), e && (i = i.concat(i.map(hi)))), i;
}
function gi(t7) {
  return t7.replace(/left|right|bottom|top/g, (e) => z2[e]);
}
function W2(t7) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t7
  };
}
function gh(t7) {
  return typeof t7 != "number" ? W2(t7) : {
    top: t7,
    right: t7,
    bottom: t7,
    left: t7
  };
}
function pi(t7) {
  const {
    x: e,
    y: n,
    width: r,
    height: o
  } = t7;
  return {
    width: r,
    height: o,
    top: n,
    left: e,
    right: e + r,
    bottom: n + o,
    x: e,
    y: n
  };
}
function yd(t7, e, n) {
  let {
    reference: r,
    floating: o
  } = t7;
  const i = Hi(e), s = $a(e), a = Ba(s), l = Gt(e), c = i === "y", d = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Dt(e)) {
    case "start":
      h[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const V2 = async (t7, e, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let c = await s.getElementRects({
    reference: t7,
    floating: e,
    strategy: o
  }), {
    x: d,
    y: u
  } = yd(c, r, l), f = r, h = {}, g = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: m,
      fn: v
    } = a[p], {
      x: y,
      y: C,
      data: x,
      reset: w
    } = await v({
      x: d,
      y: u,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: h,
      rects: c,
      platform: s,
      elements: {
        reference: t7,
        floating: e
      }
    });
    d = y ?? d, u = C ?? u, h = {
      ...h,
      [m]: {
        ...h[m],
        ...x
      }
    }, w && g <= 50 && (g++, typeof w == "object" && (w.placement && (f = w.placement), w.rects && (c = w.rects === true ? await s.getElementRects({
      reference: t7,
      floating: e,
      strategy: o
    }) : w.rects), {
      x: d,
      y: u
    } = yd(c, f, l)), p = -1);
  }
  return {
    x: d,
    y: u,
    placement: f,
    strategy: o,
    middlewareData: h
  };
};
async function ja(t7, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = t7, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: f = false,
    padding: h = 0
  } = cr(e, t7), g = gh(h), m = a[f ? u === "floating" ? "reference" : "floating" : u], v = pi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(m))) == null || n ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), y = u === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), x = await (i.isElement == null ? void 0 : i.isElement(C)) ? await (i.getScale == null ? void 0 : i.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = pi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: C,
    strategy: l
  }) : y);
  return {
    top: (v.top - w.top + g.top) / x.y,
    bottom: (w.bottom - v.bottom + g.bottom) / x.y,
    left: (v.left - w.left + g.left) / x.x,
    right: (w.right - v.right + g.right) / x.x
  };
}
const Y2 = (t7) => ({
  name: "arrow",
  options: t7,
  async fn(e) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = e, {
      element: c,
      padding: d = 0
    } = cr(t7, e) || {};
    if (c == null)
      return {};
    const u = gh(d), f = {
      x: n,
      y: r
    }, h = $a(o), g = Ba(h), p = await s.getDimensions(c), m = h === "y", v = m ? "top" : "left", y = m ? "bottom" : "right", C = m ? "clientHeight" : "clientWidth", x = i.reference[g] + i.reference[h] - f[h] - i.floating[g], w = f[h] - i.reference[h], _ = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let O = _ ? _[C] : 0;
    (!O || !await (s.isElement == null ? void 0 : s.isElement(_))) && (O = a.floating[C] || i.floating[g]);
    const N = x / 2 - w / 2, T = O / 2 - p[g] / 2 - 1, S = nr(u[v], T), A = nr(u[y], T), M = S, P = O - p[g] - A, E = O / 2 - p[g] / 2 + N, R = $s(M, E, P), D = !l.arrow && Dt(o) != null && E !== R && i.reference[g] / 2 - (E < M ? S : A) - p[g] / 2 < 0, L = D ? E < M ? E - M : E - P : 0;
    return {
      [h]: f[h] + L,
      data: {
        [h]: R,
        centerOffset: E - R - L,
        ...D && {
          alignmentOffset: L
        }
      },
      reset: D
    };
  }
});
function U2(t7, e, n) {
  return (t7 ? [...n.filter((o) => Dt(o) === t7), ...n.filter((o) => Dt(o) !== t7)] : n.filter((o) => Gt(o) === o)).filter((o) => t7 ? Dt(o) === t7 || (e ? hi(o) !== o : false) : true);
}
const K2 = function(t7) {
  return t7 === void 0 && (t7 = {}), {
    name: "autoPlacement",
    options: t7,
    async fn(e) {
      var n, r, o;
      const {
        rects: i,
        middlewareData: s,
        placement: a,
        platform: l,
        elements: c
      } = e, {
        crossAxis: d = false,
        alignment: u,
        allowedPlacements: f = bd,
        autoAlignment: h = true,
        ...g
      } = cr(t7, e), p = u !== void 0 || f === bd ? U2(u || null, h, f) : f, m = await ja(e, g), v = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, y = p[v];
      if (y == null)
        return {};
      const C = hh(y, i, await (l.isRTL == null ? void 0 : l.isRTL(c.floating)));
      if (a !== y)
        return {
          reset: {
            placement: p[0]
          }
        };
      const x = [m[Gt(y)], m[C[0]], m[C[1]]], w = [...((r = s.autoPlacement) == null ? void 0 : r.overflows) || [], {
        placement: y,
        overflows: x
      }], _ = p[v + 1];
      if (_)
        return {
          data: {
            index: v + 1,
            overflows: w
          },
          reset: {
            placement: _
          }
        };
      const O = w.map((S) => {
        const A = Dt(S.placement);
        return [S.placement, A && d ? (
          // Check along the mainAxis and main crossAxis side.
          S.overflows.slice(0, 2).reduce((M, P) => M + P, 0)
        ) : (
          // Check only the mainAxis.
          S.overflows[0]
        ), S.overflows];
      }).sort((S, A) => S[1] - A[1]), T = ((o = O.filter((S) => S[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Dt(S[0]) ? 2 : 3
      ).every((A) => A <= 0))[0]) == null ? void 0 : o[0]) || O[0][0];
      return T !== a ? {
        data: {
          index: v + 1,
          overflows: w
        },
        reset: {
          placement: T
        }
      } : {};
    }
  };
}, q2 = function(t7) {
  return t7 === void 0 && (t7 = {}), {
    name: "flip",
    options: t7,
    async fn(e) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: c
      } = e, {
        mainAxis: d = true,
        crossAxis: u = true,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: p = true,
        ...m
      } = cr(t7, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const v = Gt(o), y = Gt(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), x = f || (y || !p ? [gi(a)] : $2(a));
      !f && g !== "none" && x.push(...H2(a, p, g, C));
      const w = [a, ...x], _ = await ja(e, m), O = [];
      let N = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && O.push(_[v]), u) {
        const M = hh(o, s, C);
        O.push(_[M[0]], _[M[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: O
      }], !O.every((M) => M <= 0)) {
        var T, S;
        const M = (((T = i.flip) == null ? void 0 : T.index) || 0) + 1, P = w[M];
        if (P)
          return {
            data: {
              index: M,
              overflows: N
            },
            reset: {
              placement: P
            }
          };
        let E = (S = N.filter((R) => R.overflows[0] <= 0).sort((R, D) => R.overflows[1] - D.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!E)
          switch (h) {
            case "bestFit": {
              var A;
              const R = (A = N.map((D) => [D.placement, D.overflows.filter((L) => L > 0).reduce((L, F) => L + F, 0)]).sort((D, L) => D[1] - L[1])[0]) == null ? void 0 : A[0];
              R && (E = R);
              break;
            }
            case "initialPlacement":
              E = a;
              break;
          }
        if (o !== E)
          return {
            reset: {
              placement: E
            }
          };
      }
      return {};
    }
  };
};
async function G2(t7, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t7, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Gt(n), a = Dt(n), l = Hi(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, d = i && l ? -1 : 1, u = cr(e, t7);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: g
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return a && typeof g == "number" && (h = a === "end" ? g * -1 : g), l ? {
    x: h * d,
    y: f * c
  } : {
    x: f * c,
    y: h * d
  };
}
const X2 = function(t7) {
  return t7 === void 0 && (t7 = 0), {
    name: "offset",
    options: t7,
    async fn(e) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = e, l = await G2(e, t7);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, J2 = function(t7) {
  return t7 === void 0 && (t7 = {}), {
    name: "shift",
    options: t7,
    async fn(e) {
      const {
        x: n,
        y: r,
        placement: o
      } = e, {
        mainAxis: i = true,
        crossAxis: s = false,
        limiter: a = {
          fn: (m) => {
            let {
              x: v,
              y
            } = m;
            return {
              x: v,
              y
            };
          }
        },
        ...l
      } = cr(t7, e), c = {
        x: n,
        y: r
      }, d = await ja(e, l), u = Hi(Gt(o)), f = fh(u);
      let h = c[f], g = c[u];
      if (i) {
        const m = f === "y" ? "top" : "left", v = f === "y" ? "bottom" : "right", y = h + d[m], C = h - d[v];
        h = $s(y, h, C);
      }
      if (s) {
        const m = u === "y" ? "top" : "left", v = u === "y" ? "bottom" : "right", y = g + d[m], C = g - d[v];
        g = $s(y, g, C);
      }
      const p = a.fn({
        ...e,
        [f]: h,
        [u]: g
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r
        }
      };
    }
  };
};
function ph(t7) {
  const e = mt(t7);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = Ve(t7), i = o ? t7.offsetWidth : n, s = o ? t7.offsetHeight : r, a = fi(n) !== i || fi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Ha(t7) {
  return pe(t7) ? t7 : t7.contextElement;
}
function Gn(t7) {
  const e = Ha(t7);
  if (!Ve(e))
    return At(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = ph(e);
  let s = (i ? fi(n.width) : n.width) / r, a = (i ? fi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Z2 = /* @__PURE__ */ At(0);
function mh(t7) {
  const e = rt(t7);
  return !Da() || !e.visualViewport ? Z2 : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Q2(t7, e, n) {
  return e === void 0 && (e = false), !n || e && n !== rt(t7) ? false : e;
}
function Pn(t7, e, n, r) {
  e === void 0 && (e = false), n === void 0 && (n = false);
  const o = t7.getBoundingClientRect(), i = Ha(t7);
  let s = At(1);
  e && (r ? pe(r) && (s = Gn(r)) : s = Gn(t7));
  const a = Q2(i, n, r) ? mh(i) : At(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, d = o.width / s.x, u = o.height / s.y;
  if (i) {
    const f = rt(i), h = r && pe(r) ? rt(r) : r;
    let g = f, p = zs(g);
    for (; p && r && h !== g; ) {
      const m = Gn(p), v = p.getBoundingClientRect(), y = mt(p), C = v.left + (p.clientLeft + parseFloat(y.paddingLeft)) * m.x, x = v.top + (p.clientTop + parseFloat(y.paddingTop)) * m.y;
      l *= m.x, c *= m.y, d *= m.x, u *= m.y, l += C, c += x, g = rt(p), p = zs(g);
    }
  }
  return pi({
    width: d,
    height: u,
    x: l,
    y: c
  });
}
function Wa(t7, e) {
  const n = ji(t7).scrollLeft;
  return e ? e.left + n : Pn(Ft(t7)).left + n;
}
function bh(t7, e, n) {
  n === void 0 && (n = false);
  const r = t7.getBoundingClientRect(), o = r.left + e.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Wa(t7, r)
  )), i = r.top + e.scrollTop;
  return {
    x: o,
    y: i
  };
}
function e5(t7) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: o
  } = t7;
  const i = o === "fixed", s = Ft(r), a = e ? $i(e.floating) : false;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = At(1);
  const d = At(0), u = Ve(r);
  if ((u || !u && !i) && ((Ln(r) !== "body" || ao(s)) && (l = ji(r)), Ve(r))) {
    const h = Pn(r);
    c = Gn(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const f = s && !u && !i ? bh(s, l, true) : At(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + f.y
  };
}
function t5(t7) {
  return Array.from(t7.getClientRects());
}
function n5(t7) {
  const e = Ft(t7), n = ji(t7), r = t7.ownerDocument.body, o = En(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = En(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Wa(t7);
  const a = -n.scrollTop;
  return mt(r).direction === "rtl" && (s += En(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function r5(t7, e) {
  const n = rt(t7), r = Ft(t7), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = Da();
    (!c || c && e === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function o5(t7, e) {
  const n = Pn(t7, true, e === "fixed"), r = n.top + t7.clientTop, o = n.left + t7.clientLeft, i = Ve(t7) ? Gn(t7) : At(1), s = t7.clientWidth * i.x, a = t7.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function vd(t7, e, n) {
  let r;
  if (e === "viewport")
    r = r5(t7, n);
  else if (e === "document")
    r = n5(Ft(t7));
  else if (pe(e))
    r = o5(e, n);
  else {
    const o = mh(t7);
    r = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return pi(r);
}
function yh(t7, e) {
  const n = qt(t7);
  return n === e || !pe(n) || un(n) ? false : mt(n).position === "fixed" || yh(n, e);
}
function i5(t7, e) {
  const n = e.get(t7);
  if (n)
    return n;
  let r = ln(t7, [], false).filter((a) => pe(a) && Ln(a) !== "body"), o = null;
  const i = mt(t7).position === "fixed";
  let s = i ? qt(t7) : t7;
  for (; pe(s) && !un(s); ) {
    const a = mt(s), l = Aa(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ao(s) && !l && yh(t7, s)) ? r = r.filter((d) => d !== s) : o = a, s = qt(s);
  }
  return e.set(t7, r), r;
}
function s5(t7) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t7;
  const s = [...n === "clippingAncestors" ? $i(e) ? [] : i5(e, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, d) => {
    const u = vd(e, d, o);
    return c.top = En(u.top, c.top), c.right = nr(u.right, c.right), c.bottom = nr(u.bottom, c.bottom), c.left = En(u.left, c.left), c;
  }, vd(e, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function a5(t7) {
  const {
    width: e,
    height: n
  } = ph(t7);
  return {
    width: e,
    height: n
  };
}
function l5(t7, e, n) {
  const r = Ve(e), o = Ft(e), i = n === "fixed", s = Pn(t7, true, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = At(0);
  if (r || !r && !i)
    if ((Ln(e) !== "body" || ao(o)) && (a = ji(e)), r) {
      const f = Pn(e, true, i, e);
      l.x = f.x + e.clientLeft, l.y = f.y + e.clientTop;
    } else o && (l.x = Wa(o));
  const c = o && !r && !i ? bh(o, a) : At(0), d = s.left + a.scrollLeft - l.x - c.x, u = s.top + a.scrollTop - l.y - c.y;
  return {
    x: d,
    y: u,
    width: s.width,
    height: s.height
  };
}
function cs(t7) {
  return mt(t7).position === "static";
}
function xd(t7, e) {
  if (!Ve(t7) || mt(t7).position === "fixed")
    return null;
  if (e)
    return e(t7);
  let n = t7.offsetParent;
  return Ft(t7) === n && (n = n.ownerDocument.body), n;
}
function vh(t7, e) {
  const n = rt(t7);
  if ($i(t7))
    return n;
  if (!Ve(t7)) {
    let o = qt(t7);
    for (; o && !un(o); ) {
      if (pe(o) && !cs(o))
        return o;
      o = qt(o);
    }
    return n;
  }
  let r = xd(t7, e);
  for (; r && M2(r) && cs(r); )
    r = xd(r, e);
  return r && un(r) && cs(r) && !Aa(r) ? n : r || P2(t7) || n;
}
const c5 = async function(t7) {
  const e = this.getOffsetParent || vh, n = this.getDimensions, r = await n(t7.floating);
  return {
    reference: l5(t7.reference, await e(t7.floating), t7.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function d5(t7) {
  return mt(t7).direction === "rtl";
}
const u5 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: e5,
  getDocumentElement: Ft,
  getClippingRect: s5,
  getOffsetParent: vh,
  getElementRects: c5,
  getClientRects: t5,
  getDimensions: a5,
  getScale: Gn,
  isElement: pe,
  isRTL: d5
};
function xh(t7, e) {
  return t7.x === e.x && t7.y === e.y && t7.width === e.width && t7.height === e.height;
}
function f5(t7, e) {
  let n = null, r;
  const o = Ft(t7);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = false), l === void 0 && (l = 1), i();
    const c = t7.getBoundingClientRect(), {
      left: d,
      top: u,
      width: f,
      height: h
    } = c;
    if (a || e(), !f || !h)
      return;
    const g = Yn(u), p = Yn(o.clientWidth - (d + f)), m = Yn(o.clientHeight - (u + h)), v = Yn(d), C = {
      rootMargin: -g + "px " + -p + "px " + -m + "px " + -v + "px",
      threshold: En(0, nr(1, l)) || 1
    };
    let x = true;
    function w(_) {
      const O = _[0].intersectionRatio;
      if (O !== l) {
        if (!x)
          return s();
        O ? s(false, O) : r = setTimeout(() => {
          s(false, 1e-7);
        }, 1e3);
      }
      O === 1 && !xh(c, t7.getBoundingClientRect()) && s(), x = false;
    }
    try {
      n = new IntersectionObserver(w, {
        ...C,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(w, C);
    }
    n.observe(t7);
  }
  return s(true), i;
}
function wh(t7, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = true,
    ancestorResize: i = true,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = false
  } = r, c = Ha(t7), d = o || i ? [...c ? ln(c) : [], ...ln(e)] : [];
  d.forEach((v) => {
    o && v.addEventListener("scroll", n, {
      passive: true
    }), i && v.addEventListener("resize", n);
  });
  const u = c && a ? f5(c, n) : null;
  let f = -1, h = null;
  s && (h = new ResizeObserver((v) => {
    let [y] = v;
    y && y.target === c && h && (h.unobserve(e), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var C;
      (C = h) == null || C.observe(e);
    })), n();
  }), c && !l && h.observe(c), h.observe(e));
  let g, p = l ? Pn(t7) : null;
  l && m();
  function m() {
    const v = Pn(t7);
    p && !xh(p, v) && n(), p = v, g = requestAnimationFrame(m);
  }
  return n(), () => {
    var v;
    d.forEach((y) => {
      o && y.removeEventListener("scroll", n), i && y.removeEventListener("resize", n);
    }), u == null || u(), (v = h) == null || v.disconnect(), h = null, l && cancelAnimationFrame(g);
  };
}
const h5 = X2, g5 = K2, p5 = J2, m5 = q2, wd = Y2, b5 = (t7, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: u5,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return V2(t7, e, {
    ...o,
    platform: i
  });
};
var Wo = typeof document < "u" ? Vs : Ze;
function mi(t7, e) {
  if (t7 === e)
    return true;
  if (typeof t7 != typeof e)
    return false;
  if (typeof t7 == "function" && t7.toString() === e.toString())
    return true;
  let n, r, o;
  if (t7 && e && typeof t7 == "object") {
    if (Array.isArray(t7)) {
      if (n = t7.length, n !== e.length) return false;
      for (r = n; r-- !== 0; )
        if (!mi(t7[r], e[r]))
          return false;
      return true;
    }
    if (o = Object.keys(t7), n = o.length, n !== Object.keys(e).length)
      return false;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(e, o[r]))
        return false;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && t7.$$typeof) && !mi(t7[i], e[i]))
        return false;
    }
    return true;
  }
  return t7 !== t7 && e !== e;
}
function kh(t7) {
  return typeof window > "u" ? 1 : (t7.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function kd(t7, e) {
  const n = kh(t7);
  return Math.round(e * n) / n;
}
function ds(t7) {
  const e = k.useRef(t7);
  return Wo(() => {
    e.current = t7;
  }), e;
}
function y5(t7) {
  t7 === void 0 && (t7 = {});
  const {
    placement: e = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = true,
    whileElementsMounted: l,
    open: c
  } = t7, [d, u] = k.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: e,
    middlewareData: {},
    isPositioned: false
  }), [f, h] = k.useState(r);
  mi(f, r) || h(r);
  const [g, p] = k.useState(null), [m, v] = k.useState(null), y = k.useCallback((F) => {
    F !== _.current && (_.current = F, p(F));
  }, []), C = k.useCallback((F) => {
    F !== O.current && (O.current = F, v(F));
  }, []), x = i || g, w = s || m, _ = k.useRef(null), O = k.useRef(null), N = k.useRef(d), T = l != null, S = ds(l), A = ds(o), M = ds(c), P = k.useCallback(() => {
    if (!_.current || !O.current)
      return;
    const F = {
      placement: e,
      strategy: n,
      middleware: f
    };
    A.current && (F.platform = A.current), b5(_.current, O.current, F).then(($) => {
      const B = {
        ...$,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: M.current !== false
      };
      E.current && !mi(N.current, B) && (N.current = B, ap.flushSync(() => {
        u(B);
      }));
    });
  }, [f, e, n, A, M]);
  Wo(() => {
    c === false && N.current.isPositioned && (N.current.isPositioned = false, u((F) => ({
      ...F,
      isPositioned: false
    })));
  }, [c]);
  const E = k.useRef(false);
  Wo(() => (E.current = true, () => {
    E.current = false;
  }), []), Wo(() => {
    if (x && (_.current = x), w && (O.current = w), x && w) {
      if (S.current)
        return S.current(x, w, P);
      P();
    }
  }, [x, w, P, S, T]);
  const R = k.useMemo(() => ({
    reference: _,
    floating: O,
    setReference: y,
    setFloating: C
  }), [y, C]), D = k.useMemo(() => ({
    reference: x,
    floating: w
  }), [x, w]), L = k.useMemo(() => {
    const F = {
      position: n,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return F;
    const $ = kd(D.floating, d.x), B = kd(D.floating, d.y);
    return a ? {
      ...F,
      transform: "translate(" + $ + "px, " + B + "px)",
      ...kh(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: $,
      top: B
    };
  }, [n, a, D.floating, d.x, d.y]);
  return k.useMemo(() => ({
    ...d,
    update: P,
    refs: R,
    elements: D,
    floatingStyles: L
  }), [d, P, R, D, L]);
}
const v5 = (t7) => {
  function e(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: t7,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof t7 == "function" ? t7(n) : t7;
      return r && e(r) ? r.current != null ? wd({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? wd({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, x5 = (t7, e) => ({
  ...h5(t7),
  options: [t7, e]
}), w5 = (t7, e) => ({
  ...p5(t7),
  options: [t7, e]
}), k5 = (t7, e) => ({
  ...m5(t7),
  options: [t7, e]
}), C5 = (t7, e) => ({
  ...g5(t7),
  options: [t7, e]
}), _5 = (t7, e) => ({
  ...v5(t7),
  options: [t7, e]
});
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var S5 = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], bi = /* @__PURE__ */ S5.join(","), Ch = typeof Element > "u", rr = Ch ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, yi = !Ch && Element.prototype.getRootNode ? function(t7) {
  var e;
  return t7 == null || (e = t7.getRootNode) === null || e === void 0 ? void 0 : e.call(t7);
} : function(t7) {
  return t7 == null ? void 0 : t7.ownerDocument;
}, vi = function t3(e, n) {
  var r;
  n === void 0 && (n = true);
  var o = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "inert"), i = o === "" || o === "true", s = i || n && e && t3(e.parentNode);
  return s;
}, E5 = function(e) {
  var n, r = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "contenteditable");
  return r === "" || r === "true";
}, O5 = function(e, n, r) {
  if (vi(e))
    return [];
  var o = Array.prototype.slice.apply(e.querySelectorAll(bi));
  return n && rr.call(e, bi) && o.unshift(e), o = o.filter(r), o;
}, T5 = function t4(e, n, r) {
  for (var o = [], i = Array.from(e); i.length; ) {
    var s = i.shift();
    if (!vi(s, false))
      if (s.tagName === "SLOT") {
        var a = s.assignedElements(), l = a.length ? a : s.children, c = t4(l, true, r);
        r.flatten ? o.push.apply(o, c) : o.push({
          scopeParent: s,
          candidates: c
        });
      } else {
        var d = rr.call(s, bi);
        d && r.filter(s) && (n || !e.includes(s)) && o.push(s);
        var u = s.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(s), f = !vi(u, false) && (!r.shadowRootFilter || r.shadowRootFilter(s));
        if (u && f) {
          var h = t4(u === true ? s.children : u.children, true, r);
          r.flatten ? o.push.apply(o, h) : o.push({
            scopeParent: s,
            candidates: h
          });
        } else
          i.unshift.apply(i, s.children);
      }
  }
  return o;
}, _h = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, Sh = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || E5(e)) && !_h(e) ? 0 : e.tabIndex;
}, N5 = function(e, n) {
  var r = Sh(e);
  return r < 0 && n && !_h(e) ? 0 : r;
}, R5 = function(e, n) {
  return e.tabIndex === n.tabIndex ? e.documentOrder - n.documentOrder : e.tabIndex - n.tabIndex;
}, Eh = function(e) {
  return e.tagName === "INPUT";
}, M5 = function(e) {
  return Eh(e) && e.type === "hidden";
}, P5 = function(e) {
  var n = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, A5 = function(e, n) {
  for (var r = 0; r < e.length; r++)
    if (e[r].checked && e[r].form === n)
      return e[r];
}, D5 = function(e) {
  if (!e.name)
    return true;
  var n = e.form || yi(e), r = function(a) {
    return n.querySelectorAll('input[type="radio"][name="' + a + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = r(window.CSS.escape(e.name));
  else
    try {
      o = r(e.name);
    } catch (s) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), false;
    }
  var i = A5(o, e.form);
  return !i || i === e;
}, I5 = function(e) {
  return Eh(e) && e.type === "radio";
}, L5 = function(e) {
  return I5(e) && !D5(e);
}, F5 = function(e) {
  var n, r = e && yi(e), o = (n = r) === null || n === void 0 ? void 0 : n.host, i = false;
  if (r && r !== e) {
    var s, a, l;
    for (i = !!((s = o) !== null && s !== void 0 && (a = s.ownerDocument) !== null && a !== void 0 && a.contains(o) || e != null && (l = e.ownerDocument) !== null && l !== void 0 && l.contains(e)); !i && o; ) {
      var c, d, u;
      r = yi(o), o = (c = r) === null || c === void 0 ? void 0 : c.host, i = !!((d = o) !== null && d !== void 0 && (u = d.ownerDocument) !== null && u !== void 0 && u.contains(o));
    }
  }
  return i;
}, Cd = function(e) {
  var n = e.getBoundingClientRect(), r = n.width, o = n.height;
  return r === 0 && o === 0;
}, z5 = function(e, n) {
  var r = n.displayCheck, o = n.getShadowRoot;
  if (getComputedStyle(e).visibility === "hidden")
    return true;
  var i = rr.call(e, "details>summary:first-of-type"), s = i ? e.parentElement : e;
  if (rr.call(s, "details:not([open]) *"))
    return true;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof o == "function") {
      for (var a = e; e; ) {
        var l = e.parentElement, c = yi(e);
        if (l && !l.shadowRoot && o(l) === true)
          return Cd(e);
        e.assignedSlot ? e = e.assignedSlot : !l && c !== e.ownerDocument ? e = c.host : e = l;
      }
      e = a;
    }
    if (F5(e))
      return !e.getClientRects().length;
    if (r !== "legacy-full")
      return true;
  } else if (r === "non-zero-area")
    return Cd(e);
  return false;
}, B5 = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var n = e.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var o = n.children.item(r);
          if (o.tagName === "LEGEND")
            return rr.call(n, "fieldset[disabled] *") ? true : !o.contains(e);
        }
        return true;
      }
      n = n.parentElement;
    }
  return false;
}, $5 = function(e, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  vi(n) || M5(n) || z5(n, e) || // For a details element with a summary, the summary element gets the focus
  P5(n) || B5(n));
}, js = function(e, n) {
  return !(L5(n) || Sh(n) < 0 || !$5(e, n));
}, j5 = function(e) {
  var n = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, H5 = function t6(e) {
  var n = [], r = [];
  return e.forEach(function(o, i) {
    var s = !!o.scopeParent, a = s ? o.scopeParent : o, l = N5(a, s), c = s ? t6(o.candidates) : a;
    l === 0 ? s ? n.push.apply(n, c) : n.push(a) : r.push({
      documentOrder: i,
      tabIndex: l,
      item: o,
      isScope: s,
      content: c
    });
  }), r.sort(R5).reduce(function(o, i) {
    return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o;
  }, []).concat(n);
}, Wi = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = T5([e], n.includeContainer, {
    filter: js.bind(null, n),
    flatten: false,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: j5
  }) : r = O5(e, n.includeContainer, js.bind(null, n)), H5(r);
}, W5 = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return rr.call(e, bi) === false ? false : js(n, e);
};
function Oh(t7) {
  return k.useMemo(() => t7.every((e) => e == null) ? null : (e) => {
    t7.forEach((n) => {
      typeof n == "function" ? n(e) : n != null && (n.current = e);
    });
  }, t7);
}
const V5 = k.useInsertionEffect, Y5 = V5 || ((t7) => t7());
function Rt(t7) {
  const e = k.useRef(() => {
  });
  return Y5(() => {
    e.current = t7;
  }), k.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return e.current == null ? void 0 : e.current(...r);
  }, []);
}
const Va = "ArrowUp", lo = "ArrowDown", or = "ArrowLeft", dr = "ArrowRight";
function Ro(t7, e, n) {
  return Math.floor(t7 / e) !== n;
}
function Fr(t7, e) {
  return e < 0 || e >= t7.current.length;
}
function us(t7, e) {
  return Ke(t7, {
    disabledIndices: e
  });
}
function _d(t7, e) {
  return Ke(t7, {
    decrement: true,
    startingIndex: t7.current.length,
    disabledIndices: e
  });
}
function Ke(t7, e) {
  let {
    startingIndex: n = -1,
    decrement: r = false,
    disabledIndices: o,
    amount: i = 1
  } = e === void 0 ? {} : e;
  const s = t7.current, a = o ? (c) => o.includes(c) : (c) => {
    const d = s[c];
    return d == null || d.hasAttribute("disabled") || d.getAttribute("aria-disabled") === "true";
  };
  let l = n;
  do
    l += r ? -i : i;
  while (l >= 0 && l <= s.length - 1 && a(l));
  return l;
}
function U5(t7, e) {
  let {
    event: n,
    orientation: r,
    loop: o,
    cols: i,
    disabledIndices: s,
    minIndex: a,
    maxIndex: l,
    prevIndex: c,
    stopEvent: d = false
  } = e, u = c;
  if (n.key === Va) {
    if (d && $e(n), c === -1)
      u = l;
    else if (u = Ke(t7, {
      startingIndex: u,
      amount: i,
      decrement: true,
      disabledIndices: s
    }), o && (c - i < a || u < 0)) {
      const f = c % i, h = l % i, g = l - (h - f);
      h === f ? u = l : u = h > f ? g : g - i;
    }
    Fr(t7, u) && (u = c);
  }
  if (n.key === lo && (d && $e(n), c === -1 ? u = a : (u = Ke(t7, {
    startingIndex: c,
    amount: i,
    disabledIndices: s
  }), o && c + i > l && (u = Ke(t7, {
    startingIndex: c % i - i,
    amount: i,
    disabledIndices: s
  }))), Fr(t7, u) && (u = c)), r === "both") {
    const f = Yn(c / i);
    n.key === dr && (d && $e(n), c % i !== i - 1 ? (u = Ke(t7, {
      startingIndex: c,
      disabledIndices: s
    }), o && Ro(u, i, f) && (u = Ke(t7, {
      startingIndex: c - c % i - 1,
      disabledIndices: s
    }))) : o && (u = Ke(t7, {
      startingIndex: c - c % i - 1,
      disabledIndices: s
    })), Ro(u, i, f) && (u = c)), n.key === or && (d && $e(n), c % i !== 0 ? (u = Ke(t7, {
      startingIndex: c,
      disabledIndices: s,
      decrement: true
    }), o && Ro(u, i, f) && (u = Ke(t7, {
      startingIndex: c + (i - c % i),
      decrement: true,
      disabledIndices: s
    }))) : o && (u = Ke(t7, {
      startingIndex: c + (i - c % i),
      decrement: true,
      disabledIndices: s
    })), Ro(u, i, f) && (u = c));
    const h = Yn(l / i) === f;
    Fr(t7, u) && (o && h ? u = n.key === or ? l : Ke(t7, {
      startingIndex: c - c % i - 1,
      disabledIndices: s
    }) : u = c);
  }
  return u;
}
function K5(t7, e, n) {
  const r = [];
  let o = 0;
  return t7.forEach((i, s) => {
    let {
      width: a,
      height: l
    } = i;
    let c = false;
    for (n && (o = 0); !c; ) {
      const d = [];
      for (let u = 0; u < a; u++)
        for (let f = 0; f < l; f++)
          d.push(o + u + f * e);
      o % e + a <= e && d.every((u) => r[u] == null) ? (d.forEach((u) => {
        r[u] = s;
      }), c = true) : o++;
    }
  }), [...r];
}
function q5(t7, e, n, r, o) {
  if (t7 === -1) return -1;
  const i = n.indexOf(t7);
  switch (o) {
    case "tl":
      return i;
    case "tr":
      return i + e[t7].width - 1;
    case "bl":
      return i + (e[t7].height - 1) * r;
    case "br":
      return n.lastIndexOf(t7);
  }
}
function G5(t7, e) {
  return e.flatMap((n, r) => t7.includes(n) ? [r] : []);
}
let Sd = 0;
function Ht(t7, e) {
  e === void 0 && (e = {});
  const {
    preventScroll: n = false,
    cancelPrevious: r = true,
    sync: o = false
  } = e;
  r && cancelAnimationFrame(Sd);
  const i = () => t7 == null ? void 0 : t7.focus({
    preventScroll: n
  });
  o ? i() : Sd = requestAnimationFrame(i);
}
var be = typeof document < "u" ? Vs : Ze;
function X5(t7, e) {
  const n = t7.compareDocumentPosition(e);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function J5(t7, e) {
  if (t7.size !== e.size)
    return false;
  for (const [n, r] of t7.entries())
    if (r !== e.get(n))
      return false;
  return true;
}
const Th = /* @__PURE__ */ k.createContext({
  register: () => {
  },
  unregister: () => {
  },
  map: /* @__PURE__ */ new Map(),
  elementsRef: {
    current: []
  }
});
function Z5(t7) {
  let {
    children: e,
    elementsRef: n,
    labelsRef: r
  } = t7;
  const [o, i] = k.useState(() => /* @__PURE__ */ new Map()), s = k.useCallback((l) => {
    i((c) => new Map(c).set(l, null));
  }, []), a = k.useCallback((l) => {
    i((c) => {
      const d = new Map(c);
      return d.delete(l), d;
    });
  }, []);
  return be(() => {
    const l = new Map(o);
    Array.from(l.keys()).sort(X5).forEach((d, u) => {
      l.set(d, u);
    }), J5(o, l) || i(l);
  }, [o]), /* @__PURE__ */ k.createElement(Th.Provider, {
    value: k.useMemo(() => ({
      register: s,
      unregister: a,
      map: o,
      elementsRef: n,
      labelsRef: r
    }), [s, a, o, n, r])
  }, e);
}
function Q5(t7) {
  let {
    label: e
  } = t7 === void 0 ? {} : t7;
  const [n, r] = k.useState(null), o = k.useRef(null), {
    register: i,
    unregister: s,
    map: a,
    elementsRef: l,
    labelsRef: c
  } = k.useContext(Th), d = k.useCallback((u) => {
    if (o.current = u, n !== null && (l.current[n] = u, c)) {
      var f;
      const h = e !== void 0;
      c.current[n] = h ? e : (f = u == null ? void 0 : u.textContent) != null ? f : null;
    }
  }, [n, l, c, e]);
  return be(() => {
    const u = o.current;
    if (u)
      return i(u), () => {
        s(u);
      };
  }, [i, s]), be(() => {
    const u = o.current ? a.get(o.current) : null;
    u != null && r(u);
  }, [a]), k.useMemo(() => ({
    ref: d,
    index: n ?? -1
  }), [n, d]);
}
function Jr() {
  return Jr = Object.assign ? Object.assign.bind() : function(t7) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t7[r] = n[r]);
    }
    return t7;
  }, Jr.apply(this, arguments);
}
let fs = false, eC = 0;
const Ed = () => "floating-ui-" + eC++;
function tC() {
  const [t7, e] = k.useState(() => fs ? Ed() : void 0);
  return be(() => {
    t7 == null && e(Ed());
  }, []), k.useEffect(() => {
    fs || (fs = true);
  }, []), t7;
}
const nC = k.useId, Vi = nC || tC;
function rC() {
  const t7 = /* @__PURE__ */ new Map();
  return {
    emit(e, n) {
      var r;
      (r = t7.get(e)) == null || r.forEach((o) => o(n));
    },
    on(e, n) {
      t7.set(e, [...t7.get(e) || [], n]);
    },
    off(e, n) {
      var r;
      t7.set(e, ((r = t7.get(e)) == null ? void 0 : r.filter((o) => o !== n)) || []);
    }
  };
}
const oC = /* @__PURE__ */ k.createContext(null), iC = /* @__PURE__ */ k.createContext(null), Yi = () => {
  var t7;
  return ((t7 = k.useContext(oC)) == null ? void 0 : t7.id) || null;
}, co = () => k.useContext(iC);
function An(t7) {
  return "data-floating-ui-" + t7;
}
function It(t7) {
  const e = Yt(t7);
  return be(() => {
    e.current = t7;
  }), e;
}
const Od = /* @__PURE__ */ An("safe-polygon");
function hs(t7, e, n) {
  return n && !ui(n) ? 0 : typeof t7 == "number" ? t7 : t7 == null ? void 0 : t7[e];
}
function sC(t7, e) {
  e === void 0 && (e = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: o,
    events: i,
    elements: {
      domReference: s,
      floating: a
    },
    refs: l
  } = t7, {
    enabled: c = true,
    delay: d = 0,
    handleClose: u = null,
    mouseOnly: f = false,
    restMs: h = 0,
    move: g = true
  } = e, p = co(), m = Yi(), v = It(u), y = It(d), C = k.useRef(), x = k.useRef(), w = k.useRef(), _ = k.useRef(), O = k.useRef(true), N = k.useRef(false), T = k.useRef(() => {
  }), S = k.useCallback(() => {
    var E;
    const R = (E = o.current.openEvent) == null ? void 0 : E.type;
    return (R == null ? void 0 : R.includes("mouse")) && R !== "mousedown";
  }, [o]);
  k.useEffect(() => {
    if (!c)
      return;
    function E(R) {
      let {
        open: D
      } = R;
      D || (clearTimeout(x.current), clearTimeout(_.current), O.current = true);
    }
    return i.on("openchange", E), () => {
      i.off("openchange", E);
    };
  }, [c, i]), k.useEffect(() => {
    if (!c || !v.current || !n)
      return;
    function E(D) {
      S() && r(false, D, "hover");
    }
    const R = Xe(a).documentElement;
    return R.addEventListener("mouseleave", E), () => {
      R.removeEventListener("mouseleave", E);
    };
  }, [a, n, r, c, v, S]);
  const A = k.useCallback(function(E, R, D) {
    R === void 0 && (R = true), D === void 0 && (D = "hover");
    const L = hs(y.current, "close", C.current);
    L && !w.current ? (clearTimeout(x.current), x.current = setTimeout(() => r(false, E, D), L)) : R && (clearTimeout(x.current), r(false, E, D));
  }, [y, r]), M = k.useCallback(() => {
    T.current(), w.current = void 0;
  }, []), P = k.useCallback(() => {
    if (N.current) {
      const E = Xe(l.floating.current).body;
      E.style.pointerEvents = "", E.removeAttribute(Od), N.current = false;
    }
  }, [l]);
  return k.useEffect(() => {
    if (!c)
      return;
    function E() {
      return o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : false;
    }
    function R(F) {
      if (clearTimeout(x.current), O.current = false, f && !ui(C.current) || h > 0 && hs(y.current, "open") === 0)
        return;
      const $ = hs(y.current, "open", C.current);
      $ ? x.current = setTimeout(() => {
        r(true, F, "hover");
      }, $) : r(true, F, "hover");
    }
    function D(F) {
      if (E())
        return;
      T.current();
      const $ = Xe(a);
      if (clearTimeout(_.current), v.current) {
        n || clearTimeout(x.current), w.current = v.current({
          ...t7,
          tree: p,
          x: F.clientX,
          y: F.clientY,
          onClose() {
            P(), M(), A(F, true, "safe-polygon");
          }
        });
        const W = w.current;
        $.addEventListener("mousemove", W), T.current = () => {
          $.removeEventListener("mousemove", W);
        };
        return;
      }
      (C.current === "touch" ? !Oe(a, F.relatedTarget) : true) && A(F);
    }
    function L(F) {
      E() || v.current == null || v.current({
        ...t7,
        tree: p,
        x: F.clientX,
        y: F.clientY,
        onClose() {
          P(), M(), A(F);
        }
      })(F);
    }
    if (pe(s)) {
      const F = s;
      return n && F.addEventListener("mouseleave", L), a == null || a.addEventListener("mouseleave", L), g && F.addEventListener("mousemove", R, {
        once: true
      }), F.addEventListener("mouseenter", R), F.addEventListener("mouseleave", D), () => {
        n && F.removeEventListener("mouseleave", L), a == null || a.removeEventListener("mouseleave", L), g && F.removeEventListener("mousemove", R), F.removeEventListener("mouseenter", R), F.removeEventListener("mouseleave", D);
      };
    }
  }, [s, a, c, t7, f, h, g, A, M, P, r, n, p, y, v, o]), be(() => {
    var E;
    if (c && n && (E = v.current) != null && E.__options.blockPointerEvents && S()) {
      const D = Xe(a).body;
      if (D.setAttribute(Od, ""), D.style.pointerEvents = "none", N.current = true, pe(s) && a) {
        var R;
        const L = s, F = p == null || (R = p.nodesRef.current.find(($) => $.id === m)) == null || (R = R.context) == null ? void 0 : R.elements.floating;
        return F && (F.style.pointerEvents = ""), L.style.pointerEvents = "auto", a.style.pointerEvents = "auto", () => {
          L.style.pointerEvents = "", a.style.pointerEvents = "";
        };
      }
    }
  }, [c, n, m, a, s, p, v, S]), be(() => {
    n || (C.current = void 0, M(), P());
  }, [n, M, P]), k.useEffect(() => () => {
    M(), clearTimeout(x.current), clearTimeout(_.current), P();
  }, [c, s, M, P]), k.useMemo(() => {
    if (!c)
      return {};
    function E(R) {
      C.current = R.pointerType;
    }
    return {
      reference: {
        onPointerDown: E,
        onPointerEnter: E,
        onMouseMove(R) {
          n || h === 0 || (clearTimeout(_.current), _.current = setTimeout(() => {
            O.current || r(true, R.nativeEvent, "hover");
          }, h));
        }
      },
      floating: {
        onMouseEnter() {
          clearTimeout(x.current);
        },
        onMouseLeave(R) {
          A(R.nativeEvent, false);
        }
      }
    };
  }, [c, h, n, r, A]);
}
function aC(t7, e) {
  var n;
  let r = [], o = (n = t7.find((i) => i.id === e)) == null ? void 0 : n.parentId;
  for (; o; ) {
    const i = t7.find((s) => s.id === o);
    o = i == null ? void 0 : i.parentId, i && (r = r.concat(i));
  }
  return r;
}
function On(t7, e) {
  let n = t7.filter((o) => {
    var i;
    return o.parentId === e && ((i = o.context) == null ? void 0 : i.open);
  }), r = n;
  for (; r.length; )
    r = t7.filter((o) => {
      var i;
      return (i = r) == null ? void 0 : i.some((s) => {
        var a;
        return o.parentId === s.id && ((a = o.context) == null ? void 0 : a.open);
      });
    }), n = n.concat(r);
  return n;
}
function lC(t7, e) {
  let n, r = -1;
  function o(i, s) {
    s > r && (n = i, r = s), On(t7, i).forEach((l) => {
      o(l.id, s + 1);
    });
  }
  return o(e, 0), t7.find((i) => i.id === n);
}
let $n = /* @__PURE__ */ new WeakMap(), Mo = /* @__PURE__ */ new WeakSet(), Po = {}, gs = 0;
const cC = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype, Nh = (t7) => t7 && (t7.host || Nh(t7.parentNode)), dC = (t7, e) => e.map((n) => {
  if (t7.contains(n))
    return n;
  const r = Nh(n);
  return t7.contains(r) ? r : null;
}).filter((n) => n != null);
function uC(t7, e, n, r) {
  const o = "data-floating-ui-inert", i = r ? "inert" : n ? "aria-hidden" : null, s = dC(e, t7), a = /* @__PURE__ */ new Set(), l = new Set(s), c = [];
  Po[o] || (Po[o] = /* @__PURE__ */ new WeakMap());
  const d = Po[o];
  s.forEach(u), f(e), a.clear();
  function u(h) {
    !h || a.has(h) || (a.add(h), h.parentNode && u(h.parentNode));
  }
  function f(h) {
    !h || l.has(h) || Array.prototype.forEach.call(h.children, (g) => {
      if (a.has(g))
        f(g);
      else {
        const p = i ? g.getAttribute(i) : null, m = p !== null && p !== "false", v = ($n.get(g) || 0) + 1, y = (d.get(g) || 0) + 1;
        $n.set(g, v), d.set(g, y), c.push(g), v === 1 && m && Mo.add(g), y === 1 && g.setAttribute(o, ""), !m && i && g.setAttribute(i, "true");
      }
    });
  }
  return gs++, () => {
    c.forEach((h) => {
      const g = ($n.get(h) || 0) - 1, p = (d.get(h) || 0) - 1;
      $n.set(h, g), d.set(h, p), g || (!Mo.has(h) && i && h.removeAttribute(i), Mo.delete(h)), p || h.removeAttribute(o);
    }), gs--, gs || ($n = /* @__PURE__ */ new WeakMap(), $n = /* @__PURE__ */ new WeakMap(), Mo = /* @__PURE__ */ new WeakSet(), Po = {});
  };
}
function Td(t7, e, n) {
  e === void 0 && (e = false), n === void 0 && (n = false);
  const r = Xe(t7[0]).body;
  return uC(t7.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, e, n);
}
const Zr = () => ({
  getShadowRoot: true,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function Rh(t7, e) {
  const n = Wi(t7, Zr());
  e === "prev" && n.reverse();
  const r = n.indexOf(Nt(Xe(t7)));
  return n.slice(r + 1)[0];
}
function Mh() {
  return Rh(document.body, "next");
}
function Ph() {
  return Rh(document.body, "prev");
}
function zr(t7, e) {
  const n = e || t7.currentTarget, r = t7.relatedTarget;
  return !r || !Oe(n, r);
}
function fC(t7) {
  Wi(t7, Zr()).forEach((n) => {
    n.dataset.tabindex = n.getAttribute("tabindex") || "", n.setAttribute("tabindex", "-1");
  });
}
function hC(t7) {
  t7.querySelectorAll("[data-tabindex]").forEach((n) => {
    const r = n.dataset.tabindex;
    delete n.dataset.tabindex, r ? n.setAttribute("tabindex", r) : n.removeAttribute("tabindex");
  });
}
const Ya = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
};
let gC;
function Nd(t7) {
  t7.key === "Tab" && (t7.target, clearTimeout(gC));
}
const xi = /* @__PURE__ */ k.forwardRef(function(e, n) {
  const [r, o] = k.useState();
  be(() => (Fa() && o("button"), document.addEventListener("keydown", Nd), () => {
    document.removeEventListener("keydown", Nd);
  }), []);
  const i = {
    ref: n,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: r,
    "aria-hidden": r ? void 0 : true,
    [An("focus-guard")]: "",
    style: Ya
  };
  return /* @__PURE__ */ k.createElement("span", Jr({}, e, i));
}), Ah = /* @__PURE__ */ k.createContext(null), Rd = /* @__PURE__ */ An("portal");
function pC(t7) {
  let {
    id: e,
    root: n
  } = t7 === void 0 ? {} : t7;
  const [r, o] = k.useState(null), i = Vi(), s = Dh(), a = k.useRef(null);
  return be(() => () => {
    r == null || r.remove(), queueMicrotask(() => {
      a.current = null;
    });
  }, [r]), be(() => {
    if (a.current) return;
    const l = e ? document.getElementById(e) : null;
    if (!l) return;
    const c = document.createElement("div");
    c.id = i, c.setAttribute(Rd, ""), l.appendChild(c), a.current = c, o(c);
  }, [e, i]), be(() => {
    if (a.current) return;
    let l = n || (s == null ? void 0 : s.portalNode);
    l && !pe(l) && (l = l.current), l = l || document.body;
    let c = null;
    e && (c = document.createElement("div"), c.id = e, l.appendChild(c));
    const d = document.createElement("div");
    d.id = i, d.setAttribute(Rd, ""), l = c || l, l.appendChild(d), a.current = d, o(d);
  }, [e, n, i, s]), r;
}
function mC(t7) {
  let {
    children: e,
    id: n,
    root: r = null,
    preserveTabOrder: o = true
  } = t7;
  const i = pC({
    id: n,
    root: r
  }), [s, a] = k.useState(null), l = k.useRef(null), c = k.useRef(null), d = k.useRef(null), u = k.useRef(null), f = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!s && // Guards are only for non-modal focus management.
    !s.modal && // Don't render if unmount is transitioning.
    s.open && o && !!(r || i)
  );
  return k.useEffect(() => {
    if (!i || !o || s != null && s.modal)
      return;
    function h(g) {
      i && zr(g) && (g.type === "focusin" ? hC : fC)(i);
    }
    return i.addEventListener("focusin", h, true), i.addEventListener("focusout", h, true), () => {
      i.removeEventListener("focusin", h, true), i.removeEventListener("focusout", h, true);
    };
  }, [i, o, s == null ? void 0 : s.modal]), /* @__PURE__ */ k.createElement(Ah.Provider, {
    value: k.useMemo(() => ({
      preserveTabOrder: o,
      beforeOutsideRef: l,
      afterOutsideRef: c,
      beforeInsideRef: d,
      afterInsideRef: u,
      portalNode: i,
      setFocusManagerState: a
    }), [o, i])
  }, f && i && /* @__PURE__ */ k.createElement(xi, {
    "data-type": "outside",
    ref: l,
    onFocus: (h) => {
      if (zr(h, i)) {
        var g;
        (g = d.current) == null || g.focus();
      } else {
        const p = Ph() || (s == null ? void 0 : s.refs.domReference.current);
        p == null || p.focus();
      }
    }
  }), f && i && /* @__PURE__ */ k.createElement("span", {
    "aria-owns": i.id,
    style: Ya
  }), i && /* @__PURE__ */ lp(e, i), f && i && /* @__PURE__ */ k.createElement(xi, {
    "data-type": "outside",
    ref: c,
    onFocus: (h) => {
      if (zr(h, i)) {
        var g;
        (g = u.current) == null || g.focus();
      } else {
        const p = Mh() || (s == null ? void 0 : s.refs.domReference.current);
        p == null || p.focus(), s != null && s.closeOnFocusOut && (s == null || s.onOpenChange(false, h.nativeEvent));
      }
    }
  }));
}
const Dh = () => k.useContext(Ah), bC = 20;
let xn = [];
function ps(t7) {
  xn = xn.filter((n) => n.isConnected);
  let e = t7;
  if (!(!e || Ln(e) === "body")) {
    if (!W5(e, Zr())) {
      const n = Wi(e, Zr())[0];
      if (!n) return;
      e = n;
    }
    xn.push(e), xn.length > bC && (xn = xn.slice(-20));
  }
}
function Md() {
  return xn.slice().reverse().find((t7) => t7.isConnected);
}
const yC = /* @__PURE__ */ k.forwardRef(function(e, n) {
  return /* @__PURE__ */ k.createElement("button", Jr({}, e, {
    type: "button",
    ref: n,
    tabIndex: -1,
    style: Ya
  }));
});
function Ih(t7) {
  const {
    context: e,
    children: n,
    disabled: r = false,
    order: o = ["content"],
    guards: i = true,
    initialFocus: s = 0,
    returnFocus: a = true,
    modal: l = true,
    visuallyHiddenDismiss: c = false,
    closeOnFocusOut: d = true
  } = t7, {
    open: u,
    refs: f,
    nodeId: h,
    onOpenChange: g,
    events: p,
    dataRef: m,
    elements: {
      domReference: v,
      floating: y
    }
  } = e, C = typeof s == "number" && s < 0, x = uh(v) && C, w = cC() ? i : true, _ = It(o), O = It(s), N = It(a), T = co(), S = Dh(), A = k.useRef(null), M = k.useRef(null), P = k.useRef(false), E = k.useRef(false), R = S != null, D = k.useCallback(function(B) {
    return B === void 0 && (B = y), B ? Wi(B, Zr()) : [];
  }, [y]), L = k.useCallback((B) => {
    const W = D(B);
    return _.current.map((V) => v && V === "reference" ? v : y && V === "floating" ? y : W).filter(Boolean).flat();
  }, [v, y, _, D]);
  k.useEffect(() => {
    if (r || !l) return;
    function B(V) {
      if (V.key === "Tab") {
        Oe(y, Nt(Xe(y))) && D().length === 0 && !x && $e(V);
        const U = L(), K = rn(V);
        _.current[0] === "reference" && K === v && ($e(V), V.shiftKey ? Ht(U[U.length - 1]) : Ht(U[1])), _.current[1] === "floating" && K === y && V.shiftKey && ($e(V), Ht(U[0]));
      }
    }
    const W = Xe(y);
    return W.addEventListener("keydown", B), () => {
      W.removeEventListener("keydown", B);
    };
  }, [r, v, y, l, _, x, D, L]), k.useEffect(() => {
    if (r || !d) return;
    function B() {
      E.current = true, setTimeout(() => {
        E.current = false;
      });
    }
    function W(V) {
      const U = V.relatedTarget;
      queueMicrotask(() => {
        const K = !(Oe(v, U) || Oe(y, U) || Oe(U, y) || Oe(S == null ? void 0 : S.portalNode, U) || U != null && U.hasAttribute(An("focus-guard")) || T && (On(T.nodesRef.current, h).find((q) => {
          var X, ce;
          return Oe((X = q.context) == null ? void 0 : X.elements.floating, U) || Oe((ce = q.context) == null ? void 0 : ce.elements.domReference, U);
        }) || aC(T.nodesRef.current, h).find((q) => {
          var X, ce;
          return ((X = q.context) == null ? void 0 : X.elements.floating) === U || ((ce = q.context) == null ? void 0 : ce.elements.domReference) === U;
        })));
        U && K && !E.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        U !== Md() && (P.current = true, g(false, V));
      });
    }
    if (y && Ve(v))
      return v.addEventListener("focusout", W), v.addEventListener("pointerdown", B), !l && y.addEventListener("focusout", W), () => {
        v.removeEventListener("focusout", W), v.removeEventListener("pointerdown", B), !l && y.removeEventListener("focusout", W);
      };
  }, [r, v, y, l, h, T, S, g, d]), k.useEffect(() => {
    var B;
    if (r) return;
    const W = Array.from((S == null || (B = S.portalNode) == null ? void 0 : B.querySelectorAll("[" + An("portal") + "]")) || []);
    if (y) {
      const V = [y, ...W, A.current, M.current, _.current.includes("reference") || x ? v : null].filter((K) => K != null), U = l || x ? Td(V, w, !w) : Td(V);
      return () => {
        U();
      };
    }
  }, [r, v, y, l, _, S, x, w]), be(() => {
    if (r || !y) return;
    const B = Xe(y), W = Nt(B);
    queueMicrotask(() => {
      const V = L(y), U = O.current, K = (typeof U == "number" ? V[U] : U.current) || y, q = Oe(y, W);
      !C && !q && u && Ht(K, {
        preventScroll: K === y
      });
    });
  }, [r, u, y, C, L, O]), be(() => {
    if (r || !y) return;
    let B = false;
    const W = Xe(y), V = Nt(W), U = m.current;
    ps(V);
    function K(q) {
      let {
        reason: X,
        event: ce,
        nested: J
      } = q;
      X === "escape-key" && f.domReference.current && ps(f.domReference.current), X === "hover" && ce.type === "mouseleave" && (P.current = true), X === "outside-press" && (J ? (P.current = false, B = true) : P.current = !(ch(ce) || La(ce)));
    }
    return p.on("openchange", K), () => {
      p.off("openchange", K);
      const q = Nt(W), X = Oe(y, q) || T && On(T.nodesRef.current, h).some((re) => {
        var Ie;
        return Oe((Ie = re.context) == null ? void 0 : Ie.elements.floating, q);
      });
      (X || U.openEvent && ["click", "mousedown"].includes(U.openEvent.type)) && f.domReference.current && ps(f.domReference.current);
      const J = Md();
      N.current && !P.current && Ve(J) && // If the focus moved somewhere else after mount, avoid returning focus
      // since it likely entered a different element which should be
      // respected: https://github.com/floating-ui/floating-ui/issues/2607
      (!(J !== q && q !== W.body) || X) && Ht(J, {
        // When dismissing nested floating elements, by the time the rAF has
        // executed, the menus will all have been unmounted. When they try
        // to get focused, the calls get ignored — leaving the root
        // reference focused as desired.
        cancelPrevious: false,
        preventScroll: B
      });
    };
  }, [r, y, N, m, f, p, T, h]), be(() => {
    if (!(r || !S))
      return S.setFocusManagerState({
        modal: l,
        closeOnFocusOut: d,
        open: u,
        onOpenChange: g,
        refs: f
      }), () => {
        S.setFocusManagerState(null);
      };
  }, [r, S, l, u, g, f, d]), be(() => {
    if (r || !y || typeof MutationObserver != "function" || C)
      return;
    const B = () => {
      const V = y.getAttribute("tabindex");
      _.current.includes("floating") || Nt(Xe(y)) !== f.domReference.current && D().length === 0 ? V !== "0" && y.setAttribute("tabindex", "0") : V !== "-1" && y.setAttribute("tabindex", "-1");
    };
    B();
    const W = new MutationObserver(B);
    return W.observe(y, {
      childList: true,
      subtree: true,
      attributes: true
    }), () => {
      W.disconnect();
    };
  }, [r, y, f, _, D, C]);
  function F(B) {
    return r || !c || !l ? null : /* @__PURE__ */ k.createElement(yC, {
      ref: B === "start" ? A : M,
      onClick: (W) => g(false, W.nativeEvent)
    }, typeof c == "string" ? c : "Dismiss");
  }
  const $ = !r && w && (R || l);
  return /* @__PURE__ */ k.createElement(k.Fragment, null, $ && /* @__PURE__ */ k.createElement(xi, {
    "data-type": "inside",
    ref: S == null ? void 0 : S.beforeInsideRef,
    onFocus: (B) => {
      if (l) {
        const V = L();
        Ht(o[0] === "reference" ? V[0] : V[V.length - 1]);
      } else if (S != null && S.preserveTabOrder && S.portalNode)
        if (P.current = false, zr(B, S.portalNode)) {
          const V = Mh() || v;
          V == null || V.focus();
        } else {
          var W;
          (W = S.beforeOutsideRef.current) == null || W.focus();
        }
    }
  }), !x && F("start"), n, F("end"), $ && /* @__PURE__ */ k.createElement(xi, {
    "data-type": "inside",
    ref: S == null ? void 0 : S.afterInsideRef,
    onFocus: (B) => {
      if (l)
        Ht(L()[0]);
      else if (S != null && S.preserveTabOrder && S.portalNode)
        if (d && (P.current = true), zr(B, S.portalNode)) {
          const V = Ph() || v;
          V == null || V.focus();
        } else {
          var W;
          (W = S.afterOutsideRef.current) == null || W.focus();
        }
    }
  }));
}
const ms = /* @__PURE__ */ new Set(), vC = /* @__PURE__ */ k.forwardRef(function(e, n) {
  let {
    lockScroll: r = false,
    ...o
  } = e;
  const i = Vi();
  return be(() => {
    if (!r) return;
    ms.add(i);
    const s = /iP(hone|ad|od)|iOS/.test(Ia()), a = document.body.style, c = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight", d = window.innerWidth - document.documentElement.clientWidth, u = a.left ? parseFloat(a.left) : window.pageXOffset, f = a.top ? parseFloat(a.top) : window.pageYOffset;
    if (a.overflow = "hidden", d && (a[c] = d + "px"), s) {
      var h, g;
      const p = ((h = window.visualViewport) == null ? void 0 : h.offsetLeft) || 0, m = ((g = window.visualViewport) == null ? void 0 : g.offsetTop) || 0;
      Object.assign(a, {
        position: "fixed",
        top: -(f - Math.floor(m)) + "px",
        left: -(u - Math.floor(p)) + "px",
        right: "0"
      });
    }
    return () => {
      ms.delete(i), ms.size === 0 && (Object.assign(a, {
        overflow: "",
        [c]: ""
      }), s && (Object.assign(a, {
        position: "",
        top: "",
        left: "",
        right: ""
      }), window.scrollTo(u, f)));
    };
  }, [i, r]), /* @__PURE__ */ k.createElement("div", Jr({
    ref: n
  }, o, {
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...o.style
    }
  }));
});
function Pd(t7) {
  return Ve(t7.target) && t7.target.tagName === "BUTTON";
}
function Ad(t7) {
  return za(t7);
}
function Lh(t7, e) {
  e === void 0 && (e = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: o,
    elements: {
      domReference: i
    }
  } = t7, {
    enabled: s = true,
    event: a = "click",
    toggle: l = true,
    ignoreMouse: c = false,
    keyboardHandlers: d = true
  } = e, u = k.useRef(), f = k.useRef(false);
  return k.useMemo(() => s ? {
    reference: {
      onPointerDown(h) {
        u.current = h.pointerType;
      },
      onMouseDown(h) {
        h.button === 0 && (ui(u.current, true) && c || a !== "click" && (n && l && (!o.current.openEvent || o.current.openEvent.type === "mousedown") ? r(false, h.nativeEvent, "click") : (h.preventDefault(), r(true, h.nativeEvent, "click"))));
      },
      onClick(h) {
        if (a === "mousedown" && u.current) {
          u.current = void 0;
          return;
        }
        ui(u.current, true) && c || (n && l && (!o.current.openEvent || o.current.openEvent.type === "click") ? r(false, h.nativeEvent, "click") : r(true, h.nativeEvent, "click"));
      },
      onKeyDown(h) {
        u.current = void 0, !(h.defaultPrevented || !d || Pd(h)) && (h.key === " " && !Ad(i) && (h.preventDefault(), f.current = true), h.key === "Enter" && r(!(n && l), h.nativeEvent, "click"));
      },
      onKeyUp(h) {
        h.defaultPrevented || !d || Pd(h) || Ad(i) || h.key === " " && f.current && (f.current = false, r(!(n && l), h.nativeEvent, "click"));
      }
    }
  } : {}, [s, o, a, c, d, i, l, n, r]);
}
const xC = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, wC = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, Dd = (t7) => {
  var e, n;
  return {
    escapeKey: typeof t7 == "boolean" ? t7 : (e = t7 == null ? void 0 : t7.escapeKey) != null ? e : false,
    outsidePress: typeof t7 == "boolean" ? t7 : (n = t7 == null ? void 0 : t7.outsidePress) != null ? n : true
  };
};
function Fh(t7, e) {
  e === void 0 && (e = {});
  const {
    open: n,
    onOpenChange: r,
    nodeId: o,
    elements: {
      reference: i,
      domReference: s,
      floating: a
    },
    dataRef: l
  } = t7, {
    enabled: c = true,
    escapeKey: d = true,
    outsidePress: u = true,
    outsidePressEvent: f = "pointerdown",
    referencePress: h = false,
    referencePressEvent: g = "pointerdown",
    ancestorScroll: p = false,
    bubbles: m,
    capture: v
  } = e, y = co(), C = Rt(typeof u == "function" ? u : () => false), x = typeof u == "function" ? C : u, w = k.useRef(false), _ = k.useRef(false), {
    escapeKey: O,
    outsidePress: N
  } = Dd(m), {
    escapeKey: T,
    outsidePress: S
  } = Dd(v), A = Rt((R) => {
    if (!n || !c || !d || R.key !== "Escape")
      return;
    const D = y ? On(y.nodesRef.current, o) : [];
    if (!O && (R.stopPropagation(), D.length > 0)) {
      let L = true;
      if (D.forEach((F) => {
        var $;
        if (($ = F.context) != null && $.open && !F.context.dataRef.current.__escapeKeyBubbles) {
          L = false;
          return;
        }
      }), !L)
        return;
    }
    r(false, D2(R) ? R.nativeEvent : R, "escape-key");
  }), M = Rt((R) => {
    var D;
    const L = () => {
      var F;
      A(R), (F = rn(R)) == null || F.removeEventListener("keydown", L);
    };
    (D = rn(R)) == null || D.addEventListener("keydown", L);
  }), P = Rt((R) => {
    const D = w.current;
    w.current = false;
    const L = _.current;
    if (_.current = false, f === "click" && L || D || typeof x == "function" && !x(R))
      return;
    const F = rn(R), $ = "[" + An("inert") + "]", B = Xe(a).querySelectorAll($);
    let W = pe(F) ? F : null;
    for (; W && !un(W); ) {
      const K = qt(W);
      if (un(K) || !pe(K))
        break;
      W = K;
    }
    if (B.length && pe(F) && !I2(F) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !Oe(F, a) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(B).every((K) => !Oe(W, K)))
      return;
    if (Ve(F) && a) {
      const K = F.clientWidth > 0 && F.scrollWidth > F.clientWidth, q = F.clientHeight > 0 && F.scrollHeight > F.clientHeight;
      let X = q && R.offsetX > F.clientWidth;
      if (q && mt(F).direction === "rtl" && (X = R.offsetX <= F.offsetWidth - F.clientWidth), X || K && R.offsetY > F.clientHeight)
        return;
    }
    const V = y && On(y.nodesRef.current, o).some((K) => {
      var q;
      return ls(R, (q = K.context) == null ? void 0 : q.elements.floating);
    });
    if (ls(R, a) || ls(R, s) || V)
      return;
    const U = y ? On(y.nodesRef.current, o) : [];
    if (U.length > 0) {
      let K = true;
      if (U.forEach((q) => {
        var X;
        if ((X = q.context) != null && X.open && !q.context.dataRef.current.__outsidePressBubbles) {
          K = false;
          return;
        }
      }), !K)
        return;
    }
    r(false, R, "outside-press");
  }), E = Rt((R) => {
    var D;
    const L = () => {
      var F;
      P(R), (F = rn(R)) == null || F.removeEventListener(f, L);
    };
    (D = rn(R)) == null || D.addEventListener(f, L);
  });
  return k.useEffect(() => {
    if (!n || !c)
      return;
    l.current.__escapeKeyBubbles = O, l.current.__outsidePressBubbles = N;
    function R(F) {
      r(false, F, "ancestor-scroll");
    }
    const D = Xe(a);
    d && D.addEventListener("keydown", T ? M : A, T), x && D.addEventListener(f, S ? E : P, S);
    let L = [];
    return p && (pe(s) && (L = ln(s)), pe(a) && (L = L.concat(ln(a))), !pe(i) && i && i.contextElement && (L = L.concat(ln(i.contextElement)))), L = L.filter((F) => {
      var $;
      return F !== (($ = D.defaultView) == null ? void 0 : $.visualViewport);
    }), L.forEach((F) => {
      F.addEventListener("scroll", R, {
        passive: true
      });
    }), () => {
      d && D.removeEventListener("keydown", T ? M : A, T), x && D.removeEventListener(f, S ? E : P, S), L.forEach((F) => {
        F.removeEventListener("scroll", R);
      });
    };
  }, [l, a, s, i, d, x, f, n, r, p, c, O, N, A, T, M, P, S, E]), k.useEffect(() => {
    w.current = false;
  }, [x, f]), k.useMemo(() => c ? {
    reference: {
      onKeyDown: A,
      [xC[g]]: (R) => {
        h && r(false, R.nativeEvent, "reference-press");
      }
    },
    floating: {
      onKeyDown: A,
      onMouseDown() {
        _.current = true;
      },
      onMouseUp() {
        _.current = true;
      },
      [wC[f]]: () => {
        w.current = true;
      }
    }
  } : {}, [c, h, f, g, r, A]);
}
function zh(t7) {
  var e;
  t7 === void 0 && (t7 = {});
  const {
    open: n = false,
    onOpenChange: r,
    nodeId: o
  } = t7;
  const [l, c] = k.useState(null), d = ((e = t7.elements) == null ? void 0 : e.reference) || l, u = y5(t7), f = co(), h = Yi() != null, g = Rt((N, T, S) => {
    N && (m.current.openEvent = T), v.emit("openchange", {
      open: N,
      event: T,
      reason: S,
      nested: h
    }), r == null || r(N, T, S);
  }), p = k.useRef(null), m = k.useRef({}), v = k.useState(() => rC())[0], y = Vi(), C = k.useCallback((N) => {
    const T = pe(N) ? {
      getBoundingClientRect: () => N.getBoundingClientRect(),
      contextElement: N
    } : N;
    u.refs.setReference(T);
  }, [u.refs]), x = k.useCallback((N) => {
    (pe(N) || N === null) && (p.current = N, c(N)), (pe(u.refs.reference.current) || u.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    N !== null && !pe(N)) && u.refs.setReference(N);
  }, [u.refs]), w = k.useMemo(() => ({
    ...u.refs,
    setReference: x,
    setPositionReference: C,
    domReference: p
  }), [u.refs, x, C]), _ = k.useMemo(() => ({
    ...u.elements,
    domReference: d
  }), [u.elements, d]), O = k.useMemo(() => ({
    ...u,
    refs: w,
    elements: _,
    dataRef: m,
    nodeId: o,
    floatingId: y,
    events: v,
    open: n,
    onOpenChange: g
  }), [u, o, y, v, n, g, w, _]);
  return be(() => {
    const N = f == null ? void 0 : f.nodesRef.current.find((T) => T.id === o);
    N && (N.context = O);
  }), k.useMemo(() => ({
    ...u,
    context: O,
    refs: w,
    elements: _
  }), [u, w, _, O]);
}
function kC(t7, e) {
  e === void 0 && (e = {});
  const {
    open: n,
    onOpenChange: r,
    events: o,
    refs: i,
    elements: {
      domReference: s
    }
  } = t7, {
    enabled: a = true,
    visibleOnly: l = true
  } = e, c = k.useRef(false), d = k.useRef(), u = k.useRef(true);
  return k.useEffect(() => {
    if (!a)
      return;
    const f = rt(s);
    function h() {
      !n && Ve(s) && s === Nt(Xe(s)) && (c.current = true);
    }
    function g() {
      u.current = true;
    }
    return f.addEventListener("blur", h), f.addEventListener("keydown", g, true), () => {
      f.removeEventListener("blur", h), f.removeEventListener("keydown", g, true);
    };
  }, [s, n, a]), k.useEffect(() => {
    if (!a)
      return;
    function f(h) {
      let {
        reason: g
      } = h;
      (g === "reference-press" || g === "escape-key") && (c.current = true);
    }
    return o.on("openchange", f), () => {
      o.off("openchange", f);
    };
  }, [o, a]), k.useEffect(() => () => {
    clearTimeout(d.current);
  }, []), k.useMemo(() => a ? {
    reference: {
      onPointerDown(f) {
        La(f.nativeEvent) || (u.current = false);
      },
      onMouseLeave() {
        c.current = false;
      },
      onFocus(f) {
        if (c.current) return;
        const h = rn(f.nativeEvent);
        if (l && pe(h))
          try {
            if (Fa() && dh()) throw Error();
            if (!h.matches(":focus-visible")) return;
          } catch {
            if (!u.current && !za(h))
              return;
          }
        r(true, f.nativeEvent, "focus");
      },
      onBlur(f) {
        c.current = false;
        const h = f.relatedTarget, g = pe(h) && h.hasAttribute(An("focus-guard")) && h.getAttribute("data-type") === "outside";
        d.current = window.setTimeout(() => {
          const p = Nt(s ? s.ownerDocument : document);
          !h && p === s || Oe(i.floating.current, p) || Oe(s, p) || g || r(false, f.nativeEvent, "focus");
        });
      }
    }
  } : {}, [a, l, s, i, r]);
}
const Id = "active", Ld = "selected";
function bs(t7, e, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = t7;
  if (o && t7) {
    const {
      [Id]: s,
      [Ld]: a,
      ...l
    } = t7;
    i = l;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1
    },
    ...i,
    ...e.map((s) => {
      const a = s ? s[n] : null;
      return typeof a == "function" ? t7 ? a(t7) : null : a;
    }).concat(t7).reduce((s, a) => (a && Object.entries(a).forEach((l) => {
      let [c, d] = l;
      if (!(o && [Id, Ld].includes(c)))
        if (c.indexOf("on") === 0) {
          if (r.has(c) || r.set(c, []), typeof d == "function") {
            var u;
            (u = r.get(c)) == null || u.push(d), s[c] = function() {
              for (var f, h = arguments.length, g = new Array(h), p = 0; p < h; p++)
                g[p] = arguments[p];
              return (f = r.get(c)) == null ? void 0 : f.map((m) => m(...g)).find((m) => m !== void 0);
            };
          }
        } else
          s[c] = d;
    }), s), {})
  };
}
function Bh(t7) {
  t7 === void 0 && (t7 = []);
  const e = t7, n = k.useCallback((i) => bs(i, t7, "reference"), e), r = k.useCallback((i) => bs(i, t7, "floating"), e), o = k.useCallback(
    (i) => bs(i, t7, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    t7.map((i) => i == null ? void 0 : i.item)
  );
  return k.useMemo(() => ({
    getReferenceProps: n,
    getFloatingProps: r,
    getItemProps: o
  }), [n, r, o]);
}
let Fd = false;
function Ui(t7, e, n) {
  switch (t7) {
    case "vertical":
      return e;
    case "horizontal":
      return n;
    default:
      return e || n;
  }
}
function zd(t7, e) {
  return Ui(e, t7 === Va || t7 === lo, t7 === or || t7 === dr);
}
function ys(t7, e, n) {
  return Ui(e, t7 === lo, n ? t7 === or : t7 === dr) || t7 === "Enter" || t7 === " " || t7 === "";
}
function CC(t7, e, n) {
  return Ui(e, n ? t7 === or : t7 === dr, t7 === lo);
}
function Bd(t7, e, n) {
  return Ui(e, n ? t7 === dr : t7 === or, t7 === Va);
}
function _C(t7, e) {
  const {
    open: n,
    onOpenChange: r,
    refs: o,
    elements: {
      domReference: i,
      floating: s
    }
  } = t7, {
    listRef: a,
    activeIndex: l,
    onNavigate: c = () => {
    },
    enabled: d = true,
    selectedIndex: u = null,
    allowEscape: f = false,
    loop: h = false,
    nested: g = false,
    rtl: p = false,
    virtual: m = false,
    focusItemOnOpen: v = "auto",
    focusItemOnHover: y = true,
    openOnArrowKeyDown: C = true,
    disabledIndices: x = void 0,
    orientation: w = "vertical",
    cols: _ = 1,
    scrollItemIntoView: O = true,
    virtualItemRef: N,
    itemSizes: T,
    dense: S = false
  } = e;
  const A = Yi(), M = co(), P = Rt(c), E = k.useRef(v), R = k.useRef(u ?? -1), D = k.useRef(null), L = k.useRef(true), F = k.useRef(P), $ = k.useRef(!!s), B = k.useRef(false), W = k.useRef(false), V = It(x), U = It(n), K = It(O), [q, X] = k.useState(), [ce, J] = k.useState(), re = Rt(function(Q, Se, se) {
    se === void 0 && (se = false);
    const ne = Q.current[Se.current];
    ne && (m ? (X(ne.id), M == null || M.events.emit("virtualfocus", ne), N && (N.current = ne)) : Ht(ne, {
      preventScroll: true,
      // Mac Safari does not move the virtual cursor unless the focus call
      // is sync. However, for the very first focus call, we need to wait
      // for the position to be ready in order to prevent unwanted
      // scrolling. This means the virtual cursor will not move to the first
      // item when first opening the floating element, but will on
      // subsequent calls. `preventScroll` is supported in modern Safari,
      // so we can use that instead.
      // iOS Safari must be async or the first item will not be focused.
      sync: dh() && Fa() ? Fd || B.current : false
    }), requestAnimationFrame(() => {
      const fe = K.current;
      fe && ne && (se || !L.current) && (ne.scrollIntoView == null || ne.scrollIntoView(typeof fe == "boolean" ? {
        block: "nearest",
        inline: "nearest"
      } : fe));
    }));
  });
  be(() => {
    document.createElement("div").focus({
      get preventScroll() {
        return Fd = true, false;
      }
    });
  }, []), be(() => {
    d && (n && s ? E.current && u != null && (W.current = true, R.current = u, P(u)) : $.current && (R.current = -1, F.current(null)));
  }, [d, n, s, u, P]), be(() => {
    if (d && n && s)
      if (l == null) {
        if (B.current = false, u != null)
          return;
        if ($.current && (R.current = -1, re(a, R)), !$.current && E.current && (D.current != null || E.current === true && D.current == null)) {
          let Q = 0;
          const Se = () => {
            a.current[0] == null ? (Q < 2 && (Q ? requestAnimationFrame : queueMicrotask)(Se), Q++) : (R.current = D.current == null || ys(D.current, w, p) || g ? us(a, V.current) : _d(a, V.current), D.current = null, P(R.current));
          };
          Se();
        }
      } else Fr(a, l) || (R.current = l, re(a, R, W.current), W.current = false);
  }, [d, n, s, l, u, g, a, w, p, P, re, V]), be(() => {
    var Q;
    if (!d || s || !M || m || !$.current)
      return;
    const Se = M.nodesRef.current, se = (Q = Se.find((ee) => ee.id === A)) == null || (Q = Q.context) == null ? void 0 : Q.elements.floating, ne = Nt(Xe(s)), fe = Se.some((ee) => ee.context && Oe(ee.context.elements.floating, ne));
    se && !fe && L.current && se.focus({
      preventScroll: true
    });
  }, [d, s, M, A, m]), be(() => {
    if (!d || !M || !m || A) return;
    function Q(Se) {
      J(Se.id), N && (N.current = Se);
    }
    return M.events.on("virtualfocus", Q), () => {
      M.events.off("virtualfocus", Q);
    };
  }, [d, M, m, A, N]), be(() => {
    F.current = P, $.current = !!s;
  }), be(() => {
    n || (D.current = null);
  }, [n]);
  const Ie = l != null, Be = k.useMemo(() => {
    function Q(se) {
      if (!n) return;
      const ne = a.current.indexOf(se);
      ne !== -1 && P(ne);
    }
    return {
      onFocus(se) {
        let {
          currentTarget: ne
        } = se;
        Q(ne);
      },
      onClick: (se) => {
        let {
          currentTarget: ne
        } = se;
        return ne.focus({
          preventScroll: true
        });
      },
      // Safari
      ...y && {
        onMouseMove(se) {
          let {
            currentTarget: ne
          } = se;
          Q(ne);
        },
        onPointerLeave(se) {
          let {
            pointerType: ne
          } = se;
          !L.current || ne === "touch" || (R.current = -1, re(a, R), P(null), m || Ht(o.floating.current, {
            preventScroll: true
          }));
        }
      }
    };
  }, [n, o, re, y, a, P, m]);
  return k.useMemo(() => {
    if (!d)
      return {};
    const Q = V.current;
    function Se(Y) {
      if (L.current = false, B.current = true, !U.current && Y.currentTarget === o.floating.current)
        return;
      if (g && Bd(Y.key, w, p)) {
        $e(Y), r(false, Y.nativeEvent, "list-navigation"), Ve(i) && !m && i.focus();
        return;
      }
      const Ee = R.current, oe = us(a, Q), Ce = _d(a, Q);
      if (Y.key === "Home" && ($e(Y), R.current = oe, P(R.current)), Y.key === "End" && ($e(Y), R.current = Ce, P(R.current)), _ > 1) {
        const Le = T || Array.from({
          length: a.current.length
        }, () => ({
          width: 1,
          height: 1
        })), Re = K5(Le, _, S), ut = Re.findIndex((it) => it != null && !(Q != null && Q.includes(it))), yt = Re.reduce((it, Zt, st) => Zt != null && !(Q != null && Q.includes(Zt)) ? st : it, -1);
        if (R.current = Re[U5({
          current: Re.map((it) => it != null ? a.current[it] : null)
        }, {
          event: Y,
          orientation: w,
          loop: h,
          cols: _,
          // treat undefined (empty grid spaces) as disabled indices so we
          // don't end up in them
          disabledIndices: G5([...Q || [], void 0], Re),
          minIndex: ut,
          maxIndex: yt,
          prevIndex: q5(
            R.current,
            Le,
            Re,
            _,
            // use a corner matching the edge closest to the direction
            // we're moving in so we don't end up in the same item. Prefer
            // top/left over bottom/right.
            Y.key === lo ? "bl" : Y.key === dr ? "tr" : "tl"
          ),
          stopEvent: true
        })], P(R.current), w === "both")
          return;
      }
      if (zd(Y.key, w)) {
        if ($e(Y), n && !m && Nt(Y.currentTarget.ownerDocument) === Y.currentTarget) {
          R.current = ys(Y.key, w, p) ? oe : Ce, P(R.current);
          return;
        }
        ys(Y.key, w, p) ? h ? R.current = Ee >= Ce ? f && Ee !== a.current.length ? -1 : oe : Ke(a, {
          startingIndex: Ee,
          disabledIndices: Q
        }) : R.current = Math.min(Ce, Ke(a, {
          startingIndex: Ee,
          disabledIndices: Q
        })) : h ? R.current = Ee <= oe ? f && Ee !== -1 ? a.current.length : Ce : Ke(a, {
          startingIndex: Ee,
          decrement: true,
          disabledIndices: Q
        }) : R.current = Math.max(oe, Ke(a, {
          startingIndex: Ee,
          decrement: true,
          disabledIndices: Q
        })), Fr(a, R.current) ? P(null) : P(R.current);
      }
    }
    function se(Y) {
      v === "auto" && ch(Y.nativeEvent) && (E.current = true);
    }
    function ne(Y) {
      E.current = v, v === "auto" && La(Y.nativeEvent) && (E.current = true);
    }
    const fe = m && n && Ie && {
      "aria-activedescendant": ce || q
    }, ee = a.current.find((Y) => (Y == null ? void 0 : Y.id) === q);
    return {
      reference: {
        ...fe,
        onKeyDown(Y) {
          L.current = false;
          const Ee = Y.key.indexOf("Arrow") === 0, oe = CC(Y.key, w, p), Ce = Bd(Y.key, w, p), Le = zd(Y.key, w), Re = (g ? oe : Le) || Y.key === "Enter" || Y.key.trim() === "";
          if (m && n) {
            const Zt = M == null ? void 0 : M.nodesRef.current.find((uo) => uo.parentId == null), st = M && Zt ? lC(M.nodesRef.current, Zt.id) : null;
            if (Ee && st && N) {
              const uo = new KeyboardEvent("keydown", {
                key: Y.key,
                bubbles: true
              });
              if (oe || Ce) {
                var ut, yt;
                const np = ((ut = st.context) == null ? void 0 : ut.elements.domReference) === Y.currentTarget, tl = Ce && !np ? (yt = st.context) == null ? void 0 : yt.elements.domReference : oe ? ee : null;
                tl && ($e(Y), tl.dispatchEvent(uo), J(void 0));
              }
              if (Le && st.context && st.context.open && st.parentId && Y.currentTarget !== st.context.elements.domReference) {
                var it;
                $e(Y), (it = st.context.elements.domReference) == null || it.dispatchEvent(uo);
                return;
              }
            }
            return Se(Y);
          }
          if (!(!n && !C && Ee)) {
            if (Re && (D.current = g && Le ? null : Y.key), g) {
              oe && ($e(Y), n ? (R.current = us(a, Q), P(R.current)) : r(true, Y.nativeEvent, "list-navigation"));
              return;
            }
            Le && (u != null && (R.current = u), $e(Y), !n && C ? r(true, Y.nativeEvent, "list-navigation") : Se(Y), n && P(R.current));
          }
        },
        onFocus() {
          n && P(null);
        },
        onPointerDown: ne,
        onMouseDown: se,
        onClick: se
      },
      floating: {
        "aria-orientation": w === "both" ? void 0 : w,
        ...!uh(i) && fe,
        onKeyDown: Se,
        onPointerMove() {
          L.current = true;
        }
      },
      item: Be
    };
  }, [i, o, q, ce, V, U, a, d, w, p, m, n, Ie, g, u, C, f, _, h, v, P, r, Be, M, N, T, S]);
}
const SC = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", false]]);
function $h(t7, e) {
  var n;
  e === void 0 && (e = {});
  const {
    open: r,
    floatingId: o
  } = t7, {
    enabled: i = true,
    role: s = "dialog"
  } = e, a = (n = SC.get(s)) != null ? n : s, l = Vi(), d = Yi() != null;
  return k.useMemo(() => {
    if (!i) return {};
    const u = {
      id: o,
      ...a && {
        role: a
      }
    };
    return a === "tooltip" || s === "label" ? {
      reference: {
        ["aria-" + (s === "label" ? "labelledby" : "describedby")]: r ? o : void 0
      },
      floating: u
    } : {
      reference: {
        "aria-expanded": r ? "true" : "false",
        "aria-haspopup": a === "alertdialog" ? "dialog" : a,
        "aria-controls": r ? o : void 0,
        ...a === "listbox" && {
          role: "combobox"
        },
        ...a === "menu" && {
          id: l
        },
        ...a === "menu" && d && {
          role: "menuitem"
        },
        ...s === "select" && {
          "aria-autocomplete": "none"
        },
        ...s === "combobox" && {
          "aria-autocomplete": "list"
        }
      },
      floating: {
        ...u,
        ...a === "menu" && {
          "aria-labelledby": l
        }
      },
      item(f) {
        let {
          active: h,
          selected: g
        } = f;
        const p = {
          role: "option",
          ...h && {
            id: o + "-option"
          }
        };
        switch (s) {
          case "select":
            return {
              ...p,
              "aria-selected": h && g
            };
          case "combobox":
            return {
              ...p,
              ...h && {
                "aria-selected": true
              }
            };
        }
        return {};
      }
    };
  }, [i, s, a, r, o, l, d]);
}
function EC(t7, e) {
  var n;
  const {
    open: r,
    dataRef: o
  } = t7, {
    listRef: i,
    activeIndex: s,
    onMatch: a,
    onTypingChange: l,
    enabled: c = true,
    findMatch: d = null,
    resetMs: u = 750,
    ignoreKeys: f = [],
    selectedIndex: h = null
  } = e, g = k.useRef(), p = k.useRef(""), m = k.useRef((n = h ?? s) != null ? n : -1), v = k.useRef(null), y = Rt(a), C = Rt(l), x = It(d), w = It(f);
  return be(() => {
    r && (clearTimeout(g.current), v.current = null, p.current = "");
  }, [r]), be(() => {
    if (r && p.current === "") {
      var _;
      m.current = (_ = h ?? s) != null ? _ : -1;
    }
  }, [r, h, s]), k.useMemo(() => {
    if (!c)
      return {};
    function _(T) {
      T ? o.current.typing || (o.current.typing = T, C(T)) : o.current.typing && (o.current.typing = T, C(T));
    }
    function O(T, S, A) {
      const M = x.current ? x.current(S, A) : S.find((P) => (P == null ? void 0 : P.toLocaleLowerCase().indexOf(A.toLocaleLowerCase())) === 0);
      return M ? T.indexOf(M) : -1;
    }
    function N(T) {
      const S = i.current;
      if (p.current.length > 0 && p.current[0] !== " " && (O(S, S, p.current) === -1 ? _(false) : T.key === " " && $e(T)), S == null || w.current.includes(T.key) || // Character key.
      T.key.length !== 1 || // Modifier key.
      T.ctrlKey || T.metaKey || T.altKey)
        return;
      r && T.key !== " " && ($e(T), _(true)), S.every((E) => {
        var R, D;
        return E ? ((R = E[0]) == null ? void 0 : R.toLocaleLowerCase()) !== ((D = E[1]) == null ? void 0 : D.toLocaleLowerCase()) : true;
      }) && p.current === T.key && (p.current = "", m.current = v.current), p.current += T.key, clearTimeout(g.current), g.current = setTimeout(() => {
        p.current = "", m.current = v.current, _(false);
      }, u);
      const M = m.current, P = O(S, [...S.slice((M || 0) + 1), ...S.slice(0, (M || 0) + 1)], p.current);
      P !== -1 ? (y(P), v.current = P) : T.key !== " " && (p.current = "", _(false));
    }
    return {
      reference: {
        onKeyDown: N
      },
      floating: {
        onKeyDown: N,
        onKeyUp(T) {
          T.key === " " && _(false);
        }
      }
    };
  }, [c, r, o, i, u, w, x, y, C]);
}
function $d(t7, e) {
  const [n, r] = t7;
  let o = false;
  const i = e.length;
  for (let s = 0, a = i - 1; s < i; a = s++) {
    const [l, c] = e[s] || [0, 0], [d, u] = e[a] || [0, 0];
    c >= r != u >= r && n <= (d - l) * (r - c) / (u - c) + l && (o = !o);
  }
  return o;
}
function OC(t7, e) {
  return t7[0] >= e.x && t7[0] <= e.x + e.width && t7[1] >= e.y && t7[1] <= e.y + e.height;
}
function TC(t7) {
  t7 === void 0 && (t7 = {});
  const {
    buffer: e = 0.5,
    blockPointerEvents: n = false,
    requireIntent: r = true
  } = t7;
  let o, i = false, s = null, a = null, l = performance.now();
  function c(u, f) {
    const h = performance.now(), g = h - l;
    if (s === null || a === null || g === 0)
      return s = u, a = f, l = h, null;
    const p = u - s, m = f - a, y = Math.sqrt(p * p + m * m) / g;
    return s = u, a = f, l = h, y;
  }
  const d = (u) => {
    let {
      x: f,
      y: h,
      placement: g,
      elements: p,
      onClose: m,
      nodeId: v,
      tree: y
    } = u;
    return function(x) {
      function w() {
        clearTimeout(o), m();
      }
      if (clearTimeout(o), !p.domReference || !p.floating || g == null || f == null || h == null)
        return;
      const {
        clientX: _,
        clientY: O
      } = x, N = [_, O], T = rn(x), S = x.type === "mouseleave", A = Oe(p.floating, T), M = Oe(p.domReference, T), P = p.domReference.getBoundingClientRect(), E = p.floating.getBoundingClientRect(), R = g.split("-")[0], D = f > E.right - E.width / 2, L = h > E.bottom - E.height / 2, F = OC(N, P), $ = E.width > P.width, B = E.height > P.height, W = ($ ? P : E).left, V = ($ ? P : E).right, U = (B ? P : E).top, K = (B ? P : E).bottom;
      if (A && (i = true, !S))
        return;
      if (M && (i = false), M && !S) {
        i = true;
        return;
      }
      if (S && pe(x.relatedTarget) && Oe(p.floating, x.relatedTarget) || y && On(y.nodesRef.current, v).some((ce) => {
        let {
          context: J
        } = ce;
        return J == null ? void 0 : J.open;
      }))
        return;
      if (R === "top" && h >= P.bottom - 1 || R === "bottom" && h <= P.top + 1 || R === "left" && f >= P.right - 1 || R === "right" && f <= P.left + 1)
        return w();
      let q = [];
      switch (R) {
        case "top":
          q = [[W, P.top + 1], [W, E.bottom - 1], [V, E.bottom - 1], [V, P.top + 1]];
          break;
        case "bottom":
          q = [[W, E.top + 1], [W, P.bottom - 1], [V, P.bottom - 1], [V, E.top + 1]];
          break;
        case "left":
          q = [[E.right - 1, K], [E.right - 1, U], [P.left + 1, U], [P.left + 1, K]];
          break;
        case "right":
          q = [[P.right - 1, K], [P.right - 1, U], [E.left + 1, U], [E.left + 1, K]];
          break;
      }
      function X(ce) {
        let [J, re] = ce;
        switch (R) {
          case "top": {
            const Ie = [$ ? J + e / 2 : D ? J + e * 4 : J - e * 4, re + e + 1], Be = [$ ? J - e / 2 : D ? J + e * 4 : J - e * 4, re + e + 1], Q = [[E.left, D || $ ? E.bottom - e : E.top], [E.right, D ? $ ? E.bottom - e : E.top : E.bottom - e]];
            return [Ie, Be, ...Q];
          }
          case "bottom": {
            const Ie = [$ ? J + e / 2 : D ? J + e * 4 : J - e * 4, re - e], Be = [$ ? J - e / 2 : D ? J + e * 4 : J - e * 4, re - e], Q = [[E.left, D || $ ? E.top + e : E.bottom], [E.right, D ? $ ? E.top + e : E.bottom : E.top + e]];
            return [Ie, Be, ...Q];
          }
          case "left": {
            const Ie = [J + e + 1, B ? re + e / 2 : L ? re + e * 4 : re - e * 4], Be = [J + e + 1, B ? re - e / 2 : L ? re + e * 4 : re - e * 4];
            return [...[[L || B ? E.right - e : E.left, E.top], [L ? B ? E.right - e : E.left : E.right - e, E.bottom]], Ie, Be];
          }
          case "right": {
            const Ie = [J - e, B ? re + e / 2 : L ? re + e * 4 : re - e * 4], Be = [J - e, B ? re - e / 2 : L ? re + e * 4 : re - e * 4], Q = [[L || B ? E.left + e : E.right, E.top], [L ? B ? E.left + e : E.right : E.left + e, E.bottom]];
            return [Ie, Be, ...Q];
          }
        }
      }
      if (!$d([_, O], q)) {
        if (i && !F)
          return w();
        if (!S && r) {
          const ce = c(x.clientX, x.clientY);
          if (ce !== null && ce < 0.1)
            return w();
        }
        $d([_, O], X([f, h])) ? !i && r && (o = window.setTimeout(w, 40)) : w();
      }
    };
  };
  return d.__options = {
    blockPointerEvents: n
  }, d;
}
const NC = ({
  arrowRef: t7,
  placement: e
}) => {
  const n = [];
  return n.push(x5(8)), n.push(e === "auto" ? C5() : k5()), n.push(w5({ padding: 8 })), t7 != null && t7.current && n.push(_5({ element: t7.current })), n;
}, RC = ({ placement: t7 }) => t7 === "auto" ? void 0 : t7, MC = ({ placement: t7 }) => ({
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
})[t7.split("-")[0]], jh = ({
  open: t7,
  arrowRef: e,
  placement: n = "top",
  setOpen: r
}) => zh({
  placement: RC({ placement: n }),
  open: t7,
  onOpenChange: r,
  whileElementsMounted: wh,
  middleware: NC({ placement: n, arrowRef: e })
}), Hh = ({
  context: t7,
  trigger: e,
  role: n = "tooltip",
  interactions: r = []
}) => Bh([
  Lh(t7, { enabled: e === "click" }),
  sC(t7, {
    enabled: e === "hover",
    handleClose: TC()
  }),
  Fh(t7),
  $h(t7, { role: n }),
  ...r
]), Wh = Ye(void 0);
function Ua() {
  const t7 = De(Wh);
  if (!t7)
    throw new Error("useDropdownContext should be used within the DropdownContext provider!");
  return t7;
}
const Ka = ({ className: t7, theme: e = {}, ...n }) => {
  const { theme: r } = Ua(), o = e.divider ?? r.floating.divider;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: I(o, t7), ...n });
}, Vh = ({ children: t7, className: e, theme: n = {}, ...r }) => {
  const { theme: o } = Ua(), i = n.header ?? o.floating.header;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: I(i, e), ...r, children: t7 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ka, {})
  ] });
}, Yh = ue(
  ({ children: t7, className: e, icon: n, onClick: r, theme: o = {}, ...i }, s) => {
    const { ref: a, index: l } = Q5({ label: typeof t7 == "string" ? t7 : void 0 }), c = Oh([s, a]), { theme: d, activeIndex: u, dismissOnClick: f, getItemProps: h, handleSelect: g } = Ua(), p = u === l, m = j(d.floating.item, o), v = i;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { role: "menuitem", className: m.container, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Na,
      {
        ref: c,
        className: I(m.base, e),
        ...v,
        ...h({
          onClick: () => {
            r == null || r(), f && g(null);
          }
        }),
        tabIndex: p ? 0 : -1,
        children: [
          n && /* @__PURE__ */ jsxRuntimeExports.jsx(n, { className: m.icon }),
          t7
        ]
      }
    ) });
  }
);
Yh.displayName = "DropdownItem";
const PC = {
  top: j1,
  right: Mf,
  bottom: Rf,
  left: $1
}, AC = ({
  refs: t7,
  children: e,
  inline: n,
  theme: r,
  disabled: o,
  setButtonWidth: i,
  getReferenceProps: s,
  renderTrigger: a,
  ...l
}) => {
  const c = t7.reference, d = s();
  if (Ze(() => {
    c.current && (i == null || i(c.current.clientWidth));
  }, [c, i]), a) {
    const u = a(r);
    return Vo(u, { ref: t7.setReference, disabled: o, ...d, ...u.props });
  }
  return n ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", ref: t7.setReference, className: r == null ? void 0 : r.inlineWrapper, disabled: o, ...d, children: e }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Jf, { ...l, disabled: o, type: "button", ref: t7.setReference, ...d, children: e });
}, Uh = ({
  children: t7,
  className: e,
  dismissOnClick: n = true,
  theme: r = {},
  renderTrigger: o,
  ...i
}) => {
  const [s, a] = ye(false), [l, c] = ye(null), [d, u] = ye(null), [f, h] = ye(void 0), g = Yt([]), p = Yt([]), m = j(G().dropdown, r), v = i, y = i["data-testid"] || "flowbite-dropdown-target", {
    placement: C = i.inline ? "bottom-start" : "bottom",
    trigger: x = "click",
    label: w,
    inline: _,
    arrowIcon: O = true,
    ...N
  } = v, T = nl((B) => {
    u(B), a(false);
  }, []), S = nl(
    (B) => {
      s ? c(B) : T(B);
    },
    [s, T]
  ), { context: A, floatingStyles: M, refs: P } = jh({
    open: s,
    setOpen: a,
    placement: C
  }), E = _C(A, {
    listRef: g,
    activeIndex: l,
    selectedIndex: d,
    onNavigate: c
  }), R = EC(A, {
    listRef: p,
    activeIndex: l,
    selectedIndex: d,
    onMatch: S
  }), { getReferenceProps: D, getFloatingProps: L, getItemProps: F } = Hh({
    context: A,
    role: "menu",
    trigger: x,
    interactions: [E, R]
  }), $ = wi(() => {
    const [B] = C.split("-");
    return PC[B] ?? Rf;
  }, [C]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Wh.Provider, { value: { theme: m, activeIndex: l, dismissOnClick: n, getItemProps: F, handleSelect: T }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      AC,
      {
        ...N,
        refs: P,
        inline: _,
        theme: m,
        "data-testid": y,
        className: I(m.floating.target, N.className),
        setButtonWidth: h,
        getReferenceProps: D,
        renderTrigger: o,
        children: [
          w,
          O && /* @__PURE__ */ jsxRuntimeExports.jsx($, { className: m.arrowIcon })
        ]
      }
    ),
    s && /* @__PURE__ */ jsxRuntimeExports.jsx(Ih, { context: A, modal: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: P.setFloating,
        style: { ...M, minWidth: f },
        "data-testid": "flowbite-dropdown",
        "aria-expanded": s,
        ...L({
          className: I(
            m.floating.base,
            m.floating.animation,
            "duration-100",
            !s && m.floating.hidden,
            m.floating.style.auto,
            e
          )
        }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Z5, { elementsRef: g, labelsRef: p, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: m.content, tabIndex: -1, children: t7 }) })
      }
    ) })
  ] });
};
Uh.displayName = "Dropdown";
Vh.displayName = "Dropdown.Header";
Ka.displayName = "Dropdown.Divider";
Object.assign(Uh, {
  Item: Yh,
  Header: Vh,
  Divider: Ka
});
const Kh = ue(
  ({ className: t7, color: e = "gray", helperText: n, sizing: r = "md", theme: o = {}, ...i }, s) => {
    const a = j(G().fileInput, o);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: I(a.root.base, t7), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: a.field.base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: I(
            a.field.input.base,
            a.field.input.colors[e],
            a.field.input.sizes[r]
          ),
          ...i,
          type: "file",
          ref: s
        }
      ) }) }),
      n && /* @__PURE__ */ jsxRuntimeExports.jsx(io, { color: e, children: n })
    ] });
  }
);
Kh.displayName = "FileInput";
const DC = ue(
  ({
    label: t7,
    helperText: e,
    color: n = "default",
    sizing: r = "md",
    variant: o,
    disabled: i = false,
    theme: s = {},
    className: a,
    ...l
  }, c) => {
    const d = Dn(), u = j(G().floatingLabel, s);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: I("relative", o === "standard" ? "z-0" : ""), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            id: l.id ? l.id : "floatingLabel" + d,
            "aria-describedby": "outlined_success_help",
            className: I(u.input[n][o][r], a),
            placeholder: " ",
            "data-testid": "floating-label",
            disabled: i,
            ...l,
            ref: c
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            htmlFor: l.id ? l.id : "floatingLabel" + d,
            className: I(u.label[n][o][r], a),
            children: t7
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: "outlined_helper_text" + d, className: I(u.helperText[n], a), children: e })
    ] });
  }
);
DC.displayName = "FloatingLabel";
const qh = ({
  alt: t7,
  className: e,
  children: n,
  href: r,
  name: o,
  src: i,
  theme: s = {},
  ...a
}) => {
  const l = j(G().footer.brand, s);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: r ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { "data-testid": "flowbite-footer-brand", href: r, className: I(l.base, e), ...a, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: t7, src: i, className: l.img }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-testid": "flowbite-footer-brand-span", className: l.span, children: o }),
    n
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      alt: t7,
      "data-testid": "flowbite-footer-brand",
      src: i,
      className: I(l.img, e),
      ...a
    }
  ) });
}, Gh = ({
  by: t7,
  className: e,
  href: n,
  theme: r = {},
  year: o,
  ...i
}) => {
  const s = j(G().footer.copyright, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-testid": "flowbite-footer-copyright", className: I(s.base, e), ...i, children: [
    "© ",
    o,
    n ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: n, className: s.href, children: t7 }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-testid": "flowbite-footer-copyright-span", className: s.span, children: t7 })
  ] });
}, Xh = ({ className: t7, theme: e = {}, ...n }) => {
  const r = j(G().footer.divider, e);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { "data-testid": "footer-divider", className: I(r.base, t7), ...n });
}, Jh = ({
  ariaLabel: t7,
  className: e,
  href: n,
  icon: r,
  theme: o = {},
  ...i
}) => {
  const s = j(G().footer.icon, o);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: n ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      "aria-label": t7,
      "data-testid": "flowbite-footer-icon",
      href: n,
      className: I(s.base, e),
      ...i,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(r, { className: s.size })
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(r, { "data-testid": "flowbite-footer-icon", className: s.size, ...i }) });
}, Zh = ({
  as: t7 = "a",
  children: e,
  className: n,
  href: r,
  theme: o = {},
  ...i
}) => {
  const s = j(G().footer.groupLink.link, o);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: I(s.base, n), children: /* @__PURE__ */ jsxRuntimeExports.jsx(t7, { href: r, className: s.href, ...i, children: e }) });
}, Qh = ({
  children: t7,
  className: e,
  col: n = false,
  theme: r = {},
  ...o
}) => {
  const i = j(G().footer.groupLink, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { "data-testid": "footer-groupLink", className: I(i.base, n && i.col, e), ...o, children: t7 });
}, eg = ({
  as: t7 = "h2",
  className: e,
  theme: n = {},
  title: r,
  ...o
}) => {
  const i = j(G().footer.title, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(t7, { "data-testid": "flowbite-footer-title", className: I(i.base, e), ...o, children: r });
}, tg = ({
  bgDark: t7 = false,
  children: e,
  className: n,
  container: r = false,
  theme: o = {},
  ...i
}) => {
  const s = j(G().footer, o);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "footer",
    {
      "data-testid": "flowbite-footer",
      className: I(s.root.base, t7 && s.root.bgDark, r && s.root.container, n),
      ...i,
      children: e
    }
  );
};
tg.displayName = "Footer";
Gh.displayName = "Footer.Copyright";
Zh.displayName = "Footer.Link";
qh.displayName = "Footer.Brand";
Qh.displayName = "Footer.LinkGroup";
Jh.displayName = "Footer.Icon";
eg.displayName = "Footer.Title";
Xh.displayName = "Footer.Divider";
Object.assign(tg, {
  Copyright: Gh,
  Link: Zh,
  LinkGroup: Qh,
  Brand: qh,
  Icon: Jh,
  Title: eg,
  Divider: Xh
});
const ng = ({
  children: t7,
  className: e,
  color: n = "default",
  disabled: r = false,
  theme: o = {},
  value: i,
  ...s
}) => {
  const a = j(G().label, o);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "label",
    {
      className: I(a.root.base, a.root.colors[n], r && a.root.disabled, e),
      "data-testid": "flowbite-label",
      ...s,
      children: i ?? t7 ?? ""
    }
  );
};
ng.displayName = "Label";
const rg = ({ children: t7, className: e, icon: n, theme: r = {}, ...o }) => {
  const i = j(G().list.item, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: I(i.withIcon[n ? "on" : "off"], e), ...o, children: [
    n && /* @__PURE__ */ jsxRuntimeExports.jsx(n, { className: I(i.icon) }),
    t7
  ] });
}, og = ({
  children: t7,
  className: e,
  unstyled: n,
  nested: r,
  ordered: o,
  horizontal: i,
  theme: s = {},
  ...a
}) => {
  const l = j(G().list, s);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    o ? "ol" : "ul",
    {
      className: I(
        l.root.base,
        l.root.ordered[o ? "on" : "off"],
        n && l.root.unstyled,
        r && l.root.nested,
        i && l.root.horizontal,
        e
      ),
      ...a,
      children: t7
    }
  );
};
og.displayName = "List";
rg.displayName = "List.Item";
Object.assign(og, { Item: rg });
const ig = ({
  active: t7,
  children: e,
  className: n,
  href: r,
  icon: o,
  onClick: i,
  theme: s = {},
  disabled: a,
  ...l
}) => {
  const c = j(G().listGroup.item, s), d = typeof r < "u", u = d ? "a" : "button";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: I(c.base, n), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    u,
    {
      href: r,
      onClick: i,
      type: d ? void 0 : "button",
      disabled: a,
      className: I(
        c.link.active[t7 ? "on" : "off"],
        c.link.disabled[a ? "on" : "off"],
        c.link.base,
        c.link.href[d ? "on" : "off"]
      ),
      ...l,
      children: [
        o && /* @__PURE__ */ jsxRuntimeExports.jsx(o, { "aria-hidden": true, "data-testid": "flowbite-list-group-item-icon", className: c.link.icon }),
        e
      ]
    }
  ) });
}, sg = ({ children: t7, className: e, theme: n = {}, ...r }) => {
  const o = j(G().listGroup, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: I(o.root.base, e), ...r, children: t7 });
};
sg.displayName = "ListGroup";
ig.displayName = "ListGroup.Item";
Object.assign(sg, {
  Item: ig
});
const ag = Ye(void 0);
function qa() {
  const t7 = De(ag);
  if (!t7)
    throw new Error("useModalContext should be used within the ModalContext provider!");
  return t7;
}
const lg = ({ children: t7, className: e, theme: n = {}, ...r }) => {
  const { theme: o, popup: i } = qa(), s = j(o.body, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: I(s.base, i && [s.popup], e), ...r, children: t7 });
}, cg = ({ children: t7, className: e, theme: n = {}, ...r }) => {
  const { theme: o, popup: i } = qa(), s = j(o.footer, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: I(s.base, !i && s.popup, e), ...r, children: t7 });
}, dg = ({
  as: t7 = "h3",
  children: e,
  className: n,
  theme: r = {},
  id: o,
  ...i
}) => {
  const s = Dn(), a = o || s, { theme: l, popup: c, onClose: d, setHeaderId: u } = qa(), f = j(l.header, r);
  return Vs(() => (u(a), () => u(void 0)), [a, u]), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: I(f.base, c && f.popup, n), ...i, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(t7, { id: a, className: f.title, children: e }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Close", className: f.close.base, type: "button", onClick: d, children: /* @__PURE__ */ jsxRuntimeExports.jsx(H1, { "aria-hidden": true, className: f.close.icon }) })
  ] });
}, ug = ue(
  ({
    children: t7,
    className: e,
    dismissible: n = false,
    onClose: r,
    popup: o,
    position: i = "center",
    root: s,
    show: a,
    size: l = "2xl",
    theme: c = {},
    initialFocus: d,
    ...u
  }, f) => {
    const [h, g] = ye(void 0), p = j(G().modal, c), { context: m } = zh({
      open: a,
      onOpenChange: () => r && r()
    }), v = Oh([m.refs.setFloating, f]), y = Lh(m), C = Fh(m, { outsidePressEvent: "mousedown", enabled: n }), x = $h(m), { getFloatingProps: w } = Bh([y, C, x]);
    return a ? /* @__PURE__ */ jsxRuntimeExports.jsx(ag.Provider, { value: { theme: p, popup: o, onClose: r, setHeaderId: g }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(mC, { root: s, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      vC,
      {
        lockScroll: true,
        "data-testid": "modal-overlay",
        className: I(
          p.root.base,
          p.root.positions[i],
          a ? p.root.show.on : p.root.show.off,
          e
        ),
        ...u,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ih, { context: m, initialFocus: d, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: v,
            ...w(u),
            "aria-labelledby": h,
            className: I(p.content.base, p.root.sizes[l]),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: p.content.inner, children: t7 })
          }
        ) })
      }
    ) }) }) : null;
  }
);
ug.displayName = "Modal";
dg.displayName = "Modal.Header";
lg.displayName = "Modal.Body";
cg.displayName = "Modal.Footer";
Object.assign(ug, {
  Header: dg,
  Body: lg,
  Footer: cg
});
const fg = Ye(void 0);
function Ki() {
  const t7 = De(fg);
  if (!t7)
    throw new Error("useNavBarContext should be used within the NavbarContext provider!");
  return t7;
}
const hg = ({
  as: t7 = "a",
  children: e,
  className: n,
  theme: r = {},
  ...o
}) => {
  const { theme: i } = Ki(), s = j(i.brand, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(t7, { className: I(s.base, n), ...o, children: e });
}, gg = ({ children: t7, className: e, theme: n = {}, ...r }) => {
  const { theme: o, isOpen: i } = Ki(), s = j(o.collapse, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-testid": "flowbite-navbar-collapse",
      className: I(s.base, s.hidden[i ? "off" : "on"], e),
      ...r,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: s.list, children: t7 })
    }
  );
}, pg = ({
  active: t7,
  as: e = "a",
  disabled: n,
  children: r,
  className: o,
  theme: i = {},
  onClick: s,
  ...a
}) => {
  const { theme: l, setIsOpen: c } = Ki(), d = j(l.link, i), u = (f) => {
    c(false), s == null || s(f);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    e,
    {
      className: I(
        d.base,
        t7 && d.active.on,
        !t7 && !n && d.active.off,
        d.disabled[n ? "on" : "off"],
        o
      ),
      onClick: u,
      ...a,
      children: r
    }
  ) });
}, mg = ({
  barIcon: t7 = kp,
  className: e,
  theme: n = {},
  ...r
}) => {
  const { theme: o, isOpen: i, setIsOpen: s } = Ki(), a = j(o.toggle, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      "data-testid": "flowbite-navbar-toggle",
      onClick: () => {
        s(!i);
      },
      className: I(a.base, e),
      ...r,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Open main menu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(t7, { "aria-hidden": true, className: a.icon })
      ]
    }
  );
}, bg = ({
  border: t7,
  children: e,
  className: n,
  fluid: r = false,
  menuOpen: o,
  rounded: i,
  theme: s = {},
  ...a
}) => {
  const [l, c] = ye(o), d = j(G().navbar, s);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(fg.Provider, { value: { theme: d, isOpen: l, setIsOpen: c }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "nav",
    {
      className: I(
        d.root.base,
        d.root.bordered[t7 ? "on" : "off"],
        d.root.rounded[i ? "on" : "off"],
        n
      ),
      ...a,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: I(d.root.inner.base, d.root.inner.fluid[r ? "on" : "off"]), children: e })
    }
  ) });
};
bg.displayName = "Navbar";
hg.displayName = "Navbar.Brand";
gg.displayName = "Navbar.Collapse";
pg.displayName = "Navbar.Link";
mg.displayName = "Navbar.Toggle";
Object.assign(bg, {
  Brand: hg,
  Collapse: gg,
  Link: pg,
  Toggle: mg
});
const IC = (t7, e) => t7 >= e ? [] : [...Array(e - t7 + 1).keys()].map((n) => n + t7), Ga = ({
  active: t7,
  children: e,
  className: n,
  onClick: r,
  theme: o = {},
  ...i
}) => {
  const s = j(G().pagination, o);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      className: I(t7 && s.pages.selector.active, n),
      onClick: r,
      ...i,
      children: e
    }
  );
};
Ga.displayName = "Pagination.Button";
const Ws = ({
  children: t7,
  className: e,
  onClick: n,
  theme: r = {},
  disabled: o = false,
  ...i
}) => {
  const s = j(G().pagination, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      className: I(o && s.pages.selector.disabled, e),
      disabled: o,
      onClick: n,
      ...i,
      children: t7
    }
  );
};
Ws.displayName = "Pagination.Navigation";
const yg = ({
  className: t7,
  currentPage: e,
  layout: n = "pagination",
  nextLabel: r = "Next",
  onPageChange: o,
  previousLabel: i = "Previous",
  renderPaginationButton: s = (u) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ga, { ...u }),
  showIcons: a = false,
  theme: l = {},
  totalPages: c,
  ...d
}) => {
  const u = j(G().pagination, l), f = Math.min(Math.max(n === "pagination" ? e + 2 : e + 4, 5), c), h = Math.max(1, f - 4), g = () => {
    o(Math.min(e + 1, c));
  }, p = () => {
    o(Math.max(e - 1, 1));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: I(u.base, t7), ...d, children: [
    n === "table" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: u.layout.table.base, children: [
      "Showing ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: u.layout.table.span, children: h }),
      " to ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: u.layout.table.span, children: f }),
      " of ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: u.layout.table.span, children: c }),
      " Entries"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: u.pages.base, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Ws,
        {
          className: I(u.pages.previous.base, a && u.pages.showIcon),
          onClick: p,
          disabled: e === 1,
          children: [
            a && /* @__PURE__ */ jsxRuntimeExports.jsx(Tf, { "aria-hidden": true, className: u.pages.previous.icon }),
            i
          ]
        }
      ) }),
      n === "pagination" && IC(h, f).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "aria-current": m === e ? "page" : void 0, children: s({
        className: I(u.pages.selector.base, e === m && u.pages.selector.active),
        active: m === e,
        onClick: () => o(m),
        children: m
      }) }, m)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Ws,
        {
          className: I(u.pages.next.base, a && u.pages.showIcon),
          onClick: g,
          disabled: e === c,
          children: [
            r,
            a && /* @__PURE__ */ jsxRuntimeExports.jsx(Nf, { "aria-hidden": true, className: u.pages.next.icon })
          ]
        }
      ) })
    ] })
  ] });
};
yg.displayName = "Pagination";
Object.assign(yg, {
  Button: Ga
});
const LC = ue(
  ({ className: t7, theme: e = {}, ...n }, r) => {
    const o = j(G().radio, e);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: r, type: "radio", className: I(o.root.base, t7), ...n });
  }
);
LC.displayName = "Radio";
const FC = ue(
  ({ className: t7, sizing: e = "md", theme: n = {}, ...r }, o) => {
    const i = j(G().rangeSlider, n);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "flowbite-range-slider", className: I(i.root.base, t7), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: i.field.base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: o,
        type: "range",
        className: I(i.field.input.base, i.field.input.sizes[e]),
        ...r
      }
    ) }) }) });
  }
);
FC.displayName = "RangeSlider";
const vg = ({
  children: t7,
  className: e,
  percentFilled: n = 0,
  theme: r = {},
  ...o
}) => {
  const i = j(G().ratingAdvanced, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: I(i.base, e), ...o, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: i.label, children: t7 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: i.progress.base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: i.progress.fill,
        "data-testid": "flowbite-rating-fill",
        style: { width: `${n}%` }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: i.progress.label, children: `${n}%` })
  ] });
}, xg = Ye(void 0);
function zC() {
  const t7 = De(xg);
  if (!t7)
    throw new Error("useRatingContext should be used within the RatingContext provider!");
  return t7;
}
const wg = ({
  className: t7,
  filled: e = true,
  starIcon: n = z1,
  theme: r = {},
  ...o
}) => {
  const { theme: i, size: s = "sm" } = zC(), a = j(i.star, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    n,
    {
      "data-testid": "flowbite-rating-star",
      className: I(a.sizes[s], a[e ? "filled" : "empty"], t7),
      ...o
    }
  );
}, kg = ({ children: t7, className: e, size: n = "sm", theme: r = {}, ...o }) => {
  const i = j(G().rating, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(xg.Provider, { value: { theme: i, size: n }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: I(i.root.base, e), ...o, children: t7 }) });
};
kg.displayName = "Rating";
wg.displayName = "Rating.Star";
vg.displayName = "Rating.Advanced";
Object.assign(kg, {
  Star: wg,
  Advanced: vg
});
const BC = ue(
  ({
    addon: t7,
    children: e,
    className: n,
    color: r = "gray",
    helperText: o,
    icon: i,
    shadow: s,
    sizing: a = "md",
    theme: l = {},
    ...c
  }, d) => {
    const u = j(G().select, l);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: I(u.base, n), children: [
      t7 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: u.addon, children: t7 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: u.field.base, children: [
        i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: u.field.icon.base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(i, { className: u.field.icon.svg }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            className: I(
              u.field.select.base,
              u.field.select.colors[r],
              u.field.select.sizes[a],
              u.field.select.withIcon[i ? "on" : "off"],
              u.field.select.withAddon[t7 ? "on" : "off"],
              u.field.select.withShadow[s ? "on" : "off"]
            ),
            ...c,
            ref: d,
            children: e
          }
        ),
        o && /* @__PURE__ */ jsxRuntimeExports.jsx(io, { color: r, children: o })
      ] })
    ] });
  }
);
BC.displayName = "Select";
const $C = ({
  animation: t7 = "duration-300",
  arrow: e = true,
  children: n,
  className: r,
  content: o,
  placement: i = "top",
  style: s = "dark",
  theme: a,
  trigger: l = "hover",
  minWidth: c,
  ...d
}) => {
  const u = Yt(null), [f, h] = ye(false), g = jh({
    open: f,
    placement: i,
    arrowRef: u,
    setOpen: h
  }), {
    context: p,
    middlewareData: { arrow: { x: m, y: v } = {} },
    refs: y,
    strategy: C,
    update: x,
    x: w,
    y: _
  } = g, O = kC(p), { getFloatingProps: N, getReferenceProps: T } = Hh({
    context: p,
    role: "tooltip",
    trigger: l,
    interactions: [O]
  });
  return Ze(() => {
    if (y.reference.current && y.floating.current && f)
      return wh(y.reference.current, y.floating.current, x);
  }, [f, y.floating, y.reference, x]), /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: y.setReference,
        className: a.target,
        "data-testid": "flowbite-tooltip-target",
        ...T(),
        children: n
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: y.setFloating,
        "data-testid": "flowbite-tooltip",
        ...N({
          className: I(
            a.base,
            t7 && `${a.animation} ${t7}`,
            !f && a.hidden,
            a.style[s],
            r
          ),
          style: {
            position: C,
            top: _ ?? " ",
            left: w ?? " ",
            minWidth: c
          },
          ...d
        }),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: a.content, children: o }),
          e && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: I(
                a.arrow.base,
                s === "dark" && a.arrow.style.dark,
                s === "light" && a.arrow.style.light,
                s === "auto" && a.arrow.style.auto
              ),
              "data-testid": "flowbite-tooltip-arrow",
              ref: u,
              style: {
                top: v ?? " ",
                left: m ?? " ",
                right: " ",
                bottom: " ",
                [MC({ placement: g.placement })]: a.arrow.placement
              },
              children: " "
            }
          )
        ]
      }
    )
  ] });
}, Xa = ({
  animation: t7 = "duration-300",
  arrow: e = true,
  children: n,
  className: r,
  content: o,
  placement: i = "top",
  style: s = "dark",
  theme: a = {},
  trigger: l = "hover",
  ...c
}) => {
  const d = j(G().tooltip, a);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    $C,
    {
      animation: t7,
      arrow: e,
      content: o,
      placement: i,
      style: s,
      theme: d,
      trigger: l,
      className: r,
      ...c,
      children: n
    }
  );
};
Xa.displayName = "Tooltip";
const Cg = Ye(void 0);
function ur() {
  const t7 = De(Cg);
  if (!t7)
    throw new Error("useSidebarContext should be used within the SidebarContext provider!");
  return t7;
}
const Ja = Ye(void 0);
function jC() {
  const t7 = De(Ja);
  if (!t7)
    throw new Error("useSidebarItemContext should be used within the SidebarItemContext provider!");
  return t7;
}
const _g = ({
  children: t7,
  className: e,
  icon: n,
  label: r,
  chevronIcon: o = Of,
  renderChevronIcon: i,
  open: s = false,
  theme: a = {},
  ...l
}) => {
  const c = Dn(), [d, u] = ye(s), { theme: f, isCollapsed: h } = ur(), g = j(f.collapse, a);
  return Ze(() => u(s), [s]), /* @__PURE__ */ jsxRuntimeExports.jsxs(({ children: m }) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: h && !d ? /* @__PURE__ */ jsxRuntimeExports.jsx(Xa, { content: r, placement: "right", children: m }) : m }), { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        id: `flowbite-sidebar-collapse-${c}`,
        onClick: () => u(!d),
        title: r,
        type: "button",
        className: I(g.button, e),
        ...l,
        children: [
          n && /* @__PURE__ */ jsxRuntimeExports.jsx(
            n,
            {
              "aria-hidden": true,
              "data-testid": "flowbite-sidebar-collapse-icon",
              className: I(g.icon.base, g.icon.open[d ? "on" : "off"])
            }
          ),
          h ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: r }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-testid": "flowbite-sidebar-collapse-label", className: g.label.base, children: r }),
            i ? i(g, d) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              o,
              {
                "aria-hidden": true,
                className: I(g.label.icon.base, g.label.icon.open[d ? "on" : "off"])
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { "aria-labelledby": `flowbite-sidebar-collapse-${c}`, hidden: !d, className: g.list, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ja.Provider, { value: { isInsideCollapse: true }, children: t7 }) })
  ] });
};
_g.displayName = "Sidebar.Collapse";
const Sg = ({
  children: t7,
  color: e = "info",
  className: n,
  theme: r = {},
  ...o
}) => {
  const { theme: i, isCollapsed: s } = ur(), a = j(i.cta, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-testid": "sidebar-cta",
      hidden: s,
      className: I(a.base, a.color[e], n),
      ...o,
      children: t7
    }
  );
};
Sg.displayName = "Sidebar.CTA";
const HC = ({ id: t7, theme: e, isCollapsed: n, tooltipChildren: r, children: o, ...i }) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { ...i, children: n ? /* @__PURE__ */ jsxRuntimeExports.jsx(
  Xa,
  {
    content: /* @__PURE__ */ jsxRuntimeExports.jsx(Eg, { id: t7, theme: e, children: r }),
    placement: "right",
    children: o
  }
) : o }), Eg = ({ id: t7, theme: e, children: n }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "span",
  {
    "data-testid": "flowbite-sidebar-item-content",
    id: `flowbite-sidebar-item-${t7}`,
    className: I(e.content.base),
    children: n
  }
), Og = ue(
  ({
    active: t7,
    as: e = "a",
    children: n,
    className: r,
    icon: o,
    label: i,
    labelColor: s = "info",
    theme: a = {},
    ...l
  }, c) => {
    var p, m, v, y;
    const d = Dn(), { theme: u, isCollapsed: f } = ur(), { isInsideCollapse: h } = jC(), g = j(u.item, a);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(HC, { theme: g, className: g.listItem, id: d, isCollapsed: f, tooltipChildren: n, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      e,
      {
        "aria-labelledby": `flowbite-sidebar-item-${d}`,
        ref: c,
        className: I(
          g.base,
          t7 && g.active,
          !f && h && ((p = g.collapsed) == null ? void 0 : p.insideCollapse),
          r
        ),
        ...l,
        children: [
          o && /* @__PURE__ */ jsxRuntimeExports.jsx(
            o,
            {
              "aria-hidden": true,
              "data-testid": "flowbite-sidebar-item-icon",
              className: I((m = g.icon) == null ? void 0 : m.base, t7 && ((v = g.icon) == null ? void 0 : v.active))
            }
          ),
          f && !o && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: (y = g.collapsed) == null ? void 0 : y.noIcon, children: n.charAt(0).toLocaleUpperCase() ?? "?" }),
          !f && /* @__PURE__ */ jsxRuntimeExports.jsx(Eg, { id: d, theme: g, children: n }),
          !f && i && /* @__PURE__ */ jsxRuntimeExports.jsx(Uf, { color: s, "data-testid": "flowbite-sidebar-label", hidden: f, className: g.label, children: i })
        ]
      }
    ) });
  }
);
Og.displayName = "Sidebar.Item";
const Tg = ({
  children: t7,
  className: e,
  theme: n = {},
  ...r
}) => {
  const { theme: o } = ur(), i = j(o.itemGroup, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { "data-testid": "flowbite-sidebar-item-group", className: I(i.base, e), ...r, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ja.Provider, { value: { isInsideCollapse: false }, children: t7 }) });
};
Tg.displayName = "Sidebar.ItemGroup";
const Ng = ({ children: t7, className: e, theme: n = {}, ...r }) => {
  const { theme: o } = ur(), i = j(o.items, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: I(i.base, e), "data-testid": "flowbite-sidebar-items", ...r, children: t7 });
};
Ng.displayName = "Sidebar.Items";
const Rg = ({
  children: t7,
  className: e,
  href: n,
  img: r,
  imgAlt: o = "",
  theme: i = {},
  ...s
}) => {
  const a = Dn(), { theme: l, isCollapsed: c } = ur(), d = j(l.logo, i);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      "aria-labelledby": `flowbite-sidebar-logo-${a}`,
      href: n,
      className: I(d.base, e),
      ...s,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: o, src: r, className: d.img }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: d.collapsed[c ? "on" : "off"], id: `flowbite-sidebar-logo-${a}`, children: t7 })
      ]
    }
  );
};
Rg.displayName = "Sidebar.Logo";
const Mg = ({
  children: t7,
  as: e = "nav",
  collapseBehavior: n = "collapse",
  collapsed: r = false,
  theme: o = {},
  className: i,
  ...s
}) => {
  const a = j(G().sidebar, o);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Cg.Provider, { value: { theme: a, isCollapsed: r }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    e,
    {
      "aria-label": "Sidebar",
      hidden: r && n === "hide",
      className: I(a.root.base, a.root.collapsed[r ? "on" : "off"], i),
      ...s,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: a.root.inner, children: t7 })
    }
  ) });
};
Mg.displayName = "Sidebar";
Object.assign(Mg, {
  Collapse: _g,
  CTA: Sg,
  Item: Og,
  Items: Ng,
  ItemGroup: Tg,
  Logo: Rg
});
const Pg = Ye(void 0);
function WC() {
  const t7 = De(Pg);
  if (!t7)
    throw new Error("useTableBodyContext should be used within the TableBodyContext provider!");
  return t7;
}
const Ag = Ye(void 0);
function Za() {
  const t7 = De(Ag);
  if (!t7)
    throw new Error("useTableContext should be used within the TableContext provider!");
  return t7;
}
const Dg = ue(
  ({ children: t7, className: e, theme: n = {}, ...r }, o) => {
    const { theme: i } = Za(), s = j(i.body, n);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Pg.Provider, { value: { theme: s }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: I(s.base, e), ref: o, ...r, children: t7 }) });
  }
);
Dg.displayName = "Table.Body";
const Ig = ue(
  ({ children: t7, className: e, theme: n = {}, ...r }, o) => {
    const { theme: i } = WC(), s = j(i.cell, n);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: I(s.base, e), ref: o, ...r, children: t7 });
  }
);
Ig.displayName = "Table.Cell";
const Lg = Ye(void 0);
function VC() {
  const t7 = De(Lg);
  if (!t7)
    throw new Error("useTableHeadContext should be used within the TableHeadContext provider!");
  return t7;
}
const Fg = ue(
  ({ children: t7, className: e, theme: n = {}, ...r }, o) => {
    const { theme: i } = Za(), s = j(i.head, n);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Lg.Provider, { value: { theme: s }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: I(s.base, e), ref: o, ...r, children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: t7 }) }) });
  }
);
Fg.displayName = "Table.Head";
const zg = ue(
  ({ children: t7, className: e, theme: n = {}, ...r }, o) => {
    const { theme: i } = VC(), s = j(i.cell, n);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: I(s.base, e), ref: o, ...r, children: t7 });
  }
);
zg.displayName = "Table.HeadCell";
const Bg = ue(
  ({ children: t7, className: e, theme: n = {}, ...r }, o) => {
    const { theme: i, hoverable: s, striped: a } = Za(), l = j(i.row, n);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "tr",
      {
        ref: o,
        "data-testid": "table-row-element",
        className: I(l.base, a && l.striped, s && l.hovered, e),
        ...r,
        children: t7
      }
    );
  }
);
Bg.displayName = "Table.Row";
const $g = ue(
  ({ children: t7, className: e, striped: n, hoverable: r, theme: o = {}, ...i }, s) => {
    const a = j(G().table, o);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "table-element", className: I(a.root.wrapper), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Ag.Provider, { value: { theme: a, striped: n, hoverable: r }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: I(a.root.shadow, e) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: I(a.root.base, e), ...i, ref: s, children: t7 })
    ] }) });
  }
);
$g.displayName = "Table";
const jn = Object.assign($g, {
  Head: Fg,
  Body: Dg,
  Row: Bg,
  Cell: Ig,
  HeadCell: zg
}), Un = ({ children: t7, className: e }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: e, children: t7 });
Un.displayName = "Tabs.Item";
const jg = ue(
  ({ children: t7, className: e, onActiveTabChange: n, style: r = "default", theme: o = {}, ...i }, s) => {
    const a = j(G().tabs, o), l = Dn(), c = wi(
      () => Kn.map(
        Kn.toArray(t7),
        ({ props: x }) => x
      ),
      [t7]
    ), d = Yt([]), [u, f] = ye(
      Math.max(
        0,
        c.findIndex((x) => x.active)
      )
    ), [h, g] = ye(-1), p = (x) => {
      f(x), n && n(x);
    }, m = ({ target: x }) => {
      p(x), g(x);
    }, v = ({ event: x, target: w }) => {
      x.key === "ArrowLeft" && g(Math.max(0, h - 1)), x.key === "ArrowRight" && g(Math.min(c.length - 1, h + 1)), x.key === "Enter" && (p(w), g(w));
    }, y = a.tablist.tabitem.styles[r], C = a.tabitemcontainer.styles[r];
    return Ze(() => {
      var x;
      (x = d.current[h]) == null || x.focus();
    }, [h]), Vd(s, () => ({
      setActiveTab: p
    })), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: I(a.base, e), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-label": "Tabs",
          role: "tablist",
          className: I(a.tablist.base, a.tablist.styles[r], e),
          ...i,
          children: c.map((x, w) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "aria-controls": `${l}-tabpanel-${w}`,
              "aria-selected": w === u,
              className: I(
                a.tablist.tabitem.base,
                y.base,
                w === u && y.active.on,
                w !== u && !x.disabled && y.active.off
              ),
              disabled: x.disabled,
              id: `${l}-tab-${w}`,
              onClick: () => m({ target: w }),
              onKeyDown: (_) => v({ event: _, target: w }),
              ref: (_) => d.current[w] = _,
              role: "tab",
              tabIndex: w === h ? 0 : -1,
              style: { zIndex: w === h ? 2 : 1 },
              children: [
                x.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(x.icon, { className: a.tablist.tabitem.icon }),
                x.title
              ]
            },
            w
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: I(a.tabitemcontainer.base, C), children: c.map((x, w) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-labelledby": `${l}-tab-${w}`,
          className: a.tabpanel,
          hidden: w !== u,
          id: `${l}-tabpanel-${w}`,
          role: "tabpanel",
          tabIndex: 0,
          children: x.children
        },
        w
      )) })
    ] });
  }
);
jg.displayName = "Tabs";
Object.assign(jg, {
  Item: Un
}); const UC = ue(
  ({ className: t7, color: e = "gray", helperText: n, shadow: r, theme: o = {}, ...i }, s) => {
    const a = j(G().textarea, o);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          ref: s,
          className: I(a.base, a.colors[e], a.withShadow[r ? "on" : "off"], t7),
          ...i
        }
      ),
      n && /* @__PURE__ */ jsxRuntimeExports.jsx(io, { color: e, children: n })
    ] });
  }
);
UC.displayName = "Textarea";
const Hg = Ye(void 0);
function Qa() {
  const t7 = De(Hg);
  if (!t7)
    throw new Error("useTimelineContentContext should be used within the TimelineContentContext provider!");
  return t7;
}
const Wg = ({ children: t7, className: e, theme: n = {}, ...r }) => {
  const { theme: o } = Qa(), i = j(o.body, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: I(i.base, e), ...r, children: t7 });
}, Vg = Ye(void 0);
function el() {
  const t7 = De(Vg);
  if (!t7)
    throw new Error("useTimelineContext should be used within the TimelineContext provider!");
  return t7;
}
const Yg = Ye(void 0);
function Ug() {
  const t7 = De(Yg);
  if (!t7)
    throw new Error("useTimelineItemContext should be used within the TimelineItemContext provider!");
  return t7;
}
const Kg = ({
  children: t7,
  className: e,
  theme: n = {},
  ...r
}) => {
  const { horizontal: o } = el(), { theme: i } = Ug(), s = j(i.content, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Hg.Provider, { value: { theme: s }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "timeline-content", className: I(o && s.root.base, e), ...r, children: t7 }) });
}, qg = ({ children: t7, className: e, theme: n = {}, ...r }) => {
  const { theme: o, horizontal: i } = el(), s = j(o.item, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Yg.Provider, { value: { theme: s }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "li",
    {
      "data-testid": "timeline-item",
      className: I(i && s.root.horizontal, !i && s.root.vertical, e),
      ...r,
      children: t7
    }
  ) });
}, Gg = ({
  children: t7,
  className: e,
  icon: n,
  theme: r = {},
  ...o
}) => {
  const { horizontal: i } = el(), { theme: s } = Ug(), a = j(s.point, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-testid": "timeline-point",
      className: I(i && a.horizontal, !i && a.vertical, e),
      ...o,
      children: [
        t7,
        n ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: I(a.marker.icon.wrapper), children: /* @__PURE__ */ jsxRuntimeExports.jsx(n, { "aria-hidden": true, className: I(a.marker.icon.base) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: I(i && a.marker.base.horizontal, !i && a.marker.base.vertical)
          }
        ),
        i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: I(a.line) })
      ]
    }
  );
}, Xg = ({ children: t7, className: e, theme: n = {}, ...r }) => {
  const { theme: o } = Qa(), i = j(o.time, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("time", { className: I(i.base, e), ...r, children: t7 });
}, Jg = ({
  as: t7 = "h3",
  children: e,
  className: n,
  theme: r = {},
  ...o
}) => {
  const { theme: i } = Qa(), s = j(i.title, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(t7, { className: I(s.base, n), ...o, children: e });
}, Zg = ({
  children: t7,
  className: e,
  horizontal: n,
  theme: r = {},
  ...o
}) => {
  const i = j(G().timeline, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Vg.Provider, { value: { theme: i, horizontal: n }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "ol",
    {
      "data-testid": "timeline-component",
      className: I(
        n && i.root.direction.horizontal,
        !n && i.root.direction.vertical,
        e
      ),
      ...o,
      children: t7
    }
  ) });
};
Zg.displayName = "Timeline";
qg.displayName = "Timeline.Item";
Gg.displayName = "Timeline.Point";
Kg.displayName = "Timeline.Content";
Xg.displayName = "Timeline.Time";
Jg.displayName = "Timeline.Title";
Wg.displayName = "Timeline.Body";
Object.assign(Zg, {
  Item: qg,
  Point: Gg,
  Content: Kg,
  Time: Xg,
  Title: Jg,
  Body: Wg
});
const Qg = Ye(void 0);
function KC() {
  const t7 = De(Qg);
  if (!t7)
    throw new Error("useToastContext should be used within the ToastContext provider!");
  return t7;
}
const ep = ({
  className: t7,
  onClick: e,
  theme: n = {},
  xIcon: r = B1,
  onDismiss: o,
  ...i
}) => {
  const { theme: s, duration: a, isClosed: l, isRemoved: c, setIsClosed: d, setIsRemoved: u } = KC(), f = j(s.toggle, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      "aria-label": "Close",
      onClick: (g) => {
        if (e && e(g), o) {
          o();
          return;
        }
        d(!l), setTimeout(() => u(!c), a);
      },
      type: "button",
      className: I(f.base, t7),
      ...i,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(r, { "aria-hidden": true, className: f.icon })
    }
  );
}, qC = {
  75: "duration-75",
  100: "duration-100",
  150: "duration-150",
  200: "duration-200",
  300: "duration-300",
  500: "duration-500",
  700: "duration-700",
  1e3: "duration-1000"
}, tp = ({ children: t7, className: e, duration: n = 300, theme: r = {}, ...o }) => {
  const [i, s] = ye(false), [a, l] = ye(false), c = j(G().toast, r);
  return a ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(Qg.Provider, { value: { theme: c, duration: n, isClosed: i, isRemoved: a, setIsClosed: s, setIsRemoved: l }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-testid": "flowbite-toast",
      role: "alert",
      className: I(c.root.base, qC[n], i && c.root.closed, e),
      ...o,
      children: t7
    }
  ) });
};
tp.displayName = "Toast";
ep.displayName = "Toast.Toggle";
Object.assign(tp, {
  Toggle: ep
});
const GC = ue(
  ({
    checked: t7,
    className: e,
    color: n = "blue",
    sizing: r = "md",
    disabled: o,
    label: i,
    name: s,
    onChange: a,
    theme: l = {},
    ...c
  }, d) => {
    const u = Dn(), f = j(G().toggleSwitch, l), h = () => a(!t7), g = () => {
      h();
    }, p = (m) => {
      m.code == "Enter" && m.preventDefault();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      s && t7 ? /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: d, checked: t7, hidden: true, name: s, readOnly: true, type: "checkbox", className: "sr-only" }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          "aria-checked": t7,
          "aria-labelledby": `${u}-flowbite-toggleswitch-label`,
          disabled: o,
          id: `${u}-flowbite-toggleswitch`,
          onClick: g,
          onKeyDown: p,
          role: "switch",
          tabIndex: 0,
          type: "button",
          className: I(f.root.base, f.root.active[o ? "off" : "on"], e),
          ...c,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "data-testid": "flowbite-toggleswitch-toggle",
                className: I(
                  f.toggle.base,
                  f.toggle.checked[t7 ? "on" : "off"],
                  t7 && f.toggle.checked.color[n],
                  f.toggle.sizes[r]
                )
              }
            ),
            i != null && i.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                "data-testid": "flowbite-toggleswitch-label",
                id: `${u}-flowbite-toggleswitch-label`,
                className: f.root.label,
                children: i
              }
            ) : null
          ]
        }
      )
    ] });
  }
);
GC.displayName = "ToggleSwitch";
const XC = ({
  currentPage: t7,
  totalPages: e,
  onPageChange: n
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: () => n(t7 - 1),
      disabled: t7 === 1,
      className: "p-2 text-gray-500 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tf, { className: "h-5 w-5" })
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-700", children: [
    t7,
    " de ",
    e
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: () => n(t7 + 1),
      disabled: t7 === e,
      className: "p-2 text-gray-500 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Nf, { className: "h-5 w-5" })
    }
  )
] });
function JC({
  label: t7,
  checked: e = false,
  disabled: n = false,
  onChange: r
}) {
  const [o, i] = ye(e);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "label",
      {
        className: `inline-flex items-center ${n ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              className: "peer sr-only",
              checked: o,
              onChange: (a) => {
                if (n) return;
                const l = a.target.checked;
                i(l), r == null || r(l);
              },
              disabled: n
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `peer relative h-6 w-11 rounded-full bg-gray-200 
          after:absolute after:start-[2px] 
          after:top-0.5 after:h-5 
          after:w-5 after:rounded-full 
          after:border after:border-gray-300 
          after:bg-white after:transition-all after:content-[''] 
          peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white 
          peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 
          dark:bg-gray-700 dark:peer-checked:bg-blue-600 
          dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full`
            }
          )
        ]
      }
    ),
    t7 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `text-sm ${n ? "text-gray-500" : "text-gray-700"}`,
        children: t7
      }
    )
  ] });
}
const g_ = ({
  columns: t7,
  data: e,
  showSearch: n = false,
  itemsPerPage: r = 5,
  title: o,
  onToggleChange: i
}) => {
  const [s, a] = k.useState(""), [l, c] = k.useState(1), d = k.useMemo(() => s.trim() ? e.filter(
    (g) => t7.some((p) => {
      const m = g[p.relation];
      return m != null && String(m).toLowerCase().includes(s.toLowerCase().trim());
    })
  ) : e, [e, s, t7]), u = k.useMemo(() => {
    const g = (l - 1) * r, p = g + r;
    return d.slice(g, p);
  }, [d, l, r]), f = Math.ceil(d.length / r), h = (g, p) => {
    const m = p[g.relation];
    return g.isToggle ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      JC,
      {
        checked: !!m,
        onChange: (v) => i == null ? void 0 : i({
          rowId: p.id,
          checked: v,
          row: p,
          columnKey: g.relation
        }),
        disabled: false
      }
    ) : g.cell ? g.cell(p) : m != null ? String(m) : "";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex items-center justify-between", children: o && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: o }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex", children: [
      n && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ma,
        {
          rightIcon: F1,
          placeholder: "Buscar",
          value: s,
          onChange: (g) => a(g.target.value)
        }
      ) }),
      f > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        XC,
        {
          currentPage: l,
          totalPages: f,
          onPageChange: c
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jn, { striped: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(jn.Head, { children: t7.map((g, p) => /* @__PURE__ */ jsxRuntimeExports.jsx(jn.HeadCell, { children: g.header }, p)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(jn.Body, { className: "divide-y", children: u.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        jn.Row,
        {
          className: "bg-white dark:border-gray-700 dark:bg-gray-800",
          children: t7.map((p, m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            jn.Cell,
            {
              className: "whitespace-nowrap font-medium text-gray-900 dark:text-white",
              children: h(p, g)
            },
            `${g.id}-${m}`
          ))
        },
        g.id
      )) })
    ] }) })
  ] });
}, jd = {
  "m-image-container": "layoutOutside-module__m-image-container__sCvFu",
  "m-image": "layoutOutside-module__m-image__kZHyH"
}, p_ = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-32", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tn,
    {
      classIm: "mx-auto",
      src: "https://ftp.mathilde-ads.com/151-41415c0c026df82dbb391c09db474cfa.png",
      alt: "Logo Mathilde ads",
      width: 400,
      height: 250
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: jd["m-image-container"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tn,
    {
      classIm: jd["m-image"],
      src: "https://ftp.mathilde-ads.com/151-3f28d319ba5adbe318c58ef38b858e50.png",
      alt: "Logo Mathilde ads",
      width: 400,
      height: 300
    }
  ) })
] }), m_ = ({
  onOpenModal: t7,
  checked: e,
  onChange: n,
  label: r,
  ...o
}) => {
  const i = () => {
    e || t7(), n(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: Yo["checkbox-container"], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "checkbox",
        ...o,
        checked: e,
        onChange: i,
        required: true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: Yo.checkmark }),
    r && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: r })
  ] }) });
}, ZC = ({
  validations: t7
}) => {
  const e = ({ isValid: r }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      className: `me-2 h-3.5 w-3.5 ${r ? "text-green-500 dark:text-green-400" : "text-gray-500 dark:text-gray-400"} shrink-0`,
      "aria-hidden": "true",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      viewBox: "0 0 20 20",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" })
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mb-3 max-w-md list-inside space-y-1 text-sm text-gray-500 dark:text-gray-400", children: [
    { key: "hasMinLength", text: "Debe ser minimo de 8 caracteres" },
    { key: "hasNumber", text: "Debe tener minimo un numero" },
    { key: "hasUpperCase", text: "Debe tener minimo una letra mayuscula" },
    { key: "hasLowerCase", text: "Debe tener minimo una letra minuscula" },
    { key: "hasSpecialChar", text: "Debe tener minimo un caracter especial" }
  ].map(({ key: r, text: o }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(e, { isValid: t7[r] }),
    o
  ] }, r)) });
}, QC = () => {
  const [t7, e] = ye(""), [n, r] = ye(""), [o, i] = ye({
    hasMinLength: false,
    hasNumber: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasSpecialChar: false
  });
  Ze(() => {
    i({
      hasMinLength: t7.length >= 8,
      hasNumber: /\d/.test(t7),
      hasUpperCase: /[A-Z]/.test(t7),
      hasLowerCase: /[a-z]/.test(t7),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(t7)
    });
  }, [t7]);
  const s = () => t7.trim() && n.trim() && t7 === n && Object.values(o).every((l) => l);
  return {
    password: t7,
    setPassword: e,
    confirmPassword: n,
    setConfirmPassword: r,
    showError: () => !s() && t7.trim() && n.trim(),
    validations: o
  };
}, b_ = ({ formik: t7 }) => {
  const {
    password: e,
    setPassword: n,
    confirmPassword: r,
    setConfirmPassword: o,
    validations: i
  } = QC();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        il,
        {
          placeholder: "Contraseña",
          value: e,
          onChange: (s) => {
            n(s.target.value), t7.setFieldValue("password", s.target.value);
          },
          onBlur: t7.handleBlur("password")
        }
      ),
      t7.errors.password && t7.touched.password && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 text-sm text-red-500", children: String(t7.errors.password) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        il,
        {
          placeholder: "Confirmar contraseña",
          value: r,
          onChange: (s) => {
            o(s.target.value), t7.setFieldValue("confirmPassword", s.target.value);
          },
          onBlur: t7.handleBlur("confirmPassword")
        }
      ),
      t7.errors.confirmPassword && t7.touched.confirmPassword && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 text-sm text-red-500", children: String(t7.errors.confirmPassword) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ZC, { validations: i })
  ] });
}, y_ = ({ items: t7 }) => {
  const [e, n] = ye([]), r = (i) => {
    n(
      (s) => s.includes(i) ? s.filter((a) => a !== i) : [...s, i]
    );
  }, o = (i, s = 0) => /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-none space-y-2", children: i.map((a) => {
    const l = a.subItems && a.subItems.length > 0, c = e.includes(a.id);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "li",
      {
        className: `
              ${s > 0 ? "ml-7" : ""}
            `,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 py-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-[48px] items-center gap-1", children: [
              l && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => r(a.id),
                  className: "rounded-full p-1 transition-transform duration-200 hover:bg-gray-100",
                  children: c ? /* @__PURE__ */ jsxRuntimeExports.jsx(_p, { className: "text-sm text-gray-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Cp, { className: "text-sm text-gray-500" })
                }
              ),
              !l && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[28px]" }),
              " ",
              a.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(
                a.icon,
                {
                  className: `text-lg ${a.isActive ? "text-blue-700 dark:text-blue-500" : "text-gray-600"}`
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: a.href,
                className: `
                    flex-grow transition-colors duration-200
                    ${a.isActive ? "font-medium text-blue-700 dark:text-blue-500" : "text-gray-700 hover:text-blue-600 dark:text-gray-300"}
                  `,
                children: a.title
              }
            )
          ] }),
          l && c && o(a.subItems || [], s + 1)
        ]
      },
      a.id
    );
  }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { id: "TableOfContents", children: o(t7) });
}, Hd = {
  "image/*": "Imágenes (JPG, PNG, GIF, etc.)",
  "application/pdf": "Documentos PDF",
  "application/msword": "Documentos Word (.doc)",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "Documentos Word (.docx)",
  "application/vnd.ms-excel": "Hojas de cálculo Excel (.xls)",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "Hojas de cálculo Excel (.xlsx)",
  "application/vnd.ms-powerpoint": "Presentaciones PowerPoint (.ppt)",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": "Presentaciones PowerPoint (.pptx)",
  "text/csv": "Archivos CSV",
  "application/json": "Archivos JSON",
  "application/xml": "Archivos XML"
}, v_ = ({
  onChange: t7,
  accept: e = "application/pdf",
  maxSize: n = 10,
  // 10MB por defecto
  multiple: r = false,
  helperText: o = ""
}) => {
  const i = Array.isArray(e) ? e.join(",") : e;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    ng,
    {
      htmlFor: "dropzone-file",
      className: "flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-2/4 items-center justify-center pb-6 pt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tn,
            {
              classIm: "mr-3",
              src: "https://ftp.mathilde-ads.com/151-e44e2ee2d56e5997506c6365eb4d87d3.svg",
              alt: "icon dropzone",
              width: 74,
              height: 74
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2 text-sm font-light text-gray-400 dark:text-gray-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gray-500", children: "Arrastra" }),
              " el feed de datos de tu campaña o",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gray-500", children: "selecciona el archivo de tu computadora" }),
              " ",
              o
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Tipos permitidos:" }),
              " ",
              Array.isArray(e) ? e.map((a) => Hd[a] || a).join(", ") : Hd[e] || e,
              " |",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Tamaño máximo:" }),
              " ",
              n,
              " MB"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Kh,
          {
            id: "dropzone-file",
            className: "hidden",
            onChange: t7,
            accept: i,
            multiple: r
          }
        )
      ]
    }
  ) });
};
function e_(t7) {
  return me({ attr: { version: "1.1", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M2 5v10c0 0.55 0.45 1 1 1h9c0.55 0 1-0.45 1-1v-10h-11zM5 14h-1v-7h1v7zM7 14h-1v-7h1v7zM9 14h-1v-7h1v7zM11 14h-1v-7h1v7z" }, child: [] }, { tag: "path", attr: { d: "M13.25 2h-3.25v-1.25c0-0.412-0.338-0.75-0.75-0.75h-3.5c-0.412 0-0.75 0.338-0.75 0.75v1.25h-3.25c-0.413 0-0.75 0.337-0.75 0.75v1.25h13v-1.25c0-0.413-0.338-0.75-0.75-0.75zM9 2h-3v-0.987h3v0.987z" }, child: [] }] })(t7);
}
const t_ = (t7) => {
  const e = Math.floor(Math.log(t7) / Math.log(1024)), n = ["Bytes", "KB", "MB", "GB", "TB"];
  return `${(t7 / Math.pow(1024, e)).toFixed(2)} ${n[e]}`;
}, x_ = ({ files: t7, onDelete: e }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc", children: t7.map((n, r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "div",
  {
    className: "mb-5 flex w-full items-center justify-between rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-4 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tn,
          {
            classIm: "mr-3",
            src: "https://ftp.mathilde-ads.com/151-1dcc25481e8c72ed21c720c94adfdec6.svg",
            alt: "icon dropzone",
            width: 50
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-base font-semibold text-gray-700", children: n.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-4 flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex text-sm", children: t_(n.size) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          e_,
          {
            className: "ml-2 cursor-pointer text-4xl text-gray-400",
            onClick: () => e(n)
          }
        )
      ] })
    ]
  },
  r
)) }) }), w_ = ({ description: t7 = "" }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: "https://ftp.mathilde-ads.com/151-82821df9d4f7bd2662418d3147880fba.svg",
      alt: t7.replace(/<[^>]*>/g, "")
    }
  ),
  t7 && /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      className: "text-center",
      dangerouslySetInnerHTML: { __html: t7 }
    }
  )
] });

export { Ds as D, Mp as M, Tn as T, gp as a, b_ as b, br as c, a_ as d, f_ as f, g_ as g, il as i, l_ as l, m_ as m, p_ as p, s_ as s, v_ as v, w_ as w, x_ as x, y_ as y };
