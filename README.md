# 🏭 digital-twins-video-industrial

> **Real-time 3D Digital Twin reconstruction from live video streams.**  
> Industrial-grade · Sub-200ms latency · AI-powered · Fully Dockerized  

[![License: MIT](https://img.shields.io/badge/License-MIT-cyan.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)](https://nodejs.org)
[![Python](https://img.shields.io/badge/Python-3.11-blue.svg)](https://python.org)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED.svg)](https://docker.com)
[![AWS](https://img.shields.io/badge/AWS-ECS%20%7C%20Kinesis%20%7C%20S3-FF9900.svg)](https://aws.amazon.com)
[![Turborepo](https://img.shields.io/badge/Turborepo-monorepo-EF4444.svg)](https://turbo.build)

---

## 📌 What is this?

A production-grade monorepo platform that ingests **live video** (drone footage, industrial cameras, CCTV) and constructs **interactive 3D digital twins** in near real-time.

Built on a **MERN + AWS + Docker + PostgreSQL + AI** stack, designed for:

- 🏗️ Industrial asset monitoring and remote inspection  
- 🚁 Drone-based 3D scene reconstruction  
- 🔧 Predictive maintenance via digital twin analysis  
- 📡 Live streaming + persistent 3D model storage  

---

## ⚡ Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/NietoDeveloper/digital-twins-video-industrial
cd digital-twins-video-industrial

# 2. Configure environment
cp .env.example .env
# → Edit .env with your AWS credentials and DB connection

# 3. Install all dependencies (npm workspaces + Turborepo)
npm install

# 4. Spin up everything locally
docker-compose up --build

# Apps will be available at:
# Frontend  → http://localhost:3000
# Backend   → http://localhost:4000
# AI Worker → http://localhost:8080

# 5. (Optional) Simulate a video stream for dev
bash scripts/simulate-stream.sh

# 6. Run in parallel dev mode
npm run dev
```

---

## 📁 Project Structure

```
digital-twins-video-industrial/     ← ROOT (never rename, even at millions of users)
├── apps/
│   ├── frontend/                   ← React + Three.js + Gaussian Splatting viewer
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── components/         ← Dashboard, 3D preview, alerts, drone controls
│   │   │   ├── hooks/              ← useStream, useTwin, useAlert, useSplat
│   │   │   ├── pages/              ← /dashboard, /twin/:id, /streams, /settings
│   │   │   ├── store/              ← Zustand global state
│   │   │   └── utils/              ← Three.js helpers, WebSocket client
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   ├── backend/                    ← Node/Express + PostgreSQL API
│   │   ├── src/
│   │   │   ├── routes/             ← /auth, /twins, /streams, /assets, /alerts
│   │   │   ├── services/           ← twinService, streamService, authService
│   │   │   ├── models/             ← Prisma/Sequelize models
│   │   │   ├── middleware/         ← auth JWT, rateLimit, logging, errorHandler
│   │   │   └── db/                 ← Migrations SQL, seeds, schema.prisma
│   │   └── package.json
│   │
│   └── ai-worker/                  ← ¡THE CORE! Docker worker for live reconstruction
│       ├── src/
│       │   ├── pipeline/           ← Main orchestrator: frame → twin
│       │   ├── slam/               ← SLAM odometry, sparse 3D map
│       │   ├── reconstruction/     ← 3DGS lite, NeRF fallback
│       │   └── features/           ← ORB, SuperPoint feature extraction
│       ├── modules/
│       │   ├── inpainting/         ← Minimal AI inpainting (4% workload)
│       │   ├── segmentation/       ← Industrial semantic masking
│       │   └── quality/            ← Blur detection, sharpness alerts
│       ├── requirements.txt
│       └── Dockerfile
│
├── packages/
│   ├── shared/                     ← TypeScript types, Zod schemas, latency constants
│   ├── ui/                         ← Reusable React components (industrial design system)
│   └── infra-config/               ← AWS configs (Kinesis, S3, ECS), Docker helpers, envs
│
├── docker/
│   ├── Dockerfile.frontend
│   ├── Dockerfile.backend
│   ├── Dockerfile.ai-worker        ← Optimized for low-latency + optional CUDA
│   └── docker-compose.yml          ← Full local dev with simulated stream
│
├── infrastructure/
│   ├── cdk/                        ← AWS CDK (ECS Fargate, RDS, Kinesis, S3, CloudFront)
│   └── terraform/                  ← Terraform alternative for multi-cloud
│
├── scripts/
│   ├── setup.sh                    ← Full local bootstrap (installs + seeds + starts)
│   ├── seed-db.sql                 ← Initial PostgreSQL data
│   └── simulate-stream.sh          ← Simulates a live video stream for dev/testing
│
├── turbo.json                      ← Turborepo pipeline config
├── .npmrc                          ← npm workspace settings
├── package.json                    ← Root — npm workspaces
├── .env.example                    ← All required env vars documented
└── README.md
```

---

## 🏗️ Architecture

### Three independent layers

| Layer | Tech | Role |
|-------|------|------|
| **Frontend** | React 18, Three.js, Vite, Zustand | Live 3D viewer dashboard, drone controls, alerts |
| **Backend** | Node.js, Express, PostgreSQL, Prisma | Auth, metadata, stream sessions, REST API |
| **AI Worker** | Python 3.11, Docker, CUDA (optional) | SLAM, 3DGS reconstruction, feature extraction, AI inpainting |

### Core Reconstruction Pipeline

```
Video Source (Drone / Camera)
        ↓
AWS Kinesis Video Streams
        ↓
ai-worker/src/pipeline/
   ├── Feature Extraction (ORB / SuperPoint)
   ├── SLAM Odometry → Sparse 3D Map
   ├── 3DGS Lite Reconstruction
   ├── AI Inpainting (4% workload)
   └── Quality Check (blur, sharpness)
        ↓
AWS S3 (twin assets)
        ↓
backend/src/routes/twins → PostgreSQL metadata
        ↓
frontend Three.js viewer ← WebSocket live update
```

---

## 🛠️ Tech Stack

### Frontend
- **React 18** + **Vite** — fast HMR development
- **Three.js** — 3D rendering and Gaussian Splatting viewer
- **Zustand** — lightweight global state
- **WebSocket** — live stream updates from backend

### Backend
- **Node.js 20** + **Express 4** — REST API
- **PostgreSQL 15** — relational data (twins, users, streams, assets)
- **Prisma** — type-safe ORM with migrations
- **JWT** — stateless authentication
- **Socket.io** — real-time event push to frontend

### AI Worker
- **Python 3.11** — reconstruction pipeline
- **SLAM** — visual odometry (monocular/stereo)
- **3DGS Lite** — Gaussian Splatting reconstruction
- **ORB / SuperPoint** — feature extraction
- **AI Inpainting** — minimal footprint gap-filling (4% CPU load)
- **CUDA** — optional GPU acceleration (Dockerfile.ai-worker)

### Cloud & Infrastructure
- **AWS Kinesis Video Streams** — live video ingest
- **AWS ECS Fargate** — containerized service orchestration
- **AWS S3** — twin asset storage (point clouds, splats, textures)
- **AWS RDS PostgreSQL** — managed database
- **AWS CloudFront** — CDN for frontend
- **Docker** + **docker-compose** — local dev = production parity
- **AWS CDK** or **Terraform** — infrastructure as code

### Monorepo
- **Turborepo** — parallel build pipeline, caching
- **npm workspaces** — shared packages (not pnpm — uses npm)

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env` and fill in:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/dt_db

# Auth
JWT_SECRET=your-super-secret-key
JWT_EXPIRES_IN=7d

# AWS
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=...

# Kinesis Video Streams
KINESIS_STREAM_ARN=arn:aws:kinesisvideo:us-east-1:123456:stream/...
KINESIS_STREAM_NAME=industrial-cam-01

# S3
S3_BUCKET_TWINS=dt-assets-prod
S3_BUCKET_REGION=us-east-1

# Services (internal Docker network)
AI_WORKER_URL=http://ai-worker:8080
BACKEND_URL=http://backend:4000

# AI Worker
ENABLE_CUDA=false              # Set true if GPU available
MAX_FRAMES_PER_SECOND=15
INPAINTING_ENABLED=true
QUALITY_THRESHOLD=0.65         # Sharpness minimum (0–1)
```

---

## 📜 Available Scripts

```bash
# Root (runs all apps in parallel via Turborepo)
npm run dev          # Start all apps in development mode
npm run build        # Build all apps
npm run lint         # Lint all packages
npm run test         # Run all test suites

# Frontend only
cd apps/frontend && npm run dev

# Backend only
cd apps/backend && npm run dev

# AI Worker only (Python)
cd apps/ai-worker && python src/pipeline/main.py

# Docker
docker-compose up --build          # Full stack
docker-compose up frontend backend  # Without AI worker

# Infrastructure
cd infrastructure/cdk && cdk deploy    # Deploy to AWS
cd infrastructure/terraform && terraform apply

# Utilities
bash scripts/setup.sh               # Full local bootstrap
bash scripts/simulate-stream.sh     # Simulate video stream
psql $DATABASE_URL < scripts/seed-db.sql  # Seed database
```

---

## 🚀 Deployment (AWS)

### Option A: AWS CDK (recommended)

```bash
cd infrastructure/cdk
npm install
cdk bootstrap
cdk deploy --all
```

Provisions: ECS Fargate (3 services), RDS PostgreSQL, Kinesis Video Stream, S3 bucket, CloudFront distribution.

### Option B: Terraform

```bash
cd infrastructure/terraform
terraform init
terraform plan
terraform apply
```

---

## 🔒 Security

- JWT authentication on all private endpoints  
- Rate limiting via `express-rate-limit`  
- Input validation via Zod (shared package)  
- Docker containers run as non-root users  
- AWS IAM roles with least-privilege policies  
- Secrets managed via AWS Secrets Manager (production)  

---

## 🤝 Contributing

1. Fork the repository  
2. Create your feature branch: `git checkout -b feat/my-feature`  
3. Commit your changes: `git commit -m 'feat: add my feature'`  
4. Push to the branch: `git push origin feat/my-feature`  
5. Open a Pull Request  

Please follow the existing code style and include tests for new features.

---

## 📄 License

MIT License © 2025 **SoftwareDT** · Manuel Nieto

---

## 👨‍💻 Author

**Manuel Nieto** — Full Stack & AI Engineer

| Platform | Link |
|----------|------|
| GitHub | [github.com/NietoDeveloper](https://github.com/NietoDeveloper) |
| LinkedIn | [linkedin.com/in/NietoDeveloper](https://linkedin.com/in/NietoDeveloper) |
| Twitter / X | [@NietoDeveloper](https://twitter.com/NietoDeveloper) |
| Website | [softwaredt.com](https://softwaredt.com) |
| Email | contact@softwaredt.com |

---

<div align="center">

**digital-twins-video-industrial** · Built with ♦ by [SoftwareDT](https://softwaredt.com)

*"From live video to interactive 3D twin — in under 200ms."*

</div>

## 📜 License

### Public Repository
The public parts of this repository (architecture, frontend skeleton, backend API structure, documentation and non-core components) are licensed under the **MIT License**.

Copyright (c) 2026 SoftwareDT - Manuel Nieto

See the full [LICENSE](LICENSE) file for details.

### Core AI Worker (Reconstruction Pipeline)
The real-time 3D reconstruction engine (SLAM + 3DGS Lite + advanced modules) is **proprietary** and **not open source**.  
It is available only under commercial license / Enterprise plan.

Interested in the full functional version? Contact: contact@softwaredt.com