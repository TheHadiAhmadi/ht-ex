<script>
  import Modal from "./Modal.svelte";
  export let tag;
</script>

<Modal>
  <h3 class="text-lg font-bold">Examples</h3>
  <div class="flex flex-row justify-between h-96">
    <!-- {JSON.stringify(tag)} -->
    <ul class="flex flex-col items-center px-4 overflow-y-scroll w-2/12">
      {#each tag.attributes as attribute (attribute.name)}
        <li class="w-full text-center py-3">
          <button class="btn w-full">
            {attribute.name}
          </button>
        </li>
      {/each}
    </ul>
    <ul width="w-6/12">
      <li>hi</li>
    </ul>
    <div class="border-2 rounded border-green-500 w-4/12">
        <h3 class="text-center p-2">Result</h3>
    </div>
  </div>
</Modal>
