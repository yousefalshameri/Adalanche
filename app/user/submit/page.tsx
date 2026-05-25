'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, Droplets, Utensils, ArrowRight } from 'lucide-react'

type WasteType = 'food' | 'water'

const foodCategories = ['بقايا طعام مطبوخ', 'خضار وفواكه تالفة', 'خبز وعجين', 'لحوم ودواجن', 'ألبان وأجبان', 'أخرى']
const waterCategories = ['مياه الطهي والإعداد', 'مياه التنظيف', 'مياه تسرب في الأنابيب', 'مياه تبريد', 'أخرى']

export default function SubmitReport() {
  const [step, setStep] = useState(1)
  const [wasteType, setWasteType] = useState<WasteType | null>(null)
  const [formData, setFormData] = useState({
    category: '',
    quantity: '',
    unit: 'كجم',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().slice(0, 5),
    notes: '',
    canDonate: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
  }

  if (step === 3) {
    return (
      <div style={{ padding: '28px', minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: 'rgba(13,33,55,0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(30,58,95,0.6)', borderRadius: '20px', padding: '56px 40px', textAlign: 'center', maxWidth: '480px', width: '100%' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(0,200,150,0.15)', border: '2px solid rgba(0,200,150,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <CheckCircle2 size={40} color="#00C896" />
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>تم تسجيل البلاغ بنجاح! ✅</h2>
          <p style={{ fontSize: '14px', color: '#8B9DB0', lineHeight: '1.7', marginBottom: '28px' }}>
            تم تسجيل <span style={{ color: 'white', fontWeight: '600' }}>{formData.quantity} {formData.unit}</span> من {wasteType === 'food' ? 'هدر الطعام' : 'هدر المياه'} بنجاح.
            {formData.canDonate && ' سنتواصل معك قريباً لترتيب التبرع بالفائض.'}
          </p>

          <div style={{ backgroundColor: 'rgba(0,200,150,0.05)', border: '1px solid rgba(0,200,150,0.15)', borderRadius: '12px', padding: '16px', marginBottom: '28px', textAlign: 'right' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { label: 'رقم البلاغ', value: `WFR-${Date.now().toString().slice(-6)}` },
                { label: 'التاريخ والوقت', value: `${formData.date} — ${formData.time}` },
                { label: 'النوع', value: wasteType === 'food' ? '🍱 طعام' : '💧 مياه' },
                { label: 'الكمية', value: `${formData.quantity} ${formData.unit}` },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ fontSize: '11px', color: '#8B9DB0', marginBottom: '2px' }}>{item.label}</div>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button onClick={() => { setStep(1); setWasteType(null); setFormData({ category: '', quantity: '', unit: 'كجم', date: new Date().toISOString().split('T')[0], time: new Date().toTimeString().slice(0, 5), notes: '', canDonate: false }) }}
              style={{ padding: '12px 24px', borderRadius: '10px', border: '1px solid rgba(0,200,150,0.3)', background: 'rgba(0,200,150,0.1)', color: '#00C896', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Noto Sans Arabic' }}>
              بلاغ جديد
            </button>
            <Link href="/user" style={{ padding: '12px 24px', borderRadius: '10px', border: 'none', background: 'linear-gradient(135deg, #00C896, #1E90FF)', color: 'white', fontSize: '14px', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
              العودة للرئيسية
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: '28px', minHeight: 'calc(100vh - 64px)' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '28px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: '700', color: 'white', marginBottom: '6px' }}>بلّغ عن هدر جديد</h1>
          <p style={{ fontSize: '14px', color: '#8B9DB0' }}>سجّل كميات الهدر بدقة لتحسين تحليلاتك</p>
        </div>

        {/* Step indicator */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', alignItems: 'center' }}>
          {[1, 2].map((s) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '700', backgroundColor: step >= s ? '#00C896' : 'rgba(30,58,95,0.5)', color: step >= s ? 'white' : '#8B9DB0' }}>{s}</div>
              <span style={{ fontSize: '13px', color: step >= s ? 'white' : '#8B9DB0', fontWeight: step === s ? '600' : '400' }}>
                {s === 1 ? 'نوع الهدر' : 'التفاصيل'}
              </span>
              {s < 2 && <div style={{ width: '40px', height: '1px', backgroundColor: step > s ? '#00C896' : '#1E3A5F' }} />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div>
            <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'white', marginBottom: '20px' }}>ما نوع الهدر الذي تريد تسجيله؟</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { type: 'food' as WasteType, icon: '🍱', title: 'هدر طعام', desc: 'بقايا طعام، خضار تالفة، خبز، لحوم...', color: '#00C896', border: 'rgba(0,200,150,0.3)', bg: 'rgba(0,200,150,0.08)' },
                { type: 'water' as WasteType, icon: '💧', title: 'هدر مياه', desc: 'مياه الطهي، التنظيف، التسرب...', color: '#1E90FF', border: 'rgba(30,144,255,0.3)', bg: 'rgba(30,144,255,0.08)' },
              ].map((opt) => (
                <button key={opt.type} onClick={() => { setWasteType(opt.type); setStep(2) }}
                  style={{ padding: '32px 24px', borderRadius: '16px', border: `2px solid ${wasteType === opt.type ? opt.border : '#1E3A5F'}`, backgroundColor: wasteType === opt.type ? opt.bg : 'rgba(30,58,95,0.2)', cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s', fontFamily: 'Noto Sans Arabic' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = opt.border; (e.currentTarget as HTMLElement).style.backgroundColor = opt.bg; }}
                  onMouseLeave={(e) => { if (wasteType !== opt.type) { (e.currentTarget as HTMLElement).style.borderColor = '#1E3A5F'; (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(30,58,95,0.2)'; } }}>
                  <div style={{ fontSize: '48px', marginBottom: '14px' }}>{opt.icon}</div>
                  <div style={{ fontSize: '17px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>{opt.title}</div>
                  <div style={{ fontSize: '13px', color: '#8B9DB0', lineHeight: '1.5' }}>{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && wasteType && (
          <form onSubmit={handleSubmit}>
            <div style={{ background: 'rgba(13,33,55,0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(30,58,95,0.6)', borderRadius: '16px', padding: '28px', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '20px' }}>
                {wasteType === 'food' ? '🍱 تفاصيل هدر الطعام' : '💧 تفاصيل هدر المياه'}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {/* Category */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#8B9DB0', marginBottom: '8px' }}>التصنيف *</label>
                  <select value={formData.category} onChange={(e) => setFormData(p => ({ ...p, category: e.target.value }))} required
                    style={{ width: '100%', backgroundColor: '#0A1628', border: '1px solid #1E3A5F', borderRadius: '10px', padding: '12px 16px', color: formData.category ? 'white' : '#8B9DB0', fontSize: '14px', outline: 'none', cursor: 'pointer', fontFamily: 'Noto Sans Arabic' }}>
                    <option value="">اختر التصنيف</option>
                    {(wasteType === 'food' ? foodCategories : waterCategories).map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Quantity */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#8B9DB0', marginBottom: '8px' }}>الكمية *</label>
                    <input type="number" min="0" step="0.1" value={formData.quantity} onChange={(e) => setFormData(p => ({ ...p, quantity: e.target.value }))} placeholder="0" required
                      style={{ width: '100%', backgroundColor: '#0A1628', border: '1px solid #1E3A5F', borderRadius: '10px', padding: '12px 16px', color: 'white', fontSize: '16px', fontWeight: '600', outline: 'none', textAlign: 'center', fontFamily: 'Noto Sans Arabic' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#8B9DB0', marginBottom: '8px' }}>الوحدة</label>
                    <select value={formData.unit} onChange={(e) => setFormData(p => ({ ...p, unit: e.target.value }))}
                      style={{ backgroundColor: '#0A1628', border: '1px solid #1E3A5F', borderRadius: '10px', padding: '12px 16px', color: 'white', fontSize: '14px', outline: 'none', cursor: 'pointer', fontFamily: 'Noto Sans Arabic', minWidth: '90px' }}>
                      {(wasteType === 'food' ? ['كجم', 'جرام', 'طبق', 'صندوق'] : ['لتر', 'متر مكعب', 'جالون']).map((u) => <option key={u} value={u}>{u}</option>)}
                    </select>
                  </div>
                </div>

                {/* Date & Time */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#8B9DB0', marginBottom: '8px' }}>التاريخ *</label>
                    <input type="date" value={formData.date} onChange={(e) => setFormData(p => ({ ...p, date: e.target.value }))} required
                      style={{ width: '100%', backgroundColor: '#0A1628', border: '1px solid #1E3A5F', borderRadius: '10px', padding: '12px 16px', color: 'white', fontSize: '14px', outline: 'none', fontFamily: 'Noto Sans Arabic' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: '#8B9DB0', marginBottom: '8px' }}>الوقت *</label>
                    <input type="time" value={formData.time} onChange={(e) => setFormData(p => ({ ...p, time: e.target.value }))} required
                      style={{ width: '100%', backgroundColor: '#0A1628', border: '1px solid #1E3A5F', borderRadius: '10px', padding: '12px 16px', color: 'white', fontSize: '14px', outline: 'none', fontFamily: 'Noto Sans Arabic' }} />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#8B9DB0', marginBottom: '8px' }}>ملاحظات (اختياري)</label>
                  <textarea value={formData.notes} onChange={(e) => setFormData(p => ({ ...p, notes: e.target.value }))} placeholder="أي تفاصيل إضافية مفيدة..."
                    style={{ width: '100%', backgroundColor: '#0A1628', border: '1px solid #1E3A5F', borderRadius: '10px', padding: '12px 16px', color: 'white', fontSize: '14px', outline: 'none', resize: 'vertical', minHeight: '80px', fontFamily: 'Noto Sans Arabic', textAlign: 'right' }} />
                </div>

                {/* Donate option (food only) */}
                {wasteType === 'food' && (
                  <label onClick={() => setFormData(p => ({ ...p, canDonate: !p.canDonate }))}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', backgroundColor: formData.canDonate ? 'rgba(0,200,150,0.1)' : 'rgba(30,58,95,0.2)', border: `1px solid ${formData.canDonate ? 'rgba(0,200,150,0.3)' : 'rgba(30,58,95,0.5)'}`, borderRadius: '10px', cursor: 'pointer' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '6px', border: `2px solid ${formData.canDonate ? '#00C896' : '#1E3A5F'}`, backgroundColor: formData.canDonate ? '#00C896' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {formData.canDonate && <span style={{ color: 'white', fontSize: '13px' }}>✓</span>}
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>♻️ هذا الطعام قابل للتبرع</div>
                      <div style={{ fontSize: '12px', color: '#8B9DB0', marginTop: '2px' }}>سنتواصل معك لتوجيهه لأقرب مركز رعاية</div>
                    </div>
                  </label>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button type="button" onClick={() => setStep(1)}
                style={{ padding: '14px 24px', borderRadius: '10px', border: '1px solid #1E3A5F', background: 'transparent', color: '#8B9DB0', fontSize: '14px', cursor: 'pointer', fontFamily: 'Noto Sans Arabic' }}>
                رجوع
              </button>
              <button type="submit"
                style={{ flex: 1, padding: '14px', borderRadius: '10px', border: 'none', background: 'linear-gradient(135deg, #00C896, #1E90FF)', color: 'white', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'Noto Sans Arabic' }}>
                تسجيل البلاغ ✓
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
