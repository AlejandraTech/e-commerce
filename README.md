# E-Commerce 🛒

Este proyecto consiste en una aplicación de comercio electrónico desarrollada con Angular. Proporciona funcionalidades para que los usuarios puedan explorar productos, agregarlos al carrito de compras, realizar pedidos y gestionar su cuenta. Además, los administradores tienen acceso a funcionalidades adicionales para administrar productos y usuarios dentro de la plataforma.

## Contenido del Repositorio 📂

- **app/**: Este directorio contiene todos los componentes, servicios y otros archivos esenciales de la aplicación.
  - **app/components/**: Aquí se encuentran los componentes principales de la aplicación, incluyendo:
    - **cart/**: Componente para gestionar el carrito de compras.
    - **home/**: Componente para la página de inicio.
    - **login/**: Componente para el inicio de sesión de usuarios.
    - **product-details/**: Componente para mostrar los detalles de los productos.
    - **product-list/**: Componente para mostrar una lista de productos.
    - **register/**: Componente para el registro de usuarios.
    - **user-management/**: Componente para la gestión de usuarios y roles.
  - **app/services/**: Contiene los servicios utilizados en la aplicación, incluyendo:
    - **cart.service.ts**: Servicio para gestionar el carrito de compras.
    - **product.service.ts**: Servicio para gestionar los productos.
    - **user.service.ts**: Servicio para gestionar usuarios y autenticación.
  - **app/app.component.html**: Plantilla principal de la aplicación que incluye el componente de barra de navegación (navbar).
  - **app/app-routing.module.ts**: Configuración de las rutas de la aplicación.
- **assets/**: Directorio para almacenar archivos estáticos como imágenes y estilos.
- **index.html**: Archivo principal de la aplicación Angular donde se incluyen los scripts y estilos necesarios.

## Funcionalidades 🛠️

- **Inicio de Sesión y Registro:** Los usuarios pueden iniciar sesión o registrarse en la plataforma.
- **Gestión de Productos:**
  - *Usuarios Cliente:*
    - Pueden ver los detalles de los productos.
    - Pueden agregar productos al carrito.
  - *Usuarios Administradores:*
    - Además de las funcionalidades de los usuarios cliente, los administradores pueden agregar, editar y eliminar productos.
- **Carrito de Compras:** Los usuarios pueden agregar productos al carrito, eliminar productos del carrito y realizar el proceso de pago.
- **Gestión de Usuarios:**
  - *Usuarios Administradores:*
    - Pueden gestionar los roles de los usuarios, incluyendo la actualización de roles de otros usuarios.
- **Navegación y Autenticación:** La barra de navegación varía según el estado de inicio de sesión del usuario y su rol, mostrando diferentes opciones de menú.

## Cómo Usar 📋

Para utilizar esta aplicación de comercio electrónico, sigue los siguientes pasos:

1. Clona el repositorio: `git clone https://github.com/AlejandraTech/e-commerce.git`
2. Accede al directorio del proyecto: `cd e-commerce`
3. Instala las dependencias necesarias ejecutando el siguiente comando en tu terminal: `npm install`
4. Una vez instaladas las dependencias, puedes iniciar la aplicación ejecutando el siguiente comando: `ng serve`
5. Abre tu navegador web y visita la siguiente URL: [http://localhost:4200/](http://localhost:4200/)

## Contribuciones 🤝

¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes una idea para mejorar la aplicación, no dudes en abrir un issue o enviar un pull request.

## Autor 👩‍💻

Este proyecto fue creado por [@AlejandraTech](https://github.com/AlejandraTech).
