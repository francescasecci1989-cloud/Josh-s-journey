const scenes = [
  {
    "image": "assets/scene-01.webp",
    "title": "The Beginning",
    "location": "Dorking",
    "text": "Every great journey begins with a decision. Today, Josh leaves the place he knows to travel towards the life waiting for him.",
    "button": "Begin the journey"
  },
  {
    "image": "assets/scene-02.webp",
    "title": "One Last Breakfast",
    "location": "Home",
    "text": "Mum, Dad and Josh sit together around the kitchen table. The map is open, the coffee is warm, and everyone knows this morning is different.",
    "button": "Stay a little longer"
  },
  {
    "image": "assets/scene-03.webp",
    "title": "Mum",
    "location": "Outside Home",
    "text": "Some goodbyes need no speech. Just one long hug, one promise to call, and the certainty that love can travel any distance.",
    "button": "Promise to call"
  },
  {
    "image": "assets/scene-04.webp",
    "title": "Dad and the Map",
    "location": "Dorking",
    "text": "Dad checks the route one last time. Roads, borders and mountains are traced beneath his finger. His advice is simple: take care, trust yourself, and keep going.",
    "button": "Remember the route"
  },
  {
    "image": "assets/scene-05.webp",
    "title": "The Cats",
    "location": "Home",
    "text": "The cats wait by the door, watching everything with suspicious eyes. Josh gives them one final goodbye before the engine starts.",
    "button": "Say goodbye"
  },
  {
    "image": "assets/scene-06.webp",
    "title": "Mark",
    "location": "The Star Pub",
    "text": "Before leaving, there is time for one last drink with Mark. They laugh, raise their glasses and make the kind of promise old friends never need to explain.",
    "button": "Cheers to the road"
  },
  {
    "image": "assets/scene-07.webp",
    "title": "Leaving Dorking",
    "location": "Howard Road",
    "text": "The bike is packed. The street is quiet. Josh turns onto the road and watches Dorking begin to disappear behind him.",
    "button": "Keep going"
  },
  {
    "image": "assets/scene-08.webp",
    "title": "The English Road",
    "location": "Surrey",
    "text": "The familiar countryside opens ahead. Every mile makes the journey more real, and every turn brings Italy a little closer.",
    "button": "Follow the road"
  },
  {
    "image": "assets/scene-09.webp",
    "title": "The White Cliffs",
    "location": "The Coast",
    "text": "At the edge of England, the white cliffs rise above the sea. Behind him is home. Across the water is everything he has chosen.",
    "button": "Head for the ferry"
  },
  {
    "image": "assets/scene-10.webp",
    "title": "The Crossing",
    "location": "English Channel",
    "text": "The ferry moves away from the coast. For a while, Josh belongs to neither country. He belongs only to the journey.",
    "button": "Watch the horizon"
  },
  {
    "image": "assets/scene-11.webp",
    "title": "France",
    "location": "France",
    "text": "New signs, new roads and a different language. The distance is still long, but the hardest part is already behind him: he has begun.",
    "button": "Ride south"
  },
  {
    "image": "assets/scene-12.webp",
    "title": "The Mountains",
    "location": "The Alps",
    "text": "The road climbs higher. The air becomes sharper, the landscape larger, and the border appears only one kilometre away.",
    "button": "One more kilometre"
  },
  {
    "image": "assets/scene-13.webp",
    "title": "Italy",
    "location": "The Border",
    "text": "The sign finally appears. Italy. After every road and every border, the country he has imagined is now beneath his wheels.",
    "button": "Enter Italy"
  },
  {
    "image": "assets/scene-14.webp",
    "title": "Towards Umbria",
    "location": "Italy",
    "text": "Mountains soften into hills. The roads become warmer, quieter and greener. Somewhere ahead, Francesca is waiting.",
    "button": "Continue south"
  },
  {
    "image": "assets/scene-15.webp",
    "title": "Terni",
    "location": "Umbria",
    "text": "Then the city appears. Terni is no longer a name on a screen or a destination on a map. It is real, and he has made it.",
    "button": "Enter the city"
  },
  {
    "image": "assets/scene-16.webp",
    "title": "The View",
    "location": "Above Terni",
    "text": "Josh stops for a moment above the city. Behind him lies the entire journey. Below him lies the beginning of something new.",
    "button": "Go to her"
  },
  {
    "image": "assets/scene-17.webp",
    "title": "No More Distance",
    "location": "Terni Station",
    "text": "And there she is. No phone between them. No countdown. No airport goodbye waiting at the end of the day. Just open arms.",
    "button": "Run to her"
  },
  {
    "image": "assets/scene-18.webp",
    "title": "Our Streets",
    "location": "Galleria del Corso",
    "text": "They walk through Terni hand in hand. The city lights come on, and ordinary streets begin turning into shared memories.",
    "button": "Walk together"
  },
  {
    "image": "assets/scene-19.webp",
    "title": "Home",
    "location": "Terni",
    "text": "They sit together as the sun disappears behind the hills. The journey has ended, but their life together is only beginning.",
    "button": "Read the final message"
  },
  {
    "image": "assets/scene-20.webp",
    "title": "For Josh",
    "location": "Together",
    "text": "You crossed roads, borders and countries to reach me. But the most beautiful part was never the distance you travelled. It was the life we found when you arrived. Home is not where we started. Home is wherever we are together. I love you.",
    "button": "Start again"
  }
];

let current = 0;

const sceneImage = document.getElementById("sceneImage");
const background = document.getElementById("background");
const title = document.getElementById("title");
const text = document.getElementById("text");
const locationLabel = document.getElementById("location");
const counter = document.getElementById("counter");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");

function renderScene() {
  const scene = scenes[current];

  sceneImage.src = scene.image;
  sceneImage.alt = scene.title;
  background.style.backgroundImage = `url("${scene.image}")`;

  title.textContent = scene.title;
  text.textContent = scene.text;
  locationLabel.textContent = scene.location;
  counter.textContent = `${current + 1} / ${scenes.length}`;
  nextButton.textContent = scene.button;

  backButton.disabled = current === 0;
}

backButton.addEventListener("click", () => {
  if (current > 0) {
    current -= 1;
    renderScene();
  }
});

nextButton.addEventListener("click", () => {
  if (current < scenes.length - 1) {
    current += 1;
  } else {
    current = 0;
  }
  renderScene();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "Enter") {
    nextButton.click();
  }
  if (event.key === "ArrowLeft") {
    backButton.click();
  }
});

renderScene();
