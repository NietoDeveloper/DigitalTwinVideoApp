import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../components/auth/AuthLayout';
import { RegisterForm } from '../../components/auth/RegisterForm';
import { useAuthStore } from '../../store';

export function RegisterPage() {
  const navigate = useNavigate();
