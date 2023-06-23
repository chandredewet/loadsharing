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
  
  app.get("/users", function (req, res) {
    pool
      .query("SELECT * FROM ls_users")
      .then((result) => res.json(result.rows))
      .catch((error) => {
        console.error(error);
        res.status(500).json(error);
      });
  });

  app.post("/users", function (req, res) {
    pool
      .query(
       "INSERT INTO ls_users (name, email, colour, user_area_name) VALUES ($1,$2, $3,$4)", [req.body.name, req.body.email, req.body.colour, req.body.user_area_name]
      )
      .then((result) => {
        res.json(result.rows)
        console.log(res)
    })
      .catch((error) => {
        console.error(error);
        res.status(500).json(error);
      });
  });
  
  app.listen(port, () => console.log(`Listening on port ${port}`));