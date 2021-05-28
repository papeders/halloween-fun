const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

const routes = require('./routes');
app.use('/costumes', routes.costumes);
app.use('/users', routes.users);
app.use(express.static('public'));



app.listen(3000, ()=>{
});