import "@primer/view-components/app/components/primer/alpha/action_list";
console.log("Action List component loaded");
const actionList = document.querySelector("action-list");

if (actionList?.getAttribute("data-catalyst") !== "") {
  const errorDiv = document.createElement("div");
  errorDiv.textContent = "Action List was not initialized correctly";
  errorDiv.style.color = "red";
  document.body.appendChild(errorDiv);
  throw new Error("Action List was not initialized correctly");
}
