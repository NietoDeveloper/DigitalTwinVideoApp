import type {
  AuthSession,
  Employee,
  EmployeeRecord,
  LoginPayload,
  RegisterPayload,
} from '../types/auth';

const EMPLOYEES_KEY = 'dt-admin-employees';
const SESSION_KEY = 'dt-admin-session';

/** Códigos de autorización emitidos por el jefe (mock frontend). */
export const VALID_INVITE_CODES = ['DT-EMP-2026', 'BOSS-AUTH-01'] as const;

function readEmployees(): EmployeeRecord[] {
  try {
    const raw = localStorage.getItem(EMPLOYEES_KEY);
    return raw ? (JSON.parse(raw) as EmployeeRecord[]) : [];
  } catch {
    return [];
  }
}

function writeEmployees(employees: EmployeeRecord[]) {
  localStorage.setItem(EMPLOYEES_KEY, JSON.stringify(employees));
}

function toPublicEmployee(record: EmployeeRecord): Employee {
  return {
    id: record.id,
    name: record.name,
    email: record.email,
    role: record.role,
    createdAt: record.createdAt,
  };
}

function createToken(employeeId: string) {
  return `dt-front-${employeeId}-${Date.now()}`;
}

export function getStoredSession(): AuthSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as AuthSession) : null;
  } catch {
    return null;
  }
}

export function clearStoredSession() {
  localStorage.removeItem(SESSION_KEY);
}

function persistSession(session: AuthSession) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export async function registerEmployee(payload: RegisterPayload): Promise<AuthSession> {
  await delay(350);

  const name = payload.name.trim();
  const email = payload.email.trim().toLowerCase();
  const code = payload.authorizationCode.trim().toUpperCase();

  if (!name || name.length < 2) {
    throw new Error('Ingresa tu nombre completo.');
  }
  if (!email.includes('@')) {
    throw new Error('Ingresa un correo válido.');
  }
  if (payload.password.length < 6) {
    throw new Error('La contraseña debe tener al menos 6 caracteres.');
  }
  if (payload.password !== payload.confirmPassword) {
    throw new Error('Las contraseñas no coinciden.');
  }
  if (!VALID_INVITE_CODES.includes(code as (typeof VALID_INVITE_CODES)[number])) {
    throw new Error('Código de autorización inválido. Solicítalo a tu jefe.');
  }

  const employees = readEmployees();
  if (employees.some((e) => e.email === email)) {
    throw new Error('Ya existe un empleado registrado con este correo.');
  }

  const record: EmployeeRecord = {
    id: crypto.randomUUID(),
    name,
    email,
    password: payload.password,
    inviteCode: code,
    role: 'employee',
    createdAt: new Date().toISOString(),
  };

  writeEmployees([...employees, record]);

  const session: AuthSession = {
    token: createToken(record.id),
    employee: toPublicEmployee(record),
  };
  persistSession(session);
  return session;
}

export async function loginEmployee(_payload: LoginPayload): Promise<AuthSession> {
  // Temporal: cualquier clic en "Entrar" abre el panel. Validación real después.
  await delay(150);

  const guest: Employee = {
    id: 'demo-employee',
    name: 'Empleado Demo',
    email: 'empleado@softwaredt.com',
    role: 'employee',
    createdAt: new Date().toISOString(),
  };

  const session: AuthSession = {
    token: createToken(guest.id),
    employee: guest,
  };
  persistSession(session);
  return session;
}

export function logoutEmployee() {
  clearStoredSession();
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
