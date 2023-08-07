<script lang="ts"> 
  import Tierlist from './lib/Tierlist.svelte'
</script>

<main>
    <img src="https://fireship.io/img/logo.svg" alt="Fireship logo" class="logo" />
    <h1>The definitive programming <br /> language tier list</h1>
  
    <p>
        .. as curated by the Fireship discord server.
        <br />
        <br />
        <button><a href="https://forms.gle/biQj3eAVs7sZHpVv5">Fill out the form now</a></button>
        <br />
        <br />
        Data is collected from an auto-generated google sheet. Built with Svelte & Deno Deploy.
    </p>
    
    <hr />

    <div class="card w-100 p-2">
        <Tierlist />
    </div>
</main>

<footer>
    <p>Some styles yoinked from https://github.com/SuperFola/TierListMaker</p>
</footer>

<style>
  .logo {
    height: 12em;
    padding: 1.5em;
    will-change: filter;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }

  footer p {
      color: #888;
  }

  hr {
      margin-top: 3em;
      margin-bottom: 3em;
  }
</style>
