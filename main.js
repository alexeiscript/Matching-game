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

// Grabbing div with id of game-board and assigning to variable
var game = document.getElementById('game-board');

// Creating section element and assigning to variable
var grid = document.createElement('section');

// Give section element a class of grid
grid.setAttribute('class', 'grid');

// Append the section to the game-board div
game.appendChild(grid);

// Looping through each item in our cards array 
for (var i = 0; i < cardsArray.length; i++) {
    // Creating div element and assigning to variable
    var card = document.createElement('div');
    // Applying class to div
    card.classList.add('card');
    // Setting data-name attribute of the div to the cardsArray name
    card.dataset.name = cardsArray[i].name;
    // Applying background image of the div to the cardsArray image
    card.style.backgroundImage = `url(${cardsArray[i].img})`;
    // Append div to the grid
    grid.appendChild(card);
}