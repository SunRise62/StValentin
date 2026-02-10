const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const result = document.getElementById("result");
const buttonsZone = document.querySelector(".buttons");
const hint = document.getElementById("hint");

const messages = [
  "Non ? 😳",
  "Tu es sûre ? 🤨",
  "Sûre sûre ? 😅",
  "Réfléchis 2 secondes 🙏",
  "Allez… 🥺",
  "S’il te plaît 😭",
  "Je suis gentil 😇",
  "Tu me fais ça 😔",
  "Tu joues dur 😤",
  "On peut en parler 🤝",
  "Regarde le bouton Oui 😏",
  "Il a l’air sympa 😌",
  "Tu as envie, avoue 😈",
  "Stop le suspense 😵",
  "Tu abuses 😵‍💫",
  "Je vais bouder 😠",
  "Boude officiel 😾",
  "Je suis triste 😿",
  "Triste niveau 2 🫠",
  "Triste niveau 3 😩",
  "Ok, drama 🎭",
  "Je tombe à genoux 🧎",
  "Musique triste 🎻",
  "Je fais le mignon 🐶",
  "Tu craques quand ? ⏳",
  "Encore un non ? 😧",
  "C’est cruel 🥶",
  "Mais j’insiste 😬",
  "C’est important 💌",
  "Je te laisse une chance 🎟️",
  "Une vraie 😇",
  "Promis la dernière 🤞",
  "Bon, j’ai menti 😅",
  "Tu es forte 💪",
  "Je respecte 🫡",
  "Mais je ne lâche pas 😤",
  "Ok, phase finale 🚨",
  "Tu vas perdre 😈",
  "Je vais gagner 😎",
  "Allez… maintenant 🫣",
  "On y est 😳",
  "Tu sens la pression ? 😬",
  "Dernière ligne droite 🏁",
  "Tu trembles ? 🫨",
  "Encore 5… 😵",
  "Encore 4… 😖",
  "Encore 3… 😣",
  "Encore 2… 😫",
  "Encore 1… 😭",
  "Ok. Tu l’auras voulu 😈"
];

let messageIndex = 0;
let scale = 1;

function moveNoButton() {
  const zoneRect = buttonsZone.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = Math.max(0, zoneRect.width - btnRect.width);
  const maxY = Math.max(0, zoneRect.height - btnRect.height);

  const x = Math.floor(Math.random() * (maxX + 1));
  const y = Math.floor(Math.random() * (maxY + 1));

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

function growYesControlled(step) {
  const maxScale = 2.2;
  const minInc = 0.01;
  const maxInc = 0.08;

  const t = Math.min(step / (messages.length - 1), 1);
  const inc = maxInc - (maxInc - minInc) * t;

  scale = Math.min(scale + inc, maxScale);
  yesBtn.style.transform = `scale(${scale})`;
}

noBtn.addEventListener("click", () => {
  if (hint) hint.classList.add("hidden");

  noBtn.textContent = messages[messageIndex];
  growYesControlled(messageIndex);
  moveNoButton();

  messageIndex += 1;

  if (messageIndex >= messages.length) {
    window.location.href = "no_page.html";
    return;
  }

  result.textContent = "";
});

yesBtn.addEventListener("click", () => {
  window.location.href = "yes_page.html";
});
