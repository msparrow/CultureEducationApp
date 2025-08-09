import type { VocabPair } from './vocab';
import type { CultureQuestion } from './culture';
// Do not import large datasets eagerly. Each culture will expose a loader
// that dynamically imports the dataset on demand.

export type CultureKey = 'catalonia' | 'finland' | 'ireland' | 'egypt' | 'mexico' | 'thailand';

export type CultureConfig = {
  name: string; // Display name
  appTitle: string; // e.g., "Catalan Learning", "Finnish Learning"
  nativeLanguageLabel: string; // e.g., "Catalan", "Finnish"
  englishLabel: string; // "English"
  footerTagline: string; // localized footer message like "Aprenem català!"
  vocab: VocabPair[];
  culture: CultureQuestion[];
};

export type CultureMeta = {
  name: string;
  appTitle: string;
  nativeLanguageLabel: string;
  englishLabel: string;
  footerTagline: string;
  loader: () => Promise<{ vocab: VocabPair[]; culture: CultureQuestion[] }>;
};

const finlandVocab: VocabPair[] = [
  { ca: 'hei', en: 'hello' },
  { ca: 'kiitos', en: 'thank you' },
  { ca: 'vesi', en: 'water' },
  { ca: 'leipä', en: 'bread' },
  { ca: 'koulu', en: 'school' },
];

const finlandQuestions: CultureQuestion[] = [
  { question: 'What is the capital of Finland?', options: ['Helsinki', 'Turku', 'Tampere', 'Oulu'], answerIndex: 0, topic: 'geography' },
  { question: 'What is a traditional Finnish sauna practice?', options: ['Sauna with birch whisks', 'Hot stone footbaths', 'Mud baths', 'Salt caves'], answerIndex: 0, topic: 'culture' },
  { question: 'What is "karjalanpiirakka"?', options: ['Karelian pasty', 'Fish soup', 'Blueberry pie', 'Reindeer stew'], answerIndex: 0, topic: 'cuisine' },
  { question: 'Which Finnish composer wrote Finlandia?', options: ['Jean Sibelius', 'Einojuhani Rautavaara', 'Aulis Sallinen', 'Kaija Saariaho'], answerIndex: 0, topic: 'culture' },
  { question: 'What is the largest lake in Finland?', options: ['Saimaa', 'Päijänne', 'Inari', 'Oulujärvi'], answerIndex: 0, topic: 'geography' },
];

export const CULTURE_REGISTRY: Record<CultureKey, CultureMeta> = {
  catalonia: {
    name: 'Catalonia',
    appTitle: 'Catalan Learning',
    nativeLanguageLabel: 'Catalan',
    englishLabel: 'English',
    footerTagline: 'Aprenem català!',
    loader: async () => {
      const [{ vocabPairs }, { cultureQuestions }] = await Promise.all([
        import('./vocab'),
        import('./culture'),
      ]);
      return { vocab: vocabPairs, culture: cultureQuestions };
    },
  },
  finland: {
    name: 'Finland',
    appTitle: 'Finnish Learning',
    nativeLanguageLabel: 'Finnish',
    englishLabel: 'English',
    footerTagline: 'Opitaan suomea!',
    loader: async () => {
      const [{ fiVocabPairs }, { fiCultureQuestions }] = await Promise.all([
        import('./vocab_fi'),
        import('./culture_fi'),
      ]);
      return { vocab: fiVocabPairs, culture: fiCultureQuestions };
    },
  },
  ireland: {
    name: 'Ireland',
    appTitle: 'Irish Learning',
    nativeLanguageLabel: 'Irish (Gaeilge)',
    englishLabel: 'English',
    footerTagline: 'Foghlaimís Gaeilge!',
    loader: async () => {
      const [{ ieVocabPairs }, { ieCultureQuestions }] = await Promise.all([
        import('./vocab_ie'),
        import('./culture_ie'),
      ]);
      return { vocab: ieVocabPairs, culture: ieCultureQuestions };
    },
  },
  egypt: {
    name: 'Egypt',
    appTitle: 'Arabic (Egypt) Learning',
    nativeLanguageLabel: 'Arabic (Egypt)',
    englishLabel: 'English',
    footerTagline: 'يلا نتعلم عربي!',
    loader: async () => {
      const [{ egVocabPairs }, { egCultureQuestions }] = await Promise.all([
        import('./vocab_eg'),
        import('./culture_eg'),
      ]);
      return { vocab: egVocabPairs, culture: egCultureQuestions };
    },
  },
  mexico: {
    name: 'Mexico',
    appTitle: 'Mexican Spanish Learning',
    nativeLanguageLabel: 'Spanish (Mexico)',
    englishLabel: 'English',
    footerTagline: 'Aprendamos español (MX)!',
    loader: async () => {
      const [{ mxVocabPairs }, { mxCultureQuestions }] = await Promise.all([
        import('./vocab_mx'),
        import('./culture_mx'),
      ]);
      return { vocab: mxVocabPairs, culture: mxCultureQuestions };
    },
  },
  thailand: {
    name: 'Thailand',
    appTitle: 'Thai Learning',
    nativeLanguageLabel: 'Thai',
    englishLabel: 'English',
    footerTagline: 'มาเรียนภาษาไทยกัน!',
    loader: async () => {
      const [{ thVocabPairs }, { thCultureQuestions }] = await Promise.all([
        import('./vocab_th'),
        import('./culture_th'),
      ]);
      return { vocab: thVocabPairs, culture: thCultureQuestions };
    },
  },
};
