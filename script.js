let scale = 1;

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const result = document.getElementById("result");

noBtn.addEventListener("click", () => {
  scale += 0.2;
  yesBtn.style.transform = `scale(${scale})`;
});

yesBtn.addEventListener("click", () => {
  document.querySelector(".buttons").style.display = "none";
  result.innerText = "💖 J'en étais sûr ! 💖";
});
