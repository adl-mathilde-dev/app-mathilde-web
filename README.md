# App Mathilde Web

Aplicación web desarrollada con React, TypeScript y Vite que implementa un sistema de autenticación y gestión de campañas publicitarias.

## 🚀 Características

- **Autenticación completa** con reCAPTCHA v3
- **Gestión de campañas** de terceros
- **Dashboard** con métricas y reportes
- **Configuración de usuario** y perfil
- **Micro-frontend** con Module Federation
- **Redux** para gestión de estado
- **Tailwind CSS** para estilos
- **TypeScript** para tipado estático

## 📋 Prerrequisitos

- Node.js (versión 18 o superior)
- npm (incluido con Node.js)

## 🛠️ Instalación

1. **Clonar el repositorio:**
```bash
git clone <url-del-repositorio>
cd app-mathilde-web
```

2. **Instalar dependencias:**
```bash
npm install
```

## 🏃‍♂️ Desarrollo

### Servidor de desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

### Build de producción
```bash
npm run build
```
Los archivos de producción se generarán en la carpeta `dist/`

### Preview del build
```bash
npm run start
```
Sirve los archivos de producción en `http://localhost:5173`

## 🏗️ Estructura del Proyecto

```
app-mathilde-web/
├── app/
│   ├── components/          # Componentes React
│   │   ├── organisms/       # Componentes complejos
│   │   └── pages/          # Páginas de la aplicación
│   ├── hooks/              # Custom hooks
│   ├── routes/             # Configuración de rutas
│   ├── schema/             # Esquemas de validación (Yup)
│   ├── services/           # Servicios de API
│   ├── store/              # Configuración de Redux
│   ├── app.tsx             # Componente principal
│   └── main.tsx            # Punto de entrada
├── dist/                   # Archivos de producción (generados)
├── index.html              # HTML principal
├── package.json            # Dependencias y scripts
├── tsconfig.json           # Configuración de TypeScript
├── tailwind.config.ts      # Configuración de Tailwind CSS
└── vite.config.ts          # Configuración de Vite
```

## 🔧 Configuración

### Variables de Entorno
El proyecto utiliza las siguientes configuraciones:

- **API Endpoints**: Configurados en los servicios
- **reCAPTCHA**: Configurado para verificación de seguridad
- **Module Federation**: Configurado para micro-frontends

### Alias de Importación
El proyecto incluye alias para facilitar las importaciones:

- `@components/*` → `app/components/*`
- `@services/*` → `app/services/*`
- `@hooks/*` → `app/hooks/*`
- `@store/*` → `app/store/*`
- `@schema/*` → `app/schema/*`
- `~/` → `app/`

## 🚀 Deployment

### Build para Producción
```bash
npm run build
```

### Servir Archivos Estáticos
Los archivos generados en `dist/` pueden ser servidos por cualquier servidor web estático:

- **Nginx**
- **Apache**
- **CDN** (CloudFront, Cloudflare, etc.)
- **Servicios de hosting** (Netlify, Vercel, etc.)

### Configuración de Servidor
Para servidores que no soporten SPA routing, configurar redirección a `index.html`:

**Nginx:**
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

**Apache (.htaccess):**
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## 🔒 Seguridad

- **reCAPTCHA v3**: Protección contra bots
- **Validación de formularios**: Con Yup
- **Autenticación**: Sistema completo de login/logout
- **Rutas protegidas**: Middleware de autenticación

## 📦 Dependencias Principales

- **React 18.3.1**: Framework de UI
- **TypeScript 5.7.2**: Tipado estático
- **Vite 5.4.11**: Build tool y dev server
- **Redux Toolkit 2.7.0**: Gestión de estado
- **React Router 7.5.2**: Enrutamiento
- **Tailwind CSS 3.4.17**: Framework de CSS
- **Formik + Yup**: Manejo de formularios
- **Axios**: Cliente HTTP
- **SweetAlert2**: Alertas y modales

## 🐛 Solución de Problemas

### Error de Build
Si encuentras errores durante el build:

1. Limpiar cache de npm:
```bash
npm cache clean --force
```

2. Eliminar node_modules y reinstalar:
```bash
rm -rf node_modules package-lock.json
npm install
```

3. Verificar versiones de Node.js y npm:
```bash
node --version
npm --version
```

### Problemas de CORS
Para desarrollo local, el servidor está configurado con CORS habilitado. Para producción, configurar el servidor web apropiadamente.

## 📝 Scripts Disponibles

- `npm run dev`: Inicia servidor de desarrollo
- `npm run build`: Genera build de producción
- `npm run start`: Sirve archivos de producción
- `npm run preview`: Preview del build (alias de start)

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o preguntas sobre el proyecto, contactar al equipo de desarrollo.