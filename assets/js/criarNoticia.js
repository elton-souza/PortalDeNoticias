import acessarStorage from "./consultarStorage.js"

export default function novaNoticia(){
    const ntc = JSON.parse(localStorage.getItem('noticias')) || []

    const titulo = document.querySelector('[data-titulo]').value
    const noticia = document.querySelector('[data-noticia]').value
    const fonte = document.querySelector('[data-fonte]').value

    if(titulo | noticia | fonte === ""){
        const div = document.querySelector('[data-main]')
        const erro = `<p class="erro">Erro ao cadastrar notícia, tente novamente!</p>` 
        div.innerHTML += erro

    }else{
        const div = document.querySelector('[data-main]')
        const concluido = `<p class="concluido">Notícia cadastrada com sucesso!</p>`
        div.innerHTML += concluido

        const dados = {
            titulo, noticia, fonte
        }
        const novasNoticias = [...ntc, dados]
        localStorage.setItem('noticias', JSON.stringify(novasNoticias))
        acessarStorage()

    }
    
}
