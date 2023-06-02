const express = require('express')
const { fetchAll,fetchOne, deleteAll, deleteOne, post, update } = require('../controller/controles.js')

const router = express.Router()


router.get('/',(req,res)=>{res.send('hello')})
router.post('/post',post)
router.get('/fetch',fetchAll)
router.get('/fetch/:id',fetchOne)
router.put('/update/:id',update)
router.delete('/delete',deleteAll)
router.delete('/delete/:id',deleteOne)

module.exports = router