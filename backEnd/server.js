const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "retail_data"
})

app.get('/',(req,res)=>{
    return res.json("From Backend Side");
});

app.get('/users', (req,res)=>{

    const sql = "SELECT * FROM stores";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/update', async (req, res) => {
    try {
      // Fetch data from the API
      const response = await axios.get('https://api.example.com/data'); // Replace with your API endpoint
      const data = response.data;
  
      // Update the database with the fetched data
      db.getConnection((err, connection) => {
        if (err) throw err;
  
        // Assuming your API data has properties 'name' and 'value'
        const query = 'INSERT INTO your_table (name, value) VALUES ?';
        const values = data.map(item => [item.name, item.value]); // Adjust according to your API response structure
  
        connection.query(query, [values], (err, results) => {
          connection.release();
  
          if (err) throw err;
  
          res.send('Database updated successfully!');
        });
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while updating the database.');
    }
  });
 
app.get('/api1', (req, res)=>{
    return res.json();
})  

app.get('/storereq', (req,res)=>{

    const sql = "SELECT * FROM storereq";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081,()=>{
    console.log("Listening");
})