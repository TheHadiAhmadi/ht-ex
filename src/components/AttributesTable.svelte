<script>
    export let attributes;
</script>
<table>
    <thead>
        <tr class="bg-green-400 text-white shadow-lg text-sm">
            <th class="p-1 font-light ">Name</th>
            <th class="p-1 font-light ">Description</th>
        </tr>
    </thead>
    <tbody>
        {#if attributes.length === 0}
            <tr>
                <td colspan="2" class="text-center">Loading</td>
            </tr>
        {:else}
            {#each attributes as attribute }
                <tr>
                    <td>
                        {attribute.name}
                    </td>
                    <td>
                        {@html attribute.description}
                    </td>
                </tr>
            {/each}
        {/if}
</table>