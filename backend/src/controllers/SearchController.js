const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')
module.exports = {
  async index(request, response){
   const {latitude,longitude, techs} = request.query
   const techArray = parseStringAsArray(techs)
   
   const devs = await Dev.find({
     techs:{
       $in: techArray //função de MongoBD
     },
     location:{

       $near:{ //função de MongoBD
         $geometry:{
           type: 'Point',
           coordinates:[longitude,latitude]
         },
         // distancia máxima de 10Km
         $maxDistance: 10000 //função de MongoBD
       },
     }
   })

    return response.json({devs})
  }
}