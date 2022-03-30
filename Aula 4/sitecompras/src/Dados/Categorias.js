let categorias = [
    {
        idcategoria: 1,
        nome: "Eletrônicos"
    },
    {
        idcategoria: 2,
        nome: "Cama, mesa e banho"
    },
    {
        idcategoria: 3,
        nome: "Papelaria"
    },
    {
        idcategoria: 4,
        nome: "Higiene pessoal"
    },
];

export function getCategorias() {
    return categorias;
}

export function getCategoria(idcategoria)
{
    return categorias.find((categoria) => categoria.idcategoria===idcategoria);
}