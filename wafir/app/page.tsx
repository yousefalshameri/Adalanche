'use client'

import Header from '@/components/Header'
import KPICard from '@/components/KPICard'
import { recentReports, waterWasteData, foodWasteByType, surplusDistribution } from '@/lib/mockData'
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

const statusConfig = {
  completed: { icon: '✅', label: 'تم التوجيه', color: '#10B981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.3)' },
  processing: { icon: '⏳', label: 'قيد المعالجة', color: '#F59E0B', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.3)' },
  critical: { icon: '🔴', label: 'تجاوز الحد', color: '#EF4444', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.3)' },
}

export default function Dashboard() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A1628' }}>
      <Header title="لوحة التحكم" subtitle="مرحباً، محمد — آخر تحديث: اليوم 14:45" />
      <div style={{ padding: '28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '28px' }}>
          <KPICard title="إجمالي هدر المياه اليوم" value="2,847 لتر" change="↓ 12% من أمس" changeType="down" changePositive={true} icon="💧" gradient="blue" subtitle="المعدل الطبيعي: 3,200 لتر" />
          <KPICard title="إجمالي هدر الطعام اليوم" value="340 كجم" change="↓ 8% من أمس" changeType="down" changePositive={true} icon="🍱" gradient="green" subtitle="تم توجيه 210 كجم للمحتاجين" />
          <KPICard title="المنشآت المسجلة" value="47 منشأة" change="+ 3 هذا الشهر" changeType="up" changePositive={true} icon="🏢" gradient="orange" subtitle="32 نشطة · 10 تنبيه · 5 حرجة" />
          <KPICard title="نقاط الأثر البيئي" value="8.4 / 10" change="↑ 0.3" changeType="up" changePositive={true} icon="📊" gradient="purple" subtitle="تحسّن مستمر للشهر الثالث" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '28px' }}>
          <div className="glass-card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>💧 هدر المياه — آخر 25 يوم</h3>
            <p style={{ fontSize: '12px', color: '#8B9DB0', marginBottom: '20px' }}>باللتر يومياً</p>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={waterWasteData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E3A5F" />
                <XAxis dataKey="day" tick={{ fill: '#8B9DB0', fontSize: 10 }} tickLine={false} interval={4} />
                <YAxis tick={{ fill: '#8B9DB0', fontSize: 10 }} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#0D2137', border: '1px solid #1E3A5F', borderRadius: '8px', color: 'white', fontFamily: 'Noto Sans Arabic', fontSize: '13px' }} formatter={(v) => [`${v} لتر`, 'الهدر']} />
                <Line type="monotone" dataKey="amount" stroke="#1E90FF" strokeWidth={2.5} dot={false} activeDot={{ r: 5, fill: '#1E90FF' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>🍱 هدر الطعام حسب نوع المنشأة</h3>
            <p style={{ fontSize: '12px', color: '#8B9DB0', marginBottom: '20px' }}>بالكيلوجرام شهرياً</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={foodWasteByType}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E3A5F" />
                <XAxis dataKey="type" tick={{ fill: '#8B9DB0', fontSize: 11 }} tickLine={false} />
                <YAxis tick={{ fill: '#8B9DB0', fontSize: 10 }} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#0D2137', border: '1px solid #1E3A5F', borderRadius: '8px', color: 'white', fontFamily: 'Noto Sans Arabic', fontSize: '13px' }} formatter={(v) => [`${v} كجم`, 'الهدر']} />
                <Bar dataKey="amount" fill="#00C896" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: '20px', marginBottom: '28px' }}>
          <div className="glass-card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>♻️ توزيع الفائض الغذائي</h3>
            <p style={{ fontSize: '12px', color: '#8B9DB0', marginBottom: '12px' }}>هذا الشهر</p>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={surplusDistribution} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={3} dataKey="value">
                  {surplusDistribution.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#0D2137', border: '1px solid #1E3A5F', borderRadius: '8px', color: 'white', fontFamily: 'Noto Sans Arabic', fontSize: '12px' }} formatter={(v) => [`${v}%`, '']} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
              {surplusDistribution.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: item.color }} />
                    <span style={{ fontSize: '12px', color: '#8B9DB0' }}>{item.name}</span>
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'white' }}>📋 آخر البلاغات</h3>
              <button style={{ fontSize: '12px', color: '#00C896', background: 'rgba(0,200,150,0.1)', border: '1px solid rgba(0,200,150,0.3)', borderRadius: '8px', padding: '6px 14px', cursor: 'pointer' }}>عرض الكل</button>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1E3A5F' }}>
                    {['المنشأة', 'النوع', 'الكمية', 'الوقت', 'الحالة'].map((h) => (
                      <th key={h} style={{ textAlign: 'right', padding: '10px 12px', fontSize: '12px', color: '#8B9DB0', fontWeight: '600' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recentReports.map((report) => {
                    const cfg = statusConfig[report.status as keyof typeof statusConfig]
                    return (
                      <tr key={report.id} style={{ borderBottom: '1px solid rgba(30,58,95,0.4)', transition: 'background 0.2s' }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(30,58,95,0.3)')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}>
                        <td style={{ padding: '12px', fontSize: '13px', color: 'white', fontWeight: '500' }}>{report.facility}</td>
                        <td style={{ padding: '12px' }}>
                          <span style={{ fontSize: '12px', padding: '3px 10px', borderRadius: '20px', backgroundColor: report.type === 'مياه' ? 'rgba(30,144,255,0.1)' : 'rgba(0,200,150,0.1)', color: report.type === 'مياه' ? '#1E90FF' : '#00C896', border: `1px solid ${report.type === 'مياه' ? 'rgba(30,144,255,0.3)' : 'rgba(0,200,150,0.3)'}` }}>
                            {report.type === 'مياه' ? '💧' : '🍱'} {report.type}
                          </span>
                        </td>
                        <td style={{ padding: '12px', fontSize: '13px', color: '#8B9DB0' }}>{report.amount}</td>
                        <td style={{ padding: '12px', fontSize: '13px', color: '#8B9DB0' }}>{report.time}</td>
                        <td style={{ padding: '12px' }}>
                          <span style={{ fontSize: '12px', padding: '3px 10px', borderRadius: '20px', backgroundColor: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}` }}>
                            {cfg.icon} {cfg.label}
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
