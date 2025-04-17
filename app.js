'use strict'

//pegar dados pelos nomes sem ser id


async function getMeusContatos (){
     const url=`https://giovanna-whatsapp.onrender.com/v1/whatsapp/contatos/11987876567`
    const response = await fetch (url)
    const data = await response.json()
    console.log(data)
    return data
}

// criar contato
async function postContatos(contato){

        const meusContatos=document.getElementById('contatos')
        const CardNovo=document.createElement('div')
        CardNovo.classList.add('contato')
    
        const Perfil=document.createElement('img')
        Perfil.src=link.profile
        NovoCard.appendChild(NovoPerfil)
    
        const NovaInfo=document.createElement('div')
        NovaInfo.classList.add('info')
        NovoCard.appendChild(NovaInfo)
    
        const NovoNome=document.createElement('p')
        NovoNome.classList.add('name')
        NovoNome.textContent=`${link.name}`
        NovaInfo.appendChild(NovoNome)
    
        const NovoNumero=document.createElement('p')
        NovoNumero.textContent=`${link.description}`
        NovaInfo.appendChild(NovoNumero)
        
        NovoCard.appendChild(NovaInfo)
        contatos.appendChild(NovoCard)
    
        NovoCard.addEventListener('click', async function(){
            
            await preencherConversa(link.name)
        })
    }
