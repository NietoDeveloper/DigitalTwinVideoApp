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
