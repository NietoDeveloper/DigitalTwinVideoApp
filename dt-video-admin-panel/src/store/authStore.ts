import { create } from 'zustand';
import type { Employee, LoginPayload, RegisterPayload } from '../types/auth';
import {
  clearStoredSession,
  getStoredSession,
  loginEmployee,
  logoutEmployee,
  registerEmployee,
} from '../services/authService';

      employee: null,

