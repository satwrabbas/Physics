import { type Unit, type Achievement } from '../types';

export const initialUnits: Unit[] = [
  {
    id: 'unit1',
    title: 'الوحدة الأولى: الحركة والتحريك',
    lessons: [
      { id: 'u1l1', title: 'الحركة التوافقية البسيطة', completed: false, xpValue: 150, confidence: '🤔', note: '' },
      { id: 'u1l2', title: 'الاهتزازات الجيبية الدورانية', completed: false, xpValue: 100, confidence: '🤔', note: '' },
      { id: 'u1l3', title: 'نواس الفتل غير المتخامد', completed: false, xpValue: 125, confidence: '🤔', note: '' },
      { id: 'u1l4', title: 'النواس الثقلي غير المتخامد', completed: false, xpValue: 125, confidence: '🤔', note: '' },
      { id: 'u1l5', title: 'ميكانيك الموائع', completed: false, xpValue: 175, confidence: '🤔', note: '' },
      { id: 'u1l6', title: 'النسبية الخاصة', completed: false, xpValue: 200, confidence: '🤔', note: '' },
    ]
  },
  {
    id: 'unit2',
    title: 'الوحدة الثانية: الكهرباء والمغناطيسية',
    lessons: [
      { id: 'u2l1', title: 'المغناطيسية', completed: false, xpValue: 100, confidence: '🤔', note: '' },
      { id: 'u2l2', title: 'فعل الحقل المغناطيسي في التيار الكهربائي', completed: false, xpValue: 150, confidence: '🤔', note: '' },
      { id: 'u2l3', title: 'التحريض الكهرطيسي', completed: false, xpValue: 175, confidence: '🤔', note: '' },
      { id: 'u2l4', title: 'الدارات المهتزة والتيارات عالية التواتر', completed: false, xpValue: 150, confidence: '🤔', note: '' },
      { id: 'u2l5', title: 'التيار المتناوب', completed: false, xpValue: 125, confidence: '🤔', note: '' },
      { id: 'u2l6', title: 'المحولة الكهربائية', completed: false, xpValue: 100, confidence: '🤔', note: '' },
    ]
  },
  {
    id: 'unit3',
    title: 'الوحدة الثالثة: الأمواج المستقرة',
    lessons: [
      { id: 'u3l1', title: 'الأمواج المستقرة العرضية', completed: false, xpValue: 150, confidence: '🤔', note: '' },
      { id: 'u3l2', title: 'الأمواج المستقرة الطولية', completed: false, xpValue: 150, confidence: '🤔', note: '' },
    ]
  },
   {
    id: 'unit4',
    title: 'الوحدة الرابعة: الإلكترونيات والجسم الصلب',
    lessons: [
      { id: 'u4l1', title: 'النماذج الذرية والطيوف', completed: false, xpValue: 125, confidence: '🤔', note: '' },
      { id: 'u4l2', title: 'انتزاع الإلكترونات وتسريعها', completed: false, xpValue: 150, confidence: '🤔', note: '' },
      { id: 'u4l3', title: 'الأشعة المهبطية', completed: false, xpValue: 100, confidence: '🤔', note: '' },
      { id: 'u4l4', title: 'الفعل الكهروحراري', completed: false, xpValue: 125, confidence: '🤔', note: '' },
      { id: 'u4l5', title: 'نظرية الكم والمفعول الكهروضوئي', completed: false, xpValue: 200, confidence: '🤔', note: '' },
      { id: 'u4l6', title: 'الأشعة السينية', completed: false, xpValue: 150, confidence: '🤔', note: '' },
      { id: 'u4l7', title: 'أشعة الليزر', completed: false, xpValue: 175, confidence: '🤔', note: '' },
    ]
  },
  {
    id: 'unit5',
    title: 'الوحدة الخامسة: الفيزياء الفلكية',
    lessons: [
        { id: 'u5l1', title: 'مقدمة في الفيزياء الفلكية', completed: false, xpValue: 150, confidence: '🤔', note: '' },
        { id: 'u5l2', title: 'دورة حياة النجوم والمجرات', completed: false, xpValue: 200, confidence: '🤔', note: '' },
        { id: 'u5l3', title: 'نشأة الكون وتوسعه', completed: false, xpValue: 250, confidence: '🤔', note: '' },
    ]
  }
];

export const initialAchievements: Achievement[] = [
  { id: 'first_spark', title: 'شرارة المعرفة', description: 'أنهيت أول درس فيزياء لك. بداية ممتازة!', unlocked: false },
  { id: 'five_lessons', title: 'الفيزيائي الناشئ', description: 'أكملت 5 دروس بنجاح. قوة الدفع تتزايد!', unlocked: false },
  { id: 'ten_lessons', title: 'باحث مجتهد', description: 'أكملت 10 دروس! استمر في استكشاف قوانين الكون.', unlocked: false },
  { id: 'first_note', title: 'الملاحظ الدقيق', description: 'كتبت أول ملاحظة لك. الملاحظة مفتاح الاكتشافات العلمية.', unlocked: false },
  { id: 'unit1_conqueror', title: 'سيد الحركة', description: 'أتقنت وحدة الحركة والتحريك.', unlocked: false },
  { id: 'unit2_conqueror', title: 'عبقري الكهرومغناطيسية', description: 'أتقنت وحدة الكهرباء والمغناطيسية.', unlocked: false },
  { id: 'unit3_conqueror', title: 'خبير الأمواج', description: 'أتقنت وحدة الأمواج المستقرة.', unlocked: false },
  { id: 'unit4_conqueror', title: 'رائد الكوانتم', description: 'أتقنت وحدة الإلكترونيات والجسم الصلب.', unlocked: false },
  { id: 'unit5_conqueror', title: 'مستكشف الفضاء', description: 'أتقنت وحدة الفيزياء الفلكية.', unlocked: false },
  { id: 'halfway', title: 'في منتصف الرحلة', description: 'وصلت إلى 50% من رحلتك الفيزيائية! أنت رائع!', unlocked: false },
  { id: 'expert', title: 'خبير الفيزياء', description: 'أكملت جميع دروس الفيزياء بنجاح! لقد كشفت أسرار الكون!', unlocked: false },
];