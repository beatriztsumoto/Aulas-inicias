let nomes = ["Bea","Felps","Isa","Leo","ceci"];
let gastos = [25,75,89,27 ,47];

console.log("gastos do grupo no fortinite");
console.table(gastos);
 
let gastoTotal = 0;
for( let i = 0; i < gastos.length; i++){
    gastoTotal += gastos[i];
}
console.log(` gasto total do grupo: R$ ${gastoTotal.toFixed(2)}`);

let mediaPorPessoa = gastoTotal / gastos.length;
console.log(`valor médio gasto por pessoa: R$ ${mediaPorPessoa.toFixed(2)}`);

console.log("comparação com a media:");
for (let i = 0; i < gastos.length; i++){
    let diferenca = gastos[i] - mediaPorPessoa;
    if (diferenca > 0) {
        console.log(`${nomes[i] } gastou R$ ${diferenca.toFixed(2) }  acima da média`);
    } else if  (diferenca < 0 ) {
        console.log(`${nomes[i] } gastou R$ ${Math.abs(diferenca).toFixed(2) } acima da média`);
    } else {
        console.log(`${nomes[i] } gastou exatamente na media`);
        
    }
}

