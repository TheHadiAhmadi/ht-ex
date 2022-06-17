<script>
  export let attributes;
</script>

{#if attributes.length === 0}
  <div class="p-4">
    <h3>No Attributes</h3>
  </div>
{:else}
  <table class="w-full">
    <thead>
      <tr class="bg-green-400 text-white shadow-lg">
        <th class="p-2 font-light w-2/6">Name</th>
        <th class="p-2 font-light w-4/6">Description</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-green-400">
      {#each attributes as attribute}
        <tr class="hover:bg-gray-700 cursor-pointer transition-all duration-300">
          <td class="text-center p-2">
            {attribute.name}
          </td>
          <td class="p-2">
            {@html attribute.description}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}
