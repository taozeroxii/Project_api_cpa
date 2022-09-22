const router = require("express").Router();
const connection = require("../configs/mycon");
// const { authenticated,isInRoles } = require('../configs/security');// รอทำ token มาดัก
const service = require('../services/query_api/getDataPatient')

connection.query( `SELECT * FROM cpa_report_url_api where status = 'Y' order by id`,(error, result) => {
    if (error) return reject(error);
    for(var i = 0 ;i< result.length ;i++){
        if(result[i].methods =='POST'){
            router.post(result[i].url,async (req,res) =>{
                for(var i = 0 ;i< result.length ;i++){
                    if(req.url == req.app.locals.variable_you_need[i].url){
                      // console.log( req.app.locals.variable_you_need)
                      try{
                        Object.assign(req.body,{ sql : req.app.locals.variable_you_need[i].sql_query}) 
                        // return res.json(req.body)
                        const model = await service.query_SQL(req.body);
                        if (!model) res.status(404).json({ message: "ไม่พบข้อมูลที่ค้นหา" });
                        return res.status(200).json(model);

                      }catch(err){ console.log(err)  }
                    }
                }
                res.json({url:req.url})
            })
        }//END IF POST

        if(result[i].methods =='GET'){
            router.post(result[i].url,(req,res) =>{
                for(var i = 0 ;i< result.length ;i++){
                    if(req.url == req.app.locals.variable_you_need[i].url){
                        try{
                            return res.status(200).json({url:req.url,sql: req.app.locals.variable_you_need[i].sql_query})
                        }catch(err){ console.log(err)  }
                     
                    }
                }
                res.json({url:req.url})
            })
        }//END IF GET
    }// end FOR
  }
);

module.exports = router;
