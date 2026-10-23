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
uthenticated: true,
        isLoading: false,
   

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
