# Guía de Deployment - App Mathilde Web

Esta guía te ayudará a desplegar la aplicación App Mathilde Web en diferentes entornos.

## 🚀 Opciones de Deployment

### 1. Deployment Local con Vite

#### Prerrequisitos
- Node.js 18 o superior
- npm

#### Pasos
```bash
# Clonar el repositorio
git clone <repository-url>
cd app-mathilde-web

# Instalar dependencias
npm install

# Build de producción
npm run build

# Servir archivos
npm run start
```

### 2. Deployment con Docker

#### Prerrequisitos
- Docker
- Docker Compose

#### Pasos
```bash
# Build y ejecutar con Docker Compose
docker-compose up --build

# Solo build de la imagen
docker build -t app-mathilde-web .

# Ejecutar contenedor
docker run -p 80:80 app-mathilde-web
```

### 3. Deployment en Servicios Cloud

#### Netlify
1. Conectar repositorio en Netlify
2. Configurar build command: `npm run build`
3. Configurar publish directory: `dist`
4. Configurar variables de entorno si es necesario

#### Vercel
1. Conectar repositorio en Vercel
2. Configurar framework preset: Vite
3. Configurar build command: `npm run build`
4. Configurar output directory: `dist`

#### AWS S3 + CloudFront
1. Subir archivos de `dist/` a bucket S3
2. Configurar bucket para hosting estático
3. Crear distribución CloudFront
4. Configurar dominio personalizado

## 🔧 Configuración de Servidor

### Nginx
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html;
    index index.html;

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache para archivos estáticos
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Compresión gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;
}
```

### Apache (.htaccess)
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Cache para archivos estáticos
<FilesMatch "\.(js|css|png|jpg|jpeg|gif|ico|svg)$">
    ExpiresActive On
    ExpiresDefault "access plus 1 year"
    Header set Cache-Control "public, immutable"
</FilesMatch>
```

## 🔒 Configuración de Seguridad

### Headers de Seguridad
```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
```

### Variables de Entorno
Crear archivo `.env` basado en `env.example`:
```bash
cp env.example .env
# Editar .env con valores reales
```

## 📊 Monitoreo y Logs

### Logs de Nginx
```bash
# Ver logs de acceso
tail -f /var/log/nginx/access.log

# Ver logs de error
tail -f /var/log/nginx/error.log
```

### Health Check
```bash
# Verificar que la aplicación responde
curl -f http://localhost

# Verificar endpoints específicos
curl -f http://localhost/api/health
```

## 🚨 Troubleshooting

### Problemas Comunes

#### Error 404 en rutas de SPA
- Verificar configuración de redirección en servidor
- Asegurar que todas las rutas redirijan a `index.html`

#### Problemas de CORS
- Configurar headers CORS en servidor
- Verificar configuración de API endpoints

#### Problemas de Cache
- Limpiar cache del navegador
- Verificar headers de cache en servidor
- Usar versionado de archivos

#### Problemas de Build
```bash
# Limpiar cache
npm cache clean --force

# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install

# Verificar versiones
node --version
npm --version
```

### Comandos Útiles

```bash
# Verificar build
npm run build

# Verificar tipos TypeScript
npm run type-check

# Limpiar proyecto
npm run clean

# Deployment automatizado
npm run deploy
```

## 📈 Optimización

### Performance
- Habilitar compresión gzip
- Configurar cache apropiado
- Optimizar imágenes
- Usar CDN para archivos estáticos

### SEO
- Configurar meta tags
- Implementar sitemap
- Configurar robots.txt
- Optimizar para Core Web Vitals

## 🔄 CI/CD

### GitHub Actions
```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run deploy
```

### GitLab CI
```yaml
stages:
  - build
  - deploy

build:
  stage: build
  image: node:18
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/

deploy:
  stage: deploy
  script:
    - echo "Deploy to server"
```

## 📞 Soporte

Para problemas específicos de deployment:
1. Revisar logs del servidor
2. Verificar configuración de red
3. Contactar al equipo de DevOps
4. Revisar documentación de la plataforma de hosting
