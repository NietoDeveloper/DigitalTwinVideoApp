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
