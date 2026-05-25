'use client'

import Link from 'next/link'
import { Droplets, ArrowLeft, CheckCircle2, BarChart3, Building2, Leaf, Award, ChevronDown } from 'lucide-react'

const stats = [
  { value: '47+', label: 'منشأة مسجلة' },
  { value: '4.2 طن', label: 'طعام تم إنقاذه هذا الشهر' },
  { value: '23%', label: 'انخفاض في الهدر' },
  { value: '12', label: 'مركز رعاية مستفيد' },
]

const features = [
  {
    icon: '📊',
    title: 'تحليلات فورية',
    desc: 'تقارير لحظية عن هدر الطعام والمياه مع مقارنات شهرية وتوصيات ذكية',
  },
  {
    icon: '🤖',
    title: 'ذكاء اصطناعي',
    desc: 'رؤى تلقائية تحلل أنماط الهدر وتقترح حلول قابلة للتطبيق فوراً',
  },
  {
    icon: '♻️',
    title: 'توجيه الفائض',
    desc: 'ربط تلقائي بمراكز الرعاية والمزارع لتحويل الفائض بدلاً من إهداره',
  },
  {
    icon: '📄',
    title: 'تقارير PDF',
    desc: 'تقارير احترافية جاهزة للمشاركة مع الإدارة والجهات الرقابية',
  },
  {
    icon: '🏆',
    title: 'نقاط الأثر البيئي',
    desc: 'نظام تقييم شفاف يحفز المنشآت على تحسين أدائها البيئي باستمرار',
  },
  {
    icon: '🔔',
    title: 'تنبيهات ذكية',
    desc: 'إشعارات فورية عند تجاوز الحدود المسموحة قبل أن تتفاقم المشكلة',
  },
]

const steps = [
  { num: '01', title: 'سجّل منشأتك', desc: 'أدخل بيانات منشأتك في دقيقتين ويبدأ النظام بالعمل فوراً' },
  { num: '02', title: 'أدخل بيانات الهدر', desc: 'سجّل كميات الهدر اليومية بسهولة من الموبايل أو الكمبيوتر' },
  { num: '03', title: 'احصل على رؤى AI', desc: 'يحلل النظام بياناتك ويعطيك توصيات مخصصة لتقليل الهدر' },
  { num: '04', title: 'حسّن أداءك', desc: 'تابع تقدمك وارفع نقاط الأثر البيئي لمنشأتك شهراً بشهر' },
]

export default function Landing() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A1628', direction: 'rtl', fontFamily: "'Noto Sans Arabic', sans-serif" }}>

      {/* Navbar */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: 'rgba(10,22,40,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(30,58,95,0.5)', padding: '16px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #00C896, #1E90FF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Droplets size={20} color="white" />
          </div>
          <div>
            <span style={{ fontSize: '18px', fontWeight: '700', color: 'white' }}>وفير</span>
            <span style={{ fontSize: '12px', color: '#00C896', marginRight: '6px' }}>| Wafir</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {['المميزات', 'كيف يعمل', 'شركاؤنا'].map((item) => (
            <a key={item} href="#" style={{ fontSize: '14px', color: '#8B9DB0', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#8B9DB0')}>
              {item}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <Link href="/user" style={{ padding: '10px 20px', borderRadius: '10px', border: '1px solid #1E3A5F', color: '#8B9DB0', fontSize: '14px', textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#00C896'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#1E3A5F'; (e.currentTarget as HTMLElement).style.color = '#8B9DB0'; }}>
            تسجيل الدخول
          </Link>
          <Link href="/register" style={{ padding: '10px 20px', borderRadius: '10px', background: 'linear-gradient(135deg, #00C896, #1E90FF)', color: 'white', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
            ابدأ مجاناً
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 48px 80px', position: 'relative', overflow: 'hidden' }}>
        {/* Background glow */}
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,200,150,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '820px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(0,200,150,0.1)', border: '1px solid rgba(0,200,150,0.3)', borderRadius: '20px', padding: '6px 16px', marginBottom: '28px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00C896', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '13px', color: '#00C896', fontWeight: '600' }}>برنامج KFAS × IE University — الكويت 2025</span>
          </div>

          <h1 style={{ fontSize: '58px', fontWeight: '800', color: 'white', lineHeight: '1.2', marginBottom: '24px' }}>
            نحوّل بيانات الهدر
            <br />
            <span style={{ background: 'linear-gradient(135deg, #00C896, #1E90FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              إلى قرارات ذكية
            </span>
          </h1>

          <p style={{ fontSize: '18px', color: '#8B9DB0', lineHeight: '1.8', marginBottom: '40px', maxWidth: '580px', margin: '0 auto 40px' }}>
            منصة وفير تساعد المطاعم والفنادق والمستشفيات في الكويت على قياس ومتابعة هدر الطعام والمياه — وتحويله إلى فرصة استدامة حقيقية.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '60px' }}>
            <Link href="/register" style={{ padding: '16px 36px', borderRadius: '12px', background: 'linear-gradient(135deg, #00C896, #1E90FF)', color: 'white', fontSize: '16px', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
              سجّل منشأتك الآن
              <ArrowLeft size={18} />
            </Link>
            <Link href="/user" style={{ padding: '16px 36px', borderRadius: '12px', border: '1px solid #1E3A5F', color: 'white', fontSize: '16px', fontWeight: '600', textDecoration: 'none', backgroundColor: 'rgba(30,58,95,0.3)' }}>
              شاهد النظام
            </Link>
          </div>

          {/* Stats Bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: '#1E3A5F', borderRadius: '16px', overflow: 'hidden', border: '1px solid #1E3A5F' }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(13,33,55,0.8)', padding: '24px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: '800', color: 'white', marginBottom: '4px' }}>{stat.value}</div>
                <div style={{ fontSize: '12px', color: '#8B9DB0' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 48px', backgroundColor: 'rgba(13,33,55,0.3)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: '38px', fontWeight: '800', color: 'white', marginBottom: '14px' }}>كل ما تحتاجه في مكان واحد</h2>
            <p style={{ fontSize: '16px', color: '#8B9DB0' }}>منظومة متكاملة لمراقبة الهدر وتحسين الأداء البيئي</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {features.map((f, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(13,33,55,0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(30,58,95,0.6)', borderRadius: '16px', padding: '28px', transition: 'all 0.3s', cursor: 'pointer' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,200,150,0.3)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,58,95,0.6)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: 'white', marginBottom: '10px' }}>{f.title}</h3>
                <p style={{ fontSize: '14px', color: '#8B9DB0', lineHeight: '1.7' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: '38px', fontWeight: '800', color: 'white', marginBottom: '14px' }}>كيف يعمل وفير؟</h2>
            <p style={{ fontSize: '16px', color: '#8B9DB0' }}>أربع خطوات بسيطة لتبدأ رحلة الاستدامة</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '20px', padding: '28px', backgroundColor: 'rgba(13,33,55,0.4)', border: '1px solid rgba(30,58,95,0.5)', borderRadius: '16px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '32px', fontWeight: '800', background: 'linear-gradient(135deg, #00C896, #1E90FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: '1', flexShrink: 0 }}>{step.num}</div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>{step.title}</h3>
                  <p style={{ fontSize: '14px', color: '#8B9DB0', lineHeight: '1.7' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', backgroundColor: 'rgba(0,200,150,0.05)', border: '1px solid rgba(0,200,150,0.2)', borderRadius: '24px', padding: '60px 40px' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🌿</div>
          <h2 style={{ fontSize: '34px', fontWeight: '800', color: 'white', marginBottom: '14px' }}>انضم لشبكة وفير اليوم</h2>
          <p style={{ fontSize: '16px', color: '#8B9DB0', lineHeight: '1.8', marginBottom: '36px' }}>
            أكثر من 47 منشأة في الكويت تستخدم وفير لتقليل هدرها وتحسين أثرها البيئي.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
            <Link href="/register" style={{ padding: '14px 32px', borderRadius: '12px', background: 'linear-gradient(135deg, #00C896, #1E90FF)', color: 'white', fontSize: '15px', fontWeight: '700', textDecoration: 'none' }}>
              سجّل منشأتك مجاناً
            </Link>
            <Link href="/user" style={{ padding: '14px 32px', borderRadius: '12px', border: '1px solid rgba(0,200,150,0.3)', color: '#00C896', fontSize: '15px', fontWeight: '600', textDecoration: 'none' }}>
              دخول المنشآت
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #1E3A5F', padding: '32px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Droplets size={18} color="#00C896" />
          <span style={{ fontSize: '14px', color: '#8B9DB0' }}>وفير | Wafir — KFAS × IE University · الكويت 2025</span>
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['سياسة الخصوصية', 'الشروط والأحكام', 'تواصل معنا'].map((item) => (
            <a key={item} href="#" style={{ fontSize: '13px', color: '#8B9DB0', textDecoration: 'none' }}>{item}</a>
          ))}
        </div>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}
