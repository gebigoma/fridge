const
    express = require('express'),
    router = express.Router(),
    Fridge = require('../controllers/fridges');

router.get('/', Fridge.showAll);
router.patch('/:id', Fridge.UpdateOne);


module.exports = router;