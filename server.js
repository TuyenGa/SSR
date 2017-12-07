const express = require('express');
const app = express();
const mongodb = require('mongoose');
const Config = require('./config/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongodb.connect(`mongodb://${Config.mongoConfig.host}:${Config.mongoConfig.port}/${Config.mongoConfig.data}`);

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('public'));
app.use('/api', require('./router/routes')(express));

app.listen(3000, ()=>{

    console.log('Server running on port 3000');
    
});

app.get('/',(req, res) =>{
    res.render('home');
});