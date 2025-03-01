let totalTask = 6;
let totalCompletedTask = 14;
const taskCount = document.getElementById("taskCount");
const CompletedTask = document.getElementById("CompletedTask");
taskCount.innerText = parseInt(totalTask);
CompletedTask.innerText = parseInt(totalCompletedTask);

const activityLog = document.getElementById("activityLog");
const ClearHistory = document.getElementById("ClearHistory");

ClearHistory.addEventListener("click", () => {
  activityLog.innerHTML = "";
});

const card1 = {
  title: document.getElementById("title1"),
  button: document.getElementById("button1"),
};
const card2 = {
  title: document.getElementById("title2"),
  button: document.getElementById("button2"),
};
const card3 = {
  title: document.getElementById("title3"),
  button: document.getElementById("button3"),
};
const card4 = {
  title: document.getElementById("title4"),
  button: document.getElementById("button4"),
};
const card5 = {
  title: document.getElementById("title5"),
  button: document.getElementById("button5"),
};
const card6 = {
  title: document.getElementById("title6"),
  button: document.getElementById("button6"),
};

card1.button.addEventListener("click", () => {
  alert("Board Updated Succesfully");
  totalTask -= 1;
  taskCount.innerText = totalTask;
  totalCompletedTask += 1;
  CompletedTask.innerText = totalCompletedTask;
  card1.button.setAttribute("disabled", "true");
  card1.button.style.backgroundColor = "#9b9b9b";
  card1.button.style.color = "#fff";
  card1.button.style.cursor = "not-allowed";
  const currentTime = new Date().toLocaleTimeString();
  activityLog.innerHTML += ` <p class="px-4 py-2 rounded bg-slate-100 my-2">You have completed the Task ${card1.title.innerText} at ${currentTime}</p>`;

  if (taskCount < 1 || taskCount.innerText < 1) {
    alert("Congrates! You have completed all the tasks");
    taskCount.innerText = 0;
  }
});
card2.button.addEventListener("click", () => {
  alert("Board Updated Succesfully");
  totalTask -= 1;
  taskCount.innerText = totalTask;
  totalCompletedTask += 1;
  CompletedTask.innerText = totalCompletedTask;
  card2.button.setAttribute("disabled", "true");
  card2.button.style.backgroundColor = "#9b9b9b";
  card2.button.style.color = "#fff";
  card2.button.style.cursor = "not-allowed";
  const currentTime = new Date().toLocaleTimeString();
  activityLog.innerHTML += ` <p class="px-4 py-2 rounded bg-slate-100 my-2">You have completed the Task ${card2.title.innerText} at ${currentTime}</p>`;

  if (taskCount < 1 || taskCount.innerText < 1) {
    alert("Congrates! You have completed all the tasks");
    taskCount.innerText = 0;
  }
});
card3.button.addEventListener("click", () => {
  alert("Board Updated Succesfully");
  totalTask -= 1;
  taskCount.innerText = totalTask;
  totalCompletedTask += 1;
  CompletedTask.innerText = totalCompletedTask;
  card3.button.setAttribute("disabled", "true");
  card3.button.style.backgroundColor = "#9b9b9b";
  card3.button.style.color = "#fff";
  card3.button.style.cursor = "not-allowed";
  const currentTime = new Date().toLocaleTimeString();
  activityLog.innerHTML += ` <p class="px-4 py-2 rounded bg-slate-100 my-2">You have completed the Task ${card3.title.innerText} at ${currentTime}</p>`;

  if (taskCount < 1 || taskCount.innerText < 1) {
    alert("Congrates! You have completed all the tasks");
    taskCount.innerText = 0;
  }
});
card4.button.addEventListener("click", () => {
  alert("Board Updated Succesfully");
  totalTask -= 1;
  taskCount.innerText = totalTask;
  totalCompletedTask += 1;
  CompletedTask.innerText = totalCompletedTask;
  card4.button.setAttribute("disabled", "true");
  card4.button.style.backgroundColor = "#9b9b9b";
  card4.button.style.color = "#fff";
  card4.button.style.cursor = "not-allowed";
  const currentTime = new Date().toLocaleTimeString();
  activityLog.innerHTML += ` <p class="px-4 py-2 rounded bg-slate-100 my-2">You have completed the Task ${card4.title.innerText} at ${currentTime}</p>`;

  if (taskCount < 1 || taskCount.innerText < 1) {
    alert("Congrates! You have completed all the tasks");
    taskCount.innerText = 0;
  }
});
card5.button.addEventListener("click", () => {
  alert("Board Updated Succesfully");
  totalTask -= 1;
  taskCount.innerText = totalTask;
  totalCompletedTask += 1;
  CompletedTask.innerText = totalCompletedTask;
  card5.button.setAttribute("disabled", "true");
  card5.button.style.backgroundColor = "#9b9b9b";
  card5.button.style.color = "#fff";
  card5.button.style.cursor = "not-allowed";
  const currentTime = new Date().toLocaleTimeString();
  activityLog.innerHTML += ` <p class="px-4 py-2 rounded bg-slate-100 my-2">You have completed the Task ${card5.title.innerText} at ${currentTime}</p>`;

  if (taskCount < 1 || taskCount.innerText < 1) {
    alert("Congrates! You have completed all the tasks");
    taskCount.innerText = 0;
  }
});
card6.button.addEventListener("click", () => {
  alert("Board Updated Succesfully");
  totalTask -= 1;
  taskCount.innerText = totalTask;
  totalCompletedTask += 1;
  CompletedTask.innerText = totalCompletedTask;
  card6.button.setAttribute("disabled", "true");
  card6.button.style.backgroundColor = "#9b9b9b";
  card6.button.style.color = "#fff";
  card6.button.style.cursor = "not-allowed";
  const currentTime = new Date().toLocaleTimeString();
  activityLog.innerHTML += ` <p class="px-4 py-2 rounded bg-slate-100 my-2">You have completed the Task ${card6.title.innerText} at ${currentTime}</p>`;

  if (taskCount < 1 || taskCount.innerText < 1) {
    alert("Congrates! You have completed all the tasks");
    taskCount.innerText = 0;
  }
});

// theme switcher
const themeSwitcher = document.getElementById("themeButton");
const body = document.body;
themeSwitcher.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  body.style.backgroundColor = `rgb(${r},${g},${b})`;
});


// daye date
 const today = new Date();
 const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 const option = { year: "numeric", month: "short", day: "2-digit" };
 const actualData = today.toLocaleDateString("en-US", option);

 document.getElementById("day").textContent = days[today.getDay()];
 document.getElementById("date").textContent = actualData;