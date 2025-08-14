#!/bin/bash

# Script de diagnóstico para VPS - App Mathilde Web
# Este script verifica todos los aspectos de conectividad

echo "🔍 Diagnóstico de conectividad para VPS"
echo "========================================"

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para imprimir mensajes con colores
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# 1. Verificar que estamos en el directorio correcto
echo ""
print_info "1. Verificando directorio del proyecto..."
if [ -f "package.json" ]; then
    print_success "package.json encontrado"
else
    print_error "No se encontró package.json"
    exit 1
fi

# 2. Verificar que Node.js esté instalado
echo ""
print_info "2. Verificando Node.js..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    print_success "Node.js instalado: $NODE_VERSION"
else
    print_error "Node.js no está instalado"
    exit 1
fi

# 3. Verificar que npm esté instalado
echo ""
print_info "3. Verificando npm..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    print_success "npm instalado: $NPM_VERSION"
else
    print_error "npm no está instalado"
    exit 1
fi

# 4. Obtener información del sistema
echo ""
print_info "4. Información del sistema..."
HOSTNAME=$(hostname)
print_info "Hostname: $HOSTNAME"

# Obtener IPs del sistema
echo ""
print_info "5. Direcciones IP del sistema..."
if command -v ip &> /dev/null; then
    echo "IPs disponibles:"
    ip addr show | grep "inet " | grep -v "127.0.0.1" | awk '{print "  - " $2}'
else
    print_warning "Comando 'ip' no disponible, usando 'ifconfig'"
    ifconfig | grep "inet " | grep -v "127.0.0.1" | awk '{print "  - " $2}'
fi

# 6. Verificar puertos en uso
echo ""
print_info "6. Verificando puertos en uso..."
if command -v netstat &> /dev/null; then
    echo "Puertos activos:"
    netstat -tlnp | grep -E ":(80|5173|8080)" | awk '{print "  - Puerto " $4}'
else
    print_warning "netstat no disponible"
fi

# 7. Verificar firewall
echo ""
print_info "7. Verificando firewall..."
if command -v ufw &> /dev/null; then
    UFW_STATUS=$(sudo ufw status 2>/dev/null | head -1)
    print_info "UFW Status: $UFW_STATUS"
elif command -v firewall-cmd &> /dev/null; then
    FIREWALL_STATUS=$(sudo firewall-cmd --state 2>/dev/null)
    print_info "Firewalld Status: $FIREWALL_STATUS"
else
    print_warning "No se detectó firewall configurado"
fi

# 8. Verificar Docker
echo ""
print_info "8. Verificando Docker..."
if command -v docker &> /dev/null; then
    DOCKER_VERSION=$(docker --version)
    print_success "Docker instalado: $DOCKER_VERSION"
    
    # Verificar contenedores corriendo
    echo "Contenedores activos:"
    docker ps --format "table {{.Names}}\t{{.Ports}}\t{{.Status}}" 2>/dev/null || print_warning "No se pueden listar contenedores"
else
    print_warning "Docker no está instalado"
fi

# 9. Verificar dependencias del proyecto
echo ""
print_info "9. Verificando dependencias del proyecto..."
if [ -d "node_modules" ]; then
    print_success "node_modules encontrado"
else
    print_warning "node_modules no encontrado, ejecutando npm install..."
    npm install
fi

# 10. Test de conectividad local
echo ""
print_info "10. Test de conectividad local..."
if command -v curl &> /dev/null; then
    # Test puerto 5173
    if curl -s http://localhost:5173 > /dev/null 2>&1; then
        print_success "Puerto 5173 responde localmente"
    else
        print_warning "Puerto 5173 no responde localmente"
    fi
    
    # Test puerto 8080
    if curl -s http://localhost:8080 > /dev/null 2>&1; then
        print_success "Puerto 8080 responde localmente"
    else
        print_warning "Puerto 8080 no responde localmente"
    fi
else
    print_warning "curl no está instalado"
fi

# 11. Información de configuración
echo ""
print_info "11. Configuración del proyecto..."
echo "Scripts disponibles:"
grep '"scripts"' package.json -A 10 | grep -E '"(dev|start|build)"' | sed 's/.*"\([^"]*\)": "\([^"]*\)".*/  - \1: \2/'

# 12. Recomendaciones
echo ""
print_info "12. Recomendaciones para VPS:"
echo "  - Para desarrollo: npm run dev"
echo "  - Para producción: npm run build && npm run start"
echo "  - Para Docker: docker-compose up --build"
echo "  - URLs de acceso:"
echo "    * Local: http://localhost:5173"
echo "    * Red: http://TU_IP_DEL_VPS:5173"
echo "    * Puerto alternativo: http://TU_IP_DEL_VPS:8080"

# 13. Comandos útiles
echo ""
print_info "13. Comandos útiles para diagnóstico:"
echo "  - Ver procesos: ps aux | grep node"
echo "  - Ver puertos: netstat -tlnp | grep 5173"
echo "  - Ver logs: tail -f logs/app.log"
echo "  - Test externo: curl -I http://TU_IP_DEL_VPS:5173"

# 14. Información específica para Dokploy
echo ""
print_info "14. Configuración para Dokploy:"
echo "  - Puerto de producción: 8080"
echo "  - Puerto de desarrollo: 5173"
echo "  - Build command: npm run build"
echo "  - Start command: npm run start"
echo "  - Output directory: dist"

echo ""
print_success "Diagnóstico completado!"
