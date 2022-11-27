let livros = []
const endpoitDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const resposta = await fetch(endpoitDaAPI)
    livros = await resposta.json()
    console.table(livros)
    livros = aplicarDesconto(livros)
    exibirLivrosNaTela(livrosComDesconto)
}
