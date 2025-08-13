import { importShared } from './__federation_fn_import-Dhgpavzc.js';
import { j as jsxRuntimeExports, _ as _y } from './jsx-runtime-Bje5h6iL.js';

var wy = Object.defineProperty;
var ky = (t6, e, r) => e in t6 ? wy(t6, e, { enumerable: true, configurable: true, writable: true, value: r }) : t6[e] = r;
var K = (t6, e, r) => ky(t6, typeof e != "symbol" ? e + "" : e, r);
const $ = await importShared('react');

const ee = await importShared('react');
const {forwardRef:Oe,useState:ve,useRef:Gt,useEffect:lt,createContext:ft,useContext:rt,createElement:ur,Fragment:Yh,useMemo:no,Children:Qn,cloneElement:ms,isValidElement:Oy,PureComponent:Sy,useImperativeHandle:Vh,useLayoutEffect:ac,useCallback:yn,useId:In} = ee;

const Dy = await importShared('react-dom');

const {createPortal:My} = await importShared('react-dom');

const Cy = "button-module__mth-btn-default__cda3k", Ey = "button-module__mth-btn-border__-pdSm", Ty = "button-module__mth-btn__LkrNk", Py = "button-module__mth-btn-full__7QycJ", Ri = {
  "mth-btn-default": "button-module__mth-btn-default__cda3k",
  mthBtnDefault: Cy,
  "mth-btn-border": "button-module__mth-btn-border__-pdSm",
  mthBtnBorder: Ey,
  "mth-btn": "button-module__mth-btn__LkrNk",
  mthBtn: Ty,
  "mth-btn-full": "button-module__mth-btn-full__7QycJ",
  mthBtnFull: Py
}, FN = ({
  txtBtn: t6,
  typeButton: e,
  full: r,
  onClick: n,
  disabled: a,
  type: i,
  leftIcon: s,
  rightIcon: o,
  iconSize: l = 20
}) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${r ? Ri["mth-btn-full"] : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "button",
  {
    type: i,
    className: `${Ri["mth-btn"]} ${Ri[`mth-btn-${e}`]} ${r ? Ri["mth-btn-full"] : ""} flex items-center justify-center gap-2`,
    onClick: n,
    disabled: a,
    children: [
      s && /* @__PURE__ */ jsxRuntimeExports.jsx(s, { size: l }),
      t6,
      o && /* @__PURE__ */ jsxRuntimeExports.jsx(o, { size: l })
    ]
  }
) }), Ry = "checkbox-module__checkmark__pC-qY", ps = {
  "checkbox-container": "checkbox-module__checkbox-container__jLidj",
  checkmark: Ry
}, Cn = ({
  src: t6,
  alt: e,
  width: r,
  height: n,
  classIm: a
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "img",
  {
    className: a,
    src: t6,
    alt: e,
    width: r,
    height: n
  }
), Ny = Oe(
  ({
    placeholder: t6,
    label: e,
    error: r,
    type: n,
    classInclude: a,
    maxLength: i,
    onChange: s,
    ...o
  }, l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
    e && /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: " mb-1 block font-semibold", children: e }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: l,
        type: n,
        placeholder: t6,
        className: `w-full border p-2 ${a || ""}`,
        maxLength: i,
        onChange: s,
        ...o
      }
    ),
    r && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-500", children: r })
  ] })
);
Ny.displayName = "InputForm";
var qh = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Wd = ee.createContext && /* @__PURE__ */ ee.createContext(qh), Iy = ["attr", "size", "title"];
function Ay(t6, e) {
  if (t6 == null) return {};
  var r = Fy(t6, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t6);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t6, n) && (r[n] = t6[n]);
  }
  return r;
}
function Fy(t6, e) {
  if (t6 == null) return {};
  var r = {}, n = Object.keys(t6), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(e.indexOf(a) >= 0) && (r[a] = t6[a]);
  return r;
}
function bs() {
  return bs = Object.assign ? Object.assign.bind() : function(t6) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t6[n] = r[n]);
    }
    return t6;
  }, bs.apply(this, arguments);
}
function $d(t6, e) {
  var r = Object.keys(t6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t6);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t6, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ys(t6) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? $d(Object(r), true).forEach(function(n) {
      Ly(t6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t6, Object.getOwnPropertyDescriptors(r)) : $d(Object(r)).forEach(function(n) {
      Object.defineProperty(t6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t6;
}
function Ly(t6, e, r) {
  return e = Wy(e), e in t6 ? Object.defineProperty(t6, e, { value: r, enumerable: true, configurable: true, writable: true }) : t6[e] = r, t6;
}
function Wy(t6) {
  var e = $y(t6, "string");
  return typeof e == "symbol" ? e : String(e);
}
function $y(t6, e) {
  if (typeof t6 != "object" || t6 === null) return t6;
  var r = t6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t6, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t6);
}
function Uh(t6) {
  return t6 && t6.map((e, r) => /* @__PURE__ */ ee.createElement(e.tag, ys({
    key: r
  }, e.attr), Uh(e.child)));
}
function We(t6) {
  return (e) => /* @__PURE__ */ ee.createElement(zy, bs({
    attr: ys({}, t6.attr)
  }, e), Uh(t6.child));
}
function zy(t6) {
  var e = (r) => {
    var {
      attr: n,
      size: a,
      title: i
    } = t6, s = Ay(t6, Iy), o = a || r.size || "1em", l;
    return r.className && (l = r.className), t6.className && (l = (l ? l + " " : "") + t6.className), /* @__PURE__ */ ee.createElement("svg", bs({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, s, {
      className: l,
      style: ys(ys({
        color: t6.color || r.color
      }, r.style), t6.style),
      height: o,
      width: o,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ ee.createElement("title", null, i), t6.children);
  };
  return Wd !== void 0 ? /* @__PURE__ */ ee.createElement(Wd.Consumer, null, (r) => e(r)) : e(qh);
}
function jy(t6) {
  return We({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" }, child: [] }] })(t6);
}
function Hy(t6) {
  return We({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" }, child: [] }] })(t6);
}
function By(t6) {
  return We({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z" }, child: [] }] })(t6);
}
function Yy(t6) {
  return We({ attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z" }, child: [] }] })(t6);
}
function Vy(t6) {
  return We({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" }, child: [] }] })(t6);
}
const qy = {
  "mth-password": "passwordInput-module__mth-password__R6DoN"
}, zd = ({
  placeholder: t6,
  onChange: e,
  value: r,
  ...n
}) => {
  const [a, i] = ve(false), s = () => {
    i(!a);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: a ? "text" : "password",
        value: r,
        className: "w-full border p-2 pr-10",
        onChange: e,
        placeholder: t6,
        ...n
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: s,
        className: qy["mth-password"],
        children: a ? /* @__PURE__ */ jsxRuntimeExports.jsx(Yy, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Vy, {})
      }
    )
  ] }) });
}, jd = {
  "progress-check": "progressBar-module__progress-check__TVlHq",
  "progress-no-check": "progressBar-module__progress-no-check__YeVq1"
}, Uy = ({
  start: t6,
  end: e,
  current: r
}) => {
  const n = (r - t6) / (e - t6) * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-4 w-full overflow-hidden rounded-full bg-gray-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `absolute left-0 top-0 h-full rounded-full ${n < 50 ? jd["progress-no-check"] : jd["progress-check"]}`,
        style: { width: `${Math.min(n, 100)}%` }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "z-10 text-sm font-medium text-gray-900", children: [
      r.toFixed(2),
      "%"
    ] }) })
  ] });
}, Xy = Oe(
  ({ options: t6, label: e, error: r, value: n, onChange: a, ...i }, s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
    e && /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1 block font-semibold", children: e }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "select",
      {
        ref: s,
        className: "w-full rounded border p-2",
        value: n,
        onChange: a,
        ...i,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { disabled: true, value: "", children: "Seleccione una opción" }),
          t6 == null ? void 0 : t6.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o.value, children: o.label }, o.value))
        ]
      }
    ),
    r && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-500", children: r })
  ] })
);
Xy.displayName = "SelectForm";
const Gy = {
  conversiones: "https://ftp.mathilde-ads.com/151-a05ae956a2c7caeb6f6d8952cac41a24.svg",
  click: "https://ftp.mathilde-ads.com/151-81ace0b5242dabee10930b76df01d43b.svg",
  impresiones: "https://ftp.mathilde-ads.com/151-b50587f350bafb8f19a9308325b45467.svg",
  porcentaje: "https://ftp.mathilde-ads.com/151-846076c2407128d25fffa4f35342d415.svg",
  vistas: "https://ftp.mathilde-ads.com/151-2b68ef020e57a0986c576b16607d85dd.svg"
}, WN = ({
  logo: t6,
  number: e,
  title: r,
  start: n,
  end: a,
  current: i
}) => {
  const s = (o) => new Intl.NumberFormat("es-ES", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0
  }).format(o);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col border bg-white px-3.5 py-7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Cn,
      {
        src: Gy[t6] || "",
        alt: "Icon",
        width: 30,
        height: 30
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "my-3 font-bold", children: r }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-3xl", children: s(e) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Uy, { start: n, end: a, current: i }) })
  ] });
};
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function gi(t6) {
  return t6 + 0.5 | 0;
}
const Yr = (t6, e, r) => Math.max(Math.min(t6, r), e);
function La(t6) {
  return Yr(gi(t6 * 2.55), 0, 255);
}
function qr(t6) {
  return Yr(gi(t6 * 255), 0, 255);
}
function Mr(t6) {
  return Yr(gi(t6 / 2.55) / 100, 0, 1);
}
function Hd(t6) {
  return Yr(gi(t6 * 100), 0, 100);
}
const $t = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Dl = [..."0123456789ABCDEF"], Ky = (t6) => Dl[t6 & 15], Qy = (t6) => Dl[(t6 & 240) >> 4] + Dl[t6 & 15], Ni = (t6) => (t6 & 240) >> 4 === (t6 & 15), Jy = (t6) => Ni(t6.r) && Ni(t6.g) && Ni(t6.b) && Ni(t6.a);
function Zy(t6) {
  var e = t6.length, r;
  return t6[0] === "#" && (e === 4 || e === 5 ? r = {
    r: 255 & $t[t6[1]] * 17,
    g: 255 & $t[t6[2]] * 17,
    b: 255 & $t[t6[3]] * 17,
    a: e === 5 ? $t[t6[4]] * 17 : 255
  } : (e === 7 || e === 9) && (r = {
    r: $t[t6[1]] << 4 | $t[t6[2]],
    g: $t[t6[3]] << 4 | $t[t6[4]],
    b: $t[t6[5]] << 4 | $t[t6[6]],
    a: e === 9 ? $t[t6[7]] << 4 | $t[t6[8]] : 255
  })), r;
}
const ev = (t6, e) => t6 < 255 ? e(t6) : "";
function tv(t6) {
  var e = Jy(t6) ? Ky : Qy;
  return t6 ? "#" + e(t6.r) + e(t6.g) + e(t6.b) + ev(t6.a, e) : void 0;
}
const rv = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Xh(t6, e, r) {
  const n = e * Math.min(r, 1 - r), a = (i, s = (i + t6 / 30) % 12) => r - n * Math.max(Math.min(s - 3, 9 - s, 1), -1);
  return [a(0), a(8), a(4)];
}
function nv(t6, e, r) {
  const n = (a, i = (a + t6 / 60) % 6) => r - r * e * Math.max(Math.min(i, 4 - i, 1), 0);
  return [n(5), n(3), n(1)];
}
function av(t6, e, r) {
  const n = Xh(t6, 1, 0.5);
  let a;
  for (e + r > 1 && (a = 1 / (e + r), e *= a, r *= a), a = 0; a < 3; a++)
    n[a] *= 1 - e - r, n[a] += e;
  return n;
}
function iv(t6, e, r, n, a) {
  return t6 === a ? (e - r) / n + (e < r ? 6 : 0) : e === a ? (r - t6) / n + 2 : (t6 - e) / n + 4;
}
function ic(t6) {
  const r = t6.r / 255, n = t6.g / 255, a = t6.b / 255, i = Math.max(r, n, a), s = Math.min(r, n, a), o = (i + s) / 2;
  let l, c, d;
  return i !== s && (d = i - s, c = o > 0.5 ? d / (2 - i - s) : d / (i + s), l = iv(r, n, a, d, i), l = l * 60 + 0.5), [l | 0, c || 0, o];
}
function sc(t6, e, r, n) {
  return (Array.isArray(e) ? t6(e[0], e[1], e[2]) : t6(e, r, n)).map(qr);
}
function oc(t6, e, r) {
  return sc(Xh, t6, e, r);
}
function sv(t6, e, r) {
  return sc(av, t6, e, r);
}
function ov(t6, e, r) {
  return sc(nv, t6, e, r);
}
function Gh(t6) {
  return (t6 % 360 + 360) % 360;
}
function lv(t6) {
  const e = rv.exec(t6);
  let r = 255, n;
  if (!e)
    return;
  e[5] !== n && (r = e[6] ? La(+e[5]) : qr(+e[5]));
  const a = Gh(+e[2]), i = +e[3] / 100, s = +e[4] / 100;
  return e[1] === "hwb" ? n = sv(a, i, s) : e[1] === "hsv" ? n = ov(a, i, s) : n = oc(a, i, s), {
    r: n[0],
    g: n[1],
    b: n[2],
    a: r
  };
}
function cv(t6, e) {
  var r = ic(t6);
  r[0] = Gh(r[0] + e), r = oc(r), t6.r = r[0], t6.g = r[1], t6.b = r[2];
}
function dv(t6) {
  if (!t6)
    return;
  const e = ic(t6), r = e[0], n = Hd(e[1]), a = Hd(e[2]);
  return t6.a < 255 ? `hsla(${r}, ${n}%, ${a}%, ${Mr(t6.a)})` : `hsl(${r}, ${n}%, ${a}%)`;
}
const Bd = {
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
}, Yd = {
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
function uv() {
  const t6 = {}, e = Object.keys(Yd), r = Object.keys(Bd);
  let n, a, i, s, o;
  for (n = 0; n < e.length; n++) {
    for (s = o = e[n], a = 0; a < r.length; a++)
      i = r[a], o = o.replace(i, Bd[i]);
    i = parseInt(Yd[s], 16), t6[o] = [i >> 16 & 255, i >> 8 & 255, i & 255];
  }
  return t6;
}
let Ii;
function fv(t6) {
  Ii || (Ii = uv(), Ii.transparent = [0, 0, 0, 0]);
  const e = Ii[t6.toLowerCase()];
  return e && {
    r: e[0],
    g: e[1],
    b: e[2],
    a: e.length === 4 ? e[3] : 255
  };
}
const hv = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function gv(t6) {
  const e = hv.exec(t6);
  let r = 255, n, a, i;
  if (e) {
    if (e[7] !== n) {
      const s = +e[7];
      r = e[8] ? La(s) : Yr(s * 255, 0, 255);
    }
    return n = +e[1], a = +e[3], i = +e[5], n = 255 & (e[2] ? La(n) : Yr(n, 0, 255)), a = 255 & (e[4] ? La(a) : Yr(a, 0, 255)), i = 255 & (e[6] ? La(i) : Yr(i, 0, 255)), {
      r: n,
      g: a,
      b: i,
      a: r
    };
  }
}
function mv(t6) {
  return t6 && (t6.a < 255 ? `rgba(${t6.r}, ${t6.g}, ${t6.b}, ${Mr(t6.a)})` : `rgb(${t6.r}, ${t6.g}, ${t6.b})`);
}
const Yo = (t6) => t6 <= 31308e-7 ? t6 * 12.92 : Math.pow(t6, 1 / 2.4) * 1.055 - 0.055, $n = (t6) => t6 <= 0.04045 ? t6 / 12.92 : Math.pow((t6 + 0.055) / 1.055, 2.4);
function pv(t6, e, r) {
  const n = $n(Mr(t6.r)), a = $n(Mr(t6.g)), i = $n(Mr(t6.b));
  return {
    r: qr(Yo(n + r * ($n(Mr(e.r)) - n))),
    g: qr(Yo(a + r * ($n(Mr(e.g)) - a))),
    b: qr(Yo(i + r * ($n(Mr(e.b)) - i))),
    a: t6.a + r * (e.a - t6.a)
  };
}
function Ai(t6, e, r) {
  if (t6) {
    let n = ic(t6);
    n[e] = Math.max(0, Math.min(n[e] + n[e] * r, e === 0 ? 360 : 1)), n = oc(n), t6.r = n[0], t6.g = n[1], t6.b = n[2];
  }
}
function Kh(t6, e) {
  return t6 && Object.assign(e || {}, t6);
}
function Vd(t6) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(t6) ? t6.length >= 3 && (e = { r: t6[0], g: t6[1], b: t6[2], a: 255 }, t6.length > 3 && (e.a = qr(t6[3]))) : (e = Kh(t6, { r: 0, g: 0, b: 0, a: 1 }), e.a = qr(e.a)), e;
}
function bv(t6) {
  return t6.charAt(0) === "r" ? gv(t6) : lv(t6);
}
class ei {
  constructor(e) {
    if (e instanceof ei)
      return e;
    const r = typeof e;
    let n;
    r === "object" ? n = Vd(e) : r === "string" && (n = Zy(e) || fv(e) || bv(e)), this._rgb = n, this._valid = !!n;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var e = Kh(this._rgb);
    return e && (e.a = Mr(e.a)), e;
  }
  set rgb(e) {
    this._rgb = Vd(e);
  }
  rgbString() {
    return this._valid ? mv(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? tv(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? dv(this._rgb) : void 0;
  }
  mix(e, r) {
    if (e) {
      const n = this.rgb, a = e.rgb;
      let i;
      const s = r === i ? 0.5 : r, o = 2 * s - 1, l = n.a - a.a, c = ((o * l === -1 ? o : (o + l) / (1 + o * l)) + 1) / 2;
      i = 1 - c, n.r = 255 & c * n.r + i * a.r + 0.5, n.g = 255 & c * n.g + i * a.g + 0.5, n.b = 255 & c * n.b + i * a.b + 0.5, n.a = s * n.a + (1 - s) * a.a, this.rgb = n;
    }
    return this;
  }
  interpolate(e, r) {
    return e && (this._rgb = pv(this._rgb, e._rgb, r)), this;
  }
  clone() {
    return new ei(this.rgb);
  }
  alpha(e) {
    return this._rgb.a = qr(e), this;
  }
  clearer(e) {
    const r = this._rgb;
    return r.a *= 1 - e, this;
  }
  greyscale() {
    const e = this._rgb, r = gi(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
    return e.r = e.g = e.b = r, this;
  }
  opaquer(e) {
    const r = this._rgb;
    return r.a *= 1 + e, this;
  }
  negate() {
    const e = this._rgb;
    return e.r = 255 - e.r, e.g = 255 - e.g, e.b = 255 - e.b, this;
  }
  lighten(e) {
    return Ai(this._rgb, 2, e), this;
  }
  darken(e) {
    return Ai(this._rgb, 2, -e), this;
  }
  saturate(e) {
    return Ai(this._rgb, 1, e), this;
  }
  desaturate(e) {
    return Ai(this._rgb, 1, -e), this;
  }
  rotate(e) {
    return cv(this._rgb, e), this;
  }
}
/*!
 * Chart.js v4.4.8
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function xr() {
}
const yv = /* @__PURE__ */ (() => {
  let t6 = 0;
  return () => t6++;
})();
function mt(t6) {
  return t6 == null;
}
function ct(t6) {
  if (Array.isArray && Array.isArray(t6))
    return true;
  const e = Object.prototype.toString.call(t6);
  return e.slice(0, 7) === "[object" && e.slice(-6) === "Array]";
}
function pe(t6) {
  return t6 !== null && Object.prototype.toString.call(t6) === "[object Object]";
}
function Er(t6) {
  return (typeof t6 == "number" || t6 instanceof Number) && isFinite(+t6);
}
function er(t6, e) {
  return Er(t6) ? t6 : e;
}
function De(t6, e) {
  return typeof t6 > "u" ? e : t6;
}
const vv = (t6, e) => typeof t6 == "string" && t6.endsWith("%") ? parseFloat(t6) / 100 : +t6 / e, Qh = (t6, e) => typeof t6 == "string" && t6.endsWith("%") ? parseFloat(t6) / 100 * e : +t6;
function Ae(t6, e, r) {
  if (t6 && typeof t6.call == "function")
    return t6.apply(r, e);
}
function Se(t6, e, r, n) {
  let a, i, s;
  if (ct(t6))
    for (i = t6.length, a = 0; a < i; a++)
      e.call(r, t6[a], a);
  else if (pe(t6))
    for (s = Object.keys(t6), i = s.length, a = 0; a < i; a++)
      e.call(r, t6[s[a]], s[a]);
}
function vs(t6, e) {
  let r, n, a, i;
  if (!t6 || !e || t6.length !== e.length)
    return false;
  for (r = 0, n = t6.length; r < n; ++r)
    if (a = t6[r], i = e[r], a.datasetIndex !== i.datasetIndex || a.index !== i.index)
      return false;
  return true;
}
function xs(t6) {
  if (ct(t6))
    return t6.map(xs);
  if (pe(t6)) {
    const e = /* @__PURE__ */ Object.create(null), r = Object.keys(t6), n = r.length;
    let a = 0;
    for (; a < n; ++a)
      e[r[a]] = xs(t6[r[a]]);
    return e;
  }
  return t6;
}
function Jh(t6) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(t6) === -1;
}
function xv(t6, e, r, n) {
  if (!Jh(t6))
    return;
  const a = e[t6], i = r[t6];
  pe(a) && pe(i) ? ti(a, i, n) : e[t6] = xs(i);
}
function ti(t6, e, r) {
  const n = ct(e) ? e : [
    e
  ], a = n.length;
  if (!pe(t6))
    return t6;
  r = r || {};
  const i = r.merger || xv;
  let s;
  for (let o = 0; o < a; ++o) {
    if (s = n[o], !pe(s))
      continue;
    const l = Object.keys(s);
    for (let c = 0, d = l.length; c < d; ++c)
      i(l[c], t6, s, r);
  }
  return t6;
}
function Ba(t6, e) {
  return ti(t6, e, {
    merger: wv
  });
}
function wv(t6, e, r) {
  if (!Jh(t6))
    return;
  const n = e[t6], a = r[t6];
  pe(n) && pe(a) ? Ba(n, a) : Object.prototype.hasOwnProperty.call(e, t6) || (e[t6] = xs(a));
}
const qd = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (t6) => t6,
  // default resolvers
  x: (t6) => t6.x,
  y: (t6) => t6.y
};
function kv(t6) {
  const e = t6.split("."), r = [];
  let n = "";
  for (const a of e)
    n += a, n.endsWith("\\") ? n = n.slice(0, -1) + "." : (r.push(n), n = "");
  return r;
}
function _v(t6) {
  const e = kv(t6);
  return (r) => {
    for (const n of e) {
      if (n === "")
        break;
      r = r && r[n];
    }
    return r;
  };
}
function ri(t6, e) {
  return (qd[e] || (qd[e] = _v(e)))(t6);
}
function lc(t6) {
  return t6.charAt(0).toUpperCase() + t6.slice(1);
}
const ws = (t6) => typeof t6 < "u", Xr = (t6) => typeof t6 == "function", Ud = (t6, e) => {
  if (t6.size !== e.size)
    return false;
  for (const r of t6)
    if (!e.has(r))
      return false;
  return true;
};
function Ov(t6) {
  return t6.type === "mouseup" || t6.type === "click" || t6.type === "contextmenu";
}
const at = Math.PI, Qe = 2 * at, ks = Number.POSITIVE_INFINITY, Sv = at / 180, tt = at / 2, an = at / 4, Xd = at * 2 / 3, Gd = Math.sign;
function Dv(t6) {
  const e = [], r = Math.sqrt(t6);
  let n;
  for (n = 1; n < r; n++)
    t6 % n === 0 && (e.push(n), e.push(t6 / n));
  return r === (r | 0) && e.push(r), e.sort((a, i) => a - i).pop(), e;
}
function Mv(t6) {
  return typeof t6 == "symbol" || typeof t6 == "object" && t6 !== null && !(Symbol.toPrimitive in t6 || "toString" in t6 || "valueOf" in t6);
}
function _s(t6) {
  return !Mv(t6) && !isNaN(parseFloat(t6)) && isFinite(t6);
}
function xn(t6) {
  return t6 * (at / 180);
}
function Cv(t6) {
  return t6 * (180 / at);
}
function Zh(t6, e) {
  const r = e.x - t6.x, n = e.y - t6.y, a = Math.sqrt(r * r + n * n);
  let i = Math.atan2(n, r);
  return i < -0.5 * at && (i += Qe), {
    angle: i,
    distance: a
  };
}
function Ev(t6, e) {
  return Math.sqrt(Math.pow(e.x - t6.x, 2) + Math.pow(e.y - t6.y, 2));
}
function sn(t6) {
  return (t6 % Qe + Qe) % Qe;
}
function Os(t6, e, r, n) {
  const a = sn(t6), i = sn(e), s = sn(r), o = sn(i - a), l = sn(s - a), c = sn(a - i), d = sn(a - s);
  return a === i || a === s || n && i === s || o > l && c < d;
}
function jt(t6, e, r) {
  return Math.max(e, Math.min(r, t6));
}
function Tv(t6) {
  return jt(t6, -32768, 32767);
}
function Wa(t6, e, r, n = 1e-6) {
  return t6 >= Math.min(e, r) - n && t6 <= Math.max(e, r) + n;
}
function cc(t6, e, r) {
  r = r || ((s) => t6[s] < e);
  let n = t6.length - 1, a = 0, i;
  for (; n - a > 1; )
    i = a + n >> 1, r(i) ? a = i : n = i;
  return {
    lo: a,
    hi: n
  };
}
const Ml = (t6, e, r, n) => cc(t6, r, n ? (a) => {
  const i = t6[a][e];
  return i < r || i === r && t6[a + 1][e] === r;
} : (a) => t6[a][e] < r), Pv = (t6, e, r) => cc(t6, r, (n) => t6[n][e] >= r);
function Rv(t6, e, r) {
  let n = 0, a = t6.length;
  for (; n < a && t6[n] < e; )
    n++;
  for (; a > n && t6[a - 1] > r; )
    a--;
  return n > 0 || a < t6.length ? t6.slice(n, a) : t6;
}
const eg = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Nv(t6, e) {
  if (t6._chartjs) {
    t6._chartjs.listeners.push(e);
    return;
  }
  Object.defineProperty(t6, "_chartjs", {
    configurable: true,
    enumerable: false,
    value: {
      listeners: [
        e
      ]
    }
  }), eg.forEach((r) => {
    const n = "_onData" + lc(r), a = t6[r];
    Object.defineProperty(t6, r, {
      configurable: true,
      enumerable: false,
      value(...i) {
        const s = a.apply(this, i);
        return t6._chartjs.listeners.forEach((o) => {
          typeof o[n] == "function" && o[n](...i);
        }), s;
      }
    });
  });
}
function Kd(t6, e) {
  const r = t6._chartjs;
  if (!r)
    return;
  const n = r.listeners, a = n.indexOf(e);
  a !== -1 && n.splice(a, 1), !(n.length > 0) && (eg.forEach((i) => {
    delete t6[i];
  }), delete t6._chartjs);
}
function Iv(t6) {
  const e = new Set(t6);
  return e.size === t6.length ? t6 : Array.from(e);
}
const tg = function() {
  return typeof window > "u" ? function(t6) {
    return t6();
  } : window.requestAnimationFrame;
}();
function rg(t6, e) {
  let r = [], n = false;
  return function(...a) {
    r = a, n || (n = true, tg.call(window, () => {
      n = false, t6.apply(e, r);
    }));
  };
}
function Av(t6, e) {
  let r;
  return function(...n) {
    return e ? (clearTimeout(r), r = setTimeout(t6, e, n)) : t6.apply(this, n), e;
  };
}
const ng = (t6) => t6 === "start" ? "left" : t6 === "end" ? "right" : "center", It = (t6, e, r) => t6 === "start" ? e : t6 === "end" ? r : (e + r) / 2, Fv = (t6, e, r, n) => t6 === (n ? "left" : "right") ? r : t6 === "center" ? (e + r) / 2 : e, Fi = (t6) => t6 === 0 || t6 === 1, Qd = (t6, e, r) => -(Math.pow(2, 10 * (t6 -= 1)) * Math.sin((t6 - e) * Qe / r)), Jd = (t6, e, r) => Math.pow(2, -10 * t6) * Math.sin((t6 - e) * Qe / r) + 1, Ya = {
  linear: (t6) => t6,
  easeInQuad: (t6) => t6 * t6,
  easeOutQuad: (t6) => -t6 * (t6 - 2),
  easeInOutQuad: (t6) => (t6 /= 0.5) < 1 ? 0.5 * t6 * t6 : -0.5 * (--t6 * (t6 - 2) - 1),
  easeInCubic: (t6) => t6 * t6 * t6,
  easeOutCubic: (t6) => (t6 -= 1) * t6 * t6 + 1,
  easeInOutCubic: (t6) => (t6 /= 0.5) < 1 ? 0.5 * t6 * t6 * t6 : 0.5 * ((t6 -= 2) * t6 * t6 + 2),
  easeInQuart: (t6) => t6 * t6 * t6 * t6,
  easeOutQuart: (t6) => -((t6 -= 1) * t6 * t6 * t6 - 1),
  easeInOutQuart: (t6) => (t6 /= 0.5) < 1 ? 0.5 * t6 * t6 * t6 * t6 : -0.5 * ((t6 -= 2) * t6 * t6 * t6 - 2),
  easeInQuint: (t6) => t6 * t6 * t6 * t6 * t6,
  easeOutQuint: (t6) => (t6 -= 1) * t6 * t6 * t6 * t6 + 1,
  easeInOutQuint: (t6) => (t6 /= 0.5) < 1 ? 0.5 * t6 * t6 * t6 * t6 * t6 : 0.5 * ((t6 -= 2) * t6 * t6 * t6 * t6 + 2),
  easeInSine: (t6) => -Math.cos(t6 * tt) + 1,
  easeOutSine: (t6) => Math.sin(t6 * tt),
  easeInOutSine: (t6) => -0.5 * (Math.cos(at * t6) - 1),
  easeInExpo: (t6) => t6 === 0 ? 0 : Math.pow(2, 10 * (t6 - 1)),
  easeOutExpo: (t6) => t6 === 1 ? 1 : -Math.pow(2, -10 * t6) + 1,
  easeInOutExpo: (t6) => Fi(t6) ? t6 : t6 < 0.5 ? 0.5 * Math.pow(2, 10 * (t6 * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t6 * 2 - 1)) + 2),
  easeInCirc: (t6) => t6 >= 1 ? t6 : -(Math.sqrt(1 - t6 * t6) - 1),
  easeOutCirc: (t6) => Math.sqrt(1 - (t6 -= 1) * t6),
  easeInOutCirc: (t6) => (t6 /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t6 * t6) - 1) : 0.5 * (Math.sqrt(1 - (t6 -= 2) * t6) + 1),
  easeInElastic: (t6) => Fi(t6) ? t6 : Qd(t6, 0.075, 0.3),
  easeOutElastic: (t6) => Fi(t6) ? t6 : Jd(t6, 0.075, 0.3),
  easeInOutElastic(t6) {
    return Fi(t6) ? t6 : t6 < 0.5 ? 0.5 * Qd(t6 * 2, 0.1125, 0.45) : 0.5 + 0.5 * Jd(t6 * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(t6) {
    return t6 * t6 * ((1.70158 + 1) * t6 - 1.70158);
  },
  easeOutBack(t6) {
    return (t6 -= 1) * t6 * ((1.70158 + 1) * t6 + 1.70158) + 1;
  },
  easeInOutBack(t6) {
    let e = 1.70158;
    return (t6 /= 0.5) < 1 ? 0.5 * (t6 * t6 * (((e *= 1.525) + 1) * t6 - e)) : 0.5 * ((t6 -= 2) * t6 * (((e *= 1.525) + 1) * t6 + e) + 2);
  },
  easeInBounce: (t6) => 1 - Ya.easeOutBounce(1 - t6),
  easeOutBounce(t6) {
    return t6 < 1 / 2.75 ? 7.5625 * t6 * t6 : t6 < 2 / 2.75 ? 7.5625 * (t6 -= 1.5 / 2.75) * t6 + 0.75 : t6 < 2.5 / 2.75 ? 7.5625 * (t6 -= 2.25 / 2.75) * t6 + 0.9375 : 7.5625 * (t6 -= 2.625 / 2.75) * t6 + 0.984375;
  },
  easeInOutBounce: (t6) => t6 < 0.5 ? Ya.easeInBounce(t6 * 2) * 0.5 : Ya.easeOutBounce(t6 * 2 - 1) * 0.5 + 0.5
};
function ag(t6) {
  if (t6 && typeof t6 == "object") {
    const e = t6.toString();
    return e === "[object CanvasPattern]" || e === "[object CanvasGradient]";
  }
  return false;
}
function Zd(t6) {
  return ag(t6) ? t6 : new ei(t6);
}
function Vo(t6) {
  return ag(t6) ? t6 : new ei(t6).saturate(0.5).darken(0.1).hexString();
}
const Lv = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Wv = [
  "color",
  "borderColor",
  "backgroundColor"
];
function $v(t6) {
  t6.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), t6.describe("animation", {
    _fallback: false,
    _indexable: false,
    _scriptable: (e) => e !== "onProgress" && e !== "onComplete" && e !== "fn"
  }), t6.set("animations", {
    colors: {
      type: "color",
      properties: Wv
    },
    numbers: {
      type: "number",
      properties: Lv
    }
  }), t6.describe("animations", {
    _fallback: "animation"
  }), t6.set("transitions", {
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
function zv(t6) {
  t6.set("layout", {
    autoPadding: true,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const eu = /* @__PURE__ */ new Map();
function jv(t6, e) {
  e = e || {};
  const r = t6 + JSON.stringify(e);
  let n = eu.get(r);
  return n || (n = new Intl.NumberFormat(t6, e), eu.set(r, n)), n;
}
function Hv(t6, e, r) {
  return jv(e, r).format(t6);
}
const Bv = {
  values(t6) {
    return ct(t6) ? t6 : "" + t6;
  }
};
var Yv = {
  formatters: Bv
};
function Vv(t6) {
  t6.set("scale", {
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
      tickWidth: (e, r) => r.lineWidth,
      tickColor: (e, r) => r.color,
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
      callback: Yv.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: false,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), t6.route("scale.ticks", "color", "", "color"), t6.route("scale.grid", "color", "", "borderColor"), t6.route("scale.border", "color", "", "borderColor"), t6.route("scale.title", "color", "", "color"), t6.describe("scale", {
    _fallback: false,
    _scriptable: (e) => !e.startsWith("before") && !e.startsWith("after") && e !== "callback" && e !== "parser",
    _indexable: (e) => e !== "borderDash" && e !== "tickBorderDash" && e !== "dash"
  }), t6.describe("scales", {
    _fallback: "scale"
  }), t6.describe("scale.ticks", {
    _scriptable: (e) => e !== "backdropPadding" && e !== "callback",
    _indexable: (e) => e !== "backdropPadding"
  });
}
const En = /* @__PURE__ */ Object.create(null), Cl = /* @__PURE__ */ Object.create(null);
function Va(t6, e) {
  if (!e)
    return t6;
  const r = e.split(".");
  for (let n = 0, a = r.length; n < a; ++n) {
    const i = r[n];
    t6 = t6[i] || (t6[i] = /* @__PURE__ */ Object.create(null));
  }
  return t6;
}
function qo(t6, e, r) {
  return typeof e == "string" ? ti(Va(t6, e), r) : ti(Va(t6, ""), e);
}
class qv {
  constructor(e, r) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (n) => n.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
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
    }, this.hover = {}, this.hoverBackgroundColor = (n, a) => Vo(a.backgroundColor), this.hoverBorderColor = (n, a) => Vo(a.borderColor), this.hoverColor = (n, a) => Vo(a.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: true,
      includeInvisible: false
    }, this.maintainAspectRatio = true, this.onHover = null, this.onClick = null, this.parsing = true, this.plugins = {}, this.responsive = true, this.scale = void 0, this.scales = {}, this.showLine = true, this.drawActiveElementsOnTop = true, this.describe(e), this.apply(r);
  }
  set(e, r) {
    return qo(this, e, r);
  }
  get(e) {
    return Va(this, e);
  }
  describe(e, r) {
    return qo(Cl, e, r);
  }
  override(e, r) {
    return qo(En, e, r);
  }
  route(e, r, n, a) {
    const i = Va(this, e), s = Va(this, n), o = "_" + r;
    Object.defineProperties(i, {
      [o]: {
        value: i[r],
        writable: true
      },
      [r]: {
        enumerable: true,
        get() {
          const l = this[o], c = s[a];
          return pe(l) ? Object.assign({}, c, l) : De(l, c);
        },
        set(l) {
          this[o] = l;
        }
      }
    });
  }
  apply(e) {
    e.forEach((r) => r(this));
  }
}
var Ve = /* @__PURE__ */ new qv({
  _scriptable: (t6) => !t6.startsWith("on"),
  _indexable: (t6) => t6 !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: false,
    _indexable: false
  }
}, [
  $v,
  zv,
  Vv
]);
function Uv(t6) {
  return !t6 || mt(t6.size) || mt(t6.family) ? null : (t6.style ? t6.style + " " : "") + (t6.weight ? t6.weight + " " : "") + t6.size + "px " + t6.family;
}
function tu(t6, e, r, n, a) {
  let i = e[a];
  return i || (i = e[a] = t6.measureText(a).width, r.push(a)), i > n && (n = i), n;
}
function on(t6, e, r) {
  const n = t6.currentDevicePixelRatio, a = r !== 0 ? Math.max(r / 2, 0.5) : 0;
  return Math.round((e - a) * n) / n + a;
}
function ru(t6, e) {
  !e && !t6 || (e = e || t6.getContext("2d"), e.save(), e.resetTransform(), e.clearRect(0, 0, t6.width, t6.height), e.restore());
}
function nu(t6, e, r, n) {
  ig(t6, e, r, n, null);
}
function ig(t6, e, r, n, a) {
  let i, s, o, l, c, d, u, f;
  const h = e.pointStyle, g = e.rotation, m = e.radius;
  let p = (g || 0) * Sv;
  if (h && typeof h == "object" && (i = h.toString(), i === "[object HTMLImageElement]" || i === "[object HTMLCanvasElement]")) {
    t6.save(), t6.translate(r, n), t6.rotate(p), t6.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height), t6.restore();
    return;
  }
  if (!(isNaN(m) || m <= 0)) {
    switch (t6.beginPath(), h) {
      default:
        a ? t6.ellipse(r, n, a / 2, m, 0, 0, Qe) : t6.arc(r, n, m, 0, Qe), t6.closePath();
        break;
      case "triangle":
        d = a ? a / 2 : m, t6.moveTo(r + Math.sin(p) * d, n - Math.cos(p) * m), p += Xd, t6.lineTo(r + Math.sin(p) * d, n - Math.cos(p) * m), p += Xd, t6.lineTo(r + Math.sin(p) * d, n - Math.cos(p) * m), t6.closePath();
        break;
      case "rectRounded":
        c = m * 0.516, l = m - c, s = Math.cos(p + an) * l, u = Math.cos(p + an) * (a ? a / 2 - c : l), o = Math.sin(p + an) * l, f = Math.sin(p + an) * (a ? a / 2 - c : l), t6.arc(r - u, n - o, c, p - at, p - tt), t6.arc(r + f, n - s, c, p - tt, p), t6.arc(r + u, n + o, c, p, p + tt), t6.arc(r - f, n + s, c, p + tt, p + at), t6.closePath();
        break;
      case "rect":
        if (!g) {
          l = Math.SQRT1_2 * m, d = a ? a / 2 : l, t6.rect(r - d, n - l, 2 * d, 2 * l);
          break;
        }
        p += an;
      case "rectRot":
        u = Math.cos(p) * (a ? a / 2 : m), s = Math.cos(p) * m, o = Math.sin(p) * m, f = Math.sin(p) * (a ? a / 2 : m), t6.moveTo(r - u, n - o), t6.lineTo(r + f, n - s), t6.lineTo(r + u, n + o), t6.lineTo(r - f, n + s), t6.closePath();
        break;
      case "crossRot":
        p += an;
      case "cross":
        u = Math.cos(p) * (a ? a / 2 : m), s = Math.cos(p) * m, o = Math.sin(p) * m, f = Math.sin(p) * (a ? a / 2 : m), t6.moveTo(r - u, n - o), t6.lineTo(r + u, n + o), t6.moveTo(r + f, n - s), t6.lineTo(r - f, n + s);
        break;
      case "star":
        u = Math.cos(p) * (a ? a / 2 : m), s = Math.cos(p) * m, o = Math.sin(p) * m, f = Math.sin(p) * (a ? a / 2 : m), t6.moveTo(r - u, n - o), t6.lineTo(r + u, n + o), t6.moveTo(r + f, n - s), t6.lineTo(r - f, n + s), p += an, u = Math.cos(p) * (a ? a / 2 : m), s = Math.cos(p) * m, o = Math.sin(p) * m, f = Math.sin(p) * (a ? a / 2 : m), t6.moveTo(r - u, n - o), t6.lineTo(r + u, n + o), t6.moveTo(r + f, n - s), t6.lineTo(r - f, n + s);
        break;
      case "line":
        s = a ? a / 2 : Math.cos(p) * m, o = Math.sin(p) * m, t6.moveTo(r - s, n - o), t6.lineTo(r + s, n + o);
        break;
      case "dash":
        t6.moveTo(r, n), t6.lineTo(r + Math.cos(p) * (a ? a / 2 : m), n + Math.sin(p) * m);
        break;
      case false:
        t6.closePath();
        break;
    }
    t6.fill(), e.borderWidth > 0 && t6.stroke();
  }
}
function sg(t6, e, r) {
  return r = r || 0.5, !e || t6 && t6.x > e.left - r && t6.x < e.right + r && t6.y > e.top - r && t6.y < e.bottom + r;
}
function dc(t6, e) {
  t6.save(), t6.beginPath(), t6.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t6.clip();
}
function uc(t6) {
  t6.restore();
}
function Xv(t6, e) {
  e.translation && t6.translate(e.translation[0], e.translation[1]), mt(e.rotation) || t6.rotate(e.rotation), e.color && (t6.fillStyle = e.color), e.textAlign && (t6.textAlign = e.textAlign), e.textBaseline && (t6.textBaseline = e.textBaseline);
}
function Gv(t6, e, r, n, a) {
  if (a.strikethrough || a.underline) {
    const i = t6.measureText(n), s = e - i.actualBoundingBoxLeft, o = e + i.actualBoundingBoxRight, l = r - i.actualBoundingBoxAscent, c = r + i.actualBoundingBoxDescent, d = a.strikethrough ? (l + c) / 2 : c;
    t6.strokeStyle = t6.fillStyle, t6.beginPath(), t6.lineWidth = a.decorationWidth || 2, t6.moveTo(s, d), t6.lineTo(o, d), t6.stroke();
  }
}
function Kv(t6, e) {
  const r = t6.fillStyle;
  t6.fillStyle = e.color, t6.fillRect(e.left, e.top, e.width, e.height), t6.fillStyle = r;
}
function Ss(t6, e, r, n, a, i = {}) {
  const s = ct(e) ? e : [
    e
  ], o = i.strokeWidth > 0 && i.strokeColor !== "";
  let l, c;
  for (t6.save(), t6.font = a.string, Xv(t6, i), l = 0; l < s.length; ++l)
    c = s[l], i.backdrop && Kv(t6, i.backdrop), o && (i.strokeColor && (t6.strokeStyle = i.strokeColor), mt(i.strokeWidth) || (t6.lineWidth = i.strokeWidth), t6.strokeText(c, r, n, i.maxWidth)), t6.fillText(c, r, n, i.maxWidth), Gv(t6, r, n, c, i), n += Number(a.lineHeight);
  t6.restore();
}
function El(t6, e) {
  const { x: r, y: n, w: a, h: i, radius: s } = e;
  t6.arc(r + s.topLeft, n + s.topLeft, s.topLeft, 1.5 * at, at, true), t6.lineTo(r, n + i - s.bottomLeft), t6.arc(r + s.bottomLeft, n + i - s.bottomLeft, s.bottomLeft, at, tt, true), t6.lineTo(r + a - s.bottomRight, n + i), t6.arc(r + a - s.bottomRight, n + i - s.bottomRight, s.bottomRight, tt, 0, true), t6.lineTo(r + a, n + s.topRight), t6.arc(r + a - s.topRight, n + s.topRight, s.topRight, 0, -tt, true), t6.lineTo(r + s.topLeft, n);
}
const Qv = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, Jv = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Zv(t6, e) {
  const r = ("" + t6).match(Qv);
  if (!r || r[1] === "normal")
    return e * 1.2;
  switch (t6 = +r[2], r[3]) {
    case "px":
      return t6;
    case "%":
      t6 /= 100;
      break;
  }
  return e * t6;
}
const ex = (t6) => +t6 || 0;
function fc(t6, e) {
  const r = {}, n = pe(e), a = n ? Object.keys(e) : e, i = pe(t6) ? n ? (s) => De(t6[s], t6[e[s]]) : (s) => t6[s] : () => t6;
  for (const s of a)
    r[s] = ex(i(s));
  return r;
}
function tx(t6) {
  return fc(t6, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function qa(t6) {
  return fc(t6, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function Kt(t6) {
  const e = tx(t6);
  return e.width = e.left + e.right, e.height = e.top + e.bottom, e;
}
function _t(t6, e) {
  t6 = t6 || {}, e = e || Ve.font;
  let r = De(t6.size, e.size);
  typeof r == "string" && (r = parseInt(r, 10));
  let n = De(t6.style, e.style);
  n && !("" + n).match(Jv) && (console.warn('Invalid font style specified: "' + n + '"'), n = void 0);
  const a = {
    family: De(t6.family, e.family),
    lineHeight: Zv(De(t6.lineHeight, e.lineHeight), r),
    size: r,
    style: n,
    weight: De(t6.weight, e.weight),
    string: ""
  };
  return a.string = Uv(a), a;
}
function Li(t6, e, r, n) {
  let a, i, s;
  for (a = 0, i = t6.length; a < i; ++a)
    if (s = t6[a], s !== void 0 && s !== void 0)
      return s;
}
function rx(t6, e, r) {
  const { min: n, max: a } = t6, i = Qh(e, (a - n) / 2), s = (o, l) => r && o === 0 ? 0 : o + l;
  return {
    min: s(n, -Math.abs(i)),
    max: s(a, i)
  };
}
function ha(t6, e) {
  return Object.assign(Object.create(t6), e);
}
function hc(t6, e = [
  ""
], r, n, a = () => t6[0]) {
  const i = r || t6;
  typeof n > "u" && (n = dg("_fallback", t6));
  const s = {
    [Symbol.toStringTag]: "Object",
    _cacheable: true,
    _scopes: t6,
    _rootScopes: i,
    _fallback: n,
    _getTarget: a,
    override: (o) => hc([
      o,
      ...t6
    ], e, i, n)
  };
  return new Proxy(s, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(o, l) {
      return delete o[l], delete o._keys, delete t6[0][l], true;
    },
    /**
    * A trap for getting property values.
    */
    get(o, l) {
      return lg(o, l, () => dx(l, e, t6, o));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(o, l) {
      return Reflect.getOwnPropertyDescriptor(o._scopes[0], l);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(t6[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(o, l) {
      return iu(o).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(o) {
      return iu(o);
    },
    /**
    * A trap for setting property values.
    */
    set(o, l, c) {
      const d = o._storage || (o._storage = a());
      return o[l] = d[l] = c, delete o._keys, true;
    }
  });
}
function ra(t6, e, r, n) {
  const a = {
    _cacheable: false,
    _proxy: t6,
    _context: e,
    _subProxy: r,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: og(t6, n),
    setContext: (i) => ra(t6, i, r, n),
    override: (i) => ra(t6.override(i), e, r, n)
  };
  return new Proxy(a, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(i, s) {
      return delete i[s], delete t6[s], true;
    },
    /**
    * A trap for getting property values.
    */
    get(i, s, o) {
      return lg(i, s, () => ax(i, s, o));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(i, s) {
      return i._descriptors.allKeys ? Reflect.has(t6, s) ? {
        enumerable: true,
        configurable: true
      } : void 0 : Reflect.getOwnPropertyDescriptor(t6, s);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(t6);
    },
    /**
    * A trap for the in operator.
    */
    has(i, s) {
      return Reflect.has(t6, s);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(t6);
    },
    /**
    * A trap for setting property values.
    */
    set(i, s, o) {
      return t6[s] = o, delete i[s], true;
    }
  });
}
function og(t6, e = {
  scriptable: true,
  indexable: true
}) {
  const { _scriptable: r = e.scriptable, _indexable: n = e.indexable, _allKeys: a = e.allKeys } = t6;
  return {
    allKeys: a,
    scriptable: r,
    indexable: n,
    isScriptable: Xr(r) ? r : () => r,
    isIndexable: Xr(n) ? n : () => n
  };
}
const nx = (t6, e) => t6 ? t6 + lc(e) : e, gc = (t6, e) => pe(e) && t6 !== "adapters" && (Object.getPrototypeOf(e) === null || e.constructor === Object);
function lg(t6, e, r) {
  if (Object.prototype.hasOwnProperty.call(t6, e) || e === "constructor")
    return t6[e];
  const n = r();
  return t6[e] = n, n;
}
function ax(t6, e, r) {
  const { _proxy: n, _context: a, _subProxy: i, _descriptors: s } = t6;
  let o = n[e];
  return Xr(o) && s.isScriptable(e) && (o = ix(e, o, t6, r)), ct(o) && o.length && (o = sx(e, o, t6, s.isIndexable)), gc(e, o) && (o = ra(o, a, i && i[e], s)), o;
}
function ix(t6, e, r, n) {
  const { _proxy: a, _context: i, _subProxy: s, _stack: o } = r;
  if (o.has(t6))
    throw new Error("Recursion detected: " + Array.from(o).join("->") + "->" + t6);
  o.add(t6);
  let l = e(i, s || n);
  return o.delete(t6), gc(t6, l) && (l = mc(a._scopes, a, t6, l)), l;
}
function sx(t6, e, r, n) {
  const { _proxy: a, _context: i, _subProxy: s, _descriptors: o } = r;
  if (typeof i.index < "u" && n(t6))
    return e[i.index % e.length];
  if (pe(e[0])) {
    const l = e, c = a._scopes.filter((d) => d !== l);
    e = [];
    for (const d of l) {
      const u = mc(c, a, t6, d);
      e.push(ra(u, i, s && s[t6], o));
    }
  }
  return e;
}
function cg(t6, e, r) {
  return Xr(t6) ? t6(e, r) : t6;
}
const ox = (t6, e) => t6 === true ? e : typeof t6 == "string" ? ri(e, t6) : void 0;
function lx(t6, e, r, n, a) {
  for (const i of e) {
    const s = ox(r, i);
    if (s) {
      t6.add(s);
      const o = cg(s._fallback, r, a);
      if (typeof o < "u" && o !== r && o !== n)
        return o;
    } else if (s === false && typeof n < "u" && r !== n)
      return null;
  }
  return false;
}
function mc(t6, e, r, n) {
  const a = e._rootScopes, i = cg(e._fallback, r, n), s = [
    ...t6,
    ...a
  ], o = /* @__PURE__ */ new Set();
  o.add(n);
  let l = au(o, s, r, i || r, n);
  return l === null || typeof i < "u" && i !== r && (l = au(o, s, i, l, n), l === null) ? false : hc(Array.from(o), [
    ""
  ], a, i, () => cx(e, r, n));
}
function au(t6, e, r, n, a) {
  for (; r; )
    r = lx(t6, e, r, n, a);
  return r;
}
function cx(t6, e, r) {
  const n = t6._getTarget();
  e in n || (n[e] = {});
  const a = n[e];
  return ct(a) && pe(r) ? r : a || {};
}
function dx(t6, e, r, n) {
  let a;
  for (const i of e)
    if (a = dg(nx(i, t6), r), typeof a < "u")
      return gc(t6, a) ? mc(r, n, t6, a) : a;
}
function dg(t6, e) {
  for (const r of e) {
    if (!r)
      continue;
    const n = r[t6];
    if (typeof n < "u")
      return n;
  }
}
function iu(t6) {
  let e = t6._keys;
  return e || (e = t6._keys = ux(t6._scopes)), e;
}
function ux(t6) {
  const e = /* @__PURE__ */ new Set();
  for (const r of t6)
    for (const n of Object.keys(r).filter((a) => !a.startsWith("_")))
      e.add(n);
  return Array.from(e);
}
function pc() {
  return typeof window < "u" && typeof document < "u";
}
function bc(t6) {
  let e = t6.parentNode;
  return e && e.toString() === "[object ShadowRoot]" && (e = e.host), e;
}
function Ds(t6, e, r) {
  let n;
  return typeof t6 == "string" ? (n = parseInt(t6, 10), t6.indexOf("%") !== -1 && (n = n / 100 * e.parentNode[r])) : n = t6, n;
}
const ao = (t6) => t6.ownerDocument.defaultView.getComputedStyle(t6, null);
function fx(t6, e) {
  return ao(t6).getPropertyValue(e);
}
const hx = [
  "top",
  "right",
  "bottom",
  "left"
];
function _n(t6, e, r) {
  const n = {};
  r = r ? "-" + r : "";
  for (let a = 0; a < 4; a++) {
    const i = hx[a];
    n[i] = parseFloat(t6[e + "-" + i + r]) || 0;
  }
  return n.width = n.left + n.right, n.height = n.top + n.bottom, n;
}
const gx = (t6, e, r) => (t6 > 0 || e > 0) && (!r || !r.shadowRoot);
function mx(t6, e) {
  const r = t6.touches, n = r && r.length ? r[0] : t6, { offsetX: a, offsetY: i } = n;
  let s = false, o, l;
  if (gx(a, i, t6.target))
    o = a, l = i;
  else {
    const c = e.getBoundingClientRect();
    o = n.clientX - c.left, l = n.clientY - c.top, s = true;
  }
  return {
    x: o,
    y: l,
    box: s
  };
}
function gn(t6, e) {
  if ("native" in t6)
    return t6;
  const { canvas: r, currentDevicePixelRatio: n } = e, a = ao(r), i = a.boxSizing === "border-box", s = _n(a, "padding"), o = _n(a, "border", "width"), { x: l, y: c, box: d } = mx(t6, r), u = s.left + (d && o.left), f = s.top + (d && o.top);
  let { width: h, height: g } = e;
  return i && (h -= s.width + o.width, g -= s.height + o.height), {
    x: Math.round((l - u) / h * r.width / n),
    y: Math.round((c - f) / g * r.height / n)
  };
}
function px(t6, e, r) {
  let n, a;
  if (e === void 0 || r === void 0) {
    const i = t6 && bc(t6);
    if (!i)
      e = t6.clientWidth, r = t6.clientHeight;
    else {
      const s = i.getBoundingClientRect(), o = ao(i), l = _n(o, "border", "width"), c = _n(o, "padding");
      e = s.width - c.width - l.width, r = s.height - c.height - l.height, n = Ds(o.maxWidth, i, "clientWidth"), a = Ds(o.maxHeight, i, "clientHeight");
    }
  }
  return {
    width: e,
    height: r,
    maxWidth: n || ks,
    maxHeight: a || ks
  };
}
const Wi = (t6) => Math.round(t6 * 10) / 10;
function bx(t6, e, r, n) {
  const a = ao(t6), i = _n(a, "margin"), s = Ds(a.maxWidth, t6, "clientWidth") || ks, o = Ds(a.maxHeight, t6, "clientHeight") || ks, l = px(t6, e, r);
  let { width: c, height: d } = l;
  if (a.boxSizing === "content-box") {
    const f = _n(a, "border", "width"), h = _n(a, "padding");
    c -= h.width + f.width, d -= h.height + f.height;
  }
  return c = Math.max(0, c - i.width), d = Math.max(0, n ? c / n : d - i.height), c = Wi(Math.min(c, s, l.maxWidth)), d = Wi(Math.min(d, o, l.maxHeight)), c && !d && (d = Wi(c / 2)), (e !== void 0 || r !== void 0) && n && l.height && d > l.height && (d = l.height, c = Wi(Math.floor(d * n))), {
    width: c,
    height: d
  };
}
function su(t6, e, r) {
  const n = e || 1, a = Math.floor(t6.height * n), i = Math.floor(t6.width * n);
  t6.height = Math.floor(t6.height), t6.width = Math.floor(t6.width);
  const s = t6.canvas;
  return s.style && (r || !s.style.height && !s.style.width) && (s.style.height = `${t6.height}px`, s.style.width = `${t6.width}px`), t6.currentDevicePixelRatio !== n || s.height !== a || s.width !== i ? (t6.currentDevicePixelRatio = n, s.height = a, s.width = i, t6.ctx.setTransform(n, 0, 0, n, 0, 0), true) : false;
}
const yx = function() {
  let t6 = false;
  try {
    const e = {
      get passive() {
        return t6 = true, false;
      }
    };
    pc() && (window.addEventListener("test", null, e), window.removeEventListener("test", null, e));
  } catch {
  }
  return t6;
}();
function ou(t6, e) {
  const r = fx(t6, e), n = r && r.match(/^(\d+)(\.\d+)?px$/);
  return n ? +n[1] : void 0;
}
const vx = function(t6, e) {
  return {
    x(r) {
      return t6 + t6 + e - r;
    },
    setWidth(r) {
      e = r;
    },
    textAlign(r) {
      return r === "center" ? r : r === "right" ? "left" : "right";
    },
    xPlus(r, n) {
      return r - n;
    },
    leftForLtr(r, n) {
      return r - n;
    }
  };
}, xx = function() {
  return {
    x(t6) {
      return t6;
    },
    setWidth(t6) {
    },
    textAlign(t6) {
      return t6;
    },
    xPlus(t6, e) {
      return t6 + e;
    },
    leftForLtr(t6, e) {
      return t6;
    }
  };
};
function Jn(t6, e, r) {
  return t6 ? vx(e, r) : xx();
}
function ug(t6, e) {
  let r, n;
  (e === "ltr" || e === "rtl") && (r = t6.canvas.style, n = [
    r.getPropertyValue("direction"),
    r.getPropertyPriority("direction")
  ], r.setProperty("direction", e, "important"), t6.prevTextDirection = n);
}
function fg(t6, e) {
  e !== void 0 && (delete t6.prevTextDirection, t6.canvas.style.setProperty("direction", e[0], e[1]));
}
/*!
 * Chart.js v4.4.8
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
class wx {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = false, this._lastDate = void 0;
  }
  _notify(e, r, n, a) {
    const i = r.listeners[a], s = r.duration;
    i.forEach((o) => o({
      chart: e,
      initial: r.initial,
      numSteps: s,
      currentStep: Math.min(n - r.start, s)
    }));
  }
  _refresh() {
    this._request || (this._running = true, this._request = tg.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(e = Date.now()) {
    let r = 0;
    this._charts.forEach((n, a) => {
      if (!n.running || !n.items.length)
        return;
      const i = n.items;
      let s = i.length - 1, o = false, l;
      for (; s >= 0; --s)
        l = i[s], l._active ? (l._total > n.duration && (n.duration = l._total), l.tick(e), o = true) : (i[s] = i[i.length - 1], i.pop());
      o && (a.draw(), this._notify(a, n, e, "progress")), i.length || (n.running = false, this._notify(a, n, e, "complete"), n.initial = false), r += i.length;
    }), this._lastDate = e, r === 0 && (this._running = false);
  }
  _getAnims(e) {
    const r = this._charts;
    let n = r.get(e);
    return n || (n = {
      running: false,
      initial: true,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, r.set(e, n)), n;
  }
  listen(e, r, n) {
    this._getAnims(e).listeners[r].push(n);
  }
  add(e, r) {
    !r || !r.length || this._getAnims(e).items.push(...r);
  }
  has(e) {
    return this._getAnims(e).items.length > 0;
  }
  start(e) {
    const r = this._charts.get(e);
    r && (r.running = true, r.start = Date.now(), r.duration = r.items.reduce((n, a) => Math.max(n, a._duration), 0), this._refresh());
  }
  running(e) {
    if (!this._running)
      return false;
    const r = this._charts.get(e);
    return !(!r || !r.running || !r.items.length);
  }
  stop(e) {
    const r = this._charts.get(e);
    if (!r || !r.items.length)
      return;
    const n = r.items;
    let a = n.length - 1;
    for (; a >= 0; --a)
      n[a].cancel();
    r.items = [], this._notify(e, r, Date.now(), "complete");
  }
  remove(e) {
    return this._charts.delete(e);
  }
}
var Or = /* @__PURE__ */ new wx();
const lu = "transparent", kx = {
  boolean(t6, e, r) {
    return r > 0.5 ? e : t6;
  },
  color(t6, e, r) {
    const n = Zd(t6 || lu), a = n.valid && Zd(e || lu);
    return a && a.valid ? a.mix(n, r).hexString() : e;
  },
  number(t6, e, r) {
    return t6 + (e - t6) * r;
  }
};
class _x {
  constructor(e, r, n, a) {
    const i = r[n];
    a = Li([
      e.to,
      a,
      i,
      e.from
    ]);
    const s = Li([
      e.from,
      i,
      a
    ]);
    this._active = true, this._fn = e.fn || kx[e.type || typeof s], this._easing = Ya[e.easing] || Ya.linear, this._start = Math.floor(Date.now() + (e.delay || 0)), this._duration = this._total = Math.floor(e.duration), this._loop = !!e.loop, this._target = r, this._prop = n, this._from = s, this._to = a, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(e, r, n) {
    if (this._active) {
      this._notify(false);
      const a = this._target[this._prop], i = n - this._start, s = this._duration - i;
      this._start = n, this._duration = Math.floor(Math.max(s, e.duration)), this._total += i, this._loop = !!e.loop, this._to = Li([
        e.to,
        r,
        a,
        e.from
      ]), this._from = Li([
        e.from,
        a,
        r
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = false, this._notify(false));
  }
  tick(e) {
    const r = e - this._start, n = this._duration, a = this._prop, i = this._from, s = this._loop, o = this._to;
    let l;
    if (this._active = i !== o && (s || r < n), !this._active) {
      this._target[a] = o, this._notify(true);
      return;
    }
    if (r < 0) {
      this._target[a] = i;
      return;
    }
    l = r / n % 2, l = s && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[a] = this._fn(i, o, l);
  }
  wait() {
    const e = this._promises || (this._promises = []);
    return new Promise((r, n) => {
      e.push({
        res: r,
        rej: n
      });
    });
  }
  _notify(e) {
    const r = e ? "res" : "rej", n = this._promises || [];
    for (let a = 0; a < n.length; a++)
      n[a][r]();
  }
}
class hg {
  constructor(e, r) {
    this._chart = e, this._properties = /* @__PURE__ */ new Map(), this.configure(r);
  }
  configure(e) {
    if (!pe(e))
      return;
    const r = Object.keys(Ve.animation), n = this._properties;
    Object.getOwnPropertyNames(e).forEach((a) => {
      const i = e[a];
      if (!pe(i))
        return;
      const s = {};
      for (const o of r)
        s[o] = i[o];
      (ct(i.properties) && i.properties || [
        a
      ]).forEach((o) => {
        (o === a || !n.has(o)) && n.set(o, s);
      });
    });
  }
  _animateOptions(e, r) {
    const n = r.options, a = Sx(e, n);
    if (!a)
      return [];
    const i = this._createAnimations(a, n);
    return n.$shared && Ox(e.options.$animations, n).then(() => {
      e.options = n;
    }, () => {
    }), i;
  }
  _createAnimations(e, r) {
    const n = this._properties, a = [], i = e.$animations || (e.$animations = {}), s = Object.keys(r), o = Date.now();
    let l;
    for (l = s.length - 1; l >= 0; --l) {
      const c = s[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        a.push(...this._animateOptions(e, r));
        continue;
      }
      const d = r[c];
      let u = i[c];
      const f = n.get(c);
      if (u)
        if (f && u.active()) {
          u.update(f, d, o);
          continue;
        } else
          u.cancel();
      if (!f || !f.duration) {
        e[c] = d;
        continue;
      }
      i[c] = u = new _x(f, e, c, d), a.push(u);
    }
    return a;
  }
  update(e, r) {
    if (this._properties.size === 0) {
      Object.assign(e, r);
      return;
    }
    const n = this._createAnimations(e, r);
    if (n.length)
      return Or.add(this._chart, n), true;
  }
}
function Ox(t6, e) {
  const r = [], n = Object.keys(e);
  for (let a = 0; a < n.length; a++) {
    const i = t6[n[a]];
    i && i.active() && r.push(i.wait());
  }
  return Promise.all(r);
}
function Sx(t6, e) {
  if (!e)
    return;
  let r = t6.options;
  if (!r) {
    t6.options = e;
    return;
  }
  return r.$shared && (t6.options = r = Object.assign({}, r, {
    $shared: false,
    $animations: {}
  })), r;
}
function cu(t6, e) {
  const r = t6 && t6.options || {}, n = r.reverse, a = r.min === void 0 ? e : 0, i = r.max === void 0 ? e : 0;
  return {
    start: n ? i : a,
    end: n ? a : i
  };
}
function Dx(t6, e, r) {
  if (r === false)
    return false;
  const n = cu(t6, r), a = cu(e, r);
  return {
    top: a.end,
    right: n.end,
    bottom: a.start,
    left: n.start
  };
}
function Mx(t6) {
  let e, r, n, a;
  return pe(t6) ? (e = t6.top, r = t6.right, n = t6.bottom, a = t6.left) : e = r = n = a = t6, {
    top: e,
    right: r,
    bottom: n,
    left: a,
    disabled: t6 === false
  };
}
function gg(t6, e) {
  const r = [], n = t6._getSortedDatasetMetas(e);
  let a, i;
  for (a = 0, i = n.length; a < i; ++a)
    r.push(n[a].index);
  return r;
}
function du(t6, e, r, n = {}) {
  const a = t6.keys, i = n.mode === "single";
  let s, o, l, c;
  if (e === null)
    return;
  let d = false;
  for (s = 0, o = a.length; s < o; ++s) {
    if (l = +a[s], l === r) {
      if (d = true, n.all)
        continue;
      break;
    }
    c = t6.values[l], Er(c) && (i || e === 0 || Gd(e) === Gd(c)) && (e += c);
  }
  return !d && !n.all ? 0 : e;
}
function Cx(t6, e) {
  const { iScale: r, vScale: n } = e, a = r.axis === "x" ? "x" : "y", i = n.axis === "x" ? "x" : "y", s = Object.keys(t6), o = new Array(s.length);
  let l, c, d;
  for (l = 0, c = s.length; l < c; ++l)
    d = s[l], o[l] = {
      [a]: d,
      [i]: t6[d]
    };
  return o;
}
function Uo(t6, e) {
  const r = t6 && t6.options.stacked;
  return r || r === void 0 && e.stack !== void 0;
}
function Ex(t6, e, r) {
  return `${t6.id}.${e.id}.${r.stack || r.type}`;
}
function Tx(t6) {
  const { min: e, max: r, minDefined: n, maxDefined: a } = t6.getUserBounds();
  return {
    min: n ? e : Number.NEGATIVE_INFINITY,
    max: a ? r : Number.POSITIVE_INFINITY
  };
}
function Px(t6, e, r) {
  const n = t6[e] || (t6[e] = {});
  return n[r] || (n[r] = {});
}
function uu(t6, e, r, n) {
  for (const a of e.getMatchingVisibleMetas(n).reverse()) {
    const i = t6[a.index];
    if (r && i > 0 || !r && i < 0)
      return a.index;
  }
  return null;
}
function fu(t6, e) {
  const { chart: r, _cachedMeta: n } = t6, a = r._stacks || (r._stacks = {}), { iScale: i, vScale: s, index: o } = n, l = i.axis, c = s.axis, d = Ex(i, s, n), u = e.length;
  let f;
  for (let h = 0; h < u; ++h) {
    const g = e[h], { [l]: m, [c]: p } = g, w = g._stacks || (g._stacks = {});
    f = w[c] = Px(a, d, m), f[o] = p, f._top = uu(f, s, true, n.type), f._bottom = uu(f, s, false, n.type);
    const b = f._visualValues || (f._visualValues = {});
    b[o] = p;
  }
}
function Xo(t6, e) {
  const r = t6.scales;
  return Object.keys(r).filter((n) => r[n].axis === e).shift();
}
function Rx(t6, e) {
  return ha(t6, {
    active: false,
    dataset: void 0,
    datasetIndex: e,
    index: e,
    mode: "default",
    type: "dataset"
  });
}
function Nx(t6, e, r) {
  return ha(t6, {
    active: false,
    dataIndex: e,
    parsed: void 0,
    raw: void 0,
    element: r,
    index: e,
    mode: "default",
    type: "data"
  });
}
function wa(t6, e) {
  const r = t6.controller.index, n = t6.vScale && t6.vScale.axis;
  if (n) {
    e = e || t6._parsed;
    for (const a of e) {
      const i = a._stacks;
      if (!i || i[n] === void 0 || i[n][r] === void 0)
        return;
      delete i[n][r], i[n]._visualValues !== void 0 && i[n]._visualValues[r] !== void 0 && delete i[n]._visualValues[r];
    }
  }
}
const Go = (t6) => t6 === "reset" || t6 === "none", hu = (t6, e) => e ? t6 : Object.assign({}, t6), Ix = (t6, e, r) => t6 && !e.hidden && e._stacked && {
  keys: gg(r, true),
  values: null
};
class Ua {
  constructor(e, r) {
    this.chart = e, this._ctx = e.ctx, this.index = r, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = false, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = false, this.supportsDecimation = false, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const e = this._cachedMeta;
    this.configure(), this.linkScales(), e._stacked = Uo(e.vScale, e), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(e) {
    this.index !== e && wa(this._cachedMeta), this.index = e;
  }
  linkScales() {
    const e = this.chart, r = this._cachedMeta, n = this.getDataset(), a = (u, f, h, g) => u === "x" ? f : u === "r" ? g : h, i = r.xAxisID = De(n.xAxisID, Xo(e, "x")), s = r.yAxisID = De(n.yAxisID, Xo(e, "y")), o = r.rAxisID = De(n.rAxisID, Xo(e, "r")), l = r.indexAxis, c = r.iAxisID = a(l, i, s, o), d = r.vAxisID = a(l, s, i, o);
    r.xScale = this.getScaleForId(i), r.yScale = this.getScaleForId(s), r.rScale = this.getScaleForId(o), r.iScale = this.getScaleForId(c), r.vScale = this.getScaleForId(d);
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
    const r = this._cachedMeta;
    return e === r.iScale ? r.vScale : r.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const e = this._cachedMeta;
    this._data && Kd(this._data, this), e._stacked && wa(e);
  }
  _dataCheck() {
    const e = this.getDataset(), r = e.data || (e.data = []), n = this._data;
    if (pe(r)) {
      const a = this._cachedMeta;
      this._data = Cx(r, a);
    } else if (n !== r) {
      if (n) {
        Kd(n, this);
        const a = this._cachedMeta;
        wa(a), a._parsed = [];
      }
      r && Object.isExtensible(r) && Nv(r, this), this._syncList = [], this._data = r;
    }
  }
  addElements() {
    const e = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (e.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(e) {
    const r = this._cachedMeta, n = this.getDataset();
    let a = false;
    this._dataCheck();
    const i = r._stacked;
    r._stacked = Uo(r.vScale, r), r.stack !== n.stack && (a = true, wa(r), r.stack = n.stack), this._resyncElements(e), (a || i !== r._stacked) && (fu(this, r._parsed), r._stacked = Uo(r.vScale, r));
  }
  configure() {
    const e = this.chart.config, r = e.datasetScopeKeys(this._type), n = e.getOptionScopes(this.getDataset(), r, true);
    this.options = e.createResolver(n, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(e, r) {
    const { _cachedMeta: n, _data: a } = this, { iScale: i, _stacked: s } = n, o = i.axis;
    let l = e === 0 && r === a.length ? true : n._sorted, c = e > 0 && n._parsed[e - 1], d, u, f;
    if (this._parsing === false)
      n._parsed = a, n._sorted = true, f = a;
    else {
      ct(a[e]) ? f = this.parseArrayData(n, a, e, r) : pe(a[e]) ? f = this.parseObjectData(n, a, e, r) : f = this.parsePrimitiveData(n, a, e, r);
      const h = () => u[o] === null || c && u[o] < c[o];
      for (d = 0; d < r; ++d)
        n._parsed[d + e] = u = f[d], l && (h() && (l = false), c = u);
      n._sorted = l;
    }
    s && fu(this, f);
  }
  parsePrimitiveData(e, r, n, a) {
    const { iScale: i, vScale: s } = e, o = i.axis, l = s.axis, c = i.getLabels(), d = i === s, u = new Array(a);
    let f, h, g;
    for (f = 0, h = a; f < h; ++f)
      g = f + n, u[f] = {
        [o]: d || i.parse(c[g], g),
        [l]: s.parse(r[g], g)
      };
    return u;
  }
  parseArrayData(e, r, n, a) {
    const { xScale: i, yScale: s } = e, o = new Array(a);
    let l, c, d, u;
    for (l = 0, c = a; l < c; ++l)
      d = l + n, u = r[d], o[l] = {
        x: i.parse(u[0], d),
        y: s.parse(u[1], d)
      };
    return o;
  }
  parseObjectData(e, r, n, a) {
    const { xScale: i, yScale: s } = e, { xAxisKey: o = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(a);
    let d, u, f, h;
    for (d = 0, u = a; d < u; ++d)
      f = d + n, h = r[f], c[d] = {
        x: i.parse(ri(h, o), f),
        y: s.parse(ri(h, l), f)
      };
    return c;
  }
  getParsed(e) {
    return this._cachedMeta._parsed[e];
  }
  getDataElement(e) {
    return this._cachedMeta.data[e];
  }
  applyStack(e, r, n) {
    const a = this.chart, i = this._cachedMeta, s = r[e.axis], o = {
      keys: gg(a, true),
      values: r._stacks[e.axis]._visualValues
    };
    return du(o, s, i.index, {
      mode: n
    });
  }
  updateRangeFromParsed(e, r, n, a) {
    const i = n[r.axis];
    let s = i === null ? NaN : i;
    const o = a && n._stacks[r.axis];
    a && o && (a.values = o, s = du(a, i, this._cachedMeta.index)), e.min = Math.min(e.min, s), e.max = Math.max(e.max, s);
  }
  getMinMax(e, r) {
    const n = this._cachedMeta, a = n._parsed, i = n._sorted && e === n.iScale, s = a.length, o = this._getOtherScale(e), l = Ix(r, n, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: d, max: u } = Tx(o);
    let f, h;
    function g() {
      h = a[f];
      const m = h[o.axis];
      return !Er(h[e.axis]) || d > m || u < m;
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
    const r = this._cachedMeta._parsed, n = [];
    let a, i, s;
    for (a = 0, i = r.length; a < i; ++a)
      s = r[a][e.axis], Er(s) && n.push(s);
    return n;
  }
  getMaxOverflow() {
    return false;
  }
  getLabelAndValue(e) {
    const r = this._cachedMeta, n = r.iScale, a = r.vScale, i = this.getParsed(e);
    return {
      label: n ? "" + n.getLabelForValue(i[n.axis]) : "",
      value: a ? "" + a.getLabelForValue(i[a.axis]) : ""
    };
  }
  _update(e) {
    const r = this._cachedMeta;
    this.update(e || "default"), r._clip = Mx(De(this.options.clip, Dx(r.xScale, r.yScale, this.getMaxOverflow())));
  }
  update(e) {
  }
  draw() {
    const e = this._ctx, r = this.chart, n = this._cachedMeta, a = n.data || [], i = r.chartArea, s = [], o = this._drawStart || 0, l = this._drawCount || a.length - o, c = this.options.drawActiveElementsOnTop;
    let d;
    for (n.dataset && n.dataset.draw(e, i, o, l), d = o; d < o + l; ++d) {
      const u = a[d];
      u.hidden || (u.active && c ? s.push(u) : u.draw(e, i));
    }
    for (d = 0; d < s.length; ++d)
      s[d].draw(e, i);
  }
  getStyle(e, r) {
    const n = r ? "active" : "default";
    return e === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(n) : this.resolveDataElementOptions(e || 0, n);
  }
  getContext(e, r, n) {
    const a = this.getDataset();
    let i;
    if (e >= 0 && e < this._cachedMeta.data.length) {
      const s = this._cachedMeta.data[e];
      i = s.$context || (s.$context = Nx(this.getContext(), e, s)), i.parsed = this.getParsed(e), i.raw = a.data[e], i.index = i.dataIndex = e;
    } else
      i = this.$context || (this.$context = Rx(this.chart.getContext(), this.index)), i.dataset = a, i.index = i.datasetIndex = this.index;
    return i.active = !!r, i.mode = n, i;
  }
  resolveDatasetElementOptions(e) {
    return this._resolveElementOptions(this.datasetElementType.id, e);
  }
  resolveDataElementOptions(e, r) {
    return this._resolveElementOptions(this.dataElementType.id, r, e);
  }
  _resolveElementOptions(e, r = "default", n) {
    const a = r === "active", i = this._cachedDataOpts, s = e + "-" + r, o = i[s], l = this.enableOptionSharing && ws(n);
    if (o)
      return hu(o, l);
    const c = this.chart.config, d = c.datasetElementScopeKeys(this._type, e), u = a ? [
      `${e}Hover`,
      "hover",
      e,
      ""
    ] : [
      e,
      ""
    ], f = c.getOptionScopes(this.getDataset(), d), h = Object.keys(Ve.elements[e]), g = () => this.getContext(n, a, r), m = c.resolveNamedOptions(f, h, g, u);
    return m.$shared && (m.$shared = l, i[s] = Object.freeze(hu(m, l))), m;
  }
  _resolveAnimations(e, r, n) {
    const a = this.chart, i = this._cachedDataOpts, s = `animation-${r}`, o = i[s];
    if (o)
      return o;
    let l;
    if (a.options.animation !== false) {
      const d = this.chart.config, u = d.datasetAnimationScopeKeys(this._type, r), f = d.getOptionScopes(this.getDataset(), u);
      l = d.createResolver(f, this.getContext(e, n, r));
    }
    const c = new hg(a, l && l.animations);
    return l && l._cacheable && (i[s] = Object.freeze(c)), c;
  }
  getSharedOptions(e) {
    if (e.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, e));
  }
  includeOptions(e, r) {
    return !r || Go(e) || this.chart._animationsDisabled;
  }
  _getSharedOptions(e, r) {
    const n = this.resolveDataElementOptions(e, r), a = this._sharedOptions, i = this.getSharedOptions(n), s = this.includeOptions(r, i) || i !== a;
    return this.updateSharedOptions(i, r, n), {
      sharedOptions: i,
      includeOptions: s
    };
  }
  updateElement(e, r, n, a) {
    Go(a) ? Object.assign(e, n) : this._resolveAnimations(r, a).update(e, n);
  }
  updateSharedOptions(e, r, n) {
    e && !Go(r) && this._resolveAnimations(void 0, r).update(e, n);
  }
  _setStyle(e, r, n, a) {
    e.active = a;
    const i = this.getStyle(r, a);
    this._resolveAnimations(r, n, a).update(e, {
      options: !a && this.getSharedOptions(i) || i
    });
  }
  removeHoverStyle(e, r, n) {
    this._setStyle(e, n, "active", false);
  }
  setHoverStyle(e, r, n) {
    this._setStyle(e, n, "active", true);
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
    const r = this._data, n = this._cachedMeta.data;
    for (const [o, l, c] of this._syncList)
      this[o](l, c);
    this._syncList = [];
    const a = n.length, i = r.length, s = Math.min(i, a);
    s && this.parse(0, s), i > a ? this._insertElements(a, i - a, e) : i < a && this._removeElements(i, a - i);
  }
  _insertElements(e, r, n = true) {
    const a = this._cachedMeta, i = a.data, s = e + r;
    let o;
    const l = (c) => {
      for (c.length += r, o = c.length - 1; o >= s; o--)
        c[o] = c[o - r];
    };
    for (l(i), o = e; o < s; ++o)
      i[o] = new this.dataElementType();
    this._parsing && l(a._parsed), this.parse(e, r), n && this.updateElements(i, e, r, "reset");
  }
  updateElements(e, r, n, a) {
  }
  _removeElements(e, r) {
    const n = this._cachedMeta;
    if (this._parsing) {
      const a = n._parsed.splice(e, r);
      n._stacked && wa(n, a);
    }
    n.data.splice(e, r);
  }
  _sync(e) {
    if (this._parsing)
      this._syncList.push(e);
    else {
      const [r, n, a] = e;
      this[r](n, a);
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
  _onDataSplice(e, r) {
    r && this._sync([
      "_removeElements",
      e,
      r
    ]);
    const n = arguments.length - 2;
    n && this._sync([
      "_insertElements",
      e,
      n
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
K(Ua, "defaults", {}), K(Ua, "datasetElementType", null), K(Ua, "dataElementType", null);
function Ax(t6, e, r) {
  let n = 1, a = 1, i = 0, s = 0;
  if (e < Qe) {
    const o = t6, l = o + e, c = Math.cos(o), d = Math.sin(o), u = Math.cos(l), f = Math.sin(l), h = (k, v, x) => Os(k, o, l, true) ? 1 : Math.max(v, v * r, x, x * r), g = (k, v, x) => Os(k, o, l, true) ? -1 : Math.min(v, v * r, x, x * r), m = h(0, c, u), p = h(tt, d, f), w = g(at, c, u), b = g(at + tt, d, f);
    n = (m - w) / 2, a = (p - b) / 2, i = -(m + w) / 2, s = -(p + b) / 2;
  }
  return {
    ratioX: n,
    ratioY: a,
    offsetX: i,
    offsetY: s
  };
}
class $a extends Ua {
  constructor(e, r) {
    super(e, r), this.enableOptionSharing = true, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(e, r) {
    const n = this.getDataset().data, a = this._cachedMeta;
    if (this._parsing === false)
      a._parsed = n;
    else {
      let i = (l) => +n[l];
      if (pe(n[e])) {
        const { key: l = "value" } = this._parsing;
        i = (c) => +ri(n[c], l);
      }
      let s, o;
      for (s = e, o = e + r; s < o; ++s)
        a._parsed[s] = i(s);
    }
  }
  _getRotation() {
    return xn(this.options.rotation - 90);
  }
  _getCircumference() {
    return xn(this.options.circumference);
  }
  _getRotationExtents() {
    let e = Qe, r = -Qe;
    for (let n = 0; n < this.chart.data.datasets.length; ++n)
      if (this.chart.isDatasetVisible(n) && this.chart.getDatasetMeta(n).type === this._type) {
        const a = this.chart.getDatasetMeta(n).controller, i = a._getRotation(), s = a._getCircumference();
        e = Math.min(e, i), r = Math.max(r, i + s);
      }
    return {
      rotation: e,
      circumference: r - e
    };
  }
  update(e) {
    const r = this.chart, { chartArea: n } = r, a = this._cachedMeta, i = a.data, s = this.getMaxBorderWidth() + this.getMaxOffset(i) + this.options.spacing, o = Math.max((Math.min(n.width, n.height) - s) / 2, 0), l = Math.min(vv(this.options.cutout, o), 1), c = this._getRingWeight(this.index), { circumference: d, rotation: u } = this._getRotationExtents(), { ratioX: f, ratioY: h, offsetX: g, offsetY: m } = Ax(u, d, l), p = (n.width - s) / f, w = (n.height - s) / h, b = Math.max(Math.min(p, w) / 2, 0), k = Qh(this.options.radius, b), v = Math.max(k * l, 0), x = (k - v) / this._getVisibleDatasetWeightTotal();
    this.offsetX = g * k, this.offsetY = m * k, a.total = this.calculateTotal(), this.outerRadius = k - x * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - x * c, 0), this.updateElements(i, 0, i.length, e);
  }
  _circumference(e, r) {
    const n = this.options, a = this._cachedMeta, i = this._getCircumference();
    return r && n.animation.animateRotate || !this.chart.getDataVisibility(e) || a._parsed[e] === null || a.data[e].hidden ? 0 : this.calculateCircumference(a._parsed[e] * i / Qe);
  }
  updateElements(e, r, n, a) {
    const i = a === "reset", s = this.chart, o = s.chartArea, c = s.options.animation, d = (o.left + o.right) / 2, u = (o.top + o.bottom) / 2, f = i && c.animateScale, h = f ? 0 : this.innerRadius, g = f ? 0 : this.outerRadius, { sharedOptions: m, includeOptions: p } = this._getSharedOptions(r, a);
    let w = this._getRotation(), b;
    for (b = 0; b < r; ++b)
      w += this._circumference(b, i);
    for (b = r; b < r + n; ++b) {
      const k = this._circumference(b, i), v = e[b], x = {
        x: d + this.offsetX,
        y: u + this.offsetY,
        startAngle: w,
        endAngle: w + k,
        circumference: k,
        outerRadius: g,
        innerRadius: h
      };
      p && (x.options = m || this.resolveDataElementOptions(b, v.active ? "active" : a)), w += k, this.updateElement(v, b, x, a);
    }
  }
  calculateTotal() {
    const e = this._cachedMeta, r = e.data;
    let n = 0, a;
    for (a = 0; a < r.length; a++) {
      const i = e._parsed[a];
      i !== null && !isNaN(i) && this.chart.getDataVisibility(a) && !r[a].hidden && (n += Math.abs(i));
    }
    return n;
  }
  calculateCircumference(e) {
    const r = this._cachedMeta.total;
    return r > 0 && !isNaN(e) ? Qe * (Math.abs(e) / r) : 0;
  }
  getLabelAndValue(e) {
    const r = this._cachedMeta, n = this.chart, a = n.data.labels || [], i = Hv(r._parsed[e], n.options.locale);
    return {
      label: a[e] || "",
      value: i
    };
  }
  getMaxBorderWidth(e) {
    let r = 0;
    const n = this.chart;
    let a, i, s, o, l;
    if (!e) {
      for (a = 0, i = n.data.datasets.length; a < i; ++a)
        if (n.isDatasetVisible(a)) {
          s = n.getDatasetMeta(a), e = s.data, o = s.controller;
          break;
        }
    }
    if (!e)
      return 0;
    for (a = 0, i = e.length; a < i; ++a)
      l = o.resolveDataElementOptions(a), l.borderAlign !== "inner" && (r = Math.max(r, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return r;
  }
  getMaxOffset(e) {
    let r = 0;
    for (let n = 0, a = e.length; n < a; ++n) {
      const i = this.resolveDataElementOptions(n);
      r = Math.max(r, i.offset || 0, i.hoverOffset || 0);
    }
    return r;
  }
  _getRingWeightOffset(e) {
    let r = 0;
    for (let n = 0; n < e; ++n)
      this.chart.isDatasetVisible(n) && (r += this._getRingWeight(n));
    return r;
  }
  _getRingWeight(e) {
    return Math.max(De(this.chart.data.datasets[e].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
K($a, "id", "doughnut"), K($a, "defaults", {
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
}), K($a, "descriptors", {
  _scriptable: (e) => e !== "spacing",
  _indexable: (e) => e !== "spacing" && !e.startsWith("borderDash") && !e.startsWith("hoverBorderDash")
}), K($a, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(e) {
          const r = e.data;
          if (r.labels.length && r.datasets.length) {
            const { labels: { pointStyle: n, color: a } } = e.legend.options;
            return r.labels.map((i, s) => {
              const l = e.getDatasetMeta(0).controller.getStyle(s);
              return {
                text: i,
                fillStyle: l.backgroundColor,
                strokeStyle: l.borderColor,
                fontColor: a,
                lineWidth: l.borderWidth,
                pointStyle: n,
                hidden: !e.getDataVisibility(s),
                index: s
              };
            });
          }
          return [];
        }
      },
      onClick(e, r, n) {
        n.chart.toggleDataVisibility(r.index), n.chart.update();
      }
    }
  }
});
function ln() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class yc {
  constructor(e) {
    K(this, "options");
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
    Object.assign(yc.prototype, e);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return ln();
  }
  parse() {
    return ln();
  }
  format() {
    return ln();
  }
  add() {
    return ln();
  }
  diff() {
    return ln();
  }
  startOf() {
    return ln();
  }
  endOf() {
    return ln();
  }
}
var Fx = {
  _date: yc
};
function Lx(t6, e, r, n) {
  const { controller: a, data: i, _sorted: s } = t6, o = a._cachedMeta.iScale, l = t6.dataset && t6.dataset.options ? t6.dataset.options.spanGaps : null;
  if (o && e === o.axis && e !== "r" && s && i.length) {
    const c = o._reversePixels ? Pv : Ml;
    if (n) {
      if (a._sharedOptions) {
        const d = i[0], u = typeof d.getRange == "function" && d.getRange(e);
        if (u) {
          const f = c(i, e, r - u), h = c(i, e, r + u);
          return {
            lo: f.lo,
            hi: h.hi
          };
        }
      }
    } else {
      const d = c(i, e, r);
      if (l) {
        const { vScale: u } = a._cachedMeta, { _parsed: f } = t6, h = f.slice(0, d.lo + 1).reverse().findIndex((m) => !mt(m[u.axis]));
        d.lo -= Math.max(0, h);
        const g = f.slice(d.hi).findIndex((m) => !mt(m[u.axis]));
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
function io(t6, e, r, n, a) {
  const i = t6.getSortedVisibleDatasetMetas(), s = r[e];
  for (let o = 0, l = i.length; o < l; ++o) {
    const { index: c, data: d } = i[o], { lo: u, hi: f } = Lx(i[o], e, s, a);
    for (let h = u; h <= f; ++h) {
      const g = d[h];
      g.skip || n(g, c, h);
    }
  }
}
function Wx(t6) {
  const e = t6.indexOf("x") !== -1, r = t6.indexOf("y") !== -1;
  return function(n, a) {
    const i = e ? Math.abs(n.x - a.x) : 0, s = r ? Math.abs(n.y - a.y) : 0;
    return Math.sqrt(Math.pow(i, 2) + Math.pow(s, 2));
  };
}
function Ko(t6, e, r, n, a) {
  const i = [];
  return !a && !t6.isPointInArea(e) || io(t6, r, e, function(o, l, c) {
    !a && !sg(o, t6.chartArea, 0) || o.inRange(e.x, e.y, n) && i.push({
      element: o,
      datasetIndex: l,
      index: c
    });
  }, true), i;
}
function $x(t6, e, r, n) {
  let a = [];
  function i(s, o, l) {
    const { startAngle: c, endAngle: d } = s.getProps([
      "startAngle",
      "endAngle"
    ], n), { angle: u } = Zh(s, {
      x: e.x,
      y: e.y
    });
    Os(u, c, d) && a.push({
      element: s,
      datasetIndex: o,
      index: l
    });
  }
  return io(t6, r, e, i), a;
}
function zx(t6, e, r, n, a, i) {
  let s = [];
  const o = Wx(r);
  let l = Number.POSITIVE_INFINITY;
  function c(d, u, f) {
    const h = d.inRange(e.x, e.y, a);
    if (n && !h)
      return;
    const g = d.getCenterPoint(a);
    if (!(!!i || t6.isPointInArea(g)) && !h)
      return;
    const p = o(e, g);
    p < l ? (s = [
      {
        element: d,
        datasetIndex: u,
        index: f
      }
    ], l = p) : p === l && s.push({
      element: d,
      datasetIndex: u,
      index: f
    });
  }
  return io(t6, r, e, c), s;
}
function Qo(t6, e, r, n, a, i) {
  return !i && !t6.isPointInArea(e) ? [] : r === "r" && !n ? $x(t6, e, r, a) : zx(t6, e, r, n, a, i);
}
function gu(t6, e, r, n, a) {
  const i = [], s = r === "x" ? "inXRange" : "inYRange";
  let o = false;
  return io(t6, r, e, (l, c, d) => {
    l[s] && l[s](e[r], a) && (i.push({
      element: l,
      datasetIndex: c,
      index: d
    }), o = o || l.inRange(e.x, e.y, a));
  }), n && !o ? [] : i;
}
var jx = {
  modes: {
    index(t6, e, r, n) {
      const a = gn(e, t6), i = r.axis || "x", s = r.includeInvisible || false, o = r.intersect ? Ko(t6, a, i, n, s) : Qo(t6, a, i, false, n, s), l = [];
      return o.length ? (t6.getSortedVisibleDatasetMetas().forEach((c) => {
        const d = o[0].index, u = c.data[d];
        u && !u.skip && l.push({
          element: u,
          datasetIndex: c.index,
          index: d
        });
      }), l) : [];
    },
    dataset(t6, e, r, n) {
      const a = gn(e, t6), i = r.axis || "xy", s = r.includeInvisible || false;
      let o = r.intersect ? Ko(t6, a, i, n, s) : Qo(t6, a, i, false, n, s);
      if (o.length > 0) {
        const l = o[0].datasetIndex, c = t6.getDatasetMeta(l).data;
        o = [];
        for (let d = 0; d < c.length; ++d)
          o.push({
            element: c[d],
            datasetIndex: l,
            index: d
          });
      }
      return o;
    },
    point(t6, e, r, n) {
      const a = gn(e, t6), i = r.axis || "xy", s = r.includeInvisible || false;
      return Ko(t6, a, i, n, s);
    },
    nearest(t6, e, r, n) {
      const a = gn(e, t6), i = r.axis || "xy", s = r.includeInvisible || false;
      return Qo(t6, a, i, r.intersect, n, s);
    },
    x(t6, e, r, n) {
      const a = gn(e, t6);
      return gu(t6, a, "x", r.intersect, n);
    },
    y(t6, e, r, n) {
      const a = gn(e, t6);
      return gu(t6, a, "y", r.intersect, n);
    }
  }
};
const mg = [
  "left",
  "top",
  "right",
  "bottom"
];
function ka(t6, e) {
  return t6.filter((r) => r.pos === e);
}
function mu(t6, e) {
  return t6.filter((r) => mg.indexOf(r.pos) === -1 && r.box.axis === e);
}
function _a(t6, e) {
  return t6.sort((r, n) => {
    const a = e ? n : r, i = e ? r : n;
    return a.weight === i.weight ? a.index - i.index : a.weight - i.weight;
  });
}
function Hx(t6) {
  const e = [];
  let r, n, a, i, s, o;
  for (r = 0, n = (t6 || []).length; r < n; ++r)
    a = t6[r], { position: i, options: { stack: s, stackWeight: o = 1 } } = a, e.push({
      index: r,
      box: a,
      pos: i,
      horizontal: a.isHorizontal(),
      weight: a.weight,
      stack: s && i + s,
      stackWeight: o
    });
  return e;
}
function Bx(t6) {
  const e = {};
  for (const r of t6) {
    const { stack: n, pos: a, stackWeight: i } = r;
    if (!n || !mg.includes(a))
      continue;
    const s = e[n] || (e[n] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    s.count++, s.weight += i;
  }
  return e;
}
function Yx(t6, e) {
  const r = Bx(t6), { vBoxMaxWidth: n, hBoxMaxHeight: a } = e;
  let i, s, o;
  for (i = 0, s = t6.length; i < s; ++i) {
    o = t6[i];
    const { fullSize: l } = o.box, c = r[o.stack], d = c && o.stackWeight / c.weight;
    o.horizontal ? (o.width = d ? d * n : l && e.availableWidth, o.height = a) : (o.width = n, o.height = d ? d * a : l && e.availableHeight);
  }
  return r;
}
function Vx(t6) {
  const e = Hx(t6), r = _a(e.filter((c) => c.box.fullSize), true), n = _a(ka(e, "left"), true), a = _a(ka(e, "right")), i = _a(ka(e, "top"), true), s = _a(ka(e, "bottom")), o = mu(e, "x"), l = mu(e, "y");
  return {
    fullSize: r,
    leftAndTop: n.concat(i),
    rightAndBottom: a.concat(l).concat(s).concat(o),
    chartArea: ka(e, "chartArea"),
    vertical: n.concat(a).concat(l),
    horizontal: i.concat(s).concat(o)
  };
}
function pu(t6, e, r, n) {
  return Math.max(t6[r], e[r]) + Math.max(t6[n], e[n]);
}
function pg(t6, e) {
  t6.top = Math.max(t6.top, e.top), t6.left = Math.max(t6.left, e.left), t6.bottom = Math.max(t6.bottom, e.bottom), t6.right = Math.max(t6.right, e.right);
}
function qx(t6, e, r, n) {
  const { pos: a, box: i } = r, s = t6.maxPadding;
  if (!pe(a)) {
    r.size && (t6[a] -= r.size);
    const u = n[r.stack] || {
      size: 0,
      count: 1
    };
    u.size = Math.max(u.size, r.horizontal ? i.height : i.width), r.size = u.size / u.count, t6[a] += r.size;
  }
  i.getPadding && pg(s, i.getPadding());
  const o = Math.max(0, e.outerWidth - pu(s, t6, "left", "right")), l = Math.max(0, e.outerHeight - pu(s, t6, "top", "bottom")), c = o !== t6.w, d = l !== t6.h;
  return t6.w = o, t6.h = l, r.horizontal ? {
    same: c,
    other: d
  } : {
    same: d,
    other: c
  };
}
function Ux(t6) {
  const e = t6.maxPadding;
  function r(n) {
    const a = Math.max(e[n] - t6[n], 0);
    return t6[n] += a, a;
  }
  t6.y += r("top"), t6.x += r("left"), r("right"), r("bottom");
}
function Xx(t6, e) {
  const r = e.maxPadding;
  function n(a) {
    const i = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return a.forEach((s) => {
      i[s] = Math.max(e[s], r[s]);
    }), i;
  }
  return n(t6 ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function za(t6, e, r, n) {
  const a = [];
  let i, s, o, l, c, d;
  for (i = 0, s = t6.length, c = 0; i < s; ++i) {
    o = t6[i], l = o.box, l.update(o.width || e.w, o.height || e.h, Xx(o.horizontal, e));
    const { same: u, other: f } = qx(e, r, o, n);
    c |= u && a.length, d = d || f, l.fullSize || a.push(o);
  }
  return c && za(a, e, r, n) || d;
}
function $i(t6, e, r, n, a) {
  t6.top = r, t6.left = e, t6.right = e + n, t6.bottom = r + a, t6.width = n, t6.height = a;
}
function bu(t6, e, r, n) {
  const a = r.padding;
  let { x: i, y: s } = e;
  for (const o of t6) {
    const l = o.box, c = n[o.stack] || {
      placed: 0,
      weight: 1
    }, d = o.stackWeight / c.weight || 1;
    if (o.horizontal) {
      const u = e.w * d, f = c.size || l.height;
      ws(c.start) && (s = c.start), l.fullSize ? $i(l, a.left, s, r.outerWidth - a.right - a.left, f) : $i(l, e.left + c.placed, s, u, f), c.start = s, c.placed += u, s = l.bottom;
    } else {
      const u = e.h * d, f = c.size || l.width;
      ws(c.start) && (i = c.start), l.fullSize ? $i(l, i, a.top, f, r.outerHeight - a.bottom - a.top) : $i(l, i, e.top + c.placed, f, u), c.start = i, c.placed += u, i = l.right;
    }
  }
  e.x = i, e.y = s;
}
var Vr = {
  addBox(t6, e) {
    t6.boxes || (t6.boxes = []), e.fullSize = e.fullSize || false, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() {
      return [
        {
          z: 0,
          draw(r) {
            e.draw(r);
          }
        }
      ];
    }, t6.boxes.push(e);
  },
  removeBox(t6, e) {
    const r = t6.boxes ? t6.boxes.indexOf(e) : -1;
    r !== -1 && t6.boxes.splice(r, 1);
  },
  configure(t6, e, r) {
    e.fullSize = r.fullSize, e.position = r.position, e.weight = r.weight;
  },
  update(t6, e, r, n) {
    if (!t6)
      return;
    const a = Kt(t6.options.layout.padding), i = Math.max(e - a.width, 0), s = Math.max(r - a.height, 0), o = Vx(t6.boxes), l = o.vertical, c = o.horizontal;
    Se(t6.boxes, (m) => {
      typeof m.beforeLayout == "function" && m.beforeLayout();
    });
    const d = l.reduce((m, p) => p.box.options && p.box.options.display === false ? m : m + 1, 0) || 1, u = Object.freeze({
      outerWidth: e,
      outerHeight: r,
      padding: a,
      availableWidth: i,
      availableHeight: s,
      vBoxMaxWidth: i / 2 / d,
      hBoxMaxHeight: s / 2
    }), f = Object.assign({}, a);
    pg(f, Kt(n));
    const h = Object.assign({
      maxPadding: f,
      w: i,
      h: s,
      x: a.left,
      y: a.top
    }, a), g = Yx(l.concat(c), u);
    za(o.fullSize, h, u, g), za(l, h, u, g), za(c, h, u, g) && za(l, h, u, g), Ux(h), bu(o.leftAndTop, h, u, g), h.x += h.w, h.y += h.h, bu(o.rightAndBottom, h, u, g), t6.chartArea = {
      left: h.left,
      top: h.top,
      right: h.left + h.w,
      bottom: h.top + h.h,
      height: h.h,
      width: h.w
    }, Se(o.chartArea, (m) => {
      const p = m.box;
      Object.assign(p, t6.chartArea), p.update(h.w, h.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class bg {
  acquireContext(e, r) {
  }
  releaseContext(e) {
    return false;
  }
  addEventListener(e, r, n) {
  }
  removeEventListener(e, r, n) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(e, r, n, a) {
    return r = Math.max(0, r || e.width), n = n || e.height, {
      width: r,
      height: Math.max(0, a ? Math.floor(r / a) : n)
    };
  }
  isAttached(e) {
    return true;
  }
  updateConfig(e) {
  }
}
class Gx extends bg {
  acquireContext(e) {
    return e && e.getContext && e.getContext("2d") || null;
  }
  updateConfig(e) {
    e.options.animation = false;
  }
}
const ss = "$chartjs", Kx = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, yu = (t6) => t6 === null || t6 === "";
function Qx(t6, e) {
  const r = t6.style, n = t6.getAttribute("height"), a = t6.getAttribute("width");
  if (t6[ss] = {
    initial: {
      height: n,
      width: a,
      style: {
        display: r.display,
        height: r.height,
        width: r.width
      }
    }
  }, r.display = r.display || "block", r.boxSizing = r.boxSizing || "border-box", yu(a)) {
    const i = ou(t6, "width");
    i !== void 0 && (t6.width = i);
  }
  if (yu(n))
    if (t6.style.height === "")
      t6.height = t6.width / (e || 2);
    else {
      const i = ou(t6, "height");
      i !== void 0 && (t6.height = i);
    }
  return t6;
}
const yg = yx ? {
  passive: true
} : false;
function Jx(t6, e, r) {
  t6 && t6.addEventListener(e, r, yg);
}
function Zx(t6, e, r) {
  t6 && t6.canvas && t6.canvas.removeEventListener(e, r, yg);
}
function ew(t6, e) {
  const r = Kx[t6.type] || t6.type, { x: n, y: a } = gn(t6, e);
  return {
    type: r,
    chart: e,
    native: t6,
    x: n !== void 0 ? n : null,
    y: a !== void 0 ? a : null
  };
}
function Ms(t6, e) {
  for (const r of t6)
    if (r === e || r.contains(e))
      return true;
}
function tw(t6, e, r) {
  const n = t6.canvas, a = new MutationObserver((i) => {
    let s = false;
    for (const o of i)
      s = s || Ms(o.addedNodes, n), s = s && !Ms(o.removedNodes, n);
    s && r();
  });
  return a.observe(document, {
    childList: true,
    subtree: true
  }), a;
}
function rw(t6, e, r) {
  const n = t6.canvas, a = new MutationObserver((i) => {
    let s = false;
    for (const o of i)
      s = s || Ms(o.removedNodes, n), s = s && !Ms(o.addedNodes, n);
    s && r();
  });
  return a.observe(document, {
    childList: true,
    subtree: true
  }), a;
}
const ni = /* @__PURE__ */ new Map();
let vu = 0;
function vg() {
  const t6 = window.devicePixelRatio;
  t6 !== vu && (vu = t6, ni.forEach((e, r) => {
    r.currentDevicePixelRatio !== t6 && e();
  }));
}
function nw(t6, e) {
  ni.size || window.addEventListener("resize", vg), ni.set(t6, e);
}
function aw(t6) {
  ni.delete(t6), ni.size || window.removeEventListener("resize", vg);
}
function iw(t6, e, r) {
  const n = t6.canvas, a = n && bc(n);
  if (!a)
    return;
  const i = rg((o, l) => {
    const c = a.clientWidth;
    r(o, l), c < a.clientWidth && r();
  }, window), s = new ResizeObserver((o) => {
    const l = o[0], c = l.contentRect.width, d = l.contentRect.height;
    c === 0 && d === 0 || i(c, d);
  });
  return s.observe(a), nw(t6, i), s;
}
function Jo(t6, e, r) {
  r && r.disconnect(), e === "resize" && aw(t6);
}
function sw(t6, e, r) {
  const n = t6.canvas, a = rg((i) => {
    t6.ctx !== null && r(ew(i, t6));
  }, t6);
  return Jx(n, e, a), a;
}
class ow extends bg {
  acquireContext(e, r) {
    const n = e && e.getContext && e.getContext("2d");
    return n && n.canvas === e ? (Qx(e, r), n) : null;
  }
  releaseContext(e) {
    const r = e.canvas;
    if (!r[ss])
      return false;
    const n = r[ss].initial;
    [
      "height",
      "width"
    ].forEach((i) => {
      const s = n[i];
      mt(s) ? r.removeAttribute(i) : r.setAttribute(i, s);
    });
    const a = n.style || {};
    return Object.keys(a).forEach((i) => {
      r.style[i] = a[i];
    }), r.width = r.width, delete r[ss], true;
  }
  addEventListener(e, r, n) {
    this.removeEventListener(e, r);
    const a = e.$proxies || (e.$proxies = {}), s = {
      attach: tw,
      detach: rw,
      resize: iw
    }[r] || sw;
    a[r] = s(e, r, n);
  }
  removeEventListener(e, r) {
    const n = e.$proxies || (e.$proxies = {}), a = n[r];
    if (!a)
      return;
    (({
      attach: Jo,
      detach: Jo,
      resize: Jo
    })[r] || Zx)(e, r, a), n[r] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(e, r, n, a) {
    return bx(e, r, n, a);
  }
  isAttached(e) {
    const r = e && bc(e);
    return !!(r && r.isConnected);
  }
}
function lw(t6) {
  return !pc() || typeof OffscreenCanvas < "u" && t6 instanceof OffscreenCanvas ? Gx : ow;
}
var is;
let mi = (is = class {
  constructor() {
    K(this, "x");
    K(this, "y");
    K(this, "active", false);
    K(this, "options");
    K(this, "$animations");
  }
  tooltipPosition(e) {
    const { x: r, y: n } = this.getProps([
      "x",
      "y"
    ], e);
    return {
      x: r,
      y: n
    };
  }
  hasValue() {
    return _s(this.x) && _s(this.y);
  }
  getProps(e, r) {
    const n = this.$animations;
    if (!r || !n)
      return this;
    const a = {};
    return e.forEach((i) => {
      a[i] = n[i] && n[i].active() ? n[i]._to : this[i];
    }), a;
  }
}, K(is, "defaults", {}), K(is, "defaultRoutes"), is);
function cw(t6, e) {
  const r = t6.options.ticks, n = dw(t6), a = Math.min(r.maxTicksLimit || n, n), i = r.major.enabled ? fw(e) : [], s = i.length, o = i[0], l = i[s - 1], c = [];
  if (s > a)
    return hw(e, c, i, s / a), c;
  const d = uw(i, e, a);
  if (s > 0) {
    let u, f;
    const h = s > 1 ? Math.round((l - o) / (s - 1)) : null;
    for (zi(e, c, d, mt(h) ? 0 : o - h, o), u = 0, f = s - 1; u < f; u++)
      zi(e, c, d, i[u], i[u + 1]);
    return zi(e, c, d, l, mt(h) ? e.length : l + h), c;
  }
  return zi(e, c, d), c;
}
function dw(t6) {
  const e = t6.options.offset, r = t6._tickSize(), n = t6._length / r + (e ? 0 : 1), a = t6._maxLength / r;
  return Math.floor(Math.min(n, a));
}
function uw(t6, e, r) {
  const n = gw(t6), a = e.length / r;
  if (!n)
    return Math.max(a, 1);
  const i = Dv(n);
  for (let s = 0, o = i.length - 1; s < o; s++) {
    const l = i[s];
    if (l > a)
      return l;
  }
  return Math.max(a, 1);
}
function fw(t6) {
  const e = [];
  let r, n;
  for (r = 0, n = t6.length; r < n; r++)
    t6[r].major && e.push(r);
  return e;
}
function hw(t6, e, r, n) {
  let a = 0, i = r[0], s;
  for (n = Math.ceil(n), s = 0; s < t6.length; s++)
    s === i && (e.push(t6[s]), a++, i = r[a * n]);
}
function zi(t6, e, r, n, a) {
  const i = De(n, 0), s = Math.min(De(a, t6.length), t6.length);
  let o = 0, l, c, d;
  for (r = Math.ceil(r), a && (l = a - n, r = l / Math.floor(l / r)), d = i; d < 0; )
    o++, d = Math.round(i + o * r);
  for (c = Math.max(i, 0); c < s; c++)
    c === d && (e.push(t6[c]), o++, d = Math.round(i + o * r));
}
function gw(t6) {
  const e = t6.length;
  let r, n;
  if (e < 2)
    return false;
  for (n = t6[0], r = 1; r < e; ++r)
    if (t6[r] - t6[r - 1] !== n)
      return false;
  return n;
}
const mw = (t6) => t6 === "left" ? "right" : t6 === "right" ? "left" : t6, xu = (t6, e, r) => e === "top" || e === "left" ? t6[e] + r : t6[e] - r, wu = (t6, e) => Math.min(e || t6, t6);
function ku(t6, e) {
  const r = [], n = t6.length / e, a = t6.length;
  let i = 0;
  for (; i < a; i += n)
    r.push(t6[Math.floor(i)]);
  return r;
}
function pw(t6, e, r) {
  const n = t6.ticks.length, a = Math.min(e, n - 1), i = t6._startPixel, s = t6._endPixel, o = 1e-6;
  let l = t6.getPixelForTick(a), c;
  if (!(r && (n === 1 ? c = Math.max(l - i, s - l) : e === 0 ? c = (t6.getPixelForTick(1) - l) / 2 : c = (l - t6.getPixelForTick(a - 1)) / 2, l += a < e ? c : -c, l < i - o || l > s + o)))
    return l;
}
function bw(t6, e) {
  Se(t6, (r) => {
    const n = r.gc, a = n.length / 2;
    let i;
    if (a > e) {
      for (i = 0; i < a; ++i)
        delete r.data[n[i]];
      n.splice(0, a);
    }
  });
}
function Oa(t6) {
  return t6.drawTicks ? t6.tickLength : 0;
}
function _u(t6, e) {
  if (!t6.display)
    return 0;
  const r = _t(t6.font, e), n = Kt(t6.padding);
  return (ct(t6.text) ? t6.text.length : 1) * r.lineHeight + n.height;
}
function yw(t6, e) {
  return ha(t6, {
    scale: e,
    type: "scale"
  });
}
function vw(t6, e, r) {
  return ha(t6, {
    tick: r,
    index: e,
    type: "tick"
  });
}
function xw(t6, e, r) {
  let n = ng(t6);
  return (r && e !== "right" || !r && e === "right") && (n = mw(n)), n;
}
function ww(t6, e, r, n) {
  const { top: a, left: i, bottom: s, right: o, chart: l } = t6, { chartArea: c, scales: d } = l;
  let u = 0, f, h, g;
  const m = s - a, p = o - i;
  if (t6.isHorizontal()) {
    if (h = It(n, i, o), pe(r)) {
      const w = Object.keys(r)[0], b = r[w];
      g = d[w].getPixelForValue(b) + m - e;
    } else r === "center" ? g = (c.bottom + c.top) / 2 + m - e : g = xu(t6, r, e);
    f = o - i;
  } else {
    if (pe(r)) {
      const w = Object.keys(r)[0], b = r[w];
      h = d[w].getPixelForValue(b) - p + e;
    } else r === "center" ? h = (c.left + c.right) / 2 - p + e : h = xu(t6, r, e);
    g = It(n, s, a), u = r === "left" ? -tt : tt;
  }
  return {
    titleX: h,
    titleY: g,
    maxWidth: f,
    rotation: u
  };
}
class so extends mi {
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
  parse(e, r) {
    return e;
  }
  getUserBounds() {
    let { _userMin: e, _userMax: r, _suggestedMin: n, _suggestedMax: a } = this;
    return e = er(e, Number.POSITIVE_INFINITY), r = er(r, Number.NEGATIVE_INFINITY), n = er(n, Number.POSITIVE_INFINITY), a = er(a, Number.NEGATIVE_INFINITY), {
      min: er(e, n),
      max: er(r, a),
      minDefined: Er(e),
      maxDefined: Er(r)
    };
  }
  getMinMax(e) {
    let { min: r, max: n, minDefined: a, maxDefined: i } = this.getUserBounds(), s;
    if (a && i)
      return {
        min: r,
        max: n
      };
    const o = this.getMatchingVisibleMetas();
    for (let l = 0, c = o.length; l < c; ++l)
      s = o[l].controller.getMinMax(this, e), a || (r = Math.min(r, s.min)), i || (n = Math.max(n, s.max));
    return r = i && r > n ? n : r, n = a && r > n ? r : n, {
      min: er(r, er(n, r)),
      max: er(n, er(r, n))
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
    Ae(this.options.beforeUpdate, [
      this
    ]);
  }
  update(e, r, n) {
    const { beginAtZero: a, grace: i, ticks: s } = this.options, o = s.sampleSize;
    this.beforeUpdate(), this.maxWidth = e, this.maxHeight = r, this._margins = n = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, n), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + n.left + n.right : this.height + n.top + n.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = rx(this, i, a), this._dataLimitsCached = true), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = o < this.ticks.length;
    this._convertTicksToLabels(l ? ku(this.ticks, o) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), s.display && (s.autoSkip || s.source === "auto") && (this.ticks = cw(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let e = this.options.reverse, r, n;
    this.isHorizontal() ? (r = this.left, n = this.right) : (r = this.top, n = this.bottom, e = !e), this._startPixel = r, this._endPixel = n, this._reversePixels = e, this._length = n - r, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    Ae(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    Ae(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    Ae(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(e) {
    this.chart.notifyPlugins(e, this.getContext()), Ae(this.options[e], [
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
    Ae(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(e) {
    const r = this.options.ticks;
    let n, a, i;
    for (n = 0, a = e.length; n < a; n++)
      i = e[n], i.label = Ae(r.callback, [
        i.value,
        n,
        e
      ], this);
  }
  afterTickToLabelConversion() {
    Ae(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    Ae(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const e = this.options, r = e.ticks, n = wu(this.ticks.length, e.ticks.maxTicksLimit), a = r.minRotation || 0, i = r.maxRotation;
    let s = a, o, l, c;
    if (!this._isVisible() || !r.display || a >= i || n <= 1 || !this.isHorizontal()) {
      this.labelRotation = a;
      return;
    }
    const d = this._getLabelSizes(), u = d.widest.width, f = d.highest.height, h = jt(this.chart.width - u, 0, this.maxWidth);
    o = e.offset ? this.maxWidth / n : h / (n - 1), u + 6 > o && (o = h / (n - (e.offset ? 0.5 : 1)), l = this.maxHeight - Oa(e.grid) - r.padding - _u(e.title, this.chart.options.font), c = Math.sqrt(u * u + f * f), s = Cv(Math.min(Math.asin(jt((d.highest.height + 6) / o, -1, 1)), Math.asin(jt(l / c, -1, 1)) - Math.asin(jt(f / c, -1, 1)))), s = Math.max(a, Math.min(i, s))), this.labelRotation = s;
  }
  afterCalculateLabelRotation() {
    Ae(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    Ae(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const e = {
      width: 0,
      height: 0
    }, { chart: r, options: { ticks: n, title: a, grid: i } } = this, s = this._isVisible(), o = this.isHorizontal();
    if (s) {
      const l = _u(a, r.options.font);
      if (o ? (e.width = this.maxWidth, e.height = Oa(i) + l) : (e.height = this.maxHeight, e.width = Oa(i) + l), n.display && this.ticks.length) {
        const { first: c, last: d, widest: u, highest: f } = this._getLabelSizes(), h = n.padding * 2, g = xn(this.labelRotation), m = Math.cos(g), p = Math.sin(g);
        if (o) {
          const w = n.mirror ? 0 : p * u.width + m * f.height;
          e.height = Math.min(this.maxHeight, e.height + w + h);
        } else {
          const w = n.mirror ? 0 : m * u.width + p * f.height;
          e.width = Math.min(this.maxWidth, e.width + w + h);
        }
        this._calculatePadding(c, d, p, m);
      }
    }
    this._handleMargins(), o ? (this.width = this._length = r.width - this._margins.left - this._margins.right, this.height = e.height) : (this.width = e.width, this.height = this._length = r.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(e, r, n, a) {
    const { ticks: { align: i, padding: s }, position: o } = this.options, l = this.labelRotation !== 0, c = o !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const d = this.getPixelForTick(0) - this.left, u = this.right - this.getPixelForTick(this.ticks.length - 1);
      let f = 0, h = 0;
      l ? c ? (f = a * e.width, h = n * r.height) : (f = n * e.height, h = a * r.width) : i === "start" ? h = r.width : i === "end" ? f = e.width : i !== "inner" && (f = e.width / 2, h = r.width / 2), this.paddingLeft = Math.max((f - d + s) * this.width / (this.width - d), 0), this.paddingRight = Math.max((h - u + s) * this.width / (this.width - u), 0);
    } else {
      let d = r.height / 2, u = e.height / 2;
      i === "start" ? (d = 0, u = e.height) : i === "end" && (d = r.height, u = 0), this.paddingTop = d + s, this.paddingBottom = u + s;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    Ae(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: e, position: r } = this.options;
    return r === "top" || r === "bottom" || e === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(e) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(e);
    let r, n;
    for (r = 0, n = e.length; r < n; r++)
      mt(e[r].label) && (e.splice(r, 1), n--, r--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let e = this._labelSizes;
    if (!e) {
      const r = this.options.ticks.sampleSize;
      let n = this.ticks;
      r < n.length && (n = ku(n, r)), this._labelSizes = e = this._computeLabelSizes(n, n.length, this.options.ticks.maxTicksLimit);
    }
    return e;
  }
  _computeLabelSizes(e, r, n) {
    const { ctx: a, _longestTextCache: i } = this, s = [], o = [], l = Math.floor(r / wu(r, n));
    let c = 0, d = 0, u, f, h, g, m, p, w, b, k, v, x;
    for (u = 0; u < r; u += l) {
      if (g = e[u].label, m = this._resolveTickFontOptions(u), a.font = p = m.string, w = i[p] = i[p] || {
        data: {},
        gc: []
      }, b = m.lineHeight, k = v = 0, !mt(g) && !ct(g))
        k = tu(a, w.data, w.gc, k, g), v = b;
      else if (ct(g))
        for (f = 0, h = g.length; f < h; ++f)
          x = g[f], !mt(x) && !ct(x) && (k = tu(a, w.data, w.gc, k, x), v += b);
      s.push(k), o.push(v), c = Math.max(k, c), d = Math.max(v, d);
    }
    bw(i, r);
    const _ = s.indexOf(c), T = o.indexOf(d), S = (C) => ({
      width: s[C] || 0,
      height: o[C] || 0
    });
    return {
      first: S(0),
      last: S(r - 1),
      widest: S(_),
      highest: S(T),
      widths: s,
      heights: o
    };
  }
  getLabelForValue(e) {
    return e;
  }
  getPixelForValue(e, r) {
    return NaN;
  }
  getValueForPixel(e) {
  }
  getPixelForTick(e) {
    const r = this.ticks;
    return e < 0 || e > r.length - 1 ? null : this.getPixelForValue(r[e].value);
  }
  getPixelForDecimal(e) {
    this._reversePixels && (e = 1 - e);
    const r = this._startPixel + e * this._length;
    return Tv(this._alignToPixels ? on(this.chart, r, 0) : r);
  }
  getDecimalForPixel(e) {
    const r = (e - this._startPixel) / this._length;
    return this._reversePixels ? 1 - r : r;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: e, max: r } = this;
    return e < 0 && r < 0 ? r : e > 0 && r > 0 ? e : 0;
  }
  getContext(e) {
    const r = this.ticks || [];
    if (e >= 0 && e < r.length) {
      const n = r[e];
      return n.$context || (n.$context = vw(this.getContext(), e, n));
    }
    return this.$context || (this.$context = yw(this.chart.getContext(), this));
  }
  _tickSize() {
    const e = this.options.ticks, r = xn(this.labelRotation), n = Math.abs(Math.cos(r)), a = Math.abs(Math.sin(r)), i = this._getLabelSizes(), s = e.autoSkipPadding || 0, o = i ? i.widest.width + s : 0, l = i ? i.highest.height + s : 0;
    return this.isHorizontal() ? l * n > o * a ? o / n : l / a : l * a < o * n ? l / n : o / a;
  }
  _isVisible() {
    const e = this.options.display;
    return e !== "auto" ? !!e : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(e) {
    const r = this.axis, n = this.chart, a = this.options, { grid: i, position: s, border: o } = a, l = i.offset, c = this.isHorizontal(), u = this.ticks.length + (l ? 1 : 0), f = Oa(i), h = [], g = o.setContext(this.getContext()), m = g.display ? g.width : 0, p = m / 2, w = function(W) {
      return on(n, W, m);
    };
    let b, k, v, x, _, T, S, C, D, z, A, L;
    if (s === "top")
      b = w(this.bottom), T = this.bottom - f, C = b - p, z = w(e.top) + p, L = e.bottom;
    else if (s === "bottom")
      b = w(this.top), z = e.top, L = w(e.bottom) - p, T = b + p, C = this.top + f;
    else if (s === "left")
      b = w(this.right), _ = this.right - f, S = b - p, D = w(e.left) + p, A = e.right;
    else if (s === "right")
      b = w(this.left), D = e.left, A = w(e.right) - p, _ = b + p, S = this.left + f;
    else if (r === "x") {
      if (s === "center")
        b = w((e.top + e.bottom) / 2 + 0.5);
      else if (pe(s)) {
        const W = Object.keys(s)[0], B = s[W];
        b = w(this.chart.scales[W].getPixelForValue(B));
      }
      z = e.top, L = e.bottom, T = b + p, C = T + f;
    } else if (r === "y") {
      if (s === "center")
        b = w((e.left + e.right) / 2);
      else if (pe(s)) {
        const W = Object.keys(s)[0], B = s[W];
        b = w(this.chart.scales[W].getPixelForValue(B));
      }
      _ = b - p, S = _ - f, D = e.left, A = e.right;
    }
    const M = De(a.ticks.maxTicksLimit, u), I = Math.max(1, Math.ceil(u / M));
    for (k = 0; k < u; k += I) {
      const W = this.getContext(k), B = i.setContext(W), U = o.setContext(W), J = B.lineWidth, E = B.color, j = U.dash || [], N = U.dashOffset, R = B.tickWidth, P = B.tickColor, O = B.tickBorderDash || [], F = B.tickBorderDashOffset;
      v = pw(this, k, l), v !== void 0 && (x = on(n, v, J), c ? _ = S = D = A = x : T = C = z = L = x, h.push({
        tx1: _,
        ty1: T,
        tx2: S,
        ty2: C,
        x1: D,
        y1: z,
        x2: A,
        y2: L,
        width: J,
        color: E,
        borderDash: j,
        borderDashOffset: N,
        tickWidth: R,
        tickColor: P,
        tickBorderDash: O,
        tickBorderDashOffset: F
      }));
    }
    return this._ticksLength = u, this._borderValue = b, h;
  }
  _computeLabelItems(e) {
    const r = this.axis, n = this.options, { position: a, ticks: i } = n, s = this.isHorizontal(), o = this.ticks, { align: l, crossAlign: c, padding: d, mirror: u } = i, f = Oa(n.grid), h = f + d, g = u ? -d : h, m = -xn(this.labelRotation), p = [];
    let w, b, k, v, x, _, T, S, C, D, z, A, L = "middle";
    if (a === "top")
      _ = this.bottom - g, T = this._getXAxisLabelAlignment();
    else if (a === "bottom")
      _ = this.top + g, T = this._getXAxisLabelAlignment();
    else if (a === "left") {
      const I = this._getYAxisLabelAlignment(f);
      T = I.textAlign, x = I.x;
    } else if (a === "right") {
      const I = this._getYAxisLabelAlignment(f);
      T = I.textAlign, x = I.x;
    } else if (r === "x") {
      if (a === "center")
        _ = (e.top + e.bottom) / 2 + h;
      else if (pe(a)) {
        const I = Object.keys(a)[0], W = a[I];
        _ = this.chart.scales[I].getPixelForValue(W) + h;
      }
      T = this._getXAxisLabelAlignment();
    } else if (r === "y") {
      if (a === "center")
        x = (e.left + e.right) / 2 - h;
      else if (pe(a)) {
        const I = Object.keys(a)[0], W = a[I];
        x = this.chart.scales[I].getPixelForValue(W);
      }
      T = this._getYAxisLabelAlignment(f).textAlign;
    }
    r === "y" && (l === "start" ? L = "top" : l === "end" && (L = "bottom"));
    const M = this._getLabelSizes();
    for (w = 0, b = o.length; w < b; ++w) {
      k = o[w], v = k.label;
      const I = i.setContext(this.getContext(w));
      S = this.getPixelForTick(w) + i.labelOffset, C = this._resolveTickFontOptions(w), D = C.lineHeight, z = ct(v) ? v.length : 1;
      const W = z / 2, B = I.color, U = I.textStrokeColor, J = I.textStrokeWidth;
      let E = T;
      s ? (x = S, T === "inner" && (w === b - 1 ? E = this.options.reverse ? "left" : "right" : w === 0 ? E = this.options.reverse ? "right" : "left" : E = "center"), a === "top" ? c === "near" || m !== 0 ? A = -z * D + D / 2 : c === "center" ? A = -M.highest.height / 2 - W * D + D : A = -M.highest.height + D / 2 : c === "near" || m !== 0 ? A = D / 2 : c === "center" ? A = M.highest.height / 2 - W * D : A = M.highest.height - z * D, u && (A *= -1), m !== 0 && !I.showLabelBackdrop && (x += D / 2 * Math.sin(m))) : (_ = S, A = (1 - z) * D / 2);
      let j;
      if (I.showLabelBackdrop) {
        const N = Kt(I.backdropPadding), R = M.heights[w], P = M.widths[w];
        let O = A - N.top, F = 0 - N.left;
        switch (L) {
          case "middle":
            O -= R / 2;
            break;
          case "bottom":
            O -= R;
            break;
        }
        switch (T) {
          case "center":
            F -= P / 2;
            break;
          case "right":
            F -= P;
            break;
          case "inner":
            w === b - 1 ? F -= P : w > 0 && (F -= P / 2);
            break;
        }
        j = {
          left: F,
          top: O,
          width: P + N.width,
          height: R + N.height,
          color: I.backdropColor
        };
      }
      p.push({
        label: v,
        font: C,
        textOffset: A,
        options: {
          rotation: m,
          color: B,
          strokeColor: U,
          strokeWidth: J,
          textAlign: E,
          textBaseline: L,
          translation: [
            x,
            _
          ],
          backdrop: j
        }
      });
    }
    return p;
  }
  _getXAxisLabelAlignment() {
    const { position: e, ticks: r } = this.options;
    if (-xn(this.labelRotation))
      return e === "top" ? "left" : "right";
    let a = "center";
    return r.align === "start" ? a = "left" : r.align === "end" ? a = "right" : r.align === "inner" && (a = "inner"), a;
  }
  _getYAxisLabelAlignment(e) {
    const { position: r, ticks: { crossAlign: n, mirror: a, padding: i } } = this.options, s = this._getLabelSizes(), o = e + i, l = s.widest.width;
    let c, d;
    return r === "left" ? a ? (d = this.right + i, n === "near" ? c = "left" : n === "center" ? (c = "center", d += l / 2) : (c = "right", d += l)) : (d = this.right - o, n === "near" ? c = "right" : n === "center" ? (c = "center", d -= l / 2) : (c = "left", d = this.left)) : r === "right" ? a ? (d = this.left + i, n === "near" ? c = "right" : n === "center" ? (c = "center", d -= l / 2) : (c = "left", d -= l)) : (d = this.left + o, n === "near" ? c = "left" : n === "center" ? (c = "center", d += l / 2) : (c = "right", d = this.right)) : c = "right", {
      textAlign: c,
      x: d
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const e = this.chart, r = this.options.position;
    if (r === "left" || r === "right")
      return {
        top: 0,
        left: this.left,
        bottom: e.height,
        right: this.right
      };
    if (r === "top" || r === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: e.width
      };
  }
  drawBackground() {
    const { ctx: e, options: { backgroundColor: r }, left: n, top: a, width: i, height: s } = this;
    r && (e.save(), e.fillStyle = r, e.fillRect(n, a, i, s), e.restore());
  }
  getLineWidthForValue(e) {
    const r = this.options.grid;
    if (!this._isVisible() || !r.display)
      return 0;
    const a = this.ticks.findIndex((i) => i.value === e);
    return a >= 0 ? r.setContext(this.getContext(a)).lineWidth : 0;
  }
  drawGrid(e) {
    const r = this.options.grid, n = this.ctx, a = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(e));
    let i, s;
    const o = (l, c, d) => {
      !d.width || !d.color || (n.save(), n.lineWidth = d.width, n.strokeStyle = d.color, n.setLineDash(d.borderDash || []), n.lineDashOffset = d.borderDashOffset, n.beginPath(), n.moveTo(l.x, l.y), n.lineTo(c.x, c.y), n.stroke(), n.restore());
    };
    if (r.display)
      for (i = 0, s = a.length; i < s; ++i) {
        const l = a[i];
        r.drawOnChartArea && o({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), r.drawTicks && o({
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
    const { chart: e, ctx: r, options: { border: n, grid: a } } = this, i = n.setContext(this.getContext()), s = n.display ? i.width : 0;
    if (!s)
      return;
    const o = a.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, d, u, f;
    this.isHorizontal() ? (c = on(e, this.left, s) - s / 2, d = on(e, this.right, o) + o / 2, u = f = l) : (u = on(e, this.top, s) - s / 2, f = on(e, this.bottom, o) + o / 2, c = d = l), r.save(), r.lineWidth = i.width, r.strokeStyle = i.color, r.beginPath(), r.moveTo(c, u), r.lineTo(d, f), r.stroke(), r.restore();
  }
  drawLabels(e) {
    if (!this.options.ticks.display)
      return;
    const n = this.ctx, a = this._computeLabelArea();
    a && dc(n, a);
    const i = this.getLabelItems(e);
    for (const s of i) {
      const o = s.options, l = s.font, c = s.label, d = s.textOffset;
      Ss(n, c, 0, d, l, o);
    }
    a && uc(n);
  }
  drawTitle() {
    const { ctx: e, options: { position: r, title: n, reverse: a } } = this;
    if (!n.display)
      return;
    const i = _t(n.font), s = Kt(n.padding), o = n.align;
    let l = i.lineHeight / 2;
    r === "bottom" || r === "center" || pe(r) ? (l += s.bottom, ct(n.text) && (l += i.lineHeight * (n.text.length - 1))) : l += s.top;
    const { titleX: c, titleY: d, maxWidth: u, rotation: f } = ww(this, l, r, o);
    Ss(e, n.text, 0, 0, i, {
      color: n.color,
      maxWidth: u,
      rotation: f,
      textAlign: xw(o, r, a),
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
    const e = this.options, r = e.ticks && e.ticks.z || 0, n = De(e.grid && e.grid.z, -1), a = De(e.border && e.border.z, 0);
    return !this._isVisible() || this.draw !== so.prototype.draw ? [
      {
        z: r,
        draw: (i) => {
          this.draw(i);
        }
      }
    ] : [
      {
        z: n,
        draw: (i) => {
          this.drawBackground(), this.drawGrid(i), this.drawTitle();
        }
      },
      {
        z: a,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: r,
        draw: (i) => {
          this.drawLabels(i);
        }
      }
    ];
  }
  getMatchingVisibleMetas(e) {
    const r = this.chart.getSortedVisibleDatasetMetas(), n = this.axis + "AxisID", a = [];
    let i, s;
    for (i = 0, s = r.length; i < s; ++i) {
      const o = r[i];
      o[n] === this.id && (!e || o.type === e) && a.push(o);
    }
    return a;
  }
  _resolveTickFontOptions(e) {
    const r = this.options.ticks.setContext(this.getContext(e));
    return _t(r.font);
  }
  _maxDigits() {
    const e = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / e;
  }
}
class ji {
  constructor(e, r, n) {
    this.type = e, this.scope = r, this.override = n, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(e) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, e.prototype);
  }
  register(e) {
    const r = Object.getPrototypeOf(e);
    let n;
    Ow(r) && (n = this.register(r));
    const a = this.items, i = e.id, s = this.scope + "." + i;
    if (!i)
      throw new Error("class does not have id: " + e);
    return i in a || (a[i] = e, kw(e, s, n), this.override && Ve.override(e.id, e.overrides)), s;
  }
  get(e) {
    return this.items[e];
  }
  unregister(e) {
    const r = this.items, n = e.id, a = this.scope;
    n in r && delete r[n], a && n in Ve[a] && (delete Ve[a][n], this.override && delete En[n]);
  }
}
function kw(t6, e, r) {
  const n = ti(/* @__PURE__ */ Object.create(null), [
    r ? Ve.get(r) : {},
    Ve.get(e),
    t6.defaults
  ]);
  Ve.set(e, n), t6.defaultRoutes && _w(e, t6.defaultRoutes), t6.descriptors && Ve.describe(e, t6.descriptors);
}
function _w(t6, e) {
  Object.keys(e).forEach((r) => {
    const n = r.split("."), a = n.pop(), i = [
      t6
    ].concat(n).join("."), s = e[r].split("."), o = s.pop(), l = s.join(".");
    Ve.route(i, a, l, o);
  });
}
function Ow(t6) {
  return "id" in t6 && "defaults" in t6;
}
class Sw {
  constructor() {
    this.controllers = new ji(Ua, "datasets", true), this.elements = new ji(mi, "elements"), this.plugins = new ji(Object, "plugins"), this.scales = new ji(so, "scales"), this._typedRegistries = [
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
  _each(e, r, n) {
    [
      ...r
    ].forEach((a) => {
      const i = n || this._getRegistryForType(a);
      n || i.isForType(a) || i === this.plugins && a.id ? this._exec(e, i, a) : Se(a, (s) => {
        const o = n || this._getRegistryForType(s);
        this._exec(e, o, s);
      });
    });
  }
  _exec(e, r, n) {
    const a = lc(e);
    Ae(n["before" + a], [], n), r[e](n), Ae(n["after" + a], [], n);
  }
  _getRegistryForType(e) {
    for (let r = 0; r < this._typedRegistries.length; r++) {
      const n = this._typedRegistries[r];
      if (n.isForType(e))
        return n;
    }
    return this.plugins;
  }
  _get(e, r, n) {
    const a = r.get(e);
    if (a === void 0)
      throw new Error('"' + e + '" is not a registered ' + n + ".");
    return a;
  }
}
var ar = /* @__PURE__ */ new Sw();
class Dw {
  constructor() {
    this._init = [];
  }
  notify(e, r, n, a) {
    r === "beforeInit" && (this._init = this._createDescriptors(e, true), this._notify(this._init, e, "install"));
    const i = a ? this._descriptors(e).filter(a) : this._descriptors(e), s = this._notify(i, e, r, n);
    return r === "afterDestroy" && (this._notify(i, e, "stop"), this._notify(this._init, e, "uninstall")), s;
  }
  _notify(e, r, n, a) {
    a = a || {};
    for (const i of e) {
      const s = i.plugin, o = s[n], l = [
        r,
        a,
        i.options
      ];
      if (Ae(o, l, s) === false && a.cancelable)
        return false;
    }
    return true;
  }
  invalidate() {
    mt(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(e) {
    if (this._cache)
      return this._cache;
    const r = this._cache = this._createDescriptors(e);
    return this._notifyStateChanges(e), r;
  }
  _createDescriptors(e, r) {
    const n = e && e.config, a = De(n.options && n.options.plugins, {}), i = Mw(n);
    return a === false && !r ? [] : Ew(e, i, a, r);
  }
  _notifyStateChanges(e) {
    const r = this._oldCache || [], n = this._cache, a = (i, s) => i.filter((o) => !s.some((l) => o.plugin.id === l.plugin.id));
    this._notify(a(r, n), e, "stop"), this._notify(a(n, r), e, "start");
  }
}
function Mw(t6) {
  const e = {}, r = [], n = Object.keys(ar.plugins.items);
  for (let i = 0; i < n.length; i++)
    r.push(ar.getPlugin(n[i]));
  const a = t6.plugins || [];
  for (let i = 0; i < a.length; i++) {
    const s = a[i];
    r.indexOf(s) === -1 && (r.push(s), e[s.id] = true);
  }
  return {
    plugins: r,
    localIds: e
  };
}
function Cw(t6, e) {
  return !e && t6 === false ? null : t6 === true ? {} : t6;
}
function Ew(t6, { plugins: e, localIds: r }, n, a) {
  const i = [], s = t6.getContext();
  for (const o of e) {
    const l = o.id, c = Cw(n[l], a);
    c !== null && i.push({
      plugin: o,
      options: Tw(t6.config, {
        plugin: o,
        local: r[l]
      }, c, s)
    });
  }
  return i;
}
function Tw(t6, { plugin: e, local: r }, n, a) {
  const i = t6.pluginScopeKeys(e), s = t6.getOptionScopes(n, i);
  return r && e.defaults && s.push(e.defaults), t6.createResolver(s, a, [
    ""
  ], {
    scriptable: false,
    indexable: false,
    allKeys: true
  });
}
function Tl(t6, e) {
  const r = Ve.datasets[t6] || {};
  return ((e.datasets || {})[t6] || {}).indexAxis || e.indexAxis || r.indexAxis || "x";
}
function Pw(t6, e) {
  let r = t6;
  return t6 === "_index_" ? r = e : t6 === "_value_" && (r = e === "x" ? "y" : "x"), r;
}
function Rw(t6, e) {
  return t6 === e ? "_index_" : "_value_";
}
function Ou(t6) {
  if (t6 === "x" || t6 === "y" || t6 === "r")
    return t6;
}
function Nw(t6) {
  if (t6 === "top" || t6 === "bottom")
    return "x";
  if (t6 === "left" || t6 === "right")
    return "y";
}
function Pl(t6, ...e) {
  if (Ou(t6))
    return t6;
  for (const r of e) {
    const n = r.axis || Nw(r.position) || t6.length > 1 && Ou(t6[0].toLowerCase());
    if (n)
      return n;
  }
  throw new Error(`Cannot determine type of '${t6}' axis. Please provide 'axis' or 'position' option.`);
}
function Su(t6, e, r) {
  if (r[e + "AxisID"] === t6)
    return {
      axis: e
    };
}
function Iw(t6, e) {
  if (e.data && e.data.datasets) {
    const r = e.data.datasets.filter((n) => n.xAxisID === t6 || n.yAxisID === t6);
    if (r.length)
      return Su(t6, "x", r[0]) || Su(t6, "y", r[0]);
  }
  return {};
}
function Aw(t6, e) {
  const r = En[t6.type] || {
    scales: {}
  }, n = e.scales || {}, a = Tl(t6.type, e), i = /* @__PURE__ */ Object.create(null);
  return Object.keys(n).forEach((s) => {
    const o = n[s];
    if (!pe(o))
      return console.error(`Invalid scale configuration for scale: ${s}`);
    if (o._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${s}`);
    const l = Pl(s, o, Iw(s, t6), Ve.scales[o.type]), c = Rw(l, a), d = r.scales || {};
    i[s] = Ba(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      o,
      d[l],
      d[c]
    ]);
  }), t6.data.datasets.forEach((s) => {
    const o = s.type || t6.type, l = s.indexAxis || Tl(o, e), d = (En[o] || {}).scales || {};
    Object.keys(d).forEach((u) => {
      const f = Pw(u, l), h = s[f + "AxisID"] || f;
      i[h] = i[h] || /* @__PURE__ */ Object.create(null), Ba(i[h], [
        {
          axis: f
        },
        n[h],
        d[u]
      ]);
    });
  }), Object.keys(i).forEach((s) => {
    const o = i[s];
    Ba(o, [
      Ve.scales[o.type],
      Ve.scale
    ]);
  }), i;
}
function xg(t6) {
  const e = t6.options || (t6.options = {});
  e.plugins = De(e.plugins, {}), e.scales = Aw(t6, e);
}
function wg(t6) {
  return t6 = t6 || {}, t6.datasets = t6.datasets || [], t6.labels = t6.labels || [], t6;
}
function Fw(t6) {
  return t6 = t6 || {}, t6.data = wg(t6.data), xg(t6), t6;
}
const Du = /* @__PURE__ */ new Map(), kg = /* @__PURE__ */ new Set();
function Hi(t6, e) {
  let r = Du.get(t6);
  return r || (r = e(), Du.set(t6, r), kg.add(r)), r;
}
const Sa = (t6, e, r) => {
  const n = ri(e, r);
  n !== void 0 && t6.add(n);
};
class Lw {
  constructor(e) {
    this._config = Fw(e), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = wg(e);
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
    this.clearCache(), xg(e);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(e) {
    return Hi(e, () => [
      [
        `datasets.${e}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(e, r) {
    return Hi(`${e}.transition.${r}`, () => [
      [
        `datasets.${e}.transitions.${r}`,
        `transitions.${r}`
      ],
      [
        `datasets.${e}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(e, r) {
    return Hi(`${e}-${r}`, () => [
      [
        `datasets.${e}.elements.${r}`,
        `datasets.${e}`,
        `elements.${r}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(e) {
    const r = e.id, n = this.type;
    return Hi(`${n}-plugin-${r}`, () => [
      [
        `plugins.${r}`,
        ...e.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(e, r) {
    const n = this._scopeCache;
    let a = n.get(e);
    return (!a || r) && (a = /* @__PURE__ */ new Map(), n.set(e, a)), a;
  }
  getOptionScopes(e, r, n) {
    const { options: a, type: i } = this, s = this._cachedScopes(e, n), o = s.get(r);
    if (o)
      return o;
    const l = /* @__PURE__ */ new Set();
    r.forEach((d) => {
      e && (l.add(e), d.forEach((u) => Sa(l, e, u))), d.forEach((u) => Sa(l, a, u)), d.forEach((u) => Sa(l, En[i] || {}, u)), d.forEach((u) => Sa(l, Ve, u)), d.forEach((u) => Sa(l, Cl, u));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), kg.has(r) && s.set(r, c), c;
  }
  chartOptionScopes() {
    const { options: e, type: r } = this;
    return [
      e,
      En[r] || {},
      Ve.datasets[r] || {},
      {
        type: r
      },
      Ve,
      Cl
    ];
  }
  resolveNamedOptions(e, r, n, a = [
    ""
  ]) {
    const i = {
      $shared: true
    }, { resolver: s, subPrefixes: o } = Mu(this._resolverCache, e, a);
    let l = s;
    if ($w(s, r)) {
      i.$shared = false, n = Xr(n) ? n() : n;
      const c = this.createResolver(e, n, o);
      l = ra(s, n, c);
    }
    for (const c of r)
      i[c] = l[c];
    return i;
  }
  createResolver(e, r, n = [
    ""
  ], a) {
    const { resolver: i } = Mu(this._resolverCache, e, n);
    return pe(r) ? ra(i, r, void 0, a) : i;
  }
}
function Mu(t6, e, r) {
  let n = t6.get(e);
  n || (n = /* @__PURE__ */ new Map(), t6.set(e, n));
  const a = r.join();
  let i = n.get(a);
  return i || (i = {
    resolver: hc(e, r),
    subPrefixes: r.filter((o) => !o.toLowerCase().includes("hover"))
  }, n.set(a, i)), i;
}
const Ww = (t6) => pe(t6) && Object.getOwnPropertyNames(t6).some((e) => Xr(t6[e]));
function $w(t6, e) {
  const { isScriptable: r, isIndexable: n } = og(t6);
  for (const a of e) {
    const i = r(a), s = n(a), o = (s || i) && t6[a];
    if (i && (Xr(o) || Ww(o)) || s && ct(o))
      return true;
  }
  return false;
}
var zw = "4.4.8";
const jw = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Cu(t6, e) {
  return t6 === "top" || t6 === "bottom" || jw.indexOf(t6) === -1 && e === "x";
}
function Eu(t6, e) {
  return function(r, n) {
    return r[t6] === n[t6] ? r[e] - n[e] : r[t6] - n[t6];
  };
}
function Tu(t6) {
  const e = t6.chart, r = e.options.animation;
  e.notifyPlugins("afterRender"), Ae(r && r.onComplete, [
    t6
  ], e);
}
function Hw(t6) {
  const e = t6.chart, r = e.options.animation;
  Ae(r && r.onProgress, [
    t6
  ], e);
}
function _g(t6) {
  return pc() && typeof t6 == "string" ? t6 = document.getElementById(t6) : t6 && t6.length && (t6 = t6[0]), t6 && t6.canvas && (t6 = t6.canvas), t6;
}
const os = {}, Pu = (t6) => {
  const e = _g(t6);
  return Object.values(os).filter((r) => r.canvas === e).pop();
};
function Bw(t6, e, r) {
  const n = Object.keys(t6);
  for (const a of n) {
    const i = +a;
    if (i >= e) {
      const s = t6[a];
      delete t6[a], (r > 0 || i > e) && (t6[i + r] = s);
    }
  }
}
function Yw(t6, e, r, n) {
  return !r || t6.type === "mouseout" ? null : n ? e : t6;
}
function Bi(t6, e, r) {
  return t6.options.clip ? t6[r] : e[r];
}
function Vw(t6, e) {
  const { xScale: r, yScale: n } = t6;
  return r && n ? {
    left: Bi(r, e, "left"),
    right: Bi(r, e, "right"),
    top: Bi(n, e, "top"),
    bottom: Bi(n, e, "bottom")
  } : e;
}
var Hr;
let oo = (Hr = class {
  static register(...e) {
    ar.add(...e), Ru();
  }
  static unregister(...e) {
    ar.remove(...e), Ru();
  }
  constructor(e, r) {
    const n = this.config = new Lw(r), a = _g(e), i = Pu(a);
    if (i)
      throw new Error("Canvas is already in use. Chart with ID '" + i.id + "' must be destroyed before the canvas with ID '" + i.canvas.id + "' can be reused.");
    const s = n.createResolver(n.chartOptionScopes(), this.getContext());
    this.platform = new (n.platform || lw(a))(), this.platform.updateConfig(n);
    const o = this.platform.acquireContext(a, s.aspectRatio), l = o && o.canvas, c = l && l.height, d = l && l.width;
    if (this.id = yv(), this.ctx = o, this.canvas = l, this.width = d, this.height = c, this._options = s, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Dw(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = false, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Av((u) => this.update(u), s.resizeDelay || 0), this._dataChanges = [], os[this.id] = this, !o || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Or.listen(this, "complete", Tu), Or.listen(this, "progress", Hw), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: e, maintainAspectRatio: r }, width: n, height: a, _aspectRatio: i } = this;
    return mt(e) ? r && i ? i : a ? n / a : null : e;
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
    return ar;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : su(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return ru(this.canvas, this.ctx), this;
  }
  stop() {
    return Or.stop(this), this;
  }
  resize(e, r) {
    Or.running(this) ? this._resizeBeforeDraw = {
      width: e,
      height: r
    } : this._resize(e, r);
  }
  _resize(e, r) {
    const n = this.options, a = this.canvas, i = n.maintainAspectRatio && this.aspectRatio, s = this.platform.getMaximumSize(a, e, r, i), o = n.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = s.width, this.height = s.height, this._aspectRatio = this.aspectRatio, su(this, o, true) && (this.notifyPlugins("resize", {
      size: s
    }), Ae(n.onResize, [
      this,
      s
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const r = this.options.scales || {};
    Se(r, (n, a) => {
      n.id = a;
    });
  }
  buildOrUpdateScales() {
    const e = this.options, r = e.scales, n = this.scales, a = Object.keys(n).reduce((s, o) => (s[o] = false, s), {});
    let i = [];
    r && (i = i.concat(Object.keys(r).map((s) => {
      const o = r[s], l = Pl(s, o), c = l === "r", d = l === "x";
      return {
        options: o,
        dposition: c ? "chartArea" : d ? "bottom" : "left",
        dtype: c ? "radialLinear" : d ? "category" : "linear"
      };
    }))), Se(i, (s) => {
      const o = s.options, l = o.id, c = Pl(l, o), d = De(o.type, s.dtype);
      (o.position === void 0 || Cu(o.position, c) !== Cu(s.dposition)) && (o.position = s.dposition), a[l] = true;
      let u = null;
      if (l in n && n[l].type === d)
        u = n[l];
      else {
        const f = ar.getScale(d);
        u = new f({
          id: l,
          type: d,
          ctx: this.ctx,
          chart: this
        }), n[u.id] = u;
      }
      u.init(o, e);
    }), Se(a, (s, o) => {
      s || delete n[o];
    }), Se(n, (s) => {
      Vr.configure(this, s, s.options), Vr.addBox(this, s);
    });
  }
  _updateMetasets() {
    const e = this._metasets, r = this.data.datasets.length, n = e.length;
    if (e.sort((a, i) => a.index - i.index), n > r) {
      for (let a = r; a < n; ++a)
        this._destroyDatasetMeta(a);
      e.splice(r, n - r);
    }
    this._sortedMetasets = e.slice(0).sort(Eu("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: e, data: { datasets: r } } = this;
    e.length > r.length && delete this._stacks, e.forEach((n, a) => {
      r.filter((i) => i === n._dataset).length === 0 && this._destroyDatasetMeta(a);
    });
  }
  buildOrUpdateControllers() {
    const e = [], r = this.data.datasets;
    let n, a;
    for (this._removeUnreferencedMetasets(), n = 0, a = r.length; n < a; n++) {
      const i = r[n];
      let s = this.getDatasetMeta(n);
      const o = i.type || this.config.type;
      if (s.type && s.type !== o && (this._destroyDatasetMeta(n), s = this.getDatasetMeta(n)), s.type = o, s.indexAxis = i.indexAxis || Tl(o, this.options), s.order = i.order || 0, s.index = n, s.label = "" + i.label, s.visible = this.isDatasetVisible(n), s.controller)
        s.controller.updateIndex(n), s.controller.linkScales();
      else {
        const l = ar.getController(o), { datasetElementType: c, dataElementType: d } = Ve.datasets[o];
        Object.assign(l, {
          dataElementType: ar.getElement(d),
          datasetElementType: c && ar.getElement(c)
        }), s.controller = new l(this, n), e.push(s.controller);
      }
    }
    return this._updateMetasets(), e;
  }
  _resetElements() {
    Se(this.data.datasets, (e, r) => {
      this.getDatasetMeta(r).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(e) {
    const r = this.config;
    r.update();
    const n = this._options = r.createResolver(r.chartOptionScopes(), this.getContext()), a = this._animationsDisabled = !n.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: e,
      cancelable: true
    }) === false)
      return;
    const i = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let s = 0;
    for (let c = 0, d = this.data.datasets.length; c < d; c++) {
      const { controller: u } = this.getDatasetMeta(c), f = !a && i.indexOf(u) === -1;
      u.buildOrUpdateElements(f), s = Math.max(+u.getMaxOverflow(), s);
    }
    s = this._minPadding = n.layout.autoPadding ? s : 0, this._updateLayout(s), a || Se(i, (c) => {
      c.reset();
    }), this._updateDatasets(e), this.notifyPlugins("afterUpdate", {
      mode: e
    }), this._layers.sort(Eu("z", "_idx"));
    const { _active: o, _lastEvent: l } = this;
    l ? this._eventHandler(l, true) : o.length && this._updateHoverStyles(o, o, true), this.render();
  }
  _updateScales() {
    Se(this.scales, (e) => {
      Vr.removeBox(this, e);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const e = this.options, r = new Set(Object.keys(this._listeners)), n = new Set(e.events);
    (!Ud(r, n) || !!this._responsiveListeners !== e.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: e } = this, r = this._getUniformDataChanges() || [];
    for (const { method: n, start: a, count: i } of r) {
      const s = n === "_removeElements" ? -i : i;
      Bw(e, a, s);
    }
  }
  _getUniformDataChanges() {
    const e = this._dataChanges;
    if (!e || !e.length)
      return;
    this._dataChanges = [];
    const r = this.data.datasets.length, n = (i) => new Set(e.filter((s) => s[0] === i).map((s, o) => o + "," + s.splice(1).join(","))), a = n(0);
    for (let i = 1; i < r; i++)
      if (!Ud(a, n(i)))
        return;
    return Array.from(a).map((i) => i.split(",")).map((i) => ({
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
    Vr.update(this, this.width, this.height, e);
    const r = this.chartArea, n = r.width <= 0 || r.height <= 0;
    this._layers = [], Se(this.boxes, (a) => {
      n && a.position === "chartArea" || (a.configure && a.configure(), this._layers.push(...a._layers()));
    }, this), this._layers.forEach((a, i) => {
      a._idx = i;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(e) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: e,
      cancelable: true
    }) !== false) {
      for (let r = 0, n = this.data.datasets.length; r < n; ++r)
        this.getDatasetMeta(r).controller.configure();
      for (let r = 0, n = this.data.datasets.length; r < n; ++r)
        this._updateDataset(r, Xr(e) ? e({
          datasetIndex: r
        }) : e);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: e
      });
    }
  }
  _updateDataset(e, r) {
    const n = this.getDatasetMeta(e), a = {
      meta: n,
      index: e,
      mode: r,
      cancelable: true
    };
    this.notifyPlugins("beforeDatasetUpdate", a) !== false && (n.controller._update(r), a.cancelable = false, this.notifyPlugins("afterDatasetUpdate", a));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: true
    }) !== false && (Or.has(this) ? this.attached && !Or.running(this) && Or.start(this) : (this.draw(), Tu({
      chart: this
    })));
  }
  draw() {
    let e;
    if (this._resizeBeforeDraw) {
      const { width: n, height: a } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(n, a);
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: true
    }) === false)
      return;
    const r = this._layers;
    for (e = 0; e < r.length && r[e].z <= 0; ++e)
      r[e].draw(this.chartArea);
    for (this._drawDatasets(); e < r.length; ++e)
      r[e].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(e) {
    const r = this._sortedMetasets, n = [];
    let a, i;
    for (a = 0, i = r.length; a < i; ++a) {
      const s = r[a];
      (!e || s.visible) && n.push(s);
    }
    return n;
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
    for (let r = e.length - 1; r >= 0; --r)
      this._drawDataset(e[r]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(e) {
    const r = this.ctx, n = e._clip, a = !n.disabled, i = Vw(e, this.chartArea), s = {
      meta: e,
      index: e.index,
      cancelable: true
    };
    this.notifyPlugins("beforeDatasetDraw", s) !== false && (a && dc(r, {
      left: n.left === false ? 0 : i.left - n.left,
      right: n.right === false ? this.width : i.right + n.right,
      top: n.top === false ? 0 : i.top - n.top,
      bottom: n.bottom === false ? this.height : i.bottom + n.bottom
    }), e.controller.draw(), a && uc(r), s.cancelable = false, this.notifyPlugins("afterDatasetDraw", s));
  }
  isPointInArea(e) {
    return sg(e, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(e, r, n, a) {
    const i = jx.modes[r];
    return typeof i == "function" ? i(this, e, n, a) : [];
  }
  getDatasetMeta(e) {
    const r = this.data.datasets[e], n = this._metasets;
    let a = n.filter((i) => i && i._dataset === r).pop();
    return a || (a = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: r && r.order || 0,
      index: e,
      _dataset: r,
      _parsed: [],
      _sorted: false
    }, n.push(a)), a;
  }
  getContext() {
    return this.$context || (this.$context = ha(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(e) {
    const r = this.data.datasets[e];
    if (!r)
      return false;
    const n = this.getDatasetMeta(e);
    return typeof n.hidden == "boolean" ? !n.hidden : !r.hidden;
  }
  setDatasetVisibility(e, r) {
    const n = this.getDatasetMeta(e);
    n.hidden = !r;
  }
  toggleDataVisibility(e) {
    this._hiddenIndices[e] = !this._hiddenIndices[e];
  }
  getDataVisibility(e) {
    return !this._hiddenIndices[e];
  }
  _updateVisibility(e, r, n) {
    const a = n ? "show" : "hide", i = this.getDatasetMeta(e), s = i.controller._resolveAnimations(void 0, a);
    ws(r) ? (i.data[r].hidden = !n, this.update()) : (this.setDatasetVisibility(e, n), s.update(i, {
      visible: n
    }), this.update((o) => o.datasetIndex === e ? a : void 0));
  }
  hide(e, r) {
    this._updateVisibility(e, r, false);
  }
  show(e, r) {
    this._updateVisibility(e, r, true);
  }
  _destroyDatasetMeta(e) {
    const r = this._metasets[e];
    r && r.controller && r.controller._destroy(), delete this._metasets[e];
  }
  _stop() {
    let e, r;
    for (this.stop(), Or.remove(this), e = 0, r = this.data.datasets.length; e < r; ++e)
      this._destroyDatasetMeta(e);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: e, ctx: r } = this;
    this._stop(), this.config.clearCache(), e && (this.unbindEvents(), ru(e, r), this.platform.releaseContext(r), this.canvas = null, this.ctx = null), delete os[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...e) {
    return this.canvas.toDataURL(...e);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = true;
  }
  bindUserEvents() {
    const e = this._listeners, r = this.platform, n = (i, s) => {
      r.addEventListener(this, i, s), e[i] = s;
    }, a = (i, s, o) => {
      i.offsetX = s, i.offsetY = o, this._eventHandler(i);
    };
    Se(this.options.events, (i) => n(i, a));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const e = this._responsiveListeners, r = this.platform, n = (l, c) => {
      r.addEventListener(this, l, c), e[l] = c;
    }, a = (l, c) => {
      e[l] && (r.removeEventListener(this, l, c), delete e[l]);
    }, i = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let s;
    const o = () => {
      a("attach", o), this.attached = true, this.resize(), n("resize", i), n("detach", s);
    };
    s = () => {
      this.attached = false, a("resize", i), this._stop(), this._resize(0, 0), n("attach", o);
    }, r.isAttached(this.canvas) ? o() : s();
  }
  unbindEvents() {
    Se(this._listeners, (e, r) => {
      this.platform.removeEventListener(this, r, e);
    }), this._listeners = {}, Se(this._responsiveListeners, (e, r) => {
      this.platform.removeEventListener(this, r, e);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(e, r, n) {
    const a = n ? "set" : "remove";
    let i, s, o, l;
    for (r === "dataset" && (i = this.getDatasetMeta(e[0].datasetIndex), i.controller["_" + a + "DatasetHoverStyle"]()), o = 0, l = e.length; o < l; ++o) {
      s = e[o];
      const c = s && this.getDatasetMeta(s.datasetIndex).controller;
      c && c[a + "HoverStyle"](s.element, s.datasetIndex, s.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e) {
    const r = this._active || [], n = e.map(({ datasetIndex: i, index: s }) => {
      const o = this.getDatasetMeta(i);
      if (!o)
        throw new Error("No dataset found at index " + i);
      return {
        datasetIndex: i,
        element: o.data[s],
        index: s
      };
    });
    !vs(n, r) && (this._active = n, this._lastEvent = null, this._updateHoverStyles(n, r));
  }
  notifyPlugins(e, r, n) {
    return this._plugins.notify(this, e, r, n);
  }
  isPluginEnabled(e) {
    return this._plugins._cache.filter((r) => r.plugin.id === e).length === 1;
  }
  _updateHoverStyles(e, r, n) {
    const a = this.options.hover, i = (l, c) => l.filter((d) => !c.some((u) => d.datasetIndex === u.datasetIndex && d.index === u.index)), s = i(r, e), o = n ? e : i(e, r);
    s.length && this.updateHoverStyle(s, a.mode, false), o.length && a.mode && this.updateHoverStyle(o, a.mode, true);
  }
  _eventHandler(e, r) {
    const n = {
      event: e,
      replay: r,
      cancelable: true,
      inChartArea: this.isPointInArea(e)
    }, a = (s) => (s.options.events || this.options.events).includes(e.native.type);
    if (this.notifyPlugins("beforeEvent", n, a) === false)
      return;
    const i = this._handleEvent(e, r, n.inChartArea);
    return n.cancelable = false, this.notifyPlugins("afterEvent", n, a), (i || n.changed) && this.render(), this;
  }
  _handleEvent(e, r, n) {
    const { _active: a = [], options: i } = this, s = r, o = this._getActiveElements(e, a, n, s), l = Ov(e), c = Yw(e, this._lastEvent, n, l);
    n && (this._lastEvent = null, Ae(i.onHover, [
      e,
      o,
      this
    ], this), l && Ae(i.onClick, [
      e,
      o,
      this
    ], this));
    const d = !vs(o, a);
    return (d || r) && (this._active = o, this._updateHoverStyles(o, a, r)), this._lastEvent = c, d;
  }
  _getActiveElements(e, r, n, a) {
    if (e.type === "mouseout")
      return [];
    if (!n)
      return r;
    const i = this.options.hover;
    return this.getElementsAtEventForMode(e, i.mode, i, a);
  }
}, K(Hr, "defaults", Ve), K(Hr, "instances", os), K(Hr, "overrides", En), K(Hr, "registry", ar), K(Hr, "version", zw), K(Hr, "getChart", Pu), Hr);
function Ru() {
  return Se(oo.instances, (t6) => t6._plugins.invalidate());
}
function qw(t6, e, r) {
  const { startAngle: n, pixelMargin: a, x: i, y: s, outerRadius: o, innerRadius: l } = e;
  let c = a / o;
  t6.beginPath(), t6.arc(i, s, o, n - c, r + c), l > a ? (c = a / l, t6.arc(i, s, l, r + c, n - c, true)) : t6.arc(i, s, a, r + tt, n - tt), t6.closePath(), t6.clip();
}
function Uw(t6) {
  return fc(t6, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function Xw(t6, e, r, n) {
  const a = Uw(t6.options.borderRadius), i = (r - e) / 2, s = Math.min(i, n * e / 2), o = (l) => {
    const c = (r - Math.min(i, l)) * n / 2;
    return jt(l, 0, Math.min(i, c));
  };
  return {
    outerStart: o(a.outerStart),
    outerEnd: o(a.outerEnd),
    innerStart: jt(a.innerStart, 0, s),
    innerEnd: jt(a.innerEnd, 0, s)
  };
}
function zn(t6, e, r, n) {
  return {
    x: r + t6 * Math.cos(e),
    y: n + t6 * Math.sin(e)
  };
}
function Cs(t6, e, r, n, a, i) {
  const { x: s, y: o, startAngle: l, pixelMargin: c, innerRadius: d } = e, u = Math.max(e.outerRadius + n + r - c, 0), f = d > 0 ? d + n + r + c : 0;
  let h = 0;
  const g = a - l;
  if (n) {
    const I = d > 0 ? d - n : 0, W = u > 0 ? u - n : 0, B = (I + W) / 2, U = B !== 0 ? g * B / (B + n) : g;
    h = (g - U) / 2;
  }
  const m = Math.max(1e-3, g * u - r / at) / u, p = (g - m) / 2, w = l + p + h, b = a - p - h, { outerStart: k, outerEnd: v, innerStart: x, innerEnd: _ } = Xw(e, f, u, b - w), T = u - k, S = u - v, C = w + k / T, D = b - v / S, z = f + x, A = f + _, L = w + x / z, M = b - _ / A;
  if (t6.beginPath(), i) {
    const I = (C + D) / 2;
    if (t6.arc(s, o, u, C, I), t6.arc(s, o, u, I, D), v > 0) {
      const J = zn(S, D, s, o);
      t6.arc(J.x, J.y, v, D, b + tt);
    }
    const W = zn(A, b, s, o);
    if (t6.lineTo(W.x, W.y), _ > 0) {
      const J = zn(A, M, s, o);
      t6.arc(J.x, J.y, _, b + tt, M + Math.PI);
    }
    const B = (b - _ / f + (w + x / f)) / 2;
    if (t6.arc(s, o, f, b - _ / f, B, true), t6.arc(s, o, f, B, w + x / f, true), x > 0) {
      const J = zn(z, L, s, o);
      t6.arc(J.x, J.y, x, L + Math.PI, w - tt);
    }
    const U = zn(T, w, s, o);
    if (t6.lineTo(U.x, U.y), k > 0) {
      const J = zn(T, C, s, o);
      t6.arc(J.x, J.y, k, w - tt, C);
    }
  } else {
    t6.moveTo(s, o);
    const I = Math.cos(C) * u + s, W = Math.sin(C) * u + o;
    t6.lineTo(I, W);
    const B = Math.cos(D) * u + s, U = Math.sin(D) * u + o;
    t6.lineTo(B, U);
  }
  t6.closePath();
}
function Gw(t6, e, r, n, a) {
  const { fullCircles: i, startAngle: s, circumference: o } = e;
  let l = e.endAngle;
  if (i) {
    Cs(t6, e, r, n, l, a);
    for (let c = 0; c < i; ++c)
      t6.fill();
    isNaN(o) || (l = s + (o % Qe || Qe));
  }
  return Cs(t6, e, r, n, l, a), t6.fill(), l;
}
function Kw(t6, e, r, n, a) {
  const { fullCircles: i, startAngle: s, circumference: o, options: l } = e, { borderWidth: c, borderJoinStyle: d, borderDash: u, borderDashOffset: f } = l, h = l.borderAlign === "inner";
  if (!c)
    return;
  t6.setLineDash(u || []), t6.lineDashOffset = f, h ? (t6.lineWidth = c * 2, t6.lineJoin = d || "round") : (t6.lineWidth = c, t6.lineJoin = d || "bevel");
  let g = e.endAngle;
  if (i) {
    Cs(t6, e, r, n, g, a);
    for (let m = 0; m < i; ++m)
      t6.stroke();
    isNaN(o) || (g = s + (o % Qe || Qe));
  }
  h && qw(t6, e, g), i || (Cs(t6, e, r, n, g, a), t6.stroke());
}
class ja extends mi {
  constructor(r) {
    super();
    K(this, "circumference");
    K(this, "endAngle");
    K(this, "fullCircles");
    K(this, "innerRadius");
    K(this, "outerRadius");
    K(this, "pixelMargin");
    K(this, "startAngle");
    this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, r && Object.assign(this, r);
  }
  inRange(r, n, a) {
    const i = this.getProps([
      "x",
      "y"
    ], a), { angle: s, distance: o } = Zh(i, {
      x: r,
      y: n
    }), { startAngle: l, endAngle: c, innerRadius: d, outerRadius: u, circumference: f } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], a), h = (this.options.spacing + this.options.borderWidth) / 2, g = De(f, c - l), m = Os(s, l, c) && l !== c, p = g >= Qe || m, w = Wa(o, d + h, u + h);
    return p && w;
  }
  getCenterPoint(r) {
    const { x: n, y: a, startAngle: i, endAngle: s, innerRadius: o, outerRadius: l } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], r), { offset: c, spacing: d } = this.options, u = (i + s) / 2, f = (o + l + d + c) / 2;
    return {
      x: n + Math.cos(u) * f,
      y: a + Math.sin(u) * f
    };
  }
  tooltipPosition(r) {
    return this.getCenterPoint(r);
  }
  draw(r) {
    const { options: n, circumference: a } = this, i = (n.offset || 0) / 4, s = (n.spacing || 0) / 2, o = n.circular;
    if (this.pixelMargin = n.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = a > Qe ? Math.floor(a / Qe) : 0, a === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    r.save();
    const l = (this.startAngle + this.endAngle) / 2;
    r.translate(Math.cos(l) * i, Math.sin(l) * i);
    const c = 1 - Math.sin(Math.min(at, a || 0)), d = i * c;
    r.fillStyle = n.backgroundColor, r.strokeStyle = n.borderColor, Gw(r, this, d, s, o), Kw(r, this, d, s, o), r.restore();
  }
}
K(ja, "id", "arc"), K(ja, "defaults", {
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
}), K(ja, "defaultRoutes", {
  backgroundColor: "backgroundColor"
}), K(ja, "descriptors", {
  _scriptable: true,
  _indexable: (r) => r !== "borderDash"
});
const Nu = (t6, e) => {
  let { boxHeight: r = e, boxWidth: n = e } = t6;
  return t6.usePointStyle && (r = Math.min(r, e), n = t6.pointStyleWidth || Math.min(n, e)), {
    boxWidth: n,
    boxHeight: r,
    itemHeight: Math.max(e, r)
  };
}, Qw = (t6, e) => t6 !== null && e !== null && t6.datasetIndex === e.datasetIndex && t6.index === e.index;
class Iu extends mi {
  constructor(e) {
    super(), this._added = false, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = false, this.chart = e.chart, this.options = e.options, this.ctx = e.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(e, r, n) {
    this.maxWidth = e, this.maxHeight = r, this._margins = n, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const e = this.options.labels || {};
    let r = Ae(e.generateLabels, [
      this.chart
    ], this) || [];
    e.filter && (r = r.filter((n) => e.filter(n, this.chart.data))), e.sort && (r = r.sort((n, a) => e.sort(n, a, this.chart.data))), this.options.reverse && r.reverse(), this.legendItems = r;
  }
  fit() {
    const { options: e, ctx: r } = this;
    if (!e.display) {
      this.width = this.height = 0;
      return;
    }
    const n = e.labels, a = _t(n.font), i = a.size, s = this._computeTitleHeight(), { boxWidth: o, itemHeight: l } = Nu(n, i);
    let c, d;
    r.font = a.string, this.isHorizontal() ? (c = this.maxWidth, d = this._fitRows(s, i, o, l) + 10) : (d = this.maxHeight, c = this._fitCols(s, a, o, l) + 10), this.width = Math.min(c, e.maxWidth || this.maxWidth), this.height = Math.min(d, e.maxHeight || this.maxHeight);
  }
  _fitRows(e, r, n, a) {
    const { ctx: i, maxWidth: s, options: { labels: { padding: o } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], d = a + o;
    let u = e;
    i.textAlign = "left", i.textBaseline = "middle";
    let f = -1, h = -d;
    return this.legendItems.forEach((g, m) => {
      const p = n + r / 2 + i.measureText(g.text).width;
      (m === 0 || c[c.length - 1] + p + 2 * o > s) && (u += d, c[c.length - (m > 0 ? 0 : 1)] = 0, h += d, f++), l[m] = {
        left: 0,
        top: h,
        row: f,
        width: p,
        height: a
      }, c[c.length - 1] += p + o;
    }), u;
  }
  _fitCols(e, r, n, a) {
    const { ctx: i, maxHeight: s, options: { labels: { padding: o } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], d = s - e;
    let u = o, f = 0, h = 0, g = 0, m = 0;
    return this.legendItems.forEach((p, w) => {
      const { itemWidth: b, itemHeight: k } = Jw(n, r, i, p, a);
      w > 0 && h + k + 2 * o > d && (u += f + o, c.push({
        width: f,
        height: h
      }), g += f + o, m++, f = h = 0), l[w] = {
        left: g,
        top: h,
        col: m,
        width: b,
        height: k
      }, f = Math.max(f, b), h += k + o;
    }), u += f, c.push({
      width: f,
      height: h
    }), u;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const e = this._computeTitleHeight(), { legendHitBoxes: r, options: { align: n, labels: { padding: a }, rtl: i } } = this, s = Jn(i, this.left, this.width);
    if (this.isHorizontal()) {
      let o = 0, l = It(n, this.left + a, this.right - this.lineWidths[o]);
      for (const c of r)
        o !== c.row && (o = c.row, l = It(n, this.left + a, this.right - this.lineWidths[o])), c.top += this.top + e + a, c.left = s.leftForLtr(s.x(l), c.width), l += c.width + a;
    } else {
      let o = 0, l = It(n, this.top + e + a, this.bottom - this.columnSizes[o].height);
      for (const c of r)
        c.col !== o && (o = c.col, l = It(n, this.top + e + a, this.bottom - this.columnSizes[o].height)), c.top = l, c.left += this.left + a, c.left = s.leftForLtr(s.x(c.left), c.width), l += c.height + a;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const e = this.ctx;
      dc(e, this), this._draw(), uc(e);
    }
  }
  _draw() {
    const { options: e, columnSizes: r, lineWidths: n, ctx: a } = this, { align: i, labels: s } = e, o = Ve.color, l = Jn(e.rtl, this.left, this.width), c = _t(s.font), { padding: d } = s, u = c.size, f = u / 2;
    let h;
    this.drawTitle(), a.textAlign = l.textAlign("left"), a.textBaseline = "middle", a.lineWidth = 0.5, a.font = c.string;
    const { boxWidth: g, boxHeight: m, itemHeight: p } = Nu(s, u), w = function(_, T, S) {
      if (isNaN(g) || g <= 0 || isNaN(m) || m < 0)
        return;
      a.save();
      const C = De(S.lineWidth, 1);
      if (a.fillStyle = De(S.fillStyle, o), a.lineCap = De(S.lineCap, "butt"), a.lineDashOffset = De(S.lineDashOffset, 0), a.lineJoin = De(S.lineJoin, "miter"), a.lineWidth = C, a.strokeStyle = De(S.strokeStyle, o), a.setLineDash(De(S.lineDash, [])), s.usePointStyle) {
        const D = {
          radius: m * Math.SQRT2 / 2,
          pointStyle: S.pointStyle,
          rotation: S.rotation,
          borderWidth: C
        }, z = l.xPlus(_, g / 2), A = T + f;
        ig(a, D, z, A, s.pointStyleWidth && g);
      } else {
        const D = T + Math.max((u - m) / 2, 0), z = l.leftForLtr(_, g), A = qa(S.borderRadius);
        a.beginPath(), Object.values(A).some((L) => L !== 0) ? El(a, {
          x: z,
          y: D,
          w: g,
          h: m,
          radius: A
        }) : a.rect(z, D, g, m), a.fill(), C !== 0 && a.stroke();
      }
      a.restore();
    }, b = function(_, T, S) {
      Ss(a, S.text, _, T + p / 2, c, {
        strikethrough: S.hidden,
        textAlign: l.textAlign(S.textAlign)
      });
    }, k = this.isHorizontal(), v = this._computeTitleHeight();
    k ? h = {
      x: It(i, this.left + d, this.right - n[0]),
      y: this.top + d + v,
      line: 0
    } : h = {
      x: this.left + d,
      y: It(i, this.top + v + d, this.bottom - r[0].height),
      line: 0
    }, ug(this.ctx, e.textDirection);
    const x = p + d;
    this.legendItems.forEach((_, T) => {
      a.strokeStyle = _.fontColor, a.fillStyle = _.fontColor;
      const S = a.measureText(_.text).width, C = l.textAlign(_.textAlign || (_.textAlign = s.textAlign)), D = g + f + S;
      let z = h.x, A = h.y;
      l.setWidth(this.width), k ? T > 0 && z + D + d > this.right && (A = h.y += x, h.line++, z = h.x = It(i, this.left + d, this.right - n[h.line])) : T > 0 && A + x > this.bottom && (z = h.x = z + r[h.line].width + d, h.line++, A = h.y = It(i, this.top + v + d, this.bottom - r[h.line].height));
      const L = l.x(z);
      if (w(L, A, _), z = Fv(C, z + g + f, k ? z + D : this.right, e.rtl), b(l.x(z), A, _), k)
        h.x += D + d;
      else if (typeof _.text != "string") {
        const M = c.lineHeight;
        h.y += Og(_, M) + d;
      } else
        h.y += x;
    }), fg(this.ctx, e.textDirection);
  }
  drawTitle() {
    const e = this.options, r = e.title, n = _t(r.font), a = Kt(r.padding);
    if (!r.display)
      return;
    const i = Jn(e.rtl, this.left, this.width), s = this.ctx, o = r.position, l = n.size / 2, c = a.top + l;
    let d, u = this.left, f = this.width;
    if (this.isHorizontal())
      f = Math.max(...this.lineWidths), d = this.top + c, u = It(e.align, u, this.right - f);
    else {
      const g = this.columnSizes.reduce((m, p) => Math.max(m, p.height), 0);
      d = c + It(e.align, this.top, this.bottom - g - e.labels.padding - this._computeTitleHeight());
    }
    const h = It(o, u, u + f);
    s.textAlign = i.textAlign(ng(o)), s.textBaseline = "middle", s.strokeStyle = r.color, s.fillStyle = r.color, s.font = n.string, Ss(s, r.text, h, d, n);
  }
  _computeTitleHeight() {
    const e = this.options.title, r = _t(e.font), n = Kt(e.padding);
    return e.display ? r.lineHeight + n.height : 0;
  }
  _getLegendItemAt(e, r) {
    let n, a, i;
    if (Wa(e, this.left, this.right) && Wa(r, this.top, this.bottom)) {
      for (i = this.legendHitBoxes, n = 0; n < i.length; ++n)
        if (a = i[n], Wa(e, a.left, a.left + a.width) && Wa(r, a.top, a.top + a.height))
          return this.legendItems[n];
    }
    return null;
  }
  handleEvent(e) {
    const r = this.options;
    if (!t1(e.type, r))
      return;
    const n = this._getLegendItemAt(e.x, e.y);
    if (e.type === "mousemove" || e.type === "mouseout") {
      const a = this._hoveredItem, i = Qw(a, n);
      a && !i && Ae(r.onLeave, [
        e,
        a,
        this
      ], this), this._hoveredItem = n, n && !i && Ae(r.onHover, [
        e,
        n,
        this
      ], this);
    } else n && Ae(r.onClick, [
      e,
      n,
      this
    ], this);
  }
}
function Jw(t6, e, r, n, a) {
  const i = Zw(n, t6, e, r), s = e1(a, n, e.lineHeight);
  return {
    itemWidth: i,
    itemHeight: s
  };
}
function Zw(t6, e, r, n) {
  let a = t6.text;
  return a && typeof a != "string" && (a = a.reduce((i, s) => i.length > s.length ? i : s)), e + r.size / 2 + n.measureText(a).width;
}
function e1(t6, e, r) {
  let n = t6;
  return typeof e.text != "string" && (n = Og(e, r)), n;
}
function Og(t6, e) {
  const r = t6.text ? t6.text.length : 0;
  return e * r;
}
function t1(t6, e) {
  return !!((t6 === "mousemove" || t6 === "mouseout") && (e.onHover || e.onLeave) || e.onClick && (t6 === "click" || t6 === "mouseup"));
}
var r1 = {
  id: "legend",
  _element: Iu,
  start(t6, e, r) {
    const n = t6.legend = new Iu({
      ctx: t6.ctx,
      options: r,
      chart: t6
    });
    Vr.configure(t6, n, r), Vr.addBox(t6, n);
  },
  stop(t6) {
    Vr.removeBox(t6, t6.legend), delete t6.legend;
  },
  beforeUpdate(t6, e, r) {
    const n = t6.legend;
    Vr.configure(t6, n, r), n.options = r;
  },
  afterUpdate(t6) {
    const e = t6.legend;
    e.buildLabels(), e.adjustHitBoxes();
  },
  afterEvent(t6, e) {
    e.replay || t6.legend.handleEvent(e.event);
  },
  defaults: {
    display: true,
    position: "top",
    align: "center",
    fullSize: true,
    reverse: false,
    weight: 1e3,
    onClick(t6, e, r) {
      const n = e.datasetIndex, a = r.chart;
      a.isDatasetVisible(n) ? (a.hide(n), e.hidden = true) : (a.show(n), e.hidden = false);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (t6) => t6.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(t6) {
        const e = t6.data.datasets, { labels: { usePointStyle: r, pointStyle: n, textAlign: a, color: i, useBorderRadius: s, borderRadius: o } } = t6.legend.options;
        return t6._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(r ? 0 : void 0), d = Kt(c.borderWidth);
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
            pointStyle: n || c.pointStyle,
            rotation: c.rotation,
            textAlign: a || c.textAlign,
            borderRadius: s && (o || c.borderRadius),
            datasetIndex: l.index
          };
        }, this);
      }
    },
    title: {
      color: (t6) => t6.chart.options.color,
      display: false,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (t6) => !t6.startsWith("on"),
    labels: {
      _scriptable: (t6) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(t6)
    }
  }
};
const Ha = {
  average(t6) {
    if (!t6.length)
      return false;
    let e, r, n = /* @__PURE__ */ new Set(), a = 0, i = 0;
    for (e = 0, r = t6.length; e < r; ++e) {
      const o = t6[e].element;
      if (o && o.hasValue()) {
        const l = o.tooltipPosition();
        n.add(l.x), a += l.y, ++i;
      }
    }
    return i === 0 || n.size === 0 ? false : {
      x: [
        ...n
      ].reduce((o, l) => o + l) / n.size,
      y: a / i
    };
  },
  nearest(t6, e) {
    if (!t6.length)
      return false;
    let r = e.x, n = e.y, a = Number.POSITIVE_INFINITY, i, s, o;
    for (i = 0, s = t6.length; i < s; ++i) {
      const l = t6[i].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), d = Ev(e, c);
        d < a && (a = d, o = l);
      }
    }
    if (o) {
      const l = o.tooltipPosition();
      r = l.x, n = l.y;
    }
    return {
      x: r,
      y: n
    };
  }
};
function nr(t6, e) {
  return e && (ct(e) ? Array.prototype.push.apply(t6, e) : t6.push(e)), t6;
}
function Sr(t6) {
  return (typeof t6 == "string" || t6 instanceof String) && t6.indexOf(`
`) > -1 ? t6.split(`
`) : t6;
}
function n1(t6, e) {
  const { element: r, datasetIndex: n, index: a } = e, i = t6.getDatasetMeta(n).controller, { label: s, value: o } = i.getLabelAndValue(a);
  return {
    chart: t6,
    label: s,
    parsed: i.getParsed(a),
    raw: t6.data.datasets[n].data[a],
    formattedValue: o,
    dataset: i.getDataset(),
    dataIndex: a,
    datasetIndex: n,
    element: r
  };
}
function Au(t6, e) {
  const r = t6.chart.ctx, { body: n, footer: a, title: i } = t6, { boxWidth: s, boxHeight: o } = e, l = _t(e.bodyFont), c = _t(e.titleFont), d = _t(e.footerFont), u = i.length, f = a.length, h = n.length, g = Kt(e.padding);
  let m = g.height, p = 0, w = n.reduce((v, x) => v + x.before.length + x.lines.length + x.after.length, 0);
  if (w += t6.beforeBody.length + t6.afterBody.length, u && (m += u * c.lineHeight + (u - 1) * e.titleSpacing + e.titleMarginBottom), w) {
    const v = e.displayColors ? Math.max(o, l.lineHeight) : l.lineHeight;
    m += h * v + (w - h) * l.lineHeight + (w - 1) * e.bodySpacing;
  }
  f && (m += e.footerMarginTop + f * d.lineHeight + (f - 1) * e.footerSpacing);
  let b = 0;
  const k = function(v) {
    p = Math.max(p, r.measureText(v).width + b);
  };
  return r.save(), r.font = c.string, Se(t6.title, k), r.font = l.string, Se(t6.beforeBody.concat(t6.afterBody), k), b = e.displayColors ? s + 2 + e.boxPadding : 0, Se(n, (v) => {
    Se(v.before, k), Se(v.lines, k), Se(v.after, k);
  }), b = 0, r.font = d.string, Se(t6.footer, k), r.restore(), p += g.width, {
    width: p,
    height: m
  };
}
function a1(t6, e) {
  const { y: r, height: n } = e;
  return r < n / 2 ? "top" : r > t6.height - n / 2 ? "bottom" : "center";
}
function i1(t6, e, r, n) {
  const { x: a, width: i } = n, s = r.caretSize + r.caretPadding;
  if (t6 === "left" && a + i + s > e.width || t6 === "right" && a - i - s < 0)
    return true;
}
function s1(t6, e, r, n) {
  const { x: a, width: i } = r, { width: s, chartArea: { left: o, right: l } } = t6;
  let c = "center";
  return n === "center" ? c = a <= (o + l) / 2 ? "left" : "right" : a <= i / 2 ? c = "left" : a >= s - i / 2 && (c = "right"), i1(c, t6, e, r) && (c = "center"), c;
}
function Fu(t6, e, r) {
  const n = r.yAlign || e.yAlign || a1(t6, r);
  return {
    xAlign: r.xAlign || e.xAlign || s1(t6, e, r, n),
    yAlign: n
  };
}
function o1(t6, e) {
  let { x: r, width: n } = t6;
  return e === "right" ? r -= n : e === "center" && (r -= n / 2), r;
}
function l1(t6, e, r) {
  let { y: n, height: a } = t6;
  return e === "top" ? n += r : e === "bottom" ? n -= a + r : n -= a / 2, n;
}
function Lu(t6, e, r, n) {
  const { caretSize: a, caretPadding: i, cornerRadius: s } = t6, { xAlign: o, yAlign: l } = r, c = a + i, { topLeft: d, topRight: u, bottomLeft: f, bottomRight: h } = qa(s);
  let g = o1(e, o);
  const m = l1(e, l, c);
  return l === "center" ? o === "left" ? g += c : o === "right" && (g -= c) : o === "left" ? g -= Math.max(d, f) + a : o === "right" && (g += Math.max(u, h) + a), {
    x: jt(g, 0, n.width - e.width),
    y: jt(m, 0, n.height - e.height)
  };
}
function Yi(t6, e, r) {
  const n = Kt(r.padding);
  return e === "center" ? t6.x + t6.width / 2 : e === "right" ? t6.x + t6.width - n.right : t6.x + n.left;
}
function Wu(t6) {
  return nr([], Sr(t6));
}
function c1(t6, e, r) {
  return ha(t6, {
    tooltip: e,
    tooltipItems: r,
    type: "tooltip"
  });
}
function $u(t6, e) {
  const r = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
  return r ? t6.override(r) : t6;
}
const Sg = {
  beforeTitle: xr,
  title(t6) {
    if (t6.length > 0) {
      const e = t6[0], r = e.chart.data.labels, n = r ? r.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return e.dataset.label || "";
      if (e.label)
        return e.label;
      if (n > 0 && e.dataIndex < n)
        return r[e.dataIndex];
    }
    return "";
  },
  afterTitle: xr,
  beforeBody: xr,
  beforeLabel: xr,
  label(t6) {
    if (this && this.options && this.options.mode === "dataset")
      return t6.label + ": " + t6.formattedValue || t6.formattedValue;
    let e = t6.dataset.label || "";
    e && (e += ": ");
    const r = t6.formattedValue;
    return mt(r) || (e += r), e;
  },
  labelColor(t6) {
    const r = t6.chart.getDatasetMeta(t6.datasetIndex).controller.getStyle(t6.dataIndex);
    return {
      borderColor: r.borderColor,
      backgroundColor: r.backgroundColor,
      borderWidth: r.borderWidth,
      borderDash: r.borderDash,
      borderDashOffset: r.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(t6) {
    const r = t6.chart.getDatasetMeta(t6.datasetIndex).controller.getStyle(t6.dataIndex);
    return {
      pointStyle: r.pointStyle,
      rotation: r.rotation
    };
  },
  afterLabel: xr,
  afterBody: xr,
  beforeFooter: xr,
  footer: xr,
  afterFooter: xr
};
function xt(t6, e, r, n) {
  const a = t6[e].call(r, n);
  return typeof a > "u" ? Sg[e].call(r, n) : a;
}
var Sl;
let zu = (Sl = class extends mi {
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
    const r = this.chart, n = this.options.setContext(this.getContext()), a = n.enabled && r.options.animation && n.animations, i = new hg(this.chart, a);
    return a._cacheable && (this._cachedAnimations = Object.freeze(i)), i;
  }
  getContext() {
    return this.$context || (this.$context = c1(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(e, r) {
    const { callbacks: n } = r, a = xt(n, "beforeTitle", this, e), i = xt(n, "title", this, e), s = xt(n, "afterTitle", this, e);
    let o = [];
    return o = nr(o, Sr(a)), o = nr(o, Sr(i)), o = nr(o, Sr(s)), o;
  }
  getBeforeBody(e, r) {
    return Wu(xt(r.callbacks, "beforeBody", this, e));
  }
  getBody(e, r) {
    const { callbacks: n } = r, a = [];
    return Se(e, (i) => {
      const s = {
        before: [],
        lines: [],
        after: []
      }, o = $u(n, i);
      nr(s.before, Sr(xt(o, "beforeLabel", this, i))), nr(s.lines, xt(o, "label", this, i)), nr(s.after, Sr(xt(o, "afterLabel", this, i))), a.push(s);
    }), a;
  }
  getAfterBody(e, r) {
    return Wu(xt(r.callbacks, "afterBody", this, e));
  }
  getFooter(e, r) {
    const { callbacks: n } = r, a = xt(n, "beforeFooter", this, e), i = xt(n, "footer", this, e), s = xt(n, "afterFooter", this, e);
    let o = [];
    return o = nr(o, Sr(a)), o = nr(o, Sr(i)), o = nr(o, Sr(s)), o;
  }
  _createItems(e) {
    const r = this._active, n = this.chart.data, a = [], i = [], s = [];
    let o = [], l, c;
    for (l = 0, c = r.length; l < c; ++l)
      o.push(n1(this.chart, r[l]));
    return e.filter && (o = o.filter((d, u, f) => e.filter(d, u, f, n))), e.itemSort && (o = o.sort((d, u) => e.itemSort(d, u, n))), Se(o, (d) => {
      const u = $u(e.callbacks, d);
      a.push(xt(u, "labelColor", this, d)), i.push(xt(u, "labelPointStyle", this, d)), s.push(xt(u, "labelTextColor", this, d));
    }), this.labelColors = a, this.labelPointStyles = i, this.labelTextColors = s, this.dataPoints = o, o;
  }
  update(e, r) {
    const n = this.options.setContext(this.getContext()), a = this._active;
    let i, s = [];
    if (!a.length)
      this.opacity !== 0 && (i = {
        opacity: 0
      });
    else {
      const o = Ha[n.position].call(this, a, this._eventPosition);
      s = this._createItems(n), this.title = this.getTitle(s, n), this.beforeBody = this.getBeforeBody(s, n), this.body = this.getBody(s, n), this.afterBody = this.getAfterBody(s, n), this.footer = this.getFooter(s, n);
      const l = this._size = Au(this, n), c = Object.assign({}, o, l), d = Fu(this.chart, n, c), u = Lu(n, c, d, this.chart);
      this.xAlign = d.xAlign, this.yAlign = d.yAlign, i = {
        opacity: 1,
        x: u.x,
        y: u.y,
        width: l.width,
        height: l.height,
        caretX: o.x,
        caretY: o.y
      };
    }
    this._tooltipItems = s, this.$context = void 0, i && this._resolveAnimations().update(this, i), e && n.external && n.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: r
    });
  }
  drawCaret(e, r, n, a) {
    const i = this.getCaretPosition(e, n, a);
    r.lineTo(i.x1, i.y1), r.lineTo(i.x2, i.y2), r.lineTo(i.x3, i.y3);
  }
  getCaretPosition(e, r, n) {
    const { xAlign: a, yAlign: i } = this, { caretSize: s, cornerRadius: o } = n, { topLeft: l, topRight: c, bottomLeft: d, bottomRight: u } = qa(o), { x: f, y: h } = e, { width: g, height: m } = r;
    let p, w, b, k, v, x;
    return i === "center" ? (v = h + m / 2, a === "left" ? (p = f, w = p - s, k = v + s, x = v - s) : (p = f + g, w = p + s, k = v - s, x = v + s), b = p) : (a === "left" ? w = f + Math.max(l, d) + s : a === "right" ? w = f + g - Math.max(c, u) - s : w = this.caretX, i === "top" ? (k = h, v = k - s, p = w - s, b = w + s) : (k = h + m, v = k + s, p = w + s, b = w - s), x = k), {
      x1: p,
      x2: w,
      x3: b,
      y1: k,
      y2: v,
      y3: x
    };
  }
  drawTitle(e, r, n) {
    const a = this.title, i = a.length;
    let s, o, l;
    if (i) {
      const c = Jn(n.rtl, this.x, this.width);
      for (e.x = Yi(this, n.titleAlign, n), r.textAlign = c.textAlign(n.titleAlign), r.textBaseline = "middle", s = _t(n.titleFont), o = n.titleSpacing, r.fillStyle = n.titleColor, r.font = s.string, l = 0; l < i; ++l)
        r.fillText(a[l], c.x(e.x), e.y + s.lineHeight / 2), e.y += s.lineHeight + o, l + 1 === i && (e.y += n.titleMarginBottom - o);
    }
  }
  _drawColorBox(e, r, n, a, i) {
    const s = this.labelColors[n], o = this.labelPointStyles[n], { boxHeight: l, boxWidth: c } = i, d = _t(i.bodyFont), u = Yi(this, "left", i), f = a.x(u), h = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0, g = r.y + h;
    if (i.usePointStyle) {
      const m = {
        radius: Math.min(c, l) / 2,
        pointStyle: o.pointStyle,
        rotation: o.rotation,
        borderWidth: 1
      }, p = a.leftForLtr(f, c) + c / 2, w = g + l / 2;
      e.strokeStyle = i.multiKeyBackground, e.fillStyle = i.multiKeyBackground, nu(e, m, p, w), e.strokeStyle = s.borderColor, e.fillStyle = s.backgroundColor, nu(e, m, p, w);
    } else {
      e.lineWidth = pe(s.borderWidth) ? Math.max(...Object.values(s.borderWidth)) : s.borderWidth || 1, e.strokeStyle = s.borderColor, e.setLineDash(s.borderDash || []), e.lineDashOffset = s.borderDashOffset || 0;
      const m = a.leftForLtr(f, c), p = a.leftForLtr(a.xPlus(f, 1), c - 2), w = qa(s.borderRadius);
      Object.values(w).some((b) => b !== 0) ? (e.beginPath(), e.fillStyle = i.multiKeyBackground, El(e, {
        x: m,
        y: g,
        w: c,
        h: l,
        radius: w
      }), e.fill(), e.stroke(), e.fillStyle = s.backgroundColor, e.beginPath(), El(e, {
        x: p,
        y: g + 1,
        w: c - 2,
        h: l - 2,
        radius: w
      }), e.fill()) : (e.fillStyle = i.multiKeyBackground, e.fillRect(m, g, c, l), e.strokeRect(m, g, c, l), e.fillStyle = s.backgroundColor, e.fillRect(p, g + 1, c - 2, l - 2));
    }
    e.fillStyle = this.labelTextColors[n];
  }
  drawBody(e, r, n) {
    const { body: a } = this, { bodySpacing: i, bodyAlign: s, displayColors: o, boxHeight: l, boxWidth: c, boxPadding: d } = n, u = _t(n.bodyFont);
    let f = u.lineHeight, h = 0;
    const g = Jn(n.rtl, this.x, this.width), m = function(S) {
      r.fillText(S, g.x(e.x + h), e.y + f / 2), e.y += f + i;
    }, p = g.textAlign(s);
    let w, b, k, v, x, _, T;
    for (r.textAlign = s, r.textBaseline = "middle", r.font = u.string, e.x = Yi(this, p, n), r.fillStyle = n.bodyColor, Se(this.beforeBody, m), h = o && p !== "right" ? s === "center" ? c / 2 + d : c + 2 + d : 0, v = 0, _ = a.length; v < _; ++v) {
      for (w = a[v], b = this.labelTextColors[v], r.fillStyle = b, Se(w.before, m), k = w.lines, o && k.length && (this._drawColorBox(r, e, v, g, n), f = Math.max(u.lineHeight, l)), x = 0, T = k.length; x < T; ++x)
        m(k[x]), f = u.lineHeight;
      Se(w.after, m);
    }
    h = 0, f = u.lineHeight, Se(this.afterBody, m), e.y -= i;
  }
  drawFooter(e, r, n) {
    const a = this.footer, i = a.length;
    let s, o;
    if (i) {
      const l = Jn(n.rtl, this.x, this.width);
      for (e.x = Yi(this, n.footerAlign, n), e.y += n.footerMarginTop, r.textAlign = l.textAlign(n.footerAlign), r.textBaseline = "middle", s = _t(n.footerFont), r.fillStyle = n.footerColor, r.font = s.string, o = 0; o < i; ++o)
        r.fillText(a[o], l.x(e.x), e.y + s.lineHeight / 2), e.y += s.lineHeight + n.footerSpacing;
    }
  }
  drawBackground(e, r, n, a) {
    const { xAlign: i, yAlign: s } = this, { x: o, y: l } = e, { width: c, height: d } = n, { topLeft: u, topRight: f, bottomLeft: h, bottomRight: g } = qa(a.cornerRadius);
    r.fillStyle = a.backgroundColor, r.strokeStyle = a.borderColor, r.lineWidth = a.borderWidth, r.beginPath(), r.moveTo(o + u, l), s === "top" && this.drawCaret(e, r, n, a), r.lineTo(o + c - f, l), r.quadraticCurveTo(o + c, l, o + c, l + f), s === "center" && i === "right" && this.drawCaret(e, r, n, a), r.lineTo(o + c, l + d - g), r.quadraticCurveTo(o + c, l + d, o + c - g, l + d), s === "bottom" && this.drawCaret(e, r, n, a), r.lineTo(o + h, l + d), r.quadraticCurveTo(o, l + d, o, l + d - h), s === "center" && i === "left" && this.drawCaret(e, r, n, a), r.lineTo(o, l + u), r.quadraticCurveTo(o, l, o + u, l), r.closePath(), r.fill(), a.borderWidth > 0 && r.stroke();
  }
  _updateAnimationTarget(e) {
    const r = this.chart, n = this.$animations, a = n && n.x, i = n && n.y;
    if (a || i) {
      const s = Ha[e.position].call(this, this._active, this._eventPosition);
      if (!s)
        return;
      const o = this._size = Au(this, e), l = Object.assign({}, s, this._size), c = Fu(r, e, l), d = Lu(e, l, c, r);
      (a._to !== d.x || i._to !== d.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = o.width, this.height = o.height, this.caretX = s.x, this.caretY = s.y, this._resolveAnimations().update(this, d));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(e) {
    const r = this.options.setContext(this.getContext());
    let n = this.opacity;
    if (!n)
      return;
    this._updateAnimationTarget(r);
    const a = {
      width: this.width,
      height: this.height
    }, i = {
      x: this.x,
      y: this.y
    };
    n = Math.abs(n) < 1e-3 ? 0 : n;
    const s = Kt(r.padding), o = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    r.enabled && o && (e.save(), e.globalAlpha = n, this.drawBackground(i, e, a, r), ug(e, r.textDirection), i.y += s.top, this.drawTitle(i, e, r), this.drawBody(i, e, r), this.drawFooter(i, e, r), fg(e, r.textDirection), e.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e, r) {
    const n = this._active, a = e.map(({ datasetIndex: o, index: l }) => {
      const c = this.chart.getDatasetMeta(o);
      if (!c)
        throw new Error("Cannot find a dataset at index " + o);
      return {
        datasetIndex: o,
        element: c.data[l],
        index: l
      };
    }), i = !vs(n, a), s = this._positionChanged(a, r);
    (i || s) && (this._active = a, this._eventPosition = r, this._ignoreReplayEvents = true, this.update(true));
  }
  handleEvent(e, r, n = true) {
    if (r && this._ignoreReplayEvents)
      return false;
    this._ignoreReplayEvents = false;
    const a = this.options, i = this._active || [], s = this._getActiveElements(e, i, r, n), o = this._positionChanged(s, e), l = r || !vs(s, i) || o;
    return l && (this._active = s, (a.enabled || a.external) && (this._eventPosition = {
      x: e.x,
      y: e.y
    }, this.update(true, r))), l;
  }
  _getActiveElements(e, r, n, a) {
    const i = this.options;
    if (e.type === "mouseout")
      return [];
    if (!a)
      return r.filter((o) => this.chart.data.datasets[o.datasetIndex] && this.chart.getDatasetMeta(o.datasetIndex).controller.getParsed(o.index) !== void 0);
    const s = this.chart.getElementsAtEventForMode(e, i.mode, i, n);
    return i.reverse && s.reverse(), s;
  }
  _positionChanged(e, r) {
    const { caretX: n, caretY: a, options: i } = this, s = Ha[i.position].call(this, e, r);
    return s !== false && (n !== s.x || a !== s.y);
  }
}, K(Sl, "positioners", Ha), Sl);
var d1 = {
  id: "tooltip",
  _element: zu,
  positioners: Ha,
  afterInit(t6, e, r) {
    r && (t6.tooltip = new zu({
      chart: t6,
      options: r
    }));
  },
  beforeUpdate(t6, e, r) {
    t6.tooltip && t6.tooltip.initialize(r);
  },
  reset(t6, e, r) {
    t6.tooltip && t6.tooltip.initialize(r);
  },
  afterDraw(t6) {
    const e = t6.tooltip;
    if (e && e._willRender()) {
      const r = {
        tooltip: e
      };
      if (t6.notifyPlugins("beforeTooltipDraw", {
        ...r,
        cancelable: true
      }) === false)
        return;
      e.draw(t6.ctx), t6.notifyPlugins("afterTooltipDraw", r);
    }
  },
  afterEvent(t6, e) {
    if (t6.tooltip) {
      const r = e.replay;
      t6.tooltip.handleEvent(e.event, r, e.inChartArea) && (e.changed = true);
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
    boxHeight: (t6, e) => e.bodyFont.size,
    boxWidth: (t6, e) => e.bodyFont.size,
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
    callbacks: Sg
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (t6) => t6 !== "filter" && t6 !== "itemSort" && t6 !== "external",
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
const lo = {
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
}, kt = /* @__PURE__ */ Object.keys(lo);
function ju(t6, e) {
  return t6 - e;
}
function Hu(t6, e) {
  if (mt(e))
    return null;
  const r = t6._adapter, { parser: n, round: a, isoWeekday: i } = t6._parseOpts;
  let s = e;
  return typeof n == "function" && (s = n(s)), Er(s) || (s = typeof n == "string" ? r.parse(s, n) : r.parse(s)), s === null ? null : (a && (s = a === "week" && (_s(i) || i === true) ? r.startOf(s, "isoWeek", i) : r.startOf(s, a)), +s);
}
function Bu(t6, e, r, n) {
  const a = kt.length;
  for (let i = kt.indexOf(t6); i < a - 1; ++i) {
    const s = lo[kt[i]], o = s.steps ? s.steps : Number.MAX_SAFE_INTEGER;
    if (s.common && Math.ceil((r - e) / (o * s.size)) <= n)
      return kt[i];
  }
  return kt[a - 1];
}
function u1(t6, e, r, n, a) {
  for (let i = kt.length - 1; i >= kt.indexOf(r); i--) {
    const s = kt[i];
    if (lo[s].common && t6._adapter.diff(a, n, s) >= e - 1)
      return s;
  }
  return kt[r ? kt.indexOf(r) : 0];
}
function f1(t6) {
  for (let e = kt.indexOf(t6) + 1, r = kt.length; e < r; ++e)
    if (lo[kt[e]].common)
      return kt[e];
}
function Yu(t6, e, r) {
  if (!r)
    t6[e] = true;
  else if (r.length) {
    const { lo: n, hi: a } = cc(r, e), i = r[n] >= e ? r[n] : r[a];
    t6[i] = true;
  }
}
function h1(t6, e, r, n) {
  const a = t6._adapter, i = +a.startOf(e[0].value, n), s = e[e.length - 1].value;
  let o, l;
  for (o = i; o <= s; o = +a.add(o, 1, n))
    l = r[o], l >= 0 && (e[l].major = true);
  return e;
}
function Vu(t6, e, r) {
  const n = [], a = {}, i = e.length;
  let s, o;
  for (s = 0; s < i; ++s)
    o = e[s], a[o] = s, n.push({
      value: o,
      major: false
    });
  return i === 0 || !r ? n : h1(t6, n, a, r);
}
class Es extends so {
  constructor(e) {
    super(e), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = false, this._parseOpts = void 0;
  }
  init(e, r = {}) {
    const n = e.time || (e.time = {}), a = this._adapter = new Fx._date(e.adapters.date);
    a.init(r), Ba(n.displayFormats, a.formats()), this._parseOpts = {
      parser: n.parser,
      round: n.round,
      isoWeekday: n.isoWeekday
    }, super.init(e), this._normalized = r.normalized;
  }
  parse(e, r) {
    return e === void 0 ? null : Hu(this, e);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const e = this.options, r = this._adapter, n = e.time.unit || "day";
    let { min: a, max: i, minDefined: s, maxDefined: o } = this.getUserBounds();
    function l(c) {
      !s && !isNaN(c.min) && (a = Math.min(a, c.min)), !o && !isNaN(c.max) && (i = Math.max(i, c.max));
    }
    (!s || !o) && (l(this._getLabelBounds()), (e.bounds !== "ticks" || e.ticks.source !== "labels") && l(this.getMinMax(false))), a = Er(a) && !isNaN(a) ? a : +r.startOf(Date.now(), n), i = Er(i) && !isNaN(i) ? i : +r.endOf(Date.now(), n) + 1, this.min = Math.min(a, i - 1), this.max = Math.max(a + 1, i);
  }
  _getLabelBounds() {
    const e = this.getLabelTimestamps();
    let r = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY;
    return e.length && (r = e[0], n = e[e.length - 1]), {
      min: r,
      max: n
    };
  }
  buildTicks() {
    const e = this.options, r = e.time, n = e.ticks, a = n.source === "labels" ? this.getLabelTimestamps() : this._generate();
    e.bounds === "ticks" && a.length && (this.min = this._userMin || a[0], this.max = this._userMax || a[a.length - 1]);
    const i = this.min, s = this.max, o = Rv(a, i, s);
    return this._unit = r.unit || (n.autoSkip ? Bu(r.minUnit, this.min, this.max, this._getLabelCapacity(i)) : u1(this, o.length, r.minUnit, this.min, this.max)), this._majorUnit = !n.major.enabled || this._unit === "year" ? void 0 : f1(this._unit), this.initOffsets(a), e.reverse && o.reverse(), Vu(this, o, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((e) => +e.value));
  }
  initOffsets(e = []) {
    let r = 0, n = 0, a, i;
    this.options.offset && e.length && (a = this.getDecimalForValue(e[0]), e.length === 1 ? r = 1 - a : r = (this.getDecimalForValue(e[1]) - a) / 2, i = this.getDecimalForValue(e[e.length - 1]), e.length === 1 ? n = i : n = (i - this.getDecimalForValue(e[e.length - 2])) / 2);
    const s = e.length < 3 ? 0.5 : 0.25;
    r = jt(r, 0, s), n = jt(n, 0, s), this._offsets = {
      start: r,
      end: n,
      factor: 1 / (r + 1 + n)
    };
  }
  _generate() {
    const e = this._adapter, r = this.min, n = this.max, a = this.options, i = a.time, s = i.unit || Bu(i.minUnit, r, n, this._getLabelCapacity(r)), o = De(a.ticks.stepSize, 1), l = s === "week" ? i.isoWeekday : false, c = _s(l) || l === true, d = {};
    let u = r, f, h;
    if (c && (u = +e.startOf(u, "isoWeek", l)), u = +e.startOf(u, c ? "day" : s), e.diff(n, r, s) > 1e5 * o)
      throw new Error(r + " and " + n + " are too far apart with stepSize of " + o + " " + s);
    const g = a.ticks.source === "data" && this.getDataTimestamps();
    for (f = u, h = 0; f < n; f = +e.add(f, o, s), h++)
      Yu(d, f, g);
    return (f === n || a.bounds === "ticks" || h === 1) && Yu(d, f, g), Object.keys(d).sort(ju).map((m) => +m);
  }
  getLabelForValue(e) {
    const r = this._adapter, n = this.options.time;
    return n.tooltipFormat ? r.format(e, n.tooltipFormat) : r.format(e, n.displayFormats.datetime);
  }
  format(e, r) {
    const a = this.options.time.displayFormats, i = this._unit, s = r || a[i];
    return this._adapter.format(e, s);
  }
  _tickFormatFunction(e, r, n, a) {
    const i = this.options, s = i.ticks.callback;
    if (s)
      return Ae(s, [
        e,
        r,
        n
      ], this);
    const o = i.time.displayFormats, l = this._unit, c = this._majorUnit, d = l && o[l], u = c && o[c], f = n[r], h = c && u && f && f.major;
    return this._adapter.format(e, a || (h ? u : d));
  }
  generateTickLabels(e) {
    let r, n, a;
    for (r = 0, n = e.length; r < n; ++r)
      a = e[r], a.label = this._tickFormatFunction(a.value, r, e);
  }
  getDecimalForValue(e) {
    return e === null ? NaN : (e - this.min) / (this.max - this.min);
  }
  getPixelForValue(e) {
    const r = this._offsets, n = this.getDecimalForValue(e);
    return this.getPixelForDecimal((r.start + n) * r.factor);
  }
  getValueForPixel(e) {
    const r = this._offsets, n = this.getDecimalForPixel(e) / r.factor - r.end;
    return this.min + n * (this.max - this.min);
  }
  _getLabelSize(e) {
    const r = this.options.ticks, n = this.ctx.measureText(e).width, a = xn(this.isHorizontal() ? r.maxRotation : r.minRotation), i = Math.cos(a), s = Math.sin(a), o = this._resolveTickFontOptions(0).size;
    return {
      w: n * i + o * s,
      h: n * s + o * i
    };
  }
  _getLabelCapacity(e) {
    const r = this.options.time, n = r.displayFormats, a = n[r.unit] || n.millisecond, i = this._tickFormatFunction(e, 0, Vu(this, [
      e
    ], this._majorUnit), a), s = this._getLabelSize(i), o = Math.floor(this.isHorizontal() ? this.width / s.w : this.height / s.h) - 1;
    return o > 0 ? o : 1;
  }
  getDataTimestamps() {
    let e = this._cache.data || [], r, n;
    if (e.length)
      return e;
    const a = this.getMatchingVisibleMetas();
    if (this._normalized && a.length)
      return this._cache.data = a[0].controller.getAllParsedValues(this);
    for (r = 0, n = a.length; r < n; ++r)
      e = e.concat(a[r].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(e);
  }
  getLabelTimestamps() {
    const e = this._cache.labels || [];
    let r, n;
    if (e.length)
      return e;
    const a = this.getLabels();
    for (r = 0, n = a.length; r < n; ++r)
      e.push(Hu(this, a[r]));
    return this._cache.labels = this._normalized ? e : this.normalize(e);
  }
  normalize(e) {
    return Iv(e.sort(ju));
  }
}
K(Es, "id", "time"), K(Es, "defaults", {
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
function Vi(t6, e, r) {
  let n = 0, a = t6.length - 1, i, s, o, l;
  r ? (e >= t6[n].pos && e <= t6[a].pos && ({ lo: n, hi: a } = Ml(t6, "pos", e)), { pos: i, time: o } = t6[n], { pos: s, time: l } = t6[a]) : (e >= t6[n].time && e <= t6[a].time && ({ lo: n, hi: a } = Ml(t6, "time", e)), { time: i, pos: o } = t6[n], { time: s, pos: l } = t6[a]);
  const c = s - i;
  return c ? o + (l - o) * (e - i) / c : o;
}
class qu extends Es {
  constructor(e) {
    super(e), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const e = this._getTimestampsForTable(), r = this._table = this.buildLookupTable(e);
    this._minPos = Vi(r, this.min), this._tableRange = Vi(r, this.max) - this._minPos, super.initOffsets(e);
  }
  buildLookupTable(e) {
    const { min: r, max: n } = this, a = [], i = [];
    let s, o, l, c, d;
    for (s = 0, o = e.length; s < o; ++s)
      c = e[s], c >= r && c <= n && a.push(c);
    if (a.length < 2)
      return [
        {
          time: r,
          pos: 0
        },
        {
          time: n,
          pos: 1
        }
      ];
    for (s = 0, o = a.length; s < o; ++s)
      d = a[s + 1], l = a[s - 1], c = a[s], Math.round((d + l) / 2) !== c && i.push({
        time: c,
        pos: s / (o - 1)
      });
    return i;
  }
  _generate() {
    const e = this.min, r = this.max;
    let n = super.getDataTimestamps();
    return (!n.includes(e) || !n.length) && n.splice(0, 0, e), (!n.includes(r) || n.length === 1) && n.push(r), n.sort((a, i) => a - i);
  }
  _getTimestampsForTable() {
    let e = this._cache.all || [];
    if (e.length)
      return e;
    const r = this.getDataTimestamps(), n = this.getLabelTimestamps();
    return r.length && n.length ? e = this.normalize(r.concat(n)) : e = r.length ? r : n, e = this._cache.all = e, e;
  }
  getDecimalForValue(e) {
    return (Vi(this._table, e) - this._minPos) / this._tableRange;
  }
  getValueForPixel(e) {
    const r = this._offsets, n = this.getDecimalForPixel(e) / r.factor - r.end;
    return Vi(this._table, n * this._tableRange + this._minPos, true);
  }
}
K(qu, "id", "timeseries"), K(qu, "defaults", Es.defaults);
const Dg = "label";
function Uu(t6, e) {
  typeof t6 == "function" ? t6(e) : t6 && (t6.current = e);
}
function g1(t6, e) {
  const r = t6.options;
  r && e && Object.assign(r, e);
}
function Mg(t6, e) {
  t6.labels = e;
}
function Cg(t6, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Dg;
  const n = [];
  t6.datasets = e.map((a) => {
    const i = t6.datasets.find((s) => s[r] === a[r]);
    return !i || !a.data || n.includes(i) ? {
      ...a
    } : (n.push(i), Object.assign(i, a), i);
  });
}
function m1(t6) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Dg;
  const r = {
    labels: [],
    datasets: []
  };
  return Mg(r, t6.labels), Cg(r, t6.datasets, e), r;
}
function p1(t6, e) {
  const { height: r = 150, width: n = 300, redraw: a = false, datasetIdKey: i, type: s, data: o, options: l, plugins: c = [], fallbackContent: d, updateMode: u, ...f } = t6, h = Gt(null), g = Gt(null), m = () => {
    h.current && (g.current = new oo(h.current, {
      type: s,
      data: m1(o, i),
      options: l && {
        ...l
      },
      plugins: c
    }), Uu(e, g.current));
  }, p = () => {
    Uu(e, null), g.current && (g.current.destroy(), g.current = null);
  };
  return lt(() => {
    !a && g.current && l && g1(g.current, l);
  }, [
    a,
    l
  ]), lt(() => {
    !a && g.current && Mg(g.current.config.data, o.labels);
  }, [
    a,
    o.labels
  ]), lt(() => {
    !a && g.current && o.datasets && Cg(g.current.config.data, o.datasets, i);
  }, [
    a,
    o.datasets
  ]), lt(() => {
    g.current && (a ? (p(), setTimeout(m)) : g.current.update(u));
  }, [
    a,
    l,
    o.labels,
    o.datasets,
    u
  ]), lt(() => {
    g.current && (p(), setTimeout(m));
  }, [
    s
  ]), lt(() => (m(), () => p()), []), /* @__PURE__ */ ee.createElement("canvas", {
    ref: h,
    role: "img",
    height: r,
    width: n,
    ...f
  }, d);
}
const b1 = /* @__PURE__ */ Oe(p1);
function y1(t6, e) {
  return oo.register(e), /* @__PURE__ */ Oe((r, n) => /* @__PURE__ */ ee.createElement(b1, {
    ...r,
    ref: n,
    type: t6
  }));
}
const v1 = /* @__PURE__ */ y1("doughnut", $a);
oo.register(ja, d1, r1);
const HN = () => {
  const t6 = {
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
            text: `${t6.datasets[0].data.reduce((n, a) => n + a, 0).toFixed(1)}`,
            font: {
              size: "20"
            }
          }
        ]
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-full min-h-[200px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v1, { data: t6, options: e, plugins: [{
    id: "textCenter",
    beforeDraw(n) {
      const {
        ctx: a,
        chartArea: { top: i, width: s, height: o }
      } = n, l = "Total", c = t6.datasets[0].data.reduce((u, f) => u + f, 0).toFixed(1), d = i + o * 0.75;
      a.save(), a.font = "16px Arial", a.fillStyle = "black", a.textAlign = "center", a.fillText(l, s / 2, d - 15), a.font = "bold 20px Arial", a.fillText(c, s / 2, d + 15), a.restore();
    }
  }] }) });
}, x1 = "modal-module__overlay__cc2Es", w1 = "modal-module__modal__WAkuU", k1 = "modal-module__closeButton__1lo1j", Zo = {
  overlay: x1,
  modal: w1,
  closeButton: k1
};
function _1(t6) {
  return We({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z" }, child: [] }] })(t6);
}
const S1 = Oe(
  ({ isOpen: t6, onClose: e, children: r, width: n = "auto" }, a) => t6 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: Zo.overlay, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: a, className: Zo.modal, style: { width: n }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: e, className: Zo.closeButton, children: /* @__PURE__ */ jsxRuntimeExports.jsx(_1, {}) }),
    r
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
var At = function() {
  return At = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, At.apply(this, arguments);
};
function Tn(t6, e) {
  var r = {};
  for (var n in t6) Object.prototype.hasOwnProperty.call(t6, n) && e.indexOf(n) < 0 && (r[n] = t6[n]);
  if (t6 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t6); a < n.length; a++)
      e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t6, n[a]) && (r[n[a]] = t6[n[a]]);
  return r;
}
function pt(t6, e) {
  return Object.defineProperty ? Object.defineProperty(t6, "raw", { value: e }) : t6.raw = e, t6;
}
function Rl() {
  return Rl = Object.assign ? Object.assign.bind() : function(t6) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t6[n] = r[n]);
    }
    return t6;
  }, Rl.apply(this, arguments);
}
function co(t6) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return e[r] === void 0 && (e[r] = t6(r)), e[r];
  };
}
var D1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, M1 = /* @__PURE__ */ co(
  function(t6) {
    return D1.test(t6) || t6.charCodeAt(0) === 111 && t6.charCodeAt(1) === 110 && t6.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function C1(t6) {
  if (t6.sheet)
    return t6.sheet;
  for (var e = 0; e < document.styleSheets.length; e++)
    if (document.styleSheets[e].ownerNode === t6)
      return document.styleSheets[e];
}
function E1(t6) {
  var e = document.createElement("style");
  return e.setAttribute("data-emotion", t6.key), t6.nonce !== void 0 && e.setAttribute("nonce", t6.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
}
var T1 = /* @__PURE__ */ function() {
  function t6(r) {
    var n = this;
    this._insertTag = function(a) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(a, i), n.tags.push(a);
    }, this.isSpeedy = r.speedy === void 0 ? true : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var e = t6.prototype;
  return e.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, e.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(E1(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = C1(a);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch (o) {
      }
    } else
      a.appendChild(document.createTextNode(n));
    this.ctr++;
  }, e.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, t6;
}(), ht = "-ms-", Ts = "-moz-", be = "-webkit-", vc = "comm", xc = "rule", wc = "decl", P1 = "@import", Eg = "@keyframes", R1 = Math.abs, uo = String.fromCharCode, N1 = Object.assign;
function I1(t6, e) {
  return ot(t6, 0) ^ 45 ? (((e << 2 ^ ot(t6, 0)) << 2 ^ ot(t6, 1)) << 2 ^ ot(t6, 2)) << 2 ^ ot(t6, 3) : 0;
}
function Tg(t6) {
  return t6.trim();
}
function A1(t6, e) {
  return (t6 = e.exec(t6)) ? t6[0] : t6;
}
function _e(t6, e, r) {
  return t6.replace(e, r);
}
function Nl(t6, e) {
  return t6.indexOf(e);
}
function ot(t6, e) {
  return t6.charCodeAt(e) | 0;
}
function ai(t6, e, r) {
  return t6.slice(e, r);
}
function sr(t6) {
  return t6.length;
}
function kc(t6) {
  return t6.length;
}
function qi(t6, e) {
  return e.push(t6), t6;
}
function F1(t6, e) {
  return t6.map(e).join("");
}
var fo = 1, na = 1, Pg = 0, Mt = 0, Ke = 0, ga = "";
function ho(t6, e, r, n, a, i, s) {
  return { value: t6, root: e, parent: r, type: n, props: a, children: i, line: fo, column: na, length: s, return: "" };
}
function Da(t6, e) {
  return N1(ho("", null, null, "", null, null, 0), t6, { length: -t6.length }, e);
}
function L1() {
  return Ke;
}
function W1() {
  return Ke = Mt > 0 ? ot(ga, --Mt) : 0, na--, Ke === 10 && (na = 1, fo--), Ke;
}
function Ft() {
  return Ke = Mt < Pg ? ot(ga, Mt++) : 0, na++, Ke === 10 && (na = 1, fo++), Ke;
}
function fr() {
  return ot(ga, Mt);
}
function ls() {
  return Mt;
}
function pi(t6, e) {
  return ai(ga, t6, e);
}
function ii(t6) {
  switch (t6) {
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
function Rg(t6) {
  return fo = na = 1, Pg = sr(ga = t6), Mt = 0, [];
}
function Ng(t6) {
  return ga = "", t6;
}
function cs(t6) {
  return Tg(pi(Mt - 1, Il(t6 === 91 ? t6 + 2 : t6 === 40 ? t6 + 1 : t6)));
}
function $1(t6) {
  for (; (Ke = fr()) && Ke < 33; )
    Ft();
  return ii(t6) > 2 || ii(Ke) > 3 ? "" : " ";
}
function z1(t6, e) {
  for (; --e && Ft() && !(Ke < 48 || Ke > 102 || Ke > 57 && Ke < 65 || Ke > 70 && Ke < 97); )
    ;
  return pi(t6, ls() + (e < 6 && fr() == 32 && Ft() == 32));
}
function Il(t6) {
  for (; Ft(); )
    switch (Ke) {
      case t6:
        return Mt;
      case 34:
      case 39:
        t6 !== 34 && t6 !== 39 && Il(Ke);
        break;
      case 40:
        t6 === 41 && Il(t6);
        break;
      case 92:
        Ft();
        break;
    }
  return Mt;
}
function j1(t6, e) {
  for (; Ft() && t6 + Ke !== 57; )
    if (t6 + Ke === 84 && fr() === 47)
      break;
  return "/*" + pi(e, Mt - 1) + "*" + uo(t6 === 47 ? t6 : Ft());
}
function H1(t6) {
  for (; !ii(fr()); )
    Ft();
  return pi(t6, Mt);
}
function Xu(t6) {
  return Ng(ds("", null, null, null, [""], t6 = Rg(t6), 0, [0], t6));
}
function ds(t6, e, r, n, a, i, s, o, l) {
  for (var c = 0, d = 0, u = s, f = 0, h = 0, g = 0, m = 1, p = 1, w = 1, b = 0, k = "", v = a, x = i, _ = n, T = k; p; )
    switch (g = b, b = Ft()) {
      case 40:
        if (g != 108 && ot(T, u - 1) == 58) {
          Nl(T += _e(cs(b), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += cs(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += $1(g);
        break;
      case 92:
        T += z1(ls() - 1, 7);
        continue;
      case 47:
        switch (fr()) {
          case 42:
          case 47:
            qi(B1(j1(Ft(), ls()), e, r), l);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * m:
        o[c++] = sr(T) * w;
      case 125 * m:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            p = 0;
          case 59 + d:
            h > 0 && sr(T) - u && qi(h > 32 ? Ku(T + ";", n, r, u - 1) : Ku(_e(T, " ", "") + ";", n, r, u - 2), l);
            break;
          case 59:
            T += ";";
          default:
            if (qi(_ = Gu(T, e, r, c, d, a, o, k, v = [], x = [], u), i), b === 123)
              if (d === 0)
                ds(T, e, _, _, v, i, u, o, x);
              else
                switch (f === 99 && ot(T, 3) === 110 ? 100 : f) {
                  case 100:
                  case 109:
                  case 115:
                    ds(t6, _, _, n && qi(Gu(t6, _, _, 0, 0, a, o, k, a, v = [], u), x), a, x, u, o, n ? v : x);
                    break;
                  default:
                    ds(T, _, _, _, [""], x, 0, o, x);
                }
        }
        c = d = h = 0, m = w = 1, k = T = "", u = s;
        break;
      case 58:
        u = 1 + sr(T), h = g;
      default:
        if (m < 1) {
          if (b == 123)
            --m;
          else if (b == 125 && m++ == 0 && W1() == 125)
            continue;
        }
        switch (T += uo(b), b * m) {
          case 38:
            w = d > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            o[c++] = (sr(T) - 1) * w, w = 1;
            break;
          case 64:
            fr() === 45 && (T += cs(Ft())), f = fr(), d = u = sr(k = T += H1(ls())), b++;
            break;
          case 45:
            g === 45 && sr(T) == 2 && (m = 0);
        }
    }
  return i;
}
function Gu(t6, e, r, n, a, i, s, o, l, c, d) {
  for (var u = a - 1, f = a === 0 ? i : [""], h = kc(f), g = 0, m = 0, p = 0; g < n; ++g)
    for (var w = 0, b = ai(t6, u + 1, u = R1(m = s[g])), k = t6; w < h; ++w)
      (k = Tg(m > 0 ? f[w] + " " + b : _e(b, /&\f/g, f[w]))) && (l[p++] = k);
  return ho(t6, e, r, a === 0 ? xc : o, l, c, d);
}
function B1(t6, e, r) {
  return ho(t6, e, r, vc, uo(L1()), ai(t6, 2, -2), 0);
}
function Ku(t6, e, r, n) {
  return ho(t6, e, r, wc, ai(t6, 0, n), ai(t6, n + 1, -1), n);
}
function On(t6, e) {
  for (var r = "", n = kc(t6), a = 0; a < n; a++)
    r += e(t6[a], a, t6, e) || "";
  return r;
}
function Qu(t6, e, r, n) {
  switch (t6.type) {
    case P1:
    case wc:
      return t6.return = t6.return || t6.value;
    case vc:
      return "";
    case Eg:
      return t6.return = t6.value + "{" + On(t6.children, n) + "}";
    case xc:
      t6.value = t6.props.join(",");
  }
  return sr(r = On(t6.children, n)) ? t6.return = t6.value + "{" + r + "}" : "";
}
function Ju(t6) {
  var e = kc(t6);
  return function(r, n, a, i) {
    for (var s = "", o = 0; o < e; o++)
      s += t6[o](r, n, a, i) || "";
    return s;
  };
}
function Y1(t6) {
  return function(e) {
    e.root || (e = e.return) && t6(e);
  };
}
var V1 = function(e) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var a = e(n);
    return r.set(n, a), a;
  };
}, q1 = function(e, r, n) {
  for (var a = 0, i = 0; a = i, i = fr(), a === 38 && i === 12 && (r[n] = 1), !ii(i); )
    Ft();
  return pi(e, Mt);
}, U1 = function(e, r) {
  var n = -1, a = 44;
  do
    switch (ii(a)) {
      case 0:
        a === 38 && fr() === 12 && (r[n] = 1), e[n] += q1(Mt - 1, r, n);
        break;
      case 2:
        e[n] += cs(a);
        break;
      case 4:
        if (a === 44) {
          e[++n] = fr() === 58 ? "&\f" : "", r[n] = e[n].length;
          break;
        }
      default:
        e[n] += uo(a);
    }
  while (a = Ft());
  return e;
}, X1 = function(e, r) {
  return Ng(U1(Rg(e), r));
}, Zu = /* @__PURE__ */ new WeakMap(), G1 = function(e) {
  if (!(e.type !== "rule" || !e.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  e.length < 1)) {
    for (var r = e.value, n = e.parent, a = e.column === n.column && e.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(e.props.length === 1 && r.charCodeAt(0) !== 58 && !Zu.get(n)) && !a) {
      Zu.set(e, true);
      for (var i = [], s = X1(r, i), o = n.props, l = 0, c = 0; l < s.length; l++)
        for (var d = 0; d < o.length; d++, c++)
          e.props[c] = i[l] ? s[l].replace(/&\f/g, o[d]) : o[d] + " " + s[l];
    }
  }
}, K1 = function(e) {
  if (e.type === "decl") {
    var r = e.value;
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
};
function Ag(t6, e) {
  switch (I1(t6, e)) {
    case 5103:
      return be + "print-" + t6 + t6;
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
      return be + t6 + t6;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return be + t6 + Ts + t6 + ht + t6 + t6;
    case 6828:
    case 4268:
      return be + t6 + ht + t6 + t6;
    case 6165:
      return be + t6 + ht + "flex-" + t6 + t6;
    case 5187:
      return be + t6 + _e(t6, /(\w+).+(:[^]+)/, be + "box-$1$2" + ht + "flex-$1$2") + t6;
    case 5443:
      return be + t6 + ht + "flex-item-" + _e(t6, /flex-|-self/, "") + t6;
    case 4675:
      return be + t6 + ht + "flex-line-pack" + _e(t6, /align-content|flex-|-self/, "") + t6;
    case 5548:
      return be + t6 + ht + _e(t6, "shrink", "negative") + t6;
    case 5292:
      return be + t6 + ht + _e(t6, "basis", "preferred-size") + t6;
    case 6060:
      return be + "box-" + _e(t6, "-grow", "") + be + t6 + ht + _e(t6, "grow", "positive") + t6;
    case 4554:
      return be + _e(t6, /([^-])(transform)/g, "$1" + be + "$2") + t6;
    case 6187:
      return _e(_e(_e(t6, /(zoom-|grab)/, be + "$1"), /(image-set)/, be + "$1"), t6, "") + t6;
    case 5495:
    case 3959:
      return _e(t6, /(image-set\([^]*)/, be + "$1$`$1");
    case 4968:
      return _e(_e(t6, /(.+:)(flex-)?(.*)/, be + "box-pack:$3" + ht + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + be + t6 + t6;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return _e(t6, /(.+)-inline(.+)/, be + "$1$2") + t6;
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
      if (sr(t6) - 1 - e > 6) switch (ot(t6, e + 1)) {
        case 109:
          if (ot(t6, e + 4) !== 45) break;
        case 102:
          return _e(t6, /(.+:)(.+)-([^]+)/, "$1" + be + "$2-$3$1" + Ts + (ot(t6, e + 3) == 108 ? "$3" : "$2-$3")) + t6;
        case 115:
          return ~Nl(t6, "stretch") ? Ag(_e(t6, "stretch", "fill-available"), e) + t6 : t6;
      }
      break;
    case 4949:
      if (ot(t6, e + 1) !== 115) break;
    case 6444:
      switch (ot(t6, sr(t6) - 3 - (~Nl(t6, "!important") && 10))) {
        case 107:
          return _e(t6, ":", ":" + be) + t6;
        case 101:
          return _e(t6, /(.+:)([^;!]+)(;|!.+)?/, "$1" + be + (ot(t6, 14) === 45 ? "inline-" : "") + "box$3$1" + be + "$2$3$1" + ht + "$2box$3") + t6;
      }
      break;
    case 5936:
      switch (ot(t6, e + 11)) {
        case 114:
          return be + t6 + ht + _e(t6, /[svh]\w+-[tblr]{2}/, "tb") + t6;
        case 108:
          return be + t6 + ht + _e(t6, /[svh]\w+-[tblr]{2}/, "tb-rl") + t6;
        case 45:
          return be + t6 + ht + _e(t6, /[svh]\w+-[tblr]{2}/, "lr") + t6;
      }
      return be + t6 + ht + t6 + t6;
  }
  return t6;
}
var rk = function(e, r, n, a) {
  if (e.length > -1 && !e.return) switch (e.type) {
    case wc:
      e.return = Ag(e.value, e.length);
      break;
    case Eg:
      return On([Da(e, {
        value: _e(e.value, "@", "@" + be)
      })], a);
    case xc:
      if (e.length) return F1(e.props, function(i) {
        switch (A1(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return On([Da(e, {
              props: [_e(i, /:(read-\w+)/, ":" + Ts + "$1")]
            })], a);
          case "::placeholder":
            return On([Da(e, {
              props: [_e(i, /:(plac\w+)/, ":" + be + "input-$1")]
            }), Da(e, {
              props: [_e(i, /:(plac\w+)/, ":" + Ts + "$1")]
            }), Da(e, {
              props: [_e(i, /:(plac\w+)/, ht + "input-$1")]
            })], a);
        }
        return "";
      });
  }
}, us = typeof document < "u", nk = us ? void 0 : V1(function() {
  return co(function() {
    var t6 = {};
    return function(e) {
      return t6[e];
    };
  });
}), ak = [rk], Fg = function(e) {
  var r = e.key;
  if (us && r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(v) {
      var x = v.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var a = e.stylisPlugins || ak;
  var i = {}, s, o = [];
  us && (s = e.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(v) {
      for (var x = v.getAttribute("data-emotion").split(" "), _ = 1; _ < x.length; _++)
        i[x[_]] = true;
      o.push(v);
    }
  ));
  var l, c = [G1, K1];
  if (us) {
    var d, u = [Qu, Y1(function(v) {
      d.insert(v);
    })], f = Ju(c.concat(a, u)), h = function(x) {
      return On(Xu(x), f);
    };
    l = function(x, _, T, S) {
      d = T, h(x ? x + "{" + _.styles + "}" : _.styles), S && (k.inserted[_.name] = true);
    };
  } else {
    var g = [Qu], m = Ju(c.concat(a, g)), p = function(x) {
      return On(Xu(x), m);
    }, w = nk(a)(r), b = function(x, _) {
      var T = _.name;
      return w[T] === void 0 && (w[T] = p(x ? x + "{" + _.styles + "}" : _.styles)), w[T];
    };
    l = function(x, _, T, S) {
      var C = _.name, D = b(x, _);
      if (k.compat === void 0)
        return S && (k.inserted[C] = true), // using === development instead of !== production
        // because if people do ssr in tests, the source maps showing up would be annoying
        D;
      if (S)
        k.inserted[C] = D;
      else
        return D;
    };
  }
  var k = {
    key: r,
    sheet: new T1({
      key: r,
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
  return k.sheet.hydrate(o), k;
};
var bk = typeof document < "u", of = function(e) {
  return e();
}, yk = $.useInsertionEffect ? $.useInsertionEffect : false, jg = bk && yk || of, Hg = typeof document < "u", oi = /* @__PURE__ */ ft(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Fg({
    key: "css"
  }) : null
);
oi.Provider;
var Oc = function(e) {
  return /* @__PURE__ */ Oe(function(r, n) {
    var a = rt(oi);
    return e(r, a, n);
  });
};
Hg || (Oc = function(e) {
  return function(r) {
    var n = rt(oi);
    return n === null ? (n = Fg({
      key: "css"
    }), /* @__PURE__ */ ur(oi.Provider, {
      value: n
    }, e(r, n))) : e(r, n);
  };
});
var Sc = /* @__PURE__ */ ft({});
var Fl = typeof document < "u";
function kk(t6, e, r) {
  var n = "";
  return r.split(" ").forEach(function(a) {
    t6[a] !== void 0 ? e.push(t6[a] + ";") : n += a + " ";
  }), n;
}
var Bg = function(e, r, n) {
  var a = e.key + "-" + r.name;
  (n === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Fl === false && e.compat !== void 0) && e.registered[a] === void 0 && (e.registered[a] = r.styles);
}, _k = function(e, r, n) {
  Bg(e, r, n);
  var a = e.key + "-" + r.name;
  if (e.inserted[r.name] === void 0) {
    var i = "", s = r;
    do {
      var o = e.insert(r === s ? "." + a : "", s, e.sheet, true);
      !Fl && o !== void 0 && (i += o), s = s.next;
    } while (s !== void 0);
    if (!Fl && i.length !== 0)
      return i;
  }
};
function Ok(t6) {
  for (var e = 0, r, n = 0, a = t6.length; a >= 4; ++n, a -= 4)
    r = t6.charCodeAt(n) & 255 | (t6.charCodeAt(++n) & 255) << 8 | (t6.charCodeAt(++n) & 255) << 16 | (t6.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, e = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      e ^= (t6.charCodeAt(n + 2) & 255) << 16;
    case 2:
      e ^= (t6.charCodeAt(n + 1) & 255) << 8;
    case 1:
      e ^= t6.charCodeAt(n) & 255, e = /* Math.imul(h, m): */
      (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = /* Math.imul(h, m): */
  (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
var Sk = {
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
}, Mk = /[A-Z]|^ms/g, Yg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Dc = function(e) {
  return e.charCodeAt(1) === 45;
}, uf = function(e) {
  return e != null && typeof e != "boolean";
}, tl = /* @__PURE__ */ co(function(t6) {
  return Dc(t6) ? t6 : t6.replace(Mk, "-$&").toLowerCase();
}), Rs = function(e, r) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Yg, function(n, a, i) {
          return Ut = {
            name: a,
            styles: i,
            next: Ut
          }, a;
        });
  }
  return Sk[e] !== 1 && !Dc(e) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function li(t6, e, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return Ut = {
          name: r.name,
          styles: r.styles,
          next: Ut
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Ut = {
              name: n.name,
              styles: n.styles,
              next: Ut
            }, n = n.next;
        var a = r.styles + ";";
        return a;
      }
      return Nk(t6, e, r);
    }
    case "function": {
      if (t6 !== void 0) {
        var i = Ut, s = r(t6);
        return Ut = i, li(t6, e, s);
      }
      break;
    }
  }
  if (e == null)
    return r;
  var c = e[r];
  return c !== void 0 ? c : r;
}
function Nk(t6, e, r) {
  var n = "";
  if (Array.isArray(r))
    for (var a = 0; a < r.length; a++)
      n += li(t6, e, r[a]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object")
        e != null && e[s] !== void 0 ? n += i + "{" + e[s] + "}" : uf(s) && (n += tl(i) + ":" + Rs(i, s) + ";");
      else {
        if (Array.isArray(s) && typeof s[0] == "string" && (e == null || e[s[0]] === void 0))
          for (var o = 0; o < s.length; o++)
            uf(s[o]) && (n += tl(i) + ":" + Rs(i, s[o]) + ";");
        else {
          var l = li(t6, e, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += tl(i) + ":" + l + ";";
              break;
            }
            default:
              n += i + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var hf = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var Ut, Ik = function(e, r, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var a = true, i = "";
  Ut = void 0;
  var s = e[0];
  s == null || s.raw === void 0 ? (a = false, i += li(n, r, s)) : (i += s[0]);
  for (var o = 1; o < e.length; o++)
    i += li(n, r, e[o]), a && (i += s[o]);
  hf.lastIndex = 0;
  for (var c = "", d; (d = hf.exec(i)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    d[1];
  var u = Ok(i) + c;
  return {
    name: u,
    styles: i,
    next: Ut
  };
}, Ak = M1, Fk = function(e) {
  return e !== "theme";
}, gf = function(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96 ? Ak : Fk;
}, mf = function(e, r, n) {
  var a;
  if (r) {
    var i = r.shouldForwardProp;
    a = e.__emotion_forwardProp && i ? function(s) {
      return e.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof a != "function" && n && (a = e.__emotion_forwardProp), a;
}, Lk = typeof document < "u", Wk = function(e) {
  var r = e.cache, n = e.serialized, a = e.isStringTag;
  Bg(r, n, a);
  var i = jg(function() {
    return _k(r, n, a);
  });
  if (!Lk && i !== void 0) {
    for (var s, o = n.name, l = n.next; l !== void 0; )
      o += " " + l.name, l = l.next;
    return /* @__PURE__ */ ur("style", (s = {}, s["data-emotion"] = r.key + " " + o, s.dangerouslySetInnerHTML = {
      __html: i
    }, s.nonce = r.sheet.nonce, s));
  }
  return null;
}, $k = function t(e, r) {
  var n = e.__emotion_real === e, a = n && e.__emotion_base || e, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var o = mf(e, r, n), l = o || gf(a), c = !l("as");
  return function() {
    var d = arguments, u = n && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
    if (i !== void 0 && u.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      u.push.apply(u, d);
    else {
      u.push(d[0][0]);
      for (var f = d.length, h = 1; h < f; h++)
        u.push(d[h], d[0][h]);
    }
    var g = Oc(function(m, p, w) {
      var b = c && m.as || a, k = "", v = [], x = m;
      if (m.theme == null) {
        x = {};
        for (var _ in m)
          x[_] = m[_];
        x.theme = rt(Sc);
      }
      typeof m.className == "string" ? k = kk(p.registered, v, m.className) : m.className != null && (k = m.className + " ");
      var T = Ik(u.concat(v), p.registered, x);
      k += p.key + "-" + T.name, s !== void 0 && (k += " " + s);
      var S = c && o === void 0 ? gf(b) : l, C = {};
      for (var D in m)
        c && D === "as" || // $FlowFixMe
        S(D) && (C[D] = m[D]);
      return C.className = k, C.ref = w, /* @__PURE__ */ ur(Yh, null, /* @__PURE__ */ ur(Wk, {
        cache: p,
        serialized: T,
        isStringTag: typeof b == "string"
      }), /* @__PURE__ */ ur(b, C));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", g.defaultProps = e.defaultProps, g.__emotion_real = g, g.__emotion_base = a, g.__emotion_styles = u, g.__emotion_forwardProp = o, Object.defineProperty(g, "toString", {
      value: function() {
        return "." + s;
      }
    }), g.withComponent = function(m, p) {
      return t(m, Rl({}, r, p, {
        shouldForwardProp: mf(g, p, true)
      })).apply(void 0, u);
    }, g;
  };
}, zk = [
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
], it = $k.bind();
zk.forEach(function(t6) {
  it[t6] = it(t6);
});
var Ug = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t6) {
  (function() {
    var e = {}.hasOwnProperty;
    function r() {
      for (var n = [], a = 0; a < arguments.length; a++) {
        var i = arguments[a];
        if (i) {
          var s = typeof i;
          if (s === "string" || s === "number")
            n.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var o = r.apply(null, i);
              o && n.push(o);
            }
          } else if (s === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              n.push(i.toString());
              continue;
            }
            for (var l in i)
              e.call(i, l) && i[l] && n.push(l);
          }
        }
      }
      return n.join(" ");
    }
    t6.exports ? (r.default = r, t6.exports = r) : window.classNames = r;
  })();
})(Ug);
var et = Ug.exports, jk = ee.createContext(void 0), Hk = function() {
  var t6 = ee.useContext(jk);
  return t6;
}, Bk = function(t6) {
  var e = ee.useState(!!t6 && typeof window < "u" && window.matchMedia(t6).matches), r = e[0], n = e[1];
  return ee.useEffect(function() {
    if (t6) {
      var a = window.matchMedia(t6), i = function() {
        a.matches !== r && n(a.matches);
      };
      return i(), a.addEventListener("change", i), function() {
        return a.removeEventListener("change", i);
      };
    }
  }, [r, t6]), r;
}, He = {
  root: "ps-sidebar-root",
  container: "ps-sidebar-container",
  image: "ps-sidebar-image",
  backdrop: "ps-sidebar-backdrop",
  collapsed: "ps-collapsed",
  toggled: "ps-toggled",
  rtl: "ps-rtl",
  broken: "ps-broken"
}, ye = {
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
}, Yk = it.div(bf || (bf = pt([`
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
`]))), bf, Vk = {
  xs: "480px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1600px",
  always: "always",
  all: "all"
}, qk = it.aside(yf || (yf = pt([`
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
`])), function(t6) {
  var e = t6.transitionDuration;
  return "width, left, right, ".concat(e, "ms");
}, function(t6) {
  var e = t6.width;
  return e;
}, function(t6) {
  var e = t6.width;
  return e;
}, He.collapsed, function(t6) {
  var e = t6.collapsedWidth;
  return e;
}, function(t6) {
  var e = t6.collapsedWidth;
  return e;
}, He.rtl, He.broken, function(t6) {
  var e = t6.rtl, r = t6.width;
  return e ? "" : "left: -".concat(r, ";");
}, He.collapsed, function(t6) {
  var e = t6.rtl, r = t6.collapsedWidth;
  return e ? "" : "left: -".concat(r, "; ");
}, He.toggled, function(t6) {
  var e = t6.rtl;
  return e ? "" : "left: 0;";
}, He.rtl, function(t6) {
  var e = t6.width;
  return e;
}, He.collapsed, function(t6) {
  var e = t6.collapsedWidth;
  return e;
}, He.toggled, function(t6) {
  var e = t6.rootStyles;
  return e;
}), Uk = it.div(vf || (vf = pt([`
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
`])), function(t6) {
  var e = t6.backgroundColor;
  return e ? "background-color:".concat(e, ";") : "";
}), Xk = it.img(xf || (xf = pt([`
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
`])), He.image), go = ee.createContext({
  collapsed: false,
  toggled: false,
  rtl: false,
  transitionDuration: 300
}); ee.forwardRef(function(t6, e) {
  var r, n = t6.collapsed, a = t6.toggled, i = t6.onBackdropClick, s = t6.onBreakPoint, o = t6.width, l = o === void 0 ? "250px" : o, c = t6.collapsedWidth, d = c === void 0 ? "80px" : c, u = t6.defaultCollapsed, f = t6.className, h = t6.children, g = t6.breakPoint, m = t6.customBreakPoint, p = t6.backgroundColor, w = p === void 0 ? "rgb(249, 249, 249, 0.7)" : p, b = t6.transitionDuration, k = b === void 0 ? 300 : b, v = t6.image, x = t6.rtl, _ = t6.rootStyles, T = Tn(t6, ["collapsed", "toggled", "onBackdropClick", "onBreakPoint", "width", "collapsedWidth", "defaultCollapsed", "className", "children", "breakPoint", "customBreakPoint", "backgroundColor", "transitionDuration", "image", "rtl", "rootStyles"]), S = function() {
    if (m)
      return "(max-width: ".concat(m, ")");
    if (g)
      return ["xs", "sm", "md", "lg", "xl", "xxl"].includes(g) ? "(max-width: ".concat(Vk[g], ")") : g === "always" || g === "all" ? (g === "always" && console.warn('The "always" breakPoint is deprecated and will be removed in future release. Please use the "all" breakPoint instead.'), "screen") : "(max-width: ".concat(g, ")");
  }, C = ee.useRef();
  C.current = function(U) {
    s == null || s(U);
  };
  var D = Bk(S()), z = ee.useState(false), A = z[0], L = z[1], M = Hk(), I = n ?? (!A && u ? true : M == null ? void 0 : M.collapsed), W = a ?? (M == null ? void 0 : M.toggled), B = function() {
    i == null || i(), M == null || M.updateSidebarState({ toggled: false });
  };
  return ee.useEffect(function() {
    var U;
    (U = C.current) === null || U === void 0 || U.call(C, D);
  }, [D]), ee.useEffect(function() {
    M == null || M.updateSidebarState({ broken: D, rtl: x, transitionDuration: k });
  }, [D, M == null ? void 0 : M.updateSidebarState, x, k]), ee.useEffect(function() {
    A || (M == null || M.updateSidebarState({
      collapsed: u
    }), L(true));
  }, [u, A, M == null ? void 0 : M.updateSidebarState]), ee.createElement(
    go.Provider,
    { value: { collapsed: I, toggled: W, rtl: x, transitionDuration: k } },
    ee.createElement(
      qk,
      At({ ref: e, "data-testid": "".concat(He.root, "-test-id"), rtl: x, rootStyles: _, width: l, collapsedWidth: d, transitionDuration: k, className: et(He.root, (r = {}, r[He.collapsed] = I, r[He.toggled] = W, r[He.broken] = D, r[He.rtl] = x, r), f) }, T),
      ee.createElement(Uk, { "data-testid": "".concat(He.container, "-test-id"), className: He.container, backgroundColor: w }, h),
      v && ee.createElement(Xk, { "data-testid": "".concat(He.image, "-test-id"), src: v, alt: "sidebar background", className: He.image }),
      D && W && ee.createElement(Yk, { "data-testid": "".concat(He.backdrop, "-test-id"), role: "button", tabIndex: 0, "aria-label": "backdrop", onClick: B, onKeyPress: B, className: He.backdrop })
    )
  );
}); var yf, vf, xf, Xg = it.ul(wf || (wf = pt([`
  list-style-type: none;
  padding: 0;
  margin: 0;
`], [`
  list-style-type: none;
  padding: 0;
  margin: 0;
`]))), wf, Kk = it.nav(kf || (kf = pt([`
  &.`, ` {
    `, `
  }
`], [`
  &.`, ` {
    `, `
  }
`])), ye.root, function(t6) {
  var e = t6.rootStyles;
  return e;
}), Gg = ee.createContext(void 0), Ns = ee.createContext(0), Qk = function(t6, e) {
  var r = t6.children, n = t6.className, a = t6.transitionDuration, i = a === void 0 ? 300 : a, s = t6.closeOnClick, o = s === void 0 ? false : s, l = t6.rootStyles, c = t6.menuItemStyles, d = t6.renderExpandIcon, u = Tn(t6, ["children", "className", "transitionDuration", "closeOnClick", "rootStyles", "menuItemStyles", "renderExpandIcon"]), f = ee.useMemo(function() {
    return { transitionDuration: i, closeOnClick: o, menuItemStyles: c, renderExpandIcon: d };
  }, [i, o, c, d]);
  return ee.createElement(
    Gg.Provider,
    { value: f },
    ee.createElement(
      Ns.Provider,
      { value: 0 },
      ee.createElement(
        Kk,
        At({ ref: e, className: et(ye.root, n), rootStyles: l }, u),
        ee.createElement(Xg, null, r)
      )
    )
  );
}; ee.forwardRef(Qk); var kf, Mc = function() {
  var t6 = ee.useContext(Gg);
  if (t6 === void 0)
    throw new Error("Menu Component is required!");
  return t6;
}, Zk = it.div(_f || (_f = pt([`
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
`])), function(t6) {
  var e = t6.transitionDuration;
  return e;
}, function(t6) {
  var e = t6.firstLevel, r = t6.collapsed;
  return e && r && `
     background-color: white;
     box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
     `;
}, function(t6) {
  var e = t6.defaultOpen;
  return e && "height: auto;display: block;";
}, function(t6) {
  var e = t6.collapsed, r = t6.firstLevel, n = t6.openWhenCollapsed;
  return e && r ? `
      position: fixed;
      padding-left: 0px;
      width: 200px;
      border-radius: 4px;
      height: auto!important;
      display: block!important;     
      transition: none!important;     
      visibility: `.concat(n ? "visible" : "hidden", `;
     `) : `
      position: static!important;
      transform: none!important;
      `;
}, function(t6) {
  var e = t6.rootStyles;
  return e;
}), e_ = function(t6, e) {
  var r = t6.children, n = t6.open, a = t6.openWhenCollapsed, i = t6.firstLevel, s = t6.collapsed, o = t6.defaultOpen, l = Tn(t6, ["children", "open", "openWhenCollapsed", "firstLevel", "collapsed", "defaultOpen"]), c = Mc().transitionDuration, d = ee.useState(o)[0];
  return ee.createElement(
    Zk,
    At({ "data-testid": "".concat(ye.subMenuContent, "-test-id"), ref: e, firstLevel: i, collapsed: s, open: n, openWhenCollapsed: a, transitionDuration: c, defaultOpen: d }, l),
    ee.createElement(Xg, null, r)
  );
}, t_ = ee.forwardRef(e_), _f, Kg = it.span(Of || (Of = pt([`
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
`])), function(t6) {
  var e = t6.rootStyles;
  return e;
}), Of, Qg = it.span(Sf || (Sf = pt([`
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
`])), function(t6) {
  var e = t6.rtl;
  return e ? "margin-left: 10px;" : "margin-right: 10px;";
}, function(t6) {
  var e = t6.rootStyles;
  return e;
}), Sf, Jg = it.span(Df || (Df = pt([`
  `, `
  opacity: `, `;
  transition: opacity `, `ms;

  `, `;
`], [`
  `, `
  opacity: `, `;
  transition: opacity `, `ms;

  `, `;
`])), function(t6) {
  var e = t6.rtl;
  return e ? "margin-left: 5px;" : "margin-right: 5px;";
}, function(t6) {
  var e = t6.firstLevel, r = t6.collapsed;
  return e && r ? "0" : "1";
}, function(t6) {
  var e = t6.transitionDuration;
  return e;
}, function(t6) {
  var e = t6.rootStyles;
  return e;
}), Df, Zg = it.span(Mf || (Mf = pt([`
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
`])), function(t6) {
  var e = t6.firstLevel, r = t6.collapsed;
  return e && r ? "0" : "1";
}, function(t6) {
  var e = t6.transitionDuration;
  return e;
}, function(t6) {
  var e = t6.rootStyles;
  return e;
}), Mf, r_ = it.span(Cf || (Cf = pt([`
  `, `

  `, `;
`], [`
  `, `

  `, `;
`])), function(t6) {
  var e = t6.collapsed, r = t6.level, n = t6.rtl;
  return e && r === 0 && `
    position: absolute;
    `.concat(n ? "left: 10px;" : "right: 10px;", `
    top: 50%;
    transform: translateY(-50%);
    
    `);
}, function(t6) {
  var e = t6.rootStyles;
  return e;
}), n_ = it.span(Ef || (Ef = pt([`
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
`])), function(t6) {
  var e = t6.rtl;
  return e ? `
          border-left: 2px solid currentcolor;
          border-top: 2px solid currentcolor;
        ` : ` border-right: 2px solid currentcolor;
          border-bottom: 2px solid currentcolor;
        `;
}, function(t6) {
  var e = t6.open, r = t6.rtl;
  return e ? r ? "-135deg" : "45deg" : "-45deg";
}), a_ = it.span(Tf || (Tf = pt([`
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
`]))), Cf, Ef, Tf, Ot = "top", Ht = "bottom", Bt = "right", St = "left", mo = "auto", bi = [Ot, Ht, Bt, St], aa = "start", ci = "end", i_ = "clippingParents", e0 = "viewport", Ma = "popper", s_ = "reference", Pf = /* @__PURE__ */ bi.reduce(function(t6, e) {
  return t6.concat([e + "-" + aa, e + "-" + ci]);
}, []), t0 = /* @__PURE__ */ [].concat(bi, [mo]).reduce(function(t6, e) {
  return t6.concat([e, e + "-" + aa, e + "-" + ci]);
}, []), o_ = "beforeRead", l_ = "read", c_ = "afterRead", d_ = "beforeMain", u_ = "main", f_ = "afterMain", h_ = "beforeWrite", g_ = "write", m_ = "afterWrite", Ll = [o_, l_, c_, d_, u_, f_, h_, g_, m_];
function yr(t6) {
  return t6 ? (t6.nodeName || "").toLowerCase() : null;
}
function Vt(t6) {
  if (t6 == null)
    return window;
  if (t6.toString() !== "[object Window]") {
    var e = t6.ownerDocument;
    return e && e.defaultView || window;
  }
  return t6;
}
function Pn(t6) {
  var e = Vt(t6).Element;
  return t6 instanceof e || t6 instanceof Element;
}
function Lt(t6) {
  var e = Vt(t6).HTMLElement;
  return t6 instanceof e || t6 instanceof HTMLElement;
}
function Cc(t6) {
  if (typeof ShadowRoot > "u")
    return false;
  var e = Vt(t6).ShadowRoot;
  return t6 instanceof e || t6 instanceof ShadowRoot;
}
function p_(t6) {
  var e = t6.state;
  Object.keys(e.elements).forEach(function(r) {
    var n = e.styles[r] || {}, a = e.attributes[r] || {}, i = e.elements[r];
    !Lt(i) || !yr(i) || (Object.assign(i.style, n), Object.keys(a).forEach(function(s) {
      var o = a[s];
      o === false ? i.removeAttribute(s) : i.setAttribute(s, o === true ? "" : o);
    }));
  });
}
function b_(t6) {
  var e = t6.state, r = {
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
  return Object.assign(e.elements.popper.style, r.popper), e.styles = r, e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow), function() {
    Object.keys(e.elements).forEach(function(n) {
      var a = e.elements[n], i = e.attributes[n] || {}, s = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : r[n]), o = s.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !Lt(a) || !yr(a) || (Object.assign(a.style, o), Object.keys(i).forEach(function(l) {
        a.removeAttribute(l);
      }));
    });
  };
}
var y_ = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: p_,
  effect: b_,
  requires: ["computeStyles"]
};
function Xt(t6) {
  return t6.split("-")[0];
}
var Sn = Math.max, Is = Math.min, ia = Math.round;
function Wl() {
  var t6 = navigator.userAgentData;
  return t6 != null && t6.brands ? t6.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function r0() {
  return !/^((?!chrome|android).)*safari/i.test(Wl());
}
function sa(t6, e, r) {
  e === void 0 && (e = false), r === void 0 && (r = false);
  var n = t6.getBoundingClientRect(), a = 1, i = 1;
  e && Lt(t6) && (a = t6.offsetWidth > 0 && ia(n.width) / t6.offsetWidth || 1, i = t6.offsetHeight > 0 && ia(n.height) / t6.offsetHeight || 1);
  var s = Pn(t6) ? Vt(t6) : window, o = s.visualViewport, l = !r0() && r, c = (n.left + (l && o ? o.offsetLeft : 0)) / a, d = (n.top + (l && o ? o.offsetTop : 0)) / i, u = n.width / a, f = n.height / i;
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
function Ec(t6) {
  var e = sa(t6), r = t6.offsetWidth, n = t6.offsetHeight;
  return Math.abs(e.width - r) <= 1 && (r = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
    x: t6.offsetLeft,
    y: t6.offsetTop,
    width: r,
    height: n
  };
}
function n0(t6, e) {
  var r = e.getRootNode && e.getRootNode();
  if (t6.contains(e))
    return true;
  if (r && Cc(r)) {
    var n = e;
    do {
      if (n && t6.isSameNode(n))
        return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
function Qt(t6) {
  return Vt(t6).getComputedStyle(t6);
}
function v_(t6) {
  return ["table", "td", "th"].indexOf(yr(t6)) >= 0;
}
function Zr(t6) {
  return ((Pn(t6) ? t6.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t6.document
  )) || window.document).documentElement;
}
function po(t6) {
  return yr(t6) === "html" ? t6 : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t6.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t6.parentNode || // DOM Element detected
    (Cc(t6) ? t6.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Zr(t6)
  );
}
function Rf(t6) {
  return !Lt(t6) || // https://github.com/popperjs/popper-core/issues/837
  Qt(t6).position === "fixed" ? null : t6.offsetParent;
}
function x_(t6) {
  var e = /firefox/i.test(Wl()), r = /Trident/i.test(Wl());
  if (r && Lt(t6)) {
    var n = Qt(t6);
    if (n.position === "fixed")
      return null;
  }
  var a = po(t6);
  for (Cc(a) && (a = a.host); Lt(a) && ["html", "body"].indexOf(yr(a)) < 0; ) {
    var i = Qt(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function yi(t6) {
  for (var e = Vt(t6), r = Rf(t6); r && v_(r) && Qt(r).position === "static"; )
    r = Rf(r);
  return r && (yr(r) === "html" || yr(r) === "body" && Qt(r).position === "static") ? e : r || x_(t6) || e;
}
function Tc(t6) {
  return ["top", "bottom"].indexOf(t6) >= 0 ? "x" : "y";
}
function Xa(t6, e, r) {
  return Sn(t6, Is(e, r));
}
function w_(t6, e, r) {
  var n = Xa(t6, e, r);
  return n > r ? r : n;
}
function a0() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function i0(t6) {
  return Object.assign({}, a0(), t6);
}
function s0(t6, e) {
  return e.reduce(function(r, n) {
    return r[n] = t6, r;
  }, {});
}
var k_ = function(e, r) {
  return e = typeof e == "function" ? e(Object.assign({}, r.rects, {
    placement: r.placement
  })) : e, i0(typeof e != "number" ? e : s0(e, bi));
};
function __(t6) {
  var e, r = t6.state, n = t6.name, a = t6.options, i = r.elements.arrow, s = r.modifiersData.popperOffsets, o = Xt(r.placement), l = Tc(o), c = [St, Bt].indexOf(o) >= 0, d = c ? "height" : "width";
  if (!(!i || !s)) {
    var u = k_(a.padding, r), f = Ec(i), h = l === "y" ? Ot : St, g = l === "y" ? Ht : Bt, m = r.rects.reference[d] + r.rects.reference[l] - s[l] - r.rects.popper[d], p = s[l] - r.rects.reference[l], w = yi(i), b = w ? l === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, k = m / 2 - p / 2, v = u[h], x = b - f[d] - u[g], _ = b / 2 - f[d] / 2 + k, T = Xa(v, _, x), S = l;
    r.modifiersData[n] = (e = {}, e[S] = T, e.centerOffset = T - _, e);
  }
}
function O_(t6) {
  var e = t6.state, r = t6.options, n = r.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  if (a != null && !(typeof a == "string" && (a = e.elements.popper.querySelector(a), !a))) {
    if (!n0(e.elements.popper, a)) {
      return;
    }
    e.elements.arrow = a;
  }
}
var S_ = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: __,
  effect: O_,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function oa(t6) {
  return t6.split("-")[1];
}
var D_ = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function M_(t6) {
  var e = t6.x, r = t6.y, n = window, a = n.devicePixelRatio || 1;
  return {
    x: ia(e * a) / a || 0,
    y: ia(r * a) / a || 0
  };
}
function Nf(t6) {
  var e, r = t6.popper, n = t6.popperRect, a = t6.placement, i = t6.variation, s = t6.offsets, o = t6.position, l = t6.gpuAcceleration, c = t6.adaptive, d = t6.roundOffsets, u = t6.isFixed, f = s.x, h = f === void 0 ? 0 : f, g = s.y, m = g === void 0 ? 0 : g, p = typeof d == "function" ? d({
    x: h,
    y: m
  }) : {
    x: h,
    y: m
  };
  h = p.x, m = p.y;
  var w = s.hasOwnProperty("x"), b = s.hasOwnProperty("y"), k = St, v = Ot, x = window;
  if (c) {
    var _ = yi(r), T = "clientHeight", S = "clientWidth";
    if (_ === Vt(r) && (_ = Zr(r), Qt(_).position !== "static" && o === "absolute" && (T = "scrollHeight", S = "scrollWidth")), _ = _, a === Ot || (a === St || a === Bt) && i === ci) {
      v = Ht;
      var C = u && _ === x && x.visualViewport ? x.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        _[T]
      );
      m -= C - n.height, m *= l ? 1 : -1;
    }
    if (a === St || (a === Ot || a === Ht) && i === ci) {
      k = Bt;
      var D = u && _ === x && x.visualViewport ? x.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        _[S]
      );
      h -= D - n.width, h *= l ? 1 : -1;
    }
  }
  var z = Object.assign({
    position: o
  }, c && D_), A = d === true ? M_({
    x: h,
    y: m
  }) : {
    x: h,
    y: m
  };
  if (h = A.x, m = A.y, l) {
    var L;
    return Object.assign({}, z, (L = {}, L[v] = b ? "0" : "", L[k] = w ? "0" : "", L.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + m + "px)" : "translate3d(" + h + "px, " + m + "px, 0)", L));
  }
  return Object.assign({}, z, (e = {}, e[v] = b ? m + "px" : "", e[k] = w ? h + "px" : "", e.transform = "", e));
}
function C_(t6) {
  var e = t6.state, r = t6.options, n = r.gpuAcceleration, a = n === void 0 ? true : n, i = r.adaptive, s = i === void 0 ? true : i, o = r.roundOffsets, l = o === void 0 ? true : o;
  var d = {
    placement: Xt(e.placement),
    variation: oa(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: a,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Nf(Object.assign({}, d, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Nf(Object.assign({}, d, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: l
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
var E_ = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: C_,
  data: {}
}, Ui = {
  passive: true
};
function T_(t6) {
  var e = t6.state, r = t6.instance, n = t6.options, a = n.scroll, i = a === void 0 ? true : a, s = n.resize, o = s === void 0 ? true : s, l = Vt(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return i && c.forEach(function(d) {
    d.addEventListener("scroll", r.update, Ui);
  }), o && l.addEventListener("resize", r.update, Ui), function() {
    i && c.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Ui);
    }), o && l.removeEventListener("resize", r.update, Ui);
  };
}
var P_ = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: T_,
  data: {}
}, R_ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function fs(t6) {
  return t6.replace(/left|right|bottom|top/g, function(e) {
    return R_[e];
  });
}
var N_ = {
  start: "end",
  end: "start"
};
function If(t6) {
  return t6.replace(/start|end/g, function(e) {
    return N_[e];
  });
}
function Pc(t6) {
  var e = Vt(t6), r = e.pageXOffset, n = e.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Rc(t6) {
  return sa(Zr(t6)).left + Pc(t6).scrollLeft;
}
function I_(t6, e) {
  var r = Vt(t6), n = Zr(t6), a = r.visualViewport, i = n.clientWidth, s = n.clientHeight, o = 0, l = 0;
  if (a) {
    i = a.width, s = a.height;
    var c = r0();
    (c || !c && e === "fixed") && (o = a.offsetLeft, l = a.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: o + Rc(t6),
    y: l
  };
}
function A_(t6) {
  var e, r = Zr(t6), n = Pc(t6), a = (e = t6.ownerDocument) == null ? void 0 : e.body, i = Sn(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), s = Sn(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), o = -n.scrollLeft + Rc(t6), l = -n.scrollTop;
  return Qt(a || r).direction === "rtl" && (o += Sn(r.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: o,
    y: l
  };
}
function Nc(t6) {
  var e = Qt(t6), r = e.overflow, n = e.overflowX, a = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function o0(t6) {
  return ["html", "body", "#document"].indexOf(yr(t6)) >= 0 ? t6.ownerDocument.body : Lt(t6) && Nc(t6) ? t6 : o0(po(t6));
}
function Ga(t6, e) {
  var r;
  e === void 0 && (e = []);
  var n = o0(t6), a = n === ((r = t6.ownerDocument) == null ? void 0 : r.body), i = Vt(n), s = a ? [i].concat(i.visualViewport || [], Nc(n) ? n : []) : n, o = e.concat(s);
  return a ? o : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    o.concat(Ga(po(s)))
  );
}
function $l(t6) {
  return Object.assign({}, t6, {
    left: t6.x,
    top: t6.y,
    right: t6.x + t6.width,
    bottom: t6.y + t6.height
  });
}
function F_(t6, e) {
  var r = sa(t6, false, e === "fixed");
  return r.top = r.top + t6.clientTop, r.left = r.left + t6.clientLeft, r.bottom = r.top + t6.clientHeight, r.right = r.left + t6.clientWidth, r.width = t6.clientWidth, r.height = t6.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Af(t6, e, r) {
  return e === e0 ? $l(I_(t6, r)) : Pn(e) ? F_(e, r) : $l(A_(Zr(t6)));
}
function L_(t6) {
  var e = Ga(po(t6)), r = ["absolute", "fixed"].indexOf(Qt(t6).position) >= 0, n = r && Lt(t6) ? yi(t6) : t6;
  return Pn(n) ? e.filter(function(a) {
    return Pn(a) && n0(a, n) && yr(a) !== "body";
  }) : [];
}
function W_(t6, e, r, n) {
  var a = e === "clippingParents" ? L_(t6) : [].concat(e), i = [].concat(a, [r]), s = i[0], o = i.reduce(function(l, c) {
    var d = Af(t6, c, n);
    return l.top = Sn(d.top, l.top), l.right = Is(d.right, l.right), l.bottom = Is(d.bottom, l.bottom), l.left = Sn(d.left, l.left), l;
  }, Af(t6, s, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function l0(t6) {
  var e = t6.reference, r = t6.element, n = t6.placement, a = n ? Xt(n) : null, i = n ? oa(n) : null, s = e.x + e.width / 2 - r.width / 2, o = e.y + e.height / 2 - r.height / 2, l;
  switch (a) {
    case Ot:
      l = {
        x: s,
        y: e.y - r.height
      };
      break;
    case Ht:
      l = {
        x: s,
        y: e.y + e.height
      };
      break;
    case Bt:
      l = {
        x: e.x + e.width,
        y: o
      };
      break;
    case St:
      l = {
        x: e.x - r.width,
        y: o
      };
      break;
    default:
      l = {
        x: e.x,
        y: e.y
      };
  }
  var c = a ? Tc(a) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (i) {
      case aa:
        l[c] = l[c] - (e[d] / 2 - r[d] / 2);
        break;
      case ci:
        l[c] = l[c] + (e[d] / 2 - r[d] / 2);
        break;
    }
  }
  return l;
}
function di(t6, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, a = n === void 0 ? t6.placement : n, i = r.strategy, s = i === void 0 ? t6.strategy : i, o = r.boundary, l = o === void 0 ? i_ : o, c = r.rootBoundary, d = c === void 0 ? e0 : c, u = r.elementContext, f = u === void 0 ? Ma : u, h = r.altBoundary, g = h === void 0 ? false : h, m = r.padding, p = m === void 0 ? 0 : m, w = i0(typeof p != "number" ? p : s0(p, bi)), b = f === Ma ? s_ : Ma, k = t6.rects.popper, v = t6.elements[g ? b : f], x = W_(Pn(v) ? v : v.contextElement || Zr(t6.elements.popper), l, d, s), _ = sa(t6.elements.reference), T = l0({
    reference: _,
    element: k,
    placement: a
  }), S = $l(Object.assign({}, k, T)), C = f === Ma ? S : _, D = {
    top: x.top - C.top + w.top,
    bottom: C.bottom - x.bottom + w.bottom,
    left: x.left - C.left + w.left,
    right: C.right - x.right + w.right
  }, z = t6.modifiersData.offset;
  if (f === Ma && z) {
    var A = z[a];
    Object.keys(D).forEach(function(L) {
      var M = [Bt, Ht].indexOf(L) >= 0 ? 1 : -1, I = [Ot, Ht].indexOf(L) >= 0 ? "y" : "x";
      D[L] += A[I] * M;
    });
  }
  return D;
}
function $_(t6, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, a = r.boundary, i = r.rootBoundary, s = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? t0 : l, d = oa(n), u = d ? o ? Pf : Pf.filter(function(g) {
    return oa(g) === d;
  }) : bi, f = u.filter(function(g) {
    return c.indexOf(g) >= 0;
  });
  f.length === 0 && (f = u, false);
  var h = f.reduce(function(g, m) {
    return g[m] = di(t6, {
      placement: m,
      boundary: a,
      rootBoundary: i,
      padding: s
    })[Xt(m)], g;
  }, {});
  return Object.keys(h).sort(function(g, m) {
    return h[g] - h[m];
  });
}
function z_(t6) {
  if (Xt(t6) === mo)
    return [];
  var e = fs(t6);
  return [If(t6), e, If(e)];
}
function j_(t6) {
  var e = t6.state, r = t6.options, n = t6.name;
  if (!e.modifiersData[n]._skip) {
    for (var a = r.mainAxis, i = a === void 0 ? true : a, s = r.altAxis, o = s === void 0 ? true : s, l = r.fallbackPlacements, c = r.padding, d = r.boundary, u = r.rootBoundary, f = r.altBoundary, h = r.flipVariations, g = h === void 0 ? true : h, m = r.allowedAutoPlacements, p = e.options.placement, w = Xt(p), b = w === p, k = l || (b || !g ? [fs(p)] : z_(p)), v = [p].concat(k).reduce(function(P, O) {
      return P.concat(Xt(O) === mo ? $_(e, {
        placement: O,
        boundary: d,
        rootBoundary: u,
        padding: c,
        flipVariations: g,
        allowedAutoPlacements: m
      }) : O);
    }, []), x = e.rects.reference, _ = e.rects.popper, T = /* @__PURE__ */ new Map(), S = true, C = v[0], D = 0; D < v.length; D++) {
      var z = v[D], A = Xt(z), L = oa(z) === aa, M = [Ot, Ht].indexOf(A) >= 0, I = M ? "width" : "height", W = di(e, {
        placement: z,
        boundary: d,
        rootBoundary: u,
        altBoundary: f,
        padding: c
      }), B = M ? L ? Bt : St : L ? Ht : Ot;
      x[I] > _[I] && (B = fs(B));
      var U = fs(B), J = [];
      if (i && J.push(W[A] <= 0), o && J.push(W[B] <= 0, W[U] <= 0), J.every(function(P) {
        return P;
      })) {
        C = z, S = false;
        break;
      }
      T.set(z, J);
    }
    if (S)
      for (var E = g ? 3 : 1, j = function(O) {
        var F = v.find(function(X) {
          var q = T.get(X);
          if (q)
            return q.slice(0, O).every(function(G) {
              return G;
            });
        });
        if (F)
          return C = F, "break";
      }, N = E; N > 0; N--) {
        var R = j(N);
        if (R === "break") break;
      }
    e.placement !== C && (e.modifiersData[n]._skip = true, e.placement = C, e.reset = true);
  }
}
var H_ = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: j_,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function Ff(t6, e, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: t6.top - e.height - r.y,
    right: t6.right - e.width + r.x,
    bottom: t6.bottom - e.height + r.y,
    left: t6.left - e.width - r.x
  };
}
function Lf(t6) {
  return [Ot, Bt, Ht, St].some(function(e) {
    return t6[e] >= 0;
  });
}
function B_(t6) {
  var e = t6.state, r = t6.name, n = e.rects.reference, a = e.rects.popper, i = e.modifiersData.preventOverflow, s = di(e, {
    elementContext: "reference"
  }), o = di(e, {
    altBoundary: true
  }), l = Ff(s, n), c = Ff(o, a, i), d = Lf(l), u = Lf(c);
  e.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: u
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": u
  });
}
var Y_ = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: B_
};
function V_(t6, e, r) {
  var n = Xt(t6), a = [St, Ot].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, e, {
    placement: t6
  })) : r, s = i[0], o = i[1];
  return s = s || 0, o = (o || 0) * a, [St, Bt].indexOf(n) >= 0 ? {
    x: o,
    y: s
  } : {
    x: s,
    y: o
  };
}
function q_(t6) {
  var e = t6.state, r = t6.options, n = t6.name, a = r.offset, i = a === void 0 ? [0, 0] : a, s = t0.reduce(function(d, u) {
    return d[u] = V_(u, e.rects, i), d;
  }, {}), o = s[e.placement], l = o.x, c = o.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = s;
}
var U_ = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: q_
};
function X_(t6) {
  var e = t6.state, r = t6.name;
  e.modifiersData[r] = l0({
    reference: e.rects.reference,
    element: e.rects.popper,
    placement: e.placement
  });
}
var G_ = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: X_,
  data: {}
};
function K_(t6) {
  return t6 === "x" ? "y" : "x";
}
function Q_(t6) {
  var e = t6.state, r = t6.options, n = t6.name, a = r.mainAxis, i = a === void 0 ? true : a, s = r.altAxis, o = s === void 0 ? false : s, l = r.boundary, c = r.rootBoundary, d = r.altBoundary, u = r.padding, f = r.tether, h = f === void 0 ? true : f, g = r.tetherOffset, m = g === void 0 ? 0 : g, p = di(e, {
    boundary: l,
    rootBoundary: c,
    padding: u,
    altBoundary: d
  }), w = Xt(e.placement), b = oa(e.placement), k = !b, v = Tc(w), x = K_(v), _ = e.modifiersData.popperOffsets, T = e.rects.reference, S = e.rects.popper, C = typeof m == "function" ? m(Object.assign({}, e.rects, {
    placement: e.placement
  })) : m, D = typeof C == "number" ? {
    mainAxis: C,
    altAxis: C
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, C), z = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, A = {
    x: 0,
    y: 0
  };
  if (_) {
    if (i) {
      var L, M = v === "y" ? Ot : St, I = v === "y" ? Ht : Bt, W = v === "y" ? "height" : "width", B = _[v], U = B + p[M], J = B - p[I], E = h ? -S[W] / 2 : 0, j = b === aa ? T[W] : S[W], N = b === aa ? -S[W] : -T[W], R = e.elements.arrow, P = h && R ? Ec(R) : {
        width: 0,
        height: 0
      }, O = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : a0(), F = O[M], X = O[I], q = Xa(0, T[W], P[W]), G = k ? T[W] / 2 - E - q - F - D.mainAxis : j - q - F - D.mainAxis, Z = k ? -T[W] / 2 + E + q + X + D.mainAxis : N + q + X + D.mainAxis, ne = e.elements.arrow && yi(e.elements.arrow), H = ne ? v === "y" ? ne.clientTop || 0 : ne.clientLeft || 0 : 0, ae = (L = z == null ? void 0 : z[v]) != null ? L : 0, re = B + G - ae - H, le = B + Z - ae, fe = Xa(h ? Is(U, re) : U, B, h ? Sn(J, le) : J);
      _[v] = fe, A[v] = fe - B;
    }
    if (o) {
      var de, ie = v === "x" ? Ot : St, $e = v === "x" ? Ht : Bt, ge = _[x], Fe = x === "y" ? "height" : "width", je = ge + p[ie], Ye = ge - p[$e], Et = [Ot, St].indexOf(w) !== -1, Tt = (de = z == null ? void 0 : z[x]) != null ? de : 0, Pt = Et ? je : ge - T[Fe] - S[Fe] - Tt + D.altAxis, Wr = Et ? ge + T[Fe] + S[Fe] - Tt - D.altAxis : Ye, Rt = h && Et ? w_(Pt, ge, Wr) : Xa(h ? Pt : je, ge, h ? Wr : Ye);
      _[x] = Rt, A[x] = Rt - ge;
    }
    e.modifiersData[n] = A;
  }
}
var J_ = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: Q_,
  requiresIfExists: ["offset"]
};
function Z_(t6) {
  return {
    scrollLeft: t6.scrollLeft,
    scrollTop: t6.scrollTop
  };
}
function eO(t6) {
  return t6 === Vt(t6) || !Lt(t6) ? Pc(t6) : Z_(t6);
}
function tO(t6) {
  var e = t6.getBoundingClientRect(), r = ia(e.width) / t6.offsetWidth || 1, n = ia(e.height) / t6.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function rO(t6, e, r) {
  r === void 0 && (r = false);
  var n = Lt(e), a = Lt(e) && tO(e), i = Zr(e), s = sa(t6, a, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((yr(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Nc(i)) && (o = eO(e)), Lt(e) ? (l = sa(e, true), l.x += e.clientLeft, l.y += e.clientTop) : i && (l.x = Rc(i))), {
    x: s.left + o.scrollLeft - l.x,
    y: s.top + o.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function nO(t6) {
  var e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  t6.forEach(function(i) {
    e.set(i.name, i);
  });
  function a(i) {
    r.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(o) {
      if (!r.has(o)) {
        var l = e.get(o);
        l && a(l);
      }
    }), n.push(i);
  }
  return t6.forEach(function(i) {
    r.has(i.name) || a(i);
  }), n;
}
function aO(t6) {
  var e = nO(t6);
  return Ll.reduce(function(r, n) {
    return r.concat(e.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
function iO(t6) {
  var e;
  return function() {
    return e || (e = new Promise(function(r) {
      Promise.resolve().then(function() {
        e = void 0, r(t6());
      });
    })), e;
  };
}
function cO(t6) {
  var e = t6.reduce(function(r, n) {
    var a = r[n.name];
    return r[n.name] = a ? Object.assign({}, a, n, {
      options: Object.assign({}, a.options, n.options),
      data: Object.assign({}, a.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}
var zf = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function jf() {
  for (var t6 = arguments.length, e = new Array(t6), r = 0; r < t6; r++)
    e[r] = arguments[r];
  return !e.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function uO(t6) {
  t6 === void 0 && (t6 = {});
  var e = t6, r = e.defaultModifiers, n = r === void 0 ? [] : r, a = e.defaultOptions, i = a === void 0 ? zf : a;
  return function(o, l, c) {
    c === void 0 && (c = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, zf, i),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, u = [], f = false, h = {
      state: d,
      setOptions: function(w) {
        var b = typeof w == "function" ? w(d.options) : w;
        m(), d.options = Object.assign({}, i, d.options, b), d.scrollParents = {
          reference: Pn(o) ? Ga(o) : o.contextElement ? Ga(o.contextElement) : [],
          popper: Ga(l)
        };
        var k = aO(cO([].concat(n, d.options.modifiers)));
        if (d.orderedModifiers = k.filter(function(z) {
          return z.enabled;
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
          var w = d.elements, b = w.reference, k = w.popper;
          if (!jf(b, k)) {
            return;
          }
          d.rects = {
            reference: rO(b, yi(k), d.options.strategy === "fixed"),
            popper: Ec(k)
          }, d.reset = false, d.placement = d.options.placement, d.orderedModifiers.forEach(function(z) {
            return d.modifiersData[z.name] = Object.assign({}, z.data);
          });
          for (var v = 0, x = 0; x < d.orderedModifiers.length; x++) {
            if (d.reset === true) {
              d.reset = false, x = -1;
              continue;
            }
            var _ = d.orderedModifiers[x], T = _.fn, S = _.options, C = S === void 0 ? {} : S, D = _.name;
            typeof T == "function" && (d = T({
              state: d,
              options: C,
              name: D,
              instance: h
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: iO(function() {
        return new Promise(function(p) {
          h.forceUpdate(), p(d);
        });
      }),
      destroy: function() {
        m(), f = true;
      }
    };
    if (!jf(o, l))
      return h;
    h.setOptions(c).then(function(p) {
      !f && c.onFirstUpdate && c.onFirstUpdate(p);
    });
    function g() {
      d.orderedModifiers.forEach(function(p) {
        var w = p.name, b = p.options, k = b === void 0 ? {} : b, v = p.effect;
        if (typeof v == "function") {
          var x = v({
            state: d,
            name: w,
            instance: h,
            options: k
          }), _ = function() {
          };
          u.push(x || _);
        }
      });
    }
    function m() {
      u.forEach(function(p) {
        return p();
      }), u = [];
    }
    return h;
  };
}
var fO = [P_, G_, E_, y_, U_, H_, J_, S_, Y_], hO = /* @__PURE__ */ uO({
  defaultModifiers: fO
}), gO = function(t6) {
  var e = t6.level, r = t6.buttonRef, n = t6.contentRef, a = ee.useContext(go), i = a.collapsed, s = a.toggled, o = a.transitionDuration, l = ee.useRef();
  return ee.useEffect(function() {
    return e === 0 && i && n.current && r.current && (l.current = hO(r.current, n.current, {
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
  }, [e, i, n, r]), ee.useEffect(function() {
    if (n.current && r.current) {
      var c = new ResizeObserver(function() {
        var d;
        (d = l.current) === null || d === void 0 || d.update();
      });
      c.observe(n.current), c.observe(r.current);
    }
    setTimeout(function() {
      var d;
      (d = l.current) === null || d === void 0 || d.update();
    }, o);
  }, [o, s, n, r]), { popperInstance: l.current };
}, c0 = function(t6) {
  var e = t6.rtl, r = t6.level, n = t6.collapsed, a = t6.disabled, i = t6.active;
  return `
    display: flex;
    align-items: center;
    height: 50px;
    text-decoration: none;
    color: inherit;
    box-sizing: border-box;
    cursor: pointer;

    `.concat(e ? `padding-left: 20px;
           padding-right: `.concat(r === 0 ? 20 : (n ? r : r + 1) * 20, `px;
            `) : `padding-right: 20px;
           padding-left: `.concat(r === 0 ? 20 : (n ? r : r + 1) * 20, `px;
           `), `

    &:hover {
      background-color: #f3f3f3;
    }

    `).concat(a && ` 
      pointer-events: none;
      cursor: default;
      color:#adadad;
        `, `

    `).concat(i && "background-color: #e2eef9;", `
  
  `);
}, mO = function(t6, e) {
  var r = t6.className, n = t6.component, a = t6.children, i = Tn(t6, ["className", "component", "children"]);
  if (n) {
    if (typeof n == "string")
      return ee.createElement(n, At(At({ className: et(r) }, i), { ref: e }), a);
    var s = n.props, o = s.className, l = Tn(s, ["className"]);
    return ee.cloneElement(n, At(At(At({ className: et(r, o) }, i), l), { ref: e }), a);
  } else
    return ee.createElement("a", At({ ref: e, className: et(r) }, i), a);
}, d0 = ee.forwardRef(mO), pO = it.li(Hf || (Hf = pt([`
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
`])), function(t6) {
  var e = t6.menuItemStyles;
  return e;
}, function(t6) {
  var e = t6.rootStyles;
  return e;
}, ye.button, function(t6) {
  var e = t6.level, r = t6.disabled, n = t6.active, a = t6.collapsed, i = t6.rtl;
  return c0({
    level: e,
    disabled: r,
    active: n,
    collapsed: a,
    rtl: i
  });
}, function(t6) {
  var e = t6.buttonStyles;
  return e;
}), bO = function(t6, e) {
  var r, n = t6.children, a = t6.className, i = t6.label, s = t6.icon, o = t6.title, l = t6.prefix, c = t6.suffix, d = t6.open, u = t6.defaultOpen, f = t6.active, h = f === void 0 ? false : f, g = t6.disabled, m = g === void 0 ? false : g, p = t6.rootStyles, w = t6.component, b = t6.onOpenChange, k = t6.onClick, v = t6.onKeyUp, x = Tn(t6, ["children", "className", "label", "icon", "title", "prefix", "suffix", "open", "defaultOpen", "active", "disabled", "rootStyles", "component", "onOpenChange", "onClick", "onKeyUp"]), _ = ee.useContext(Ns), T = ee.useContext(go), S = T.collapsed, C = T.rtl, D = T.transitionDuration, z = Mc(), A = z.renderExpandIcon, L = z.closeOnClick, M = z.menuItemStyles, I = z.transitionDuration, W = ee.useState(!!u), B = W[0], U = W[1], J = ee.useState(false), E = J[0], j = J[1], N = ee.useState(false), R = N[0], P = N[1], O = ee.useRef(null), F = ee.useRef(null), X = ee.useRef(), q = gO({
    level: _,
    buttonRef: O,
    contentRef: F
  }).popperInstance, G = ee.useCallback(function() {
    var fe, de = F.current;
    if (de) {
      var ie = (fe = de == null ? void 0 : de.querySelector(".".concat(ye.subMenuContent, " > ul"))) === null || fe === void 0 ? void 0 : fe.clientHeight;
      de.style.overflow = "hidden", de.style.height = "".concat(ie, "px"), X.current = setTimeout(function() {
        de.style.overflow = "auto", de.style.height = "auto";
      }, I);
    }
  }, [I]), Z = function() {
    var fe, de = F.current;
    if (de) {
      var ie = (fe = de == null ? void 0 : de.querySelector(".".concat(ye.subMenuContent, " > ul"))) === null || fe === void 0 ? void 0 : fe.clientHeight;
      de.style.overflow = "hidden", de.style.height = "".concat(ie, "px"), de.offsetHeight, de.style.height = "0px";
    }
  }, ne = function() {
    _ === 0 && S || (typeof d > "u" ? (clearTimeout(Number(X.current)), B ? Z() : G(), b == null || b(!B), U(!B)) : b == null || b(!d));
  };
  ee.useEffect(function() {
    !(_ === 0 && S) && typeof d < "u" && R && (clearTimeout(Number(X.current)), d ? G() : Z());
  }, [S, G, i, _, b, d]);
  var H = function(fe) {
    k == null || k(fe), ne();
  }, ae = function(fe) {
    v == null || v(fe), fe.key === "Enter" && ne();
  }, re = function(fe) {
    if (M) {
      var de = { level: _, disabled: m, active: h, isSubmenu: true, open: d ?? B }, ie = M.root, $e = M.button, ge = M.label, Fe = M.icon, je = M.prefix, Ye = M.suffix, Et = M.subMenuContent, Tt = M.SubMenuExpandIcon;
      switch (fe) {
        case "root":
          return typeof ie == "function" ? ie(de) : ie;
        case "button":
          return typeof $e == "function" ? $e(de) : $e;
        case "label":
          return typeof ge == "function" ? ge(de) : ge;
        case "icon":
          return typeof Fe == "function" ? Fe(de) : Fe;
        case "prefix":
          return typeof je == "function" ? je(de) : je;
        case "suffix":
          return typeof Ye == "function" ? Ye(de) : Ye;
        case "SubMenuExpandIcon":
          return typeof Tt == "function" ? Tt(de) : Tt;
        case "subMenuContent":
          return typeof Et == "function" ? Et(de) : Et;
        default:
          return;
      }
    }
  };
  ee.useEffect(function() {
    setTimeout(function() {
      return q == null ? void 0 : q.update();
    }, D), S && _ === 0 && j(false);
  }, [S, _, C, D, q]), ee.useEffect(function() {
    var fe = function(ge) {
      var Fe, je, Ye;
      !E && (!((Fe = O.current) === null || Fe === void 0) && Fe.contains(ge)) ? j(true) : (L && !(!((je = ge.closest(".".concat(ye.menuItemRoot))) === null || je === void 0) && je.classList.contains(ye.subMenuRoot)) || !(!((Ye = F.current) === null || Ye === void 0) && Ye.contains(ge)) && E) && j(false);
    }, de = function(ge) {
      fe(ge.target);
    }, ie = function(ge) {
      ge.key === "Enter" ? fe(ge.target) : ge.key === "Escape" && j(false);
    }, $e = function() {
      document.removeEventListener("click", de), document.removeEventListener("keyup", ie);
    };
    return $e(), S && _ === 0 && (document.addEventListener("click", de, false), document.addEventListener("keyup", ie, false)), function() {
      $e();
    };
  }, [S, _, L, E]), ee.useEffect(function() {
    P(true);
  }, []);
  var le = (r = {}, r[ye.active] = h, r[ye.disabled] = m, r[ye.open] = d ?? B, r);
  return ee.createElement(
    pO,
    { ref: e, className: et(ye.menuItemRoot, ye.subMenuRoot, le, a), menuItemStyles: re("root"), level: _, collapsed: S, rtl: C, disabled: m, active: h, buttonStyles: re("button"), rootStyles: p },
    ee.createElement(
      d0,
      At({ "data-testid": "".concat(ye.button, "-test-id"), ref: O, title: o, className: et(ye.button, le), onClick: H, onKeyUp: ae, component: w, tabIndex: 0 }, x),
      s && ee.createElement(Qg, { rtl: C, className: et(ye.icon, le), rootStyles: re("icon") }, s),
      l && ee.createElement(Jg, { collapsed: S, transitionDuration: D, firstLevel: _ === 0, className: et(ye.prefix, le), rtl: C, rootStyles: re("prefix") }, l),
      ee.createElement(Kg, { className: et(ye.label, le), rootStyles: re("label") }, i),
      c && ee.createElement(Zg, { collapsed: S, transitionDuration: D, firstLevel: _ === 0, className: et(ye.suffix, le), rootStyles: re("suffix") }, c),
      ee.createElement(r_, { rtl: C, className: et(ye.SubMenuExpandIcon, le), collapsed: S, level: _, rootStyles: re("SubMenuExpandIcon") }, A ? A({
        level: _,
        disabled: m,
        active: h,
        open: d ?? B
      }) : S && _ === 0 ? ee.createElement(a_, null) : ee.createElement(n_, { rtl: C, open: d ?? B }))
    ),
    ee.createElement(
      t_,
      { ref: F, openWhenCollapsed: E, open: d ?? B, firstLevel: _ === 0, collapsed: S, defaultOpen: d && !R || u, className: et(ye.subMenuContent, le), rootStyles: re("subMenuContent") },
      ee.createElement(Ns.Provider, { value: _ + 1 }, n)
    )
  );
};
ee.forwardRef(bO);
var Hf, yO = it.li(Bf || (Bf = pt([`
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
`])), function(t6) {
  var e = t6.menuItemStyles;
  return e;
}, function(t6) {
  var e = t6.rootStyles;
  return e;
}, ye.button, function(t6) {
  var e = t6.level, r = t6.disabled, n = t6.active, a = t6.collapsed, i = t6.rtl;
  return c0({
    level: e,
    disabled: r,
    active: n,
    collapsed: a,
    rtl: i
  });
}, function(t6) {
  var e = t6.buttonStyles;
  return e;
}), vO = function(t6, e) {
  var r, n = t6.children, a = t6.icon, i = t6.className, s = t6.prefix, o = t6.suffix, l = t6.active, c = l === void 0 ? false : l, d = t6.disabled, u = d === void 0 ? false : d, f = t6.component, h = t6.rootStyles, g = Tn(t6, ["children", "icon", "className", "prefix", "suffix", "active", "disabled", "component", "rootStyles"]), m = ee.useContext(Ns), p = ee.useContext(go), w = p.collapsed, b = p.rtl, k = p.transitionDuration, v = Mc().menuItemStyles, x = function(T) {
    if (v) {
      var S = { level: m, disabled: u, active: c, isSubmenu: false }, C = v.root, D = v.button, z = v.label, A = v.icon, L = v.prefix, M = v.suffix;
      switch (T) {
        case "root":
          return typeof C == "function" ? C(S) : C;
        case "button":
          return typeof D == "function" ? D(S) : D;
        case "label":
          return typeof z == "function" ? z(S) : z;
        case "icon":
          return typeof A == "function" ? A(S) : A;
        case "prefix":
          return typeof L == "function" ? L(S) : L;
        case "suffix":
          return typeof M == "function" ? M(S) : M;
        default:
          return;
      }
    }
  }, _ = (r = {}, r[ye.active] = c, r[ye.disabled] = u, r);
  return ee.createElement(
    yO,
    { ref: e, className: et(ye.menuItemRoot, _, i), menuItemStyles: x("root"), level: m, collapsed: w, rtl: b, disabled: u, active: c, buttonStyles: x("button"), rootStyles: h },
    ee.createElement(
      d0,
      At({ className: et(ye.button, _), "data-testid": "".concat(ye.button, "-test-id"), component: f, tabIndex: 0 }, g),
      a && ee.createElement(Qg, { rtl: b, className: et(ye.icon, _), rootStyles: x("icon") }, a),
      s && ee.createElement(Jg, { collapsed: w, transitionDuration: k, firstLevel: m === 0, className: et(ye.prefix, _), rtl: b, rootStyles: x("prefix") }, s),
      ee.createElement(Kg, { className: et(ye.label, _), rootStyles: x("label") }, n),
      o && ee.createElement(Zg, { collapsed: w, transitionDuration: k, firstLevel: m === 0, className: et(ye.suffix, _), rootStyles: x("suffix") }, o)
    )
  );
}; ee.forwardRef(vO); var Bf;
const wO = {}, u0 = Oe(
  (t6, e) => {
    const { imageUrl: r, icon: n, title: a, description: i } = t6;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${wO.Card} border px-3.5 py-7`, ref: e, children: [
      r ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Cn,
        {
          classIm: "mx-auto",
          src: r,
          alt: a,
          width: 74,
          height: 74
        }
      ) : n ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(n, { size: 74 }) }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "my-3 font-bold", children: a }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: i })
    ] });
  }
);
u0.displayName = "Card";
function kO(t6) {
  return We({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z", clipRule: "evenodd" }, child: [] }] })(t6);
}
function _O(t6) {
  return We({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z", clipRule: "evenodd" }, child: [] }] })(t6);
}
function OO(t6) {
  return We({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z", clipRule: "evenodd" }, child: [] }] })(t6);
}
function f0(t6) {
  return We({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" }, child: [] }] })(t6);
}
function h0(t6) {
  return We({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z", clipRule: "evenodd" }, child: [] }] })(t6);
}
function g0(t6) {
  return We({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", clipRule: "evenodd" }, child: [] }] })(t6);
}
function SO(t6) {
  return We({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z", clipRule: "evenodd" }, child: [] }] })(t6);
}
function Yf(t6) {
  return We({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { d: "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" }, child: [] }] })(t6);
}
function DO(t6) {
  return We({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { d: "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" }, child: [] }] })(t6);
}
function MO(t6) {
  return We({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, child: [] }] })(t6);
}
function CO(t6) {
  return We({ attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }, child: [] }] })(t6);
}
function m0(t6) {
  return We({ attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }, child: [] }] })(t6);
}
function EO(t6) {
  return We({ attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 19l-7-7 7-7" }, child: [] }] })(t6);
}
function p0(t6) {
  return We({ attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5l7 7-7 7" }, child: [] }] })(t6);
}
function TO(t6) {
  return We({ attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 15l7-7 7 7" }, child: [] }] })(t6);
}
function PO(t6) {
  return We({ attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }, child: [] }] })(t6);
}
const Ic = "-";
function RO(t6) {
  const e = IO(t6), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = t6;
  function a(s) {
    const o = s.split(Ic);
    return o[0] === "" && o.length !== 1 && o.shift(), b0(o, e) || NO(s);
  }
  function i(s, o) {
    const l = r[s] || [];
    return o && n[s] ? [...l, ...n[s]] : l;
  }
  return {
    getClassGroupId: a,
    getConflictingClassGroupIds: i
  };
}
function b0(t6, e) {
  var s;
  if (t6.length === 0)
    return e.classGroupId;
  const r = t6[0], n = e.nextPart.get(r), a = n ? b0(t6.slice(1), n) : void 0;
  if (a)
    return a;
  if (e.validators.length === 0)
    return;
  const i = t6.join(Ic);
  return (s = e.validators.find(({
    validator: o
  }) => o(i))) == null ? void 0 : s.classGroupId;
}
const Vf = /^\[(.+)\]$/;
function NO(t6) {
  if (Vf.test(t6)) {
    const e = Vf.exec(t6)[1], r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function IO(t6) {
  const {
    theme: e,
    prefix: r
  } = t6, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return FO(Object.entries(t6.classGroups), r).forEach(([i, s]) => {
    zl(s, n, i, e);
  }), n;
}
function zl(t6, e, r, n) {
  t6.forEach((a) => {
    if (typeof a == "string") {
      const i = a === "" ? e : qf(e, a);
      i.classGroupId = r;
      return;
    }
    if (typeof a == "function") {
      if (AO(a)) {
        zl(a(n), e, r, n);
        return;
      }
      e.validators.push({
        validator: a,
        classGroupId: r
      });
      return;
    }
    Object.entries(a).forEach(([i, s]) => {
      zl(s, qf(e, i), r, n);
    });
  });
}
function qf(t6, e) {
  let r = t6;
  return e.split(Ic).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function AO(t6) {
  return t6.isThemeGetter;
}
function FO(t6, e) {
  return e ? t6.map(([r, n]) => {
    const a = n.map((i) => typeof i == "string" ? e + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, o]) => [e + s, o])) : i);
    return [r, a];
  }) : t6;
}
function LO(t6) {
  if (t6 < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function a(i, s) {
    r.set(i, s), e++, e > t6 && (e = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get(i) {
      let s = r.get(i);
      if (s !== void 0)
        return s;
      if ((s = n.get(i)) !== void 0)
        return a(i, s), s;
    },
    set(i, s) {
      r.has(i) ? r.set(i, s) : a(i, s);
    }
  };
}
const y0 = "!";
function WO(t6) {
  const e = t6.separator, r = e.length === 1, n = e[0], a = e.length;
  return function(s) {
    const o = [];
    let l = 0, c = 0, d;
    for (let m = 0; m < s.length; m++) {
      let p = s[m];
      if (l === 0) {
        if (p === n && (r || s.slice(m, m + a) === e)) {
          o.push(s.slice(c, m)), c = m + a;
          continue;
        }
        if (p === "/") {
          d = m;
          continue;
        }
      }
      p === "[" ? l++ : p === "]" && l--;
    }
    const u = o.length === 0 ? s : s.substring(c), f = u.startsWith(y0), h = f ? u.substring(1) : u, g = d && d > c ? d - c : void 0;
    return {
      modifiers: o,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: g
    };
  };
}
function $O(t6) {
  if (t6.length <= 1)
    return t6;
  const e = [];
  let r = [];
  return t6.forEach((n) => {
    n[0] === "[" ? (e.push(...r.sort(), n), r = []) : r.push(n);
  }), e.push(...r.sort()), e;
}
function zO(t6) {
  return {
    cache: LO(t6.cacheSize),
    splitModifiers: WO(t6),
    ...RO(t6)
  };
}
const jO = /\s+/;
function HO(t6, e) {
  const {
    splitModifiers: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: a
  } = e, i = /* @__PURE__ */ new Set();
  return t6.trim().split(jO).map((s) => {
    const {
      modifiers: o,
      hasImportantModifier: l,
      baseClassName: c,
      maybePostfixModifierPosition: d
    } = r(s);
    let u = n(d ? c.substring(0, d) : c), f = !!d;
    if (!u) {
      if (!d)
        return {
          isTailwindClass: false,
          originalClassName: s
        };
      if (u = n(c), !u)
        return {
          isTailwindClass: false,
          originalClassName: s
        };
      f = false;
    }
    const h = $O(o).join(":");
    return {
      isTailwindClass: true,
      modifierId: l ? h + y0 : h,
      classGroupId: u,
      originalClassName: s,
      hasPostfixModifier: f
    };
  }).reverse().filter((s) => {
    if (!s.isTailwindClass)
      return true;
    const {
      modifierId: o,
      classGroupId: l,
      hasPostfixModifier: c
    } = s, d = o + l;
    return i.has(d) ? false : (i.add(d), a(l, c).forEach((u) => i.add(o + u)), true);
  }).reverse().map((s) => s.originalClassName).join(" ");
}
function BO() {
  let t6 = 0, e, r, n = "";
  for (; t6 < arguments.length; )
    (e = arguments[t6++]) && (r = v0(e)) && (n && (n += " "), n += r);
  return n;
}
function v0(t6) {
  if (typeof t6 == "string")
    return t6;
  let e, r = "";
  for (let n = 0; n < t6.length; n++)
    t6[n] && (e = v0(t6[n])) && (r && (r += " "), r += e);
  return r;
}
function YO(t6, ...e) {
  let r, n, a, i = s;
  function s(l) {
    const c = e.reduce((d, u) => u(d), t6());
    return r = zO(c), n = r.cache.get, a = r.cache.set, i = o, o(l);
  }
  function o(l) {
    const c = n(l);
    if (c)
      return c;
    const d = HO(l, r);
    return a(l, d), d;
  }
  return function() {
    return i(BO.apply(null, arguments));
  };
}
function Ne(t6) {
  const e = (r) => r[t6] || [];
  return e.isThemeGetter = true, e;
}
const x0 = /^\[(?:([a-z-]+):)?(.+)\]$/i, VO = /^\d+\/\d+$/, qO = /* @__PURE__ */ new Set(["px", "full", "screen"]), UO = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, XO = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, GO = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, KO = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, QO = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function wr(t6) {
  return wn(t6) || qO.has(t6) || VO.test(t6);
}
function zr(t6) {
  return ma(t6, "length", iS);
}
function wn(t6) {
  return !!t6 && !Number.isNaN(Number(t6));
}
function Xi(t6) {
  return ma(t6, "number", wn);
}
function Ca(t6) {
  return !!t6 && Number.isInteger(Number(t6));
}
function JO(t6) {
  return t6.endsWith("%") && wn(t6.slice(0, -1));
}
function he(t6) {
  return x0.test(t6);
}
function jr(t6) {
  return UO.test(t6);
}
const ZO = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function eS(t6) {
  return ma(t6, ZO, w0);
}
function tS(t6) {
  return ma(t6, "position", w0);
}
const rS = /* @__PURE__ */ new Set(["image", "url"]);
function nS(t6) {
  return ma(t6, rS, oS);
}
function aS(t6) {
  return ma(t6, "", sS);
}
function Ea() {
  return true;
}
function ma(t6, e, r) {
  const n = x0.exec(t6);
  return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : r(n[2]) : false;
}
function iS(t6) {
  return XO.test(t6) && !GO.test(t6);
}
function w0() {
  return false;
}
function sS(t6) {
  return KO.test(t6);
}
function oS(t6) {
  return QO.test(t6);
}
function lS() {
  const t6 = Ne("colors"), e = Ne("spacing"), r = Ne("blur"), n = Ne("brightness"), a = Ne("borderColor"), i = Ne("borderRadius"), s = Ne("borderSpacing"), o = Ne("borderWidth"), l = Ne("contrast"), c = Ne("grayscale"), d = Ne("hueRotate"), u = Ne("invert"), f = Ne("gap"), h = Ne("gradientColorStops"), g = Ne("gradientColorStopPositions"), m = Ne("inset"), p = Ne("margin"), w = Ne("opacity"), b = Ne("padding"), k = Ne("saturate"), v = Ne("scale"), x = Ne("sepia"), _ = Ne("skew"), T = Ne("space"), S = Ne("translate"), C = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], z = () => ["auto", he, e], A = () => [he, e], L = () => ["", wr, zr], M = () => ["auto", wn, he], I = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], W = () => ["solid", "dashed", "dotted", "double", "none"], B = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], U = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], J = () => ["", "0", he], E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], j = () => [wn, Xi], N = () => [wn, he];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ea],
      spacing: [wr, zr],
      blur: ["none", "", jr, he],
      brightness: j(),
      borderColor: [t6],
      borderRadius: ["none", "", "full", jr, he],
      borderSpacing: A(),
      borderWidth: L(),
      contrast: j(),
      grayscale: J(),
      hueRotate: N(),
      invert: J(),
      gap: A(),
      gradientColorStops: [t6],
      gradientColorStopPositions: [JO, zr],
      inset: z(),
      margin: z(),
      opacity: j(),
      padding: A(),
      saturate: j(),
      scale: j(),
      sepia: J(),
      skew: N(),
      space: A(),
      translate: A()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", he]
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
        columns: [jr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": E()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": E()
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
        object: [...I(), he]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: C()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": C()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": C()
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
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
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
        z: ["auto", Ca, he]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: z()
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
        flex: ["1", "auto", "initial", "none", he]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: J()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: J()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ca, he]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ea]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ca, he]
        }, he]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": M()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": M()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ea]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ca, he]
        }, he]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": M()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": M()
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
        "auto-cols": ["auto", "min", "max", "fr", he]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", he]
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
        justify: ["normal", ...U()]
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
        content: ["normal", ...U(), "baseline"]
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
        "place-content": [...U(), "baseline"]
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
        p: [b]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [b]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [b]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [b]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [b]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [b]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [b]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [b]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [b]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [p]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [p]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [p]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [p]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [p]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [p]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [p]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [p]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [p]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [T]
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
        "space-y": [T]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", he, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [he, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [he, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [jr]
        }, jr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [he, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [he, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [he, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [he, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", jr, zr]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Xi]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ea]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", he]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", wn, Xi]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", wr, he]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", he]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", he]
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
        placeholder: [t6]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [w]
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
        text: [t6]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [w]
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
        decoration: [...W(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", wr, zr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", wr, he]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t6]
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
        indent: A()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", he]
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
        content: ["none", he]
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
        "bg-opacity": [w]
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
        bg: [...I(), tS]
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
        bg: ["auto", "cover", "contain", eS]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, nS]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t6]
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
        border: [o]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [o]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [o]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [o]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [o]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [o]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [o]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [o]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [o]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [w]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...W(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [o]
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
        "divide-y": [o]
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
        "divide-opacity": [w]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: W()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...W()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [wr, he]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [wr, zr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t6]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: L()
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
        ring: [t6]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [w]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [wr, zr]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t6]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", jr, aS]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ea]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [w]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": B()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": B()
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
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
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
        "drop-shadow": ["", "none", jr, he]
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
        saturate: [k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [x]
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
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
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
        "backdrop-opacity": [w]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [k]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [x]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", he]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: N()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", he]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: N()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", he]
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
        scale: [v]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [v]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [v]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ca, he]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [S]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [S]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", he]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t6]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", he]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t6]
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
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
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
        "will-change": ["auto", "scroll", "contents", "transform", he]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t6, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [wr, zr, Xi]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t6, "none"]
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
const Y = /* @__PURE__ */ YO(lS);
function mn(t6) {
  return t6 !== null && typeof t6 == "object" && t6.constructor === Object;
}
function ui(t6) {
  if (!mn(t6))
    return t6;
  const e = {};
  for (const r in t6)
    e[r] = ui(t6[r]);
  return e;
}
function te(t6, e) {
  if (mn(e) && Object.keys(e).length === 0)
    return ui({ ...t6, ...e });
  const r = { ...t6, ...e };
  if (mn(e) && mn(t6))
    for (const n in e)
      mn(e[n]) && n in t6 && mn(t6[n]) ? r[n] = te(t6[n], e[n]) : r[n] = mn(e[n]) ? ui(e[n]) : e[n];
  return r;
}
const cS = {
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
}, dS = {
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
}, uS = {
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
}, fS = {
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
}, hS = {
  root: {
    base: "text-xl font-semibold italic text-gray-900 dark:text-white"
  }
}, gS = {
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
}, mS = {
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
}, pS = {
  base: "inline-flex",
  position: {
    none: "",
    start: "rounded-r-none focus:ring-2",
    middle: "rounded-none border-l-0 pl-0 focus:ring-2",
    end: "rounded-l-none border-l-0 pl-0 focus:ring-2"
  }
}, bS = {
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
}, yS = {
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
}, vS = {
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
}, xS = {
  root: {
    base: "rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    icon: "h-5 w-5"
  }
}, wS = {
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
}, kS = {
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
}, _S = {
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
}, OS = {
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
}, SS = {
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
}, DS = {
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
}, MS = {
  root: {
    base: "rounded-lg border border-gray-200 bg-gray-100 px-2 py-1.5 text-xs font-semibold text-gray-800 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100",
    icon: "inline-block"
  }
}, CS = {
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
}, ES = {
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
}, TS = {
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
}, PS = {
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
}, RS = {
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
}, NS = {
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
}, IS = {
  base: "absolute z-20 inline-block w-max max-w-[100vw] bg-white outline-none border border-gray-200 rounded-lg shadow-sm dark:border-gray-600 dark:bg-gray-800",
  content: "z-10 overflow-hidden rounded-[7px]",
  arrow: {
    base: "absolute h-2 w-2 z-0 rotate-45 mix-blend-lighten bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:mix-blend-color",
    placement: "-4px"
  }
}, AS = {
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
}, FS = {
  root: {
    base: "h-4 w-4 border border-gray-300 text-cyan-600 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600"
  }
}, LS = {
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
}, WS = {
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
}, $S = {
  base: "flex items-center",
  label: "text-sm font-medium text-cyan-600 dark:text-cyan-500",
  progress: {
    base: "mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700",
    fill: "h-5 rounded bg-yellow-400",
    label: "text-sm font-medium text-cyan-600 dark:text-cyan-500"
  }
}, zS = {
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
}, jS = {
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
}, HS = {
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
}, BS = {
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
}, YS = {
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
}, VS = {
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
}, qS = {
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
}, US = {
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
}, XS = {
  root: {
    base: "flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",
    closed: "opacity-0 ease-out"
  },
  toggle: {
    base: "-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
    icon: "h-5 w-5 shrink-0"
  }
}, GS = {
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
}, KS = {
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
}, QS = {
  accordion: cS,
  alert: dS,
  avatar: uS,
  badge: fS,
  blockquote: hS,
  breadcrumb: gS,
  button: mS,
  buttonGroup: pS,
  card: bS,
  carousel: yS,
  checkbox: vS,
  datepicker: wS,
  darkThemeToggle: xS,
  dropdown: kS,
  fileInput: _S,
  floatingLabel: OS,
  footer: SS,
  helperText: DS,
  kbd: MS,
  label: CS,
  listGroup: TS,
  list: ES,
  modal: PS,
  navbar: RS,
  pagination: NS,
  popover: IS,
  progress: AS,
  radio: FS,
  rangeSlider: LS,
  rating: WS,
  ratingAdvanced: $S,
  select: zS,
  textInput: qS,
  textarea: VS,
  toggleSwitch: GS,
  sidebar: jS,
  spinner: HS,
  table: BS,
  tabs: YS,
  timeline: US,
  toast: XS,
  tooltip: KS
}, JS = {
  theme: ui(QS)
};
function ue() {
  return ui(JS.theme);
}
const k0 = ft(void 0);
function _0() {
  const t6 = rt(k0);
  if (!t6)
    throw new Error("useAccordionContext should be used within the AccordionPanelContext provider!");
  return t6;
}
const O0 = ({
  children: t6,
  className: e,
  theme: r = {},
  ...n
}) => {
  const { isOpen: a } = _0(), i = te(ue().accordion.content, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: Y(i.base, e),
      "data-testid": "flowbite-accordion-content",
      hidden: !a,
      ...n,
      children: t6
    }
  );
}, S0 = ({ children: t6, ...e }) => {
  const { alwaysOpen: r } = e, [n, a] = ve(e.isOpen), i = r ? {
    ...e,
    isOpen: n,
    setOpen: () => a(!n)
  } : e;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(k0.Provider, { value: i, children: t6 });
}, D0 = ({
  as: t6 = "h2",
  children: e,
  className: r,
  theme: n = {},
  ...a
}) => {
  const { arrowIcon: i, flush: s, isOpen: o, setOpen: l } = _0(), c = () => typeof l < "u" && l(), d = te(ue().accordion.title, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      className: Y(d.base, d.flush[s ? "on" : "off"], d.open[o ? "on" : "off"], r),
      onClick: c,
      type: "button",
      ...a,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(t6, { className: d.heading, "data-testid": "flowbite-accordion-heading", children: e }),
        i && /* @__PURE__ */ jsxRuntimeExports.jsx(
          i,
          {
            "aria-hidden": true,
            className: Y(d.arrow.base, d.arrow.open[o ? "on" : "off"]),
            "data-testid": "flowbite-accordion-arrow"
          }
        )
      ]
    }
  );
}, M0 = ({
  alwaysOpen: t6 = false,
  arrowIcon: e = f0,
  children: r,
  flush: n = false,
  collapseAll: a = false,
  className: i,
  theme: s = {},
  ...o
}) => {
  const [l, c] = ve(a ? -1 : 0), d = no(
    () => Qn.map(
      r,
      (f, h) => ms(f, {
        alwaysOpen: t6,
        arrowIcon: e,
        flush: n,
        isOpen: l === h,
        setOpen: () => c(l === h ? -1 : h)
      })
    ),
    [t6, e, r, n, l]
  ), u = te(ue().accordion.root, s);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: Y(u.base, u.flush[n ? "on" : "off"], i),
      "data-testid": "flowbite-accordion",
      ...o,
      children: d
    }
  );
};
M0.displayName = "Accordion";
S0.displayName = "Accordion.Panel";
D0.displayName = "Accordion.Title";
O0.displayName = "Accordion.Content";
Object.assign(M0, {
  Panel: S0,
  Title: D0,
  Content: O0
});
const C0 = ({ children: t6, className: e, theme: r = {}, ...n }) => {
  const a = te(ue().avatar.group, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "avatar-group-element", className: Y(a.base, e), ...n, children: t6 });
};
C0.displayName = "Avatar.Group";
const E0 = ({
  className: t6,
  href: e,
  theme: r = {},
  total: n,
  ...a
}) => {
  const i = te(ue().avatar.groupCounter, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: e, className: Y(i.base, t6), ...a, children: [
    "+",
    n
  ] });
};
E0.displayName = "Avatar.GroupCounter";
const T0 = ({
  alt: t6 = "",
  bordered: e = false,
  children: r,
  className: n,
  color: a = "light",
  img: i,
  placeholderInitials: s = "",
  rounded: o = false,
  size: l = "md",
  stacked: c = false,
  status: d,
  statusPosition: u = "top-left",
  theme: f = {},
  ...h
}) => {
  const g = te(ue().avatar, f), m = Y(
    g.root.img.base,
    e && g.root.bordered,
    e && g.root.color[a],
    o && g.root.rounded,
    c && g.root.stacked,
    g.root.img.on,
    g.root.size[l]
  ), p = {
    className: Y(m, g.root.img.on),
    "data-testid": "flowbite-avatar-img"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: Y(g.root.base, n), "data-testid": "flowbite-avatar", ...h, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      i ? typeof i == "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: t6, src: i, ...p }) : i({ alt: t6, ...p }) : s ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: Y(
            g.root.img.off,
            g.root.initials.base,
            c && g.root.stacked,
            e && g.root.bordered,
            e && g.root.color[a],
            g.root.size[l],
            o && g.root.rounded
          ),
          "data-testid": "flowbite-avatar-initials-placeholder",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: Y(g.root.initials.text), "data-testid": "flowbite-avatar-initials-placeholder-text", children: s })
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: Y(m, g.root.img.off), "data-testid": "flowbite-avatar-img", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          className: Y(
            g.root.status.base,
            g.root.status[d],
            g.root.statusPosition[u]
          )
        }
      )
    ] }),
    r && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: r })
  ] });
};
T0.displayName = "Avatar";
Object.assign(T0, {
  Group: C0,
  Counter: E0
});
const P0 = ({
  children: t6,
  color: e = "info",
  href: r,
  icon: n,
  size: a = "xs",
  className: i,
  theme: s = {},
  ...o
}) => {
  const l = te(ue().badge, s), c = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: Y(
        l.root.base,
        l.root.color[e],
        l.root.size[a],
        l.icon[n ? "on" : "off"],
        i
      ),
      "data-testid": "flowbite-badge",
      ...o,
      children: [
        n && /* @__PURE__ */ jsxRuntimeExports.jsx(n, { "aria-hidden": true, className: l.icon.size[a], "data-testid": "flowbite-badge-icon" }),
        t6 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t6 })
      ]
    }
  );
  return r ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: l.root.href, href: r, children: /* @__PURE__ */ jsxRuntimeExports.jsx(c, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(c, {});
};
P0.displayName = "Badge";
const R0 = ({
  className: t6,
  color: e = "info",
  light: r,
  size: n = "md",
  theme: a = {},
  ...i
}) => {
  const s = te(ue().spinner, a);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { role: "status", ...i, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      fill: "none",
      viewBox: "0 0 100 101",
      className: Y(
        s.base,
        s.color[e],
        s.light[r ? "on" : "off"].base,
        s.light[r ? "on" : "off"].color[e],
        s.size[n],
        t6
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
R0.displayName = "Spinner";
const Ac = Oe(
  ({ children: t6, as: e, href: r, type: n = "button", ...a }, i) => ur(e || (r ? "a" : "button"), { ref: i, href: r, type: n, ...a }, t6)
);
Ac.displayName = "ButtonBaseComponent";
const N0 = (t6, e, r) => Qn.map(t6, (n, a) => Oy(n) ? n.props.children ? ms(n, {
  ...n.props,
  children: N0(n.props.children, e, r),
  positionInGroup: Uf(a, Qn.count(t6))
}) : ms(n, {
  outline: e,
  pill: r,
  positionInGroup: Uf(a, Qn.count(t6))
}) : n), Uf = (t6, e) => t6 === 0 ? "start" : t6 === e - 1 ? "end" : "middle", I0 = ({
  children: t6,
  className: e,
  outline: r,
  pill: n,
  theme: a = {},
  ...i
}) => {
  const s = no(() => N0(t6, r, n), [t6, r, n]), o = te(ue().buttonGroup, a);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: Y(o.base, e), role: "group", ...i, children: s });
};
I0.displayName = "Button.Group";
const A0 = Oe(
  ({
    children: t6,
    className: e,
    color: r = "info",
    disabled: n,
    fullSized: a,
    isProcessing: i = false,
    processingLabel: s = "Loading...",
    processingSpinner: o,
    gradientDuoTone: l,
    gradientMonochrome: c,
    label: d,
    outline: u = false,
    pill: f = false,
    positionInGroup: h = "none",
    size: g = "md",
    theme: m = {},
    ...p
  }, w) => {
    const { buttonGroup: b, button: k } = ue(), v = te(k, m), x = p;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ac,
      {
        ref: w,
        disabled: n,
        className: Y(
          v.base,
          n && v.disabled,
          !l && !c && v.color[r],
          l && !c && v.gradientDuoTone[l],
          !l && c && v.gradient[c],
          u && (v.outline.color[r] ?? v.outline.color.default),
          v.pill[f ? "on" : "off"],
          a && v.fullSized,
          b.position[h],
          e
        ),
        ...x,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: Y(
              v.inner.base,
              v.outline[u ? "on" : "off"],
              v.outline.pill[u && f ? "on" : "off"],
              v.size[g],
              u && !v.outline.color[r] && v.inner.outline,
              i && v.isProcessing,
              i && v.inner.isProcessingPadding[g],
              v.inner.position[h]
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              i && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: Y(v.spinnerSlot, v.spinnerLeftPosition[g]), children: o || /* @__PURE__ */ jsxRuntimeExports.jsx(R0, { size: g }) }),
              typeof t6 < "u" ? t6 : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-testid": "flowbite-button-label", className: Y(v.label), children: i ? s : d })
            ] })
          }
        )
      }
    );
  }
);
A0.displayName = "Button";
const F0 = Object.assign(A0, {
  Group: I0
}), L0 = ({ children: t6, ...e }) => /* @__PURE__ */ jsxRuntimeExports.jsx(F0, { onClick: (n) => {
  const i = n.target.closest('[role="banner"]');
  i == null || i.remove();
}, ...e, children: t6 });
L0.displayName = "Banner.CollapseButton";
const W0 = ({ children: t6, ...e }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "flowbite-banner", role: "banner", tabIndex: -1, ...e, children: t6 });
W0.displayName = "Banner";
Object.assign(W0, {
  CollapseButton: L0
});
const $0 = Oe(
  ({ children: t6, className: e, href: r, icon: n, theme: a = {}, ...i }, s) => {
    const o = typeof r < "u", l = o ? "a" : "span", c = te(ue().breadcrumb.item, a);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: Y(c.base, e), ...i, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(p0, { "aria-hidden": true, className: c.chevron, "data-testid": "flowbite-breadcrumb-separator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        l,
        {
          ref: s,
          className: c.href[o ? "on" : "off"],
          "data-testid": "flowbite-breadcrumb-item",
          href: r,
          children: [
            n && /* @__PURE__ */ jsxRuntimeExports.jsx(n, { "aria-hidden": true, className: c.icon }),
            t6
          ]
        }
      )
    ] });
  }
);
$0.displayName = "Breadcrumb.Item";
const z0 = ({
  children: t6,
  className: e,
  theme: r = {},
  ...n
}) => {
  const a = te(ue().breadcrumb.root, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", className: Y(a.base, e), ...n, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: a.list, children: t6 }) });
};
z0.displayName = "Breadcrumb";
Object.assign(z0, {
  Item: $0
});
var ZS = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function j0(t6) {
  return t6 && t6.__esModule && Object.prototype.hasOwnProperty.call(t6, "default") ? t6.default : t6;
}
function H0(t6) {
  if (t6.__esModule) return t6;
  var e = t6.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: true }), Object.keys(t6).forEach(function(n) {
    var a = Object.getOwnPropertyDescriptor(t6, n);
    Object.defineProperty(r, n, a.get ? a : {
      enumerable: true,
      get: function() {
        return t6[n];
      }
    });
  }), r;
}
var B0 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t6) {
  (function() {
    var e = {}.hasOwnProperty;
    function r() {
      for (var i = "", s = 0; s < arguments.length; s++) {
        var o = arguments[s];
        o && (i = a(i, n(o)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return r.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var s = "";
      for (var o in i)
        e.call(i, o) && i[o] && (s = a(s, o));
      return s;
    }
    function a(i, s) {
      return s ? i ? i + " " + s : i + s : i;
    }
    t6.exports ? (r.default = r, t6.exports = r) : window.classNames = r;
  })();
})(B0);
var en = B0.exports;
const eD = /* @__PURE__ */ j0(en);
var Fc = { exports: {} };
function Y0(t6, e = 100, r = {}) {
  if (typeof t6 != "function")
    throw new TypeError(`Expected the first parameter to be a function, got \`${typeof t6}\`.`);
  if (e < 0)
    throw new RangeError("`wait` must not be negative.");
  const { immediate: n } = typeof r == "boolean" ? { immediate: r } : r;
  let a, i, s, o, l;
  function c() {
    const u = Date.now() - o;
    if (u < e && u >= 0)
      s = setTimeout(c, e - u);
    else if (s = void 0, !n) {
      const f = a, h = i;
      a = void 0, i = void 0, l = t6.apply(f, h);
    }
  }
  const d = function(...u) {
    if (a && this !== a)
      throw new Error("Debounced method called with different contexts.");
    a = this, i = u, o = Date.now();
    const f = n && !s;
    if (s || (s = setTimeout(c, e)), f) {
      const h = a, g = i;
      a = void 0, i = void 0, l = t6.apply(h, g);
    }
    return l;
  };
  return d.clear = () => {
    s && (clearTimeout(s), s = void 0);
  }, d.flush = () => {
    if (!s)
      return;
    const u = a, f = i;
    a = void 0, i = void 0, l = t6.apply(u, f), clearTimeout(s), s = void 0;
  }, d;
}
Fc.exports.debounce = Y0;
Fc.exports = Y0;
var tD = Fc.exports;
const rD = /* @__PURE__ */ j0(tD);
var nD = Object.defineProperty, aD = (t6, e, r) => e in t6 ? nD(t6, e, { enumerable: true, configurable: true, writable: true, value: r }) : t6[e] = r, Ze = (t6, e, r) => (aD(t6, typeof e != "symbol" ? e + "" : e, r), r);
const iD = 300, sD = 0;
class oD extends Sy {
  constructor(e) {
    super(e), Ze(this, "container"), Ze(this, "scrolling"), Ze(this, "started"), Ze(this, "pressed"), Ze(this, "isMobile", false), Ze(this, "internal"), Ze(this, "scrollLeft"), Ze(this, "scrollTop"), Ze(this, "clientX"), Ze(this, "clientY"), Ze(this, "onEndScroll", () => {
      this.scrolling = false, !this.pressed && this.started && this.processEnd();
    }), Ze(this, "onScroll", () => {
      const r = this.container.current;
      (r.scrollLeft !== this.scrollLeft || r.scrollTop !== this.scrollTop) && (this.scrolling = true, this.processScroll(), this.onEndScroll());
    }), Ze(this, "onTouchStart", (r) => {
      const { nativeMobileScroll: n } = this.props;
      if (this.isDraggable(r.target))
        if (this.internal = true, n && this.scrolling)
          this.pressed = true;
        else {
          const a = r.touches[0];
          this.processClick(a.clientX, a.clientY), !n && this.props.stopPropagation && r.stopPropagation();
        }
    }), Ze(this, "onTouchEnd", () => {
      const { nativeMobileScroll: r } = this.props;
      this.pressed && (this.started && (!this.scrolling || !r) ? this.processEnd() : this.pressed = false, this.forceUpdate());
    }), Ze(this, "onTouchMove", (r) => {
      const { nativeMobileScroll: n } = this.props;
      if (this.pressed && (!n || !this.isMobile)) {
        const a = r.touches[0];
        a && this.processMove(a.clientX, a.clientY), r.preventDefault(), this.props.stopPropagation && r.stopPropagation();
      }
    }), Ze(this, "onMouseDown", (r) => {
      var n, a;
      this.isDraggable(r.target) && this.isScrollable() && (this.internal = true, ((a = (n = this.props) == null ? void 0 : n.buttons) == null ? void 0 : a.indexOf(r.button)) !== -1 && (this.processClick(r.clientX, r.clientY), r.preventDefault(), this.props.stopPropagation && r.stopPropagation()));
    }), Ze(this, "onMouseMove", (r) => {
      this.pressed && (this.processMove(r.clientX, r.clientY), r.preventDefault(), this.props.stopPropagation && r.stopPropagation());
    }), Ze(this, "onMouseUp", (r) => {
      this.pressed && (this.started ? this.processEnd() : (this.internal = false, this.pressed = false, this.forceUpdate(), this.props.onClick && this.props.onClick(r)), r.preventDefault(), this.props.stopPropagation && r.stopPropagation());
    }), this.container = ee.createRef(), this.onEndScroll = rD(this.onEndScroll, iD), this.scrolling = false, this.started = false, this.pressed = false, this.internal = false, this.getRef = this.getRef.bind(this);
  }
  componentDidMount() {
    const { nativeMobileScroll: e } = this.props, r = this.container.current;
    window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onTouchMove, { passive: false }), window.addEventListener("touchend", this.onTouchEnd), r.addEventListener("touchstart", this.onTouchStart, {
      passive: false
    }), r.addEventListener("mousedown", this.onMouseDown, {
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
    const r = this.props.ignoreElements;
    if (r) {
      const n = e.closest(r);
      return n === null || n.contains(this.getElement());
    } else
      return true;
  }
  isScrollable() {
    const e = this.container.current;
    return e && (e.scrollWidth > e.clientWidth || e.scrollHeight > e.clientHeight);
  }
  processClick(e, r) {
    const n = this.container.current;
    this.scrollLeft = n == null ? void 0 : n.scrollLeft, this.scrollTop = n == null ? void 0 : n.scrollTop, this.clientX = e, this.clientY = r, this.pressed = true;
  }
  processStart(e = true) {
    const { onStartScroll: r } = this.props;
    this.started = true, e && document.body.classList.add("cursor-grab"), r && r({
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
  processMove(e, r) {
    const { horizontal: n, vertical: a, activationDistance: i, onScroll: s } = this.props, o = this.container.current;
    this.started ? (n && (o.scrollLeft -= e - this.clientX), a && (o.scrollTop -= r - this.clientY), s && s({ external: !this.internal }), this.clientX = e, this.clientY = r, this.scrollLeft = o.scrollLeft, this.scrollTop = o.scrollTop) : (n && Math.abs(e - this.clientX) > i || a && Math.abs(r - this.clientY) > i) && (this.clientX = e, this.clientY = r, this.processStart());
  }
  processEnd() {
    const { onEndScroll: e } = this.props;
    this.container.current && e && e({
      external: !this.internal
    }), this.pressed = false, this.started = false, this.scrolling = false, this.internal = false, document.body.classList.remove("cursor-grab"), this.forceUpdate();
  }
  getRef(e) {
    [this.container, this.props.innerRef].forEach((r) => {
      r && (typeof r == "function" ? r(e) : r.current = e);
    });
  }
  render() {
    const { children: e, draggingClassName: r, className: n, style: a, hideScrollbars: i } = this.props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: eD(n, this.pressed && r, {
          "!scroll-auto [&>*]:pointer-events-none [&>*]:cursor-grab": this.pressed,
          "overflow-auto": this.isMobile,
          "overflow-hidden !overflow-x-hidden [overflow:-moz-scrollbars-none] [scrollbar-width:none]": i,
          "[&::-webkit-scrollbar]:[-webkit-appearance:none !important] [&::-webkit-scrollbar]:!hidden [&::-webkit-scrollbar]:!h-0 [&::-webkit-scrollbar]:!w-0 [&::-webkit-scrollbar]:!bg-transparent": i
        }),
        style: a,
        ref: this.getRef,
        onScroll: this.onScroll,
        children: e
      }
    );
  }
}
Ze(oD, "defaultProps", {
  nativeMobileScroll: true,
  hideScrollbars: true,
  activationDistance: 10,
  vertical: true,
  horizontal: true,
  stopPropagation: false,
  style: {},
  buttons: [sD]
});
const lD = Oe(
  ({ className: t6, color: e = "default", theme: r = {}, ...n }, a) => {
    const i = te(ue().checkbox, r);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: a,
        type: "checkbox",
        className: Y(i.root.base, i.root.color[e], t6),
        ...n
      }
    );
  }
);
lD.displayName = "Checkbox";
const vi = ({
  children: t6,
  className: e,
  color: r = "default",
  theme: n = {},
  value: a,
  ...i
}) => {
  const s = te(ue().helperText, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: Y(s.root.base, s.root.colors[r], e), ...i, children: a ?? t6 ?? "" });
};
vi.displayName = "HelperText";
const Lc = Oe(
  ({
    addon: t6,
    className: e,
    color: r = "gray",
    helperText: n,
    icon: a,
    rightIcon: i,
    shadow: s,
    sizing: o = "md",
    theme: l = {},
    type: c = "text",
    ...d
  }, u) => {
    const f = te(ue().textInput, l);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: Y(f.base, e), children: [
        t6 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: f.addon, children: t6 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: f.field.base, children: [
          a && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: f.field.icon.base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(a, { className: f.field.icon.svg }) }),
          i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "right-icon", className: f.field.rightIcon.base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(i, { className: f.field.rightIcon.svg }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: Y(
                f.field.input.base,
                f.field.input.colors[r],
                f.field.input.sizes[o],
                f.field.input.withIcon[a ? "on" : "off"],
                f.field.input.withRightIcon[i ? "on" : "off"],
                f.field.input.withAddon[t6 ? "on" : "off"],
                f.field.input.withShadow[s ? "on" : "off"]
              ),
              type: c,
              ...d,
              ref: u
            }
          )
        ] })
      ] }),
      n && /* @__PURE__ */ jsxRuntimeExports.jsx(vi, { color: r, children: n })
    ] });
  }
);
Lc.displayName = "TextInput";
const V0 = ft(void 0);
function bo() {
  const t6 = rt(V0);
  if (!t6)
    throw new Error("useDatePickerContext should be used within the DatePickerContext provider!");
  return t6;
}
var Le = /* @__PURE__ */ ((t6) => (t6[t6.Days = 0] = "Days", t6[t6.Months = 1] = "Months", t6[t6.Years = 2] = "Years", t6[t6.Decades = 3] = "Decades", t6))(Le || {}), q0 = /* @__PURE__ */ ((t6) => (t6[t6.Sunday = 0] = "Sunday", t6[t6.Monday = 1] = "Monday", t6[t6.Tuesday = 2] = "Tuesday", t6[t6.Wednesday = 3] = "Wednesday", t6[t6.Thursday = 4] = "Thursday", t6[t6.Friday = 5] = "Friday", t6[t6.Saturday = 6] = "Saturday", t6))(q0 || {});
const xi = (t6, e, r) => {
  const n = new Date(t6.getFullYear(), t6.getMonth(), t6.getDate()).getTime();
  if (e && r) {
    const a = new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime(), i = new Date(r.getFullYear(), r.getMonth(), r.getDate()).getTime();
    return n >= a && n <= i;
  }
  if (e) {
    const a = new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime();
    return n >= a;
  }
  if (r) {
    const a = new Date(r.getFullYear(), r.getMonth(), r.getDate()).getTime();
    return n <= a;
  }
  return true;
}, yo = (t6, e) => (t6 = new Date(t6.getFullYear(), t6.getMonth(), t6.getDate()), e = new Date(e.getFullYear(), e.getMonth(), e.getDate()), t6.getTime() === e.getTime()), cD = (t6, e, r) => (xi(t6, e, r) || (e && t6 < e ? t6 = e : r && t6 > r && (t6 = r)), t6), dD = (t6, e) => {
  const r = new Date(t6.getFullYear(), t6.getMonth(), 1);
  let a = r.getDay() - e;
  return a < 0 && (a += 7), Wc(r, -a);
}, uD = (t6, e) => {
  const r = [], n = /* @__PURE__ */ new Date(0);
  n.setDate(n.getDate() - n.getDay() + e);
  const a = new Intl.DateTimeFormat(t6, { weekday: "short" });
  for (let i = 0; i < 7; i++)
    r.push(a.format(Wc(n, i)));
  return r;
}, Wc = (t6, e) => {
  const r = new Date(t6);
  return r.setDate(r.getDate() + e), r;
}, fD = (t6, e) => {
  const r = new Date(t6);
  return r.setMonth(r.getMonth() + e), r;
}, qn = (t6, e) => {
  const r = new Date(t6);
  return r.setFullYear(r.getFullYear() + e), r;
}, Ka = (t6, e, r) => {
  let n = {
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  return r && (n = r), new Intl.DateTimeFormat(t6, n).format(e);
}, Un = (t6, e) => {
  const r = t6.getFullYear();
  return Math.floor(r / e) * e;
}, hD = (t6, e) => {
  const r = t6.getFullYear(), n = e + 9;
  return r >= e && r <= n;
}, gD = ({ theme: t6 = {} }) => {
  const {
    theme: e,
    weekStart: r,
    minDate: n,
    maxDate: a,
    viewDate: i,
    selectedDate: s,
    changeSelectedDate: o,
    language: l
  } = bo(), c = te(e.views.days, t6), d = uD(l, r), u = dD(i, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: c.header.base, children: d.map((f, h) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: c.header.title, children: f }, h)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: c.items.base, children: [...Array(42)].map((f, h) => {
      const g = Wc(u, h), m = Ka(l, g, { day: "numeric" }), p = yo(s, g), w = !xi(g, n, a);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          disabled: w,
          type: "button",
          className: Y(
            c.items.item.base,
            p && c.items.item.selected,
            w && c.items.item.disabled
          ),
          onClick: () => {
            w || o(g, true);
          },
          children: m
        },
        h
      );
    }) })
  ] });
}, mD = ({ theme: t6 = {} }) => {
  const { theme: e, selectedDate: r, viewDate: n, setViewDate: a, setView: i } = bo(), s = te(e.views.decades, t6);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: s.items.base, children: [...Array(12)].map((o, l) => {
    const d = Un(n, 100) - 10 + l * 10, u = new Date(d, 0, 1), f = qn(u, 9), h = hD(n, d), g = !xi(n, u, f);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        disabled: g,
        type: "button",
        className: Y(
          s.items.item.base,
          h && s.items.item.selected,
          g && s.items.item.disabled
        ),
        onClick: () => {
          g || (a(qn(n, d - r.getFullYear())), i(Le.Years));
        },
        children: d
      },
      l
    );
  }) });
}, pD = ({ theme: t6 = {} }) => {
  const {
    theme: e,
    minDate: r,
    maxDate: n,
    selectedDate: a,
    viewDate: i,
    language: s,
    setViewDate: o,
    setView: l
  } = bo(), c = te(e.views.months, t6);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: c.items.base, children: [...Array(12)].map((d, u) => {
    const f = new Date(i.getTime());
    f.setMonth(u);
    const h = Ka(s, f, { month: "short" }), g = yo(a, f), m = !xi(f, r, n);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        disabled: m,
        type: "button",
        className: Y(
          c.items.item.base,
          g && c.items.item.selected,
          m && c.items.item.disabled
        ),
        onClick: () => {
          m || (o(f), l(Le.Days));
        },
        children: h
      },
      u
    );
  }) });
}, bD = ({ theme: t6 = {} }) => {
  const { theme: e, selectedDate: r, minDate: n, maxDate: a, viewDate: i, setViewDate: s, setView: o } = bo(), l = te(e.views.years, t6);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: l.items.base, children: [...Array(12)].map((c, d) => {
    const f = Un(i, 10) - 1 + d * 1, h = new Date(i.getTime());
    h.setFullYear(f);
    const g = yo(r, h), m = !xi(h, n, a);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        disabled: m,
        type: "button",
        className: Y(
          l.items.item.base,
          g && l.items.item.selected,
          m && l.items.item.disabled
        ),
        onClick: () => {
          m || (s(h), o(Le.Months));
        },
        children: f
      },
      d
    );
  }) });
}, yD = ({
  title: t6,
  open: e,
  inline: r = false,
  autoHide: n = true,
  // Hide when selected the day
  showClearButton: a = true,
  labelClearButton: i = "Clear",
  showTodayButton: s = true,
  labelTodayButton: o = "Today",
  defaultDate: l = /* @__PURE__ */ new Date(),
  minDate: c,
  maxDate: d,
  language: u = "en",
  weekStart: f = q0.Sunday,
  className: h,
  theme: g = {},
  onSelectedDateChanged: m,
  ...p
}, w) => {
  const b = te(ue().datepicker, g);
  l = cD(l, c, d);
  const [k, v] = ve(e), [x, _] = ve(Le.Days), [T, S] = ve(l), [C, D] = ve(l), z = Gt(null), A = Gt(null), L = (J, E) => {
    S(J), m && m(J), n && x === Le.Days && E == true && !r && v(false);
  }, M = () => {
    L(l, true), l && D(l);
  };
  Vh(w, () => ({
    focus() {
      var J;
      (J = z.current) == null || J.focus();
    },
    clear() {
      M();
    }
  }));
  const I = (J) => {
    switch (J) {
      case Le.Decades:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(mD, { theme: b.views.decades });
      case Le.Years:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(bD, { theme: b.views.years });
      case Le.Months:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(pD, { theme: b.views.months });
      case Le.Days:
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(gD, { theme: b.views.days });
    }
  }, W = () => {
    switch (x) {
      case Le.Days:
        return Le.Months;
      case Le.Months:
        return Le.Years;
      case Le.Years:
        return Le.Decades;
    }
    return x;
  }, B = () => {
    switch (x) {
      case Le.Decades:
        return `${Un(C, 100)} - ${Un(C, 100) + 90}`;
      case Le.Years:
        return `${Un(C, 10)} - ${Un(C, 10) + 9}`;
      case Le.Months:
        return Ka(u, C, { year: "numeric" });
      case Le.Days:
      default:
        return Ka(u, C, { month: "long", year: "numeric" });
    }
  }, U = (J, E, j) => {
    switch (J) {
      case Le.Days:
        return new Date(fD(E, j));
      case Le.Months:
        return new Date(qn(E, j));
      case Le.Years:
        return new Date(qn(E, j * 10));
      case Le.Decades:
        return new Date(qn(E, j * 100));
      default:
        return new Date(qn(E, j * 10));
    }
  };
  return lt(() => {
    const J = (E) => {
      var R, P;
      const j = (R = A == null ? void 0 : A.current) == null ? void 0 : R.contains(E.target), N = (P = z == null ? void 0 : z.current) == null ? void 0 : P.contains(E.target);
      !j && !N && v(false);
    };
    return document.addEventListener("mousedown", J), () => {
      document.removeEventListener("mousedown", J);
    };
  }, [z, A, v]), /* @__PURE__ */ jsxRuntimeExports.jsx(
    V0.Provider,
    {
      value: {
        theme: b,
        language: u,
        minDate: c,
        maxDate: d,
        weekStart: f,
        isOpen: k,
        setIsOpen: v,
        view: x,
        setView: _,
        viewDate: C,
        setViewDate: D,
        selectedDate: T,
        setSelectedDate: S,
        changeSelectedDate: L
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: Y(b.root.base, h), children: [
        !r && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Lc,
          {
            theme: b.root.input,
            icon: OO,
            ref: z,
            onFocus: () => {
              yo(C, T) || D(T), v(true);
            },
            value: T && Ka(u, T),
            readOnly: true,
            ...p
          }
        ),
        (k || r) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: A, className: Y(b.popup.root.base, r && b.popup.root.inline), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: b.popup.root.inner, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: b.popup.header.base, children: [
            t6 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: b.popup.header.title, children: t6 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: b.popup.header.selectors.base, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: Y(
                    b.popup.header.selectors.button.base,
                    b.popup.header.selectors.button.prev
                  ),
                  onClick: () => D(U(x, C, -1)),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(kO, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: Y(
                    b.popup.header.selectors.button.base,
                    b.popup.header.selectors.button.view
                  ),
                  onClick: () => _(W()),
                  children: B()
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: Y(
                    b.popup.header.selectors.button.base,
                    b.popup.header.selectors.button.next
                  ),
                  onClick: () => D(U(x, C, 1)),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(_O, {})
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: b.popup.view.base, children: I(x) }),
          (a || s) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: b.popup.footer.base, children: [
            s && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: Y(b.popup.footer.button.base, b.popup.footer.button.today),
                onClick: () => {
                  const J = /* @__PURE__ */ new Date();
                  L(J, true), D(J);
                },
                children: o
              }
            ),
            a && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: Y(b.popup.footer.button.base, b.popup.footer.button.clear),
                onClick: () => {
                  L(l, true), l && D(l);
                },
                children: i
              }
            )
          ] })
        ] }) })
      ] })
    }
  );
}, U0 = Oe(yD);
U0.displayName = "Datepicker";
function vo() {
  return typeof window < "u";
}
function An(t6) {
  return X0(t6) ? (t6.nodeName || "").toLowerCase() : "#document";
}
function Dt(t6) {
  var e;
  return (t6 == null || (e = t6.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function vr(t6) {
  var e;
  return (e = (X0(t6) ? t6.ownerDocument : t6.document) || window.document) == null ? void 0 : e.documentElement;
}
function X0(t6) {
  return vo() ? t6 instanceof Node || t6 instanceof Dt(t6).Node : false;
}
function Ce(t6) {
  return vo() ? t6 instanceof Element || t6 instanceof Dt(t6).Element : false;
}
function ut(t6) {
  return vo() ? t6 instanceof HTMLElement || t6 instanceof Dt(t6).HTMLElement : false;
}
function jl(t6) {
  return !vo() || typeof ShadowRoot > "u" ? false : t6 instanceof ShadowRoot || t6 instanceof Dt(t6).ShadowRoot;
}
function wi(t6) {
  const {
    overflow: e,
    overflowX: r,
    overflowY: n,
    display: a
  } = Yt(t6);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + r) && !["inline", "contents"].includes(a);
}
function vD(t6) {
  return ["table", "td", "th"].includes(An(t6));
}
function xo(t6) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t6.matches(e);
    } catch {
      return false;
    }
  });
}
function $c(t6) {
  const e = zc(), r = Ce(t6) ? Yt(t6) : t6;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => r[n] ? r[n] !== "none" : false) || (r.containerType ? r.containerType !== "normal" : false) || !e && (r.backdropFilter ? r.backdropFilter !== "none" : false) || !e && (r.filter ? r.filter !== "none" : false) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function xD(t6) {
  let e = Tr(t6);
  for (; ut(e) && !Gr(e); ) {
    if ($c(e))
      return e;
    if (xo(e))
      return null;
    e = Tr(e);
  }
  return null;
}
function zc() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function Gr(t6) {
  return ["html", "body", "#document"].includes(An(t6));
}
function Yt(t6) {
  return Dt(t6).getComputedStyle(t6);
}
function wo(t6) {
  return Ce(t6) ? {
    scrollLeft: t6.scrollLeft,
    scrollTop: t6.scrollTop
  } : {
    scrollLeft: t6.scrollX,
    scrollTop: t6.scrollY
  };
}
function Tr(t6) {
  if (An(t6) === "html")
    return t6;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t6.assignedSlot || // DOM Element detected.
    t6.parentNode || // ShadowRoot detected.
    jl(t6) && t6.host || // Fallback.
    vr(t6)
  );
  return jl(e) ? e.host : e;
}
function G0(t6) {
  const e = Tr(t6);
  return Gr(e) ? t6.ownerDocument ? t6.ownerDocument.body : t6.body : ut(e) && wi(e) ? e : G0(e);
}
function Ur(t6, e, r) {
  var n;
  e === void 0 && (e = []), r === void 0 && (r = true);
  const a = G0(t6), i = a === ((n = t6.ownerDocument) == null ? void 0 : n.body), s = Dt(a);
  if (i) {
    const o = Hl(s);
    return e.concat(s, s.visualViewport || [], wi(a) ? a : [], o && r ? Ur(o) : []);
  }
  return e.concat(a, Ur(a, [], r));
}
function Hl(t6) {
  return t6.parent && Object.getPrototypeOf(t6.parent) ? t6.frameElement : null;
}
function or(t6) {
  let e = t6.activeElement;
  for (; ((r = e) == null || (r = r.shadowRoot) == null ? void 0 : r.activeElement) != null; ) {
    var r;
    e = e.shadowRoot.activeElement;
  }
  return e;
}
function Ge(t6, e) {
  if (!t6 || !e)
    return false;
  const r = e.getRootNode == null ? void 0 : e.getRootNode();
  if (t6.contains(e))
    return true;
  if (r && jl(r)) {
    let n = e;
    for (; n; ) {
      if (t6 === n)
        return true;
      n = n.parentNode || n.host;
    }
  }
  return false;
}
function jc() {
  const t6 = navigator.userAgentData;
  return t6 != null && t6.platform ? t6.platform : navigator.platform;
}
function K0() {
  const t6 = navigator.userAgentData;
  return t6 && Array.isArray(t6.brands) ? t6.brands.map((e) => {
    let {
      brand: r,
      version: n
    } = e;
    return r + "/" + n;
  }).join(" ") : navigator.userAgent;
}
function Q0(t6) {
  return t6.mozInputSource === 0 && t6.isTrusted ? true : Bl() && t6.pointerType ? t6.type === "click" && t6.buttons === 1 : t6.detail === 0 && !t6.pointerType;
}
function Hc(t6) {
  return wD() ? false : !Bl() && t6.width === 0 && t6.height === 0 || Bl() && t6.width === 1 && t6.height === 1 && t6.pressure === 0 && t6.detail === 0 && t6.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  t6.width < 1 && t6.height < 1 && t6.pressure === 0 && t6.detail === 0 && t6.pointerType === "touch";
}
function Bc() {
  return /apple/i.test(navigator.vendor);
}
function Bl() {
  const t6 = /android/i;
  return t6.test(jc()) || t6.test(K0());
}
function J0() {
  return jc().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function wD() {
  return K0().includes("jsdom/");
}
function As(t6, e) {
  const r = ["mouse", "pen"];
  return e || r.push("", void 0), r.includes(t6);
}
function kD(t6) {
  return "nativeEvent" in t6;
}
function _D(t6) {
  return t6.matches("html,body");
}
function yt(t6) {
  return (t6 == null ? void 0 : t6.ownerDocument) || document;
}
function rl(t6, e) {
  if (e == null)
    return false;
  if ("composedPath" in t6)
    return t6.composedPath().includes(e);
  const r = t6;
  return r.target != null && e.contains(r.target);
}
function Br(t6) {
  return "composedPath" in t6 ? t6.composedPath()[0] : t6.target;
}
const OD = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function Yc(t6) {
  return ut(t6) && t6.matches(OD);
}
function st(t6) {
  t6.preventDefault(), t6.stopPropagation();
}
function Z0(t6) {
  return t6 ? t6.getAttribute("role") === "combobox" && Yc(t6) : false;
}
const SD = ["top", "right", "bottom", "left"], Xf = ["start", "end"], Gf = /* @__PURE__ */ SD.reduce((t6, e) => t6.concat(e, e + "-" + Xf[0], e + "-" + Xf[1]), []), la = Math.min, Dn = Math.max, Fs = Math.round, Xn = Math.floor, hr = (t6) => ({
  x: t6,
  y: t6
}), DD = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, MD = {
  start: "end",
  end: "start"
};
function Yl(t6, e, r) {
  return Dn(t6, la(e, r));
}
function pa(t6, e) {
  return typeof t6 == "function" ? t6(e) : t6;
}
function Pr(t6) {
  return t6.split("-")[0];
}
function gr(t6) {
  return t6.split("-")[1];
}
function em(t6) {
  return t6 === "x" ? "y" : "x";
}
function Vc(t6) {
  return t6 === "y" ? "height" : "width";
}
function ko(t6) {
  return ["top", "bottom"].includes(Pr(t6)) ? "y" : "x";
}
function qc(t6) {
  return em(ko(t6));
}
function tm(t6, e, r) {
  r === void 0 && (r = false);
  const n = gr(t6), a = qc(t6), i = Vc(a);
  let s = a === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = Ws(s)), [s, Ws(s)];
}
function CD(t6) {
  const e = Ws(t6);
  return [Ls(t6), e, Ls(e)];
}
function Ls(t6) {
  return t6.replace(/start|end/g, (e) => MD[e]);
}
function ED(t6, e, r) {
  const n = ["left", "right"], a = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (t6) {
    case "top":
    case "bottom":
      return r ? e ? a : n : e ? n : a;
    case "left":
    case "right":
      return e ? i : s;
    default:
      return [];
  }
}
function TD(t6, e, r, n) {
  const a = gr(t6);
  let i = ED(Pr(t6), r === "start", n);
  return a && (i = i.map((s) => s + "-" + a), e && (i = i.concat(i.map(Ls)))), i;
}
function Ws(t6) {
  return t6.replace(/left|right|bottom|top/g, (e) => DD[e]);
}
function PD(t6) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t6
  };
}
function rm(t6) {
  return typeof t6 != "number" ? PD(t6) : {
    top: t6,
    right: t6,
    bottom: t6,
    left: t6
  };
}
function $s(t6) {
  const {
    x: e,
    y: r,
    width: n,
    height: a
  } = t6;
  return {
    width: n,
    height: a,
    top: r,
    left: e,
    right: e + n,
    bottom: r + a,
    x: e,
    y: r
  };
}
function Kf(t6, e, r) {
  let {
    reference: n,
    floating: a
  } = t6;
  const i = ko(e), s = qc(e), o = Vc(s), l = Pr(e), c = i === "y", d = n.x + n.width / 2 - a.width / 2, u = n.y + n.height / 2 - a.height / 2, f = n[o] / 2 - a[o] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: d,
        y: n.y - a.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      h = {
        x: n.x + n.width,
        y: u
      };
      break;
    case "left":
      h = {
        x: n.x - a.width,
        y: u
      };
      break;
    default:
      h = {
        x: n.x,
        y: n.y
      };
  }
  switch (gr(e)) {
    case "start":
      h[s] -= f * (r && c ? -1 : 1);
      break;
    case "end":
      h[s] += f * (r && c ? -1 : 1);
      break;
  }
  return h;
}
const RD = async (t6, e, r) => {
  const {
    placement: n = "bottom",
    strategy: a = "absolute",
    middleware: i = [],
    platform: s
  } = r, o = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let c = await s.getElementRects({
    reference: t6,
    floating: e,
    strategy: a
  }), {
    x: d,
    y: u
  } = Kf(c, n, l), f = n, h = {}, g = 0;
  for (let m = 0; m < o.length; m++) {
    const {
      name: p,
      fn: w
    } = o[m], {
      x: b,
      y: k,
      data: v,
      reset: x
    } = await w({
      x: d,
      y: u,
      initialPlacement: n,
      placement: f,
      strategy: a,
      middlewareData: h,
      rects: c,
      platform: s,
      elements: {
        reference: t6,
        floating: e
      }
    });
    d = b ?? d, u = k ?? u, h = {
      ...h,
      [p]: {
        ...h[p],
        ...v
      }
    }, x && g <= 50 && (g++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (c = x.rects === true ? await s.getElementRects({
      reference: t6,
      floating: e,
      strategy: a
    }) : x.rects), {
      x: d,
      y: u
    } = Kf(c, f, l)), m = -1);
  }
  return {
    x: d,
    y: u,
    placement: f,
    strategy: a,
    middlewareData: h
  };
};
async function Uc(t6, e) {
  var r;
  e === void 0 && (e = {});
  const {
    x: n,
    y: a,
    platform: i,
    rects: s,
    elements: o,
    strategy: l
  } = t6, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: f = false,
    padding: h = 0
  } = pa(e, t6), g = rm(h), p = o[f ? u === "floating" ? "reference" : "floating" : u], w = $s(await i.getClippingRect({
    element: (r = await (i.isElement == null ? void 0 : i.isElement(p))) == null || r ? p : p.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), b = u === "floating" ? {
    ...s.floating,
    x: n,
    y: a
  } : s.reference, k = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(k)) ? await (i.getScale == null ? void 0 : i.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = $s(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: b,
    offsetParent: k,
    strategy: l
  }) : b);
  return {
    top: (w.top - x.top + g.top) / v.y,
    bottom: (x.bottom - w.bottom + g.bottom) / v.y,
    left: (w.left - x.left + g.left) / v.x,
    right: (x.right - w.right + g.right) / v.x
  };
}
const ND = (t6) => ({
  name: "arrow",
  options: t6,
  async fn(e) {
    const {
      x: r,
      y: n,
      placement: a,
      rects: i,
      platform: s,
      elements: o,
      middlewareData: l
    } = e, {
      element: c,
      padding: d = 0
    } = pa(t6, e) || {};
    if (c == null)
      return {};
    const u = rm(d), f = {
      x: r,
      y: n
    }, h = qc(a), g = Vc(h), m = await s.getDimensions(c), p = h === "y", w = p ? "top" : "left", b = p ? "bottom" : "right", k = p ? "clientHeight" : "clientWidth", v = i.reference[g] + i.reference[h] - f[h] - i.floating[g], x = f[h] - i.reference[h], _ = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let T = _ ? _[k] : 0;
    (!T || !await (s.isElement == null ? void 0 : s.isElement(_))) && (T = o.floating[k] || i.floating[g]);
    const S = v / 2 - x / 2, C = T / 2 - m[g] / 2 - 1, D = la(u[w], C), z = la(u[b], C), A = D, L = T - m[g] - z, M = T / 2 - m[g] / 2 + S, I = Yl(A, M, L), W = !l.arrow && gr(a) != null && M !== I && i.reference[g] / 2 - (M < A ? D : z) - m[g] / 2 < 0, B = W ? M < A ? M - A : M - L : 0;
    return {
      [h]: f[h] + B,
      data: {
        [h]: I,
        centerOffset: M - I - B,
        ...W && {
          alignmentOffset: B
        }
      },
      reset: W
    };
  }
});
function ID(t6, e, r) {
  return (t6 ? [...r.filter((a) => gr(a) === t6), ...r.filter((a) => gr(a) !== t6)] : r.filter((a) => Pr(a) === a)).filter((a) => t6 ? gr(a) === t6 || (e ? Ls(a) !== a : false) : true);
}
const AD = function(t6) {
  return t6 === void 0 && (t6 = {}), {
    name: "autoPlacement",
    options: t6,
    async fn(e) {
      var r, n, a;
      const {
        rects: i,
        middlewareData: s,
        placement: o,
        platform: l,
        elements: c
      } = e, {
        crossAxis: d = false,
        alignment: u,
        allowedPlacements: f = Gf,
        autoAlignment: h = true,
        ...g
      } = pa(t6, e), m = u !== void 0 || f === Gf ? ID(u || null, h, f) : f, p = await Uc(e, g), w = ((r = s.autoPlacement) == null ? void 0 : r.index) || 0, b = m[w];
      if (b == null)
        return {};
      const k = tm(b, i, await (l.isRTL == null ? void 0 : l.isRTL(c.floating)));
      if (o !== b)
        return {
          reset: {
            placement: m[0]
          }
        };
      const v = [p[Pr(b)], p[k[0]], p[k[1]]], x = [...((n = s.autoPlacement) == null ? void 0 : n.overflows) || [], {
        placement: b,
        overflows: v
      }], _ = m[w + 1];
      if (_)
        return {
          data: {
            index: w + 1,
            overflows: x
          },
          reset: {
            placement: _
          }
        };
      const T = x.map((D) => {
        const z = gr(D.placement);
        return [D.placement, z && d ? (
          // Check along the mainAxis and main crossAxis side.
          D.overflows.slice(0, 2).reduce((A, L) => A + L, 0)
        ) : (
          // Check only the mainAxis.
          D.overflows[0]
        ), D.overflows];
      }).sort((D, z) => D[1] - z[1]), C = ((a = T.filter((D) => D[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        gr(D[0]) ? 2 : 3
      ).every((z) => z <= 0))[0]) == null ? void 0 : a[0]) || T[0][0];
      return C !== o ? {
        data: {
          index: w + 1,
          overflows: x
        },
        reset: {
          placement: C
        }
      } : {};
    }
  };
}, FD = function(t6) {
  return t6 === void 0 && (t6 = {}), {
    name: "flip",
    options: t6,
    async fn(e) {
      var r, n;
      const {
        placement: a,
        middlewareData: i,
        rects: s,
        initialPlacement: o,
        platform: l,
        elements: c
      } = e, {
        mainAxis: d = true,
        crossAxis: u = true,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: m = true,
        ...p
      } = pa(t6, e);
      if ((r = i.arrow) != null && r.alignmentOffset)
        return {};
      const w = Pr(a), b = Pr(o) === o, k = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), v = f || (b || !m ? [Ws(o)] : CD(o));
      !f && g !== "none" && v.push(...TD(o, m, g, k));
      const x = [o, ...v], _ = await Uc(e, p), T = [];
      let S = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (d && T.push(_[w]), u) {
        const A = tm(a, s, k);
        T.push(_[A[0]], _[A[1]]);
      }
      if (S = [...S, {
        placement: a,
        overflows: T
      }], !T.every((A) => A <= 0)) {
        var C, D;
        const A = (((C = i.flip) == null ? void 0 : C.index) || 0) + 1, L = x[A];
        if (L)
          return {
            data: {
              index: A,
              overflows: S
            },
            reset: {
              placement: L
            }
          };
        let M = (D = S.filter((I) => I.overflows[0] <= 0).sort((I, W) => I.overflows[1] - W.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!M)
          switch (h) {
            case "bestFit": {
              var z;
              const I = (z = S.map((W) => [W.placement, W.overflows.filter((B) => B > 0).reduce((B, U) => B + U, 0)]).sort((W, B) => W[1] - B[1])[0]) == null ? void 0 : z[0];
              I && (M = I);
              break;
            }
            case "initialPlacement":
              M = o;
              break;
          }
        if (a !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
};
async function LD(t6, e) {
  const {
    placement: r,
    platform: n,
    elements: a
  } = t6, i = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), s = Pr(r), o = gr(r), l = ko(r) === "y", c = ["left", "top"].includes(s) ? -1 : 1, d = i && l ? -1 : 1, u = pa(e, t6);
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
  return o && typeof g == "number" && (h = o === "end" ? g * -1 : g), l ? {
    x: h * d,
    y: f * c
  } : {
    x: f * c,
    y: h * d
  };
}
const WD = function(t6) {
  return t6 === void 0 && (t6 = 0), {
    name: "offset",
    options: t6,
    async fn(e) {
      var r, n;
      const {
        x: a,
        y: i,
        placement: s,
        middlewareData: o
      } = e, l = await LD(e, t6);
      return s === ((r = o.offset) == null ? void 0 : r.placement) && (n = o.arrow) != null && n.alignmentOffset ? {} : {
        x: a + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, $D = function(t6) {
  return t6 === void 0 && (t6 = {}), {
    name: "shift",
    options: t6,
    async fn(e) {
      const {
        x: r,
        y: n,
        placement: a
      } = e, {
        mainAxis: i = true,
        crossAxis: s = false,
        limiter: o = {
          fn: (p) => {
            let {
              x: w,
              y: b
            } = p;
            return {
              x: w,
              y: b
            };
          }
        },
        ...l
      } = pa(t6, e), c = {
        x: r,
        y: n
      }, d = await Uc(e, l), u = ko(Pr(a)), f = em(u);
      let h = c[f], g = c[u];
      if (i) {
        const p = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", b = h + d[p], k = h - d[w];
        h = Yl(b, h, k);
      }
      if (s) {
        const p = u === "y" ? "top" : "left", w = u === "y" ? "bottom" : "right", b = g + d[p], k = g - d[w];
        g = Yl(b, g, k);
      }
      const m = o.fn({
        ...e,
        [f]: h,
        [u]: g
      });
      return {
        ...m,
        data: {
          x: m.x - r,
          y: m.y - n
        }
      };
    }
  };
};
function nm(t6) {
  const e = Yt(t6);
  let r = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const a = ut(t6), i = a ? t6.offsetWidth : r, s = a ? t6.offsetHeight : n, o = Fs(r) !== i || Fs(n) !== s;
  return o && (r = i, n = s), {
    width: r,
    height: n,
    $: o
  };
}
function Xc(t6) {
  return Ce(t6) ? t6 : t6.contextElement;
}
function Zn(t6) {
  const e = Xc(t6);
  if (!ut(e))
    return hr(1);
  const r = e.getBoundingClientRect(), {
    width: n,
    height: a,
    $: i
  } = nm(e);
  let s = (i ? Fs(r.width) : r.width) / n, o = (i ? Fs(r.height) : r.height) / a;
  return (!s || !Number.isFinite(s)) && (s = 1), (!o || !Number.isFinite(o)) && (o = 1), {
    x: s,
    y: o
  };
}
const zD = /* @__PURE__ */ hr(0);
function am(t6) {
  const e = Dt(t6);
  return !zc() || !e.visualViewport ? zD : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function jD(t6, e, r) {
  return e === void 0 && (e = false), !r || e && r !== Dt(t6) ? false : e;
}
function Rn(t6, e, r, n) {
  e === void 0 && (e = false), r === void 0 && (r = false);
  const a = t6.getBoundingClientRect(), i = Xc(t6);
  let s = hr(1);
  e && (n ? Ce(n) && (s = Zn(n)) : s = Zn(t6));
  const o = jD(i, r, n) ? am(i) : hr(0);
  let l = (a.left + o.x) / s.x, c = (a.top + o.y) / s.y, d = a.width / s.x, u = a.height / s.y;
  if (i) {
    const f = Dt(i), h = n && Ce(n) ? Dt(n) : n;
    let g = f, m = Hl(g);
    for (; m && n && h !== g; ) {
      const p = Zn(m), w = m.getBoundingClientRect(), b = Yt(m), k = w.left + (m.clientLeft + parseFloat(b.paddingLeft)) * p.x, v = w.top + (m.clientTop + parseFloat(b.paddingTop)) * p.y;
      l *= p.x, c *= p.y, d *= p.x, u *= p.y, l += k, c += v, g = Dt(m), m = Hl(g);
    }
  }
  return $s({
    width: d,
    height: u,
    x: l,
    y: c
  });
}
function Gc(t6, e) {
  const r = wo(t6).scrollLeft;
  return e ? e.left + r : Rn(vr(t6)).left + r;
}
function im(t6, e, r) {
  r === void 0 && (r = false);
  const n = t6.getBoundingClientRect(), a = n.left + e.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    Gc(t6, n)
  )), i = n.top + e.scrollTop;
  return {
    x: a,
    y: i
  };
}
function HD(t6) {
  let {
    elements: e,
    rect: r,
    offsetParent: n,
    strategy: a
  } = t6;
  const i = a === "fixed", s = vr(n), o = e ? xo(e.floating) : false;
  if (n === s || o && i)
    return r;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = hr(1);
  const d = hr(0), u = ut(n);
  if ((u || !u && !i) && ((An(n) !== "body" || wi(s)) && (l = wo(n)), ut(n))) {
    const h = Rn(n);
    c = Zn(n), d.x = h.x + n.clientLeft, d.y = h.y + n.clientTop;
  }
  const f = s && !u && !i ? im(s, l, true) : hr(0);
  return {
    width: r.width * c.x,
    height: r.height * c.y,
    x: r.x * c.x - l.scrollLeft * c.x + d.x + f.x,
    y: r.y * c.y - l.scrollTop * c.y + d.y + f.y
  };
}
function BD(t6) {
  return Array.from(t6.getClientRects());
}
function YD(t6) {
  const e = vr(t6), r = wo(t6), n = t6.ownerDocument.body, a = Dn(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = Dn(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -r.scrollLeft + Gc(t6);
  const o = -r.scrollTop;
  return Yt(n).direction === "rtl" && (s += Dn(e.clientWidth, n.clientWidth) - a), {
    width: a,
    height: i,
    x: s,
    y: o
  };
}
function VD(t6, e) {
  const r = Dt(t6), n = vr(t6), a = r.visualViewport;
  let i = n.clientWidth, s = n.clientHeight, o = 0, l = 0;
  if (a) {
    i = a.width, s = a.height;
    const c = zc();
    (!c || c && e === "fixed") && (o = a.offsetLeft, l = a.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: o,
    y: l
  };
}
function qD(t6, e) {
  const r = Rn(t6, true, e === "fixed"), n = r.top + t6.clientTop, a = r.left + t6.clientLeft, i = ut(t6) ? Zn(t6) : hr(1), s = t6.clientWidth * i.x, o = t6.clientHeight * i.y, l = a * i.x, c = n * i.y;
  return {
    width: s,
    height: o,
    x: l,
    y: c
  };
}
function Qf(t6, e, r) {
  let n;
  if (e === "viewport")
    n = VD(t6, r);
  else if (e === "document")
    n = YD(vr(t6));
  else if (Ce(e))
    n = qD(e, r);
  else {
    const a = am(t6);
    n = {
      x: e.x - a.x,
      y: e.y - a.y,
      width: e.width,
      height: e.height
    };
  }
  return $s(n);
}
function sm(t6, e) {
  const r = Tr(t6);
  return r === e || !Ce(r) || Gr(r) ? false : Yt(r).position === "fixed" || sm(r, e);
}
function UD(t6, e) {
  const r = e.get(t6);
  if (r)
    return r;
  let n = Ur(t6, [], false).filter((o) => Ce(o) && An(o) !== "body"), a = null;
  const i = Yt(t6).position === "fixed";
  let s = i ? Tr(t6) : t6;
  for (; Ce(s) && !Gr(s); ) {
    const o = Yt(s), l = $c(s);
    !l && o.position === "fixed" && (a = null), (i ? !l && !a : !l && o.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || wi(s) && !l && sm(t6, s)) ? n = n.filter((d) => d !== s) : a = o, s = Tr(s);
  }
  return e.set(t6, n), n;
}
function XD(t6) {
  let {
    element: e,
    boundary: r,
    rootBoundary: n,
    strategy: a
  } = t6;
  const s = [...r === "clippingAncestors" ? xo(e) ? [] : UD(e, this._c) : [].concat(r), n], o = s[0], l = s.reduce((c, d) => {
    const u = Qf(e, d, a);
    return c.top = Dn(u.top, c.top), c.right = la(u.right, c.right), c.bottom = la(u.bottom, c.bottom), c.left = Dn(u.left, c.left), c;
  }, Qf(e, o, a));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function GD(t6) {
  const {
    width: e,
    height: r
  } = nm(t6);
  return {
    width: e,
    height: r
  };
}
function KD(t6, e, r) {
  const n = ut(e), a = vr(e), i = r === "fixed", s = Rn(t6, true, i, e);
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = hr(0);
  if (n || !n && !i)
    if ((An(e) !== "body" || wi(a)) && (o = wo(e)), n) {
      const f = Rn(e, true, i, e);
      l.x = f.x + e.clientLeft, l.y = f.y + e.clientTop;
    } else a && (l.x = Gc(a));
  const c = a && !n && !i ? im(a, o) : hr(0), d = s.left + o.scrollLeft - l.x - c.x, u = s.top + o.scrollTop - l.y - c.y;
  return {
    x: d,
    y: u,
    width: s.width,
    height: s.height
  };
}
function nl(t6) {
  return Yt(t6).position === "static";
}
function Jf(t6, e) {
  if (!ut(t6) || Yt(t6).position === "fixed")
    return null;
  if (e)
    return e(t6);
  let r = t6.offsetParent;
  return vr(t6) === r && (r = r.ownerDocument.body), r;
}
function om(t6, e) {
  const r = Dt(t6);
  if (xo(t6))
    return r;
  if (!ut(t6)) {
    let a = Tr(t6);
    for (; a && !Gr(a); ) {
      if (Ce(a) && !nl(a))
        return a;
      a = Tr(a);
    }
    return r;
  }
  let n = Jf(t6, e);
  for (; n && vD(n) && nl(n); )
    n = Jf(n, e);
  return n && Gr(n) && nl(n) && !$c(n) ? r : n || xD(t6) || r;
}
const QD = async function(t6) {
  const e = this.getOffsetParent || om, r = this.getDimensions, n = await r(t6.floating);
  return {
    reference: KD(t6.reference, await e(t6.floating), t6.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function JD(t6) {
  return Yt(t6).direction === "rtl";
}
const ZD = {
  convertOffsetParentRelativeRectToViewportRelativeRect: HD,
  getDocumentElement: vr,
  getClippingRect: XD,
  getOffsetParent: om,
  getElementRects: QD,
  getClientRects: BD,
  getDimensions: GD,
  getScale: Zn,
  isElement: Ce,
  isRTL: JD
};
function lm(t6, e) {
  return t6.x === e.x && t6.y === e.y && t6.width === e.width && t6.height === e.height;
}
function eM(t6, e) {
  let r = null, n;
  const a = vr(t6);
  function i() {
    var o;
    clearTimeout(n), (o = r) == null || o.disconnect(), r = null;
  }
  function s(o, l) {
    o === void 0 && (o = false), l === void 0 && (l = 1), i();
    const c = t6.getBoundingClientRect(), {
      left: d,
      top: u,
      width: f,
      height: h
    } = c;
    if (o || e(), !f || !h)
      return;
    const g = Xn(u), m = Xn(a.clientWidth - (d + f)), p = Xn(a.clientHeight - (u + h)), w = Xn(d), k = {
      rootMargin: -g + "px " + -m + "px " + -p + "px " + -w + "px",
      threshold: Dn(0, la(1, l)) || 1
    };
    let v = true;
    function x(_) {
      const T = _[0].intersectionRatio;
      if (T !== l) {
        if (!v)
          return s();
        T ? s(false, T) : n = setTimeout(() => {
          s(false, 1e-7);
        }, 1e3);
      }
      T === 1 && !lm(c, t6.getBoundingClientRect()) && s(), v = false;
    }
    try {
      r = new IntersectionObserver(x, {
        ...k,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(x, k);
    }
    r.observe(t6);
  }
  return s(true), i;
}
function cm(t6, e, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: a = true,
    ancestorResize: i = true,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: o = typeof IntersectionObserver == "function",
    animationFrame: l = false
  } = n, c = Xc(t6), d = a || i ? [...c ? Ur(c) : [], ...Ur(e)] : [];
  d.forEach((w) => {
    a && w.addEventListener("scroll", r, {
      passive: true
    }), i && w.addEventListener("resize", r);
  });
  const u = c && o ? eM(c, r) : null;
  let f = -1, h = null;
  s && (h = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === c && h && (h.unobserve(e), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var k;
      (k = h) == null || k.observe(e);
    })), r();
  }), c && !l && h.observe(c), h.observe(e));
  let g, m = l ? Rn(t6) : null;
  l && p();
  function p() {
    const w = Rn(t6);
    m && !lm(m, w) && r(), m = w, g = requestAnimationFrame(p);
  }
  return r(), () => {
    var w;
    d.forEach((b) => {
      a && b.removeEventListener("scroll", r), i && b.removeEventListener("resize", r);
    }), u == null || u(), (w = h) == null || w.disconnect(), h = null, l && cancelAnimationFrame(g);
  };
}
const tM = WD, rM = AD, nM = $D, aM = FD, Zf = ND, iM = (t6, e, r) => {
  const n = /* @__PURE__ */ new Map(), a = {
    platform: ZD,
    ...r
  }, i = {
    ...a.platform,
    _c: n
  };
  return RD(t6, e, {
    ...a,
    platform: i
  });
};
var hs = typeof document < "u" ? ac : lt;
function zs(t6, e) {
  if (t6 === e)
    return true;
  if (typeof t6 != typeof e)
    return false;
  if (typeof t6 == "function" && t6.toString() === e.toString())
    return true;
  let r, n, a;
  if (t6 && e && typeof t6 == "object") {
    if (Array.isArray(t6)) {
      if (r = t6.length, r !== e.length) return false;
      for (n = r; n-- !== 0; )
        if (!zs(t6[n], e[n]))
          return false;
      return true;
    }
    if (a = Object.keys(t6), r = a.length, r !== Object.keys(e).length)
      return false;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(e, a[n]))
        return false;
    for (n = r; n-- !== 0; ) {
      const i = a[n];
      if (!(i === "_owner" && t6.$$typeof) && !zs(t6[i], e[i]))
        return false;
    }
    return true;
  }
  return t6 !== t6 && e !== e;
}
function dm(t6) {
  return typeof window > "u" ? 1 : (t6.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function eh(t6, e) {
  const r = dm(t6);
  return Math.round(e * r) / r;
}
function al(t6) {
  const e = $.useRef(t6);
  return hs(() => {
    e.current = t6;
  }), e;
}
function sM(t6) {
  t6 === void 0 && (t6 = {});
  const {
    placement: e = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: a,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: o = true,
    whileElementsMounted: l,
    open: c
  } = t6, [d, u] = $.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: e,
    middlewareData: {},
    isPositioned: false
  }), [f, h] = $.useState(n);
  zs(f, n) || h(n);
  const [g, m] = $.useState(null), [p, w] = $.useState(null), b = $.useCallback((U) => {
    U !== _.current && (_.current = U, m(U));
  }, []), k = $.useCallback((U) => {
    U !== T.current && (T.current = U, w(U));
  }, []), v = i || g, x = s || p, _ = $.useRef(null), T = $.useRef(null), S = $.useRef(d), C = l != null, D = al(l), z = al(a), A = al(c), L = $.useCallback(() => {
    if (!_.current || !T.current)
      return;
    const U = {
      placement: e,
      strategy: r,
      middleware: f
    };
    z.current && (U.platform = z.current), iM(_.current, T.current, U).then((J) => {
      const E = {
        ...J,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: A.current !== false
      };
      M.current && !zs(S.current, E) && (S.current = E, Dy.flushSync(() => {
        u(E);
      }));
    });
  }, [f, e, r, z, A]);
  hs(() => {
    c === false && S.current.isPositioned && (S.current.isPositioned = false, u((U) => ({
      ...U,
      isPositioned: false
    })));
  }, [c]);
  const M = $.useRef(false);
  hs(() => (M.current = true, () => {
    M.current = false;
  }), []), hs(() => {
    if (v && (_.current = v), x && (T.current = x), v && x) {
      if (D.current)
        return D.current(v, x, L);
      L();
    }
  }, [v, x, L, D, C]);
  const I = $.useMemo(() => ({
    reference: _,
    floating: T,
    setReference: b,
    setFloating: k
  }), [b, k]), W = $.useMemo(() => ({
    reference: v,
    floating: x
  }), [v, x]), B = $.useMemo(() => {
    const U = {
      position: r,
      left: 0,
      top: 0
    };
    if (!W.floating)
      return U;
    const J = eh(W.floating, d.x), E = eh(W.floating, d.y);
    return o ? {
      ...U,
      transform: "translate(" + J + "px, " + E + "px)",
      ...dm(W.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: J,
      top: E
    };
  }, [r, o, W.floating, d.x, d.y]);
  return $.useMemo(() => ({
    ...d,
    update: L,
    refs: I,
    elements: W,
    floatingStyles: B
  }), [d, L, I, W, B]);
}
const oM = (t6) => {
  function e(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: t6,
    fn(r) {
      const {
        element: n,
        padding: a
      } = typeof t6 == "function" ? t6(r) : t6;
      return n && e(n) ? n.current != null ? Zf({
        element: n.current,
        padding: a
      }).fn(r) : {} : n ? Zf({
        element: n,
        padding: a
      }).fn(r) : {};
    }
  };
}, lM = (t6, e) => ({
  ...tM(t6),
  options: [t6, e]
}), cM = (t6, e) => ({
  ...nM(t6),
  options: [t6, e]
}), dM = (t6, e) => ({
  ...aM(t6),
  options: [t6, e]
}), uM = (t6, e) => ({
  ...rM(t6),
  options: [t6, e]
}), fM = (t6, e) => ({
  ...oM(t6),
  options: [t6, e]
});
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var hM = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], js = /* @__PURE__ */ hM.join(","), um = typeof Element > "u", ca = um ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Hs = !um && Element.prototype.getRootNode ? function(t6) {
  var e;
  return t6 == null || (e = t6.getRootNode) === null || e === void 0 ? void 0 : e.call(t6);
} : function(t6) {
  return t6 == null ? void 0 : t6.ownerDocument;
}, Bs = function t2(e, r) {
  var n;
  r === void 0 && (r = true);
  var a = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "inert"), i = a === "" || a === "true", s = i || r && e && t2(e.parentNode);
  return s;
}, gM = function(e) {
  var r, n = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "contenteditable");
  return n === "" || n === "true";
}, mM = function(e, r, n) {
  if (Bs(e))
    return [];
  var a = Array.prototype.slice.apply(e.querySelectorAll(js));
  return r && ca.call(e, js) && a.unshift(e), a = a.filter(n), a;
}, pM = function t3(e, r, n) {
  for (var a = [], i = Array.from(e); i.length; ) {
    var s = i.shift();
    if (!Bs(s, false))
      if (s.tagName === "SLOT") {
        var o = s.assignedElements(), l = o.length ? o : s.children, c = t3(l, true, n);
        n.flatten ? a.push.apply(a, c) : a.push({
          scopeParent: s,
          candidates: c
        });
      } else {
        var d = ca.call(s, js);
        d && n.filter(s) && (r || !e.includes(s)) && a.push(s);
        var u = s.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(s), f = !Bs(u, false) && (!n.shadowRootFilter || n.shadowRootFilter(s));
        if (u && f) {
          var h = t3(u === true ? s.children : u.children, true, n);
          n.flatten ? a.push.apply(a, h) : a.push({
            scopeParent: s,
            candidates: h
          });
        } else
          i.unshift.apply(i, s.children);
      }
  }
  return a;
}, fm = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, hm = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || gM(e)) && !fm(e) ? 0 : e.tabIndex;
}, bM = function(e, r) {
  var n = hm(e);
  return n < 0 && r && !fm(e) ? 0 : n;
}, yM = function(e, r) {
  return e.tabIndex === r.tabIndex ? e.documentOrder - r.documentOrder : e.tabIndex - r.tabIndex;
}, gm = function(e) {
  return e.tagName === "INPUT";
}, vM = function(e) {
  return gm(e) && e.type === "hidden";
}, xM = function(e) {
  var r = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return r;
}, wM = function(e, r) {
  for (var n = 0; n < e.length; n++)
    if (e[n].checked && e[n].form === r)
      return e[n];
}, kM = function(e) {
  if (!e.name)
    return true;
  var r = e.form || Hs(e), n = function(o) {
    return r.querySelectorAll('input[type="radio"][name="' + o + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = n(window.CSS.escape(e.name));
  else
    try {
      a = n(e.name);
    } catch (s) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), false;
    }
  var i = wM(a, e.form);
  return !i || i === e;
}, _M = function(e) {
  return gm(e) && e.type === "radio";
}, OM = function(e) {
  return _M(e) && !kM(e);
}, SM = function(e) {
  var r, n = e && Hs(e), a = (r = n) === null || r === void 0 ? void 0 : r.host, i = false;
  if (n && n !== e) {
    var s, o, l;
    for (i = !!((s = a) !== null && s !== void 0 && (o = s.ownerDocument) !== null && o !== void 0 && o.contains(a) || e != null && (l = e.ownerDocument) !== null && l !== void 0 && l.contains(e)); !i && a; ) {
      var c, d, u;
      n = Hs(a), a = (c = n) === null || c === void 0 ? void 0 : c.host, i = !!((d = a) !== null && d !== void 0 && (u = d.ownerDocument) !== null && u !== void 0 && u.contains(a));
    }
  }
  return i;
}, th = function(e) {
  var r = e.getBoundingClientRect(), n = r.width, a = r.height;
  return n === 0 && a === 0;
}, DM = function(e, r) {
  var n = r.displayCheck, a = r.getShadowRoot;
  if (getComputedStyle(e).visibility === "hidden")
    return true;
  var i = ca.call(e, "details>summary:first-of-type"), s = i ? e.parentElement : e;
  if (ca.call(s, "details:not([open]) *"))
    return true;
  if (!n || n === "full" || n === "legacy-full") {
    if (typeof a == "function") {
      for (var o = e; e; ) {
        var l = e.parentElement, c = Hs(e);
        if (l && !l.shadowRoot && a(l) === true)
          return th(e);
        e.assignedSlot ? e = e.assignedSlot : !l && c !== e.ownerDocument ? e = c.host : e = l;
      }
      e = o;
    }
    if (SM(e))
      return !e.getClientRects().length;
    if (n !== "legacy-full")
      return true;
  } else if (n === "non-zero-area")
    return th(e);
  return false;
}, MM = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var r = e.parentElement; r; ) {
      if (r.tagName === "FIELDSET" && r.disabled) {
        for (var n = 0; n < r.children.length; n++) {
          var a = r.children.item(n);
          if (a.tagName === "LEGEND")
            return ca.call(r, "fieldset[disabled] *") ? true : !a.contains(e);
        }
        return true;
      }
      r = r.parentElement;
    }
  return false;
}, CM = function(e, r) {
  return !(r.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Bs(r) || vM(r) || DM(r, e) || // For a details element with a summary, the summary element gets the focus
  xM(r) || MM(r));
}, Vl = function(e, r) {
  return !(OM(r) || hm(r) < 0 || !CM(e, r));
}, EM = function(e) {
  var r = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(r) || r >= 0);
}, TM = function t4(e) {
  var r = [], n = [];
  return e.forEach(function(a, i) {
    var s = !!a.scopeParent, o = s ? a.scopeParent : a, l = bM(o, s), c = s ? t4(a.candidates) : o;
    l === 0 ? s ? r.push.apply(r, c) : r.push(o) : n.push({
      documentOrder: i,
      tabIndex: l,
      item: a,
      isScope: s,
      content: c
    });
  }), n.sort(yM).reduce(function(a, i) {
    return i.isScope ? a.push.apply(a, i.content) : a.push(i.content), a;
  }, []).concat(r);
}, _o = function(e, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = pM([e], r.includeContainer, {
    filter: Vl.bind(null, r),
    flatten: false,
    getShadowRoot: r.getShadowRoot,
    shadowRootFilter: EM
  }) : n = mM(e, r.includeContainer, Vl.bind(null, r)), TM(n);
}, PM = function(e, r) {
  if (r = r || {}, !e)
    throw new Error("No node provided");
  return ca.call(e, js) === false ? false : Vl(r, e);
};
function mm(t6) {
  return $.useMemo(() => t6.every((e) => e == null) ? null : (e) => {
    t6.forEach((r) => {
      typeof r == "function" ? r(e) : r != null && (r.current = e);
    });
  }, t6);
}
const RM = $.useInsertionEffect, NM = RM || ((t6) => t6());
function lr(t6) {
  const e = $.useRef(() => {
  });
  return NM(() => {
    e.current = t6;
  }), $.useCallback(function() {
    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
      n[a] = arguments[a];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
const Kc = "ArrowUp", ki = "ArrowDown", da = "ArrowLeft", ba = "ArrowRight";
function Gi(t6, e, r) {
  return Math.floor(t6 / e) !== r;
}
function Qa(t6, e) {
  return e < 0 || e >= t6.current.length;
}
function il(t6, e) {
  return gt(t6, {
    disabledIndices: e
  });
}
function rh(t6, e) {
  return gt(t6, {
    decrement: true,
    startingIndex: t6.current.length,
    disabledIndices: e
  });
}
function gt(t6, e) {
  let {
    startingIndex: r = -1,
    decrement: n = false,
    disabledIndices: a,
    amount: i = 1
  } = e === void 0 ? {} : e;
  const s = t6.current, o = a ? (c) => a.includes(c) : (c) => {
    const d = s[c];
    return d == null || d.hasAttribute("disabled") || d.getAttribute("aria-disabled") === "true";
  };
  let l = r;
  do
    l += n ? -i : i;
  while (l >= 0 && l <= s.length - 1 && o(l));
  return l;
}
function IM(t6, e) {
  let {
    event: r,
    orientation: n,
    loop: a,
    cols: i,
    disabledIndices: s,
    minIndex: o,
    maxIndex: l,
    prevIndex: c,
    stopEvent: d = false
  } = e, u = c;
  if (r.key === Kc) {
    if (d && st(r), c === -1)
      u = l;
    else if (u = gt(t6, {
      startingIndex: u,
      amount: i,
      decrement: true,
      disabledIndices: s
    }), a && (c - i < o || u < 0)) {
      const f = c % i, h = l % i, g = l - (h - f);
      h === f ? u = l : u = h > f ? g : g - i;
    }
    Qa(t6, u) && (u = c);
  }
  if (r.key === ki && (d && st(r), c === -1 ? u = o : (u = gt(t6, {
    startingIndex: c,
    amount: i,
    disabledIndices: s
  }), a && c + i > l && (u = gt(t6, {
    startingIndex: c % i - i,
    amount: i,
    disabledIndices: s
  }))), Qa(t6, u) && (u = c)), n === "both") {
    const f = Xn(c / i);
    r.key === ba && (d && st(r), c % i !== i - 1 ? (u = gt(t6, {
      startingIndex: c,
      disabledIndices: s
    }), a && Gi(u, i, f) && (u = gt(t6, {
      startingIndex: c - c % i - 1,
      disabledIndices: s
    }))) : a && (u = gt(t6, {
      startingIndex: c - c % i - 1,
      disabledIndices: s
    })), Gi(u, i, f) && (u = c)), r.key === da && (d && st(r), c % i !== 0 ? (u = gt(t6, {
      startingIndex: c,
      disabledIndices: s,
      decrement: true
    }), a && Gi(u, i, f) && (u = gt(t6, {
      startingIndex: c + (i - c % i),
      decrement: true,
      disabledIndices: s
    }))) : a && (u = gt(t6, {
      startingIndex: c + (i - c % i),
      decrement: true,
      disabledIndices: s
    })), Gi(u, i, f) && (u = c));
    const h = Xn(l / i) === f;
    Qa(t6, u) && (a && h ? u = r.key === da ? l : gt(t6, {
      startingIndex: c - c % i - 1,
      disabledIndices: s
    }) : u = c);
  }
  return u;
}
function AM(t6, e, r) {
  const n = [];
  let a = 0;
  return t6.forEach((i, s) => {
    let {
      width: o,
      height: l
    } = i;
    let c = false;
    for (r && (a = 0); !c; ) {
      const d = [];
      for (let u = 0; u < o; u++)
        for (let f = 0; f < l; f++)
          d.push(a + u + f * e);
      a % e + o <= e && d.every((u) => n[u] == null) ? (d.forEach((u) => {
        n[u] = s;
      }), c = true) : a++;
    }
  }), [...n];
}
function FM(t6, e, r, n, a) {
  if (t6 === -1) return -1;
  const i = r.indexOf(t6);
  switch (a) {
    case "tl":
      return i;
    case "tr":
      return i + e[t6].width - 1;
    case "bl":
      return i + (e[t6].height - 1) * n;
    case "br":
      return r.lastIndexOf(t6);
  }
}
function LM(t6, e) {
  return e.flatMap((r, n) => t6.includes(r) ? [n] : []);
}
let nh = 0;
function Dr(t6, e) {
  e === void 0 && (e = {});
  const {
    preventScroll: r = false,
    cancelPrevious: n = true,
    sync: a = false
  } = e;
  n && cancelAnimationFrame(nh);
  const i = () => t6 == null ? void 0 : t6.focus({
    preventScroll: r
  });
  a ? i() : nh = requestAnimationFrame(i);
}
var Re = typeof document < "u" ? ac : lt;
function WM(t6, e) {
  const r = t6.compareDocumentPosition(e);
  return r & Node.DOCUMENT_POSITION_FOLLOWING || r & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING || r & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function $M(t6, e) {
  if (t6.size !== e.size)
    return false;
  for (const [r, n] of t6.entries())
    if (n !== e.get(r))
      return false;
  return true;
}
const pm = /* @__PURE__ */ $.createContext({
  register: () => {
  },
  unregister: () => {
  },
  map: /* @__PURE__ */ new Map(),
  elementsRef: {
    current: []
  }
});
function zM(t6) {
  let {
    children: e,
    elementsRef: r,
    labelsRef: n
  } = t6;
  const [a, i] = $.useState(() => /* @__PURE__ */ new Map()), s = $.useCallback((l) => {
    i((c) => new Map(c).set(l, null));
  }, []), o = $.useCallback((l) => {
    i((c) => {
      const d = new Map(c);
      return d.delete(l), d;
    });
  }, []);
  return Re(() => {
    const l = new Map(a);
    Array.from(l.keys()).sort(WM).forEach((d, u) => {
      l.set(d, u);
    }), $M(a, l) || i(l);
  }, [a]), /* @__PURE__ */ $.createElement(pm.Provider, {
    value: $.useMemo(() => ({
      register: s,
      unregister: o,
      map: a,
      elementsRef: r,
      labelsRef: n
    }), [s, o, a, r, n])
  }, e);
}
function jM(t6) {
  let {
    label: e
  } = t6 === void 0 ? {} : t6;
  const [r, n] = $.useState(null), a = $.useRef(null), {
    register: i,
    unregister: s,
    map: o,
    elementsRef: l,
    labelsRef: c
  } = $.useContext(pm), d = $.useCallback((u) => {
    if (a.current = u, r !== null && (l.current[r] = u, c)) {
      var f;
      const h = e !== void 0;
      c.current[r] = h ? e : (f = u == null ? void 0 : u.textContent) != null ? f : null;
    }
  }, [r, l, c, e]);
  return Re(() => {
    const u = a.current;
    if (u)
      return i(u), () => {
        s(u);
      };
  }, [i, s]), Re(() => {
    const u = a.current ? o.get(a.current) : null;
    u != null && n(u);
  }, [o]), $.useMemo(() => ({
    ref: d,
    index: r ?? -1
  }), [r, d]);
}
function fi() {
  return fi = Object.assign ? Object.assign.bind() : function(t6) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t6[n] = r[n]);
    }
    return t6;
  }, fi.apply(this, arguments);
}
let sl = false, HM = 0;
const ah = () => "floating-ui-" + HM++;
function BM() {
  const [t6, e] = $.useState(() => sl ? ah() : void 0);
  return Re(() => {
    t6 == null && e(ah());
  }, []), $.useEffect(() => {
    sl || (sl = true);
  }, []), t6;
}
const YM = $.useId, Oo = YM || BM;
function VM() {
  const t6 = /* @__PURE__ */ new Map();
  return {
    emit(e, r) {
      var n;
      (n = t6.get(e)) == null || n.forEach((a) => a(r));
    },
    on(e, r) {
      t6.set(e, [...t6.get(e) || [], r]);
    },
    off(e, r) {
      var n;
      t6.set(e, ((n = t6.get(e)) == null ? void 0 : n.filter((a) => a !== r)) || []);
    }
  };
}
const qM = /* @__PURE__ */ $.createContext(null), UM = /* @__PURE__ */ $.createContext(null), So = () => {
  var t6;
  return ((t6 = $.useContext(qM)) == null ? void 0 : t6.id) || null;
}, _i = () => $.useContext(UM);
function Nn(t6) {
  return "data-floating-ui-" + t6;
}
function mr(t6) {
  const e = Gt(t6);
  return Re(() => {
    e.current = t6;
  }), e;
}
const ih = /* @__PURE__ */ Nn("safe-polygon");
function ol(t6, e, r) {
  return r && !As(r) ? 0 : typeof t6 == "number" ? t6 : t6 == null ? void 0 : t6[e];
}
function XM(t6, e) {
  e === void 0 && (e = {});
  const {
    open: r,
    onOpenChange: n,
    dataRef: a,
    events: i,
    elements: {
      domReference: s,
      floating: o
    },
    refs: l
  } = t6, {
    enabled: c = true,
    delay: d = 0,
    handleClose: u = null,
    mouseOnly: f = false,
    restMs: h = 0,
    move: g = true
  } = e, m = _i(), p = So(), w = mr(u), b = mr(d), k = $.useRef(), v = $.useRef(), x = $.useRef(), _ = $.useRef(), T = $.useRef(true), S = $.useRef(false), C = $.useRef(() => {
  }), D = $.useCallback(() => {
    var M;
    const I = (M = a.current.openEvent) == null ? void 0 : M.type;
    return (I == null ? void 0 : I.includes("mouse")) && I !== "mousedown";
  }, [a]);
  $.useEffect(() => {
    if (!c)
      return;
    function M(I) {
      let {
        open: W
      } = I;
      W || (clearTimeout(v.current), clearTimeout(_.current), T.current = true);
    }
    return i.on("openchange", M), () => {
      i.off("openchange", M);
    };
  }, [c, i]), $.useEffect(() => {
    if (!c || !w.current || !r)
      return;
    function M(W) {
      D() && n(false, W, "hover");
    }
    const I = yt(o).documentElement;
    return I.addEventListener("mouseleave", M), () => {
      I.removeEventListener("mouseleave", M);
    };
  }, [o, r, n, c, w, D]);
  const z = $.useCallback(function(M, I, W) {
    I === void 0 && (I = true), W === void 0 && (W = "hover");
    const B = ol(b.current, "close", k.current);
    B && !x.current ? (clearTimeout(v.current), v.current = setTimeout(() => n(false, M, W), B)) : I && (clearTimeout(v.current), n(false, M, W));
  }, [b, n]), A = $.useCallback(() => {
    C.current(), x.current = void 0;
  }, []), L = $.useCallback(() => {
    if (S.current) {
      const M = yt(l.floating.current).body;
      M.style.pointerEvents = "", M.removeAttribute(ih), S.current = false;
    }
  }, [l]);
  return $.useEffect(() => {
    if (!c)
      return;
    function M() {
      return a.current.openEvent ? ["click", "mousedown"].includes(a.current.openEvent.type) : false;
    }
    function I(U) {
      if (clearTimeout(v.current), T.current = false, f && !As(k.current) || h > 0 && ol(b.current, "open") === 0)
        return;
      const J = ol(b.current, "open", k.current);
      J ? v.current = setTimeout(() => {
        n(true, U, "hover");
      }, J) : n(true, U, "hover");
    }
    function W(U) {
      if (M())
        return;
      C.current();
      const J = yt(o);
      if (clearTimeout(_.current), w.current) {
        r || clearTimeout(v.current), x.current = w.current({
          ...t6,
          tree: m,
          x: U.clientX,
          y: U.clientY,
          onClose() {
            L(), A(), z(U, true, "safe-polygon");
          }
        });
        const j = x.current;
        J.addEventListener("mousemove", j), C.current = () => {
          J.removeEventListener("mousemove", j);
        };
        return;
      }
      (k.current === "touch" ? !Ge(o, U.relatedTarget) : true) && z(U);
    }
    function B(U) {
      M() || w.current == null || w.current({
        ...t6,
        tree: m,
        x: U.clientX,
        y: U.clientY,
        onClose() {
          L(), A(), z(U);
        }
      })(U);
    }
    if (Ce(s)) {
      const U = s;
      return r && U.addEventListener("mouseleave", B), o == null || o.addEventListener("mouseleave", B), g && U.addEventListener("mousemove", I, {
        once: true
      }), U.addEventListener("mouseenter", I), U.addEventListener("mouseleave", W), () => {
        r && U.removeEventListener("mouseleave", B), o == null || o.removeEventListener("mouseleave", B), g && U.removeEventListener("mousemove", I), U.removeEventListener("mouseenter", I), U.removeEventListener("mouseleave", W);
      };
    }
  }, [s, o, c, t6, f, h, g, z, A, L, n, r, m, b, w, a]), Re(() => {
    var M;
    if (c && r && (M = w.current) != null && M.__options.blockPointerEvents && D()) {
      const W = yt(o).body;
      if (W.setAttribute(ih, ""), W.style.pointerEvents = "none", S.current = true, Ce(s) && o) {
        var I;
        const B = s, U = m == null || (I = m.nodesRef.current.find((J) => J.id === p)) == null || (I = I.context) == null ? void 0 : I.elements.floating;
        return U && (U.style.pointerEvents = ""), B.style.pointerEvents = "auto", o.style.pointerEvents = "auto", () => {
          B.style.pointerEvents = "", o.style.pointerEvents = "";
        };
      }
    }
  }, [c, r, p, o, s, m, w, D]), Re(() => {
    r || (k.current = void 0, A(), L());
  }, [r, A, L]), $.useEffect(() => () => {
    A(), clearTimeout(v.current), clearTimeout(_.current), L();
  }, [c, s, A, L]), $.useMemo(() => {
    if (!c)
      return {};
    function M(I) {
      k.current = I.pointerType;
    }
    return {
      reference: {
        onPointerDown: M,
        onPointerEnter: M,
        onMouseMove(I) {
          r || h === 0 || (clearTimeout(_.current), _.current = setTimeout(() => {
            T.current || n(true, I.nativeEvent, "hover");
          }, h));
        }
      },
      floating: {
        onMouseEnter() {
          clearTimeout(v.current);
        },
        onMouseLeave(I) {
          z(I.nativeEvent, false);
        }
      }
    };
  }, [c, h, r, n, z]);
}
function GM(t6, e) {
  var r;
  let n = [], a = (r = t6.find((i) => i.id === e)) == null ? void 0 : r.parentId;
  for (; a; ) {
    const i = t6.find((s) => s.id === a);
    a = i == null ? void 0 : i.parentId, i && (n = n.concat(i));
  }
  return n;
}
function Mn(t6, e) {
  let r = t6.filter((a) => {
    var i;
    return a.parentId === e && ((i = a.context) == null ? void 0 : i.open);
  }), n = r;
  for (; n.length; )
    n = t6.filter((a) => {
      var i;
      return (i = n) == null ? void 0 : i.some((s) => {
        var o;
        return a.parentId === s.id && ((o = a.context) == null ? void 0 : o.open);
      });
    }), r = r.concat(n);
  return r;
}
function KM(t6, e) {
  let r, n = -1;
  function a(i, s) {
    s > n && (r = i, n = s), Mn(t6, i).forEach((l) => {
      a(l.id, s + 1);
    });
  }
  return a(e, 0), t6.find((i) => i.id === r);
}
let jn = /* @__PURE__ */ new WeakMap(), Ki = /* @__PURE__ */ new WeakSet(), Qi = {}, ll = 0;
const QM = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype, bm = (t6) => t6 && (t6.host || bm(t6.parentNode)), JM = (t6, e) => e.map((r) => {
  if (t6.contains(r))
    return r;
  const n = bm(r);
  return t6.contains(n) ? n : null;
}).filter((r) => r != null);
function ZM(t6, e, r, n) {
  const a = "data-floating-ui-inert", i = n ? "inert" : r ? "aria-hidden" : null, s = JM(e, t6), o = /* @__PURE__ */ new Set(), l = new Set(s), c = [];
  Qi[a] || (Qi[a] = /* @__PURE__ */ new WeakMap());
  const d = Qi[a];
  s.forEach(u), f(e), o.clear();
  function u(h) {
    !h || o.has(h) || (o.add(h), h.parentNode && u(h.parentNode));
  }
  function f(h) {
    !h || l.has(h) || Array.prototype.forEach.call(h.children, (g) => {
      if (o.has(g))
        f(g);
      else {
        const m = i ? g.getAttribute(i) : null, p = m !== null && m !== "false", w = (jn.get(g) || 0) + 1, b = (d.get(g) || 0) + 1;
        jn.set(g, w), d.set(g, b), c.push(g), w === 1 && p && Ki.add(g), b === 1 && g.setAttribute(a, ""), !p && i && g.setAttribute(i, "true");
      }
    });
  }
  return ll++, () => {
    c.forEach((h) => {
      const g = (jn.get(h) || 0) - 1, m = (d.get(h) || 0) - 1;
      jn.set(h, g), d.set(h, m), g || (!Ki.has(h) && i && h.removeAttribute(i), Ki.delete(h)), m || h.removeAttribute(a);
    }), ll--, ll || (jn = /* @__PURE__ */ new WeakMap(), jn = /* @__PURE__ */ new WeakMap(), Ki = /* @__PURE__ */ new WeakSet(), Qi = {});
  };
}
function sh(t6, e, r) {
  e === void 0 && (e = false), r === void 0 && (r = false);
  const n = yt(t6[0]).body;
  return ZM(t6.concat(Array.from(n.querySelectorAll("[aria-live]"))), n, e, r);
}
const hi = () => ({
  getShadowRoot: true,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function ym(t6, e) {
  const r = _o(t6, hi());
  e === "prev" && r.reverse();
  const n = r.indexOf(or(yt(t6)));
  return r.slice(n + 1)[0];
}
function vm() {
  return ym(document.body, "next");
}
function xm() {
  return ym(document.body, "prev");
}
function Ja(t6, e) {
  const r = e || t6.currentTarget, n = t6.relatedTarget;
  return !n || !Ge(r, n);
}
function e2(t6) {
  _o(t6, hi()).forEach((r) => {
    r.dataset.tabindex = r.getAttribute("tabindex") || "", r.setAttribute("tabindex", "-1");
  });
}
function t22(t6) {
  t6.querySelectorAll("[data-tabindex]").forEach((r) => {
    const n = r.dataset.tabindex;
    delete r.dataset.tabindex, n ? r.setAttribute("tabindex", n) : r.removeAttribute("tabindex");
  });
}
const Qc = {
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
let r2;
function oh(t6) {
  t6.key === "Tab" && (t6.target, clearTimeout(r2));
}
const Ys = /* @__PURE__ */ $.forwardRef(function(e, r) {
  const [n, a] = $.useState();
  Re(() => (Bc() && a("button"), document.addEventListener("keydown", oh), () => {
    document.removeEventListener("keydown", oh);
  }), []);
  const i = {
    ref: r,
    tabIndex: 0,
    // Role is only for VoiceOver
    role: n,
    "aria-hidden": n ? void 0 : true,
    [Nn("focus-guard")]: "",
    style: Qc
  };
  return /* @__PURE__ */ $.createElement("span", fi({}, e, i));
}), wm = /* @__PURE__ */ $.createContext(null), lh = /* @__PURE__ */ Nn("portal");
function n2(t6) {
  let {
    id: e,
    root: r
  } = t6 === void 0 ? {} : t6;
  const [n, a] = $.useState(null), i = Oo(), s = km(), o = $.useRef(null);
  return Re(() => () => {
    n == null || n.remove(), queueMicrotask(() => {
      o.current = null;
    });
  }, [n]), Re(() => {
    if (o.current) return;
    const l = e ? document.getElementById(e) : null;
    if (!l) return;
    const c = document.createElement("div");
    c.id = i, c.setAttribute(lh, ""), l.appendChild(c), o.current = c, a(c);
  }, [e, i]), Re(() => {
    if (o.current) return;
    let l = r || (s == null ? void 0 : s.portalNode);
    l && !Ce(l) && (l = l.current), l = l || document.body;
    let c = null;
    e && (c = document.createElement("div"), c.id = e, l.appendChild(c));
    const d = document.createElement("div");
    d.id = i, d.setAttribute(lh, ""), l = c || l, l.appendChild(d), o.current = d, a(d);
  }, [e, r, i, s]), n;
}
function a2(t6) {
  let {
    children: e,
    id: r,
    root: n = null,
    preserveTabOrder: a = true
  } = t6;
  const i = n2({
    id: r,
    root: n
  }), [s, o] = $.useState(null), l = $.useRef(null), c = $.useRef(null), d = $.useRef(null), u = $.useRef(null), f = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!s && // Guards are only for non-modal focus management.
    !s.modal && // Don't render if unmount is transitioning.
    s.open && a && !!(n || i)
  );
  return $.useEffect(() => {
    if (!i || !a || s != null && s.modal)
      return;
    function h(g) {
      i && Ja(g) && (g.type === "focusin" ? t22 : e2)(i);
    }
    return i.addEventListener("focusin", h, true), i.addEventListener("focusout", h, true), () => {
      i.removeEventListener("focusin", h, true), i.removeEventListener("focusout", h, true);
    };
  }, [i, a, s == null ? void 0 : s.modal]), /* @__PURE__ */ $.createElement(wm.Provider, {
    value: $.useMemo(() => ({
      preserveTabOrder: a,
      beforeOutsideRef: l,
      afterOutsideRef: c,
      beforeInsideRef: d,
      afterInsideRef: u,
      portalNode: i,
      setFocusManagerState: o
    }), [a, i])
  }, f && i && /* @__PURE__ */ $.createElement(Ys, {
    "data-type": "outside",
    ref: l,
    onFocus: (h) => {
      if (Ja(h, i)) {
        var g;
        (g = d.current) == null || g.focus();
      } else {
        const m = xm() || (s == null ? void 0 : s.refs.domReference.current);
        m == null || m.focus();
      }
    }
  }), f && i && /* @__PURE__ */ $.createElement("span", {
    "aria-owns": i.id,
    style: Qc
  }), i && /* @__PURE__ */ My(e, i), f && i && /* @__PURE__ */ $.createElement(Ys, {
    "data-type": "outside",
    ref: c,
    onFocus: (h) => {
      if (Ja(h, i)) {
        var g;
        (g = u.current) == null || g.focus();
      } else {
        const m = vm() || (s == null ? void 0 : s.refs.domReference.current);
        m == null || m.focus(), s != null && s.closeOnFocusOut && (s == null || s.onOpenChange(false, h.nativeEvent));
      }
    }
  }));
}
const km = () => $.useContext(wm), i2 = 20;
let pn = [];
function cl(t6) {
  pn = pn.filter((r) => r.isConnected);
  let e = t6;
  if (!(!e || An(e) === "body")) {
    if (!PM(e, hi())) {
      const r = _o(e, hi())[0];
      if (!r) return;
      e = r;
    }
    pn.push(e), pn.length > i2 && (pn = pn.slice(-20));
  }
}
function ch() {
  return pn.slice().reverse().find((t6) => t6.isConnected);
}
const s2 = /* @__PURE__ */ $.forwardRef(function(e, r) {
  return /* @__PURE__ */ $.createElement("button", fi({}, e, {
    type: "button",
    ref: r,
    tabIndex: -1,
    style: Qc
  }));
});
function _m(t6) {
  const {
    context: e,
    children: r,
    disabled: n = false,
    order: a = ["content"],
    guards: i = true,
    initialFocus: s = 0,
    returnFocus: o = true,
    modal: l = true,
    visuallyHiddenDismiss: c = false,
    closeOnFocusOut: d = true
  } = t6, {
    open: u,
    refs: f,
    nodeId: h,
    onOpenChange: g,
    events: m,
    dataRef: p,
    elements: {
      domReference: w,
      floating: b
    }
  } = e, k = typeof s == "number" && s < 0, v = Z0(w) && k, x = QM() ? i : true, _ = mr(a), T = mr(s), S = mr(o), C = _i(), D = km(), z = $.useRef(null), A = $.useRef(null), L = $.useRef(false), M = $.useRef(false), I = D != null, W = $.useCallback(function(E) {
    return E === void 0 && (E = b), E ? _o(E, hi()) : [];
  }, [b]), B = $.useCallback((E) => {
    const j = W(E);
    return _.current.map((N) => w && N === "reference" ? w : b && N === "floating" ? b : j).filter(Boolean).flat();
  }, [w, b, _, W]);
  $.useEffect(() => {
    if (n || !l) return;
    function E(N) {
      if (N.key === "Tab") {
        Ge(b, or(yt(b))) && W().length === 0 && !v && st(N);
        const R = B(), P = Br(N);
        _.current[0] === "reference" && P === w && (st(N), N.shiftKey ? Dr(R[R.length - 1]) : Dr(R[1])), _.current[1] === "floating" && P === b && N.shiftKey && (st(N), Dr(R[0]));
      }
    }
    const j = yt(b);
    return j.addEventListener("keydown", E), () => {
      j.removeEventListener("keydown", E);
    };
  }, [n, w, b, l, _, v, W, B]), $.useEffect(() => {
    if (n || !d) return;
    function E() {
      M.current = true, setTimeout(() => {
        M.current = false;
      });
    }
    function j(N) {
      const R = N.relatedTarget;
      queueMicrotask(() => {
        const P = !(Ge(w, R) || Ge(b, R) || Ge(R, b) || Ge(D == null ? void 0 : D.portalNode, R) || R != null && R.hasAttribute(Nn("focus-guard")) || C && (Mn(C.nodesRef.current, h).find((O) => {
          var F, X;
          return Ge((F = O.context) == null ? void 0 : F.elements.floating, R) || Ge((X = O.context) == null ? void 0 : X.elements.domReference, R);
        }) || GM(C.nodesRef.current, h).find((O) => {
          var F, X;
          return ((F = O.context) == null ? void 0 : F.elements.floating) === R || ((X = O.context) == null ? void 0 : X.elements.domReference) === R;
        })));
        R && P && !M.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        R !== ch() && (L.current = true, g(false, N));
      });
    }
    if (b && ut(w))
      return w.addEventListener("focusout", j), w.addEventListener("pointerdown", E), !l && b.addEventListener("focusout", j), () => {
        w.removeEventListener("focusout", j), w.removeEventListener("pointerdown", E), !l && b.removeEventListener("focusout", j);
      };
  }, [n, w, b, l, h, C, D, g, d]), $.useEffect(() => {
    var E;
    if (n) return;
    const j = Array.from((D == null || (E = D.portalNode) == null ? void 0 : E.querySelectorAll("[" + Nn("portal") + "]")) || []);
    if (b) {
      const N = [b, ...j, z.current, A.current, _.current.includes("reference") || v ? w : null].filter((P) => P != null), R = l || v ? sh(N, x, !x) : sh(N);
      return () => {
        R();
      };
    }
  }, [n, w, b, l, _, D, v, x]), Re(() => {
    if (n || !b) return;
    const E = yt(b), j = or(E);
    queueMicrotask(() => {
      const N = B(b), R = T.current, P = (typeof R == "number" ? N[R] : R.current) || b, O = Ge(b, j);
      !k && !O && u && Dr(P, {
        preventScroll: P === b
      });
    });
  }, [n, u, b, k, B, T]), Re(() => {
    if (n || !b) return;
    let E = false;
    const j = yt(b), N = or(j), R = p.current;
    cl(N);
    function P(O) {
      let {
        reason: F,
        event: X,
        nested: q
      } = O;
      F === "escape-key" && f.domReference.current && cl(f.domReference.current), F === "hover" && X.type === "mouseleave" && (L.current = true), F === "outside-press" && (q ? (L.current = false, E = true) : L.current = !(Q0(X) || Hc(X)));
    }
    return m.on("openchange", P), () => {
      m.off("openchange", P);
      const O = or(j), F = Ge(b, O) || C && Mn(C.nodesRef.current, h).some((G) => {
        var Z;
        return Ge((Z = G.context) == null ? void 0 : Z.elements.floating, O);
      });
      (F || R.openEvent && ["click", "mousedown"].includes(R.openEvent.type)) && f.domReference.current && cl(f.domReference.current);
      const q = ch();
      S.current && !L.current && ut(q) && // If the focus moved somewhere else after mount, avoid returning focus
      // since it likely entered a different element which should be
      // respected: https://github.com/floating-ui/floating-ui/issues/2607
      (!(q !== O && O !== j.body) || F) && Dr(q, {
        // When dismissing nested floating elements, by the time the rAF has
        // executed, the menus will all have been unmounted. When they try
        // to get focused, the calls get ignored — leaving the root
        // reference focused as desired.
        cancelPrevious: false,
        preventScroll: E
      });
    };
  }, [n, b, S, p, f, m, C, h]), Re(() => {
    if (!(n || !D))
      return D.setFocusManagerState({
        modal: l,
        closeOnFocusOut: d,
        open: u,
        onOpenChange: g,
        refs: f
      }), () => {
        D.setFocusManagerState(null);
      };
  }, [n, D, l, u, g, f, d]), Re(() => {
    if (n || !b || typeof MutationObserver != "function" || k)
      return;
    const E = () => {
      const N = b.getAttribute("tabindex");
      _.current.includes("floating") || or(yt(b)) !== f.domReference.current && W().length === 0 ? N !== "0" && b.setAttribute("tabindex", "0") : N !== "-1" && b.setAttribute("tabindex", "-1");
    };
    E();
    const j = new MutationObserver(E);
    return j.observe(b, {
      childList: true,
      subtree: true,
      attributes: true
    }), () => {
      j.disconnect();
    };
  }, [n, b, f, _, W, k]);
  function U(E) {
    return n || !c || !l ? null : /* @__PURE__ */ $.createElement(s2, {
      ref: E === "start" ? z : A,
      onClick: (j) => g(false, j.nativeEvent)
    }, typeof c == "string" ? c : "Dismiss");
  }
  const J = !n && x && (I || l);
  return /* @__PURE__ */ $.createElement($.Fragment, null, J && /* @__PURE__ */ $.createElement(Ys, {
    "data-type": "inside",
    ref: D == null ? void 0 : D.beforeInsideRef,
    onFocus: (E) => {
      if (l) {
        const N = B();
        Dr(a[0] === "reference" ? N[0] : N[N.length - 1]);
      } else if (D != null && D.preserveTabOrder && D.portalNode)
        if (L.current = false, Ja(E, D.portalNode)) {
          const N = vm() || w;
          N == null || N.focus();
        } else {
          var j;
          (j = D.beforeOutsideRef.current) == null || j.focus();
        }
    }
  }), !v && U("start"), r, U("end"), J && /* @__PURE__ */ $.createElement(Ys, {
    "data-type": "inside",
    ref: D == null ? void 0 : D.afterInsideRef,
    onFocus: (E) => {
      if (l)
        Dr(B()[0]);
      else if (D != null && D.preserveTabOrder && D.portalNode)
        if (d && (L.current = true), Ja(E, D.portalNode)) {
          const N = xm() || w;
          N == null || N.focus();
        } else {
          var j;
          (j = D.afterOutsideRef.current) == null || j.focus();
        }
    }
  }));
}
const dl = /* @__PURE__ */ new Set(), o2 = /* @__PURE__ */ $.forwardRef(function(e, r) {
  let {
    lockScroll: n = false,
    ...a
  } = e;
  const i = Oo();
  return Re(() => {
    if (!n) return;
    dl.add(i);
    const s = /iP(hone|ad|od)|iOS/.test(jc()), o = document.body.style, c = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight", d = window.innerWidth - document.documentElement.clientWidth, u = o.left ? parseFloat(o.left) : window.pageXOffset, f = o.top ? parseFloat(o.top) : window.pageYOffset;
    if (o.overflow = "hidden", d && (o[c] = d + "px"), s) {
      var h, g;
      const m = ((h = window.visualViewport) == null ? void 0 : h.offsetLeft) || 0, p = ((g = window.visualViewport) == null ? void 0 : g.offsetTop) || 0;
      Object.assign(o, {
        position: "fixed",
        top: -(f - Math.floor(p)) + "px",
        left: -(u - Math.floor(m)) + "px",
        right: "0"
      });
    }
    return () => {
      dl.delete(i), dl.size === 0 && (Object.assign(o, {
        overflow: "",
        [c]: ""
      }), s && (Object.assign(o, {
        position: "",
        top: "",
        left: "",
        right: ""
      }), window.scrollTo(u, f)));
    };
  }, [i, n]), /* @__PURE__ */ $.createElement("div", fi({
    ref: r
  }, a, {
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...a.style
    }
  }));
});
function dh(t6) {
  return ut(t6.target) && t6.target.tagName === "BUTTON";
}
function uh(t6) {
  return Yc(t6);
}
function Om(t6, e) {
  e === void 0 && (e = {});
  const {
    open: r,
    onOpenChange: n,
    dataRef: a,
    elements: {
      domReference: i
    }
  } = t6, {
    enabled: s = true,
    event: o = "click",
    toggle: l = true,
    ignoreMouse: c = false,
    keyboardHandlers: d = true
  } = e, u = $.useRef(), f = $.useRef(false);
  return $.useMemo(() => s ? {
    reference: {
      onPointerDown(h) {
        u.current = h.pointerType;
      },
      onMouseDown(h) {
        h.button === 0 && (As(u.current, true) && c || o !== "click" && (r && l && (!a.current.openEvent || a.current.openEvent.type === "mousedown") ? n(false, h.nativeEvent, "click") : (h.preventDefault(), n(true, h.nativeEvent, "click"))));
      },
      onClick(h) {
        if (o === "mousedown" && u.current) {
          u.current = void 0;
          return;
        }
        As(u.current, true) && c || (r && l && (!a.current.openEvent || a.current.openEvent.type === "click") ? n(false, h.nativeEvent, "click") : n(true, h.nativeEvent, "click"));
      },
      onKeyDown(h) {
        u.current = void 0, !(h.defaultPrevented || !d || dh(h)) && (h.key === " " && !uh(i) && (h.preventDefault(), f.current = true), h.key === "Enter" && n(!(r && l), h.nativeEvent, "click"));
      },
      onKeyUp(h) {
        h.defaultPrevented || !d || dh(h) || uh(i) || h.key === " " && f.current && (f.current = false, n(!(r && l), h.nativeEvent, "click"));
      }
    }
  } : {}, [s, a, o, c, d, i, l, r, n]);
}
const l2 = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, c2 = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, fh = (t6) => {
  var e, r;
  return {
    escapeKey: typeof t6 == "boolean" ? t6 : (e = t6 == null ? void 0 : t6.escapeKey) != null ? e : false,
    outsidePress: typeof t6 == "boolean" ? t6 : (r = t6 == null ? void 0 : t6.outsidePress) != null ? r : true
  };
};
function Sm(t6, e) {
  e === void 0 && (e = {});
  const {
    open: r,
    onOpenChange: n,
    nodeId: a,
    elements: {
      reference: i,
      domReference: s,
      floating: o
    },
    dataRef: l
  } = t6, {
    enabled: c = true,
    escapeKey: d = true,
    outsidePress: u = true,
    outsidePressEvent: f = "pointerdown",
    referencePress: h = false,
    referencePressEvent: g = "pointerdown",
    ancestorScroll: m = false,
    bubbles: p,
    capture: w
  } = e, b = _i(), k = lr(typeof u == "function" ? u : () => false), v = typeof u == "function" ? k : u, x = $.useRef(false), _ = $.useRef(false), {
    escapeKey: T,
    outsidePress: S
  } = fh(p), {
    escapeKey: C,
    outsidePress: D
  } = fh(w), z = lr((I) => {
    if (!r || !c || !d || I.key !== "Escape")
      return;
    const W = b ? Mn(b.nodesRef.current, a) : [];
    if (!T && (I.stopPropagation(), W.length > 0)) {
      let B = true;
      if (W.forEach((U) => {
        var J;
        if ((J = U.context) != null && J.open && !U.context.dataRef.current.__escapeKeyBubbles) {
          B = false;
          return;
        }
      }), !B)
        return;
    }
    n(false, kD(I) ? I.nativeEvent : I, "escape-key");
  }), A = lr((I) => {
    var W;
    const B = () => {
      var U;
      z(I), (U = Br(I)) == null || U.removeEventListener("keydown", B);
    };
    (W = Br(I)) == null || W.addEventListener("keydown", B);
  }), L = lr((I) => {
    const W = x.current;
    x.current = false;
    const B = _.current;
    if (_.current = false, f === "click" && B || W || typeof v == "function" && !v(I))
      return;
    const U = Br(I), J = "[" + Nn("inert") + "]", E = yt(o).querySelectorAll(J);
    let j = Ce(U) ? U : null;
    for (; j && !Gr(j); ) {
      const P = Tr(j);
      if (Gr(P) || !Ce(P))
        break;
      j = P;
    }
    if (E.length && Ce(U) && !_D(U) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !Ge(U, o) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(E).every((P) => !Ge(j, P)))
      return;
    if (ut(U) && o) {
      const P = U.clientWidth > 0 && U.scrollWidth > U.clientWidth, O = U.clientHeight > 0 && U.scrollHeight > U.clientHeight;
      let F = O && I.offsetX > U.clientWidth;
      if (O && Yt(U).direction === "rtl" && (F = I.offsetX <= U.offsetWidth - U.clientWidth), F || P && I.offsetY > U.clientHeight)
        return;
    }
    const N = b && Mn(b.nodesRef.current, a).some((P) => {
      var O;
      return rl(I, (O = P.context) == null ? void 0 : O.elements.floating);
    });
    if (rl(I, o) || rl(I, s) || N)
      return;
    const R = b ? Mn(b.nodesRef.current, a) : [];
    if (R.length > 0) {
      let P = true;
      if (R.forEach((O) => {
        var F;
        if ((F = O.context) != null && F.open && !O.context.dataRef.current.__outsidePressBubbles) {
          P = false;
          return;
        }
      }), !P)
        return;
    }
    n(false, I, "outside-press");
  }), M = lr((I) => {
    var W;
    const B = () => {
      var U;
      L(I), (U = Br(I)) == null || U.removeEventListener(f, B);
    };
    (W = Br(I)) == null || W.addEventListener(f, B);
  });
  return $.useEffect(() => {
    if (!r || !c)
      return;
    l.current.__escapeKeyBubbles = T, l.current.__outsidePressBubbles = S;
    function I(U) {
      n(false, U, "ancestor-scroll");
    }
    const W = yt(o);
    d && W.addEventListener("keydown", C ? A : z, C), v && W.addEventListener(f, D ? M : L, D);
    let B = [];
    return m && (Ce(s) && (B = Ur(s)), Ce(o) && (B = B.concat(Ur(o))), !Ce(i) && i && i.contextElement && (B = B.concat(Ur(i.contextElement)))), B = B.filter((U) => {
      var J;
      return U !== ((J = W.defaultView) == null ? void 0 : J.visualViewport);
    }), B.forEach((U) => {
      U.addEventListener("scroll", I, {
        passive: true
      });
    }), () => {
      d && W.removeEventListener("keydown", C ? A : z, C), v && W.removeEventListener(f, D ? M : L, D), B.forEach((U) => {
        U.removeEventListener("scroll", I);
      });
    };
  }, [l, o, s, i, d, v, f, r, n, m, c, T, S, z, C, A, L, D, M]), $.useEffect(() => {
    x.current = false;
  }, [v, f]), $.useMemo(() => c ? {
    reference: {
      onKeyDown: z,
      [l2[g]]: (I) => {
        h && n(false, I.nativeEvent, "reference-press");
      }
    },
    floating: {
      onKeyDown: z,
      onMouseDown() {
        _.current = true;
      },
      onMouseUp() {
        _.current = true;
      },
      [c2[f]]: () => {
        x.current = true;
      }
    }
  } : {}, [c, h, f, g, n, z]);
}
function Dm(t6) {
  var e;
  t6 === void 0 && (t6 = {});
  const {
    open: r = false,
    onOpenChange: n,
    nodeId: a
  } = t6;
  const [l, c] = $.useState(null), d = ((e = t6.elements) == null ? void 0 : e.reference) || l, u = sM(t6), f = _i(), h = So() != null, g = lr((S, C, D) => {
    S && (p.current.openEvent = C), w.emit("openchange", {
      open: S,
      event: C,
      reason: D,
      nested: h
    }), n == null || n(S, C, D);
  }), m = $.useRef(null), p = $.useRef({}), w = $.useState(() => VM())[0], b = Oo(), k = $.useCallback((S) => {
    const C = Ce(S) ? {
      getBoundingClientRect: () => S.getBoundingClientRect(),
      contextElement: S
    } : S;
    u.refs.setReference(C);
  }, [u.refs]), v = $.useCallback((S) => {
    (Ce(S) || S === null) && (m.current = S, c(S)), (Ce(u.refs.reference.current) || u.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    S !== null && !Ce(S)) && u.refs.setReference(S);
  }, [u.refs]), x = $.useMemo(() => ({
    ...u.refs,
    setReference: v,
    setPositionReference: k,
    domReference: m
  }), [u.refs, v, k]), _ = $.useMemo(() => ({
    ...u.elements,
    domReference: d
  }), [u.elements, d]), T = $.useMemo(() => ({
    ...u,
    refs: x,
    elements: _,
    dataRef: p,
    nodeId: a,
    floatingId: b,
    events: w,
    open: r,
    onOpenChange: g
  }), [u, a, b, w, r, g, x, _]);
  return Re(() => {
    const S = f == null ? void 0 : f.nodesRef.current.find((C) => C.id === a);
    S && (S.context = T);
  }), $.useMemo(() => ({
    ...u,
    context: T,
    refs: x,
    elements: _
  }), [u, x, _, T]);
}
function d2(t6, e) {
  e === void 0 && (e = {});
  const {
    open: r,
    onOpenChange: n,
    events: a,
    refs: i,
    elements: {
      domReference: s
    }
  } = t6, {
    enabled: o = true,
    visibleOnly: l = true
  } = e, c = $.useRef(false), d = $.useRef(), u = $.useRef(true);
  return $.useEffect(() => {
    if (!o)
      return;
    const f = Dt(s);
    function h() {
      !r && ut(s) && s === or(yt(s)) && (c.current = true);
    }
    function g() {
      u.current = true;
    }
    return f.addEventListener("blur", h), f.addEventListener("keydown", g, true), () => {
      f.removeEventListener("blur", h), f.removeEventListener("keydown", g, true);
    };
  }, [s, r, o]), $.useEffect(() => {
    if (!o)
      return;
    function f(h) {
      let {
        reason: g
      } = h;
      (g === "reference-press" || g === "escape-key") && (c.current = true);
    }
    return a.on("openchange", f), () => {
      a.off("openchange", f);
    };
  }, [a, o]), $.useEffect(() => () => {
    clearTimeout(d.current);
  }, []), $.useMemo(() => o ? {
    reference: {
      onPointerDown(f) {
        Hc(f.nativeEvent) || (u.current = false);
      },
      onMouseLeave() {
        c.current = false;
      },
      onFocus(f) {
        if (c.current) return;
        const h = Br(f.nativeEvent);
        if (l && Ce(h))
          try {
            if (Bc() && J0()) throw Error();
            if (!h.matches(":focus-visible")) return;
          } catch {
            if (!u.current && !Yc(h))
              return;
          }
        n(true, f.nativeEvent, "focus");
      },
      onBlur(f) {
        c.current = false;
        const h = f.relatedTarget, g = Ce(h) && h.hasAttribute(Nn("focus-guard")) && h.getAttribute("data-type") === "outside";
        d.current = window.setTimeout(() => {
          const m = or(s ? s.ownerDocument : document);
          !h && m === s || Ge(i.floating.current, m) || Ge(s, m) || g || n(false, f.nativeEvent, "focus");
        });
      }
    }
  } : {}, [o, l, s, i, n]);
}
const hh = "active", gh = "selected";
function ul(t6, e, r) {
  const n = /* @__PURE__ */ new Map(), a = r === "item";
  let i = t6;
  if (a && t6) {
    const {
      [hh]: s,
      [gh]: o,
      ...l
    } = t6;
    i = l;
  }
  return {
    ...r === "floating" && {
      tabIndex: -1
    },
    ...i,
    ...e.map((s) => {
      const o = s ? s[r] : null;
      return typeof o == "function" ? t6 ? o(t6) : null : o;
    }).concat(t6).reduce((s, o) => (o && Object.entries(o).forEach((l) => {
      let [c, d] = l;
      if (!(a && [hh, gh].includes(c)))
        if (c.indexOf("on") === 0) {
          if (n.has(c) || n.set(c, []), typeof d == "function") {
            var u;
            (u = n.get(c)) == null || u.push(d), s[c] = function() {
              for (var f, h = arguments.length, g = new Array(h), m = 0; m < h; m++)
                g[m] = arguments[m];
              return (f = n.get(c)) == null ? void 0 : f.map((p) => p(...g)).find((p) => p !== void 0);
            };
          }
        } else
          s[c] = d;
    }), s), {})
  };
}
function Mm(t6) {
  t6 === void 0 && (t6 = []);
  const e = t6, r = $.useCallback((i) => ul(i, t6, "reference"), e), n = $.useCallback((i) => ul(i, t6, "floating"), e), a = $.useCallback(
    (i) => ul(i, t6, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    t6.map((i) => i == null ? void 0 : i.item)
  );
  return $.useMemo(() => ({
    getReferenceProps: r,
    getFloatingProps: n,
    getItemProps: a
  }), [r, n, a]);
}
let mh = false;
function Do(t6, e, r) {
  switch (t6) {
    case "vertical":
      return e;
    case "horizontal":
      return r;
    default:
      return e || r;
  }
}
function ph(t6, e) {
  return Do(e, t6 === Kc || t6 === ki, t6 === da || t6 === ba);
}
function fl(t6, e, r) {
  return Do(e, t6 === ki, r ? t6 === da : t6 === ba) || t6 === "Enter" || t6 === " " || t6 === "";
}
function u2(t6, e, r) {
  return Do(e, r ? t6 === da : t6 === ba, t6 === ki);
}
function bh(t6, e, r) {
  return Do(e, r ? t6 === ba : t6 === da, t6 === Kc);
}
function f2(t6, e) {
  const {
    open: r,
    onOpenChange: n,
    refs: a,
    elements: {
      domReference: i,
      floating: s
    }
  } = t6, {
    listRef: o,
    activeIndex: l,
    onNavigate: c = () => {
    },
    enabled: d = true,
    selectedIndex: u = null,
    allowEscape: f = false,
    loop: h = false,
    nested: g = false,
    rtl: m = false,
    virtual: p = false,
    focusItemOnOpen: w = "auto",
    focusItemOnHover: b = true,
    openOnArrowKeyDown: k = true,
    disabledIndices: v = void 0,
    orientation: x = "vertical",
    cols: _ = 1,
    scrollItemIntoView: T = true,
    virtualItemRef: S,
    itemSizes: C,
    dense: D = false
  } = e;
  const z = So(), A = _i(), L = lr(c), M = $.useRef(w), I = $.useRef(u ?? -1), W = $.useRef(null), B = $.useRef(true), U = $.useRef(L), J = $.useRef(!!s), E = $.useRef(false), j = $.useRef(false), N = mr(v), R = mr(r), P = mr(T), [O, F] = $.useState(), [X, q] = $.useState(), G = lr(function(H, ae, re) {
    re === void 0 && (re = false);
    const le = H.current[ae.current];
    le && (p ? (F(le.id), A == null || A.events.emit("virtualfocus", le), S && (S.current = le)) : Dr(le, {
      preventScroll: true,
      // Mac Safari does not move the virtual cursor unless the focus call
      // is sync. However, for the very first focus call, we need to wait
      // for the position to be ready in order to prevent unwanted
      // scrolling. This means the virtual cursor will not move to the first
      // item when first opening the floating element, but will on
      // subsequent calls. `preventScroll` is supported in modern Safari,
      // so we can use that instead.
      // iOS Safari must be async or the first item will not be focused.
      sync: J0() && Bc() ? mh || E.current : false
    }), requestAnimationFrame(() => {
      const fe = P.current;
      fe && le && (re || !B.current) && (le.scrollIntoView == null || le.scrollIntoView(typeof fe == "boolean" ? {
        block: "nearest",
        inline: "nearest"
      } : fe));
    }));
  });
  Re(() => {
    document.createElement("div").focus({
      get preventScroll() {
        return mh = true, false;
      }
    });
  }, []), Re(() => {
    d && (r && s ? M.current && u != null && (j.current = true, I.current = u, L(u)) : J.current && (I.current = -1, U.current(null)));
  }, [d, r, s, u, L]), Re(() => {
    if (d && r && s)
      if (l == null) {
        if (E.current = false, u != null)
          return;
        if (J.current && (I.current = -1, G(o, I)), !J.current && M.current && (W.current != null || M.current === true && W.current == null)) {
          let H = 0;
          const ae = () => {
            o.current[0] == null ? (H < 2 && (H ? requestAnimationFrame : queueMicrotask)(ae), H++) : (I.current = W.current == null || fl(W.current, x, m) || g ? il(o, N.current) : rh(o, N.current), W.current = null, L(I.current));
          };
          ae();
        }
      } else Qa(o, l) || (I.current = l, G(o, I, j.current), j.current = false);
  }, [d, r, s, l, u, g, o, x, m, L, G, N]), Re(() => {
    var H;
    if (!d || s || !A || p || !J.current)
      return;
    const ae = A.nodesRef.current, re = (H = ae.find((de) => de.id === z)) == null || (H = H.context) == null ? void 0 : H.elements.floating, le = or(yt(s)), fe = ae.some((de) => de.context && Ge(de.context.elements.floating, le));
    re && !fe && B.current && re.focus({
      preventScroll: true
    });
  }, [d, s, A, z, p]), Re(() => {
    if (!d || !A || !p || z) return;
    function H(ae) {
      q(ae.id), S && (S.current = ae);
    }
    return A.events.on("virtualfocus", H), () => {
      A.events.off("virtualfocus", H);
    };
  }, [d, A, p, z, S]), Re(() => {
    U.current = L, J.current = !!s;
  }), Re(() => {
    r || (W.current = null);
  }, [r]);
  const Z = l != null, ne = $.useMemo(() => {
    function H(re) {
      if (!r) return;
      const le = o.current.indexOf(re);
      le !== -1 && L(le);
    }
    return {
      onFocus(re) {
        let {
          currentTarget: le
        } = re;
        H(le);
      },
      onClick: (re) => {
        let {
          currentTarget: le
        } = re;
        return le.focus({
          preventScroll: true
        });
      },
      // Safari
      ...b && {
        onMouseMove(re) {
          let {
            currentTarget: le
          } = re;
          H(le);
        },
        onPointerLeave(re) {
          let {
            pointerType: le
          } = re;
          !B.current || le === "touch" || (I.current = -1, G(o, I), L(null), p || Dr(a.floating.current, {
            preventScroll: true
          }));
        }
      }
    };
  }, [r, a, G, b, o, L, p]);
  return $.useMemo(() => {
    if (!d)
      return {};
    const H = N.current;
    function ae(ie) {
      if (B.current = false, E.current = true, !R.current && ie.currentTarget === a.floating.current)
        return;
      if (g && bh(ie.key, x, m)) {
        st(ie), n(false, ie.nativeEvent, "list-navigation"), ut(i) && !p && i.focus();
        return;
      }
      const $e = I.current, ge = il(o, H), Fe = rh(o, H);
      if (ie.key === "Home" && (st(ie), I.current = ge, L(I.current)), ie.key === "End" && (st(ie), I.current = Fe, L(I.current)), _ > 1) {
        const je = C || Array.from({
          length: o.current.length
        }, () => ({
          width: 1,
          height: 1
        })), Ye = AM(je, _, D), Et = Ye.findIndex((Pt) => Pt != null && !(H != null && H.includes(Pt))), Tt = Ye.reduce((Pt, Wr, Rt) => Wr != null && !(H != null && H.includes(Wr)) ? Rt : Pt, -1);
        if (I.current = Ye[IM({
          current: Ye.map((Pt) => Pt != null ? o.current[Pt] : null)
        }, {
          event: ie,
          orientation: x,
          loop: h,
          cols: _,
          // treat undefined (empty grid spaces) as disabled indices so we
          // don't end up in them
          disabledIndices: LM([...H || [], void 0], Ye),
          minIndex: Et,
          maxIndex: Tt,
          prevIndex: FM(
            I.current,
            je,
            Ye,
            _,
            // use a corner matching the edge closest to the direction
            // we're moving in so we don't end up in the same item. Prefer
            // top/left over bottom/right.
            ie.key === ki ? "bl" : ie.key === ba ? "tr" : "tl"
          ),
          stopEvent: true
        })], L(I.current), x === "both")
          return;
      }
      if (ph(ie.key, x)) {
        if (st(ie), r && !p && or(ie.currentTarget.ownerDocument) === ie.currentTarget) {
          I.current = fl(ie.key, x, m) ? ge : Fe, L(I.current);
          return;
        }
        fl(ie.key, x, m) ? h ? I.current = $e >= Fe ? f && $e !== o.current.length ? -1 : ge : gt(o, {
          startingIndex: $e,
          disabledIndices: H
        }) : I.current = Math.min(Fe, gt(o, {
          startingIndex: $e,
          disabledIndices: H
        })) : h ? I.current = $e <= ge ? f && $e !== -1 ? o.current.length : Fe : gt(o, {
          startingIndex: $e,
          decrement: true,
          disabledIndices: H
        }) : I.current = Math.max(ge, gt(o, {
          startingIndex: $e,
          decrement: true,
          disabledIndices: H
        })), Qa(o, I.current) ? L(null) : L(I.current);
      }
    }
    function re(ie) {
      w === "auto" && Q0(ie.nativeEvent) && (M.current = true);
    }
    function le(ie) {
      M.current = w, w === "auto" && Hc(ie.nativeEvent) && (M.current = true);
    }
    const fe = p && r && Z && {
      "aria-activedescendant": X || O
    }, de = o.current.find((ie) => (ie == null ? void 0 : ie.id) === O);
    return {
      reference: {
        ...fe,
        onKeyDown(ie) {
          B.current = false;
          const $e = ie.key.indexOf("Arrow") === 0, ge = u2(ie.key, x, m), Fe = bh(ie.key, x, m), je = ph(ie.key, x), Ye = (g ? ge : je) || ie.key === "Enter" || ie.key.trim() === "";
          if (p && r) {
            const Wr = A == null ? void 0 : A.nodesRef.current.find((Pi) => Pi.parentId == null), Rt = A && Wr ? KM(A.nodesRef.current, Wr.id) : null;
            if ($e && Rt && S) {
              const Pi = new KeyboardEvent("keydown", {
                key: ie.key,
                bubbles: true
              });
              if (ge || Fe) {
                var Et, Tt;
                const xy = ((Et = Rt.context) == null ? void 0 : Et.elements.domReference) === ie.currentTarget, Ld = Fe && !xy ? (Tt = Rt.context) == null ? void 0 : Tt.elements.domReference : ge ? de : null;
                Ld && (st(ie), Ld.dispatchEvent(Pi), q(void 0));
              }
              if (je && Rt.context && Rt.context.open && Rt.parentId && ie.currentTarget !== Rt.context.elements.domReference) {
                var Pt;
                st(ie), (Pt = Rt.context.elements.domReference) == null || Pt.dispatchEvent(Pi);
                return;
              }
            }
            return ae(ie);
          }
          if (!(!r && !k && $e)) {
            if (Ye && (W.current = g && je ? null : ie.key), g) {
              ge && (st(ie), r ? (I.current = il(o, H), L(I.current)) : n(true, ie.nativeEvent, "list-navigation"));
              return;
            }
            je && (u != null && (I.current = u), st(ie), !r && k ? n(true, ie.nativeEvent, "list-navigation") : ae(ie), r && L(I.current));
          }
        },
        onFocus() {
          r && L(null);
        },
        onPointerDown: le,
        onMouseDown: re,
        onClick: re
      },
      floating: {
        "aria-orientation": x === "both" ? void 0 : x,
        ...!Z0(i) && fe,
        onKeyDown: ae,
        onPointerMove() {
          B.current = true;
        }
      },
      item: ne
    };
  }, [i, a, O, X, N, R, o, d, x, m, p, r, Z, g, u, k, f, _, h, w, L, n, ne, A, S, C, D]);
}
const h2 = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", false]]);
function Cm(t6, e) {
  var r;
  e === void 0 && (e = {});
  const {
    open: n,
    floatingId: a
  } = t6, {
    enabled: i = true,
    role: s = "dialog"
  } = e, o = (r = h2.get(s)) != null ? r : s, l = Oo(), d = So() != null;
  return $.useMemo(() => {
    if (!i) return {};
    const u = {
      id: a,
      ...o && {
        role: o
      }
    };
    return o === "tooltip" || s === "label" ? {
      reference: {
        ["aria-" + (s === "label" ? "labelledby" : "describedby")]: n ? a : void 0
      },
      floating: u
    } : {
      reference: {
        "aria-expanded": n ? "true" : "false",
        "aria-haspopup": o === "alertdialog" ? "dialog" : o,
        "aria-controls": n ? a : void 0,
        ...o === "listbox" && {
          role: "combobox"
        },
        ...o === "menu" && {
          id: l
        },
        ...o === "menu" && d && {
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
        ...o === "menu" && {
          "aria-labelledby": l
        }
      },
      item(f) {
        let {
          active: h,
          selected: g
        } = f;
        const m = {
          role: "option",
          ...h && {
            id: a + "-option"
          }
        };
        switch (s) {
          case "select":
            return {
              ...m,
              "aria-selected": h && g
            };
          case "combobox":
            return {
              ...m,
              ...h && {
                "aria-selected": true
              }
            };
        }
        return {};
      }
    };
  }, [i, s, o, n, a, l, d]);
}
function g2(t6, e) {
  var r;
  const {
    open: n,
    dataRef: a
  } = t6, {
    listRef: i,
    activeIndex: s,
    onMatch: o,
    onTypingChange: l,
    enabled: c = true,
    findMatch: d = null,
    resetMs: u = 750,
    ignoreKeys: f = [],
    selectedIndex: h = null
  } = e, g = $.useRef(), m = $.useRef(""), p = $.useRef((r = h ?? s) != null ? r : -1), w = $.useRef(null), b = lr(o), k = lr(l), v = mr(d), x = mr(f);
  return Re(() => {
    n && (clearTimeout(g.current), w.current = null, m.current = "");
  }, [n]), Re(() => {
    if (n && m.current === "") {
      var _;
      p.current = (_ = h ?? s) != null ? _ : -1;
    }
  }, [n, h, s]), $.useMemo(() => {
    if (!c)
      return {};
    function _(C) {
      C ? a.current.typing || (a.current.typing = C, k(C)) : a.current.typing && (a.current.typing = C, k(C));
    }
    function T(C, D, z) {
      const A = v.current ? v.current(D, z) : D.find((L) => (L == null ? void 0 : L.toLocaleLowerCase().indexOf(z.toLocaleLowerCase())) === 0);
      return A ? C.indexOf(A) : -1;
    }
    function S(C) {
      const D = i.current;
      if (m.current.length > 0 && m.current[0] !== " " && (T(D, D, m.current) === -1 ? _(false) : C.key === " " && st(C)), D == null || x.current.includes(C.key) || // Character key.
      C.key.length !== 1 || // Modifier key.
      C.ctrlKey || C.metaKey || C.altKey)
        return;
      n && C.key !== " " && (st(C), _(true)), D.every((M) => {
        var I, W;
        return M ? ((I = M[0]) == null ? void 0 : I.toLocaleLowerCase()) !== ((W = M[1]) == null ? void 0 : W.toLocaleLowerCase()) : true;
      }) && m.current === C.key && (m.current = "", p.current = w.current), m.current += C.key, clearTimeout(g.current), g.current = setTimeout(() => {
        m.current = "", p.current = w.current, _(false);
      }, u);
      const A = p.current, L = T(D, [...D.slice((A || 0) + 1), ...D.slice(0, (A || 0) + 1)], m.current);
      L !== -1 ? (b(L), w.current = L) : C.key !== " " && (m.current = "", _(false));
    }
    return {
      reference: {
        onKeyDown: S
      },
      floating: {
        onKeyDown: S,
        onKeyUp(C) {
          C.key === " " && _(false);
        }
      }
    };
  }, [c, n, a, i, u, x, v, b, k]);
}
function yh(t6, e) {
  const [r, n] = t6;
  let a = false;
  const i = e.length;
  for (let s = 0, o = i - 1; s < i; o = s++) {
    const [l, c] = e[s] || [0, 0], [d, u] = e[o] || [0, 0];
    c >= n != u >= n && r <= (d - l) * (n - c) / (u - c) + l && (a = !a);
  }
  return a;
}
function m2(t6, e) {
  return t6[0] >= e.x && t6[0] <= e.x + e.width && t6[1] >= e.y && t6[1] <= e.y + e.height;
}
function p2(t6) {
  t6 === void 0 && (t6 = {});
  const {
    buffer: e = 0.5,
    blockPointerEvents: r = false,
    requireIntent: n = true
  } = t6;
  let a, i = false, s = null, o = null, l = performance.now();
  function c(u, f) {
    const h = performance.now(), g = h - l;
    if (s === null || o === null || g === 0)
      return s = u, o = f, l = h, null;
    const m = u - s, p = f - o, b = Math.sqrt(m * m + p * p) / g;
    return s = u, o = f, l = h, b;
  }
  const d = (u) => {
    let {
      x: f,
      y: h,
      placement: g,
      elements: m,
      onClose: p,
      nodeId: w,
      tree: b
    } = u;
    return function(v) {
      function x() {
        clearTimeout(a), p();
      }
      if (clearTimeout(a), !m.domReference || !m.floating || g == null || f == null || h == null)
        return;
      const {
        clientX: _,
        clientY: T
      } = v, S = [_, T], C = Br(v), D = v.type === "mouseleave", z = Ge(m.floating, C), A = Ge(m.domReference, C), L = m.domReference.getBoundingClientRect(), M = m.floating.getBoundingClientRect(), I = g.split("-")[0], W = f > M.right - M.width / 2, B = h > M.bottom - M.height / 2, U = m2(S, L), J = M.width > L.width, E = M.height > L.height, j = (J ? L : M).left, N = (J ? L : M).right, R = (E ? L : M).top, P = (E ? L : M).bottom;
      if (z && (i = true, !D))
        return;
      if (A && (i = false), A && !D) {
        i = true;
        return;
      }
      if (D && Ce(v.relatedTarget) && Ge(m.floating, v.relatedTarget) || b && Mn(b.nodesRef.current, w).some((X) => {
        let {
          context: q
        } = X;
        return q == null ? void 0 : q.open;
      }))
        return;
      if (I === "top" && h >= L.bottom - 1 || I === "bottom" && h <= L.top + 1 || I === "left" && f >= L.right - 1 || I === "right" && f <= L.left + 1)
        return x();
      let O = [];
      switch (I) {
        case "top":
          O = [[j, L.top + 1], [j, M.bottom - 1], [N, M.bottom - 1], [N, L.top + 1]];
          break;
        case "bottom":
          O = [[j, M.top + 1], [j, L.bottom - 1], [N, L.bottom - 1], [N, M.top + 1]];
          break;
        case "left":
          O = [[M.right - 1, P], [M.right - 1, R], [L.left + 1, R], [L.left + 1, P]];
          break;
        case "right":
          O = [[L.right - 1, P], [L.right - 1, R], [M.left + 1, R], [M.left + 1, P]];
          break;
      }
      function F(X) {
        let [q, G] = X;
        switch (I) {
          case "top": {
            const Z = [J ? q + e / 2 : W ? q + e * 4 : q - e * 4, G + e + 1], ne = [J ? q - e / 2 : W ? q + e * 4 : q - e * 4, G + e + 1], H = [[M.left, W || J ? M.bottom - e : M.top], [M.right, W ? J ? M.bottom - e : M.top : M.bottom - e]];
            return [Z, ne, ...H];
          }
          case "bottom": {
            const Z = [J ? q + e / 2 : W ? q + e * 4 : q - e * 4, G - e], ne = [J ? q - e / 2 : W ? q + e * 4 : q - e * 4, G - e], H = [[M.left, W || J ? M.top + e : M.bottom], [M.right, W ? J ? M.top + e : M.bottom : M.top + e]];
            return [Z, ne, ...H];
          }
          case "left": {
            const Z = [q + e + 1, E ? G + e / 2 : B ? G + e * 4 : G - e * 4], ne = [q + e + 1, E ? G - e / 2 : B ? G + e * 4 : G - e * 4];
            return [...[[B || E ? M.right - e : M.left, M.top], [B ? E ? M.right - e : M.left : M.right - e, M.bottom]], Z, ne];
          }
          case "right": {
            const Z = [q - e, E ? G + e / 2 : B ? G + e * 4 : G - e * 4], ne = [q - e, E ? G - e / 2 : B ? G + e * 4 : G - e * 4], H = [[B || E ? M.left + e : M.right, M.top], [B ? E ? M.left + e : M.right : M.left + e, M.bottom]];
            return [Z, ne, ...H];
          }
        }
      }
      if (!yh([_, T], O)) {
        if (i && !U)
          return x();
        if (!D && n) {
          const X = c(v.clientX, v.clientY);
          if (X !== null && X < 0.1)
            return x();
        }
        yh([_, T], F([f, h])) ? !i && n && (a = window.setTimeout(x, 40)) : x();
      }
    };
  };
  return d.__options = {
    blockPointerEvents: r
  }, d;
}
const b2 = ({
  arrowRef: t6,
  placement: e
}) => {
  const r = [];
  return r.push(lM(8)), r.push(e === "auto" ? uM() : dM()), r.push(cM({ padding: 8 })), t6 != null && t6.current && r.push(fM({ element: t6.current })), r;
}, y2 = ({ placement: t6 }) => t6 === "auto" ? void 0 : t6, v2 = ({ placement: t6 }) => ({
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
})[t6.split("-")[0]], Em = ({
  open: t6,
  arrowRef: e,
  placement: r = "top",
  setOpen: n
}) => Dm({
  placement: y2({ placement: r }),
  open: t6,
  onOpenChange: n,
  whileElementsMounted: cm,
  middleware: b2({ placement: r, arrowRef: e })
}), Tm = ({
  context: t6,
  trigger: e,
  role: r = "tooltip",
  interactions: n = []
}) => Mm([
  Om(t6, { enabled: e === "click" }),
  XM(t6, {
    enabled: e === "hover",
    handleClose: p2()
  }),
  Sm(t6),
  Cm(t6, { role: r }),
  ...n
]), Pm = ft(void 0);
function Jc() {
  const t6 = rt(Pm);
  if (!t6)
    throw new Error("useDropdownContext should be used within the DropdownContext provider!");
  return t6;
}
const Zc = ({ className: t6, theme: e = {}, ...r }) => {
  const { theme: n } = Jc(), a = e.divider ?? n.floating.divider;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: Y(a, t6), ...r });
}, Rm = ({ children: t6, className: e, theme: r = {}, ...n }) => {
  const { theme: a } = Jc(), i = r.header ?? a.floating.header;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: Y(i, e), ...n, children: t6 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Zc, {})
  ] });
}, Nm = Oe(
  ({ children: t6, className: e, icon: r, onClick: n, theme: a = {}, ...i }, s) => {
    const { ref: o, index: l } = jM({ label: typeof t6 == "string" ? t6 : void 0 }), c = mm([s, o]), { theme: d, activeIndex: u, dismissOnClick: f, getItemProps: h, handleSelect: g } = Jc(), m = u === l, p = te(d.floating.item, a), w = i;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { role: "menuitem", className: p.container, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Ac,
      {
        ref: c,
        className: Y(p.base, e),
        ...w,
        ...h({
          onClick: () => {
            n == null || n(), f && g(null);
          }
        }),
        tabIndex: m ? 0 : -1,
        children: [
          r && /* @__PURE__ */ jsxRuntimeExports.jsx(r, { className: p.icon }),
          t6
        ]
      }
    ) });
  }
);
Nm.displayName = "DropdownItem";
const x2 = {
  top: TO,
  right: p0,
  bottom: m0,
  left: EO
}, w2 = ({
  refs: t6,
  children: e,
  inline: r,
  theme: n,
  disabled: a,
  setButtonWidth: i,
  getReferenceProps: s,
  renderTrigger: o,
  ...l
}) => {
  const c = t6.reference, d = s();
  if (lt(() => {
    c.current && (i == null || i(c.current.clientWidth));
  }, [c, i]), o) {
    const u = o(n);
    return ms(u, { ref: t6.setReference, disabled: a, ...d, ...u.props });
  }
  return r ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", ref: t6.setReference, className: n == null ? void 0 : n.inlineWrapper, disabled: a, ...d, children: e }) : /* @__PURE__ */ jsxRuntimeExports.jsx(F0, { ...l, disabled: a, type: "button", ref: t6.setReference, ...d, children: e });
}, Im = ({
  children: t6,
  className: e,
  dismissOnClick: r = true,
  theme: n = {},
  renderTrigger: a,
  ...i
}) => {
  const [s, o] = ve(false), [l, c] = ve(null), [d, u] = ve(null), [f, h] = ve(void 0), g = Gt([]), m = Gt([]), p = te(ue().dropdown, n), w = i, b = i["data-testid"] || "flowbite-dropdown-target", {
    placement: k = i.inline ? "bottom-start" : "bottom",
    trigger: v = "click",
    label: x,
    inline: _,
    arrowIcon: T = true,
    ...S
  } = w, C = yn((E) => {
    u(E), o(false);
  }, []), D = yn(
    (E) => {
      s ? c(E) : C(E);
    },
    [s, C]
  ), { context: z, floatingStyles: A, refs: L } = Em({
    open: s,
    setOpen: o,
    placement: k
  }), M = f2(z, {
    listRef: g,
    activeIndex: l,
    selectedIndex: d,
    onNavigate: c
  }), I = g2(z, {
    listRef: m,
    activeIndex: l,
    selectedIndex: d,
    onMatch: D
  }), { getReferenceProps: W, getFloatingProps: B, getItemProps: U } = Tm({
    context: z,
    role: "menu",
    trigger: v,
    interactions: [M, I]
  }), J = no(() => {
    const [E] = k.split("-");
    return x2[E] ?? m0;
  }, [k]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Pm.Provider, { value: { theme: p, activeIndex: l, dismissOnClick: r, getItemProps: U, handleSelect: C }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      w2,
      {
        ...S,
        refs: L,
        inline: _,
        theme: p,
        "data-testid": b,
        className: Y(p.floating.target, S.className),
        setButtonWidth: h,
        getReferenceProps: W,
        renderTrigger: a,
        children: [
          x,
          T && /* @__PURE__ */ jsxRuntimeExports.jsx(J, { className: p.arrowIcon })
        ]
      }
    ),
    s && /* @__PURE__ */ jsxRuntimeExports.jsx(_m, { context: z, modal: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: L.setFloating,
        style: { ...A, minWidth: f },
        "data-testid": "flowbite-dropdown",
        "aria-expanded": s,
        ...B({
          className: Y(
            p.floating.base,
            p.floating.animation,
            "duration-100",
            !s && p.floating.hidden,
            p.floating.style.auto,
            e
          )
        }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(zM, { elementsRef: g, labelsRef: m, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: p.content, tabIndex: -1, children: t6 }) })
      }
    ) })
  ] });
};
Im.displayName = "Dropdown";
Rm.displayName = "Dropdown.Header";
Zc.displayName = "Dropdown.Divider";
Object.assign(Im, {
  Item: Nm,
  Header: Rm,
  Divider: Zc
});
const Am = Oe(
  ({ className: t6, color: e = "gray", helperText: r, sizing: n = "md", theme: a = {}, ...i }, s) => {
    const o = te(ue().fileInput, a);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: Y(o.root.base, t6), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: o.field.base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: Y(
            o.field.input.base,
            o.field.input.colors[e],
            o.field.input.sizes[n]
          ),
          ...i,
          type: "file",
          ref: s
        }
      ) }) }),
      r && /* @__PURE__ */ jsxRuntimeExports.jsx(vi, { color: e, children: r })
    ] });
  }
);
Am.displayName = "FileInput";
const k2 = Oe(
  ({
    label: t6,
    helperText: e,
    color: r = "default",
    sizing: n = "md",
    variant: a,
    disabled: i = false,
    theme: s = {},
    className: o,
    ...l
  }, c) => {
    const d = In(), u = te(ue().floatingLabel, s);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: Y("relative", a === "standard" ? "z-0" : ""), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            id: l.id ? l.id : "floatingLabel" + d,
            "aria-describedby": "outlined_success_help",
            className: Y(u.input[r][a][n], o),
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
            className: Y(u.label[r][a][n], o),
            children: t6
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: "outlined_helper_text" + d, className: Y(u.helperText[r], o), children: e })
    ] });
  }
);
k2.displayName = "FloatingLabel";
const Fm = ({
  alt: t6,
  className: e,
  children: r,
  href: n,
  name: a,
  src: i,
  theme: s = {},
  ...o
}) => {
  const l = te(ue().footer.brand, s);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: n ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { "data-testid": "flowbite-footer-brand", href: n, className: Y(l.base, e), ...o, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: t6, src: i, className: l.img }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-testid": "flowbite-footer-brand-span", className: l.span, children: a }),
    r
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      alt: t6,
      "data-testid": "flowbite-footer-brand",
      src: i,
      className: Y(l.img, e),
      ...o
    }
  ) });
}, Lm = ({
  by: t6,
  className: e,
  href: r,
  theme: n = {},
  year: a,
  ...i
}) => {
  const s = te(ue().footer.copyright, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-testid": "flowbite-footer-copyright", className: Y(s.base, e), ...i, children: [
    "© ",
    a,
    r ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: r, className: s.href, children: t6 }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-testid": "flowbite-footer-copyright-span", className: s.span, children: t6 })
  ] });
}, Wm = ({ className: t6, theme: e = {}, ...r }) => {
  const n = te(ue().footer.divider, e);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { "data-testid": "footer-divider", className: Y(n.base, t6), ...r });
}, $m = ({
  ariaLabel: t6,
  className: e,
  href: r,
  icon: n,
  theme: a = {},
  ...i
}) => {
  const s = te(ue().footer.icon, a);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: r ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      "aria-label": t6,
      "data-testid": "flowbite-footer-icon",
      href: r,
      className: Y(s.base, e),
      ...i,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(n, { className: s.size })
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(n, { "data-testid": "flowbite-footer-icon", className: s.size, ...i }) });
}, zm = ({
  as: t6 = "a",
  children: e,
  className: r,
  href: n,
  theme: a = {},
  ...i
}) => {
  const s = te(ue().footer.groupLink.link, a);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: Y(s.base, r), children: /* @__PURE__ */ jsxRuntimeExports.jsx(t6, { href: n, className: s.href, ...i, children: e }) });
}, jm = ({
  children: t6,
  className: e,
  col: r = false,
  theme: n = {},
  ...a
}) => {
  const i = te(ue().footer.groupLink, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { "data-testid": "footer-groupLink", className: Y(i.base, r && i.col, e), ...a, children: t6 });
}, Hm = ({
  as: t6 = "h2",
  className: e,
  theme: r = {},
  title: n,
  ...a
}) => {
  const i = te(ue().footer.title, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(t6, { "data-testid": "flowbite-footer-title", className: Y(i.base, e), ...a, children: n });
}, Bm = ({
  bgDark: t6 = false,
  children: e,
  className: r,
  container: n = false,
  theme: a = {},
  ...i
}) => {
  const s = te(ue().footer, a);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "footer",
    {
      "data-testid": "flowbite-footer",
      className: Y(s.root.base, t6 && s.root.bgDark, n && s.root.container, r),
      ...i,
      children: e
    }
  );
};
Bm.displayName = "Footer";
Lm.displayName = "Footer.Copyright";
zm.displayName = "Footer.Link";
Fm.displayName = "Footer.Brand";
jm.displayName = "Footer.LinkGroup";
$m.displayName = "Footer.Icon";
Hm.displayName = "Footer.Title";
Wm.displayName = "Footer.Divider";
Object.assign(Bm, {
  Copyright: Lm,
  Link: zm,
  LinkGroup: jm,
  Brand: Fm,
  Icon: $m,
  Title: Hm,
  Divider: Wm
});
const Ym = ({
  children: t6,
  className: e,
  color: r = "default",
  disabled: n = false,
  theme: a = {},
  value: i,
  ...s
}) => {
  const o = te(ue().label, a);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "label",
    {
      className: Y(o.root.base, o.root.colors[r], n && o.root.disabled, e),
      "data-testid": "flowbite-label",
      ...s,
      children: i ?? t6 ?? ""
    }
  );
};
Ym.displayName = "Label";
const Vm = ({ children: t6, className: e, icon: r, theme: n = {}, ...a }) => {
  const i = te(ue().list.item, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: Y(i.withIcon[r ? "on" : "off"], e), ...a, children: [
    r && /* @__PURE__ */ jsxRuntimeExports.jsx(r, { className: Y(i.icon) }),
    t6
  ] });
}, qm = ({
  children: t6,
  className: e,
  unstyled: r,
  nested: n,
  ordered: a,
  horizontal: i,
  theme: s = {},
  ...o
}) => {
  const l = te(ue().list, s);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    a ? "ol" : "ul",
    {
      className: Y(
        l.root.base,
        l.root.ordered[a ? "on" : "off"],
        r && l.root.unstyled,
        n && l.root.nested,
        i && l.root.horizontal,
        e
      ),
      ...o,
      children: t6
    }
  );
};
qm.displayName = "List";
Vm.displayName = "List.Item";
Object.assign(qm, { Item: Vm });
const Um = ({
  active: t6,
  children: e,
  className: r,
  href: n,
  icon: a,
  onClick: i,
  theme: s = {},
  disabled: o,
  ...l
}) => {
  const c = te(ue().listGroup.item, s), d = typeof n < "u", u = d ? "a" : "button";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: Y(c.base, r), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    u,
    {
      href: n,
      onClick: i,
      type: d ? void 0 : "button",
      disabled: o,
      className: Y(
        c.link.active[t6 ? "on" : "off"],
        c.link.disabled[o ? "on" : "off"],
        c.link.base,
        c.link.href[d ? "on" : "off"]
      ),
      ...l,
      children: [
        a && /* @__PURE__ */ jsxRuntimeExports.jsx(a, { "aria-hidden": true, "data-testid": "flowbite-list-group-item-icon", className: c.link.icon }),
        e
      ]
    }
  ) });
}, Xm = ({ children: t6, className: e, theme: r = {}, ...n }) => {
  const a = te(ue().listGroup, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: Y(a.root.base, e), ...n, children: t6 });
};
Xm.displayName = "ListGroup";
Um.displayName = "ListGroup.Item";
Object.assign(Xm, {
  Item: Um
});
const Gm = ft(void 0);
function ed() {
  const t6 = rt(Gm);
  if (!t6)
    throw new Error("useModalContext should be used within the ModalContext provider!");
  return t6;
}
const Km = ({ children: t6, className: e, theme: r = {}, ...n }) => {
  const { theme: a, popup: i } = ed(), s = te(a.body, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: Y(s.base, i && [s.popup], e), ...n, children: t6 });
}, Qm = ({ children: t6, className: e, theme: r = {}, ...n }) => {
  const { theme: a, popup: i } = ed(), s = te(a.footer, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: Y(s.base, !i && s.popup, e), ...n, children: t6 });
}, Jm = ({
  as: t6 = "h3",
  children: e,
  className: r,
  theme: n = {},
  id: a,
  ...i
}) => {
  const s = In(), o = a || s, { theme: l, popup: c, onClose: d, setHeaderId: u } = ed(), f = te(l.header, n);
  return ac(() => (u(o), () => u(void 0)), [o, u]), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: Y(f.base, c && f.popup, r), ...i, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(t6, { id: o, className: f.title, children: e }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Close", className: f.close.base, type: "button", onClick: d, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PO, { "aria-hidden": true, className: f.close.icon }) })
  ] });
}, Zm = Oe(
  ({
    children: t6,
    className: e,
    dismissible: r = false,
    onClose: n,
    popup: a,
    position: i = "center",
    root: s,
    show: o,
    size: l = "2xl",
    theme: c = {},
    initialFocus: d,
    ...u
  }, f) => {
    const [h, g] = ve(void 0), m = te(ue().modal, c), { context: p } = Dm({
      open: o,
      onOpenChange: () => n && n()
    }), w = mm([p.refs.setFloating, f]), b = Om(p), k = Sm(p, { outsidePressEvent: "mousedown", enabled: r }), v = Cm(p), { getFloatingProps: x } = Mm([b, k, v]);
    return o ? /* @__PURE__ */ jsxRuntimeExports.jsx(Gm.Provider, { value: { theme: m, popup: a, onClose: n, setHeaderId: g }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(a2, { root: s, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      o2,
      {
        lockScroll: true,
        "data-testid": "modal-overlay",
        className: Y(
          m.root.base,
          m.root.positions[i],
          o ? m.root.show.on : m.root.show.off,
          e
        ),
        ...u,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(_m, { context: p, initialFocus: d, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: w,
            ...x(u),
            "aria-labelledby": h,
            className: Y(m.content.base, m.root.sizes[l]),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: m.content.inner, children: t6 })
          }
        ) })
      }
    ) }) }) : null;
  }
);
Zm.displayName = "Modal";
Jm.displayName = "Modal.Header";
Km.displayName = "Modal.Body";
Qm.displayName = "Modal.Footer";
Object.assign(Zm, {
  Header: Jm,
  Body: Km,
  Footer: Qm
});
const ep = ft(void 0);
function Mo() {
  const t6 = rt(ep);
  if (!t6)
    throw new Error("useNavBarContext should be used within the NavbarContext provider!");
  return t6;
}
const tp = ({
  as: t6 = "a",
  children: e,
  className: r,
  theme: n = {},
  ...a
}) => {
  const { theme: i } = Mo(), s = te(i.brand, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(t6, { className: Y(s.base, r), ...a, children: e });
}, rp = ({ children: t6, className: e, theme: r = {}, ...n }) => {
  const { theme: a, isOpen: i } = Mo(), s = te(a.collapse, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-testid": "flowbite-navbar-collapse",
      className: Y(s.base, s.hidden[i ? "off" : "on"], e),
      ...n,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: s.list, children: t6 })
    }
  );
}, np = ({
  active: t6,
  as: e = "a",
  disabled: r,
  children: n,
  className: a,
  theme: i = {},
  onClick: s,
  ...o
}) => {
  const { theme: l, setIsOpen: c } = Mo(), d = te(l.link, i), u = (f) => {
    c(false), s == null || s(f);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    e,
    {
      className: Y(
        d.base,
        t6 && d.active.on,
        !t6 && !r && d.active.off,
        d.disabled[r ? "on" : "off"],
        a
      ),
      onClick: u,
      ...o,
      children: n
    }
  ) });
}, ap = ({
  barIcon: t6 = jy,
  className: e,
  theme: r = {},
  ...n
}) => {
  const { theme: a, isOpen: i, setIsOpen: s } = Mo(), o = te(a.toggle, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      "data-testid": "flowbite-navbar-toggle",
      onClick: () => {
        s(!i);
      },
      className: Y(o.base, e),
      ...n,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Open main menu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(t6, { "aria-hidden": true, className: o.icon })
      ]
    }
  );
}, ip = ({
  border: t6,
  children: e,
  className: r,
  fluid: n = false,
  menuOpen: a,
  rounded: i,
  theme: s = {},
  ...o
}) => {
  const [l, c] = ve(a), d = te(ue().navbar, s);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ep.Provider, { value: { theme: d, isOpen: l, setIsOpen: c }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "nav",
    {
      className: Y(
        d.root.base,
        d.root.bordered[t6 ? "on" : "off"],
        d.root.rounded[i ? "on" : "off"],
        r
      ),
      ...o,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: Y(d.root.inner.base, d.root.inner.fluid[n ? "on" : "off"]), children: e })
    }
  ) });
};
ip.displayName = "Navbar";
tp.displayName = "Navbar.Brand";
rp.displayName = "Navbar.Collapse";
np.displayName = "Navbar.Link";
ap.displayName = "Navbar.Toggle";
Object.assign(ip, {
  Brand: tp,
  Collapse: rp,
  Link: np,
  Toggle: ap
});
const _2 = (t6, e) => t6 >= e ? [] : [...Array(e - t6 + 1).keys()].map((r) => r + t6), td = ({
  active: t6,
  children: e,
  className: r,
  onClick: n,
  theme: a = {},
  ...i
}) => {
  const s = te(ue().pagination, a);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      className: Y(t6 && s.pages.selector.active, r),
      onClick: n,
      ...i,
      children: e
    }
  );
};
td.displayName = "Pagination.Button";
const Ul = ({
  children: t6,
  className: e,
  onClick: r,
  theme: n = {},
  disabled: a = false,
  ...i
}) => {
  const s = te(ue().pagination, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      className: Y(a && s.pages.selector.disabled, e),
      disabled: a,
      onClick: r,
      ...i,
      children: t6
    }
  );
};
Ul.displayName = "Pagination.Navigation";
const sp = ({
  className: t6,
  currentPage: e,
  layout: r = "pagination",
  nextLabel: n = "Next",
  onPageChange: a,
  previousLabel: i = "Previous",
  renderPaginationButton: s = (u) => /* @__PURE__ */ jsxRuntimeExports.jsx(td, { ...u }),
  showIcons: o = false,
  theme: l = {},
  totalPages: c,
  ...d
}) => {
  const u = te(ue().pagination, l), f = Math.min(Math.max(r === "pagination" ? e + 2 : e + 4, 5), c), h = Math.max(1, f - 4), g = () => {
    a(Math.min(e + 1, c));
  }, m = () => {
    a(Math.max(e - 1, 1));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: Y(u.base, t6), ...d, children: [
    r === "table" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: u.layout.table.base, children: [
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
        Ul,
        {
          className: Y(u.pages.previous.base, o && u.pages.showIcon),
          onClick: m,
          disabled: e === 1,
          children: [
            o && /* @__PURE__ */ jsxRuntimeExports.jsx(h0, { "aria-hidden": true, className: u.pages.previous.icon }),
            i
          ]
        }
      ) }),
      r === "pagination" && _2(h, f).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "aria-current": p === e ? "page" : void 0, children: s({
        className: Y(u.pages.selector.base, e === p && u.pages.selector.active),
        active: p === e,
        onClick: () => a(p),
        children: p
      }) }, p)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Ul,
        {
          className: Y(u.pages.next.base, o && u.pages.showIcon),
          onClick: g,
          disabled: e === c,
          children: [
            n,
            o && /* @__PURE__ */ jsxRuntimeExports.jsx(g0, { "aria-hidden": true, className: u.pages.next.icon })
          ]
        }
      ) })
    ] })
  ] });
};
sp.displayName = "Pagination";
Object.assign(sp, {
  Button: td
});
const O2 = Oe(
  ({ className: t6, theme: e = {}, ...r }, n) => {
    const a = te(ue().radio, e);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: n, type: "radio", className: Y(a.root.base, t6), ...r });
  }
);
O2.displayName = "Radio";
const S2 = Oe(
  ({ className: t6, sizing: e = "md", theme: r = {}, ...n }, a) => {
    const i = te(ue().rangeSlider, r);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "flowbite-range-slider", className: Y(i.root.base, t6), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: i.field.base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: a,
        type: "range",
        className: Y(i.field.input.base, i.field.input.sizes[e]),
        ...n
      }
    ) }) }) });
  }
);
S2.displayName = "RangeSlider";
const op = ({
  children: t6,
  className: e,
  percentFilled: r = 0,
  theme: n = {},
  ...a
}) => {
  const i = te(ue().ratingAdvanced, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: Y(i.base, e), ...a, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: i.label, children: t6 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: i.progress.base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: i.progress.fill,
        "data-testid": "flowbite-rating-fill",
        style: { width: `${r}%` }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: i.progress.label, children: `${r}%` })
  ] });
}, lp = ft(void 0);
function D2() {
  const t6 = rt(lp);
  if (!t6)
    throw new Error("useRatingContext should be used within the RatingContext provider!");
  return t6;
}
const cp = ({
  className: t6,
  filled: e = true,
  starIcon: r = MO,
  theme: n = {},
  ...a
}) => {
  const { theme: i, size: s = "sm" } = D2(), o = te(i.star, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    r,
    {
      "data-testid": "flowbite-rating-star",
      className: Y(o.sizes[s], o[e ? "filled" : "empty"], t6),
      ...a
    }
  );
}, dp = ({ children: t6, className: e, size: r = "sm", theme: n = {}, ...a }) => {
  const i = te(ue().rating, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(lp.Provider, { value: { theme: i, size: r }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: Y(i.root.base, e), ...a, children: t6 }) });
};
dp.displayName = "Rating";
cp.displayName = "Rating.Star";
op.displayName = "Rating.Advanced";
Object.assign(dp, {
  Star: cp,
  Advanced: op
});
const M2 = Oe(
  ({
    addon: t6,
    children: e,
    className: r,
    color: n = "gray",
    helperText: a,
    icon: i,
    shadow: s,
    sizing: o = "md",
    theme: l = {},
    ...c
  }, d) => {
    const u = te(ue().select, l);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: Y(u.base, r), children: [
      t6 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: u.addon, children: t6 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: u.field.base, children: [
        i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: u.field.icon.base, children: /* @__PURE__ */ jsxRuntimeExports.jsx(i, { className: u.field.icon.svg }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            className: Y(
              u.field.select.base,
              u.field.select.colors[n],
              u.field.select.sizes[o],
              u.field.select.withIcon[i ? "on" : "off"],
              u.field.select.withAddon[t6 ? "on" : "off"],
              u.field.select.withShadow[s ? "on" : "off"]
            ),
            ...c,
            ref: d,
            children: e
          }
        ),
        a && /* @__PURE__ */ jsxRuntimeExports.jsx(vi, { color: n, children: a })
      ] })
    ] });
  }
);
M2.displayName = "Select";
const C2 = ({
  animation: t6 = "duration-300",
  arrow: e = true,
  children: r,
  className: n,
  content: a,
  placement: i = "top",
  style: s = "dark",
  theme: o,
  trigger: l = "hover",
  minWidth: c,
  ...d
}) => {
  const u = Gt(null), [f, h] = ve(false), g = Em({
    open: f,
    placement: i,
    arrowRef: u,
    setOpen: h
  }), {
    context: m,
    middlewareData: { arrow: { x: p, y: w } = {} },
    refs: b,
    strategy: k,
    update: v,
    x,
    y: _
  } = g, T = d2(m), { getFloatingProps: S, getReferenceProps: C } = Tm({
    context: m,
    role: "tooltip",
    trigger: l,
    interactions: [T]
  });
  return lt(() => {
    if (b.reference.current && b.floating.current && f)
      return cm(b.reference.current, b.floating.current, v);
  }, [f, b.floating, b.reference, v]), /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: b.setReference,
        className: o.target,
        "data-testid": "flowbite-tooltip-target",
        ...C(),
        children: r
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: b.setFloating,
        "data-testid": "flowbite-tooltip",
        ...S({
          className: Y(
            o.base,
            t6 && `${o.animation} ${t6}`,
            !f && o.hidden,
            o.style[s],
            n
          ),
          style: {
            position: k,
            top: _ ?? " ",
            left: x ?? " ",
            minWidth: c
          },
          ...d
        }),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: o.content, children: a }),
          e && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: Y(
                o.arrow.base,
                s === "dark" && o.arrow.style.dark,
                s === "light" && o.arrow.style.light,
                s === "auto" && o.arrow.style.auto
              ),
              "data-testid": "flowbite-tooltip-arrow",
              ref: u,
              style: {
                top: w ?? " ",
                left: p ?? " ",
                right: " ",
                bottom: " ",
                [v2({ placement: g.placement })]: o.arrow.placement
              },
              children: " "
            }
          )
        ]
      }
    )
  ] });
}, rd = ({
  animation: t6 = "duration-300",
  arrow: e = true,
  children: r,
  className: n,
  content: a,
  placement: i = "top",
  style: s = "dark",
  theme: o = {},
  trigger: l = "hover",
  ...c
}) => {
  const d = te(ue().tooltip, o);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    C2,
    {
      animation: t6,
      arrow: e,
      content: a,
      placement: i,
      style: s,
      theme: d,
      trigger: l,
      className: n,
      ...c,
      children: r
    }
  );
};
rd.displayName = "Tooltip";
const up = ft(void 0);
function ya() {
  const t6 = rt(up);
  if (!t6)
    throw new Error("useSidebarContext should be used within the SidebarContext provider!");
  return t6;
}
const nd = ft(void 0);
function E2() {
  const t6 = rt(nd);
  if (!t6)
    throw new Error("useSidebarItemContext should be used within the SidebarItemContext provider!");
  return t6;
}
const fp = ({
  children: t6,
  className: e,
  icon: r,
  label: n,
  chevronIcon: a = f0,
  renderChevronIcon: i,
  open: s = false,
  theme: o = {},
  ...l
}) => {
  const c = In(), [d, u] = ve(s), { theme: f, isCollapsed: h } = ya(), g = te(f.collapse, o);
  return lt(() => u(s), [s]), /* @__PURE__ */ jsxRuntimeExports.jsxs(({ children: p }) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: h && !d ? /* @__PURE__ */ jsxRuntimeExports.jsx(rd, { content: n, placement: "right", children: p }) : p }), { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        id: `flowbite-sidebar-collapse-${c}`,
        onClick: () => u(!d),
        title: n,
        type: "button",
        className: Y(g.button, e),
        ...l,
        children: [
          r && /* @__PURE__ */ jsxRuntimeExports.jsx(
            r,
            {
              "aria-hidden": true,
              "data-testid": "flowbite-sidebar-collapse-icon",
              className: Y(g.icon.base, g.icon.open[d ? "on" : "off"])
            }
          ),
          h ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: n }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-testid": "flowbite-sidebar-collapse-label", className: g.label.base, children: n }),
            i ? i(g, d) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              a,
              {
                "aria-hidden": true,
                className: Y(g.label.icon.base, g.label.icon.open[d ? "on" : "off"])
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { "aria-labelledby": `flowbite-sidebar-collapse-${c}`, hidden: !d, className: g.list, children: /* @__PURE__ */ jsxRuntimeExports.jsx(nd.Provider, { value: { isInsideCollapse: true }, children: t6 }) })
  ] });
};
fp.displayName = "Sidebar.Collapse";
const hp = ({
  children: t6,
  color: e = "info",
  className: r,
  theme: n = {},
  ...a
}) => {
  const { theme: i, isCollapsed: s } = ya(), o = te(i.cta, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-testid": "sidebar-cta",
      hidden: s,
      className: Y(o.base, o.color[e], r),
      ...a,
      children: t6
    }
  );
};
hp.displayName = "Sidebar.CTA";
const T2 = ({ id: t6, theme: e, isCollapsed: r, tooltipChildren: n, children: a, ...i }) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { ...i, children: r ? /* @__PURE__ */ jsxRuntimeExports.jsx(
  rd,
  {
    content: /* @__PURE__ */ jsxRuntimeExports.jsx(gp, { id: t6, theme: e, children: n }),
    placement: "right",
    children: a
  }
) : a }), gp = ({ id: t6, theme: e, children: r }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "span",
  {
    "data-testid": "flowbite-sidebar-item-content",
    id: `flowbite-sidebar-item-${t6}`,
    className: Y(e.content.base),
    children: r
  }
), mp = Oe(
  ({
    active: t6,
    as: e = "a",
    children: r,
    className: n,
    icon: a,
    label: i,
    labelColor: s = "info",
    theme: o = {},
    ...l
  }, c) => {
    var m, p, w, b;
    const d = In(), { theme: u, isCollapsed: f } = ya(), { isInsideCollapse: h } = E2(), g = te(u.item, o);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(T2, { theme: g, className: g.listItem, id: d, isCollapsed: f, tooltipChildren: r, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      e,
      {
        "aria-labelledby": `flowbite-sidebar-item-${d}`,
        ref: c,
        className: Y(
          g.base,
          t6 && g.active,
          !f && h && ((m = g.collapsed) == null ? void 0 : m.insideCollapse),
          n
        ),
        ...l,
        children: [
          a && /* @__PURE__ */ jsxRuntimeExports.jsx(
            a,
            {
              "aria-hidden": true,
              "data-testid": "flowbite-sidebar-item-icon",
              className: Y((p = g.icon) == null ? void 0 : p.base, t6 && ((w = g.icon) == null ? void 0 : w.active))
            }
          ),
          f && !a && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: (b = g.collapsed) == null ? void 0 : b.noIcon, children: r.charAt(0).toLocaleUpperCase() ?? "?" }),
          !f && /* @__PURE__ */ jsxRuntimeExports.jsx(gp, { id: d, theme: g, children: r }),
          !f && i && /* @__PURE__ */ jsxRuntimeExports.jsx(P0, { color: s, "data-testid": "flowbite-sidebar-label", hidden: f, className: g.label, children: i })
        ]
      }
    ) });
  }
);
mp.displayName = "Sidebar.Item";
const pp = ({
  children: t6,
  className: e,
  theme: r = {},
  ...n
}) => {
  const { theme: a } = ya(), i = te(a.itemGroup, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { "data-testid": "flowbite-sidebar-item-group", className: Y(i.base, e), ...n, children: /* @__PURE__ */ jsxRuntimeExports.jsx(nd.Provider, { value: { isInsideCollapse: false }, children: t6 }) });
};
pp.displayName = "Sidebar.ItemGroup";
const bp = ({ children: t6, className: e, theme: r = {}, ...n }) => {
  const { theme: a } = ya(), i = te(a.items, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: Y(i.base, e), "data-testid": "flowbite-sidebar-items", ...n, children: t6 });
};
bp.displayName = "Sidebar.Items";
const yp = ({
  children: t6,
  className: e,
  href: r,
  img: n,
  imgAlt: a = "",
  theme: i = {},
  ...s
}) => {
  const o = In(), { theme: l, isCollapsed: c } = ya(), d = te(l.logo, i);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      "aria-labelledby": `flowbite-sidebar-logo-${o}`,
      href: r,
      className: Y(d.base, e),
      ...s,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: a, src: n, className: d.img }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: d.collapsed[c ? "on" : "off"], id: `flowbite-sidebar-logo-${o}`, children: t6 })
      ]
    }
  );
};
yp.displayName = "Sidebar.Logo";
const vp = ({
  children: t6,
  as: e = "nav",
  collapseBehavior: r = "collapse",
  collapsed: n = false,
  theme: a = {},
  className: i,
  ...s
}) => {
  const o = te(ue().sidebar, a);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(up.Provider, { value: { theme: o, isCollapsed: n }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    e,
    {
      "aria-label": "Sidebar",
      hidden: n && r === "hide",
      className: Y(o.root.base, o.root.collapsed[n ? "on" : "off"], i),
      ...s,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: o.root.inner, children: t6 })
    }
  ) });
};
vp.displayName = "Sidebar";
Object.assign(vp, {
  Collapse: fp,
  CTA: hp,
  Item: mp,
  Items: bp,
  ItemGroup: pp,
  Logo: yp
});
const xp = ft(void 0);
function P2() {
  const t6 = rt(xp);
  if (!t6)
    throw new Error("useTableBodyContext should be used within the TableBodyContext provider!");
  return t6;
}
const wp = ft(void 0);
function ad() {
  const t6 = rt(wp);
  if (!t6)
    throw new Error("useTableContext should be used within the TableContext provider!");
  return t6;
}
const kp = Oe(
  ({ children: t6, className: e, theme: r = {}, ...n }, a) => {
    const { theme: i } = ad(), s = te(i.body, r);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(xp.Provider, { value: { theme: s }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: Y(s.base, e), ref: a, ...n, children: t6 }) });
  }
);
kp.displayName = "Table.Body";
const _p = Oe(
  ({ children: t6, className: e, theme: r = {}, ...n }, a) => {
    const { theme: i } = P2(), s = te(i.cell, r);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: Y(s.base, e), ref: a, ...n, children: t6 });
  }
);
_p.displayName = "Table.Cell";
const Op = ft(void 0);
function R2() {
  const t6 = rt(Op);
  if (!t6)
    throw new Error("useTableHeadContext should be used within the TableHeadContext provider!");
  return t6;
}
const Sp = Oe(
  ({ children: t6, className: e, theme: r = {}, ...n }, a) => {
    const { theme: i } = ad(), s = te(i.head, r);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Op.Provider, { value: { theme: s }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: Y(s.base, e), ref: a, ...n, children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: t6 }) }) });
  }
);
Sp.displayName = "Table.Head";
const Dp = Oe(
  ({ children: t6, className: e, theme: r = {}, ...n }, a) => {
    const { theme: i } = R2(), s = te(i.cell, r);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: Y(s.base, e), ref: a, ...n, children: t6 });
  }
);
Dp.displayName = "Table.HeadCell";
const Mp = Oe(
  ({ children: t6, className: e, theme: r = {}, ...n }, a) => {
    const { theme: i, hoverable: s, striped: o } = ad(), l = te(i.row, r);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "tr",
      {
        ref: a,
        "data-testid": "table-row-element",
        className: Y(l.base, o && l.striped, s && l.hovered, e),
        ...n,
        children: t6
      }
    );
  }
);
Mp.displayName = "Table.Row";
const Cp = Oe(
  ({ children: t6, className: e, striped: r, hoverable: n, theme: a = {}, ...i }, s) => {
    const o = te(ue().table, a);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "table-element", className: Y(o.root.wrapper), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(wp.Provider, { value: { theme: o, striped: r, hoverable: n }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: Y(o.root.shadow, e) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: Y(o.root.base, e), ...i, ref: s, children: t6 })
    ] }) });
  }
);
Cp.displayName = "Table";
const Hn = Object.assign(Cp, {
  Head: Sp,
  Body: kp,
  Row: Mp,
  Cell: _p,
  HeadCell: Dp
}), Gn = ({ children: t6, className: e }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: e, children: t6 });
Gn.displayName = "Tabs.Item";
const Ep = Oe(
  ({ children: t6, className: e, onActiveTabChange: r, style: n = "default", theme: a = {}, ...i }, s) => {
    const o = te(ue().tabs, a), l = In(), c = no(
      () => Qn.map(
        Qn.toArray(t6),
        ({ props: v }) => v
      ),
      [t6]
    ), d = Gt([]), [u, f] = ve(
      Math.max(
        0,
        c.findIndex((v) => v.active)
      )
    ), [h, g] = ve(-1), m = (v) => {
      f(v), r && r(v);
    }, p = ({ target: v }) => {
      m(v), g(v);
    }, w = ({ event: v, target: x }) => {
      v.key === "ArrowLeft" && g(Math.max(0, h - 1)), v.key === "ArrowRight" && g(Math.min(c.length - 1, h + 1)), v.key === "Enter" && (m(x), g(x));
    }, b = o.tablist.tabitem.styles[n], k = o.tabitemcontainer.styles[n];
    return lt(() => {
      var v;
      (v = d.current[h]) == null || v.focus();
    }, [h]), Vh(s, () => ({
      setActiveTab: m
    })), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: Y(o.base, e), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-label": "Tabs",
          role: "tablist",
          className: Y(o.tablist.base, o.tablist.styles[n], e),
          ...i,
          children: c.map((v, x) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "aria-controls": `${l}-tabpanel-${x}`,
              "aria-selected": x === u,
              className: Y(
                o.tablist.tabitem.base,
                b.base,
                x === u && b.active.on,
                x !== u && !v.disabled && b.active.off
              ),
              disabled: v.disabled,
              id: `${l}-tab-${x}`,
              onClick: () => p({ target: x }),
              onKeyDown: (_) => w({ event: _, target: x }),
              ref: (_) => d.current[x] = _,
              role: "tab",
              tabIndex: x === h ? 0 : -1,
              style: { zIndex: x === h ? 2 : 1 },
              children: [
                v.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: o.tablist.tabitem.icon }),
                v.title
              ]
            },
            x
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: Y(o.tabitemcontainer.base, k), children: c.map((v, x) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-labelledby": `${l}-tab-${x}`,
          className: o.tabpanel,
          hidden: x !== u,
          id: `${l}-tabpanel-${x}`,
          role: "tabpanel",
          tabIndex: 0,
          children: v.children
        },
        x
      )) })
    ] });
  }
);
Ep.displayName = "Tabs";
Object.assign(Ep, {
  Item: Gn
}); const I2 = Oe(
  ({ className: t6, color: e = "gray", helperText: r, shadow: n, theme: a = {}, ...i }, s) => {
    const o = te(ue().textarea, a);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          ref: s,
          className: Y(o.base, o.colors[e], o.withShadow[n ? "on" : "off"], t6),
          ...i
        }
      ),
      r && /* @__PURE__ */ jsxRuntimeExports.jsx(vi, { color: e, children: r })
    ] });
  }
);
I2.displayName = "Textarea";
const Tp = ft(void 0);
function id() {
  const t6 = rt(Tp);
  if (!t6)
    throw new Error("useTimelineContentContext should be used within the TimelineContentContext provider!");
  return t6;
}
const Pp = ({ children: t6, className: e, theme: r = {}, ...n }) => {
  const { theme: a } = id(), i = te(a.body, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: Y(i.base, e), ...n, children: t6 });
}, Rp = ft(void 0);
function sd() {
  const t6 = rt(Rp);
  if (!t6)
    throw new Error("useTimelineContext should be used within the TimelineContext provider!");
  return t6;
}
const Np = ft(void 0);
function Ip() {
  const t6 = rt(Np);
  if (!t6)
    throw new Error("useTimelineItemContext should be used within the TimelineItemContext provider!");
  return t6;
}
const Ap = ({
  children: t6,
  className: e,
  theme: r = {},
  ...n
}) => {
  const { horizontal: a } = sd(), { theme: i } = Ip(), s = te(i.content, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tp.Provider, { value: { theme: s }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "timeline-content", className: Y(a && s.root.base, e), ...n, children: t6 }) });
}, Fp = ({ children: t6, className: e, theme: r = {}, ...n }) => {
  const { theme: a, horizontal: i } = sd(), s = te(a.item, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Np.Provider, { value: { theme: s }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "li",
    {
      "data-testid": "timeline-item",
      className: Y(i && s.root.horizontal, !i && s.root.vertical, e),
      ...n,
      children: t6
    }
  ) });
}, Lp = ({
  children: t6,
  className: e,
  icon: r,
  theme: n = {},
  ...a
}) => {
  const { horizontal: i } = sd(), { theme: s } = Ip(), o = te(s.point, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-testid": "timeline-point",
      className: Y(i && o.horizontal, !i && o.vertical, e),
      ...a,
      children: [
        t6,
        r ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: Y(o.marker.icon.wrapper), children: /* @__PURE__ */ jsxRuntimeExports.jsx(r, { "aria-hidden": true, className: Y(o.marker.icon.base) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: Y(i && o.marker.base.horizontal, !i && o.marker.base.vertical)
          }
        ),
        i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: Y(o.line) })
      ]
    }
  );
}, Wp = ({ children: t6, className: e, theme: r = {}, ...n }) => {
  const { theme: a } = id(), i = te(a.time, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("time", { className: Y(i.base, e), ...n, children: t6 });
}, $p = ({
  as: t6 = "h3",
  children: e,
  className: r,
  theme: n = {},
  ...a
}) => {
  const { theme: i } = id(), s = te(i.title, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(t6, { className: Y(s.base, r), ...a, children: e });
}, zp = ({
  children: t6,
  className: e,
  horizontal: r,
  theme: n = {},
  ...a
}) => {
  const i = te(ue().timeline, n);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Rp.Provider, { value: { theme: i, horizontal: r }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "ol",
    {
      "data-testid": "timeline-component",
      className: Y(
        r && i.root.direction.horizontal,
        !r && i.root.direction.vertical,
        e
      ),
      ...a,
      children: t6
    }
  ) });
};
zp.displayName = "Timeline";
Fp.displayName = "Timeline.Item";
Lp.displayName = "Timeline.Point";
Ap.displayName = "Timeline.Content";
Wp.displayName = "Timeline.Time";
$p.displayName = "Timeline.Title";
Pp.displayName = "Timeline.Body";
Object.assign(zp, {
  Item: Fp,
  Point: Lp,
  Content: Ap,
  Time: Wp,
  Title: $p,
  Body: Pp
});
const jp = ft(void 0);
function A2() {
  const t6 = rt(jp);
  if (!t6)
    throw new Error("useToastContext should be used within the ToastContext provider!");
  return t6;
}
const Hp = ({
  className: t6,
  onClick: e,
  theme: r = {},
  xIcon: n = CO,
  onDismiss: a,
  ...i
}) => {
  const { theme: s, duration: o, isClosed: l, isRemoved: c, setIsClosed: d, setIsRemoved: u } = A2(), f = te(s.toggle, r);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      "aria-label": "Close",
      onClick: (g) => {
        if (e && e(g), a) {
          a();
          return;
        }
        d(!l), setTimeout(() => u(!c), o);
      },
      type: "button",
      className: Y(f.base, t6),
      ...i,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(n, { "aria-hidden": true, className: f.icon })
    }
  );
}, F2 = {
  75: "duration-75",
  100: "duration-100",
  150: "duration-150",
  200: "duration-200",
  300: "duration-300",
  500: "duration-500",
  700: "duration-700",
  1e3: "duration-1000"
}, Bp = ({ children: t6, className: e, duration: r = 300, theme: n = {}, ...a }) => {
  const [i, s] = ve(false), [o, l] = ve(false), c = te(ue().toast, n);
  return o ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(jp.Provider, { value: { theme: c, duration: r, isClosed: i, isRemoved: o, setIsClosed: s, setIsRemoved: l }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-testid": "flowbite-toast",
      role: "alert",
      className: Y(c.root.base, F2[r], i && c.root.closed, e),
      ...a,
      children: t6
    }
  ) });
};
Bp.displayName = "Toast";
Hp.displayName = "Toast.Toggle";
Object.assign(Bp, {
  Toggle: Hp
});
const L2 = Oe(
  ({
    checked: t6,
    className: e,
    color: r = "blue",
    sizing: n = "md",
    disabled: a,
    label: i,
    name: s,
    onChange: o,
    theme: l = {},
    ...c
  }, d) => {
    const u = In(), f = te(ue().toggleSwitch, l), h = () => o(!t6), g = () => {
      h();
    }, m = (p) => {
      p.code == "Enter" && p.preventDefault();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      s && t6 ? /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: d, checked: t6, hidden: true, name: s, readOnly: true, type: "checkbox", className: "sr-only" }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          "aria-checked": t6,
          "aria-labelledby": `${u}-flowbite-toggleswitch-label`,
          disabled: a,
          id: `${u}-flowbite-toggleswitch`,
          onClick: g,
          onKeyDown: m,
          role: "switch",
          tabIndex: 0,
          type: "button",
          className: Y(f.root.base, f.root.active[a ? "off" : "on"], e),
          ...c,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "data-testid": "flowbite-toggleswitch-toggle",
                className: Y(
                  f.toggle.base,
                  f.toggle.checked[t6 ? "on" : "off"],
                  t6 && f.toggle.checked.color[r],
                  f.toggle.sizes[n]
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
L2.displayName = "ToggleSwitch";
const W2 = ({
  currentPage: t6,
  totalPages: e,
  onPageChange: r
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: () => r(t6 - 1),
      disabled: t6 === 1,
      className: "p-2 text-gray-500 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(h0, { className: "h-5 w-5" })
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-700", children: [
    t6,
    " de ",
    e
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: () => r(t6 + 1),
      disabled: t6 === e,
      className: "p-2 text-gray-500 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(g0, { className: "h-5 w-5" })
    }
  )
] });
function $2({
  label: t6,
  checked: e = false,
  disabled: r = false,
  onChange: n
}) {
  const [a, i] = ve(e);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "label",
      {
        className: `inline-flex items-center ${r ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              className: "peer sr-only",
              checked: a,
              onChange: (o) => {
                if (r) return;
                const l = o.target.checked;
                i(l), n == null || n(l);
              },
              disabled: r
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
    t6 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `text-sm ${r ? "text-gray-500" : "text-gray-700"}`,
        children: t6
      }
    )
  ] });
}
const YN = ({
  columns: t6,
  data: e,
  showSearch: r = false,
  itemsPerPage: n = 5,
  title: a,
  onToggleChange: i
}) => {
  const [s, o] = $.useState(""), [l, c] = $.useState(1), [d, u] = $.useState(null), f = $.useMemo(() => d ? [...e].sort((b, k) => {
    const v = b[d.key], x = k[d.key];
    return v == null || x == null ? 0 : typeof v == "string" && typeof x == "string" ? d.direction === "asc" ? v.localeCompare(x) : x.localeCompare(v) : d.direction === "asc" ? Number(v) - Number(x) : Number(x) - Number(v);
  }) : e, [e, d]), h = $.useMemo(() => s.trim() ? f.filter(
    (b) => t6.some((k) => {
      const v = b[k.relation];
      return v != null && String(v).toLowerCase().includes(s.toLowerCase().trim());
    })
  ) : f, [f, s, t6]), g = $.useMemo(() => {
    const b = (l - 1) * n, k = b + n;
    return h.slice(b, k);
  }, [h, l, n]), m = Math.ceil(h.length / n), p = (b) => {
    u((k) => !k || k.key !== b ? { key: b, direction: "asc" } : {
      key: b,
      direction: k.direction === "asc" ? "desc" : "asc"
    });
  }, w = (b, k) => {
    const v = k[b.relation];
    if (b.isToggle) {
      const x = !!v;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          $2,
          {
            checked: x,
            onChange: (_) => i == null ? void 0 : i({
              rowId: k.id,
              checked: _,
              row: k,
              columnKey: b.relation
            }),
            disabled: false
          }
        ),
        b.toggleText && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600", children: x ? b.toggleText.active : b.toggleText.inactive })
      ] });
    }
    return b.cell ? b.cell(k) : v != null ? String(v) : "";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex items-center justify-between", children: a && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: a }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex", children: [
      r && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Lc,
        {
          rightIcon: SO,
          placeholder: "Buscar",
          value: s,
          onChange: (b) => o(b.target.value)
        }
      ) }),
      m > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        W2,
        {
          currentPage: l,
          totalPages: m,
          onPageChange: c
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Hn, { striped: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hn.Head, { children: t6.map((b, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Hn.HeadCell,
        {
          className: "cursor-pointer",
          onClick: () => b.sortable !== false && p(b.relation),
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            b.header,
            b.sortable !== false && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (d == null ? void 0 : d.key) === b.relation ? d.direction === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Yf, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(DO, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Yf, { className: "size-4 opacity-50" }) })
          ] })
        },
        k
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hn.Body, { className: "divide-y", children: g.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Hn.Row,
        {
          className: "bg-white dark:border-gray-700 dark:bg-gray-800",
          children: t6.map((k, v) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Hn.Cell,
            {
              className: "whitespace-nowrap font-medium text-gray-900 dark:text-white",
              children: w(k, b)
            },
            `${b.id}-${v}`
          ))
        },
        b.id
      )) })
    ] }) })
  ] });
}, vh = {
  "m-image-container": "layoutOutside-module__m-image-container__sCvFu",
  "m-image": "layoutOutside-module__m-image__kZHyH"
}, VN = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-32", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Cn,
    {
      classIm: "mx-auto",
      src: "https://ftp.mathilde-ads.com/151-41415c0c026df82dbb391c09db474cfa.png",
      alt: "Logo Mathilde ads",
      width: 400,
      height: 250
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: vh["m-image-container"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Cn,
    {
      classIm: vh["m-image"],
      src: "https://ftp.mathilde-ads.com/151-3f28d319ba5adbe318c58ef38b858e50.png",
      alt: "Logo Mathilde ads",
      width: 400,
      height: 300
    }
  ) })
] }), qN = ({
  onOpenModal: t6,
  checked: e,
  onChange: r,
  label: n,
  ...a
}) => {
  const i = () => {
    e || t6(), r(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: ps["checkbox-container"], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "checkbox",
        ...a,
        checked: e,
        onChange: i,
        required: true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: ps.checkmark }),
    n && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: n })
  ] }) });
}, z2 = ({
  validations: t6
}) => {
  const e = ({ isValid: n }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      className: `me-2 h-3.5 w-3.5 ${n ? "text-green-500 dark:text-green-400" : "text-gray-500 dark:text-gray-400"} shrink-0`,
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
  ].map(({ key: n, text: a }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(e, { isValid: t6[n] }),
    a
  ] }, n)) });
}, j2 = () => {
  const [t6, e] = ve(""), [r, n] = ve(""), [a, i] = ve({
    hasMinLength: false,
    hasNumber: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasSpecialChar: false
  });
  lt(() => {
    i({
      hasMinLength: t6.length >= 8,
      hasNumber: /\d/.test(t6),
      hasUpperCase: /[A-Z]/.test(t6),
      hasLowerCase: /[a-z]/.test(t6),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(t6)
    });
  }, [t6]);
  const s = () => t6.trim() && r.trim() && t6 === r && Object.values(a).every((l) => l);
  return {
    password: t6,
    setPassword: e,
    confirmPassword: r,
    setConfirmPassword: n,
    showError: () => !s() && t6.trim() && r.trim(),
    validations: a
  };
}, UN = ({ formik: t6 }) => {
  const {
    password: e,
    setPassword: r,
    confirmPassword: n,
    setConfirmPassword: a,
    validations: i
  } = j2();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        zd,
        {
          placeholder: "Contraseña",
          value: e,
          onChange: (s) => {
            r(s.target.value), t6.setFieldValue("password", s.target.value);
          },
          onBlur: t6.handleBlur("password")
        }
      ),
      t6.errors.password && t6.touched.password && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 text-sm text-red-500", children: String(t6.errors.password) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        zd,
        {
          placeholder: "Confirmar contraseña",
          value: n,
          onChange: (s) => {
            a(s.target.value), t6.setFieldValue("confirmPassword", s.target.value);
          },
          onBlur: t6.handleBlur("confirmPassword")
        }
      ),
      t6.errors.confirmPassword && t6.touched.confirmPassword && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 text-sm text-red-500", children: String(t6.errors.confirmPassword) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(z2, { validations: i })
  ] });
}, XN = ({ items: t6 }) => {
  const [e, r] = ve([]), n = (i) => {
    r(
      (s) => s.includes(i) ? s.filter((o) => o !== i) : [...s, i]
    );
  }, a = (i, s = 0) => /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-none space-y-2", children: i.map((o) => {
    const l = o.subItems && o.subItems.length > 0, c = e.includes(o.id);
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
                  onClick: () => n(o.id),
                  className: "rounded-full p-1 transition-transform duration-200 hover:bg-gray-100",
                  children: c ? /* @__PURE__ */ jsxRuntimeExports.jsx(By, { className: "text-sm text-gray-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Hy, { className: "text-sm text-gray-500" })
                }
              ),
              !l && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[28px]" }),
              " ",
              o.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(
                o.icon,
                {
                  className: `text-lg ${o.isActive ? "text-blue-700 dark:text-blue-500" : "text-gray-600"}`
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: o.href,
                className: `
                    flex-grow transition-colors duration-200
                    ${o.isActive ? "font-medium text-blue-700 dark:text-blue-500" : "text-gray-700 hover:text-blue-600 dark:text-gray-300"}
                  `,
                children: o.title
              }
            )
          ] }),
          l && c && a(o.subItems || [], s + 1)
        ]
      },
      o.id
    );
  }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { id: "TableOfContents", children: a(t6) });
}, xh = {
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
}, GN = ({
  onChange: t6,
  accept: e = "application/pdf",
  maxSize: r = 10,
  // 10MB por defecto
  multiple: n = false,
  helperText: a = ""
}) => {
  const [i, s] = ve(false), o = Array.isArray(e) ? e.join(",") : e, l = () => Array.isArray(e) ? e.map((g) => xh[g] || g).join(", ") : xh[e] || e, c = yn((g) => {
    g.preventDefault(), g.stopPropagation(), s(true);
  }, []), d = yn((g) => {
    g.preventDefault(), g.stopPropagation(), s(false);
  }, []), u = yn(
    (g) => {
      g.preventDefault(), g.stopPropagation(), s(false);
      const m = Array.from(g.dataTransfer.files);
      m.length > 0 && h(m);
    },
    [e, r, n, t6]
  ), f = yn(
    (g) => {
      const m = Array.from(g.target.files || []);
      m.length > 0 && h(m);
    },
    [e, r, n, t6]
  ), h = yn(
    (g) => {
      if (!n && g.length > 1) {
        alert("Solo se permite un archivo");
        return;
      }
      const m = g.filter((w) => Array.isArray(e) ? e.some((b) => b === "image/*" ? w.type.startsWith("image/") : w.type === b) : e === "image/*" ? w.type.startsWith("image/") : w.type === e);
      if (m.length === 0) {
        alert(
          `Tipo de archivo no permitido. Tipos permitidos: ${l()}`
        );
        return;
      }
      const p = m.filter(
        (w) => w.size <= r * 1024 * 1024
      );
      p.length !== m.length && alert(`Algunos archivos exceden el tamaño máximo de ${r}MB`), p.length > 0 && (t6 == null || t6(p));
    },
    [e, r, n, t6]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Ym,
    {
      htmlFor: "dropzone-file",
      className: `flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed ${i ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50"} hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600`,
      onDragOver: c,
      onDragLeave: d,
      onDrop: u,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-2/4 items-center justify-center pb-6 pt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Cn,
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
              a
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Tipos permitidos:" }),
              " ",
              l(),
              " |",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Tamaño máximo:" }),
              " ",
              r,
              " MB"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Am,
          {
            id: "dropzone-file",
            className: "hidden",
            onChange: f,
            accept: o,
            multiple: n
          }
        )
      ]
    }
  ) });
};
function H2(t6) {
  return We({ attr: { version: "1.1", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M2 5v10c0 0.55 0.45 1 1 1h9c0.55 0 1-0.45 1-1v-10h-11zM5 14h-1v-7h1v7zM7 14h-1v-7h1v7zM9 14h-1v-7h1v7zM11 14h-1v-7h1v7z" }, child: [] }, { tag: "path", attr: { d: "M13.25 2h-3.25v-1.25c0-0.412-0.338-0.75-0.75-0.75h-3.5c-0.412 0-0.75 0.338-0.75 0.75v1.25h-3.25c-0.413 0-0.75 0.337-0.75 0.75v1.25h13v-1.25c0-0.413-0.338-0.75-0.75-0.75zM9 2h-3v-0.987h3v0.987z" }, child: [] }] })(t6);
}
const B2 = (t6) => {
  const e = Math.floor(Math.log(t6) / Math.log(1024)), r = ["Bytes", "KB", "MB", "GB", "TB"];
  return `${(t6 / Math.pow(1024, e)).toFixed(2)} ${r[e]}`;
}, KN = ({ files: t6, onDelete: e }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc", children: t6.map((r, n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "div",
  {
    className: "mb-5 flex w-full items-center justify-between rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-4 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Cn,
          {
            classIm: "mr-3",
            src: "https://ftp.mathilde-ads.com/151-1dcc25481e8c72ed21c720c94adfdec6.svg",
            alt: "icon dropzone",
            width: 50
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-base font-semibold text-gray-700", children: r.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-4 flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex text-sm", children: B2(r.size) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          H2,
          {
            className: "ml-2 cursor-pointer text-4xl text-gray-400",
            onClick: () => e(r)
          }
        )
      ] })
    ]
  },
  n
)) }) }), QN = ({ description: t6 = "" }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: "https://ftp.mathilde-ads.com/151-82821df9d4f7bd2662418d3147880fba.svg",
      alt: t6.replace(/<[^>]*>/g, "")
    }
  ),
  t6 && /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      className: "text-center",
      dangerouslySetInnerHTML: { __html: t6 }
    }
  )
] });
var Yp = {}, Oi = {}, Xl = { exports: {} };
var gl, Sh;
function od() {
  if (Sh) return gl;
  Sh = 1;
  var t6 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return gl = t6, gl;
}
var yl, Eh;
function G2() {
  if (Eh) return yl;
  Eh = 1;
  var t6 = od();
  function e() {
  }
  function r() {
  }
  return r.resetWarningCache = e, yl = function() {
    function n(s, o, l, c, d, u) {
      if (u !== t6) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: e
    };
    return i.PropTypes = i, i;
  }, yl;
}
Xl.exports = G2()();
var Ar = Xl.exports, Si = {}, Rr = {};
const Up = 7, Vs = 365.2425, Di = 6048e5, Xp = 864e5, Nr = 6e4, Fn = 36e5, ld = 1e3, Th = 525600, Kn = 43200, qs = 1440, Gp = 60, Kp = 3, Qp = 12, Jp = 4, Co = 3600, cd = 60, dd = Co * 24, J2 = dd * 7, Zp = dd * Vs, eb = Zp / 12, Z2 = eb * 3, Ph = Symbol.for("constructDateFrom");
function se(t6, e) {
  return typeof t6 == "function" ? t6(e) : t6 && typeof t6 == "object" && Ph in t6 ? t6[Ph](e) : t6 instanceof Date ? new t6.constructor(e) : new Date(e);
}
function V(t6, e) {
  return se(e || t6, t6);
}
function Wt(t6, e, r) {
  const n = V(t6, r == null ? void 0 : r.in);
  return isNaN(e) ? se((r == null ? void 0 : r.in) || t6, NaN) : (e && n.setDate(n.getDate() + e), n);
}
function Mi(t6, e, r) {
  const n = V(t6, r == null ? void 0 : r.in);
  if (isNaN(e)) return se((r == null ? void 0 : r.in) || t6, NaN);
  if (!e)
    return n;
  const a = n.getDate(), i = se((r == null ? void 0 : r.in) || t6, n.getTime());
  i.setMonth(n.getMonth() + e + 1, 0);
  const s = i.getDate();
  return a >= s ? i : (n.setFullYear(
    i.getFullYear(),
    i.getMonth(),
    a
  ), n);
}
function Vn(t6, e, r) {
  const {
    years: n = 0,
    months: a = 0,
    weeks: i = 0,
    days: s = 0,
    hours: o = 0,
    minutes: l = 0,
    seconds: c = 0
  } = e, d = V(t6, r == null ? void 0 : r.in), u = a || n ? Mi(d, a + n * 12) : d, f = s || i ? Wt(u, s + i * 7) : u, h = l + o * 60, m = (c + h * 60) * 1e3;
  return se((r == null ? void 0 : r.in) || t6, +f + m);
}
function tb(t6, e) {
  return V(t6, e == null ? void 0 : e.in).getDay() === 6;
}
function rb(t6, e) {
  return V(t6, e == null ? void 0 : e.in).getDay() === 0;
}
function ea(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in).getDay();
  return r === 0 || r === 6;
}
function nb(t6, e, r) {
  const n = V(t6, r == null ? void 0 : r.in), a = ea(n, r);
  if (isNaN(e)) return se(r == null ? void 0 : r.in, NaN);
  const i = n.getHours(), s = e < 0 ? -1 : 1, o = Math.trunc(e / 5);
  n.setDate(n.getDate() + o * 7);
  let l = Math.abs(e % 5);
  for (; l > 0; )
    n.setDate(n.getDate() + s), ea(n, r) || (l -= 1);
  return a && ea(n, r) && e !== 0 && (tb(n, r) && n.setDate(n.getDate() + (s < 0 ? 2 : -1)), rb(n, r) && n.setDate(n.getDate() + (s < 0 ? 1 : -2))), n.setHours(i), n;
}
function Eo(t6, e, r) {
  return se((r == null ? void 0 : r.in) || t6, +V(t6) + e);
}
function ab(t6, e, r) {
  return Eo(t6, e * Fn, r);
}
let ib = {};
function vt() {
  return ib;
}
function eC(t6) {
  ib = t6;
}
function dt(t6, e) {
  var o, l, c, d;
  const r = vt(), n = (e == null ? void 0 : e.weekStartsOn) ?? ((l = (o = e == null ? void 0 : e.locale) == null ? void 0 : o.options) == null ? void 0 : l.weekStartsOn) ?? r.weekStartsOn ?? ((d = (c = r.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0, a = V(t6, e == null ? void 0 : e.in), i = a.getDay(), s = (i < n ? 7 : 0) + i - n;
  return a.setDate(a.getDate() - s), a.setHours(0, 0, 0, 0), a;
}
function Jt(t6, e) {
  return dt(t6, { ...e, weekStartsOn: 1 });
}
function Kr(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in), n = r.getFullYear(), a = se(r, 0);
  a.setFullYear(n + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const i = Jt(a), s = se(r, 0);
  s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
  const o = Jt(s);
  return r.getTime() >= i.getTime() ? n + 1 : r.getTime() >= o.getTime() ? n : n - 1;
}
function Ct(t6) {
  const e = V(t6), r = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return r.setUTCFullYear(e.getFullYear()), +t6 - +r;
}
function Ee(t6, ...e) {
  const r = se.bind(
    null,
    t6 || e.find((n) => typeof n == "object")
  );
  return e.map(r);
}
function ua(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in);
  return r.setHours(0, 0, 0, 0), r;
}
function pr(t6, e, r) {
  const [n, a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  ), i = ua(n), s = ua(a), o = +i - Ct(i), l = +s - Ct(s);
  return Math.round((o - l) / Xp);
}
function Qr(t6, e) {
  const r = Kr(t6, e), n = se((e == null ? void 0 : e.in) || t6, 0);
  return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), Jt(n);
}
function sb(t6, e, r) {
  let n = V(t6, r == null ? void 0 : r.in);
  const a = pr(
    n,
    Qr(n, r)
  ), i = se((r == null ? void 0 : r.in) || t6, 0);
  return i.setFullYear(e, 0, 4), i.setHours(0, 0, 0, 0), n = Qr(i), n.setDate(n.getDate() + a), n;
}
function ob(t6, e, r) {
  return sb(t6, Kr(t6, r) + e, r);
}
function ud(t6, e, r) {
  const n = V(t6, r == null ? void 0 : r.in);
  return n.setTime(n.getTime() + e * Nr), n;
}
function fd(t6, e, r) {
  return Mi(t6, e * 3, r);
}
function lb(t6, e, r) {
  return Eo(t6, e * 1e3, r);
}
function To(t6, e, r) {
  return Wt(t6, e * 7, r);
}
function cb(t6, e, r) {
  return Mi(t6, e * 12, r);
}
function tC(t6, e, r) {
  const [n, a] = [
    +V(t6.start, r == null ? void 0 : r.in),
    +V(t6.end, r == null ? void 0 : r.in)
  ].sort((o, l) => o - l), [i, s] = [
    +V(e.start, r == null ? void 0 : r.in),
    +V(e.end, r == null ? void 0 : r.in)
  ].sort((o, l) => o - l);
  return r != null && r.inclusive ? n <= s && i <= a : n < s && i < a;
}
function db(t6, e) {
  let r, n = e == null ? void 0 : e.in;
  return t6.forEach((a) => {
    !n && typeof a == "object" && (n = se.bind(null, a));
    const i = V(a, n);
    (!r || r < i || isNaN(+i)) && (r = i);
  }), se(n, r || NaN);
}
function ub(t6, e) {
  let r, n = e == null ? void 0 : e.in;
  return t6.forEach((a) => {
    !n && typeof a == "object" && (n = se.bind(null, a));
    const i = V(a, n);
    (!r || r > i || isNaN(+i)) && (r = i);
  }), se(n, r || NaN);
}
function rC(t6, e, r) {
  const [n, a, i] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e.start,
    e.end
  );
  return ub([db([n, a], r), i], r);
}
function fb(t6, e) {
  const r = +V(t6);
  if (isNaN(r)) return NaN;
  let n, a;
  return e.forEach((i, s) => {
    const o = V(i);
    if (isNaN(+o)) {
      n = NaN, a = NaN;
      return;
    }
    const l = Math.abs(r - +o);
    (n == null || l < a) && (n = s, a = l);
  }), n;
}
function nC(t6, e, r) {
  const [n, ...a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    ...e
  ), i = fb(n, a);
  if (typeof i == "number" && isNaN(i))
    return se(n, NaN);
  if (i !== void 0) return a[i];
}
function br(t6, e) {
  const r = +V(t6) - +V(e);
  return r < 0 ? -1 : r > 0 ? 1 : r;
}
function aC(t6, e) {
  const r = +V(t6) - +V(e);
  return r > 0 ? -1 : r < 0 ? 1 : r;
}
function Je(t6) {
  return se(t6, Date.now());
}
function iC(t6) {
  const e = Math.trunc(t6 / Up);
  return e === 0 ? 0 : e;
}
function Ci(t6, e, r) {
  const [n, a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  );
  return +ua(n) == +ua(a);
}
function hb(t6) {
  return t6 instanceof Date || typeof t6 == "object" && Object.prototype.toString.call(t6) === "[object Date]";
}
function Ir(t6) {
  return !(!hb(t6) && typeof t6 != "number" || isNaN(+V(t6)));
}
function sC(t6, e, r) {
  const [n, a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  );
  if (!Ir(n) || !Ir(a)) return NaN;
  const i = pr(n, a), s = i < 0 ? -1 : 1, o = Math.trunc(i / 7);
  let l = o * 5, c = Wt(a, o * 7);
  for (; !Ci(n, c); )
    l += ea(c, r) ? 0 : s, c = Wt(c, s);
  return l === 0 ? 0 : l;
}
function gb(t6, e, r) {
  const [n, a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  );
  return Kr(n, r) - Kr(a, r);
}
function oC(t6, e, r) {
  const [n, a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  ), i = Jt(n), s = Jt(a), o = +i - Ct(i), l = +s - Ct(s);
  return Math.round((o - l) / Di);
}
function Us(t6, e, r) {
  const [n, a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  ), i = n.getFullYear() - a.getFullYear(), s = n.getMonth() - a.getMonth();
  return i * 12 + s;
}
function Gl(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in);
  return Math.trunc(r.getMonth() / 3) + 1;
}
function gs(t6, e, r) {
  const [n, a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  ), i = n.getFullYear() - a.getFullYear(), s = Gl(n) - Gl(a);
  return i * 4 + s;
}
function Xs(t6, e, r) {
  const [n, a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  ), i = dt(n, r), s = dt(a, r), o = +i - Ct(i), l = +s - Ct(s);
  return Math.round((o - l) / Di);
}
function Za(t6, e, r) {
  const [n, a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  );
  return n.getFullYear() - a.getFullYear();
}
function hd(t6, e, r) {
  const [n, a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  ), i = Rh(n, a), s = Math.abs(
    pr(n, a)
  );
  n.setDate(n.getDate() - i * s);
  const o = +(Rh(n, a) === -i), l = i * (s - o);
  return l === 0 ? 0 : l;
}
function Rh(t6, e) {
  const r = t6.getFullYear() - e.getFullYear() || t6.getMonth() - e.getMonth() || t6.getDate() - e.getDate() || t6.getHours() - e.getHours() || t6.getMinutes() - e.getMinutes() || t6.getSeconds() - e.getSeconds() || t6.getMilliseconds() - e.getMilliseconds();
  return r < 0 ? -1 : r > 0 ? 1 : r;
}
function tn(t6) {
  return (e) => {
    const n = (t6 ? Math[t6] : Math.trunc)(e);
    return n === 0 ? 0 : n;
  };
}
function Gs(t6, e, r) {
  const [n, a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  ), i = (+n - +a) / Fn;
  return tn(r == null ? void 0 : r.roundingMethod)(i);
}
function mb(t6, e, r) {
  return ob(t6, -e, r);
}
function lC(t6, e, r) {
  const [n, a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  ), i = br(n, a), s = Math.abs(
    gb(n, a, r)
  ), o = mb(n, i * s, r), l = +(br(o, a) === -i), c = i * (s - l);
  return c === 0 ? 0 : c;
}
function gd(t6, e) {
  return +V(t6) - +V(e);
}
function Ks(t6, e, r) {
  const n = gd(t6, e) / Nr;
  return tn(r == null ? void 0 : r.roundingMethod)(n);
}
function md(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in);
  return r.setHours(23, 59, 59, 999), r;
}
function pd(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in), n = r.getMonth();
  return r.setFullYear(r.getFullYear(), n + 1, 0), r.setHours(23, 59, 59, 999), r;
}
function pb(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in);
  return +md(r, e) == +pd(r, e);
}
function Po(t6, e, r) {
  const [n, a, i] = Ee(
    r == null ? void 0 : r.in,
    t6,
    t6,
    e
  ), s = br(a, i), o = Math.abs(
    Us(a, i)
  );
  if (o < 1) return 0;
  a.getMonth() === 1 && a.getDate() > 27 && a.setDate(30), a.setMonth(a.getMonth() - s * o);
  let l = br(a, i) === -s;
  pb(n) && o === 1 && br(n, i) === 1 && (l = false);
  const c = s * (o - +l);
  return c === 0 ? 0 : c;
}
function cC(t6, e, r) {
  const n = Po(t6, e, r) / 3;
  return tn(r == null ? void 0 : r.roundingMethod)(n);
}
function ta(t6, e, r) {
  const n = gd(t6, e) / 1e3;
  return tn(r == null ? void 0 : r.roundingMethod)(n);
}
function dC(t6, e, r) {
  const n = hd(t6, e, r) / 7;
  return tn(r == null ? void 0 : r.roundingMethod)(n);
}
function bb(t6, e, r) {
  const [n, a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  ), i = br(n, a), s = Math.abs(Za(n, a));
  n.setFullYear(1584), a.setFullYear(1584);
  const o = br(n, a) === -i, l = i * (s - +o);
  return l === 0 ? 0 : l;
}
function Fr(t6, e) {
  const [r, n] = Ee(t6, e.start, e.end);
  return { start: r, end: n };
}
function yb(t6, e) {
  const { start: r, end: n } = Fr(e == null ? void 0 : e.in, t6);
  let a = +r > +n;
  const i = a ? +r : +n, s = a ? n : r;
  s.setHours(0, 0, 0, 0);
  let o = (e == null ? void 0 : e.step) ?? 1;
  if (!o) return [];
  o < 0 && (o = -o, a = !a);
  const l = [];
  for (; +s <= i; )
    l.push(se(r, s)), s.setDate(s.getDate() + o), s.setHours(0, 0, 0, 0);
  return a ? l.reverse() : l;
}
function uC(t6, e) {
  const { start: r, end: n } = Fr(e == null ? void 0 : e.in, t6);
  let a = +r > +n;
  const i = a ? +r : +n, s = a ? n : r;
  s.setMinutes(0, 0, 0);
  let o = (e == null ? void 0 : e.step) ?? 1;
  if (!o) return [];
  o < 0 && (o = -o, a = !a);
  const l = [];
  for (; +s <= i; )
    l.push(se(r, s)), s.setHours(s.getHours() + o);
  return a ? l.reverse() : l;
}
function fC(t6, e) {
  const { start: r, end: n } = Fr(e == null ? void 0 : e.in, t6);
  r.setSeconds(0, 0);
  let a = +r > +n;
  const i = a ? +r : +n;
  let s = a ? n : r, o = (e == null ? void 0 : e.step) ?? 1;
  if (!o) return [];
  o < 0 && (o = -o, a = !a);
  const l = [];
  for (; +s <= i; )
    l.push(se(r, s)), s = ud(s, o);
  return a ? l.reverse() : l;
}
function hC(t6, e) {
  const { start: r, end: n } = Fr(e == null ? void 0 : e.in, t6);
  let a = +r > +n;
  const i = a ? +r : +n, s = a ? n : r;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let o = (e == null ? void 0 : e.step) ?? 1;
  if (!o) return [];
  o < 0 && (o = -o, a = !a);
  const l = [];
  for (; +s <= i; )
    l.push(se(r, s)), s.setMonth(s.getMonth() + o);
  return a ? l.reverse() : l;
}
function kn(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in), n = r.getMonth(), a = n - n % 3;
  return r.setMonth(a, 1), r.setHours(0, 0, 0, 0), r;
}
function gC(t6, e) {
  const { start: r, end: n } = Fr(e == null ? void 0 : e.in, t6);
  let a = +r > +n;
  const i = a ? +kn(r) : +kn(n);
  let s = kn(a ? n : r), o = (e == null ? void 0 : e.step) ?? 1;
  if (!o) return [];
  o < 0 && (o = -o, a = !a);
  const l = [];
  for (; +s <= i; )
    l.push(se(r, s)), s = fd(s, o);
  return a ? l.reverse() : l;
}
function mC(t6, e) {
  const { start: r, end: n } = Fr(e == null ? void 0 : e.in, t6);
  let a = +r > +n;
  const i = dt(a ? n : r, e), s = dt(a ? r : n, e);
  i.setHours(15), s.setHours(15);
  const o = +s.getTime();
  let l = i, c = (e == null ? void 0 : e.step) ?? 1;
  if (!c) return [];
  c < 0 && (c = -c, a = !a);
  const d = [];
  for (; +l <= o; )
    l.setHours(0), d.push(se(r, l)), l = To(l, c), l.setHours(15);
  return a ? d.reverse() : d;
}
function bd(t6, e) {
  const { start: r, end: n } = Fr(e == null ? void 0 : e.in, t6), a = yb({ start: r, end: n }, e), i = [];
  let s = 0;
  for (; s < a.length; ) {
    const o = a[s++];
    ea(o) && i.push(se(r, o));
  }
  return i;
}
function Ro(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in);
  return r.setDate(1), r.setHours(0, 0, 0, 0), r;
}
function pC(t6, e) {
  const r = Ro(t6, e), n = pd(t6, e);
  return bd({ start: r, end: n }, e);
}
function vb(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in), n = r.getFullYear();
  return r.setFullYear(n + 1, 0, 0), r.setHours(23, 59, 59, 999), r;
}
function yd(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function bC(t6, e) {
  const r = yd(t6, e), n = vb(t6, e);
  return bd({ start: r, end: n }, e);
}
function yC(t6, e) {
  const { start: r, end: n } = Fr(e == null ? void 0 : e.in, t6);
  let a = +r > +n;
  const i = a ? +r : +n, s = a ? n : r;
  s.setHours(0, 0, 0, 0), s.setMonth(0, 1);
  let o = (e == null ? void 0 : e.step) ?? 1;
  if (!o) return [];
  o < 0 && (o = -o, a = !a);
  const l = [];
  for (; +s <= i; )
    l.push(se(r, s)), s.setFullYear(s.getFullYear() + o);
  return a ? l.reverse() : l;
}
function vC(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in), n = r.getFullYear(), a = 9 + Math.floor(n / 10) * 10;
  return r.setFullYear(a, 11, 31), r.setHours(23, 59, 59, 999), r;
}
function xC(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in);
  return r.setMinutes(59, 59, 999), r;
}
function xb(t6, e) {
  var o, l, c, d;
  const r = vt(), n = (e == null ? void 0 : e.weekStartsOn) ?? ((l = (o = e == null ? void 0 : e.locale) == null ? void 0 : o.options) == null ? void 0 : l.weekStartsOn) ?? r.weekStartsOn ?? ((d = (c = r.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0, a = V(t6, e == null ? void 0 : e.in), i = a.getDay(), s = (i < n ? -7 : 0) + 6 - (i - n);
  return a.setDate(a.getDate() + s), a.setHours(23, 59, 59, 999), a;
}
function wC(t6, e) {
  return xb(t6, { ...e, weekStartsOn: 1 });
}
function kC(t6, e) {
  const r = Kr(t6, e), n = se((e == null ? void 0 : e.in) || t6, 0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const a = Jt(n, e);
  return a.setMilliseconds(a.getMilliseconds() - 1), a;
}
function _C(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in);
  return r.setSeconds(59, 999), r;
}
function OC(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in), n = r.getMonth(), a = n - n % 3 + 3;
  return r.setMonth(a, 0), r.setHours(23, 59, 59, 999), r;
}
function SC(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in);
  return r.setMilliseconds(999), r;
}
function DC(t6) {
  return md(Date.now(), t6);
}
function MC(t6) {
  const e = Je(t6 == null ? void 0 : t6.in), r = e.getFullYear(), n = e.getMonth(), a = e.getDate(), i = Je(t6 == null ? void 0 : t6.in);
  return i.setFullYear(r, n, a + 1), i.setHours(23, 59, 59, 999), t6 != null && t6.in ? t6.in(i) : i;
}
function CC(t6) {
  const e = Je(t6 == null ? void 0 : t6.in), r = se(t6 == null ? void 0 : t6.in, 0);
  return r.setFullYear(e.getFullYear(), e.getMonth(), e.getDate() - 1), r.setHours(23, 59, 59, 999), r;
}
const EC = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, TC = (t6, e, r) => {
  let n;
  const a = EC[t6];
  return typeof a == "string" ? n = a : e === 1 ? n = a.one : n = a.other.replace("{{count}}", e.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function vl(t6) {
  return (e = {}) => {
    const r = e.width ? String(e.width) : t6.defaultWidth;
    return t6.formats[r] || t6.formats[t6.defaultWidth];
  };
}
const PC = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, RC = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, NC = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, IC = {
  date: vl({
    formats: PC,
    defaultWidth: "full"
  }),
  time: vl({
    formats: RC,
    defaultWidth: "full"
  }),
  dateTime: vl({
    formats: NC,
    defaultWidth: "full"
  })
}, AC = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, FC = (t6, e, r, n) => AC[t6];
function Ta(t6) {
  return (e, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let a;
    if (n === "formatting" && t6.formattingValues) {
      const s = t6.defaultFormattingWidth || t6.defaultWidth, o = r != null && r.width ? String(r.width) : s;
      a = t6.formattingValues[o] || t6.formattingValues[s];
    } else {
      const s = t6.defaultWidth, o = r != null && r.width ? String(r.width) : t6.defaultWidth;
      a = t6.values[o] || t6.values[s];
    }
    const i = t6.argumentCallback ? t6.argumentCallback(e) : e;
    return a[i];
  };
}
const LC = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, WC = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, $C = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, zC = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, jC = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, HC = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, BC = (t6, e) => {
  const r = Number(t6), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, YC = {
  ordinalNumber: BC,
  era: Ta({
    values: LC,
    defaultWidth: "wide"
  }),
  quarter: Ta({
    values: WC,
    defaultWidth: "wide",
    argumentCallback: (t6) => t6 - 1
  }),
  month: Ta({
    values: $C,
    defaultWidth: "wide"
  }),
  day: Ta({
    values: zC,
    defaultWidth: "wide"
  }),
  dayPeriod: Ta({
    values: jC,
    defaultWidth: "wide",
    formattingValues: HC,
    defaultFormattingWidth: "wide"
  })
};
function Pa(t6) {
  return (e, r = {}) => {
    const n = r.width, a = n && t6.matchPatterns[n] || t6.matchPatterns[t6.defaultMatchWidth], i = e.match(a);
    if (!i)
      return null;
    const s = i[0], o = n && t6.parsePatterns[n] || t6.parsePatterns[t6.defaultParseWidth], l = Array.isArray(o) ? qC(o, (u) => u.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      VC(o, (u) => u.test(s))
    );
    let c;
    c = t6.valueCallback ? t6.valueCallback(l) : l, c = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(c)
    ) : c;
    const d = e.slice(s.length);
    return { value: c, rest: d };
  };
}
function VC(t6, e) {
  for (const r in t6)
    if (Object.prototype.hasOwnProperty.call(t6, r) && e(t6[r]))
      return r;
}
function qC(t6, e) {
  for (let r = 0; r < t6.length; r++)
    if (e(t6[r]))
      return r;
}
function UC(t6) {
  return (e, r = {}) => {
    const n = e.match(t6.matchPattern);
    if (!n) return null;
    const a = n[0], i = e.match(t6.parsePattern);
    if (!i) return null;
    let s = t6.valueCallback ? t6.valueCallback(i[0]) : i[0];
    s = r.valueCallback ? r.valueCallback(s) : s;
    const o = e.slice(a.length);
    return { value: s, rest: o };
  };
}
const XC = /^(\d+)(th|st|nd|rd)?/i, GC = /\d+/i, KC = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, QC = {
  any: [/^b/i, /^(a|c)/i]
}, JC = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ZC = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, eE = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, tE = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, rE = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, nE = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, aE = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, iE = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, sE = {
  ordinalNumber: UC({
    matchPattern: XC,
    parsePattern: GC,
    valueCallback: (t6) => parseInt(t6, 10)
  }),
  era: Pa({
    matchPatterns: KC,
    defaultMatchWidth: "wide",
    parsePatterns: QC,
    defaultParseWidth: "any"
  }),
  quarter: Pa({
    matchPatterns: JC,
    defaultMatchWidth: "wide",
    parsePatterns: ZC,
    defaultParseWidth: "any",
    valueCallback: (t6) => t6 + 1
  }),
  month: Pa({
    matchPatterns: eE,
    defaultMatchWidth: "wide",
    parsePatterns: tE,
    defaultParseWidth: "any"
  }),
  day: Pa({
    matchPatterns: rE,
    defaultMatchWidth: "wide",
    parsePatterns: nE,
    defaultParseWidth: "any"
  }),
  dayPeriod: Pa({
    matchPatterns: aE,
    defaultMatchWidth: "any",
    parsePatterns: iE,
    defaultParseWidth: "any"
  })
}, va = {
  code: "en-US",
  formatDistance: TC,
  formatLong: IC,
  formatRelative: FC,
  localize: YC,
  match: sE,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function wb(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in);
  return pr(r, yd(r)) + 1;
}
function vd(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in), n = +Jt(r) - +Qr(r);
  return Math.round(n / Di) + 1;
}
function No(t6, e) {
  var d, u, f, h;
  const r = V(t6, e == null ? void 0 : e.in), n = r.getFullYear(), a = vt(), i = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((u = (d = e == null ? void 0 : e.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((h = (f = a.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = se((e == null ? void 0 : e.in) || t6, 0);
  s.setFullYear(n + 1, 0, i), s.setHours(0, 0, 0, 0);
  const o = dt(s, e), l = se((e == null ? void 0 : e.in) || t6, 0);
  l.setFullYear(n, 0, i), l.setHours(0, 0, 0, 0);
  const c = dt(l, e);
  return +r >= +o ? n + 1 : +r >= +c ? n : n - 1;
}
function Qs(t6, e) {
  var o, l, c, d;
  const r = vt(), n = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((l = (o = e == null ? void 0 : e.locale) == null ? void 0 : o.options) == null ? void 0 : l.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((d = (c = r.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, a = No(t6, e), i = se((e == null ? void 0 : e.in) || t6, 0);
  return i.setFullYear(a, 0, n), i.setHours(0, 0, 0, 0), dt(i, e);
}
function xd(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in), n = +dt(r, e) - +Qs(r, e);
  return Math.round(n / Di) + 1;
}
function oe(t6, e) {
  const r = t6 < 0 ? "-" : "", n = Math.abs(t6).toString().padStart(e, "0");
  return r + n;
}
const ir = {
  // Year
  y(t6, e) {
    const r = t6.getFullYear(), n = r > 0 ? r : 1 - r;
    return oe(e === "yy" ? n % 100 : n, e.length);
  },
  // Month
  M(t6, e) {
    const r = t6.getMonth();
    return e === "M" ? String(r + 1) : oe(r + 1, 2);
  },
  // Day of the month
  d(t6, e) {
    return oe(t6.getDate(), e.length);
  },
  // AM or PM
  a(t6, e) {
    const r = t6.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(t6, e) {
    return oe(t6.getHours() % 12 || 12, e.length);
  },
  // Hour [0-23]
  H(t6, e) {
    return oe(t6.getHours(), e.length);
  },
  // Minute
  m(t6, e) {
    return oe(t6.getMinutes(), e.length);
  },
  // Second
  s(t6, e) {
    return oe(t6.getSeconds(), e.length);
  },
  // Fraction of second
  S(t6, e) {
    const r = e.length, n = t6.getMilliseconds(), a = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return oe(a, e.length);
  }
}, Bn = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Kl = {
  // Era
  G: function(t6, e, r) {
    const n = t6.getFullYear() > 0 ? 1 : 0;
    switch (e) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, { width: "abbreviated" });
      case "GGGGG":
        return r.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(t6, e, r) {
    if (e === "yo") {
      const n = t6.getFullYear(), a = n > 0 ? n : 1 - n;
      return r.ordinalNumber(a, { unit: "year" });
    }
    return ir.y(t6, e);
  },
  // Local week-numbering year
  Y: function(t6, e, r, n) {
    const a = No(t6, n), i = a > 0 ? a : 1 - a;
    if (e === "YY") {
      const s = i % 100;
      return oe(s, 2);
    }
    return e === "Yo" ? r.ordinalNumber(i, { unit: "year" }) : oe(i, e.length);
  },
  // ISO week-numbering year
  R: function(t6, e) {
    const r = Kr(t6);
    return oe(r, e.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t6, e) {
    const r = t6.getFullYear();
    return oe(r, e.length);
  },
  // Quarter
  Q: function(t6, e, r) {
    const n = Math.ceil((t6.getMonth() + 1) / 3);
    switch (e) {
      case "Q":
        return String(n);
      case "QQ":
        return oe(n, 2);
      case "Qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t6, e, r) {
    const n = Math.ceil((t6.getMonth() + 1) / 3);
    switch (e) {
      case "q":
        return String(n);
      case "qq":
        return oe(n, 2);
      case "qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t6, e, r) {
    const n = t6.getMonth();
    switch (e) {
      case "M":
      case "MM":
        return ir.M(t6, e);
      case "Mo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(t6, e, r) {
    const n = t6.getMonth();
    switch (e) {
      case "L":
        return String(n + 1);
      case "LL":
        return oe(n + 1, 2);
      case "Lo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(t6, e, r, n) {
    const a = xd(t6, n);
    return e === "wo" ? r.ordinalNumber(a, { unit: "week" }) : oe(a, e.length);
  },
  // ISO week of year
  I: function(t6, e, r) {
    const n = vd(t6);
    return e === "Io" ? r.ordinalNumber(n, { unit: "week" }) : oe(n, e.length);
  },
  // Day of the month
  d: function(t6, e, r) {
    return e === "do" ? r.ordinalNumber(t6.getDate(), { unit: "date" }) : ir.d(t6, e);
  },
  // Day of year
  D: function(t6, e, r) {
    const n = wb(t6);
    return e === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : oe(n, e.length);
  },
  // Day of week
  E: function(t6, e, r) {
    const n = t6.getDay();
    switch (e) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t6, e, r, n) {
    const a = t6.getDay(), i = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "e":
        return String(i);
      case "ee":
        return oe(i, 2);
      case "eo":
        return r.ordinalNumber(i, { unit: "day" });
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t6, e, r, n) {
    const a = t6.getDay(), i = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "c":
        return String(i);
      case "cc":
        return oe(i, e.length);
      case "co":
        return r.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t6, e, r) {
    const n = t6.getDay(), a = n === 0 ? 7 : n;
    switch (e) {
      case "i":
        return String(a);
      case "ii":
        return oe(a, e.length);
      case "io":
        return r.ordinalNumber(a, { unit: "day" });
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t6, e, r) {
    const a = t6.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t6, e, r) {
    const n = t6.getHours();
    let a;
    switch (n === 12 ? a = Bn.noon : n === 0 ? a = Bn.midnight : a = n / 12 >= 1 ? "pm" : "am", e) {
      case "b":
      case "bb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t6, e, r) {
    const n = t6.getHours();
    let a;
    switch (n >= 17 ? a = Bn.evening : n >= 12 ? a = Bn.afternoon : n >= 4 ? a = Bn.morning : a = Bn.night, e) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t6, e, r) {
    if (e === "ho") {
      let n = t6.getHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, { unit: "hour" });
    }
    return ir.h(t6, e);
  },
  // Hour [0-23]
  H: function(t6, e, r) {
    return e === "Ho" ? r.ordinalNumber(t6.getHours(), { unit: "hour" }) : ir.H(t6, e);
  },
  // Hour [0-11]
  K: function(t6, e, r) {
    const n = t6.getHours() % 12;
    return e === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : oe(n, e.length);
  },
  // Hour [1-24]
  k: function(t6, e, r) {
    let n = t6.getHours();
    return n === 0 && (n = 24), e === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : oe(n, e.length);
  },
  // Minute
  m: function(t6, e, r) {
    return e === "mo" ? r.ordinalNumber(t6.getMinutes(), { unit: "minute" }) : ir.m(t6, e);
  },
  // Second
  s: function(t6, e, r) {
    return e === "so" ? r.ordinalNumber(t6.getSeconds(), { unit: "second" }) : ir.s(t6, e);
  },
  // Fraction of second
  S: function(t6, e) {
    return ir.S(t6, e);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t6, e, r) {
    const n = t6.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (e) {
      case "X":
        return Ih(n);
      case "XXXX":
      case "XX":
        return bn(n);
      case "XXXXX":
      case "XXX":
      default:
        return bn(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t6, e, r) {
    const n = t6.getTimezoneOffset();
    switch (e) {
      case "x":
        return Ih(n);
      case "xxxx":
      case "xx":
        return bn(n);
      case "xxxxx":
      case "xxx":
      default:
        return bn(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(t6, e, r) {
    const n = t6.getTimezoneOffset();
    switch (e) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Nh(n, ":");
      case "OOOO":
      default:
        return "GMT" + bn(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t6, e, r) {
    const n = t6.getTimezoneOffset();
    switch (e) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Nh(n, ":");
      case "zzzz":
      default:
        return "GMT" + bn(n, ":");
    }
  },
  // Seconds timestamp
  t: function(t6, e, r) {
    const n = Math.trunc(+t6 / 1e3);
    return oe(n, e.length);
  },
  // Milliseconds timestamp
  T: function(t6, e, r) {
    return oe(+t6, e.length);
  }
};
function Nh(t6, e = "") {
  const r = t6 > 0 ? "-" : "+", n = Math.abs(t6), a = Math.trunc(n / 60), i = n % 60;
  return i === 0 ? r + String(a) : r + String(a) + e + oe(i, 2);
}
function Ih(t6, e) {
  return t6 % 60 === 0 ? (t6 > 0 ? "-" : "+") + oe(Math.abs(t6) / 60, 2) : bn(t6, e);
}
function bn(t6, e = "") {
  const r = t6 > 0 ? "-" : "+", n = Math.abs(t6), a = oe(Math.trunc(n / 60), 2), i = oe(n % 60, 2);
  return r + a + e + i;
}
const Ah = (t6, e) => {
  switch (t6) {
    case "P":
      return e.date({ width: "short" });
    case "PP":
      return e.date({ width: "medium" });
    case "PPP":
      return e.date({ width: "long" });
    case "PPPP":
    default:
      return e.date({ width: "full" });
  }
}, kb = (t6, e) => {
  switch (t6) {
    case "p":
      return e.time({ width: "short" });
    case "pp":
      return e.time({ width: "medium" });
    case "ppp":
      return e.time({ width: "long" });
    case "pppp":
    default:
      return e.time({ width: "full" });
  }
}, oE = (t6, e) => {
  const r = t6.match(/(P+)(p+)?/) || [], n = r[1], a = r[2];
  if (!a)
    return Ah(t6, e);
  let i;
  switch (n) {
    case "P":
      i = e.dateTime({ width: "short" });
      break;
    case "PP":
      i = e.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = e.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = e.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", Ah(n, e)).replace("{{time}}", kb(a, e));
}, Js = {
  p: kb,
  P: oE
}, lE = /^D+$/, cE = /^Y+$/, dE = ["D", "DD", "YY", "YYYY"];
function _b(t6) {
  return lE.test(t6);
}
function Ob(t6) {
  return cE.test(t6);
}
function Ql(t6, e, r) {
  const n = uE(t6, e, r);
  if (console.warn(n), dE.includes(t6)) throw new RangeError(n);
}
function uE(t6, e, r) {
  const n = t6[0] === "Y" ? "years" : "days of the month";
  return `Use \`${t6.toLowerCase()}\` instead of \`${t6}\` (in \`${e}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const fE = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, hE = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, gE = /^'([^]*?)'?$/, mE = /''/g, pE = /[a-zA-Z]/;
function Zs(t6, e, r) {
  var d, u, f, h, g, m, p, w;
  const n = vt(), a = (r == null ? void 0 : r.locale) ?? n.locale ?? va, i = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((u = (d = r == null ? void 0 : r.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((h = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = (r == null ? void 0 : r.weekStartsOn) ?? ((m = (g = r == null ? void 0 : r.locale) == null ? void 0 : g.options) == null ? void 0 : m.weekStartsOn) ?? n.weekStartsOn ?? ((w = (p = n.locale) == null ? void 0 : p.options) == null ? void 0 : w.weekStartsOn) ?? 0, o = V(t6, r == null ? void 0 : r.in);
  if (!Ir(o))
    throw new RangeError("Invalid time value");
  let l = e.match(hE).map((b) => {
    const k = b[0];
    if (k === "p" || k === "P") {
      const v = Js[k];
      return v(b, a.formatLong);
    }
    return b;
  }).join("").match(fE).map((b) => {
    if (b === "''")
      return { isToken: false, value: "'" };
    const k = b[0];
    if (k === "'")
      return { isToken: false, value: bE(b) };
    if (Kl[k])
      return { isToken: true, value: b };
    if (k.match(pE))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + k + "`"
      );
    return { isToken: false, value: b };
  });
  a.localize.preprocessor && (l = a.localize.preprocessor(o, l));
  const c = {
    firstWeekContainsDate: i,
    weekStartsOn: s,
    locale: a
  };
  return l.map((b) => {
    if (!b.isToken) return b.value;
    const k = b.value;
    (!(r != null && r.useAdditionalWeekYearTokens) && Ob(k) || !(r != null && r.useAdditionalDayOfYearTokens) && _b(k)) && Ql(k, e, String(t6));
    const v = Kl[k[0]];
    return v(o, k, a.localize, c);
  }).join("");
}
function bE(t6) {
  const e = t6.match(gE);
  return e ? e[1].replace(mE, "'") : t6;
}
function Sb(t6, e, r) {
  const n = vt(), a = (r == null ? void 0 : r.locale) ?? n.locale ?? va, i = 2520, s = br(t6, e);
  if (isNaN(s)) throw new RangeError("Invalid time value");
  const o = Object.assign({}, r, {
    addSuffix: r == null ? void 0 : r.addSuffix,
    comparison: s
  }), [l, c] = Ee(
    r == null ? void 0 : r.in,
    ...s > 0 ? [e, t6] : [t6, e]
  ), d = ta(c, l), u = (Ct(c) - Ct(l)) / 1e3, f = Math.round((d - u) / 60);
  let h;
  if (f < 2)
    return r != null && r.includeSeconds ? d < 5 ? a.formatDistance("lessThanXSeconds", 5, o) : d < 10 ? a.formatDistance("lessThanXSeconds", 10, o) : d < 20 ? a.formatDistance("lessThanXSeconds", 20, o) : d < 40 ? a.formatDistance("halfAMinute", 0, o) : d < 60 ? a.formatDistance("lessThanXMinutes", 1, o) : a.formatDistance("xMinutes", 1, o) : f === 0 ? a.formatDistance("lessThanXMinutes", 1, o) : a.formatDistance("xMinutes", f, o);
  if (f < 45)
    return a.formatDistance("xMinutes", f, o);
  if (f < 90)
    return a.formatDistance("aboutXHours", 1, o);
  if (f < qs) {
    const g = Math.round(f / 60);
    return a.formatDistance("aboutXHours", g, o);
  } else {
    if (f < i)
      return a.formatDistance("xDays", 1, o);
    if (f < Kn) {
      const g = Math.round(f / qs);
      return a.formatDistance("xDays", g, o);
    } else if (f < Kn * 2)
      return h = Math.round(f / Kn), a.formatDistance("aboutXMonths", h, o);
  }
  if (h = Po(c, l), h < 12) {
    const g = Math.round(f / Kn);
    return a.formatDistance("xMonths", g, o);
  } else {
    const g = h % 12, m = Math.trunc(h / 12);
    return g < 3 ? a.formatDistance("aboutXYears", m, o) : g < 9 ? a.formatDistance("overXYears", m, o) : a.formatDistance("almostXYears", m + 1, o);
  }
}
function Db(t6, e, r) {
  const n = vt(), a = (r == null ? void 0 : r.locale) ?? n.locale ?? va, i = br(t6, e);
  if (isNaN(i))
    throw new RangeError("Invalid time value");
  const s = Object.assign({}, r, {
    addSuffix: r == null ? void 0 : r.addSuffix,
    comparison: i
  }), [o, l] = Ee(
    r == null ? void 0 : r.in,
    ...i > 0 ? [e, t6] : [t6, e]
  ), c = tn((r == null ? void 0 : r.roundingMethod) ?? "round"), d = l.getTime() - o.getTime(), u = d / Nr, f = Ct(l) - Ct(o), h = (d - f) / Nr, g = r == null ? void 0 : r.unit;
  let m;
  if (g ? m = g : u < 1 ? m = "second" : u < 60 ? m = "minute" : u < qs ? m = "hour" : h < Kn ? m = "day" : h < Th ? m = "month" : m = "year", m === "second") {
    const p = c(d / 1e3);
    return a.formatDistance("xSeconds", p, s);
  } else if (m === "minute") {
    const p = c(u);
    return a.formatDistance("xMinutes", p, s);
  } else if (m === "hour") {
    const p = c(u / 60);
    return a.formatDistance("xHours", p, s);
  } else if (m === "day") {
    const p = c(h / qs);
    return a.formatDistance("xDays", p, s);
  } else if (m === "month") {
    const p = c(h / Kn);
    return p === 12 && g !== "month" ? a.formatDistance("xYears", 1, s) : a.formatDistance("xMonths", p, s);
  } else {
    const p = c(h / Th);
    return a.formatDistance("xYears", p, s);
  }
}
function yE(t6, e) {
  return Sb(t6, Je(t6), e);
}
function vE(t6, e) {
  return Db(t6, Je(t6), e);
}
const xE = [
  "years",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds"
];
function wE(t6, e) {
  const r = vt(), n = (e == null ? void 0 : e.locale) ?? r.locale ?? va, a = (e == null ? void 0 : e.format) ?? xE, i = (e == null ? void 0 : e.zero) ?? false, s = (e == null ? void 0 : e.delimiter) ?? " ";
  return n.formatDistance ? a.reduce((l, c) => {
    const d = `x${c.replace(/(^.)/, (f) => f.toUpperCase())}`, u = t6[c];
    return u !== void 0 && (i || t6[c]) ? l.concat(n.formatDistance(d, u)) : l;
  }, []).join(s) : "";
}
function kE(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in);
  if (isNaN(+r))
    throw new RangeError("Invalid time value");
  const n = (e == null ? void 0 : e.format) ?? "extended", a = (e == null ? void 0 : e.representation) ?? "complete";
  let i = "", s = "";
  const o = n === "extended" ? "-" : "", l = n === "extended" ? ":" : "";
  if (a !== "time") {
    const c = oe(r.getDate(), 2), d = oe(r.getMonth() + 1, 2);
    i = `${oe(r.getFullYear(), 4)}${o}${d}${o}${c}`;
  }
  if (a !== "date") {
    const c = r.getTimezoneOffset();
    if (c !== 0) {
      const m = Math.abs(c), p = oe(Math.trunc(m / 60), 2), w = oe(m % 60, 2);
      s = `${c < 0 ? "+" : "-"}${p}:${w}`;
    } else
      s = "Z";
    const d = oe(r.getHours(), 2), u = oe(r.getMinutes(), 2), f = oe(r.getSeconds(), 2), h = i === "" ? "" : "T", g = [d, u, f].join(l);
    i = `${i}${h}${g}${s}`;
  }
  return i;
}
function _E(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in);
  if (!Ir(r))
    throw new RangeError("Invalid time value");
  const n = (e == null ? void 0 : e.format) ?? "extended", a = (e == null ? void 0 : e.representation) ?? "complete";
  let i = "";
  const s = n === "extended" ? "-" : "", o = n === "extended" ? ":" : "";
  if (a !== "time") {
    const l = oe(r.getDate(), 2), c = oe(r.getMonth() + 1, 2);
    i = `${oe(r.getFullYear(), 4)}${s}${c}${s}${l}`;
  }
  if (a !== "date") {
    const l = oe(r.getHours(), 2), c = oe(r.getMinutes(), 2), d = oe(r.getSeconds(), 2);
    i = `${i}${i === "" ? "" : " "}${l}${o}${c}${o}${d}`;
  }
  return i;
}
function OE(t6) {
  const {
    years: e = 0,
    months: r = 0,
    days: n = 0,
    hours: a = 0,
    minutes: i = 0,
    seconds: s = 0
  } = t6;
  return `P${e}Y${r}M${n}DT${a}H${i}M${s}S`;
}
function SE(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in);
  if (!Ir(r))
    throw new RangeError("Invalid time value");
  const n = (e == null ? void 0 : e.fractionDigits) ?? 0, a = oe(r.getDate(), 2), i = oe(r.getMonth() + 1, 2), s = r.getFullYear(), o = oe(r.getHours(), 2), l = oe(r.getMinutes(), 2), c = oe(r.getSeconds(), 2);
  let d = "";
  if (n > 0) {
    const h = r.getMilliseconds(), g = Math.trunc(
      h * Math.pow(10, n - 3)
    );
    d = "." + oe(g, n);
  }
  let u = "";
  const f = r.getTimezoneOffset();
  if (f !== 0) {
    const h = Math.abs(f), g = oe(Math.trunc(h / 60), 2), m = oe(h % 60, 2);
    u = `${f < 0 ? "+" : "-"}${g}:${m}`;
  } else
    u = "Z";
  return `${s}-${i}-${a}T${o}:${l}:${c}${d}${u}`;
}
const DE = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ME = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
function CE(t6) {
  const e = V(t6);
  if (!Ir(e))
    throw new RangeError("Invalid time value");
  const r = DE[e.getUTCDay()], n = oe(e.getUTCDate(), 2), a = ME[e.getUTCMonth()], i = e.getUTCFullYear(), s = oe(e.getUTCHours(), 2), o = oe(e.getUTCMinutes(), 2), l = oe(e.getUTCSeconds(), 2);
  return `${r}, ${n} ${a} ${i} ${s}:${o}:${l} GMT`;
}
function EE(t6, e, r) {
  var u, f, h, g;
  const [n, a] = Ee(r == null ? void 0 : r.in, t6, e), i = vt(), s = (r == null ? void 0 : r.locale) ?? i.locale ?? va, o = (r == null ? void 0 : r.weekStartsOn) ?? ((f = (u = r == null ? void 0 : r.locale) == null ? void 0 : u.options) == null ? void 0 : f.weekStartsOn) ?? i.weekStartsOn ?? ((g = (h = i.locale) == null ? void 0 : h.options) == null ? void 0 : g.weekStartsOn) ?? 0, l = pr(n, a);
  if (isNaN(l))
    throw new RangeError("Invalid time value");
  let c;
  l < -6 ? c = "other" : l < -1 ? c = "lastWeek" : l < 0 ? c = "yesterday" : l < 1 ? c = "today" : l < 2 ? c = "tomorrow" : l < 7 ? c = "nextWeek" : c = "other";
  const d = s.formatRelative(c, n, a, {
    locale: s,
    weekStartsOn: o
  });
  return Zs(n, d, { locale: s, weekStartsOn: o });
}
function TE(t6, e) {
  return V(t6 * 1e3, e == null ? void 0 : e.in);
}
function Mb(t6, e) {
  return V(t6, e == null ? void 0 : e.in).getDate();
}
function Io(t6, e) {
  return V(t6, e == null ? void 0 : e.in).getDay();
}
function Cb(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in), n = r.getFullYear(), a = r.getMonth(), i = se(r, 0);
  return i.setFullYear(n, a + 1, 0), i.setHours(0, 0, 0, 0), i.getDate();
}
function Eb(t6, e) {
  const n = V(t6, e == null ? void 0 : e.in).getFullYear();
  return n % 400 === 0 || n % 4 === 0 && n % 100 !== 0;
}
function PE(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in);
  return Number.isNaN(+r) ? NaN : Eb(r) ? 366 : 365;
}
function RE(t6, e) {
  const n = V(t6, e == null ? void 0 : e.in).getFullYear();
  return Math.floor(n / 10) * 10;
}
function Tb() {
  return Object.assign({}, vt());
}
function NE(t6, e) {
  return V(t6, e == null ? void 0 : e.in).getHours();
}
function Pb(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in).getDay();
  return r === 0 ? 7 : r;
}
function IE(t6, e) {
  const r = Qr(t6, e), a = +Qr(To(r, 60)) - +r;
  return Math.round(a / Di);
}
function AE(t6) {
  return V(t6).getMilliseconds();
}
function FE(t6, e) {
  return V(t6, e == null ? void 0 : e.in).getMinutes();
}
function LE(t6, e) {
  return V(t6, e == null ? void 0 : e.in).getMonth();
}
function WE(t6, e) {
  const [r, n] = [
    +V(t6.start),
    +V(t6.end)
  ].sort((u, f) => u - f), [a, i] = [
    +V(e.start),
    +V(e.end)
  ].sort((u, f) => u - f);
  if (!(r < i && a < n)) return 0;
  const o = a < r ? r : a, l = o - Ct(o), c = i > n ? n : i, d = c - Ct(c);
  return Math.ceil((d - l) / Xp);
}
function $E(t6) {
  return V(t6).getSeconds();
}
function zE(t6) {
  return +V(t6);
}
function jE(t6) {
  return Math.trunc(+V(t6) / 1e3);
}
function HE(t6, e) {
  var l, c, d, u;
  const r = vt(), n = (e == null ? void 0 : e.weekStartsOn) ?? ((c = (l = e == null ? void 0 : e.locale) == null ? void 0 : l.options) == null ? void 0 : c.weekStartsOn) ?? r.weekStartsOn ?? ((u = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = Mb(V(t6, e == null ? void 0 : e.in));
  if (isNaN(a)) return NaN;
  const i = Io(Ro(t6, e));
  let s = n - i;
  s <= 0 && (s += 7);
  const o = a - s;
  return Math.ceil(o / 7) + 1;
}
function Rb(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in), n = r.getMonth();
  return r.setFullYear(r.getFullYear(), n + 1, 0), r.setHours(0, 0, 0, 0), V(r, e == null ? void 0 : e.in);
}
function BE(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in);
  return Xs(
    Rb(r, e),
    Ro(r, e),
    e
  ) + 1;
}
function YE(t6, e) {
  return V(t6, e == null ? void 0 : e.in).getFullYear();
}
function VE(t6) {
  return Math.trunc(t6 * Fn);
}
function qE(t6) {
  return Math.trunc(t6 * Gp);
}
function UE(t6) {
  return Math.trunc(t6 * Co);
}
function XE(t6, e, r) {
  const [n, a] = Ee(r == null ? void 0 : r.in, t6, e);
  if (isNaN(+n)) throw new TypeError("Start date is invalid");
  if (isNaN(+a)) throw new TypeError("End date is invalid");
  if (r != null && r.assertPositive && +n > +a)
    throw new TypeError("End date must be after start date");
  return { start: n, end: a };
}
function GE(t6, e) {
  const { start: r, end: n } = Fr(e == null ? void 0 : e.in, t6), a = {}, i = bb(n, r);
  i && (a.years = i);
  const s = Vn(r, { years: a.years }), o = Po(n, s);
  o && (a.months = o);
  const l = Vn(s, { months: a.months }), c = hd(n, l);
  c && (a.days = c);
  const d = Vn(l, { days: a.days }), u = Gs(n, d);
  u && (a.hours = u);
  const f = Vn(d, { hours: a.hours }), h = Ks(n, f);
  h && (a.minutes = h);
  const g = Vn(f, { minutes: a.minutes }), m = ta(n, g);
  return m && (a.seconds = m), a;
}
function KE(t6, e, r) {
  let n;
  return QE(e) ? n = e : r = e, new Intl.DateTimeFormat(r == null ? void 0 : r.locale, n).format(
    V(t6)
  );
}
function QE(t6) {
  return t6 !== void 0 && !("locale" in t6);
}
function JE(t6, e, r) {
  let n = 0, a;
  const [i, s] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  );
  if (r != null && r.unit)
    a = r == null ? void 0 : r.unit, a === "second" ? n = ta(i, s) : a === "minute" ? n = Ks(i, s) : a === "hour" ? n = Gs(i, s) : a === "day" ? n = pr(i, s) : a === "week" ? n = Xs(i, s) : a === "month" ? n = Us(i, s) : a === "quarter" ? n = gs(i, s) : a === "year" && (n = Za(i, s));
  else {
    const l = ta(i, s);
    Math.abs(l) < cd ? (n = ta(i, s), a = "second") : Math.abs(l) < Co ? (n = Ks(i, s), a = "minute") : Math.abs(l) < dd && Math.abs(pr(i, s)) < 1 ? (n = Gs(i, s), a = "hour") : Math.abs(l) < J2 && (n = pr(i, s)) && Math.abs(n) < 7 ? a = "day" : Math.abs(l) < eb ? (n = Xs(i, s), a = "week") : Math.abs(l) < Z2 ? (n = Us(i, s), a = "month") : Math.abs(l) < Zp && gs(i, s) < 4 ? (n = gs(i, s), a = "quarter") : (n = Za(i, s), a = "year");
  }
  return new Intl.RelativeTimeFormat(r == null ? void 0 : r.locale, {
    numeric: "auto",
    ...r
  }).format(n, a);
}
function ZE(t6, e) {
  return +V(t6) > +V(e);
}
function eT(t6, e) {
  return +V(t6) < +V(e);
}
function tT(t6, e) {
  return +V(t6) == +V(e);
}
function rT(t6, e, r) {
  const n = new Date(t6, e, r);
  return n.getFullYear() === t6 && n.getMonth() === e && n.getDate() === r;
}
function nT(t6, e) {
  return V(t6, e == null ? void 0 : e.in).getDate() === 1;
}
function aT(t6, e) {
  return V(t6, e == null ? void 0 : e.in).getDay() === 5;
}
function iT(t6) {
  return +V(t6) > Date.now();
}
function Nb(t6, e) {
  const r = sT(e) ? new e(0) : se(e, 0);
  return r.setFullYear(t6.getFullYear(), t6.getMonth(), t6.getDate()), r.setHours(
    t6.getHours(),
    t6.getMinutes(),
    t6.getSeconds(),
    t6.getMilliseconds()
  ), r;
}
function sT(t6) {
  var e;
  return typeof t6 == "function" && ((e = t6.prototype) == null ? void 0 : e.constructor) === t6;
}
const oT = 10;
class Ib {
  constructor() {
    K(this, "subPriority", 0);
  }
  validate(e, r) {
    return true;
  }
}
class lT extends Ib {
  constructor(e, r, n, a, i) {
    super(), this.value = e, this.validateValue = r, this.setValue = n, this.priority = a, i && (this.subPriority = i);
  }
  validate(e, r) {
    return this.validateValue(e, this.value, r);
  }
  set(e, r, n) {
    return this.setValue(e, r, this.value, n);
  }
}
class cT extends Ib {
  constructor(r, n) {
    super();
    K(this, "priority", oT);
    K(this, "subPriority", -1);
    this.context = r || ((a) => se(n, a));
  }
  set(r, n) {
    return n.timestampIsSet ? r : se(r, Nb(r, this.context));
  }
}
class xe {
  run(e, r, n, a) {
    const i = this.parse(e, r, n, a);
    return i ? {
      setter: new lT(
        i.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: i.rest
    } : null;
  }
  validate(e, r, n) {
    return true;
  }
}
class dT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 140);
    K(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return a.era(r, { width: "abbreviated" }) || a.era(r, { width: "narrow" });
      case "GGGGG":
        return a.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return a.era(r, { width: "wide" }) || a.era(r, { width: "abbreviated" }) || a.era(r, { width: "narrow" });
    }
  }
  set(r, n, a) {
    return n.era = a, r.setFullYear(a, 0, 1), r.setHours(0, 0, 0, 0), r;
  }
}
const qe = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, cr = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function Ue(t6, e) {
  return t6 && {
    value: e(t6.value),
    rest: t6.rest
  };
}
function ze(t6, e) {
  const r = e.match(t6);
  return r ? {
    value: parseInt(r[0], 10),
    rest: e.slice(r[0].length)
  } : null;
}
function dr(t6, e) {
  const r = e.match(t6);
  if (!r)
    return null;
  if (r[0] === "Z")
    return {
      value: 0,
      rest: e.slice(1)
    };
  const n = r[1] === "+" ? 1 : -1, a = r[2] ? parseInt(r[2], 10) : 0, i = r[3] ? parseInt(r[3], 10) : 0, s = r[5] ? parseInt(r[5], 10) : 0;
  return {
    value: n * (a * Fn + i * Nr + s * ld),
    rest: e.slice(r[0].length)
  };
}
function Ab(t6) {
  return ze(qe.anyDigitsSigned, t6);
}
function Be(t6, e) {
  switch (t6) {
    case 1:
      return ze(qe.singleDigit, e);
    case 2:
      return ze(qe.twoDigits, e);
    case 3:
      return ze(qe.threeDigits, e);
    case 4:
      return ze(qe.fourDigits, e);
    default:
      return ze(new RegExp("^\\d{1," + t6 + "}"), e);
  }
}
function eo(t6, e) {
  switch (t6) {
    case 1:
      return ze(qe.singleDigitSigned, e);
    case 2:
      return ze(qe.twoDigitsSigned, e);
    case 3:
      return ze(qe.threeDigitsSigned, e);
    case 4:
      return ze(qe.fourDigitsSigned, e);
    default:
      return ze(new RegExp("^-?\\d{1," + t6 + "}"), e);
  }
}
function wd(t6) {
  switch (t6) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Fb(t6, e) {
  const r = e > 0, n = r ? e : 1 - e;
  let a;
  if (n <= 50)
    a = t6 || 100;
  else {
    const i = n + 50, s = Math.trunc(i / 100) * 100, o = t6 >= i % 100;
    a = t6 + s - (o ? 100 : 0);
  }
  return r ? a : 1 - a;
}
function Lb(t6) {
  return t6 % 400 === 0 || t6 % 4 === 0 && t6 % 100 !== 0;
}
class uT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 130);
    K(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(r, n, a) {
    const i = (s) => ({
      year: s,
      isTwoDigitYear: n === "yy"
    });
    switch (n) {
      case "y":
        return Ue(Be(4, r), i);
      case "yo":
        return Ue(
          a.ordinalNumber(r, {
            unit: "year"
          }),
          i
        );
      default:
        return Ue(Be(n.length, r), i);
    }
  }
  validate(r, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(r, n, a) {
    const i = r.getFullYear();
    if (a.isTwoDigitYear) {
      const o = Fb(
        a.year,
        i
      );
      return r.setFullYear(o, 0, 1), r.setHours(0, 0, 0, 0), r;
    }
    const s = !("era" in n) || n.era === 1 ? a.year : 1 - a.year;
    return r.setFullYear(s, 0, 1), r.setHours(0, 0, 0, 0), r;
  }
}
class fT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 130);
    K(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(r, n, a) {
    const i = (s) => ({
      year: s,
      isTwoDigitYear: n === "YY"
    });
    switch (n) {
      case "Y":
        return Ue(Be(4, r), i);
      case "Yo":
        return Ue(
          a.ordinalNumber(r, {
            unit: "year"
          }),
          i
        );
      default:
        return Ue(Be(n.length, r), i);
    }
  }
  validate(r, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(r, n, a, i) {
    const s = No(r, i);
    if (a.isTwoDigitYear) {
      const l = Fb(
        a.year,
        s
      );
      return r.setFullYear(
        l,
        0,
        i.firstWeekContainsDate
      ), r.setHours(0, 0, 0, 0), dt(r, i);
    }
    const o = !("era" in n) || n.era === 1 ? a.year : 1 - a.year;
    return r.setFullYear(o, 0, i.firstWeekContainsDate), r.setHours(0, 0, 0, 0), dt(r, i);
  }
}
class hT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 130);
    K(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, n) {
    return eo(n === "R" ? 4 : n.length, r);
  }
  set(r, n, a) {
    const i = se(r, 0);
    return i.setFullYear(a, 0, 4), i.setHours(0, 0, 0, 0), Jt(i);
  }
}
class gT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 130);
    K(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(r, n) {
    return eo(n === "u" ? 4 : n.length, r);
  }
  set(r, n, a) {
    return r.setFullYear(a, 0, 1), r.setHours(0, 0, 0, 0), r;
  }
}
class mT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 120);
    K(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, n, a) {
    switch (n) {
      case "Q":
      case "QQ":
        return Be(n.length, r);
      case "Qo":
        return a.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return a.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return a.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return a.quarter(r, {
          width: "wide",
          context: "formatting"
        }) || a.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(r, n) {
    return n >= 1 && n <= 4;
  }
  set(r, n, a) {
    return r.setMonth((a - 1) * 3, 1), r.setHours(0, 0, 0, 0), r;
  }
}
class pT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 120);
    K(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, n, a) {
    switch (n) {
      case "q":
      case "qq":
        return Be(n.length, r);
      case "qo":
        return a.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return a.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return a.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return a.quarter(r, {
          width: "wide",
          context: "standalone"
        }) || a.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(r, n) {
    return n >= 1 && n <= 4;
  }
  set(r, n, a) {
    return r.setMonth((a - 1) * 3, 1), r.setHours(0, 0, 0, 0), r;
  }
}
class bT extends xe {
  constructor() {
    super(...arguments);
    K(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    K(this, "priority", 110);
  }
  parse(r, n, a) {
    const i = (s) => s - 1;
    switch (n) {
      case "M":
        return Ue(
          ze(qe.month, r),
          i
        );
      case "MM":
        return Ue(Be(2, r), i);
      case "Mo":
        return Ue(
          a.ordinalNumber(r, {
            unit: "month"
          }),
          i
        );
      case "MMM":
        return a.month(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(r, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return a.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return a.month(r, { width: "wide", context: "formatting" }) || a.month(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(r, { width: "narrow", context: "formatting" });
    }
  }
  validate(r, n) {
    return n >= 0 && n <= 11;
  }
  set(r, n, a) {
    return r.setMonth(a, 1), r.setHours(0, 0, 0, 0), r;
  }
}
class yT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 110);
    K(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, n, a) {
    const i = (s) => s - 1;
    switch (n) {
      case "L":
        return Ue(
          ze(qe.month, r),
          i
        );
      case "LL":
        return Ue(Be(2, r), i);
      case "Lo":
        return Ue(
          a.ordinalNumber(r, {
            unit: "month"
          }),
          i
        );
      case "LLL":
        return a.month(r, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(r, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return a.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return a.month(r, { width: "wide", context: "standalone" }) || a.month(r, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(r, { width: "narrow", context: "standalone" });
    }
  }
  validate(r, n) {
    return n >= 0 && n <= 11;
  }
  set(r, n, a) {
    return r.setMonth(a, 1), r.setHours(0, 0, 0, 0), r;
  }
}
function Wb(t6, e, r) {
  const n = V(t6, r == null ? void 0 : r.in), a = xd(n, r) - e;
  return n.setDate(n.getDate() - a * 7), V(n, r == null ? void 0 : r.in);
}
class vT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 100);
    K(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(r, n, a) {
    switch (n) {
      case "w":
        return ze(qe.week, r);
      case "wo":
        return a.ordinalNumber(r, { unit: "week" });
      default:
        return Be(n.length, r);
    }
  }
  validate(r, n) {
    return n >= 1 && n <= 53;
  }
  set(r, n, a, i) {
    return dt(Wb(r, a, i), i);
  }
}
function $b(t6, e, r) {
  const n = V(t6, r == null ? void 0 : r.in), a = vd(n, r) - e;
  return n.setDate(n.getDate() - a * 7), n;
}
class xT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 100);
    K(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, n, a) {
    switch (n) {
      case "I":
        return ze(qe.week, r);
      case "Io":
        return a.ordinalNumber(r, { unit: "week" });
      default:
        return Be(n.length, r);
    }
  }
  validate(r, n) {
    return n >= 1 && n <= 53;
  }
  set(r, n, a) {
    return Jt($b(r, a));
  }
}
const wT = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], kT = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class _T extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 90);
    K(this, "subPriority", 1);
    K(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, n, a) {
    switch (n) {
      case "d":
        return ze(qe.date, r);
      case "do":
        return a.ordinalNumber(r, { unit: "date" });
      default:
        return Be(n.length, r);
    }
  }
  validate(r, n) {
    const a = r.getFullYear(), i = Lb(a), s = r.getMonth();
    return i ? n >= 1 && n <= kT[s] : n >= 1 && n <= wT[s];
  }
  set(r, n, a) {
    return r.setDate(a), r.setHours(0, 0, 0, 0), r;
  }
}
class OT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 90);
    K(this, "subpriority", 1);
    K(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, n, a) {
    switch (n) {
      case "D":
      case "DD":
        return ze(qe.dayOfYear, r);
      case "Do":
        return a.ordinalNumber(r, { unit: "date" });
      default:
        return Be(n.length, r);
    }
  }
  validate(r, n) {
    const a = r.getFullYear();
    return Lb(a) ? n >= 1 && n <= 366 : n >= 1 && n <= 365;
  }
  set(r, n, a) {
    return r.setMonth(0, a), r.setHours(0, 0, 0, 0), r;
  }
}
function Ao(t6, e, r) {
  var u, f, h, g;
  const n = vt(), a = (r == null ? void 0 : r.weekStartsOn) ?? ((f = (u = r == null ? void 0 : r.locale) == null ? void 0 : u.options) == null ? void 0 : f.weekStartsOn) ?? n.weekStartsOn ?? ((g = (h = n.locale) == null ? void 0 : h.options) == null ? void 0 : g.weekStartsOn) ?? 0, i = V(t6, r == null ? void 0 : r.in), s = i.getDay(), l = (e % 7 + 7) % 7, c = 7 - a, d = e < 0 || e > 6 ? e - (s + c) % 7 : (l + c) % 7 - (s + c) % 7;
  return Wt(i, d, r);
}
class ST extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 90);
    K(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return a.day(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(r, { width: "short", context: "formatting" }) || a.day(r, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return a.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return a.day(r, { width: "short", context: "formatting" }) || a.day(r, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return a.day(r, { width: "wide", context: "formatting" }) || a.day(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(r, { width: "short", context: "formatting" }) || a.day(r, { width: "narrow", context: "formatting" });
    }
  }
  validate(r, n) {
    return n >= 0 && n <= 6;
  }
  set(r, n, a, i) {
    return r = Ao(r, a, i), r.setHours(0, 0, 0, 0), r;
  }
}
class DT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 90);
    K(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, n, a, i) {
    const s = (o) => {
      const l = Math.floor((o - 1) / 7) * 7;
      return (o + i.weekStartsOn + 6) % 7 + l;
    };
    switch (n) {
      case "e":
      case "ee":
        return Ue(Be(n.length, r), s);
      case "eo":
        return Ue(
          a.ordinalNumber(r, {
            unit: "day"
          }),
          s
        );
      case "eee":
        return a.day(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(r, { width: "short", context: "formatting" }) || a.day(r, { width: "narrow", context: "formatting" });
      case "eeeee":
        return a.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return a.day(r, { width: "short", context: "formatting" }) || a.day(r, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return a.day(r, { width: "wide", context: "formatting" }) || a.day(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(r, { width: "short", context: "formatting" }) || a.day(r, { width: "narrow", context: "formatting" });
    }
  }
  validate(r, n) {
    return n >= 0 && n <= 6;
  }
  set(r, n, a, i) {
    return r = Ao(r, a, i), r.setHours(0, 0, 0, 0), r;
  }
}
class MT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 90);
    K(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(r, n, a, i) {
    const s = (o) => {
      const l = Math.floor((o - 1) / 7) * 7;
      return (o + i.weekStartsOn + 6) % 7 + l;
    };
    switch (n) {
      case "c":
      case "cc":
        return Ue(Be(n.length, r), s);
      case "co":
        return Ue(
          a.ordinalNumber(r, {
            unit: "day"
          }),
          s
        );
      case "ccc":
        return a.day(r, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(r, { width: "short", context: "standalone" }) || a.day(r, { width: "narrow", context: "standalone" });
      case "ccccc":
        return a.day(r, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return a.day(r, { width: "short", context: "standalone" }) || a.day(r, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return a.day(r, { width: "wide", context: "standalone" }) || a.day(r, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(r, { width: "short", context: "standalone" }) || a.day(r, { width: "narrow", context: "standalone" });
    }
  }
  validate(r, n) {
    return n >= 0 && n <= 6;
  }
  set(r, n, a, i) {
    return r = Ao(r, a, i), r.setHours(0, 0, 0, 0), r;
  }
}
function zb(t6, e, r) {
  const n = V(t6, r == null ? void 0 : r.in), a = Pb(n, r), i = e - a;
  return Wt(n, i, r);
}
class CT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 90);
    K(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, n, a) {
    const i = (s) => s === 0 ? 7 : s;
    switch (n) {
      case "i":
      case "ii":
        return Be(n.length, r);
      case "io":
        return a.ordinalNumber(r, { unit: "day" });
      case "iii":
        return Ue(
          a.day(r, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(r, {
            width: "short",
            context: "formatting"
          }) || a.day(r, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
      case "iiiii":
        return Ue(
          a.day(r, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
      case "iiiiii":
        return Ue(
          a.day(r, {
            width: "short",
            context: "formatting"
          }) || a.day(r, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
      case "iiii":
      default:
        return Ue(
          a.day(r, {
            width: "wide",
            context: "formatting"
          }) || a.day(r, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(r, {
            width: "short",
            context: "formatting"
          }) || a.day(r, {
            width: "narrow",
            context: "formatting"
          }),
          i
        );
    }
  }
  validate(r, n) {
    return n >= 1 && n <= 7;
  }
  set(r, n, a) {
    return r = zb(r, a), r.setHours(0, 0, 0, 0), r;
  }
}
class ET extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 80);
    K(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "a":
      case "aa":
      case "aaa":
        return a.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(r, n, a) {
    return r.setHours(wd(a), 0, 0, 0), r;
  }
}
class TT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 80);
    K(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "b":
      case "bb":
      case "bbb":
        return a.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(r, n, a) {
    return r.setHours(wd(a), 0, 0, 0), r;
  }
}
class PT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 80);
    K(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(r, n, a) {
    return r.setHours(wd(a), 0, 0, 0), r;
  }
}
class RT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 70);
    K(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "h":
        return ze(qe.hour12h, r);
      case "ho":
        return a.ordinalNumber(r, { unit: "hour" });
      default:
        return Be(n.length, r);
    }
  }
  validate(r, n) {
    return n >= 1 && n <= 12;
  }
  set(r, n, a) {
    const i = r.getHours() >= 12;
    return i && a < 12 ? r.setHours(a + 12, 0, 0, 0) : !i && a === 12 ? r.setHours(0, 0, 0, 0) : r.setHours(a, 0, 0, 0), r;
  }
}
class NT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 70);
    K(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "H":
        return ze(qe.hour23h, r);
      case "Ho":
        return a.ordinalNumber(r, { unit: "hour" });
      default:
        return Be(n.length, r);
    }
  }
  validate(r, n) {
    return n >= 0 && n <= 23;
  }
  set(r, n, a) {
    return r.setHours(a, 0, 0, 0), r;
  }
}
class IT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 70);
    K(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "K":
        return ze(qe.hour11h, r);
      case "Ko":
        return a.ordinalNumber(r, { unit: "hour" });
      default:
        return Be(n.length, r);
    }
  }
  validate(r, n) {
    return n >= 0 && n <= 11;
  }
  set(r, n, a) {
    return r.getHours() >= 12 && a < 12 ? r.setHours(a + 12, 0, 0, 0) : r.setHours(a, 0, 0, 0), r;
  }
}
class AT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 70);
    K(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "k":
        return ze(qe.hour24h, r);
      case "ko":
        return a.ordinalNumber(r, { unit: "hour" });
      default:
        return Be(n.length, r);
    }
  }
  validate(r, n) {
    return n >= 1 && n <= 24;
  }
  set(r, n, a) {
    const i = a <= 24 ? a % 24 : a;
    return r.setHours(i, 0, 0, 0), r;
  }
}
class FT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 60);
    K(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "m":
        return ze(qe.minute, r);
      case "mo":
        return a.ordinalNumber(r, { unit: "minute" });
      default:
        return Be(n.length, r);
    }
  }
  validate(r, n) {
    return n >= 0 && n <= 59;
  }
  set(r, n, a) {
    return r.setMinutes(a, 0, 0), r;
  }
}
class LT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 50);
    K(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(r, n, a) {
    switch (n) {
      case "s":
        return ze(qe.second, r);
      case "so":
        return a.ordinalNumber(r, { unit: "second" });
      default:
        return Be(n.length, r);
    }
  }
  validate(r, n) {
    return n >= 0 && n <= 59;
  }
  set(r, n, a) {
    return r.setSeconds(a, 0), r;
  }
}
class WT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 30);
    K(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(r, n) {
    const a = (i) => Math.trunc(i * Math.pow(10, -n.length + 3));
    return Ue(Be(n.length, r), a);
  }
  set(r, n, a) {
    return r.setMilliseconds(a), r;
  }
}
class $T extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 10);
    K(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(r, n) {
    switch (n) {
      case "X":
        return dr(
          cr.basicOptionalMinutes,
          r
        );
      case "XX":
        return dr(cr.basic, r);
      case "XXXX":
        return dr(
          cr.basicOptionalSeconds,
          r
        );
      case "XXXXX":
        return dr(
          cr.extendedOptionalSeconds,
          r
        );
      case "XXX":
      default:
        return dr(cr.extended, r);
    }
  }
  set(r, n, a) {
    return n.timestampIsSet ? r : se(
      r,
      r.getTime() - Ct(r) - a
    );
  }
}
class zT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 10);
    K(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(r, n) {
    switch (n) {
      case "x":
        return dr(
          cr.basicOptionalMinutes,
          r
        );
      case "xx":
        return dr(cr.basic, r);
      case "xxxx":
        return dr(
          cr.basicOptionalSeconds,
          r
        );
      case "xxxxx":
        return dr(
          cr.extendedOptionalSeconds,
          r
        );
      case "xxx":
      default:
        return dr(cr.extended, r);
    }
  }
  set(r, n, a) {
    return n.timestampIsSet ? r : se(
      r,
      r.getTime() - Ct(r) - a
    );
  }
}
class jT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 40);
    K(this, "incompatibleTokens", "*");
  }
  parse(r) {
    return Ab(r);
  }
  set(r, n, a) {
    return [se(r, a * 1e3), { timestampIsSet: true }];
  }
}
class HT extends xe {
  constructor() {
    super(...arguments);
    K(this, "priority", 20);
    K(this, "incompatibleTokens", "*");
  }
  parse(r) {
    return Ab(r);
  }
  set(r, n, a) {
    return [se(r, a), { timestampIsSet: true }];
  }
}
const jb = {
  G: new dT(),
  y: new uT(),
  Y: new fT(),
  R: new hT(),
  u: new gT(),
  Q: new mT(),
  q: new pT(),
  M: new bT(),
  L: new yT(),
  w: new vT(),
  I: new xT(),
  d: new _T(),
  D: new OT(),
  E: new ST(),
  e: new DT(),
  c: new MT(),
  i: new CT(),
  a: new ET(),
  b: new TT(),
  B: new PT(),
  h: new RT(),
  H: new NT(),
  K: new IT(),
  k: new AT(),
  m: new FT(),
  s: new LT(),
  S: new WT(),
  X: new $T(),
  x: new zT(),
  t: new jT(),
  T: new HT()
}, BT = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, YT = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, VT = /^'([^]*?)'?$/, qT = /''/g, UT = /\S/, XT = /[a-zA-Z]/;
function Hb(t6, e, r, n) {
  var p, w, b, k, v, x, _, T;
  const a = () => se((n == null ? void 0 : n.in) || r, NaN), i = Tb(), s = (n == null ? void 0 : n.locale) ?? i.locale ?? va, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((w = (p = n == null ? void 0 : n.locale) == null ? void 0 : p.options) == null ? void 0 : w.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((k = (b = i.locale) == null ? void 0 : b.options) == null ? void 0 : k.firstWeekContainsDate) ?? 1, l = (n == null ? void 0 : n.weekStartsOn) ?? ((x = (v = n == null ? void 0 : n.locale) == null ? void 0 : v.options) == null ? void 0 : x.weekStartsOn) ?? i.weekStartsOn ?? ((T = (_ = i.locale) == null ? void 0 : _.options) == null ? void 0 : T.weekStartsOn) ?? 0;
  if (!e)
    return t6 ? a() : V(r, n == null ? void 0 : n.in);
  const c = {
    firstWeekContainsDate: o,
    weekStartsOn: l,
    locale: s
  }, d = [new cT(n == null ? void 0 : n.in, r)], u = e.match(YT).map((S) => {
    const C = S[0];
    if (C in Js) {
      const D = Js[C];
      return D(S, s.formatLong);
    }
    return S;
  }).join("").match(BT), f = [];
  for (let S of u) {
    !(n != null && n.useAdditionalWeekYearTokens) && Ob(S) && Ql(S, e, t6), !(n != null && n.useAdditionalDayOfYearTokens) && _b(S) && Ql(S, e, t6);
    const C = S[0], D = jb[C];
    if (D) {
      const { incompatibleTokens: z } = D;
      if (Array.isArray(z)) {
        const L = f.find(
          (M) => z.includes(M.token) || M.token === C
        );
        if (L)
          throw new RangeError(
            `The format string mustn't contain \`${L.fullToken}\` and \`${S}\` at the same time`
          );
      } else if (D.incompatibleTokens === "*" && f.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${S}\` and any other token at the same time`
        );
      f.push({ token: C, fullToken: S });
      const A = D.run(
        t6,
        S,
        s.match,
        c
      );
      if (!A)
        return a();
      d.push(A.setter), t6 = A.rest;
    } else {
      if (C.match(XT))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + C + "`"
        );
      if (S === "''" ? S = "'" : C === "'" && (S = GT(S)), t6.indexOf(S) === 0)
        t6 = t6.slice(S.length);
      else
        return a();
    }
  }
  if (t6.length > 0 && UT.test(t6))
    return a();
  const h = d.map((S) => S.priority).sort((S, C) => C - S).filter((S, C, D) => D.indexOf(S) === C).map(
    (S) => d.filter((C) => C.priority === S).sort((C, D) => D.subPriority - C.subPriority)
  ).map((S) => S[0]);
  let g = V(r, n == null ? void 0 : n.in);
  if (isNaN(+g)) return a();
  const m = {};
  for (const S of h) {
    if (!S.validate(g, c))
      return a();
    const C = S.set(g, m, c);
    Array.isArray(C) ? (g = C[0], Object.assign(m, C[1])) : g = C;
  }
  return g;
}
function GT(t6) {
  return t6.match(VT)[1].replace(qT, "'");
}
function KT(t6, e, r) {
  return Ir(Hb(t6, e, /* @__PURE__ */ new Date(), r));
}
function QT(t6, e) {
  return V(t6, e == null ? void 0 : e.in).getDay() === 1;
}
function JT(t6) {
  return +V(t6) < Date.now();
}
function Jl(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in);
  return r.setMinutes(0, 0, 0), r;
}
function Bb(t6, e, r) {
  const [n, a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  );
  return +Jl(n) == +Jl(a);
}
function kd(t6, e, r) {
  const [n, a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  );
  return +dt(n, r) == +dt(a, r);
}
function Yb(t6, e, r) {
  return kd(t6, e, { ...r, weekStartsOn: 1 });
}
function ZT(t6, e, r) {
  const [n, a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  );
  return +Qr(n) == +Qr(a);
}
function Zl(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in);
  return r.setSeconds(0, 0), r;
}
function Vb(t6, e) {
  return +Zl(t6) == +Zl(e);
}
function qb(t6, e, r) {
  const [n, a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  );
  return n.getFullYear() === a.getFullYear() && n.getMonth() === a.getMonth();
}
function Ub(t6, e, r) {
  const [n, a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  );
  return +kn(n) == +kn(a);
}
function ec(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in);
  return r.setMilliseconds(0), r;
}
function Xb(t6, e) {
  return +ec(t6) == +ec(e);
}
function Gb(t6, e, r) {
  const [n, a] = Ee(
    r == null ? void 0 : r.in,
    t6,
    e
  );
  return n.getFullYear() === a.getFullYear();
}
function eP(t6, e) {
  return Bb(
    V(t6, e == null ? void 0 : e.in),
    Je((e == null ? void 0 : e.in) || t6)
  );
}
function tP(t6, e) {
  return Yb(
    se((e == null ? void 0 : e.in) || t6, t6),
    Je((e == null ? void 0 : e.in) || t6)
  );
}
function rP(t6) {
  return Vb(t6, Je(t6));
}
function nP(t6, e) {
  return qb(
    se((e == null ? void 0 : e.in) || t6, t6),
    Je((e == null ? void 0 : e.in) || t6)
  );
}
function aP(t6, e) {
  return Ub(
    se((e == null ? void 0 : e.in) || t6, t6),
    Je((e == null ? void 0 : e.in) || t6)
  );
}
function iP(t6) {
  return Xb(t6, Je(t6));
}
function sP(t6, e) {
  return kd(
    se((e == null ? void 0 : e.in) || t6, t6),
    Je((e == null ? void 0 : e.in) || t6),
    e
  );
}
function oP(t6, e) {
  return Gb(
    se((e == null ? void 0 : e.in) || t6, t6),
    Je((e == null ? void 0 : e.in) || t6)
  );
}
function lP(t6, e) {
  return V(t6, e == null ? void 0 : e.in).getDay() === 4;
}
function cP(t6, e) {
  return Ci(
    se((e == null ? void 0 : e.in) || t6, t6),
    Je((e == null ? void 0 : e.in) || t6)
  );
}
function dP(t6, e) {
  return Ci(
    t6,
    Wt(Je((e == null ? void 0 : e.in) || t6), 1),
    e
  );
}
function uP(t6, e) {
  return V(t6, e == null ? void 0 : e.in).getDay() === 2;
}
function fP(t6, e) {
  return V(t6, e == null ? void 0 : e.in).getDay() === 3;
}
function hP(t6, e, r) {
  const n = +V(t6, r == null ? void 0 : r.in), [a, i] = [
    +V(e.start, r == null ? void 0 : r.in),
    +V(e.end, r == null ? void 0 : r.in)
  ].sort((s, o) => s - o);
  return n >= a && n <= i;
}
function Fo(t6, e, r) {
  return Wt(t6, -e, r);
}
function gP(t6, e) {
  return Ci(
    se((e == null ? void 0 : e.in) || t6, t6),
    Fo(Je((e == null ? void 0 : e.in) || t6), 1)
  );
}
function mP(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in), n = r.getFullYear(), a = 9 + Math.floor(n / 10) * 10;
  return r.setFullYear(a + 1, 0, 0), r.setHours(0, 0, 0, 0), V(r, e == null ? void 0 : e.in);
}
function Kb(t6, e) {
  var o, l, c, d;
  const r = vt(), n = (e == null ? void 0 : e.weekStartsOn) ?? ((l = (o = e == null ? void 0 : e.locale) == null ? void 0 : o.options) == null ? void 0 : l.weekStartsOn) ?? r.weekStartsOn ?? ((d = (c = r.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0, a = V(t6, e == null ? void 0 : e.in), i = a.getDay(), s = (i < n ? -7 : 0) + 6 - (i - n);
  return a.setHours(0, 0, 0, 0), a.setDate(a.getDate() + s), a;
}
function pP(t6, e) {
  return Kb(t6, { ...e, weekStartsOn: 1 });
}
function bP(t6, e) {
  const r = Kr(t6, e), n = se((e == null ? void 0 : e.in) || t6, 0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const a = Jt(n, e);
  return a.setDate(a.getDate() - 1), a;
}
function yP(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in), n = r.getMonth(), a = n - n % 3 + 3;
  return r.setMonth(a, 0), r.setHours(0, 0, 0, 0), r;
}
function vP(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in), n = r.getFullYear();
  return r.setFullYear(n + 1, 0, 0), r.setHours(0, 0, 0, 0), r;
}
const xP = /(\w)\1*|''|'(''|[^'])+('|$)|./g, wP = /^'([^]*?)'?$/, kP = /''/g, _P = /[a-zA-Z]/;
function OP(t6, e) {
  const r = V(t6);
  if (!Ir(r))
    throw new RangeError("Invalid time value");
  const n = e.match(xP);
  return n ? n.map((i) => {
    if (i === "''")
      return "'";
    const s = i[0];
    if (s === "'")
      return SP(i);
    const o = ir[s];
    if (o)
      return o(r, i);
    if (s.match(_P))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + s + "`"
      );
    return i;
  }).join("") : "";
}
function SP(t6) {
  const e = t6.match(wP);
  return e ? e[1].replace(kP, "'") : t6;
}
function DP({
  years: t6,
  months: e,
  weeks: r,
  days: n,
  hours: a,
  minutes: i,
  seconds: s
}) {
  let o = 0;
  t6 && (o += t6 * Vs), e && (o += e * (Vs / 12)), r && (o += r * 7), n && (o += n);
  let l = o * 24 * 60 * 60;
  return a && (l += a * 60 * 60), i && (l += i * 60), s && (l += s), Math.trunc(l * 1e3);
}
function MP(t6) {
  const e = t6 / Fn;
  return Math.trunc(e);
}
function CP(t6) {
  const e = t6 / Nr;
  return Math.trunc(e);
}
function EP(t6) {
  const e = t6 / ld;
  return Math.trunc(e);
}
function TP(t6) {
  const e = t6 / Gp;
  return Math.trunc(e);
}
function PP(t6) {
  return Math.trunc(t6 * Nr);
}
function RP(t6) {
  return Math.trunc(t6 * cd);
}
function NP(t6) {
  const e = t6 / Kp;
  return Math.trunc(e);
}
function IP(t6) {
  const e = t6 / Qp;
  return Math.trunc(e);
}
function rn(t6, e, r) {
  let n = e - Io(t6, r);
  return n <= 0 && (n += 7), Wt(t6, n, r);
}
function AP(t6, e) {
  return rn(t6, 5, e);
}
function FP(t6, e) {
  return rn(t6, 1, e);
}
function LP(t6, e) {
  return rn(t6, 6, e);
}
function WP(t6, e) {
  return rn(t6, 0, e);
}
function $P(t6, e) {
  return rn(t6, 4, e);
}
function zP(t6, e) {
  return rn(t6, 2, e);
}
function jP(t6, e) {
  return rn(t6, 3, e);
}
function HP(t6, e) {
  const r = () => se(e == null ? void 0 : e.in, NaN), n = (e == null ? void 0 : e.additionalDigits) ?? 2, a = qP(t6);
  let i;
  if (a.date) {
    const c = UP(a.date, n);
    i = XP(c.restDateString, c.year);
  }
  if (!i || isNaN(+i)) return r();
  const s = +i;
  let o = 0, l;
  if (a.time && (o = GP(a.time), isNaN(o)))
    return r();
  if (a.timezone) {
    if (l = KP(a.timezone), isNaN(l)) return r();
  } else {
    const c = new Date(s + o), d = V(0, e == null ? void 0 : e.in);
    return d.setFullYear(
      c.getUTCFullYear(),
      c.getUTCMonth(),
      c.getUTCDate()
    ), d.setHours(
      c.getUTCHours(),
      c.getUTCMinutes(),
      c.getUTCSeconds(),
      c.getUTCMilliseconds()
    ), d;
  }
  return V(s + o + l, e == null ? void 0 : e.in);
}
const Zi = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, BP = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, YP = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, VP = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function qP(t6) {
  const e = {}, r = t6.split(Zi.dateTimeDelimiter);
  let n;
  if (r.length > 2)
    return e;
  if (/:/.test(r[0]) ? n = r[0] : (e.date = r[0], n = r[1], Zi.timeZoneDelimiter.test(e.date) && (e.date = t6.split(Zi.timeZoneDelimiter)[0], n = t6.substr(
    e.date.length,
    t6.length
  ))), n) {
    const a = Zi.timezone.exec(n);
    a ? (e.time = n.replace(a[1], ""), e.timezone = a[1]) : e.time = n;
  }
  return e;
}
function UP(t6, e) {
  const r = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + e) + "})|(\\d{2}|[+-]\\d{" + (2 + e) + "})$)"
  ), n = t6.match(r);
  if (!n) return { year: NaN, restDateString: "" };
  const a = n[1] ? parseInt(n[1]) : null, i = n[2] ? parseInt(n[2]) : null;
  return {
    year: i === null ? a : i * 100,
    restDateString: t6.slice((n[1] || n[2]).length)
  };
}
function XP(t6, e) {
  if (e === null) return /* @__PURE__ */ new Date(NaN);
  const r = t6.match(BP);
  if (!r) return /* @__PURE__ */ new Date(NaN);
  const n = !!r[4], a = Ra(r[1]), i = Ra(r[2]) - 1, s = Ra(r[3]), o = Ra(r[4]), l = Ra(r[5]) - 1;
  if (n)
    return t5(e, o, l) ? QP(e, o, l) : /* @__PURE__ */ new Date(NaN);
  {
    const c = /* @__PURE__ */ new Date(0);
    return !ZP(e, i, s) || !e5(e, a) ? /* @__PURE__ */ new Date(NaN) : (c.setUTCFullYear(e, i, Math.max(a, s)), c);
  }
}
function Ra(t6) {
  return t6 ? parseInt(t6) : 1;
}
function GP(t6) {
  const e = t6.match(YP);
  if (!e) return NaN;
  const r = xl(e[1]), n = xl(e[2]), a = xl(e[3]);
  return r5(r, n, a) ? r * Fn + n * Nr + a * 1e3 : NaN;
}
function xl(t6) {
  return t6 && parseFloat(t6.replace(",", ".")) || 0;
}
function KP(t6) {
  if (t6 === "Z") return 0;
  const e = t6.match(VP);
  if (!e) return 0;
  const r = e[1] === "+" ? -1 : 1, n = parseInt(e[2]), a = e[3] && parseInt(e[3]) || 0;
  return n5(n, a) ? r * (n * Fn + a * Nr) : NaN;
}
function QP(t6, e, r) {
  const n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(t6, 0, 4);
  const a = n.getUTCDay() || 7, i = (e - 1) * 7 + r + 1 - a;
  return n.setUTCDate(n.getUTCDate() + i), n;
}
const JP = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Qb(t6) {
  return t6 % 400 === 0 || t6 % 4 === 0 && t6 % 100 !== 0;
}
function ZP(t6, e, r) {
  return e >= 0 && e <= 11 && r >= 1 && r <= (JP[e] || (Qb(t6) ? 29 : 28));
}
function e5(t6, e) {
  return e >= 1 && e <= (Qb(t6) ? 366 : 365);
}
function t5(t6, e, r) {
  return e >= 1 && e <= 53 && r >= 0 && r <= 6;
}
function r5(t6, e, r) {
  return t6 === 24 ? e === 0 && r === 0 : r >= 0 && r < 60 && e >= 0 && e < 60 && t6 >= 0 && t6 < 25;
}
function n5(t6, e) {
  return e >= 0 && e <= 59;
}
function a5(t6, e) {
  const r = t6.match(
    /(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/
  );
  return V(
    r ? Date.UTC(
      +r[1],
      +r[2] - 1,
      +r[3],
      +r[4] - (+r[9] || 0) * (r[8] == "-" ? -1 : 1),
      +r[5] - (+r[10] || 0) * (r[8] == "-" ? -1 : 1),
      +r[6],
      +((r[7] || "0") + "00").substring(0, 3)
    ) : NaN,
    e == null ? void 0 : e.in
  );
}
function nn(t6, e, r) {
  let n = Io(t6, r) - e;
  return n <= 0 && (n += 7), Fo(t6, n, r);
}
function i5(t6, e) {
  return nn(t6, 5, e);
}
function s5(t6, e) {
  return nn(t6, 1, e);
}
function o5(t6, e) {
  return nn(t6, 6, e);
}
function l5(t6, e) {
  return nn(t6, 0, e);
}
function c5(t6, e) {
  return nn(t6, 4, e);
}
function d5(t6, e) {
  return nn(t6, 2, e);
}
function u5(t6, e) {
  return nn(t6, 3, e);
}
function f5(t6) {
  return Math.trunc(t6 * Kp);
}
function h5(t6) {
  const e = t6 / Jp;
  return Math.trunc(e);
}
function g5(t6, e) {
  const r = (e == null ? void 0 : e.nearestTo) ?? 1;
  if (r < 1 || r > 12)
    return se((e == null ? void 0 : e.in) || t6, NaN);
  const n = V(t6, e == null ? void 0 : e.in), a = n.getMinutes() / 60, i = n.getSeconds() / 60 / 60, s = n.getMilliseconds() / 1e3 / 60 / 60, o = n.getHours() + a + i + s, l = (e == null ? void 0 : e.roundingMethod) ?? "round", d = tn(l)(o / r) * r;
  return n.setHours(d, 0, 0, 0), n;
}
function m5(t6, e) {
  const r = (e == null ? void 0 : e.nearestTo) ?? 1;
  if (r < 1 || r > 30) return se(t6, NaN);
  const n = V(t6, e == null ? void 0 : e.in), a = n.getSeconds() / 60, i = n.getMilliseconds() / 1e3 / 60, s = n.getMinutes() + a + i, o = (e == null ? void 0 : e.roundingMethod) ?? "round", c = tn(o)(s / r) * r;
  return n.setMinutes(c, 0, 0), n;
}
function p5(t6) {
  const e = t6 / Co;
  return Math.trunc(e);
}
function b5(t6) {
  return t6 * ld;
}
function y5(t6) {
  const e = t6 / cd;
  return Math.trunc(e);
}
function _d(t6, e, r) {
  const n = V(t6, r == null ? void 0 : r.in), a = n.getFullYear(), i = n.getDate(), s = se((r == null ? void 0 : r.in) || t6, 0);
  s.setFullYear(a, e, 15), s.setHours(0, 0, 0, 0);
  const o = Cb(s);
  return n.setMonth(e, Math.min(i, o)), n;
}
function v5(t6, e, r) {
  let n = V(t6, r == null ? void 0 : r.in);
  return isNaN(+n) ? se((r == null ? void 0 : r.in) || t6, NaN) : (e.year != null && n.setFullYear(e.year), e.month != null && (n = _d(n, e.month)), e.date != null && n.setDate(e.date), e.hours != null && n.setHours(e.hours), e.minutes != null && n.setMinutes(e.minutes), e.seconds != null && n.setSeconds(e.seconds), e.milliseconds != null && n.setMilliseconds(e.milliseconds), n);
}
function x5(t6, e, r) {
  const n = V(t6, r == null ? void 0 : r.in);
  return n.setDate(e), n;
}
function w5(t6, e, r) {
  const n = V(t6, r == null ? void 0 : r.in);
  return n.setMonth(0), n.setDate(e), n;
}
function k5(t6) {
  const e = {}, r = vt();
  for (const n in r)
    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  for (const n in t6)
    Object.prototype.hasOwnProperty.call(t6, n) && (t6[n] === void 0 ? delete e[n] : e[n] = t6[n]);
  eC(e);
}
function _5(t6, e, r) {
  const n = V(t6, r == null ? void 0 : r.in);
  return n.setHours(e), n;
}
function O5(t6, e, r) {
  const n = V(t6, r == null ? void 0 : r.in);
  return n.setMilliseconds(e), n;
}
function S5(t6, e, r) {
  const n = V(t6, r == null ? void 0 : r.in);
  return n.setMinutes(e), n;
}
function D5(t6, e, r) {
  const n = V(t6, r == null ? void 0 : r.in), a = Math.trunc(n.getMonth() / 3) + 1, i = e - a;
  return _d(n, n.getMonth() + i * 3);
}
function M5(t6, e, r) {
  const n = V(t6, r == null ? void 0 : r.in);
  return n.setSeconds(e), n;
}
function C5(t6, e, r) {
  var l, c, d, u;
  const n = vt(), a = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((c = (l = r == null ? void 0 : r.locale) == null ? void 0 : l.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, i = pr(
    V(t6, r == null ? void 0 : r.in),
    Qs(t6, r),
    r
  ), s = se((r == null ? void 0 : r.in) || t6, 0);
  s.setFullYear(e, 0, a), s.setHours(0, 0, 0, 0);
  const o = Qs(s, r);
  return o.setDate(o.getDate() + i), o;
}
function E5(t6, e, r) {
  const n = V(t6, r == null ? void 0 : r.in);
  return isNaN(+n) ? se((r == null ? void 0 : r.in) || t6, NaN) : (n.setFullYear(e), n);
}
function T5(t6, e) {
  const r = V(t6, e == null ? void 0 : e.in), n = r.getFullYear(), a = Math.floor(n / 10) * 10;
  return r.setFullYear(a, 0, 1), r.setHours(0, 0, 0, 0), r;
}
function P5(t6) {
  return ua(Date.now(), t6);
}
function R5(t6) {
  const e = Je(t6 == null ? void 0 : t6.in), r = e.getFullYear(), n = e.getMonth(), a = e.getDate(), i = se(t6 == null ? void 0 : t6.in, 0);
  return i.setFullYear(r, n, a + 1), i.setHours(0, 0, 0, 0), i;
}
function N5(t6) {
  const e = Je(t6 == null ? void 0 : t6.in), r = e.getFullYear(), n = e.getMonth(), a = e.getDate(), i = Je(t6 == null ? void 0 : t6.in);
  return i.setFullYear(r, n, a - 1), i.setHours(0, 0, 0, 0), i;
}
function Jb(t6, e, r) {
  return Mi(t6, -e, r);
}
function I5(t6, e, r) {
  const {
    years: n = 0,
    months: a = 0,
    weeks: i = 0,
    days: s = 0,
    hours: o = 0,
    minutes: l = 0,
    seconds: c = 0
  } = e, d = Jb(t6, a + n * 12, r), u = Fo(d, s + i * 7, r), f = l + o * 60, g = (c + f * 60) * 1e3;
  return se((r == null ? void 0 : r.in) || t6, +u - g);
}
function A5(t6, e, r) {
  return nb(t6, -e, r);
}
function F5(t6, e, r) {
  return ab(t6, -e, r);
}
function L5(t6, e, r) {
  return Eo(t6, -e, r);
}
function W5(t6, e, r) {
  return ud(t6, -e, r);
}
function $5(t6, e, r) {
  return fd(t6, -e, r);
}
function z5(t6, e, r) {
  return lb(t6, -e, r);
}
function j5(t6, e, r) {
  return To(t6, -e, r);
}
function H5(t6, e, r) {
  return cb(t6, -e, r);
}
function B5(t6) {
  return Math.trunc(t6 * Up);
}
function Y5(t6) {
  return Math.trunc(t6 * Vs);
}
function V5(t6) {
  return Math.trunc(t6 * Qp);
}
function q5(t6) {
  return Math.trunc(t6 * Jp);
}
const U5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: Vn,
  addBusinessDays: nb,
  addDays: Wt,
  addHours: ab,
  addISOWeekYears: ob,
  addMilliseconds: Eo,
  addMinutes: ud,
  addMonths: Mi,
  addQuarters: fd,
  addSeconds: lb,
  addWeeks: To,
  addYears: cb,
  areIntervalsOverlapping: tC,
  clamp: rC,
  closestIndexTo: fb,
  closestTo: nC,
  compareAsc: br,
  compareDesc: aC,
  constructFrom: se,
  constructNow: Je,
  daysToWeeks: iC,
  differenceInBusinessDays: sC,
  differenceInCalendarDays: pr,
  differenceInCalendarISOWeekYears: gb,
  differenceInCalendarISOWeeks: oC,
  differenceInCalendarMonths: Us,
  differenceInCalendarQuarters: gs,
  differenceInCalendarWeeks: Xs,
  differenceInCalendarYears: Za,
  differenceInDays: hd,
  differenceInHours: Gs,
  differenceInISOWeekYears: lC,
  differenceInMilliseconds: gd,
  differenceInMinutes: Ks,
  differenceInMonths: Po,
  differenceInQuarters: cC,
  differenceInSeconds: ta,
  differenceInWeeks: dC,
  differenceInYears: bb,
  eachDayOfInterval: yb,
  eachHourOfInterval: uC,
  eachMinuteOfInterval: fC,
  eachMonthOfInterval: hC,
  eachQuarterOfInterval: gC,
  eachWeekOfInterval: mC,
  eachWeekendOfInterval: bd,
  eachWeekendOfMonth: pC,
  eachWeekendOfYear: bC,
  eachYearOfInterval: yC,
  endOfDay: md,
  endOfDecade: vC,
  endOfHour: xC,
  endOfISOWeek: wC,
  endOfISOWeekYear: kC,
  endOfMinute: _C,
  endOfMonth: pd,
  endOfQuarter: OC,
  endOfSecond: SC,
  endOfToday: DC,
  endOfTomorrow: MC,
  endOfWeek: xb,
  endOfYear: vb,
  endOfYesterday: CC,
  format: Zs,
  formatDate: Zs,
  formatDistance: Sb,
  formatDistanceStrict: Db,
  formatDistanceToNow: yE,
  formatDistanceToNowStrict: vE,
  formatDuration: wE,
  formatISO: kE,
  formatISO9075: _E,
  formatISODuration: OE,
  formatRFC3339: SE,
  formatRFC7231: CE,
  formatRelative: EE,
  formatters: Kl,
  fromUnixTime: TE,
  getDate: Mb,
  getDay: Io,
  getDayOfYear: wb,
  getDaysInMonth: Cb,
  getDaysInYear: PE,
  getDecade: RE,
  getDefaultOptions: Tb,
  getHours: NE,
  getISODay: Pb,
  getISOWeek: vd,
  getISOWeekYear: Kr,
  getISOWeeksInYear: IE,
  getMilliseconds: AE,
  getMinutes: FE,
  getMonth: LE,
  getOverlappingDaysInIntervals: WE,
  getQuarter: Gl,
  getSeconds: $E,
  getTime: zE,
  getUnixTime: jE,
  getWeek: xd,
  getWeekOfMonth: HE,
  getWeekYear: No,
  getWeeksInMonth: BE,
  getYear: YE,
  hoursToMilliseconds: VE,
  hoursToMinutes: qE,
  hoursToSeconds: UE,
  interval: XE,
  intervalToDuration: GE,
  intlFormat: KE,
  intlFormatDistance: JE,
  isAfter: ZE,
  isBefore: eT,
  isDate: hb,
  isEqual: tT,
  isExists: rT,
  isFirstDayOfMonth: nT,
  isFriday: aT,
  isFuture: iT,
  isLastDayOfMonth: pb,
  isLeapYear: Eb,
  isMatch: KT,
  isMonday: QT,
  isPast: JT,
  isSameDay: Ci,
  isSameHour: Bb,
  isSameISOWeek: Yb,
  isSameISOWeekYear: ZT,
  isSameMinute: Vb,
  isSameMonth: qb,
  isSameQuarter: Ub,
  isSameSecond: Xb,
  isSameWeek: kd,
  isSameYear: Gb,
  isSaturday: tb,
  isSunday: rb,
  isThisHour: eP,
  isThisISOWeek: tP,
  isThisMinute: rP,
  isThisMonth: nP,
  isThisQuarter: aP,
  isThisSecond: iP,
  isThisWeek: sP,
  isThisYear: oP,
  isThursday: lP,
  isToday: cP,
  isTomorrow: dP,
  isTuesday: uP,
  isValid: Ir,
  isWednesday: fP,
  isWeekend: ea,
  isWithinInterval: hP,
  isYesterday: gP,
  lastDayOfDecade: mP,
  lastDayOfISOWeek: pP,
  lastDayOfISOWeekYear: bP,
  lastDayOfMonth: Rb,
  lastDayOfQuarter: yP,
  lastDayOfWeek: Kb,
  lastDayOfYear: vP,
  lightFormat: OP,
  lightFormatters: ir,
  longFormatters: Js,
  max: db,
  milliseconds: DP,
  millisecondsToHours: MP,
  millisecondsToMinutes: CP,
  millisecondsToSeconds: EP,
  min: ub,
  minutesToHours: TP,
  minutesToMilliseconds: PP,
  minutesToSeconds: RP,
  monthsToQuarters: NP,
  monthsToYears: IP,
  nextDay: rn,
  nextFriday: AP,
  nextMonday: FP,
  nextSaturday: LP,
  nextSunday: WP,
  nextThursday: $P,
  nextTuesday: zP,
  nextWednesday: jP,
  parse: Hb,
  parseISO: HP,
  parseJSON: a5,
  parsers: jb,
  previousDay: nn,
  previousFriday: i5,
  previousMonday: s5,
  previousSaturday: o5,
  previousSunday: l5,
  previousThursday: c5,
  previousTuesday: d5,
  previousWednesday: u5,
  quartersToMonths: f5,
  quartersToYears: h5,
  roundToNearestHours: g5,
  roundToNearestMinutes: m5,
  secondsToHours: p5,
  secondsToMilliseconds: b5,
  secondsToMinutes: y5,
  set: v5,
  setDate: x5,
  setDay: Ao,
  setDayOfYear: w5,
  setDefaultOptions: k5,
  setHours: _5,
  setISODay: zb,
  setISOWeek: $b,
  setISOWeekYear: sb,
  setMilliseconds: O5,
  setMinutes: S5,
  setMonth: _d,
  setQuarter: D5,
  setSeconds: M5,
  setWeek: Wb,
  setWeekYear: C5,
  setYear: E5,
  startOfDay: ua,
  startOfDecade: T5,
  startOfHour: Jl,
  startOfISOWeek: Jt,
  startOfISOWeekYear: Qr,
  startOfMinute: Zl,
  startOfMonth: Ro,
  startOfQuarter: kn,
  startOfSecond: ec,
  startOfToday: P5,
  startOfTomorrow: R5,
  startOfWeek: dt,
  startOfWeekYear: Qs,
  startOfYear: yd,
  startOfYesterday: N5,
  sub: I5,
  subBusinessDays: A5,
  subDays: Fo,
  subHours: F5,
  subISOWeekYears: mb,
  subMilliseconds: L5,
  subMinutes: W5,
  subMonths: Jb,
  subQuarters: $5,
  subSeconds: z5,
  subWeeks: j5,
  subYears: H5,
  toDate: V,
  transpose: Nb,
  weeksToDays: B5,
  yearsToDays: Y5,
  yearsToMonths: V5,
  yearsToQuarters: q5
}, Symbol.toStringTag, { value: "Module" })), Ln = /* @__PURE__ */ H0(U5);
Object.defineProperty(Rr, "__esModule", {
  value: true
});
Rr.rangeShape = Rr.default = void 0;
var dn = X5(ee), me = Zb(Ar), wl = Zb(en), bt = Ln;
function Zb(t6) {
  return t6 && t6.__esModule ? t6 : { default: t6 };
}
function ey(t6) {
  if (typeof WeakMap != "function") return null;
  var e = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (ey = function(n) {
    return n ? r : e;
  })(t6);
}
function X5(t6, e) {
  if (t6 && t6.__esModule) return t6;
  if (t6 === null || typeof t6 != "object" && typeof t6 != "function") return { default: t6 };
  var r = ey(e);
  if (r && r.has(t6)) return r.get(t6);
  var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t6) if (i !== "default" && Object.prototype.hasOwnProperty.call(t6, i)) {
    var s = a ? Object.getOwnPropertyDescriptor(t6, i) : null;
    s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = t6[i];
  }
  return n.default = t6, r && r.set(t6, n), n;
}
function tc() {
  return tc = Object.assign ? Object.assign.bind() : function(t6) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t6[n] = r[n]);
    }
    return t6;
  }, tc.apply(this, arguments);
}
function Na(t6, e, r) {
  return e = G5(e), e in t6 ? Object.defineProperty(t6, e, { value: r, enumerable: true, configurable: true, writable: true }) : t6[e] = r, t6;
}
function G5(t6) {
  var e = K5(t6, "string");
  return typeof e == "symbol" ? e : String(e);
}
function K5(t6, e) {
  if (typeof t6 != "object" || !t6) return t6;
  var r = t6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t6, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t6);
}
class Od extends dn.Component {
  constructor(e, r) {
    super(e, r), Na(this, "handleKeyEvent", (n) => {
      const {
        day: a,
        onMouseDown: i,
        onMouseUp: s
      } = this.props;
      [
        13,
        32
        /* enter */
      ].includes(n.keyCode) && (n.type === "keydown" ? i(a) : s(a));
    }), Na(this, "handleMouseEvent", (n) => {
      const {
        day: a,
        disabled: i,
        onPreviewChange: s,
        onMouseEnter: o,
        onMouseDown: l,
        onMouseUp: c
      } = this.props, d = {};
      if (i) {
        s();
        return;
      }
      switch (n.type) {
        case "mouseenter":
          o(a), s(a), d.hover = true;
          break;
        case "blur":
        case "mouseleave":
          d.hover = false;
          break;
        case "mousedown":
          d.active = true, l(a);
          break;
        case "mouseup":
          n.stopPropagation(), d.active = false, c(a);
          break;
        case "focus":
          s(a);
          break;
      }
      Object.keys(d).length && this.setState(d);
    }), Na(this, "getClassNames", () => {
      const {
        isPassive: n,
        isToday: a,
        isWeekend: i,
        isStartOfWeek: s,
        isEndOfWeek: o,
        isStartOfMonth: l,
        isEndOfMonth: c,
        disabled: d,
        styles: u
      } = this.props;
      return (0, wl.default)(u.day, {
        [u.dayPassive]: n,
        [u.dayDisabled]: d,
        [u.dayToday]: a,
        [u.dayWeekend]: i,
        [u.dayStartOfWeek]: s,
        [u.dayEndOfWeek]: o,
        [u.dayStartOfMonth]: l,
        [u.dayEndOfMonth]: c,
        [u.dayHovered]: this.state.hover,
        [u.dayActive]: this.state.active
      });
    }), Na(this, "renderPreviewPlaceholder", () => {
      const {
        preview: n,
        day: a,
        styles: i
      } = this.props;
      if (!n) return null;
      const s = n.startDate ? (0, bt.endOfDay)(n.startDate) : null, o = n.endDate ? (0, bt.startOfDay)(n.endDate) : null, l = (!s || (0, bt.isAfter)(a, s)) && (!o || (0, bt.isBefore)(a, o)), c = !l && (0, bt.isSameDay)(a, s), d = !l && (0, bt.isSameDay)(a, o);
      return /* @__PURE__ */ dn.default.createElement("span", {
        className: (0, wl.default)({
          [i.dayStartPreview]: c,
          [i.dayInPreview]: l,
          [i.dayEndPreview]: d
        }),
        style: {
          color: n.color
        }
      });
    }), Na(this, "renderSelectionPlaceholders", () => {
      const {
        styles: n,
        ranges: a,
        day: i
      } = this.props;
      return this.props.displayMode === "date" ? (0, bt.isSameDay)(this.props.day, this.props.date) ? /* @__PURE__ */ dn.default.createElement("span", {
        className: n.selected,
        style: {
          color: this.props.color
        }
      }) : null : a.reduce((o, l) => {
        let c = l.startDate, d = l.endDate;
        c && d && (0, bt.isBefore)(d, c) && ([c, d] = [d, c]), c = c ? (0, bt.endOfDay)(c) : null, d = d ? (0, bt.startOfDay)(d) : null;
        const u = (!c || (0, bt.isAfter)(i, c)) && (!d || (0, bt.isBefore)(i, d)), f = !u && (0, bt.isSameDay)(i, c), h = !u && (0, bt.isSameDay)(i, d);
        return u || f || h ? [...o, {
          isStartEdge: f,
          isEndEdge: h,
          isInRange: u,
          ...l
        }] : o;
      }, []).map((o, l) => /* @__PURE__ */ dn.default.createElement("span", {
        key: l,
        className: (0, wl.default)({
          [n.startEdge]: o.isStartEdge,
          [n.endEdge]: o.isEndEdge,
          [n.inRange]: o.isInRange
        }),
        style: {
          color: o.color || this.props.color
        }
      }));
    }), this.state = {
      hover: false,
      active: false
    };
  }
  render() {
    const {
      dayContentRenderer: e
    } = this.props;
    return /* @__PURE__ */ dn.default.createElement("button", tc({
      type: "button",
      onMouseEnter: this.handleMouseEvent,
      onMouseLeave: this.handleMouseEvent,
      onFocus: this.handleMouseEvent,
      onMouseDown: this.handleMouseEvent,
      onMouseUp: this.handleMouseEvent,
      onBlur: this.handleMouseEvent,
      onPauseCapture: this.handleMouseEvent,
      onKeyDown: this.handleKeyEvent,
      onKeyUp: this.handleKeyEvent,
      className: this.getClassNames(this.props.styles)
    }, this.props.disabled || this.props.isPassive ? {
      tabIndex: -1
    } : {}, {
      style: {
        color: this.props.color
      }
    }), this.renderSelectionPlaceholders(), this.renderPreviewPlaceholder(), /* @__PURE__ */ dn.default.createElement("span", {
      className: this.props.styles.dayNumber
    }, (e == null ? void 0 : e(this.props.day)) || /* @__PURE__ */ dn.default.createElement("span", null, (0, bt.format)(this.props.day, this.props.dayDisplayFormat))));
  }
}
Od.defaultProps = {};
const Q5 = Rr.rangeShape = me.default.shape({
  startDate: me.default.object,
  endDate: me.default.object,
  color: me.default.string,
  key: me.default.string,
  autoFocus: me.default.bool,
  disabled: me.default.bool,
  showDateDisplay: me.default.bool
});
Od.propTypes = {
  day: me.default.object.isRequired,
  dayDisplayFormat: me.default.string,
  date: me.default.object,
  ranges: me.default.arrayOf(Q5),
  preview: me.default.shape({
    startDate: me.default.object,
    endDate: me.default.object,
    color: me.default.string
  }),
  onPreviewChange: me.default.func,
  previewColor: me.default.string,
  disabled: me.default.bool,
  isPassive: me.default.bool,
  isToday: me.default.bool,
  isWeekend: me.default.bool,
  isStartOfWeek: me.default.bool,
  isEndOfWeek: me.default.bool,
  isStartOfMonth: me.default.bool,
  isEndOfMonth: me.default.bool,
  color: me.default.string,
  displayMode: me.default.oneOf(["dateRange", "date"]),
  styles: me.default.object,
  onMouseDown: me.default.func,
  onMouseUp: me.default.func,
  onMouseEnter: me.default.func,
  dayContentRenderer: me.default.func
};
Rr.default = Od;
var Lo = {}, Lr = {};
Object.defineProperty(Lr, "__esModule", {
  value: true
});
Lr.calcFocusDate = eR;
Lr.findNextRangeIndex = tR;
Lr.generateStyles = nR;
Lr.getMonthDisplayRange = rR;
var J5 = Z5(en), Cr = Ln;
function Z5(t6) {
  return t6 && t6.__esModule ? t6 : { default: t6 };
}
function eR(t6, e) {
  const {
    shownDate: r,
    date: n,
    months: a,
    ranges: i,
    focusedRange: s,
    displayMode: o
  } = e;
  let l;
  if (o === "dateRange") {
    const d = i[s[0]] || {};
    l = {
      start: d.startDate,
      end: d.endDate
    };
  } else
    l = {
      start: n,
      end: n
    };
  l.start = (0, Cr.startOfMonth)(l.start || /* @__PURE__ */ new Date()), l.end = (0, Cr.endOfMonth)(l.end || l.start);
  const c = l.start || l.end || r || /* @__PURE__ */ new Date();
  return t6 ? (0, Cr.differenceInCalendarMonths)(l.start, l.end) > a ? t6 : c : r || c;
}
function tR(t6) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
  const r = t6.findIndex((n, a) => a > e && n.autoFocus !== false && !n.disabled);
  return r !== -1 ? r : t6.findIndex((n) => n.autoFocus !== false && !n.disabled);
}
function rR(t6, e, r) {
  const n = (0, Cr.startOfMonth)(t6, e), a = (0, Cr.endOfMonth)(t6, e), i = (0, Cr.startOfWeek)(n, e);
  let s = (0, Cr.endOfWeek)(a, e);
  return r && (0, Cr.differenceInCalendarDays)(s, i) <= 34 && (s = (0, Cr.addDays)(s, 7)), {
    start: i,
    end: s,
    startDateOfMonth: n,
    endDateOfMonth: a
  };
}
function nR(t6) {
  return t6.length ? t6.filter((r) => !!r).reduce((r, n) => (Object.keys(n).forEach((a) => {
    r[a] = (0, J5.default)(r[a], n[a]);
  }), r), {}) : {};
}
Object.defineProperty(Lo, "__esModule", {
  value: true
});
Lo.default = void 0;
var vn = ny(ee), Te = iR(Ar), ty = ny(Rr), Xe = Ln, aR = Lr;
function iR(t6) {
  return t6 && t6.__esModule ? t6 : { default: t6 };
}
function ry(t6) {
  if (typeof WeakMap != "function") return null;
  var e = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (ry = function(n) {
    return n ? r : e;
  })(t6);
}
function ny(t6, e) {
  if (t6 && t6.__esModule) return t6;
  if (t6 === null || typeof t6 != "object" && typeof t6 != "function") return { default: t6 };
  var r = ry(e);
  if (r && r.has(t6)) return r.get(t6);
  var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t6) if (i !== "default" && Object.prototype.hasOwnProperty.call(t6, i)) {
    var s = a ? Object.getOwnPropertyDescriptor(t6, i) : null;
    s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = t6[i];
  }
  return n.default = t6, r && r.set(t6, n), n;
}
function rc() {
  return rc = Object.assign ? Object.assign.bind() : function(t6) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t6[n] = r[n]);
    }
    return t6;
  }, rc.apply(this, arguments);
}
function sR(t6, e, r) {
  const n = /* @__PURE__ */ new Date();
  return /* @__PURE__ */ vn.default.createElement("div", {
    className: t6.weekDays
  }, (0, Xe.eachDayOfInterval)({
    start: (0, Xe.startOfWeek)(n, e),
    end: (0, Xe.endOfWeek)(n, e)
  }).map((a, i) => /* @__PURE__ */ vn.default.createElement("span", {
    className: t6.weekDay,
    key: i
  }, (0, Xe.format)(a, r, e))));
}
class Sd extends vn.PureComponent {
  render() {
    const e = /* @__PURE__ */ new Date(), {
      displayMode: r,
      focusedRange: n,
      drag: a,
      styles: i,
      disabledDates: s,
      disabledDay: o
    } = this.props, l = this.props.minDate && (0, Xe.startOfDay)(this.props.minDate), c = this.props.maxDate && (0, Xe.endOfDay)(this.props.maxDate), d = (0, aR.getMonthDisplayRange)(this.props.month, this.props.dateOptions, this.props.fixedHeight);
    let u = this.props.ranges;
    if (r === "dateRange" && a.status) {
      let {
        startDate: h,
        endDate: g
      } = a.range;
      u = u.map((m, p) => p !== n[0] ? m : {
        ...m,
        startDate: h,
        endDate: g
      });
    }
    const f = this.props.showPreview && !a.disablePreview;
    return /* @__PURE__ */ vn.default.createElement("div", {
      className: i.month,
      style: this.props.style
    }, this.props.showMonthName ? /* @__PURE__ */ vn.default.createElement("div", {
      className: i.monthName
    }, (0, Xe.format)(this.props.month, this.props.monthDisplayFormat, this.props.dateOptions)) : null, this.props.showWeekDays && sR(i, this.props.dateOptions, this.props.weekdayDisplayFormat), /* @__PURE__ */ vn.default.createElement("div", {
      className: i.days,
      onMouseLeave: this.props.onMouseLeave
    }, (0, Xe.eachDayOfInterval)({
      start: d.start,
      end: d.end
    }).map((h, g) => {
      const m = (0, Xe.isSameDay)(h, d.startDateOfMonth), p = (0, Xe.isSameDay)(h, d.endDateOfMonth), w = l && (0, Xe.isBefore)(h, l) || c && (0, Xe.isAfter)(h, c), b = s.some((v) => (0, Xe.isSameDay)(v, h)), k = o(h);
      return /* @__PURE__ */ vn.default.createElement(ty.default, rc({}, this.props, {
        ranges: u,
        day: h,
        preview: f ? this.props.preview : null,
        isWeekend: (0, Xe.isWeekend)(h, this.props.dateOptions),
        isToday: (0, Xe.isSameDay)(h, e),
        isStartOfWeek: (0, Xe.isSameDay)(h, (0, Xe.startOfWeek)(h, this.props.dateOptions)),
        isEndOfWeek: (0, Xe.isSameDay)(h, (0, Xe.endOfWeek)(h, this.props.dateOptions)),
        isStartOfMonth: m,
        isEndOfMonth: p,
        key: g,
        disabled: w || b || k,
        isPassive: !(0, Xe.isWithinInterval)(h, {
          start: d.startDateOfMonth,
          end: d.endDateOfMonth
        }),
        styles: i,
        onMouseDown: this.props.onDragSelectionStart,
        onMouseUp: this.props.onDragSelectionEnd,
        onMouseEnter: this.props.onDragSelectionMove,
        dragRange: a.range,
        drag: a.status
      }));
    })));
  }
}
Sd.defaultProps = {};
Sd.propTypes = {
  style: Te.default.object,
  styles: Te.default.object,
  month: Te.default.object,
  drag: Te.default.object,
  dateOptions: Te.default.object,
  disabledDates: Te.default.array,
  disabledDay: Te.default.func,
  preview: Te.default.shape({
    startDate: Te.default.object,
    endDate: Te.default.object
  }),
  showPreview: Te.default.bool,
  displayMode: Te.default.oneOf(["dateRange", "date"]),
  minDate: Te.default.object,
  maxDate: Te.default.object,
  ranges: Te.default.arrayOf(ty.rangeShape),
  focusedRange: Te.default.arrayOf(Te.default.number),
  onDragSelectionStart: Te.default.func,
  onDragSelectionEnd: Te.default.func,
  onDragSelectionMove: Te.default.func,
  onMouseLeave: Te.default.func,
  monthDisplayFormat: Te.default.string,
  weekdayDisplayFormat: Te.default.string,
  dayDisplayFormat: Te.default.string,
  showWeekDays: Te.default.bool,
  showMonthName: Te.default.bool,
  fixedHeight: Te.default.bool
};
Lo.default = Sd;
var Wo = {};
Object.defineProperty(Wo, "__esModule", {
  value: true
});
Wo.default = void 0;
var es = lR(ee), tr = ay(Ar), oR = ay(en), Ia = Ln;
function ay(t6) {
  return t6 && t6.__esModule ? t6 : { default: t6 };
}
function iy(t6) {
  if (typeof WeakMap != "function") return null;
  var e = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (iy = function(n) {
    return n ? r : e;
  })(t6);
}
function lR(t6, e) {
  if (t6 && t6.__esModule) return t6;
  if (t6 === null || typeof t6 != "object" && typeof t6 != "function") return { default: t6 };
  var r = iy(e);
  if (r && r.has(t6)) return r.get(t6);
  var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t6) if (i !== "default" && Object.prototype.hasOwnProperty.call(t6, i)) {
    var s = a ? Object.getOwnPropertyDescriptor(t6, i) : null;
    s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = t6[i];
  }
  return n.default = t6, r && r.set(t6, n), n;
}
function kl(t6, e, r) {
  return e = cR(e), e in t6 ? Object.defineProperty(t6, e, { value: r, enumerable: true, configurable: true, writable: true }) : t6[e] = r, t6;
}
function cR(t6) {
  var e = dR(t6, "string");
  return typeof e == "symbol" ? e : String(e);
}
function dR(t6, e) {
  if (typeof t6 != "object" || !t6) return t6;
  var r = t6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t6, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t6);
}
class Dd extends es.PureComponent {
  constructor(e, r) {
    super(e, r), kl(this, "onKeyDown", (n) => {
      const {
        value: a
      } = this.state;
      n.key === "Enter" && this.update(a);
    }), kl(this, "onChange", (n) => {
      this.setState({
        value: n.target.value,
        changed: true,
        invalid: false
      });
    }), kl(this, "onBlur", () => {
      const {
        value: n
      } = this.state;
      this.update(n);
    }), this.state = {
      invalid: false,
      changed: false,
      value: this.formatDate(e)
    };
  }
  componentDidUpdate(e) {
    const {
      value: r
    } = e;
    (0, Ia.isEqual)(r, this.props.value) || this.setState({
      value: this.formatDate(this.props)
    });
  }
  formatDate(e) {
    let {
      value: r,
      dateDisplayFormat: n,
      dateOptions: a
    } = e;
    return r && (0, Ia.isValid)(r) ? (0, Ia.format)(r, n, a) : "";
  }
  update(e) {
    const {
      invalid: r,
      changed: n
    } = this.state;
    if (r || !n || !e)
      return;
    const {
      onChange: a,
      dateDisplayFormat: i,
      dateOptions: s
    } = this.props, o = (0, Ia.parse)(e, i, /* @__PURE__ */ new Date(), s);
    (0, Ia.isValid)(o) ? this.setState({
      changed: false
    }, () => a(o)) : this.setState({
      invalid: true
    });
  }
  render() {
    const {
      className: e,
      readOnly: r,
      placeholder: n,
      ariaLabel: a,
      disabled: i,
      onFocus: s
    } = this.props, {
      value: o,
      invalid: l
    } = this.state;
    return /* @__PURE__ */ es.default.createElement("span", {
      className: (0, oR.default)("rdrDateInput", e)
    }, /* @__PURE__ */ es.default.createElement("input", {
      readOnly: r,
      disabled: i,
      value: o,
      placeholder: n,
      "aria-label": a,
      onKeyDown: this.onKeyDown,
      onChange: this.onChange,
      onBlur: this.onBlur,
      onFocus: s
    }), l && /* @__PURE__ */ es.default.createElement("span", {
      className: "rdrWarning"
    }, "⚠"));
  }
}
Dd.propTypes = {
  value: tr.default.object,
  placeholder: tr.default.string,
  disabled: tr.default.bool,
  readOnly: tr.default.bool,
  dateOptions: tr.default.object,
  dateDisplayFormat: tr.default.string,
  ariaLabel: tr.default.string,
  className: tr.default.string,
  onFocus: tr.default.func.isRequired,
  onChange: tr.default.func.isRequired
};
Dd.defaultProps = {
  readOnly: true,
  disabled: false,
  dateDisplayFormat: "MMM D, YYYY"
};
Wo.default = Dd;
var sy = {};
(function(t6) {
  (function(e, r) {
    r(t6, ee, _y);
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : ZS, function(e, r, n) {
    Object.defineProperty(e, "__esModule", {
      value: true
    }), e.default = void 0;
    function a(N) {
      "@babel/helpers - typeof";
      return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(R) {
        return typeof R;
      } : function(R) {
        return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R;
      }, a(N);
    }
    function i(N, R) {
      if (!(N instanceof R)) throw new TypeError("Cannot call a class as a function");
    }
    function s(N, R) {
      for (var P = 0; P < R.length; P++) {
        var O = R[P];
        O.enumerable = O.enumerable || false, O.configurable = true, "value" in O && (O.writable = true), Object.defineProperty(N, b(O.key), O);
      }
    }
    function o(N, R, P) {
      return R && s(N.prototype, R), P && s(N, P), Object.defineProperty(N, "prototype", { writable: false }), N;
    }
    function l(N, R, P) {
      return R = f(R), c(N, u() ? Reflect.construct(R, P || [], f(N).constructor) : R.apply(N, P));
    }
    function c(N, R) {
      if (R && (a(R) == "object" || typeof R == "function")) return R;
      if (R !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return d(N);
    }
    function d(N) {
      if (N === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return N;
    }
    function u() {
      try {
        var N = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch {
      }
      return (u = function() {
        return !!N;
      })();
    }
    function f(N) {
      return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(R) {
        return R.__proto__ || Object.getPrototypeOf(R);
      }, f(N);
    }
    function h(N, R) {
      if (typeof R != "function" && R !== null) throw new TypeError("Super expression must either be null or a function");
      N.prototype = Object.create(R && R.prototype, { constructor: { value: N, writable: true, configurable: true } }), Object.defineProperty(N, "prototype", { writable: false }), R && g(N, R);
    }
    function g(N, R) {
      return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(P, O) {
        return P.__proto__ = O, P;
      }, g(N, R);
    }
    function m(N, R) {
      var P = Object.keys(N);
      if (Object.getOwnPropertySymbols) {
        var O = Object.getOwnPropertySymbols(N);
        R && (O = O.filter(function(F) {
          return Object.getOwnPropertyDescriptor(N, F).enumerable;
        })), P.push.apply(P, O);
      }
      return P;
    }
    function p(N) {
      for (var R = 1; R < arguments.length; R++) {
        var P = arguments[R] != null ? arguments[R] : {};
        R % 2 ? m(Object(P), true).forEach(function(O) {
          w(N, O, P[O]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(N, Object.getOwnPropertyDescriptors(P)) : m(Object(P)).forEach(function(O) {
          Object.defineProperty(N, O, Object.getOwnPropertyDescriptor(P, O));
        });
      }
      return N;
    }
    function w(N, R, P) {
      return (R = b(R)) in N ? Object.defineProperty(N, R, { value: P, enumerable: true, configurable: true, writable: true }) : N[R] = P, N;
    }
    function b(N) {
      var R = k(N, "string");
      return a(R) == "symbol" ? R : R + "";
    }
    function k(N, R) {
      if (a(N) != "object" || !N) return N;
      var P = N[Symbol.toPrimitive];
      if (P !== void 0) {
        var O = P.call(N, R);
        if (a(O) != "object") return O;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (R === "string" ? String : Number)(N);
    }
    var v = {
      x: "clientWidth",
      y: "clientHeight"
    }, x = {
      x: "clientTop",
      y: "clientLeft"
    }, _ = {
      x: "innerWidth",
      y: "innerHeight"
    }, T = {
      x: "offsetWidth",
      y: "offsetHeight"
    }, S = {
      x: "offsetLeft",
      y: "offsetTop"
    }, C = {
      x: "overflowX",
      y: "overflowY"
    }, D = {
      x: "scrollWidth",
      y: "scrollHeight"
    }, z = {
      x: "scrollLeft",
      y: "scrollTop"
    }, A = {
      x: "width",
      y: "height"
    }, L = function() {
    }, M = function() {
      if (typeof window > "u") return false;
      var N = false;
      try {
        document.createElement("div").addEventListener("test", L, {
          get passive() {
            return N = true, false;
          }
        });
      } catch {
      }
      return N;
    }() ? {
      passive: true
    } : false, I = "ReactList failed to reach a stable state.", W = 40, B = function(R, P) {
      for (var O in P) if (R[O] !== P[O]) return false;
      return true;
    }, U = function(R) {
      for (var P = R.props.axis, O = R.getEl(), F = C[P]; O = O.parentElement; )
        switch (window.getComputedStyle(O)[F]) {
          case "auto":
          case "scroll":
          case "overlay":
            return O;
        }
      return window;
    }, J = function(R) {
      var P = R.props.axis, O = R.scrollParent;
      return O === window ? window[_[P]] : O[v[P]];
    }, E = function(R, P) {
      var O = R.length, F = R.minSize, X = R.type, q = P.from, G = P.size, Z = P.itemsPerRow;
      G = Math.max(G, F);
      var ne = G % Z;
      return ne && (G += Z - ne), G > O && (G = O), q = X === "simple" || !q ? 0 : Math.max(Math.min(q, O - G), 0), (ne = q % Z) && (q -= ne, G += ne), q === P.from && G === P.size ? P : p(p({}, P), {}, {
        from: q,
        size: G
      });
    }, j = e.default = /* @__PURE__ */ function(N) {
      function R(P) {
        var O;
        return i(this, R), O = l(this, R, [P]), O.state = E(P, {
          itemsPerRow: 1,
          from: P.initialIndex,
          size: 0
        }), O.cache = {}, O.cachedScrollPosition = null, O.prevPrevState = {}, O.unstable = false, O.updateCounter = 0, O;
      }
      return h(R, N), o(R, [{
        key: "componentDidMount",
        value: function() {
          this.updateFrameAndClearCache = this.updateFrameAndClearCache.bind(this), window.addEventListener("resize", this.updateFrameAndClearCache), this.updateFrame(this.scrollTo.bind(this, this.props.initialIndex));
        }
      }, {
        key: "componentDidUpdate",
        value: function(O) {
          var F = this;
          if (this.props.axis !== O.axis && this.clearSizeCache(), !this.unstable) {
            if (++this.updateCounter > W)
              return this.unstable = true, console.error(I);
            this.updateCounterTimeoutId || (this.updateCounterTimeoutId = setTimeout(function() {
              F.updateCounter = 0, delete F.updateCounterTimeoutId;
            }, 0)), this.updateFrame();
          }
        }
      }, {
        key: "maybeSetState",
        value: function(O, F) {
          if (B(this.state, O)) return F();
          this.setState(O, F);
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          window.removeEventListener("resize", this.updateFrameAndClearCache), this.scrollParent.removeEventListener("scroll", this.updateFrameAndClearCache, M), this.scrollParent.removeEventListener("mousewheel", L, M);
        }
      }, {
        key: "getOffset",
        value: function(O) {
          var F = this.props.axis, X = O[x[F]] || 0, q = S[F];
          do
            X += O[q] || 0;
          while (O = O.offsetParent);
          return X;
        }
      }, {
        key: "getEl",
        value: function() {
          return this.el || this.items;
        }
      }, {
        key: "getScrollPosition",
        value: function() {
          if (typeof this.cachedScrollPosition == "number")
            return this.cachedScrollPosition;
          var O = this.scrollParent, F = this.props.axis, X = z[F], q = O === window ? (
            // Firefox always returns document.body[scrollKey] as 0 and Chrome/Safari
            // always return document.documentElement[scrollKey] as 0, so take
            // whichever has a value.
            document.body[X] || document.documentElement[X]
          ) : O[X], G = this.getScrollSize() - this.props.scrollParentViewportSizeGetter(this), Z = Math.max(0, Math.min(q, G)), ne = this.getEl();
          return this.cachedScrollPosition = this.getOffset(O) + Z - this.getOffset(ne), this.cachedScrollPosition;
        }
      }, {
        key: "setScroll",
        value: function(O) {
          var F = this.scrollParent, X = this.props.axis;
          if (O += this.getOffset(this.getEl()), F === window) return window.scrollTo(0, O);
          O -= this.getOffset(this.scrollParent), F[z[X]] = O;
        }
      }, {
        key: "getScrollSize",
        value: function() {
          var O = this.scrollParent, F = document, X = F.body, q = F.documentElement, G = D[this.props.axis];
          return O === window ? Math.max(X[G], q[G]) : O[G];
        }
      }, {
        key: "hasDeterminateSize",
        value: function() {
          var O = this.props, F = O.itemSizeGetter, X = O.type;
          return X === "uniform" || F;
        }
      }, {
        key: "getStartAndEnd",
        value: function() {
          var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props.threshold, F = this.getScrollPosition(), X = Math.max(0, F - O), q = F + this.props.scrollParentViewportSizeGetter(this) + O;
          return this.hasDeterminateSize() && (q = Math.min(q, this.getSpaceBefore(this.props.length))), {
            start: X,
            end: q
          };
        }
      }, {
        key: "getItemSizeAndItemsPerRow",
        value: function() {
          var O = this.props, F = O.axis, X = O.useStaticSize, q = this.state, G = q.itemSize, Z = q.itemsPerRow;
          if (X && G && Z)
            return {
              itemSize: G,
              itemsPerRow: Z
            };
          var ne = this.items.children;
          if (!ne.length) return {};
          var H = ne[0], ae = H[T[F]], re = Math.abs(ae - G);
          if ((isNaN(re) || re >= 1) && (G = ae), !G) return {};
          var le = S[F], fe = H[le];
          Z = 1;
          for (var de = ne[Z]; de && de[le] === fe; de = ne[Z])
            ++Z;
          return {
            itemSize: G,
            itemsPerRow: Z
          };
        }
      }, {
        key: "clearSizeCache",
        value: function() {
          this.cachedScrollPosition = null;
        }
        // Called by 'scroll' and 'resize' events, clears scroll position cache.
      }, {
        key: "updateFrameAndClearCache",
        value: function(O) {
          return this.clearSizeCache(), this.updateFrame(O);
        }
      }, {
        key: "updateFrame",
        value: function(O) {
          switch (this.updateScrollParent(), typeof O != "function" && (O = L), this.props.type) {
            case "simple":
              return this.updateSimpleFrame(O);
            case "variable":
              return this.updateVariableFrame(O);
            case "uniform":
              return this.updateUniformFrame(O);
          }
        }
      }, {
        key: "updateScrollParent",
        value: function() {
          var O = this.scrollParent;
          this.scrollParent = this.props.scrollParentGetter(this), O !== this.scrollParent && (O && (O.removeEventListener("scroll", this.updateFrameAndClearCache), O.removeEventListener("mousewheel", L)), this.clearSizeCache(), this.scrollParent.addEventListener("scroll", this.updateFrameAndClearCache, M), this.scrollParent.addEventListener("mousewheel", L, M));
        }
      }, {
        key: "updateSimpleFrame",
        value: function(O) {
          var F = this.getStartAndEnd(), X = F.end, q = this.items.children, G = 0;
          if (q.length) {
            var Z = this.props.axis, ne = q[0], H = q[q.length - 1];
            G = this.getOffset(H) + H[T[Z]] - this.getOffset(ne);
          }
          if (G > X) return O();
          var ae = this.props, re = ae.pageSize, le = ae.length, fe = Math.min(this.state.size + re, le);
          this.maybeSetState({
            size: fe
          }, O);
        }
      }, {
        key: "updateVariableFrame",
        value: function(O) {
          this.props.itemSizeGetter || this.cacheSizes();
          for (var F = this.getStartAndEnd(), X = F.start, q = F.end, G = this.props, Z = G.length, ne = G.pageSize, H = 0, ae = 0, re = 0, le = Z - 1; ae < le; ) {
            var fe = this.getSizeOfItem(ae);
            if (fe == null || H + fe > X) break;
            H += fe, ++ae;
          }
          for (var de = Z - ae; re < de && H < q; ) {
            var ie = this.getSizeOfItem(ae + re);
            if (ie == null) {
              re = Math.min(re + ne, de);
              break;
            }
            H += ie, ++re;
          }
          this.maybeSetState(E(this.props, {
            from: ae,
            itemsPerRow: 1,
            size: re
          }), O);
        }
      }, {
        key: "updateUniformFrame",
        value: function(O) {
          var F = this.getItemSizeAndItemsPerRow(), X = F.itemSize, q = F.itemsPerRow;
          if (!X || !q) return O();
          var G = this.getStartAndEnd(), Z = G.start, ne = G.end, H = E(this.props, {
            from: Math.floor(Z / X) * q,
            size: (Math.ceil((ne - Z) / X) + 1) * q,
            itemsPerRow: q
          }), ae = H.from, re = H.size;
          return this.maybeSetState({
            itemsPerRow: q,
            from: ae,
            itemSize: X,
            size: re
          }, O);
        }
      }, {
        key: "getSpaceBefore",
        value: function(O) {
          var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (F[O] != null) return F[O];
          var X = this.state, q = X.itemSize, G = X.itemsPerRow;
          if (q)
            return F[O] = Math.floor(O / G) * q;
          for (var Z = O; Z > 0 && F[--Z] == null; ) ;
          for (var ne = F[Z] || 0, H = Z; H < O; ++H) {
            F[H] = ne;
            var ae = this.getSizeOfItem(H);
            if (ae == null) break;
            ne += ae;
          }
          return F[O] = ne;
        }
      }, {
        key: "cacheSizes",
        value: function() {
          for (var O = this.cache, F = this.state.from, X = this.items.children, q = T[this.props.axis], G = 0, Z = X.length; G < Z; ++G)
            O[F + G] = X[G][q];
        }
      }, {
        key: "getSizeOfItem",
        value: function(O) {
          var F = this.cache, X = this.items, q = this.props, G = q.axis, Z = q.itemSizeGetter, ne = q.itemSizeEstimator, H = q.type, ae = this.state, re = ae.from, le = ae.itemSize, fe = ae.size;
          if (le) return le;
          if (Z) return Z(O);
          if (O in F) return F[O];
          if (H === "simple" && O >= re && O < re + fe && X) {
            var de = X.children[O - re];
            if (de) return de[T[G]];
          }
          if (ne) return ne(O, F);
        }
      }, {
        key: "scrollTo",
        value: function(O) {
          O != null && this.setScroll(this.getSpaceBefore(O));
        }
      }, {
        key: "scrollAround",
        value: function(O) {
          var F = this.getScrollPosition(), X = this.getSpaceBefore(O), q = X - this.props.scrollParentViewportSizeGetter(this) + this.getSizeOfItem(O), G = Math.min(q, X), Z = Math.max(q, X);
          if (F <= G) return this.setScroll(G);
          if (F > Z) return this.setScroll(Z);
        }
      }, {
        key: "getVisibleRange",
        value: function() {
          for (var O = this.state, F = O.from, X = O.size, q = this.getStartAndEnd(0), G = q.start, Z = q.end, ne = {}, H, ae, re = F; re < F + X; ++re) {
            var le = this.getSpaceBefore(re, ne), fe = le + this.getSizeOfItem(re);
            H == null && fe > G && (H = re), H != null && le < Z && (ae = re);
          }
          return [H, ae];
        }
      }, {
        key: "renderItems",
        value: function() {
          for (var O = this, F = this.props, X = F.itemRenderer, q = F.itemsRenderer, G = this.state, Z = G.from, ne = G.size, H = [], ae = 0; ae < ne; ++ae) H.push(X(Z + ae, ae));
          return q(H, function(re) {
            return O.items = re;
          });
        }
      }, {
        key: "render",
        value: function() {
          var O = this, F = this.props, X = F.axis, q = F.length, G = F.type, Z = F.useTranslate3d, ne = this.state, H = ne.from, ae = ne.itemsPerRow, re = this.renderItems();
          if (G === "simple") return re;
          var le = {
            position: "relative"
          }, fe = {}, de = Math.ceil(q / ae) * ae, ie = this.getSpaceBefore(de, fe);
          ie && (le[A[X]] = ie, X === "x" && (le.overflowX = "hidden"));
          var $e = this.getSpaceBefore(H, fe), ge = X === "x" ? $e : 0, Fe = X === "y" ? $e : 0, je = Z ? "translate3d(".concat(ge, "px, ").concat(Fe, "px, 0)") : "translate(".concat(ge, "px, ").concat(Fe, "px)"), Ye = {
            msTransform: je,
            WebkitTransform: je,
            transform: je
          };
          return /* @__PURE__ */ (0, n.jsx)("div", {
            style: le,
            ref: function(Tt) {
              return O.el = Tt;
            },
            children: /* @__PURE__ */ (0, n.jsx)("div", {
              style: Ye,
              children: re
            })
          });
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function(O, F) {
          var X = E(O, F);
          return X === F ? null : X;
        }
      }]);
    }(r.Component);
    w(j, "displayName", "ReactList"), w(j, "defaultProps", {
      axis: "y",
      itemRenderer: function(R, P) {
        return /* @__PURE__ */ (0, n.jsx)("div", {
          children: R
        }, P);
      },
      itemsRenderer: function(R, P) {
        return /* @__PURE__ */ (0, n.jsx)("div", {
          ref: P,
          children: R
        });
      },
      length: 0,
      minSize: 1,
      pageSize: 10,
      scrollParentGetter: U,
      scrollParentViewportSizeGetter: J,
      threshold: 100,
      type: "simple",
      useStaticSize: false,
      useTranslate3d: false
    });
  });
})(sy);
function uR(t6, e) {
  if (t6 === e)
    return true;
  if (!t6 || !e)
    return false;
  var r = Object.keys(t6), n = Object.keys(e), a = r.length;
  if (n.length !== a)
    return false;
  for (var i = 0; i < a; i++) {
    var s = r[i];
    if (t6[s] !== e[s] || !Object.prototype.hasOwnProperty.call(e, s))
      return false;
  }
  return true;
}
function fR(t6, e) {
  if (t6 === e)
    return true;
  if (!t6 || !e)
    return false;
  var r = t6.length;
  if (e.length !== r)
    return false;
  for (var n = 0; n < r; n++)
    if (t6[n] !== e[n])
      return false;
  return true;
}
const hR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  shallowEqualArrays: fR,
  shallowEqualObjects: uR
}, Symbol.toStringTag, { value: "Module" })), gR = /* @__PURE__ */ H0(hR);
var Md = {}, Cd = {};
Cd.formatDistance = void 0;
const mR = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, pR = (t6, e, r) => {
  let n;
  const a = mR[t6];
  return typeof a == "string" ? n = a : e === 1 ? n = a.one : n = a.other.replace("{{count}}", e.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
Cd.formatDistance = pR;
var Ed = {}, oy = {};
oy.buildFormatLongFn = bR;
function bR(t6) {
  return (e = {}) => {
    const r = e.width ? String(e.width) : t6.defaultWidth;
    return t6.formats[r] || t6.formats[t6.defaultWidth];
  };
}
Ed.formatLong = void 0;
var _l = oy;
const yR = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, vR = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, xR = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
Ed.formatLong = {
  date: (0, _l.buildFormatLongFn)({
    formats: yR,
    defaultWidth: "full"
  }),
  time: (0, _l.buildFormatLongFn)({
    formats: vR,
    defaultWidth: "full"
  }),
  dateTime: (0, _l.buildFormatLongFn)({
    formats: xR,
    defaultWidth: "full"
  })
};
var Td = {};
Td.formatRelative = void 0;
const wR = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, kR = (t6, e, r, n) => wR[t6];
Td.formatRelative = kR;
var Pd = {}, ly = {};
ly.buildLocalizeFn = _R;
function _R(t6) {
  return (e, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let a;
    if (n === "formatting" && t6.formattingValues) {
      const s = t6.defaultFormattingWidth || t6.defaultWidth, o = r != null && r.width ? String(r.width) : s;
      a = t6.formattingValues[o] || t6.formattingValues[s];
    } else {
      const s = t6.defaultWidth, o = r != null && r.width ? String(r.width) : t6.defaultWidth;
      a = t6.values[o] || t6.values[s];
    }
    const i = t6.argumentCallback ? t6.argumentCallback(e) : e;
    return a[i];
  };
}
Pd.localize = void 0;
var Aa = ly;
const OR = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, SR = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, DR = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, MR = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, CR = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, ER = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, TR = (t6, e) => {
  const r = Number(t6), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
};
Pd.localize = {
  ordinalNumber: TR,
  era: (0, Aa.buildLocalizeFn)({
    values: OR,
    defaultWidth: "wide"
  }),
  quarter: (0, Aa.buildLocalizeFn)({
    values: SR,
    defaultWidth: "wide",
    argumentCallback: (t6) => t6 - 1
  }),
  month: (0, Aa.buildLocalizeFn)({
    values: DR,
    defaultWidth: "wide"
  }),
  day: (0, Aa.buildLocalizeFn)({
    values: MR,
    defaultWidth: "wide"
  }),
  dayPeriod: (0, Aa.buildLocalizeFn)({
    values: CR,
    defaultWidth: "wide",
    formattingValues: ER,
    defaultFormattingWidth: "wide"
  })
};
var Rd = {}, cy = {};
cy.buildMatchFn = PR;
function PR(t6) {
  return (e, r = {}) => {
    const n = r.width, a = n && t6.matchPatterns[n] || t6.matchPatterns[t6.defaultMatchWidth], i = e.match(a);
    if (!i)
      return null;
    const s = i[0], o = n && t6.parsePatterns[n] || t6.parsePatterns[t6.defaultParseWidth], l = Array.isArray(o) ? NR(o, (u) => u.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      RR(o, (u) => u.test(s))
    );
    let c;
    c = t6.valueCallback ? t6.valueCallback(l) : l, c = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(c)
    ) : c;
    const d = e.slice(s.length);
    return { value: c, rest: d };
  };
}
function RR(t6, e) {
  for (const r in t6)
    if (Object.prototype.hasOwnProperty.call(t6, r) && e(t6[r]))
      return r;
}
function NR(t6, e) {
  for (let r = 0; r < t6.length; r++)
    if (e(t6[r]))
      return r;
}
var dy = {};
dy.buildMatchPatternFn = IR;
function IR(t6) {
  return (e, r = {}) => {
    const n = e.match(t6.matchPattern);
    if (!n) return null;
    const a = n[0], i = e.match(t6.parsePattern);
    if (!i) return null;
    let s = t6.valueCallback ? t6.valueCallback(i[0]) : i[0];
    s = r.valueCallback ? r.valueCallback(s) : s;
    const o = e.slice(a.length);
    return { value: s, rest: o };
  };
}
Rd.match = void 0;
var Fa = cy, AR = dy;
const FR = /^(\d+)(th|st|nd|rd)?/i, LR = /\d+/i, WR = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, $R = {
  any: [/^b/i, /^(a|c)/i]
}, zR = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, jR = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, HR = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, BR = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, YR = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, VR = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, qR = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, UR = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
Rd.match = {
  ordinalNumber: (0, AR.buildMatchPatternFn)({
    matchPattern: FR,
    parsePattern: LR,
    valueCallback: (t6) => parseInt(t6, 10)
  }),
  era: (0, Fa.buildMatchFn)({
    matchPatterns: WR,
    defaultMatchWidth: "wide",
    parsePatterns: $R,
    defaultParseWidth: "any"
  }),
  quarter: (0, Fa.buildMatchFn)({
    matchPatterns: zR,
    defaultMatchWidth: "wide",
    parsePatterns: jR,
    defaultParseWidth: "any",
    valueCallback: (t6) => t6 + 1
  }),
  month: (0, Fa.buildMatchFn)({
    matchPatterns: HR,
    defaultMatchWidth: "wide",
    parsePatterns: BR,
    defaultParseWidth: "any"
  }),
  day: (0, Fa.buildMatchFn)({
    matchPatterns: YR,
    defaultMatchWidth: "wide",
    parsePatterns: VR,
    defaultParseWidth: "any"
  }),
  dayPeriod: (0, Fa.buildMatchFn)({
    matchPatterns: qR,
    defaultMatchWidth: "any",
    parsePatterns: UR,
    defaultParseWidth: "any"
  })
};
Md.enUS = void 0;
var XR = Cd, GR = Ed, KR = Td, QR = Pd, JR = Rd;
Md.enUS = {
  code: "en-US",
  formatDistance: XR.formatDistance,
  formatLong: GR.formatLong,
  formatRelative: KR.formatRelative,
  localize: QR.localize,
  match: JR.match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var Wn = {};
Object.defineProperty(Wn, "__esModule", {
  value: true
});
Wn.default = void 0;
Wn.default = {
  dateRangeWrapper: "rdrDateRangeWrapper",
  calendarWrapper: "rdrCalendarWrapper",
  dateDisplay: "rdrDateDisplay",
  dateDisplayItem: "rdrDateDisplayItem",
  dateDisplayItemActive: "rdrDateDisplayItemActive",
  monthAndYearWrapper: "rdrMonthAndYearWrapper",
  monthAndYearPickers: "rdrMonthAndYearPickers",
  nextPrevButton: "rdrNextPrevButton",
  month: "rdrMonth",
  weekDays: "rdrWeekDays",
  weekDay: "rdrWeekDay",
  days: "rdrDays",
  day: "rdrDay",
  dayNumber: "rdrDayNumber",
  dayPassive: "rdrDayPassive",
  dayToday: "rdrDayToday",
  dayStartOfWeek: "rdrDayStartOfWeek",
  dayEndOfWeek: "rdrDayEndOfWeek",
  daySelected: "rdrDaySelected",
  dayDisabled: "rdrDayDisabled",
  dayStartOfMonth: "rdrDayStartOfMonth",
  dayEndOfMonth: "rdrDayEndOfMonth",
  dayWeekend: "rdrDayWeekend",
  dayStartPreview: "rdrDayStartPreview",
  dayInPreview: "rdrDayInPreview",
  dayEndPreview: "rdrDayEndPreview",
  dayHovered: "rdrDayHovered",
  dayActive: "rdrDayActive",
  inRange: "rdrInRange",
  endEdge: "rdrEndEdge",
  startEdge: "rdrStartEdge",
  prevButton: "rdrPprevButton",
  nextButton: "rdrNextButton",
  selected: "rdrSelected",
  months: "rdrMonths",
  monthPicker: "rdrMonthPicker",
  yearPicker: "rdrYearPicker",
  dateDisplayWrapper: "rdrDateDisplayWrapper",
  definedRangesWrapper: "rdrDefinedRangesWrapper",
  staticRanges: "rdrStaticRanges",
  staticRange: "rdrStaticRange",
  inputRanges: "rdrInputRanges",
  inputRange: "rdrInputRange",
  inputRangeInput: "rdrInputRangeInput",
  dateRangePickerWrapper: "rdrDateRangePickerWrapper",
  staticRangeLabel: "rdrStaticRangeLabel",
  staticRangeSelected: "rdrStaticRangeSelected",
  monthName: "rdrMonthName",
  infiniteMonths: "rdrInfiniteMonths",
  monthsVertical: "rdrMonthsVertical",
  monthsHorizontal: "rdrMonthsHorizontal"
};
var $o = {};
Object.defineProperty($o, "__esModule", {
  value: true
});
$o.ariaLabelsShape = void 0;
var kr = ZR(Ar);
function ZR(t6) {
  return t6 && t6.__esModule ? t6 : { default: t6 };
}
$o.ariaLabelsShape = kr.default.shape({
  dateInput: kr.default.objectOf(kr.default.shape({
    startDate: kr.default.string,
    endDate: kr.default.string
  })),
  monthPicker: kr.default.string,
  yearPicker: kr.default.string,
  prevButton: kr.default.string,
  nextButton: kr.default.string
});
Object.defineProperty(Si, "__esModule", {
  value: true
});
Si.default = void 0;
var Me = sN(ee), ce = xa(Ar), eN = Rr, Fh = xa(Lo), Lh = xa(Wo), ts = Lr, un = xa(en), tN = xa(sy), rN = gR, Ie = Ln, nN = Md, aN = xa(Wn), iN = $o;
function xa(t6) {
  return t6 && t6.__esModule ? t6 : { default: t6 };
}
function uy(t6) {
  if (typeof WeakMap != "function") return null;
  var e = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (uy = function(n) {
    return n ? r : e;
  })(t6);
}
function sN(t6, e) {
  if (t6 && t6.__esModule) return t6;
  if (t6 === null || typeof t6 != "object" && typeof t6 != "function") return { default: t6 };
  var r = uy(e);
  if (r && r.has(t6)) return r.get(t6);
  var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t6) if (i !== "default" && Object.prototype.hasOwnProperty.call(t6, i)) {
    var s = a ? Object.getOwnPropertyDescriptor(t6, i) : null;
    s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = t6[i];
  }
  return n.default = t6, r && r.set(t6, n), n;
}
function to() {
  return to = Object.assign ? Object.assign.bind() : function(t6) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t6[n] = r[n]);
    }
    return t6;
  }, to.apply(this, arguments);
}
function zt(t6, e, r) {
  return e = oN(e), e in t6 ? Object.defineProperty(t6, e, { value: r, enumerable: true, configurable: true, writable: true }) : t6[e] = r, t6;
}
function oN(t6) {
  var e = lN(t6, "string");
  return typeof e == "symbol" ? e : String(e);
}
function lN(t6, e) {
  if (typeof t6 != "object" || !t6) return t6;
  var r = t6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t6, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t6);
}
class fa extends Me.PureComponent {
  constructor(e, r) {
    var n;
    super(e, r), n = this, zt(this, "focusToDate", function(a) {
      let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : n.props, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      if (!i.scroll.enabled) {
        if (s && i.preventSnapRefocus) {
          const c = (0, Ie.differenceInCalendarMonths)(a, n.state.focusedDate), d = i.calendarFocus === "forwards" && c >= 0, u = i.calendarFocus === "backwards" && c <= 0;
          if ((d || u) && Math.abs(c) < i.months)
            return;
        }
        n.setState({
          focusedDate: a
        });
        return;
      }
      const o = (0, Ie.differenceInCalendarMonths)(a, i.minDate, n.dateOptions), l = n.list.getVisibleRange();
      s && l.includes(o) || (n.isFirstRender = true, n.list.scrollTo(o), n.setState({
        focusedDate: a
      }));
    }), zt(this, "updateShownDate", function() {
      let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : n.props;
      const i = a.scroll.enabled ? {
        ...a,
        months: n.list.getVisibleRange().length
      } : a, s = (0, ts.calcFocusDate)(n.state.focusedDate, i);
      n.focusToDate(s, i);
    }), zt(this, "updatePreview", (a) => {
      if (!a) {
        this.setState({
          preview: null
        });
        return;
      }
      const i = {
        startDate: a,
        endDate: a,
        color: this.props.color
      };
      this.setState({
        preview: i
      });
    }), zt(this, "changeShownDate", function(a) {
      let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "set";
      const {
        focusedDate: s
      } = n.state, {
        onShownDateChange: o,
        minDate: l,
        maxDate: c
      } = n.props, d = {
        monthOffset: () => (0, Ie.addMonths)(s, a),
        setMonth: () => (0, Ie.setMonth)(s, a),
        setYear: () => (0, Ie.setYear)(s, a),
        set: () => a
      }, u = (0, Ie.min)([(0, Ie.max)([d[i](), l]), c]);
      n.focusToDate(u, n.props, false), o && o(u);
    }), zt(this, "handleRangeFocusChange", (a, i) => {
      this.props.onRangeFocusChange && this.props.onRangeFocusChange([a, i]);
    }), zt(this, "handleScroll", () => {
      const {
        onShownDateChange: a,
        minDate: i
      } = this.props, {
        focusedDate: s
      } = this.state, {
        isFirstRender: o
      } = this, l = this.list.getVisibleRange();
      if (l[0] === void 0) return;
      const c = (0, Ie.addMonths)(i, l[0] || 0);
      !(0, Ie.isSameMonth)(c, s) && !o && (this.setState({
        focusedDate: c
      }), a && a(c)), this.isFirstRender = false;
    }), zt(this, "renderMonthAndYear", (a, i, s) => {
      const {
        showMonthArrow: o,
        minDate: l,
        maxDate: c,
        showMonthAndYearPickers: d,
        ariaLabels: u
      } = s, f = (c || fa.defaultProps.maxDate).getFullYear(), h = (l || fa.defaultProps.minDate).getFullYear(), g = this.styles;
      return /* @__PURE__ */ Me.default.createElement("div", {
        onMouseUp: (m) => m.stopPropagation(),
        className: g.monthAndYearWrapper
      }, o ? /* @__PURE__ */ Me.default.createElement("button", {
        type: "button",
        className: (0, un.default)(g.nextPrevButton, g.prevButton),
        onClick: () => i(-1, "monthOffset"),
        "aria-label": u.prevButton
      }, /* @__PURE__ */ Me.default.createElement("i", null)) : null, d ? /* @__PURE__ */ Me.default.createElement("span", {
        className: g.monthAndYearPickers
      }, /* @__PURE__ */ Me.default.createElement("span", {
        className: g.monthPicker
      }, /* @__PURE__ */ Me.default.createElement("select", {
        value: a.getMonth(),
        onChange: (m) => i(m.target.value, "setMonth"),
        "aria-label": u.monthPicker
      }, this.state.monthNames.map((m, p) => /* @__PURE__ */ Me.default.createElement("option", {
        key: p,
        value: p
      }, m)))), /* @__PURE__ */ Me.default.createElement("span", {
        className: g.monthAndYearDivider
      }), /* @__PURE__ */ Me.default.createElement("span", {
        className: g.yearPicker
      }, /* @__PURE__ */ Me.default.createElement("select", {
        value: a.getFullYear(),
        onChange: (m) => i(m.target.value, "setYear"),
        "aria-label": u.yearPicker
      }, new Array(f - h + 1).fill(f).map((m, p) => {
        const w = m - p;
        return /* @__PURE__ */ Me.default.createElement("option", {
          key: w,
          value: w
        }, w);
      })))) : /* @__PURE__ */ Me.default.createElement("span", {
        className: g.monthAndYearPickers
      }, this.state.monthNames[a.getMonth()], " ", a.getFullYear()), o ? /* @__PURE__ */ Me.default.createElement("button", {
        type: "button",
        className: (0, un.default)(g.nextPrevButton, g.nextButton),
        onClick: () => i(1, "monthOffset"),
        "aria-label": u.nextButton
      }, /* @__PURE__ */ Me.default.createElement("i", null)) : null);
    }), zt(this, "renderDateDisplay", () => {
      const {
        focusedRange: a,
        color: i,
        ranges: s,
        rangeColors: o,
        dateDisplayFormat: l,
        editableDateInputs: c,
        startDatePlaceholder: d,
        endDatePlaceholder: u,
        ariaLabels: f
      } = this.props, h = o[a[0]] || i, g = this.styles;
      return /* @__PURE__ */ Me.default.createElement("div", {
        className: g.dateDisplayWrapper
      }, s.map((m, p) => m.showDateDisplay === false || m.disabled && !m.showDateDisplay ? null : /* @__PURE__ */ Me.default.createElement("div", {
        className: g.dateDisplay,
        key: p,
        style: {
          color: m.color || h
        }
      }, /* @__PURE__ */ Me.default.createElement(Lh.default, {
        className: (0, un.default)(g.dateDisplayItem, {
          [g.dateDisplayItemActive]: a[0] === p && a[1] === 0
        }),
        readOnly: !c,
        disabled: m.disabled,
        value: m.startDate,
        placeholder: d,
        dateOptions: this.dateOptions,
        dateDisplayFormat: l,
        ariaLabel: f.dateInput && f.dateInput[m.key] && f.dateInput[m.key].startDate,
        onChange: this.onDragSelectionEnd,
        onFocus: () => this.handleRangeFocusChange(p, 0)
      }), /* @__PURE__ */ Me.default.createElement(Lh.default, {
        className: (0, un.default)(g.dateDisplayItem, {
          [g.dateDisplayItemActive]: a[0] === p && a[1] === 1
        }),
        readOnly: !c,
        disabled: m.disabled,
        value: m.endDate,
        placeholder: u,
        dateOptions: this.dateOptions,
        dateDisplayFormat: l,
        ariaLabel: f.dateInput && f.dateInput[m.key] && f.dateInput[m.key].endDate,
        onChange: this.onDragSelectionEnd,
        onFocus: () => this.handleRangeFocusChange(p, 1)
      }))));
    }), zt(this, "onDragSelectionStart", (a) => {
      const {
        onChange: i,
        dragSelectionEnabled: s
      } = this.props;
      s ? this.setState({
        drag: {
          status: true,
          range: {
            startDate: a,
            endDate: a
          },
          disablePreview: true
        }
      }) : i && i(a);
    }), zt(this, "onDragSelectionEnd", (a) => {
      const {
        updateRange: i,
        displayMode: s,
        onChange: o,
        dragSelectionEnabled: l
      } = this.props;
      if (!l) return;
      if (s === "date" || !this.state.drag.status) {
        o && o(a);
        return;
      }
      const c = {
        startDate: this.state.drag.range.startDate,
        endDate: a
      };
      s !== "dateRange" || (0, Ie.isSameDay)(c.startDate, a) ? this.setState({
        drag: {
          status: false,
          range: {}
        }
      }, () => o && o(a)) : this.setState({
        drag: {
          status: false,
          range: {}
        }
      }, () => {
        i && i(c);
      });
    }), zt(this, "onDragSelectionMove", (a) => {
      const {
        drag: i
      } = this.state;
      !i.status || !this.props.dragSelectionEnabled || this.setState({
        drag: {
          status: i.status,
          range: {
            startDate: i.range.startDate,
            endDate: a
          },
          disablePreview: true
        }
      });
    }), zt(this, "estimateMonthSize", (a, i) => {
      const {
        direction: s,
        minDate: o
      } = this.props, {
        scrollArea: l
      } = this.state;
      if (i && (this.listSizeCache = i, i[a]))
        return i[a];
      if (s === "horizontal") return l.monthWidth;
      const c = (0, Ie.addMonths)(o, a), {
        start: d,
        end: u
      } = (0, ts.getMonthDisplayRange)(c, this.dateOptions);
      return (0, Ie.differenceInDays)(u, d, this.dateOptions) + 1 > 7 * 5 ? l.longMonthHeight : l.monthHeight;
    }), this.dateOptions = {
      locale: e.locale
    }, e.weekStartsOn !== void 0 && (this.dateOptions.weekStartsOn = e.weekStartsOn), this.styles = (0, ts.generateStyles)([aN.default, e.classNames]), this.listSizeCache = {}, this.isFirstRender = true, this.state = {
      monthNames: this.getMonthNames(),
      focusedDate: (0, ts.calcFocusDate)(null, e),
      drag: {
        status: false,
        range: {
          startDate: null,
          endDate: null
        },
        disablePreview: false
      },
      scrollArea: this.calcScrollArea(e)
    };
  }
  getMonthNames() {
    return [...Array(12).keys()].map((e) => this.props.locale.localize.month(e));
  }
  calcScrollArea(e) {
    const {
      direction: r,
      months: n,
      scroll: a
    } = e;
    if (!a.enabled) return {
      enabled: false
    };
    const i = a.longMonthHeight || a.monthHeight;
    return r === "vertical" ? {
      enabled: true,
      monthHeight: a.monthHeight || 220,
      longMonthHeight: i || 260,
      calendarWidth: "auto",
      calendarHeight: (a.calendarHeight || i || 240) * n
    } : {
      enabled: true,
      monthWidth: a.monthWidth || 332,
      calendarWidth: (a.calendarWidth || a.monthWidth || 332) * n,
      monthHeight: i || 300,
      calendarHeight: i || 300
    };
  }
  componentDidMount() {
    this.props.scroll.enabled && setTimeout(() => this.focusToDate(this.state.focusedDate));
  }
  componentDidUpdate(e) {
    const n = {
      dateRange: "ranges",
      date: "date"
    }[this.props.displayMode];
    this.props[n] !== e[n] && this.updateShownDate(this.props), (e.locale !== this.props.locale || e.weekStartsOn !== this.props.weekStartsOn) && (this.dateOptions = {
      locale: this.props.locale
    }, this.props.weekStartsOn !== void 0 && (this.dateOptions.weekStartsOn = this.props.weekStartsOn), this.setState({
      monthNames: this.getMonthNames()
    })), (0, rN.shallowEqualObjects)(e.scroll, this.props.scroll) || this.setState({
      scrollArea: this.calcScrollArea(this.props)
    });
  }
  renderWeekdays() {
    const e = /* @__PURE__ */ new Date();
    return /* @__PURE__ */ Me.default.createElement("div", {
      className: this.styles.weekDays
    }, (0, Ie.eachDayOfInterval)({
      start: (0, Ie.startOfWeek)(e, this.dateOptions),
      end: (0, Ie.endOfWeek)(e, this.dateOptions)
    }).map((r, n) => /* @__PURE__ */ Me.default.createElement("span", {
      className: this.styles.weekDay,
      key: n
    }, (0, Ie.format)(r, this.props.weekdayDisplayFormat, this.dateOptions))));
  }
  render() {
    const {
      showDateDisplay: e,
      onPreviewChange: r,
      scroll: n,
      direction: a,
      disabledDates: i,
      disabledDay: s,
      maxDate: o,
      minDate: l,
      rangeColors: c,
      color: d,
      navigatorRenderer: u,
      className: f,
      preview: h
    } = this.props, {
      scrollArea: g,
      focusedDate: m
    } = this.state, p = a === "vertical", w = u || this.renderMonthAndYear, b = this.props.ranges.map((k, v) => ({
      ...k,
      color: k.color || c[v] || d
    }));
    return /* @__PURE__ */ Me.default.createElement("div", {
      className: (0, un.default)(this.styles.calendarWrapper, f),
      onMouseUp: () => this.setState({
        drag: {
          status: false,
          range: {}
        }
      }),
      onMouseLeave: () => {
        this.setState({
          drag: {
            status: false,
            range: {}
          }
        });
      }
    }, e && this.renderDateDisplay(), w(m, this.changeShownDate, this.props), n.enabled ? /* @__PURE__ */ Me.default.createElement("div", null, p && this.renderWeekdays(this.dateOptions), /* @__PURE__ */ Me.default.createElement("div", {
      className: (0, un.default)(this.styles.infiniteMonths, p ? this.styles.monthsVertical : this.styles.monthsHorizontal),
      onMouseLeave: () => r && r(),
      style: {
        width: g.calendarWidth + 11,
        height: g.calendarHeight + 11
      },
      onScroll: this.handleScroll
    }, /* @__PURE__ */ Me.default.createElement(tN.default, {
      length: (0, Ie.differenceInCalendarMonths)((0, Ie.endOfMonth)(o), (0, Ie.addDays)((0, Ie.startOfMonth)(l), -1), this.dateOptions),
      treshold: 500,
      type: "variable",
      ref: (k) => this.list = k,
      itemSizeEstimator: this.estimateMonthSize,
      axis: p ? "y" : "x",
      itemRenderer: (k, v) => {
        const x = (0, Ie.addMonths)(l, k);
        return /* @__PURE__ */ Me.default.createElement(Fh.default, to({}, this.props, {
          onPreviewChange: r || this.updatePreview,
          preview: h || this.state.preview,
          ranges: b,
          key: v,
          drag: this.state.drag,
          dateOptions: this.dateOptions,
          disabledDates: i,
          disabledDay: s,
          month: x,
          onDragSelectionStart: this.onDragSelectionStart,
          onDragSelectionEnd: this.onDragSelectionEnd,
          onDragSelectionMove: this.onDragSelectionMove,
          onMouseLeave: () => r && r(),
          styles: this.styles,
          style: p ? {
            height: this.estimateMonthSize(k)
          } : {
            height: g.monthHeight,
            width: this.estimateMonthSize(k)
          },
          showMonthName: true,
          showWeekDays: !p
        }));
      }
    }))) : /* @__PURE__ */ Me.default.createElement("div", {
      className: (0, un.default)(this.styles.months, p ? this.styles.monthsVertical : this.styles.monthsHorizontal)
    }, new Array(this.props.months).fill(null).map((k, v) => {
      let x = (0, Ie.addMonths)(this.state.focusedDate, v);
      return this.props.calendarFocus === "backwards" && (x = (0, Ie.subMonths)(this.state.focusedDate, this.props.months - 1 - v)), /* @__PURE__ */ Me.default.createElement(Fh.default, to({}, this.props, {
        onPreviewChange: r || this.updatePreview,
        preview: h || this.state.preview,
        ranges: b,
        key: v,
        drag: this.state.drag,
        dateOptions: this.dateOptions,
        disabledDates: i,
        disabledDay: s,
        month: x,
        onDragSelectionStart: this.onDragSelectionStart,
        onDragSelectionEnd: this.onDragSelectionEnd,
        onDragSelectionMove: this.onDragSelectionMove,
        onMouseLeave: () => r && r(),
        styles: this.styles,
        showWeekDays: !p || v === 0,
        showMonthName: !p || v > 0
      }));
    })));
  }
}
fa.defaultProps = {
  showMonthArrow: true,
  showMonthAndYearPickers: true,
  disabledDates: [],
  disabledDay: () => {
  },
  classNames: {},
  locale: nN.enUS,
  ranges: [],
  focusedRange: [0, 0],
  dateDisplayFormat: "MMM d, yyyy",
  monthDisplayFormat: "MMM yyyy",
  weekdayDisplayFormat: "E",
  dayDisplayFormat: "d",
  showDateDisplay: true,
  showPreview: true,
  displayMode: "date",
  months: 1,
  color: "#3d91ff",
  scroll: {
    enabled: false
  },
  direction: "vertical",
  maxDate: (0, Ie.addYears)(/* @__PURE__ */ new Date(), 20),
  minDate: (0, Ie.addYears)(/* @__PURE__ */ new Date(), -100),
  rangeColors: ["#3d91ff", "#3ecf8e", "#fed14c"],
  startDatePlaceholder: "Early",
  endDatePlaceholder: "Continuous",
  editableDateInputs: false,
  dragSelectionEnabled: true,
  fixedHeight: false,
  calendarFocus: "forwards",
  preventSnapRefocus: false,
  ariaLabels: {}
};
fa.propTypes = {
  showMonthArrow: ce.default.bool,
  showMonthAndYearPickers: ce.default.bool,
  disabledDates: ce.default.array,
  disabledDay: ce.default.func,
  minDate: ce.default.object,
  maxDate: ce.default.object,
  date: ce.default.object,
  onChange: ce.default.func,
  onPreviewChange: ce.default.func,
  onRangeFocusChange: ce.default.func,
  classNames: ce.default.object,
  locale: ce.default.object,
  shownDate: ce.default.object,
  onShownDateChange: ce.default.func,
  ranges: ce.default.arrayOf(eN.rangeShape),
  preview: ce.default.shape({
    startDate: ce.default.object,
    endDate: ce.default.object,
    color: ce.default.string
  }),
  dateDisplayFormat: ce.default.string,
  monthDisplayFormat: ce.default.string,
  weekdayDisplayFormat: ce.default.string,
  weekStartsOn: ce.default.number,
  dayDisplayFormat: ce.default.string,
  focusedRange: ce.default.arrayOf(ce.default.number),
  initialFocusedRange: ce.default.arrayOf(ce.default.number),
  months: ce.default.number,
  className: ce.default.string,
  showDateDisplay: ce.default.bool,
  showPreview: ce.default.bool,
  displayMode: ce.default.oneOf(["dateRange", "date"]),
  color: ce.default.string,
  updateRange: ce.default.func,
  scroll: ce.default.shape({
    enabled: ce.default.bool,
    monthHeight: ce.default.number,
    longMonthHeight: ce.default.number,
    monthWidth: ce.default.number,
    calendarWidth: ce.default.number,
    calendarHeight: ce.default.number
  }),
  direction: ce.default.oneOf(["vertical", "horizontal"]),
  startDatePlaceholder: ce.default.string,
  endDatePlaceholder: ce.default.string,
  navigatorRenderer: ce.default.func,
  rangeColors: ce.default.arrayOf(ce.default.string),
  editableDateInputs: ce.default.bool,
  dragSelectionEnabled: ce.default.bool,
  fixedHeight: ce.default.bool,
  calendarFocus: ce.default.string,
  preventSnapRefocus: ce.default.bool,
  ariaLabels: iN.ariaLabelsShape
};
Si.default = fa;
Object.defineProperty(Oi, "__esModule", {
  value: true
});
Oi.default = void 0;
var Wh = fN(ee), Yn = zo(Ar), fy = zo(Si), cN = Rr, Ol = Lr, rr = Ln, dN = zo(en), uN = zo(Wn);
function zo(t6) {
  return t6 && t6.__esModule ? t6 : { default: t6 };
}
function hy(t6) {
  if (typeof WeakMap != "function") return null;
  var e = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (hy = function(n) {
    return n ? r : e;
  })(t6);
}
function fN(t6, e) {
  if (t6 && t6.__esModule) return t6;
  if (t6 === null || typeof t6 != "object" && typeof t6 != "function") return { default: t6 };
  var r = hy(e);
  if (r && r.has(t6)) return r.get(t6);
  var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t6) if (i !== "default" && Object.prototype.hasOwnProperty.call(t6, i)) {
    var s = a ? Object.getOwnPropertyDescriptor(t6, i) : null;
    s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = t6[i];
  }
  return n.default = t6, r && r.set(t6, n), n;
}
function nc() {
  return nc = Object.assign ? Object.assign.bind() : function(t6) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t6[n] = r[n]);
    }
    return t6;
  }, nc.apply(this, arguments);
}
function rs(t6, e, r) {
  return e = hN(e), e in t6 ? Object.defineProperty(t6, e, { value: r, enumerable: true, configurable: true, writable: true }) : t6[e] = r, t6;
}
function hN(t6) {
  var e = gN(t6, "string");
  return typeof e == "symbol" ? e : String(e);
}
function gN(t6, e) {
  if (typeof t6 != "object" || !t6) return t6;
  var r = t6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t6, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t6);
}
class Nd extends Wh.Component {
  constructor(e, r) {
    var n;
    super(e, r), n = this, rs(this, "calcNewSelection", function(a) {
      let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      const s = n.props.focusedRange || n.state.focusedRange, {
        ranges: o,
        onChange: l,
        maxDate: c,
        moveRangeOnFirstSelection: d,
        retainEndDateOnFirstSelection: u,
        disabledDates: f
      } = n.props, h = s[0], g = o[h];
      if (!g || !l) return {};
      let {
        startDate: m,
        endDate: p
      } = g;
      const w = /* @__PURE__ */ new Date();
      let b;
      if (!i)
        m = a.startDate, p = a.endDate;
      else if (s[1] === 0) {
        const x = (0, rr.differenceInCalendarDays)(p || w, m), _ = () => d ? (0, rr.addDays)(a, x) : u ? !p || (0, rr.isBefore)(a, p) ? p : a : a || w;
        m = a, p = _(), c && (p = (0, rr.min)([p, c])), b = [s[0], 1];
      } else
        p = a;
      let k = s[1] === 0;
      (0, rr.isBefore)(p, m) && (k = !k, [m, p] = [p, m]);
      const v = f.filter((x) => (0, rr.isWithinInterval)(x, {
        start: m,
        end: p
      }));
      return v.length > 0 && (k ? m = (0, rr.addDays)((0, rr.max)(v), 1) : p = (0, rr.addDays)((0, rr.min)(v), -1)), b || (b = [(0, Ol.findNextRangeIndex)(n.props.ranges, s[0]), 0]), {
        wasValid: !(v.length > 0),
        range: {
          startDate: m,
          endDate: p
        },
        nextFocusRange: b
      };
    }), rs(this, "setSelection", (a, i) => {
      const {
        onChange: s,
        ranges: o,
        onRangeFocusChange: l
      } = this.props, d = (this.props.focusedRange || this.state.focusedRange)[0], u = o[d];
      if (!u) return;
      const f = this.calcNewSelection(a, i);
      s({
        [u.key || `range${d + 1}`]: {
          ...u,
          ...f.range
        }
      }), this.setState({
        focusedRange: f.nextFocusRange,
        preview: null
      }), l && l(f.nextFocusRange);
    }), rs(this, "handleRangeFocusChange", (a) => {
      this.setState({
        focusedRange: a
      }), this.props.onRangeFocusChange && this.props.onRangeFocusChange(a);
    }), rs(this, "updatePreview", (a) => {
      var c;
      if (!a) {
        this.setState({
          preview: null
        });
        return;
      }
      const {
        rangeColors: i,
        ranges: s
      } = this.props, o = this.props.focusedRange || this.state.focusedRange, l = ((c = s[o[0]]) == null ? void 0 : c.color) || i[o[0]] || l;
      this.setState({
        preview: {
          ...a.range,
          color: l
        }
      });
    }), this.state = {
      focusedRange: e.initialFocusedRange || [(0, Ol.findNextRangeIndex)(e.ranges), 0],
      preview: null
    }, this.styles = (0, Ol.generateStyles)([uN.default, e.classNames]);
  }
  render() {
    return /* @__PURE__ */ Wh.default.createElement(fy.default, nc({
      focusedRange: this.state.focusedRange,
      onRangeFocusChange: this.handleRangeFocusChange,
      preview: this.state.preview,
      onPreviewChange: (e) => {
        this.updatePreview(e ? this.calcNewSelection(e) : null);
      }
    }, this.props, {
      displayMode: "dateRange",
      className: (0, dN.default)(this.styles.dateRangeWrapper, this.props.className),
      onChange: this.setSelection,
      updateRange: (e) => this.setSelection(e, false),
      ref: (e) => {
        this.calendar = e;
      }
    }));
  }
}
Nd.defaultProps = {
  classNames: {},
  ranges: [],
  moveRangeOnFirstSelection: false,
  retainEndDateOnFirstSelection: false,
  rangeColors: ["#3d91ff", "#3ecf8e", "#fed14c"],
  disabledDates: []
};
Nd.propTypes = {
  ...fy.default.propTypes,
  onChange: Yn.default.func,
  onRangeFocusChange: Yn.default.func,
  className: Yn.default.string,
  ranges: Yn.default.arrayOf(cN.rangeShape),
  moveRangeOnFirstSelection: Yn.default.bool,
  retainEndDateOnFirstSelection: Yn.default.bool
};
Oi.default = Nd;
var jo = {}, Ei = {}, Jr = {};
Object.defineProperty(Jr, "__esModule", {
  value: true
});
Jr.createStaticRanges = gy;
Jr.defaultStaticRanges = Jr.defaultInputRanges = void 0;
var Pe = Ln;
const nt = {
  startOfWeek: (0, Pe.startOfWeek)(/* @__PURE__ */ new Date()),
  endOfWeek: (0, Pe.endOfWeek)(/* @__PURE__ */ new Date()),
  startOfLastWeek: (0, Pe.startOfWeek)((0, Pe.addDays)(/* @__PURE__ */ new Date(), -7)),
  endOfLastWeek: (0, Pe.endOfWeek)((0, Pe.addDays)(/* @__PURE__ */ new Date(), -7)),
  startOfToday: (0, Pe.startOfDay)(/* @__PURE__ */ new Date()),
  endOfToday: (0, Pe.endOfDay)(/* @__PURE__ */ new Date()),
  startOfYesterday: (0, Pe.startOfDay)((0, Pe.addDays)(/* @__PURE__ */ new Date(), -1)),
  endOfYesterday: (0, Pe.endOfDay)((0, Pe.addDays)(/* @__PURE__ */ new Date(), -1)),
  startOfMonth: (0, Pe.startOfMonth)(/* @__PURE__ */ new Date()),
  endOfMonth: (0, Pe.endOfMonth)(/* @__PURE__ */ new Date()),
  startOfLastMonth: (0, Pe.startOfMonth)((0, Pe.addMonths)(/* @__PURE__ */ new Date(), -1)),
  endOfLastMonth: (0, Pe.endOfMonth)((0, Pe.addMonths)(/* @__PURE__ */ new Date(), -1))
}, mN = {
  range: {},
  isSelected(t6) {
    const e = this.range();
    return (0, Pe.isSameDay)(t6.startDate, e.startDate) && (0, Pe.isSameDay)(t6.endDate, e.endDate);
  }
};
function gy(t6) {
  return t6.map((e) => ({
    ...mN,
    ...e
  }));
}
Jr.defaultStaticRanges = gy([{
  label: "Today",
  range: () => ({
    startDate: nt.startOfToday,
    endDate: nt.endOfToday
  })
}, {
  label: "Yesterday",
  range: () => ({
    startDate: nt.startOfYesterday,
    endDate: nt.endOfYesterday
  })
}, {
  label: "This Week",
  range: () => ({
    startDate: nt.startOfWeek,
    endDate: nt.endOfWeek
  })
}, {
  label: "Last Week",
  range: () => ({
    startDate: nt.startOfLastWeek,
    endDate: nt.endOfLastWeek
  })
}, {
  label: "This Month",
  range: () => ({
    startDate: nt.startOfMonth,
    endDate: nt.endOfMonth
  })
}, {
  label: "Last Month",
  range: () => ({
    startDate: nt.startOfLastMonth,
    endDate: nt.endOfLastMonth
  })
}]);
Jr.defaultInputRanges = [{
  label: "days up to today",
  range(t6) {
    return {
      startDate: (0, Pe.addDays)(nt.startOfToday, (Math.max(Number(t6), 1) - 1) * -1),
      endDate: nt.endOfToday
    };
  },
  getCurrentValue(t6) {
    return (0, Pe.isSameDay)(t6.endDate, nt.endOfToday) ? t6.startDate ? (0, Pe.differenceInCalendarDays)(nt.endOfToday, t6.startDate) + 1 : "∞" : "-";
  }
}, {
  label: "days starting today",
  range(t6) {
    const e = /* @__PURE__ */ new Date();
    return {
      startDate: e,
      endDate: (0, Pe.addDays)(e, Math.max(Number(t6), 1) - 1)
    };
  },
  getCurrentValue(t6) {
    return (0, Pe.isSameDay)(t6.startDate, nt.startOfToday) ? t6.endDate ? (0, Pe.differenceInCalendarDays)(t6.endDate, nt.startOfToday) + 1 : "∞" : "-";
  }
}];
var Ho = {};
Object.defineProperty(Ho, "__esModule", {
  value: true
});
Ho.default = void 0;
var ns = bN(ee), wt = pN(Ar);
function pN(t6) {
  return t6 && t6.__esModule ? t6 : { default: t6 };
}
function my(t6) {
  if (typeof WeakMap != "function") return null;
  var e = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (my = function(n) {
    return n ? r : e;
  })(t6);
}
function bN(t6, e) {
  if (t6 && t6.__esModule) return t6;
  if (t6 === null || typeof t6 != "object" && typeof t6 != "function") return { default: t6 };
  var r = my(e);
  if (r && r.has(t6)) return r.get(t6);
  var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t6) if (i !== "default" && Object.prototype.hasOwnProperty.call(t6, i)) {
    var s = a ? Object.getOwnPropertyDescriptor(t6, i) : null;
    s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = t6[i];
  }
  return n.default = t6, r && r.set(t6, n), n;
}
function yN(t6, e, r) {
  return e = vN(e), e in t6 ? Object.defineProperty(t6, e, { value: r, enumerable: true, configurable: true, writable: true }) : t6[e] = r, t6;
}
function vN(t6) {
  var e = xN(t6, "string");
  return typeof e == "symbol" ? e : String(e);
}
function xN(t6, e) {
  if (typeof t6 != "object" || !t6) return t6;
  var r = t6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t6, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t6);
}
const $h = 0, zh = 99999;
class Id extends ns.Component {
  constructor(e, r) {
    super(e, r), yN(this, "onChange", (n) => {
      const {
        onChange: a
      } = this.props;
      let i = parseInt(n.target.value, 10);
      i = isNaN(i) ? 0 : Math.max(Math.min(zh, i), $h), a(i);
    });
  }
  shouldComponentUpdate(e) {
    const {
      value: r,
      label: n,
      placeholder: a
    } = this.props;
    return r !== e.value || n !== e.label || a !== e.placeholder;
  }
  render() {
    const {
      label: e,
      placeholder: r,
      value: n,
      styles: a,
      onBlur: i,
      onFocus: s
    } = this.props;
    return /* @__PURE__ */ ns.default.createElement("div", {
      className: a.inputRange
    }, /* @__PURE__ */ ns.default.createElement("input", {
      className: a.inputRangeInput,
      placeholder: r,
      value: n,
      min: $h,
      max: zh,
      onChange: this.onChange,
      onFocus: s,
      onBlur: i
    }), /* @__PURE__ */ ns.default.createElement("span", {
      className: a.inputRangeLabel
    }, e));
  }
}
Id.propTypes = {
  value: wt.default.oneOfType([wt.default.string, wt.default.number]),
  label: wt.default.oneOfType([wt.default.element, wt.default.node]).isRequired,
  placeholder: wt.default.string,
  styles: wt.default.shape({
    inputRange: wt.default.string,
    inputRangeInput: wt.default.string,
    inputRangeLabel: wt.default.string
  }).isRequired,
  onBlur: wt.default.func.isRequired,
  onFocus: wt.default.func.isRequired,
  onChange: wt.default.func.isRequired
};
Id.defaultProps = {
  value: "",
  placeholder: "-"
};
Ho.default = Id;
Object.defineProperty(Ei, "__esModule", {
  value: true
});
Ei.default = void 0;
var fn = _N(ee), Nt = Bo(Ar), hn = Bo(Wn), jh = Jr, wN = Rr, kN = Bo(Ho), Hh = Bo(en);
function Bo(t6) {
  return t6 && t6.__esModule ? t6 : { default: t6 };
}
function py(t6) {
  if (typeof WeakMap != "function") return null;
  var e = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (py = function(n) {
    return n ? r : e;
  })(t6);
}
function _N(t6, e) {
  if (t6 && t6.__esModule) return t6;
  if (t6 === null || typeof t6 != "object" && typeof t6 != "function") return { default: t6 };
  var r = py(e);
  if (r && r.has(t6)) return r.get(t6);
  var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t6) if (i !== "default" && Object.prototype.hasOwnProperty.call(t6, i)) {
    var s = a ? Object.getOwnPropertyDescriptor(t6, i) : null;
    s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = t6[i];
  }
  return n.default = t6, r && r.set(t6, n), n;
}
function ON(t6, e, r) {
  return e = SN(e), e in t6 ? Object.defineProperty(t6, e, { value: r, enumerable: true, configurable: true, writable: true }) : t6[e] = r, t6;
}
function SN(t6) {
  var e = DN(t6, "string");
  return typeof e == "symbol" ? e : String(e);
}
function DN(t6, e) {
  if (typeof t6 != "object" || !t6) return t6;
  var r = t6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t6, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t6);
}
class Ad extends fn.Component {
  constructor(e) {
    super(e), ON(this, "handleRangeChange", (r) => {
      const {
        onChange: n,
        ranges: a,
        focusedRange: i
      } = this.props, s = a[i[0]];
      !n || !s || n({
        [s.key || `range${i[0] + 1}`]: {
          ...s,
          ...r
        }
      });
    }), this.state = {
      rangeOffset: 0,
      focusedInput: -1
    };
  }
  getRangeOptionValue(e) {
    const {
      ranges: r = [],
      focusedRange: n = []
    } = this.props;
    if (typeof e.getCurrentValue != "function")
      return "";
    const a = r[n[0]] || {};
    return e.getCurrentValue(a) || "";
  }
  getSelectedRange(e, r) {
    const n = e.findIndex((i) => !i.startDate || !i.endDate || i.disabled ? false : r.isSelected(i));
    return {
      selectedRange: e[n],
      focusedRangeIndex: n
    };
  }
  render() {
    const {
      headerContent: e,
      footerContent: r,
      onPreviewChange: n,
      inputRanges: a,
      staticRanges: i,
      ranges: s,
      renderStaticRangeLabel: o,
      rangeColors: l,
      className: c
    } = this.props;
    return /* @__PURE__ */ fn.default.createElement("div", {
      className: (0, Hh.default)(hn.default.definedRangesWrapper, c)
    }, e, /* @__PURE__ */ fn.default.createElement("div", {
      className: hn.default.staticRanges
    }, i.map((d, u) => {
      const {
        selectedRange: f,
        focusedRangeIndex: h
      } = this.getSelectedRange(s, d);
      let g;
      return d.hasCustomRendering ? g = o(d) : g = d.label, /* @__PURE__ */ fn.default.createElement("button", {
        type: "button",
        className: (0, Hh.default)(hn.default.staticRange, {
          [hn.default.staticRangeSelected]: !!f
        }),
        style: {
          color: f ? f.color || l[h] : null
        },
        key: u,
        onClick: () => this.handleRangeChange(d.range(this.props)),
        onFocus: () => n && n(d.range(this.props)),
        onMouseOver: () => n && n(d.range(this.props)),
        onMouseLeave: () => {
          n && n();
        }
      }, /* @__PURE__ */ fn.default.createElement("span", {
        tabIndex: -1,
        className: hn.default.staticRangeLabel
      }, g));
    })), /* @__PURE__ */ fn.default.createElement("div", {
      className: hn.default.inputRanges
    }, a.map((d, u) => /* @__PURE__ */ fn.default.createElement(kN.default, {
      key: u,
      styles: hn.default,
      label: d.label,
      onFocus: () => this.setState({
        focusedInput: u,
        rangeOffset: 0
      }),
      onBlur: () => this.setState({
        rangeOffset: 0
      }),
      onChange: (f) => this.handleRangeChange(d.range(f, this.props)),
      value: this.getRangeOptionValue(d)
    }))), r);
  }
}
Ad.propTypes = {
  inputRanges: Nt.default.array,
  staticRanges: Nt.default.array,
  ranges: Nt.default.arrayOf(wN.rangeShape),
  focusedRange: Nt.default.arrayOf(Nt.default.number),
  onPreviewChange: Nt.default.func,
  onChange: Nt.default.func,
  footerContent: Nt.default.any,
  headerContent: Nt.default.any,
  rangeColors: Nt.default.arrayOf(Nt.default.string),
  className: Nt.default.string,
  renderStaticRangeLabel: Nt.default.func
};
Ad.defaultProps = {
  inputRanges: jh.defaultInputRanges,
  staticRanges: jh.defaultStaticRanges,
  ranges: [],
  rangeColors: ["#3d91ff", "#3ecf8e", "#fed14c"],
  focusedRange: [0, 0]
};
Ei.default = Ad;
Object.defineProperty(jo, "__esModule", {
  value: true
});
jo.default = void 0;
var as = TN(ee), MN = Ti(Ar), by = Ti(Oi), yy = Ti(Ei), Bh = Lr, CN = Ti(en), EN = Ti(Wn);
function Ti(t6) {
  return t6 && t6.__esModule ? t6 : { default: t6 };
}
function vy(t6) {
  if (typeof WeakMap != "function") return null;
  var e = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (vy = function(n) {
    return n ? r : e;
  })(t6);
}
function TN(t6, e) {
  if (t6 && t6.__esModule) return t6;
  if (t6 === null || typeof t6 != "object" && typeof t6 != "function") return { default: t6 };
  var r = vy(e);
  if (r && r.has(t6)) return r.get(t6);
  var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t6) if (i !== "default" && Object.prototype.hasOwnProperty.call(t6, i)) {
    var s = a ? Object.getOwnPropertyDescriptor(t6, i) : null;
    s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = t6[i];
  }
  return n.default = t6, r && r.set(t6, n), n;
}
function ro() {
  return ro = Object.assign ? Object.assign.bind() : function(t6) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t6[n] = r[n]);
    }
    return t6;
  }, ro.apply(this, arguments);
}
let Fd = class extends as.Component {
  constructor(e) {
    super(e), this.state = {
      focusedRange: [(0, Bh.findNextRangeIndex)(e.ranges), 0]
    }, this.styles = (0, Bh.generateStyles)([EN.default, e.classNames]);
  }
  render() {
    const {
      focusedRange: e
    } = this.state;
    return /* @__PURE__ */ as.default.createElement("div", {
      className: (0, CN.default)(this.styles.dateRangePickerWrapper, this.props.className)
    }, /* @__PURE__ */ as.default.createElement(yy.default, ro({
      focusedRange: e,
      onPreviewChange: (r) => this.dateRange.updatePreview(r ? this.dateRange.calcNewSelection(r, typeof r == "string") : null)
    }, this.props, {
      range: this.props.ranges[e[0]],
      className: void 0
    })), /* @__PURE__ */ as.default.createElement(by.default, ro({
      onRangeFocusChange: (r) => this.setState({
        focusedRange: r
      }),
      focusedRange: e
    }, this.props, {
      ref: (r) => this.dateRange = r,
      className: void 0
    })));
  }
};
Fd.defaultProps = {};
Fd.propTypes = {
  ...by.default.propTypes,
  ...yy.default.propTypes,
  className: MN.default.string
};
jo.default = Fd;
(function(t6) {
  Object.defineProperty(t6, "__esModule", {
    value: true
  }), Object.defineProperty(t6, "Calendar", {
    enumerable: true,
    get: function() {
      return r.default;
    }
  }), Object.defineProperty(t6, "DateRange", {
    enumerable: true,
    get: function() {
      return e.default;
    }
  }), Object.defineProperty(t6, "DateRangePicker", {
    enumerable: true,
    get: function() {
      return n.default;
    }
  }), Object.defineProperty(t6, "DefinedRange", {
    enumerable: true,
    get: function() {
      return a.default;
    }
  }), Object.defineProperty(t6, "createStaticRanges", {
    enumerable: true,
    get: function() {
      return i.createStaticRanges;
    }
  }), Object.defineProperty(t6, "defaultInputRanges", {
    enumerable: true,
    get: function() {
      return i.defaultInputRanges;
    }
  }), Object.defineProperty(t6, "defaultStaticRanges", {
    enumerable: true,
    get: function() {
      return i.defaultStaticRanges;
    }
  });
  var e = s(Oi), r = s(Si), n = s(jo), a = s(Ei), i = Jr;
  function s(o) {
    return o && o.__esModule ? o : { default: o };
  }
})(Yp);
const _r = {
  "date-container": "dateRangePicker-module__date-container__jh9s-",
  "date-input": "dateRangePicker-module__date-input__xt4gs",
  "date-popup": "dateRangePicker-module__date-popup__TQHMh",
  "date-menu": "dateRangePicker-module__date-menu__Nv5nr",
  "date-menuItem": "dateRangePicker-module__date-menuItem__AYJ32",
  "date-menuItemActive": "dateRangePicker-module__date-menuItemActive__AzWJe",
  "date-menuItemCustom": "dateRangePicker-module__date-menuItemCustom__x1-M9",
  "date-calendar": "dateRangePicker-module__date-calendar__M10Iv"
}, PN = [
  { label: "Today", range: () => ({ startDate: /* @__PURE__ */ new Date(), endDate: /* @__PURE__ */ new Date() }) },
  { label: "Yesterday", range: () => {
    const t6 = /* @__PURE__ */ new Date();
    return t6.setDate(t6.getDate() - 1), { startDate: t6, endDate: t6 };
  } },
  { label: "Last 7 Days", range: () => ({ startDate: Wt(/* @__PURE__ */ new Date(), -6), endDate: /* @__PURE__ */ new Date() }) },
  { label: "Last 30 Days", range: () => ({ startDate: Wt(/* @__PURE__ */ new Date(), -29), endDate: /* @__PURE__ */ new Date() }) },
  { label: "This Month", range: () => {
    const t6 = /* @__PURE__ */ new Date();
    return { startDate: new Date(t6.getFullYear(), t6.getMonth(), 1), endDate: t6 };
  } },
  { label: "Last Month", range: () => {
    const t6 = /* @__PURE__ */ new Date(), e = new Date(t6.getFullYear(), t6.getMonth() - 1, 1), r = new Date(t6.getFullYear(), t6.getMonth(), 0);
    return { startDate: e, endDate: r };
  } }
], eI = ({
  value: t6,
  onChange: e,
  minData: r,
  maxData: n,
  quickRanges: a
}) => {
  const [i, s] = ve([
    {
      startDate: /* @__PURE__ */ new Date(),
      endDate: Wt(/* @__PURE__ */ new Date(), 6),
      key: "selection"
    }
  ]), [o, l] = ve(false), [c, d] = ve(2), [u, f] = ve({}), h = Gt(null), g = Gt(null), m = a ?? PN, p = t6 ? [{ ...t6, key: "selection" }] : i;
  lt(() => {
    const v = () => {
      d(window.innerWidth < 900 ? 1 : 2);
    };
    return v(), window.addEventListener("resize", v), () => window.removeEventListener("resize", v);
  }, []), lt(() => {
    if (o && g.current && h.current) {
      const v = g.current.getBoundingClientRect(), x = h.current.offsetWidth || 700, _ = window.innerWidth - v.left, T = v.right, S = {
        right: "auto",
        left: 0
      };
      _ < x && T > x && (S.right = 0, S.left = "auto"), window.innerWidth < x && (S.left = 0, S.right = 0, S.width = "100vw", S.maxWidth = "100vw"), f(S);
    }
  }, [o, c]);
  const w = (v) => {
    t6 || s([v.selection]), e == null || e(v.selection.startDate, v.selection.endDate);
  }, b = (v) => {
    const { startDate: x, endDate: _ } = v();
    t6 || s([{ startDate: x, endDate: _, key: "selection" }]), e == null || e(x, _), l(false);
  }, k = (v) => Zs(v, "dd, MMM yyyy");
  return lt(() => {
    if (!o) return;
    const v = (x) => {
      h.current && !h.current.contains(x.target) && g.current && !g.current.contains(x.target) && l(false);
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [o]), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: _r["date-container"], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: g,
        type: "text",
        readOnly: true,
        value: `${k(p[0].startDate)} - ${k(p[0].endDate)}`,
        onClick: () => l(!o),
        className: _r["date-input"]
      }
    ),
    o && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: h,
        className: _r["date-popup"],
        style: u,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: _r["date-menu"], children: [
            m.map((v, x) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: _r["date-menuItem"] + (x === 2 ? " " + _r["date-menuItemActive"] : ""),
                onClick: () => b(v.range),
                children: v.label
              },
              v.label
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: _r["date-menuItem"] + " " + _r["date-menuItemCustom"],
                onClick: () => l(false),
                children: "Custom Range"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: _r["date-calendar"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Yp.DateRange,
            {
              editableDateInputs: true,
              onChange: w,
              moveRangeOnFirstSelection: false,
              ranges: p,
              months: c,
              rangeColors: ["#6c3cff"],
              minDate: r,
              maxDate: n
            }
          ) })
        ]
      }
    )
  ] });
};

export { Cn as C, FN as F, GN as G, HN as H, KN as K, Ny as N, QN as Q, S1 as S, UN as U, VN as V, WN as W, Xy as X, YN as Y, XN as a, eI as e, qN as q, u0 as u, zd as z };
