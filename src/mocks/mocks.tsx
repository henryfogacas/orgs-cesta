import logo from '../../assets/logo.png'
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const mocksCesta = {
    topo: {
        titulo: "Detalhe da cesta",
    },
    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        preco: "R$ 40,00",
    },
    botao: {
        botao: "Adicionar ao carrinho",
        popup: "Produto adicionado ao carrinho!",
        fecharPopup: "Fechar confirmação",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Abóbora",
                imagem: abobora,
            }
        ]
    }
}

export default mocksCesta;