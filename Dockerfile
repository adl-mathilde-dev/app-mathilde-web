# Etapa de construcción
FROM node:18-alpine AS builder

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar todas las dependencias (incluyendo devDependencies para el build)
RUN npm ci

# Copiar código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Crear directorio para la aplicación
WORKDIR /app

# Copiar archivos construidos desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar también la carpeta app completa para tener acceso al código fuente
COPY --from=builder /app/app /app/app

# Copiar package.json y otros archivos importantes
COPY --from=builder /app/package*.json /app/
COPY --from=builder /app/tsconfig.json /app/
COPY --from=builder /app/vite.config.ts /app/
COPY --from=builder /app/tailwind.config.ts /app/

# Copiar archivo .env directamente
COPY --from=builder /app/.env /app/.env
COPY --from=builder /app/.env /.env

# Exponer puerto
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]