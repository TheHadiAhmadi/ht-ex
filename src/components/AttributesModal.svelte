<script>
  import AttributesTable from "./AttributesTable.svelte";
  import BcdTable from "./BcdTable.svelte";
  import Modal from "./Modal.svelte";
  export let tag;
</script>

<Modal>
  <h3 class="text-lg font-bold">Attributes Info</h3>
  <div class="flex flex-col space-y-4 divide-y divide-gray-400">
    <AttributesTable attributes={tag.attributes} />
    <!-- <BcdTable bcd={tag.browsers} /> -->
  </div>
</Modal>
