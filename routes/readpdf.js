
const fs = require('fs');
const pdfparse = require('pdf-parse');

const pdffile = fs.readFileSync('./resources/IVP_request_form.pdf')

pdfparse(pdffile).then((data)=>{
    console.log(data.info);
})