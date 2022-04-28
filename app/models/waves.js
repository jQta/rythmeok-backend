const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate-v2')

const wavesSchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String }
  },
  {
    timestamps: true
  }
)

wavesSchema.plugin(mongoosePaginate)
const waves = mongoose.model('waves', wavesSchema)
module.exports = waves
