const express = require("express");
const app = express();
const pool = require("./db/conn.js");

app.use(express.json());


app.get("/api/reviews", async (req, res) => {
	try {
		
		const result = await pool.query('SELECT * FROM reviewinfo')
		
     	res.json(result.rows);
	
	} catch (err) {
		console.error(err);
		res.send("Error " + err);
	}

});

app.get("/api/reviews/:id", async (req, res) => {
	try {
		
		const result = await pool.query('SELECT * FROM reviewinfo WHERE id = $1',[req.params.id]);

		if(result.rows.length === 0){
            res.send("review doesn't exit, please create a new review first!")
			return undefined;
		}
	

		res.json(result.rows);
	
	} catch (err) {
		console.error(err);
		res.send("Error " + err);
	}

});

app.post("/api/reviews", async (req,res)=> {

	try {
		await pool.connect()
		const result = await pool.query('INSERT INTO reviewinfo (name, review) VALUES ($1,$2);', [req.body.newname, req.body.newreview]) 
	
		res.json(result.rows);
	}
	    catch (err) {
		console.error(err);
		res.send("Error " + err);
	}
});

app.patch('/api/reviews/:id', async (req, res) => {
   
    let data;
    try{
       data = await pool.query(`UPDATE reviewinfo SET review = '${req.body.review}' WHERE id = '${req.params.id}';`)
	 
       res.send(data.rows);
    }catch (err){
        console.error(err);
    }
	console.log(req.body)
	
})

app.delete('http://localhost:3501/api/reviews/:id', async (req, res) =>{
    try{
       
        
        const data = await pool.query(`DELETE FROM reviewinfo WHERE id = $1`, [req.params.id]);
        console.log(data.rows);
        res.send('review is deleted!');
    } catch(err){
        console.error(err.message);
        res.send('Error: ' + err.message);
    }
})

app.listen(3501, () => {
    console.log("listening on Port 3501");

  });