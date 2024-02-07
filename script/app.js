let productsList = [
	{
		id: 1,
		name: "Crazy",
		price: "31000",
		image: "./images/products/burger-1.png",
		amount: 0,
		get TotalSum() {
			return this.price * this.amount;
		},
	},
	{
		id: 2,
		name: "Light",
		price: "26000",
		image: "./images/products/burger-2.png",
		amount: 0,
		get TotalSum() {
			return this.price * this.amount;
		},
	},
	{
		id: 3,
		name: "CheeseBurger",
		price: "29000",
		image: "./images/products/burger-3.png",
		amount: 0,
		get TotalSum() {
			return this.price * this.amount;
		},
	},
	{
		id: 4,
		name: "dBurger",
		price: "24000",
		image: "images/products/burger-4.png",
		amount: 0,
		get TotalSum() {
			return this.price * this.amount;
		},
	},
];

const products = document.querySelector(".wrapper__list");

function renderBungers() {
	productsList.forEach((item, i) => {
		let { id, name, price, image } = item;
		products.innerHTML += `
        <div div class = "wrapper__list-card"
        id = "${id}" >
                <p class="wrapper__list-count"></p>
                <img class="wrapper__list-image" src="${image}" alt="">
                <h3 class="wrapper__list-title">${name}</h3>
                <div class="wrapper__list-sub">
                    <p class="wrapper__list-text"> ${price} </p>
                    <button class="wrapper__list-btn"><img src="images/sell-icon.svg" alt=""></button>
                </div>
            </div>`;
	});
}
renderBungers();

const BungerButtons = document.querySelectorAll(".wrapper__list-btn"),
	btnBasket = document.querySelector(".wrapper__navbar-btn"),
	amoutBasket = document.querySelector(".warapper__navbar-count"),
	Basket = document.querySelector(".wrapper__navbar-basket"),
	closeBasket = document.querySelector(".wrapper__navbar-close"),
	TotalPrice = document.querySelector(".wrapper__navbar-totalprice");

btnBasket.addEventListener("click", () => Basket.classList.add("active"));
closeBasket.addEventListener("click", () => Basket.classList.remove("active"));

BungerButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		AddAmoumt(btn);
	});
});

function AddAmoumt(btn) {
	const BungerName = btn
		.closest(".wrapper__list-card")
		.querySelector(".wrapper__list-title").innerHTML;
	let currentBunger = productsList.find((item) => item.name == BungerName);
	console.log(currentBunger.amount);
	currentBunger.amount < 10
		? currentBunger.amount++
		: alert("вам больше нельзя");
	ProductsOfCartList(currentBunger);
}

// chapter two  - 15:00 05.02.2024

let Korzina = [];

function ProductsOfCartList(Bunger) {
	if (Bunger.amount > 0) {
		if (!Korzina.includes(Bunger)) {
			Korzina.push(Bunger);
		}
	}
	isAmountOfBunger();
}

const BungerPConut = document.querySelector(".wrapper__list-count");

function isAmountOfBunger() {
	let TotalSum = getTotalAmount();
	TotalPrice.innerHTML = GetTotalPrice();
	if (TotalSum > 0) {
		amoutBasket.classList.add("active");
		amoutBasket.innerHTML = TotalSum;
	} else {
		amoutBasket.classList.remove("active");
		amoutBasket.innerHTML = "";
	}
}

function getTotalAmount() {
	let sum = 0;
	productsList.forEach((element) => {
		sum += element.amount;
	});
	return sum;
}

function GetTotalPrice() {
	let local__price = 0;
	productsList.forEach((element) => {
		local__price += element.TotalSum;
	});
	return `${local__price} СУМ`;
}

const title = document.getElementById("titlejs");
const styles = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	margin: "0 auto",
	fontSize: "1.25rem",
	color: "#fff",
	transition: "all 0.3s ease-in-out",
	fontFamily:
		"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	fontWeight: "400",
};
const styleRanges = [
	{
		min: 0,
		max: 20,
		fontSize: "1rem",
		color: "rgb(170, 191, 117)",
	},
	{
		min: 20,
		max: 40,
		fontSize: "1.2rem",
		color: "rgb(183, 255, 0)",
	},
	{
		min: 40,
		max: 60,
		fontSize: "1.4rem",
		color: "rgb(152, 44, 44)",
	},
	{
		min: 60,
		max: 80,
		fontSize: "1.6rem",
		color: "rgb(139, 1, 1)",
	},
	{
		min: 80,
		max: 100,
		fontSize: "1.8rem",
		color: "rgb(255, 0, 0)",
		fontWeight: "bold",
	},
];
Object.assign(title.style, styles);

let sum = 0;
const titleWhile = setInterval(() => {
	sum++;
	title.innerHTML = sum;

	const style = styleRanges.find(
		(range) => sum >= range.min && sum <= range.max
	);
	if (style) {
		Object.assign(title.style, style);
	}

	if (sum === 100) {
		clearInterval(titleWhile);
	}
}, 50);
