function contar(){
    var init = document.getElementById('init')
    var end = document.getElementById('end')
    var passo = document.getElementById('passo')

    var numinit = Number(init.value)
    var numend = Number(end.value)
    var numpasso = Number(passo.value)

    var resultado = document.getElementById('res')
    

    while(numinit <= numend){
        resultado.insertAdjacentHTML("beforebegin", `${numinit}👉`)
        numinit += numpasso
    }
}