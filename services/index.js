const connection = require("../configs/mycon");

module.exports = {
  findall_api() {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM cpa_report_url_api where status = 'Y' order by id`,
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
    });
  },
};
