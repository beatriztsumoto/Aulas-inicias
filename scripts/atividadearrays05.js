let visu = [1200, 850, 1100, 1350, 950];
let diaDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
 
let maisVisu = visu[0];
let diadeMaisVisu = "";

let totaldeVisu = 0;

let storiePopular = 0;

mediaDiaria = 0

for (let i = 0; i < visu.length; i++) {
    if (visu[i] > maisVisu) {
      maisVisu = visu[i];
      diadeMaisVisu = diaDaSemana[i];
    }
    totaldeVisu += visu[i];

    media = totaldeVisu / visu.length

    if (visu[i] > 1000) {
        storiePopular++;
}
}
    console.log(`O dia com mais visualizações é ${diadeMaisVisu} com ${maisVisu.toFixed(2)} visualizações`);
    console.log(`O total de visualizaçõs nesse periodo é de: ${totaldeVisu.toFixed(2)}`);
    console.log(`Stories populaes: ${storiePopular} dias`);
    console.log(`A média dos dias é ${media.toFixed(2)}`);
    
    

