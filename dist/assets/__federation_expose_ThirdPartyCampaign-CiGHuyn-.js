import { importShared } from './__federation_fn_import-Dhgpavzc.js';
import { j as jsxRuntimeExports } from './jsx-runtime-Bje5h6iL.js';
import { N as Ny, X as Xy, a as XN } from './ui-mathilde-web-DDewq026.js';
import { F as FaFacebook, I as IoMegaphone, S as SidebarMth, a as FaMeta, b as FaTiktok } from './sidebar-pro-BMBQQ8HL.js';
import { R as RegisterFormService } from './registerService-BXB2-OaD.js';
import { G as GenIcon } from './iconBase-CXv6bwSs.js';

// THIS FILE IS AUTO GENERATED
function SiGoogleads (props) {
  return GenIcon({"attr":{"role":"img","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998zm19.4643-6.0004L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644zM7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z"},"child":[]}]})(props);
}

// THIS FILE IS AUTO GENERATED
function BiSolidDashboard (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"},"child":[]}]})(props);
}

const dataThirdParty = {
  menuItems: [
    {
      id: "1",
      title: "NUEVA CAMPAÑA",
      href: "#nueva-campana",
      icon: IoMegaphone,
      subItems: [
        {
          id: "1.1",
          title: "CONJUNTOS DE ANUNCIOS 1",
          href: "#conjuntos-de-anuncios-1",
          icon: BiSolidDashboard,
          subItems: [
            {
              id: "1.1.1",
              title: "ANUNCIO 1",
              href: "#anuncio-1",
              icon: FaFacebook
            },
            {
              id: "1.1.2",
              title: "ANUNCIO 2",
              href: "#anuncio-2",
              icon: FaFacebook
            }
          ]
        },
        {
          id: "1.2",
          title: "CONJUNTOS DE ANUNCIOS 2",
          href: "#conjuntos-de-anuncios-2",
          icon: BiSolidDashboard,
          subItems: [
            {
              id: "1.1.1",
              title: "ANUNCIO 1",
              href: "#anuncio-1",
              icon: FaFacebook
            }
          ]
        }
      ]
    }
  ],
  getMenuItems() {
    return this.menuItems;
  }
};

const React = await importShared('react');
const {useState} = React;
const ThirdPartyCampaignForm = () => {
  const menuItems = dataThirdParty.getMenuItems();
  const { roles } = RegisterFormService;
  const [isEditing, setIsEditing] = useState(false);
  const [formSetting, setformSetting] = useState({
    name: "",
    firtsName: "",
    company: "",
    phone: "",
    role: "",
    email: ""
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedOrganizacion, setIsCheckedOrganizacion] = useState(true);
  const [isCheckedLimiteGasto, setIsCheckedLimiteGasto] = useState(true);
  const { name, firtsName, company, phone, role, email } = formSetting;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen w-full flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMth, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen w-full flex", style: { padding: "0px 20px 20px 120px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-3/5 flex-col pr-5 container-space-top", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold", children: "CREACIÓN DE CAMPAÑAS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-5", children: "MEDIOS PAGOS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-1/2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-5 font-bold", children: "¿DÓNDE QUIERES PAUTAR?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex rounded-md shadow-xs", role: "group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaMeta, { className: "text-blue-700 text-2xl" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiGoogleads, { className: "text-blue-700 text-2xl" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaTiktok, { className: "text-blue-700 text-2xl" }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 font-bold", children: "INFORMACIÓN DE CAMPAÑAS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ny,
          {
            type: "text",
            placeholder: "Nombre de campaña",
            name: "name",
            value: name,
            onChange: (e) => setformSetting({ ...formSetting, name: e.target.value })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Xy,
            {
              name: "Estado Inicial",
              options: roles
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Xy,
            {
              name: "Awareness",
              options: roles
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ny,
            {
              type: "text",
              placeholder: "Selecciona tu cuenta",
              name: "name",
              value: name,
              onChange: (e) => setformSetting({ ...formSetting, name: e.target.value })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Xy,
            {
              name: "Categoría de anuncio especial",
              options: roles
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 font-bold", children: "OPTIMIZACIÓN DEL PRESUPUESTO DE CAMPAÑAS" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/2 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex items-center cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                className: "sr-only peer",
                checked: isCheckedOrganizacion,
                onChange: (e) => setIsCheckedOrganizacion(e.target.checked)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" })
          ] }) })
        ] }),
        isCheckedOrganizacion && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "organizacion", className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-1/2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 font-bold", children: "TIPO DE PRESUPUESTO" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Xy,
                {
                  name: "Diario",
                  options: roles
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-1/2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 font-bold", children: "ESTRATEGIA DE PUJA" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Xy,
                {
                  name: "Highest volume",
                  options: roles
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ny,
            {
              type: "text",
              placeholder: "Presupuesto",
              name: "name",
              value: name,
              onChange: (e) => setformSetting({ ...formSetting, name: e.target.value })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 font-bold", children: "LIMITE DE GASTRO DE CAMPAÑA (OPCIONAL)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/2 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex items-center cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                className: "sr-only peer",
                checked: isCheckedLimiteGasto,
                onChange: (e) => setIsCheckedLimiteGasto(e.target.checked)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" })
          ] }) })
        ] }),
        isCheckedLimiteGasto && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 font-bold", children: "CANTIDAD LIMITE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ny,
            {
              type: "text",
              placeholder: "Presupuesto",
              name: "name",
              value: name,
              onChange: (e) => setformSetting({ ...formSetting, name: e.target.value })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "INFORMACIÓN CONJUNTO DE ANUNCIOS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ny,
            {
              type: "text",
              placeholder: "Nombre de conjunto de anuncios",
              name: "name",
              value: name,
              onChange: (e) => setformSetting({ ...formSetting, name: e.target.value })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "PRESUPUESTO DEL CONJUNTO DE ANUNCIOS" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/2 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex items-center cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                className: "sr-only peer",
                checked: isCheckedLimiteGasto,
                onChange: (e) => setIsCheckedLimiteGasto(e.target.checked)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" })
          ] }) })
        ] }),
        isCheckedLimiteGasto && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-1/2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "GASTO MÍNIMO" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ny,
                {
                  type: "number",
                  placeholder: "0 COP",
                  name: "gastoMinimo"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-1/2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "GASTO MÁXIMO" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ny,
                {
                  type: "number",
                  placeholder: "0 COP",
                  name: "gastoMaximo"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "FECHA INICIO" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-1/2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "FECHA FINAL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ny,
                {
                  type: "number",
                  placeholder: "0 COP",
                  name: "gastoMaximo"
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-2/5 flex-col pl-5 bg-gray-100 container-space-top", children: /* @__PURE__ */ jsxRuntimeExports.jsx(XN, { items: menuItems }) })
    ] })
  ] });
};

export { SiGoogleads as S, ThirdPartyCampaignForm as default };
