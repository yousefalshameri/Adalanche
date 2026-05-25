'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, BarChart3, Building2, FileText, PlusCircle, Settings, Droplets } from 'lucide-react'

const navItems = [
  { href: '/', label: 'الرئيسية', icon: LayoutDashboard },
  { href: '/analytics', label: 'التحليلات', icon: BarChart3 },
  { href: '/facilities', label: 'المنشآت', icon: Building2 },
  { href: '/reports', label: 'التقارير', icon: FileText },
  { href: '/register', label: 'تسجيل منشأة', icon: PlusCircle },
  { href: '/settings', label: 'الإعدادات', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside style={{ width: '240px', minHeight: '100vh', backgroundColor: '#0D2137', borderLeft: '1px solid #1E3A5F', display: 'flex', flexDirection: 'column', padding: '24px 16px', position: 'fixed', right: 0, top: 0, bottom: 0, zIndex: 100 }}>
      <div style={{ marginBottom: '32px', padding: '0 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #00C896, #1E90FF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Droplets size={20} color="white" />
          </div>
          <div>
            <div style={{ fontSize: '18px', fontWeight: '700', color: 'white', lineHeight: '1' }}>وفير</div>
            <div style={{ fontSize: '11px', color: '#00C896', letterSpacing: '1px', lineHeight: '1.4' }}>Wafir</div>
          </div>
        </div>
        <p style={{ fontSize: '11px', color: '#8B9DB0', lineHeight: '1.5', paddingRight: '4px' }}>نحوّل بيانات الهدر إلى قرارات ذكية</p>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href
          return (
            <Link key={href} href={href} className={`sidebar-link ${isActive ? 'active' : ''}`}>
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          )
        })}
      </nav>

      <div style={{ borderTop: '1px solid #1E3A5F', paddingTop: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #00C896, #1E90FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700', color: 'white' }}>م</div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>محمد الكويتي</div>
          <div style={{ fontSize: '11px', color: '#8B9DB0' }}>مشرف النظام</div>
        </div>
      </div>
    </aside>
  )
}
