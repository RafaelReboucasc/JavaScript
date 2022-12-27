function somar(){
    var num1 = document.getElementById("valor1")
    var num2 = document.getElementById("valor2")

    var result = document.getElementById("resultado")

    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var soma = n1 + n2
    result.innerHTML = `A soma é: ${soma}`
}

function subtrair(){    
    var num1 = document.getElementById("valor1")
    var num2 = document.getElementById("valor2")

    var result = document.getElementById("resultado")

    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var sub = n1 - n2
    result.innerHTML = `A subtração é: ${sub}`
}

function dividir(){
    var num1 = document.getElementById("valor1")
    var num2 = document.getElementById("valor2")

    var result = document.getElementById("resultado")

    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    if(n1 < n2){
        result.innerHTML = `O primeiro valor é menor do que o segundo valor`
    }else{
        var div = n1/n2
        result.innerHTML = `A divisão é: ${div}`
    }
    
}

function multiplicar(){
    var num1 = document.getElementById("valor1")
    var num2 = document.getElementById("valor2")

    var result = document.getElementById("resultado")

    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var mult = n1 * n2
    result.innerHTML = `A multiplicação é: ${mult}`
}