<!-- HEADER ANIMADO -->
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00c8ff,100:00ffe0&height=220&section=header&text=Digital%20Twin%20Video%20Industria
---

### 3 · `dt-video-admin-panel`
> **Internal employee frontend** — sales metrics, system health, user management, tier administration. Fully isolated from client-facing code.

```
dt-video-admin-panel/
├── src/
│   ├── app/
│   │   ├── dashboard/          ← KPIs: revenue, active twins, uptime
│   │   ├── users/              ← Client accounts + tier management
│   │   ├── streams/            ← All active streams system-wide
│   │   ├── ai-worker/          ← Worker queue status + performance
│   │   ├── billing/            ← Subscription management, invoices
│   │   └── settings/           ← System config, employee accounts
│   ├── components/
│   │   ├── MetricsGrid/        ← Real-time KPI cards
│   │   ├── UserTable/          ← Paginated client list + actions
│   │   ├── WorkerStatus/       ← AI worker health + queue depth
│   │   ├── SystemHealth/       ← AWS service status (Kinesis, ECS, RDS)
│   │   └── BillingPanel/       ← Tier upgrades, payment status
│   ├── hooks/
│   │   ├── useAdminMetrics.ts
│   │   └── useSystemHealth.ts
│   ├── store/                  ← Zustand — admin state
│   └── utils/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── Dockerfile
├── .env.example
└── README.md
```

---

### 4 · `dt-video-landing-backend`
> **General backend API** — powers the admin panel, handles platform-wide auth, AI worker orchestration, billing, and employee services.

```
dt-video-backend/
├── src/
│   ├── routes/
│   │   ├── auth/               ← /auth/login, /auth/refresh, /auth/logout
│   │   ├── admin/              ← /admin/users, /admin/metrics, /admin/billing
│   │   ├── workers/            ← /workers/status, /workers/queue, /workers/restart
│   │   ├── streams/            ← /streams (system-wide, admin view)
│   │   └── health/             ← /health — uptime, AWS service checks
│   ├── services/
│   │   ├── authService.ts      ← JWT issue/refresh/revoke
│   │   ├── adminService.ts     ← Employee operations, role management
│   │   ├── workerService.ts    ← AI worker orchestration (Docker/ECS)
│   │   ├── billingService.ts   ← Tier logic, subscription handling
│   │   └── healthService.ts    ← System health aggregation
│   ├── models/                 ← Prisma: User, Employee, Subscription, WorkerJob
│   ├── middleware/             ← adminAuth, rateLimit, logging, errorHandler
│   ├── db/                     ← Migrations, seeds, schema.prisma
│   └── ai-worker/              ← ¡EL CORAZÓN! Python Docker worker
│       ├── src/
│       │   ├── pipeline/       ← Orquestador: frame → twin
│       │   ├── slam/           ← SLAM odometry, sparse map
│       │   ├── reconstruction/ ← 3DGS lite + NeRF fallback
│       │   └── features/       ← ORB, SuperPoint extraction
│       └── modules/
│           ├── inpainting/     ← AI inpainting (4% workload)
│           ├── segmentation/   ← Industrial semantic masking
│           └── quality/        ← Blur detection, sharpness alerts
├── package.json
├── tsconfig.json
├── Dockerfile
├── Dockerfile.ai-worker
├── docker-compose.yml
├── .env.example
└── README.md
```

---

### 5 · `dt-video-user-api`
> **Dedicated user backend** — exclusively serves `dt-video-user-dashboard`. Handles twins, stream sessions, 3D assets, real-time alerts, and WebSocket push. Zero coupling with admin services.

```
dt-video-user-api/
├── src/
│   ├── routes/
│   │   ├── twins/              ← /twins CRUD — create, list, get, delete
│   │   ├── streams/            ← /streams — start, stop, status per user
│   │   ├── assets/             ← /assets — S3-backed 3D files (splats, PLY)
│   │   └── alerts/             ← /alerts — sharpness events, quality logs
│   ├── services/
│   │   ├── twinService.ts      ← Twin lifecycle management
│   │   ├── streamService.ts    ← Kinesis session handling
│   │   ├── assetService.ts     ← S3 upload/download/presign URLs
│   │   └── alertService.ts     ← Quality threshold monitoring + emit
│   ├── realtime/
│   │   └── socketGateway.ts    ← Socket.io — WebSocket push to dashboard
│   ├── models/                 ← Prisma: Twin, Stream, Asset, Alert
│   ├── middleware/             ← userAuth (JWT), rateLimit, logging
│   └── db/                     ← Migrations, seeds, schema.prisma
├── package.json
├── tsconfig.json
├── Dockerfile
├── .env.example
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend — all 3 frontends share this base
| Tool | Version | Role |
|------|---------|------|
| React | 18.x | UI framework |
| TypeScript | 5.x | Type safety |
| Vite / Next.js | 5.x / 14.x | Build tool + SSR (landing only) |
| Zustand | 4.x | Global state |
| Tailwind CSS | 3.x | Utility-first styling |
| Three.js | latest | 3D viewer (user-dashboard only) |
| Socket.io-client | 4.x | Real-time WebSocket (user-dashboard only) |

### Backend — both APIs share this base
| Tool | Version | Role |
|------|---------|------|
| Node.js | 20.x | Runtime |
| Express | 4.x | REST API framework |
| TypeScript | 5.x | Type safety |
| PostgreSQL | 15 | Relational data store |
| Prisma | 5.x | Type-safe ORM + migrations |
| JWT | — | Stateless authentication |
| Zod | 3.x | Runtime schema validation |
| Socket.io | 4.x | WebSocket push (user-api only) |

### AI Worker — inside `dt-video-backend`
| Tool | Role |
|------|------|
| Python 3.11 | Reconstruction pipeline |
| SLAM | Visual odometry, sparse 3D map |
| 3DGS Lite | Gaussian Splatting reconstruction |
| NeRF (fallback) | Neural radiance field backup |
| ORB / SuperPoint | Feature extraction |
| AI Inpainting | Gap filling — 4% CPU load |
| CUDA (optional) | GPU acceleration |

### Cloud & Infrastructure
| Service | Role |
|---------|------|
| AWS Kinesis Video Streams | Live video ingest |
| AWS ECS Fargate | Container orchestration — 3 clusters |
| AWS S3 | 3D asset storage (splats, point clouds) |
| AWS RDS PostgreSQL | Managed database — one instance, 2 schemas |
| AWS CloudFront | CDN — all 3 frontends |
| AWS CDK / Terraform | Infrastructure as code |
| Docker | All 5 repos fully containerized |
| GitHub Actions | CI/CD per repo → AWS / Vercel |

---

## ⚡ Quick Start — Full Ecosystem

### Clone all 5 repos

```bash
# Create workspace folder
mkdir digital-twins-ecosystem && cd digital-twins-ecosystem

# Clone all repos
git clone https://github.com/NietoDeveloper/dt-video-landing
git clone https://github.com/NietoDeveloper/dt-video-user-dashboard
git clone https://github.com/NietoDeveloper/dt-video-admin-panel
git clone https://github.com/NietoDeveloper/dt-video-backend
git clone https://github.com/NietoDeveloper/dt-video-user-api
```

### Configure environments

```bash
# Each repo has its own .env — copy and fill in
cp dt-video-landing/.env.example          dt-video-landing/.env
cp dt-video-user-dashboard/.env.example   dt-video-user-dashboard/.env
cp dt-video-admin-panel/.env.example      dt-video-admin-panel/.env
cp dt-video-backend/.env.example          dt-video-backend/.env
cp dt-video-user-api/.env.example         dt-video-user-api/.env
```

### Start each service

```bash
# Terminal 1 — General backend + AI worker
cd dt-video-backend && docker-compose up --build

# Terminal 2 — User API
cd dt-video-user-api && docker-compose up --build

# Terminal 3 — Landing
cd dt-video-landing && npm install && npm run dev

# Terminal 4 — User dashboard
cd dt-video-user-dashboard && npm install && npm run dev

# Terminal 5 — Admin panel
cd dt-video-admin-panel && npm install && npm run dev
```

### Services will be available at

| Service | URL |
|---------|-----|
| Landing | http://localhost:3000 |
| User Dashboard | http://localhost:3001 |
| Admin Panel | http://localhost:3002 |
| Backend API | http://localhost:4000 |
| User API | http://localhost:4001 |
| PostgreSQL | localhost:5432 |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

## 📬 Contact

For questions, support, or business inquiries:

[![Email](https://img.shields.io/badge/Email-contact@digitaltwinvideoapp.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:contact@digitaltwinvideoapp.com)
[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username/DigitalTwinVideoApp/issues)

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:2196f3,100:0d47a1&height=120&section=footer&animation=fadeIn" width="100%"/>

**Built with ❤️ for Digital Twin Video Applications**

[![GitHub stars](https://img.shields.io/github/stars/your-username/DigitalTwinVideoApp?style=social)](https://github.com/your-username/DigitalTwinVideoApp)
[![GitHub forks](https://img.shields.io/github/forks/your-username/DigitalTwinVideoApp?style=social)](https://github.com/your-username/DigitalTwinVideoApp/fork)

</div>
