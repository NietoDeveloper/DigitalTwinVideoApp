import { useState } from 'react'
import AdminLayout from './components/layout/AdminLayout'
import './App.css'

function App() {
  // Estado local para pruebas rápidas, luego usaremos el adminStore
  const [count, setCount] = useState(0)

  return (
    <AdminLayout>
      {/* 1. SECCIÓN DE MÉTRICAS (KPIs iniciales) */}
      <section className="metrics-grid mb-8">
        <div className="glass-card animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Revenue Test</h3>
          <p className="kpi-value text-status-online">${(count * 1250).toLocaleString()}</p>
          <div className="text-[9px] mt-2 font-mono text-gray-400">Live simulation active</div>
        </div>

        <div className="glass-card animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h3 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Active Twins</h3>
          <p className="kpi-value">1,204</p>
          <div className="text-[9px] mt-2 font-mono text-status-online">● AWS Kinesis Stable</div>
        </div>

        <div className="glass-card animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h3 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">AI Workers</h3>
          <p className="kpi-value text-status-ai">84%</p>
          <div className="w-full bg-gainsboro h-1 mt-3 rounded-full overflow-hidden">
            <div className="bg-status-ai h-full w-[84%]"></div>
          </div>
        </div>

        <div className="glass-card animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h3 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Global Uptime</h3>
          <p className="kpi-value">99.9%</p>
          <div className="text-[9px] mt-2 font-mono text-gray-400">Instance: dt-prod-01</div>
        </div>
      </section>

      {/* 2. ÁREA DE TRABAJO PRINCIPAL */}
      <section id="center" className="min-h-[400px] border-2 border-dashed border-border-dt rounded-2xl flex flex-col items-center justify-center bg-white/30 backdrop-blur-sm">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-black tracking-tighter uppercase">
            Get started <span className="text-gold">Admin</span>
          </h1>
          <p className="max-w-md mx-auto text-gray-500 text-sm">
            Panel de control interno para la gestión de <strong>Digital Twin Video App</strong>. 
            Modifica los componentes en <code>src/components/*</code> para actualizar este dashboard.
          </p>
          
          <div className="pt-6">
            <button
              className="counter px-8 py-4 text-base"
              onClick={() => setCount((count) => count + 1)}
            >
              Simulate Transaction: {count}
            </button>
          </div>
        </div>
      </section>

      {/* 3. FOOTER DE DESARROLLO (Next Steps) */}
      <section id="next-steps" className="rounded-xl overflow-hidden shadow-sm mt-8">
        <div id="docs">
          <h2 className="text-lg font-bold mb-2">Internal Docs</h2>
          <p className="text-xs text-gray-500 mb-4 font-mono uppercase tracking-tight">System Architect Guidelines</p>
          <ul>
            <li>
              <a href="#streams">📡 Monitor Active Streams</a>
            </li>
            <li>
              <a href="#ai">🧠 Worker Queue Management</a>
            </li>
          </ul>
        </div>
        
        <div id="social">
          <h2 className="text-lg font-bold mb-2">Infrastructure Status</h2>
          <p className="text-xs text-gray-500 mb-4 font-mono uppercase tracking-tight">AWS CloudWatch Shorts</p>
          <ul>
            <li>
              <a href="#" className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-status-online"></div>
                API Gateway: 14ms
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-status-warning"></div>
                S3 Storage: 88% Full
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="spacer"></section>
    </AdminLayout>
  )
}

export default App