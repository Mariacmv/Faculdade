// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.listen(PORT, () => {
//     console.log(`Servidor rodando em http://localhost:${PORT}`);
// });

// let estoque = {};

// app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
//     const { id, nome, qtd } = req.params;

//     if (estoque[id]) {
//         return res.status(400).json({ erro: 'Produto já existe' });
//     }

//     estoque[id] = {
//         nome,
//         quantidade: parseInt(qtd)
//     };

//     res.json({ mensagem: 'Produto adicionado', produto: estoque[id] });
// });

// app.get('/listar', (req, res) => {
//     res.json(estoque);
// });

// app.get('/remover/:id', (req, res) => {
//     const { id } = req.params;

//     if (!estoque[id]) {
//         return res.status(404).json({ erro: 'Produto não encontrado' });
//     }

//     const removido = estoque[id];
//     delete estoque[id];

//     res.json({ mensagem: 'Produto removido', produto: removido });
// });

// app.get('/editar/:id/:qtd', (req, res) => {
//     const { id, qtd } = req.params;

//     if (!estoque[id]) {
//         return res.status(404).json({ erro: 'Produto não encontrado' });
//     }

//     estoque[id].quantidade = parseInt(qtd);

//     res.json({ mensagem: 'Quantidade atualizada', produto: estoque[id] });
// });

// app.get('/', (req, res) => {
//     res.send(`
//         <h1>Bem-vindo ao Estoque!</h1>
//         <p>Use as rotas:</p>
//         <ul>
//             <li>/adicionar/:id/:nome/:qtd</li>
//             <li>/listar</li>
//             <li>/editar/:id/:qtd</li>
//             <li>/remover/:id</li>
//         </ul>
//     `);
// });



//Correção: index.js
//1º - npm init dentro da pasta que quero iniciar o projeto
//2º - npm install express@4.21.2
// Importa o módulo mque criei
const estoque = require('./estoque');
//1º - importa o express
const express = require('express');
//2º - executa a variável que importa o express
const app = express(); //recebe o retorno da variável express, retorna um servidor web
//3º - Defino uma porta
const PORT = 3000;
//4º - Indica que o servidor começou a rodar na porta PORT
app.listen(PORT, () => {
    console.log('app rodando na porta ' +PORT);
});
//5º - Programar agora o comportamento da aplicação
app.get('/', (req, res) => { //sempre tem uma requisição e uma resposta
    let html = '<h1>App Estoque</h1>'; //pode usar código html dentro para definir mensagens na tela
    html += '<h3>Rotas disponíveis:</h3>';
    html += '<p>Adicionar: /adicionar/:id/:nome/:qtd</p>';
    html += '<p>Listar: /listar</p>';
    html += '<p>Remover: /remover/:id</p>';
    html += '<p>Editar: /editar/:id/:qtd</p>';
    res.send(html);
});
//6º - Implementa as rotas definidas
    //Adicionar
    app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
        let item = { //adiciono os atributos desse objeto
            id: Number(req.params.id), //pego o id do item que o usuário digitou e defino como número
            nome: req.params.nome,
            qtd: Number(req.params.qtd),
        };//crio um objeto que será adicionado ao estoque
        res.send(estoque.adicionar(item)); //devolvo o item que o usuário criou
    });//sempre recebe a rota - a requisição e define uma resposta
    //Listar
    app.get('/listar', (req, res) => {
        res.send(estoque.listar()); //pego a função listar do arquivo estoque que é um módulo, por isso importa ele
    }); //res.send envia uma resposta ao usuário
    //Remover
    app.get('/remover/:id', (req, res) => {
        let id = Number(req.params.id);
        res.send(estoque.remover(id));
    })
    //Editar
    app.get('/editar/:id/:qtd', (req, res) => {
        let id = Number(req.params.id); //recebo o id que o usuário passou
        let qtd = Number(req.params.qtd); //recebo a quantidade também
        res.send(estoque.editar(id, qtd)); //retorno uma resposta ao usuário com o id e a quantidade que o usuário modificou
    });
