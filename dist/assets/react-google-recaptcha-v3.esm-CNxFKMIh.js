import { importShared } from './__federation_fn_import-Dhgpavzc.js';

const e = await importShared('react');
const {createContext:t,useState:r,useRef:o,useEffect:n,useCallback:a,useMemo:c,useContext:i} = e;

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
var s = function() {
  return s = Object.assign || function(e3) {
    for (var t2, r2 = 1, o2 = arguments.length; r2 < o2; r2++) for (var n2 in t2 = arguments[r2]) Object.prototype.hasOwnProperty.call(t2, n2) && (e3[n2] = t2[n2]);
    return e3;
  }, s.apply(this, arguments);
};
var f, p = function(e3) {
  var t2;
  e3 ? function(e4) {
    if (e4) for (; e4.lastChild; ) e4.lastChild.remove();
  }("string" == typeof e3 ? document.getElementById(e3) : e3) : (t2 = document.querySelector(".grecaptcha-badge")) && t2.parentNode && document.body.removeChild(t2.parentNode);
}, d = function(e3, t2) {
  p(t2), window.___grecaptcha_cfg = void 0;
  var r2 = document.querySelector("#" + e3);
  r2 && r2.remove(), function() {
    var e4 = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');
    e4 && e4.remove();
  }();
}, y = function(e3) {
  var t2 = e3.render, r2 = e3.onLoadCallbackName, o2 = e3.language, n2 = e3.onLoad, a2 = e3.useRecaptchaNet, c2 = e3.useEnterprise, i2 = e3.scriptProps, s2 = void 0 === i2 ? {} : i2, u2 = s2.nonce, l2 = void 0 === u2 ? "" : u2, f2 = s2.defer, p2 = void 0 !== f2 && f2, d2 = s2.async, y2 = void 0 !== d2 && d2, m2 = s2.id, v2 = void 0 === m2 ? "" : m2, b2 = s2.appendTo, h2 = v2 || "google-recaptcha-v3";
  if (function(e4) {
    return !!document.querySelector("#" + e4);
  }(h2)) n2();
  else {
    var g2 = function(e4) {
      return "https://www." + (e4.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (e4.useEnterprise ? "enterprise.js" : "api.js");
    }({ useEnterprise: c2, useRecaptchaNet: a2 }), S2 = document.createElement("script");
    S2.id = h2, S2.src = g2 + "?render=" + t2 + ("explicit" === t2 ? "&onload=" + r2 : "") + (o2 ? "&hl=" + o2 : ""), l2 && (S2.nonce = l2), S2.defer = !!p2, S2.async = !!y2, S2.onload = n2, ("body" === b2 ? document.body : document.getElementsByTagName("head")[0]).appendChild(S2);
  }
}, m = function(e3) {
  console.warn(e3);
};
!function(e3) {
  e3.SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
}(f || (f = {}));
var v = t({ executeRecaptcha: function() {
  throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider");
} }); v.Consumer;
function h(t2) {
  var i2 = t2.reCaptchaKey, u2 = t2.useEnterprise, l2 = void 0 !== u2 && u2, p2 = t2.useRecaptchaNet, b2 = void 0 !== p2 && p2, h2 = t2.scriptProps, g2 = t2.language, S2 = t2.container, w2 = t2.children, $2 = r(null), C2 = $2[0], P2 = $2[1], x2 = o(i2), E2 = JSON.stringify(h2), R2 = JSON.stringify(null == S2 ? void 0 : S2.parameters);
  n(function() {
    if (i2) {
      var e3 = (null == h2 ? void 0 : h2.id) || "google-recaptcha-v3", t3 = (null == h2 ? void 0 : h2.onLoadCallbackName) || "onRecaptchaLoadCallback";
      window[t3] = function() {
        var e4 = l2 ? window.grecaptcha.enterprise : window.grecaptcha, t4 = s({ badge: "inline", size: "invisible", sitekey: i2 }, (null == S2 ? void 0 : S2.parameters) || {});
        x2.current = e4.render(null == S2 ? void 0 : S2.element, t4);
      };
      return y({ render: (null == S2 ? void 0 : S2.element) ? "explicit" : i2, onLoadCallbackName: t3, useEnterprise: l2, useRecaptchaNet: b2, scriptProps: h2, language: g2, onLoad: function() {
        if (window && window.grecaptcha) {
          var e4 = l2 ? window.grecaptcha.enterprise : window.grecaptcha;
          e4.ready(function() {
            P2(e4);
          });
        } else m("<GoogleRecaptchaProvider /> " + f.SCRIPT_NOT_AVAILABLE);
      }}), function() {
        d(e3, null == S2 ? void 0 : S2.element);
      };
    }
    m("<GoogleReCaptchaProvider /> recaptcha key not provided");
  }, [l2, b2, E2, R2, g2, i2, null == S2 ? void 0 : S2.element]);
  var M2 = a(function(e3) {
    if (!C2 || !C2.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
    return C2.execute(x2.current, { action: e3 });
  }, [C2, x2]), N2 = c(function() {
    return { executeRecaptcha: C2 ? M2 : void 0, container: null == S2 ? void 0 : S2.element };
  }, [M2, C2, null == S2 ? void 0 : S2.element]);
  return e.createElement(v.Provider, { value: N2 }, w2);
}
var g = function() {
  return i(v);
};
function w(e3, t2) {
  return e3(t2 = { exports: {} }, t2.exports), t2.exports;
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
}
var $ = "function" == typeof Symbol && Symbol.for, C = $ ? Symbol.for("react.element") : 60103, P = $ ? Symbol.for("react.portal") : 60106, x = $ ? Symbol.for("react.fragment") : 60107, E = $ ? Symbol.for("react.strict_mode") : 60108, R = $ ? Symbol.for("react.profiler") : 60114, M = $ ? Symbol.for("react.provider") : 60109, N = $ ? Symbol.for("react.context") : 60110, O = $ ? Symbol.for("react.async_mode") : 60111, _ = $ ? Symbol.for("react.concurrent_mode") : 60111, T = $ ? Symbol.for("react.forward_ref") : 60112, j = $ ? Symbol.for("react.suspense") : 60113, L = $ ? Symbol.for("react.suspense_list") : 60120, k = $ ? Symbol.for("react.memo") : 60115, F = $ ? Symbol.for("react.lazy") : 60116, A = $ ? Symbol.for("react.block") : 60121, V = $ ? Symbol.for("react.fundamental") : 60117, z = $ ? Symbol.for("react.responder") : 60118, G = $ ? Symbol.for("react.scope") : 60119;
function I(e3) {
  if ("object" == typeof e3 && null !== e3) {
    var t2 = e3.$$typeof;
    switch (t2) {
      case C:
        switch (e3 = e3.type) {
          case O:
          case _:
          case x:
          case R:
          case E:
          case j:
            return e3;
          default:
            switch (e3 = e3 && e3.$$typeof) {
              case N:
              case T:
              case F:
              case k:
              case M:
                return e3;
              default:
                return t2;
            }
        }
      case P:
        return t2;
    }
  }
}
function D(e3) {
  return I(e3) === _;
}
var q = { AsyncMode: O, ConcurrentMode: _, ContextConsumer: N, ContextProvider: M, Element: C, ForwardRef: T, Fragment: x, Lazy: F, Memo: k, Portal: P, Profiler: R, StrictMode: E, Suspense: j, isAsyncMode: function(e3) {
  return D(e3) || I(e3) === O;
}, isConcurrentMode: D, isContextConsumer: function(e3) {
  return I(e3) === N;
}, isContextProvider: function(e3) {
  return I(e3) === M;
}, isElement: function(e3) {
  return "object" == typeof e3 && null !== e3 && e3.$$typeof === C;
}, isForwardRef: function(e3) {
  return I(e3) === T;
}, isFragment: function(e3) {
  return I(e3) === x;
}, isLazy: function(e3) {
  return I(e3) === F;
}, isMemo: function(e3) {
  return I(e3) === k;
}, isPortal: function(e3) {
  return I(e3) === P;
}, isProfiler: function(e3) {
  return I(e3) === R;
}, isStrictMode: function(e3) {
  return I(e3) === E;
}, isSuspense: function(e3) {
  return I(e3) === j;
}, isValidElementType: function(e3) {
  return "string" == typeof e3 || "function" == typeof e3 || e3 === x || e3 === _ || e3 === R || e3 === E || e3 === j || e3 === L || "object" == typeof e3 && null !== e3 && (e3.$$typeof === F || e3.$$typeof === k || e3.$$typeof === M || e3.$$typeof === N || e3.$$typeof === T || e3.$$typeof === V || e3.$$typeof === z || e3.$$typeof === G || e3.$$typeof === A);
}, typeOf: I }, B = w(function(e3, t2) {
}), J = (B.AsyncMode, B.ConcurrentMode, B.ContextConsumer, B.ContextProvider, B.Element, B.ForwardRef, B.Fragment, B.Lazy, B.Memo, B.Portal, B.Profiler, B.StrictMode, B.Suspense, B.isAsyncMode, B.isConcurrentMode, B.isContextConsumer, B.isContextProvider, B.isElement, B.isForwardRef, B.isFragment, B.isLazy, B.isMemo, B.isPortal, B.isProfiler, B.isStrictMode, B.isSuspense, B.isValidElementType, B.typeOf, w(function(e3) {
  e3.exports = q ;
})), H = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, Q = {};
Q[J.ForwardRef] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, Q[J.Memo] = H;

export { g, h };
