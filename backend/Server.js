const http = require('http');

require('dotenv').config();

const app = require('./app');
const { connectDB } = require('./db');
const { loadPlanetsData } = require('./models/planets.model');
// const { loadLaunchData } = require('./models/launches.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await connectDB();
    await loadPlanetsData();
     //await loadLaunchData();
  
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();