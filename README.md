# Alke Wallet

Proyecto frontend que simula una billetera digital (wallet), desarrollado como parte del módulo de **Fundamentos del Desarrollo Frontend**.

La aplicación permite a un usuario interactuar con funcionalidades básicas de una wallet: inicio de sesión, visualización de saldo, depósitos, transferencias y registro de transacciones, utilizando únicamente tecnologías del lado del cliente.

---

## 🚀 Funcionalidades

* Login simulado de usuario
* Visualización de balance
* Depósitos de dinero
* Transferencias a destinatarios
* Autocompletado de destinatarios con **jQuery UI**
* Registro de transacciones
* Persistencia de datos mediante **localStorage**

---

## 🛠️ Tecnologías utilizadas

* **HTML5** – estructura del sitio
* **CSS3** – estilos y layout
* **JavaScript (ES6)** – lógica de negocio
* **jQuery** – manipulación del DOM
* **jQuery UI** – componente Autocomplete
* **Git & GitHub** – control de versiones y flujo de trabajo

---

## 📁 Estructura del proyecto

```
alke-wallet/
├── css/
│   └── styles.css
├── js/
│   ├── balance.js
│   └── transfer.js
├── pages/
│   ├── login.html
│   ├── menu.html
│   ├── deposit.html
│   ├── sendmoney.html
│   └── transactions.html
├── index.html
└── README.md
```

---

## ▶️ Cómo ejecutar el proyecto

1. Clona el repositorio:

   ```bash
   git clone https://github.com/RobertoOtarola/alke-wallet.git
   ```
2. Abre el archivo `index.html` en tu navegador.
3. Navega por la aplicación utilizando el menú.

> No se requiere servidor ni instalación adicional.

---

## 🧠 Decisiones técnicas

* Se utilizó **localStorage** para simular persistencia de datos sin backend.
* La lógica JavaScript está separada por responsabilidad.
* jQuery se implementa de forma funcional (autocomplete) y no decorativa.
* El desarrollo siguió un flujo de trabajo basado en **branches, pull requests e issues**.

---

## 📌 Estado del proyecto

Proyecto finalizado según los requerimientos del módulo.

Funcionalidades opcionales (como animaciones UI) quedaron fuera del alcance por no ser obligatorias.

---

## 👤 Autor

**Roberto Otárola**
Proyecto desarrollado con fines educativos.
