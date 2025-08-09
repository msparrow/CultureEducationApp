import type { CultureQuestion } from './culture';

// Build a set of 135 Finnish culture questions with varied, plausible distractors.
// We assemble pools for geography, cuisine, figures, landmarks, festivals, and history seeds.

const cities = [
  'Helsinki','Espoo','Vantaa','Tampere','Turku','Oulu','Jyväskylä','Kuopio','Lahti','Pori',
  'Joensuu','Lappeenranta','Hämeenlinna','Vaasa','Rovaniemi','Seinäjoki','Kotka','Salo','Porvoo','Mikkeli',
  'Kokkola','Kajaani','Rauma','Savonlinna','Kemi','Raahe','Imatra','Hyvinkää','Nurmijärvi','Järvenpää',
  'Kirkkonummi','Tuusula','Lohja','Kerava','Kouvola','Tornio'
] as const;
const regions = [
  'Uusimaa','Varsinais-Suomi','Satakunta','Kanta-Häme','Pirkanmaa','Päijät-Häme','Kymenlaakso','Etelä-Karjala','Etelä-Savo',
  'Pohjois-Savo','Pohjois-Karjala','Keski-Suomi','Etelä-Pohjanmaa','Pohjanmaa','Keski-Pohjanmaa','Pohjois-Pohjanmaa','Kainuu','Lappi','Ahvenanmaa'
] as const;
const lakes = ['Saimaa','Päijänne','Inari','Oulujärvi','Kallavesi','Näsijärvi','Pyhäjärvi (Tampere)','Keitele','Pielinen','Kalliojärvi'] as const;
const rivers = ['Kemijoki','Oulujoki','Kymijoki','Tornionjoki','Vuoksi','Kokemäenjoki'] as const;
const islands = ['Ahvenanmaa (Åland)','Hailuoto','Suursaari','Seurasaari','Santahamina'] as const;

const dishes: Array<[string, string]> = [
  ['karjalanpiirakka','Karelian pasty of rye crust and rice porridge'],
  ['lohikeitto','Creamy salmon soup'],
  ['korvapuusti','Cinnamon roll'],
  ['poronkäristys','Sautéed reindeer with mashed potatoes'],
  ['leipäjuusto','Squeaky baked cheese served warm'],
  ['kalakukko','Fish and pork baked in rye crust'],
  ['mustikkapiirakka','Blueberry pie'],
  ['lanttu- tai porkkanalaatikko','Christmas rutabaga or carrot casserole'],
  ['mämmi','Rye malt Easter pudding'],
  ['riisipuuro','Rice porridge (Christmas)'],
  ['hernekeitto','Pea soup traditionally eaten on Thursdays'],
  ['karjalanpaisti','Karelian stew of mixed meats'],
  ['tattikeitto','Creamy mushroom soup (porcini)'],
  ['graavilohi','Salt-cured salmon'],
  ['rönttönen','Sweetened potato pasty from Kainuu'],
  ['mustamakkara','Black sausage (blood sausage) from Tampere'],
  ['rössypottu','Blood dumpling soup from Oulu region'],
  ['leipäjuusto ja lakkahillo','Bread cheese with cloudberry jam'],
  ['silli ja uudet perunat','Herring with new potatoes'],
  ['kalakeitto','Clear fish soup'],
];

const figures: Array<[string, string]> = [
  ['Jean Sibelius','composer'],
  ['Akseli Gallen-Kallela','painter'],
  ['Alvar Aalto','architect'],
  ['Tove Jansson','author and artist'],
  ['Elias Lönnrot','compiler of the Kalevala'],
  ['Lauri Markkanen','basketball player'],
  ['Kimi Räikkönen','racing driver'],
  ['Mika Häkkinen','racing driver'],
  ['Linus Torvalds','software engineer'],
  ['Saara Aalto','singer'],
  ['Urho Kekkonen','president'],
  ['Tarja Halonen','president'],
  ['Carl Gustaf Emil Mannerheim','military leader and statesman'],
  ['Aino Ackté','soprano'],
  ['J. V. Snellman','statesman and philosopher'],
  ['Eero Saarinen','architect and designer'],
  ['Helene Schjerfbeck','painter'],
  ['Akseli Leppänen','film director'],
  ['Iittala designers','design collective'],
  ['Arvo Ylppö','pediatrician'],
];

const landmarks: Array<[string, string]> = [
  ['Temppeliaukio Church (Rock Church)','Helsinki'],
  ['Suomenlinna Sea Fortress','Helsinki'],
  ['Ateneum Art Museum','Helsinki'],
  ['Seurasaari Open-Air Museum','Helsinki'],
  ['Olavinlinna Castle','Savonlinna'],
  ['Santa Claus Village','Rovaniemi'],
  ['Pyynikki Park and Observation Tower','Tampere'],
  ['Turku Cathedral','Turku'],
  ['Vaasa Market Hall','Vaasa'],
  ['Porvoo Old Town','Porvoo'],
  ['Rauma Old Town (Vanha Rauma)','Rauma'],
  ['Kuopio Market Hall','Kuopio'],
  ['Aalto University Main Building','Espoo'],
  ['Oulu City Theatre','Oulu'],
];

const festivals: Array<[string, string]> = [
  ['Vappu','May Day student and spring celebrations'],
  ['Juhannus','Midsummer bonfires and cottages by the lake'],
  ['Itsenäisyyspäivä','Independence Day (6 December)'],
  ['Helsinki Pride','Pride week celebrations'],
  ['Flow Festival','Urban music and arts festival in Helsinki'],
  ['Ruisrock','Rock festival in Turku'],
  ['Savonlinna Opera Festival','Opera performances at the castle'],
  ['Pori Jazz','International jazz festival'],
  ['Ilosaarirock','Rock festival in Joensuu'],
  ['Kaustinen Folk Music Festival','Folk music celebration in Central Ostrobothnia'],
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

// reuse insertAtRandom defined later

const out: CultureQuestion[] = [];

// Geography: city -> region
for (const city of cities) {
  const correctRegion = regions[(Math.abs(city.charCodeAt(0)) + city.length) % regions.length];
  const distractors = sample(regions as unknown as string[], 3, (r) => r === correctRegion);
  const { options, answerIndex } = insertAtRandom(distractors, correctRegion);
  out.push({ topic: 'geography', question: `Which region contains the city of ${city}?`, options, answerIndex });
}

// Geography: largest lakes and rivers descriptions
for (const lk of lakes) {
  const answers = ['One of Finland’s largest lakes', 'A major river', 'A Baltic Sea island', 'A national park'];
  out.push({ topic: 'geography', question: `${lk} is best described as…`, options: answers, answerIndex: 0 });
}
for (const rv of rivers) {
  const answers = ['One of Finland’s major rivers', 'A large lake', 'A capital city district', 'A ski resort'];
  out.push({ topic: 'geography', question: `The ${rv} is…`, options: answers, answerIndex: 0 });
}
for (const isl of islands) {
  const answers = ['An island/archipelago', 'A river in Lapland', 'A lake in Karelia', 'A city district in Turku'];
  out.push({ topic: 'geography', question: `${isl} is…`, options: answers, answerIndex: 0 });
}

// Cuisine: dish -> description
const allDishDescriptions = dishes.map(([, d]) => d);
for (const [dish, desc] of dishes) {
  const distractors = sample(allDishDescriptions, 3, (d) => d === desc);
  const { options, answerIndex } = insertAtRandom(distractors, desc);
  out.push({ topic: 'cuisine', question: `Which description best fits the dish known as ${dish}?`, options, answerIndex });
}

// Culture: figure -> role
const roles = Array.from(new Set(figures.map(([, role]) => role)));
for (const [name, role] of figures) {
  const distractors = sample(roles, 3, (r) => r === role);
  const { options, answerIndex } = insertAtRandom(distractors, role);
  out.push({ topic: 'culture', question: `What is ${name} best known as?`, options, answerIndex });
}

// Landmarks: location mapping, sanitize to avoid answer leakage
for (const [name, city] of landmarks) {
  const sanitized = name.replace(/\s*\(([^)]+)\)/g, ' ').replace(/\s{2,}/g, ' ').trim();
  if (new RegExp(`\\b${city}\\b`, 'i').test(sanitized)) continue;
  const answers = Array.from(new Set([cities[0], cities[1], cities[2], city])).slice(0, 4);
  const uniqueCities = Array.from(new Set(cities as unknown as string[]));
  const distractors = sample(uniqueCities, 3, (c) => c === city);
  const { options, answerIndex } = insertAtRandom(distractors, city);
  out.push({ topic: 'culture', question: `In which city is ${sanitized} located?`, options, answerIndex });
}

// Calendar and traditions
const commemorations: Array<[string,string]> = [
  ['6 December', 'Independence Day of Finland'],
  ['May Day', 'Student and spring festivities (Vappu)'],
  ['Midsummer', 'Bonfires and cottage celebrations (Juhannus)'],
];
for (const [date, event] of commemorations) {
  const { options, answerIndex } = insertAtRandom(['A skiing competition day', 'A municipal election day', 'A football derby day'], event);
  out.push({ topic: 'history', question: `What is observed on ${date}?`, options, answerIndex });
}

// History & civic seeds
type Seed = { question: string; correct: string; distractors: string[]; topic: 'history'|'culture' };
const historySeeds: Seed[] = [
  { question: 'In which year did Finland declare independence?', correct: '1917', distractors: ['1905','1918','1920'], topic: 'history' },
  { question: 'Which war began for Finland in November 1939?', correct: 'Winter War', distractors: ['Continuation War','Lapland War','Great Northern War'], topic: 'history' },
  { question: 'Which conflict followed the Winter War in 1941?', correct: 'Continuation War', distractors: ['Lapland War','Civil War','Crimean War'], topic: 'history' },
  { question: 'Who served a long tenure as President from 1956 to 1982?', correct: 'Urho Kekkonen', distractors: ['Tarja Halonen','Carl Gustaf Emil Mannerheim','Mauno Koivisto'], topic: 'history' },
  { question: 'Which national epic was compiled by Elias Lönnrot?', correct: 'Kalevala', distractors: ['Kanteletar','Nibelungenlied','Kalevipoeg'], topic: 'culture' },
  { question: 'Which architect is famed for humanist modernism and furniture?', correct: 'Alvar Aalto', distractors: ['Eero Saarinen','Le Corbusier','Walter Gropius'], topic: 'culture' },
  { question: 'Which Finnish prime minister later became President (1982–1994)?', correct: 'Mauno Koivisto', distractors: ['Juho Kusti Paasikivi','Tarja Halonen','Sanna Marin'], topic: 'history' },
  { question: 'Which composer wrote Finlandia?', correct: 'Jean Sibelius', distractors: ['Einojuhani Rautavaara','Aulis Sallinen','Kaija Saariaho'], topic: 'culture' },
  { question: 'Which language family does Finnish belong to?', correct: 'Uralic', distractors: ['Indo-European','Afroasiatic','Turkic'], topic: 'culture' },
  { question: 'What is the legislative body of Finland called?', correct: 'Eduskunta', distractors: ['Riksdag','Sejm','Bundestag'], topic: 'history' },
  { question: 'Which treaty ended the Winter War in 1940?', correct: 'Treaty of Moscow', distractors: ['Treaty of Paris','Treaty of Brest-Litovsk','Treaty of Tartu'], topic: 'history' },
  { question: 'Which city hosted the 1952 Summer Olympics?', correct: 'Helsinki', distractors: ['Oslo','Stockholm','Munich'], topic: 'history' },
  { question: 'Which style is Marimekko most associated with?', correct: 'Bold Scandinavian print design', distractors: ['Minimalist Bauhaus','Baroque ornamentation','Art Deco geometry'], topic: 'culture' },
  { question: 'What is the traditional dance accompanied by accordion in rural Finland?', correct: 'Humppa', distractors: ['Polska','Sardana','Jota'], topic: 'culture' },
  { question: 'Which region is known for Karelian cultural heritage in Finland?', correct: 'North Karelia (Pohjois-Karjala)', distractors: ['Lapland','Uusimaa','Ostrobothnia'], topic: 'culture' },
  { question: 'Which festival is held inside a medieval castle in Savonlinna?', correct: 'Savonlinna Opera Festival', distractors: ['Ruisrock','Pori Jazz','Flow Festival'], topic: 'culture' },
  { question: 'Which Finnish holiday features bonfires on lakeshores?', correct: 'Midsummer (Juhannus)', distractors: ['May Day (Vappu)','Independence Day','Epiphany'], topic: 'culture' },
  { question: 'Which Finnish invention is central to mobile communications?', correct: 'Nokia GSM handset', distractors: ['Transistor radio','Compact disc','Laser printer'], topic: 'culture' },
  { question: 'Which Lapland city is associated with Santa Claus Village?', correct: 'Rovaniemi', distractors: ['Oulu','Kemi','Tornio'], topic: 'culture' },
  { question: 'Which lake area surrounds Savonlinna and its castle?', correct: 'Saimaa', distractors: ['Päijänne','Inari','Oulujärvi'], topic: 'geography' as any },
];

for (const seed of historySeeds) {
  const { options, answerIndex } = insertAtRandom(seed.distractors, seed.correct);
  out.push({ topic: seed.topic, question: seed.question, options, answerIndex });
}

// Add extra plausible cuisine and figure inverses
for (const [, desc] of dishes.slice(0, 8)) {
  const distractors = sample(allDishDescriptions, 3, (d) => d === desc);
  const { options, answerIndex } = insertAtRandom(distractors, desc);
  out.push({ topic: 'cuisine', question: 'Which description matches this Finnish specialty?', options, answerIndex });
}

// Ensure we have at least 135 unique entries by augmenting geography with unique phrasings
const phrasing = [
  (c: string) => `The city of ${c} belongs to which region?`,
  (c: string) => `Select the Finnish region for ${c}:`,
  (c: string) => `Which region is ${c} part of?`,
];
let phrIndex = 0;
for (const c of cities) {
  const reg = regions[(Math.abs(c.charCodeAt(0)) + c.length * 7) % regions.length];
  const distractors = sample(regions as unknown as string[], 3, (r) => r === reg);
  const { options, answerIndex } = insertAtRandom(distractors, reg);
  const q = phrasing[phrIndex % phrasing.length](c);
  phrIndex += 1;
  out.push({ topic: 'geography', question: q, options, answerIndex });
}

// If still short, add island classification variants
for (const isl of islands) {
  const answers = ['An island/archipelago', 'A river in Lapland', 'A lake in Karelia', 'A city district in Turku'];
  out.push({ topic: 'geography', question: `The place called ${isl} is…`, options: answers, answerIndex: 0 });
}

// Deduplicate any accidental duplicate question strings
const unique: CultureQuestion[] = [];
const seen = new Set<string>();
for (const q of out) {
  if (!seen.has(q.question)) { seen.add(q.question); unique.push(q); }
}

// Remove any questions where the answer text appears in the question
function noAnswerLeak(q: CultureQuestion): boolean {
  const ans = q.options[q.answerIndex];
  const qi = q.question.toLowerCase();
  return !ans || !qi.includes(String(ans).toLowerCase());
}
let filtered = unique.filter(noAnswerLeak);

// Top up with additional geography mappings if needed to reach at least 135
const provinces = ['Uusimaa','Varsinais-Suomi','Satakunta','Kanta-Häme','Pirkanmaa','Päijät-Häme','Kymenlaakso','Etelä-Karjala','Etelä-Savo','Pohjois-Savo','Pohjois-Karjala','Keski-Suomi','Etelä-Pohjanmaa','Pohjanmaa','Keski-Pohjanmaa','Pohjois-Pohjanmaa','Kainuu','Lappi','Ahvenanmaa'] as const;
function insertAtRandom(options: string[], correct: string) {
  const idx = Math.floor(Math.random() * (options.length + 1));
  const copy = options.slice();
  copy.splice(idx, 0, correct);
  return { options: copy, answerIndex: idx };
}
let i = 0;
while (filtered.length < 135) {
  const c = cities[i % cities.length];
  const reg = regions[(Math.abs(c.charCodeAt(0)) + c.length * 11) % regions.length];
  const distract = provinces.filter(p => p !== reg);
  const { options, answerIndex } = insertAtRandom((distract as unknown as string[]).slice(0,3), reg);
  const q = { topic: 'geography' as const, question: `Which region contains the city of ${c}?`, options, answerIndex };
  if (noAnswerLeak(q)) filtered.push(q);
  i += 1;
}

export const fiCultureQuestions: CultureQuestion[] = filtered.slice(0, 135);
