/*o alert serve para passar uma mensagem para quem estiver no site */
alert('Boas vindas ao jogo do número secreto'); 

let numeroMaximo = 40;

/*usamos o let quando queremos criar uma variável no JavaScript */
// o código do número secreto, serve para escolhermos um número aleatorio entre 1 e 40, parseInt serve para ter apenas uma casa decimal
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao numero secreto, o código vai continuar rodando, para isso utilizamos a tag " while "
// a tag "" != "" significa diferente
/*prompt serve para nós perguntarmos ao usuário que número ele escolherá, parecido com o "ALERT", quando terminar não se esqueça do ; */
while ( chute != numeroSecreto ) {
    chute =  prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    
    /*o IF serve para comparar uma condição, para comparar utilizamos dois iguais ==, o if é para se voce acertar a mensagem, vai aparecer um alerta dizendo que voce acertou, já o else é para caso voce errar */
    if (chute == numeroSecreto ) {
        // para PARAR O LOOP utilizamos a tag " break  "
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1; Para atribuir mais 1, utilizamos o " ++ "
        tentativas++;
    }

}


 // caso tentativas for maior do que  1, se não for maior sera a palavra tentativa
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou!, descobriu o número certo ( ${numeroSecreto} ) com ${tentativas} ${palavraTentativa} `);

// if (tentativas > 1){
// para mudarmos o nosso código na linha 5 e os demais códigos se adaptarem, utilizaremos a crase, o sinal de dinheiro e as chaves 
//      alert(`Você acertou!, descobriu o número certo ( ${numeroSecreto} ) com ${tentativas} tentativas `);
// }else {
//      alert(`Você acertou!, descobriu o número certo ( ${numeroSecreto} ) com ${tentativas} tentativa `)
// }


// parseINT serve para nos ficarmos apenas com um número inteiro e ignorar os número após a vírgula