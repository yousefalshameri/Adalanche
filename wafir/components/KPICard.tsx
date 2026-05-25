'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'

interface KPICardProps {
  title: string
  value: string
  change: string
  changeType: 'up' | 'down'
  changePositive?: boolean
  icon: string
  gradient: 'green' | 'blue' | 'orange' | 'purple'
  subtitle?: string
}

const gradients: Record<string, string> = {
  green: 'linear-gradient(135deg, rgba(0,200,150,0.2), rgba(0,200,150,0.05))',
  blue: 'linear-gradient(135deg, rgba(30,144,255,0.2), rgba(30,144,255,0.05))',
  orange: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(245,158,11,0.05))',
  purple: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(139,92,246,0.05))',
}

const borderColors: Record<string, string> = {
  green: 'rgba(0,200,150,0.2)',
  blue: 'rgba(30,144,255,0.2)',
  orange: 'rgba(245,158,11,0.2)',
  purple: 'rgba(139,92,246,0.2)',
}

const iconBg: Record<string, string> = {
  green: 'rgba(0,200,150,0.2)',
  blue: 'rgba(30,144,255,0.2)',
  orange: 'rgba(245,158,11,0.2)',
  purple: 'rgba(139,92,246,0.2)',
}

export default function KPICard({ title, value, change, changeType, changePositive = true, icon, gradient, subtitle }: KPICardProps) {
  const changeColor = changePositive ? '#10B981' : '#EF4444'

  return (
    <div className="glass-card-hover" style={{ background: gradients[gradient], backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: `1px solid ${borderColors[gradient]}`, borderRadius: '16px', padding: '24px', cursor: 'pointer' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: iconBg[gradient], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>{icon}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: changePositive ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', border: `1px solid ${changePositive ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`, borderRadius: '20px', padding: '4px 10px' }}>
          {changeType === 'up' ? <TrendingUp size={13} color={changeColor} /> : <TrendingDown size={13} color={changeColor} />}
          <span style={{ fontSize: '12px', fontWeight: '600', color: changeColor }}>{change}</span>
        </div>
      </div>
      <div>
        <div className="kpi-counter" style={{ fontSize: '28px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>{value}</div>
        <div style={{ fontSize: '13px', color: '#8B9DB0', fontWeight: '500' }}>{title}</div>
        {subtitle && <div style={{ fontSize: '11px', color: '#8B9DB0', marginTop: '4px', opacity: 0.7 }}>{subtitle}</div>}
      </div>
    </div>
  )
}
