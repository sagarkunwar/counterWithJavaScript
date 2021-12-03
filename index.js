let countAll = document.getElementById("count");
let saveAll = document.getElementById("save");
let count = 0;

function increment() {
  count += 1;
  countAll.innerText = count;
  console.log(count);
}

function save() {
  let countStr = count + " - ";
  saveAll.textContent = saveAll.innerText + countStr;
  countAll.innerText = 0;
  count = 0;

  console.log(countStr);
}
