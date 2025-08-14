import { importShared } from './__federation_fn_import-Dhgpavzc.js';
import { j as jsxRuntimeExports } from './jsx-runtime-Bje5h6iL.js';
import { V as VN, N as Ny } from './ui-mathilde-web-DDewq026.js';
import { a as axios } from './sweetalert2.esm.all-CcrGM5VA.js';
import { useAuth } from './__federation_expose_AutenticationService-Bb6x-Atq.js';

const postRequest = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(`Error en la solicitud a ${url}:`, error);
    throw error;
  }
};
const verifyOtp = async (code) => {
  return postRequest("https://mthmocks.pruebasmathilde.com/castlemock/mock/rest/project/nIVSsr/application/YPlsJX/reset", { code });
};

const React = await importShared('react');
const {useRef,useState,useEffect} = React;
const {useNavigate} = await importShared('react-router-dom');
const ValidationPass = () => {
  const { login } = useAuth();
  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirectPath, setRedirectPath] = useState("/");
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    const currentPath = sessionStorage.getItem("previousPath") || "/";
    console.log("Previous path:", currentPath);
    if (currentPath === "/") {
      setRedirectPath("/reset");
    } else if (currentPath === "/register") {
      setRedirectPath("/dashboard");
    }
  }, []);
  useEffect(() => {
    let interval = void 0;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1e3);
    } else if (timeLeft === 0) {
      setIsActive(false);
      if (interval) {
        clearInterval(interval);
      }
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timeLeft, isActive]);
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };
  const handleInput = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      if (index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    } else {
      e.target.value = "";
    }
    if (index === inputsRef.current.length - 1 && value) {
      const otp = inputsRef.current.map((input) => input?.value).join("");
      console.log("OTP ingresado:", otp);
      handleVerifyOtp(Number(otp));
    }
  };
  const handleVerifyOtp = async (otp) => {
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await verifyOtp(otp);
      if (response.success) {
        if (redirectPath === "/dashboard") {
          const email = sessionStorage.getItem("email");
          const password = sessionStorage.getItem("password");
          login("admin@avaldigitallabs.com", "123");
        } else {
          navigate(redirectPath);
        }
      } else {
        setErrorMessage("El código OTP ingresado es incorrecto. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al verificar OTP:", error);
      setErrorMessage("Ocurrió un error al verificar el OTP. Intenta nuevamente más tarde.");
    } finally {
      setLoading(false);
    }
  };
  const handleResendCode = () => {
    setTimeLeft(60);
    setIsActive(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2/4 border-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VN, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2/4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "w-3/5 px-10 bg-white mx-auto rounded-lg flex flex-col justify-center h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl text-center mb-6", children: "Hemos enviado un código OTP al correo electrónico registrado para activar tu cuenta." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full justify-evenly", children: Array.from({ length: 6 }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ny,
        {
          type: "text",
          classInclude: "mth-input-code text-center",
          maxLength: 1,
          onChange: (e) => handleInput(e, index),
          ref: (el) => {
            inputsRef.current[index] = el;
          }
        }
      ) }, index)) }),
      errorMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-center", children: errorMessage }),
      loading && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-500 text-center", children: "Verificando OTP..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between", children: isActive ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm underline text-gray-600 cursor-pointer", children: [
        formatTime(timeLeft),
        " para solicitar un nuevo código"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleResendCode,
          className: "text-sm underline text-gray-600 cursor-pointer",
          children: "Reenviar código"
        }
      ) })
    ] }) })
  ] });
};

export { ValidationPass as default };
