const pgconnection = require('../../configs/pgcon');

module.exports = {
    query_SQL(value) {
        let replacesql = value.sql;
        replacesql = replacesql.replace(/{hn}/g,`'${value.hn}'`);
        replacesql = replacesql.replace(/{vn}/g,`'${value.vn}'`);
        replacesql = replacesql.replace(/{an}/g,`'${value.an}'`);
        replacesql = replacesql.replace(/{sdate}/g,`'${value.sdate}'`);
        replacesql = replacesql.replace(/{edate}/g,`'${value.edate}'`);
        // console.log(replacesql)

        return new Promise ((resolve,reject)=>{
            pgconnection .query(replacesql ,(error,result)=>{
               if(error) return reject(error)
               resolve(result.rows)
            } )
        })
    },

}