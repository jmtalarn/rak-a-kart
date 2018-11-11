// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');

const business = require('./business');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3001;


var router = express.Router();



router.post('/payment', function (req, res) {

	const name = req.body.info.personal.name;
	const items = req.body.items;
	const country = req.body.info.shipping.country;

	const lastThree = req.body.info.payment.cardnumber.substr(req.body.info.payment.cardnumber.length - 3);
	const total = business.calculateTotal(items, country);
	res.json({
		message: ` Thank you ${name} for buying on our platform!`,
		charged: `A total of ${total} € was charged in your credit card ended with ${lastThree} `
	});
});


app.use('/api', router);


app.listen(port);
console.log('API backend listening on port ' + port);
