const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const Routes = require('./routes');
const { setupWebsocket } = require('./utils/websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-us9xx.gcp.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//app.use(cors({ origin: 'http://localhost:3000'}));
app.use(cors());
app.use(express.json());
app.use(Routes);

server.listen(3333);
