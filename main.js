import express from "express";
import movieRoutes from"./routes/marklist.route.js"
import connectDB from "./lib/db.js";
const app = express();
const port = 4000;
//Data Understanding middlewares

app.use(express.json());
app.use(express.urlencoded({extended:true}))

//Connect DB

connectDB();

app.get('/', (req, res) => {
  res.json({msg:"Hello World!"})
})

//Crud Functionalities
app.use('/movies',movieRoutes);
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`)
})