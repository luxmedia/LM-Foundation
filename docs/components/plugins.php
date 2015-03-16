<section class="gs-modal">
	<a href="#" data-reveal-id="firstModal" class="btn">Click me to Reveal a Modal</a>
	<div id="firstModal" class="reveal-modal" data-reveal>
		<h2>This is a modal.</h2>
		<p>Reveal makes these very easy to summon and dismiss. The close button is simply an anchor with a unicode character icon and a class of <code>close-reveal-modal</code>. Clicking anywhere outside the modal will also dismiss it.</p>
		<p>Finally, if your modal summons another Reveal modal, the plugin will handle that for you gracefully.</p>
		<p><a href="#" data-reveal-id="secondModal" class="btn btn--secondary">Second Modal...</a></p>
		<a class="close-reveal-modal">&#215;</a>
	</div>
	<div id="secondModal" class="reveal-modal" data-reveal>
		<h2>This is a second modal.</h2>
		<p>See? It just slides into place after the other first modal. Very handy when you need subsequent dialogs, or when a modal option impacts or requires another decision.</p>
		<a class="close-reveal-modal">&#215;</a>
	</div>
</section>

<h4>Abide</h4>
<form data-abide>
	<div class="name-field">
		<label>Today&#39;s date&nbsp; <small>required</small>
			<input type="text" placeholder="Type in text to this form to test the validation" pattern="month_day_year">
		</label>
		<small class="error">If you didn&#39;t put in a date in the format &#39;mm/dd/yyyy,&#39;&#39; this error should appear.</small>
	</div>
</form>
