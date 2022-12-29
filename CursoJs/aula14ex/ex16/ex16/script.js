

function gerartabuada(){
    
    var num = document.getElementById('num')
    var res = document.getElementById('res')

    res.innerHTML = ``

    var n1 = Number(num.value)


    for(var i = 10; i >= 1; i--){
        var res1 = n1*i
        res.insertAdjacentHTML('afterend', `<p>${n1} x ${i} = ${res1}</p>`)
    }

}