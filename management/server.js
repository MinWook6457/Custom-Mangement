const fs = require('fs')


const express = require('express') // express 모듈 사용
const bodyParser = require('body-parser') // body-parser 모듈 사용
const app = express() // express 객체 접근
const port = process.env.PORT || 5000 // 포트 번호 설정


const data = fs.readFileSync('./database.json')
const conf = JSON.parse(data)
const mysql = require('mysql')


const connection = mysql.createConnection({
  host : conf.host,
  user : conf.user,
  password : conf.password,
  port : conf.port,
  database : conf.database
})

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended : true}))

app.get('/api/customers',(req,res) => {
   connection.query(
    'SELECT * FROM management.customer_info',
    (err,rows,fields) => { // rows 에 데이터 담김
      res.send(rows)
    }
   )
})
/* 서버 반응 (성공 시 console.log 출력) */
app.listen(port, () => console.log(`Listening on port ${port}`)) // ` ` 를 사용해야 문자열 안에 변수 출력 가능

