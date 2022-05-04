'use strict'

const picContainerElement = document.getElementById
('center');
const firstPicElement = document.getElementById
('pic1');
const secondPicElement = document.getElementById
('pic2');
const thirdPicElement = document.getElementById
('pic3');
const firstPicTitle = document.getElementById
('title1');
const secondPicTitle = document.getElementById
('title2');
const thirdPicTitle = document.getElementById
('title3');

let count = 0

let pic1 = null;
let pic2 = null;
let pic3 = null;


function Image(name, imgPath,){
  this.name = name;
  this.imgPath = imgPath;
  this.clicks = 0;
  this.views = 0;
}

Image.allImages = [];

Image.prototype.renderImage = function(img, h2){
  img.src = this.imgPath;
  h2.textContent = this.name;
  this.views ++;
}

Image.allImages.push(new Image('Water-can', './images/water-can.jpg'));
Image.allImages.push(new Image('Boots', './images/boots.jpg'));
Image.allImages.push(new Image('Bubblegum', './images/bubblegum.jpg'));
Image.allImages.push(new Image('Chair', './images/chair.jpg'));
Image.allImages.push(new Image('Cthulhu', './images/cthulhu.jpg'));
Image.allImages.push(new Image('Dog-duck', './images/dog-duck.jpg'));
Image.allImages.push(new Image('Pen', './images/pen.jpg'));
Image.allImages.push(new Image('Bathroom', './images/bathroom.jpg'));
Image.allImages.push(new Image('Banana', './images/banana.jpg'));
Image.allImages.push(new Image('Pet-sweep', './images/pet-sweep.jpg'));
Image.allImages.push(new Image('Scissors', './images/scissors.jpg'));
Image.allImages.push(new Image('Shark', './images/shark.jpg'));
Image.allImages.push(new Image('Sweep', './images/sweep.png'));
Image.allImages.push(new Image('Dragon', './images/dragon.jpg'));
Image.allImages.push(new Image('Tauntaun', './images/tauntaun.jpg'));
Image.allImages.push(new Image('Unicorn', './images/unicorn.jpg'));
Image.allImages.push(new Image('Wine-glass', './images/wine-glass.jpg'));
Image.allImages.push(new Image('Breakfast', './images/breakfast.jpg'));



  function getThreeImages(){
    const cantUse = [pic1, pic2, pic3];
     if(cantUse.includes(pic1)){
        let picOne = Math.floor(Math.random() * Image.allImages.length);
        pic1 = Image.allImages[picOne];
      }
        cantUse.push[[pic1]]
      if(cantUse.includes(pic2)){
        let picTwo = Math.floor(Math.random() * Image.allImages.length);
        pic2 = Image.allImages[picTwo];
      }
        cantUse.push[pic2];
      if(cantUse.includes(pic3)){
        let picThree = Math.floor(Math.random() * Image.allImages.length);
        pic3 = Image.allImages[picThree]; 
      }
      cantUse.push[pic3];
  }

function renderImage(){
  pic1.renderImage(firstPicElement, firstPicTitle);
  pic2.renderImage(secondPicElement, secondPicTitle);
  pic3.renderImage(thirdPicElement, thirdPicTitle);
}



function putImagesInStorage(){
  let stringArray = JSON.stringify(Image.allImages)
  if (stringArray = []){
    localStorage.setItem('image', stringArray)
  }
  else (localStorage.setItem('image', stringArray))
}
// console.log(putImagesInStorage)
function getImagesFromStorage(){
  let storedImage = localStorage.getItem('image')
  if(storedImage){
    let newImage = JSON.parse(storedImage)
    for (let image of newImage){
      let myNewImage = new Image(image.Name, image.Path, image.clicks, image.view)
      Image.allImages.push(myNewImage)
    }
  }
}

function handleClick(click){
  const imageClicked = click.target.id;
  if(imageClicked === 'pic1' || imageClicked === 'pic2' || imageClicked === 'pic3'){
    count++;
      if(imageClicked === 'pic1'){
        pic1.clicks++;
    }
      if(imageClicked === 'pic2'){
        pic2.clicks++;
    } 
      if(imageClicked === 'pic3'){
        pic3.clicks++;
    }
    if (count === 5){
      for(let img of Image.allImages){
        console.log (img.name + " was clicked on" + img.clicks + " was viewed" + img.views);

  
      }
    }
  }
  getThreeImages();

  renderImage();
  
putImagesInStorage()


}
function clickTest(){
  console.log("click")
}
picContainerElement.addEventListener('click', handleClick)

getImagesFromStorage()

getThreeImages();

renderImage();


 