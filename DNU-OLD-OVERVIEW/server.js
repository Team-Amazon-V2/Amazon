const express = require("express");
const app = express();
const pool = require("./db/conn.js");

app.use(express.json());

app.get("/api/overviews", async (req, res) => {
	try {
		
		const result = await pool.query('SELECT * FROM overviewinfo')
		console.log(result.rows)
     	res.json(result.rows);
	    
	} catch (err) {
		console.error(err);
		res.send("Error " + err);
	}

});

app.get("/api/overviews/:productname", async (req, res) => {
	try {
		
		const result = await pool.query('SELECT * FROM overviewinfo WHERE lower(productname)= lower($1)',[req.params.productname]);

		if(result.rows.length === 0){
            res.send("product doesn't exit! please enter a different product")
			return undefined;
		}
	

		res.json(result.rows);
	
	} catch (err) {
		console.error(err);
		res.send("Error " + err);
	}

});

app.listen(3502, () => {
    console.log("listening on Port 3502");

  });