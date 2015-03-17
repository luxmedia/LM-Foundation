<section role="main" class="scroll-container">

	<div class="row">
		<div class="sml-12 col">
			<h1 id="getting-started">Getting Started</h1>
			<h3 class="subheader">Getting started with Foundation is easy. Whether you are a master of Sass, building a new app, or making your existing site responsive, we&#39;ve got you covered.</h3>

			<hr>

			<div class="row">
				<div class="sml-12 col">
					<h2>What is Foundation?</h2>
					<h2 class="subheader">Foundation is the most advanced, responsive front-end framework in the world. The framework is mobile friendly and ready for you to customize it any way you want to use it.</h2>
					<div class="row whatis">
						<div class="lrg-12 col">
							<p>Millions of designers and engineers use Foundation as part of their workflows. It was the first framework to introduce the concepts of responsive design, semantics, mobile first and partials. It&#39;s also compatibile with most browsers and devices. Foundation is the professional choice for designers and engineers.</p> 
						</div>
					</div>
				</div>
			</div>

	<hr>

	<div class="row">
		<div class="sml-12 col">
			<h2>What comes with LM-Foundation?</h2>
			<h2 class="subheader">Foundation has a ton of components and structures to help you build a responsive site without having to worry about all of your baseline, foundational (see what we did there?) code.</h2>
			<!--<p>You can see all of Foundation&#39;s components on one page called the <a href="components/kitchen_sink.html">Kitchen Sink</a> or check out a small snapshot of what Foundation includes: </p>-->
		</div>
	</div>

	<hr>

	<!--================================= 
	Grid
	==================================-->

	<section class="grid-example">
		<div class="row">
			<div class="lrg-5 col">
				<h3 class="button-title">The Grid</h3>
				<p>Our grid works on almost any device and has support for nesting, source ordering, offsets and device presentation. Frankly, it&#39;s a little too easy. In no time, you&#39;ll be creating complex layouts like this.</p> 
				<p>Need a head start on some of your designs or some extra inspiration to see the full potential of a responsive front-end framework?</p>
				<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="grid__modal">HTML</a></span>
			</div>
			<div class="lrg-7 col">
				<?php include("grid.php") ?>
			</div>
		</div>

		<div id="grid__modal" class="reveal-modal lrg" data-reveal="">
			<h3>Grid Example</h3>
			<textarea class="codebit">       
				<?php echo htmlentities(include("grid.php"), ENT_QUOTES) ?>
			</textarea>
			<a class="close-reveal-modal">×</a>
		</div>

	</section>

	<hr class="dashed">

	<!--================================= 
	Buttons
	==================================-->

	<div class="row">
		<div class="lrg-5 col">
			<h3 class="button-title">Buttons (JS)</h3>
			<p>Clicking on stuff is awesome, so hook up your users with buttons to do stuff. There are some lightweight button styles for size, presentation, and color to make customizing your own button as easy as adding a class.</p>
			<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="modal__btn">HTML</a></span>
		</div>
		<div class="lrg-7 col">
			<?php include("buttons.php") ?>
		</div>
	</div>

	<div id="modal__btn" class="reveal-modal lrg" data-reveal="">
		<h3>Buttons Example</h3>
		<textarea class="codebit">       
			<?php echo htmlentities(include("buttons.php"), ENT_QUOTES) ?>
		</textarea>
		<a class="close-reveal-modal">×</a>
	</div>

	<hr class="dashed">

	<!--================================= 
	Navigation
	==================================-->

	<div class="row">
		<div class="lrg-5 col">
			<h3 class="button-title">Navigation (JS)</h3>
			<p>People have to get around. Navigation styles in Foundation include: a robust top bar with dropdowns; button; search bars; a cool icon bar; a bitchin&#39; off-canvas implementation; and a bunch of other navigational constructs.</p>
			<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="modal__navigation">HTML</a></span>
		</div>
		<div class="lrg-7 col">
			<?php include("navigation.php") ?>
		</div>
	</div>

	<div id="modal__navigation" class="reveal-modal lrg" data-reveal="">
		<h3>Navigation Example</h3>
		<textarea class="codebit">       
			<?php echo htmlentities(include("navigation.php"), ENT_QUOTES) ?>
		</textarea>
		<a class="close-reveal-modal">×</a>
	</div>

	<hr class="dashed">

<!--================================= 
	Pagination
	==================================-->
	<section class="pagination-example">
		<div class="row">
			<div class="col lrg-5">
				<h3>Pagination</h3>
				<p>For use on pages with huge amounts of items. Like shop category pages.</p>
				<p>Comes with 2 different styles: normal and outline</p>
				<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="modal__pager">HTML</a></span>
			</div>
			<div class="col lrg-7">
				<?php include("pager.php") ?>
			</div>
		</div>
	</section>

	<div id="modal__pager" class="reveal-modal lrg" data-reveal="">
		<h3>Pager Example</h3>
		<textarea class="codebit">       
			<?php echo htmlentities(include("pager.php"), ENT_QUOTES) ?>
		</textarea>
		<a class="close-reveal-modal">×</a>
	</div>

	<hr class="dashed">

<!--================================= 
	Plugins
	==================================-->

	<section class="plugins-example">
		<div class="row">
			<div class="lrg-5 col">
				<h3 class="button-title">Plugins (JS)</h3>
				<p>We&#39;ve included a ton of JavaScript plugins written just for Foundation: pop-up modals (Reveal); add a required validation for forms (Abide); create content tabs; alerts; and tons more.</p>
				<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="modal__plugins">HTML</a></span>
			</div>
			<div class="lrg-7 col">
				<?php include("plugins.php") ?>
			</div>
		</div>
	</section>

	<div id="modal__plugins" class="reveal-modal lrg" data-reveal="">
		<h3>Plugins Example</h3>
		<textarea class="codebit">       
			<?php echo htmlentities(include("plugins.php"), ENT_QUOTES) ?>
		</textarea>
		<a class="close-reveal-modal">×</a>
	</div>

	<hr>

<!--================================= 
	Accessible Tabs
	==================================-->

	<h3>Accessible Tabs (JS)</h3>
	<div class="row">

		<div class="col lrg-5">
			<p> Instead of foundations origin tabs plugin we use the jquery plugin "accessible tabs". This ensures an accessible and sequential html structure of tab heading and tabcontent if javascript is disabled.</p>
			<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="modal__tabs">HTML</a></span>
		</div>

		<div class="col lrg-7">
			<?php include("tabs.php") ?>
		</div>

	</div>

	<div id="modal__tabs" class="reveal-modal lrg" data-reveal="">
		<h3>Tabs Example</h3>
		<textarea class="codebit">       
			<?php echo htmlentities(include("tabs.php"), ENT_QUOTES) ?>
		</textarea>
		<a class="close-reveal-modal">×</a>
	</div>

	<hr>

<!--================================= 
	Alerts
	==================================-->

	<h3>Alerts</h3>
	<div class="row">

		<div class="col lrg-5">
			<p>Alert messages. The alerts.styl provides an opaque and a soft version of alerts. Most common ist the soft variant, which is used here. The BG Icons of the alert states are SVG-based, of course.</p>
			<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="modal__alerts">HTML</a></span>
		</div>

		<div class="col lrg-7">
			<?php include("alerts.php") ?>
		</div>

	</div>

	<div id="modal__alerts" class="reveal-modal lrg" data-reveal="">
		<h3>Alerts Example</h3>
		<textarea class="codebit">       
			<?php echo htmlentities(include("alerts.php"), ENT_QUOTES) ?>
		</textarea>
		<a class="close-reveal-modal">×</a>
	</div>

	<hr>

<!--================================= 
	Breadcrumbs
	==================================-->

	<h3>Breadcrumbs</h3>
	<div class="row">

		<div class="col lrg-5">
			<p>Breadcrumbs navigation.</p>
			<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="modal__breadcrumbs">HTML</a></span>
		</div>

		<div class="col lrg-7">
			<?php include("breadcrumbs.php") ?>
		</div>

	</div>

	<div id="modal__breadcrumbs" class="reveal-modal lrg" data-reveal="">
		<h3>Breadcrumbs Example</h3>
		<textarea class="codebit">       
			<?php echo htmlentities(include("breadcrumbs.php"), ENT_QUOTES) ?>
		</textarea>
		<a class="close-reveal-modal">×</a>
	</div>

	<hr>

<!--================================= 
	Thumbnails
	==================================-->

	<h3>Thumbnails</h3>
	<div class="row">

		<div class="col lrg-5">
			<p>Nice image thumbnails.</p>
			<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="modal__thumbs">HTML</a></span>
		</div>

		<div class="col lrg-7">
			<?php include("thumbs.php") ?>
		</div>

	</div>

	<div id="modal__thumbs" class="reveal-modal lrg" data-reveal="">
		<h3>Thumbnails Example</h3>
		<textarea class="codebit">       
			<?php echo htmlentities(include("thumbs.php"), ENT_QUOTES) ?>
		</textarea>
		<a class="close-reveal-modal">×</a>
	</div>

	<hr>

<!--================================= 
	Forms
	==================================-->

	<h3>Forms</h3>
	<div class="row">

		<div class="col lrg-5">
			<p>Form with different components. CSS only styled.</p>
			<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="modal__forms">HTML</a></span>
		</div>

		<div class="col lrg-7">
			<?php include("forms.php") ?>
		</div>

	</div>

	<div id="modal__forms" class="reveal-modal lrg" data-reveal="">
		<h3>Forms Example</h3>
		<textarea class="codebit">       
			<?php //echo htmlentities(include("forms.php"), ENT_QUOTES) ?>
		</textarea>
		<a class="close-reveal-modal">×</a>
	</div>

	<hr>

<!--================================= 
	Switches
	==================================-->

	<h3>Switches (JS)</h3>
	<div class="row">

		<div class="col lrg-5">
			<p>Switches using css pseudo-classes and JS</p>
			<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="modal__switches">HTML</a></span>
		</div>

		<div class="col lrg-7">
			<?php include("switches.php") ?>
		</div>

	</div>

	<div id="modal__switches" class="reveal-modal lrg" data-reveal="">
		<h3>Switches Example</h3>
		<textarea class="codebit">       
			<?php echo htmlentities(include("switches.php"), ENT_QUOTES) ?>
		</textarea>
		<a class="close-reveal-modal">×</a>
	</div>

	<hr>

<!--================================= 
	Range Slider
	==================================-->

	<h3>Range Slider (JS)</h3>
	<div class="row">

		<div class="col lrg-5">
			<p>Range Slider (JS)</p>
			<div class="alert alert--warning">TODO: Style and position output boxes correctly!! </div>
			<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="modal__rangeslider">HTML</a></span>
		</div>

		<div class="col lrg-7">
			<?php include("rangeslider.php") ?>
		</div>

	</div>

	<div id="modal__rangeslider" class="reveal-modal lrg" data-reveal="">
		<h3>Range Slider Example</h3>
		<textarea class="codebit">       
			<?php echo htmlentities(include("rangeslider.php"), ENT_QUOTES) ?>
		</textarea>
		<a class="close-reveal-modal">×</a>
	</div>

	<hr>

<!--================================= 
	Labels and Badges
	==================================-->

	<h3>Labels &amp; Badges</h3>
	<div class="row">

		<div class="col lrg-5">
			<p>Various Label styles. Can be usid standalone or inside of buttons.</p>
			<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="modal__labels">HTML</a></span>
		</div>

		<div class="col lrg-7">
			<?php include("labels.php") ?>
		</div>

	</div>

	<div id="modal__labels" class="reveal-modal lrg" data-reveal="">
		<h3>Labels &amp; Badges Example</h3>
		<textarea class="codebit">       
			<?php echo htmlentities(include("labels.php"), ENT_QUOTES) ?>
		</textarea>
		<a class="close-reveal-modal">×</a>
	</div>

	<hr>

<!--================================= 
	Ribbons
	==================================-->

	<h3>Ribbons</h3>
	<div class="row">

		<div class="col lrg-5">
			<p>This component is new and not included in the original foundation fork. Especially in online-stores ribbons are oftern used and very helpful.</p>
			<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="modal__ribbons">HTML</a></span>
		</div>

		<div class="col lrg-7">
			<?php include("ribbons.php") ?>
		</div>

	</div>

	<div id="modal__ribbons" class="reveal-modal lrg" data-reveal="">
		<h3>Ribbons Example</h3>
		<textarea class="codebit">       
			<?php echo htmlentities(include("ribbons.php"), ENT_QUOTES) ?>
		</textarea>
		<a class="close-reveal-modal">×</a>
	</div>

	<hr>

<!--================================= 
	Product Grid
	==================================-->

	<h3>Products Grid</h3>
	<div class="row">

		<div class="col lrg-3">
			<p>This component is new and not included in the original foundation fork.</p>
			<p>The productlist.styl provides two styles for product listings: Grid and List. The columns of the products-grid are controlled using jeet.gs due to its flexibility.</p>
			<p>THe Markup includes microdate and rich snippets for google according to schema.org.</p>
			<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="modal__products-grid">HTML</a></span>
		</div>

		<div class="col lrg-9">
			<?php include("products-grid.php") ?>
		</div>

	</div>

	<div id="modal__products-grid" class="reveal-modal lrg" data-reveal="">
		<h3>Products Grid Example</h3>
		<textarea class="codebit">       
			<?php echo htmlentities(include("products-grid.php"), ENT_QUOTES) ?>
		</textarea>
		<a class="close-reveal-modal">×</a>
	</div>

	<hr>


<!--================================= 
	Product List
	==================================-->

	<h3>Products List</h3>
	<div class="row">

		<div class="col lrg-3">
			<p>Product list for a more detailed view. E.g. including product attributes.</p>
			<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="modal__products-list">HTML</a></span>
		</div>

		<div class="col lrg-9">
			<?php include("products-list.php") ?>
		</div>

	</div>

	<div id="modal__products-list" class="reveal-modal lrg" data-reveal="">
		<h3>Products List Example</h3>
		<textarea class="codebit">       
			<?php echo htmlentities(include("products-list.php"), ENT_QUOTES) ?>
		</textarea>
		<a class="close-reveal-modal">×</a>
	</div>

	<hr>

<!--================================= 
	Checkout Progress Bar
	==================================-->

	<h3>Checkout Progress Bar</h3>
	<div class="row">

		<div class="col lrg-3">
			<p>A component for checkout progress indication.</p>
			<p>CSS only! It's amazing what pseudo classes can do, isn't it?</p>
			<p>Minimum amount of items is: 4</p>
			<p>Maximum amount of items is: 6</p>
			<p>Use "__four", "__five" or "__six" classes for the checkout-progress wrapper to control the item layout</p>
			<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="modal__checkout-progress">HTML</a></span>
		</div>

		<div class="col lrg-9">
			<?php include("checkout-progress.php") ?>
		</div>

	</div>

	<div id="modal__checkout-progress" class="reveal-modal lrg" data-reveal="">
		<h3>Checkout Progress Bar Example</h3>
		<textarea class="codebit">       
			<?php echo htmlentities(include("checkout-progress.php"), ENT_QUOTES) ?>
		</textarea>
		<a class="close-reveal-modal">×</a>
	</div>

	<hr>


<!--================================= 
	Slick Slider
	==================================-->

	<h3>Slick-Slider (JS)</h3>
	<div class="row">

		<div class="col lrg-5">
			<p>This component is new and not included in the original foundation fork. The deprecated Orbit function is used there instead.</p>
			<p>But we use on of the best responsive sliders based on jquery: "slick-slider"</p>
			<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="modal__slick-slider">HTML</a></span>
		</div>

		<div class="col lrg-7">
			<?php include("slick-slider.php") ?>
		</div>

	</div>

	<div id="modal__slick-slider" class="reveal-modal lrg" data-reveal="">
		<h3>Slick-Slider Example</h3>
		<textarea class="codebit">       
			<?php echo htmlentities(include("slick-slider.php"), ENT_QUOTES) ?>
		</textarea>
		<a class="close-reveal-modal">×</a>
	</div>

	<hr>

<!--================================= 
	Tooltips
	==================================-->

	<h3>Tooltips (JS)</h3>
	<div class="row">

		<div class="col lrg-5">
			<p>Tooltips. Can be placed at top, left, right and bottom.</p>
			<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="modal__tooltips">HTML</a></span>
		</div>

		<div class="col lrg-7">
			<?php include("tooltips.php") ?>
		</div>

	</div>

	<div id="modal__tooltips" class="reveal-modal lrg" data-reveal="">
		<h3>Tooltips Example</h3>
		<textarea class="codebit">       
			<?php echo htmlentities(include("tooltips.php"), ENT_QUOTES) ?>
		</textarea>
		<a class="close-reveal-modal">×</a>
	</div>

	<hr>

<!--================================= 
	Tables
	==================================-->

	<h3>Tables</h3>
	<div class="row">

		<div class="col lrg-2">
			<p>Tables. Some basic stylings for tables.</p>
			<span class="html"><a href="#" class="btn btn--flat btn--tny" data-reveal-id="modal__tables">HTML</a></span>
		</div>

		<div class="col lrg-10">
			<?php include("tables.php") ?>
		</div>

	</div>

	<div id="modal__tables" class="reveal-modal lrg" data-reveal="">
		<h3>Tables Example</h3>
		<textarea class="codebit">       
			<?php echo htmlentities(include("tables.php"), ENT_QUOTES) ?>
		</textarea>
		<a class="close-reveal-modal">×</a>
	</div>

	<hr>


</section>