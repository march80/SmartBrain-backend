const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

// const db = knex({
//   // connect to your own database here:
//   client: 'pg',
//   connection: {
//     host : '127.0.0.1',
//     user : 'aneagoie',
//     password : '',
//     database : 'smart-brain'
//   }
// });
  
//   db.select('*').from('users').then(data => {console.log(data)});


const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())


app.get('/',(req, res) =>{
    res.send('success')
});

app.post('/signin', (req, res) => {signin.handleSignin(req, res, db, bcrypt)})

app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)} )

app.get('/profile/:id', (req, res) => {profile.handleProfileGet(req, res, db)} );

app.put('/image', (req, res) => {image.handleImage(req, res, db)});




