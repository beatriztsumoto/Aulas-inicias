/*Você está gerenciando sua conta do Instagram e quer analisar o desempenho dos seus
stories nos últimos 5 dias. Você anotou o número de visualizações de cada story:

[1200, 850, 1100, 1350, 950] // Segunda a Sexta

No story de quinta-feira você fez uma enquete sobre um novo corte de cabelo, o que
pode explicar o aumento nas visualizações.

Desenvolva um programa que:
1. Encontre o dia com mais visualizações e qual foi esse dia (2 = quarta, 3 = quinta, etc.)
2. Calcule o total de visualizações no período
3. Conte quantos dias tiveram mais de 1000 visualizações (considerados "stories populares")
4. Calcule a média diária de visualizações*/

const views = [1200, 850, 1100, 1350, 950];
const diadaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
 
let maisViews = views[0];
let diadeMaisViews = "";

let totaldeViews = 0;

let storiePopular = 0;

mediaDiaria = 0

for (let i = 0; i < views.length; i++) {
    if (views[i] > maisViews) {
      maisViews = views[i];
      diadeMaisViews = diadaSemana[i];
    }
    totaldeViews += views[i];

    media = totaldeViews / views.length

    if (views[i] > 1000) {
        storiePopular++;
}
}
    console.log(`O dia com mais visualizações é ${diadeMaisViews} com ${maisViews} views`);
    console.log(`O total de visualizaçõs nesse periodo é de: ${totaldeViews}`);
    console.log(`Stories populaes: ${storiePopular} dias`);
    console.log(`A média dos dias é ${media.toFixed(2)}`);
    
    
    
    
