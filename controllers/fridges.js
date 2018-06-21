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