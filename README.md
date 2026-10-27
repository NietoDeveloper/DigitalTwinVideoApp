<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,5,30&height=200&section=header&text=SOFTWARE%20DT&fontSize=72&fontColor=FEB60D&animation=fadeIn&fontAlignY=38&desc=Digital%20Twin%20%26%20Service%20Management%20Platforms&descAlignY=58&descSize=18&descColor=DCDCDC" width="100%"/>

<p align="center">
  <img src="https://img.shields.io/badge/Estado-Demo%20Comercial-FEB60D?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Licencia-Privada%20%2F%20Bajo%20Contrato-black?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Bogotá-Colombia-009B3A?style=for-the-badge"/>
</p>

</div>

---

## ⚠️ Qué es este repositorio

Este repositorio es el **showcase público** de **Software DT**, producto de la empresa colombiana de software **[softwaredt.com](https://softwaredt.com)** (Bogotá).

**No contiene el producto final.** No incluye código fuente de producción, arquitectura interna real, credenciales, integraciones ni lógica de negocio sensible. Todo lo que verás aquí es una **muestra funcional** — pantallas de demostración con datos ficticios — pensada para que un cliente o socio entienda **qué hace el producto y cómo se ve funcionando**, antes de contratar acceso privado o una licencia.

El desarrollo real, el repositorio privado y la implementación a medida se entregan bajo contrato. Ver [`docs/COMMERCIAL.md`](./docs/COMMERCIAL.md) para modalidades de acceso.

---

## 📌 Qué es Software DT

**Software DT** es una plataforma de gestión de servicios y digitalización de procesos (*Digital Twin* operativo), parte del ecosistema de gemelos digitales que también incluye **DroneDT** y **EmeraldDT**.

Resuelve, para negocios con agenda de citas/servicios y ventas recurrentes:

- 📅 **Gestión de citas y trabajos** — flujo cliente → agendamiento → validación → panel administrativo en tiempo real.
- 💳 **Pagos integrados** — pasarela de pago conectada, con métricas de ventas por día/semana/mes/trimestre/semestre/año.
- 💬 **Mensajería centralizada** — bandeja para solicitudes de citas/pagos y bandeja separada para el formulario de contacto, con conteo de no leídos por canal.
- 🗂️ **Catálogo de productos/servicios** — alta y edición desde el panel.
- 📊 **Panel de control (Dashboard)** — KPIs de usuarios, trabajos en curso vs. terminados, estado de conexiones.

> Este repositorio muestra **el "qué"**, no **el "cómo"**: no se documentan aquí decisiones de arquitectura interna, esquemas de datos reales ni configuración de infraestructura de producción.

---

## 🧱 Estructura de este showcase

```
software-dt-showcase/
├── apps/
│   ├── client-demo/     # Landing + flujo de agendamiento (datos de muestra, sin backend real)
│   └── admin-demo/      # Panel administrativo de demostración (datos mock, login simulado)
├── docs/
│   ├── COMMERCIAL.md            # Modelo comercial: cómo acceder en privado o pagando
│   └── ARCHITECTURE-OVERVIEW.md # Vista de alto nivel, sin detalles sensibles
└── README.md
```

Cada demo es **estática y autocontenida** (HTML/CSS/JS plano, sin dependencias de build) para que cualquier persona pueda abrirla y probarla localmente sin instalar nada:

```bash
# Demo del cliente (landing + agendamiento)
open apps/client-demo/index.html

# Demo del panel administrativo
open apps/admin-demo/index.html
```

(En Linux: `xdg-open`. También puedes servirlas con cualquier servidor estático, por ejemplo `npx serve apps/client-demo`.)

---

## 🎨 Identidad visual

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-gold` | `#FEB60D` | Acentos principales, CTAs |
| `--color-gainsboro` | `#DCDCDC` | Texto secundario, bordes |
| `--color-bg-primary` | `#0A0A0A` | Fondo principal |
| `--color-bg-surface` | `#111111` | Tarjetas y paneles |

Estética industrial, dark-first, acentos dorados — consistente con la marca Software DT.

---

## 🏢 Sobre Software DT

Producto de una empresa de software con sede en Bogotá, Colombia, especializada en plataformas de gestión de servicios y ecosistemas de gemelos digitales (Digital Twin) para procesos industriales y comerciales.

- 🌐 Sitio: [softwaredt.com](https://softwaredt.com)
- 💻 GitHub: [github.com/NietoDeveloper](https://github.com/NietoDeveloper)

## 🤝 ¿Te interesa contratarlo?

Este showcase existe para eso. Revisa [`docs/COMMERCIAL.md`](./docs/COMMERCIAL.md) para las modalidades de acceso privado, licenciamiento y contacto directo.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,5,30&height=120&section=footer&animation=fadeIn" width="100%"/>

_© 2026 Software DT — Todos los derechos reservados. Este repositorio es material demostrativo/comercial; no constituye entrega de código de producción._

</div>
