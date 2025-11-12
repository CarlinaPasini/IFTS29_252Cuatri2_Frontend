// TPO2 – Soluciones de Strings y Arrays en JavaScript
// Autor: Carlina Pasini
// IFTS 29 – Frontend

// TPO2 – Soluciones de Strings y Arrays en JavaScript
// Ejecutar con: node soluciones.js

// 1) Área del rectángulo (retorna valor)
function calcularAreaRectangulo(largo, ancho) {
  if (typeof largo !== 'number' || typeof ancho !== 'number') throw new TypeError('Parámetros numéricos requeridos');
  return largo * ancho;
}
console.log('1) Área (5 x 3):', calcularAreaRectangulo(5, 3));

// 2) Contar palabras en una cadena
function contarPalabras(cadena = '') {
  if (typeof cadena !== 'string') throw new TypeError('Se esperaba un string');
  const tokens = cadena.trim().split(/\s+/).filter(Boolean);
  return tokens.length;
}
console.log('2) Palabras:', contarPalabras('Humahuaca es un lugar copado'));

// 3) Contar vocales (incluye tildes y diéresis)
function contarVocales(cadena = '') {
  if (typeof cadena !== 'string') throw new TypeError('Se esperaba un string');
  const matches = cadena.toLowerCase().match(/[aeiouáéíóúü]/g);
  return matches ? matches.length : 0;
}
console.log('3) Vocales (JavaScript):', contarVocales('JavaScript'));

// 4) Palíndromo (ignora espacios/acentos)
function normalizar(cadena = '') {
  return cadena
    .toLowerCase()
    .normalize('NFD')              // separa tildes
    .replace(/[\u0300-\u036f]/g, '') // quita tildes
    .replace(/[^a-z0-9]/g, '');      // deja solo alfanum
}
function esPalindromo(cadena = '') {
  const n = normalizar(cadena);
  return n === n.split('').reverse().join('');
}
console.log('4) Palíndromo "neuquen":', esPalindromo('neuquen'));

// 5) Edad canina (mostrar por consola, 7x)
function edadCanina(edadHumana) {
  if (typeof edadHumana !== 'number' || !isFinite(edadHumana)) throw new TypeError('Edad numérica requerida');
  const edad = Math.max(0, Math.floor(edadHumana));
  console.log(`5) Tu perro tiene ${edad * 7} años humanos`);
}
edadCanina(7);

// Variante navegador con prompt (si existe)
function edadCaninaFromPrompt() {
  if (typeof window === 'undefined' || typeof prompt === 'undefined') {
    console.log('5) Prompt no disponible fuera del navegador.');
    return;
  }
  const valor = Number(prompt('Ingresá la edad de tu perro (en años):'));
  if (Number.isNaN(valor)) console.log('Valor inválido.');
  else console.log(`Tu perro tiene ${Math.floor(valor) * 7} años humanos`);
}

// 6) Capitalizar primera letra de cada palabra
function capitalizarPalabras(cadena = '') {
  return cadena
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map(p => p[0].toUpperCase() + p.slice(1))
    .join(' ');
}
console.log('6) Capitalizar:', capitalizarPalabras('hola mundo desde javascript'));

// 7) Primeros N números de Fibonacci
function fibonacci(n) {
  const N = Number(n);
  if (!Number.isInteger(N) || N < 0) throw new TypeError('n debe ser entero >= 0');
  if (N === 0) return [];
  if (N === 1) return [0];
  const arr = [0, 1];
  for (let i = 2; i < N; i++) arr.push(arr[i - 1] + arr[i - 2]);
  return arr;
}
console.log('7) Fibonacci(5):', fibonacci(5)); // [0,1,1,2,3]

// 8) Lista de Productos (forEach, map, filter, find, reduce)
const productos = [
  { id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
  { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
  { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
  { id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
  { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];

// 8.1 forEach: nombre y precio
console.log('8.1) forEach (nombre y precio):');
productos.forEach(p => console.log(`- ${p.nombre}: $${p.precio}`));

// 8.2 map: array de nombres
const nombresProductos = productos.map(p => p.nombre);
console.log('8.2) map (nombres):', nombresProductos);

// 8.3 filter: electrónicos con stock > 20
const electronicosStock = productos.filter(p => p.categoria === 'electrónica' && p.stock > 20);
console.log('8.3) filter (electrónicos stock > 20):', electronicosStock);

// 8.4 find: producto con id 3
const prodId3 = productos.find(p => p.id === 3);
console.log('8.4) find (id=3):', prodId3);

// 8.5 reduce: valor total del inventario
const totalInventario = productos.reduce((acc, p) => acc + p.precio * p.stock, 0);
console.log('8.5) reduce (valor inventario):', totalInventario);

// 9) Estudiantes y Calificaciones
const estudiantes = [
  { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
  { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
  { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
  { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];

// 9.1 forEach: nombre y edad
console.log('9.1) forEach (nombre y edad):');
estudiantes.forEach(e => console.log(`- ${e.nombre} (${e.edad} años)`));

// 9.2 map: [{ nombre, promedio }]
const promedio = arr => arr.reduce((a, b) => a + b, 0) / (arr.length || 1);
const promedios = estudiantes.map(e => ({
  nombre: e.nombre,
  promedio: Number(promedio(e.calificaciones).toFixed(2))
}));
console.log('9.2) map (nombre y promedio):', promedios);

// 9.3 filter: promedio > 7.5
const destacados = promedios.filter(e => e.promedio > 7.5).map(e => e.nombre);
console.log('9.3) filter (promedio > 7.5):', destacados);

// 9.4 find: 'María'
const maria = estudiantes.find(e => e.nombre.toLowerCase() === 'maría');
console.log('9.4) find (María):', maria);

// 9.5 reduce: edad promedio
const edadProm = estudiantes.reduce((acc, e, _, { length }) => acc + e.edad / length, 0);
console.log('9.5) reduce (edad promedio):', Number(edadProm.toFixed(2)));

// 10) Películas
const peliculas = [
  { id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
  { id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
  { id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
  { id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
  { id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];

// 10.1 forEach: título y año
console.log('10.1) forEach (título y año):');
peliculas.forEach(p => console.log(`- ${p.titulo} (${p.año})`));

// 10.2 map: títulos en mayúsculas
const titulosMayus = peliculas.map(p => p.titulo.toUpperCase());
console.log('10.2) map (títulos mayúsculas):', titulosMayus);

// 10.3 filter: dramas con rating > 8.5
const dramasTop = peliculas.filter(p => p.genero === 'drama' && p.rating > 8.5);
console.log('10.3) filter (drama rating > 8.5):', dramasTop);

// 10.4 find: película de 2014
const en2014 = peliculas.find(p => p.año === 2014);
console.log('10.4) find (año 2014):', en2014);

// 10.5 reduce: duración total
const duracionTotal = peliculas.reduce((acc, p) => acc + p.duracion, 0);
console.log('10.5) reduce (duración total):', duracionTotal, 'min');
