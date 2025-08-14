import { importShared } from './__federation_fn_import-Dhgpavzc.js';
import { j as jsxRuntimeExports } from './jsx-runtime-Bje5h6iL.js';
import { e as eI, F as FN } from './ui-mathilde-web-DDewq026.js';
import { S as SidebarMth } from './sidebar-pro-BMBQQ8HL.js';
import { g as getReportData } from './dashboardService-BxUfs8kx.js';
import { S as Swal } from './sweetalert2.esm.all-CcrGM5VA.js';

const React = await importShared('react');
const {useState,useEffect} = React;
const ATTRIBUTE_OPTIONS = [
  "Campaign",
  "Ip filter list",
  "Creative"
];
const METRIC_OPTIONS = [
  "Clicks",
  "Conversions",
  "Impressions",
  "CTR %"
];
const Report = () => {
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCampaigns, setSelectedCampaigns] = useState([]);
  const [campaignSearch, setCampaignSearch] = useState("");
  const [selectedMetrics, setSelectedMetrics] = useState([]);
  const [metricsDropdownOpen, setMetricsDropdownOpen] = useState(false);
  const [campaignsFromStorage, setCampaignsFromStorage] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [reportData, setReportData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const stored = sessionStorage.getItem("campaignDataResumen");
    const dataCampaign = sessionStorage.getItem("dataCampaign");
    let combinedData = [];
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          combinedData = [...combinedData, ...parsed];
        }
      } catch (e) {
        console.error("Error parsing stored data:", e);
      }
    }
    if (dataCampaign) {
      try {
        const parsedData = JSON.parse(dataCampaign);
        const dataEnd = parsedData.body.campaigns;
        if (Array.isArray(dataEnd)) {
          const transformedData = dataEnd.map((campaign) => ({
            name: campaign.name || "",
            platform: campaign.platform || "",
            startDate: campaign.start_date || "",
            endDate: campaign.end_date || "",
            budget: campaign.budget || "0"
          }));
          combinedData = [...combinedData, ...transformedData];
        }
      } catch (e) {
        console.error("Error parsing campaign data:", e);
      }
    }
    const uniqueCampaigns = Array.from(new Map(combinedData.map((item) => [item.name, item])).values());
    setCampaignsFromStorage(uniqueCampaigns);
  }, []);
  const handleSelect = (option) => {
    if (!selectedAttributes.includes(option)) {
      setSelectedAttributes([...selectedAttributes, option]);
    }
    setDropdownOpen(false);
  };
  const handleRemove = (option) => {
    setSelectedAttributes(selectedAttributes.filter((attr) => attr !== option));
  };
  const handleSelectMetric = (option) => {
    if (!selectedMetrics.includes(option)) {
      setSelectedMetrics([...selectedMetrics, option]);
    }
    setMetricsDropdownOpen(false);
  };
  const handleRemoveMetric = (option) => {
    setSelectedMetrics(selectedMetrics.filter((metric) => metric !== option));
  };
  const filteredCampaigns = campaignsFromStorage.filter(
    (c) => c.name.toLowerCase().includes(campaignSearch.toLowerCase()) && !selectedCampaigns.includes(c.name)
  );
  const handleSelectCampaign = (name) => {
    if (!selectedCampaigns.includes(name)) {
      setSelectedCampaigns([...selectedCampaigns, name]);
    }
    setCampaignSearch("");
  };
  const handleRemoveCampaign = (name) => {
    setSelectedCampaigns(selectedCampaigns.filter((c) => c !== name));
  };
  const availableOptions = ATTRIBUTE_OPTIONS.filter((opt) => !selectedAttributes.includes(opt) && (opt !== "Campaign" || selectedCampaigns.length === 0));
  const availableMetrics = METRIC_OPTIONS.filter((opt) => !selectedMetrics.includes(opt));
  const handleGenerateReport = async () => {
    setIsLoading(true);
    try {
      const requestData = {
        advertiser: "BANCODEBOGOTA",
        start_date: "01-04-2025",
        end_date: "30-04-2025"
      };
      const response = await getReportData(requestData);
      setReportData(response);
      console.log("Respuesta del servicio:", response);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error instanceof Error ? error.message : "Error al obtener el reporte",
        icon: "error",
        confirmButtonText: "Aceptar"
      });
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen w-full flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMth, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen w-full bg-gray-100 container-space", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold mb-3", children: "REPORTES" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col bg-white p-5 rounded-md mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex mb-3 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mr-2", children: "Date Range: " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(eI, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex my-3 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Attributes: " }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "py-1 cursor-pointer text-sm text-indigo-500",
                  onClick: () => setDropdownOpen(!dropdownOpen),
                  children: "+ Add Attribute"
                }
              ),
              dropdownOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 mt-1 w-48 bg-white border rounded shadow z-10", children: availableOptions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 text-gray-400", children: "Sin opciones" }) : availableOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "px-4 py-2 hover:bg-blue-100 cursor-pointer",
                  onClick: () => handleSelect(option),
                  children: option
                },
                option
              )) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 ml-4 items-center", children: selectedAttributes.map((attr) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "bg-blue-100 text-blue-700 pl-3 ml-3 flex items-center text-sm",
              style: {
                borderRadius: "1.30rem"
              },
              children: [
                attr,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "ml-2 text-blue-700 hover:text-blue-900 font-bold",
                    onClick: () => handleRemove(attr),
                    "aria-label": `Eliminar ${attr}`,
                    type: "button",
                    children: "×"
                  }
                ),
                attr === "Campaign" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative ml-4 w-80", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex flex-wrap items-center border rounded px-4 py-1 ml-2 bg-white min-h-[40px]",
                      style: {
                        borderTopRightRadius: "1.25rem",
                        borderBottomRightRadius: "1.25rem"
                      },
                      children: [
                        selectedCampaigns.map((name) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: "bg-purple-100 text-purple-700 px-2 py-1 rounded-full flex items-center text-xs mr-1 mb-1",
                            children: [
                              name,
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  className: "ml-1 text-purple-700 hover:text-purple-900 font-bold",
                                  onClick: () => handleRemoveCampaign(name),
                                  "aria-label": `Eliminar campaign ${name}`,
                                  type: "button",
                                  children: "×"
                                }
                              )
                            ]
                          },
                          name
                        )),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "text",
                            className: "flex-1 outline-none border-none px-2 py-1 min-w-[100px] text-gray-900 bg-white",
                            placeholder: "Buscar campaign...",
                            value: campaignSearch,
                            onChange: (e) => setCampaignSearch(e.target.value)
                          }
                        )
                      ]
                    }
                  ),
                  campaignSearch && filteredCampaigns.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute left-0 top-full mt-2 w-full bg-white border rounded shadow z-10 max-h-40 overflow-y-auto",
                      children: filteredCampaigns.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "px-4 py-2 hover:bg-blue-100 cursor-pointer",
                          onClick: () => handleSelectCampaign(c.name),
                          children: c.name
                        },
                        c.name
                      ))
                    }
                  ),
                  campaignSearch && filteredCampaigns.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute left-0 top-full mt-2 w-full bg-white border rounded shadow z-10",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 text-gray-400", children: "No hay coincidencias" })
                    }
                  )
                ] })
              ]
            },
            attr
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex my-3 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Metrics: " }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "py-1 cursor-pointer text-sm text-indigo-500",
                  onClick: () => setMetricsDropdownOpen(!metricsDropdownOpen),
                  children: "+ Add Metric"
                }
              ),
              metricsDropdownOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 mt-1 w-56 bg-white border rounded shadow z-10", children: availableMetrics.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 text-gray-400", children: "Sin opciones" }) : availableMetrics.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "px-4 py-2 hover:bg-blue-100 cursor-pointer",
                  onClick: () => handleSelectMetric(option),
                  children: option
                },
                option
              )) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 ml-4", children: selectedMetrics.map((metric) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center text-sm",
              children: [
                metric,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "ml-2 text-green-700 hover:text-green-900 font-bold",
                    onClick: () => handleRemoveMetric(metric),
                    "aria-label": `Eliminar ${metric}`,
                    type: "button",
                    children: "×"
                  }
                )
              ]
            },
            metric
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 w-full items-center justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          FN,
          {
            txtBtn: isLoading ? "Cargando..." : "Generar Reporte",
            typeButton: "default",
            full: false,
            type: "button",
            onClick: handleGenerateReport,
            disabled: isLoading
          }
        ) })
      ] }),
      reportData && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col bg-white p-5 rounded-md mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold mb-2", children: "Resumen" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 p-4 rounded", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Impresiones" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl", children: reportData.body.impressions.toLocaleString() })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 p-4 rounded", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Clics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl", children: reportData.body.clicks.toLocaleString() })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 p-4 rounded", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Conversiones" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl", children: reportData.body.conversions.toLocaleString() })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold mb-2", children: "Campañas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full border border-gray-300 rounded", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border px-4 py-2", children: "Campaña" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border px-4 py-2", children: "Plataforma" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border px-4 py-2", children: "Meta" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border px-4 py-2", children: "Presupuesto" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border px-4 py-2", children: "Cumplimiento" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: reportData.body.campaigns.map((campaign) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border px-4 py-2", children: campaign.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border px-4 py-2", children: campaign.platform }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border px-4 py-2", children: campaign.goal }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border px-4 py-2", children: campaign.budget.toLocaleString() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border px-4 py-2", children: campaign.compliance })
          ] }, campaign.name)) })
        ] })
      ] })
    ] }) })
  ] });
};

export { Report as default };
