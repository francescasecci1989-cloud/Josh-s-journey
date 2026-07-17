const scenes = [
  {
    image:"assets/01_home.webp",
    alt:"Josh standing outside his home in Dorking beside his Triumph motorcycle.",
    chapter:"Chapter One · Dorking",
    title:"The morning everything begins",
    body:[
      "The bike is ready. The road is waiting.",
      "Behind you is everything familiar. Ahead of you is a different country, a different life, and someone counting the days until you arrive."
    ],
    choices:["Take one last look at home","Start the journey"]
  },
  {
    image:"assets/03_breakfast.webp",
    alt:"Josh having breakfast with his parents while a map lies on the table.",
    chapter:"Chapter Two · Home",
    title:"One last breakfast",
    body:[
      "Tea, coffee, a map spread across the table, and the kind of conversation that tries to make a goodbye feel ordinary.",
      "Mum asks whether you packed everything. Dad checks the route again. They both already know the truth: this journey means more than any map can show."
    ],
    choices:["Thank Mum","Thank Dad"]
  },
  {
    image:"assets/02_mum_hug.webp",
    alt:"Josh hugging his mother outside their home.",
    chapter:"Chapter Three · Goodbye",
    title:"The hardest part of leaving",
    body:[
      "Some goodbyes do not need many words.",
      "You hold on for one more second, carrying with you the love of the people who made this place home long before you knew you would find another."
    ],
    choices:["Promise to call","Hold her a little tighter"]
  },
  {
    image:"assets/04_leave_dorking.webp",
    alt:"Josh leaving Dorking on his motorcycle while two cats watch from the roadside.",
    chapter:"Chapter Four · The road",
    title:"Leaving Dorking",
    body:[
      "The engine starts. The cats watch from the pavement. The familiar streets begin to disappear behind you.",
      "For the first time, the distance ahead feels smaller than the reason you are travelling."
    ],
    choices:["Look back once","Keep going"]
  },
  {
    image:"assets/05_italy_border.webp",
    alt:"Josh approaching the Italian border by motorcycle in the mountains.",
    chapter:"Chapter Five · The crossing",
    title:"One kilometre from Italy",
    body:[
      "Roads turn into mountains. Hours become days. Every border crossed brings you closer.",
      "Then the sign appears: Italy, one kilometre.",
      "You have never been so far from where you started, or so close to where you want to be."
    ],
    choices:["Take a breath","Cross the border"]
  },
  {
    image:"assets/06_terni_walk.webp",
    alt:"Josh and Francesca walking hand in hand through Terni at sunset.",
    chapter:"Chapter Six · Terni",
    title:"The city becomes ours",
    body:[
      "At last, there are no screens between us. No countdown. No airport goodbye waiting at the end of the day.",
      "Just your hand in mine, warm streets, evening lights, and the quiet feeling that this is where the next chapter begins."
    ],
    choices:["Walk a little slower","Hold her hand tighter"]
  },
  {
    image:"assets/07_terni_sunset.webp",
    alt:"Josh and Francesca sitting together above Terni at sunset beside the motorcycle.",
    chapter:"Final Chapter · Together",
    title:"Not the end of the road",
    body:[
      "You look out over Terni as the last light settles over the city.",
      "The journey brought you here. Love is what made you stay."
    ],
    choices:["Watch the sunset","Finish the story"]
  }
];

let current=0;
const intro=document.getElementById("intro");
const story=document.getElementById("story");
const ending=document.getElementById("ending");
const image=document.getElementById("sceneImage");
const chapter=document.getElementById("chapter");
const title=document.getElementById("title");
const body=document.getElementById("body");
const actions=document.getElementById("actions");
const progress=document.getElementById("progressFill");

document.getElementById("startBtn").addEventListener("click",()=>{
  intro.classList.remove("active");
  story.classList.add("active");
  render();
});

function render(){
  const s=scenes[current];
  image.src=s.image;
  image.alt=s.alt;
  image.style.animation="none";
  void image.offsetWidth;
  image.style.animation="";
  chapter.textContent=s.chapter;
  title.textContent=s.title;
  body.innerHTML=s.body.map(p=>`<p>${p}</p>`).join("");
  progress.style.width=`${((current+1)/scenes.length)*100}%`;
  actions.innerHTML="";
  s.choices.forEach(label=>{
    const b=document.createElement("button");
    b.className="choice";
    b.textContent=label;
    b.addEventListener("click",next);
    actions.appendChild(b);
  });
}

function next(){
  if(current<scenes.length-1){current++;render();}
  else{
    story.classList.remove("active");
    ending.classList.add("active");
  }
}

document.getElementById("letterBtn").addEventListener("click",()=>{
  document.getElementById("letter").classList.remove("hidden");
  document.getElementById("letterBtn").style.display="none";
});

document.getElementById("restartBtn").addEventListener("click",()=>{
  current=0;
  ending.classList.remove("active");
  intro.classList.add("active");
  document.getElementById("letter").classList.add("hidden");
  document.getElementById("letterBtn").style.display="";
});
