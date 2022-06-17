<script>
  import { onMount } from "svelte";
  // import rawData from '../data.json'
  import TagInfo from "./TagInfo.svelte";

  let data = [];

  onMount(async () => {
    // const result = JSON.parse(rawData)
      console.log('fetching')
    const response = await fetch(
      "https://raw.githubusercontent.com/ESMAT001/utils101/master/data.json"
    );
    const result = await response.json();
    console.log(result)
    data = result;
  });
</script>

<div class="p-4">
  <table class="w-full">
    <thead>
      <tr class="bg-green-400 text-white shadow-lg ">
        <th class="p-3 font-light text-xl ">Tag</th>
        <th class="p-3 font-light text-xl ">Description</th>
        <th class="p-3 font-light text-xl"> Attributes </th>
        <th class="p-3 font-light text-xl">Examples</th>
      </tr>
    </thead>
    <tbody class="divide-y-2 divide-orange-500">
      {#if data.length === 0}
        <tr>
          <td colspan="4" class="text-center">Loading</td>
        </tr>
      {:else}
        {#each data as tag (tag.tag+"101")}
          <TagInfo {tag} />
        {/each}
      {/if}
    </tbody>
  </table>
</div>
