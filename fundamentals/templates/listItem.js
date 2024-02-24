const movies = [
	{
		title: "Harry Potter",
		plot: "A young wizard finds out he is a wizard and goes to a wizard school",
	},
	{
		title: "Star Wars",
		plot: "A young Jedi finds out he is a Jedi and goes to a Jedi school",
	},
	{
		title: "The Lord of the Rings",
		plot: "A young Hobbit finds out he is a Hobbit and goes to a Hobbit school",
	},
];

const $template = document.getElementById("list-item");
const $list = document.getElementById("movie-list");

movies.forEach((movie) => {
	const $clone = document.importNode($template.content, true);
	$clone.querySelector("h3").innerText = movie.title;
	$clone.querySelector("p").innerText = movie.plot;
	$list.appendChild($clone);
});
