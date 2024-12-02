const express =  require('express');
const dotenv = require('dotenv');
dotenv.config()

const app = express();
app.get('/', (req, res) => {
    console.log('Hello WelCome To the New Server')
    res.send('Hello WelCome To the Our New Server')
})
const PORT = process.env.PORT || 4000
app.get('/api', (req, res) => {
    console.log('Your New Api is Create')
    res.send('Our New Api is Create')
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})