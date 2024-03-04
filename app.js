const sainuu = document.getElementById("back-color");
const click = document.querySelectorAll(".button");

click.forEach((el) => {
  el.onclick = function () {
    sainuu.style.display = "block";
  };
});
console.log(sainuu);
window.onclick = function (pointer) {
  if (pointer.target == sainuu) {
    sainuu.style.display = "none";
  }
};

const title = document.getElementById("bottonOFtitle");
const description = document.getElementById("bottonOFdescription");
const status2 = document.getElementById("bottonOFStatus");
const Priority = document.getElementById("bottonOFPriority");
const addTask = document.getElementById("addTsk");

let states = [];

const firstGet = JSON.parse(localStorage.getItem("keytoDo"));

states = firstGet ? firstGet : [];
// console.log(states);

const uniqId = () => {
  const uniq = "id" + new Date().getTime();
  return uniq;
};

const setData = (obj) => {
  obj.id = uniqId();
  states.push({ ...obj });
  console.log(states);
  let temp = JSON.stringify(states);
  console.log(temp);
  localStorage.setItem("keytoDo", temp);

  //   location.reload();
  render();
};

let myObject = () => {
  (title.value = ""),
    (description.value = ""),
    (status2.value = "To-do"),
    (Priority.value = "low");
};

addTask.addEventListener("click", () => {
  newTask = {
    title: title.value,
    description: description.value,
    status: status2.value,
    Priority: Priority.value,
  };

  console.log(newTask);
  setData(newTask);
  myObject();
  sainuu.style.display = "none";
  //   render();
  //   location.reload();
});

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
// console.log(first, second, third, fourth);÷

const card = (prop) => {
  const { title, description, id, Priority } = prop;

  return `
        <div class="mid" id= "${id}">
            <div class="mid-inner">
              <div class="zuun">
                <div class="circle" id = "${id}">
                  <i class="fa-solid fa-check" style="font-size: 20px"></i>
                </div>
              </div>
              <div class="dund">
                <div style="font-weight: bold">${title}</div>
                <div>${description}</div>
                <div class="back">${Priority}</div>
              </div>
              <div class="baruun">
                <div class="icons" id="${id}"><i class="fa-solid fa-x"></i></div>
                <div class="icons" id="${id}"><i class="fa-solid fa-pen"></i></div>
              </div>
            </div>
          </div>
  `;
};

const render = () => {
  const response = JSON.parse(localStorage.getItem("keytoDo"));
  console.log(response);
  first.innerHTML = "";
  second.innerHTML = "";
  third.innerHTML = "";
  fourth.innerHTML = "";

  console.log("revderrrere");
  response?.forEach((el) => {
    const result = card(el);
    console.log(el.status);
    switch (el.status) {
      case "To-do":
        // first.innerHTML += result;
        first.innerHTML = first.innerHTML + result;
        break;
      case "In-progress":
        second.innerHTML += result;
        break;
      case "Stuck":
        third.innerHTML += result;
        break;
      case "Done":
        fourth.innerHTML += result;
        break;
    }
  });
};
render();
