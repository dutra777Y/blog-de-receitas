const formCadastro = document.getElementById("formCadastro");

formCadastro.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const arquivoImagem = document.getElementById("imagem").files[0];

    if (arquivoImagem.size > 1000000) {
        alert("Escolha uma imagem com menos de 1 MB.");
        return;
    }

    const ingredientes = document.getElementById("ingredientesCadastro").value
        .split("\n")
        .filter(function(ingrediente) {
            return ingrediente.trim() !== "";
        });

    const preparo = document.getElementById("preparoCadastro").value
        .split("\n")
        .filter(function(passo) {
            return passo.trim() !== "";
        });

    const leitorImagem = new FileReader();

    leitorImagem.onload = function() {
        const novaReceita = {
            id: Date.now(),
            nome: document.getElementById("nome").value.trim(),
            descricao: document.getElementById("descricao").value.trim(),
            imagem: leitorImagem.result,
            categoria: document.getElementById("categoria").value.trim(),
            tempo: document.getElementById("tempo").value.trim(),
            dificuldade: document.getElementById("dificuldade").value,
            ingredientes: ingredientes,
            preparo: preparo
        };

        const receitasCadastradas = JSON.parse(localStorage.getItem("receitasCadastradas")) || [];

        receitasCadastradas.push(novaReceita);
        localStorage.setItem("receitasCadastradas", JSON.stringify(receitasCadastradas));

        alert("Receita cadastrada com sucesso!");
        window.location.href = "index.html";
    };

    leitorImagem.readAsDataURL(arquivoImagem);
});
