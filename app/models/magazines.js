const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate-v2')

const magazinesSchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String }
  },
  {
    timestamps: true
  }
)

magazinesSchema.plugin(mongoosePaginate)
const magazines = mongoose.model('magazines', magazinesSchema)
module.exports = magazines
