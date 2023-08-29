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
    preco:60,
    imagem: 'product-3.jpg',
    feminimo:false,
},
    {id:4,
    nome:'Sobretudo com Mescla de Lã',
    preco:160,
    imagem: 'product-4.jpg',
    feminimo:false,
},
    {id:5,
    nome:'Camisa Larga Acolchoada com Veludo Cotelê',
    preco:110,
    imagem: 'product-5.jpg',
    feminimo:false,
},
    {id:6,
    nome:'Casaco de Lã com Botões',
    preco:170,
    imagem: 'product-6.jpg',
    feminimo:true,
},
    {id:7,
    nome:'Casaco com botões',
    preco:75,
    imagem: 'product-7.jpg',
    feminimo:true,
},
    {id:8,
    nome:'Colete Comprido com Cinto',
    preco:88,
    imagem: 'product-8.jpg',
    feminimo:true,
}
]

for (const produtoCatalogo of catalogo){
 const cartaoProduto = 
`<div id="card-produto-1">
    <img src="./assets/img/${produtoCatalogo.imagem}" alt="" style="height: 300px;">
    
    <p>${produtoCatalogo.marca}</p>
    <p>${produtoCatalogo.nome}</p>
    <p>R$${produtoCatalogo.preco}</p>
    <button>Adicionar</button>
</div>`;

document.getElementById('conteiner-produto').innerHTML += cartaoProduto
}




