const express = require("express");
let cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const { Pool } = require("pg");

//middleware resolves the Access to fetch at 'http://localhost:5000/' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. 
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: "loadsharing_user",
    host: "dpg-ci7a0u98g3nfucdrivs0-a.oregon-postgres.render.com",
    database: "loadsharing_db",
    password: "66BuqmhfDeAIl42v4591V6smybcCqbHC",
    port: 5432,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  
  app.get("/users", async (req, res) => {
    console.log("I get here")
    try{
      const users = await pool.query("SELECT * FROM ls_users")
      res.json(users.rows)
      console.log("I get here too")
    } catch (error) {
      console.error(error)
      res.status(500).json(error);
    }
  });

app.post("/users", async (req, res) => {
  const {name, email, colour, area} = req.body
  console.log(name, email, colour, area);
  try {
    const newUser = await pool.query(`INSERT INTO ls_users (name, email, colour, user_area_name) VALUES ($1,$2,$3,$4)`, 
     [name, email, colour, area])
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});
  
    
    //   .then((result) => {
    //     res.json(result.rows)
    //     console.log(res)
    // })
      
  
  app.listen(port, () => console.log(`Listening on port ${port}`));