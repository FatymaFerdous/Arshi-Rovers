const express = require("express");
const app = express();
require("dotenv").config();
const Categoryrouter = require("./api/category/router");
const UserRouter = require("./api/user/router");
const Brandrouter = require("./api/Brands/router");
const Productrouter = require("./api/Products/router");
const Orderrouter = require("./api/Orders/router");
const path = require ('path')
const cors = require("cors");
const clientPath = path.join(__dirname,'./Client/dist')
app.use('/', express.static(clientPath))
const port = process.env.SERVER_PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api", Categoryrouter);
app.use("/api", Userrouter);
app.use("/api", Productrouter);
app.use("/api", Brandrouter);
app.use("/api", Orderrouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'./client/dist/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
