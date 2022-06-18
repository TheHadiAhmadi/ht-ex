<script>
  import { onMount } from "svelte";
  export let bcd;
  let browsers = [];
  let browserData = [];
  onMount(() => {
    for (const key in bcd) {
      if (Object.hasOwnProperty.call(bcd, key)) {
        const element = bcd[key];
        for (const key2 in element) {
          if (Object.hasOwnProperty.call(element, key2)) {
            if (browsers.includes(key2)) {
              continue;
            }
            browsers.push(key2);
          }
        }
      }
    }
    browsers = browsers;

    browserData = Object.entries(bcd).map(([key, value]) => {
      return {
        attr: key,
        data: value,
      };
    });
  });
</script>

<h3 class="pt-4">Browser Compatabilty</h3>
<div class="overflow-scroll py-4">
  <table class="w-full text-center">
    <thead class="">
      <tr class=" divide-x-2 divide-green-400 text-white shadow-lg text-sm">
        <th class="p-2  font-light">attribute</th>
        {#each browsers as browser}
          <th class="py-2 px-4">
            {browser}
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each browserData as browser}
        <tr class="divide-y divide-x divide-green-400">
          <td class="p-1">{browser.attr}</td>
          {#each Object.entries(browser.data) as value}
            <td
              class={`${value[1] ? "text-green-400" : "text-red-500"}`}
            >
              {value[1]}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
</style>
