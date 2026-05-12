const produtos = [
    {
        nome:"Spider-man",
        preco: 299.90,
        imagem: "./src/assets/img/spiderman.webp"
    },
    {
        nome:"Batman",
        preco: 159.99,
        imagem: "./src/assets/img/batman.webp"
    },
    {
        nome:"Iron-man",
        preco: 159.99,
        imagem: "./src/assets/img/ironman.webp"
    },
    {
        nome:"Superman",
        preco: 159.99,
        imagem: "./src/assets/img/superman.webp"
    },
    
];
const secaoProdutos = document.getElementById("produtos");

produtos.forEach(produtos =>{

    const card =document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${produtos.imagem}" alt="${produtos.nome}">
        <h2>${produtos.nome}</h2>
        <p>R$ ${produtos.preco}</p>

    `;

    secaoProdutos.appendChild(card);
        
});