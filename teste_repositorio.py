from receita import Receita
from repositorio_receitas import RepositorioReceitas

repositorio = RepositorioReceitas("teste_receitas.db")

receita = Receita(
    "Bolo de Teste",
    "Receita usada para testar o sistema",
    "imagens/bolo.jpeg",
    "Doces",
    "30 minutos",
    "Fácil",
    ["Farinha", "Leite", "Ovos"],
    ["Misturar os ingredientes", "Levar ao forno"]
)

repositorio.salvar(receita)

print("Receita salva com sucesso!")
print("Receitas cadastradas:", repositorio.listar())