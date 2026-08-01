import { create } from 'zustand';
import type { Employee, LoginPayload, RegisterPayload } from '../types/auth';
import {
  clearStoredSession,
  getStoredSession,
  loginEmployee,
  logoutEmployee,
  registerEmployee,
} from '../services/authService';

interface AuthState {
  employee: Employee | null;
  token: string | null;
  isAuthenticated: boolean;
  isHydrated: boolean;
  isLoading: boolean;
  error: string | null;
  hydrate: () => void;
  login: (payload: LoginPayload) => Promise<boolean>;
  register: (payload: RegisterPayload) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  employee: null,
  token: null,
  isAuthenticated: false,
  isHydrated: false,
  isLoading: false,
  error: null,

  hydrate: () => {
    const session = getStoredSession();
    if (session) {
      set({
        employee: session.employee,
        token: session.token,
        isAuthenticated: true,
        isHydrated: true,
        error: null,
      });
      return;
    }
    set({
      employee: null,
      token: null,
      isAuthenticated: false,
      isHydrated: true,
      error: null,
    });
  },

  login: async (payload) => {
    set({ isLoading: true, error: null });
    try {
      const session = await loginEmployee(payload);
      set({
        employee: session.employee,
        token: session.token,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
      return true;
    } catch (err) {
      set({
        isLoading: false,
        error: err instanceof Error ? err.message : 'No se pudo iniciar sesión.',
      });
      return false;
    }
  },

  register: async (payload) => {
    set({ isLoading: true, error: null });
    try {
      const session = await registerEmployee(payload);
      set({
        employee: session.employee,
        token: session.token,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
      return true;
    } catch (err) {
      set({
        isLoading: false,
        error: err instanceof Error ? err.message : 'No se pudo completar el registro.',
      });
      return false;
    }
  },

  logout: () => {
    logoutEmployee();
    clearStoredSession();
    set({
      employee: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  },

  clearError: () => set({ error: null }),
}));
