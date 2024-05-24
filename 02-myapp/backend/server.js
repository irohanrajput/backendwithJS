import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("this is the base url address, welcome home bud..")
})

const jokes = [
    {
        id: 1,
        joke: "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
        id: 2,
        joke: "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!"
    },
    {
        id: 3,
        joke: "Why don't skeletons fight each other? They don't have the guts!"
    },
    {
        id: 4,
        joke: "I'm reading a book about anti-gravity. It's impossible to put down!"
    },
    {
        id: 5,
        joke: "Why did the scarecrow win an award? Because he was outstanding in his field!"
    }
];

app.get('/jokes', (req, res) => {
    res.json(jokes);
});
app.get('/jokes/random', (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json(randomJoke);
});

const port = process.env.PORT || 3000   ;

app.listen(port, () => {
    console.log('Server is live at', `http://localhost:${port}`)
})