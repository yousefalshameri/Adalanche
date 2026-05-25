export interface Facility {
  id: string
  name: string
  nameAr: string
  type: 'restaurant' | 'hotel' | 'hospital' | 'school' | 'mall' | 'government'
  area: string
  waterWaste: number
  foodWaste: number
  status: 'active' | 'warning' | 'critical'
  score: number
  phone: string
  manager: string
}

export const facilities: Facility[] = [
  { id: '1', name: 'Al Bait Al Kuwaiti Restaurant', nameAr: 'مطعم البيت الكويتي', type: 'restaurant', area: 'الجهراء', waterWaste: 1200, foodWaste: 89, status: 'active', score: 8.2, phone: '+965 2233 4455', manager: 'أحمد الرشيدي' },
  { id: '2', name: 'Marriott Kuwait', nameAr: 'فندق ماريوت الكويت', type: 'hotel', area: 'العاصمة', waterWaste: 4500, foodWaste: 320, status: 'warning', score: 6.1, phone: '+965 2246 5000', manager: 'خالد الصانع' },
  { id: '3', name: 'Jahra Hospital', nameAr: 'مستشفى الجهراء', type: 'hospital', area: 'الجهراء', waterWaste: 8900, foodWaste: 145, status: 'critical', score: 4.8, phone: '+965 2454 7700', manager: 'د. منى العجمي' },
  { id: '4', name: 'Avenues Mall', nameAr: 'الأفنيوز مول', type: 'mall', area: 'الري', waterWaste: 12000, foodWaste: 560, status: 'critical', score: 3.9, phone: '+965 2259 7000', manager: 'فيصل المطيري' },
  { id: '5', name: 'Al Salam School', nameAr: 'مدرسة السلام', type: 'school', area: 'حولي', waterWaste: 680, foodWaste: 42, status: 'active', score: 9.1, phone: '+965 2262 3311', manager: 'سلمى العنزي' },
  { id: '6', name: 'Sheraton Kuwait', nameAr: 'فندق شيراتون الكويت', type: 'hotel', area: 'العاصمة', waterWaste: 5200, foodWaste: 410, status: 'warning', score: 5.7, phone: '+965 2242 2055', manager: 'يوسف الحربي' },
  { id: '7', name: 'Salmiya Cooperative', nameAr: 'جمعية السالمية التعاونية', type: 'government', area: 'السالمية', waterWaste: 900, foodWaste: 210, status: 'active', score: 7.8, phone: '+965 2572 1100', manager: 'نورة الكندري' },
  { id: '8', name: 'Farwaniya Hospital', nameAr: 'مستشفى الفروانية', type: 'hospital', area: 'الفروانية', waterWaste: 7800, foodWaste: 198, status: 'warning', score: 5.2, phone: '+965 2477 4900', manager: 'د. طارق البلوشي' },
  { id: '9', name: 'Slider Station', nameAr: 'مطعم سلايدر ستيشن', type: 'restaurant', area: 'مبارك الكبير', waterWaste: 480, foodWaste: 31, status: 'active', score: 9.4, phone: '+965 2225 8899', manager: 'محمد الدوسري' },
  { id: '10', name: 'Ibn Khaldoun School', nameAr: 'مدرسة ابن خلدون', type: 'school', area: 'الأحمدي', waterWaste: 720, foodWaste: 55, status: 'active', score: 8.7, phone: '+965 2398 4422', manager: 'علي النهاش' },
  { id: '11', name: 'Kuwait International Hotel', nameAr: 'فندق الكويت الدولي', type: 'hotel', area: 'العاصمة', waterWaste: 3800, foodWaste: 275, status: 'active', score: 7.3, phone: '+965 2252 6000', manager: 'ريم الصالح' },
  { id: '12', name: 'Adan Hospital', nameAr: 'مستشفى عدان', type: 'hospital', area: 'الأحمدي', waterWaste: 6200, foodWaste: 112, status: 'warning', score: 6.4, phone: '+965 2398 9000', manager: 'د. ليلى العتيبي' },
  { id: '13', name: 'Mais Alghanim', nameAr: 'مطعم ميس الغانم', type: 'restaurant', area: 'العاصمة', waterWaste: 1100, foodWaste: 78, status: 'active', score: 8.5, phone: '+965 2246 3885', manager: 'عبدالله الغانم' },
  { id: '14', name: 'Granada Mall', nameAr: 'غرناطة مول', type: 'mall', area: 'العاصمة', waterWaste: 8500, foodWaste: 390, status: 'warning', score: 5.9, phone: '+965 2262 5000', manager: 'حمد الوهيب' },
  { id: '15', name: 'Hawalli Cooperative', nameAr: 'جمعية حولي التعاونية', type: 'government', area: 'حولي', waterWaste: 750, foodWaste: 165, status: 'active', score: 8.0, phone: '+965 2263 4400', manager: 'جاسم المري' },
  { id: '16', name: 'Tilal Restaurant', nameAr: 'مطعم تلال', type: 'restaurant', area: 'الأحمدي', waterWaste: 890, foodWaste: 62, status: 'active', score: 8.9, phone: '+965 2398 1177', manager: 'سعد الرشيدي' },
  { id: '17', name: 'Rumaithiya School', nameAr: 'مدرسة الرميثية', type: 'school', area: 'السالمية', waterWaste: 540, foodWaste: 38, status: 'active', score: 9.2, phone: '+965 2573 5500', manager: 'هدى العجمي' },
  { id: '18', name: 'Crowne Plaza Kuwait', nameAr: 'فندق كراون بلازا الكويت', type: 'hotel', area: 'الفنطاس', waterWaste: 4100, foodWaste: 298, status: 'warning', score: 6.0, phone: '+965 2394 5555', manager: 'بدر الشمري' },
]

export const waterWasteData = [
  { day: '1 مايو', amount: 3200 },
  { day: '2 مايو', amount: 2900 },
  { day: '3 مايو', amount: 3100 },
  { day: '4 مايو', amount: 2800 },
  { day: '5 مايو', amount: 3400 },
  { day: '6 مايو', amount: 3600 },
  { day: '7 مايو', amount: 3100 },
  { day: '8 مايو', amount: 2700 },
  { day: '9 مايو', amount: 2900 },
  { day: '10 مايو', amount: 3200 },
  { day: '11 مايو', amount: 3000 },
  { day: '12 مايو', amount: 2850 },
  { day: '13 مايو', amount: 2950 },
  { day: '14 مايو', amount: 3100 },
  { day: '15 مايو', amount: 3300 },
  { day: '16 مايو', amount: 3150 },
  { day: '17 مايو', amount: 2980 },
  { day: '18 مايو', amount: 2820 },
  { day: '19 مايو', amount: 3050 },
  { day: '20 مايو', amount: 3200 },
  { day: '21 مايو', amount: 2900 },
  { day: '22 مايو', amount: 2750 },
  { day: '23 مايو', amount: 2880 },
  { day: '24 مايو', amount: 3100 },
  { day: '25 مايو', amount: 2847 },
]

export const foodWasteByType = [
  { type: 'مطاعم', amount: 342 },
  { type: 'فنادق', amount: 1303 },
  { type: 'مستشفيات', amount: 455 },
  { type: 'مدارس', amount: 135 },
  { type: 'مولات', amount: 950 },
  { type: 'حكومية', amount: 375 },
]

export const surplusDistribution = [
  { name: 'توزيع على المحتاجين', value: 42, color: '#00C896' },
  { name: 'مزارع الحيوانات', value: 28, color: '#1E90FF' },
  { name: 'تحويل لسماد', value: 20, color: '#F59E0B' },
  { name: 'هدر غير قابل للاستخدام', value: 10, color: '#EF4444' },
]

export const recentReports = [
  { id: '1', facility: 'مطعم البيت الكويتي', type: 'طعام', amount: '45 كجم', time: '14:32', status: 'completed', statusAr: 'تم التوجيه' },
  { id: '2', facility: 'فندق ماريوت', type: 'مياه', amount: '800 لتر', time: '13:15', status: 'processing', statusAr: 'قيد المعالجة' },
  { id: '3', facility: 'الأفنيوز مول', type: 'طعام', amount: '120 كجم', time: '12:48', status: 'completed', statusAr: 'تم التوجيه' },
  { id: '4', facility: 'مستشفى الجهراء', type: 'مياه', amount: '2,100 لتر', time: '11:30', status: 'critical', statusAr: 'تجاوز الحد' },
  { id: '5', facility: 'مطعم ميس الغانم', type: 'طعام', amount: '28 كجم', time: '10:55', status: 'completed', statusAr: 'تم التوجيه' },
  { id: '6', facility: 'مدرسة السلام', type: 'طعام', amount: '15 كجم', time: '10:20', status: 'processing', statusAr: 'قيد المعالجة' },
  { id: '7', facility: 'فندق شيراتون', type: 'مياه', amount: '1,500 لتر', time: '09:45', status: 'processing', statusAr: 'قيد المعالجة' },
]

export const monthlyComparison = [
  { month: 'يناير', thisYear: 88000, lastYear: 102000 },
  { month: 'فبراير', thisYear: 82000, lastYear: 98000 },
  { month: 'مارس', thisYear: 79000, lastYear: 95000 },
  { month: 'أبريل', thisYear: 85000, lastYear: 99000 },
  { month: 'مايو', thisYear: 71350, lastYear: 91000 },
]

export const areaWasteData = [
  { area: 'العاصمة', waste: 28500, percentage: 32 },
  { area: 'حولي', waste: 18200, percentage: 21 },
  { area: 'الفروانية', waste: 15600, percentage: 18 },
  { area: 'الجهراء', waste: 12300, percentage: 14 },
  { area: 'الأحمدي', waste: 9800, percentage: 11 },
  { area: 'مبارك الكبير', waste: 3200, percentage: 4 },
]

export const aiInsights = [
  'منطقة الجهراء تُظهر انخفاضاً بنسبة 23% في هدر المياه مقارنة بالشهر الماضي بعد تطبيق برنامج الترشيد.',
  'فندق ماريوت يتجاوز الحصة المائية المخصصة بنسبة 18% — يُوصى بمراجعة منظومة التبريد.',
  'مطاعم منطقة السالمية حققت أفضل أداء في تقليل هدر الطعام بمعدل 31% خلال رمضان.',
  'توقع بارتفاع هدر المياه 15% خلال يونيو بسبب موجة الحر — يُنصح بالاستعداد المسبق.',
  'برنامج التبرع بالفائض أنقذ 4.2 طن من الطعام هذا الشهر ووزعها على 12 مركز رعاية اجتماعية.',
]

export const kuwaitAreas = [
  'العاصمة', 'حولي', 'الفروانية', 'الجهراء', 'الأحمدي', 'مبارك الكبير',
  'السالمية', 'الري', 'الفنطاس', 'الرميثية', 'الجابرية', 'بيان',
]
