const scenes = [
  {
    "image": "assets/scene-01.webp",
    "title": "The Beginning",
    "location": "Dorking",
    "text": "It starts in Dorking, outside the house you know so well, with your red Triumph ready beside you. Today the road does not lead to another ordinary place. It leads to me.",
    "choices": [
      "Take one last look",
      "Start the journey"
    ]
  },
  {
    "image": "assets/scene-02.webp",
    "title": "Breakfast with Mum and Dad",
    "location": "Home",
    "text": "One last breakfast together before leaving. Coffee, food, the map on the table, and all the normal little things that make home feel like home.",
    "choices": [
      "Listen to Mum",
      "Check the map with Dad"
    ]
  },
  {
    "image": "assets/scene-03.webp",
    "title": "Goodbye, Mum",
    "location": "Outside Home",
    "text": "A long hug before leaving. No dramatic speech, just the kind of goodbye that says everything without needing many words.",
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
      "Remember his advice"
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
    "title": "Leaving Dorking",
    "location": "Howard Road",
    "text": "The bags are tied down and the engine is running. You leave Howard Road behind and begin the long ride south.",
    "choices": [
      "Look back once",
      "Keep moving"
    ]
  },
  {
    "image": "assets/scene-08.webp",
    "title": "The English Road",
    "location": "Surrey",
    "text": "The roads are familiar at first. Green hills, small villages and the feeling that every mile is taking you further from home and closer to me.",
    "choices": [
      "Enjoy the road",
      "Think about Terni"
    ]
  },
  {
    "image": "assets/scene-09.webp",
    "title": "The White Cliffs",
    "location": "The Coast",
    "text": "At the coast, England is almost behind you. The white cliffs are the last familiar view before the crossing.",
    "choices": [
      "Watch the sea",
      "Head to the ferry"
    ]
  },
  {
    "image": "assets/scene-10.webp",
    "title": "The Ferry",
    "location": "English Channel",
    "text": "The bike is parked and the sea stretches out around you. England is behind you now, and Europe is waiting on the other side.",
    "choices": [
      "Look at the cliffs",
      "Look towards France"
    ]
  },
  {
    "image": "assets/scene-11.webp",
    "title": "France",
    "location": "France",
    "text": "A new country, new roads and a long way still to go. But the journey is moving forward exactly as planned.",
    "choices": [
      "Follow the signs",
      "Continue south"
    ]
  },
  {
    "image": "assets/scene-12.webp",
    "title": "Towards the Alps",
    "location": "The Mountains",
    "text": "The road begins to climb and the landscape changes. The mountains make the journey feel bigger, but Italy is getting close.",
    "choices": [
      "Slow down for the view",
      "Keep climbing"
    ]
  },
  {
    "image": "assets/scene-13.webp",
    "title": "Italy, One Kilometre",
    "location": "The Border",
    "text": "Then you see it: Italy, one kilometre. After all those roads, the country you have been travelling towards is finally in front of you.",
    "choices": [
      "Take it in",
      "Cross the border"
    ]
  },
  {
    "image": "assets/scene-14.webp",
    "title": "Welcome to Italy",
    "location": "Italy",
    "text": "You pass the border and enter Italy. The language changes, the signs change, and Terni is no longer impossibly far away.",
    "choices": [
      "Send me a message",
      "Keep riding"
    ]
  },
  {
    "image": "assets/scene-15.webp",
    "title": "Through Umbria",
    "location": "Umbria",
    "text": "The road runs through green hills and quiet countryside. This is the last part of the journey, and now you are very close.",
    "choices": [
      "Follow the road",
      "Count the kilometres"
    ]
  },
  {
    "image": "assets/scene-16.webp",
    "title": "Terni",
    "location": "Terni",
    "text": "At last, the sign appears. You have reached Terni. The city you had only seen through photos and video calls is finally real.",
    "choices": [
      "Enter the city",
      "Look for me"
    ]
  },
  {
    "image": "assets/scene-17.webp",
    "title": "Almost There",
    "location": "Above Terni",
    "text": "From above, you can see the whole city. After such a long road, there is only one place left to go.",
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
    "text": "We walk through Terni hand in hand. After all those kilometres, this is the simple moment the whole journey was leading to.",
    "choices": [
      "Walk with me",
      "Stay close"
    ]
  },
  {
    "image": "assets/scene-20.webp",
    "title": "For You",
    "location": "Together",
    "text": "You travelled from Dorking to Terni, crossing roads, borders and countries to reach me. This little story is about your journey, but also about everything that brought us together. Thank you for choosing me, for making the distance feel worth it, and for becoming such an important part of my life. Wherever the road takes us next, I am happy that I get to travel it with you. I love you.",
    "choices": [
      "Read it again",
      "Start from the beginning"
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
      if (current < scenes.length - 1) {
        current += 1;
      } else {
        current = index === 0 ? scenes.length - 1 : 0;
      }
      renderScene();
    });

    choices.appendChild(button);
  });
}

backButton.addEventListener("click", () => {
  if (current > 0) {
    current -= 1;
    renderScene();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") backButton.click();
});

renderScene();
