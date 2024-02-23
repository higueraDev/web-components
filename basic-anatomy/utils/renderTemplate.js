
/**
 * Renders a template by fetching an HTML file and a CSS file, and combining them into a template element.
 * @param {string} htmlFile - The path or URL of the HTML file to fetch.
 * @param {string} cssFile - The path or URL of the CSS file to fetch.
 * @returns {Promise<HTMLTemplateElement|null>} A promise that resolves to the template element, or null if there was an error fetching the files.
 */
export async function renderTemplate(htmlFile, cssFile) {
	try {
		const respHtml = await fetch(htmlFile);
		const html = await respHtml.text();
		const respCss = await fetch(cssFile);
		const css = await respCss.text();

		if (!html || !css) throw new Error("Error fetching file");
		const $template = document.createElement("template");
		$template.innerHTML = `
                <style>
                    ${css}
                </style>
                ${html}
            `;
		return $template;
	} catch (error) {
		console.error(error.name);
		return null;
	}
}
