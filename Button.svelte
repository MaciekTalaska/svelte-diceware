<script>
  import getWordsMap from "./repo.js";
  import getRandom from './dice.js';
  import { onMount } from "svelte";


  const defaultSeparator = "-";
  const MAX_PASS_LENGTH = 10;
  const MIN_PASS_LENGTH = 4;
  const defaultLength = MIN_PASS_LENGTH;
  const defaltLanguage = "en";

	let passwordLength = defaultLength;
	let password = "";
	let separator = defaultSeparator;
	let language = defaltLanguage;
	let repository = new Map();


	onMount(async function() {
		let words =  await getWordsMap(language);
		repository.set(language, words);
	})

	function generatePassword() {
		password = "";
		let words = repository.get(language).words;
		for (var i = 0; i < passwordLength; i++ ) {
			let diceCount = repository.get(language).diceCount;
			let key =  getRandom() % repository.get(language).size; //rollDices(diceCount);
			let newWord = repository.get(language).words[key];  //words.get(key);
			if (password !== "") {
				password += separator + newWord
			} else {
				password = newWord;
			}
		}
	}

	function validatePasswordLength() {
		if (passwordLength > MAX_PASS_LENGTH) {
			passwordLength = MAX_PASS_LENGTH;
		}
		if (passwordLength < MIN_PASS_LENGTH) {
			passwordLength = MIN_PASS_LENGTH;
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
		
		/*margin: 0 auto;*/
		display: inline-grid;
	}

	.column-left {
		float: left;
		white-space: nowrap;
	}

	.column-right {
		width: 300px;
		float: right;
		box-sizing: border-box;
	}

</style>

<div class="container">
	<div>
		<label class="column-left" for="language_ctrl">language:</label>
		<select 	class="column-right"
							id="language_ctrl" 
							bind:value={language} 
							on:change="{async (e) => {let words = await getWordsMap(language); repository.set(language, words); } }"
							>
			<option value="en">English</option>
			<option value="pl">Polish</option>
			<option value="fi">Finnish</option>
			<option value="mi">Maori</option>
		</select>
	</div>
	<div>
		<label 	class="column-left"
					 	for="password_ctrl">words per password (4-10):</label>
		<input 	id="password_ctrl" 	
						class="column-right"
					 	type="number" 
					 	bind:value={passwordLength} 
					 	onkeyup="this.value=this.value.replace(/[^\d]/,'');"
					 	on:change="{validatePasswordLength}"
					 	min=4 max=10 vlaue={defaultLength}/>
	</div>
	<div>
			<label 	class="column-left" 
						 	for="separator_ctrl">separator:</label>
			<input 	id="separator_ctrl" 
							class="column-right" 
							bind:value={separator} />
	</div>
	<div>
		<button on:click={generatePassword}>
			Generate password
		</button>
	</div>
	<p>{password}</p>
</div>
