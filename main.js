import express from "express";
const app = express();
const port = 4000;
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
app.get('/', (req, res) => {
    res.json({msg:"Hello World!"})
  })
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`)
  })