const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const personnelRoutes = require('./routes/personnel');

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/personnel', personnelRoutes);

const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/military_db';

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB підключено'))
    .catch(e => console.error('MongoDB помилка:', e));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Сервер запущено на порту ${port}`);
});
