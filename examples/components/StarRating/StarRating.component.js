import { renderTemplate } from "../../../utils/renderTemplate.js";

const getFiles = renderTemplate(
	"components/StarRating/StarRating.template.html",
	"components/StarRating/StarRating.styles.css"
);

class StarRating extends HTMLElement {
	constructor() {
		super();
		// shadow root
		this._$root = this.attachShadow({ mode: "open" });

		// elements
		this._$container = null;

		// data
		this._disabled = false;
		this._value = 0;
	}

	connectedCallback() {
		const listener = (event) => {
			if (this._disabled) return;
			this.value = event.target.getAttribute("data-value");
			this._render();
		};

		getFiles.then((template) => {
			this._$root.appendChild(template.content.cloneNode(true));
			this._$container = this._$root.querySelector(".container");
			this._$container.addEventListener("click", listener);
			this._disabled = this.getAttribute("disabled") !== null;
			this._render();
		});
	}

	static get observedAttributes() {
		return ["disabled", "value"];
	}

	set value(value) {
		if (value === null) return;
		if (value === this._value) this._value = 0;
		else this._value = value;
		this.dispatchEvent(new Event("change"));
	}

	get value() {
		return this._value;
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		const attributes = {
			disabled: () => {
				this._disabled = newValue !== null;
			},
			value: () => {
				this.value = newValue;
				this._render();
			},
		};

		if (oldValue !== newValue) return attributes[attr]();
	}

	handleSelection() {
		if (this._$container === null) return;
		this._$container.querySelectorAll("span").forEach((star) => {
			const isSelectedStar =
				this.value == star.getAttribute("data-value");
			const isAlreadySelected = star.classList.contains("selected");

			if (!isSelectedStar || isAlreadySelected)
				star.classList.remove("selected");
			else star.classList.add("selected");
		});
	}

	_render() {
		this.handleSelection();
	}

	disconnectedCallback() {
		this._$container.removeEventListener("click", listener);
	}
}

window.customElements.define("star-rating", StarRating);

export { StarRating };
