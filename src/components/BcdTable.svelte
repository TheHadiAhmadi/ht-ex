<script>
  export let bcd;
</script>

<h3 class="pt-4">Browser Compatabilty</h3>
<table class="w-full">
  <thead>
    <tr class="bg-green-400 text-white shadow-lg text-sm">
      <th class="p-1  font-light">attribute</th>
      {#each bcd as browser}
          <th class="p-1 font-light">
              {browser.browser}
          </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each bcd as browser}
          <tr class="p-1 font-light">
              {browser.browser}
          </tr>
      {/each}
  </tbody>
</table>
