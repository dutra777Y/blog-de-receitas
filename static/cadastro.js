const formCadastro = document.getElementById("formCadastro");

formCadastro.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const arquivoImagem = document.getElementById("imagem").files[0];

    if (!arquivoImagem) {
        alert("Escolha uma imagem.");
        return;
    }

    if (arquivoImagem.size > 1000000) {
        alert("Escolha uma imagem com menos de 1 MB.");
        return;
    }

    const ingredientes = document.getElementById("ingredientesCadastro").value
        .split("\n")
        .map(item => item.trim())
        .filter(item => item !== "");

    const preparo = document.getElementById("preparoCadastro").value
        .split("\n")
        .map(item => item.trim())
        .filter(item => item !== "");

    const leitorImagem = new FileReader();

    leitorImagem.onload = async function() {
        const novaReceita = {
            nome: document.getElementById("nome").value.trim(),
            descricao: document.getElementById("descricao").value.trim(),
            imagem: leitorImagem.result,
            categoria: document.getElementById("categoria").value.trim(),
            tempo: document.getElementById("tempo").value.trim(),
            dificuldade: document.getElementById("dificuldade").value,
            ingredientes: ingredientes,
            preparo: preparo
        };

        try {
            const resposta = await fetch("/api/receitas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novaReceita)
            });

            const resultado = await resposta.json();

            if (!resposta.ok) {
                throw new Error(resultado.erro || "Erro ao cadastrar.");
            }

            alert("Receita cadastrada com sucesso!");
            window.location.href = "/";

        } catch (erro) {
            alert("Erro: " + erro.message);
        }
    };

    leitorImagem.readAsDataURL(arquivoImagem);
});