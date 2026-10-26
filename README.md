<!-- HEADER ANIMADO -->
<div align="center">

### 4 · `dt-video-landing-backend`
> **General backend API** — powers the admin panel, handles platform-wide auth, AI worker orchestration, billing, and employee services.

```
dt-video-backend/
├── src/
│   ├── routes/
│   │   ├── auth/        struction p
mkdir digital-twins-ecosystem && cd digital-twins-ecosystem

# Clone all repos
git clone https://github.com/NietoDeveloper/dt-video-landing
git clone https://github.com/NietoDeveloper/dt-video-user-dashboard
git clone https://github.com/NietoDeveloper/dt-video-admin-panel
git clone https://github.com/NietoDeveloper/dt-video-backend
git clone https://github.com/NietoDevelovideo-user-dashboard/.env
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
