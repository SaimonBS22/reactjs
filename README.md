# Proyecto E-commerce de Tecnología

## Descripción General

Este proyecto consiste en el desarrollo de una tienda en línea enfocada en productos tecnológicos como:

- Consolas de videojuegos.
- Teléfonos celulares.
- Auriculares.
- Computadoras.

El objetivo es proporcionar a los usuarios una experiencia fluida para explorar, seleccionar y comprar productos, integrando tecnologías modernas para la gestión y visualización de datos.

---

## Características Principales

### Catálogo de Productos
- Visualización dinámica de productos tecnológicos organizados en categorías.
- Detalle completo de cada producto con imágenes, especificaciones y precios.

### Gestión de Carrito de Compras
- Agregar o eliminar productos del carrito de compras.
- Visualización en tiempo real del total de la compra.

### Procesamiento de Pedidos
- Creación de órdenes de compra con datos guardados en **Firebase**.
- Integración con formularios para recolectar datos del usuario.

---

## Tecnologías Utilizadas

### Frontend
- **React.js**: Para crear una interfaz de usuario moderna y dinámica.
- **react-dom**: Manejo eficiente del árbol de componentes de React.
- **react-router-dom**: Implementación de navegación entre rutas de manera fluida.
- **react-spinners**: Animaciones de carga para mejorar la experiencia del usuario.
- **sweetalert2**: Alertas personalizadas para confirmaciones y notificaciones.

### Backend
- **Firebase**:
  - Base de datos en tiempo real para almacenar los productos, las órdenes de compra y los datos del usuario.
  - Servicio de autenticación para la gestión de usuarios (si aplica).

---

## Flujo de Trabajo

1. **Inicio**: Los usuarios acceden a la página de inicio donde se presenta un catálogo de productos destacados.
2. **Navegación**: Pueden explorar diferentes categorías utilizando la barra de navegación habilitada con **react-router-dom**.
3. **Carrito de Compras**:
   - Los productos seleccionados se agregan al carrito.
   - Se calcula el costo total dinámicamente.
4. **Compra y Confirmación**:
   - Los datos de la compra se recolectan a través de un formulario.
   - Se utiliza **sweetalert2** para mostrar confirmaciones o errores.
   - La orden se guarda en **Firebase**.