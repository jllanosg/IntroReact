Pokemon API clone from 2020-2 IWG-101 Homework. The purpose of this repository is to show students basic concepts of React JS

## Prerequisites

- [Node JS](https://nodejs.org/es/) 12+
  - When installing, Node will ask to download "recommended tools". They're not neccesary for this example

## Start from scratch 

- Create a empty folder
- Open terminal
  - Windows: Shift + Right Click and select *Open PowerShell Here*
  - Mac: Right Click folder and select *New Terminal at Folder*
- Run the following command:

```sh
npx create-react-app my-app
cd my-app
npm start
```

Where **my-app** is the name of the new project. You can change it later

## Running the example 

- Download or clone this repository

- Open terminal in the project root folder following the above instructions

- Run the following command:

  ```sh
  npm start
  ```

- Your default browser will open the local server automaticaly

  - If it doesn't open, go to [http://localhost:3000](http://localhost:3000) to view it in the browser.

Compile and Publish are out of the scope for this example.

## Recommended resources

- [React First Steps (Spanish)](https://es.reactjs.org/docs/hello-world.html) HIGHLY RECOMMENDED
- [React Tutorial learning by doing (Spanish)](https://es.reactjs.org/tutorial/tutorial.html)
  - WARNING: This guide is **heavily** class-component focused, you need to understand Oriented Object Programming.
- [Introducing Hooks(Spanish)](https://es.reactjs.org/docs/hooks-intro.html)
  - Hooks are the perfect alternative to avoid using class-component to render objects
- [Udemy - Modern React with Redux [2020 Update]](https://www.udemy.com/course/react-redux/)
- [Udemy - The Modern Javascript Bootcamp Course (2020)](https://www.udemy.com/course/javascript-beginners-complete-tutorial/)

**Requerimientos funcionales**:  

- Multiusuario
- Los usuarios pueden depositar y retirar dinero de su cuenta usando el sistema.
- El sistema controlará el ingreso y sólo permitirá su uso a los usuarios que ingresen con datos de autenticación válidos.
- El sistema aceptará divisa nacional (CLP) y extranjera (Dólares americanos USD).
- El sistema requerirá que el retiro mínimo sea de $2.000 CLP o $10 USD.
- El sistema solo permitirá retirar hasta $100 USD o $200.000 CLP por operación.



**Requerimientos no funcionales**:  

- El sistema debe garantizar su funcionamiento correcto en horario laboral
- El sistema debe deshabilitar operaciones en dólares después de las 14:00hrs del viernes de cada semana.
- Las transacciones de depósito no pueden tardar más de 1 segundo.
- El sistema debe mantener un respaldo de todas las operaciones en caso de falla externa.
- La probabilidad de falla del sistema no puede superar el 0.1% por operación.
- El sistema debe ejecutarse en entorno JVM 14.
- Las pruebas de software automatizadas se ejecutarán utilizando JUnit 5.



**Reglas del negocio:**



- Cada movimiento debe ser identificado con un ID único.
- Cada movimiento de dinero debe ser confirmado por un servidor central.
- Los movimientos realizados no devengan costos adicionales al usuario.
- Las transacciones sólo pueden ser aprobadas si existe efectivo suficiente en el aplicativo.
- El descuento (o depósito) a la cuenta del usuario sólo debe hacerse efectivo luego de realizar la operación física de recibir (o entregar) billetes.
- El aplicativo no debe contener una interfaz de usuario (GUI)
- Si el usuario intenta realizar una quinta operación, se debe notificar y cerrar sesión.
- Cada cuenta de usuario inicia en el sistema con un saldo de $1.000.000 CLP y $0 USD

