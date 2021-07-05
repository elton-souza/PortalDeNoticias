import acessarStorage from "./consultarStorage.js";
const validar = acessarStorage()
if(validar === null){
    const div = document.querySelector('[data-noticias]')
    const conteudo = `<p class="aviso">Não há notícias cadastradas :( <br> <a href="./pages/cadastro.html">Cadastre aqui!</a></p>`
    div.innerHTML += conteudo
}