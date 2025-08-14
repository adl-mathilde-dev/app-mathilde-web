import { importShared } from './__federation_fn_import-BKb1h4mk.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CsM3lTE3.js';
import { p as p_, a as gp, i as il, s as s_, c as br } from './ui-mathilde-web-D4BhIZOZ.js';
import { useAuth } from './__federation_expose_AutenticationService-Dca20n4F.js';
import { F as Formik, a as Form } from './formik.esm-H811wbTi.js';
import { c as create$3, a as create$6 } from './index.esm-t9Jx3sQ-.js';

await importShared('react');

const loginValidationSchema = create$3({
  username: create$6().email("Correo electrónico inválido").required("El correo electrónico es requerido"),
  password: create$6().required("La contraseña es requerida")
});
const forgotPasswordValidationSchema = create$3({
  email: create$6().email("Correo electrónico inválido").required("El correo electrónico es requerido")
});

const React = await importShared('react');
const {useState} = React;

const {Link,useNavigate} = await importShared('react-router-dom');
const LoginForm = () => {
  const { login } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: ""
  };
  const handleSubmit = (values) => {
    login(values.username, values.password);
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2/4 border-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p_, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-2/4 flex items-center ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-9/12 px-10 bg-white mx-auto rounded-lg flex flex-col item-center", children: [
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
                  gp,
                  {
                    name: "username",
                    type: "email",
                    placeholder: "Correo electrónico",
                    value: values.username,
                    onChange: handleChange,
                    onBlur: handleBlur
                  }
                ),
                errors.username && touched.username && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-sm my-2", children: errors.username })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  il,
                  {
                    name: "password",
                    placeholder: "Contraseña",
                    value: values.password,
                    onChange: handleChange,
                    onBlur: handleBlur
                  }
                ),
                errors.password && touched.password && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-sm my-2", children: errors.password })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm underline text-gray-600 cursor-pointer", onClick: toggleModal, children: "Olvidaste la contraseña" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end my-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                s_,
                {
                  txtBtn: "Continuar",
                  typeButton: "default",
                  full: true,
                  type: "submit",
                  disabled: false
                }
              ) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "¿Aún no tienes una cuenta de Mathilde Ads?   " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-base cursor-pointer underline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", children: "Regístrate" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(br, { width: "40%", isOpen: isModalOpen, onClose: toggleModal, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6", children: [
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
                  gp,
                  {
                    name: "email",
                    type: "email",
                    placeholder: "Correo electronico",
                    value: values.email,
                    onChange: handleChange,
                    onBlur: handleBlur,
                    required: true
                  }
                ),
                errors.email && touched.email && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-sm my-2", children: errors.email })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                s_,
                {
                  txtBtn: "Continuar",
                  typeButton: "default",
                  full: false,
                  type: "submit",
                  disabled: false,
                  className: ""
                }
              ) })
            ] })
          }
        )
      ] }) })
    ] })
  ] });
};

export { LoginForm as default };
