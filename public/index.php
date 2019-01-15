<?php
require '../core/init.php';

check_libraries($libraries);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Snake Game</title>
  <?php load_css($libraries['css']); ?>
</head>
<body>
  <?php
  //print errors here
  print_messages($_SESSION['messages']['errors']);
  ?>

  <header class="wrapper">

  </header>

  <main class="wrapper">
    <article>
      <h2>Игра Змейка онлайн.</h2>

      <p>Правила:</p>
      
      <ol>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </article>

    <!-- to change field size change $fieldSize at style.css and "data-fieldsize" attribute of #snake-field at index.php -->
    <div id="snake-field" data-fieldsize="20"></div>

    <div id="snake-buttons"></div>
  </main>

  <footer class="wrapper">
    
  </footer>

  <?php load_js($libraries['js']); ?>
</body>
</html>