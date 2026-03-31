Project Name
A web application built with React (frontend), Node.js (backend), and an admin panel.
Project Structure

/admin: Admin panel source code
/backend: Node.js backend source code



Running the Application

Backend:
cd backend
npm start

Runs on http://localhost:5000 (or as configured).

Frontend:
cd frontend
npm start

Runs on http://localhost:3000.

Admin Panel:
cd admin
npm start

Runs on http://localhost:3001.


Environment Variables

Create .env files in /backend, /frontend, and /admin as needed.
Example for backend (.env):PORT=5000
DATABASE_URL=<your-database-url>



Build for Production

Backend:cd backend
npm run build


Frontend:cd frontend
npm run build


Admin:cd admin
npm run build



License
MIT License
