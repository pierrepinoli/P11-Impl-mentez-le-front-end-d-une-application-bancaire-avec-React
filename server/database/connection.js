const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'

module.exports = async () => {
  try {
    await mongoose.connect("mongodb+srv://pinolipierre:xPLO65mAeFeDqCNJ@cluster0.cxujq1z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
