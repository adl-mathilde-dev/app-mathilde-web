# Dockerfile para App Mathilde Web
# Multi-stage build para optimizar el tamaño de la imagen

# Etapa 1: Build
FROM node:18-alpine AS builder

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./
COPY tsconfig.json ./
COPY tailwind.config.ts ./
COPY vite.config*.ts ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar código fuente
COPY . .

# Ejecutar build
RUN npm run build

# Etapa 2: Servidor de producción
FROM nginx:alpine AS production

# Copiar configuración personalizada de nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar archivos de build
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer puerto
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
