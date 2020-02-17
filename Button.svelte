<script>
  import WordsRepository from "./repo.js";
  import Dice from './dice.js';
	import en from './en.txt';
	
	var diceCount = 4;
	var passwordLength = 4;
  var words = WordsRepository.getWords(en);

	let password = "";
	let separator = "-"

	function generatePassword() {
		password = "";
		for (var i = 0; i < passwordLength; i++ ) {
			let key = Dice.rollDices(diceCount);
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
