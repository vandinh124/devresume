const express = require('express');
const connectDB = require('./config/db')
const app = express();

//connect DB
connectDB();

//Init Middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('API Running'))

//Define routes
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/profile', require('./routes/profile.routes'));
app.use('/api/posts', require('./routes/posts.routes'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Listening to the Port ${PORT}`));
