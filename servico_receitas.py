class ServicoReceitas:
    def __init__(self, repositorio):
        self.repositorio = repositorio

    def listar_receitas(self):
        return self.repositorio.listar()

    def buscar_receitas(self, nome):
        receitas = self.listar_receitas()

        return [
            receita for receita in receitas
            if nome.lower() in receita["nome"].lower()
        ]

    def filtrar_por_categoria(self, categoria):
        receitas = self.listar_receitas()

        if categoria.lower() == "todas":
            return receitas

        return [
            receita for receita in receitas
            if receita["categoria"].lower() == categoria.lower()
        ]
    def cadastrar_receita(self, receita):
        self.repositorio.salvar(receita)