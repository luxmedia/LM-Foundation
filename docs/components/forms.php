<form>
	<fieldset>
		<legend>Fieldset Legend</legend>
		<div class="row">
			<div class="lrg-12 col">
				<label>Input Label
					<input type="text" placeholder="lrg-12.col">
				</label>
			</div>
		</div>
		<div class="row">
			<div class="lrg-4 col">
				<label>Input Label
					<input type="text" placeholder="lrg-4.col">
				</label>
			</div>
			<div class="lrg-4 col">
				<label>Input Label
					<input type="text" placeholder="lrg-4.col">
				</label>
			</div>
			<div class="lrg-4 col">
				<div class="row row--cllps">
					<label>Input with postfix</label>
					<div class="sml-9 col">
						<input type="text" placeholder="sml-9.col">
					</div>
					<div class="sml-3 col">
						<span class="postfix">.com</span>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="lrg-6 col">
				<label>Select Box
					<select>
						<option value="husker">Husker</option>
						<option value="starbuck">Starbucks</option>
						<option value="hotdog">Hot Dog</option>
						<option value="apollo">Apollo</option>
					</select>
				</label>
			</div>
			<div class="lrg-6 col">
				<label>Select Box Disabled
					<select disabled="disabled">
						<option value="husker">Husker</option>
						<option value="starbuck">Starbucks</option>
						<option value="hotdog">Hot Dog</option>
						<option value="apollo">Apollo</option>
					</select>
				</label>
			</div>
		</div>
		<div class="row">
			<div class="lrg-6 col">
				<label>Choose Your Favorite</label>
				<input type="radio" name="pokemon" value="Red" id="pokemonRed"><label for="pokemonRed">Red</label>
				<input type="radio" name="pokemon" value="Blue" id="pokemonBlue"><label for="pokemonBlue">Blue</label>
			</div>
			<div class="lrg-6 col">
				<label>Check These Out</label>
				<input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
				<input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
			</div>
		</div>
		<div class="row">
			<div class="lrg-12 col">
				<label>Textarea Label
					<textarea placeholder="lrg-12.col - Try to resize me! It works vertically only to avoid layout clipping."></textarea>
				</label>
			</div>
		</div>
	</fieldset>
</form>