const express =  require('express');
const app = express();

// Routes creation

app.get('/',function(req,res){
    res.send('Hello World sbjsbvkdfjvb')
})

app.get('/profile',function(req,res){
    res.send("My name is harsh upadhyay")
})

app.listen(3000)