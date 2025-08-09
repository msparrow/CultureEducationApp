import type { CultureQuestion } from './culture';

const cities = ['Bangkok','Chiang Mai','Chiang Rai','Phuket','Pattaya','Ayutthaya','Sukhothai','Khon Kaen','Udon Thani','Nakhon Ratchasima'] as const;
const regions = ['Central','Northern','Northeastern (Isan)','Southern','Eastern','Western'] as const;
const dishes: Array<[string,string]> = [
  ['Pad Thai','Stir-fried rice noodles with tamarind and peanuts'],
  ['Som Tam','Green papaya salad (Isan)'],
  ['Tom Yum Goong','Hot and sour shrimp soup'],
  ['Massaman Curry','Rich curry with potatoes and peanuts'],
  ['Khao Soi','Northern curry noodle soup'],
  ['Mango Sticky Rice','Sticky rice with coconut milk and mango'],
  ['Pad Kra Pao','Stir-fried basil with meat'],
  ['Boat Noodles','Dark, rich noodle soup'],
  ['Panang Curry','Thick red curry'],
  ['Gaeng Keow Wan','Green curry'],
];
const figures: Array<[string,string]> = [
  ['Thaksin Chinatwat','prime minister'],
  ['Bhumibol Adulyadej (Rama IX)','monarch'],
  ['Taksin the Great','king'],
  ['Thawan Duchanee','artist'],
  ['Rirkrit Tiravanija','artist'],
  ['Apichatpong Weerasethakul','film director'],
  ['Paradorn Srichaphan','tennis player'],
  ['Ariya Jutanugarn','golfer'],
  ['Bird Thongchai','singer'],
  ['Lisa (BLACKPINK)','singer and dancer'],
];
const landmarks: Array<[string,string]> = [
  ['Grand Palace and Wat Phra Kaew','Bangkok'],
  ['Wat Arun (Temple of Dawn)','Bangkok'],
  ['Wat Pho','Bangkok'],
  ['Ayutthaya Historical Park','Ayutthaya'],
  ['Sukhothai Historical Park','Sukhothai'],
  ['Doi Suthep','Chiang Mai'],
  ['Phi Phi Islands','Phuket'],
  ['Railay Beach','Krabi'],
];

function shuffle<T>(a:T[]){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function sample<T>(pool:T[],n:number,exclude:(x:T)=>boolean){const c=pool.filter(x=>!exclude(x));shuffle(c);return c.slice(0,Math.min(n,c.length));}
function insertAtRandom(opts:string[],correct:string){const i=Math.floor(Math.random()*(opts.length+1));const c=opts.slice();c.splice(i,0,correct);return{options:c,answerIndex:i};}

const out: CultureQuestion[] = [];

// Geography: region mapping for select cities
for (const c of cities){
  const mapping: Record<string,string> = {
    'Bangkok':'Central','Chiang Mai':'Northern','Chiang Rai':'Northern','Phuket':'Southern','Pattaya':'Eastern','Ayutthaya':'Central','Sukhothai':'Northern','Khon Kaen':'Northeastern (Isan)','Udon Thani':'Northeastern (Isan)','Nakhon Ratchasima':'Northeastern (Isan)'
  };
  const r = mapping[c];
  const {options,answerIndex}=insertAtRandom(sample(regions as unknown as string[],3,(x)=>x===r),r);
  out.push({topic:'geography',question:`Which region is ${c} in?`,options,answerIndex});
}

// Landmarks -> cities (sanitize)
for (const [name,city] of landmarks){
  const sanitized=name.replace(/\s*\(([^)]+)\)/g,' ').replace(/\s{2,}/g,' ').trim();
  if(new RegExp(`\\b${city}\\b`,'i').test(sanitized)) continue;
  const {options,answerIndex}=insertAtRandom(sample(cities as unknown as string[],3,(x)=>x===city),city);
  out.push({topic:'culture',question:`In which city is ${sanitized} located?`,options,answerIndex});
}

// Cuisine
const descs=dishes.map(([,d])=>d);
for (const [dish,desc] of dishes){
  const {options,answerIndex}=insertAtRandom(sample(descs,3,(d)=>d===desc),desc);
  out.push({topic:'cuisine',question:`Which description best fits the dish known as ${dish}?`,options,answerIndex});
}

// Figures
const roles=Array.from(new Set(figures.map(([,r])=>r)));
for (const [name,role] of figures){
  const {options,answerIndex}=insertAtRandom(sample(roles,3,(r)=>r===role),role);
  out.push({topic:'culture',question:`What is ${name} best known as?`,options,answerIndex});
}

// History/civics
const seeds=[
  {q:'Which ancient capital preceded Bangkok as the Siamese capital until 1767?',c:'Ayutthaya',d:['Sukhothai','Chiang Mai','Nakhon Si Thammarat'],t:'history'},
  {q:'Which script family does Thai belong to?',c:'Brahmic',d:['Latin','Arabic','Cyrillic'],t:'culture'},
  {q:'Which festival features water splashing to celebrate Thai New Year?',c:'Songkran',d:['Loy Krathong','Yi Peng','Bun Bang Fai'],t:'culture'},
  {q:'Which northern festival releases lanterns into the night sky?',c:'Yi Peng',d:['Songkran','Loy Krathong','Phi Ta Khon'],t:'culture'},
];
for (const s of seeds){ const {options,answerIndex}=insertAtRandom(s.d,s.c); out.push({topic:s.t as any,question:s.q,options,answerIndex}); }

while (out.length<135){
  const c=cities[out.length%cities.length];
  const mapping: Record<string,string> = {'Bangkok':'Central','Chiang Mai':'Northern','Chiang Rai':'Northern','Phuket':'Southern','Pattaya':'Eastern','Ayutthaya':'Central','Sukhothai':'Northern','Khon Kaen':'Northeastern (Isan)','Udon Thani':'Northeastern (Isan)','Nakhon Ratchasima':'Northeastern (Isan)'};
  const r=mapping[c];
  const {options,answerIndex}=insertAtRandom(sample(regions as unknown as string[],3,(x)=>x===r),r);
  out.push({topic:'geography',question:`Select the region for ${c}:`,options,answerIndex});
}

const unique: CultureQuestion[]=[]; const seen=new Set<string>(); for (const q of out){ if(!seen.has(q.question)){ seen.add(q.question); unique.push(q); } }

function noAnswerLeak(q: CultureQuestion){ const ans=q.options[q.answerIndex]; const qi=q.question.toLowerCase(); return !ans || !qi.includes(String(ans).toLowerCase()); }
let filtered=unique.filter(noAnswerLeak);

while (filtered.length<135){
  const c=cities[filtered.length%cities.length];
  const mapping: Record<string,string> = {'Bangkok':'Central','Chiang Mai':'Northern','Chiang Rai':'Northern','Phuket':'Southern','Pattaya':'Eastern','Ayutthaya':'Central','Sukhothai':'Northern','Khon Kaen':'Northeastern (Isan)','Udon Thani':'Northeastern (Isan)','Nakhon Ratchasima':'Northeastern (Isan)'};
  const r=mapping[c];
  const {options,answerIndex}=insertAtRandom(sample(regions as unknown as string[],3,(x)=>x===r),r);
  const q={topic:'geography' as const,question:`Select the region for ${c}:`,options,answerIndex};
  if(noAnswerLeak(q)) filtered.push(q);
}

export const thCultureQuestions: CultureQuestion[] = filtered.slice(0,135);
