const {Router} = require('express')
const router = Router()
const Car = require('../models/Cars')

router.get('/', (req, res)=>{
    res.render('add', {
        title:'Add Car',
        isAdd: true,
    })
})

router.post('/', async (req, res)=>{
    console.log(req.body);

    const car = new Car(req.body.model, req.body.price, req.body.img)

    await car.save()// Saqlayapmiz
    res.redirect('/cars')
})

module.exports = router