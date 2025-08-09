import type { VocabPair } from './vocab';

// Mexican Spanish vocabulary, aggregated and deduplicated, capped at 300
const basics: VocabPair[] = [
  { ca: 'hola', en: 'hello' },
  { ca: '¿qué tal?', en: 'how are you?' },
  { ca: 'adiós', en: 'goodbye' },
  { ca: 'por favor', en: 'please' },
  { ca: 'gracias', en: 'thank you' },
  { ca: 'de nada', en: 'you are welcome' },
  { ca: 'lo siento', en: 'sorry' },
];

const family: VocabPair[] = [
  { ca: 'amigo', en: 'friend' },
  { ca: 'padre', en: 'father' },
  { ca: 'madre', en: 'mother' },
  { ca: 'hermano', en: 'brother' },
  { ca: 'hermana', en: 'sister' },
  { ca: 'abuelo', en: 'grandfather' },
  { ca: 'abuela', en: 'grandmother' },
  { ca: 'hijo', en: 'son' },
  { ca: 'hija', en: 'daughter' },
];

const food: VocabPair[] = [
  { ca: 'agua', en: 'water' },
  { ca: 'pan', en: 'bread' },
  { ca: 'vino', en: 'wine' },
  { ca: 'cerveza', en: 'beer' },
  { ca: 'café', en: 'coffee' },
  { ca: 'té', en: 'tea' },
  { ca: 'leche', en: 'milk' },
  { ca: 'queso', en: 'cheese' },
  { ca: 'mantequilla', en: 'butter' },
  { ca: 'huevo', en: 'egg' },
  { ca: 'sal', en: 'salt' },
  { ca: 'azúcar', en: 'sugar' },
  { ca: 'pescado', en: 'fish' },
  { ca: 'carne', en: 'meat' },
  { ca: 'pollo', en: 'chicken' },
  { ca: 'arroz', en: 'rice' },
  { ca: 'aceite', en: 'oil' },
  { ca: 'vinagre', en: 'vinegar' },
  { ca: 'manzana', en: 'apple' },
  { ca: 'pera', en: 'pear' },
  { ca: 'naranja', en: 'orange' },
  { ca: 'limón', en: 'lemon' },
  { ca: 'plátano', en: 'banana' },
  { ca: 'uvas', en: 'grapes' },
  { ca: 'tomate', en: 'tomato' },
  { ca: 'patata', en: 'potato' },
  { ca: 'cebolla', en: 'onion' },
  { ca: 'ajo', en: 'garlic' },
  { ca: 'zanahoria', en: 'carrot' },
  { ca: 'lechuga', en: 'lettuce' },
  { ca: 'ensalada', en: 'salad' },
  { ca: 'sopa', en: 'soup' },
  { ca: 'desayuno', en: 'breakfast' },
  { ca: 'comida', en: 'lunch' },
  { ca: 'cena', en: 'dinner' },
];

const transport: VocabPair[] = [
  { ca: 'coche', en: 'car' },
  { ca: 'camión', en: 'bus' },
  { ca: 'metro', en: 'subway' },
  { ca: 'tren', en: 'train' },
  { ca: 'avión', en: 'plane' },
  { ca: 'barco', en: 'ship' },
  { ca: 'bicicleta', en: 'bicycle' },
  { ca: 'moto', en: 'motorbike' },
  { ca: 'taxi', en: 'taxi' },
  { ca: 'boleto', en: 'ticket' },
];

const colors: VocabPair[] = [
  { ca: 'azul', en: 'blue' },
  { ca: 'rojo', en: 'red' },
  { ca: 'verde', en: 'green' },
  { ca: 'amarillo', en: 'yellow' },
  { ca: 'negro', en: 'black' },
  { ca: 'blanco', en: 'white' },
  { ca: 'naranja', en: 'orange (color)' },
  { ca: 'rosa', en: 'pink' },
  { ca: 'morado', en: 'purple' },
  { ca: 'marrón', en: 'brown' },
  { ca: 'gris', en: 'gray' },
];

const more: VocabPair[] = [
  { ca: 'ciudad', en: 'city' },
  { ca: 'pueblo', en: 'town' },
  { ca: 'vecindario', en: 'neighborhood' },
  { ca: 'calle', en: 'street' },
  { ca: 'plaza', en: 'square' },
  { ca: 'tienda', en: 'shop' },
  { ca: 'mercado', en: 'market' },
  { ca: 'restaurante', en: 'restaurant' },
  { ca: 'escuela', en: 'school' },
  { ca: 'universidad', en: 'university' },
  { ca: 'trabajo', en: 'work' },
  { ca: 'oficina', en: 'office' },
  { ca: 'biblioteca', en: 'library' },
  { ca: 'farmacia', en: 'pharmacy' },
  { ca: 'estación', en: 'station' },
  { ca: 'parque', en: 'park' },
  { ca: 'playa', en: 'beach' },
  { ca: 'museo', en: 'museum' },

  { ca: 'libro', en: 'book' },
  { ca: 'cuaderno', en: 'notebook' },
  { ca: 'papel', en: 'paper' },
  { ca: 'lápiz', en: 'pencil' },
  { ca: 'bolígrafo', en: 'pen' },
  { ca: 'goma', en: 'eraser' },
  { ca: 'computadora', en: 'computer' },
  { ca: 'teclado', en: 'keyboard' },
  { ca: 'ratón', en: 'mouse' },
  { ca: 'pantalla', en: 'screen' },
  { ca: 'impresora', en: 'printer' },
  { ca: 'correo electrónico', en: 'email' },
];

const nums: VocabPair[] = ([
  ['cero','zero'],['uno','one'],['dos','two'],['tres','three'],['cuatro','four'],['cinco','five'],['seis','six'],['siete','seven'],['ocho','eight'],['nueve','nine'],['diez','ten'],
  ['once','eleven'],['doce','twelve'],['trece','thirteen'],['catorce','fourteen'],['quince','fifteen'],['dieciséis','sixteen'],['diecisiete','seventeen'],['dieciocho','eighteen'],['diecinueve','nineteen'],['veinte','twenty']
] as const).map(([ca,en]) => ({ ca, en }));

const all: VocabPair[] = [...basics, ...family, ...food, ...transport, ...colors, ...more, ...nums];
const dedup = new Map<string, VocabPair>();
for (const p of all) { const k = `${p.ca}::${p.en}`.toLowerCase(); if (!dedup.has(k)) dedup.set(k, p); }
export const mxVocabPairs: VocabPair[] = Array.from(dedup.values()).slice(0, 300);
