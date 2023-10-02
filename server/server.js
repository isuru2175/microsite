const express = require('express');
const cors = require('cors');
const HomeSlideData=require('./db/homeSlide.json')
const NavigationData=require('./db/navigation.json')
const slideTwoData=require('./db/slideTwo.json')
const footerData=require('./db/footer.json')
const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => res.status(200).json({ msg: 'Server running' }));
app.get('/homeslide', (req, res) => res.status(200).json(HomeSlideData));
app.get('/navigation', (req, res) => res.status(200).json(NavigationData));
app.get('/slidetwo', (req, res) => res.status(200).json(slideTwoData));
app.get('/footer', (req, res) => res.status(200).json(footerData));

app.listen(4000, () => console.log('Server running on port 4000'));
