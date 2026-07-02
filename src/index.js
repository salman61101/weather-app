import "./style.css";

import { setupSearch } from "./dom";
import { displayWelcome } from "./ui";

displayWelcome();

setupSearch();

document
    .getElementById("location-input")
    .value = "London";

document
    .getElementById("search-form")
    .requestSubmit();