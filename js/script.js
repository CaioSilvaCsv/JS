function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if(hora != 1){
        msg.innerHTML = `<p>Agora é ${hora} horas</p>`
    }else{
        msg.innerHTML = `<p>Agora é ${hora} hora</p>`
    }

    if(hora >= 0 && hora <= 5 ){
        img.src = 'images/madrugada.png'
        document.body.style.background = '#0b3e7f'
    }else if(hora >= 6 && hora <12 ){
        img.src = 'images/manha.png'
        document.body.style.background = '#dbc9c3'
    }else if(hora >= 12 && hora < 18){
        img.src = 'images/tarde.png'
        document.body.style.background = '#91b3c8'
    }else if(hora >= 18 && hora <= 23){
        img.src = 'images/noite.png'
        document.body.style.background = '#2d1d1e'
    }else if(hora >= 24){
        msg.innerHTML = `<p>A hora ${hora} é incompatível </p>`
        img.src = 'images/erro.gif'
        document.body.style.background = 'red'
    }else{
        `<p>Error</p>`
        img.src = 'images/erro.gif'
        document.body.style.background = 'red'
    }
}

function verificar(){
    document.body.style.background = '##F3BCC8'
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0){
        alert ('ERROR! Digite um valor válido!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(idade > 0){
            if(fsex[0].checked){
                genero = 'Homem'
                if(idade >= 0 && idade <9 ){
                    //criança
                    img.setAttribute('src', 'images/m_crianca.png')
                    
                }else if(idade < 16){
                    //Adolescente
                    img.setAttribute('src', 'images/m_adolescente.png')

                }else if(idade < 50){
                    //Adulto
                    img.setAttribute('src', 'images/m_adulto.png')

                }else {
                    //idoso
                    img.setAttribute('src', 'images/m_velho.png')
                }
            }else if (fsex[1].checked){
                gênero = 'Mulher'
                if(idade >= 0 && idade <9 ){
                    //criança
                    img.setAttribute('src', 'images/f_crianca.png')

                }else if(idade < 16){
                    //Adolescente
                    img.setAttribute('src', 'images/f_adolescente.png')

                }else if(idade < 50){
                    //Adulto
                    img.setAttribute('src', 'images/f_adulta.png')

                }else {
                    //idoso
                    img.setAttribute('src', 'images/f_velha.png')

                }
            }

            if(idade==1){
                res.innerHTML = `<p> Foi detectado ${genero} com ${idade} ano`
            }else{
                res.innerHTML = `<p> Foi detectado ${genero} com ${idade} anos`
            }
            res.appendChild(img)
            
        }else{
            alert('Digite um número valido')
        }
            
        
    }
}