let userInput = prompt("você que comer uma coxinha: [S] / [N]").toUpperCase()
let soma =0

while(userInput !== "N"){
  userInput =  prompt("você que comer mais  uma coxinha: [S] / [N]").toUpperCase()
  soma = soma +2.50

}
console.log("O valor gasto em coxinha é R$:",soma )