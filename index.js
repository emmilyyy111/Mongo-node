require('dotenv/config')
const mongoose = require('mongoose')

mongoose
  .connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
  .then(() => console.log('We are connected to Mongo'))
  .catch(err => console.log('Could not connect to MongoDb', err))

const movieSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  genre: [String],
  year: Number,
  rating: Number,
  date: {
    type: Date,
    default: Date.now(),
  },
})

const Movie = mongoose.model('Movie', movieSchema)

// here is where i get all my movies
function getAllMovies() {
  Movie.find()
    .then(allMovies => console.log('here are all the movies', allMovies))
    .catch(err => console.log('could not get all movies', err))
}
getAllMovies()

function createMovie() {
  const newMovie = new Movie({
    title: 'Toy Story',
    genre: ['Cartoons', 'Family'],
    year: 2008,
    rating: 5,
  })
  newMovie
    .save()
    .then(() => console.log('movie was saved'))
    .catch(err => console.log('movie was not added', err))
}
createMovie()

function getAllMoviesCount() {
  Movie.find()
    .countDocuments()
    .then(count => console.log('here is the count', count))
    .catch(err => console.log(err))
}
getAllMoviesCount()

function getMoviesFiltered() {
  Movie.find()
    .limit(10)
    .sort({ year: 1 })
    .then(movies => console.log('here are filtered', movies))
    .catch(err => console.log(err))
}
getMoviesFiltered()