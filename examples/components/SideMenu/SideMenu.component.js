import { renderTemplate } from "../../../utils/renderTemplate.js";

const getFiles = renderTemplate(
	"components/SideMenu/SideMenu.template.html",
	"components/SideMenu/SideMenu.styles.css"
);

class SideMenu extends HTMLElement {
	constructor() {
		super();

		// shadow root
		this._$root = this.attachShadow({ mode: "open" });

		// DOM elements
		this._$frame = null;
		this._$controls = null;

		// data
		this._open = false;

		// listeners
		this._listener = null;
	}

	connectedCallback() {
		const actions = {
			close: false,
			open: true,
		};
		this._listener = (e) => {
			if (e.target.dataset.action === undefined) return;
			this.open = actions[e.target.dataset.action];
			this._render();
		};
		getFiles.then((template) => {
			this._$root.appendChild(template.content.cloneNode(true));
			this._$frame = this._$root.querySelector(".frame");
			this._$frame.addEventListener("click", this._listener);
			this._$controls = this._$root.querySelector(".controls");
			this._$controls.addEventListener("click", this._listener);
		});
	}

	set open(value) {
		this._open = value;
	}

	get open() {
		return this._open;
	}

	_render() {
		if (this._$frame === null) return;
		if (this._open) {
			this._$frame.classList.add("open");
			this.dispatchEvent(new Event("menu-opened"));
		} else {
			this._$frame.classList.remove("open");
			this.dispatchEvent(new Event("menu-closed"));
		}
	}

	removedCallback() {
		this._$frame.removeEventListener("click", this._listener);
	}
}

customElements.define("side-menu", SideMenu);

export { SideMenu };
