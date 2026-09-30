import React, { useState, useEffect, memo, useMemo } from 'react';
import { Activity, ShieldCheck, Wifi, Clock, Database, Terminal } from 'lucide-react';

interface DashboardContainerProps {
  children: React.ReactNode;
  userTag?: string;
}

const DashboardContainer = memo(({ children, userTag = "MN_01_COL" }: DashboardContainerProps) => {
  const [time, setTime] = useState(new Date());
  const [latency, setLatency] = useState(184);

  // Reloj de misión y mulación de latencia optimizados
  useEffect(() =>