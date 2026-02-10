const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const noMessage = document.getElementById("noMessage");

const messages = [
  // Palier 1 – Taquin
  "Tu es sûre ? 😳",
  "Vraiment sûre ? 🤨",
  "Réfléchis deux secondes 😅",
  "C’est un non timide ça 😏",
  "Tu cliques vite quand même 😌",

  // Palier 2 – Insistant
  "Allez… sois sympa 🥺",
  "Je fais les yeux mignons 🥹",
  "Tu ne me facilites pas la tâche 😬",
  "On peut en discuter calmement 🤝",
  "Tu sais que tu hésites 😈",

  // Palier 3 – Culpabilisation
  "Tu me fais un peu de peine 😔",
  "Mon petit cœur prend cher 💔",
  "Je commence à douter de toi 😢",
  "Je pensais que tu étais différente 😶",
  "Là, ça devient personnel 😐",

  // Palier 4 – Dramatique
  "Ok… je note 🫠",
  "C’est violent émotionnellement 😭",
  "Je vais m’allonger par terre 🧎",
  "Musique triste dans ma tête 🎻",
  "On frôle le drame là 🎭",

  // Palier 5 – Ultimatum
  "Tu es vraiment déterminée 😈",
  "Tu veux voir jusqu’où ça va 😏",
  "Encore un clic et je craque 🫣",
  "Dernière chance. Vraiment 😤",
  "Ok. Tu l’auras voulu 😈"
];

let index = 0;

noBtn.addEventListener("click", () => {
  // Tant qu’il reste des messages
  if (index < messages.length) {
    noMessage.textContent = messages[index];
    index++;
    return;
  }

  // Dès qu’on dépasse le 25e
  window.location.href = "no_page.html";
});

yesBtn.addEventListener("click", () => {
  window.location.href = "yes_page.html";
});
