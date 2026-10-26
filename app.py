from flask import Flask, render_template, jsonify
from repositorio_receitas import RepositorioReceitas
from servico_receitas import ServicoReceitas
import json
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
if __name__ == "__main__":
    app.run(debug=True)