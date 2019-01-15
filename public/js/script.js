let snake_field_wrapper = '';
let snake_field = document.createElement('div');
let field_size = 0;
let game_state = false;

//initialize function on page load
window.onload = init;

function init()
{
  //initialize game field
  snake_field_wrapper = document.querySelector('#snake-field');
  field_size = snake_field_wrapper.getAttribute('data-fieldsize');

  createGameButtons();
}

function createGameButtons()
{
  let div_buttons = document.querySelector('#snake-buttons');
  let btn_start = document.createElement('button');
  
  btn_start.innerText = 'new game';

  btn_start.setAttribute('onclick', 'startGame()');
  btn_start.setAttribute('class', 'button');

  div_buttons.innerHTML = '';
  div_buttons.appendChild(btn_start);
}

function startGame()
{
  let snake_field_title = document.createElement('h3');
  let snake_current_settings = document.createElement('div');
  let snake_current_speed = document.createElement('span');
  let snake_current_length = document.createElement('span');
  let snake_current_diff = document.createElement('span');
  let snake_field_cells = document.createElement('div');
  let snake_field_reset = document.createElement('button');
  let snake_field_close = document.createElement('button');
  let snake_field_buttons = document.createElement('div');

  let snake_DOM_containers = [
    snake_field,
    snake_field_wrapper,
    snake_current_settings,
    snake_field_cells,
    snake_field_buttons
  ];

  snake_field_wrapper.setAttribute('class', 'snakeField__wrapper');
  snake_field.setAttribute('class', 'snakeField');
  snake_field_title.setAttribute('class', 'snakeField__title');
  snake_current_settings.setAttribute('class', 'snakeField__settings');
  snake_field_cells.setAttribute('class', 'snakeField__cells');
  snake_field_buttons.setAttribute('class', 'snakeField__buttons')
  snake_field_reset.setAttribute('onclick', 'startGame()');
  snake_field_reset.setAttribute('class', 'button');
  snake_field_close.setAttribute('onclick', 'closeGame()');
  snake_field_close.setAttribute('class', 'button');

  snake_field_title.innerText = 'Snake Game';
  snake_current_speed.innerHTML = 'Скорость&nbsp;-&nbsp;0';
  snake_current_length.innerHTML = 'Длина&nbsp;-&nbsp;0&nbsp;&nbsp;';
  snake_current_diff.innerHTML = 'Сложность&nbsp;-&nbsp;0';
  snake_field_reset.innerText = 'reset game';
  snake_field_close.innerText = 'close';

  //reset all DOM containers
  for (let DOM_container in snake_DOM_containers) {
    DOM_container.innerHTML = '';
  }

  snake_field.appendChild(snake_field_title);
  snake_current_settings.appendChild(snake_current_speed);
  snake_current_settings.appendChild(snake_current_length);
  snake_current_settings.appendChild(snake_current_diff);
  snake_field_buttons.appendChild(snake_field_reset);
  snake_field_buttons.appendChild(snake_field_close);
  snake_field.appendChild(snake_field_title);
  snake_field.appendChild(snake_current_settings);
  snake_field.appendChild(snake_field_cells);
  snake_field.appendChild(snake_field_buttons);
  
  snake_field_wrapper.appendChild(snake_field);

  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      let snake_field_cell = document.createElement('div');  
      snake_field_cell.setAttribute('class', 'snakeField__cell cell-x-' + j + ' cell-y-' + i);

      snake_field_cells.appendChild(snake_field_cell);
    }
  }
}

game_state = true;

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