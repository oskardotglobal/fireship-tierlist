<script lang="ts">
  import Tierlist from "./lib/Tierlist.svelte"
</script>

<main>
  <img src="https://fireship.io/img/logo.svg" alt="Fireship logo" class="logo" />
  <h1>Fireship programming language tierlist</h1>

  <div class="card">
    <Tierlist />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 12em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
