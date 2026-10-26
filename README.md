
# Blog de Receitas

Projeto desenvolvido para o trabalho final do curso, utilizando Python, Flask e Programação Orientada a Objetos (POO).

## Sobre o projeto

O Blog de Receitas é uma aplicação web que permite visualizar receitas, pesquisar pelo nome, filtrar por categoria, consultar ingredientes e modo de preparo e cadastrar novas receitas.

O sistema possui uma interface desenvolvida em HTML, CSS e JavaScript, integrada ao Python por meio do Flask.

## Funcionalidades

- Visualização das receitas disponíveis
- Pesquisa de receitas pelo nome
- Filtro por categoria
- Visualização de ingredientes e modo de preparo
- Cadastro de novas receitas com imagem
- Comentários nas receitas
- Alternância entre tema claro e escuro

## Tecnologias utilizadas

- Python 3.14.6
- Flask 3.1.3
- SQLite (biblioteca sqlite3 do Python)
- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.8

## Programação Orientada a Objetos

O projeto utiliza as seguintes classes:

- **Receita:** representa os dados de uma receita.
- **ServicoReceitas:** contém as funcionalidades de listagem, pesquisa, filtro e cadastro.
- **RepositorioReceitas:** salva e consulta receitas no SQLite.
- **RepositorioBase:** define os métodos básicos de um repositório por meio de abstração.

O projeto demonstra encapsulamento, herança, abstração e polimorfismo.

## Estrutura do projeto

```text
blog-de-receitas/
├── app.py
├── receita.py
├── repositorio_base.py
├── repositorio_receitas.py
├── servico_receitas.py
├── teste_flask.py
├── teste_repositorio.py
├── teste_poo.py
├── requirements.txt
├── templates/
│   ├── index.html
│   ├── cadastro.html
│   └── receita.html
├── static/
│   ├── imagens/
│   ├── dados/
│   ├── js/
│   ├── style.css
│   ├── script.js
│   ├── cadastro.js
│   └── tema.js
└── docs/
    └── prints/
        ├── pagina-inicial.png
        └── detalhes-receita.png
```

## Como executar

1. Instale o Python.
2. Baixe o repositório.
3. Abra a pasta do projeto no VS Code.
4. Instale as dependências:

```bash
py -m pip install -r requirements.txt
```

5. Execute a aplicação:

```bash
py app.py
```

6. Abra no navegador:

http://127.0.0.1:5001

## Armazenamento

As receitas originais estão definidas em JavaScript. As novas receitas cadastradas pelo formulário são armazenadas no SQLite.

O banco de dados é criado localmente quando a aplicação é executada.

## Imagens do programa

### Página inicial

![Página inicial do blog](docs/prints/pagina-inicial.png)

### Detalhes da receita

![Detalhes de uma receita](docs/prints/detalhes-receita.png)

## Objetivo acadêmico

Aplicar os conceitos de Programação Orientada a Objetos, desenvolvimento web, organização de código, persistência de dados e controle de versões com Git e GitHub.
