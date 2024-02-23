import { renderTemplate } from "../../utils/renderTemplate.js";

const pollData = {
	question: "What is your favorite programming language?",
	answers: ["JavaScript", "Python", "Java", "C++", "Ruby", "Other"],
};

const $template = renderTemplate(
	"./components/PollComponent/PollComponent.template.html",
	"./components/PollComponent/PollComponent.styles.css"
);

class PollComponent extends HTMLElement {
	constructor() {
		super();

		this._attached = false;
		this._data = null;
		this._selected = null;
		this._listener = null;

		// Elements
		this._$root = this.attachShadow({ mode: "open" });
		this._$question = null;
		this._$answers = null;
	}

	connectedCallback() {
		this._attached = true;
		this._listener = (event) => {
			this._$answers.querySelectorAll("li").forEach(($li, index) => {
				if ($li === event.target) this.selected = index;
			});
		};

		$template.then((files) => {
			this._$root.appendChild(files.content.cloneNode(true));
			this._$question = this._$root.querySelector("h2");
			this._$answers = this._$root.querySelector("ul");
			this._$answers.addEventListener("click", this._listener);
			this._render();
		});
	}

	set data(value) {
		if (this._data === value) return;
		this._data = value;
		this._render();
	}

	get data() {
		return this._data;
	}

	set selected(index) {
		const $answer = this._$answers.querySelector(
			`li:nth-child(${index + 1})`
		);
		if ($answer !== null) {
			this._$answers
				.querySelectorAll("li")
				.forEach(($li) => $li.classList.remove("selected"));
			this._selected = index;
			$answer.classList.add("selected");
		}
	}

	get selected() {
		return this._selected;
	}

	_renderListItems() {
		this.data.answers.forEach((answer) => {
			const $li = document.createElement("li");
			$li.innerHTML = answer;
			this._$answers.appendChild($li);
		});
	}

	_render() {
		if (this._attached && this.data !== null) {
			this._$question.innerHTML = this.data.question;
			this._renderListItems();
		} else {
			this.data = pollData;
		}
	}

	disconnectedCallback() {
		this._attached = false;
		this._$answers.removeEventListener("click", this._listener);
	}
}

window.customElements.define("poll-component", PollComponent);

export { PollComponent };
