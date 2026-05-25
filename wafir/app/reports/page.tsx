'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import { facilities, aiInsights } from '@/lib/mockData'
import { FileText, Download, Bot, Calendar, Building2 } from 'lucide-react'

export default function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState('this-month')
  const [isGenerating, setIsGenerating] = useState(false)
  const [reportGenerated, setReportGenerated] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => { setIsGenerating(false); setReportGenerated(true) }, 2000)
  }

  const periodLabel: Record<string, string> = {
    'this-week': 'هذا الأسبوع',
    'this-month': 'هذا الشهر (مايو 2025)',
    'last-month': 'الشهر الماضي (أبريل 2025)',
    'last-quarter': 'الربع الأول 2025',
    'this-year': 'عام 2025 كامل',
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A1628' }}>
      <Header title="التقارير" subtitle="إنشاء وتحميل التقارير التحليلية الشاملة" />
      <div style={{ padding: '28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <Calendar size={18} color="#00C896" />
                <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'white' }}>الفترة الزمنية</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[{ value: 'this-week', label: 'هذا الأسبوع' }, { value: 'this-month', label: 'هذا الشهر' }, { value: 'last-month', label: 'الشهر الماضي' }, { value: 'last-quarter', label: 'الربع الأول 2025' }, { value: 'this-year', label: 'عام 2025 كامل' }].map((p) => (
                  <label key={p.value} onClick={() => setSelectedPeriod(p.value)} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', backgroundColor: selectedPeriod === p.value ? 'rgba(0,200,150,0.1)' : 'rgba(30,58,95,0.2)', border: `1px solid ${selectedPeriod === p.value ? 'rgba(0,200,150,0.3)' : 'rgba(30,58,95,0.5)'}`, borderRadius: '10px', cursor: 'pointer' }}>
                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: `2px solid ${selectedPeriod === p.value ? '#00C896' : '#1E3A5F'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {selectedPeriod === p.value && <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00C896' }} />}
                    </div>
                    <span style={{ fontSize: '13px', color: selectedPeriod === p.value ? 'white' : '#8B9DB0' }}>{p.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <Building2 size={18} color="#1E90FF" />
                <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'white' }}>المنشآت المشمولة</h3>
              </div>
              <select style={{ width: '100%', backgroundColor: '#0A1628', border: '1px solid #1E3A5F', borderRadius: '10px', padding: '10px 16px', color: 'white', fontSize: '13px', cursor: 'pointer', outline: 'none', marginBottom: '12px', fontFamily: 'Noto Sans Arabic' }}>
                <option>جميع المنشآت (47)</option>
                <option>المطاعم فقط</option>
                <option>الفنادق فقط</option>
                <option>المستشفيات فقط</option>
              </select>
              <p style={{ fontSize: '12px', color: '#8B9DB0' }}>سيشمل التقرير بيانات 47 منشأة مسجلة</p>
            </div>

            <button onClick={handleGenerate} disabled={isGenerating} style={{ width: '100%', padding: '16px', borderRadius: '12px', border: 'none', background: isGenerating ? 'rgba(0,200,150,0.3)' : 'linear-gradient(135deg, #00C896, #1E90FF)', color: 'white', fontSize: '15px', fontWeight: '700', cursor: isGenerating ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontFamily: 'Noto Sans Arabic' }}>
              {isGenerating ? (
                <><div style={{ width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />جاري الإنشاء...</>
              ) : (
                <><FileText size={18} />توليد التقرير</>
              )}
            </button>

            {reportGenerated && (
              <button style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid rgba(0,200,150,0.3)', background: 'rgba(0,200,150,0.1)', color: '#00C896', fontSize: '14px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontFamily: 'Noto Sans Arabic' }}>
                <Download size={16} />تحميل PDF
              </button>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {!reportGenerated ? (
              <div className="glass-card" style={{ padding: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', textAlign: 'center' }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>📄</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '10px' }}>جاهز لإنشاء التقرير</h3>
                <p style={{ fontSize: '14px', color: '#8B9DB0', maxWidth: '300px', lineHeight: '1.7' }}>حدّد الفترة الزمنية والمنشآت من القائمة الجانبية ثم اضغط "توليد التقرير"</p>
              </div>
            ) : (
              <>
                <div className="glass-card" style={{ padding: '32px' }}>
                  <div style={{ borderBottom: '2px solid #00C896', paddingBottom: '20px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'linear-gradient(135deg, #00C896, #1E90FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>💧</div>
                      <div>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: 'white' }}>وفير | Wafir</div>
                        <div style={{ fontSize: '11px', color: '#8B9DB0' }}>نظام مراقبة هدر الطعام والمياه</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '13px', color: '#8B9DB0' }}>التقرير الشهري</div>
                      <div style={{ fontSize: '15px', fontWeight: '700', color: 'white' }}>{periodLabel[selectedPeriod]}</div>
                      <div style={{ fontSize: '12px', color: '#8B9DB0', marginTop: '4px' }}>تاريخ الإنشاء: 25 مايو 2025</div>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                    {[{ label: 'إجمالي هدر المياه', value: '71,350 لتر', change: '↓ 21.5%' }, { label: 'إجمالي هدر الطعام', value: '8,560 كجم', change: '↓ 15.2%' }, { label: 'المنشآت المراقبة', value: '47 منشأة', change: '+ 3' }].map((stat) => (
                      <div key={stat.label} style={{ backgroundColor: 'rgba(30,58,95,0.3)', border: '1px solid #1E3A5F', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: 'white' }}>{stat.value}</div>
                        <div style={{ fontSize: '12px', color: '#8B9DB0', marginTop: '4px' }}>{stat.label}</div>
                        <div style={{ fontSize: '12px', color: '#10B981', marginTop: '6px' }}>{stat.change}</div>
                      </div>
                    ))}
                  </div>
                  <h4 style={{ fontSize: '14px', fontWeight: '700', color: 'white', marginBottom: '14px' }}>🏆 أبرز المنشآت المُلتزمة</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[...facilities].sort((a, b) => b.score - a.score).slice(0, 4).map((f) => (
                      <div key={f.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', backgroundColor: 'rgba(0,200,150,0.05)', border: '1px solid rgba(0,200,150,0.1)', borderRadius: '8px' }}>
                        <div>
                          <span style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>{f.nameAr}</span>
                          <span style={{ fontSize: '11px', color: '#8B9DB0', marginRight: '10px' }}>{f.area}</span>
                        </div>
                        <span style={{ fontSize: '14px', fontWeight: '700', color: '#00C896' }}>{f.score} / 10</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass-card" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #00C896, #1E90FF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Bot size={18} color="white" /></div>
                    <div>
                      <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'white' }}>التوصيات الذكية</h3>
                      <p style={{ fontSize: '11px', color: '#8B9DB0' }}>مُولّدة بواسطة وفير AI</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {aiInsights.slice(0, 3).map((insight, i) => (
                      <div key={i} className="ai-bubble" style={{ padding: '14px 18px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <span style={{ fontSize: '18px', flexShrink: 0 }}>💡</span>
                        <p style={{ fontSize: '13px', color: '#CBD5E1', lineHeight: '1.7' }}>{insight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
