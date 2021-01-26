export default function () {
  const markup = `<header>
      <h1>Logo</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>`;
  const render = function () {
    document.body.insertAdjacentHTML("beforeend", markup);
  };
  const stylization = function () {
    document.querySelector("header").className = "header";
    document.querySelector("nav").className = "nav";
    document.querySelector("ul").className = "nav-list";
    document
      .querySelectorAll("li")
      .forEach((elem) => (elem.className = "nav-item"));
    document.querySelector("h1").className = "logo";
  };
  return { render, stylization };
}
