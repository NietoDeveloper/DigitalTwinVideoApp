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