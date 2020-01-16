const express = require('express');
const mongoose = require('mongoose');
const Routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-us9xx.gcp.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(Routes);

app.listen(3333);