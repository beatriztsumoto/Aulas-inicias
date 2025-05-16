
let idades = [17, 21, 16, 25, 19];
let maioresDeIdades = 0;
let menoresDeIdade = 0;

// usei o for para fazer uma repetição, depois usei o if para ver se os numeros eram maior ou igual a 18.
for (let i = 0; i < idades.length; i++) {
    if (idades[i] >= 18) {
        maioresDeIdades += 1
    }
    
};
console.log(maioresDeIdades);

// usei o for para fazer uma repetição, depois usei o if para ver se os numeros eram menor ou igual a 18.
for (let i = 0; i < idades.length; i++) {
    if (idades[i] <= 18) {
        menoresDeIdade += 1
    }
    
};
console.log(menoresDeIdade);

