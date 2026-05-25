'use client'

import Header from '@/components/Header'
import { Bell, Shield, Globe, Download, ChevronLeft } from 'lucide-react'

export default function Settings() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A1628' }}>
      <Header title="الإعدادات" subtitle="تخصيص تجربتك في منصة وفير" />
      <div style={{ padding: '28px', maxWidth: '720px' }}>
        {[
          { icon: <Bell size={18} color="#00C896" />, title: 'الإشعارات', desc: 'تحكم في إشعارات التنبيهات والتقارير', items: ['تنبيهات تجاوز الحد', 'تقارير يومية', 'إشعارات المنشآت الجديدة'] },
          { icon: <Globe size={18} color="#1E90FF" />, title: 'اللغة والمنطقة', desc: 'ضبط اللغة وإعدادات الوقت', items: ['العربية - الكويت', 'توقيت الكويت (AST)', 'الكيلوجرام / اللتر'] },
          { icon: <Shield size={18} color="#F59E0B" />, title: 'الأمان والخصوصية', desc: 'كلمة المرور والصلاحيات', items: ['تغيير كلمة المرور', 'المصادقة الثنائية', 'سجل الدخول'] },
          { icon: <Download size={18} color="#8B5CF6" />, title: 'تصدير البيانات', desc: 'تحميل بياناتك بتنسيقات مختلفة', items: ['تصدير Excel', 'تصدير CSV', 'تصدير PDF'] },
        ].map((section) => (
          <div key={section.title} className="glass-card" style={{ padding: '24px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: 'rgba(30,58,95,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{section.icon}</div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: '700', color: 'white' }}>{section.title}</div>
                <div style={{ fontSize: '12px', color: '#8B9DB0' }}>{section.desc}</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {section.items.map((item) => (
                <button key={item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', backgroundColor: 'rgba(30,58,95,0.2)', border: '1px solid rgba(30,58,95,0.4)', borderRadius: '8px', color: '#CBD5E1', fontSize: '13px', cursor: 'pointer', textAlign: 'right', fontFamily: 'Noto Sans Arabic', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(30,58,95,0.4)'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(30,58,95,0.2)'; e.currentTarget.style.color = '#CBD5E1'; }}>
                  <span>{item}</span>
                  <ChevronLeft size={16} color="#8B9DB0" />
                </button>
              ))}
            </div>
          </div>
        ))}
        <div style={{ textAlign: 'center', padding: '20px', color: '#8B9DB0', fontSize: '12px' }}>وفير | Wafir — نسخة 1.0.0 · KFAS × IE University · الكويت 2025</div>
      </div>
    </div>
  )
}
