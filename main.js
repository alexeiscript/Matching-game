var cardsArray = [
    {   'name': 'Lucky Number Slevin',     'img': 'https://m.media-amazon.com/images/M/MV5BZjczMWI1YWMtYTZjOS00ZDc5LWE2MWItMTY3ZGUxNzFkNjJmL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,675,1000_AL_.jpg'},
    {   'name': 'Pulp Fiction',     'img': 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg'},
    {   'name': 'Interstellar',     'img': 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg'},
    {   'name': 'Fight Club',     'img': 'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg'},
    {   'name': 'Other Peoples Lives',     'img': 'https://m.media-amazon.com/images/M/MV5BOThkM2EzYmMtNDE3NS00NjlhLTg4YzktYTdhNzgyOWY3ZDYzXkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_CR0,0,706,1000_AL_.jpg'},
    {   'name': 'Princess Mononoke',     'img': 'https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg'},
    {   'name': 'Reservoir Dogs',     'img': 'https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'},
    {   'name': 'Lock, Stock and Two Smoking Barrels',     'img': 'https://m.media-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg'},
    {   'name': 'Trainspotting',     'img': 'https://m.media-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_SX675_AL_.jpg'},
    {   'name': 'Oldboy',     'img': 'https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_.jpg'},
    {   'name': '2001: A Space Odyssey',     'img': 'https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg'},
    {   'name': 'Sin City',     'img': 'https://m.media-amazon.com/images/M/MV5BODZmYjMwNzEtNzVhNC00ZTRmLTk2M2UtNzE1MTQ2ZDAxNjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'}
];

// Duplicating cards array to create match for each card
var gameGrid = cardsArray.concat(cardsArray);

// Randomizing game grid on each load
gameGrid.sort(function() {
    return 0.5 - Math.random();
})

// Grabbing div with id of game-board and assigning to variable
var game = document.getElementById('game-board');

// Creating section element and assigning to variable
var grid = document.createElement('section');

// Give section element a class of grid
grid.setAttribute('class', 'grid');

// Append the section to the game-board div
game.appendChild(grid);

// Looping through each item in our cards array 
for (var i = 0; i < gameGrid.length; i++) {
    // Creating div element and assigning to variable
    var card = document.createElement('div');
    // Applying class to div
    card.classList.add('card');
    // Setting data-name attribute of the div to the cardsArray name
    card.dataset.name = gameGrid[i].name;
    
    // Creating front of card
    var front = document.createElement('div');
    front.classList.add('front');

    // Creating back of card
    var back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${gameGrid[i].img})`;

    // Appending card to grid
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
}

var firstGuess = '';
var secondGuess = '';

// Adding all matches to array
var allMatches = [];

// Displaying congrats message after matching all cards
var congrats = function() {
    if (allMatches.length === 12) {
        // Creating congrats message
        var message = document.createElement('h3');
        message.textContent = 'Yaaay! You did it :)';
        game.appendChild(message);
    }
}

// Setting count to 0
var count = 0;
var previousTarget = null;
var delay = 1200;

// Adding 'match' class
var match = function() {
    var selected = document.querySelectorAll('.selected');
    // looping through the array-like object containing 'selected' class
    for (i = 0; i < selected.length; i++) {
        selected[i].classList.add('match');
    }
    console.log(allMatches);
}

// Resetting guesses after two attempts
var resetGuesses = function() {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll('.selected');
    for (i = 0; i < selected.length; i++) {
        selected[i].classList.remove('selected');
    }
}

// Add event listener to grid
grid.addEventListener('click', function(e) {
    // Declaring variable to target clicked item
    var clicked = e.target;

    // Preventing grid section itself from being selected,
    // only selecting divs inside grid
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected')) {
        return;
    }

    // Adding 'selected' class only if var count is less than 2
    if (count < 2) {
        count++;
        
        if (count === 1) {
            // Assigning first guess
            firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        } else {
            // Assigning second guess
            secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }

        // If both guesses are not empty
        if (firstGuess !== '' && secondGuess !== '') {
            // And the firstGuess matches secondGuess
            if (firstGuess === secondGuess) {
                // Run match function
                setTimeout(match, delay);
                setTimeout(resetGuesses, delay);
                allMatches.push(firstGuess);
                setTimeout(congrats, delay);
            } else {
                setTimeout(resetGuesses, delay);
            }
        }
        previousTarget = clicked;
    }
});