import { importShared } from './__federation_fn_import-BKb1h4mk.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CsM3lTE3.js';
import { a as axios, S as Swal } from './sweetalert2.all-BgYO93wr.js';

const React = await importShared('react');
const {createContext,useContext,useState,useEffect} = React;
const {useNavigate} = await importShared('react-router-dom');
const AuthContext = createContext(void 0);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error2) {
        localStorage.removeItem("user");
        setUser(null);
      }
    }
  }, []);
  const login = async (user2, pass) => {
    try {
      const response = await axios.post(
        "https://mthmocks.pruebasmathilde.com/castlemock/mock/rest/project/nIVSsr/application/YPlsJX/login",
        { user: user2, pass }
      );
      if (response.data && response.data.username) {
        setUser({ username: response.data.username });
        localStorage.setItem("user", JSON.stringify({ username: response.data.username }));
        navigate("/dashboard");
        setError(null);
      } else {
        throw new Error("El nombre de usuario no está disponible en la respuesta.");
      }
    } catch (error2) {
      if (axios.isAxiosError(error2)) {
        if (error2.response) {
          setError(`Error: ${error2.response.status} - ${error2.response.data}`);
        } else if (error2.request) {
          setError("No se recibió respuesta del servidor.");
        } else {
          setError(`Error de configuración: ${error2.message}`);
        }
      } else {
        setError("Error de inicio de sesión. Verifica tus credenciales.");
      }
      Swal.fire({
        title: "Error de inicio de sesión",
        text: "Por favor verifica tus credenciales.",
        icon: "error",
        confirmButtonText: "Aceptar"
      });
    }
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthContext.Provider, { value: { user, login, logout, error }, children });
};
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
