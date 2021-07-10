require('dotenv/config')
const mongoose = require('mongoose')

mongoose
  .connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
  .then(() => console.log('We are connected to Mongo'))
  .catch(err => console.log('Could not connect to MongoDb', err))
  
  
  const carSchema = mongoose.Schema({
    make: String,
    model: [String],
    year: Number,
    origin: String,
    KBBrating: Number,
    size: String
  })
  
  const car = mongoose.model('Car', Schema)
  