let snake_field_wrapper = '';
let snake_field = document.createElement('div');
let field_size = 0;

//initialize function on page load
window.onload = init;

function init()
{
  //initialize game field
  snake_field_wrapper = document.querySelector('#snake-field');
  field_size = snake_field_wrapper.getAttribute('data-fieldsize');
  console.log(field_size);

  createGameButtons();
}

function createGameButtons()
{
  let divWithButtons = document.querySelector('#snake-buttons');
  let btn_start = document.createElement('button');
  let btn_config = document.createElement('button');
  
  btn_start.innerText = 'new game';
  btn_config.innerText = 'settings';

  btn_start.setAttribute('onclick', 'startGame()');
  btn_config.setAttribute('onclick', 'settings()');
  btn_start.setAttribute('class', 'button');
  btn_config.setAttribute('class', 'button');

  divWithButtons.innerHTML = '';
  divWithButtons.appendChild(btn_start);
  divWithButtons.appendChild(btn_config);
}

function startGame()
{
  let snake_field_title = document.createElement('h3');
  let snake_field_cells = document.createElement('div');
  let snake_field_reset = document.createElement('button');
  let snake_field_close = document.createElement('button');

  snake_field_wrapper.setAttribute('class', 'snakeField__wrapper');
  snake_field_title.setAttribute('class', 'snakeField__title');
  snake_field_cells.setAttribute('class', 'snakeField__cells');
  snake_field_reset.setAttribute('onclick', 'startGame()');
  snake_field_reset.setAttribute('class', 'btn');
  snake_field_close.setAttribute('onclick', 'closeGame()');
  snake_field_close.setAttribute('class', 'btn');
  snake_field.setAttribute('class', 'snakeField');

  snake_field_title.innerText = 'Snake Game';
  snake_field_reset.innerText = 'reset game';
  snake_field_close.innerText = 'close';
  snake_field.innerHTML = '';
  snake_field_wrapper.innerHTML = '';
  snake_field_cells.innerHTML = '';
  snake_field.appendChild(snake_field_title);
  snake_field.appendChild(snake_field_cells);
  snake_field.appendChild(snake_field_reset);
  snake_field.appendChild(snake_field_close);
  snake_field_wrapper.appendChild(snake_field);

  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      let snake_field_cell = document.createElement('div');  
      snake_field_cell.setAttribute('class', 'snakeField__cell cell-x-' + j + ' cell-y-' + i);

      snake_field_cells.appendChild(snake_field_cell);
    }
  }
}

function settings()
{
  console.log('settings()');
}

function closeGame()
{
  snake_field_wrapper.innerHTML = '';
  snake_field.innerHTML = '';
  snake_field_wrapper.removeAttribute('class');
  snake_field.removeAttribute('class');
}