
const scenes = [
  {
    location:"Dorking",
    title:"La partenza",
    text:"È mattina a Dorking. La valigia è pronta, il telefono è carico e fuori dalla finestra comincia un viaggio speciale.",
    emoji:"🏡🧳",
    choices:["Controlla il passaporto","Scrivi a Francesca: «Sto partendo»"]
  },
  {
    location:"Casa",
    title:"Saluta Mum",
    text:"Prima di andare, Mum ti stringe forte e ti ricorda di mangiare, riposarti e mandare un messaggio appena arrivi.",
    emoji:"👩‍👦❤️",
    choices:["Prometti che lo farai","Abbracciala ancora più forte"]
  },
  {
    location:"Casa",
    title:"Saluta Dad",
    text:"Dad controlla la strada, le prenotazioni e la mappa un’ultima volta. Poi sorride: sa che questo viaggio significa molto.",
    emoji:"👨‍👦🗺️",
    choices:["Ringrazialo per l’aiuto","Digli che andrà tutto bene"]
  },
  {
    location:"Casa",
    title:"I gatti",
    text:"I gatti ti osservano come se avessero già capito tutto. Uno si avvicina alla valigia, l’altro finge di non essere triste.",
    emoji:"🐈🐈‍⬛",
    choices:["Fai una coccola a entrambi","Prometti dei regalini dall’Italia"]
  },
  {
    location:"Dorking",
    title:"Mark ti aspetta",
    text:"Mark è pronto per l’ultimo saluto prima della partenza. Tra battute e consigli, cerca di non rendere il momento troppo sentimentale.",
    emoji:"🤝🍻",
    choices:["Fate una foto insieme","Prometti una videochiamata dall’Italia"]
  },
  {
    location:"Verso l’aeroporto",
    title:"La strada",
    text:"Le case di Dorking scorrono fuori dal finestrino. Ogni chilometro ti allontana da casa e ti avvicina a una nuova casa.",
    emoji:"🚗🌧️",
    choices:["Guarda il paesaggio","Rileggi i messaggi di Francesca"]
  },
  {
    location:"Aeroporto",
    title:"Il check-in",
    text:"Valigia consegnata. Controlli superati. Ora non resta che aspettare il gate, con quella strana emozione tra ansia e felicità.",
    emoji:"🛫🎫",
    choices:["Prendi un caffè","Controlla il gate per la decima volta"]
  },
  {
    location:"In volo",
    title:"Sopra le nuvole",
    text:"Il Regno Unito scompare sotto le nuvole. Davanti a te ci sono l’Italia, Terni e una persona che conta i minuti.",
    emoji:"✈️☁️",
    choices:["Guarda fuori dal finestrino","Scrivi: «Sono quasi da te»"]
  },
  {
    location:"Italia",
    title:"Benvenuto",
    text:"L’aria è diversa, i cartelli sono in italiano e il viaggio non è ancora finito. Ma ormai la distanza sembra piccolissima.",
    emoji:"🇮🇹☀️",
    choices:["Recupera la valigia","Cerca subito il treno"]
  },
  {
    location:"Verso Terni",
    title:"L’ultimo tratto",
    text:"Il paesaggio cambia. Le colline umbre compaiono fuori dal finestrino e sul telefono arriva un messaggio: «Dove sei?»",
    emoji:"🚆🌄",
    choices:["Rispondi: «Vicino»","Fai una foto dal finestrino"]
  },
  {
    location:"Terni",
    title:"La stazione",
    text:"Le porte si aprono. Scendi con la valigia e per un secondo tutto il resto diventa silenzioso.",
    emoji:"🚉💓",
    choices:["Guardati intorno","Segui il cuore"]
  },
  {
    location:"Terni",
    title:"Finalmente",
    text:"E poi la vedi. Francesca è lì. Il viaggio finisce in un abbraccio che vale ogni chilometro.",
    emoji:"🫂❤️",
    choices:["Corri da lei","Stringila forte"]
  }
];

let current = 0;
let soundOn = true;

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const endScreen = document.getElementById("endScreen");
const bgMusic = document.getElementById("bgMusic");

document.getElementById("startBtn").addEventListener("click", () => {
  startScreen.classList.remove("active");
  gameScreen.classList.add("active");
  renderScene();
  bgMusic.volume = 0.22;
  bgMusic.play().catch(() => {});
});

document.getElementById("soundBtn").addEventListener("click", (e) => {
  soundOn = !soundOn;
  bgMusic.muted = !soundOn;
  e.currentTarget.textContent = soundOn ? "🔊" : "🔇";
});

document.getElementById("letterBtn").addEventListener("click", () => {
  document.getElementById("loveLetter").classList.remove("hidden");
  document.getElementById("letterBtn").style.display = "none";
});

document.getElementById("restartBtn").addEventListener("click", () => {
  current = 0;
  endScreen.classList.remove("active");
  startScreen.classList.add("active");
  document.getElementById("loveLetter").classList.add("hidden");
  document.getElementById("letterBtn").style.display = "";
  bgMusic.pause();
  bgMusic.currentTime = 0;
});

function renderScene(){
  const scene = scenes[current];
  document.getElementById("sceneNumber").textContent = `Tappa ${current + 1} di ${scenes.length}`;
  document.getElementById("sceneLocation").textContent = scene.location;
  document.getElementById("sceneTitle").textContent = scene.title;
  document.getElementById("sceneText").textContent = scene.text;
  document.getElementById("sceneArt").innerHTML = `<div class="emoji-art">${scene.emoji}</div>`;
  document.getElementById("progressBar").style.width = `${((current + 1) / scenes.length) * 100}%`;

  const choices = document.getElementById("choices");
  choices.innerHTML = "";
  scene.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice;
    btn.addEventListener("click", nextScene);
    choices.appendChild(btn);
  });
}

function nextScene(){
  if(current < scenes.length - 1){
    current++;
    renderScene();
  } else {
    gameScreen.classList.remove("active");
    endScreen.classList.add("active");
  }
}
