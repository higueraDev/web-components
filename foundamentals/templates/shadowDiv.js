const simpleDiv = document.getElementById("simple-div");
const shadow = simpleDiv.attachShadow({ mode: "open" });

shadow.innerHTML = `
    <style>
        * {
            background-color: red;
        }
    </style>
    <p>Shadow DOM</p>
`;

