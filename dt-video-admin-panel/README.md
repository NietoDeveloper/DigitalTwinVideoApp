🛰️ DT-Video Admin Panel
Internal Employee Frontend & System Control Hub
Este es el panel administrativo de alta disponibilidad diseñado para el ecosistema Digital Twin Video App. Funciona como el centro neurálgico para empleados internos, permitiendo el monitoreo en tiempo real de métricas de ventas, salud del sistema distribuido en AWS y administración de nodos de IA.

🛠️ Stack Tecnológico
Core: React 19 + TypeScript.

Build Tool: Vite (Optimized for HMR).

Styling: Tailwind CSS v4 (Identidad Software DT).

State Management: Zustand (Store reactivo centralizado).

Icons: Lucide React.

Infrastructure Ready: Dockerized & AWS Cloud compatible.

📂 Arquitectura de Carpetas
Plaintext
dt-video-admin-panel/
├── src/
│   ├── app/                # Vistas principales (Módulos de negocio)
│   │   ├── dashboard/      # KPIs: ingresos, twins activos, uptime
│   │   ├── users/          # Gestión de cuentas de clientes y Tiers
│   │   ├── streams/        # Monitoreo de flujos de video activos
│   │   ├── ai-worker/      # Estado de colas de IA y performance
│   │   ├── billing/        # Facturación, suscripciones e invoices
│   │   └── settings/       # Configuración de sistema y empleados
│   ├── components/         # Componentes atómicos y moleculares
│   │   ├── MetricsGrid/    # Tarjetas de KPIs en tiempo real
│   │   ├── UserTable/      # Listado paginado de clientes
│   │   ├── WorkerStatus/   # Salud de workers de IA (GPU/CPU load)
│   │   ├── SystemHealth/   # Status de AWS (Kinesis, ECS, RDS)
│   │   └── BillingPanel/   # Upgrades de planes y estados de pago
│   ├── hooks/              # Lógica reutilizable y suscripciones
│   ├── store/              # Estado global administrativo (Zustand)
│   └── utils/              # Helpers y formateadores
├── Dockerfile              # Configuración de contenedor para producción
└── vite.config.ts          # Optimización de empaquetado
🚀 Funcionalidades Clave
Real-Time Sales Metrics: Visualización de ingresos (MRR/ARR) y uso de recursos por cliente.

Infrastructure Monitoring: Tablero de control de servicios AWS involucrados en el procesamiento de gemelos digitales.

AI Worker Management: Supervisión de la carga de trabajo en la nube para el procesamiento de video con IA.

Tier Administration: Control total sobre los niveles de servicio (Basic, Pro, Enterprise) de los clientes de Software DT.

Stream Health: Monitoreo técnico de latencia y bitrate de los videos de Digital Twin activos.

🎨 Identidad Visual (Software DT Standard)
El panel utiliza el sistema de diseño exclusivo de la marca:

Primary: Gold (#FFD700) para estados activos y resaltados.

Background: Gainsboro (#DCDCDC) para el layout principal.

Dark Mode: Optimizado para entornos de monitoreo 24/7.

🔧 Instalación y Desarrollo
Instalar dependencias:

Bash
npm install
Iniciar entorno de desarrollo:

Bash
npm run dev
Construir para producción (Docker):

Bash
docker build -t dt-video-admin-panel .
📈 Roadmap de Desarrollo
[x] Estructura de carpetas profesional.

[x] Configuración de Tailwind CSS v4.

[x] Store de estado global con Zustand.

[ ] Integración con WebSockets para métricas en vivo.

[ ] Dashboards interactivos con Recharts.

[ ] Conexión con AWS CloudWatch API.

Built with precision by NietoDeveloper > #1 GitHub Committer Colombia | Software Architect