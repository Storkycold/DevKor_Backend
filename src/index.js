const express = require('express');
const app = express(); 
const port = 3000; 

const loggingMiddleware = (req, res, next) => {
    console.log(req);
    next(); 
} // next: 다음 middleware, req: 요청, res: 응답 
app.use(loggingMiddleware); // 만든 함수를 middleware로 쓰겠다 

app.get('/', (req, res) => {
    res.send('Hello World!'); 
})

app.listen(port); 