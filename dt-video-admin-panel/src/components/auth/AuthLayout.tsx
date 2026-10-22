import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { KeyRound, ShieldCheck } from 'lucide-react';


export function AuthLayout({ title, subtitle, children, footer }: AuthLayoutProps) {
  return (
    <div className="au