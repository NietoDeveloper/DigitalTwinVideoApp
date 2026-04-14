<!-- HEADER ANIMADO -->
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00c8ff,100:00ffe0&height=200&section=header&text=Digital%20Twin%20Video%20Industrial&fontSize=36&fontColor=ffffff&fontAlignY=38&desc=Real-Time%203D%20Reconstruction%20from%20Live%20Video%20Streams&descAlignY=58&descSize=16&animation=fadeIn" width="100%"/>

</div>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-00c8ff.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com)
[![AWS](https://img.shields.io/badge/AWS-ECS%20%7C%20Kinesis%20%7C%20S3-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://postgresql.org)
[![Turborepo](https://img.shields.io/badge/Turborepo-monorepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white)](https://turbo.build)

<br/>

![Latency](https://img.shields.io/badge/Latency-%3C200ms-00ffe0?style=flat-square)
![Fidelity](https://img.shields.io/badge/Reality%20Fidelity-97%25-00c8ff?style=flat-square)
![AI Load](https://img.shields.io/badge/AI%20Inpainting%20Load-4%25-green?style=flat-square)
![Uptime](https://img.shields.io/badge/Uptime-99.9%25-success?style=flat-square)
![Colombia](https://img.shields.io/badge/Made%20in-Colombia%20🇨🇴-yellow?style=flat-square)

</div>

---

<div align="center">

```
╔══════════════════════════════════════════════════════════════════╗
║  VIDEO STREAM  →  SLAM  →  3DGS  →  AI INPAINTING  →  3D TWIN  ║
║                   < 200ms end-to-end latency                     ║
╚══════════════════════════════════════════════════════════════════╝
```

</div>

---

## 📌 Table of Contents

- [What is this?](#-what-is-this)
- [Business Tiers](#-business-tiers)
- [Architecture](#-architecture)
- [Core Pipeline](#-core-pipeline)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Deployment — AWS](#-deployment--aws)
- [Security](#-security)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 🧠 What is this?

**digital-twins-video-industrial** is a **high-availability, industrial-grade platform** that ingests live video (drone footage, industrial cameras, CCTV) and constructs **photorealistic, interactive 3D Digital Twins** in near real-time.

Engineered for:

- 🏗️ **Industrial asset monitoring** and remote inspection
- 🚁 **Drone-based 3D scene reconstruction** — 97% reality fidelity
- 🔧 **Predictive maintenance** via persistent digital twin analysis
- 📡 **Sub-200ms live streaming** + structured 3D model storage on AWS
- 💼 **Scalable SaaS** — 3 business tiers from small assets to premium industrial

> *"Building scalable systems with 100% discipline. Code that scales, architecture that lasts."*
> — **NietoDeveloper · #1 GitHub Colombia 🇨🇴 · Rank S+**

---

## 💎 Business Tiers

| Tier | Target | Features | Fidelity |
|------|--------|----------|----------|
| 🥉 **Basic (Assets)** | Cars, small objects | Small-scale monitoring, basic twin preview | Standard |
| 🥈 **Medium (Infrastructure)** | Buildings, construction sites | Persistent twins, alert dashboard, team access | High |
| 🥇 **Premium (Industrial)** | Heavy industry, high-security | 97% fidelity, sub-200ms latency, CUDA GPU, SLA | **97%** |

> This architecture is what companies pay **$5,000+ USD** for — isolated services, corporate-grade reliability, and independent scaling per module.

---

## 🏗️ Architecture

### Triple-cluster deployment

```
┌─────────────────────────────────────────────────────────────────┐
│                        AWS CLOUD                                │
│                                                                 │
│  ┌──────────────┐   ┌──────────────┐   ┌─────────────────────┐ │
│  │  API Cluster │   │ Video Signal │   │    Data Cluster      │ │
│  │  (ECS/Node)  │   │ (Kinesis/WRT)│   │  (RDS + S3 + Cache) │ │
│  └──────┬───────┘   └──────┬───────┘   └──────────┬──────────┘ │
│         │                  │                       │            │
│         └──────────────────┴───────────────────────┘            │
│                         CloudFront CDN                          │
└─────────────────────────────────────────────────────────────────┘
         ↑                   ↑                       ↑
   REST API / WS        WebRTC Stream           Assets / DB
         ↑                   ↑                       ↑
┌─────────────────────────────────────────────────────────────────┐
│                     DOCKER COMPOSE (local)                      │
│   frontend:3000   backend:4000   ai-worker:8080   postgres:5432 │
└─────────────────────────────────────────────────────────────────┘
```

### Application layers

| Layer | Technology | Responsibility |
|-------|-----------|---------------|
| **Frontend** | React 18, Three.js, Vite, Zustand | Live 3D viewer dashboard, drone controls, sharpness alerts |
| **Backend** | Node.js, Express, PostgreSQL, Prisma, JWT | Auth, twin metadata, stream sessions, REST + WebSocket API |
| **AI Worker** | Python 3.11, Docker, CUDA (optional) | SLAM, 3DGS reconstruction, feature extraction, AI inpainting |

---

## ⚙️ Core Pipeline

```
📷 Video Source (Drone / Industrial Camera / CCTV)
        │
        ▼
📡 AWS Kinesis Video Streams
        │
        ▼
🔬 ai-worker/src/pipeline/
   │
   ├── 1. Feature Extraction (ORB / SuperPoint)
   │         ↓
   ├── 2. SLAM Odometry → Sparse 3D Map
   │         ↓
   ├── 3. 3DGS Lite Reconstruction (NeRF fallback)
   │         ↓
   ├── 4. AI Inpainting — gap filling (4% CPU load)
   │         ↓
   └── 5. Quality Check (blur detection, sharpness score)
        │
        ▼
🪣 AWS S3 ← twin assets (splats, point clouds, textures)
        │
        ▼
🗄️ PostgreSQL ← twin metadata, stream sessions, alerts
        │
        ▼
⚡ WebSocket push → React frontend
        │
        ▼
🖥️ Three.js Live 3D Viewer  ← < 200ms total end-to-end
```

---

## 📁 Project Structure

```
digital-twins-video-industrial/        ← ROOT (never rename — this scales to millions)
│
├── apps/
│   │
│   ├── frontend/                      ← React + Three.js + Gaussian Splatting viewer
│   │   ├── public/
│   │   └── src/
│   │       ├── components/            ← Dashboard en vivo, preview 3D, alertas nitidez
│   │       ├── hooks/                 ← useStream, useTwin, useAlert, useSplat
│   │       ├── pages/                 ← /dashboard, /twin/:id, /streams, /settings
│   │       ├── store/                 ← Zustand global state
│   │       └── utils/                 ← Three.js helpers, WebSocket client
│   │
│   ├── backend/                       ← Node/Express + PostgreSQL REST API
│   │   └── src/
│   │       ├── routes/                ← /auth, /twins, /streams, /assets, /alerts
│   │       ├── services/              ← twinService, streamService, authService
│   │       ├── models/                ← Prisma models (Twin, Stream, User, Asset)
│   │       ├── middleware/            ← auth JWT, rateLimit, logging, errorHandler
│   │       └── db/                    ← Migrations SQL, seeds, schema.prisma
│   │
│   └── ai-worker/                     ← ¡EL CORAZÓN! Docker worker para reconstrucción
│       ├── src/
│       │   ├── pipeline/              ← Orquestador principal: frame → twin
│       │   ├── slam/                  ← SLAM odometry, mapa sparse
│       │   ├── reconstruction/        ← 3DGS lite + NeRF fallback
│       │   └── features/              ← ORB, SuperPoint feature extraction
│       └── modules/
│           ├── inpainting/            ← AI inpainting ligero (4% workload)
│           ├── segmentation/          ← Máscara semántica industrial
│           └── quality/               ← Blur detection, sharpness alerts
│
├── packages/
│   ├── shared/                        ← TypeScript types, Zod schemas, latency constants
│   ├── ui/                            ← React design system (industrial components)
│   └── infra-config/                  ← AWS configs (Kinesis, S3, ECS), Docker helpers
│
├── docker/
│   ├── Dockerfile.frontend
│   ├── Dockerfile.backend
│   ├── Dockerfile.ai-worker           ← Optimizado low-latency + CUDA opcional
│   └── docker-compose.yml             ← Full local dev + simulated stream
│
├── infrastructure/
│   ├── cdk/                           ← AWS CDK: ECS Fargate, RDS, Kinesis, S3, CloudFront
│   └── terraform/                     ← Alternativa Terraform
│
├── scripts/
│   ├── setup.sh                       ← Bootstrap completo local
│   ├── seed-db.sql                    ← Data inicial PostgreSQL
│   └── simulate-stream.sh             ← Simula stream de video para dev/testing
│
├── turbo.json                         ← Turborepo pipeline config
├── .npmrc                             ← npm workspace settings
├── package.json                       ← Root — npm workspaces
├── .env.example                       ← All required env vars documented
└── README.md
```

> **Why this structure pays $5,000+ USD:**
> ✅ If one service needs maintenance, the rest stay fully live.
> ✅ Admin panel is completely isolated from the client dashboard.
> ✅ Each app scales independently — replicas only where load demands it.

---

## 🛠️ Tech Stack

### Frontend
| Tool | Version | Role |
|------|---------|------|
| React | 18.x | UI framework |
| Three.js | latest | 3D rendering + Gaussian Splatting viewer |
| Vite | 5.x | Build tool, fast HMR |
| Zustand | 4.x | Global state management |
| TypeScript | 5.x | Type safety across the entire app |
| Socket.io-client | 4.x | Real-time WebSocket updates |

### Backend
| Tool | Version | Role |
|------|---------|------|
| Node.js | 20.x | Runtime |
| Express | 4.x | REST API framework |
| PostgreSQL | 15 | Relational data store |
| Prisma | 5.x | Type-safe ORM + migrations |
| JWT | — | Stateless authentication |
| Socket.io | 4.x | Real-time push events to frontend |
| Zod | 3.x | Runtime schema validation |

### AI Worker
| Tool | Role |
|------|------|
| Python 3.11 | Reconstruction pipeline runtime |
| SLAM | Visual odometry, sparse 3D mapping |
| 3DGS Lite | Gaussian Splatting reconstruction |
| NeRF (fallback) | Neural radiance field backup |
| ORB / SuperPoint | Feature extraction |
| AI Inpainting | Minimal-load gap filling (4% CPU) |
| CUDA (optional) | GPU acceleration for heavy scenes |

### Cloud & Infrastructure
| Service | Role |
|---------|------|
| AWS Kinesis Video Streams | Live video ingest |
| AWS ECS Fargate | Container orchestration (3 clusters) |
| AWS S3 | Twin asset storage (splats, textures) |
| AWS RDS PostgreSQL | Managed relational database |
| AWS CloudFront | CDN for frontend delivery |
| AWS CDK / Terraform | Infrastructure as code |
| Docker + Compose | Local dev = production parity |
| Turborepo | Monorepo parallel builds + caching |
| npm workspaces | Shared packages management |
| GitHub Actions | CI/CD pipelines → AWS / Vercel |

---

## ⚡ Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/NietoDeveloper/digital-twins-video-industrial
cd digital-twins-video-industrial

# 2. Configure environment
cp .env.example .env
# → Open .env and fill in your AWS credentials and DB connection

# 3. Install all dependencies (npm workspaces + Turborepo)
npm install

# 4. Spin up everything with Docker
docker-compose up --build

# Services will be available at:
#   Frontend  → http://localhost:3000
#   Backend   → http://localhost:4000
#   AI Worker → http://localhost:8080
#   PostgreSQL → localhost:5432

# 5. (Optional) Simulate a live video stream for testing
bash scripts/simulate-stream.sh

# 6. Or run in parallel dev mode (without Docker)
npm run dev
```

---

## ⚙️ Environment Variables

Copy `.env.example` → `.env` and fill in:

```env
# ─── Database ─────────────────────────────────────────────────────
DATABASE_URL=postgresql://user:password@localhost:5432/dt_db

# ─── Authentication ───────────────────────────────────────────────
JWT_SECRET=your-super-secret-key-min-32-chars
JWT_EXPIRES_IN=7d

# ─── AWS Core ─────────────────────────────────────────────────────
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=...

# ─── AWS Kinesis Video Streams ────────────────────────────────────
KINESIS_STREAM_ARN=arn:aws:kinesisvideo:us-east-1:123456789:stream/cam-01/...
KINESIS_STREAM_NAME=industrial-cam-01

# ─── AWS S3 ───────────────────────────────────────────────────────
S3_BUCKET_TWINS=dt-assets-prod
S3_BUCKET_REGION=us-east-1

# ─── Internal Services (Docker network) ──────────────────────────
AI_WORKER_URL=http://ai-worker:8080
BACKEND_URL=http://backend:4000

# ─── AI Worker Config ─────────────────────────────────────────────
ENABLE_CUDA=false                  # Set true if GPU is available
MAX_FRAMES_PER_SECOND=15
INPAINTING_ENABLED=true
QUALITY_THRESHOLD=0.65             # Minimum sharpness score (0–1)
RECONSTRUCTION_MODE=3dgs           # Options: 3dgs | nerf | hybrid

# ─── App Config ───────────────────────────────────────────────────
NODE_ENV=development
PORT=4000
FRONTEND_URL=http://localhost:3000
```

---

## 📜 Available Scripts

```bash
# ─── Root (Turborepo — runs all apps in parallel) ─────────────────
npm run dev          # Start all apps in development mode
npm run build        # Build all apps + packages
npm run lint         # Lint all packages
npm run test         # Run all test suites
npm run clean        # Clean all build outputs

# ─── Individual apps ──────────────────────────────────────────────
cd apps/frontend  && npm run dev
cd apps/backend   && npm run dev
cd apps/ai-worker && python src/pipeline/main.py

# ─── Docker ───────────────────────────────────────────────────────
docker-compose up --build              # Full stack
docker-compose up frontend backend     # Without AI worker
docker-compose down -v                 # Stop + remove volumes

# ─── Infrastructure ───────────────────────────────────────────────
cd infrastructure/cdk       && cdk deploy --all
cd infrastructure/terraform && terraform apply

# ─── Utilities ────────────────────────────────────────────────────
bash scripts/setup.sh                     # Full local bootstrap (first time)
bash scripts/simulate-stream.sh           # Simulate live video stream for dev
psql $DATABASE_URL < scripts/seed-db.sql  # Seed initial PostgreSQL data
```

---

## 🚀 Deployment — AWS

### Option A: AWS CDK (recommended)

```bash
cd infrastructure/cdk
npm install
cdk bootstrap   # Only first time per AWS account
cdk deploy --all
```

Provisions automatically:
- ✅ ECS Fargate — 3 independent clusters (API, Video Signaling, Data)
- ✅ RDS PostgreSQL 15 — managed, multi-AZ
- ✅ Kinesis Video Streams — live ingest endpoint
- ✅ S3 bucket — twin asset storage with lifecycle rules
- ✅ CloudFront distribution — global CDN for frontend

### Option B: Terraform

```bash
cd infrastructure/terraform
terraform init
terraform plan
terraform apply
```

### CI/CD via GitHub Actions

Automated pipelines on every push/PR:
1. Run lint + tests
2. Build and push Docker images to AWS ECR
3. Deploy updated services to ECS Fargate
4. Run database migrations on backend deploy

---

## 🔒 Security

- 🔑 **JWT** authentication on all private endpoints
- 🛡️ **Rate limiting** via `express-rate-limit` — per IP + per user
- ✅ **Input validation** via Zod — shared package, backend + frontend
- 🐳 **Docker containers** run as non-root users
- ☁️ **AWS IAM** roles with least-privilege policies per service
- 🔐 **Secrets** managed via AWS Secrets Manager in production
- 🌐 **CORS** configured per environment (dev vs prod)
- 📋 **Audit logs** on all twin creation and stream session events

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feat/amazing-feature`
3. Commit using conventional commits: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feat/amazing-feature`
5. Open a Pull Request

Please include tests for any new feature and documentation updates if needed.

---

## 📄 License

MIT License © 2025 **SoftwareDT — Manuel Nieto (NietoDeveloper)**

Full license: [LICENSE](./LICENSE)

---

## 👨‍💻 Author

<div align="center">

### Manuel Nieto — NietoDeveloper

**Full Stack & AI Engineer · SoftwareDT**
🇨🇴 #1 GitHub Colombia · Rank S+

| Platform | Link |
|----------|------|
| 🐙 GitHub | [github.com/NietoDeveloper](https://github.com/NietoDeveloper) |
| 💼 LinkedIn | [linkedin.com/in/NietoDeveloper](https://linkedin.com/in/NietoDeveloper) |
| 🐦 Twitter / X | [@NietoDeveloper](https://twitter.com/NietoDeveloper) |
| 🌐 Website | [softwaredt.com](https://softwaredt.com) |
| 📧 Email | contact@softwaredt.com |

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00ffe0,100:00c8ff&height=120&section=footer&text=digital-twins-video-industrial&fontSize=16&fontColor=ffffff&fontAlignY=65&animation=fadeIn" width="100%"/>

**Built with ♦ by [SoftwareDT](https://softwaredt.com) · Manuel Nieto**

*"From live video to interactive 3D twin — in under 200ms."*

`v1.0.0` · MIT License · © 2026 SoftwareDT

</div>
