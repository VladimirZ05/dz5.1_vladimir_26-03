// MOVE BLOCK
const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX < 449 && positionY === 0) {
        positionX+=2
        childBlock.style.left = `${positionX}px`
        setTimeout(move, 10)
    } else if (positionX >= 449 && positionY < 449) {
        positionY+=2
        childBlock.style.top = `${positionY}px`
        setTimeout(move, 10)
    } else if (positionX > 0 && positionY > 0) {
        positionX-=2
        childBlock.style.left = `${positionX}px`
        setTimeout(move, 10)
    } else if (positionX === 0 && positionY > 0) {
        positionY-=2
        childBlock.style.top = `${positionY}px`
        setTimeout(move, 10)
    }
}

move()

// STOPWATCH
const minutesBlock = document.querySelector('#minutes'),
    secondsBlock = document.querySelector('#seconds'),
    mlSecondsBlock = document.querySelector('#ml-seconds'),
    startButton = document.querySelector('#start'),
    stopButton = document.querySelector('#stop'),
    resetButton = document.querySelector('#reset')

let interval
let minutes = 0
let seconds = 0
let mlSeconds = 0

const startTimer = () => {
    mlSeconds++
    mlSeconds <= 99 && (mlSecondsBlock.innerHTML = mlSeconds)
    mlSeconds == 100 && (mlSecondsBlock.innerHTML = '00')

    mlSecondsBlock.innerHTML = `0${mlSeconds}`
    mlSeconds > 9 && (mlSecondsBlock.innerHTML = mlSeconds)
    if (mlSeconds > 99) {
        seconds++
        secondsBlock.innerHTML = `0${seconds}`
        mlSeconds = 0
    }
    seconds > 9 && (secondsBlock.innerHTML = seconds)
    if (seconds > 59) {
        minutes++
        minutesBlock.innerHTML = `0${minutes}`
        seconds = 0
        secondsBlock.innerHTML = `0${seconds}`
    }
    minutes > 9 && (minutesBlock.innerHTML = minutes)
}

startButton.onclick = () => {
    clearInterval(interval)
    interval = setInterval(startTimer,  10)
}

stopButton.onclick = () => {
    clearInterval(interval)
}

resetButton.onclick = () => {
    clearInterval(interval)
    minutes = 0
    seconds = 0
    mlSeconds = 0
    minutesBlock.innerHTML = '00'
    secondsBlock.innerHTML = '00'
    mlSecondsBlock.innerHTML = '00'
}

//SLIDE
var slider = document.getElementById('slider');
var slides = slider.getElementsByTagName('img');
var currentSlide = 0;

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[currentSlide].style.display = 'block';
  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlide, 3000);


//MODAL_WINDOW

function showModal() {
}
function isScrollAtBottom() {
  return window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
}
function handleScroll() {
  if (isScrollAtBottom()) {
    showModal(); //
    window.removeEventListener('scroll', handleScroll); //
  }
}
window.addEventListener('scroll', handleScroll);

function showModal() {
}
setTimeout(showModal, 10000);


var people = [
  { name: "John", age: 25, city: "New York" },
  { name: "Alice", age: 30, city: "London" },
  { name: "Bob", age: 35, city: "Paris" },
  { name: "Eva", age: 28, city: "Berlin" }
];


var list = document.getElementById("people-list");

people.forEach(function(person) {
  var listItem = document.createElement("li");
  listItem.textContent = "Name: " + person.name + ", Age: " + person.age + ", City: " + person.city;
  list.appendChild(listItem);
});


var xhr = new XMLHttpRequest();
xhr.open("GET", "data.json", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};
xhr.send();