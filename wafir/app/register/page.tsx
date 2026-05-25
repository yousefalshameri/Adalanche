'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import { kuwaitAreas } from '@/lib/mockData'
import { CheckCircle2 } from 'lucide-react'

const facilityTypes = [
  { value: 'restaurant', label: '🍽️ مطعم', desc: 'مطاعم، كافيهات، مطابخ' },
  { value: 'hotel', label: '🏨 فندق', desc: 'فنادق، منتجعات، شقق فندقية' },
  { value: 'hospital', label: '🏥 مستشفى', desc: 'مستشفيات، عيادات، مراكز صحية' },
  { value: 'school', label: '🏫 مدرسة', desc: 'مدارس، جامعات، معاهد' },
  { value: 'mall', label: '🏦 مركز تجاري', desc: 'مولات، مراكز تسوق' },
  { value: 'government', label: '🏛️ جهة حكومية', desc: 'وزارات، جمعيات، هيئات' },
]

export default function Register() {
  const [formData, setFormData] = useState({ nameAr: '', nameEn: '', type: '', area: '', phone: '', manager: '', email: '', address: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = () => {
    const e: Record<string, string> = {}
    if (!formData.nameAr) e.nameAr = 'اسم المنشأة بالعربي مطلوب'
    if (!formData.type) e.type = 'نوع المنشأة مطلوب'
    if (!formData.area) e.area = 'المنطقة مطلوبة'
    if (!formData.phone) e.phone = 'رقم الهاتف مطلوب'
    if (!formData.manager) e.manager = 'اسم المسؤول مطلوب'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
  }

  const inputStyle = (hasError?: boolean) => ({
    width: '100%', backgroundColor: '#0A1628', border: `1px solid ${hasError ? '#EF4444' : '#1E3A5F'}`,
    borderRadius: '10px', padding: '12px 16px', color: 'white', fontSize: '14px', outline: 'none',
    textAlign: 'right' as const, fontFamily: 'Noto Sans Arabic',
  })

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#0A1628' }}>
        <Header title="تسجيل منشأة جديدة" />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 72px)', padding: '28px' }}>
          <div className="glass-card" style={{ padding: '60px 40px', textAlign: 'center', maxWidth: '480px', width: '100%' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(0,200,150,0.2)', border: '2px solid rgba(0,200,150,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <CheckCircle2 size={40} color="#00C896" />
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>تم التسجيل بنجاح! 🎉</h2>
            <p style={{ fontSize: '14px', color: '#8B9DB0', lineHeight: '1.7', marginBottom: '8px' }}>تم تسجيل <span style={{ color: 'white', fontWeight: '600' }}>{formData.nameAr}</span> في منصة وفير.</p>
            <p style={{ fontSize: '13px', color: '#8B9DB0', lineHeight: '1.7', marginBottom: '32px' }}>سيتواصل معك فريقنا خلال 24 ساعة لاستكمال عملية التفعيل.</p>
            <div style={{ backgroundColor: 'rgba(0,200,150,0.05)', border: '1px solid rgba(0,200,150,0.2)', borderRadius: '12px', padding: '16px', marginBottom: '32px' }}>
              <div style={{ fontSize: '12px', color: '#8B9DB0', marginBottom: '4px' }}>رقم الطلب</div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: '#00C896' }}>WFR-2025-{Math.floor(Math.random() * 900) + 100}</div>
            </div>
            <button onClick={() => { setSubmitted(false); setFormData({ nameAr: '', nameEn: '', type: '', area: '', phone: '', manager: '', email: '', address: '' }) }} style={{ padding: '12px 32px', borderRadius: '10px', border: 'none', background: 'linear-gradient(135deg, #00C896, #1E90FF)', color: 'white', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Noto Sans Arabic' }}>تسجيل منشأة أخرى</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A1628' }}>
      <Header title="تسجيل منشأة جديدة" subtitle="انضم إلى شبكة وفير وابدأ رحلة الاستدامة" />
      <div style={{ padding: '28px', maxWidth: '900px' }}>
        <form onSubmit={handleSubmit}>
          <div className="glass-card" style={{ padding: '24px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '18px' }}>نوع المنشأة *</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {facilityTypes.map((t) => (
                <label key={t.value} onClick={() => handleChange('type', t.value)} style={{ padding: '16px', borderRadius: '12px', border: `1px solid ${formData.type === t.value ? 'rgba(0,200,150,0.4)' : '#1E3A5F'}`, backgroundColor: formData.type === t.value ? 'rgba(0,200,150,0.1)' : 'rgba(30,58,95,0.2)', cursor: 'pointer' }}>
                  <div style={{ fontSize: '22px', marginBottom: '6px' }}>{t.label.split(' ')[0]}</div>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: formData.type === t.value ? 'white' : '#8B9DB0' }}>{t.label.split(' ').slice(1).join(' ')}</div>
                  <div style={{ fontSize: '11px', color: '#8B9DB0', marginTop: '2px' }}>{t.desc}</div>
                </label>
              ))}
            </div>
            {errors.type && <p style={{ color: '#EF4444', fontSize: '12px', marginTop: '8px' }}>⚠️ {errors.type}</p>}
          </div>

          <div className="glass-card" style={{ padding: '24px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '18px' }}>معلومات المنشأة</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#8B9DB0', marginBottom: '8px' }}>اسم المنشأة (عربي) *</label>
                <input type="text" value={formData.nameAr} onChange={(e) => handleChange('nameAr', e.target.value)} placeholder="مثال: مطعم البيت الكويتي" style={inputStyle(!!errors.nameAr)} />
                {errors.nameAr && <p style={{ color: '#EF4444', fontSize: '12px', marginTop: '6px' }}>⚠️ {errors.nameAr}</p>}
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#8B9DB0', marginBottom: '8px' }}>اسم المنشأة (إنجليزي)</label>
                <input type="text" value={formData.nameEn} onChange={(e) => handleChange('nameEn', e.target.value)} placeholder="e.g. Al Bait Al Kuwaiti" style={inputStyle()} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#8B9DB0', marginBottom: '8px' }}>المنطقة *</label>
                <select value={formData.area} onChange={(e) => handleChange('area', e.target.value)} style={{ ...inputStyle(!!errors.area), cursor: 'pointer' }}>
                  <option value="">اختر المنطقة</option>
                  {kuwaitAreas.map((area) => <option key={area} value={area}>{area}</option>)}
                </select>
                {errors.area && <p style={{ color: '#EF4444', fontSize: '12px', marginTop: '6px' }}>⚠️ {errors.area}</p>}
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#8B9DB0', marginBottom: '8px' }}>العنوان التفصيلي</label>
                <input type="text" value={formData.address} onChange={(e) => handleChange('address', e.target.value)} placeholder="الشارع، القطعة، المبنى" style={inputStyle()} />
              </div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '24px', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '18px' }}>معلومات التواصل</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#8B9DB0', marginBottom: '8px' }}>الشخص المسؤول *</label>
                <input type="text" value={formData.manager} onChange={(e) => handleChange('manager', e.target.value)} placeholder="اسم المسؤول الكامل" style={inputStyle(!!errors.manager)} />
                {errors.manager && <p style={{ color: '#EF4444', fontSize: '12px', marginTop: '6px' }}>⚠️ {errors.manager}</p>}
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#8B9DB0', marginBottom: '8px' }}>رقم الاتصال *</label>
                <input type="tel" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} placeholder="+965 XXXX XXXX" style={inputStyle(!!errors.phone)} />
                {errors.phone && <p style={{ color: '#EF4444', fontSize: '12px', marginTop: '6px' }}>⚠️ {errors.phone}</p>}
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#8B9DB0', marginBottom: '8px' }}>البريد الإلكتروني</label>
                <input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} placeholder="example@domain.com" style={inputStyle()} />
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'flex-end' }}>
            <button type="button" onClick={() => setFormData({ nameAr: '', nameEn: '', type: '', area: '', phone: '', manager: '', email: '', address: '' })} style={{ padding: '14px 28px', borderRadius: '10px', border: '1px solid #1E3A5F', background: 'transparent', color: '#8B9DB0', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Noto Sans Arabic' }}>مسح البيانات</button>
            <button type="submit" style={{ padding: '14px 40px', borderRadius: '10px', border: 'none', background: 'linear-gradient(135deg, #00C896, #1E90FF)', color: 'white', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'Noto Sans Arabic' }}>تسجيل المنشأة ✓</button>
          </div>
        </form>
      </div>
    </div>
  )
}
