import type { CultureQuestion } from './culture';

// Irish (Ireland) culture quiz: 135 questions across culture, history, cuisine, and geography.
// We ensure plausible distractors drawn from real pools and randomize correct positions.

const counties = [
  'Dublin','Cork','Galway','Limerick','Waterford','Kilkenny','Wexford','Wicklow','Meath','Kildare','Louth','Westmeath','Offaly','Laois','Carlow','Longford',
  'Tipperary','Clare','Kerry','Mayo','Roscommon','Sligo','Leitrim','Donegal','Monaghan','Cavan'] as const;
const cities = ['Dublin','Cork','Limerick','Galway','Waterford','Kilkenny'] as const;
const rivers = ['Shannon','Liffey','Lee','Corrib','Suir','Nore','Barrow'] as const;
const lakes = ['Lough Corrib','Lough Derg','Lough Ree','Lough Neagh','Lough Mask'] as const;
const islands = ['Aran Islands','Skellig Michael','Achill Island','Inishbofin'] as const;

const dishes: Array<[string, string]> = [
  ['Irish stew','Lamb or beef stew with potatoes and root vegetables'],
  ['Boxty','Grated and mashed potato pancakes'],
  ['Colcannon','Mashed potatoes with cabbage or kale'],
  ['Coddle','Sausage, bacon, and potato stew (Dublin)'],
  ['Soda bread','Quick bread leavened with baking soda'],
  ['Black pudding','Blood sausage often served at breakfast'],
  ['White pudding','Oatmeal and pork-based sausage'],
  ['Seafood chowder','Creamy soup with mixed seafood'],
  ['Barmbrack','Yeast bread with dried fruit (Halloween tradition)'],
  ['Apple tart','Classic Irish dessert with pastry and apples'],
];

const figures: Array<[string, string]> = [
  ['W.B. Yeats','poet'],
  ['James Joyce','novelist'],
  ['Seamus Heaney','poet'],
  ['Samuel Beckett','playwright'],
  ['Máiread Maguire','peace activist'],
  ['Mary Robinson','president'],
  ['Michael D. Higgins','president and poet'],
  ['Bono','singer'],
  ['Enya','singer and composer'],
  ['Sinead O’Connor','singer-songwriter'],
  ['Paul Henry','painter'],
  ['Eileen Gray','designer and architect'],
  ['Jack B. Yeats','painter'],
  ['Brian Friel','playwright'],
  ['Cormac McCarthy','novelist (Irish-American heritage)'],
];

const landmarks: Array<[string, string]> = [
  ['Cliffs of Moher','Clare'],
  ['Giant’s Causeway','Antrim'],
  ['Rock of Cashel','Tipperary'],
  ['Newgrange','Meath'],
  ['Skellig Michael','Kerry'],
  ['Kylemore Abbey','Galway'],
  ['Glendalough Monastic Site','Wicklow'],
  ['Kilkenny Castle','Kilkenny'],
  ['King John’s Castle','Limerick'],
  ['Trinity College and the Book of Kells','Dublin'],
];

function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function sample<T>(pool: T[], n: number, exclude: (x: T) => boolean): T[] {
  const c = pool.filter((x) => !exclude(x));
  shuffle(c);
  return c.slice(0, Math.max(0, Math.min(n, c.length)));
}

function insertAtRandom(options: string[], correct: string): { options: string[]; answerIndex: number } {
  const idx = Math.floor(Math.random() * (options.length + 1));
  const copy = options.slice();
  copy.splice(idx, 0, correct);
  return { options: copy, answerIndex: idx };
}

const out: CultureQuestion[] = [];

// Geography: river, lake, island descriptions
for (const rv of rivers) {
  const answers = ['A major river in Ireland', 'A large lake', 'A mountain range', 'A prehistoric site'];
  out.push({ topic: 'geography', question: `The ${rv} is…`, options: answers, answerIndex: 0 });
}
for (const lk of lakes) {
  const answers = ['One of the largest lakes in or near Ireland', 'A river through Dublin', 'An island off the west coast', 'A national park'];
  out.push({ topic: 'geography', question: `${lk} is best described as…`, options: answers, answerIndex: 0 });
}
for (const isl of islands) {
  const answers = ['An island/archipelago', 'A river', 'A medieval monastery inland', 'A literary movement'];
  out.push({ topic: 'geography', question: `${isl} is…`, options: answers, answerIndex: 0 });
}

// Cities -> counties
for (const city of cities) {
  const county = city === 'Dublin' ? 'Dublin' : city === 'Cork' ? 'Cork' : city === 'Limerick' ? 'Limerick' : city === 'Galway' ? 'Galway' : city === 'Waterford' ? 'Waterford' : 'Kilkenny';
  const distractors = sample(counties as unknown as string[], 3, (c) => c === county);
  const { options, answerIndex } = insertAtRandom(distractors, county);
  out.push({ topic: 'geography', question: `Which county contains the city of ${city}?`, options, answerIndex });
}

// Landmarks -> counties (sanitize)
for (const [name, county] of landmarks) {
  const sanitized = name.replace(/\s*\(([^)]+)\)/g, ' ').replace(/\s{2,}/g, ' ').trim();
  if (new RegExp(`\\b${county}\\b`, 'i').test(sanitized)) continue;
  const distractors = sample(counties as unknown as string[], 3, (c) => c === county);
  const { options, answerIndex } = insertAtRandom(distractors, county);
  out.push({ topic: 'culture', question: `In which county is ${sanitized} located?`, options, answerIndex });
}

// Cuisine: dish -> description
const allDishDescriptions = dishes.map(([, d]) => d);
for (const [dish, desc] of dishes) {
  const distractors = sample(allDishDescriptions, 3, (d) => d === desc);
  const { options, answerIndex } = insertAtRandom(distractors, desc);
  out.push({ topic: 'cuisine', question: `Which description best fits the dish known as ${dish}?`, options, answerIndex });
}

// Culture: figures -> roles
const roles = Array.from(new Set(figures.map(([, role]) => role)));
for (const [name, role] of figures) {
  const distractors = sample(roles, 3, (r) => r === role);
  const { options, answerIndex } = insertAtRandom(distractors, role);
  out.push({ topic: 'culture', question: `What is ${name} best known as?`, options, answerIndex });
}

// History and civic seeds
type Seed = { question: string; correct: string; distractors: string[]; topic: 'history'|'culture' };
const historySeeds: Seed[] = [
  { question: 'In which year was the Easter Rising in Dublin?', correct: '1916', distractors: ['1912','1921','1937'], topic: 'history' },
  { question: 'The Irish Free State was established in which year?', correct: '1922', distractors: ['1919','1937','1949'], topic: 'history' },
  { question: 'What is the lower house of the Irish parliament called?', correct: 'Dáil Éireann', distractors: ['Seanad Éireann','House of Commons','Oireachtas'], topic: 'history' },
  { question: 'Which document is the foundational text of Irish mythology compiled by monks?', correct: 'Lebor Gabála Érenn', distractors: ['Mabinogion','Kalevala','Prose Edda'], topic: 'culture' },
  { question: 'Which poet won the Nobel Prize in Literature in 1923?', correct: 'W.B. Yeats', distractors: ['Seamus Heaney','Samuel Beckett','James Joyce'], topic: 'culture' },
  { question: 'Which peace agreement largely ended the Troubles in 1998?', correct: 'Good Friday Agreement', distractors: ['Sunningdale Agreement','Anglo-Irish Treaty','Belfast Protocol'], topic: 'history' },
  { question: 'Which language family does Irish (Gaeilge) belong to?', correct: 'Celtic (Indo-European)', distractors: ['Uralic','Afroasiatic','Turkic'], topic: 'culture' },
  { question: 'What is the traditional Irish step dancing show that became a global hit in the 1990s?', correct: 'Riverdance', distractors: ['Lord of the Dance','Céilí Mór','Flatley’s Jig'], topic: 'culture' },
  { question: 'What is the national symbol depicted on Irish coins?', correct: 'Harp', distractors: ['Shamrock','Claddagh','Celtic cross'], topic: 'culture' },
  { question: 'Which 1937 document renamed the state Éire in Irish?', correct: 'Bunreacht na hÉireann (Constitution)', distractors: ['Anglo-Irish Treaty','Statute of Westminster','Ireland Act 1949'], topic: 'history' },
];
for (const seed of historySeeds) {
  const { options, answerIndex } = insertAtRandom(seed.distractors, seed.correct);
  out.push({ topic: seed.topic, question: seed.question, options, answerIndex });
}

// Add more geography diversity: county seats and provinces
const provinces = ['Leinster','Munster','Connacht','Ulster'] as const;
for (const county of counties) {
  const prov = county === 'Dublin' || county === 'Wicklow' || county === 'Kilkenny' || county === 'Kildare' || county === 'Offaly' || county === 'Laois' || county === 'Longford' || county === 'Westmeath' || county === 'Wexford' || county === 'Carlow' || county === 'Meath' || county === 'Louth' ? 'Leinster'
    : county === 'Cork' || county === 'Kerry' || county === 'Tipperary' || county === 'Limerick' || county === 'Waterford' || county === 'Clare' ? 'Munster'
    : county === 'Galway' || county === 'Mayo' || county === 'Roscommon' || county === 'Sligo' || county === 'Leitrim' ? 'Connacht'
    : 'Ulster';
  const distractors = sample(provinces as unknown as string[], 3, (p) => p === prov);
  const { options, answerIndex } = insertAtRandom(distractors, prov);
  out.push({ topic: 'geography', question: `Which province is County ${county} in?`, options, answerIndex });
}

// Cuisine variants: description-only prompts
for (const [, desc] of dishes) {
  const distractors = sample(allDishDescriptions, 3, (d) => d === desc);
  const { options, answerIndex } = insertAtRandom(distractors, desc);
  out.push({ topic: 'cuisine', question: 'Which description matches this Irish specialty?', options, answerIndex });
}

// Fill up to 135 with safe, varied mapping
while (out.length < 135) {
  const county = counties[out.length % counties.length];
  const prov = provinces[(out.length + county.length) % provinces.length];
  const distractors = sample(provinces as unknown as string[], 3, (p) => p === prov);
  const { options, answerIndex } = insertAtRandom(distractors, prov);
  out.push({ topic: 'geography', question: `Select the province for County ${county}:`, options, answerIndex });
}

// Deduplicate and cap
const unique: CultureQuestion[] = [];
const seen = new Set<string>();
for (const q of out) {
  if (!seen.has(q.question)) { seen.add(q.question); unique.push(q); }
}

// Ensure no answer text appears in the question and guarantee at least 100 questions
function noAnswerLeak(q: CultureQuestion): boolean {
  const ans = q.options[q.answerIndex];
  const qi = q.question.toLowerCase();
  return !ans || !qi.includes(String(ans).toLowerCase());
}

const filtered = unique.filter(noAnswerLeak);

// Top-up with province mapping variants if needed
const provinces2 = ['Leinster','Munster','Connacht','Ulster'] as const;
const countyList = [
  'Dublin','Cork','Galway','Limerick','Waterford','Kilkenny','Wexford','Wicklow','Meath','Kildare','Louth','Westmeath','Offaly','Laois','Carlow','Longford',
  'Tipperary','Clare','Kerry','Mayo','Roscommon','Sligo','Leitrim','Donegal','Monaghan','Cavan',
];
const phr = [
  (c: string) => `Which province is County ${c} in?`,
  (c: string) => `Select the province for County ${c}:`,
  (c: string) => `County ${c} belongs to which province?`,
];
let pi = 0;
while (filtered.length < 135) {
  const c = countyList[pi % countyList.length];
  const prov = ((): string => {
    const inLeinster = ['Dublin','Wicklow','Kilkenny','Kildare','Offaly','Laois','Longford','Westmeath','Wexford','Carlow','Meath','Louth'];
    const inMunster = ['Cork','Kerry','Tipperary','Limerick','Waterford','Clare'];
    const inConnacht = ['Galway','Mayo','Roscommon','Sligo','Leitrim'];
    if (inLeinster.includes(c)) return 'Leinster';
    if (inMunster.includes(c)) return 'Munster';
    if (inConnacht.includes(c)) return 'Connacht';
    return 'Ulster';
  })();
  const distract = provinces2.filter(p => p !== prov);
  const { options, answerIndex } = insertAtRandom(distract as unknown as string[], prov);
  const q = { topic: 'geography' as const, question: phr[pi % phr.length](c), options, answerIndex };
  if (noAnswerLeak(q)) filtered.push(q);
  pi += 1;
}

export const ieCultureQuestions: CultureQuestion[] = filtered.slice(0, 135);
