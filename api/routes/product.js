const express = require("express");
const router = express.Router();
const{create, list,read,update,remove} =require('../controllers/product')


router.get('/get_item',list)//
router.post('/insert_item',create)
router.get('/get_item_by_id/:id',read)
router.put('/update_item/:id',update)
router.delete('/delete_item/:id',remove)
 

module.exports = router;