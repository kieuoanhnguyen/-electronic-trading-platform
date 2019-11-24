const express = require('express');
const exphbs = require('express-handlebars');
const router = require('./route/index.route');
const adminrouter = require('./route/admin.route');
const sellerrouter = require('./route/seller.route');
const shipperroute = require('./route/shipper.route');
const userroute = require('./route/user.route');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const port = 3000;

app.use(express.static('public'))

app.use('/', router);

app.use('/admin', adminrouter);

app.use('/seller', sellerrouter);

app.use('/shipper', shipperroute);

app.use('/user', userroute);

app.listen(port, () => console.log(`Example app with express on port ${port}!`));