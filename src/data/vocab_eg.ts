import type { VocabPair } from './vocab';

// Egyptian Arabic (Arabic) vocabulary, aggregated and deduplicated, capped at 300
// Native term in `ca`, English in `en`.

const basics: VocabPair[] = [
  { ca: 'مرحبا', en: 'hello' },
  { ca: 'أهلا', en: 'hi' },
  { ca: 'مع السلامة', en: 'goodbye' },
  { ca: 'من فضلك', en: 'please' },
  { ca: 'شكرا', en: 'thank you' },
  { ca: 'عفوا', en: 'you are welcome' },
  { ca: 'آسف', en: 'sorry' },
  { ca: 'إزيك؟', en: 'how are you?' },
  { ca: 'كويس', en: 'good/well' },
  { ca: 'وحش', en: 'bad' },
  { ca: 'اسمك إيه؟', en: 'what is your name?' },
  { ca: 'أنا ...', en: 'I am ...' },
  { ca: 'صحة', en: 'cheers' },
];

const family: VocabPair[] = [
  { ca: 'صاحب', en: 'friend (male)' },
  { ca: 'صحبة', en: 'friend (female)' },
  { ca: 'أب', en: 'father' },
  { ca: 'أم', en: 'mother' },
  { ca: 'أخ', en: 'brother' },
  { ca: 'أخت', en: 'sister' },
  { ca: 'جد', en: 'grandfather' },
  { ca: 'جدة', en: 'grandmother' },
  { ca: 'ابن', en: 'son' },
  { ca: 'ابنة', en: 'daughter' },
  { ca: 'رجل', en: 'man' },
  { ca: 'امرأة', en: 'woman' },
  { ca: 'ولد', en: 'boy' },
  { ca: 'بنت', en: 'girl' },
  { ca: 'شخص', en: 'person' },
];

const food: VocabPair[] = [
  { ca: 'مياه', en: 'water' },
  { ca: 'عيش', en: 'bread' },
  { ca: 'نبيذ', en: 'wine' },
  { ca: 'بيرة', en: 'beer' },
  { ca: 'قهوة', en: 'coffee' },
  { ca: 'شاي', en: 'tea' },
  { ca: 'لبن', en: 'milk' },
  { ca: 'جبنة', en: 'cheese' },
  { ca: 'زبدة', en: 'butter' },
  { ca: 'بيضة', en: 'egg' },
  { ca: 'ملح', en: 'salt' },
  { ca: 'سكر', en: 'sugar' },
  { ca: 'سمك', en: 'fish' },
  { ca: 'لحم', en: 'meat' },
  { ca: 'فراخ', en: 'chicken' },
  { ca: 'رز', en: 'rice' },
  { ca: 'زيت', en: 'oil' },
  { ca: 'خل', en: 'vinegar' },
  { ca: 'تفاح', en: 'apple' },
  { ca: 'كمثرى', en: 'pear' },
  { ca: 'برتقال', en: 'orange' },
  { ca: 'ليمون', en: 'lemon' },
  { ca: 'موز', en: 'banana' },
  { ca: 'عنب', en: 'grapes' },
  { ca: 'طماطم', en: 'tomato' },
  { ca: 'بطاطس', en: 'potato' },
  { ca: 'بصل', en: 'onion' },
  { ca: 'ثوم', en: 'garlic' },
  { ca: 'جزر', en: 'carrot' },
  { ca: 'خص', en: 'lettuce' },
  { ca: 'سلطة', en: 'salad' },
  { ca: 'شوربة', en: 'soup' },
  { ca: 'فطار', en: 'breakfast' },
  { ca: 'غدا', en: 'lunch' },
  { ca: 'عشا', en: 'dinner' },
];

const house: VocabPair[] = [
  { ca: 'بيت', en: 'house' },
  { ca: 'شقة', en: 'apartment' },
  { ca: 'أوضة', en: 'room' },
  { ca: 'مطبخ', en: 'kitchen' },
  { ca: 'حمام', en: 'bathroom' },
  { ca: 'صالون', en: 'living room' },
  { ca: 'سرير', en: 'bed' },
  { ca: 'كنبة', en: 'sofa' },
  { ca: 'ترابيزة', en: 'table' },
  { ca: 'كرسي', en: 'chair' },
  { ca: 'دولاب', en: 'wardrobe' },
  { ca: 'باب', en: 'door' },
  { ca: 'شباك', en: 'window' },
  { ca: 'نور', en: 'light' },
  { ca: 'مفتاح', en: 'key' },
];

const city: VocabPair[] = [
  { ca: 'مدينة', en: 'city' },
  { ca: 'بلد', en: 'town' },
  { ca: 'حارة', en: 'neighborhood' },
  { ca: 'شارع', en: 'street' },
  { ca: 'ميدان', en: 'square' },
  { ca: 'محل', en: 'shop' },
  { ca: 'سوق', en: 'market' },
  { ca: 'مطعم', en: 'restaurant' },
  { ca: 'مدرسة', en: 'school' },
  { ca: 'جامعة', en: 'university' },
  { ca: 'شغل', en: 'work' },
  { ca: 'مكتب', en: 'office' },
  { ca: 'مكتبة', en: 'library' },
  { ca: 'صيدلية', en: 'pharmacy' },
  { ca: 'محطة', en: 'station' },
  { ca: 'حديقة', en: 'park' },
  { ca: 'شاطئ', en: 'beach' },
  { ca: 'متحف', en: 'museum' },
];

const transport: VocabPair[] = [
  { ca: 'عربية', en: 'car' },
  { ca: 'أوتوبيس', en: 'bus' },
  { ca: 'مترو', en: 'subway' },
  { ca: 'قطر', en: 'train' },
  { ca: 'طيارة', en: 'plane' },
  { ca: 'مركب', en: 'ship' },
  { ca: 'عجلة', en: 'bicycle' },
  { ca: 'موتوسيكل', en: 'motorbike' },
  { ca: 'تاكسي', en: 'taxi' },
  { ca: 'تذكرة', en: 'ticket' },
];

const colors: VocabPair[] = [
  { ca: 'أزرق', en: 'blue' },
  { ca: 'أحمر', en: 'red' },
  { ca: 'أخضر', en: 'green' },
  { ca: 'أصفر', en: 'yellow' },
  { ca: 'أسود', en: 'black' },
  { ca: 'أبيض', en: 'white' },
  { ca: 'برتقالي', en: 'orange (color)' },
  { ca: 'وردي', en: 'pink' },
  { ca: 'بنفسجي', en: 'purple' },
  { ca: 'بني', en: 'brown' },
  { ca: 'رمادي', en: 'gray' },
];

const adjectives: VocabPair[] = [
  { ca: 'كبير', en: 'big' },
  { ca: 'صغير', en: 'small' },
  { ca: 'طويل', en: 'long' },
  { ca: 'قصير', en: 'short' },
  { ca: 'طويل (قامة)', en: 'tall' },
  { ca: 'قصير (قامة)', en: 'short (height)' },
  { ca: 'جديد', en: 'new' },
  { ca: 'قديم', en: 'old' },
  { ca: 'كويس', en: 'good' },
  { ca: 'وحش', en: 'bad' },
  { ca: 'جميل', en: 'beautiful' },
  { ca: 'وحش المنظر', en: 'ugly' },
  { ca: 'غالي', en: 'expensive' },
  { ca: 'رخيص', en: 'cheap' },
  { ca: 'سهل', en: 'easy' },
  { ca: 'صعب', en: 'difficult' },
  { ca: 'مبسوط', en: 'happy' },
  { ca: 'حزين', en: 'sad' },
  { ca: 'تعبان', en: 'tired' },
  { ca: 'عيان', en: 'sick' },
  { ca: 'متوتر', en: 'nervous' },
  { ca: 'هادئ', en: 'calm' },
];

const verbs: VocabPair[] = [
  { ca: 'يكون', en: 'to be' },
  { ca: 'عنده', en: 'to have' },
  { ca: 'يعمل', en: 'to do' },
  { ca: 'يروح', en: 'to go' },
  { ca: 'يجي', en: 'to come' },
  { ca: 'يجيب', en: 'to bring' },
  { ca: 'ياخد', en: 'to take' },
  { ca: 'يدي', en: 'to give' },
  { ca: 'يقول', en: 'to say' },
  { ca: 'يفكر', en: 'to think' },
  { ca: 'يعرف', en: 'to know (fact)' },
  { ca: 'يعرف (حد/مكان)', en: 'to know (someone/place)' },
  { ca: 'عايز', en: 'to want' },
  { ca: 'يقدر', en: 'can / to be able' },
  { ca: 'محتاج', en: 'to need' },
  { ca: 'يحب', en: 'to like' },
  { ca: 'يحب قوي', en: 'to love' },
  { ca: 'يلعب', en: 'to play' },
  { ca: 'يتعلم', en: 'to learn' },
  { ca: 'يعلم', en: 'to teach' },
  { ca: 'يساعد', en: 'to help' },
  { ca: 'يسأل', en: 'to ask' },
  { ca: 'يرد', en: 'to answer' },
  { ca: 'يقرا', en: 'to read' },
  { ca: 'يكتب', en: 'to write' },
  { ca: 'يسمع', en: 'to listen' },
  { ca: 'يتكلم', en: 'to speak' },
  { ca: 'يبص', en: 'to look' },
  { ca: 'يشوف', en: 'to see' },
  { ca: 'يمشي', en: 'to walk' },
  { ca: 'يجري', en: 'to run' },
  { ca: 'يسافر', en: 'to travel' },
  { ca: 'يسوق', en: 'to drive' },
  { ca: 'يفتح', en: 'to open' },
  { ca: 'يقفل', en: 'to close' },
  { ca: 'يشغل', en: 'to turn on' },
  { ca: 'يطفي', en: 'to turn off' },
  { ca: 'يدخل', en: 'to enter' },
  { ca: 'يخرج', en: 'to leave' },
  { ca: 'يطلع', en: 'to go up' },
  { ca: 'ينزل', en: 'to go down' },
];

const nature: VocabPair[] = [
  { ca: 'بحر', en: 'sea' },
  { ca: 'جبل', en: 'mountain' },
  { ca: 'نهر', en: 'river' },
  { ca: 'جزيرة', en: 'island' },
  { ca: 'بحيرة', en: 'lake' },
  { ca: 'غابة', en: 'forest' },
  { ca: 'شاطئ', en: 'beach' },
  { ca: 'شمس', en: 'sun' },
  { ca: 'قمر', en: 'moon' },
  { ca: 'نجمة', en: 'star' },
  { ca: 'مطر', en: 'rain' },
  { ca: 'تلج', en: 'snow' },
  { ca: 'ريح', en: 'wind' },
  { ca: 'سحابة', en: 'cloud' },
  { ca: 'عاصفة', en: 'storm' },
];

const animals: VocabPair[] = [
  { ca: 'كلب', en: 'dog' },
  { ca: 'قطة', en: 'cat' },
  { ca: 'عصفور', en: 'bird' },
  { ca: 'بقرة', en: 'cow' },
  { ca: 'خنزير', en: 'pig' },
  { ca: 'خروف', en: 'sheep' },
  { ca: 'حصان', en: 'horse' },
  { ca: 'أرنب', en: 'rabbit' },
  { ca: 'سمكة', en: 'fish (animal)' },
];

const time: VocabPair[] = [
  { ca: 'يوم', en: 'day' },
  { ca: 'ليل', en: 'night' },
  { ca: 'صباح', en: 'morning' },
  { ca: 'ظهر', en: 'afternoon' },
  { ca: 'مساء', en: 'evening' },
  { ca: 'أسبوع', en: 'week' },
  { ca: 'شهر', en: 'month' },
  { ca: 'سنة', en: 'year' },
  { ca: 'النهاردة', en: 'today' },
  { ca: 'امبارح', en: 'yesterday' },
  { ca: 'بكرة', en: 'tomorrow' },
  { ca: 'ربيع', en: 'spring' },
  { ca: 'صيف', en: 'summer' },
  { ca: 'خريف', en: 'autumn' },
  { ca: 'شتا', en: 'winter' },
];

const clothing: VocabPair[] = [
  { ca: 'قميص', en: 'shirt' },
  { ca: 'تي شيرت', en: 't-shirt' },
  { ca: 'بنطلون', en: 'trousers' },
  { ca: 'جيب', en: 'skirt' },
  { ca: 'جاكت', en: 'jacket' },
  { ca: 'بالطو', en: 'coat' },
  { ca: 'جزمة', en: 'shoes' },
  { ca: 'شراب', en: 'socks' },
  { ca: 'قبعة', en: 'hat' },
];

const body: VocabPair[] = [
  { ca: 'راس', en: 'head' },
  { ca: 'وش', en: 'face' },
  { ca: 'عينين', en: 'eyes' },
  { ca: 'ودان', en: 'ears' },
  { ca: 'منخير', en: 'nose' },
  { ca: 'بق', en: 'mouth' },
  { ca: 'إيد', en: 'hand' },
  { ca: 'درع', en: 'arm' },
  { ca: 'رجل', en: 'leg' },
  { ca: 'قدم', en: 'foot' },
];

const school: VocabPair[] = [
  { ca: 'كتاب', en: 'book' },
  { ca: 'ورقة', en: 'paper' },
  { ca: 'قلم رصاص', en: 'pencil' },
  { ca: 'قلم', en: 'pen' },
  { ca: 'إستيكة', en: 'eraser' },
  { ca: 'كمبيوتر', en: 'computer' },
  { ca: 'كيبورد', en: 'keyboard' },
  { ca: 'ماوس', en: 'mouse' },
  { ca: 'شاشة', en: 'screen' },
  { ca: 'طابعة', en: 'printer' },
  { ca: 'إيميل', en: 'email' },
];

const weekdays: VocabPair[] = [
  { ca: 'الاثنين', en: 'Monday' },
  { ca: 'الثلاثاء', en: 'Tuesday' },
  { ca: 'الأربعاء', en: 'Wednesday' },
  { ca: 'الخميس', en: 'Thursday' },
  { ca: 'الجمعة', en: 'Friday' },
  { ca: 'السبت', en: 'Saturday' },
  { ca: 'الأحد', en: 'Sunday' },
];

const months: VocabPair[] = [
  { ca: 'يناير', en: 'January' },{ ca: 'فبراير', en: 'February' },{ ca: 'مارس', en: 'March' },{ ca: 'أبريل', en: 'April' },{ ca: 'مايو', en: 'May' },{ ca: 'يونيو', en: 'June' },{ ca: 'يوليو', en: 'July' },{ ca: 'أغسطس', en: 'August' },{ ca: 'سبتمبر', en: 'September' },{ ca: 'أكتوبر', en: 'October' },{ ca: 'نوفمبر', en: 'November' },{ ca: 'ديسمبر', en: 'December' },
];

const occupations: VocabPair[] = [
  { ca: 'طبيب', en: 'doctor' },
  { ca: 'مدرس', en: 'teacher' },
  { ca: 'مهندس', en: 'engineer' },
  { ca: 'طباخ', en: 'cook' },
  { ca: 'جارسون', en: 'waiter' },
  { ca: 'مزارع', en: 'farmer' },
  { ca: 'صحفي', en: 'journalist' },
  { ca: 'محامي', en: 'lawyer' },
  { ca: 'ممثل', en: 'actor' },
  { ca: 'مغني', en: 'singer' },
];

const household: VocabPair[] = [
  { ca: 'طبق', en: 'plate' },
  { ca: 'كوب', en: 'glass (cup)' },
  { ca: 'كوب (صغير)', en: 'cup' },
  { ca: 'شوكة', en: 'fork' },
  { ca: 'سكين', en: 'knife' },
  { ca: 'ملعقة', en: 'spoon' },
  { ca: 'طاسة', en: 'frying pan' },
  { ca: 'حلة', en: 'pot' },
  { ca: 'ميكروويف', en: 'microwave' },
  { ca: 'فرن', en: 'oven' },
  { ca: 'غسالة', en: 'washing machine' },
  { ca: 'مجفف', en: 'dryer' },
];

const sportsTechTravel: VocabPair[] = [
  { ca: 'كرة قدم', en: 'football (soccer)' },
  { ca: 'سباحة', en: 'swimming' },
  { ca: 'تنس', en: 'tennis' },
  { ca: 'إنترنت', en: 'internet' },
  { ca: 'تطبيق', en: 'app' },
  { ca: 'كلمة السر', en: 'password' },
  { ca: 'مستخدم', en: 'user' },
  { ca: 'ملف', en: 'file' },
  { ca: 'مجلد', en: 'folder' },
  { ca: 'شبكة', en: 'network' },
  { ca: 'جواز سفر', en: 'passport' },
  { ca: 'حقيبة سفر', en: 'suitcase' },
  { ca: 'دليل', en: 'guidebook' },
  { ca: 'خريطة', en: 'map' },
  { ca: 'سائح', en: 'tourist' },
];

const numbers: VocabPair[] = ([
  ['صفر','zero'],['واحد','one'],['اتنين','two'],['تلاتة','three'],['أربعة','four'],['خمسة','five'],['ستة','six'],['سبعة','seven'],['تمانية','eight'],['تسعة','nine'],['عشرة','ten'],
  ['حداشر','eleven'],['اتناشر','twelve'],['تلاتاشر','thirteen'],['اربعتاشر','fourteen'],['خمستاشر','fifteen'],['ستاشر','sixteen'],['سبعتاشر','seventeen'],['تمنتاشر','eighteen'],['تسعتاشر','nineteen'],['عشرين','twenty']
] as const).map(([ca,en]) => ({ ca, en }));

const all: VocabPair[] = [
  ...basics,
  ...family,
  ...food,
  ...house,
  ...city,
  ...transport,
  ...colors,
  ...adjectives,
  ...verbs,
  ...nature,
  ...animals,
  ...time,
  ...clothing,
  ...body,
  ...school,
  ...weekdays,
  ...months,
  ...occupations,
  ...household,
  ...sportsTechTravel,
  ...numbers,
];

const dedup = new Map<string, VocabPair>();
for (const p of all) {
  const key = `${p.ca}::${p.en}`.toLowerCase();
  if (!dedup.has(key)) dedup.set(key, p);
}

export const egVocabPairs: VocabPair[] = Array.from(dedup.values()).slice(0, 300);
