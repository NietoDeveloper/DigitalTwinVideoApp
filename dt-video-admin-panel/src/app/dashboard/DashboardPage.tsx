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


            <li>
              <a href="#" className="flex items-center g
                <div className="w-2 h-2 rounded-full bg-status-online" />
                API Gateway: 14ms
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-status-warning" />
                S3 Storag: 88% Full
              </a>
            </li>
          </ul>
        </div>
      </section>
    </AdminLayout>
  );
}