import { create } from 'zustand';

interface AdminState {
  systemStatus: 'healthy' | 'degraded' | 'critical';
  setSystemStatus: (status: 'healthy' | 'degraded' | 'critical') => void;
}
