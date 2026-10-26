import sqlite3
import json


class RepositorioReceitas:
    def __init__(self, caminho_banco="receitas.db"):
        self.caminho_banco = caminho_banco
        self.criar_tabela()

    def criar_tabela(self):
        with sqlite3.connect(self.caminho_banco) as conexao:
            conexao.execute("""
                CREATE TABLE IF NOT EXISTS receitas (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nome TEXT,
                    descricao TEXT,
                    imagem TEXT,
                    categoria TEXT,
                    tempo_preparo TEXT,
                    dificuldade TEXT,
                    ingredientes TEXT,
                    modo_preparo TEXT
                )
            """)

    def salvar(self, receita):
        with sqlite3.connect(self.caminho_banco) as conexao:
            conexao.execute("""
                INSERT INTO receitas (
                    nome, descricao, imagem, categoria,
                    tempo_preparo, dificuldade, ingredientes, modo_preparo
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                receita.nome,
                receita.descricao,
                receita.imagem,
                receita.categoria,
                receita.tempo_preparo,
                receita.dificuldade,
                json.dumps(receita.ingredientes),
                json.dumps(receita.modo_preparo)
            ))

    def listar(self):
        with sqlite3.connect(self.caminho_banco) as conexao:
            conexao.row_factory = sqlite3.Row
            resultado = conexao.execute("SELECT * FROM receitas")
            return [dict(linha) for linha in resultado.fetchall()]