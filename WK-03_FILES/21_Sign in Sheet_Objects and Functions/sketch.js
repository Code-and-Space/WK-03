//  Sign in sheet
//  Please write your name in the below
//  You may adjust your location, font, size, color, etc.
//  Refer to p5 reference: https://p5js.org/reference/#/p5/text

let sofia;
let blackjack;
let allura;
let bebasNeue;
let chunkFivePrint;
let chunkFiveRegular;
let colabReg;
let grandHotelRegular;
let greatVibesRegular;
let kaushanScriptRegular;
let leagueGothicRegular;
let lobster;
let montserratAlternatesRegular;
let quicksand;
let sourceSansPro;
let titillium;

function preload() {
  sofia = loadFont('assets/Sofia-Regular.otf');
  blackjack = loadFont('assets/blackjack.otf');
  allura = loadFont('assets/Allura.otf');
  bebasNeue = loadFont('assets/BebasNeue.otf');
  blackjack = loadFont('assets/blackjack.otf');
  chunkFivePrint = loadFont('assets/ChunkFivePrint.otf');
  chunkFiveRegular = loadFont('assets/ChunkFiveRegular.otf');
  colabReg = loadFont('assets/ColabReg.otf');
  grandHotelRegular = loadFont('assets/GrandHotelRegular.otf');
  greatVibesRegular = loadFont('assets/GreatVibesRegular.otf');
  kaushanScriptRegular = loadFont('assets/KaushanScriptRegular.otf');
  leagueGothicRegular = loadFont('assets/LeagueGothicRegular.otf');
  lobster = loadFont('assets/GreatVibesRegular.otf');
  montserratAlternatesRegular = loadFont('assets/MontserratAlternatesRegular.otf');
  quicksand = loadFont('assets/Quicksand-Regular.otf');
  sofia = loadFont('assets/Sofia-Regular.otf');
  sourceSansPro = loadFont('assets/SourceSansPro-Regular.otf');
  titillium = loadFont('assets/Titillium-Regular.otf');
}

// Create a JavaScript Object for your own name






function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(0);

  // Static Name
  textSize(32)
  fill(255, 255, 255)
  text('Name',0, 0, 300, 300) // Replace 'name' with your name

  // Dynamic Name
  textFont(sofia) //  fonts are located in the folder assets.
  textSize(width/10)
  textAlign(CENTER,CENTER)
  fill(255, 255, 255)
  let time = millis()
  rotateX(time / 3000)
  rotateZ(time / 3234)
  text('Name', 0, 0) // Replace '3D Name' with your name
}
