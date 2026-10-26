from receita import Receita
from repositorio_base import RepositorioBase
from servico_receitas import ServicoReceitas


class RepositorioDeTeste(RepositorioBase):
    def __init__(self):
        self.receitas = []

    def salvar(self, receita):
        self.receitas.append({
            "nome": receita.nome,
            "categoria": receita.categoria
        })

    def listar(self):
        return self.receitas


repositorio = RepositorioDeTeste()
servico = ServicoReceitas(repositorio)

receita = Receita(
    "Bolo de Teste",
    "Receita para testar POO",
    "",
    "Doces",
    "30 minutos",
    "Fácil",
    ["Farinha", "Ovos"],
    ["Misturar", "Assar"]
)

servico.cadastrar_receita(receita)

assert len(servico.listar_receitas()) == 1
assert len(servico.buscar_receitas("Bolo")) == 1

print("reste feito com sucesso")