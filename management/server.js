const express = require('express') // express 모듈 사용
const bodyParser = require('body-parser') // body-parser 모듈 사용
const app = express() // express 객체 접근
const port = process.env.PORT || 5000 // 포트 번호 설정

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended : true}))

app.get('/api/customers',(req,res) => {
    res.send([
        {
            'id' : 1,
            'name' : '김민욱',
            'birthday' : '000406',
            'gender' : '남자',
            'job' : '대학생',
            },
            {
              'id' : 2,
              'name' : '백진겸',
              'birthday' : '001010', 
              'gender' : '남자',
              'job' : '백수',
            }
    ])
})

/* 서버 반응 (성공 시 console.log 출력) */
app.listen(port, () => console.log(`Listening on port ${port}`)) // ` ` 를 사용해야 문자열 안에 변수 출력 가능

