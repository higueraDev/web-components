import { DivisionElement } from "./DivisionElement.js";

class MultiplyElement extends DivisionElement {
  multiplyByTen(value) {
    console.log(parseInt(value) * 10);
  }
}

export { MultiplyElement };
