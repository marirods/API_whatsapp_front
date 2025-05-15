'use strict'

//pegar dados pelos nomes sem ser id

// 11987876567`

async function listarContatos (telefone){
    const url=`https://giovanna-whatsapp.onrender.com/v1/whatsapp/contatos/${telefone}`
    const response = await fetch (url)
    const data = await response.json()
    // console.log(data)
    return data.dados_contato
}


async function listarConversas(telefone, contato){
    const url = `https://giovanna-whatsapp.onrender.com/v1/whatsapp/conversas?numero=${telefone}&contato=${encodeURIComponent(contato)}`
    const response = await fetch (url)
    const data = await response.json()
    return data.conversas[0].conversas
}


// criar contato
async function mostrarConversas(contato){
    const telefone = document.getElementById('telefone').value
    const mensagens= await listarConversas(telefone, contato)
    const chat = document.getElementById('texto-conversas')

    chat.replaceChildren()

    mensagens.forEach(mensagem => {
        const divMensagens = document.createElement('div')
        divMensagens.textContent = `${mensagem.sender} ${mensagem.content} (${mensagem.time})`
        divMensagens.classList.add("mensagem")
        divMensagens.classList.add(mensagem.sender === "me" ? "mensagem-enviada" : "mensagem-recebida")
        chat.appendChild(divMensagens)
    })
    
}

async function mostrarContatos(){
    const telefone = document.getElementById('telefone').value
    const contatos = await listarContatos(telefone)
    const grid = document.getElementById('listaConversas')

    grid.replaceChildren()

    contatos.forEach(contato => {
        const divContato = document.createElement('div')
        divContato.classList.add('contato-item')
        divContato.addEventListener('click', async () => await mostrarConversas(contato.name))

        const img = document.createElement('img')
        img.src = './img/user.png' 
        img.alt = contato.name

        const nome = document.createElement('span')
        nome.textContent = contato.name
        nome.classList.add('contato-nome')

        divContato.appendChild(img)
        divContato.appendChild(nome)
        grid.appendChild(divContato)
    })
}

document.getElementById('pesquisar').addEventListener('click', mostrarContatos)
        
    
