document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const description = document.getElementById("new-task-description");
  const list = document.getElementById("tasks");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const delB = document.createElement("button");
    delB.textContent = "X";
    const val = description.value;
    delB.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    })
    delB.style="left:20px"
    const newLi = document.createElement("li");
    newLi.textContent = val + "  ";
    newLi.appendChild(delB);
    list.appendChild(newLi);
    description.value = "";

  })
  e.preventDefault();
  const ulist = document.getElementById("tasks");

});
