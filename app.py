from flask import Flask, render_template, jsonify, request
from repositorio_receitas import RepositorioReceitas
from servico_receitas import ServicoReceitas
import json
from receita import Receita
app = Flask(__name__, static_url_path="")
repositorio = RepositorioReceitas()
servico = ServicoReceitas(repositorio)
@app.route("/")
@app.route("/index.html")
def inicio():
    return render_template("index.html")
@app.route("/cadastro.html")
def cadastro():
    return render_template("cadastro.html")
@app.route("/receita.html")
def receita():
    return render_template("receita.html")
@app.route("/api/receitas")
def api_receitas():
    receitas = servico.listar_receitas()

    for receita in receitas:
        receita["ingredientes"] = json.loads(receita["ingredientes"])
        receita["modo_preparo"] = json.loads(receita["modo_preparo"])

    return jsonify(receitas)
@app.route("/api/receitas", methods=["POST"])
def salvar_receita():
    dados = request.get_json(silent=True)

    if not isinstance(dados, dict):
        return jsonify({"erro": "Dados inválidos"}), 400

    campos = [
        "nome", "descricao", "imagem", "categoria",
        "tempo", "dificuldade", "ingredientes", "preparo"
    ]

    if any(not dados.get(campo) for campo in campos):
        return jsonify({"erro": "Preencha todos os campos"}), 400

    if not isinstance(dados["ingredientes"], list) or not isinstance(dados["preparo"], list):
        return jsonify({"erro": "Ingredientes ou preparo inválidos"}), 400

    nova_receita = Receita(
        dados["nome"],
        dados["descricao"],
        dados["imagem"],
        dados["categoria"],
        dados["tempo"],
        dados["dificuldade"],
        dados["ingredientes"],
        dados["preparo"]
    )

    servico.cadastrar_receita(nova_receita)

    return jsonify({"mensagem": "Receita cadastrada com sucesso!"}), 201
if __name__ == "__main__":
    app.run(debug=True, port=5001)