function keysOfS3Row1() {
  const row1keys = ["Home", "End", "PgUp", "PgDn"];

  const row1 = document.createElement("div");
  row1.setAttribute("id", "s3-row1");
  row1keys.forEach((item) => {
    const btn = document.createElement("button");
    btn.innerText = item;
    row1.append(btn);
  });
  return row1;
}

export default keysOfS3Row1;
