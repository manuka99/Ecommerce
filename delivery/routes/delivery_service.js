const router = require('express').Router();
let Delivery = require('../models/delivery');

//Add delivery address
router.route('./add_delivery').post((req, res) => {
  const delivery_receiver = req.body.delivery_receiver;
  const delivery_no = req.body.delivery_no;
  const delivery_city = req.body.delivery_city;
  const delivery_province = req.body.delivery_province;
  const delivery_country = req.body.delivery_country;
  const delivery_postal_number = req.body.delivery_postal_number;
  const delivery_note = req.body.delivery_note;

  const new_delivery_address = Delivery({
    delivery_receiver,
    delivery_no,
    delivery_city,
    delivery_province,
    delivery_country,
    delivery_postal_number,
    delivery_note
  })

  //Validate the insertion of delivery to the data base
  new_delivery_address.save().then(() => {
    res.json("New Delivery Added")
  }).catch((err) => {
    console.log(err);
  })
})

//view all delivery addresses
router.route('./view_delivery').post((req, res) => {
  Delivery.find().then((Delivery) => {
    res.json(Delivery);
  }).catch((err) => {
    console.log(err);
  })
})

//Update delivery
router.route('./update_delivery/:id').put(async(req, res) => {
  let DeliveryId = req.params.id;
  const {
    delivery_receiver,
    delivery_no,
    delivery_city,
    delivery_province,
    delivery_country,
    delivery_postal_number,
    delivery_note
  } = req.body;

  const update_delivery = {
    delivery_receiver,
    delivery_no,
    delivery_city,
    delivery_province,
    delivery_country,
    delivery_postal_number,
    delivery_note
  }

  //Validate updatiion of delivery in the database
const update = await Delivery.findByIdAndUpdate(DeliveryId, update_delivery)
  .then(() => {
    res.status(200).send({status: "Delivery updated"})
  }).catch((err) => {
    console.log(err);
    res.status(500).send({status:"Error When updating Delivery", error: err.message});
  })
})

//delete delivery
router.route('./delete_delivery/:id').delete(async (req, res) => {
  let DeliveryId = req.params.id;
  await Delivery.findByIdAndDelete(DeliveryId)
  .then((Delivery) => {
    res.status(200).send({status:"Success", Delivery})
  }).catch(() =>{
    console.log(err.message);
    res.status(500).send({status:"Error", error: err.message});
  })
})

module.exports = router;
