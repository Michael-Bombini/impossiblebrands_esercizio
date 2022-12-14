const accordions = document.querySelectorAll(".accordion");

accordions.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.nextElementSibling.style.display === "block") {
      element.nextElementSibling.style.display = "none";
      element.classList.remove("active");
    } else {
      element.nextElementSibling.style.display = "block";
      element.classList.add("active");
    }
  });
});

// const template = document.createElement("template");
// template.innerHTML = ` 
// <style>

// video {
//   width: 100%;
// }
// .accordions {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }
// .accordion,
// .content {
//   width: 100%;
// }
// .accordion {
//   background-color: #121212;
//   font-weight: 700;
//   color: #fff;
//   text-align: center;
//   padding: 2rem;
//   cursor: pointer;
//   padding: 18px;
//   border: none;
//   margin-top: 0;
// }
// .accordion:after {
//   content: "+";
//   vertical-align: middle;
//   font-size: 1rem;
//   margin-left: 0.5rem;
// }
// .active:after {
//   content: "X";
// }

// .content {
//   background-color: #181818;
//   color: #fff;
//   text-align: center;
//   padding: 1.5rem;
//   display: none;
// }

// .accordion-title {
//   font-weight: 600;
//   margin-bottom: 0.5rem;
//   border-bottom: 1px solid #fff;
//   padding: 0.5rem;
// }
// </style>

// <div class="accordion">Product Description</div>
// <div class="content">
//   <div class="accordion-product-description">{{product.description}}</div>
// </div>
// `;

// class CustomAccordion extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: "open" });
//     this.shadowRoot.appendChild(template.content.cloneNode(true));
//   }

//   showContent() {
//     const element = this.shadowRoot.querySelector(".accordion");
//     const content = this.shadowRoot.querySelector(".content");
//     if (element.nextElementSibling.style.display === "block") {
//       content.style.display = "none";
//       element.classList.remove("active");
//     } else {
//       content.style.display = "block";
//       element.classList.add("active");
//     }
//   }

//   connectedCallBack() {
//     const element = this.shadowRoot.querySelector(".accordion");
//     const content = this.shadowRoot.querySelector(".content");
//     this.shadowRoot.addEventListener("click", () => {
//       this.showContent();
//     });
//   }
// }

// window.customElements.define("custom-accordion", CustomAccordion);
