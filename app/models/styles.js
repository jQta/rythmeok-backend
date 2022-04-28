const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate-v2')

const stylesSchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String }
  },
  {
    timestamps: true
  }
)

stylesSchema.plugin(mongoosePaginate)
const styles = mongoose.model('styles', stylesSchema)
module.exports = styles
