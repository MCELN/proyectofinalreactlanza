# Aplicación web de comercio electrónico con React, Firebase y Carrito de Compras

Esta es una aplicación web desarrollada con React que utiliza Firebase para la autenticación de usuarios e implementa una funcionalidad de carrito de compras.

## Instalación

Para utilizar esta aplicación, sigue estos pasos:

1.  Clona el repositorio en tu máquina local.
2.  Navega hasta el directorio del proyecto.
3.  Ejecuta el comando npm install para instalar las dependencias.
4.  Ejecuta el comando npm start para iniciar la aplicación.

## Características

- **Navegación de Productos: Los usuarios pueden navegar por los productos disponibles sin necesidad de iniciar sesión. Sin embargo, no podrán agregar productos al carrito sin iniciar sesión.

- **Registro de Usuarios e Inicio de Sesión: Para acceder al carrito y sus controles, los usuarios deben registrarse e iniciar sesión. Todos los campos del formulario de registro son obligatorios.

- **Carrito de Compras: Los usuarios pueden agregar productos al carrito, pero solo si el producto seleccionado tiene stock disponible. El carrito muestra los productos agregados junto con el subtotal y el total.

- **Simulación de Compra: Al hacer clic en el botón "Pagar", se simula la compra de los productos en el carrito. Esto modifica el stock de los productos comprados en Firebase.

- **Carrito Persistente: Los productos en el carrito se almacenan en el almacenamiento local (local storage) de cada usuario. Esto permite que los usuarios accedan a su carrito incluso si cierran sesión y vuelven a iniciarla.

- **Gestión de Stock: El usuario administrador tiene acceso a una sección de administración de productos. Esta sección incluye funcionalidades para agregar stock a productos existentes o agregar nuevos productos al inventario.

## Notas

-   Es importante tener una configuración de Firebase válida para la autenticación y el acceso a la base de datos antes de utilizar esta aplicación.

-   Si un usuario tiene elementos almacenados en su carrito en el almacenamiento local y otro usuario realiza una compra que agota el stock de uno de los productos en el carrito del primer usuario, la compra del primer usuario no se completará. La aplicación notificará al usuario sobre el producto que ya no tiene el stock seleccionado.

-   Asegúrate de configurar correctamente las variables de entorno o configuraciones necesarias para que la aplicación se conecte a Firebase.

## Dependencias

Las principales dependencias utilizadas en este proyecto son:

-   React: Una biblioteca de JavaScript para construir interfaces de usuario.
-   Firebase: Una plataforma para construir aplicaciones web y móviles con sincronización de datos en tiempo real.
-   npm: El administrador de paquetes para el entorno de ejecución de JavaScript Node.js.

Consulta el archivo package.json para obtener una lista completa de las dependencias.

## Contribuciones

Las contribuciones a este proyecto son bienvenidas. Si encuentras algún problema o tienes sugerencias para mejoras, crea un nuevo problema (issue) o envía una solicitud de extracción (pull request).