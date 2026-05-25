'use client'

import { Building2, MapPin, Phone, Mail, User, Star, TrendingUp, Award, Calendar, Edit3, CheckCircle2 } from 'lucide-react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

const scoreHistory = [
  { month: 'ديسمبر', score: 6.8 },
  { month: 'يناير', score: 7.1 },
  { month: 'فبراير', score: 7.4 },
  { month: 'مارس', score: 7.9 },
  { month: 'أبريل', score: 8.0 },
  { month: 'مايو', score: 8.2 },
]

const achievements = [
  { icon: '🌱', title: 'خفضت الهدر 20%', desc: 'تراجع مستمر لمدة شهرين', earned: true },
  { icon: '💧', title: 'توفير مائي ممتاز', desc: 'أقل من المعدل بـ 15%', earned: true },
  { icon: '♻️', title: '200 كجم فائض محوّل', desc: 'دعم مراكز الرعاية', earned: true },
  { icon: '🏆', title: 'أفضل 10% في الجهراء', desc: 'تصنيف إقليمي', earned: false },
]

const monthlyStats = [
  { label: 'مايو', water: 1420, food: 2670, score: 8.2 },
  { label: 'أبريل', water: 1580, food: 2890, score: 8.0 },
  { label: 'مارس', water: 1710, food: 3100, score: 7.9 },
]

export default function ProfilePage() {
  return (
    <div style={{ padding: '28px', backgroundColor: '#0A1628', minHeight: 'calc(100vh - 64px)' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>منشأتي</h1>
          <p style={{ fontSize: '13px', color: '#8B9DB0' }}>بيانات المنشأة وسجل الأداء البيئي</p>
        </div>
        <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '10px', background: 'rgba(0,200,150,0.1)', border: '1px solid rgba(0,200,150,0.3)', color: '#00C896', fontSize: '13px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Noto Sans Arabic' }}>
          <Edit3 size={15} />
          تعديل البيانات
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: '20px', alignItems: 'start' }}>

        {/* Left: Facility Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Main Info Card */}
          <div style={{ background: 'rgba(13,33,55,0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(30,58,95,0.6)', borderRadius: '16px', padding: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ width: '72px', height: '72px', borderRadius: '18px', background: 'linear-gradient(135deg, #00C896, #1E90FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', marginBottom: '14px' }}>
                🍽️
              </div>
              <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'white', marginBottom: '4px', textAlign: 'center' }}>مطعم البيت الكويتي</h2>
              <span style={{ fontSize: '12px', padding: '3px 12px', borderRadius: '20px', backgroundColor: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.3)' }}>نشط ✓</span>
            </div>

            {[
              { icon: <Building2 size={14} />, label: 'نوع المنشأة', value: 'مطعم' },
              { icon: <MapPin size={14} />, label: 'المنطقة', value: 'الجهراء' },
              { icon: <User size={14} />, label: 'المدير المسؤول', value: 'م. خالد العجمي' },
              { icon: <Phone size={14} />, label: 'رقم التواصل', value: '+965 9900 4412' },
              { icon: <Mail size={14} />, label: 'البريد الإلكتروني', value: 'info@albait.com.kw' },
              { icon: <Calendar size={14} />, label: 'تاريخ التسجيل', value: 'مارس 2025' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < 5 ? '1px solid rgba(30,58,95,0.3)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8B9DB0', fontSize: '12px' }}>
                  {row.icon}
                  {row.label}
                </div>
                <span style={{ fontSize: '12px', color: '#CBD5E1', fontWeight: '500' }}>{row.value}</span>
              </div>
            ))}
          </div>

          {/* Score Card */}
          <div style={{ background: 'linear-gradient(135deg, rgba(0,200,150,0.1), rgba(30,144,255,0.08))', border: '1px solid rgba(0,200,150,0.2)', borderRadius: '14px', padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '12px', color: '#8B9DB0', marginBottom: '8px' }}>نقاط الأثر البيئي الحالية</div>
            <div style={{ fontSize: '48px', fontWeight: '800', background: 'linear-gradient(135deg, #00C896, #1E90FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: '1' }}>8.2</div>
            <div style={{ fontSize: '13px', color: '#8B9DB0', marginTop: '4px', marginBottom: '14px' }}>من 10</div>
            <div style={{ backgroundColor: 'rgba(30,58,95,0.4)', borderRadius: '8px', overflow: 'hidden', height: '8px', marginBottom: '10px' }}>
              <div style={{ width: '82%', height: '100%', background: 'linear-gradient(90deg, #00C896, #1E90FF)', borderRadius: '8px' }} />
            </div>
            <div style={{ fontSize: '12px', color: '#10B981' }}>↑ أفضل من 71% من المنشآت المماثلة</div>
          </div>

          {/* Achievements */}
          <div style={{ background: 'rgba(13,33,55,0.6)', border: '1px solid rgba(30,58,95,0.6)', borderRadius: '14px', padding: '20px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'white', marginBottom: '14px' }}>🏅 الإنجازات</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {achievements.map((a, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', backgroundColor: a.earned ? 'rgba(0,200,150,0.06)' : 'rgba(30,58,95,0.2)', border: `1px solid ${a.earned ? 'rgba(0,200,150,0.2)' : 'rgba(30,58,95,0.3)'}`, borderRadius: '10px', opacity: a.earned ? 1 : 0.5 }}>
                  <span style={{ fontSize: '22px' }}>{a.icon}</span>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: a.earned ? 'white' : '#8B9DB0' }}>{a.title}</div>
                    <div style={{ fontSize: '11px', color: '#8B9DB0' }}>{a.desc}</div>
                  </div>
                  {a.earned && <CheckCircle2 size={14} color="#10B981" style={{ marginRight: 'auto' }} />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Charts & Stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Score History Chart */}
          <div style={{ background: 'rgba(13,33,55,0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(30,58,95,0.6)', borderRadius: '14px', padding: '22px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>📈 تطور نقاط الأثر البيئي</h3>
            <p style={{ fontSize: '11px', color: '#8B9DB0', marginBottom: '16px' }}>آخر 6 أشهر</p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={scoreHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E3A5F" />
                <XAxis dataKey="month" tick={{ fill: '#8B9DB0', fontSize: 11 }} tickLine={false} />
                <YAxis domain={[6, 10]} tick={{ fill: '#8B9DB0', fontSize: 10 }} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0D2137', border: '1px solid #1E3A5F', borderRadius: '8px', color: 'white', fontFamily: 'Noto Sans Arabic', fontSize: '12px' }}
                  formatter={(v) => [`${v} نقطة`, 'التقييم']}
                />
                <Line type="monotone" dataKey="score" stroke="#00C896" strokeWidth={2.5} dot={{ fill: '#00C896', r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Monthly Summary Table */}
          <div style={{ background: 'rgba(13,33,55,0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(30,58,95,0.6)', borderRadius: '14px', padding: '22px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'white', marginBottom: '16px' }}>📊 ملخص الأشهر الأخيرة</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {['الشهر', 'هدر المياه (لتر)', 'هدر الطعام (كجم)', 'نقاط التقييم'].map((h) => (
                      <th key={h} style={{ padding: '10px 14px', textAlign: 'right', fontSize: '12px', color: '#8B9DB0', borderBottom: '1px solid rgba(30,58,95,0.4)', fontWeight: '600' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {monthlyStats.map((row, i) => (
                    <tr key={i}>
                      <td style={{ padding: '12px 14px', fontSize: '13px', color: 'white', fontWeight: '600', borderBottom: i < monthlyStats.length - 1 ? '1px solid rgba(30,58,95,0.2)' : 'none' }}>{row.label}</td>
                      <td style={{ padding: '12px 14px', fontSize: '13px', color: '#CBD5E1', borderBottom: i < monthlyStats.length - 1 ? '1px solid rgba(30,58,95,0.2)' : 'none' }}>{row.water.toLocaleString()}</td>
                      <td style={{ padding: '12px 14px', fontSize: '13px', color: '#CBD5E1', borderBottom: i < monthlyStats.length - 1 ? '1px solid rgba(30,58,95,0.2)' : 'none' }}>{row.food.toLocaleString()}</td>
                      <td style={{ padding: '12px 14px', borderBottom: i < monthlyStats.length - 1 ? '1px solid rgba(30,58,95,0.2)' : 'none' }}>
                        <span style={{ fontSize: '13px', fontWeight: '700', color: row.score >= 8 ? '#10B981' : '#F59E0B' }}>{row.score}</span>
                        <span style={{ fontSize: '11px', color: '#8B9DB0' }}> / 10</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Stats Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
            {[
              { icon: '📋', label: 'تقارير مُرسلة', value: '47', sub: 'منذ التسجيل' },
              { icon: '♻️', label: 'فائض تم إنقاذه', value: '580 كجم', sub: 'مجموع الفائض' },
              { icon: '💡', label: 'توصيات مطبّقة', value: '12', sub: 'من 15 توصية' },
            ].map((stat, i) => (
              <div key={i} style={{ background: 'rgba(13,33,55,0.6)', border: '1px solid rgba(30,58,95,0.5)', borderRadius: '12px', padding: '18px', textAlign: 'center' }}>
                <div style={{ fontSize: '26px', marginBottom: '8px' }}>{stat.icon}</div>
                <div style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>{stat.value}</div>
                <div style={{ fontSize: '12px', color: '#8B9DB0', marginBottom: '2px' }}>{stat.label}</div>
                <div style={{ fontSize: '11px', color: '#4B6280' }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
