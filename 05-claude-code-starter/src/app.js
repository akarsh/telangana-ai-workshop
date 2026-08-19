import { isReady } from "./readiness.js";

const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const ready = isReady({
    hasLaptop: data.has("laptop"),
    sharedComputerAssigned: data.has("shared"),
    setupComplete: data.has("setup"),
  });
  result.textContent = ready ? "Ready for the coding lab" : "Setup support needed";
});

