const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('../config');

mongoose.connect(config.db.uri, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("➡️ connected to DB");
const handleError = (err) => console.log(`Error on DB Connection : ${err}`);

db.once("open", handleOpen);
db.on("error", handleError);

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true})); 

const startview = express.Router();

// 소스코드 수정 후 npm run-script build > node ./index.js 시작
console.log(path.resolve(__dirname,'../build'));

app.use('/', express.static(path.resolve(__dirname,'../build')));

//Router
//라우터 설정 에러 문제 problem url 이후의 router 설정이기 때문에 /Problem/ 으로 나타내야함.
const HomeRoute = express.Router();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/view/', require("../routes/routeHomeview")); // home 문제 랜덤 리스트 뿌려주는 라우터
app.use("/Problem/", require("../routes/routeProblem")); // 사용자들의 문제 요청 리스트 라우터
app.use('/comment/', require("../routes/routeYear")); // 3번째 뷰의 년도별 문제 리스트 라우터
app.use('/login/', require("../routes/routeLogin")); // Login 후 View 화면
app.use('/home/', HomeRoute); // Login 후 View 화면

//app.use('api/account/', require("../routes/account")); 

// Port setting
const port = 7376;
app.listen(port, function(){
  console.log("➡️ server on! ");
});
