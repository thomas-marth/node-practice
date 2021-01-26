export default function () {
  let markup = "";

  function render(data) {
    markup = data.reduce((acc, { id, name, src, width, description }) => {
      acc += `<li key="${id}">
        <img width="${width}" src=${src}>
        <h2>${name}</h2>
        <p>${description}</p>
        </li>`;
      return acc;
    }, "");
    document.body.insertAdjacentHTML(
      "beforeend",
      `<main><ul>${markup}</ul></main>`
    );
  }

  function stylization() {
    document.querySelector("main > ul").className = "main-list";
    document
      .querySelectorAll("main > ul > li")
      .forEach((item) => (item.className = "main-list__item"));
  }
  return { render, stylization };
}
