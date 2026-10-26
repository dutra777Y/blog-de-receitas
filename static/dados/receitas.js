const receitas = [
{
    id: 1,
    nome: "Bolo de Chocolate",
    descricao: "Bolo com cobertura de chocolate.",
    imagem: "imagens/bolo.jpeg",
    categoria: "Doces",
    tempo: "45 minutos",
    dificuldade: "Fácil",

    ingredientes: [
        "2 xícaras de farinha de trigo",
        "1 xicara de acucar",
        "1 xícara de chocolate em pó",
        "3 ovos",
        "1 xícara de leite",
        "1 colher de fermento"
    ],

    preparo: [
        "Misture os ovos e o acucar.",
        "Adicione o leite.",
        "Acrescente a farinha e o chocolate em po.",
        "Adicione o fermento e misture.",
        "Coloque a massa em uma forma untada.",
        "Leve ao forno até assar."
    ]
},

{
    id: 2,
    nome: "Lasanha",
    descricao: "Lasanha com carne e queijo.",
    imagem: "imagens/lasanha.jpeg",
    categoria: "Massas",
    tempo: "1 hora",
    dificuldade: "Médio",

    ingredientes: [
        "Massa para lasanha",
        "500g de carne moída",
        "Molho de tomate",
        "300g de queijo",
        "200g de presunto",
        "Sal a gosto"
    ],

    preparo: [
        "Cozinhe a carne moída.",
        "Adicione  molho de tomate.",
        "Coloque uma camada de molho em uma forma.",
        "Faça camadas de massa, carne, e queijo.",
        "Finalize com queijo.",
        "Leve ao forno pra gratinar."
    ]
},

{
    id: 3,
    nome: "Salada Caesar",
    descricao: "Uma salada.",
    imagem: "imagens/salada.jpeg",
    categoria: "Saladas",
    tempo: "20 minutos",
    dificuldade: "Fácil",

    ingredientes: [
        "Alface",
        "Frango grelhado",
        "Queijo parmesão",
        "",
        "Molho Caesar"
    ],

    preparo: [
        "Lave e corte a alface.",
        "Corte o frango grelhado em pedaços.",
        "Coloque a alface e o frango em uma tigela.",
        "Adicione o parmesão.",
        "Finalize com o molho caesar."
    ]
},

{
    id: 4,
    nome: "Panqueca de Carne",
    descricao: "Panquecas recheadas com carne.",
    imagem: "imagens/panqueca.jpeg",
    categoria: "Massas",
    tempo: "40 minutos",
    dificuldade: "Médio",

    ingredientes: [
        "1 xícara de farinha",
        "1 xícara de leite",
        "1 ovo",
        "300g de carne moída",
        "Molho de tomate",
        "Sal a gosto"
    ],

    preparo: [
        "Misture a farinha o leit o ovo.",
        "Prepare as panquecas em uma frigideira.",
        "Refogue a carne mooda.",
        "Recheie as panquecas com a carne.",
        "Cubra com molho de tomate.",
        "Leve ao forno por alguns minutos."
    ]
},

{
    id: 5,
    nome: "Pizza",
    descricao: "Pizza com molho de tomate e queijo.",
    imagem: "imagens/pizza.jpeg",
    categoria: "Massas",
    tempo: "50 minutos",
    dificuldade: "Médio",

    ingredientes: [
        "2 xicaras de farinha de trigo",
        "1 colher de fermento",
        "Água morna",
        "Molho de tomate",
        "300g de queijo",
        "Tomate e orégano"
    ],

    preparo: [
        "Misture a farinha, o fermento e a agua.",
        "Amasse até formar uma massa.",
        "Abra a massa em uma forma.",
        "Espelhe o molho de tomate.",
        "Adicione o queijo, tomate e orégano.",
        "Leve ao forno ate o queijo derreter."
    ]
},

{
    id: 6,
    nome: "Hambúrguer",
    descricao: "Hambúrguer preparado com ingredientes frescos.",
    imagem: "imagens/hamburguer.jpeg",
    categoria: "Carnes",
    tempo: "30 minutos",
    dificuldade: "Fácil",

    ingredientes: [
        "Pão de hamburguer",
        "200g de carne moida",
        "Queijo",
        "Alface",
        "Tomate",
        "Molho de sua preferência"
    ],

    preparo: [
        "Modele a carne no formato de hamburguer.",
        "frite a carne dos dois lados.",
        "Coloque o queijo em cima da carne.",
        "Abra o pão e adicione o molho.",
        "Coloque a carne, alface e tomate.",
        "Feche o hamburguer e sirva."
    ]
},

{
    id: 7,
    nome: "Suco Natural",
    descricao: "Bebida preparada com frutas frescas.",
    imagem: "imagens/suco.jpeg",
    categoria: "Bebidas",
    tempo: "10 minutos",
    dificuldade: "Fácil",

    ingredientes: [
        "3 laranjas",
        "500ml de água",
        "Gelo",
        "Açúcar a gosto"
    ],

    preparo: [
        "Esprema as laranjas.",
        "Coloque o suco no liquidificador.",
        "Adicione a agua e o acucar.",
        "Bata por alguns segundos.",
        "Adicione gelo e sirva."
    ]
},

{
    id: 8,
    nome: "Strogonoff de Frango",
    descricao: "Strogonoff servido com arroz e batata palha.",
    imagem: "imagens/strogonoff.jpeg",
    categoria: "Carnes",
    tempo: "35 minutos",
    dificuldade: "Medio",

    ingredientes: [
        "500g de peito de frango",
        "1 caixa de creme de leite",
        "Molho de tomate",
        "Cebola",
        "Sal a gosto",
        "Batata palha"
    ],

    preparo: [
        "Corte o frango em pedacos.",
        "Refogue a cebola e o frango.",
        "Adicione o molho de tomate.",
        "Acrescente o creme de leite.",
        "Misture e deixe cozinhar alguns minutos.",
        "Sirva com arroz e batata palha."
    ]
},

{
    id: 9,
    nome: "Pudim de Leite",
    descricao: "Pudim coberto com calda de caramelo.",
    imagem: "imagens/pudim.jpeg",
    categoria: "Doces",
    tempo: "1 hora",
    dificuldade: "Médio",

    ingredientes: [
        "1 lata de leite condensado",
        "2 medidas de leite",
        "3 ovos",
        "1 xícara de açúcar"
    ],

    preparo: [
        "Derreta o acucar para fazer a calda.",
        "Espalhe a calda na forma.",
        "Bata o leite condensado, leite e ovos.",
        "Coloque a mistura na forma.",
        "Asse em banho maria.",
        "Espere esfriar e desenforme."
    ]
},

{
    id: 10,
    nome: "Torta de Frango",
    descricao: "Torta com recheio de frango.",
    imagem: "imagens/torta.jpeg",
    categoria: "Salgados",
    tempo: "50 minutos",
    dificuldade: "Médio",

    ingredientes: [
        "2 xícaras de farinha",
        "2 ovos",
        "1 xícara de leite",
        "300g de frango desfiado",
        "Milho",
        "1 colher de fermento"
    ],

    preparo: [
        "Misture os ingredientes da massa.",
        "Prepare o frango desfiado.",
        "Coloque metade da massa em uma forma.",
        "Adicione o recheio de frango.",
        "Cubra com o restante da massa.",
        "Leve ao forno até dourar."
    ]
},


{
id: 11,
nome: "Polenta",
descricao: "Polenta cremosa, simples e saborosa.",
imagem: "imagens/polenta.jpeg",
categoria: "Salgados",
tempo: "30 minutos",
dificuldade: "Fácil",

ingredientes: [
    "2 xícaras de fubá",
    "6 xícaras de água",
    "1 colher de manteiga",
    "Sal a gosto"
],

preparo: [
    "Coloque a água em uma panela.",
    "Adicione o sal e deixe aquecer.",
    "Acrescente o fubá aos poucos, mexendo sempre.",
    "Continue mexendo ate a polenta engrossar.",
    "Adicione a manteiga e misture.",
    
]
},

{
id: 12,
nome: "Mousse de Chocolate",
descricao: "Mousse de chocolate cremoso e fácil de preparar.",
imagem: "imagens/mousse.jpeg",
categoria: "Doces",
tempo: "20 minutos",
dificuldade: "Fácil",

ingredientes: [
    "200g de chocolate",
    "1 caixa de creme de leite",
    "1 lata de leite condensado"
],

preparo: [
    "Derreta o chocolate.",
    "Adicione o creme de leite e misture.",
    "Acrescente o leite condensado.",
    "Misture até ficar cremoso.",
    "Coloque em um recipiente.",
    "Leve à geladeira até ficar firme."
]
}
];