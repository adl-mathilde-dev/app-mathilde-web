# Solución de Problemas - Dokploy

## 🚨 Error: "Failed to read app source directory"

### **Problema:**
```
Error: Failed to read app source directory
Caused by:
Not a directory (os error 20)
Error response from daemon: No such container: app-mathilde-web-na9dxq-XXXXX
```

### **Causas Posibles:**
1. **Conflicto de nombres de contenedores**
2. **Configuración de Docker Compose incompatible**
3. **Estructura de directorios incorrecta**
4. **Permisos de archivos**

## 🔧 Soluciones Implementadas

### **1. Docker Compose Simplificado**
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "8080:80"
    environment:
      NODE_ENV: production
    restart: unless-stopped
```

### **2. Archivo de Configuración Dokploy**
```yaml
# dokploy.config.yml
app:
  name: app-mathilde-web
  type: web
  framework: vite
  build:
    command: npm run build
    output: dist
  start:
    command: npm run start
  ports:
    - 8080
  environment:
    NODE_ENV: production
```

## 📋 Pasos para Resolver

### **Paso 1: Verificar Estructura del Proyecto**
```bash
# En tu VPS
ls -la
# Deberías ver:
# - package.json
# - docker-compose.yml
# - Dockerfile
# - app/ (directorio)
```

### **Paso 2: Limpiar Contenedores Anteriores**
```bash
# Detener todos los contenedores
docker stop $(docker ps -aq)

# Eliminar contenedores
docker rm $(docker ps -aq)

# Eliminar imágenes
docker rmi $(docker images -q)
```

### **Paso 3: Verificar Permisos**
```bash
# Dar permisos correctos
chmod +x *.sh
chmod 644 *.yml
chmod 644 *.json
```

### **Paso 4: Reintentar Deployment**
1. Ir a Dokploy
2. Seleccionar tu proyecto
3. Hacer click en "Deploy"
4. Verificar logs

## 🔍 Verificación Post-Deployment

### **Comandos de Verificación:**
```bash
# 1. Verificar que el contenedor está corriendo
docker ps

# 2. Verificar logs del contenedor
docker logs $(docker ps -q)

# 3. Verificar puertos
netstat -tlnp | grep 8080

# 4. Test de conectividad
curl -I http://localhost:8080
```

### **URLs de Acceso:**
- **Local**: `http://localhost:8080`
- **IP del VPS**: `http://TU_IP_DEL_VPS:8080`
- **Con dominio**: `http://tudominio.com:8080`

## 🐛 Troubleshooting Adicional

### **Si el error persiste:**

#### **Opción 1: Usar Configuración Mínima**
```yaml
# docker-compose.yml mínimo
version: '3.8'
services:
  web:
    build: .
    ports:
      - "8080:80"
```

#### **Opción 2: Deployment Manual**
```bash
# En el VPS
git clone <tu-repositorio>
cd app-mathilde-web
npm install
npm run build
npm run start
```

#### **Opción 3: Usar Docker Directo**
```bash
# En el VPS
docker build -t app-mathilde-web .
docker run -p 8080:80 app-mathilde-web
```

## 📞 Comandos de Diagnóstico

### **Script de Diagnóstico:**
```bash
# Ejecutar diagnóstico completo
./diagnose-vps.sh
```

### **Verificar Configuración:**
```bash
# Verificar sintaxis de docker-compose
docker-compose config

# Verificar que el build funciona
docker build -t test-build .
```

## ✅ Checklist de Verificación

- [ ] `package.json` existe y es válido
- [ ] `docker-compose.yml` tiene sintaxis correcta
- [ ] `Dockerfile` está configurado correctamente
- [ ] No hay conflictos de puertos
- [ ] Firewall permite puerto 8080
- [ ] Contenedores anteriores están limpiados
- [ ] Permisos de archivos son correctos

## 🚀 Configuración Recomendada

### **Para Dokploy:**
- Usar `docker-compose.yml` simplificado
- Puerto 8080 para producción
- Sin `container_name` personalizado
- Sin redes personalizadas

### **Para Desarrollo Local:**
- Usar `docker-compose.dev.yml`
- Puerto 5173 para desarrollo
- Volúmenes para hot reload

## 📞 Soporte

Si el problema persiste:
1. Revisar logs completos de Dokploy
2. Verificar configuración del servidor
3. Contactar soporte de Dokploy
4. Usar deployment manual como alternativa
