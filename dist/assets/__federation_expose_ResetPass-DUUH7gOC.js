import { importShared } from './__federation_fn_import-Dhgpavzc.js';
import { j as jsxRuntimeExports } from './jsx-runtime-Bje5h6iL.js';
import { V as VN, U as UN, F as FN } from './ui-mathilde-web-DDewq026.js';
import { c as create$3, a as create$6, d as create$9, F as Formik, b as Form } from './index.esm-C3AIIQzA.js';

const resetPasswordSchema = create$3().shape({
  password: create$6().required("La contraseña es obligatoria").min(8, "Debe tener al menos 8 caracteres").matches(/\d/, "Debe contener al menos un número").matches(/[A-Z]/, "Debe contener al menos una mayúscula").matches(/[a-z]/, "Debe contener al menos una minúscula").matches(/[!@#$%^&*(),.?":{}|<>]/, "Debe contener al menos un carácter especial"),
  confirmPassword: create$6().required("Confirma tu contraseña").oneOf([create$9("password")], "Las contraseñas no coinciden")
});

await importShared('react');
const {useNavigate} = await importShared('react-router-dom');
const ResetPass = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      console.log("Valores del formulario:", values);
      navigate("/");
    } catch (error) {
      console.error("Error al actualizar la contraseña:", error);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2/4 border-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VN, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2/4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Formik,
      {
        initialValues: {
          password: "",
          confirmPassword: ""
        },
        validationSchema: resetPasswordSchema,
        onSubmit: handleSubmit,
        children: (formikProps) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { className: "w-3/5 px-10 bg-white mx-auto rounded-lg flex flex-col justify-center h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl text-center mb-6", children: "Crea una nueva contraseña para ingresar a la plataforma." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(UN, { formik: formikProps }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            FN,
            {
              txtBtn: "Confirmar",
              typeButton: "default",
              full: true,
              type: "submit",
              disabled: !formikProps.isValid || formikProps.isSubmitting
            }
          ) })
        ] })
      }
    ) })
  ] });
};

export { ResetPass as default };
