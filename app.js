const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/errors')

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

//when no path is found defualt page displayed
//adding this for rebase conflict even on develop man
app.use(errorController.get404);

app.listen(3000);
