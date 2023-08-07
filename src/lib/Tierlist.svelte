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
        {#each tiers as tier}
            <tr> 
                <th>{tier}</th>

                {#each data[tier] as lang}
                    <td>{lang[0]}</td>
                {/each}
            </tr>
        {/each}
    </table>

{/await}
