const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliverySchema = new Schema({
    delivery_receiver: {
        type: String,
        required: true,
        unique: true
    },
    delivery_no: {
        type: String,
        required: true,
        unique: true
    },
    delivery_street: {
        type: String,
        required: true
    },
    delivery_city: {
        type: String,
        required: true
    },
    delivery_province: {
        type: String,
        required: true
    },
    delivery_country: {
        type: String,
        required: true
    },
    delivery_postal_number:{
      type: String,
      required: true
    },
    delivery_note:{
      type: String,
      required: true
    }

}, {
timestamps: true
});
const Delivery = mongoose.model('Delivery', deliverySchema);
module.exports = Delivery;