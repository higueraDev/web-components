const $body = document.querySelector("body");
const target = document.getElementById("htmlImports");

const respHtml = await fetch("./imports/Button/Button.template.html");
const respCss = await fetch("./imports/Button/Button.styles.css");
const html = await respHtml.text();
const styles = await respCss.text();

target.innerHTML = `
                    <style>
                        ${styles}
                    </style>
                    ${html}
                    `;
