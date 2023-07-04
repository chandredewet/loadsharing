import {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import getData from "./functions/getData";

const App = () => {

  const [usersData, setUsersData] = useState([]);

    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setUsersData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users usersData={usersData} setUsersData={setUsersData}/>} />
        <Route path="schedule" element={<Schedule usersData={usersData} />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
