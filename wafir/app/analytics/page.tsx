'use client'

import Header from '@/components/Header'
import { monthlyComparison, aiInsights, facilities } from '@/lib/mockData'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { Bot, Award, AlertTriangle } from 'lucide-react'

const sortedByScore = [...facilities].sort((a, b) => b.score - a.score)
const top5 = sortedByScore.slice(0, 5)
const bottom5 = sortedByScore.slice(-5).reverse()

const kuwaitRegions = [
  { id: 'capital', label: 'العاصمة', x: 160, y: 140, waste: 32 },
  { id: 'hawalli', label: 'حولي', x: 200, y: 190, waste: 21 },
  { id: 'farwaniya', label: 'الفروانية', x: 120, y: 200, waste: 18 },
  { id: 'jahra', label: 'الجهراء', x: 60, y: 130, waste: 14 },
  { id: 'ahmadi', label: 'الأحمدي', x: 180, y: 320, waste: 11 },
  { id: 'mubarak', label: 'مبارك الكبير', x: 210, y: 240, waste: 4 },
]

function getHeatColor(waste: number): string {
  if (waste >= 30) return '#EF4444'
  if (waste >= 20) return '#F59E0B'
  if (waste >= 15) return '#F97316'
  if (waste >= 10) return '#3B82F6'
  return '#10B981'
}

export default function Analytics() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A1628' }}>
      <Header title="التحليلات المتقدمة" subtitle="مقارنة شاملة ورؤى ذكية لأداء المنشآت" />
      <div style={{ padding: '28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '20px', marginBottom: '24px' }}>
          <div className="glass-card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>📅 مقارنة شهرية — هدر المياه (لتر)</h3>
            <p style={{ fontSize: '12px', color: '#8B9DB0', marginBottom: '20px' }}>2025 مقارنة بـ 2024</p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={monthlyComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E3A5F" />
                <XAxis dataKey="month" tick={{ fill: '#8B9DB0', fontSize: 12 }} tickLine={false} />
                <YAxis tick={{ fill: '#8B9DB0', fontSize: 10 }} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#0D2137', border: '1px solid #1E3A5F', borderRadius: '8px', color: 'white', fontFamily: 'Noto Sans Arabic', fontSize: '13px' }} formatter={(v, name) => [`${Number(v).toLocaleString()} لتر`, name === 'thisYear' ? 'هذا العام' : 'العام الماضي']} />
                <Legend formatter={(value) => (value === 'thisYear' ? 'هذا العام 2025' : 'العام الماضي 2024')} wrapperStyle={{ fontFamily: 'Noto Sans Arabic', fontSize: '12px', color: '#8B9DB0' }} />
                <Bar dataKey="lastYear" fill="rgba(30,144,255,0.3)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="thisYear" fill="#00C896" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>🗺️ خريطة الهدر - الكويت</h3>
            <p style={{ fontSize: '12px', color: '#8B9DB0', marginBottom: '16px' }}>حسب المحافظة (نسبة%)</p>
            <div style={{ position: 'relative', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 300 380" width="100%" height="100%">
                {kuwaitRegions.map((region) => (
                  <g key={region.id}>
                    <circle cx={region.x} cy={region.y} r={region.waste * 1.6} fill={getHeatColor(region.waste)} opacity={0.3} />
                    <circle cx={region.x} cy={region.y} r={region.waste * 0.8} fill={getHeatColor(region.waste)} opacity={0.7} />
                    <text x={region.x} y={region.y - region.waste * 1.8} textAnchor="middle" fill="white" fontSize="11" fontFamily="Noto Sans Arabic">{region.label}</text>
                    <text x={region.x} y={region.y + 4} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Noto Sans Arabic">{region.waste}%</text>
                  </g>
                ))}
              </svg>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
              {[{ color: '#EF4444', label: 'مرتفع جداً' }, { color: '#F59E0B', label: 'مرتفع' }, { color: '#3B82F6', label: 'متوسط' }, { color: '#10B981', label: 'منخفض' }].map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: item.color }} />
                  <span style={{ fontSize: '11px', color: '#8B9DB0' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <Award size={20} color="#00C896" />
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'white' }}>أفضل 5 منشآت أداءً</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {top5.map((f, i) => (
                <div key={f.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', backgroundColor: 'rgba(0,200,150,0.05)', border: '1px solid rgba(0,200,150,0.15)', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: i === 0 ? '#F59E0B' : i === 1 ? '#9CA3AF' : i === 2 ? '#CD7F32' : 'rgba(0,200,150,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700', color: 'white' }}>{i + 1}</div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>{f.nameAr}</div>
                      <div style={{ fontSize: '11px', color: '#8B9DB0' }}>{f.area}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#00C896' }}>{f.score}</div>
                    <div style={{ fontSize: '10px', color: '#8B9DB0' }}>/ 10</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <AlertTriangle size={20} color="#EF4444" />
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'white' }}>منشآت تحتاج تحسيناً</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {bottom5.map((f, i) => (
                <div key={f.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', backgroundColor: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(239,68,68,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700', color: '#EF4444' }}>{i + 1}</div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>{f.nameAr}</div>
                      <div style={{ fontSize: '11px', color: '#8B9DB0' }}>{f.area}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#EF4444' }}>{f.score}</div>
                    <div style={{ fontSize: '10px', color: '#8B9DB0' }}>/ 10</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #00C896, #1E90FF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bot size={18} color="white" />
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'white' }}>رؤى الذكاء الاصطناعي</h3>
              <p style={{ fontSize: '11px', color: '#8B9DB0' }}>محدّثة تلقائياً كل ساعة</p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {aiInsights.map((insight, i) => (
              <div key={i} className="ai-bubble" style={{ padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ width: '28px', height: '28px', minWidth: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #00C896, #1E90FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>🤖</div>
                <p style={{ fontSize: '13px', color: '#CBD5E1', lineHeight: '1.6' }}>{insight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
