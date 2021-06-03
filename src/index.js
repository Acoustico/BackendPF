require('./database')
const express=require('express');
const app=express();
const morgan = require('morgan');
const cors=require('cors');

app.set('port', 3000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/party', require('./routes/rutas'));

app.listen(app.get('port'));
console.log("servidor");