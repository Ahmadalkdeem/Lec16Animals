import { Utils } from "./utils.js";
import { animalArray } from "./runners.js";
let arrr = [0, 1, 2, 3];

const animalShowCase = document.getElementById(
  "animal-show-case"
) as HTMLDivElement;


const btnStart = document.getElementById("btn-start") as HTMLButtonElement;
const mtbtn = document.getElementById("mtbtn") as HTMLButtonElement;
let id: number
// function resetGame(){}
// function choosePlayer(){}



btnStart.addEventListener("click", () => {
  //remove chosen from all animals
  animalArray.forEach((a) => {
    a.isChosen = false;
    a.translateX = 0;
  });
  //remove the border from all img tags
  //select all img tags in the document
  document
    .querySelectorAll("#animal-show-case img")
    .forEach((img) => img.classList.remove("chosen-animal"));

  const random = Utils.random(0, 4);
  // console.log(random);

  const chosenAnimal = animalArray[random];
  chosenAnimal.isChosen = true;

  const img = document.getElementById(chosenAnimal.id) as HTMLImageElement;
  img.classList.add("chosen-animal");

  setTimeout(() => {
    const audio = new Audio(`./media/${chosenAnimal.voice}.wav`);
    audio.play();
    id = setInterval(() => {
      chosenAnimal.translateX += chosenAnimal.step * 10;
      img.style.transform = `translateX(${chosenAnimal.translateX}px)`;
      if (
        img.getBoundingClientRect().x >
        document.body.getBoundingClientRect().width
      ) {
        clearInterval(id)
        // resetGame()
      }

    }, 800);
  }, 800);
});


mtbtn.addEventListener('click', () => {
  mtbtn.style.display = 'none'
  btnStart.style.display = 'block'
  animalArray
    .sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
    .map((animal) => {
      const image = document.createElement("img");
      image.src = `images/${animal.img}`;
      image.classList.add("col", "image-fluid");
      image.id = animal.id;
      //image.addEventListener('click', ()=>{})
      return image;
    })
    .forEach((img) => {
      animalShowCase.appendChild(img);
    });
})