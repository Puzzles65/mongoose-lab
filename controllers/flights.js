const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create,
    index,
    show,
}


async function index(req, res){
    let flights = await Flight.find();
    res.render('flights', { flights })
}

function newFlight(req, res){
    res.render('flights/new', {errorMsg: ''})
}

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    try {
        await Flight.create(req.body)
        res.redirect('flights')
    } catch (err) {
        console.log(err)
        res.render('flights/new', {errorMsg: err.message})
     
    }
}


async function show(req, res){
    try{
    const flight = await Flight.findById(req.params.id)
    const destinations = flight.destination 

    res.render('flights/show', {
        title: 'Flight Details', 
        flight,
        destinations,
    })
    } catch (err){
        console.log('Error MSG: ', err)
    }
}