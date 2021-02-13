const router = require('express').Router();
const controller = require('./controller');

router.get('/deleteditems', controller.getDeleteditems);

module.exports=router;