# API de Gerenciamento de Alunos e Cursos

Esta é uma API simples para gerenciar alunos, cursos e associações entre eles usando Express.js e Sequelize. Você pode usar esta API para realizar operações CRUD (Create, Read, Update, Delete) em alunos, cursos e associações aluno-curso.

## Configuração

Certifique-se de ter o Node.js instalado em seu sistema. Você também precisará de um servidor de banco de dados SQL, como o MySQL, configurado e em execução.

1. Clone o repositório para sua máquina:

    ```bash
    git clone https://github.com/JoaoVitorChaves-05/API_RESTful.git
    cd API_RESTful

2. Instale as dependências do projeto:

    ```bash
    npm start

3. Configure o banco de dados:

   - Abra o arquivo `database.js` e ajuste as configurações do banco de dados de acordo com suas preferências. Você pode definir o nome do banco de dados, nome de usuário, senha e host.

   ```javascript
   const sequelize = new Sequelize('mysql://<username>:<passoword>@<host>:<port>/<database_name>')



## Criação do Banco de Dados

4. Crie o banco de dados:

    ```bash
    mysql -u <user> -p
    <password>
    ```

    ```mysql
    CREATE DATABASE <database_name>;
    exit;

## Baixando módulos

5. Digite o seguinte comando:

    ```bash
    npm install

## Inicializando servidor

6. Insira este comando:

    ```bash
    npm start
