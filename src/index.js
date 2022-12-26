//import { removeParents, teste } from "./efects" //importa o arquivo efects.js
import { fala } from "./jsFala" //importa o arquivo js-fala.js
//import { generateColor } from "./efects" //importa o arquivo effects.js
import Cookies from "js-cookie";

function pegarTag(tag) {
    this.element = document.querySelectorAll(tag);
    this.element.forEach(function (item) {//para cada item da lista
        let s = item.parentElement.firstElementChild//pega o primeiro elemento do pai
        let x = item.parentElement.lastElementChild//pega o ultimo elemento do pai
        s.onmouseover = function () {
            fala(item.innerText,Cookies.get('bandeira'))//fala o texto do item
        }
        x.onclick = function () {
            x.parentElement.remove()//remove o item
        }
    })
}

$(document).ready(function () {
    //fala("Bem vindo ao sistema!")

    $(".start").click(function () {
        const mensagem = $('#msg').val()
        const lista = $('#lista')
        if (mensagem != "") {
            lista.append(
            `<span class="lista-msg">
            <div id="icon-play">🗣️</div>
            <p id="x-msg" >${mensagem}</p>
            <h4 id="trash">🗑️</h4>
            </span>`)
        }
        pegarTag("p")
        fala(mensagem,Cookies.get('bandeira'))
    });

    $(".bandeiras").click(function (e) {
        e.preventDefault()
        let self = e.target
       self.classList.value
       Cookies.set('bandeira', self.classList.value)
       console.log(Cookies.get('bandeira'));
       $(self).toggleClass('selected')
       $(self).siblings().removeClass('selected')
        })
        
   


}) //fim do document ready


