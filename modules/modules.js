//Helper function
const getDomClass = (className) => {
  return this.document.querySelector(className);
};

//Play Music based on key
function make_sound(key) {
  switch (key) {
    case "w":
      const musicW = new Audio("./sounds/crash.mp3");
      musicW.play();
      console.log(`Play sound at key ${key}`);
      break;
    case "a":
      const musicA = new Audio("./sounds/kick-bass.mp3");
      musicA.play();
      console.log(`Play sound at key ${key}`);
      break;
    case "s":
      const musicS = new Audio("./sounds/snare.mp3");
      musicS.play();
      console.log(`Play sound at key ${key}`);
      break;
    case "d":
      const musicD = new Audio("./sounds/tom-1.mp3");
      musicD.play();
      console.log(`Play sound at key ${key}`);
      break;
    case "j":
      const musicJ = new Audio("./sounds/tom-2.mp3");
      musicJ.play();
      console.log(`Play sound at key ${key}`);
      break;
    case "k":
      const musicK = new Audio("./sounds/tom-3.mp3");
      musicK.play();
      console.log(`Play sound at key ${key}`);
      break;
    case "l":
      const musicL = new Audio("./sounds/tom-4.mp3");
      musicL.play();
      console.log(`Play sound at key ${key}`);
      break;
    default:
      console.log(key);
  }
}

//Assign button animation based on key
function buttonAnimation(key) {
  let keyButton = getDomClass(key);
  keyButton.classList.add("pressed");

  setTimeout(() => {
    keyButton.classList.remove("pressed");
  }, 1000);
}

//export { name, draw, reportArea, reportPerimeter };
export { getDomClass, make_sound, buttonAnimation };
