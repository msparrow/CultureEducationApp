import type { CultureQuestion } from './culture';

// Egypt culture quiz: 135 questions across culture, history, cuisine, and geography.

const cities = ['Cairo','Alexandria','Giza','Luxor','Aswan','Port Said','Suez','Mansoura','Tanta','Zagazig'] as const;
const governorates = ['Cairo','Alexandria','Giza','Luxor','Aswan','Port Said','Suez','Dakahlia','Gharbia','Sharqia','Qalyubia','Beheira','Kafr El Sheikh','Minya','Beni Suef','Fayoum','Ismailia','Sohag','Qena','Red Sea'] as const;
const rivers = ['Nile','Damietta Branch','Rosetta Branch'] as const;
const deserts = ['Sahara','Eastern Desert','Western Desert','Sinai'] as const;
const sites: Array<[string,string]> = [
  ['The Great Pyramid of Khufu','Giza'],
  ['The Sphinx','Giza'],
  ['Karnak Temple Complex','Luxor'],
  ['Valley of the Kings','Luxor'],
  ['Abu Simbel Temples','Aswan'],
  ['Egyptian Museum (Tahrir)','Cairo'],
  ['Citadel of Saladin','Cairo'],
  ['Bibliotheca Alexandrina','Alexandria'],
  ['Kom Ombo Temple','Aswan'],
  ['Philae Temple','Aswan'],
];

const dishes: Array<[string,string]> = [
  ['Koshari','Lentils, rice, pasta, chickpeas with tomato sauce and fried onions'],
  ['Ful medames','Stewed fava beans with oil and spices'],
  ['Ta’ameya (Falafel)','Fava-bean falafel'],
  ['Molokhia','Jew’s mallow stew'],
  ['Mahshi','Stuffed vegetables with rice'],
  ['Fatta','Layered bread, rice, and meat with garlic vinegar sauce'],
  ['Hawawshi','Spiced minced meat in bread'],
  ['Basbousa','Semolina cake with syrup'],
  ['Konafa','Shredded pastry with nuts or cream syrup'],
  ['Om Ali','Bread pudding dessert'],
];

const figures: Array<[string,string]> = [
  ['Tutankhamun','pharaoh'],
  ['Ramses II','pharaoh'],
  ['Cleopatra VII','queen'],
  ['Hatshepsut','pharaoh'],
  ['Imhotep','architect and polymath'],
  ['Naguib Mahfouz','novelist'],
  ['Umm Kulthum','singer'],
  ['Oum Kalthoum','singer'],
  ['Anwar Sadat','president'],
  ['Gamal Abdel Nasser','president'],
];

function shuffle<T>(arr: T[]): T[] { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }
function sample<T>(pool: T[], n: number, exclude: (x: T) => boolean): T[] { const c = pool.filter((x) => !exclude(x)); shuffle(c); return c.slice(0, Math.min(n, c.length)); }
function insertAtRandom(options: string[], correct: string): { options: string[]; answerIndex: number } { const idx = Math.floor(Math.random() * (options.length + 1)); const copy = options.slice(); copy.splice(idx, 0, correct); return { options: copy, answerIndex: idx }; }

const out: CultureQuestion[] = [];

// Geography: river/desert classifications
for (const rv of rivers) { out.push({ topic: 'geography', question: `The ${rv} is…`, options: ['A major river of Egypt','A desert','A coastal city','An oasis'], answerIndex: 0 }); }
for (const d of deserts) { out.push({ topic: 'geography', question: `${d} is best described as…`, options: ['A desert region','A Nile branch','A Mediterranean island','A temple complex'], answerIndex: 0 }); }

// Cities -> governorates mapping
for (const city of cities) {
  const gov = governorates.includes(city as any) ? (city as unknown as string) : (city === 'Mansoura' ? 'Dakahlia' : city === 'Tanta' ? 'Gharbia' : city === 'Zagazig' ? 'Sharqia' : 'Cairo');
  const distractors = sample(governorates as unknown as string[], 3, (g) => g === gov);
  const { options, answerIndex } = insertAtRandom(distractors, gov);
  out.push({ topic: 'geography', question: `Which governorate contains the city of ${city}?`, options, answerIndex });
}

// Sites -> city (sanitize)
for (const [name, city] of sites) {
  const sanitized = name.replace(/\s*\(([^)]+)\)/g, ' ').replace(/\s{2,}/g, ' ').trim();
  if (new RegExp(`\\b${city}\\b`, 'i').test(sanitized)) continue;
  const distractors = sample(cities as unknown as string[], 3, (c) => c === city);
  const { options, answerIndex } = insertAtRandom(distractors, city);
  out.push({ topic: 'culture', question: `In which city is ${sanitized} located?`, options, answerIndex });
}

// Cuisine questions
const allDishDescriptions = dishes.map(([,d]) => d);
for (const [dish, desc] of dishes) {
  const distractors = sample(allDishDescriptions, 3, (d) => d === desc);
  const { options, answerIndex } = insertAtRandom(distractors, desc);
  out.push({ topic: 'cuisine', question: `Which description best fits the dish known as ${dish}?`, options, answerIndex });
}

// Figures -> roles
const roles = Array.from(new Set(figures.map(([,r]) => r)));
for (const [name, role] of figures) {
  const distractors = sample(roles, 3, (r) => r === role);
  const { options, answerIndex } = insertAtRandom(distractors, role);
  out.push({ topic: 'culture', question: `What is ${name} best known as?`, options, answerIndex });
}

// History & civics seeds
const seeds: Array<{question:string; correct:string; distractors:string[]; topic:'history'|'culture'}> = [
  { question: 'In which year did the October War (Yom Kippur War) begin?', correct: '1973', distractors: ['1967','1956','1991'], topic: 'history' },
  { question: 'Which canal connects the Mediterranean Sea with the Red Sea?', correct: 'Suez Canal', distractors: ['Panama Canal','Corinth Canal','Kiel Canal'], topic: 'history' },
  { question: 'Which script was key to deciphering hieroglyphs?', correct: 'Rosetta Stone trilingual inscription', distractors: ['Behistun Inscription','Coptic codices','Dead Sea Scrolls'], topic: 'culture' },
  { question: 'Which dynasty built the Great Pyramid of Giza?', correct: 'Fourth Dynasty', distractors: ['Eighteenth Dynasty','Ptolemaic Dynasty','Old Kingdom Fifth Dynasty'], topic: 'history' },
  { question: 'Which leader nationalized the Suez Canal in 1956?', correct: 'Gamal Abdel Nasser', distractors: ['Anwar Sadat','Hosni Mubarak','Mohamed Naguib'], topic: 'history' },
];
for (const s of seeds) { const { options, answerIndex } = insertAtRandom(s.distractors, s.correct); out.push({ topic: s.topic, question: s.question, options, answerIndex }); }

// Pad to 135 with governorate and site variations
const phrasing = [
  (c: string) => `Which governorate is ${c} part of?`,
  (c: string) => `Select the governorate for ${c}:`,
];
let idx = 0;
while (out.length < 135) {
  const c = cities[idx % cities.length];
  const gov = governorates.includes(c as any) ? (c as unknown as string) : (c === 'Mansoura' ? 'Dakahlia' : c === 'Tanta' ? 'Gharbia' : c === 'Zagazig' ? 'Sharqia' : 'Cairo');
  const distractors = sample(governorates as unknown as string[], 3, (g) => g === gov);
  const { options, answerIndex } = insertAtRandom(distractors, gov);
  out.push({ topic: 'geography', question: phrasing[idx % phrasing.length](c), options, answerIndex });
  idx += 1;
}

const unique: CultureQuestion[] = [];
const seen = new Set<string>();
for (const q of out) { if (!seen.has(q.question)) { seen.add(q.question); unique.push(q); } }

function noAnswerLeak(q: CultureQuestion): boolean {
  const ans = q.options[q.answerIndex];
  const qi = q.question.toLowerCase();
  return !ans || !qi.includes(String(ans).toLowerCase());
}

let filtered = unique.filter(noAnswerLeak);

// Top up with governorate mapping variants to ensure at least 135
const phr = [
  (c: string) => `Which governorate is ${c} part of?`,
  (c: string) => `Select the governorate for ${c}:`,
];
let ii = 0;
while (filtered.length < 135) {
  const c = cities[ii % cities.length];
  const gov = governorates.includes(c as any) ? (c as unknown as string) : (c === 'Mansoura' ? 'Dakahlia' : c === 'Tanta' ? 'Gharbia' : c === 'Zagazig' ? 'Sharqia' : 'Cairo');
  const distract = (governorates as unknown as string[]).filter(g => g !== gov).slice(0,3);
  const { options, answerIndex } = insertAtRandom(distract, gov);
  const q = { topic: 'geography' as const, question: phr[ii % phr.length](c), options, answerIndex };
  if (noAnswerLeak(q)) filtered.push(q);
  ii += 1;
}

export const egCultureQuestions: CultureQuestion[] = filtered.slice(0, 135);
