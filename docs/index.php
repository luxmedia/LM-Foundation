<?php

// error_reporting(E_ALL);
// init_set("display_errors",1);

// GLOBAL FUNCTIONS
require_once('includes/functions.php');

// LOAD HTML HEAD
require_once("includes/head.php");

$content = "components/index.php";

// LOAD MAIN CONTENT
if ($_GET["content"]) { 
  if ($_GET["type"] == "templates") {
    $content = "templates/" . strtolower($_GET["content"]) . ".php";
  } else if ($_GET["type"] == "components") {
     $content = "components/" . strtolower($_GET["content"]) . ".php";
  }
}

?>

<body class="antialiased hide-extras <?php echo $_GET['type'] ?>">

	<div class="marketing off-canvas-wrap" data-offcanvas>

		<?php
		// LOAD MAIN NAVIGATION
		require_once("includes/topnav.php");
		?>

		<div class="inner-wrap">

			<?php
			// LOAD FOOTER
			require_once("includes/offcanvas-nav.php")
			?>

			<?php
			// LOAD CONTENT
			include($content);
			?>
			
		</div>

	</div>


	<?php
	// LOAD FOOTER
	require_once("includes/footer.php")
	?>

</body>
</html>