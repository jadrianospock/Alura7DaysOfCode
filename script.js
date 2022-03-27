
function functionOne(variavelNumber,variavelString){
    resultado = document.getElementById("resultado1")
    if ((variavelNumber == variavelString) && (variavelNumber !== variavelString)){
        resultado.innerHTML = 'As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes'
      } else {
        resultado.innerHTML = 'As variáveis numeroUm e stringUm não tem o mesmo valor'
      }
}

function functionTwo(variavelNumber,variavelString){
    resultado = document.getElementById("resultado2")
	if ( (variavelNumber == variavelString) && (variavelNumber === variavelString) ) {
        resultado.innerHTML = 'As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo'
	} else {
        resultado.innerHTML = 'As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo'
	}
}

function functionTree(variavelNumber,variavelString) {
    resultado = document.getElementById("resultado3")
	if ( (variavelNumber == variavelString) && (variavelNumber !== variavelString) ) {
        resultado.innerHTML  = 'As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes'
      } else {
        resultado.innerHTML  = 'As variáveis numeroDez e stringDez não tem o mesmo valor'
      }
}
	
