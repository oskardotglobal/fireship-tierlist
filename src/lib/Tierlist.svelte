<script lang="ts">
    import { fetch_data } from "../lib/data.ts";

    const tiers = [
      "S",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    const promise = fetch_data();
</script>

{#await promise}

    <p>Loading..</p>

{:then data}

    <table>
        <thead>
            <tr>
                <th scope="col" class="col-1 text-center">Tier</th>
                <th scope="col" class="col-1 text-center">Languages</th> 
            </tr>
        </thead>

        <tbody>
        {#each tiers as tier}
            {#if data[tier].length > (window.innerWidth > 800 ? 8 : 4)}
                {#each data[tier].reduce((a, _, i) => (i % (window.innerWidth > 800 ? 8 : 4) === 0 ? a.concat([data[tier].slice(i, i + (window.innerWidth > 800 ? 8 : 4))]) : a), []) as langs, i}   
                    <tr> 
                        {#if i === 0}
                            <th class={`text-center align-middle tlm-bgcolor-${tier.toLowerCase()}`}>{tier}</th>
                        {:else}
                            <th class={`text-center align-middle tlm-bgcolor-${tier.toLowerCase()}`}></th>
                        {/if}

                        {#each langs as lang}
                            <td>
                                <p>{lang[0]} <br/> ({lang[1].toFixed(3)})</p>
                            </td>
                        {/each}
                    </tr>
                {/each} 
            {:else}
                
            <tr> 
                <th class={`text-center align-middle tlm-bgcolor-${tier.toLowerCase()}`}>{tier}</th>

                {#each data[tier] as lang}
                    <td>
                        <p>{lang[0]} <br/> ({lang[1].toFixed(3)})</p>
                    </td>
                {/each}
            </tr>

            {/if}
        {/each}
        </tbody>
    </table>

{/await}

<style>

tr {
  height: 6em;
}

th, td {
  height: 6em;
  width: 6em;
}

table {
  min-width: unset;
}

@media screen and (max-width: 800px) {
  tr {
    height: 2em;
  }

  th, td {
    height: 2em;
    width: 2em;
  }
}
</style>
