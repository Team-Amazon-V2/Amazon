const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"chao0629",
    database:"productreview",
    host:"localhost",
    port: 5432
  
});

module.exports = pool;