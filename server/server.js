const express = require("express")

const app = express();


app.get('/', function (req, res) {
	res.send('<h1>kkfak</h1>')
})
app.get('/data', function (req, res) {
	res.json({user: 'imooc', type: 'it react',age:"29"})
})

app.listen(9093, function () {
	console.log("listen on port 9093")
})