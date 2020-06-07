const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const path = require('path');

const items = require('./routes/api/items');
const reviews = require('./routes/api/reviews');
const books = require('./routes/api/books');
const finishedBooks = require('./routes/api/finishedBooks');
const goals = require('./routes/api/goals');
const config = require('config');

const app = express();

//Bodyparser Middleware
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB Config
const db = config.get('mongoURI');

//Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true })

  .then(() => console.log('MongoDb Connected...'))
  .catch(err => console.log(err));
  { useUnifiedTopology: true }

  //Use routes
  app.use('/api/items', items);
  app.use('/api/reviews', reviews);
  app.use('/api/books', books);
  app.use('/api/finishedBooks', finishedBooks);
  app.use('/api/goals', goals);
  app.use ('/api/users', require('./routes/api/users'));
  app.use ('/api/auth', require('./routes/api/auth'));

  app.get('/', function(req, res){
     res.redirect('/home');
  });


  // Serve static asses if in production
  if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

  const port = process.env.PORT || 5000;

  app.listen(port, () => console.log(`Server started on port ${port}`));
