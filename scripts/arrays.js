let amigos = ["Bea","felps","Isa","Leo","Ceci"];
let gastoTotal;
let mediaDeGastos;
let gastosIndividuais = [25,75,30,55,45];
let relacaoMedia;

console.log("amigos (console.log):", amigos);
console.table(amigos);

console.log("Quantidade de gastos:", gastosIndividuais);

gastoTotal = (25+75+30+55+45)
console.log("o gasto total será: R$"+ gastoTotal)

mediaDeGastos = gastoTotal / amigos.length;
console.log("Média:", mediaDeGastos.toFixed(2));

