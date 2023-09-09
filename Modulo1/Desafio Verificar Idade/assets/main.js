function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >=0 && idade <10){
                img.setAttribute('src', 'bebe-menino.png')
                //Criança
            }else if(idade >=10 && idade<21){
                img.setAttribute('src', 'adole-menino.png')
                //Adolescente
            }else if(idade >=21 && idade<50){
                img.setAttribute('src', 'adulto-homem.png')
                //adulto
            }else{
                img.setAttribute('src', 'idoso-homem.png')
                //Idoso
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade <10){
                img.setAttribute('src', 'bebe-menina.png')
                //Criança
            }else if(idade >=10 && idade<21){
                img.setAttribute('src', 'adole-menina.png')
                //Adolescente
            }else if(idade >=21 && idade<50){
                img.setAttribute('src', 'adulto-mulher.png')
                //adulto
            }else{
                img.setAttribute('src', 'idosa-mulher.png')
                //Idoso
            }
        }
        
        res.innerHTML = `Você é ${genero}, e sua idade é ${idade} anos`
        res.appendChild(img)
    }
}