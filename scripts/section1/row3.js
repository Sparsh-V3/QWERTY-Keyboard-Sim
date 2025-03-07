function keysOfS1Row3() {
  const row3keys = [
    "Tab",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "[",
    "]",
    "\\",
  ];
  const row3 = document.createElement("div");
  row3.setAttribute("id", "s1-row3");
  row3keys.forEach((item) => {
    const btn = document.createElement("button");
    btn.innerText = item;
    row3.append(btn);
  });
  return row3;
}

export default keysOfS1Row3;
