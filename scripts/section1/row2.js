function keysOfS1Row2() {
  const row2keys = [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
  ];
  const row2 = document.createElement("div");
  row2.setAttribute("id", "s1-row2");
  row2keys.forEach((item) => {
    const btn = document.createElement("button");
    btn.innerText = item;
    row2.append(btn);
  });
  return row2;
}

export default keysOfS1Row2;
