'use client'

import { Bell, Search } from 'lucide-react'

interface HeaderProps {
  title: string
  subtitle?: string
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header style={{ backgroundColor: '#0A1628', borderBottom: '1px solid #1E3A5F', padding: '16px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 50 }}>
      <div>
        <h1 style={{ fontSize: '20px', fontWeight: '700', color: 'white', lineHeight: '1.2' }}>{title}</h1>
        {subtitle && <p style={{ fontSize: '13px', color: '#8B9DB0', marginTop: '2px' }}>{subtitle}</p>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#0D2137', border: '1px solid #1E3A5F', borderRadius: '8px', padding: '8px 14px', color: '#8B9DB0' }}>
          <Search size={15} />
          <input type="text" placeholder="بحث..." style={{ background: 'transparent', border: 'none', outline: 'none', color: 'white', fontSize: '13px', width: '160px', textAlign: 'right' }} />
        </div>
        <button style={{ position: 'relative', backgroundColor: '#0D2137', border: '1px solid #1E3A5F', borderRadius: '8px', padding: '8px', color: '#8B9DB0', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <Bell size={18} />
          <span style={{ position: 'absolute', top: '6px', left: '6px', width: '8px', height: '8px', backgroundColor: '#00C896', borderRadius: '50%' }} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>محمد الكويتي</div>
            <div style={{ fontSize: '11px', color: '#8B9DB0' }}>مشرف النظام</div>
          </div>
          <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, #00C896, #1E90FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: '700', color: 'white', cursor: 'pointer' }}>م</div>
        </div>
      </div>
    </header>
  )
}
