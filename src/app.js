const express = require('express');
const res = require('express/lib/response');
const app = express();
const hbs = require('hbs');
const path = require('path');

const port = process.env.PORT || 5000;
// above syntax mean suppose you have any hosting it will run on that port else it will run on port no 5000.

// public static path (absolute path of public folder)
// const tut12path = path.resolve('../public');
const tut12path = path.resolve(__dirname,'../public');
const template_path = path.resolve(__dirname,'../templates/views');
const partials_path = path.resolve(__dirname,'../templates/partials');

app.set('view engine','hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

// rendering static page
app.use(express.static(tut12path));

//routing

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/weather',(req,res)=>{
    res.render("weather");
});

app.get('*',(req,res)=>{
    res.render("404error",{
    errormsg:"Oops Page doesn't Found??"});
});

app.listen(port, ()=>{
    console.log(`listening at port ${port}`);
});

