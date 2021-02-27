import 'reflect-metadata';
import './database';
import express from 'express';

const app = express();


app.get('/',(request,response)=>{
    return response.json({msg:"status on"})
})

app.post('/',(request,response)=>{
    return response.json({msg:"Dados salvos"})

})

app.listen(3333,()=>console.log("Server on!!!!"));