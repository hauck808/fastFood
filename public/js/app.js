import { foodData } from '../data/food.js';
const { createApp } = Vue;

const myApp = {
	data() {
		return {
			...foodData,
			fullname: '',
			email: '',
			phone: '',
			food: '',
			seasoning: '',
			sideDish: [],
		};
	},
	methods: {
		submit() {
			alert(
				`Full Name: ${this.fullname}
Mail: ${this.email}
Phone:${this.phone}
Food:${this.food}, ${this.seasoning}
Side Dishes: ${this.sideDish.join(', ')}`
			);
			axios.post('/orders', {
				fullname: this.fullname,
				email: this.email,
				phone: this.phone,
				food: this.food,
				seasoning: this.seasoning,
				sideDish: this.sideDish,
			});
		},
	},
};

createApp(myApp).mount('#app');
