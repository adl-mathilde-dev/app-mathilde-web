import { importShared } from './__federation_fn_import-BKb1h4mk.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CsM3lTE3.js';
import './__federation_expose_AutenticationService-Dca20n4F.js';
import { l as l_, f as f_, g as g_ } from './ui-mathilde-web-D4BhIZOZ.js';
import { S as SidebarMth } from './sidebar-pro-DCtabkHD.js';

await importShared('react');
const Dashboard = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen w-full flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMth, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen container-space", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold mb-3", children: "DASHBOARD" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 h-full flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col w-2/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3/6 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              l_,
              {
                logo: "impresiones",
                number: 8e4,
                title: "IMPRESIONES",
                start: 0,
                end: 8e3,
                current: 52456
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3/6 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              l_,
              {
                logo: "conversiones",
                number: 342,
                title: "CONVERSIONES",
                start: 0,
                end: 342,
                current: 306
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3/6 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              l_,
              {
                logo: "click",
                number: 1236,
                title: "CLICS",
                start: 0,
                end: 1236,
                current: 613
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3/6 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              l_,
              {
                logo: "porcentaje",
                number: 2.4,
                title: "CTR",
                start: 0,
                end: 2.4,
                current: 1.03
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3/6 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              l_,
              {
                logo: "vistas",
                number: 236,
                title: "VIEWS",
                start: 0,
                end: 236,
                current: 46
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3/6 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              l_,
              {
                logo: "porcentaje",
                number: 1.4,
                title: "VTR",
                start: 0,
                end: 1.4,
                current: 0.94
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col w-3/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3/6 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border bg-white p-3 h-full flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "my-3 font-bold", children: "PRESUPUESTO" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-end w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f_, {}) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3/6 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border bg-white p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "my-3 font-bold", children: "RECOMENDACIONES" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "El presupuesto total planeado es de 26.3M, pero solo se ha ejecutado una parte. Considera aumentar la inversión para alcanzar los objetivos de impresiones y conversiones." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Las campañas tienen un CTR (Click Through Rate) de 2.4% y un VTR (View Through Rate) de 1.4%. Esto sugiere que hay margen de mejora en la segmentación y creatividad de los anuncios. Realiza pruebas A/B con diferentes creatividades y mensajes para mejorar el rendimiento." })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border bg-white h-full p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "my-3 font-bold", children: "RESUMEN DE CAMPAÑAS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              g_,
              {
                columns: [
                  {
                    header: "NOMBRE",
                    relation: "name"
                  },
                  {
                    header: "OBJETIVO",
                    relation: "objective"
                  },
                  {
                    header: "PRESUPUESTO",
                    relation: "budget"
                  },
                  {
                    header: "FECHA INICIO",
                    relation: "startDate"
                  },
                  {
                    header: "FECHA FIN",
                    relation: "endDate"
                  }
                ],
                data: [
                  {
                    name: "CAMPAÑA_BDB_TC",
                    objective: "CONVERSIÓN",
                    budget: "$2.350.000",
                    startDate: "01/02/2025",
                    endDate: "30/03/2025"
                  },
                  {
                    name: "CAMPAÑA_BDB_CLI",
                    objective: "IMPRESIONES",
                    budget: "$720.000",
                    startDate: "10/02/2025",
                    endDate: "15/02/2025"
                  },
                  {
                    name: "CAMPAÑA_BDB_REFERIDOS",
                    objective: "IMPRESIONES",
                    budget: "$480.000",
                    startDate: "10/02/2025",
                    endDate: "15/02/2025"
                  },
                  {
                    name: "CAMPAÑA_BDB_PREENROLADOS",
                    objective: "CONVERSIÓN",
                    budget: "$1.150.000",
                    startDate: "05/02/2025",
                    endDate: "18/02/2025"
                  },
                  {
                    name: "CAMPAÑA_BDB_ALIADOS_TU_PLUS",
                    objective: "IMPRESIONES",
                    budget: "$560.000",
                    startDate: "01/02/2025",
                    endDate: "30/03/2025"
                  }
                ]
              }
            )
          ] }) }) })
        ] })
      ] })
    ] })
  ] });
};

export { Dashboard as default };
