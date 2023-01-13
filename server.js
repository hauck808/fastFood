import express from 'express';
import { writeFile } from 'fs';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(morgan('tiny'));

app.use(express.static('./public'));
app.use(express.json());

app.get('/foodData', (req, res) => {
	res.status(200).json({
		types: ['Pizza', 'Hamburger', 'Wiener Schnitzel', 'Döner Kebab'],
		seasonings: ['Hot', 'Regular'],
		sideDishes: ['Potato Salad', 'French Fries', 'Onion Rings', 'Rice'],
	});
});

app.post('/orders', (req, res) => {
	let order = req.body;
	console.log(order);
});

app.get('*', (req, res) => res.status(404).send('<h1>Not found</h1>'));

const PORT = process.env.PORT ?? 5555;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
