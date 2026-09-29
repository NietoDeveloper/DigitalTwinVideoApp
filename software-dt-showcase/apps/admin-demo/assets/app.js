// DEMO — todos los datos son ficticios. Login simulado, sin backend real.

const MOCK_TRABAJO = {
  pendiente: [
    { cliente: "Cliente Demo 1", servicio: "Diagnóstico inicial", fecha: "2026-10-02", conf: "green" },
    { cliente: "Cliente Demo 2", servicio: "Implementación MVP", fecha: "2026-10-05", conf: "amber" },
  ],
  cumplida: [
    { cliente: "Cliente Demo 3", servicio: "Soporte", fecha: "2026-09-20", conf: "green" },
  ],
  cancelada: [
    { cliente: "Cliente Demo 4", servicio: "Diagnóstico inicial", fecha: "2026-09-15", conf: "red" },
  ],
};

const MOCK_VENTAS = {
  dia: [ { label: "MVP", value: "$0 (demo)" }, { label: "Producto Final", value: "$0 (demo)" }, { label: "Aportes", value: "$0 (demo)" } ],
  semana: [ { label: "MVP", value: "$0 (demo)" }, { label: "Producto Final", value: "$0 (demo)" }, { label: "Aportes", value: "$0 (demo)" } ],
  mes: [ { label: "MVP", value: "$0 (demo)" }, { label: "Producto Final", value: "$0 (demo)" }, { label: "Aportes", value: "$0 (demo)" } ],
};

const MOCK_MENSAJES = {
  central: [ "Cita pendiente de confirmación — Cliente Demo 1", "Pago recibido — Cliente Demo 3" ],
  contacto: [ "Consulta general vía formulario web", "Solicitud de información de servicios" ],
};

const MOCK_PRODUCTOS = [
  { name: "Diagnóstico inicial", desc: "Evaluación de proceso a digitalizar" },
  { name: "Implementación MVP", desc: "Primera versión funcional del servicio" },
  { name: "Soporte y mantenimiento", desc: "Acompañamiento post-lanzamiento" },
];

const MOCK_CONEXIONES = [
  { name: "Cluster Cliente", status: "green" },
  { name: "Cluster Admin", status: "green" },
  { name: "Base de datos", status: "amber" },
];

// --- Login ---
document.getElementById("login-btn").addEventListener("click", () => {
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  renderOverview();
  renderTrabajo("pendiente");
  renderVentas("dia");
  renderMensajeria();
  renderProductos();
  renderConexiones();
});

// --- Nav ---
document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".section").forEach((s) => s.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(`section-${btn.dataset.section}`).classList.add("active");
  });
});

function renderOverview() {
  const grid = document.getElementById("kpi-grid");
  grid.innerHTML = [
    { label: "Usuarios registrados", value: "128 (demo)" },
    { label: "En curso", value: "6 (demo)" },
    { label: "Terminados", value: "42 (demo)" },
  ].map((k) => `<div class="kpi"><div class="value">${k.value}</div><div class="label">${k.label}</div></div>`).join("");
}

function renderTrabajo(tab) {
  document.querySelectorAll('#section-trabajo .tab-btn').forEach((b) => {
    b.classList.toggle("active", b.dataset.tab === tab);
  });
  const tbody = document.querySelector("#trabajo-table tbody");
  tbody.innerHTML = MOCK_TRABAJO[tab].map(
    (r) => `<tr><td>${r.cliente}</td><td>${r.servicio}</td><td>${r.fecha}</td>
      <td><span class="dot ${r.conf}"></span>${r.conf === "green" ? "Enviada" : r.conf === "amber" ? "Pendiente" : "Fallida"}</td></tr>`
  ).join("");
}
document.querySelectorAll('#section-trabajo .tab-btn').forEach((b) =>
  b.addEventListener("click", () => renderTrabajo(b.dataset.tab))
);

function renderVentas(range) {
  document.querySelectorAll('#section-ventas .tab-btn').forEach((b) => {
    b.classList.toggle("active", b.dataset.range === range);
  });
  const grid = document.getElementById("ventas-grid");
  grid.innerHTML = MOCK_VENTAS[range].map(
    (k) => `<div class="kpi"><div class="value">${k.value}</div><div class="label">${k.label}</div></div>`
  ).join("");
}
document.querySelectorAll('#section-ventas .tab-btn').forEach((b) =>
  b.addEventListener("click", () => renderVentas(b.dataset.range))
);

function renderMensajeria() {
  document.getElementById("inbox-central").innerHTML =
    MOCK_MENSAJES.central.map((m) => `<li>${m}</li>`).join("");
  document.getElementById("inbox-contacto").innerHTML =
    MOCK_MENSAJES.contacto.map((m) => `<li>${m}</li>`).join("");
  document.getElementById("badge-central").textContent = MOCK_MENSAJES.central.length;
  document.getElementById("badge-contacto").textContent = MOCK_MENSAJES.contacto.length;
}

function renderProductos() {
  document.getElementById("productos-list").innerHTML = MOCK_PRODUCTOS.map(
    (p) => `<div class="card"><h3>${p.name}</h3><p>${p.desc}</p></div>`
  ).join("");
}

function renderConexiones() {
  document.getElementById("conexiones-list").innerHTML = MOCK_CONEXIONES.map(
    (c) => `<li><span class="dot ${c.status}"></span>${c.name} — ${c.status === "green" ? "Operativo" : "Advertencia"}</li>`
  ).join("");
}
