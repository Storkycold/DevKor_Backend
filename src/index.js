const express = require('express');
const app = express(); 
const port = 5000; 

const loggingMiddleware = (req, res, next) => {
    console.log(req);
    next(); 
} // next: 다음 middleware, req: 요청, res: 응답 
app.use(loggingMiddleware); // 만든 함수를 middleware로 쓰겠다 

app.get('/', (req, res) => {
    res.send('Hello World!'); 
})

app.listen(port); 

// js는 싱글 스레드에서 돌아간다. but 동시성 처리 가능 
// todo list 작성하기 