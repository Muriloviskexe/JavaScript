// Função de verificar
function verificar(){

    //Cria a variavel data que puxa um tipo de informação de data
    var data = new Date()

    //Cria a variavel ano que entende que ano estamos
    var ano = data.getFullYear()

    //Cria uma variavel que vai puxar o texto inserido no html
    var rano = document.getElementById('txtano')

    //Cria a variavel da div respostao onde colocaremos a solução
    var res = document.querySelector('div#res')

    // Se o ano inserido for menor que o numeral 0 ou maior que o ano que estamos dará erro
    if(rano.value.length == 0 || rano.value > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente')
    }else{
        // Cria uma variavel para a escolha de sexo no html
        var fsex = document.getElementsByName('radsex')

        // Faz o calculo de idade com o valor inserido no html e o ano em questão
        var idade = ano - Number(rano.value)
        var genero = ''

        // cria uma variavel que vai criar um elemento 'imagem' no html
        var img = document.createElement('img')
        // Adc os atribuitos id='foto' para estilização e identificação
        img.setAttribute('id', 'foto')

        // Entende que se o check do rad for 0 (primeira opção) será homem e faz os calculos de idade para responder com a imagem
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){

                img.setAttribute('src', 'bebe-menino.png')
                //Criança

            }else if(idade >=10 && idade<21){

                img.setAttribute('src', 'adole-menino.png')
                //Adolescente

            }else if(idade >=21 && idade <50){

                img.setAttribute('src', 'adulto-homem.png')
                //adulto

            }else{

                img.setAttribute('src', 'idoso-homem.png')
                //Idoso
            }
        }

        // Entende que se o check do rad for 1 (segunda opção) será mulher e faz os calculos de idade para responder com a imagem    
        
        if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){

                img.setAttribute('src', 'bebe-menina.png')
                //Criança

            }else if(idade >=10 && idade<21){

                img.setAttribute('src', 'adole-menina.png')
                //Adolescente

            }else if(idade >=21 && idade <50){

                img.setAttribute('src', 'adulto-mulher.png')
                //adulto

            }else{

                img.setAttribute('src', 'idosa-mulher.png')
                //Idoso
            }
        }
    }
    // Cria o texto dentro da div de resposta e coloca os calculos e imagem
    res.innerHTML = `Você é ${genero}, e sua idade é ${idade} anos`
    res.appendChild(img)
}