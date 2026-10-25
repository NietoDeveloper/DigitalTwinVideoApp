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

export interface RegisterPaylo
  name: str
  password: string
  confirmPassword: st
  autho