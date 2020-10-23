const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const db = require('./config/db');

const app = express();

// ------------------------------------------------------------------------------------
app.engine('handlebars', exphbs({defaultLayout: 'main'})); // handlebars
app.set('view engine', 'handlebars');


// ------------------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public'))); // set static folder

app.use(express.urlencoded({extended: true}))
app.use(express.json());


//-------------------------------------------------------------------------------------
(async function () { // test database connection
    try {
    await db.authenticate();
    console.log('connection has been established successfully');
    } catch (err) {
      console.log(`err ${err}`)
    }
})();
  

//-------------------------------------------------------------------------------------
app.get('/', (req, res) => {
  res.render('index', {layout: 'landing'}); // define alternate layout to use other than default (ie main) 
})


//-------------------------------------------------------------------------------------
app.use('/gigs', require('./routes/gigs')); // Gig routes

const port = process.env.PORT || 3000;

app.listen(port, console.log(`server started on port ${port}`));