
const livros = document.querySelectorAll(".livro");

const botaoAnterior = document.getElementById("pagina-anterior");
const botaoProximo = document.getElementById("proxima-pagina");
const numeroPagina = document.querySelector(".pagina-atual");
const quantidadeLivros = document.querySelector(".quantidade-livros");

//* Configuração do paginação

//* Define quantos livros serão mostrados em cada página
const livrosPorPagina = 4;

//* Guarda qual pagina esta sendo exibida, começando na pagina 1
let paginaAtual = 1;

//* Calculando o total de página

//* Divide a quantidade total de livros pela quantidade de livros por pagina
//* Math.cell() -> arredonda o resultado para cima

//* Exemplo:
//* 10 livros / 4 por pagina = 2.5
//* Math.cell() = 2.5 arredondando para cima -> 3 paginas
const totalPaginas = Math.ceil(livros.length / livrosPorPagina)

//* Função responsavel por mostrar a pagina (atualizr os elementos)

function mostrarPagina()
{
    //* Descobre o indice do primeiro livro que deve aparecer

    //* Página 1:
    //* (1-1) * 4 = 0

    //* Página 2:
    //* (2-1) * 4 = 4

    //* livros = [1,2,3,4,5,6,7,8]
    //* Página 1 = 1,2,3,4
    //* Página 2 = 5,6,7,8
    const inicio = (paginaAtual - 1) * livrosPorPagina;

    //* Descobre ate onde os livros devek ser exibidas
    //* Página 1: inicio 0 -> fim = 0 + 4 = 4
    //* Página 2: inicio 4 -> fim = 4 + 4 = 8
    const fim = inicio + livrosPorPagina;

    //* Percorre toda lista de livros encontrados no HTML
    //* "livro" representa o elemento atual
    //* "posicao"
    livros.forEach((livro, posicao) => {

        //* inicio na pagina 1 = 0
        //* fim = 4;                                                                  

        //* Verificar se o indice/posicao do livro esta dentro e do intervalo de pagima

        if(posicao >= inicio && posicao < fim)
         //* se estiver dentro do intervalo, mostra o livro
        livros.style.display = "grid"
        
        else
        {
            //* Se nao estiver, esconde o livro
            livro.style.display = "none"
        }
     

    })

    //* Atualiza no HTML o número da pagina atual
    numeroPagina.textContent = paginaAtual;

    //* Inicialmente, consideramos "fim" como a posição do ultimo livro mostrado
    let ultimoLivro = fim;

    //* Se o valor ultrapassar a quantidade real de livros, usamos a quantidade total
    if(ultimoLivro > livros.length)
    {
        ultimoLivro = livros.length;
    }

    quantidadeLivros.textContent = 'Mostrando ${ultimoLivro} de ${livros.length} livros.'
}

//* Evento de click no botao de proxima pagina

botaoProximo.addEventListener("click", () => {

    //* So permite avancar se ainda existir uma proxima pagina
    if(paginaAtual < totalPaginas)
    {
        //* Avanca uma pagina
        //* paginaAtual = paginaAtual + 1
        paginaAtual++

        //* Atualiza os livros exibidos na tela
        mostrarPagina();
    }
})

//* Evento de click no botao de pagina anterior

botaoAnterior.addEventListener("click", () => {
    
    //* So permite voltar se nao estivermos na primeira pagina
    if(paginaAtual > 1)
    {
        //* Voltamos uma pagina
        paginaAtual--;

        //* Atualiza os livros exibidos na tela
        mostrarPagina();
    }
})

//* Quando a pagina carregar, precisamos executar a funcao de mostrar pagina uma vez para esconder os livros que nao pertencem a primeira pagina
