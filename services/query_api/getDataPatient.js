const pgconnection = require("../../configs/pgcon");

module.exports = {
  query_SQL(value) {
    function dateIsValid(date) {
      return date instanceof Date && !isNaN(date);
    }

    let replacesql = value.sql;
    // เช็คตัวแปร hn vn an ค่าที่ส่งมาต้องเป็นตัวเลข หากไม่ใช่ให้แทนที่ด้วย 0
    if (Number.isInteger(Number(value.hn))) {
      replacesql = replacesql.replace(/{hn}/g, `'${value.hn}'`);
    } else {
      replacesql = replacesql.replace(/{hn}/g, `'0'`);
    }
    if (Number.isInteger(Number(value.vn))) {
      replacesql = replacesql.replace(/{vn}/g, `'${value.vn}'`);
    } else {
      replacesql = replacesql.replace(/{vn}/g, `'0'`);
    }
    if (Number.isInteger(Number(value.an))) {
      replacesql = replacesql.replace(/{an}/g, `'${value.an}'`);
    } else {
      replacesql = replacesql.replace(/{an}/g, `'0'`);
    }

    // เช็คตัวแปรวันที่ที่ส่งเข้ามา หากไม่ใช่ให้แทนที่ด้วยวันที่อื่นลงไป
    // console.log(dateIsValid(new Date(value.sdate)));
    if (dateIsValid(new Date(value.sdate))) {
      replacesql = replacesql.replace(/{sdate}/g, `'${value.sdate}'`);
    } else {
      replacesql = replacesql.replace(/{sdate}/g, `'1000-01-01'`);
    }
    if (dateIsValid(new Date(value.sdate))) {
      replacesql = replacesql.replace(/{edate}/g, `'${value.sdate}'`);
    } else {
      replacesql = replacesql.replace(/{edate}/g, `'1000-01-01'`);
    }

    replacesql = replacesql.replace(/{stime}/g, `'${value.stime}'`);
    replacesql = replacesql.replace(/{etime}/g, `'${value.etime}'`);
    // console.log(replacesql)

    return new Promise((resolve, reject) => {
      pgconnection.query(replacesql, (error, result) => {
        if (error) return reject(error);
        if (result.rows.length <= 0) resolve("ไม่พบข้อมูล");
        if (result.rows.length == 1) resolve(result.rows[0]);
        resolve(result.rows);
      });
    });
  },
};
