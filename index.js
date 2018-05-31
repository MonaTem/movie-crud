require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const moviesRoutes = require('./routes/movies');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// app.use(express.bodyParser({ extended: true }));

app.get('/', (request, response) => {
  response.send('movie-crud: Slash route is on fleeq');
});

app.use('/movies', moviesRoutes);

app.listen( process.env.PORT, () => {
  console.log(`movie-crud: Application is listening on port no. ${process.env.PORT}...`);
});
