import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 3000
const posts = [
    'post1',
    'post2',
    'post3',
    'post4',
]
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/fff', async (req, res) => {
    const { search } = req.query;
    const data = posts.filter(p => p.includes(search))
    res.json(data);
    console.log(search);
})
app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    const data = posts[id - 1]
    res.send(data);
})
app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/public/form.html')
})
app.post('/form', (req, res) => {
    const { name } = req.body
    res.send('hello' + name);
})
app.get('/json', (req, res) => {
    res.sendFile(__dirname + '/public/json.html')
})
app.post('/json',(req,res)=>{
    res.json({
        
        status:'sucess',
        data: req.body,

    })
})
app.listen(port, () => {
    console.log(`App on ${port}`)
})
