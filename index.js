import express from  'express';
import dotenv from 'dotenv';
dotenv.config()

const app = express();
app.get('/', (req, res) => {
    console.log('Hello WelCome To the New Server')
})
const PORT = process.env.PORT || 3000
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id:1,
            title: 'A Jokes',
            content: 'This is a jokes'
        },
        {
            id:2,
            title: 'A Jokes',
            content: 'This is another jokes'
        },
        {
            id:3,
            title: 'A Jokes',
            content: 'This is third jokes'
        },
        {
            id:4,
            title: 'A Jokes',
            content: 'This is fourth jokes'
        },
        {
            id:5,
            title: 'A Jokes',
            content: 'This is fifth jokes'
        },
    ]
    res.json(jokes)
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})