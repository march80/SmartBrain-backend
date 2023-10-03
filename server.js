const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
      host : 'postgres://mydb_mc7e_user:qfzame2KmEX5fAw663HYTzP1KPFx3Bky@dpg-cke6n6fs0fgc73ev3nng-a.oregon-postgres.render.com/mydb_mc7e',
      port : 5432,
      user : 'mydb_mc7e_user',
      password : 'qfzame2KmEX5fAw663HYTzP1KPFx3Bky',
      database : 'mydb_mc7e'
    }
  });
  
  db.select('*').from('users').then(data => {console.log(data)});


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




