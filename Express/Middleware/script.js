const express =  require('express');
const app = express();

// Middleware uses

app.use(function(req,res,next){
    console.log("middleware chalao");
    next();
});

app.get('/',function(req,res){
    res.send('Hello World sbjsbvkdfjvb');
});

app.get('/profile',function(req,res,next){
    return next(new Error("something went wrong"));
});

// error handlers

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('something broke!')
})

app.listen(3000);