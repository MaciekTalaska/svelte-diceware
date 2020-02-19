<script>
  import getWordsMap from "./repo.js";
  import rollDices from './dice.js';

	var diceCount = 4;
	var passwordLength = 4;
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
	}
</style>

<div>
	<button on:click={generatePassword}>
		Generate password
	</button>
	<p>generated password:</p>
	<p>{password}</p>
</div>
