const express = require("express") ;
const app = express() ;
const Meme = require("./models/memedata") ;
const path = require("path") ;
bodyParser = require('body-parser');
require("./db/connect") ;
const port = process.env.PORT || 3000 ;

app.use(bodyParser.urlencoded({ extended: false }));
const static_path = path.join(__dirname ,  "../../frontend/css") ;

app.set('view engine' , 'ejs') ;
app.use(express.static('frontend/css'))
app.use( '/css' , express.static(static_path )) ;

app.get("" , (req , res ) => {
    
    Meme.find({}).exec((err , data )=>{
        if(err) throw err ;
        res.render( 'index'  , { datas : data }) ;
    })
});

app.get("/" , (req ,res) => {
    res.send('Hello from backend')
}) ;

app.post("/"  , (req , res) =>{
    const user = new Meme({
     
        name : req.body.name ,
        url : req.body.url ,
        caption : req.body.caption
    });

   // console.log(user) ;
    user.save().then(()=>{
        res.status(201).redirect("/") 
    }).catch((err) =>{
        res.status(400).send(err)
    })
}) ;

app.get("/meme" , (req , res ) =>{

    Meme.find({}).exec((err , data )=>{
        if(err) throw err ;
        res.status(200).send(data);
});
});



app.listen( port , () => console.log(`Listining on port ${port}...`)) ;


