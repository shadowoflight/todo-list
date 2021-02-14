const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getDeletedItems);
router.post('/deleteditems' , controller.sendDeletedItems)

module.exports=router;