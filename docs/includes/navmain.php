<?php

// NAVIGATION

require_once('functions.php');

?>

<li>
	<a href="index.php" class="">Components</a>
</li>
<li class="has-dropdown">
	<a href="index.php?type=templates&content=index" class="">Templates</a>
	<ul class="dropdown">
		<?php echo render_nav("templates"); ?>
	</ul>
</li>