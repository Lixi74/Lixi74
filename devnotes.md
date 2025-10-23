# Notas de Desarrollo - Configuración de Dominio y Deployment

---

## 🌐 Configuración de Dominio Personalizado

### Archivos a Modificar

#### 1. **Workflow de Deploy (`.github/workflows/deploy.yml`)**
```yaml
- name: Create CNAME file 🔧
  run: echo "TU_NUEVO_DOMINIO.com" > build/CNAME
```
**Ubicación**: Línea ~32 en la sección "Create CNAME file"

#### 2. **Variables de Entorno**
- **`.env`**: `PUBLIC_URL = ""`
- **`.github/workflows/deploy.yml`**: `PUBLIC_URL: ""`

#### 3. **Package.json**
```json
{
  "homepage": "https://TU_NUEVO_DOMINIO.com"
}
```

---

## 📄 Configuración de GitHub Pages Estándar

### Si NO usas dominio personalizado:

#### 1. **Configurar subruta del repositorio**
- **`.env`**: `PUBLIC_URL = "/NOMBRE_REPOSITORIO"`
- **`.github/workflows/deploy.yml`**: `PUBLIC_URL: "/NOMBRE_REPOSITORIO"`

#### 2. **Actualizar package.json**
```json
{
  "homepage": "https://USUARIO.github.io/NOMBRE_REPOSITORIO"
}
```

#### 3. **Deshabilitar CNAME en workflow**
```yaml
# - name: Create CNAME file 🔧
#   run: echo "dominio.com" > build/CNAME
```

---

## 🚨 Solución de Problemas Comunes

### Página en Blanco

**Síntoma**: La página aparece en blanco cuando se accede al sitio.

**Causa**: El `PUBLIC_URL` no está configurado correctamente.

**Soluciones**:
- **Dominio personalizado**: `PUBLIC_URL = ""`
- **GitHub Pages estándar**: `PUBLIC_URL = "/NOMBRE_REPOSITORIO"`

### Recursos 404 (CSS, JS, imágenes no cargan)

**Causa**: Los assets no se encuentran en la ruta correcta.

**Solución**: Verificar que `PUBLIC_URL` coincida con la estructura de deployment.

---