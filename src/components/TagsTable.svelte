<script>
  import { onMount } from "svelte";
  import TagInfo from "./TagInfo.svelte";

  let data = [];

  onMount(async () => {
    // const result = JSON.parse(rawData)
    console.log("fetching");
    const response = await fetch("http://localhost:3000/api");
    const result = await response.json();
    console.log(result);
    data = result;
  });
</script>

<div class="px-20">
  {#if data.length === 0}
   <div class="flex justify-center"> <button class="btn loading shadow-xl">loading</button></div>
  {:else}
    <table class="w-full">
      <thead>
        <tr class="bg-green-400 text-white shadow-lg ">
          <th class="p-3 font-light text-xl ">Tag</th>
          <th class="p-3 font-light text-xl ">Description</th>
          <th class="p-3 font-light text-xl"> Attributes </th>
          <th class="p-3 font-light text-xl">Examples</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-green-400">
        {#each data as tag (tag.id)}
          <TagInfo {tag} />
        {/each}
      </tbody>
    </table>
  {/if}
</div>
