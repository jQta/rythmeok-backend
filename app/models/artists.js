const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const Schema = mongoose.Schema

const artistsSchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String },
    image: { type: String },
    description: { type: String },
    crew: { type: Array },
    genres: { type: Array }
  },
  {
    timestamps: true
  }
)
artistsSchema.plugin(mongoosePaginate)
const artists = mongoose.model('artists', artistsSchema)
module.exports = artists
