<?php 
function print_messages($array)
{
  if(!$array) { return; };

  foreach($array as $message) {
    echo($message);
  }
}

function check_libraries($array)
{
  foreach($array as $key => $library) {
    foreach($library as $file) {
      if(!file_exists($file)) {
        $_SESSION['messages']['errors'][$file] = 'there is no such file as => /'.$file.'<br>';
      } else {
        unset($_SESSION['messages']['errors'][$file]);
      }
    }
  }
}

function load_css($array)
{
  if($array) {
    foreach($array as $item) {
      unset($_SESSION['messages']['errors']['css']);      
      echo('<link rel="stylesheet" type="text/css" href="'.$item.'">');
    }
  } else {
    $_SESSION['messages']['errors']['css'] = 'there is no included stylesheets for load_css() *.css => /core/libraries.php<br>';
  }
}

function load_js($array)
{
  if($array) {
    foreach($array as $item) {
      unset($_SESSION['messages']['errors']['js']);      
      echo('<script src="'.$item.'"></script>');
    }
  } else {
    $_SESSION['messages']['errors']['js'] = 'there is no included scripts for load_js() *.js => /core/libraries.php<br>';
  }
}