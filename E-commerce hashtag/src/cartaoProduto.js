import { catalogo } from "./utilidades";

export function renderizarCatalogo(){
    for (const produtoCatalogo of catalogo){
     const cartaoProduto =
    `<div class='border-solid border-2 border-sky-500 w-48 m-3 flex flex-col p-2 justify-between group' id="card-produto-${produtoCatalogo.id}">

        <img class='hover:scale-110 duration-300' src="./assets/img/${produtoCatalogo.imagem}">
    
        <p class='marca'>${produtoCatalogo.marca}</p>
        <p>${produtoCatalogo.nome}</p>
        <p>R$${produtoCatalogo.preco}</p>
        <button class='bg-stone-950 hover:scale-110 text-slate-100'>
        <i class="fa-solid fa-cart-plus"></i>
        </button>
    </div>`;
    
    document.getElementById('conteiner-produto').innerHTML += cartaoProduto
    }}
