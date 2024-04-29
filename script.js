
document.getElementById('titulo').innerText = 'Produtos à Venda';




const body = document.querySelector('body');
const produtoDiv = document.createElement('div');
produtoDiv.classList.add('produto');




const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Suplementos';

const produtoimg = document.createElement('img');
produtoimg.src ='suplementos-alimentares-whey-protein-1564187382412_v2_4x3.jpg'


const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Com esses suplementos você ira ficar maromba!!';

const precoProduto = document.createElement('p');
precoProduto.innerText = 'Preço: R$ 99,99';


produtoDiv.appendChild(nomeProduto);
produtoDiv.appendChild(produtoimg)
produtoDiv.appendChild(descricaoProduto);
produtoDiv.appendChild(precoProduto);

body.appendChild(produtoDiv);
