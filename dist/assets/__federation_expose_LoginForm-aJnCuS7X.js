import { importShared } from './__federation_fn_import-Dhgpavzc.js';
import { j as jsxRuntimeExports } from './jsx-runtime-Bje5h6iL.js';
import { Q as QN, V as VN, N as Ny, z as zd, F as FN, S as S1 } from './ui-mathilde-web-DDewq026.js';
import { useAuth } from './__federation_expose_AutenticationService-xRPwCfF-.js';
import { c as create$3, a as create$6, F as Formik, b as Form } from './index.esm-C3AIIQzA.js';
import { h, g } from './react-google-recaptcha-v3.esm-CNxFKMIh.js';
import { S as Swal } from './sweetalert2.esm.all-N-5-GXph.js';

const loginValidationSchema = create$3({
  username: create$6().email("Correo electrónico inválido").required("El correo electrónico es requerido"),
  password: create$6().required("La contraseña es requerida")
});
const forgotPasswordValidationSchema = create$3({
  email: create$6().email("Correo electrónico inválido").required("El correo electrónico es requerido")
});

const React = await importShared('react');
const {useState,useEffect} = React;

const {Link,useNavigate} = await importShared('react-router-dom');
const LoginFormContent = () => {
  const { handleLogin } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { executeRecaptcha } = g();
  const initialValues = {
    username: "",
    password: ""
  };
  const handleSubmit = async (values) => {
    if (!executeRecaptcha) {
      Swal.fire({
        title: "Error",
        text: "No se pudo verificar la seguridad. Por favor, recarga la página e intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Aceptar"
      });
      return;
    }
    setIsLoading(true);
    try {
      const token = await executeRecaptcha("login");
      await handleLogin(values.username, values.password, token);
    } catch (error) {
      console.error("Error al ejecutar reCAPTCHA:", error);
      Swal.fire({
        title: "Error de verificación",
        text: "No se pudo verificar la seguridad. Por favor, intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Aceptar"
      });
    } finally {
      setIsLoading(false);
    }
  };
  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const handleClick = () => {
    sessionStorage.setItem("previousPath", window.location.pathname);
    navigate("/validation");
  };
  const forgotPasswordInitialValues = {
    email: ""
  };
  const handleForgotPassword = (values) => {
    setEmail(values.email);
    handleClick();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex w-full", children: [
    isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute flex items-center justify-center size-full z-10", children: [
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-4", style: { boxShadow: "0px 12px 30px 0px rgba(0, 0, 0, 0.2)" }, children: [
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(QN, { description: "Iniciando..." }),
        " "
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2/4 border-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VN, { "data-testid": "layout-outside" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2/4 flex items-center ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-9/12 px-10 bg-white mx-auto rounded-lg flex flex-col item-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Formik,
        {
          initialValues,
          validationSchema: loginValidationSchema,
          onSubmit: handleSubmit,
          children: ({ errors, touched, handleChange, handleBlur, values }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl text-center font-medium mb-6", children: "INICIAR SESIÓN" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ny,
                {
                  name: "username",
                  type: "email",
                  placeholder: "Correo electrónico",
                  value: values.username,
                  onChange: handleChange,
                  onBlur: handleBlur,
                  "data-testid": "input-username",
                  disabled: isLoading
                }
              ),
              errors.username && touched.username && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-sm my-2", children: errors.username })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                zd,
                {
                  name: "password",
                  placeholder: "Contraseña",
                  value: values.password,
                  onChange: handleChange,
                  onBlur: handleBlur,
                  "data-testid": "password-password",
                  disabled: isLoading
                }
              ),
              errors.password && touched.password && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-sm my-2", children: errors.password })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-sm underline text-gray-600 cursor-pointer",
                onClick: toggleModal,
                children: "Olvidaste la contraseña"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end my-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              FN,
              {
                txtBtn: "Continuar",
                typeButton: "default",
                full: true,
                type: "submit",
                disabled: isLoading,
                "data-testid": "button-Continuar"
              }
            ) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "¿Aún no tienes una cuenta de Mathilde Ads?   " }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-base cursor-pointer underline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", children: "Regístrate" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(S1, { width: "40%", isOpen: isModalOpen, onClose: toggleModal, "data-testid": "modal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Si deseas cambiar tu contraseña ingresa el ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "correo eléctronico" }),
          " registrado en la plataforma."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Formik,
          {
            initialValues: forgotPasswordInitialValues,
            validationSchema: forgotPasswordValidationSchema,
            onSubmit: handleForgotPassword,
            children: ({ errors, touched, handleChange, handleBlur, values }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full my-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Ny,
                  {
                    name: "email",
                    type: "email",
                    placeholder: "Correo electronico",
                    value: values.email,
                    onChange: handleChange,
                    onBlur: handleBlur,
                    required: true,
                    "data-testid": "input-email"
                  }
                ),
                errors.email && touched.email && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-sm my-2", children: errors.email })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                FN,
                {
                  txtBtn: "Continuar",
                  typeButton: "default",
                  full: false,
                  type: "submit",
                  disabled: false,
                  className: "",
                  "data-testid": "button-Continuar-modal"
                }
              ) })
            ] })
          }
        )
      ] }) })
    ] }) })
  ] });
};
const LoginForm = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    h,
    {
      reCaptchaKey: "6LdCXC8rAAAAAL-Cg8XZHkdLSkwVc7Q2KOwvPfhq",
      scriptProps: {
        async: false,
        defer: false,
        appendTo: "head",
        nonce: void 0
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoginFormContent, {})
    }
  );
};

export { LoginForm as default };
