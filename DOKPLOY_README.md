# 🚀 Despliegue con Dokploy - App Mathilde Web

## 📋 Configuración del Proyecto

Este proyecto está configurado para desplegarse automáticamente en VPS de Hostinger usando **Dokploy**.

## 🔧 Archivos de Configuración

### Archivos Principales:
- `dokploy.toml` - Configuración principal de Dokploy
- `docker-compose.yml` - Configuración de servicios Docker
- `Dockerfile` - Configuración de la imagen Docker
- `.dockerignore` - Archivos a ignorar en el build
- `.dokployignore` - Archivos a ignorar por Dokploy

## 🚀 Proceso de Despliegue

### 1. Configuración en Dokploy
1. Conecta tu repositorio de GitHub a Dokploy
2. Configura las variables de entorno si es necesario
3. Ejecuta el despliegue

### 2. Variables de Entorno (Opcional)
```bash
NODE_ENV=production
PORT=80
HOSTNAME=0.0.0.0
```

## 🔍 Solución de Problemas

### Error: "Failed to read app source directory"
**Causa**: Dokploy no puede leer la estructura del directorio
**Solución**: 
- Verifica que el repositorio esté correctamente clonado
- Asegúrate de que el `Dockerfile` esté en la raíz del proyecto
- Verifica que no haya archivos corruptos

### Error: "No such container"
**Causa**: El contenedor no se creó correctamente
**Solución**:
- Revisa los logs de build en Dokploy
- Verifica que el `docker-compose.yml` esté correcto
- Asegúrate de que el puerto 80 esté disponible

### Error: "Not a directory (os error 20)"
**Causa**: Problema de permisos o estructura de archivos
**Solución**:
- Verifica que todos los archivos estén en el repositorio
- Asegúrate de que el `.gitignore` no esté excluyendo archivos necesarios
- Revisa que el contexto del Dockerfile sea correcto

## 🛠️ Comandos de Verificación

### Verificar estructura del proyecto:
```bash
ls -la
docker-compose config
```

### Verificar build local:
```bash
docker-compose build
docker-compose up -d
```

### Verificar logs:
```bash
docker-compose logs web
```

## 📊 Monitoreo

### Health Check
La aplicación incluye health checks automáticos:
- **Endpoint**: `http://tu-dominio.com/`
- **Intervalo**: 30 segundos
- **Timeout**: 10 segundos
- **Reintentos**: 3

### Logs
```bash
# Ver logs en tiempo real
docker-compose logs -f web

# Ver logs de los últimos 100 líneas
docker-compose logs --tail=100 web
```

## 🔄 Actualizaciones

Para actualizar la aplicación:
1. Haz push de los cambios a GitHub
2. Dokploy detectará automáticamente los cambios
3. Ejecutará un nuevo build y despliegue
4. El contenedor se reiniciará automáticamente

## 🆘 Soporte

Si tienes problemas:

1. **Revisa los logs de Dokploy** en el dashboard
2. **Verifica la configuración** de los archivos
3. **Prueba localmente** con `docker-compose up`
4. **Contacta al soporte** de Dokploy si es necesario

## 📝 Notas Importantes

- ✅ El proyecto usa **Nginx** para servir archivos estáticos
- ✅ **Health checks** están configurados automáticamente
- ✅ **Restart policy** está configurado como `unless-stopped`
- ✅ **Puerto 80** está expuesto para HTTP
- ✅ **Variables de entorno** están configuradas para producción

## 🔒 Seguridad

- Usuario no-root en el contenedor
- Headers de seguridad en Nginx
- Permisos de archivos restringidos
- Health checks para monitoreo
