function abrirCarrinho(){
    document.getElementById('carrinho').classList.add('right-0');
    document.getElementById('carrinho').classList.remove('right-[-360px]');
}

function fecharCarrinho(){
    document.getElementById('carrinho').classList.remove('right-0');
    document.getElementById('carrinho').classList.add('right-[-360px]');
}

export function inicializarCarrinho(){
    const botaoFecharCarrinho = document.getElementById('fechar-carrinho')
    const botaoAbrirCarrinho= document.getElementById('abrir-carrinho')

    botaoFecharCarrinho.addEventListener('click',fecharCarrinho)
    botaoAbrirCarrinho.addEventListener('click',abrirCarrinho)
}

export function adicionarAoCarrinho(){
    const conteinerProdutosCarrinho = document.getElementById(`produtos-carrinho`)
    const cartaoProdutoCarrinho = 
    `<article class="flex h-28 bg-stone-200 rounded-lg relative">

    <button><i class="fa-solid fa-trash-can text-slate-400 absolute right-5 top-4 hover:text-slate-900"></i></button>

    <img src="./assets/img/product-1.jpg" class="rounded-l-lg">

    <div class="p-3 w-[200px]">
      <p class="text-slate-900 text-sm">Camisa Larga com Bolsos</p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$70</p>
    </div>

  </article>`
  conteinerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho
}