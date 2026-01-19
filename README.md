# ProyectoFinal_Tecnologia_PDM_

¡Hola! 👋 Bienvenido a mi proyecto final de la tecnología en Producción de Multimedia, desarrollado durante mi formación en el SENA.

Este proyecto es un **portafolio digital** que presenta los servicios de mi empresa ficticia, cubriendo áreas clave de la producción multimedia: **diseño web, animaciones 3D, videos y marketing digital**.

---

## Estructura del Proyecto

El sitio web está construido con las siguientes tecnologías:

* **HTML:** Para la estructura y el contenido de las páginas.
* **CSS:** Para el diseño, la paleta de colores y la disposición de los elementos.
* **JavaScript:** Para la interactividad, como la navegación entre las secciones del menú sin recargar la página.

El sitio se compone de un menú principal que permite la navegación entre las diferentes secciones:

* **Inicio:** Página principal del sitio.
* **Diseño Web:** Muestra un grid de 3x3 con 9 proyectos de diseño web.
* **Animaciones 3D:** Presenta un grid de 3x3 con 9 proyectos de animaciones 3D.
* **Videos:** Muestra un grid de 3x3 con 9 proyectos de video.
* **Marketing Digital:** Brinda información detallada sobre los servicios de marketing.
* **Acerca de:** Contiene la misión, visión, objetivos y la historia de la empresa.
* **Contacto:** Incluye un formulario para que los visitantes puedan solicitar información sobre los servicios.

---

## Diseño y Paleta de Colores principales

Para este proyecto, elegí una paleta de colores vibrantes y profesionales para transmitir energía y modernidad. La paleta utilizada es:


  * **Menú principal (Naranja):** `#FF8C00` (Naranja Oscuro) para el menú y el logo.
  * **Hover del Menu:** `#FFC04D` (Naranja claro) - Para el Menú y logo cuando sean Seleccionados.
  * **primary (Naranja):** `#FF8C00` (Naranja principal) para el menú y el logo.
  * **secondary:** `#2C3E50` Azul oscuro profundo.
  * **accent:** `#E74C3C` Rojo coral para CTAs importantes.
  * **dark:** `#1A252F` Casi negro azulado para textos principales.
  * **light:** `#F8F9FA` Gris muy claro para fondos.
  * **textPrimary:** `#2C3E50` Texto principal oscuro.
  * **textSecondary:** `#5D6D7E` Texto secundario gris.
  * **textLight:** `#FFFFFF` Texto blanco.  
  * **bgPrimary:** `#FFFFFF` Fondo blanco principal.
  * **bgSecondary:** `#F8F9FA` Fondo gris claro.
  * **bgDark:** `#2C3E50` Fondo oscuro.
  * **bgGradient:** `#FF8C00` linear-gradient(135deg, #FF8C00 0%, #E74C3C 100%).
  * **success** `#27AE60` Verde para éxito.
  * **warning:** `#F39C12` Amarillo para advertencias.
  * **info:** `#3498DB` Azul para información.
  * **highlight:** `#3498DB` Azul para elementos destacados.
---

## Funcionalidades Clave

* **Navegación Horizontal:** El menú principal está dispuesto de forma horizontal en el `header`, facilitando el acceso a todas las secciones.
* **Diseño Responsivo:** El diseño está pensado para adaptarse a diferentes tamaños de pantalla, garantizando una buena experiencia de usuario en dispositivos móviles y de escritorio.
* **Contenido Dinámico:** Las secciones de proyectos (Diseño Web, Animaciones 3D y Videos) utilizan un **grid de 3x3** para mostrar los proyectos de manera organizada, cada uno con un título, texto, imagen, leyenda y un botón de "ver proyecto".
  
* **Formulario de Contacto:** El formulario de contacto incluye un **menú desplegable** (`<select>`) para que el usuario pueda especificar el servicio de su interés, lo que agiliza la comunicación.
  Formulario de contacto responsivo desarrollado con HTML y CSS que utiliza FormSubmit.co para el envío de correos electrónicos.

## Características
- Diseño responsivo
- Validación de campos
- Envío de correos sin backend
- Página de confirmación personalizada

## Requisitos Previos
- Navegador web moderno
- Editor de código (recomendado: Visual Studio Code)
- Extensión Live Server para VS Code (opcional pero recomendado)

## Instalación
1. Clona o descarga este repositorio:
```bash
git clone [(https://github.com/alexa272/ProyectoFinal_Tecnologia_PDM_)]
```

2. Abre la carpeta del proyecto en tu editor de código

## Configuración del Formulario

**IMPORTANTE:** Para que el formulario funcione correctamente, debes configurar tu propio email:

1. Abre el archivo `index.html`
2. Busca la línea que contiene:
```html

```
3. Reemplaza `tu-email@ejemplo.com` con tu dirección de correo real
4. **Primera vez:** Al enviar el primer formulario, FormSubmit te enviará un email de verificación. Debes hacer clic en el enlace de confirmación para activar el servicio.

## Cómo Ejecutar el Proyecto

### Opción 1: Live Server (Recomendado)
1. Instala la extensión "Live Server" en VS Code
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"
4. El proyecto se abrirá automáticamente en tu navegador

### Opción 2: Python HTTP Server
```bash
python -m http.server 8000
```
Luego abre: http://localhost:8000

### Opción 3: Abrir directamente
Simplemente abre el archivo `index.html` en tu navegador (puede tener limitaciones con FormSubmit)

## Configuraciones Adicionales de FormSubmit
El formulario incluye las siguientes configuraciones:

- `_captcha: false` - Desactiva el captcha (cámbialo a `true` en producción)
- `_next` - Redirige a una página de agradecimiento después del envío
- `_subject` - Personaliza el asunto del correo (opcional)

Para más opciones, visita: https://formsubmit.co/

## Solución de Problemas

**El formulario no envía:**
- Verifica que hayas configurado tu email en el action del form
- Asegúrate de haber verificado tu email en FormSubmit
- Comprueba que el formulario tenga `method="POST"`

**No recibo los correos:**
- Revisa tu carpeta de spam
- Verifica que el email en el código sea correcto
- Confirma que completaste la verificación de FormSubmit

## Tecnologías Utilizadas

- HTML5
- CSS3
- FormSubmit.co (servicio de envío de formularios)

## 👤 Autor

Creado por **[Alexandra Santa Muñoz]([https://github.com/alexa272](https://github.com/alexa272/ProyectoFinal_Tecnologia_En_Produccion_de_Multimedia))**

- GitHub: [@alexa272](https://github.com/alexa272)
- Email: alexandrasantamunoz@gmail.com

Espero que este proyecto sea una muestra de mis habilidades y conocimientos adquiridos en el SENA. ¡Gracias por visitar!
