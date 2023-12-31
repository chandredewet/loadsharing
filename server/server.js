const express = require("express");
let cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const userData = [];
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
  
//show all users
app.get("/users", async (req, res) => {
  console.log("All users to be listed...")
  try{
    const users = await pool.query("SELECT * FROM ls_users")
    res.json(users.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json(error);
  }
});

//add new user
app.post("/users", async (req, res) => {
  console.log("User to be added...")
  const {name, email, colour, area} = req.body
  console.log(name, email, colour, area);
  try {
    const newUser = await pool.query(`INSERT INTO ls_users (name, email, colour, user_area_name) VALUES ($1,$2,$3,$4)`, 
     [name, email, colour, area])
    console.log(newUser)
    res.json(newUser);
    console.log("adding + newUser");
  } catch (error) {
    console.log("error adding" + newUser);
    console.error(error);
    res.status(500).json(error);
  }
});
  
//edit user
app.put('/users/:id', async (req,res) => {
  console.log(`Edit user in process...`)
  const { id } = req.params;
  const {name, email, colour, area}  = req.body;
  try {
    const editUser = await pool.query('UPDATE ls_users SET  name = $1, email = $2, colour = $3, user_area_name = $4 WHERE id= $5;',[name, email, colour, area,id]);
    res.json(editUser);
  } catch(err) {
    console.error(err)
  }
});

//delete a user

app.delete('/users/:id', async (req,res) => {
  console.log(`Deleting user..`)
  const { id } = req.params;
  try {
    const deleteUser = await pool.query('DELETE FROM ls_users WHERE id= $1;',[id])
    res.json(deleteUser);
  } catch(err) {
    console.error(err)
  } 
});

//add unique areas
app.post("/areas", async (req, res) => {
 
  const requestTime = new Date().toLocaleString(); // Get current date and time
  console.log(`Area to be added... (${requestTime})`);

  const {area_name} = req.body
  console.log(area_name);
  try {
    const newArea = await pool.query(`INSERT INTO ls_areas (area_area_name) VALUES ($1)`, 
     [area_name])
    // console.log(newUser)
    res.json(newArea);
    console.log("adding + newArea");
  } catch (error) {
    console.log("error adding");
    console.error(error);
    res.status(500).json(error);
  }
});

//add schedule per user
app.post("/schedule", async (req, res) => {
 
  const requestTime = new Date().toLocaleString(); // Get date and time
  console.log(`Schedule to be added... (${requestTime})`);

  const {area_name} = req.body
  console.log(area_name);
  try {
    const newSchedule = await pool.query(`INSERT INTO ls_schedule (schedule_area_name, start, finsh, name, colour) VALUES ($1,$2,$3,$4, $5)`, 
     [schedule_area_name, start, finsh, name, colour])

    res.json(newSchedule);
    console.log("adding + newSchedule");
  } catch (error) {
    console.log("error adding");
    console.error(error);
    res.status(500).json(error);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));