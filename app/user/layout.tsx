'use client'

import Link from 'next/link'
import { Droplets, Bell, LogOut } from 'lucide-react'

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A1628', direction: 'rtl', fontFamily: "'Noto Sans Arabic', sans-serif" }}>
      {/* Top Navbar */}
      <nav style={{ backgroundColor: '#0D2137', borderBottom: '1px solid #1E3A5F', padding: '0 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/landing" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #00C896, #1E90FF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Droplets size={17} color="white" />
          </div>
          <span style={{ fontSize: '17px', fontWeight: '700', color: 'white' }}>وفير</span>
        </Link>

        <div style={{ display: 'flex', gap: '4px' }}>
          {[
            { href: '/user', label: 'الرئيسية' },
            { href: '/user/submit', label: 'بلّغ عن هدر' },
            { href: '/user/profile', label: 'منشأتي' },
          ].map((item) => (
            <Link key={item.href} href={item.href} style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '14px', color: '#8B9DB0', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0,200,150,0.1)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#8B9DB0'; }}>
              {item.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#8B9DB0', cursor: 'pointer', padding: '6px', borderRadius: '8px', display: 'flex', position: 'relative' }}>
            <Bell size={18} />
            <span style={{ position: 'absolute', top: '4px', left: '4px', width: '7px', height: '7px', backgroundColor: '#00C896', borderRadius: '50%' }} />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '6px 12px', backgroundColor: 'rgba(30,58,95,0.3)', borderRadius: '10px', border: '1px solid #1E3A5F' }}>
            <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg, #00C896, #1E90FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '700', color: 'white' }}>م</div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>مطعم البيت الكويتي</div>
              <div style={{ fontSize: '11px', color: '#00C896' }}>نشط ✓</div>
            </div>
          </div>
          <button style={{ backgroundColor: 'transparent', border: 'none', color: '#8B9DB0', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', padding: '6px 10px', borderRadius: '8px', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#EF4444')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#8B9DB0')}>
            <LogOut size={15} />
            خروج
          </button>
        </div>
      </nav>

      <main>{children}</main>
    </div>
  )
}
