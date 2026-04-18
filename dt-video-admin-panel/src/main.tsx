import { create } from 'zustand'

interface AdminState {
  systemStatus: 'healthy' | 'degraded' | 'critical';
  setSystemStatus: (status: 'healthy' | 'degraded' | 'critical') => void;
}

export const useAdminStore = create<AdminState>((set) => ({
  systemStatus: 'healthy', // Estado inicial
  setSystemStatus: (status) => set({ systemStatus: status }),
}))