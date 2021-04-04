require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

// nvm with credentials access cluster is protected with ip address 😂
const mongoUri = 'mongodb+srv://root:0110232264@cluster0.r8qwd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance.');
})
mongoose.connection.on('error', err => {
    console.log('Error connecting to mongo', err);
})

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})