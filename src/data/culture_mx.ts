import type { CultureQuestion } from './culture';

const cities = ['Mexico City','Guadalajara','Monterrey','Puebla','Toluca','Tijuana','León','Querétaro','Mérida','Cancún'] as const;
const states = ['Ciudad de México','Jalisco','Nuevo León','Puebla','Estado de México','Baja California','Guanajuato','Querétaro','Yucatán','Quintana Roo','Chiapas','Hidalgo'] as const;
const dishes: Array<[string,string]> = [
  ['Tacos al pastor','Marinated pork with pineapple on tortillas'],
  ['Pozole','Hominy stew with pork or chicken'],
  ['Mole poblano','Rich sauce of chiles, spices, chocolate (Puebla)'],
  ['Chiles en nogada','Stuffed chiles with walnut sauce (seasonal)'],
  ['Tamales','Steamed masa filled with meats or vegetables'],
  ['Cochinita pibil','Achiote-marinated pork slow-roasted (Yucatán)'],
  ['Birria','Spiced stew (often goat/beef) from Jalisco'],
  ['Sopa de lima','Lime soup from Yucatán'],
  ['Aguachile','Spicy shrimp dish from the Pacific coast'],
  ['Elote','Grilled corn with mayo, cheese, chile'],
];
const figures: Array<[string,string]> = [
  ['Frida Kahlo','painter'],
  ['Diego Rivera','painter'],
  ['Octavio Paz','poet'],
  ['Sor Juana Inés de la Cruz','poet and nun'],
  ['Benito Juárez','president'],
  ['Emiliano Zapata','revolutionary leader'],
  ['Pancho Villa','revolutionary leader'],
  ['Carlos Santana','guitarist'],
  ['Elena Poniatowska','writer'],
  ['Guillermo del Toro','film director'],
];
const landmarks: Array<[string,string]> = [
  ['Teotihuacan Pyramids','Estado de México'],
  ['Chichen Itza','Yucatán'],
  ['Palenque Ruins','Chiapas'],
  ['Zócalo and Metropolitan Cathedral','Ciudad de México'],
  ['Hospicio Cabañas','Jalisco'],
  ['Templo Mayor','Ciudad de México'],
  ['Sumidero Canyon','Chiapas'],
  ['El Castillo de Chapultepec','Ciudad de México'],
];

function shuffle<T>(a:T[]){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function sample<T>(pool:T[],n:number,exclude:(x:T)=>boolean){const c=pool.filter(x=>!exclude(x));shuffle(c);return c.slice(0,Math.min(n,c.length));}
function insertAtRandom(opts:string[],correct:string){const i=Math.floor(Math.random()*(opts.length+1));const c=opts.slice();c.splice(i,0,correct);return{options:c,answerIndex:i};}

const out: CultureQuestion[] = [];

// Cities -> states
for (const city of cities){
  const mapping: Record<string,string> = { 'Mexico City':'Ciudad de México','Guadalajara':'Jalisco','Monterrey':'Nuevo León','Puebla':'Puebla','Toluca':'Estado de México','Tijuana':'Baja California','León':'Guanajuato','Querétaro':'Querétaro','Mérida':'Yucatán','Cancún':'Quintana Roo' };
  const st = mapping[city];
  const {options,answerIndex}=insertAtRandom(sample(states as unknown as string[],3,(s)=>s===st),st);
  out.push({topic:'geography',question:`Which state contains the city of ${city}?`,options,answerIndex});
}

// Landmarks -> states (sanitize names)
for (const [name, st] of landmarks){
  const sanitized=name.replace(/\s*\(([^)]+)\)/g,' ').replace(/\s{2,}/g,' ').trim();
  if(new RegExp(`\\b${st}\\b`,'i').test(sanitized)) continue;
  const {options,answerIndex}=insertAtRandom(sample(states as unknown as string[],3,(s)=>s===st),st);
  out.push({topic:'culture',question:`In which state is ${sanitized} located?`,options,answerIndex});
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
  {q:'Which event began in 1910 leading to major social changes?',c:'Mexican Revolution',d:['Cristero War','War of Reform','Texas Revolution'],t:'history'},
  {q:'Which agreement in 1994 created a trade bloc including Mexico?',c:'NAFTA',d:['Mercosur','USMCA','CAFTA-DR'],t:'history'},
  {q:'Which pre-Columbian civilization built Chichen Itza?',c:'Maya',d:['Aztec','Olmec','Toltec'],t:'culture'},
  {q:'Which independence leader is called the Father of the Nation?',c:'Miguel Hidalgo y Costilla',d:['José María Morelos','Agustín de Iturbide','Benito Juárez'],t:'history'},
];
for (const s of seeds){const {options,answerIndex}=insertAtRandom(s.d,s.c); out.push({topic:s.t as any,question:s.q,options,answerIndex});}

while (out.length<135){
  const city=cities[out.length%cities.length];
  const mapping: Record<string,string> = { 'Mexico City':'Ciudad de México','Guadalajara':'Jalisco','Monterrey':'Nuevo León','Puebla':'Puebla','Toluca':'Estado de México','Tijuana':'Baja California','León':'Guanajuato','Querétaro':'Querétaro','Mérida':'Yucatán','Cancún':'Quintana Roo' };
  const st=mapping[city];
  const {options,answerIndex}=insertAtRandom(sample(states as unknown as string[],3,(s)=>s===st),st);
  out.push({topic:'geography',question:`Select the state for ${city}:`,options,answerIndex});
}

const unique: CultureQuestion[]=[]; const seen=new Set<string>(); for (const q of out){ if(!seen.has(q.question)){ seen.add(q.question); unique.push(q); } }

function noAnswerLeak(q: CultureQuestion){ const ans=q.options[q.answerIndex]; const qi=q.question.toLowerCase(); return !ans || !qi.includes(String(ans).toLowerCase()); }
let filtered=unique.filter(noAnswerLeak);

while (filtered.length<135){
  const city=cities[filtered.length%cities.length];
  const mapping: Record<string,string> = { 'Mexico City':'Ciudad de México','Guadalajara':'Jalisco','Monterrey':'Nuevo León','Puebla':'Puebla','Toluca':'Estado de México','Tijuana':'Baja California','León':'Guanajuato','Querétaro':'Querétaro','Mérida':'Yucatán','Cancún':'Quintana Roo' };
  const st=mapping[city];
  const {options,answerIndex}=insertAtRandom(sample(states as unknown as string[],3,(s)=>s===st),st);
  const q={topic:'geography' as const,question:`Select the state for ${city}:`,options,answerIndex};
  if(noAnswerLeak(q)) filtered.push(q);
}

export const mxCultureQuestions: CultureQuestion[] = filtered.slice(0,135);
