import express from 'express';

const app = express();
app.use(express.json());

const port = 3000;

const posts = [
    {
      id: 1,
      descricao: 'Uma foto teste',
      imagem: 'https://placecats.com/millie/300/150'
    },
    {
      id: 2,
      descricao: 'Gato brincando com um novelo de lã',
      imagem: 'https://placecats.com/felix/200/300'
    },
    {
      id: 3,
      descricao: 'Gatinho dormindo em uma caixa',
      imagem: 'https://placecats.com/whiskers/150/200'
    },
    {
      id: 4,
      descricao: 'Gato olhando pela janela',
      imagem: 'https://placecats.com/ginger/300/200'
    },
    {
      id: 5,
      descricao: 'Gatos se divertindo em um parque',
      imagem: 'https://placecats.com/siamese/400/300'
    },
    {
      id: 6,
      descricao: 'Gatinho comendo ração',
      imagem: 'https://placecats.com/marmalade/250/250'
    }
  ];

app.get('/posts', (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get('/posts/:id', (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});

//SUGESTÃO DO CODEIUM PRA FAZER OQ FAZ NA FUNÇÃO BUSCARPOSTPORID E ROTA GET
// app.get('/posts/:id', (req, res) => {
//     res.status(200).json(posts.find(post => post.id == req.params.id));
// });

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/posts`);
});

