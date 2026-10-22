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

