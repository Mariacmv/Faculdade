const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

let estoque = {};

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;

    if (estoque[id]) {
        return res.status(400).json({ erro: 'Produto já existe' });
    }

    estoque[id] = {
        nome,
        quantidade: parseInt(qtd)
    };

    res.json({ mensagem: 'Produto adicionado', produto: estoque[id] });
});

app.get('/listar', (req, res) => {
    res.json(estoque);
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;

    if (!estoque[id]) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }

    const removido = estoque[id];
    delete estoque[id];

    res.json({ mensagem: 'Produto removido', produto: removido });
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;

    if (!estoque[id]) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }

    estoque[id].quantidade = parseInt(qtd);

    res.json({ mensagem: 'Quantidade atualizada', produto: estoque[id] });
});

app.get('/', (req, res) => {
    res.send(`
        <h1>Bem-vindo ao Estoque!</h1>
        <p>Use as rotas:</p>
        <ul>
            <li>/adicionar/:id/:nome/:qtd</li>
            <li>/listar</li>
            <li>/editar/:id/:qtd</li>
            <li>/remover/:id</li>
        </ul>
    `);
});
