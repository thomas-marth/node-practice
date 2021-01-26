import header from "./components/Header.js";
import footer from "./components/Footer.js";
import main from "./components/Main.js";
import data from "./data.js";

console.log(data);

header().render();
header().stylization();

main().render(data);
main().stylization();
