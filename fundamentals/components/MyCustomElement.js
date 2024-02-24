class MyCustomElement extends HTMLElement {
    constructor() {
      super();
      console.log("My Custom Element constructed!");
    }

    connectedCallback() {
      console.log("My Custom Element added to the DOM");
    }

    static get observedAttributes() {
      return ["demo"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      console.log("Attribute Changed!", name, oldValue, newValue);
    }

    disconnectedCallback() {
      console.log("My Custom Element removed from the DOM!");
    }
  }

export { MyCustomElement }