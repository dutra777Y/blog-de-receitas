from flask import Flask, render_template
app = Flask(__name__, static_url_path="")
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
if __name__ == "__main__":
    app.run(debug=True)