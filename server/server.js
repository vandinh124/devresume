const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

//connect DB
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//Define routess
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/profile', require('./routes/profile.routes'));
app.use('/api/posts', require('./routes/posts.routes'));

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
	//Set static folder
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Listening to the Port ${PORT}`));
