function keysOfS1Row1() {
  const row1keys = [
    "Esc",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "Insert",
    "PrtSc",
    "Delete",
  ];
  const row1 = document.createElement("div");
  row1.setAttribute("id", "s1-row1");
  row1keys.forEach((item) => {
    const btn = document.createElement("button");
    btn.innerText = item;
    row1.append(btn);
  });
  return row1;
}

export default keysOfS1Row1;
