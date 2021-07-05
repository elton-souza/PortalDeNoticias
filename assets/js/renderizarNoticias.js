export default function render({titulo,noticia,fonte}){

    const div = document.createElement('div')
    div.classList.add('noticia')

    const tituloNoticia = document.createElement('h2')
    tituloNoticia.classList.add('noticia-titulo')
    tituloNoticia.innerText = `${titulo}`

    const novaNoticia = document.createElement('p')
    novaNoticia.classList.add('noticia-descricao')
    novaNoticia.innerText = `${noticia}`

    const fonteNoticia = document.createElement('p')
    fonteNoticia.classList.add('fonte-noticia')
    fonteNoticia.innerHTML = `Fonte: <a href="${fonte}" class="noticia-link">${fonte}</a>`

    div.appendChild(tituloNoticia)
    div.appendChild(novaNoticia)
    div.appendChild(fonteNoticia)

    return div

}