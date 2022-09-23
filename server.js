const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const server = express()
dotenv.config();
const PORT = process.env.SERVER_PORT;
server.use(cors())

//ปกป้อง HTTP HEADER ด้วย Helmet
var helmet = require('helmet')
server.use(helmet())

// Set Parses JSON
server.use(express.json())
server.use(bodyParser.urlencoded({ extended: false,limit:'500MB' }));
server.use(bodyParser.json());

const connection = require("./configs/mycon");
function indall_api() {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM cpa_report_url_api where status = 'Y' order by id`,(error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
  });
}

indall_api().then( function(result) {
    server.locals.variable_you_need = result;
    server.use('/v1/api/',require('./router'))//Main Route สำหรับ api ต่างๆ
    server.get('*', (req, res) => {
        res.json({ok:'true',message:'Chaopaya Abhaibubaje Api is started !!',api_version:process.env.VERSION_API});
    })
})

server.listen(PORT, () => {
  console.log(`Server Started ON http://localhost:${PORT}`);
});
