'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import { facilities } from '@/lib/mockData'
import { Search, Droplets, Utensils } from 'lucide-react'

const typeLabels: Record<string, string> = {
  restaurant: '🍽️ مطعم',
  hotel: '🏨 فندق',
  hospital: '🏥 مستشفى',
  school: '🏫 مدرسة',
  mall: '🏦 مول',
  government: '🏛️ حكومي',
}

const statusConfig = {
  active: { label: 'نشط', icon: '✅', class: 'badge-active' },
  warning: { label: 'تنبيه', icon: '⚠️', class: 'badge-warning' },
  critical: { label: 'حرج', icon: '🔴', class: 'badge-critical' },
}

export default function Facilities() {
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [areaFilter, setAreaFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  const areas = Array.from(new Set(facilities.map((f) => f.area))).sort()
  const filtered = facilities.filter((f) => {
    const matchSearch = f.nameAr.includes(search) || f.name.toLowerCase().includes(search.toLowerCase()) || f.area.includes(search)
    const matchType = typeFilter === 'all' || f.type === typeFilter
    const matchArea = areaFilter === 'all' || f.area === areaFilter
    const matchStatus = statusFilter === 'all' || f.status === statusFilter
    return matchSearch && matchType && matchArea && matchStatus
  })

  const counts = {
    total: facilities.length,
    active: facilities.filter((f) => f.status === 'active').length,
    warning: facilities.filter((f) => f.status === 'warning').length,
    critical: facilities.filter((f) => f.status === 'critical').length,
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A1628' }}>
      <Header title="إدارة المنشآت" subtitle={`${counts.total} منشأة مسجلة · ${counts.active} نشطة · ${counts.warning} تنبيه · ${counts.critical} حرجة`} />
      <div style={{ padding: '28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
          {[
            { label: 'إجمالي المنشآت', value: counts.total, color: '#1E90FF', bg: 'rgba(30,144,255,0.1)', border: 'rgba(30,144,255,0.2)' },
            { label: 'نشطة', value: counts.active, color: '#10B981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)' },
            { label: 'تنبيه', value: counts.warning, color: '#F59E0B', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)' },
            { label: 'حرجة', value: counts.critical, color: '#EF4444', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.2)' },
          ].map((item) => (
            <div key={item.label} style={{ backgroundColor: item.bg, border: `1px solid ${item.border}`, borderRadius: '12px', padding: '18px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '700', color: item.color }}>{item.value}</div>
              <div style={{ fontSize: '13px', color: '#8B9DB0', marginTop: '4px' }}>{item.label}</div>
            </div>
          ))}
        </div>

        <div className="glass-card" style={{ padding: '20px', marginBottom: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto', gap: '14px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#0A1628', border: '1px solid #1E3A5F', borderRadius: '10px', padding: '10px 16px' }}>
              <Search size={16} color="#8B9DB0" />
              <input type="text" placeholder="ابحث باسم المنشأة أو المنطقة..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ background: 'transparent', border: 'none', outline: 'none', color: 'white', fontSize: '14px', width: '100%', textAlign: 'right' }} />
            </div>
            {[{ value: typeFilter, setter: setTypeFilter, options: [{ v: 'all', l: 'كل الأنواع' }, { v: 'restaurant', l: 'مطاعم' }, { v: 'hotel', l: 'فنادق' }, { v: 'hospital', l: 'مستشفيات' }, { v: 'school', l: 'مدارس' }, { v: 'mall', l: 'مولات' }, { v: 'government', l: 'حكومية' }] },].map((sel, idx) => (
              <select key={idx} value={sel.value} onChange={(e) => sel.setter(e.target.value)} style={{ backgroundColor: '#0A1628', border: '1px solid #1E3A5F', borderRadius: '10px', padding: '10px 16px', color: 'white', fontSize: '13px', cursor: 'pointer', outline: 'none', minWidth: '140px' }}>
                {sel.options.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
              </select>
            ))}
            <select value={areaFilter} onChange={(e) => setAreaFilter(e.target.value)} style={{ backgroundColor: '#0A1628', border: '1px solid #1E3A5F', borderRadius: '10px', padding: '10px 16px', color: 'white', fontSize: '13px', cursor: 'pointer', outline: 'none', minWidth: '140px' }}>
              <option value="all">كل المناطق</option>
              {areas.map((area) => <option key={area} value={area}>{area}</option>)}
            </select>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ backgroundColor: '#0A1628', border: '1px solid #1E3A5F', borderRadius: '10px', padding: '10px 16px', color: 'white', fontSize: '13px', cursor: 'pointer', outline: 'none', minWidth: '130px' }}>
              <option value="all">كل الحالات</option>
              <option value="active">نشط</option>
              <option value="warning">تنبيه</option>
              <option value="critical">حرج</option>
            </select>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{ padding: '18px 24px', borderBottom: '1px solid #1E3A5F', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', color: '#8B9DB0' }}>يعرض <span style={{ color: 'white', fontWeight: '600' }}>{filtered.length}</span> من {counts.total} منشأة</span>
            <button style={{ fontSize: '13px', color: '#00C896', background: 'rgba(0,200,150,0.1)', border: '1px solid rgba(0,200,150,0.3)', borderRadius: '8px', padding: '8px 16px', cursor: 'pointer' }}>+ إضافة منشأة</button>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'rgba(30,58,95,0.3)' }}>
                  {['المنشأة', 'النوع', 'المنطقة', 'هدر المياه / شهر', 'هدر الطعام / شهر', 'النقاط', 'الحالة', 'المسؤول'].map((h) => (
                    <th key={h} style={{ textAlign: 'right', padding: '14px 18px', fontSize: '12px', color: '#8B9DB0', fontWeight: '600', borderBottom: '1px solid #1E3A5F', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((f) => {
                  const statusCfg = statusConfig[f.status]
                  return (
                    <tr key={f.id} style={{ borderBottom: '1px solid rgba(30,58,95,0.4)', transition: 'background 0.2s', cursor: 'pointer' }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(30,58,95,0.3)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}>
                      <td style={{ padding: '14px 18px' }}>
                        <div style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>{f.nameAr}</div>
                        <div style={{ fontSize: '11px', color: '#8B9DB0', marginTop: '2px' }}>{f.name}</div>
                      </td>
                      <td style={{ padding: '14px 18px' }}>
                        <span style={{ fontSize: '12px', padding: '4px 10px', borderRadius: '20px', backgroundColor: 'rgba(30,144,255,0.1)', color: '#8BB8FF', border: '1px solid rgba(30,144,255,0.2)', whiteSpace: 'nowrap' }}>{typeLabels[f.type]}</span>
                      </td>
                      <td style={{ padding: '14px 18px', fontSize: '13px', color: '#8B9DB0' }}>{f.area}</td>
                      <td style={{ padding: '14px 18px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Droplets size={13} color="#1E90FF" />
                          <span style={{ fontSize: '13px', color: 'white', fontWeight: '500' }}>{f.waterWaste.toLocaleString()}</span>
                          <span style={{ fontSize: '11px', color: '#8B9DB0' }}>لتر</span>
                        </div>
                      </td>
                      <td style={{ padding: '14px 18px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Utensils size={13} color="#00C896" />
                          <span style={{ fontSize: '13px', color: 'white', fontWeight: '500' }}>{f.foodWaste}</span>
                          <span style={{ fontSize: '11px', color: '#8B9DB0' }}>كجم</span>
                        </div>
                      </td>
                      <td style={{ padding: '14px 18px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div style={{ width: '60px', height: '6px', backgroundColor: 'rgba(30,58,95,0.8)', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ width: `${f.score * 10}%`, height: '100%', backgroundColor: f.score >= 8 ? '#10B981' : f.score >= 6 ? '#F59E0B' : '#EF4444', borderRadius: '3px' }} />
                          </div>
                          <span style={{ fontSize: '13px', fontWeight: '700', color: f.score >= 8 ? '#10B981' : f.score >= 6 ? '#F59E0B' : '#EF4444' }}>{f.score}</span>
                        </div>
                      </td>
                      <td style={{ padding: '14px 18px' }}>
                        <span className={statusCfg.class} style={{ fontSize: '12px', padding: '4px 10px', borderRadius: '20px', whiteSpace: 'nowrap' }}>{statusCfg.icon} {statusCfg.label}</span>
                      </td>
                      <td style={{ padding: '14px 18px', fontSize: '13px', color: '#8B9DB0' }}>{f.manager}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          {filtered.length === 0 && (
            <div style={{ padding: '48px', textAlign: 'center', color: '#8B9DB0' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🔍</div>
              <div style={{ fontSize: '15px', fontWeight: '600', color: 'white', marginBottom: '6px' }}>لا توجد نتائج</div>
              <div style={{ fontSize: '13px' }}>جرّب تعديل معايير البحث أو الفلتر</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
