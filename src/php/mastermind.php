<?php
  header('Access-Control-Allow-Origin: http://localhost:3000');
  $malPlacer = 0;
  $correct = 0;

  if (substr_count($_POST["proposition"], 'r') != 0 && substr_count($_POST["solution"], 'r') != 0)
  {
    if (substr_count($_POST["proposition"], 'r') <= substr_count($_POST["solution"], 'r'))
    {
      $malPlacer += substr_count($_POST["proposition"], 'r');
    } else {
      $malPlacer += substr_count($_POST["solution"], 'r');
    }
  }
  
  if (substr_count($_POST["proposition"], 'b') != 0 && substr_count($_POST["solution"], 'b') != 0)
  {
    if (substr_count($_POST["proposition"], 'b') <= substr_count($_POST["solution"], 'b'))
    {
      $malPlacer += substr_count($_POST["proposition"], 'b');
    } else {
      $malPlacer += substr_count($_POST["solution"], 'b');
    }
  }

  if (substr_count($_POST["proposition"], 'j') != 0 && substr_count($_POST["solution"], 'j') != 0)
  {
    if (substr_count($_POST["proposition"], 'j') <= substr_count($_POST["solution"], 'j'))
    {
      $malPlacer += substr_count($_POST["proposition"], 'j');
    } else {
      $malPlacer += substr_count($_POST["solution"], 'j');
    }
  }

  if (substr_count($_POST["proposition"], 'v') != 0 && substr_count($_POST["solution"], 'v') != 0)
  {
    if (substr_count($_POST["proposition"], 'v') <= substr_count($_POST["solution"], 'v'))
    {
      $malPlacer += substr_count($_POST["proposition"], 'v');
    } else {
      $malPlacer += substr_count($_POST["solution"], 'v');
    }
  }

  $arrSolution = str_split($_POST['solution']);
  $arrProposition = str_split($_POST['proposition']);

  for ($i = 0; $i <= 3; $i++)
  {
    if ($arrProposition[$i] == $arrSolution[$i])
    {
      $malPlacer -= 1;
      $correct += 1;
    }
  }
  $malPlacer = (string) $malPlacer;
  $correct = (string) $correct;
  array_push($arrProposition, $malPlacer, $correct);
  header('Content-Type: application/json');
  echo json_encode($arrProposition);
?>