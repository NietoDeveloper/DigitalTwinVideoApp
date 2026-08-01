export type EmployeeRole = 'employee' | 'supervisor' | 'admin';

export interface Employee {
  id: string;
  name: string;
  email: string;
  role: EmployeeRole;
  createdAt: string;
}

export interface EmployeeRecord extends Employee {
  password: string;
  inviteCode: string;
}

export interface AuthSession {
  token: string;
  employee: Employee;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  authorizationCode: string;
}
