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
('imgtitle1');
const secondPicTitle = document.getElementById
('imgtitle2');
const thirdPicTitle = document.getElementById
('imgtitle3');

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

function makeChart(){
  const ctx = document.getElementById('myChart').getContext('2d');

  let imageNames = [];
  let imageClicks = [];
  let imageViews = [];

  for(let image of Image.allImages){
    imageNames.push(image.name);
    imageClicks.push(image.clicks);
    imageViews.push(image.views);
  }

  const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: imageNames,
          datasets: [{
              label: '# of Votes',
              data: imageClicks,
              backgroundColor: [
                  'rgba(0, 0, 1, 12)',
                  'rgba(0, 11, 235,12)',
                  'rgba(0, 12, 86, 12)',
                  'rgba(0, 13, 192, 12)',
                  'rgba(0, 14, 255, 12)',
                  'rgba(0, 15, 64, 12)'
              ],
              borderColor: [
                  'rgba(255, 70, 132, 1)',
                  'rgba(54, 71, 235, 1)',
                  'rgba(255, 72, 86, 1)',
                  'rgba(75, 73, 192, 1)',
                  'rgba(153, 74, 255, 1)',
                  'rgba(255, 67, 64, 1)'
              ],
              borderWidth: 1
          },
          {
            label: '# of Views',
            data: imageViews,
            backgroundColor: [
                'rgba(255, 99, 132, 3)',
                'rgba(54, 162, 235, 3)',
                'rgba(255, 206, 86, 3)',
                'rgba(75, 192, 192, 3)',
                'rgba(153, 102, 255, 3)',
                'rgba(255, 159, 64, 3)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}

function removeImages(){

  document.getElementById('img1').style.display = 'none';
  document.getElementById('img2').style.display = 'none';
  document.getElementById('img3').style.display = 'none';
}

 function handleClick(e){
  let imageClicked = e.target.id;
  if(imageClicked === 'pic1' || imageClicked === 'pic2' || imageClicked === 'pic3'){
    count++;
  }
  if(imageClicked === 'pic1'){
    pic1.clicks++;
  }
  if (imageClicked === 'pic2'){
    pic2.clicks++;
  }
  if (imageClicked = 'pic3'){
    pic3.clicks++;
  }
  getThreeImages();
  renderImage();
  if (count === 10){
    for(let img of Image.allImages){
      removeImages();
      let h3elm = document.createElement('h3')
      picContainerElement.appendChild(h3elm)
      let resultsButton = document.createElement ('button')
      // resultsButton.textContent = 'Survey Results'
      // resultsButton.id = 'results'
      // h3elm.appendChild(resultsButton)
      resultsButton.onclick = makeChart
      makeChart();
  }
}
  putImagesInStorage();
}
picContainerElement.addEventListener('click', handleClick);

getImagesFromStorage();
getThreeImages();
renderImage();