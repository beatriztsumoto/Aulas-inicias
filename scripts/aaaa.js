let notas = [8.0, 6.5, 7.2, 9.0, 5.5, 7.8];
let somaProvas = 0;
let média = 0;
let aprovado = false;

console.log("Notas (console.log):", notas);
console.table(notas);

console.log("Quantidade de provas:", notas.length);

notas[notas.length] = 6.0; // Adicionando uma nota fixa
console.log("Nova nota adicionada:", notas[notas.length - 1]);
console.log("Nova quantidade de provas:", notas.length);

for (let i = 0; i < notas.length; i++) {
  somaProvas += notas[i];
}

média = somaProvas / notas.length;
console.log("Média:", média.toFixed(2));

if (média >= 7.0) {
  aprovado = true;
  console.log("Parabéns, você passou de ano!");
} else {
  console.log("Infelizmente, você não passou de ano. Tente novamente!");
}