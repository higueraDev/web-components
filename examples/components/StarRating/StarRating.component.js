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
		getFiles.then((template) => {
			this._$root.appendChild(template.content.cloneNode(true));
		});
		this._disabled = this.getAttribute("disabled") !== null;
	}

	static get observedAttributes() {
		return ["disabled"];
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		const attributes = {
			disabled: () => {
				this._disabled = newValue === "true";
			},
		};

		if (oldValue !== newValue) return attributes[attr]();
	}

	render() {}

	disconnectedCallback() {}
}

window.customElements.define("star-rating", StarRating);

export { StarRating };
