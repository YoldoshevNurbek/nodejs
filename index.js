const express = require ('express')
const app = express()
const exhbs = require ('express-handlebars')
const path = require ('path')


// routes 
const homeRouter = require('./routes/home')
const carRouter = require('./routes/cars')
const addRouter = require('./routes/add')
const cardRouter = require('./routes/card')
// Pablic ulash jarayoni
app.use(express.static(path.join(__dirname, 'public')))

//post methodni registr qildik
app.use(express.urlencoded({extended: true}))

// hbs ulash jarayoni
const hbs = exhbs.create({
    defaultLayout:'main',
    extname:'hbs'
})

app.engine('hbs', hbs.engine) // Ro'yhatdan o'tkazdik
app.set('view engine', 'hbs')   // Texnologiyasini aytdik
app.set('views', 'views') // ikkinchi parametr bu papka nomi

app.use('/', homeRouter)
app.use('/cars', carRouter)
app.use('/add', addRouter)
app.use('/card', cardRouter)

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Express working on ${port} port`);
})