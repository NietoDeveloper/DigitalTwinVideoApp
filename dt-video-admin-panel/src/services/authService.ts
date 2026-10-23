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
