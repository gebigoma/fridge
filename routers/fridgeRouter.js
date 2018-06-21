const
    express = require('express'),
    router = express.Router(),
    Fridge = require('../controllers/fridges');

router.get('/', Fridge.showAll);


module.exports = router;