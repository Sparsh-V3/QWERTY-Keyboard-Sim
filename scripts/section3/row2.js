function keysOfS3Row2() {
  const row2keys = ["NumLk", "/", "*", "-"];

  const row2 = document.createElement("div");
  row2.setAttribute("id", "s3-row2");
  row2keys.forEach((item) => {
    const btn = document.createElement("button");
    btn.innerText = item;
    row2.append(btn);
  });
  return row2;
}

export default keysOfS3Row2;
