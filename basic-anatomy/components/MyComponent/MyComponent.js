import { renderTemplate } from "/utils/renderTemplate.js";

const getTemplate = renderTemplate(
	"./components/MyComponent/MyComponent.template.html",
	"./components/MyComponent/MyComponent.styles.css"
);

class MyComponent extends HTMLElement {
	_quotes;
	_interval;
	_$quote;
	_$author;

	constructor() {
		super();

		this._interval = null;

		this._$quote = null;

		this._$author = null;

		this._quotes = [
			{
				quote: "Life is about making an impact, not making an income.",
				author: "Kevin Kruse",
			},
			{
				quote: "What you lack in talent can be made up with desire, hustle and giving 110% all the time.",
				author: "Don Zimmer",
			},
			{
				quote: "Success is walking from failure to failure with no loss of enthusiasm.",
				author: "Winston Churchill",
			},
			{
				quote: "Your time is limited, don't waste it living someone else's life.",
				author: "Steve Jobs",
			},
			{
				quote: "Winning isn't everything, but wanting to win is.",
				author: "Vince Lombardi",
			},
		];
	}

	connectedCallback() {
		getTemplate.then((template) => {
			this.appendChild(template.content.cloneNode(true));
			this._$quote = this.querySelector("h2");
			this._$author = this.querySelector("p");
			this._render();
			this._interval = this._setInterval(
				this.getAttribute("interval") ?? 3000
			);
		});
	}

	static get observedAttributes() {
		return ["interval"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "interval") {
			this._setInterval(newValue);
		}
	}

	_setInterval(value) {
		if (this._interval !== null) {
			clearInterval(this._interval);
		}
		if (value > 0) {
			this._interval = setInterval(() => this._render(), value);
		}
	}

	_render() {
		if (this._$quote !== null && this._$author !== null) {
			const randomIndex = Math.floor(Math.random() * this._quotes.length);
			const randomQuote = this._quotes[randomIndex];
			this.setAttribute("current-index", randomIndex);
			this._$quote.innerHTML = randomQuote.quote;
			this._$author.innerHTML = randomQuote.author;
		}
	}

	disconnectedCallback() {
		clearInterval(this._interval);
	}
}

window.customElements.define("my-component", MyComponent);

export { MyComponent };
