const Fridge = require('../models/fridge');

exports.showAll = (req, res) => {
    Fridge.find({}, (err, fridges) => {
        if (err) {
            res.json({ status: "FAIL", err })
        } else {
            res.json({ status: "SUCCESS", payload: { fridges } })
        }
    })
}

exports.showFridge = (req, res) => {
    Fridge.findById(req.params.id, (err, fridgeFromDB) => {
        if(err) {
            res.json({ status: "FAIL", err });
        } else {
            res.json({ status: "SUCCESS", payload: { fridgeFromDB }})
        }
    })
}

exports.create = (req, res) => {
    Fridge.create(req.body, (err, newFridge) => {
        if(err) {
            res.json({ status: "FAIL", err });
        } else {
            res.json({ status: "SUCCESS", payload: { newFridge }})
        }
    })
 }

exports.UpdateOne = (req, res) => {
    Fridge.update({_id: req.params.id}, {$set: req.body},
    (err, fridges) => {
        if (err) {
            res.json({ status: "FAIL", err })
        } else {
            res.json({ status: "SUCCESS", payload: { fridges } })
        }   
    })
}