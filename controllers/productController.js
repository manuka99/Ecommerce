const request = require("../models/conference_register");

//user add new conference
exports.newConfRequest = async (req, res) => {
    try{
        const {name, price, quantity} = req.body;
        var ConfRequest = new request({
            name, 
            price, 
            quantity, 
        });
        
        ConfRequest = await ConfRequest.save();
        //success message
        return res.status(200).json({ConfRequest});
    }catch(error){
        //err response
        console.log(error);
        res.status(400).json({message : error})
    }
};

// retrieve all
exports.a11 = async(req, res) => {
    return res.status(200).json(await request.find());
};