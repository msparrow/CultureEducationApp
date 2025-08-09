import type { VocabPair } from './vocab';

// Irish (Gaeilge) vocabulary aggregated and deduplicated, capped at 300
// We store the Irish term in the `ca` field and English in `en` to match the app's model.

const basics: VocabPair[] = [
  { ca: 'Dia duit', en: 'hello' },
  { ca: 'Haigh', en: 'hi' },
  { ca: 'Slán', en: 'goodbye' },
  { ca: 'Le do thoil', en: 'please' },
  { ca: 'Go raibh maith agat', en: 'thank you' },
  { ca: 'Fáilte romhat', en: 'you are welcome' },
  { ca: 'Gabh mo leithscéal', en: 'sorry' },
  { ca: 'Conas atá tú?', en: 'how are you?' },
  { ca: 'Tá mé go maith', en: 'I am well' },
  { ca: 'Go hiontach', en: 'great' },
  { ca: 'Go dona', en: 'bad' },
  { ca: 'Cad is ainm duit?', en: 'what is your name?' },
  { ca: 'Is mise...', en: 'I am...' },
  { ca: 'Sláinte', en: 'cheers' },
];

const familyPeople: VocabPair[] = [
  { ca: 'cara', en: 'friend' },
  { ca: 'athair', en: 'father' },
  { ca: 'máthair', en: 'mother' },
  { ca: 'deartháir', en: 'brother' },
  { ca: 'deirfiúr', en: 'sister' },
  { ca: 'seanathair', en: 'grandfather' },
  { ca: 'seanmháthair', en: 'grandmother' },
  { ca: 'mac', en: 'son' },
  { ca: 'iníon', en: 'daughter' },
  { ca: 'fear', en: 'man' },
  { ca: 'bean', en: 'woman' },
  { ca: 'buachaill', en: 'boy' },
  { ca: 'cailín', en: 'girl' },
  { ca: 'duine', en: 'person' },
];

const foodDrink: VocabPair[] = [
  { ca: 'uisce', en: 'water' },
  { ca: 'arán', en: 'bread' },
  { ca: 'fíon', en: 'wine' },
  { ca: 'beoir', en: 'beer' },
  { ca: 'caife', en: 'coffee' },
  { ca: 'tae', en: 'tea' },
  { ca: 'bainne', en: 'milk' },
  { ca: 'cáis', en: 'cheese' },
  { ca: 'im', en: 'butter' },
  { ca: 'ubh', en: 'egg' },
  { ca: 'salann', en: 'salt' },
  { ca: 'siúcra', en: 'sugar' },
  { ca: 'iasc', en: 'fish' },
  { ca: 'feoil', en: 'meat' },
  { ca: 'sicín', en: 'chicken' },
  { ca: 'rís', en: 'rice' },
  { ca: 'ola', en: 'oil' },
  { ca: 'fínéagar', en: 'vinegar' },
  { ca: 'úll', en: 'apple' },
  { ca: 'piorra', en: 'pear' },
  { ca: 'oráiste', en: 'orange' },
  { ca: 'líomóid', en: 'lemon' },
  { ca: 'banana', en: 'banana' },
  { ca: 'caora finiúna', en: 'grapes' },
  { ca: 'tráta', en: 'tomato' },
  { ca: 'práta', en: 'potato' },
  { ca: 'oinniún', en: 'onion' },
  { ca: 'gairleog', en: 'garlic' },
  { ca: 'meacan dearg', en: 'carrot' },
  { ca: 'leitís', en: 'lettuce' },
  { ca: 'sailéad', en: 'salad' },
  { ca: 'anraith', en: 'soup' },
  { ca: 'bricfeasta', en: 'breakfast' },
  { ca: 'lón', en: 'lunch' },
  { ca: 'dinnéar', en: 'dinner' },
];

const houseFurniture: VocabPair[] = [
  { ca: 'teach', en: 'house' },
  { ca: 'árasán', en: 'apartment' },
  { ca: 'seomra', en: 'room' },
  { ca: 'cistin', en: 'kitchen' },
  { ca: 'seomra folctha', en: 'bathroom' },
  { ca: 'seomra suí', en: 'living room' },
  { ca: 'leaba', en: 'bed' },
  { ca: 'tolg', en: 'sofa' },
  { ca: 'bórd', en: 'table' },
  { ca: 'cathaoir', en: 'chair' },
  { ca: 'vardrús', en: 'wardrobe' },
  { ca: 'doras', en: 'door' },
  { ca: 'fuinneog', en: 'window' },
  { ca: 'solas', en: 'light' },
  { ca: 'eochair', en: 'key' },
];

const cityPlaces: VocabPair[] = [
  { ca: 'cathair', en: 'city' },
  { ca: 'baile beag', en: 'town' },
  { ca: 'comharsanacht', en: 'neighborhood' },
  { ca: 'sráid', en: 'street' },
  { ca: 'cearnóg', en: 'square' },
  { ca: 'siopa', en: 'shop' },
  { ca: 'margadh', en: 'market' },
  { ca: 'bialann', en: 'restaurant' },
  { ca: 'scoil', en: 'school' },
  { ca: 'ollscoil', en: 'university' },
  { ca: 'obair', en: 'work' },
  { ca: 'oifig', en: 'office' },
  { ca: 'leabharlann', en: 'library' },
  { ca: 'cógaslann', en: 'pharmacy' },
  { ca: 'stáisiún', en: 'station' },
  { ca: 'páirc', en: 'park' },
  { ca: 'trá', en: 'beach' },
  { ca: 'músaem', en: 'museum' },
];

const transport: VocabPair[] = [
  { ca: 'carr', en: 'car' },
  { ca: 'bus', en: 'bus' },
  { ca: 'fobhealach', en: 'subway' },
  { ca: 'traein', en: 'train' },
  { ca: 'eitleán', en: 'plane' },
  { ca: 'long', en: 'ship' },
  { ca: 'rothar', en: 'bicycle' },
  { ca: 'gluaisrothar', en: 'motorbike' },
  { ca: 'tacsai', en: 'taxi' },
  { ca: 'ticéad', en: 'ticket' },
];

const colors: VocabPair[] = [
  { ca: 'gorm', en: 'blue' },
  { ca: 'dearg', en: 'red' },
  { ca: 'glas', en: 'green' },
  { ca: 'buí', en: 'yellow' },
  { ca: 'dubh', en: 'black' },
  { ca: 'bán', en: 'white' },
  { ca: 'oráiste', en: 'orange (color)' },
  { ca: 'bándearg', en: 'pink' },
  { ca: 'corcra', en: 'purple' },
  { ca: 'donn', en: 'brown' },
  { ca: 'liath', en: 'gray' },
];

const adjectives: VocabPair[] = [
  { ca: 'mór', en: 'big' },
  { ca: 'beag', en: 'small' },
  { ca: 'fada', en: 'long' },
  { ca: 'gearr', en: 'short' },
  { ca: 'ard', en: 'tall' },
  { ca: 'íseal', en: 'short (height)' },
  { ca: 'nua', en: 'new' },
  { ca: 'sean', en: 'old' },
  { ca: 'maith', en: 'good' },
  { ca: 'olc', en: 'bad' },
  { ca: 'álainn', en: 'beautiful' },
  { ca: 'gránna', en: 'ugly' },
  { ca: 'daor', en: 'expensive' },
  { ca: 'saor', en: 'cheap' },
  { ca: 'éasca', en: 'easy' },
  { ca: 'deacair', en: 'difficult' },
  { ca: 'sona', en: 'happy' },
  { ca: 'brónach', en: 'sad' },
  { ca: 'tuirseach', en: 'tired' },
  { ca: 'tinn', en: 'sick' },
  { ca: 'neirbhíseach', en: 'nervous' },
  { ca: 'áthasach', en: 'cheerful' },
  { ca: 'ciúin', en: 'calm' },
];

const verbs: VocabPair[] = [
  { ca: 'bí', en: 'to be' },
  { ca: 'bí (agat)', en: 'to have' },
  { ca: 'déan', en: 'to do' },
  { ca: 'téigh', en: 'to go' },
  { ca: 'tar', en: 'to come' },
  { ca: 'tabhair', en: 'to bring/give' },
  { ca: 'tóg', en: 'to take' },
  { ca: 'abair', en: 'to say' },
  { ca: 'smaoinigh', en: 'to think' },
  { ca: 'bí ar eolas', en: 'to know (fact)' },
  { ca: 'aithin', en: 'to know (someone/place)' },
  { ca: 'teastaigh', en: 'to want' },
  { ca: 'féidir', en: 'can / to be able' },
  { ca: 'teastaigh (ó)', en: 'to need' },
  { ca: 'is maith liom', en: 'to like' },
  { ca: 'grá', en: 'to love' },
  { ca: 'imirt', en: 'to play (a game)' },
  { ca: 'seinn', en: 'to play (music)' },
  { ca: 'foghlaim', en: 'to learn' },
  { ca: 'múin', en: 'to teach' },
  { ca: 'cabhraigh', en: 'to help' },
  { ca: 'fiafraigh', en: 'to ask' },
  { ca: 'freagair', en: 'to answer' },
  { ca: 'léigh', en: 'to read' },
  { ca: 'scríobh', en: 'to write' },
  { ca: 'éist', en: 'to listen' },
  { ca: 'labhair', en: 'to speak' },
  { ca: 'féach', en: 'to look' },
  { ca: 'feic', en: 'to see' },
  { ca: 'siúil', en: 'to walk' },
  { ca: 'rith', en: 'to run' },
  { ca: 'taisteal', en: 'to travel' },
  { ca: 'tiomáin', en: 'to drive' },
  { ca: 'oscail', en: 'to open' },
  { ca: 'dún', en: 'to close' },
  { ca: 'cas air', en: 'to turn on' },
  { ca: 'múch', en: 'to turn off' },
  { ca: 'téigh isteach', en: 'to enter' },
  { ca: 'fág', en: 'to leave' },
  { ca: 'éirigh', en: 'to go up' },
  { ca: 'ísligh', en: 'to go down' },
];

const natureWeather: VocabPair[] = [
  { ca: 'farraige', en: 'sea' },
  { ca: 'sliabh', en: 'mountain' },
  { ca: 'abhainn', en: 'river' },
  { ca: 'oileán', en: 'island' },
  { ca: 'loch', en: 'lake' },
  { ca: 'foraois', en: 'forest' },
  { ca: 'trá', en: 'beach' },
  { ca: 'grian', en: 'sun' },
  { ca: 'gealach', en: 'moon' },
  { ca: 'réalta', en: 'star' },
  { ca: 'báisteach', en: 'rain' },
  { ca: 'sneachta', en: 'snow' },
  { ca: 'gaoth', en: 'wind' },
  { ca: 'scamall', en: 'cloud' },
  { ca: 'stoirm', en: 'storm' },
];

const animals: VocabPair[] = [
  { ca: 'madra', en: 'dog' },
  { ca: 'cat', en: 'cat' },
  { ca: 'éan', en: 'bird' },
  { ca: 'bó', en: 'cow' },
  { ca: 'muc', en: 'pig' },
  { ca: 'caora', en: 'sheep' },
  { ca: 'capall', en: 'horse' },
  { ca: 'coinín', en: 'rabbit' },
  { ca: 'iasc', en: 'fish (animal)' },
];

const timeCalendar: VocabPair[] = [
  { ca: 'lá', en: 'day' },
  { ca: 'oíche', en: 'night' },
  { ca: 'maidean', en: 'morning' },
  { ca: 'tráthnóna', en: 'afternoon' },
  { ca: 'tráthnóna déanach', en: 'evening' },
  { ca: 'seachtain', en: 'week' },
  { ca: 'mí', en: 'month' },
  { ca: 'bliain', en: 'year' },
  { ca: 'inniu', en: 'today' },
  { ca: 'inné', en: 'yesterday' },
  { ca: 'amárach', en: 'tomorrow' },
  { ca: 'earrach', en: 'spring' },
  { ca: 'samhradh', en: 'summer' },
  { ca: 'fómhar', en: 'autumn' },
  { ca: 'geimhreadh', en: 'winter' },
];

const clothing: VocabPair[] = [
  { ca: 'léine', en: 'shirt' },
  { ca: 't-léine', en: 't-shirt' },
  { ca: 'bríste', en: 'trousers' },
  { ca: 'sciorta', en: 'skirt' },
  { ca: 'seaicéad', en: 'jacket' },
  { ca: 'cóta', en: 'coat' },
  { ca: 'bróga', en: 'shoes' },
  { ca: 'stocaí', en: 'socks' },
  { ca: 'hata', en: 'hat' },
];

const body: VocabPair[] = [
  { ca: 'ceann', en: 'head' },
  { ca: 'aghaidh', en: 'face' },
  { ca: 'súile', en: 'eyes' },
  { ca: 'cluasa', en: 'ears' },
  { ca: 'srón', en: 'nose' },
  { ca: 'béal', en: 'mouth' },
  { ca: 'lámh', en: 'hand' },
  { ca: 'lámh (uachtair)', en: 'arm' },
  { ca: 'cos', en: 'leg' },
  { ca: 'bonn', en: 'foot' },
];

const schoolWork: VocabPair[] = [
  { ca: 'leabhar', en: 'book' },
  { ca: 'cáipéis', en: 'paper' },
  { ca: 'peann luaidhe', en: 'pencil' },
  { ca: 'peann', en: 'pen' },
  { ca: 'scriosán', en: 'eraser' },
  { ca: 'ríomhaire', en: 'computer' },
  { ca: 'méarchlár', en: 'keyboard' },
  { ca: 'luch', en: 'mouse' },
  { ca: 'scáileán', en: 'screen' },
  { ca: 'printéir', en: 'printer' },
  { ca: 'ríomhphost', en: 'email' },
];

const weekdays: VocabPair[] = [
  { ca: 'Dé Luain', en: 'Monday' },
  { ca: 'Dé Máirt', en: 'Tuesday' },
  { ca: 'Dé Céadaoin', en: 'Wednesday' },
  { ca: 'Déardaoin', en: 'Thursday' },
  { ca: 'Dé hAoine', en: 'Friday' },
  { ca: 'Dé Sathairn', en: 'Saturday' },
  { ca: 'Dé Domhnaigh', en: 'Sunday' },
];

const months: VocabPair[] = [
  { ca: 'Eanáir', en: 'January' }, { ca: 'Feabhra', en: 'February' }, { ca: 'Márta', en: 'March' }, { ca: 'Aibreán', en: 'April' }, { ca: 'Bealtaine', en: 'May' }, { ca: 'Meitheamh', en: 'June' }, { ca: 'Iúil', en: 'July' }, { ca: 'Lúnasa', en: 'August' }, { ca: 'Meán Fómhair', en: 'September' }, { ca: 'Deireadh Fómhair', en: 'October' }, { ca: 'Samhain', en: 'November' }, { ca: 'Nollaig', en: 'December' },
];

const occupations: VocabPair[] = [
  { ca: 'dochtúir', en: 'doctor' },
  { ca: 'múinteoir', en: 'teacher' },
  { ca: 'innealtóir', en: 'engineer' },
  { ca: 'cócaire', en: 'cook' },
  { ca: 'freastalaí', en: 'waiter' },
  { ca: 'feirmeoir', en: 'farmer' },
  { ca: 'iriseoir', en: 'journalist' },
  { ca: 'dlíodóir', en: 'lawyer' },
  { ca: 'aisteoir', en: 'actor' },
  { ca: 'amhránaí', en: 'singer' },
];

const household: VocabPair[] = [
  { ca: 'pláta', en: 'plate' },
  { ca: 'gloine', en: 'glass (cup)' },
  { ca: 'cupán', en: 'cup' },
  { ca: 'forc', en: 'fork' },
  { ca: 'scian', en: 'knife' },
  { ca: 'spúnóg', en: 'spoon' },
  { ca: 'friochadán', en: 'frying pan' },
  { ca: 'pota', en: 'pot' },
  { ca: 'micreathonnán', en: 'microwave' },
  { ca: 'oigheann', en: 'oven' },
  { ca: 'meaisín níocháin', en: 'washing machine' },
  { ca: 'triomadóir', en: 'dryer' },
];

const sportsMusicTechTravel: VocabPair[] = [
  { ca: 'peil Ghaelach', en: 'Gaelic football' },
  { ca: 'iománaíocht', en: 'hurling' },
  { ca: 'rugbaí', en: 'rugby' },
  { ca: 'snámh', en: 'swimming' },
  { ca: 'giotár', en: 'guitar' },
  { ca: 'feadóg stáin', en: 'tin whistle' },
  { ca: 'fiddle', en: 'fiddle' },
  { ca: 'cláirseach', en: 'harp' },
  { ca: 'app', en: 'app' },
  { ca: 'pas', en: 'passport' },
  { ca: 'mála taistil', en: 'suitcase' },
  { ca: 'léarscáil', en: 'map' },
  { ca: 'turasaí', en: 'tourist' },
];

// Numbers up to 20 + tens to 100
const numbers: VocabPair[] = ([
  ['nialas','zero'],['a haon','one'],['a dó','two'],['a trí','three'],['a ceathair','four'],['a cúig','five'],['a sé','six'],['a seacht','seven'],['a hocht','eight'],['a naoi','nine'],['deich','ten'],
  ['aon déag','eleven'],['dó dhéag','twelve'],['trí déag','thirteen'],['ceathair déag','fourteen'],['cúig déag','fifteen'],['sé déag','sixteen'],['seacht déag','seventeen'],['ocht déag','eighteen'],['naoi déag','nineteen'],['fiche','twenty'],
  ['tríocha','thirty'],['daichead','forty'],['caoga','fifty'],['seasca','sixty'],['seachtó','seventy'],['ochtó','eighty'],['nócha','ninety'],['céad','one hundred'],
] as const).map(([ca,en]) => ({ ca, en }));

const all: VocabPair[] = [
  ...basics,
  ...familyPeople,
  ...foodDrink,
  ...houseFurniture,
  ...cityPlaces,
  ...transport,
  ...colors,
  ...adjectives,
  ...verbs,
  ...natureWeather,
  ...animals,
  ...timeCalendar,
  ...clothing,
  ...body,
  ...schoolWork,
  ...weekdays,
  ...months,
  ...occupations,
  ...household,
  ...sportsMusicTechTravel,
  ...numbers,
];

// Deduplicate and cap to 300 entries
const dedup = new Map<string, VocabPair>();
for (const p of all) {
  const key = `${p.ca}::${p.en}`.toLowerCase();
  if (!dedup.has(key)) dedup.set(key, p);
}

export const ieVocabPairs: VocabPair[] = Array.from(dedup.values()).slice(0, 300);
