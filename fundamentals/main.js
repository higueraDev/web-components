import { CustomAnchor } from "./components/CustomAnchor.js";
import { DivisionElement } from "./components/DivisionElement.js";
import { MultiplyElement } from "./components/MultiplyElement.js";
import { MyCustomElement } from "./components/MyCustomElement.js";
import { listItem, shadowDiv } from "./templates/index.js";
import * as htmlImports from "./imports/htmlImports.js";

const elements = [
	{
		tag: "my-custom-element",
		builder: MyCustomElement,
	},
	{
		tag: "division-element",
		builder: DivisionElement,
	},
	{
		tag: "multiply-element",
		builder: MultiplyElement,
	},
	{
		tag: "custom-anchor",
		builder: CustomAnchor,
		builtIn: {
			extends: "a",
		},
	},
];

elements.forEach(({ tag, builder, builtIn = {} }) => {
	window.customElements.define(tag, builder, builtIn);

	if (!builtIn.extends) {
		let $el = document.createElement(tag);

		document.body.appendChild($el);
	}
});
