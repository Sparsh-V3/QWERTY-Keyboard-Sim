function restKeys() {
  const keysPart1 = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];
  const keysPart2 = ["0", "."];
  const keysPart3 = ["+", "Enter"];

  const restPart1 = document.createElement("div");
  restPart1.setAttribute("id", "s3-restPart1");
  keysPart1.forEach((item) => {
    const btn = document.createElement("button");
    btn.innerText = item;
    restPart1.append(btn);
  });
  const restPart2 = document.createElement("div");
  restPart2.setAttribute("id", "s3-restPart2");
  keysPart2.forEach((item) => {
    const btn = document.createElement("button");
    btn.innerText = item;
    restPart2.append(btn);
  });
  const restPart3 = document.createElement("div");
  restPart3.setAttribute("id", "s3-restPart3");
  keysPart3.forEach((item) => {
    const btn = document.createElement("button");
    btn.innerText = item;
    restPart3.append(btn);
  });

  const restPart = document.createElement("div");
  restPart.setAttribute("id", "s3-restPart");

  const restArea1 = document.createElement("div");
  restArea1.setAttribute("id", "s3-restArea1");
  restArea1.append(restPart1, restPart2);

  const restArea2 = document.createElement("div");
  restArea2.setAttribute("id", "s3-restArea2");
  restArea2.appendChild(restPart3);

  restPart.append(restArea1, restArea2);

  return restPart;
}

export default restKeys;
