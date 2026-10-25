export type EmployeeRole = 'employee' | 'supervisor' | 'admin';

export interface Employee {
  id: string;
  name: string;
  email: string;
  role: EmployeeRole;
  createdAt: string;
}