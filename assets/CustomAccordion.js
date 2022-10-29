class CustomAccordion extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    this.shadowRoot.innerHTML = `<h1>test</h1>
    <p>lorem ipsum dolor sit amet</p>`;
  }

}
