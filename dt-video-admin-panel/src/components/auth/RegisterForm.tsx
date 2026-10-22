import { useState, type FormEvent } from 'react';
import { Eye, EyeOff, KeyRound, Loader2, UserPlus } from 'lucide-react';
import { useAuthStore } from '../../store';
import { VALID_INVITE_CODES } from '../../services/authService';

interface RegisterFormProps {
  onSuccess: () => void;
}

export function RegisterForm({ onSuccess }: RegisterFormProps) {
  const { register, isLoading, error, clearError } = useAuthStore();


  return (
    <form c
      </label>

      <label className="auth-field">
        <span>Correo corporativo</span>
        <input
          type="email"
          autoComplete="email"
          placeholder="empleado@softwaredt.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label className="auth-field">
        <span className="inline-flex items-center gap-1.5">
          <KeyRound size={12} className="text-gold" />
          Código de autorización del jefe
        </span>
        <input
          type="text"
          autoComplete="one-time-code"
          placeholder="DT-EMP-XXXX"
          value={authorizationCode}
          onChange={(e) => setAuthorizationCode(e.target.value.toUpperCase())}
          required
        />
        <small className="auth-hint">
          Demo front: {VALID_INVITE_CODES.join(' · ')}
        </small>
      </label>

      <label className="auth-field">
        <span>Contraseña</span>
        <div className="auth-input-row">
          <input
          