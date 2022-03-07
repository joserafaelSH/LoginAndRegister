const express = require("express");
const app = express(); 
const mysql = require("mysql");
const cors = require('cors');
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"rafa",
    database: "banco",
})

app.use(express.json());
app.use(cors());

app.post("/register",(req,res)=>{
    
    const {email,password} = req.body
    db.query("SELECT * FROM usuarios WHERE email = ?",[email], (err,result)=>{
        if(err) {
            res.send(err)
        } 
        
        if (result[0] == undefined){
            bcrypt.hash(password, saltRounds, (err,hash)=>{
                db.query("INSERT INTO usuarios (email, password) VALUES(?,?)",[email,hash],
                (err,result)=>{
                    if(err){
                        res.send(err);
                    }
        
                    res.send({result:result,msg:"Cadastrado com sucesso",status:true})
                })
            })
            
        }else{
            res.send({result:result,msg:"Usuario ja cadastrado",status:false})
        }

    })
})


app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    
    db.query("SELECT * FROM usuarios WHERE email = ?",[email],
    (err,result)=>{
        
        if(result[0] == undefined){
            res.send({result:result, msg:"Falha no login"})
        }else{
            bcrypt.compare(password,result[0].password,(error,resultado) =>{
                
                if(resultado){
                    res.send({result:resultado, msg:"logado com sucesso",status:true})
                }else{
                    res.send({result:resultado, msg:"Falha",status:false})
                }
                
            })
            
        }
        
    } 
)})

app.listen(3001, ()=>{
    console.log("Rodando na porta 3001");
});