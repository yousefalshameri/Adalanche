'use client'

import Link from 'next/link'
import { TrendingDown, TrendingUp, Droplets, Utensils, Star, AlertTriangle, CheckCircle2, Clock, Plus } from 'lucide-react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar
} from 'recharts'

const myWaterData = [
  { day: '19 مايو', amount: 52 },
  { day: '20 مايو', amount: 48 },
  { day: '21 مايو', amount: 55 },
  { day: '22 مايو', amount: 44 },
  { day: '23 مايو', amount: 50 },
  { day: '24 مايو', amount: 46 },
  { day: '25 مايو', amount: 42 },
]

const myFoodData = [
  { meal: 'فطور', amount: 12 },
  { meal: 'غداء', amount: 38 },
  { meal: 'عشاء', amount: 29 },
  { meal: 'وجبات جانبية', amount: 10 },
]

const recentActivity = [
  { type: 'food', amount: '45 كجم', time: 'اليوم 14:32', status: 'completed', label: 'تم توجيه الفائض ✅' },
  { type: 'water', amount: '120 لتر', time: 'اليوم 11:20', status: 'processing', label: 'قيد المعالجة ⏳' },
  { type: 'food', amount: '28 كجم', time: 'أمس 16:45', status: 'completed', label: 'تم توجيه الفائض ✅' },
  { type: 'water', amount: '95 لتر', time: 'أمس 09:10', status: 'completed', label: 'تم التسجيل ✅' },
]

const aiTips = [
  'وجبة الغداء تمثّل 43% من هدر الطعام لديك — فكّر في تعديل كميات التحضير بناءً على الإقبال المتوقع.',
  'هدرك المائي اليوم أقل بـ 19% عن المعدل الأسبوعي — استمر على هذا النهج الممتاز!',
]

export default function UserDashboard() {
  return (
    <div style={{ padding: '28px', backgroundColor: '#0A1628', minHeight: 'calc(100vh - 64px)' }}>

      {/* Welcome Banner */}
      <div style={{ background: 'linear-gradient(135deg, rgba(0,200,150,0.15), rgba(30,144,255,0.1))', border: '1px solid rgba(0,200,150,0.25)', borderRadius: '16px', padding: '24px 28px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: '700', color: 'white', marginBottom: '6px' }}>
            أهلاً، مطعم البيت الكويتي 👋
          </h1>
          <p style={{ fontSize: '14px', color: '#8B9DB0' }}>
            آخر تحديث: اليوم 14:45 · منطقة الجهراء
          </p>
        </div>
        <Link href="/user/submit" style={{ padding: '12px 24px', borderRadius: '10px', background: 'linear-gradient(135deg, #00C896, #1E90FF)', color: 'white', fontSize: '14px', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={16} />
          بلّغ عن هدر جديد
        </Link>
      </div>

      {/* KPI Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
        {[
          { icon: '💧', label: 'هدر المياه اليوم', value: '42 لتر', change: '↓ 19%', positive: true, gradient: 'rgba(30,144,255,0.15)', border: 'rgba(30,144,255,0.25)' },
          { icon: '🍱', label: 'هدر الطعام اليوم', value: '89 كجم', change: '↓ 8%', positive: true, gradient: 'rgba(0,200,150,0.15)', border: 'rgba(0,200,150,0.25)' },
          { icon: '⭐', label: 'نقاط الأثر البيئي', value: '8.2 / 10', change: '↑ 0.2', positive: true, gradient: 'rgba(245,158,11,0.15)', border: 'rgba(245,158,11,0.25)' },
          { icon: '♻️', label: 'فائض تم إنقاذه', value: '210 كجم', change: 'هذا الشهر', positive: true, gradient: 'rgba(139,92,246,0.15)', border: 'rgba(139,92,246,0.25)' },
        ].map((kpi, i) => (
          <div key={i} style={{ background: kpi.gradient, border: `1px solid ${kpi.border}`, borderRadius: '14px', padding: '20px', backdropFilter: 'blur(10px)' }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>{kpi.icon}</div>
            <div style={{ fontSize: '22px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>{kpi.value}</div>
            <div style={{ fontSize: '12px', color: '#8B9DB0', marginBottom: '8px' }}>{kpi.label}</div>
            <div style={{ fontSize: '12px', fontWeight: '600', color: kpi.positive ? '#10B981' : '#EF4444' }}>{kpi.change}</div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
        <div style={{ background: 'rgba(13,33,55,0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(30,58,95,0.6)', borderRadius: '14px', padding: '22px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>💧 هدر المياه — آخر 7 أيام</h3>
          <p style={{ fontSize: '11px', color: '#8B9DB0', marginBottom: '16px' }}>باللتر يومياً</p>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={myWaterData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E3A5F" />
              <XAxis dataKey="day" tick={{ fill: '#8B9DB0', fontSize: 10 }} tickLine={false} interval={1} />
              <YAxis tick={{ fill: '#8B9DB0', fontSize: 10 }} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0D2137', border: '1px solid #1E3A5F', borderRadius: '8px', color: 'white', fontFamily: 'Noto Sans Arabic', fontSize: '12px' }} formatter={(v) => [`${v} لتر`, 'الهدر']} />
              <Line type="monotone" dataKey="amount" stroke="#1E90FF" strokeWidth={2.5} dot={{ fill: '#1E90FF', r: 3 }} activeDot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={{ background: 'rgba(13,33,55,0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(30,58,95,0.6)', borderRadius: '14px', padding: '22px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>🍱 هدر الطعام — حسب الوجبة</h3>
          <p style={{ fontSize: '11px', color: '#8B9DB0', marginBottom: '16px' }}>بالكيلوجرام اليوم</p>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={myFoodData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E3A5F" />
              <XAxis dataKey="meal" tick={{ fill: '#8B9DB0', fontSize: 11 }} tickLine={false} />
              <YAxis tick={{ fill: '#8B9DB0', fontSize: 10 }} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0D2137', border: '1px solid #1E3A5F', borderRadius: '8px', color: 'white', fontFamily: 'Noto Sans Arabic', fontSize: '12px' }} formatter={(v) => [`${v} كجم`, 'الهدر']} />
              <Bar dataKey="amount" fill="#00C896" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Activity + AI Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '20px' }}>
        {/* Recent Activity */}
        <div style={{ background: 'rgba(13,33,55,0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(30,58,95,0.6)', borderRadius: '14px', padding: '22px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'white' }}>📋 آخر النشاطات</h3>
            <Link href="/user/submit" style={{ fontSize: '12px', color: '#00C896', background: 'rgba(0,200,150,0.1)', border: '1px solid rgba(0,200,150,0.3)', borderRadius: '8px', padding: '5px 12px', textDecoration: 'none' }}>+ إضافة</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {recentActivity.map((act, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', backgroundColor: 'rgba(30,58,95,0.2)', border: '1px solid rgba(30,58,95,0.4)', borderRadius: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '20px' }}>{act.type === 'water' ? '💧' : '🍱'}</span>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>{act.amount}</div>
                    <div style={{ fontSize: '11px', color: '#8B9DB0' }}>{act.time}</div>
                  </div>
                </div>
                <span style={{
                  fontSize: '12px', padding: '4px 10px', borderRadius: '20px',
                  backgroundColor: act.status === 'completed' ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
                  color: act.status === 'completed' ? '#10B981' : '#F59E0B',
                  border: `1px solid ${act.status === 'completed' ? 'rgba(16,185,129,0.3)' : 'rgba(245,158,11,0.3)'}`,
                }}>
                  {act.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Tips */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Score Card */}
          <div style={{ background: 'linear-gradient(135deg, rgba(0,200,150,0.1), rgba(30,144,255,0.08))', border: '1px solid rgba(0,200,150,0.2)', borderRadius: '14px', padding: '22px', textAlign: 'center' }}>
            <div style={{ fontSize: '13px', color: '#8B9DB0', marginBottom: '8px' }}>نقاط الأثر البيئي</div>
            <div style={{ fontSize: '52px', fontWeight: '800', background: 'linear-gradient(135deg, #00C896, #1E90FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: '1' }}>8.2</div>
            <div style={{ fontSize: '14px', color: '#8B9DB0', marginTop: '6px' }}>من 10</div>
            <div style={{ marginTop: '16px', backgroundColor: 'rgba(30,58,95,0.4)', borderRadius: '8px', overflow: 'hidden', height: '8px' }}>
              <div style={{ width: '82%', height: '100%', background: 'linear-gradient(90deg, #00C896, #1E90FF)', borderRadius: '8px' }} />
            </div>
            <div style={{ fontSize: '12px', color: '#10B981', marginTop: '10px' }}>↑ أفضل من 71% من المنشآت المماثلة</div>
          </div>

          {/* AI Tips */}
          <div style={{ background: 'rgba(13,33,55,0.6)', border: '1px solid rgba(30,58,95,0.6)', borderRadius: '14px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span style={{ fontSize: '18px' }}>🤖</span>
              <span style={{ fontSize: '14px', fontWeight: '700', color: 'white' }}>توصيات وفير AI</span>
            </div>
            {aiTips.map((tip, i) => (
              <div key={i} style={{ padding: '12px 14px', background: 'linear-gradient(135deg, rgba(0,200,150,0.08), rgba(30,144,255,0.06))', border: '1px solid rgba(0,200,150,0.15)', borderRadius: '10px 10px 10px 3px', marginBottom: i < aiTips.length - 1 ? '10px' : 0 }}>
                <p style={{ fontSize: '12px', color: '#CBD5E1', lineHeight: '1.7' }}>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
