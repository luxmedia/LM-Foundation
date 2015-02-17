<?php

// TOPBAR NAVIGATION

?>

<div class="topbar__wrap topbar__wrap--fixed contain-to-grid">
	<nav class="topbar expanded hide-for-sml-only" data-topbar role="navigation">
	  <div class="logo-wrap">
	    <div class="logo">
	      <h2><a href="index.php">LM-Foundation</a></h2>
	    </div>
	  </div>

	  <section class="topbar-section">
	    <div class="site-search">
	      <form>
	          <input type="search" placeholder="Stichwort, Marke, Artikelnummer">
	          <a href="#" class="btn btn--exp btn--flat btn--sml btn__search">Go</a>
	      </form>
	    </div>
	    <ul class="right">
	      <?php include("navmain.php") ?>
	    </ul>
	  </section>
	</nav>

	<!-- Mobile only navigation -->
	<nav class="tab-bar expanded show-for-sml-only">
	  <a class="left-off-canvas-toggle menu-icon" aria-expanded="false"><span>LM-Foundation</span></a>
	</nav>
</div>