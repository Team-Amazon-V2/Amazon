const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"chao0629",
    database:"productoverview",
    host:"localhost",
    port: 5432
  
});

module.exports = pool;