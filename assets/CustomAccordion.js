import './CustomAccordion.css';
class CustomAccordion extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    this.shadowRoot.innerHTML = `<h1>test</h1>
    <p>test</p>`;
  }
}
window.customElements.define("custom-accordion", CustomAccordion);
