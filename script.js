const elevatorButtons = document.querySelectorAll(".elevator-btn");

let floorNumber = 0;
const floorDiv = document.createElement("div");
const floorText = document.createElement("p");
floorDiv.appendChild(floorText);
floorDiv.classList.add("floorDisplay");

elevatorButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    floorNumber = btn.innerHTML;
    floorText.innerHTML = `You arrived at floor ${floorNumber}`;
    floorDiv.style.opacity = 1;
    document.getElementById("content").appendChild(floorDiv);

    setTimeout(() => {
      floorDiv.style.opacity = 0;
    }, "2000");
  });
});
