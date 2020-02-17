<script>
  import Button from "./Button.svelte";
  import WordsRepository from "./repo.js";
  import Dice from './dice.js';
  import en from './en.txt';

//import Dice from "./dice.js";
  var words = null;

</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<main>
	<h1>Diceware passwrod generator in Svelte</h1>
	<Button />
</main>