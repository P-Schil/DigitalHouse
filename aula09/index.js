const express = require('express');
const app = express();

app.get('/cumprimentar/:nome', (req,res)=>{
    const nome = req.params.nome
    res.send("Olá "+nome)
    })

app.get('/calcular/:numero1/:numero2?',(req,res)=>{
    let {numero1,numero2}=req.params
    
    if(numero2){
        let resultado= parseInt(numero1) +parseInt(numero2)
        res.send(resultado)}else{

       res.send(numero1)
    }
})


app.listen(3000,()=>
console.log('Servidor rodando na porta 3000')
)


