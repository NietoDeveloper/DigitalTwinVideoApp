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

  },

  clearError: () => set({ error: null }),
}));
