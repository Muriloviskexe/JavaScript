function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são exatamente ${hora} horas e ${minuto} minutos `

    if(hora > 0 && hora < 12){ //Bom dia
        document.body.style.backgroundColor = '#e5e58f'
        msg.innerHTML += `da manhã.`
        msg.innerHTML += `<br> Bom dia`
        img.innerHTML = `<img src="imgs/manha.png" >`
    } else if(hora >=12 && hora < 18){ //Boa tarde
        document.body.style.backgroundColor = '#ce7019'
        msg.innerHTML += `da tarde.`
        msg.innerHTML += ` <br> Boa tarde`
        img.innerHTML = `<img src="imgs/tarde.png" >`
    }else if(hora >=18 && hora < 24){ //Boa noite
        msg.innerHTML += `da noite.`
        document.body.style.backgroundColor = '#090f50'
        msg.innerHTML += ` <br> Boa noite`
        img.innerHTML = `<img src="imgs/noite.png" >`
    }
}