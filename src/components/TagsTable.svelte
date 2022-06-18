<script>
  import { onMount } from "svelte";
  import TagInfo from "./TagInfo.svelte";

  let data = [];

  onMount(async () => {
    // const result = JSON.parse(rawData)
    console.log("fetching");
    const response = await fetch(window.location.href + "api");
    const result = await response.json();
    console.log(result);
    data = result;
  });

  let searchText = "";
  $: filteredData =
    searchText === ""
      ? data
      : data.filter((tag) => {
          return tag.tag.toLowerCase().includes(searchText.toLowerCase());
        });
</script>

<div class="px-20">
  {#if data.length === 0}
    <div class="flex justify-center">
      <button class="btn loading shadow-xl">loading</button>
    </div>
  {:else}
    <div class="flex justify-center items-center pb-3">
      <input
      type="search"
      class="p-2 bg-transparent focus:outline-none border-2 border-green-400 rounded-lg"
      placeholder="search tag"
      bind:value={searchText}
    />
    </div>
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
        {#each filteredData as tag (tag.id)}
          <TagInfo {tag} />
        {/each}
      </tbody>
    </table>
  {/if}
</div>
