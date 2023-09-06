const catalogo = [
    {id: '1',
    nome: 'Camisa Larga com Bolso',
    marca: 'Zara',
    preco: 70,
    imagem: 'product-1.jpg',
    feminimo:false,
},
    {id: '2',
    nome: 'Casaco Reto com Lã',
    marca: 'Zara',
    preco: 85,
    imagem: 'product-2.jpg',
    feminimo:true,
},
    {id:'3',
    nome:'Jaqueta com Efeito Camurça',
    marca: 'Zara',
    preco:60,
    imagem: 'product-3.jpg',
    feminimo:false,
},
    {id:'4',
    nome:'Sobretudo com Mescla de Lã',
    marca: 'Zara',
    preco:160,
    imagem: 'product-4.jpg',
    feminimo:false,
},
    {id:'5',
    nome:'Camisa Larga Acolchoada com Veludo Cotelê',
    marca: 'Zara',
    preco:110,
    imagem: 'product-5.jpg',
    feminimo:false,
},
    {id:'6',
    nome:'Casaco de Lã com Botões',
    marca: 'Zara',
    preco:170,
    imagem: 'product-6.jpg',
    feminimo:true,
},
    {id:'7',
    nome:'Casaco com botões',
    marca: 'Zara',
    preco:75,
    imagem: 'product-7.jpg',
    feminimo:true,
},
    {id:'8',
    nome:'Colete Comprido com Cinto',
    marca: 'Zara',
    preco:88,
    imagem: 'product-8.jpg',
    feminimo:true,
},

]

function abrirCarrinho(){
    document.getElementById('carrinho').classList.add('carrinho-on');
    document.getElementById('carrinho').classList.remove('carrinho-down');
  }
  
  function fecharCarrinho(){
    document.getElementById('carrinho').classList.remove('carrinho-on');
    document.getElementById('carrinho').classList.add('carrinho-down');
  }
  
function inicializarCarrinho(){
    const botaoFecharCarrinho = document.getElementById('fechar-carrinho')
    const botaoAbrirCarrinho= document.getElementById('abrir-carrinho')
  
    botaoFecharCarrinho.addEventListener('click',fecharCarrinho)
    botaoAbrirCarrinho.addEventListener('click',abrirCarrinho)
  }

const idsProdutoCarrinhoComQuantidade = {};
 
function incrementarQuantidadeProduto(idProduto){
    idsProdutoCarrinhoComQuantidade[idProduto]++;
}

function decrementarQuantidadeProduto(idProduto){
    idsProdutoCarrinhoComQuantidade[idProduto]--;
}


function adicionarAoCarrinho(idProduto){
    if (idProduto in idsProdutoCarrinhoComQuantidade){
        incrementarQuantidadeProduto(idProduto);
        return;
        
    }else{
    idsProdutoCarrinhoComQuantidade[idProduto] = 1;

    const produto = catalogo.find(p => p.id===idProduto)

    const conteinerProdutosCarrinho = document.getElementById(`produtos-carrinho`)

    const cartaoProdutoCarrinho = 
    `<article class="produto-carrinho">
  
    <button class='lixeira-carrinho'><i class="fa-solid fa-trash-can"></i></button>
  
    <img src="./assets/img/${produto.imagem}" class="img-carrinho">
  
    <div class="texto-carrinho">
      <p class="nome-produto-carrinho">${produto.nome}</p>
      <p class="tamanho-produto-carrinho">Tamanho: M</p>
      <p class="preco-produto-carrinho">$${produto.preco}</p>
    </div>
    <div class='controle-quantidade'> 
        <button id = 'menos-item'><i class="fa-solid fa-minus"></i></button>
        <p id = 'quantidade-${produto.id}'>${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
        <button id = 'mais-item'><i class="fa-solid fa-plus"></i></button>
    </div>
  
  </article>`
  conteinerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho
    }
}




function renderizarCatalogo(){
    for (const produtoCatalogo of catalogo){
     const cartaoProduto =
    `<div class="card-produto"${produtoCatalogo.id}">

        <img class='img-produto' src="./assets/img/${produtoCatalogo.imagem}">
    
        <p class='marca'>${produtoCatalogo.marca}</p>
        <p>${produtoCatalogo.nome}</p>
        <p>R$${produtoCatalogo.preco}</p>
        <button id='adicionar-${produtoCatalogo.id}'class='adc-carrinho'>
        <i class="fa-solid fa-cart-plus"></i>
        </button>
    </div>`;
    
    document.getElementById('conteiner-produto').innerHTML += cartaoProduto
    }
    for (const produtoCatalogo of catalogo){
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id))
    }
}


renderizarCatalogo()
inicializarCarrinho()
