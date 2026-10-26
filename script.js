const parametros = new URLSearchParams(window.location.search);
const idReceita = Number(parametros.get("id"));
const receitasCadastradas = JSON.parse(localStorage.getItem("receitasCadastradas")) || [];

const listaReceitas = document.getElementById("listaReceitas");

if (listaReceitas) {
    receitasCadastradas.forEach(function(receita) {
        const coluna = document.createElement("div");
        coluna.className = "col-12 col-sm-6 col-lg-4 receita";
        coluna.dataset.nome = receita.nome.toLowerCase();
        coluna.dataset.categoria = receita.categoria.toLowerCase();

        const link = document.createElement("a");
        link.href = "receita.html?id=" + receita.id;
        link.className = "text-decoration-none";

        const card = document.createElement("article");
        card.className = "card h-100 shadow-sm card-receita";

        const imagem = document.createElement("img");
        imagem.src = receita.imagem;
        imagem.alt = receita.nome;
        imagem.className = "card-img-top";

        const corpo = document.createElement("div");
        corpo.className = "card-body";

        const nome = document.createElement("h3");
        nome.className = "card-title h5";
        nome.textContent = receita.nome;

        const descricao = document.createElement("p");
        descricao.className = "card-text text-secondary";
        descricao.textContent = receita.descricao;

        corpo.appendChild(nome);
        corpo.appendChild(descricao);
        card.appendChild(imagem);
        card.appendChild(corpo);
        link.appendChild(card);
        coluna.appendChild(link);

        const botaoExcluir = document.createElement("button");
        botaoExcluir.className = "btn btn-danger w-100 mt-2";
        botaoExcluir.textContent = "Excluir receita";

        botaoExcluir.addEventListener("click", function() {
            const confirmarExclusao = confirm("Deseja excluir esta receita?");

            if (confirmarExclusao) {
                const receitasAtualizadas = receitasCadastradas.filter(function(item) {
                    return item.id !== receita.id;
                });

                localStorage.setItem("receitasCadastradas", JSON.stringify(receitasAtualizadas));
                localStorage.removeItem("comentariosReceita" + receita.id);
                window.location.reload();
            }
        });

        coluna.appendChild(botaoExcluir);
        listaReceitas.appendChild(coluna);
    });
}

const campoPesquisa = document.getElementById("campoPesquisa");
const filtroCategoria = document.getElementById("filtroCategoria");

if (campoPesquisa && filtroCategoria) {
    const cardsReceitas = document.querySelectorAll(".receita");
    const mensagemSemReceitas = document.getElementById("mensagemSemReceitas");

    function filtrarReceitas() {
        const textoPesquisado = campoPesquisa.value.toLowerCase().trim();
        const categoriaEscolhida = filtroCategoria.value;
        let quantidadeVisivel = 0;

        cardsReceitas.forEach(function(card) {
            const nomeReceita = card.dataset.nome.toLowerCase();
            const categoriaReceita = card.dataset.categoria.toLowerCase();
            const nomeEncontrado = nomeReceita.includes(textoPesquisado);
            const categoriaEncontrada = categoriaEscolhida === "todas" ||
                categoriaReceita === categoriaEscolhida;
            const receitaEncontrada = nomeEncontrado && categoriaEncontrada;

            card.classList.toggle("d-none", !receitaEncontrada);

            if (receitaEncontrada) {
                quantidadeVisivel++;
            }
        });

        mensagemSemReceitas.classList.toggle("d-none", quantidadeVisivel > 0);
    }

    campoPesquisa.addEventListener("input", filtrarReceitas);
    filtroCategoria.addEventListener("change", filtrarReceitas);
}

if (typeof receitas !== "undefined") {
    const todasReceitas = receitas.concat(receitasCadastradas);

    const receitaEscolhida = todasReceitas.find(function(receita) {
        return receita.id === idReceita;
    });

    if (receitaEscolhida) {
        document.getElementById("nomeReceita").textContent = receitaEscolhida.nome;
        document.getElementById("descricaoReceita").textContent = receitaEscolhida.descricao;
        document.getElementById("imagemReceita").src = receitaEscolhida.imagem;
        document.getElementById("tempoReceita").textContent = receitaEscolhida.tempo;
        document.getElementById("categoriaReceita").textContent = receitaEscolhida.categoria;
        document.getElementById("dificuldadeReceita").textContent = receitaEscolhida.dificuldade;

        const listaIngredientes = document.getElementById("ingredientes");
        listaIngredientes.innerHTML = "";

        receitaEscolhida.ingredientes.forEach(function(ingrediente) {
            const item = document.createElement("li");
            item.textContent = ingrediente;
            listaIngredientes.appendChild(item);
        });

        const listaPreparo = document.getElementById("preparo");
        listaPreparo.innerHTML = "";

        receitaEscolhida.preparo.forEach(function(passo) {
            const item = document.createElement("li");
            item.textContent = passo;
            listaPreparo.appendChild(item);
        });
    }
}

const formComentario = document.getElementById("formComentario");

if (formComentario) {
    const nomeComentario = document.getElementById("nomeComentario");
    const textoComentario = document.getElementById("textoComentario");
    const listaComentarios = document.getElementById("listaComentarios");
    const chaveComentarios = "comentariosReceita" + idReceita;

    let comentarios = JSON.parse(localStorage.getItem(chaveComentarios)) || [];

    function mostrarComentarios() {
        listaComentarios.innerHTML = "";

        comentarios.forEach(function(comentario, indice) {
            const caixaComentario = document.createElement("div");
            caixaComentario.className = "border rounded p-3 mb-2";

            const nome = document.createElement("strong");
            nome.textContent = comentario.nome;

            const texto = document.createElement("p");
            texto.className = "mb-0";
            texto.textContent = comentario.texto;

            const botaoExcluir = document.createElement("button");
            botaoExcluir.className = "btn btn-danger btn-sm mt-2";
            botaoExcluir.textContent = "Excluir comentário";

            botaoExcluir.addEventListener("click", function() {
                comentarios.splice(indice, 1);
                localStorage.setItem(chaveComentarios, JSON.stringify(comentarios));
                mostrarComentarios();
            });

            caixaComentario.appendChild(nome);
            caixaComentario.appendChild(texto);
            caixaComentario.appendChild(botaoExcluir);
            listaComentarios.appendChild(caixaComentario);
        });
    }

    formComentario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const novoComentario = {
            nome: nomeComentario.value.trim(),
            texto: textoComentario.value.trim()
        };

        if (novoComentario.nome === "" || novoComentario.texto === "") {
            return;
        }

        comentarios.push(novoComentario);
        localStorage.setItem(chaveComentarios, JSON.stringify(comentarios));

        formComentario.reset();
        mostrarComentarios();
    });

    mostrarComentarios();
}
