// atividade 01
let commando = "3"


switch  (commando)   {


    case  "1":
   
    console.log("Opção 1 selecionada:compra acima de R$200,00; desconto no valor de: 10%.");
   
    break;
   
    case   "2":
   
    console.log("Opção 2 selecionada: é dia de promoção, desconto aplicado no valor de: 15%");
   
    break;
   
    case "3":
   
    console.log("Opção 3 selecionada:cartao fidelidade: desconto no valor de 5% ");
   
    break;
   
    default:
   
    console.log("Opção inválida. Por favor, escolha uma opção válida.");
   
    break;
}

// Atividade 02
let idade = 19;
let passouExameTeórico = true;
let passouExamePrático = false;

if (idade >=18) {
    console.log("Você tem idade para dirigir!!");
} else{
    console.log("Você não tem idade para poder dirigir!!");
}
    if (passouExameTeórico = true) {
        console.log("Passou no exame teórico!!");
 }
 else{
        console.log("Não passou");  
}
 if (passouExamePrático =! true){
    console.log("Passou no exame prático!!");
} else {
    console.log("Não passou no exame prático!!");
}

// Atividade 03
let idade1 = 27;
let temCartãoDeDesconto = true;
let ehFeriado = false;
let precoIngresso;

if (idade1 <=10) {
    precoIngresso = 20;
    console.log("entrada permitida! valor: R$20,00");
} if (idade1>= 60) {
    precoIngresso = 25
    console.log("entrada permitida!Valor: R$25,00");
} else {
    precoIngresso = 40;
    console.log("Entrada permitida!Valor: R$ 40,00");
}
   if (ehFeriado){
    let acressimo = precoIngresso * 0.2
    precoIngresso += acressimo;
    console.log(`Acréscimo de 20% por ser feriado: +$${acressimo.toFixed(2)}`);
   }
   if (temCartãoDeDesconto){
    let desconto = precoIngresso *0.15;
    precoIngresso -= desconto;
    console.log(`Desconto de 15% por ter cartão: -R$${desconto.toFixed(2)}`);
   }

// Atividade 04
let idade2=16;
let classificaçãoDoFlime =16;
let acompanhadoPorResponsavel = false
let temIngresso= true


if (!temIngresso) {
    console.log("Acesso negado: precisa ter ingresso!!");
   
} else {
    if (idade2 >=classificaçãoDoFlime) {
        console.log("Acesso permitido, pode ver o filme!!");
       
    } else{
        if (acompanhadoPorResponsavel && idade2 >= classificaçãoDoFlime -3){
            console.log("Acesso permitido com resposavel.");
           
        }else{
            console.log("Acesso negado: idade insuficiente!");
           
        }
    }
}

// Atividade 05
let pontosbase = 100;
let nivelDeDificudades = 4;
let completouEmTempoRecorde = false;
let ColetouTodosItens = true;
let alld
let alli
let allr

if (nivelDeDificudades){
    alld = pontosbase * nivelDeDificudades
    console.log(alld);
}
if (completouEmTempoRecorde = true){
    allr = alld *2
    console.log(allr);
}
if (ColetouTodosItens){
    alli = allr + 150
}
console.log(`Seus pontos foram ${alli}`);



 
