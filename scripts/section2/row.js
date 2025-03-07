function keysOfS2Row() {
    const rowkeys = [
      "Ctrl",
      "Fn",
      "🪟",
      "Alt",
      "            ",
      "Alt",
      "Ctrl",
    ];
    const row = document.createElement("div");
    row.setAttribute("id", "s2-row");
    rowkeys.forEach((item) => {
      const btn = document.createElement("button");
      btn.innerText = item;
      row.append(btn);
    });
    return row;
  }
  
  export default keysOfS2Row;
  