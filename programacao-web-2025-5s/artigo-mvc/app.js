const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

const frases = [
    { texto: "O mundo não está ameaçado pelas pessoas más, e sim por aquelas que permitem a maldade.", autor: "Albert Einstein" },
    { texto: "O segredo da existência humana reside não só em viver, mas também em saber para que se vive.", autor: "Fiódor Dostoiévski" },
    { texto: "O mundo está nas mãos daqueles que têm a coragem de sonhar e correr o risco de viver seus sonhos.", autor: "Paulo Coelho" },
    { texto: "A vida é curta, aproveite o momento.", autor: "Hipócrates" },
    { texto: "Coragem é agir com o coração.", autor: "Fred Elboni" },
    { texto: "Nada é pequeno quando feito com amor.", autor: "Madre Teresa" }
];

function getFraseAleatoria() {
    const idx = Math.floor(Math.random() * frases.length);
    return frases[idx];
}

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/frase', (req, res) => {
    const frase = getFraseAleatoria();
    res.json(frase);
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
