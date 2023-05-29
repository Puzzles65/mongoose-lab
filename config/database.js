// Require mongoose
const mongoose = require('mongoose')

async function connectDB(){
  // Connecting the mongodb database
  await mongoose.connect(process.env.DATABASE_URL) // This is the method that connects to the database
  // Waiting for connection...
  // Once connection established it moves on and logs the below
  const db = mongoose.connection
  console.log(`Database connected to ${db.name} on ${db.host}:${db.port} 🚀`)
}
connectDB()