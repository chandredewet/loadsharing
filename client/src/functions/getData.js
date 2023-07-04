export default async function getData() {
    try {
      console.log("Fetching data...");
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
}
