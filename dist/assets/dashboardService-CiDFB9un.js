import { a as axios } from './sweetalert2.esm.all-N-5-GXph.js';

const API_URL = "https://xlnrchrag0.execute-api.us-east-2.amazonaws.com/dev/campaings/dashboard";
const dataAdvertiser = {
  advertiser: [
    { value: "ACOMEDIOS-TUBOLETA", label: "ACOMEDIOS-TUBOLETA" },
    { value: "BANCOAVVILLAS", label: "BANCOAVVILLAS" },
    { value: "BANCOPOPULAR", label: "BANCOPOPULAR" },
    { value: "BANCODEBOGOTA", label: "BANCODEBOGOTA" },
    { value: "BANCODEOCCIDENTE", label: "BANCODEOCCIDENTE" },
    { value: "DALE", label: "DALE" },
    { value: "GLOBANT-KALLEY", label: "GLOBANT-KALLEY" },
    { value: "IPG-ARKADIA", label: "IPG-ARKADIA" },
    { value: "IPG-CENCOSUD", label: "IPG-CENCOSUD" },
    { value: "IPG-COLMEDICA", label: "IPG-COLMEDICA" },
    { value: "IPG-CRUZ VERDE", label: "IPG-CRUZ VERDE" },
    { value: "IPG-FONTANAR", label: "IPG-FONTANAR" },
    { value: "IPG-MARVAL", label: "IPG-MARVAL" },
    { value: "IPG-NESTLE", label: "IPG-NESTLE" },
    { value: "IPG-UNIEAN", label: "IPG-UNIEAN" },
    { value: "MML-ADMEDIAROCK", label: "MML-ADMEDIAROCK" },
    { value: "MML-AVIATUR", label: "MML-AVIATUR" },
    { value: "MML-BRAVO", label: "MML-BRAVO" },
    { value: "MML-CREDICORP", label: "MML-CREDICORP" },
    { value: "MML-ESTELAR", label: "MML-ESTELAR" },
    { value: "MML-GSK", label: "MML-GSK" },
    { value: "MML-TOROORTIZ", label: "MML-TOROORTIZ" },
    { value: "MULTIBANK", label: "MULTIBANK" },
    { value: "PORVENIR", label: "PORVENIR" },
    { value: "UM-BANCODEBOGOTA", label: "UM-BANCODEBOGOTA" },
    { value: "UM-BANCODEOCCIDENTE", label: "UM-BANCODEOCCIDENTE" }
  ],
  getAdvertiser() {
    return this.advertiser;
  }
};
const getReportData = async (requestData) => {
  try {
    const token = sessionStorage.getItem("tokCog");
    console.log(`Token: ${token}`);
    if (!token) {
      throw new Error("No hay token de autorización disponible");
    }
    const response = await axios.post(API_URL, requestData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    if (!response.data) {
      throw new Error("No se recibieron datos del servidor");
    }
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data?.message === "The incoming token has expired") {
        sessionStorage.removeItem("tokCog");
        localStorage.removeItem("user");
        window.location.href = "/";
      }
      throw new Error(`Error al obtener el reporte: ${error.response?.data?.message || error.message}`);
    }
    throw error;
  }
};

export { dataAdvertiser as d, getReportData as g };
