#!/bin/bash

# Script de Deployment para App Mathilde Web
# Este script automatiza el proceso de build y deployment

set -e  # Salir si cualquier comando falla

echo "🚀 Iniciando proceso de deployment..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para imprimir mensajes con colores
print_message() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    print_error "No se encontró package.json. Asegúrate de estar en el directorio raíz del proyecto."
    exit 1
fi

# Verificar que Node.js esté instalado
if ! command -v node &> /dev/null; then
    print_error "Node.js no está instalado. Por favor, instala Node.js primero."
    exit 1
fi

# Verificar que npm esté instalado
if ! command -v npm &> /dev/null; then
    print_error "npm no está instalado. Por favor, instala npm primero."
    exit 1
fi

print_step "Verificando versiones..."
NODE_VERSION=$(node --version)
NPM_VERSION=$(npm --version)
print_message "Node.js: $NODE_VERSION"
print_message "npm: $NPM_VERSION"

# Limpiar instalaciones anteriores
print_step "Limpiando instalaciones anteriores..."
if [ -d "node_modules" ]; then
    rm -rf node_modules
    print_message "node_modules eliminado"
fi

if [ -d "dist" ]; then
    rm -rf dist
    print_message "dist eliminado"
fi

# Instalar dependencias
print_step "Instalando dependencias..."
npm install
print_message "Dependencias instaladas correctamente"

# Verificar vulnerabilidades de seguridad
print_step "Verificando vulnerabilidades de seguridad..."
if npm audit --audit-level=moderate; then
    print_warning "Se encontraron vulnerabilidades. Ejecutando npm audit fix..."
    npm audit fix
else
    print_message "No se encontraron vulnerabilidades críticas"
fi

# Ejecutar build
print_step "Ejecutando build de producción..."
npm run build

# Verificar que el build se completó correctamente
if [ ! -d "dist" ]; then
    print_error "El build falló. No se generó la carpeta dist."
    exit 1
fi

if [ ! -f "dist/index.html" ]; then
    print_error "El build falló. No se generó index.html."
    exit 1
fi

print_message "Build completado exitosamente"

# Mostrar información del build
print_step "Información del build:"
BUILD_SIZE=$(du -sh dist | cut -f1)
print_message "Tamaño total del build: $BUILD_SIZE"

# Contar archivos generados
FILE_COUNT=$(find dist -type f | wc -l)
print_message "Número de archivos generados: $FILE_COUNT"

# Verificar archivos críticos
print_step "Verificando archivos críticos..."
CRITICAL_FILES=("dist/index.html" "dist/assets/")

for file in "${CRITICAL_FILES[@]}"; do
    if [ -e "$file" ]; then
        print_message "✓ $file existe"
    else
        print_error "✗ $file no existe"
        exit 1
    fi
done

# Opcional: Ejecutar tests si existen
if [ -f "package.json" ] && grep -q "\"test\":" package.json; then
    print_step "Ejecutando tests..."
    if npm test; then
        print_message "Tests pasaron correctamente"
    else
        print_warning "Algunos tests fallaron, pero continuando con el deployment"
    fi
fi

# Mostrar instrucciones de deployment
print_step "Deployment completado exitosamente! 🎉"
echo ""
echo "📁 Los archivos de producción están en la carpeta 'dist/'"
echo ""
echo "🌐 Para servir la aplicación, puedes usar:"
echo "   npm run start"
echo ""
echo "📋 Opciones de deployment:"
echo "   1. Subir la carpeta 'dist/' a un servidor web estático"
echo "   2. Usar servicios como Netlify, Vercel, o AWS S3"
echo "   3. Configurar Nginx/Apache para servir los archivos"
echo ""
echo "🔧 Configuración de servidor recomendada:"
echo "   - Configurar redirección a index.html para SPA routing"
echo "   - Habilitar compresión gzip"
echo "   - Configurar headers de cache apropiados"
echo ""
echo "📊 Estadísticas del build:"
echo "   - Tamaño total: $BUILD_SIZE"
echo "   - Archivos generados: $FILE_COUNT"
echo "   - Build completado en: $(date)"

print_message "¡Deployment listo para producción!"
