// Main Variables *****************

var firstClick = "";
var secondClick = "";
var score = 0;
var prevTarget = null;
var delay = 2000;
var count = 0;
var matchEnd = 0;

// Picture Array ******************

var pictures = [{
      'name': 'amadablam',
      'img': 'img/amadablam.jpg',
    },
    {
      'name': 'bridge',
      'img': 'img/bridge.jpg',
    },
    {
      'name': 'equipment',
      'img': 'img/equipment.jpg',
    },
    {
      'name': 'guitar',
      'img': 'img/guitar.jpg',
    },
    {
      'name': 'plouzane',
      'img': 'img/plouzane.jpg',
    },
    {
      'name': 'speaker',
      'img': 'img/speaker.png',
    },
    {
      'name': 'stonehenge',
      'img': 'img/stonehenge.jpg',
    },
    {
      'name': 'subaru',
      'img': 'img/subaru.jpg',
    },
    {
      'name': 'castle',
      'img': 'img/castle.jpg',
    },
    {
      'name': 'dumbells',
      'img': 'img/dumbells.jpg',
    },
    {
      'name': 'runners',
      'img': 'img/runners.jpg',
    },
    {
      'name': 'puppy',
      'img': 'img/puppy.jpg',
    },
    {
      'name': 'jeep',
      'img': 'img/jeep.jpg',
    },
    {
      'name': 'dog',
      'img': 'img/dog.jpg',
    },
    {
      'name': 'door',
      'img': 'img/door.jpg',
    },
    {
      'name': 'money',
      'img': 'img/money.jpg',
    },
    {
      'name': 'amadablam',
      'img': 'img/amadablam.jpg',
    },
    {
      'name': 'bridge',
      'img': 'img/bridge.jpg',
    },
    {
      'name': 'equipment',
      'img': 'img/equipment.jpg',
    },
    {
      'name': 'guitar',
      'img': 'img/guitar.jpg',
    },
    {
      'name': 'plouzane',
      'img': 'img/plouzane.jpg',
    },
    {
      'name': 'speaker',
      'img': 'img/speaker.png',
    },
    {
      'name': 'stonehenge',
      'img': 'img/stonehenge.jpg',
    },
    {
      'name': 'subaru',
      'img': 'img/subaru.jpg',
    },
    {
      'name': 'castle',
      'img': 'img/castle.jpg',
    },
    {
      'name': 'dumbells',
      'img': 'img/dumbells.jpg',
    },
    {
      'name': 'runners',
      'img': 'img/runners.jpg',
    },
    {
      'name': 'puppy',
      'img': 'img/puppy.jpg',
    },
    {
      'name': 'jeep',
      'img': 'img/jeep.jpg',
    },
    {
      'name': 'dog',
      'img': 'img/dog.jpg',
    },
    {
      'name': 'door',
      'img': 'img/door.jpg',
    },
    {
      'name': 'money',
      'img': 'img/money.jpg',
    }
];

// Sort Array and Generate Game Bubbles ******************

pictures.sort(function(a, b){return 0.5 - Math.random()});

var container = document.getElementById("container");

pictures.forEach(item => {
  const gameCard = document.createElement('div');
  const gameImage = document.createElement('span');
  gameCard.classList.add('gameimage');
  gameCard.dataset.name = item.name;
  gameCard.style.backgroundImage = `url(${item.img})`;
  gameImage.classList.add('gamesquare');
  container.appendChild(gameCard);
  gameCard.appendChild(gameImage);
});


// Click Listener and Main Game Functions ***********

var gameboard = document.getElementById("gameboard");

gameboard.addEventListener('click', function(event) {
    var clicked = event.target;

      if (clicked.parentNode === gameboard  || clicked === prevTarget  || clicked.parentNode.classList.contains('selected')
            ) {
        return;
      }
      if (count < 2) {
          count ++;
        if (count === 1) {  
        firstClick = clicked.parentNode.dataset.name;
        clicked.parentNode.classList.add('selected');
        clicked.classList.remove('gamesquare');
        score += 1;
          } else {
        secondClick = clicked.parentNode.dataset.name;
        clicked.parentNode.classList.add('selected');
        clicked.classList.remove('gamesquare');
        score += 1;
        }
        if (firstClick && secondClick) {
          if (firstClick === secondClick) {
            setTimeout(matchedCards, delay, removeSpan);
            setTimeout(resetMatch, delay);
            matchEnd += 2;
          }
            setTimeout(resetUnmatch, delay);
       }
       prevTarget = clicked;
     }
     var scoreClicks = document.getElementById("clicks").innerHTML = score;
});

// Functions and Button Reset *******************************

function matchedCards() {
  var matched = document.querySelectorAll(".selected");
  matched.forEach(square => {
  square.classList.add('matchedItem');
  square.classList.remove('.selected');
});;
}

function removeSpan() {
var removeSpan = document.querySelectorAll(".matchedItem");
removeSpan.forEach(span => {
  span.firstChild.remove(".gamesquare");
})
}

const resetMatch = () => {
  firstClick = "";
  secondClick = "";
  count = 0;
  var matched= document.querySelectorAll(".selected")
  matched.forEach(square => {
    square.classList.remove('selected');
  });
  alertEndGame();
};

const resetUnmatch = () => {
  firstClick = "";
  secondClick = "";
  count = 0;
  var unmatched = document.querySelectorAll(".selected")
  unmatched.forEach(square => {
    square.classList.remove('selected');
    square.firstChild.classList.add('gamesquare')
  });
};

function alertEndGame() {
const endGame = document.getElementsByClassName("matchedItem");
if (matchEnd === 32) {
  alert("FANTASTIC! YOU DID IT! Click OK or CLOSE and then RESET above to play again.");
};
}

var button = document.getElementById("resetButton");
button.addEventListener('click', function(){
  location.reload();
});



////********* Old trial and error code below ****************************


// ************************************************
// polyfill template for IE for the above forEach
//
// pictures.prototype.forEach = function(item, thisArg){
//   if(typeof(item) !== "function") {
//     throw new TypeError(item + " is not a function")
//   }
//   var len = pictures.length;
//   for(var i = 0; i < len; i++) {
//     item.call(thisArg, this[i]), i, this)
//   }
// }
//
//*************************************************

// var cardsNode = document.querySelectorAll(".gameimage")
// var cardsPlayArray = [];
// for (var i = 0; i < cardsNode.length; i++) {
//   cardsPlayArray.push(cardsNode[i]);
//
//
// window.onload = gameStart();
//
//
// // makes an array from the generation of the squares which is nodeList
//
// var nodeList = document.querySelectorAll('.gamesquare');
// var squareArray = [];
// for (var i = 0; i < nodeList.length; i++) {
//   squareArray.push(nodeList[i]);
// }
//
// //this should be the game part
// for (var i = 0; i < squareArray.length; i++) {
// squareArray[i].addEventListener('click', function(){
//     this.classList.add("gameimage");
//     this.style.backgroundSize = "100px 100px";
//     this.style.backgroundImage = pictures[j]
//     });
// }


// square.classList.remove("gamesquare");
//   square.addEventListener("click", function() {


// square.classList.add("gameimage");
// squares.appendChild(square);
// square.style.backgroundImage = pictures[i];
// square.style.backgroundSize = "100px 100px";


// function generateImage () {
//  for (var i = 0; i <= pictures.length; i ++) {
// image.setAttribute("src", randomPictures[i]);
//  }
// }

// var showPictures = function clicked() {
//   this.classList.toggle("open");
//   this.classList.toggle("close");
//   this.classList.toggle("disabled");
// }


// function gamePlay () {
//   for (var i = 0; i < pictures.length; i++) {
//
//     }
//   };
//
//  gamePlay();

// for (var i = 0; i <= pictures.length; i ++) {
//   var gameCard = document.createElement('div');
//   gameCard.setAttribute('class', 'gameimage');
//   container.appendChild(gameCard);
//   gameCard.dataset.name = pictures[i].name;
//   gameCard.style.backgroundImage = `url(${item.img})`;
//   container.appendChild(gameCard);
// };
