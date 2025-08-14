import { importShared } from './__federation_fn_import-BKb1h4mk.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CsM3lTE3.js';
import { a as gp, M as Mp, s as s_, i as il, b as b_ } from './ui-mathilde-web-D4BhIZOZ.js';
import { S as SidebarMth } from './sidebar-pro-DCtabkHD.js';
import { R as RegisterFormService } from './registerService-fstnFxm8.js';
import { u as usePasswordValidation } from './usePasswordValidation-BNEe5UB2.js';
import { F as Formik, a as Form } from './formik.esm-H811wbTi.js';
import { c as create$3, d as create$5, a as create$6, b as create$9 } from './index.esm-t9Jx3sQ-.js';

const updateUserSchema = create$3().shape({
  name: create$6().required("El nombre es obligatorio").min(2, "El nombre debe tener al menos 2 caracteres"),
  firtsName: create$6().required("Los apellidos son obligatorios").min(2, "Los apellidos deben tener al menos 2 caracteres"),
  company: create$6().required("La empresa es obligatoria"),
  role: create$6().required("El rol es obligatorio"),
  phone: create$5().required("El número de celular es obligatorio").min(10, "El número debe tener al menos 10 dígitos")
  // .max(10, 'El número no debe exceder 10 dígitos'),
});

const updatePasswordSchema = create$3().shape({
  currentPassword: create$6().required("La contraseña actual es obligatoria"),
  password: create$6().required("La nueva contraseña es obligatoria").min(8, "Debe tener al menos 8 caracteres").matches(/\d/, "Debe contener al menos un número").matches(/[A-Z]/, "Debe contener al menos una mayúscula").matches(/[a-z]/, "Debe contener al menos una minúscula").matches(/[!@#$%^&*(),.?":{}|<>]/, "Debe contener al menos un carácter especial"),
  confirmPassword: create$6().required("Confirma tu contraseña").oneOf([create$9("password")], "Las contraseñas no coinciden")
});

const React = await importShared('react');
const {useState} = React;
const SettingsUser = () => {
  const { roles } = RegisterFormService;
  const [isEditing, setIsEditing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);
  const [formSetting, setformSetting] = useState({
    name: "",
    firtsName: "",
    company: "",
    phone: "",
    role: "",
    email: ""
  });
  const { name, firtsName, company, phone, role, email } = formSetting;
  usePasswordValidation();
  const handleUserInfoSubmit = async (values) => {
    try {
      console.log("Valores del formulario de información:", values);
      setformSetting(values);
      setIsEditing(false);
    } catch (error) {
      console.error("Error al actualizar la información:", error);
    }
  };
  const handlePasswordSubmit = async (values) => {
    try {
      console.log("Valores del formulario de contraseña:", values);
      setIsVisible(false);
      setIsUpdatePassword(false);
    } catch (error) {
      console.error("Error al actualizar la contraseña:", error);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen w-full flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMth, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen w-full container-space", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold mb-3", children: "CONFIGURACIÓN" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-3/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "info-basic", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Formik,
          {
            enableReinitialize: true,
            initialValues: {
              name,
              firtsName,
              company,
              role,
              email,
              phone
            },
            validationSchema: updateUserSchema,
            onSubmit: handleUserInfoSubmit,
            children: (formik) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-1/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6", children: "INFORMACIÓN BÁSICA" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    gp,
                    {
                      type: "text",
                      placeholder: "Nombres",
                      name: "name",
                      value: formik.values.name,
                      onChange: formik.handleChange,
                      onBlur: formik.handleBlur,
                      disabled: !isEditing
                    }
                  ),
                  formik.errors.name && formik.touched.name && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-sm my-2", children: formik.errors.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    gp,
                    {
                      type: "text",
                      placeholder: "Apellidos",
                      name: "firtsName",
                      value: formik.values.firtsName,
                      onChange: formik.handleChange,
                      onBlur: formik.handleBlur,
                      disabled: !isEditing
                    }
                  ),
                  formik.errors.firtsName && formik.touched.firtsName && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-sm my-2", children: formik.errors.firtsName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    gp,
                    {
                      type: "text",
                      placeholder: "Empresa",
                      name: "company",
                      value: formik.values.company,
                      onChange: formik.handleChange,
                      onBlur: formik.handleBlur,
                      disabled: !isEditing
                    }
                  ),
                  formik.errors.company && formik.touched.company && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-sm my-2", children: formik.errors.company }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Mp,
                    {
                      options: roles,
                      value: formik.values.role,
                      onChange: (e) => formik.setFieldValue("role", e.target.value),
                      disabled: !isEditing
                    }
                  ),
                  formik.errors.role && formik.touched.role && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-sm my-2", children: formik.errors.role })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/5 flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6", children: "INFORMACIÓN CUENTA" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    gp,
                    {
                      type: "email",
                      value: formik.values.email,
                      onChange: formik.handleChange,
                      onBlur: formik.handleBlur,
                      placeholder: "Correo electrónico",
                      disabled: true
                    }
                  ),
                  formik.errors.email && formik.touched.email && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-sm my-2", children: formik.errors.email }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6", children: "INFORMACIÓN DE CONTACTO" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    gp,
                    {
                      type: "number",
                      placeholder: "Celular",
                      name: "phone",
                      minLength: 10,
                      maxLength: 10,
                      value: formik.values.phone,
                      onChange: formik.handleChange,
                      onBlur: formik.handleBlur,
                      disabled: !isEditing
                    }
                  ),
                  formik.errors.phone && formik.touched.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-sm my-2", children: formik.errors.phone })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 w-full items-center justify-end", children: isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    s_,
                    {
                      txtBtn: "Cancelar",
                      typeButton: "border",
                      full: false,
                      type: "button",
                      onClick: () => {
                        setIsEditing(false);
                        formik.resetForm();
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    s_,
                    {
                      txtBtn: "Guardar",
                      typeButton: "default",
                      full: false,
                      type: "submit",
                      disabled: !formik.isValid || formik.isSubmitting
                    }
                  )
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  s_,
                  {
                    txtBtn: "Editar",
                    typeButton: "default",
                    full: false,
                    type: "button",
                    onClick: () => setIsEditing(true)
                  }
                ) }) })
              ] })
            ] })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "update-password", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Formik,
          {
            initialValues: {
              currentPassword: "",
              password: "",
              confirmPassword: ""
            },
            validationSchema: updatePasswordSchema,
            onSubmit: handlePasswordSubmit,
            children: (formikProps) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Form, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "W-2/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6", children: "ACTUALIZAR CONTRASEÑA" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-1/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    il,
                    {
                      name: "currentPassword",
                      placeholder: "Contraseña actual",
                      disabled: !isUpdatePassword,
                      value: formikProps.values.currentPassword,
                      onChange: formikProps.handleChange,
                      onBlur: formikProps.handleBlur
                    }
                  ),
                  formikProps.errors.currentPassword && formikProps.touched.currentPassword && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-sm my-2", children: String(formikProps.errors.currentPassword) }),
                  !isVisible && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 w-full items-center justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    s_,
                    {
                      txtBtn: "Actualizar",
                      typeButton: "default",
                      full: false,
                      type: "button",
                      onClick: () => {
                        setIsVisible(true);
                        setIsUpdatePassword(true);
                      }
                    }
                  ) })
                ] }),
                isVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-1/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(b_, { formik: formikProps }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 w-full items-center justify-end", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      s_,
                      {
                        txtBtn: "Cancelar",
                        typeButton: "border",
                        full: false,
                        type: "button",
                        onClick: () => {
                          setIsVisible(false);
                          setIsUpdatePassword(false);
                          formikProps.resetForm();
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      s_,
                      {
                        txtBtn: "Guardar",
                        typeButton: "default",
                        full: false,
                        type: "submit",
                        disabled: !formikProps.isValid || formikProps.isSubmitting
                      }
                    )
                  ] })
                ] })
              ] })
            ] })
          }
        ) })
      ] })
    ] })
  ] });
};

export { SettingsUser as default };
