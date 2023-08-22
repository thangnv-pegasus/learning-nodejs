const express = require("express");
const router = express.Router();
const app = express();
const server = require('http').Server(app)
const port = 3000;
const AppRouter = require("./app/routes/app.routes");
const { home } = require("./app/controllers/home.controller");
const bodyParser = require("body-parser");
const io = require('socket.io')(server)

io.on('connection',(socket) => {
  console.log("dang co nguoi ket noi")
  console.log(socket)
})

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

AppRouter(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
