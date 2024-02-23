class CustomAnchor extends HTMLAnchorElement {
  constructor() {
    super();
    console.log("custom-anchor")
  }

  connectedCallback() {
    this.addEventListener("click", (e) => {
      e.preventDefault();
      const result = confirm("Are you sure?");
      if (result) window.location.href = this.href;
    });
  }
}

export { CustomAnchor };
