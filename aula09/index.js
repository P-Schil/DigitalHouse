const express = require('express');
const app = express();

app.get('/cumprimentar/:nome', (req,res)=>{
    const nome = req.params.nome
    res.send("Olá "+nome)
    })

app.get('/calcular',(req,res)=>{

})


app.listen(3000,()=>
console.log('Servidor rodando na porta 3000')
)


