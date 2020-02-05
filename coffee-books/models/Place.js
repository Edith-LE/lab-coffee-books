const {model, Schema} =require('mongoose')

const placeSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    location: {
      address: {
        type: String,
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
    },
    placeType: {
      type: String,
      enum: ['cofee shop', 'bookstore'],
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Place', placeSchema)