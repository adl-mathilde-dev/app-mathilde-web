import { importShared } from './__federation_fn_import-Dhgpavzc.js';
import { j as jsxRuntimeExports } from './jsx-runtime-Bje5h6iL.js';
import { r as reactDomExports } from './index-D9Af7wOI.js';
import { u as useSelector, P as Provider_default, s as store, AuthProvider } from './__federation_expose_AutenticationService-Bb6x-Atq.js';
import LoginForm from './__federation_expose_LoginForm-c5YO7aY6.js';
import RegisterForm from './__federation_expose_RegisterForm-Dxebpfjg.js';
import ResetPass from './__federation_expose_ResetPass-DUUH7gOC.js';
import ValidationPass from './__federation_expose_ValidationPass-CYyoBpLf.js';
import Dashboard from './__federation_expose_Dashboard-DENb3LMR.js';
import SettingsUser from './__federation_expose_SettingsUser-ClYSLdnu.js';
import ThirdPartyCampaignForm, { S as SiGoogleads } from './__federation_expose_ThirdPartyCampaign-CiGHuyn-.js';
import { S as SidebarMth, B as BsStack, a as FaMeta, b as FaTiktok } from './sidebar-pro-BMBQQ8HL.js';
import { F as FN, Y as YN, S as S1, u as u0, Q as QN, G as GN, K as KN } from './ui-mathilde-web-DDewq026.js';
import Report from './__federation_expose_Report-qqpQvliI.js';

true&&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

await importShared('react');

const {Navigate} = await importShared('react-router-dom');
const RouterLogueado = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/", replace: true });
};

const tableColumns = [
  {
    header: "ESTADO",
    relation: "status",
    isToggle: true,
    toggleText: {
      active: "ACTIVA",
      inactive: "PAUSA"
    }
  },
  {
    header: "NOMBRE CAMPAÑAS",
    relation: "name"
  },
  {
    header: "PLATAFORMA",
    relation: "platform"
  },
  {
    header: "FECHA INICIAL",
    relation: "startDate"
  },
  {
    header: "FECHA FINAL",
    relation: "endDate"
  },
  {
    header: "PRESUPUESTO",
    relation: "budget"
  },
  {
    header: "GASTO",
    relation: "spent"
  },
  {
    header: "IMPRESIONES",
    relation: "impressions"
  },
  {
    header: "CPM",
    relation: "cpm"
  },
  {
    header: "CLICS URL",
    relation: "clicksUrl"
  },
  {
    header: "CTR",
    relation: "ctr"
  },
  {
    header: "CPC",
    relation: "cpc"
  }
];

const React$2 = await importShared('react');
const {useState: useState$1,useEffect: useEffect$1} = React$2;
const {Link,useLocation} = await importShared('react-router-dom');
const SummaryCampaign = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState$1("all");
  const [currentPage, setCurrentPage] = useState$1(1);
  const [isModalOpen, setIsModalOpen] = useState$1(false);
  const [localData, setLocalData] = useState$1([]);
  useEffect$1(() => {
    let dataCampaign = sessionStorage.getItem("dataCampaign");
    const allTransformedCampaigns = [];
    function getRandomIntInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const transformMetaCampaign = (dataCampaign2) => ({
      status: true,
      name: dataCampaign2.name || "",
      platform: dataCampaign2.platform || "",
      startDate: dataCampaign2.start_date || "",
      endDate: dataCampaign2.end_date || "",
      budget: dataCampaign2.budget || "0",
      spent: getRandomIntInRange(1, 99999),
      impressions: getRandomIntInRange(1, 99999),
      cpm: getRandomIntInRange(1, 99999),
      clicksUrl: getRandomIntInRange(1, 99999),
      ctr: getRandomIntInRange(1, 99999),
      cpc: getRandomIntInRange(1, 99999)
    });
    if (dataCampaign) {
      const parsedData = JSON.parse(dataCampaign);
      const dataEnd = parsedData.body.campaigns;
      for (let i = 0; i < 6; i++) {
        allTransformedCampaigns.push(transformMetaCampaign(dataEnd[i]));
      }
    }
    let initialData = [];
    const locationData = location.state;
    if (locationData?.campaignData) {
      initialData = locationData.campaignData;
      sessionStorage.setItem("campaignDataResumen", JSON.stringify(initialData));
    } else {
      const stored = sessionStorage.getItem("campaignDataResumen");
      if (stored) {
        initialData = JSON.parse(stored);
      }
    }
    const combinedData = [...initialData, ...allTransformedCampaigns];
    const dataWithIds = combinedData.map((item, index) => ({
      ...item,
      id: `${item.name}-${item.platform}-${index}`
    }));
    setLocalData(dataWithIds);
  }, [location.state]);
  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const getFilteredData = () => {
    if (activeFilter === "all") {
      return localData;
    }
    return localData.filter((item) => item.platform === activeFilter);
  };
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };
  const handleToggleChange = ({ rowId, checked, row, columnKey }) => {
    console.table({
      rowId,
      field: columnKey,
      oldValue: row[columnKey],
      newValue: checked
    });
    setLocalData((prev) => {
      const updated = prev.map(
        (item) => item.id === rowId ? { ...item, [columnKey]: checked } : item
      );
      sessionStorage.setItem("campaignDataResumen", JSON.stringify(updated));
      return updated;
    });
  };
  const formatUSD = (value) => {
    const num = Number(String(value).replace(/[^0-9]/g, ""));
    if (isNaN(num)) return value;
    return num.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen w-full flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMth, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen w-full container-space", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold", style: { marginBottom: "0px !important" }, children: "CAMPAÑAS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "MEDIOS PAGOS" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FN,
            {
              txtBtn: "CREAR CAMPAÑA",
              typeButton: "default",
              full: false,
              type: "button",
              onClick: toggleModal
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex rounded-md shadow-xs", role: "group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: `px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white ${activeFilter === "all" ? "bg-blue-50" : ""}`,
                onClick: () => handleFilterChange("all"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(BsStack, { className: `text-2xl ${activeFilter === "all" ? "text-blue-700" : "text-gray-500"}` })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: `px-3 py-2 text-sm font-medium text-gray-900 bg-white border-r border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white ${activeFilter === "META" ? "bg-blue-50" : ""}`,
                onClick: () => handleFilterChange("META"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaMeta, { className: `text-2xl ${activeFilter === "META" ? "text-blue-700" : "text-gray-500"}` })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: `px-3 py-2 text-sm font-medium text-gray-900 bg-white border-l border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white ${activeFilter === "GOOGLE" ? "bg-blue-50" : ""}`,
                onClick: () => handleFilterChange("GOOGLE"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiGoogleads, { className: `text-2xl ${activeFilter === "GOOGLE" ? "text-blue-700" : "text-gray-500"}` })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: `px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white ${activeFilter === "TIKTOK" ? "bg-blue-50" : ""}`,
                onClick: () => handleFilterChange("TIKTOK"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaTiktok, { className: `text-2xl ${activeFilter === "TIKTOK" ? "text-blue-700" : "text-gray-500"}` })
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        YN,
        {
          showSearch: true,
          itemsPerPage: 20,
          columns: tableColumns,
          data: getFilteredData().map((item) => ({
            ...item,
            budget: formatUSD(item.budget) + " USD"
          })),
          onToggleChange: handleToggleChange
        },
        `${activeFilter}-table`
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(S1, { width: "40%", isOpen: isModalOpen, onClose: toggleModal, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col px-10 pb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-bold mb-3", children: "SELECCIONA UNA OPCIÓN PARA CREAR TU CAMPAÑA" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3/6 p-2 flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/thirdPartyCampaign", children: /* @__PURE__ */ jsxRuntimeExports.jsx(u0, { imageUrl: "https://ftp.mathilde-ads.com/151-605f91d40859d5d52379b6753401b68f.svg", title: "Campañas manuales", description: "" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3/6 p-2 flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/massiveCampaign", children: /* @__PURE__ */ jsxRuntimeExports.jsx(u0, { imageUrl: "https://ftp.mathilde-ads.com/151-d41c45a31a82b5e2519657b41a04ae94.svg", title: "Campañas masivas", description: "" }) }) })
      ] })
    ] }) })
  ] });
};

const React$1 = await importShared('react');
const {useState,useEffect} = React$1;

const {useNavigate} = await importShared('react-router-dom');
const MassiveCampaigns = () => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [campaignData, setCampaignData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const stored = sessionStorage.getItem("Campaign");
    if (stored) {
      setCampaignData(JSON.parse(stored));
    }
  }, []);
  const handleFileChange = (files2) => {
    setFiles((prevFiles) => [...prevFiles, ...files2]);
  };
  const handleDeleteFile = (fileToDelete) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToDelete));
  };
  const processCSVData = (csvContent) => {
    console.log("Procesando archivo CSV:", csvContent);
    const preprocessedContent = csvContent.replace(/;"[^"]*\n[^"]*"/g, (match) => match.replace(/\n/g, "||")).replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    const rows = preprocessedContent.split("\n").filter((row) => row.trim()).map((row) => {
      const fields2 = [];
      let field = "";
      let inQuotes = false;
      let expectedFields = 34;
      for (let i = 0; i < row.length; i++) {
        const char = row[i];
        if (char === '"') {
          if (inQuotes && (row[i + 1] === ";" || i === row.length - 1)) {
            fields2.push(field);
            field = "";
            inQuotes = false;
            if (row[i + 1] === ";") i++;
          } else {
            inQuotes = !inQuotes;
            if (!inQuotes && field) {
              fields2.push(field);
              field = "";
            }
          }
        } else if (char === ";" && !inQuotes) {
          fields2.push(field);
          field = "";
        } else {
          field += char;
        }
      }
      if (field || fields2.length < expectedFields) {
        fields2.push(field);
      }
      while (fields2.length < expectedFields) {
        fields2.push("");
      }
      return fields2.map((f) => {
        let cleaned = f.trim();
        if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
          cleaned = cleaned.slice(1, -1);
        }
        return cleaned.replace(/\|\|/g, "\n");
      });
    });
    console.log("Número de filas:", rows.length);
    if (rows.length < 3) {
      console.warn("El archivo debe tener al menos 3 filas");
      throw new Error("El archivo debe contener al menos los tipos, campos y un registro de datos");
    }
    const types = rows[0].map((type) => type.trim().toLowerCase());
    const fields = rows[1].map((field) => field.trim().toLowerCase());
    console.log("Tipos:", types);
    console.log("Campos:", fields);
    if (types.length !== fields.length) {
      console.warn("El número de tipos no coincide con el número de campos");
      throw new Error("El formato del archivo no es válido");
    }
    const isGoogle = rows[2][0]?.toLowerCase().includes("google");
    if (isGoogle) {
      const googleCampaigns = [];
      const googleAdSets = [];
      const googleAds = [];
      for (let i = 2; i < rows.length; i++) {
        const values = rows[i];
        const campaignObj = {};
        const adSetObj = {};
        const adObj = {};
        fields.forEach((field, idx) => {
          const type = types[idx];
          const value = values[idx];
          if (!field) return;
          if (type === "campaign") {
            campaignObj[field] = value;
          } else if (type === "ad set") {
            adSetObj[field] = value;
          } else if (type === "ads") {
            adObj[field] = value;
          }
        });
        if (Object.keys(campaignObj).length > 0) googleCampaigns.push(campaignObj);
        if (Object.keys(adSetObj).length > 0) googleAdSets.push(adSetObj);
        if (Object.keys(adObj).length > 0) googleAds.push(adObj);
      }
      console.log("Datos procesados:", { campaignData: googleCampaigns, adSetData: googleAdSets, adData: googleAds });
      return { campaignData: googleCampaigns, adSetData: googleAdSets, adData: googleAds };
    }
    const campaignData2 = [];
    const adSetData = [];
    const adData = [];
    for (let i = 2; i < rows.length; i++) {
      const values = rows[i];
      const campaignObj = {};
      const adSetObj = {};
      const adObj = {};
      console.log(`Procesando fila ${i + 1}:`, values);
      if (values.length !== fields.length) {
        console.warn(`La fila ${i + 1} tiene ${values.length} valores, se esperaban ${fields.length}`);
        continue;
      }
      types.forEach((type, index) => {
        const field = fields[index];
        const value = values[index];
        if (!field || !value) return;
        try {
          const mappedField = field.replace(/\s+/g, "_").replace("bid_optimization_goal", "bid_optimization_goal").replace("bid_billing_event", "bid_optimization_event").replace("creative_media_url", "creative_media_url").replace("destination_url", "destination_url").replace("call_to__action", "call_to_action").replace("convesion_pixel", "conversion_pixel").replace("special_ad_category", "special_ad_category").replace("facebook_page_id", "facebook_page_id").replace("instagram_page_id", "instagram_page_id").replace("placements", "placement").replace("budget_type", "budget_type");
          console.log(`Procesando campo: ${field} -> ${mappedField} = ${value}`);
          const targetType = type.toLowerCase().trim();
          if (targetType === "campaign") {
            campaignObj[mappedField] = value;
          } else if (targetType === "ad set") {
            if (["start_time", "end_time"].includes(mappedField)) {
              adSetObj[mappedField + "_original"] = value;
            }
            if (["budget", "spend_limit_max", "spend_limit_min"].includes(mappedField)) {
              adSetObj[mappedField] = parseFloat(value.replace(/[^0-9.-]+/g, "")) || 0;
            } else if (["start_time", "end_time"].includes(mappedField)) {
              const [datePart, timePart] = value.split(" ");
              const [day, month, year] = datePart.split("/");
              adSetObj[mappedField] = `20${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T${timePart}:00`;
            } else {
              adSetObj[mappedField] = value;
            }
          } else if (targetType === "ads") {
            adObj[mappedField] = value;
          }
        } catch (error2) {
          console.error(`Error procesando campo ${field} en fila ${i + 1}:`, error2);
        }
      });
      const hasRequiredCampaignFields = ["status", "name", "objective", "special_ad_category"].every((field) => {
        const hasField = campaignObj[field] !== void 0 && campaignObj[field] !== "";
        if (!hasField) console.warn(`Campo requerido faltante en Campaign: ${field}`);
        return hasField;
      });
      const hasRequiredAdSetFields = ["status", "name", "budget_type", "budget"].every((field) => {
        const hasField = adSetObj[field] !== void 0 && adSetObj[field] !== "";
        if (!hasField) console.warn(`Campo requerido faltante en AdSet: ${field}`);
        return hasField;
      });
      const hasRequiredAdFields = ["status", "name", "facebook_page_id", "creative_media_url"].every((field) => {
        const hasField = adObj[field] !== void 0 && adObj[field] !== "";
        if (!hasField) console.warn(`Campo requerido faltante en Ad: ${field}`);
        return hasField;
      });
      console.log("Campos de Campaign:", Object.keys(campaignObj), campaignObj);
      console.log("Campos de AdSet:", Object.keys(adSetObj), adSetObj);
      console.log("Campos de Ad:", Object.keys(adObj), adObj);
      console.log("¿Tiene campos requeridos?", {
        campaign: hasRequiredCampaignFields,
        adSet: hasRequiredAdSetFields,
        ad: hasRequiredAdFields
      });
      if (hasRequiredCampaignFields) {
        console.log("Agregando Campaign:", campaignObj);
        campaignData2.push(campaignObj);
      }
      if (hasRequiredAdSetFields) {
        console.log("Agregando AdSet:", adSetObj);
        adSetData.push(adSetObj);
      }
      if (hasRequiredAdFields) {
        console.log("Agregando Ad:", adObj);
        adData.push(adObj);
      }
    }
    console.log("Datos procesados:", { campaignData: campaignData2, adSetData, adData });
    const Campaign = { campaignData: campaignData2, adSetData, adData };
    setCampaignData(Campaign);
    return { campaignData: campaignData2, adSetData, adData };
  };
  const transformMetaCampaign = (campaign, adSet) => ({
    status: typeof campaign.status === "string" && campaign.status.trim().toUpperCase() === "ACTIVE" ? true : false,
    name: campaign.name,
    platform: "META",
    startDate: adSet?.start_time_original || adSet?.start_time || "",
    endDate: adSet?.end_time_original || adSet?.end_time || "",
    budget: adSet?.budget?.toString() || "0",
    spent: "0",
    impressions: "0",
    cpm: "0",
    clicksUrl: "0",
    ctr: "0",
    cpc: "0"
  });
  const transformGoogleCampaign = (row) => ({
    status: typeof row.status === "string" && row.status.trim().toUpperCase() === "ACTIVE" ? true : false,
    name: row.name || row.campaign_name || "",
    platform: "GOOGLE",
    startDate: row["start date"] || "",
    endDate: row["end date"] || "",
    budget: row["budget"]?.toString() || "0",
    spent: "0",
    impressions: "0",
    cpm: "0",
    clicksUrl: "0",
    ctr: "0",
    cpc: "0"
  });
  const handleSendFiles = async () => {
    if (files.length === 0) return;
    setIsLoading(true);
    setError(false);
    try {
      const allTransformedCampaigns = [];
      for (const file of files) {
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        const text = await file.text();
        const { campaignData: campaigns, adSetData: adSets, adData: ads } = processCSVData(text);
        if (campaigns.length === 0 && adSets.length === 0 && ads.length === 0) {
          continue;
        }
        const platform = (campaigns[0] && (campaigns[0]["platform"] || campaigns[0]["Platform"]) || "").trim().toUpperCase();
        if (platform === "META") {
          for (let i = 0; i < campaigns.length; i++) {
            allTransformedCampaigns.push(transformMetaCampaign(campaigns[i], adSets[i]));
          }
        } else if (platform === "GOOGLE") {
          for (const campaign of campaigns) {
            allTransformedCampaigns.push(transformGoogleCampaign(campaign));
          }
        }
      }
      if (allTransformedCampaigns.length === 0) {
        throw new Error("No se encontraron datos válidos en los archivos");
      }
      sessionStorage.setItem("campaignDataResumen", JSON.stringify(allTransformedCampaigns));
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      console.log("Datos transformados:", allTransformedCampaigns);
      navigate("/summaryCampaign", {
        state: { campaignData: allTransformedCampaigns }
      });
    } catch (error2) {
      console.error("Error completo:", error2);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const handleDownloadTemplate = (platform) => {
    const fileUrl = platform === "meta" ? "https://d1h7f3ppz16fle.cloudfront.net/RecursosMathilde/Mathilde-web/files/meta_campaign_template.csv" : platform === "google" ? "https://d1h7f3ppz16fle.cloudfront.net/RecursosMathilde/Mathilde-web/files/google_campaign_template.csv" : "tiktok_campaign_template.csv";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop() || "template.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 min-h-screen w-full flex items-center justify-center bg-white bg-opacity-75", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QN, { description: "Estamos trabajando en la <br><strong>creación de tus campañas</strong>" }) }) }),
    error ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen w-full flex items-center justify-center bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center bg-white text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl mb-4", children: "Error al procesar el archivo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FN,
        {
          txtBtn: "Volver a intentar",
          typeButton: "default",
          full: false,
          type: "button",
          onClick: () => {
            setError(false);
            setFiles([]);
          }
        }
      )
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen w-full flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarMth, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen w-full container-space", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "w-2/3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold", style: { marginBottom: "0px !important" }, children: "CREACIÓN DE CAMPAÑAS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-normal mb-4", children: "MEDIOS PAGOS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-4", children: "CREAR CAMPAÑAS DE FORMA MASIVA EN LAS DIFERENTES PLATAFORMAS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GN, { accept: "text/csv", multiple: true, onChange: handleFileChange }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4", children: "DESCARGA LAS PLANTILLAS DEL FEED DE DATOS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FN,
              {
                txtBtn: "Plantilla Meta",
                leftIcon: FaMeta,
                typeButton: "border",
                full: false,
                type: "button",
                disabled: false,
                onClick: () => handleDownloadTemplate("meta")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FN,
              {
                txtBtn: "Plantilla Google",
                leftIcon: SiGoogleads,
                typeButton: "border",
                full: false,
                type: "button",
                disabled: false,
                onClick: () => handleDownloadTemplate("google")
              }
            )
          ] })
        ] }),
        files.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 w-full items-center justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          FN,
          {
            txtBtn: "Regresar",
            typeButton: "border",
            full: false,
            type: "button",
            onClick: () => navigate("/summaryCampaign")
          }
        ) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "my-4 font-bold", children: "ARCHIVOS CARGADOS " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(KN, { files, onDelete: handleDeleteFile }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 w-full items-center justify-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FN,
              {
                txtBtn: "Cancelar",
                typeButton: "border",
                full: false,
                type: "button",
                onClick: () => setFiles([])
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FN,
              {
                txtBtn: "Siguiente",
                typeButton: "default",
                full: false,
                type: "button",
                onClick: handleSendFiles
              }
            )
          ] })
        ] })
      ] }) })
    ] })
  ] });
};

const {lazy,Suspense} = await importShared('react');

const {Routes,Route} = await importShared('react-router-dom');
const App = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Provider_default, { store, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Loading..." }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(LoginForm, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/register", element: /* @__PURE__ */ jsxRuntimeExports.jsx(RegisterForm, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/reset", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ResetPass, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/validation", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ValidationPass, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/dashboard", element: /* @__PURE__ */ jsxRuntimeExports.jsx(RouterLogueado, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/settings", element: /* @__PURE__ */ jsxRuntimeExports.jsx(RouterLogueado, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsUser, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/thirdPartyCampaign", element: /* @__PURE__ */ jsxRuntimeExports.jsx(RouterLogueado, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThirdPartyCampaignForm, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/summaryCampaign", element: /* @__PURE__ */ jsxRuntimeExports.jsx(RouterLogueado, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCampaign, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/massiveCampaign", element: /* @__PURE__ */ jsxRuntimeExports.jsx(RouterLogueado, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MassiveCampaigns, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/report", element: /* @__PURE__ */ jsxRuntimeExports.jsx(RouterLogueado, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Report, {}) }) })
  ] }) }) }) });
};

const React = await importShared('react');
const {BrowserRouter} = await importShared('react-router-dom');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) })
);
