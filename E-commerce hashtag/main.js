import { inicializarCarrinho } from "./src/menuCarrinho";


const catalogo = [
    {id: 1,
    nome: 'Camisa Larga com Bolso',
    marca: 'Zara',
    preco: 70,
    imagem: 'product-1.jpg',
    feminimo:false,
},
    {id: 2,
    nome: 'Casaco Reto com Lã',
    marca: 'Zara',
    preco: 85,
    imagem: 'product-2.jpg',
    feminimo:true,
},
    {id:3,
    nome:'Jaqueta com Efeito Camurça',
    marca: 'Zara',
    preco:60,
    imagem: 'product-3.jpg',
    feminimo:false,
},
    {id:4,
    nome:'Sobretudo com Mescla de Lã',
    marca: 'Zara',
    preco:160,
    imagem: 'product-4.jpg',
    feminimo:false,
},
    {id:5,
    nome:'Camisa Larga Acolchoada com Veludo Cotelê',
    marca: 'Zara',
    preco:110,
    imagem: 'product-5.jpg',
    feminimo:false,
},
    {id:6,
    nome:'Casaco de Lã com Botões',
    marca: 'Zara',
    preco:170,
    imagem: 'product-6.jpg',
    feminimo:true,
},
    {id:7,
    nome:'Casaco com botões',
    marca: 'Zara',
    preco:75,
    imagem: 'product-7.jpg',
    feminimo:true,
},
    {id:8,
    nome:'Colete Comprido com Cinto',
    marca: 'Zara',
    preco:88,
    imagem: 'product-8.jpg',
    feminimo:true,
},

]

for (const produtoCatalogo of catalogo){
 const cartaoProduto = 
`<div class='border-solid border-2 border-sky-500 w-48 m-3' id="card-produto-${produtoCatalogo.id}">
    <img src="./assets/img/${produtoCatalogo.imagem}" alt="" style="height: 300px;">
    
    <p class='marca'>${produtoCatalogo.marca}</p>
    <p class='nomeProduto'>${produtoCatalogo.nome}</p>
    <p class='preco'>R$${produtoCatalogo.preco}</p>
    <button class='adcBotao'>Adicionar</button>
</div>`;

document.getElementById('conteiner-produto').innerHTML += cartaoProduto
}

inicializarCarrinho()


