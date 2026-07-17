const scenes = [
  {
    "image": "assets/scene-01.webp",
    "title": "The Beginning",
    "location": "Dorking",
    "text": "It starts in Dorking, outside the house you know so well, with your red Triumph ready beside you. Today the road leads somewhere very important: to me.",
    "choices": [
      "Take one last look",
      "Start the journey"
    ]
  },
  {
    "image": "assets/scene-02.webp",
    "title": "Breakfast with Mum and Dad",
    "location": "Home",
    "text": "One last breakfast together before leaving. Coffee, food, the map on the table, and all the familiar little things that make home feel like home.",
    "choices": [
      "Listen to Mum",
      "Check the map with Dad"
    ]
  },
  {
    "image": "assets/scene-03.webp",
    "title": "Goodbye, Mum",
    "location": "Outside Home",
    "text": "A long hug before leaving. No big speech, just a goodbye that says everything without needing many words.",
    "choices": [
      "Promise to call",
      "Hug her again"
    ]
  },
  {
    "image": "assets/scene-04.webp",
    "title": "Dad and the Route",
    "location": "Dorking",
    "text": "Dad goes through the route with you one last time, making sure you know where you are going and that everything is ready.",
    "choices": [
      "Fold the map",
      "Remember the route"
    ]
  },
  {
    "image": "assets/scene-05.webp",
    "title": "Silas and Benson",
    "location": "Home",
    "text": "Silas and Benson watch you getting ready to leave. You stop for one last moment with them before starting the bike.",
    "choices": [
      "Stroke Silas",
      "Say goodbye to Benson"
    ]
  },
  {
    "image": "assets/scene-06.webp",
    "title": "One Last Pint with Mark",
    "location": "The Star Pub",
    "text": "Before the long road, there is time for one last pint with Mark. A laugh, a drink, and a proper goodbye between friends.",
    "choices": [
      "Raise your glass",
      "Promise to stay in touch"
    ]
  },
  {
    "image": "assets/scene-07.webp",
    "title": "Leaving Howard Road",
    "location": "Dorking",
    "text": "The bags are tied down and the engine is running. You turn onto Howard Road and the journey finally begins.",
    "choices": [
      "Look down the road",
      "Ride away"
    ]
  },
  {
    "image": "assets/scene-08.webp",
    "title": "One Last Look Back",
    "location": "Dorking",
    "text": "For one last moment, home and the cats are still behind you. Then you face the road and continue towards the coast.",
    "choices": [
      "Look back once",
      "Keep moving"
    ]
  },
  {
    "image": "assets/scene-09.webp",
    "title": "The English Road",
    "location": "Surrey",
    "text": "Green hills, small villages and miles of road ahead. With every turn, England becomes a little more distant and Terni a little closer.",
    "choices": [
      "Enjoy the road",
      "Think about Terni"
    ]
  },
  {
    "image": "assets/scene-10.webp",
    "title": "The White Cliffs",
    "location": "The Coast",
    "text": "At the edge of England, the white cliffs rise above the sea. They are the last familiar view before the crossing.",
    "choices": [
      "Watch the sea",
      "Head to the ferry"
    ]
  },
  {
    "image": "assets/scene-11.webp",
    "title": "The Ferry",
    "location": "English Channel",
    "text": "The bike is parked and the sea stretches out around you. England is behind you now, and the rest of the journey is waiting on the other side.",
    "choices": [
      "Look at the cliffs",
      "Look towards France"
    ]
  },
  {
    "image": "assets/scene-12.webp",
    "title": "France",
    "location": "France",
    "text": "A new country, new roads and a long way still to go. But the journey is moving forward, one kilometre at a time.",
    "choices": [
      "Follow the signs",
      "Continue south"
    ]
  },
  {
    "image": "assets/scene-13.webp",
    "title": "Italy, One Kilometre",
    "location": "The Alps",
    "text": "After the long roads through France and the mountains, the sign finally appears: Italy is only one kilometre away.",
    "choices": [
      "Take in the view",
      "Ride the final kilometre"
    ]
  },
  {
    "image": "assets/scene-14.webp",
    "title": "Welcome to Italy",
    "location": "The Border",
    "text": "You cross the border and enter Italy. The language changes, the signs change, and Terni no longer feels impossibly far away.",
    "choices": [
      "Send me a message",
      "Keep riding"
    ]
  },
  {
    "image": "assets/scene-15.webp",
    "title": "Through Umbria",
    "location": "Umbria",
    "text": "The road runs through green hills and quiet countryside. This is the final part of the journey, and now you are very close.",
    "choices": [
      "Follow the road",
      "Count the kilometres"
    ]
  },
  {
    "image": "assets/scene-16.webp",
    "title": "Terni",
    "location": "Terni",
    "text": "At last, the sign appears. The city you had only seen through photos and video calls is finally right in front of you.",
    "choices": [
      "Enter the city",
      "Look for me"
    ]
  },
  {
    "image": "assets/scene-17.webp",
    "title": "Almost There",
    "location": "Above Terni",
    "text": "From above, you can see the whole city. After such a long journey, there is only one place left to go.",
    "choices": [
      "Look at the view",
      "Come and find me"
    ]
  },
  {
    "image": "assets/scene-18.webp",
    "title": "Finally",
    "location": "Terni Station",
    "text": "And then we finally see each other. No screen, no countdown and no distance between us anymore.",
    "choices": [
      "Open your arms",
      "Come closer"
    ]
  },
  {
    "image": "assets/scene-19.webp",
    "title": "Together in Terni",
    "location": "Galleria del Corso",
    "text": "We walk through Terni hand in hand. After all those kilometres, this simple moment is what the whole journey was leading to.",
    "choices": [
      "Walk with me",
      "Stay close"
    ]
  },
  {
    "image": "assets/scene-20.webp",
    "title": "The End of the Journey",
    "location": "Together",
    "text": "The sun sets over Terni. The road from Dorking was long, but you made it all the way here.",
    "choices": [
      "Open the letter",
      "Stay here a moment"
    ]
  }
];

let current = 0;
const sceneImage = document.getElementById("sceneImage");
const background = document.getElementById("background");
const title = document.getElementById("title");
const text = document.getElementById("text");
const locationLabel = document.getElementById("location");
const counter = document.getElementById("counter");
const choices = document.getElementById("choices");
const backButton = document.getElementById("backButton");
const letterOverlay = document.getElementById("letterOverlay");
const envelope = document.getElementById("envelope");
const letterPaper = document.getElementById("letterPaper");

function renderScene() {
  const scene = scenes[current];
  sceneImage.src = scene.image;
  sceneImage.alt = scene.title;
  background.style.backgroundImage = `url("${scene.image}")`;
  title.textContent = scene.title;
  text.textContent = scene.text;
  locationLabel.textContent = scene.location;
  counter.textContent = `${current + 1} / ${scenes.length}`;
  backButton.disabled = current === 0;
  choices.innerHTML = "";

  scene.choices.forEach((label, index) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = label;

    button.addEventListener("click", () => {
      if (current === scenes.length - 1) {
        if (index === 0) showEnvelope();
        return;
      }
      current += 1;
      renderScene();
    });

    choices.appendChild(button);
  });
}

function showEnvelope() {
  letterOverlay.classList.remove("hidden");
  letterOverlay.setAttribute("aria-hidden", "false");
  envelope.classList.remove("hidden");
  letterPaper.classList.add("hidden");
}

function closeLetter() {
  letterOverlay.classList.add("hidden");
  letterOverlay.setAttribute("aria-hidden", "true");
}

backButton.addEventListener("click", () => {
  if (current > 0) {
    current -= 1;
    renderScene();
  }
});

document.getElementById("openEnvelope").addEventListener("click", () => {
  envelope.classList.add("hidden");
  letterPaper.classList.remove("hidden");
});

document.getElementById("closeLetter").addEventListener("click", closeLetter);

document.getElementById("restartFromLetter").addEventListener("click", () => {
  closeLetter();
  current = 0;
  renderScene();
});

letterOverlay.addEventListener("click", (event) => {
  if (event.target === letterOverlay) closeLetter();
});

renderScene();
