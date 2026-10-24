import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './app/auth/LoginPage';
import { RegisterPage } from './app/auth/RegisterPage';
import { DashboardPage } from './app/dashboard/DashboardPage';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { useAuthStore } from './store';
