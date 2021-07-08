import render from "./renderizarNoticias.js"

export default function acessarStorage(){
    const noticias = JSON.parse(localStorage.getItem('noticias'))
    const div = document.querySelector('[data-noticias]')
    if(noticias == null){
        return noticias
    }else{
        noticias.forEach((noticias)=>{
            div.appendChild(render(noticias))
        })
    }
}
        