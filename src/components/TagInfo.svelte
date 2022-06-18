<script>
  import AttributesModal from "./AttributesModal.svelte";
  import ExamplesModal from "./ExamplesModal.svelte";
  export let tag;
</script>

<tr class="hover:bg-gray-700 cursor-pointer transition-all duration-300">
  <td class="text-center">
    {tag.tag}
  </td>
  <td class="p-4">
    {tag?.description ?? "No description"}
  </td>
  <td class="space-y-2 p-3">
    <AttributesModal {tag} />
    <ExamplesModal {tag} />
  </td>

</tr>
