const produtos = [
    {
        nome: "Spider-man",
        preco: 299.90,
        imagem: "./src/assets/img/spiderman.webp"
    },
    {
        nome: "Batman",
        preco: 159.99,
        imagem: "./src/assets/img/batman.webp"
    },
    {
        nome: "Iron-man",
        preco: 139.99,
        imagem: "./src/assets/img/ironman.webp"
    },
    {
        nome: "Superman",
        preco: 359.99,
        imagem: "./src/assets/img/superman.webp"
    },
];

const secaoProdutos = document.getElementById("produtos");

produtos.forEach(produto => {

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <p>R$ ${produto.preco}</p>

        <button class="btnCarrinho">
            Adicionar ao Carrinho
        </button>
    `;

    const botao = card.querySelector(".btnCarrinho");

    botao.addEventListener("click", () => {

        let carrinho =
            JSON.parse(localStorage.getItem("carrinho")) || [];

        carrinho.push(produto);

        localStorage.setItem(
            "carrinho",
            JSON.stringify(carrinho)
        );

        alert("Produto adicionado!");
    });

    secaoProdutos.appendChild(card);

});