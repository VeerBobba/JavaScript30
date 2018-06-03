const csvFilePath = 'C:\\Veeru\\Book1.csv'
const csvtojson = require('csvtojson');

csvtojson()
    .fromFile(csvFilePath)
    .then((jsonobj)=>{
        const jfilter = jsonobj.filter((obj) =>{
            return obj.Column1 === '21';
        }); 
        console.log(jfilter);
    })

   