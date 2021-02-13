const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getDeleteditems);
router.post('/deleteditems' , controller.sendDeletedItems)

module.exports=router;