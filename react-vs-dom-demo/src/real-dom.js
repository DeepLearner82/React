// ----------- Real DOM Approach -----------
const realList = document.getElementById("realList");

// Create 1000 paragraphs
for (let i = 0; i < 10000; i++) {
  const p = document.createElement("p");
  p.textContent = "Item " + i;
  realList.appendChild(p);
}

document.getElementById("realBtn").addEventListener("click", () => {
  console.time("Real DOM Paint Time");
  // Update ALL 1000 nodes (naive approach)
  for (let i = 0; i < 10000; i++) {
    if (i < 10) {
      realList.children[i].textContent = "Updated Item " + i;
    } else {
      realList.children[i].textContent = "Item " + i; // unnecessary re-assign
    }
  }
  requestAnimationFrame(() => {
    console.timeEnd("Real DOM Paint Time");
  });
});
