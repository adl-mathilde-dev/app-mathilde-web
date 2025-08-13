import { a as axios } from './sweetalert2.esm.all-N-5-GXph.js';

const API_URL = "https://mthmocks.pruebasmathilde.com/castlemock/mock/rest/project/nIVSsr/application/YPlsJX/register";
const registerUser = async (userData) => {
  console.log(userData);
  try {
    const response = await axios.post(API_URL, userData);
    return response.data;
  } catch (error) {
    throw new Error("Error al registrar el usuario");
  }
};
const RegisterFormService = {
  roles: [
    { value: "Administrador", label: "Administrador" },
    { value: "Gestor de campañas", label: "Gestor de campañas" },
    { value: "Analista", label: "Analista" },
    { value: "Creativo", label: "Creativo" }
  ]};

export { RegisterFormService as R, registerUser as r };
