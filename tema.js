const botaoTema = document.getElementById("botaoTema");
const temaSalvo = localStorage.getItem("temaEscuro");

if (temaSalvo === "sim") {
    document.body.classList.add("tema-escuro");
    botaoTema.textContent = "Tema claro";
}

botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {
        botaoTema.textContent = "Tema claro";
        localStorage.setItem("temaEscuro", "sim");
    } else {
        botaoTema.textContent = "Tema escuro";
        localStorage.setItem("temaEscuro", "nao");
    }
});
