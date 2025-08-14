#!/bin/bash

# Script de post-instalación para Dokploy
echo "🚀 Ejecutando post-instalación..."

# Verificar que el contenedor esté funcionando
echo "🔍 Verificando estado del contenedor..."
docker ps | grep app-mathilde-web

# Verificar logs si hay problemas
if [ $? -ne 0 ]; then
    echo "⚠️ Contenedor no está corriendo. Revisando logs..."
    docker logs app-mathilde-web
fi

# Verificar que la aplicación responda
echo "🌐 Verificando que la aplicación responda..."
curl -f http://localhost/ || echo "⚠️ La aplicación no responde en localhost"

# Verificar permisos de archivos
echo "🔐 Verificando permisos..."
ls -la /usr/share/nginx/html/

echo "✅ Post-instalación completada"
