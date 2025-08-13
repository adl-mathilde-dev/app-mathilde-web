#!/bin/bash

# Script para iniciar App Mathilde Web en VPS/Docker
# Este script configura la aplicación para ser accesible desde la IP del servidor

echo "🚀 Iniciando App Mathilde Web en modo VPS..."

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json. Asegúrate de estar en el directorio raíz del proyecto."
    exit 1
fi

# Verificar que Node.js esté instalado
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js no está instalado."
    exit 1
fi

# Instalar dependencias si no existen
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
fi

# Obtener la IP del servidor
SERVER_IP=$(hostname -I | awk '{print $1}')
echo "🌐 IP del servidor: $SERVER_IP"

# Mostrar información de acceso
echo ""
echo "✅ Configuración completada!"
echo ""
echo "📋 URLs de acceso:"
echo "   Local: http://localhost:5173"
echo "   Red: http://$SERVER_IP:5173"
echo ""
echo "🔧 Para acceder desde fuera del servidor:"
echo "   - Asegúrate de que el puerto 5173 esté abierto en el firewall"
echo "   - Usa la IP pública del servidor: http://TU_IP_PUBLICA:5173"
echo ""

# Iniciar la aplicación
echo "🚀 Iniciando servidor de desarrollo..."
npm run dev
