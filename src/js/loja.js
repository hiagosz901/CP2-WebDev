const carrinho =
    JSON.parse(localStorage.getItem("carrinho")) || [];

const secaoCarrinho =
    document.getElementById("carrinho");

const totalElemento =
    document.getElementById("total");

const botaoDesconto =
    document.getElementById("desconto");

carrinho.forEach(produto => {

    const item = document.createElement("div");

    item.innerHTML = `
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco}</p>
    `;

    secaoCarrinho.appendChild(item);

});

let total = carrinho.reduce((acumulador, produto) => {
    return acumulador + produto.preco;
}, 0);

totalElemento.textContent =
    `Total: R$ ${total.toFixed(2)}`;

botaoDesconto.addEventListener("click", () => {

    let totalComDesconto = total * 0.9;

    totalElemento.textContent =
        `Total com desconto: R$ ${totalComDesconto.toFixed(2)}`;

});