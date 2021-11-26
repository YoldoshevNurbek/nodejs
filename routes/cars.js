const {Router} = require('express')
const router = Router()
const Car = require('../models/Cars')

router.get('/', async (req, res)=>{
    const cars = await Car.getAll() // ma`lumotlar massiv
    res.render('cars', {
        title:'Car models',
        isCars: true,
        cars
    })
})

router.get('/:id/edit', async(req, res)=>{
    if(!req.query.allow){
        res.redirect('/')
    }
        const car = await Car.getById(req.params.id);
        res.render('car-edit', {
            title:`Car model ${car.model}`,
            car
            
        })
})

router.get('/:id', async(req, res)=>{
    const car = await Car.getById(req.params.id);
    res.render('car', {
        layout:'empty',
        title:`Car model ${car.model}`,
        car
    })
})

router.post('/edit', async (req, res)=>{
    await Car.update(req.body)
    res.redirect('/cars')
    console.log(req.body);
})

router.post('/add',(req, res)=>{
    
})
module.exports = router