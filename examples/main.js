export { SideMenu } from "./components/SideMenu/SideMenu.component.js";
export { StarRating } from "./components/StarRating/StarRating.component.js";

const $starRating = document.querySelector("star-rating");

$starRating.addEventListener("change", (event) => {
	const value = event.target.value;
	console.log("change", value);
});
