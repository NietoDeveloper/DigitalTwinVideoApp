import { useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';

export function DashboardPage() {
  const [count, setCount] = useState(0);

  return (
    <
        <div className="glass-card">
          <h3 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            Global Uptime
          </h3>
          <p className="kpi-value">99.9%</p>
         
      <section
        id="center"
        classtton
              

      <section id="next-steps" classN
          </p>
          <ul>
            <li>
              <a href="#streams">Monitor Active Streams</a>
            </li>
            <li>
              <a href="#ai">Worker Queue Management</a>
            </li>
          </ul>
        </div>

        <div id="social">
          <h2 className="text-lg font-bold mb-2">Infrastructure Status</h2>
          <p className="text-xs text-gray-500 mb-4 font-mono uppercase tracking-tight">
            AWS CloudWatch Shorts
          </p>
          <ul>
            <li>
              <a href="#" className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-status-online" />
                API Gateway: 14ms
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-status-warning" />
                S3 Storage: 88% Full
              </a>
            </li>
          </ul>
        </div>
      </section>
    </AdminLayout>
  );
}