<script>
  import getWordsMap from "./repo.js";
  import rollDices from './dice.js';

	var diceCount = 4;
	let passwordLength = 4;
	var words =  getWordsMap();

	let password = "";
	let separator = "-"

	function generatePassword() {
		password = "";
		for (var i = 0; i < passwordLength; i++ ) {
			let key = rollDices(diceCount);
			let newWord = words.get(key);
			if (password !== "") {
				password += separator + newWord
			} else {
				password = newWord;
			}
		}
}
</script>

<style>
	button {
	  background: #ff3e00;
	  color: white;
	  border: none;
	  padding: 8px 12px;
	  border-radius: 2px;
	  max-width: 60%;
	}
	div {
		padding-bottom: 10px;
	}
	.container {
		width: 600px;
		border: 1px solid #ffffff;
		display: inline-grid;
	}
	.column {
		display: inline-block;
		width: 50%;
	}
</style>

<div class="container">
	<div >
		<label class="column">separator:</label>
		<input class="column" bind:value={separator} />
	</div>
	<div>
		<label class="column">password length:</label>
		<input class="column" type="number" bind:value={passwordLength} min=4 max=10/>
	</div>
	<div>
		<button on:click={generatePassword}>
			Generate password
		</button>
	</div>
	<p>generated password:</p>
	<p>{password}</p>
</div>
