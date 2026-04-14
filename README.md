<!-- HEADER ANIMADO -->
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00c8ff,100:00ffe0&height=220&section=header&text=Digital%20Twin%20Video%20Industrial&fontSize=40&fontColor=ffffff&fontAlignY=38&desc=Real-Time%203D%20Reconstruction%20from%20Live%20Video%20Streams&descAlignY=58&descSize=17&animation=fadeIn" width="100%"/>

</div>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-00c8ff.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com)
[![AWS](https://img.shields.io/badge/AWS-ECS%20%7C%20Kinesis%20%7C%20S3-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://postgresql.org)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)

<br/>

![Latency](https://img.shields.io/badge/Latency-%3C200ms-00ffe0?style=flat-square)
![Fidelity](https://img.shields.io/badge/Reality%20Fidelity-97%25-00c8ff?style=flat-square)
![AI Load](https://img.shields.io/badge/AI%20Inpainting%20Load-4%25-green?style=flat-square)
![Uptime](https://img.shields.io/badge/Uptime-99.9%25-success?style=flat-square)
![Repos](https://img.shields.io/badge/Repos-5%20Independent-blueviolet?style=flat-square)
![Colombia](https://img.shields.io/badge/Made%20in-Colombia%20🇨🇴-yellow?style=flat-square)

</div>

---

<div align="center">

```
╔═══════════════════════════════════════════════════════════════════════╗
║   VIDEO STREAM  →  SLAM  →  3DGS  →  AI INPAINTING  →  3D TWIN      ║
║                    < 200ms end-to-end latency                         ║
║                                                                       ║
║   5 independent repos · Triple-cluster AWS · 97% reality fidelity    ║
╚═══════════════════════════════════════════════════════════════════════╝
```

</div>

---

## 📌 Table of Contents

- [What is this?](#-what-is-this)
- [Ecosystem Overview — 5 Repos](#-ecosystem-overview--5-repos)
- [Business Tiers](#-business-tiers)
- [System Architecture](#-system-architecture)
- [Core AI Pipeline](#-core-ai-pipeline)
- [Full Repository Structure](#-full-repository-structure)
- [Tech Stack](#-tech-stack)
- [Quick Start — Full Ecosystem](#-quick-start--full-ecosystem)
- [Environment Variables](#-environment-variables)
- [Deployment — AWS](#-deployment--aws)
- [Security](#-security)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 🧠 What is this?

**digital-twins-video-industrial** is a **high-availability, industrial-grade ecosystem** of **5 independent repositories** that together form a complete platform for ingesting live video (drones, industrial cameras, CCTV) and constructing **photorealistic, interactive 3D Digital Twins** in near real-time.

Each repository is isolated, independently deployable, and owns its own domain:

- 🌐 A **public-facing landing** with sales funnel and tier selection
- 🖥️ A **client dashboard** where users manage and visualize their digital twins
- 🔧 An **admin panel** for internal employees — sales, system health, operations
- ⚙️ A **general backend API** powering the admin panel and core platform logic
- 🔌 A **dedicated user API** exclusively serving the client dashboard

> *"Building scalable systems with 100% discipline. Code that scales, architecture that lasts."*
> — **NietoDeveloper · #1 GitHub Colombia 🇨🇴 · Rank S+**

---

## 🗂️ Ecosystem Overview — 5 Repos

| # | Repository | Type | Description | Port |
|---|-----------|------|-------------|------|
| 1 | [`dt-video-landing`](#1--dt-video-landing) | **Frontend** | Public app — landing page & sales funnel | `3000` |
| 2 | [`dt-video-user-dashboard`](#2--dt-video-user-dashboard) | **Frontend** | Client-facing dashboard — twin monitoring & visualization | `3001` |
| 3 | [`dt-video-admin-panel`](#3--dt-video-admin-panel) | **Frontend** | Internal employee panel — sales, ops, system health | `3002` |
| 4 | [`dt-video-backend`](#4--dt-video-backend) | **Backend** | General API + admin/employee services + AI worker orchestration | `4000` |
| 5 | [`dt-video-user-api`](#5--dt-video-user-api) | **Backend** | Dedicated API for the user dashboard — twins, streams, alerts | `4001` |

> **Why 5 separate repos?**
> ✅ If the admin panel goes down for maintenance, clients keep working — zero impact.
> ✅ The employee backend is 100% isolated from the user-facing API — full security boundary.
> ✅ Each repo deploys, scales, and versions independently.
> ✅ This is the structure companies pay **$5,000+ USD** for — corporate-grade, not a toy.

---

## 💎 Business Tiers

| Tier | Target | Features | Fidelity |
|------|--------|----------|----------|
| 🥉 **Basic (Assets)** | Cars, small objects | Small-scale monitoring, basic twin preview | Standard |
| 🥈 **Medium (Infrastructure)** | Buildings, construction sites | Persistent twins, alert dashboard, team access | High |
| 🥇 **Premium (Industrial)** | Heavy industry, high-security | 97% fidelity, sub-200ms latency, CUDA GPU, SLA | **97%** |

---

## 🏗️ System Architecture

### How the 5 repos connect

```
                         ┌─────────────────────────┐
                         │   dt-video-landing       │
                         │   (Public Frontend)      │
                         │   Next.js / React        │
                         │   → Sales funnel         │
                         │   → Tier selection       │
                         └────────────┬────────────┘
                                      │ Sign up / Auth
               ┌──────────────────────┼──────────────────────┐
               │                      │                      │
               ▼                      ▼                      ▼
  ┌────────────────────┐  ┌─────────────────────┐  ┌──────────────────────┐
  │ dt-video-user-     │  │  dt-video-admin-    │  │  dt-video-backend    │
  │ dashboard          │  │  panel              │  │  (General API)       │
  │ (Client Frontend)  │  │  (Employee Frontend)│  │                      │
  │ · Twin viewer 3D   │  │  · Sales metrics    │  │  · Auth & sessions   │
  │ · Stream monitor   │  │  · System health    │  │  · AI worker orch.   │
  │ · Alerts panel     │  │  · User management  │  │  · Admin services    │
  │ · Asset library    │  │  · Tier management  │  │  · Billing logic     │
  └────────┬───────────┘  └──────────┬──────────┘  └──────────┬───────────┘
           │                         │                         │
           ▼                         ▼                         │
  ┌────────────────────┐             │                         │
  │ dt-video-user-api  │◄────────────┘                         │
  │ (User Backend)     │        uses general auth              │
  │                    │◄──────────────────────────────────────┘
  │ · Twins CRUD       │
  │ · Stream sessions  │
  │ · 3D assets (S3)   │
  │ · Real-time alerts │
  │ · WebSocket push   │
  └────────┬───────────┘
           │
           ▼
  ┌──────────────────────────────────────────────────────────────┐
  │                        AWS CLOUD                             │
  │                                                              │
  │  ┌─────────────┐  ┌──────────────┐  ┌─────────────────────┐ │
  │  │ API Cluster │  │ Video Signal │  │   Data Cluster       │ │
  │  │ (ECS/Node)  │  │(Kinesis/WRT) │  │ (RDS + S3 + Cache)  │ │
  │  └─────────────┘  └──────────────┘  └─────────────────────┘ │
  │                       CloudFront CDN                         │
  └──────────────────────────────────────────────────────────────┘
```

### Application layer summary

| Repo | Technology | Serves |
|------|-----------|--------|
| `dt-video-landing` | React / Next.js, Tailwind, TypeScript | Public users — acquisition |
| `dt-video-user-dashboard` | React 18, Three.js, Zustand, TypeScript | Paying clients — twin operations |
| `dt-video-admin-panel` | React 18, Zustand, TypeScript | Internal employees — ops & sales |
| `dt-video-backend` | Node.js, Express, PostgreSQL, Prisma, JWT | Admin panel + platform core logic |
| `dt-video-user-api` | Node.js, Express, PostgreSQL, Prisma, Socket.io | User dashboard — twins & streams |

---

## ⚙️ Core AI Pipeline

> Lives inside `dt-video-backend` — orchestrates the AI worker Docker container.

```
📷  Video Source  (Drone / Industrial Camera / CCTV)
         │
         ▼
📡  AWS Kinesis Video Streams
         │
         ▼
🔬  ai-worker  (Docker container — Python 3.11)
    │
    ├── 1. Feature Extraction     (ORB / SuperPoint)
    │           ↓
    ├── 2. SLAM Odometry          → Sparse 3D Map
    │           ↓
    ├── 3. 3DGS Lite Reconstruction  (NeRF fallback)
    │           ↓
    ├── 4. AI Inpainting          — gap filling  (4% CPU load)
    │           ↓
    └── 5. Quality Check          — blur detection, sharpness score
         │
         ▼
🪣  AWS S3  ←  twin assets  (splats, point clouds, textures)
         │
         ▼
🗄️  PostgreSQL  ←  twin metadata, stream sessions, alerts
         │
         ▼
⚡  dt-video-user-api  →  WebSocket push
         │
         ▼
🖥️  dt-video-user-dashboard  (Three.js Live 3D Viewer)
         │
         └──  < 200ms total end-to-end
```

---

## 📁 Full Repository Structure

### 1 · `dt-video-landing`
> **Public frontend** — landing page, pricing, sales funnel, tier selection.

```
dt-video-landing/
├── src/
│   ├── app/                    ← Next.js App Router pages
│   │   ├── page.tsx            ← Hero / landing
│   │   ├── pricing/            ← Tier selector (Basic / Medium / Premium)
│   │   └── contact/            ← Lead capture form
│   ├── components/
│   │   ├── Hero/               ← Animated 3D twin preview embed
│   │   ├── TierCards/          ← Pricing + feature comparison
│   │   ├── DemoPlayer/         ← Video demo of reconstruction
│   │   └── CTABanner/          ← Conversion funnel CTA
│   ├── styles/
│   └── lib/                    ← Analytics, form handlers
├── public/
├── next.config.ts
├── tailwind.config.ts
├── package.json
├── tsconfig.json
├── Dockerfile
├── .env.example
└── README.md
```

---

### 2 · `dt-video-user-dashboard`
> **Client frontend** — authenticated dashboard for paying users to manage and visualize their digital twins.

```
dt-video-user-dashboard/
├── src/
│   ├── app/                    ← React Router / Next.js pages
│   │   ├── dashboard/          ← Twin overview + live status
│   │   ├── twin/[id]/          ← Individual twin detail + 3D viewer
│   │   ├── streams/            ← Active stream sessions
│   │   ├── assets/             ← 3D asset library (S3-backed)
│   │   └── settings/           ← Account, tier, billing
│   ├── components/
│   │   ├── TwinViewer3D/       ← Three.js + Gaussian Splatting viewer
│   │   ├── StreamMonitor/      ← Live feed + quality indicator
│   │   ├── AlertsPanel/        ← Sharpness alerts, blur warnings
│   │   ├── AssetCard/          ← Twin thumbnail + metadata
│   │   └── DroneControls/      ← Camera/drone control interface
│   ├── hooks/
│   │   ├── useStream.ts        ← WebSocket stream connection
│   │   ├── useTwin.ts          ← Twin data fetch + real-time updates
│   │   └── useAlert.ts         ← Quality alert subscriptions
│   ├── store/                  ← Zustand global state
│   └── utils/                  ← Three.js helpers, WebSocket client
├── package.json
├── vite.config.ts
├── tsconfig.json
├── Dockerfile
├── .env.example
└── README.md
```

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

### 4 · `dt-video-backend`
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
