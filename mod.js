const sherdog = require('sherdog');

// let fighters = {
//   Jon_Jones:{name:"Jon Jones", data:"https://www.sherdog.com/fighter/Jon-Jones-27944"},
//   Khabib: "https://www.sherdog.com/fighter/Khabib-Nurmagomedov-56035",
//   Israel_Adesanya: "https://www.sherdog.com/fighter/Israel-Adesanya-56374",
//   Conor_McGregor: "https://www.sherdog.com/fighter/Conor-McGregor-29688",
//   Daniel_Cormier: "https://www.sherdog.com/fighter/Daniel-Cormier-52311",
//   Francis_Ngannou: "https://www.sherdog.com/fighter/Francis-Ngannou-152341",
//   Nate_Diaz: "https://www.sherdog.com/fighter/Nate-Diaz-11451",
//   Yoel_Romero: "https://www.sherdog.com/fighter/Yoel-Romero-60762",
//   Tony_Ferguson: "https://www.sherdog.com/fighter/Tony-Ferguson-31239",
//   Robbie_Lawler: "https://www.sherdog.com/fighter/Robbie-Lawler-2245",
//   Tyron_Woodley: "https://www.sherdog.com/fighter/Tyron-Woodley-42605",
//   Stipe_Miocic:"https://www.sherdog.com/fighter/Stipe-Miocic-39537",
//   Thiago_Santos:"https://www.sherdog.com/fighter/Thiago-Santos-90021",
//   Kamaru_Usman:"https://www.sherdog.com/fighter/Kamaru-Usman-120691",
//   Jorge_Masvidal:"https://www.sherdog.com/fighter/Jorge-Masvidal-7688",
//   Henry_Cejudo:"https://www.sherdog.com/fighter/Henry-Cejudo-125297",
//   Alexander_Volkanovski:"https://www.sherdog.com/fighter/Alexander-Volkanovski-101527",
//   Weili_Zhang:"https://www.sherdog.com/fighter/Weili-Zhang-186663",
//   Valentina_Shevchenko:"https://www.sherdog.com/fighter/Valentina-Shevchenko-45384",
//   Amanda_Nunes:"https://www.sherdog.com/fighter/Amanda-Nunes-31496",
//   Junior_dos_Santos:"https://www.sherdog.com/fighter/Junior-dos-Santos-17272",
//   Jairzinho_Rozenstruik:"https://www.sherdog.com/fighter/Jairzinho-Rozenstruik-102803",
//   Derrick_Lewis:"https://www.sherdog.com/fighter/Derrick-Lewis-59284",
//   Paulo_Henrique_Costa:"https://www.sherdog.com/fighter/Paulo-Henrique-Costa-147165",
//   Jared_Cannonier:"https://www.sherdog.com/fighter/Jared-Cannonier-78628",
//   Dustin_Poirier:"https://www.sherdog.com/fighter/Dustin-Poirier-50529",
//   Justin_Gaethje:"https://www.sherdog.com/fighter/Justin-Gaethje-46648",
//   Max_Holloway:"https://www.sherdog.com/fighter/Max-Holloway-38671",
//   Brian_Ortega:"https://www.sherdog.com/fighter/Brian-Ortega-65310",
//   Marlon_Moraes:"https://www.sherdog.com/fighter/Marlon-Moraes-30936",
//   Alistair_Overeem:"https://www.sherdog.com/fighter/Alistair-Overeem-461",
// }
let fighters = [
  {name:"Jon Jones", data:"https://www.sherdog.com/fighter/Jon-Jones-27944"},
  {name: 'Khabib', data:"https://www.sherdog.com/fighter/Khabib-Nurmagomedov-56035"},
  {name: "Israel Adesanya" ,data: "https://www.sherdog.com/fighter/Israel-Adesanya-56374"},
  {name: "Conor McGregor" ,data: "https://www.sherdog.com/fighter/Conor-McGregor-29688"},
  {name: "Daniel Cormier" ,data: "https://www.sherdog.com/fighter/Daniel-Cormier-52311"},
  {name: "Francis Ngannou" ,data: "https://www.sherdog.com/fighter/Francis-Ngannou-152341"},
  {name: "Nate Diaz" ,data: "https://www.sherdog.com/fighter/Nate-Diaz-11451"},
  {name: "Yoel Romero" ,data: "https://www.sherdog.com/fighter/Yoel-Romero-60762"},
  {name: "Tony Ferguson" ,data: "https://www.sherdog.com/fighter/Tony-Ferguson-31239"},
  {name: "Robbie Lawler" ,data: "https://www.sherdog.com/fighter/Robbie-Lawler-2245"},
  {name: "Tyron Woodley" ,data: "https://www.sherdog.com/fighter/Tyron-Woodley-42605"},
  {name: "Stipe Miocic", data:"https://www.sherdog.com/fighter/Stipe-Miocic-39537"},
  {name: "Thiago Santos", data:"https://www.sherdog.com/fighter/Thiago-Santos-90021"},
  {name: "Kamaru Usman", data:"https://www.sherdog.com/fighter/Kamaru-Usman-120691"},
  {name: "Jorge Masvidal", data:"https://www.sherdog.com/fighter/Jorge-Masvidal-7688"},
  {name: "Henry Cejudo", data:"https://www.sherdog.com/fighter/Henry-Cejudo-125297"},
  {name: "Alexander Volkanovski", data:"https://www.sherdog.com/fighter/Alexander-Volkanovski-101527"},
  {name: "Weili Zhang", data:"https://www.sherdog.com/fighter/Weili-Zhang-186663"},
  {name: "Valentina Shevchenko", data:"https://www.sherdog.com/fighter/Valentina-Shevchenko-45384"},
  {name: "Amanda Nunes", data:"https://www.sherdog.com/fighter/Amanda-Nunes-31496"},
  {name: "Junior dos Santos", data:"https://www.sherdog.com/fighter/Junior-dos-Santos-17272"},
  {name: "Jairzinho Rozenstruik", data:"https://www.sherdog.com/fighter/Jairzinho-Rozenstruik-102803"},
  {name: "Derrick Lewis", data:"https://www.sherdog.com/fighter/Derrick-Lewis-59284"},
  {name: "Paulo Henrique Costa", data:"https://www.sherdog.com/fighter/Paulo-Henrique-Costa-147165"},
  {name: "Jared Cannonier", data:"https://www.sherdog.com/fighter/Jared-Cannonier-78628"},
  {name: "Dustin Poirier", data:"https://www.sherdog.com/fighter/Dustin-Poirier-50529"},
  {name: "Justin Gaethje", data:"https://www.sherdog.com/fighter/Justin-Gaethje-46648"},
  {name: "Max Holloway", data:"https://www.sherdog.com/fighter/Max-Holloway-38671"},
  {name: "Brian Ortega", data:"https://www.sherdog.com/fighter/Brian-Ortega-65310"},
  {name: "Marlon Moraes", data:"https://www.sherdog.com/fighter/Marlon-Moraes-30936"},
  {name: "Alistair Overeem", data:"https://www.sherdog.com/fighter/Alistair-Overeem-461"},
]
// sherdog.getFighter(fighters.Tony_Ferguson, ()=>{

// })

module.exports.getFighter = function getFighter (req,res){
  let info ,
  fighter = req.params.fighter,
  fighterindex = fighters.findIndex((f)=>fighter === f.name);
      
  if (fighterindex !== -1) {
    return sherdog.getFighter(fighters[fighterindex].data,(data)=> 
          {info = data
          return res.send(info)
          });  
  }
  res.send('Not Found')
}

