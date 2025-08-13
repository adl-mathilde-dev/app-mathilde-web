# Guía de Deployment en VPS - App Mathilde Web

Esta guía te ayudará a desplegar la aplicación en un VPS y acceder desde la IP del servidor.

## 🚀 Configuración para VPS

### **Problema Resuelto**
- ✅ **Antes**: Solo accesible desde `localhost`
- ✅ **Ahora**: Accesible desde la IP del VPS

## 📋 Opciones de Deployment

### **Opción 1: Desarrollo Directo en VPS**
```bash
# En tu VPS
git clone <tu-repositorio>
cd app-mathilde-web
./start-vps.sh
```

### **Opción 2: Docker en VPS**
```bash
# En tu VPS
git clone <tu-repositorio>
cd app-mathilde-web
docker-compose --profile dev up --build
```

### **Opción 3: Build de Producción**
```bash
# En tu VPS
git clone <tu-repositorio>
cd app-mathilde-web
npm install
npm run build
npm run start
```

## 🌐 URLs de Acceso

### **Después de la configuración:**
- **Local (en el VPS)**: `http://localhost:5173`
- **Desde fuera**: `http://TU_IP_DEL_VPS:5173`
- **Con dominio**: `http://tudominio.com:5173`

## 🔧 Configuración del Firewall

### **Ubuntu/Debian (ufw)**
```bash
# Abrir puerto 5173
sudo ufw allow 5173

# Verificar estado
sudo ufw status
```

### **CentOS/RHEL (firewalld)**
```bash
# Abrir puerto 5173
sudo firewall-cmd --permanent --add-port=5173/tcp
sudo firewall-cmd --reload

# Verificar
sudo firewall-cmd --list-ports
```

### **AWS EC2**
1. Ir a **Security Groups**
2. Seleccionar tu grupo de seguridad
3. **Inbound Rules** → **Edit**
4. Agregar regla: `Type: Custom TCP, Port: 5173, Source: 0.0.0.0/0`

## 📊 Verificación

### **1. Verificar que el servidor está corriendo**
```bash
# En el VPS
curl http://localhost:5173
```

### **2. Verificar desde fuera**
```bash
# Desde tu computadora
curl http://TU_IP_DEL_VPS:5173
```

### **3. Verificar puertos abiertos**
```bash
# En el VPS
netstat -tlnp | grep 5173
```

## 🐳 Docker en VPS

### **Comandos útiles:**
```bash
# Construir y ejecutar
docker-compose --profile dev up --build -d

# Ver logs
docker-compose logs -f app-mathilde-web-dev

# Detener
docker-compose down

# Reconstruir
docker-compose --profile dev up --build --force-recreate
```

### **Variables de entorno en Docker:**
```yaml
environment:
  - NODE_ENV=development
  - HOST=0.0.0.0  # Importante para VPS
```

## 🔍 Troubleshooting

### **Problema: No puedo acceder desde fuera**
1. **Verificar firewall**: `sudo ufw status`
2. **Verificar puerto**: `netstat -tlnp | grep 5173`
3. **Verificar logs**: `docker-compose logs app-mathilde-web-dev`

### **Problema: Error de CORS**
- La aplicación ya está configurada con CORS habilitado
- Verificar que las APIs estén configuradas correctamente

### **Problema: Puerto ocupado**
```bash
# Ver qué está usando el puerto
sudo lsof -i :5173

# Matar proceso si es necesario
sudo kill -9 <PID>
```

## 📝 Scripts Disponibles

### **start-vps.sh**
- ✅ Configuración automática para VPS
- ✅ Muestra IP del servidor
- ✅ Instala dependencias automáticamente
- ✅ Inicia servidor con configuración correcta

### **Uso:**
```bash
chmod +x start-vps.sh
./start-vps.sh
```

## 🔒 Seguridad

### **Recomendaciones:**
1. **Usar HTTPS** en producción
2. **Configurar firewall** apropiadamente
3. **Usar variables de entorno** para configuraciones sensibles
4. **Monitorear logs** regularmente

### **Para producción:**
```bash
# Usar build de producción
npm run build:prod
npm run start
```

## 📞 Comandos de Verificación

### **Verificar que todo funciona:**
```bash
# 1. Verificar que el servidor está corriendo
curl -I http://localhost:5173

# 2. Verificar desde IP externa
curl -I http://TU_IP_DEL_VPS:5173

# 3. Verificar logs
docker-compose logs app-mathilde-web-dev

# 4. Verificar puertos
netstat -tlnp | grep 5173
```

## 🎯 Resumen

Con esta configuración:
- ✅ La aplicación será accesible desde la IP del VPS
- ✅ Funciona tanto en desarrollo como en producción
- ✅ Configuración automática con scripts
- ✅ Soporte completo para Docker

**URLs de acceso:**
- Local: `http://localhost:5173`
- Externo: `http://TU_IP_DEL_VPS:5173`
