var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/keyboard', function(req, res, next) {
    res.json({
        "type" : "buttons",
        "buttons" : ["1", "2", "3"]
    });
});

app.post('/message', function(req, res, next) {
    res.json({
        "message": {
            "text": "귀하의 차량이 성공적으로 등록되었습니다. 축하합니다!"
        }
    });
});

app.post('/friend', function(req, res, next) {
    res.send('');
});

app.delete('/chat_room/:user_key', function(req, res, next) {
    res.send('');
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
})