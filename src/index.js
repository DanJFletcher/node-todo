
import express from 'express'
import path from 'path'
import 'dotenv/config'
import bodyParser from 'body-parser'
import apiRoutes from './Routes'
import morgan from 'morgan'

const app  = express();
const port = process.env.PORT || 3000; // set the port for the app

// set static files location
// used for requests that our frontend will make
app.use(express.static(__dirname + '../public'))

// APP CONFIGURATION ================
// ==================================
// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// log all requests to the console
app.use(morgan('dev'));

// ROUTES FOR OUR API =============================
//  ===============================================
apiRoutes(app);

// MAIN CATCHALL ROUTE ------------
// SEND USERS TO FRONTEND ---------
// has to be regestered after API ROUTES
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/../public/index.html'))
});

app.listen(port);

console.log(`Listen: There's a hell of a good universe on port ${port}; Let's Go!`)