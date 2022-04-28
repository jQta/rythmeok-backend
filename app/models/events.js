const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate-v2')

const eventsSchema = new Schema(
  {
    id: { type: Number, required: true },
    date: { type: String, required: true },
    time: { type: String },
    artist: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'artists', trim: true }
    ],
    hall: [{ type: mongoose.Schema.Types.ObjectId, ref: 'halls', trim: true }],
    price: { type: Number },
    assistants: { type: Number }
  },
  {
    timestamps: true
  }
)
eventsSchema.plugin(mongoosePaginate)
const events = mongoose.model('events', eventsSchema)
module.exports = events
