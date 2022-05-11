let produtos = [
    {
        codigo: 1,
        nome: "Notebook Acer A515-54-59BU", 
        imagem: "/imagens/produtos/1.jpg",
        descricao: "Notebook Acer A515-54-59BU Intel Core i5 8GB - 256GB SSD 15,6” LED Full HD IPS Windows 10",
        promocao: true,
        idcategoria: 1,
        preco: 3626.07,
    },
    {
        codigo: 2,
        nome: "iPhone 11",
        imagem: "/imagens/produtos/2.jpg",
        descricao: "iPhone 11 Apple 64GB Branco 6,1” 12MP iOS",
        promocao: false,
        idcategoria: 1,
        preco: 3999.00,
    },
    {   
        codigo: 3,
        nome: "Jogo de Toalha",
        imagem: "/imagens/produtos/3.jpg",
        descricao: "Jogo de Toalha Santista Royal Knut 4 Peças - 100% Algodão Turquesa",
        promocao: false,
        idcategoria: 2,
        preco: 116.07,
    },
    {
        codigo: 4,
        nome: "Toalha de Mesa Dohler",
        imagem: "/imagens/produtos/4.jpg",
        descricao: "Toalha de Mesa Quadrada Dohler Athenas Renda 4 Lugares 1,40m x 1,40m",
        promocao: true,
        idcategoria: 2,
        preco: 44.90,
    },
    {
        codigo: 5,
        nome: "Jogo de Lençol Multi Mix Mosaico ",
        imagem: "/imagens/produtos/5.jpg",
        descricao: "Jogo de Lençol Multi Mix Mosaico ",
        promocao: false,
        idcategoria: 2,
        preco: 149.90,
    },
    {
        codigo: 6,
        nome: "Borracha Faber Castell",
        imagem: "/imagens/produtos/6.jpg",
        descricao: "Borracha com Cinta Plastica Azul - Faber Castell",
        promocao: true,
        idcategoria: 3,
        preco: 2.50,
    },
    {
        codigo: 7,
        nome: "Borracha Record 60",
        imagem: "/imagens/produtos/7.jpg",
        descricao: "Borracha de Apagar Record 60 - Branca",
        promocao: false,
        idcategoria: 3,
        preco: 2.39,
    },
    {
        codigo: 8,
        nome: "Caderno Espiral Capa Dura",
        imagem: "/imagens/produtos/8.jpg",
        descricao: "Caderno Espiral Capa Dura Universitário 10 Matérias BLINK - 160 Folhas Mod 01",
        promocao: false,
        idcategoria: 3,
        preco: 18.47,
    },
    {
        codigo: 9,
        nome: "Caneta Meisterstuck",
        imagem: "/imagens/produtos/9.jpg",
        descricao: "Caneta Esferográfica Meisterstuck Classique Revestida em Ouro",
        promocao: true,
        idcategoria: 3,
        preco: 3150.00,
    },
    {
        codigo: 10,
        nome: "Desodorante Brut",
        imagem: "/imagens/produtos/10.jpg",
        descricao: "Desodorante Brut 283 gramas",
        promocao: true,
        idcategoria: 4,
        preco: 107.10,
    },
    {
        codigo: 11,
        nome: "Creme Dental Tandy",
        imagem: "/imagens/produtos/11.jpg",
        descricao: "Creme Dental Tandy Máxima Proteção Anticáries 90Gr",
        promocao: false,
        idcategoria: 4,
        preco: 3.09,
    },
    {
        codigo: 12,
        nome: "Desodorante para Pés",
        imagem: "/imagens/produtos/12.jpg",
        descricao: "Desodorante para Pés Tenys Pé Original 110g",
        promocao: false,
        idcategoria: 4,
        preco: 13.15,
    },
  ];
  
  export function getProdutos() {
    return produtos;
  }

  export function getProduto(codigo) {
    return produtos.find((produto) => produto.codigo === codigo);
  }

  export function getProdutosPorCategoria(idcategoria) {
    return produtos.filter(
      (produto) => produto.idcategoria === idcategoria
    );
  }

  export function getProdutosEmPromocao() {
    return produtos.filter(
      (produto) => produto.promocao === true
    );
  }
  